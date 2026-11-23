---
title: "Daily Challenge — 1 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-01/"
description: "Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-01/index.html"
extracted: "2026-11-23"
---

> Week 13 of Mission JEE 2027 · Current Affairs — Circuits, haloalkanes, and the first serious calculus week — limits, continuity, differentiability. See the full plan .

Every Mumbai commuter knows the silence when the overhead supply trips and the entire local goes dark mid-journey. Nothing flows because the loop is broken. That is Current Electricity in one scene, and it is the headline act of week thirteen.

A haloalkane is the same story in carbon: a chain with a leaving group waiting for a better offer. And a limit asks what happens as you creep towards a point without ever reaching it, which is basically every platform crowd at 6 pm.

Week thirteen closes today. Take the three questions in one sitting and enter Monday with a clean slate.

Physics
Numerical

## Current Electricity

JEE Main 2026
5 Apr, Shift 2

When an external resistance of $5\ \Omega$ is connected across the terminals of a cell, a current of $0.25\ \text{A}$ flows through it. When the $5\ \Omega$ resistor is replaced by a $2\ \Omega$ resistor, a current of $0.5\ \text{A}$ flows through it. The internal resistance of the cell is __________ $\Omega$.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Let the EMF be $E$ and internal resistance be $r$. For each load, $E = I(R + r)$.

**Case 1** ($R = 5\ \Omega$, $I = 0.25\ \text{A}$):

$$E = 0.25(5 + r)$$

**Case 2** ($R = 2\ \Omega$, $I = 0.5\ \text{A}$):

$$E = 0.5(2 + r)$$

**Equate:**

$$0.25(5 + r) = 0.5(2 + r)$$

$$1.25 + 0.25r = 1 + 0.5r$$

$$0.25 = 0.25r \implies r = 1\ \Omega$$

(Then $E = 0.25(5 + 1) = 1.5\ \text{V}$, consistent with Case 2.)

**Answer:** 1

Chemistry

## Organic Compounds Containing Halogens

JEE Main 2026
6 Apr, Shift 1

**Statement I:** 3-phenylpropene reacts with HBr and gives a secondary alkyl bromide having a chiral carbon atom as the major product.

**Statement II:** Aryl chlorides and aryl cyanides can be prepared by the Sandmeyer reaction as well as the Gattermann reaction.

- **A.** Both Statement I and Statement II are true

- **B.** Both Statement I and Statement II are false

- **C.** Statement I is true but Statement II is false

- **D.** Statement I is false but Statement II is true

**Solution / Answer**

**Statement I:** 3-phenylpropene is allylbenzene, $\text{C}_6\text{H}_5\text{-}\text{CH}_2\text{-}\text{CH}=\text{CH}_2$. Markovnikov addition of HBr places Br on the more substituted internal carbon:

$$\text{C}_6\text{H}_5\text{-CH}_2\text{-CH}=\text{CH}_2 + \text{HBr} \rightarrow \text{C}_6\text{H}_5\text{-CH}_2\text{-}\underset{\text{Br}}{\text{CH}}\text{-CH}_3$$

The Br-bearing carbon carries four different groups ($\text{-Br}$, $\text{-H}$, $\text{-CH}_3$, $\text{-CH}_2\text{C}_6\text{H}_5$), so it is a chiral secondary bromide. **True.**

**Statement II:** Both routes start from a diazonium salt. Sandmeyer uses cuprous salts ($\text{Cu}_2\text{Cl}_2$ for Ar-Cl, CuCN for Ar-CN); Gattermann uses copper powder with HCl (Ar-Cl) or with KCN/Cu (Ar-CN). Both give aryl chlorides and aryl cyanides. **True.**

Both statements are true.

**Answer:** A

**Correct option:** A

Mathematics

## Limits, Continuity and Differentiability

JEE Main 2026
5 Apr, Shift 2

Let $f(x) = \displaystyle\lim_{y \to 0} \dfrac{(1 - \cos(xy))\tan(xy)}{y^3}$. Then the number of solutions of the equation $f(x) = \sin x$, $x \in \mathbf{R}$ is:

- **A.** 0

- **B.** 2

- **C.** 3

- **D.** 1

**Solution / Answer**

**Evaluate $f(x)$.** As $y\to 0$: $\ 1 - \cos(xy) \sim \dfrac{(xy)^2}{2} = \dfrac{x^2 y^2}{2}$ and $\tan(xy) \sim xy$, so

$$f(x) = \lim_{y\to 0}\dfrac{\tfrac{x^2 y^2}{2}\cdot xy}{y^3} = \dfrac{x^3}{2}.$$

**Solve $\dfrac{x^3}{2} = \sin x$, i.e. $x^3 = 2\sin x$.** Both sides are odd, so solutions are symmetric about $0$.

- $x = 0$ is a solution.
- For $x>0$: since $\sin x \le 1$, any root needs $x^3 \le 2 \Rightarrow x \le 2^{1/3} \approx 1.26$. On $(0, 1.26]$, $x^3 - 2\sin x$ goes from $0^-$ to positive, giving exactly one root $x \approx 1.236$.
- By oddness, one matching root at $x \approx -1.236$.

Total: $3$ solutions.

**Answer:** C

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-01/](https://jeenotes.in/daily-challenges/2026-11-01/) · raw HTML: `offline/daily-challenges/2026-11-01/index.html`_
