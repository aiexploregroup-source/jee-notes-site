/* JEE Notes — interactive mock-test engine (NTA-style, fully client-side).
   Reads window.MOCK_DATA = { title, date, shift, duration_min, marking:{correct,incorrect}, questions:[...] }.
   Question: { id, subject, type:"mcq"|"integer", statement, options[], correct_index, correct_value, solution } */
(function () {
  "use strict";
  var DATA = window.MOCK_DATA;
  var root = document.getElementById("mock-root");
  if (!DATA || !root) return;

  var SUBJECTS = [];
  DATA.questions.forEach(function (q) { if (SUBJECTS.indexOf(q.subject) < 0) SUBJECTS.push(q.subject); });
  var LS_KEY = "jn-mock-" + (DATA.slug || DATA.title || "test");
  var MARK = DATA.marking || { correct: 4, incorrect: -1 };

  // ---- state ----
  var state = load() || {
    started: false, submitted: false,
    remaining: (DATA.duration_min || 180) * 60,
    current: 0,
    answers: {},        // id -> selected index (mcq) or string (integer)
    status: {},         // id -> "notVisited"|"notAnswered"|"answered"|"marked"|"answeredMarked"
    subject: SUBJECTS[0],
  };
  DATA.questions.forEach(function (q) { if (!state.status[q.id]) state.status[q.id] = "notVisited"; });

  var timerId = null;

  function save() { try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {} }
  function load() { try { return JSON.parse(localStorage.getItem(LS_KEY)); } catch (e) { return null; } }
  function typeset(el) { if (window.renderMathInElement) try { renderMathInElement(el, { delimiters: [{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false},{left:"\\[",right:"\\]",display:true},{left:"\\(",right:"\\)",display:false}], throwOnError: false }); } catch (e) {} }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(sec) { var m = Math.floor(sec/60), s = sec%60; return (m<10?"0":"")+m+":"+(s<10?"0":"")+s; }
  function qIndexById(id) { for (var i=0;i<DATA.questions.length;i++) if (DATA.questions[i].id===id) return i; return -1; }

  // ============ INTRO ============
  function renderIntro() {
    var mcq = DATA.questions.filter(function(q){return q.type!=="integer";}).length;
    var integer = DATA.questions.length - mcq;
    root.innerHTML =
      '<div class="mt-intro">' +
        '<h2 class="mt-intro-title">' + esc(DATA.title) + '</h2>' +
        '<div class="mt-intro-meta">' +
          '<span>' + DATA.questions.length + ' questions</span>' +
          '<span>' + (DATA.duration_min||180) + ' min</span>' +
          '<span>+' + MARK.correct + ' / ' + MARK.incorrect + ' marking</span>' +
        '</div>' +
        '<ul class="mt-instructions">' +
          '<li>' + SUBJECTS.join(", ") + ' — ' + mcq + ' MCQ, ' + integer + ' numerical.</li>' +
          '<li>Timer starts when you click Start and auto-submits at 0.</li>' +
          '<li>Use the palette to navigate; you can Mark for Review and return.</li>' +
          '<li>Progress is saved in your browser — you can refresh and resume.</li>' +
          '<li>Answer key is the official NTA final key; solutions are ours.</li>' +
        '</ul>' +
        '<button class="mt-btn mt-start">' + (state.started ? "Resume Test" : "Start Test") + '</button>' +
        (state.started ? '<button class="mt-btn mt-ghost mt-restart">Restart</button>' : '') +
      '</div>';
    root.querySelector(".mt-start").addEventListener("click", startTest);
    var rs = root.querySelector(".mt-restart"); if (rs) rs.addEventListener("click", restart);
  }

  function restart() {
    try { localStorage.removeItem(LS_KEY); } catch (e) {}
    state = { started:false, submitted:false, remaining:(DATA.duration_min||180)*60, current:0, answers:{}, status:{}, subject:SUBJECTS[0] };
    DATA.questions.forEach(function (q) { state.status[q.id] = "notVisited"; });
    renderIntro();
  }

  function startTest() {
    state.started = true; save();
    if (state.submitted) return renderResult();
    renderTest(); startTimer();
  }

  // ============ TIMER ============
  function startTimer() {
    stopTimer();
    timerId = setInterval(function () {
      state.remaining--;
      var t = document.getElementById("mt-timer");
      if (t) { t.textContent = fmt(state.remaining); if (state.remaining <= 300) t.classList.add("mt-danger"); }
      if (state.remaining % 5 === 0) save();
      if (state.remaining <= 0) { stopTimer(); doSubmit(true); }
    }, 1000);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  // ============ TEST VIEW ============
  function renderTest() {
    root.innerHTML =
      '<div class="mt-shell">' +
        '<div class="mt-topbar">' +
          '<div class="mt-subject-tabs">' + SUBJECTS.map(function (s) {
            return '<button class="mt-tab' + (s===state.subject?' is-active':'') + '" data-subj="' + esc(s) + '">' + esc(s) + '</button>';
          }).join("") + '</div>' +
          '<div class="mt-timer-wrap">Time Left <span id="mt-timer">' + fmt(state.remaining) + '</span></div>' +
          '<button class="mt-btn mt-submit">Submit</button>' +
        '</div>' +
        '<div class="mt-body">' +
          '<div class="mt-question" id="mt-question"></div>' +
          '<aside class="mt-palette" id="mt-palette"></aside>' +
        '</div>' +
      '</div>';
    root.querySelectorAll(".mt-tab").forEach(function (b) {
      b.addEventListener("click", function () { state.subject = b.getAttribute("data-subj"); var idx = firstInSubject(state.subject); if (idx>=0) state.current = idx; renderTest(); });
    });
    root.querySelector(".mt-submit").addEventListener("click", function () { if (confirm("Submit the test? You cannot change answers after this.")) doSubmit(false); });
    renderQuestion(); renderPalette();
  }

  function firstInSubject(s) { for (var i=0;i<DATA.questions.length;i++) if (DATA.questions[i].subject===s) return i; return -1; }

  function renderQuestion() {
    var q = DATA.questions[state.current];
    state.subject = q.subject;
    if (state.status[q.id] === "notVisited") state.status[q.id] = "notAnswered";
    var n = state.current + 1;
    var ans = state.answers[q.id];
    var body = '<div class="mt-q-head"><span class="mt-q-num">Question ' + n + '</span>' +
               '<span class="mt-q-subject">' + esc(q.subject) + '</span>' +
               '<span class="mt-q-type">' + (q.type === "integer" ? "Numerical" : "MCQ") + '</span></div>' +
               '<div class="mt-q-statement">' + esc(q.statement) + '</div>';
    if (q.type === "integer") {
      body += '<div class="mt-int"><label>Your answer</label><input type="text" inputmode="decimal" class="mt-int-input" value="' + (ans!=null?esc(ans):"") + '" placeholder="Enter a number"></div>';
    } else {
      body += '<ol class="mt-options">' + (q.options||[]).map(function (opt, i) {
        return '<li class="mt-option' + (ans===i?' is-selected':'') + '" data-i="' + i + '">' +
                 '<span class="mt-opt-label">' + "ABCDEF"[i] + '</span><span class="mt-opt-text">' + esc(opt) + '</span></li>';
      }).join("") + '</ol>';
    }
    body += '<div class="mt-actions">' +
              '<button class="mt-btn mt-ghost mt-clear">Clear</button>' +
              '<button class="mt-btn mt-ghost mt-mark">Mark for Review &amp; Next</button>' +
              '<button class="mt-btn mt-save">Save &amp; Next</button>' +
            '</div>';
    var box = document.getElementById("mt-question");
    box.innerHTML = body; typeset(box);
    if (q.type === "integer") {
      var inp = box.querySelector(".mt-int-input");
      inp.addEventListener("input", function () { var v = inp.value.trim(); if (v==="") { delete state.answers[q.id]; setStatus(q,false); } else { state.answers[q.id]=v; setStatus(q,true); } save(); });
    } else {
      box.querySelectorAll(".mt-option").forEach(function (li) {
        li.addEventListener("click", function () { state.answers[q.id] = parseInt(li.getAttribute("data-i"),10); setStatus(q,true); box.querySelectorAll(".mt-option").forEach(function(x){x.classList.remove("is-selected");}); li.classList.add("is-selected"); save(); renderPalette(); });
      });
    }
    box.querySelector(".mt-clear").addEventListener("click", function () { delete state.answers[q.id]; setStatus(q,false); save(); renderQuestion(); renderPalette(); });
    box.querySelector(".mt-mark").addEventListener("click", function () { var answered = state.answers[q.id]!=null; state.status[q.id] = answered?"answeredMarked":"marked"; save(); next(); });
    box.querySelector(".mt-save").addEventListener("click", function () { save(); next(); });
    var tabs = root.querySelectorAll(".mt-tab"); tabs.forEach(function(t){ t.classList.toggle("is-active", t.getAttribute("data-subj")===q.subject); });
  }

  function setStatus(q, answered) {
    var m = state.status[q.id] === "marked" || state.status[q.id] === "answeredMarked";
    state.status[q.id] = answered ? (m?"answeredMarked":"answered") : (m?"marked":"notAnswered");
  }

  function next() { if (state.current < DATA.questions.length-1) { state.current++; renderQuestion(); renderPalette(); } }

  function renderPalette() {
    var el = document.getElementById("mt-palette"); if (!el) return;
    var qs = DATA.questions.map(function (q, i) { return { q: q, i: i }; }).filter(function (o) { return o.q.subject === state.subject; });
    var legend = '<div class="mt-legend">' +
      '<span class="mt-lg answered">Answered</span><span class="mt-lg notAnswered">Not answered</span>' +
      '<span class="mt-lg marked">Marked</span><span class="mt-lg notVisited">Not visited</span></div>';
    var grid = '<div class="mt-grid">' + qs.map(function (o) {
      var st = state.status[o.q.id];
      return '<button class="mt-cell ' + st + (o.i===state.current?' is-current':'') + '" data-i="' + o.i + '">' + (o.i+1) + '</button>';
    }).join("") + '</div>';
    el.innerHTML = '<div class="mt-palette-title">' + esc(state.subject) + '</div>' + legend + grid;
    el.querySelectorAll(".mt-cell").forEach(function (c) { c.addEventListener("click", function () { state.current = parseInt(c.getAttribute("data-i"),10); renderQuestion(); renderPalette(); }); });
  }

  // ============ SCORING ============
  function score() {
    var per = {}; SUBJECTS.forEach(function (s) { per[s] = { correct:0, wrong:0, unattempted:0, marks:0 }; });
    var total = 0, correct = 0, wrong = 0, unatt = 0, dropped = 0;
    DATA.questions.forEach(function (q) {
      var a = state.answers[q.id], p = per[q.subject], m = 0, verdict;
      if (String(q.correct_value).toLowerCase() === "dropped") {
        // NTA officially dropped this question — award full marks to everyone.
        m = MARK.correct; verdict = "dropped"; dropped++; p.dropped = (p.dropped || 0) + 1;
      } else {
        var isAttempted = a != null && a !== "";
        if (!isAttempted) { verdict = "unattempted"; p.unattempted++; unatt++; }
        else {
          var ok;
          if (q.type === "integer") ok = String(a).trim() === String(q.correct_value).trim() || (parseFloat(a) === parseFloat(q.correct_value));
          else ok = a === q.correct_index;
          if (ok) { m = MARK.correct; p.correct++; correct++; verdict = "correct"; }
          else { m = MARK.incorrect; p.wrong++; wrong++; verdict = "wrong"; }
        }
      }
      p.marks += m; total += m; q._verdict = verdict; q._given = a;
    });
    return { total: total, correct: correct, wrong: wrong, unattempted: unatt, dropped: dropped, per: per, maxMarks: DATA.questions.length * MARK.correct };
  }

  function doSubmit(auto) {
    stopTimer(); state.submitted = true; save();
    if (auto) alert("Time's up — the test has been submitted.");
    renderResult();
  }

  // ============ RESULT ============
  function renderResult() {
    var r = score();
    var pct = Math.max(0, Math.round((r.total / r.maxMarks) * 100));
    var timeUsed = (DATA.duration_min||180)*60 - Math.max(0, state.remaining);
    var subjectRows = SUBJECTS.map(function (s) {
      var p = r.per[s];
      return '<tr><td>' + esc(s) + '</td><td>' + p.correct + '</td><td>' + p.wrong + '</td><td>' + p.unattempted + '</td><td class="mt-strong">' + p.marks + '</td></tr>';
    }).join("");
    var review = DATA.questions.map(function (q, i) {
      var given = q._given, givenTxt;
      if (given == null || given === "") givenTxt = "<em>Not attempted</em>";
      else if (q.type === "integer") givenTxt = esc(given);
      else givenTxt = "ABCDEF"[given] + ". " + esc((q.options||[])[given]);
      var correctTxt = q._verdict === "dropped" ? "Dropped by NTA — awarded to all"
        : (q.type === "integer" ? esc(q.correct_value) : ("ABCDEF"[q.correct_index] + ". " + esc((q.options||[])[q.correct_index])));
      return '<details class="mt-review-item ' + q._verdict + '">' +
        '<summary><span class="mt-rv-num">Q' + (i+1) + '</span><span class="mt-rv-tag">' + q._verdict + '</span>' +
          '<span class="mt-rv-subj">' + esc(q.subject) + '</span></summary>' +
        '<div class="mt-rv-body">' +
          '<div class="mt-rv-statement">' + esc(q.statement) + '</div>' +
          (q.type!=="integer" ? '<ol class="mt-rv-options">' + (q.options||[]).map(function(o,oi){ return '<li class="' + (oi===q.correct_index?"correct":"") + (oi===given&&oi!==q.correct_index?" wrong":"") + '"><span class="mt-opt-label">'+"ABCDEF"[oi]+'</span> '+esc(o)+'</li>'; }).join("") + '</ol>' : '') +
          '<p class="mt-rv-ans"><strong>Your answer:</strong> ' + givenTxt + ' &nbsp;·&nbsp; <strong>Correct:</strong> ' + correctTxt + '</p>' +
          (q.solution ? '<div class="mt-rv-solution"><strong>Solution</strong>' + esc(q.solution) + '</div>' : '<p class="mt-rv-nosol">Solution not available (figure-based question).</p>') +
        '</div></details>';
    }).join("");
    root.innerHTML =
      '<div class="mt-result">' +
        '<div class="mt-scorecard">' +
          '<div class="mt-score-big"><span class="mt-score-num">' + r.total + '</span><span class="mt-score-max">/ ' + r.maxMarks + '</span></div>' +
          '<div class="mt-score-sub">' + pct + '% · ' + r.correct + ' correct · ' + r.wrong + ' wrong · ' + r.unattempted + ' skipped' + (r.dropped ? ' · ' + r.dropped + ' bonus' : '') + ' · ' + fmt(timeUsed) + ' taken</div>' +
        '</div>' +
        '<table class="mt-score-table"><thead><tr><th>Subject</th><th>Correct</th><th>Wrong</th><th>Skipped</th><th>Marks</th></tr></thead><tbody>' + subjectRows + '</tbody></table>' +
        '<div class="mt-review-head"><h3>Question review &amp; solutions</h3><button class="mt-btn mt-ghost mt-retake">Retake</button></div>' +
        '<div class="mt-review">' + review + '</div>' +
      '</div>';
    // TestGuru pitch under the score (template from partials/testguru/cta.html).
    var tg = document.getElementById("tg-result-cta");
    if (tg) root.querySelector(".mt-score-table").insertAdjacentElement("afterend", tg.content.firstElementChild.cloneNode(true));
    typeset(root.querySelector(".mt-result"));
    root.querySelector(".mt-retake").addEventListener("click", restart);
  }

  // ---- boot ----
  if (state.submitted) { renderResult(); }
  else if (state.started) { renderIntro(); }  // show resume screen
  else { renderIntro(); }
})();
