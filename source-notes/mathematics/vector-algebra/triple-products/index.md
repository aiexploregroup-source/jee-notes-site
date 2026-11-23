---
title: "Triple Products: Scalar Triple Product (Volume) & Vector Triple Product"
source: "https://jeenotes.in/mathematics/vector-algebra/triple-products/"
description: "Master triple products - learn scalar triple product for volume calculations and vector triple product identities crucial for JEE Advanced"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 7"
html: "../../../../offline/mathematics/vector-algebra/triple-products/index.html"
extracted: "2026-11-23"
---

> Master triple products - learn scalar triple product for volume calculations and vector triple product identities crucial for JEE Advanced

## The Hook: Building a Room - Volume from Vectors

> **★ Key point · Connect: Real Life → Triple Products**
>
> Imagine you’re designing a room in a video game like Minecraft or Fortnite. You’re given three edges:
>
> - **Edge 1:** 3 blocks East

> - **Edge 2:** 4 blocks North

> - **Edge 3:** 5 blocks Up
>
> **Question:** What’s the volume of this room?
>
> You could multiply 3 × 4 × 5 = 60 cubic blocks if edges are perpendicular. But what if the room is **slanted** (a parallelepiped)?
>
> **Answer:** Use **Scalar Triple Product** - it gives volume for ANY three edges!
>
> $$\text{Volume} = |\vec{a} \cdot (\vec{b} \times \vec{c})|$$
>
> This combines both dot and cross products - the ultimate vector operation!

**JEE Weightage:**

Triple products appear in 2-3 questions in JEE Main, 3-4 in JEE Advanced. High-difficulty, high-reward topic!

---

## The Core Concept

### What are Triple Products?

> **◐ In simple terms · Two Types of Triple Products**
>
> When you combine three vectors, you get:
>
> 1. **Scalar Triple Product:** $\vec{a} \cdot (\vec{b} \times \vec{c})$ → gives a **scalar** (volume)

> 2. **Vector Triple Product:** $\vec{a} \times (\vec{b} \times \vec{c})$ → gives a **vector**
>
> **Key Difference:**
>
> - Scalar triple = dot of (cross) → scalar

> - Vector triple = cross of (cross) → vector

---

## Part 1: Scalar Triple Product

### Definition

> **★ Key point · Scalar Triple Product**
>
> $$\boxed{\vec{a} \cdot (\vec{b} \times \vec{c})}$$
>
> Also written as: $[\vec{a} \, \vec{b} \, \vec{c}]$ or $(\vec{a}, \vec{b}, \vec{c})$
>
> **Result:** A scalar (number)
>
> **Geometric Meaning:** Volume of parallelepiped with edges $\vec{a}, \vec{b}, \vec{c}$

### Interactive Demo: Triple Product Visualization

Visualize how three vectors form a parallelepiped and compute volume.

### Formula Using Determinant

> **★ Key point · Most Important Formula!**
>
> If $\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$, $\vec{b} = b_1\hat{i} + b_2\hat{j} + b_3\hat{k}$, $\vec{c} = c_1\hat{i} + c_2\hat{j} + c_3\hat{k}$:
>
> $$\boxed{[\vec{a} \, \vec{b} \, \vec{c}] = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}}$$
>
> **This is the fastest method for JEE!**

**Memory Trick:** “Row-wise write components” → First vector in first row, etc.

> **↗ Connection · Quick Example**
>
> Find $[\vec{a} \, \vec{b} \, \vec{c}]$ where $\vec{a} = \hat{i}+\hat{j}+\hat{k}$, $\vec{b} = 2\hat{i}+3\hat{j}+\hat{k}$, $\vec{c} = \hat{i}+\hat{k}$.
>
> **Solution:**
>
> $$[\vec{a} \, \vec{b} \, \vec{c}] = \begin{vmatrix} 1 & 1 & 1 \\ 2 & 3 & 1 \\ 1 & 0 & 1 \end{vmatrix}$$
>
> Expanding along first row:
>
> $$= 1(3-0) - 1(2-1) + 1(0-3)$$

$$= 3 - 1 - 3 = -1$$

### Geometric Interpretation: Volume

> **★ Key point · Volume of Parallelepiped**
>
> $$\boxed{\text{Volume} = |[\vec{a} \, \vec{b} \, \vec{c}]|}$$
>
> **Take absolute value** because volume is positive!
>
> **Parallelepiped:** 3D figure with 6 parallelogram faces (like a slanted box)

**Volume of Tetrahedron:**

$$\boxed{\text{Volume} = \frac{1}{6}|[\vec{a} \, \vec{b} \, \vec{c}]|}$$

Tetrahedron is 1/6 of parallelepiped (like pyramid vs rectangular prism).

> **↗ Connection · Example: Volume Calculation**
>
> Find volume of parallelepiped with edges $\vec{a} = 2\hat{i}+3\hat{j}$, $\vec{b} = \hat{i}+\hat{j}+\hat{k}$, $\vec{c} = 3\hat{i}+\hat{j}+2\hat{k}$.
>
> **Solution:**
>
> $$V = \left|\begin{vmatrix} 2 & 3 & 0 \\ 1 & 1 & 1 \\ 3 & 1 & 2 \end{vmatrix}\right|$$
>
> Expanding:
>
> $$= |2(2-1) - 3(2-3) + 0|$$

$$= |2(1) - 3(-1)|$$

$$= |2 + 3| = 5 \text{ cubic units}$$

---

## Properties of Scalar Triple Product

### 1. Cyclic Property

> **★ Key point · Cyclic Permutation Unchanged**
>
> $$\boxed{[\vec{a} \, \vec{b} \, \vec{c}] = [\vec{b} \, \vec{c} \, \vec{a}] = [\vec{c} \, \vec{a} \, \vec{b}]}$$
>
> **Cyclic rotation** doesn’t change value!
>
> **Memory Trick:** “**C**ycle **K**eeps **V**alue” → **CKV**

**Why?** Volume of room doesn’t depend on which edge you call “first”!

### 2. Anti-Cyclic Property

$$\boxed{[\vec{a} \, \vec{b} \, \vec{c}] = -[\vec{b} \, \vec{a} \, \vec{c}]}$$

**Swapping any two vectors** changes sign (like determinants).

### 3. Dot and Cross are Interchangeable

$$\boxed{\vec{a} \cdot (\vec{b} \times \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}}$$

**Amazing property:** Can move the cross product around!

### 4. Zero Scalar Triple Product

$$\boxed{[\vec{a} \, \vec{b} \, \vec{c}] = 0 \iff \text{vectors are coplanar}}$$

**Coplanar** = all three vectors lie in same plane.

**Why?** If coplanar, they can’t form a 3D box → volume = 0!

> **★ Key point · JEE Shortcut: Coplanarity Test**
>
> **To check if three vectors are coplanar:**

> Calculate scalar triple product. If = 0, they’re coplanar!
>
> **Appears in:** 40% of coplanarity problems

### 5. Scalar Multiplication

$$[\lambda\vec{a} \, \vec{b} \, \vec{c}] = \lambda[\vec{a} \, \vec{b} \, \vec{c}]$$

Can take scalar out (like determinants).

---

## Coplanarity of Four Points

> **★ Key point · Four Points Coplanar Condition**
>
> Points A, B, C, D are **coplanar** if:
>
> $$\boxed{[\overrightarrow{AB} \, \overrightarrow{AC} \, \overrightarrow{AD}] = 0}$$
>
> **Use:** Position vectors to form edge vectors, then check scalar triple product!

> **↗ Connection · Example: Coplanarity Check**
>
> Check if points A(1,2,3), B(2,3,1), C(3,1,2), D(0,4,6) are coplanar.
>
> **Solution:**
>
> $$\overrightarrow{AB} = \hat{i} + \hat{j} - 2\hat{k}$$

$$\overrightarrow{AC} = 2\hat{i} - \hat{j} - \hat{k}$$

$$\overrightarrow{AD} = -\hat{i} + 2\hat{j} + 3\hat{k}$$

$$[\overrightarrow{AB} \, \overrightarrow{AC} \, \overrightarrow{AD}] = \begin{vmatrix} 1 & 1 & -2 \\ 2 & -1 & -1 \\ -1 & 2 & 3 \end{vmatrix}$$

$$= 1(-3+2) - 1(6-1) + (-2)(4-1)$$

$$= -1 - 5 - 6 = -12 \neq 0$$
>
> **Not coplanar!** (volume would be 12 cubic units)

---

## Part 2: Vector Triple Product

### Definition

> **★ Key point · Vector Triple Product**
>
> $$\boxed{\vec{a} \times (\vec{b} \times \vec{c})}$$
>
> **Result:** A vector (not a scalar!)
>
> **Warning:** $(\vec{a} \times \vec{b}) \times \vec{c} \neq \vec{a} \times (\vec{b} \times \vec{c})$ → NOT associative!

### BAC-CAB Rule (Most Important!)

> **★ Key point · BAC-CAB Identity**
>
> $$\boxed{\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})}$$
>
> **Memory Trick:** “**BAC** minus **CAB**”
>
> - **B** comes first, multiply by **A·C**

> - **C** comes second, multiply by **A·B**
>
> **This is THE most important vector identity for JEE Advanced!**

**In words:** The result is a **linear combination** of $\vec{b}$ and $\vec{c}$ (the two vectors being crossed).

### Why “BAC-CAB”?

$$\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a} \cdot \vec{c})\vec{b} - (\vec{a} \cdot \vec{b})\vec{c}$$

Reading the vectors: **B**-**A**·**C** minus **C**-**A**·**B** → **BAC-CAB**

> **↗ Connection · Example: Vector Triple Product**
>
> Simplify $\hat{i} \times (\hat{j} \times \hat{k})$ using BAC-CAB rule.
>
> **Solution:**
>
> $$\hat{i} \times (\hat{j} \times \hat{k}) = \hat{j}(\hat{i} \cdot \hat{k}) - \hat{k}(\hat{i} \cdot \hat{j})$$

$$= \hat{j}(0) - \hat{k}(0) = \vec{0}$$
>
> **Alternatively:** $\hat{j} \times \hat{k} = \hat{i}$, so $\hat{i} \times \hat{i} = \vec{0}$ ✓

### Other Form of Vector Triple Product

$$\boxed{(\vec{a} \times \vec{b}) \times \vec{c} = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{a}(\vec{b} \cdot \vec{c})}$$

**Different from** $\vec{a} \times (\vec{b} \times \vec{c})$!

**Memory trick:** The result is a combination of the **first two vectors** ($\vec{a}$ and $\vec{b}$).

---

## Properties of Vector Triple Product

### 1. NOT Associative

$$\vec{a} \times (\vec{b} \times \vec{c}) \neq (\vec{a} \times \vec{b}) \times \vec{c}$$

**Parentheses matter!** Always use BAC-CAB for the correct form.

### 2. Result is Coplanar

> **◐ Important Geometric Property**
>
> $$\vec{a} \times (\vec{b} \times \vec{c})$$
>
> is **coplanar** with $\vec{b}$ and $\vec{c}$.
>
> **Why?** It’s a linear combination of $\vec{b}$ and $\vec{c}$!

### 3. Perpendicular to First Vector

$$\vec{a} \times (\vec{b} \times \vec{c})$$

is **perpendicular** to $\vec{a}$.

**Why?** It’s a cross product with $\vec{a}$!

---

## Important Identities

### Lagrange’s Identity

$$\boxed{(\vec{a} \times \vec{b}) \cdot (\vec{c} \times \vec{d}) = (\vec{a} \cdot \vec{c})(\vec{b} \cdot \vec{d}) - (\vec{a} \cdot \vec{d})(\vec{b} \cdot \vec{c})}$$

**High-level identity** - appears in JEE Advanced only.

### Jacobi Identity

$$\vec{a} \times (\vec{b} \times \vec{c}) + \vec{b} \times (\vec{c} \times \vec{a}) + \vec{c} \times (\vec{a} \times \vec{b}) = \vec{0}$$

**Cyclic sum equals zero** - rarely asked but elegant!

---

## Memory Tricks & Patterns

### Mnemonic for Scalar Triple Product

**Memory Trick:** “**S**calar **T**riple = **V**olume” → **STV**

**Memory Trick for Zero:** “**C**oplanar → **Z**ero” → If all vectors in same plane, volume = 0

### Pattern Recognition

> **★ Key point · JEE Pattern #1: Coplanarity Questions**
>
> **If problem asks “Are vectors/points coplanar?”**
>
> - Form scalar triple product

> - If = 0, coplanar ✓

> - If ≠ 0, not coplanar ✗
>
> **Appears in:** 60% of coplanarity problems

> **★ Key point · JEE Pattern #2: BAC-CAB Simplification**
>
> **See** $\vec{a} \times (\vec{b} \times \vec{c})$ **in problem?**
>
> - Immediately apply BAC-CAB: $(\vec{a} \cdot \vec{c})\vec{b} - (\vec{a} \cdot \vec{b})\vec{c}$

> - Calculate dot products

> - Simplify
>
> **Don’t try to calculate cross products directly!** BAC-CAB is always faster.

> **★ Key point · JEE Pattern #3: Volume Questions**
>
> **Keywords indicating scalar triple product:**
>
> - “Volume of parallelepiped”

> - “Volume of tetrahedron” (use 1/6 factor)

> - “Are points coplanar?”
>
> **Direct application** - write determinant, evaluate!

---

## When to Use Triple Products

> **★ Key point · Decision Tree**
>
> **Use Scalar Triple Product when:**
>
> - Finding **volume** of parallelepiped/tetrahedron

> - Checking if vectors/points are **coplanar**

> - Need to evaluate $\vec{a} \cdot (\vec{b} \times \vec{c})$
>
> **Use Vector Triple Product when:**
>
> - Simplifying $\vec{a} \times (\vec{b} \times \vec{c})$

> - Need vector **coplanar** with two given vectors

> - Solving vector equations with nested cross products
>
> **Use BAC-CAB rule always for vector triple product!**

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting Absolute Value for Volume**
>
> **Wrong:** Volume = $[\vec{a} \, \vec{b} \, \vec{c}]$ (could be negative!)
>
> **Right:** Volume = $|[\vec{a} \, \vec{b} \, \vec{c}]|$ (absolute value!)
>
> Scalar triple product can be negative, but volume is always positive!

> **⚠ Trap #2: BAC-CAB Sign Error**
>
> **Wrong:** $\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) + \vec{c}(\vec{a} \cdot \vec{b})$ (plus!)
>
> **Right:** $\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$ (minus!)
>
> **It’s BAC *minus* CAB!**

> **⚠ Trap #3: Associativity Assumption**
>
> **Wrong:** $\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a} \times \vec{b}) \times \vec{c}$
>
> **Right:** These are DIFFERENT vectors! Parentheses matter.
>
> Always expand using BAC-CAB for the correct form!

> **⚠ Trap #4: Determinant Row Order**
>
> **Wrong:** Writing vectors in determinant randomly
>
> **Right:** First vector → first row, second → second row, third → third row
>
> Order matters! Swapping rows changes sign.

> **⚠ Trap #5: Tetrahedron Volume Factor**
>
> **Wrong:** Volume of tetrahedron = $|[\vec{a} \, \vec{b} \, \vec{c}]|$
>
> **Right:** Volume of tetrahedron = $\frac{1}{6}|[\vec{a} \, \vec{b} \, \vec{c}]|$
>
> Don’t forget the 1/6 factor!

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Basic Scalar Triple Product**
>
> Find $[\vec{a} \, \vec{b} \, \vec{c}]$ where $\vec{a} = \hat{i}$, $\vec{b} = \hat{j}$, $\vec{c} = \hat{k}$.
>
> **Solution:**
>
> $$[\vec{a} \, \vec{b} \, \vec{c}] = \begin{vmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{vmatrix} = 1$$
>
> (This is volume of unit cube!)

> **↗ Connection · Problem 2: Cyclic Property**
>
> If $[\vec{a} \, \vec{b} \, \vec{c}] = 5$, find $[\vec{b} \, \vec{c} \, \vec{a}]$.
>
> **Solution:**

> By cyclic property: $[\vec{b} \, \vec{c} \, \vec{a}] = [\vec{a} \, \vec{b} \, \vec{c}] = 5$

> **↗ Connection · Problem 3: Simple BAC-CAB**
>
> Simplify $\hat{i} \times (\hat{i} \times \hat{j})$.
>
> **Solution:**

> Using BAC-CAB:
>
> $$\hat{i} \times (\hat{i} \times \hat{j}) = \hat{i}(\hat{i} \cdot \hat{j}) - \hat{j}(\hat{i} \cdot \hat{i})$$

$$= \hat{i}(0) - \hat{j}(1) = -\hat{j}$$
>
> **Verify:** $\hat{i} \times \hat{j} = \hat{k}$, so $\hat{i} \times \hat{k} = -\hat{j}$ ✓

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Volume of Parallelepiped**
>
> Find volume of parallelepiped with edges:
>
> - $\vec{a} = 2\hat{i} + 3\hat{j} + 4\hat{k}$

> - $\vec{b} = \hat{i} + 2\hat{j} + 3\hat{k}$

> - $\vec{c} = 3\hat{i} + \hat{j} + 2\hat{k}$
>
> **Solution:**
>
> $$V = \left|\begin{vmatrix} 2 & 3 & 4 \\ 1 & 2 & 3 \\ 3 & 1 & 2 \end{vmatrix}\right|$$
>
> Expanding along first row:
>
> $$= |2(4-3) - 3(2-9) + 4(1-6)|$$

$$= |2(1) - 3(-7) + 4(-5)|$$

$$= |2 + 21 - 20| = |3| = 3 \text{ cubic units}$$

> **↗ Connection · Problem 5: Coplanarity of Vectors**
>
> Check if $\vec{a} = \hat{i}+2\hat{j}+3\hat{k}$, $\vec{b} = 2\hat{i}+3\hat{j}+4\hat{k}$, $\vec{c} = 3\hat{i}+4\hat{j}+5\hat{k}$ are coplanar.
>
> **Solution:**
>
> $$[\vec{a} \, \vec{b} \, \vec{c}] = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{vmatrix}$$
>
> Notice: Each row is previous row + $(\hat{i}+\hat{j}+\hat{k})$

> This means vectors are in arithmetic progression → coplanar!
>
> Expanding: $= 1(15-16) - 2(10-12) + 3(8-9)$
>
> $$= -1 + 4 - 3 = 0$$
>
> **Coplanar!** ✓

> **↗ Connection · Problem 6: Volume of Tetrahedron**
>
> Find volume of tetrahedron with vertices at O(0,0,0), A(1,2,3), B(2,1,3), C(3,2,1).
>
> **Solution:**
>
> $$\overrightarrow{OA} = \hat{i}+2\hat{j}+3\hat{k}$$

$$\overrightarrow{OB} = 2\hat{i}+\hat{j}+3\hat{k}$$

$$\overrightarrow{OC} = 3\hat{i}+2\hat{j}+\hat{k}$$

$$[\overrightarrow{OA} \, \overrightarrow{OB} \, \overrightarrow{OC}] = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \\ 3 & 2 & 1 \end{vmatrix}$$

$$= 1(1-6) - 2(2-9) + 3(4-3)$$

$$= -5 + 14 + 3 = 12$$
>
> **Volume** = $\frac{1}{6}|12| = 2$ cubic units

> **↗ Connection · Problem 7: BAC-CAB Application**
>
> If $\vec{a} = \hat{i}+\hat{j}$, $\vec{b} = \hat{j}+\hat{k}$, $\vec{c} = \hat{k}+\hat{i}$, find $\vec{a} \times (\vec{b} \times \vec{c})$.
>
> **Solution:**

> Using BAC-CAB:
>
> $$\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$$

$$\vec{a} \cdot \vec{c} = (1)(1) + (1)(0) + (0)(1) = 1$$

$$\vec{a} \cdot \vec{b} = (1)(0) + (1)(1) + (0)(1) = 1$$

$$= \vec{b}(1) - \vec{c}(1) = (\hat{j}+\hat{k}) - (\hat{k}+\hat{i})$$

$$= -\hat{i} + \hat{j}$$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 8: Coplanarity of Four Points**
>
> Show that A(1,1,1), B(2,3,5), C(4,0,-1), D(0,5,3) are coplanar.
>
> **Solution:**
>
> $$\overrightarrow{AB} = \hat{i}+2\hat{j}+4\hat{k}$$

$$\overrightarrow{AC} = 3\hat{i}-\hat{j}-2\hat{k}$$

$$\overrightarrow{AD} = -\hat{i}+4\hat{j}+2\hat{k}$$

$$[\overrightarrow{AB} \, \overrightarrow{AC} \, \overrightarrow{AD}] = \begin{vmatrix} 1 & 2 & 4 \\ 3 & -1 & -2 \\ -1 & 4 & 2 \end{vmatrix}$$

$$= 1(-2+8) - 2(6-2) + 4(12-1)$$

$$= 6 - 8 + 44 = 42 \neq 0$$
>
> **Not coplanar!**
>
> (There must be calculation error in problem statement, or points given are incorrect)

> **↗ Connection · Problem 9: Vector Triple Product Equation**
>
> If $\vec{a}, \vec{b}, \vec{c}$ are unit vectors satisfying $\vec{a} + \vec{b} + \vec{c} = \vec{0}$, find $\vec{a} \times (\vec{b} \times \vec{c})$.
>
> **Solution:**

> From $\vec{a} + \vec{b} + \vec{c} = \vec{0}$:
>
> $$\vec{b} + \vec{c} = -\vec{a}$$
>
> Using BAC-CAB:
>
> $$\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$$
>
> From $\vec{a} + \vec{b} + \vec{c} = \vec{0}$, taking dot with $\vec{a}$:
>
> $$\vec{a} \cdot \vec{a} + \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c} = 0$$

$$1 + \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c} = 0$$
>
> Similarly, $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{c} = \vec{c} \cdot \vec{a} = -\frac{1}{2}$
>
> $$\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(-\frac{1}{2}) - \vec{c}(-\frac{1}{2})$$

$$= -\frac{1}{2}\vec{b} + \frac{1}{2}\vec{c} = \frac{1}{2}(\vec{c} - \vec{b})$$

> **↗ Connection · Problem 10: Reciprocal System**
>
> If $\vec{a} = \hat{i}+\hat{j}$, $\vec{b} = \hat{j}+\hat{k}$, $\vec{c} = \hat{k}+\hat{i}$, find $\vec{a}'$ such that $\vec{a}' \cdot \vec{a} = 1$, $\vec{a}' \cdot \vec{b} = 0$, $\vec{a}' \cdot \vec{c} = 0$.
>
> **Solution:**

> $\vec{a}'$ is perpendicular to both $\vec{b}$ and $\vec{c}$, so:
>
> $$\vec{a}' = \lambda(\vec{b} \times \vec{c})$$

$$\vec{b} \times \vec{c} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix} = \hat{i}(1-0) - \hat{j}(0-1) + \hat{k}(0-1)$$

$$= \hat{i} + \hat{j} - \hat{k}$$
>
> From $\vec{a}' \cdot \vec{a} = 1$:
>
> $$\lambda(\hat{i}+\hat{j}-\hat{k}) \cdot (\hat{i}+\hat{j}) = 1$$

$$\lambda(1+1) = 1 \Rightarrow \lambda = \frac{1}{2}$$

$$\vec{a}' = \frac{1}{2}(\hat{i}+\hat{j}-\hat{k})$$
>
> **This is called reciprocal vector system!**

---

## Connection to Physics & 3D Geometry

> **◐ In simple terms · Triple Products Across Subjects**
>
> **Applications:**
>
> 1. **Volume Calculations:** Parallelepiped, tetrahedron
>
>    - See: [3D Coordinate Geometry](../../three-dimensional-geometry/index.md)

> 2. **Coplanarity Tests:** Points/vectors in same plane
>
>    - See: [Plane Equations](../../three-dimensional-geometry/index.md)

> 3. **Torque in Physics:** Sometimes involves vector triple products
>
>    - See: [Rotational Dynamics](../../../physics/rotational-motion/index.md)

> 4. **Electromagnetic Theory:** Advanced E&M uses vector identities
>
>    - See: [Maxwell’s Equations](../../../physics/magnetism/index.md)

> 5. **Equation of Plane:** Normal vector using cross product
>
>    - See: [3D Geometry](../../three-dimensional-geometry/index.md)
>
> **Master triple products → Excel in 3D geometry & advanced physics!**

---

## Quick Revision Box

| Concept | Formula |
| --- | --- |
| **Scalar triple product** | $[\vec{a} \, \vec{b} \, \vec{c}] = \vec{a} \cdot (\vec{b} \times \vec{c})$ |
| **Determinant form** | $\begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$ |
| **Volume of parallelepiped** | $\|[\vec{a} \, \vec{b} \, \vec{c}]\|$ |
| **Volume of tetrahedron** | $\frac{1}{6}\|[\vec{a} \, \vec{b} \, \vec{c}]\|$ |
| **Coplanar condition** | $[\vec{a} \, \vec{b} \, \vec{c}] = 0$ |
| **Cyclic property** | $[\vec{a} \, \vec{b} \, \vec{c}] = [\vec{b} \, \vec{c} \, \vec{a}] = [\vec{c} \, \vec{a} \, \vec{b}]$ |
| **Vector triple product** | $\vec{a} \times (\vec{b} \times \vec{c})$ |
| **BAC-CAB rule** | $\vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$ |

---

## What’s Next?

You’ve completed the Vector Algebra chapter! Apply these concepts:

> **★ Key point · Related Topics**
>
> **Mathematics:**
>
> - [3D Coordinate Geometry](../../three-dimensional-geometry/index.md) - Equations of lines, planes using vectors

> - [Matrices & Determinants](../../matrices-determinants/index.md) - Determinant concepts used in scalar triple product
>
> **Physics:**
>
> - [Rotational Dynamics](../../../physics/rotational-motion/index.md) - Torque, angular momentum (cross products)

> - [Magnetism](../../../physics/magnetism/index.md) - Magnetic force F = qv × B

> - [Electrostatics](../../../physics/electrostatics/index.md) - Electric field, potential (dot products)
>
> **Practice:**
>
> - Solve previous year JEE questions on vectors

> - Focus on volume and coplanarity problems

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Scalar triple product = Volume** - Use determinant form for speed

> 2. **Coplanar ⟺ scalar triple product = 0** - Instant coplanarity test

> 3. **BAC-CAB rule is mandatory** - Don’t calculate vector triple product directly

> 4. **Absolute value for volume** - Scalar triple product can be negative

> 5. **Cyclic property saves time** - $[\vec{a} \, \vec{b} \, \vec{c}] = [\vec{b} \, \vec{c} \, \vec{a}]$

> 6. **Tetrahedron = (1/6) parallelepiped** - Don’t forget factor!
>
> **“In JEE, see ‘volume’? Calculate scalar triple product determinant. See ‘coplanar’? Check if scalar triple = 0. See vector triple? Apply BAC-CAB immediately. Master these three rules, ace all triple product questions!”**
>
> **Time-saving tip:** For coplanarity, just check if determinant = 0. No need to calculate full value!

---

**Pro Tip:** BAC-CAB appears in JEE Advanced every 2-3 years. When you see $\vec{a} \times (\vec{b} \times \vec{c})$, your reflex should be: “Write $\vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$”. Practice until it’s automatic!

---

**Congratulations!** You’ve mastered all of Vector Algebra - from basics to triple products. Vectors are now your superpower for mechanics and 3D geometry!

From TestGuru · our mock-test platform

## You've read Triple Products: Scalar Triple Product (Volume) & Vector Triple Product.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=vector-algebra&tg_exam=jee-main&tg_page=%2Fmathematics%2Fvector-algebra%2Ftriple-products%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/vector-algebra/triple-products/",this.page.identifier="/mathematics/vector-algebra/triple-products/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="vectorAddition" id="anim-vectorAddition-1795396422575352158"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-vectorAddition-1795396422575352158")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/vector-algebra/triple-products/](https://jeenotes.in/mathematics/vector-algebra/triple-products/) · raw HTML: `offline/mathematics/vector-algebra/triple-products/index.html`_
