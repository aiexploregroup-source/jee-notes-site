---
title: "Daily Challenge — 12 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-12/"
description: "Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-12/index.html"
extracted: "2026-11-23"
---

> Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan .

An F1 pit stop lasts under three seconds and every second is a sum of tiny gestures from twenty people. That is integration in spirit: lots of small contributions adding up to a total you can actually measure.

Today’s physics brings the electromagnetic induction you met earlier in the week, including how a spinning coil generates its own opposing voltage. Chemistry’s amines and nitrogen compounds ask for precision on the same scale, one lone pair at a time.

A good pit crew drills before the race, not during it. Your three questions are the drill.

Physics

## Electromagnetic Induction and AC

JEE Main 2026
2 Apr, Shift 1

When a coil is placed in a time dependent magnetic field the power dissipated in it is $P$. The number of turns, area of the coil and radius of the coil wire are $N$, $A$ and $r$ respectively. For a second coil number of turns, area of the coil and radius of the coil wire are $2N$, $2A$ and $3r$ respectively. When the first coil is replaced with second coil the power dissipated in it is $\sqrt{2}\,\alpha P$. The value of $\alpha$ is __________.

- **A.** 36

- **B.** $128\sqrt{2}$

- **C.** 16

- **D.** 64

**Solution / Answer**

The induced emf and coil resistance are:

$$\varepsilon = N A \frac{dB}{dt}, \qquad R_{coil} = \rho\,\frac{\ell}{a_{wire}} = \rho\,\frac{N(2\sqrt{\pi A})}{\pi r^2}$$

Here the wire length $\ell \propto N\sqrt{A}$ (perimeter $\propto \sqrt{A}$) and cross-section $a_{wire}=\pi r^2$.

Power dissipated:

$$P = \frac{\varepsilon^2}{R_{coil}} \propto \frac{(NA)^2}{\dfrac{N\sqrt{A}}{r^2}} = N\,A^{3/2}\,r^2$$

Taking the ratio (second to first coil) with $N\to2N$, $A\to2A$, $r\to3r$:

$$\frac{P_2}{P_1} = \frac{(2N)(2A)^{3/2}(3r)^2}{N\,A^{3/2}\,r^2} = 2\cdot 2^{3/2}\cdot 9 = 18\cdot 2\sqrt{2} = 36\sqrt{2}$$

Comparing with $\sqrt{2}\,\alpha$:

$$\sqrt{2}\,\alpha = 36\sqrt{2} \implies \alpha = 36$$

**Answer:** 36

**Correct option:** A

Chemistry

## Organic Compounds Containing Nitrogen

JEE Main 2026
6 Apr, Shift 1

Arrange the following compounds according to increasing order of boiling points:

$$n\text{-}C_4H_9OH\ (A),\quad n\text{-}C_4H_9NH_2\ (B),\quad n\text{-}C_4H_{10}\ (C),\quad C_2H_5NHC_2H_5\ (D)$$

- **A.** C < B < A < D

- **B.** D < C < B < A

- **C.** C < D < B < A

- **D.** D < B < A < C

**Solution / Answer**

Boiling point is governed by the strength of intermolecular forces (mainly hydrogen bonding here), for molecules of comparable molar mass:

- **C — $n\text{-}C_4H_{10}$ (butane):** only weak London dispersion forces, no H-bonding $\Rightarrow$ lowest bp ($\approx 0\,^\circ\text{C}$).
- **D — $C_2H_5NHC_2H_5$ (diethylamine):** a secondary amine with one $\text{N–H}$, so weak $\text{N}\cdots\text{H–N}$ hydrogen bonding ($\approx 56\,^\circ\text{C}$).
- **B — $n\text{-}C_4H_9NH_2$ (butan-1-amine):** a primary amine with two $\text{N–H}$ bonds, giving stronger H-bonding than a secondary amine ($\approx 78\,^\circ\text{C}$).
- **A — $n\text{-}C_4H_9OH$ (butan-1-ol):** $\text{O–H}$ is more polar than $\text{N–H}$, so alcohols H-bond most strongly $\Rightarrow$ highest bp ($\approx 118\,^\circ\text{C}$).

Increasing order: $C < D < B < A$.

**Answer:** C

**Correct option:** C

Mathematics

## Integral Calculus

JEE Main 2026
4 Apr, Shift 1

The area of the region $\{(x, y): y \leq \pi - |x|,\ y \leq |x \sin x|,\ y \geq 0\}$ is:

- **A.** $1 + \frac{\pi^2}{8}$

- **B.** $2 + \frac{\pi^2}{4}$

- **C.** $\frac{\pi^2}{8} - 1$

- **D.** $4 + \frac{\pi^2}{2}$

**Solution / Answer**

Both upper bounds $\pi - |x|$ and $|x\sin x|$ are **even** in $x$, so the region is symmetric about the $y$-axis. Compute the area for $x \ge 0$ and double it. On $[0,\pi]$ we have $\sin x \ge 0$, so $|x\sin x| = x\sin x$, and $\pi - |x| = \pi - x \ge 0$ up to $x=\pi$.

**Find where the two upper bounds cross.** Setting $x\sin x = \pi - x$: at $x = \tfrac{\pi}{2}$,

$$x\sin x = \frac{\pi}{2}\cdot 1 = \frac{\pi}{2},\qquad \pi - x = \frac{\pi}{2}.$$

They meet exactly at $x = \tfrac{\pi}{2}$. For $x < \tfrac{\pi}{2}$ the smaller bound is $x\sin x$; for $x > \tfrac{\pi}{2}$ it is $\pi - x$.

**Integrate the minimum of the two bounds.**

$$\text{Area} = 2\left(\int_0^{\pi/2} x\sin x\,dx + \int_{\pi/2}^{\pi} (\pi - x)\,dx\right).$$

First integral (by parts): $\int_0^{\pi/2} x\sin x\,dx = [-x\cos x + \sin x]_0^{\pi/2} = 1.$

Second integral: $\int_{\pi/2}^{\pi} (\pi - x)\,dx = \left[\pi x - \tfrac{x^2}{2}\right]_{\pi/2}^{\pi} = \dfrac{\pi^2}{8}.$

Hence

$$\text{Area} = 2\left(1 + \frac{\pi^2}{8}\right) = 2 + \frac{\pi^2}{4}.$$

**Answer:** B

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-12/](https://jeenotes.in/daily-challenges/2026-11-12/) · raw HTML: `offline/daily-challenges/2026-11-12/index.html`_
