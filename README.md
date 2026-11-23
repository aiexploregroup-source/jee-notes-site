# JEE Notes — standalone local site

**Live site:** <https://aiexploregroup-source.github.io/jee-notes-site/> · **Repo:** <https://github.com/aiexploregroup-source/jee-notes-site>

This is your own standalone copy of the JEE Notes website, built from the extracted pages. The
**design is exactly jeenotes.in**: the original HTML, CSS, JavaScript, images and fonts are used
unchanged, so every page looks and behaves like the live site.

## Run it

**Windows:** double-click `RUN.bat`.

**Any OS (Node.js 18+):**

```bash
cd jee-notes-site
npm start
# or: node server.mjs
```

Then open <http://localhost:5173/>. Set a different port with `PORT=8080 npm start`.

A tiny dependency-free static server (`server.mjs`) is included; no `npm install` is needed.

## What is inside

| Path | Contents |
|---|---|
| `index.html` | Homepage, exactly as extracted |
| `physics/`, `chemistry/`, `mathematics/` | All 495 subject/chapter/topic notes as real HTML pages |
| `daily-challenges/`, `mock-tests/`, `previous-year-questions/` | Daily sets, mocks and PYQs |
| `css/`, `js/`, `images/`, `favicon.png` | Original styling, scripts and media |
| `all-notes/` | **Complete index of all 629 notes**, grouped by subject, with live filtering |
| `source-notes/` | The same 629 pages as clean Markdown, kept as editable source content |
| `robots.txt`, `sitemap.xml` | Original site metadata |

Every page is at its original URL path, for example
<http://localhost:5173/physics/work-energy-power/work-done/>. All internal links were rewritten
from `https://jeenotes.in/...` to local paths, so navigation stays inside your project. The
homepage also has a **Browse all notes** button.

`build_index.py` regenerates the all-notes page and re-localises links if you add or change pages.

## Customising it

- Change the site name/text in `index.html` and any page's HTML.
- Colours, spacing and typography live in `css/hc-foundation.min.*.css` and each page's CSS file.
- `source-notes/*.md` contains the readable notes if you want to rebuild or restyle the content.

## Attribution & license

All notes, design and media are © HappyChases Media Works (OPC) Pvt Ltd. This local copy is for
personal, non-commercial study and reference only. See `terms/index.html` for the original terms.
