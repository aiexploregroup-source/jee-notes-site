---
title: "Matrix Algebra: Operations and Properties"
source: "https://jeenotes.in/mathematics/matrices-determinants/matrix-algebra/"
description: "Master matrix addition, scalar multiplication, matrix multiplication, transpose operations and their properties for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "15 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 9"
html: "../../../../offline/mathematics/matrices-determinants/matrix-algebra/index.html"
extracted: "2026-11-23"
---

> Master matrix addition, scalar multiplication, matrix multiplication, transpose operations and their properties for JEE Main & Advanced.

## The Hook: The Mathematics Behind Movie Transformations

> **★ Key point · Connect: How Pixar Animates Characters**
>
> When you watch **Toy Story** or **Spider-Man: Into the Spider-Verse**, every character movement is controlled by matrix operations!
>
> **Buzz Lightyear’s rotation?** Matrix multiplication.

> **Scaling a character bigger?** Scalar multiplication of matrices.

> **Moving across the screen?** Matrix addition.
>
> A simple character rotation by 45° uses:
>
> $$R_{45°} = \begin{bmatrix} \cos 45° & -\sin 45° \\ \sin 45° & \cos 45° \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix}$$
>
> Combining rotations? Multiply rotation matrices! That’s why **matrix multiplication is fundamental** — it combines transformations.
>
> **Real applications:** Game engines (Unity, Unreal), robot arm movements, GPS coordinate transformations, Google Search ranking algorithm (PageRank uses matrix powers!).
>
> **Why this matters for JEE:** Matrix operations appear in 4-5 questions in JEE Main and form the basis for solving systems of equations, eigenvalue problems, and coordinate geometry transformations in JEE Advanced.

---

## Interactive: Matrix Transformations Visualizer

See how a 2x2 matrix transforms the coordinate plane! Adjust the matrix values or use preset buttons to explore rotations, reflections, scaling, and shearing. Watch how the unit square and basis vectors transform in real-time.

> **◐ In simple terms · What to observe**
>
> - The **determinant** tells you the area scaling factor (negative = orientation flip)

> - **Eigenvectors** (dashed orange/cyan lines) are directions that only get scaled, not rotated

> - **Basis vectors** i’ (blue) and j’ (green) show where the original i-hat and j-hat land

> - The matrix columns [a, c] and [b, d] directly give you the transformed basis vectors!

---

## Prerequisites

Before diving into matrix algebra, you should be comfortable with:

- [Matrix Basics](../matrix-basics/index.md) — Matrix notation, types, and order
- Basic algebra — Distributive property, associative laws
- Ordered pairs and functions

---

## Matrix Addition and Subtraction

### Definition

Two matrices can be added or subtracted **if and only if** they have the **same order**.

For matrices $A = [a_{ij}]_{m \times n}$ and $B = [b_{ij}]_{m \times n}$:

$$\boxed{(A + B)_{ij} = a_{ij} + b_{ij}}$$

$$\boxed{(A - B)_{ij} = a_{ij} - b_{ij}}$$

**In words:** Add (or subtract) corresponding elements.

### Example

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}$$

$$A + B = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$$

$$A - B = \begin{bmatrix} 1-5 & 2-6 \\ 3-7 & 4-8 \end{bmatrix} = \begin{bmatrix} -4 & -4 \\ -4 & -4 \end{bmatrix}$$

### Properties of Addition

For matrices $A, B, C$ of the same order:

| Property | Formula | Name |
| --- | --- | --- |
| **Commutative** | $A + B = B + A$ | Order doesn’t matter |
| **Associative** | $(A + B) + C = A + (B + C)$ | Grouping doesn’t matter |
| **Additive Identity** | $A + O = O + A = A$ | Zero matrix is identity |
| **Additive Inverse** | $A + (-A) = O$ | Negative exists |

> **★ Key point · Memory Trick**
>
> Matrix addition behaves **exactly like** adding numbers!
>
> Just remember: **Same order required** — you can’t add a $2 \times 2$ to a $3 \times 3$.
>
> Think: You can’t add apples to a table of different dimensions!

---

## Scalar Multiplication

### Definition

Multiplying a matrix by a scalar (real number) $k$:

$$\boxed{(kA)_{ij} = k \cdot a_{ij}}$$

**In words:** Multiply every element by $k$.

### Example

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}, \quad 3A = \begin{bmatrix} 3 & 6 & 9 \\ 12 & 15 & 18 \end{bmatrix}$$

### Properties of Scalar Multiplication

For scalars $k, l$ and matrices $A, B$:

| Property | Formula |
| --- | --- |
| **Associative with scalars** | $k(lA) = (kl)A$ |
| **Distributive over matrix addition** | $k(A + B) = kA + kB$ |
| **Distributive over scalar addition** | $(k + l)A = kA + lA$ |
| **Identity** | $1 \cdot A = A$ |
| **Zero** | $0 \cdot A = O$ |
| **Negation** | $(-1)A = -A$ |

---

## Matrix Multiplication

### The Rule

Matrices $A$ and $B$ can be multiplied to get $AB$ **if and only if**:

$$\boxed{\text{Number of columns in } A = \text{Number of rows in } B}$$

If $A$ is $m \times n$ and $B$ is $n \times p$, then $AB$ is $m \times p$.

**Visual memory:**

$$A_{m \times \color{red}{n}} \cdot B_{\color{red}{n} \times p} = (AB)_{m \times p}$$

The middle indices must match!

### Definition

For $A = [a_{ij}]_{m \times n}$ and $B = [b_{jk}]_{n \times p}$:

$$\boxed{(AB)_{ik} = \sum_{j=1}^{n} a_{ij} \cdot b_{jk}}$$

**In words:** Element $(i,k)$ of $AB$ = (row $i$ of $A$) $\cdot$ (column $k$ of $B$)

### Step-by-Step Process

To find element $(i,k)$ in $AB$:

1. Take row $i$ of matrix $A$
2. Take column $k$ of matrix $B$
3. Multiply corresponding elements
4. Add all the products

### Example 1: Basic Multiplication

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}$$

**Find $AB$:**

$(AB)_{11}$ = Row 1 of $A$ $\cdot$ Column 1 of $B$ = $(1)(5) + (2)(7) = 5 + 14 = 19$

$(AB)_{12}$ = Row 1 of $A$ $\cdot$ Column 2 of $B$ = $(1)(6) + (2)(8) = 6 + 16 = 22$

$(AB)_{21}$ = Row 2 of $A$ $\cdot$ Column 1 of $B$ = $(3)(5) + (4)(7) = 15 + 28 = 43$

$(AB)_{22}$ = Row 2 of $A$ $\cdot$ Column 2 of $B$ = $(3)(6) + (4)(8) = 18 + 32 = 50$

$$AB = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$

### Example 2: Different Orders

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}_{2 \times 3}, \quad B = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}_{3 \times 1}$$

$AB$ is possible (columns of $A$ = 3, rows of $B$ = 3) ✓

Result will be $2 \times 1$:

$$AB = \begin{bmatrix} (1)(1) + (2)(2) + (3)(3) \\ (4)(1) + (5)(2) + (6)(3) \end{bmatrix} = \begin{bmatrix} 14 \\ 32 \end{bmatrix}$$

**Can we compute $BA$?**

$B$ is $3 \times 1$, $A$ is $2 \times 3$

Columns of $B$ = 1, Rows of $A$ = 2 → **NO**, $BA$ is not defined! ✗

> **⚠ Trap · Critical JEE Concept**
>
> **Matrix multiplication is NOT commutative!**
>
> $$AB \neq BA \text{ in general}$$
>
> In fact, even if $AB$ exists, $BA$ might not exist!
>
> **Example:** If $A$ is $2 \times 3$ and $B$ is $3 \times 4$:
>
> - $AB$ exists (and is $2 \times 4$)

> - $BA$ does NOT exist (columns of $B$ = 4, rows of $A$ = 2)
>
> **JEE Trap:** Never assume $AB = BA$! Always check orders first.

### Properties of Matrix Multiplication

For matrices with appropriate orders:

| Property | Formula | Name |
| --- | --- | --- |
| **NOT Commutative** | $AB \neq BA$ (generally) | Order matters! |
| **Associative** | $(AB)C = A(BC)$ | Grouping doesn’t matter |
| **Distributive (left)** | $A(B + C) = AB + AC$ | Left distribution |
| **Distributive (right)** | $(A + B)C = AC + BC$ | Right distribution |
| **Identity** | $AI = IA = A$ | Identity matrix |
| **Zero** | $AO = OA = O$ | Zero matrix |
| **Scalar** | $k(AB) = (kA)B = A(kB)$ | Scalar associativity |

### Special Cases Where $AB = BA$

Matrices **do commute** when:

1. One matrix is the identity: $AI = IA$
2. One matrix is a scalar matrix: $A(\lambda I) = (\lambda I)A$
3. Both are diagonal matrices (of same order)
4. Special matrix pairs (rare, must verify)

> **★ Key point · Memory Trick: Matrix Multiplication**
>
> **Think of it as “Row meets Column”**
>
> 1. Check if multiplication is possible: **middle numbers match**
>
>    - $A_{2 \times \color{red}{3}} \cdot B_{\color{red}{3} \times 4}$ ✓ → Result is $2 \times 4$

> 2. To find an element: **Row from first, Column from second**
>
>    - $(AB)_{23}$ = Row 2 of $A$ times Column 3 of $B$

> 3. **Order matters:** $AB \neq BA$ (unlike regular numbers!)
>
> **Mnemonic:** “**R**emember **C**ommuting **B**reaks” (RCB) — Row-Column-Breaks (no commutative property)

---

## Transpose of a Matrix

### Definition

The **transpose** of a matrix $A$, denoted $A^T$ (or $A'$), is obtained by **interchanging rows and columns**.

If $A = [a_{ij}]_{m \times n}$, then:

$$\boxed{A^T = [a_{ji}]_{n \times m}}$$

**In words:** Row $i$ of $A$ becomes column $i$ of $A^T$.

### Examples

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}_{2 \times 3} \Rightarrow A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}_{3 \times 2}$$

$$B = \begin{bmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{bmatrix} \Rightarrow B^T = \begin{bmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{bmatrix}$$

**Row matrix ↔ Column matrix:**

$$\begin{bmatrix} 1 & 2 & 3 \end{bmatrix}^T = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$$

### Properties of Transpose

| Property | Formula | Note |
| --- | --- | --- |
| **Double transpose** | $(A^T)^T = A$ | Transpose twice = original |
| **Addition** | $(A + B)^T = A^T + B^T$ | Distributes over addition |
| **Scalar multiplication** | $(kA)^T = kA^T$ | Scalar comes out |
| **Multiplication** | $(AB)^T = B^T A^T$ | **ORDER REVERSES!** |
| **Extended multiplication** | $(ABC)^T = C^T B^T A^T$ | Reverse order |

> **⚠ Trap · Super Important JEE Property!**
>
> $$(AB)^T = B^T A^T$$
>
> **NOT** $A^T B^T$! The order **reverses**!
>
> Think of it like taking off shoes and socks:
>
> - You put them on: Socks first, then shoes

> - You take them off: Shoes first, then socks (reverse order!)
>
> **Common JEE mistake:** Writing $(AB)^T = A^T B^T$ ✗

### Transpose and Matrix Types

| Matrix Type | Transpose Property |
| --- | --- |
| **Symmetric** | $A^T = A$ |
| **Skew-symmetric** | $A^T = -A$ |
| **Diagonal** | $D^T = D$ (always symmetric) |
| **Identity** | $I^T = I$ |
| **Orthogonal** | $A^T A = AA^T = I$ |

---

## Important Formulas and Results

### Symmetric and Skew-Symmetric Decomposition

**Every square matrix** can be uniquely expressed as:

$$\boxed{A = \frac{A + A^T}{2} + \frac{A - A^T}{2}}$$

where:

- $P = \frac{A + A^T}{2}$ is **symmetric** ($P^T = P$)
- $Q = \frac{A - A^T}{2}$ is **skew-symmetric** ($Q^T = -Q$)

**Proof:**

$$P^T = \left(\frac{A + A^T}{2}\right)^T = \frac{A^T + A}{2} = P$$

$$Q^T = \left(\frac{A - A^T}{2}\right)^T = \frac{A^T - A}{2} = -\frac{A - A^T}{2} = -Q$$

### Example

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$$

$$A^T = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}$$

$$P = \frac{1}{2}\begin{bmatrix} 2 & 5 \\ 5 & 8 \end{bmatrix} = \begin{bmatrix} 1 & 2.5 \\ 2.5 & 4 \end{bmatrix}$$

(Symmetric)

$$Q = \frac{1}{2}\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & -0.5 \\ 0.5 & 0 \end{bmatrix}$$

(Skew-symmetric)

Verify: $P + Q = A$ ✓

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Matrix Multiplication Order**
>
> **Wrong:** Assuming $AB = BA$
>
> **Right:** Always check! Matrix multiplication is **not commutative**.
>
> Even if both $AB$ and $BA$ exist, they’re usually different!
>
> **Example:**
>
> $$A = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}, B = \begin{bmatrix} 1 & 0 \\ 3 & 1 \end{bmatrix}$$

$$AB = \begin{bmatrix} 7 & 2 \\ 3 & 1 \end{bmatrix}, \quad BA = \begin{bmatrix} 1 & 2 \\ 3 & 7 \end{bmatrix}$$
>
> $AB \neq BA$ !

> **⚠ Trap #2: Transpose of Product**
>
> **Wrong:** $(AB)^T = A^T B^T$
>
> **Right:** $(AB)^T = B^T A^T$ (order reverses!)
>
> **JEE Example:** If $(AB)^T = BA$, what can you conclude?

> $B^T A^T = BA$
>
> This happens when $A^T = B$ and $B^T = A$, or special symmetric cases.

> **⚠ Trap #3: Order Compatibility**
>
> **Wrong:** Any two matrices can be multiplied
>
> **Right:** Check if multiplication is defined!
>
> For $AB$: Columns of $A$ must equal rows of $B$
>
> **Example:** Can you multiply $A_{3 \times 2}$ and $B_{4 \times 3}$?
>
> NO! Columns of $A$ = 2, Rows of $B$ = 4 → Not compatible ✗

> **⚠ Trap #4: Zero Product**
>
> **Wrong:** If $AB = O$, then $A = O$ or $B = O$
>
> **Right:** $AB = O$ does NOT imply either matrix is zero!
>
> **Counterexample:**
>
> $$A = \begin{bmatrix} 1 & 1 \\ 2 & 2 \end{bmatrix}, B = \begin{bmatrix} 1 & 1 \\ -1 & -1 \end{bmatrix}$$

$$AB = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$$
>
> but neither $A$ nor $B$ is zero!
>
> Matrix algebra doesn’t have the “zero product property” of real numbers!

> **⚠ Trap #5: Cancellation**
>
> **Wrong:** If $AB = AC$ and $A \neq O$, then $B = C$
>
> **Right:** You **cannot** cancel matrices like numbers!
>
> Cancellation requires $A$ to be **invertible** (non-singular).
>
> If $|A| \neq 0$, then $AB = AC \Rightarrow B = C$ ✓
>
> But if $|A| = 0$, cancellation fails!

---

## Power of a Matrix

For a **square matrix** $A$:

$$A^2 = A \cdot A, \quad A^3 = A \cdot A \cdot A, \quad A^n = \underbrace{A \cdot A \cdots A}_{n \text{ times}}$$

**Properties:**

| Formula | Condition |
| --- | --- |
| $A^m \cdot A^n = A^{m+n}$ | Always |
| $(A^m)^n = A^{mn}$ | Always |
| $A^m \cdot B^m = (AB)^m$ | Only if $AB = BA$ |

> **★ Key point · JEE Shortcut: Powers of Special Matrices**
>
> **Identity matrix:** $I^n = I$ for all $n$
>
> **Diagonal matrix:**
>
> $$D = \begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix} \Rightarrow D^n = \begin{bmatrix} a^n & 0 \\ 0 & b^n \end{bmatrix}$$
>
> **Nilpotent matrix:** $A^k = O$ for some positive integer $k$
>
> **Example:** $A = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}$, then $A^2 = O$
>
> **Idempotent matrix:** $A^2 = A$
>
> **Example:** Projection matrices

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Find $A + B$ if $A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & -2 \\ 3 & 0 \end{bmatrix}$.
>
> **Solution:**
>
> $$A + B = \begin{bmatrix} 2+1 & 3+(-2) \\ 1+3 & 4+0 \end{bmatrix} = \begin{bmatrix} 3 & 1 \\ 4 & 4 \end{bmatrix}$$
>
> **Answer:** $\begin{bmatrix} 3 & 1 \\ 4 & 4 \end{bmatrix}$

> **↗ Connection · Problem 1.2**
>
> If $A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$, find $A^T$.
>
> **Solution:**
>
> Interchange rows and columns:
>
> $$A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$$
>
> **Answer:** $\begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$

> **↗ Connection · Problem 1.3**
>
> Compute $AB$ if $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $B = \begin{bmatrix} 5 \\ 6 \end{bmatrix}$.
>
> **Solution:**
>
> Check: $A$ is $2 \times 2$, $B$ is $2 \times 1$ → $AB$ is $2 \times 1$ ✓
>
> $$AB = \begin{bmatrix} 1(5) + 2(6) \\ 3(5) + 4(6) \end{bmatrix} = \begin{bmatrix} 17 \\ 39 \end{bmatrix}$$
>
> **Answer:** $\begin{bmatrix} 17 \\ 39 \end{bmatrix}$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> If $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, verify that $(A^T)^T = A$.
>
> **Solution:**
>
> $$A^T = \begin{bmatrix} 1 & 3 \\ 2 & 4 \end{bmatrix}$$

$$(A^T)^T = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = A$$
>
> ✓
>
> **Verified!**

> **↗ Connection · Problem 2.2**
>
> Express $A = \begin{bmatrix} 2 & 3 \\ 4 & 5 \end{bmatrix}$ as the sum of a symmetric and skew-symmetric matrix.
>
> **Solution:**
>
> $$A^T = \begin{bmatrix} 2 & 4 \\ 3 & 5 \end{bmatrix}$$
>
> Symmetric part:
>
> $$P = \frac{A + A^T}{2} = \frac{1}{2}\begin{bmatrix} 4 & 7 \\ 7 & 10 \end{bmatrix} = \begin{bmatrix} 2 & 3.5 \\ 3.5 & 5 \end{bmatrix}$$
>
> Skew-symmetric part:
>
> $$Q = \frac{A - A^T}{2} = \frac{1}{2}\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & -0.5 \\ 0.5 & 0 \end{bmatrix}$$
>
> Verify: $P + Q = \begin{bmatrix} 2 & 3 \\ 4 & 5 \end{bmatrix} = A$ ✓
>
> **Answer:** $P = \begin{bmatrix} 2 & 3.5 \\ 3.5 & 5 \end{bmatrix}$, $Q = \begin{bmatrix} 0 & -0.5 \\ 0.5 & 0 \end{bmatrix}$

> **↗ Connection · Problem 2.3**
>
> If $A = \begin{bmatrix} 1 & 0 \\ -1 & 7 \end{bmatrix}$ and $B = \begin{bmatrix} 2 & 3 \\ 0 & 4 \end{bmatrix}$, find $(AB)^T$ and verify that $(AB)^T = B^T A^T$.
>
> **Solution:**
>
> $$AB = \begin{bmatrix} 2 & 3 \\ -2 & 25 \end{bmatrix}$$

$$(AB)^T = \begin{bmatrix} 2 & -2 \\ 3 & 25 \end{bmatrix}$$
>
> Now:
>
> $$B^T = \begin{bmatrix} 2 & 0 \\ 3 & 4 \end{bmatrix}, \quad A^T = \begin{bmatrix} 1 & -1 \\ 0 & 7 \end{bmatrix}$$

$$B^T A^T = \begin{bmatrix} 2 & -2 \\ 3 & 25 \end{bmatrix}$$
>
> $(AB)^T = B^T A^T$ ✓ **Verified!**

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $A$ is a skew-symmetric matrix of odd order, prove that $|A| = 0$.
>
> **Solution:**
>
> For skew-symmetric matrix: $A^T = -A$
>
> Taking determinant both sides:
>
> $$|A^T| = |-A|$$
>
> We know: $|A^T| = |A|$ and $|-A| = (-1)^n |A|$ where $n$ is the order.
>
> $$|A| = (-1)^n |A|$$
>
> Since $n$ is odd: $(-1)^n = -1$
>
> $$|A| = -|A|$$

$$2|A| = 0$$

$$|A| = 0$$
>
> **Proved!**

> **↗ Connection · Problem 3.2**
>
> Find matrix $A$ such that $A^2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ but $A \neq \pm I$.
>
> **Solution:**
>
> Try: $A = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
>
> $$A^2 = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$$
>
> ✓
>
> Also try: $A = \begin{bmatrix} 0 & -1 \\ -1 & 0 \end{bmatrix}$ works!
>
> **Answer:** Multiple solutions exist, e.g., $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ or $\begin{bmatrix} 0 & -1 \\ -1 & 0 \end{bmatrix}$

> **↗ Connection · Problem 3.3**
>
> If $A = \begin{bmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{bmatrix}$, find $A^T A$ and interpret.
>
> **Solution:**
>
> $$A^T = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$$

$$A^T A = \begin{bmatrix} \cos^2\theta + \sin^2\theta & -\cos\theta\sin\theta + \sin\theta\cos\theta \\ \sin\theta\cos\theta - \cos\theta\sin\theta & \sin^2\theta + \cos^2\theta \end{bmatrix}$$

$$= \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I$$
>
> **Interpretation:** $A$ is an **orthogonal matrix** (rotation matrix).
>
> Rotation matrices preserve length and angle, so $A^T A = I$.
>
> **Answer:** $A^T A = I$ (orthogonal matrix)

---

## Quick Revision Box

| Operation | Rule | Key Point |
| --- | --- | --- |
| Addition | $(A+B)_{ij} = a_{ij} + b_{ij}$ | Same order required |
| Scalar multiplication | $(kA)_{ij} = ka_{ij}$ | Multiply each element |
| Matrix multiplication | $(AB)_{ik} = \sum a_{ij}b_{jk}$ | Columns of $A$ = Rows of $B$ |
| Transpose | $(A^T)_{ji} = a_{ij}$ | Rows ↔ Columns |
| $(AB)^T$ | $B^T A^T$ | **Order reverses!** |
| Symmetric decomp | $A = \frac{A+A^T}{2} + \frac{A-A^T}{2}$ | Any square matrix |
| Commutative? | $AB \neq BA$ generally | **NOT commutative!** |

---

## Related Topics

### Within Matrices & Determinants Chapter

- [Matrix Basics](../matrix-basics/index.md) — Foundation of matrix types
- [Determinants Evaluation](../determinants-evaluation/index.md) — Finding determinant of products
- [Adjoint and Inverse](../adjoint-inverse/index.md) — Using transpose to find inverse
- [Linear Equations](../linear-equations/index.md) — Matrix form of equations

### Math Connections

- [Coordinate Geometry](../../coordinate-geometry/straight-lines/index.md) — Rotation and transformation matrices
- [Trigonometry](../../trigonometry/index.md) — Rotation matrices use trig functions
- [Vector Algebra](../../vector-algebra/index.md) — Dot product as matrix multiplication
- [Complex Numbers](../../complex-numbers/index.md) — Matrix representation of complex operations

### Real-World Applications

- Computer Graphics — Combining transformations via matrix multiplication
- Machine Learning — Gradient descent uses matrix operations
- Cryptography — Hill cipher uses matrix multiplication
- Economics — Leontief input-output model

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Addition/Subtraction:** Only possible for matrices of **same order**

> 2. **Scalar multiplication:** Multiply every element by the scalar

> 3. **Matrix multiplication:** Columns of first = Rows of second (middle numbers match!)

> 4. **NOT commutative:** $AB \neq BA$ in general — order matters!

> 5. **Transpose reverses order:** $(AB)^T = B^T A^T$ (not $A^T B^T$!)

> 6. **Associative:** $(AB)C = A(BC)$ — grouping doesn’t matter

> 7. **Symmetric decomposition:** Any square matrix = symmetric + skew-symmetric

> 8. **Key property:** $(A^T)^T = A$ (double transpose returns original)
>
> **“Master the transpose reversal rule — it’s in 80% of JEE Advanced matrix problems!”**
>
> **Exam Strategy:**
>
> - For multiplication: **Always check order compatibility first!**

> - For transpose of product: **Reverse the order!** $(ABC)^T = C^T B^T A^T$

> - Watch for non-commutative traps: Never assume $AB = BA$

---

**[Next: Determinants Evaluation →](../determinants-evaluation/index.md)**

From TestGuru · our mock-test platform

## You've read Matrix Algebra: Operations and Properties.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=matrices-determinants&tg_exam=jee-main&tg_page=%2Fmathematics%2Fmatrices-determinants%2Fmatrix-algebra%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-17

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/matrices-determinants/matrix-algebra/",this.page.identifier="/mathematics/matrices-determinants/matrix-algebra/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="matrixTransform" id="anim-matrixTransform-1795396421961667432"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-matrixTransform-1795396421961667432")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="matrixVisualizer" id="anim-matrixVisualizer-1795396421961970667"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-matrixVisualizer-1795396421961970667")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/matrices-determinants/matrix-algebra/](https://jeenotes.in/mathematics/matrices-determinants/matrix-algebra/) · raw HTML: `offline/mathematics/matrices-determinants/matrix-algebra/index.html`_
