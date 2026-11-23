---
title: "Doppler Effect"
source: "https://jeenotes.in/physics/oscillations-waves/doppler-effect/"
description: "Master Doppler effect for sound and light - frequency shifts in JEE Physics"
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 7"
html: "../../../../offline/physics/oscillations-waves/doppler-effect/index.html"
extracted: "2026-11-23"
---

> Master Doppler effect for sound and light - frequency shifts in JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Wave Motion](../wave-motion/index.md) - Wave frequency, wavelength, and speed
- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) - Periodic motion concepts
- [Relative Velocity](../../kinematics/relative-velocity/index.md) - Understanding relative motion

## The Hook: Why Police Sirens Change Pitch

> **★ Key point · Connect: From Ambulances to Galaxies**
>
> Ever noticed how an ambulance siren sounds higher-pitched when it’s coming toward you and lower-pitched when it’s moving away? That’s the **Doppler Effect** in action!
>
> **Movie Connection:** In *Fast X* (2023), during high-speed car chases, the roar of engines changes pitch as cars zoom past. In *Interstellar*, when the spacecraft approaches or recedes from planets, radio signals shift frequency due to Doppler effect.
>
> **Beyond Sound:** The Doppler effect isn’t just about sirens. It’s how astronomers discovered that the universe is expanding! When galaxies move away from us, their light shifts toward red (redshift). Police radar guns use Doppler effect to catch speeders. Even bat echolocation relies on it!
>
> **The Question:** If a car honking at 500 Hz races toward you at 30 m/s, what frequency do you hear? And what happens when it passes and moves away?

---

## What is the Doppler Effect?

The **Doppler Effect** is the change in observed frequency (or wavelength) of a wave when there is relative motion between the source and the observer.

> **◐ In simple terms · The Core Concept**
>
> **In simple terms:** When the source of waves moves toward you, waves get “bunched up” — you encounter more waves per second, so frequency increases. When the source moves away, waves get “stretched out” — frequency decreases.
>
> **Key Characteristics:**
>
> 1. Applies to **all waves** (sound, light, water, etc.)

> 2. Depends on **relative motion** between source and observer

> 3. **Actual frequency** of source doesn’t change — only the **observed frequency** changes

> 4. Different formulas for sound (mechanical) and light (electromagnetic)

## Interactive Demo

Watch how frequency changes with source and observer motion:

---

## Doppler Effect for Sound

### General Formula

When both source and observer are moving:

$$\boxed{f' = f\frac{v + v_o}{v - v_s}}$$

**Where:**

- $f'$ = observed (apparent) frequency
- $f$ = actual frequency of source
- $v$ = speed of sound in the medium
- $v_o$ = speed of observer
- $v_s$ = speed of source

### Sign Convention

**The “Toward is Positive” Rule:**

**For Observer ($v_o$):**

- Observer moving **toward** source: $v_o$ is **positive**
- Observer moving **away** from source: $v_o$ is **negative**
- Observer stationary: $v_o = 0$

**For Source ($v_s$):**

- Source moving **toward** observer: $v_s$ is **positive**
- Source moving **away** from observer: $v_s$ is **negative**
- Source stationary: $v_s = 0$

> **★ Key point · Memory Trick: TAPS**
>
> **T**oward **A**dds for o**P**server on top (numerator)
>
> **T**oward **S**ubtracts for **S**ource on bottom (denominator)
>
> $$f' = f\frac{v \mathbf{+} v_o}{v \mathbf{-} v_s}$$
>
> - Approaching increases frequency → use + for observer, - for source

> - Receding decreases frequency → use - for observer, + for source

### Special Cases

**1. Stationary Observer, Moving Source:**

$$\boxed{f' = f\frac{v}{v - v_s}}$$

- Source approaching ($v_s$ positive): $f' = f\frac{v}{v - v_s} > f$ (higher pitch)
- Source receding ($v_s$ negative): $f' = f\frac{v}{v + v_s} < f$ (lower pitch)

**2. Moving Observer, Stationary Source:**

$$\boxed{f' = f\frac{v + v_o}{v}}$$

- Observer approaching ($v_o$ positive): $f' = f\frac{v + v_o}{v} > f$ (higher pitch)
- Observer receding ($v_o$ negative): $f' = f\frac{v - v_o}{v} < f$ (lower pitch)

**3. Both Stationary:**

$$f' = f$$

(no Doppler shift)

**4. Source and Observer Moving in Same Direction:**

If both moving with same velocity: $f' = f$ (no relative motion)

### Why the Asymmetry?

> **◐ In simple terms · Observer vs Source Motion**
>
> **Important:** Moving observer and moving source give **different** Doppler shifts, even if speeds are same!
>
> **Example:** $v = 340$ m/s (sound), $f = 500$ Hz, speed = 34 m/s
>
> **Observer moving toward stationary source:**
>
> $$f' = 500\frac{340 + 34}{340} = 500 \times 1.1 = 550 \text{ Hz}$$
>
> **Source moving toward stationary observer:**
>
> $$f' = 500\frac{340}{340 - 34} = 500\frac{340}{306} = 555.6 \text{ Hz}$$
>
> **Different results!** Source motion has a greater effect.
>
> **Reason:** When observer moves, only the rate of encountering waves changes. When source moves, it actually compresses/stretches the wavelength in the medium.

---

## Doppler Effect for Light (and EM Waves)

For electromagnetic waves (light), the formula is different because:

1. Light doesn’t need a medium
2. Only **relative velocity** matters (special relativity)
3. Speed of light is constant in all frames

### Non-Relativistic Formula (for $v \ll c$)

When relative velocity $v \ll c$ (speed of light):

$$\boxed{f' = f\left(1 + \frac{v}{c}\right)}$$

Or equivalently:

$$\boxed{\frac{\Delta f}{f} = \frac{v}{c}}$$

Where:

- $v$ = relative velocity (positive if approaching, negative if receding)
- $c = 3 \times 10^8$ m/s (speed of light)

### Relativistic Formula (for any speed)

For high speeds comparable to $c$:

$$\boxed{f' = f\sqrt{\frac{c + v}{c - v}}}$$

Or using $\beta = \frac{v}{c}$:

$$f' = f\sqrt{\frac{1 + \beta}{1 - \beta}}$$

For $v \ll c$, this reduces to the non-relativistic formula.

### Redshift and Blueshift

**Blueshift:** Source approaching → frequency increases, wavelength decreases → light shifts toward blue (higher frequency) end of spectrum

$$f' > f, \quad \lambda' < \lambda$$

**Redshift:** Source receding → frequency decreases, wavelength increases → light shifts toward red (lower frequency) end of spectrum

$$f' < f, \quad \lambda' > \lambda$$

**Redshift parameter:**

$$\boxed{z = \frac{\lambda' - \lambda}{\lambda} = \frac{\Delta\lambda}{\lambda}}$$

For $v \ll c$:

$$z \approx \frac{v}{c}$$

> **★ Key point · Oppenheimer and the Expanding Universe**
>
> In *Oppenheimer* (2023), scientists discuss the expanding universe discovered through redshift. Edwin Hubble observed that distant galaxies show redshift — their light wavelengths are stretched, indicating they’re moving away from us.
>
> **Hubble’s Law:** $v = H_0 d$
>
> - More distant galaxies have greater redshift

> - The universe is expanding!

> - This led to the Big Bang theory
>
> **Fun Fact:** The most distant galaxies are moving away so fast that their redshift $z > 10$ — they’re receding at significant fractions of light speed!

---

## Applications of Doppler Effect

### 1. Police Radar Guns

Police radar guns emit electromagnetic waves at a known frequency. The waves reflect off moving vehicles and return with a Doppler-shifted frequency.

**Frequency shift:**

$$\Delta f = 2f\frac{v}{c}$$

(Factor of 2 because wave travels to car and back)

From this, the car’s speed $v$ is calculated.

### 2. Medical Ultrasound

Ultrasound waves reflect off moving blood cells, creating a Doppler shift. This is used to:

- Measure blood flow velocity
- Detect blockages
- Monitor fetal heartbeat

### 3. Astronomy

**Measuring star/galaxy velocities:**

- Redshift → moving away
- Blueshift → moving toward us

**Applications:**

- Discovering exoplanets (star wobbles due to planet’s gravity)
- Measuring galaxy rotation
- Determining universe expansion rate

### 4. Weather Radar

Doppler radar detects motion of rain droplets to:

- Measure wind speeds
- Track storm systems
- Predict severe weather

### 5. Bat Echolocation

Bats emit ultrasonic waves and listen for reflections. The Doppler shift tells them:

- Speed of prey (insects)
- Direction of motion
- Distance (from time delay)

---

## Shock Waves and Sonic Boom

### Source Faster than Wave Speed ($v_s > v$)

When the source moves faster than the wave speed in the medium (e.g., supersonic aircraft), the formula breaks down. The source “outruns” the waves, creating a **shock wave** (cone-shaped wave front).

**Mach number:**

$$\boxed{M = \frac{v_s}{v}}$$

- $M < 1$: Subsonic
- $M = 1$: Sonic (speed of sound)
- $M > 1$: Supersonic

**Shock wave cone angle:**

$$\boxed{\sin\theta = \frac{v}{v_s} = \frac{1}{M}}$$

> **★ Key point · Fighter Jets and Sonic Booms**
>
> In *Fighter* (2024), when jets go supersonic, they create sonic booms — the shock wave produced when $v_s > v_{sound}$.
>
> **At $M = 2$ (twice speed of sound):**
>
> $$\sin\theta = \frac{1}{2}, \quad \theta = 30°$$
>
> The shock wave forms a cone with half-angle 30°. When this cone sweeps past you on the ground, you hear a **boom**!

---

## Doppler Effect in Two Dimensions

When source and observer are not moving along the line joining them:

$$\boxed{f' = f\frac{v + v_o\cos\alpha}{v - v_s\cos\beta}}$$

Where:

- $\alpha$ = angle between observer’s velocity and line joining them
- $\beta$ = angle between source’s velocity and line joining them

**Special case (perpendicular motion):**
When source passes directly in front of observer:

- Before passing: $\cos\beta > 0$ → higher frequency
- At closest approach: $\cos\beta = 0$ → $f' = f$ (instantaneous)
- After passing: $\cos\beta < 0$ → lower frequency

This is why the siren pitch drops sharply as the ambulance passes!

---

## Doppler Effect with Reflecting Surface

When waves reflect off a moving surface (like radar off a car):

**Case 1: Observer detects waves reflected from moving reflector**

The reflector acts as both:

1. Moving observer (receives Doppler-shifted frequency)
2. Moving source (emits Doppler-shifted frequency)

**Net frequency:**

$$\boxed{f'' = f\frac{v + v_r}{v - v_r}}$$

Where $v_r$ is the reflector velocity (positive if approaching source).

**For small velocities ($v_r \ll v$):**

$$\frac{\Delta f}{f} = \frac{2v_r}{v}$$

This is used in radar speed guns and ultrasound!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Sign Convention Confusion**
>
> **Wrong:** Using speed magnitudes without considering direction
>
> **Right:** Follow the sign convention carefully!
>
> - Observer toward source: $+v_o$ (numerator)

> - Source toward observer: $-v_s$ (denominator, note the minus!)
>
> **Mnemonic:** TAPS — Toward Adds for oPserver, Toward Subtracts for Source

> **⚠ Trap #2: Symmetric Effect for Source and Observer**
>
> **Wrong:** Thinking moving observer and moving source (at same speed) give same Doppler shift
>
> **Right:** They give **different** shifts! Source motion has greater effect.
>
> **Reason:** Observer motion changes encounter rate; source motion changes wavelength itself.

> **⚠ Trap #3: Using Sound Formula for Light**
>
> **Wrong:** Using $f' = f\frac{v + v_o}{v - v_s}$ for light
>
> **Right:** For light, use relativistic formula or $\frac{\Delta f}{f} = \frac{v}{c}$ for small velocities
>
> **Reason:** Light doesn’t need a medium; only relative velocity matters.

> **⚠ Trap #4: Forgetting Factor of 2 for Reflections**
>
> **Wrong:** Using single Doppler shift for radar reflection
>
> **Right:** Wave travels to reflector AND back → factor of 2
>
> $$\Delta f = 2f\frac{v}{c} \text{ (for EM waves)}$$

$$\Delta f = 2f\frac{v_r}{v} \text{ (for sound)}$$

> **⚠ Trap #5: Assuming Frequency Increases When Source Moves**
>
> **Wrong:** “Source is moving, so frequency increases”
>
> **Right:** Direction matters!
>
> - Source moving **toward** observer → frequency increases

> - Source moving **away** → frequency decreases

---

## Memory Tricks & Patterns

### The TAPS Rule

**T**oward **A**dds for o**P**server (top/numerator)

**T**oward **S**ubtracts for **S**ource (bottom/denominator)

$$f' = f\frac{v + v_o}{v - v_s}$$

### Approaching vs Receding

“**A**pproaching → **A**mplifies frequency” (increases)

“**R**eceding → **R**educes frequency” (decreases)

### Light vs Sound

“**S**ound needs **S**ource/observer **S**eparation formula”

“**L**ight only cares about re**L**ative velocity”

### Redshift Memory

“**R**eceding gives **R**edshift” (wavelength increases, like stretching a red spring)

“**B**lueshift for objects **B**ooking toward you” (approaching)

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1.1**
>
> A car horn emits sound at 400 Hz. An observer is stationary. The car moves toward the observer at 20 m/s. Speed of sound is 340 m/s. Find the observed frequency.
>
> **Solution:**

> Observer stationary: $v_o = 0$

> Source moving toward observer: $v_s = +20$ m/s (use positive, then subtract in denominator)
>
> $$f' = f\frac{v}{v - v_s} = 400\frac{340}{340 - 20} = 400\frac{340}{320}$$

$$f' = 400 \times 1.0625 = 425$$
>
> Hz
>
> **Answer: 425 Hz** (higher than 400 Hz, as expected)

> **↗ Connection · Problem 1.2**
>
> Same car from Problem 1.1 now moves away from the observer at 20 m/s. Find the observed frequency.
>
> **Solution:**

> Source moving away: $v_s = -20$ m/s (use negative value)
>
> $$f' = f\frac{v}{v - v_s} = 400\frac{340}{340 - (-20)} = 400\frac{340}{360}$$

$$f' = 400 \times 0.944 = 377.8$$
>
> Hz ≈ **378 Hz**
>
> **Answer: 378 Hz** (lower than 400 Hz)

> **↗ Connection · Problem 1.3**
>
> A stationary source emits sound at 500 Hz. An observer moves toward the source at 17 m/s. Speed of sound is 340 m/s. Find observed frequency.
>
> **Solution:**

> Source stationary: $v_s = 0$

> Observer moving toward source: $v_o = +17$ m/s
>
> $$f' = f\frac{v + v_o}{v} = 500\frac{340 + 17}{340} = 500\frac{357}{340}$$

$$f' = 500 \times 1.05 = 525$$
>
> Hz
>
> **Answer: 525 Hz**

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A source of frequency 600 Hz is moving toward a stationary observer at speed $v_s$. The observer hears 650 Hz. Speed of sound is 330 m/s. Find $v_s$.
>
> **Solution:**
>
> $$f' = f\frac{v}{v - v_s}$$

$$650 = 600\frac{330}{330 - v_s}$$

$$\frac{650}{600} = \frac{330}{330 - v_s}$$

$$1.0833(330 - v_s) = 330$$

$$357.5 - 1.0833v_s = 330$$

$$1.0833v_s = 27.5$$

$$v_s = 25.4$$
>
> m/s
>
> Or solving directly:
>
> $$650(330 - v_s) = 600 \times 330$$

$$214500 - 650v_s = 198000$$

$$650v_s = 16500$$

$$v_s = 25.38$$
>
> m/s ≈ **25.4 m/s**

> **↗ Connection · Problem 2.2**
>
> A train is approaching a platform at 30 m/s while blowing a whistle at 500 Hz. A person on the platform also moves toward the train at 10 m/s. Speed of sound is 340 m/s. What frequency does the person hear?
>
> **Solution:**

> Source (train) moving toward observer: $v_s = +30$ m/s

> Observer moving toward source: $v_o = +10$ m/s
>
> $$f' = f\frac{v + v_o}{v - v_s} = 500\frac{340 + 10}{340 - 30}$$

$$f' = 500\frac{350}{310} = 500 \times 1.129$$

$$f' = 564.5$$
>
> Hz ≈ **565 Hz**

> **↗ Connection · Problem 2.3**
>
> A police car with siren (frequency 1000 Hz) chases a speeding car. Both are moving at 25 m/s in the same direction. Speed of sound is 340 m/s. What frequency does the speeding car’s driver hear?
>
> **Solution:**

> Police car (source) moving at 25 m/s

> Speeding car (observer) moving at 25 m/s (same direction, away from police)
>
> From police car’s perspective:
>
> - Observer moving away: $v_o = -25$ m/s

> - Source (itself): $v_s = 0$ (in its own frame)
>
> Wait, let me reconsider. Both are moving in same direction:
>
> From ground frame:
>
> - Source (police) moving forward at 25 m/s

> - Observer (speeding car) also moving forward at 25 m/s
>
> Relative to source:
>
> - Observer is stationary relative to source!
>
> So $v_o - v_s = 0$ effectively.
>
> Actually, let’s use the formula properly:
>
> - Police (source) chasing, so moving toward observer: approach

> - But observer also moving forward (away from police in ground frame? No, same direction)
>
> Let me reconsider the scenario: Police behind speeding car, both going same direction same speed.
>
> **Correct approach:**

> Both moving at same velocity → **no relative motion** → $f' = f = $ **1000 Hz**
>
> Alternatively, using formula with both moving at 25 m/s in +x direction:

> If we define “toward” from source to observer perspective:
>
> - Observer is ahead, not approaching or receding (parallel motion)
>
> Actually: If police is behind chasing, observer (speeding car) is moving away from source:
>
> - $v_o = -25$ (moving away)

> - $v_s = -25$ (source also moving in same direction, but this is confusing)
>
> **Clearest approach:**

> Relative velocity = 0 (both same speed, same direction)
>
> $$f' = f = $$
>
> **1000 Hz**
>
> Or using formula where both move at 25 m/s forward:
>
> $$f' = f\frac{v + v_o}{v - v_s}$$
>
> If we set forward as positive for observer (away from source behind):

> $v_o = -25$ (moving away from source)

> $v_s = -25$ (source moving forward, which is away from where it was, but toward observer? Confusing!)
>
> **Correct interpretation:**

> Source velocity is relative to ground, positive toward observer

> Observer velocity is relative to ground, positive toward source
>
> Both moving at 25 m/s in same direction, with police behind:
>
> - Police not gaining → relative velocity = 0

> - $v_o = 25$ m/s (forward)

> - $v_s = 25$ m/s (forward, toward the observer ahead)
>
> $$f' = f\frac{v + v_o}{v - v_s} = 1000\frac{340 + 25}{340 - 25} = 1000\frac{365}{315}$$
>
> Hmm, this gives shift, but there shouldn’t be if same speed!
>
> **The issue:** When both move at same speed in same direction, we need to be careful.
>
> **Simplest approach:**

> In the frame of the speeding car, the police car is stationary (both have same velocity).

> Therefore, **$f' = f = 1000$ Hz** (no Doppler shift)
>
> Let me verify with formula by setting up coordinates:

> Let’s say both move at +25 m/s. Police is behind.
>
> Taking “toward each other” as the convention:
>
> - They’re NOT moving toward each other (both going same direction, same speed)

> - Relative velocity = 0

> - So $f' = f$
>
> **Answer: 1000 Hz** (no Doppler shift when relative velocity is zero)

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A source and observer are moving toward each other, each with speed $\frac{v}{2}$ (where $v$ is speed of sound). The source frequency is $f_0$. Find the observed frequency.
>
> **Solution:**

> Observer moving toward source: $v_o = +\frac{v}{2}$

> Source moving toward observer: $v_s = +\frac{v}{2}$
>
> $$f' = f_0\frac{v + v_o}{v - v_s} = f_0\frac{v + \frac{v}{2}}{v - \frac{v}{2}}$$

$$f' = f_0\frac{\frac{3v}{2}}{\frac{v}{2}} = f_0\frac{3v}{v} = 3f_0$$
>
> **Answer: 3$f_0$** (triple the frequency!)

> **↗ Connection · Problem 3.2**
>
> A bat emits ultrasound at 40 kHz and flies toward a wall at 10 m/s. The reflected sound returns to the bat. Speed of sound is 340 m/s. What frequency does the bat detect?
>
> **Solution:**

> This is a two-step Doppler shift:
>
> **Step 1:** Wall acts as moving observer receiving the sound

> Wall is stationary, but from its perspective, source (bat) approaches at 10 m/s:
>
> $$f_1 = f\frac{v}{v - v_s} = 40000\frac{340}{340 - 10} = 40000\frac{340}{330}$$

$$f_1 = 41212$$
>
> Hz
>
> **Step 2:** Wall reflects at frequency $f_1$, acting as source. Bat (observer) approaches at 10 m/s:
>
> $$f_2 = f_1\frac{v + v_o}{v} = 41212\frac{340 + 10}{340}$$

$$f_2 = 41212 \times 1.0294 = 42424$$
>
> Hz
>
> **Answer: 42.4 kHz** (approximately)
>
> Or using the combined formula for reflection:
>
> $$f' = f\frac{v + v_r}{v - v_r} = 40000\frac{340 + 10}{340 - 10} = 40000\frac{350}{330}$$

$$f' = 40000 \times 1.0606 = 42424$$
>
> Hz ✓

> **↗ Connection · Problem 3.3**
>
> A galaxy is observed to have a spectral line at wavelength 660 nm, while the same line in laboratory is at 600 nm. Find:

> (a) Redshift parameter $z$

> (b) Velocity of galaxy (assume $v \ll c$)
>
> **Solution:**

> (a) Redshift parameter:
>
> $$z = \frac{\lambda' - \lambda}{\lambda} = \frac{660 - 600}{600} = \frac{60}{600} = 0.1$$
>
> **Answer: $z = 0.1$**
>
> (b) For $v \ll c$:
>
> $$z = \frac{v}{c}$$

$$v = zc = 0.1 \times 3 \times 10^8 = 3 \times 10^7$$
>
> m/s = **30,000 km/s**
>
> The galaxy is receding at 10% the speed of light!

---

## Quick Revision Box

### Doppler Formula for Sound

$$f' = f\frac{v + v_o}{v - v_s}$$

**Sign Convention:**

- Observer toward source: $+v_o$
- Observer away from source: $-v_o$
- Source toward observer: $-v_s$ (makes denominator smaller)
- Source away from observer: $+v_s$ (makes denominator larger)

### Special Cases

| Scenario | Formula |
| --- | --- |
| Stationary observer | $f' = f\frac{v}{v - v_s}$ |
| Stationary source | $f' = f\frac{v + v_o}{v}$ |
| Both stationary | $f' = f$ |
| Reflection from moving surface | $f' = f\frac{v + v_r}{v - v_r}$ |

### Doppler for Light

- Non-relativistic: $\frac{\Delta f}{f} = \frac{v}{c}$
- Relativistic: $f' = f\sqrt{\frac{c + v}{c - v}}$
- Redshift: $z = \frac{\Delta\lambda}{\lambda} \approx \frac{v}{c}$

### Key Results

- Approaching → frequency increases (blueshift)
- Receding → frequency decreases (redshift)
- Source motion ≠ observer motion (different effects)
- Factor of 2 for reflections

---

## Related Topics

### Within Oscillations & Waves

- [Wave Motion](../wave-motion/index.md) — Foundation for Doppler effect
- [Superposition of Waves](../superposition-waves/index.md) — Beats and interference
- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) — Periodic phenomena

### Connected Chapters

- [Sound Waves](../index.md) — Applications of Doppler effect
- [Electromagnetic Waves](../../electromagnetic-waves/index.md) — Light Doppler shift
- [Relativity](../../dual-nature/index.md) — Relativistic Doppler effect
- [Relative Velocity](../../kinematics/relative-velocity/index.md) — Understanding relative motion

### Applications

- Astronomy (redshift, galaxy velocities)
- Medical imaging (ultrasound Doppler)
- Radar systems (speed detection)
- Weather forecasting (Doppler radar)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Doppler Effect:** Observed frequency changes when there’s relative motion between source and observer.

> 2. **For sound:**
>
>    $$f' = f\frac{v + v_o}{v - v_s}$$

>    - TAPS rule: Toward Adds for oPserver, Toward Subtracts for Source

>    - Observer motion ≠ source motion (different effects)

> 3. **For light:**
>
>    - Only relative velocity matters

>    - $\frac{\Delta f}{f} = \frac{v}{c}$ for $v \ll c$

>    - Redshift (receding) vs blueshift (approaching)

> 4. **Applications:**
>
>    - Police radar, medical ultrasound, astronomy, weather radar

>    - Bat echolocation, measuring blood flow

> 5. **Special cases:**
>
>    - Reflections: use formula twice or $f' = f\frac{v + v_r}{v - v_r}$

>    - Supersonic sources: shock waves, sonic boom

> 6. **JEE Strategy:**
>
>    - Always identify: Is source or observer moving? Toward or away?

>    - Use TAPS for signs

>    - For reflections, remember factor of 2

>    - Light problems: use $v/c$ for shifts
>
> **“The Doppler Effect is the universe’s way of telling us everything is in motion — from ambulances to galaxies, motion changes the music we hear and the light we see.”**

---

From TestGuru · our mock-test platform

## You've read Doppler Effect.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=oscillations-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Foscillations-waves%2Fdoppler-effect%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/oscillations-waves/doppler-effect/",this.page.identifier="/physics/oscillations-waves/doppler-effect/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="dopplerEffect" id="anim-dopplerEffect-1795396424085677794"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-dopplerEffect-1795396424085677794")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/oscillations-waves/doppler-effect/](https://jeenotes.in/physics/oscillations-waves/doppler-effect/) · raw HTML: `offline/physics/oscillations-waves/doppler-effect/index.html`_
