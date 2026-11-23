---
title: "Motion in a Straight Line"
source: "https://jeenotes.in/physics/kinematics/motion-1d/"
description: "Distance vs displacement, speed vs velocity, acceleration, and the calculus of 1D motion — with average-speed shortcuts and solved JEE problems"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 10"
html: "../../../../offline/physics/kinematics/motion-1d/index.html"
extracted: "2026-11-23"
---

> Distance vs displacement, speed vs velocity, acceleration, and the calculus of 1D motion — with average-speed shortcuts and solved JEE problems

## Prerequisites

Before diving in, make sure you understand:

- [Frame of Reference](../frame-of-reference/index.md) — motion is always measured relative to an observer

---

## The Hook: Running Between the Wickets

> **★ Key point · Connect: Real Life → Physics**
>
> Virat Kohli taps the ball to mid-off and sprints two quick runs. The pitch is about 20 m between the creases, so he runs 20 m + 20 m = **40 m of hard sprinting**.
>
> But wait — after two runs, he is standing **exactly where he started**.
>
> - Total path covered: **40 m**

> - Change in position: **0 m**
>
> Two completely different numbers describing the same running! One is **distance**, the other is **displacement** — and confusing them is the single most common way students throw away marks in kinematics.

> **◐ In simple terms · JEE Weightage**
>
> Motion in 1D contributes **2–3 questions in JEE Main** (directly or through graphs and kinematic equations built on these definitions). The average-speed shortcuts in this page alone can save you 2 minutes per question.

---

## The Core Concept

Motion in a straight line (also called **rectilinear motion** or **1D motion**) is the simplest form of motion where an object moves along a single axis.

Because there is only one axis, we don’t need full vector notation — a **sign** does the job:

- Choose an origin and a positive direction (say, rightward = $+x$)
- Position is a single number $x$ (can be positive or negative)
- Velocity and acceleration carry $+$ or $-$ signs to show direction

**In simple terms:** “In 1D, the plus and minus signs ARE the directions.”

---

## Distance vs Displacement

Understanding the difference between these two is crucial:

| Property | Distance | Displacement |
| --- | --- | --- |
| Definition | Total path length traveled | Change in position |
| Nature | Scalar | Vector |
| Sign | Always positive | Can be +, -, or 0 |
| Formula | Sum of all path lengths | $\vec{s} = \vec{r}_f - \vec{r}_i$ |

### Visual Example

```fallback
Start (A) ----5m----> (B) ----3m----> (C)
                           <---2m---- (C) back to (D)
```

If you walk from A to C and back to D:

- **Distance** = 5 + 3 + 2 = **10 m**
- **Displacement** = 5 + 3 - 2 = **6 m** (in original direction)

> **★ Key point · Quick Check**
>
> Distance ≥ |Displacement| always. They’re equal only when motion is in one direction without any reversal.

---

## Speed vs Velocity

### Speed (Scalar)

**Speed** is the rate at which distance is covered.

$$\text{Average Speed} = \frac{\text{Total Distance}}{\text{Total Time}}$$

- Always positive
- SI Unit: m/s

### Velocity (Vector)

**Velocity** is the rate of change of displacement.

$$\text{Average Velocity} = \frac{\text{Displacement}}{\text{Time}} = \frac{\Delta \vec{s}}{\Delta t}$$

$$\text{Instantaneous Velocity} = \lim_{\Delta t \to 0} \frac{\Delta \vec{s}}{\Delta t} = \frac{d\vec{s}}{dt}$$

- Can be positive, negative, or zero
- SI Unit: m/s

### Important Relationships

| Situation | Speed vs Velocity |
| --- | --- |
| Uniform motion in one direction | Speed = |Velocity| |
| Motion with reversal | Speed > |Average Velocity| |
| Complete round trip | Speed > 0, Average Velocity = 0 |

> **★ Key point · Instantaneous vs Average**
>
> - **Instantaneous speed** = |instantaneous velocity| — ALWAYS true.

> - **Average speed** ≥ |average velocity| — equality only when there is no reversal of direction.
>
> The car’s speedometer shows instantaneous speed; your trip computer’s “average” uses total distance over total time.

### The Average Speed Formulas JEE Loves

**Case 1: Equal distances at two different speeds** (first half distance at $v_1$, second half at $v_2$):

$$\boxed{v_{avg} = \frac{2v_1 v_2}{v_1 + v_2}} \quad \text{(harmonic mean)}$$

**Quick derivation:** For each half of distance $d$: total time $= \frac{d}{v_1} + \frac{d}{v_2}$, so

$$v_{avg} = \frac{2d}{\frac{d}{v_1} + \frac{d}{v_2}} = \frac{2v_1v_2}{v_1+v_2}$$

**Case 2: Equal times at two different speeds** (first half time at $v_1$, second half at $v_2$):

$$\boxed{v_{avg} = \frac{v_1 + v_2}{2}} \quad \text{(arithmetic mean)}$$

**Key fact:** The harmonic mean is **always less than** the arithmetic mean (for unequal speeds). If a question splits the journey by *distance*, the answer is always *below* the simple average — a great sanity check on your result.

---

## Acceleration

**Acceleration** is the rate of change of velocity.

$$\vec{a} = \frac{d\vec{v}}{dt}$$

### Interactive Demo: Visualize Velocity and Acceleration

Explore how velocity and acceleration change with time in 1D motion.

### Types of Acceleration

1. **Positive Acceleration**: Velocity increasing in positive direction
2. **Negative Acceleration**: Velocity decreasing (also called deceleration or retardation)
3. **Zero Acceleration**: Constant velocity (uniform motion)

> **⚠ Trap · Common Misconception**
>
> Negative acceleration doesn’t always mean slowing down!
>
> - A car moving left (negative direction) with negative acceleration is actually speeding up.

> - What matters is whether $\vec{a}$ and $\vec{v}$ are in the same direction.

### Acceleration Direction Rules

| $\vec{v}$ and $\vec{a}$ | Motion |
| --- | --- |
| Same direction | Speeding up |
| Opposite directions | Slowing down |

### The Third Form of Acceleration (JEE Advanced Favorite)

Using the chain rule, acceleration can be rewritten without time:

$$\boxed{a = \frac{dv}{dt} = \frac{dv}{dx}\cdot\frac{dx}{dt} = v\frac{dv}{dx}}$$

**When to use:** whenever velocity is given as a function of **position** (like $v = \alpha\sqrt{x}$), use $a = v\frac{dv}{dx}$ — trying to use $\frac{dv}{dt}$ directly will get you stuck.

---

## The Calculus Bridge

Kinematics is really just calculus wearing a physics costume:

| Direction | Operation | Relation |
| --- | --- | --- |
| $x \to v$ | Differentiate | $v = \dfrac{dx}{dt}$ |
| $v \to a$ | Differentiate | $a = \dfrac{dv}{dt}$ |
| $a \to v$ | Integrate | $v = u + \displaystyle\int_0^t a\, dt$ |
| $v \to x$ | Integrate | $x = x_0 + \displaystyle\int_0^t v\, dt$ |

**Memory picture:** think of a ladder $x - v - a$. Going **down** the ladder (position → velocity → acceleration), you **differentiate**. Climbing **up**, you **integrate**.

Brush up on the tools here: [Differentiation Rules](../../../mathematics/limits-continuity-differentiability/differentiation-rules/index.md) and [Definite Integrals](../../../mathematics/integral-calculus/definite-integrals/index.md).

---

## Memory Tricks & Patterns

### Mnemonic: Which Mean for Average Speed?

**“Same Distance → Harmonic, Same Time → Arithmetic”**

Remember **“D-H, T-A”**: **D**istance goes with **H**armonic (like **DH**oni), **T**ime goes with **A**rithmetic (like **TA**ta).

### The Round Trip Rule

**“Round trip? Velocity zero, speed never.”**

Any journey ending at the start point has average velocity $= 0$ but average speed $> 0$.

### The Ladder Rule

**“Differentiate Down, Integrate Up”** on the $x - v - a$ ladder.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Averaging the Speeds**
>
> **Problem:** A car covers half the *distance* at 40 km/h and the other half at 60 km/h. Average speed?
>
> **WRONG:** $\frac{40 + 60}{2} = 50$ km/h — this is the trap option, and it WILL be in the choices!
>
> **CORRECT:** Equal distances → harmonic mean:
>
> $$v_{avg} = \frac{2(40)(60)}{40 + 60} = \frac{4800}{100} = 48 \text{ km/h}$$
>
> Arithmetic mean is only valid when the *times* are equal, not the distances.

> **⚠ Trap #2: Distance from a Position Function**
>
> For $x(t)$ with direction reversals, distance ≠ $|x_{final} - x_{initial}|$.
>
> **Correct method:** Find times where $v = 0$ (turning points), compute the position at each turning point, and add up the absolute values of each leg. See Problem 5 below for this in action.

> **⚠ Trap #3: Using Constant-Acceleration Equations Blindly**
>
> $v = u + at$ and friends work **only** for constant acceleration. If $a$ depends on $t$, $x$, or $v$, you must integrate.
>
> The full constant-acceleration toolkit lives in [Kinematic Equations](../kinematic-equations/index.md) — but always verify the “constant $a$” condition first!

---

## Summary Table

| Quantity | Symbol | Type | Formula | SI Unit |
| --- | --- | --- | --- | --- |
| Distance | $d$ | Scalar | Total path | m |
| Displacement | $\vec{s}$ | Vector | $\vec{r}_f - \vec{r}_i$ | m |
| Speed | $v$ | Scalar | $\frac{d}{t}$ | m/s |
| Velocity | $\vec{v}$ | Vector | $\frac{d\vec{s}}{dt}$ | m/s |
| Acceleration | $\vec{a}$ | Vector | $\frac{d\vec{v}}{dt}$ | m/s² |

---

## Practice Problems

### Level 1: Foundation

> **↗ Connection · Problem 1**
>
> A car travels 100 m east, then 60 m west. Find the distance traveled and displacement.
>
> **Solution:**
>
> - Distance = 100 + 60 = **160 m**

> - Displacement = 100 - 60 = **40 m east**

> **↗ Connection · Problem 2**
>
> A car covers the first half of a journey’s distance at 40 km/h and the second half at 60 km/h. Find the average speed.
>
> **Solution:**

> Equal distances → harmonic mean:
>
> $$v_{avg} = \frac{2v_1v_2}{v_1+v_2} = \frac{2(40)(60)}{100} = \mathbf{48 \text{ km/h}}$$
>
> (Note: NOT 50 km/h!)

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> A particle moves along x-axis. Its position at time $t$ is $x = 3t^2 - 2t + 5$ m. Find velocity and acceleration at $t = 2$ s.
>
> **Solution:**
>
> - $v = \frac{dx}{dt} = 6t - 2$

> - At $t = 2$: $v = 6(2) - 2 = $ **10 m/s**

> - $a = \frac{dv}{dt} = 6$ **m/s²** (constant)

> **↗ Connection · Problem 4**
>
> A particle travels the first half of a total time interval at speed $v_1 = 20$ m/s and the second half at $v_2 = 30$ m/s. Find its average speed.
>
> **Solution:**

> Equal *times* → arithmetic mean:
>
> $$v_{avg} = \frac{v_1 + v_2}{2} = \frac{20 + 30}{2} = \mathbf{25 \text{ m/s}}$$
>
> Compare with Problem 2: the rule that applies depends entirely on whether *distance* or *time* is split equally.

### Level 3: JEE Advanced

> **↗ Connection · Problem 5: Distance with Direction Reversals**
>
> A particle moves along the x-axis with $x = t^3 - 6t^2 + 9t$ (x in m, t in s). Find (a) the times when velocity is zero, (b) the distance traveled in the first 4 seconds.
>
> **Solution:**

> (a) $v = \frac{dx}{dt} = 3t^2 - 12t + 9 = 3(t-1)(t-3)$
>
> Velocity is zero at $t = 1$ s and $t = 3$ s — these are the turning points.
>
> (b) Compute positions at the boundaries and turning points:
>
> - $x(0) = 0$

> - $x(1) = 1 - 6 + 9 = 4$ m

> - $x(3) = 27 - 54 + 27 = 0$ m

> - $x(4) = 64 - 96 + 36 = 4$ m
>
> Distance = $|4-0| + |0-4| + |4-0| = 4 + 4 + 4 = \mathbf{12 \text{ m}}$
>
> (Displacement is only $4$ m — the reversals hide $8$ m of extra path!)

> **↗ Connection · Problem 6: Velocity as a Function of Position**
>
> A particle starts from $x = 0$ at $t = 0$ and moves with velocity $v = \alpha\sqrt{x}$ where $\alpha$ is a positive constant. Find $x(t)$ and the acceleration.
>
> **Solution:**

> Separate variables in $\frac{dx}{dt} = \alpha\sqrt{x}$:
>
> $$\int_0^x \frac{dx}{\sqrt{x}} = \int_0^t \alpha\, dt \implies 2\sqrt{x} = \alpha t \implies \boxed{x = \frac{\alpha^2 t^2}{4}}$$
>
> For acceleration, use $a = v\frac{dv}{dx}$:
>
> $$a = \alpha\sqrt{x} \cdot \frac{\alpha}{2\sqrt{x}} = \mathbf{\frac{\alpha^2}{2}} \quad \text{(constant!)}$$
>
> A velocity proportional to $\sqrt{x}$ secretly means uniform acceleration — compare with $v^2 = 2ax$.

---

## Quick Revision Box

| Situation | Formula / Approach |
| --- | --- |
| Equal distances at $v_1$, $v_2$ | $v_{avg} = \frac{2v_1v_2}{v_1+v_2}$ |
| Equal times at $v_1$, $v_2$ | $v_{avg} = \frac{v_1+v_2}{2}$ |
| Round trip | Avg velocity $= 0$; avg speed $> 0$ |
| $x(t)$ given, need $v$, $a$ | Differentiate: $v = \frac{dx}{dt}$, $a = \frac{dv}{dt}$ |
| $v(x)$ given, need $a$ | $a = v\frac{dv}{dx}$ |
| Distance when direction reverses | Split path at points where $v = 0$ |
| Speeding up or slowing down? | Same signs of $v$, $a$ → faster; opposite → slower |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Distance ≥ |Displacement|**, and average speed ≥ |average velocity| — equality only without direction reversal.

> 2. **Average speed shortcuts:** equal distances → harmonic mean; equal times → arithmetic mean. The trap option (simple average) is always waiting for you.

> 3. **Sign of acceleration alone tells you nothing** — compare the directions of $\vec{v}$ and $\vec{a}$ to decide speeding up vs slowing down.

> 4. **Calculus is the master key:** differentiate down the $x$-$v$-$a$ ladder, integrate up. When $v$ is given in terms of $x$, reach for $a = v\frac{dv}{dx}$.
>
> **“Kinematics doesn’t test formulas — it tests whether you know WHICH quantity the question is really asking for.”**

---

## Related Topics

### Within Kinematics

- [Frame of Reference](../frame-of-reference/index.md) — the observer behind every measurement
- [Kinematic Equations](../kinematic-equations/index.md) — the constant-acceleration special case
- [Graphical Analysis](../graphical-analysis/index.md) — the same ideas, read from graphs
- [Relative Velocity](../relative-velocity/index.md) — when the observer moves too

### Connected Chapters

- [Differentiation Rules](../../../mathematics/limits-continuity-differentiability/differentiation-rules/index.md) — the math engine behind $v = \frac{dx}{dt}$
- [Definite Integrals](../../../mathematics/integral-calculus/definite-integrals/index.md) — recovering displacement from velocity

---

From TestGuru · our mock-test platform

## You've read Motion in a Straight Line.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fmotion-1d%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/motion-1d/",this.page.identifier="/physics/kinematics/motion-1d/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="velocityTime" id="anim-velocityTime-1795396423654150334"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-velocityTime-1795396423654150334")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/motion-1d/](https://jeenotes.in/physics/kinematics/motion-1d/) · raw HTML: `offline/physics/kinematics/motion-1d/index.html`_
