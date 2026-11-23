---
title: "Daily Challenge — 21 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-21/"
description: "Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-21/index.html"
extracted: "2026-11-23"
---

> Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan .

Zootopia 2 returns to a city where every species has its own habitat and its own rules, and integration is a similar zoo. Substitution, parts, partial fractions and definite properties each live in a different enclosure and need a different handler.

Today you also revisit electromagnetic waves, where a few formulas cover most questions, and biomolecules, where reading the structure correctly is the whole game. Pick the technique first, then write the first line, and the rest becomes bookkeeping.

You do not need to be a zookeeper to pass the paper. Pick up three questions and prove it.

Physics

## Electromagnetic Waves

JEE Main 2026
5 Apr, Shift 2

Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).

**Assertion (A):** The electromagnetic wave exerts pressure on the surface on which they are allowed to fall.

**Reason (R):** There is no mass associated with the electromagnetic waves.

In the light of the above statements, choose the correct answer from the options given below:

- **A.** Both (A) and (R) are true and (R) is the correct explanation of (A)

- **B.** Both (A) and (R) are true but (R) is not the correct explanation of (A)

- **C.** (A) is true but (R) is false

- **D.** (A) is false but (R) is true

**Solution / Answer**

**Assertion (A):** EM waves carry linear momentum. When they fall on a surface, momentum is transferred, producing **radiation pressure**. For a fully absorbing surface, $P_{\text{rad}} = \dfrac{I}{c}$. So (A) is **true**.

**Reason (R):** Although photons have zero *rest mass*, an EM wave still carries momentum $p = \dfrac{E}{c}$ and an associated effective (relativistic) mass $m = \dfrac{E}{c^2}$. It is precisely this momentum that causes the pressure. The blanket claim “there is no mass associated with EM waves” is misleading/incorrect and, moreover, does not explain why pressure arises. So (R) is **false**.

Therefore, (A) is true but (R) is false.

**Answer:** (A) is true but (R) is false

**Correct option:** C

Chemistry

## Biomolecules

JEE Main 2026
8 Apr, Shift 2

Which of the following amino acids will give a **violet coloured** complex with neutral ferric chloride solution?

- **A.** Threonine

- **B.** Serine

- **C.** Tyrosine

- **D.** Cysteine

**Solution / Answer**

A violet/coloured complex with **neutral $\text{FeCl}_3$** is characteristic of a **phenolic $-\text{OH}$** group.

- **Threonine, Serine** — bear aliphatic ($-\text{CHOH}$ / $-\text{CH}_2\text{OH}$) hydroxyls, no colour.
- **Cysteine** — bears a thiol ($-\text{SH}$), no violet colour.
- **Tyrosine** — bears a **phenol** ring $\Rightarrow$ gives the violet Fe–phenolate complex.

**Answer:** C

**Correct option:** C

Mathematics

## Integral Calculus

JEE Main 2026
4 Apr, Shift 1

Let $\displaystyle\int_{-2}^{2} \big(|\sin x| + [x \sin x]\big)\, dx = 2(3 - \cos 2) + \beta$, where $[\cdot]$ is the greatest integer function. Then $\beta \sin\left(\dfrac{\beta}{2}\right)$ equals:

- **A.** 1

- **B.** 2

- **C.** 4

- **D.** 8

**Solution / Answer**

**The $|\sin x|$ part.** Since $|\sin x|$ is even and $\sin x \ge 0$ on $[0,2]$ (because $2 < \pi$),

$$\int_{-2}^{2} |\sin x|\,dx = 2\int_0^2 \sin x\,dx = 2(1 - \cos 2).$$

**The $[x\sin x]$ part.** Note $x\sin x$ is even, so $[x\sin x]$ is even and

$$\int_{-2}^{2} [x\sin x]\,dx = 2\int_0^2 [x\sin x]\,dx.$$

On $[0,2]$, $x\sin x$ increases from $0$ to $2\sin 2 \approx 1.82$ (its critical point $x=2.03$ lies outside). So $[x\sin x] = 0$ while $x\sin x < 1$ and $[x\sin x] = 1$ once $x\sin x \ge 1$. Let $c$ be the point with $c\sin c = 1$. Then

$$\int_0^2 [x\sin x]\,dx = \int_c^2 1\,dx = 2 - c,$$

so this contribution is $2(2 - c)$.

**Combine and read off $\beta$.**

$$\text{LHS} = 2(1-\cos 2) + 2(2 - c) = 6 - 2\cos 2 - 2c.$$

Comparing with $2(3-\cos 2) + \beta = 6 - 2\cos 2 + \beta$ gives $\beta = -2c$.

**Final value.** Using $c\sin c = 1$,

$$\beta\sin\!\left(\frac{\beta}{2}\right) = (-2c)\sin(-c) = 2c\sin c = 2\cdot 1 = 2.$$

**Answer:** 2

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-21/](https://jeenotes.in/daily-challenges/2026-11-21/) · raw HTML: `offline/daily-challenges/2026-11-21/index.html`_
