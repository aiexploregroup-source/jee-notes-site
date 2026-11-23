---
title: "Daily Challenge — 30 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-30/"
description: "Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-30/index.html"
extracted: "2026-11-23"
---

> Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan .

Coolie builds its dock-side heist around information moving through the right hands at the right moment, a network as tightly structured as any matrices and determinants problem - crack the pattern, or the whole plan collapses.

The cargo containers stacked at that dock are, structurally, doing what kinetic theory of gases describes at a smaller scale - contents under pressure, bouncing against the walls that contain them. And a smuggling operation racing against a deadline is chemical kinetics with real stakes, rate determining whether the job gets done in time.

September ends today, but the questions don’t stop coming. Three of them - crack the code.

Physics

## Kinetic Theory of Gases

JEE Main 2026
2 Apr, Shift 2

A mixture of carbon dioxide and oxygen has volume $8310\,\text{cm}^3$, temperature 300 K, pressure 100 kPa and mass 13.2 g. The number of moles of carbon dioxide and oxygen gases in the mixture respectively are __________. (Assume both carbon dioxide and oxygen gases behave like ideal gases) [$R = 8.31\,\text{J/mol.K}$]

- **A.** $0.15$ and $0.18$

- **B.** $0.25$ and $0.08$

- **C.** $0.21$ and $0.12$

- **D.** $0.13$ and $0.20$

**Solution / Answer**

First find the total number of moles from the ideal gas law $PV = nRT$, with $P = 100\times10^3\,\text{Pa}$, $V = 8310\,\text{cm}^3 = 8310\times10^{-6}\,\text{m}^3$:

$$n = \frac{PV}{RT} = \frac{(100\times10^3)(8310\times10^{-6})}{(8.31)(300)} = \frac{831}{2493} = \frac{1}{3}\,\text{mol}$$

Let $a$ = moles of CO$_2$ (molar mass $44\,\text{g/mol}$) and $b$ = moles of O$_2$ (molar mass $32\,\text{g/mol}$). Then:

$$a + b = \frac{1}{3}, \qquad 44a + 32b = 13.2$$

Substitute $b = \tfrac{1}{3} - a$ into the mass equation:

$$44a + 32\left(\frac{1}{3} - a\right) = 13.2 \quad\Rightarrow\quad 12a + \frac{32}{3} = 13.2$$

$$12a = 13.2 - 10.667 = 2.533 \quad\Rightarrow\quad a = 0.211 \approx 0.21$$

$$b = \frac{1}{3} - 0.211 = 0.122 \approx 0.12$$

So there are about $0.21$ mol of CO$_2$ and $0.12$ mol of O$_2$.

**Answer:** C ($0.21$ and $0.12$)

**Correct option:** C

Chemistry

## Chemical Kinetics

JEE Main 2026
8 Apr, Shift 2

Given below are two statements ($R = 8.314$ J K$^{-1}$ mol$^{-1}$ and 1 cal = 4.2 J):

**Statement I :** When $E_a = 12.6$ kcal/mol, the room temperature rate constant is doubled by a 10 $^\circ$C increase in temperature (298 K to 308 K).

**Statement II :** For a first order reaction $A \rightarrow B$, the plot of $t_{1/2}$ versus $[A]_0$ is a straight line through the origin (where $[A]_0$ is the initial concentration and $t_{1/2}$ is the half life).

In the light of the above statements, choose the correct answer from the options given below :

- **A.** Both Statement I and Statement II are true

- **B.** Both Statement I and Statement II are false

- **C.** Statement I is true but Statement II is false

- **D.** Statement I is false but Statement II is true

**Solution / Answer**

**Statement I:** Convert $E_a = 12.6\ \text{kcal mol}^{-1} = 12.6 \times 4.2 \times 10^3 = 52920\ \text{J mol}^{-1}$.

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right) = \frac{52920}{8.314}\left(\frac{1}{298} - \frac{1}{308}\right)$$

$$= 6365.9 \times (1.0895\times10^{-4}) \approx 0.693$$

$$\frac{k_2}{k_1} = e^{0.693} \approx 2$$

The rate constant doubles. **Statement I is true.**

**Statement II:** For a first order reaction, $t_{1/2} = \dfrac{0.693}{k}$, which is **independent** of $[A]_0$. Its plot against $[A]_0$ is a horizontal line, not a line through the origin. **Statement II is false.**

**Answer:** C

**Correct option:** C

Mathematics

## Matrices and Determinants

JEE Main 2026
Apr 4, Shift 1

Let $S = \left\{ A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} : a, b, c, d \in \{0, 1, 2, 3, 4\} \text{ and } A^2 - 4A + 3I = 0 \right\}$ be a set of $2 \times 2$ matrices. Then the number of matrices in $S$, for which the sum of the diagonal elements is equal to 4, is:

- **A.** 20

- **B.** 17

- **C.** 21

- **D.** 19

**Solution / Answer**

Factor the matrix equation:

$$A^2 - 4A + 3I = 0 \implies (A - I)(A - 3I) = 0.$$

By the Cayley–Hamilton theorem, $A$ satisfies its own characteristic equation $A^2 - (\operatorname{tr}A)\,A + (\det A)\,I = 0$. Comparing (when $A$ is not a scalar matrix) gives

$$\operatorname{tr}A = a + d = 4, \qquad \det A = ad - bc = 3.$$

We are already restricted to $a + d = 4$, so with $a,d \in \{0,1,2,3,4\}$ the trace condition holds for the pairs

$$(a,d) \in \{(0,4),(1,3),(2,2),(3,1),(4,0)\}.$$

For each pair we need $ad - bc = 3$, i.e. $bc = ad - 3$, with $b,c \in \{0,1,2,3,4\}$:

- $(a,d)=(0,4)$ or $(4,0)$: $ad=0$, so $bc = -3$ — impossible ($b,c \ge 0$). $0$ matrices.
- $(a,d)=(1,3)$ or $(3,1)$: $ad=3$, so $bc = 0$. Number of $(b,c)$ with $bc=0$: $b=0$ (5 choices of $c$) or $c=0$ (5 choices of $b$), minus the double-counted $(0,0)$ = $5+5-1 = 9$. This gives $9 \times 2 = 18$ matrices.
- $(a,d)=(2,2)$: $ad=4$, so $bc = 1 \Rightarrow (b,c)=(1,1)$ only. $1$ matrix.

Total:

$$18 + 1 = 19.$$

**Answer:** D (19)

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-30/](https://jeenotes.in/daily-challenges/2026-09-30/) · raw HTML: `offline/daily-challenges/2026-09-30/index.html`_
