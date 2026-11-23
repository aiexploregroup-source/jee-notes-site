---
title: "Daily Challenge — 6 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-06/"
description: "Week 14 of Mission JEE 2027 · Magnetic Personality — Moving charges make fields; alcohols, phenols and ethers; derivatives put to work. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-06/index.html"
extracted: "2026-11-23"
---

> Week 14 of Mission JEE 2027 · Magnetic Personality — Moving charges make fields; alcohols, phenols and ethers; derivatives put to work. See the full plan .

Friday afternoon logic: the closer the weekend gets, the harder your brain pushes back against any new work. Physics people would say nature resists change, and magnetism has a famous version of that stubbornness waiting just next week.

For now, stay with moving charges and the fields they create, then swing over to phenols, where the benzene ring changes how the hydroxyl group behaves compared with ordinary alcohols. Add a derivative or two and you have a full Friday set.

Resist the pull of the weekend for fifteen minutes. Attempt today’s three questions first, then relax with a clear conscience.

Physics

## Magnetic Effects of Current and Magnetism

JEE Main 2026
5 Apr, Shift 2

A particle of charge $q$ and mass $m$ is projected from origin with an initial velocity $\vec{v} = \left(\dfrac{v_0}{\sqrt{2}}\hat{x} + \dfrac{v_0}{\sqrt{2}}\hat{y}\right)$. There exists a uniform magnetic field $\vec{B} = B_0\hat{z}$ and a space varying electric field $\vec{E} = E_0 e^{-\lambda x}\hat{x}$ within the region $0 \leq x \leq L$. After travelling a distance such that $x$-coordinate has changed from $x = 0$ to $x = L$, the change in the kinetic energy is __________.

- **A.** $\dfrac{q E_0}{\lambda}\left[1 - e^{-\lambda L}\right]$

- **B.** $\left(\dfrac{v_0 q B_0}{2\lambda}\right)\left[2 - e^{-2\lambda L}\right]$

- **C.** $\dfrac{q E_0}{\lambda}\left[1 + e^{-\lambda L}\right]$

- **D.** $q\left(\dfrac{E_0 + v_0 B_0}{\lambda}\right)\left[1 - e^{-\lambda L/2}\right]$

**Solution / Answer**

By the work-energy theorem, the change in kinetic energy equals the total work done. The magnetic force does no work (it is always perpendicular to velocity), so only the electric force contributes:

$$\Delta KE = W_E = \int \vec{F}_E\cdot d\vec{r} = \int_{x=0}^{x=L} qE_0 e^{-\lambda x}\,dx$$

Only the $x$-displacement matters since $\vec{E}$ points along $\hat{x}$. Integrating:

$$\Delta KE = qE_0\left[\frac{-e^{-\lambda x}}{\lambda}\right]_0^{L} = \frac{qE_0}{\lambda}\left[1 - e^{-\lambda L}\right]$$

**Answer:** A ($\dfrac{q E_0}{\lambda}\left[1 - e^{-\lambda L}\right]$)

**Correct option:** A

Chemistry

## Organic Compounds Containing Oxygen

JEE Main 2026
2 Apr, Shift 2

An organic compound ‘$x$’ where molar ratio of C, O and H are equal, on treatment with 50% KOH under reflux followed by acidification produced ‘$y$’. The most likely structure of ‘$y$’ is : [Molar mass of ‘$x$’ is 58 g mol$^{-1}$]

- **A.** $CH_2=CH-\overset{O}{\overset{\

- **B.** }{C}}-OH$

- **C.** $CH_3-CH=CH-CH=O$

- **D.** $O=C(OH)-CH_2-OH$

- $CH_3-\overset{O}{\overset{\

- }{C}}-OH$

**Solution / Answer**

Since $C:O:H = 1:1:1$, the formula is $C_nH_nO_n$ with mass $29n$:

$$29n = 58 \;\Rightarrow\; n = 2 \;\Rightarrow\; C_2H_2O_2$$

This is **glyoxal**, $OHC\text{–}CHO$ — a dialdehyde with **no $\alpha$-hydrogen**.

With concentrated (50%) KOH, an aldehyde lacking $\alpha$-H undergoes the **Cannizzaro reaction**. Glyoxal undergoes an *intramolecular* Cannizzaro: one $-CHO$ is oxidised to $-COO^-$ while the other is reduced to $-CH_2OH$. After acidification:

$$OHC\text{–}CHO \xrightarrow[\text{then } H^+]{50\% \text{ KOH}} HOCH_2\text{–}COOH$$

Product $y$ is **glycolic acid** ($HOCH_2COOH$), matching option C.

**Answer:** C

**Correct option:** C

Mathematics

## Limits, Continuity and Differentiability

JEE Main 2026
6 Apr, Shift 1

The value of $\displaystyle\lim_{x \to 0}\left(\dfrac{x^2 \sin^2 x}{x^2 - \sin^2 x}\right)$ is:

- **A.** 2

- **B.** 3

- **C.** 4

- **D.** 6

**Solution / Answer**

Use $\sin x = x - \dfrac{x^3}{6} + O(x^5)$.

**Denominator:**

$$x^2 - \sin^2 x = x^2 - \left(x^2 - \dfrac{x^4}{3} + O(x^6)\right) = \dfrac{x^4}{3} + O(x^6)$$

**Numerator:**

$$x^2 \sin^2 x = x^2\left(x^2 + O(x^4)\right) = x^4 + O(x^6)$$

Therefore

$$\lim_{x\to 0}\dfrac{x^4 + O(x^6)}{\tfrac{x^4}{3} + O(x^6)} = \dfrac{1}{\tfrac13} = 3$$

**Answer:** B

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-06/](https://jeenotes.in/daily-challenges/2026-11-06/) · raw HTML: `offline/daily-challenges/2026-11-06/index.html`_
