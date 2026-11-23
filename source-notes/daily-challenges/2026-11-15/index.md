---
title: "Daily Challenge — 15 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-15/"
description: "Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-15/index.html"
extracted: "2026-11-23"
---

> Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan .

Laapataa Ladies built its charm around two people ending up in the wrong place and the wrong hands, a mix-up that took the whole film to straighten out. A lot of JEE errors are the same kind of mix-up: the right formula applied in the wrong direction.

This week gave you induction and the sign that flips when direction changes, amines whose reactivity depends on who is nearby, and integrals that care about limits. Check which of those mix-ups still catches you.

Treat today as a lost and found desk. Three questions, find what is still missing.

Physics

## Electromagnetic Induction and AC

JEE Main 2026
5 Apr, Shift 1

An a.c. source of angular frequency $\omega$ is connected across a resistor $R$ and a capacitor $C$ in series. The current is observed as $I$. Now the frequency of the source is changed to $\omega/4$ (keeping the voltage unchanged) and the current is found to be $I/3$. The ratio of resistance to reactance at frequency $\omega$ is:

- **A.** $\sqrt{\frac{6}{7}}$

- **B.** $\sqrt{\frac{3}{5}}$

- **C.** $\sqrt{\frac{7}{8}}$

- **D.** $\sqrt{\frac{3}{4}}$

**Solution / Answer**

Let the reactance at frequency $\omega$ be $X_C = \dfrac{1}{\omega C}$. At $\omega/4$ the reactance becomes $4X_C$.

At $\omega$:

$$I = \frac{V}{\sqrt{R^2 + X_C^2}}$$

At $\omega/4$:

$$\frac{I}{3} = \frac{V}{\sqrt{R^2 + (4X_C)^2}}$$

Dividing:

$$3 = \frac{\sqrt{R^2 + 16X_C^2}}{\sqrt{R^2 + X_C^2}} \implies 9(R^2 + X_C^2) = R^2 + 16X_C^2$$

$$8R^2 = 7X_C^2 \implies \frac{R^2}{X_C^2} = \frac{7}{8} \implies \frac{R}{X_C} = \sqrt{\frac{7}{8}}$$

**Answer:** $\sqrt{\dfrac{7}{8}}$

**Correct option:** C

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
Numerical

## Integral Calculus

JEE Main 2026
2 Apr, Shift 1

If $\alpha = \displaystyle\int_0^{2\sqrt{3}} \log_2\left(x^2 + 4\right)dx + \int_2^4 \sqrt{2^x - 4}\,dx$, then $\alpha^2$ is equal to __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Let $u = \log_2(x^2 + 4)$. As $x$ runs over $[0, 2\sqrt3]$, $x^2+4$ runs over $[4,16]$, so $u$ runs over $[2,4]$. Solving for $x$: $x^2 + 4 = 2^u \Rightarrow x = \sqrt{2^u - 4}$. Thus the two integrands are **inverse functions**: $f(x) = \log_2(x^2+4)$ on $[0,2\sqrt3]$ has inverse $f^{-1}(u) = \sqrt{2^u - 4}$ on $[2,4]$.

By the inverse-function area identity, for an increasing $f$ with $f(a)=c,\ f(b)=d$,

$$\int_a^b f(x)\,dx + \int_c^d f^{-1}(u)\,du = b\,d - a\,c.$$

Here $a = 0,\ b = 2\sqrt3,\ c = 2,\ d = 4$, so

$$\alpha = (2\sqrt3)(4) - (0)(2) = 8\sqrt3.$$

Therefore $\alpha^2 = 64\cdot 3 = 192.$

**Answer:** 192

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-15/](https://jeenotes.in/daily-challenges/2026-11-15/) · raw HTML: `offline/daily-challenges/2026-11-15/index.html`_
