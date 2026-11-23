---
title: "Complex Numbers: Basics and Algebra"
source: "https://jeenotes.in/mathematics/complex-numbers/complex-basics/"
description: "Master the fundamentals of complex numbers, imaginary unit i, ordered pairs, and algebraic operations for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 8"
html: "../../../../offline/mathematics/complex-numbers/complex-basics/index.html"
extracted: "2026-11-23"
---

> Master the fundamentals of complex numbers, imaginary unit i, ordered pairs, and algebraic operations for JEE Main & Advanced.

## The Hook: When Reality Isn’t Enough

> **★ Key point · Connect: The Upside Down of Mathematics**
>
> Remember **Stranger Things**? The Upside Down is a parallel dimension hidden beneath the real world. Complex numbers are just like that — a hidden mathematical dimension beyond the real numbers!
>
> When you try to solve $x^2 = -1$ using real numbers, it’s impossible. But just like Eleven accessing the Upside Down, mathematicians discovered a whole new world: **imaginary numbers**. Engineers use these to design AC circuits, analyze vibrations, and even process the signals in your smartphone!
>
> **Why this matters for JEE:** Complex numbers appear in 2-3 questions in JEE Main and are fundamental for JEE Advanced problems in algebra, coordinate geometry, and even calculus.

---

## Prerequisites

Before diving into complex numbers, you should be comfortable with:

- [Real number system](../../sets-relations-functions/sets-basics/index.md) — Understanding of $\mathbb{R}$
- Basic algebra — Solving quadratic equations
- Coordinate geometry basics — Plotting points on a plane

---

## The Birth of $i$: The Imaginary Unit

### The Problem

Consider the equation: $x^2 = -1$

In the real number system $\mathbb{R}$, this has **no solution** because:

- If $x > 0$, then $x^2 > 0$
- If $x < 0$, then $x^2 > 0$ (negative times negative is positive)
- If $x = 0$, then $x^2 = 0$

So $x^2$ can never be negative!

### Interactive Demo: Visualize Complex Numbers

Explore complex numbers on the complex plane and see algebraic operations geometrically.

### The Solution: Define a New Number

Mathematicians defined a new number called the **imaginary unit**:

$$\boxed{i = \sqrt{-1} \quad \text{or equivalently} \quad i^2 = -1}$$

**In simple terms:** $i$ is a number that, when squared, gives $-1$. It doesn’t exist on the real number line — it lives in a new dimension!

### Powers of $i$ — The Magic Cycle

> **★ Key point · Memory Trick: The i-Cycle**
>
> Powers of $i$ follow a repeating pattern of **4**:
>
> $$i^1 = i$$

$$i^2 = -1$$

$$i^3 = i^2 \cdot i = -1 \cdot i = -i$$

$$i^4 = i^2 \cdot i^2 = (-1)(-1) = 1$$

$$i^5 = i^4 \cdot i = 1 \cdot i = i$$
>
> (cycle repeats!)
>
> **The Pattern:** $1, i, -1, -i, 1, i, -1, -i, ...$
>
> **Shortcut:** To find $i^n$, divide $n$ by 4 and use the remainder:
>
> - Remainder 0: $i^n = 1$

> - Remainder 1: $i^n = i$

> - Remainder 2: $i^n = -1$

> - Remainder 3: $i^n = -i$

### Quick Formula

$$\boxed{i^{4k} = 1, \quad i^{4k+1} = i, \quad i^{4k+2} = -1, \quad i^{4k+3} = -i}$$

where $k$ is any integer.

**Example:** Find $i^{2025}$

$2025 = 4(506) + 1$

So $i^{2025} = i^{4(506)+1} = i^1 = i$

---

## What is a Complex Number?

### Definition

A **complex number** is a number of the form:

$$\boxed{z = a + ib}$$

where:

- $a$ is the **real part**, denoted $\text{Re}(z)$ or $a = \text{Re}(z)$
- $b$ is the **imaginary part**, denoted $\text{Im}(z)$ or $b = \text{Im}(z)$
- $i$ is the imaginary unit
- $a, b \in \mathbb{R}$ (both are real numbers!)

### The Set of Complex Numbers

We denote the set of all complex numbers by $\mathbb{C}$:

$$\mathbb{C} = \{a + ib : a, b \in \mathbb{R}\}$$

### Examples

| Complex Number | Real Part | Imaginary Part |
| --- | --- | --- |
| $3 + 4i$ | $3$ | $4$ |
| $-2 + 5i$ | $-2$ | $5$ |
| $7i$ | $0$ | $7$ |
| $5$ | $5$ | $0$ |
| $0$ | $0$ | $0$ |

> **◐ Important!**
>
> - When $b = 0$: $z = a$ is a **pure real number**

> - When $a = 0$ and $b \neq 0$: $z = ib$ is a **pure imaginary number**

> - The imaginary part is $b$, NOT $ib$!

---

## Complex Numbers as Ordered Pairs

### Alternative Representation

A complex number $z = a + ib$ can be represented as an **ordered pair**:

$$z = (a, b)$$

This is just like coordinates on a plane!

- $(3, 4)$ represents $3 + 4i$
- $(0, 1)$ represents $i$
- $(5, 0)$ represents $5$

### Equality of Complex Numbers

Two complex numbers are equal if and only if their real parts are equal AND their imaginary parts are equal:

$$\boxed{a + ib = c + id \iff a = c \text{ and } b = d}$$

**Example:** If $x + 2yi = 3 - 6i$, find $x$ and $y$.

Comparing real parts: $x = 3$

Comparing imaginary parts: $2y = -6 \Rightarrow y = -3$

---

## Algebra of Complex Numbers

### Addition and Subtraction

Add or subtract the real parts and imaginary parts separately:

$$(a + ib) + (c + id) = (a + c) + i(b + d)$$

$$(a + ib) - (c + id) = (a - c) + i(b - d)$$

**Example:** $(3 + 5i) + (2 - 7i) = (3+2) + i(5-7) = 5 - 2i$

### Multiplication

Use the distributive property and remember that $i^2 = -1$:

$$(a + ib)(c + id) = ac + iad + ibc + i^2bd$$

$$= ac + i(ad + bc) + (-1)bd$$

$$= (ac - bd) + i(ad + bc)$$

$$\boxed{(a + ib)(c + id) = (ac - bd) + i(ad + bc)}$$

**Example:** $(2 + 3i)(1 + 4i)$

$= 2(1) + 2(4i) + 3i(1) + 3i(4i)$
$= 2 + 8i + 3i + 12i^2$
$= 2 + 11i + 12(-1)$
$= 2 + 11i - 12$
$= -10 + 11i$

> **★ Key point · JEE Shortcut: Remember (a+ib)(a-ib)**
>
> This special product appears frequently:
>
> $$(a + ib)(a - ib) = a^2 - (ib)^2 = a^2 - i^2b^2 = a^2 + b^2$$
>
> This is always a **real number**! We’ll use this for division.

### Conjugate of a Complex Number

The **conjugate** of $z = a + ib$ is denoted $\bar{z}$ (read as “z bar”):

$$\boxed{\bar{z} = a - ib}$$

Geometrically, the conjugate is the **mirror image** across the real axis.

**Properties of Conjugates:**

1. $\overline{z_1 + z_2} = \bar{z_1} + \bar{z_2}$
2. $\overline{z_1 - z_2} = \bar{z_1} - \bar{z_2}$
3. $\overline{z_1 \cdot z_2} = \bar{z_1} \cdot \bar{z_2}$
4. $\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\bar{z_1}}{\bar{z_2}}$
5. $z \cdot \bar{z} = a^2 + b^2$ (always real and non-negative!)
6. $z + \bar{z} = 2a = 2\text{Re}(z)$
7. $z - \bar{z} = 2ib = 2i\text{Im}(z)$
8. $\overline{\bar{z}} = z$ (conjugate of conjugate is the original)
9. $z = \bar{z}$ if and only if $z$ is real

### Division

To divide complex numbers, multiply numerator and denominator by the conjugate of the denominator:

$$\frac{a + ib}{c + id} = \frac{(a + ib)(c - id)}{(c + id)(c - id)} = \frac{(ac + bd) + i(bc - ad)}{c^2 + d^2}$$

$$\boxed{\frac{a + ib}{c + id} = \frac{ac + bd}{c^2 + d^2} + i\frac{bc - ad}{c^2 + d^2}}$$

**Example:** Find $\frac{3 + 2i}{1 - i}$

Multiply by $\frac{1 + i}{1 + i}$ (conjugate of denominator):

$$\frac{3 + 2i}{1 - i} \cdot \frac{1 + i}{1 + i} = \frac{(3 + 2i)(1 + i)}{(1 - i)(1 + i)}$$

Numerator: $(3 + 2i)(1 + i) = 3 + 3i + 2i + 2i^2 = 3 + 5i - 2 = 1 + 5i$

Denominator: $(1 - i)(1 + i) = 1 - i^2 = 1 + 1 = 2$

Result: $\frac{1 + 5i}{2} = \frac{1}{2} + \frac{5}{2}i$

---

## Important Algebraic Identities

All standard algebraic identities work with complex numbers:

| Identity | Formula |
| --- | --- |
| $(z_1 + z_2)^2$ | $z_1^2 + 2z_1z_2 + z_2^2$ |
| $(z_1 - z_2)^2$ | $z_1^2 - 2z_1z_2 + z_2^2$ |
| $z_1^2 - z_2^2$ | $(z_1 + z_2)(z_1 - z_2)$ |
| $(z_1 + z_2)^3$ | $z_1^3 + 3z_1^2z_2 + 3z_1z_2^2 + z_2^3$ |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Imaginary Part Confusion**
>
> **Wrong:** The imaginary part of $3 + 4i$ is $4i$
>
> **Right:** The imaginary part of $3 + 4i$ is $4$ (a real number!)
>
> The imaginary part is the **coefficient** of $i$, not the term with $i$.

> **⚠ Trap #2: Square Root of Negative Numbers**
>
> **Wrong:** $\sqrt{-4} = 2i$ or $-2i$ (two values)
>
> **Right:** $\sqrt{-4} = \sqrt{4 \cdot (-1)} = \sqrt{4} \cdot \sqrt{-1} = 2i$ (principal value)
>
> For negative numbers, we always take the positive imaginary value as principal square root.
>
> **JEE Note:** $\sqrt{-a} \cdot \sqrt{-b} \neq \sqrt{ab}$ when $a, b > 0$!
>
> Example: $\sqrt{-1} \cdot \sqrt{-1} = i \cdot i = i^2 = -1$, but $\sqrt{(-1)(-1)} = \sqrt{1} = 1$ ✗

> **⚠ Trap #3: Division by Zero**
>
> You cannot divide by $0 + 0i = 0$. Just like in real numbers, division by zero complex number is undefined.

> **⚠ Trap #4: Conjugate Properties**
>
> **Wrong:** $\overline{z_1 / z_2} = \bar{z_1} / z_2$
>
> **Right:** $\overline{z_1 / z_2} = \bar{z_1} / \bar{z_2}$
>
> The conjugate distributes over division, but you must take conjugate of both numerator and denominator!

---

## When to Use Complex Numbers

> **★ Key point · Decision Tree**
>
> **Use complex numbers when:**
>
> - Solving equations with no real solutions ($x^2 + 4 = 0$)

> - Working with polynomial roots (Fundamental Theorem of Algebra)

> - Simplifying trigonometric expressions (Euler’s formula)

> - Analyzing periodic phenomena (AC circuits, waves)

> - Finding roots of unity
>
> **Key insight:** Every polynomial equation has solutions in $\mathbb{C}$!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Find the value of $i^{538}$.
>
> **Solution:**
>
> $538 = 4(134) + 2$
>
> So $i^{538} = i^{4(134)+2} = i^2 = -1$
>
> **Answer:** $-1$

> **↗ Connection · Problem 1.2**
>
> Express $(2 + 3i) + (4 - 5i)$ in the form $a + ib$.
>
> **Solution:**
>
> $(2 + 3i) + (4 - 5i) = (2 + 4) + i(3 - 5) = 6 - 2i$
>
> **Answer:** $6 - 2i$

> **↗ Connection · Problem 1.3**
>
> Find the conjugate of $z = 7 - 3i$.
>
> **Solution:**
>
> $\bar{z} = 7 - (-3)i = 7 + 3i$
>
> **Answer:** $7 + 3i$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> If $\frac{(1 + i)(2 + i)}{3 + i}$ is equal to $a + ib$, find $a$ and $b$.
>
> **Solution:**
>
> First, simplify numerator:

> $(1 + i)(2 + i) = 2 + i + 2i + i^2 = 2 + 3i - 1 = 1 + 3i$
>
> Now divide:
>
> $$\frac{1 + 3i}{3 + i} \cdot \frac{3 - i}{3 - i} = \frac{(1 + 3i)(3 - i)}{(3 + i)(3 - i)}$$
>
> Numerator: $(1 + 3i)(3 - i) = 3 - i + 9i - 3i^2 = 3 + 8i + 3 = 6 + 8i$
>
> Denominator: $(3 + i)(3 - i) = 9 - i^2 = 9 + 1 = 10$
>
> Result: $\frac{6 + 8i}{10} = \frac{3}{5} + \frac{4}{5}i$
>
> **Answer:** $a = \frac{3}{5}$, $b = \frac{4}{5}$

> **↗ Connection · Problem 2.2**
>
> If $z = x + iy$ and $|z - 1| = |z + 1|$, find the locus of $z$.
>
> **Solution:**
>
> $|z - 1| = |x - 1 + iy|$ and $|z + 1| = |x + 1 + iy|$
>
> $\sqrt{(x-1)^2 + y^2} = \sqrt{(x+1)^2 + y^2}$
>
> Squaring both sides:

> $(x-1)^2 + y^2 = (x+1)^2 + y^2$
>
> $x^2 - 2x + 1 = x^2 + 2x + 1$
>
> $-2x = 2x$
>
> $x = 0$
>
> **Answer:** The locus is the imaginary axis (y-axis)

> **↗ Connection · Problem 2.3**
>
> Find the value of $\frac{1 + i^2 + i^4 + i^6 + ... + i^{2020}}{1 + i}$.
>
> **Solution:**
>
> Notice that $i^{2k}$ alternates between $1$ (when $k$ is even) and $-1$ (when $k$ is odd).
>
> Pattern: $i^0 = 1, i^2 = -1, i^4 = 1, i^6 = -1, ...$
>
> From $i^0$ to $i^{2020}$, we have 1011 terms (even powers from 0 to 2020).
>
> They pair up: $(1 - 1) + (1 - 1) + ... + 1$
>
> There are 505 pairs that sum to 0, plus one extra term $i^{2020}$.
>
> $i^{2020} = i^{4(505)} = 1$
>
> So numerator $= 1$
>
> $$\frac{1}{1 + i} = \frac{1}{1+i} \cdot \frac{1-i}{1-i} = \frac{1-i}{1-i^2} = \frac{1-i}{2}$$
>
> **Answer:** $\frac{1-i}{2} = \frac{1}{2} - \frac{1}{2}i$

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $z_1$ and $z_2$ are two complex numbers such that $|z_1| = |z_2|$ and $\text{arg}(z_1) + \text{arg}(z_2) = \pi$, prove that $z_1 = -\bar{z_2}$.
>
> **Solution:**
>
> Let $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$
>
> Given: $r_1 = r_2 = r$ and $\theta_1 + \theta_2 = \pi$
>
> So $\theta_1 = \pi - \theta_2$
>
> $$z_1 = r[\cos(\pi - \theta_2) + i\sin(\pi - \theta_2)]$$
>
> Using: $\cos(\pi - \theta) = -\cos\theta$ and $\sin(\pi - \theta) = \sin\theta$
>
> $$z_1 = r[-\cos\theta_2 + i\sin\theta_2]$$
>
> Now, $\bar{z_2} = r(\cos\theta_2 - i\sin\theta_2)$
>
> $$-\bar{z_2} = -r(\cos\theta_2 - i\sin\theta_2) = r[-\cos\theta_2 + i\sin\theta_2]$$
>
> Therefore, $z_1 = -\bar{z_2}$ **Proved!**

> **↗ Connection · Problem 3.2**
>
> If $\left|\frac{z - 1}{z + 1}\right| = 1$, show that $z$ is purely imaginary or $z$ is on the imaginary axis.
>
> **Solution:**
>
> Let $z = x + iy$
>
> $$\left|\frac{z - 1}{z + 1}\right| = \left|\frac{x - 1 + iy}{x + 1 + iy}\right| = 1$$

$$|z - 1| = |z + 1|$$

$$\sqrt{(x-1)^2 + y^2} = \sqrt{(x+1)^2 + y^2}$$
>
> Squaring:
>
> $$(x-1)^2 + y^2 = (x+1)^2 + y^2$$

$$x^2 - 2x + 1 = x^2 + 2x + 1$$

$$-2x = 2x$$

$$x = 0$$
>
> When $x = 0$, $z = iy$ which is purely imaginary (assuming $y \neq 0$).
>
> **Proved!**

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| Imaginary unit | $i^2 = -1$ |
| Powers of $i$ | $i^{4k+r} = i^r$ where $r \in \{0,1,2,3\}$ |
| Complex number | $z = a + ib$, $a = \text{Re}(z)$, $b = \text{Im}(z)$ |
| Equality | $a + ib = c + id \iff a=c, b=d$ |
| Addition | $(a+ib) + (c+id) = (a+c) + i(b+d)$ |
| Multiplication | $(a+ib)(c+id) = (ac-bd) + i(ad+bc)$ |
| Conjugate | $\overline{a+ib} = a - ib$ |
| Key property | $(a+ib)(a-ib) = a^2 + b^2$ |
| Division | Multiply by $\frac{\bar{\text{denominator}}}{\bar{\text{denominator}}}$ |

---

## Related Topics

### Within Complex Numbers Chapter

- [Argand Diagram](../argand-diagram/index.md) - Geometric representation of complex numbers
- [Modulus and Argument](../modulus-argument/index.md) - Polar form and properties
- [De Moivre’s Theorem](../de-moivres-theorem/index.md) - Powers and roots
- [Cube Roots of Unity](../cube-roots-unity/index.md) - Special roots
- [Quadratic Equations](../quadratic-equations/index.md) - Solving equations with complex roots

### Math Connections

- [Trigonometric Identities](../../trigonometry/trig-identities/index.md) - Euler’s formula connects complex numbers and trig
- [Circles](../../coordinate-geometry/circles/index.md) - Argand plane is like coordinate plane
- [Binomial Expansion](../../binomial-theorem/binomial-expansion/index.md) - $(a+ib)^n$ expansions
- [Sets Basics](../../sets-relations-functions/sets-basics/index.md) - Understanding number sets

### Physics Applications

- [Electromagnetic Waves](../../../physics/electromagnetic-waves/index.md) - Complex exponentials for wave solutions
- [AC Circuits](../../../physics/electromagnetic-induction/ac-circuits/index.md) - Impedance represented as complex numbers

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **The imaginary unit $i$** is defined by $i^2 = -1$, and powers of $i$ cycle every 4: $(1, i, -1, -i)$

> 2. **Complex numbers** $z = a + ib$ extend real numbers, with both parts being real numbers

> 3. **Algebraic operations** follow the same rules as real numbers, with $i^2 = -1$

> 4. **Conjugate** $\bar{z} = a - ib$ is crucial for division and many properties

> 5. **Key property:** $(a+ib)(a-ib) = a^2 + b^2$ (always real and non-negative)
>
> **“Complex numbers aren’t complex — they’re just numbers with an extra dimension. Master the basics, and the rest becomes simple!”**
>
> **Exam Strategy:** For JEE, be lightning fast with powers of $i$ and division using conjugates. These appear in 90% of complex number problems!

---

**[Next: Argand Diagram →](../argand-diagram/index.md)**

From TestGuru · our mock-test platform

## You've read Complex Numbers: Basics and Algebra.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=complex-numbers&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcomplex-numbers%2Fcomplex-basics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-15

```js
if(!document.getElementById("animation-fullscreen-overlay")){const e=document.createElement("div");e.id="animation-fullscreen-overlay",e.className="animation-fullscreen-overlay",e.innerHTML=`
      <div class="fullscreen-modal">
        <div class="fullscreen-header">
          <span class="fullscreen-title">Interactive Demo</span>
          <button class="fullscreen-close-btn" onclick="JEEAnimations.closeFullscreen()" title="Close (Esc)" aria-label="Close fullscreen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="fullscreen-content"></div>
      </div>
    `,document.body.appendChild(e),document.addEventListener("keydown",function(e){e.key==="Escape"&&document.body.classList.contains("animation-fullscreen-active")&&JEEAnimations.closeFullscreen()}),e.addEventListener("click",function(t){t.target===e&&JEEAnimations.closeFullscreen()})}
```


### inline-script-16

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/complex-numbers/complex-basics/",this.page.identifier="/mathematics/complex-numbers/complex-basics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="complexPlane" id="anim-complexPlane-1795396421490923428"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-complexPlane-1795396421490923428")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/complex-numbers/complex-basics/](https://jeenotes.in/mathematics/complex-numbers/complex-basics/) · raw HTML: `offline/mathematics/complex-numbers/complex-basics/index.html`_
