---
title: "Satellite Motion: Orbital Velocity, Time Period, and Energy"
source: "https://jeenotes.in/physics/gravitation/satellites/"
description: "Master satellite orbital mechanics, energy calculations, and types of satellites for JEE Physics"
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 8"
html: "../../../../offline/physics/gravitation/satellites/index.html"
extracted: "2026-11-23"
---

> Master satellite orbital mechanics, energy calculations, and types of satellites for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Law of Universal Gravitation](../universal-gravitation/index.md) — Gravitational force
- [Circular Motion](../../kinematics/circular-motion/index.md) — Centripetal acceleration
- [Kepler’s Laws](../keplers-laws/index.md) — Time period formula
- [Escape Velocity](../escape-velocity/index.md) — Comparison with orbital velocity

---

## The Hook: How Does the International Space Station Stay Up?

> **★ Key point · Connect: ISS → Physics**
>
> **450 km above your head**, the **International Space Station** races around Earth at **7.66 km/s** — that’s 27,600 km/hour!
>
> **Question everyone asks:** “What keeps it from falling down?”
>
> **Surprise answer:** **It IS falling!**
>
> Just like a thrown ball follows a curved path, the ISS is continuously “falling” towards Earth. But it’s moving forward so fast that by the time it falls a bit, Earth’s surface has curved away beneath it.
>
> **Result:** It keeps missing Earth, forever falling in a circle!
>
> **This is orbital motion** — the beautiful balance between gravity pulling inward and velocity carrying forward.
>
> **From ISRO’s INSAT satellites** bringing you TV signals to **GPS satellites** guiding your location to **Chandrayaan** orbiting the Moon — all follow the same physics!
>
> **Master satellite motion, and you’ve decoded the cosmic dance happening above your head right now.**

---

## The Core Concept

### What is a Satellite?

Any object that revolves around a planet in a fixed orbit under the influence of gravity.

**Natural satellites:** Moon around Earth, Titan around Saturn

**Artificial satellites:** INSAT, GPS, Hubble Space Telescope, Chandrayaan

**Key principle:** Gravitational force provides the centripetal force for circular motion.

### Interactive Demo: Visualize Satellite Orbits

Explore how satellites orbit at different altitudes and velocities.

---

## Orbital Velocity

### Derivation

For a satellite of mass $m$ orbiting Earth (mass $M$) at distance $r$ from center:

**Gravitational force = Centripetal force**

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

$$v^2 = \frac{GM}{r}$$

$$\boxed{v_o = \sqrt{\frac{GM}{r}}}$$

### Alternative Forms

Using $g = \frac{GM}{R^2}$ (where R = Earth’s radius):

$$GM = gR^2$$

$$\boxed{v_o = \sqrt{\frac{gR^2}{r}} = \sqrt{gR} \cdot \sqrt{\frac{R}{r}}}$$

**For satellite close to Earth’s surface** ($r \approx R$):

$$v_o = \sqrt{gR} = \sqrt{9.8 \times 6.4 \times 10^6} \approx 7.9 \text{ km/s}$$

**For height h above surface** ($r = R + h$):

$$\boxed{v_o = \sqrt{\frac{gR^2}{R+h}}}$$

> **★ Key point · Key Properties of Orbital Velocity**
>
> 1. **Independent of satellite’s mass** (m cancels out)

> 2. **Depends on orbital radius:** $v \propto \frac{1}{\sqrt{r}}$

> 3. **Higher orbit → Slower speed** (counterintuitive but true!)

> 4. **Related to escape velocity:** $v_o = \frac{v_e}{\sqrt{2}}$
>
> **Example:**
>
> - At surface (h = 0): $v_o = 7.9$ km/s

> - At h = R: $v_o = \sqrt{\frac{gR^2}{2R}} = \frac{7.9}{\sqrt{2}} = 5.6$ km/s

> - At h = 10R: $v_o = \frac{7.9}{\sqrt{11}} \approx 2.4$ km/s

---

## Time Period of Satellite

### Derivation

Time period = Distance / Speed

$$T = \frac{2\pi r}{v_o}$$

Substituting $v_o = \sqrt{\frac{GM}{r}}$:

$$T = \frac{2\pi r}{\sqrt{GM/r}} = 2\pi r \sqrt{\frac{r}{GM}}$$

$$\boxed{T = 2\pi\sqrt{\frac{r^3}{GM}}}$$

**This is Kepler’s Third Law** applied to satellites!

### Alternative Forms

Using $GM = gR^2$:

$$\boxed{T = 2\pi\sqrt{\frac{r^3}{gR^2}}}$$

**For satellite at Earth’s surface** ($r = R$):

$$T_0 = 2\pi\sqrt{\frac{R}{g}} = 2\pi\sqrt{\frac{6.4 \times 10^6}{10}}$$

$$T_0 = 2\pi \times 800 = 5024 \text{ s} \approx 84 \text{ minutes}$$

**For height h:**

$$T = 2\pi\sqrt{\frac{(R+h)^3}{gR^2}}$$

> **◐ In simple terms · The 84-Minute Rule**
>
> **84 minutes** is the minimum possible orbital period for any satellite around Earth.
>
> **Why?** Any closer than Earth’s surface and you hit the ground!
>
> **Real satellites:**
>
> - Low Earth Orbit (LEO): ~90 minutes (h ≈ 200-400 km)

> - ISS: 93 minutes (h ≈ 408 km)

> - GPS satellites: 12 hours (h ≈ 20,200 km)

> - Geostationary: 24 hours (h ≈ 35,786 km)

### Relation with Orbital Radius

From $T = 2\pi\sqrt{\frac{r^3}{GM}}$:

$$T^2 = \frac{4\pi^2}{GM} r^3$$

$$\boxed{T^2 \propto r^3}$$

**This means:**

- $T \propto r^{3/2}$
- Double the radius → Time period increases by $2^{3/2} = 2\sqrt{2} \approx 2.83$ times

---

## Energy of a Satellite

### Kinetic Energy

$$KE = \frac{1}{2}mv_o^2$$

Substituting $v_o^2 = \frac{GM}{r}$:

$$\boxed{KE = \frac{GMm}{2r}}$$

### Potential Energy

At distance $r$ from Earth’s center:

$$\boxed{PE = -\frac{GMm}{r}}$$

(Negative because reference is at infinity)

### Total Mechanical Energy

$$E = KE + PE$$

$$E = \frac{GMm}{2r} - \frac{GMm}{r}$$

$$\boxed{E = -\frac{GMm}{2r}}$$

**Total energy is negative** — satellite is in a **bound state** (can’t escape without adding energy).

### Key Energy Relations

$$\boxed{\begin{align}
KE &= \frac{GMm}{2r} \\
PE &= -\frac{GMm}{r} \\
E &= -\frac{GMm}{2r}
\end{align}}$$

**Important ratios:**

$$\boxed{\begin{align}
E &= \frac{PE}{2} = -KE \\
|PE| &= 2 \times KE \\
|E| &= KE
\end{align}}$$

> **★ Key point · The 1:2:1 Pattern — Critical for JEE!**
>
> For a satellite in circular orbit:
>
> $$KE : |PE| : |E| = 1 : 2 : 1$$
>
> **Example:** If KE = 100 J, then:
>
> - $|PE| = 200$ J (actually PE = -200 J)

> - $|E| = 100$ J (actually E = -100 J)
>
> **Memory trick:** “K-P-E is 1-2-1” (like counting in binary!)
>
> **Why this pattern?**

> From virial theorem for inverse-square force: $2KE + PE = 0$
>
> So: $PE = -2KE$, and $E = KE + PE = KE - 2KE = -KE$

---

## Satellite in Different Orbits

### Effect of Changing Orbital Radius

| Quantity | Formula | Variation with r |
| --- | --- | --- |
| **Velocity** | $v = \sqrt{\frac{GM}{r}}$ | $v \propto r^{-1/2}$ (decreases) |
| **Time period** | $T = 2\pi\sqrt{\frac{r^3}{GM}}$ | $T \propto r^{3/2}$ (increases) |
| **KE** | $KE = \frac{GMm}{2r}$ | $KE \propto r^{-1}$ (decreases) |
| **PE** | $PE = -\frac{GMm}{r}$ | $\|PE\| \propto r^{-1}$ (decreases) |
| **Total E** | $E = -\frac{GMm}{2r}$ | $\|E\| \propto r^{-1}$ (decreases) |

**Counterintuitive result:**

- **Higher orbit → Slower speed, longer period, LESS energy (more negative)**
- To move to higher orbit, must ADD energy (seems opposite but isn’t!)

> **◐ In simple terms · The Satellite Energy Paradox**
>
> **Paradox:** To move satellite to higher orbit, we add energy. But total energy becomes MORE negative!
>
> **Resolution:**
>
> - Adding energy increases KE momentarily

> - Satellite spirals to higher orbit

> - At new orbit, KE is LESS than before (slower speed)

> - But PE increased (less negative) MORE than KE decreased

> - Net: Total energy increased (became less negative)
>
> **Example:** Move from orbit 1 to orbit 2 where $r_2 = 2r_1$:
>
> Initial: $E_1 = -\frac{GMm}{2r_1}$
>
> Final: $E_2 = -\frac{GMm}{4r_1}$
>
> Energy added: $\Delta E = E_2 - E_1 = \frac{GMm}{4r_1} > 0$ (positive — added!)
>
> Result: $E_2$ is less negative than $E_1$ (total energy increased)

---

## Types of Satellites

### 1. Low Earth Orbit (LEO)

**Height:** 200 - 2000 km

**Examples:** ISS, Hubble Space Telescope, Spy satellites, Earth observation

**Period:** ~90-120 minutes

**Velocity:** ~7.8 km/s

**Advantages:**

- Less energy to launch
- Better image resolution (closer to Earth)
- Lower communication delay

**Disadvantages:**

- Atmospheric drag (needs periodic boost)
- Short visibility time over any location

### 2. Geostationary Satellite (GEO)

**Height:** ~35,786 km above equator

**Period:** Exactly 24 hours (one sidereal day)

**Velocity:** ~3.07 km/s

**Special property:** **Appears stationary** from Earth’s surface

**Conditions for geostationary orbit:**

1. Period = 24 hours
2. Orbit in **equatorial plane** (inclination = 0°)
3. Moves **west to east** (same as Earth’s rotation)

**Examples:** INSAT series (TV, weather), communication satellites

**Derivation of height:**

$$T = 2\pi\sqrt{\frac{r^3}{GM}} = 24 \times 3600 = 86,400 \text{ s}$$

$$r^3 = \frac{GMT^2}{4\pi^2}$$

Using $GM = gR^2 = 9.8 \times (6.4 \times 10^6)^2 = 4.01 \times 10^{14}$:

$$r^3 = \frac{4.01 \times 10^{14} \times (86,400)^2}{4\pi^2}$$

$$r \approx 4.22 \times 10^7 \text{ m} = 42,200 \text{ km}$$

Height above surface:

$$h = r - R = 42,200 - 6,400 = 35,800 \text{ km}$$

**Precise value:** h = 35,786 km

> **◐ In simple terms · ISRO's INSAT Satellites**
>
> **INSAT series** (Indian National Satellite System) are geostationary satellites providing:
>
> - Television broadcasting

> - Weather forecasting

> - Disaster warning

> - Telecommunication
>
> **Advantage:** One satellite covers entire Indian subcontinent continuously!
>
> **Location:** Positioned at specific longitudes (e.g., 93.5°E for INSAT-4A)
>
> **“Geostationary slots” are valuable real estate** — countries register their positions with ITU (International Telecommunication Union)!

### 3. Polar Satellites

**Height:** ~500-800 km

**Orbit:** Passes over **both poles** (polar orbit)

**Period:** ~100 minutes

**Special property:** Earth rotates beneath the orbit, so satellite covers entire Earth surface

**Examples:** ISRO’s PSLV launches, weather satellites, mapping satellites

**Applications:**

- Weather monitoring
- Earth resource mapping
- Surveillance
- Environmental monitoring

**ISRO’s achievement:** **Polar Satellite Launch Vehicle (PSLV)** is one of the most reliable launch systems globally!

### 4. Medium Earth Orbit (MEO)

**Height:** 2,000 - 35,786 km

**Examples:** GPS satellites (~20,200 km), Galileo, GLONASS

**Period:** 2-12 hours

**GPS constellation:** 24+ satellites ensure at least 4 visible from anywhere on Earth

---

## Weightlessness in Satellites

### Why Do Astronauts Float?

**Common misconception:** “There’s no gravity in space”

**Reality:** Gravity at ISS height (400 km) is still **90% of surface value**!

$$g_h = g\left(\frac{R}{R+h}\right)^2 = 9.8 \times \left(\frac{6400}{6800}\right)^2 \approx 8.7 \text{ m/s}^2$$

**So why weightlessness?**

**Because satellite AND astronaut are both in free fall!**

Weight is the **normal reaction** from the floor. In free fall:

- No normal reaction
- Apparent weight = 0
- Feeling of “weightlessness”

**Analogy:** Elevator cable breaks — during fall, you feel weightless (until crash!). Satellite is in permanent free fall.

> **★ Key point · Apparent g in Satellite**
>
> For satellite in circular orbit:
>
> Centripetal acceleration = $\frac{v^2}{r} = \frac{GM}{r^2} = g$ (at that height)
>
> This EXACTLY equals gravitational acceleration!
>
> Net acceleration felt by astronaut = 0
>
> **Apparent g = 0** (true weightlessness)
>
> **This is why orbiting is called “free fall”** — continuously falling, never landing!

---

## Energy Required to Launch a Satellite

### From Surface to Orbit at Height h

**Initial state (at rest on surface):**

$$E_i = 0 - \frac{GMm}{R} = -\frac{GMm}{R}$$

**Final state (in orbit at r = R+h):**

$$E_f = \frac{GMm}{2(R+h)} - \frac{GMm}{R+h} = -\frac{GMm}{2(R+h)}$$

**Energy required:**

$$\Delta E = E_f - E_i = -\frac{GMm}{2(R+h)} - \left(-\frac{GMm}{R}\right)$$

$$\boxed{\Delta E = GMm\left(\frac{1}{R} - \frac{1}{2(R+h)}\right)}$$

Using $GM = gR^2$:

$$\boxed{\Delta E = mgR\left(1 - \frac{R}{2(R+h)}\right)}$$

**For low orbit** (h « R):

$$\Delta E \approx mgR\left(1 - \frac{1}{2}\right) = \frac{mgR}{2}$$

**This is half the energy needed to escape!** (Escape energy = $mgR$)

---

## Memory Tricks & Patterns

### Mnemonic for Orbital Velocity

**“Very Old Gorillas Mate Regularly”**

→ $v_o = \sqrt{\frac{GM}{r}} = \sqrt{gR} \sqrt{\frac{R}{r}}$

### The $\sqrt{2}$ Connection

> **★ Key point · Escape vs Orbital — Always √2**
>
> At same height:
>
> $$\frac{v_e}{v_o} = \frac{\sqrt{2GM/r}}{\sqrt{GM/r}} = \sqrt{2}$$
>
> **Escape velocity = $\sqrt{2}$ × Orbital velocity**
>
> **For Earth’s surface:**
>
> - $v_o = 7.9$ km/s

> - $v_e = 11.2$ km/s

> - Ratio = 11.2/7.9 = 1.417 ≈ $\sqrt{2}$ ✓

### The 1-2-1 Energy Pattern

**“One KE, Two PE, One Total”**

$$KE : |PE| : |E| = 1 : 2 : 1$$

Or remember: $E = \frac{PE}{2} = -KE$

### Powers of r

| Quantity | Proportional to |
| --- | --- |
| $v$ | $r^{-1/2}$ |
| $T$ | $r^{3/2}$ |
| $KE, PE, E$ | $r^{-1}$ |

**Pattern:** Negative powers mean **decreases** with height

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Thinking Higher Orbit = Faster Speed**
>
> **Wrong:** Satellites farther from Earth move faster ❌
>
> **Correct:** $v \propto \frac{1}{\sqrt{r}}$ — **Higher orbit = Slower speed** ✓
>
> **Example:**
>
> - At surface: 7.9 km/s

> - At geostationary orbit: 3.1 km/s
>
> **Why?** Gravitational force is weaker, needs less centripetal acceleration, so slower speed!

> **⚠ Trap #2: Zero Gravity in Orbit**
>
> **Wrong:** “No gravity in space, that’s why astronauts float” ❌
>
> **Correct:** Gravity is ~90% of surface value. Astronauts are in **free fall** ✓
>
> **At ISS height:** $g \approx 8.7$ m/s² (not zero!)
>
> **Weightlessness** ≠ No gravity. It means **no normal force** (continuous free fall).

> **⚠ Trap #3: Total Energy is Positive**
>
> **Wrong:** Adding KE and |PE| directly: $E = KE + |PE|$ ❌
>
> **Correct:** PE is negative: $E = KE + (-|PE|) = KE - |PE|$ ✓
>
> **Result:** Total energy is **negative** for bound orbits
>
> $$E = \frac{GMm}{2r} - \frac{GMm}{r} = -\frac{GMm}{2r} < 0$$

> **⚠ Trap #4: Geostationary vs Geosynchronous**
>
> **Geostationary:** Period = 24 hours **AND** in equatorial plane (appears fixed)
>
> **Geosynchronous:** Period = 24 hours but **any inclination** (appears to trace figure-8)
>
> **All geostationary are geosynchronous, but NOT vice versa!**
>
> **JEE often asks:** “Conditions for geostationary” → Must mention **equatorial orbit**!

---

## Practice Problems

### Level 1: Foundation (NCERT/Basics)

> **↗ Connection · Problem 1**
>
> Find the orbital velocity and time period of a satellite orbiting just above Earth’s surface. (R = 6400 km, g = 10 m/s²)
>
> **Solution:**
>
> Orbital velocity:
>
> $$v_o = \sqrt{gR} = \sqrt{10 \times 6.4 \times 10^6}$$

$$v_o = \sqrt{64 \times 10^6} = 8 \times 10^3 = 8 \text{ km/s}$$
>
> Time period:
>
> $$T = 2\pi\sqrt{\frac{R}{g}} = 2\pi\sqrt{\frac{6.4 \times 10^6}{10}}$$

$$T = 2\pi \times 800 = 5027 \text{ s} \approx 84 \text{ minutes}$$
>
> **Answer:** $v_o = 8$ km/s, $T = 84$ minutes

> **↗ Connection · Problem 2**
>
> A satellite of mass 100 kg is in circular orbit at height equal to Earth’s radius. Find its KE, PE, and total energy. (R = 6400 km, g = 10 m/s²)
>
> **Solution:**
>
> Orbital radius: $r = R + h = R + R = 2R$
>
> **Kinetic Energy:**
>
> $$KE = \frac{GMm}{2r} = \frac{gR^2 m}{2r} = \frac{gR^2 m}{4R} = \frac{mgR}{4}$$

$$KE = \frac{100 \times 10 \times 6.4 \times 10^6}{4} = \frac{6.4 \times 10^9}{4} = 1.6 \times 10^9 \text{ J}$$
>
> **Potential Energy:**
>
> $$PE = -\frac{GMm}{r} = -\frac{gR^2 m}{2R} = -\frac{mgR}{2}$$

$$PE = -\frac{100 \times 10 \times 6.4 \times 10^6}{2} = -3.2 \times 10^9 \text{ J}$$
>
> **Total Energy:**
>
> $$E = KE + PE = 1.6 \times 10^9 - 3.2 \times 10^9 = -1.6 \times 10^9 \text{ J}$$
>
> **Verification:** $E = \frac{PE}{2}$ ✓ and $|PE| = 2 \times KE$ ✓
>
> **Answer:** KE = $1.6 \times 10^9$ J, PE = $-3.2 \times 10^9$ J, E = $-1.6 \times 10^9$ J

---

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> Calculate the height of a geostationary satellite above Earth’s surface. (R = 6400 km, g = 10 m/s²)
>
> **Solution:**
>
> For geostationary satellite: $T = 24$ hours = $86,400$ s
>
> $$T = 2\pi\sqrt{\frac{r^3}{gR^2}}$$

$$86,400 = 2\pi\sqrt{\frac{r^3}{10 \times (6.4 \times 10^6)^2}}$$

$$\frac{86,400}{2\pi} = \sqrt{\frac{r^3}{4.096 \times 10^{14}}}$$

$$13,751 = \sqrt{\frac{r^3}{4.096 \times 10^{14}}}$$

$$1.891 \times 10^8 = \frac{r^3}{4.096 \times 10^{14}}$$

$$r^3 = 7.746 \times 10^{22}$$

$$r = 4.26 \times 10^7 \text{ m} = 42,600 \text{ km}$$
>
> Height above surface:
>
> $$h = r - R = 42,600 - 6,400 = 36,200 \text{ km}$$
>
> **Answer:** Approximately **36,000 km** (precise value: 35,786 km)

> **↗ Connection · Problem 4**
>
> Two satellites A and B have time periods 4 hours and 8 hours respectively. Find the ratio of their:

> (a) Orbital radii

> (b) Orbital velocities

> (c) Total energies (same mass)
>
> **Solution:**
>
> **(a) Orbital radii:**
>
> From $T^2 \propto r^3$:
>
> $$\frac{T_A^2}{T_B^2} = \frac{r_A^3}{r_B^3}$$

$$\frac{16}{64} = \frac{r_A^3}{r_B^3}$$

$$\frac{r_A^3}{r_B^3} = \frac{1}{4}$$

$$\frac{r_A}{r_B} = \left(\frac{1}{4}\right)^{1/3} = \frac{1}{4^{1/3}} = \frac{1}{1.587} \approx 0.63$$
>
> **Answer (a):** $r_A : r_B = 1 : 1.587$ (approximately **1 : 1.6**)
>
> **(b) Orbital velocities:**
>
> $$v = \sqrt{\frac{GM}{r}} \implies v \propto r^{-1/2}$$

$$\frac{v_A}{v_B} = \sqrt{\frac{r_B}{r_A}} = \sqrt{1.587} \approx 1.26$$
>
> **Answer (b):** $v_A : v_B = 1.26 : 1$ (approximately **5 : 4**)
>
> **Alternative:** $v = \frac{2\pi r}{T}$
>
> $$\frac{v_A}{v_B} = \frac{r_A}{r_B} \times \frac{T_B}{T_A} = 0.63 \times 2 = 1.26$$
>
> ✓
>
> **(c) Total energies:**
>
> $$E = -\frac{GMm}{2r} \implies E \propto r^{-1}$$

$$\frac{|E_A|}{|E_B|} = \frac{r_B}{r_A} = 1.587$$
>
> **Answer (c):** $|E_A| : |E_B| = 1.587 : 1$ (approximately **8 : 5**)
>
> Satellite A (closer) has MORE energy (larger |E|).

> **↗ Connection · Problem 5**
>
> A satellite is orbiting at height h above Earth. If it has to be transferred to an orbit at height 2h, what is the percentage increase in its total energy?
>
> **Solution:**
>
> Initial orbit: $r_1 = R + h$
>
> Final orbit: $r_2 = R + 2h$
>
> Initial energy:
>
> $$E_1 = -\frac{GMm}{2(R+h)}$$
>
> Final energy:
>
> $$E_2 = -\frac{GMm}{2(R+2h)}$$
>
> Fractional change:
>
> $$\frac{\Delta E}{|E_1|} = \frac{E_2 - E_1}{|E_1|}$$

$$= \frac{-\frac{GMm}{2(R+2h)} + \frac{GMm}{2(R+h)}}{\frac{GMm}{2(R+h)}}$$

$$= \frac{\frac{GMm}{2}\left[\frac{1}{R+h} - \frac{1}{R+2h}\right]}{\frac{GMm}{2(R+h)}}$$

$$= \frac{\frac{h}{(R+h)(R+2h)}}{\frac{1}{R+h}}$$

$$= \frac{h}{R+2h}$$
>
> Percentage increase:
>
> $$\% \text{ increase} = \frac{h}{R+2h} \times 100\%$$
>
> **For specific case h = R:**
>
> $$\% \text{ increase} = \frac{R}{R+2R} \times 100\% = \frac{1}{3} \times 100\% = 33.3\%$$
>
> **Answer:** Depends on h. For h = R: **33.3% increase**
>
> **General formula:** $\frac{h}{R+2h} \times 100\%$

---

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 6**
>
> A satellite is in elliptical orbit around Earth with perigee distance $r_p = R$ (just grazing surface) and apogee distance $r_a = 4R$. Find:

> (a) Speed at perigee

> (b) Speed at apogee

> (c) Time period
>
> **Solution:**
>
> Semi-major axis: $a = \frac{r_p + r_a}{2} = \frac{R + 4R}{2} = 2.5R$
>
> **(a) Speed at perigee:**
>
> Using energy conservation:
>
> Total energy (constant):
>
> $$E = -\frac{GMm}{2a} = -\frac{GMm}{5R}$$
>
> At perigee:
>
> $$E = \frac{1}{2}mv_p^2 - \frac{GMm}{R}$$

$$-\frac{GMm}{5R} = \frac{1}{2}mv_p^2 - \frac{GMm}{R}$$

$$\frac{1}{2}v_p^2 = \frac{GM}{R} - \frac{GM}{5R} = \frac{4GM}{5R}$$

$$v_p^2 = \frac{8GM}{5R} = \frac{8gR}{5}$$

$$v_p = \sqrt{\frac{8gR}{5}} = \sqrt{1.6 \times 10 \times 6.4 \times 10^6}$$

$$v_p = \sqrt{102.4 \times 10^6} \approx 10.1 \text{ km/s}$$
>
> **Answer (a):** **10.1 km/s**
>
> **(b) Speed at apogee:**
>
> Using angular momentum conservation:
>
> $$r_p v_p = r_a v_a$$

$$v_a = \frac{r_p}{r_a} v_p = \frac{R}{4R} \times 10.1 = 2.53 \text{ km/s}$$
>
> **Answer (b):** **2.53 km/s**
>
> **(c) Time period:**
>
> $$T = 2\pi\sqrt{\frac{a^3}{GM}} = 2\pi\sqrt{\frac{(2.5R)^3}{gR^2}}$$

$$T = 2\pi\sqrt{\frac{15.625R}{g}}$$

$$T = 2\pi \times \sqrt{1.5625} \times \sqrt{\frac{R}{g}}$$

$$T = 2\pi \times 1.25 \times 800 = 2000\pi \approx 6283 \text{ s} \approx 105 \text{ minutes}$$
>
> **Answer (c):** **105 minutes** (1 hour 45 minutes)

> **↗ Connection · Problem 7 (Challenging)**
>
> A satellite initially at rest on Earth’s surface is launched into a circular orbit at height R above surface. Find the ratio of kinetic energy provided by rocket to the final kinetic energy of satellite.
>
> **Solution:**
>
> **Initial state (at rest on surface):**
>
> - $KE_i = 0$

> - $PE_i = -\frac{GMm}{R}$

> - $E_i = -\frac{GMm}{R}$
>
> **Final state (in orbit at r = 2R):**
>
> - $KE_f = \frac{GMm}{2r} = \frac{GMm}{4R}$

> - $PE_f = -\frac{GMm}{2R}$

> - $E_f = -\frac{GMm}{4R}$
>
> **Energy provided by rocket:**
>
> $$\Delta E_{rocket} = E_f - E_i = -\frac{GMm}{4R} - \left(-\frac{GMm}{R}\right)$$

$$\Delta E_{rocket} = \frac{GMm}{R}\left(1 - \frac{1}{4}\right) = \frac{3GMm}{4R}$$
>
> **Final KE:**
>
> $$KE_f = \frac{GMm}{4R}$$
>
> **Ratio:**
>
> $$\frac{\Delta E_{rocket}}{KE_f} = \frac{3GMm/4R}{GMm/4R} = 3$$
>
> **Answer:** **3:1**
>
> **Interpretation:** Rocket provides 3 times the final KE. Why?
>
> Energy provided goes into:
>
> 1. Increasing PE from $-\frac{GMm}{R}$ to $-\frac{GMm}{2R}$ → Increase = $\frac{GMm}{2R}$

> 2. Increasing KE from 0 to $\frac{GMm}{4R}$ → Increase = $\frac{GMm}{4R}$
>
> Total = $\frac{GMm}{2R} + \frac{GMm}{4R} = \frac{3GMm}{4R}$ ✓

> **↗ Connection · Problem 8 (Very Challenging)**
>
> A satellite is moving in a circular orbit around Earth. A particle is suddenly ejected from the satellite such that it just escapes Earth’s gravitational field. Find the minimum kinetic energy of the particle with respect to the satellite. (Satellite and particle have same mass m)
>
> **Solution:**
>
> **In satellite’s frame:**
>
> Satellite is moving with orbital velocity:
>
> $$v_o = \sqrt{\frac{GM}{r}}$$
>
> Particle needs escape velocity (in Earth’s frame):
>
> $$v_e = \sqrt{\frac{2GM}{r}}$$
>
> **Case 1: Particle ejected in direction of satellite motion**
>
> Particle’s velocity in Earth’s frame: $v = v_o + v_{rel}$
>
> For escape: $v = v_e$
>
> $$v_o + v_{rel} = v_e$$

$$v_{rel} = v_e - v_o = \sqrt{\frac{2GM}{r}} - \sqrt{\frac{GM}{r}}$$

$$v_{rel} = \sqrt{\frac{GM}{r}}(\sqrt{2} - 1) = v_o(\sqrt{2} - 1)$$
>
> KE in satellite frame:
>
> $$KE_1 = \frac{1}{2}m v_{rel}^2 = \frac{1}{2}m v_o^2(\sqrt{2} - 1)^2$$

$$KE_1 = \frac{1}{2}m v_o^2(2 - 2\sqrt{2} + 1) = \frac{1}{2}m v_o^2(3 - 2\sqrt{2})$$
>
> **Case 2: Particle ejected opposite to satellite motion**
>
> $$v_o - v_{rel} = -v_e$$

$$v_{rel} = v_o + v_e = v_o(1 + \sqrt{2})$$

$$KE_2 = \frac{1}{2}m v_o^2(1 + \sqrt{2})^2 = \frac{1}{2}m v_o^2(3 + 2\sqrt{2})$$
>
> **Case 1 gives minimum!**
>
> $$KE_{min} = \frac{1}{2}m v_o^2(3 - 2\sqrt{2})$$
>
> Using $v_o^2 = \frac{GM}{r}$:
>
> $$\boxed{KE_{min} = \frac{GMm}{2r}(3 - 2\sqrt{2})}$$
>
> Numerically: $3 - 2\sqrt{2} = 3 - 2.828 = 0.172$
>
> $$KE_{min} \approx 0.172 \times \frac{GMm}{2r} = 0.086 \times \frac{GMm}{r}$$
>
> **Answer:** $KE_{min} = \frac{GMm}{2r}(3 - 2\sqrt{2}) \approx 0.086 \frac{GMm}{r}$
>
> **Key insight:** Eject in forward direction to minimize energy (use satellite’s momentum)!

---

## Quick Revision Box

| Parameter | Formula | Value for LEO (h≈0) |
| --- | --- | --- |
| **Orbital velocity** | $v_o = \sqrt{\frac{GM}{r}}$ | 7.9 km/s |
| **Time period** | $T = 2\pi\sqrt{\frac{r^3}{GM}}$ | 84 minutes |
| **Kinetic energy** | $KE = \frac{GMm}{2r}$ | $\frac{mgR}{2}$ |
| **Potential energy** | $PE = -\frac{GMm}{r}$ | $-mgR$ |
| **Total energy** | $E = -\frac{GMm}{2r}$ | $-\frac{mgR}{2}$ |

**Key Relations:**

- $v_e = \sqrt{2} \cdot v_o$
- $T^2 \propto r^3$ (Kepler’s Third Law)
- $KE : |PE| : |E| = 1 : 2 : 1$
- $E = \frac{PE}{2} = -KE$

**Special Satellites:**

- LEO: h = 200-2000 km, T ≈ 90-120 min
- GPS: h ≈ 20,200 km, T = 12 hours
- Geostationary: h ≈ 35,786 km, T = 24 hours

---

## Related Topics

### Within Gravitation Chapter

- [Universal Gravitation](../universal-gravitation/index.md) — Gravitational force foundation
- [Kepler’s Laws](../keplers-laws/index.md) — $T^2 \propto r^3$ for satellites
- [Escape Velocity](../escape-velocity/index.md) — $v_e = \sqrt{2} \, v_o$
- [Acceleration due to Gravity](../acceleration-gravity/index.md) — Variation with height

### Connected Chapters

- [Circular Motion](../../kinematics/circular-motion/index.md) — Centripetal force = Gravitational force
- [Work and Energy](../../work-energy-power/index.md) — Energy calculations
- [Angular Momentum](../../rotational-motion/index.md) — Conservation in orbits

### Real World

- ISRO missions: Chandrayaan, Mangalyaan, INSAT
- GPS, satellite TV, weather satellites
- International Space Station

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Orbital Motion = Continuous Free Fall:** Satellites are falling towards Earth but moving sideways fast enough to keep missing it!

> 2. **Higher Orbit = Slower Speed:** Counterintuitive but true — $v \propto r^{-1/2}$, farther satellites move slower

> 3. **Energy Pattern 1-2-1:** $KE : |PE| : |E| = 1 : 2 : 1$ — memorize this ratio, it’s gold for JEE!

> 4. **Geostationary is Special:** Only one height (35,786 km) and must be equatorial — this makes satellite appear fixed in sky

> 5. **Weightlessness ≠ No Gravity:** Astronauts float because they’re in free fall, not because there’s no gravity (g is still 90% of surface value!)
>
> **“From Sputnik in 1957 to ISRO’s record 104 satellites in one launch in 2017 — all follow these simple laws. Master satellite motion, and you’ve understood how humanity conquered the final frontier!”**

---

From TestGuru · our mock-test platform

## You've read Satellite Motion: Orbital Velocity, Time Period, and Energy.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=gravitation&tg_exam=jee-main&tg_page=%2Fphysics%2Fgravitation%2Fsatellites%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/gravitation/satellites/",this.page.identifier="/physics/gravitation/satellites/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="orbitalMotion" id="anim-orbitalMotion-1795396423562669157"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-orbitalMotion-1795396423562669157")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/gravitation/satellites/](https://jeenotes.in/physics/gravitation/satellites/) · raw HTML: `offline/physics/gravitation/satellites/index.html`_
