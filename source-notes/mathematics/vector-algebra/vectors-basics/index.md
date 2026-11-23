---
title: "Vector Basics: Definition, Types & Position Vectors"
source: "https://jeenotes.in/mathematics/vector-algebra/vectors-basics/"
description: "Master vector fundamentals with movie examples - understand scalars vs vectors, position vectors, and types with Iron Man flight trajectories"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 7"
html: "../../../../offline/mathematics/vector-algebra/vectors-basics/index.html"
extracted: "2026-11-23"
---

> Master vector fundamentals with movie examples - understand scalars vs vectors, position vectors, and types with Iron Man flight trajectories

## The Hook: Iron Man’s Flight Path

> **★ Key point · Connect: Real Life → Vectors**
>
> When Tony Stark (Iron Man) flies from Stark Tower to the Avengers compound, saying “I flew 500 km” isn’t enough information. JARVIS needs:
>
> - **Distance:** 500 km (how far)

> - **Direction:** Northeast bearing 45°
>
> “500 km” alone is a **scalar**. “500 km Northeast” is a **vector**.
>
> **The Question:** Why does physics (and JEE) care so much about direction?

**JEE Weightage:**

Vector Basics appears in 2-3 questions in JEE Main, 3-4 in JEE Advanced. Foundation topic for mechanics!

---

## The Core Concept

### What is a Vector?

> **◐ In simple terms · Definition**
>
> A **vector** is a quantity that has both:
>
> 1. **Magnitude** (size/length)

> 2. **Direction** (orientation in space)
>
> A **scalar** has only magnitude, no direction.

**In simple terms:** If you can answer “which way?” about it, it’s a vector. If you can’t, it’s a scalar.

### Scalars vs Vectors

| Type | Examples | JEE Appearance |
| --- | --- | --- |
| **Scalars** | Distance, Speed, Mass, Temperature, Energy | Work, Power, Kinetic Energy |
| **Vectors** | Displacement, Velocity, Force, Acceleration | All mechanics problems |

### Vector Notation

$$\boxed{\vec{a} \text{ or } \mathbf{a} \text{ or } \overrightarrow{AB}}$$

- $\vec{a}$ - General vector notation
- $|\vec{a}|$ or $a$ - Magnitude of vector
- $\hat{a}$ - Unit vector (magnitude = 1)
- $\overrightarrow{AB}$ - Vector from point A to B

---

## Types of Vectors

### 1. Zero Vector (Null Vector)

$$\boxed{\vec{0} = 0\hat{i} + 0\hat{j} + 0\hat{k}}$$

**Properties:**

- Magnitude = 0
- Direction is **undefined** (no specific direction)
- Adding zero vector to any vector leaves it unchanged: $\vec{a} + \vec{0} = \vec{a}$

**JEE Trap:** Zero vector is the only vector whose direction cannot be determined!

### 2. Unit Vector

$$\boxed{\hat{a} = \frac{\vec{a}}{|\vec{a}|}}$$

**Definition:** A vector with magnitude 1 in the direction of $\vec{a}$.

**Standard Unit Vectors:**

- $\hat{i}$ - along positive x-axis
- $\hat{j}$ - along positive y-axis
- $\hat{k}$ - along positive z-axis

**Properties:** $|\hat{i}| = |\hat{j}| = |\hat{k}| = 1$

> **↗ Connection · Quick Example**
>
> If $\vec{a} = 3\hat{i} + 4\hat{j}$, find the unit vector.
>
> **Solution:**
>
> - Magnitude: $|\vec{a}| = \sqrt{3^2 + 4^2} = \sqrt{9+16} = 5$

> - Unit vector: $\hat{a} = \frac{3\hat{i} + 4\hat{j}}{5} = \frac{3}{5}\hat{i} + \frac{4}{5}\hat{j}$

### 3. Equal Vectors

$$\boxed{\vec{a} = \vec{b} \iff |\vec{a}| = |\vec{b}| \text{ and same direction}}$$

**Important:** Vectors can be equal even if they start at different points - only magnitude and direction matter!

### 4. Negative Vector

$$\boxed{-\vec{a} \text{ has same magnitude but opposite direction to } \vec{a}}$$

**Example:** If $\vec{a} = 3\hat{i} + 4\hat{j}$, then $-\vec{a} = -3\hat{i} - 4\hat{j}$

### 5. Parallel Vectors (Collinear)

$$\boxed{\vec{a} \parallel \vec{b} \iff \vec{a} = \lambda\vec{b} \text{ for some scalar } \lambda}$$

**Cases:**

- If $\lambda > 0$: Same direction
- If $\lambda < 0$: Opposite direction

### 6. Position Vector

> **★ Key point · Most Important for JEE!**
>
> The **position vector** of a point P(x, y, z) with respect to origin O is:
>
> $$\boxed{\overrightarrow{OP} = x\hat{i} + y\hat{j} + z\hat{k}}$$
>
> **Simply:** It’s the vector from origin to the point.

---

## Position Vectors: The Foundation

### Position Vector of a Point

For point P(x, y, z):

$$\vec{r} = \overrightarrow{OP} = x\hat{i} + y\hat{j} + z\hat{k}$$

**Magnitude:** $|\vec{r}| = \sqrt{x^2 + y^2 + z^2}$ (distance from origin)

### Vector Joining Two Points

> **◐ In simple terms · Super Important Formula**
>
> Vector from point A$(x_1, y_1, z_1)$ to B$(x_2, y_2, z_2)$:
>
> $$\boxed{\overrightarrow{AB} = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j} + (z_2 - z_1)\hat{k}}$$
>
> **Memory Trick:** “Tail to Head” → Subtract tail coordinates from head coordinates

**Length of AB:**

$$|\overrightarrow{AB}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$$

This is just the distance formula!

### Interactive Demo: Visualize Vector Addition

Explore how vectors add geometrically using the interactive visualization below.

> **↗ Connection · Example: Find Vector AB**
>
> A(1, 2, 3) and B(4, 6, 9). Find $\overrightarrow{AB}$ and its magnitude.
>
> **Solution:**
>
> $$\overrightarrow{AB} = (4-1)\hat{i} + (6-2)\hat{j} + (9-3)\hat{k} = 3\hat{i} + 4\hat{j} + 6\hat{k}$$

$$|\overrightarrow{AB}| = \sqrt{3^2 + 4^2 + 6^2} = \sqrt{9+16+36} = \sqrt{61}$$

---

## Component Form of Vectors

### 2D Vector

$$\vec{a} = a_x\hat{i} + a_y\hat{j}$$

**Magnitude:** $|\vec{a}| = \sqrt{a_x^2 + a_y^2}$

**Direction:** $\tan\theta = \frac{a_y}{a_x}$ (angle with x-axis)

### 3D Vector

$$\vec{a} = a_x\hat{i} + a_y\hat{j} + a_z\hat{k}$$

**Magnitude:** $|\vec{a}| = \sqrt{a_x^2 + a_y^2 + a_z^2}$

**Direction Cosines:**

$$\boxed{l = \frac{a_x}{|\vec{a}|}, \quad m = \frac{a_y}{|\vec{a}|}, \quad n = \frac{a_z}{|\vec{a}|}}$$

**Important Property:** $l^2 + m^2 + n^2 = 1$

---

## Memory Tricks & Patterns

### Mnemonic for Types of Vectors

**Memory Trick:** “**Z**ero **U**nit **E**qual **N**egative **P**arallel **P**osition” → **ZUENPP**

1. **Z**ero vector - magnitude 0
2. **U**nit vector - magnitude 1
3. **E**qual vectors - same magnitude & direction
4. **N**egative vector - opposite direction
5. **P**arallel vectors - $\vec{a} = \lambda\vec{b}$
6. **P**osition vector - from origin

### Pattern Recognition

> **★ Key point · JEE Pattern #1: 3-4-5 Triangle**
>
> Vector $3\hat{i} + 4\hat{j}$ appears frequently because:
>
> - Magnitude = 5 (Pythagorean triplet)

> - Easy to work with in calculations

> - Unit vector is $\frac{3}{5}\hat{i} + \frac{4}{5}\hat{j}$
>
> **Other common triplets:** (5, 12, 13), (8, 15, 17), (7, 24, 25)

> **★ Key point · JEE Pattern #2: Special Angles**
>
> Vectors at 30°, 45°, 60° with x-axis appear often:
>
> - **45°:** Components are equal, $\vec{a} = a\hat{i} + a\hat{j}$

> - **30°:** $\vec{a} = a\sqrt{3}\hat{i} + a\hat{j}$ (magnitude 2a)

> - **60°:** $\vec{a} = a\hat{i} + a\sqrt{3}\hat{j}$ (magnitude 2a)

---

## When to Use Position Vectors

> **★ Key point · Decision Tree**
>
> **Use position vectors when:**
>
> - Problem gives coordinates of points

> - Need to find distance between points

> - Working with centroids, midpoints

> - Proving collinearity of points
>
> **Use general vectors when:**
>
> - Forces, velocities given as magnitudes

> - Direction is given as angles

> - Abstract vector algebra problems

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Vector vs Magnitude Confusion**
>
> **Wrong:** $\vec{a} + \vec{b} = |\vec{a}| + |\vec{b}|$
>
> **Right:** Vectors add by components, not magnitudes!
>
> If $\vec{a} = 3\hat{i}$ and $\vec{b} = 4\hat{j}$:
>
> - $\vec{a} + \vec{b} = 3\hat{i} + 4\hat{j}$ (magnitude = 5, NOT 7!)

> **⚠ Trap #2: Direction of AB vs BA**
>
> **Common Error:** Thinking $\overrightarrow{AB} = \overrightarrow{BA}$
>
> **Truth:** $\overrightarrow{AB} = -\overrightarrow{BA}$ (opposite directions)
>
> Always: Final point - Initial point

> **⚠ Trap #3: Zero Vector Direction**
>
> **Question Type:** “What is the direction of zero vector?”
>
> **Wrong Answer:** “All directions” or “No direction”
>
> **Correct:** Direction is **undefined** (not determinable)

> **⚠ Trap #4: Unit Vector Calculation**
>
> **Wrong:** Unit vector of $\vec{a} = 3\hat{i} + 4\hat{j}$ is $\hat{i} + \hat{j}$
>
> **Right:** First find magnitude (5), then divide: $\frac{3}{5}\hat{i} + \frac{4}{5}\hat{j}$

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Basic Position Vector**
>
> Find the position vector of point P(2, -3, 5).
>
> **Solution:**
>
> $$\vec{r} = 2\hat{i} - 3\hat{j} + 5\hat{k}$$
>
> **Magnitude:** $|\vec{r}| = \sqrt{4 + 9 + 25} = \sqrt{38}$

> **↗ Connection · Problem 2: Unit Vector**
>
> Find unit vector in the direction of $\vec{a} = 2\hat{i} - 2\hat{j} + \hat{k}$.
>
> **Solution:**
>
> - $|\vec{a}| = \sqrt{4 + 4 + 1} = 3$

> - $\hat{a} = \frac{2\hat{i} - 2\hat{j} + \hat{k}}{3} = \frac{2}{3}\hat{i} - \frac{2}{3}\hat{j} + \frac{1}{3}\hat{k}$

> **↗ Connection · Problem 3: Vector Between Points**
>
> Find $\overrightarrow{AB}$ where A(1, 2, 3) and B(3, 4, 5).
>
> **Solution:**
>
> $$\overrightarrow{AB} = (3-1)\hat{i} + (4-2)\hat{j} + (5-3)\hat{k} = 2\hat{i} + 2\hat{j} + 2\hat{k}$$
>
> **Length:** $|\overrightarrow{AB}| = \sqrt{4+4+4} = 2\sqrt{3}$

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Collinear Vectors**
>
> If $\vec{a} = 2\hat{i} + 3\hat{j} + 4\hat{k}$ and $\vec{b} = 4\hat{i} + 6\hat{j} + 8\hat{k}$, show that they are parallel.
>
> **Solution:**
>
> $$\vec{b} = 4\hat{i} + 6\hat{j} + 8\hat{k} = 2(2\hat{i} + 3\hat{j} + 4\hat{k}) = 2\vec{a}$$
>
> Since $\vec{b} = 2\vec{a}$ (where $\lambda = 2$), vectors are parallel. ✓

> **↗ Connection · Problem 5: Direction Cosines**
>
> Find direction cosines of $\vec{a} = 6\hat{i} - 3\hat{j} + 2\hat{k}$.
>
> **Solution:**
>
> - Magnitude: $|\vec{a}| = \sqrt{36 + 9 + 4} = 7$

> - Direction cosines:

>   - $l = \frac{6}{7}$

>   - $m = \frac{-3}{7}$

>   - $n = \frac{2}{7}$
>
> **Verify:** $l^2 + m^2 + n^2 = \frac{36 + 9 + 4}{49} = 1$ ✓

> **↗ Connection · Problem 6: Finding Point from Position Vector**
>
> A point P has position vector $\vec{r} = 3\hat{i} - 2\hat{j} + 5\hat{k}$. Find coordinates of P and distance from origin.
>
> **Solution:**
>
> - **Coordinates:** P(3, -2, 5)

> - **Distance:** $|\vec{r}| = \sqrt{9 + 4 + 25} = \sqrt{38}$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 7: Vector Equality Condition**
>
> If $\vec{a} = (x+3)\hat{i} + 2\hat{j} + z\hat{k}$ and $\vec{b} = \hat{i} + y\hat{j} - 2\hat{k}$ are equal vectors, find x, y, z.
>
> **Solution:**

> For equal vectors, all components must be equal:
>
> - $x + 3 = 1 \Rightarrow x = -2$

> - $2 = y \Rightarrow y = 2$

> - $z = -2$
>
> **Answer:** $x = -2, y = 2, z = -2$

> **↗ Connection · Problem 8: Midpoint Using Position Vectors**
>
> Points A and B have position vectors $\vec{a} = 2\hat{i} + 3\hat{j} + 4\hat{k}$ and $\vec{b} = 4\hat{i} + \hat{j} + 2\hat{k}$. Find position vector of midpoint M.
>
> **Solution:**
>
> $$\vec{r}_M = \frac{\vec{a} + \vec{b}}{2} = \frac{(2\hat{i}+3\hat{j}+4\hat{k}) + (4\hat{i}+\hat{j}+2\hat{k})}{2}$$

$$= \frac{6\hat{i} + 4\hat{j} + 6\hat{k}}{2} = 3\hat{i} + 2\hat{j} + 3\hat{k}$$
>
> **Midpoint:** M(3, 2, 3)

> **↗ Connection · Problem 9: Vector Magnitude Condition**
>
> Find values of k such that $|\vec{a}| = 5$ where $\vec{a} = k\hat{i} + 3\hat{j} + 4\hat{k}$.
>
> **Solution:**
>
> $$|\vec{a}| = \sqrt{k^2 + 9 + 16} = 5$$

$$k^2 + 25 = 25$$

$$k^2 = 0 \Rightarrow k = 0$$
>
> **Answer:** k = 0

---

## Connection to Physics

> **◐ In simple terms · Why Vectors Matter in JEE Physics**
>
> **Every mechanics problem uses vectors:**
>
> 1. **Kinematics:** Displacement, velocity, acceleration are ALL vectors
>
>    - See: [Motion in a Plane](../../../physics/kinematics/index.md)

> 2. **Forces:** Newton’s laws work with vector addition
>
>    - See: [Newton’s Laws](../../../physics/laws-of-motion/index.md)

> 3. **Work & Energy:** Work = Force · Displacement (dot product!)
>
>    - See: [Work Energy Theorem](../../../physics/work-energy-power/work-energy-theorem/index.md)

> 4. **Rotational Motion:** Torque, angular momentum are cross products
>
>    - See: [Rotational Dynamics](../../../physics/rotational-motion/index.md)
>
> **Master vectors → Excel in Physics!**

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| **Vector notation** | $\vec{a}$ or $\overrightarrow{AB}$ |
| **Magnitude** | $ |
| **Unit vector** | $\hat{a} = \frac{\vec{a}}{ |
| **Position vector** | P(x,y,z) → $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$ |
| **Vector AB** | $\overrightarrow{AB} = (x_2-x_1)\hat{i} + (y_2-y_1)\hat{j} + (z_2-z_1)\hat{k}$ |
| **Parallel vectors** | $\vec{a} = \lambda\vec{b}$ |
| **Direction cosines** | $l = \frac{a_x}{ |
| **Property** | $l^2 + m^2 + n^2 = 1$ |
| **Zero vector** | Magnitude = 0, direction undefined |

---

## What’s Next?

Now that you understand vector basics, learn how to **add and subtract vectors:**

> **★ Key point · Next Topic**
>
> **[Vector Addition & Subtraction](../vector-addition/index.md)** - Triangle law, parallelogram law, component method
>
> **Also explore:**
>
> - [Scalar Product (Dot Product)](../scalar-product/index.md) - For work, projection problems

> - [3D Coordinate Geometry](../../three-dimensional-geometry/index.md) - Uses position vectors heavily

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Vectors have magnitude AND direction** - that’s what makes them powerful

> 2. **Position vectors are the bridge** between coordinate geometry and vectors

> 3. **Unit vectors are your friends** - they simplify direction calculations

> 4. **The formula $\overrightarrow{AB} = B - A$** is used in 80% of vector problems

> 5. **Direction undefined vs no direction** - zero vector direction is undefined!
>
> **“In JEE, if you see coordinates, think position vectors. If you see forces/velocities, think component vectors. Master both, ace mechanics!”**
>
> **Time-saving tip:** For 3-4-5, 5-12-13 vectors, write magnitude directly. Saves 30 seconds!

---

**Pro Tip:** When solving vector problems, **always draw a diagram first**. 60% of mistakes happen because students skip visualization!

From TestGuru · our mock-test platform

## You've read Vector Basics: Definition, Types & Position Vectors.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=vector-algebra&tg_exam=jee-main&tg_page=%2Fmathematics%2Fvector-algebra%2Fvectors-basics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/vector-algebra/vectors-basics/",this.page.identifier="/mathematics/vector-algebra/vectors-basics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="vectorAddition" id="anim-vectorAddition-1795396422546877302"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-vectorAddition-1795396422546877302")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/vector-algebra/vectors-basics/](https://jeenotes.in/mathematics/vector-algebra/vectors-basics/) · raw HTML: `offline/mathematics/vector-algebra/vectors-basics/index.html`_
