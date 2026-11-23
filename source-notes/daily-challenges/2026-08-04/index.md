---
title: "Daily Challenge — 4 August 2026"
source: "https://jeenotes.in/daily-challenges/2026-08-04/"
description: "Week 1 of Mission JEE 2027 · Ground Zero — Foundations week — units, mole concept, and the language of sets. Everything else builds on this. See the full plan ."
html: "../../../offline/daily-challenges/2026-08-04/index.html"
extracted: "2026-11-23"
---

> Week 1 of Mission JEE 2027 · Ground Zero — Foundations week — units, mole concept, and the language of sets. Everything else builds on this. See the full plan .

Every UPI payment you make lands in exactly one account. Never two, never none. Congratulations — you already understand one-one functions; you have just never been paid marks for it. Today’s maths question asks you to count one-one functions between sets, which is UPI logic with factorials.

Meanwhile physics hands you L, C and R and asks what dimensional formula their combination gives — Week 1, day 2, and Ground Zero is already testing whether you speak the language of dimensions. Chemistry removes molecules from a sample and asks what mass you started with: pure mole-concept accounting.

Three questions, one sitting. Scan the QR code of your own discipline and pay up.

Physics

## Units and Measurements

JEE Main 2026
5 Apr, Shift 1

$L$, $C$ and $R$ represents physical quantities inductance, capacitance and resistance respectively. The dimensional formula $\mathrm{M\,L^2\,T^{-4}\,A^{-2}}$ corresponds to __________.

- **A.** $\frac{R}{\sqrt{LC}}$

- **B.** $\frac{R}{LC}$

- **C.** $\frac{C}{\sqrt{LR}}$

- **D.** $\frac{1}{R}\sqrt{\frac{L}{C}}$

**Solution / Answer**

Base dimensions of the components:

$$[L] = [M L^2 T^{-2} A^{-2}], \quad [C] = [M^{-1} L^{-2} T^{4} A^{2}], \quad [R] = [M L^2 T^{-3} A^{-2}]$$

Test option A, $\dfrac{R}{\sqrt{LC}}$. First $LC$:

$$[LC] = [M L^2 T^{-2} A^{-2}][M^{-1} L^{-2} T^{4} A^{2}] = [T^{2}]$$

$$[\sqrt{LC}] = [T]$$

Then:

$$\left[\frac{R}{\sqrt{LC}}\right] = \frac{[M L^2 T^{-3} A^{-2}]}{[T]} = [M L^2 T^{-4} A^{-2}]$$

This matches the target formula exactly.

(Note: $\sqrt{LC}$ is the time constant of an $LC$ oscillator, and $R/\sqrt{LC}$ therefore carries resistance-per-time dimensions.)

**Answer:** A ($\frac{R}{\sqrt{LC}}$)

**Correct option:** A

Chemistry

## Some Basic Concepts of Chemistry

JEE Main 2025
Morning

$2.8 \times 10^{-3} \mathrm{~mol}$ of $\mathrm{CO}_2$ is left after removing $10^{21}$ molecules from its ' $x$ ' mg sample. The mass of $\mathrm{CO}_2$ taken initially is Given: $\mathrm{N}_{\mathrm{A}}=6.02 \times 10^{23} \mathrm{~mol}^{-1}$

- **A.** 98.3 mg

- **B.** 196.2 mg

- **C.** 150.4 mg

- **D.** 48.2 mg

**Solution / Answer**

$$\begin{aligned} & (\text { moles })_{\text {initial }}=\frac{x \times 10^{-3}}{44} \\ & (\text { moles })_{\text {removal }}=\frac{10^{21}}{6.02 \times 10^{23}} \\ & (\text { moles })_{\text {left }}=(\text { moles })_{\text {initial }}-(\text { moles })_{\text {removed }} \\ & 2.8 \times 10^{-3}=\frac{x \times 10^{-3}}{44}-\frac{10^{21}}{6.02 \times 10^{23}} \\ & \Rightarrow x=196.2 \mathrm{mg} \end{aligned}$$

**Correct option:** B

Mathematics

## Sets and Relations

JEE Main 2025
Morning

Consider the sets $A=\left\{(x, y) \in \mathbb{R} \times \mathbb{R}: x^2+y^2=25\right\}, B=\left\{(x, y) \in \mathbb{R} \times \mathbb{R}: x^2+9 y^2=144\right\}$, $C=\left\{(x, y) \in \mathbb{Z} \times \mathbb{Z}: x^2+y^2 \leq 4\right\}$ and $D=A \cap B$. The total number of one-one functions from the set $D$ to the set $C$ is:

- **A.** 15120

- **B.** 18290

- **C.** 17160

- **D.** 19320

**Solution / Answer**

$$\begin{aligned} & A=\left\{(x, y) \in R \times R: x^2+y^2=25\right\}, B=\{(x, y) \in \mathbb{R} \times \\ & \left.\mathbb{R}: x^2+9 y^2=144\right\} \\ & x^2+9 y^2-\left(x^2+y^2\right)=144-25 \\ & \text { Plug in } y^2=\frac{119}{8} \text { into either equation to find } x . \\ & x^2=25-\frac{119}{8} \\ & x^2=\frac{200-119}{8} \\ & x^2=\frac{81}{8} \\ & x= \pm \sqrt{\frac{81}{8}}, y= \pm \sqrt{\frac{119}{8}} \end{aligned}$$

Now, $C=\left\{(x, y) \in \mathbb{Z} \times \mathbb{Z}: x^2+y^2 \leq 4\right\}$

Valid points are $(-2,0),(-1,-1),(-1,0),(-1,1)$, $(0,-2),(0,-1),(0,0),(0,1),(0,2),(1,-1),(1,0)$, $(1,1)$

$\therefore$ Total valid points in $C=13$

$\Rightarrow \quad$ There are 4 distinct real points in set $D$

$\therefore \quad$ The number of one-one functions from $D$ to $C$

$$\Rightarrow \quad 13 P_4 \Rightarrow \frac{13!}{(13-4)!}=\frac{13!}{9!}=17160$$

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-08-04/](https://jeenotes.in/daily-challenges/2026-08-04/) · raw HTML: `offline/daily-challenges/2026-08-04/index.html`_
