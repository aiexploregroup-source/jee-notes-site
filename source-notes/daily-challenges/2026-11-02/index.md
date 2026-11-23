---
title: "Daily Challenge — 2 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-02/"
description: "Week 14 of Mission JEE 2027 · Magnetic Personality — Moving charges make fields; alcohols, phenols and ethers; derivatives put to work. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-02/index.html"
extracted: "2026-11-23"
---

> Week 14 of Mission JEE 2027 · Magnetic Personality — Moving charges make fields; alcohols, phenols and ethers; derivatives put to work. See the full plan .

Picture this: you stick a magnet on the fridge and it holds your coaching timetable up for months, no battery, no wiring. Week fourteen is called Magnetic Personality for a reason, and it starts with the question of why moving charges create fields at all.

Chemistry brings the alcohols, phenols and ethers, three families that look alike on paper and behave completely differently in the lab. Mathematics adds limits and derivatives, because rate of change is how you describe anything in motion.

This week builds on those three. Day one is the launch, so attempt today’s three questions before the week gets busy.

Physics

## Magnetic Effects of Current and Magnetism

JEE Main 2026
6 Apr, Shift 1

A small cube of side 1 mm is placed at the centre of a circular loop of radius 10 cm carrying a current of 2 A. The magnetic energy stored inside the cube is $\alpha \times 10^{-14}$ J. The value of $\alpha$ is ________. ($\mu_0 = 4\pi \times 10^{-7}$ Tm/A, $\pi = 3.14$)

- **A.** 6.28

- **B.** $6.28 \times 10^{-6}$

- **C.** 628

- **D.** $6.28 \times 10^{-4}$

**Solution / Answer**

Magnetic field at the centre of the loop:

$$B = \frac{\mu_0 I}{2R} = \frac{4\pi\times10^{-7}\times 2}{2\times 0.10} = 4\pi\times10^{-6} = 1.256\times10^{-5}\ \text{T}$$

Magnetic energy density:

$$u = \frac{B^2}{2\mu_0} = \frac{(4\pi\times10^{-6})^2}{2\times 4\pi\times10^{-7}} = \frac{16\pi^2\times10^{-12}}{8\pi\times10^{-7}} = 2\pi\times10^{-5}\ \text{J/m}^3$$

Volume of the cube: $V = (10^{-3})^3 = 10^{-9}\ \text{m}^3$. Energy stored:

$$U = uV = 2\pi\times10^{-5}\times10^{-9} = 2\pi\times10^{-14} = 6.28\times10^{-14}\ \text{J}$$

Hence $\alpha = 6.28$.

**Answer:** A ($6.28$)

**Correct option:** A

Chemistry

## Organic Compounds Containing Oxygen

JEE Main 2026
5 Apr, Shift 1

Consider compounds A, B and C with following structural formulae
$A = CH_3-CH_2-CH_2-CH_2-CH_2-OH$
$B = CH_2=CH-CH_2-CH_2-CH_3$
$C = HO-CH_2-CH_2-CH(OH)-CH_3$
For the conversion of B from A, reagent (D) required is ________ and structural formula of product (E) obtained when C undergoes same reaction using excess reagent (D) is ________.

- **A.** D: Conc. H$_2$SO$_4$; E: $CH_2 = CH - CH(OH)CH_3$

- **B.** D: PCC; E: $HO - CH_2 - CH_2 - CH = CH_2$

- **C.** D: PCC; E: $CH_2 = CH - CH = CH_2$

- **D.** D: Conc. H$_2$SO$_4$ or H$_3$PO$_4$; E: $CH_2 = CH - CH = CH_2$

**Solution / Answer**

**A → B:** pentan-1-ol loses a molecule of water to give a pentene. Removal of $H_2O$ from an alcohol is **acid-catalysed dehydration**, so reagent **D = conc. $H_2SO_4$ (or $H_3PO_4$)** — not an oxidant like PCC. This immediately eliminates the two PCC options.

**C → E (same reaction, excess D):** $C$ is **butane-1,3-diol**, $HO\text{–}CH_2\text{–}CH_2\text{–}CH(OH)\text{–}CH_3$. With excess dehydrating acid, **both** $-OH$ groups are eliminated:

$$HO\text{–}CH_2\text{–}CH_2\text{–}CH(OH)\text{–}CH_3 \xrightarrow[-2\,H_2O]{\text{excess } H_2SO_4} CH_2{=}CH\text{–}CH{=}CH_2$$

giving the conjugated diene **buta-1,3-diene**. This matches option D.

**Answer:** D: Conc. $H_2SO_4$ or $H_3PO_4$; E: $CH_2=CH-CH=CH_2$

**Correct option:** D

Mathematics

## Limits, Continuity and Differentiability

JEE Main 2026
2 Apr, Shift 1

If $\displaystyle\lim_{x \to 2} \dfrac{\sin\left(x^3 - 5x^2 + ax + b\right)}{\left(\sqrt{x-1} - 1\right) \log_e(x-1)} = m$, then $a + b + m$ is equal to:

- **A.** 5

- **B.** 6

- **C.** 8

- **D.** 10

**Solution / Answer**

Let $t = x - 2$. As $x\to 2$, $\sqrt{x-1}-1 = \sqrt{1+t}-1 \sim \tfrac{t}{2}$ and $\log_e(x-1) = \log(1+t) \sim t$, so the **denominator** $\sim \dfrac{t^2}{2}$ (order $t^2$).

For a finite non-zero limit the numerator must also be order $t^2$. Let $P(x) = x^3 - 5x^2 + ax + b$.

**Condition $P(2)=0$** (so $\sin P \to 0$): $\ 8 - 20 + 2a + b = 0 \Rightarrow 2a + b = 12$.

**Condition $P'(2)=0$** (so $P$ is order $t^2$): $\ P'(x) = 3x^2 - 10x + a$, and $P'(2) = a - 8 = 0 \Rightarrow a = 8$, hence $b = 12 - 16 = -4$.

Then $P(x) = x^3 - 5x^2 + 8x - 4 = (x-2)^2(x-1) = t^2(1+t)$, so $\sin P \sim t^2$.

$$m = \lim_{t\to 0}\dfrac{t^2}{t^2/2} = 2$$

$$a + b + m = 8 - 4 + 2 = 6$$

**Answer:** B

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-02/](https://jeenotes.in/daily-challenges/2026-11-02/) · raw HTML: `offline/daily-challenges/2026-11-02/index.html`_
