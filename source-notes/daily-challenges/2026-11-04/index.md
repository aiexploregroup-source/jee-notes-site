---
title: "Daily Challenge — 4 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-04/"
description: "Week 14 of Mission JEE 2027 · Magnetic Personality — Moving charges make fields; alcohols, phenols and ethers; derivatives put to work. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-04/index.html"
extracted: "2026-11-23"
---

> Week 14 of Mission JEE 2027 · Magnetic Personality — Moving charges make fields; alcohols, phenols and ethers; derivatives put to work. See the full plan .

Hostel life rule one: the geyser takes twenty minutes and the queue takes thirty. That heating coil carries current, and any wire carrying current is surrounded by a magnetic field whether you notice or not.

Standing in that queue, think about ethanol in your sanitiser and phenol in your antiseptic. Both contain oxygen, and both will turn up as an Organic Compounds Containing Oxygen question on exam day, probably worded to trip you.

Add a limit problem about what happens as the queue length tends to infinity and you have today’s trio. Go solve them before the hot water runs out.

Physics
Numerical

## Magnetic Effects of Current and Magnetism

JEE Main 2026
2 Apr, Shift 1

1 µC charge moving with velocity $\vec{v} = \left(\hat{i} - 2\hat{j} + 3\hat{k}\right)$ m/s in the region of magnetic field $\vec{B} = \left(2\hat{i} + 3\hat{j} - 5\hat{k}\right)$ T. The magnitude of force acting on it is $\sqrt{\alpha} \times 10^{-6}$ N. The value of $\alpha$ is __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

The magnetic force is $\vec{F} = q\,\vec{v}\times\vec{B}$. Compute the cross product:

$$\vec{v}\times\vec{B} = \begin{vmatrix}\hat{i} & \hat{j} & \hat{k}\\ 1 & -2 & 3\\ 2 & 3 & -5\end{vmatrix}$$

$$= \hat{i}\big[(-2)(-5) - (3)(3)\big] - \hat{j}\big[(1)(-5) - (3)(2)\big] + \hat{k}\big[(1)(3) - (-2)(2)\big]$$

$$= \hat{i}(10 - 9) - \hat{j}(-5 - 6) + \hat{k}(3 + 4) = \hat{i} + 11\hat{j} + 7\hat{k}$$

Magnitude:

$$|\vec{v}\times\vec{B}| = \sqrt{1^2 + 11^2 + 7^2} = \sqrt{1 + 121 + 49} = \sqrt{171}$$

So $\vec{F} = 10^{-6}\sqrt{171}\ \text{N}$, giving $\sqrt{\alpha} = \sqrt{171}$.

**Answer:** 171

Chemistry

## Organic Compounds Containing Oxygen

JEE Main 2026
6 Apr, Shift 2

‘x’ is the product which is obtained by the hydrolysis of prop-1-yne in the presence of mercuric sulphate under dilute acidic medium at 333 K. ‘y’ is the product which is obtained by the reaction of ethane nitrile with methyl magnesium bromide in dry ether followed by hydrolysis. IUPAC name of product obtained from ‘x’ and ‘y’ in the presence of barium hydroxide followed by heating is:

- **A.** 2 - Methylpent-4-en-3-one

- **B.** 4 - Methylpent-3-en-2-one

- **C.** 4 - Methylpent-1-ene

- **D.** 2 - Methylpent-3-one

**Solution / Answer**

**Find x:** Markovnikov hydration of prop-1-yne ($CH_3\text{–}C\equiv CH$) with $HgSO_4/\text{dil. }H_2SO_4$ adds water at the internal carbon:

$$CH_3\text{–}C\equiv CH \xrightarrow{H_2O,\,HgSO_4} CH_3\text{–}\underset{O}{\overset{}{C}}\text{–}CH_3 \;=\; \textbf{acetone}$$

**Find y:** A nitrile with a Grignard reagent gives a ketone after hydrolysis:

$$CH_3C\equiv N + CH_3MgBr \rightarrow CH_3\text{–}C(=NMgBr)\text{–}CH_3 \xrightarrow{H_3O^+} CH_3\text{–}CO\text{–}CH_3 \;=\; \textbf{acetone}$$

So both x and y are **acetone**. With $Ba(OH)_2$ (base), acetone undergoes **aldol condensation** with itself; heating dehydrates the aldol:

$$2\,CH_3COCH_3 \xrightarrow{Ba(OH)_2} (CH_3)_2C(OH)\text{–}CH_2\text{–}COCH_3 \xrightarrow{\Delta,\,-H_2O} (CH_3)_2C{=}CH\text{–}COCH_3$$

The product is **mesityl oxide**. Numbering to give the ketone the lowest locant:

$$\underset{1}{CH_3}\text{–}\underset{2}{CO}\text{–}\underset{3}{CH}{=}\underset{4}{C}(CH_3)\text{–}\underset{5}{CH_3}$$

giving **4-methylpent-3-en-2-one**.

**Answer:** 4 - Methylpent-3-en-2-one

**Correct option:** B

Mathematics

## Limits, Continuity and Differentiability

JEE Main 2026
4 Apr, Shift 1

If $y = \tan^{-1}\left(\dfrac{3\cos x - 4\sin x}{4\cos x + 3\sin x}\right) + 2\tan^{-1}\left(\dfrac{x}{1 + \sqrt{1 - x^2}}\right)$, then $\dfrac{dy}{dx}$ at $x = \dfrac{\sqrt{3}}{2}$ is equal to:

- **A.** 3

- **B.** $-1$

- **C.** 1

- **D.** 2

**Solution / Answer**

**First term.** Divide numerator and denominator by $4\cos x$:

$$\tan^{-1}\!\left(\dfrac{\tfrac34 - \tan x}{1 + \tfrac34\tan x}\right) = \tan^{-1}\tfrac34 - \tan^{-1}(\tan x) = \tan^{-1}\tfrac34 - x$$

so its derivative is $-1$.

**Second term.** Put $x = \sin\theta$. Then

$$\dfrac{x}{1+\sqrt{1-x^2}} = \dfrac{\sin\theta}{1+\cos\theta} = \tan\dfrac{\theta}{2}$$

$$\Rightarrow\ 2\tan^{-1}\!\left(\tan\tfrac{\theta}{2}\right) = \theta = \sin^{-1}x,\qquad \dfrac{d}{dx}\sin^{-1}x = \dfrac{1}{\sqrt{1-x^2}}$$

**Combine:**

$$\dfrac{dy}{dx} = -1 + \dfrac{1}{\sqrt{1-x^2}}$$

At $x = \dfrac{\sqrt3}{2}$: $\sqrt{1-\tfrac34} = \tfrac12$, so

$$\dfrac{dy}{dx} = -1 + 2 = 1$$

**Answer:** C

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-04/](https://jeenotes.in/daily-challenges/2026-11-04/) · raw HTML: `offline/daily-challenges/2026-11-04/index.html`_
