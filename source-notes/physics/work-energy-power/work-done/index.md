---
title: "Work Done by Forces"
source: "https://jeenotes.in/physics/work-energy-power/work-done/"
description: "Master work done for JEE: constant and variable forces, sign conventions, work by gravity, spring and friction, with solved problems up to JEE Advanced level."
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 10"
html: "../../../../offline/physics/work-energy-power/work-done/index.html"
extracted: "2026-11-23"
---

> Master work done for JEE: constant and variable forces, sign conventions, work by gravity, spring and friction, with solved problems up to JEE Advanced level.

## Prerequisites

Before studying this topic, make sure you understand:

- [Motion in a Plane](../../kinematics/motion-2d/index.md) — vectors and the dot product
- [Newton’s Laws of Motion](../../laws-of-motion/index.md) — understanding forces

---

## The Hook: The Hardest Zero You’ll Ever Earn

> **★ Key point · Connect: Real Life → Physics**
>
> Think of the plane-hanging stunt in **Mission: Impossible** — Tom Cruise gripping the door of a climbing aircraft, muscles screaming, holding on for his life.
>
> **Question:** How much work does his grip force do while he simply hangs there against the door?
>
> **Answer: ZERO.** No displacement along the force, no work — no matter how exhausted he gets. Physics defines work with brutal precision: a force must produce displacement along its own direction, or it earns nothing.
>
> This gap between “effort” and “work” is the number one source of trap options in JEE. Let’s close it permanently.

**JEE Weightage:** Work, Energy and Power contributes 1-2 questions in JEE Main every year, and the sign of work done by individual forces is a favorite one-mark filter.

---

## The Core Concept

**Work** in physics has a precise meaning different from everyday usage. Work is done when a force causes displacement along its direction. This scalar quantity is fundamental to understanding energy transfer: positive work pumps energy *into* a body, negative work drains energy *out*.

## Work by a Constant Force

### Definition

Work done by a constant force $\vec{F}$ over displacement $\vec{s}$:

$$\boxed{W = \vec{F} \cdot \vec{s} = Fs\cos\theta}$$

where $\theta$ is the angle between $\vec{F}$ and $\vec{s}$.

### Understanding the Formula

- $F$ = magnitude of force (N)
- $s$ = magnitude of displacement (m)
- $\cos\theta$ = determines how much of the force is in the direction of motion
- Unit: **Joule (J)** = N·m

> **★ Physical Interpretation**
>
> Work equals the component of force along the displacement times the displacement:
>
> $$W = (F\cos\theta) \times s = F_{\parallel} \times s$$
>
> Equivalently, it’s the full force times the component of displacement along the force. Both views give the same dot product.

### In Component Form

If $\vec{F} = F_x\hat{i} + F_y\hat{j}$ and $\vec{s} = s_x\hat{i} + s_y\hat{j}$:

$$W = F_x s_x + F_y s_y$$

This is often the fastest route when JEE gives vectors directly.

### Units of Work and Energy

| Unit | Value | Used for |
| --- | --- | --- |
| Joule (J) | 1 N·m | SI standard |
| erg | $10^{-7}$ J | CGS system |
| electron-volt (eV) | $1.6 \times 10^{-19}$ J | Atomic physics |
| kilowatt-hour (kWh) | $3.6 \times 10^{6}$ J | Electricity bills |

### Interactive Demo: Visualize Work Done

Explore how force and displacement combine to produce work.

---

## Sign Convention

The sign of work tells us about energy transfer:

| Condition | $\cos\theta$ | Work | Meaning |
| --- | --- | --- | --- |
| $\theta < 90°$ | Positive | **Positive** | Force aids motion, energy added |
| $\theta = 90°$ | Zero | **Zero** | Force perpendicular to motion |
| $\theta > 90°$ | Negative | **Negative** | Force opposes motion, energy removed |

### Examples

1. **Lifting an object**: Work by you is positive, work by gravity is negative
2. **Pushing a box on floor**: Work by push is positive, work by friction is negative
3. **[Circular motion](../../kinematics/circular-motion/index.md)**: Work by centripetal force is zero (always perpendicular)
4. **Porter carrying luggage on level ground**: Work by the (vertical) supporting force is zero — the displacement is horizontal

### Memory Trick: “Helper, Opposer, Bystander”

- Force **helps** the motion ($\theta < 90°$) → positive work
- Force **opposes** the motion ($\theta > 90°$) → negative work
- Force just **stands by** at 90° → zero work

One glance at the angle, and the sign is decided before any calculation.

---

## Work by Variable Force

When force varies with position, we use integration:

$$\boxed{W = \int_A^B \vec{F} \cdot d\vec{r}}$$

For one-dimensional motion:

$$W = \int_{x_1}^{x_2} F(x)\,dx$$

### Graphical Interpretation

**Work = Area under F-x curve**

- Area above x-axis → Positive work
- Area below x-axis → Negative work

> **◐ In simple terms · Calculus Connection**
>
> This integral represents the sum of infinitesimal work $dW = \vec{F} \cdot d\vec{r}$ done over the path. If you can find an area or evaluate an integral (see [Integral Calculus](../../../mathematics/integral-calculus/index.md)), you can find work — even for the messiest force.

---

## Work Done by Common Forces

### 1. Gravity

**Falling through height h:**

$$W_{gravity} = +mgh$$

**Rising through height h:**

$$W_{gravity} = -mgh$$

> **★ Key Point**
>
> Work by gravity depends only on **vertical displacement**, not on the path taken. Slide down a curvy water slide or drop straight down — if the height fallen is the same, $W_{gravity}$ is the same. This path independence makes gravity a **conservative force**, the idea behind [potential energy](../potential-energy/index.md).

### 2. Spring Force

For a spring stretched or compressed by $x$ from natural length:

$$W_{spring} = -\frac{1}{2}kx^2$$

Negative for **both** stretching and compression — the spring force always points back toward natural length, opposing the displacement.

**General case** (from deformation $x_1$ to deformation $x_2$):

$$\boxed{W_{spring} = \frac{1}{2}k\left(x_1^2 - x_2^2\right)}$$

**Work done BY external force** (moving slowly, no KE change): $W_{external} = -W_{spring} = +\frac{1}{2}k(x_2^2 - x_1^2)$

### 3. Friction

For [kinetic friction](../../laws-of-motion/friction/index.md) over sliding distance $s$:

$$W_{friction} = -f_k \cdot s = -\mu_k N \cdot s$$

Usually negative, because friction opposes relative sliding.

> **◐ In simple terms · Advanced Nuance: Friction Isn't ALWAYS Negative**
>
> Place a box gently on a moving conveyor belt: friction from the belt **accelerates the box forward** — friction does **positive** work on the box!
>
> The safe statement: the **total** work done by friction on the *pair* of surfaces equals $-f_k \times (\text{relative sliding distance})$, which is always negative (lost as heat). On an *individual* body, friction’s work can be positive, negative, or zero. JEE Advanced loves this distinction.

### 4. Normal Force

$$W_{normal} = 0$$

The normal force is perpendicular to the surface, and for motion along the surface, it does no work. (Exception: if the surface itself moves — like an elevator floor pushing you upward — normal force can do work.)

---

## Formula Summary Table

| Force | Work Formula | Sign | Notes |
| --- | --- | --- | --- |
| Constant force | $Fs\cos\theta$ | any | Definition |
| Gravity (falling $h$) | $+mgh$ | + | Path independent |
| Gravity (rising $h$) | $-mgh$ | − | Path independent |
| Spring (from natural length) | $-\frac{1}{2}kx^2$ | − | Stretch or compress |
| Spring ($x_1 \to x_2$) | $\frac{1}{2}k(x_1^2 - x_2^2)$ | any | General form |
| Kinetic friction (usual case) | $-f_k s$ | − | Path dependent; see nuance above |
| Normal force (fixed surface) | $0$ | 0 | Perpendicular |
| Centripetal force | $0$ | 0 | Perpendicular |
| Variable force | $\int F(x)\,dx$ | any | Area under F-x graph |

---

## Worked Example: Multiple Forces Together

> **↗ Connection · Problem**
>
> A 5 kg block is pulled 4 m along a horizontal floor by a 30 N force directed at 37° above the horizontal. If $\mu_k = 0.2$, find the net work done on the block. (g = 10 m/s², cos 37° = 0.8, sin 37° = 0.6)
>
> **Solution:**
>
> 1. **Work by applied force:**
>
>    $$W_F = F s\cos 37° = 30 \times 4 \times 0.8 = 96 \text{ J}$$

> 2. **Normal force** (vertical equilibrium; the upward component of the pull reduces N):
>
>    $$N = mg - F\sin 37° = 50 - 30(0.6) = 32 \text{ N}$$

> 3. **Work by friction:**
>
>    $$W_f = -\mu_k N s = -0.2 \times 32 \times 4 = -25.6 \text{ J}$$

> 4. **Work by gravity and normal force:** both zero (perpendicular to displacement)

> 5. **Net work:**
>
>    $$W_{net} = 96 - 25.6 + 0 + 0 = \boxed{70.4 \text{ J}}$$
>
> By the [work-energy theorem](../work-energy-theorem/index.md), this 70.4 J shows up as the block’s gain in kinetic energy.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Effort Is Not Work**
>
> Holding a 20 kg suitcase stationary for 10 minutes: work done by you = **0** (no displacement).
>
> Carrying it horizontally at constant speed: work by your (vertical) supporting force = **0** (force perpendicular to displacement).
>
> If either displacement or the parallel force component is zero, work is zero — regardless of how tired you feel.

> **⚠ Trap #2: Using Total Path Length for Gravity**
>
> A 2 kg ball rolls 10 m down a ramp inclined at 30°. Students compute $W_{gravity} = mg \times 10$. **WRONG.**
>
> Gravity is vertical, so only the **vertical drop** counts:
>
> $$W_{gravity} = mg(10\sin 30°) = 2 \times 10 \times 5 = 100 \text{ J}$$
>
> Friction is the opposite: it acts along the surface, so friction uses the full **path length**, never the height.

> **⚠ Trap #3: Spring Work Sign Confusion**
>
> Whether you stretch a spring by $x$ or compress it by $x$, work done **by the spring** is $-\frac{1}{2}kx^2$ — negative both times, because the spring force always opposes deformation.
>
> The **external agent** does $+\frac{1}{2}kx^2$. Read carefully which one the question asks — the sign flip is a deliberate trap.

> **⚠ Trap #4: 'Work Is a Scalar, So It Can't Be Negative'**
>
> Scalar means “no direction,” not “no sign.” Work, a scalar, is routinely negative — friction’s work, gravity’s work on rising bodies. Temperature in °C is another negative-capable scalar.
>
> The sign of work encodes the **direction of energy flow**, not a spatial direction.

---

## Practice Problems (Level-wise)

### Level 1: Foundation (NCERT Type)

> **↗ Connection · Problem 1**
>
> A 10 N force acts at 60° to the horizontal on a 2 kg object, displacing it 5 m horizontally. Find the work done by the force.
>
> **Solution:**
>
> $$W = Fs\cos\theta = 10 \times 5 \times \cos 60° = 10 \times 5 \times 0.5 = \boxed{25 \text{ J}}$$
>
> Note: the mass (2 kg) is a red herring — work by a given force needs only $F$, $s$, and $\theta$.

> **↗ Connection · Problem 2**
>
> A force $\vec{F} = (3\hat{i} + 4\hat{j})$ N displaces a particle from point (1, 2) m to (5, 5) m. Find the work done.
>
> **Solution:**

> Displacement: $\vec{s} = (5-1)\hat{i} + (5-2)\hat{j} = 4\hat{i} + 3\hat{j}$ m
>
> $$W = \vec{F}\cdot\vec{s} = (3)(4) + (4)(3) = 12 + 12 = \boxed{24 \text{ J}}$$

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> Find the work done by a spring (k = 200 N/m) when it is stretched from x = 0.1 m to x = 0.3 m from natural length.
>
> **Solution:**
>
> $$W_{spring} = \frac{1}{2}k(x_1^2 - x_2^2) = \frac{1}{2}(200)(0.1^2 - 0.3^2) = 100(0.01 - 0.09) = \boxed{-8 \text{ J}}$$
>
> The spring resists further stretching, so its work is negative. The external agent does $+8$ J.
>
> **Common error:** computing $\frac{1}{2}k(x_2 - x_1)^2 = 100(0.04) = 4$ J — wrong formula! Squares of limits, not square of the difference.

> **↗ Connection · Problem 4**
>
> A 2 kg block slides 3 m down a rough incline (angle 30°, $\mu_k = 0.3$). Calculate the work done by each force. (g = 10 m/s², $\sqrt{3} \approx 1.73$)
>
> **Solution:**

> **Gravity** (height dropped $h = 3\sin 30° = 1.5$ m):
>
> $$W_{gravity} = mgh = 2 \times 10 \times 1.5 = +30 \text{ J}$$
>
> **Normal force:** $N = mg\cos 30° = 20 \times \frac{\sqrt{3}}{2} = 17.3$ N, but $W_N = 0$ (perpendicular to motion)
>
> **Friction:** $f_k = \mu_k N = 0.3 \times 17.3 = 5.2$ N, acting up the incline while the block slides down:
>
> $$W_{friction} = -f_k \times s = -5.2 \times 3 = -15.6 \text{ J}$$
>
> **Net work:** $W_{net} = 30 - 15.6 + 0 = \boxed{+14.4 \text{ J}}$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 5**
>
> A force $\vec{F} = y\hat{i} + x\hat{j}$ (in newtons, with $x, y$ in meters) acts on a particle moving in the x-y plane. Find the work done in taking the particle from (0, 0) to (2, 3) along:

> (a) path 1 — along the x-axis to (2, 0), then parallel to the y-axis to (2, 3);

> (b) path 2 — the straight line joining (0, 0) to (2, 3).
>
> **Solution:**

> Work: $W = \int \vec{F}\cdot d\vec{r} = \int (y\,dx + x\,dy)$
>
> **(a) Path 1:**
>
> - Leg 1, (0,0) → (2,0): here $y = 0$ and $dy = 0$, so $W_1 = 0$

> - Leg 2, (2,0) → (2,3): here $x = 2$ and $dx = 0$, so $W_2 = \int_0^3 2\,dy = 6$ J

> - Total: $W = 0 + 6 = \boxed{6 \text{ J}}$
>
> **(b) Path 2:** the line is $y = \frac{3}{2}x$, so $dy = \frac{3}{2}dx$:
>
> $$W = \int_0^2 \left[\frac{3}{2}x + x\cdot\frac{3}{2}\right]dx = \int_0^2 3x\,dx = \frac{3x^2}{2}\Big|_0^2 = \boxed{6 \text{ J}}$$
>
> **Same answer for both paths!** Because $y\,dx + x\,dy = d(xy)$, this force is **conservative**, and $W = \Delta(xy) = (2)(3) - 0 = 6$ J for ANY path. Spotting the exact differential turns a 5-minute integral into a 10-second answer.

---

## Quick Revision Box

| Situation | Formula / Approach |
| --- | --- |
| Constant force | $W = Fs\cos\theta = \vec{F}\cdot\vec{s}$ |
| Force and displacement as vectors | $W = F_x s_x + F_y s_y$ |
| Variable force (1D) | $W = \int F\,dx$ = area under F-x graph |
| Gravity | $\pm mgh$ ($h$ = vertical drop only) |
| Spring from natural length | $W_{spring} = -\frac{1}{2}kx^2$ |
| Spring, general | $W_{spring} = \frac{1}{2}k(x_1^2 - x_2^2)$ |
| Kinetic friction (block on fixed surface) | $-\mu_k N s$ (full path length) |
| Normal / centripetal force | $0$ (perpendicular) |
| Sign check | Helper +, Opposer −, Bystander (90°) 0 |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Work = $Fs\cos\theta$ — always ask “what is the angle?”** before anything else. The sign is decided by geometry, not effort.

> 2. **Zero displacement or perpendicular force → zero work**, no matter how large the force or how great the struggle.

> 3. **Gravity counts height; friction counts path.** Conservative forces care only about endpoints; friction cares about every meter traveled.

> 4. **Variable force → integrate**, or read the area under the F-x graph.

> 5. The net work done on a body is deposited directly into its kinetic energy — the [work-energy theorem](../work-energy-theorem/index.md), coming up next.
>
> **“Physics pays wages only for displacement along the force — sweat alone earns zero joules.”**

---

## Related Topics

- [Kinetic Energy](../kinetic-energy/index.md) — where the net work goes
- [Work-Energy Theorem](../work-energy-theorem/index.md) — $W_{net} = \Delta KE$, the master link
- [Potential Energy](../potential-energy/index.md) — defined from work done by conservative forces
- [Power](../power/index.md) — the rate of doing work
- [Friction](../../laws-of-motion/friction/index.md) — the force behind most negative work

---

From TestGuru · our mock-test platform

## You've read Work Done by Forces.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=work-energy-power&tg_exam=jee-main&tg_page=%2Fphysics%2Fwork-energy-power%2Fwork-done%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/work-energy-power/work-done/",this.page.identifier="/physics/work-energy-power/work-done/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="workDone" id="anim-workDone-1795396424537984231"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-workDone-1795396424537984231")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/work-energy-power/work-done/](https://jeenotes.in/physics/work-energy-power/work-done/) · raw HTML: `offline/physics/work-energy-power/work-done/index.html`_
