---
title: "Impulse and Conservation of Momentum"
source: "https://jeenotes.in/physics/laws-of-motion/impulse-momentum/"
description: "Master impulse-momentum theorem, collisions, and conservation laws for JEE Main & Advanced Physics"
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 8"
html: "../../../../offline/physics/laws-of-motion/impulse-momentum/index.html"
extracted: "2026-11-23"
---

> Master impulse-momentum theorem, collisions, and conservation laws for JEE Main & Advanced Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Second Law](../newtons-second-law/index.md) - Force, momentum, and F = dp/dt
- [Newton’s Third Law](../newtons-third-law/index.md) - Action-reaction pairs
- [Vectors](../../kinematics/motion-2d/index.md) - Vector addition and components

---

## The Hook: Why Do Cricket Players Pull Their Hands Back While Catching?

> **★ Key point · Connect: Jawan Cricket Scene**
>
> Imagine catching a cricket ball hit hard by a batsman (like the intense scenes in Indian cricket matches). If you keep your hands rigid, it hurts! But if you pull your hands back while catching, it feels much softer. Why?
>
> Both cases bring the ball to rest (same change in momentum), but pulling back increases the time → reduces the force on your hands!
>
> This is the **Impulse-Momentum Theorem** in action.

**The Big Questions:**

- What’s the connection between force and momentum change?
- Why does increasing time reduce impact force?
- How is momentum conserved in collisions?

---

## The Core Concept: Impulse

### Definition of Impulse

**Impulse** is the product of force and the time interval for which it acts.

$$\boxed{\vec{J} = \int_{t_1}^{t_2} \vec{F} \, dt}$$

For **constant force**:

$$\boxed{\vec{J} = \vec{F} \cdot \Delta t}$$

**Units:** N·s or kg·m/s (same as momentum!)

**Physical meaning:** Impulse measures the “total effect” of a force acting over time.

### Impulse-Momentum Theorem

$$\boxed{\vec{J} = \Delta \vec{p} = \vec{p}_f - \vec{p}_i}$$

**In words:** Impulse equals the change in momentum.

**Derivation:**
From Newton’s second law:

$$\vec{F} = \frac{d\vec{p}}{dt}$$

$$\vec{F} \, dt = d\vec{p}$$

Integrating:

$$\int \vec{F} \, dt = \int d\vec{p}$$

$$\boxed{\vec{J} = \Delta \vec{p}}$$

---

## Understanding Impulse Graphically

### Force-Time Graph

**Impulse = Area under F-t curve**

For constant force:

- Graph is a rectangle
- Area = $F \times \Delta t = J$

For variable force:

- Area under curve = $\int F \, dt = J$

> **◐ In simple terms · Average Force**
>
> For variable force, we can define **average force**:
>
> $$\vec{F}_{\text{avg}} = \frac{\vec{J}}{\Delta t} = \frac{\Delta \vec{p}}{\Delta t}$$
>
> This is the constant force that would produce the same impulse in the same time.

### Interactive Demo: Visualize Force and Momentum

Explore how impulse relates to momentum change.

---

## Applications of Impulse

### 1. Catching a Ball (Cricket/Baseball)

**Scenario:** Ball of mass $m$ moving at velocity $v$ is brought to rest.

**Change in momentum:** $\Delta p = 0 - mv = -mv$

**Impulse needed:** $J = mv$

**Using $J = F \cdot \Delta t$:**

$$F = \frac{mv}{\Delta t}$$

**Key insight:**

- **Rigid catch** (small $\Delta t$) → Large $F$ → Hurts!
- **Soft catch** (large $\Delta t$) → Small $F$ → Doesn’t hurt

> **★ Key point · Pathaan Stunt Landing**
>
> In **Pathaan**, when Shah Rukh Khan lands from a jump onto a car, the car roof crumples. This increases collision time $\Delta t$, reducing impact force $F = \frac{\Delta p}{\Delta t}$.
>
> Same principle used in:
>
> - Airbags (increase collision time)

> - Crash barriers (crumple zones)

> - Bending knees when landing

### 2. Hammer and Nail

**Scenario:** Hammer strikes nail, drives it into wood.

**Large force for short time** creates impulse that changes nail’s momentum from 0 to some value.

### 3. Follow-Through in Sports

**Golf, cricket, tennis:** Players follow through after hitting the ball.

**Why?** Follow-through increases contact time $\Delta t$, allowing same impulse with reduced peak force → better control and reduced injury risk.

---

## Conservation of Momentum

### Law of Conservation of Momentum

$$\boxed{\text{If } \vec{F}_{\text{ext}} = 0, \text{ then } \vec{p}_{\text{total}} = \text{constant}}$$

**In words:** If no external force acts on a system, the total momentum of the system remains constant.

### Derivation from Newton’s Laws

Consider two objects A and B interacting (no external forces).

By Newton’s Third Law:

$$\vec{F}_{AB} = -\vec{F}_{BA}$$

For object A:

$$\vec{F}_{BA} = \frac{d\vec{p}_A}{dt}$$

For object B:

$$\vec{F}_{AB} = \frac{d\vec{p}_B}{dt}$$

Adding:

$$\frac{d\vec{p}_A}{dt} + \frac{d\vec{p}_B}{dt} = \vec{F}_{BA} + \vec{F}_{AB} = 0$$

$$\frac{d(\vec{p}_A + \vec{p}_B)}{dt} = 0$$

$$\boxed{\vec{p}_A + \vec{p}_B = \text{constant}}$$

> **★ Key point · Key Insight**
>
> **Conservation of momentum is a consequence of Newton’s Third Law!**
>
> Internal forces (action-reaction pairs) don’t change total momentum because they cancel out.

---

## Collisions

### Types of Collisions

#### 1. Elastic Collision

**Properties:**

- **Momentum is conserved**
- **Kinetic energy is conserved**
- Objects bounce off each other
- Coefficient of restitution $e = 1$

**Examples:** Collision between hard steel balls, atomic particles

#### 2. Inelastic Collision

**Properties:**

- **Momentum is conserved**
- **Kinetic energy is NOT conserved** (some lost as heat, sound, deformation)
- Objects may stick together or bounce with reduced speed
- Coefficient of restitution $0 < e < 1$

**Examples:** Car crashes, ball hitting ground and bouncing

#### 3. Perfectly Inelastic Collision

**Properties:**

- **Momentum is conserved**
- **Maximum kinetic energy loss**
- Objects stick together after collision
- Coefficient of restitution $e = 0$

**Examples:** Bullet embedding in wood, clay balls colliding

---

## Head-On Elastic Collision

### Two Objects with Different Masses

**Before collision:**

- Object 1: mass $m_1$, velocity $u_1$
- Object 2: mass $m_2$, velocity $u_2$

**After collision:**

- Object 1: velocity $v_1$
- Object 2: velocity $v_2$

**Conservation of momentum:**

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \quad \text{...(1)}$$

**Conservation of kinetic energy (elastic):**

$$\frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2 \quad \text{...(2)}$$

**Solving these equations:**

$$\boxed{v_1 = \frac{(m_1 - m_2)u_1 + 2m_2 u_2}{m_1 + m_2}}$$

$$\boxed{v_2 = \frac{(m_2 - m_1)u_2 + 2m_1 u_1}{m_1 + m_2}}$$

### Special Cases

**Case 1: Equal masses ($m_1 = m_2 = m$)**

$$v_1 = u_2$$

$$v_2 = u_1$$

**Result:** Velocities are **exchanged**!

**Case 2: Second object at rest ($u_2 = 0$)**

$$v_1 = \frac{(m_1 - m_2)u_1}{m_1 + m_2}$$

$$v_2 = \frac{2m_1 u_1}{m_1 + m_2}$$

**Sub-case 2a:** $m_1 = m_2$ (equal masses, one at rest)

$$v_1 = 0, \quad v_2 = u_1$$

First object stops, second moves with first’s initial velocity!

**Sub-case 2b:** $m_1 \ll m_2$ (light object hits heavy)

$$v_1 \approx -u_1, \quad v_2 \approx 0$$

Light object bounces back, heavy barely moves. (Ball hitting wall)

**Sub-case 2c:** $m_1 \gg m_2$ (heavy object hits light)

$$v_1 \approx u_1, \quad v_2 \approx 2u_1$$

Heavy object continues almost unchanged, light object shoots forward at twice the speed!

> **★ Key point · Memory Trick for Special Cases**
>
> **“Equal masses EXCHANGE velocities”**
>
> $$m_1 = m_2 \implies v_1 = u_2, \, v_2 = u_1$$
>
> **“Light bounces BACK, heavy stays PUT”**
>
> $$m_1 \ll m_2 \implies v_1 \approx -u_1, \, v_2 \approx 0$$

---

## Head-On Perfectly Inelastic Collision

**Objects stick together after collision.**

**Conservation of momentum:**

$$m_1 u_1 + m_2 u_2 = (m_1 + m_2) v$$

$$\boxed{v = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}}$$

**Loss in kinetic energy:**

$$\Delta KE = KE_i - KE_f$$

$$\Delta KE = \frac{1}{2}m_1 u_1^2 + \frac{1}{2}m_2 u_2^2 - \frac{1}{2}(m_1+m_2)v^2$$

After substituting and simplifying:

$$\boxed{\Delta KE = \frac{1}{2}\frac{m_1 m_2}{m_1 + m_2}(u_1 - u_2)^2}$$

This is the **reduced mass formula** for energy loss!

> **◐ In simple terms · Energy Loss is Maximum**
>
> In perfectly inelastic collision, kinetic energy loss is **maximum** (for given initial conditions).
>
> Energy is converted to heat, sound, deformation, etc.

---

## Coefficient of Restitution (e)

### Definition

The **coefficient of restitution** measures how bouncy a collision is.

$$\boxed{e = \frac{\text{Relative velocity of separation}}{\text{Relative velocity of approach}}}$$

$$e = \frac{v_2 - v_1}{u_1 - u_2}$$

**Range:** $0 \leq e \leq 1$

**Types:**

- $e = 1$: Perfectly elastic
- $0 < e < 1$: Inelastic
- $e = 0$: Perfectly inelastic

### Using e to Find Final Velocities

**For collision with e given:**

**Momentum conservation:**

$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

**Restitution equation:**

$$v_2 - v_1 = e(u_1 - u_2)$$

Solve these two equations simultaneously to find $v_1$ and $v_2$.

---

## Collision with Wall/Ground

**Object hits a fixed wall/ground elastically.**

Since wall is infinitely massive ($m_2 \to \infty$):

- Wall doesn’t move ($v_2 = 0$)
- Object bounces back

**For elastic collision ($e = 1$):**

$$v = -u$$

Object rebounds with same speed, opposite direction.

**For inelastic collision (coefficient $e$):**

$$v = -eu$$

Object rebounds with reduced speed.

**Example:** Ball dropped from height $h$ on ground with restitution coefficient $e$.

After first bounce, reaches height:

$$h_1 = e^2 h$$

After second bounce:

$$h_2 = e^4 h$$

After $n$ bounces:

$$h_n = e^{2n} h$$

> **★ Key point · Jawan Action - Bouncing Objects**
>
> In action movies like **Jawan**, when objects (or people!) fall and bounce, the bounce height is always less than the drop height (unless it’s super slow-mo CGI!).
>
> This is because $e < 1$ for real collisions → energy is lost → can’t bounce back to original height.

---

## Interactive Animation

Explore different collision scenarios:

Adjust masses, velocities, and coefficient of restitution to see how momentum and energy change!

---

## Multi-Dimensional Collisions

### Oblique Collisions

When collision is not head-on, we must consider **vector momentum**.

**Key principle:** Momentum is conserved in **both** x and y directions separately.

$$m_1 u_{1x} + m_2 u_{2x} = m_1 v_{1x} + m_2 v_{2x}$$

$$m_1 u_{1y} + m_2 u_{2y} = m_1 v_{1y} + m_2 v_{2y}$$

For elastic oblique collision, additional equation from energy conservation.

---

## Center of Mass and Momentum

### Center of Mass Velocity

$$\vec{v}_{\text{CM}} = \frac{m_1 \vec{v}_1 + m_2 \vec{v}_2}{m_1 + m_2}$$

**In terms of total momentum:**

$$\vec{p}_{\text{total}} = (m_1 + m_2) \vec{v}_{\text{CM}}$$

**Key insight:** If no external force, $\vec{v}_{\text{CM}}$ remains constant!

The center of mass moves with constant velocity even if objects are colliding, exploding, or interacting internally.

---

## Explosions and Recoil

### Explosion

**Initially:** Single object at rest (or moving)
**Finally:** Breaks into fragments

**Momentum conservation:**

$$\vec{p}_{\text{initial}} = \sum \vec{p}_{\text{fragments}}$$

**For object initially at rest:**

$$\sum m_i \vec{v}_i = 0$$

> **★ Key point · Application: Bomb Explosion**
>
> When a bomb explodes, fragments fly in all directions. But the **center of mass** continues on the original path (if no external force like gravity)!

### Recoil (Revisited)

**Gun-bullet system:**

Initially at rest: $p_{\text{total}} = 0$

After firing:

$$m_{\text{bullet}} v_{\text{bullet}} + m_{\text{gun}} v_{\text{gun}} = 0$$

$$v_{\text{gun}} = -\frac{m_{\text{bullet}}}{m_{\text{gun}}} v_{\text{bullet}}$$

---

## Memory Tricks & Patterns

### Mnemonic for Impulse

**“Just Forget Delta-P”** → $J = F \Delta t = \Delta p$

### Mnemonic for Collision Types

**“E-PIE”**

- **E**lastic: Both momentum and Energy conserved
- **P**erfectly **I**nelastic: Stick together, maximum Energy loss
- (General) **I**n**e**lastic: Momentum conserved, Energy lost

### Pattern Recognition

| Collision Type | $e$ | Momentum | KE | After collision |
| --- | --- | --- | --- | --- |
| Elastic | 1 | Conserved | Conserved | Bounce off |
| Inelastic | 0 < e < 1 | Conserved | Lost | Bounce with less speed |
| Perfectly Inelastic | 0 | Conserved | Max loss | Stick together |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Assuming KE is Always Conserved**
>
> **Wrong:** In all collisions, both momentum and kinetic energy are conserved.
>
> **Correct:** Momentum is ALWAYS conserved (no external force). Kinetic energy is conserved only in elastic collisions.
>
> **JEE trap:** Problem asks about collision but doesn’t specify elastic → Don’t assume KE conservation!

> **⚠ Trap #2: Scalar vs Vector**
>
> **Wrong:** Treating momentum as scalar in 2D collisions.
>
> **Correct:** Momentum is a VECTOR. In 2D/3D collisions, apply conservation separately to each component.
>
> $$p_x \text{ conserved}, \quad p_y \text{ conserved}, \quad p_z \text{ conserved}$$

> **⚠ Trap #3: Sign Errors in 1D Collisions**
>
> **Common mistake:** Not choosing a consistent positive direction.
>
> **Correct approach:**
>
> 1. Choose positive direction (say, right)

> 2. Velocities to the right: positive

> 3. Velocities to the left: negative

> 4. Apply momentum conservation with correct signs

> **⚠ Trap #4: External Forces Present**
>
> **Wrong:** Using momentum conservation when external forces act.
>
> **Example:** Two blocks colliding on a rough surface (friction acts).
>
> **Correct:** Momentum is conserved only if NO external force (or external forces cancel). With friction, momentum is NOT conserved!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Basic Impulse**
>
> A force of 50 N acts on a body for 0.2 s. Calculate the impulse.
>
> **Solution:**
>
> $$J = F \cdot \Delta t = 50 \times 0.2 = 10 \text{ N}\cdot\text{s}$$
>
> **Answer:** 10 N·s

> **↗ Connection · Problem 1.2: Catching Ball**
>
> A cricket ball of mass 150 g moving at 30 m/s is caught by a player in 0.05 s. Find the average force exerted by the player.
>
> **Solution:**
>
> **Change in momentum:**
>
> $$\Delta p = m(v - u) = 0.15(0 - 30) = -4.5 \text{ kg}\cdot\text{m/s}$$
>
> (Negative because ball is brought to rest)
>
> **Average force:**
>
> $$F = \frac{\Delta p}{\Delta t} = \frac{-4.5}{0.05} = -90 \text{ N}$$
>
> Magnitude: 90 N (opposite to ball’s motion)
>
> **Answer:** 90 N

> **↗ Connection · Problem 1.3: Perfectly Inelastic Collision**
>
> A 2 kg object moving at 5 m/s collides with a 3 kg object at rest. They stick together. Find their common velocity.
>
> **Solution:**
>
> **Momentum conservation:**
>
> $$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$$

$$2 \times 5 + 3 \times 0 = (2 + 3)v$$

$$10 = 5v$$

$$v = 2 \text{ m/s}$$
>
> **Answer:** 2 m/s

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Elastic Collision Equal Masses**
>
> A ball of mass 0.5 kg moving at 10 m/s collides elastically with another identical ball at rest. Find the velocities after collision.
>
> **Solution:**
>
> **For elastic collision with equal masses, velocities exchange:**
>
> $$v_1 = u_2 = 0 \text{ m/s}$$

$$v_2 = u_1 = 10 \text{ m/s}$$
>
> **Physical interpretation:** First ball stops, second ball moves with first’s initial velocity.
>
> **Answers:**
>
> - First ball: 0 m/s

> - Second ball: 10 m/s

> **↗ Connection · Problem 2.2: Recoil Velocity**
>
> A 5 kg gun fires a 20 g bullet at 300 m/s. Find the recoil velocity of the gun.
>
> **Solution:**
>
> **Momentum conservation (initially at rest):**
>
> $$0 = m_b v_b + m_g v_g$$

$$v_g = -\frac{m_b v_b}{m_g} = -\frac{0.02 \times 300}{5} = -1.2 \text{ m/s}$$
>
> Negative sign: opposite to bullet’s direction.
>
> **Answer:** 1.2 m/s (backward)

> **↗ Connection · Problem 2.3: Energy Loss in Inelastic Collision**
>
> A 4 kg object moving at 6 m/s collides head-on with a 2 kg object moving at 3 m/s in opposite direction. They stick together. Find:

> (a) Final velocity

> (b) Loss in kinetic energy
>
> **Solution:**
>
> **Taking 4 kg’s direction as positive:**
>
> $$u_1 = 6 \text{ m/s}, \quad u_2 = -3 \text{ m/s}$$
>
> **(a) Momentum conservation:**
>
> $$4 \times 6 + 2 \times (-3) = (4 + 2)v$$

$$24 - 6 = 6v$$

$$v = 3 \text{ m/s}$$
>
> **(b) Energy loss:**
>
> $$KE_i = \frac{1}{2} \times 4 \times 6^2 + \frac{1}{2} \times 2 \times 3^2 = 72 + 9 = 81 \text{ J}$$

$$KE_f = \frac{1}{2} \times 6 \times 3^2 = 27 \text{ J}$$

$$\Delta KE = 81 - 27 = 54 \text{ J}$$
>
> **Answers:**

> (a) 3 m/s

> (b) 54 J

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Collision with Coefficient of Restitution**
>
> A ball of mass 1 kg moving at 5 m/s collides with another ball of mass 2 kg at rest. If coefficient of restitution is 0.5, find the velocities after collision.
>
> **Solution:**
>
> **Given:** $m_1 = 1$ kg, $u_1 = 5$ m/s, $m_2 = 2$ kg, $u_2 = 0$, $e = 0.5$
>
> **Momentum conservation:**
>
> $$1 \times 5 + 2 \times 0 = 1 \times v_1 + 2 \times v_2$$

$$v_1 + 2v_2 = 5 \quad \text{...(1)}$$
>
> **Restitution equation:**
>
> $$v_2 - v_1 = e(u_1 - u_2) = 0.5 \times 5 = 2.5$$

$$v_2 - v_1 = 2.5 \quad \text{...(2)}$$
>
> **From (2):** $v_2 = v_1 + 2.5$
>
> **Substituting in (1):**
>
> $$v_1 + 2(v_1 + 2.5) = 5$$

$$v_1 + 2v_1 + 5 = 5$$

$$3v_1 = 0$$

$$v_1 = 0 \text{ m/s}$$

$$v_2 = 0 + 2.5 = 2.5 \text{ m/s}$$
>
> **Answers:**
>
> - First ball: 0 m/s (stops)

> - Second ball: 2.5 m/s

> **↗ Connection · Problem 3.2: Ball Bouncing on Ground**
>
> A ball is dropped from height $h = 10$ m onto the ground. Coefficient of restitution is $e = 0.6$. Find:

> (a) Height after first bounce

> (b) Total distance traveled before coming to rest

> (g = 10 m/s²)
>
> **Solution:**
>
> **(a) Velocity just before hitting ground:**
>
> $$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 10} = \sqrt{200} = 10\sqrt{2} \text{ m/s}$$
>
> **Velocity just after bounce:**
>
> $$v' = ev = 0.6 \times 10\sqrt{2} = 6\sqrt{2} \text{ m/s}$$
>
> **Height reached:**
>
> $$h_1 = \frac{v'^2}{2g} = \frac{(6\sqrt{2})^2}{20} = \frac{72}{20} = 3.6 \text{ m}$$
>
> **Alternative:** $h_1 = e^2 h = 0.36 \times 10 = 3.6$ m
>
> **(b) Total distance:**
>
> Ball travels down from $h$, bounces to $h_1 = e^2 h$, down again, bounces to $h_2 = e^4 h$, and so on.
>
> $$\text{Total} = h + 2h_1 + 2h_2 + 2h_3 + \ldots$$

$$= h + 2(h_1 + h_2 + h_3 + \ldots)$$

$$= h + 2(e^2h + e^4h + e^6h + \ldots)$$

$$= h + 2e^2 h(1 + e^2 + e^4 + \ldots)$$
>
> **Geometric series:** $\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$ for $|r| < 1$
>
> $$= h + 2e^2 h \cdot \frac{1}{1 - e^2}$$

$$= h \left(1 + \frac{2e^2}{1-e^2}\right)$$

$$= h \cdot \frac{1 - e^2 + 2e^2}{1 - e^2}$$

$$= h \cdot \frac{1 + e^2}{1 - e^2}$$

$$= 10 \cdot \frac{1 + 0.36}{1 - 0.36} = 10 \cdot \frac{1.36}{0.64} = 10 \times 2.125 = 21.25 \text{ m}$$
>
> **Answers:**

> (a) 3.6 m

> (b) 21.25 m

> **↗ Connection · Problem 3.3: Explosion Problem**
>
> A bomb of mass 3 kg initially at rest explodes into three fragments of masses 1 kg, 1 kg, and 1 kg. Two fragments fly off at right angles to each other with speeds 30 m/s and 40 m/s. Find the velocity of the third fragment.
>
> **Solution:**
>
> **Let the two known fragments be along x and y axes.**
>
> Fragment 1: $m_1 = 1$ kg, $\vec{v}_1 = 30\hat{i}$ m/s

> Fragment 2: $m_2 = 1$ kg, $\vec{v}_2 = 40\hat{j}$ m/s

> Fragment 3: $m_3 = 1$ kg, $\vec{v}_3 = ?$
>
> **Momentum conservation (initially at rest):**
>
> $$\vec{0} = m_1 \vec{v}_1 + m_2 \vec{v}_2 + m_3 \vec{v}_3$$

$$0 = 1 \times 30\hat{i} + 1 \times 40\hat{j} + 1 \times \vec{v}_3$$

$$\vec{v}_3 = -30\hat{i} - 40\hat{j}$$
>
> **Magnitude:**
>
> $$v_3 = \sqrt{30^2 + 40^2} = \sqrt{900 + 1600} = \sqrt{2500} = 50 \text{ m/s}$$
>
> **Direction:**
>
> $$\tan\theta = \frac{40}{30} = \frac{4}{3}$$

$$\theta = \tan^{-1}(4/3) \approx 53.1°$$
>
> Direction is opposite to the first quadrant, so third quadrant (or 180° + 53.1° = 233.1° from +x axis).
>
> **Answer:** 50 m/s at 233.1° from positive x-axis (or $-30\hat{i} - 40\hat{j}$ m/s)

---

## Quick Revision Box

| Concept | Formula | Key Point |
| --- | --- | --- |
| **Impulse** | $J = F \cdot \Delta t = \Delta p$ | Change in momentum |
| **Momentum conservation** | $\vec{p}_{\text{total}} = \text{const}$ | No external force |
| **Elastic collision** | Momentum + KE conserved | $e = 1$ |
| **Inelastic** | Momentum conserved, KE lost | $0 < e < 1$ |
| **Perfectly inelastic** | Stick together | $e = 0$, max KE loss |
| **Restitution** | $e = \frac{v_2-v_1}{u_1-u_2}$ | Bounciness measure |
| **Equal mass elastic** | $v_1 = u_2$, $v_2 = u_1$ | Velocities exchange |
| **Bounce height** | $h_n = e^{2n}h$ | After $n$ bounces |

---

## When to Use These Concepts

> **★ Key point · Decision Tree**
>
> **Use Impulse ($J = F\Delta t$) when:**
>
> 1. Force varies with time (F-t graph given)

> 2. Finding average force during collision

> 3. Time of contact is important

> 4. Relating force to momentum change
>
> **Use Momentum Conservation when:**
>
> 1. No external force (or external forces cancel)

> 2. Collision/explosion problems

> 3. Multi-body systems

> 4. Recoil problems
>
> **Check collision type:**
>
> - **Elastic:** Use momentum + energy conservation

> - **Coefficient given:** Use momentum + restitution equation

> - **Perfectly inelastic:** Use momentum, objects stick together
>
> **Don’t use momentum conservation if:**
>
> - External forces present (friction, applied force)

> - Single object changing velocity due to external force

---

## JEE Exam Strategy

### Weightage

- **JEE Main:** 4-6 questions per year (very high yield!)
- **JEE Advanced:** 3-4 problems, often complex scenarios (4-6 marks each)

### Common Question Types

1. **Elastic collision equal masses** (easy, 2 marks)
2. **Recoil problems** (easy-moderate, 2-3 marks)
3. **Coefficient of restitution** (moderate, 3-4 marks)
4. **Ball bouncing** (moderate, 3 marks)
5. **Explosion into fragments** (moderate-advanced, 4 marks)
6. **Oblique collision** (advanced, 5+ marks)
7. **Variable mass (rocket)** (advanced, 4-5 marks)

### Time-Saving Tricks

**Trick 1:** Equal masses elastic collision, one at rest → velocities exchange (no calculation needed!)

**Trick 2:** Perfectly inelastic → use $v = \frac{m_1u_1 + m_2u_2}{m_1+m_2}$ directly

**Trick 3:** Ball bouncing with restitution $e$ → height after $n$ bounces: $h_n = e^{2n}h_0$

**Trick 4:** For 2D collisions, always resolve into components and apply conservation separately

**Trick 5:** If problem mentions “smooth surface” or “in space” → no external force → use momentum conservation!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Impulse = Change in momentum** — $J = F\Delta t = \Delta p$ (connects force and momentum)

> 2. **Momentum is ALWAYS conserved** — if no external force (internal forces cancel by Third Law)

> 3. **Three collision types:**

>    - Elastic: Both momentum & KE conserved ($e=1$)

>    - Inelastic: Only momentum conserved ($0 < e < 1$)

>    - Perfectly inelastic: Stick together, max KE loss ($e=0$)

> 4. **Equal masses elastic** — velocities exchange (super useful shortcut!)

> 5. **Coefficient of restitution** — measures bounciness: $e = \frac{\text{separation}}{\text{approach}}$

> 6. **Impulse applications** — larger time → smaller force (catching, airbags, crumple zones)

> 7. **Vector nature** — in 2D/3D, conserve momentum in each direction separately
>
> **“Momentum is stubborn — it doesn’t change unless pushed by an external force!”**

---

## Related Topics

### Within Laws of Motion

- [Newton’s Second Law](../newtons-second-law/index.md) — F = dp/dt leads to impulse-momentum
- [Newton’s Third Law](../newtons-third-law/index.md) — Explains momentum conservation
- [Friction](../friction/index.md) — External force that violates momentum conservation

### Connected Chapters

- [Work-Energy-Power](../../work-energy-power/index.md) — Energy approach to collisions
- [Collisions (detailed)](../../work-energy-power/collisions/index.md) — Extended treatment
- [Center of Mass](../../rotational-motion/centre-of-mass/index.md) — CM motion and momentum

### Math Connections

- [Vectors](../../kinematics/motion-2d/index.md) — 2D/3D momentum conservation
- [Integration](../../../mathematics/integral-calculus/index.md) — Variable force impulse
- [Sequences and Series](../../../mathematics/sequences-series/index.md) — Bouncing ball total distance

---

From TestGuru · our mock-test platform

## You've read Impulse and Conservation of Momentum.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=laws-of-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Flaws-of-motion%2Fimpulse-momentum%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/laws-of-motion/impulse-momentum/",this.page.identifier="/physics/laws-of-motion/impulse-momentum/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="freebodyDiagram" id="anim-freebodyDiagram-1795396423832120403"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-freebodyDiagram-1795396423832120403")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="collisionDemo" id="anim-collisionDemo-1795396423832692498"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-collisionDemo-1795396423832692498")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/laws-of-motion/impulse-momentum/](https://jeenotes.in/physics/laws-of-motion/impulse-momentum/) · raw HTML: `offline/physics/laws-of-motion/impulse-momentum/index.html`_
