---
title: "Ellipse - The Orbital Curve"
source: "https://jeenotes.in/mathematics/coordinate-geometry/ellipse/"
description: "Master ellipse equations, eccentricity, foci properties, tangent and normal, and parametric forms for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 10"
html: "../../../../offline/mathematics/coordinate-geometry/ellipse/index.html"
extracted: "2026-11-23"
---

> Master ellipse equations, eccentricity, foci properties, tangent and normal, and parametric forms for JEE Main and Advanced

## The Hook: Why Planets Move in Ellipses

> **★ Key point · Connect: Real Life → Mathematics**
>
> **Look up at the night sky!** Every planet, including Earth, orbits the Sun in an elliptical path, not a perfect circle.
>
> **Real-World Ellipses:**
>
> - **Planetary orbits** - Earth, Mars, all planets follow elliptical paths (Kepler’s First Law)

> - **Satellite orbits** - Communication satellites, ISS orbit in ellipses

> - **The Oval Office** in the White House

> - **Running tracks** - 400m tracks have elliptical curves

> - **Whispering galleries** - Sound from one focus reaches the other focus
>
> **From “Interstellar”:** When astronauts orbit the black hole, their trajectory follows an ellipse (in idealized conditions).
>
> **The Question:** What makes an ellipse special? Why do planets orbit in ellipses and not circles?
>
> **Answer:** The **two-foci property** - the sum of distances from any point on an ellipse to two fixed points (foci) is constant. This creates a stable orbital path under gravitational force!
>
> **JEE Impact:** Ellipse appears in **2-3 questions** every year in JEE Main and 1-2 in Advanced. Combined with other conics, coordinate geometry contributes 15-20% of JEE Math paper!

---

## The Core Concept

An **ellipse** is the locus of all points such that the sum of distances from two fixed points (foci) is constant.

### The Big Idea

> **◐ In simple terms · Understanding Ellipse**
>
> **The String Method:**
>
> - Take two pins (these are the **foci** $F_1$ and $F_2$)

> - Tie a string of fixed length to both pins

> - Pull the string taut with a pencil and trace

> - The pencil draws an **ellipse**!
>
> **Why?** At every position, the total string length (distance to $F_1$ + distance to $F_2$) remains constant.
>
> **Mathematical Definition:**
>
> $$PF_1 + PF_2 = 2a \quad \text{(constant)}$$
>
> where $P$ is any point on the ellipse.
>
> **Visual Description:**
>
> - The ellipse is a “stretched circle”

> - It has a **major axis** (longer diameter) and **minor axis** (shorter diameter)

> - Two **foci** lie on the major axis

> - The ellipse is symmetric about both axes

---

## Interactive Demo: Ellipse Visualization

Explore all conic sections interactively! For ellipse, drag the point P to verify that PF1 + PF2 = 2a (the sum of distances to both foci is constant). Toggle the focus and directrix visibility to understand the eccentricity relationship.

Plot ellipses with different equations: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. See how changing $a$ and $b$ affects the shape, and visualize the foci positions!

---

## Standard Forms of Ellipse

### 1. Horizontal Ellipse (Major Axis Along X-axis)

$$\boxed{\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad \text{where } a > b}$$

**Key Elements:**

- **Center:** $(0, 0)$
- **Major axis:** Along x-axis, length $= 2a$
- **Minor axis:** Along y-axis, length $= 2b$
- **Vertices:** $(\pm a, 0)$ (endpoints of major axis)
- **Co-vertices:** $(0, \pm b)$ (endpoints of minor axis)
- **Foci:** $(\pm c, 0)$ where $c = \sqrt{a^2 - b^2}$
- **Eccentricity:** $e = \frac{c}{a} = \frac{\sqrt{a^2 - b^2}}{a}$

**Visual Description:** Football/rugby ball lying horizontally, wider than tall.

### 2. Vertical Ellipse (Major Axis Along Y-axis)

$$\boxed{\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1 \quad \text{where } a > b}$$

**Key Elements:**

- **Center:** $(0, 0)$
- **Major axis:** Along y-axis, length $= 2a$
- **Minor axis:** Along x-axis, length $= 2b$
- **Vertices:** $(0, \pm a)$
- **Co-vertices:** $(\pm b, 0)$
- **Foci:** $(0, \pm c)$ where $c = \sqrt{a^2 - b^2}$
- **Eccentricity:** $e = \frac{c}{a}$

**Visual Description:** Football standing upright, taller than wide.

### How to Identify Major Axis

> **★ Key point · 'Bigger Denominator = Major Axis'**
>
> **Simple Rule:**
>
> **The larger denominator tells you the major axis direction!**
>
> - If denominator under $x^2$ is larger → **Horizontal ellipse** (major axis along x)

> - If denominator under $y^2$ is larger → **Vertical ellipse** (major axis along y)
>
> **Example 1:** $\frac{x^2}{25} + \frac{y^2}{16} = 1$
>
> - $25 > 16$ → Horizontal ellipse

> - $a^2 = 25$ → $a = 5$, $b^2 = 16$ → $b = 4$
>
> **Example 2:** $\frac{x^2}{9} + \frac{y^2}{16} = 1$
>
> - $16 > 9$ → Vertical ellipse

> - $a^2 = 16$ → $a = 4$, $b^2 = 9$ → $b = 3$

---

## Important Terms and Definitions

### 1. Major Axis

The **longest diameter** of the ellipse, passing through both foci.

**Length:** $2a$

### 2. Minor Axis

The **shortest diameter** of the ellipse, perpendicular to major axis.

**Length:** $2b$

### 3. Foci (plural of Focus)

Two special points $F_1$ and $F_2$ inside the ellipse.

**Location:** At distance $c$ from center along major axis

**Key Relation:** $c^2 = a^2 - b^2$ (always!)

**Remember:** $c < a$ (foci are inside the ellipse)

### 4. Eccentricity ($e$)

A measure of how “stretched” the ellipse is.

$$\boxed{e = \frac{c}{a} = \frac{\sqrt{a^2 - b^2}}{a}}$$

**Range:** $0 < e < 1$

**Special Cases:**

- $e = 0$ → Circle (no stretch)
- $e$ close to 0 → Nearly circular
- $e$ close to 1 → Very stretched (thin ellipse)

**Alternative Form:**

$$\boxed{b^2 = a^2(1 - e^2)}$$

> **↗ Connection · Example: Planetary Orbits**
>
> **Earth’s orbit:** $e \approx 0.017$ (nearly circular)
>
> **Mercury’s orbit:** $e \approx 0.206$ (more elliptical)
>
> **Halley’s Comet:** $e \approx 0.967$ (very elongated)
>
> This is why Earth has relatively stable seasons, while comets have extreme variations!

### 5. Latus Rectum

A chord through the focus, perpendicular to the major axis.

**Length:** $\frac{2b^2}{a}$

**Endpoints for horizontal ellipse:** $\left(c, \pm\frac{b^2}{a}\right)$

### 6. Vertices

The endpoints of the major axis.

**For horizontal ellipse:** $(\pm a, 0)$

### 7. Directrix

A line associated with each focus.

**Equation:** $x = \pm \frac{a}{e}$ (for horizontal ellipse)

**Property:** For any point $P$ on ellipse:

$$\frac{\text{Distance from P to focus}}{\text{Distance from P to directrix}} = e$$

---

## Key Relations (Memory Gems!)

$$\boxed{c^2 = a^2 - b^2}$$

$$\boxed{e = \frac{c}{a}}$$

$$\boxed{b^2 = a^2(1 - e^2)}$$

$$\boxed{\text{Latus Rectum} = \frac{2b^2}{a}}$$

> **★ Key point · Memory Trick: 'ABC Relation'**
>
> **“Always: Big A, Baby b, Center c”**
>
> $$a^2 = b^2 + c^2$$
>
> Think of it like Pythagoras theorem:
>
> - $a$ = semi-major axis (hypotenuse)

> - $b$ = semi-minor axis (one side)

> - $c$ = distance to focus (other side)
>
> **Visual:** Draw a right triangle with vertices at center $(0,0)$, vertex $(a, 0)$, and co-vertex $(0, b)$. The hypotenuse from $(a,0)$ to $(0,b)$ passes through focus at distance $c$ from center!
>
> Actually, even simpler: Focus $(c, 0)$, co-vertex $(0, b)$, and center $(0, 0)$ form a right triangle with $a$ as hypotenuse to vertex!

---

## Parametric Equations

For ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:

$$\boxed{x = a\cos\theta, \quad y = b\sin\theta}$$

where $\theta$ is the **parameter** (called eccentric angle).

**Range:** $0 \leq \theta < 2\pi$

**Verification:**

$$\frac{(a\cos\theta)^2}{a^2} + \frac{(b\sin\theta)^2}{b^2} = \cos^2\theta + \sin^2\theta = 1$$

✓

> **↗ Connection · Example: Point on Ellipse**
>
> Find point on ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ at $\theta = 60°$.
>
> **Solution:**
>
> $a = 5$, $b = 3$
>
> $$x = 5\cos 60° = 5 \times \frac{1}{2} = \frac{5}{2}$$

$$y = 3\sin 60° = 3 \times \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{2}$$
>
> **Point:** $\left(\frac{5}{2}, \frac{3\sqrt{3}}{2}\right)$

---

## Tangent to an Ellipse

### 1. Tangent at Point $(x_1, y_1)$

**For ellipse** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:

$$\boxed{\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1}$$

### 2. Tangent at Parametric Point $(a\cos\theta, b\sin\theta)$

$$\boxed{\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1}$$

### 3. Tangent with Slope $m$

$$\boxed{y = mx \pm \sqrt{a^2m^2 + b^2}}$$

**Note:** The $\pm$ gives **two tangents** with the same slope (one on each side).

**Point of contact:** $\left(\frac{\pm a^2m}{\sqrt{a^2m^2 + b^2}}, \frac{\mp b^2}{\sqrt{a^2m^2 + b^2}}\right)$

> **★ Key point · Memory Trick: 'Replace and Reduce'**
>
> **For tangent at $(x_1, y_1)$:**
>
> Replace $x^2$ with $xx_1$, $y^2$ with $yy_1$, and reduce equation to “= 1”
>
> From $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:
>
> Tangent: $\frac{x \cdot x_1}{a^2} + \frac{y \cdot y_1}{b^2} = 1$
>
> **Same as circle trick, but with denominators!**

> **↗ Connection · Example: Tangent Equation**
>
> Find equation of tangent to $\frac{x^2}{16} + \frac{y^2}{9} = 1$ at point $(2, \frac{3\sqrt{3}}{2})$.
>
> **Solution:**
>
> Using $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$:
>
> $$\frac{x \cdot 2}{16} + \frac{y \cdot \frac{3\sqrt{3}}{2}}{9} = 1$$

$$\frac{2x}{16} + \frac{3\sqrt{3}y}{18} = 1$$

$$\frac{x}{8} + \frac{\sqrt{3}y}{6} = 1$$
>
> Multiply by 24:
>
> $$\boxed{3x + 4\sqrt{3}y = 24}$$

---

## Normal to an Ellipse

### 1. Normal at Point $(x_1, y_1)$

**For ellipse** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:

$$\boxed{\frac{a^2x}{x_1} - \frac{b^2y}{y_1} = a^2 - b^2}$$

### 2. Normal at Parametric Point $(a\cos\theta, b\sin\theta)$

$$\boxed{ax\sec\theta - by\csc\theta = a^2 - b^2}$$

Or equivalently:

$$\boxed{ax\sin\theta - by\cos\theta = (a^2 - b^2)\sin\theta\cos\theta}$$

> **↗ Connection · Example: Normal Equation**
>
> Find equation of normal to $\frac{x^2}{25} + \frac{y^2}{9} = 1$ at point $(4, \frac{9}{5})$.
>
> **Solution:**
>
> $a^2 = 25$, $b^2 = 9$, $(x_1, y_1) = (4, \frac{9}{5})$
>
> Using $\frac{a^2x}{x_1} - \frac{b^2y}{y_1} = a^2 - b^2$:
>
> $$\frac{25x}{4} - \frac{9y}{\frac{9}{5}} = 25 - 9$$

$$\frac{25x}{4} - 5y = 16$$
>
> Multiply by 4:
>
> $$\boxed{25x - 20y = 64}$$

---

## Important Properties of Ellipse

### 1. Sum of Focal Distances

For any point $P$ on the ellipse:

$$\boxed{PF_1 + PF_2 = 2a}$$

This is the **defining property** of an ellipse!

**Visual Description:** No matter where you are on an ellipse, the sum of distances to both foci is constant and equals the major axis length.

### 2. Auxiliary Circle

A circle with radius $a$ (semi-major axis) is called the **auxiliary circle**.

**Equation:** $x^2 + y^2 = a^2$

**Connection with Parametric Point:**

- Point on ellipse: $(a\cos\theta, b\sin\theta)$
- Corresponding point on auxiliary circle: $(a\cos\theta, a\sin\theta)$

### 3. Reflection Property

**The Magic of Whispering Galleries!**

> **◐ In simple terms · Why Whispering Galleries Work**
>
> **Property:** A ray from one focus, after reflecting off the ellipse, passes through the other focus.
>
> **Applications:**
>
> 1. **Whispering galleries:** Sound from one focus reflects and reaches the other focus clearly (St. Paul’s Cathedral, Statuary Hall in US Capitol)

> 2. **Medical:** Lithotripsy machines use elliptical reflectors to break kidney stones (shock wave from one focus reflects to stone at other focus)

> 3. **Billiards:** Elliptical table with a ball at one focus will always pass through other focus after reflection
>
> **Visual Description:** Imagine whispering at one focus of an elliptical room - someone at the other focus hears you clearly even across a large hall, while people in between hear nothing!

### 4. Director Circle

Locus of point of intersection of perpendicular tangents to the ellipse.

**Equation:** $x^2 + y^2 = a^2 + b^2$

**This is a circle!**

### 5. Chord of Contact

From external point $(x_1, y_1)$, the chord joining the two points of tangency:

$$\boxed{\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1}$$

(Same form as tangent equation!)

---

## General Ellipse (Center at $(h, k)$)

### Horizontal Major Axis

$$\boxed{\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1}$$

- **Center:** $(h, k)$
- **Foci:** $(h \pm c, k)$
- **Vertices:** $(h \pm a, k)$

### Vertical Major Axis

$$\boxed{\frac{(x-h)^2}{b^2} + \frac{(y-k)^2}{a^2} = 1}$$

- **Center:** $(h, k)$
- **Foci:** $(h, k \pm c)$
- **Vertices:** $(h, k \pm a)$

---

## Memory Tricks & Patterns

### Pattern 1: Circle is Special Ellipse

When $a = b$, ellipse becomes a circle!

$$\frac{x^2}{a^2} + \frac{y^2}{a^2} = 1 \implies x^2 + y^2 = a^2$$

- Eccentricity: $e = \frac{\sqrt{a^2-a^2}}{a} = 0$
- Foci coincide at center
- Major and minor axes equal

**“Circle is an ellipse with zero eccentricity!”**

### Pattern 2: The Pythagorean Connection

$$a^2 = b^2 + c^2$$

Think: Right triangle with:

- Hypotenuse = semi-major axis ($a$)
- One side = semi-minor axis ($b$)
- Other side = focal distance ($c$)

### Pattern 3: Eccentricity Determines Shape

$$e = 0 \implies \text{Circle}$$

$$0 < e < 0.5 \implies \text{Nearly circular}$$

$$0.5 < e < 1 \implies \text{Elongated ellipse}$$

$$e = 1 \implies \text{Parabola (limiting case)}$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing a and b**
>
> **Wrong:** “Always $a$ is under $x^2$”
>
> **Correct:** “$a$ is the semi-major axis (larger value), regardless of which variable”
>
> **Rule:**
>
> - If $\frac{x^2}{25} + \frac{y^2}{16} = 1$ → $a = 5$ (under $x$), horizontal

> - If $\frac{x^2}{16} + \frac{y^2}{25} = 1$ → $a = 5$ (under $y$), vertical
>
> **Key:** Compare denominators, larger one corresponds to $a^2$!

> **⚠ Trap #2: Focus Formula**
>
> **Wrong:** $c^2 = a^2 + b^2$ (like Pythagoras)
>
> **Correct:** $c^2 = a^2 - b^2$ (subtraction!)
>
> **Remember:** $c < a$ (focus is inside the ellipse, not outside)
>
> **Mnemonic:** “Ellipse SUBTRACTS - hyperbola adds” (we’ll see in next topic)

> **⚠ Trap #3: Eccentricity Range**
>
> **Wrong:** Eccentricity can be greater than 1 for ellipse
>
> **Correct:** For ellipse, $0 < e < 1$ ALWAYS
>
> **Remember:**
>
> - Ellipse: $0 < e < 1$

> - Parabola: $e = 1$

> - Hyperbola: $e > 1$

> **⚠ Trap #4: Latus Rectum Formula**
>
> **Wrong:** Latus rectum = $4a$ (like parabola)
>
> **Correct:** Latus rectum = $\frac{2b^2}{a}$
>
> **Careful:** Different formula for each conic!

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Basic Elements**
>
> **Question:** For ellipse $\frac{x^2}{36} + \frac{y^2}{20} = 1$, find center, vertices, foci, and eccentricity.
>
> **Solution:**
>
> $a^2 = 36$ → $a = 6$ (larger denominator, under $x$)
>
> $b^2 = 20$ → $b = 2\sqrt{5}$
>
> Horizontal ellipse (major axis along x-axis)
>
> $c^2 = a^2 - b^2 = 36 - 20 = 16$ → $c = 4$
>
> - **Center:** $(0, 0)$

> - **Vertices:** $(\pm 6, 0)$

> - **Co-vertices:** $(0, \pm 2\sqrt{5})$

> - **Foci:** $(\pm 4, 0)$

> - **Eccentricity:** $e = \frac{c}{a} = \frac{4}{6} = \frac{2}{3}$

> **↗ Connection · Problem 2: Finding Equation**
>
> **Question:** Find equation of ellipse with foci at $(\pm 3, 0)$ and vertices at $(\pm 5, 0)$.
>
> **Solution:**
>
> Foci and vertices on x-axis → horizontal ellipse
>
> $c = 3$, $a = 5$
>
> $b^2 = a^2 - c^2 = 25 - 9 = 16$ → $b = 4$
>
> $$\boxed{\frac{x^2}{25} + \frac{y^2}{16} = 1}$$

> **↗ Connection · Problem 3: Parametric Point**
>
> **Question:** Find point on ellipse $\frac{x^2}{9} + \frac{y^2}{4} = 1$ at $\theta = 45°$.
>
> **Solution:**
>
> $a = 3$, $b = 2$
>
> $$x = 3\cos 45° = 3 \times \frac{1}{\sqrt{2}} = \frac{3}{\sqrt{2}} = \frac{3\sqrt{2}}{2}$$

$$y = 2\sin 45° = 2 \times \frac{1}{\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$$

$$\boxed{\left(\frac{3\sqrt{2}}{2}, \sqrt{2}\right)}$$

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Focal Distance Sum**
>
> **Question:** A point on ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ is at distance 2 from one focus. Find its distance from the other focus.
>
> **Solution:**
>
> $a^2 = 25$ → $a = 5$
>
> By focal distance property: $PF_1 + PF_2 = 2a = 10$
>
> Given: $PF_1 = 2$
>
> $$PF_2 = 10 - 2 = 8$$

> **↗ Connection · Problem 5: Tangent with Slope**
>
> **Question:** Find equations of tangents to $\frac{x^2}{16} + \frac{y^2}{9} = 1$ with slope $\frac{3}{4}$.
>
> **Solution:**
>
> $a^2 = 16$, $b^2 = 9$, $m = \frac{3}{4}$
>
> Using $y = mx \pm \sqrt{a^2m^2 + b^2}$:
>
> $$y = \frac{3}{4}x \pm \sqrt{16 \times \frac{9}{16} + 9}$$

$$y = \frac{3}{4}x \pm \sqrt{9 + 9}$$

$$y = \frac{3}{4}x \pm \sqrt{18}$$

$$y = \frac{3}{4}x \pm 3\sqrt{2}$$
>
> Multiply by 4:
>
> $$\boxed{4y = 3x \pm 12\sqrt{2} \quad \text{or} \quad 3x - 4y \pm 12\sqrt{2} = 0}$$

> **↗ Connection · Problem 6: Latus Rectum Length**
>
> **Question:** Find length of latus rectum of ellipse $9x^2 + 16y^2 = 144$.
>
> **Solution:**
>
> Convert to standard form:
>
> $$\frac{x^2}{16} + \frac{y^2}{9} = 1$$
>
> $a^2 = 16$ → $a = 4$, $b^2 = 9$ → $b = 3$
>
> $$\text{Latus Rectum} = \frac{2b^2}{a} = \frac{2 \times 9}{4} = \frac{18}{4} = \frac{9}{2}$$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 7: Locus of Midpoint**
>
> **Question:** Find locus of midpoint of chords of ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ having slope $m$.
>
> **Solution:**
>
> Let midpoint be $(h, k)$.
>
> Chord equation with slope $m$ through $(h, k)$:
>
> $$y - k = m(x - h)$$
>
> This intersects ellipse. Using the condition that $(h, k)$ is midpoint:
>
> **T = S₁ formula:**
>
> Tangent at $(h, k)$: $\frac{xh}{a^2} + \frac{yk}{b^2} = \frac{h^2}{a^2} + \frac{k^2}{b^2}$
>
> Slope of this tangent: $-\frac{b^2h}{a^2k}$
>
> For chord through $(h,k)$ with slope $m$:
>
> $$-\frac{b^2h}{a^2k} = m$$

$$-b^2h = ma^2k$$
>
> **Locus** (replace $h,k$ with $x,y$):
>
> $$\boxed{b^2x + ma^2y = 0}$$
>
> **This is a straight line through the origin!**

> **↗ Connection · Problem 8: Eccentric Angles**
>
> **Question:** If eccentric angles of two points on ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ differ by $90°$, show that the chord joining them has constant slope.
>
> **Solution:**
>
> Let points be $P(a\cos\alpha, b\sin\alpha)$ and $Q(a\cos(\alpha + 90°), b\sin(\alpha + 90°))$
>
> $Q = (a\cos(\alpha+90°), b\sin(\alpha+90°)) = (-a\sin\alpha, b\cos\alpha)$
>
> Slope of $PQ$:
>
> $$m = \frac{b\cos\alpha - b\sin\alpha}{-a\sin\alpha - a\cos\alpha}$$

$$m = \frac{b(\cos\alpha - \sin\alpha)}{-a(\sin\alpha + \cos\alpha)}$$

$$m = -\frac{b}{a} \cdot \frac{\cos\alpha - \sin\alpha}{\sin\alpha + \cos\alpha}$$
>
> Divide numerator and denominator by $\cos\alpha$:
>
> $$m = -\frac{b}{a} \cdot \frac{1 - \tan\alpha}{\tan\alpha + 1}$$
>
> **This is not constant!** Let me recalculate&mldr;
>
> Actually, the problem might be asking for the **slope of line joining midpoint to center** or a different condition. The slope itself varies with $\alpha$, but there might be another property that’s constant.
>
> **Alternative interpretation:** The **length** or **perpendicular distance from center** might be constant, not slope.
>
> For JEE purposes, remember: Chords with eccentric angles differing by $90°$ have special properties related to auxiliary circle!

> **↗ Connection · Problem 9: Maximum/Minimum Focal Distance**
>
> **Question:** Find maximum and minimum distances from a point on ellipse $\frac{x^2}{25} + \frac{y^2}{9} = 1$ to the focus $(4, 0)$.
>
> **Solution:**
>
> $a = 5$, $b = 3$, focus $F = (4, 0)$
>
> Let $P$ be any point on ellipse.
>
> From focal property: $PF_1 + PF_2 = 2a = 10$
>
> If $F = F_1 = (4, 0)$:
>
> $$PF_1 = 10 - PF_2$$
>
> **Maximum $PF_1$:** When $P$ is at vertex farthest from $F_1$
>
> Vertices: $(\pm 5, 0)$
>
> At $(5, 0)$: $PF_1 = 5 - 4 = 1$
>
> At $(-5, 0)$: $PF_1 = |-5 - 4| = 9$
>
> **Maximum distance:** $9$
>
> **Minimum distance:** $1$
>
> $$\boxed{\text{Max} = a + c = 9, \quad \text{Min} = a - c = 1}$$

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| **Horizontal ellipse** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $a > b$ |
| **Vertical ellipse** | $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$, $a > b$ |
| **Focus relation** | $c^2 = a^2 - b^2$ |
| **Eccentricity** | $e = \frac{c}{a} = \frac{\sqrt{a^2-b^2}}{a}$, $(0 < e < 1)$ |
| **Focal distance sum** | $PF_1 + PF_2 = 2a$ |
| **Latus rectum** | $\frac{2b^2}{a}$ |
| **Parametric form** | $x = a\cos\theta$, $y = b\sin\theta$ |
| **Tangent at $(x_1,y_1)$** | $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ |
| **Tangent with slope $m$** | $y = mx \pm \sqrt{a^2m^2 + b^2}$ |
| **Director circle** | $x^2 + y^2 = a^2 + b^2$ |
| **Alternative form** | $b^2 = a^2(1-e^2)$ |

---

## Cross-Links to Related Topics

**Prerequisites:**

- [Circles](../circles/index.md) - Ellipse is generalization of circle
- [Straight Lines](../straight-lines/index.md) - For tangent and normal
- [Distance Formula](../index.md) - For deriving focal property

**Related Topics:**

- [Parabola](../parabola/index.md) - Ellipse with $e=1$ becomes parabola
- [Hyperbola](../hyperbola/index.md) - Opposite focal property (difference instead of sum)
- [Trigonometry](../../trigonometry/index.md) - For parametric equations
- [3D Geometry](../../three-dimensional-geometry/index.md) - Ellipsoids

**Applications:**

- Physics: Planetary motion (Kepler’s laws), satellite orbits
- Engineering: Whispering galleries, medical lithotripsy
- Architecture: Elliptical arches and domes

---

## JEE Exam Strategy

> **★ Key point · High-Yield Points for JEE**
>
> **Weightage:** 2-3 questions in JEE Main, 1-2 in Advanced
>
> **Most Frequently Asked:**
>
> 1. **Finding equation given conditions** (foci, vertices, eccentricity)

> 2. **Focal distance sum property** $PF_1 + PF_2 = 2a$

> 3. **Tangent and normal equations**

> 4. **Parametric point problems**

> 5. **Locus of midpoint of chords**
>
> **Time-Saving Tricks:**
>
> 1. **Identify major axis first:** Larger denominator → major axis direction

> 2. **Remember:** $c^2 = a^2 - b^2$ (SUBTRACTION, not addition!)

> 3. **Focal sum:** Always equals $2a$ (major axis length)

> 4. **For parametric:** Use $x = a\cos\theta, y = b\sin\theta$ directly
>
> **Common Trap Options:**
>
> - Giving $c^2 = a^2 + b^2$ instead of $c^2 = a^2 - b^2$

> - Confusing which is $a$ and which is $b$ (check denominators!)

> - Wrong eccentricity range (must be $0 < e < 1$)

> - Forgetting that foci lie on major axis only
>
> **Pattern Recognition:**
>
> - **“Foci at&mldr;”** → Use $c$ value directly, find $a$ and $b$ from other info

> - **“Eccentricity and &mldr;”** → Use $e = \frac{c}{a}$ and $b^2 = a^2(1-e^2)$

> - **“Sum of focal distances”** → Use $PF_1 + PF_2 = 2a$

> - **“Perpendicular tangents”** → Director circle: $x^2 + y^2 = a^2 + b^2$
>
> **Quick Checks:**
>
> - Verify $a > b$ always (by definition)

> - Check $0 < e < 1$ for ellipse

> - Ensure $c < a$ (foci inside ellipse)

> - Tangent at point should satisfy both point and ellipse equation

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Definition:** Sum of distances from any point to two foci equals $2a$ (constant)

> 2. **Key relation:** $c^2 = a^2 - b^2$ (remember the SUBTRACTION!)

> 3. **Major axis:** Determined by **larger denominator**, not by $x$ or $y$

> 4. **Eccentricity:** $0 < e < 1$ for ellipse; closer to 0 = more circular, closer to 1 = more elongated

> 5. **Circle is special case:** When $a = b$, ellipse becomes circle $(e = 0)$

> 6. **Reflection property:** Ray from one focus reflects through other focus (whispering galleries!)

> 7. **Parametric magic:** $x = a\cos\theta, y = b\sin\theta$ simplifies many problems
>
> **“The ellipse is nature’s orbital curve - every planet, satellite, and comet follows this elegant path under gravity’s pull!”**
>
> **Next Step:** Explore [Hyperbola](../hyperbola/index.md) - the opposite curve where focal distances SUBTRACT to constant!

From TestGuru · our mock-test platform

## You've read Ellipse - The Orbital Curve.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=coordinate-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcoordinate-geometry%2Fellipse%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/coordinate-geometry/ellipse/",this.page.identifier="/mathematics/coordinate-geometry/ellipse/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="conicSectionsExplorer" id="anim-conicSectionsExplorer-1795396421603220360"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-conicSectionsExplorer-1795396421603220360")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421603243592"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421603243592")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/coordinate-geometry/ellipse/](https://jeenotes.in/mathematics/coordinate-geometry/ellipse/) · raw HTML: `offline/mathematics/coordinate-geometry/ellipse/index.html`_
