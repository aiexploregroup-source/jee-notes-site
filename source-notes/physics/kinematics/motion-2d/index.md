---
title: "Motion in a Plane"
source: "https://jeenotes.in/physics/kinematics/motion-2d/"
description: "Master 2D motion for JEE: position vectors, velocity, acceleration, independence of components, and solved problems from foundation to JEE Advanced level."
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 10"
html: "../../../../offline/physics/kinematics/motion-2d/index.html"
extracted: "2026-11-23"
---

> Master 2D motion for JEE: position vectors, velocity, acceleration, independence of components, and solved problems from foundation to JEE Advanced level.

## Prerequisites

Before studying this topic, make sure you understand:

- [Motion in a Straight Line](../motion-1d/index.md) — 1D motion concepts
- [Frame of Reference](../frame-of-reference/index.md) — coordinate systems and sign conventions
- [Vector Algebra](../../../mathematics/vector-algebra/index.md) — addition, subtraction, components, dot product

---

## The Hook: Why One Number Is Never Enough

> **★ Key point · Connect: Real Life → Physics**
>
> In **Fighter (2024)**, when a jet banks into a climbing turn, the radar operator can’t track it with a single number. The jet is moving **forward** AND **upward** at the same time. To know where it is, you need two coordinates. To know where it’s heading, you need two velocity components.
>
> **The big question:** If the jet’s forward motion and upward motion happen simultaneously, do they interfere with each other?
>
> **Spoiler:** They don’t. And that single idea — the independence of perpendicular motions — is the key that unlocks projectile motion, river-boat problems, and circular motion.

**JEE Weightage:** Motion in a plane is the foundation for [Projectile Motion](../projectile-motion/index.md) and [Circular Motion](../circular-motion/index.md) — together these account for 2-3 questions in JEE Main every year. Master the vector language here, and those chapters become easy.

---

## The Core Concept: Describing Motion with Vectors

In 2D motion, objects move in a plane (like a ball thrown at an angle, or a car turning on a road). One coordinate can no longer describe the motion completely — we need **vectors**.

The strategy of this entire chapter fits in one line:

$$\text{One 2D problem} = \text{Two independent 1D problems}$$

### Position Vector

The position of a point P in a plane is described by the **position vector**:

$$\boxed{\vec{r} = x\hat{i} + y\hat{j}}$$

where:

- $x$ = x-coordinate (horizontal position)
- $y$ = y-coordinate (vertical position)
- $\hat{i}$, $\hat{j}$ = unit vectors along x and y axes

**In simple terms:** the position vector is an arrow drawn from the origin to the particle. As the particle moves, the tip of this arrow traces out the **path** of the motion.

#### Magnitude of Position Vector

$$|\vec{r}| = r = \sqrt{x^2 + y^2}$$

#### Direction

$$\theta = \tan^{-1}\left(\frac{y}{x}\right)$$

measured from the positive x-axis (always check which quadrant the point lies in — more on this in Common Mistakes).

---

### Displacement in 2D

When an object moves from position $\vec{r}_1$ to $\vec{r}_2$:

$$\vec{s} = \vec{r}_2 - \vec{r}_1 = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j}$$

$$|\vec{s}| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

> **★ Key point · Distance Formula**
>
> The magnitude of displacement between two points is the straight-line distance between them (Pythagoras theorem). Notice this is exactly the distance formula from coordinate geometry — physics and math meet here.

**Distance vs displacement in 2D:** if the particle travels along a curved path, the **distance** is the length of the curve, while the **displacement magnitude** is the straight chord joining start to end. Distance $\geq$ |displacement|, always.

---

### Velocity in 2D

#### Average Velocity

$$\vec{v}_{avg} = \frac{\Delta \vec{r}}{\Delta t} = \frac{\vec{r}_2 - \vec{r}_1}{t_2 - t_1}$$

Average velocity points along the **displacement**, not along the path.

#### Instantaneous Velocity

$$\boxed{\vec{v} = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\hat{i} + \frac{dy}{dt}\hat{j} = v_x\hat{i} + v_y\hat{j}}$$

#### Speed (Magnitude of Velocity)

$$|\vec{v}| = v = \sqrt{v_x^2 + v_y^2}$$

#### Direction of Velocity

$$\theta = \tan^{-1}\left(\frac{v_y}{v_x}\right)$$

> **★ Key Point**
>
> The velocity vector is always **tangent** to the path of motion. Its direction shows where the object is heading at that instant.
>
> The position vector points from the origin to the particle; the velocity vector points along the path. They are generally in **different** directions.

### Interactive Demo: Visualize Projectile Motion

See how 2D motion combines independent horizontal and vertical components.

---

### Acceleration in 2D

#### Average Acceleration

$$\vec{a}_{avg} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v}_2 - \vec{v}_1}{t_2 - t_1}$$

#### Instantaneous Acceleration

$$\boxed{\vec{a} = \frac{d\vec{v}}{dt} = \frac{dv_x}{dt}\hat{i} + \frac{dv_y}{dt}\hat{j} = a_x\hat{i} + a_y\hat{j}}$$

#### Magnitude of Acceleration

$$|\vec{a}| = a = \sqrt{a_x^2 + a_y^2}$$

> **◐ In simple terms · Acceleration Can Point Anywhere**
>
> Unlike 1D motion, in a plane the acceleration need **not** be along the velocity:
>
> - Component of $\vec{a}$ **along** $\vec{v}$ → changes the **speed**

> - Component of $\vec{a}$ **perpendicular to** $\vec{v}$ → changes the **direction**
>
> This is exactly why a projectile’s path curves, and why uniform circular motion has acceleration even at constant speed.

---

## The Calculus Ladder

Position, velocity and acceleration are connected by differentiation (going down) and integration (going up):

$$\vec{r} \xrightarrow{\ d/dt\ } \vec{v} \xrightarrow{\ d/dt\ } \vec{a}
\qquad\qquad
\vec{a} \xrightarrow{\ \int dt\ } \vec{v} \xrightarrow{\ \int dt\ } \vec{r}$$

Each component obeys the same rules you learned in [1D motion](../motion-1d/index.md) — differentiation and integration act on $x(t)$ and $y(t)$ separately. For the math machinery, see [Limits and Differentiation](../../../mathematics/limits-continuity-differentiability/index.md).

---

## Key Principle: Independence of Components

> **◐ In simple terms · Independence of Perpendicular Motions**
>
> In 2D motion, the x and y components are **independent** of each other:
>
> - Motion along x doesn’t affect motion along y

> - Motion along y doesn’t affect motion along x
>
> This allows us to analyze complex 2D problems as two separate 1D problems!

**Classic proof by experiment:** drop one ball and horizontally launch another from the same height at the same instant. Both hit the ground **together** — the horizontal launch velocity has zero effect on the vertical fall. Galileo figured this out four centuries ago; JEE still tests it every year.

### Equations for 2D Motion (constant acceleration)

**Along x-axis:**

- $v_x = u_x + a_x t$
- $x = u_x t + \frac{1}{2}a_x t^2$
- $v_x^2 = u_x^2 + 2a_x x$

**Along y-axis:**

- $v_y = u_y + a_y t$
- $y = u_y t + \frac{1}{2}a_y t^2$
- $v_y^2 = u_y^2 + 2a_y y$

These are just the [kinematic equations](../kinematic-equations/index.md) applied twice — once per axis.

### Vector Form (elegant and exam-ready)

When $\vec{a}$ is constant, the equations combine into vector statements:

$$\boxed{\vec{v} = \vec{u} + \vec{a}t \qquad \vec{s} = \vec{u}t + \frac{1}{2}\vec{a}t^2}$$

The third equation becomes a dot product: $v^2 = u^2 + 2\,\vec{a}\cdot\vec{s}$.

---

## Memory Tricks & Patterns

### The 3S Method: “Split — Solve — Stitch”

Every 2D problem is solved the same way:

1. **Split** the initial velocity and acceleration into x and y components
2. **Solve** each axis as an independent 1D problem
3. **Stitch** the answers back with Pythagoras: magnitude $= \sqrt{(\ )_x^2 + (\ )_y^2}$

### Mnemonic: “x and y are strangers”

The x-component never appears in a y-equation and vice versa. The **only** quantity they share is **time** $t$ — time is the bridge between the two axes. In most 2D problems, you find $t$ from one axis and use it in the other.

### Direction Memory Aid

- **Position** vector → points from origin to particle
- **Velocity** vector → tangent to the path
- **Acceleration** vector → points wherever the net force points ([Newton’s second law](../../laws-of-motion/newtons-second-law/index.md))

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Adding Magnitudes Instead of Vectors**
>
> A particle moves 3 m east, then 4 m north. Displacement = 7 m? **WRONG.**
>
> $$|\vec{s}| = \sqrt{3^2 + 4^2} = 5 \text{ m}$$
>
> Displacements add as **vectors**, not as numbers. Only the path length (distance) is $3 + 4 = 7$ m.

> **⚠ Trap #2: Average Speed vs Magnitude of Average Velocity**
>
> $$\text{Average speed} = \frac{\text{total distance}}{\text{time}} \qquad |\vec{v}_{avg}| = \frac{|\text{displacement}|}{\text{time}}$$
>
> For any curved path, distance > |displacement|, so **average speed > |average velocity|**. They are equal only for one-way straight-line motion. JEE options are designed to catch students who mix these up.

> **⚠ Trap #3: Assuming Acceleration Is Along Velocity**
>
> At the top of a projectile’s flight, velocity is purely **horizontal** but acceleration is purely **vertical** ($\vec{g}$, downward). The angle between them is 90°.
>
> Never assume $\vec{a} \parallel \vec{v}$ in 2D — that’s only guaranteed in straight-line motion.

> **⚠ Trap #4: Quadrant Errors with tan⁻¹**
>
> $\theta = \tan^{-1}(y/x)$ gives the same value for $(3, 4)$ and $(-3, -4)$, but these points are in **opposite** quadrants!
>
> **Rule:** compute the angle, then check the signs of $x$ and $y$ to place the vector in the correct quadrant. $(-3, -4)$ lies in the third quadrant: $\theta = 180° + 53° = 233°$ from the positive x-axis.

---

## Practice Problems (Level-wise)

### Level 1: Foundation (NCERT Type)

> **↗ Connection · Problem 1**
>
> A particle has position $\vec{r} = (3t^2 - 2)\hat{i} + (4t)\hat{j}$ m. Find velocity and acceleration at t = 1s.
>
> **Solution:**

> $\vec{v} = \frac{d\vec{r}}{dt} = 6t\hat{i} + 4\hat{j}$
>
> At t = 1s: $\vec{v} = 6\hat{i} + 4\hat{j}$ m/s
>
> Speed: $|\vec{v}| = \sqrt{36 + 16} = \sqrt{52} \approx$ **7.2 m/s**
>
> $\vec{a} = \frac{d\vec{v}}{dt} = 6\hat{i}$ **m/s²** (constant)

> **↗ Connection · Problem 2**
>
> An object moves from point A(2, 3) to B(5, 7) in 2 seconds. Find average velocity.
>
> **Solution:**

> $\vec{s} = (5-2)\hat{i} + (7-3)\hat{j} = 3\hat{i} + 4\hat{j}$ m
>
> $\vec{v}_{avg} = \frac{\vec{s}}{t} = \frac{3\hat{i} + 4\hat{j}}{2} = 1.5\hat{i} + 2\hat{j}$ m/s
>
> Magnitude: $|\vec{v}_{avg}| = \sqrt{1.5^2 + 2^2} =$ **2.5 m/s**

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> A particle starts with velocity $\vec{u} = 3\hat{i} + 4\hat{j}$ m/s and moves with constant acceleration $\vec{a} = 0.4\hat{i} + 0.3\hat{j}$ m/s². Find its speed at t = 10 s.
>
> **Solution:**

> Apply $\vec{v} = \vec{u} + \vec{a}t$ component-wise:
>
> - $v_x = 3 + 0.4(10) = 7$ m/s

> - $v_y = 4 + 0.3(10) = 7$ m/s
>
> Speed $= \sqrt{7^2 + 7^2} = 7\sqrt{2} \approx$ **9.9 m/s**
>
> **Watch out:** $\vec{u}$ is along $3:4$ but $\vec{a}$ is along $4:3$ — they are NOT parallel, so you cannot just add magnitudes. Working component-wise is the only safe route.

> **↗ Connection · Problem 4**
>
> A particle moves so that $\vec{r} = 2t\,\hat{i} + t^2\,\hat{j}$ m. At what time does its velocity make a 45° angle with the x-axis?
>
> **Solution:**

> $\vec{v} = \frac{d\vec{r}}{dt} = 2\hat{i} + 2t\,\hat{j}$
>
> For 45°: $\tan 45° = \frac{v_y}{v_x} = \frac{2t}{2} = t$
>
> So $t =$ **1 s** (at that instant $\vec{v} = 2\hat{i} + 2\hat{j}$ m/s, speed $2\sqrt{2}$ m/s)

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 5**
>
> A particle moves with $\vec{r} = R\cos(\omega t)\,\hat{i} + R\sin(\omega t)\,\hat{j}$, where $R$ and $\omega$ are constants. Show that (a) the speed is constant, (b) the acceleration is directed toward the origin, and (c) $\vec{v} \perp \vec{a}$.
>
> **Solution:**
>
> **(a)** $\vec{v} = \frac{d\vec{r}}{dt} = -R\omega\sin(\omega t)\,\hat{i} + R\omega\cos(\omega t)\,\hat{j}$
>
> $$|\vec{v}| = R\omega\sqrt{\sin^2\omega t + \cos^2\omega t} = R\omega = \text{constant}$$
>
> **(b)** $\vec{a} = \frac{d\vec{v}}{dt} = -R\omega^2\cos(\omega t)\,\hat{i} - R\omega^2\sin(\omega t)\,\hat{j} = -\omega^2\,\vec{r}$
>
> The minus sign means $\vec{a}$ points **opposite to** $\vec{r}$, i.e., toward the origin, with magnitude $\omega^2 R$.
>
> **(c)** $\vec{v}\cdot\vec{a} = R^2\omega^3\sin\omega t\cos\omega t - R^2\omega^3\cos\omega t\sin\omega t = 0$
>
> So velocity and acceleration are perpendicular at every instant.
>
> **Recognize it:** this IS uniform [circular motion](../circular-motion/index.md) — you just derived the centripetal acceleration $a = \omega^2 R$ from pure calculus.

---

## Quick Revision Box

| Quantity | Vector Form | Magnitude | Direction |
| --- | --- | --- | --- |
| Position | $\vec{r} = x\hat{i} + y\hat{j}$ | $\sqrt{x^2 + y^2}$ | $\tan^{-1}(y/x)$, check quadrant |
| Displacement | $\vec{s} = \Delta x\,\hat{i} + \Delta y\,\hat{j}$ | $\sqrt{\Delta x^2 + \Delta y^2}$ | along the chord A → B |
| Velocity | $\vec{v} = v_x\hat{i} + v_y\hat{j}$ | $\sqrt{v_x^2 + v_y^2}$ | tangent to path |
| Acceleration | $\vec{a} = a_x\hat{i} + a_y\hat{j}$ | $\sqrt{a_x^2 + a_y^2}$ | along net force |
| Constant-$\vec{a}$ motion | $\vec{v} = \vec{u} + \vec{a}t$ | $\vec{s} = \vec{u}t + \frac{1}{2}\vec{a}t^2$ | solve each axis separately |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **One 2D problem = two 1D problems.** Split into components, solve each axis with the familiar kinematic equations, stitch back with Pythagoras.

> 2. **Perpendicular motions are independent** — the only shared quantity is time $t$.

> 3. **Velocity is tangent to the path; acceleration follows the force.** They need not be parallel — that’s why paths curve.

> 4. **Distance ≥ |displacement|** and **average speed ≥ |average velocity|** — equality only for one-way straight-line motion.

> 5. Given $\vec{r}(t)$? **Differentiate** for $\vec{v}$ and $\vec{a}$. Given $\vec{a}(t)$? **Integrate** back up.
>
> **“Master the split, and every 2D monster becomes two 1D kittens.”**

---

## Related Topics

### Apply These Ideas Next

- [Projectile Motion](../projectile-motion/index.md) — 2D motion under gravity: the most-asked application
- [Circular Motion](../circular-motion/index.md) — motion along a curved path with changing velocity direction
- [Relative Velocity](../relative-velocity/index.md) — river-boat and rain-man problems are pure vector subtraction

### Supporting Tools

- [Kinematic Equations](../kinematic-equations/index.md) — the 1D engine you run on each axis
- [Vector Algebra](../../../mathematics/vector-algebra/index.md) — dot products, components, and unit vectors in full detail

---

From TestGuru · our mock-test platform

## You've read Motion in a Plane.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fmotion-2d%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/motion-2d/",this.page.identifier="/physics/kinematics/motion-2d/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="projectileMotion" id="anim-projectileMotion-1795396423711015084"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-projectileMotion-1795396423711015084")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/motion-2d/](https://jeenotes.in/physics/kinematics/motion-2d/) · raw HTML: `offline/physics/kinematics/motion-2d/index.html`_
