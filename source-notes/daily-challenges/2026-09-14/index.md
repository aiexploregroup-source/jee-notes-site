---
title: "Daily Challenge — 14 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-14/"
description: "Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-14/index.html"
extracted: "2026-11-23"
---

> Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan .

It’s still raining most evenings, and every drop clinging stubbornly to a leaf tip before it finally lets go is surface tension refusing to be rushed - properties of solids and liquids, running a free demo on your balcony every single monsoon evening this week.

Inside, your phone charging overnight is redox chemistry at work, electrons shuffling from one electrode to another until the battery bar climbs. And the number of ways your study group can split this week’s three subjects among four people is permutations and combinations, counting possibilities you didn’t know you had.

New theme, same three questions a day. Start week seven properly - attempt them now.

Physics

## Properties of Solids and Liquids

JEE Main 2026
Apr 4, Shift 2

A metal string $A$ is suspended from a rigid support and its free end is attached to a block of mass $M$. Second block having mass $2M$ is suspended at the bottom of the first block using a string $B$. The area of cross sections of strings $A$ and $B$ are same. The ratio of lengths of strings of $A$ to $B$ is 2 and the ratio of their Young’s moduli ($Y_A/Y_B$) is 0.5. The ratio of elongations in $A$ to $B$ is __________.

- **A.** 1

- **B.** 4

- **C.** 8

- **D.** 6

**Solution / Answer**

Tension in each string equals the total weight hanging below it:

- String $A$ (top) carries both blocks: $F_A = (M + 2M)g = 3Mg$
- String $B$ carries only the lower block: $F_B = 2Mg$

Elongation $\Delta L = \dfrac{F L}{A Y}$ with equal cross-sectional areas:

$$\frac{\Delta L_A}{\Delta L_B} = \frac{F_A}{F_B}\cdot\frac{L_A}{L_B}\cdot\frac{Y_B}{Y_A}$$

Given $\dfrac{L_A}{L_B} = 2$ and $\dfrac{Y_A}{Y_B} = 0.5 \Rightarrow \dfrac{Y_B}{Y_A} = 2$:

$$\frac{\Delta L_A}{\Delta L_B} = \frac{3M}{2M}\times 2 \times 2 = \frac{3}{2}\times 4 = 6$$

**Answer:** D (6)

**Correct option:** D

Chemistry

## Redox Reactions and Electrochemistry

JEE Main 2026
Apr 8, Shift 2

Given at 298 K: $E^{\ominus}_{Fe^{2+}/Fe} = X$ Volt and $E^{\ominus}_{Fe^{3+}/Fe} = Y$ Volt. The $E^{\ominus}_{Fe^{3+}/Fe^{2+}}$ in Volt at 298 K is given by:

- **A.** $2X - 3Y$

- **B.** $3Y - 2X$

- **C.** $3Y + 2X$

- **D.** $Y + X$

**Solution / Answer**

Potentials are not additive, but Gibbs energies ($\Delta G^\circ = -nFE^\circ$) are. Combine the half-reactions:

$$\text{Fe}^{2+} + 2e^- \to \text{Fe} \quad (n=2):\ \Delta G_1 = -2FX$$

$$\text{Fe}^{3+} + 3e^- \to \text{Fe} \quad (n=3):\ \Delta G_2 = -3FY$$

Target: $\text{Fe}^{3+} + e^- \to \text{Fe}^{2+}\ (n=1)$, obtained as $\Delta G_2 - \Delta G_1$:

$$\Delta G_3 = \Delta G_2 - \Delta G_1 = -3FY - (-2FX) = -3FY + 2FX$$

Since $\Delta G_3 = -1\cdot F\cdot E^\ominus_{Fe^{3+}/Fe^{2+}}$:

$$-F\,E^\ominus = -3FY + 2FX \implies E^\ominus_{Fe^{3+}/Fe^{2+}} = 3Y - 2X$$

**Answer:** B

**Correct option:** B

Mathematics

## Permutations and Combinations

JEE Main 2026
6 Apr, Shift 1

The number of 4-letter words, with or without meaning, each consisting of two vowels and two consonants that can be formed from the letters of the word INCONSEQUENTIAL, without repeating any letter, is:

- **A.** 2670

- **B.** 2840

- **C.** 2920

- **D.** 3600

**Solution / Answer**

List the **distinct** letters of INCONSEQUENTIAL.

- Distinct vowels: $A, E, I, O, U$ — that is $5$ vowels.
- Distinct consonants: $C, L, N, Q, S, T$ — that is $6$ consonants.

Since no letter may be repeated, choose $2$ distinct vowels and $2$ distinct consonants, then arrange all $4$ chosen letters:

$$\binom{5}{2}\binom{6}{2}\,4! = 10 \times 15 \times 24 = 3600.$$

**Answer:** D (3600)

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-14/](https://jeenotes.in/daily-challenges/2026-09-14/) · raw HTML: `offline/daily-challenges/2026-09-14/index.html`_
