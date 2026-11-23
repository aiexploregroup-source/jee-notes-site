#!/usr/bin/env python3
"""Prefix root-relative URLs with the GitHub Pages project base path.

Idempotent: run as many times as needed. Skips external/protocol-relative URLs
and paths that are already prefixed.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
BASE = "/jee-notes-site"

# Matches the character(s) immediately before a root-relative slash:
#   ="/   ='/   =/    "/    '/    `/    url(/
TOKEN = re.compile(
    r"""(?P<lead>=(?P<q>["'])?|["'`]|url\(\s*)/(?!/)(?P<path>[^\s"'`<>]{1,300})"""
)
# Bare site-root links such as href=/ or href="/" are skipped by TOKEN.
ROOT_ATTR = re.compile(
    r"""((?:href|src|action|formaction|poster)\s*=\s*)(?:(["'])/(?=\2)|/(?=[\s>]))""",
    re.I,
)

SKIP_PREFIXES = ("cdn-cgi/", "jee-notes-site/")


def fix(text: str) -> tuple[str, int]:
    changed = 0

    def repl(m: re.Match) -> str:
        nonlocal changed
        path = m.group("path")
        if path.startswith(SKIP_PREFIXES):
            return m.group(0)
        # Do not touch things like "= / 2" (division) or JSON pointers.
        if not re.match(r"[A-Za-z0-9_.-]", path):
            return m.group(0)
        changed += 1
        return f"{m.group('lead')}{BASE}/{path}"

    def root_repl(m: re.Match) -> str:
        nonlocal changed
        lead, quote = m.group(1), m.group(2)
        changed += 1
        return lead + (quote + BASE + quote if quote else BASE)

    text, _ = TOKEN.subn(repl, text)
    text, _ = ROOT_ATTR.subn(root_repl, text)
    return text, changed


def main() -> None:
    files_changed = 0
    total = 0
    per_ext: dict[str, int] = {}
    for path in sorted(ROOT.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in {".html", ".css", ".js", ".htm"}:
            continue
        # Never rewrite third-party code: minified vendor JS contains regex
        # literals such as /cancel|phase/ that look like root-relative paths.
        if "vendor" in path.parts:
            continue
        if path.name in {"server.mjs", "fix_base_paths.py"}:
            continue
        original = path.read_text(encoding="utf-8", errors="replace")
        new, n = fix(original)
        if n:
            path.write_text(new, encoding="utf-8", newline="\n")
            files_changed += 1
            total += n
            per_ext[path.suffix.lower()] = per_ext.get(path.suffix.lower(), 0) + n
    print(f"Fixed {total} paths in {files_changed} files: {per_ext}")


if __name__ == "__main__":
    main()
