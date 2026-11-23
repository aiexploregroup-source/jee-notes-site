#!/usr/bin/env python3
"""Turn Cloudflare-obfuscated /cdn-cgi email links into working mailto: links."""
from __future__ import annotations

import binascii
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

EMAIL_HREF = re.compile(
    r'''(href\s*=\s*)(["']?)/cdn-cgi/l/email-protection#([0-9a-fA-F]+)\2''',
    re.I,
)
DECODER_SCRIPT = re.compile(
    r'''<script\b[^>]*\bsrc\s*=\s*["']?/cdn-cgi/scripts/[^>"']*["']?[^>]*>\s*</script\s*>''',
    re.I,
)


def decode(code: str) -> str | None:
    try:
        raw = binascii.unhexlify(code)
        if len(raw) < 2:
            return None
        return bytes(b ^ raw[0] for b in raw[1:]).decode("utf-8")
    except (ValueError, UnicodeDecodeError):
        return None


def main() -> None:
    total = 0
    scripts = 0
    emails: set[str] = set()
    for page in sorted(ROOT.rglob("*.html")):
        text = page.read_text(encoding="utf-8", errors="replace")
        text = text.replace("mailto:mailto:", "mailto:")
        original = text

        def repl(m: re.Match) -> str:
            addr = decode(m.group(3))
            if not addr:
                return m.group(0)
            target = addr if addr.lower().startswith("mailto:") else "mailto:" + addr
            emails.add(target)
            quote = m.group(2)
            return f"{m.group(1)}{quote}{html.escape(target, quote=True)}{quote}"

        text, n = EMAIL_HREF.subn(repl, text)
        text, s = DECODER_SCRIPT.subn("", text)
        if n or s:
            page.write_text(text, encoding="utf-8", newline="\n")
            total += n
            scripts += s
    print(f"Fixed {total} email links, removed {scripts} decoder scripts.")
    print("Emails:", ", ".join(sorted(emails)))


if __name__ == "__main__":
    main()
