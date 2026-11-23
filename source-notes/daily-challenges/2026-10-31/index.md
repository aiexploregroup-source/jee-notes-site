---
title: "Daily Challenge — 31 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-31/"
description: "Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-31/index.html"
extracted: "2026-11-23"
---

> Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan .

There’s no Indian tradition for dressing up on the 31st, but there is a very real deadline feeling to the last day of the month, the kind current electricity captures perfectly in two parallel cells with different EMFs still expected to deliver one clean combined current by the time the circuit closes.

This week’s halogen question runs n-butane through two rounds of chlorination hunting for an optically active product, a slow reveal for a month that’s about to end without asking permission. And the points where two functions in today’s calculus question stop being continuous or differentiable are the last rough edges October leaves behind.

Close the month properly. Three questions — go answer them, no extension coming.

Physics
Numerical

## Current Electricity

JEE Main 2026
6 Apr, Shift 2

Two cells of emfs $1\ \text{V}$ and $2\ \text{V}$ and internal resistances $2\ \Omega$ and $1\ \Omega$, respectively, connected in parallel, gave a current of $1\ \text{A}$ through an external resistance. If the polarity of one cell is reversed, then the value of current through the external resistance will be $\dfrac{\alpha}{5}\ \text{A}$. The value of $\alpha$ is __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

For two cells in parallel, use the equivalent-cell (Thevenin) method.

**Equivalent EMF and internal resistance (both cells aiding):**

$$E_{eq} = \frac{\dfrac{E_1}{r_1} + \dfrac{E_2}{r_2}}{\dfrac{1}{r_1} + \dfrac{1}{r_2}} = \frac{\dfrac{1}{2} + \dfrac{2}{1}}{\dfrac{1}{2} + 1} = \frac{2.5}{1.5} = \frac{5}{3}\ \text{V}$$

$$r_{eq} = \frac{r_1 r_2}{r_1 + r_2} = \frac{2 \times 1}{3} = \frac{2}{3}\ \Omega$$

**Find $R$ from the given $1\ \text{A}$:**

$$I = \frac{E_{eq}}{r_{eq} + R} = 1 \implies r_{eq} + R = E_{eq} = \frac{5}{3} \implies R = \frac{5}{3} - \frac{2}{3} = 1\ \Omega$$

**Reverse one cell’s polarity** (say the $1\ \text{V}$ cell $\to -1\ \text{V}$); $r_{eq}$ is unchanged:

$$E_{eq}' = \frac{-\dfrac{1}{2} + \dfrac{2}{1}}{1.5} = \frac{1.5}{1.5} = 1\ \text{V}$$

**New current:**

$$I' = \frac{E_{eq}'}{r_{eq} + R} = \frac{1}{\tfrac{2}{3} + 1} = \frac{1}{\tfrac{5}{3}} = \frac{3}{5}\ \text{A}$$

So $\dfrac{\alpha}{5} = \dfrac{3}{5} \implies \alpha = 3$. (Reversing the other cell gives the same magnitude.)

**Answer:** 3

Chemistry

## Organic Compounds Containing Halogens

JEE Main 2026
8 Apr, Shift 2

n-Butane on monochlorination under photochemical conditions gives an optically active compound “P”. “P” on further chlorination gives dichloro compounds. The number of dichloro compounds obtained (ignore stereoisomers) is:

- **A.** 3

- **B.** 4

- **C.** 5

- **D.** 6

**Solution / Answer**

**Identify P.** Monochlorination of n-butane $\text{CH}_3\text{-CH}_2\text{-CH}_2\text{-CH}_3$ gives 1-chlorobutane and 2-chlorobutane. Only **2-chlorobutane** $\text{CH}_3\text{-}\underset{\text{Cl}}{\text{CH}}\text{-CH}_2\text{-CH}_3$ has a chiral carbon, so it is the optically active product **P**.

**Second chlorination of 2-chlorobutane.** Label the carbons $\text{C}^1\text{H}_3\text{-}\text{C}^2\text{HCl-}\text{C}^3\text{H}_2\text{-}\text{C}^4\text{H}_3$. A second Cl can replace an H at any of the four carbons:

- New Cl at $\text{C}^1$ → 1,2-dichlorobutane
- New Cl at $\text{C}^2$ → 2,2-dichlorobutane
- New Cl at $\text{C}^3$ → 2,3-dichlorobutane
- New Cl at $\text{C}^4$ → 1,3-dichlorobutane (renumbering $\text{ClCH}_2\text{-CH}_2\text{-CHCl-CH}_3$)

Ignoring stereoisomers, these are **4 distinct** dichloro compounds.

**Answer:** 4 (option B)

**Correct option:** B

Mathematics
Numerical

## Limits, Continuity and Differentiability

JEE Main 2026
4 Apr, Shift 2

Let $f(x) = \begin{cases} e^{x-1} & , x < 0 \\ x^2 - 5x + 6 & , x \ge 0 \end{cases}$ and $g(x) = f(|x|) + |f(x)|$. If the number of points where $g$ is not continuous and is not differentiable are $\alpha$ and $\beta$ respectively, then $\alpha + \beta$ is equal to __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

**$f(|x|)$.** Since $|x|\ge 0$, this is always $|x|^2 - 5|x| + 6 = x^2 - 5|x| + 6$ — continuous everywhere, with a single corner at $x=0$ (from $|x|$).

**$|f(x)|$.** For $x<0$, $|e^{x-1}| = e^{x-1}$ (smooth, positive). For $x\ge 0$, $|x^2-5x+6| = |(x-2)(x-3)|$, which has V-corners at $x=2,3$.

At $x=0$, $f$ itself jumps: $\displaystyle\lim_{x\to 0^-}e^{x-1} = e^{-1}$ but $f(0)=6$. So $|f(x)|$ (and hence $g$) jumps at $x=0$:

$$g(0^-) = f(0) + e^{-1} = 6 + e^{-1},\qquad g(0^+) = 6 + 6 = 12.$$

**Continuity.** $g$ is discontinuous only at $x=0$ $\Rightarrow \alpha = 1$.

**Differentiability.** Non-differentiable at $x=0$ (jump/corner) and at $x=2,3$ (corners of $|(x-2)(x-3)|$) $\Rightarrow \beta = 3$.

$$\alpha + \beta = 1 + 3 = 4$$

**Answer:** 4

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-31/](https://jeenotes.in/daily-challenges/2026-10-31/) · raw HTML: `offline/daily-challenges/2026-10-31/index.html`_
