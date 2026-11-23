---
title: "Trigonometry Formula Sheet"
source: "https://jeenotes.in/mathematics/trigonometry/formula-sheet/"
description: "All key trigonometry formulas: identities, compound and multiple angles, general solutions, inverse trig, and triangle properties for JEE Main & Advanced quick revision."
updated: "2026-11-02"
reading_time: "7 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 6"
html: "../../../../offline/mathematics/trigonometry/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key trigonometry formulas: identities, compound and multiple angles, general solutions, inverse trig, and triangle properties for JEE Main & Advanced quick revision.

Every formula you need for JEE Trigonometry on one page: ratios, identities, compound/multiple-angle formulas, transformation formulas, general solutions, inverse trig properties, and triangle rules. Use this as your last-minute revision sheet.

## Basic Ratios & Standard Values

In a right triangle:

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

Reciprocal ratios:

$$\csc\theta = \frac{1}{\sin\theta}, \quad \sec\theta = \frac{1}{\cos\theta}, \quad \cot\theta = \frac{1}{\tan\theta}$$

Quotient identities:

$$\tan\theta = \frac{\sin\theta}{\cos\theta}, \quad \cot\theta = \frac{\cos\theta}{\sin\theta}$$

### Standard Angle Values

| Angle | 0° | 30° | 45° | 60° | 90° |
| --- | --- | --- | --- | --- | --- |
| $\sin$ | 0 | 1/2 | $1/\sqrt{2}$ | $\sqrt{3}/2$ | 1 |
| $\cos$ | 1 | $\sqrt{3}/2$ | $1/\sqrt{2}$ | 1/2 | 0 |
| $\tan$ | 0 | $1/\sqrt{3}$ | 1 | $\sqrt{3}$ | $\infty$ |

> **★ Key point · Sign Convention — ASTC**
>
> **“All Students Take Calculus”** (or “Add Sugar To Coffee”):
>
> - **Q1 (0°–90°):** All positive

> - **Q2 (90°–180°):** Sine (and cosec) positive

> - **Q3 (180°–270°):** Tan (and cot) positive

> - **Q4 (270°–360°):** Cos (and sec) positive

## Fundamental (Pythagorean) Identities

$$\boxed{\sin^2\theta + \cos^2\theta = 1}$$

$$\boxed{1 + \tan^2\theta = \sec^2\theta}$$

$$\boxed{1 + \cot^2\theta = \csc^2\theta}$$

| Identity | When to Use |
| --- | --- |
| $\sin^2\theta + \cos^2\theta = 1$ | Find one ratio from another |
| $1 + \tan^2\theta = \sec^2\theta$ | Tan–Sec conversions |
| $1 + \cot^2\theta = \csc^2\theta$ | Cot–Cosec conversions |

## Compound (Sum & Difference) Formulas

$$\boxed{\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B}$$

$$\boxed{\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B}$$

$$\boxed{\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}}$$

> **★ Key point · Memory Trick**
>
> **“Sine Changes, Cosine Doesn’t”** — sin keeps the same sign across the expansion; cos flips its sign (the $\mp$). In the tan denominator the sign is **opposite** to the numerator.

## Double Angle Formulas

$$\boxed{\sin 2\theta = 2\sin\theta\cos\theta}$$

$$\boxed{\cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta}$$

$$\boxed{\tan 2\theta = \frac{2\tan\theta}{1 - \tan^2\theta}}$$

> **★ Key point · JEE Shortcut for cos 2θ**
>
> If **sin θ** is given, use $1 - 2\sin^2\theta$. If **cos θ** is given, use $2\cos^2\theta - 1$. Both forms also reduce powers in integration of $\sin^2 x$ / $\cos^2 x$.

## Triple Angle Formulas

$$\boxed{\sin 3\theta = 3\sin\theta - 4\sin^3\theta}$$

$$\boxed{\cos 3\theta = 4\cos^3\theta - 3\cos\theta}$$

$$\boxed{\tan 3\theta = \frac{3\tan\theta - \tan^3\theta}{1 - 3\tan^2\theta}}$$

> **★ Key point · The 3–4 Pattern**
>
> Sine starts with **3** (linear), cosine starts with **4** (cubic) — the coefficients are flipped between them.

## Half Angle Formulas

$$\sin^2\frac{\theta}{2} = \frac{1 - \cos\theta}{2}, \qquad \cos^2\frac{\theta}{2} = \frac{1 + \cos\theta}{2}$$

$$\boxed{\sin\frac{\theta}{2} = \pm\sqrt{\frac{1-\cos\theta}{2}}, \quad \cos\frac{\theta}{2} = \pm\sqrt{\frac{1+\cos\theta}{2}}}$$

$$\boxed{\tan\frac{\theta}{2} = \frac{1 - \cos\theta}{\sin\theta} = \frac{\sin\theta}{1 + \cos\theta}}$$

> **⚠ Trap · Sign Trap**
>
> The $\pm$ on $\sin\tfrac{\theta}{2}$ and $\cos\tfrac{\theta}{2}$ is decided by the **quadrant of $\theta/2$** — never drop it.

## Transformation Formulas

### Product → Sum

$$2\sin A \cos B = \sin(A+B) + \sin(A-B)$$

$$2\cos A \sin B = \sin(A+B) - \sin(A-B)$$

$$2\cos A \cos B = \cos(A+B) + \cos(A-B)$$

$$2\sin A \sin B = \cos(A-B) - \cos(A+B)$$

### Sum → Product

$$\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$$

$$\sin C - \sin D = 2\cos\frac{C+D}{2}\sin\frac{C-D}{2}$$

$$\cos C + \cos D = 2\cos\frac{C+D}{2}\cos\frac{C-D}{2}$$

$$\cos C - \cos D = -2\sin\frac{C+D}{2}\sin\frac{C-D}{2}$$

> **★ Key point · High-Yield Reminder**
>
> $\sin A \sin B$ is the rebel: it equals $\tfrac{1}{2}[\cos(A-B) - \cos(A+B)]$ with **reversed signs**. Product→Sum converts hard-to-integrate products into easy sums.

## Periodicity of Trig Functions

| Function | Period |
| --- | --- |
| $\sin\theta,\ \cos\theta$ | $2\pi$ (360°) |
| $\sec\theta,\ \csc\theta$ | $2\pi$ (360°) |
| $\tan\theta,\ \cot\theta$ | $\pi$ (180°) |

## General Solutions of Trig Equations

The Big 6 ($n \in \mathbb{Z}$, $\alpha$ = principal value):

$$\boxed{
\begin{align}
\sin\theta = \sin\alpha &\implies \theta = n\pi + (-1)^n\alpha \\
\cos\theta = \cos\alpha &\implies \theta = 2n\pi \pm \alpha \\
\tan\theta = \tan\alpha &\implies \theta = n\pi + \alpha \\
\sin\theta = 0 &\implies \theta = n\pi \\
\cos\theta = 0 &\implies \theta = (2n+1)\tfrac{\pi}{2} \\
\tan\theta = 0 &\implies \theta = n\pi
\end{align}
}$$

### Solutions for ±1

$$\boxed{
\begin{align}
\sin\theta = 1 &\implies \theta = (4n+1)\tfrac{\pi}{2} \\
\sin\theta = -1 &\implies \theta = (4n-1)\tfrac{\pi}{2} \\
\cos\theta = 1 &\implies \theta = 2n\pi \\
\cos\theta = -1 &\implies \theta = (2n+1)\pi \\
\tan\theta = 1 &\implies \theta = n\pi + \tfrac{\pi}{4} \\
\tan\theta = -1 &\implies \theta = n\pi - \tfrac{\pi}{4}
\end{align}
}$$

| Equation | General Solution |
| --- | --- |
| $\sin\theta = \sin\alpha$ | $\theta = n\pi + (-1)^n\alpha$ |
| $\cos\theta = \cos\alpha$ | $\theta = 2n\pi \pm \alpha$ |
| $\tan\theta = \tan\alpha$ | $\theta = n\pi + \alpha$ |
| $a\sin\theta + b\cos\theta = c$ | Auxiliary angle: divide by $\sqrt{a^2+b^2}$ |
| Quadratic in $\sin\theta$ | Substitute $t = \sin\theta$, solve, then find $\theta$ |

### Auxiliary Angle Method

For $a\sin\theta + b\cos\theta = c$:

$$\boxed{a\sin\theta + b\cos\theta = \sqrt{a^2 + b^2}\,\sin(\theta + \phi)}, \qquad \tan\phi = \frac{b}{a}$$

> **⚠ Trap · Equation-Solving Traps**
>
> - **Factor, don’t divide** when a trig function appears on both sides — dividing loses solutions (e.g. $\sin\theta = 0$).

> - **Squaring** introduces extraneous roots — always verify by substitution.

> - After the general solution, plug in small $n$ to keep only values inside a restricted domain.

## Inverse Trigonometric Functions

### Domain & Range (Principal Values)

$$\boxed{
\begin{array}{|c|c|c|}
\hline
\textbf{Function} & \textbf{Domain} & \textbf{Range} \\
\hline
\sin^{-1} x & [-1, 1] & [-\tfrac{\pi}{2}, \tfrac{\pi}{2}] \\
\cos^{-1} x & [-1, 1] & [0, \pi] \\
\tan^{-1} x & \mathbb{R} & (-\tfrac{\pi}{2}, \tfrac{\pi}{2}) \\
\cot^{-1} x & \mathbb{R} & (0, \pi) \\
\sec^{-1} x & (-\infty,-1]\cup[1,\infty) & [0,\pi]-\{\tfrac{\pi}{2}\} \\
\csc^{-1} x & (-\infty,-1]\cup[1,\infty) & [-\tfrac{\pi}{2},\tfrac{\pi}{2}]-\{0\} \\
\hline
\end{array}
}$$

### Complementary Relations

$$\boxed{\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}}$$

$$\boxed{\tan^{-1}x + \cot^{-1}x = \frac{\pi}{2}}$$

$$\boxed{\sec^{-1}x + \csc^{-1}x = \frac{\pi}{2}}$$

### Negative Argument

$$\sin^{-1}(-x) = -\sin^{-1}x, \quad \tan^{-1}(-x) = -\tan^{-1}x, \quad \csc^{-1}(-x) = -\csc^{-1}x$$

$$\cos^{-1}(-x) = \pi - \cos^{-1}x, \quad \sec^{-1}(-x) = \pi - \sec^{-1}x, \quad \cot^{-1}(-x) = \pi - \cot^{-1}x$$

> **★ Key point · Odd vs π-shift**
>
> **Sin, Tan, Cosec are odd** — $f(-x) = -f(x)$. **Cos, Sec, Cot use the π-shift** — $f(-x) = \pi - f(x)$.

### Addition Formulas

$$\boxed{\tan^{-1}x + \tan^{-1}y = \begin{cases} \tan^{-1}\dfrac{x+y}{1-xy} & xy < 1 \\[4pt] \pi + \tan^{-1}\dfrac{x+y}{1-xy} & xy > 1,\ x,y > 0 \\[4pt] -\pi + \tan^{-1}\dfrac{x+y}{1-xy} & xy > 1,\ x,y < 0 \end{cases}}$$

$$\tan^{-1}x - \tan^{-1}y = \tan^{-1}\frac{x-y}{1+xy}$$

### Double-Argument Formulas

$$2\sin^{-1}x = \sin^{-1}\!\left(2x\sqrt{1-x^2}\right), \quad |x| \le \tfrac{1}{\sqrt{2}}$$

$$2\cos^{-1}x = \cos^{-1}\!\left(2x^2 - 1\right), \quad 0 \le x \le 1$$

$$2\tan^{-1}x = \begin{cases} \tan^{-1}\dfrac{2x}{1-x^2} & |x| < 1 \\[4pt] \pi + \tan^{-1}\dfrac{2x}{1-x^2} & x > 1 \\[4pt] -\pi + \tan^{-1}\dfrac{2x}{1-x^2} & x < -1 \end{cases}$$

### Conversion Formulas

$$\sin^{-1}x = \cos^{-1}\sqrt{1-x^2} = \tan^{-1}\frac{x}{\sqrt{1-x^2}} = \cot^{-1}\frac{\sqrt{1-x^2}}{x}$$

$$\tan^{-1}x = \sin^{-1}\frac{x}{\sqrt{1+x^2}} = \cos^{-1}\frac{1}{\sqrt{1+x^2}} \ \ (x \ge 0)$$

> **⚠ Trap · The sin⁻¹(sin θ) Trap**
>
> $\sin^{-1}(\sin\theta) = \theta$ **only** if $\theta \in [-\tfrac{\pi}{2}, \tfrac{\pi}{2}]$. Otherwise reduce the argument to the principal range first. Likewise always check the $xy$ condition before applying the $\tan^{-1}$ addition formula.

### Calculus Quick Reference

Derivatives:

$$\frac{d}{dx}\sin^{-1}x = \frac{1}{\sqrt{1-x^2}}, \quad \frac{d}{dx}\cos^{-1}x = \frac{-1}{\sqrt{1-x^2}}, \quad \frac{d}{dx}\tan^{-1}x = \frac{1}{1+x^2}$$

$$\frac{d}{dx}\cot^{-1}x = \frac{-1}{1+x^2}, \quad \frac{d}{dx}\sec^{-1}x = \frac{1}{|x|\sqrt{x^2-1}}, \quad \frac{d}{dx}\csc^{-1}x = \frac{-1}{|x|\sqrt{x^2-1}}$$

Standard integrals:

$$\int \frac{dx}{\sqrt{1-x^2}} = \sin^{-1}x + C, \quad \int \frac{dx}{1+x^2} = \tan^{-1}x + C, \quad \int \frac{dx}{x\sqrt{x^2-1}} = \sec^{-1}x + C$$

## Properties of Triangles

Standard notation: side $a$ opposite $\angle A$, etc. Semi-perimeter $s = \dfrac{a+b+c}{2}$, and $A + B + C = \pi$.

### Sine Rule

$$\boxed{\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R}$$

where $R$ is the circumradius.

### Cosine Rule

$$\boxed{a^2 = b^2 + c^2 - 2bc\cos A}$$

$$b^2 = a^2 + c^2 - 2ac\cos B, \qquad c^2 = a^2 + b^2 - 2ab\cos C$$

Rearranged to find angles:

$$\boxed{\cos A = \frac{b^2 + c^2 - a^2}{2bc}}$$

### Projection Rule

$$a = b\cos C + c\cos B, \quad b = a\cos C + c\cos A, \quad c = a\cos B + b\cos A$$

### Area Formulas

$$\boxed{\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}} \quad \text{(Heron)}$$

$$\boxed{\text{Area} = \tfrac{1}{2}ab\sin C = \tfrac{1}{2}bc\sin A = \tfrac{1}{2}ac\sin B}$$

$$\text{Area} = \frac{abc}{4R} = \frac{a^2\sin B\sin C}{2\sin A} = rs$$

### Circumradius & Inradius

$$\frac{a}{\sin A} = 2R, \qquad \text{Area} = \frac{abc}{4R}$$

$$\text{Area} = rs, \qquad r = (s-a)\tan\frac{A}{2} = (s-b)\tan\frac{B}{2} = (s-c)\tan\frac{C}{2}$$

$$r = 4R\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$$

### m–n Theorem

Cevian from $A$ meets $BC$ at $D$ with $BD:DC = m:n$; $\theta$ = angle of $AD$ with $BC$, $\alpha = \angle BAD$, $\beta = \angle DAC$.

$$(m + n)\cot\theta = m\cot\alpha - n\cot\beta = n\cot B - m\cot C$$

(Not to be confused with Napier’s analogy $\dfrac{a+b}{a-b} = \dfrac{\tan\frac{A+B}{2}}{\tan\frac{A-B}{2}}$, which uses the *side* ratio.)

### Angle-Sum Consequences

$$\sin(B+C) = \sin A, \quad \cos(B+C) = -\cos A, \quad \tan(B+C) = -\tan A$$

### Special Triangles

| Triangle | Key Results |
| --- | --- |
| Equilateral ($a=b=c$, all 60°) | $\text{Area} = \tfrac{\sqrt 3}{4}a^2$, $R = \tfrac{a}{\sqrt 3}$, $r = \tfrac{a}{2\sqrt 3} = \tfrac{R}{2}$ |
| Isosceles ($a=b$, base $c$) | $A = B$, $\text{Area} = \tfrac{c}{4}\sqrt{4a^2 - c^2}$ |
| Right ($C = 90°$) | $a^2+b^2=c^2$, $\text{Area} = \tfrac{1}{2}ab$, $R = \tfrac{c}{2}$, $r = \tfrac{a+b-c}{2}$ |

### Choosing the Right Tool

| Given | Use | To Find |
| --- | --- | --- |
| SSS (3 sides) | Cosine rule | Angles |
| SSS | Heron’s formula | Area |
| SAS | Cosine rule | Third side |
| SAS | $\tfrac{1}{2}ab\sin C$ | Area |
| ASA / AAS | Sine rule | Other sides |
| SSA | Sine rule (ambiguous: 0, 1, or 2 triangles) | Angle |

> **⚠ Trap · Ambiguous Case (SSA)**
>
> With the sine rule and SSA data, an angle has two candidates ($\theta$ and $180° - \theta$) — check both against the triangle for 0, 1, or 2 valid triangles.

## Related Topics

- [Trigonometric Identities](../trig-identities/index.md)
- [Trigonometric Equations](../trig-equations/index.md)
- [Inverse Trigonometric Functions](../inverse-trig/index.md)
- [Properties of Triangles](../properties-triangles/index.md)

## Keep studying this chapter

- [Trigonometry chapter notes](../index.md)
- [Trigonometry previous year questions](../previous-year-questions/index.md)

From TestGuru · our mock-test platform

## You've read Trigonometry Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=trigonometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Ftrigonometry%2Fformula-sheet%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/trigonometry/formula-sheet/",this.page.identifier="/mathematics/trigonometry/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/mathematics/trigonometry/formula-sheet/](https://jeenotes.in/mathematics/trigonometry/formula-sheet/) · raw HTML: `offline/mathematics/trigonometry/formula-sheet/index.html`_
