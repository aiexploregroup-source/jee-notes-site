---
title: "Energy in Simple Harmonic Motion"
source: "https://jeenotes.in/physics/oscillations-waves/shm-energy/"
description: "Master kinetic and potential energy transformations in SHM for JEE Physics"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 7"
html: "../../../../offline/physics/oscillations-waves/shm-energy/index.html"
extracted: "2026-11-23"
---

> Master kinetic and potential energy transformations in SHM for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) - SHM fundamentals, equations
- [Work-Energy-Power](../../work-energy-power/index.md) - Kinetic and potential energy concepts
- [Conservation of Energy](../../work-energy-power/conservation-energy/index.md) - Energy conservation principle

## The Hook: The Pendulum Paradox

> **★ Key point · Connect: From Playground to Physics**
>
> Ever wondered why a swing keeps going back to the same height (ignoring friction)? When you’re at the top, you’re not moving — all your energy is “stored.” At the bottom, you’re moving fastest — all energy is in motion. Where does the energy go and come from?
>
> **The Marvel Connection:** In *Doctor Strange in the Multiverse of Madness*, when magical energy shields form and flex, they’re like giant springs — storing energy when compressed, releasing it when expanding. That’s energy transformation in SHM!
>
> **The Question:** If a pendulum has zero velocity at the top and maximum velocity at the bottom, where exactly is half the energy kinetic and half potential?

---

## Energy in SHM: The Core Idea

In SHM, energy continuously transforms between two forms:

1. **Kinetic Energy (KE)** - energy of motion
2. **Potential Energy (PE)** - energy of position

But the **total mechanical energy remains constant** (in ideal SHM without damping).

> **◐ In simple terms · Energy Conservation in SHM**
>
> **In simple terms:** SHM is like a perfect energy exchange. When you’re moving fast (high KE), you’re near equilibrium (low PE). When you stop at extremes (zero KE), all energy is stored (maximum PE).
>
> **The Golden Rule:**
>
> $$\boxed{E_{total} = KE + PE = \text{constant}}$$

## Interactive Demo

Watch energy transformation during SHM oscillation:

---

## Kinetic Energy in SHM

At position $x$ with velocity $v$:

$$KE = \frac{1}{2}mv^2$$

Since $v = \omega\sqrt{A^2 - x^2}$ in SHM:

$$\boxed{KE = \frac{1}{2}m\omega^2(A^2 - x^2)}$$

**Alternative form using spring constant $k = m\omega^2$:**

$$\boxed{KE = \frac{1}{2}k(A^2 - x^2)}$$

### Special Cases

**At equilibrium** ($x = 0$):

$$KE_{max} = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}kA^2$$

**At extremes** ($x = \pm A$):

$$KE_{min} = 0$$

> **★ Key point · Memory Trick: ZERO-EXTREME**
>
> **KE is ZERO at EXTREME positions**
>
> When displacement is maximum, velocity (and KE) is zero.

---

## Potential Energy in SHM

### For Spring-Mass System

The restoring force is $F = -kx$, so work done against this force stores potential energy:

$$PE = \frac{1}{2}kx^2$$

Using $k = m\omega^2$:

$$\boxed{PE = \frac{1}{2}m\omega^2 x^2}$$

### Special Cases

**At equilibrium** ($x = 0$):

$$PE_{min} = 0$$

**At extremes** ($x = \pm A$):

$$PE_{max} = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2$$

> **★ Key point · Memory Trick: MAXIMUM-EXTREME**
>
> **PE is MAXIMUM at EXTREME positions**
>
> When displacement is maximum, all energy is potential.

---

## Total Mechanical Energy

Adding KE and PE:

$$E = KE + PE$$

$$E = \frac{1}{2}m\omega^2(A^2 - x^2) + \frac{1}{2}m\omega^2 x^2$$

$$E = \frac{1}{2}m\omega^2 A^2$$

**Total Energy (constant):**

$$\boxed{E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}kA^2}$$

**Key Insights:**

- Total energy depends only on **amplitude** $A$
- Energy is **independent of position** $x$
- Energy is **independent of time** $t$
- Larger amplitude → more energy

> **◐ In simple terms · Energy Conservation Check**
>
> At any position:
>
> $$\frac{1}{2}m\omega^2(A^2 - x^2) + \frac{1}{2}m\omega^2 x^2 = \frac{1}{2}m\omega^2 A^2$$
>
> ✓
>
> At equilibrium ($x = 0$):
>
> $$KE_{max} = \frac{1}{2}m\omega^2 A^2 = E$$
>
> ✓
>
> At extreme ($x = A$):
>
> $$PE_{max} = \frac{1}{2}m\omega^2 A^2 = E$$
>
> ✓

---

## Energy Distribution at Different Positions

| Position | Displacement | KE | PE |
| --- | --- | --- | --- |
| Equilibrium | $x = 0$ | $E$ (100%) | $0$ (0%) |
| Midpoint | $x = \frac{A}{2}$ | $\frac{3E}{4}$ (75%) | $\frac{E}{4}$ (25%) |
| Equal energy point | $x = \frac{A}{\sqrt{2}}$ | $\frac{E}{2}$ (50%) | $\frac{E}{2}$ (50%) |
| Extreme | $x = A$ | $0$ (0%) | $E$ (100%) |

> **◐ In simple terms · The 50-50 Point**
>
> **Question:** At what position is KE = PE?
>
> **Answer:** When $x = \frac{A}{\sqrt{2}} = 0.707A$
>
> **Proof:**
>
> $$KE = PE$$

$$\frac{1}{2}k(A^2 - x^2) = \frac{1}{2}kx^2$$

$$A^2 - x^2 = x^2$$

$$A^2 = 2x^2$$

$$x = \frac{A}{\sqrt{2}}$$
>
> This is a **very common JEE question**!

---

## Average Kinetic and Potential Energy

Over one complete cycle:

**Average KE:**

$$\langle KE \rangle = \frac{1}{T}\int_0^T KE \, dt = \frac{E}{2}$$

**Average PE:**

$$\langle PE \rangle = \frac{1}{T}\int_0^T PE \, dt = \frac{E}{2}$$

> **★ Key point · 50-50 Time Distribution**
>
> Over a complete oscillation:
>
> - **Half the time** energy is predominantly kinetic

> - **Half the time** energy is predominantly potential

> - **Average** KE = Average PE = $\frac{E}{2}$
>
> This is true for **all SHM**, regardless of amplitude or frequency!

---

## Energy in Different SHM Systems

### 1. Spring-Mass System (Horizontal)

Total energy:

$$\boxed{E = \frac{1}{2}kA^2}$$

Where $k$ is spring constant and $A$ is amplitude.

### 2. Spring-Mass System (Vertical)

When a spring hangs vertically with mass $m$:

- Equilibrium position shifts by $x_0 = \frac{mg}{k}$
- Energy is measured from new equilibrium
- Same formula: $E = \frac{1}{2}kA^2$

> **⚠ Trap · Common Mistake: Vertical Spring**
>
> **Wrong:** Including gravitational PE in total energy
>
> **Right:** Choose equilibrium (stretched position) as reference. Then:
>
> $$E = KE + PE_{spring}$$
>
> The gravitational PE is already accounted for in the equilibrium position shift!

### 3. Simple Pendulum

For small angles, a pendulum approximates SHM.

**At angle $\theta$ from vertical:**

Height above lowest point: $h = l(1 - \cos\theta) \approx \frac{l\theta^2}{2}$ (for small $\theta$)

Since $x = l\theta$ (arc length):

$$PE = mgh = mg\frac{x^2}{2l}$$

Comparing with $PE = \frac{1}{2}kx^2$:

$$k_{effective} = \frac{mg}{l}$$

Total energy:

$$\boxed{E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}\frac{mg}{l}A^2}$$

Where $A$ is the maximum angular displacement (in radians) times $l$.

Or using maximum angle $\theta_{max}$:

$$\boxed{E = mgl(1 - \cos\theta_{max}) \approx \frac{1}{2}mgl\theta_{max}^2}$$

---

## Graphical Representation

### KE vs Position

> **◐ In simple terms**
>
> Graph of $KE = \frac{1}{2}k(A^2 - x^2)$:
>
> - **Inverted parabola**

> - Maximum at $x = 0$

> - Zero at $x = \pm A$

### PE vs Position

> **◐ In simple terms**
>
> Graph of $PE = \frac{1}{2}kx^2$:
>
> - **Upward parabola**

> - Minimum (zero) at $x = 0$

> - Maximum at $x = \pm A$

### Total Energy vs Position

> **◐ In simple terms**
>
> Graph of $E = \frac{1}{2}kA^2$:
>
> - **Horizontal line** (constant)

> - Independent of position

---

## Energy vs Time Graphs

If $x = A\sin(\omega t)$:

**KE vs time:**

$$KE = \frac{1}{2}m\omega^2 A^2\cos^2(\omega t) = \frac{E}{2}[1 + \cos(2\omega t)]$$

**PE vs time:**

$$PE = \frac{1}{2}m\omega^2 A^2\sin^2(\omega t) = \frac{E}{2}[1 - \cos(2\omega t)]$$

**Observations:**

- Both oscillate at **frequency $2f$** (double the displacement frequency)
- KE and PE are **out of phase** by $\pi$ (antiphase)
- When one is max, the other is min
- Average value of both is $\frac{E}{2}$

---

## Power in SHM

Power is the rate of energy transfer:

$$P = F \cdot v = (-kx) \cdot v = -kxv$$

Using $x = A\sin(\omega t)$ and $v = A\omega\cos(\omega t)$:

$$P = -kA^2\omega\sin(\omega t)\cos(\omega t)$$

$$\boxed{P = -\frac{1}{2}kA^2\omega\sin(2\omega t)}$$

**Average power over complete cycle:**

$$\langle P \rangle = 0$$

> **◐ In simple terms · Zero Average Power**
>
> In ideal SHM (no damping), average power is zero because:
>
> - Half the time, spring does positive work (giving energy to mass)

> - Half the time, mass does positive work (giving energy to spring)

> - Net energy transfer over complete cycle = 0

---

## When to Use Energy Methods

> **★ Key point · Decision Tree**
>
> **Use Energy Method when:**
>
> 1. Asked about velocity at a given position (not time)

> 2. Asked about position where KE = PE

> 3. Finding amplitude from given conditions

> 4. Comparing energies at different positions
>
> **Use Equation of Motion when:**
>
> 1. Asked about position/velocity at a specific time

> 2. Need to find phase constant

> 3. Calculating acceleration
>
> **Energy Method Advantage:** Often faster! No need to find $\omega$, phase, or time.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting the Factor of 1/2**
>
> **Wrong:** $E = kA^2$ or $E = m\omega^2 A^2$
>
> **Right:** $E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2$
>
> Always remember the $\frac{1}{2}$ factor!

> **⚠ Trap #2: Energy Depends on Frequency**
>
> **Wrong:** Higher frequency → more energy
>
> **Right:** Energy depends only on **amplitude** and **spring constant** (or mass and $\omega$):
>
> $$E = \frac{1}{2}kA^2$$
>
> Two oscillators with same $k$ and $A$ but different $m$ (hence different $\omega$) have the **same energy**!
>
> But $E = \frac{1}{2}m\omega^2 A^2$ shows energy increases with $\omega^2$ if $m$ and $A$ are constant.

> **⚠ Trap #3: Equal Energy Point**
>
> **Wrong:** KE = PE at $x = \frac{A}{2}$
>
> **Right:** KE = PE at $x = \frac{A}{\sqrt{2}} \approx 0.707A$
>
> Many students forget the $\sqrt{2}$!

> **⚠ Trap #4: Gravitational PE in Vertical Spring**
>
> **Wrong:** Including $mgh$ in total energy formula
>
> **Right:** Choose equilibrium as reference (where spring is stretched by $\frac{mg}{k}$). Then only spring PE matters:
>
> $$E = \frac{1}{2}kA^2$$
>
> The gravitational PE is constant and can be set to zero at equilibrium.

---

## Memory Tricks & Patterns

### The “KEPE Dance”

**Memory Trick:** “**KE** and **PE** dance opposite — when one peaks, the other sleeps”

- At $x = 0$: KE peaks, PE sleeps (zero)
- At $x = A$: PE peaks, KE sleeps (zero)

### The “Half-Energy Formula”

“**Square root of two halves the amplitude**”

$$x = \frac{A}{\sqrt{2}} \rightarrow KE = PE = \frac{E}{2}$$

### Energy Amplitude Relationship

“**Energy is Amplitude Squared**”

$$E \propto A^2$$

Double the amplitude → **quadruple** the energy!

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1.1**
>
> A particle in SHM has total energy 100 J and amplitude 10 cm. Find the force constant.
>
> **Solution:**
>
> $$E = \frac{1}{2}kA^2$$

$$100 = \frac{1}{2}k(0.1)^2$$

$$100 = \frac{1}{2}k \times 0.01$$

$$k = \frac{200}{0.01} = 20000$$
>
> N/m = **20 kN/m**

> **↗ Connection · Problem 1.2**
>
> A spring-mass system has total energy 50 J. At what displacement is the KE equal to 30 J? Amplitude is 20 cm.
>
> **Solution:**
>
> $$KE + PE = E$$

$$30 + PE = 50$$

$$PE = 20$$
>
> J
>
> $$PE = \frac{1}{2}kx^2$$
>
> Also, $E = \frac{1}{2}kA^2 = 50$
>
> $$\frac{1}{2}k(0.2)^2 = 50$$

$$k = 2500$$
>
> N/m
>
> Now: $20 = \frac{1}{2}(2500)x^2$
>
> $$x^2 = \frac{40}{2500} = 0.016$$

$$x = 0.126$$
>
> m = **12.6 cm**
>
> Or use ratio: $\frac{PE}{E} = \frac{x^2}{A^2}$
>
> $$\frac{20}{50} = \frac{x^2}{(0.2)^2}$$

$$x^2 = 0.4 \times 0.04 = 0.016$$

$$x = 0.126$$
>
> m = **12.6 cm**

> **↗ Connection · Problem 1.3**
>
> A particle executes SHM with amplitude $A$. At what position is KE = PE?
>
> **Solution:**

> At the equal energy position:
>
> $$KE = PE = \frac{E}{2}$$

$$\frac{1}{2}kx^2 = \frac{1}{2} \times \frac{1}{2}kA^2$$

$$x^2 = \frac{A^2}{2}$$

$$x = \frac{A}{\sqrt{2}} = 0.707A$$
>
> **Answer:** $x = \pm\frac{A}{\sqrt{2}}$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A particle of mass 0.5 kg executes SHM with amplitude 0.1 m and time period 2 s. Find:

> (a) Total energy

> (b) KE and PE at $x = 0.05$ m
>
> **Solution:**

> $\omega = \frac{2\pi}{T} = \frac{2\pi}{2} = \pi$ rad/s
>
> (a) $E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}(0.5)(\pi)^2(0.1)^2$
>
> $$E = \frac{1}{2}(0.5)(9.87)(0.01) = 0.0246$$
>
> J ≈ **24.6 mJ** or **0.025 J**
>
> (b) At $x = 0.05$ m:
>
> $$PE = \frac{1}{2}m\omega^2 x^2 = \frac{1}{2}(0.5)(\pi)^2(0.05)^2$$

$$PE = \frac{1}{2}(0.5)(9.87)(0.0025) = 6.17 \times 10^{-3}$$
>
> J ≈ **6.2 mJ**
>
> $$KE = E - PE = 24.6 - 6.2 = 18.4$$
>
> mJ ≈ **18.4 mJ**
>
> Or: $KE = \frac{1}{2}m\omega^2(A^2 - x^2) = \frac{1}{2}(0.5)(\pi)^2(0.01 - 0.0025)$
>
> $$= \frac{1}{2}(0.5)(9.87)(0.0075) = 18.5$$
>
> mJ ✓

> **↗ Connection · Problem 2.2**
>
> Two particles execute SHM with the same amplitude but different frequencies $f_1 = 2$ Hz and $f_2 = 4$ Hz. If both have mass $m$, find the ratio of their total energies.
>
> **Solution:**
>
> $$E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}m(2\pi f)^2 A^2$$

$$E \propto f^2$$

$$\frac{E_1}{E_2} = \frac{f_1^2}{f_2^2} = \frac{4}{16} = \frac{1}{4}$$
>
> **Answer:** $E_1 : E_2 = 1 : 4$

> **↗ Connection · Problem 2.3**
>
> A spring with spring constant 100 N/m has a 1 kg mass. The mass is displaced 10 cm and released. Find the maximum velocity.
>
> **Solution:**

> At maximum velocity (equilibrium):
>
> $$E = KE_{max} = \frac{1}{2}mv_{max}^2$$
>
> Also: $E = \frac{1}{2}kA^2 = \frac{1}{2}(100)(0.1)^2 = 0.5$ J
>
> $$\frac{1}{2}(1)v_{max}^2 = 0.5$$

$$v_{max}^2 = 1$$

$$v_{max} = 1$$
>
> m/s
>
> Or use: $v_{max} = A\omega = A\sqrt{\frac{k}{m}} = 0.1\sqrt{\frac{100}{1}} = 0.1 \times 10 = $ **1 m/s**

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A block of mass $m$ attached to a spring executes SHM on a frictionless horizontal surface. When the block passes through equilibrium, a lump of putty of mass $m$ is dropped on it and sticks. Find the new amplitude in terms of original amplitude $A_0$.
>
> **Solution:**

> **Before collision** (at equilibrium):
>
> - Velocity: $v_0 = A_0\omega_0 = A_0\sqrt{\frac{k}{m}}$

> - Energy: $E_0 = \frac{1}{2}kA_0^2$
>
> **During collision** (momentum conservation):
>
> $$mv_0 = (m + m)v$$

$$v = \frac{v_0}{2}$$
>
> **After collision:**

> New mass = $2m$

> New energy: $E = \frac{1}{2}(2m)v^2 = \frac{1}{2}(2m)\frac{v_0^2}{4} = \frac{1}{4}(mv_0^2) = \frac{1}{4}kA_0^2$
>
> New amplitude:
>
> $$E = \frac{1}{2}kA^2$$

$$\frac{1}{4}kA_0^2 = \frac{1}{2}kA^2$$

$$A^2 = \frac{A_0^2}{2}$$

$$\boxed{A = \frac{A_0}{\sqrt{2}}}$$
>
> Energy is lost to heat during the inelastic collision!

> **↗ Connection · Problem 3.2**
>
> A particle of mass $m$ is in SHM with amplitude $A$ and frequency $f$. What is the average kinetic energy over one time period?
>
> **Solution:**

> Total energy: $E = \frac{1}{2}m\omega^2 A^2 = \frac{1}{2}m(2\pi f)^2 A^2 = 2\pi^2 mf^2 A^2$
>
> Over one complete cycle:
>
> $$\langle KE \rangle = \frac{E}{2} = \pi^2 mf^2 A^2$$
>
> Or: $\boxed{\langle KE \rangle = \frac{1}{2}m\omega^2 A^2 \times \frac{1}{2} = \frac{1}{4}m\omega^2 A^2}$
>
> **Answer:** $\langle KE \rangle = \pi^2 mf^2 A^2 = \frac{1}{4}m\omega^2 A^2$

> **↗ Connection · Problem 3.3**
>
> A simple pendulum of length $l$ is released from angle $\theta_0$. Find the velocity at the lowest point. (For any angle, not just small angles)
>
> **Solution:**

> Using energy conservation:
>
> At highest point: $E = PE = mgl(1 - \cos\theta_0)$ (taking lowest point as reference)

> At lowest point: $E = KE = \frac{1}{2}mv^2$
>
> $$mgl(1 - \cos\theta_0) = \frac{1}{2}mv^2$$

$$v^2 = 2gl(1 - \cos\theta_0)$$

$$\boxed{v = \sqrt{2gl(1 - \cos\theta_0)}}$$
>
> For small angles: $1 - \cos\theta_0 \approx \frac{\theta_0^2}{2}$
>
> $$v \approx \sqrt{gl\theta_0^2} = \theta_0\sqrt{gl}$$
>
> Since $A = l\theta_0$ and $\omega = \sqrt{\frac{g}{l}}$:
>
> $$v = A\omega$$
>
> ✓ (matches SHM formula)

---

## Quick Revision Box

| Position | Displacement | KE | PE | Total E |
| --- | --- | --- | --- | --- |
| Equilibrium | $0$ | $\frac{1}{2}kA^2$ | $0$ | $\frac{1}{2}kA^2$ |
| $x = \frac{A}{\sqrt{2}}$ | $\frac{A}{\sqrt{2}}$ | $\frac{1}{4}kA^2$ | $\frac{1}{4}kA^2$ | $\frac{1}{2}kA^2$ |
| Extreme | $\pm A$ | $0$ | $\frac{1}{2}kA^2$ | $\frac{1}{2}kA^2$ |

**Key Formulas:**

- Total energy: $E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2$
- At position $x$: $KE = \frac{1}{2}k(A^2 - x^2)$, $PE = \frac{1}{2}kx^2$
- Equal energy point: $x = \frac{A}{\sqrt{2}}$
- Average KE = Average PE = $\frac{E}{2}$

---

## Related Topics

### Within Oscillations & Waves

- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) — Foundation for energy analysis
- [Wave Motion](../wave-motion/index.md) — Energy propagation in waves
- [Damped Oscillations](../../index.md) — Energy dissipation

### Connected Chapters

- [Work-Energy-Power](../../work-energy-power/index.md) — Energy concepts
- [Conservation of Energy](../../work-energy-power/conservation-energy/index.md) — Energy conservation principle
- [Collisions](../../work-energy-power/collisions/index.md) — Momentum and energy in collisions

### Math Connections

- [Integration](../../../mathematics/integral-calculus/index.md) — For average energy calculations
- [Trigonometric Identities](../../../mathematics/trigonometry/index.md) — For energy vs time

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Total energy is constant:** $E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2$

> 2. **Energy transformation:**
>
>    - At equilibrium: All kinetic ($KE = E$, $PE = 0$)

>    - At extremes: All potential ($KE = 0$, $PE = E$)

>    - At $x = \frac{A}{\sqrt{2}}$: Half-and-half ($KE = PE = \frac{E}{2}$)

> 3. **Energy depends on:**
>
>    - Amplitude (squared): $E \propto A^2$

>    - NOT on mass (for given $k$ and $A$)

>    - NOT on time period

> 4. **Average energies:** Over complete cycle, $\langle KE \rangle = \langle PE \rangle = \frac{E}{2}$

> 5. **JEE Strategy:** Energy method is often faster than solving equations of motion. Use $E = KE + PE$ to find velocities at different positions without needing time!
>
> **“In SHM, energy never dies — it just dances between motion and position, forever.”**

---

From TestGuru · our mock-test platform

## You've read Energy in Simple Harmonic Motion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=oscillations-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Foscillations-waves%2Fshm-energy%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/oscillations-waves/shm-energy/",this.page.identifier="/physics/oscillations-waves/shm-energy/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="shmEnergy" id="anim-shmEnergy-1795396424085396874"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-shmEnergy-1795396424085396874")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/oscillations-waves/shm-energy/](https://jeenotes.in/physics/oscillations-waves/shm-energy/) · raw HTML: `offline/physics/oscillations-waves/shm-energy/index.html`_
