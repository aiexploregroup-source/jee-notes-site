---
title: "Work, Energy and Power Formula Sheet"
source: "https://jeenotes.in/physics/work-energy-power/formula-sheet/"
description: "Every key Work, Energy and Power formula for JEE Physics — work, KE, PE, conservation, vertical circular motion, power and collisions, in one quick-revision sheet."
updated: "2026-11-22"
reading_time: "7 min read"
breadcrumb: "Physics"
position: "/ Topic 10 of 10"
html: "../../../../offline/physics/work-energy-power/formula-sheet/index.html"
extracted: "2026-11-23"
---

> Every key Work, Energy and Power formula for JEE Physics — work, KE, PE, conservation, vertical circular motion, power and collisions, in one quick-revision sheet.

Last-minute revision sheet for the entire Work, Energy and Power chapter. Every formula below is pulled directly from the chapter topics — scan it the night before the exam.

## Work Done by Forces

| Quantity | Formula | Notes |
| --- | --- | --- |
| Work (constant force) | $W = \vec{F} \cdot \vec{s} = Fs\cos\theta$ | $\theta$ = angle between $\vec{F}$ and $\vec{s}$; unit J = N·m |
| Component form | $W = (F\cos\theta)\,s = F_{\parallel}\,s$ | Only force component along displacement does work |
| Work (variable force) | $W = \int_A^B \vec{F}\cdot d\vec{r}$ | General path integral |
| Work (1D variable) | $W = \int_{x_1}^{x_2} F(x)\,dx$ | Equals area under the $F$–$x$ curve |

$$\boxed{W = \vec{F} \cdot \vec{s} = Fs\cos\theta}$$

### Sign Convention

| Condition | $\cos\theta$ | Work | Meaning |
| --- | --- | --- | --- |
| $\theta < 90^\circ$ | Positive | Positive | Force aids motion, energy added |
| $\theta = 90^\circ$ | Zero | Zero | Force perpendicular to motion |
| $\theta > 90^\circ$ | Negative | Negative | Force opposes motion, energy removed |

### Work by Common Forces

| Force | Work | Sign | Notes |
| --- | --- | --- | --- |
| Gravity (moving down by $h$) | $W = mgh$ | + | Path independent |
| Gravity (moving up by $h$) | $W = -mgh$ | $-$ | Path independent |
| Spring (deformed by $x$) | $W_{spring} = -\tfrac{1}{2}kx^2$ | $-$ | From natural length; opposes displacement |
| External force on spring | $W_{ext} = +\tfrac{1}{2}kx^2$ | + | To stretch/compress |
| Kinetic friction over $s$ | $W_f = -\mu_k mg\,s = -f_k s$ | $-$ | Path dependent |
| Normal force | $W_{normal} = 0$ | 0 | Perpendicular |
| Centripetal force | $W = 0$ | 0 | Perpendicular |

> **★ Key point · High-yield reminder**
>
> Gravity, spring and electrostatic forces are **conservative** (work is path-independent). Friction, air resistance and viscous drag are **non-conservative**.

## Kinetic Energy

$$\boxed{KE = \frac{1}{2}mv^2 = \frac{p^2}{2m}}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Kinetic energy | $KE = \tfrac{1}{2}mv^2$ | Always positive, scalar, frame-dependent |
| KE from momentum | $KE = \dfrac{p^2}{2m}$ | with $p = mv$ |
| Change in KE | $\Delta KE = \tfrac{1}{2}m(v_2^2 - v_1^2) = \tfrac{1}{2}m(v_2+v_1)(v_2-v_1)$ |  |
| Rotational KE | $KE_{rot} = \tfrac{1}{2}I\omega^2$ | $I$ = moment of inertia |
| Rolling (total) KE | $KE = \tfrac{1}{2}mv_{cm}^2 + \tfrac{1}{2}I_{cm}\omega^2$ | Translation + rotation |
| Relativistic KE | $KE = (\gamma - 1)mc^2,\ \gamma = \dfrac{1}{\sqrt{1 - v^2/c^2}}$ | For reference only |

### KE–Momentum Comparisons

- For **same momentum**: $KE \propto \dfrac{1}{m}$ (lighter body has more KE)
- For **same kinetic energy**: $p \propto \sqrt{m}$ (heavier body has more momentum)

### Percentage Change in KE

If speed changes by fractional factor $x$:

$$\frac{\Delta KE}{KE} = (1+x)^2 - 1 = 2x + x^2 \quad\Rightarrow\quad \approx 2x \ \text{(small } x)$$

> **⚠ Trap · Common Mistake**
>
> If speed **doubles**, KE becomes $4\times$, not $2\times$: $KE' = \tfrac{1}{2}m(2v)^2 = 4KE$.

## Work–Energy Theorem

$$\boxed{W_{net} = \Delta KE = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2}$$

$W_{net}$ is the work done by **all forces** combined (gravity + friction + applied + normal + spring + tension):

$$W_1 + W_2 + W_3 + \dots = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

| Net Work | Effect |
| --- | --- |
| Positive | Speed increases (KE up) |
| Negative | Speed decreases (KE down) |
| Zero | Speed unchanged |

### JEE Pattern Results

| Situation | Result |
| --- | --- |
| Block stops on friction (speed $v$, distance $s$) | $\mu = \dfrac{v^2}{2gs}$ |
| Spring (constant $k$, compression $x$) launches mass $m$ | $v = x\sqrt{\dfrac{k}{m}}$ |
| Fall from height $h$ | $v = \sqrt{2gh}$ |
| Block down rough incline (angle $\theta$, height $h$) | $v = \sqrt{2gh\,(1 - \mu\cot\theta)}$ |
| Bullet penetrates distance $d$ (speed $v$) | $F = \dfrac{mv^2}{2d}$ |

Spring work between two states: $W_{spring} = \tfrac{1}{2}kx_i^2 - \tfrac{1}{2}kx_f^2$ (not always $\tfrac{1}{2}kx^2$).

> **⚠ Trap · Traps to avoid**
>
> Normal force does work only when it is **not** perpendicular to displacement (e.g. on a moving incline). For an inextensible string the **net** work by tension on a system is zero, but tension does work on each body individually.

## Potential Energy

$$\boxed{U_g = mgh \qquad U_s = \frac{1}{2}kx^2}$$

| System | Potential Energy | Force |
| --- | --- | --- |
| Gravitational (near Earth) | $U = mgh$ | $F = -mg$ |
| Spring | $U = \tfrac{1}{2}kx^2$ | $F = -kx$ |
| Gravitational (general) | $U = -\dfrac{GMm}{r}$ | $F = -\dfrac{GMm}{r^2}$ |
| Electric | $U = \dfrac{kq_1q_2}{r}$ | $F = \dfrac{kq_1q_2}{r^2}$ |

### Force–Potential Energy Relation

$$\boxed{F = -\frac{dU}{dx}} \qquad \vec{F} = -\nabla U = -\left(\frac{\partial U}{\partial x}\hat{i} + \frac{\partial U}{\partial y}\hat{j} + \frac{\partial U}{\partial z}\hat{k}\right)$$

For conservative forces:

$$W_{conservative} = -\Delta U = U_i - U_f$$

### Equilibrium from PE Curve

| Type | $F = 0$ | $\dfrac{d^2U}{dx^2}$ | PE Curve | Behaviour |
| --- | --- | --- | --- | --- |
| Stable | Yes | $> 0$ | Minimum | Returns when displaced |
| Unstable | Yes | $< 0$ | Maximum | Moves away when displaced |
| Neutral | Yes | $= 0$ | Flat | Stays at new position |

## Conservation of Mechanical Energy

$$\boxed{KE_i + PE_i = KE_f + PE_f}$$

With non-conservative forces present:

$$\boxed{W_{nc} = \Delta E_{mech} = (KE_f + PE_f) - (KE_i + PE_i)}$$

For friction specifically ($f\cdot s$ lost to heat):

$$KE_i + PE_i - f\,s = KE_f + PE_f$$

### Standard Scenarios

| Scenario | Result |
| --- | --- |
| Free fall / smooth incline from height $h$ | $v = \sqrt{2gh}$ |
| Vertical launch (max height) | $h_{max} = \dfrac{v^2}{2g}$ |
| Spring (compression $x$) launches mass $m$ | $v = \sqrt{\dfrac{k}{m}}\,x$ |
| Rough incline (angle $\theta$, length $s$) | $mgh - \mu mg\cos\theta\, s = \tfrac{1}{2}mv^2$ |
| Atwood ($m_1$ falls height $h$) | $m_1gh - m_2gh = \tfrac{1}{2}(m_1+m_2)v^2$ |

> **★ Key point · When to use energy conservation**
>
> Best for problems linking **heights and speeds** where time and acceleration are not needed. Use the modified equation when friction acts; switch to impulse-momentum for impulsive forces.

## Vertical Circular Motion

Object of mass $m$ on a string of length $r$.

| Point | Tension |
| --- | --- |
| Bottom | $T_{bottom} = mg + \dfrac{mv_{bottom}^2}{r}$ (maximum) |
| Top | $T_{top} = \dfrac{mv_{top}^2}{r} - mg$ (minimum) |
| Angle $\theta$ from vertical | $T = mg\cos\theta + \dfrac{mv^2}{r}$ |

### Critical (Minimum) Speeds — String

$$\boxed{v_{top}^{\,min} = \sqrt{gr} \qquad v_{bottom}^{\,min} = \sqrt{5gr}}$$

| Quantity | Value at critical speed |
| --- | --- |
| Tension at bottom | $T_{bottom} = 6mg$ |
| Tension at top | $T_{top} = 0$ |
| Tension difference (always) | $T_{bottom} - T_{top} = 6mg$ |

Speed at height $h = r(1-\cos\theta)$ above bottom:

$$v^2 = v_{bottom}^2 - 2gr(1 - \cos\theta)$$

### Below Critical Speed

| Range | Behaviour |
| --- | --- |
| $v_{bottom} < \sqrt{2gr}$ | Oscillates (does not reach horizontal) |
| $\sqrt{2gr} < v_{bottom} < \sqrt{5gr}$ | String goes slack, becomes projectile |

Angle where string goes slack: $\cos\theta = \dfrac{v_{bottom}^2 - 2gr}{3gr}$

### String vs Rigid Rod

| Aspect | String | Rigid Rod |
| --- | --- | --- |
| $v_{top}^{min}$ | $\sqrt{gr}$ | $0$ |
| $v_{bottom}^{min}$ | $\sqrt{5gr}$ | $2\sqrt{gr} = \sqrt{4gr}$ |
| Goes slack? | Yes | No |

## Power

$$\boxed{P = \frac{dW}{dt} = \vec{F}\cdot\vec{v} = Fv\cos\theta}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Average power | $P_{avg} = \dfrac{W_{total}}{t_{total}} = \dfrac{\Delta E}{\Delta t}$ |  |
| Instantaneous power | $P = \vec{F}\cdot\vec{v}$ | Force component along $v$ times speed |
| Lifting at constant $v$ | $P = mgv$ |  |
| Vehicle on level road | $P = fv$ | $f$ = resistive force |
| Vehicle up an incline | $P = (mg\sin\theta + f)v$ |  |
| Max velocity (resistance $f$) | $P = f_{max}\,v_{max}$ |  |
| Max velocity ($f = kv^2$) | $v_{max} = \left(\dfrac{P}{k}\right)^{1/3}$ |  |

### Motion Under Constant Power (from rest)

$$\boxed{v = \sqrt{\frac{2Pt}{m}}} \qquad x = \frac{2}{3}\sqrt{\frac{2P}{m}}\,t^{3/2}$$

So $v \propto \sqrt{t}$ and $x \propto t^{3/2}$. Area under a $P$–$t$ graph equals work done: $\int P\,dt = W$.

### Units

| Unit | Value |
| --- | --- |
| 1 W | $1\,\text{J/s} = 1\,\text{kg}\cdot\text{m}^2/\text{s}^3$ |
| 1 horsepower (hp) | $746\,\text{W}$ |
| 1 kWh (energy) | $3.6 \times 10^6\,\text{J}$ |

> **◐ In simple terms · Watch the unit**
>
> **kWh is a unit of energy**, not power: $1\,\text{kWh} = 1000\,\text{W} \times 3600\,\text{s} = 3.6\times10^6\,\text{J}$.

## Collisions

Momentum is **always** conserved (no external force), whether or not KE is conserved.

| Type | Momentum | Kinetic Energy | $e$ |
| --- | --- | --- | --- |
| Elastic | Conserved | Conserved | $1$ |
| Inelastic | Conserved | Not conserved | $0 < e < 1$ |
| Perfectly inelastic | Conserved | Maximum loss | $0$ |

### Coefficient of Restitution

$$\boxed{e = \frac{v_2 - v_1}{u_1 - u_2} = \frac{\text{velocity of separation}}{\text{velocity of approach}}}$$

### Elastic Collision (1D)

Conservation:

$$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2 \qquad \tfrac{1}{2}m_1u_1^2 + \tfrac{1}{2}m_2u_2^2 = \tfrac{1}{2}m_1v_1^2 + \tfrac{1}{2}m_2v_2^2$$

Final velocities:

$$\boxed{v_1 = \frac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2}} \qquad \boxed{v_2 = \frac{(m_2 - m_1)u_2 + 2m_1u_1}{m_1 + m_2}}$$

### Special Cases (Elastic)

| Case | Result |
| --- | --- |
| Equal masses ($m_1 = m_2$) | $v_1 = u_2,\ v_2 = u_1$ (velocities exchanged) |
| Equal masses, $u_2 = 0$ | Mover stops ($v_1 = 0$), target moves with $v_2 = u_1$ |
| Heavy hits light at rest ($m_1 \gg m_2$) | $v_1 \approx u_1,\ v_2 \approx 2u_1$ |
| Light hits heavy at rest ($m_1 \ll m_2$) | $v_1 \approx -u_1,\ v_2 \approx 0$ |

### Perfectly Inelastic Collision (bodies stick)

$$\boxed{v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}} \qquad \boxed{\Delta KE = \frac{1}{2}\frac{m_1m_2}{m_1 + m_2}(u_1 - u_2)^2}$$

This $\Delta KE$ is the **maximum possible** loss for given masses and velocities.

### General Inelastic Collision (coefficient $e$)

$$v_2 - v_1 = e(u_1 - u_2)$$

$$v_1 = \frac{m_1u_1 + m_2u_2 - em_2(u_1 - u_2)}{m_1 + m_2} \qquad v_2 = \frac{m_1u_1 + m_2u_2 + em_1(u_1 - u_2)}{m_1 + m_2}$$

$$\Delta KE = \frac{1}{2}\frac{m_1m_2}{m_1 + m_2}(1 - e^2)(u_1 - u_2)^2$$

### Two-Dimensional Collisions

Conserve momentum component-wise:

$$m_1u_{1x} + m_2u_{2x} = m_1v_{1x} + m_2v_{2x} \qquad m_1u_{1y} + m_2u_{2y} = m_1v_{1y} + m_2v_{2y}$$

> **★ Key point · 2D elastic, equal masses**
>
> In a 2D elastic collision between **equal masses** with one initially at rest, the two bodies move **perpendicular** to each other after impact: $\vec{v_1} \perp \vec{v_2}$.

## Constants and Key Values

| Constant | Value |
| --- | --- |
| 1 horsepower | $746\,\text{W}$ |
| 1 kWh | $3.6 \times 10^6\,\text{J}$ |
| Elastic collision | $e = 1$ |
| Perfectly inelastic collision | $e = 0$ |

> **★ Key point · JEE Exam Focus**
>
> High-yield topics: work-energy theorem, conservation problems, and collisions. Most common errors are sign mistakes in work calculations and forgetting non-conservative forces.

## Keep studying this chapter

- [Work, Energy and Power chapter notes](../index.md)
- [Work, Energy and Power previous year questions](../previous-year-questions/index.md)

From TestGuru · our mock-test platform

## You've read Work, Energy and Power Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=work-energy-power&tg_exam=jee-main&tg_page=%2Fphysics%2Fwork-energy-power%2Fformula-sheet%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/work-energy-power/formula-sheet/",this.page.identifier="/physics/work-energy-power/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/work-energy-power/formula-sheet/](https://jeenotes.in/physics/work-energy-power/formula-sheet/) · raw HTML: `offline/physics/work-energy-power/formula-sheet/index.html`_
