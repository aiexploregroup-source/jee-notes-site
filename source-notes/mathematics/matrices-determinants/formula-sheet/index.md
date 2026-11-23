---
title: "Matrices and Determinants Formula Sheet"
source: "https://jeenotes.in/mathematics/matrices-determinants/formula-sheet/"
description: "All key Matrices and Determinants formulas for JEE Main & Advanced: matrix operations, transpose, determinants, minors, cofactors, adjoint, inverse, Cramer's rule."
updated: "2026-11-22"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 9 of 9"
html: "../../../../offline/mathematics/matrices-determinants/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Matrices and Determinants formulas for JEE Main & Advanced: matrix operations, transpose, determinants, minors, cofactors, adjoint, inverse, Cramer's rule.

Every must-know result from the Matrices and Determinants chapter, grouped for fast last-minute revision. Everything here is pulled from the chapter topics — use it as your one-page reference before the exam.

## Matrix Basics

A matrix is a rectangular array of numbers. Element $a_{ij}$ sits in row $i$, column $j$ (remember: **R**ow then **C**olumn).

$$\boxed{\text{Order} = m \times n \quad (m \text{ rows} \times n \text{ columns})}$$

Compact notation: $A = [a_{ij}]_{m \times n}$

**Trace** (sum of diagonal elements of a square matrix):

$$\boxed{\text{tr}(A) = \sum_{i=1}^{n} a_{ii}}$$

**Equality of matrices:**

$$\boxed{A = B \iff [a_{ij}]_{m \times n} = [b_{ij}]_{m \times n}}$$

(Same order **and** all corresponding elements equal.)

**Memory hook:** $a_{ij}$ = “RC Cola” — Row first, Column second.

### Types of Matrices

| Type | Defining condition |
| --- | --- |
| Row matrix | Order $1 \times n$ |
| Column matrix | Order $m \times 1$ |
| Square matrix | Rows = columns ($n \times n$) |
| Diagonal | $a_{ij} = 0$ when $i \neq j$ |
| Scalar | Diagonal matrix with all diagonal elements equal |
| Identity $I_n$ | Diagonal $= 1$, rest $= 0$; $AI = IA = A$ |
| Null / zero $O$ | All elements $= 0$; $A + O = A$ |
| Upper triangular | $a_{ij} = 0$ when $i > j$ |
| Lower triangular | $a_{ij} = 0$ when $i < j$ |
| Symmetric | $A = A^T$, i.e. $a_{ij} = a_{ji}$ |
| Skew-symmetric | $A = -A^T$, i.e. $a_{ij} = -a_{ji}$ (diagonal must be $0$) |

> **★ Key point · High-yield distinction**
>
> **Symmetric** ($A = A^T$): diagonal can be anything.

> **Skew-symmetric** ($A = -A^T$): all diagonal elements are forced to $0$, since $a_{ii} = -a_{ii}$.

## Matrix Algebra

### Addition, Subtraction, Scalar Multiplication

Defined only for matrices of the **same order**:

$$\boxed{(A \pm B)_{ij} = a_{ij} \pm b_{ij}} \qquad \boxed{(kA)_{ij} = k\, a_{ij}}$$

**Addition** is commutative, associative, has identity $O$ and inverse $-A$.

**Scalar multiplication** properties: $k(lA) = (kl)A$, $\;k(A+B) = kA + kB$, $\;(k+l)A = kA + lA$, $\;1\cdot A = A$, $\;(-1)A = -A$.

### Matrix Multiplication

Possible only if **columns of $A$ = rows of $B$**. If $A$ is $m \times n$ and $B$ is $n \times p$, then $AB$ is $m \times p$.

$$\boxed{(AB)_{ik} = \sum_{j=1}^{n} a_{ij}\, b_{jk}}$$

| Property | Result |
| --- | --- |
| Commutative? | $AB \neq BA$ in general (**NOT** commutative) |
| Associative | $(AB)C = A(BC)$ |
| Distributive (left) | $A(B+C) = AB + AC$ |
| Distributive (right) | $(A+B)C = AC + BC$ |
| Identity | $AI = IA = A$ |
| Zero | $AO = OA = O$ |
| Scalar | $k(AB) = (kA)B = A(kB)$ |

> **★ Key point · Two classic JEE traps**
>
> 1. $AB = O$ does **not** imply $A = O$ or $B = O$ (no zero-product property).

> 2. $AB = AC$ does **not** imply $B = C$ unless $A$ is invertible ($|A| \neq 0$).

### Powers of a Matrix

For a square matrix: $A^n = \underbrace{A \cdot A \cdots A}_{n \text{ times}}$

| Result | Condition |
| --- | --- |
| $A^m A^n = A^{m+n}$ | always |
| $(A^m)^n = A^{mn}$ | always |
| $A^m B^m = (AB)^m$ | only if $AB = BA$ |
| $I^n = I$ | always |
| $D^n = \text{diag}(a^n, b^n, \dots)$ | diagonal $D$ |

**Nilpotent:** $A^k = O$ for some $k$. **Idempotent:** $A^2 = A$. **Involutory:** $A^2 = I$.

### Transpose

$$\boxed{A^T = [a_{ji}]_{n \times m}}$$

| Property | Result |
| --- | --- |
| Double transpose | $(A^T)^T = A$ |
| Addition | $(A+B)^T = A^T + B^T$ |
| Scalar | $(kA)^T = kA^T$ |
| Product (order reverses) | $(AB)^T = B^T A^T$ |
| Extended | $(ABC)^T = C^T B^T A^T$ |

**Orthogonal matrix:** $A^T A = AA^T = I$ (so $A^{-1} = A^T$).

### Symmetric / Skew-Symmetric Decomposition

Every square matrix splits **uniquely** into a symmetric and a skew-symmetric part:

$$\boxed{A = \underbrace{\frac{A + A^T}{2}}_{\text{symmetric}} + \underbrace{\frac{A - A^T}{2}}_{\text{skew-symmetric}}}$$

## Determinants: Evaluation

Determinant is a **scalar** defined only for square matrices; denoted $|A|$ or $\det(A)$.

**2×2:**

$$\boxed{\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc}$$

**3×3 (expansion along Row 1):**

$$\boxed{\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = a_1(b_2c_3 - b_3c_2) - b_1(a_2c_3 - a_3c_2) + c_1(a_2b_3 - a_3b_2)}$$

**3×3 (Sarrus rule):** sum of three “down-right” diagonal products minus three “down-left” anti-diagonal products.

$$|A| = (a_1 b_2 c_3 + b_1 c_2 a_3 + c_1 a_2 b_3) - (c_1 b_2 a_3 + a_1 c_2 b_3 + b_1 a_2 c_3)$$

> **★ Key point · Sarrus is 3×3 only**
>
> Sarrus rule works **only** for $3 \times 3$. For $n \geq 4$ use cofactor expansion or row reduction.

### Special / Instant Determinants

| Matrix | Determinant |
| --- | --- |
| Diagonal | Product of diagonal elements |
| Triangular (upper/lower) | Product of diagonal elements |
| Identity | $\|I_n\| = 1$ |
| Zero matrix | $\|O\| = 0$ |
| Any zero row or column | $\|A\| = 0$ |
| Two identical rows/columns | $\|A\| = 0$ |
| Proportional rows/columns | $\|A\| = 0$ |

## Minors and Cofactors

**Minor** $M_{ij}$ = determinant of submatrix after deleting row $i$ and column $j$.

**Cofactor:**

$$\boxed{C_{ij} = (-1)^{i+j} M_{ij}}$$

Sign pattern (checkerboard, $+$ at $(1,1)$):

$$\begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix}$$

**Cofactor expansion** — row (fix row $i$, sum over $j$):

$$\boxed{|A| = \sum_{j=1}^{n} a_{ij}\, C_{ij}}$$

Column (fix column $j$, sum over $i$):

$$\boxed{|A| = \sum_{i=1}^{n} a_{ij}\, C_{ij}}$$

**Cross-row vanishing property** (key for adjoint):

$$\boxed{\sum_{j=1}^{n} a_{ij}\, C_{kj} = 0 \quad (i \neq k)}$$

> **★ Key point · Smart expansion**
>
> Always expand along the row or column with the **most zeros** — every zero kills one minor calculation.

## Properties of Determinants

| # | Property | Formula |
| --- | --- | --- |
| 1 | Transpose | $\|A^T\| = \|A\|$ |
| 2 | Row/column interchange | $R_i \leftrightarrow R_j \Rightarrow \|A\| \to -\|A\|$ |
| 3 | Identical rows/columns | $\|A\| = 0$ |
| 4 | Proportional rows/columns | $R_i = kR_j \Rightarrow \|A\| = 0$ |
| 5 | Zero row/column | $\|A\| = 0$ |
| 6 | Scale one row by $k$ | $\|A\| \to k\|A\|$ |
| 7 | Add multiple of a row | $R_i \to R_i + kR_j \Rightarrow \|A\|$ unchanged |
| 8 | Product | $\|AB\| = \|A\|\,\|B\|$ |
| 9 | Identity / zero | $\|I\| = 1,\;\; \|O\| = 0$ |
| 10 | Inverse | $\|A^{-1}\| = \dfrac{1}{\|A\|}$ |
| 11 | Adjoint | $\|\text{adj}(A)\| = \|A\|^{\,n-1}$ |

Consequences of the product rule:

$$\boxed{|A^n| = |A|^n} \qquad \boxed{|kA| = k^n |A| \;\;(n \times n)}$$

> **★ Key point · The most-used identity**
>
> $|kA| = k^n|A|$ for an $n \times n$ matrix — **not** just $k|A|$. E.g. for $3 \times 3$, $|3A| = 27|A|$.

### Standard Determinant Patterns

**Vandermonde:**

$$\boxed{\begin{vmatrix} 1 & 1 & 1 \\ a & b & c \\ a^2 & b^2 & c^2 \end{vmatrix} = (b-a)(c-a)(c-b)}$$

General $n \times n$ Vandermonde: $\displaystyle \prod_{1 \le i < j \le n} (a_j - a_i)$

**Cyclic determinant:**

$$\begin{vmatrix} a & b & c \\ c & a & b \\ b & c & a \end{vmatrix} = -(a^3 + b^3 + c^3 - 3abc)$$

$$= -(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$$

**$1+x$ pattern:**

$$\begin{vmatrix} 1+a & 1 & 1 \\ 1 & 1+b & 1 \\ 1 & 1 & 1+c \end{vmatrix} = abc + ab + bc + ca$$

$$\begin{vmatrix} 1+x & 1 & 1 \\ 1 & 1+x & 1 \\ 1 & 1 & 1+x \end{vmatrix} = x^2(x+3)$$

> **◐ Note on the cyclic determinant**
>
> The chapter writes the cofactor-expanded value of $\begin{vmatrix} a & b & c \\ c & a & b \\ b & c & a \end{vmatrix}$ as $a^3+b^3+c^3-3abc$. Expanding the standard cyclic determinant directly gives $-(a^3+b^3+c^3-3abc) = 3abc - a^3 - b^3 - c^3$; sign depends on the row arrangement, so verify the orientation in the problem before applying.

## Adjoint and Inverse

**Singular vs non-singular:**

$$\boxed{A^{-1} \text{ exists} \iff |A| \neq 0 \;(\text{non-singular})}$$

**Adjoint** = transpose of the cofactor matrix:

$$\boxed{\text{adj}(A) = [C_{ij}]^T}$$

**2×2 shortcut** (swap diagonal, negate off-diagonal):

$$\boxed{\text{adj}\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}}$$

**Inverse formula:**

$$\boxed{A^{-1} = \frac{1}{|A|}\,\text{adj}(A)}$$

**2×2 inverse:**

$$\boxed{\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}}$$

### Adjoint Properties ($n \times n$)

| Property | Formula |
| --- | --- |
| Magic product | $A\cdot\text{adj}(A) = \text{adj}(A)\cdot A = \|A\|\, I$ |
| Determinant of adjoint | $\|\text{adj}(A)\| = \|A\|^{\,n-1}$ |
| Adjoint of transpose | $\text{adj}(A^T) = [\text{adj}(A)]^T$ |
| Adjoint of product | $\text{adj}(AB) = \text{adj}(B)\cdot\text{adj}(A)$ |
| Adjoint of adjoint | $\text{adj}(\text{adj}(A)) = \|A\|^{\,n-2} A$ |
| Adjoint of scalar multiple | $\text{adj}(kA) = k^{\,n-1}\text{adj}(A)$ |

### Inverse Properties

| Property | Formula |
| --- | --- |
| Inverse of inverse | $(A^{-1})^{-1} = A$ |
| Inverse of product (reverses) | $(AB)^{-1} = B^{-1}A^{-1}$ |
| Inverse of transpose | $(A^T)^{-1} = (A^{-1})^T$ |
| Determinant of inverse | $\|A^{-1}\| = \dfrac{1}{\|A\|}$ |
| Inverse of scalar multiple | $(kA)^{-1} = \dfrac{1}{k}A^{-1}$ |
| Identity | $I^{-1} = I$ |
| Diagonal matrix | reciprocal of each diagonal element |
| Orthogonal matrix | $A^{-1} = A^T$ |
| Involutory matrix | $A^{-1} = A$ (since $A^2 = I$) |

> **★ Key point · TIA reverses order**
>
> **T**ranspose, **I**nverse, **A**djoint all reverse the order of a product:

> $(AB)^T = B^T A^T$, $\;(AB)^{-1} = B^{-1}A^{-1}$, $\;\text{adj}(AB) = \text{adj}(B)\,\text{adj}(A)$.

> There is **no** simple formula for $(A+B)^{-1}$.

## Linear Equations

Matrix form of a system: $\boxed{AX = B}$ ($A$ = coefficient matrix, $X$ = variables, $B$ = constants).

**Matrix method** (when $|A| \neq 0$):

$$\boxed{X = A^{-1}B}$$

**Cramer’s rule** (when $D = |A| \neq 0$):

$$\boxed{x_i = \frac{D_i}{D}}$$

where $D_i$ replaces the $i$-th column of $A$ with $B$. For 3 variables:

$$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}, \quad z = \frac{D_z}{D}$$

### Consistency of a Square System $AX = B$

| Condition | Nature | Solutions |
| --- | --- | --- |
| $\|A\| \neq 0$ | Consistent | Unique solution |
| $\|A\| = 0,\;(\text{adj }A)B \neq O$ | Inconsistent | No solution |
| $\|A\| = 0,\;(\text{adj }A)B = O$ | Consistent | Infinitely many solutions |

### Homogeneous System $AX = O$

- Always has the **trivial solution** $X = O$.
- **Non-trivial** solutions exist $\iff |A| = 0$ (then infinitely many).

> **★ Key point · First move, every system**
>
> Compute $|A|$ first. If $|A| \neq 0$ you are done — unique solution. Only if $|A| = 0$ do you need the $(\text{adj }A)B$ check.

## Geometry Application

**Area of a triangle** with vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:

$$\boxed{\text{Area} = \frac{1}{2}\left|\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}\right|}$$

If this determinant is $0$, the three points are **collinear**.

## Related Topics

- [Matrix Basics](../matrix-basics/index.md)
- [Matrix Algebra](../matrix-algebra/index.md)
- [Determinants Evaluation](../determinants-evaluation/index.md)
- [Minors and Cofactors](../minors-cofactors/index.md)
- [Properties of Determinants](../properties-determinants/index.md)
- [Adjoint and Inverse](../adjoint-inverse/index.md)
- [Linear Equations](../linear-equations/index.md)

From TestGuru · our mock-test platform

## You've read Matrices and Determinants Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=matrices-determinants&tg_exam=jee-main&tg_page=%2Fmathematics%2Fmatrices-determinants%2Fformula-sheet%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/matrices-determinants/formula-sheet/",this.page.identifier="/mathematics/matrices-determinants/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/mathematics/matrices-determinants/formula-sheet/](https://jeenotes.in/mathematics/matrices-determinants/formula-sheet/) · raw HTML: `offline/mathematics/matrices-determinants/formula-sheet/index.html`_
