---
title: "Wave Motion"
source: "https://jeenotes.in/physics/oscillations-waves/wave-motion/"
description: "Master wave types, wave equations, and wave speed for JEE Physics"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 7"
html: "../../../../offline/physics/oscillations-waves/wave-motion/index.html"
extracted: "2026-11-23"
---

> Master wave types, wave equations, and wave speed for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) - SHM is the basis of wave motion
- [SHM Energy](../shm-energy/index.md) - Energy concepts extend to waves
- [Kinematics](../../kinematics/index.md) - For understanding wave propagation

## The Hook: From Guitar Strings to Oppenheimer’s Waves

> **★ Key point · Connect: Waves Everywhere**
>
> In *Oppenheimer* (2023), when the atomic bomb explodes, you see the shockwave rippling through the desert — a perfect example of wave motion carrying energy without transporting matter. The light reaches before sound because light waves travel faster!
>
> **Closer to home:** When you pluck a guitar string, you see waves traveling along it. Drop a stone in water — ripples spread out. Shout in a canyon — sound waves bounce back as echoes.
>
> **The Mystery:** How can waves carry energy and information across vast distances without anything physically traveling that distance?

---

## What is a Wave?

A **wave** is a disturbance that propagates through space and time, transferring energy without transferring matter.

> **◐ In simple terms · The Core Definition**
>
> **In simple terms:** A wave is energy’s way of traveling. The medium (water, air, string) doesn’t move forward — it just wiggles up and down or back and forth. But the energy keeps moving forward!
>
> **Key Characteristics:**
>
> 1. Transfers **energy** without transferring **matter**

> 2. Requires a **medium** (for mechanical waves)

> 3. Has **periodic** motion in space and time

> 4. Characterized by wavelength, frequency, amplitude, and speed

## Interactive Wave Visualizer

Explore wave motion, superposition, and interference interactively:

> **★ Key point · Try These Experiments**
>
> 1. **Constructive Interference:** Set phase = 0 and watch the resultant amplitude double

> 2. **Destructive Interference:** Set phase = 180 degrees (pi) and observe cancellation

> 3. **Standing Waves:** Select “Opposite (Standing)” mode to see nodes and antinodes

> 4. **Beats:** Select “Beats” mode and set f1 = 1.0 Hz, f2 = 1.1 Hz to observe beat pattern

> 5. **Transverse vs Longitudinal:** Toggle wave type to see how particle motion differs

---

## Types of Waves

### 1. Based on Medium

**Mechanical Waves:**

- Require a material medium to propagate
- Examples: Sound, water waves, seismic waves
- Cannot travel through vacuum

**Electromagnetic Waves:**

- Do not require a medium
- Can travel through vacuum
- Examples: Light, radio waves, X-rays
- All travel at speed of light in vacuum ($c = 3 \times 10^8$ m/s)

> **★ Key point · Oppenheimer's Light vs Sound**
>
> In the famous *Oppenheimer* Trinity test scene, there’s a delay between seeing the flash and hearing the explosion. Light (electromagnetic wave) travels at $3 \times 10^8$ m/s, while sound (mechanical wave) travels at only ~340 m/s in air. That’s why you see lightning before hearing thunder!

### 2. Based on Particle Motion

**Transverse Waves:**

- Particle motion is **perpendicular** to wave propagation
- Can travel on strings, water surface
- Examples: Light, waves on string, water ripples

**Longitudinal Waves:**

- Particle motion is **parallel** to wave propagation
- Creates compressions and rarefactions
- Examples: Sound, pressure waves

> **◐ In simple terms · Memory Trick: T-Perpendicular**
>
> **T**ransverse has **T**-shape → Perpendicular motion
>
> **L**ongitudinal has **L**ine-shape → Parallel motion

**Comparison Table:**

| Feature | Transverse | Longitudinal |
| --- | --- | --- |
| Particle motion | ⊥ to propagation | ∥ to propagation |
| Can travel in solids | Yes | Yes |
| Can travel in liquids/gases | Only surface waves | Yes |
| Examples | String waves, light | Sound, pressure waves |
| Shows polarization | Yes | No |

---

## Wave Diagram

## Wave Parameters

### 1. Wavelength ($\lambda$)

Distance between two consecutive points in the same phase (e.g., crest to crest).

**Unit:** meter (m)

### 2. Frequency ($f$ or $\nu$)

Number of complete waves passing a point per second.

**Unit:** Hertz (Hz) = s$^{-1}$

### 3. Time Period ($T$)

Time for one complete wave to pass a point.

$$\boxed{T = \frac{1}{f}}$$

### 4. Amplitude ($A$)

Maximum displacement from equilibrium position.

**Unit:** meter (m)

Energy $\propto A^2$ (just like in SHM!)

### 5. Wave Speed ($v$)

Speed at which the wave (disturbance) propagates through the medium.

$$\boxed{v = f\lambda = \frac{\lambda}{T}}$$

This is the **fundamental wave equation**!

> **★ Key point · Memory Trick: VFL**
>
> “**V**ery **F**ast **L**ightning”
>
> $$v = f \lambda$$
>
> Velocity = Frequency × Lambda (wavelength)

### 6. Angular Frequency ($\omega$) and Wave Number ($k$)

$$\omega = 2\pi f = \frac{2\pi}{T}$$

$$k = \frac{2\pi}{\lambda}$$

(spatial frequency)

**Alternative wave equation:**

$$\boxed{v = \frac{\omega}{k}}$$

---

## Mathematical Description of Waves

### Transverse Wave on String

A sinusoidal wave traveling in the positive $x$-direction:

$$\boxed{y(x, t) = A\sin(kx - \omega t + \phi)}$$

Or: $y(x, t) = A\sin\left(\frac{2\pi}{\lambda}x - \frac{2\pi}{T}t + \phi\right)$

**Where:**

- $y$ = displacement at position $x$ and time $t$
- $A$ = amplitude
- $k = \frac{2\pi}{\lambda}$ = wave number
- $\omega = 2\pi f$ = angular frequency
- $\phi$ = initial phase

**For wave traveling in negative $x$-direction:**

$$y(x, t) = A\sin(kx + \omega t + \phi)$$

> **◐ In simple terms · Sign Convention**
>
> - **Minus sign** $(kx - \omega t)$: Wave traveling in **+x direction**

> - **Plus sign** $(kx + \omega t)$: Wave traveling in **-x direction**
>
> **Memory:** Think of the wave “chasing” the minus sign!

### Longitudinal Wave (Sound)

Displacement wave:

$$s(x, t) = s_0\sin(kx - \omega t)$$

Pressure wave:

$$\Delta P(x, t) = P_0\cos(kx - \omega t)$$

Note: Displacement and pressure are **90° out of phase**!

---

## Wave Speed in Different Media

### 1. Speed of Transverse Wave on String

$$\boxed{v = \sqrt{\frac{T}{\mu}}}$$

**Where:**

- $T$ = tension in string (N)
- $\mu = \frac{m}{l}$ = mass per unit length (kg/m)

**Key Insights:**

- Higher tension → faster wave
- Heavier string → slower wave

> **★ Key point · Guitar String Physics**
>
> When you tighten a guitar string (increase $T$), the pitch goes higher because wave speed increases, which increases frequency (since $v = f\lambda$ and $\lambda$ is fixed by string length).
>
> Thicker strings (larger $\mu$) produce lower notes because waves travel slower!

### 2. Speed of Sound in Gases

$$\boxed{v = \sqrt{\frac{\gamma RT}{M}}}$$

**Where:**

- $\gamma$ = adiabatic constant (1.4 for air)
- $R$ = universal gas constant (8.314 J/mol·K)
- $T$ = absolute temperature (K)
- $M$ = molar mass (kg/mol)

**Simplified for air:**

$$v \approx 331 + 0.6t$$

m/s

where $t$ is temperature in °C.

At 20°C: $v \approx 343$ m/s

**Key Insights:**

- Speed increases with temperature
- Speed is independent of pressure (at constant $T$)
- Lighter gases → faster sound (helium voice effect!)

### 3. Speed of Sound in Solids

$$\boxed{v = \sqrt{\frac{E}{\rho}}}$$

**Where:**

- $E$ = Young’s modulus (Pa)
- $\rho$ = density (kg/m³)

For longitudinal waves in a rod.

### 4. Speed of Sound in Liquids

$$\boxed{v = \sqrt{\frac{B}{\rho}}}$$

**Where:**

- $B$ = bulk modulus (Pa)
- $\rho$ = density (kg/m³)

**Comparison:**

| Medium | Approximate Speed |
| --- | --- |
| Air (20°C) | 343 m/s |
| Water | 1480 m/s |
| Steel | 5000 m/s |
| Aluminum | 6400 m/s |

Waves travel **faster in solids** than liquids, and faster in liquids than gases!

---

## Wave Equation

The general differential equation for wave motion:

$$\boxed{\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}}$$

Any function of the form $y(x, t) = f(x - vt)$ or $y(x, t) = g(x + vt)$ satisfies this equation.

**Solutions:**

- $f(x - vt)$: wave traveling in +x direction with speed $v$
- $g(x + vt)$: wave traveling in -x direction with speed $v$

---

## Phase and Phase Difference

**Phase** of a wave at position $x$ and time $t$:

$$\phi = kx - \omega t + \phi_0$$

**Phase difference** between two points $x_1$ and $x_2$ at same time:

$$\Delta\phi = k(x_2 - x_1) = \frac{2\pi}{\lambda}(x_2 - x_1)$$

**Path difference:**

$$\Delta x = x_2 - x_1 = \frac{\lambda}{2\pi}\Delta\phi$$

**Important Relations:**

| Path Difference | Phase Difference | Interference |
| --- | --- | --- |
| $0, \lambda, 2\lambda, ...$ | $0, 2\pi, 4\pi, ...$ | Constructive |
| $\frac{\lambda}{2}, \frac{3\lambda}{2}, ...$ | $\pi, 3\pi, ...$ | Destructive |
| $\frac{\lambda}{4}, \frac{3\lambda}{4}, ...$ | $\frac{\pi}{2}, \frac{3\pi}{2}, ...$ | Intermediate |

---

## Energy in Waves

### Energy Density

Energy per unit length (or volume) in a wave:

$$\boxed{u = \frac{1}{2}\rho\omega^2 A^2}$$

Where $\rho$ is the mass per unit length (or volume).

### Power Transmitted by Wave

Average power transmitted:

$$\boxed{P_{avg} = \frac{1}{2}\rho v\omega^2 A^2}$$

For a string: $\rho$ is linear mass density $\mu$
For sound: $\rho$ is volume density

**Key Insights:**

- Power $\propto A^2$ (amplitude squared)
- Power $\propto \omega^2$ (frequency squared)
- Power $\propto v$ (wave speed)

### Intensity of Wave

Intensity = Power per unit area:

$$\boxed{I = \frac{P}{A_{area}}}$$

For spherical waves spreading from a point source:

$$I = \frac{P}{4\pi r^2}$$

So intensity decreases as $\frac{1}{r^2}$ (inverse square law).

> **★ Key point · Sound Intensity in Movies**
>
> In *Oppenheimer*, as you move away from the explosion, the sound intensity decreases as $\frac{1}{r^2}$. That’s why distant observers hear a much quieter boom, even though the total energy released is the same!

---

## Particle Velocity vs Wave Velocity

**Particle velocity:** Velocity of a particle of the medium (perpendicular to direction for transverse waves)

$$v_{particle} = \frac{\partial y}{\partial t} = -A\omega\cos(kx - \omega t)$$

**Wave velocity:** Velocity at which the disturbance propagates

$$v_{wave} = \frac{\omega}{k} = f\lambda$$

> **⚠ Trap · Common Mistake: Confusing the Two Velocities**
>
> **Wrong:** Wave speed = particle speed
>
> **Right:**
>
> - **Particle velocity:** How fast particles oscillate (max = $A\omega$)

> - **Wave velocity:** How fast the wave pattern moves (= $f\lambda$)
>
> These are completely different! Particle velocity varies with time, wave velocity is constant (for given medium).

---

## Reflection and Transmission of Waves

### At Fixed End

- Wave reflects with **phase change of $\pi$** (inverted)
- Amplitude remains same (no energy loss)

### At Free End

- Wave reflects **without phase change**
- Amplitude remains same

### At Boundary Between Media

When wave travels from medium 1 (with speed $v_1$) to medium 2 (with speed $v_2$):

**Reflected amplitude:**

$$A_r = \frac{v_2 - v_1}{v_2 + v_1}A_i$$

**Transmitted amplitude:**

$$A_t = \frac{2v_2}{v_2 + v_1}A_i$$

**Note:** Frequency remains same, but wavelength changes (since $v = f\lambda$).

---

## Doppler Effect (Introduction)

When source or observer is moving, the observed frequency changes.

**General formula:**

$$\boxed{f' = f\frac{v + v_o}{v - v_s}}$$

**Where:**

- $f'$ = observed frequency
- $f$ = source frequency
- $v$ = wave speed (in medium)
- $v_o$ = observer velocity (+ if toward source)
- $v_s$ = source velocity (+ if toward observer)

(More details in the [Doppler Effect](../doppler-effect/index.md) chapter!)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Wavelength in Different Media**
>
> **Wrong:** Wavelength stays same when wave enters new medium
>
> **Right:** Frequency stays same, wavelength changes!
>
> $$v_1 = f\lambda_1, \quad v_2 = f\lambda_2$$

$$\frac{\lambda_2}{\lambda_1} = \frac{v_2}{v_1}$$

> **⚠ Trap #2: Wave Speed on String Depends on Frequency**
>
> **Wrong:** Higher frequency → higher wave speed on string
>
> **Right:** Wave speed depends only on medium properties!
>
> $$v = \sqrt{\frac{T}{\mu}}$$
>
> (independent of $f$ or $\lambda$)
>
> Frequency and wavelength adjust to maintain $v = f\lambda$

> **⚠ Trap #3: Energy Proportional to Amplitude**
>
> **Wrong:** Energy $\propto A$
>
> **Right:** Energy $\propto A^2$
>
> Double the amplitude → **quadruple** the energy!

> **⚠ Trap #4: Phase Difference and Path Difference**
>
> **Wrong:** $\Delta\phi = \Delta x$
>
> **Right:** $\Delta\phi = \frac{2\pi}{\lambda}\Delta x$
>
> Always include the $\frac{2\pi}{\lambda}$ factor!

---

## Memory Tricks & Patterns

### The VFL Triangle

“**V**ery **F**ast **L**ightning”

$$v = f\lambda$$

All wave problems start here!

### String Tension Memory

“**T**ighter string, **T**errific speed”

$$v = \sqrt{\frac{T}{\mu}}$$

More tension → faster wave

### Temperature and Sound

“**H**otter air, **H**igher speed”

$$v \propto \sqrt{T}$$

Higher temperature → faster sound

### Phase Path Relation

“**Two Pi Over Lambda**”

$$\Delta\phi = \frac{2\pi}{\lambda}\Delta x$$

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1.1**
>
> A wave has frequency 50 Hz and wavelength 2 m. Find its speed.
>
> **Solution:**
>
> $$v = f\lambda = 50 \times 2 = $$
>
> **100 m/s**

> **↗ Connection · Problem 1.2**
>
> A string has mass per unit length 0.01 kg/m and tension 40 N. Find the speed of transverse wave on it.
>
> **Solution:**
>
> $$v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{40}{0.01}} = \sqrt{4000} = 63.2$$
>
> m/s
>
> Or: $v = \sqrt{4000} = 20\sqrt{10} \approx$ **63.2 m/s**

> **↗ Connection · Problem 1.3**
>
> A wave equation is $y = 0.05\sin(10\pi x - 200\pi t)$ (SI units). Find amplitude, wavelength, frequency, and speed.
>
> **Solution:**

> Comparing with $y = A\sin(kx - \omega t)$:
>
> - $A = 0.05$ m = **5 cm**

> - $k = 10\pi$, so $\lambda = \frac{2\pi}{k} = \frac{2\pi}{10\pi} = 0.2$ m = **20 cm**

> - $\omega = 200\pi$, so $f = \frac{\omega}{2\pi} = \frac{200\pi}{2\pi} = 100$ Hz

> - $v = f\lambda = 100 \times 0.2 = $ **20 m/s**
>
> Or: $v = \frac{\omega}{k} = \frac{200\pi}{10\pi} = $ **20 m/s** ✓

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Two waves are given by:

> $y_1 = 5\sin(4x - 60t)$

> $y_2 = 5\sin(4x - 60t + \frac{\pi}{3})$
>
> Find the phase difference and path difference. (SI units)
>
> **Solution:**

> Phase difference: $\Delta\phi = \frac{\pi}{3}$ rad = **60°**
>
> From the equations: $k = 4$ rad/m

> So: $\lambda = \frac{2\pi}{k} = \frac{2\pi}{4} = \frac{\pi}{2}$ m
>
> Path difference:
>
> $$\Delta x = \frac{\lambda}{2\pi}\Delta\phi = \frac{\pi/2}{2\pi} \times \frac{\pi}{3} = \frac{\pi}{12}$$
>
> m
>
> Or: $\Delta x = \frac{\lambda\Delta\phi}{2\pi} = \frac{(\pi/2) \times (\pi/3)}{2\pi} = \frac{\pi^2/6}{2\pi} = \frac{\pi}{12}$ m ≈ **0.262 m**

> **↗ Connection · Problem 2.2**
>
> A string of length 1 m and mass 5 g is under tension 80 N. What is the speed of transverse wave on it?
>
> **Solution:**
>
> $$\mu = \frac{m}{l} = \frac{5 \times 10^{-3}}{1} = 5 \times 10^{-3}$$
>
> kg/m
>
> $$v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{80}{5 \times 10^{-3}}} = \sqrt{16000} = 126.5$$
>
> m/s
>
> Or: $v = \sqrt{16000} = 40\sqrt{10} \approx$ **126.5 m/s**

> **↗ Connection · Problem 2.3**
>
> Sound travels at 340 m/s in air. What is the wavelength of a 256 Hz tuning fork?
>
> **Solution:**
>
> $$\lambda = \frac{v}{f} = \frac{340}{256} = 1.328$$
>
> m ≈ **1.33 m**

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A wave $y = 0.02\sin(30x - 400t)$ travels on a string with mass per unit length $\mu = 0.05$ kg/m. Find:

> (a) Wave speed

> (b) Tension in string

> (c) Average power transmitted
>
> **Solution:**

> From equation: $k = 30$ rad/m, $\omega = 400$ rad/s, $A = 0.02$ m
>
> (a) $v = \frac{\omega}{k} = \frac{400}{30} = 13.33$ m/s
>
> (b) $v = \sqrt{\frac{T}{\mu}}$
>
> $$T = \mu v^2 = 0.05 \times (13.33)^2 = 0.05 \times 177.78 = 8.89$$
>
> N
>
> (c) $P_{avg} = \frac{1}{2}\mu v\omega^2 A^2$
>
> $$P_{avg} = \frac{1}{2}(0.05)(13.33)(400)^2(0.02)^2$$

$$= \frac{1}{2}(0.05)(13.33)(160000)(0.0004)$$

$$= 0.025 \times 13.33 \times 64 = 21.3$$
>
> W

> **↗ Connection · Problem 3.2**
>
> A wave travels from a string with $\mu_1 = 0.01$ kg/m to another string with $\mu_2 = 0.04$ kg/m. Both are under same tension $T$. If incident amplitude is $A$, find reflected and transmitted amplitudes.
>
> **Solution:**

> Wave speeds:
>
> $$v_1 = \sqrt{\frac{T}{\mu_1}} = \sqrt{\frac{T}{0.01}}$$

$$v_2 = \sqrt{\frac{T}{\mu_2}} = \sqrt{\frac{T}{0.04}}$$

$$\frac{v_2}{v_1} = \sqrt{\frac{\mu_1}{\mu_2}} = \sqrt{\frac{0.01}{0.04}} = \sqrt{\frac{1}{4}} = \frac{1}{2}$$
>
> So $v_2 = \frac{v_1}{2}$
>
> Reflected amplitude:
>
> $$A_r = \frac{v_2 - v_1}{v_2 + v_1}A = \frac{\frac{v_1}{2} - v_1}{\frac{v_1}{2} + v_1}A = \frac{-\frac{v_1}{2}}{\frac{3v_1}{2}}A = -\frac{1}{3}A$$
>
> Magnitude: $|A_r| = \frac{A}{3}$ (negative means inverted)
>
> Transmitted amplitude:
>
> $$A_t = \frac{2v_2}{v_2 + v_1}A = \frac{2 \times \frac{v_1}{2}}{\frac{v_1}{2} + v_1}A = \frac{v_1}{\frac{3v_1}{2}}A = \frac{2}{3}A$$

> **↗ Connection · Problem 3.3**
>
> The equation of a standing wave is $y = 2A\sin(kx)\cos(\omega t)$. Find the distance between two consecutive nodes.
>
> **Solution:**

> Nodes occur where $\sin(kx) = 0$
>
> $$kx = 0, \pi, 2\pi, 3\pi, ...$$

$$x = 0, \frac{\pi}{k}, \frac{2\pi}{k}, \frac{3\pi}{k}, ...$$
>
> Distance between consecutive nodes:
>
> $$\Delta x = \frac{\pi}{k} = \frac{\pi}{2\pi/\lambda} = \frac{\lambda}{2}$$
>
> **Answer:** Distance between consecutive nodes = $\frac{\lambda}{2}$
>
> (We’ll explore standing waves more in [Superposition of Waves](../superposition-waves/index.md)!)

---

## Quick Revision Box

| Wave Type | Equation | Speed Formula |
| --- | --- | --- |
| String wave | $y = A\sin(kx - \omega t)$ | $v = \sqrt{\frac{T}{\mu}}$ |
| Sound (gas) | $s = s_0\sin(kx - \omega t)$ | $v = \sqrt{\frac{\gamma RT}{M}}$ |
| Sound (solid) | — | $v = \sqrt{\frac{E}{\rho}}$ |
| Sound (liquid) | — | $v = \sqrt{\frac{B}{\rho}}$ |

**Universal Relations:**

- $v = f\lambda = \frac{\omega}{k}$
- $k = \frac{2\pi}{\lambda}$, $\omega = 2\pi f$
- Energy $\propto A^2$
- Power $\propto A^2\omega^2$
- Phase difference: $\Delta\phi = \frac{2\pi}{\lambda}\Delta x$

---

## Related Topics

### Within Oscillations & Waves

- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) — SHM is basis of wave motion
- [SHM Energy](../shm-energy/index.md) — Energy concepts extend to waves
- [Superposition of Waves](../superposition-waves/index.md) — Interference and standing waves
- [Doppler Effect](../doppler-effect/index.md) — Frequency change due to motion

### Connected Chapters

- [Sound Waves](../index.md) — Application of wave motion
- [Optics](../../optics/index.md) — Light as electromagnetic waves
- [Electromagnetic Waves](../../electromagnetic-waves/index.md) — Waves without medium

### Math Connections

- [Trigonometry](../../../mathematics/trigonometry/index.md) — Sine and cosine functions
- [Partial Derivatives](../../../mathematics/index.md) — For wave equation
- [Differential Equations](../../../mathematics/differential-equations/index.md) — Wave equation solutions

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Waves transfer energy, not matter.** The medium oscillates, the energy propagates.

> 2. **Fundamental equation:** $v = f\lambda$ connects all wave parameters

> 3. **Two types by motion:**
>
>    - Transverse: perpendicular motion (light, string waves)

>    - Longitudinal: parallel motion (sound)

> 4. **Wave speed depends on medium properties:**
>
>    - String: $v = \sqrt{\frac{T}{\mu}}$ (tension and mass density)

>    - Sound in gas: $v = \sqrt{\frac{\gamma RT}{M}}$ (temperature)

>    - General: stiffer/lighter medium → faster wave

> 5. **Energy in waves:**
>
>    - Energy $\propto A^2\omega^2$

>    - Intensity $\propto \frac{1}{r^2}$ for spherical waves

> 6. **JEE Strategy:** Always start with $v = f\lambda$. Identify wave type to use correct speed formula. Watch for phase vs path difference conversions!
>
> **“Waves are nature’s way of sharing energy without giving away matter — the universe’s ultimate courier service.”**

---

From TestGuru · our mock-test platform

## You've read Wave Motion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=oscillations-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Foscillations-waves%2Fwave-motion%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/oscillations-waves/wave-motion/",this.page.identifier="/physics/oscillations-waves/wave-motion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="waveMotionVisualizer" id="anim-waveMotionVisualizer-1795396424092629691"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-waveMotionVisualizer-1795396424092629691")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/oscillations-waves/wave-motion/](https://jeenotes.in/physics/oscillations-waves/wave-motion/) · raw HTML: `offline/physics/oscillations-waves/wave-motion/index.html`_
