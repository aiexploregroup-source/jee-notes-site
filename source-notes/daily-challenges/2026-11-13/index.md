---
title: "Daily Challenge — 13 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-13/"
description: "Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-13/index.html"
extracted: "2026-11-23"
---

> Week 15 of Mission JEE 2027 · Induced Effort — Faraday and Lenz, nitrogen compounds, and integration begins — the biggest calculus block of the plan. See the full plan .

Today is Friday the thirteenth, the one date on which people suddenly become very careful about walking under ladders. Physics has a calmer relationship with bad luck: a changing flux induces a voltage whether the date is cursed or not.

So keep your head on straight and use that composure on amines, where basic strength depends on solvent and substituents, and on integration, where a missed constant of integration has cost many students real marks in real exams.

Luck does not appear in the marking scheme. Attempt today’s three questions and let preparation do the work.

Physics

## Electromagnetic Induction and AC

JEE Main 2026
5 Apr, Shift 2

A metal rod of length $L$ rotates about one end at the origin with a uniform angular velocity $\omega$. The magnetic field radially falls off as $B(r) = B_0 e^{-\lambda r}$, $\lambda$ being a positive constant. The emf induced (neglecting the centripetal force on electrons in the rod) is:

- **A.** $B_0 \omega\left[\dfrac{1}{\lambda^2} - e^{-\lambda L}\left(\dfrac{1}{\lambda^2} + \dfrac{L}{\lambda}\right)\right]$

- **B.** $B_0 \omega\left[\dfrac{1}{\lambda^2} + e^{-\lambda L}\left(\dfrac{1}{\lambda^2} + \dfrac{L}{\lambda}\right)\right]$

- **C.** $B_0 \omega\left[\dfrac{4}{\lambda^2} - e^{-2\lambda L}\left(\dfrac{1}{\lambda^2} + \dfrac{2L}{\lambda}\right)\right]$

- **D.** $B_0 \omega\left[\dfrac{3}{\lambda^2} - e^{-3\lambda L}\left(\dfrac{3}{\lambda^2} + \dfrac{L}{\lambda}\right)\right]$

**Solution / Answer**

A small element $dr$ at radius $r$ moves with speed $v = \omega r$, contributing motional emf $d\varepsilon = B(r)\,v\,dr$:

$$\varepsilon = \int_0^L B_0 e^{-\lambda r}\,(\omega r)\,dr = B_0\omega \int_0^L r\,e^{-\lambda r}\,dr$$

Using $\displaystyle\int r\,e^{-\lambda r}\,dr = -\frac{r}{\lambda}e^{-\lambda r} - \frac{1}{\lambda^2}e^{-\lambda r}$:

$$\int_0^L r\,e^{-\lambda r}\,dr = \left[-\frac{r}{\lambda}e^{-\lambda r} - \frac{1}{\lambda^2}e^{-\lambda r}\right]_0^L = \frac{1}{\lambda^2} - e^{-\lambda L}\left(\frac{L}{\lambda} + \frac{1}{\lambda^2}\right)$$

Therefore:

$$\varepsilon = B_0\omega\left[\frac{1}{\lambda^2} - e^{-\lambda L}\left(\frac{1}{\lambda^2} + \frac{L}{\lambda}\right)\right]$$

**Answer:** $B_0 \omega\left[\dfrac{1}{\lambda^2} - e^{-\lambda L}\left(\dfrac{1}{\lambda^2} + \dfrac{L}{\lambda}\right)\right]$

**Correct option:** A

Chemistry

## Organic Compounds Containing Nitrogen

JEE Main 2026
4 Apr, Shift 2

The strongest conjugate acid will result from (protonation of the amine gives the conjugate acid; the strongest conjugate acid corresponds to the weakest base):

- **A.** aniline (C$_6$H$_5$NH$_2$)

- **B.** 4-methoxyaniline (aniline with OCH$_3$ at para position)

- **C.** 4-nitroaniline (aniline with NO$_2$ at para position)

- **D.** 4-methylaniline / p-toluidine (aniline with CH$_3$ at para position)

**Solution / Answer**

For a base $B$ and its conjugate acid $BH^{+}$:

$$K_a(BH^{+}) \times K_b(B) = K_w \quad\Rightarrow\quad \text{weaker base} \Rightarrow \text{stronger conjugate acid}.$$

So we need the **weakest base** among the substituted anilines:

- **$-\text{OCH}_3$ (para):** electron-donating (by resonance) $\Rightarrow$ stronger base.
- **$-\text{CH}_3$ (para):** weakly electron-donating $\Rightarrow$ slightly stronger base than aniline.
- **$-\text{H}$ (aniline):** reference.
- **$-\text{NO}_2$ (para):** strongly electron-withdrawing ($-M,\,-I$), it delocalises the lone pair on $\text{N}$ and destabilises $BH^{+}$ $\Rightarrow$ **weakest base**.

Since 4-nitroaniline is the weakest base, its conjugate acid ($4\text{-}O_2N\text{-}C_6H_4\text{-}NH_3^{+}$) is the strongest.

**Answer:** C

**Correct option:** C

Mathematics

## Integral Calculus

JEE Main 2026
6 Apr, Shift 1

The value of the integral $\displaystyle\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}}\left(\dfrac{32\cos^4 x}{1 + e^{\sin x}}\right)dx$ is:

- **A.** $4\pi + 2$

- **B.** $3\pi + 8$

- **C.** $3\pi + 4$

- **D.** $4\pi + 3$

**Solution / Answer**

Use the **king property** $\int_{-a}^{a} \dfrac{g(x)}{1+e^{h(x)}}\,dx = \int_0^a g(x)\,dx$ whenever $g$ is even and $h$ is odd. Here $g(x) = 32\cos^4 x$ is even and $h(x) = \sin x$ is odd, so

$$I = \int_0^{\pi/4} 32\cos^4 x\,dx.$$

**Reduce the power.** Using $\cos^4 x = \dfrac{3}{8} + \dfrac{\cos 2x}{2} + \dfrac{\cos 4x}{8}$,

$$32\cos^4 x = 12 + 16\cos 2x + 4\cos 4x.$$

Integrate over $[0,\pi/4]$:

$$\int_0^{\pi/4} 12\,dx = 3\pi,\quad \int_0^{\pi/4} 16\cos 2x\,dx = 8\sin\frac{\pi}{2} = 8,\quad \int_0^{\pi/4} 4\cos 4x\,dx = \sin\pi = 0.$$

Therefore $I = 3\pi + 8$.

**Answer:** B

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-13/](https://jeenotes.in/daily-challenges/2026-11-13/) · raw HTML: `offline/daily-challenges/2026-11-13/index.html`_
