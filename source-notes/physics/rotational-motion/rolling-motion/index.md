---
title: "Rolling Motion"
source: "https://jeenotes.in/physics/rotational-motion/rolling-motion/"
description: "Master pure rolling, slipping, and rolling motion on inclines - essential concepts for JEE Main & Advanced rotational dynamics problems."
updated: "2026-10-18"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 8"
html: "../../../../offline/physics/rotational-motion/rolling-motion/index.html"
extracted: "2026-11-23"
---

> Master pure rolling, slipping, and rolling motion on inclines - essential concepts for JEE Main & Advanced rotational dynamics problems.

## Prerequisites

Before studying this topic, review:

- [Moment of Inertia](../moment-of-inertia/index.md) - $I$ values for common shapes
- [Torque](../torque/index.md) - Rotational dynamics
- [Work-Energy Theorem](https://jeenotes.in/physics/work-energy-power/work-energy-theorem/) - Energy conservation

---

## The Hook: Why Does a Ring Lose the Race to a Sphere?

> **★ Key point · Connect: Real Life → Physics**
>
> Imagine this experiment: Take a solid sphere, a hollow sphere, a disc, and a ring - all same mass and radius. Release them simultaneously from the top of an incline. Which reaches the bottom first?
>
> Surprisingly, it’s NOT a tie! The solid sphere wins every time, followed by the disc, then the hollow sphere, with the ring coming in last.
>
> In **Jawan’s** train chase scene, when objects roll down the train’s tilted floor, they don’t all slide at the same speed. Compact objects accelerate faster than hollow ones!
>
> Even in cricket, when a ball rolls on the pitch after bouncing, it’s not just sliding - it’s a beautiful combination of rotation and translation!
>
> **The mystery:** Why do objects of the same mass and radius roll down at **different speeds**? What’s slowing some down more than others?

The answer lies in **Rolling Motion** - the elegant marriage of translation and rotation!

---

## The Core Concept

### What is Rolling Motion?

**Rolling motion** is the combination of **translational motion** (movement of center of mass) and **rotational motion** (spinning about center of mass).

> **◐ In Simple Terms**
>
> **Rolling = Sliding + Spinning**
>
> When a wheel rolls on the ground:
>
> - Its **center moves forward** (translation)

> - The wheel **spins about its center** (rotation)
>
> **The magic:** These two motions are connected! For pure rolling (no slipping), there’s a specific relationship between how fast the center moves and how fast the wheel spins.

### Types of Rolling

**1. Pure Rolling (Rolling Without Slipping)**

- Contact point has **zero velocity** relative to surface
- Condition: $v_{cm} = R\omega$
- Most common in JEE problems

**2. Rolling with Slipping**

- Contact point has **non-zero velocity** relative to surface
- Friction is kinetic (opposes slipping)
- $v_{cm} \neq R\omega$

**3. Slipping Without Rolling**

- Pure translation, no rotation
- Object slides like a block
- $\omega = 0$, friction is kinetic

### Interactive Demo: Visualize Rolling Motion

See how translation and rotation combine in pure rolling.

---

## Pure Rolling Condition

### The Golden Rule

For pure rolling (no slipping):

$$\boxed{v_{cm} = R\omega}$$

where:

- $v_{cm}$ = velocity of center of mass
- $R$ = radius of the rolling object
- $\omega$ = angular velocity

**In differential form:**

$$\boxed{a_{cm} = R\alpha}$$

where $a_{cm}$ is linear acceleration and $\alpha$ is angular acceleration.

> **★ Key point · Memory Trick**
>
> **“Contact point is frozen”** → velocity at contact = 0
>
> **Proof:**
>
> - Point at top of wheel: velocity = $v_{cm} + R\omega$ (both forward)

> - Point at contact: velocity = $v_{cm} - R\omega$
>
> For pure rolling: Contact velocity = 0
>
> $$v_{cm} - R\omega = 0$$

$$\boxed{v_{cm} = R\omega}$$
>
> **Remember:** The contact point is momentarily at rest (like stepping stones)!

### Velocity at Different Points

For a rolling wheel (pure rolling):

**Point at top:** $v_{top} = v_{cm} + R\omega = 2v_{cm}$ (fastest!)

**Point at center:** $v_{center} = v_{cm}$

**Point at contact:** $v_{contact} = v_{cm} - R\omega = 0$ (stationary!)

**Point at angle $\theta$ from vertical:**

- Horizontal component: $v_x = v_{cm}(1 + \cos\theta)$
- Vertical component: $v_y = v_{cm}\sin\theta$
- Magnitude: $v = v_{cm}\sqrt{2(1 + \cos\theta)}$

---

## Kinetic Energy in Rolling Motion

Rolling objects have **both** translational and rotational kinetic energy!

$$\boxed{KE_{total} = KE_{trans} + KE_{rot} = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2}$$

**For pure rolling** ($v_{cm} = R\omega$, so $\omega = v_{cm}/R$):

$$KE_{total} = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}I_{cm}\left(\frac{v_{cm}}{R}\right)^2$$

$$KE_{total} = \frac{1}{2}Mv_{cm}^2\left(1 + \frac{I_{cm}}{MR^2}\right)$$

Using radius of gyration ($k^2 = I_{cm}/M$):

$$\boxed{KE_{total} = \frac{1}{2}Mv_{cm}^2\left(1 + \frac{k^2}{R^2}\right)}$$

> **★ Key point · JEE Power Formula**
>
> **Energy distribution in pure rolling:**
>
> $$\frac{KE_{rot}}{KE_{trans}} = \frac{I_{cm}/MR^2}{1} = \frac{I_{cm}}{MR^2}$$
>
> **For common shapes:**
>
> | Object | $I_{cm}/MR^2$ | $KE_{rot}/KE_{trans}$ | $KE_{rot}/KE_{total}$ |

> | --- | --- | --- | --- |

> | **Ring** | 1 | 1 : 1 | 50% |

> | **Disc/Cylinder** | 1/2 | 1 : 2 | 33% |

> | **Solid Sphere** | 2/5 | 2 : 5 | 29% |

> | **Hollow Sphere** | 2/3 | 2 : 3 | 40% |
>
> **Pattern:** More mass at rim → more rotational energy!

---

## Rolling Down an Incline

### Acceleration of Rolling Object

For an object rolling down an incline (angle $\theta$, no slipping):

**Using energy method or force analysis:**

$$\boxed{a = \frac{g\sin\theta}{1 + I_{cm}/MR^2} = \frac{g\sin\theta}{1 + k^2/R^2}}$$

**Alternative form:**

$$a = \frac{g\sin\theta}{1 + I_{cm}/MR^2}$$

> **★ Key point · Key Insight**
>
> **Acceleration is INDEPENDENT of mass and radius!**
>
> Only depends on:
>
> 1. Angle of incline ($\theta$)

> 2. Shape of object (through $I_{cm}/MR^2$ ratio)
>
> **This is why ring vs sphere race result is predictable!**

### Comparison of Accelerations

| Object | $I_{cm}/MR^2$ | Acceleration | Relative Speed |
| --- | --- | --- | --- |
| **Solid Sphere** | 2/5 | $\frac{5g\sin\theta}{7}$ | Fastest |
| **Disc/Solid Cylinder** | 1/2 | $\frac{2g\sin\theta}{3}$ | Medium |
| **Hollow Sphere** | 2/3 | $\frac{3g\sin\theta}{5}$ | Slow |
| **Ring/Hollow Cylinder** | 1 | $\frac{g\sin\theta}{2}$ | Slowest |
| **Block (sliding, no friction)** | 0 | $g\sin\theta$ | Reference |

**Memory trick:** “**S**olid **S**peeds, **R**ing **R**etards”

**Ranking (fastest to slowest):**
Sliding block > Solid sphere > Disc > Hollow sphere > Ring

---

## Friction in Rolling Motion

### Role of Friction

**Key paradox:** Friction is necessary for pure rolling, but **does no work**!

**Why friction is needed:**

- Without friction, object would slide (not roll)
- Friction provides the torque: $\tau = fR$
- This torque causes angular acceleration: $\alpha = fR/I$

**Why friction does no work:**

- Work = Force × displacement
- Contact point has **zero displacement** during pure rolling
- $W = f \times 0 = 0$!

> **◐ In simple terms · Static vs Kinetic Friction**
>
> **Pure rolling:** Static friction (contact point stationary)
>
> - Magnitude adjusts to prevent slipping

> - $f \leq \mu_s N$ (self-adjusting, can be less than max)
>
> **Slipping:** Kinetic friction
>
> - $f_k = \mu_k N$ (constant magnitude)

> - Opposes relative motion at contact

### Friction Force in Pure Rolling

For object rolling down incline:

**From force analysis:**

$$f = \frac{Mg\sin\theta}{1 + MR^2/I_{cm}}$$

**Alternative:**

$$f = \frac{(I_{cm}/MR^2) \times Mg\sin\theta}{1 + I_{cm}/MR^2}$$

**For pure rolling to occur:**

$$f \leq f_{max} = \mu_s Mg\cos\theta$$

**Minimum coefficient of friction needed:**

$$\boxed{\mu_s \geq \frac{\tan\theta}{1 + MR^2/I_{cm}}}$$

---

## Time to Reach Bottom of Incline

For incline of length $L$, using $s = ut + \frac{1}{2}at^2$ with $u = 0$:

$$L = \frac{1}{2}at^2$$

$$\boxed{t = \sqrt{\frac{2L}{a}} = \sqrt{\frac{2L(1 + I_{cm}/MR^2)}{g\sin\theta}}}$$

**Ratio of times for different objects:**

Since $t \propto \sqrt{1 + I_{cm}/MR^2}$:

$$t_{ring} : t_{disc} : t_{sphere} = \sqrt{2} : \sqrt{1.5} : \sqrt{1.4}$$

$$\approx 1.41 : 1.22 : 1.18$$

**Solid sphere reaches bottom fastest!**

---

## Velocity at Bottom of Incline

**Using energy conservation:**

Initial energy: $PE = Mgh$ (where $h = L\sin\theta$)

Final energy: $KE = \frac{1}{2}Mv^2\left(1 + \frac{I_{cm}}{MR^2}\right)$

$$Mgh = \frac{1}{2}Mv^2\left(1 + \frac{I_{cm}}{MR^2}\right)$$

$$\boxed{v = \sqrt{\frac{2gh}{1 + I_{cm}/MR^2}}}$$

**For different objects:**

| Object | $I_{cm}/MR^2$ | Velocity at bottom |
| --- | --- | --- |
| **Solid Sphere** | 2/5 | $\sqrt{\frac{10gh}{7}}$ |
| **Disc** | 1/2 | $\sqrt{\frac{4gh}{3}}$ |
| **Hollow Sphere** | 2/3 | $\sqrt{\frac{6gh}{5}}$ |
| **Ring** | 1 | $\sqrt{gh}$ |

**Notice:** Independent of mass and radius, depends only on shape!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Assuming Friction Does Work**
>
> **Mistake:** Calculating work done by friction as $W = f \times d$
>
> **Truth:** In pure rolling, contact point has zero displacement → friction does **zero work**!
>
> **Work-energy theorem:**
>
> $$Mgh = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2$$
>
> (No friction work term!)
>
> **When does friction do work?** Only during slipping (when $v_{cm} \neq R\omega$)

> **⚠ Trap #2: Forgetting Rotational KE**
>
> **Mistake:** $Mgh = \frac{1}{2}Mv^2$ (forgetting rotation)
>
> **Correct:** $Mgh = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2$
>
> **Result:** Rolling objects reach bottom with **less** linear speed than sliding objects (some energy goes to rotation)

> **⚠ Trap #3: Using $v = R\omega$ When There's Slipping**
>
> **Mistake:** Applying $v_{cm} = R\omega$ even when object is slipping
>
> **Truth:** $v_{cm} = R\omega$ is the **condition** for pure rolling, not a general law!
>
> **Check:** If slipping occurs, $v_{cm} \neq R\omega$ and friction is kinetic

> **⚠ Trap #4: Thinking Heavier Objects Roll Faster**
>
> **Mistake:** “Ring is heavier, so it rolls faster down the incline”
>
> **Truth:** Acceleration is **independent of mass**! Only shape (via $I/MR^2$) matters.
>
> **Remember:** Ring and sphere of same mass/radius → sphere wins!

---

## Worked Examples

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic Pure Rolling**
>
> A disc of radius 0.5 m rolls without slipping with its center moving at 4 m/s. Find:

> a) Angular velocity

> b) Velocity of topmost point

> c) Velocity of contact point
>
> **Solution:**
>
> **a) For pure rolling:** $v_{cm} = R\omega$
>
> $$\omega = \frac{v_{cm}}{R} = \frac{4}{0.5} = \boxed{8 \text{ rad/s}}$$
>
> **b) Topmost point:**
>
> $$v_{top} = v_{cm} + R\omega = 4 + 0.5(8) = 4 + 4 = \boxed{8 \text{ m/s}}$$
>
> (Twice the center velocity!)
>
> **c) Contact point:**
>
> $$v_{contact} = v_{cm} - R\omega = 4 - 4 = \boxed{0 \text{ m/s}}$$
>
> (Instantaneously at rest!)

> **↗ Connection · Problem 2: Energy in Rolling**
>
> A solid cylinder of mass 5 kg and radius 0.2 m rolls with center velocity 3 m/s. Find:

> a) Rotational kinetic energy

> b) Translational kinetic energy

> c) Total kinetic energy
>
> **Solution:**
>
> **a) Rotational KE:**
>
> $I = \frac{MR^2}{2} = \frac{5 \times (0.2)^2}{2} = 0.1$ kg·m²
>
> $\omega = \frac{v}{R} = \frac{3}{0.2} = 15$ rad/s
>
> $$KE_{rot} = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 0.1 \times 15^2 = \boxed{11.25 \text{ J}}$$
>
> **b) Translational KE:**
>
> $$KE_{trans} = \frac{1}{2}Mv^2 = \frac{1}{2} \times 5 \times 3^2 = \boxed{22.5 \text{ J}}$$
>
> **c) Total:**
>
> $$KE_{total} = 11.25 + 22.5 = \boxed{33.75 \text{ J}}$$
>
> **Ratio:** $KE_{rot} : KE_{trans} = 1 : 2$ (characteristic of cylinder/disc!)

### Level 2: JEE Main

> **↗ Connection · Problem 3: Rolling Down Incline**
>
> A solid sphere of mass 2 kg and radius 0.1 m rolls down an incline of angle 30° without slipping. Find:

> a) Acceleration of center of mass

> b) Friction force acting on it
>
> **Solution:**
>
> **a) Acceleration:**
>
> For solid sphere: $I_{cm}/MR^2 = 2/5$
>
> $$a = \frac{g\sin\theta}{1 + I_{cm}/MR^2} = \frac{10 \times \sin 30°}{1 + 2/5}$$

$$a = \frac{10 \times 0.5}{1.4} = \frac{5}{1.4} = \boxed{3.57 \text{ m/s}^2}$$
>
> **b) Friction force:**
>
> $$f = \frac{(I_{cm}/MR^2) \times Mg\sin\theta}{1 + I_{cm}/MR^2}$$

$$f = \frac{(2/5) \times 2 \times 10 \times 0.5}{1.4} = \frac{4}{1.4} = \boxed{2.86 \text{ N}}$$
>
> **Direction:** Up the incline (opposes tendency to slip down)

> **↗ Connection · Problem 4: Race Down Incline**
>
> A ring and a disc of same mass and radius are released simultaneously from rest at the top of an incline. If the disc reaches the bottom in 2 seconds, when does the ring reach?
>
> **Solution:**
>
> **Time relation:**
>
> $$t \propto \sqrt{1 + I_{cm}/MR^2}$$
>
> **For disc:** $I_{cm}/MR^2 = 1/2$ → $t_d \propto \sqrt{1.5}$
>
> **For ring:** $I_{cm}/MR^2 = 1$ → $t_r \propto \sqrt{2}$
>
> $$\frac{t_r}{t_d} = \sqrt{\frac{2}{1.5}} = \sqrt{\frac{4}{3}} = \frac{2}{\sqrt{3}}$$

$$t_r = t_d \times \frac{2}{\sqrt{3}} = 2 \times \frac{2}{\sqrt{3}} = \frac{4}{\sqrt{3}} = \boxed{2.31 \text{ s}}$$
>
> Ring takes 0.31 seconds longer!

> **↗ Connection · Problem 5: Velocity at Bottom**
>
> A solid sphere and a hollow sphere of same mass and radius roll down an incline of height 5 m. Find the ratio of their velocities at the bottom.
>
> **Solution:**
>
> $$v = \sqrt{\frac{2gh}{1 + I_{cm}/MR^2}}$$
>
> **Solid sphere:** $I_{cm}/MR^2 = 2/5$
>
> $$v_s = \sqrt{\frac{2gh}{1 + 2/5}} = \sqrt{\frac{2gh}{7/5}} = \sqrt{\frac{10gh}{7}}$$
>
> **Hollow sphere:** $I_{cm}/MR^2 = 2/3$
>
> $$v_h = \sqrt{\frac{2gh}{1 + 2/3}} = \sqrt{\frac{2gh}{5/3}} = \sqrt{\frac{6gh}{5}}$$

$$\frac{v_s}{v_h} = \sqrt{\frac{10gh/7}{6gh/5}} = \sqrt{\frac{10 \times 5}{7 \times 6}} = \sqrt{\frac{50}{42}} = \sqrt{\frac{25}{21}}$$

$$\boxed{\frac{v_s}{v_h} = \frac{5}{\sqrt{21}} \approx 1.09}$$
>
> Solid sphere is about 9% faster!

### Level 3: JEE Advanced

> **↗ Connection · Problem 6: Minimum Coefficient of Friction**
>
> A hollow cylinder is placed on an incline of angle $\theta$. What is the minimum coefficient of static friction required for it to roll without slipping?
>
> **Solution:**
>
> For pure rolling:
>
> $$f \leq \mu_s N = \mu_s Mg\cos\theta$$
>
> Friction needed for hollow cylinder ($I_{cm} = MR^2$):
>
> $$f = \frac{(I_{cm}/MR^2) \times Mg\sin\theta}{1 + I_{cm}/MR^2} = \frac{1 \times Mg\sin\theta}{1 + 1} = \frac{Mg\sin\theta}{2}$$
>
> **For rolling:**
>
> $$\frac{Mg\sin\theta}{2} \leq \mu_s Mg\cos\theta$$

$$\mu_s \geq \frac{\sin\theta}{2\cos\theta} = \frac{\tan\theta}{2}$$

$$\boxed{\mu_{s,min} = \frac{\tan\theta}{2}}$$
>
> **For solid cylinder:** $\mu_{s,min} = \frac{\tan\theta}{3}$ (needs less friction!)

> **↗ Connection · Problem 7: Combination Motion**
>
> A solid sphere starts from rest and rolls without slipping down an incline of height $h$ and angle $\theta$. At the bottom, it continues on a horizontal surface with coefficient of kinetic friction $\mu_k$. Does it stop? If so, how far does it travel before stopping? (Treat the sphere and the floor as rigid.)
>
> **Solution:**
>
> **Part 1: Rolling down incline**
>
> At bottom:
>
> $$v = \sqrt{\frac{2gh}{1 + 2/5}} = \sqrt{\frac{10gh}{7}}$$
>
> Angular velocity:
>
> $$\omega = \frac{v}{R} = \frac{1}{R}\sqrt{\frac{10gh}{7}}$$
>
> **Part 2: On horizontal surface**
>
> The sphere arrives already rolling without slipping ($v_0 = R\omega_0$), so the contact point is at rest and kinetic friction does **not** act. Check the static friction needed to keep rolling:
>
> $$f = Ma, \qquad fR = I\alpha = \frac{2}{5}MR^2\cdot\frac{a}{R} \;\Rightarrow\; f = \frac{2}{5}f \;\Rightarrow\; f = 0,\ a = 0$$
>
> No friction is needed, so none acts and no energy is lost:
>
> $$\boxed{\text{It never stops (ideal rigid sphere): it keeps rolling at } v = \sqrt{\tfrac{10gh}{7}}}$$
>
> In reality it slows only because of **rolling resistance** (deformation of the surfaces), not because of $\mu_k$. Compare a block sliding down the same incline onto this floor: it would stop after $d = h/\mu_k$ (for a frictionless incline).

> **↗ Connection · Problem 8: Slipping to Rolling Transition**
>
> A solid cylinder is given an initial velocity $v_0$ (purely translational, no rotation) on a rough horizontal surface (coefficient $\mu$). After what time does it start pure rolling? What distance does it travel before pure rolling begins?
>
> **Solution:**
>
> **Initially:** $v = v_0$, $\omega = 0$ (slipping occurs)
>
> **Forces/Torques:**
>
> Friction: $f = \mu Mg$ (kinetic, opposes motion)
>
> **Translational motion:**
>
> $$Ma = -\mu Mg$$

$$a = -\mu g$$

$$v = v_0 - \mu gt \quad \text{...(1)}$$
>
> **Rotational motion:**
>
> $$I\alpha = fR = \mu MgR$$

$$\frac{MR^2}{2}\alpha = \mu MgR$$

$$\alpha = \frac{2\mu g}{R}$$

$$\omega = 0 + \frac{2\mu g}{R}t = \frac{2\mu gt}{R} \quad \text{...(2)}$$
>
> **Pure rolling begins when:** $v = R\omega$
>
> $$v_0 - \mu gt = R \times \frac{2\mu gt}{R}$$

$$v_0 - \mu gt = 2\mu gt$$

$$v_0 = 3\mu gt$$

$$\boxed{t = \frac{v_0}{3\mu g}}$$
>
> **Distance traveled:**
>
> $$s = v_0 t - \frac{1}{2}\mu g t^2$$

$$s = v_0 \times \frac{v_0}{3\mu g} - \frac{1}{2}\mu g \left(\frac{v_0}{3\mu g}\right)^2$$

$$s = \frac{v_0^2}{3\mu g} - \frac{\mu g v_0^2}{2 \times 9\mu^2 g^2} = \frac{v_0^2}{3\mu g} - \frac{v_0^2}{18\mu g}$$

$$s = \frac{6v_0^2 - v_0^2}{18\mu g} = \frac{5v_0^2}{18\mu g}$$

$$\boxed{s = \frac{5v_0^2}{18\mu g}}$$
>
> **At transition:**
>
> $$v = v_0 - \mu g \times \frac{v_0}{3\mu g} = v_0 - \frac{v_0}{3} = \frac{2v_0}{3}$$
>
> Speed reduced to 2/3 of initial!

> **↗ Connection · Problem 9: Rolling Over a Step**
>
> A uniform disc of mass $M$ and radius $R$ rolls without slipping with velocity $v$ toward a step of height $h$ ($h < R$). What minimum velocity is needed to climb the step?
>
> **Solution:**
>
> **Step 1: Impact with the edge (angular momentum about the edge is conserved)**
>
> The impulsive force acts at the edge, so it has zero torque about the edge. Gravity is finite and does nothing during the brief impact. The COM moves horizontally at height $R$; the edge is at height $h$, so the moment arm of $Mv$ is $R-h$:
>
> $$L_i = I_{cm}\omega + Mv(R-h) = \frac{MRv}{2} + Mv(R-h) = Mv\left(\frac{3R}{2} - h\right)$$
>
> Just after impact the disc pivots about the edge with $I_{edge} = \frac{MR^2}{2} + MR^2 = \frac{3MR^2}{2}$:
>
> $$\omega' = \frac{Mv(3R/2 - h)}{3MR^2/2} = \frac{v(3R - 2h)}{3R^2}$$
>
> (Kinetic energy is **not** conserved in this impact.)
>
> **Step 2: Rising onto the step (energy conserved about the fixed edge)**
>
> The COM must rise by $h$ (from height $R$ to $R+h$ when it is directly above the edge):
>
> $$\frac{1}{2}\cdot\frac{3MR^2}{2}\,\omega'^2 \geq Mgh \;\Rightarrow\; \omega' \geq \frac{2}{R}\sqrt{\frac{gh}{3}}$$

$$\boxed{v_{min} = \frac{2R\sqrt{3gh}}{3R - 2h}}$$
>
> **Check:** $h \to 0$ gives $v_{min} \to 0$ ✓

---

## Real-World Applications

1. **Car Wheels:** Pure rolling ensures efficiency (no slipping = no energy loss to friction)
2. **Bowling:** Ball initially slides, then transitions to pure rolling (spin determines path)
3. **Bicycle Gears:** Different gear ratios change $v/\omega$ ratio for efficiency
4. **Anti-lock Braking System (ABS):** Prevents wheel locking (maintains rolling, not sliding) for better control
5. **Planetary Rovers:** Larger wheels (larger $R$) → same $\omega$ gives higher $v$ → faster travel
6. **Ball Bearings:** Reduce friction by changing sliding to rolling motion

---

## Quick Revision Box

| Concept | Formula | Key Point |
| --- | --- | --- |
| **Pure rolling condition** | $v_{cm} = R\omega$ | Contact point velocity = 0 |
| **Total KE** | $\frac{1}{2}Mv^2(1 + I/MR^2)$ | Translation + Rotation |
| **Acceleration on incline** | $\frac{g\sin\theta}{1 + I/MR^2}$ | Independent of $M$, $R$ |
| **Velocity at bottom** | $\sqrt{\frac{2gh}{1 + I/MR^2}}$ | Energy conservation |
| **Friction force** | $\frac{(I/MR^2)Mg\sin\theta}{1 + I/MR^2}$ | Static, up the incline |
| **Top point velocity** | $2v_{cm}$ | Fastest point |
| **Contact point velocity** | 0 | Instantaneously at rest |

**Race ranking (fastest to slowest):**
Solid sphere > Disc > Hollow sphere > Ring

**Memory:** “**S**olid **S**peeds, **R**ing **R**etards”

---

## Decision Tree: Rolling Motion Problems

> **★ Key point · Step-by-Step Strategy**
>
> **Step 1:** Identify the type of motion
>
> - Pure rolling? → Check if $v_{cm} = R\omega$ or given “no slipping”

> - Slipping? → $v_{cm} \neq R\omega$, friction is kinetic
>
> **Step 2:** For pure rolling on incline:
>
> - Need acceleration? → $a = \frac{g\sin\theta}{1 + I/MR^2}$

> - Need velocity at bottom? → Energy: $v = \sqrt{\frac{2gh}{1 + I/MR^2}}$

> - Need time? → $t = \sqrt{\frac{2L(1 + I/MR^2)}{g\sin\theta}}$
>
> **Step 3:** Check friction requirement
>
> - Calculate $f$ needed for rolling

> - Compare with $f_{max} = \mu_s N$

> - If $f > f_{max}$ → slipping occurs!
>
> **Step 4:** For energy problems:
>
> - Include both $KE_{trans}$ and $KE_{rot}$

> - Remember: friction does NO work in pure rolling!
>
> **Step 5:** For race problems:
>
> - Compare $I/MR^2$ ratios

> - Smaller ratio → faster acceleration → wins race!

---

## Practice Problems

### Foundation Level

1. A disc of radius 0.3 m rolls with its center moving at 6 m/s. Find the velocity of:
   a) Topmost point
   b) Point at 90° from vertical
2. A solid sphere of mass 4 kg and radius 0.1 m rolls at 5 m/s. Find its total kinetic energy.
3. A ring and disc of equal mass start from rest and roll down a 10 m long incline. If the disc takes 3 s, how long does the ring take?

### JEE Main Level

4. A solid cylinder rolls down an incline of angle 30° and height 8 m. Find:
   a) Its velocity at the bottom
   b) Its acceleration on the incline
5. A hollow sphere rolls without slipping on a horizontal surface with velocity 4 m/s. It then encounters an incline of 30°. How far up the incline does it go before stopping?
6. A disc of mass 2 kg and radius 0.5 m rolls on a horizontal surface. What is the ratio of its rotational to translational kinetic energy?

### JEE Advanced Level

7. A solid sphere is released from the top of two inclines of same height but different angles $\theta_1 = 30°$ and $\theta_2 = 45°$. Compare:
   a) Accelerations on the two inclines
   b) Velocities at the bottom
   c) Times taken
8. A cylinder initially sliding with velocity $v_0$ on a rough surface ($\mu = 0.2$) begins to roll without slipping after some time. Find:
   a) Time to start rolling
   b) Distance traveled before rolling starts
   c) Final velocity when rolling begins
9. Three objects - solid sphere, disc, and ring - of same mass and radius are given same kinetic energy and released on an incline. Which reaches farthest up the incline? Find the ratio of distances.

---

## Connection to Other Topics

**Prerequisites you should know:**

- [Moment of Inertia](../moment-of-inertia/index.md) - $I$ values crucial for rolling
- [Torque](../torque/index.md) - Friction torque enables rolling
- [Angular Momentum](../angular-momentum/index.md) - Conservation in some problems

**What’s next:**

- [Gravitation](https://jeenotes.in/physics/gravitation/) - Orbital motion combines linear and angular
- [Rotational Dynamics](../../index.md) - Complete picture of rotational motion
- [Advanced Mechanics](../../index.md) - More complex rolling scenarios

**Cross-chapter links:**

- [Work-Energy Theorem](https://jeenotes.in/physics/work-energy-power/work-energy-theorem/) - Energy method for rolling
- [Friction](https://jeenotes.in/physics/laws-of-motion/) - Static friction enables pure rolling
- [Kinematics on Incline](https://jeenotes.in/physics/kinematics/) - Combines linear and rotational kinematics

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Rolling = Translation + Rotation** - two motions beautifully coupled by $v_{cm} = R\omega$

> 2. **Pure rolling (no slipping):** Contact point has zero velocity
>
>    - Friction is static (self-adjusting)

>    - Friction does NO work (contact point stationary)

>    - Energy conserved: $Mgh = \frac{1}{2}Mv^2(1 + I/MR^2)$

> 3. **Acceleration on incline:** $a = \frac{g\sin\theta}{1 + I/MR^2}$
>
>    - Independent of mass and radius!

>    - Depends only on shape (via $I/MR^2$)

>    - Solid sphere fastest, ring slowest

> 4. **Energy distribution:**
>
>    - Ring: 50% translation, 50% rotation

>    - Disc: 67% translation, 33% rotation

>    - Solid sphere: 71% translation, 29% rotation

> 5. **JEE favorites:**
>
>    - Race down incline (compare different shapes)

>    - Minimum friction for rolling

>    - Slipping → rolling transition

>    - Energy problems with rolling

> 6. **Common mistakes:**
>
>    - Forgetting rotational KE

>    - Assuming friction does work in pure rolling

>    - Using $v = R\omega$ when slipping occurs

>    - Thinking mass/radius affects rolling speed

> 7. **Memory tricks:**
>
>    - “Contact frozen” → $v = R\omega$

>    - “Solid Speeds, Ring Retards”

>    - Smaller $I/MR^2$ → faster → wins race
>
> **“Rolling motion is nature’s efficiency - translation without slipping, rotation without waste!”**
>
> This is a **high-yield topic** - 3-4 questions (12-16 marks) in JEE involve rolling motion. Master the energy method, compare different shapes, and understand friction’s role. Practice the incline race problem in all its variations - it’s a JEE classic!

---

From TestGuru · our mock-test platform

## You've read Rolling Motion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=rotational-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Frotational-motion%2Frolling-motion%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/rotational-motion/rolling-motion/",this.page.identifier="/physics/rotational-motion/rolling-motion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="rotationalMotion" id="anim-rotationalMotion-1795396424231859951"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-rotationalMotion-1795396424231859951")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/rotational-motion/rolling-motion/](https://jeenotes.in/physics/rotational-motion/rolling-motion/) · raw HTML: `offline/physics/rotational-motion/rolling-motion/index.html`_
