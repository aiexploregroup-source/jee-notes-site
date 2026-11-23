#!/usr/bin/env python3
"""Point sitemap.xml and robots.txt at the published GitHub Pages URL."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ORIGINAL = "https://jeenotes.in/"
LIVE = "https://aiexploregroup-source.github.io/jee-notes-site/"

sm = ROOT / "sitemap.xml"
text = sm.read_text(encoding="utf-8", errors="replace")
n = text.count(ORIGINAL)
sm.write_text(text.replace(ORIGINAL, LIVE), encoding="utf-8", newline="\n")

rb = ROOT / "robots.txt"
text = rb.read_text(encoding="utf-8", errors="replace")
text = text.replace(ORIGINAL, LIVE)
text = text.replace("Sitemap: https://aiexploregroup-source.github.io/jee-notes-site/sitemap.xml",
                    "Sitemap: " + LIVE + "sitemap.xml")
rb.write_text(text, encoding="utf-8", newline="\n")
print(f"Updated {n} sitemap URLs and robots.txt sitemap directive.")
