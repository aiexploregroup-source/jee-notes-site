---
title: "Circular Motion Dynamics - Centripetal Force"
source: "https://jeenotes.in/physics/laws-of-motion/circular-dynamics/"
description: "Master centripetal force, banking of roads, vertical circular motion, and conical pendulum for JEE Main & Advanced"
updated: "2025-12-26"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 8"
html: "../../../../offline/physics/laws-of-motion/circular-dynamics/index.html"
extracted: "2026-11-23"
---

> Master centripetal force, banking of roads, vertical circular motion, and conical pendulum for JEE Main & Advanced

## Prerequisites

Before studying this topic, make sure you understand:

- [Circular Motion](../../kinematics/circular-motion/index.md) - Angular velocity, centripetal acceleration
- [Newton’s Second Law](../newtons-second-law/index.md) - F = ma
- [Friction](../friction/index.md) - Coefficient of friction

---

## The Hook: Why Don’t You Fall Out of a Roller Coaster Loop?

> **★ Key point · Connect: Fast X Loop-the-Loop Stunt**
>
> In **Fast X** (2023), cars perform insane loop-the-loop stunts. When the car is upside down at the top of the loop, why doesn’t the driver fall out? What keeps the car on the track?
>
> The answer: **Centripetal force** — the net force toward the center that keeps objects moving in circles!

**The Big Questions:**

- What force makes objects move in circles?
- Why do roads bank on curves?
- How fast can you go on a circular path without slipping?

---

## The Core Concept: Centripetal Force

### What is Centripetal Force?

**Centripetal force** is the net force directed toward the center of the circular path, required for circular motion.

$$\boxed{F_c = \frac{mv^2}{r} = m\omega^2 r = mv\omega}$$

Where:

- $F_c$ = Centripetal force (toward center)
- $m$ = mass
- $v$ = linear speed
- $r$ = radius of circular path
- $\omega$ = angular velocity

**Direction:** Always toward the center (radially inward)

> **★ Key point · Centripetal Force is NOT a New Force!**
>
> Centripetal force is NOT a separate force of nature. It’s the **net result** of existing forces (tension, friction, gravity, normal force) that happens to point toward the center.
>
> **Examples:**
>
> - Planet orbiting Sun: Centripetal force = Gravitational force

> - Car on curve: Centripetal force = Friction force

> - Stone on string: Centripetal force = Tension in string

### Interactive Demo: Visualize Circular Motion Forces

See how forces combine to create centripetal acceleration.

### Centripetal Acceleration

$$\boxed{a_c = \frac{v^2}{r} = \omega^2 r}$$

**Direction:** Toward center (same as centripetal force)

**From Newton’s Second Law:**

$$F_c = ma_c = m \cdot \frac{v^2}{r}$$

---

## Common Circular Motion Scenarios

### 1. Stone Tied to String (Horizontal Circle)

**Setup:** Stone of mass $m$ moves in horizontal circle of radius $r$ with speed $v$.

**Free Body Diagram:**

- Tension $T$ (toward center, horizontal)
- Weight $mg$ (downward)

**For horizontal circular motion:**

Only the horizontal component provides centripetal force.

If string is horizontal (ideal case):

$$T = \frac{mv^2}{r}$$

**Breaking point:** String breaks if $T > T_{\text{max}}$

Maximum safe speed:

$$v_{\text{max}} = \sqrt{\frac{rT_{\text{max}}}{m}}$$

---

### 2. Conical Pendulum

**Setup:** Bob of mass $m$ attached to string of length $L$ moves in horizontal circle while string makes angle $\theta$ with vertical.

**Free Body Diagram:**

- Tension $T$ (along string)
- Weight $mg$ (downward)

**Components:**

- Horizontal: $T\sin\theta$ (toward center)
- Vertical: $T\cos\theta$ (upward)

**Vertical equilibrium:**

$$T\cos\theta = mg \quad \text{...(1)}$$

**Horizontal (centripetal force):**

$$T\sin\theta = \frac{mv^2}{r} \quad \text{...(2)}$$

where $r = L\sin\theta$ (radius of horizontal circle)

**Dividing (2) by (1):**

$$\tan\theta = \frac{v^2}{rg} = \frac{v^2}{Lg\sin\theta}$$

$$v^2 = Lg\sin\theta\tan\theta$$

**Alternative form:**

$$\cos\theta = \frac{g}{L\omega^2}$$

where $\omega$ is angular velocity.

**Period of revolution:**

$$T_{\text{period}} = 2\pi\sqrt{\frac{L\cos\theta}{g}}$$

> **★ Key point · Memory Trick**
>
> **“Conical pendulum COS is Constant”**
>
> $$\cos\theta = \frac{g}{L\omega^2}$$
>
> Larger $\omega$ (faster spin) → smaller $\cos\theta$ → larger $\theta$ (more horizontal)

---

## Vehicle on Circular Road

### Level Road (No Banking)

**Car moving on flat circular road of radius $r$ at speed $v$.**

**Centripetal force provided by:** Friction between tires and road

$$f = \frac{mv^2}{r}$$

**Maximum friction available:**

$$f_{\text{max}} = \mu_s N = \mu_s mg$$

**For no skidding:**

$$\frac{mv^2}{r} \leq \mu_s mg$$

$$v \leq \sqrt{\mu_s rg}$$

**Maximum safe speed:**

$$\boxed{v_{\text{max}} = \sqrt{\mu_s rg}}$$

> **★ Key point · Fast X Road Chase**
>
> In **Fast X**, when cars take sharp turns at high speed on flat roads, they risk skidding. The maximum speed depends on:
>
> - $\mu$ (tire grip) — better tires, higher speed

> - $r$ (curve radius) — sharper turn (smaller $r$), lower safe speed

> - $g$ (gravity) — can’t change this on Earth!
>
> This is why racetracks have gentle curves (large $r$) for high-speed sections.

**Key insight:** Maximum speed is **independent of mass**!

- Heavy car and light car have same maximum safe speed
- Why? Both friction and required centripetal force scale with mass

---

### Banked Road (Without Friction)

**Road is tilted at angle $\theta$ to the horizontal.**

**Free Body Diagram:**

- Normal force $N$ (perpendicular to road surface)
- Weight $mg$ (downward)

**Components:**

- Horizontal (toward center): $N\sin\theta$
- Vertical (upward): $N\cos\theta$

**Vertical equilibrium:**

$$N\cos\theta = mg \quad \text{...(1)}$$

**Horizontal (centripetal force):**

$$N\sin\theta = \frac{mv^2}{r} \quad \text{...(2)}$$

**Dividing (2) by (1):**

$$\tan\theta = \frac{v^2}{rg}$$

**Optimum speed (no friction needed):**

$$\boxed{v_{\text{opt}} = \sqrt{rg\tan\theta}}$$

At this speed, vehicle can navigate the curve without any friction — normal force alone provides centripetal force!

**Banking angle for given speed:**

$$\boxed{\theta = \tan^{-1}\left(\frac{v^2}{rg}\right)}$$

> **◐ In simple terms · Why Banking Helps**
>
> On a banked road:
>
> - Component of normal force points toward center

> - Reduces dependence on friction

> - Safer at high speeds

> - Reduces tire wear
>
> Highways and racetracks use banking on curves!

---

### Banked Road (With Friction)

**Most general case:** Banked road + friction available.

**Two scenarios:**

#### Scenario A: Maximum Speed (Friction Up the Slope)

Car trying to go too fast tends to slip **up** the slope. Friction acts **down** the slope.

**Horizontal (toward center):**

$$N\sin\theta + f\cos\theta = \frac{mv^2}{r}$$

**Vertical:**

$$N\cos\theta = mg + f\sin\theta$$

Using $f = \mu N$ and solving:

$$\boxed{v_{\text{max}} = \sqrt{rg \cdot \frac{\mu + \tan\theta}{1 - \mu\tan\theta}}}$$

#### Scenario B: Minimum Speed (Friction Down the Slope)

Car going too slow tends to slip **down** the slope. Friction acts **up** the slope.

$$\boxed{v_{\text{min}} = \sqrt{rg \cdot \frac{\tan\theta - \mu}{1 + \mu\tan\theta}}}$$

**Range of safe speeds:**

$$v_{\text{min}} \leq v \leq v_{\text{max}}$$

> **⚠ Trap · Common Mistake**
>
> **Wrong:** On banked road, friction always points toward center.
>
> **Correct:** Direction of friction depends on speed:
>
> - Too fast → friction acts down the slope (away from center component)

> - Too slow → friction acts up the slope (toward center component)

> - Just right ($v = v_{\text{opt}}$) → no friction needed!

---

## Vertical Circular Motion

### General Setup

**Object moves in a vertical circle of radius $r$.**

**Key difference from horizontal:** Weight acts throughout, changing the required force at different points.

**At any point, centripetal force:**

$$F_c = \frac{mv^2}{r}$$

But this centripetal force is provided by **different combinations** of tension/normal and weight at different positions.

---

### Case 1: Stone Tied to String (Vertical Circle)

#### At the Lowest Point (Bottom)

**Forces:**

- Tension $T_L$ (upward)
- Weight $mg$ (downward)

**Net force toward center (upward):**

$$T_L - mg = \frac{mv_L^2}{r}$$

$$\boxed{T_L = mg + \frac{mv_L^2}{r}}$$

**Tension is maximum at the bottom.**

#### At the Highest Point (Top)

**Forces:**

- Tension $T_H$ (downward)
- Weight $mg$ (downward)

**Net force toward center (downward):**

$$T_H + mg = \frac{mv_H^2}{r}$$

$$\boxed{T_H = \frac{mv_H^2}{r} - mg}$$

**Tension is minimum at the top.**

#### Minimum Speed at Top (Critical Condition)

For the stone to complete the circle, tension must be $\geq 0$ at the top.

**At limiting case:** $T_H = 0$

$$0 = \frac{mv_H^2}{r} - mg$$

$$v_H = \sqrt{gr}$$

**Minimum speed at top:**

$$\boxed{v_{H,\text{min}} = \sqrt{gr}}$$

**Using energy conservation to find minimum speed at bottom:**

$$\frac{1}{2}mv_L^2 = \frac{1}{2}mv_H^2 + mg(2r)$$

$$v_L^2 = v_H^2 + 4gr = gr + 4gr = 5gr$$

**Minimum speed at bottom:**

$$\boxed{v_{L,\text{min}} = \sqrt{5gr}}$$

> **★ Key point · Memory Trick: Minimum Speeds**
>
> **“Top 1, Bottom 5”**
>
> - Minimum speed at top: $v_H = \sqrt{gr}$ (coefficient = 1)

> - Minimum speed at bottom: $v_L = \sqrt{5gr}$ (coefficient = 5)
>
> Easy to remember: 1 and 5!

---

### Case 2: Object Inside a Smooth Sphere

**Object moves inside a smooth hemispherical bowl.**

At angle $\theta$ from vertical:

**Radial (toward center):**

$$N - mg\cos\theta = \frac{mv^2}{r}$$

**At the highest point the object can reach:**
$N = 0$ (loses contact)

$$mg\cos\theta = \frac{mv^2}{r}$$

Using energy conservation from bottom to height $h = r - r\cos\theta = r(1-\cos\theta)$:

$$\frac{1}{2}mu^2 = \frac{1}{2}mv^2 + mgr(1-\cos\theta)$$

where $u$ is initial speed at bottom.

Solving for the angle where object leaves contact gives conditions based on initial speed.

---

### Case 3: Motor Cycle in Vertical Circle (Well of Death)

**Motorcycle moves on the inside of a vertical cylindrical wall.**

**At horizontal level:**

**Centripetal force (horizontal, toward center):**

$$N = \frac{mv^2}{r}$$

**Vertical equilibrium:**

$$f = mg$$

**Using $f = \mu N$:**

$$\mu N = mg$$

$$\mu \cdot \frac{mv^2}{r} = mg$$

**Minimum speed:**

$$\boxed{v_{\text{min}} = \sqrt{\frac{rg}{\mu}}}$$

> **★ Key point · Well of Death Stunt Shows**
>
> In stunt shows (and movies!), motorcycles ride along the inside wall of a vertical cylinder. They need:
>
> - High speed (to generate large normal force $N$)

> - Good friction (so that $\mu N \geq mg$)
>
> If speed drops below minimum, friction can’t support weight → rider falls!

---

## Death-Defying Stunts: Loop-the-Loop

### Car on Vertical Circular Track

**At the top of the loop:**

**Forces:**

- Normal force $N$ (downward, from track)
- Weight $mg$ (downward)

**Centripetal force:**

$$N + mg = \frac{mv^2}{r}$$

**Minimum speed (N = 0):**

$$mg = \frac{mv_{\text{min}}^2}{r}$$

$$\boxed{v_{\text{min}} = \sqrt{gr}}$$

Same as stone on string!

**But:** If car goes slower than this, it loses contact with track and falls.

**At the bottom:**

Energy conservation from bottom to top:

$$\frac{1}{2}mv_L^2 = \frac{1}{2}mv_H^2 + mg(2r)$$

$$v_L^2 = gr + 4gr = 5gr$$

$$\boxed{v_{L,\text{min}} = \sqrt{5gr}}$$

> **★ Key point · Fast X Loop-the-Loop**
>
> In **Fast X**, for a car to successfully complete a vertical loop of radius 10 m:
>
> Minimum speed at top: $v_H = \sqrt{10 \times 10} = 10$ m/s

> Minimum speed at bottom: $v_L = \sqrt{5 \times 10 \times 10} = 10\sqrt{5} \approx 22.4$ m/s
>
> If the car enters slower than 22.4 m/s, it won’t make it over the top!

---

## Comparison: Horizontal vs Vertical Circular Motion

| Aspect | Horizontal Circle | Vertical Circle |
| --- | --- | --- |
| **Speed** | Constant | Varies (fastest at bottom, slowest at top) |
| **Force variation** | Constant centripetal force | Changes with position |
| **Energy** | Only KE (constant) | KE + PE (total constant) |
| **Tension/Normal** | Constant | Maximum at bottom, minimum at top |
| **Critical speed** | None (any speed works) | Minimum speed needed at top |

---

## Memory Tricks & Patterns

### Mnemonic for Centripetal Force

**“Faster Cars Race More”**

- **F**orce = $\frac{mv^2}{r}$

Or: **F = m × v²/r**

### Mnemonic for Banking

**“Tan Takes Victory”**

$$\tan\theta = \frac{v^2}{rg}$$

### Pattern Recognition for Vertical Circles

| Position | Tension/Normal | Formula |
| --- | --- | --- |
| **Bottom** | Maximum | $T = mg + \frac{mv^2}{r}$ |
| **Top** | Minimum | $T = \frac{mv^2}{r} - mg$ |
| **Side** | Intermediate | $T = \frac{mv^2}{r}$ |

### Quick Formulas Table

| Scenario | Formula |
| --- | --- |
| **Level road max speed** | $v_{\text{max}} = \sqrt{\mu rg}$ |
| **Banked road (no friction)** | $v = \sqrt{rg\tan\theta}$ |
| **Vertical circle min speed (top)** | $v_H = \sqrt{gr}$ |
| **Vertical circle min speed (bottom)** | $v_L = \sqrt{5gr}$ |
| **Conical pendulum** | $\cos\theta = \frac{g}{L\omega^2}$ |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Centripetal Force is a Separate Force**
>
> **Wrong:** Centripetal force is a new type of force, like friction or tension.
>
> **Correct:** Centripetal force is the **net force** toward the center. It’s provided by existing forces:
>
> - Tension

> - Friction

> - Normal force

> - Gravity

> - Or combination of these

> **⚠ Trap #2: Centrifugal Force Exists**
>
> **Wrong:** Objects in circular motion experience an outward centrifugal force.
>
> **Correct:** In an **inertial frame**, there’s NO centrifugal force. Objects move in circles because of inward centripetal force.
>
> **Centrifugal force** is a **pseudo force** that appears only in the rotating (non-inertial) frame.
>
> **JEE rule:** Unless problem specifically asks for non-inertial frame, work in inertial frame (no centrifugal force!).

> **⚠ Trap #3: Same Speed Throughout Vertical Circle**
>
> **Wrong:** Object maintains constant speed in vertical circular motion.
>
> **Correct:** Speed varies! Energy is conserved, so:
>
> - Faster at bottom (lower PE, higher KE)

> - Slower at top (higher PE, lower KE)

> **⚠ Trap #4: Friction Always Points Toward Center**
>
> **Wrong:** On a banked road, friction always provides centripetal force.
>
> **Correct:** Friction direction depends on speed:
>
> - At optimum speed: friction = 0

> - Too fast: friction opposes (component away from center)

> - Too slow: friction assists (component toward center)

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Basic Centripetal Force**
>
> A stone of mass 0.5 kg is tied to a string and whirled in a horizontal circle of radius 2 m with speed 4 m/s. Find the tension in the string.
>
> **Solution:**
>
> For horizontal circular motion, tension provides centripetal force:
>
> $$T = \frac{mv^2}{r} = \frac{0.5 \times 4^2}{2} = \frac{0.5 \times 16}{2} = 4 \text{ N}$$
>
> **Answer:** 4 N

> **↗ Connection · Problem 1.2: Maximum Speed on Level Road**
>
> A car moves on a circular road of radius 50 m. If coefficient of friction is 0.4, find maximum safe speed. (g = 10 m/s²)
>
> **Solution:**
>
> $$v_{\text{max}} = \sqrt{\mu rg} = \sqrt{0.4 \times 50 \times 10} = \sqrt{200} = 10\sqrt{2} \approx 14.14 \text{ m/s}$$
>
> **Answer:** 14.14 m/s (or 10√2 m/s)

> **↗ Connection · Problem 1.3: Banking Angle**
>
> A road of radius 100 m is banked for traffic moving at 20 m/s. Find the banking angle. (g = 10 m/s²)
>
> **Solution:**
>
> $$\tan\theta = \frac{v^2}{rg} = \frac{20^2}{100 \times 10} = \frac{400}{1000} = 0.4$$

$$\theta = \tan^{-1}(0.4) \approx 21.8°$$
>
> **Answer:** 21.8° (or tan⁻¹(0.4))

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Conical Pendulum**
>
> A conical pendulum has string length 1 m and makes angle 60° with vertical. Find:

> (a) Speed of the bob

> (b) Period of revolution

> (g = 10 m/s²)
>
> **Solution:**
>
> **(a) Speed:**
>
> $$\cos\theta = \frac{g}{L\omega^2}$$

$$\omega^2 = \frac{g}{L\cos\theta} = \frac{10}{1 \times \cos 60°} = \frac{10}{0.5} = 20$$

$$\omega = \sqrt{20} = 2\sqrt{5} \text{ rad/s}$$
>
> Radius of circle: $r = L\sin\theta = 1 \times \sin 60° = \frac{\sqrt{3}}{2}$ m
>
> $$v = r\omega = \frac{\sqrt{3}}{2} \times 2\sqrt{5} = \sqrt{15} \approx 3.87 \text{ m/s}$$
>
> **(b) Period:**
>
> $$T = \frac{2\pi}{\omega} = \frac{2\pi}{2\sqrt{5}} = \frac{\pi}{\sqrt{5}} \approx 1.405 \text{ s}$$
>
> **Answers:**

> (a) √15 m/s ≈ 3.87 m/s

> (b) π/√5 s ≈ 1.41 s

> **↗ Connection · Problem 2.2: Minimum Speed at Top**
>
> A stone tied to a string of length 0.8 m is whirled in a vertical circle. Find the minimum speed at the highest point for the stone to complete the circle. (g = 10 m/s²)
>
> **Solution:**
>
> At the highest point, for minimum speed, tension = 0.
>
> $$v_{H,\text{min}} = \sqrt{gr} = \sqrt{10 \times 0.8} = \sqrt{8} = 2\sqrt{2} \approx 2.83 \text{ m/s}$$
>
> **Answer:** 2√2 m/s ≈ 2.83 m/s

> **↗ Connection · Problem 2.3: Tension at Bottom**
>
> A 2 kg stone whirls in a vertical circle of radius 1 m. At the lowest point, its speed is 8 m/s. Find the tension in the string at this point. (g = 10 m/s²)
>
> **Solution:**
>
> At the lowest point:
>
> $$T_L = mg + \frac{mv^2}{r} = 2 \times 10 + \frac{2 \times 8^2}{1}$$

$$= 20 + \frac{2 \times 64}{1} = 20 + 128 = 148 \text{ N}$$
>
> **Answer:** 148 N

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Complete Vertical Circle Analysis**
>
> A stone of mass 0.5 kg is attached to a string of length 2 m and whirled in a vertical circle. Find:

> (a) Minimum speed at the bottom to complete the circle

> (b) Tension at the bottom when moving with this minimum speed

> (c) Tension at the top at this speed

> (g = 10 m/s²)
>
> **Solution:**
>
> **(a) Minimum speed at bottom:**
>
> $$v_{L,\text{min}} = \sqrt{5gr} = \sqrt{5 \times 10 \times 2} = \sqrt{100} = 10 \text{ m/s}$$
>
> **(b) Tension at bottom (with $v_L = 10$ m/s):**
>
> $$T_L = mg + \frac{mv_L^2}{r} = 0.5 \times 10 + \frac{0.5 \times 10^2}{2}$$

$$= 5 + \frac{50}{2} = 5 + 25 = 30 \text{ N}$$
>
> **(c) Speed at top (using energy conservation):**
>
> $$\frac{1}{2}mv_L^2 = \frac{1}{2}mv_H^2 + mg(2r)$$

$$v_H^2 = v_L^2 - 4gr = 100 - 4 \times 10 \times 2 = 100 - 80 = 20$$

$$v_H = \sqrt{20} = 2\sqrt{5} \text{ m/s}$$
>
> **Tension at top:**
>
> $$T_H = \frac{mv_H^2}{r} - mg = \frac{0.5 \times 20}{2} - 5 = 5 - 5 = 0 \text{ N}$$
>
> (As expected for minimum speed condition!)
>
> **Answers:**

> (a) 10 m/s

> (b) 30 N

> (c) 0 N

> **↗ Connection · Problem 3.2: Banked Road with Friction**
>
> A circular road of radius 40 m is banked at 15°. Coefficient of friction is 0.2. Find:

> (a) Optimum speed (no friction needed)

> (b) Maximum safe speed

> (g = 10 m/s²)
>
> **Solution:**
>
> **(a) Optimum speed (no friction):**
>
> $$v_{\text{opt}} = \sqrt{rg\tan\theta} = \sqrt{40 \times 10 \times \tan 15°}$$

$$\tan 15° \approx 0.268$$

$$v_{\text{opt}} = \sqrt{400 \times 0.268} = \sqrt{107.2} \approx 10.35 \text{ m/s}$$
>
> **(b) Maximum speed (with friction):**
>
> $$v_{\text{max}} = \sqrt{rg \cdot \frac{\mu + \tan\theta}{1 - \mu\tan\theta}}$$

$$= \sqrt{40 \times 10 \times \frac{0.2 + 0.268}{1 - 0.2 \times 0.268}}$$

$$= \sqrt{400 \times \frac{0.468}{1 - 0.0536}}$$

$$= \sqrt{400 \times \frac{0.468}{0.9464}}$$

$$= \sqrt{400 \times 0.4945} = \sqrt{197.8} \approx 14.06 \text{ m/s}$$
>
> **Answers:**

> (a) 10.35 m/s

> (b) 14.06 m/s

> **↗ Connection · Problem 3.3: Well of Death**
>
> A motorcyclist rides on the vertical wall of a cylindrical well of radius 5 m. If coefficient of friction is 0.5, find the minimum speed required. (g = 10 m/s²)
>
> **Solution:**
>
> For vertical wall at horizontal level:
>
> **Centripetal force (horizontal):**
>
> $$N = \frac{mv^2}{r}$$
>
> **Vertical balance:**
>
> $$f = mg$$
>
> **Using $f = \mu N$:**
>
> $$\mu \cdot \frac{mv^2}{r} = mg$$

$$v^2 = \frac{rg}{\mu} = \frac{5 \times 10}{0.5} = 100$$

$$v = 10 \text{ m/s}$$
>
> **Answer:** 10 m/s

---

## Quick Revision Box

| Scenario | Formula | Key Point |
| --- | --- | --- |
| **Centripetal force** | $F_c = \frac{mv^2}{r}$ | Net force toward center |
| **Level road max speed** | $v = \sqrt{\mu rg}$ | Friction provides $F_c$ |
| **Banking (no friction)** | $v = \sqrt{rg\tan\theta}$ | Normal provides $F_c$ |
| **Vertical circle (top min)** | $v_H = \sqrt{gr}$ | Tension = 0 at limit |
| **Vertical circle (bottom min)** | $v_L = \sqrt{5gr}$ | From energy conservation |
| **Tension at bottom** | $T_L = mg + \frac{mv^2}{r}$ | Maximum tension |
| **Tension at top** | $T_H = \frac{mv^2}{r} - mg$ | Minimum tension |
| **Conical pendulum** | $\cos\theta = \frac{g}{L\omega^2}$ | String angle relation |

---

## When to Use These Concepts

> **★ Key point · Decision Tree**
>
> **For horizontal circular motion:**
>
> 1. Identify what provides centripetal force (friction, tension, normal component)

> 2. Set $F_c = \frac{mv^2}{r}$

> 3. Solve for unknown
>
> **For banked roads:**
>
> 1. Check if friction is mentioned

> 2. **No friction:** Use $\tan\theta = \frac{v^2}{rg}$

> 3. **With friction:** Use max/min speed formulas
>
> **For vertical circular motion:**
>
> 1. Use energy conservation to relate speeds at different points

> 2. At each point, apply $F_c = \frac{mv^2}{r}$ with correct force directions

> 3. For minimum speed: Set normal/tension = 0 at highest point
>
> **Key question:** What provides the centripetal force?
>
> - Level road → Friction

> - Banked road → Normal (or normal + friction)

> - String → Tension

> - Inside sphere → Normal

> - Gravity → Planets, satellites

---

## JEE Exam Strategy

### Weightage

- **JEE Main:** 3-4 questions per year (high yield!)
- **JEE Advanced:** 2-3 problems, often combined with energy (4-5 marks each)

### Common Question Types

1. **Maximum speed on level road** (easy, 2 marks)
2. **Banking angle calculation** (easy-moderate, 2-3 marks)
3. **Vertical circle minimum speed** (moderate, 3 marks)
4. **Tension at different points** (moderate, 3-4 marks)
5. **Conical pendulum** (moderate, 3 marks)
6. **Combined banking + friction** (advanced, 4-5 marks)
7. **Well of death / rotor** (moderate-advanced, 4 marks)

### Time-Saving Tricks

**Trick 1:** Memorize vertical circle minimum speeds:

- Top: $\sqrt{gr}$ (coefficient = 1)
- Bottom: $\sqrt{5gr}$ (coefficient = 5)

**Trick 2:** Level road maximum speed: $v = \sqrt{\mu rg}$ (direct formula!)

**Trick 3:** Banking with no friction: $\tan\theta = \frac{v^2}{rg}$ (super quick!)

**Trick 4:** At any point in circle, always draw FBD first — shows which forces contribute to centripetal force

**Trick 5:** For conical pendulum, remember: $\cos\theta = \frac{g}{L\omega^2}$ (unusual but direct!)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Centripetal force is NOT a new force** — it’s the net force toward center from existing forces

> 2. **Always directed toward center** — perpendicular to velocity, changes direction but not speed (in horizontal circles)

> 3. **$F_c = \frac{mv^2}{r}$** — fundamental formula for all circular motion

> 4. **Horizontal circles:** Speed constant, force constant

> 5. **Vertical circles:** Speed varies (fastest at bottom, slowest at top), need minimum speed at top

> 6. **Banking reduces friction dependence** — optimum speed needs zero friction

> 7. **Minimum speeds for vertical circle:** $\sqrt{gr}$ at top, $\sqrt{5gr}$ at bottom (remember 1 and 5!)

> 8. **No centrifugal force in inertial frames** — pseudo force only in rotating frames
>
> **“Centripetal force doesn’t pull objects outward — it pulls them INWARD to keep them in circular paths!”**

---

## Related Topics

### Within Laws of Motion

- [Newton’s Second Law](../newtons-second-law/index.md) — F = ma applied to circular motion
- [Friction](../friction/index.md) — Provides centripetal force on level roads
- [Newton’s First Law](../newtons-first-law/index.md) — Why objects “want” to go straight (inertia)

### Connected Chapters

- [Circular Motion](../../kinematics/circular-motion/index.md) — Kinematics (description without forces)
- [Work-Energy-Power](../../work-energy-power/index.md) — Energy in vertical circular motion
- [Gravitation](../../gravitation/index.md) — Planetary circular motion
- [Rotational Motion](../../rotational-motion/index.md) — Angular momentum in circular paths

### Math Connections

- [Trigonometry](../../../mathematics/trigonometry/index.md) — Resolving forces on banked roads
- [Vectors](../../kinematics/motion-2d/index.md) — Centripetal acceleration as vector

---

From TestGuru · our mock-test platform

## You've read Circular Motion Dynamics - Centripetal Force.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=laws-of-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Flaws-of-motion%2Fcircular-dynamics%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/laws-of-motion/circular-dynamics/",this.page.identifier="/physics/laws-of-motion/circular-dynamics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="freebodyDiagram" id="anim-freebodyDiagram-1795396423817764736"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-freebodyDiagram-1795396423817764736")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/laws-of-motion/circular-dynamics/](https://jeenotes.in/physics/laws-of-motion/circular-dynamics/) · raw HTML: `offline/physics/laws-of-motion/circular-dynamics/index.html`_
