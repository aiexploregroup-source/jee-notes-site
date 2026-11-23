---
title: "Daily Challenge — 17 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-17/"
description: "Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-17/index.html"
extracted: "2026-11-23"
---

> Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan .

A slow, gripping IPL pitch does to a cricket ball roughly what a viscous fluid does to anything moving through it - drag that saps pace and turns a fast bowler’s plans upside down, properties of solids and liquids explaining why the ball just won’t hurry off the surface.

Off the field, the floodlight generators run on redox reactions converting fuel to electrons to light, quietly, for three hours straight. And a captain juggling batting order for the situation is solving permutations and combinations under real pressure, no calculator allowed.

Time to bat first yourself. Three questions today - take strike.

Physics

## Properties of Solids and Liquids

JEE Main 2026
Apr 2, Shift 2

If an air bubble of diameter 2 mm rises steadily through a liquid of density $2000\,\text{kg/m}^3$ at a rate of $0.5\,\text{cm/s}$, then the coefficient of viscosity of liquid is __________ Poise. (Take $g = 10\,\text{m/s}^2$)

- **A.** $0.88$

- **B.** $8.8$

- **C.** $88.8$

- **D.** $0.088$

**Solution / Answer**

For a bubble rising at terminal velocity, the (upward) buoyant force balances viscous drag; taking the bubble’s density as negligible, Stokes’ law gives:

$$v = \frac{2}{9}\frac{r^2 (\rho_{\text{liq}} - \rho_{\text{bubble}})\,g}{\eta} \approx \frac{2}{9}\frac{r^2 \rho_{\text{liq}}\,g}{\eta}$$

Solve for $\eta$ with $r = 1\ \text{mm} = 10^{-3}\ \text{m}$, $v = 0.5\ \text{cm/s} = 5 \times 10^{-3}\ \text{m/s}$:

$$\eta = \frac{2}{9}\frac{r^2 \rho\,g}{v} = \frac{2}{9}\cdot\frac{(10^{-3})^2 (2000)(10)}{5 \times 10^{-3}}$$

$$\eta = \frac{2}{9}\cdot\frac{2 \times 10^{-2}}{5 \times 10^{-3}} = \frac{2}{9}\times 4 = 0.888\ \text{Pa}\cdot\text{s}$$

Convert to Poise ($1\ \text{Pa}\cdot\text{s} = 10\ \text{Poise}$):

$$\eta = 0.888 \times 10 = 8.88 \approx 8.8\ \text{Poise}$$

**Answer:** B (8.8)

**Correct option:** B

Chemistry
Numerical

## Redox Reactions and Electrochemistry

JEE Main 2026
Apr 2, Shift 2

Consider the following two half-cell reactions along with the standard reduction potential given:

$$CO_2 + 6H^+ + 6e^- \longrightarrow CH_3OH + H_2O \qquad E^\circ_{red} = 0.02\,\text{V}$$

$$\tfrac{1}{2}O_2 + 2H^+ + 2e^- \longrightarrow H_2O \qquad E^\circ_{red} = 1.23\,\text{V}$$

A fuel cell was set up using the above two reactions such that the cell operates under the standard condition of 1 bar pressure and 298 K temperature. The fuel cell works with 80% efficiency. If the work derived from the cell using 1 mol of $CH_3OH$ is used to compress an ideal gas isothermally against a constant pressure of 1 kPa, then the change in the volume of the gas, $\Delta V =$ __________ m$^3$. (nearest integer) Given: $F = 96500$ C mol$^{-1}$

Numerical answer — work it out, then check the solution.

**Solution / Answer**

In the fuel cell, $\text{CH}_3\text{OH}$ is the fuel (oxidised at the anode); $\text{O}_2$ is reduced at the cathode.

$$E^\circ_{cell} = E^\circ_{cath} - E^\circ_{an} = 1.23 - 0.02 = 1.21\ \text{V}$$

Oxidation of $1$ mol $\text{CH}_3\text{OH}\to\text{CO}_2$ transfers $n = 6$ electrons.

**Maximum electrical work:**

$$W_{max} = nFE^\circ_{cell} = 6 \times 96500 \times 1.21 = 700{,}590\ \text{J}$$

**Useful work at 80% efficiency:**

$$W = 0.80 \times 700{,}590 = 560{,}472\ \text{J}$$

**Isothermal compression** against constant $P = 1\ \text{kPa} = 1000\ \text{Pa}$:

$$W = P\,|\Delta V| \implies |\Delta V| = \frac{560{,}472}{1000} = 560.47\ \text{m}^3$$

**Answer:** 560

Mathematics
Numerical

## Permutations and Combinations

JEE Main 2026
5 Apr, Shift 1

Let $A = \{1, 2, 3, 4, 5, 6\}$. The number of one-one functions $f : A \to A$ such that $f(1) \geq 3$, $f(3) \leq 4$ and $f(2) + f(3) = 5$, is __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

First handle the constraint $f(2) + f(3) = 5$ with $f(3) \le 4$ and $f(2), f(3)$ distinct (injective). The valid pairs $\big(f(3), f(2)\big)$ are:

$$(1,4),\ (2,3),\ (3,2),\ (4,1) \quad\text{— } 4 \text{ pairs.}$$

For each fixed pair, two of the six output values are used up. Now count:

- $f(1) \ge 3$: choose $f(1)$ from the values in $\{3,4,5,6\}$ still available (i.e. not already taken by $f(2), f(3)$).
- The remaining $3$ values fill positions $4, 5, 6$ in $3! = 6$ ways.

Checking each pair, exactly $3$ of the values $\{3,4,5,6\}$ remain free for $f(1)$ (one of them is always consumed by $f(2)$ or $f(3)$). So each pair contributes:

$$3 \times 3! = 3 \times 6 = 18.$$

Total over the $4$ pairs:

$$4 \times 18 = 72.$$

**Answer:** 72

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-17/](https://jeenotes.in/daily-challenges/2026-09-17/) · raw HTML: `offline/daily-challenges/2026-09-17/index.html`_
