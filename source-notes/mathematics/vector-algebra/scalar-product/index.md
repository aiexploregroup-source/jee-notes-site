---
title: "Scalar Product (Dot Product): Work, Projection & Angles"
source: "https://jeenotes.in/mathematics/vector-algebra/scalar-product/"
description: "Master dot product with physics examples - learn scalar product properties, work done calculations, and projection formulas for JEE"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 7"
html: "../../../../offline/mathematics/vector-algebra/scalar-product/index.html"
extracted: "2026-11-23"
---

> Master dot product with physics examples - learn scalar product properties, work done calculations, and projection formulas for JEE

## The Hook: Thor’s Hammer and Work Done

> **★ Key point · Connect: Real Life → Scalar Product**
>
> In **Avengers: Age of Ultron**, when Thor tries to pull his hammer Mjolnir up but it doesn’t move, he’s applying force vertically upward.
>
> **Question:** Is Thor doing any work?
>
> **Answer:** NO! Because work = Force × Displacement × cos(angle)
>
> If displacement is zero (hammer doesn’t move), work = 0.
>
> But if displacement is **perpendicular** to force (like pushing a wall while walking sideways), work is also zero because cos(90°) = 0!
>
> **This “multiplication considering angle” is the scalar product - the dot product.**

**JEE Weightage:**

Scalar product appears in 3-4 questions in JEE Main, 4-5 in JEE Advanced. Essential for work-energy, projections!

---

## The Core Concept

### What is Scalar Product?

> **◐ In simple terms · Definition**
>
> The **scalar product** (or **dot product**) of two vectors $\vec{a}$ and $\vec{b}$ is defined as:
>
> $$\boxed{\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta}$$
>
> where θ is the angle between the two vectors.
>
> **Result:** A **scalar** (just a number, no direction!)

**In simple terms:** Dot product measures “how much” one vector goes in the direction of another.

### Interactive Demo: Vector Operations Visualizer

Explore vector operations interactively. Switch to **“A . B”** tab to see dot product, projection, and perpendicularity in action.

### Why “Dot” Product?

Written with a dot: $\vec{a} \cdot \vec{b}$ (read as “a dot b”)

### Alternative Notation

$$\vec{a} \cdot \vec{b} = ab\cos\theta$$

where $a = |\vec{a}|$ and $b = |\vec{b}|$

---

## Component Form (Most Useful for JEE!)

> **★ Key point · Component Formula**
>
> If $\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$ and $\vec{b} = b_1\hat{i} + b_2\hat{j} + b_3\hat{k}$, then:
>
> $$\boxed{\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3}$$
>
> **Memory Trick:** “Multiply Corresponding Components, then Add” → **MCCA**

**For 2D vectors:**

$$\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2$$

> **↗ Connection · Quick Example**
>
> Find $\vec{a} \cdot \vec{b}$ where $\vec{a} = 2\hat{i} + 3\hat{j} + \hat{k}$ and $\vec{b} = \hat{i} - 2\hat{j} + 3\hat{k}$.
>
> **Solution:**
>
> $$\vec{a} \cdot \vec{b} = (2)(1) + (3)(-2) + (1)(3)$$

$$= 2 - 6 + 3 = -1$$
>
> **Answer:** -1 (a scalar!)

---

## Properties of Scalar Product

### 1. Commutative Law

$$\boxed{\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}}$$

**Meaning:** Order doesn’t matter.

### 2. Distributive Law

$$\boxed{\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}}$$

**Meaning:** Can distribute dot product over addition.

### 3. Scalar Multiplication

$$\boxed{(m\vec{a}) \cdot \vec{b} = m(\vec{a} \cdot \vec{b}) = \vec{a} \cdot (m\vec{b})}$$

where m is a scalar.

### 4. Not Associative

$$(\vec{a} \cdot \vec{b}) \cdot \vec{c} \text{ is meaningless!}$$

**Why?** $\vec{a} \cdot \vec{b}$ gives a scalar, and you can’t dot a scalar with a vector!

### 5. Dot Product with Itself

$$\boxed{\vec{a} \cdot \vec{a} = |\vec{a}|^2 = a^2}$$

**Super useful!** This gives magnitude squared.

---

## Dot Product of Unit Vectors

> **★ Key point · Must Memorize!**
>
> **Dot product of same unit vectors:**
>
> $$\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1$$
>
> **Dot product of different unit vectors:**
>
> $$\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0$$
>
> **Memory Trick:** “Same = 1, Different = 0” (because perpendicular unit vectors!)

**Why?** Angle between same vectors = 0°, cos(0°) = 1
Angle between perpendicular vectors = 90°, cos(90°) = 0

---

## Finding Angle Between Vectors

> **★ Key point · Most Important Application!**
>
> From $\vec{a} \cdot \vec{b} = ab\cos\theta$:
>
> $$\boxed{\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}}$$
>
> **This appears in 50% of JEE dot product problems!**

**Steps:**

1. Calculate $\vec{a} \cdot \vec{b}$ using component form
2. Find $|\vec{a}|$ and $|\vec{b}|$
3. Use $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{ab}$
4. Find θ = $\cos^{-1}(...)$

> **↗ Connection · Example: Angle Between Vectors**
>
> Find angle between $\vec{a} = \hat{i} + \hat{j} + \hat{k}$ and $\vec{b} = \hat{i} + \hat{j}$.
>
> **Solution:**
>
> - $\vec{a} \cdot \vec{b} = (1)(1) + (1)(1) + (1)(0) = 2$

> - $|\vec{a}| = \sqrt{1+1+1} = \sqrt{3}$

> - $|\vec{b}| = \sqrt{1+1} = \sqrt{2}$

> - $\cos\theta = \frac{2}{\sqrt{3} \cdot \sqrt{2}} = \frac{2}{\sqrt{6}} = \frac{\sqrt{6}}{3}$

> - $\theta = \cos^{-1}\left(\frac{\sqrt{6}}{3}\right) \approx 35.26°$

---

## Perpendicular and Parallel Vectors

### Perpendicular Vectors (Orthogonal)

$$\boxed{\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0}$$

**Why?** θ = 90° → cos(90°) = 0

> **★ Key point · JEE Shortcut**
>
> **To check if vectors perpendicular:** Just calculate dot product!
>
> - If $\vec{a} \cdot \vec{b} = 0$ → Perpendicular ✓

> - If $\vec{a} \cdot \vec{b} \neq 0$ → Not perpendicular ✗
>
> **No need to find angle!** Saves 30 seconds.

### Parallel Vectors (Collinear)

$$\boxed{\vec{a} \parallel \vec{b} \iff \vec{a} \cdot \vec{b} = \pm ab}$$

**Why?** θ = 0° or 180° → cos θ = ±1

- **Same direction (0°):** $\vec{a} \cdot \vec{b} = ab$ (positive)
- **Opposite direction (180°):** $\vec{a} \cdot \vec{b} = -ab$ (negative)

> **↗ Connection · Example: Perpendicularity Condition**
>
> For what value of k are vectors $\vec{a} = k\hat{i} + 2\hat{j} + \hat{k}$ and $\vec{b} = 2\hat{i} - \hat{j} + 3\hat{k}$ perpendicular?
>
> **Solution:**

> For perpendicular vectors: $\vec{a} \cdot \vec{b} = 0$
>
> $$k(2) + (2)(-1) + (1)(3) = 0$$

$$2k - 2 + 3 = 0$$

$$2k + 1 = 0$$

$$k = -\frac{1}{2}$$

---

## Projection of Vectors

> **★ Key point · Projection Formula**
>
> **Projection of $\vec{a}$ on $\vec{b}$:**
>
> $$\boxed{\text{proj}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|} = |\vec{a}|\cos\theta}$$
>
> **Vector projection:**
>
> $$\boxed{\text{proj}_{\vec{b}}\vec{a} \cdot \hat{b} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\vec{b}}$$
>
> **Memory Trick:** “Dot divided by bottom” → $\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$

**Scalar projection** = just the number (can be positive/negative)
**Vector projection** = projection in direction of $\vec{b}$

> **↗ Connection · Example: Projection**
>
> Find projection of $\vec{a} = 2\hat{i} + 3\hat{j}$ on $\vec{b} = \hat{i} + \hat{j}$.
>
> **Solution:**
>
> $$\text{proj}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$$

$$= \frac{(2)(1) + (3)(1)}{\sqrt{1+1}} = \frac{5}{\sqrt{2}} = \frac{5\sqrt{2}}{2}$$

---

## Work Done (Physics Application)

> **◐ In simple terms · Most Important Physics Application**
>
> **Work done** by force $\vec{F}$ causing displacement $\vec{s}$:
>
> $$\boxed{W = \vec{F} \cdot \vec{s} = Fs\cos\theta}$$
>
> where θ is angle between force and displacement.
>
> **See:** [Work Energy Theorem](../../../physics/work-energy-power/work-energy-theorem/index.md)

**Special Cases:**

- θ = 0° (force along displacement): W = Fs (maximum work)
- θ = 90° (force perpendicular): W = 0 (no work!)
- θ = 180° (force opposite): W = -Fs (negative work)

> **↗ Connection · Example: Work Calculation**
>
> Force $\vec{F} = 3\hat{i} + 4\hat{j}$ N causes displacement $\vec{s} = 2\hat{i} - \hat{j}$ m. Find work done.
>
> **Solution:**
>
> $$W = \vec{F} \cdot \vec{s} = (3)(2) + (4)(-1) = 6 - 4 = 2 \text{ J}$$
>
> **Answer:** 2 Joules

---

## Memory Tricks & Patterns

### Mnemonic for Dot Product

**Memory Trick:** “**D**ot gives **D**ecimal” → Result is a scalar (number)

**Memory Trick for Components:** “**M**ultiply **C**orresponding **C**omponents **A**dd” → **MCCA**

### Pattern Recognition

> **★ Key point · JEE Pattern #1: Zero Dot Product**
>
> **If problem says “perpendicular” or “orthogonal”:**
>
> - Immediately write: $\vec{a} \cdot \vec{b} = 0$

> - Solve for unknown
>
> **Appears in:** 60% of vector perpendicularity problems

> **★ Key point · JEE Pattern #2: Unit Vector Dots**
>
> **See $\hat{i}, \hat{j}, \hat{k}$ in calculation?**
>
> - Same vectors: 1

> - Different vectors: 0
>
> **Quick expansion:**
>
> $$(\hat{i}+2\hat{j}) \cdot (3\hat{i}-\hat{j}) = 3(1) + (-2)(1) = 1$$
>
> **No need to write full components!**

> **★ Key point · JEE Pattern #3: Magnitude from Dot Product**
>
> **Need magnitude? Use self dot product:**
>
> $$|\vec{a}|^2 = \vec{a} \cdot \vec{a}$$
>
> **Example:** $\vec{a} = 3\hat{i} + 4\hat{j}$
>
> $$|\vec{a}|^2 = \vec{a} \cdot \vec{a} = 9 + 16 = 25 \Rightarrow |\vec{a}| = 5$$

---

## When to Use Dot Product

> **★ Key point · Decision Tree**
>
> **Use scalar product when:**
>
> - Finding **angle** between vectors

> - Checking if vectors are **perpendicular**

> - Finding **projection** of one vector on another

> - Calculating **work done** (physics)

> - Finding **component** of vector along another direction
>
> **Don’t use when:**
>
> - Need result to be a vector → Use [cross product](../vector-product/index.md)

> - Finding area, torque → Use cross product

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Dot Product Order in Division**
>
> **Wrong:** $\cos\theta = \frac{|\vec{a}||\vec{b}|}{\vec{a} \cdot \vec{b}}$ (inverted!)
>
> **Right:** $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$ (dot product in numerator)

> **⚠ Trap #2: Forgetting Dot Product is Scalar**
>
> **Wrong:** $(\vec{a} \cdot \vec{b}) + \vec{c}$ (can’t add scalar to vector!)
>
> **Right:** Can only add scalar to scalar, vector to vector

> **⚠ Trap #3: Projection vs Component**
>
> **Question:** “Find component of $\vec{a}$ along $\vec{b}$”
>
> **Wrong:** Using $\frac{\vec{a} \cdot \vec{b}}{|\vec{a}|}$
>
> **Right:** Using $\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$ (divide by denominator’s magnitude!)
>
> **Component of A along B** → divide by |B|

> **⚠ Trap #4: Sign in Work Done**
>
> **Scenario:** Force opposes displacement
>
> **Wrong:** Work = Fs (always positive)
>
> **Right:** Check angle!
>
> - 0° ≤ θ < 90°: Positive work

> - θ = 90°: Zero work

> - 90° < θ ≤ 180°: Negative work
>
> **Use:** $W = Fs\cos\theta$ to get correct sign!

> **⚠ Trap #5: Unit Vector Dot Products**
>
> **Wrong:** $\hat{i} \cdot \hat{j} = 1$ (assuming all are 1)
>
> **Right:**
>
> - Same unit vectors: 1

> - Different unit vectors: 0 (perpendicular!)
>
> **Remember:** Standard unit vectors are mutually perpendicular!

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Basic Dot Product**
>
> Find $\vec{a} \cdot \vec{b}$ where $\vec{a} = 3\hat{i} + 2\hat{j}$ and $\vec{b} = \hat{i} + 4\hat{j}$.
>
> **Solution:**
>
> $$\vec{a} \cdot \vec{b} = (3)(1) + (2)(4) = 3 + 8 = 11$$

> **↗ Connection · Problem 2: Magnitude Using Dot Product**
>
> Find $|\vec{a}|$ where $\vec{a} = 2\hat{i} - 3\hat{j} + 6\hat{k}$ using dot product.
>
> **Solution:**
>
> $$|\vec{a}|^2 = \vec{a} \cdot \vec{a} = (2)^2 + (-3)^2 + (6)^2 = 4 + 9 + 36 = 49$$

$$|\vec{a}| = 7$$

> **↗ Connection · Problem 3: Unit Vector Dot Products**
>
> Calculate $(\hat{i} + \hat{j}) \cdot (2\hat{i} - 3\hat{j} + \hat{k})$.
>
> **Solution:**
>
> $$= (1)(2) + (1)(-3) + (0)(1) = 2 - 3 + 0 = -1$$

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Angle Between Vectors**
>
> Find angle between $\vec{a} = 2\hat{i} + 3\hat{j} + \hat{k}$ and $\vec{b} = \hat{i} + 2\hat{j} - \hat{k}$.
>
> **Solution:**
>
> - $\vec{a} \cdot \vec{b} = (2)(1) + (3)(2) + (1)(-1) = 2 + 6 - 1 = 7$

> - $|\vec{a}| = \sqrt{4+9+1} = \sqrt{14}$

> - $|\vec{b}| = \sqrt{1+4+1} = \sqrt{6}$

> - $\cos\theta = \frac{7}{\sqrt{14} \cdot \sqrt{6}} = \frac{7}{\sqrt{84}} = \frac{7}{2\sqrt{21}}$

> - $\theta = \cos^{-1}\left(\frac{7}{2\sqrt{21}}\right)$

> **↗ Connection · Problem 5: Perpendicularity Condition**
>
> Find λ such that $\vec{a} = 2\hat{i} + \lambda\hat{j} + \hat{k}$ and $\vec{b} = \hat{i} - 2\hat{j} + 3\hat{k}$ are perpendicular.
>
> **Solution:**

> For perpendicular: $\vec{a} \cdot \vec{b} = 0$
>
> $$2(1) + \lambda(-2) + 1(3) = 0$$

$$2 - 2\lambda + 3 = 0$$

$$5 = 2\lambda$$

$$\lambda = \frac{5}{2}$$

> **↗ Connection · Problem 6: Work Done**
>
> Force $\vec{F} = 2\hat{i} + 3\hat{j} - \hat{k}$ N displaces object by $\vec{s} = 3\hat{i} - 2\hat{j} + \hat{k}$ m. Find work done.
>
> **Solution:**
>
> $$W = \vec{F} \cdot \vec{s} = (2)(3) + (3)(-2) + (-1)(1)$$

$$= 6 - 6 - 1 = -1 \text{ J}$$
>
> **Negative work** means force opposes displacement!

> **↗ Connection · Problem 7: Projection**
>
> Find projection of $\vec{a} = 2\hat{i} + 3\hat{j} + \hat{k}$ on $\vec{b} = \hat{i} + \hat{j} + \hat{k}$.
>
> **Solution:**
>
> $$\text{proj}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$$

$$= \frac{(2)(1) + (3)(1) + (1)(1)}{\sqrt{1+1+1}} = \frac{6}{\sqrt{3}} = 2\sqrt{3}$$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 8: Angle Bisector**
>
> If $|\vec{a}| = |\vec{b}| = 1$ and angle between them is 60°, find $|\vec{a} + \vec{b}|$.
>
> **Solution:**
>
> $$|\vec{a} + \vec{b}|^2 = (\vec{a} + \vec{b}) \cdot (\vec{a} + \vec{b})$$

$$= \vec{a} \cdot \vec{a} + 2\vec{a} \cdot \vec{b} + \vec{b} \cdot \vec{b}$$

$$= |\vec{a}|^2 + 2|\vec{a}||\vec{b}|\cos 60° + |\vec{b}|^2$$

$$= 1 + 2(1)(1)\left(\frac{1}{2}\right) + 1 = 1 + 1 + 1 = 3$$

$$|\vec{a} + \vec{b}| = \sqrt{3}$$

> **↗ Connection · Problem 9: Vector Equation**
>
> If $\vec{a} = \hat{i} + 2\hat{j} + 3\hat{k}$, $\vec{b} = 2\hat{i} - \hat{j} + \hat{k}$, find vector $\vec{c}$ perpendicular to both and $\vec{c} \cdot (\hat{i} + \hat{j} + \hat{k}) = 6$.
>
> **Solution:**

> Let $\vec{c} = x\hat{i} + y\hat{j} + z\hat{k}$
>
> Perpendicular to $\vec{a}$: $x + 2y + 3z = 0$ &mldr; (1)

> Perpendicular to $\vec{b}$: $2x - y + z = 0$ &mldr; (2)

> Given condition: $x + y + z = 6$ &mldr; (3)
>
> From (1): $x = -2y - 3z$

> Substitute in (2): $2(-2y-3z) - y + z = 0$
>
> $$-4y - 6z - y + z = 0$$

$$-5y - 5z = 0 \Rightarrow y = -z$$
>
> Substitute in (3): $x - z + z = 6 \Rightarrow x = 6$

> From (1): $6 + 2y + 3z = 0$
>
> Using $y = -z$: $6 - 2z + 3z = 0 \Rightarrow z = -6$, $y = 6$
>
> **Answer:** $\vec{c} = 6\hat{i} + 6\hat{j} - 6\hat{k}$

> **↗ Connection · Problem 10: Angle Between Diagonals**
>
> Find angle between diagonals of parallelogram with adjacent sides $\vec{a} = 3\hat{i} + 4\hat{j}$ and $\vec{b} = \hat{i} + 2\hat{j}$.
>
> **Solution:**

> Diagonals: $\vec{d_1} = \vec{a} + \vec{b} = 4\hat{i} + 6\hat{j}$

> $\vec{d_2} = \vec{a} - \vec{b} = 2\hat{i} + 2\hat{j}$
>
> $$\vec{d_1} \cdot \vec{d_2} = (4)(2) + (6)(2) = 8 + 12 = 20$$

$$|\vec{d_1}| = \sqrt{16+36} = \sqrt{52} = 2\sqrt{13}$$

$$|\vec{d_2}| = \sqrt{4+4} = 2\sqrt{2}$$

$$\cos\theta = \frac{20}{2\sqrt{13} \cdot 2\sqrt{2}} = \frac{20}{4\sqrt{26}} = \frac{5}{\sqrt{26}}$$

$$\theta = \cos^{-1}\left(\frac{5}{\sqrt{26}}\right)$$

---

## Connection to Physics

> **◐ In simple terms · Dot Product is Everywhere in Physics!**
>
> **Critical Applications:**
>
> 1. **Work Done:** $W = \vec{F} \cdot \vec{s}$
>
>    - See: [Work Energy Theorem](../../../physics/work-energy-power/work-energy-theorem/index.md)

> 2. **Power:** $P = \vec{F} \cdot \vec{v}$
>
>    - See: [Power](../../../physics/work-energy-power/power/index.md)

> 3. **Magnetic Force:** $W = 0$ because $\vec{F}_B \perp \vec{v}$ (dot product = 0)
>
>    - See: [Magnetic Force](../../../physics/magnetism/index.md)

> 4. **Electric Potential:** $V = -\int \vec{E} \cdot d\vec{l}$
>
>    - See: [Electric Potential](../../../physics/electrostatics/electric-potential/index.md)

> 5. **Projection in Mechanics:** Component of velocity along incline
>
>    - See: [Motion on Inclined Plane](../../../physics/laws-of-motion/index.md)
>
> **Master dot product → Understand work-energy problems instantly!**

---

## Quick Revision Box

| Concept | Formula |
| --- | --- |
| **Definition** | $\vec{a} \cdot \vec{b} = ab\cos\theta$ |
| **Component form** | $\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3$ |
| **Angle between vectors** | $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{ |
| **Perpendicular condition** | $\vec{a} \cdot \vec{b} = 0$ |
| **Parallel condition** | $\vec{a} \cdot \vec{b} = \pm ab$ |
| **Magnitude** | $ |
| **Projection of a on b** | $\frac{\vec{a} \cdot \vec{b}}{ |
| **Work done** | $W = \vec{F} \cdot \vec{s}$ |
| **Unit vectors** | Same = 1, Different = 0 |

---

## What’s Next?

Now learn the other type of vector multiplication:

> **★ Key point · Next Topics**
>
> **[Vector Product (Cross Product)](../vector-product/index.md)** - For area, torque, perpendicular vectors
>
> **[Triple Products](../triple-products/index.md)** - Scalar triple product (volume), vector triple product
>
> **Also explore:**
>
> - [Work Energy Theorem](../../../physics/work-energy-power/work-energy-theorem/index.md) - Uses dot product extensively

> - [Angle Between Lines](../../three-dimensional-geometry/angle-between-lines/index.md) - Uses dot product for angles

> - [Direction Cosines](../../three-dimensional-geometry/direction-cosines/index.md) - Uses unit vector dot products

> - [Vectors Basics](../vectors-basics/index.md) - Review fundamentals

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Dot product gives a scalar** - just a number, no direction

> 2. **Component formula is fastest** - multiply corresponding components, add

> 3. **Perpendicular ⟺ dot product = 0** - instant perpendicularity check

> 4. **Angle formula is high-yield** - appears in 50% of problems

> 5. **Work = F·s** - most important physics application
>
> **“In JEE, see ‘angle between vectors’? Think dot product. See ‘perpendicular’? Set dot product = 0. See ‘work done’? Use F·s. Master these three, score full marks!”**
>
> **Time-saving tip:** For perpendicularity, don’t find angle - just check if dot product is zero!

---

**Pro Tip:** When problem gives magnitudes and angle, use $ab\cos\theta$. When given components, use $a_1b_1 + a_2b_2 + a_3b_3$. Choose based on what’s given - saves 1 minute!

From TestGuru · our mock-test platform

## You've read Scalar Product (Dot Product): Work, Projection & Angles.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=vector-algebra&tg_exam=jee-main&tg_page=%2Fmathematics%2Fvector-algebra%2Fscalar-product%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/vector-algebra/scalar-product/",this.page.identifier="/mathematics/vector-algebra/scalar-product/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="vectorOperations" id="anim-vectorOperations-1795396422559935549"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-vectorOperations-1795396422559935549")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/vector-algebra/scalar-product/](https://jeenotes.in/mathematics/vector-algebra/scalar-product/) · raw HTML: `offline/mathematics/vector-algebra/scalar-product/index.html`_
