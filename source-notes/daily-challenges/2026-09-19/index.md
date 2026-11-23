---
title: "Daily Challenge — 19 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-19/"
description: "Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-19/index.html"
extracted: "2026-11-23"
---

> Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan .

Four roommates, one pizza, eight slices, and everyone has an opinion about who gets the extra piece - that argument is permutations and combinations happening live, counting every fair and unfair way the slices could be handed out before anyone’s actually eaten.

The fridge keeping that leftover slice cold overnight runs on redox chemistry inside its compressor circuit, electrons doing the unglamorous work that keeps cheese from spoiling. And the way a dropped ice cube holds its edges before melting is properties of solids and liquids refusing to let go without a fight.

Settle the pizza fight, then settle three questions. Attempt today’s set.

Physics

## Properties of Solids and Liquids

JEE Main 2026
Apr 5, Shift 1

The Young’s modulus of steel wire of radius $r$ and length $L$ is $Y$. If the radius $r$ and length $L$ of the wire are doubled then the value of $Y$

- **A.** increases by two times

- **B.** reduces by half

- **C.** remains unchanged

- **D.** becomes one fourth

**Solution / Answer**

Young’s modulus is a **material property** — it depends only on the material, not on the geometry (dimensions) of the sample.

$$Y = \frac{\text{stress}}{\text{strain}} = \frac{F/A}{\Delta L / L}$$

Although stress and strain individually depend on $A$ and $L$, their ratio $Y$ is fixed for a given material at a given temperature. Doubling the radius and length changes the wire’s stiffness but **not** its Young’s modulus.

$$Y \text{ remains unchanged}$$

**Answer:** C (remains unchanged)

**Correct option:** C

Chemistry

## Redox Reactions and Electrochemistry

JEE Main 2026
Apr 4, Shift 1

In order to oxidise a mixture of 1 mole each of $\text{FeC}_2\text{O}_4$, $\text{Fe}_2(\text{C}_2\text{O}_4)_3$, $\text{FeSO}_4$ and $\text{Fe}_2(\text{SO}_4)_3$ in acidic medium, the number of moles of $\text{KMnO}_4$ required is:

- **A.** 3

- **B.** 2

- **C.** 5

- **D.** 7

**Solution / Answer**

Each $\text{MnO}_4^-$ accepts $5$ electrons in acidic medium. Count the electrons the oxidisable species must give up.

**Per mole of each compound:**

- $\text{FeC}_2\text{O}_4$: $\text{Fe}^{2+}\!\to\!\text{Fe}^{3+}$ ($1e^-$) $+\ \text{C}_2\text{O}_4^{2-}\!\to\!2\text{CO}_2$ ($2e^-$) $= 3e^-$
- $\text{Fe}_2(\text{C}_2\text{O}_4)_3$: Fe already $+3$; $3$ oxalates $\to 3\times 2 = 6e^-$
- $\text{FeSO}_4$: $\text{Fe}^{2+}\!\to\!\text{Fe}^{3+} = 1e^-$
- $\text{Fe}_2(\text{SO}_4)_3$: nothing oxidisable $= 0e^-$

**Total electrons released:**

$$3 + 6 + 1 + 0 = 10\ e^-$$

**Moles of $\text{KMnO}_4$:**

$$n = \frac{10}{5} = 2$$

**Answer:** B (2)

**Correct option:** B

Mathematics

## Permutations and Combinations

JEE Main 2026
5 Apr, Shift 2

A box contains 5 blue, 6 yellow and 4 red balls. The number of ways, of drawing 8 balls containing at least two balls of each colour, is:

- **A.** 4100

- **B.** 4140

- **C.** 4230

- **D.** 4290

**Solution / Answer**

Let $b, y, r$ be the numbers of blue, yellow, red balls drawn, with

$$b + y + r = 8,\quad 2 \le b \le 5,\ 2 \le y \le 6,\ 2 \le r \le 4.$$

Since the balls of a colour are distinguishable, the number of selections for a given $(b, y, r)$ is $\binom{5}{b}\binom{6}{y}\binom{4}{r}$.

Enumerating the valid triples (with $b + y + r = 8$):

$$\sum \binom{5}{b}\binom{6}{y}\binom{4}{r} = 4100.$$

For example the leading contributions include $(2,4,2)$, $(2,2,4)$, $(4,2,2)$, $(3,3,2)$, etc.; summing all admissible cases gives $4100$.

**Answer:** A (4100)

**Correct option:** A

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-19/](https://jeenotes.in/daily-challenges/2026-09-19/) · raw HTML: `offline/daily-challenges/2026-09-19/index.html`_
