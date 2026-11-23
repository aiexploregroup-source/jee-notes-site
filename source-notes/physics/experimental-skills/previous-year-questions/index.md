---
title: "Experimental Skills Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/physics/experimental-skills/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Experimental Skills — screw gauge, Vernier calipers, and error analysis — with step-by-step solutions."
updated: "2026-07-01"
reading_time: "4 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 5"
html: "../../../../offline/physics/experimental-skills/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Experimental Skills — screw gauge, Vernier calipers, and error analysis — with step-by-step solutions.

Solved JEE Main 2026 previous year questions from Experimental Skills, covering least count, zero error, and error propagation with concise worked solutions.

> Solutions are AI-generated and pending review.

## Questions

PYQ · 2026 4 Apr, Shift 1

In a screw gauge when the circular scale is given five complete rotations it moves linearly by $2.5\ \text{mm}$. If the circular scale has $100$ divisions, the least count of screw gauge is _____ mm.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Step 1 — Find the pitch.</strong> The pitch is the linear distance moved in one full rotation:</p>$$\text{pitch} = \frac{2.5\ \text{mm}}{5\ \text{rotations}} = 0.5\ \text{mm}$$<p><strong>Step 2 — Least count.</strong> With $100$ divisions on the circular scale:</p>$$\text{LC} = \frac{\text{pitch}}{\text{no. of circular divisions}} = \frac{0.5}{100} = 5 \times 10^{-3}\ \text{mm}$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 2 Apr, Shift 1

The diameter of a wire measured by a screw gauge of least count $0.001\ \text{cm}$ is $0.08\ \text{cm}$. The length measured by a scale of least count $0.1\ \text{cm}$ is $150\ \text{cm}$. When a weight of $100\ \text{N}$ is applied to the wire, the extension in length is $0.5\ \text{cm}$, measured by a micrometer of least count $0.001\ \text{cm}$. The error in the measured Young’s modulus is $\alpha \times 10^9$ N/m$^2$. The value of $\alpha$ is __________.

(Ignore the contribution of the load to Young’s modulus error calculation.)

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Step 1 — Young’s modulus expression.</strong> With area $A = \frac{\pi}{4}d^2$,</p>$$Y = \frac{F\,L}{A\,\Delta L} = \frac{4 F L}{\pi\, d^2\, \Delta L}$$<p>Using SI units ($F = 100\ \text{N}$, $L = 1.5\ \text{m}$, $d = 8\times10^{-4}\ \text{m}$, $\Delta L = 5\times10^{-3}\ \text{m}$):</p>$$Y = \frac{4(100)(1.5)}{\pi (8\times10^{-4})^2 (5\times10^{-3})} \approx 5.97 \times 10^{10}\ \text{N/m}^2$$<p><strong>Step 2 — Relative error (load ignored).</strong> Since $d$ appears squared:</p>$$\frac{\Delta Y}{Y} = 2\frac{\Delta d}{d} + \frac{\Delta L}{L} + \frac{\Delta(\Delta L)}{\Delta L}$$

$$= 2\left(\frac{0.001}{0.08}\right) + \frac{0.1}{150} + \frac{0.001}{0.5} = 0.025 + 0.00067 + 0.002 = 0.02767$$<p><strong>Step 3 — Absolute error.</strong></p>$$\Delta Y = 0.02767 \times 5.97 \times 10^{10} \approx 1.65 \times 10^{9}\ \text{N/m}^2$$<p>So $\alpha \approx 1.65$.</p><p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 2

In a screw gauge the zero of main scale reference line coincides with the fifth division of the circular scale when two studs are in contact. There are $100$ divisions in circular scale and pitch of screw gauge is $0.1\ \text{mm}$. When diameter of a sphere is measured, the reading of main scale is $5\ \text{mm}$ and $50^{\text{th}}$ division of circular scale coincides with the reference line of main scale. The diameter of sphere is __________ mm.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Step 1 — Least count.</strong></p>$$\text{LC} = \frac{\text{pitch}}{\text{divisions}} = \frac{0.1}{100} = 0.001\ \text{mm}$$<p><strong>Step 2 — Zero error.</strong> With the studs in contact the $5^{\text{th}}$ circular division sits on the reference line, so the instrument reads a value above zero. This is a <strong>positive</strong> zero error:</p>$$\text{zero error} = +5 \times \text{LC} = +0.005\ \text{mm}$$<p><strong>Step 3 — Observed reading.</strong></p>$$\text{observed} = 5 + 50 \times 0.001 = 5.050\ \text{mm}$$<p><strong>Step 4 — Corrected diameter</strong> (subtract positive zero error):</p>$$d = 5.050 - 0.005 = 5.045\ \text{mm}$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 5 Apr, Shift 1

In a Vernier calipers, when both jaws touch each other, zero of the Vernier scale is shifted to the right of zero of the main scale and $7^{\text{th}}$ Vernier division coincides with a main scale reading. If the value of $1$ main scale division is $1\ \text{mm}$ and there are $10$ Vernier scale divisions, then the Vernier caliper has

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Step 1 — Least count.</strong></p>$$\text{LC} = \frac{1\ \text{MSD}}{\text{no. of VSD}} = \frac{1\ \text{mm}}{10} = 0.1\ \text{mm} = 0.01\ \text{cm}$$<p><strong>Step 2 — Sign of zero error.</strong> With the jaws closed the Vernier zero lies to the <strong>right</strong> of the main-scale zero, so the reading is greater than zero when it should be zero. This is a <strong>positive</strong> zero error.</p><p><strong>Step 3 — Magnitude.</strong> The $7^{\text{th}}$ Vernier division coincides:</p>$$\text{zero error} = +7 \times \text{LC} = 7 \times 0.01 = 0.07\ \text{cm (positive)}$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 5 Apr, Shift 2

In an experiment to determine the resistance of a given wire using Ohm’s law, the voltmeter and ammeter readings are noted as $10\ \text{V}$ and $5\ \text{A}$, respectively. The least counts of voltmeter and ammeter are $500\ \text{mV}$ and $200\ \text{mA}$, respectively. The estimated error in the resistance measurement is __________ $\Omega$.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Step 1 — Nominal resistance.</strong></p>$$R = \frac{V}{I} = \frac{10}{5} = 2\ \Omega$$<p><strong>Step 2 — Relative error.</strong> For $R = V/I$:</p>$$\frac{\Delta R}{R} = \frac{\Delta V}{V} + \frac{\Delta I}{I} = \frac{0.5}{10} + \frac{0.2}{5} = 0.05 + 0.04 = 0.09$$<p><strong>Step 3 — Absolute error.</strong></p>$$\Delta R = 0.09 \times 2 = 0.18\ \Omega$$<p><strong>Answer:</strong> D</p></div></details>

From TestGuru · our mock-test platform

## You've read Experimental Skills Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=experimental-skills&tg_exam=jee-main&tg_page=%2Fphysics%2Fexperimental-skills%2Fprevious-year-questions%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/experimental-skills/previous-year-questions/](https://jeenotes.in/physics/experimental-skills/previous-year-questions/) · raw HTML: `offline/physics/experimental-skills/previous-year-questions/index.html`_
