---
title: "Complex Numbers & Quadratic Equations Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/complex-numbers/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Complex Numbers and Quadratic Equations with step-by-step solutions covering modulus, argument, roots of complex quadratics, loci and circles in the Argand plane."
updated: "2026-07-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 8"
html: "../../../../offline/mathematics/complex-numbers/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Complex Numbers and Quadratic Equations with step-by-step solutions covering modulus, argument, roots of complex quadratics, loci and circles in the Argand plane.

A curated set of JEE Main 2026 previous-year questions on Complex Numbers and Quadratic Equations, each solved step by step so you can check both the final answer and the reasoning.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

Let $z$ be a complex number such that $|z + 2| = |z - 2|$ and $\arg\left(\dfrac{z + 3}{z - i}\right) = \dfrac{\pi}{4}$. Then $|z|^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$|z+2| = |z-2|$ means $z$ is equidistant from $-2$ and $2$, so $z$ lies on the perpendicular bisector — the imaginary axis. Write $z = iy$.</p><p>Then:</p>$$\frac{z+3}{z-i} = \frac{3 + iy}{iy - i} = \frac{3 + iy}{i(y-1)}$$<p>Multiply numerator and denominator by $-i$:</p>$$= \frac{-i(3+iy)}{y-1} = \frac{y - 3i}{y-1}$$<p>So the real part is $\dfrac{y}{y-1}$ and the imaginary part is $\dfrac{-3}{y-1}$.</p><p>For $\arg = \dfrac{\pi}{4}$ we need $\text{Im} = \text{Re}$ (both positive):</p>$$\frac{-3}{y-1} = \frac{y}{y-1} \;\Rightarrow\; y = -3$$<p>Check: real part $= \dfrac{-3}{-4} = 0.75 &gt; 0$, imaginary part $= \dfrac{-3}{-4} = 0.75 &gt; 0$, so $\arg = \dfrac{\pi}{4}$. ✓</p>$$|z|^2 = y^2 = (-3)^2 = 9$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 6 Apr, Shift 1

Let the set of all values of $k \in \mathbb{R}$ such that the equation $z(\bar{z} + 2 + i) + k(2 + 3i) = 0$, $z \in \mathbb{C}$, has at least one solution, be the interval $[\alpha, \beta]$. Then $9(\alpha + \beta)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $z = x + iy$, so $z\bar z = x^2 + y^2$. Expanding:</p>$$z\bar z + z(2+i) + k(2+3i) = 0$$<p></p>$$x^2 + y^2 + (x+iy)(2+i) + k(2+3i) = 0$$<p></p>$$x^2 + y^2 + (2x - y) + i(x + 2y) + 2k + 3ki = 0$$<p>Separate real and imaginary parts:</p>$$\text{Real:}\quad x^2 + y^2 + 2x - y + 2k = 0$$<p></p>$$\text{Imag:}\quad x + 2y + 3k = 0 \;\Rightarrow\; x = -2y - 3k$$<p>Substitute into the real equation:</p>$$(-2y-3k)^2 + y^2 + 2(-2y-3k) - y + 2k = 0$$<p></p>$$5y^2 + (12k - 5)y + (9k^2 - 4k) = 0$$<p>For a real solution $y$ to exist, the discriminant must be non-negative:</p>$$(12k-5)^2 - 20(9k^2 - 4k) \geq 0$$<p></p>$$-36k^2 - 40k + 25 \geq 0 \;\Rightarrow\; 36k^2 + 40k - 25 \leq 0$$<p>The endpoints $\alpha, \beta$ are the roots, so by Vieta:</p>$$\alpha + \beta = -\frac{40}{36} = -\frac{10}{9}$$

$$9(\alpha + \beta) = 9 \cdot \left(-\frac{10}{9}\right) = -10$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 2 Apr, Shift 1

Let $x$ and $y$ be real numbers such that $50\left(\dfrac{2x}{1+3i} - \dfrac{y}{1-2i}\right) = 31 + 17i$, $i = \sqrt{-1}$. Then the value of $10(x - 3y)$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Rationalize each term:</p>$$\frac{2x}{1+3i} = \frac{2x(1-3i)}{(1+3i)(1-3i)} = \frac{2x(1-3i)}{10} = \frac{x(1-3i)}{5}$$<p></p>$$\frac{y}{1-2i} = \frac{y(1+2i)}{(1-2i)(1+2i)} = \frac{y(1+2i)}{5}$$<p>So the bracket becomes $\dfrac{x(1-3i) - y(1+2i)}{5}$, and multiplying by $50$:</p>$$10\big[(x - y) + i(-3x - 2y)\big] = 31 + 17i$$<p>Equate real and imaginary parts:</p>$$10(x - y) = 31 \qquad 10(-3x - 2y) = 17$$<p>Solving: from the first $x - y = 3.1$; substituting gives $-50y = 110 \Rightarrow y = -2.2$, $x = 0.9$.</p>$$10(x - 3y) = 10\big(0.9 - 3(-2.2)\big) = 10(0.9 + 6.6) = 75$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 4 Apr, Shift 2

Let $S = \{z \in \mathbb{C} : z^2 + 4z + 16 = 0\}$. Then $\displaystyle\sum_{z \in S} |\, z + \sqrt{3}\, i\,|^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Solve the quadratic:</p>$$z = \frac{-4 \pm \sqrt{16 - 64}}{2} = \frac{-4 \pm \sqrt{-48}}{2} = -2 \pm 2\sqrt{3}\,i$$<p>So $S = \{-2 + 2\sqrt3\,i,\ -2 - 2\sqrt3\,i\}$.</p><p>For $z_1 = -2 + 2\sqrt3\,i$:</p>$$z_1 + \sqrt3\,i = -2 + 3\sqrt3\,i, \qquad |z_1 + \sqrt3\,i|^2 = 4 + 27 = 31$$<p>For $z_2 = -2 - 2\sqrt3\,i$:</p>$$z_2 + \sqrt3\,i = -2 - \sqrt3\,i, \qquad |z_2 + \sqrt3\,i|^2 = 4 + 3 = 7$$

$$\sum_{z \in S} |z + \sqrt3\,i|^2 = 31 + 7 = 38$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 4 Apr, Shift 2

If $\alpha = 1$ and $\beta = 1 + i\sqrt{2}$, where $i = \sqrt{-1}$ are two roots of the equation $x^3 + ax^2 + bx + c = 0,\ a, b, c \in \mathbb{R}$, then $\displaystyle\int_{-1}^{1}\left(x^3 + ax^2 + bx + c\right) dx$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Since $a, b, c$ are real, complex roots occur in conjugate pairs, so the third root is $1 - i\sqrt2$. The three roots are $1,\ 1 + i\sqrt2,\ 1 - i\sqrt2$.</p><p>By Vieta’s formulas:</p>$$-a = 1 + (1 + i\sqrt2) + (1 - i\sqrt2) = 3 \;\Rightarrow\; a = -3$$<p></p>$$b = (1)(1+i\sqrt2) + (1)(1-i\sqrt2) + (1+i\sqrt2)(1-i\sqrt2) = 2 + 3 = 5$$<p></p>$$-c = (1)(1+i\sqrt2)(1-i\sqrt2) = 3 \;\Rightarrow\; c = -3$$<p>So the polynomial is $x^3 - 3x^2 + 5x - 3$. Over the symmetric interval $[-1,1]$ the odd terms integrate to $0$:</p>$$\int_{-1}^{1}\left(x^3 + 5x\right)dx = 0$$<p></p>$$\int_{-1}^{1}(-3x^2)\,dx = -3\cdot\frac{2}{3} = -2, \qquad \int_{-1}^{1}(-3)\,dx = -6$$

$$\int_{-1}^{1}\left(x^3 - 3x^2 + 5x - 3\right)dx = -2 - 6 = -8$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 4 Apr, Shift 2

If the quadratic equation $(\lambda + 2)x^2 - 3\lambda x + 4\lambda = 0$, $\lambda \neq -2$, has two positive roots, then the number of possible integral values of $\lambda$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>For two positive real roots of $ax^2 + bx + c = 0$ (here $a = \lambda+2$, $b = -3\lambda$, $c = 4\lambda$) we need three conditions.</p><p><strong>1. Real roots</strong> — discriminant $\geq 0$:</p>$$9\lambda^2 - 16\lambda(\lambda+2) \geq 0 \;\Rightarrow\; -7\lambda^2 - 32\lambda \geq 0 \;\Rightarrow\; \lambda \in \left[-\tfrac{32}{7},\, 0\right]$$<p><strong>2. Sum of roots $&gt; 0$:</strong></p>$$\frac{3\lambda}{\lambda+2} &gt; 0 \;\Rightarrow\; \lambda &gt; 0 \text{ or } \lambda &lt; -2$$<p><strong>3. Product of roots $&gt; 0$:</strong></p>$$\frac{4\lambda}{\lambda+2} &gt; 0 \;\Rightarrow\; \lambda &gt; 0 \text{ or } \lambda &lt; -2$$<p>Intersecting all three (with $\lambda \neq -2$) gives:</p>$$\lambda \in \left[-\tfrac{32}{7},\, -2\right) \approx [-4.57,\, -2)$$<p>Integer values in this interval: $\lambda = -4$ and $\lambda = -3$.</p><p>Check $\lambda = -4$: roots are $2$ and $4$ (both positive). ✓
Check $\lambda = -3$: roots $\approx 1.63$ and $7.37$ (both positive). ✓</p><p>So there are <strong>2</strong> integral values.</p><p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let $\alpha, \beta$ be the roots of the equation $x^2 - 3x + r = 0$, and $\dfrac{\alpha}{2}, 2\beta$ be the roots of the equation $x^2 + 3x + r = 0$. If the roots of the equation $x^2 + 6x = m$ are $2\alpha + \beta + 2r$ and $\alpha - 2\beta - \dfrac{r}{2}$, then $m$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>From $x^2 - 3x + r = 0$: $\ \alpha + \beta = 3$ and $\alpha\beta = r$.</p><p>From $x^2 + 3x + r = 0$: $\ \dfrac{\alpha}{2} + 2\beta = -3$ (the product $\dfrac{\alpha}{2}\cdot 2\beta = \alpha\beta = r$ is automatically consistent).</p><p>Solve the two sum equations:</p>$$\alpha + \beta = 3, \qquad \frac{\alpha}{2} + 2\beta = -3$$<p>Substituting $\alpha = 3 - \beta$: $\ \dfrac{3-\beta}{2} + 2\beta = -3 \Rightarrow 3\beta = -9 \Rightarrow \beta = -3,\ \alpha = 6$.</p><p>Then $r = \alpha\beta = -18$.</p><p>Now the two given roots:</p>$$R_1 = 2\alpha + \beta + 2r = 12 - 3 - 36 = -27$$<p></p>$$R_2 = \alpha - 2\beta - \frac{r}{2} = 6 + 6 + 9 = 21$$<p>Check the sum against $x^2 + 6x - m = 0$: $R_1 + R_2 = -27 + 21 = -6 = -(\text{coefficient of }x)$. ✓</p><p>Product gives $-m$:</p>$$R_1 R_2 = (-27)(21) = -567 = -m \;\Rightarrow\; m = 567$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let the circles $C_1 : |z| = r$ and $C_2 : |z - 3 - 4i| = 5$, $z \in \mathbb{C}$, be such that $C_2$ lies within $C_1$. If $z_1$ moves on $C_1$, $z_2$ moves on $C_2$ and $\min|z_1 - z_2| = 2$, then $\max|z_1 - z_2|$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$C_1$ has centre $O = 0$ and radius $r$; $C_2$ has centre $P = 3 + 4i$ and radius $5$. The distance between centres is:</p>$$d = |3 + 4i| = \sqrt{9 + 16} = 5$$<p>Since $C_2$ lies inside $C_1$, the closest a point of $C_1$ can get to a point of $C_2$ is:</p>$$\min|z_1 - z_2| = r - (d + 5) = r - 10$$<p>Given this equals $2$:</p>$$r - 10 = 2 \;\Rightarrow\; r = 12$$<p>The farthest distance is:</p>$$\max|z_1 - z_2| = r + (d + 5) = 12 + 10 = 22$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let $S=\left\{z\in\mathbb{C}:z^2+\sqrt{6}\,iz-3=0\right\}$. Then $\displaystyle\sum_{z\in S}z^8$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Solve the quadratic:</p>$$z = \frac{-\sqrt6\,i \pm \sqrt{(\sqrt6\,i)^2 - 4(-3)}}{2} = \frac{-\sqrt6\,i \pm \sqrt{-6 + 12}}{2} = \frac{-\sqrt6\,i \pm \sqrt6}{2}$$<p>So the two roots are $z = \dfrac{\pm\sqrt6 - \sqrt6\,i}{2}$. Compute the modulus and square of each:</p>$$|z|^2 = \frac{6 + 6}{4} = 3$$<p>For $z_1 = \dfrac{\sqrt6 - \sqrt6\,i}{2}$:</p>$$z_1^2 = \frac{6(1 - i)^2}{4} = \frac{6(-2i)}{4} = -3i$$<p>For $z_2 = \dfrac{-\sqrt6 - \sqrt6\,i}{2}$:</p>$$z_2^2 = \frac{6(1 + i)^2}{4} = \frac{6(2i)}{4} = 3i$$<p>Now raise to the 8th power via $z^8 = (z^2)^4$:</p>$$z_1^8 = (-3i)^4 = 3^4 \cdot i^4 = 81, \qquad z_2^8 = (3i)^4 = 81$$

$$\sum_{z \in S} z^8 = 81 + 81 = 162$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Let $a, b \in \mathbb{C}$. Let $\alpha, \beta$ be the roots of the equation $x^2 + ax + b = 0$. If $\beta - \alpha = \sqrt{11}$ and $\beta^2 - \alpha^2 = 3i\sqrt{11}$, then $(\beta^3 - \alpha^3)^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use $\beta^2 - \alpha^2 = (\beta - \alpha)(\beta + \alpha)$:</p>$$3i\sqrt{11} = \sqrt{11}\,(\alpha + \beta) \;\Rightarrow\; \alpha + \beta = 3i$$<p>Find $\alpha\beta$ from $(\beta - \alpha)^2 = (\alpha + \beta)^2 - 4\alpha\beta$:</p>$$11 = (3i)^2 - 4\alpha\beta = -9 - 4\alpha\beta \;\Rightarrow\; \alpha\beta = -5$$<p>Now $\beta^3 - \alpha^3 = (\beta - \alpha)(\alpha^2 + \alpha\beta + \beta^2)$, where</p>$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = -9 + 10 = 1$$<p></p>$$\alpha^2 + \alpha\beta + \beta^2 = 1 + (-5) = -4$$<p>Therefore:</p>$$\beta^3 - \alpha^3 = \sqrt{11}\,(-4) = -4\sqrt{11}$$<p></p>$$(\beta^3 - \alpha^3)^2 = 16 \cdot 11 = 176$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $z_1, z_2 \in \mathbb{C}$ be the distinct solutions of the equation $z^2 + 4z - (1 + 12i) = 0$. Then $|z_1|^2 + |z_2|^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Solve for the roots:</p>$$z = \frac{-4 \pm \sqrt{16 + 4(1 + 12i)}}{2} = \frac{-4 \pm \sqrt{20 + 48i}}{2}$$<p>Find $\sqrt{20 + 48i} = p + qi$: then $p^2 - q^2 = 20$ and $2pq = 48$. Solving, $p = 6, q = 4$, so $\sqrt{20 + 48i} = 6 + 4i$.</p>$$z = \frac{-4 \pm (6 + 4i)}{2} \;\Rightarrow\; z_1 = 1 + 2i,\quad z_2 = -5 - 2i$$

$$|z_1|^2 = 1 + 4 = 5, \qquad |z_2|^2 = 25 + 4 = 29$$

$$|z_1|^2 + |z_2|^2 = 5 + 29 = 34$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 8 Apr, Shift 2

The number of values of $z \in \mathbb{C}$, satisfying the equations $|z - (4 + 8i)| = \sqrt{10}$ and $|z - (3 + 5i)| + |z - (5 + 11i)| = 4\sqrt{5}$, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The first equation is a <strong>circle</strong> with centre $C = 4 + 8i$ and radius $R = \sqrt{10}$.</p><p>The second equation is an <strong>ellipse</strong> with foci $F_1 = 3 + 5i$ and $F_2 = 5 + 11i$, and constant sum $2a = 4\sqrt5 \Rightarrow a = 2\sqrt5$ (so $a^2 = 20$).</p><p>Distance between foci: $|F_1 - F_2| = |{-2} - 6i| = \sqrt{4 + 36} = \sqrt{40} = 2\sqrt{10}$, so $c = \sqrt{10}$ and $c^2 = 10$. Since $2a = 4\sqrt5 &gt; 2c = 2\sqrt{10}$, this is a valid ellipse.</p><p>Semi-minor axis: $b^2 = a^2 - c^2 = 20 - 10 = 10$, so $b = \sqrt{10}$.</p><p>The ellipse centre is the midpoint of the foci: $\dfrac{(3+5i)+(5+11i)}{2} = 4 + 8i = C$. <strong>The circle and ellipse share the same centre.</strong></p><p>Key observation: the semi-minor axis $b = \sqrt{10}$ equals the circle radius $R = \sqrt{10}$, while the semi-major axis $a = 2\sqrt5 &gt; R$. So the circle lies inside the ellipse everywhere except at the two ends of the minor axis, where they touch.</p><p>The two common points are $z = 1 + 9i$ and $z = 7 + 7i$ (both satisfy $|z - (4+8i)| = \sqrt{10}$ and the ellipse sum $= 4\sqrt5$).</p>$$\boxed{\text{Number of values} = 2}$$<p><strong>Answer:</strong> B</p></div></details>

From TestGuru · our mock-test platform

## You've read Complex Numbers & Quadratic Equations Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=complex-numbers&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcomplex-numbers%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/mathematics/complex-numbers/previous-year-questions/](https://jeenotes.in/mathematics/complex-numbers/previous-year-questions/) · raw HTML: `offline/mathematics/complex-numbers/previous-year-questions/index.html`_
