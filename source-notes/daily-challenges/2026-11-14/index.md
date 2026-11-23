---
title: "Daily Challenge — 14 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-14/"
description: "Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-14/index.html"
extracted: "2026-11-23"
---

> Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan .

Children’s Day is when schools hand out sweets and cancel class, and every JEE aspirant quietly wonders if the holiday applies to them. It does not, but a short window of calm is still a good time to take on a hard set.

Electromagnetic induction asks how much voltage a changing flux creates, amines ask how much the nitrogen is willing to share, and integration asks how much area sits under a curve. All three are quantity questions in different clothes.

Remember being unafraid of tough puzzles? Go attempt today’s three questions with that same energy.

Physics
Numerical

## Electromagnetic Induction and AC

JEE Main 2026
4 Apr, Shift 1

An inductor of 10 mH, capacitor of 0.1 $\mu$F and a resistor of 100 $\Omega$ are connected in series across an a.c power supply 220 V, 70 Hz. The power factor of the given circuit is 0.5. The difference in the inductive reactance and capacitance reactance is $\sqrt{3}\,\alpha\ \Omega$. The value of $\alpha$ is _____.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Power factor gives the impedance:

$$\cos\phi = \frac{R}{Z} = 0.5 \implies Z = \frac{R}{0.5} = \frac{100}{0.5} = 200\ \Omega$$

For a series LCR circuit:

$$Z^2 = R^2 + (X_L - X_C)^2$$

$$(X_L - X_C)^2 = Z^2 - R^2 = 200^2 - 100^2 = 30000$$

$$|X_L - X_C| = \sqrt{30000} = 100\sqrt{3}\ \Omega$$

Comparing with $\sqrt{3}\,\alpha$:

$$\sqrt{3}\,\alpha = 100\sqrt{3} \implies \alpha = 100$$

**Answer:** 100

Chemistry

## Organic Compounds Containing Nitrogen

JEE Main 2026
5 Apr, Shift 2

**Statement I:** Heating benzamide with bromine in an ethanolic solution of sodium hydroxide will give benzylamine.

**Statement II:** Nitration of aniline with $\text{HNO}_3/\text{H}_2\text{SO}_4$ at $288\,\text{K}$ produces m-nitroaniline in higher amount than o-nitroaniline.

In the light of the above statements, choose the correct answer:

- **A.** Both Statement I and Statement II are true

- **B.** Both Statement I and Statement II are false

- **C.** Statement I is true but Statement II is false

- **D.** Statement I is false but Statement II is true

**Solution / Answer**

**Statement I — FALSE.** Benzamide undergoing the Hofmann bromamide degradation loses one carbon (the carbonyl carbon leaves as carbonate):

$$C_6H_5CONH_2 \xrightarrow{Br_2,\,NaOH} C_6H_5NH_2\ (\text{aniline}).$$

The product is **aniline**, not benzylamine. (Benzylamine, $C_6H_5CH_2NH_2$, would require the same number of carbons, which the degradation does not give.)

**Statement II — TRUE.** In the strongly acidic nitrating mixture, aniline is protonated to the anilinium ion $C_6H_5NH_3^{+}$. The $-\overset{+}{N}H_3$ group is deactivating and **meta-directing**, so a substantial fraction of meta product forms. The observed distribution is roughly $\approx 47\%$ meta, $\approx 51\%$ para and only $\approx 2\%$ ortho. Hence m-nitroaniline is formed in higher amount than o-nitroaniline.

Statement I is false and Statement II is true.

**Answer:** D

**Correct option:** D

Mathematics

## Integral Calculus

JEE Main 2026
2 Apr, Shift 2

Let $f(x) = \displaystyle\int \left(\dfrac{16x + 24}{x^2 + 2x - 15}\right)dx$. If $f(4) = 14\log_e(3)$ and $f(7) = \log_e(2^\alpha \cdot 3^\beta)$, $\alpha, \beta \in \mathbb{N}$, then $\alpha + \beta$ is equal to:

- **A.** $31$

- **B.** $37$

- **C.** $39$

- **D.** $41$

**Solution / Answer**

Factor $x^2 + 2x - 15 = (x+5)(x-3)$ and use partial fractions:

$$\frac{16x + 24}{(x+5)(x-3)} = \frac{A}{x+5} + \frac{B}{x-3}.$$

From $A(x-3) + B(x+5) = 16x + 24$: at $x = 3$, $8B = 72 \Rightarrow B = 9$; at $x = -5$, $-8A = -56 \Rightarrow A = 7$.

So $f(x) = 7\ln|x+5| + 9\ln|x-3| + C$.

**Fix $C$ using $f(4)$:** $f(4) = 7\ln 9 + 9\ln 1 + C = 14\ln 3 + C$. Given $f(4) = 14\ln 3$, we get $C = 0$.

**Compute $f(7)$:**

$$f(7) = 7\ln 12 + 9\ln 4 = 7(\ln 4 + \ln 3) + 9\ln 4 = 16\ln 4 + 7\ln 3 = 32\ln 2 + 7\ln 3.$$

Thus $f(7) = \ln(2^{32}\cdot 3^{7})$, so $\alpha = 32,\ \beta = 7$ and

$$\alpha + \beta = 39.$$

**Answer:** C

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-14/](https://jeenotes.in/daily-challenges/2026-11-14/) · raw HTML: `offline/daily-challenges/2026-11-14/index.html`_
