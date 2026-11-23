---
title: "Torque"
source: "https://jeenotes.in/physics/rotational-motion/torque/"
description: "Master torque, rotational equilibrium, and the rotational analog of Newton's Second Law for JEE Main & Advanced rotational dynamics."
updated: "2026-10-18"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 8"
html: "../../../../offline/physics/rotational-motion/torque/index.html"
extracted: "2026-11-23"
---

> Master torque, rotational equilibrium, and the rotational analog of Newton's Second Law for JEE Main & Advanced rotational dynamics.

## Prerequisites

Before studying this topic, review:

- [Newton’s Laws](https://jeenotes.in/physics/laws-of-motion/) - Force and acceleration
- [Moment of Inertia](../moment-of-inertia/index.md) - Rotational mass
- [Vectors](https://jeenotes.in/physics/kinematics/motion-2d/) - Cross product

---

## The Hook: Why Can’t You Open a Door Pushing Near the Hinges?

> **★ Key point · Connect: Real Life → Physics**
>
> Ever tried opening a heavy door by pushing near the hinges? You push with all your strength - nothing happens! Move to the handle at the edge - the same force swings it open effortlessly!
>
> In **Jawan’s** iconic train scene, when Shah Rukh Khan uses a long crowbar to pry open locked doors, he always applies force at the far end. Closer to the pivot? The door won’t budge!
>
> Watch any mechanic loosen a tight bolt - they use a **longer wrench**. Same force, but suddenly the bolt turns!
>
> **The mystery:** Why does the **same force** produce different rotational effects depending on **where** and **how** you apply it?

The answer: **Torque** - the rotational equivalent of force!

---

## The Core Concept

### What is Torque?

**Torque** (symbol: $\tau$, Greek letter “tau”) is the rotational analog of force - it measures the **turning effect** of a force about an axis.

> **◐ In Simple Terms**
>
> **Force makes things move linearly. Torque makes things rotate.**
>
> Just as:
>
> - **Force** = push or pull that changes linear motion

> - **Torque** = twist or turn that changes rotational motion
>
> **The key difference:** Torque depends on:
>
> 1. Magnitude of force ($F$)

> 2. Distance from axis ($r$)

> 3. Angle between $\vec{r}$ and $\vec{F}$

### Definition of Torque

**Vector definition:**

$$\boxed{\vec{\tau} = \vec{r} \times \vec{F}}$$

where:

- $\vec{r}$ = position vector from axis to point of application of force
- $\vec{F}$ = applied force
- $\times$ = cross product

**Magnitude:**

$$\boxed{\tau = rF\sin\theta}$$

where $\theta$ is the angle between $\vec{r}$ and $\vec{F}$.

**Alternative forms:**

$$\tau = r_{\perp} F = r F_{\perp}$$

where:

- $r_{\perp} = r\sin\theta$ = perpendicular distance from axis to line of action of force (**lever arm** or **moment arm**)

### Interactive Demo: Visualize Torque

Explore how force, distance, and angle combine to produce rotational effects.

- $F_{\perp} = F\sin\theta$ = component of force perpendicular to $\vec{r}$

**SI Unit:** Newton-meter (N·m)

**Direction:** Given by right-hand rule (perpendicular to plane containing $\vec{r}$ and $\vec{F}$)

---

## Memory Tricks & Patterns

### Mnemonic for Torque

**Memory Trick:** “**T**wist needs **R**adius and **F**orce” → $\tau = r \times F$

**Remember the cross:** Cross product → maximum when perpendicular ($\sin 90° = 1$), zero when parallel ($\sin 0° = 0$)

### Maximum Torque Rule

> **★ Key point · JEE Power Trick**
>
> **Torque is maximum when force is perpendicular to position vector**
>
> $$\tau_{max} = rF \quad (\text{when } \theta = 90°)$$
>
> **Torque is zero when:**
>
> 1. Force is zero ($F = 0$)

> 2. Applied at axis ($r = 0$)

> 3. Force is parallel/antiparallel to $\vec{r}$ ($\theta = 0°$ or $180°$)
>
> **Door example:**
>
> - Push perpendicular at handle → maximum torque

> - Push toward hinges → zero torque (along $\vec{r}$)

> - Push near hinges → small $r$ → small torque

### The “Lever Arm” Shortcut

**Memory trick:** “**L**onger **L**ever, **L**arger torque”

$$\tau = r_{\perp} \times F$$

where $r_{\perp}$ is the **perpendicular distance** from axis to the line of action of force.

**This is often the fastest way to calculate torque in JEE!**

---

## Newton’s Second Law for Rotation

Just as $\vec{F} = m\vec{a}$ for [linear motion](../../laws-of-motion/newtons-second-law/index.md):

$$\boxed{\vec{\tau} = I\vec{\alpha}}$$

where:

- $\tau$ = net torque (N·m)
- $I$ = moment of inertia (kg·m²)
- $\alpha$ = angular acceleration (rad/s²)

**For multiple torques:**

$$\boxed{\tau_{net} = \sum \tau_i = I\alpha}$$

**Sign convention:**

- **Counterclockwise (CCW) torque:** Positive (+)
- **Clockwise (CW) torque:** Negative (−)

> **◐ In simple terms · Analogy Time**
>
> | Linear Motion | Rotational Motion |

> | --- | --- |

> | $\vec{F} = m\vec{a}$ | $\vec{\tau} = I\vec{\alpha}$ |

> | Force $F$ | Torque $\tau$ |

> | Mass $m$ | Moment of inertia $I$ |

> | Acceleration $a$ | Angular acceleration $\alpha$ |
>
> **Pattern:** Replace $F \to \tau$, $m \to I$, $a \to \alpha$ - and you’ve gone from linear to rotational!

---

## Rotational Equilibrium

### Conditions for Equilibrium

A body is in **rotational equilibrium** when it’s not rotating or rotating with constant angular velocity.

**Condition:** Net torque about any axis = 0

$$\boxed{\sum \vec{\tau} = 0}$$

Or component-wise:

$$\sum \tau_{CW} = \sum \tau_{CCW}$$

**For complete equilibrium (both translational + rotational):**

1. **Translational equilibrium:** $\sum \vec{F} = 0$ (no linear acceleration)
2. **Rotational equilibrium:** $\sum \vec{\tau} = 0$ (no angular acceleration)

> **★ Key point · JEE Shortcut**
>
> **For equilibrium problems:**
>
> 1. Choose a **convenient axis** (usually where you have unknown forces - their torque becomes zero!)

> 2. Write torque equation: $\sum \tau = 0$

> 3. Choose positive direction (CCW is standard)

> 4. Solve for unknowns
>
> **Pro tip:** In equilibrium, $\sum \tau = 0$ about **any** axis. So pick the axis that makes calculation easiest!

---

## Important Cases of Torque

### Case 1: Force Applied Perpendicular at Distance $r$

$$\tau = rF$$

**Example:** Opening a door by pushing perpendicular at handle

### Case 2: Force at Angle $\theta$

$$\tau = rF\sin\theta$$

**Example:** Pulling a door at an angle

### Case 3: Multiple Forces

$$\tau_{net} = \tau_1 + \tau_2 + \tau_3 + \cdots$$

(with appropriate signs for direction)

### Case 4: Continuous Force Distribution

$$\tau = \int r dF$$

**Example:** Torque due to gravity on a rod - integrate along length

---

## Torque Due to Gravity

For a rigid body, gravity acts at the **[centre of mass](../centre-of-mass/index.md)**.

$$\boxed{\tau_g = r_{cm} \times Mg}$$

where $r_{cm}$ is the position of COM from the axis.

**Magnitude:**

$$\tau_g = r_{cm} \cdot Mg \cdot \sin\theta$$

**This simplifies many problems!** Treat entire weight as acting at COM.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Torque with Force**
>
> **Mistake:** Thinking larger force always means larger torque
>
> **Truth:** Torque depends on **both** force AND distance: $\tau = rF\sin\theta$
>
> **Example:**
>
> - 10 N at 2 m perpendicular: $\tau = 20$ N·m

> - 100 N at 0.1 m perpendicular: $\tau = 10$ N·m

> - Smaller force wins!

> **⚠ Trap #2: Using Total Distance Instead of Perpendicular Distance**
>
> **Mistake:** $\tau = r F$ when force is not perpendicular
>
> **Correct:** $\tau = r_{\perp} F$ or $\tau = r F_{\perp}$ or $\tau = rF\sin\theta$
>
> **Example:** Force at 30° to position vector:
>
> - Wrong: $\tau = rF$

> - Correct: $\tau = rF\sin 30° = 0.5rF$

> **⚠ Trap #3: Wrong Sign Convention**
>
> **Mistake:** Mixing up clockwise and counterclockwise signs
>
> **Fix:** Choose a convention at the start (CCW = +, CW = −) and **stick to it** throughout the problem!
>
> **Check:** Net torque direction matches angular acceleration direction

> **⚠ Trap #4: Forgetting Torque is Zero for Certain Cases**
>
> **Mistake:** Calculating torque for force through axis or parallel to $\vec{r}$
>
> **Remember - Torque is ZERO when:**
>
> - Force passes through axis ($r = 0$)

> - Force parallel to $\vec{r}$ ($\sin\theta = 0$)

> - Force is zero ($F = 0$)
>
> **Example:** Tension in a string pulling radially on a pulley produces zero torque!

---

## Worked Examples

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic Torque Calculation**
>
> A force of 10 N is applied perpendicular to a wrench at a distance of 0.3 m from the bolt. Find the torque.
>
> **Solution:**
>
> Force is perpendicular, so $\theta = 90°$:
>
> $$\tau = rF\sin\theta = 0.3 \times 10 \times \sin 90°$$

$$\tau = 0.3 \times 10 \times 1 = \boxed{3 \text{ N}\cdot\text{m}}$$

> **↗ Connection · Problem 2: Torque at an Angle**
>
> A force of 20 N is applied at a distance of 0.5 m from the axis at an angle of 30° to the position vector. Calculate the torque.
>
> **Solution:**
>
> $$\tau = rF\sin\theta = 0.5 \times 20 \times \sin 30°$$

$$\tau = 0.5 \times 20 \times 0.5 = \boxed{5 \text{ N}\cdot\text{m}}$$

> **↗ Connection · Problem 3: Angular Acceleration**
>
> A wheel of moment of inertia 2 kg·m² experiences a net torque of 8 N·m. Find the angular acceleration.
>
> **Solution:**
>
> Using $\tau = I\alpha$:
>
> $$\alpha = \frac{\tau}{I} = \frac{8}{2} = \boxed{4 \text{ rad/s}^2}$$

### Level 2: JEE Main

> **↗ Connection · Problem 4: Seesaw Equilibrium**
>
> A uniform seesaw of length 4 m and mass 20 kg is balanced on a pivot at its center. A child of mass 30 kg sits 1.5 m from the left end. Where should a 40 kg child sit from the right end to balance the seesaw?
>
> **Solution:**
>
> **Choose pivot as axis** (weight of seesaw produces zero torque about center).
>
> **Left child:** Distance from center = $2 - 1.5 = 0.5$ m (left side)
>
> **Right child:** Let distance from center = $x$ (right side)
>
> **Torque balance (taking CCW as positive):**
>
> $$\tau_{left} + \tau_{right} = 0$$

$$30g(0.5) - 40g(x) = 0$$

$$15g = 40gx$$

$$x = \frac{15}{40} = 0.375 \text{ m from center}$$
>
> Distance from right end: $2 - 0.375 = \boxed{1.625 \text{ m}}$

> **↗ Connection · Problem 5: Ladder Against Wall**
>
> A uniform ladder of length 5 m and mass 10 kg leans against a smooth wall at an angle of 60° to the ground. The ground is rough. Find the normal force from the wall.
>
> **Solution:**
>
> **Forces:**
>
> - Weight $W = 10g$ at center (2.5 m from bottom)

> - Normal from ground: $N_1$ (upward)

> - Normal from wall: $N_2$ (horizontal)

> - Friction from ground: $f$ (horizontal)
>
> **Taking torque about bottom point** (eliminates $N_1$ and $f$):
>
> **Torque by weight:**
>
> - Perpendicular distance from bottom = $2.5\cos 60° = 1.25$ m

> - $\tau_W = 10g \times 1.25$ (clockwise)
>
> **Torque by $N_2$:**
>
> - Perpendicular distance = $5\sin 60° = 5\sqrt{3}/2$ m

> - $\tau_{N_2} = N_2 \times 5\sqrt{3}/2$ (counterclockwise)
>
> **Equilibrium:**
>
> $$N_2 \times \frac{5\sqrt{3}}{2} = 10g \times 1.25$$

$$N_2 = \frac{10g \times 1.25 \times 2}{5\sqrt{3}} = \frac{25g}{5\sqrt{3}} = \frac{5g}{\sqrt{3}}$$

$$N_2 = \frac{5 \times 10}{\sqrt{3}} = \frac{50}{\sqrt{3}} \approx \boxed{28.9 \text{ N}}$$

> **↗ Connection · Problem 6: Pulley System**
>
> A uniform disc of mass 2 kg and radius 0.5 m is free to rotate about a horizontal axis through its center. A rope is wrapped around it with masses 1 kg and 3 kg hanging from its ends. Find:

> a) Angular acceleration of the disc

> b) Tensions in the rope
>
> **Solution:**
>
> **Moment of inertia of disc:** $I = \frac{MR^2}{2} = \frac{2 \times (0.5)^2}{2} = 0.25$ kg·m²
>
> **For 3 kg mass (downward positive):**
>
> $$3g - T_1 = 3a \quad \text{...(1)}$$
>
> **For 1 kg mass (upward positive):**
>
> $$T_2 - 1g = 1a \quad \text{...(2)}$$
>
> **For disc (torque equation):**
>
> $$\tau_{net} = I\alpha$$

$$T_1 R - T_2 R = I\alpha$$
>
> Since $a = R\alpha$:
>
> $$R(T_1 - T_2) = I \frac{a}{R}$$

$$T_1 - T_2 = \frac{Ia}{R^2} \quad \text{...(3)}$$
>
> **Adding (1) and (2):**
>
> $$3g - T_1 + T_2 - g = 4a$$

$$2g + (T_2 - T_1) = 4a$$
>
> From (3): $T_2 - T_1 = -\frac{Ia}{R^2}$
>
> $$2g - \frac{Ia}{R^2} = 4a$$

$$2g = 4a + \frac{Ia}{R^2} = a\left(4 + \frac{I}{R^2}\right)$$

$$a = \frac{2g}{4 + I/R^2} = \frac{2 \times 10}{4 + 0.25/0.25} = \frac{20}{4 + 1} = \boxed{4 \text{ m/s}^2}$$
>
> **Angular acceleration:**
>
> $$\alpha = \frac{a}{R} = \frac{4}{0.5} = \boxed{8 \text{ rad/s}^2}$$
>
> **From (1):** $T_1 = 3g - 3a = 30 - 12 = \boxed{18 \text{ N}}$
>
> **From (2):** $T_2 = g + a = 10 + 4 = \boxed{14 \text{ N}}$

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Rod Released from Horizontal Position**
>
> A uniform rod of mass $M$ and length $L$ is hinged at one end and released from horizontal position. Find:

> a) Initial angular acceleration

> b) Linear acceleration of free end

> c) Reaction at hinge at initial moment
>
> **Solution:**
>
> **a) Initial angular acceleration:**
>
> **Torque about hinge** (by weight acting at COM):
>
> $$\tau = Mg \times \frac{L}{2} \times \sin 90° = \frac{MgL}{2}$$
>
> **Moment of inertia about hinge:**
>
> $$I = \frac{ML^2}{3}$$
>
> **Angular acceleration:**
>
> $$\alpha = \frac{\tau}{I} = \frac{MgL/2}{ML^2/3} = \frac{3g}{2L} = \boxed{\frac{3g}{2L}}$$
>
> **b) Linear acceleration of free end:**
>
> $$a = L\alpha = L \times \frac{3g}{2L} = \boxed{\frac{3g}{2}}$$
>
> (Greater than $g$! Free end accelerates faster than free fall!)
>
> **c) Reaction at hinge:**
>
> **At initial moment, rod is horizontal.**
>
> **COM acceleration:** $a_{cm} = \frac{L}{2} \alpha = \frac{L}{2} \times \frac{3g}{2L} = \frac{3g}{4}$ (downward)
>
> **Vertical forces:**
>
> $$Mg - R = M a_{cm} = M \times \frac{3g}{4}$$

$$R = Mg - \frac{3Mg}{4} = \boxed{\frac{Mg}{4}}$$
>
> **Horizontal component:** $R_x = 0$ (no horizontal acceleration of COM initially)
>
> **Total reaction:** $\boxed{R = \frac{Mg}{4} \text{ (vertical)}}$

> **↗ Connection · Problem 8: Toppling vs Sliding**
>
> A uniform cube of side $a$ and mass $m$ rests on a rough horizontal surface (coefficient of friction $\mu$). A horizontal force $F$ is applied at height $h$ from the base. Find:

> a) Condition for sliding

> b) Condition for toppling

> c) Which occurs first if $h = 3a/4$?
>
> **Solution:**
>
> **a) Condition for sliding:**
>
> Maximum friction: $f_{max} = \mu N = \mu mg$
>
> For sliding: $F > \mu mg$
>
> $$\boxed{F > \mu mg}$$
>
> **b) Condition for toppling:**
>
> Cube topples about the edge opposite to the applied force.
>
> **Torque about edge:**
>
> - By $F$: $\tau_F = F \times h$ (clockwise)

> - By weight: $\tau_W = mg \times \frac{a}{2}$ (counterclockwise, perpendicular distance from edge to COM)
>
> **For toppling:**
>
> $$F \times h > mg \times \frac{a}{2}$$

$$\boxed{F > \frac{mga}{2h}}$$
>
> **c) For $h = 3a/4$:**
>
> **Sliding condition:** $F > \mu mg$
>
> **Toppling condition:** $F > \frac{mga}{2 \times 3a/4} = \frac{2mg}{3}$
>
> **Comparison:**
>
> - If $\mu > \frac{2}{3}$: Toppling occurs first (at $F = \frac{2mg}{3}$)

> - If $\mu < \frac{2}{3}$: Sliding occurs first (at $F = \mu mg$)
>
> For $h = 3a/4$:
>
> - Toppling threshold: $\frac{2mg}{3}$

> - Sliding threshold: $\mu mg$
>
> **If $\mu = 0.5 < 2/3$:** Sliding first

> **If $\mu = 0.8 > 2/3$:** Toppling first

> **↗ Connection · Problem 9: Cylinder on Accelerating Truck**
>
> A solid cylinder of radius $R$ and mass $m$ is placed on a truck. The truck accelerates with acceleration $a$. What maximum acceleration can the truck have without the cylinder slipping? Coefficient of friction = $\mu$.
>
> **Solution:**
>
> Let the cylinder’s COM acceleration (ground frame) be $a_c$ and its angular acceleration $\alpha$. Friction $f$ on the cylinder acts forward.
>
> **Translation:** $f = ma_c$ &mldr;(1)
>
> **Rotation about COM:** $fR = \frac{mR^2}{2}\alpha$ &mldr;(2)
>
> **No slipping on the truck floor:** the contact point moves with the truck
>
> $$a - a_c = R\alpha \quad \text{...(3)}$$
>
> From (1) and (2): $a_c = \frac{f}{m}$, $R\alpha = \frac{2f}{m}$, so (3) gives
>
> $$a = \frac{3f}{m} \;\Rightarrow\; f = \frac{ma}{3} \quad \text{...(4)}$$
>
> **For no slipping:**
>
> $$\frac{ma}{3} \leq \mu mg \;\Rightarrow\; \boxed{a \leq 3\mu g}$$
>
> **Maximum acceleration:** $a_{max} = 3\mu g$ (the cylinder lags at $a_c = a/3$ and rolls backward relative to the truck)

---

## Real-World Applications

1. **Wrenches and Spanners:** Longer handle → larger $r$ → more torque for same force
2. **Doors:** Handle at edge → maximum torque; push near hinge → almost no rotation
3. **Seesaws and Balances:** Torque balance determines equilibrium position
4. **Steering Wheels:** Large diameter → easier to turn (more torque for same force)
5. **Tightrope Walking:** Long pole increases moment of inertia → resists toppling torque
6. **Gyroscopes in Phones:** Detect orientation changes via torque measurements

---

## Quick Revision Box

| Concept | Formula | Key Point |
| --- | --- | --- |
| **Torque** | $\vec{\tau} = \vec{r} \times \vec{F}$ | Turning effect of force |
| **Magnitude** | $\tau = rF\sin\theta$ | Maximum when $\perp$ |
| **Lever arm** | $\tau = r_\perp F$ | Perpendicular distance |
| **Newton’s 2nd Law** | $\tau = I\alpha$ | Rotational analog |
| **Equilibrium** | $\sum \tau = 0$ | No angular acceleration |
| **Direction** | Right-hand rule | CCW = +, CW = − |

**Memory aid:**

- **Force** → linear motion → $F = ma$
- **Torque** → rotational motion → $\tau = I\alpha$

---

## Decision Tree: Solving Torque Problems

> **★ Key point · Step-by-Step Strategy**
>
> **Step 1:** Identify all forces and their points of application
>
> **Step 2:** Choose an axis of rotation
>
> - For equilibrium: Choose axis through unknown forces (their torque = 0)

> - For dynamics: Usually axis through hinge/pivot
>
> **Step 3:** Calculate torque for each force
>
> - Use $\tau = r_\perp F$ (easiest) or $\tau = rF\sin\theta$

> - Assign signs: CCW = +, CW = −
>
> **Step 4:** Apply equation
>
> - Equilibrium: $\sum \tau = 0$

> - Dynamics: $\sum \tau = I\alpha$
>
> **Step 5:** Solve for unknowns
>
> **Pro tip:** For equilibrium, try different axes - pick the one that eliminates most unknowns!

---

## Practice Problems

### Foundation Level

1. A force of 50 N is applied at the edge of a door 0.8 m wide at an angle of 60° to the door. Find the torque about the hinges.
2. A disc of moment of inertia 0.5 kg·m² is subjected to a torque of 2 N·m. Find the angular acceleration.
3. A uniform rod of length 2 m and mass 5 kg is pivoted at its center. Masses of 2 kg and 3 kg are hung from its ends. Is it in equilibrium?

### JEE Main Level

4. A uniform beam of length 6 m and mass 20 kg is supported at its ends. A person of mass 60 kg stands 2 m from one end. Find the reactions at the supports.
5. A wheel of radius 0.4 m and moment of inertia 2 kg·m² is rotating at 10 rad/s. A tangential force of 5 N acts on it for 4 seconds. Find the final angular velocity.
6. A thin rod of length $L$ and mass $M$ is hinged at one end. What horizontal force applied at the free end will keep it inclined at 30° to vertical in equilibrium?

### JEE Advanced Level

7. A solid sphere and a hollow sphere of same mass and radius roll down an incline. Compare the forces of friction acting on them.
8. A uniform rod AB of mass $m$ and length $L$ is placed on a smooth table. Two forces each of magnitude $F$ act at A and B perpendicular to the rod in opposite directions. Find:
   a) Linear acceleration of COM
   b) Angular acceleration about COM
9. A disc of mass $M$ and radius $R$ has a string wrapped around it with a mass $m$ hanging. The disc is free to rotate about a fixed horizontal axis through its center. Find:
   a) Acceleration of mass $m$
   b) Tension in string
   c) Angular acceleration of disc

---

## Connection to Other Topics

**Prerequisites you should know:**

- [Newton’s Laws](https://jeenotes.in/physics/laws-of-motion/) - $\tau$ is rotational analog of $F$
- [Moment of Inertia](../moment-of-inertia/index.md) - Needed for $\tau = I\alpha$
- [Vectors](https://jeenotes.in/physics/kinematics/motion-2d/) - Cross product for torque

**What’s next:**

- [Angular Momentum](../angular-momentum/index.md) - $\tau = \frac{dL}{dt}$
- [Rolling Motion](../rolling-motion/index.md) - Torque by friction enables rolling
- [Work in Rotation](https://jeenotes.in/physics/work-energy-power/) - $W = \tau \theta$

**Cross-chapter links:**

- [Equilibrium of Rigid Bodies](../../laws-of-motion/index.md) - Static equilibrium uses $\sum \tau = 0$
- [Circular Motion](../../kinematics/circular-motion/index.md) - Centripetal force can create torque
- [Gravitation](../../gravitation/index.md) - Torque by gravitational forces

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Torque is the rotational analog of force** - it’s the “twist” that causes angular acceleration, just as force causes linear acceleration

> 2. **Three ways to calculate torque:**
>
>    - $\tau = rF\sin\theta$ (when you know the angle)

>    - $\tau = r_\perp F$ (perpendicular distance - **often fastest!**)

>    - $\tau = rF_\perp$ (perpendicular component of force)

> 3. **Torque is zero when:**
>
>    - Force through axis ($r = 0$)

>    - Force parallel to $\vec{r}$ ($\sin\theta = 0$)

>    - No force ($F = 0$)

> 4. **Newton’s Second Law for rotation:** $\tau = I\alpha$ (just like $F = ma$)

> 5. **Equilibrium strategy:** Choose axis through unknown forces → their torque = 0 → easier calculation!

> 6. **JEE loves:** Ladder problems, seesaw/beam equilibrium, pulley with disc/cylinder, toppling vs sliding

> 7. **Sign convention matters:** CCW = +, CW = − (or vice versa, but be consistent!)
>
> **“Force says ‘move,’ torque says ’turn’ - master torque and you control rotation!”**
>
> This topic is a goldmine - 3-5 questions (12-20 marks) in JEE involve torque. Practice equilibrium and $\tau = I\alpha$ problems until they become second nature!

---

From TestGuru · our mock-test platform

## You've read Torque.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=rotational-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Frotational-motion%2Ftorque%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/rotational-motion/torque/",this.page.identifier="/physics/rotational-motion/torque/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="rotationalMotion" id="anim-rotationalMotion-1795396424218689005"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-rotationalMotion-1795396424218689005")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/rotational-motion/torque/](https://jeenotes.in/physics/rotational-motion/torque/) · raw HTML: `offline/physics/rotational-motion/torque/index.html`_
