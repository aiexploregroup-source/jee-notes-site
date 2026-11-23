---
title: "Kepler's Laws of Planetary Motion"
source: "https://jeenotes.in/physics/gravitation/keplers-laws/"
description: "Master Kepler's three laws and their derivation from Newton's laws for JEE Physics"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 8"
html: "../../../../offline/physics/gravitation/keplers-laws/index.html"
extracted: "2026-11-23"
---

> Master Kepler's three laws and their derivation from Newton's laws for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Law of Universal Gravitation](../universal-gravitation/index.md) — Foundation for deriving Kepler’s laws
- [Circular Motion](../../kinematics/circular-motion/index.md) — Centripetal force concepts
- [Angular Momentum](../../rotational-motion/index.md) — Conservation principles

---

## The Hook: The Detective Work that Changed Astronomy

> **★ Key point · Connect: History → Physics**
>
> Imagine you’re a detective with a massive dataset: **30 years** of planetary observations by Tycho Brahe. No telescope (they didn’t exist yet!), just meticulous naked-eye measurements of Mars’s position in the sky.
>
> In **1609**, Johannes Kepler analyzed this data and discovered something shocking:
>
> **Planets don’t move in perfect circles!**
>
> This was heresy — for 2000 years, everyone believed in perfect circular orbits. But Kepler trusted the data over dogma.
>
> His three laws not only described planetary motion — they paved the way for **Newton’s law of gravitation** 77 years later!
>
> **Today:** These laws govern everything from **ISRO’s Mangalyaan** reaching Mars to **NASA’s James Webb Space Telescope** orbiting the Sun.
>
> **From ancient observations to modern space missions — Kepler’s laws connect them all.**

---

## The Core Concept

Kepler discovered **three empirical laws** (based on observation, not derived from first principles). Later, Newton showed these laws **follow from universal gravitation** and his laws of motion.

**For JEE:** You need to know:

1. **Statement** of each law
2. **Mathematical form**
3. **Derivation** from [Newton’s laws](../../laws-of-motion/index.md) (for Law 3)
4. **Applications** and problem-solving

---

## Kepler’s First Law: Law of Orbits

### Statement

**“All planets move in elliptical orbits with the Sun at one of the foci.”**

### Understanding Ellipses

An **ellipse** has:

- Two foci: $F_1$ and $F_2$
- Semi-major axis: $a$ (half the longest diameter)
- Semi-minor axis: $b$ (half the shortest diameter)
- Eccentricity: $e = \sqrt{1 - \frac{b^2}{a^2}}$ (measures “ovalness”)

**For a point on ellipse:**

$$r_1 + r_2 = 2a \quad \text{(constant)}$$

where $r_1, r_2$ are distances from the two foci.

> **◐ In simple terms · Special Cases**
>
> **Circle:** $e = 0$ (both foci at center, $a = b$)
>
> **Ellipse:** $0 < e < 1$ (most planets have e ≈ 0.01 to 0.2)
>
> **Parabola:** $e = 1$ (open orbit — comet escaping)
>
> **Hyperbola:** $e > 1$ (faster escape trajectory)
>
> **Earth’s orbit:** $e = 0.017$ (almost circular!)

### Interactive Demo: Kepler’s Laws Visualization

Explore how planets move in elliptical orbits around the Sun. This interactive visualization demonstrates all three of Kepler’s Laws:

**How to use this visualization:**

- **Semi-major axis (a):** Adjust the size of the orbit
- **Eccentricity (e):** Change how elliptical the orbit is (0 = circle, 0.9 = highly elongated)
- **Planet Presets:** Click Mercury, Venus, Earth, or Mars to see their real orbital parameters
- **Second Planet:** Enable to compare two orbits and verify T^2/a^3 ratio
- **Area Sweep:** Shows the purple swept area - notice it stays constant as the planet speeds up near perihelion

### Key Points on the Orbit

| Point | Distance from Sun | Name |
| --- | --- | --- |
| **Perihelion** | $a(1-e)$ | Closest to Sun |
| **Aphelion** | $a(1+e)$ | Farthest from Sun |

For circular orbit: Perihelion = Aphelion = $a$ (radius)

---

## Kepler’s Second Law: Law of Areas

### Statement

**“The line joining a planet to the Sun sweeps out equal areas in equal intervals of time.”**

### Mathematical Form

$$\boxed{\frac{dA}{dt} = \text{constant}}$$

where $A$ is the area swept by the radius vector.

**This is equivalent to:** Conservation of angular momentum!

### Derivation

For a small time $dt$, the area swept:

$$dA = \frac{1}{2} r \times (r\,d\theta) = \frac{1}{2}r^2 d\theta$$

$$\frac{dA}{dt} = \frac{1}{2}r^2 \frac{d\theta}{dt} = \frac{1}{2}r^2 \omega$$

But $L = mr^2\omega$ (angular momentum), so:

$$\boxed{\frac{dA}{dt} = \frac{L}{2m} = \text{constant}}$$

**If angular momentum L is conserved** (which it is — gravity provides no torque), **then area/time is constant.**

### Physical Consequences

> **★ Key point · Speed Variation**
>
> **Near the Sun (perihelion):**
>
> - Small distance $r$

> - To sweep same area, must cover larger arc

> - **Higher speed** $v$
>
> **Far from Sun (aphelion):**
>
> - Large distance $r$

> - Covers smaller arc for same area

> - **Lower speed** $v$
>
> **Conservation of angular momentum:**
>
> $$L = mrv_{\perp} = \text{constant}$$

$$r_p v_p = r_a v_a$$
>
> **Example:** Earth moves faster in January (perihelion) than in July (aphelion)!

### Connection to Angular Momentum

Since $\frac{dA}{dt} = \frac{L}{2m}$ and this is constant:

$$\boxed{L = \text{constant}}$$

**This proves:** Kepler’s Second Law ↔ [Conservation of Angular Momentum](../../rotational-motion/angular-momentum/index.md)

**Why is L conserved?**

- Gravitational force is **central** (along the line joining centers)
- Torque $\vec{\tau} = \vec{r} \times \vec{F} = 0$ (vectors parallel)
- Zero torque → Angular momentum conserved

---

## Kepler’s Third Law: Law of Periods

### Statement

**“The square of the time period of a planet is proportional to the cube of the semi-major axis of its orbit.”**

### Mathematical Form

$$\boxed{T^2 \propto a^3}$$

Or:

$$\boxed{\frac{T^2}{a^3} = \frac{4\pi^2}{GM} = \text{constant}}$$

where:

- $T$ = Time period of revolution
- $a$ = Semi-major axis of ellipse (= radius for circular orbit)
- $M$ = Mass of the Sun (central body)

**For circular orbits:** $a = r$ (radius)

$$\boxed{T^2 = \frac{4\pi^2}{GM} r^3}$$

### Derivation for Circular Orbits

For a planet of mass $m$ in circular orbit of radius $r$ around Sun of mass $M$:

**Gravitational force provides centripetal force:**

$$\frac{GMm}{r^2} = \frac{mv^2}{r}$$

$$v^2 = \frac{GM}{r}$$

**Orbital velocity:**

$$v = \sqrt{\frac{GM}{r}}$$

**Time period:**

$$T = \frac{2\pi r}{v} = \frac{2\pi r}{\sqrt{GM/r}} = 2\pi r \sqrt{\frac{r}{GM}}$$

$$T = 2\pi \sqrt{\frac{r^3}{GM}}$$

Squaring both sides:

$$\boxed{T^2 = \frac{4\pi^2}{GM} r^3}$$

**This proves:** $T^2 \propto r^3$

### Universal Nature

The constant $\frac{4\pi^2}{GM}$ depends only on the **central mass** (Sun).

**All planets orbiting the same star:**

$$\frac{T_1^2}{a_1^3} = \frac{T_2^2}{a_2^3}$$

**Different systems:** Different constants (depends on central mass)

> **◐ In simple terms · ISRO's Missions**
>
> **Chandrayaan orbiting Moon:**
>
> $$T^2 = \frac{4\pi^2}{GM_{Moon}} r^3$$
>
> **Mangalyaan orbiting Mars:**
>
> $$T^2 = \frac{4\pi^2}{GM_{Mars}} r^3$$
>
> Same law, different central mass — different constant!

---

## Comparing the Three Laws

| Law | Statement | Mathematical Form | Physical Meaning |
| --- | --- | --- | --- |
| **First** | Elliptical orbits | $r = \frac{a(1-e^2)}{1+e\cos\theta}$ | Shape of orbit |
| **Second** | Equal areas in equal times | $\frac{dA}{dt} = \frac{L}{2m}$ | Angular momentum conservation |
| **Third** | $T^2 \propto a^3$ | $\frac{T^2}{a^3} = \frac{4\pi^2}{GM}$ | Relates period to distance |

---

## Applications and Extensions

### Satellite Motion Around Earth

For satellites orbiting Earth, replace $M$ (Sun’s mass) with $M_E$ (Earth’s mass):

$$T^2 = \frac{4\pi^2}{GM_E} r^3$$

Using $g = \frac{GM_E}{R_E^2}$:

$$T^2 = \frac{4\pi^2}{gR_E^2} r^3$$

**For satellite close to surface:** $r \approx R_E$

$$T = 2\pi\sqrt{\frac{R_E}{g}} \approx 84 \text{ minutes}$$

### Finding Unknown Masses

Kepler’s third law allows us to **find the mass of central body**:

$$M = \frac{4\pi^2 a^3}{GT^2}$$

**Example:** By observing Jupiter’s moon Io (period and distance), we can calculate Jupiter’s mass!

**This is how astronomers find masses of planets and stars.**

---

## Memory Tricks & Patterns

### Mnemonic for the Three Laws

**“Elephants Always Travel”** → **E**llipse, **A**rea, **T**ime-period

Or: **“Only Astronomers Think”** → **O**rbit, **A**rea, **T**ime

### The 2-3 Pattern in Law 3

$$T^{\boxed{2}} \propto a^{\boxed{3}}$$

**“Two squared, Three cubed”** → $T^2 \propto a^3$

### Power Relationships

> **★ Key point · Dimensional Analysis Trick**
>
> From Kepler’s Third Law: $T^2 \propto r^3$
>
> This means:
>
> - $T \propto r^{3/2}$

> - $r \propto T^{2/3}$
>
> **Doubling the distance:**
>
> - New period: $T' = 2^{3/2} T = 2\sqrt{2} \, T \approx 2.83T$
>
> **Doubling the period:**
>
> - New distance: $r' = 2^{2/3} r \approx 1.59r$
>
> **For JEE:** These relationships save calculation time!

---

## When to Use Which Law

> **★ Key point · Decision Tree**
>
> **Use First Law when:**
>
> - Finding closest/farthest distance (perihelion/aphelion)

> - Dealing with elliptical orbits

> - Shape and eccentricity questions
>
> **Use Second Law when:**
>
> - Comparing speeds at different points

> - Angular momentum problems

> - “Equal area in equal time” questions

> - Proving conservation of angular momentum
>
> **Use Third Law when:**
>
> - Finding time period from orbital radius

> - Finding orbital radius from time period

> - Comparing different orbits around same body

> - Finding mass of central body
>
> **Most JEE problems use Third Law** — memorize $T^2 \propto r^3$ cold!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting Which is Squared/Cubed**
>
> **Wrong:** $T^3 \propto r^2$ ❌
>
> **Correct:** $T^2 \propto r^3$ ✓
>
> **Remember:** Time is **squared** (2), Distance is **cubed** (3)

> **⚠ Trap #2: Using 'a' for Circular Orbits**
>
> For **circular orbits:**
>
> - $a$ = radius $r$ (semi-major axis = radius)
>
> For **elliptical orbits:**
>
> - $a$ = semi-major axis (NOT the distance at any given time)
>
> **In formulas:** Always use $a$ (semi-major axis), which equals $r$ for circles.

> **⚠ Trap #3: Confusing Central Mass**
>
> The constant in Kepler’s Third Law depends on **central body’s mass**:
>
> **Around Sun:** $\frac{T^2}{a^3} = \frac{4\pi^2}{GM_{Sun}}$
>
> **Around Earth:** $\frac{T^2}{a^3} = \frac{4\pi^2}{GM_{Earth}}$
>
> **Different central mass → Different constant!**
>
> **JEE Trap:** Comparing Earth’s orbit around Sun with Moon’s orbit around Earth — different systems, different constants!

> **⚠ Trap #4: Second Law Speed Comparison**
>
> **Higher speed at perihelion** (closer to Sun), **not** at aphelion!
>
> From $r_p v_p = r_a v_a$ and $r_p < r_a$:
>
> $$v_p > v_a$$
>
> **Think:** Falling towards Sun → speed increases (like projectile descending)

---

## Practice Problems

### Level 1: Foundation (NCERT/Basics)

> **↗ Connection · Problem 1**
>
> If Earth’s orbital radius is $1.5 \times 10^{11}$ m and period is 1 year, find Mars’s period if its orbital radius is $2.28 \times 10^{11}$ m.
>
> **Solution:**
>
> Using Kepler’s Third Law (same central body — Sun):
>
> $$\frac{T_M^2}{T_E^2} = \frac{a_M^3}{a_E^3}$$

$$T_M = T_E \times \left(\frac{a_M}{a_E}\right)^{3/2}$$

$$T_M = 1 \times \left(\frac{2.28 \times 10^{11}}{1.5 \times 10^{11}}\right)^{3/2}$$

$$T_M = \left(\frac{2.28}{1.5}\right)^{3/2} = (1.52)^{1.5}$$

$$T_M = 1.52 \times \sqrt{1.52} = 1.52 \times 1.233 \approx 1.87 \text{ years}$$
>
> **Answer:** **1.87 years** (Mars takes about 687 days to orbit the Sun)
>
> **Actual value:** 1.88 years — very close!

> **↗ Connection · Problem 2**
>
> A planet moves in an elliptical orbit around the Sun. Its speed at perihelion is $v_p = 30$ km/s. If the perihelion distance is $r_p = 1.5 \times 10^{11}$ m and aphelion distance is $r_a = 2.5 \times 10^{11}$ m, find the speed at aphelion.
>
> **Solution:**
>
> Using conservation of angular momentum (Kepler’s Second Law):
>
> $$r_p v_p = r_a v_a$$

$$v_a = \frac{r_p v_p}{r_a} = \frac{1.5 \times 10^{11} \times 30}{2.5 \times 10^{11}}$$

$$v_a = \frac{1.5 \times 30}{2.5} = \frac{45}{2.5} = 18 \text{ km/s}$$
>
> **Answer:** **18 km/s**
>
> **Check:** $r_p < r_a$ and $v_p > v_a$ ✓ (Faster when closer)

---

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> A satellite orbits Earth at height equal to Earth’s radius (R = 6400 km, g = 10 m/s²). Find its time period.
>
> **Solution:**
>
> Distance from Earth’s center: $r = R + h = R + R = 2R$
>
> Using Kepler’s Third Law:
>
> $$T = 2\pi\sqrt{\frac{r^3}{GM}}$$
>
> We know $GM = gR^2$:
>
> $$T = 2\pi\sqrt{\frac{r^3}{gR^2}} = 2\pi\sqrt{\frac{(2R)^3}{gR^2}}$$

$$T = 2\pi\sqrt{\frac{8R^3}{gR^2}} = 2\pi\sqrt{\frac{8R}{g}}$$

$$T = 2\pi \times \sqrt{2} \times \sqrt{\frac{R}{g}}$$
>
> Note: $2\pi\sqrt{\frac{R}{g}}$ is the period for satellite at surface.
>
> $$T_{surface} = 2\pi\sqrt{\frac{6.4 \times 10^6}{10}} = 2\pi \times 800 \approx 5024 \text{ s} \approx 84 \text{ min}$$

$$T = \sqrt{8} \times T_{surface} = 2\sqrt{2} \times 84$$

$$T = 2.828 \times 84 \approx 237 \text{ minutes} \approx 4 \text{ hours}$$
>
> **Answer:** **Approximately 4 hours** or **237 minutes**
>
> **More precise calculation:**
>
> $$T = 2\pi\sqrt{\frac{8 \times 6.4 \times 10^6}{10}} = 2\pi\sqrt{5.12 \times 10^6}$$

$$T = 2\pi \times 2263 \approx 14,210 \text{ s} \approx 237 \text{ min}$$

> **↗ Connection · Problem 4**
>
> The ratio of the distances of two planets from the Sun is 1:4. What is the ratio of their time periods?
>
> **Solution:**
>
> Given: $\frac{r_1}{r_2} = \frac{1}{4}$
>
> From Kepler’s Third Law: $T^2 \propto r^3$
>
> $$\frac{T_1^2}{T_2^2} = \frac{r_1^3}{r_2^3} = \left(\frac{r_1}{r_2}\right)^3 = \left(\frac{1}{4}\right)^3 = \frac{1}{64}$$

$$\frac{T_1}{T_2} = \sqrt{\frac{1}{64}} = \frac{1}{8}$$
>
> **Answer:** **1:8**
>
> **Interpretation:** The closer planet completes 8 orbits in the time the farther planet completes 1 orbit!

> **↗ Connection · Problem 5**
>
> A satellite’s period is doubled. By what factor does its orbital radius change?
>
> **Solution:**
>
> From $T^2 \propto r^3$:
>
> $$\frac{T_2^2}{T_1^2} = \frac{r_2^3}{r_1^3}$$
>
> Given: $T_2 = 2T_1$
>
> $$\frac{(2T_1)^2}{T_1^2} = \frac{r_2^3}{r_1^3}$$

$$4 = \frac{r_2^3}{r_1^3}$$

$$r_2 = r_1 \times 4^{1/3} = r_1 \times 2^{2/3}$$

$$r_2 \approx 1.587 \, r_1$$
>
> **Answer:** Radius increases by factor of **$2^{2/3} \approx 1.587$** or **about 59%**
>
> **Shortcut:** $T \propto r^{3/2}$, so if $T$ is doubled: $r \to r \times 2^{2/3}$

---

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 6**
>
> Two satellites orbit Earth with periods in the ratio 1:8. Find the ratio of their:

> (a) Orbital radii

> (b) Orbital speeds

> (c) Angular velocities
>
> **Solution:**
>
> Given: $\frac{T_1}{T_2} = \frac{1}{8}$
>
> **(a) Orbital radii:**
>
> From $T^2 \propto r^3$:
>
> $$\frac{T_1^2}{T_2^2} = \frac{r_1^3}{r_2^3}$$

$$\frac{1}{64} = \frac{r_1^3}{r_2^3}$$

$$\frac{r_1}{r_2} = \left(\frac{1}{64}\right)^{1/3} = \frac{1}{4}$$
>
> **Answer (a):** **1:4**
>
> **(b) Orbital speeds:**
>
> $$v = \frac{2\pi r}{T}$$

$$\frac{v_1}{v_2} = \frac{r_1}{r_2} \times \frac{T_2}{T_1} = \frac{1}{4} \times \frac{8}{1} = 2$$
>
> **Answer (b):** **2:1** (Closer satellite is faster!)
>
> **Alternative:** From $v = \sqrt{\frac{GM}{r}}$:
>
> $$\frac{v_1}{v_2} = \sqrt{\frac{r_2}{r_1}} = \sqrt{4} = 2$$
>
> ✓
>
> **(c) Angular velocities:**
>
> $$\omega = \frac{2\pi}{T}$$

$$\frac{\omega_1}{\omega_2} = \frac{T_2}{T_1} = \frac{8}{1}$$
>
> **Answer (c):** **8:1**
>
> **Summary:**
>
> - Radii: 1:4

> - Speeds: 2:1

> - Angular velocities: 8:1

> **↗ Connection · Problem 7 (Challenging)**
>
> A planet moves in an elliptical orbit with eccentricity $e = 0.5$ and semi-major axis $a = 2 \times 10^{11}$ m around the Sun. Find:

> (a) Perihelion and aphelion distances

> (b) Ratio of speeds at perihelion and aphelion

> (c) Time period (G = $6.67 \times 10^{-11}$ N·m²/kg², $M_{Sun} = 2 \times 10^{30}$ kg)
>
> **Solution:**
>
> **(a) Perihelion and aphelion distances:**
>
> $$r_p = a(1-e) = 2 \times 10^{11} \times (1-0.5) = 1 \times 10^{11} \text{ m}$$

$$r_a = a(1+e) = 2 \times 10^{11} \times (1+0.5) = 3 \times 10^{11} \text{ m}$$
>
> **Answer (a):** $r_p = 1 \times 10^{11}$ m, $r_a = 3 \times 10^{11}$ m
>
> **(b) Ratio of speeds:**
>
> From conservation of angular momentum:
>
> $$\frac{v_p}{v_a} = \frac{r_a}{r_p} = \frac{3 \times 10^{11}}{1 \times 10^{11}} = 3$$
>
> **Answer (b):** **3:1** (Three times faster at perihelion!)
>
> **(c) Time period:**
>
> $$T = 2\pi\sqrt{\frac{a^3}{GM}}$$

$$T = 2\pi\sqrt{\frac{(2 \times 10^{11})^3}{6.67 \times 10^{-11} \times 2 \times 10^{30}}}$$

$$T = 2\pi\sqrt{\frac{8 \times 10^{33}}{13.34 \times 10^{19}}}$$

$$T = 2\pi\sqrt{0.6 \times 10^{14}} = 2\pi \times 7.75 \times 10^6$$

$$T \approx 4.87 \times 10^7 \text{ s}$$
>
> Converting to years: $T = \frac{4.87 \times 10^7}{365.25 \times 24 \times 3600} = \frac{4.87 \times 10^7}{3.156 \times 10^7} \approx 1.54$ years
>
> **Answer (c):** **1.54 years** or **about 563 days**

> **↗ Connection · Problem 8 (Very Challenging)**
>
> Jupiter’s moon Io has an orbital period of 1.77 days and orbital radius of $4.22 \times 10^8$ m. Using this data, calculate the mass of Jupiter. (G = $6.67 \times 10^{-11}$ N·m²/kg²)
>
> **Solution:**
>
> From Kepler’s Third Law:
>
> $$T^2 = \frac{4\pi^2}{GM} r^3$$

$$M = \frac{4\pi^2 r^3}{GT^2}$$
>
> Convert period to seconds:
>
> $$T = 1.77 \times 24 \times 3600 = 152,928 \text{ s}$$

$$M = \frac{4\pi^2 \times (4.22 \times 10^8)^3}{6.67 \times 10^{-11} \times (152,928)^2}$$

$$M = \frac{4 \times 9.87 \times 75.15 \times 10^{24}}{6.67 \times 10^{-11} \times 2.338 \times 10^{10}}$$

$$M = \frac{2967 \times 10^{24}}{15.59 \times 10^{-1}} = \frac{2967 \times 10^{24}}{1.559}$$

$$M \approx 1.90 \times 10^{27} \text{ kg}$$
>
> **Answer:** **$M_{Jupiter} \approx 1.90 \times 10^{27}$ kg**
>
> **Check:** Actual mass of Jupiter = $1.898 \times 10^{27}$ kg — excellent agreement!
>
> **This is how astronomers find masses of distant planets!**

---

## Quick Revision Box

| Law | Key Formula | JEE Application |
| --- | --- | --- |
| **First Law** | $r = \frac{a(1-e^2)}{1+e\cos\theta}$ | Perihelion: $a(1-e)$, Aphelion: $a(1+e)$ |
| **Second Law** | $\frac{dA}{dt} = \frac{L}{2m}$ | $r_p v_p = r_a v_a$ (speed comparison) |
| **Third Law** | $T^2 = \frac{4\pi^2}{GM}r^3$ | Finding T from r, or vice versa |

**Key Relations:**

- $T \propto r^{3/2}$
- $v \propto r^{-1/2}$
- $\omega \propto r^{-3/2}$

**Special Values:**

- Earth’s orbit: $a = 1.5 \times 10^{11}$ m, $T = 365.25$ days, $e = 0.017$
- Satellite at Earth’s surface: $T \approx 84$ minutes

---

## Related Topics

### Within Gravitation Chapter

- [Universal Gravitation](../universal-gravitation/index.md) — Foundation for Kepler’s laws
- [Gravitational Field and Potential](../gravitational-field-potential/index.md) — Energy perspective
- [Satellites](../satellites/index.md) — Applying Kepler’s laws to artificial satellites

### Connected Chapters

- [Circular Motion](../../kinematics/circular-motion/index.md) — Centripetal force in orbits
- [Angular Momentum](../../rotational-motion/angular-momentum/index.md) — Conservation in Second Law
- [Work and Energy](../../work-energy-power/index.md) — Energy in elliptical orbits
- [Conservation of Energy](../../work-energy-power/conservation-energy/index.md) — Total energy in orbits

### Math Connections

- [Conic Sections](../../../mathematics/coordinate-geometry/index.md) — Ellipse, parabola, hyperbola
- [Differentiation](../../../mathematics/limits-continuity-differentiability/index.md) — Deriving area rates
- [Logarithms](../../../mathematics/index.md) — Solving period-radius problems

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Three Laws, One Foundation:** All three laws follow from Newton’s law of gravitation — observation led to theory!

> 2. **First Law:** Orbits are ellipses (circles are special case) — Sun at one focus, not center

> 3. **Second Law:** Equal areas = Conservation of angular momentum — faster when closer to Sun

> 4. **Third Law:** $T^2 \propto r^3$ — THE most important for JEE calculations! Know it cold.

> 5. **Universal Application:** Same laws govern planets, moons, satellites, binary stars — from solar system to galaxies
>
> **“Kepler looked at data and found patterns. Newton explained WHY those patterns exist. You must know both — the WHAT (Kepler’s laws) and the WHY (Newton’s derivation). Master this, and the cosmos becomes predictable!”**

---

From TestGuru · our mock-test platform

## You've read Kepler's Laws of Planetary Motion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=gravitation&tg_exam=jee-main&tg_page=%2Fphysics%2Fgravitation%2Fkeplers-laws%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/gravitation/keplers-laws/",this.page.identifier="/physics/gravitation/keplers-laws/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="keplerOrbitalMotion" id="anim-keplerOrbitalMotion-1795396423543598677"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-keplerOrbitalMotion-1795396423543598677")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/gravitation/keplers-laws/](https://jeenotes.in/physics/gravitation/keplers-laws/) · raw HTML: `offline/physics/gravitation/keplers-laws/index.html`_
