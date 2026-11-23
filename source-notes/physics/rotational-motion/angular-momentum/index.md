---
title: "Angular Momentum"
source: "https://jeenotes.in/physics/rotational-motion/angular-momentum/"
description: "Master angular momentum, its conservation, and applications in rotational dynamics - critical for JEE Main & Advanced problems."
updated: "2026-10-18"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 8"
html: "../../../../offline/physics/rotational-motion/angular-momentum/index.html"
extracted: "2026-11-23"
---

> Master angular momentum, its conservation, and applications in rotational dynamics - critical for JEE Main & Advanced problems.

## Prerequisites

Before studying this topic, review:

- [Linear Momentum](https://jeenotes.in/physics/laws-of-motion/) - Conservation principles
- [Torque](../torque/index.md) - Relationship with angular momentum
- [Moment of Inertia](../moment-of-inertia/index.md) - Rotational inertia

---

## The Hook: Why Does a Figure Skater Spin Faster When Arms Are Pulled In?

> **★ Key point · Connect: Real Life → Physics**
>
> Watch any figure skating championship - the skater starts spinning with arms outstretched, rotating slowly. Suddenly, they pull their arms in close to their body and - WHOOSH - they become a blur, spinning at incredible speeds!
>
> No external force acts on them. No motor drives the spin. Yet they accelerate dramatically!
>
> Similarly, in space movies like **Interstellar**, when spacecraft need to rotate, astronauts redistribute mass. Divers tuck into balls mid-air to complete multiple somersaults. Cats always land on their feet by twisting their bodies.
>
> **The mystery:** How can you change your rotation speed **without any external torque**? What invisible quantity is being conserved?

The answer: **Angular Momentum** - one of nature’s most fundamental conservation laws!

---

## The Core Concept

### What is Angular Momentum?

**Angular momentum** (symbol: $\vec{L}$) is the rotational analog of linear momentum - it measures the “quantity of rotational motion” of a body.

> **◐ In Simple Terms**
>
> **Linear momentum** ($\vec{p} = m\vec{v}$) = “quantity of straight-line motion”

> **Angular momentum** ($\vec{L} = \vec{r} \times \vec{p}$) = “quantity of rotational motion”
>
> Just as linear momentum depends on mass and velocity, angular momentum depends on moment of inertia and angular velocity!

### Definitions of Angular Momentum

**For a particle:**

$$\boxed{\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}}$$

**Magnitude:**

$$L = mvr\sin\theta$$

where $\theta$ is angle between $\vec{r}$ and $\vec{v}$.

**For a rigid body rotating about a fixed axis:**

$$\boxed{L = I\omega}$$

where:

- $L$ = angular momentum (kg·m²/s or J·s)
- $I$ = moment of inertia (kg·m²)
- $\omega$ = angular velocity (rad/s)

**SI Unit:** kg·m²/s (also written as J·s)

**Direction:** Along the axis of rotation (right-hand rule)

### Interactive Demo: Visualize Angular Momentum

Explore how angular momentum is conserved in rotating systems.

---

## Memory Tricks & Patterns

### Mnemonic for Angular Momentum

**Memory Trick:** “**L**inear → **p** = m**v** | **R**otational → **L** = I**ω**”

| Quantity | Linear | Rotational |
| --- | --- | --- |
| “Mass” | $m$ | $I$ |
| Velocity | $v$ | $\omega$ |
| Momentum | $p = mv$ | $L = I\omega$ |

**Pattern:** Replace $m \to I$, $v \to \omega$, $p \to L$

### The “Spin Faster, Pull Closer” Rule

> **★ Key point · JEE Power Shortcut**
>
> **For conservation of angular momentum (no external torque):**
>
> $$L = I\omega = \text{constant}$$

$$I_1\omega_1 = I_2\omega_2$$
>
> **Key insight:** $I \propto \frac{1}{\omega}$
>
> - **Decrease $I$** (pull mass closer) → **Increase $\omega$** (spin faster)

> - **Increase $I$** (extend mass outward) → **Decrease $\omega$** (spin slower)
>
> **Examples:**
>
> - Figure skater pulls arms in: $I \downarrow$ → $\omega \uparrow$ (spins faster)

> - Diver extends body: $I \uparrow$ → $\omega \downarrow$ (slows rotation)

---

## Relation Between Torque and Angular Momentum

Just as $\vec{F} = \frac{d\vec{p}}{dt}$ for linear motion:

$$\boxed{\vec{\tau} = \frac{d\vec{L}}{dt}}$$

**In words:** Torque is the rate of change of angular momentum.

**Proof:**

For $L = I\omega$:

$$\frac{dL}{dt} = \frac{d(I\omega)}{dt} = I\frac{d\omega}{dt} = I\alpha = \tau$$

(assuming $I$ is constant)

**Key insight:** Just as force changes linear momentum, torque changes angular momentum!

---

## Conservation of Angular Momentum

### The Law

**If the net external torque on a system is zero, the total angular momentum remains constant.**

$$\boxed{\text{If } \vec{\tau}_{ext} = 0, \text{ then } \vec{L} = \text{constant}}$$

**For a system:**

$$L_{initial} = L_{final}$$

$$I_1\omega_1 = I_2\omega_2$$

> **★ Key point · Fundamental Principle**
>
> **Conservation of angular momentum is one of the most powerful laws in physics!**
>
> **It explains:**
>
> - Why planets orbit the sun in ellipses (Kepler’s laws)

> - Why pulsars (collapsed stars) rotate incredibly fast

> - How figure skaters control their spin

> - Why a cat always lands on its feet

> - How helicopters work (need tail rotor to conserve angular momentum)
>
> **Remember:** Even without external torque, internal forces can redistribute mass, changing $I$ and hence $\omega$!

### Conditions for Conservation

1. **No external torque:** $\tau_{ext} = 0$
2. **Isolated system:** No external twisting forces
3. **Internal forces allowed:** Can redistribute mass within system

**Note:** Internal torques (between parts of system) don’t affect total $L$ - they come in action-reaction pairs and cancel!

---

## Important Cases and Applications

### Case 1: Figure Skater / Ice Dancer

**Initial:** Arms extended, moment of inertia $I_1$, angular velocity $\omega_1$

**Final:** Arms pulled in, moment of inertia $I_2$ (smaller), angular velocity $\omega_2$

**Conservation:**

$$I_1\omega_1 = I_2\omega_2$$

$$\omega_2 = \frac{I_1}{I_2}\omega_1$$

Since $I_1 > I_2$, we get $\omega_2 > \omega_1$ (spins faster!)

### Case 2: Person on Rotating Platform

**Setup:** Person stands on frictionless rotating platform holding weights

**When weights pulled in:**

- Total $L$ conserved (no external torque)
- $I$ decreases (mass closer to axis)
- $\omega$ increases to compensate

**Application:** This is how astronauts change orientation in space!

### Case 3: Planet in Elliptical Orbit

**[Kepler’s Second Law](../../gravitation/keplers-laws/index.md):** A planet sweeps equal areas in equal times

**Physics:** Conservation of angular momentum!

$$L = mvr = \text{constant}$$

**At perihelion (closest to sun):** Small $r$ → large $v$ (fast)
**At aphelion (farthest from sun):** Large $r$ → small $v$ (slow)

### Case 4: Collision with Rotating Object

**Example:** Bullet hits and embeds in rotating disc

**Conservation of angular momentum:**

$$L_{initial} = L_{final}$$

$$I_{disc}\omega_i + mvr = (I_{disc} + mr^2)\omega_f$$

where $v$ is tangential component of bullet velocity.

### Case 5: Two Discs Coupling

**Setup:** Disc 1 (rotating) placed on disc 2 (stationary). Friction causes them to rotate together.

**Conservation:**

$$I_1\omega_1 + I_2(0) = (I_1 + I_2)\omega_f$$

$$\omega_f = \frac{I_1\omega_1}{I_1 + I_2}$$

**Note:** Kinetic energy is NOT conserved (friction is not conservative) but angular momentum IS!

---

## Angular Momentum for Different Scenarios

### 1. Particle Moving in Straight Line

For particle of mass $m$, velocity $v$, at perpendicular distance $r$ from axis:

$$L = mvr$$

**Note:** Even straight-line motion has angular momentum about an axis!

### 2. Particle in Circular Motion

For particle in circle of radius $r$ with speed $v$:

$$L = mvr$$

(since $\vec{v}$ is always perpendicular to $\vec{r}$)

### 3. Rigid Body About Fixed Axis

$$L = I\omega$$

This is the most commonly used form!

### 4. System of Particles

$$\vec{L}_{total} = \sum \vec{L}_i = \sum \vec{r}_i \times m_i\vec{v}_i$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing $L = I\omega$ with $L = mvr$**
>
> **Mistake:** Using wrong formula for the scenario
>
> **Truth:**
>
> - $L = I\omega$ for rigid body rotating about axis

> - $L = mvr$ for particle (or point mass) at distance $r$ with perpendicular velocity $v$
>
> **Example:** Particle moving in circle:
>
> - Using $L = mvr$: Correct!

> - Using $L = I\omega$ with $I = mr^2$: Also correct! (gives same answer)

> **⚠ Trap #2: Thinking Energy is Conserved with Angular Momentum**
>
> **Mistake:** Assuming $KE_i = KE_f$ when $L_i = L_f$
>
> **Truth:** Angular momentum conservation does NOT imply energy conservation!
>
> **Example:** Figure skater pulls arms in
>
> - $L$ conserved: $I_1\omega_1 = I_2\omega_2$ ✓

> - $KE$ increases: $KE_2 > KE_1$ (skater does work pulling arms in!)
>
> $$KE_1 = \frac{1}{2}I_1\omega_1^2, \quad KE_2 = \frac{1}{2}I_2\omega_2^2$$
>
> Since $\omega_2 = \frac{I_1\omega_1}{I_2}$:
>
> $$KE_2 = \frac{1}{2}I_2\left(\frac{I_1\omega_1}{I_2}\right)^2 = \frac{I_1^2\omega_1^2}{2I_2} = \frac{I_1}{I_2} \times \frac{I_1\omega_1^2}{2} = \frac{I_1}{I_2}KE_1$$
>
> Since $I_1 > I_2$, we get $KE_2 > KE_1$!

> **⚠ Trap #3: Forgetting External Torque Condition**
>
> **Mistake:** Applying $L_i = L_f$ when external torque acts
>
> **Truth:** Conservation requires $\tau_{ext} = 0$
>
> **Check for external torques:**
>
> - Gravity (if not through axis)

> - Friction (if rotating on rough surface)

> - Applied forces at a distance from axis
>
> **Remember:** Internal forces (within system) don’t affect total $L$!

> **⚠ Trap #4: Wrong Sign for Angular Momentum**
>
> **Mistake:** Adding angular momenta without considering directions
>
> **Truth:** Angular momentum is a vector! Use sign convention.
>
> **Convention:**
>
> - Counterclockwise rotation: $L$ positive (+)

> - Clockwise rotation: $L$ negative (−)
>
> **Example:** Two discs rotating in opposite directions couple together:
>
> $$I_1\omega_1 + I_2(-\omega_2) = (I_1 + I_2)\omega_f$$

---

## Worked Examples

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Particle Angular Momentum**
>
> A particle of mass 2 kg moves with velocity 5 m/s along a straight line at perpendicular distance 3 m from an axis. Find its angular momentum about the axis.
>
> **Solution:**
>
> $$L = mvr = 2 \times 5 \times 3 = \boxed{30 \text{ kg}\cdot\text{m}^2\text{/s}}$$

> **↗ Connection · Problem 2: Rotating Disc**
>
> A disc of mass 3 kg and radius 0.5 m rotates at 10 rad/s. Find its angular momentum.
>
> **Solution:**
>
> $I = \frac{MR^2}{2} = \frac{3 \times (0.5)^2}{2} = 0.375$ kg·m²
>
> $$L = I\omega = 0.375 \times 10 = \boxed{3.75 \text{ kg}\cdot\text{m}^2\text{/s}}$$

> **↗ Connection · Problem 3: Conservation - Basic**
>
> A child of moment of inertia 2 kg·m² spins on a platform at 1 rad/s. They pull in their arms, reducing moment of inertia to 1 kg·m². Find the new angular velocity.
>
> **Solution:**
>
> **Conservation of angular momentum:**
>
> $$I_1\omega_1 = I_2\omega_2$$

$$2 \times 1 = 1 \times \omega_2$$

$$\boxed{\omega_2 = 2 \text{ rad/s}}$$
>
> Angular velocity doubles!

### Level 2: JEE Main

> **↗ Connection · Problem 4: Person on Platform with Weights**
>
> A person stands on a frictionless rotating platform with arms outstretched, rotating at 0.5 rad/s. The moment of inertia (person + platform) is 6 kg·m². They hold 2 kg weights at 1 m from axis. When weights are pulled to 0.3 m, find the new angular velocity.
>
> **Solution:**
>
> **Initial moment of inertia:**
>
> $$I_1 = 6 + 2 \times 2 \times (1)^2 = 6 + 4 = 10 \text{ kg}\cdot\text{m}^2$$
>
> (Each weight contributes $mr^2 = 2 \times 1^2 = 2$ kg·m²)
>
> **Final moment of inertia:**
>
> $$I_2 = 6 + 2 \times 2 \times (0.3)^2 = 6 + 4 \times 0.09 = 6.36 \text{ kg}\cdot\text{m}^2$$
>
> **Conservation:**
>
> $$I_1\omega_1 = I_2\omega_2$$

$$10 \times 0.5 = 6.36 \times \omega_2$$

$$\omega_2 = \frac{5}{6.36} = \boxed{0.786 \text{ rad/s}}$$
>
> **Increase:** $\frac{0.786 - 0.5}{0.5} \times 100\% = 57.2\%$ faster!

> **↗ Connection · Problem 5: Bullet Hitting Rotating Disc**
>
> A disc of mass 5 kg and radius 0.2 m rotates at 20 rad/s. A bullet of mass 0.01 kg moving at 200 m/s tangentially hits the edge and embeds in it. Find the final angular velocity.
>
> **Solution:**
>
> **Initial angular momentum:**
>
> **Disc:** $L_1 = I_{disc}\omega = \frac{MR^2}{2}\omega = \frac{5 \times (0.2)^2}{2} \times 20 = 0.1 \times 20 = 2$ kg·m²/s
>
> **Bullet:** $L_2 = mvr = 0.01 \times 200 \times 0.2 = 0.4$ kg·m²/s
>
> **Total initial:** $L_i = 2 + 0.4 = 2.4$ kg·m²/s
>
> **Final moment of inertia:**
>
> $$I_f = I_{disc} + mr^2 = 0.1 + 0.01 \times (0.2)^2 = 0.1 + 0.0004 = 0.1004 \text{ kg}\cdot\text{m}^2$$
>
> **Conservation:**
>
> $$L_i = L_f$$

$$2.4 = 0.1004 \times \omega_f$$

$$\omega_f = \frac{2.4}{0.1004} = \boxed{23.9 \text{ rad/s}}$$
>
> **Note:** $\omega$ increased slightly (bullet added angular momentum in same direction)!

> **↗ Connection · Problem 6: Two Discs Coupling**
>
> Disc A (moment of inertia 2 kg·m², angular velocity 10 rad/s) is dropped onto disc B (moment of inertia 3 kg·m², stationary). After friction acts, they rotate together. Find:

> a) Final angular velocity

> b) Loss in kinetic energy
>
> **Solution:**
>
> **a) Final angular velocity:**
>
> **Conservation of angular momentum:**
>
> $$L_i = L_f$$

$$I_A\omega_A + I_B \times 0 = (I_A + I_B)\omega_f$$

$$2 \times 10 + 0 = (2 + 3)\omega_f$$

$$\omega_f = \frac{20}{5} = \boxed{4 \text{ rad/s}}$$
>
> **b) Loss in kinetic energy:**
>
> **Initial KE:**
>
> $$KE_i = \frac{1}{2}I_A\omega_A^2 = \frac{1}{2} \times 2 \times 10^2 = 100 \text{ J}$$
>
> **Final KE:**
>
> $$KE_f = \frac{1}{2}(I_A + I_B)\omega_f^2 = \frac{1}{2} \times 5 \times 4^2 = 40 \text{ J}$$
>
> **Loss:**
>
> $$\Delta KE = 100 - 40 = \boxed{60 \text{ J}}$$
>
> **60% of energy lost to heat/friction!** (But angular momentum conserved)

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Rod Pivoting and Catching Mass**
>
> A uniform rod of mass $M = 2$ kg and length $L = 1$ m is pivoted at one end and hangs vertically at rest. A ball of mass $m = 0.5$ kg moving horizontally at $v = 10$ m/s strikes the rod at distance $d = 0.8$ m from pivot and sticks to it. Find the angular velocity just after collision.
>
> **Solution:**
>
> **Initial angular momentum about pivot:**
>
> **Rod:** $L_{rod} = 0$ (at rest)
>
> **Ball:** $L_{ball} = mvd = 0.5 \times 10 \times 0.8 = 4$ kg·m²/s
>
> **Total:** $L_i = 4$ kg·m²/s
>
> **Final moment of inertia about pivot:**
>
> **Rod:** $I_{rod} = \frac{ML^2}{3} = \frac{2 \times 1^2}{3} = \frac{2}{3}$ kg·m²
>
> **Ball:** $I_{ball} = md^2 = 0.5 \times (0.8)^2 = 0.32$ kg·m²
>
> **Total:** $I_f = \frac{2}{3} + 0.32 = 0.667 + 0.32 = 0.987$ kg·m²
>
> **Conservation:**
>
> $$L_i = L_f$$

$$4 = 0.987 \times \omega_f$$

$$\omega_f = \frac{4}{0.987} = \boxed{4.05 \text{ rad/s}}$$

> **↗ Connection · Problem 8: Man Walking on Plank**
>
> A man of mass $m = 60$ kg stands at one end of a plank of mass $M = 40$ kg and length $L = 4$ m floating on frictionless ice. The plank is initially at rest. The man walks to the other end. How far does the plank move?
>
> **Solution:**
>
> **Key concept:** No external horizontal force → COM of system doesn’t move!
>
> **Initial COM position** (taking left end as origin, man at left end):
>
> $$x_{cm,i} = \frac{m \times 0 + M \times 2}{m + M} = \frac{40 \times 2}{100} = 0.8 \text{ m}$$
>
> **Final configuration:**
>
> - Let plank move distance $x$ to left

> - Man is now at distance $(4 - x)$ from original left end

> - Plank center is at distance $(2 - x)$ from original left end
>
> **Final COM position:**
>
> $$x_{cm,f} = \frac{m(4-x) + M(2-x)}{m+M}$$
>
> **COM doesn’t move:**
>
> $$x_{cm,i} = x_{cm,f}$$

$$0.8 = \frac{60(4-x) + 40(2-x)}{100}$$

$$80 = 240 - 60x + 80 - 40x$$

$$80 = 320 - 100x$$

$$100x = 240$$

$$\boxed{x = 2.4 \text{ m}}$$
>
> The plank moves 2.4 m in the opposite direction!
>
> **Check:** Man walks 4 m relative to plank, but only $4 - 2.4 = 1.6$ m relative to ice.

> **↗ Connection · Problem 9: Satellite Orbit Change**
>
> A satellite of mass $m$ is in a circular orbit of radius $r_1$ with speed $v_1$. A short **tangential** burn puts it on an ellipse whose farthest point is at $r_2$. Find its speed at $r_2$.
>
> **Solution:**
>
> During the burn the thrust has a torque $r_1F$ about Earth’s centre, so angular momentum is **not** conserved during the burn. After the burn only gravity acts, which is a central force, so $L$ is conserved on the ellipse.
>
> Speed just after the burn (vis-viva, $GM = v_1^2 r_1$):
>
> $$v_p = v_1\sqrt{\frac{2r_2}{r_1+r_2}}$$
>
> Conservation of $L$ between perigee and apogee:
>
> $$m v_p r_1 = m v_2 r_2 \;\Rightarrow\; \boxed{v_2 = \frac{r_1}{r_2}\,v_1\sqrt{\frac{2r_2}{r_1+r_2}}}$$
>
> **Example:** $r_1 = 7000$ km, $v_1 = 7.5$ km/s, $r_2 = 10000$ km
>
> $$v_p = 7.5\sqrt{\tfrac{20000}{17000}} = 8.14\text{ km/s},\qquad v_2 = 0.7 \times 8.14 = \boxed{5.69 \text{ km/s}}$$
>
> **Note:** $v_p r_1 = v_2 r_2$ is Kepler’s Second Law in action, but only *after* the burn!

---

## Comparison: Linear vs Angular Momentum

| Concept | Linear | Angular |
| --- | --- | --- |
| **Momentum** | $\vec{p} = m\vec{v}$ | $\vec{L} = I\vec{\omega}$ or $\vec{r} \times \vec{p}$ |
| **Newton’s 2nd Law** | $\vec{F} = \frac{d\vec{p}}{dt}$ | $\vec{\tau} = \frac{d\vec{L}}{dt}$ |
| **Conservation** | If $\vec{F}_{ext} = 0$, then $\vec{p}$ = const | If $\vec{\tau}_{ext} = 0$, then $\vec{L}$ = const |
| **Collision** | $\sum p_i = \sum p_f$ | $\sum L_i = \sum L_f$ |
| **Unit** | kg·m/s | kg·m²/s |

---

## Real-World Applications

1. **Figure Skating Spins:** Pull arms in → decrease $I$ → increase $\omega$ (conservation)
2. **Helicopter Design:** Main rotor creates angular momentum → need tail rotor to cancel it (conservation)
3. **Pulsars (Neutron Stars):** Collapsed stars spin incredibly fast (small $I$, large $\omega$ to conserve $L$)
4. **Cat Righting Reflex:** Cats change $I$ of front/back independently to flip while conserving total $L = 0$
5. **Bicycle Stability:** Spinning wheels have angular momentum → resist tilting (gyroscopic effect)
6. **Planetary Orbits:** Planets move faster when closer to sun (Kepler’s 2nd law = conservation of $L$)
7. **Olympic Diving:** Tucked position → small $I$ → fast spin; extended → large $I$ → slow spin

---

## Quick Revision Box

| Concept | Formula | Key Point |
| --- | --- | --- |
| **Angular momentum (particle)** | $\vec{L} = \vec{r} \times \vec{p}$ | “Rotational momentum” |
| **Angular momentum (rigid body)** | $L = I\omega$ | Like $p = mv$ |
| **Torque relation** | $\vec{\tau} = \frac{d\vec{L}}{dt}$ | Like $\vec{F} = \frac{d\vec{p}}{dt}$ |
| **Conservation** | If $\tau_{ext} = 0$: $L$ = const | $I_1\omega_1 = I_2\omega_2$ |
| **Direction** | Right-hand rule | Along rotation axis |
| **Unit** | kg·m²/s or J·s | - |

**Memory tricks:**

- **“Spin faster → Pull closer”** (decrease $I$ → increase $\omega$)
- **“No external twist → $L$ conserved”**
- **Angular momentum is rotational momentum** (just like torque is rotational force)

---

## Decision Tree: Solving Angular Momentum Problems

> **★ Key point · Step-by-Step Strategy**
>
> **Step 1:** Identify if angular momentum is conserved
>
> - Check: Is $\tau_{ext} = 0$?

> - Yes → Use $L_i = L_f$

> - No → Use $\tau = \frac{dL}{dt}$
>
> **Step 2:** Calculate initial angular momentum
>
> - Rigid body: $L = I\omega$

> - Particle: $L = mvr$ (perpendicular distance)

> - System: $L_{total} = \sum L_i$
>
> **Step 3:** Identify changes
>
> - Does $I$ change? (mass redistribution)

> - Does $\omega$ change?

> - Are objects coupling/separating?
>
> **Step 4:** Apply conservation (if applicable)
>
> $$I_1\omega_1 = I_2\omega_2$$
>
> **Step 5:** Solve for unknown ($\omega_2$, $I_2$, etc.)
>
> **Pro tip:** Check if energy is conserved separately - usually it’s NOT when $L$ is conserved (except elastic collisions)!

---

## Practice Problems

### Foundation Level

1. A disc of radius 0.4 m and mass 2 kg rotates at 15 rad/s. Find its angular momentum.
2. A particle of mass 0.5 kg moves at 8 m/s at perpendicular distance 2 m from an axis. Find $L$ about the axis.
3. A rotating platform has $I = 5$ kg·m² and $\omega = 2$ rad/s. When a person sits on it, $I$ becomes 8 kg·m². Find new $\omega$.

### JEE Main Level

4. A solid sphere of mass 3 kg and radius 0.1 m rotates at 50 rad/s. A thin spherical shell of same mass and radius (initially at rest) is dropped on it. Find final angular velocity when they rotate together.
5. A man stands at the center of a rotating platform (total $I = 4$ kg·m², $\omega = 3$ rad/s). He walks to edge 1 m away. If man’s mass is 60 kg, find new $\omega$.
6. A bullet of mass 20 g moving at 500 m/s hits a disc (mass 5 kg, radius 0.5 m, initially at rest) tangentially and embeds. Find:
   a) Final angular velocity
   b) Fraction of KE lost

### JEE Advanced Level

7. A uniform rod of mass $M$ and length $L$ is hinged at one end. A particle of mass $m$ moving horizontally at speed $v$ strikes the free end and sticks. Find angular velocity just after collision.
8. Two discs A (mass $M$, radius $R$) and B (mass $2M$, radius $R/2$) rotate in opposite directions at $\omega_0$ and $2\omega_0$ respectively. They are brought into contact (coaxially). Find final angular velocities.
9. A satellite in circular orbit at height $h$ above Earth (radius $R$) fires thrusters to enter elliptical orbit with apogee at $2h$. Find the ratio of speeds at height $h$ before and after.

---

## Connection to Other Topics

**Prerequisites you should know:**

- [Linear Momentum](https://jeenotes.in/physics/laws-of-motion/) - $L$ is rotational analog of $p$
- [Torque](../torque/index.md) - $\tau = dL/dt$ relationship
- [Moment of Inertia](../moment-of-inertia/index.md) - Needed for $L = I\omega$

**What’s next:**

- [Rolling Motion](../rolling-motion/index.md) - Uses both linear and angular momentum
- [Gravitation](https://jeenotes.in/physics/gravitation/) - Planetary motion and Kepler’s laws
- [Rotational Dynamics](../../index.md) - Complete rotational motion analysis

**Cross-chapter links:**

- [Conservation Laws](../../work-energy-power/conservation-energy/index.md) - $L$ conservation is fundamental
- [Collisions](../../work-energy-power/collisions/index.md) - Angular momentum in rotational collisions
- [Circular Motion](../../kinematics/circular-motion/index.md) - $L = mvr$ for circular paths
- [Satellites](../../gravitation/satellites/index.md) - Orbital angular momentum

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Angular momentum is the “rotational analog of linear momentum”** - just as $p = mv$ measures linear motion, $L = I\omega$ measures rotational motion

> 2. **Two forms of angular momentum:**
>
>    - Particle: $L = mvr\sin\theta$ or $\vec{L} = \vec{r} \times \vec{p}$

>    - Rigid body: $L = I\omega$ (most common in JEE)

> 3. **Conservation is POWERFUL:** If $\tau_{ext} = 0$, then $L_i = L_f$
>
>    - Explains skater spins, planetary motion, gyroscopes, helicopter tail rotors

>    - $I \downarrow$ → $\omega \uparrow$ (inverse relationship when $L$ conserved)

> 4. **Torque-angular momentum relation:** $\tau = \frac{dL}{dt}$ (like $F = \frac{dp}{dt}$)

> 5. **Conservation ≠ Energy conservation:**
>
>    - $L$ can be conserved while $KE$ changes (figure skater does work!)

>    - Always check separately for energy conservation

> 6. **JEE loves:**
>
>    - Figure skater / person on platform problems

>    - Disc coupling problems

>    - Bullet hitting rotating disc

>    - Collision problems with rotation

> 7. **Direction matters:** Use right-hand rule, watch for clockwise vs counterclockwise
>
> **“Linear momentum is to straight-line motion what angular momentum is to spinning motion - and both are conserved in their respective domains!”**
>
> This is a high-yield topic - 2-4 questions (8-16 marks) in JEE directly test angular momentum conservation. Master the skater/platform setup, disc coupling, and collision problems - they repeat every year!

---

From TestGuru · our mock-test platform

## You've read Angular Momentum.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=rotational-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Frotational-motion%2Fangular-momentum%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/rotational-motion/angular-momentum/",this.page.identifier="/physics/rotational-motion/angular-momentum/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="rotationalMotion" id="anim-rotationalMotion-1795396424194738867"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-rotationalMotion-1795396424194738867")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/rotational-motion/angular-momentum/](https://jeenotes.in/physics/rotational-motion/angular-momentum/) · raw HTML: `offline/physics/rotational-motion/angular-momentum/index.html`_
