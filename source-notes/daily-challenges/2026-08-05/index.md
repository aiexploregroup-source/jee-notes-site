---
title: "Daily Challenge — 5 August 2026"
source: "https://jeenotes.in/daily-challenges/2026-08-05/"
description: "Week 1 of Mission JEE 2027 · Ground Zero — Foundations week — units, mole concept, and the language of sets. Everything else builds on this. See the full plan ."
html: "../../../offline/daily-challenges/2026-08-05/index.html"
extracted: "2026-11-23"
---

> Week 1 of Mission JEE 2027 · Ground Zero — Foundations week — units, mole concept, and the language of sets. Everything else builds on this. See the full plan .

Umpire’s call is the most argued-about phrase in cricket, and it exists because every measurement has an error margin. Ball-tracking is brilliant, but even it must admit: within this much, we cannot be sure. DRS is basically error analysis with better graphics.

Day 3 of Ground Zero runs on the same idea. Physics gives you a system’s energy with measurement errors in the quantities and asks how the uncertainty propagates. Chemistry turns steam and hot iron into a mole-ratio problem, and maths checks whether you actually know what a given function is doing.

Three questions today. Take the review — you cannot leave this one to the third umpire.

Physics

## Units and Measurements

JEE Main 2025
Evening

The energy of a system is given as $\mathrm{E}(\mathrm{t})=\alpha^3 \mathrm{e}^{-\beta t}$, where t is the time and $\beta=0.3 \mathrm{~s}^{-1}$. The errors in the measurement of $\alpha$ and $t$ are $1.2 \%$ and $1.6 \%$, respectively. At $t=5 \mathrm{~s}$, maximum percentage error in the energy is :

- **A.** $6 \%$

- **B.** $11.6 \%$

- **C.** $4 \%$

- **D.** $8.4 \%$

**Solution / Answer**

We start with the energy function:

$ E(t)= \alpha^3 e^{-\beta t}, $

where $\beta=0.3\, \text{s}^{-1}$.

Step 1. Take the Logarithm

Taking the logarithm of both sides:

$ \ln E = 3 \ln \alpha - \beta t. $

Step 2. Differentiate to Find the Relative Error

Differentiate both sides:

$ \frac{dE}{E} = 3\,\frac{d\alpha}{\alpha} - \beta\, dt. $

For maximum error estimation, we consider the absolute values and sum the contributions:

$ \left|\frac{\Delta E}{E}\right| \approx 3\,\left|\frac{\Delta \alpha}{\alpha}\right| + \beta\, |\Delta t|. $

Step 3. Plug in the Given Errors

The percentage error in $\alpha$ is $1.2\%$ (i.e., $\Delta \alpha/\alpha = 0.012$).

The percentage error in $t$ is $1.6\%$, so for $t=5\,\text{s}$:

$ \Delta t = 0.016 \times 5 = 0.08\, \text{s}. $

Now substitute these values:

$ \left|\frac{\Delta E}{E}\right| \approx 3(0.012) + 0.3(0.08). $

Calculating each term:

$3(0.012) = 0.036$ (or $3.6\%$),

$0.3(0.08) = 0.024$ (or $2.4\%$).

Step 4. Compute the Total Maximum Percentage Error

Add the contributions:

$ \left|\frac{\Delta E}{E}\right| \approx 0.036 + 0.024 = 0.06, $

which is $6\%$.

Thus, the maximum percentage error in the energy at $t = 5\,\text{s}$ is:

$ \boxed{6\%} $

**Answer: Option A (6%).**

**Correct option:** A

Chemistry

## Basic Concepts in Chemistry

JEE Main 2026
2 Apr, Shift 1

The mass of iron converted into $\text{Fe}_3\text{O}_4$ by the action of $18\ \text{g}$ of steam is:

(Given: Molar mass of H, O and Fe are $1$, $16$ and $56\ \text{g mol}^{-1}$ respectively. Assume iron is present in excess.)

- **A.** 2.1 g

- **B.** 4.2 g

- **C.** 21 g

- **D.** 42 g

**Solution / Answer**

**Reaction:**

$$3\,\text{Fe} + 4\,\text{H}_2\text{O} \longrightarrow \text{Fe}_3\text{O}_4 + 4\,\text{H}_2$$

**Step 1 — Moles of steam:**

$$n_{\text{H}_2\text{O}} = \frac{18}{18} = 1\ \text{mol}$$

**Step 2 — Moles of Fe** (ratio $3:4$ with water):

$$n_{\text{Fe}} = \frac{3}{4} \times 1 = 0.75\ \text{mol}$$

**Step 3 — Mass of Fe:**

$$m_{\text{Fe}} = 0.75 \times 56 = 42\ \text{g}$$

**Answer:** D

**Correct option:** D

Mathematics

## Sets, Relations and Functions

JEE Main 2026
Apr 6, Shift 2

Let $f:\mathbb{R}\to\mathbb{R}$ be defined as $f(x)=\dfrac{2x^2-3x+2}{3x^2+x+3}$. Then $f$ is:

- **A.** both one-one and onto

- **B.** one-one but not onto

- **C.** onto but not one-one

- **D.** neither one-one nor onto

**Solution / Answer**

The denominator $3x^2 + x + 3$ has discriminant $1 - 36 < 0$, so it is always positive and $f$ is defined on all of $\mathbb{R}$.

**Onto?** Set $y = f(x)$ and clear denominators:

$$y(3x^2 + x + 3) = 2x^2 - 3x + 2 \implies (3y - 2)x^2 + (y + 3)x + (3y - 2) = 0.$$

For a real $x$ (with $3y - 2 \ne 0$) the discriminant must be $\ge 0$:

$$(y+3)^2 - 4(3y-2)^2 \ge 0 \implies (y - \tfrac17)(y - \tfrac75) \le 0 \implies y \in \left[\tfrac17, \tfrac75\right].$$

The range is the bounded interval $\left[\tfrac17, \tfrac75\right] \ne \mathbb{R}$, so $f$ is **not onto**.

**One-one?** For a generic value $y$ in the range the quadratic in $x$ has two distinct roots, so different $x$ map to the same $y$ (e.g. $f(0) = \tfrac23 = f\!\left(\tfrac{?}{}\right)$ has a second preimage). Hence $f$ is **not one-one**.

$f$ is neither one-one nor onto.

**Answer:** D (neither one-one nor onto)

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-08-05/](https://jeenotes.in/daily-challenges/2026-08-05/) · raw HTML: `offline/daily-challenges/2026-08-05/index.html`_
