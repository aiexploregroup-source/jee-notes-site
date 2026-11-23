---
title: "Daily Challenge — 13 August 2026"
source: "https://jeenotes.in/daily-challenges/2026-08-13/"
description: "Week 2 of Mission JEE 2027 · Motion & Atoms — Describing motion before explaining it, the atom before the bond, and numbers beyond the real line. See the full plan ."
html: "../../../offline/daily-challenges/2026-08-13/index.html"
extracted: "2026-11-23"
---

> Week 2 of Mission JEE 2027 · Motion & Atoms — Describing motion before explaining it, the atom before the bond, and numbers beyond the real line. See the full plan .

Stree 2 packed theatres because everyone loves a spectre. Chemistry has its own version — the spectrum — and unlike the movie kind, this one shows up only when strict rules are obeyed. A spectral line appears for a transition only if the selection rules allow it.

That is today’s chemistry: judging whether a given transition will actually produce a line. Physics differentiates a velocity expression to catch the acceleration at a point, and maths hunts the integral values of a parameter that keep both roots of a quadratic positive. Week 2, day 4 — the atoms half of Motion & Atoms is peaking.

Three questions tonight. The spectrum only appears to those who look.

Physics

## Kinematics

JEE Main 2026
2 Apr, Shift 1

The velocity of a particle is given as $\vec{v} = -x\hat{i} + 2y\hat{j} - z\hat{k}$ m/s. The magnitude of acceleration at point $(1, 2, 4)$ is __________ m/s$^2$.

- **A.** $\sqrt{6}$

- **B.** 9

- **C.** $\sqrt{33}$

- **D.** 0

**Solution / Answer**

The velocity depends on position, so acceleration is found using the chain rule component-wise, $a_i = v_i\,\dfrac{\partial v_i}{\partial x_i}$ (each component of velocity depends only on its own coordinate):

$$a_x = v_x\frac{\partial v_x}{\partial x} = (-x)(-1) = x$$

$$a_y = v_y\frac{\partial v_y}{\partial y} = (2y)(2) = 4y$$

$$a_z = v_z\frac{\partial v_z}{\partial z} = (-z)(-1) = z$$

At $(1, 2, 4)$:

$$\vec{a} = (1)\hat{i} + (8)\hat{j} + (4)\hat{k}$$

$$|\vec{a}| = \sqrt{1^2 + 8^2 + 4^2} = \sqrt{1 + 64 + 16} = \sqrt{81} = 9\ \text{m/s}^2$$

**Answer:** B (9)

**Correct option:** B

Chemistry

## Structure of Atom

JEE Main 2025
Evening

Given below are two statements :

Statement (I) : A spectral line will be observed for a $2 p_x \rightarrow 2 p_y$ transition.

Statement (II) : $2 \mathrm{p}_x$ and $2 \mathrm{p}_y$ are degenerate orbitals.

In the light of the above statements, choose the correct answer from the options given below :

- **A.** Statement I is false but Statement II is true

- **B.** Both Statement I and Statement II are false

- **C.** Statement I is true but Statement II is false

- **D.** Both Statement I and Statement II are true

**Solution / Answer**

Let us analyze the two statements in the context of atomic orbitals and electronic transitions:

Statement (I)

“A spectral line will be observed for a $ 2 p_x \rightarrow 2 p_y $ transition.”

For an emission (or absorption) line to be observed, there must be a difference in energy between the initial and final states.

In a typical hydrogen-like or many-electron atom (without additional external fields or splitting effects), the three $2p$ orbitals ($2 p_x$, $2 p_y$, $2 p_z$) are *degenerate*—i.e., they all have the same energy.

Consequently, a transition from $2 p_x$ to $2 p_y$ (both having the same energy) would involve **no energy change**. Hence, **no photon** is emitted or absorbed for this “transition.” So you **would not** observe a spectral line for such a transition.

Therefore, **Statement (I)** is **false**.

Statement (II)

“$2 p_x$ and $2 p_y$ are degenerate orbitals.”

Orbitals within the same subshell (e.g., $2p$ subshell) are typically degenerate (same energy) in an isolated atom (especially a hydrogen-like atom).

Thus, $2 p_x$ and $2 p_y$ (and $2 p_z$) do indeed have the same energy.

Therefore, **Statement (II)** is **true**.

Conclusion

**Statement (I)**: **False**

**Statement (II)**: **True**

Hence, the correct choice is:

**Option A: Statement I is false but Statement II is true.**

**Correct option:** A

Mathematics

## Complex Numbers and Quadratic Equations

JEE Main 2026
4 Apr, Shift 2

If the quadratic equation $(\lambda + 2)x^2 - 3\lambda x + 4\lambda = 0$, $\lambda \neq -2$, has two positive roots, then the number of possible integral values of $\lambda$ is:

- **A.** 1

- **B.** 2

- **C.** 3

- **D.** 4

**Solution / Answer**

For two positive real roots of $ax^2 + bx + c = 0$ (here $a = \lambda+2$, $b = -3\lambda$, $c = 4\lambda$) we need three conditions.

**1. Real roots** — discriminant $\geq 0$:

$$9\lambda^2 - 16\lambda(\lambda+2) \geq 0 \;\Rightarrow\; -7\lambda^2 - 32\lambda \geq 0 \;\Rightarrow\; \lambda \in \left[-\tfrac{32}{7},\, 0\right]$$

**2. Sum of roots $> 0$:**

$$\frac{3\lambda}{\lambda+2} > 0 \;\Rightarrow\; \lambda > 0 \text{ or } \lambda < -2$$

**3. Product of roots $> 0$:**

$$\frac{4\lambda}{\lambda+2} > 0 \;\Rightarrow\; \lambda > 0 \text{ or } \lambda < -2$$

Intersecting all three (with $\lambda \neq -2$) gives:

$$\lambda \in \left[-\tfrac{32}{7},\, -2\right) \approx [-4.57,\, -2)$$

Integer values in this interval: $\lambda = -4$ and $\lambda = -3$.

Check $\lambda = -4$: roots are $2$ and $4$ (both positive). ✓
Check $\lambda = -3$: roots $\approx 1.63$ and $7.37$ (both positive). ✓

So there are **2** integral values.

**Answer:** B

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-08-13/](https://jeenotes.in/daily-challenges/2026-08-13/) · raw HTML: `offline/daily-challenges/2026-08-13/index.html`_
