---
title: "Daily Challenge — 18 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-18/"
description: "Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-18/index.html"
extracted: "2026-11-23"
---

> Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan .

The rusted gate hinge that’s been creaking since before you started JEE prep is redox reactions running in extreme slow motion - iron losing electrons to oxygen for months on end, electrochemistry with zero urgency and maximum patience.

The mud outside that same gate after last night’s rain has gone thick and reluctant to flow, which is properties of solids and liquids talking about viscosity in language your shoes understand. And figuring out how many routes you can take to dodge that mud on the way to tuition is permutations and combinations, practical edition.

Skip the mud, not the questions. Three of them today - go solve.

Physics
Numerical

## Properties of Solids and Liquids

JEE Main 2026
Apr 5, Shift 2

A copper wire of length 3 m is stretched by 3 mm by applying an external force. The volume of the wire is $600 \times 10^{-6}$ m$^3$. The elastic potential energy stored in the wire in stretched condition would be __________ J. (Given Young modulus of copper $= 1.1 \times 10^{11}$ N/m$^2$)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Elastic potential energy per unit volume $= \dfrac{1}{2}\,(\text{stress})(\text{strain}) = \dfrac{1}{2}Y(\text{strain})^2$, so:

$$U = \frac{1}{2}Y\left(\frac{\Delta L}{L}\right)^2 V$$

Strain:

$$\frac{\Delta L}{L} = \frac{3 \times 10^{-3}}{3} = 10^{-3}$$

$$U = \frac{1}{2}(1.1 \times 10^{11})(10^{-3})^2 (600 \times 10^{-6})$$

$$U = \frac{1}{2}(1.1 \times 10^{11})(10^{-6})(6 \times 10^{-4}) = \frac{1}{2}\times 66 = 33\ \text{J}$$

**Answer:** 33

Chemistry
Numerical

## Redox Reactions and Electrochemistry

JEE Main 2026
Apr 6, Shift 2

500 mL of 0.2 M $\text{MnO}_4^-$ solution in basic medium when mixed with 500 mL of 1.5 M KI solution, oxidises iodide ions to liberate molecular iodine. This liberated iodine is then titrated with a standard $x$ M thiosulphate solution in presence of starch till the end point. If 300 mL of thiosulphate was consumed, then the value of $x$ is __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

**Moles of $\text{MnO}_4^-$:** $0.500 \times 0.2 = 0.1$ mol.

In **basic (neutral) medium**, $\text{MnO}_4^-$ is reduced to $\text{MnO}_2$, gaining $3\,e^-$ each:

$$\text{electrons available} = 0.1 \times 3 = 0.3\ \text{mol}\,e^-$$

Iodide is oxidised $2I^- \to I_2 + 2e^-$ ($1\,e^-$ per $I^-$), so $0.3$ mol $I^-$ is oxidised:

$$n_{I_2} = \frac{0.3}{2} = 0.15\ \text{mol}$$

(KI available $= 0.75$ mol, so $\text{MnO}_4^-$ is limiting — consistent.)

**Thiosulphate titration:** $I_2 + 2\text{S}_2\text{O}_3^{2-} \to 2I^- + \text{S}_4\text{O}_6^{2-}$

$$n_{\text{thio}} = 2 \times 0.15 = 0.30\ \text{mol}$$

$$x = \frac{n_{\text{thio}}}{V} = \frac{0.30}{0.300} = 1\ \text{M}$$

**Answer:** 1

Mathematics

## Permutations and Combinations

JEE Main 2026
2 Apr, Shift 1

The number of seven-digit numbers, that can be formed by using the digits 1, 2, 3, 5 and 7 such that each digit is used at least once, is:

- **A.** 15400

- **B.** 17800

- **C.** 16800

- **D.** 29400

**Solution / Answer**

Each of the $7$ positions gets one of the $5$ digits, and every digit must appear at least once. This is the number of **onto** functions from $7$ positions onto $5$ digits (all digits are nonzero, so no leading-zero issue arises).

By inclusion–exclusion:

$$\sum_{i=0}^{5}(-1)^i \binom{5}{i}(5-i)^7.$$

Computing the terms:

$$5^7 - \binom{5}{1}4^7 + \binom{5}{2}3^7 - \binom{5}{3}2^7 + \binom{5}{4}1^7$$

$$= 78125 - 5(16384) + 10(2187) - 10(128) + 5(1)$$

$$= 78125 - 81920 + 21870 - 1280 + 5 = 16800.$$

**Answer:** C (16800)

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-18/](https://jeenotes.in/daily-challenges/2026-09-18/) · raw HTML: `offline/daily-challenges/2026-09-18/index.html`_
