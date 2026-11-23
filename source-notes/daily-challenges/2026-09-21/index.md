---
title: "Daily Challenge — 21 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-21/"
description: "Week 8 of Mission JEE 2027 · Heat of the Moment — Thermodynamics in physics, solutions in chemistry, and your first algebra consolidation week. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-21/index.html"
extracted: "2026-11-23"
---

> Week 8 of Mission JEE 2027 · Heat of the Moment — Thermodynamics in physics, solutions in chemistry, and your first algebra consolidation week. See the full plan .

Step outside this week and you’ll feel the theme before you read it - thermodynamics, live, as the afternoon sun does non-stop positive work on everyone without air conditioning, first law running unpaid overtime across the whole city.

Indoors, the nimbu paani your mother mixes is solutions chemistry - solute dissolved just enough to be refreshing, not so much it’s undrinkable - and if you’ve ever added ice cubes one at a time and watched the drink get colder in a predictable, decreasing pattern, that’s a sequence and series behaving itself.

Heat, solutions, series - week eight’s opening line-up. Three questions, launch the week.

Physics
Numerical

## Thermodynamics

JEE Main 2026
Apr 2, Shift 1

A vessel contains 0.15 m$^3$ of a gas at pressure 8 bar and temperature 140 °C with $c_p = 3R$ and $c_v = 2R$. It is expanded adiabatically till pressure falls to 1 bar. The work done during this process is __________ kJ. ($R$ is gas constant)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

$\gamma = \dfrac{c_p}{c_v} = \dfrac{3R}{2R} = \dfrac{3}{2}$.

Given $P_1 = 8 \times 10^5\ \text{Pa}$, $V_1 = 0.15\ \text{m}^3$, $P_2 = 1 \times 10^5\ \text{Pa}$.

**Final volume** (adiabatic, $P_1 V_1^{\gamma} = P_2 V_2^{\gamma}$):

$$V_2 = V_1\left(\frac{P_1}{P_2}\right)^{1/\gamma} = 0.15 \times 8^{2/3} = 0.15 \times 4 = 0.60\ \text{m}^3$$

**Work done in adiabatic process:**

$$W = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1} = \frac{(8\times10^5)(0.15) - (1\times10^5)(0.60)}{1.5 - 1}$$

$$W = \frac{1.2\times10^5 - 0.6\times10^5}{0.5} = \frac{0.6\times10^5}{0.5} = 1.2\times10^5\ \text{J} = 120\ \text{kJ}$$

**Answer:** 120

Chemistry

## Solutions

JEE Main 2025
Morning

What is the freezing point depression constant of a solvent, 50 g of which contain 1 g non volatile solute (molar mass $256 \mathrm{~g} \mathrm{~mol}^{-1}$ ) and the decrease in freezing point is 0.40 K ?

- **A.** $4.43 \mathrm{~K} \mathrm{~kg} \mathrm{~mol}^{-1}$

- **B.** $3.72 \mathrm{~K} \mathrm{~kg} \mathrm{~mol}^{-1}$

- **C.** $5.12 \mathrm{~K} \mathrm{~kg} \mathrm{~mol}^{-1}$

- **D.** $1.86 \mathrm{~K} \mathrm{~kg} \mathrm{~mol}^{-1}$

**Solution / Answer**

To find the freezing point depression constant ($ K_f $) of the solvent, we use the formula for freezing point depression:

$ \Delta T_f = K_f \cdot m $

Given:

The decrease in freezing point $\Delta T_f$ is 0.40 K.

The mass of the solute is 1 g and its molar mass is 256 g/mol.

The mass of the solvent is 50 g (or 0.050 kg).

First, calculate the molality ($ m $):

Molality is defined as the moles of solute per kilogram of solvent.

Calculate moles of solute:

$ \text{Moles of solute} = \frac{1 \, \text{g}}{256 \, \text{g/mol}} = \frac{1}{256} \, \text{mol} $

Calculate molality ($ m $):

$ m = \frac{\frac{1}{256} \, \text{mol}}{0.050 \, \text{kg}} = \frac{1}{256 \times 0.050} \, \text{mol/kg} $

Now, substitute into the formula to find $ K_f $:

$ 0.4 = K_f \cdot \frac{1}{256 \times 0.050} $

Solving for $ K_f $:

$ K_f = 0.4 \cdot 256 \times 0.050 = 5.12 \, \text{K kg/mol} $

Thus, the freezing point depression constant of the solvent is $ 5.12 \, \text{K kg/mol} $.

**Correct option:** C

Mathematics

## Sequences and Series

JEE Main 2025
Evening

If the sum of the first 20 terms of the series $\frac{4 \cdot 1}{4+3 \cdot 1^2+1^4}+\frac{4 \cdot 2}{4+3 \cdot 2^2+2^4}+\frac{4 \cdot 3}{4+3 \cdot 3^2+3^4}+\frac{4 \cdot 4}{4+3 \cdot 4^2+4^4}+\ldots \cdot$ is $\frac{\mathrm{m}}{\mathrm{n}}$, where m and n are coprime, then $\mathrm{m}+\mathrm{n}$ is equal to :

- **A.** 423

- **B.** 421

- **C.** 422

- **D.** 420

**Solution / Answer**

$$\begin{aligned} & S_n=\sum_{r=1}^n \frac{4 r}{4+3 r^2+r^4} \\ & =2 \sum_{r=1}^n \frac{2 r}{\left(r^2+2\right)^2-r^2}=2 \sum_{r=1}^n \frac{\left(r^2+2+r\right)-\left(r^2+2-r\right)}{\left(r^2+2+r\right)\left(r^2+2-r\right)} \\ & =2 \sum_{r=1}^n\left(\frac{1}{r^2+2-r}-\frac{1}{r^2+2+r}\right) \\ & S_{20}=2\left[\left(\frac{1}{2}-\frac{1}{4}\right)+\left(\frac{1}{4}-\frac{1}{8}\right)+\ldots\right] \\ & \quad=2\left(\frac{1}{2}-\frac{1}{20^2+2+20}\right) \\ & \quad=2\left(\frac{1}{2}-\frac{1}{422}\right) \\ & \quad=2\left(\frac{422-2}{422 \times 2}\right)=\frac{420}{422}=\frac{210}{211}=\frac{m}{n} \\ & m+n=421 \end{aligned}$$

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-21/](https://jeenotes.in/daily-challenges/2026-09-21/) · raw HTML: `offline/daily-challenges/2026-09-21/index.html`_
