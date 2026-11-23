---
title: "Linear Equations: Cramer's Rule and Matrix Method"
source: "https://jeenotes.in/mathematics/matrices-determinants/linear-equations/"
description: "Master solving systems of linear equations using Cramer's rule, matrix method, consistency conditions, and applications for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 9"
html: "../../../../offline/mathematics/matrices-determinants/linear-equations/index.html"
extracted: "2026-11-23"
---

> Master solving systems of linear equations using Cramer's rule, matrix method, consistency conditions, and applications for JEE Main & Advanced.

## The Hook: GPS Uses Linear Equations Every Second

> **★ Key point · Connect: How Your Phone Knows Where You Are**
>
> Every time you open Google Maps, your phone solves a **system of linear equations** in milliseconds!
>
> GPS satellites send signals, and your phone needs to find its position $(x, y, z)$ by solving:
>
> $$\begin{cases}

> (x - x_1)^2 + (y - y_1)^2 + (z - z_1)^2 = d_1^2 \\

> (x - x_2)^2 + (y - y_2)^2 + (z - z_2)^2 = d_2^2 \\

> (x - x_3)^2 + (y - y_3)^2 + (z - z_3)^2 = d_3^2

> \end{cases}$$
>
> When linearized, this becomes a **system of 3 linear equations** in 3 unknowns — exactly what we study here!
>
> **Real-world applications:**
>
> - **Navigation:** GPS, aircraft positioning, autonomous vehicles

> - **Economics:** Supply-demand equilibrium, input-output analysis

> - **Engineering:** Circuit analysis, structural loads, fluid dynamics

> - **Machine learning:** Regression, neural network training

> - **Computer graphics:** 3D rendering, animation keyframing
>
> **Why this matters for JEE:** Linear systems appear in 4-5 questions in JEE Main and are crucial for coordinate geometry, calculus optimization, and physics problems in JEE Advanced.

---

## Prerequisites

Before diving into linear equations, you should be comfortable with:

- [Matrix Basics](../matrix-basics/index.md) — Matrix notation and types
- [Matrix Algebra](../matrix-algebra/index.md) — Matrix multiplication
- [Determinants](../determinants-evaluation/index.md) — Computing determinants
- [Adjoint and Inverse](../adjoint-inverse/index.md) — Matrix inverse

---

## System of Linear Equations

### General Form

A system of $m$ linear equations in $n$ unknowns:

$$\begin{cases}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
\end{cases}$$

### Matrix Form

$$\boxed{AX = B}$$

where:

$$A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}, \quad X = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}, \quad B = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}$$

**Components:**

- **$A$:** Coefficient matrix ($m \times n$)
- **$X$:** Variable column matrix ($n \times 1$)
- **$B$:** Constant column matrix ($m \times 1$)

### Homogeneous vs Non-Homogeneous

**Homogeneous system:** $AX = O$ (all constants are zero)

$$\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = 0 \\
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = 0 \\
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = 0
\end{cases}$$

Always has **trivial solution** $x_1 = x_2 = x_3 = 0$

**Non-homogeneous system:** $AX = B$ where $B \neq O$

$$\begin{cases}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1 \\
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = b_2 \\
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3
\end{cases}$$

---

## Solution Methods for Square Systems

We focus on **square systems** where $m = n$ (same number of equations as unknowns).

### Method 1: Matrix Method (Using Inverse)

**Concept:** If $AX = B$ and $A^{-1}$ exists:

$$\boxed{X = A^{-1}B}$$

**Steps:**

1. Check if $|A| \neq 0$ (inverse exists)
2. Find $A^{-1} = \frac{1}{|A|} \text{adj}(A)$
3. Multiply: $X = A^{-1}B$

**Applicability:** Only when $|A| \neq 0$ (unique solution exists)

#### Example: 2×2 System

Solve:

$$\begin{cases}
2x + 3y = 8 \\
x + 4y = 9
\end{cases}$$

**Step 1: Write in matrix form**

$$\begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 8 \\ 9 \end{bmatrix}$$

$$A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}, \quad X = \begin{bmatrix} x \\ y \end{bmatrix}, \quad B = \begin{bmatrix} 8 \\ 9 \end{bmatrix}$$

**Step 2: Find determinant**

$$|A| = 8 - 3 = 5 \neq 0$$

✓ (unique solution exists)

**Step 3: Find inverse**

$$A^{-1} = \frac{1}{5} \begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix}$$

**Step 4: Solve**

$$X = A^{-1}B = \frac{1}{5} \begin{bmatrix} 4 & -3 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} 8 \\ 9 \end{bmatrix}$$

$$= \frac{1}{5} \begin{bmatrix} 32 - 27 \\ -8 + 18 \end{bmatrix} = \frac{1}{5} \begin{bmatrix} 5 \\ 10 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$

**Answer:** $x = 1, y = 2$

#### Example: 3×3 System

Solve:

$$\begin{cases}
x + y + z = 6 \\
2x - y + z = 3 \\
x + 2y - z = 4
\end{cases}$$

**Matrix form:**

$$\begin{bmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 6 \\ 3 \\ 4 \end{bmatrix}$$

**Find $|A|$:**

$$|A| = 1(1-2) - 1(-2-1) + 1(4+1) = -1 + 3 + 5 = 7 \neq 0$$

✓

**Find inverse and solve:**

$$X = A^{-1}B$$

(calculation omitted for brevity)

**Answer:** $x = 1, y = 2, z = 3$

---

### Method 2: Cramer’s Rule

**Cramer’s Rule** provides an explicit formula for each variable using determinants.

For system $AX = B$ where $|A| \neq 0$:

$$\boxed{x_i = \frac{D_i}{D}}$$

where:

- **$D = |A|$** (determinant of coefficient matrix)
- **$D_i$** = determinant of matrix formed by replacing $i^{th}$ column of $A$ with $B$

#### For 2×2 System

$$\begin{cases}
a_1x + b_1y = c_1 \\
a_2x + b_2y = c_2
\end{cases}$$

$$D = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}$$

$$D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix} \quad \text{(replace column 1 with constants)}$$

$$D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix} \quad \text{(replace column 2 with constants)}$$

$$\boxed{x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}}$$

#### For 3×3 System

$$\begin{cases}
a_1x + b_1y + c_1z = d_1 \\
a_2x + b_2y + c_2z = d_2 \\
a_3x + b_3y + c_3z = d_3
\end{cases}$$

$$D = \begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix}$$

$$D_x = \begin{vmatrix} d_1 & b_1 & c_1 \\ d_2 & b_2 & c_2 \\ d_3 & b_3 & c_3 \end{vmatrix}, \quad D_y = \begin{vmatrix} a_1 & d_1 & c_1 \\ a_2 & d_2 & c_2 \\ a_3 & d_3 & c_3 \end{vmatrix}, \quad D_z = \begin{vmatrix} a_1 & b_1 & d_1 \\ a_2 & b_2 & d_2 \\ a_3 & b_3 & d_3 \end{vmatrix}$$

$$\boxed{x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}, \quad z = \frac{D_z}{D}}$$

> **★ Key point · Memory Trick: Cramer's Rule**
>
> **Step 1:** Find $D$ = determinant of coefficient matrix
>
> **Step 2:** For each variable:
>
> - Replace that variable’s column with the constant column

> - Find the determinant
>
> **Step 3:** Variable = $\frac{\text{New determinant}}{D}$
>
> **Mnemonic:** “**D**ivide **D**eterminants **D**irectly”
>
> For $x$: Replace **x-column** (column 1)

> For $y$: Replace **y-column** (column 2)

> For $z$: Replace **z-column** (column 3)

#### Example: Using Cramer’s Rule

Solve:

$$\begin{cases}
2x + 3y = 8 \\
x + 4y = 9
\end{cases}$$

**Step 1: Find $D$**

$$D = \begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix} = 8 - 3 = 5$$

**Step 2: Find $D_x$ (replace column 1 with constants)**

$$D_x = \begin{vmatrix} 8 & 3 \\ 9 & 4 \end{vmatrix} = 32 - 27 = 5$$

**Step 3: Find $D_y$ (replace column 2 with constants)**

$$D_y = \begin{vmatrix} 2 & 8 \\ 1 & 9 \end{vmatrix} = 18 - 8 = 10$$

**Step 4: Solve**

$$x = \frac{D_x}{D} = \frac{5}{5} = 1$$

$$y = \frac{D_y}{D} = \frac{10}{5} = 2$$

**Answer:** $x = 1, y = 2$

---

## Consistency of Linear Systems

### Definitions

**Consistent system:** Has **at least one solution**

- Can have unique solution or infinitely many solutions

**Inconsistent system:** Has **no solution**

- Represents parallel lines/planes that don’t intersect

### Consistency Conditions (Square Systems)

For system $AX = B$ where $A$ is $n \times n$:

| Condition | Nature | Solutions |
| --- | --- | --- |
| $\|A\| \neq 0$ | **Consistent** | **Unique solution** |
| $\|A\| = 0$ and $(\text{adj } A)B \neq O$ | **Inconsistent** | **No solution** |
| $\|A\| = 0$ and $(\text{adj } A)B = O$ | **Consistent** | **Infinitely many solutions** |

$$\boxed{\begin{cases}
|A| \neq 0 & \Rightarrow \text{Unique solution} \\
|A| = 0, (\text{adj } A)B \neq O & \Rightarrow \text{No solution} \\
|A| = 0, (\text{adj } A)B = O & \Rightarrow \text{Infinitely many solutions}
\end{cases}}$$

> **★ Key point · JEE Quick Check**
>
> **To check consistency:**
>
> **Step 1:** Calculate $|A|$
>
> **If $|A| \neq 0$:** **STOP** → Unique solution exists (use Cramer’s or matrix method)
>
> **If $|A| = 0$:** Calculate $(\text{adj } A) \cdot B$
>
> - **If $(\text{adj } A)B \neq O$:** Inconsistent (no solution)

> - **If $(\text{adj } A)B = O$:** Infinitely many solutions (system is dependent)
>
> **Time-saver:** For JEE, often you only need to check $|A|$ to determine uniqueness!

### Example: Checking Consistency

Determine the nature of solutions:

$$\begin{cases}
x + y + z = 4 \\
2x + y - z = 1 \\
x - y + 2z = 2
\end{cases}$$

**Step 1: Find $|A|$**

$$A = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 1 & -1 \\ 1 & -1 & 2 \end{bmatrix}$$

$$|A| = 1(2-1) - 1(4+1) + 1(-2-1) = 1 - 5 - 3 = -7 \neq 0$$

**Conclusion:** Unique solution exists ✓

---

## Homogeneous Systems

For homogeneous system $AX = O$:

### Trivial Solution

Always has the **trivial solution**: $X = O$ (all variables = 0)

### Non-Trivial Solutions

**Condition for non-trivial solutions:**

$$\boxed{|A| = 0}$$

**If $|A| = 0$:** Infinitely many non-trivial solutions exist

**If $|A| \neq 0$:** Only trivial solution exists

### Example: Homogeneous System

Find condition for non-trivial solutions:

$$\begin{cases}
x + 2y + 3z = 0 \\
2x + 3y + kz = 0 \\
3x + 4y + 5z = 0
\end{cases}$$

**For non-trivial solutions, we need $|A| = 0$:**

$$\begin{vmatrix} 1 & 2 & 3 \\ 2 & 3 & k \\ 3 & 4 & 5 \end{vmatrix} = 0$$

Expanding:

$$1(15-4k) - 2(10-3k) + 3(8-9) = 0$$

$$15 - 4k - 20 + 6k - 3 = 0$$

$$2k - 8 = 0$$

$$k = 4$$

**Answer:** For $k = 4$, the system has infinitely many non-trivial solutions.

---

## Comparison of Methods

| Method | Pros | Cons | Best For |
| --- | --- | --- | --- |
| **Matrix Method** | ✓ General, systematic ✓ Good for symbolic | ✗ Need to find inverse ✗ Slow for large systems | Theoretical problems |
| **Cramer’s Rule** | ✓ Direct formulas ✓ Good for single variable | ✗ Many determinants ✗ Inefficient for $n > 3$ | Finding one variable |
| **Elimination** | ✓ Fast for numerical ✓ Works for rectangular | ✗ Not compact formula | Numerical computation |

> **◐ In simple terms · JEE Strategy**
>
> **For 2×2 systems:**
>
> - Use **Cramer’s rule** (fastest — 30 seconds)
>
> **For 3×3 systems:**
>
> - If finding **all variables:** Use **matrix method** or **Cramer’s**

> - If finding **one variable:** Use **Cramer’s rule** for that variable

> - If checking **consistency:** Find $|A|$ first
>
> **For theoretical problems:**
>
> - Use **matrix method** to show all steps clearly
>
> **For multiple choice:**
>
> - Sometimes you can **substitute options** to check!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Using Cramer's When $|A| = 0$**
>
> **Wrong:** Applying Cramer’s rule when $|A| = 0$
>
> **Right:** Cramer’s rule **only works when $|A| \neq 0$**!
>
> If $|A| = 0$, system is either inconsistent or has infinitely many solutions.

> **⚠ Trap #2: Wrong Column Replacement**
>
> **Wrong:** For $D_y$, replacing row 2 with constants
>
> **Right:** For $D_y$, replace **column 2** with constants (not row!)
>
> Variables correspond to **columns**, not rows.

> **⚠ Trap #3: Homogeneous System Confusion**
>
> **Wrong:** Homogeneous system has no solution when $|A| = 0$
>
> **Right:** Homogeneous system **always has at least** the trivial solution $X = O$
>
> When $|A| = 0$, it has **infinitely many** (non-trivial) solutions.

> **⚠ Trap #4: Inconsistency Check**
>
> **Wrong:** If $|A| = 0$, system is always inconsistent
>
> **Right:** If $|A| = 0$, check $(\text{adj } A)B$:
>
> - If $\neq O$ → Inconsistent

> - If $= O$ → Infinitely many solutions

> **⚠ Trap #5: Matrix Multiplication Order**
>
> **Wrong:** $X = BA^{-1}$ (wrong order)
>
> **Right:** $X = A^{-1}B$ (inverse on left!)
>
> Matrix multiplication is not commutative!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Solve using matrix method:
>
> $$\begin{cases}

> x + 2y = 5 \\

> 2x + 3y = 8

> \end{cases}$$
>
> **Solution:**
>
> $$A = \begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}, \quad |A| = 3 - 4 = -1$$

$$A^{-1} = \frac{1}{-1} \begin{bmatrix} 3 & -2 \\ -2 & 1 \end{bmatrix} = \begin{bmatrix} -3 & 2 \\ 2 & -1 \end{bmatrix}$$

$$X = A^{-1}B = \begin{bmatrix} -3 & 2 \\ 2 & -1 \end{bmatrix} \begin{bmatrix} 5 \\ 8 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$$
>
> **Answer:** $x = 1, y = 2$

> **↗ Connection · Problem 1.2**
>
> Solve using Cramer’s rule:
>
> $$\begin{cases}

> 3x + 4y = 10 \\

> 2x - 2y = 2

> \end{cases}$$
>
> **Solution:**
>
> $$D = \begin{vmatrix} 3 & 4 \\ 2 & -2 \end{vmatrix} = -6 - 8 = -14$$

$$D_x = \begin{vmatrix} 10 & 4 \\ 2 & -2 \end{vmatrix} = -20 - 8 = -28$$

$$D_y = \begin{vmatrix} 3 & 10 \\ 2 & 2 \end{vmatrix} = 6 - 20 = -14$$

$$x = \frac{-28}{-14} = 2, \quad y = \frac{-14}{-14} = 1$$
>
> **Answer:** $x = 2, y = 1$

> **↗ Connection · Problem 1.3**
>
> Check if the system is consistent:
>
> $$\begin{cases}

> x + y = 3 \\

> 2x + 2y = 6

> \end{cases}$$
>
> **Solution:**
>
> $$|A| = \begin{vmatrix} 1 & 1 \\ 2 & 2 \end{vmatrix} = 2 - 2 = 0$$
>
> Row 2 = 2 × Row 1, so equations are dependent.
>
> **Answer:** Consistent with infinitely many solutions (e.g., $x = t, y = 3-t$)

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Solve:
>
> $$\begin{cases}

> x + y + z = 6 \\

> x - y + z = 2 \\

> 2x + y - z = 1

> \end{cases}$$
>
> **Solution:**
>
> Using Cramer’s rule:
>
> $$D = \begin{vmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 2 & 1 & -1 \end{vmatrix} = 1(1-1) - 1(-1-2) + 1(1+2) = 0 + 3 + 3 = 6$$

$$D_x = \begin{vmatrix} 6 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 1 & -1 \end{vmatrix} = 6(1-1) - 1(-2-1) + 1(2+1) = 0 + 3 + 3 = 6$$

$$x = \frac{6}{6} = 1$$
>
> Similarly: $y = 2, z = 3$
>
> **Answer:** $x = 1, y = 2, z = 3$

> **↗ Connection · Problem 2.2**
>
> For what value of $k$ does the system have no solution?
>
> $$\begin{cases}

> x + 2y = 3 \\

> 2x + ky = 5

> \end{cases}$$
>
> **Solution:**
>
> For no solution: $|A| = 0$ and system inconsistent
>
> $$|A| = \begin{vmatrix} 1 & 2 \\ 2 & k \end{vmatrix} = k - 4 = 0 \Rightarrow k = 4$$
>
> Check: When $k = 4$, system becomes:
>
> $$x + 2y = 3$$

$$2x + 4y = 5$$
>
> (which is $2(x+2y) = 2(3) = 6 \neq 5$)
>
> Inconsistent! ✓
>
> **Answer:** $k = 4$

> **↗ Connection · Problem 2.3**
>
> Find condition for non-trivial solution:
>
> $$\begin{cases}

> x + ky + 3z = 0 \\

> 2x + 3y - z = 0 \\

> 3x + 2y - 2z = 0

> \end{cases}$$
>
> **Solution:**
>
> For non-trivial solutions: $|A| = 0$
>
> $$\begin{vmatrix} 1 & k & 3 \\ 2 & 3 & -1 \\ 3 & 2 & -2 \end{vmatrix} = 0$$

$$1(-6+2) - k(-4+3) + 3(4-9) = 0$$

$$-4 + k - 15 = 0$$

$$k = 19$$
>
> **Answer:** $k = 19$

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If the system has infinitely many solutions, find the relation between $a, b, c$:
>
> $$\begin{cases}

> x + 2y + 3z = a \\

> 2x + 3y + z = b \\

> 3x + 4y + 2z = c

> \end{cases}$$
>
> **Solution:**
>
> For infinitely many solutions: $|A| = 0$ and $(\text{adj } A)B = O$
>
> $$|A| = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \\ 3 & 4 & 2 \end{vmatrix}$$

$$= 1(6-4) - 2(4-3) + 3(8-9) = 2 - 2 - 3 = -3 \neq 0$$
>
> Wait, this means unique solution exists for general $a, b, c$.
>
> For infinitely many solutions, we need the augmented matrix to have rank defect.
>
> Actually, the system has unique solution for all $a, b, c$ since $|A| \neq 0$.
>
> **Answer:** No relation needed; system always has unique solution (question premise incorrect)

> **↗ Connection · Problem 3.2**
>
> Solve the system if $\lambda = 2$:
>
> $$\begin{cases}

> x + y + z = 1 \\

> 2x + 3y + 2z = \lambda \\

> x + 2y + 3z = 3

> \end{cases}$$
>
> **Solution:**
>
> Substitute $\lambda = 2$:
>
> $$A = \begin{bmatrix} 1 & 1 & 1 \\ 2 & 3 & 2 \\ 1 & 2 & 3 \end{bmatrix}, \quad B = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$$

$$|A| = 1(9-4) - 1(6-2) + 1(4-3) = 5 - 4 + 1 = 2 \neq 0$$
>
> Using matrix method or Cramer’s rule:
>
> $$x = 0, \quad y = -1, \quad z = 2$$
>
> **Answer:** $x = 0, y = -1, z = 2$

---

## Quick Revision Box

| Concept | Formula/Condition |
| --- | --- |
| Matrix form | $AX = B$ |
| Matrix method | $X = A^{-1}B$ (if $\|A\| \neq 0$) |
| Cramer’s rule | $x_i = \frac{D_i}{D}$ where $D = \|A\|$ |
| Unique solution | $\|A\| \neq 0$ |
| No solution | $\|A\| = 0$ and $(\text{adj } A)B \neq O$ |
| Infinite solutions | $\|A\| = 0$ and $(\text{adj } A)B = O$ |
| Homogeneous trivial | $X = O$ (always exists) |
| Homogeneous non-trivial | $\|A\| = 0$ (infinitely many) |
| Consistency check | Calculate $\|A\|$ first! |

---

## Related Topics

### Within Matrices & Determinants Chapter

- [Matrix Basics](../matrix-basics/index.md) — Matrix notation
- [Matrix Algebra](../matrix-algebra/index.md) — Matrix operations
- [Determinants](../determinants-evaluation/index.md) — Computing $|A|$
- [Adjoint and Inverse](../adjoint-inverse/index.md) — Finding $A^{-1}$
- [Properties of Determinants](../properties-determinants/index.md) — Shortcuts for evaluation

### Math Connections

- [Coordinate Geometry](../../coordinate-geometry/straight-lines/index.md) — Intersection of lines
- [Vector Algebra](../../vector-algebra/index.md) — Vector equations
- [Complex Numbers](../../complex-numbers/index.md) — Complex linear systems

### Real-World Applications

- GPS positioning — Satellite triangulation
- Economics — Input-output analysis, equilibrium
- Circuit analysis — Kirchhoff’s laws
- Structural engineering — Force distribution
- Machine learning — Linear regression

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Matrix form:** $AX = B$ (compact representation)

> 2. **Two main methods:** Matrix method ($X = A^{-1}B$) and Cramer’s rule ($x_i = \frac{D_i}{D}$)

> 3. **Consistency conditions:**

>    - $|A| \neq 0$ → **Unique solution**

>    - $|A| = 0, (\text{adj } A)B \neq O$ → **No solution**

>    - $|A| = 0, (\text{adj } A)B = O$ → **Infinitely many solutions**

> 4. **Homogeneous systems:** Always have trivial solution; non-trivial exists iff $|A| = 0$

> 5. **Cramer’s rule:** Replace column with constants, divide by $D$

> 6. **Quick check:** Always find $|A|$ first to determine nature of solutions
>
> **“First check the determinant — it tells you everything about the system!”**
>
> **Exam Strategy:**
>
> - **Step 1:** Write in matrix form $AX = B$

> - **Step 2:** Calculate $|A|$

>   - If $|A| \neq 0$ → Use Cramer’s or matrix method

>   - If $|A| = 0$ → Check consistency

> - **Step 3:** For 2×2, Cramer’s is fastest (30 seconds)

> - **Step 4:** For 3×3, choose based on what’s asked

---

**[Next: Properties of Determinants →](../properties-determinants/index.md)**

From TestGuru · our mock-test platform

## You've read Linear Equations: Cramer's Rule and Matrix Method.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=matrices-determinants&tg_exam=jee-main&tg_page=%2Fmathematics%2Fmatrices-determinants%2Flinear-equations%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/matrices-determinants/linear-equations/",this.page.identifier="/mathematics/matrices-determinants/linear-equations/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="matrixVisualizer" id="anim-matrixVisualizer-1795396421981420610"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-matrixVisualizer-1795396421981420610")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/matrices-determinants/linear-equations/](https://jeenotes.in/mathematics/matrices-determinants/linear-equations/) · raw HTML: `offline/mathematics/matrices-determinants/linear-equations/index.html`_
