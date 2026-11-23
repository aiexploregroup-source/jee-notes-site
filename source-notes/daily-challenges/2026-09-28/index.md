---
title: "Daily Challenge — 28 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-28/"
description: "Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-28/index.html"
extracted: "2026-11-23"
---

> Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan .

Squeeze into a packed metro compartment at rush hour and you’re living inside kinetic theory of gases without a lab coat in sight - bodies moving randomly, colliding constantly, pressure on the doors rising exactly the way molecules crowd a shrinking container.

The turnstile reading your card in a fraction of a second is chemical kinetics doing its job at industrial speed, a reaction rate you never think to appreciate. And the seating chart the metro app could technically compute for every stop is matrices and determinants, silently running the numbers behind the scenes.

New theme, same three questions. Start week nine properly - go answer them.

Physics

## Kinetic Theory of Gases

JEE Main 2026
6 Apr, Shift 2

If 2 mole of an ideal monoatomic gas at temperature $T$, is mixed with 6 mole of another ideal monoatomic gas at temperature $2T$ then the temperature of mixture is:

- **A.** $\dfrac{5}{2}T$

- **B.** $\dfrac{5}{4}T$

- **C.** $\dfrac{7}{2}T$

- **D.** $\dfrac{7}{4}T$

**Solution / Answer**

When the two gases are mixed without any external work or heat exchange, the total internal energy is conserved. For an ideal monoatomic gas $U = \dfrac{3}{2} n R T$, so:

$$U_1 + U_2 = U_{\text{mix}}$$

$$\frac{3}{2} n_1 R T_1 + \frac{3}{2} n_2 R T_2 = \frac{3}{2}(n_1 + n_2) R T_{\text{mix}}$$

Cancelling $\dfrac{3}{2}R$ throughout:

$$n_1 T_1 + n_2 T_2 = (n_1 + n_2) T_{\text{mix}}$$

Substitute $n_1 = 2,\ T_1 = T,\ n_2 = 6,\ T_2 = 2T$:

$$(2)(T) + (6)(2T) = (2 + 6)\, T_{\text{mix}}$$

$$2T + 12T = 8\, T_{\text{mix}} \quad\Rightarrow\quad 14T = 8\, T_{\text{mix}}$$

$$T_{\text{mix}} = \frac{14T}{8} = \frac{7}{4}T$$

**Answer:** D ($\dfrac{7}{4}T$)

**Correct option:** D

Chemistry

## Chemical Kinetics

JEE Main 2026
5 Apr, Shift 1

First order gas phase reaction

$$A \to B + C$$

$p_i$ = initial pressure of gas A, $p_t$ = total pressure of the reaction mixture at time $t$. Expression of rate constant ($k$) is

- **A.** $\frac{1}{t}\ln\frac{p_i}{2p_i - p_t}$

- **B.** $\frac{1}{t}\ln\frac{2p_i}{p_i - p_t}$

- **C.** $\frac{1}{t}\ln\frac{p_i}{3p_i - 2p_t}$

- **D.** $\frac{1}{t}\ln\frac{3p_i}{4p_i - p_t}$

**Solution / Answer**

Let $x$ be the pressure of $A$ that has decomposed at time $t$.

| Species | $A$ | $B$ | $C$ |
| --- | --- | --- | --- |
| Pressure at $t$ | $p_i - x$ | $x$ | $x$ |

Total pressure:

$$p_t = (p_i - x) + x + x = p_i + x \Rightarrow x = p_t - p_i$$

Pressure of $A$ remaining:

$$p_A = p_i - x = p_i - (p_t - p_i) = 2p_i - p_t$$

For a first order reaction:

$$k = \frac{1}{t}\ln\frac{p_i}{p_A} = \frac{1}{t}\ln\frac{p_i}{2p_i - p_t}$$

**Answer:** A

**Correct option:** A

Mathematics

## Matrices and Determinants

JEE Main 2026
Apr 4, Shift 1

Let $A = \begin{bmatrix} 1 & 1 & 2 \\ -2 & 0 & 1 \\ 1 & 3 & 5 \end{bmatrix}$. Then the sum of all elements of the matrix $\text{adj}(\text{adj}(2(\text{adj}\,A)^{-1}))$ is equal to:

- **A.** 3

- **B.** 4

- **C.** $-4$

- **D.** $-3$

**Solution / Answer**

First $\det A$:

$$\det A = 1(0\cdot5 - 1\cdot3) - 1((-2)\cdot5 - 1\cdot1) + 2((-2)\cdot3 - 0\cdot1) = -3 + 11 - 12 = -4.$$

Use the identity $\operatorname{adj}A = (\det A)\,A^{-1}$, so

$$(\operatorname{adj}A)^{-1} = \frac{A}{\det A} = \frac{A}{-4}.$$

Then

$$M = 2(\operatorname{adj}A)^{-1} = \frac{2A}{-4} = -\frac{1}{2}A.$$

For any $3\times 3$ matrix, $\operatorname{adj}(\operatorname{adj}M) = (\det M)^{\,3-2}\,M = (\det M)\,M$. Here

$$\det M = \left(-\tfrac12\right)^{3}\det A = -\tfrac18 \cdot (-4) = \tfrac12.$$

Therefore

$$\operatorname{adj}(\operatorname{adj}M) = (\det M)\,M = \tfrac12 \cdot \left(-\tfrac12 A\right) = -\tfrac14 A.$$

Sum of all elements of $A$:

$$(1+1+2) + (-2+0+1) + (1+3+5) = 4 - 1 + 9 = 12.$$

Sum of all elements of $-\tfrac14 A = -\tfrac14 \cdot 12 = -3.$

**Answer:** D ($-3$)

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-28/](https://jeenotes.in/daily-challenges/2026-09-28/) · raw HTML: `offline/daily-challenges/2026-09-28/index.html`_
