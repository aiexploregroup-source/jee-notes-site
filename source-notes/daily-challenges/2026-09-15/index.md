---
title: "Daily Challenge — 15 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-15/"
description: "Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-15/index.html"
extracted: "2026-11-23"
---

> Week 7 of Mission JEE 2027 · Matter Matters — Elasticity and fluids, electron bookkeeping in redox, and the art of counting. See the full plan .

That thin skin that forms on chai if you let it sit too long is surface tension pulling the top layer taut like a trampoline - the same property that lets a foam bubble hold its shape for exactly as long as it does before it pops on your finger.

The stall’s card machine running on a rechargeable battery is redox chemistry, silently swapping electrons between electrodes so your UPI payment doesn’t stall out. And working out how many ways five friends can split one plate of samosas unevenly is permutations and combinations, counting arrangements nobody wants to do by hand.

Drink the chai, then solve the count. Three questions, no skin off your back - go.

Physics

## Properties of Solids and Liquids

JEE Main 2026
Apr 2, Shift 2

The surface tension of a soap bubble is 0.03 N/m. The work done in increasing the diameter of bubble from 2 cm to 6 cm is $\alpha\pi \times 10^{-4}$ J. The value of $\alpha$ is __________. (Take $\pi = 3.14$)

- **A.** $0.86$

- **B.** $0.64$

- **C.** $1.92$

- **D.** $7.68$

**Solution / Answer**

Radii: $r_1 = 1\ \text{cm} = 0.01\ \text{m}$, $r_2 = 3\ \text{cm} = 0.03\ \text{m}$.

A soap bubble has two surfaces:

$$W = 8\pi T (r_2^2 - r_1^2)$$

$$r_2^2 - r_1^2 = (9 - 1)\times 10^{-4} = 8 \times 10^{-4}\ \text{m}^2$$

$$W = 8\pi \times 0.03 \times 8 \times 10^{-4} = 1.92\pi \times 10^{-4}\ \text{J}$$

Comparing with $\alpha\pi \times 10^{-4}$ gives $\alpha = 1.92$.

**Answer:** C (1.92)

**Correct option:** C

Chemistry

## Redox Reactions and Electrochemistry

JEE Main 2026
Apr 5, Shift 2

One half cell in a voltaic cell is constructed by dipping a silver rod in $\text{AgNO}_3$ solution of unknown concentration; the other half cell is a Zn rod dipped in 1 molar $\text{ZnSO}_4$. A voltage of 1.60 V is measured at 298 K. What is the concentration of $\text{Ag}^+$ ions in terms of $\log x$ ($x = [\text{Ag}^+]$)? Given $E^\circ_{Zn^{2+}/Zn} = -0.76$ V, $E^\circ_{Ag^+/Ag} = +0.80$ V, $\dfrac{2.303RT}{F} = 0.059$ V.

- **A.** $\dfrac{2}{3.9}$

- **B.** $\dfrac{4}{5.9}$

- **C.** $\dfrac{2.9}{2}$

- **D.** $\dfrac{5.9}{4}$

**Solution / Answer**

Ag is the cathode, Zn the anode:

$$E^\circ_{cell} = 0.80 - (-0.76) = 1.56\ \text{V}$$

Overall: $\text{Zn} + 2\text{Ag}^+ \to \text{Zn}^{2+} + 2\text{Ag}$, with $n = 2$ and

$$Q = \frac{[\text{Zn}^{2+}]}{[\text{Ag}^+]^2} = \frac{1}{x^2}$$

**Nernst equation:**

$$E_{cell} = E^\circ_{cell} - \frac{0.059}{2}\log_{10}\frac{1}{x^2} = 1.56 - \frac{0.059}{2}\,(-2\log x) = 1.56 + 0.059\log x$$

$$1.60 = 1.56 + 0.059\log x \implies 0.04 = 0.059\log x$$

$$\log x = \frac{0.04}{0.059} = \frac{4}{5.9}$$

**Answer:** B

**Correct option:** B

Mathematics

## Permutations and Combinations

JEE Main 2026
2 Apr, Shift 2

Let $p_n$ denote the total number of triangles formed by joining the vertices of an $n$-side regular polygon. If $P_{n+1} - P_n = 66$, then the sum of all distinct prime divisors of $n$ is:

- **A.** $7$

- **B.** $8$

- **C.** $5$

- **D.** $6$

**Solution / Answer**

Triangles from the vertices of an $n$-gon are just choices of $3$ vertices:

$$P_n = \binom{n}{3}.$$

Then, using $\binom{n+1}{3} - \binom{n}{3} = \binom{n}{2}$ (Pascal’s identity):

$$P_{n+1} - P_n = \binom{n}{2} = \frac{n(n-1)}{2} = 66.$$

So $n(n-1) = 132 = 12 \times 11 \Rightarrow n = 12.$

The distinct prime divisors of $12 = 2^2 \cdot 3$ are $2$ and $3$, whose sum is:

$$2 + 3 = 5.$$

**Answer:** C (5)

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-15/](https://jeenotes.in/daily-challenges/2026-09-15/) · raw HTML: `offline/daily-challenges/2026-09-15/index.html`_
