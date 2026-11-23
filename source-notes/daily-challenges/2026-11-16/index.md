---
title: "Daily Challenge — 16 November 2026"
source: "https://jeenotes.in/daily-challenges/2026-11-16/"
description: "Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan ."
html: "../../../offline/daily-challenges/2026-11-16/index.html"
extracted: "2026-11-23"
---

> Week 16 of Mission JEE 2027 · Wave Hello — EM waves, biomolecules, and a second week inside integrals. See the full plan .

Your phone is receiving a wave right now that has no colour, no sound and no weight, and yet it carries every reel you scroll. Electromagnetic waves are the quiet backbone of modern life, and they headline this week’s Wave Hello.

Alongside, chemistry moves into biomolecules, the carbohydrates, proteins and vitamins that your own body is built from. Mathematics keeps going deeper into integral calculus, because one week was clearly never going to be enough. Treat it as a hello to three new ideas at once, and expect the first few minutes to feel unfamiliar.

Monday is a launch day. Start the week by attempting today’s three questions.

Physics

## Electromagnetic Waves

JEE Main 2026
6 Apr, Shift 1

A point light source emits E.M. waves in free space. A detector, placed at a distance of $L$ m, measures the intensity as $I_0$. The detector is now shifted to another location on the same spherical surface ensuring the angle between original location and new location as $45^\circ$. The measured intensity at new location will be ________.

- **A.** $\dfrac{I_0}{4}$

- **B.** $I_0$

- **C.** $\dfrac{I_0}{\sqrt{2}}$

- **D.** $\dfrac{I_0}{2}$

**Solution / Answer**

For an isotropic point source, the emitted power $P$ spreads uniformly over a sphere, so the intensity depends only on the distance $r$ from the source:

$$I = \frac{P}{4\pi r^2}$$

Both the original and the new detector positions lie on the **same spherical surface**, meaning they are at the same distance $r = L$ from the source. The angular separation of $45^\circ$ only moves the detector along the sphere and does not change $r$.

$$I_{\text{new}} = \frac{P}{4\pi L^2} = I_0$$

**Answer:** $I_0$

**Correct option:** B

Chemistry

## Biomolecules

JEE Main 2026
6 Apr, Shift 1

Match LIST-I with LIST-II.

**LIST-I (Amino acid):** A. Glutamine; B. Lysine; C. Tyrosine; D. Serine

**LIST-II (Positive reaction / test for the functional group in the side chain):** I. Hinsberg’s test; II. Neutral $\text{FeCl}_3$ test; III. Ceric ammonium nitrate test; IV. Hofmann bromamide degradation

Choose the correct answer from the options given below:

- **A.** A-IV, B-II, C-I, D-III

- **B.** A-IV, B-I, C-II, D-III

- **C.** A-III, B-II, C-I, D-IV

- **D.** A-IV, B-I, C-III, D-II

**Solution / Answer**

Identify the side-chain functional group and its characteristic test:

- **Glutamine** — side chain has an **amide** ($-\text{CONH}_2$) $\Rightarrow$ **Hofmann bromamide degradation** (IV)
- **Lysine** — side chain has a **primary amine** ($-\text{NH}_2$) $\Rightarrow$ **Hinsberg’s test** (I)
- **Tyrosine** — side chain has a **phenolic $-\text{OH}$** $\Rightarrow$ **neutral $\text{FeCl}_3$ test** (II)
- **Serine** — side chain has a **primary alcohol** ($-\text{CH}_2\text{OH}$) $\Rightarrow$ **ceric ammonium nitrate test** (III)

So A-IV, B-I, C-II, D-III.

**Answer:** B

**Correct option:** B

Mathematics

## Integral Calculus

JEE Main 2026
5 Apr, Shift 2

Let $(2^{1-a} + 2^{1+a})$, $f(a)$, $(3^a + 3^{-a})$ be in A.P. and $\alpha$ be the minimum value of $f(a)$. Then the value of the integral $\displaystyle\int_{\log_e(\alpha - 1)}^{\log_e(\alpha)} \dfrac{dx}{e^{2x} - e^{-2x}}$ is:

- **A.** $\dfrac{1}{2}\log_e\left(\dfrac{4}{3}\right)$

- **B.** $\dfrac{1}{4}\log_e\left(\dfrac{4}{3}\right)$

- **C.** $\dfrac{1}{2}\log_e\left(\dfrac{8}{5}\right)$

- **D.** $\dfrac{1}{4}\log_e\left(\dfrac{8}{5}\right)$

**Solution / Answer**

**Find $\alpha$.** In an A.P., the middle term is the average:

$$f(a) = \frac{1}{2}\Big[(2^{1-a} + 2^{1+a}) + (3^a + 3^{-a})\Big] = \frac{1}{2}\Big[2(2^a + 2^{-a}) + (3^a + 3^{-a})\Big].$$

By AM–GM, $2^a + 2^{-a} \ge 2$ and $3^a + 3^{-a} \ge 2$, both minimized at $a = 0$. So

$$\alpha = f(0) = \frac{1}{2}(4 + 2) = 3.$$

**Evaluate the integral** from $\ln 2$ to $\ln 3$. Since $e^{2x} - e^{-2x} = \dfrac{e^{4x} - 1}{e^{2x}}$, put $u = e^{2x}$ ($du = 2u\,dx$):

$$\int \frac{dx}{e^{2x} - e^{-2x}} = \int \frac{e^{2x}\,dx}{e^{4x} - 1} = \frac{1}{2}\int \frac{du}{u^2 - 1} = \frac{1}{4}\ln\left|\frac{u - 1}{u + 1}\right|.$$

At $x = \ln 3$, $u = 9$: $\tfrac14\ln\tfrac{8}{10} = \tfrac14\ln\tfrac45$. At $x = \ln 2$, $u = 4$: $\tfrac14\ln\tfrac35$.

$$I = \frac{1}{4}\left(\ln\frac{4}{5} - \ln\frac{3}{5}\right) = \frac{1}{4}\ln\frac{4}{3}.$$

**Answer:** B

**Correct option:** B

---

_Source: [https://jeenotes.in/daily-challenges/2026-11-16/](https://jeenotes.in/daily-challenges/2026-11-16/) · raw HTML: `offline/daily-challenges/2026-11-16/index.html`_
