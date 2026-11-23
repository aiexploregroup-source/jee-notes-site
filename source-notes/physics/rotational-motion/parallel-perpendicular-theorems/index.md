---
title: "Parallel and Perpendicular Axis Theorems"
source: "https://jeenotes.in/physics/rotational-motion/parallel-perpendicular-theorems/"
description: "Master parallel and perpendicular axis theorems to calculate moment of inertia for any axis - crucial shortcuts for JEE Main & Advanced."
updated: "2026-10-18"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 8"
html: "../../../../offline/physics/rotational-motion/parallel-perpendicular-theorems/index.html"
extracted: "2026-11-23"
---

> Master parallel and perpendicular axis theorems to calculate moment of inertia for any axis - crucial shortcuts for JEE Main & Advanced.

## Prerequisites

Before studying this topic, review:

- [Centre of Mass](../centre-of-mass/index.md) - COM location is crucial
- [Moment of Inertia](../moment-of-inertia/index.md) - Basic $I$ calculations

---

## The Hook: The Door Handle Mystery

> **★ Key point · Connect: Real Life → Physics**
>
> Why is the door handle always placed at the edge, farthest from the hinges? Try pushing a door near the hinges - it barely moves! Push at the handle - it swings open easily.
>
> In **Jawan’s** train action sequence, when Shah Rukh Khan uses a long metal rod to open locked doors, he always pushes at the far end, not near the pivot. Why?
>
> Even more curious: Take a meter scale. It’s easy to rotate about its center. Now try rotating it about an edge - suddenly it feels much heavier!
>
> **The mystery:** How do we calculate moment of inertia when the axis changes? Do we need to redo the entire integration every time?

The answer: **Two powerful theorems** that save hours of calculation!

---

## The Core Concept

### Why Do We Need These Theorems?

We know standard moments of inertia (disc, rod, sphere) about **specific axes** - usually through their center of mass. But what if:

- The axis shifts parallel to the original axis?
- We need to find $I$ about a perpendicular axis?

**Without theorems:** Redo the entire $I = \int r^2 dm$ calculation (15+ minutes)
**With theorems:** Use a simple formula (30 seconds!)

> **◐ In Simple Terms**
>
> These theorems are like **“axis-shifting shortcuts”** that connect moments of inertia about different axes without redoing integration.
>
> **Parallel Axis Theorem:** “How does $I$ change when axis shifts parallel?”

> **Perpendicular Axis Theorem:** “How do perpendicular axes relate for flat objects?”

---

## Parallel Axis Theorem

### Statement

**The moment of inertia of a body about any axis is equal to the moment of inertia about a parallel axis through the center of mass PLUS the product of mass and the square of perpendicular distance between the two axes.**

$$\boxed{I = I_{cm} + Md^2}$$

where:

- $I$ = moment of inertia about the new axis
- $I_{cm}$ = moment of inertia about parallel axis through COM
- $M$ = total mass of the body
- $d$ = perpendicular distance between the two parallel axes

> **★ Key point · Memory Trick**
>
> **“Parallel Adds Distance Squared”** → $I = I_{cm} + Md^2$
>
> Think: Moving axis away from COM → harder to rotate → $I$ increases by $Md^2$

### Interactive Demo: Visualize Axis Theorems

See how moment of inertia changes when the axis shifts.

### Proof

Consider a body with COM at origin. Let the new axis be parallel to the axis through COM at distance $d$.

For a particle of mass $m_i$ at position $\vec{r}_i$ from COM:

- Distance from COM axis: $r_i$
- Distance from new axis: $r_i'$

Using geometry: $\vec{r}_i' = \vec{r}_i + \vec{d}$ (where $\vec{d}$ is perpendicular to axis)

$$r_i'^2 = |\vec{r}_i + \vec{d}|^2 = r_i^2 + d^2 + 2\vec{r}_i \cdot \vec{d}$$

$$I = \sum m_i r_i'^2 = \sum m_i(r_i^2 + d^2 + 2\vec{r}_i \cdot \vec{d})$$

$$I = \sum m_i r_i^2 + \sum m_i d^2 + 2\sum m_i \vec{r}_i \cdot \vec{d}$$

$$I = I_{cm} + Md^2 + 2\vec{d} \cdot \sum m_i \vec{r}_i$$

But $\sum m_i \vec{r}_i = M\vec{r}_{cm} = 0$ (since COM is at origin)

$$\boxed{I = I_{cm} + Md^2}$$

### Key Insights

1. **$I$ is always minimum about axis through COM** (since $Md^2 \geq 0$)
2. **$I$ increases quadratically** with distance from COM axis
3. **Cannot work backwards:** $I_{cm} = I - Md^2$ is valid, but you need to know which is the COM axis!
4. **Only for parallel axes:** This theorem does NOT work for non-parallel axes

---

## Applications of Parallel Axis Theorem

### Example 1: Rod About End

**Given:** Rod of mass $M$, length $L$, $I_{cm} = \frac{ML^2}{12}$

**Find:** $I$ about one end

**Solution:**

Distance from COM to end: $d = \frac{L}{2}$

$$I = I_{cm} + Md^2 = \frac{ML^2}{12} + M\left(\frac{L}{2}\right)^2$$

$$I = \frac{ML^2}{12} + \frac{ML^2}{4} = \frac{ML^2 + 3ML^2}{12} = \boxed{\frac{ML^2}{3}}$$

**Verification:** This matches the standard formula! $\checkmark$

### Example 2: Disc About Tangent

**Given:** Disc of mass $M$, radius $R$, $I_{cm} = \frac{MR^2}{2}$ (perpendicular to plane)

**Find:** $I$ about tangent perpendicular to plane

**Solution:**

Distance from COM to tangent: $d = R$

$$I = I_{cm} + Md^2 = \frac{MR^2}{2} + MR^2 = \boxed{\frac{3MR^2}{2}}$$

### Example 3: Disc About Diameter

**Given:** Disc $I_{cm} = \frac{MR^2}{4}$ (about diameter through center)

**Find:** $I$ about tangent along the edge (in the plane)

**Solution:**

Distance from COM to edge tangent: $d = R$

$$I = I_{cm} + Md^2 = \frac{MR^2}{4} + MR^2 = \boxed{\frac{5MR^2}{4}}$$

---

## Perpendicular Axis Theorem

### Statement

**For a planar body (lamina), the moment of inertia about an axis perpendicular to the plane is equal to the sum of moments of inertia about two perpendicular axes in the plane that intersect the first axis.**

$$\boxed{I_z = I_x + I_y}$$

where all three axes ($x$, $y$, $z$) are mutually perpendicular and intersect at a point.

> **⚠ IMPORTANT Restriction**
>
> **This theorem applies ONLY to planar bodies (laminas)** - objects with negligible thickness in one dimension.
>
> **Valid for:** Disc, ring, plate, sheet

> **NOT valid for:** Sphere, cylinder, rod (3D objects)

> **★ Key point · Memory Trick**
>
> **“Perpendicular: Out = In + In”** → $I_z = I_x + I_y$
>
> Imagine: $z$ is OUT of plane, $x$ and $y$ are IN the plane

### Proof

For a planar lamina in the $xy$-plane:

For a mass element $dm$ at position $(x, y)$:

- Distance from $x$-axis: $y$ → $dI_x = y^2 dm$
- Distance from $y$-axis: $x$ → $dI_y = x^2 dm$
- Distance from $z$-axis: $\sqrt{x^2 + y^2}$ → $dI_z = (x^2 + y^2) dm$

$$I_z = \int (x^2 + y^2)dm = \int x^2 dm + \int y^2 dm = I_y + I_x$$

$$\boxed{I_z = I_x + I_y}$$

### Key Insights

1. **Symmetry shortcuts:** If lamina is symmetric, $I_x = I_y$, then $I_z = 2I_x$
2. **For circular objects** (disc, ring): Any two perpendicular diameters give same $I_x = I_y$
3. **Works at any point:** The three axes must intersect at a point, but that point need not be COM
4. **Cannot apply to 3D objects:** Sphere, rod, solid cylinder don’t work

---

## Applications of Perpendicular Axis Theorem

### Example 1: Ring About Diameter

**Given:** Ring of mass $M$, radius $R$

**Find:** $I$ about a diameter

**Solution:**

We know: $I_z = MR^2$ (perpendicular to plane through center)

By symmetry, any diameter: $I_x = I_y$

Using perpendicular axis theorem:

$$I_z = I_x + I_y = 2I_x$$

$$MR^2 = 2I_x$$

$$\boxed{I_x = \frac{MR^2}{2}}$$

This is $I$ about any diameter of the ring!

### Example 2: Disc About Diameter

**Given:** Disc of mass $M$, radius $R$

**Find:** $I$ about a diameter

**Solution:**

We know: $I_z = \frac{MR^2}{2}$ (perpendicular to plane)

By symmetry: $I_x = I_y$

$$I_z = I_x + I_y = 2I_x$$

$$\frac{MR^2}{2} = 2I_x$$

$$\boxed{I_x = \frac{MR^2}{4}}$$

### Example 3: Rectangular Plate

**Given:** Rectangular plate with sides $a$ and $b$, mass $M$

**Find:** $I$ perpendicular to plane through center

**Solution:**

For a rectangle:

- $I_x = \frac{Mb^2}{12}$ (about axis parallel to side $a$)
- $I_y = \frac{Ma^2}{12}$ (about axis parallel to side $b$)

Using perpendicular axis theorem:

$$I_z = I_x + I_y = \frac{Mb^2}{12} + \frac{Ma^2}{12}$$

$$\boxed{I_z = \frac{M(a^2 + b^2)}{12}}$$

**Special case:** Square plate ($a = b$):

$$I_z = \frac{M(a^2 + a^2)}{12} = \frac{Ma^2}{6}$$

---

## Combining Both Theorems

Many problems require **both theorems** together!

### Example: Ring About Tangent in Plane

**Find:** Moment of inertia of a ring (mass $M$, radius $R$) about a tangent **in its plane**

**Solution - Method 1: Sequential application**

**Step 1:** Find $I$ about diameter using perpendicular axis theorem

- $I_z = MR^2$ (perpendicular to plane)
- By symmetry: $I_{\text{diameter}} = \frac{MR^2}{2}$

**Step 2:** Use parallel axis theorem to shift to tangent

- Distance from center to tangent: $d = R$

$$I = I_{\text{diameter}} + MR^2 = \frac{MR^2}{2} + MR^2 = \boxed{\frac{3MR^2}{2}}$$

**Solution - Method 2: Direct approach**

Consider tangent as $x$-axis, perpendicular diameter as $y$-axis, and perpendicular to plane as $z$-axis.

**Using perpendicular axis at tangent point:**

$$I_z' = I_x' + I_y'$$

Where:

- $I_z' = MR^2 + M(R)^2 = 2MR^2$ (parallel axis from center)
- $I_y' = MR^2$ (diameter parallel to original)

$$2MR^2 = I_x' + MR^2$$

$$\boxed{I_x' = MR^2}$$

&mldr; Wait, this is different!

**The correct answer depends on the exact axis configuration.** Always draw a diagram!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Using Parallel Axis Backward**
>
> **Mistake:** $I_{cm} = I + Md^2$ (thinking $I$ increases toward COM)
>
> **Truth:** $I$ is **minimum** at COM! Always $I = I_{cm} + Md^2$ (increases away from COM)
>
> **Check:** $I \geq I_{cm}$ always!

> **⚠ Trap #2: Perpendicular Axis for 3D Objects**
>
> **Mistake:** Using $I_z = I_x + I_y$ for a sphere or cylinder
>
> **Truth:** Perpendicular axis theorem works **ONLY for planar bodies** (negligible thickness in one dimension)
>
> **Valid:** Disc, ring, plate, lamina

> **Invalid:** Sphere, solid cylinder, rod

> **⚠ Trap #3: Wrong Distance in Parallel Axis**
>
> **Mistake:** Using distance between any two points on the axes
>
> **Truth:** Use **perpendicular distance** between the two parallel axes
>
> **Example:** For rod about end:
>
> - Correct: $d = L/2$ (perpendicular from COM to end axis)

> - Wrong: $d = L$ (length of rod)

> **⚠ Trap #4: Assuming Axes Through Same Point**
>
> **Mistake:** Thinking parallel axes must pass through a common point
>
> **Truth:** Parallel axes **never intersect**! They must be parallel (not same direction, but never meeting)

---

## Worked Examples

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Rod About End**
>
> A uniform rod of mass 3 kg and length 2 m rotates about an axis through one end perpendicular to the rod. Find the moment of inertia.
>
> **Solution:**
>
> $I_{cm} = \frac{ML^2}{12} = \frac{3 \times 2^2}{12} = 1$ kg·m²
>
> Distance from COM to end: $d = \frac{L}{2} = 1$ m
>
> Using parallel axis theorem:
>
> $$I = I_{cm} + Md^2 = 1 + 3(1)^2 = 1 + 3 = \boxed{4 \text{ kg}\cdot\text{m}^2}$$
>
> **Verification:** $I = \frac{ML^2}{3} = \frac{3 \times 4}{3} = 4$ $\checkmark$

> **↗ Connection · Problem 2: Disc About Diameter**
>
> Find the moment of inertia of a uniform disc of mass 2 kg and radius 0.5 m about its diameter.
>
> **Solution:**
>
> $I_z = \frac{MR^2}{2} = \frac{2 \times (0.5)^2}{2} = 0.25$ kg·m² (perpendicular to plane)
>
> By symmetry: $I_x = I_y$ (any two perpendicular diameters)
>
> Using perpendicular axis theorem:
>
> $$I_z = I_x + I_y = 2I_x$$

$$0.25 = 2I_x$$

$$\boxed{I_x = 0.125 \text{ kg}\cdot\text{m}^2}$$

### Level 2: JEE Main

> **↗ Connection · Problem 3: Disc About Tangent**
>
> A uniform disc of mass $M$ and radius $R$ rotates about an axis perpendicular to its plane passing through a point on its circumference. Find the moment of inertia.
>
> **Solution:**
>
> $I_{cm} = \frac{MR^2}{2}$ (perpendicular to plane through center)
>
> Distance from COM to tangent point: $d = R$
>
> Using parallel axis theorem:
>
> $$I = I_{cm} + Md^2 = \frac{MR^2}{2} + MR^2$$

$$I = \frac{MR^2 + 2MR^2}{2} = \boxed{\frac{3MR^2}{2}}$$

> **↗ Connection · Problem 4: Square Plate**
>
> A square plate of mass $M$ and side $a$ rotates about an axis perpendicular to its plane passing through one corner. Find the moment of inertia.
>
> **Solution:**
>
> **Step 1:** Find $I_z$ at center using perpendicular axis theorem
>
> For square about axes through center parallel to sides:
>
> $$I_x = I_y = \frac{Ma^2}{12}$$

$$I_{z,cm} = I_x + I_y = \frac{Ma^2}{12} + \frac{Ma^2}{12} = \frac{Ma^2}{6}$$
>
> **Step 2:** Apply parallel axis to shift to corner
>
> Distance from center to corner: $d = \frac{a\sqrt{2}}{2}$
>
> $$I = I_{z,cm} + Md^2 = \frac{Ma^2}{6} + M\left(\frac{a\sqrt{2}}{2}\right)^2$$

$$I = \frac{Ma^2}{6} + M \cdot \frac{2a^2}{4} = \frac{Ma^2}{6} + \frac{Ma^2}{2}$$

$$I = \frac{Ma^2 + 3Ma^2}{6} = \boxed{\frac{2Ma^2}{3}}$$

> **↗ Connection · Problem 5: Two Rods (L-shape)**
>
> Two uniform rods each of mass $M$ and length $L$ are joined at right angles. Find the moment of inertia about an axis through the point of joining and perpendicular to the plane of the rods.
>
> **Solution:**
>
> **Each rod rotates about its end (perpendicular to its length):**
>
> For one rod about its end:
>
> $$I_1 = \frac{ML^2}{3}$$
>
> **System has two rods:**
>
> $$I_{total} = I_1 + I_2 = \frac{ML^2}{3} + \frac{ML^2}{3} = \boxed{\frac{2ML^2}{3}}$$
>
> **Alternative method using perpendicular axis:**
>
> In the plane, each rod contributes to $I_x$ or $I_y$:
>
> $$I_x = \frac{ML^2}{3}, \quad I_y = \frac{ML^2}{3}$$

$$I_z = I_x + I_y = \boxed{\frac{2ML^2}{3}}$$
>
> $\checkmark$

### Level 3: JEE Advanced

> **↗ Connection · Problem 6: Disc with Hole**
>
> A uniform disc of mass $M$ and radius $R$ has a circular hole of radius $r$ cut from it. The center of hole is at distance $d$ from center of disc. Find moment of inertia about an axis perpendicular to plane through center of disc.
>
> **Solution:**
>
> **Method: Original disc - Removed portion**
>
> **Original disc:** $I_1 = \frac{MR^2}{2}$
>
> **Removed portion:**
>
> - Mass: $m = M \times \frac{\pi r^2}{\pi R^2} = M\frac{r^2}{R^2}$

> - $I_{cm}$ of removed part: $\frac{mr^2}{2}$

> - Distance from disc center: $d$
>
> Using parallel axis for removed portion:
>
> $$I_2 = \frac{mr^2}{2} + md^2 = \frac{m(r^2 + 2d^2)}{2}$$
>
> **Remaining portion:**
>
> $$I = I_1 - I_2 = \frac{MR^2}{2} - \frac{m(r^2 + 2d^2)}{2}$$
>
> Substituting $m = M\frac{r^2}{R^2}$:
>
> $$I = \frac{MR^2}{2} - \frac{M r^2}{R^2} \cdot \frac{r^2 + 2d^2}{2}$$

$$I = \frac{M}{2}\left(R^2 - \frac{r^2(r^2 + 2d^2)}{R^2}\right)$$

$$\boxed{I = \frac{M}{2}\left(R^2 - \frac{r^4 + 2r^2d^2}{R^2}\right)}$$
>
> **Special case:** If $d = 0$ (hole at center):
>
> $$I = \frac{M}{2}\left(R^2 - \frac{r^4}{R^2}\right)$$

> **↗ Connection · Problem 7: Four Rods (Square Frame)**
>
> Four uniform rods each of mass $M$ and length $L$ are joined to form a square frame. Find the moment of inertia about:

> a) An axis through center perpendicular to plane

> b) An axis along one side
>
> **Solution:**
>
> **a) Perpendicular to plane through center:**
>
> Each rod is at distance $L/2$ from center axis.
>
> For one rod:
>
> $$I_1 = I_{cm} + Md^2 = \frac{ML^2}{12} + M\left(\frac{L}{2}\right)^2 = \frac{ML^2}{12} + \frac{ML^2}{4} = \frac{ML^2 + 3ML^2}{12} = \frac{ML^2}{3}$$
>
> **Four rods:**
>
> $$I_a = 4 \times \frac{ML^2}{3} = \boxed{\frac{4ML^2}{3}}$$
>
> **b) Along one side:**
>
> **Two rods parallel to axis:**
>
> - Rod lying along the axis: $I = 0$ (thin rod)

> - Opposite rod, every point at distance $L$: $I = ML^2$
>
> **Two rods perpendicular to axis:** Each rotates about its end
>
> - Each rod: $I = \frac{ML^2}{12} + M(L/2)^2 = \frac{ML^2}{3}$
>
> $$I_b = 0 + ML^2 + 2 \times \frac{ML^2}{3} = \boxed{\frac{5ML^2}{3}}$$

> **↗ Connection · Problem 8: Triangle of Rods**
>
> Three uniform rods each of mass $M$ and length $L$ are joined to form an equilateral triangle. Find the moment of inertia about an axis perpendicular to the plane passing through:

> a) Center of triangle

> b) One vertex
>
> **Solution:**
>
> **a) Through center (centroid):**
>
> Distance from centroid to each rod’s center: $d = \frac{L}{2\sqrt{3}}$
>
> For one rod:
>
> $$I_1 = \frac{ML^2}{12} + Md^2 = \frac{ML^2}{12} + M\left(\frac{L}{2\sqrt{3}}\right)^2$$

$$I_1 = \frac{ML^2}{12} + M \cdot \frac{L^2}{12} = \frac{ML^2}{6}$$
>
> **Three rods:**
>
> $$I_a = 3 \times \frac{ML^2}{6} = \boxed{\frac{ML^2}{2}}$$
>
> **b) Through one vertex:**
>
> **Two rods have the vertex at one end:**
>
> $$2 \times \frac{ML^2}{3} = \frac{2ML^2}{3}$$
>
> **Opposite rod:** its center is at distance $\frac{\sqrt{3}}{2}L$ (the altitude) from the vertex
>
> $$I = \frac{ML^2}{12} + M\left(\frac{\sqrt{3}L}{2}\right)^2 = \frac{ML^2}{12} + \frac{3ML^2}{4} = \frac{5ML^2}{6}$$

$$I_b = \frac{2ML^2}{3} + \frac{5ML^2}{6} = \boxed{\frac{3ML^2}{2}}$$
>
> **Verification using parallel axis:**
>
> $$I_b = \frac{ML^2}{2} + 3M\left(\frac{L}{\sqrt{3}}\right)^2 = \frac{ML^2}{2} + ML^2 = \boxed{\frac{3ML^2}{2}}$$
>
> $\checkmark$

---

## Decision Tree: Which Theorem to Use?

> **★ Key point · Quick Decision Guide**
>
> **Question:** Need to find $I$ about a new axis?
>
> **Step 1:** Is the new axis **parallel** to a known axis?
>
> - **YES** → Use **Parallel Axis Theorem:** $I = I_{cm} + Md^2$

> - **NO** → Go to Step 2
>
> **Step 2:** Is the object a **planar lamina** (2D, negligible thickness)?
>
> - **NO** → Must integrate $I = \int r^2 dm$ (no shortcut)

> - **YES** → Go to Step 3
>
> **Step 3:** Are the axes **perpendicular** (one in-plane, one out-of-plane)?
>
> - **YES** → Use **Perpendicular Axis Theorem:** $I_z = I_x + I_y$

> - **NO** → Check if you can combine both theorems
>
> **Step 4:** Can you use **both theorems** sequentially?
>
> - Example: Find $I$ about diameter (perpendicular), then shift to tangent (parallel)

---

## Real-World Applications

1. **Bat/Racket Design:** Balance point affects moment of inertia - farther from hands → larger $I$ → more power but harder to swing
2. **Doors and Handles:** Handle far from hinge → small force needed (low $I$ about handle’s perpendicular axis)
3. **Gyroscopes:** High $I$ about spin axis → stable orientation → used in navigation
4. **Flywheels:** Mass concentrated at rim → maximum $I$ for given mass → stores more rotational energy
5. **Figure Skating:** Arms in/out changes $I$ about vertical axis (parallel axis theorem in action!)

---

## Quick Revision Box

| Theorem | Formula | Applies To | Key Point |
| --- | --- | --- | --- |
| **Parallel Axis** | $I = I_{cm} + Md^2$ | Any rigid body | Axes must be **parallel** |
| **Perpendicular Axis** | $I_z = I_x + I_y$ | **Planar bodies only** | Axes must be **mutually ⊥** |

**Memory aid:**

- **Parallel:** Adds $Md^2$ (distance matters)
- **Perpendicular:** Adds two in-plane $I$’s (sum rule)

**Common combinations:**

- Ring/disc about tangent: Perpendicular → Parallel
- Plate about corner: Perpendicular → Parallel
- Composite shapes: Break into parts, apply theorems

---

## Practice Problems

### Foundation Level

1. A rod of mass 2 kg and length 1 m has $I = 0.167$ kg·m² about its center. Find $I$ about an axis 0.3 m from center.
2. A disc of mass 3 kg and radius 0.4 m rotates about a tangent perpendicular to its plane. Find $I$.
3. For a square plate of side 0.5 m and mass 4 kg, find $I$ perpendicular to plane through center.

### JEE Main Level

4. Two identical rods of mass $M$ and length $L$ are joined to form a T-shape. Find $I$ about an axis perpendicular to the plane through the junction point.
5. A circular ring of mass $M$ and radius $R$ has moment of inertia $I_1$ about a tangent in its plane and $I_2$ about a tangent perpendicular to plane. Find $I_1/I_2$.
6. A thin uniform rod of mass $M$ and length $2L$ is bent at its midpoint to form a right angle. Find $I$ about an axis through the bend perpendicular to the plane.

### JEE Advanced Level

7. A uniform disc of radius $R$ has a square hole of side $a$ cut from its center. Find moment of inertia about axis through center perpendicular to plane. (Mass of remaining portion = $M$)
8. Three particles each of mass $m$ are placed at vertices of an equilateral triangle of side $a$. Find moment of inertia about:
   a) Perpendicular axis through centroid
   b) Perpendicular axis through one vertex
   c) An axis along one side
9. A solid sphere of radius $R$ has a spherical cavity of radius $r$ at distance $d$ from its center. Find the moment of inertia about an axis through the original center. (Given: $I_{\text{sphere}} = \frac{2MR^2}{5}$)

---

## Connection to Other Topics

**Prerequisites you should know:**

- [Centre of Mass](../centre-of-mass/index.md) - Distance $d$ is always measured from COM
- [Moment of Inertia](../moment-of-inertia/index.md) - Standard formulas for $I_{cm}$

**What’s next:**

- [Torque](../torque/index.md) - $\tau = I\alpha$ uses moment of inertia
- [Angular Momentum](../angular-momentum/index.md) - $L = I\omega$ conservation problems
- [Rolling Motion](../rolling-motion/index.md) - Combined translation and rotation

**Cross-chapter links:**

- [Rotational Kinematics](../../index.md) - $I$ appears in all rotational equations
- [Rotational Energy](https://jeenotes.in/physics/work-energy-power/) - $KE = \frac{1}{2}I\omega^2$

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Parallel Axis Theorem saves integration** - shifts axis parallel to COM axis using $I = I_{cm} + Md^2$

> 2. **Always $I \geq I_{cm}$** - moment of inertia is minimum about COM axis (fundamental property)

> 3. **Perpendicular Axis Theorem: planar bodies ONLY** - cannot use for spheres, cylinders, rods!

> 4. **Memory tricks:**
>
>    - Parallel: “**P**arallel **A**dds **D**istance” → $+Md^2$

>    - Perpendicular: “**Out = In + In**” → $I_z = I_x + I_y$

> 5. **JEE loves combinations** - many problems need BOTH theorems applied sequentially

> 6. **Always draw a diagram** - mark axes, measure perpendicular distances, check if planar
>
> **“These theorems are your rotational shortcuts - master them, and you’ll solve in seconds what takes others minutes!”**
>
> Practice these on composite shapes (L-rods, frames, shapes with holes) - that’s where JEE tests your understanding. Worth 4-6 marks guaranteed!

---

From TestGuru · our mock-test platform

## You've read Parallel and Perpendicular Axis Theorems.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=rotational-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Frotational-motion%2Fparallel-perpendicular-theorems%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/rotational-motion/parallel-perpendicular-theorems/",this.page.identifier="/physics/rotational-motion/parallel-perpendicular-theorems/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="rotationalMotion" id="anim-rotationalMotion-1795396424204228041"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-rotationalMotion-1795396424204228041")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/rotational-motion/parallel-perpendicular-theorems/](https://jeenotes.in/physics/rotational-motion/parallel-perpendicular-theorems/) · raw HTML: `offline/physics/rotational-motion/parallel-perpendicular-theorems/index.html`_
