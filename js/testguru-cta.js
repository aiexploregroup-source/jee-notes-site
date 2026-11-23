/* TestGuru CTAs: GA4 click events and the dismissible mobile bar.
   The links themselves carry utm_* / tg_*, so attribution survives even when
   this script or GA is blocked; the event only adds the on-site view. */
(function () {
  "use strict";

  // GA4: one testguru_cta_view per placement per page once it is actually on
  // screen, and a testguru_cta_click per click, both with the same parameters,
  // so click-through rate per placement is clicks / views. Register placement,
  // exam and cta_campaign as event-scoped custom dimensions in GA4 to report on them.
  function params(a) {
    var campaign = "";
    try { campaign = new URL(a.href).searchParams.get("utm_campaign") || ""; } catch (err) {}
    return { placement: a.getAttribute("data-tg-cta"), exam: a.getAttribute("data-tg-exam"), cta_campaign: campaign };
  }
  function track(name, p) { if (typeof window.gtag === "function" && /^(www\.)?jeenotes\.in$/.test(location.hostname)) window.gtag("event", name, p); }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-tg-cta]");
    if (!a) return;
    var p = params(a); p.link_url = a.href; p.transport_type = "beacon";
    track("testguru_cta_click", p);
  });

  // The modal reports its own view (testguru_modal_view) when it opens; the
  // result-screen card is a <template> clone, picked up by the MutationObserver.
  if ("IntersectionObserver" in window) {
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var a = en.target, key = a.getAttribute("data-tg-cta");
        io.unobserve(a);
        if (seen[key]) return;
        seen[key] = true;
        track("testguru_cta_view", params(a));
      });
    }, { threshold: 0.6 });
    var watch = function (root) {
      root.querySelectorAll("a[data-tg-cta]").forEach(function (a) { if (!a.closest(".tg-modal")) io.observe(a); });
    };
    watch(document);
    if ("MutationObserver" in window) {
      new MutationObserver(function (muts) {
        muts.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.querySelectorAll) watch(n); }); });
      }).observe(document.body, { childList: true, subtree: true });
    }
  }

  var bar = document.getElementById("tg-bar");
  if (!bar) return;
  var key = bar.getAttribute("data-storage");
  var WEEK = 7 * 24 * 60 * 60 * 1000;
  try {
    var at = Number(localStorage.getItem(key));
    if (at && Date.now() - at < WEEK) return;
  } catch (err) { /* storage blocked: show the bar, just can't remember a dismissal */ }

  // Appear once the reader is a third of the way into the notes: a visitor
  // who bounces from the hero never sees it, one who is reading does.
  var article = document.querySelector(".topic-content") || document.body;
  function onScroll() {
    var r = article.getBoundingClientRect();
    var read = (window.innerHeight - r.top) / Math.max(r.height, 1);
    if (read > 0.33) {
      bar.hidden = false;
      requestAnimationFrame(function () { bar.classList.add("is-in"); });
      window.removeEventListener("scroll", onScroll);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // Step aside while the in-article card is on screen: one pitch at a time.
  var cards = document.querySelectorAll(".tg-card");
  if (cards.length && "IntersectionObserver" in window) {
    var onScreen = new Set();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.isIntersecting ? onScreen.add(en.target) : onScreen.delete(en.target); });
      bar.classList.toggle("is-tucked", onScreen.size > 0);
    });
    cards.forEach(function (c) { io.observe(c); });
  }

  bar.querySelector(".tg-bar__close").addEventListener("click", function () {
    bar.classList.remove("is-in");
    bar.hidden = true;
    try { localStorage.setItem(key, String(Date.now())); } catch (err) {}
  });
})();

/* Announcement strip and prompt modal (partials/testguru/announce.html, modal.html). */
(function () {
  "use strict";
  var DAY = 24 * 60 * 60 * 1000;
  function get(k) { try { return Number(localStorage.getItem(k)) || 0; } catch (e) { return 0; } }
  function set(k, v) { try { localStorage.setItem(k, String(v)); } catch (e) {} }
  function track(name, params) { if (typeof window.gtag === "function" && /^(www\.)?jeenotes\.in$/.test(location.hostname)) window.gtag("event", name, params); }

  // ---- announcement: dismissal is remembered; head.html hides it pre-paint ----
  var bar = document.getElementById("tg-announce");
  if (bar) {
    bar.querySelector(".tg-announce__close").addEventListener("click", function () {
      set(bar.getAttribute("data-storage"), Date.now() + Number(bar.getAttribute("data-days")) * DAY);
      document.documentElement.setAttribute("data-announce", "off");
      track("testguru_announce_dismiss", { placement: "announce-bar" });
    });
  }

  // ---- modal ----
  var modal = document.getElementById("tg-modal");
  if (!modal) return;
  var key = modal.getAttribute("data-storage");
  if (get(key) > Date.now()) return;              // snoozed, or clicked through recently
  var dialog = modal.querySelector(".tg-modal__dialog");
  var shown = false, lastFocus = null;
  var start = Date.now();

  function open(trigger) {
    if (shown || document.querySelector("dialog[open], .mt-active")) return;
    shown = true;
    detach();
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.documentElement.classList.add("tg-modal-open");
    requestAnimationFrame(function () { modal.classList.add("is-in"); dialog.focus(); });
    // Snooze immediately: a reader who navigates away without closing it is not asked again on the next page.
    set(key, Date.now() + Number(modal.getAttribute("data-days")) * DAY);
    track("testguru_modal_view", { placement: "modal", trigger: trigger, exam: modal.getAttribute("data-exam") });
    var link = modal.querySelector("a[data-tg-cta]"), campaign = "";
    try { campaign = new URL(link.href).searchParams.get("utm_campaign") || ""; } catch (err) {}
    track("testguru_cta_view", { placement: "modal", exam: modal.getAttribute("data-exam"), cta_campaign: campaign });
  }
  function close(how) {
    modal.classList.remove("is-in");
    document.documentElement.classList.remove("tg-modal-open");
    setTimeout(function () { modal.hidden = true; }, 200);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    track("testguru_modal_dismiss", { placement: "modal", how: how });
  }

  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-tg-close]")) close("button");
    else if (e.target.closest("a[data-tg-cta]")) set(key, Date.now() + 30 * DAY);
  });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") close("escape");
    if (e.key === "Tab") {                          // keep focus inside the dialog
      var f = dialog.querySelectorAll("a[href], button");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Triggers: engaged reading only. Never within the first 8 s of a page.
  var depth = Number(modal.getAttribute("data-depth")) || 0.45;
  var timer = setTimeout(function () { open("time"); }, (Number(modal.getAttribute("data-delay")) || 40) * 1000);
  function onScroll() {
    if (Date.now() - start < 8000) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (max > 0 && window.scrollY / max >= depth) open("scroll");
  }
  function onLeave(e) { if (!e.relatedTarget && e.clientY <= 0 && Date.now() - start > 8000) open("exit"); }
  function detach() {
    clearTimeout(timer);
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("mouseout", onLeave);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  if (window.matchMedia("(hover: hover)").matches) document.addEventListener("mouseout", onLeave);
})();
