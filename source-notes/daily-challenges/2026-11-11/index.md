---
title: "Daily Challenge — 11 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-11/"
description: "Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-11/index.html"
extracted: "2026-11-23"
---

> Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan .

Tap pay on UPI and the whole thing takes two seconds, but the phone that did it was charged by an AC adapter turning wall power into steady DC. Alternating current is just electromagnetic induction on repeat, flux changing again and again.

Chemistry adds nitrogen compounds, where amines behave as bases and diazonium salts open doors to a dozen other products. Mathematics asks you to integrate, which is a fancy way of finding total area when change keeps shifting.

Three questions are ready. Solve them while the payment confirmation tone is still fresh in your head.

Physics

## Electromagnetic Induction and AC

JEE Main 2026
6 Apr, Shift 2

A square loop of side 2 cm is placed in a time varying magnetic field with magnitude as $B=0.4\sin(300t)$ Tesla. The normal to the plane of the loop makes an angle of $60^\circ$ with the field. The maximum induced emf produced in the loop is __________ mV.

- **A.** $12$

- **B.** $18$

- **C.** $21$

- **D.** $24$

**Solution / Answer**

Flux through the loop:

$$\Phi = B A \cos\theta = 0.4\sin(300t)\cdot A \cos60^\circ$$

Induced emf:

$$\varepsilon = -\frac{d\Phi}{dt} = -0.4\cdot 300\cos(300t)\cdot A\cos60^\circ$$

Maximum value ($|\cos(300t)|=1$), with $A=(0.02)^2 = 4\times10^{-4}\ \text{m}^2$ and $\cos60^\circ = 0.5$:

$$\varepsilon_{max} = 0.4\times 300\times 4\times10^{-4}\times 0.5 = 0.024\ \text{V} = 24\ \text{mV}$$

**Answer:** 24

**Correct option:** D

Chemistry

## Organic Compounds Containing Nitrogen

JEE Main 2026
4 Apr, Shift 1

Product C of the following reaction sequence will be:

$$\text{C}_6\text{H}_5\text{NH}_2 \xrightarrow{\text{Br}_2/\text{water}} A \xrightarrow{\text{NaNO}_2/\text{HCl},\,273\text{-}278\,\text{K}} B \xrightarrow{\text{(i) HBF}_4\ \text{(ii) NaNO}_2,\,\text{Cu},\,\Delta} C$$

- **A.** 1-Bromo-4-nitrobenzene

- **B.** 1,3,5-Tribromo-2-nitrobenzene

- **C.** 4-Bromo-1-nitrobenzene

- **D.** 1,3,5-Tribromobenzene

**Solution / Answer**

**Step 1 — Bromination (A):** Aniline is strongly activating, and with $\text{Br}_2$ in water (no catalyst) all three positions ortho/para to $-\text{NH}_2$ are brominated. The major product is **2,4,6-tribromoaniline**.

**Step 2 — Diazotization (B):** $\text{NaNO}_2/\text{HCl}$ at $273\text{-}278\,\text{K}$ converts $-\text{NH}_2$ into the diazonium group, giving **2,4,6-tribromobenzenediazonium chloride** ($\text{Ar–N}_2^{+}$).

**Step 3 — Replacement of $-\text{N}_2^{+}$ by $-\text{NO}_2$ (C):** Treatment with $\text{HBF}_4$ forms the diazonium fluoroborate; subsequent $\text{NaNO}_2/\text{Cu},\Delta$ replaces the diazonium group by a nitro group (nitro-de-diazoniation). The $-\text{NO}_2$ takes the position formerly held by $-\text{NH}_2$ (position 1), with the three bromines at 2, 4 and 6.

Numbering from the nitro group, the bromines sit at 3, 4-adjacent positions giving **1,3,5-tribromo-2-nitrobenzene**.

**Answer:** B

**Correct option:** B

Mathematics

## Integral Calculus

JEE Main 2026
4 Apr, Shift 2

The integral $\displaystyle\int_{0}^{1}\cot^{-1}\left(1 + x + x^2\right)dx$ is equal to:

- **A.** $2\tan^{-1}2 + \dfrac{1}{2}\log_e\left(\dfrac{5}{4}\right) + \dfrac{\pi}{2}$

- **B.** $2\tan^{-1}2 + \dfrac{1}{2}\log_e\left(\dfrac{5}{4}\right) - \dfrac{\pi}{2}$

- **C.** $2\tan^{-1}2 - \dfrac{1}{2}\log_e\left(\dfrac{5}{4}\right) + \dfrac{\pi}{2}$

- **D.** $2\tan^{-1}2 - \dfrac{1}{2}\log_e\left(\dfrac{5}{4}\right) - \dfrac{\pi}{2}$

**Solution / Answer**

Use $\cot^{-1}(1 + x + x^2) = \tan^{-1}\dfrac{1}{1 + x + x^2}$ and the difference formula

$$\tan^{-1}\frac{1}{1+x+x^2} = \tan^{-1}\frac{(x+1) - x}{1 + (x+1)x} = \tan^{-1}(x+1) - \tan^{-1}x.$$

So

$$I = \int_0^1 \tan^{-1}(x+1)\,dx - \int_0^1 \tan^{-1}x\,dx.$$

Using $\int \tan^{-1}u\,du = u\tan^{-1}u - \tfrac12\ln(1+u^2)$:

$\displaystyle\int_0^1 \tan^{-1}(x+1)\,dx$ (let $u=x+1$, $u:1\to2$) $= \big[u\tan^{-1}u - \tfrac12\ln(1+u^2)\big]_1^2 = 2\tan^{-1}2 - \tfrac12\ln5 - \tfrac{\pi}{4} + \tfrac12\ln2.$

$\displaystyle\int_0^1 \tan^{-1}x\,dx = \big[x\tan^{-1}x - \tfrac12\ln(1+x^2)\big]_0^1 = \tfrac{\pi}{4} - \tfrac12\ln2.$

Subtract:

$$I = 2\tan^{-1}2 - \tfrac12\ln5 + \tfrac12\ln2 - \tfrac{\pi}{4} - \tfrac{\pi}{4} + \tfrac12\ln2 = 2\tan^{-1}2 + \ln 2 - \tfrac12\ln5 - \tfrac{\pi}{2}.$$

Since $\ln 2 - \tfrac12\ln 5 = \tfrac12(2\ln2 - \ln5) = \tfrac12\ln\tfrac45 = -\tfrac12\ln\tfrac54$,

$$I = 2\tan^{-1}2 - \frac{1}{2}\ln\frac{5}{4} - \frac{\pi}{2}.$$

**Answer:** D

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-11/](https://jeenotes.in/daily-challenges/2026-11-11/) · raw HTML: `offline/daily-challenges/2026-11-11/index.html`_
