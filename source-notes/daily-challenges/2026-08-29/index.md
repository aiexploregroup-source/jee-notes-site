---
title: "Daily Challenge — 29 August 2026"
source: "https://jeenotes.in/daily-challenges/2026-08-29/"
description: "Week 4 of Mission JEE 2027 · Bonds & Binomials — Work-energy, chemical bonding, and binomial expansions — three chapters that pay rent every JEE. See the full plan ."
html: "../../../offline/daily-challenges/2026-08-29/index.html"
extracted: "2026-11-23"
---

> Week 4 of Mission JEE 2027 · Bonds & Binomials — Work-energy, chemical bonding, and binomial expansions — three chapters that pay rent every JEE. See the full plan .

The internet’s favourite game is ’they are the same picture’ — two things that look identical until you actually look. Chemistry plays it ruthlessly: species that seem like twins on paper but refuse to share a Lewis dot structure. Corporate needs you to find the differences; so does JEE.

Today you spot which pairs among five species do not match structurally. Day 6 of Bonds & Binomials: physics lets a time-dependent force loose on a 2 kg body and tracks where the energy goes, and maths closes in on another binomial sum.

The weekend does not pause the mission. Three questions — spot the difference, collect the marks.

Physics
Numerical

## Work, Energy and Power

JEE Main 2026
Apr 4, Shift 1

A body of mass 2 kg begins to move under the influence of time dependent force $\vec{F} = (2t\hat{i} + 6t^2\hat{j})$ N, where $\hat{i}$ and $\hat{j}$ are unit vectors along $x$ and $y$-axis respectively. The power produced by the force at $t = 2$ s is _____ W.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

**Acceleration** ($m = 2$ kg):

$$\vec{a} = \frac{\vec{F}}{m} = t\hat{i} + 3t^2\hat{j}$$

**Velocity** (body starts from rest, integrate from $0$):

$$\vec{v} = \int_0^t \vec{a}\,dt = \frac{t^2}{2}\hat{i} + t^3\hat{j}$$

At $t = 2$ s:

$$\vec{v} = 2\hat{i} + 8\hat{j}\ \text{m/s}, \qquad \vec{F} = 4\hat{i} + 24\hat{j}\ \text{N}$$

**Power:**

$$P = \vec{F}\cdot\vec{v} = (4)(2) + (24)(8) = 8 + 192 = 200\ \text{W}$$

**Answer:** 200

Chemistry

## Chemical Bonding and Molecular Structure

JEE Main 2026
6 Apr, Shift 1

The pairs among $A = [\text{SO}_3^{2-}, \text{CO}_3^{2-}]$, $B = [\text{O}_2^{2-}, \text{F}_2]$, $C = [\text{CN}^-, \text{CO}]$, $D = [\text{NH}_3, \text{H}_3\text{O}^+]$ and $E = [\text{MnO}_4^{2-}, \text{CrO}_4^{2-}]$ that do not have similar Lewis dot structure are:

- **A.** A, B and E

- **B.** A and E

- **C.** B, C and D

- **D.** C and D

**Solution / Answer**

Two species have a “similar” Lewis dot structure only when they are **isoelectronic** (same number of valence electrons) and therefore share the same bonding pattern, lone-pair count, and geometry. Count the valence electrons for each pair:

- **A** $[\text{SO}_3^{2-}, \text{CO}_3^{2-}]$: $\text{CO}_3^{2-}$ has $4+3(6)+2 = 24$ valence electrons — trigonal planar ($sp^2$), central C carries **no lone pair**. $\text{SO}_3^{2-}$ has $6+3(6)+2 = 26$ valence electrons — pyramidal ($sp^3$), central S carries **one lone pair**. Different electron count, geometry and lone-pair count — **NOT similar.**
- **B** $[\text{O}_2^{2-}, \text{F}_2]$: both have $14$ valence electrons — one single bond and three lone pairs on each atom. Isoelectronic — **similar.**
- **C** $[\text{CN}^-, \text{CO}]$: both have $10$ valence electrons — a triple bond and one lone pair on each atom. Isoelectronic — **similar.**
- **D** $[\text{NH}_3, \text{H}_3\text{O}^+]$: both have $8$ valence electrons — pyramidal with one lone pair on the central atom. Isoelectronic — **similar.**
- **E** $[\text{MnO}_4^{2-}, \text{CrO}_4^{2-}]$: both are tetrahedral $+6$ oxoanions, but they are **not isoelectronic** — $\text{CrO}_4^{2-}$ has a $d^0$ centre while $\text{MnO}_4^{2-}$ has one extra electron ($d^1$). The electron distributions of the two Lewis structures therefore differ — **NOT similar.**

Only pairs **A** and **E** fail to share a similar Lewis dot structure.

**Answer:** B (A and E)

**Correct option:** B

Mathematics

## Binomial Theorem

JEE Main 2026
2 Apr, Shift 2

If for $3 \leq r \leq 30$, $\left({}^{30}C_{30-r}\right) + 3\left({}^{30}C_{31-r}\right) + 3\left({}^{30}C_{32-r}\right) + \left({}^{30}C_{33-r}\right) = {}^m C_r$, then $m$ equals:

- **A.** $31$

- **B.** $32$

- **C.** $33$

- **D.** $34$

**Solution / Answer**

The coefficients $1, 3, 3, 1$ are the expansion of $(1+x)^3$. Recall that $(1+x)^{30}(1+x)^3 = (1+x)^{33}$, and comparing coefficients of a fixed power gives a Vandermonde-type convolution:

$$\sum_{j=0}^{3}\binom{3}{j}\binom{30}{(33-r)-j} = \binom{33}{33-r}.$$

Writing the terms out, this is exactly

$${}^{30}C_{33-r} + 3\,{}^{30}C_{32-r} + 3\,{}^{30}C_{31-r} + {}^{30}C_{30-r} = {}^{33}C_{33-r} = {}^{33}C_r.$$

Hence $m = 33$.

**Answer:** C (33)

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-08-29/](https://jeenotes.in/daily-challenges/2026-08-29/) · raw HTML: `offline/daily-challenges/2026-08-29/index.html`_
