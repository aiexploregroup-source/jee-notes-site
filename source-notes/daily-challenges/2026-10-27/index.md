---
title: "Daily Challenge — 27 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-27/"
description: "Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-27/index.html"
extracted: "2026-11-23"
---

> Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan .

Every gadget Ethan Hunt relies on in Mission: Impossible — The Final Reckoning eventually needs a shunt resistance swapped or a galvanometer recalibrated mid-mission, current electricity’s least cinematic but most necessary subplot, deciding how much current actually reaches the device that saves the day.

This week’s halogen question sorts alkyl halide reactivity by solvent polarity, a quieter kind of mission planning. And the degree-five polynomial with two extrema in today’s calculus question is its own multi-stage operation, each condition a checkpoint the answer has to clear.

No self-destructing message here, just three questions. Go attempt them.

Physics
Numerical

## Current Electricity

JEE Main 2026
6 Apr, Shift 2

A moving coil galvanometer, when shunted with a $2\ \Omega$ resistance, gives a full-scale deflection for a current of $500\ \text{mA}$. When a resistance of $470\ \Omega$ is connected in series it gives a full-scale deflection for $10\ \text{V}$ applied on it. The value of resistance of the galvanometer coil is __________ $\Omega$.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Let the coil resistance be $G$ and the full-scale (galvanometer) current be $I_g$; $I_g$ is the same in both experiments.

**Series case** ($470\ \Omega$ in series, $10\ \text{V}$ full scale):

$$I_g = \frac{10}{G + 470} \quad\text{(1)}$$

**Shunt case** ($S = 2\ \Omega$ across the coil, total current $I = 0.5\ \text{A}$):
The shunt carries $(I - I_g)$ and the voltage across both is equal:

$$I_g\,G = (I - I_g)\,S \implies I_g\,G = (0.5 - I_g)(2)$$

$$I_g\,G = 1 - 2 I_g \implies I_g(G + 2) = 1 \implies I_g = \frac{1}{G + 2} \quad\text{(2)}$$

**Equate (1) and (2):**

$$\frac{10}{G + 470} = \frac{1}{G + 2}$$

$$10(G + 2) = G + 470 \implies 10G + 20 = G + 470$$

$$9G = 450 \implies G = 50\ \Omega$$

(Check: $I_g = \tfrac{1}{52} \approx 19.2\ \text{mA}$ from both equations.)

**Answer:** 50

Chemistry

## Organic Compounds Containing Halogens

JEE Main 2026
2 Apr, Shift 2

Correct statements regarding alkyl halides (R-X) among the following are:

A. Alcohol being a less polar solvent than water, alcoholic KOH favours the elimination reaction with R-X.

B. Order of reactivity towards $S_N1$ is $\text{C}_6\text{H}_5\text{-CH}_2\text{-Cl} > \text{C}_6\text{H}_5\text{-CHCl-C}_6\text{H}_5$.

C. Non-substituted aryl halides exhibit properties similar to alkyl halides.

D. Vinyl chloride is an example of a haloalkene and allyl chloride is an example of a haloalkyne.

E. R-Cl can be prepared by reacting R-OH with $\text{SOCl}_2$, but Ar-Cl cannot be prepared by reacting Ar-OH with $\text{SOCl}_2$.

- **A.** A, B and C Only

- **B.** B and D Only

- **C.** A and E Only

- **D.** D and E Only

**Solution / Answer**

Evaluate each statement:

- **A. True.** Alcoholic KOH (a less polar medium) removes $\beta$-hydrogens and promotes **elimination** ($E2$), whereas aqueous KOH favours substitution.
- **B. False.** $S_N1$ rate follows cation stability. The benzhydryl cation $(\text{C}_6\text{H}_5)_2\overset{+}{\text{CH}}$ from $\text{C}_6\text{H}_5\text{-CHCl-C}_6\text{H}_5$ is stabilized by **two** rings and is more stable than the benzyl cation, so the order is reversed: $\text{C}_6\text{H}_5\text{-CHCl-C}_6\text{H}_5 > \text{C}_6\text{H}_5\text{-CH}_2\text{-Cl}$.
- **C. False.** Aryl halides ($\text{C-X}$ has partial double-bond character, resonance) are far less reactive than alkyl halides; their properties are not similar.
- **D. False.** Allyl chloride $\text{CH}_2=\text{CH-CH}_2\text{-Cl}$ is a **haloalkene**, not a haloalkyne.
- **E. True.** Aliphatic alcohols give R-Cl with $\text{SOCl}_2$, but phenols (Ar-OH) do not give Ar-Cl with $\text{SOCl}_2$ because of the strong, partial-double-bond $\text{C(aryl)-O}$ linkage.

Correct statements: **A and E only.**

**Answer:** C

**Correct option:** C

Mathematics

## Limits, Continuity and Differentiability

JEE Main 2026
2 Apr, Shift 2

Let $f(x)$ be a polynomial of degree 5, and have extrema at $x = 1$ and $x = -1$. If $\displaystyle\lim_{x \to 0}\left(\dfrac{f(x)}{x^3}\right) = -5$, then $f(2) - f(-2)$ is equal to:

- **A.** $0$

- **B.** $50$

- **C.** $92$

- **D.** $112$

**Solution / Answer**

The finite limit $\displaystyle\lim_{x\to 0}\dfrac{f(x)}{x^3} = -5$ forces $f(0)=f'(0)=f''(0)=0$ and the $x^3$-coefficient to be $-5$:

$$f(x) = -5x^3 + a x^4 + b x^5$$

**Extrema at $x=\pm 1$:** $f'(x) = -15x^2 + 4a x^3 + 5b x^4$.

$$f'(1) = -15 + 4a + 5b = 0,\qquad f'(-1) = -15 - 4a + 5b = 0$$

Adding: $-30 + 10b = 0 \Rightarrow b = 3$. Subtracting: $8a = 0 \Rightarrow a = 0$.

So $f(x) = -5x^3 + 3x^5$, which is **odd**, hence $f(-2) = -f(2)$:

$$f(2) - f(-2) = 2f(2) = 2\left(-5\cdot 8 + 3\cdot 32\right) = 2(56) = 112$$

**Answer:** D

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-27/](https://jeenotes.in/daily-challenges/2026-10-27/) · raw HTML: `offline/daily-challenges/2026-10-27/index.html`_
