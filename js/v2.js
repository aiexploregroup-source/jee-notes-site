/* JEE Notes v2 — theme toggle, reading progress, TOC sync, reveals */
(function () {
  "use strict";

  // ---- theme toggle (persisted) ----
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("jn-theme", next); } catch (e) {}
      window.dispatchEvent(new CustomEvent("themechange"));
    });
  }

  // ---- nav dropdown: click toggle for touch devices (hover covers pointer) ----
  document.querySelectorAll(".nav-drop-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var item = btn.closest(".nav-item");
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      e.stopPropagation();
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-item.open").forEach(function (i) {
      i.classList.remove("open");
      var b = i.querySelector(".nav-drop-btn");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  });

  // ---- reading progress ----
  var bar = document.querySelector(".reading-progress span");
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---- TOC active-section highlight ----
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc nav a"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) {
      var id = decodeURIComponent((a.getAttribute("href") || "").replace(/^#/, ""));
      if (id) map[id] = a;
    });
    var headings = Object.keys(map)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var current = null;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) current = e.target.id;
      });
      tocLinks.forEach(function (a) { a.classList.remove("toc-active"); });
      if (current && map[current]) map[current].classList.add("toc-active");
    }, { rootMargin: "-80px 0px -70% 0px", threshold: 0 });
    headings.forEach(function (h) { obs.observe(h); });
  }

  // ---- staggered reveal for related cards ----
  var cards = Array.prototype.slice.call(document.querySelectorAll(".related-card"));
  if (cards.length && "IntersectionObserver" in window) {
    var rObs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          var el = e.target;
          el.style.animationDelay = (el.dataset.i || 0) * 80 + "ms";
          el.classList.add("in");
          o.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(function (c, i) { c.dataset.i = i; rObs.observe(c); });
  } else {
    cards.forEach(function (c) { c.classList.add("in"); });
  }

  // ---- sticky context bar (slides in once the hero title scrolls under the navbar) ----
  var sticky = document.getElementById("topic-stickybar");
  var heroTitle = document.querySelector(".topic-title");
  if (sticky && heroTitle && "IntersectionObserver" in window) {
    var headerH = (document.querySelector(".site-header") || {}).offsetHeight || 64;
    var sObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { sticky.classList.toggle("in", !en.isIntersecting); });
    }, { rootMargin: "-" + (headerH + 6) + "px 0px 0px 0px", threshold: 0 });
    sObs.observe(heroTitle);
  }

  // ---- copy (as Markdown) + print ----
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.focus(); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    ta.remove(); if (done) done();
  }
  function flash(btn, msg) {
    var lbl = btn.querySelector(".tb-label");
    btn.classList.add("copied");
    var prev = lbl ? lbl.textContent : null;
    if (lbl) lbl.textContent = msg;
    setTimeout(function () { btn.classList.remove("copied"); if (lbl) lbl.textContent = prev; }, 1600);
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-action]");
    if (!btn) return;
    var action = btn.dataset.action;
    if (action === "print") { window.print(); return; }
    if (action === "copy") {
      var src = document.querySelector(".page-markdown");
      var content = document.querySelector(".topic-content");
      var text = src ? src.value : (content ? content.innerText : "");
      var done = function () { flash(btn, "Copied!"); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
      } else { fallbackCopy(text, done); }
    }
  });

  // ---- print: expand every collapsible so all answers print, then restore ----
  var printOpened = [];
  window.addEventListener("beforeprint", function () {
    printOpened = [];
    document.querySelectorAll("details:not([open])").forEach(function (d) {
      d.open = true; printOpened.push(d);
    });
  });
  window.addEventListener("afterprint", function () {
    printOpened.forEach(function (d) { d.open = false; });
    printOpened = [];
  });

  // ---- KaTeX math rendering (moved from inline onload handler for CSP compliance) ----
  // auto-render.min.js is deferred and loaded before this script (also deferred),
  // so renderMathInElement is defined by the time this runs.
  // Scoped to <main> — header/nav/footer never contain math, and walking the
  // full body was the dominant style/layout cost on formula-heavy pages.
  // Containers marked .katex-lazy (e.g. the mock-test text paper) are skipped
  // at load and typeset once, the first time they're opened.
  if (typeof renderMathInElement === "function") {
    var katexOpts = {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      ignoredClasses: ["katex-lazy"],
      throwOnError: false
    };
    renderMathInElement(document.getElementById("main") || document.body, katexOpts);
    document.querySelectorAll("details.katex-lazy").forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (d.open && !d.dataset.mathed) {
          d.dataset.mathed = "1";
          renderMathInElement(d, {
            delimiters: katexOpts.delimiters,
            throwOnError: false
          });
        }
      });
    });
  }
})();
