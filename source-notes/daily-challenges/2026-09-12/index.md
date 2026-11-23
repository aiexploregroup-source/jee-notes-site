---
title: "Daily Challenge — 12 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-12/"
description: "Week 6 of Mission JEE 2027 · Gravity Check — Fields that pull, reactions that balance, and a second week of trigonometry because it deserves it. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-12/index.html"
extracted: "2026-11-23"
---

> Week 6 of Mission JEE 2027 · Gravity Check — Fields that pull, reactions that balance, and a second week of trigonometry because it deserves it. See the full plan .

A long jumper is airborne for under a second and every centimetre of that jump is a fight against gravitation - launch angle, initial speed, and the same downward pull that’s been constant since Newton sat under that apple tree, no exceptions for personal bests.

Off the track, ionic equilibrium is just as unglamorous but just as decisive, quietly setting the exact concentration at which a reaction stops shifting either way. And the coach measuring a jumper’s optimal take-off angle is doing properties of triangle with a stopwatch instead of a protractor.

Stick the landing on today’s three questions - attempt them now.

Physics

## Gravitation

JEE Main 2026
5 Apr, Shift 2

A body of mass $m$ is taken from the surface of earth to a height equal to twice the radius of earth ($R_e$). The increase in potential energy will be __________. ($g$ is acceleration due to gravity at the surface of earth)

- **A.** $\dfrac{1}{2}mgR_e$

- **B.** $\dfrac{3}{4}mgR_e$

- **C.** $\dfrac{1}{4}mgR_e$

- **D.** $\dfrac{2}{3}mgR_e$

**Solution / Answer**

The gravitational potential energy at a distance $r$ from the earth’s centre is:

$$U = -\frac{GM m}{r}$$

At the surface ($r = R_e$) and at height $h = 2R_e$ (so $r = R_e + 2R_e = 3R_e$):

$$\Delta U = U_{\text{final}} - U_{\text{initial}} = -\frac{GMm}{3R_e} - \left(-\frac{GMm}{R_e}\right)$$

$$\Delta U = \frac{GMm}{R_e}\left(1 - \frac{1}{3}\right) = \frac{2}{3}\cdot\frac{GMm}{R_e}$$

Using $g = \dfrac{GM}{R_e^2}$, i.e. $\dfrac{GM}{R_e} = gR_e$:

$$\Delta U = \frac{2}{3}\,m g R_e$$

**Answer:** D ($\dfrac{2}{3}mgR_e$)

**Correct option:** D

Chemistry

## Chemical and Ionic Equilibrium

JEE Main 2026
Apr 6, Shift 1

One mole each of He and A(g) are taken in a 10 L closed flask and heated to 400 K to establish the following equilibrium: $A(g) \rightleftharpoons B(g)$. $K_c$ for this reaction at 400 K is 4.0. The partial pressures (in atm) of He and B(g) respectively at equilibrium are (assume He, A(g) and B(g) behave as ideal gases; $R = 0.082\ \text{L atm K}^{-1}\text{mol}^{-1}$):

- **A.** 3.28, 2.624

- **B.** 2.624, 3.28

- **C.** 3.28, 0.656

- **D.** 0.656, 6.56

**Solution / Answer**

Let $x$ mol of A convert to B. In the 10 L flask:

$$[A] = \frac{1-x}{10}, \qquad [B] = \frac{x}{10}$$

$$K_c = \frac{[B]}{[A]} = \frac{x}{1-x} = 4 \implies x = 0.8\ \text{mol}$$

**Moles at equilibrium:** He $= 1$, B $= 0.8$.

**Partial pressures** from $p = \dfrac{nRT}{V}$ with $\dfrac{RT}{V} = \dfrac{0.082 \times 400}{10} = 3.28$ atm/mol:

$$p_{\text{He}} = 1 \times 3.28 = 3.28\ \text{atm}$$

$$p_{B} = 0.8 \times 3.28 = 2.624\ \text{atm}$$

**Answer:** A (3.28, 2.624)

**Correct option:** A

Mathematics

## Trigonometry

JEE Main 2026
5 Apr, Shift 1

The sum of all the integral values of $p$ such that the equation $3\sin^2 x + 12\cos x - 3 = p$, $x \in \mathbb{R}$, has at least one solution, is:

- **A.** $-54$

- **B.** $-60$

- **C.** $-75$

- **D.** $-84$

**Solution / Answer**

Write everything in terms of $\cos x$:

$$3\sin^2 x + 12\cos x - 3 = 3(1 - \cos^2 x) + 12\cos x - 3 = -3\cos^2 x + 12\cos x.$$

Let $c = \cos x \in [-1, 1]$ and $g(c) = -3c^2 + 12c = -3(c-2)^2 + 12$. On $[-1,1]$ the vertex $c=2$ lies to the right, so $g$ is increasing; hence

$$g(-1) = -15,\qquad g(1) = 9,\qquad g(c) \in [-15, 9].$$

The equation has a solution exactly when $p \in [-15, 9]$. Summing all integers there:

$$\sum_{p=-15}^{9} p = \frac{(-15 + 9)\cdot 25}{2} = \frac{-6\cdot 25}{2} = -75.$$

**Answer:** C

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-12/](https://jeenotes.in/daily-challenges/2026-09-12/) · raw HTML: `offline/daily-challenges/2026-09-12/index.html`_
