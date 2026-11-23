---
title: "Friction - Static and Kinetic"
source: "https://jeenotes.in/physics/laws-of-motion/friction/"
description: "Master friction concepts, laws of friction, angle of repose, and applications for JEE Main & Advanced Physics"
updated: "2026-10-30"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 8"
html: "../../../../offline/physics/laws-of-motion/friction/index.html"
extracted: "2026-11-23"
---

> Master friction concepts, laws of friction, angle of repose, and applications for JEE Main & Advanced Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Second Law](../newtons-second-law/index.md) - Force and acceleration
- [Newton’s Third Law](../newtons-third-law/index.md) - Action-reaction pairs
- [Forces and Free Body Diagrams](../newtons-second-law/index.md) - FBD construction

---

## The Hook: Why Don’t Cars Slip on Curved Roads?

> **★ Key point · Connect: Fast X Chase Sequences**
>
> In **Fast X** (2023), Dom Toretto takes sharp turns at insane speeds without slipping off the road. But when the same car is on ice, even slow turns cause it to skid. What’s the secret?
>
> It’s **friction** — the invisible force that keeps tires gripped to the road! Without friction, no amount of steering would help you turn.

**The Big Questions:**

- What makes surfaces grip or slip?
- Why is it harder to start pushing a heavy box than to keep it moving?
- How do we calculate the maximum force before slipping occurs?

---

## The Core Concept: Friction Opposes Motion

### What is Friction?

**Friction** is the force that opposes the relative motion (or tendency of motion) between two surfaces in contact.

**Direction:** Always **opposite** to the direction of motion or intended motion.

**Origin:** Microscopic irregularities (hills and valleys) on surfaces interlock and resist sliding.

> **◐ In simple terms · Friction is Contact Force**
>
> Friction acts only when two surfaces are in contact. It’s a **contact force**, unlike gravity which acts at a distance.

---

## Types of Friction

### 1. Static Friction ($f_s$)

**Acts when:** Object is at rest and there’s a tendency to move.

**Key property:** Self-adjusting! It adjusts its value to prevent motion.

$$\boxed{f_s \leq \mu_s N}$$

Where:

- $f_s$ = Static friction force
- $\mu_s$ = Coefficient of static friction
- $N$ = Normal reaction
- The inequality means: $f_s$ can be anything from 0 to maximum value $\mu_s N$

**Maximum static friction:**

$$\boxed{f_{s,\text{max}} = \mu_s N}$$

This is the limiting friction — just before motion starts.

> **★ Key point · Self-Adjusting Nature**
>
> **Example:** You push a 10 kg box with 20 N. It doesn’t move.
>
> - Applied force = 20 N (to the right)

> - Static friction = 20 N (to the left, exactly balancing)
>
> You push harder with 35 N. Still doesn’t move.
>
> - Applied force = 35 N

> - Static friction = 35 N (adjusts to balance)
>
> You push with 50 N. Suddenly it starts moving!
>
> - You’ve exceeded $f_{s,\text{max}} = \mu_s N$

> - Static friction can’t increase beyond this limit

### Interactive Demo: Visualize Friction Forces

Explore how static and kinetic friction work with free body diagrams.

### 2. Kinetic (Dynamic) Friction ($f_k$)

**Acts when:** Object is already in motion.

$$\boxed{f_k = \mu_k N}$$

Where:

- $f_k$ = Kinetic friction force
- $\mu_k$ = Coefficient of kinetic friction
- $N$ = Normal reaction

**Key properties:**

1. **Constant value** (not self-adjusting like static)
2. Generally, $\mu_k < \mu_s$ (easier to keep moving than to start)
3. Approximately independent of velocity (for moderate speeds)
4. Proportional to normal force

> **◐ In simple terms · Why μₖ < μₛ?**
>
> When object is at rest, microscopic irregularities have time to settle and interlock deeply.
>
> When moving, there’s less time for interlocking, so resistance is lower.
>
> **Practical consequence:** Harder to start pushing a heavy box than to keep it moving!

---

## Laws of Friction

### Law 1: Direction

Friction always opposes **relative motion** or **tendency of relative motion**.

### Law 2: Limiting Friction

Maximum static friction is proportional to normal reaction:

$$f_{s,\text{max}} = \mu_s N$$

### Law 3: Kinetic Friction

Kinetic friction is proportional to normal reaction and independent of area of contact:

$$f_k = \mu_k N$$

### Law 4: Independence from Area

Friction is **independent of the area of contact** (for a given normal force).

**Why?**

- Larger area → more contact points
- But pressure decreases (same weight spread over larger area)
- These effects exactly cancel out!

**Practical example:** A brick has same friction whether lying flat or standing on edge (same weight, same surfaces).

### Law 5: Speed Independence

Kinetic friction is approximately independent of speed (for moderate velocities).

At very high speeds, friction can increase due to air resistance and heating effects.

---

## Coefficient of Friction

### Definition

$$\mu = \frac{f}{N}$$

**Coefficient of friction** is the ratio of friction force to normal force.

**Properties:**

- Dimensionless (no units)
- Depends on nature of surfaces (rough/smooth)
- $\mu_s > \mu_k$ (typically)
- $0 < \mu < \infty$ (usually 0.1 to 1.5 for common surfaces)

### Typical Values

| Surfaces | $\mu_s$ | $\mu_k$ |
| --- | --- | --- |
| Wood on wood | 0.4 - 0.5 | 0.2 - 0.3 |
| Steel on steel | 0.7 | 0.6 |
| Rubber on concrete | 1.0 | 0.8 |
| Ice on ice | 0.1 | 0.03 |
| Teflon on Teflon | 0.04 | 0.04 |

> **★ Key point · Jawan Action Scene - Ice vs Concrete**
>
> In **Jawan**, why do chase scenes on icy roads show cars sliding but normal roads show good grip?
>
> **Ice:** $\mu_s \approx 0.1$ (very low friction)

> **Concrete:** $\mu_s \approx 1.0$ (high friction)
>
> On ice, even small forces cause slipping. On concrete, much larger forces can be applied before slipping!

---

## Angle of Friction

### Definition

The angle that the resultant of normal reaction and limiting friction makes with the normal.

$$\boxed{\tan \lambda = \frac{f_{\text{max}}}{N} = \frac{\mu_s N}{N} = \mu_s}$$

$$\boxed{\lambda = \tan^{-1}(\mu_s)}$$

**Physical meaning:** If you pull an object at angle $\theta$ from horizontal:

- If $\theta < \lambda$: Object may move
- If $\theta > \lambda$: Object definitely won’t move (friction dominates)

---

## Angle of Repose

### Definition

**Angle of repose** is the maximum angle of an inclined plane at which an object can rest without sliding down.

> **◐ In simple terms · Physical Setup**
>
> Imagine a plank with a block on it. You slowly increase the angle of the plank. At some critical angle $\theta_R$, the block just starts to slide. This angle is the **angle of repose**.

### Derivation

**Forces on block on incline (angle $\theta$):**

- Component along plane: $mg\sin\theta$ (down)
- Component perpendicular: $mg\cos\theta$ (into plane)
- Normal reaction: $N = mg\cos\theta$
- Static friction: $f_s$ (up the plane)

**At limiting case (just about to slide):**

$$f_{s,\text{max}} = mg\sin\theta$$

$$\mu_s N = mg\sin\theta$$

$$\mu_s \cdot mg\cos\theta = mg\sin\theta$$

$$\mu_s = \tan\theta$$

$$\boxed{\theta_R = \tan^{-1}(\mu_s)}$$

**Key insight:** Angle of repose = Angle of friction!

$$\theta_R = \lambda = \tan^{-1}(\mu_s)$$

> **★ Key point · Memory Trick**
>
> **“Repose and Friction are Twins”**
>
> $$\theta_{\text{repose}} = \lambda_{\text{friction}} = \tan^{-1}(\mu_s)$$
>
> Both give the same angle!

---

## Motion on Inclined Plane with Friction

### Case 1: Block at Rest on Incline

**Condition for rest:**

$$mg\sin\theta \leq \mu_s mg\cos\theta$$

$$\tan\theta \leq \mu_s$$

$$\theta \leq \tan^{-1}(\mu_s)$$

### Case 2: Block Sliding Down

If $\theta > \theta_R$, block slides down.

**Net force down the plane:**

$$F_{\text{net}} = mg\sin\theta - f_k = mg\sin\theta - \mu_k mg\cos\theta$$

**Acceleration:**

$$\boxed{a = g(\sin\theta - \mu_k\cos\theta)}$$

### Case 3: Block Pushed Up the Plane

**Two scenarios:**

**Scenario A: Moving up**
Friction acts **downward** (opposes upward motion)

$$F - mg\sin\theta - f_k = ma$$

$$F - mg\sin\theta - \mu_k mg\cos\theta = ma$$

**Scenario B: Moving down**
Friction acts **upward** (opposes downward motion)

$$mg\sin\theta - F - f_k = ma$$

> **⚠ Trap · Common Mistake**
>
> **Wrong:** Friction always acts down the incline.
>
> **Correct:** Friction opposes **motion**, not direction down the plane.
>
> - If block moves up → friction acts down

> - If block moves down → friction acts up

> - If block is at rest → friction acts opposite to the tendency

Practise inclined-plane friction with the [friction PYQs and practice questions](../previous-year-questions/index.md).

---

## Horizontal Surface Problems

### Problem Type 1: Minimum Force to Start Motion

**Question:** What’s the minimum horizontal force to just start moving a block?

**At the moment of starting:**

$$F = f_{s,\text{max}} = \mu_s N = \mu_s mg$$

$$\boxed{F_{\text{min}} = \mu_s mg}$$

### Problem Type 2: Force at Angle

**Applied force $F$ at angle $\theta$ above horizontal:**

**Vertical equilibrium:**

$$N + F\sin\theta = mg$$

$$N = mg - F\sin\theta$$

**Horizontal (for motion to just start):**

$$F\cos\theta = \mu_s N = \mu_s(mg - F\sin\theta)$$

$$F\cos\theta = \mu_s mg - \mu_s F\sin\theta$$

$$F(\cos\theta + \mu_s\sin\theta) = \mu_s mg$$

$$\boxed{F = \frac{\mu_s mg}{\cos\theta + \mu_s\sin\theta}}$$

**Minimum force:** Differentiate with respect to $\theta$ and set to zero.

Result: $\theta = \tan^{-1}(\mu_s) = \lambda$ (angle of friction!)

$$F_{\text{min}} = \mu_s mg \sin\lambda = \frac{\mu_s mg}{\sqrt{1 + \mu_s^2}}$$

> **★ Key point · JEE Shortcut**
>
> **Key pattern:** Minimum force to move an object occurs when applied force is at **angle of friction** from the normal!
>
> This is a high-yield JEE concept.

---

## Applications of Friction

### 1. Walking and Running

**Pathaan Running Scene:** When Shah Rukh Khan sprints in *Pathaan*, his foot pushes ground **backward**, and friction from ground pushes him **forward**.

Without friction (like on ice), you can’t push backward effectively → no forward acceleration!

### 2. Vehicle Motion

**Driving:** Engine makes wheels rotate. Tire pushes ground backward, friction pushes car forward.

**Braking:** Brakes stop wheels. Friction between tires and road stops the car.

**Maximum acceleration without slipping:**

$$a_{\text{max}} = \mu_s g$$

**Stopping distance:** (From energy conservation)

$$s = \frac{v^2}{2\mu_k g}$$

### 3. Belt and Pulley Systems

Friction between belt and pulley allows power transmission.

Maximum tension difference:

$$\frac{T_1}{T_2} = e^{\mu\theta}$$

where $\theta$ is the angle of wrap (in radians).

---

## Memory Tricks & Patterns

### Mnemonic for Static vs Kinetic

**“Static is STUCK, Kinetic is CONSTANT”**

- **S**tatic is **S**elf-adjusting (varies from 0 to max)
- **K**inetic is **K**onstant (fixed value)

### Mnemonic for μₛ > μₖ

**“Starting is HARDER than Keeping going”**

- Harder to START (larger $\mu_s$)
- Easier to KEEP going (smaller $\mu_k$)

### Pattern Recognition

| Given | Find | Formula |
| --- | --- | --- |
| $\mu_s$, mass | Max force before slip | $F_{\text{max}} = \mu_s mg$ |
| Angle of incline | Acceleration down | $a = g(\sin\theta - \mu_k\cos\theta)$ |
| $\mu_s$ | Angle of repose | $\theta_R = \tan^{-1}(\mu_s)$ |
| Initial velocity, $\mu_k$ | Stopping distance | $s = \frac{v^2}{2\mu_k g}$ |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Friction Always Opposes Motion**
>
> **Partially correct, but misleading!**
>
> Friction opposes **relative motion** between surfaces.
>
> **Counter-example:** When you walk, friction acts **forward** on your feet (in direction of motion of your body). But it opposes the **backward motion of your feet relative to ground**.
>
> **Correct statement:** Friction opposes relative motion between the two surfaces in contact.

> **⚠ Trap #2: Friction Depends on Area**
>
> **Wrong:** Larger area means more friction.
>
> **Correct:** Friction is independent of contact area (for same normal force and materials).
>
> **Why misconception exists:** Larger tires on vehicles? Those help distribute weight and prevent sinking, not increase friction directly.

> **⚠ Trap #3: Using μₛ Instead of μₖ**
>
> **Wrong:** Using static friction coefficient when object is already moving.
>
> **Correct:**
>
> - Object at rest or just about to move → use $\mu_s$

> - Object already in motion → use $\mu_k$
>
> **JEE trap:** Problem says “block is moving” but student uses $\mu_s$ by mistake!

> **⚠ Trap #4: Friction = μN Always**
>
> **Wrong:** Static friction is always $\mu_s N$.
>
> **Correct:**
>
> - Static friction: $f_s \leq \mu_s N$ (can be less than maximum!)

> - Kinetic friction: $f_k = \mu_k N$ (always equals)
>
> **Example:** If you push a box with 10 N and it doesn’t move, friction is 10 N (not necessarily $\mu_s N$).

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Basic Static Friction**
>
> A block of mass 5 kg rests on a horizontal surface with $\mu_s = 0.4$ and $\mu_k = 0.3$. Find:

> (a) Maximum static friction

> (b) If a 15 N force is applied, will the block move?

> (g = 10 m/s²)
>
> **Solution:**
>
> **(a) Maximum static friction:**
>
> $$f_{s,\text{max}} = \mu_s N = \mu_s mg = 0.4 \times 5 \times 10 = 20 \text{ N}$$
>
> **(b) Will 15 N move it?**

> Applied force = 15 N

> Maximum static friction = 20 N
>
> Since $15 < 20$, the applied force is **less than** maximum static friction.
>
> **Result:** Block will NOT move. Static friction will adjust to 15 N to balance the applied force.
>
> **Answers:**

> (a) 20 N

> (b) No, block remains at rest

> **↗ Connection · Problem 1.2: Angle of Repose**
>
> A block rests on an inclined plane. The angle is gradually increased. The block just starts to slide when the angle is 37°. Find the coefficient of static friction.
>
> **Solution:**
>
> The angle at which block just starts sliding is the **angle of repose**.
>
> $$\theta_R = \tan^{-1}(\mu_s)$$

$$37° = \tan^{-1}(\mu_s)$$

$$\mu_s = \tan(37°) = 0.75$$
>
> **Answer:** $\mu_s = 0.75$

> **↗ Connection · Problem 1.3: Moving Block**
>
> A 10 kg block is moving on a horizontal surface with $\mu_k = 0.2$. Find the frictional force acting on it. (g = 10 m/s²)
>
> **Solution:**
>
> Since block is **already moving**, we use kinetic friction:
>
> $$f_k = \mu_k N = \mu_k mg = 0.2 \times 10 \times 10 = 20 \text{ N}$$
>
> Direction: Opposite to the direction of motion.
>
> **Answer:** 20 N (opposite to motion)

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Acceleration on Rough Incline**
>
> A block is released from rest on an incline of 30° with $\mu_k = 0.2$. Find its acceleration. (g = 10 m/s²)
>
> **Solution:**
>
> **Forces along the incline:**
>
> - Component of weight down: $mg\sin 30° = mg \times 0.5$

> - Kinetic friction up: $f_k = \mu_k N = \mu_k mg\cos 30°$
>
> **Normal force:** $N = mg\cos 30° = mg \times \frac{\sqrt{3}}{2}$
>
> **Net force down the plane:**
>
> $$F_{\text{net}} = mg\sin 30° - \mu_k mg\cos 30°$$

$$ma = mg(0.5 - 0.2 \times 0.866)$$

$$a = g(0.5 - 0.173)$$

$$a = 10 \times 0.327 = 3.27 \text{ m/s}^2$$
>
> **Answer:** 3.27 m/s² down the incline

> **↗ Connection · Problem 2.2: Minimum Force at Angle**
>
> A 20 kg block rests on a horizontal surface with $\mu_s = 0.5$. A force $F$ is applied at 30° above horizontal. Find minimum $F$ to just start motion. (g = 10 m/s²)
>
> **Solution:**
>
> **Vertical equilibrium:**
>
> $$N + F\sin 30° = mg$$

$$N = 200 - 0.5F$$
>
> **Horizontal (at limiting friction):**
>
> $$F\cos 30° = \mu_s N$$

$$F \times 0.866 = 0.5(200 - 0.5F)$$

$$0.866F = 100 - 0.25F$$

$$0.866F + 0.25F = 100$$

$$1.116F = 100$$

$$F = 89.6 \text{ N}$$
>
> **Answer:** 89.6 N

> **↗ Connection · Problem 2.3: Stopping Distance**
>
> A car moving at 72 km/h applies brakes. If $\mu_k = 0.6$ between tires and road, find the stopping distance. (g = 10 m/s²)
>
> **Solution:**
>
> **Convert velocity:**
>
> $$v = 72 \text{ km/h} = 72 \times \frac{5}{18} = 20 \text{ m/s}$$
>
> **Deceleration due to friction:**
>
> $$f_k = \mu_k mg = ma$$

$$a = \mu_k g = 0.6 \times 10 = 6 \text{ m/s}^2$$
>
> **Using $v^2 = u^2 + 2as$:**
>
> $$0 = 20^2 - 2 \times 6 \times s$$

$$12s = 400$$

$$s = 33.33 \text{ m}$$
>
> **Alternative (energy method):**
>
> $$\frac{1}{2}mv^2 = \mu_k mg \times s$$

$$s = \frac{v^2}{2\mu_k g} = \frac{400}{12} = 33.33 \text{ m}$$
>
> **Answer:** 33.33 m

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Two Blocks on Incline**
>
> Two blocks A (3 kg) and B (2 kg) are placed on a 30° incline. They are connected by a string. Coefficient of friction for A: $\mu_A = 0.3$; for B: $\mu_B = 0.2$. B is lower on the incline. Find:

> (a) Acceleration of the system

> (b) Tension in the string

> (g = 10 m/s²)
>
> **Solution:**
>
> **Step 1: Check if they move together**
>
> For block A (3 kg):
>
> - Down component: $3g\sin 30° = 15$ N

> - Friction (up): $f_A = 0.3 \times 3g\cos 30° = 0.3 \times 3 \times 10 \times 0.866 = 7.79$ N

> - Net down: $15 - 7.79 = 7.21$ N
>
> For block B (2 kg):
>
> - Down component: $2g\sin 30° = 10$ N

> - Friction (up): $f_B = 0.2 \times 2g\cos 30° = 0.2 \times 2 \times 10 \times 0.866 = 3.46$ N

> - Net down: $10 - 3.46 = 6.54$ N
>
> **For system (if moving together):**
>
> $$a_{\text{system}} = \frac{(15 + 10) - (7.79 + 3.46)}{3 + 2} = \frac{13.75}{5} = 2.75 \text{ m/s}^2$$
>
> **Check tension:**
>
> For block B (using system acceleration):
>
> $$2g\sin 30° - f_B - T = 2 \times 2.75$$

$$10 - 3.46 - T = 5.5$$

$$T = 1.04 \text{ N}$$
>
> This is positive, so string is taut. They move together.
>
> **Answers:**

> (a) 2.75 m/s²

> (b) 1.04 N

> **↗ Connection · Problem 3.2: Block on Accelerating Truck**
>
> A block of mass 10 kg is placed on a truck. The truck accelerates at 3 m/s². What minimum coefficient of friction is required to prevent the block from sliding backward? (g = 10 m/s²)
>
> **Solution:**
>
> **From ground frame:**

> For block to accelerate with truck at 3 m/s², friction must provide this acceleration.
>
> $$f = ma = 10 \times 3 = 30 \text{ N}$$
>
> **Normal force:**
>
> $$N = mg = 100 \text{ N}$$
>
> **Required coefficient:**
>
> $$\mu \geq \frac{f}{N} = \frac{30}{100} = 0.3$$
>
> **Answer:** $\mu_{\text{min}} = 0.3$
>
> **Alternative (truck frame - non-inertial):**

> In truck’s frame, block experiences:
>
> - Pseudo force: $ma = 30$ N (backward)

> - Friction: $f$ (forward, to balance)
>
> For equilibrium in truck frame:
>
> $$f = 30 \text{ N}$$
>
> Same answer: $\mu = 0.3$

> **↗ Connection · Problem 3.3: Wedge and Block System**
>
> A block of mass $m$ rests on a wedge of mass $M$ and angle $\theta$. The wedge is on a frictionless horizontal surface. Friction coefficient between block and wedge is $\mu$. Find the minimum horizontal force $F$ on the wedge such that the block doesn’t slide down the wedge.
>
> **Solution:**
>
> **Let wedge accelerate to the right with acceleration $a$.**
>
> **In wedge’s frame (non-inertial):**

> Block experiences:
>
> - Pseudo force: $ma$ (to the left, horizontal)

> - Weight: $mg$ (downward)

> - Normal: $N$ (perpendicular to wedge)

> - Friction: $f$ (along wedge surface)
>
> **For block to not slide, it must be stationary in wedge’s frame.**
>
> **Component perpendicular to wedge:**
>
> $$N = mg\cos\theta + ma\sin\theta$$
>
> **Component along wedge (upward positive):**

> For no sliding:
>
> $$f + ma\cos\theta = mg\sin\theta$$
>
> **Maximum friction available:**
>
> $$f_{\text{max}} = \mu N = \mu(mg\cos\theta + ma\sin\theta)$$
>
> **For minimum $a$, use maximum friction:**
>
> $$\mu(mg\cos\theta + ma\sin\theta) + ma\cos\theta = mg\sin\theta$$

$$\mu mg\cos\theta + \mu ma\sin\theta + ma\cos\theta = mg\sin\theta$$

$$ma(\mu\sin\theta + \cos\theta) = mg(\sin\theta - \mu\cos\theta)$$

$$a = g \frac{\sin\theta - \mu\cos\theta}{\cos\theta + \mu\sin\theta}$$
>
> **Force on wedge:**
>
> $$F = (M + m)a$$

$$\boxed{F = (M + m)g \frac{\sin\theta - \mu\cos\theta}{\cos\theta + \mu\sin\theta}}$$
>
> **Answer:** $F = (M+m)g\frac{\sin\theta - \mu\cos\theta}{\cos\theta + \mu\sin\theta}$

---

## Quick Revision Box

| Concept | Formula | Key Point |
| --- | --- | --- |
| **Static friction** | $f_s \leq \mu_s N$ | Self-adjusting |
| **Max static** | $f_{s,\text{max}} = \mu_s N$ | Limiting friction |
| **Kinetic friction** | $f_k = \mu_k N$ | Constant value |
| **Relationship** | $\mu_s > \mu_k$ | Harder to start than continue |
| **Angle of repose** | $\theta_R = \tan^{-1}(\mu_s)$ | Max angle before sliding |
| **Angle of friction** | $\lambda = \tan^{-1}(\mu_s)$ | Same as angle of repose |
| **Incline acceleration** | $a = g(\sin\theta - \mu_k\cos\theta)$ | Down the plane |
| **Stopping distance** | $s = \frac{v^2}{2\mu_k g}$ | Braking on horizontal surface |

---

## When to Use Friction Concepts

> **★ Key point · Decision Tree**
>
> **Use Static Friction ($\mu_s$) when:**
>
> 1. Object is at rest

> 2. Finding minimum force to START motion

> 3. Calculating angle of repose

> 4. Block on verge of slipping
>
> **Use Kinetic Friction ($\mu_k$) when:**
>
> 1. Object is ALREADY moving

> 2. Finding deceleration/stopping distance

> 3. Block sliding down incline
>
> **Remember:**
>
> - Friction opposes RELATIVE motion (not necessarily opposite to motion of object!)

> - Always draw FBD showing friction direction

> - Check if friction is limiting (maximum) or adjusting (less than maximum)

---

## JEE Exam Strategy

### Weightage

- **JEE Main:** 3-5 questions per year (high yield!)
- **JEE Advanced:** 2-3 problems, often combined with other concepts (4+ marks each)

### Common Question Types

1. **Angle of repose** (easy, 2 marks)
2. **Block on rough incline** (moderate, 3 marks)
3. **Minimum force to move** (easy-moderate, 2-3 marks)
4. **Stopping distance/time** (easy, 2 marks)
5. **Wedge-block with friction** (advanced, 4+ marks)
6. **Connected blocks with different μ** (moderate-advanced, 4 marks)

### Time-Saving Tricks

**Trick 1:** For angle of repose: $\theta_R = \tan^{-1}(\mu_s)$ (direct formula, no derivation needed!)

**Trick 2:** For stopping distance on horizontal surface: $s = \frac{v^2}{2\mu_k g}$ (memorize this!)

**Trick 3:** On incline, if $\theta < \tan^{-1}(\mu_s)$, block won’t slide (quick check)

**Trick 4:** Maximum static friction problems → set $f_s = \mu_s N$ (limiting case)

**Trick 5:** Remember $\mu_s > \mu_k$ always → if problem gives only one μ, clarify which type!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Friction opposes relative motion** — not just motion in general

> 2. **Static friction is self-adjusting** — can be anywhere from 0 to $\mu_s N$

> 3. **Kinetic friction is constant** — always equals $\mu_k N$ when moving

> 4. **$\mu_s > \mu_k$** — harder to start than to keep going (universal truth!)

> 5. **Angle of repose = Angle of friction** — both equal $\tan^{-1}(\mu_s)$

> 6. **Independent of area** — bigger contact area doesn’t mean more friction (surprising but true!)

> 7. **Direction matters** — always draw FBD to identify friction direction correctly
>
> **“Friction: The force that lets you walk, drive, and write — but also wears out your shoes!”**

---

## Related Topics

### Within Laws of Motion

- [Newton’s Second Law](../newtons-second-law/index.md) — F = ma with friction force
- [Newton’s Third Law](../newtons-third-law/index.md) — Friction is reaction to tendency of motion
- [Circular Dynamics](../circular-dynamics/index.md) — Friction provides centripetal force

### Connected Chapters

- [Work-Energy-Power](../../work-energy-power/index.md) — Friction does negative work
- [Rotational Motion](../../rotational-motion/index.md) — Rolling friction
- [Kinematics](../../kinematics/index.md) — Motion equations with friction deceleration

### Math Connections

- [Trigonometry](../../../mathematics/trigonometry/index.md) — $\tan^{-1}(\mu)$ calculations
- [Vectors](../../kinematics/motion-2d/index.md) — Resolving forces on inclines

---

From TestGuru · our mock-test platform

## You've read Friction - Static and Kinetic.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=laws-of-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Flaws-of-motion%2Ffriction%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/laws-of-motion/friction/",this.page.identifier="/physics/laws-of-motion/friction/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="freebodyDiagram" id="anim-freebodyDiagram-1795396423824709540"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-freebodyDiagram-1795396423824709540")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/laws-of-motion/friction/](https://jeenotes.in/physics/laws-of-motion/friction/) · raw HTML: `offline/physics/laws-of-motion/friction/index.html`_
