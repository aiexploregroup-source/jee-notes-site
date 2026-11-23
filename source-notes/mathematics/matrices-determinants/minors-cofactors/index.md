---
title: "Minors, Cofactors and Expansion"
source: "https://jeenotes.in/mathematics/matrices-determinants/minors-cofactors/"
description: "Master minors, cofactors, cofactor expansion, Laplace expansion theorem, and applications in determinant evaluation for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 9"
html: "../../../../offline/mathematics/matrices-determinants/minors-cofactors/index.html"
extracted: "2026-11-23"
---

> Master minors, cofactors, cofactor expansion, Laplace expansion theorem, and applications in determinant evaluation for JEE Main & Advanced.

## The Hook: The Building Blocks of Determinants

> **★ Key point · Connect: Like LEGO Blocks Building Complex Structures**
>
> Ever built a complex LEGO structure? You start with small blocks and combine them to create something bigger. **Minors and cofactors** work exactly the same way!
>
> A $3 \times 3$ determinant is built from smaller $2 \times 2$ determinants (minors).

> A $4 \times 4$ determinant? Built from $3 \times 3$ minors.

> A $100 \times 100$ determinant? Built recursively from smaller pieces!
>
> This recursive structure is how:
>
> - **Google’s servers** compute massive determinants for data analysis

> - **CAD software** checks if 3D transformations are valid

> - **Physics simulations** solve complex systems with thousands of equations

> - **Machine learning** algorithms compute eigenvalues of huge matrices
>
> **Why this matters for JEE:** Understanding minors and cofactors is essential for:
>
> - Finding inverse matrices (adjoint method)

> - Solving determinant problems efficiently

> - Understanding Cramer’s rule for linear systems

> - JEE Advanced problems involving symbolic determinants

---

## Prerequisites

Before diving into minors and cofactors, you should be comfortable with:

- [Matrix Basics](../matrix-basics/index.md) — Understanding matrix elements and order
- [Determinants Evaluation](../determinants-evaluation/index.md) — Computing $2 \times 2$ and $3 \times 3$ determinants
- Row and column notation

---

## What is a Minor?

### Definition

The **minor** of an element $a_{ij}$ in a matrix $A$, denoted $M_{ij}$, is the determinant of the submatrix obtained by **deleting row $i$ and column $j$**.

$$\boxed{M_{ij} = \text{det of submatrix after removing row } i \text{ and column } j}$$

### Visual Understanding

For a $3 \times 3$ matrix:

$$A = \begin{bmatrix}
\color{red}{a_{11}} & \color{blue}{a_{12}} & a_{13} \\
\color{blue}{a_{21}} & a_{22} & a_{23} \\
\color{blue}{a_{31}} & a_{32} & a_{33}
\end{bmatrix}$$

To find $M_{11}$ (minor of $\color{red}{a_{11}}$):

- Delete row 1 (containing $\color{red}{a_{11}}$)
- Delete column 1 (containing $\color{red}{a_{11}}$)
- Find determinant of remaining $2 \times 2$ matrix

$$M_{11} = \begin{vmatrix}
a_{22} & a_{23} \\
a_{32} & a_{33}
\end{vmatrix} = a_{22}a_{33} - a_{23}a_{32}$$

### Example: Finding All Minors of a 3×3 Matrix

$$A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}$$

**Finding $M_{11}$:** Delete row 1, column 1

$$M_{11} = \begin{vmatrix} 5 & 6 \\ 8 & 9 \end{vmatrix} = 45 - 48 = -3$$

**Finding $M_{12}$:** Delete row 1, column 2

$$M_{12} = \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} = 36 - 42 = -6$$

**Finding $M_{13}$:** Delete row 1, column 3

$$M_{13} = \begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix} = 32 - 35 = -3$$

**Finding $M_{21}$:** Delete row 2, column 1

$$M_{21} = \begin{vmatrix} 2 & 3 \\ 8 & 9 \end{vmatrix} = 18 - 24 = -6$$

**Finding $M_{22}$:** Delete row 2, column 2

$$M_{22} = \begin{vmatrix} 1 & 3 \\ 7 & 9 \end{vmatrix} = 9 - 21 = -12$$

**Finding $M_{23}$:** Delete row 2, column 3

$$M_{23} = \begin{vmatrix} 1 & 2 \\ 7 & 8 \end{vmatrix} = 8 - 14 = -6$$

**Finding $M_{31}$:** Delete row 3, column 1

$$M_{31} = \begin{vmatrix} 2 & 3 \\ 5 & 6 \end{vmatrix} = 12 - 15 = -3$$

**Finding $M_{32}$:** Delete row 3, column 2

$$M_{32} = \begin{vmatrix} 1 & 3 \\ 4 & 6 \end{vmatrix} = 6 - 12 = -6$$

**Finding $M_{33}$:** Delete row 3, column 3

$$M_{33} = \begin{vmatrix} 1 & 2 \\ 4 & 5 \end{vmatrix} = 5 - 8 = -3$$

**Matrix of Minors:**

$$\begin{bmatrix}
M_{11} & M_{12} & M_{13} \\
M_{21} & M_{22} & M_{23} \\
M_{31} & M_{32} & M_{33}
\end{bmatrix} = \begin{bmatrix}
-3 & -6 & -3 \\
-6 & -12 & -6 \\
-3 & -6 & -3
\end{bmatrix}$$

---

## What is a Cofactor?

### Definition

The **cofactor** of element $a_{ij}$, denoted $C_{ij}$ or $A_{ij}$, is the minor with an appropriate sign:

$$\boxed{C_{ij} = (-1)^{i+j} \cdot M_{ij}}$$

**In words:** Cofactor = (sign factor) × (minor)

### Sign Pattern

The sign $(-1)^{i+j}$ follows a **checkerboard pattern**:

$$\begin{bmatrix}

- & - & + & - & \cdots \

- & + & - & + & \cdots \

- & - & + & - & \cdots \

- & + & - & + & \cdots \
  \vdots & \vdots & \vdots & \vdots & \ddots
  \end{bmatrix}$$

**For $3 \times 3$ matrix:**

$$\begin{bmatrix}

- & - & + \

- & + & - \

- & - & +
  \end{bmatrix} = \begin{bmatrix}
  (-1)^{1+1} & (-1)^{1+2} & (-1)^{1+3} \
  (-1)^{2+1} & (-1)^{2+2} & (-1)^{2+3} \
  (-1)^{3+1} & (-1)^{3+2} & (-1)^{3+3}
  \end{bmatrix}$$

> **★ Key point · Memory Trick: Checkerboard Pattern**
>
> **Position $(1,1)$ is always POSITIVE (+)**
>
> Then alternate like a checkerboard:
>
> - Move right → sign changes

> - Move down → sign changes

> - Move diagonally → sign stays same
>
> **Quick check:** $i + j$ even → positive, $i + j$ odd → negative
>
> Examples:
>
> - $(1,1)$: $1+1=2$ (even) → $+$

> - $(1,2)$: $1+2=3$ (odd) → $-$

> - $(2,2)$: $2+2=4$ (even) → $+$

### Example: Finding All Cofactors

Using the same matrix:

$$A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}$$

We already found minors. Now apply signs:

$$C_{11} = (-1)^{1+1} M_{11} = (+1)(-3) = -3$$

$$C_{12} = (-1)^{1+2} M_{12} = (-1)(-6) = 6$$

$$C_{13} = (-1)^{1+3} M_{13} = (+1)(-3) = -3$$

$$C_{21} = (-1)^{2+1} M_{21} = (-1)(-6) = 6$$

$$C_{22} = (-1)^{2+2} M_{22} = (+1)(-12) = -12$$

$$C_{23} = (-1)^{2+3} M_{23} = (-1)(-6) = 6$$

$$C_{31} = (-1)^{3+1} M_{31} = (+1)(-3) = -3$$

$$C_{32} = (-1)^{3+2} M_{32} = (-1)(-6) = 6$$

$$C_{33} = (-1)^{3+3} M_{33} = (+1)(-3) = -3$$

**Cofactor Matrix:**

$$\begin{bmatrix}
C_{11} & C_{12} & C_{13} \\
C_{21} & C_{22} & C_{23} \\
C_{31} & C_{32} & C_{33}
\end{bmatrix} = \begin{bmatrix}
-3 & 6 & -3 \\
6 & -12 & 6 \\
-3 & 6 & -3
\end{bmatrix}$$

---

## Cofactor Expansion of Determinants

### Expansion Along a Row

The determinant of $A$ can be found by expanding along **any row $i$**:

$$\boxed{|A| = \sum_{j=1}^{n} a_{ij} \cdot C_{ij}}$$

**In words:** Sum of (element × its cofactor) for all elements in row $i$

### Expansion Along a Column

The determinant of $A$ can be found by expanding along **any column $j$**:

$$\boxed{|A| = \sum_{i=1}^{n} a_{ij} \cdot C_{ij}}$$

**In words:** Sum of (element × its cofactor) for all elements in column $j$

### Example: Expansion Along Row 1

$$A = \begin{bmatrix}
2 & 3 & 1 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}$$

**Expand along Row 1:**

$$|A| = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$$

$$C_{11} = (-1)^{1+1} \begin{vmatrix} 5 & 6 \\ 8 & 9 \end{vmatrix} = 45 - 48 = -3$$

$$C_{12} = (-1)^{1+2} \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} = -(36 - 42) = 6$$

$$C_{13} = (-1)^{1+3} \begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix} = 32 - 35 = -3$$

$$|A| = 2(-3) + 3(6) + 1(-3) = -6 + 18 - 3 = 9$$

### Example: Expansion Along Column with Zeros

$$A = \begin{bmatrix}
1 & 0 & 3 \\
2 & 0 & 5 \\
4 & 7 & 6
\end{bmatrix}$$

**Smart choice: Expand along Column 2** (has two zeros!)

$$|A| = a_{12}C_{12} + a_{22}C_{22} + a_{32}C_{32}$$

$$= 0 \cdot C_{12} + 0 \cdot C_{22} + 7 \cdot C_{32}$$

$$C_{32} = (-1)^{3+2} \begin{vmatrix} 1 & 3 \\ 2 & 5 \end{vmatrix} = -(5 - 6) = 1$$

$$|A| = 7(1) = 7$$

**Only one $2 \times 2$ determinant needed!**

> **★ Key point · JEE Strategy: Smart Expansion**
>
> **Always expand along the row/column with the MOST ZEROS!**
>
> **Why?** Each zero eliminates one $2 \times 2$ determinant calculation.
>
> **Example ranking:**
>
> - Row with 2 zeros → **Best** (only 1 calculation)

> - Row with 1 zero → Good (2 calculations)

> - Row with 0 zeros → Slowest (3 calculations)
>
> **Time saved:** Can reduce 3 minutes to 30 seconds on complex problems!

---

## Properties of Minors and Cofactors

### Property 1: Sum of Products (Row)

For any row $i$:

$$\sum_{j=1}^{n} a_{ij} C_{ij} = |A|$$

This is the cofactor expansion formula!

### Property 2: Sum of Products (Different Row)

For row $i$ and cofactors of different row $k$ (where $i \neq k$):

$$\boxed{\sum_{j=1}^{n} a_{ij} C_{kj} = 0}$$

**In words:** Sum of (elements of one row) × (cofactors of a different row) = 0

**Example:**

$$a_{11}C_{21} + a_{12}C_{22} + a_{13}C_{23} = 0$$

This is a **crucial property** for finding adjoints!

### Property 3: Similar Property for Columns

For column $j$ and cofactors of different column $l$ (where $j \neq l$):

$$\sum_{i=1}^{n} a_{ij} C_{il} = 0$$

---

## Applications of Cofactors

### 1. Finding Determinants

As we’ve seen, cofactor expansion is a systematic way to find determinants of any size.

### 2. Finding Adjoint (Next Topic)

The **adjoint** of a matrix is the transpose of the cofactor matrix:

$$\text{adj}(A) = [C_{ij}]^T$$

### 3. Finding Inverse

The inverse formula uses cofactors:

$$A^{-1} = \frac{1}{|A|} \text{adj}(A) = \frac{1}{|A|} [C_{ij}]^T$$

### 4. Cramer’s Rule

Solving linear systems uses cofactors and determinants.

---

## Working with Larger Matrices

### 4×4 Determinant Using Cofactors

For a $4 \times 4$ matrix, each cofactor is a $3 \times 3$ determinant:

$$A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} & a_{14} \\
a_{21} & a_{22} & a_{23} & a_{24} \\
a_{31} & a_{32} & a_{33} & a_{34} \\
a_{41} & a_{42} & a_{43} & a_{44}
\end{bmatrix}$$

**Expand along Row 1:**

$$|A| = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13} + a_{14}C_{14}$$

Where each $C_{1j}$ is $(-1)^{1+j}$ times a $3 \times 3$ determinant.

> **⚠ Trap · Computational Complexity**
>
> **Determinant calculation grows EXPONENTIALLY with size:**
>
> - $2 \times 2$: 2 multiplications

> - $3 \times 3$: 6 multiplications (Sarrus) or 9 (expansion)

> - $4 \times 4$: About 40 multiplications

> - $5 \times 5$: About 200 multiplications

> - $n \times n$: About $n!$ operations (factorial growth!)
>
> **For JEE:** You’ll rarely see beyond $4 \times 4$, and usually with special structure (zeros, patterns) to make it manageable.
>
> **Real-world:** Computers use specialized algorithms (LU decomposition, QR factorization) that are much faster than cofactor expansion!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting the Sign**
>
> **Wrong:** $C_{ij} = M_{ij}$ (forgetting sign factor)
>
> **Right:** $C_{ij} = (-1)^{i+j} M_{ij}$
>
> **Example:** For position $(2,3)$:
>
> - Minor: $M_{23} = 5$

> - Cofactor: $C_{23} = (-1)^{2+3} \cdot 5 = -5$ (NOT 5!)

> **⚠ Trap #2: Wrong Row/Column Deletion**
>
> **Wrong:** To find $M_{23}$, delete row 2 and column 2
>
> **Right:** To find $M_{23}$, delete row **2** and column **3**
>
> The subscripts $(i,j)$ tell you exactly which row and column to delete!

> **⚠ Trap #3: Sign Pattern Errors**
>
> **Wrong:** Assuming position $(2,2)$ has negative sign
>
> **Right:** Position $(2,2)$: $(-1)^{2+2} = (-1)^4 = +1$ (POSITIVE!)
>
> Middle element of $3 \times 3$ is always positive, not negative.
>
> Check: $2+2=4$ (even) → positive sign

> **⚠ Trap #4: Mixing Rows in Expansion**
>
> **Wrong:** $|A| = a_{11}C_{11} + a_{22}C_{22} + a_{33}C_{33}$
>
> **Right:** When expanding, use **all elements from ONE row or ONE column**!
>
> You can’t mix elements from different rows (unless using special properties).
>
> Correct: $|A| = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}$ (all from row 1)

> **⚠ Trap #5: Cofactor vs Adjoint Confusion**
>
> **Wrong:** Adjoint = Cofactor matrix
>
> **Right:** Adjoint = **Transpose** of cofactor matrix
>
> $$\text{adj}(A) = [C_{ij}]^T$$
>
> The cofactor matrix must be transposed!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> For $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, find $M_{11}$ and $C_{11}$.
>
> **Solution:**
>
> $M_{11}$ = determinant after deleting row 1, column 1 = just the element $4$
>
> $$M_{11} = 4$$

$$C_{11} = (-1)^{1+1} M_{11} = (+1)(4) = 4$$
>
> **Answer:** $M_{11} = 4$, $C_{11} = 4$

> **↗ Connection · Problem 1.2**
>
> For $A = \begin{bmatrix} 2 & 3 & 1 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}$, find $M_{23}$ and $C_{23}$.
>
> **Solution:**
>
> Delete row 2, column 3:
>
> $$M_{23} = \begin{vmatrix} 2 & 3 \\ 7 & 8 \end{vmatrix} = 16 - 21 = -5$$

$$C_{23} = (-1)^{2+3} M_{23} = (-1)(-5) = 5$$
>
> **Answer:** $M_{23} = -5$, $C_{23} = 5$

> **↗ Connection · Problem 1.3**
>
> Write the sign pattern for a $4 \times 4$ matrix.
>
> **Solution:**
>
> $$\begin{bmatrix}
>
> - & - & + & - \
>
> - & + & - & + \
>
> - & - & + & - \
>
> - & + & - & +

>   \end{bmatrix}$$
>
> **Answer:** Checkerboard starting with $+$ at $(1,1)$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Find the determinant by expanding along the best row/column:
>
> $$\begin{vmatrix}

> 2 & 0 & 0 \\

> 3 & 5 & 0 \\

> 1 & 7 & 9

> \end{vmatrix}$$
>
> **Solution:**
>
> This is a **lower triangular matrix**!
>
> For triangular matrices: $|A|$ = product of diagonal elements
>
> $$|A| = 2 \cdot 5 \cdot 9 = 90$$
>
> **Alternatively**, expand along Row 1 (has two zeros):
>
> $$|A| = 2 \cdot C_{11} + 0 \cdot C_{12} + 0 \cdot C_{13}$$

$$C_{11} = (+1) \begin{vmatrix} 5 & 0 \\ 7 & 9 \end{vmatrix} = 45$$

$$|A| = 2(45) = 90$$
>
> **Answer:** 90

> **↗ Connection · Problem 2.2**
>
> For $A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}$, find the cofactor matrix.
>
> **Solution:**
>
> $$C_{11} = (+1) \begin{vmatrix} 4 & 5 \\ 0 & 6 \end{vmatrix} = 24$$

$$C_{12} = (-1) \begin{vmatrix} 0 & 5 \\ 0 & 6 \end{vmatrix} = 0$$

$$C_{13} = (+1) \begin{vmatrix} 0 & 4 \\ 0 & 0 \end{vmatrix} = 0$$

$$C_{21} = (-1) \begin{vmatrix} 2 & 3 \\ 0 & 6 \end{vmatrix} = -12$$

$$C_{22} = (+1) \begin{vmatrix} 1 & 3 \\ 0 & 6 \end{vmatrix} = 6$$

$$C_{23} = (-1) \begin{vmatrix} 1 & 2 \\ 0 & 0 \end{vmatrix} = 0$$

$$C_{31} = (+1) \begin{vmatrix} 2 & 3 \\ 4 & 5 \end{vmatrix} = -2$$

$$C_{32} = (-1) \begin{vmatrix} 1 & 3 \\ 0 & 5 \end{vmatrix} = -5$$

$$C_{33} = (+1) \begin{vmatrix} 1 & 2 \\ 0 & 4 \end{vmatrix} = 4$$
>
> **Answer:** $\begin{bmatrix} 24 & 0 & 0 \\ -12 & 6 & 0 \\ -2 & -5 & 4 \end{bmatrix}$

> **↗ Connection · Problem 2.3**
>
> Verify that for $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$:
>
> $$a_{11}C_{21} + a_{12}C_{22} = 0$$
>
> **Solution:**
>
> $$C_{21} = (-1)^{2+1} M_{21} = (-1)(2) = -2$$

$$C_{22} = (-1)^{2+2} M_{22} = (+1)(1) = 1$$

$$a_{11}C_{21} + a_{12}C_{22} = 1(-2) + 2(1) = -2 + 2 = 0$$
>
> ✓
>
> **Verified!** (Property: different row cofactors sum to zero)

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{bmatrix}$, show that the cofactor of each element in the second row equals zero.
>
> **Solution:**
>
> Notice that Row 3 = Row 1 + Row 2
>
> This means the rows are linearly dependent, so $|A| = 0$.
>
> $$C_{21} = (-1)^{2+1} \begin{vmatrix} 2 & 3 \\ 4 & 5 \end{vmatrix} = -(10-12) = 2$$
>
> Wait, this is NOT zero! Let me recalculate&mldr;
>
> Actually, Row 2 = average of Row 1 and Row 3, so let’s find all cofactors:
>
> $$C_{21} = (-1) \begin{vmatrix} 2 & 3 \\ 4 & 5 \end{vmatrix} = -(10-12) = 2$$

$$C_{22} = (+1) \begin{vmatrix} 1 & 3 \\ 3 & 5 \end{vmatrix} = 5-9 = -4$$

$$C_{23} = (-1) \begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix} = -(4-6) = 2$$
>
> Now verify expansion: $|A| = a_{21}C_{21} + a_{22}C_{22} + a_{23}C_{23}$
>
> $$= 2(2) + 3(-4) + 4(2) = 4 - 12 + 8 = 0$$
>
> ✓
>
> Individual cofactors are NOT zero, but their expansion gives zero (because $|A| = 0$).
>
> **Answer:** The cofactor expansion equals zero, not individual cofactors.

> **↗ Connection · Problem 3.2**
>
> Find the determinant using cofactor expansion:
>
> $$\begin{vmatrix}

> 1 & 2 & 3 & 4 \\

> 0 & 5 & 6 & 7 \\

> 0 & 0 & 8 & 9 \\

> 0 & 0 & 0 & 10

> \end{vmatrix}$$
>
> **Solution:**
>
> This is an **upper triangular matrix**!
>
> $$|A| = 1 \cdot 5 \cdot 8 \cdot 10 = 400$$
>
> **Verification by expansion along Column 1:**
>
> $$|A| = 1 \cdot C_{11} = 1 \cdot \begin{vmatrix} 5 & 6 & 7 \\ 0 & 8 & 9 \\ 0 & 0 & 10 \end{vmatrix}$$
>
> The $3 \times 3$ minor is also triangular:
>
> $$= 1 \cdot (5 \cdot 8 \cdot 10) = 400$$
>
> ✓
>
> **Answer:** 400

---

## Quick Revision Box

| Concept | Formula/Definition |
| --- | --- |
| Minor $M_{ij}$ | Det after deleting row $i$, column $j$ |
| Cofactor $C_{ij}$ | $(-1)^{i+j} M_{ij}$ |
| Sign pattern | Checkerboard: $(i+j)$ even → $+$, odd → $-$ |
| Row expansion | $\|A\| = \sum_j a_{ij} C_{ij}$ |
| Column expansion | $\|A\| = \sum_i a_{ij} C_{ij}$ |
| Different row | $\sum_j a_{ij} C_{kj} = 0$ if $i \neq k$ |
| Best expansion | Choose row/column with most zeros |
| Triangular matrix | $\|A\|$ = product of diagonal (fast!) |

---

## Related Topics

### Within Matrices & Determinants Chapter

- [Matrix Basics](../matrix-basics/index.md) — Foundation of matrix elements
- [Determinants Evaluation](../determinants-evaluation/index.md) — Using cofactors to find determinants
- [Adjoint and Inverse](../adjoint-inverse/index.md) — Using cofactors to build adjoint
- [Properties of Determinants](../properties-determinants/index.md) — Shortcuts using properties
- [Linear Equations](../linear-equations/index.md) — Cramer’s rule uses cofactors

### Math Connections

- [Recursion](../../sequences-series/index.md) — Determinants defined recursively
- [Permutations](../../permutations-combinations/index.md) — Sign of permutation in determinant
- [Linear Algebra](../index.md) — Geometric interpretation of cofactors

### Real-World Applications

- Inverse calculation — Essential for solving systems
- Cramer’s rule — Direct solution method
- Eigenvalue problems — Characteristic equation uses cofactors

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Minor $M_{ij}$:** Determinant after deleting row $i$ and column $j$

> 2. **Cofactor $C_{ij}$:** Minor with sign $(-1)^{i+j}$ (checkerboard pattern)

> 3. **Sign pattern:** Start with $+$ at $(1,1)$, alternate like checkerboard

> 4. **Determinant expansion:** Sum of (element × cofactor) along any row/column

> 5. **Smart strategy:** Expand along row/column with **most zeros**

> 6. **Different row property:** $\sum a_{ij} C_{kj} = 0$ if $i \neq k$ (crucial for adjoint!)

> 7. **Triangular matrices:** Just multiply diagonal (skip all cofactor work!)

> 8. **Cofactor matrix:** Foundation for adjoint and inverse
>
> **“Choose wisely where you expand — one zero can save you 2 minutes of calculation!”**
>
> **Exam Strategy:**
>
> - **Step 1:** Check if triangular/diagonal → direct answer

> - **Step 2:** Find row/column with most zeros

> - **Step 3:** Expand there using cofactors

> - **Step 4:** Be careful with signs (checkerboard!)

---

**[Next: Adjoint and Inverse →](../adjoint-inverse/index.md)**

From TestGuru · our mock-test platform

## You've read Minors, Cofactors and Expansion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=matrices-determinants&tg_exam=jee-main&tg_page=%2Fmathematics%2Fmatrices-determinants%2Fminors-cofactors%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/matrices-determinants/minors-cofactors/",this.page.identifier="/mathematics/matrices-determinants/minors-cofactors/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="matrixVisualizer" id="anim-matrixVisualizer-1795396421975092855"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-matrixVisualizer-1795396421975092855")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/matrices-determinants/minors-cofactors/](https://jeenotes.in/mathematics/matrices-determinants/minors-cofactors/) · raw HTML: `offline/mathematics/matrices-determinants/minors-cofactors/index.html`_
