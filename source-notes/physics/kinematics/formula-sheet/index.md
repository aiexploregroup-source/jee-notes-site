---
title: "Kinematics Formula Sheet"
source: "https://jeenotes.in/physics/kinematics/formula-sheet/"
description: "All key Kinematics formulas for JEE Main & Advanced — 1D/2D motion, SUVAT equations, projectiles, relative velocity, circular motion. Fast last-minute revision."
updated: "2026-11-17"
reading_time: "8 min read"
breadcrumb: "Physics"
position: "/ Topic 10 of 10"
html: "../../../../offline/physics/kinematics/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Kinematics formulas for JEE Main & Advanced — 1D/2D motion, SUVAT equations, projectiles, relative velocity, circular motion. Fast last-minute revision.

Every must-know Kinematics formula on one page — built straight from this chapter’s topics for last-minute revision before JEE Main and Advanced.

> **★ Key point · How to use this sheet**
>
> Scan top to bottom the night before the exam. Boxed formulas are the headline results you cannot afford to forget. Sign conventions and “missing variable” tricks are where most marks are lost.

## Basic Definitions (1D)

| Quantity | Symbol | Type | Formula | SI Unit |
| --- | --- | --- | --- | --- |
| Distance | $d$ | Scalar | Total path length | m |
| Displacement | $\vec{s}$ | Vector | $\vec{r}_f - \vec{r}_i$ | m |
| Average speed | — | Scalar | $\dfrac{\text{Total distance}}{\text{Total time}}$ | m/s |
| Average velocity | $\vec{v}_{avg}$ | Vector | $\dfrac{\Delta \vec{s}}{\Delta t}$ | m/s |
| Instantaneous velocity | $\vec{v}$ | Vector | $\dfrac{d\vec{s}}{dt}$ | m/s |
| Acceleration | $\vec{a}$ | Vector | $\dfrac{d\vec{v}}{dt}$ | m/s² |

$$\boxed{\vec{v} = \frac{d\vec{s}}{dt}, \qquad \vec{a} = \frac{d\vec{v}}{dt}}$$

> **★ Key point · Distance vs displacement**
>
> Distance $\geq |\text{Displacement}|$ always. They are equal only for straight-line motion with no reversal. On a complete round trip, average velocity $= 0$ but average speed $> 0$.

> **⚠ Trap · Negative acceleration ≠ slowing down**
>
> What matters is the relative direction of $\vec{v}$ and $\vec{a}$:
>
> | $\vec{v}$ and $\vec{a}$ | Motion |

> | --- | --- |

> | Same direction | Speeding up |

> | Opposite directions | Slowing down |

## Kinematic Equations (Constant Acceleration)

The SUVAT equations — 5 variables ($u, v, a, t, s$), 4 equations.

$$\boxed{v = u + at}$$

$$\boxed{s = ut + \tfrac{1}{2}at^2}$$

$$\boxed{v^2 = u^2 + 2as}$$

$$\boxed{s = \frac{(u + v)}{2}\,t}$$

### Displacement in the nth second

$$\boxed{S_n = u + \frac{a}{2}(2n - 1)}$$

### Equation-selection trick

| Missing variable | Use equation |
| --- | --- |
| $v$ not in question | $s = ut + \tfrac{1}{2}at^2$ |
| $t$ not in question | $v^2 = u^2 + 2as$ |
| $s$ not in question | $v = u + at$ |
| $a$ not in question | $s = \tfrac{(u+v)}{2}t$ |

> **★ Key point · High-yield ratios (start from rest, u = 0)**
>
> - Distance in **successive** seconds: $S_1 : S_2 : S_3 : \dots = 1 : 3 : 5 : 7 : \dots$ (odd numbers)

> - **Total** distance after each second: $s_1 : s_2 : s_3 : \dots = 1 : 4 : 9 : 16 : \dots$ (perfect squares)

> **⚠ Trap · When SUVAT fails**
>
> These equations only work for **constant** acceleration. If $a$ varies (e.g. $a = 2t$), use calculus: $v = \int a\,dt$ and $s = \int v\,dt$.

## Free Fall and Vertical Motion

Free fall: $g \approx 10\ \text{m/s}^2$ (or $9.8\ \text{m/s}^2$).

### Object dropped from rest

| Quantity | Formula |
| --- | --- |
| Velocity after time $t$ | $v = gt$ |
| Height fallen in time $t$ | $h = \tfrac{1}{2}gt^2$ |
| Velocity after falling height $h$ | $v = \sqrt{2gh}$ |

### Object thrown upward (speed $u$)

| Quantity | Formula |
| --- | --- |
| Maximum height | $H = \dfrac{u^2}{2g}$ |
| Time to reach top | $t = \dfrac{u}{g}$ |
| Total time of flight | $T = \dfrac{2u}{g}$ |
| Speed at height $h$ | $v = \sqrt{u^2 - 2gh}$ |

> **★ Key point · Symmetry rule**
>
> Speed going up at height $h$ = speed coming down at the same height $h$. Thrown at 30 m/s → returns at 30 m/s (no air resistance).

> **⚠ Trap · Sign convention trap**
>
> Going up, take $a = -g$. For a ball thrown up at $u$, max height from $v^2 = u^2 + 2as$ with $a = -g$ gives $s = +\dfrac{u^2}{2g}$. Also: a ball returning to the hand has **displacement = 0** but **distance = 2H**.

## Graphical Analysis

| Graph | Slope gives | Area under curve gives |
| --- | --- | --- |
| $x$–$t$ | Velocity $\left(v = \dfrac{dx}{dt}\right)$ | — |
| $v$–$t$ | Acceleration | Displacement |
| $a$–$t$ | — | Change in velocity |

$$\text{Displacement} = \int_{t_1}^{t_2} v\,dt = \text{Area under } v\text{–}t \text{ curve}$$

$$\Delta v = \int_{t_1}^{t_2} a\,dt = \text{Area under } a\text{–}t \text{ curve}$$

> **⚠ Trap · Area sign convention**
>
> Area **above** the time axis = positive displacement; area **below** = negative. Net displacement is the algebraic sum; total distance adds magnitudes of both.

## Motion in a Plane (2D)

| Quantity | Vector form | Magnitude | Direction |
| --- | --- | --- | --- |
| Position | $\vec{r} = x\hat{i} + y\hat{j}$ | $r = \sqrt{x^2 + y^2}$ | $\theta = \tan^{-1}\!\left(\tfrac{y}{x}\right)$ |
| Velocity | $\vec{v} = v_x\hat{i} + v_y\hat{j}$ | $v = \sqrt{v_x^2 + v_y^2}$ | $\theta = \tan^{-1}\!\left(\tfrac{v_y}{v_x}\right)$ |
| Acceleration | $\vec{a} = a_x\hat{i} + a_y\hat{j}$ | $a = \sqrt{a_x^2 + a_y^2}$ | — |

$$\vec{s} = \vec{r}_2 - \vec{r}_1 = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j}, \qquad |\vec{s}| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

$$\vec{v} = \frac{d\vec{r}}{dt}, \qquad \vec{a} = \frac{d\vec{v}}{dt}$$

> **★ Key point · Independence of components**
>
> The $x$ and $y$ motions are completely independent. Apply the SUVAT equations separately to each axis:
>
> **x-axis:** $v_x = u_x + a_x t$, $\;\; x = u_x t + \tfrac{1}{2}a_x t^2$, $\;\; v_x^2 = u_x^2 + 2a_x x$
>
> **y-axis:** $v_y = u_y + a_y t$, $\;\; y = u_y t + \tfrac{1}{2}a_y t^2$, $\;\; v_y^2 = u_y^2 + 2a_y y$

## Projectile Motion

Horizontal motion is uniform; vertical motion is uniformly accelerated ($a = g$ downward). Path is a **parabola**.

### Horizontal projection (from height $h$, speed $u$)

Initial conditions: $u_x = u$, $u_y = 0$.

$$\boxed{T = \sqrt{\frac{2h}{g}}}$$

$$\boxed{R = u\sqrt{\frac{2h}{g}} = uT}$$

$$\boxed{v_{final} = \sqrt{u^2 + 2gh}}$$

At time $t$: $\;x = ut$, $\;y = \tfrac{1}{2}gt^2$, $\;v_y = gt$.

> **★ Key point · Time of flight**
>
> For horizontal projection, time of flight depends **only on the height** $h$, not on the horizontal launch speed $u$.

### Oblique projection (angle $\theta$, speed $u$, ground to ground)

Initial components: $u_x = u\cos\theta$, $u_y = u\sin\theta$.

$$\boxed{T = \frac{2u\sin\theta}{g}}$$

$$\boxed{H_{max} = \frac{u^2\sin^2\theta}{2g}}$$

$$\boxed{R = \frac{u^2\sin 2\theta}{g}}$$

$$\boxed{y = x\tan\theta - \frac{gx^2}{2u^2\cos^2\theta}}$$

| Quantity | Formula |
| --- | --- |
| Position at time $t$ | $x = (u\cos\theta)t$, $\;y = (u\sin\theta)t - \tfrac{1}{2}gt^2$ |
| Velocity components | $v_x = u\cos\theta$ (constant), $\;v_y = u\sin\theta - gt$ |
| Time to reach max height | $\dfrac{T}{2} = \dfrac{u\sin\theta}{g}$ |
| Trajectory (alt. form) | $y = x\tan\theta\left(1 - \dfrac{x}{R}\right)$ |
| Speed at height $h$ | $v = \sqrt{u^2 - 2gh}$ |
| Speed at time $t$ | $v = \sqrt{u^2\cos^2\theta + (u\sin\theta - gt)^2}$ |
| Velocity direction | $\tan\alpha = \dfrac{u\sin\theta - gt}{u\cos\theta}$ |

### Maximum range and special cases

$$\boxed{R_{max} = \frac{u^2}{g} \quad \text{at } \theta = 45°}$$

| Case | Result |
| --- | --- |
| Complementary angles $\theta$ and $(90° - \theta)$ | Same range $R$ |
| Projection from height $h$ (upward at angle) | $T = \dfrac{u\sin\theta + \sqrt{u^2\sin^2\theta + 2gh}}{g}$ |
| Range on plane inclined at $\alpha$ | $R = \dfrac{2u^2\sin(\theta - \alpha)\cos\theta}{g\cos^2\alpha}$ |
| Max range on incline | at $\theta = \dfrac{\pi}{4} + \dfrac{\alpha}{2}$ |

> **⚠ Trap · Don't confuse height-at-time-t with max height**
>
> Height at time $t$ is $y = u_y t - \tfrac{1}{2}gt^2$ — this is **not** $H_{max} = \dfrac{u^2\sin^2\theta}{2g}$.

## Relative Velocity

Velocity of A relative to B:

$$\boxed{\vec{v}_{AB} = \vec{v}_A - \vec{v}_B}$$

| Property | Relation |
| --- | --- |
| Reverse pair | $\vec{v}_{BA} = -\vec{v}_{AB}$ |
| Sum of pair | $\vec{v}_{AB} + \vec{v}_{BA} = 0$ |
| Chain rule | $\vec{v}_{AC} = \vec{v}_{AB} + \vec{v}_{BC}$ |

### 2D magnitude

$$|\vec{v}_{AB}| = \sqrt{v_A^2 + v_B^2 - 2 v_A v_B \cos\theta}$$

| Angle $\theta$ between $\vec{v}_A$, $\vec{v}_B$ | $|\vec{v}_{AB}|$ |
|—|—|
| $0°$ (same direction) | $\lvert v_A - v_B\rvert$ |
| $180°$ (opposite) | $v_A + v_B$ |
| $90°$ (perpendicular) | $\sqrt{v_A^2 + v_B^2}$ |

> **★ Key point · 1D quick rule**
>
> Same direction → **subtract** speeds. Opposite directions → **add** speeds.

### Rain–man problem (rain vertical at $v_r$, man horizontal at $v_m$)

$$|\vec{v}_{rm}| = \sqrt{v_r^2 + v_m^2}, \qquad \tan\alpha = \frac{v_m}{v_r} \;\;(\text{angle from vertical})$$

The man tilts his umbrella by $\alpha$ forward. Rain appears vertical only when he stops ($v_m = 0$); the faster he walks, the larger $\alpha$.

### River crossing (width $d$, boat $v_b$ in still water, current $v_r$)

| Objective | Boat direction | Time | Drift |
| --- | --- | --- | --- |
| Shortest time | Perpendicular to bank | $\dfrac{d}{v_b}$ | $\dfrac{v_r d}{v_b}$ |
| Shortest path (no drift) | Upstream at $\theta = \sin^{-1}\!\left(\dfrac{v_r}{v_b}\right)$ | $\dfrac{d}{\sqrt{v_b^2 - v_r^2}}$ | $0$ |

Shortest-path resultant speed: $v_{res} = \sqrt{v_b^2 - v_r^2}$.

> **⚠ Trap · Crossing condition**
>
> A no-drift (shortest path) crossing is only possible if $v_b > v_r$ — the boat must be faster than the current.

### Aircraft in wind

Ground velocity $= \vec{v}_g = \vec{v}_a + \vec{v}_w$ (airspeed plus wind velocity).

## Circular Motion

### Angular quantities

$$\omega = \frac{d\theta}{dt}, \qquad \alpha = \frac{d\omega}{dt}$$

One revolution $= 2\pi\ \text{rad} = 360°$.

### Linear–angular relations (radius $r$)

| Linear | Relation |
| --- | --- |
| Arc length | $s = r\theta$ |
| Linear velocity | $v = r\omega$ |
| Tangential acceleration | $a_t = r\alpha$ |

### Uniform circular motion

$$\boxed{v = r\omega}$$

$$\boxed{T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}}$$

$$\boxed{f = \frac{1}{T} = \frac{\omega}{2\pi}}$$

### Centripetal acceleration

$$\boxed{a_c = \frac{v^2}{r} = \omega^2 r = v\omega}$$

Always directed **toward the center**, perpendicular to velocity.

### Non-uniform circular motion

Two components — centripetal ($a_c = \dfrac{v^2}{r}$, toward center) and tangential ($a_t = \dfrac{dv}{dt} = r\alpha$, along tangent):

$$|a| = \sqrt{a_c^2 + a_t^2}, \qquad \tan\phi = \frac{a_t}{a_c}$$

where $\phi$ is the angle the net acceleration makes with the radius.

### Angular kinematic equations (constant $\alpha$)

| Linear form | Angular form |
| --- | --- |
| $v = u + at$ | $\omega = \omega_0 + \alpha t$ |
| $s = ut + \tfrac{1}{2}at^2$ | $\theta = \omega_0 t + \tfrac{1}{2}\alpha t^2$ |
| $v^2 = u^2 + 2as$ | $\omega^2 = \omega_0^2 + 2\alpha\theta$ |

> **⚠ Trap · Centrifugal force is not real**
>
> Centripetal force is a real force in an inertial frame (toward center). Centrifugal force is a **pseudo force** that only appears in the rotating frame (away from center) — it has no third-law reaction pair.

## Frame of Reference

Pseudo force in a non-inertial frame accelerating at $\vec{a}_{frame}$:

$$\boxed{\vec{F}_{pseudo} = -m\,\vec{a}_{frame}}$$

### Apparent weight in a lift

| Lift motion | Effective weight |
| --- | --- |
| Accelerating up (accel. $a$) | $m(g + a)$ |
| Accelerating down (accel. $a$) | $m(g - a)$ |

## One-Glance Headline Formulas

| Topic | Formula |
| --- | --- |
| First SUVAT | $v = u + at$ |
| Second SUVAT | $s = ut + \tfrac{1}{2}at^2$ |
| Third SUVAT | $v^2 = u^2 + 2as$ |
| nth second | $S_n = u + \tfrac{a}{2}(2n-1)$ |
| Max height (thrown up) | $H = \dfrac{u^2}{2g}$ |
| Time of flight (oblique) | $T = \dfrac{2u\sin\theta}{g}$ |
| Projectile max height | $H_{max} = \dfrac{u^2\sin^2\theta}{2g}$ |
| Projectile range | $R = \dfrac{u^2\sin 2\theta}{g}$ |
| Max range | $R_{max} = \dfrac{u^2}{g}$ at $45°$ |
| Relative velocity | $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$ |
| Linear–angular | $v = r\omega$ |
| Centripetal accel. | $a_c = \dfrac{v^2}{r} = \omega^2 r$ |

---

## Related Topics

- [Kinematic Equations](../kinematic-equations/index.md) — full derivations and worked patterns
- [Projectile Motion](../projectile-motion/index.md) — horizontal, oblique, and inclined-plane cases
- [Relative Velocity](../relative-velocity/index.md) — rain–man and river-crossing problems
- [Circular Motion](../circular-motion/index.md) — angular kinematics and centripetal acceleration
- [Graphical Analysis](../graphical-analysis/index.md) — slope and area interpretation

From TestGuru · our mock-test platform

## You've read Kinematics Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fformula-sheet%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/formula-sheet/",this.page.identifier="/physics/kinematics/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/kinematics/formula-sheet/](https://jeenotes.in/physics/kinematics/formula-sheet/) · raw HTML: `offline/physics/kinematics/formula-sheet/index.html`_
