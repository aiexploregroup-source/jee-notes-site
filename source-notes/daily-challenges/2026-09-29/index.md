---
title: "Daily Challenge — 29 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-29/"
description: "Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-29/index.html"
extracted: "2026-11-23"
---

> Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan .

That split-second reflex in a ranked match, the one between seeing an enemy and clicking, is basically what chemical kinetics measures in a beaker - a rate depending on conditions, except here the condition is how many energy drinks you’ve had.

Zoom out and the players themselves behave like gas molecules in kinetic theory of gases, darting around a bounded map with a whole distribution of speeds, no two exactly alike. And the grid of moves a strategist maps out before a big play is matrices and determinants, structure hiding inside chaos.

React fast, solve faster. Three questions today - your reflexes are ready.

Physics

## Kinetic Theory of Gases

JEE Main 2026
5 Apr, Shift 2

An ideal gas at pressure $P$ and temperature $T$ is expanding such that $PT^3 = $ constant. The coefficient of volume expansion of the gas is __________.

- **A.** $\dfrac{2}{T}$

- **B.** $\dfrac{1}{T}$

- **C.** $\dfrac{4}{T}$

- **D.** $\dfrac{3}{T}$

**Solution / Answer**

For an ideal gas, $PV = nRT$, so the pressure can be written as:

$$P = \frac{nRT}{V}$$

Substitute this into the given condition $PT^3 = \text{constant}$:

$$\frac{nRT}{V}\, T^3 = \text{constant} \quad\Rightarrow\quad \frac{T^4}{V} = \text{constant}$$

This means $V \propto T^4$, so we can write $V = c\,T^4$ for some constant $c$. The coefficient of volume expansion is defined as:

$$\gamma = \frac{1}{V}\frac{dV}{dT}$$

Differentiating $V = c\,T^4$:

$$\frac{dV}{dT} = 4 c\, T^3 = \frac{4V}{T}$$

Therefore:

$$\gamma = \frac{1}{V}\cdot\frac{4V}{T} = \frac{4}{T}$$

**Answer:** C ($\dfrac{4}{T}$)

**Correct option:** C

Chemistry

## Chemical Kinetics

JEE Main 2026
2 Apr, Shift 2

Consider the reaction $aX \rightarrow bY$, for which the rate constant at $30\,°C$ is $1 \times 10^{-3}\,\text{mol}^{-1}\,\text{L}\,\text{s}^{-1}$. Which of the following statements are true ?
A. When concentration of ‘X’ is increased to four times, the rate of reaction becomes 16 times.
B. The reaction is a second order reaction.
C. The half-life period is independent of the concentration of X.
D. Decomposition of $N_2O_5$ is an example of the above reaction.
E. $\ln\dfrac{[R_0]}{[R]}$ versus time (a straight line through origin) is valid for the above reaction.
Choose the correct answer from the options given below :

- **A.** A and B Only

- **B.** A, B and C Only

- **C.** A, B, D and E Only

- **D.** C and D Only

**Solution / Answer**

The units of $k$ are $\text{mol}^{-1}\,\text{L}\,\text{s}^{-1} = \text{L mol}^{-1}\text{s}^{-1}$, which correspond to a **second order** reaction. For an $n$-th order reaction, units of $k$ are $(\text{mol L}^{-1})^{1-n}\text{s}^{-1}$; matching gives $1-n = -1 \Rightarrow n = 2$.

- **A:** Rate $= k[X]^2$. If $[X] \to 4[X]$, rate becomes $4^2 = 16$ times. **True.**
- **B:** Second order, as shown above. **True.**
- **C:** For second order, $t_{1/2} = \dfrac{1}{k[X]_0}$, which depends on initial concentration. **False.**
- **D:** Decomposition of $N_2O_5$ is a well-known **first order** reaction. **False.**
- **E:** $\ln\dfrac{[R_0]}{[R]}$ vs $t$ being linear is characteristic of **first order**, not this second order reaction. **False.**

Only A and B are true.

**Answer:** A

**Correct option:** A

Mathematics
Numerical

## Matrices and Determinants

JEE Main 2026
Apr 2, Shift 2

Consider the matrices $A = \begin{bmatrix} 2 & -2 \\ 4 & -2 \end{bmatrix}$ and $B = \begin{bmatrix} 3 & 9 \\ 1 & 3 \end{bmatrix}$. If matrices $P$ and $Q$ are such that $PA = B$ and $AQ = B$, then the absolute value of the sum of the diagonal elements of $2(P + Q)$ is __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Since $\det A = 2(-2) - (-2)(4) = -4 + 8 = 4 \ne 0$, $A$ is invertible with

$$A^{-1} = \frac{1}{4}\begin{bmatrix} -2 & 2 \\ -4 & 2 \end{bmatrix}.$$

From $PA = B$: $P = B A^{-1}$; from $AQ = B$: $Q = A^{-1} B$.

$$P = \begin{bmatrix} 3 & 9 \\ 1 & 3 \end{bmatrix}\cdot\frac14\begin{bmatrix} -2 & 2 \\ -4 & 2 \end{bmatrix} = \frac14\begin{bmatrix} -42 & 24 \\ -14 & 8 \end{bmatrix} = \begin{bmatrix} -\tfrac{21}{2} & 6 \\ -\tfrac72 & 2 \end{bmatrix}.$$

$$Q = \frac14\begin{bmatrix} -2 & 2 \\ -4 & 2 \end{bmatrix}\begin{bmatrix} 3 & 9 \\ 1 & 3 \end{bmatrix} = \frac14\begin{bmatrix} -4 & -12 \\ -10 & -30 \end{bmatrix} = \begin{bmatrix} -1 & -3 \\ -\tfrac52 & -\tfrac{15}{2} \end{bmatrix}.$$

Diagonal of $P$: $-\tfrac{21}{2} + 2 = -\tfrac{17}{2}$. Diagonal of $Q$: $-1 - \tfrac{15}{2} = -\tfrac{17}{2}$.

Sum of diagonal of $2(P+Q)$:

$$2\left(-\tfrac{17}{2} - \tfrac{17}{2}\right) = 2(-17) = -34.$$

Absolute value $= 34.$

**Answer:** 34

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-29/](https://jeenotes.in/daily-challenges/2026-09-29/) · raw HTML: `offline/daily-challenges/2026-09-29/index.html`_
