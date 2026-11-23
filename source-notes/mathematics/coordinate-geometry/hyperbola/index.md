---
title: "Hyperbola - The Open Conic with Asymptotes"
source: "https://jeenotes.in/mathematics/coordinate-geometry/hyperbola/"
description: "Master hyperbola equations, asymptotes, rectangular hyperbola, conjugate hyperbola, tangent and normal for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "18 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 10"
html: "../../../../offline/mathematics/coordinate-geometry/hyperbola/index.html"
extracted: "2026-11-23"
---

> Master hyperbola equations, asymptotes, rectangular hyperbola, conjugate hyperbola, tangent and normal for JEE Main and Advanced

## The Hook: From Sonic Booms to LORAN Navigation

> **★ Key point · Connect: Real Life → Mathematics**
>
> **Ever seen a sonic boom?** When a jet breaks the sound barrier, it creates a **hyperbolic** shock wave cone!
>
> **Real-World Hyperbolas:**
>
> - **Sonic booms** - Supersonic aircraft create hyperbolic shock waves

> - **LORAN navigation** - Ships and aircraft use hyperbolic positioning

> - **Cooling towers** of nuclear power plants - hyperbolic shape for strength

> - **Shadows** of cones on walls - hyperbolic curves

> - **Radio telescopes** - hyperbolic reflectors

> - **Comets** with escape velocity - hyperbolic orbits around the Sun
>
> **From Physics:** When a particle approaches light speed, its energy-momentum relation forms a hyperbola!
>
> **The Question:** What makes a hyperbola different from an ellipse? Why do some comets follow hyperbolic paths while planets follow elliptical ones?
>
> **Answer:** The **focal difference property** - the **difference** of distances from any point to two foci is constant (ellipse uses sum, hyperbola uses difference). This creates an open curve that never closes!
>
> **JEE Impact:** Hyperbola appears in **2-3 questions** every year in JEE Main and 1-2 in Advanced. Combined with rectangular hyperbola, it’s a high-scoring topic!

---

## The Core Concept

A **hyperbola** is the locus of all points such that the **absolute difference** of distances from two fixed points (foci) is constant.

### The Big Idea

> **◐ In simple terms · Understanding Hyperbola**
>
> **Mathematical Definition:**
>
> $$|PF_1 - PF_2| = 2a \quad \text{(constant)}$$
>
> where $P$ is any point on the hyperbola, and $F_1$, $F_2$ are the foci.
>
> **Comparison with Ellipse:**
>
> - **Ellipse:** SUM of focal distances = $2a$ → Closed curve

> - **Hyperbola:** DIFFERENCE of focal distances = $2a$ → Open curve
>
> **Visual Description:**
>
> - Two separate **branches** (unlike ellipse which is one closed curve)

> - Opens infinitely in opposite directions

> - Has **asymptotes** - straight lines that the curve approaches but never touches

> - More “spread out” than ellipse

> - Symmetric about both transverse and conjugate axes
>
> **Think of it as:** Two mirror-image parabolas facing away from each other, but with different mathematical properties.

---

## Standard Forms of Hyperbola

### 1. Horizontal Hyperbola (Transverse Axis Along X-axis)

$$\boxed{\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1}$$

### Interactive Demo: Visualize Hyperbolas

Explore all conic sections interactively! For hyperbola, drag the point P to verify that |PF1 - PF2| = 2a (the difference of distances to both foci is constant). Toggle asymptotes to see how the curve approaches but never touches these lines.

**Key Elements:**

- **Center:** $(0, 0)$
- **Vertices:** $(\pm a, 0)$ on x-axis
- **Foci:** $(\pm c, 0)$ where $c = \sqrt{a^2 + b^2}$
- **Transverse axis:** Along x-axis, length $= 2a$
- **Conjugate axis:** Along y-axis, length $= 2b$
- **Eccentricity:** $e = \frac{c}{a} = \frac{\sqrt{a^2 + b^2}}{a}$ where $e > 1$
- **Asymptotes:** $y = \pm \frac{b}{a}x$

**Visual Description:** Opens left and right, like two parabolas back-to-back horizontally.

### 2. Vertical Hyperbola (Transverse Axis Along Y-axis)

$$\boxed{\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1}$$

**Key Elements:**

- **Center:** $(0, 0)$
- **Vertices:** $(0, \pm a)$ on y-axis
- **Foci:** $(0, \pm c)$ where $c = \sqrt{a^2 + b^2}$
- **Transverse axis:** Along y-axis, length $= 2a$
- **Conjugate axis:** Along x-axis, length $= 2b$
- **Eccentricity:** $e = \frac{c}{a} > 1$
- **Asymptotes:** $y = \pm \frac{a}{b}x$

**Visual Description:** Opens up and down vertically.

### How to Identify the Opening Direction

> **★ Key point · 'Positive Term Opens There'**
>
> **Simple Rule:**
>
> **The POSITIVE term tells you the opening direction!**
>
> - If $\frac{x^2}{a^2}$ is **positive** → Opens **horizontally** (left-right)

> - If $\frac{y^2}{a^2}$ is **positive** → Opens **vertically** (up-down)
>
> **Key Difference from Ellipse:**
>
> - Ellipse: BOTH terms positive ($+$ and $+$)

> - Hyperbola: ONE term positive, ONE negative ($+$ and $-$)
>
> **Example 1:** $\frac{x^2}{16} - \frac{y^2}{9} = 1$
>
> - $x^2$ term positive → Horizontal hyperbola

> - $a^2 = 16$ → $a = 4$, $b^2 = 9$ → $b = 3$
>
> **Example 2:** $\frac{y^2}{25} - \frac{x^2}{16} = 1$
>
> - $y^2$ term positive → Vertical hyperbola

> - $a^2 = 25$ → $a = 5$, $b^2 = 16$ → $b = 4$

---

## Important Terms and Definitions

### 1. Transverse Axis

The axis passing through the **foci** and **vertices**.

**Length:** $2a$

**This is where the hyperbola actually exists** (the vertices are on this axis).

### 2. Conjugate Axis

The axis perpendicular to the transverse axis.

**Length:** $2b$

**Note:** Unlike ellipse, the hyperbola **does not intersect** the conjugate axis!

### 3. Foci

Two fixed points, one on each branch.

**Location:** At distance $c$ from center along transverse axis

**Key Relation:** $c^2 = a^2 + b^2$ (ADDITION!)

**Remember:** $c > a$ (foci are farther from center than vertices)

### 4. Eccentricity ($e$)

A measure of how “open” the hyperbola is.

$$\boxed{e = \frac{c}{a} = \frac{\sqrt{a^2 + b^2}}{a}}$$

**Range:** $e > 1$ (always greater than 1)

**Special Cases:**

- $e$ close to 1 → Narrow hyperbola (looks like two parabolas)
- $e$ large → Very open hyperbola (branches more spread out)
- $e = \sqrt{2}$ → Rectangular hyperbola

**Alternative Forms:**

$$\boxed{b^2 = a^2(e^2 - 1)}$$

$$\boxed{c^2 = a^2 e^2}$$

### 5. Latus Rectum

A chord through the focus, perpendicular to the transverse axis.

**Length:** $\frac{2b^2}{a}$ (same formula as ellipse!)

**Endpoints for horizontal hyperbola:** $\left(c, \pm\frac{b^2}{a}\right)$

### 6. Asymptotes

Straight lines that the hyperbola approaches but never touches as it extends to infinity.

**For** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:

$$\boxed{y = \pm \frac{b}{a}x}$$

Or equivalently: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$

**For** $\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$:

$$\boxed{y = \pm \frac{a}{b}x}$$

**Visual Description:** Imagine two diagonal lines crossing at the center. As you move farther from the center along the hyperbola, the curve gets closer and closer to these lines but never actually reaches them.

> **◐ In simple terms · Why Asymptotes Matter**
>
> **Asymptotes are the skeleton of the hyperbola!**
>
> 1. They pass through the center

> 2. They divide the plane into four regions

> 3. The hyperbola exists only in two opposite regions

> 4. Drawing asymptotes first makes sketching hyperbola easy
>
> **Quick Sketch Method:**
>
> 1. Draw asymptotes $y = \pm \frac{b}{a}x$

> 2. Mark vertices at $(\pm a, 0)$

> 3. Draw smooth curves from vertices approaching asymptotes

### 7. Directrix

Lines associated with each focus.

**For horizontal hyperbola:**

$$x = \pm \frac{a}{e}$$

**Property:** For any point $P$ on hyperbola:

$$\frac{\text{Distance from P to focus}}{\text{Distance from P to directrix}} = e$$

---

## Key Relations (Memory Gems!)

$$\boxed{c^2 = a^2 + b^2} \quad \text{(ADDITION - opposite of ellipse!)}$$

$$\boxed{e = \frac{c}{a} > 1}$$

$$\boxed{b^2 = a^2(e^2 - 1)}$$

$$\boxed{\text{Asymptotes: } y = \pm \frac{b}{a}x \text{ (for horizontal)}}$$

$$\boxed{\text{Latus Rectum} = \frac{2b^2}{a}}$$

> **★ Key point · Memory Trick: 'Hyperbola ADDS'**
>
> **“Ellipse SUBTRACTS, Hyperbola ADDS”**
>
> **Ellipse:** $c^2 = a^2 - b^2$ (subtraction)
>
> **Hyperbola:** $c^2 = a^2 + b^2$ (addition)
>
> **Why?**
>
> - Ellipse: Foci are **inside** (closer than semi-major axis) → subtract

> - Hyperbola: Foci are **outside** (farther than semi-transverse axis) → add
>
> **Visual:** Think of the right triangle:
>
> - Vertices at $(\pm a, 0)$

> - Asymptote passes through $(a, b)$ from origin

> - Focus at $(c, 0)$

> - Triangle: $(0,0)$, $(a, 0)$, $(a, b)$ → hypotenuse length = $\sqrt{a^2 + b^2} = c$

---

## Rectangular Hyperbola

A **rectangular hyperbola** is a special hyperbola where:

$$\boxed{a = b}$$

or equivalently:

$$\boxed{e = \sqrt{2}}$$

### Standard Form

$$\boxed{x^2 - y^2 = a^2}$$

**Asymptotes:** $y = \pm x$ (perpendicular to each other at 45°)

### Rotated Form (Most Common in JEE!)

When rotated 45°, the rectangular hyperbola becomes:

$$\boxed{xy = c^2}$$

or more generally:

$$\boxed{xy = k}$$

**This is the equation you’ll see most often in JEE!**

**Key Properties:**

- **Asymptotes:** $x = 0$ and $y = 0$ (the coordinate axes!)
- **Eccentricity:** $e = \sqrt{2}$
- **Parametric form:** $x = ct$, $y = \frac{c}{t}$ (where $t \neq 0$)

**Visual Description:** The familiar “reciprocal curve” you see in $y = \frac{1}{x}$ graphs. Two branches in opposite quadrants, approaching both axes but never touching them.

> **↗ Connection · Example: Rectangular Hyperbola in Real Life**
>
> **Boyle’s Law in Chemistry:** $PV = k$ (constant temperature)
>
> - Pressure $P$ vs Volume $V$ graph is a rectangular hyperbola!

> - As volume increases, pressure decreases

> - Product remains constant
>
> **Economics:** Demand-Price relationship often follows $xy = k$ form.

---

## Conjugate Hyperbola

For every hyperbola, there exists a **conjugate hyperbola**.

**If hyperbola is:** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$

**Conjugate hyperbola is:** $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$

Or simply: $-\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$

**Key Properties:**

1. **Same asymptotes** as original hyperbola
2. **Transverse and conjugate axes are interchanged**
3. Original hyperbola opens horizontally, conjugate opens vertically (or vice versa)
4. They are **reflections** about the asymptotes
5. If $e_1$ and $e_2$ are the eccentricities of a hyperbola and its conjugate, then:

$$\boxed{\frac{1}{e_1^2} + \frac{1}{e_2^2} = 1}$$

**Visual Description:** If you draw both on the same graph, they share the same asymptotes but open in perpendicular directions, filling all four regions created by the asymptotes.

---

## Parametric Equations

For hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:

$$\boxed{x = a\sec\theta, \quad y = b\tan\theta}$$

**Range:** $\theta \in [0, 2\pi)$, $\theta \neq \frac{\pi}{2}, \frac{3\pi}{2}$

**Verification:**

$$\frac{a^2\sec^2\theta}{a^2} - \frac{b^2\tan^2\theta}{b^2} = \sec^2\theta - \tan^2\theta = 1$$

✓

**For rectangular hyperbola** $xy = c^2$:

$$\boxed{x = ct, \quad y = \frac{c}{t}} \quad \text{where } t \neq 0$$

> **↗ Connection · Example: Parametric Point**
>
> Find point on hyperbola $\frac{x^2}{16} - \frac{y^2}{9} = 1$ at $\theta = 60°$.
>
> **Solution:**
>
> $a = 4$, $b = 3$
>
> $$x = 4\sec 60° = 4 \times 2 = 8$$

$$y = 3\tan 60° = 3\sqrt{3}$$
>
> **Point:** $(8, 3\sqrt{3})$
>
> **Verification:** $\frac{64}{16} - \frac{27}{9} = 4 - 3 = 1$ ✓

---

## Tangent to a Hyperbola

### 1. Tangent at Point $(x_1, y_1)$

**For hyperbola** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:

$$\boxed{\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1}$$

### 2. Tangent at Parametric Point $(a\sec\theta, b\tan\theta)$

$$\boxed{\frac{x\sec\theta}{a} - \frac{y\tan\theta}{b} = 1}$$

### 3. Tangent with Slope $m$

$$\boxed{y = mx \pm \sqrt{a^2m^2 - b^2}}$$

**Condition:** For real tangent, $a^2m^2 - b^2 \geq 0$ → $m^2 \geq \frac{b^2}{a^2}$

**This means:** Not all slopes give tangents! Only slopes with $|m| \geq \frac{b}{a}$ work.

**For rectangular hyperbola** $xy = c^2$ **at point** $(ct, \frac{c}{t})$:

$$\boxed{\frac{x}{t} + ty = 2c}$$

> **★ Key point · Memory Trick: Same Pattern as Ellipse**
>
> **For tangent at $(x_1, y_1)$:**
>
> Just like ellipse, replace $x^2$ with $xx_1$, $y^2$ with $yy_1$:
>
> Hyperbola: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$
>
> Tangent: $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$
>
> **Only difference:** Keep the minus sign!

> **↗ Connection · Example: Tangent Equation**
>
> Find equation of tangent to $\frac{x^2}{9} - \frac{y^2}{4} = 1$ at point $(5, \frac{8}{3})$.
>
> **Solution:**
>
> Using $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$:
>
> $$\frac{x \cdot 5}{9} - \frac{y \cdot \frac{8}{3}}{4} = 1$$

$$\frac{5x}{9} - \frac{8y}{12} = 1$$

$$\frac{5x}{9} - \frac{2y}{3} = 1$$
>
> Multiply by 9:
>
> $$\boxed{5x - 6y = 9}$$

---

## Normal to a Hyperbola

### 1. Normal at Point $(x_1, y_1)$

**For hyperbola** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:

$$\boxed{\frac{a^2x}{x_1} + \frac{b^2y}{y_1} = a^2 + b^2 = c^2}$$

### 2. Normal at Parametric Point $(a\sec\theta, b\tan\theta)$

$$\boxed{ax\cos\theta + by\cot\theta = a^2 + b^2}$$

**For rectangular hyperbola** $xy = c^2$ **at** $(ct, \frac{c}{t})$:

$$\boxed{xt^3 - yt - ct^4 + c = 0}$$

---

## Important Properties of Hyperbola

### 1. Focal Difference Property

For any point $P$ on the hyperbola:

$$\boxed{|PF_1 - PF_2| = 2a}$$

**This is the defining property!**

**Visual Description:** No matter where you are on the hyperbola, the absolute difference of distances to both foci equals the transverse axis length.

### 2. Asymptotes are NOT Tangents

**Key Point:** Asymptotes touch the hyperbola “at infinity” but are NOT tangents in the usual sense.

**Tangent touches at one point (finite)**, asymptote approaches but never actually touches.

### 3. Chord of Contact

From external point $(x_1, y_1)$, the chord joining two tangent points:

$$\boxed{\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1}$$

(Same form as tangent equation!)

### 4. Auxiliary Circle

Circle with radius $a$ (semi-transverse axis).

**Equation:** $x^2 + y^2 = a^2$

**Connection:** Helps in deriving parametric equations using $\sec\theta$ and $\tan\theta$.

### 5. Reflection Property

**Property:** A ray directed towards one focus, after reflecting off the hyperbola, appears to come from the other focus.

**Application:** LORAN navigation system uses this property - by measuring time difference of signals from two stations, position lies on a hyperbola.

---

## Memory Tricks & Patterns

### Pattern 1: Hyperbola vs Ellipse

| Property | Ellipse | Hyperbola |
| --- | --- | --- |
| **Equation sign** | $+$ and $+$ | $+$ and $-$ |
| **Focal relation** | $c^2 = a^2 - b^2$ | $c^2 = a^2 + b^2$ |
| **Eccentricity** | $0 < e < 1$ | $e > 1$ |
| **Focal property** | Sum = $2a$ | Difference = $2a$ |
| **Shape** | Closed curve | Open curve |
| **Asymptotes** | None | Two asymptotes |

### Pattern 2: Finding Asymptotes

**“Change 1 to 0”**

From hyperbola equation $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:

Replace $1$ with $0$: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$

This factors: $\left(\frac{x}{a} - \frac{y}{b}\right)\left(\frac{x}{a} + \frac{y}{b}\right) = 0$

**Asymptotes:** $y = \frac{b}{a}x$ and $y = -\frac{b}{a}x$

### Pattern 3: Rectangular Hyperbola Recognition

**Any equation of the form** $xy = k$ **is a rectangular hyperbola!**

- $xy = 1$ → Rectangular hyperbola
- $xy = 5$ → Rectangular hyperbola
- $xy = -3$ → Rectangular hyperbola (in different quadrants)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Focus Formula Sign**
>
> **Wrong:** $c^2 = a^2 - b^2$ (ellipse formula)
>
> **Correct:** $c^2 = a^2 + b^2$ (hyperbola formula)
>
> **Remember:** “Hyperbola ADDS, Ellipse SUBTRACTS”
>
> **Why?** Foci in hyperbola are farther from center than vertices ($c > a$), so we add.

> **⚠ Trap #2: Eccentricity Range**
>
> **Wrong:** Eccentricity of hyperbola is less than 1
>
> **Correct:** For hyperbola, $e > 1$ ALWAYS
>
> **Remember:**
>
> - Circle: $e = 0$

> - Ellipse: $0 < e < 1$

> - Parabola: $e = 1$

> - Hyperbola: $e > 1$

> **⚠ Trap #3: Asymptotes are NOT Tangents**
>
> **Common Error:** Treating asymptotes as tangent lines
>
> **Correct:**
>
> - Tangent **touches** hyperbola at one finite point

> - Asymptote **approaches** hyperbola but never touches (meets at infinity)
>
> **Key:** Asymptotes are limiting positions, not actual tangents.

> **⚠ Trap #4: Rectangular Hyperbola Condition**
>
> **Wrong:** Rectangular hyperbola means $a = b = 1$
>
> **Correct:** Rectangular hyperbola means $a = b$ (can be any equal value) OR $e = \sqrt{2}$
>
> **Examples:**
>
> - $x^2 - y^2 = 4$ → Rectangular hyperbola ($a = b = 2$)

> - $xy = 5$ → Rectangular hyperbola (standard rectangular form)

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Basic Elements**
>
> **Question:** For hyperbola $\frac{x^2}{16} - \frac{y^2}{9} = 1$, find vertices, foci, eccentricity, and asymptotes.
>
> **Solution:**
>
> $a^2 = 16$ → $a = 4$, $b^2 = 9$ → $b = 3$
>
> Horizontal hyperbola (positive $x^2$ term)
>
> $c^2 = a^2 + b^2 = 16 + 9 = 25$ → $c = 5$
>
> - **Vertices:** $(\pm 4, 0)$

> - **Foci:** $(\pm 5, 0)$

> - **Eccentricity:** $e = \frac{c}{a} = \frac{5}{4}$

> - **Asymptotes:** $y = \pm \frac{3}{4}x$

> - **Latus Rectum:** $\frac{2b^2}{a} = \frac{2 \times 9}{4} = \frac{9}{2}$

> **↗ Connection · Problem 2: Finding Equation**
>
> **Question:** Find equation of hyperbola with foci at $(\pm 5, 0)$ and vertices at $(\pm 3, 0)$.
>
> **Solution:**
>
> Foci and vertices on x-axis → horizontal hyperbola
>
> $c = 5$, $a = 3$
>
> $b^2 = c^2 - a^2 = 25 - 9 = 16$ → $b = 4$
>
> $$\boxed{\frac{x^2}{9} - \frac{y^2}{16} = 1}$$

> **↗ Connection · Problem 3: Rectangular Hyperbola Point**
>
> **Question:** Find point on rectangular hyperbola $xy = 8$ with parameter $t = 2$.
>
> **Solution:**
>
> For $xy = c^2$, we have $c^2 = 8$ → $c = 2\sqrt{2}$
>
> Parametric: $x = ct = 2\sqrt{2} \times 2 = 4\sqrt{2}$
>
> $y = \frac{c}{t} = \frac{2\sqrt{2}}{2} = \sqrt{2}$
>
> **Point:** $(4\sqrt{2}, \sqrt{2})$
>
> **Verification:** $4\sqrt{2} \times \sqrt{2} = 4 \times 2 = 8$ ✓

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Focal Difference**
>
> **Question:** A point on hyperbola $\frac{x^2}{25} - \frac{y^2}{16} = 1$ is at distance 7 from one focus. Find its distance from the other focus.
>
> **Solution:**
>
> $a^2 = 25$ → $a = 5$
>
> By focal difference property: $|PF_1 - PF_2| = 2a = 10$
>
> **Case 1:** $PF_1 - PF_2 = 10$
>
> If $PF_1 = 7$: $7 - PF_2 = 10$ → $PF_2 = -3$ (impossible)
>
> **Case 2:** $PF_2 - PF_1 = 10$
>
> If $PF_1 = 7$: $PF_2 - 7 = 10$ → $PF_2 = 17$
>
> $$\boxed{PF_2 = 17}$$

> **↗ Connection · Problem 5: Tangent with Given Slope**
>
> **Question:** Find equations of tangents to $\frac{x^2}{16} - \frac{y^2}{9} = 1$ with slope $2$.
>
> **Solution:**
>
> $a^2 = 16$, $b^2 = 9$, $m = 2$
>
> Check condition: $a^2m^2 - b^2 = 16(4) - 9 = 64 - 9 = 55 > 0$ ✓
>
> Using $y = mx \pm \sqrt{a^2m^2 - b^2}$:
>
> $$y = 2x \pm \sqrt{55}$$

$$\boxed{y = 2x + \sqrt{55} \quad \text{and} \quad y = 2x - \sqrt{55}}$$
>
> Or: $2x - y \pm \sqrt{55} = 0$

> **↗ Connection · Problem 6: Conjugate Hyperbola**
>
> **Question:** Find equation of conjugate hyperbola of $\frac{x^2}{9} - \frac{y^2}{16} = 1$.
>
> **Solution:**
>
> Conjugate: Interchange $x^2$ and $y^2$ terms and change sign:
>
> $$\boxed{\frac{y^2}{16} - \frac{x^2}{9} = 1}$$
>
> Or equivalently: $-\frac{x^2}{9} + \frac{y^2}{16} = 1$
>
> **Note:** Both have same asymptotes $y = \pm \frac{4}{3}x$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 7: Locus Problem**
>
> **Question:** Find locus of midpoint of chords of hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ parallel to line $y = mx$.
>
> **Solution:**
>
> Let midpoint be $(h, k)$.
>
> For chord parallel to $y = mx$, the chord has slope $m$.
>
> Using T = S₁ method:
>
> Tangent at $(h, k)$: $\frac{xh}{a^2} - \frac{yk}{b^2} = \frac{h^2}{a^2} - \frac{k^2}{b^2}$
>
> Slope of this tangent: $\frac{b^2h}{a^2k}$
>
> For chord through $(h, k)$ with slope $m$:
>
> Slope = $m$ = $\frac{b^2h}{a^2k}$
>
> $$b^2h = ma^2k$$
>
> **Locus** (replace $(h, k)$ with $(x, y)$):
>
> $$\boxed{b^2x = ma^2y}$$
>
> Or: $b^2x - ma^2y = 0$
>
> **This is a straight line through the origin!**

> **↗ Connection · Problem 8: Director Circle**
>
> **Question:** Find locus of point of intersection of perpendicular tangents to $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$.
>
> **Solution:**
>
> This is the director circle.
>
> For hyperbola:
>
> $$\boxed{x^2 + y^2 = a^2 - b^2}$$
>
> **Note:** This exists only when $a^2 > b^2$ (real circle).

> **↗ Connection · Problem 9: Rectangular Hyperbola Tangent**
>
> **Question:** Find equation of tangent to $xy = 16$ at point with parameter $t = 4$.
>
> **Solution:**
>
> $xy = c^2 = 16$ → $c = 4$
>
> Point: $(ct, \frac{c}{t}) = (4 \times 4, \frac{4}{4}) = (16, 1)$
>
> Using tangent formula for rectangular hyperbola:
>
> $$\frac{x}{t} + ty = 2c$$

$$\frac{x}{4} + 4y = 2(4)$$

$$\frac{x}{4} + 4y = 8$$
>
> Multiply by 4:
>
> $$\boxed{x + 16y = 32}$$
>
> **Verification:** Point $(16, 1)$ satisfies: $16 + 16 = 32$ ✓

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| **Horizontal hyperbola** | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ |
| **Vertical hyperbola** | $\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$ |
| **Focus relation** | $c^2 = a^2 + b^2$ (ADDITION) |
| **Eccentricity** | $e = \frac{c}{a} > 1$ |
| **Focal difference** | $ |
| **Asymptotes** | $y = \pm \frac{b}{a}x$ (horizontal) |
| **Rectangular hyperbola** | $xy = c^2$ or $a = b$ |
| **Rectangular $e$** | $e = \sqrt{2}$ |
| **Parametric (standard)** | $x = a\sec\theta$, $y = b\tan\theta$ |
| **Parametric (rect.)** | $x = ct$, $y = \frac{c}{t}$ |
| **Tangent at $(x_1,y_1)$** | $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$ |
| **Latus rectum** | $\frac{2b^2}{a}$ |
| **Conjugate hyperbola** | Interchange and negate |

---

## Cross-Links to Related Topics

**Prerequisites:**

- [Ellipse](../ellipse/index.md) - Opposite focal property (sum vs difference)
- [Circles](../circles/index.md) - Understanding conic sections
- [Straight Lines](../straight-lines/index.md) - For asymptotes, tangent, normal

**Related Topics:**

- [Parabola](../parabola/index.md) - Limiting case when $e = 1$
- [Trigonometry](../../trigonometry/index.md) - For parametric equations
- [3D Geometry](../../three-dimensional-geometry/index.md) - Hyperboloids
- [Limits](../../limits-continuity-differentiability/index.md) - Understanding asymptotic behavior

**Applications:**

- Physics: Particle trajectories, sonic boom patterns
- Navigation: LORAN positioning system
- Engineering: Cooling tower design, reflector shapes
- Astronomy: Hyperbolic comet orbits

---

## JEE Exam Strategy

> **★ Key point · High-Yield Points for JEE**
>
> **Weightage:** 2-3 questions in JEE Main, 1-2 in Advanced
>
> **Most Frequently Asked:**
>
> 1. **Rectangular hyperbola** $xy = c^2$ - very popular in JEE!

> 2. **Finding equation given conditions** (foci, vertices, eccentricity, asymptotes)

> 3. **Focal difference property** $|PF_1 - PF_2| = 2a$

> 4. **Asymptote equations** and their properties

> 5. **Tangent and normal equations**
>
> **Time-Saving Tricks:**
>
> 1. **For rectangular hyperbola:** Use $xy = c^2$ and parametric $x = ct, y = \frac{c}{t}$ directly

> 2. **Asymptotes:** Change “= 1” to “= 0” in hyperbola equation

> 3. **Remember:** $c^2 = a^2 + b^2$ (ADDITION, not subtraction!)

> 4. **Eccentricity check:** Must be $> 1$ for hyperbola
>
> **Common Trap Options:**
>
> - Giving $c^2 = a^2 - b^2$ (ellipse formula) instead of $c^2 = a^2 + b^2$

> - Wrong eccentricity range ($< 1$ instead of $> 1$)

> - Treating asymptotes as tangents

> - Forgetting absolute value in focal difference: $|PF_1 - PF_2| = 2a$
>
> **Pattern Recognition:**
>
> - **"$xy = k$"** → Rectangular hyperbola, use parametric immediately

> - **“Asymptotes”** → Change equation to “= 0” form

> - **“Perpendicular asymptotes”** → Rectangular hyperbola ($a = b$)

> - **“Conjugate hyperbola”** → Swap positive and negative terms
>
> **Quick Checks:**
>
> - Verify $e > 1$ always for hyperbola

> - Check $c > a$ (foci farther than vertices)

> - Asymptotes pass through center

> - For rectangular hyperbola: verify $a = b$ or $e = \sqrt{2}$

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Definition:** **Difference** of distances from any point to two foci equals $2a$ (constant)

> 2. **Key relation:** $c^2 = a^2 + b^2$ (ADDITION - opposite of ellipse!)

> 3. **Open curve:** Two separate branches approaching asymptotes

> 4. **Asymptotes:** Lines that hyperbola approaches at infinity: $y = \pm \frac{b}{a}x$

> 5. **Eccentricity:** $e > 1$ always (measures how “open” the hyperbola is)

> 6. **Rectangular hyperbola:** $a = b$ (equivalently $e = \sqrt{2}$), often written as $xy = c^2$

> 7. **Conjugate hyperbola:** Opens in perpendicular direction, shares same asymptotes

> 8. **Reflection property:** Ray towards one focus reflects as if from other focus (LORAN navigation)
>
> **“The hyperbola is the open conic - while ellipse closes around its foci, hyperbola spreads infinitely, forever approaching but never touching its asymptotes!”**
>
> **Mastery Check:** Can you instantly:
>
> - Write asymptote equations from hyperbola equation?

> - Identify if $xy = k$ is a hyperbola? (Yes - rectangular!)

> - Remember $c^2 = a^2 + b^2$ (not minus)?

> - Recall $e > 1$ for hyperbola?
>
> **Connection to Other Conics:**
>
> - Circle: $e = 0$ (both foci coincide)

> - Ellipse: $0 < e < 1$ (sum of focal distances constant)

> - Parabola: $e = 1$ (one focus, one directrix)

> - Hyperbola: $e > 1$ (difference of focal distances constant)
>
> **You’ve completed all major conics!** You now understand the complete family of curves obtained by slicing a cone. Master these, and coordinate geometry is yours!

---

## What’s Next?

You’ve now mastered all five topics in Coordinate Geometry:

1. [Straight Lines](../straight-lines/index.md) - The foundation
2. [Circles](../circles/index.md) - The perfect curve
3. [Parabola](../parabola/index.md) - The focusing curve
4. [Ellipse](../ellipse/index.md) - The orbital curve
5. **Hyperbola** - The open curve

**Continue your JEE preparation with:**

- [3D Geometry](../../three-dimensional-geometry/index.md) - Extend to three dimensions
- [Vector Algebra](../../vector-algebra/index.md) - Represent geometry with vectors
- [Calculus Applications](../../integral-calculus/index.md) - Find areas under these curves

**Practice Integration:** Many JEE problems combine multiple topics:

- Circle and straight line intersection
- Ellipse and tangent properties
- Parabola focus and reflection
- All conics together in one problem

**Keep practicing, and remember: Coordinate Geometry is one of the highest-scoring topics in JEE if you master the formulas and patterns!**

From TestGuru · our mock-test platform

## You've read Hyperbola - The Open Conic with Asymptotes.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=coordinate-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcoordinate-geometry%2Fhyperbola%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/coordinate-geometry/hyperbola/",this.page.identifier="/mathematics/coordinate-geometry/hyperbola/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="conicSectionsExplorer" id="anim-conicSectionsExplorer-1795396421611606025"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-conicSectionsExplorer-1795396421611606025")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/coordinate-geometry/hyperbola/](https://jeenotes.in/mathematics/coordinate-geometry/hyperbola/) · raw HTML: `offline/mathematics/coordinate-geometry/hyperbola/index.html`_
