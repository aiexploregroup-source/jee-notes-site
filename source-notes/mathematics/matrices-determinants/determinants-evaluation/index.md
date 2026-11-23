---
title: "Determinants: Evaluation and Calculation"
source: "https://jeenotes.in/mathematics/matrices-determinants/determinants-evaluation/"
description: "Master determinant calculation for 2×2 and 3×3 matrices, Sarrus rule, expansion methods, and determinant properties for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 9"
html: "../../../../offline/mathematics/matrices-determinants/determinants-evaluation/index.html"
extracted: "2026-11-23"
---

> Master determinant calculation for 2×2 and 3×3 matrices, Sarrus rule, expansion methods, and determinant properties for JEE Main & Advanced.

## The Hook: The Detective Number of Matrices

> **★ Key point · Connect: Why Transformers Can't Transform**
>
> In the movie **Transformers**, when Optimus Prime transforms, his structure changes dramatically but his “essence” remains the same. Mathematically, this is captured by **determinants**!
>
> A determinant is like a **fingerprint** of a matrix:
>
> - If $|A| = 0$: The transformation **collapses** dimensions (singular/degenerate)

> - If $|A| \neq 0$: The transformation is **reversible** (non-singular)

> - $|A|$ tells you how much **area/volume gets scaled** by the transformation
>
> **Real applications:**
>
> - **Computer graphics:** Does this transformation flip the object? Check if $|A| < 0$

> - **Physics:** Is this system solvable? Check if determinant $\neq 0$

> - **Economics:** Is the input-output model consistent? Determinant must be non-zero

> - **Cryptography:** Is the encryption key valid? Requires $|A| \neq 0$ and $\gcd(|A|, 26) = 1$
>
> **Why this matters for JEE:** Determinants appear in 5-6 questions in JEE Main, and understanding properties is crucial for solving complex 3×3 determinants quickly in JEE Advanced. Speed matters!

---

## Prerequisites

Before diving into determinants, you should be comfortable with:

- [Matrix Basics](../matrix-basics/index.md) — Understanding square matrices
- [Matrix Algebra](../matrix-algebra/index.md) — Matrix operations
- Basic arithmetic — Sign patterns, multiplication

---

## What is a Determinant?

### Definition

A **determinant** is a **scalar value** associated with every **square matrix**.

For a matrix $A$, the determinant is denoted by:

$$|A| \quad \text{or} \quad \det(A) \quad \text{or} \quad \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}$$

**Key points:**

- Only **square matrices** have determinants
- Result is a **single number** (not a matrix!)
- Tells if matrix is **invertible**: $|A| \neq 0$ ↔ $A^{-1}$ exists

> **◐ In simple terms · Notation Alert**
>
> **Matrix:** Square brackets $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$
>
> **Determinant:** Vertical bars $\begin{vmatrix} a & b \\ c & d \end{vmatrix}$
>
> Don’t confuse the notation!

---

## Determinant of a 2×2 Matrix

### Formula

For a $2 \times 2$ matrix:

$$\boxed{\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc}$$

**Memory trick:** “Down-right minus up-right”

- Main diagonal product ($ad$) **MINUS**
- Off-diagonal product ($bc$)

### Visual Representation

$$\begin{vmatrix} \color{blue}{a} & b \\ c & \color{blue}{d} \end{vmatrix} - \begin{vmatrix} a & \color{red}{b} \\ \color{red}{c} & d \end{vmatrix}$$

Blue diagonal ($\color{blue}{ad}$) minus red diagonal ($\color{red}{bc}$)

### Examples

> **↗ Connection · Example 1**
>
> $$\begin{vmatrix} 3 & 2 \\ 1 & 4 \end{vmatrix} = (3)(4) - (2)(1) = 12 - 2 = 10$$

> **↗ Connection · Example 2**
>
> $$\begin{vmatrix} 5 & -3 \\ 2 & 7 \end{vmatrix} = (5)(7) - (-3)(2) = 35 + 6 = 41$$

> **↗ Connection · Example 3**
>
> $$\begin{vmatrix} 2 & 4 \\ 3 & 6 \end{vmatrix} = (2)(6) - (4)(3) = 12 - 12 = 0$$
>
> This matrix is **singular** (non-invertible) since $|A| = 0$!

---

## Determinant of a 3×3 Matrix

### Method 1: Sarrus Rule (Diagonal Method)

**Sarrus Rule** is a quick method for $3 \times 3$ determinants:

$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$$

**Step 1:** Rewrite first two columns on the right

$$\begin{array}{|ccc|cc}
a_1 & b_1 & c_1 & a_1 & b_1 \\
a_2 & b_2 & c_2 & a_2 & b_2 \\
a_3 & b_3 & c_3 & a_3 & b_3
\end{array}$$

**Step 2:** Sum of main diagonal products (↘):

$$\color{blue}{a_1 b_2 c_3 + b_1 c_2 a_3 + c_1 a_2 b_3}$$

**Step 3:** Sum of anti-diagonal products (↙):

$$\color{red}{c_1 b_2 a_3 + a_1 c_2 b_3 + b_1 a_2 c_3}$$

**Final:** Blue sum **minus** red sum

$$\boxed{|A| = \color{blue}{(a_1 b_2 c_3 + b_1 c_2 a_3 + c_1 a_2 b_3)} - \color{red}{(c_1 b_2 a_3 + a_1 c_2 b_3 + b_1 a_2 c_3)}}$$

> **★ Key point · Memory Trick: The Three Diagonals**
>
> **Positive terms** (↘ ↘ ↘):
>
> - Start from column 1, 2, 3 in row 1

> - Go diagonally down-right (wrap around)
>
> **Negative terms** (↙ ↙ ↙):
>
> - Start from column 3, 2, 1 in row 1

> - Go diagonally down-left (wrap around)
>
> **Mnemonic:** “Right is Plus, Left is Minus”

### Example using Sarrus Rule

$$\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}$$

**Positive products:**

- $1 \cdot 5 \cdot 9 = 45$
- $2 \cdot 6 \cdot 7 = 84$
- $3 \cdot 4 \cdot 8 = 96$

Sum = $45 + 84 + 96 = 225$

**Negative products:**

- $3 \cdot 5 \cdot 7 = 105$
- $1 \cdot 6 \cdot 8 = 48$
- $2 \cdot 4 \cdot 9 = 72$

Sum = $105 + 48 + 72 = 225$

**Determinant:** $225 - 225 = 0$

The matrix is **singular**!

---

### Method 2: Expansion by First Row

$$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$$

Expand along **Row 1** with alternating signs $(+, -, +)$:

$$\boxed{= a_1 \begin{vmatrix} b_2 & c_2 \\ b_3 & c_3 \end{vmatrix} - b_1 \begin{vmatrix} a_2 & c_2 \\ a_3 & c_3 \end{vmatrix} + c_1 \begin{vmatrix} a_2 & b_2 \\ a_3 & b_3 \end{vmatrix}}$$

**In expanded form:**

$$= a_1(b_2 c_3 - b_3 c_2) - b_1(a_2 c_3 - a_3 c_2) + c_1(a_2 b_3 - a_3 b_2)$$

**Sign pattern for expansion:**

$$\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$$

This is the **checkerboard pattern** starting with $+$ at position $(1,1)$.

### Example using Row Expansion

$$\begin{vmatrix} 2 & 3 & 1 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}$$

Expand along Row 1:

$$= 2\begin{vmatrix} 5 & 6 \\ 8 & 9 \end{vmatrix} - 3\begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix} + 1\begin{vmatrix} 4 & 5 \\ 7 & 8 \end{vmatrix}$$

$$= 2(45 - 48) - 3(36 - 42) + 1(32 - 35)$$

$$= 2(-3) - 3(-6) + 1(-3)$$

$$= -6 + 18 - 3 = 9$$

**Answer:** $|A| = 9$

> **★ Key point · Which Method to Use?**
>
> **Sarrus Rule:**
>
> - ✓ Fast for numerical $3 \times 3$ matrices

> - ✓ Good for quick calculations

> - ✗ Only works for $3 \times 3$ (not generalizable)

> - ✗ Easy to make sign errors
>
> **Row/Column Expansion:**
>
> - ✓ Works for **any size** square matrix

> - ✓ Systematic with clear sign pattern

> - ✓ Useful when row/column has zeros

> - ✗ Slower for purely numerical matrices
>
> **JEE Strategy:** Use Sarrus for quick $3 \times 3$. Use expansion when:
>
> - Matrix has many zeros

> - Matrix has symbolic entries

> - Need to prove properties

---

## Expansion Along Any Row or Column

You can expand along **any row or column** (not just first row!)

### General Formula

For element $a_{ij}$, the **cofactor** sign is:

$$\boxed{(-1)^{i+j}}$$

**Sign pattern:**

$$\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$$

### Expansion Along Row $i$

$$|A| = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}$$

where $M_{ij}$ is the **minor** (determinant after removing row $i$ and column $j$).

### Expansion Along Column $j$

$$|A| = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} M_{ij}$$

> **★ Key point · Smart Strategy: Choose the Best Row/Column**
>
> **Always expand along the row/column with the most zeros!**
>
> This minimizes calculations.
>
> **Example:**
>
> $$\begin{vmatrix} 1 & 2 & 3 \\ 0 & 0 & 5 \\ 4 & 0 & 6 \end{vmatrix}$$
>
> Expand along **Row 2** (has two zeros):
>
> $$= -0 \cdot M_{21} + 0 \cdot M_{22} - 5 \cdot M_{23}$$

$$= -5 \begin{vmatrix} 1 & 2 \\ 4 & 0 \end{vmatrix} = -5(0 - 8) = -5(-8) = 40$$
>
> Only one $2 \times 2$ determinant needed!

---

## Special Determinants

### 1. Diagonal Matrix

$$\begin{vmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{vmatrix} = abc$$

**Rule:** Product of diagonal elements.

### 2. Triangular Matrix (Upper or Lower)

$$\begin{vmatrix} a & * & * \\ 0 & b & * \\ 0 & 0 & c \end{vmatrix} = abc$$

**Rule:** Product of diagonal elements (regardless of other entries).

### 3. Identity Matrix

$$|I_n| = 1$$

### 4. Zero Matrix

$$|O| = 0$$

### 5. Matrix with Zero Row or Column

If any row or column is entirely zeros:

$$|A| = 0$$

### 6. Matrix with Two Identical Rows/Columns

If two rows (or columns) are identical:

$$|A| = 0$$

**Example:**

$$\begin{vmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix} = 0$$

(Row 1 = Row 2)

### 7. Matrix with Proportional Rows/Columns

If one row is a scalar multiple of another:

$$|A| = 0$$

**Example:**

$$\begin{vmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 7 & 8 & 9 \end{vmatrix} = 0$$

(Row 2 = 2 × Row 1)

> **★ Key point · JEE Time-Saver**
>
> **Before calculating a complex determinant, check:**
>
> 1. Is any row/column all zeros? → $|A| = 0$

> 2. Are two rows/columns identical? → $|A| = 0$

> 3. Is one row a multiple of another? → $|A| = 0$

> 4. Is it triangular/diagonal? → Product of diagonal
>
> These checks can save 2-3 minutes on JEE Advanced!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Sarrus Rule for Larger Matrices**
>
> **Wrong:** Using Sarrus rule for $4 \times 4$ or larger matrices
>
> **Right:** Sarrus rule **ONLY** works for $3 \times 3$ matrices!
>
> For $n \geq 4$, you must use cofactor expansion or properties.

> **⚠ Trap #2: Sign Errors in Expansion**
>
> **Wrong:** Forgetting the alternating signs in expansion
>
> **Right:** Always use the checkerboard pattern:
>
> $$\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$$
>
> Position $(i,j)$ has sign $(-1)^{i+j}$

> **⚠ Trap #3: Determinant of Non-Square Matrix**
>
> **Wrong:** Finding determinant of a $2 \times 3$ matrix
>
> **Right:** Determinants are **only defined** for square matrices!
>
> $\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$ has no determinant.

> **⚠ Trap #4: Determinant vs Matrix**
>
> **Wrong:**
>
> $$\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix} = \begin{bmatrix} -2 & 2 \\ 3 & -1 \end{bmatrix}$$
>
> **Right:**
>
> $$\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix} = -2 \text{ (a scalar, not a matrix!)}$$
>
> Determinant is always a **single number**, not a matrix!

> **⚠ Trap #5: Proportional Rows**
>
> **Wrong:** Not recognizing proportional rows before calculating
>
> **Example:**
>
> $$\begin{vmatrix} 2 & 4 & 6 \\ 1 & 2 & 3 \\ 5 & 7 & 9 \end{vmatrix}$$
>
> Row 1 = 2 × Row 2, so $|A| = 0$ immediately!
>
> Don’t waste time calculating!

---

## Quick Calculation Techniques for JEE

### Technique 1: Factor Out Common Factors

If a row/column has a common factor, take it out:

$$\begin{vmatrix} 2 & 4 & 6 \\ 1 & 3 & 5 \\ 7 & 8 & 9 \end{vmatrix} = 2 \begin{vmatrix} 1 & 2 & 3 \\ 1 & 3 & 5 \\ 7 & 8 & 9 \end{vmatrix}$$

### Technique 2: Create Zeros Using Row Operations

Use the property: $R_i \to R_i + kR_j$ doesn’t change the determinant!

$$\begin{vmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 3 & 7 & 11 \end{vmatrix}$$

$R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - 3R_1$:

$$= \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 1 & 2 \end{vmatrix}$$

Expand along Column 1:

$$= 1 \cdot \begin{vmatrix} 1 & 1 \\ 1 & 2 \end{vmatrix} = 2 - 1 = 1$$

### Technique 3: Pattern Recognition

$$\begin{vmatrix} 1 & a & a^2 \\ 1 & b & b^2 \\ 1 & c & c^2 \end{vmatrix} = (b-a)(c-a)(c-b)$$

This is a **Vandermonde determinant** — memorize it for JEE!

More patterns in [Properties of Determinants](../properties-determinants/index.md).

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Evaluate: $\begin{vmatrix} 3 & -2 \\ 4 & 5 \end{vmatrix}$
>
> **Solution:**
>
> $$= (3)(5) - (-2)(4) = 15 + 8 = 23$$
>
> **Answer:** 23

> **↗ Connection · Problem 1.2**
>
> Find: $\begin{vmatrix} 6 & 3 \\ 10 & 5 \end{vmatrix}$
>
> **Solution:**
>
> $$= (6)(5) - (3)(10) = 30 - 30 = 0$$
>
> The matrix is singular!
>
> **Answer:** 0

> **↗ Connection · Problem 1.3**
>
> Evaluate using Sarrus rule: $\begin{vmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{vmatrix}$
>
> **Solution:**
>
> This is a diagonal matrix!
>
> $$= 1 \cdot 2 \cdot 3 = 6$$
>
> **Answer:** 6

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Evaluate: $\begin{vmatrix} 2 & 3 & 5 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}$
>
> **Solution:**
>
> Using Sarrus rule:
>
> Positive: $2(5)(9) + 3(6)(7) + 5(4)(8) = 90 + 126 + 160 = 376$
>
> Negative: $5(5)(7) + 2(6)(8) + 3(4)(9) = 175 + 96 + 108 = 379$
>
> $$|A| = 376 - 379 = -3$$
>
> **Answer:** $-3$

> **↗ Connection · Problem 2.2**
>
> Without expanding, show that: $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 5 & 7 & 9 \end{vmatrix} = 0$
>
> **Solution:**
>
> Notice Row 2 = 2 × Row 1
>
> When one row is a scalar multiple of another, determinant = 0.
>
> **Answer:** $|A| = 0$ (no calculation needed!)

> **↗ Connection · Problem 2.3**
>
> Evaluate by choosing the best row/column: $\begin{vmatrix} 1 & 0 & 3 \\ 2 & 0 & 5 \\ 4 & 0 & 6 \end{vmatrix}$
>
> **Solution:**
>
> Column 2 is all zeros, so $|A| = 0$ immediately!
>
> Alternatively, expand along Column 2:
>
> $$= -0 + 0 - 0 = 0$$
>
> **Answer:** 0

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $\begin{vmatrix} x & 2 & 3 \\ 4 & x & 5 \\ 6 & 7 & x \end{vmatrix} = 0$, find the sum of all possible values of $x$.
>
> **Solution:**
>
> Expand using first row:
>
> $$x(x^2 - 35) - 2(4x - 30) + 3(28 - 6x) = 0$$

$$x^3 - 35x - 8x + 60 + 84 - 18x = 0$$

$$x^3 - 61x + 144 = 0$$
>
> By sum of roots of cubic $ax^3 + bx^2 + cx + d = 0$:
>
> Sum of roots $= -\frac{b}{a} = 0$ (since coefficient of $x^2$ is 0)
>
> **Answer:** Sum = 0

> **↗ Connection · Problem 3.2**
>
> Prove that: $\begin{vmatrix} 1 & 1 & 1 \\ a & b & c \\ a^2 & b^2 & c^2 \end{vmatrix} = (b-a)(c-a)(c-b)$
>
> **Solution:**
>
> Apply $C_2 \to C_2 - C_1$ and $C_3 \to C_3 - C_1$:
>
> $$= \begin{vmatrix} 1 & 0 & 0 \\ a & b-a & c-a \\ a^2 & b^2-a^2 & c^2-a^2 \end{vmatrix}$$

$$= \begin{vmatrix} 1 & 0 & 0 \\ a & b-a & c-a \\ a^2 & (b-a)(b+a) & (c-a)(c+a) \end{vmatrix}$$
>
> Factor out from columns 2 and 3:
>
> $$= (b-a)(c-a) \begin{vmatrix} 1 & 0 & 0 \\ a & 1 & 1 \\ a^2 & b+a & c+a \end{vmatrix}$$
>
> Expand along Row 1:
>
> $$= (b-a)(c-a) \begin{vmatrix} 1 & 1 \\ b+a & c+a \end{vmatrix}$$

$$= (b-a)(c-a)[(c+a) - (b+a)]$$

$$= (b-a)(c-a)(c-b)$$
>
> **Proved!**

> **↗ Connection · Problem 3.3**
>
> Evaluate: $\begin{vmatrix} 1+a & 1 & 1 \\ 1 & 1+b & 1 \\ 1 & 1 & 1+c \end{vmatrix}$ where $a, b, c \neq 0$
>
> **Solution:**
>
> Apply $R_1 \to R_1 - R_3$ and $R_2 \to R_2 - R_3$:
>
> $$= \begin{vmatrix} a & 0 & -c \\ 0 & b & -c \\ 1 & 1 & 1+c \end{vmatrix}$$
>
> Expand along Row 1:
>
> $$= a \begin{vmatrix} b & -c \\ 1 & 1+c \end{vmatrix} - 0 + (-c) \begin{vmatrix} 0 & b \\ 1 & 1 \end{vmatrix}$$

$$= a[b(1+c) + c] - c[0 - b]$$

$$= a[b + bc + c] + bc$$

$$= ab + abc + ac + bc$$

$$= abc + ab + bc + ca$$
>
> **Answer:** $abc + ab + bc + ca$

---

## Quick Revision Box

| Concept | Formula/Rule |
| --- | --- |
| $2 \times 2$ determinant | $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$ |
| Sarrus rule | 3 positive diagonals - 3 negative diagonals |
| Expansion signs | Checkerboard: $(-1)^{i+j}$ |
| Diagonal matrix | Product of diagonal elements |
| Triangular matrix | Product of diagonal elements |
| Zero row/column | $\|A\| = 0$ |
| Identical rows | $\|A\| = 0$ |
| Proportional rows | $\|A\| = 0$ |
| Identity matrix | $\|I\| = 1$ |
| Best expansion | Choose row/column with most zeros |

---

## Related Topics

### Within Matrices & Determinants Chapter

- [Matrix Basics](../matrix-basics/index.md) — Foundation of square matrices
- [Matrix Algebra](../matrix-algebra/index.md) — Operations before determinants
- [Minors and Cofactors](../minors-cofactors/index.md) — Building blocks of expansion
- [Properties of Determinants](../properties-determinants/index.md) — Shortcuts and patterns
- [Adjoint and Inverse](../adjoint-inverse/index.md) — Using $|A|$ to find inverse

### Math Connections

- [Linear Equations](../linear-equations/index.md) — Cramer’s rule uses determinants
- [Coordinate Geometry](../../coordinate-geometry/index.md) — Area of triangle formula
- [Vector Algebra](../../vector-algebra/index.md) — Scalar triple product

### Real-World Applications

- Linear transformations — Determinant as scaling factor
- Computer graphics — Check if transformation preserves orientation
- Systems of equations — Solvability condition
- Cryptography — Key validity check

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Determinant is a scalar** associated with square matrices only

> 2. **2×2 formula:** $ad - bc$ (main diagonal minus off-diagonal)

> 3. **3×3 methods:** Sarrus rule (quick) or expansion (systematic)

> 4. **Sign pattern:** Checkerboard starting with $+$ at $(1,1)$: $(-1)^{i+j}$

> 5. **Smart expansion:** Choose row/column with **most zeros**

> 6. **Quick checks:** Zero row, identical rows, proportional rows → $|A| = 0$

> 7. **Triangular/diagonal:** Just multiply diagonal elements

> 8. **Sarrus ONLY for 3×3** — doesn’t work for larger matrices!
>
> **“Before calculating, always check for zeros, identical rows, or proportional rows — save precious JEE time!”**
>
> **Exam Strategy:**
>
> - For $2 \times 2$: Direct formula (5 seconds)

> - For $3 \times 3$ numerical: Sarrus rule (30 seconds)

> - For $3 \times 3$ with zeros: Expand along best row/column (45 seconds)

> - For symbolic: Use properties and row operations (next chapter!)

---

**[Next: Minors and Cofactors →](../minors-cofactors/index.md)**

From TestGuru · our mock-test platform

## You've read Determinants: Evaluation and Calculation.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=matrices-determinants&tg_exam=jee-main&tg_page=%2Fmathematics%2Fmatrices-determinants%2Fdeterminants-evaluation%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/matrices-determinants/determinants-evaluation/",this.page.identifier="/mathematics/matrices-determinants/determinants-evaluation/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="matrixVisualizer" id="anim-matrixVisualizer-1795396421968665995"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-matrixVisualizer-1795396421968665995")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/matrices-determinants/determinants-evaluation/](https://jeenotes.in/mathematics/matrices-determinants/determinants-evaluation/) · raw HTML: `offline/mathematics/matrices-determinants/determinants-evaluation/index.html`_
