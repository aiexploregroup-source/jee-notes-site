---
title: "Moment of Inertia"
source: "https://jeenotes.in/physics/rotational-motion/moment-of-inertia/"
description: "Master moment of inertia calculations for common bodies - rod, disc, sphere, ring. Essential formulas and memory tricks for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 8"
html: "../../../../offline/physics/rotational-motion/moment-of-inertia/index.html"
extracted: "2026-11-23"
---

> Master moment of inertia calculations for common bodies - rod, disc, sphere, ring. Essential formulas and memory tricks for JEE Main & Advanced.

## Prerequisites

Before studying this topic, review:

- [Centre of Mass](../centre-of-mass/index.md) - Understanding COM concept
- [Kinetic Energy](https://jeenotes.in/physics/work-energy-power/kinetic-energy/) - Energy in motion

---

## The Hook: Why Can’t You Stop a Spinning Figure Skater?

> **★ Key point · Connect: Real Life → Physics**
>
> Watch any figure skating championship - when skaters pull their arms in during a spin, they suddenly become a blur of motion! Push them while arms are extended: they slow down easily. Try the same when arms are tucked in: impossible!
>
> In **Jawan** (2023), when Shah Rukh Khan’s character spins a metal rod to deflect bullets, he holds it at the center. Why? Try spinning a cricket bat by holding it at the end versus the center - the difference is HUGE!
>
> **The mystery:** Why does the same object become harder or easier to rotate depending on how you hold it?

The answer lies in **Moment of Inertia** - the rotational equivalent of mass!

---

## The Core Concept

### What is Moment of Inertia?

**Moment of inertia** is the measure of an object’s resistance to rotational acceleration about an axis - just like mass resists linear acceleration.

$$\boxed{I = \sum m_i r_i^2}$$

where:

- $I$ = moment of inertia (kg·m²)
- $m_i$ = mass of particle $i$
- $r_i$ = perpendicular distance of particle $i$ from the axis of rotation

**For continuous bodies:**

$$\boxed{I = \int r^2\,dm}$$

> **◐ In Simple Terms**
>
> **Moment of inertia is “rotational mass”**
>
> Just as:
>
> - Mass measures resistance to linear acceleration ($F = ma$)

> - Moment of inertia measures resistance to angular acceleration ($\tau = I\alpha$)
>
> **Key difference:** Moment of inertia depends on:
>
> 1. Mass (more mass → more I)

> 2. Distribution of mass (farther from axis → more I)

> 3. **Axis of rotation** (different axis → different I)

### Interactive Demo: Visualize Moment of Inertia

See how mass distribution affects rotational resistance.

---

## Memory Tricks & Patterns

### The “Distance Matters” Rule

**Memory Trick:** “**I**nertia **I**ncreases with **D**istance squared”

$$I \propto r^2$$

**This explains:**

- Why ice skaters slow their spin by extending arms (increases $r$)
- Why spinning a rod from the end is harder than from center
- Why hollow objects have larger $I$ than solid ones of same mass

### The “Half-Whole-Third” Pattern for Standard Shapes

**For standard shapes, remember these fractions:**

| Shape | Axis | Fraction | Formula |
| --- | --- | --- | --- |
| **Disc/Cylinder** | Through center, perpendicular to plane | **1/2** | $\frac{1}{2}MR^2$ |
| **Solid Sphere** | Through center | **2/5** | $\frac{2}{5}MR^2$ |
| **Hollow Sphere (shell)** | Through center | **2/3** | $\frac{2}{3}MR^2$ |
| **Rod** | Through center, perpendicular | **1/12** | $\frac{1}{12}ML^2$ |
| **Rod** | Through end, perpendicular | **1/3** | $\frac{1}{3}ML^2$ |
| **Ring/Hollow Cylinder** | Through center, perpendicular | **1** | $MR^2$ |

### Mnemonic: “**DRISH**”

**D**isc = **1/2**
**R**od (center) = **1/12**
**I** (Rod end) = **1/3**
**S**phere (solid) = **2/5**
**H**ollow sphere = **2/3**

> **★ Key point · JEE Power Trick**
>
> **Pattern recognition:**
>
> 1. **Ring/Hollow cylinder:** All mass at distance $R$ → $I = MR^2$ (maximum for given mass and radius)

> 2. **From hollow to solid:** Inertia decreases as mass comes closer to axis
>
>    - Hollow sphere ($\frac{2}{3}MR^2$) > Solid sphere ($\frac{2}{5}MR^2$)

>    - Ring ($MR^2$) > Disc ($\frac{1}{2}MR^2$)

> 3. **Rod about end = 4 × Rod about center:** $\frac{1}{3}ML^2 = 4 \times \frac{1}{12}ML^2$
>
> This saves calculation time in MCQs!

---

## Moment of Inertia for Common Bodies

### 1. Point Mass

For a point mass $m$ at perpendicular distance $r$ from axis:

$$\boxed{I = mr^2}$$

This is the fundamental formula - all others are derived from this!

### 2. Uniform Rod (Length $L$, Mass $M$)

**a) Axis through center, perpendicular to rod:**

$$\boxed{I = \frac{ML^2}{12}}$$

**b) Axis through one end, perpendicular to rod:**

$$\boxed{I = \frac{ML^2}{3}}$$

**Derivation (for center):**

Consider element $dx$ at distance $x$ from center. Mass of element: $dm = \frac{M}{L}dx$

$$I = \int_{-L/2}^{L/2} x^2 dm = \int_{-L/2}^{L/2} x^2 \frac{M}{L}dx = \frac{M}{L} \cdot \frac{x^3}{3}\bigg|_{-L/2}^{L/2} = \frac{ML^2}{12}$$

### 3. Ring (Radius $R$, Mass $M$)

**a) Axis through center, perpendicular to plane:**

$$\boxed{I = MR^2}$$

All mass is at distance $R$ from axis!

**b) Axis as diameter (in the plane):**

$$\boxed{I = \frac{MR^2}{2}}$$

### 4. Disc (Radius $R$, Mass $M$)

**a) Axis through center, perpendicular to plane:**

$$\boxed{I = \frac{MR^2}{2}}$$

**Derivation:**

Consider a ring of radius $r$ and thickness $dr$. Area of ring: $2\pi r \, dr$

Mass of ring: $dm = \frac{M}{\pi R^2} \cdot 2\pi r \, dr = \frac{2Mr}{R^2}dr$

$$I = \int_0^R r^2 dm = \int_0^R r^2 \cdot \frac{2Mr}{R^2}dr = \frac{2M}{R^2}\int_0^R r^3 dr = \frac{2M}{R^2} \cdot \frac{R^4}{4} = \frac{MR^2}{2}$$

**b) Axis as diameter (in the plane):**

$$\boxed{I = \frac{MR^2}{4}}$$

### 5. Solid Cylinder (Radius $R$, Mass $M$, Length $L$)

**a) Axis along cylinder axis:**

$$\boxed{I = \frac{MR^2}{2}}$$

(Same as disc - length doesn’t matter for this axis!)

**b) Axis through center, perpendicular to length:**

$$\boxed{I = M\left(\frac{R^2}{4} + \frac{L^2}{12}\right)}$$

### 6. Hollow Cylinder (Inner radius $R_1$, Outer radius $R_2$, Mass $M$)

**Axis along cylinder axis:**

$$\boxed{I = \frac{M(R_1^2 + R_2^2)}{2}}$$

**Special case (thin shell):** If $R_1 \approx R_2 = R$:

$$I = MR^2$$

### 7. Solid Sphere (Radius $R$, Mass $M$)

**Axis through center (any diameter):**

$$\boxed{I = \frac{2MR^2}{5}}$$

**Derivation approach:** Consider sphere as collection of discs of varying radii, integrate.

### 8. Hollow Sphere / Spherical Shell (Radius $R$, Mass $M$)

**Axis through center (any diameter):**

$$\boxed{I = \frac{2MR^2}{3}}$$

### 9. Rectangular Plate (Length $a$, Width $b$, Mass $M$)

**a) Axis along length $a$ (through center):**

$$\boxed{I = \frac{Mb^2}{12}}$$

**b) Axis perpendicular to plate through center:**

$$\boxed{I = \frac{M(a^2 + b^2)}{12}}$$

---

## Radius of Gyration ($k$)

**Definition:** Radius of gyration is the distance from the axis where the entire mass can be assumed to be concentrated to give the same moment of inertia.

$$\boxed{I = Mk^2}$$

$$\boxed{k = \sqrt{\frac{I}{M}}}$$

**Physical meaning:** If all mass $M$ were at distance $k$ from axis, the moment of inertia would be the same.

### Radius of Gyration for Common Bodies

| Body | Axis | $k$ |
| --- | --- | --- |
| Rod (length $L$) | Through center | $\frac{L}{2\sqrt{3}}$ |
| Rod (length $L$) | Through end | $\frac{L}{\sqrt{3}}$ |
| Disc (radius $R$) | Through center, ⊥ to plane | $\frac{R}{\sqrt{2}}$ |
| Ring (radius $R$) | Through center, ⊥ to plane | $R$ |
| Solid sphere (radius $R$) | Through diameter | $\sqrt{\frac{2}{5}}R$ |
| Hollow sphere (radius $R$) | Through diameter | $\sqrt{\frac{2}{3}}R$ |

---

## Rotational Kinetic Energy

Just as $KE = \frac{1}{2}mv^2$ for linear motion:

$$\boxed{KE_{rot} = \frac{1}{2}I\omega^2}$$

where $\omega$ is angular velocity (rad/s).

**For rolling motion (translation + rotation):**

$$KE_{total} = KE_{trans} + KE_{rot} = \frac{1}{2}Mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

For pure rolling ($v = R\omega$):

$$KE_{total} = \frac{1}{2}Mv^2\left(1 + \frac{I}{MR^2}\right) = \frac{1}{2}Mv^2\left(1 + \frac{k^2}{R^2}\right)$$

> **★ Key point · JEE Shortcut**
>
> **Comparing rolling objects down an incline:**
>
> Higher the $I/MR^2$ ratio, **slower** the object (more energy goes to rotation).
>
> **Ranking (fastest to slowest):**
>
> 1. **Solid sphere:** $I/MR^2 = 2/5$ → fastest

> 2. **Disc/Cylinder:** $I/MR^2 = 1/2$ → medium

> 3. **Ring/Hollow cylinder:** $I/MR^2 = 1$ → slowest
>
> **Remember:** “**S**olid **S**peeds, **R**ing **R**etards”

---

## When to Use Moment of Inertia

> **★ Key point · Decision Tree**
>
> **Use moment of inertia when:**
>
> 1. **Rotational motion** about a fixed or moving axis

> 2. Calculating **rotational kinetic energy** ($KE = \frac{1}{2}I\omega^2$)

> 3. Finding **torque-acceleration relation** ($\tau = I\alpha$)

> 4. **Rolling motion** problems (disc, sphere on incline)

> 5. Problems involving **angular momentum** ($L = I\omega$)
>
> **Key question:** “Is the object rotating?” → Yes → Use $I$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Mass and Moment of Inertia**
>
> **Mistake:** Treating $I$ as a constant like mass.
>
> **Truth:** Unlike mass, $I$ depends on the **axis of rotation**. Same object, different axis = different $I$!
>
> **Example:** Rod of length $L$, mass $M$:
>
> - About center: $I = \frac{ML^2}{12}$

> - About end: $I = \frac{ML^2}{3}$ (4 times larger!)

> **⚠ Trap #2: Wrong Axis in Standard Formulas**
>
> **Mistake:** Using $I = \frac{MR^2}{2}$ for a disc about its diameter.
>
> **Correct:**
>
> - Perpendicular to plane (through center): $I = \frac{MR^2}{2}$

> - Along diameter (in plane): $I = \frac{MR^2}{4}$
>
> **Always check:** Which axis is the rotation about?

> **⚠ Trap #3: Forgetting Units**
>
> **Mistake:** Writing $I$ without proper units.
>
> **Correct units:** kg·m² (SI), g·cm² (CGS)
>
> **Check:** $[I] = [m][r^2] = \text{kg} \cdot \text{m}^2$

> **⚠ Trap #4: Hollow vs Solid**
>
> **Mistake:** Thinking hollow and solid objects have same $I$.
>
> **Truth:** For same mass and radius, **hollow objects have larger** $I$ (mass farther from axis).
>
> **Example:**
>
> - Hollow sphere: $I = \frac{2}{3}MR^2$

> - Solid sphere: $I = \frac{2}{5}MR^2$

> - Ratio: $\frac{2/3}{2/5} = \frac{5}{3}$ (hollow has 1.67 times more!)

---

## Worked Examples

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Point Masses**
>
> Four point masses each of 1 kg are placed at the corners of a square of side 2 m. Find the moment of inertia about an axis passing through the center and perpendicular to the plane.
>
> **Solution:**
>
> Distance of each mass from center: $r = \frac{\text{diagonal}}{2} = \frac{2\sqrt{2}}{2} = \sqrt{2}$ m
>
> $$I = \sum m_i r_i^2 = 4 \times 1 \times (\sqrt{2})^2 = 4 \times 2 = \boxed{8 \text{ kg}\cdot\text{m}^2}$$

> **↗ Connection · Problem 2: Uniform Rod**
>
> A uniform rod of mass 2 kg and length 1 m is rotating about an axis through its center and perpendicular to its length with angular velocity 10 rad/s. Find:

> a) Moment of inertia

> b) Rotational kinetic energy
>
> **Solution:**
>
> a) $I = \frac{ML^2}{12} = \frac{2 \times 1^2}{12} = \boxed{\frac{1}{6} \text{ kg}\cdot\text{m}^2}$
>
> b) $KE = \frac{1}{2}I\omega^2 = \frac{1}{2} \times \frac{1}{6} \times 10^2 = \frac{100}{12} = \boxed{8.33 \text{ J}}$

> **↗ Connection · Problem 3: Disc**
>
> A disc of radius 0.5 m and mass 4 kg is rotating about an axis through its center and perpendicular to its plane at 120 rpm. Find the rotational kinetic energy.
>
> **Solution:**
>
> Convert rpm to rad/s: $\omega = \frac{120 \times 2\pi}{60} = 4\pi$ rad/s
>
> $I = \frac{MR^2}{2} = \frac{4 \times (0.5)^2}{2} = 0.5$ kg·m²
>
> $KE = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 0.5 \times (4\pi)^2 = 0.25 \times 16\pi^2 = \boxed{39.5 \text{ J}}$

### Level 2: JEE Main

> **↗ Connection · Problem 4: Comparing Moments of Inertia**
>
> A ring and a disc of same mass $M$ and radius $R$ are rotating with same angular velocity $\omega$. Find the ratio of their rotational kinetic energies.
>
> **Solution:**
>
> **Ring:** $I_1 = MR^2$, $KE_1 = \frac{1}{2}MR^2\omega^2$
>
> **Disc:** $I_2 = \frac{MR^2}{2}$, $KE_2 = \frac{1}{2} \times \frac{MR^2}{2} \times \omega^2 = \frac{MR^2\omega^2}{4}$
>
> $$\frac{KE_1}{KE_2} = \frac{\frac{1}{2}MR^2\omega^2}{\frac{1}{4}MR^2\omega^2} = \boxed{2:1}$$
>
> Ring has twice the kinetic energy (higher moment of inertia)!

> **↗ Connection · Problem 5: Variable Axis**
>
> A uniform rod of mass $M$ and length $L$ is rotating about an axis perpendicular to it at distance $L/4$ from one end. Find the moment of inertia.
>
> **Solution:**
>
> **Method:** Use parallel axis theorem (we’ll learn this in next topic!)
>
> Axis is at distance $d = L/4 - L/2 = -L/4$ from center (magnitude: $L/4$)
>
> $$I = I_{cm} + Md^2 = \frac{ML^2}{12} + M\left(\frac{L}{4}\right)^2$$

$$I = \frac{ML^2}{12} + \frac{ML^2}{16} = \frac{4ML^2 + 3ML^2}{48} = \boxed{\frac{7ML^2}{48}}$$

> **↗ Connection · Problem 6: Ring of Mass on Disc**
>
> A ring of mass $m$ and radius $r$ is placed concentrically on a disc of mass $M$ and radius $R$ (where $R > r$). Find the moment of inertia of the system about the common axis.
>
> **Solution:**
>
> **System moment of inertia = Sum of individual moments of inertia**
>
> **Ring:** $I_1 = mr^2$
>
> **Disc:** $I_2 = \frac{MR^2}{2}$
>
> $$I_{total} = I_1 + I_2 = \boxed{mr^2 + \frac{MR^2}{2}}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Rolling Race**
>
> A ring, disc, and solid sphere, all of same mass and radius, are released from rest at the top of an inclined plane. They roll down without slipping. Find:

> a) Which reaches the bottom first?

> b) Ratio of their speeds at the bottom
>
> **Solution:**
>
> **Using energy conservation:**
>
> For pure rolling: $v = R\omega$
>
> $$Mgh = \frac{1}{2}Mv^2 + \frac{1}{2}I\omega^2 = \frac{1}{2}Mv^2\left(1 + \frac{I}{MR^2}\right)$$

$$v = \sqrt{\frac{2gh}{1 + I/MR^2}}$$
>
> **Ring:** $I/MR^2 = 1$ → $v_{\text{ring}} = \sqrt{\frac{2gh}{2}} = \sqrt{gh}$
>
> **Disc:** $I/MR^2 = 1/2$ → $v_{\text{disc}} = \sqrt{\frac{2gh}{3/2}} = \sqrt{\frac{4gh}{3}}$
>
> **Sphere:** $I/MR^2 = 2/5$ → $v_{\text{sphere}} = \sqrt{\frac{2gh}{7/5}} = \sqrt{\frac{10gh}{7}}$
>
> **a) Order (fastest first):** Sphere > Disc > Ring
>
> **b) Ratio of speeds:**
>
> $$v_{\text{sphere}} : v_{\text{disc}} : v_{\text{ring}} = \sqrt{\frac{10}{7}} : \sqrt{\frac{4}{3}} : \sqrt{1}$$

$$= \sqrt{30} : \sqrt{28} : \sqrt{21}$$

$$\boxed{\approx 5.48 : 5.29 : 4.58}$$

> **↗ Connection · Problem 8: Composite Body**
>
> Find the moment of inertia of a uniform disc of mass $M$ and radius $R$ with a circular hole of radius $R/2$ cut from it. The center of the hole is at distance $R/2$ from the center of the disc. Axis passes through the center of the original disc, perpendicular to its plane.
>
> **Solution:**
>
> **Method:** Original disc - Removed portion
>
> **Original disc:** $I_1 = \frac{MR^2}{2}$
>
> **Removed portion:**
>
> - Radius: $r = R/2$

> - Mass: $m = M \times \frac{\pi(R/2)^2}{\pi R^2} = \frac{M}{4}$

> - Distance from axis: $d = R/2$
>
> Using parallel axis theorem for removed part:
>
> $$I_2 = I_{cm} + md^2 = \frac{mr^2}{2} + md^2$$

$$I_2 = \frac{M/4 \times (R/2)^2}{2} + \frac{M}{4} \times \left(\frac{R}{2}\right)^2$$

$$I_2 = \frac{MR^2}{32} + \frac{MR^2}{16} = \frac{MR^2 + 2MR^2}{32} = \frac{3MR^2}{32}$$
>
> **Remaining portion:**
>
> $$I = I_1 - I_2 = \frac{MR^2}{2} - \frac{3MR^2}{32} = \frac{16MR^2 - 3MR^2}{32} = \boxed{\frac{13MR^2}{32}}$$

> **↗ Connection · Problem 9: Minimum Force to Topple**
>
> A solid cylinder of mass $M$, radius $R$, and height $h$ rests on a horizontal surface. What minimum horizontal force $F$ applied at the top will cause it to topple? (Assume sufficient friction to prevent slipping)
>
> **Solution:**
>
> For toppling, cylinder rotates about the edge point of contact.
>
> **For toppling to begin:** Torque about edge must overcome the restoring torque due to weight.
>
> **Torque by $F$:** $\tau_F = F \times h$ (clockwise)
>
> **Torque by weight:** $\tau_w = Mg \times R$ (anticlockwise)
>
> **At the verge of toppling:**
>
> $$F \times h = Mg \times R$$

$$\boxed{F = \frac{MgR}{h}}$$
>
> **Note:** If $h > R$, toppling is easier (smaller $F$ needed). This is why tall objects topple easily!

---

## Real-World Applications

1. **Figure Skating Spins:** Skater reduces $I$ by pulling arms in → conservation of angular momentum → spins faster
2. **Tightrope Walkers:** Use long poles to increase $I$ → harder to tip over (more stable)
3. **Flywheels in Engines:** Large $I$ → stores rotational energy smoothly
4. **Helicopter Blades:** Mass at tips → large $I$ → maintains rotation even if engine fails momentarily
5. **Athletic Equipment:**

   - Longer bats/golf clubs → larger $I$ → more power but harder to swing
   - Gymnasts tuck during somersaults → reduce $I$ → spin faster

---

## Quick Revision Box

| Body | Axis | Moment of Inertia | $k$ (radius of gyration) |
| --- | --- | --- | --- |
| Rod (length $L$) | Through center, ⊥ | $\frac{ML^2}{12}$ | $\frac{L}{2\sqrt{3}}$ |
| Rod (length $L$) | Through end, ⊥ | $\frac{ML^2}{3}$ | $\frac{L}{\sqrt{3}}$ |
| Ring (radius $R$) | Through center, ⊥ plane | $MR^2$ | $R$ |
| Disc (radius $R$) | Through center, ⊥ plane | $\frac{MR^2}{2}$ | $\frac{R}{\sqrt{2}}$ |
| Solid Sphere (radius $R$) | Any diameter | $\frac{2MR^2}{5}$ | $\sqrt{\frac{2}{5}}R$ |
| Hollow Sphere (radius $R$) | Any diameter | $\frac{2MR^2}{3}$ | $\sqrt{\frac{2}{3}}R$ |
| Solid Cylinder (radius $R$) | Along axis | $\frac{MR^2}{2}$ | $\frac{R}{\sqrt{2}}$ |

**Memory aid:** Hollow > Solid, Always!

---

## Practice Problems

### Foundation Level

1. Calculate the moment of inertia of a thin rod of mass 500 g and length 50 cm about an axis through its center.
2. Three point masses 2 kg, 3 kg, and 4 kg are placed at positions (0,0), (1,1), and (2,1) meters. Find $I$ about z-axis.
3. A disc of mass 2 kg and radius 20 cm rotates at 300 rpm. Find its rotational KE.

### JEE Main Level

4. Two uniform rods each of mass $M$ and length $L$ are joined to form a cross (+). Find the moment of inertia about an axis passing through the intersection and perpendicular to the plane.
5. A solid sphere and hollow sphere of same mass and radius roll down an incline of height $h$. Find the ratio of their speeds at the bottom.
6. A thin uniform circular ring of mass $M$ and radius $R$ is rotating about an axis through its center and perpendicular to its plane with angular velocity $\omega$. Find work required to stop it.

### JEE Advanced Level

7. A uniform disc of mass $M$ and radius $R$ is mounted on a fixed horizontal axle. A block of mass $m$ hangs from a massless string wound around the rim. Find:
   a) Acceleration of the block
   b) Tension in the string
8. Four point masses each of mass $m$ are connected by massless rods to form a square of side $a$. The system rotates about an axis perpendicular to the plane and passing through one corner. Find the moment of inertia.
9. A hollow cylinder and solid cylinder of same mass and radius are given the same kinetic energy and released on an incline. Which travels farther up the incline?

---

## Connection to Other Topics

**Prerequisites you should know:**

- [Centre of Mass](../centre-of-mass/index.md) - Understanding mass distribution
- [Kinetic Energy](https://jeenotes.in/physics/work-energy-power/kinetic-energy/) - Energy concepts

**What’s next:**

- [Parallel & Perpendicular Axis Theorems](../parallel-perpendicular-theorems/index.md) - Calculate $I$ for different axes
- [Torque](../torque/index.md) - Rotational analog of force
- [Angular Momentum](../angular-momentum/index.md) - Uses $L = I\omega$

**Cross-chapter links:**

- [Rolling Motion](../rolling-motion/index.md) - Applies moment of inertia in energy calculations
- [Work-Energy Theorem](https://jeenotes.in/physics/work-energy-power/work-energy-theorem/) - Extended to rotation

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Moment of inertia is “rotational mass”** - it measures resistance to angular acceleration, just like mass resists linear acceleration

> 2. **Distance is key:** $I \propto r^2$ - mass farther from axis contributes quadratically more to $I$

> 3. **Memory pattern for standard shapes:**
>
>    - **DRISH:** Disc (1/2), Rod-center (1/12), I-Rod-end (1/3), Sphere (2/5), Hollow (2/3)

>    - Hollow always > Solid for same mass and radius

> 4. **Different axis → Different $I$** - Unlike mass, moment of inertia depends on the axis of rotation!

> 5. **JEE pattern:** Rolling races, composite bodies, and energy conservation problems are favorites

> 6. **Quick check:** Units must be kg·m² - if not, you’ve made a mistake!
>
> **“Mass says ‘how much matter,’ moment of inertia says ‘how matter is distributed around the axis.’”**
>
> Master these formulas with DRISH, and you’ll crack 2-3 questions worth 8-12 marks in JEE. More importantly, you’ll understand why figure skaters become a blur when they tuck in - physics in action!

---

From TestGuru · our mock-test platform

## You've read Moment of Inertia.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=rotational-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Frotational-motion%2Fmoment-of-inertia%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/rotational-motion/moment-of-inertia/",this.page.identifier="/physics/rotational-motion/moment-of-inertia/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="rotationalMotion" id="anim-rotationalMotion-1795396424197882278"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-rotationalMotion-1795396424197882278")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/rotational-motion/moment-of-inertia/](https://jeenotes.in/physics/rotational-motion/moment-of-inertia/) · raw HTML: `offline/physics/rotational-motion/moment-of-inertia/index.html`_
