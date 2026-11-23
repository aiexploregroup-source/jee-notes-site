---
title: "Daily Challenge — 4 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-04/"
description: "Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-04/index.html"
extracted: "2026-11-23"
---

> Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan .

Saiyaara turned this year’s first-day-first-shows into a shared public cry, the kind of film where the theatre goes quiet at exactly the same moment for everyone in it — which is oddly close to how a gas at equilibrium behaves, every molecule doing its own thing until the bulk properties settle into one shared, predictable state.

The film’s slow-burn structure is a first-order reaction if you squint: nothing dramatic happens per minute, yet by the end almost everything has changed, exponential decay hiding in plain sight. And the emotional math connecting every subplot back to the leads is, in the end, just a matrix keeping the whole story consistent.

Gas Giants week closes today — kinetic theory, kinetics, matrices, one last time. Go cry over the right answers instead.

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
2 Apr, Shift 1

Consider the first order reaction $R \to P$. The fraction of molecules decomposed in the given first order reaction can be expressed as

- **A.** $1 - e^{k_1 t}$

- **B.** $1 + e^{k_1 t}$

- **C.** $1 + e^{-k_1 t}$

- **D.** $1 - e^{-k_1 t}$

**Solution / Answer**

For a first order reaction, the integrated rate law is:

$$[R] = [R]_0\, e^{-k_1 t}$$

Fraction remaining:

$$\frac{[R]}{[R]_0} = e^{-k_1 t}$$

Fraction decomposed = total minus fraction remaining:

$$f = 1 - \frac{[R]}{[R]_0} = 1 - e^{-k_1 t}$$

**Answer:** D

**Correct option:** D

Mathematics

## Matrices and Determinants

JEE Main 2026
Apr 4, Shift 2

If the system of equations:

$$x + y + z = 5$$

$$x + 2y + 3z = 9$$

$$x + 3y + \lambda z = \mu$$

has infinitely many solutions, then the value of $\lambda + \mu$ is:

- **A.** 16

- **B.** 18

- **C.** 19

- **D.** 21

**Solution / Answer**

Infinitely many solutions require the coefficient determinant to be zero:

$$\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 3 & \lambda \end{vmatrix} = 0.$$

Expanding:

$$1(2\lambda - 9) - 1(\lambda - 3) + 1(3 - 2) = 2\lambda - 9 - \lambda + 3 + 1 = \lambda - 5 = 0 \implies \lambda = 5.$$

For consistency, subtract Row 1 from the others:

$$(0,1,2 \mid 4), \qquad (0,2,4 \mid \mu - 5).$$

The third row must be twice the second: $\mu - 5 = 2 \cdot 4 = 8 \Rightarrow \mu = 13$.

Therefore

$$\lambda + \mu = 5 + 13 = 18.$$

**Answer:** B (18)

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-04/](https://jeenotes.in/daily-challenges/2026-10-04/) · raw HTML: `offline/daily-challenges/2026-10-04/index.html`_
