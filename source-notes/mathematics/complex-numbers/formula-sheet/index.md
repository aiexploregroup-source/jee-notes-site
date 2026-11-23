---
title: "Complex Numbers and Quadratic Equations Formula Sheet"
source: "https://jeenotes.in/mathematics/complex-numbers/formula-sheet/"
description: "All key complex numbers and quadratic equations formulas for JEE — powers of i, modulus, argument, polar form, De Moivre, roots of unity, discriminant. JEE Main & Advanced quick revision."
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 8"
html: "../../../../offline/mathematics/complex-numbers/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key complex numbers and quadratic equations formulas for JEE — powers of i, modulus, argument, polar form, De Moivre, roots of unity, discriminant. JEE Main & Advanced quick revision.

Every must-know formula and result from the Complex Numbers and Quadratic Equations chapter, organised for last-minute revision. Scan top to bottom the night before the exam.

> **★ Key point · The two formulas that unlock everything**
>
> For powers of $i$: divide the exponent by 4 and use the remainder. For $\omega$ problems: write down $\omega^3 = 1$ and $1 + \omega + \omega^2 = 0$ first.

## The Imaginary Unit and Powers of i

$$\boxed{i = \sqrt{-1} \quad \Longleftrightarrow \quad i^2 = -1}$$

Powers of $i$ cycle every 4:

$$\boxed{i^{4k} = 1, \quad i^{4k+1} = i, \quad i^{4k+2} = -1, \quad i^{4k+3} = -i}$$

| Power | Value |
| --- | --- |
| $i^0$ | $1$ |
| $i^1$ | $i$ |
| $i^2$ | $-1$ |
| $i^3$ | $-i$ |
| $i^4$ | $1$ |

The pattern repeats: $1, i, -1, -i, 1, i, \dots$ To find $i^n$, divide $n$ by 4 and read the remainder $r \in \{0,1,2,3\}$.

> **⚠ Trap · Square-root trap**
>
> $\sqrt{-a}\cdot\sqrt{-b} \neq \sqrt{ab}$ when $a, b > 0$. Example: $\sqrt{-1}\cdot\sqrt{-1} = i\cdot i = -1$, but $\sqrt{(-1)(-1)} = 1$.

## Complex Numbers: Form and Algebra

A complex number: $z = a + ib$, with $a = \text{Re}(z)$, $b = \text{Im}(z)$, and $a, b \in \mathbb{R}$.

$$\mathbb{C} = \{a + ib : a, b \in \mathbb{R}\}$$

Equality:

$$\boxed{a + ib = c + id \iff a = c \text{ and } b = d}$$

| Operation | Formula |
| --- | --- |
| Addition | $(a+ib) + (c+id) = (a+c) + i(b+d)$ |
| Subtraction | $(a+ib) - (c+id) = (a-c) + i(b-d)$ |
| Multiplication | $(a+ib)(c+id) = (ac-bd) + i(ad+bc)$ |
| Division | $\dfrac{a+ib}{c+id} = \dfrac{ac+bd}{c^2+d^2} + i\,\dfrac{bc-ad}{c^2+d^2}$ |

Key special product (always real):

$$\boxed{(a + ib)(a - ib) = a^2 + b^2}$$

Standard identities also hold for complex numbers:

| Identity | Formula |
| --- | --- |
| $(z_1 + z_2)^2$ | $z_1^2 + 2z_1z_2 + z_2^2$ |
| $(z_1 - z_2)^2$ | $z_1^2 - 2z_1z_2 + z_2^2$ |
| $z_1^2 - z_2^2$ | $(z_1 + z_2)(z_1 - z_2)$ |
| $(z_1 + z_2)^3$ | $z_1^3 + 3z_1^2z_2 + 3z_1z_2^2 + z_2^3$ |

> **⚠ Trap · Imaginary part is a real number**
>
> The imaginary part of $3 + 4i$ is $4$, not $4i$ — it is the coefficient of $i$.

## Conjugate

$$\boxed{\bar{z} = a - ib}$$

Geometrically, $\bar{z}$ is the reflection of $z$ across the real axis: $(a,b) \to (a,-b)$.

| Property | Result |
| --- | --- |
| Addition | $\overline{z_1 + z_2} = \bar{z_1} + \bar{z_2}$ |
| Subtraction | $\overline{z_1 - z_2} = \bar{z_1} - \bar{z_2}$ |
| Product | $\overline{z_1 z_2} = \bar{z_1}\,\bar{z_2}$ |
| Quotient | $\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\bar{z_1}}{\bar{z_2}}$ |
| Modulus link | $z\cdot\bar{z} = a^2 + b^2 = \|z\|^2$ |
| Real part | $z + \bar{z} = 2a = 2\text{Re}(z)$ |
| Imaginary part | $z - \bar{z} = 2ib = 2i\,\text{Im}(z)$ |
| Double conjugate | $\overline{\bar{z}} = z$ |
| Real test | $z = \bar{z} \iff z \text{ is real}$ |

## Modulus

$$\boxed{|z| = \sqrt{a^2 + b^2}}$$

This is the distance from the origin to $z$ on the Argand plane.

| Property | Result |
| --- | --- |
| Non-negative | $\|z\| \ge 0$, and $\|z\| = 0 \iff z = 0$ |
| Conjugate | $\|\bar{z}\| = \|z\|$ |
| Square | $z\cdot\bar{z} = \|z\|^2$ |
| Product | $\|z_1 z_2\| = \|z_1\|\,\|z_2\|$ |
| Quotient | $\left\|\frac{z_1}{z_2}\right\| = \frac{\|z_1\|}{\|z_2\|}$ |
| Power | $\|z^n\| = \|z\|^n$ |

Distance between two complex numbers:

$$\boxed{|z_1 - z_2| = \sqrt{(a_1 - a_2)^2 + (b_1 - b_2)^2}}$$

> **★ Key point · Pythagorean triples to memorise**
>
> $|3+4i| = 5$, $\;|5+12i| = 13$, $\;|8+15i| = 17$, $\;|7+24i| = 25$.

### Triangle Inequalities

$$\boxed{|z_1 + z_2| \le |z_1| + |z_2|}$$

$$|z_1 - z_2| \ge \big||z_1| - |z_2|\big|$$

$$|z_1 + z_2| \ge \big||z_1| - |z_2|\big|$$

Equality in $|z_1 + z_2| = |z_1| + |z_2|$ holds when $z_1$ and $z_2$ have the **same argument** (same direction).

## Argument and Quadrants

$$\tan\theta = \frac{b}{a}, \qquad \boxed{-\pi < \arg(z) \le \pi}\ \text{(principal value)}$$

General argument: $\arg(z) = \theta + 2n\pi,\ n \in \mathbb{Z}$.

The naive $\tan^{-1}(b/a)$ is wrong outside Quadrant I — use the quadrant-aware table:

| Position | Condition | Argument $\theta$ |
| --- | --- | --- |
| Quadrant I | $a>0, b>0$ | $\tan^{-1}\frac{b}{a}$ |
| Quadrant II | $a<0, b>0$ | $\pi - \tan^{-1}\frac{\|b\|}{\|a\|}$ |
| Quadrant III | $a<0, b<0$ | $-\pi + \tan^{-1}\frac{\|b\|}{\|a\|}$ |
| Quadrant IV | $a>0, b<0$ | $-\tan^{-1}\frac{\|b\|}{\|a\|}$ |
| +ve real axis | $b=0, a>0$ | $0$ |
| -ve real axis | $b=0, a<0$ | $\pi$ (or $-\pi$) |
| +ve imag axis | $a=0, b>0$ | $\frac{\pi}{2}$ |
| -ve imag axis | $a=0, b<0$ | $-\frac{\pi}{2}$ |

### Properties of Argument

$$\boxed{\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)}$$

$$\boxed{\arg\!\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2)}$$

$$\arg(\bar{z}) = -\arg(z), \qquad \arg(-z) = \arg(z) \pm \pi, \qquad \arg(z^n) = n\,\arg(z)$$

All argument identities hold up to multiples of $2\pi$; adjust the result back into $(-\pi, \pi]$.

## Polar and Exponential Form

$$\boxed{z = r(\cos\theta + i\sin\theta) = re^{i\theta}}$$

where $r = |z|$ and $\theta = \arg(z)$. Conversions:

$$a = r\cos\theta, \qquad b = r\sin\theta$$

Euler’s formula and identity:

$$\boxed{e^{i\theta} = \cos\theta + i\sin\theta} \qquad \boxed{e^{i\pi} + 1 = 0}$$

### Multiplication and Division in Polar Form

For $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$:

$$\boxed{z_1 z_2 = r_1 r_2\big[\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\big]}$$

$$\boxed{\frac{z_1}{z_2} = \frac{r_1}{r_2}\big[\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)\big]}$$

Rule: multiply/divide moduli, add/subtract arguments.

> **★ Key point · Pick the right form**
>
> Use rectangular $a + ib$ for addition and subtraction; switch to polar $re^{i\theta}$ for multiplication, division, powers, and roots.

## De Moivre’s Theorem

$$\boxed{(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)}$$

General form and exponential form:

$$\boxed{z^n = r^n(\cos n\theta + i\sin n\theta)} \qquad (re^{i\theta})^n = r^n e^{in\theta}$$

So $|z^n| = |z|^n$ and $\arg(z^n) = n\theta$.

> **★ Key point · Common powers worth memorising**
>
> $(1+i)^2 = 2i$, $\;(1+i)^4 = -4$, $\;(1+i)^8 = 16$, $\;(\sqrt{3}+i)^6 = -64$.

### nth Roots of a Complex Number

If $w = r(\cos\alpha + i\sin\alpha)$, the $n$ distinct $n$th roots of $w$ are:

$$\boxed{z_k = r^{1/n}\left[\cos\!\left(\frac{\alpha + 2k\pi}{n}\right) + i\sin\!\left(\frac{\alpha + 2k\pi}{n}\right)\right]}, \quad k = 0, 1, \dots, n-1$$

- Modulus of each root is $r^{1/n}$ (the $n$th root of $r$, **not** $r/n$).
- The $n$ roots are equally spaced by $\frac{2\pi}{n}$ on a circle of radius $r^{1/n}$, forming a regular $n$-gon.

## Roots of Unity

The $n$th roots of unity ($z^n = 1$):

$$\boxed{\omega_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n} = e^{2\pi i k/n}}, \quad k = 0, 1, \dots, n-1$$

| Property | Result |
| --- | --- |
| Sum | $1 + \omega + \omega^2 + \dots + \omega^{n-1} = 0$ |
| Product | $1\cdot\omega\cdot\omega^2\cdots\omega^{n-1} = (-1)^{n-1}$ |
| Structure | Form a GP (first term $1$, ratio $\omega$); vertices of a regular $n$-gon on the unit circle |

For a non-real $n$th root $\alpha$ (since $z^n - 1 = (z-1)(z^{n-1} + \dots + z + 1)$):

$$\alpha^{n-1} + \alpha^{n-2} + \dots + \alpha + 1 = 0$$

For a non-real **5th** root: $\alpha^4 + \alpha^3 + \alpha^2 + \alpha + 1 = 0$, hence $\alpha + \alpha^2 + \alpha^3 + \alpha^4 = -1$.

## Cube Roots of Unity ($\omega$)

$$\boxed{1, \quad \omega = \frac{-1 + i\sqrt{3}}{2}, \quad \omega^2 = \frac{-1 - i\sqrt{3}}{2}}$$

In exponential form $\omega = e^{2\pi i/3}$; the three roots sit at $0$, $\frac{2\pi}{3}$, $\frac{4\pi}{3}$ on the unit circle (equilateral triangle).

| Property | Formula | Remember |
| --- | --- | --- |
| Definition | $\omega^3 = 1$ | Cube gives 1 |
| Sum | $1 + \omega + \omega^2 = 0$ | Trinity makes zero |
| Shortcut | $\omega + \omega^2 = -1$ | From the sum |
| Conjugate | $\omega^2 = \bar{\omega}$ | Conjugate pair |
| Product | $\omega\cdot\omega^2 = 1$ | Reciprocals |
| Power cycle | $\omega^{3k} = 1,\ \omega^{3k+1} = \omega,\ \omega^{3k+2} = \omega^2$ | Period 3 |
| Product 1 | $(1 - \omega)(1 - \omega^2) = 3$ | High-yield |
| Product 2 | $(1 + \omega)(1 + \omega^2) = 1$ | High-yield |

Sum of $n$th powers:

$$1^n + \omega^n + (\omega^2)^n = \begin{cases} 3 & n \equiv 0 \pmod 3 \\ 0 & \text{otherwise} \end{cases}$$

Useful factorisations via $\omega$:

$$x^3 + 1 = (x+1)(x+\omega)(x+\omega^2)$$

$$a^3 + b^3 + c^3 - 3abc = (a+b+c)(a + b\omega + c\omega^2)(a + b\omega^2 + c\omega)$$

> **⚠ Trap · Most-tested omega trap**
>
> $1 + \omega + \omega^2 = 0$ — not $1$ and not $3$. Always reduce powers with $\omega^3 = 1$ (e.g. $\omega^{25} = \omega$, not $\omega^5$).

## Geometric Loci on the Argand Plane

| Equation | Geometric meaning |
| --- | --- |
| $z = a + ib$ | Point $(a, b)$ |
| $\bar{z}$ | Reflection of $z$ across the real axis |
| $-z$ | Reflection of $z$ through the origin ($180^\circ$ rotation) |
| $\|z - z_0\| = r$ | Circle, centre $z_0$, radius $r$ |
| $\|z - z_0\| < r$ | Interior of that circle |
| $\|z - z_0\| > r$ | Exterior of that circle |
| $\|z - z_1\| = \|z - z_2\|$ | Perpendicular bisector of segment $z_1 z_2$ |
| $\|z - z_1\| + \|z - z_2\| = $ const | Ellipse with foci $z_1, z_2$ |

Addition of complex numbers obeys the **parallelogram law** (vector addition); $z_1 - z_2$ is the vector from $z_2$ to $z_1$.

> **★ Key point · Locus problems**
>
> Translate $|z - z_0|$ into a distance and the equation usually collapses to a circle, line, or ellipse. Sketch it.

## Quadratic Equations

For $ax^2 + bx + c = 0$ ($a \neq 0$):

$$\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-b \pm \sqrt{D}}{2a}}$$

$$\boxed{D = b^2 - 4ac \quad (\text{discriminant})}$$

When $D < 0$: $\;x = \dfrac{-b \pm i\sqrt{|D|}}{2a}$ (complex conjugate roots).

### Nature of Roots

| Discriminant | Nature of roots |
| --- | --- |
| $D > 0$ | Two distinct real roots |
| $D = 0$ | Two equal real roots $\left(x = -\frac{b}{2a}\right)$ |
| $D < 0$ | Two complex conjugate roots |

For rational coefficients ($a, b, c \in \mathbb{Q}$):

| Discriminant | Nature of roots |
| --- | --- |
| $D > 0$, perfect square | Distinct rational roots |
| $D > 0$, not a perfect square | Irrational conjugate-surd roots |
| $D = 0$ | Equal rational roots |
| $D < 0$ | Complex conjugate roots |

### Sum, Product and Formation (Vieta)

$$\boxed{\alpha + \beta = -\frac{b}{a}} \qquad \boxed{\alpha\beta = \frac{c}{a}}$$

For monic $x^2 + px + q = 0$: $\;\alpha + \beta = -p,\ \alpha\beta = q$.

Equation from given roots:

$$\boxed{x^2 - (\alpha + \beta)x + \alpha\beta = 0} \quad\Longleftrightarrow\quad (x - \alpha)(x - \beta) = 0$$

Symmetric-function shortcuts:

$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$$

$$\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$$

### Complex Conjugate Roots (real coefficients)

If $\alpha = p + iq$ is a root, then $\bar{\alpha} = p - iq$ is also a root, and:

- $\alpha + \bar{\alpha} = 2p$ (real)
- $\alpha\bar{\alpha} = p^2 + q^2 = |\alpha|^2$ (real, positive)
- $|\alpha| = |\bar{\alpha}|$ and $\arg(\alpha) = -\arg(\bar{\alpha})$

> **⚠ Trap · Conjugate pairs need real coefficients**
>
> The “complex roots come in conjugate pairs” rule holds **only when the coefficients are real**. With complex coefficients (e.g. $x^2 - (1+i)x + i = 0$) the roots need not be conjugates — use sum/product instead.

## Special Result Worth Remembering

$x^2 + x + 1 = 0$ has roots $\omega$ and $\omega^2$ (the non-real cube roots of unity), and $D = 1 - 4 = -3 < 0$.

## Final Speed Drill

> **★ Key point · Night-before checklist**
>
> 1. Powers of $i$: remainder on division by 4.

> 2. Division: multiply by conjugate of the denominator.

> 3. Multiply/divide/power/root: convert to polar $re^{i\theta}$.

> 4. $\omega$ problems: $\omega^3 = 1$ and $1 + \omega + \omega^2 = 0$.

> 5. Quadratics: $D = b^2 - 4ac$ for nature; Vieta for sum/product without solving.

> 6. $|z - z_0| = r$ is a circle; $|z - z_1| = |z - z_2|$ is a perpendicular bisector.

## Related Topics

- [Complex Numbers Basics](../complex-basics/index.md)
- [Argand Diagram](../argand-diagram/index.md)
- [Modulus, Argument and Polar Form](../modulus-argument/index.md)
- [De Moivre’s Theorem](../de-moivres-theorem/index.md)
- [Cube Roots of Unity](../cube-roots-unity/index.md)
- [Quadratic Equations with Complex Roots](../quadratic-equations/index.md)

From TestGuru · our mock-test platform

## You've read Complex Numbers and Quadratic Equations Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=complex-numbers&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcomplex-numbers%2Fformula-sheet%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/complex-numbers/formula-sheet/",this.page.identifier="/mathematics/complex-numbers/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/mathematics/complex-numbers/formula-sheet/](https://jeenotes.in/mathematics/complex-numbers/formula-sheet/) · raw HTML: `offline/mathematics/complex-numbers/formula-sheet/index.html`_
