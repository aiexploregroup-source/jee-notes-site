---
title: "Electromagnetic Induction Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/physics/electromagnetic-induction/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Electromagnetic Induction with concise, step-by-step solutions covering induced emf, mutual inductance, LCR circuits and RL transients."
updated: "2026-07-01"
reading_time: "7 min read"
breadcrumb: "Physics"
position: "/ Topic 9 of 10"
html: "../../../../offline/physics/electromagnetic-induction/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Electromagnetic Induction with concise, step-by-step solutions covering induced emf, mutual inductance, LCR circuits and RL transients.

A curated set of JEE Main 2026 Electromagnetic Induction problems with clean, worked solutions to help you master induced emf, inductance, and AC circuit analysis.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

An inductor of 10 mH, capacitor of 0.1 $\mu$F and a resistor of 100 $\Omega$ are connected in series across an a.c power supply 220 V, 70 Hz. The power factor of the given circuit is 0.5. The difference in the inductive reactance and capacitance reactance is $\sqrt{3}\,\alpha\ \Omega$. The value of $\alpha$ is _____.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Power factor gives the impedance:</p>$$\cos\phi = \frac{R}{Z} = 0.5 \implies Z = \frac{R}{0.5} = \frac{100}{0.5} = 200\ \Omega$$<p>For a series LCR circuit:</p>$$Z^2 = R^2 + (X_L - X_C)^2$$

$$(X_L - X_C)^2 = Z^2 - R^2 = 200^2 - 100^2 = 30000$$

$$|X_L - X_C| = \sqrt{30000} = 100\sqrt{3}\ \Omega$$<p>Comparing with $\sqrt{3}\,\alpha$:</p>$$\sqrt{3}\,\alpha = 100\sqrt{3} \implies \alpha = 100$$<p><strong>Answer:</strong> 100</p></div></details>

PYQ · 2026 6 Apr, Shift 1

An inductor of inductance 10 mH having resistance of 100 $\Omega$ is connected to a battery of E.M.F. 1.0 V through a switch. After the switch is closed, the ratio of instantaneous voltages across the inductor when the current passing through it is 2 mA and 4 mA is ________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>By Kirchhoff’s voltage law, the emf equals the drop across the coil’s resistance plus the voltage across the ideal inductor. The voltage appearing across the inductor (the back-emf term) is:</p>$$V_L = E - iR$$<p>At $i = 2$ mA:</p>$$V_{L,1} = 1.0 - (2\times10^{-3})(100) = 1.0 - 0.2 = 0.8\ \text{V}$$<p>At $i = 4$ mA:</p>$$V_{L,2} = 1.0 - (4\times10^{-3})(100) = 1.0 - 0.4 = 0.6\ \text{V}$$

$$\frac{V_{L,1}}{V_{L,2}} = \frac{0.8}{0.6} = \frac{4}{3}$$<p><strong>Answer:</strong> 4/3</p></div></details>

PYQ · 2026 2 Apr, Shift 1

When a coil is placed in a time dependent magnetic field the power dissipated in it is $P$. The number of turns, area of the coil and radius of the coil wire are $N$, $A$ and $r$ respectively. For a second coil number of turns, area of the coil and radius of the coil wire are $2N$, $2A$ and $3r$ respectively. When the first coil is replaced with second coil the power dissipated in it is $\sqrt{2}\,\alpha P$. The value of $\alpha$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The induced emf and coil resistance are:</p>$$\varepsilon = N A \frac{dB}{dt}, \qquad R_{coil} = \rho\,\frac{\ell}{a_{wire}} = \rho\,\frac{N(2\sqrt{\pi A})}{\pi r^2}$$<p>Here the wire length $\ell \propto N\sqrt{A}$ (perimeter $\propto \sqrt{A}$) and cross-section $a_{wire}=\pi r^2$.</p><p>Power dissipated:</p>$$P = \frac{\varepsilon^2}{R_{coil}} \propto \frac{(NA)^2}{\dfrac{N\sqrt{A}}{r^2}} = N\,A^{3/2}\,r^2$$<p>Taking the ratio (second to first coil) with $N\to2N$, $A\to2A$, $r\to3r$:</p>$$\frac{P_2}{P_1} = \frac{(2N)(2A)^{3/2}(3r)^2}{N\,A^{3/2}\,r^2} = 2\cdot 2^{3/2}\cdot 9 = 18\cdot 2\sqrt{2} = 36\sqrt{2}$$<p>Comparing with $\sqrt{2}\,\alpha$:</p>$$\sqrt{2}\,\alpha = 36\sqrt{2} \implies \alpha = 36$$<p><strong>Answer:</strong> 36</p></div></details>

PYQ · 2026 2 Apr, Shift 2

A circular current loop of radius $R$ is placed inside a square loop of side length $L$ ($L \gg R$) such that they are co-planar and their centers coincide. The permeability of free space is $\mu_0$. The mutual inductance between the circular loop and the square loop is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Send current $I$ through the square loop. The field at the centre of a square of side $L$ (sum of four finite wires, each a distance $L/2$ from the centre) is:</p>$$B = 4\cdot\frac{\mu_0 I}{4\pi (L/2)}\big(\sin45^\circ + \sin45^\circ\big) = \frac{2\sqrt{2}\,\mu_0 I}{\pi L}$$<p>Since $L \gg R$, this field is essentially uniform over the small circular loop, so the flux linking it is:</p>$$\Phi = B\cdot \pi R^2 = \frac{2\sqrt{2}\,\mu_0 I}{\pi L}\cdot \pi R^2 = \frac{2\sqrt{2}\,\mu_0 I R^2}{L}$$<p>Mutual inductance:</p>$$M = \frac{\Phi}{I} = 2\sqrt{2}\,\frac{\mu_0 R^2}{L}$$<p><strong>Answer:</strong> $2\sqrt{2}\,\dfrac{\mu_0 R^2}{L}$</p></div></details>

PYQ · 2026 6 Apr, Shift 2

A square loop of side 2 cm is placed in a time varying magnetic field with magnitude as $B=0.4\sin(300t)$ Tesla. The normal to the plane of the loop makes an angle of $60^\circ$ with the field. The maximum induced emf produced in the loop is __________ mV.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Flux through the loop:</p>$$\Phi = B A \cos\theta = 0.4\sin(300t)\cdot A \cos60^\circ$$<p>Induced emf:</p>$$\varepsilon = -\frac{d\Phi}{dt} = -0.4\cdot 300\cos(300t)\cdot A\cos60^\circ$$<p>Maximum value ($|\cos(300t)|=1$), with $A=(0.02)^2 = 4\times10^{-4}\ \text{m}^2$ and $\cos60^\circ = 0.5$:</p>$$\varepsilon_{max} = 0.4\times 300\times 4\times10^{-4}\times 0.5 = 0.024\ \text{V} = 24\ \text{mV}$$<p><strong>Answer:</strong> 24</p></div></details>

PYQ · 2026 5 Apr, Shift 1

An a.c. source of angular frequency $\omega$ is connected across a resistor $R$ and a capacitor $C$ in series. The current is observed as $I$. Now the frequency of the source is changed to $\omega/4$ (keeping the voltage unchanged) and the current is found to be $I/3$. The ratio of resistance to reactance at frequency $\omega$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let the reactance at frequency $\omega$ be $X_C = \dfrac{1}{\omega C}$. At $\omega/4$ the reactance becomes $4X_C$.</p><p>At $\omega$:</p>$$I = \frac{V}{\sqrt{R^2 + X_C^2}}$$<p>At $\omega/4$:</p>$$\frac{I}{3} = \frac{V}{\sqrt{R^2 + (4X_C)^2}}$$<p>Dividing:</p>$$3 = \frac{\sqrt{R^2 + 16X_C^2}}{\sqrt{R^2 + X_C^2}} \implies 9(R^2 + X_C^2) = R^2 + 16X_C^2$$

$$8R^2 = 7X_C^2 \implies \frac{R^2}{X_C^2} = \frac{7}{8} \implies \frac{R}{X_C} = \sqrt{\frac{7}{8}}$$<p><strong>Answer:</strong> $\sqrt{\dfrac{7}{8}}$</p></div></details>

PYQ · 2026 5 Apr, Shift 1

In the given circuit, the inductance values of $L_1$, $L_2$ and $L_3$ are the same. Inductor $L_1$ is in series with a parallel combination of $L_2$ and $L_3$. The magnetic energy stored in the entire circuit is $U_t$ and that stored in the $L_2$ inductor is $U_l$. Find $U_t / U_l$. (Ignore the mutual inductance if any.)

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let each inductance be $L$ and the total current from the source be $I$ (this flows fully through $L_1$).</p><p>The parallel combination $L_2 \parallel L_3 = \dfrac{L}{2}$, and since $L_2 = L_3$ the current splits equally, so each carries $I/2$.</p><p>Total energy:</p>$$U_t = \frac{1}{2}L_1 I^2 + \frac{1}{2}\left(\frac{L}{2}\right)I^2 = \frac{1}{2}L I^2 + \frac{1}{4}L I^2 = \frac{3}{4}L I^2$$<p>Energy in $L_2$ (carrying $I/2$):</p>$$U_l = \frac{1}{2}L\left(\frac{I}{2}\right)^2 = \frac{1}{8}L I^2$$<p>Ratio:</p>$$\frac{U_t}{U_l} = \frac{\tfrac{3}{4}L I^2}{\tfrac{1}{8}L I^2} = \frac{3/4}{1/8} = 6$$<p><strong>Answer:</strong> 6</p></div></details>

PYQ · 2026 5 Apr, Shift 2

A metal rod of length $L$ rotates about one end at the origin with a uniform angular velocity $\omega$. The magnetic field radially falls off as $B(r) = B_0 e^{-\lambda r}$, $\lambda$ being a positive constant. The emf induced (neglecting the centripetal force on electrons in the rod) is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>A small element $dr$ at radius $r$ moves with speed $v = \omega r$, contributing motional emf $d\varepsilon = B(r)\,v\,dr$:</p>$$\varepsilon = \int_0^L B_0 e^{-\lambda r}\,(\omega r)\,dr = B_0\omega \int_0^L r\,e^{-\lambda r}\,dr$$<p>Using $\displaystyle\int r\,e^{-\lambda r}\,dr = -\frac{r}{\lambda}e^{-\lambda r} - \frac{1}{\lambda^2}e^{-\lambda r}$:</p>$$\int_0^L r\,e^{-\lambda r}\,dr = \left[-\frac{r}{\lambda}e^{-\lambda r} - \frac{1}{\lambda^2}e^{-\lambda r}\right]_0^L = \frac{1}{\lambda^2} - e^{-\lambda L}\left(\frac{L}{\lambda} + \frac{1}{\lambda^2}\right)$$<p>Therefore:</p>$$\varepsilon = B_0\omega\left[\frac{1}{\lambda^2} - e^{-\lambda L}\left(\frac{1}{\lambda^2} + \frac{L}{\lambda}\right)\right]$$<p><strong>Answer:</strong> $B_0 \omega\left[\dfrac{1}{\lambda^2} - e^{-\lambda L}\left(\dfrac{1}{\lambda^2} + \dfrac{L}{\lambda}\right)\right]$</p></div></details>

PYQ · 2026 5 Apr, Shift 2

A series LCR circuit with $R = 20\,\Omega$, $L = 1.6$ H and $C = 40\,\mu$F is connected to a variable frequency a.c. source. The inductive reactance at resonant frequency is __________ $\Omega$.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>At resonance $X_L = X_C$, and the resonant angular frequency is $\omega_0 = \dfrac{1}{\sqrt{LC}}$. Hence:</p>$$X_L = \omega_0 L = \frac{L}{\sqrt{LC}} = \sqrt{\frac{L}{C}}$$

$$X_L = \sqrt{\frac{1.6}{40\times10^{-6}}} = \sqrt{4\times10^{4}} = 200\ \Omega$$<p><strong>Answer:</strong> 200</p></div></details>

PYQ · 2026 5 Apr, Shift 2

A circular loop of radius 20 cm and resistance $2\,\Omega$ is placed in a time varying magnetic field $\vec{B} = (2t^2 + 2t + 3)$ T. At $t = 0$, the plane of the loop is perpendicular to the magnetic field. The induced current in the loop at $t = 3$ s is $\dfrac{\alpha}{50}$ A. The value of $\alpha$ is __________. (Take $\pi = 22/7$.)

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>With the plane perpendicular to $\vec B$, the normal is parallel to $\vec B$, so $\Phi = B A$. The induced emf:</p>$$\varepsilon = A\left|\frac{dB}{dt}\right| = A\,(4t + 2)$$<p>Area of the loop:</p>$$A = \pi r^2 = \frac{22}{7}(0.2)^2 = \frac{22}{7}\times 0.04 = 0.12571\ \text{m}^2$$<p>At $t = 3$ s, $\dfrac{dB}{dt} = 4(3) + 2 = 14$ T/s:</p>$$\varepsilon = 0.12571\times 14 = 1.76\ \text{V}$$<p>Induced current:</p>$$I = \frac{\varepsilon}{R} = \frac{1.76}{2} = 0.88\ \text{A} = \frac{44}{50}\ \text{A}$$<p>Comparing with $\dfrac{\alpha}{50}$: $\alpha = 44$.</p><p><strong>Answer:</strong> 44</p></div></details>

PYQ · 2026 8 Apr, Shift 2

A 30 cm long solenoid has 10 turns per cm and area of 5 cm$^2$. The current through the solenoid coil varies from 2 A to 4 A in 3.14 s. The e.m.f. induced in the coil is $\alpha \times 10^{-5}$ V. The value of $\alpha$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Self-inductance of a solenoid:</p>$$L = \mu_0 n^2 A \ell$$<p>with $n = 10\ \text{turns/cm} = 1000\ \text{turns/m}$, $A = 5\times10^{-4}\ \text{m}^2$, $\ell = 0.3\ \text{m}$:</p>$$L = (4\pi\times10^{-7})(1000)^2(5\times10^{-4})(0.3) = 1.885\times10^{-4}\ \text{H}$$<p>Induced emf with $\dfrac{dI}{dt} = \dfrac{4-2}{3.14} = \dfrac{2}{3.14}$ A/s:</p>$$\varepsilon = L\frac{dI}{dt} = 1.885\times10^{-4}\times\frac{2}{3.14} \approx 12\times10^{-5}\ \text{V}$$<p>Comparing with $\alpha\times10^{-5}$: $\alpha = 12$.</p><p><strong>Answer:</strong> 12</p></div></details>

From TestGuru · our mock-test platform

## You've read Electromagnetic Induction Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Fprevious-year-questions%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/physics/electromagnetic-induction/previous-year-questions/](https://jeenotes.in/physics/electromagnetic-induction/previous-year-questions/) · raw HTML: `offline/physics/electromagnetic-induction/previous-year-questions/index.html`_
