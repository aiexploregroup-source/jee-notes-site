---
title: "Argand Diagram and Geometric Representation"
source: "https://jeenotes.in/mathematics/complex-numbers/argand-diagram/"
description: "Learn geometric representation of complex numbers on Argand plane, distance interpretation, and applications for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 8"
html: "../../../../offline/mathematics/complex-numbers/argand-diagram/index.html"
extracted: "2026-11-23"
---

> Learn geometric representation of complex numbers on Argand plane, distance interpretation, and applications for JEE Main & Advanced.

## The Hook: Numbers Get Coordinates!

> **★ Key point · Connect: Google Maps for Numbers**
>
> Think about **Google Maps** — every location has coordinates (latitude, longitude). What if numbers could have coordinates too?
>
> In 1806, Jean-Robert Argand had this brilliant idea: represent complex numbers as **points on a plane**! Just like in **Oppenheimer** (2023) where physicists visualized invisible atoms, we can visualize “imaginary” numbers.
>
> **Real-world application:** Engineers use Argand diagrams to analyze AC circuits, signal processing, and even airplane navigation systems!
>
> **Why this matters for JEE:** Argand diagram questions test your geometry skills. Expect 1-2 questions combining complex numbers with coordinate geometry!

---

## Prerequisites

Before learning Argand diagrams, make sure you understand:

- [Complex Numbers Basics](../complex-basics/index.md) — $z = a + ib$, algebra of complex numbers
- [Coordinate Geometry Basics](../../coordinate-geometry/index.md) — Plotting points, distance formula
- Cartesian plane — x-axis, y-axis, quadrants

---

## Interactive Demo: Explore the Argand Plane

Try plotting different complex numbers and see how they appear on the Argand plane! Use the sliders to adjust the real and imaginary parts, or switch to polar form to control modulus and argument. Notice how:

- The **conjugate** reflects across the real axis
- The **negative** rotates the point by 180 degrees
- The **reciprocal** inverts the modulus and negates the argument

Explore the presets to see common complex numbers and roots of unity!

---

## The Argand Plane: A Map for Complex Numbers

### The Big Idea

Every complex number $z = a + ib$ can be represented as a **point** $(a, b)$ on a 2D plane.

$$\boxed{z = a + ib \longleftrightarrow \text{Point } (a, b) \text{ on the Argand plane}}$$

### The Axes

- **Real axis (horizontal):** Represents the real part $a$
- **Imaginary axis (vertical):** Represents the imaginary part $b$

```fallback
Imaginary Axis (Im)
              ↑
              |
      z = 3+2i • (3, 2)
              |
    ←---------+--------→ Real Axis (Re)
              |
              |
```

**In simple terms:** The Argand diagram is just like a coordinate plane, but the x-axis is for real parts and y-axis is for imaginary parts!

### Examples

| Complex Number | Point on Argand Plane | Location |
| --- | --- | --- |
| $3 + 2i$ | $(3, 2)$ | Quadrant I |
| $-2 + 4i$ | $(-2, 4)$ | Quadrant II |
| $-1 - 3i$ | $(-1, -3)$ | Quadrant III |
| $5 - 2i$ | $(5, -2)$ | Quadrant IV |
| $4$ | $(4, 0)$ | On real axis |
| $3i$ | $(0, 3)$ | On imaginary axis |
| $0$ | $(0, 0)$ | Origin |

---

## Special Subsets on Argand Plane

### Real Numbers

All **real numbers** lie on the **real axis** (imaginary part = 0).

Points: $(a, 0)$ for $a \in \mathbb{R}$

### Pure Imaginary Numbers

All **pure imaginary numbers** lie on the **imaginary axis** (real part = 0).

Points: $(0, b)$ for $b \in \mathbb{R}, b \neq 0$

### Origin

The complex number $0 = 0 + 0i$ is at the **origin** $(0, 0)$.

---

## Geometric Interpretation of Operations

### Addition: Vector Addition

Adding two complex numbers $z_1 = a_1 + ib_1$ and $z_2 = a_2 + ib_2$ is like **vector addition**:

$$z_1 + z_2 = (a_1 + a_2) + i(b_1 + b_2)$$

Geometrically, complete the **parallelogram** with $z_1$ and $z_2$ as adjacent sides. The diagonal gives $z_1 + z_2$!

> **◐ In simple terms · Parallelogram Law**
>
> If $O$ is origin, and $A, B$ represent $z_1, z_2$, then the point $C$ representing $z_1 + z_2$ completes the parallelogram $OACB$.
>
> This is the **parallelogram law of vector addition**!

### Subtraction: Vector Subtraction

$$z_1 - z_2 = (a_1 - a_2) + i(b_1 - b_2)$$

Geometrically, $z_1 - z_2$ is the vector from point $z_2$ to point $z_1$.

### Conjugate: Reflection Across Real Axis

The conjugate $\bar{z} = a - ib$ is the **mirror image** of $z = a + ib$ across the real axis.

If $z$ is at $(a, b)$, then $\bar{z}$ is at $(a, -b)$.

### Negative: Reflection Through Origin

$-z = -a - ib$ is the **reflection** of $z = a + ib$ through the origin.

If $z$ is at $(a, b)$, then $-z$ is at $(-a, -b)$.

This is a $180°$ rotation!

---

## Distance on the Argand Plane

### Distance from Origin: Modulus

The **distance** from the origin to the point $z = a + ib$ is called the **modulus** of $z$:

$$\boxed{|z| = \sqrt{a^2 + b^2}}$$

This is just the **distance formula** from coordinate geometry!

**Example:** $|3 + 4i| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$

> **★ Key point · Memory Trick: Pythagoras!**
>
> The modulus is the **hypotenuse** of a right triangle with sides $a$ and $b$.
>
> Think: **“3-4-5 triangle”** — appears frequently in JEE!

### Distance Between Two Complex Numbers

The distance between $z_1 = a_1 + ib_1$ and $z_2 = a_2 + ib_2$ is:

$$\boxed{|z_1 - z_2| = \sqrt{(a_1 - a_2)^2 + (b_1 - b_2)^2}}$$

**In simple terms:** $|z_1 - z_2|$ is the distance between points $z_1$ and $z_2$ on the Argand plane.

**Example:** Distance between $3 + 4i$ and $1 + i$:

$|{(3+4i) - (1+i)}| = |2 + 3i| = \sqrt{4 + 9} = \sqrt{13}$

---

## Geometric Loci on Argand Plane

Many equations involving complex numbers represent **geometric shapes**!

### Circle: $|z - z_0| = r$

**Equation:** $|z - z_0| = r$

**Meaning:** Set of all points at **distance $r$** from the center $z_0$.

**Geometric shape:** **Circle** with center $z_0$ and radius $r$.

**Example:** $|z - (2 + 3i)| = 5$

This is a circle centered at $(2, 3)$ with radius $5$.

### Perpendicular Bisector: $|z - z_1| = |z - z_2|$

**Equation:** $|z - z_1| = |z - z_2|$

**Meaning:** Set of all points **equidistant** from $z_1$ and $z_2$.

**Geometric shape:** **Perpendicular bisector** of the line segment joining $z_1$ and $z_2$.

**Example:** $|z - 1| = |z + 1|$ (i.e., $|z - 1| = |z - (-1)|$)

Let $z = x + iy$:

$\sqrt{(x-1)^2 + y^2} = \sqrt{(x+1)^2 + y^2}$

Squaring: $(x-1)^2 = (x+1)^2$

$x^2 - 2x + 1 = x^2 + 2x + 1$

$x = 0$

This is the **imaginary axis**!

### Interior of Circle: $|z - z_0| < r$

**Equation:** $|z - z_0| < r$

**Geometric shape:** **Interior** (inside) of circle centered at $z_0$ with radius $r$.

### Exterior of Circle: $|z - z_0| > r$

**Equation:** $|z - z_0| > r$

**Geometric shape:** **Exterior** (outside) of circle centered at $z_0$ with radius $r$.

---

## Triangle Inequality

For any two complex numbers $z_1$ and $z_2$:

$$\boxed{|z_1 + z_2| \leq |z_1| + |z_2|}$$

**Geometric meaning:** In a triangle, the length of any side is less than or equal to the sum of the other two sides.

Equality holds when $z_1$ and $z_2$ are in the **same direction** (positive real multiples).

### Related Inequalities

$$|z_1 - z_2| \geq ||z_1| - |z_2||$$

$$|z_1 + z_2| \geq ||z_1| - |z_2||$$

These come from the triangle inequality!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Point and Vector**
>
> **Wrong:** Thinking of $z = 3 + 4i$ as only a point
>
> **Right:** $z = 3 + 4i$ can be thought of as:
>
> - A **point** $(3, 4)$ on the plane

> - A **vector** from origin to $(3, 4)$
>
> Both interpretations are valid and useful!

> **⚠ Trap #2: Modulus vs Distance**
>
> **Remember:**
>
> - $|z|$ = distance from origin to $z$

> - $|z_1 - z_2|$ = distance from $z_1$ to $z_2$
>
> **Common error:** Writing $|z_1 - z_2|$ as $|z_1| - |z_2|$ ✗
>
> These are NOT the same!

> **⚠ Trap #3: Circle Equation**
>
> **Wrong:** $|z| = 3$ is the equation of a circle with radius 3 centered at origin ✓
>
> **But:** $|z - 2i| = 3$ is centered at $(0, 2)$, NOT at $(2, 0)$!
>
> Always identify the center correctly: $z_0 = 0 + 2i = (0, 2)$

> **⚠ Trap #4: Conjugate Reflection**
>
> The conjugate $\bar{z}$ is reflection across the **real axis** (horizontal), not the imaginary axis!
>
> If $z = 2 + 3i$, then $\bar{z} = 2 - 3i$ (same x-coordinate, opposite y-coordinate)

---

## When to Use Argand Diagram

> **★ Key point · Decision Tree**
>
> **Use Argand diagram when:**
>
> - The problem involves geometric interpretation ($|z - z_0| = r$, etc.)

> - Finding locus of points satisfying conditions

> - Visualizing addition/subtraction geometrically

> - Problems involving distance, circles, or perpendicular bisectors

> - When algebraic approach seems too complicated!
>
> **Key insight:** Convert complex number equations to coordinate geometry — it’s often easier!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Plot the following complex numbers on the Argand plane:

> (a) $2 + 3i$ (b) $-1 + 4i$ (c) $3 - 2i$ (d) $-3 - i$
>
> **Solution:**
>
> (a) $(2, 3)$ — Quadrant I

> (b) $(-1, 4)$ — Quadrant II

> (c) $(3, -2)$ — Quadrant IV

> (d) $(-3, -1)$ — Quadrant III
>
> *(Plot these on graph paper for practice!)*

> **↗ Connection · Problem 1.2**
>
> Find the distance between $z_1 = 3 + 4i$ and $z_2 = 6 + 8i$.
>
> **Solution:**
>
> $|z_1 - z_2| = |(3+4i) - (6+8i)| = |-3 - 4i| = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = 5$
>
> **Answer:** $5$ units

> **↗ Connection · Problem 1.3**
>
> What geometric shape does $|z - 2i| = 3$ represent?
>
> **Solution:**
>
> This is the equation $|z - z_0| = r$ where $z_0 = 0 + 2i = 2i$ and $r = 3$.
>
> **Answer:** Circle with center $(0, 2)$ and radius $3$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> If $|z - 3| = |z - 5i|$, find the locus of $z$ in the Argand plane.
>
> **Solution:**
>
> This represents points equidistant from $3$ and $5i$.
>
> $3$ is at $(3, 0)$ and $5i$ is at $(0, 5)$.
>
> The locus is the perpendicular bisector of the line segment joining these points.
>
> Let $z = x + iy$:
>
> $\sqrt{(x-3)^2 + y^2} = \sqrt{x^2 + (y-5)^2}$
>
> Squaring both sides:

> $(x-3)^2 + y^2 = x^2 + (y-5)^2$
>
> $x^2 - 6x + 9 + y^2 = x^2 + y^2 - 10y + 25$
>
> $-6x + 9 = -10y + 25$
>
> $-6x + 10y = 16$
>
> $3x - 5y = -8$
>
> **Answer:** The line $3x - 5y + 8 = 0$

> **↗ Connection · Problem 2.2**
>
> Find the area of the triangle formed by the complex numbers $0, 3 + 4i,$ and $3 - 4i$ on the Argand plane.
>
> **Solution:**
>
> Vertices are: $O(0, 0)$, $A(3, 4)$, $B(3, -4)$
>
> Using area formula for a triangle:
>
> $$\text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

$$= \frac{1}{2}|0(4 - (-4)) + 3((-4) - 0) + 3(0 - 4)|$$

$$= \frac{1}{2}|0 - 12 - 12| = \frac{1}{2} \times 24 = 12$$
>
> **Alternative:** Base $= |AB| = 8$ (from $(3,4)$ to $(3,-4)$), Height $= 3$ (distance from origin to line $x=3$)
>
> Area $= \frac{1}{2} \times 8 \times 3 = 12$
>
> **Answer:** $12$ square units

> **↗ Connection · Problem 2.3**
>
> If $|z| = 4$ and $\text{arg}(z) = \frac{\pi}{6}$, find the complex number $z$.
>
> **Solution:**
>
> From polar form: $z = r(\cos\theta + i\sin\theta)$
>
> $z = 4\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)$
>
> $= 4\left(\frac{\sqrt{3}}{2} + i\frac{1}{2}\right)$
>
> $= 2\sqrt{3} + 2i$
>
> **Answer:** $z = 2\sqrt{3} + 2i$
>
> **Verification:** $|z| = \sqrt{(2\sqrt{3})^2 + 2^2} = \sqrt{12 + 4} = \sqrt{16} = 4$ ✓

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $z_1, z_2, z_3$ are complex numbers such that $|z_1| = |z_2| = |z_3| = 1$ and $z_1 + z_2 + z_3 = 0$, find the geometric interpretation and the value of $|z_1 - z_2|^2 + |z_2 - z_3|^2 + |z_3 - z_1|^2$.
>
> **Solution:**
>
> All three lie on the unit circle: $|z_1| = |z_2| = |z_3| = 1$
>
> Given: $z_1 + z_2 + z_3 = 0$, which means the centroid is at the origin.
>
> For points on a unit circle with centroid at origin, they form an **equilateral triangle**.
>
> Now calculate:
>
> $$|z_1 - z_2|^2 = (z_1 - z_2)\overline{(z_1 - z_2)} = (z_1 - z_2)(\bar{z_1} - \bar{z_2})$$

$$= z_1\bar{z_1} - z_1\bar{z_2} - z_2\bar{z_1} + z_2\bar{z_2}$$

$$= |z_1|^2 + |z_2|^2 - (z_1\bar{z_2} + \bar{z_1}z_2)$$

$$= 1 + 1 - 2\text{Re}(z_1\bar{z_2}) = 2 - 2\text{Re}(z_1\bar{z_2})$$
>
> Similarly for others. Sum:
>
> $$\sum |z_i - z_j|^2 = 6 - 2[\text{Re}(z_1\bar{z_2}) + \text{Re}(z_2\bar{z_3}) + \text{Re}(z_3\bar{z_1})]$$
>
> From $z_1 + z_2 + z_3 = 0$, take conjugate: $\bar{z_1} + \bar{z_2} + \bar{z_3} = 0$
>
> Multiply: $(z_1 + z_2 + z_3)(\bar{z_1} + \bar{z_2} + \bar{z_3}) = 0$
>
> Expanding and using $|z_i|^2 = z_i\bar{z_i} = 1$:
>
> $3 + 2[\text{Re}(z_1\bar{z_2}) + \text{Re}(z_2\bar{z_3}) + \text{Re}(z_3\bar{z_1})] = 0$
>
> So the sum in brackets $= -\frac{3}{2}$
>
> Therefore: $\sum |z_i - z_j|^2 = 6 - 2(-\frac{3}{2}) = 6 + 3 = 9$
>
> **Answer:** $9$

> **↗ Connection · Problem 3.2**
>
> If $z$ satisfies $|z - 1| + |z + 1| = 4$, find the locus of $z$.
>
> **Solution:**
>
> Let $z = x + iy$. Then:
>
> $|z - 1| = \sqrt{(x-1)^2 + y^2}$ (distance from $(1, 0)$)
>
> $|z + 1| = \sqrt{(x+1)^2 + y^2}$ (distance from $(-1, 0)$)
>
> The equation states: sum of distances from $(1, 0)$ and $(-1, 0)$ is $4$.
>
> This is the definition of an **ellipse** with foci at $F_1(-1, 0)$ and $F_2(1, 0)$.
>
> For an ellipse: $2a = 4 \Rightarrow a = 2$
>
> Distance between foci: $2c = 2 \Rightarrow c = 1$
>
> $b^2 = a^2 - c^2 = 4 - 1 = 3$
>
> **Answer:** Ellipse $\frac{x^2}{4} + \frac{y^2}{3} = 1$

---

## Quick Revision Box

| Concept | Geometric Interpretation |
| --- | --- |
| $z = a + ib$ | Point $(a, b)$ on Argand plane |
| Real axis | All points $(a, 0)$ |
| Imaginary axis | All points $(0, b)$ |
| $\|z\|$ | Distance from origin to $z$ |
| $\|z_1 - z_2\|$ | Distance between $z_1$ and $z_2$ |
| $\bar{z}$ | Reflection of $z$ across real axis |
| $-z$ | Reflection of $z$ through origin |
| $\|z - z_0\| = r$ | Circle with center $z_0$, radius $r$ |
| $\|z - z_1\| = \|z - z_2\|$ | Perpendicular bisector of segment joining $z_1, z_2$ |
| Triangle inequality | $\|z_1 + z_2\| \leq \|z_1\| + \|z_2\|$ |

---

## Related Topics

### Within Complex Numbers Chapter

- [Complex Numbers Basics](../complex-basics/index.md) — Foundation for Argand diagram
- [Modulus and Argument](../modulus-argument/index.md) — Polar representation
- [De Moivre’s Theorem](../de-moivres-theorem/index.md) — Rotations on Argand plane

### Math Connections

- [Coordinate Geometry](../../coordinate-geometry/index.md) — Distance, locus, circles
- [Trigonometry](../../trigonometry/index.md) — Angles and argument
- [Vector Algebra](../../vector-algebra/index.md) — Complex numbers as 2D vectors

### Physics Applications

- AC Circuits — Phasor diagrams are Argand diagrams
- Wave Interference — Complex amplitude representation
- Signal Processing — Frequency domain representation

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Argand plane** maps every complex number $z = a + ib$ to point $(a, b)$

> 2. **Modulus $|z|$** is the distance from origin; $|z_1 - z_2|$ is distance between points

> 3. **Conjugate** is reflection across real axis; **negative** is rotation by $180°$

> 4. **Geometric loci:** $|z - z_0| = r$ gives circles, $|z - z_1| = |z - z_2|$ gives perpendicular bisectors

> 5. **Triangle inequality** connects algebra and geometry: $|z_1 + z_2| \leq |z_1| + |z_2|$
>
> **“The Argand diagram transforms algebra into geometry — when stuck on a complex number problem, draw it!”**
>
> **Exam Strategy:** Always sketch an Argand diagram for locus problems. Visual solutions are faster and less error-prone!

---

From TestGuru · our mock-test platform

## You've read Argand Diagram and Geometric Representation.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=complex-numbers&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcomplex-numbers%2Fargand-diagram%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/complex-numbers/argand-diagram/",this.page.identifier="/mathematics/complex-numbers/argand-diagram/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="complexPlaneVisualizer" id="anim-complexPlaneVisualizer-1795396421499489266"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-complexPlaneVisualizer-1795396421499489266")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/complex-numbers/argand-diagram/](https://jeenotes.in/mathematics/complex-numbers/argand-diagram/) · raw HTML: `offline/mathematics/complex-numbers/argand-diagram/index.html`_
