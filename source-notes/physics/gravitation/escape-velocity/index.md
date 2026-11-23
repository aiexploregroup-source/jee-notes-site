---
title: "Escape Velocity"
source: "https://jeenotes.in/physics/gravitation/escape-velocity/"
description: "Master escape velocity derivation, applications, and energy concepts for JEE Physics"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 8"
html: "../../../../offline/physics/gravitation/escape-velocity/index.html"
extracted: "2026-11-23"
---

> Master escape velocity derivation, applications, and energy concepts for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Gravitational Field and Potential](../gravitational-field-potential/index.md) — Potential energy concepts
- [Conservation of Energy](../../work-energy-power/conservation-energy/index.md) — Energy approach
- [Kinematic Equations](../../kinematics/kinematic-equations/index.md) — Velocity and acceleration

---

## The Hook: Can You Throw a Ball to Infinity?

> **★ Key point · Connect: Space Missions → Physics**
>
> **October 2014:** ISRO’s **Mangalyaan** (Mars Orbiter Mission) became the first Asian spacecraft to reach Mars. But here’s the challenge:
>
> **To leave Earth, it needed to escape Earth’s gravitational pull completely.**
>
> Think about throwing a ball upward:
>
> - Throw gently → comes back down

> - Throw harder → goes higher, still comes back

> - Throw at a **critical speed** → escapes to infinity, never returns!
>
> That critical speed is **escape velocity** — $11.2$ km/s for Earth.
>
> **Any slower?** You’re bound to Earth forever.

> **At or above this speed?** You can reach the stars!
>
> **Question:** Why does a rocket need multiple stages? Because reaching 11.2 km/s requires enormous energy — $3 \times 10^8$ Joules for every kilogram!
>
> **From ISRO’s Chandrayaan to Interstellar’s spacecraft — escape velocity is the ticket to the cosmos.**

---

## The Core Concept

### Definition

**Escape velocity** is the minimum velocity required to project an object from a planet’s surface such that it escapes the planet’s gravitational field and never returns.

$$\boxed{v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2gR}}$$

where:

- $v_e$ = Escape velocity
- $G$ = Universal gravitational constant ($6.67 \times 10^{-11}$ N·m²/kg²)
- $M$ = Mass of planet
- $R$ = Radius of planet
- $g$ = Acceleration due to gravity on surface

**For Earth:**

$$v_e = \sqrt{2 \times 9.8 \times 6.4 \times 10^6} = \sqrt{125.44 \times 10^6} \approx 11,200 \text{ m/s} = 11.2 \text{ km/s}$$

**In simple terms:** “Escape velocity is how fast you need to throw something upward so it never falls back — it reaches infinity with zero velocity.”

### Interactive Demo: Visualize Escape Velocity

See how escape velocity depends on planetary mass and radius.

---

## Derivation Using Energy Conservation

### Method 1: Energy Approach (Most Important for JEE)

Consider an object of mass $m$ at Earth’s surface (radius $R$).

**Initial state (at surface):**

- Kinetic energy: $KE_i = \frac{1}{2}mv_e^2$
- Potential energy: $PE_i = -\frac{GMm}{R}$
- Total energy: $E_i = \frac{1}{2}mv_e^2 - \frac{GMm}{R}$

**Final state (at infinity):**

- Kinetic energy: $KE_f = 0$ (just reaches, so v = 0)
- Potential energy: $PE_f = 0$ (reference at infinity)
- Total energy: $E_f = 0$

**By conservation of energy:**

$$E_i = E_f$$

$$\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0$$

$$\frac{1}{2}mv_e^2 = \frac{GMm}{R}$$

$$v_e^2 = \frac{2GM}{R}$$

$$\boxed{v_e = \sqrt{\frac{2GM}{R}}}$$

**Alternative form:** Since $g = \frac{GM}{R^2}$, we get $GM = gR^2$:

$$\boxed{v_e = \sqrt{2gR}}$$

> **★ Key point · Key Insight**
>
> **Escape velocity is the speed at which total mechanical energy becomes zero.**
>
> - $E < 0$ → Bound orbit (satellite, planet)

> - $E = 0$ → Parabolic escape (just escapes with v → 0 at ∞)

> - $E > 0$ → Hyperbolic escape (reaches ∞ with some velocity)
>
> **Minimum escape condition:** $E = 0$

---

## Properties of Escape Velocity

### 1. Independent of Mass of Object

Notice: $m$ cancels out in the derivation!

$$v_e = \sqrt{\frac{2GM}{R}}$$

**A feather and a rocket need the same escape velocity!**

> **◐ In simple terms · Why Rockets Are Massive Then?**
>
> If escape velocity doesn’t depend on mass, why are rockets so huge?
>
> **Because:** To reach 11.2 km/s, you need **kinetic energy** = $\frac{1}{2}mv^2$
>
> For 1 kg: $E = \frac{1}{2} \times 1 \times (11,200)^2 = 6.27 \times 10^7$ J
>
> For 1000 kg rocket: $E = 6.27 \times 10^{10}$ J
>
> **More mass → More fuel → Bigger rocket!**
>
> Energy required **does** depend on mass, even if velocity doesn’t.

### 2. Independent of Direction of Projection

You can throw the object:

- Vertically upward
- Horizontally
- At any angle

**As long as initial speed = $v_e$, it will escape!**

> **★ Key point · Why Then Launch Eastward?**
>
> ISRO launches from Sriharikota towards **east** because:
>
> 1. **Earth’s rotation** provides free velocity boost (~460 m/s eastward at equator)

> 2. Saves fuel (don’t need to reach full 11.2 km/s from zero)

> 3. But fundamental escape velocity is still direction-independent!

### 3. Depends Only on Planet’s Mass and Radius

$$v_e = \sqrt{\frac{2GM}{R}} = \sqrt{2g R}$$

| Celestial Body | M (kg) | R (km) | g (m/s²) | $v_e$ (km/s) |
| --- | --- | --- | --- | --- |
| **Earth** | $6 \times 10^{24}$ | 6,400 | 9.8 | 11.2 |
| **Moon** | $7.4 \times 10^{22}$ | 1,740 | 1.6 | 2.4 |
| **Mars** | $6.4 \times 10^{23}$ | 3,400 | 3.7 | 5.0 |
| **Jupiter** | $1.9 \times 10^{27}$ | 71,000 | 25 | 60 |
| **Sun** | $2 \times 10^{30}$ | 696,000 | 274 | 618 |

**Moon’s low escape velocity** (2.4 km/s) is why returning from Moon is easier than leaving Earth!

### 4. Relation with Orbital Velocity

For a satellite in circular orbit just above the surface:

$$v_o = \sqrt{\frac{GM}{R}} = \sqrt{gR}$$

Comparing with escape velocity:

$$\frac{v_e}{v_o} = \frac{\sqrt{2GM/R}}{\sqrt{GM/R}} = \sqrt{2}$$

$$\boxed{v_e = \sqrt{2} \cdot v_o \approx 1.414 \, v_o}$$

**Key relationship:** Escape velocity is $\sqrt{2}$ times orbital velocity!

For Earth:

- Orbital velocity (at surface) ≈ 7.9 km/s
- Escape velocity ≈ 11.2 km/s
- Ratio: 11.2/7.9 ≈ 1.414 ✓

---

## Escape Velocity from Height h

If object is at height $h$ above surface:

Distance from center: $r = R + h$

$$v_e(h) = \sqrt{\frac{2GM}{R+h}}$$

**Ratio to surface escape velocity:**

$$\frac{v_e(h)}{v_e(0)} = \sqrt{\frac{R}{R+h}}$$

$$\boxed{v_e(h) = v_e \sqrt{\frac{R}{R+h}}}$$

**For small h:** $v_e(h) \approx v_e\left(1 - \frac{h}{2R}\right)$

> **◐ In simple terms · Advantage of Space Stations**
>
> International Space Station (ISS) orbits at h ≈ 400 km.
>
> Escape velocity from ISS:
>
> $$v_e(400) = 11.2 \times \sqrt{\frac{6400}{6400+400}} = 11.2 \times \sqrt{0.941} \approx 10.9 \text{ km/s}$$
>
> **Saved:** 0.3 km/s (about 3%) — small but significant for fuel calculations!
>
> This is why we might launch interplanetary missions from space stations in the future.

---

## Escape Velocity and Temperature (Atmospheric Retention)

### Why Does Moon Have No Atmosphere?

Average speed of gas molecules at temperature $T$:

$$v_{rms} = \sqrt{\frac{3kT}{m}}$$

where:

- $k$ = Boltzmann constant
- $T$ = Temperature
- $m$ = Mass of gas molecule

**For atmosphere to be retained:**

$$v_{rms} < \frac{v_e}{6}$$

(Factor of 6 is empirical — accounts for distribution of velocities)

**Earth:**

- $v_e = 11.2$ km/s
- Threshold: $v_{rms} < 1.87$ km/s
- Most molecules (N₂, O₂) have $v_{rms} < 0.5$ km/s at 300 K ✓
- Hydrogen (lightest) has $v_{rms} \approx 1.9$ km/s — **escapes!** (that’s why Earth has no H₂ in atmosphere)

**Moon:**

- $v_e = 2.4$ km/s
- Threshold: $v_{rms} < 0.4$ km/s
- Most gases exceed this → **No atmosphere!**

> **★ Key point · JEE Application**
>
> **Question type:** “Why does Earth retain oxygen but Moon doesn’t?”
>
> **Answer:** Earth’s escape velocity (11.2 km/s) is high enough to retain O₂ molecules (average speed ~0.5 km/s), while Moon’s escape velocity (2.4 km/s) is too low.
>
> **Heavier planets → Higher $v_e$ → Retain lighter gases**
>
> Jupiter retains even hydrogen and helium!

---

## Memory Tricks & Patterns

### Mnemonic for Escape Velocity Formula

**“Very Energetic Squirrels Root To Ground, Right?”**

→ $v_e = \sqrt{2gR}$

Or: **“Escape = Root 2, g, R”**

### The $\sqrt{2}$ Pattern

> **★ Key point · √2 Appears Everywhere in Gravitation!**
>
> 1. **Escape vs Orbital velocity:**
>
>    $$v_e = \sqrt{2} \cdot v_o$$

> 2. **Energy to escape:**

>    Total energy at surface = $-\frac{GMm}{2R}$ (for circular orbit)
>
>    To escape (E = 0): Need energy = $\frac{GMm}{2R} = \frac{1}{2}m v_o^2$
>
>    But escape KE = $\frac{1}{2}m v_e^2 = \frac{GMm}{R}$
>
>    Ratio: $\frac{v_e^2}{v_o^2} = 2$ → $v_e = \sqrt{2} v_o$ ✓
>
> **Remember:** Factor of $\sqrt{2}$ connects orbital and escape speeds!

### Quick Calculation Trick

For Earth:

$$v_e = \sqrt{2gR} = \sqrt{2 \times 10 \times 6.4 \times 10^6}$$

$$v_e = \sqrt{128 \times 10^6} = \sqrt{1.28} \times 10^4 \approx 1.13 \times 10^4 \text{ m/s} \approx 11 \text{ km/s}$$

**JEE shortcut:** Remember $v_e (Earth) \approx 11.2$ km/s, derive others from ratios!

---

## When to Use Escape Velocity Concepts

> **★ Key point · Decision Tree**
>
> **Use escape velocity when:**
>
> - Object needs to leave planet’s gravitational influence completely

> - Finding minimum velocity to reach infinity

> - Atmospheric retention problems (gas molecules escaping)

> - Binding energy calculations
>
> **Use orbital velocity when:**
>
> - Satellite orbiting at fixed distance

> - Circular motion around planet

> - Geostationary orbit problems
>
> **Use projectile motion when:**
>
> - Object returns to surface (v < $v_e$)

> - Maximum height problems with v < $v_e$
>
> **Key difference:**
>
> - Orbital: Stays at constant distance (circular/elliptical path)

> - Escape: Goes to infinity (open parabolic/hyperbolic path)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Thinking More Mass Needs More Velocity**
>
> **Wrong:** “A heavier rocket needs higher escape velocity” ❌
>
> **Correct:** Escape velocity is **independent of mass** of the object ✓
>
> $$v_e = \sqrt{\frac{2GM}{R}}$$
>
> (no ’m’ in the formula!)
>
> **What changes:** Energy required = $\frac{1}{2}mv_e^2$ (this depends on m)

> **⚠ Trap #2: Confusing Escape and Orbital Velocity**
>
> **Escape velocity:** Object reaches infinity, never returns
>
> **Orbital velocity:** Object stays in orbit at fixed distance
>
> $$v_e = \sqrt{2} \, v_o \approx 1.414 \, v_o$$
>
> **Not the same!** Orbital is smaller.
>
> **JEE Trap:** “Find the velocity for satellite to orbit at surface” → Use $v_o = \sqrt{gR}$, NOT $v_e$!

> **⚠ Trap #3: Forgetting Final Velocity at Infinity**
>
> **For minimum escape velocity:** Final velocity at infinity = **0** (just reaches)
>
> **If v > $v_e$:** Object reaches infinity with some velocity left
>
> Energy equation:
>
> $$\frac{1}{2}m v^2 - \frac{GMm}{R} = \frac{1}{2}m v_{\infty}^2$$
>
> **At exactly $v_e$:** $v_{\infty} = 0$
>
> **Above $v_e$:** $v_{\infty} > 0$ (hyperbolic escape)

> **⚠ Trap #4: Wrong Formula from Height**
>
> **From surface:** $v_e = \sqrt{\frac{2GM}{R}}$
>
> **From height h:** $v_e(h) = \sqrt{\frac{2GM}{R+h}}$ (NOT $\sqrt{\frac{2GM}{R}} - $ something!)
>
> Use $r = R+h$ in the formula, don’t subtract corrections!

---

## Practice Problems

### Level 1: Foundation (NCERT/Basics)

> **↗ Connection · Problem 1**
>
> Calculate the escape velocity from Earth’s surface. (g = 10 m/s², R = 6400 km)
>
> **Solution:**
>
> $$v_e = \sqrt{2gR}$$

$$v_e = \sqrt{2 \times 10 \times 6.4 \times 10^6}$$

$$v_e = \sqrt{128 \times 10^6} = \sqrt{1.28 \times 10^8}$$

$$v_e = 1.131 \times 10^4 \text{ m/s} \approx 11.3 \text{ km/s}$$
>
> **Answer:** **11.3 km/s** (or more precisely, 11.2 km/s with g = 9.8)

> **↗ Connection · Problem 2**
>
> If Earth’s radius is 6400 km, what is the orbital velocity of a satellite just above its surface? Hence find escape velocity. (g = 10 m/s²)
>
> **Solution:**
>
> Orbital velocity:
>
> $$v_o = \sqrt{gR} = \sqrt{10 \times 6.4 \times 10^6}$$

$$v_o = \sqrt{64 \times 10^6} = 8 \times 10^3 = 8 \text{ km/s}$$
>
> Escape velocity:
>
> $$v_e = \sqrt{2} \, v_o = 1.414 \times 8 = 11.3 \text{ km/s}$$
>
> **Answer:** $v_o = 8$ km/s, $v_e = 11.3$ km/s
>
> **Relation verified:** $v_e = \sqrt{2} \, v_o$ ✓

---

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> The escape velocity from Earth is 11.2 km/s. Find escape velocity from a planet whose mass is 4 times and radius is 2 times that of Earth.
>
> **Solution:**
>
> $$v_e = \sqrt{\frac{2GM}{R}}$$
>
> For new planet:
>
> $$v'_e = \sqrt{\frac{2G(4M)}{2R}} = \sqrt{\frac{8GM}{2R}} = \sqrt{\frac{4GM}{R}}$$
>
> Ratio:
>
> $$\frac{v'_e}{v_e} = \sqrt{\frac{4GM/R}{2GM/R}} = \sqrt{2}$$

$$v'_e = \sqrt{2} \times v_e = 1.414 \times 11.2 = 15.8 \text{ km/s}$$
>
> **Answer:** **15.8 km/s**
>
> **Shortcut:** $v_e \propto \sqrt{\frac{M}{R}}$
>
> $$v'_e = v_e \times \sqrt{\frac{M'/M}{R'/R}} = 11.2 \times \sqrt{\frac{4}{2}} = 11.2\sqrt{2}$$

> **↗ Connection · Problem 4**
>
> An object is projected from Earth’s surface with velocity equal to escape velocity. What will be its velocity at a distance 4R from Earth’s center?
>
> **Solution:**
>
> Using energy conservation:
>
> At surface (r = R):
>
> $$E_i = \frac{1}{2}m v_e^2 - \frac{GMm}{R}$$
>
> But $v_e^2 = \frac{2GM}{R}$:
>
> $$E_i = \frac{1}{2}m \times \frac{2GM}{R} - \frac{GMm}{R} = \frac{GMm}{R} - \frac{GMm}{R} = 0$$
>
> At distance 4R:
>
> $$E_f = \frac{1}{2}m v^2 - \frac{GMm}{4R}$$
>
> By conservation:
>
> $$E_f = E_i = 0$$

$$\frac{1}{2}m v^2 - \frac{GMm}{4R} = 0$$

$$\frac{1}{2}v^2 = \frac{GM}{4R}$$

$$v^2 = \frac{GM}{2R} = \frac{1}{4} \times \frac{2GM}{R} = \frac{v_e^2}{4}$$

$$v = \frac{v_e}{2} = \frac{11.2}{2} = 5.6 \text{ km/s}$$
>
> **Answer:** **5.6 km/s** (half of escape velocity)
>
> **Pattern:** At distance $nR$, velocity = $v_e \sqrt{\frac{n-1}{n}}$
>
> For n = 4: $v = v_e \sqrt{\frac{3}{4}} = \frac{v_e \sqrt{3}}{2} \approx 0.866 v_e$
>
> (Wait, this contradicts&mldr; let me recalculate)
>
> Actually: $v^2 = \frac{2GM}{R} - \frac{2GM}{4R} = \frac{2GM}{R}(1 - \frac{1}{4}) = \frac{3GM}{2R}$
>
> $$v = \sqrt{\frac{3}{2} \times \frac{GM}{R}} = \sqrt{\frac{3}{4} \times \frac{2GM}{R}} = \sqrt{\frac{3}{4}} v_e$$

$$v = \frac{\sqrt{3}}{2} v_e \approx 0.866 \times 11.2 = 9.7 \text{ km/s}$$
>
> **Corrected Answer:** **9.7 km/s**

> **↗ Connection · Problem 5**
>
> What is the minimum energy required to launch a 1000 kg satellite from Earth’s surface to infinity?
>
> **Solution:**
>
> Energy at surface:
>
> $$E_i = KE_i + PE_i = \frac{1}{2}m v_e^2 - \frac{GMm}{R}$$
>
> Since $v_e^2 = \frac{2GM}{R}$:
>
> $$E_i = \frac{GMm}{R} - \frac{GMm}{R} = 0$$
>
> Wait, this should be the initial energy needed:
>
> Initial state: At rest on surface
>
> $$E_{initial} = 0 - \frac{GMm}{R} = -\frac{GMm}{R}$$
>
> Final state: At infinity, at rest
>
> $$E_{final} = 0$$
>
> Energy needed:
>
> $$\Delta E = E_{final} - E_{initial} = 0 - (-\frac{GMm}{R}) = \frac{GMm}{R}$$
>
> Using $GM = gR^2$:
>
> $$\Delta E = \frac{gR^2 m}{R} = mgR$$

$$\Delta E = 1000 \times 10 \times 6.4 \times 10^6 = 6.4 \times 10^{10} \text{ J}$$
>
> **Answer:** **$6.4 \times 10^{10}$ J** or **64 GJ**
>
> **Alternative:** $\Delta E = \frac{1}{2}m v_e^2 = \frac{1}{2} \times 1000 \times (11.2 \times 10^3)^2 = 6.27 \times 10^{10}$ J ✓
>
> **This is the binding energy** of the satellite to Earth.

---

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 6**
>
> A particle is projected from Earth’s surface with speed $k v_e$ where $v_e$ is escape velocity. Find its speed when it is at a very large distance from Earth.
>
> **Solution:**
>
> Energy at surface:
>
> $$E_i = \frac{1}{2}m(k v_e)^2 - \frac{GMm}{R}$$

$$E_i = \frac{1}{2}m k^2 v_e^2 - \frac{GMm}{R}$$
>
> Using $v_e^2 = \frac{2GM}{R}$:
>
> $$E_i = \frac{1}{2}m k^2 \times \frac{2GM}{R} - \frac{GMm}{R}$$

$$E_i = \frac{k^2 GMm}{R} - \frac{GMm}{R} = \frac{GMm}{R}(k^2 - 1)$$
>
> At very large distance (infinity):
>
> $$E_f = \frac{1}{2}m v_{\infty}^2 + 0$$
>
> By conservation:
>
> $$\frac{1}{2}m v_{\infty}^2 = \frac{GMm}{R}(k^2 - 1)$$

$$v_{\infty}^2 = \frac{2GM}{R}(k^2 - 1) = v_e^2(k^2 - 1)$$

$$\boxed{v_{\infty} = v_e\sqrt{k^2 - 1}}$$
>
> **Special cases:**
>
> - $k = 1$ (exactly escape velocity): $v_{\infty} = 0$ ✓

> - $k = \sqrt{2}$: $v_{\infty} = v_e\sqrt{2-1} = v_e$

> - $k = 2$: $v_{\infty} = v_e\sqrt{3} \approx 1.73 v_e$
>
> **Answer:** $v_{\infty} = v_e\sqrt{k^2 - 1}$

> **↗ Connection · Problem 7 (Challenging)**
>
> Two identical planets each of mass M and radius R are initially at rest at a very large distance. They move towards each other under mutual gravitational attraction. Find the speed of each planet when their separation becomes 4R.
>
> **Solution:**
>
> **Initial state (at infinity):**
>
> - Both at rest: $KE_i = 0$

> - Infinite separation: $PE_i = 0$

> - Total energy: $E_i = 0$
>
> **Final state (separation = 4R):**
>
> - Each moving with speed $v$ (by symmetry)

> - $KE_f = \frac{1}{2}Mv^2 + \frac{1}{2}Mv^2 = Mv^2$

> - Centers are 4R apart: $PE_f = -\frac{GM^2}{4R}$

> - Total energy: $E_f = Mv^2 - \frac{GM^2}{4R}$
>
> **By conservation of energy:**
>
> $$E_f = E_i$$

$$Mv^2 - \frac{GM^2}{4R} = 0$$

$$v^2 = \frac{GM}{4R}$$

$$v = \frac{1}{2}\sqrt{\frac{GM}{R}}$$
>
> **Answer:** $v = \frac{1}{2}\sqrt{\frac{GM}{R}}$
>
> **Note:** Escape velocity from one planet’s surface: $v_e = \sqrt{\frac{2GM}{R}}$
>
> Our answer: $v = \frac{v_e}{2\sqrt{2}} = \frac{v_e}{2^{3/2}}$

> **↗ Connection · Problem 8 (Very Challenging)**
>
> Show that if Earth suddenly contracts to half its radius (with mass remaining constant), the length of a day would become 6 hours.
>
> **Solution:**
>
> **Part 1: Change in escape velocity**
>
> Original: $v_e = \sqrt{\frac{2GM}{R}}$
>
> After contraction (R’ = R/2):
>
> $$v'_e = \sqrt{\frac{2GM}{R/2}} = \sqrt{\frac{4GM}{R}} = 2v_e$$
>
> Escape velocity doubles!
>
> **Part 2: Change in day length (Angular momentum conservation)**
>
> Original angular momentum:
>
> $$L = I\omega = \frac{2}{5}MR^2 \times \frac{2\pi}{T}$$
>
> After contraction:
>
> $$L' = I'\omega' = \frac{2}{5}M(R/2)^2 \times \frac{2\pi}{T'}$$
>
> By conservation of angular momentum:
>
> $$L = L'$$

$$\frac{2}{5}MR^2 \times \frac{2\pi}{T} = \frac{2}{5}M\frac{R^2}{4} \times \frac{2\pi}{T'}$$

$$\frac{1}{T} = \frac{1}{4T'}$$

$$T' = \frac{T}{4}$$
>
> Original day: T = 24 hours

> New day: T’ = 24/4 = **6 hours**
>
> **Answer:** Day length becomes **6 hours**
>
> **Why?** Moment of inertia decreases as $R^2$, so rotation rate must increase as $1/R^2$ to conserve angular momentum. Since $T \propto R^2$, halving R makes T → T/4.
>
> **Bonus:** This is why ice skaters spin faster when they pull their arms in!

---

## Quick Revision Box

| Quantity | Formula | Value for Earth |
| --- | --- | --- |
| **Escape velocity** | $v_e = \sqrt{2gR}$ | 11.2 km/s |
| **Orbital velocity** | $v_o = \sqrt{gR}$ | 7.9 km/s |
| **Relation** | $v_e = \sqrt{2} \, v_o$ | 1.414 times |
| **From height h** | $v_e(h) = \sqrt{\frac{2GM}{R+h}}$ | Decreases with height |
| **Binding energy** | $E = \frac{GMm}{R} = \frac{1}{2}mv_e^2$ | $mgR$ |

**Key Relations:**

- $v_e \propto \sqrt{\frac{M}{R}} \propto \sqrt{gR}$
- Energy to escape = $\frac{GMm}{R} = mgR = \frac{1}{2}mv_e^2$
- At infinity with $v = v_e$: $v_{\infty} = 0$ (just reaches)
- At infinity with $v > v_e$: $v_{\infty} = \sqrt{v^2 - v_e^2}$

**Memory Aid:**

- Earth: 11.2 km/s
- Moon: 2.4 km/s (about 1/5th)
- Mars: 5 km/s (about 1/2)
- Jupiter: 60 km/s (about 5 times)

---

## Related Topics

### Within Gravitation Chapter

- [Universal Gravitation](../universal-gravitation/index.md) — Foundation formula
- [Gravitational Field and Potential](../gravitational-field-potential/index.md) — Energy derivation
- [Satellites](../satellites/index.md) — Orbital vs escape velocity

### Connected Chapters

- [Conservation of Energy](../../work-energy-power/conservation-energy/index.md) — Main tool for derivation
- [Kinetic Energy](../../work-energy-power/kinetic-energy/index.md) — $\frac{1}{2}mv_e^2$
- [Potential Energy](../../work-energy-power/potential-energy/index.md) — Gravitational PE

### Real World Applications

- [Space Missions] — ISRO Mangalyaan, Chandrayaan
- [Atmospheric Science] — Why planets retain atmospheres
- [Astrophysics] — Black holes (escape velocity > c)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Minimum Speed to Freedom:** Escape velocity is the minimum speed to break free from gravity — any slower, you’re bound forever

> 2. **Energy Perspective:** At exactly $v_e$, total mechanical energy = 0. Below that, negative (bound). Above that, positive (escapes with speed left)

> 3. **Mass Independence:** A feather and a rocket need the same escape velocity! But a rocket needs more **energy** to reach that speed.

> 4. **√2 Connection:** Escape velocity = $\sqrt{2}$ × Orbital velocity — fundamental relationship in gravitation

> 5. **Universal Application:** From launching satellites to understanding why Moon has no atmosphere — escape velocity explains it all
>
> **“Escape velocity is the cosmic speed limit between being bound and being free. Master this, and you understand why some planets have atmospheres, why rockets need stages, and why 11.2 km/s is humanity’s ticket to the stars!”**

---

From TestGuru · our mock-test platform

## You've read Escape Velocity.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=gravitation&tg_exam=jee-main&tg_page=%2Fphysics%2Fgravitation%2Fescape-velocity%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/gravitation/escape-velocity/",this.page.identifier="/physics/gravitation/escape-velocity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="orbitalMotion" id="anim-orbitalMotion-1795396423551048263"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-orbitalMotion-1795396423551048263")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/gravitation/escape-velocity/](https://jeenotes.in/physics/gravitation/escape-velocity/) · raw HTML: `offline/physics/gravitation/escape-velocity/index.html`_
