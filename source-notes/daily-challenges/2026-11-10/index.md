---
title: "Daily Challenge — 10 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-10/"
description: "Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-10/index.html"
extracted: "2026-11-23"
---

> Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan .

In Squid Game the rules punish anyone who moves when they should not, and the universe has an equivalent: Lenz’s law says an induced current always flows in the direction that opposes the change that made it. Nature is basically the red light.

Pair that with amines, where basicity depends on whether the nitrogen lone pair is available or tied up by a nearby group, and the logic of opposing and resisting follows you into chemistry. Integration then asks you to add up infinitely many tiny pieces.

Tuesday of a big week is where habits form. Take today’s three questions and keep the streak.

Physics
Numerical

## Electromagnetic Induction and AC

JEE Main 2026
5 Apr, Shift 2

A circular loop of radius 20 cm and resistance $2\,\Omega$ is placed in a time varying magnetic field $\vec{B} = (2t^2 + 2t + 3)$ T. At $t = 0$, the plane of the loop is perpendicular to the magnetic field. The induced current in the loop at $t = 3$ s is $\dfrac{\alpha}{50}$ A. The value of $\alpha$ is __________. (Take $\pi = 22/7$.)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

With the plane perpendicular to $\vec B$, the normal is parallel to $\vec B$, so $\Phi = B A$. The induced emf:

$$\varepsilon = A\left|\frac{dB}{dt}\right| = A\,(4t + 2)$$

Area of the loop:

$$A = \pi r^2 = \frac{22}{7}(0.2)^2 = \frac{22}{7}\times 0.04 = 0.12571\ \text{m}^2$$

At $t = 3$ s, $\dfrac{dB}{dt} = 4(3) + 2 = 14$ T/s:

$$\varepsilon = 0.12571\times 14 = 1.76\ \text{V}$$

Induced current:

$$I = \frac{\varepsilon}{R} = \frac{1.76}{2} = 0.88\ \text{A} = \frac{44}{50}\ \text{A}$$

Comparing with $\dfrac{\alpha}{50}$: $\alpha = 44$.

**Answer:** 44

Chemistry

## Organic Compounds Containing Nitrogen

JEE Main 2026
8 Apr, Shift 2

Which statements are True?

A. In Hofmann bromamide degradation, 4 moles of NaOH and 2 moles of $\text{Br}_2$ are consumed per mole of an amide.

B. Hofmann bromamide reaction is not given by alkyl amides.

C. Primary amines can be synthesized by Hofmann bromamide degradation.

D. Secondary amide on reaction with $\text{Br}_2$ and NaOH will give secondary amine.

E. The by-products of Hofmann degradation are $\text{Na}_2\text{CO}_3$, NaBr and $\text{H}_2\text{O}$.

Choose the correct answer:

- **A.** A, C and E only

- **B.** B, C and D only

- **C.** C and E only

- **D.** C, D and E only

**Solution / Answer**

The balanced Hofmann bromamide equation is:

$$R\text{-}CONH_2 + Br_2 + 4\,NaOH \longrightarrow R\text{-}NH_2 + Na_2CO_3 + 2\,NaBr + 2\,H_2O$$

Evaluating each statement:

- **A — FALSE.** Per mole of amide, $4\ \text{mol NaOH}$ but only $1\ \text{mol Br}_2$ is consumed (not 2).
- **B — FALSE.** Alkyl amides do undergo the reaction (e.g. $CH_3CONH_2 \to CH_3NH_2$). It is not restricted to aryl amides.
- **C — TRUE.** The reaction converts a primary amide $R\text{-}CONH_2$ into a **primary amine** $R\text{-}NH_2$ (with one fewer carbon).
- **D — FALSE.** The rearrangement needs a primary amide ($-CONH_2$). N-substituted (secondary) amides lack the required $\text{N–H}$/migration pathway to give the analogous amine.
- **E — TRUE.** The by-products are exactly $Na_2CO_3$, $NaBr$ and $H_2O$, as shown in the balanced equation.

Only **C and E** are true.

**Answer:** C

**Correct option:** C

Mathematics

## Integral Calculus

JEE Main 2026
8 Apr, Shift 2

Let $f(x) = \begin{cases} \dfrac{1}{3}, & x \le \pi/2 \\[4pt] \dfrac{b(1 - \sin x)}{(\pi - 2x)^2}, & x > \pi/2 \end{cases}$. If $f$ is continuous at $x = \pi/2$, then the value of $\displaystyle\int_0^{3b - 6} |x^2 + 2x - 3|\,dx$ is:

- **A.** 5

- **B.** 2

- **C.** 3

- **D.** 4

**Solution / Answer**

**Continuity fixes $b$.** Let $x = \tfrac{\pi}{2} + h$. Then $\sin x = \cos h \approx 1 - \tfrac{h^2}{2}$, so $1 - \sin x \approx \tfrac{h^2}{2}$, and $\pi - 2x = -2h$, so $(\pi - 2x)^2 = 4h^2$. Hence

$$\lim_{x\to \pi/2^+} \frac{b(1 - \sin x)}{(\pi - 2x)^2} = \frac{b\cdot h^2/2}{4h^2} = \frac{b}{8}.$$

For continuity this equals $\tfrac13$: $\dfrac{b}{8} = \dfrac13 \Rightarrow b = \dfrac{8}{3}$, so $3b - 6 = 8 - 6 = 2$.

**Evaluate the integral** $\displaystyle\int_0^2 |x^2 + 2x - 3|\,dx$. Since $x^2 + 2x - 3 = (x+3)(x-1)$ is negative on $[0,1]$ and positive on $[1,2]$:

$$\int_0^1 -(x^2 + 2x - 3)\,dx + \int_1^2 (x^2 + 2x - 3)\,dx.$$

$$\int_0^1 (3 - 2x - x^2)\,dx = 3 - 1 - \frac13 = \frac{5}{3},\qquad \int_1^2 (x^2 + 2x - 3)\,dx = \frac{7}{3} + 3 - 3 = \frac{7}{3}.$$

Total $= \dfrac{5}{3} + \dfrac{7}{3} = 4.$

**Answer:** D

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-10/](https://jeenotes.in/daily-challenges/2026-11-10/) · raw HTML: `offline/daily-challenges/2026-11-10/index.html`_
