---
title: "Vector Product (Cross Product): Torque, Area & Perpendicular Vectors"
source: "https://jeenotes.in/mathematics/vector-algebra/vector-product/"
description: "Master cross product with real physics - learn vector product properties, right-hand rule, torque calculations, and area of parallelograms for JEE"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 7"
html: "../../../../offline/mathematics/vector-algebra/vector-product/index.html"
extracted: "2026-11-23"
---

> Master cross product with real physics - learn vector product properties, right-hand rule, torque calculations, and area of parallelograms for JEE

## The Hook: Opening a Door - Why Position Matters

> **★ Key point · Connect: Real Life → Vector Product**
>
> Try this experiment: Push a door open from two different positions:
>
> 1. **Push at the edge** (far from hinges) - Door opens easily

> 2. **Push near the hinges** - Much harder to open!
>
> Same force, but different **torque**. Why?
>
> **Torque = Force × Distance × sin(angle)**
>
> This “multiplication giving perpendicular vector” is the **vector product** or **cross product**.
>
> **Real example:** When you use a wrench, you instinctively push perpendicular to the handle and far from the bolt. That’s maximizing cross product!

**JEE Weightage:**

Vector product appears in 4-5 questions in JEE Main, 5-6 in JEE Advanced. Essential for rotational motion, magnetism!

---

## The Core Concept

### What is Vector Product?

> **◐ In simple terms · Definition**
>
> The **vector product** (or **cross product**) of two vectors $\vec{a}$ and $\vec{b}$ is defined as:
>
> $$\boxed{\vec{a} \times \vec{b} = |\vec{a}||\vec{b}|\sin\theta \, \hat{n}}$$
>
> where:
>
> - θ is the angle between vectors (0° ≤ θ ≤ 180°)

> - $\hat{n}$ is unit vector **perpendicular** to both $\vec{a}$ and $\vec{b}$
>
> **Result:** A **vector** perpendicular to both original vectors!

**In simple terms:** Cross product gives a vector pointing “out” of the plane containing the two vectors.

### Why “Cross” Product?

Written with a cross: $\vec{a} \times \vec{b}$ (read as “a cross b”)

### Magnitude

$$\boxed{|\vec{a} \times \vec{b}| = ab\sin\theta}$$

where $a = |\vec{a}|$ and $b = |\vec{b}|$

---

## Direction: The Right-Hand Rule

> **★ Key point · Right-Hand Rule (Must Master!)**
>
> To find direction of $\vec{a} \times \vec{b}$:
>
> **Steps:**
>
> 1. Point fingers of **right hand** in direction of $\vec{a}$

> 2. **Curl** fingers toward $\vec{b}$ (through smaller angle)

> 3. **Thumb** points in direction of $\vec{a} \times \vec{b}$
>
> **Memory Trick:** “**F**irst vector **C**url to second **T**humb out” → **FCT**

**Important:** Direction follows right-hand rule - this is a convention!

---

## Component Form (Most Useful for JEE!)

> **★ Key point · Determinant Formula**
>
> If $\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$ and $\vec{b} = b_1\hat{i} + b_2\hat{j} + b_3\hat{k}$:
>
> $$\boxed{\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}}$$
>
> **Expanding:**
>
> $$\vec{a} \times \vec{b} = (a_2b_3 - a_3b_2)\hat{i} - (a_1b_3 - a_3b_1)\hat{j} + (a_1b_2 - a_2b_1)\hat{k}$$
>
> **Memory Trick:** “**C**over **i**, **C**ross **r**est” → Cover column, cross multiply!

### Determinant Expansion Shortcut

For $\hat{i}$ component: Cover first column, cross multiply:

$$\begin{vmatrix} a_2 & a_3 \\ b_2 & b_3 \end{vmatrix} = a_2b_3 - a_3b_2$$

For $\hat{j}$ component: Cover second column, cross multiply, **add minus sign**:

$$-\begin{vmatrix} a_1 & a_3 \\ b_1 & b_3 \end{vmatrix} = -(a_1b_3 - a_3b_1)$$

For $\hat{k}$ component: Cover third column, cross multiply:

$$\begin{vmatrix} a_1 & a_2 \\ b_1 & b_2 \end{vmatrix} = a_1b_2 - a_2b_1$$

> **↗ Connection · Quick Example**
>
> Find $\vec{a} \times \vec{b}$ where $\vec{a} = 2\hat{i} + 3\hat{j} + \hat{k}$ and $\vec{b} = \hat{i} - \hat{j} + 2\hat{k}$.
>
> **Solution:**
>
> $$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 3 & 1 \\ 1 & -1 & 2 \end{vmatrix}$$

$$= \hat{i}(3 \cdot 2 - 1 \cdot (-1)) - \hat{j}(2 \cdot 2 - 1 \cdot 1) + \hat{k}(2 \cdot (-1) - 3 \cdot 1)$$

$$= \hat{i}(6 + 1) - \hat{j}(4 - 1) + \hat{k}(-2 - 3)$$

$$= 7\hat{i} - 3\hat{j} - 5\hat{k}$$

---

## Properties of Vector Product

### 1. Anti-Commutative Law

$$\boxed{\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})}$$

**Meaning:** Order matters! Reversing gives opposite direction.

**Why?** Right-hand rule reverses when you swap vectors.

### 2. Distributive Law

$$\boxed{\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}}$$

**Meaning:** Can distribute cross product over addition.

### 3. Scalar Multiplication

$$\boxed{(m\vec{a}) \times \vec{b} = m(\vec{a} \times \vec{b}) = \vec{a} \times (m\vec{b})}$$

where m is a scalar.

### 4. Not Associative

$$\boxed{(\vec{a} \times \vec{b}) \times \vec{c} \neq \vec{a} \times (\vec{b} \times \vec{c})}$$

**Important:** Grouping matters in cross product!

### 5. Cross Product with Itself

$$\boxed{\vec{a} \times \vec{a} = \vec{0}}$$

**Why?** θ = 0° → sin(0°) = 0

---

## Cross Product of Unit Vectors

> **★ Key point · Must Memorize - Cyclic Order!**
>
> **Following cyclic order (i → j → k → i):**
>
> $$\hat{i} \times \hat{j} = \hat{k}$$

$$\hat{j} \times \hat{k} = \hat{i}$$

$$\hat{k} \times \hat{i} = \hat{j}$$
>
> **Reverse cyclic order (add minus):**
>
> $$\hat{j} \times \hat{i} = -\hat{k}$$

$$\hat{k} \times \hat{j} = -\hat{i}$$

$$\hat{i} \times \hat{k} = -\hat{j}$$
>
> **Cross with itself:**
>
> $$\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \vec{0}$$
>
> **Memory Trick:** Draw circle: i → j → k → i
>
> - **Clockwise:** Positive

> - **Counter-clockwise:** Negative

```fallback
j
    ↑
    |
i ← + → k
```

Following arrows (i to j to k): Positive
Against arrows: Negative

---

## Geometric Interpretations

### 1. Area of Parallelogram

> **★ Key point · Area Formula**
>
> Area of parallelogram with adjacent sides $\vec{a}$ and $\vec{b}$:
>
> $$\boxed{\text{Area} = |\vec{a} \times \vec{b}| = ab\sin\theta}$$
>
> **This is the magnitude of cross product!**

**Why?** Area of parallelogram = base × height = $b \times (a\sin\theta)$

### 2. Area of Triangle

$$\boxed{\text{Area of triangle} = \frac{1}{2}|\vec{a} \times \vec{b}|}$$

**Triangle is half of parallelogram!**

> **↗ Connection · Example: Area Calculation**
>
> Find area of triangle with vertices A(1, 2, 3), B(2, 3, 1), C(3, 1, 2).
>
> **Solution:**
>
> $$\overrightarrow{AB} = (2-1)\hat{i} + (3-2)\hat{j} + (1-3)\hat{k} = \hat{i} + \hat{j} - 2\hat{k}$$

$$\overrightarrow{AC} = (3-1)\hat{i} + (1-2)\hat{j} + (2-3)\hat{k} = 2\hat{i} - \hat{j} - \hat{k}$$

$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 1 & -2 \\ 2 & -1 & -1 \end{vmatrix}$$

$$= \hat{i}(-1-2) - \hat{j}(-1+4) + \hat{k}(-1-2)$$

$$= -3\hat{i} - 3\hat{j} - 3\hat{k}$$

$$|\overrightarrow{AB} \times \overrightarrow{AC}| = \sqrt{9+9+9} = 3\sqrt{3}$$
>
> **Area** = $\frac{1}{2} \times 3\sqrt{3} = \frac{3\sqrt{3}}{2}$ square units

---

## Perpendicular and Parallel Vectors

### Parallel Vectors (Collinear)

$$\boxed{\vec{a} \parallel \vec{b} \iff \vec{a} \times \vec{b} = \vec{0}}$$

**Why?** θ = 0° or 180° → sin θ = 0

> **★ Key point · JEE Shortcut**
>
> **To check if vectors parallel:** Calculate cross product!
>
> - If $\vec{a} \times \vec{b} = \vec{0}$ → Parallel ✓

> - If $\vec{a} \times \vec{b} \neq \vec{0}$ → Not parallel ✗

### Finding Perpendicular Vector

**Need vector perpendicular to both $\vec{a}$ and $\vec{b}$?**

$$\boxed{\vec{n} = \vec{a} \times \vec{b}}$$

This is perpendicular to BOTH!

> **↗ Connection · Example: Perpendicular Vector**
>
> Find vector perpendicular to both $\vec{a} = \hat{i} + 2\hat{j}$ and $\vec{b} = 2\hat{i} - \hat{j} + 3\hat{k}$.
>
> **Solution:**
>
> $$\vec{n} = \vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 2 & 0 \\ 2 & -1 & 3 \end{vmatrix}$$

$$= \hat{i}(6-0) - \hat{j}(3-0) + \hat{k}(-1-4)$$

$$= 6\hat{i} - 3\hat{j} - 5\hat{k}$$
>
> **Verify:** Check $\vec{n} \cdot \vec{a} = 0$ and $\vec{n} \cdot \vec{b} = 0$ ✓

---

## Physics Applications

### 1. Torque (Rotational Force)

> **★ Key point · Torque Formula**
>
> $$\boxed{\vec{\tau} = \vec{r} \times \vec{F}}$$
>
> where:
>
> - $\vec{r}$ = position vector from pivot to point of application

> - $\vec{F}$ = applied force

> - $\vec{\tau}$ = torque (turning effect)
>
> **Magnitude:** $\tau = rF\sin\theta$
>
> **See:** [Rotational Dynamics](../../../physics/rotational-motion/index.md)

**Maximum torque:** When force is perpendicular to position vector (θ = 90°)

### Interactive Demo: Vector Operations Visualizer

Visualize cross product, parallelogram area, and the perpendicular result vector. Switch to **“A x B”** tab and try **3D mode** for full visualization.

### 2. Angular Momentum

$$\boxed{\vec{L} = \vec{r} \times \vec{p}}$$

where $\vec{p} = m\vec{v}$ is linear momentum.

### 3. Magnetic Force on Moving Charge

> **◐ In simple terms · Lorentz Force**
>
> $$\boxed{\vec{F} = q(\vec{v} \times \vec{B})}$$
>
> where:
>
> - q = charge

> - $\vec{v}$ = velocity

> - $\vec{B}$ = magnetic field
>
> **Force is perpendicular to both velocity and magnetic field!**
>
> **See:** [Magnetic Force](../../../physics/magnetism/index.md)

### 4. Moment of Force

For multiple forces creating rotation, net torque:

$$\vec{\tau}_{net} = \sum (\vec{r}_i \times \vec{F}_i)$$

---

## Memory Tricks & Patterns

### Mnemonic for Cross Product

**Memory Trick:** “**C**ross gives **C**ross-wise vector” → Result is perpendicular

**Memory Trick for Sign:** “**i** → **j** → **k** → **i**” (cycle forward = positive)

### Pattern Recognition

> **★ Key point · JEE Pattern #1: Zero Cross Product**
>
> **If problem says “parallel” or “collinear”:**
>
> - Immediately write: $\vec{a} \times \vec{b} = \vec{0}$

> - Expand determinant, set components = 0
>
> **Appears in:** 40% of vector parallel/collinear problems

> **★ Key point · JEE Pattern #2: Unit Vector Cross Products**
>
> **See $\hat{i}, \hat{j}, \hat{k}$ in calculation?**

> Use cyclic order directly!
>
> **Example:** $(\hat{i}+2\hat{j}) \times (3\hat{i}-\hat{k})$
>
> $$= 3(\hat{i} \times \hat{i}) - (\hat{i} \times \hat{k}) + 6(\hat{j} \times \hat{i}) - 2(\hat{j} \times \hat{k})$$

$$= 0 + \hat{j} - 6\hat{k} - 2\hat{i}$$

$$= -2\hat{i} + \hat{j} - 6\hat{k}$$

> **★ Key point · JEE Pattern #3: Area Problems**
>
> **Need area of parallelogram/triangle with sides as vectors?**
>
> - Directly use $|\vec{a} \times \vec{b}|$ (parallelogram)

> - Or $\frac{1}{2}|\vec{a} \times \vec{b}|$ (triangle)
>
> **No need for base-height formula!**

---

## When to Use Cross Product

> **★ Key point · Decision Tree**
>
> **Use cross product when:**
>
> - Finding **area** of parallelogram/triangle

> - Need vector **perpendicular** to two given vectors

> - Calculating **torque** (τ = r × F)

> - Finding **angular momentum** (L = r × p)

> - Solving **magnetic force** problems (F = qv × B)

> - Checking if vectors are **parallel** (cross product = 0)
>
> **Use dot product when:**
>
> - Finding **angle** between vectors → See [Scalar Product](../scalar-product/index.md)

> - Checking **perpendicularity** (dot product = 0)

> - Calculating **work done**

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Order Matters!**
>
> **Wrong:** $\vec{a} \times \vec{b} = \vec{b} \times \vec{a}$
>
> **Right:** $\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})$ (opposite directions!)
>
> **JEE loves to test this in MCQs!**

> **⚠ Trap #2: Middle Term Sign in Determinant**
>
> **Wrong:** $\vec{a} \times \vec{b} = (a_2b_3 - a_3b_2)\hat{i} + (a_1b_3 - a_3b_1)\hat{j} + ...$
>
> **Right:** $\vec{a} \times \vec{b} = (a_2b_3 - a_3b_2)\hat{i} - (a_1b_3 - a_3b_1)\hat{j} + ...$
>
> **The $\hat{j}$ term has MINUS sign!**

> **⚠ Trap #3: Cross Product is NOT Associative**
>
> **Wrong:** $(\vec{a} \times \vec{b}) \times \vec{c} = \vec{a} \times (\vec{b} \times \vec{c})$
>
> **Right:** These are generally different! Parentheses matter.
>
> **Use:** Triple product formulas if needed → See [Triple Products](../triple-products/index.md)

> **⚠ Trap #4: Magnitude vs Vector**
>
> **Question:** “Find cross product of $\vec{a}$ and $\vec{b}$”
>
> **Wrong:** Writing just the magnitude $ab\sin\theta$
>
> **Right:** Must include direction! Either:
>
> - Full vector form: $(a_2b_3-a_3b_2)\hat{i} - ...$

> - Or magnitude + direction: $ab\sin\theta \, \hat{n}$

> **⚠ Trap #5: Unit Vector Cyclic Order**
>
> **Wrong:** $\hat{i} \times \hat{k} = \hat{j}$ (wrong direction!)
>
> **Right:** $\hat{i} \times \hat{k} = -\hat{j}$ (against cycle)
>
> **Remember:** i → j → k → i (forward = positive)

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Basic Cross Product**
>
> Find $\vec{a} \times \vec{b}$ where $\vec{a} = 2\hat{i} + \hat{j}$ and $\vec{b} = \hat{i} + 3\hat{k}$.
>
> **Solution:**
>
> $$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 1 & 0 \\ 1 & 0 & 3 \end{vmatrix}$$

$$= \hat{i}(3-0) - \hat{j}(6-0) + \hat{k}(0-1)$$

$$= 3\hat{i} - 6\hat{j} - \hat{k}$$

> **↗ Connection · Problem 2: Unit Vector Cross Products**
>
> Calculate $(\hat{i} + \hat{j}) \times (\hat{j} + \hat{k})$.
>
> **Solution:**
>
> $$= \hat{i} \times \hat{j} + \hat{i} \times \hat{k} + \hat{j} \times \hat{j} + \hat{j} \times \hat{k}$$

$$= \hat{k} - \hat{j} + \vec{0} + \hat{i}$$

$$= \hat{i} - \hat{j} + \hat{k}$$

> **↗ Connection · Problem 3: Area of Parallelogram**
>
> Find area of parallelogram with adjacent sides $\vec{a} = \hat{i} + 2\hat{j}$ and $\vec{b} = 2\hat{i} + \hat{j}$.
>
> **Solution:**
>
> $$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 2 & 0 \\ 2 & 1 & 0 \end{vmatrix} = \hat{k}(1-4) = -3\hat{k}$$
>
> **Area** = $|\vec{a} \times \vec{b}| = |-3| = 3$ square units

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Perpendicular Vector**
>
> Find unit vector perpendicular to both $\vec{a} = 2\hat{i} + \hat{j} + \hat{k}$ and $\vec{b} = \hat{i} - \hat{j} + 2\hat{k}$.
>
> **Solution:**
>
> $$\vec{n} = \vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 1 & 1 \\ 1 & -1 & 2 \end{vmatrix}$$

$$= \hat{i}(2+1) - \hat{j}(4-1) + \hat{k}(-2-1)$$

$$= 3\hat{i} - 3\hat{j} - 3\hat{k}$$
>
> Magnitude: $|\vec{n}| = \sqrt{9+9+9} = 3\sqrt{3}$
>
> **Unit vector:** $\hat{n} = \frac{3\hat{i}-3\hat{j}-3\hat{k}}{3\sqrt{3}} = \frac{\hat{i}-\hat{j}-\hat{k}}{\sqrt{3}}$

> **↗ Connection · Problem 5: Area of Triangle**
>
> Find area of triangle with vertices A(1, 0, 0), B(0, 1, 0), C(0, 0, 1).
>
> **Solution:**
>
> $$\overrightarrow{AB} = -\hat{i} + \hat{j}$$

$$\overrightarrow{AC} = -\hat{i} + \hat{k}$$

$$\overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ -1 & 1 & 0 \\ -1 & 0 & 1 \end{vmatrix}$$

$$= \hat{i}(1-0) - \hat{j}(-1-0) + \hat{k}(0+1)$$

$$= \hat{i} + \hat{j} + \hat{k}$$
>
> Magnitude: $\sqrt{1+1+1} = \sqrt{3}$
>
> **Area** = $\frac{1}{2}\sqrt{3} = \frac{\sqrt{3}}{2}$ square units

> **↗ Connection · Problem 6: Collinearity Check**
>
> Check if vectors $\vec{a} = 2\hat{i} + 3\hat{j} + \hat{k}$ and $\vec{b} = 4\hat{i} + 6\hat{j} + 2\hat{k}$ are parallel.
>
> **Solution:**
>
> $$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 3 & 1 \\ 4 & 6 & 2 \end{vmatrix}$$

$$= \hat{i}(6-6) - \hat{j}(4-4) + \hat{k}(12-12)$$

$$= \vec{0}$$
>
> Since $\vec{a} \times \vec{b} = \vec{0}$, vectors are **parallel** ✓
>
> (Also observe: $\vec{b} = 2\vec{a}$)

> **↗ Connection · Problem 7: Torque Calculation**
>
> Force $\vec{F} = 3\hat{i} + 4\hat{j}$ N acts at position $\vec{r} = 2\hat{i} - \hat{j}$ m from pivot. Find torque.
>
> **Solution:**
>
> $$\vec{\tau} = \vec{r} \times \vec{F} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & -1 & 0 \\ 3 & 4 & 0 \end{vmatrix}$$

$$= \hat{k}(8 + 3) = 11\hat{k} \text{ N}\cdot\text{m}$$
>
> **Magnitude:** 11 N·m (perpendicular to plane, outward)

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 8: Vector Equation with Cross Product**
>
> If $\vec{a} = 2\hat{i} + \hat{j} + \hat{k}$, $\vec{b} = \hat{i} + 2\hat{j} - \hat{k}$, find $\vec{c}$ such that $\vec{a} \times \vec{c} = \vec{b}$ and $\vec{a} \cdot \vec{c} = 3$.
>
> **Solution:**

> Let $\vec{c} = x\hat{i} + y\hat{j} + z\hat{k}$
>
> From $\vec{a} \times \vec{c} = \vec{b}$:
>
> $$\begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 1 & 1 \\ x & y & z \end{vmatrix} = \hat{i} + 2\hat{j} - \hat{k}$$
>
> Comparing components:
>
> - $(z-y)\hat{i} = \hat{i}$ → $z - y = 1$ &mldr; (1)

> - $(x-2z)\hat{j} = 2\hat{j}$ → $x - 2z = 2$ &mldr; (2)

> - $(2y-x)\hat{k} = -\hat{k}$ → $2y - x = -1$ &mldr; (3)
>
> From $\vec{a} \cdot \vec{c} = 3$:
>
> $$2x + y + z = 3$$
>
> &mldr; (4)
>
> Solving: From (2) and (3): $x = 2z + 2$ and $2y = x - 1 = 2z + 1$

> So $y = z + \frac{1}{2}$
>
> From (1): $z - (z + \frac{1}{2}) = 1$ → $-\frac{1}{2} = 1$ (contradiction!)
>
> **This system has no solution.** Such $\vec{c}$ doesn’t exist!

> **↗ Connection · Problem 9: Angle Using Cross Product**
>
> Find sin θ where θ is angle between $\vec{a} = \hat{i} + 2\hat{j} + 2\hat{k}$ and $\vec{b} = 2\hat{i} + \hat{j} - 2\hat{k}$.
>
> **Solution:**
>
> $$\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 2 & 2 \\ 2 & 1 & -2 \end{vmatrix}$$

$$= \hat{i}(-4-2) - \hat{j}(-2-4) + \hat{k}(1-4)$$

$$= -6\hat{i} + 6\hat{j} - 3\hat{k}$$

$$|\vec{a} \times \vec{b}| = \sqrt{36+36+9} = \sqrt{81} = 9$$

$$|\vec{a}| = \sqrt{1+4+4} = 3, \quad |\vec{b}| = \sqrt{4+1+4} = 3$$

$$\sin\theta = \frac{|\vec{a} \times \vec{b}|}{|\vec{a}||\vec{b}|} = \frac{9}{3 \times 3} = 1$$

$$\theta = 90°$$
>
> (vectors are perpendicular!)

> **↗ Connection · Problem 10: Volume of Parallelepiped**
>
> Find volume of parallelepiped with adjacent edges $\vec{a} = \hat{i}+\hat{j}$, $\vec{b} = \hat{j}+\hat{k}$, $\vec{c} = \hat{k}+\hat{i}$.
>
> **Solution:**

> Volume = $|\vec{a} \cdot (\vec{b} \times \vec{c})|$ (scalar triple product)
>
> $$\vec{b} \times \vec{c} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix} = \hat{i}(1-0) - \hat{j}(0-1) + \hat{k}(0-1)$$

$$= \hat{i} + \hat{j} - \hat{k}$$

$$\vec{a} \cdot (\vec{b} \times \vec{c}) = (1)(1) + (1)(1) + (0)(-1) = 2$$
>
> **Volume** = $|2| = 2$ cubic units
>
> (See [Triple Products](../triple-products/index.md) for more on this!)

---

## Connection to Physics

> **◐ In simple terms · Cross Product Dominates Rotational & Magnetic Physics!**
>
> **Critical Applications:**
>
> 1. **Torque:** $\vec{\tau} = \vec{r} \times \vec{F}$
>
>    - See: [Rotational Dynamics](../../../physics/rotational-motion/index.md)

> 2. **Angular Momentum:** $\vec{L} = \vec{r} \times \vec{p}$
>
>    - See: [Angular Momentum](../../../physics/rotational-motion/angular-momentum/index.md)

> 3. **Magnetic Force on Charge:** $\vec{F} = q\vec{v} \times \vec{B}$
>
>    - See: [Magnetic Force](../../../physics/magnetism/index.md)

> 4. **Magnetic Force on Current:** $\vec{F} = I\vec{L} \times \vec{B}$
>
>    - See: [Force on Current Carrying Conductor](../../../physics/magnetism/index.md)

> 5. **Angular Velocity:** $\vec{v} = \vec{\omega} \times \vec{r}$
>
>    - See: [Circular Motion](../../../physics/kinematics/circular-motion/index.md)
>
> **Master cross product → Solve 90% of rotational mechanics & all magnetism problems!**

---

## Quick Revision Box

| Concept | Formula |
| --- | --- |
| **Definition** | $\vec{a} \times \vec{b} = ab\sin\theta \, \hat{n}$ |
| **Magnitude** | $ |
| **Component form** | $(a_2b_3-a_3b_2)\hat{i} - (a_1b_3-a_3b_1)\hat{j} + (a_1b_2-a_2b_1)\hat{k}$ |
| **Order matters** | $\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})$ |
| **Parallel condition** | $\vec{a} \times \vec{b} = \vec{0}$ |
| **Unit vectors** | $\hat{i} \times \hat{j} = \hat{k}$, $\hat{j} \times \hat{k} = \hat{i}$, $\hat{k} \times \hat{i} = \hat{j}$ |
| **Area of parallelogram** | $ |
| **Area of triangle** | $\frac{1}{2} |
| **Torque** | $\vec{\tau} = \vec{r} \times \vec{F}$ |
| **Perpendicular vector** | $\vec{n} = \vec{a} \times \vec{b}$ |

---

## What’s Next?

Now combine dot and cross products:

> **★ Key point · Next Topics**
>
> **[Triple Products](../triple-products/index.md)** - Scalar triple product (volume), vector triple product (important identities)
>
> **Also explore:**
>
> - [Rotational Dynamics](../../../physics/rotational-motion/index.md) - Uses torque = r × F extensively

> - [Magnetic Effects](../../../physics/magnetism/index.md) - F = qv × B is fundamental

> - [3D Geometry](../../three-dimensional-geometry/index.md) - Equation of plane using cross product

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Cross product gives perpendicular vector** - that’s its superpower!

> 2. **Order matters:** $\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})$ - don’t forget minus!

> 3. **Determinant method is fastest** - master the 3×3 expansion

> 4. **Middle term has minus sign** - most common calculation error!

> 5. **Area = |a × b|** - instant area of parallelogram/triangle

> 6. **Parallel ⟺ cross product = 0** - instant collinearity check
>
> **“In JEE, see ‘area’? Think cross product magnitude. See ’torque’? Think r × F. See ‘perpendicular vector’? Calculate cross product. Master these, clear rotational mechanics & magnetism!”**
>
> **Time-saving tip:** Use cyclic order for unit vectors - don’t expand determinant!

---

**Pro Tip:** In physics problems, if answer asks for “magnitude of torque/angular momentum/magnetic force”, you only need $|\vec{a} \times \vec{b}| = ab\sin\theta$ - no need to find full vector! Saves 1 minute!

From TestGuru · our mock-test platform

## You've read Vector Product (Cross Product): Torque, Area & Perpendicular Vectors.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=vector-algebra&tg_exam=jee-main&tg_page=%2Fmathematics%2Fvector-algebra%2Fvector-product%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/vector-algebra/vector-product/",this.page.identifier="/mathematics/vector-algebra/vector-product/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="vectorOperations" id="anim-vectorOperations-1795396422568766521"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-vectorOperations-1795396422568766521")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/vector-algebra/vector-product/](https://jeenotes.in/mathematics/vector-algebra/vector-product/) · raw HTML: `offline/mathematics/vector-algebra/vector-product/index.html`_
