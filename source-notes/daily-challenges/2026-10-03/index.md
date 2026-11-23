---
title: "Daily Challenge — 3 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-03/"
description: "Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-03/index.html"
extracted: "2026-11-23"
---

> Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan .

POV: it’s 11 PM, the group chat is chaos, and you personally are the one molecule in the room with way more kinetic energy than everyone else’s average — which is exactly the outlier kinetic theory of gases asks you to account for instead of ignore. Averages hide individuals, and JEE loves testing whether you remember that.

Meanwhile the chat itself is a first-order reaction, message frequency decaying the moment someone says “okay bed now” and nobody actually leaves. And figuring out who owes whom for the midnight Maggi run is, once again, a matrix nobody asked to solve at 11 PM.

High energy, low sleep, three questions left. Be the outlier today — attempt them.

Physics

## Kinetic Theory of Gases

JEE Main 2026
4 Apr, Shift 2

Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R

Assertion A: If the average kinetic energy of H$_2$ and O$_2$ molecules, kept in two different sized containers are same, then their temperatures will be same.

Reason R: The r.m.s. speed of H$_2$ and O$_2$ molecules are same at same temperature.

Choose the correct answer from the options given below

- **A.** Both A and R are true and R is the correct explanation of A

- **B.** Both A and R are true but R is NOT the correct explanation of A

- **C.** A is true but R is false

- **D.** A is false but R is true

**Solution / Answer**

The average translational kinetic energy of a gas molecule depends only on temperature:

$$\langle KE \rangle = \frac{3}{2} k_B T$$

It is independent of the molecular mass and of the container size. So if H$_2$ and O$_2$ have the same average kinetic energy, they must be at the same temperature. **Assertion A is true.**

The root-mean-square speed does depend on the molecular mass:

$$v_{rms} = \sqrt{\frac{3 k_B T}{m}} = \sqrt{\frac{3 R T}{M}}$$

At the same temperature, since $M_{\text{H}_2} = 2\,\text{g/mol} \ne M_{\text{O}_2} = 32\,\text{g/mol}$, the lighter H$_2$ molecules move much faster than O$_2$. Their rms speeds are **not** the same. **Reason R is false.**

Therefore A is true but R is false.

**Answer:** C (A is true but R is false)

**Correct option:** C

Chemistry
Numerical

## Chemical Kinetics

JEE Main 2026
5 Apr, Shift 2

For a reaction $A \to P$ at T K, the half life ($t_{1/2}$) is plotted as a function of initial concentration $[A]_0$ of A. The plot is a straight line through the origin. It passes through the point where $[A]_0 = 4 \times 10^{-3}\ \text{mol L}^{-1}$ gives $t_{1/2} = 240$ s, and at $[A]_0 = 1.5 \times 10^{-3}\ \text{mol L}^{-1}$, $t_{1/2} = x$. The value of $x$ is __________ s (Nearest integer)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

The plot of $t_{1/2}$ versus $[A]_0$ is a straight line through the origin, so:

$$t_{1/2} \propto [A]_0 \Rightarrow \frac{t_{1/2}}{[A]_0} = \text{constant}$$

(This is the signature of a **second order** reaction, where $t_{1/2} = \dfrac{1}{k[A]_0}$&mldr; but here the direct proportionality is read straight from the linear plot.)

Using the given data point:

$$\frac{240}{4\times10^{-3}} = \frac{x}{1.5\times10^{-3}}$$

$$x = 240 \times \frac{1.5\times10^{-3}}{4\times10^{-3}} = 240 \times 0.375 = 90\ \text{s}$$

**Answer:** 90

Mathematics

## Matrices and Determinants

JEE Main 2026
Apr 4, Shift 2

Let $A = \begin{bmatrix} 1 & 2 & 7 \\ 4 & -2 & 8 \\ 3 & 8 & -7 \end{bmatrix}$ and $\det(A - \alpha I) = 0$, where $\alpha$ is a real number. If the largest possible value of $\alpha$ is $p$, then the circle $(x - p)^2 + (y - 2p)^2 = 320$, intersects the co-ordinate axes at

- **A.** 1 point

- **B.** 2 points

- **C.** 3 points

- **D.** 4 points

**Solution / Answer**

$\det(A - \alpha I) = 0$ means $\alpha$ is an eigenvalue of $A$. The characteristic polynomial is

$$\alpha^3 - (\operatorname{tr}A)\alpha^2 + (\text{sum of principal }2\times2\text{ minors})\alpha - \det A = 0.$$

Here $\operatorname{tr}A = 1 - 2 - 7 = -8$, $\det A = 320$, and the sum of principal $2\times2$ minors is $-88$, giving

$$\alpha^3 + 8\alpha^2 - 88\alpha - 320 = 0.$$

Testing $\alpha = 8$: $512 + 512 - 704 - 320 = 0$ ✓. Factor:

$$(\alpha - 8)(\alpha^2 + 16\alpha + 40) = 0,$$

whose other roots are $\alpha = -8 \pm \sqrt{24}$, both negative. So the largest eigenvalue is $p = 8$.

The circle is $(x - 8)^2 + (y - 16)^2 = 320$, center $(8,16)$, $r = \sqrt{320}$.

**x-axis** ($y = 0$): $(x-8)^2 + 256 = 320 \Rightarrow (x-8)^2 = 64 \Rightarrow x = 0, 16$. Points $(0,0), (16,0)$.

**y-axis** ($x = 0$): $64 + (y-16)^2 = 320 \Rightarrow (y-16)^2 = 256 \Rightarrow y = 0, 32$. Points $(0,0), (0,32)$.

The point $(0,0)$ is shared by both axes, so the distinct intersection points are $(0,0)$, $(16,0)$, $(0,32)$ — three points.

**Answer:** C (3 points)

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-03/](https://jeenotes.in/daily-challenges/2026-10-03/) · raw HTML: `offline/daily-challenges/2026-10-03/index.html`_
