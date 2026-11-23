#!/usr/bin/env python3
"""Prepare the local JEE Notes site: localise links and build an all-notes index."""
from __future__ import annotations

import re
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent
MD_ROOT = ROOT / "source-notes"
QUOTED_RE = re.compile(
    r'''((?:href|src)=)(["'])(?:https?:)?//(?:www\.)?jeenotes\.in(/[^"']*)\2''',
    re.I,
)
BARE_RE = re.compile(
    r'''((?:href|src)=)(?:https?:)?//(?:www\.)?jeenotes\.in(/[^\s>]+)''',
    re.I,
)


def localise_links() -> int:
    changed = 0
    for page in ROOT.rglob("*.html"):
        text = page.read_text(encoding="utf-8", errors="replace")
        new, n = QUOTED_RE.subn(r"\1\2\3\2", text)
        new, m = BARE_RE.subn(r"\1\2", new)
        if n + m:
            page.write_text(new, encoding="utf-8", newline="\n")
            changed += n + m
    return changed


def front_matter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8", errors="replace")
    data = {}
    if text.startswith("---\n"):
        block = text.split("---\n", 2)[1]
        for line in block.splitlines():
            if ":" in line:
                k, v = line.split(":", 1)
                data[k.strip()] = v.strip().strip('"')
    return data


def collect_notes() -> dict[str, list[dict]]:
    groups: dict[str, list[dict]] = {}
    for md in sorted(MD_ROOT.rglob("*.md")):
        if md.name == "INDEX.md":
            continue
        rel = md.relative_to(MD_ROOT)
        parts = rel.parts
        if len(parts) < 2:
            section = "General"
        else:
            section = parts[0].replace("-", " ").title()
        meta = front_matter(md)
        href = "/" + "/".join(parts[:-1]) + "/"
        if rel.name == "index.md" and len(parts) == 1:
            href = "/"
        groups.setdefault(section, []).append(
            {
                "title": meta.get("title", rel.stem.replace("-", " ").title()),
                "description": meta.get("description", ""),
                "updated": meta.get("updated", ""),
                "href": href,
            }
        )
    return groups


def build_index() -> None:
    template = BeautifulSoup(
        (ROOT / "physics" / "index.html").read_text(encoding="utf-8", errors="replace"),
        "lxml",
    )
    main = template.find("main")
    article = main.find("article")
    if article:
        article.decompose()

    groups = collect_notes()
    total = sum(len(v) for v in groups.values())

    art = template.new_tag("article", attrs={"class": "subject-index"})
    head = template.new_tag("header", attrs={"class": "si-head"})
    copy = template.new_tag("div", attrs={"class": "si-head__copy"})
    crumb = template.new_tag("nav", attrs={"aria-label": "Breadcrumb", "class": "si-crumb"})
    crumb.append(template.new_tag("a", href="/", string="JEE Notes"))
    crumb.append(" / All Notes")
    copy.append(crumb)
    copy.append(template.new_tag("h1", attrs={"class": "si-title"}, string="All JEE Notes — Complete Index"))
    copy.append(
        template.new_tag(
            "p",
            attrs={"class": "si-lede"},
            string=f"Every one of the {total} locally saved note pages, grouped by subject. Click any row to open the original page in this offline site.",
        )
    )
    input_ = template.new_tag("input", attrs={"id": "note-filter", "class": "input", "placeholder": "Filter notes by title…", "type": "search"})
    copy.append(input_)
    head.append(copy)

    stats = template.new_tag("dl", attrs={"class": "si-stats"})
    for value, label in ((total, "Notes"), (len(groups), "Sections")):
        wrap = template.new_tag("div", attrs={"class": "si-stat"})
        wrap.append(template.new_tag("dd", attrs={"class": "si-stat__n"}, string=str(value)))
        wrap.append(template.new_tag("dt", attrs={"class": "si-stat__label"}, string=label))
        stats.append(wrap)
    head.append(stats)
    art.append(head)

    for section in sorted(groups):
        sec = template.new_tag("section", attrs={"class": "si-body"})
        sec.append(template.new_tag("h2", string=section))
        ol = template.new_tag("ol", attrs={"class": "si-list"})
        for i, note in enumerate(sorted(groups[section], key=lambda x: x["title"]), 1):
            li = template.new_tag("li")
            a = template.new_tag("a", attrs={"class": "si-row", "href": note["href"]})
            a.append(template.new_tag("span", attrs={"class": "si-row__n"}, string=f"{i:02d}"))
            mainspan = template.new_tag("span", attrs={"class": "si-row__main"})
            mainspan.append(template.new_tag("span", attrs={"class": "si-row__title"}, string=note["title"]))
            if note["description"]:
                mainspan.append(template.new_tag("span", attrs={"class": "si-row__topics"}, string=note["description"]))
            a.append(mainspan)
            if note["updated"]:
                a.append(template.new_tag("span", attrs={"class": "si-row__meta"}, string=note["updated"]))
            li.append(a)
            ol.append(li)
        sec.append(ol)
        art.append(sec)

    script = template.new_tag("script")
    script.string = """
document.getElementById('note-filter').addEventListener('input', function (e) {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll('a.si-row').forEach(function (row) {
    row.closest('li').hidden = !row.textContent.toLowerCase().includes(q);
  });
});
"""
    art.append(script)
    main.append(art)

    if template.title:
        template.title.string = "All JEE Notes — Complete Index"
    for tag in template.select('link[rel="canonical"], meta[property="og:url"]'):
        tag["href" if tag.name == "link" else "content"] = "/all-notes/"

    dest = ROOT / "all-notes" / "index.html"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(str(template), encoding="utf-8", newline="\n")


def add_home_link() -> None:
    home = ROOT / "index.html"
    text = home.read_text(encoding="utf-8", errors="replace")
    marker = '<a class="t1-btn t1-btn--ink" href=/physics/>Start with Physics</a>'
    if marker in text and "/all-notes/" not in text:
        text = text.replace(
            marker,
            marker + '<a class="t1-btn t1-btn--line" href=/all-notes/>Browse all notes</a>',
            1,
        )
        home.write_text(text, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    links = localise_links()
    build_index()
    add_home_link()
    print(f"Localised {links} links; built all-notes index and homepage link.")
