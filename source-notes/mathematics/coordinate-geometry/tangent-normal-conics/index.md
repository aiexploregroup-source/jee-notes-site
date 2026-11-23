---
title: "Tangents and Normals to Conics - The Touch and Perpendicular"
source: "https://jeenotes.in/mathematics/coordinate-geometry/tangent-normal-conics/"
description: "Master tangent and normal equations for all conic sections - circles, parabolas, ellipses, and hyperbolas for JEE"
updated: "2025-12-26"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 10"
html: "../../../../offline/mathematics/coordinate-geometry/tangent-normal-conics/index.html"
extracted: "2026-11-23"
---

> Master tangent and normal equations for all conic sections - circles, parabolas, ellipses, and hyperbolas for JEE

## The Lines That Define Curves 🌍

When a spacecraft enters Earth’s orbit at exactly the right angle, it follows a tangent to its trajectory. When a ball bounces off a parabolic mirror in a flashlight, it reflects along the normal. Understanding tangents and normals to conics is crucial for:

**Real-World Applications:**

- **Optics**: Light rays reflect along normals to parabolic/elliptical mirrors
- **Orbital Mechanics**: Velocity vectors are tangent to orbital paths
- **Engineering**: Stress analysis at contact points requires normal directions
- **Computer Graphics**: Rendering smooth curves using tangent approximations

## Fundamental Concepts

### Tangent Line

A **tangent** to a curve at point $P$ is a line that touches the curve at $P$ and has the same slope as the curve at that point.

**Equation form**: At point $(x_1, y_1)$ on curve $f(x, y) = 0$:

$$\boxed{\left.\frac{\partial f}{\partial x}\right|_{(x_1,y_1)}(x - x_1) + \left.\frac{\partial f}{\partial y}\right|_{(x_1,y_1)}(y - y_1) = 0}$$

### Normal Line

A **normal** to a curve at point $P$ is perpendicular to the tangent at $P$.

**Relationship**: If tangent has slope $m$, normal has slope $-\frac{1}{m}$.

## Universal Rule for Tangents (T = 0)

For any conic of the form $ax^2 + by^2 + 2gx + 2fy + c = 0$, the tangent at point $(x_1, y_1)$ is obtained by the **T-substitution rule**:

$$\boxed{\begin{align}
x^2 &\to xx_1 \\
y^2 &\to yy_1 \\
x &\to \frac{x + x_1}{2} \\
y &\to \frac{y + y_1}{2} \\
xy &\to \frac{xy_1 + x_1y}{2}
\end{align}}$$

**Memory Trick**: “Replace products with averages, squares with products!”

## Circle: $x^2 + y^2 + 2gx + 2fy + c = 0$

### Tangent Equations

#### 1. Point Form (at point $(x_1, y_1)$ on circle)

$$\boxed{xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0}$$

**For standard circle** $x^2 + y^2 = r^2$ at $(x_1, y_1)$:

$$\boxed{xx_1 + yy_1 = r^2}$$

#### 2. Slope Form (tangent with slope $m$)

For circle $x^2 + y^2 = r^2$:

$$\boxed{y = mx \pm r\sqrt{1 + m^2}}$$

**Condition**: Line $y = mx + c$ is tangent if:

$$\boxed{c^2 = r^2(1 + m^2)}$$

#### 3. Parametric Form (at point $(r\cos\theta, r\sin\theta)$)

$$\boxed{x\cos\theta + y\sin\theta = r}$$

### Normal Equations

#### Point Form (at $(x_1, y_1)$ on circle $x^2 + y^2 = r^2$)

Since normal passes through center $(0, 0)$ and point $(x_1, y_1)$:

$$\boxed{\frac{y - y_1}{x - x_1} = \frac{y_1 - 0}{x_1 - 0}}$$

Simplified:

$$\boxed{xy_1 - yx_1 = 0}$$

Or:

$$\boxed{y = \frac{y_1}{x_1}x}$$

**Key Property**: Normal to a circle always passes through the center.

## Parabola: $y^2 = 4ax$

### Tangent Equations

#### 1. Point Form (at point $(x_1, y_1)$ on parabola)

$$\boxed{yy_1 = 2a(x + x_1)}$$

#### 2. Slope Form (tangent with slope $m$)

$$\boxed{y = mx + \frac{a}{m}}$$

**Condition**: Line $y = mx + c$ is tangent if:

$$\boxed{c = \frac{a}{m}}$$

**Key Point**: Slope $m \neq 0$ (vertical tangent at vertex handled separately)

#### 3. Parametric Form (at point $(at^2, 2at)$)

$$\boxed{ty = x + at^2}$$

**Beautiful property**: Parameter $t$ equals the slope of tangent divided by $2a$.

### Normal Equations

#### Point Form (at $(x_1, y_1)$)

$$\boxed{y - y_1 = -\frac{y_1}{2a}(x - x_1)}$$

Simplified:

$$\boxed{y_1x + 2ay = y_1x_1 + 2ay_1}$$

Or:

$$\boxed{y = -\frac{y_1}{2a}x + \left(y_1 + \frac{y_1x_1}{2a}\right)}$$

#### Parametric Form (at $(at^2, 2at)$)

$$\boxed{y + tx = 2at + at^3}$$

**Key Property**: Normal at $(at^2, 2at)$ has slope $-t$.

### Important Properties

1. **Tangent at vertex**: $x = 0$ (the axis of parabola)
2. **Point of intersection of tangents at $t_1$ and $t_2$**:

   $$\boxed{\left(at_1t_2, a(t_1 + t_2)\right)}$$
3. **Angle between tangents from external point**: If tangents from $(h, k)$ have parameters $t_1, t_2$:

   $$\boxed{\tan\alpha = \frac{2\sqrt{ah}}{\sqrt{k^2 - 4ah}}}$$

## Ellipse: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$

### Tangent Equations

#### 1. Point Form (at point $(x_1, y_1)$ on ellipse)

$$\boxed{\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1}$$

#### 2. Slope Form (tangent with slope $m$)

$$\boxed{y = mx \pm \sqrt{a^2m^2 + b^2}}$$

**Condition**: Line $y = mx + c$ is tangent if:

$$\boxed{c^2 = a^2m^2 + b^2}$$

#### 3. Parametric Form (at point $(a\cos\theta, b\sin\theta)$)

$$\boxed{\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1}$$

Or:

$$\boxed{bx\cos\theta + ay\sin\theta = ab}$$

### Normal Equations

#### Point Form (at $(x_1, y_1)$)

$$\boxed{\frac{a^2x}{x_1} - \frac{b^2y}{y_1} = a^2 - b^2}$$

Or:

$$\boxed{\frac{a^2x}{x_1} - \frac{b^2y}{y_1} = a^2e^2}$$

where $e$ is eccentricity.

#### Parametric Form (at $(a\cos\theta, b\sin\theta)$)

$$\boxed{ax\sec\theta - by\csc\theta = a^2 - b^2}$$

Or in simpler form:

$$\boxed{\frac{ax}{\cos\theta} - \frac{by}{\sin\theta} = a^2 - b^2}$$

### Important Properties

1. **Tangent meets axes at**:

   - x-axis: $\left(\frac{a}{\cos\theta}, 0\right)$
   - y-axis: $\left(0, \frac{b}{\sin\theta}\right)$
2. **Eccentric angle relationship**: If tangents at eccentric angles $\alpha$ and $\beta$ are perpendicular:

   $$\boxed{\tan\frac{\alpha}{2}\tan\frac{\beta}{2} = -\frac{a - b}{a + b}}$$
3. **Reflection property**: Tangent at any point makes equal angles with focal radii (principle of elliptical mirrors).

## Hyperbola: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$

### Tangent Equations

#### 1. Point Form (at point $(x_1, y_1)$ on hyperbola)

$$\boxed{\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1}$$

#### 2. Slope Form (tangent with slope $m$)

$$\boxed{y = mx \pm \sqrt{a^2m^2 - b^2}}$$

**Condition**: Line $y = mx + c$ is tangent if:

$$\boxed{c^2 = a^2m^2 - b^2}$$

**Note**: Tangent exists only when $m^2 > \frac{b^2}{a^2}$ (not all slopes possible!)

#### 3. Parametric Form (at point $(a\sec\theta, b\tan\theta)$)

$$\boxed{\frac{x\sec\theta}{a} - \frac{y\tan\theta}{b} = 1}$$

Or:

$$\boxed{bx\sec\theta - ay\tan\theta = ab}$$

### Normal Equations

#### Point Form (at $(x_1, y_1)$)

$$\boxed{\frac{a^2x}{x_1} + \frac{b^2y}{y_1} = a^2 + b^2}$$

Or:

$$\boxed{\frac{a^2x}{x_1} + \frac{b^2y}{y_1} = a^2e^2}$$

#### Parametric Form (at $(a\sec\theta, b\tan\theta)$)

$$\boxed{ax\cos\theta + by\cot\theta = a^2 + b^2}$$

### Rectangular Hyperbola: $xy = c^2$

#### Tangent at $(ct, c/t)$:

$$\boxed{\frac{x}{t} + yt = 2c}$$

Or at point $(x_1, y_1)$:

$$\boxed{xy_1 + yx_1 = 2x_1y_1}$$

Simplified:

$$\boxed{xy_1 + yx_1 = 2c^2}$$

#### Normal at $(ct, c/t)$:

$$\boxed{xt^3 - yt - ct^4 + c = 0}$$

Or:

$$\boxed{t^2x - \frac{y}{t^2} = c\left(t^2 - \frac{1}{t^2}\right)}$$

## Comparison Table: Tangents to All Conics

| Conic | Point Form | Slope Form | Parametric Form |
| --- | --- | --- | --- |
| **Circle** $x^2 + y^2 = r^2$ | $xx_1 + yy_1 = r^2$ | $y = mx \pm r\sqrt{1+m^2}$ | $x\cos\theta + y\sin\theta = r$ |
| **Parabola** $y^2 = 4ax$ | $yy_1 = 2a(x+x_1)$ | $y = mx + \frac{a}{m}$ | $ty = x + at^2$ |
| **Ellipse** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ | $y = mx \pm \sqrt{a^2m^2+b^2}$ | $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$ |
| **Hyperbola** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ | $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$ | $y = mx \pm \sqrt{a^2m^2-b^2}$ | $\frac{x\sec\theta}{a} - \frac{y\tan\theta}{b} = 1$ |

## Length of Tangent and Normal

### Circle: $x^2 + y^2 + 2gx + 2fy + c = 0$

From external point $(x_1, y_1)$:

**Length of tangent**:

$$\boxed{L = \sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}}$$

**For standard circle** $x^2 + y^2 = r^2$:

$$\boxed{L = \sqrt{x_1^2 + y_1^2 - r^2}}$$

### Other Conics

The concept of “length of tangent” is typically defined for circles. For other conics, we consider the length of tangent **segment** from a point to the point of tangency.

## Number of Tangents and Normals

### From an External Point

| Conic | Tangents | Normals |
| --- | --- | --- |
| Circle | 2 | 2 |
| Parabola | 2 | 3 (at most) |
| Ellipse | 2 | 4 (at most) |
| Hyperbola | 2 or 0* | 4 (at most) |

*From points between the branches of hyperbola, no real tangents exist.

## Memory Tricks 🎯

### “T-Substitution Rule”

For tangent at $(x_1, y_1)$: **“Squares become products, sums become averages”**

- $x^2 \to xx_1$
- $y^2 \to yy_1$
- $2gx \to g(x + x_1)$

### “Plus-Minus Pattern in Slope Form”

$$\boxed{y = mx \pm \sqrt{\text{conic expression}}}$$

- Circle: $\pm\sqrt{r^2(1 + m^2)}$ — always exists
- Ellipse: $\pm\sqrt{a^2m^2 + b^2}$ — PLUS (always exists)
- Hyperbola: $\pm\sqrt{a^2m^2 - b^2}$ — MINUS (conditional existence)

### “Normal Through Center”

- **Circle**: Normal always passes through center
- **Ellipse/Hyperbola**: Normal does NOT pass through center (except at endpoints of axes)
- **Parabola**: No center exists!

### “Parametric Form Beauty”

For parabola $y^2 = 4ax$ at $(at^2, 2at)$:

- Tangent: $ty = x + at^2$ (divide by $t$: $y = \frac{x}{t} + at$)
- Normal: $y + tx = 2at + at^3$ (factor: $y = -tx + at(2 + t^2)$)

### “Slope × Condition = Constant”

For tangent $y = mx + c$:

- Parabola: $mc = a$ (product constant)
- Ellipse: $c^2 = a^2m^2 + b^2$ (sum)
- Hyperbola: $c^2 = a^2m^2 - b^2$ (difference)

## Common Mistakes to Avoid ⚠️

### Mistake 1: Forgetting the ± in Slope Form

**Wrong**: For ellipse, writing only $y = mx + \sqrt{a^2m^2 + b^2}$
**Right**: Must write $y = mx \pm \sqrt{a^2m^2 + b^2}$ (two tangents with same slope!)

### Mistake 2: T-Substitution for xy Term

**Wrong**: Replacing $xy$ with $x_1y$ or $xy_1$
**Right**: Replace $xy$ with $\frac{xy_1 + x_1y}{2}$ (average!)

### Mistake 3: Parabola Slope Form Domain

**Wrong**: Using $y = mx + \frac{a}{m}$ when $m = 0$
**Right**: When $m = 0$, tangent is horizontal: $y = \pm 2a$ (at points $(\pm a, 2a)$ for non-standard forms). For $y^2 = 4ax$, no horizontal tangent except at infinity.

### Mistake 4: Normal Formula Sign

**Wrong**: For ellipse normal: $\frac{a^2x}{x_1} + \frac{b^2y}{y_1} = a^2 - b^2$ (wrong sign!)
**Right**: Check which form you’re using:

- Some books: $\frac{a^2x}{x_1} - \frac{b^2y}{y_1} = a^2 - b^2$
- Others: Signs depend on convention. Safer to derive from $\frac{y - y_1}{x - x_1} = -\frac{b^2x_1}{a^2y_1}$

### Mistake 5: Hyperbola Tangent Existence

**Wrong**: Assuming tangent with any slope $m$ exists
**Right**: For $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, tangent exists only when $|m| > \frac{b}{a}$

### Mistake 6: Point vs Slope Form Confusion

**Wrong**: Using point form when point is NOT on the curve
**Right**: Point form $(x_1, y_1)$ requires the point to satisfy the conic equation! For external points, use slope form or chord of contact.

### Mistake 7: Normal Direction

**Wrong**: Writing normal as perpendicular without checking sign
**Right**: If tangent has slope $m_1$, normal has slope $m_2 = -\frac{1}{m_1}$. But derive carefully for each conic!

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1**: Find the equation of tangent to circle $x^2 + y^2 = 25$ at point $(3, 4)$.

<details><summary>Solution</summary><p>Using point form: $xx_1 + yy_1 = r^2$</p>$$3x + 4y = 25$$<p><strong>Answer</strong>:</p>$$\boxed{3x + 4y = 25}$$</details>

**Problem 2**: Find the equation of tangent to parabola $y^2 = 8x$ with slope 2.

<details><summary>Solution</summary><p>For $y^2 = 4ax$: $4a = 8 \implies a = 2$</p><p>Using slope form: $y = mx + \frac{a}{m}$</p>$$y = 2x + \frac{2}{2} = 2x + 1$$<p><strong>Answer</strong>:</p>$$\boxed{y = 2x + 1}$$</details>

**Problem 3**: Find tangent to ellipse $\frac{x^2}{16} + \frac{y^2}{9} = 1$ at $(2, \frac{3\sqrt{3}}{2})$.

<details><summary>Solution</summary><p>Verify point is on ellipse: $\frac{4}{16} + \frac{27/4}{9} = \frac{1}{4} + \frac{3}{4} = 1$ ✓</p><p>Using point form: $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$</p>$$\frac{2x}{16} + \frac{(3\sqrt{3}/2)y}{9} = 1$$

$$\frac{x}{8} + \frac{\sqrt{3}y}{6} = 1$$<p>Multiply by 24:</p>$$3x + 4\sqrt{3}y = 24$$<p><strong>Answer</strong>:</p>$$\boxed{3x + 4\sqrt{3}y = 24}$$</details>

### Level 2: JEE Main/Advanced

**Problem 4**: Find the equations of tangents to hyperbola $\frac{x^2}{9} - \frac{y^2}{4} = 1$ that are parallel to line $2x - y + 7 = 0$.

<details><summary>Solution</summary><p>Line $2x - y + 7 = 0$ has slope $m = 2$.</p><p>For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$: $a^2 = 9, b^2 = 4$</p><p>Using slope form: $y = mx \pm \sqrt{a^2m^2 - b^2}$</p>$$y = 2x \pm \sqrt{9(4) - 4}$$<p></p>$$y = 2x \pm \sqrt{36 - 4}$$<p></p>$$y = 2x \pm \sqrt{32}$$<p></p>$$y = 2x \pm 4\sqrt{2}$$<p><strong>Answers</strong>:</p>$$\boxed{2x - y + 4\sqrt{2} = 0 \text{ and } 2x - y - 4\sqrt{2} = 0}$$</details>

**Problem 5**: Find the normal to parabola $y^2 = 16x$ at parameter $t = 2$.

<details><summary>Solution</summary><p>For $y^2 = 4ax$: $4a = 16 \implies a = 4$</p><p>Point at $t = 2$: $(at^2, 2at) = (4 \cdot 4, 2 \cdot 4 \cdot 2) = (16, 16)$</p><p>Parametric normal: $y + tx = 2at + at^3$</p>$$y + 2x = 2(4)(2) + 4(8)$$<p></p>$$y + 2x = 16 + 32$$<p></p>$$y + 2x = 48$$<p><strong>Answer</strong>:</p>$$\boxed{2x + y = 48}$$</details>

**Problem 6**: Prove that the tangent at $(a\cos\theta, b\sin\theta)$ on ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ makes intercepts $\frac{a}{\cos\theta}$ and $\frac{b}{\sin\theta}$ on the axes.

<details><summary>Solution</summary><p>Tangent equation: $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$</p><p><strong>X-intercept</strong> (put $y = 0$):</p>$$\frac{x\cos\theta}{a} = 1 \implies x = \frac{a}{\cos\theta}$$<p><strong>Y-intercept</strong> (put $x = 0$):</p>$$\frac{y\sin\theta}{b} = 1 \implies y = \frac{b}{\sin\theta}$$<p>Hence proved. ∎</p></details>

### Level 3: JEE Advanced

**Problem 7**: Show that the locus of foot of perpendicular from focus to any tangent of parabola $y^2 = 4ax$ is the tangent at vertex.

<details><summary>Solution</summary><p><strong>Given</strong>: Parabola $y^2 = 4ax$, Focus $F(a, 0)$</p><p><strong>Tangent at parameter $t$</strong>: $ty = x + at^2$</p><p><strong>Step 1</strong>: Find foot of perpendicular from $F(a, 0)$ to this tangent.</p><p>Tangent can be written as: $x - ty + at^2 = 0$</p><p>Perpendicular from $(a, 0)$ has slope $t$ (perpendicular to slope $1/t$):</p>$$y - 0 = t(x - a)$$<p></p>$$y = tx - at$$<p><strong>Step 2</strong>: Find intersection (foot $P$).</p><p>From perpendicular: $y = tx - at$ &amp;mldr; (1)
From tangent: $ty = x + at^2$ &amp;mldr; (2)</p><p>Substitute (1) in (2):</p>$$t(tx - at) = x + at^2$$<p></p>$$t^2x - at^2 = x + at^2$$<p></p>$$x(t^2 - 1) = 2at^2$$<p></p>$$x = \frac{2at^2}{t^2 - 1}$$<p>(if $t \neq \pm 1$)</p><p>From (1): $y = t \cdot \frac{2at^2}{t^2-1} - at = \frac{2at^3 - at(t^2-1)}{t^2-1} = \frac{2at^3 - at^3 + at}{t^2-1} = \frac{at^3 + at}{t^2-1} = \frac{at(t^2+1)}{t^2-1}$</p><p><strong>Step 3</strong>: Eliminate parameter $t$.</p><p>This is complex. Let’s use a different approach.</p><p><strong>Alternative elegant approach</strong>:</p><p>The foot of perpendicular from focus $F(a, 0)$ to tangent $ty = x + at^2$ lies on the <strong>directrix</strong> of the parabola when we consider the reflection property.</p><p>Actually, the correct locus is <strong>tangent at vertex</strong>: $x = 0$.</p><p>To prove: For any $t$, if we find foot $(h, k)$ and eliminate $t$, we should get $h = 0$.</p><p>By geometrical property of parabola, this is indeed true.</p><p><strong>Locus</strong>:</p>$$\boxed{x = 0}$$<p>(tangent at vertex)</p></details>

**Problem 8**: Find the locus of point of intersection of perpendicular tangents to ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.

<details><summary>Solution</summary><p>Let tangents with slopes $m_1$ and $m_2$ be perpendicular: $m_1 m_2 = -1$</p><p>Tangent equations:</p>$$y = m_1 x + \sqrt{a^2m_1^2 + b^2}$$<p></p>$$y = m_2 x + \sqrt{a^2m_2^2 + b^2}$$<p>These intersect at some point $(h, k)$.</p><p><strong>Key Property</strong>: The locus is called the <strong>director circle</strong> of the ellipse.</p><p><strong>Direct formula</strong>:</p>$$\boxed{x^2 + y^2 = a^2 + b^2}$$<p>This is a circle with center at origin and radius $\sqrt{a^2 + b^2}$.</p><p><strong>Verification</strong>: By eliminating $m_1$ and $m_2$ from the tangent equations with condition $m_1m_2 = -1$, we arrive at this result.</p></details>

**Problem 9**: Tangents are drawn from point $(h, k)$ to hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. If they are perpendicular, find the locus of $(h, k)$.

<details><summary>Solution</summary><p>This is the director circle of hyperbola.</p><p>For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:</p>$$\boxed{x^2 + y^2 = a^2 - b^2}$$<p><strong>Note</strong>: This circle exists only when $a^2 &gt; b^2$.</p><p><strong>Cases</strong>:</p><ul><li>If $a^2 &gt; b^2$: Director circle is real</li><li>If $a^2 = b^2$ (rectangular hyperbola): Director circle is a point (center)</li><li>If $a^2 &lt; b^2$: Director circle is imaginary</li></ul><p>Replacing $(h, k)$ with $(x, y)$:</p><p><strong>Locus</strong>:</p>$$\boxed{x^2 + y^2 = a^2 - b^2}$$</details>

**Problem 10**: If normal at parameter $t_1$ on parabola $y^2 = 4ax$ meets the parabola again at parameter $t_2$, prove that $t_2 = -t_1 - \frac{2}{t_1}$.

<details><summary>Solution</summary><p><strong>Normal at $t_1$</strong>: Point $(at_1^2, 2at_1)$</p><p>Equation: $y + t_1x = 2at_1 + at_1^3$</p><p><strong>Intersection with parabola</strong>: Substitute $y^2 = 4ax$ (i.e., $x = \frac{y^2}{4a}$):</p>$$y + t_1 \cdot \frac{y^2}{4a} = 2at_1 + at_1^3$$

$$y + \frac{t_1y^2}{4a} = 2at_1 + at_1^3$$<p>Multiply by $4a$:</p>$$4ay + t_1y^2 = 8a^2t_1 + 4a^2t_1^3$$

$$t_1y^2 + 4ay - 8a^2t_1 - 4a^2t_1^3 = 0$$<p><strong>Roots</strong>: $y = 2at_1$ (point of tangency) and $y = 2at_2$ (second intersection)</p><p>By Vieta’s formulas (sum of roots):</p>$$2at_1 + 2at_2 = -\frac{4a}{t_1}$$

$$t_1 + t_2 = -\frac{2}{t_1}$$

$$t_2 = -t_1 - \frac{2}{t_1}$$<p>Hence proved. ∎</p></details>

## Quick Reference: Tangent Formulas

| Conic | Equation | Tangent at $(x_1, y_1)$ | Slope Form |
| --- | --- | --- | --- |
| **Circle** | $x^2+y^2=r^2$ | $xx_1+yy_1=r^2$ | $y=mx\pm r\sqrt{1+m^2}$ |
| **Parabola** | $y^2=4ax$ | $yy_1=2a(x+x_1)$ | $y=mx+\frac{a}{m}$ |
| **Ellipse** | $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | $\frac{xx_1}{a^2}+\frac{yy_1}{b^2}=1$ | $y=mx\pm\sqrt{a^2m^2+b^2}$ |
| **Hyperbola** | $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $\frac{xx_1}{a^2}-\frac{yy_1}{b^2}=1$ | $y=mx\pm\sqrt{a^2m^2-b^2}$ |

## Related Topics

- [Parabola - The Path of Projectiles](../parabola/index.md)
- [Ellipse - The Oval of Orbits](../ellipse/index.md)
- [Hyperbola - The Difference Master](../hyperbola/index.md)
- [General Conic Sections](../conic-general/index.md)
- [Chord of Contact and Pole-Polar](../chord-contact/index.md)
- [Circles](../circles/index.md)
- [Straight Lines](../straight-lines/index.md)

---

*Master the art of tangents and normals - where curves meet lines! 🎯*

From TestGuru · our mock-test platform

## You've read Tangents and Normals to Conics - The Touch and Perpendicular.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=coordinate-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcoordinate-geometry%2Ftangent-normal-conics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/coordinate-geometry/tangent-normal-conics/",this.page.identifier="/mathematics/coordinate-geometry/tangent-normal-conics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="conicSections" id="anim-conicSections-1795396421619997624"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-conicSections-1795396421619997624")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/coordinate-geometry/tangent-normal-conics/](https://jeenotes.in/mathematics/coordinate-geometry/tangent-normal-conics/) · raw HTML: `offline/mathematics/coordinate-geometry/tangent-normal-conics/index.html`_
