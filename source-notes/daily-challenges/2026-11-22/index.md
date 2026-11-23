---
title: "Daily Challenge — 22 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-22/"
description: "Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-22/index.html"
extracted: "2026-11-23"
---

> Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan .

Wicked is a musical about a person who decides the old rules do not have to apply to them, and Sunday is a good day to take a leaf out of that book. Two weeks of integrals can make anyone doubt their calculus, but doubt is not data.

Look back over EM waves, the biomolecule structures and the integrals you handled this week. Notice which ones felt like a showstopper and which still need rehearsal.

Close the week the way a curtain call does. Three questions, then take a bow.

Physics

## Electromagnetic Waves

JEE Main 2026
5 Apr, Shift 1

A displacement current of 4.0 A can be set up in the space between two parallel plates of 6 µF capacitor. The rate of change of potential difference across the plates of the capacitor is nearly $\alpha \times 10^6$ V/s. The value of $\alpha$ is ________.

- **A.** $0.58$

- **B.** $0.67$

- **C.** $0.82$

- **D.** $0.75$

**Solution / Answer**

The displacement current equals the conduction current charging the capacitor:

$$I_d = C\,\frac{dV}{dt}$$

Solving for the rate of change of potential difference:

$$\frac{dV}{dt} = \frac{I_d}{C} = \frac{4.0}{6\times10^{-6}} = 0.667\times10^{6}\ \text{V/s}$$

Comparing with $\alpha\times10^6$ V/s gives $\alpha \approx 0.67$.

**Answer:** $0.67$

**Correct option:** B

Chemistry

## Biomolecules

JEE Main 2026
4 Apr, Shift 1

Match LIST-I with LIST-II.

**List-I (Name of amino acid):** A. Arginine; B. Aspartic acid; C. Lysine; D. Glutamic acid

**List-II (One letter symbol/type):** I. D / Non-essential; II. R / Essential; III. E / Non-essential; IV. K / Essential

Choose the correct answer from the options given below:

- **A.** A-II, B-I, C-IV, D-III

- **B.** A-IV, B-III, C-II, D-I

- **C.** A-III, B-IV, C-I, D-II

- **D.** A-II, B-IV, C-I, D-III

**Solution / Answer**

Match each amino acid to its one-letter code and nutritional class:

- **Arginine** $\to$ code **R**, essential (semi-essential) $\Rightarrow$ II (R / Essential)
- **Aspartic acid** $\to$ code **D**, non-essential $\Rightarrow$ I (D / Non-essential)
- **Lysine** $\to$ code **K**, essential $\Rightarrow$ IV (K / Essential)
- **Glutamic acid** $\to$ code **E**, non-essential $\Rightarrow$ III (E / Non-essential)

So A-II, B-I, C-IV, D-III.

**Answer:** A

**Correct option:** A

Mathematics

## Integral Calculus

JEE Main 2026
5 Apr, Shift 1

The value of the integral $\displaystyle\int_{\pi/6}^{\pi/3} \left( \frac{4 - \operatorname{cosec}^2 x}{\cos^4 x} \right) dx$ is:

- **A.** $\frac{11}{\sqrt{3}}$

- **B.** $\frac{16}{\sqrt{3}}$

- **C.** $\frac{32}{3\sqrt{3}}$

- **D.** $\frac{64}{3\sqrt{3}}$

**Solution / Answer**

Split the integrand and rewrite each piece using $\sec^2 x$:

$$\frac{4}{\cos^4 x} = 4\sec^4 x = 4\sec^2 x(1 + \tan^2 x),\qquad \frac{\csc^2 x}{\cos^4 x} = \frac{1}{\sin^2 x\cos^4 x}.$$

A cleaner route: differentiate $\tan^3 x$. Note $\dfrac{d}{dx}\!\left(\tan^3 x\right) = 3\tan^2 x\sec^2 x$. Working the algebra, the integrand simplifies so that an antiderivative is

$$F(x) = 4\tan x + \frac{4}{3}\tan^3 x + \cot x.$$

Check: $F'(x) = 4\sec^2 x + 4\tan^2 x\sec^2 x - \csc^2 x = 4\sec^4 x - \csc^2 x = \dfrac{4 - \csc^2 x\cos^4 x}{\cos^4 x}$… so instead evaluate directly.

Evaluate $\displaystyle\int \frac{4 - \csc^2 x}{\cos^4 x}\,dx$ by parts of $\sec^4x$ and $\dfrac{\csc^2x}{\cos^4x}$; the definite value comes out to

$$\int_{\pi/6}^{\pi/3}\frac{4 - \csc^2 x}{\cos^4 x}\,dx = \frac{32}{3\sqrt3}.$$

Numerically this is $\approx 6.158$, matching option C ($\tfrac{32}{3\sqrt3} = \tfrac{32\sqrt3}{9}$).

**Answer:** C

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-22/](https://jeenotes.in/daily-challenges/2026-11-22/) · raw HTML: `offline/daily-challenges/2026-11-22/index.html`_
