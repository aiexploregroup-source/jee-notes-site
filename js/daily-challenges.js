/* Daily challenges — answer checking, done-marking, streaks.
   Pages are server-rendered (layouts/daily-challenges/*); this only adds
   interactivity. Uses the same localStorage keys as the old calendar app
   ('jn-dpp-done' -> { 'YYYY-MM-DD': 1 }) so existing streaks carry over. */
(function () {
  "use strict";
  var STORE = "jn-dpp-done";

  function done() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; }
  }
  function key(d) {
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }

  // ---- single challenge page ----
  var page = document.querySelector(".dpp-single");
  if (page) {
    var dateKey = page.dataset.date;

    function markDone() {
      var d = done();
      if (d[dateKey]) return;
      d[dateKey] = 1;
      try { localStorage.setItem(STORE, JSON.stringify(d)); } catch (e) {}
    }
    function checkComplete() {
      var all = page.querySelectorAll(".dpp-q");
      var seen = page.querySelectorAll(".dpp-q.is-answered");
      if (all.length && all.length === seen.length) markDone();
    }

    page.addEventListener("click", function (e) {
      var opt = e.target.closest(".dpp-option");
      if (opt) {
        var q = opt.closest(".dpp-q");
        if (q.classList.contains("is-answered")) return;
        q.classList.add("is-answered");
        var correct = q.dataset.answer;
        if (correct == null) {
          opt.classList.add("is-picked");
        } else {
          q.querySelectorAll(".dpp-option").forEach(function (b) {
            if (b.dataset.i === correct) b.classList.add("is-correct");
          });
          if (opt.dataset.i !== correct) opt.classList.add("is-wrong");
        }
        checkComplete();
        return;
      }
      var solve = e.target.closest(".dpp-solve");
      if (solve) {
        var sec = solve.closest(".dpp-q");
        var sol = sec.querySelector(".dpp-solution");
        var open = !sol.hidden;
        sol.hidden = open;
        solve.textContent = open ? "Show solution" : "Hide solution";
        if (!open) {
          sec.classList.add("is-answered");
          checkComplete();
        }
      }
    });
  }

  // ---- hub: paint completed days on the calendar/archive, show streak ----
  var cal = document.querySelector(".dpp-cal");
  if (cal) {
    var d = done();
    Object.keys(d).forEach(function (k) {
      document.querySelectorAll('[data-date="' + k + '"]').forEach(function (el) {
        el.classList.add("is-done");
      });
    });
    var n = 0, cur = new Date();
    if (!d[key(cur)]) cur.setDate(cur.getDate() - 1); // today pending doesn't break the run
    while (d[key(cur)]) { n++; cur.setDate(cur.getDate() - 1); }
    var el = document.querySelector(".dpp-streak-n");
    if (el) el.textContent = n;
  }
})();
