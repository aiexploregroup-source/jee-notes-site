---
title: "Daily Challenge — 20 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-20/"
description: "Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-20/index.html"
extracted: "2026-11-23"
---

> Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan .

Housefull 5 runs an entire farce on mistaken identities stacking on top of each other until nobody on screen knows who’s who - which is, underneath the chaos, permutations and combinations counting every possible mix-up the plot can wring out of one yacht.

Somewhere off screen a generator is still doing redox chemistry to keep the lights on for the shoot, and the sea spray clinging to the deck railing is surface tension, properties of solids and liquids refusing the invitation to just drip off immediately.

Week seven wraps today - counting, electrons, and liquids. Three questions to close it out.

Physics
Numerical

## Properties of Solids and Liquids

JEE Main 2026
Apr 4, Shift 1

The surface tension of a soap solution is $3.5 \times 10^{-2}$ N/m. The work required to increase the radius of a soap bubble from 1 cm to 2 cm is $\alpha \times 10^{-6}$ J. The value of $\alpha$ is _____. ($\pi = 22/7$)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

A soap bubble has **two** surfaces, so the work equals surface tension times the increase in total area:

$$W = T \cdot \Delta A = T \cdot 2 \cdot 4\pi (r_2^2 - r_1^2) = 8\pi T (r_2^2 - r_1^2)$$

With $r_1 = 0.01\ \text{m}$, $r_2 = 0.02\ \text{m}$:

$$r_2^2 - r_1^2 = (4 - 1)\times 10^{-4} = 3 \times 10^{-4}\ \text{m}^2$$

$$W = 8 \times \frac{22}{7} \times 3.5 \times 10^{-2} \times 3 \times 10^{-4}$$

$$W = 8 \times 11 \times 10^{-2} \times 3 \times 10^{-4} = 264 \times 10^{-6}\ \text{J}$$

**Answer:** 264

Chemistry

## Redox Reactions and Electrochemistry

JEE Main 2026
Apr 2, Shift 1

Which of the following sets includes all the species that will change the orange colour of $\text{K}_2\text{Cr}_2\text{O}_7$ in acidic medium?

- **A.** $Fe^{2+}$, $Sn^{2+}$, $I^-$, $S^{2-}$

- **B.** $S^{2-}$, $Fe^{3+}$, $I^-$, $C_2O_4^{2-}$

- **C.** $Fe^{2+}$, $NO_2^-$, $SO_2$, $Sn^{4+}$

- **D.** $Fe^{3+}$, $SO_4^{2-}$, $S^{2-}$, $Sn^{4+}$

**Solution / Answer**

$\text{K}_2\text{Cr}_2\text{O}_7$ (orange, $\text{Cr}^{+6}$) is a strong **oxidising agent**; it changes colour ($\to$ green $\text{Cr}^{3+}$) only when it meets a **reducing agent**. Every species in the correct set must be able to be oxidised further.

Check each option:

- **A:** $\text{Fe}^{2+}\!\to\!\text{Fe}^{3+}$, $\text{Sn}^{2+}\!\to\!\text{Sn}^{4+}$, $I^-\!\to\!I_2$, $S^{2-}\!\to\!S$ — **all are reducing agents.** ✓
- B: $\text{Fe}^{3+}$ is already oxidised (not a reductant). ✗
- C: $\text{Sn}^{4+}$ is the highest common state (not a reductant). ✗
- D: $\text{Fe}^{3+}$, $\text{SO}_4^{2-}$, $\text{Sn}^{4+}$ are all in their highest states (not reductants). ✗

**Answer:** A

**Correct option:** A

Mathematics

## Permutations and Combinations

JEE Main 2026
4 Apr, Shift 2

Let $A = \{(a, b, c) : a, b, c$ are non-negative integers and $a + b + 2c = 22\}$. Then $n(A)$ is equal to:

- **A.** 121

- **B.** 124

- **C.** 144

- **D.** 169

**Solution / Answer**

Fix $c$. Then $a + b = 22 - 2c$, and the number of non-negative integer pairs $(a, b)$ with a fixed sum $s = 22 - 2c$ is $s + 1$.

Since $a + b = 22 - 2c \ge 0$, we need $c = 0, 1, 2, \ldots, 11$. For each such $c$:

$$\text{count} = (22 - 2c) + 1 = 23 - 2c.$$

Summing over $c = 0$ to $11$:

$$\sum_{c=0}^{11}(23 - 2c) = 23 + 21 + 19 + \cdots + 1 = \sum_{k=1,\,3,\,\ldots}^{23} k.$$

This is the sum of the first $12$ odd numbers ($1, 3, \ldots, 23$):

$$12^2 = 144.$$

**Answer:** C (144)

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-20/](https://jeenotes.in/daily-challenges/2026-09-20/) · raw HTML: `offline/daily-challenges/2026-09-20/index.html`_
