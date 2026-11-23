---
title: "Modulus, Argument and Polar Form"
source: "https://jeenotes.in/mathematics/complex-numbers/modulus-argument/"
description: "Master modulus |z|, argument arg(z), polar and exponential forms of complex numbers for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 8"
html: "../../../../offline/mathematics/complex-numbers/modulus-argument/index.html"
extracted: "2026-11-23"
---

> Master modulus |z|, argument arg(z), polar and exponential forms of complex numbers for JEE Main & Advanced.

## The Hook: Every Number Has a GPS Coordinate!

> **★ Key point · Connect: Polar Coordinates Like a Radar**
>
> Think about a **radar screen** in movies like **Top Gun** or **Mission: Impossible**. They don’t show positions as (x, y) coordinates — they show **distance and angle** from the radar!
>
> Complex numbers work the same way! Instead of $z = a + ib$ (rectangular), we can use **polar form**: distance from origin and angle from the positive real axis.
>
> **Real-world use:** GPS systems, radar, sonar, and AC circuit analysis all use polar coordinates!
>
> **Why this matters for JEE:** Polar form makes multiplication, division, powers, and roots incredibly simple. Expect 2-3 questions using modulus-argument properties!

---

## Prerequisites

Before learning modulus and argument, review:

- [Complex Numbers Basics](../complex-basics/index.md) — $z = a + ib$, algebra, conjugate
- [Argand Diagram](../argand-diagram/index.md) — Geometric representation
- [Trigonometry](../../trigonometry/index.md) — $\sin, \cos, \tan$, inverse trig functions
- Pythagorean theorem — $a^2 + b^2 = c^2$

---

## Modulus: The Distance from Origin

### Definition

The **modulus** (or absolute value) of a complex number $z = a + ib$ is its distance from the origin on the Argand plane:

$$\boxed{|z| = \sqrt{a^2 + b^2}}$$

**In simple terms:** Modulus is the length of the line segment from origin to the point representing $z$.

### Interactive Demo: Visualize Modulus and Argument

Explore how modulus and argument define complex numbers in polar form.

### Examples

| Complex Number | Modulus |
| --- | --- |
| $3 + 4i$ | $\sqrt{9 + 16} = 5$ |
| $-5 + 12i$ | $\sqrt{25 + 144} = 13$ |
| $1 - i$ | $\sqrt{1 + 1} = \sqrt{2}$ |
| $7$ | $\sqrt{49 + 0} = 7$ |
| $-3i$ | $\sqrt{0 + 9} = 3$ |

> **★ Key point · Memory Trick: Famous Pythagorean Triples**
>
> Memorize these for quick calculation:
>
> - **3-4-5**: $|3 + 4i| = 5$

> - **5-12-13**: $|5 + 12i| = 13$

> - **8-15-17**: $|8 + 15i| = 17$

> - **7-24-25**: $|7 + 24i| = 25$
>
> These appear frequently in JEE!

---

## Properties of Modulus

### Basic Properties

1. **Non-negative:** $|z| \geq 0$, and $|z| = 0 \iff z = 0$
2. **Conjugate:** $|\bar{z}| = |z|$ (conjugate has same modulus)
3. **Product:** $z \cdot \bar{z} = |z|^2$

   Proof: $(a + ib)(a - ib) = a^2 + b^2 = |z|^2$
4. **Multiplicative:** $|z_1 z_2| = |z_1| |z_2|$
5. **Division:** $\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|}$ (if $z_2 \neq 0$)
6. **Powers:** $|z^n| = |z|^n$

### Triangle Inequalities

For any complex numbers $z_1, z_2$:

$$\boxed{|z_1 + z_2| \leq |z_1| + |z_2|}$$

(Triangle Inequality)

$$\boxed{|z_1 - z_2| \geq ||z_1| - |z_2||}$$

$$\boxed{|z_1 + z_2| \geq ||z_1| - |z_2||}$$

**Geometric meaning:** In any triangle, the length of one side is less than or equal to the sum of the other two sides.

---

## Argument: The Angle from Positive Real Axis

### Definition

The **argument** of a non-zero complex number $z = a + ib$ is the angle $\theta$ that the line segment from origin to $z$ makes with the positive real axis.

$$\boxed{\arg(z) = \theta}$$

**Notation:** $\arg(z)$ or sometimes $\text{amp}(z)$ (amplitude)

### Finding the Argument

For $z = a + ib$:

$$\tan\theta = \frac{b}{a}$$

But be careful! The formula $\theta = \tan^{-1}(b/a)$ doesn’t always give the correct angle.

### The Correct Formula (Quadrant-Aware)

| Quadrant | Condition | Argument $\theta$ |
| --- | --- | --- |
| I | $a > 0, b > 0$ | $\theta = \tan^{-1}\left(\frac{b}{a}\right)$ |
| II | $a < 0, b > 0$ | $\theta = \pi - \tan^{-1}\left(\frac{ |
| III | $a < 0, b < 0$ | $\theta = -\pi + \tan^{-1}\left(\frac{ |
| IV | $a > 0, b < 0$ | $\theta = -\tan^{-1}\left(\frac{ |
| Positive real axis | $b = 0, a > 0$ | $\theta = 0$ |
| Negative real axis | $b = 0, a < 0$ | $\theta = \pi$ or $-\pi$ |
| Positive imaginary axis | $a = 0, b > 0$ | $\theta = \frac{\pi}{2}$ |
| Negative imaginary axis | $a = 0, b < 0$ | $\theta = -\frac{\pi}{2}$ |

> **⚠ Trap: Always Check the Quadrant!**
>
> **Wrong:** $\arg(-1 + i) = \tan^{-1}(1/(-1)) = \tan^{-1}(-1) = -\pi/4$
>
> **Right:** $-1 + i$ is in **Quadrant II**, so:
>
> $$\theta = \pi - \tan^{-1}\left(\frac{1}{1}\right) = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$$
>
> Always plot the point to determine the correct quadrant!

### Principal Argument

The **principal value** of the argument lies in the range:

$$\boxed{-\pi < \arg(z) \leq \pi}$$

This is the standard convention in JEE.

### General Argument

If $\theta$ is the principal argument, the **general argument** is:

$$\arg(z) = \theta + 2n\pi, \quad n \in \mathbb{Z}$$

---

## Polar Form of Complex Numbers

### Conversion from Rectangular to Polar

Any complex number $z = a + ib$ can be written as:

$$\boxed{z = r(\cos\theta + i\sin\theta)}$$

where:

- $r = |z| = \sqrt{a^2 + b^2}$ (modulus)
- $\theta = \arg(z)$ (argument)

This is called the **polar form** or **trigonometric form**.

### Conversion from Polar to Rectangular

Given $z = r(\cos\theta + i\sin\theta)$:

$$a = r\cos\theta, \quad b = r\sin\theta$$

So $z = r\cos\theta + ir\sin\theta = a + ib$

### Examples

**Example 1:** Convert $1 + i$ to polar form.

$r = |1 + i| = \sqrt{1^2 + 1^2} = \sqrt{2}$

$\theta = \tan^{-1}(1/1) = \pi/4$ (Quadrant I)

**Answer:** $z = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right)$

**Example 2:** Convert $-\sqrt{3} + i$ to polar form.

$r = \sqrt{3 + 1} = 2$

$\theta = \pi - \tan^{-1}(1/\sqrt{3}) = \pi - \pi/6 = 5\pi/6$ (Quadrant II)

**Answer:** $z = 2\left(\cos\frac{5\pi}{6} + i\sin\frac{5\pi}{6}\right)$

---

## Exponential Form (Euler’s Formula)

### Euler’s Formula

One of the most beautiful formulas in mathematics:

$$\boxed{e^{i\theta} = \cos\theta + i\sin\theta}$$

This connects exponential functions, trigonometry, and complex numbers!

### Exponential Form

Using Euler’s formula, the polar form becomes:

$$\boxed{z = re^{i\theta}}$$

where $r = |z|$ and $\theta = \arg(z)$.

**Example:** $1 + i = \sqrt{2}e^{i\pi/4}$

### Important Special Cases

$$e^{i\pi} = \cos\pi + i\sin\pi = -1 + 0i = -1$$

This gives **Euler’s Identity**, considered the most beautiful equation:

$$\boxed{e^{i\pi} + 1 = 0}$$

It connects five fundamental constants: $e, i, \pi, 1, 0$!

---

## Properties of Argument

For non-zero complex numbers $z_1, z_2$:

### Addition Rule

$$\boxed{\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)}$$

(up to multiples of $2\pi$)

**In simple terms:** When you multiply complex numbers, their moduli multiply and their arguments add!

### Division Rule

$$\boxed{\arg\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2)}$$

### Conjugate Rule

$$\boxed{\arg(\bar{z}) = -\arg(z)}$$

(Reflection across real axis reverses the angle)

### Negative Rule

$$\boxed{\arg(-z) = \arg(z) \pm \pi}$$

### Power Rule

$$\boxed{\arg(z^n) = n \cdot \arg(z)}$$

(up to multiples of $2\pi$)

---

## Multiplication and Division in Polar Form

### Multiplication

If $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$:

$$\boxed{z_1 z_2 = r_1r_2[\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)]}$$

**Rule:** Multiply moduli, add arguments!

**Example:** Multiply $z_1 = 2(\cos 30° + i\sin 30°)$ and $z_2 = 3(\cos 45° + i\sin 45°)$

$z_1 z_2 = (2 \times 3)[\cos(30° + 45°) + i\sin(30° + 45°)]$

$= 6(\cos 75° + i\sin 75°)$

### Division

$$\boxed{\frac{z_1}{z_2} = \frac{r_1}{r_2}[\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)]}$$

**Rule:** Divide moduli, subtract arguments!

> **★ Key point · JEE Shortcut: Polar Form for Multiplication/Division**
>
> When you need to multiply or divide complex numbers:
>
> 1. Convert to polar form

> 2. Multiply/divide moduli

> 3. Add/subtract arguments

> 4. Convert back if needed
>
> This is **much faster** than algebraic multiplication, especially for JEE Advanced!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Modulus of Sum ≠ Sum of Moduli**
>
> **Wrong:** $|z_1 + z_2| = |z_1| + |z_2|$
>
> **Right:** $|z_1 + z_2| \leq |z_1| + |z_2|$ (Triangle Inequality)
>
> Equality holds only when $z_1$ and $z_2$ have the same argument (same direction).

> **⚠ Trap #2: Argument in Wrong Quadrant**
>
> Always check which quadrant the complex number is in!
>
> For $z = -1 - i$:
>
> - **Wrong:** $\arg(z) = \tan^{-1}(1) = \pi/4$

> - **Right:** $z$ is in Quadrant III, so $\arg(z) = -\pi + \pi/4 = -3\pi/4$

> **⚠ Trap #3: Argument Addition with Multiples of 2π**
>
> $\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)$ is true **up to multiples of $2\pi$**.
>
> The result might need adjustment to fit in $(-\pi, \pi]$.
>
> **Example:** If $\arg(z_1) = \frac{3\pi}{4}$ and $\arg(z_2) = \frac{3\pi}{4}$:
>
> $\arg(z_1z_2) = \frac{3\pi}{4} + \frac{3\pi}{4} = \frac{3\pi}{2}$
>
> But principal value is $\frac{3\pi}{2} - 2\pi = -\frac{\pi}{2}$

> **⚠ Trap #4: Modulus of Product vs Product of Moduli**
>
> **Right:** $|z_1 z_2| = |z_1| |z_2|$ (always true!)
>
> But $\arg(z_1 z_2) = \arg(z_1) + \arg(z_2)$ needs care with $2\pi$ multiples.

---

## When to Use Polar Form

> **★ Key point · Decision Tree**
>
> **Use rectangular form $z = a + ib$ when:**
>
> - Adding or subtracting complex numbers

> - Finding real and imaginary parts

> - Simple algebraic manipulations
>
> **Use polar form $z = r(\cos\theta + i\sin\theta)$ when:**
>
> - Multiplying or dividing complex numbers

> - Finding powers and roots

> - Geometric problems involving angles

> - Using De Moivre’s theorem
>
> **Key insight:** Choose the form that makes your calculation easier!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Find the modulus and argument of $z = 1 - i$.
>
> **Solution:**
>
> Modulus: $|z| = \sqrt{1^2 + (-1)^2} = \sqrt{2}$
>
> Argument: $z$ is in Quadrant IV ($a > 0, b < 0$)
>
> $\theta = -\tan^{-1}\left(\frac{1}{1}\right) = -\frac{\pi}{4}$
>
> **Answer:** $|z| = \sqrt{2}$, $\arg(z) = -\frac{\pi}{4}$

> **↗ Connection · Problem 1.2**
>
> Express $z = 1 + \sqrt{3}i$ in polar form.
>
> **Solution:**
>
> $r = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = 2$
>
> $\theta = \tan^{-1}\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3}$ (Quadrant I)
>
> **Answer:** $z = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)$

> **↗ Connection · Problem 1.3**
>
> If $|z| = 5$ and $\arg(z) = \frac{2\pi}{3}$, find $z$ in rectangular form.
>
> **Solution:**
>
> $z = 5\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right)$
>
> $= 5\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right)$
>
> $= -\frac{5}{2} + \frac{5\sqrt{3}}{2}i$
>
> **Answer:** $z = -\frac{5}{2} + \frac{5\sqrt{3}}{2}i$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> If $z_1 = 2(\cos 60° + i\sin 60°)$ and $z_2 = 3(\cos 30° + i\sin 30°)$, find $z_1 z_2$ in polar form.
>
> **Solution:**
>
> Using multiplication rule:
>
> $z_1 z_2 = (2)(3)[\cos(60° + 30°) + i\sin(60° + 30°)]$
>
> $= 6(\cos 90° + i\sin 90°)$
>
> $= 6(0 + i \cdot 1)$
>
> $= 6i$
>
> **Answer:** $6(\cos 90° + i\sin 90°)$ or $6i$

> **↗ Connection · Problem 2.2**
>
> Find the argument of $\frac{1 + i}{1 - i}$.
>
> **Solution:**
>
> **Method 1 (Direct):**
>
> $\frac{1+i}{1-i} = \frac{(1+i)(1+i)}{(1-i)(1+i)} = \frac{1 + 2i + i^2}{1 - i^2} = \frac{1 + 2i - 1}{1 + 1} = \frac{2i}{2} = i$
>
> $\arg(i) = \frac{\pi}{2}$
>
> **Method 2 (Using argument property):**
>
> $\arg\left(\frac{1+i}{1-i}\right) = \arg(1+i) - \arg(1-i)$
>
> $= \frac{\pi}{4} - \left(-\frac{\pi}{4}\right) = \frac{\pi}{2}$
>
> **Answer:** $\frac{\pi}{2}$

> **↗ Connection · Problem 2.3**
>
> If $|z - 3| = 3$, find the maximum value of $|z|$.
>
> **Solution:**
>
> $|z - 3| = 3$ represents a circle centered at $3$ (on real axis) with radius $3$.
>
> The point on this circle farthest from the origin is at distance:
>
> $|z|_{\text{max}} = |3| + 3 = 6$
>
> (This is the point $z = 6$ on the real axis)
>
> **Answer:** $6$
>
> **Alternatively:** Using triangle inequality:

> $|z| = |z - 3 + 3| \leq |z - 3| + |3| = 3 + 3 = 6$

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $z_1, z_2$ are two complex numbers such that $|z_1| = |z_2|$ and $\arg(z_1) + \arg(z_2) = 0$, prove that $z_1 = \overline{z_2}$.
>
> **Solution:**
>
> Let $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$
>
> Given: $r_1 = r_2 = r$ and $\theta_1 + \theta_2 = 0$
>
> So $\theta_1 = -\theta_2$
>
> $$z_1 = r[\cos(-\theta_2) + i\sin(-\theta_2)]$$
>
> Using: $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$
>
> $$z_1 = r[\cos\theta_2 - i\sin\theta_2]$$
>
> But $z_2 = r(\cos\theta_2 + i\sin\theta_2)$
>
> So $\overline{z_2} = r(\cos\theta_2 - i\sin\theta_2)$
>
> Therefore, $z_1 = \overline{z_2}$ **Proved!**

> **↗ Connection · Problem 3.2**
>
> If $z = \frac{1 - i\sqrt{3}}{1 + i\sqrt{3}}$, find $\arg(z)$ and express $z$ in polar form.
>
> **Solution:**
>
> **Method 1 (Using argument property):**
>
> $\arg(z) = \arg(1 - i\sqrt{3}) - \arg(1 + i\sqrt{3})$
>
> For $1 - i\sqrt{3}$: Quadrant IV, $\arg = -\tan^{-1}(\sqrt{3}) = -\frac{\pi}{3}$
>
> For $1 + i\sqrt{3}$: Quadrant I, $\arg = \tan^{-1}(\sqrt{3}) = \frac{\pi}{3}$
>
> $\arg(z) = -\frac{\pi}{3} - \frac{\pi}{3} = -\frac{2\pi}{3}$
>
> For modulus:

> $|1 - i\sqrt{3}| = \sqrt{1 + 3} = 2$
>
> $|1 + i\sqrt{3}| = \sqrt{1 + 3} = 2$
>
> $|z| = \frac{2}{2} = 1$
>
> **Answer:** $z = \cos\left(-\frac{2\pi}{3}\right) + i\sin\left(-\frac{2\pi}{3}\right) = e^{-i2\pi/3}$
>
> $\arg(z) = -\frac{2\pi}{3}$

> **↗ Connection · Problem 3.3**
>
> Prove that if $|z_1 + z_2| = |z_1| + |z_2|$, then $\arg(z_1) = \arg(z_2)$.
>
> **Solution:**
>
> The equality $|z_1 + z_2| = |z_1| + |z_2|$ in the triangle inequality holds when $z_1$ and $z_2$ are in the same direction from origin.
>
> This means $z_2 = k z_1$ for some positive real $k > 0$.
>
> Let $z_1 = r_1 e^{i\theta_1}$ and $z_2 = r_2 e^{i\theta_2}$
>
> If $z_2 = k z_1$, then:

> $r_2 e^{i\theta_2} = k r_1 e^{i\theta_1}$
>
> Comparing moduli: $r_2 = kr_1$ ✓
>
> Comparing arguments: $e^{i\theta_2} = e^{i\theta_1}$
>
> Therefore: $\theta_2 = \theta_1$ (up to multiples of $2\pi$)
>
> Hence $\arg(z_1) = \arg(z_2)$ **Proved!**

---

## Quick Revision Box

| Concept | Formula | Notes |
| --- | --- | --- |
| Modulus | $\|z\| = \sqrt{a^2 + b^2}$ | Distance from origin |
| Argument | $\tan\theta = \frac{b}{a}$ | Check quadrant! |
| Polar form | $z = r(\cos\theta + i\sin\theta)$ | $r = \|z\|, \theta = \arg(z)$ |
| Exponential form | $z = re^{i\theta}$ | Euler’s formula |
| Multiplication | $\|z_1z_2\| = \|z_1\|\|z_2\|$ | Multiply moduli |
|  | $\arg(z_1z_2) = \arg(z_1) + \arg(z_2)$ | Add arguments |
| Division | $\|\frac{z_1}{z_2}\| = \frac{\|z_1\|}{\|z_2\|}$ | Divide moduli |
|  | $\arg(\frac{z_1}{z_2}) = \arg(z_1) - \arg(z_2)$ | Subtract arguments |
| Conjugate | $\arg(\bar{z}) = -\arg(z)$ | Reflection |
| Triangle inequality | $\|z_1 + z_2\| \leq \|z_1\| + \|z_2\|$ | Fundamental |

---

## Related Topics

### Within Complex Numbers Chapter

- [Complex Numbers Basics](../complex-basics/index.md) — Foundation
- [Argand Diagram](../argand-diagram/index.md) — Geometric visualization
- [De Moivre’s Theorem](../de-moivres-theorem/index.md) — Powers using polar form
- [Cube Roots of Unity](../cube-roots-unity/index.md) — Special angles

### Math Connections

- [Trigonometry](../../trigonometry/index.md) — $\sin, \cos$ and angles
- [Coordinate Geometry](../../coordinate-geometry/index.md) — Distance formula
- [Exponential Functions](../../limits-continuity-differentiability/index.md) — $e^x$ and derivatives

### Physics Applications

- AC Circuits — Impedance in polar form
- Wave Motion — Amplitude and phase
- Oscillations — Simple Harmonic Motion representation

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Modulus $|z|$** is the distance from origin; use Pythagorean theorem

> 2. **Argument $\arg(z)$** is the angle from positive real axis; **always check quadrant**!

> 3. **Polar form** $z = r(\cos\theta + i\sin\theta)$ uses modulus and argument

> 4. **Euler’s formula** $e^{i\theta} = \cos\theta + i\sin\theta$ gives exponential form

> 5. **Multiplication/Division:** Multiply/divide moduli, add/subtract arguments — polar form makes this trivial!
>
> **“Polar form is the secret weapon for complex number calculations — master it and JEE problems become simple!”**
>
> **Exam Strategy:** For multiplication, division, powers, roots — immediately convert to polar form. For addition, subtraction — use rectangular form. Choose wisely!

---

From TestGuru · our mock-test platform

## You've read Modulus, Argument and Polar Form.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=complex-numbers&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcomplex-numbers%2Fmodulus-argument%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/complex-numbers/modulus-argument/",this.page.identifier="/mathematics/complex-numbers/modulus-argument/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="complexPlane" id="anim-complexPlane-1795396421505788381"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-complexPlane-1795396421505788381")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/complex-numbers/modulus-argument/](https://jeenotes.in/mathematics/complex-numbers/modulus-argument/) · raw HTML: `offline/mathematics/complex-numbers/modulus-argument/index.html`_
