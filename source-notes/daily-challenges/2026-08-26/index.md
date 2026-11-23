---
title: "Daily Challenge — 26 August 2026"
source: "https://jeenotes.in/daily-challenges/2026-08-26/"
description: "Week 4 of Mission JEE 2027 · Bonds & Binomials — Work-energy, chemical bonding, and binomial expansions — three chapters that pay rent every JEE. See the full plan ."
html: "../../../offline/daily-challenges/2026-08-26/index.html"
extracted: "2026-11-23"
---

> Week 4 of Mission JEE 2027 · Bonds & Binomials — Work-energy, chemical bonding, and binomial expansions — three chapters that pay rent every JEE. See the full plan .

Check your WhatsApp: your closest friends sit in the group with the shortest reply times. Chemistry runs on the same gossip — the shorter the bond, the stronger it holds — and bond order is basically the group’s reply-speed leaderboard.

Today’s chemistry ranks bond lengths across related species, statement-versus-statement style, and the order is not the one your instinct suggests. Physics, day 3 of Bonds & Binomials, parks a 1 kg mass on an incline and audits every joule, while maths tests a binomial identity that looks far scarier than it is.

Three questions today. Reply speed of under thirty minutes expected — read receipts are on.

Physics

## Work, Energy and Power

JEE Main 2026
Apr 5, Shift 2

A mass of 1 kg is kept on a inclined plane with $30^\circ$ inclination with respect to horizontal plane and it is at rest initially. Then the whole assembly is moved up with constant velocity of 4 m/s. The work done by the frictional force in time 2 s is __________ J. (Take $g = 10$ m/s$^2$)

- **A.** 20

- **B.** 25

- **C.** 30

- **D.** 10

**Solution / Answer**

Data: $m = 1\ \text{kg}$, $\theta = 30^\circ$, $v = 4\ \text{m/s}$ (constant, vertically up), $t = 2\ \text{s}$.

The block moves with the assembly at constant velocity, so its acceleration is zero and it does not slide on the incline. Static friction must balance the along-incline component of gravity:

$$f = mg\sin\theta = (1)(10)\sin 30^\circ = 5\ \text{N}$$

directed **up the incline** to prevent the block from sliding down.

**Vertical displacement** in 2 s:

$$s = v\,t = 4 \times 2 = 8\ \text{m (upward)}$$

The up-slope friction vector makes angle $\theta$ with the horizontal, so its vertical component is $f\sin\theta$. Work done by friction (displacement is purely vertical):

$$W_f = (f\sin\theta)\,s = (5)(\sin 30^\circ)(8) = (5)(0.5)(8) = 20\ \text{J}$$

**Answer:** A ($20$)

**Correct option:** A

Chemistry

## Chemical Bonding and Molecular Structure

JEE Main 2026
2 Apr, Shift 1

Given below are two statements:
Statement (I): The correct sequence of bond lengths in the following species is $O_2^+ < O_2 < O_2^- < O_2^{2-}$.
Statement (II): The correct sequence of number of unpaired electrons in the following species is $O_2 > O_2^+ > O_2^- > O_2^{2-}$.
In the light of the above statements, choose the correct answer from the options given below:

- **A.** Both Statement I and Statement II are true

- **B.** Both Statement I and Statement II are false

- **C.** Statement I is true but Statement II is false

- **D.** Statement I is false but Statement II is true

**Solution / Answer**

Using molecular orbital theory, the bond order is:

$$O_2^+ : 2.5,\quad O_2 : 2.0,\quad O_2^- : 1.5,\quad O_2^{2-} : 1.0$$

Higher bond order $\Rightarrow$ shorter bond, so bond length increases as bond order falls:

$$O_2^+ < O_2 < O_2^- < O_2^{2-}\quad\checkmark\ (\textbf{Statement I is true})$$

Number of unpaired electrons (from the $\pi^*$ occupation):

$$O_2 : 2,\quad O_2^+ : 1,\quad O_2^- : 1,\quad O_2^{2-} : 0$$

Statement II claims $O_2 > O_2^+ > O_2^- > O_2^{2-}$, i.e. $2 > 1 > 1 > 0$. Since $O_2^+$ and $O_2^-$ both have $1$ unpaired electron, the strict inequality $O_2^+ > O_2^-$ is wrong.

$$\Rightarrow \textbf{Statement II is false}$$

**Answer:** C

**Correct option:** C

Mathematics

## Binomial Theorem

JEE Main 2026
8 Apr, Shift 2

If $26\left(\dfrac{2^3}{3}\dbinom{12}{2} + \dfrac{2^5}{5}\dbinom{12}{4} + \dfrac{2^7}{7}\dbinom{12}{6} + \cdots + \dfrac{2^{13}}{13}\dbinom{12}{12}\right) = 3^{13} - \alpha$, then $\alpha$ is equal to:

- **A.** 45

- **B.** 48

- **C.** 51

- **D.** 54

**Solution / Answer**

Consider the integral

$$\int_0^2 \frac{(1+x)^{12} - (1-x)^{12}}{2}\,dx.$$

The integrand keeps only odd powers of $x$: $\displaystyle \sum_{m=0}^{5}\binom{12}{2m+1}x^{2m+1}.$ Integrating from $0$ to $2$:

$$\int_0^2 \frac{(1+x)^{12}-(1-x)^{12}}{2}\,dx = \frac{1}{2}\left[\frac{(1+x)^{13} + (1-x)^{13}}{13}\right]_0^2 = \frac{3^{13} + (-1)^{13} - 2}{26} = \frac{3^{13} - 3}{26}.$$

Alternatively, integrating the even-part expansion $(1+x)^{12}+(1-x)^{12} = 2\sum_{m=0}^{6}\binom{12}{2m}x^{2m}$ gives, after evaluating the odd antiderivative at $x=2$:

$$\int_0^2\frac{(1+x)^{12}+(1-x)^{12}}{2}\,dx = \sum_{m=0}^{6}\binom{12}{2m}\frac{2^{2m+1}}{2m+1} = \frac{3^{13} + (-1)\cdot(-3^{13})}{26}\ldots$$

Direct evaluation of the given sum (terms $m = 1$ to $6$, i.e. excluding the $\binom{12}{0}$ term $\tfrac{2}{1}=2$):

$$S = \sum_{m=1}^{6}\frac{2^{2m+1}}{2m+1}\binom{12}{2m} = \frac{1594272}{26}.$$

Hence

$$26\,S = 1594272, \qquad 3^{13} = 1594323 \;\Rightarrow\; \alpha = 3^{13} - 26S = 1594323 - 1594272 = 51.$$

**Answer:** C (51)

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-08-26/](https://jeenotes.in/daily-challenges/2026-08-26/) · raw HTML: `offline/daily-challenges/2026-08-26/index.html`_
