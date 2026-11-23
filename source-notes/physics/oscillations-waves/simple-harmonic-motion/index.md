---
title: "Simple Harmonic Motion (SHM)"
source: "https://jeenotes.in/physics/oscillations-waves/simple-harmonic-motion/"
description: "Master SHM fundamentals - from pendulums to springs for JEE Physics"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 7"
html: "../../../../offline/physics/oscillations-waves/simple-harmonic-motion/index.html"
extracted: "2026-11-23"
---

> Master SHM fundamentals - from pendulums to springs for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Laws of Motion](../../laws-of-motion/index.md) - Forces and acceleration
- [Kinematics](../../kinematics/index.md) - Position, velocity, acceleration relationships
- [Trigonometry](../../../mathematics/trigonometry/index.md) - Sine and cosine functions

## The Hook: Thor’s Hammer and Playground Swings

> **★ Key point · Connect: From Asgard to Your Backyard**
>
> Ever noticed how **Thor’s hammer Mjolnir** swings in a perfect arc in *Thor: Ragnarok*? Or how a playground swing goes back and forth in a predictable rhythm? That’s Simple Harmonic Motion - nature’s most beautiful repetitive dance!
>
> **The Question:** Why does a pendulum always take the same time for each swing, whether it’s a small swing or a larger one? This puzzle stumped scientists for centuries until they discovered SHM!

---

## What is Simple Harmonic Motion?

**Simple Harmonic Motion (SHM)** is a special type of periodic motion where the restoring force is directly proportional to displacement and acts opposite to it.

> **◐ In simple terms · The Core Definition**
>
> **In simple terms:** SHM is like being attached to an invisible elastic band. The farther you move from the center, the stronger it pulls you back. But the pull is always proportional to how far you’ve moved.
>
> **Mathematical Definition:**
>
> $$\boxed{F = -kx}$$
>
> Where:
>
> - $F$ = Restoring force

> - $k$ = Force constant (stiffness)

> - $x$ = Displacement from equilibrium

> - The negative sign means force opposes displacement

**Key Characteristics:**

1. Motion is **periodic** - repeats after fixed time
2. Motion is **oscillatory** - back and forth about a fixed point
3. Restoring force $\propto$ displacement
4. Restoring force always directed toward equilibrium

## Interactive Pendulum Demo

> **★ Key point · Experiment with the Pendulum**
>
> **Drag the bob** to set the initial displacement, then press **Play** to watch SHM in action. Observe how energy transforms between kinetic and potential, and see the motion traced as a sine wave in real-time!

**What to observe:**

- At the **extreme positions**: Maximum PE, zero KE, maximum acceleration, zero velocity
- At **equilibrium**: Maximum KE, minimum PE, zero acceleration, maximum velocity
- The **period T** depends only on length L and gravity g (try changing the length slider!)
- The motion traces out a perfect **sine wave** on the graph below

---

## Spring-Mass Demo

Watch how displacement, velocity, and acceleration change during spring-mass SHM:

---

## The Core Equations of SHM

### Displacement Equation

$$\boxed{x = A\sin(\omega t + \phi)}$$

Or equivalently: $x = A\cos(\omega t + \phi')$

**Where:**

- $x$ = displacement at time $t$
- $A$ = amplitude (maximum displacement)
- $\omega$ = angular frequency (rad/s)
- $\phi$ = initial phase (phase constant)
- $t$ = time

> **★ Key point · Memory Trick: SODA**
>
> **S**ine **O**f **D**isplacement **A**mplitude
>
> “SHM displacement is a **SODA** wave” → $x = A\sin(\omega t)$

### Velocity in SHM

Differentiating displacement:

$$v = \frac{dx}{dt} = A\omega\cos(\omega t + \phi)$$

**At any position:**

$$\boxed{v = \omega\sqrt{A^2 - x^2}}$$

**Key Points:**

- Maximum velocity at equilibrium ($x = 0$): $v_{max} = A\omega$
- Velocity is zero at extreme positions ($x = \pm A$)

### Acceleration in SHM

Differentiating velocity:

$$a = \frac{dv}{dt} = -A\omega^2\sin(\omega t + \phi)$$

**At any position:**

$$\boxed{a = -\omega^2 x}$$

This is the **defining equation** of SHM!

**Key Points:**

- Acceleration is maximum at extremes: $a_{max} = A\omega^2$
- Acceleration is zero at equilibrium
- Acceleration always opposes displacement (negative sign)

---

## Time Period and Frequency

### Time Period (T)

Time for one complete oscillation:

$$\boxed{T = \frac{2\pi}{\omega}}$$

### Frequency (f)

Number of oscillations per second:

$$\boxed{f = \frac{1}{T} = \frac{\omega}{2\pi}}$$

### Angular Frequency ($\omega$)

$$\boxed{\omega = 2\pi f = \frac{2\pi}{T}}$$

**Relationship:**

$$\omega = 2\pi f = \frac{2\pi}{T}$$

> **★ Key point · The TFW Triangle**
>
> **T**ime, **F**requency, **W**eekly meetings
>
> Remember: $T \times f = 1$ (like time × frequency = 1 week = 7 days)

---

## Classic Examples of SHM

### 1. Spring-Mass System

A mass $m$ attached to a spring with spring constant $k$:

**Force equation:** $F = -kx$ (Hooke’s Law)

Using $F = ma$ and $a = -\omega^2 x$:

$$ma = -kx$$

$$m(-\omega^2 x) = -kx$$

$$\omega^2 = \frac{k}{m}$$

**Time Period:**

$$\boxed{T = 2\pi\sqrt{\frac{m}{k}}}$$

**Frequency:**

$$\boxed{f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}}$$

> **★ Key point · Spring Physics in Movies**
>
> In *Spider-Man: No Way Home*, when Peter Parker lands on flexible surfaces (like trampolines or elastic webs), he bounces up and down. That’s spring-mass SHM in action! Heavier Spider-Man → slower bounces (larger $T$).

**Key Insights:**

- Heavier mass → slower oscillations (larger $T$)
- Stiffer spring → faster oscillations (smaller $T$)
- Period is **independent of amplitude**!

**Combinations of Springs:**

When springs are connected in **series**:

$$\frac{1}{k_{eq}} = \frac{1}{k_1} + \frac{1}{k_2}$$

When springs are connected in **parallel**:

$$k_{eq} = k_1 + k_2$$

Use $k_{eq}$ in place of $k$ in the time period formula.

### 2. Simple Pendulum

A point mass $m$ suspended by a massless string of length $l$:

> **◐ In simple terms · Try the Interactive Demo**
>
> Scroll up to the [Interactive Pendulum Demo](#interactive-pendulum-demo) to experiment with a simple pendulum. Drag the bob, change the length, and watch how the period changes!

**For small angles** ($\theta < 15°$):

Restoring force: $F = -mg\sin\theta \approx -mg\theta = -mg\frac{x}{l}$

This gives: $\omega^2 = \frac{g}{l}$

**Time Period:**

$$\boxed{T = 2\pi\sqrt{\frac{l}{g}}}$$

**Frequency:**

$$\boxed{f = \frac{1}{2\pi}\sqrt{\frac{g}{l}}}$$

> **★ Key point · Thor's Mjolnir Pendulum**
>
> When Thor swings Mjolnir in a circle (like in *Thor: Ragnarok*), if he suddenly lets go at the top, the hammer becomes a pendulum! The time period depends only on the chain length, not on how heavy Mjolnir is!
>
> **Fun Fact:** This is why all pendulums of the same length swing together, regardless of mass.

**Key Insights:**

- Period depends only on **length** and **g**
- Period is **independent of mass**!
- Period is **independent of amplitude** (for small angles)
- Longer pendulum → slower swings

### 3. Physical Pendulum

Any rigid body oscillating about a pivot (not passing through [center of mass](../../rotational-motion/centre-of-mass/index.md)):

$$\boxed{T = 2\pi\sqrt{\frac{I}{mgd}}}$$

Where:

- $I$ = [moment of inertia](../../rotational-motion/moment-of-inertia/index.md) about pivot
- $m$ = mass
- $d$ = distance from pivot to center of mass

### 4. Torsional Pendulum

A disc suspended by a wire, executing rotational oscillations:

$$\boxed{T = 2\pi\sqrt{\frac{I}{C}}}$$

Where:

- $I$ = moment of inertia
- $C$ = torsional constant of wire

---

## Phase in SHM

**Phase** at time $t$: $\phi(t) = \omega t + \phi_0$

**Phase difference** between two SHM:

$$\Delta\phi = (\omega t + \phi_1) - (\omega t + \phi_2) = \phi_1 - \phi_2$$

### Special Cases

| Phase Difference | Relationship |
| --- | --- |
| $0$ or $2\pi$ | In phase (same motion) |
| $\pi$ | Out of phase (opposite motion) |
| $\frac{\pi}{2}$ | 90° out of phase (quadrature) |

> **◐ In simple terms · Phase Analogy**
>
> Think of two identical swings in a playground:
>
> - **In phase** ($\Delta\phi = 0$): Both reach maximum at same time

> - **Out of phase** ($\Delta\phi = \pi$): One at max when other at min

> - **90° out of phase**: One at max when other passes through center

---

## Summary Table: SHM Formulas

| Quantity | Formula | Maximum Value |
| --- | --- | --- |
| Displacement | $x = A\sin(\omega t + \phi)$ | $A$ |
| Velocity | $v = \omega\sqrt{A^2 - x^2}$ | $v_{max} = A\omega$ (at $x=0$) |
| Acceleration | $a = -\omega^2 x$ | $a_{max} = A\omega^2$ (at $x=\pm A$) |
| Time Period | $T = \frac{2\pi}{\omega}$ | — |
| Frequency | $f = \frac{1}{T} = \frac{\omega}{2\pi}$ | — |

---

## When to Use SHM

> **★ Key point · Decision Tree**
>
> **Is it SHM?** Check these conditions:
>
> 1. **Does it oscillate?** (back and forth motion)

> 2. **Is there a restoring force?** (pulls toward equilibrium)

> 3. **Is $F \propto x$?** (force proportional to displacement)
>
> If YES to all three → It’s SHM!
>
> **Examples:**
>
> - Spring-mass: YES (Hooke’s law)

> - Simple pendulum (small angles): YES

> - Ball rolling in curved bowl: YES

> - Pendulum at large angles: NO (not proportional)

> - Damped oscillations: NO (amplitude decreases)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Frequency and Angular Frequency**
>
> **Wrong:** $T = \frac{2\pi}{f}$
>
> **Right:** $T = \frac{1}{f} = \frac{2\pi}{\omega}$
>
> Remember: $\omega = 2\pi f$ (angular frequency has the $2\pi$!)

> **⚠ Trap #2: Pendulum Depends on Mass**
>
> **Wrong:** Heavier bob → slower pendulum
>
> **Right:** Mass doesn’t matter! Only length and g matter.
>
> $$T = 2\pi\sqrt{\frac{l}{g}}$$
>
> (no $m$ in formula!)

> **⚠ Trap #3: Maximum Velocity and Acceleration Location**
>
> **Mistake:** Thinking $v_{max}$ and $a_{max}$ occur at same position
>
> **Truth:**
>
> - $v_{max}$ at **equilibrium** ($x = 0$)

> - $a_{max}$ at **extremes** ($x = \pm A$)
>
> They’re at **opposite** locations!

> **⚠ Trap #4: Time Period Depends on Amplitude**
>
> **Wrong:** Larger swing → longer time period
>
> **Right:** Time period is **independent** of amplitude in SHM!
>
> A small swing and large swing of the same pendulum take the **same time**.

---

## Memory Tricks & Patterns

### The VAX Relationship

**Memory Trick:** “**V**elocity **A**nd **X**-position dance opposite”

- When $v$ is maximum, $x = 0$
- When $x$ is maximum, $v = 0$
- When $a$ is maximum, $x$ is maximum

### The “VMAX-AT-ZERO” Rule

**V**elocity is **MAX** **AT** **ZERO** displacement

$$v_{max} = A\omega \text{ at } x = 0$$

### Spring Constant Memory

“**Stiffer Spring, Shorter Time**”

$$T = 2\pi\sqrt{\frac{m}{k}}$$

Larger $k$ (stiffer) → smaller $T$ (faster oscillations)

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1.1**
>
> A particle executes SHM with amplitude 10 cm and time period 2 s. Find the maximum velocity.
>
> **Solution:**

> $\omega = \frac{2\pi}{T} = \frac{2\pi}{2} = \pi$ rad/s
>
> $v_{max} = A\omega = 0.1 \times \pi = 0.314$ m/s = **31.4 cm/s**

> **↗ Connection · Problem 1.2**
>
> A spring with spring constant 200 N/m has a 2 kg mass attached. Find the time period.
>
> **Solution:**
>
> $$T = 2\pi\sqrt{\frac{m}{k}} = 2\pi\sqrt{\frac{2}{200}} = 2\pi\sqrt{0.01} = 2\pi \times 0.1$$
>
> $T = 0.2\pi = $ **0.628 s**

> **↗ Connection · Problem 1.3**
>
> A simple pendulum has a time period of 2 s on Earth. What is its length? ($g = 10$ m/s²)
>
> **Solution:**
>
> $$T = 2\pi\sqrt{\frac{l}{g}}$$

$$2 = 2\pi\sqrt{\frac{l}{10}}$$

$$1 = \pi\sqrt{\frac{l}{10}}$$

$$\frac{1}{\pi} = \sqrt{\frac{l}{10}}$$

$$\frac{1}{\pi^2} = \frac{l}{10}$$

$$l = \frac{10}{\pi^2} = \frac{10}{9.87} \approx $$
>
> **1.01 m**

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A particle in SHM has velocity 8 m/s when passing through equilibrium and 6 m/s when at distance 6 cm from equilibrium. Find amplitude and maximum acceleration.
>
> **Solution:**

> At equilibrium: $v_{max} = A\omega = 8$ &mldr;(1)
>
> At $x = 0.06$ m: $v = \omega\sqrt{A^2 - x^2}$
>
> $$6 = \omega\sqrt{A^2 - 0.0036}$$
>
> &mldr;(2)
>
> From (1): $\omega = \frac{8}{A}$
>
> Substituting in (2):
>
> $$6 = \frac{8}{A}\sqrt{A^2 - 0.0036}$$

$$6A = 8\sqrt{A^2 - 0.0036}$$

$$36A^2 = 64(A^2 - 0.0036)$$

$$36A^2 = 64A^2 - 0.2304$$

$$28A^2 = 0.2304$$

$$A^2 = 0.00823$$

$$A = 0.0907$$
>
> m = **9.07 cm** (but this doesn’t match cleanly)
>
> Let me recalculate:

> $64 = A^2\omega^2$ and $36 = \omega^2(A^2 - 0.0036)$
>
> $64 - 36 = 28 = \omega^2 \times 0.0036$

> $\omega^2 = \frac{28}{0.0036} = 7777.78$

> $\omega = 88.2$ rad/s
>
> $A = \frac{8}{88.2} = 0.0907$ m ≈ **0.09 m = 9 cm**
>
> Wait, let me use simpler numbers. Using $v_{max}^2 - v^2 = \omega^2 x^2$:

> $64 - 36 = \omega^2 \times 0.0036$

> $\omega^2 = \frac{28}{0.0036} = 7777.78$

> $\omega = 88.19$ rad/s
>
> From $v_{max} = A\omega$: $A = \frac{8}{88.19} = 0.0907$ m
>
> Actually, let’s verify with $v^2 = \omega^2(A^2 - x^2)$:

> $36 = 7777.78(0.0907^2 - 0.06^2) = 7777.78(0.00823 - 0.0036) = 7777.78 \times 0.00463 = 36$ ✓
>
> **Amplitude:** $A = 0.09$ m = **9 cm** (approximately, or solve exactly to get $A = 0.1$ m = **10 cm**)
>
> Let me redo with cleaner math:

> $v_{max}^2 = 64$, $v^2 = 36$ at $x = 0.06$

> $v_{max}^2 - v^2 = \omega^2 x^2$

> $64 - 36 = \omega^2(0.06)^2$

> $28 = \omega^2 \times 0.0036$

> $\omega^2 = 7777.78$
>
> $v_{max} = A\omega$, so $A = \frac{8}{\sqrt{7777.78}} = \frac{8}{88.19} = 0.0907$ m
>
> But if $A = 0.1$ m exactly:

> $\omega = \frac{8}{0.1} = 80$ rad/s

> Check: $v = 80\sqrt{0.01 - 0.0036} = 80\sqrt{0.0064} = 80 \times 0.08 = 6.4$ (not 6)
>
> So answer is: **$A \approx 0.09$ m**, $a_{max} = A\omega^2 = 0.09 \times 7777.78 = $ **700 m/s²**
>
> (Or with $A = 0.1, \omega = 80$: $a_{max} = 0.1 \times 6400 = 640$ m/s²)

> **↗ Connection · Problem 2.2**
>
> Two springs with spring constants $k_1$ and $k_2$ are connected in series with a mass $m$. Find the time period.
>
> **Solution:**

> For springs in series:
>
> $$\frac{1}{k_{eff}} = \frac{1}{k_1} + \frac{1}{k_2}$$

$$k_{eff} = \frac{k_1 k_2}{k_1 + k_2}$$
>
> Time period:
>
> $$\boxed{T = 2\pi\sqrt{\frac{m(k_1 + k_2)}{k_1 k_2}}}$$

> **↗ Connection · Problem 2.3**
>
> A simple pendulum has period $T$ on Earth. What will be its period on Moon where $g_{moon} = \frac{g_{earth}}{6}$?
>
> **Solution:**
>
> $$T \propto \frac{1}{\sqrt{g}}$$

$$\frac{T_{moon}}{T_{earth}} = \sqrt{\frac{g_{earth}}{g_{moon}}} = \sqrt{6}$$

$$T_{moon} = T_{earth}\sqrt{6} = \sqrt{6} \cdot T$$
>
> **Answer:** $T_{moon} = \sqrt{6} \cdot T \approx $ **2.45T**

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A block of mass $m$ is attached to two springs in a horizontal line. Spring constants are $k_1$ and $k_2$. Both springs are initially unstretched. Find the time period of oscillation.
>
> **Solution:**

> When block moves by $x$:
>
> - Spring 1 exerts force: $F_1 = -k_1 x$ (toward equilibrium)

> - Spring 2 exerts force: $F_2 = -k_2 x$ (toward equilibrium)
>
> Total restoring force: $F = -k_1 x - k_2 x = -(k_1 + k_2)x$
>
> Effective spring constant: $k_{eff} = k_1 + k_2$ (springs in parallel)
>
> $$\boxed{T = 2\pi\sqrt{\frac{m}{k_1 + k_2}}}$$

> **↗ Connection · Problem 3.2**
>
> A particle executes SHM with amplitude $A$. At what displacement is the kinetic energy equal to potential energy?
>
> **Solution:**

> In SHM, total energy: $E = \frac{1}{2}kA^2 = KE + PE$
>
> At position $x$:
>
> - $KE = \frac{1}{2}m\omega^2(A^2 - x^2)$

> - $PE = \frac{1}{2}m\omega^2 x^2$
>
> For $KE = PE$:
>
> $$\frac{1}{2}m\omega^2(A^2 - x^2) = \frac{1}{2}m\omega^2 x^2$$

$$A^2 - x^2 = x^2$$

$$A^2 = 2x^2$$

$$x = \pm\frac{A}{\sqrt{2}}$$
>
> **Answer:** At $x = \pm\frac{A}{\sqrt{2}}$ (or $\pm 0.707A$)

> **↗ Connection · Problem 3.3**
>
> A simple pendulum of length $l$ is suspended from the ceiling of a car accelerating horizontally with acceleration $a$. Find the time period of small oscillations.
>
> **Solution:**

> In the car’s frame (non-inertial), there’s a pseudo force $ma$ backward.
>
> Effective gravity: $g_{eff} = \sqrt{g^2 + a^2}$
>
> Time period in accelerating frame:
>
> $$\boxed{T = 2\pi\sqrt{\frac{l}{\sqrt{g^2 + a^2}}}}$$
>
> Or: $T = 2\pi\sqrt{\frac{l}{g_{eff}}}$ where $g_{eff} = \sqrt{g^2 + a^2}$

---

## Quick Revision Box

| System | Time Period | Key Feature |
| --- | --- | --- |
| Spring-mass | $T = 2\pi\sqrt{\frac{m}{k}}$ | Independent of $g$ |
| Simple pendulum | $T = 2\pi\sqrt{\frac{l}{g}}$ | Independent of $m$ |
| Physical pendulum | $T = 2\pi\sqrt{\frac{I}{mgd}}$ | Depends on $I$ and $d$ |
| Torsional pendulum | $T = 2\pi\sqrt{\frac{I}{C}}$ | Rotational oscillation |

**Universal SHM Relations:**

- $v_{max} = A\omega$ (at equilibrium)
- $a_{max} = A\omega^2$ (at extremes)
- $v = \omega\sqrt{A^2 - x^2}$ (at any position)
- $a = -\omega^2 x$ (defining equation)

---

## Related Topics

### Within Oscillations & Waves

- [SHM Energy](../shm-energy/index.md) — Energy transformations in oscillations
- [Wave Motion](../wave-motion/index.md) — SHM leads to wave propagation
- [Superposition of Waves](../superposition-waves/index.md) — Combining multiple SHM

### Connected Chapters

- [Newton’s Laws](../../laws-of-motion/index.md) — Foundation for force analysis
- [Work-Energy-Power](../../work-energy-power/index.md) — Energy in SHM
- [Rotational Motion](../../rotational-motion/index.md) — For physical pendulum
- [Gravitation](../../gravitation/index.md) — Pendulum on different planets
- [Vertical Circular Motion](../../work-energy-power/vertical-circular-motion/index.md) — Oscillations vs complete circles

### Math Connections

- [Trigonometry](../../../mathematics/trigonometry/index.md) — Sine and cosine in SHM
- [Differentiation](../../../mathematics/limits-continuity-differentiability/index.md) — Deriving $v$ and $a$
- [Differential Equations](../../../mathematics/differential-equations/index.md) — Solving SHM equation

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **SHM is defined by:** $F = -kx$ or $a = -\omega^2 x$

> 2. **Three golden formulas:**
>
>    - Displacement: $x = A\sin(\omega t + \phi)$

>    - Velocity: $v = \omega\sqrt{A^2 - x^2}$

>    - Acceleration: $a = -\omega^2 x$

> 3. **Time period patterns:**
>
>    - Spring: $T \propto \sqrt{m}$ and $T \propto \frac{1}{\sqrt{k}}$

>    - Pendulum: $T \propto \sqrt{l}$ and $T \propto \frac{1}{\sqrt{g}}$

>    - Both are **independent of amplitude!**

> 4. **Maximum locations:**
>
>    - $v_{max}$ at **equilibrium** ($x = 0$)

>    - $a_{max}$ at **extremes** ($x = \pm A$)

> 5. **JEE Strategy:** Most SHM problems boil down to identifying the system (spring/pendulum), finding $\omega$, and using the three golden formulas above.
>
> **“In SHM, the universe pulls you back proportionally — the perfect balance between freedom and constraint.”**

---

From TestGuru · our mock-test platform

## You've read Simple Harmonic Motion (SHM).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=oscillations-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Foscillations-waves%2Fsimple-harmonic-motion%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-17

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/oscillations-waves/simple-harmonic-motion/",this.page.identifier="/physics/oscillations-waves/simple-harmonic-motion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="interactivePendulum" id="anim-interactivePendulum-1795396424079168446"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-interactivePendulum-1795396424079168446")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="simpleHarmonicMotion" id="anim-simpleHarmonicMotion-1795396424079196694"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-simpleHarmonicMotion-1795396424079196694")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/oscillations-waves/simple-harmonic-motion/](https://jeenotes.in/physics/oscillations-waves/simple-harmonic-motion/) · raw HTML: `offline/physics/oscillations-waves/simple-harmonic-motion/index.html`_
