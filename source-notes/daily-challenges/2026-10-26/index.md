---
title: "Daily Challenge — 26 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-26/"
description: "Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-26/index.html"
extracted: "2026-11-23"
---

> Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan .

Every time a news app fires off a breaking alert and your phone briefly can’t decide which app to show first, that’s current taking the path of least resistance — exactly the idea current electricity runs on, charge flowing wherever the circuit makes it easiest, external resistance and all.

This week’s other current affairs, organic compounds containing halogens, start with a compound that already has a favourite reaction path picked out, chirality and all. And a function that refuses to be differentiable at a few sharp points is its own kind of breaking news, discontinuity nobody warned you about in advance.

New week, same pun, real questions. Three of them — go be current.

Physics
Numerical

## Current Electricity

JEE Main 2026
5 Apr, Shift 2

When an external resistance of $5\ \Omega$ is connected across the terminals of a cell, a current of $0.25\ \text{A}$ flows through it. When the $5\ \Omega$ resistor is replaced by a $2\ \Omega$ resistor, a current of $0.5\ \text{A}$ flows through it. The internal resistance of the cell is __________ $\Omega$.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Let the EMF be $E$ and internal resistance be $r$. For each load, $E = I(R + r)$.

**Case 1** ($R = 5\ \Omega$, $I = 0.25\ \text{A}$):

$$E = 0.25(5 + r)$$

**Case 2** ($R = 2\ \Omega$, $I = 0.5\ \text{A}$):

$$E = 0.5(2 + r)$$

**Equate:**

$$0.25(5 + r) = 0.5(2 + r)$$

$$1.25 + 0.25r = 1 + 0.5r$$

$$0.25 = 0.25r \implies r = 1\ \Omega$$

(Then $E = 0.25(5 + 1) = 1.5\ \text{V}$, consistent with Case 2.)

**Answer:** 1

Chemistry

## Organic Compounds Containing Halogens

JEE Main 2026
6 Apr, Shift 1

**Statement I:** 3-phenylpropene reacts with HBr and gives a secondary alkyl bromide having a chiral carbon atom as the major product.

**Statement II:** Aryl chlorides and aryl cyanides can be prepared by the Sandmeyer reaction as well as the Gattermann reaction.

- **A.** Both Statement I and Statement II are true

- **B.** Both Statement I and Statement II are false

- **C.** Statement I is true but Statement II is false

- **D.** Statement I is false but Statement II is true

**Solution / Answer**

**Statement I:** 3-phenylpropene is allylbenzene, $\text{C}_6\text{H}_5\text{-}\text{CH}_2\text{-}\text{CH}=\text{CH}_2$. Markovnikov addition of HBr places Br on the more substituted internal carbon:

$$\text{C}_6\text{H}_5\text{-CH}_2\text{-CH}=\text{CH}_2 + \text{HBr} \rightarrow \text{C}_6\text{H}_5\text{-CH}_2\text{-}\underset{\text{Br}}{\text{CH}}\text{-CH}_3$$

The Br-bearing carbon carries four different groups ($\text{-Br}$, $\text{-H}$, $\text{-CH}_3$, $\text{-CH}_2\text{C}_6\text{H}_5$), so it is a chiral secondary bromide. **True.**

**Statement II:** Both routes start from a diazonium salt. Sandmeyer uses cuprous salts ($\text{Cu}_2\text{Cl}_2$ for Ar-Cl, CuCN for Ar-CN); Gattermann uses copper powder with HCl (Ar-Cl) or with KCN/Cu (Ar-CN). Both give aryl chlorides and aryl cyanides. **True.**

Both statements are true.

**Answer:** A

**Correct option:** A

Mathematics
Numerical

## Limits, Continuity and Differentiability

JEE Main 2026
4 Apr, Shift 1

The number of points, at which the function $f(x) = \max\{6x,\ 2 + 3x^2\} + |x - 1|\left|\cos\left|x^2 - \dfrac{1}{4}\right|\right|$, $x \in (-\pi, \pi)$, is not differentiable, is _____.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

**Part 1 — the $\max$ term.** Compare $6x$ and $2+3x^2$:

$$2+3x^2 - 6x = 3x^2 - 6x + 2 = 0 \ \Rightarrow\ x = 1 \pm \tfrac{1}{\sqrt3}\ (\approx 0.423,\ 1.577)$$

The two branches swap dominance at these two points, giving corners at

$$x = 1-\tfrac{1}{\sqrt3},\quad x = 1+\tfrac{1}{\sqrt3}\qquad(\textbf{2 points}).$$

**Part 2 — the $|x-1|$ factor.** $|x-1|$ has a corner at $x=1$, and there $\left|\cos\left|1-\tfrac14\right|\right| = |\cos 0.75| \ne 0$, so the product is non-differentiable at $x=1$ $(\textbf{1 point})$. (The $\max$ term equals $6x$ there and is smooth.)

**Part 3 — zeros of $\left|\cos|x^2-\tfrac14|\right|$.** Since $\cos|u| = \cos u$ is smooth through $u=0$, the inner $\left|x^2-\tfrac14\right|$ creates **no** corner at $x=\pm\tfrac12$. But $|\cos(\cdot)|$ has a V-corner wherever $\cos = 0$:

$$\left|x^2 - \tfrac14\right| = \tfrac{\pi}{2} + k\pi \ \Rightarrow\ x^2 = \tfrac14 + \left(\tfrac{\pi}{2}+k\pi\right)$$

For $x^2 < \pi^2$ this gives $|x| \approx 1.349,\ 2.228,\ 2.847$, i.e. the six points $x \approx \pm1.349,\ \pm2.228,\ \pm2.847$. At each, $|x-1|\ne 0$, so the product keeps the corner $(\textbf{6 points}).$

**Total:** $2 + 1 + 6 = 9$.

**Answer:** 9

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-26/](https://jeenotes.in/daily-challenges/2026-10-26/) · raw HTML: `offline/daily-challenges/2026-10-26/index.html`_
