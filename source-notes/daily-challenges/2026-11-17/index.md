---
title: "Daily Challenge — 17 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-17/"
description: "Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-17/index.html"
extracted: "2026-11-23"
---

> Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan .

Stranger Things taught a generation to treat a flickering light bulb as a signal from another dimension. The real flicker is in frequency: electromagnetic waves span radio at one end to gamma at the other, and the ordering of that spectrum is a classic JEE memory test.

Biomolecules join in with glucose structures and amino acids that need careful drawing, while integration keeps asking you to pick the right technique before you start writing. Writing the spectrum order from memory once is worth more than reading it five times.

A strong Tuesday beats a hopeful Friday. Take today’s three questions and keep the week moving.

Physics

## Electromagnetic Waves

JEE Main 2026
2 Apr, Shift 2

An electromagnetic wave travels in free space along the $x$-direction. At a particular point in space and time, $\vec{B} = 2 \times 10^{-7}\,\hat{j}$ T is associated with this wave. The value of corresponding electric field $\vec{E}$ at this point is __________ V/m.

- **A.** $60\,\hat{k}$

- **B.** $-60\,\hat{k}$

- **C.** $30\,\hat{k}$

- **D.** $-600\,\hat{k}$

**Solution / Answer**

The magnitude of the electric field is:

$$E = cB = (3\times10^8)(2\times10^{-7}) = 60\ \text{V/m}$$

The propagation is along $+x$ ($\hat{i}$), and $\vec{B}\parallel\hat{j}$. Using $\hat{E}\times\hat{B} = \hat{n}$:

$$\hat{E}\times\hat{j} = \hat{i} \implies \hat{E} = -\hat{k}$$

since $(-\hat{k})\times\hat{j} = \hat{i}$.

$$\vec{E} = -60\,\hat{k}\ \text{V/m}$$

**Answer:** $-60\,\hat{k}$

**Correct option:** B

Chemistry

## Biomolecules

JEE Main 2026
8 Apr, Shift 2

The **incorrect** statement with respect to carbohydrates is:

- **A.** All monosaccharides are reducing sugars.

- **B.** The monosaccharide units obtained from hydrolysis of oligosaccharides are always the same.

- **C.** Starch and cellulose are typical examples of polysaccharides, which are very high molecular weight compounds of more than ten monosaccharide units.

- **D.** Open chain and cyclic structures co-exist at equilibrium that are responsible for certain properties as in the case of $D-(+)-$glucose.

**Solution / Answer**

Check each statement:

- “All monosaccharides are reducing sugars.” — **correct** (all have a free anomeric $-\text{OH}$/carbonyl).
- “The monosaccharide units obtained from hydrolysis of oligosaccharides are **always the same**.” — **incorrect.** Sucrose $\to$ glucose $+$ fructose; lactose $\to$ glucose $+$ galactose — the units can be different.
- “Starch and cellulose are polysaccharides of more than ten monosaccharide units.” — **correct.**
- “Open chain and cyclic structures co-exist at equilibrium, as in $D-(+)$-glucose.” — **correct** (mutarotation).

The incorrect statement is the second one.

**Answer:** B

**Correct option:** B

Mathematics

## Integral Calculus

JEE Main 2026
5 Apr, Shift 2

Let $f : [1, \infty) \to \mathbf{R}$ be a differentiable function defined as $f(x) = \displaystyle\int_1^x f(t)\,dt + (1 - x)(\log_e x - 1) + e$. Then the value of $f(f(1))$ is:

- **A.** $(1 + e^e)$

- **B.** $(1 + e)$

- **C.** $(1 + e + e^e)$

- **D.** $1 + 2e$

**Solution / Answer**

**Value at $x = 1$.** The integral vanishes and $(1-1)(\cdots) = 0$, so $f(1) = e$.

**Differentiate.** With $\dfrac{d}{dx}\!\big[(1-x)(\ln x - 1)\big] = -(\ln x - 1) + (1-x)\cdot\dfrac{1}{x} = -\ln x + \dfrac{1}{x}$,

$$f'(x) = f(x) - \ln x + \frac{1}{x}.$$

This is linear: $f' - f = \dfrac{1}{x} - \ln x$. Using integrating factor $e^{-x}$,

$$\big(e^{-x}f\big)' = e^{-x}\left(\frac{1}{x} - \ln x\right).$$

A neat particular solution is $f_p(x) = \ln x$ (indeed $\ln' x - \ln x = \tfrac1x - \ln x$), so $f(x) = Ce^{x} + \ln x$. Applying $f(1) = e$: $Ce + 0 = e \Rightarrow C = 1$, hence

$$f(x) = e^{x} + \ln x.$$

**Compose.** $f(1) = e$, so

$$f(f(1)) = f(e) = e^{e} + \ln e = e^{e} + 1 = 1 + e^{e}.$$

**Answer:** $(1 + e^e)$

**Correct option:** A

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-17/](https://jeenotes.in/daily-challenges/2026-11-17/) · raw HTML: `offline/daily-challenges/2026-11-17/index.html`_
