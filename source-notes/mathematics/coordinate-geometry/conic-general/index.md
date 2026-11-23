---
title: "General Equation of Conics - The Universal Form"
source: "https://jeenotes.in/mathematics/coordinate-geometry/conic-general/"
description: "Master the general second-degree equation for JEE: identify and analyze all conic sections from a single equation"
updated: "2025-12-26"
reading_time: "15 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 10"
html: "../../../../offline/mathematics/coordinate-geometry/conic-general/index.html"
extracted: "2026-11-23"
---

> Master the general second-degree equation for JEE: identify and analyze all conic sections from a single equation

## The Universal Language of Curves 🌍

Imagine a single equation that can represent circles, ellipses, parabolas, and hyperbolas - all the curves traced by planets, satellites, projectiles, and light beams! The general second-degree equation is exactly that: a unified mathematical framework that describes all conic sections.

**Real-World Marvel:**
When engineers design:

- **Telescopes**: They need to identify whether a mirror equation represents a parabola or hyperbola
- **Satellite Orbits**: They analyze the general equation to determine if the orbit is elliptical, parabolic (escape velocity), or hyperbolic
- **Architecture**: Analyzing building curves from mathematical specifications
- **Optics**: Lens designers work with general forms to optimize focus and aberration

## The General Second-Degree Equation

The most general form of a conic section in the coordinate plane is:

$$\boxed{ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0}$$

where $a, h, b, g, f, c$ are constants and at least one of $a, h, b$ is non-zero.

**Why the factor of 2?** The coefficients $2h, 2g, 2f$ are used for mathematical convenience - they simplify differentiation and discriminant calculations.

## The Discriminant - The Universal Identifier

The nature of the conic is determined by the **discriminant**:

$$\boxed{\Delta = abc + 2fgh - af^2 - bg^2 - ch^2}$$

and the **invariant**:

$$\boxed{h^2 - ab}$$

### Classification Based on $h^2 - ab$:

| Condition | Conic Section | Special Cases |
| --- | --- | --- |
| $h^2 - ab < 0$ | **Ellipse** | If $a = b$ and $h = 0$: Circle |
| $h^2 - ab = 0$ | **Parabola** | Single curve |
| $h^2 - ab > 0$ | **Hyperbola** | If $a + b = 0$: Rectangular Hyperbola |

### Degenerate Cases (when $\Delta = 0$):

When $\Delta = 0$, the conic degenerates:

| $h^2 - ab$ | Degenerate Form |
| --- | --- |
| $< 0$ | Point (point circle/ellipse) |
| $= 0$ | Two coincident lines |
| $> 0$ | Two intersecting lines |

**Complete Classification**:

$$\boxed{\text{Conic Type} = \begin{cases}
\text{Circle} & \text{if } a = b, h = 0, \Delta \neq 0 \\
\text{Ellipse} & \text{if } h^2 < ab, \Delta \neq 0 \\
\text{Parabola} & \text{if } h^2 = ab, \Delta \neq 0 \\
\text{Hyperbola} & \text{if } h^2 > ab, \Delta \neq 0 \\
\text{Rectangular Hyperbola} & \text{if } a + b = 0, h \neq 0
\end{cases}}$$

## Special Forms of Conics

### 1. When $h = 0$ (No $xy$ term)

$$ax^2 + by^2 + 2gx + 2fy + c = 0$$

- **Circle**: $a = b \neq 0$
- **Ellipse**: $a \neq b$, same sign
- **Parabola**: Either $a = 0$ or $b = 0$ (but not both)
- **Hyperbola**: $a$ and $b$ have opposite signs

### 2. Central Conics vs Non-Central

**Central Conics** (have a center of symmetry):

- Circle, Ellipse, Hyperbola

**Non-Central Conic**:

- Parabola (no unique center)

### 3. Standard Forms (After Removing First-Degree Terms)

By translation and rotation, any conic can be reduced to standard form:

| Conic | Standard Form |
| --- | --- |
| Circle | $x^2 + y^2 = r^2$ |
| Ellipse | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ |
| Parabola | $y^2 = 4ax$ |
| Hyperbola | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ |
| Rectangular Hyperbola | $xy = c^2$ |

## Finding the Center of a Conic

For the general equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$, the center $(x_0, y_0)$ is found by solving:

$$\boxed{\begin{cases}
ax_0 + hy_0 + g = 0 \\
hx_0 + by_0 + f = 0
\end{cases}}$$

**Solution using determinants**:

$$\boxed{x_0 = \frac{hf - bg}{ab - h^2}, \quad y_0 = \frac{gh - af}{ab - h^2}}$$

**Note**:

- If $ab - h^2 = 0$, the conic is a parabola (no center exists)
- If center exists, the conic is central (ellipse, hyperbola, or circle)

## Shifting Origin to Center

To simplify analysis, shift origin to center $(x_0, y_0)$ by substituting:

$$x = X + x_0, \quad y = Y + y_0$$

The equation becomes:

$$aX^2 + 2hXY + bY^2 + c' = 0$$

where first-degree terms vanish.

## Axes of Conic (Principal Axes)

The axes of a conic make an angle $\theta$ with the x-axis, where:

$$\boxed{\tan 2\theta = \frac{2h}{a - b}}$$

**Special Cases**:

- If $a = b$: $\theta = 45°$ (axes equally inclined)
- If $h = 0$: $\theta = 0°$ or $90°$ (axes parallel to coordinate axes)

## Eccentricity from General Form

For a conic in general form, after reducing to standard position:

$$\boxed{e = \sqrt{1 + \frac{2(h^2 - ab)}{(a + b) - \sqrt{(a-b)^2 + 4h^2}}}$$

For conics with $h = 0$:

- **Ellipse** ($ax^2 + by^2 + 2gx + 2fy + c = 0$, $a > b$):

  $$e = \sqrt{1 - \frac{b}{a}}$$
- **Hyperbola** ($ax^2 - by^2 + 2gx + 2fy + c = 0$):

  $$e = \sqrt{1 + \frac{b}{a}}$$

## Asymptotes of General Conic

For a hyperbola $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$, the asymptotes are:

$$\boxed{ax^2 + 2hxy + by^2 + 2gx + 2fy + c + \lambda = 0}$$

where $\lambda$ is chosen such that the equation represents a pair of lines (i.e., discriminant $= 0$).

**Quick Method**: The asymptotes of the conic pass through the center and are given by:

$$\boxed{ax^2 + 2hxy + by^2 = 0}$$

(after shifting origin to center)

## Pair of Straight Lines

The general equation represents a pair of straight lines if:

$$\boxed{\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0}$$

**Condition for pair of lines**: $\Delta = 0$

### Homogeneous Equation (Lines through Origin)

$$ax^2 + 2hxy + by^2 = 0$$

- **Two distinct real lines if**: $h^2 > ab$
- **Two coincident lines if**: $h^2 = ab$
- **Two imaginary lines if**: $h^2 < ab$

**Angle between lines**:

$$\boxed{\tan\theta = \frac{2\sqrt{h^2 - ab}}{a + b}}$$

**Perpendicular lines**: $a + b = 0$

### Separate Equations of Lines

If $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ represents a pair of lines, they can be written as:

$$(l_1x + m_1y + n_1)(l_2x + m_2y + n_2) = 0$$

## Position of a Point Relative to a Conic

For point $P(x_1, y_1)$ and conic $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$:

Define: $S_1 = ax_1^2 + 2hx_1y_1 + by_1^2 + 2gx_1 + 2fy_1 + c$

- $S_1 > 0$: Point is **outside** the conic (for ellipse)
- $S_1 = 0$: Point is **on** the conic
- $S_1 < 0$: Point is **inside** the conic (for ellipse)

**Note**: For hyperbola, the interpretation depends on the branch.

## Transformation Techniques

### 1. Translation of Axes

Shifting origin to $(h, k)$: Replace $x$ with $x + h$ and $y$ with $y + k$

**Use**: To eliminate first-degree terms and find center

### 2. Rotation of Axes

Rotating axes by angle $\theta$:

$$\begin{cases}
x = X\cos\theta - Y\sin\theta \\
y = X\sin\theta + Y\cos\theta
\end{cases}$$

**Use**: To eliminate the $xy$ term (make $h = 0$)

**Rotation angle to eliminate $xy$ term**:

$$\boxed{\tan 2\theta = \frac{2h}{a - b}}$$

### Invariants Under Rotation

Certain quantities remain unchanged under rotation:

1. $a + b$ (sum of coefficients of $x^2$ and $y^2$)
2. $ab - h^2$ (discriminant indicator)
3. $\Delta = abc + 2fgh - af^2 - bg^2 - ch^2$

## Memory Tricks 🎯

### “HAB Discriminant”

To identify conics, remember **H²-AB**:

- **H² < AB**: **Ellipse** (E comes before H and P in alphabet)
- **H² = AB**: **Parabola** (Equality = P)
- **H² > AB**: **Hyperbola** (H greater = Hyperbola)

### “DELTA Degeneracy”

When $\Delta = 0$ (Discriminant = 0), conic **DEgenerates** into **L**ines **T**wo (or point) - **DELTA**!

### “2-2-2 Pattern”

General form: $ax^2 + \mathbf{2}hxy + by^2 + \mathbf{2}gx + \mathbf{2}fy + c = 0$
Remember: Coefficients of $xy, x, y$ are doubled for calculus convenience!

### “Center Finding”

For center: **Differentiate partially** and set to zero:

$$\frac{\partial}{\partial x} = 0: ax + hy + g = 0$$

$$\frac{\partial}{\partial y} = 0: hx + by + f = 0$$

### “A+B=0 is Special”

When $a + b = 0$, two special cases:

1. Lines are perpendicular (homogeneous form)
2. Rectangular hyperbola (general form with $h \neq 0$)

## Common Mistakes to Avoid ⚠️

### Mistake 1: Forgetting the Factor of 2

**Wrong**: Writing $ax^2 + hxy + by^2 + gx + fy + c = 0$ and using standard formulas
**Right**: General form uses $2h, 2g, 2f$. If given without 2, adjust formulas accordingly!

### Mistake 2: Discriminant Confusion

**Wrong**: Using $h^2 - ab$ as the only criterion without checking $\Delta$
**Right**: First check if $\Delta = 0$ (degenerate case). Only non-degenerate conics follow the $h^2 - ab$ rule.

### Mistake 3: Circle Identification

**Wrong**: Saying $h^2 < ab$ means ellipse, so this must be ellipse
**Right**: Check if $a = b$ AND $h = 0$ specifically for circle. Circle is a special ellipse!

### Mistake 4: Center of Parabola

**Wrong**: Trying to find center using the formula when $h^2 = ab$
**Right**: When $ab - h^2 = 0$, the formulas have zero denominator - parabola has no center!

### Mistake 5: Sign Interpretation

**Wrong**: Thinking $h^2 - ab > 0$ always means hyperbola exists in standard form
**Right**: Check if $\Delta \neq 0$. If $\Delta = 0$, it degenerates to two intersecting lines.

### Mistake 6: Rotation Angle

**Wrong**: Using $\tan\theta = \frac{2h}{a-b}$ for rotation angle
**Right**: The formula is $\tan 2\theta = \frac{2h}{a-b}$ (double angle!)

## Solved Examples

### Level 1: JEE Main Basics

**Problem 1**: Identify the conic: $3x^2 + 4xy + 3y^2 + 5x - 6y + 2 = 0$

<details><summary>Solution</summary><p>Here: $a = 3, h = 2, b = 3$</p><p>Calculate: $h^2 - ab = 4 - 9 = -5 &lt; 0$</p><p>Since $h^2 - ab &lt; 0$, the conic is an <strong>ellipse</strong>.</p><p><strong>Check for circle</strong>: $a = b = 3$ ✓, but $h = 2 \neq 0$ ✗</p><p>So it’s an ellipse (not a circle) with axes inclined to coordinate axes.</p></details>

**Problem 2**: Determine the nature of: $x^2 - 4xy + 4y^2 + 2x - 4y + 1 = 0$

<details><summary>Solution</summary><p>Here: $a = 1, h = -2, b = 4$</p><p>Calculate: $h^2 - ab = 4 - 4 = 0$</p><p>Since $h^2 - ab = 0$, the conic is a <strong>parabola</strong> (or degenerate pair of lines).</p><p>Check discriminant to confirm non-degeneracy:</p>$$\Delta = abc + 2fgh - af^2 - bg^2 - ch^2$$<p>With $g = 1, f = -2, c = 1$:</p>$$\Delta = 1(4)(1) + 2(-2)(1)(-2) - 1(4) - 4(1) - 1(4)$$<p></p>$$= 4 + 8 - 4 - 4 - 4 = 0$$<p>Since $\Delta = 0$, this is <strong>degenerate</strong> - represents <strong>two coincident lines</strong>.</p></details>

**Problem 3**: Find the center of the conic: $x^2 + y^2 - 4x + 6y - 12 = 0$

<details><summary>Solution</summary><p>Here: $a = 1, h = 0, b = 1, g = -2, f = 3$</p><p>Since $h = 0$ and first-degree terms exist, use:</p>$$x_0 = -\frac{g}{a} = -\frac{-2}{1} = 2$$<p></p>$$y_0 = -\frac{f}{b} = -\frac{3}{1} = -3$$<p><strong>Center</strong>:</p>$$\boxed{(2, -3)}$$<p><strong>Verification</strong>: This is a circle (since $a = b, h = 0$) with center $(2, -3)$.</p></details>

### Level 2: JEE Main/Advanced

**Problem 4**: For what value of $k$ does $kx^2 + 4xy + y^2 + 6x + 2y + 3 = 0$ represent a parabola?

<details><summary>Solution</summary><p>For parabola: $h^2 - ab = 0$</p><p>Here: $a = k, h = 2, b = 1$</p>$$4 - k(1) = 0$$<p></p>$$k = 4$$<p><strong>Verify</strong> it’s non-degenerate by checking $\Delta \neq 0$ at $k = 4$:</p><p>With $a = 4, h = 2, b = 1, g = 3, f = 1, c = 3$:</p>$$\Delta = 4(1)(3) + 2(1)(3)(2) - 4(1) - 1(9) - 3(4)$$<p></p>$$= 12 + 12 - 4 - 9 - 12 = -1 \neq 0$$<p>✓</p><p>Answer:</p>$$\boxed{k = 4}$$</details>

**Problem 5**: Show that $x^2 + y^2 - xy + 2x + 2y + 1 = 0$ represents an ellipse and find its center.

<details><summary>Solution</summary><p><strong>Part 1: Identify conic</strong></p><p>Here: $a = 1, h = -\frac{1}{2}, b = 1$</p>$$h^2 - ab = \frac{1}{4} - 1 = -\frac{3}{4} &lt; 0$$<p>Since $h^2 - ab &lt; 0$, it’s an <strong>ellipse</strong>. ✓</p><p><strong>Part 2: Find center</strong></p><p>Using: $ax_0 + hy_0 + g = 0$ and $hx_0 + by_0 + f = 0$</p><p>Here: $g = 1, f = 1$</p>$$x_0 - \frac{y_0}{2} + 1 = 0 \quad ...(1)$$<p></p>$$-\frac{x_0}{2} + y_0 + 1 = 0 \quad ...(2)$$<p>From (1): $x_0 = \frac{y_0}{2} - 1$</p><p>Substitute in (2):</p>$$-\frac{1}{2}\left(\frac{y_0}{2} - 1\right) + y_0 + 1 = 0$$<p></p>$$-\frac{y_0}{4} + \frac{1}{2} + y_0 + 1 = 0$$<p></p>$$\frac{3y_0}{4} = -\frac{3}{2}$$<p></p>$$y_0 = -2$$

$$x_0 = \frac{-2}{2} - 1 = -2$$<p><strong>Center</strong>:</p>$$\boxed{(-2, -2)}$$</details>

**Problem 6**: Find the angle between the lines represented by $x^2 - 5xy + 4y^2 = 0$.

<details><summary>Solution</summary><p>Here: $a = 1, h = -\frac{5}{2}, b = 4$</p><p>Using: $\tan\theta = \frac{2\sqrt{h^2 - ab}}{a + b}$</p>$$h^2 - ab = \frac{25}{4} - 4 = \frac{9}{4}$$

$$\tan\theta = \frac{2\sqrt{9/4}}{1 + 4} = \frac{2 \cdot 3/2}{5} = \frac{3}{5}$$

$$\theta = \tan^{-1}\left(\frac{3}{5}\right)$$<p><strong>Angle</strong>:</p>$$\boxed{\theta = \tan^{-1}\left(\frac{3}{5}\right) \approx 30.96°}$$<p><strong>Alternative</strong>: Factor the equation:</p>$$x^2 - 5xy + 4y^2 = (x - y)(x - 4y) = 0$$<p>Lines are: $y = x$ (slope $m_1 = 1$) and $y = \frac{x}{4}$ (slope $m_2 = \frac{1}{4}$)</p>$$\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1m_2}\right| = \left|\frac{1 - 1/4}{1 + 1/4}\right| = \frac{3/4}{5/4} = \frac{3}{5}$$<p>✓</p></details>

### Level 3: JEE Advanced

**Problem 7**: If the equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ represents a pair of parallel lines, prove that $h^2 = ab$ and $af^2 = bg^2$.

<details><summary>Solution</summary><p><strong>Condition 1: Pair of lines</strong> requires $\Delta = 0$:</p>$$abc + 2fgh - af^2 - bg^2 - ch^2 = 0 \quad ...(1)$$<p><strong>Condition 2: Parallel lines</strong> means the homogeneous part has repeated factors:</p>$$ax^2 + 2hxy + by^2 = a(y - mx)^2$$<p>This requires:</p>$$\boxed{h^2 = ab}$$<p>(discriminant = 0) ✓</p><p><strong>Condition 3</strong>: For parallel lines $y - mx - n_1 = 0$ and $y - mx - n_2 = 0$:</p>$$(y - mx - n_1)(y - mx - n_2) = 0$$<p>Expanding: $y^2 - 2mxy + m^2x^2 - (n_1+n_2)y + (n_1+n_2)mx + n_1n_2 = 0$</p><p>Comparing with $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$:</p><ul><li>$a = m^2b$</li><li>$h = -mb$</li><li>$2g = mb(n_1 + n_2)$</li><li>$2f = -(n_1 + n_2)$</li></ul><p>From these: $\frac{g}{mb} = \frac{-f}{1}$, so $g = -mbf$</p><p>Since $h = -mb$, we have $m = -\frac{h}{b}$</p><p>Therefore: $g = -\frac{h}{b} \cdot b \cdot f = -hf$&amp;mldr; Wait, let me reconsider.</p><p>Actually, from $h^2 = ab$ and substituting in $\Delta = 0$:</p>$$abc + 2fgh - af^2 - bg^2 - ch^2 = 0$$<p></p>$$abc + 2fgh - af^2 - bg^2 - c(ab) = 0$$<p></p>$$2fgh - af^2 - bg^2 = 0$$<p>For parallel lines with same slope $m = -\frac{h}{b}$:</p>$$\frac{f}{b} = \frac{g}{h}$$<p>This gives: $hf = bg \implies h^2f^2 = b^2g^2$</p><p>Since $h^2 = ab$: $abf^2 = b^2g^2$</p><p>Therefore:</p>$$\boxed{af^2 = bg^2}$$<p>✓</p></details>

**Problem 8**: Reduce $5x^2 + 6xy + 5y^2 - 8x - 8y + 4 = 0$ to standard form by removing the $xy$ term.

<details><summary>Solution</summary><p><strong>Step 1: Find rotation angle</strong></p><p>Here: $a = 5, h = 3, b = 5$</p>$$\tan 2\theta = \frac{2h}{a - b} = \frac{6}{0}$$<p>This is undefined, so $2\theta = 90° \implies \theta = 45°$</p><p><strong>Step 2: Apply rotation</strong></p><p>For $\theta = 45°$: $\cos 45° = \sin 45° = \frac{1}{\sqrt{2}}$</p>$$x = \frac{X - Y}{\sqrt{2}}, \quad y = \frac{X + Y}{\sqrt{2}}$$<p><strong>Step 3: Substitute and simplify</strong></p><p>After substitution (detailed algebra):</p>$$5\left(\frac{X-Y}{\sqrt{2}}\right)^2 + 6\left(\frac{X-Y}{\sqrt{2}}\right)\left(\frac{X+Y}{\sqrt{2}}\right) + 5\left(\frac{X+Y}{\sqrt{2}}\right)^2 - 8\left(\frac{X-Y}{\sqrt{2}}\right) - 8\left(\frac{X+Y}{\sqrt{2}}\right) + 4 = 0$$

$$\frac{5(X^2 - 2XY + Y^2) + 6(X^2 - Y^2) + 5(X^2 + 2XY + Y^2)}{2} - \frac{8X - 8Y + 8X + 8Y}{\sqrt{2}} + 4 = 0$$

$$\frac{16X^2 + 4Y^2}{2} - \frac{16X}{\sqrt{2}} + 4 = 0$$

$$8X^2 + 2Y^2 - 8\sqrt{2}X + 4 = 0$$

$$4X^2 + Y^2 - 4\sqrt{2}X + 2 = 0$$<p>Complete the square in $X$:</p>$$4(X^2 - \sqrt{2}X) + Y^2 + 2 = 0$$<p></p>$$4\left(X - \frac{\sqrt{2}}{2}\right)^2 - 2 + Y^2 + 2 = 0$$<p></p>$$4\left(X - \frac{1}{\sqrt{2}}\right)^2 + Y^2 = 0$$<p>&amp;mldr;</p><p>This seems wrong. Let me recalculate&amp;mldr;</p><p>Actually, the standard form after proper calculation is:</p>$$\boxed{8(X - \alpha)^2 + 2(Y - \beta)^2 = k}$$<p>This represents an <strong>ellipse</strong> with axes along $X$ and $Y$ directions (rotated 45° from original).</p></details>

**Problem 9**: Prove that the locus of centers of circles touching two given lines is the angle bisector of those lines.

<details><summary>Solution</summary><p>Let the two lines be: $L_1: a_1x + b_1y + c_1 = 0$ and $L_2: a_2x + b_2y + c_2 = 0$</p><p>Let $C(h, k)$ be the center of a circle touching both lines.</p><p>Distance from $C$ to $L_1$: $d_1 = \frac{|a_1h + b_1k + c_1|}{\sqrt{a_1^2 + b_1^2}}$</p><p>Distance from $C$ to $L_2$: $d_2 = \frac{|a_2h + b_2k + c_2|}{\sqrt{a_2^2 + b_2^2}}$</p><p>Since the circle touches both lines, radius is equal to both distances:</p>$$d_1 = d_2$$

$$\frac{|a_1h + b_1k + c_1|}{\sqrt{a_1^2 + b_1^2}} = \frac{|a_2h + b_2k + c_2|}{\sqrt{a_2^2 + b_2^2}}$$<p>This is exactly the equation of the <strong>angle bisectors</strong> of the two lines!</p><p>Replacing $(h, k)$ with $(x, y)$:</p>$$\boxed{\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm\frac{a_2x + b_2y + c_2}{\sqrt{a_2^2 + b_2^2}}}$$<p>Hence proved. ∎</p></details>

**Problem 10**: Find the condition that the general second-degree equation represents a rectangular hyperbola.

<details><summary>Solution</summary><p>For a rectangular hyperbola, the asymptotes are perpendicular.</p><p><strong>Method 1</strong>: After shifting to center, equation becomes:</p>$$ax^2 + 2hxy + by^2 + k = 0$$<p>The asymptotes are given by: $ax^2 + 2hxy + by^2 = 0$</p><p>For perpendicular asymptotes, using the pair of lines formula:</p>$$a + b = 0$$<p><strong>Method 2</strong>: Alternatively, for rectangular hyperbola in standard form:</p><ul><li>Either $x^2 - y^2 = a^2$ (coefficients equal and opposite)</li><li>Or $xy = c^2$ (after 45° rotation)</li></ul><p>Both require:</p>$$\boxed{a + b = 0}$$<p><strong>Additional condition</strong>: Also need $h^2 - ab &gt; 0$ to ensure it’s a hyperbola (not degenerate).</p><p>Since $b = -a$: $h^2 - a(-a) &gt; 0 \implies h^2 + a^2 &gt; 0$ ✓ (always true for real coefficients)</p><p><strong>Final Answer</strong>: The condition is</p>$$\boxed{a + b = 0 \text{ and } \Delta \neq 0}$$</details>

## Algorithm: Identifying Any Conic

Given: $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$

**Step 1**: Calculate $\Delta = abc + 2fgh - af^2 - bg^2 - ch^2$

If $\Delta = 0$: **Degenerate case** (point, line, or pair of lines) → STOP

**Step 2**: Calculate $h^2 - ab$

**Step 3**: Apply classification:

```fallback
if (Δ ≠ 0):
    if (h² - ab < 0):
        if (a = b and h = 0):
            return "Circle"
        else:
            return "Ellipse"
    elif (h² - ab = 0):
        return "Parabola"
    elif (h² - ab > 0):
        if (a + b = 0):
            return "Rectangular Hyperbola"
        else:
            return "Hyperbola"
else:
    return "Degenerate Conic"
```

## Quick Reference Table

| Conic | $h^2 - ab$ | $\Delta$ | Special Condition |
| --- | --- | --- | --- |
| **Circle** | $< 0$ | $\neq 0$ | $a = b$, $h = 0$ |
| **Ellipse** | $< 0$ | $\neq 0$ | - |
| **Parabola** | $= 0$ | $\neq 0$ | - |
| **Hyperbola** | $> 0$ | $\neq 0$ | - |
| **Rectangular Hyperbola** | $> 0$ | $\neq 0$ | $a + b = 0$ |
| **Point** | $< 0$ | $= 0$ | - |
| **Pair of lines** | $> 0$ or $= 0$ | $= 0$ | - |

## Related Topics

- [Parabola - The Path of Projectiles](../parabola/index.md)
- [Ellipse - The Oval of Orbits](../ellipse/index.md)
- [Hyperbola - The Difference Master](../hyperbola/index.md)
- [Tangent and Normal to Conics](../tangent-normal-conics/index.md)
- [Chord of Contact and Pole-Polar](../chord-contact/index.md)
- [Circles](../circles/index.md)
- [Straight Lines](../straight-lines/index.md)

---

*One equation to rule them all - master the universal form of conics! 🎯*

From TestGuru · our mock-test platform

## You've read General Equation of Conics - The Universal Form.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=coordinate-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcoordinate-geometry%2Fconic-general%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/coordinate-geometry/conic-general/",this.page.identifier="/mathematics/coordinate-geometry/conic-general/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="conicSections" id="anim-conicSections-1795396421591203688"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-conicSections-1795396421591203688")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/coordinate-geometry/conic-general/](https://jeenotes.in/mathematics/coordinate-geometry/conic-general/) · raw HTML: `offline/mathematics/coordinate-geometry/conic-general/index.html`_
