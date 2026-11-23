---
title: "Current Electricity Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/physics/current-electricity/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Current Electricity with concise step-by-step solutions covering voltmeters, galvanometers, LCR power factor, cells in parallel, and internal resistance."
updated: "2026-07-01"
reading_time: "5 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 8"
html: "../../../../offline/physics/current-electricity/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Current Electricity with concise step-by-step solutions covering voltmeters, galvanometers, LCR power factor, cells in parallel, and internal resistance.

Solved JEE Main 2026 previous-year questions from Current Electricity, worked out step by step so you can check your method and answer.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

A voltmeter with internal resistance of $x\ \Omega$ can be used to measure upto $20\ \text{V}$. In order to increase its measuring range to $30\ \text{V}$, the required modification is to _____.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The full-scale deflection current $I_g$ is fixed by the meter, so it is the same before and after the modification. Adding a series resistor $R_s$ raises the range.</p><p><strong>Before:</strong> the full-scale current is set by the $20\ \text{V}$ range across $x\ \Omega$:</p>$$I_g = \frac{20}{x}$$<p><strong>After:</strong> for a $30\ \text{V}$ range the same $I_g$ flows through $(x + R_s)$:</p>$$I_g = \frac{30}{x + R_s}$$<p><strong>Equate</strong> the two expressions:</p>$$\frac{20}{x} = \frac{30}{x + R_s} \implies 20(x + R_s) = 30x$$<p></p>$$x + R_s = 1.5x \implies R_s = \frac{x}{2}$$<p>A resistor of $\dfrac{x}{2}\ \Omega$ must be added <strong>in series</strong> (series resistors always extend a voltmeter’s range).</p><p><strong>Answer:</strong> A — connect a resistor of $\frac{x}{2}\ \Omega$ in series with the voltmeter.</p></div></details>

PYQ · 2026 6 Apr, Shift 1

A LCR series circuit driven with $E_{rms} = 90\ \text{V}$ at frequency $f_d = 30\ \text{Hz}$ has resistance $R = 80\ \Omega$, an inductance with inductive reactance $X_L = 20.0\ \Omega$ and capacitance with capacitive reactance $X_C = 80.0\ \Omega$. The power factor of the circuit is ________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Net reactance:</strong></p>$$X = X_L - X_C = 20.0 - 80.0 = -60\ \Omega$$<p><strong>Impedance:</strong></p>$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{80^2 + (-60)^2} = \sqrt{6400 + 3600} = \sqrt{10000} = 100\ \Omega$$<p><strong>Power factor:</strong></p>$$\cos\phi = \frac{R}{Z} = \frac{80}{100} = 0.8$$<p>(The driving voltage and frequency are not needed for the power factor.)</p><p><strong>Answer:</strong> A — $0.8$</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Two resistors of $200\ \Omega$ and $400\ \Omega$ are connected in series with a battery of $100\ \text{V}$. A bulb rated at $200\ \text{V}$, $100\ \text{W}$ is connected across the $400\ \Omega$ resistance. The potential drop across the bulb is __________ V.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Step 1 — Bulb resistance</strong> from its rating:</p>$$R_{\text{bulb}} = \frac{V^2}{P} = \frac{(200)^2}{100} = 400\ \Omega$$<p><strong>Step 2 — Bulb parallel with the $400\ \Omega$ resistor:</strong></p>$$R_p = \frac{400 \times 400}{400 + 400} = 200\ \Omega$$<p><strong>Step 3 — Total resistance</strong> (this $R_p$ in series with the $200\ \Omega$ resistor):</p>$$R_{\text{total}} = 200 + 200 = 400\ \Omega$$<p><strong>Step 4 — Battery current:</strong></p>$$I = \frac{100}{400} = 0.25\ \text{A}$$<p><strong>Step 5 — Voltage across the parallel section (= across the bulb):</strong></p>$$V_{\text{bulb}} = I \times R_p = 0.25 \times 200 = 50\ \text{V}$$<p><strong>Answer:</strong> B — $50$</p></div></details>

PYQ · 2026 6 Apr, Shift 2

A moving coil galvanometer, when shunted with a $2\ \Omega$ resistance, gives a full-scale deflection for a current of $500\ \text{mA}$. When a resistance of $470\ \Omega$ is connected in series it gives a full-scale deflection for $10\ \text{V}$ applied on it. The value of resistance of the galvanometer coil is __________ $\Omega$.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let the coil resistance be $G$ and the full-scale (galvanometer) current be $I_g$; $I_g$ is the same in both experiments.</p><p><strong>Series case</strong> ($470\ \Omega$ in series, $10\ \text{V}$ full scale):</p>$$I_g = \frac{10}{G + 470} \quad\text{(1)}$$<p><strong>Shunt case</strong> ($S = 2\ \Omega$ across the coil, total current $I = 0.5\ \text{A}$):
The shunt carries $(I - I_g)$ and the voltage across both is equal:</p>$$I_g\,G = (I - I_g)\,S \implies I_g\,G = (0.5 - I_g)(2)$$<p></p>$$I_g\,G = 1 - 2 I_g \implies I_g(G + 2) = 1 \implies I_g = \frac{1}{G + 2} \quad\text{(2)}$$<p><strong>Equate (1) and (2):</strong></p>$$\frac{10}{G + 470} = \frac{1}{G + 2}$$<p></p>$$10(G + 2) = G + 470 \implies 10G + 20 = G + 470$$<p></p>$$9G = 450 \implies G = 50\ \Omega$$<p>(Check: $I_g = \tfrac{1}{52} \approx 19.2\ \text{mA}$ from both equations.)</p><p><strong>Answer:</strong> 50</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Two cells of emfs $1\ \text{V}$ and $2\ \text{V}$ and internal resistances $2\ \Omega$ and $1\ \Omega$, respectively, connected in parallel, gave a current of $1\ \text{A}$ through an external resistance. If the polarity of one cell is reversed, then the value of current through the external resistance will be $\dfrac{\alpha}{5}\ \text{A}$. The value of $\alpha$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>For two cells in parallel, use the equivalent-cell (Thevenin) method.</p><p><strong>Equivalent EMF and internal resistance (both cells aiding):</strong></p>$$E_{eq} = \frac{\dfrac{E_1}{r_1} + \dfrac{E_2}{r_2}}{\dfrac{1}{r_1} + \dfrac{1}{r_2}} = \frac{\dfrac{1}{2} + \dfrac{2}{1}}{\dfrac{1}{2} + 1} = \frac{2.5}{1.5} = \frac{5}{3}\ \text{V}$$<p></p>$$r_{eq} = \frac{r_1 r_2}{r_1 + r_2} = \frac{2 \times 1}{3} = \frac{2}{3}\ \Omega$$<p><strong>Find $R$ from the given $1\ \text{A}$:</strong></p>$$I = \frac{E_{eq}}{r_{eq} + R} = 1 \implies r_{eq} + R = E_{eq} = \frac{5}{3} \implies R = \frac{5}{3} - \frac{2}{3} = 1\ \Omega$$<p><strong>Reverse one cell’s polarity</strong> (say the $1\ \text{V}$ cell $\to -1\ \text{V}$); $r_{eq}$ is unchanged:</p>$$E_{eq}' = \frac{-\dfrac{1}{2} + \dfrac{2}{1}}{1.5} = \frac{1.5}{1.5} = 1\ \text{V}$$<p><strong>New current:</strong></p>$$I' = \frac{E_{eq}'}{r_{eq} + R} = \frac{1}{\tfrac{2}{3} + 1} = \frac{1}{\tfrac{5}{3}} = \frac{3}{5}\ \text{A}$$<p>So $\dfrac{\alpha}{5} = \dfrac{3}{5} \implies \alpha = 3$. (Reversing the other cell gives the same magnitude.)</p><p><strong>Answer:</strong> 3</p></div></details>

PYQ · 2026 5 Apr, Shift 2

When an external resistance of $5\ \Omega$ is connected across the terminals of a cell, a current of $0.25\ \text{A}$ flows through it. When the $5\ \Omega$ resistor is replaced by a $2\ \Omega$ resistor, a current of $0.5\ \text{A}$ flows through it. The internal resistance of the cell is __________ $\Omega$.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let the EMF be $E$ and internal resistance be $r$. For each load, $E = I(R + r)$.</p><p><strong>Case 1</strong> ($R = 5\ \Omega$, $I = 0.25\ \text{A}$):</p>$$E = 0.25(5 + r)$$<p><strong>Case 2</strong> ($R = 2\ \Omega$, $I = 0.5\ \text{A}$):</p>$$E = 0.5(2 + r)$$<p><strong>Equate:</strong></p>$$0.25(5 + r) = 0.5(2 + r)$$<p></p>$$1.25 + 0.25r = 1 + 0.5r$$<p></p>$$0.25 = 0.25r \implies r = 1\ \Omega$$<p>(Then $E = 0.25(5 + 1) = 1.5\ \text{V}$, consistent with Case 2.)</p><p><strong>Answer:</strong> 1</p></div></details>

From TestGuru · our mock-test platform

## You've read Current Electricity Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=current-electricity&tg_exam=jee-main&tg_page=%2Fphysics%2Fcurrent-electricity%2Fprevious-year-questions%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/physics/current-electricity/previous-year-questions/](https://jeenotes.in/physics/current-electricity/previous-year-questions/) · raw HTML: `offline/physics/current-electricity/previous-year-questions/index.html`_
