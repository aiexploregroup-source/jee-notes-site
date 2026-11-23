---
title: "Adjoint and Inverse of Matrices"
source: "https://jeenotes.in/mathematics/matrices-determinants/adjoint-inverse/"
description: "Master adjoint matrix, inverse matrix formula, properties of invertible matrices, and methods to find matrix inverse for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 9"
html: "../../../../offline/mathematics/matrices-determinants/adjoint-inverse/index.html"
extracted: "2026-11-23"
---

> Master adjoint matrix, inverse matrix formula, properties of invertible matrices, and methods to find matrix inverse for JEE Main & Advanced.

## The Hook: The Undo Button of Mathematics

> **★ Key point · Connect: Google's Search Algorithm Reversal**
>
> Ever wondered how Google can **reverse-engineer** where a webpage should rank? They use **matrix inverses**!
>
> The **PageRank algorithm** creates a giant matrix representing how web pages link to each other. To find rankings, Google needs to **solve a massive linear system** — which requires finding the **inverse** of this matrix.
>
> **Real-world applications:**
>
> - **Computer graphics:** Undo transformations (rotate back, scale back)

> - **Cryptography:** Decrypt messages (encryption matrix → inverse for decryption)

> - **Economics:** Input-output analysis (production → resource requirements)

> - **Engineering:** Solve circuit equations, structural analysis

> - **Machine learning:** Parameter optimization, neural network training
>
> **The magic:** If $A$ represents a transformation, $A^{-1}$ **undoes** it:
>
> $$A \cdot A^{-1} = A^{-1} \cdot A = I$$
>
> **Why this matters for JEE:** Inverse matrices appear in 3-4 questions in JEE Main and are essential for solving linear systems, eigenvalue problems, and transformation geometry in JEE Advanced.

---

## Prerequisites

Before diving into adjoint and inverse, you should be comfortable with:

- [Matrix Basics](../matrix-basics/index.md) — Square matrices, identity matrix
- [Matrix Algebra](../matrix-algebra/index.md) — Matrix multiplication, transpose
- [Determinants](../determinants-evaluation/index.md) — Computing determinants
- [Minors and Cofactors](../minors-cofactors/index.md) — Finding cofactors

---

## Singular vs Non-Singular Matrices

### Definitions

A square matrix $A$ is called:

**Non-singular (Invertible):** if $|A| \neq 0$

- The matrix **has an inverse**
- Represents a reversible transformation
- System $AX = B$ has a unique solution

**Singular (Non-invertible):** if $|A| = 0$

- The matrix **does NOT have an inverse**
- Represents a dimension-collapsing transformation
- System $AX = B$ may have no solution or infinitely many solutions

$$\boxed{A^{-1} \text{ exists} \iff |A| \neq 0}$$

### Examples

> **↗ Connection · Example 1: Non-singular**
>
> $$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$$

$$|A| = 1(4) - 2(3) = 4 - 6 = -2 \neq 0$$
>
> **Non-singular** → Inverse exists ✓

> **↗ Connection · Example 2: Singular**
>
> $$B = \begin{bmatrix} 2 & 4 \\ 3 & 6 \end{bmatrix}$$

$$|B| = 2(6) - 4(3) = 12 - 12 = 0$$
>
> **Singular** → Inverse does NOT exist ✗
>
> Notice Row 2 = $\frac{3}{2}$ × Row 1 (proportional rows)

> **★ Key point · Quick Check for Singularity**
>
> Before finding inverse, **always check** if $|A| = 0$:
>
> 1. **Zero row/column** → Singular

> 2. **Identical rows/columns** → Singular

> 3. **Proportional rows/columns** → Singular

> 4. **Determinant = 0** → Singular
>
> Don’t waste time trying to find inverse of a singular matrix!

---

## Adjoint of a Matrix (Adjugate)

### Definition

The **adjoint** (or **adjugate**) of a square matrix $A$, denoted $\text{adj}(A)$, is the **transpose of the cofactor matrix**.

$$\boxed{\text{adj}(A) = [C_{ij}]^T}$$

**Steps to find adjoint:**

1. Find all cofactors $C_{ij}$ of matrix $A$
2. Form the cofactor matrix $[C_{ij}]$
3. Take transpose: $\text{adj}(A) = [C_{ij}]^T$

### Example: 2×2 Matrix

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

**Step 1: Find cofactors**

$$C_{11} = (+1) \cdot d = d$$

$$C_{12} = (-1) \cdot c = -c$$

$$C_{21} = (-1) \cdot b = -b$$

$$C_{22} = (+1) \cdot a = a$$

**Step 2: Cofactor matrix**

$$[C_{ij}] = \begin{bmatrix} d & -c \\ -b & a \end{bmatrix}$$

**Step 3: Transpose**

$$\text{adj}(A) = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

**For 2×2 matrices, there’s a shortcut:**

$$\boxed{\text{adj}\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}}$$

**Pattern:** Swap diagonal elements, negate off-diagonal elements.

### Example: 3×3 Matrix

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 1 & 0 & 6 \end{bmatrix}$$

**Step 1: Find all 9 cofactors**

$$C_{11} = (+1) \begin{vmatrix} 4 & 5 \\ 0 & 6 \end{vmatrix} = 24$$

$$C_{12} = (-1) \begin{vmatrix} 0 & 5 \\ 1 & 6 \end{vmatrix} = -(0-5) = 5$$

$$C_{13} = (+1) \begin{vmatrix} 0 & 4 \\ 1 & 0 \end{vmatrix} = -4$$

$$C_{21} = (-1) \begin{vmatrix} 2 & 3 \\ 0 & 6 \end{vmatrix} = -12$$

$$C_{22} = (+1) \begin{vmatrix} 1 & 3 \\ 1 & 6 \end{vmatrix} = 3$$

$$C_{23} = (-1) \begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = 2$$

$$C_{31} = (+1) \begin{vmatrix} 2 & 3 \\ 4 & 5 \end{vmatrix} = -2$$

$$C_{32} = (-1) \begin{vmatrix} 1 & 3 \\ 0 & 5 \end{vmatrix} = -5$$

$$C_{33} = (+1) \begin{vmatrix} 1 & 2 \\ 0 & 4 \end{vmatrix} = 4$$

**Step 2: Cofactor matrix**

$$[C_{ij}] = \begin{bmatrix} 24 & 5 & -4 \\ -12 & 3 & 2 \\ -2 & -5 & 4 \end{bmatrix}$$

**Step 3: Transpose**

$$\text{adj}(A) = \begin{bmatrix} 24 & -12 & -2 \\ 5 & 3 & -5 \\ -4 & 2 & 4 \end{bmatrix}$$

---

## Properties of Adjoint

### Property 1: Product with Original Matrix

$$\boxed{A \cdot \text{adj}(A) = \text{adj}(A) \cdot A = |A| \cdot I}$$

**This is the KEY property connecting adjoint and inverse!**

### Property 2: Determinant of Adjoint

For an $n \times n$ matrix:

$$\boxed{|\text{adj}(A)| = |A|^{n-1}}$$

**Examples:**

- For $2 \times 2$: $|\text{adj}(A)| = |A|^{2-1} = |A|$
- For $3 \times 3$: $|\text{adj}(A)| = |A|^{3-1} = |A|^2$

### Property 3: Adjoint of Transpose

$$\text{adj}(A^T) = [\text{adj}(A)]^T$$

### Property 4: Adjoint of Product

$$\text{adj}(AB) = \text{adj}(B) \cdot \text{adj}(A)$$

**Note:** Order reverses (just like $(AB)^T = B^T A^T$)!

### Property 5: Adjoint of Adjoint

For non-singular $A$ of order $n$:

$$\text{adj}(\text{adj}(A)) = |A|^{n-2} \cdot A$$

### Property 6: Adjoint of Scalar Multiple

$$\text{adj}(kA) = k^{n-1} \text{adj}(A)$$

where $n$ is the order of matrix $A$.

> **★ Key point · Memory Trick: The Magic Product**
>
> **Most important property:**
>
> $$A \cdot \text{adj}(A) = |A| \cdot I$$
>
> **Why it’s magic:** This directly gives us the inverse formula!
>
> Divide both sides by $|A|$:
>
> $$A \cdot \frac{\text{adj}(A)}{|A|} = I$$
>
> Therefore: $A^{-1} = \frac{\text{adj}(A)}{|A|}$

---

## Inverse of a Matrix

### Definition

The **inverse** of a square matrix $A$, denoted $A^{-1}$, is the unique matrix such that:

$$\boxed{A \cdot A^{-1} = A^{-1} \cdot A = I}$$

**Existence condition:** $A^{-1}$ exists if and only if $|A| \neq 0$

### Inverse Formula Using Adjoint

$$\boxed{A^{-1} = \frac{1}{|A|} \cdot \text{adj}(A)}$$

**This is THE formula for JEE!**

### Steps to Find Inverse

**Step 1:** Check if $|A| \neq 0$ (if zero, inverse doesn’t exist)

**Step 2:** Find all cofactors $C_{ij}$

**Step 3:** Form adjoint: $\text{adj}(A) = [C_{ij}]^T$

**Step 4:** Apply formula: $A^{-1} = \frac{1}{|A|} \text{adj}(A)$

### Example 1: 2×2 Inverse

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$$

**Step 1:** $|A| = 4 - 6 = -2 \neq 0$ ✓

**Step 2:**

$$\text{adj}(A) = \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$$

**Step 3:**

$$A^{-1} = \frac{1}{-2} \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix} = \begin{bmatrix} -2 & 1 \\ 1.5 & -0.5 \end{bmatrix}$$

**Verify:**

$$A \cdot A^{-1} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} -2 & 1 \\ 1.5 & -0.5 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$$

✓

### Quick Formula for 2×2 Inverse

For $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$:

$$\boxed{A^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}}$$

**Pattern:**

1. Find determinant: $ad - bc$
2. Swap diagonal: $a \leftrightarrow d$
3. Negate off-diagonal: $b \to -b$, $c \to -c$
4. Divide by determinant

### Example 2: 3×3 Inverse

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{bmatrix}$$

**Step 1:** Calculate $|A|$

$$|A| = 1(0-24) - 2(0-20) + 3(0-5) = -24 + 40 - 15 = 1$$

Since $|A| = 1 \neq 0$, inverse exists ✓

**Step 2:** Find all 9 cofactors

$$C_{11} = \begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} = -24$$

$$C_{12} = -\begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} = 0 - (-20) = 20$$

$$C_{13} = \begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix} = -5$$

$$C_{21} = -\begin{vmatrix} 2 & 3 \\ 6 & 0 \end{vmatrix} = -(-18) = 18$$

$$C_{22} = \begin{vmatrix} 1 & 3 \\ 5 & 0 \end{vmatrix} = -15$$

$$C_{23} = -\begin{vmatrix} 1 & 2 \\ 5 & 6 \end{vmatrix} = -(6-10) = 4$$

$$C_{31} = \begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix} = 5$$

$$C_{32} = -\begin{vmatrix} 1 & 3 \\ 0 & 4 \end{vmatrix} = -4$$

$$C_{33} = \begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} = 1$$

**Step 3:** Form adjoint (transpose of cofactor matrix)

$$\text{adj}(A) = \begin{bmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{bmatrix}$$

**Step 4:** Apply formula

$$A^{-1} = \frac{1}{1} \begin{bmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{bmatrix} = \begin{bmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{bmatrix}$$

---

## Properties of Inverse Matrices

### Property 1: Uniqueness

If $A^{-1}$ exists, it is **unique**.

### Property 2: Inverse of Inverse

$$\boxed{(A^{-1})^{-1} = A}$$

Inverting twice returns the original matrix.

### Property 3: Inverse of Product

$$\boxed{(AB)^{-1} = B^{-1} A^{-1}}$$

**Order reverses!** (Just like transpose and adjoint)

**Extended:** $(ABC)^{-1} = C^{-1} B^{-1} A^{-1}$

### Property 4: Inverse of Transpose

$$\boxed{(A^T)^{-1} = (A^{-1})^T}$$

### Property 5: Determinant of Inverse

$$\boxed{|A^{-1}| = \frac{1}{|A|}}$$

**Proof:** $A \cdot A^{-1} = I$ → $|A| \cdot |A^{-1}| = |I| = 1$

### Property 6: Inverse of Scalar Multiple

$$\boxed{(kA)^{-1} = \frac{1}{k} A^{-1}}$$

### Property 7: Identity Matrix

$$\boxed{I^{-1} = I}$$

The identity is its own inverse.

### Property 8: Symmetric Matrix

If $A$ is symmetric, then $A^{-1}$ is also symmetric:

$$A = A^T \implies A^{-1} = (A^{-1})^T$$

> **★ Key point · Memory Trick: Reversal Rules**
>
> **Three operations that REVERSE order:**
>
> 1. **Transpose:** $(AB)^T = B^T A^T$

> 2. **Inverse:** $(AB)^{-1} = B^{-1} A^{-1}$

> 3. **Adjoint:** $\text{adj}(AB) = \text{adj}(B) \cdot \text{adj}(A)$
>
> **Mnemonic:** “TIA Reverses” (Transpose, Inverse, Adjoint)
>
> Think: Taking off shoes and socks — reverse the order!

---

## Special Matrices and Their Inverses

### 1. Diagonal Matrix

$$D = \begin{bmatrix} d_1 & 0 & 0 \\ 0 & d_2 & 0 \\ 0 & 0 & d_3 \end{bmatrix} \implies D^{-1} = \begin{bmatrix} \frac{1}{d_1} & 0 & 0 \\ 0 & \frac{1}{d_2} & 0 \\ 0 & 0 & \frac{1}{d_3} \end{bmatrix}$$

**Rule:** Reciprocal of each diagonal element (if all non-zero).

### 2. Orthogonal Matrix

A matrix $A$ is **orthogonal** if:

$$\boxed{A^T A = AA^T = I}$$

For orthogonal matrices:

$$\boxed{A^{-1} = A^T}$$

**Example:** Rotation matrices are orthogonal.

### 3. Involutory Matrix

A matrix $A$ is **involutory** if:

$$A^2 = I$$

For involutory matrices:

$$\boxed{A^{-1} = A}$$

The matrix is its own inverse!

**Example:** $A = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$

---

## Elementary Row Operations Method

An alternative method to find inverse is using **elementary row operations** (Gauss-Jordan elimination):

### Method

Write the augmented matrix $[A | I]$ and perform row operations to convert it to $[I | A^{-1}]$.

### Example

Find inverse of $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$

**Step 1:** Form augmented matrix

$$\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 3 & 4 & 0 & 1 \end{array}\right]$$

**Step 2:** $R_2 \to R_2 - 3R_1$

$$\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & -2 & -3 & 1 \end{array}\right]$$

**Step 3:** $R_2 \to -\frac{1}{2}R_2$

$$\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 1 & \frac{3}{2} & -\frac{1}{2} \end{array}\right]$$

**Step 4:** $R_1 \to R_1 - 2R_2$

$$\left[\begin{array}{cc|cc} 1 & 0 & -2 & 1 \\ 0 & 1 & \frac{3}{2} & -\frac{1}{2} \end{array}\right]$$

**Result:**

$$A^{-1} = \begin{bmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix}$$

> **◐ In simple terms · When to Use Each Method?**
>
> **Adjoint method:**
>
> - ✓ Good for theoretical problems

> - ✓ When determinant is simple

> - ✓ JEE Advanced symbolic questions

> - ✗ Lots of calculations for $3 \times 3$
>
> **Row operations method:**
>
> - ✓ Faster for numerical $3 \times 3$ and larger

> - ✓ Systematic, less prone to errors

> - ✓ Good for computational problems

> - ✗ Not useful for symbolic matrices
>
> **For JEE:** Master both! Use adjoint for $2 \times 2$ and theoretical, use row operations for numerical $3 \times 3$.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Singular Matrix Inverse**
>
> **Wrong:** Finding inverse when $|A| = 0$
>
> **Right:** **Always check** $|A| \neq 0$ first!
>
> If $|A| = 0$, the matrix is singular and has **no inverse**.
>
> Don’t waste time calculating adjoint if determinant is zero!

> **⚠ Trap #2: Forgetting to Transpose Cofactor Matrix**
>
> **Wrong:** $\text{adj}(A) = [C_{ij}]$ (cofactor matrix)
>
> **Right:** $\text{adj}(A) = [C_{ij}]^T$ (transpose of cofactor matrix)
>
> **Always transpose** the cofactor matrix to get adjoint!

> **⚠ Trap #3: Product Inverse Order**
>
> **Wrong:** $(AB)^{-1} = A^{-1} B^{-1}$
>
> **Right:** $(AB)^{-1} = B^{-1} A^{-1}$ (order reverses!)
>
> Think: Undo operations in reverse order.

> **⚠ Trap #4: Dividing Each Element**
>
> **Wrong:** $A^{-1} = \frac{1}{A}$ (dividing each element by 1)
>
> **Right:** $A^{-1} = \frac{1}{|A|} \text{adj}(A)$ (multiply adjoint by $\frac{1}{|A|}$)
>
> Matrix inverse is NOT element-wise reciprocal!

> **⚠ Trap #5: Inverse of Sum**
>
> **Wrong:** $(A + B)^{-1} = A^{-1} + B^{-1}$
>
> **Right:** There is **NO simple formula** for $(A + B)^{-1}$!
>
> This is a common trick question in JEE. Don’t fall for it!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Find the adjoint of $A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$
>
> **Solution:**
>
> For $2 \times 2$: Swap diagonal, negate off-diagonal
>
> $$\text{adj}(A) = \begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix}$$
>
> **Answer:** $\begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix}$

> **↗ Connection · Problem 1.2**
>
> Find the inverse of $A = \begin{bmatrix} 1 & 3 \\ 2 & 7 \end{bmatrix}$
>
> **Solution:**
>
> $$|A| = 7 - 6 = 1$$

$$\text{adj}(A) = \begin{bmatrix} 7 & -3 \\ -2 & 1 \end{bmatrix}$$

$$A^{-1} = \frac{1}{1} \begin{bmatrix} 7 & -3 \\ -2 & 1 \end{bmatrix} = \begin{bmatrix} 7 & -3 \\ -2 & 1 \end{bmatrix}$$
>
> **Answer:** $\begin{bmatrix} 7 & -3 \\ -2 & 1 \end{bmatrix}$

> **↗ Connection · Problem 1.3**
>
> Verify that $A \cdot \text{adj}(A) = |A| \cdot I$ for $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$
>
> **Solution:**
>
> $$|A| = -2$$

$$\text{adj}(A) = \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix}$$

$$A \cdot \text{adj}(A) = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 4 & -2 \\ -3 & 1 \end{bmatrix} = \begin{bmatrix} -2 & 0 \\ 0 & -2 \end{bmatrix}$$

$$|A| \cdot I = -2 \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} -2 & 0 \\ 0 & -2 \end{bmatrix}$$
>
> ✓
>
> **Verified!**

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> If $A = \begin{bmatrix} 2 & 3 \\ 5 & 7 \end{bmatrix}$, find $(A^{-1})^T$.
>
> **Solution:**
>
> $$|A| = 14 - 15 = -1$$

$$A^{-1} = \frac{1}{-1} \begin{bmatrix} 7 & -3 \\ -5 & 2 \end{bmatrix} = \begin{bmatrix} -7 & 3 \\ 5 & -2 \end{bmatrix}$$

$$(A^{-1})^T = \begin{bmatrix} -7 & 5 \\ 3 & -2 \end{bmatrix}$$
>
> **Answer:** $\begin{bmatrix} -7 & 5 \\ 3 & -2 \end{bmatrix}$

> **↗ Connection · Problem 2.2**
>
> If $A = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 5 \end{bmatrix}$, find $A^{-1}$.
>
> **Solution:**
>
> Diagonal matrix! Inverse = reciprocal of diagonal elements
>
> $$A^{-1} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & \frac{1}{2} & 0 \\ 0 & 0 & \frac{1}{5} \end{bmatrix}$$
>
> **Answer:** $\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0.5 & 0 \\ 0 & 0 & 0.2 \end{bmatrix}$

> **↗ Connection · Problem 2.3**
>
> If $|A| = 5$ for a $3 \times 3$ matrix, find $|\text{adj}(A)|$.
>
> **Solution:**
>
> For $n \times n$ matrix: $|\text{adj}(A)| = |A|^{n-1}$
>
> For $3 \times 3$: $|\text{adj}(A)| = |A|^{3-1} = 5^2 = 25$
>
> **Answer:** 25

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $A$ and $B$ are invertible matrices, prove that $(AB)^{-1} = B^{-1} A^{-1}$.
>
> **Solution:**
>
> We need to show: $(AB) \cdot (B^{-1} A^{-1}) = I$
>
> $$(AB)(B^{-1} A^{-1}) = A(BB^{-1})A^{-1}$$

$$= A \cdot I \cdot A^{-1}$$

$$= AA^{-1} = I$$
>
> ✓
>
> Similarly: $(B^{-1} A^{-1})(AB) = I$
>
> Therefore: $(AB)^{-1} = B^{-1} A^{-1}$ **Proved!**

> **↗ Connection · Problem 3.2**
>
> If $A = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}$, show that $A^{-1} = A^T$ (orthogonal matrix).
>
> **Solution:**
>
> $$A^T = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$$

$$A \cdot A^T = \begin{bmatrix} \cos^2\theta + \sin^2\theta & 0 \\ 0 & \sin^2\theta + \cos^2\theta \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$$
>
> Since $AA^T = I$, we have $A^{-1} = A^T$ ✓
>
> **Proved!** (Rotation matrices are orthogonal)

> **↗ Connection · Problem 3.3**
>
> If $A^2 - 3A + 2I = O$, express $A^{-1}$ in terms of $A$ and $I$.
>
> **Solution:**
>
> $$A^2 - 3A + 2I = O$$

$$A^2 - 3A = -2I$$

$$A(A - 3I) = -2I$$

$$A \cdot \frac{A - 3I}{-2} = I$$
>
> Therefore:
>
> $$A^{-1} = \frac{3I - A}{2}$$
>
> **Answer:** $A^{-1} = \frac{1}{2}(3I - A)$

---

## Quick Revision Box

| Concept | Formula/Property |
| --- | --- |
| Non-singular | $\|A\| \neq 0$ (inverse exists) |
| Singular | $\|A\| = 0$ (no inverse) |
| Adjoint | $\text{adj}(A) = [C_{ij}]^T$ |
| Inverse formula | $A^{-1} = \frac{1}{\|A\|} \text{adj}(A)$ |
| $2 \times 2$ adjoint | Swap diagonal, negate off-diagonal |
| $A \cdot \text{adj}(A)$ | $\|A\| \cdot I$ |
| $\|\text{adj}(A)\|$ | $\|A\|^{n-1}$ for $n \times n$ |
| $(AB)^{-1}$ | $B^{-1} A^{-1}$ (order reverses!) |
| $(A^T)^{-1}$ | $(A^{-1})^T$ |
| $\|A^{-1}\|$ | $\frac{1}{\|A\|}$ |
| Diagonal inverse | Reciprocal of diagonal elements |
| Orthogonal | $A^{-1} = A^T$ |

---

## Related Topics

### Within Matrices & Determinants Chapter

- [Matrix Basics](../matrix-basics/index.md) — Foundation of matrices
- [Matrix Algebra](../matrix-algebra/index.md) — Operations needed for inverse
- [Determinants](../determinants-evaluation/index.md) — Check if inverse exists
- [Minors and Cofactors](../minors-cofactors/index.md) — Building blocks of adjoint
- [Linear Equations](../linear-equations/index.md) — Using inverse to solve systems

### Math Connections

- [Coordinate Geometry](../../coordinate-geometry/index.md) — Transformation matrices
- [Vector Algebra](../../vector-algebra/index.md) — Change of basis matrices
- [Complex Numbers](../../complex-numbers/index.md) — Matrices over complex numbers

### Real-World Applications

- Cryptography — RSA encryption, Hill cipher
- Computer graphics — Inverse transformations
- Economics — Leontief input-output model
- Engineering — Circuit analysis, structural mechanics
- Machine learning — Parameter optimization

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Inverse exists** ⟺ $|A| \neq 0$ (non-singular matrix)

> 2. **Adjoint** = Transpose of cofactor matrix: $\text{adj}(A) = [C_{ij}]^T$

> 3. **Inverse formula:** $A^{-1} = \frac{1}{|A|} \text{adj}(A)$ (THE formula!)

> 4. **Magic property:** $A \cdot \text{adj}(A) = |A| \cdot I$

> 5. **2×2 shortcut:** Swap diagonal, negate off-diagonal, divide by determinant

> 6. **Order reversal:** $(AB)^{-1} = B^{-1} A^{-1}$ (like transpose!)

> 7. **Diagonal matrix:** Inverse = reciprocal of each diagonal element

> 8. **Orthogonal matrix:** $A^{-1} = A^T$ (rotation matrices!)

> 9. **Check first:** Always verify $|A| \neq 0$ before finding inverse
>
> **“First check the determinant — don’t waste time on singular matrices!”**
>
> **Exam Strategy:**
>
> - **$2 \times 2$:** Use shortcut formula (10 seconds)

> - **$3 \times 3$ numerical:** Row operations OR adjoint method

> - **$3 \times 3$ symbolic:** Adjoint method (shows all work)

> - **Special matrices:** Use properties (diagonal, orthogonal, etc.)

---

**[Next: Linear Equations →](../linear-equations/index.md)**

From TestGuru · our mock-test platform

## You've read Adjoint and Inverse of Matrices.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=matrices-determinants&tg_exam=jee-main&tg_page=%2Fmathematics%2Fmatrices-determinants%2Fadjoint-inverse%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/matrices-determinants/adjoint-inverse/",this.page.identifier="/mathematics/matrices-determinants/adjoint-inverse/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="matrixVisualizer" id="anim-matrixVisualizer-1795396421962652109"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-matrixVisualizer-1795396421962652109")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/matrices-determinants/adjoint-inverse/](https://jeenotes.in/mathematics/matrices-determinants/adjoint-inverse/) · raw HTML: `offline/mathematics/matrices-determinants/adjoint-inverse/index.html`_
