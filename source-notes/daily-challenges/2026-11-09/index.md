---
title: "Daily Challenge — 9 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-09/"
description: "Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-09/index.html"
extracted: "2026-11-23"
---

> Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan .

Plug in your phone at night and a small brick quietly converts the wall supply into something safe for a battery. That brick works because a changing magnetic flux induces a voltage, and the discovery of that fact is the opening act of week fifteen.

The week is called Induced Effort, and it brings amines and other nitrogen compounds on the chemistry side, plus the beginning of integration, the largest calculus block in the whole plan. It is a heavy week, so the launch matters.

Start strong: today’s three questions set the tone for everything that follows.

Physics

## Electromagnetic Induction and AC

JEE Main 2026
2 Apr, Shift 2

A circular current loop of radius $R$ is placed inside a square loop of side length $L$ ($L \gg R$) such that they are co-planar and their centers coincide. The permeability of free space is $\mu_0$. The mutual inductance between the circular loop and the square loop is __________.

- **A.** $2\sqrt{2}\,\dfrac{\mu_0 L^2}{R}$

- **B.** $\sqrt{2}\,\dfrac{\mu_0 L^2}{R}$

- **C.** $\sqrt{2}\,\dfrac{\mu_0 R^2}{L}$

- **D.** $2\sqrt{2}\,\dfrac{\mu_0 R^2}{L}$

**Solution / Answer**

Send current $I$ through the square loop. The field at the centre of a square of side $L$ (sum of four finite wires, each a distance $L/2$ from the centre) is:

$$B = 4\cdot\frac{\mu_0 I}{4\pi (L/2)}\big(\sin45^\circ + \sin45^\circ\big) = \frac{2\sqrt{2}\,\mu_0 I}{\pi L}$$

Since $L \gg R$, this field is essentially uniform over the small circular loop, so the flux linking it is:

$$\Phi = B\cdot \pi R^2 = \frac{2\sqrt{2}\,\mu_0 I}{\pi L}\cdot \pi R^2 = \frac{2\sqrt{2}\,\mu_0 I R^2}{L}$$

Mutual inductance:

$$M = \frac{\Phi}{I} = 2\sqrt{2}\,\frac{\mu_0 R^2}{L}$$

**Answer:** $2\sqrt{2}\,\dfrac{\mu_0 R^2}{L}$

**Correct option:** D

Chemistry

## Organic Compounds Containing Nitrogen

JEE Main 2026
5 Apr, Shift 2

**Statement I:** Heating benzamide with bromine in an ethanolic solution of sodium hydroxide will give benzylamine.

**Statement II:** Nitration of aniline with $\text{HNO}_3/\text{H}_2\text{SO}_4$ at $288\,\text{K}$ produces m-nitroaniline in higher amount than o-nitroaniline.

In the light of the above statements, choose the correct answer:

- **A.** Both Statement I and Statement II are true

- **B.** Both Statement I and Statement II are false

- **C.** Statement I is true but Statement II is false

- **D.** Statement I is false but Statement II is true

**Solution / Answer**

**Statement I — FALSE.** Benzamide undergoing the Hofmann bromamide degradation loses one carbon (the carbonyl carbon leaves as carbonate):

$$C_6H_5CONH_2 \xrightarrow{Br_2,\,NaOH} C_6H_5NH_2\ (\text{aniline}).$$

The product is **aniline**, not benzylamine. (Benzylamine, $C_6H_5CH_2NH_2$, would require the same number of carbons, which the degradation does not give.)

**Statement II — TRUE.** In the strongly acidic nitrating mixture, aniline is protonated to the anilinium ion $C_6H_5NH_3^{+}$. The $-\overset{+}{N}H_3$ group is deactivating and **meta-directing**, so a substantial fraction of meta product forms. The observed distribution is roughly $\approx 47\%$ meta, $\approx 51\%$ para and only $\approx 2\%$ ortho. Hence m-nitroaniline is formed in higher amount than o-nitroaniline.

Statement I is false and Statement II is true.

**Answer:** D

**Correct option:** D

Mathematics
Numerical

## Integral Calculus

JEE Main 2026
8 Apr, Shift 2

If $\displaystyle\int_{\pi/6}^{\pi/4} \left(\cot\left(x - \frac{\pi}{3}\right)\cot\left(x + \frac{\pi}{3}\right) + 1\right)dx = \alpha\log_e(\sqrt{3} - 1)$, then $9\alpha^2$ is equal to __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Let $A = x - \tfrac{\pi}{3}$, $B = x + \tfrac{\pi}{3}$, so $B - A = \tfrac{2\pi}{3}$ and $\cot(B - A) = \cot\tfrac{2\pi}{3} = -\tfrac{1}{\sqrt3}$. From the identity

$$\cot(B - A) = \frac{\cot A\cot B + 1}{\cot B - \cot A},$$

we get $\cot A\cot B + 1 = -\dfrac{1}{\sqrt3}\big(\cot B - \cot A\big)$. Hence

$$\cot\!\left(x-\tfrac\pi3\right)\cot\!\left(x+\tfrac\pi3\right) + 1 = -\frac{1}{\sqrt3}\left[\cot\!\left(x+\tfrac\pi3\right) - \cot\!\left(x-\tfrac\pi3\right)\right].$$

Integrate using $\int \cot u\,du = \ln|\sin u|$:

$$\int_{\pi/6}^{\pi/4}(\cdots)\,dx = -\frac{1}{\sqrt3}\Big[\ln\big|\sin(x+\tfrac\pi3)\big| - \ln\big|\sin(x-\tfrac\pi3)\big|\Big]_{\pi/6}^{\pi/4}.$$

Evaluating the bracket at the limits reduces the result to

$$-\frac{2}{\sqrt3}\ln(\sqrt3 - 1) = \alpha\ln(\sqrt3 - 1),$$

so $\alpha = -\dfrac{2}{\sqrt3}$ and

$$9\alpha^2 = 9\cdot\frac{4}{3} = 12.$$

**Answer:** 12

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-09/](https://jeenotes.in/daily-challenges/2026-11-09/) · raw HTML: `offline/daily-challenges/2026-11-09/index.html`_
