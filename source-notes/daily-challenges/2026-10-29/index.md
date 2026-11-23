---
title: "Daily Challenge — 29 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-29/"
description: "Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-29/index.html"
extracted: "2026-11-23"
---

> Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan .

Every string of fairy lights going up on balconies as Diwali shopping starts is a live series-and-parallel circuit demo — one bulb blows in a series string and the whole strip goes dark, exactly the failure mode current electricity warns you to design around, whether it’s a decoration or a real circuit.

This week’s halogen question ranks boiling points by van der Waals forces, the same reasoning that decides which decorations survive a humid October evening. And the two functions in today’s calculus question, compared for where they’re not continuous and not differentiable, are the flicker points in an otherwise steady string.

Light it up properly. Three questions — go answer them.

Physics

## Current Electricity

JEE Main 2026
6 Apr, Shift 1

A LCR series circuit driven with $E_{rms} = 90\ \text{V}$ at frequency $f_d = 30\ \text{Hz}$ has resistance $R = 80\ \Omega$, an inductance with inductive reactance $X_L = 20.0\ \Omega$ and capacitance with capacitive reactance $X_C = 80.0\ \Omega$. The power factor of the circuit is ________.

- **A.** 0.8

- **B.** 0.64

- **C.** 0.9

- **D.** 0.5

**Solution / Answer**

**Net reactance:**

$$X = X_L - X_C = 20.0 - 80.0 = -60\ \Omega$$

**Impedance:**

$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{80^2 + (-60)^2} = \sqrt{6400 + 3600} = \sqrt{10000} = 100\ \Omega$$

**Power factor:**

$$\cos\phi = \frac{R}{Z} = \frac{80}{100} = 0.8$$

(The driving voltage and frequency are not needed for the power factor.)

**Answer:** A — $0.8$

**Correct option:** A

Chemistry

## Organic Compounds Containing Halogens

JEE Main 2026
4 Apr, Shift 1

Match the **List-I** (name of reaction) with **List-II** (reagent or catalyst used):

**List-I:** A. Finkelstein reaction; B. Swarts reaction; C. Sandmeyer’s reaction; D. Fittig reaction

**List-II:** I. $\text{SbF}_3$; II. Na, dry ether; III. NaI; IV. $\text{Cu}_2\text{Cl}_2$

- **A.** A-I, B-IV, C-III, D-II

- **B.** A-III, B-I, C-IV, D-II

- **C.** A-IV, B-II, C-I, D-III

- **D.** A-I, B-III, C-II, D-IV

**Solution / Answer**

Recall each named reaction and its characteristic reagent:

- **A. Finkelstein** — halide exchange $R\text{-}X + \text{NaI} \xrightarrow{\text{dry acetone}} R\text{-}I + \text{NaX}$. Reagent: **NaI (III)**.
- **B. Swarts** — replacement of Cl/Br by F using metallic fluorides: $R\text{-}X + \text{SbF}_3 \rightarrow R\text{-}F$. Reagent: **$\text{SbF}_3$ (I)**.
- **C. Sandmeyer** — diazonium to aryl halide: $\text{ArN}_2^+\text{Cl}^- \xrightarrow{\text{Cu}_2\text{Cl}_2} \text{Ar-Cl}$. Reagent: **$\text{Cu}_2\text{Cl}_2$ (IV)**.
- **D. Fittig** — coupling of aryl halides with sodium in dry ether: $2\,\text{Ar-X} + 2\text{Na} \rightarrow \text{Ar-Ar}$. Reagent: **Na, dry ether (II)**.

So A-III, B-I, C-IV, D-II.

**Answer:** B

**Correct option:** B

Mathematics

## Limits, Continuity and Differentiability

JEE Main 2026
6 Apr, Shift 2

Let $\displaystyle\lim_{x\to 2}\dfrac{(\tan(x-2))\left(rx^2+(p-2)x-2p\right)}{(x-2)^2}=5$ for some $r,p\in\mathbb{R}$. If the set of all possible values of $q$, such that the roots of the equation $rx^2-px+q=0$ lie in $(0,2)$, is the interval $(\alpha,\beta)$, then $4(\alpha+\beta)$ equals:

- **A.** $11$

- **B.** $13$

- **C.** $17$

- **D.** $21$

**Solution / Answer**

**Find $r,p$.** As $x\to 2$, $\tan(x-2)\to 0$, so the quadratic must vanish at $x=2$:

$$4r + 2(p-2) - 2p = 4r - 4 = 0 \ \Rightarrow\ r = 1.$$

Then $x^2 + (p-2)x - 2p = (x-2)(x+p)$, and using $\tan(x-2)\sim (x-2)$:

$$\lim_{x\to 2}\dfrac{(x-2)\,(x-2)(x+p)}{(x-2)^2} = (2+p) = 5 \ \Rightarrow\ p = 3.$$

**Roots of $x^2 - 3x + q = 0$ in $(0,2)$.** Let $\phi(x) = x^2 - 3x + q$. Both roots lie in $(0,2)$ iff:

$$\phi(0) > 0:\ q > 0,\qquad \phi(2) > 0:\ 4 - 6 + q > 0 \Rightarrow q > 2,$$

$$\text{discriminant} \ge 0:\ 9 - 4q \ge 0 \Rightarrow q \le \tfrac94,\qquad 0 < \tfrac32 < 2\ (\text{vertex, OK}).$$

So $q \in (2, \tfrac94)$, giving $\alpha = 2,\ \beta = \tfrac94$:

$$4(\alpha + \beta) = 4\left(2 + \tfrac94\right) = 4\cdot\tfrac{17}{4} = 17$$

**Answer:** C

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-29/](https://jeenotes.in/daily-challenges/2026-10-29/) · raw HTML: `offline/daily-challenges/2026-10-29/index.html`_
