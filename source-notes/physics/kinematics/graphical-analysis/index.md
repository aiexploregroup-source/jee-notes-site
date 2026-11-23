---
title: "Graphical Analysis"
source: "https://jeenotes.in/physics/kinematics/graphical-analysis/"
description: "Read position-time, velocity-time, and acceleration-time graphs like a pro — slopes, areas, impossible graphs, and solved JEE problems"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 10"
html: "../../../../offline/physics/kinematics/graphical-analysis/index.html"
extracted: "2026-11-23"
---

> Read position-time, velocity-time, and acceleration-time graphs like a pro — slopes, areas, impossible graphs, and solved JEE problems

## Prerequisites

Before studying this topic, make sure you understand:

- [Motion in a Straight Line](../motion-1d/index.md) - basic definitions
- [Kinematic Equations](../kinematic-equations/index.md) - for uniform acceleration

---

## The Hook: Hawk-Eye Sees Everything

> **★ Key point · Connect: Real Life → Physics**
>
> When a bowler appeals for LBW and the third umpire calls for **DRS**, Hawk-Eye doesn’t show a video — it shows a *reconstructed trajectory*: where the ball pitched, how fast it was moving, where it would have gone.
>
> Hawk-Eye works entirely on **graphs of motion**. Cameras record position vs time; software differentiates to get velocity, differentiates again to get swing and dip.
>
> That’s exactly what this topic teaches you: given ONE graph of motion, extract EVERYTHING — velocity, acceleration, displacement, distance — without a single kinematic equation.

> **◐ In simple terms · JEE Weightage**
>
> Graph-based questions appear in JEE Main **almost every year (1–2 questions)** — either “read this graph” directly, or “which graph correctly represents this motion?” The second type is where most students fall for trap options. Graphs are also the fastest way to solve multi-phase motion problems that would take three separate kinematic equations otherwise.

---

## Why Graphical Analysis?

Graphs provide a visual representation of motion that helps us:

- Understand the nature of motion at a glance
- Extract quantities like velocity and acceleration
- Calculate displacement from the area under curves
- Solve problems where algebraic methods are complex

**The two master rules** (everything else follows from these):

$$\boxed{\text{Slope of a graph} = \frac{d(y\text{-axis})}{d(x\text{-axis})} \qquad \text{Area under a graph} = \int (y\text{-axis})\, d(x\text{-axis})}$$

---

## Position-Time (x-t) Graph

### What the Graph Tells Us

| Feature | Physical Meaning |
| --- | --- |
| **Slope** | Velocity |
| **Shape** | Type of motion |
| **y-intercept** | Initial position |

### Common x-t Graph Shapes

#### 1. Horizontal Line (slope = 0)

```fallback
x │     ___________
  │
  └─────────────────► t
```

- **Motion:** Object at rest
- **Velocity:** $v = 0$

#### 2. Straight Line with Positive Slope

```fallback
x │         /
  │       /
  │     /
  └─────────────────► t
```

- **Motion:** Uniform velocity (constant speed)
- **Velocity:** $v = \text{constant} > 0$

#### 3. Parabola Opening Upward

```fallback
x │           /
  │         /
  │       __/
  └─────────────────► t
```

- **Motion:** Uniformly accelerated ($a > 0$)
- **Velocity:** Increasing

#### 4. Parabola Opening Downward

```fallback
x │    ___
  │   /   \
  │  /     \
  └─────────────────► t
```

- **Motion:** First accelerating up, then decelerating
- **Velocity:** First increasing, then decreasing

> **★ Key point · Slope Interpretation**
>
> At any point on an x-t graph:
>
> $$v = \frac{dx}{dt} = \text{slope of tangent}$$
>
> - Steeper slope = higher velocity

> - Horizontal tangent = momentarily at rest

### Reading Curvature: The Second Derivative

The *bend* of an x-t graph reveals the acceleration:

| Curvature of x-t graph | Acceleration |
| --- | --- |
| Concave up (cup shape, like $\cup$) | $a > 0$ |
| Concave down (cap shape, like $\cap$) | $a < 0$ |
| Straight line (no bend) | $a = 0$ |

**Memory Trick:** “**Cup holds positive, Cap drops negative.**”

### Interactive Demo: Visualize Velocity-Time Graphs

Explore the relationship between position, velocity, and time graphically.

---

## Velocity-Time (v-t) Graph

### What the Graph Tells Us

| Feature | Physical Meaning |
| --- | --- |
| **Slope** | Acceleration |
| **Area under curve** | Displacement |
| **y-value** | Instantaneous velocity |

### Common v-t Graph Shapes

#### 1. Horizontal Line

```fallback
v │     ___________
  │
  └─────────────────► t
```

- **Motion:** Uniform velocity
- **Acceleration:** $a = 0$

#### 2. Line with Positive Slope

```fallback
v │         /
  │       /
  │     /
  └─────────────────► t
```

- **Motion:** Uniformly accelerated
- **Acceleration:** $a = \text{constant} > 0$

#### 3. Line with Negative Slope (above x-axis)

```fallback
v │  \
  │   \
  │    \
  └─────────────────► t
```

- **Motion:** Uniformly decelerating
- **Acceleration:** $a = \text{constant} < 0$ (retardation)

### Calculating Displacement from v-t Graph

$$\text{Displacement} = \int_{t_1}^{t_2} v \, dt = \text{Area under v-t curve}$$

> **⚠ Trap · Area Sign Convention**
>
> - Area **above** time axis = **positive** displacement

> - Area **below** time axis = **negative** displacement

> - Total displacement = algebraic sum of areas

> - Total **distance** = sum of |areas| (all taken positive)

### Example: Area Calculation

For a v-t graph showing:

- Triangle above axis (base 4s, height 20 m/s)
- Triangle below axis (base 2s, depth 10 m/s)

**Displacement:**

- Area above = $\frac{1}{2} \times 4 \times 20 = 40$ m
- Area below = $\frac{1}{2} \times 2 \times 10 = 10$ m (negative)
- **Net displacement = 40 - 10 = 30 m**

**Distance:** 40 + 10 = **50 m**

---

## Acceleration-Time (a-t) Graph

| Feature | Physical Meaning |
| --- | --- |
| **Area under curve** | Change in velocity |
| **y-value** | Instantaneous acceleration |

$$\Delta v = \int_{t_1}^{t_2} a \, dt = \text{Area under a-t curve}$$

**Careful:** the area of an a-t graph gives the *change* in velocity, not the velocity itself. You must add the initial velocity: $v = u + \text{area}$.

---

## Converting Between Graphs

### From x-t to v-t

1. Find slope at each point on x-t graph
2. Plot slope values as v on v-t graph

### From v-t to x-t

1. Find area under v-t curve up to each time
2. Plot cumulative area as x on x-t graph

### From v-t to a-t

1. Find slope at each point on v-t graph
2. Plot slope values as a on a-t graph

**The big picture — the graph ladder:**

$$x\text{-}t \xrightarrow{\text{slope}} v\text{-}t \xrightarrow{\text{slope}} a\text{-}t \qquad\qquad a\text{-}t \xrightarrow{\text{area}} v\text{-}t \xrightarrow{\text{area}} x\text{-}t$$

### One Motion, Three Graphs

| Motion | x-t Graph | v-t Graph | a-t Graph |
| --- | --- | --- | --- |
| At rest | Horizontal line | Line on the t-axis | Line on the t-axis |
| Uniform velocity | Straight slanted line | Horizontal line | Line on the t-axis |
| Uniform acceleration from rest | Parabola (starts flat) | Slanted line through origin | Horizontal line |
| Ball thrown straight up | Inverted parabola | Slanted line crossing t-axis at the top point | Horizontal line at $-g$ |

---

## Impossible Graphs (Favorite JEE Trick Question)

“Which of the following graphs CANNOT represent real 1D motion?” Look for these deal-breakers:

1. **A vertical segment on an x-t graph** — the object would be at two places at once (or teleport in zero time). Impossible.
2. **A double-valued graph** (two y-values for one time) — one particle cannot have two positions or two velocities at the same instant.
3. **An x-t or v-t graph going “backward in time”** — time only increases.
4. **A sharp corner (kink) on an x-t graph** — velocity changes instantly, requiring infinite acceleration. Idealized in problems, impossible in reality.

**Scan rule:** sweep a vertical line across the graph — if it ever cuts the curve **more than once**, the graph is impossible.

---

## Memory Tricks & Patterns

### The Ladder Rule

**“Slope slides DOWN the ladder, Area adds UP the ladder.”**

$x \to v \to a$: differentiate (take slopes) going down; integrate (take areas) coming back up.

### Slope-Area Pairing

- x-t graph: slope useful, area meaningless
- v-t graph: **both** useful — slope = $a$, area = displacement
- a-t graph: area useful ($\Delta v$), slope rarely needed

**Memory Trick:** “**v-t is VIP**” — it’s the only graph where both slope AND area carry physics. If a JEE question gives you exactly one graph, it’s usually v-t for this reason.

### Curvature Chant

**“Cup up — positive $a$. Cap down — negative $a$.”**

---

## Common Mistakes to Avoid

> **⚠ Trap #1: The Graph is NOT the Path**
>
> An x-t parabola does **not** mean the object moves along a curved path! The motion is still along a straight line — the graph only shows *position vs time*.
>
> A ball thrown vertically upward gives a parabolic x-t graph even though it moves straight up and down.

> **⚠ Trap #2: Mixing Up Which Slope is Which**
>
> - Slope of **x-t** = velocity

> - Slope of **v-t** = acceleration
>
> Students under exam pressure read a v-t slope as “velocity.” Before answering, glance at the y-axis label — it takes one second and saves the mark.

> **⚠ Trap #3: Forgetting the Sign of Area**
>
> When a v-t curve dips below the time axis, that area is **negative displacement**. Adding all areas as positive gives you *distance*, not displacement. Read the question carefully — JEE gives both as options.

> **⚠ Trap #4: Area of an a-t Graph Gives Δv, Not v**
>
> $\text{Area under } a\text{-}t = v_{final} - v_{initial}$
>
> If the particle didn’t start from rest, forgetting to add $u$ is a guaranteed wrong answer:

> $v_{final} = u + \text{area}$.

---

## Summary Table

| Graph | Slope Gives | Area Gives |
| --- | --- | --- |
| x-t | Velocity | — |
| v-t | Acceleration | Displacement |
| a-t | — | Change in velocity |

---

## Practice Problems

### Level 1: Foundation

> **↗ Connection · Problem 1**
>
> A v-t graph is a straight line from (0, 10) to (5, 30). Find:

> (a) Acceleration

> (b) Displacement in 5 seconds
>
> **Solution:**

> (a) $a = \frac{30 - 10}{5 - 0} = $ **4 m/s²**
>
> (b) Area = Trapezium area = $\frac{1}{2}(10 + 30) \times 5 = $ **100 m**

### Level 2: JEE Main

> **↗ Connection · Problem 2**
>
> An x-t graph is a parabola: $x = 2t^2 + 3t$ (x in m, t in s). Find velocity and acceleration at t = 2s.
>
> **Solution:**

> $v = \frac{dx}{dt} = 4t + 3$

> At t = 2s: $v = 4(2) + 3 = $ **11 m/s**
>
> $a = \frac{dv}{dt} = 4$ **m/s²** (constant)

> **↗ Connection · Problem 3: Three-Phase Journey**
>
> A car starts from rest and its v-t graph has three straight segments: acceleration at $2 \text{ m/s}^2$ for 10 s, constant velocity for 20 s, then uniform deceleration to rest in 5 s. Find the total distance and the average velocity.
>
> **Solution:**

> Phase 1: reaches $v = 2 \times 10 = 20$ m/s. Distance = triangle area = $\frac{1}{2}(10)(20) = 100$ m
>
> Phase 2: rectangle area = $20 \times 20 = 400$ m
>
> Phase 3: triangle area = $\frac{1}{2}(5)(20) = 50$ m
>
> **Total distance** $= 100 + 400 + 50 = \mathbf{550 \text{ m}}$
>
> **Average velocity** $= \frac{550}{35} \approx \mathbf{15.7 \text{ m/s}}$
>
> (No direction reversal, so distance = displacement here. One diagram, zero kinematic equations!)

### Level 3: JEE Advanced

> **↗ Connection · Problem 4: From a-t Graph to Velocity and Displacement**
>
> A particle starts from rest. Its acceleration increases linearly from 0 to $10 \text{ m/s}^2$ over the first 5 s (a triangular a-t graph). Find (a) the velocity at $t = 5$ s, (b) the displacement in these 5 s.
>
> **Solution:**

> (a) Velocity change = area under a-t graph:
>
> $$\Delta v = \frac{1}{2}(5)(10) = 25 \implies v(5) = 0 + 25 = \mathbf{25 \text{ m/s}}$$
>
> (b) Careful — displacement is NOT an “area” of the a-t graph. We need $v(t)$ first. Since $a$ grows linearly: $a = 2t$, so:
>
> $$v = \int_0^t 2t\, dt = t^2$$

$$x = \int_0^5 t^2\, dt = \frac{125}{3} \approx \mathbf{41.7 \text{ m}}$$
>
> **Verify:** $v(5) = 5^2 = 25$ m/s — matches part (a). Consistency check passed.

---

## Quick Revision Box

| Situation | Approach |
| --- | --- |
| Velocity from x-t graph | Slope of tangent |
| Acceleration from v-t graph | Slope of tangent |
| Displacement from v-t graph | Signed area under curve |
| Distance from v-t graph | Sum of |areas| |
| $\Delta v$ from a-t graph | Area under curve (then add $u$) |
| Sign of $a$ from x-t curvature | Cup ($\cup$) → $a>0$; Cap ($\cap$) → $a<0$ |
| Object momentarily at rest | Horizontal tangent on x-t; v-t curve crosses t-axis |
| “Impossible graph” check | Vertical line must cut the curve only once |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Two master rules run everything:** slope differentiates ($x\to v\to a$), area integrates ($a\to v\to x$).

> 2. **v-t is the VIP graph** — slope gives acceleration AND area gives displacement. Multi-phase problems become one quick sketch.

> 3. **Signs matter:** area below the time axis is negative displacement; taking all areas positive gives distance.

> 4. **The graph is not the trajectory** — a curved x-t graph can describe perfectly straight-line motion.

> 5. For “which graph is impossible” questions, sweep a vertical line — any double-cut means impossible.
>
> **“A well-drawn v-t graph is worth three kinematic equations.”**

---

## Related Topics

### Within Kinematics

- [Motion in a Straight Line](../motion-1d/index.md) — the definitions these graphs visualize
- [Kinematic Equations](../kinematic-equations/index.md) — algebraic twin of the graphical method
- [Kinematics Formula Sheet](../formula-sheet/index.md) — all results in one place
- [Kinematics Previous Year Questions](../previous-year-questions/index.md) — practice real graph questions

### Connected Chapters

- [Differentiation Rules](../../../mathematics/limits-continuity-differentiability/differentiation-rules/index.md) — the math behind slopes
- [Definite Integrals](../../../mathematics/integral-calculus/definite-integrals/index.md) — the math behind areas

---

From TestGuru · our mock-test platform

## You've read Graphical Analysis.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fgraphical-analysis%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/graphical-analysis/",this.page.identifier="/physics/kinematics/graphical-analysis/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="velocityTime" id="anim-velocityTime-1795396423670401183"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-velocityTime-1795396423670401183")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/graphical-analysis/](https://jeenotes.in/physics/kinematics/graphical-analysis/) · raw HTML: `offline/physics/kinematics/graphical-analysis/index.html`_
