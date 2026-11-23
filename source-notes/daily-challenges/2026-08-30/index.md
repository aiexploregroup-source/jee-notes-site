---
title: "Daily Challenge — 30 August 2026"
source: "https://jeenotes.in/daily-challenges/2026-08-30/"
description: "Week 4 of Mission JEE 2027 · Bonds & Binomials — Work-energy, chemical bonding, and binomial expansions — three chapters that pay rent every JEE. See the full plan ."
html: "../../../offline/daily-challenges/2026-08-30/index.html"
extracted: "2026-11-23"
---

> Week 4 of Mission JEE 2027 · Bonds & Binomials — Work-energy, chemical bonding, and binomial expansions — three chapters that pay rent every JEE. See the full plan .

A lofted six looks lazy at the top of its arc — the ball almost hangs there. It has not stopped working, though: the vertical speed dies at the peak, but the horizontal part keeps every bit of its kinetic energy. That leftover energy is today’s physics question, and the answer for a 45-degree launch is cleaner than you expect.

Sunday — the last day of Bonds & Binomials. Chemistry sizes up a whole molecule from two covalent radii, and maths kills a condition on binomial coefficients to finish the arc.

If work-energy or bonding still feels loose, revisit it today: Week 5 opens Spin City tomorrow, and rotation shows no mercy. Three questions — clear the ropes one last time this week.

Physics

## Work Power and Energy

JEE Main 2025
Evening

A ball having kinetic energy KE, is projected at an angle of $60^{\circ}$ from the horizontal. What will be the kinetic energy of ball at the highest point of its flight?

- **A.** $\frac{(\mathrm{KE})}{2}$

- **B.** $\frac{(\mathrm{KE})}{8}$

- **C.** $\frac{(\mathrm{KE})}{4}$

- **D.** $\frac{(\mathrm{KE})}{16}$

**Solution / Answer**

Let's break down the problem step by step:

The ball is projected with kinetic energy

$$\mathrm{KE} = \frac{1}{2} m v^2,$$

where $$v$$ is the initial speed.

The ball is launched at an angle of $$60^\circ$$. So, its initial velocity components are:

Horizontal: $$v_x = v \cos(60^\circ) = \frac{v}{2}$$

Vertical: $$v_y = v \sin(60^\circ)$$

At the highest point of its flight, the vertical component of the velocity becomes zero (i.e., $$v_y = 0$$), but the horizontal component remains unchanged.

Therefore, the kinetic energy at the highest point is only due to the horizontal velocity:

$$\mathrm{KE}_{\text{top}} = \frac{1}{2} m v_x^2$$

Substitute $$v_x = \frac{v}{2}$$:

$$\mathrm{KE}_{\text{top}} = \frac{1}{2} m \left(\frac{v}{2}\right)^2 = \frac{1}{2} m \frac{v^2}{4} = \frac{1}{8} m v^2$$

Notice that the initial kinetic energy is

$$\mathrm{KE} = \frac{1}{2} m v^2.$$

So we can write:

$$\mathrm{KE}_{\text{top}} = \frac{1}{8} m v^2 = \frac{1}{4} \left(\frac{1}{2} m v^2\right) = \frac{1}{4} \mathrm{KE}$$

Thus, the kinetic energy at the highest point is $$\frac{\mathrm{KE}}{4}$$.

Answer: Option C.

**Correct option:** C

Chemistry

## Chemical Bonding and Molecular Structure

JEE Main 2026
5 Apr, Shift 2

The covalent radii of atoms A and B are $r_A$ and $r_B$, respectively. The covalent bond length and total length of AB molecule are respectively

- **A.** $(r_A + r_B), 2(r_A + r_B)$

- **B.** $\dfrac{1}{2}(r_A + r_B), (r_A + r_B)$

- **C.** $(r_A + r_B), (r_A + r_B)$

- **D.** $2(r_A + r_B), \dfrac{1}{2}(r_A + r_B)$

**Solution / Answer**

The **covalent bond length** is the internuclear A–B distance, which is the sum of the two covalent radii:

$$d_{A-B} = r_A + r_B$$

The **total length** of the AB molecule spans from the outer edge of A to the outer edge of B:

$$L = r_A + d_{A-B} + r_B = r_A + (r_A + r_B) + r_B = 2(r_A + r_B)$$

$$\Rightarrow\ \text{bond length} = (r_A + r_B),\qquad \text{total length} = 2(r_A + r_B)$$

**Answer:** A

**Correct option:** A

Mathematics
Numerical

## Binomial Theorem

JEE Main 2026
5 Apr, Shift 1

If the sum of the coefficients of $x^7$ and $x^{14}$ in the expansion of $\left( \dfrac{1}{x^3} - x^4 \right)^n$, $x \neq 0$, is zero, then the value of $n$ is:

Numerical answer — work it out, then check the solution.

**Solution / Answer**

General term:

$$T_{r+1} = \binom{n}{r}\left(x^{-3}\right)^{n-r}\left(-x^{4}\right)^{r} = (-1)^{r}\binom{n}{r}\,x^{-3n + 7r}.$$

**Coefficient of $x^7$:** $-3n + 7r = 7 \Rightarrow r_1 = \dfrac{7 + 3n}{7}.$

**Coefficient of $x^{14}$:** $-3n + 7r = 14 \Rightarrow r_2 = \dfrac{14 + 3n}{7}.$

Both require $7 \mid 3n$, i.e. $7 \mid n$. Take $n = 7t$; then $r_2 = r_1 + 1$, so the coefficients are $(-1)^{r_1}\binom{n}{r_1}$ and $(-1)^{r_1+1}\binom{n}{r_1+1}$. Their sum is zero when

$$\binom{n}{r_1} = \binom{n}{r_1 + 1} \;\Rightarrow\; r_1 + (r_1 + 1) = n \;\Rightarrow\; n = 2r_1 + 1.$$

With $r_1 = \dfrac{7 + 3n}{7}$:

$$n = 2\cdot\frac{7 + 3n}{7} + 1 \;\Rightarrow\; 7n = 14 + 6n + 7 \;\Rightarrow\; n = 21.$$

Check: $r_1 = 10,\ r_2 = 11$, and $\binom{21}{10} = \binom{21}{11}$ with opposite signs cancel.

**Answer:** 21

---

_Source: [https://jeenotes.in/daily-challenges/2026-08-30/](https://jeenotes.in/daily-challenges/2026-08-30/) · raw HTML: `offline/daily-challenges/2026-08-30/index.html`_
