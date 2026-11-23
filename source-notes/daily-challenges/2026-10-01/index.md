---
title: "Daily Challenge — 1 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-01/"
description: "Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-01/index.html"
extracted: "2026-11-23"
---

> Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan .

Watch the last three overs of a tight T20 chase and you’re watching kinetic theory of gases in real time — fielders packed tighter near the boundary, everyone’s average speed climbing, collisions (some literal, some just near misses) way up. Pressure goes up when you cram more motion into less space, on a cricket ground or in a cylinder.

The required run rate itself behaves like a first-order reaction — it doesn’t fall in a straight line as balls get bowled, it decays on its own curve, chemical kinetics deciding when the chase actually becomes hopeless. And the fielding captain juggling who covers which gap is quietly solving a matrix, rows and columns of positions that have to stay consistent.

Week nine’s last stretch is right here. Three questions, one chase — go finish it.

Physics

## Kinetic Theory of Gases

JEE Main 2026
4 Apr, Shift 1

One gas of $n_1$ mole of molecules at temperature $T_1$, volume $V_1$, and pressure $P_1$, and another gas of $n_2$ mole of molecules at temperature $T_2$, volume $V_2$, and pressure $P_2$, are mixed resulting in pressure $P$ and volume $V$ of the mixture. The temperature of the mixture is _____.

- **A.** $(T_1 + T_2)/2$

- **B.** $T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$

- **C.** $(T_2 P_1 V_1 + T_1 P_2 V_2)/(T_1 T_2 PV)$

- **D.** $

- T_1 - T_2

- /2$

**Solution / Answer**

The total number of moles is conserved when the two gases are mixed:

$$n = n_1 + n_2$$

Using the ideal gas law $PV = nRT$ for each component and for the mixture:

$$n_1 = \frac{P_1 V_1}{R T_1}, \qquad n_2 = \frac{P_2 V_2}{R T_2}, \qquad n = \frac{P V}{R T}$$

Substituting into $n = n_1 + n_2$:

$$\frac{P V}{R T} = \frac{P_1 V_1}{R T_1} + \frac{P_2 V_2}{R T_2}$$

Cancelling $R$ and combining the right side over a common denominator:

$$\frac{P V}{T} = \frac{P_1 V_1 T_2 + P_2 V_2 T_1}{T_1 T_2}$$

Solving for the mixture temperature $T$:

$$T = \frac{T_1 T_2 \, P V}{T_2 P_1 V_1 + T_1 P_2 V_2}$$

**Answer:** B ($T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$)

**Correct option:** B

Chemistry
Numerical

## Chemical Kinetics

JEE Main 2026
4 Apr, Shift 2

For a first order reaction $A \to B$, given the data: at $t = 0$ min, $[A] = 0.6500$ M; at $t = x$ min, $[A] = 0.0650$ M; at $t = 20$ min, $[A] = 0.00065$ M. $x = $ __________ min. (Nearest integer)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

For a first order reaction:

$$k = \frac{1}{t}\ln\frac{[A]_0}{[A]}$$

From $t = 0$ to $t = 20$ min, the concentration drops from $0.6500$ to $0.00065$, a factor of $1000$:

$$k = \frac{1}{20}\ln(1000) = \frac{\ln 10^3}{20} = \frac{3 \times 2.303}{20} = 0.3454\ \text{min}^{-1}$$

For the drop from $0.6500$ to $0.0650$ (a factor of $10$):

$$x = \frac{1}{k}\ln(10) = \frac{2.303}{0.3454} \approx 6.67\ \text{min}$$

Equivalently, since $0.00065$ is $10^3$ times smaller reached in 20 min, a $10^1$ drop takes one-third of that time: $x = 20/3 \approx 6.67$.

**Answer:** 7

Mathematics
Numerical

## Matrices and Determinants

JEE Main 2026
Apr 6, Shift 1

Let $A = \begin{bmatrix} -1 & 1 & -1 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{bmatrix}$ satisfy $A^2 + \alpha\left(adj(adj(A))\right) + \beta\left(adj(A)\left(adj(adj(A))\right)\right) = \begin{bmatrix} 2 & -2 & 2 \\ -2 & 0 & -1 \\ 0 & 0 & -1 \end{bmatrix}$ for some $\alpha, \beta \in \mathbb{R}$. Then $(\alpha - \beta)^2$ is equal to ________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Compute $\det A$ by expanding along the last row:

$$\det A = 1 \cdot \big((-1)(0) - (1)(1)\big) = -1.$$

Use the $3\times 3$ identities $\operatorname{adj}(\operatorname{adj}A) = (\det A)\,A = -A$ and $\operatorname{adj}A = (\det A)A^{-1}$, so

$$\operatorname{adj}A \cdot \operatorname{adj}(\operatorname{adj}A) = (\det A)A^{-1}\cdot(\det A)A = (\det A)^2 I = I.$$

The equation becomes

$$A^2 + \alpha(-A) + \beta I = \text{RHS} \implies A^2 - \alpha A + \beta I = \text{RHS}.$$

Now

$$A^2 = \begin{bmatrix} 2 & -1 & 1 \\ -1 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.$$

Match entries with the RHS $\begin{bmatrix} 2 & -2 & 2 \\ -2 & 0 & -1 \\ 0 & 0 & -1 \end{bmatrix}$:

- $(1,1)$: $2 - \alpha(-1) + \beta = 2 \Rightarrow \alpha + \beta = 0$.
- $(2,2)$: $1 - \alpha(0) + \beta = 0 \Rightarrow \beta = -1$, hence $\alpha = 1$.

Check $(1,2)$: $-1 - \alpha(1) + 0 = -1 - 1 = -2$ ✓, and $(3,3)$: $1 - \alpha(1) + \beta = 1 - 1 - 1 = -1$ ✓.

Therefore

$$(\alpha - \beta)^2 = (1 - (-1))^2 = 4.$$

**Answer:** 4

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-01/](https://jeenotes.in/daily-challenges/2026-10-01/) · raw HTML: `offline/daily-challenges/2026-10-01/index.html`_
