---
title: "Daily Challenge — 16 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-16/"
description: "Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-16/index.html"
extracted: "2026-11-23"
---

> Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan .

Kill sets nearly its entire runtime inside a moving train, bodies and metal pushed past what they can take - a decent, brutal illustration of elastic limit, the exact point past which properties of solids and liquids stops springing back and starts staying bent.

Every clash in that compartment is also redox in disguise - somebody’s always getting oxidised, figuratively, while somebody else gains the upper hand, electrons or otherwise. And the number of ways a train full of strangers can end up seated is permutations and combinations at terrifying scale.

No emergency brake on this one - just three questions. Pull them and solve.

Physics

## Properties of Solids and Liquids

JEE Main 2026
Apr 5, Shift 2

Eight mercury drops, each of radius $r$, coalesce to form a bigger drop. The surface energy released in this process is __________. ($S$ is the surface tension of mercury).

- **A.** $8\pi r^2 S$

- **B.** $16\pi r^2 S$

- **C.** $64\pi r^2 S$

- **D.** $4\pi r^2 S$

**Solution / Answer**

Volume conservation fixes the big drop’s radius $R$:

$$8 \cdot \frac{4}{3}\pi r^3 = \frac{4}{3}\pi R^3 \implies R = 8^{1/3} r = 2r$$

Surface energy released = surface tension times **decrease** in total area:

$$\Delta E = S\left(8 \cdot 4\pi r^2 - 4\pi R^2\right) = 4\pi S\left(8r^2 - (2r)^2\right)$$

$$\Delta E = 4\pi S\left(8r^2 - 4r^2\right) = 4\pi S \cdot 4r^2 = 16\pi r^2 S$$

**Answer:** B ($16\pi r^2 S$)

**Correct option:** B

Chemistry

## Redox Reactions and Electrochemistry

JEE Main 2026
Apr 2, Shift 1

An electrochemical cell is constructed using half cells in the direction of spontaneous change
$\mathrm{Fe(OH)}_2(s) + 2e^- \rightarrow \mathrm{Fe}(s) + 2\mathrm{OH}^-(aq)$, $E^0 = -0.88$ V and $\mathrm{AgBr}(s) + e^- \rightarrow \mathrm{Ag}(s) + \mathrm{Br}^-(aq)$, $E^0 = +0.07$ V. Which of the following option is correct?

- **A.** Overall reaction $\mathrm{Fe}(s) + 2\mathrm{OH}^-(aq) + 2\mathrm{AgBr}(s) \rightleftharpoons \mathrm{Fe(OH)}_2(s) + 2\mathrm{Ag}(s) + 2\mathrm{Br}^-(aq)$

- **B.** $E^0_{cell} = -0.95$ V

- **C.** Fe is reduced in the electrochemical cell

- **D.** $E^0_{cell}$ is an extensive property

**Solution / Answer**

For a spontaneous cell, the half-cell with the **higher** $E^0$ is the cathode (reduction).

- Cathode (higher $E^0$): $\text{AgBr}/\text{Ag}$, $E^0 = +0.07$ V
- Anode (lower $E^0$): $\text{Fe(OH)}_2/\text{Fe}$, $E^0 = -0.88$ V

$$E^0_{cell} = E^0_{cath} - E^0_{an} = 0.07 - (-0.88) = +0.95\ \text{V}\ (>0,\ \text{spontaneous})$$

**Half-reactions:**

$$\text{Anode (oxidation): } \text{Fe}(s) + 2\text{OH}^- \to \text{Fe(OH)}_2(s) + 2e^-$$

$$\text{Cathode (reduction): } 2\text{AgBr}(s) + 2e^- \to 2\text{Ag}(s) + 2\text{Br}^-$$

**Overall reaction:**

$$\text{Fe}(s) + 2\text{OH}^-(aq) + 2\text{AgBr}(s) \rightleftharpoons \text{Fe(OH)}_2(s) + 2\text{Ag}(s) + 2\text{Br}^-(aq)$$

This matches option A. (Fe is oxidised, not reduced; $E^0_{cell} = +0.95$ V, not $-0.95$; $E^0_{cell}$ is intensive.)

**Answer:** A

**Correct option:** A

Mathematics

## Permutations and Combinations

JEE Main 2026
8 Apr, Shift 2

A person has three different bags and four different books. The number of ways, in which he can put these books in the bags so that no bag is empty, is:

- **A.** 18

- **B.** 36

- **C.** 39

- **D.** 72

**Solution / Answer**

Each of the $4$ distinct books goes into one of the $3$ distinct bags, and every bag must receive at least one book. This is the number of **onto** functions from $4$ books to $3$ bags.

By inclusion–exclusion:

$$\sum_{i=0}^{3}(-1)^i \binom{3}{i}(3-i)^4 = 3^4 - 3\cdot 2^4 + 3\cdot 1^4 = 81 - 48 + 3 = 36.$$

**Answer:** B (36)

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-16/](https://jeenotes.in/daily-challenges/2026-09-16/) · raw HTML: `offline/daily-challenges/2026-09-16/index.html`_
