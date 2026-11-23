---
title: "Newton's Second Law - Force and Momentum"
source: "https://jeenotes.in/physics/laws-of-motion/newtons-second-law/"
description: "Master F=ma, momentum, impulse, and force analysis for JEE Main & Advanced with problem-solving strategies"
updated: "2026-10-30"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 8"
html: "../../../../offline/physics/laws-of-motion/newtons-second-law/index.html"
extracted: "2026-11-23"
---

> Master F=ma, momentum, impulse, and force analysis for JEE Main & Advanced with problem-solving strategies

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s First Law](../newtons-first-law/index.md) - Understanding inertia and frames of reference
- [Vectors](../../kinematics/motion-2d/index.md) - Force and momentum are vector quantities
- [Motion in a Straight Line](../../kinematics/motion-1d/index.md) - Acceleration concepts

---

## The Hook: Why Can’t Humans Punch Like Thor?

> **★ Key point · Connect: Thor's Mighty Hammer**
>
> In the **Thor** movies, when Thor swings Mjolnir and strikes something, the impact is devastating. But when a regular human punches with all their might, the effect is much smaller. Why?
>
> Both apply force. But Thor’s hammer has enormous **mass**. And according to Newton’s Second Law, for the same force, the acceleration depends on mass. But there’s more — the **momentum** transfer is what creates the destructive impact!

**The Big Questions:**

- How do force, mass, and acceleration relate?
- What exactly is momentum?
- Why do heavier objects hit harder?

---

## The Core Concept: Force Changes Momentum

### Newton’s Second Law - Original Form

$$\boxed{\vec{F} = \frac{d\vec{p}}{dt}}$$

**In words:** The rate of change of momentum equals the applied force.

Where:

- $\vec{F}$ = Net external force
- $\vec{p}$ = Linear momentum = $m\vec{v}$
- $t$ = time

**In simple terms:** Force is what changes how much “motion” (momentum) an object has!

### The Famous F = ma Form

For **constant mass**, the second law becomes:

$$\vec{F} = \frac{d(m\vec{v})}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a}$$

$$\boxed{\vec{F} = m\vec{a}}$$

This is the most commonly used form in JEE problems.

### Interactive Demo: Visualize Newton’s Second Law

See how force, mass, and acceleration relate in real-time.

> **⚠ Important Distinction**
>
> **F = dp/dt** is the general form (works even when mass changes, like rockets)
>
> **F = ma** is the special case (only when mass is constant)
>
> For JEE: Most problems use constant mass, so F = ma works. But for rocket/variable mass problems, use F = dp/dt!

---

## Understanding Momentum

### Definition

$$\boxed{\vec{p} = m\vec{v}}$$

**Momentum** is the “quantity of motion” possessed by a body.

**Units:** kg⋅m/s or N⋅s

### Properties of Momentum

1. **Vector quantity** — has magnitude and direction
2. Direction same as velocity
3. Depends on both mass and velocity
4. More momentum = harder to stop

> **★ Key point · Jawan Train Collision**
>
> In **Jawan**, when two trains collide, the heavier train (larger mass) has more momentum at the same speed. That’s why freight trains are more dangerous than passenger trains — not just heavier, but carry HUGE momentum!

---

## Force Analysis: The Free Body Diagram (FBD)

**Most important skill in mechanics:** Drawing correct FBD!

### Steps to Draw FBD

1. **Isolate the body** — consider only ONE object at a time
2. **Identify all forces** acting on that body:
   - Weight ($mg$)
   - Normal reaction ($N$)
   - Tension ($T$)
   - Friction ($f$)
   - Applied force ($F$)
3. **Show force directions** with arrows
4. **Choose coordinate system** (usually: x-horizontal, y-vertical)
5. **Resolve forces** into components if needed

> **⚠ Trap · Common FBD Mistakes**
>
> **Mistake 1:** Including forces the body exerts on others
>
> - **Wrong:** Including reaction force that the body exerts on the ground

> - **Correct:** Only forces that other objects exert ON this body
>
> **Mistake 2:** Forgetting to show all forces
>
> - Always check: Weight? Normal? Friction? Tension? Applied force?
>
> **Mistake 3:** Drawing pseudo forces in inertial frames
>
> - Pseudo forces only in non-inertial (accelerating) frames!

---

## Applying F = ma

### One-Dimensional Motion

For motion along a line:

$$F_{\text{net}} = ma$$

**Sign convention matters:**

- Choose positive direction (usually right/up)
- Forces in positive direction: positive
- Forces in negative direction: negative

### Two-Dimensional Motion

Resolve into components:

$$F_x = ma_x$$

$$F_y = ma_y$$

**Key insight:** Motion in x and y are **independent** (just like projectile motion!)

---

## Common Force Scenarios

### 1. Block on Horizontal Surface

**FBD:**

- Weight: $mg$ (downward)
- Normal: $N$ (upward)
- Applied force: $F$ (horizontal)
- Friction: $f$ (opposite to motion/tendency)

**Vertical equilibrium:** $N = mg$ (no vertical motion)

**Horizontal motion:** $F - f = ma$

### 2. Block on Inclined Plane

**Choose tilted axes** (x along plane, y perpendicular)

**Weight components:**

- Along plane: $mg\sin\theta$
- Perpendicular: $mg\cos\theta$

**Equations:**

- Perpendicular: $N = mg\cos\theta$ (no motion perpendicular to plane)
- Along plane: $mg\sin\theta - f = ma$

> **★ Key point · Memory Trick: Sin or Cos?**
>
> **“SIN goes DOWN the plane”**
>
> - Component along slope (down) = $mg\sin\theta$

> - Component into slope (normal) = $mg\cos\theta$
>
> Why? When $\theta = 90°$ (vertical cliff), $\sin 90° = 1$, so full weight acts downward ✓

### 3. Pulley Systems (Two Blocks)

**Key points:**

- Tension is same throughout a massless, frictionless pulley
- Constraint: If string is inextensible, $a_1 = a_2$ (magnitudes)

**Types of constraint equations for connected bodies:**

1. **String constraint** — an inextensible string has constant total length, so the accelerations of the connected bodies are related
2. **Wedge constraint** — a block staying in contact with a moving wedge must match the wedge’s motion along the contact normal
3. **Pulley constraint** — for a movable pulley, the pulley’s acceleration is the average of the accelerations of the two string segments

**For block 1 (mass $m_1$):** $T - m_1g = m_1a$

**For block 2 (mass $m_2$):** $m_2g - T = m_2a$

**Solve simultaneously:**

$$a = \frac{(m_2 - m_1)g}{m_1 + m_2}$$

$$T = \frac{2m_1m_2g}{m_1 + m_2}$$

---

## Impulse: Force Over Time

### Definition

$$\boxed{\vec{J} = \int \vec{F} \, dt = \Delta \vec{p}}$$

**Impulse** is the change in momentum.

For **constant force**:

$$\boxed{J = F \cdot \Delta t = m(v - u)}$$

**Units:** N⋅s (same as momentum: kg⋅m/s)

### Impulse-Momentum Theorem

$$\boxed{F \cdot \Delta t = m \Delta v}$$

**Key insight:** The same change in momentum can result from:

- **Large force for short time** (hammer hitting nail)
- **Small force for long time** (pushing a car)

> **★ Key point · Pathaan's Stunts**
>
> In **Pathaan** (2023), when Shah Rukh Khan lands on a car roof after jumping from a building, why doesn’t he get severely injured?
>
> The car roof **crumples** — increasing the collision time $\Delta t$. By impulse-momentum theorem:
>
> $$F = \frac{m\Delta v}{\Delta t}$$
>
> Larger $\Delta t$ → smaller $F$ → reduced injury!
>
> This is why:
>
> - Airbags work (increase collision time)

> - Athletes bend knees when landing (increase stopping time)

> - Catching a cricket ball with moving hands (increase contact time)

---

## Variable Mass Systems

### Rocket Equation

For systems where mass changes (rocket burning fuel):

$$\boxed{F_{\text{thrust}} = v_{\text{rel}} \frac{dm}{dt}}$$

Where:

- $v_{\text{rel}}$ = velocity of ejected gases relative to rocket
- $dm/dt$ = rate of mass ejection

**For a rocket in free space (no gravity, no air resistance):**

$$m\frac{dv}{dt} = v_{\text{rel}}\frac{dm}{dt}$$

**Tsiolkovsky Rocket Equation:**

$$\boxed{v - u = v_{\text{rel}} \ln\left(\frac{m_i}{m_f}\right)}$$

Where:

- $m_i$ = initial mass
- $m_f$ = final mass
- $\ln$ = natural logarithm

> **◐ In simple terms · JEE Scope**
>
> Full rocket equation derivation is rare in JEE. But understanding that **F = dp/dt** (not F = ma) for variable mass is important!

---

## Memory Tricks & Patterns

### Mnemonic for F = ma

**“Fantastic Men Accelerate”**

- **F**orce = **m**ass × **a**cceleration

### Mnemonic for Impulse

**“Just Forget Delta-P”** → **J = F⋅Δt = Δp**

- **J**ust = **I**mpulse (J is symbol)
- **F**orget = **F**orce
- **Delta-P** = change in momentum

### Pattern Recognition

| Given | Find | Use |
| --- | --- | --- |
| Force, mass | Acceleration | $a = F/m$ |
| Force, time | Change in momentum | $\Delta p = F \cdot \Delta t$ |
| Force-time graph | Impulse | Area under curve |
| Mass, velocity | Momentum | $p = mv$ |
| Two masses on pulley | Acceleration | $a = \frac{(m_2-m_1)g}{m_1+m_2}$ |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting Vector Nature**
>
> **Wrong:** $F = ma = 5 \times 2 = 10$ N
>
> **Problem:** Direction matters! If forces are in different directions, you must add them vectorially.
>
> **Correct approach:**
>
> 1. Resolve all forces into components

> 2. Find net force in each direction

> 3. Apply F = ma separately for each component

> **⚠ Trap #2: Using F = ma for Variable Mass**
>
> **Scenario:** A rocket burns fuel and accelerates.
>
> **Wrong:** $F = ma$ (mass is changing!)
>
> **Correct:** $F = \frac{dp}{dt}$

> **⚠ Trap #3: Confusing Weight and Mass**
>
> **Wrong:** “The weight of the object is 10 kg”
>
> **Correct:**
>
> - **Mass** = 10 kg (scalar, doesn’t change)

> - **Weight** = $mg$ = 10 × 10 = 100 N (force, vector, changes with g)

> **⚠ Trap #4: Tension Confusion**
>
> In pulley problems with different masses:
>
> **Wrong:** Tension = weight of hanging mass = $mg$
>
> **Correct:** Tension is ALWAYS between the two weights. Calculate using:
>
> $$T = \frac{2m_1m_2g}{m_1+m_2}$$
>
> If $m_1 = m_2$, then $T = mg$ (special case)

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Basic F = ma**
>
> A force of 20 N acts on a body of mass 4 kg. Find the acceleration produced.
>
> **Solution:**

> Given: $F = 20$ N, $m = 4$ kg
>
> Using Newton’s second law:
>
> $$a = \frac{F}{m} = \frac{20}{4} = 5 \text{ m/s}^2$$
>
> **Answer:** 5 m/s²

> **↗ Connection · Problem 1.2: Momentum Calculation**
>
> A cricket ball of mass 150 g is moving at 20 m/s. Calculate its momentum.
>
> **Solution:**

> Given: $m = 150$ g $= 0.15$ kg, $v = 20$ m/s
>
> $$p = mv = 0.15 \times 20 = 3 \text{ kg⋅m/s}$$
>
> **Answer:** 3 kg⋅m/s

> **↗ Connection · Problem 1.3: Impulse Concept**
>
> A force of 100 N acts on a body for 0.5 s. Calculate the impulse.
>
> **Solution:**

> Given: $F = 100$ N, $\Delta t = 0.5$ s
>
> $$J = F \cdot \Delta t = 100 \times 0.5 = 50 \text{ N⋅s}$$
>
> **Answer:** 50 N⋅s

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Atwood's Machine**
>
> Two masses 3 kg and 5 kg are connected by a string over a frictionless pulley. Find:

> (a) Acceleration of the system

> (b) Tension in the string

> (Take g = 10 m/s²)
>
> **Solution:**
>
> **For 5 kg mass (moving down):**
>
> $$5g - T = 5a \quad \text{...(1)}$$
>
> **For 3 kg mass (moving up):**
>
> $$T - 3g = 3a \quad \text{...(2)}$$
>
> **Adding equations (1) and (2):**
>
> $$5g - 3g = 5a + 3a$$

$$2g = 8a$$

$$a = \frac{g}{4} = \frac{10}{4} = 2.5 \text{ m/s}^2$$
>
> **Finding tension from equation (2):**
>
> $$T = 3g + 3a = 3(10) + 3(2.5) = 30 + 7.5 = 37.5 \text{ N}$$
>
> **Verification from equation (1):**
>
> $$T = 5g - 5a = 5(10) - 5(2.5) = 50 - 12.5 = 37.5 \text{ N}$$
>
> ✓
>
> **Answers:**

> (a) Acceleration = 2.5 m/s²

> (b) Tension = 37.5 N

> **↗ Connection · Problem 2.2: Block on Incline**
>
> A block of mass 10 kg rests on a smooth inclined plane of angle 30°. Find the acceleration of the block when released. (g = 10 m/s²)
>
> **Solution:**
>
> Since the plane is smooth (frictionless), only two forces act on the block:
>
> 1. Weight component along plane: $mg\sin\theta$ (down the plane)

> 2. Normal reaction $N$ (perpendicular to plane, no motion in this direction)
>
> **Using F = ma along the plane:**
>
> $$mg\sin\theta = ma$$

$$a = g\sin\theta = 10 \times \sin 30° = 10 \times 0.5 = 5 \text{ m/s}^2$$
>
> **Note:** Acceleration is independent of mass!
>
> **Answer:** 5 m/s² down the plane

> **↗ Connection · Problem 2.3: Impulse-Momentum**
>
> A ball of mass 200 g moving at 10 m/s strikes a wall and rebounds at 8 m/s. If the contact time is 0.02 s, find the average force exerted by the wall.
>
> **Solution:**
>
> **Taking direction away from wall as positive:**
>
> - Initial velocity: $u = -10$ m/s (toward wall)

> - Final velocity: $v = +8$ m/s (away from wall)

> - Mass: $m = 0.2$ kg

> - Time: $\Delta t = 0.02$ s
>
> **Change in momentum:**
>
> $$\Delta p = m(v - u) = 0.2[8 - (-10)] = 0.2 \times 18 = 3.6 \text{ kg⋅m/s}$$
>
> **Using impulse-momentum theorem:**
>
> $$F \cdot \Delta t = \Delta p$$

$$F = \frac{\Delta p}{\Delta t} = \frac{3.6}{0.02} = 180 \text{ N}$$
>
> **Answer:** 180 N (away from wall)

> **↗ Connection · Problem 2.4: Force-Time Graph**
>
> A force acts on a 2 kg mass according to the graph shown (not drawn here). The force is 10 N for 3 seconds, then 0 N for 2 seconds, then 5 N for 2 seconds. If the body starts from rest, find its final velocity.
>
> **Solution:**
>
> **Method: Use impulse-momentum theorem**
>
> Total impulse = Area under F-t graph
>
> $$J_{\text{total}} = (10 \times 3) + (0 \times 2) + (5 \times 2) = 30 + 0 + 10 = 40 \text{ N⋅s}$$
>
> **Since impulse = change in momentum:**
>
> $$J = \Delta p = m(v - u)$$

$$40 = 2(v - 0)$$

$$v = 20 \text{ m/s}$$
>
> **Answer:** 20 m/s

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Two-Body Constraint Motion**
>
> Two blocks A (5 kg) and B (3 kg) are connected by a light inextensible string. A is on a smooth horizontal table and B hangs vertically over a frictionless pulley at the edge. Find the acceleration of the system and tension in the string. (g = 10 m/s²)
>
> **Solution:**
>
> **For block A (horizontal motion):**
>
> $$T = 5a \quad \text{...(1)}$$
>
> **For block B (vertical motion):**
>
> $$3g - T = 3a \quad \text{...(2)}$$
>
> **From (1):** $T = 5a$
>
> **Substituting in (2):**
>
> $$30 - 5a = 3a$$

$$30 = 8a$$

$$a = 3.75 \text{ m/s}^2$$
>
> **Tension:**
>
> $$T = 5a = 5 \times 3.75 = 18.75 \text{ N}$$
>
> **Answers:**
>
> - Acceleration = 3.75 m/s²

> - Tension = 18.75 N

> **↗ Connection · Problem 3.2: Wedge-Block System**
>
> A block of mass $m$ is placed on a smooth wedge of mass $M$ and angle $\theta$. The wedge is on a smooth horizontal surface. When the system is released, find the acceleration of the wedge.
>
> **Solution:**
>
> **Key insight:** Since both surfaces are smooth, there’s no friction. The only forces are weights and normal reactions.
>
> **For block (mass m):**

> Let wedge accelerate to the right with acceleration $a_M$.

> Let block accelerate down the wedge with $a_m$ (relative to wedge).
>
> In ground frame, block has:
>
> - Horizontal component: $a_M - a_m\cos\theta$ (to the right)

> - Vertical component: $a_m\sin\theta$ (downward)
>
> **Vertical equilibrium of block:**
>
> $$mg - N\cos\theta = ma_m\sin\theta \quad \text{...(1)}$$
>
> **Horizontal motion of block:**
>
> $$N\sin\theta = m(a_M - a_m\cos\theta) \quad \text{...(2)}$$
>
> **For wedge (mass M):**

> Horizontal force on wedge = horizontal component of N (to the left)
>
> $$N\sin\theta = Ma_M \quad \text{...(3)}$$
>
> **From (2) and (3):**
>
> $$m(a_M - a_m\cos\theta) = Ma_M$$

$$ma_M - ma_m\cos\theta = Ma_M$$

$$a_m\cos\theta = \frac{m - M}{m}a_M \quad \text{...(4)}$$
>
> **From (1):**
>
> $$N = \frac{mg - ma_m\sin\theta}{\cos\theta}$$
>
> **Substituting in (3):**
>
> $$\frac{mg - ma_m\sin\theta}{\cos\theta} \cdot \sin\theta = Ma_M$$

$$mg\sin\theta - ma_m\sin^2\theta = Ma_M\cos\theta$$
>
> **Using (4) to eliminate $a_m$:**
>
> After algebraic manipulation:
>
> $$\boxed{a_M = \frac{mg\sin\theta\cos\theta}{M + m\sin^2\theta}}$$
>
> **Answer:** $a_M = \frac{mg\sin\theta\cos\theta}{M + m\sin^2\theta}$

> **↗ Connection · Problem 3.3: Chain on Table**
>
> A uniform chain of length $L$ and mass $M$ is placed on a smooth table with length $b$ hanging over the edge. Find the time taken for the chain to slip off the table.
>
> **Solution:**
>
> **Let $x$ = length hanging at time $t$**
>
> Mass hanging = $\frac{M}{L}x$
>
> **Equation of motion:**
>
> $$F = \frac{M}{L}x \cdot g = M \cdot a$$

$$a = \frac{gx}{L}$$
>
> But $a = \frac{dv}{dt} = \frac{dv}{dx} \cdot \frac{dx}{dt} = v\frac{dv}{dx}$
>
> $$v\frac{dv}{dx} = \frac{gx}{L}$$

$$v \, dv = \frac{g}{L}x \, dx$$
>
> **Integrating from $x = b$ (initially) to $x = L$ (finally):**
>
> $$\int_0^v v \, dv = \int_b^L \frac{g}{L}x \, dx$$

$$\frac{v^2}{2} = \frac{g}{L} \cdot \frac{x^2}{2} \Big|_b^L = \frac{g}{2L}(L^2 - b^2)$$

$$v^2 = \frac{g}{L}(L^2 - b^2)$$

$$v = \sqrt{\frac{g(L^2 - b^2)}{L}}$$
>
> **But we need time, not velocity at the end. So we use:**
>
> $$v = \frac{dx}{dt}$$
>
> From earlier: $v^2 = \frac{g}{L}(x^2 - b^2)$ (generalizing)
>
> $$v = \sqrt{\frac{g(x^2 - b^2)}{L}}$$

$$\frac{dx}{dt} = \sqrt{\frac{g}{L}} \sqrt{x^2 - b^2}$$

$$\frac{dx}{\sqrt{x^2 - b^2}} = \sqrt{\frac{g}{L}} \, dt$$
>
> **Integrating:**
>
> $$\int_b^L \frac{dx}{\sqrt{x^2 - b^2}} = \sqrt{\frac{g}{L}} \int_0^T dt$$

$$\cosh^{-1}\left(\frac{x}{b}\right) \Big|_b^L = \sqrt{\frac{g}{L}} \cdot T$$

$$\cosh^{-1}\left(\frac{L}{b}\right) = \sqrt{\frac{g}{L}} \cdot T$$

$$\boxed{T = \sqrt{\frac{L}{g}} \cosh^{-1}\left(\frac{L}{b}\right)}$$
>
> **Or in logarithmic form:**
>
> $$T = \sqrt{\frac{L}{g}} \ln\left(\frac{L}{b} + \sqrt{\frac{L^2}{b^2} - 1}\right)$$
>
> **Answer:** $T = \sqrt{\frac{L}{g}} \cosh^{-1}(L/b)$

---

## Quick Revision Box

| Concept | Formula | Key Point |
| --- | --- | --- |
| **Second Law** | $\vec{F} = \frac{d\vec{p}}{dt}$ | General form |
| **F = ma** | $\vec{F} = m\vec{a}$ | Constant mass only |
| **Momentum** | $\vec{p} = m\vec{v}$ | Quantity of motion |
| **Impulse** | $J = F \cdot \Delta t = \Delta p$ | Change in momentum |
| **Atwood Machine** | $a = \frac{(m_2-m_1)g}{m_1+m_2}$ | Two masses, pulley |
| **Incline** | $a = g\sin\theta$ | Smooth plane |
| **FBD** | Draw all forces | Most critical step! |

---

## When to Use This Law

> **★ Key point · Decision Tree**
>
> **Use Newton’s Second Law when:**
>
> 1. Finding acceleration given forces

> 2. Finding force given acceleration

> 3. Analyzing motion with known/unknown forces

> 4. Pulley, incline, constraint problems
>
> **Use Impulse-Momentum when:**
>
> 1. Force varies with time

> 2. Given force-time graph

> 3. Collision problems

> 4. Finding average force during impact
>
> **Use [Work-Energy](../../work-energy-power/work-energy-theorem/index.md) when:**
>
> - Displacement is involved

> - No time information given

> - [Energy conservation](../../work-energy-power/conservation-energy/index.md) problems

---

## JEE Exam Strategy

### Weightage

- **JEE Main:** 4-6 questions per year (high yield!)
- **JEE Advanced:** 2-3 multi-concept problems (complex, 4+ marks each)

### Common Question Types

1. **Atwood machine variations** (very common, 3 marks)
2. **Block on incline** (with/without friction, 2-4 marks)
3. **Wedge-block systems** (advanced, 4 marks)
4. **Impulse-momentum** (moderate, 2-3 marks)
5. **Force-time graphs** (area = impulse, 2 marks)

### Time-Saving Tricks

**Trick 1:** For Atwood machine, memorize:

$$a = \frac{|m_2 - m_1|}{m_1 + m_2}g, \quad T = \frac{2m_1m_2}{m_1+m_2}g$$

**Trick 2:** For smooth incline, $a = g\sin\theta$ (independent of mass!)

**Trick 3:** If F-t graph is given, area under curve = impulse = change in momentum

**Trick 4:** For two-body problems, always write equations for BOTH bodies, then solve simultaneously

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **F = dp/dt is fundamental** — F = ma is just a special case for constant mass

> 2. **Momentum = mass × velocity** — measures “quantity of motion”

> 3. **Impulse = F⋅Δt = Δp** — same momentum change from large F (short time) or small F (long time)

> 4. **Free Body Diagram is CRITICAL** — draw FBD for EVERY problem, no exceptions!

> 5. **Vector nature matters** — always resolve into components for 2D problems

> 6. **For systems:** Write F = ma for EACH body, use constraints, solve simultaneously
>
> **“Force doesn’t cause motion — it causes CHANGE in motion (acceleration)!”**

---

## Related Topics

### Within Laws of Motion

- [Newton’s First Law](../newtons-first-law/index.md) — What happens when F = 0
- [Newton’s Third Law](../newtons-third-law/index.md) — How forces come in pairs
- [Friction](../friction/index.md) — A key force in most problems
- [Impulse and Momentum](../impulse-momentum/index.md) — Detailed treatment of collisions

### Connected Chapters

- [Kinematics](../../kinematics/index.md) — Motion description (now we know WHY objects accelerate!)
- [Work-Energy-Power](../../work-energy-power/index.md) — Alternative approach to dynamics
- [Circular Motion](../../kinematics/circular-motion/index.md) — Centripetal force applications
- [Rotational Motion](../../rotational-motion/index.md) — Angular analog: $\tau = I\alpha$
- [Gravitation](../../gravitation/index.md) — Gravitational force applications

### Math Connections

- [Vectors](../../kinematics/motion-2d/index.md) — Force resolution and addition
- [Differentiation](../../../mathematics/limits-continuity-differentiability/index.md) — dp/dt concept
- [Integration](../../../mathematics/integral-calculus/index.md) — For variable forces

---

**Practice next:** [Laws of Motion JEE Mains PYQ](../previous-year-questions/index.md)

From TestGuru · our mock-test platform

## You've read Newton's Second Law - Force and Momentum.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=laws-of-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Flaws-of-motion%2Fnewtons-second-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/laws-of-motion/newtons-second-law/",this.page.identifier="/physics/laws-of-motion/newtons-second-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="newtonsSecondLaw" id="anim-newtonsSecondLaw-1795396423809778372"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-newtonsSecondLaw-1795396423809778372")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/laws-of-motion/newtons-second-law/](https://jeenotes.in/physics/laws-of-motion/newtons-second-law/) · raw HTML: `offline/physics/laws-of-motion/newtons-second-law/index.html`_
