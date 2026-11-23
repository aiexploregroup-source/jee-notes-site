---
title: "Projectile Motion"
source: "https://jeenotes.in/physics/kinematics/projectile-motion/"
description: "Master horizontal and oblique projection for JEE Physics"
updated: "2026-08-01"
reading_time: "6 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 10"
html: "../../../../offline/physics/kinematics/projectile-motion/index.html"
extracted: "2026-11-23"
---

> Master horizontal and oblique projection for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Motion in a Plane](../motion-2d/index.md) - 2D vector motion
- [Kinematic Equations](../kinematic-equations/index.md) - for uniform acceleration

## What is Projectile Motion?

A **projectile** is any object that is thrown into the air and moves under the influence of gravity alone (no air resistance).

> **★ Key point · Think Spider-Man!**
>
> Remember when **Spider-Man** swings between buildings in *No Way Home* or *Across the Spider-Verse*? When he releases his web at the highest point of his swing and flies through the air — that’s projectile motion! His path traces a perfect parabola until he shoots another web.

**Key Characteristics:**

- Horizontal motion: **uniform velocity** (no acceleration)
- Vertical motion: **uniformly accelerated** ($a = g$ downward)
- Path: **Parabola**

> **◐ In simple terms · Independence Principle**
>
> The horizontal and vertical motions are **completely independent**. What happens in x doesn’t affect y, and vice versa.
>
> **Movie Connection:** In *Pathaan* (2023), when Shah Rukh Khan jumps from helicopters or between buildings, his horizontal speed stays constant while gravity pulls him down — classic projectile motion!

## Interactive Demo

Explore projectile motion with this full-featured simulator. Adjust parameters and observe how they affect the trajectory:

> **★ Key point · How to Use This Animation**
>
> **Controls:**
>
> - **Initial Velocity (u):** Drag the slider to set launch speed (10-100 m/s)

> - **Launch Angle:** Set the angle of projection (0-90 degrees)

> - **Gravity Toggle:** Switch between Earth (g = 9.8 m/s squared) and Moon (g = 1.6 m/s squared)

> - **Play/Pause:** Start or pause the animation

> - **Reset:** Return projectile to starting position
>
> ## **What to Observe:**
>
> ## **Blue arrow (vx):** Horizontal velocity stays CONSTANT throughout the flight
>
> ## **Green arrow (vy):** Vertical velocity decreases going up, becomes zero at apex, then increases downward
>
> ## **Red dashed arrow (v):** Resultant velocity (vector sum of vx and vy)
>
> ## **Green dot at apex:** Maximum height where vy = 0
>
> **Orange range marker:** Horizontal distance covered
>
> **Try These Experiments:**
>
> 1. Set angle to 45 degrees and note the range. Then try 30 degrees and 60 degrees - they have the SAME range!

> 2. Enable “Show complementary angle” to see both trajectories simultaneously

> 3. Switch to Moon gravity - notice how much farther the projectile travels

> 4. At any angle, observe that vx never changes while vy constantly decreases

## Types of Projectile Motion

### 1. Horizontal Projection

Object is thrown **horizontally** from a height $h$ with velocity $u$.

> **★ Key point · Pushpa 2 Cliff Scene**
>
> In *Pushpa 2: The Rule*, when objects (or people!) are thrown horizontally off a cliff, they don’t fall straight down — they travel forward while falling. The horizontal throw determines how FAR they land, while gravity determines how FAST they fall!

**Initial Conditions:**

- $u_x = u$ (horizontal)
- $u_y = 0$ (no vertical component)

**Equations:**

| Direction | Motion Type | Equations |
| --- | --- | --- |
| Horizontal (x) | Uniform | $x = ut$ |
| Vertical (y) | Accelerated | $y = \frac{1}{2}gt^2$, $v_y = gt$ |

**Key Formulas:**

$$\boxed{T = \sqrt{\frac{2h}{g}}}$$

$$\boxed{R = u\sqrt{\frac{2h}{g}} = uT}$$

$$\boxed{v_{final} = \sqrt{u^2 + 2gh}}$$

> **★ Key point · Time of Flight**
>
> Time of flight depends **only on height**, not on horizontal velocity!

### 2. Oblique Projection (Ground to Ground)

Object is thrown at angle $\theta$ with horizontal, with initial velocity $u$.

**Initial Components:**

- $u_x = u\cos\theta$
- $u_y = u\sin\theta$

**At any time t:**

- $x = (u\cos\theta)t$
- $y = (u\sin\theta)t - \frac{1}{2}gt^2$
- $v_x = u\cos\theta$ (constant)
- $v_y = u\sin\theta - gt$

## Key Formulas for Oblique Projection

### Time of Flight

$$\boxed{T = \frac{2u\sin\theta}{g}}$$

Time to reach maximum height = $\frac{T}{2} = \frac{u\sin\theta}{g}$

### Maximum Height

$$\boxed{H_{max} = \frac{u^2\sin^2\theta}{2g}}$$

### Horizontal Range

$$\boxed{R = \frac{u^2\sin 2\theta}{g}}$$

### Equation of Trajectory

$$\boxed{y = x\tan\theta - \frac{gx^2}{2u^2\cos^2\theta}}$$

This is a **parabola** (quadratic in x).

Alternative form: $y = x\tan\theta\left(1 - \frac{x}{R}\right)$

## Important Properties

### Maximum Range

Range is maximum when $\sin 2\theta = 1$, i.e., $\theta = 45°$

$$R_{max} = \frac{u^2}{g}$$

> **★ Key point · Jawan Train Scene**
>
> In *Jawan* (2023), remember when SRK throws objects or jumps between train cars? For maximum horizontal distance, 45° is the magic angle! That’s why athletes in long jump or javelin throw aim for approximately this angle.

### Complementary Angles

For angles $\theta$ and $(90° - \theta)$:

- **Same range** (since $\sin 2\theta = \sin 2(90° - \theta)$)
- Different heights and times

| Angle | Range | Height | Time |
| --- | --- | --- | --- |
| $30°$ | $R$ | $H_1$ | $T_1$ |
| $60°$ | $R$ (same) | $H_2 > H_1$ | $T_2 > T_1$ |

### Velocity at Any Point

At height $h$:

$$v = \sqrt{u^2 - 2gh}$$

At any time:

$$v = \sqrt{v_x^2 + v_y^2} = \sqrt{u^2\cos^2\theta + (u\sin\theta - gt)^2}$$

### Velocity Direction

$$\tan\alpha = \frac{v_y}{v_x} = \frac{u\sin\theta - gt}{u\cos\theta}$$

where $\alpha$ is angle with horizontal.

> **⚠ Trap · Common Mistake**
>
> Don’t confuse:
>
> - Height at time $t$: $y = u_y t - \frac{1}{2}gt^2$

> - Maximum height: $H_{max} = \frac{u^2\sin^2\theta}{2g}$

## Special Cases

### Projection from a Height

If projectile is launched from height $h$ above ground:

**Time of flight:** Solve $h + (u\sin\theta)T - \frac{1}{2}gT^2 = 0$

$$T = \frac{u\sin\theta + \sqrt{u^2\sin^2\theta + 2gh}}{g}$$

### Projection on Inclined Plane

For a plane inclined at angle $\alpha$:

- Range along plane: $R = \frac{2u^2\sin(\theta - \alpha)\cos\theta}{g\cos^2\alpha}$
- Maximum range: at $\theta = \frac{\pi}{4} + \frac{\alpha}{2}$

## Summary Table

| Quantity | Horizontal Projection | Oblique Projection |
| --- | --- | --- |
| Initial $v_x$ | $u$ | $u\cos\theta$ |
| Initial $v_y$ | $0$ | $u\sin\theta$ |
| Time of flight | $\sqrt{\frac{2h}{g}}$ | $\frac{2u\sin\theta}{g}$ |
| Max height | — | $\frac{u^2\sin^2\theta}{2g}$ |
| Range | $u\sqrt{\frac{2h}{g}}$ | $\frac{u^2\sin 2\theta}{g}$ |

## Practice Problems

> **↗ Connection · Problem 1**
>
> A ball is thrown horizontally from a 45 m high cliff with speed 20 m/s. Find time of flight and range. (g = 10 m/s²)
>
> **Solution:**

> $T = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 45}{10}} = \sqrt{9} = $ **3 s**
>
> $R = uT = 20 \times 3 = $ **60 m**

> **↗ Connection · Problem 2**
>
> A projectile is launched at 30° with 40 m/s. Find range, max height, and time of flight. (g = 10 m/s²)
>
> **Solution:**

> $T = \frac{2u\sin\theta}{g} = \frac{2 \times 40 \times 0.5}{10} = $ **4 s**
>
> $H_{max} = \frac{u^2\sin^2\theta}{2g} = \frac{1600 \times 0.25}{20} = $ **20 m**
>
> $R = \frac{u^2\sin 2\theta}{g} = \frac{1600 \times \sin 60°}{10} = \frac{1600 \times 0.866}{10} ≈ $ **138.6 m**

> **↗ Connection · Problem 3**
>
> For what angle of projection is range equal to maximum height?
>
> **Solution:**

> $R = H_{max}$

> $\frac{u^2\sin 2\theta}{g} = \frac{u^2\sin^2\theta}{2g}$

> $2\sin\theta\cos\theta = \frac{\sin^2\theta}{2}$

> $4\cos\theta = \sin\theta$

> $\tan\theta = 4$

> $\theta = \tan^{-1}(4) ≈ $ **76°**

---

## Related Topics

### Within Kinematics

- [Kinematic Equations](../kinematic-equations/index.md) — The foundation for projectile formulas
- [Motion in a Plane](../motion-2d/index.md) — 2D vectors needed here
- [Relative Velocity](../relative-velocity/index.md) — Projectiles observed from moving frames
- [Circular Motion](../circular-motion/index.md) — Another type of 2D motion

### Connected Chapters

- [Newton’s Laws](../../laws-of-motion/index.md) — Forces during projectile motion
- [Work-Energy](../../work-energy-power/conservation-energy/index.md) — Energy approach to projectile problems
- [Gravitation](../../gravitation/index.md) — Why projectiles follow parabolic paths

### Math Connections

- [Trigonometry](../../../mathematics/trigonometry/index.md) — Sin, cos for component resolution
- [Parabola](../../../mathematics/coordinate-geometry/index.md) — The shape of projectile trajectory
- [Differentiation](../../../mathematics/limits-continuity-differentiability/index.md) — For max height, range optimization

---

From TestGuru · our mock-test platform

## You've read Projectile Motion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fprojectile-motion%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/projectile-motion/",this.page.identifier="/physics/kinematics/projectile-motion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="projectileMotionInteractive" id="anim-projectileMotionInteractive-1795396423718339689"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-projectileMotionInteractive-1795396423718339689")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/projectile-motion/](https://jeenotes.in/physics/kinematics/projectile-motion/) · raw HTML: `offline/physics/kinematics/projectile-motion/index.html`_
