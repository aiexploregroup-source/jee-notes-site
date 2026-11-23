---
title: "Kinematic Equations"
source: "https://jeenotes.in/physics/kinematics/kinematic-equations/"
description: "Master the four equations of uniformly accelerated motion for JEE"
updated: "2026-08-01"
reading_time: "6 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 10"
html: "../../../../offline/physics/kinematics/kinematic-equations/index.html"
extracted: "2026-11-23"
---

> Master the four equations of uniformly accelerated motion for JEE

## Prerequisites

Before diving in, make sure you understand:

- [Motion in a Straight Line](../motion-1d/index.md) — displacement, velocity, acceleration basics
- [Frame of Reference](../frame-of-reference/index.md) — coordinate systems and sign conventions

---

## The Setup: Why This Matters

> **★ Key point · Connect: Real Life → Physics**
>
> Imagine Virat Kohli hitting a six. The ball leaves the bat, rises, slows down, stops momentarily, then falls back.
>
> **Can you predict:**
>
> - How HIGH will it go?

> - How LONG will it stay in air?

> - How FAST when it lands?
>
> That’s EXACTLY what kinematic equations do — predict motion when acceleration is constant!

---

## The Core: Four Magical Equations

When acceleration is **constant**, we have 5 variables and 4 equations. Master these, and you master 30% of Kinematics!

| Symbol | What it means | Memory Trick |
| --- | --- | --- |
| $u$ | Initial velocity | **U** = “You start here” |
| $v$ | Final velocity | **V** = “Velocity at the end” |
| $a$ | Acceleration | **A** = “Accelerating forward” |
| $t$ | Time | **T** = “Time elapsed” |
| $s$ | Displacement | **S** = “Space covered” |

---

## Interactive: Visualize the Equations

Adjust the sliders to see how initial velocity and acceleration affect the s-t, v-t, and a-t graphs:

---

## The “SUVAT” Equations

### Equation 1: When you know time, need final velocity

$$\boxed{v = u + at}$$

**Memory Trick:** “**V**elocity = **U** + **A**cceleration × **T**ime” → v = u + at

**When to use:** Given $u$, $a$, $t$ → Find $v$

---

### Equation 2: When you know time, need displacement

$$\boxed{s = ut + \frac{1}{2}at^2}$$

**Memory Trick:** “**S**tart with **U**×**T**, then add **½A**×**T**²” → s = ut + ½at²

**When to use:** Given $u$, $a$, $t$ → Find $s$

---

### Equation 3: When time is NOT given

$$\boxed{v^2 = u^2 + 2as}$$

**Memory Trick:** “**V-squared** minus **U-squared** equals **2AS**” (like a chant!)

**When to use:** Given $u$, $v$, $a$ (no time!) → Find $s$

**Pro Tip:** This is the MOST USED equation in JEE because many problems don’t give time!

---

### Equation 4: Average method (backup equation)

$$\boxed{s = \frac{(u + v)}{2} \times t}$$

**When to use:** When you know both initial AND final velocity

---

## The Shortcut: Which Equation to Pick?

> **★ Key point · 5-Second Selection Rule**
>
> **Step 1:** List what’s GIVEN and what’s NEEDED
>
> **Step 2:** Find the equation that has EXACTLY those variables
>
> | Missing Variable | Use Equation |

> | --- | --- |

> | $v$ not in question | $s = ut + \frac{1}{2}at^2$ |

> | $t$ not in question | $v^2 = u^2 + 2as$ |

> | $s$ not in question | $v = u + at$ |

> | $a$ not in question | $s = \frac{(u+v)}{2}t$ |
>
> **“The variable you DON’T need should NOT be in the equation you choose!”**

---

## Special Weapon: nth Second Formula

For displacement in the **nth second only** (not total):

$$\boxed{S_n = u + \frac{a}{2}(2n - 1)}$$

**Memory Trick:** “**u + (a/2) × (2n - 1)**” — just remember the odd number pattern!

### Why is this powerful?

In JEE, they often ask: “Distance in 3rd second = ?” or “Distance in 5th second = ?”

Without this formula, you’d calculate $s_5 - s_4$. With it, direct answer!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Sign Convention Errors**
>
> **Problem:** Ball thrown up with 20 m/s, find max height.
>
> **WRONG approach:**

> $v^2 = u^2 + 2as$

> $0 = 400 + 2(10)s$ → $s = -20$ m (negative?? 😱)
>
> **CORRECT approach:**

> When going UP, $a = -g = -10$ m/s²

> $0 = 400 + 2(-10)s$ → $s = +20$ m (correct!)
>
> **Rule:** Going UP = acceleration is NEGATIVE

> **⚠ Trap #2: Displacement vs Distance**
>
> Ball thrown up returns to hand.
>
> - **Displacement** = 0 (back to start)

> - **Distance** = 2 × max height
>
> Many students write displacement = 2h. WRONG!

> **⚠ Trap #3: Using equations for variable acceleration**
>
> If acceleration is NOT constant (like $a = 2t$), these equations DON’T work!
>
> Use calculus: $v = \int a \, dt$ and $s = \int v \, dt$
>
> For variable acceleration problems, see [Differentiation basics](../../../mathematics/limits-continuity-differentiability/index.md) and [Integration](../../../mathematics/integral-calculus/index.md).

---

## Free Fall: Ball Physics

Free fall = acceleration due to gravity = $g ≈ 10$ m/s² (or 9.8 m/s²)

### Object Dropped (Released from Rest)

| What you need | Formula | Quick Result |
| --- | --- | --- |
| Velocity after $t$ sec | $v = gt$ | After 2s → 20 m/s |
| Height fallen in $t$ sec | $h = \frac{1}{2}gt^2$ | After 2s → 20 m |
| Velocity after falling $h$ | $v = \sqrt{2gh}$ | After 20m → 20 m/s |

### Object Thrown Upward

| What you need | Formula |
| --- | --- |
| Max height | $H = \frac{u^2}{2g}$ |
| Time to reach top | $t = \frac{u}{g}$ |
| Total flight time | $T = \frac{2u}{g}$ |
| Speed at height $h$ | $v = \sqrt{u^2 - 2gh}$ |

> **★ Key point · Golden Rule**
>
> **Speed going UP at height h = Speed coming DOWN at height h**
>
> If thrown at 30 m/s, it returns at 30 m/s (ignoring air resistance)

---

## Pattern Recognition: JEE Favorites

### Pattern 1: “Ratio of distances in successive seconds”

For object starting from rest ($u = 0$):

$$S_1 : S_2 : S_3 : S_4 : ... = 1 : 3 : 5 : 7 : ...$$

**Memory:** Odd numbers! **1, 3, 5, 7&mldr;** — distances in successive seconds form an odd number sequence!

**Why?** Using $S_n = \frac{a}{2}(2n-1)$, for consecutive seconds you get $1a/2$, $3a/2$, $5a/2$&mldr;

---

### Pattern 2: “Ratio of total distances”

For object starting from rest:

$$s_1 : s_2 : s_3 : s_4 = 1 : 4 : 9 : 16 = 1^2 : 2^2 : 3^2 : 4^2$$

**Memory:** Perfect squares! **1, 4, 9, 16&mldr;** — total distances follow the square number pattern!

---

### Pattern 3: “Two objects, one dropped, one thrown”

Object A dropped, Object B thrown up simultaneously from same height.

**They meet at:** Height $= H - \frac{1}{2}gt^2$ (distance A has fallen)

**Time to meet:** $t = \frac{H}{u}$ (where u is throwing speed of B)

---

## Practice Problems (Level-wise)

### Level 1: Foundation (NCERT Type)

> **↗ Connection · Problem 1**
>
> A car accelerates from rest at 2 m/s² for 10 s. Find final velocity and distance.
>
> **Quick Solution:**
>
> - $v = u + at = 0 + 2(10) =$ **20 m/s**

> - $s = ut + \frac{1}{2}at² = 0 + \frac{1}{2}(2)(100) =$ **100 m**

### Level 2: JEE Main Type

> **↗ Connection · Problem 2**
>
> A ball is dropped. Find ratio of distances in 1st, 2nd, 3rd seconds.
>
> **Instant Answer:** $1 : 3 : 5$ (odd number pattern!)

> **↗ Connection · Problem 3**
>
> A stone is thrown up with 40 m/s. Find: (a) max height, (b) time of flight
>
> **Quick Solution:**
>
> - $H = \frac{u^2}{2g} = \frac{1600}{20} =$ **80 m**

> - $T = \frac{2u}{g} = \frac{80}{10} =$ **8 s**

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 4**
>
> A particle starts from rest. The ratio of distances covered in 4th and 3rd seconds is:
>
> **Solution:**

> Using $S_n = \frac{a}{2}(2n-1)$:
>
> - $S_4 = \frac{a}{2}(7) = 3.5a$

> - $S_3 = \frac{a}{2}(5) = 2.5a$

> - Ratio = $\frac{7}{5}$ = **7:5**

---

## Quick Revision Box

| Situation | Direct Formula |
| --- | --- |
| Max height (thrown up) | $H = \frac{u^2}{2g}$ |
| Time to top | $t = \frac{u}{g}$ |
| Total flight time | $T = \frac{2u}{g}$ |
| Velocity from height h | $v = \sqrt{2gh}$ |
| nth second distance | $S_n = u + \frac{a}{2}(2n-1)$ |
| Ratio (from rest) | $1:3:5:7...$ (successive) |
|  | $1:4:9:16...$ (cumulative) |

---

## Teacher’s Final Words

> **★ Key point · Exam Strategy**
>
> 1. **Read problem** → Identify given variables

> 2. **Pick equation** → Use “missing variable” trick

> 3. **Check sign** → Is acceleration positive or negative?

> 4. **Verify units** → All in SI (m, s, m/s, m/s²)

> 5. **Sanity check** → Does answer make physical sense?
>
> **“Memorizing equations is easy — choosing the RIGHT equation is the real skill!”**

---

## Related Topics

### Within Kinematics

- [Graphical Analysis](../graphical-analysis/index.md) — Interpret v-t and s-t graphs using these equations
- [Projectile Motion](../projectile-motion/index.md) — Apply these equations in 2D
- [Relative Velocity](../relative-velocity/index.md) — When observers are also moving

### Connected Chapters

- [Newton’s Laws of Motion](../../laws-of-motion/index.md) — What causes acceleration
- [Work-Energy Theorem](../../work-energy-power/work-energy-theorem/index.md) — Alternative to kinematics when time isn’t needed
- [Differentiation](../../../mathematics/limits-continuity-differentiability/index.md) — For variable acceleration problems

---

From TestGuru · our mock-test platform

## You've read Kinematic Equations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fkinematic-equations%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/kinematic-equations/",this.page.identifier="/physics/kinematics/kinematic-equations/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="kinematicGraph" id="anim-kinematicGraph-1795396423660730108"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-kinematicGraph-1795396423660730108")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/kinematic-equations/](https://jeenotes.in/physics/kinematics/kinematic-equations/) · raw HTML: `offline/physics/kinematics/kinematic-equations/index.html`_
