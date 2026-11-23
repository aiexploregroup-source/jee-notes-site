---
title: "Circles - Perfect Curves in Coordinate Geometry"
source: "https://jeenotes.in/mathematics/coordinate-geometry/circles/"
description: "Master circle equations, tangent and normal lines, chord properties, and parametric forms for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "18 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 10"
html: "../../../../offline/mathematics/coordinate-geometry/circles/index.html"
extracted: "2026-11-23"
---

> Master circle equations, tangent and normal lines, chord properties, and parametric forms for JEE Main and Advanced

## The Hook: The Circular World Around Us

> **★ Key point · Connect: Real Life → Mathematics**
>
> Look around you right now:
>
> - The clock on your wall showing time in a **circular** path

> - Your coffee mug with a **circular** rim

> - Wheels of vehicles, steering wheels, satellite dishes, Ferris wheels
>
> **From “Pathaan’s” Car Chase:** When Shah Rukh Khan drifts a car around a circular curve, the physics involves circular motion. But how do we describe that circular path mathematically?
>
> **The Question:** How do we write the equation of a circle? How do engineers calculate where a road should be tangent to a circular roundabout?
>
> **JEE Impact:** Circles appear in **4-5 questions** every year in JEE Main and 2-3 in Advanced. This is one of the highest-weightage topics in coordinate geometry!

---

## The Core Concept

A **circle** is the set of all points at a fixed distance (radius) from a fixed point (center).

### The Big Idea

> **◐ In simple terms · Understanding Circles**
>
> Think of drawing a circle with a compass:
>
> - You fix the pointed end at one location (**center**)

> - The pencil traces all points at the same distance (**radius**)
>
> **In coordinates:** If center is $(h, k)$ and radius is $r$, then for any point $(x, y)$ on the circle:
>
> $$\text{Distance from }(x,y)\text{ to }(h,k) = r$$
>
> This simple idea gives us the circle equation!

---

## Interactive Demo: Explore Circle Equations

Plot different circle equations and see how changing the center $(h, k)$ and radius $r$ affects the graph! Try circles like $(x-2)^2 + (y-3)^2 = 25$ to visualize.

---

## Standard Form of Circle

$$\boxed{(x - h)^2 + (y - k)^2 = r^2}$$

**Where:**

- **$(h, k)$ = center** of the circle
- **$r$ = radius** of the circle

**Special Case - Circle at Origin:**

$$\boxed{x^2 + y^2 = r^2}$$

Center: $(0, 0)$, Radius: $r$

> **↗ Connection · Example: Ferris Wheel**
>
> A Ferris wheel has its center at point $(3, 4)$ and radius $5$ meters. What’s its equation?
>
> **Solution:**
>
> $$(x - 3)^2 + (y - 4)^2 = 25$$
>
> To check if a cabin at $(6, 8)$ is on the wheel:
>
> $$(6-3)^2 + (8-4)^2 = 9 + 16 = 25$$
>
> ✓ **Yes, it’s on the circle!**

---

## General Form of Circle

$$\boxed{x^2 + y^2 + 2gx + 2fy + c = 0}$$

**Where:**

- **Center:** $(-g, -f)$
- **Radius:** $r = \sqrt{g^2 + f^2 - c}$

> **⚠ Trap · Condition for Real Circle**
>
> For a real circle to exist:
>
> $$\boxed{g^2 + f^2 - c > 0}$$
>
> - If $g^2 + f^2 - c = 0$ → **Point circle** (radius = 0)

> - If $g^2 + f^2 - c < 0$ → **Imaginary circle** (doesn’t exist in real plane)

### Converting Between Forms

**Standard to General:**

$(x-h)^2 + (y-k)^2 = r^2$

Expand: $x^2 - 2hx + h^2 + y^2 - 2ky + k^2 = r^2$

Rearrange: $x^2 + y^2 - 2hx - 2ky + (h^2 + k^2 - r^2) = 0$

Compare: $g = -h$, $f = -k$, $c = h^2 + k^2 - r^2$

**General to Standard:**

From $x^2 + y^2 + 2gx + 2fy + c = 0$:

Complete the square:

$$(x+g)^2 - g^2 + (y+f)^2 - f^2 + c = 0$$

$$(x+g)^2 + (y+f)^2 = g^2 + f^2 - c$$

Center: $(-g, -f)$, Radius: $\sqrt{g^2 + f^2 - c}$

> **★ Key point · Memory Trick: 'Going' to the Center**
>
> **“Go (g) and Find (f) the Center with MINUS”**
>
> In $x^2 + y^2 + 2gx + 2fy + c = 0$:
>
> Center = $(-g, -f)$ ← Notice the minus signs!
>
> **Why “2g” and “2f”?** So that when we complete the square, we get nice expressions without fractions.

---

## Equation of Circle from Different Conditions

### 1. Circle with Given Center and Radius

**Given:** Center $(h, k)$ and radius $r$

**Equation:** $(x-h)^2 + (y-k)^2 = r^2$

### 2. Circle with Given Center, Passing Through a Point

**Given:** Center $(h, k)$ and point $(x_1, y_1)$ on circle

**Equation:** $(x-h)^2 + (y-k)^2 = (x_1-h)^2 + (y_1-k)^2$

(Right side calculates radius squared)

### 3. Circle with Diameter Endpoints

**Given:** Diameter has endpoints $(x_1, y_1)$ and $(x_2, y_2)$

**Equation:**

$$\boxed{(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0}$$

**Visual Description:** If you know the two ends of a diameter, any point on the circle makes a right angle with those endpoints (angle in semicircle = 90°).

> **↗ Connection · Example: Diameter Form**
>
> Find equation of circle with diameter endpoints $(1, 2)$ and $(3, 4)$.
>
> **Solution:**
>
> $$(x-1)(x-3) + (y-2)(y-4) = 0$$

$$x^2 - 4x + 3 + y^2 - 6y + 8 = 0$$

$$\boxed{x^2 + y^2 - 4x - 6y + 11 = 0}$$

### 4. Circle Through Three Points

**Given:** Three non-collinear points $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$

**Method:**

1. Assume general form: $x^2 + y^2 + 2gx + 2fy + c = 0$
2. Substitute all three points to get three equations
3. Solve for $g$, $f$, and $c$

**JEE Trick:** Use determinant method or family of circles (more efficient!)

---

## Parametric Equations of Circle

For circle $x^2 + y^2 = r^2$:

$$\boxed{x = r\cos\theta, \quad y = r\sin\theta}$$

where $\theta$ is the **parameter** (angle from positive x-axis).

For general circle $(x-h)^2 + (y-k)^2 = r^2$:

$$\boxed{x = h + r\cos\theta, \quad y = k + r\sin\theta}$$

**Visual Description:** As $\theta$ varies from $0$ to $2\pi$, the point $(x, y)$ traces the complete circle once.

**Why Parametric?** Useful for:

- Finding coordinates of any point on circle
- Solving problems involving motion on circular paths
- Simplifying integration problems

> **↗ Connection · Example: Point on Circle**
>
> Find a point on circle $x^2 + y^2 = 25$ at angle $60°$ from x-axis.
>
> **Solution:**
>
> Radius $r = 5$, $\theta = 60°$
>
> $$x = 5\cos 60° = 5 \times \frac{1}{2} = \frac{5}{2}$$

$$y = 5\sin 60° = 5 \times \frac{\sqrt{3}}{2} = \frac{5\sqrt{3}}{2}$$
>
> **Point:** $\left(\frac{5}{2}, \frac{5\sqrt{3}}{2}\right)$

---

## Tangent to a Circle

A **tangent** is a line that touches the circle at exactly one point.

**Visual Description:** Think of a wheel touching the road - the road is tangent to the wheel, touching at one point.

### Equation of Tangent at Point $(x_1, y_1)$

**For circle** $x^2 + y^2 = r^2$:

$$\boxed{xx_1 + yy_1 = r^2}$$

**For circle** $(x-h)^2 + (y-k)^2 = r^2$:

$$\boxed{(x-h)(x_1-h) + (y-k)(y_1-k) = r^2}$$

**For general circle** $x^2 + y^2 + 2gx + 2fy + c = 0$:

$$\boxed{xx_1 + yy_1 + g(x+x_1) + f(y+y_1) + c = 0}$$

> **★ Key point · Memory Trick: 'Replace Squares with Products'**
>
> **“Square becomes Product, Single stays Single”**
>
> To get tangent at $(x_1, y_1)$:
>
> - $x^2$ becomes $xx_1$

> - $y^2$ becomes $yy_1$

> - $x$ becomes $\frac{x+x_1}{2}$ (or write as $x$ in numerator, $x_1$ in position)

> - $y$ becomes $\frac{y+y_1}{2}$

> - Constant stays same
>
> **Example:** For $x^2 + y^2 = 25$, tangent at $(3,4)$:
>
> $x(3) + y(4) = 25$ → $3x + 4y = 25$

### Tangent with Given Slope

Equation of tangent to circle $x^2 + y^2 = r^2$ with slope $m$:

$$\boxed{y = mx \pm r\sqrt{1 + m^2}}$$

**Note:** The $\pm$ gives **two tangents** (one on each side of circle) with the same slope.

**For general circle** $(x-h)^2 + (y-k)^2 = r^2$:

$$\boxed{y - k = m(x - h) \pm r\sqrt{1 + m^2}}$$

> **↗ Connection · Example: Parallel Tangents**
>
> Find equations of tangents to $x^2 + y^2 = 25$ parallel to line $3x + 4y = 0$.
>
> **Solution:**
>
> Slope of given line: $m = -\frac{3}{4}$
>
> Tangents with this slope:
>
> $$y = -\frac{3}{4}x \pm 5\sqrt{1 + \frac{9}{16}}$$

$$y = -\frac{3}{4}x \pm 5\sqrt{\frac{25}{16}}$$

$$y = -\frac{3}{4}x \pm \frac{25}{4}$$
>
> Multiply by 4:
>
> $$4y = -3x \pm 25$$

$$\boxed{3x + 4y = 25 \quad \text{and} \quad 3x + 4y = -25}$$

### Length of Tangent from External Point

Length of tangent from point $(x_1, y_1)$ to circle $x^2 + y^2 + 2gx + 2fy + c = 0$:

$$\boxed{L = \sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}}$$

**In simple terms:** “Just substitute the point coordinates in the circle equation and take square root”

**Visual Description:** If you stand outside a circular pond and stretch ropes to touch it tangentially, the length of each rope is given by this formula.

> **↗ Connection · Example: Tangent Length**
>
> Find length of tangent from $(5, 1)$ to circle $x^2 + y^2 + 4x - 6y - 3 = 0$.
>
> **Solution:**
>
> $$L = \sqrt{5^2 + 1^2 + 4(5) - 6(1) - 3}$$

$$L = \sqrt{25 + 1 + 20 - 6 - 3}$$

$$L = \sqrt{37}$$

---

## Normal to a Circle

A **normal** is a line perpendicular to the tangent at the point of contact.

**Key Property:** The normal to a circle **always passes through the center**.

**Visual Description:** If a wheel is on the road, the normal is the spoke from the point touching the road to the center of the wheel.

### Equation of Normal at Point $(x_1, y_1)$

**For circle** $x^2 + y^2 = r^2$:

$$\boxed{\frac{x}{x_1} = \frac{y}{y_1}}$$

or

$$\boxed{xy_1 - yx_1 = 0}$$

**For general circle with center** $(h, k)$:

The normal passes through $(x_1, y_1)$ and $(h, k)$:

$$\boxed{\frac{y - y_1}{x - x_1} = \frac{y_1 - k}{x_1 - h}}$$

**Shortcut:** Since normal passes through center, use two-point form of straight line!

---

## Chord Properties

### 1. Equation of Chord

**Chord with midpoint** $(x_1, y_1)$ for circle $x^2 + y^2 = r^2$:

$$\boxed{xx_1 + yy_1 = x_1^2 + y_1^2}$$

(This is called **chord of contact formula** when applied differently)

### 2. Length of Chord

For chord at perpendicular distance $d$ from center of circle with radius $r$:

$$\boxed{L = 2\sqrt{r^2 - d^2}}$$

**Visual Description:** This is just the Pythagorean theorem! Half the chord, the perpendicular from center, and the radius form a right triangle.

> **↗ Connection · Example: Chord Length**
>
> Find length of chord of circle $x^2 + y^2 = 25$ at distance $3$ from center.
>
> **Solution:**
>
> Radius $r = 5$, distance $d = 3$
>
> $$L = 2\sqrt{5^2 - 3^2} = 2\sqrt{25 - 9} = 2\sqrt{16} = 2 \times 4 = 8$$

### 3. Chord of Contact

**From external point** $(x_1, y_1)$, draw tangents to circle. The chord joining the two points of contact is called **chord of contact**.

**Equation** for circle $x^2 + y^2 = r^2$:

$$\boxed{xx_1 + yy_1 = r^2}$$

**For general circle** $x^2 + y^2 + 2gx + 2fy + c = 0$:

$$\boxed{xx_1 + yy_1 + g(x+x_1) + f(y+y_1) + c = 0}$$

**Visual Description:** Stand outside a circular pond and throw two ropes to touch it tangentially. The chord of contact is the line joining those two touching points.

---

## Position of Point Relative to Circle

For circle $x^2 + y^2 + 2gx + 2fy + c = 0$ and point $(x_1, y_1)$:

Let $S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$

- If $S_1 > 0$ → Point is **outside** the circle
- If $S_1 = 0$ → Point is **on** the circle
- If $S_1 < 0$ → Point is **inside** the circle

**Why?** Compare $S_1$ with radius squared!

---

## Family of Circles

### 1. Concentric Circles

Circles with **same center but different radii**:

If $x^2 + y^2 + 2gx + 2fy + c = 0$ is given, family of concentric circles:

$$\boxed{x^2 + y^2 + 2gx + 2fy + k = 0}$$

(Same $g$ and $f$, vary $k$)

### 2. Circles Through Intersection

Circles passing through intersection points of circles $S_1 = 0$ and $S_2 = 0$:

$$\boxed{S_1 + \lambda S_2 = 0}$$

or

$$\boxed{x^2 + y^2 + 2gx + 2fy + c + \lambda(x^2 + y^2 + 2g'x + 2f'y + c') = 0}$$

**Special Case:** If $\lambda = -1$, we get the **radical axis** (common chord):

$$\boxed{S_1 - S_2 = 0}$$

This is a **straight line**!

> **↗ Connection · Example: Radical Axis**
>
> Find radical axis of circles $x^2 + y^2 - 4x - 6y + 9 = 0$ and $x^2 + y^2 - 2x - 4y + 3 = 0$.
>
> **Solution:**
>
> $S_1 - S_2 = 0$:
>
> $$(x^2 + y^2 - 4x - 6y + 9) - (x^2 + y^2 - 2x - 4y + 3) = 0$$

$$-4x - 6y + 9 + 2x + 4y - 3 = 0$$

$$\boxed{-2x - 2y + 6 = 0 \quad \text{or} \quad x + y = 3}$$

---

## Memory Tricks & Patterns

### Pattern 1: Tangent Formula

> **★ Key point · 'T' for Tangent - Think 'Transform'**
>
> **Transform the circle equation by replacing:**
>
> | In Circle Equation | In Tangent at $(x_1, y_1)$ |

> | --- | --- |

> | $x^2$ | $xx_1$ |

> | $y^2$ | $yy_1$ |

> | $x$ | $\frac{x + x_1}{2}$ |

> | $y$ | $\frac{y + y_1}{2}$ |
>
> **Example:** $x^2 + y^2 - 6x + 4y - 12 = 0$ at point $(1, 1)$
>
> Tangent: $x(1) + y(1) - 3(x+1) + 2(y+1) - 12 = 0$
>
> Simplify: $x + y - 3x - 3 + 2y + 2 - 12 = 0$
>
> $$\boxed{-2x + 3y - 13 = 0}$$

### Pattern 2: Normal Always Passes Through Center

**“Normal is NO-PROBLEM - it always goes through center!”**

To write normal equation:

1. Find center of circle
2. Use two-point form with given point and center

### Pattern 3: Chord Length Formula

**“Right triangle: Half-chord, Perpendicular, Radius”**

$$r^2 = \left(\frac{L}{2}\right)^2 + d^2$$

where $L$ = chord length, $d$ = perpendicular distance, $r$ = radius

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Tangent and Chord of Contact**
>
> **Tangent at a point** $(x_1, y_1)$ **on the circle**:
>
> $$xx_1 + yy_1 = r^2$$
>
> **Chord of contact from external point** $(x_1, y_1)$:
>
> $$xx_1 + yy_1 = r^2$$
>
> (same formula!)
>
> **Difference:**
>
> - For tangent: $(x_1, y_1)$ is **on** the circle

> - For chord of contact: $(x_1, y_1)$ is **outside** the circle
>
> The formula looks same, but context differs!

> **⚠ Trap #2: Radius Formula from General Form**
>
> **Wrong:** $r = \sqrt{g + f - c}$
>
> **Correct:** $r = \sqrt{g^2 + f^2 - c}$
>
> **Remember:** It’s $g$ **squared** plus $f$ **squared**, not just $g + f$!

> **⚠ Trap #3: Center Sign Error**
>
> In $x^2 + y^2 + 2gx + 2fy + c = 0$:
>
> **Wrong:** Center = $(g, f)$
>
> **Correct:** Center = $(-g, -f)$
>
> **Memory:** “Go and Find with MINUS signs!”

> **⚠ Trap #4: Tangent from External Point**
>
> Students often confuse “tangent **at** a point” with “tangent **from** a point”:
>
> - **At a point on circle:** Use tangent formula directly

> - **From external point:** Two tangents exist, use $y = mx \pm r\sqrt{1+m^2}$ or chord of contact
>
> **Check:** Is the point on the circle or outside? This determines which method to use.

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Finding Center and Radius**
>
> **Question:** Find center and radius of circle $x^2 + y^2 - 6x + 4y - 12 = 0$.
>
> **Solution:**
>
> General form: $x^2 + y^2 + 2gx + 2fy + c = 0$
>
> Comparing: $2g = -6$ → $g = -3$
>
> $2f = 4$ → $f = 2$
>
> $c = -12$
>
> **Center:** $(-g, -f) = (3, -2)$
>
> **Radius:** $r = \sqrt{g^2 + f^2 - c} = \sqrt{9 + 4 + 12} = \sqrt{25} = 5$
>
> $$\boxed{\text{Center: }(3, -2), \quad \text{Radius: } 5}$$

> **↗ Connection · Problem 2: Circle from Diameter**
>
> **Question:** Find equation of circle with diameter endpoints $(2, 3)$ and $(4, 5)$.
>
> **Solution:**
>
> Using diameter form:
>
> $$(x - 2)(x - 4) + (y - 3)(y - 5) = 0$$

$$x^2 - 6x + 8 + y^2 - 8y + 15 = 0$$

$$\boxed{x^2 + y^2 - 6x - 8y + 23 = 0}$$
>
> **Verification:**

> Center = midpoint = $\left(\frac{2+4}{2}, \frac{3+5}{2}\right) = (3, 4)$
>
> From general form: $g = -3$, $f = -4$ → Center $= (3, 4)$ ✓

> **↗ Connection · Problem 3: Tangent at a Point**
>
> **Question:** Find equation of tangent to $x^2 + y^2 = 25$ at point $(3, 4)$.
>
> **Solution:**
>
> Using tangent formula $xx_1 + yy_1 = r^2$:
>
> $$x(3) + y(4) = 25$$

$$\boxed{3x + 4y = 25}$$
>
> **Verification:** Check if $(3,4)$ satisfies circle: $9 + 16 = 25$ ✓

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Position of Point**
>
> **Question:** Determine if point $(2, 3)$ lies inside, on, or outside the circle $x^2 + y^2 - 4x - 6y + 9 = 0$.
>
> **Solution:**
>
> Calculate $S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$
>
> Here: $2g = -4$, $2f = -6$, $c = 9$
>
> $$S_1 = 2^2 + 3^2 - 4(2) - 6(3) + 9$$

$$S_1 = 4 + 9 - 8 - 18 + 9 = -4$$
>
> Since $S_1 < 0$:
>
> $$\boxed{\text{Point lies INSIDE the circle}}$$

> **↗ Connection · Problem 5: Circle Through Three Points**
>
> **Question:** Find equation of circle passing through $(0, 0)$, $(a, 0)$, and $(0, b)$.
>
> **Solution:**
>
> Assume $x^2 + y^2 + 2gx + 2fy + c = 0$
>
> **At** $(0, 0)$: $c = 0$
>
> **At** $(a, 0)$: $a^2 + 2ga = 0$ → $a(a + 2g) = 0$ → $g = -\frac{a}{2}$
>
> **At** $(0, b)$: $b^2 + 2fb = 0$ → $b(b + 2f) = 0$ → $f = -\frac{b}{2}$
>
> Equation: $x^2 + y^2 - ax - by = 0$
>
> Multiply by appropriate factor to clear fractions:
>
> $$\boxed{x^2 + y^2 - ax - by = 0}$$
>
> **Note:** This can also be solved using diameter form since $(0,0)$ and center make special geometry.

> **↗ Connection · Problem 6: Chord of Contact**
>
> **Question:** Find equation of chord of contact of tangents drawn from $(5, 4)$ to circle $x^2 + y^2 = 16$.
>
> **Solution:**
>
> Using chord of contact formula $xx_1 + yy_1 = r^2$:
>
> $$x(5) + y(4) = 16$$

$$\boxed{5x + 4y = 16}$$
>
> **Note:** Point $(5, 4)$ is outside since $25 + 16 = 41 > 16$.

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 7: Family of Circles**
>
> **Question:** Find equation of circle passing through intersection of circles $x^2 + y^2 = 4$ and $x^2 + y^2 - 2x - 4y + 4 = 0$, and also passing through origin.
>
> **Solution:**
>
> Family through intersection:
>
> $$S_1 + \lambda S_2 = 0$$

$$(x^2 + y^2 - 4) + \lambda(x^2 + y^2 - 2x - 4y + 4) = 0$$
>
> Since it passes through origin $(0, 0)$:
>
> $$-4 + \lambda(4) = 0$$

$$\lambda = 1$$
>
> Circle equation:
>
> $$(x^2 + y^2 - 4) + (x^2 + y^2 - 2x - 4y + 4) = 0$$

$$2x^2 + 2y^2 - 2x - 4y = 0$$

$$\boxed{x^2 + y^2 - x - 2y = 0}$$

> **↗ Connection · Problem 8: Orthogonal Circles**
>
> **Question:** Find $k$ if circles $x^2 + y^2 + 2x + 3y + k = 0$ and $x^2 + y^2 + 4x + y + 1 = 0$ are orthogonal.
>
> **Solution:**
>
> Two circles are orthogonal if they intersect at right angles.
>
> **Condition:** $2g_1g_2 + 2f_1f_2 = c_1 + c_2$
>
> Circle 1: $g_1 = 1$, $f_1 = \frac{3}{2}$, $c_1 = k$
>
> Circle 2: $g_2 = 2$, $f_2 = \frac{1}{2}$, $c_2 = 1$
>
> $$2(1)(2) + 2\left(\frac{3}{2}\right)\left(\frac{1}{2}\right) = k + 1$$

$$4 + \frac{3}{2} = k + 1$$

$$\frac{11}{2} = k + 1$$

$$\boxed{k = \frac{9}{2}}$$

> **↗ Connection · Problem 9: Director Circle**
>
> **Question:** Find the locus of point of intersection of perpendicular tangents to circle $x^2 + y^2 = a^2$.
>
> **Solution:**
>
> Let $(h, k)$ be the point from which perpendicular tangents are drawn.
>
> Tangents from $(h, k)$ to circle $x^2 + y^2 = a^2$ have equations:
>
> Using slope form, if slopes are $m_1$ and $m_2$:
>
> $$k = m_1 h \pm a\sqrt{1 + m_1^2}$$

$$k = m_2 h \pm a\sqrt{1 + m_2^2}$$
>
> For perpendicular tangents: $m_1 m_2 = -1$
>
> After algebraic manipulation (using condition that both equations are satisfied):
>
> The locus is a circle with **double the radius**:
>
> $$\boxed{x^2 + y^2 = 2a^2}$$
>
> **This is called the Director Circle.**
>
> **Replace** $(h,k)$ with $(x,y)$ for final answer.

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| **Standard form** | $(x-h)^2 + (y-k)^2 = r^2$ |
| **General form** | $x^2 + y^2 + 2gx + 2fy + c = 0$ |
| **Center from general** | $(-g, -f)$ |
| **Radius from general** | $\sqrt{g^2 + f^2 - c}$ |
| **Tangent at $(x_1,y_1)$** | $xx_1 + yy_1 = r^2$ |
| **Normal at point** | Passes through center |
| **Chord of contact** | $xx_1 + yy_1 = r^2$ (external point) |
| **Length of tangent** | $\sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}$ |
| **Chord length** | $2\sqrt{r^2 - d^2}$ |
| **Radical axis** | $S_1 - S_2 = 0$ |
| **Parametric form** | $x = h + r\cos\theta$, $y = k + r\sin\theta$ |

---

## Cross-Links to Related Topics

**Prerequisites:**

- [Straight Lines](../straight-lines/index.md) - For tangent and normal equations
- [Trigonometric Identities](../../trigonometry/trig-identities/index.md) - For parametric equations

**Related Topics:**

- [Parabola](../parabola/index.md) - Next conic section
- [Ellipse](../ellipse/index.md) - Circle is special case ($a = b$)
- [Hyperbola](../hyperbola/index.md) - Another conic section
- [General Conics](../conic-general/index.md) - Unified conic approach
- [Tangent and Normal to Conics](../tangent-normal-conics/index.md) - Tangent techniques
- [Chord of Contact](../chord-contact/index.md) - Chord properties
- [3D Coordinates](../../three-dimensional-geometry/3d-coordinates/index.md) - Spheres are 3D circles

**Applications in Physics:**

- [Circular Motion](../../../physics/kinematics/circular-motion/index.md) - Motion on circular paths
- [Gravitation](../../../physics/gravitation/index.md) - Planetary orbits

**Applications in Math:**

- [Complex Numbers - Argand Diagram](../../complex-numbers/argand-diagram/index.md) - Circle in complex plane

---

## JEE Exam Strategy

> **★ Key point · High-Yield Points for JEE**
>
> **Weightage:** 4-5 questions in JEE Main, 2-3 in Advanced
>
> **Most Frequently Asked:**
>
> 1. Equation of tangent/normal (appears almost every year)

> 2. Chord of contact and length of tangent

> 3. Family of circles through intersection

> 4. Position of point (inside/outside/on circle)

> 5. Orthogonal circles
>
> **Time-Saving Tricks:**
>
> 1. **Tangent formula:** Just replace $x^2$ with $xx_1$, $y^2$ with $yy_1$

> 2. **Normal:** Always passes through center - use two-point form

> 3. **Check position quickly:** Substitute point in $x^2 + y^2 + 2gx + 2fy + c$ and check sign
>
> **Common Trap Options:**
>
> - Giving center as $(g, f)$ instead of $(-g, -f)$

> - Missing the square in radius formula: $\sqrt{g^2 + f^2 - c}$

> - Confusing tangent at point vs chord of contact from external point

> - Wrong sign in diameter form
>
> **Pattern Recognition:**
>
> - If problem gives “tangents are perpendicular” → Use director circle

> - If “two circles intersect orthogonally” → Use $2g_1g_2 + 2f_1f_2 = c_1 + c_2$

> - If “find equation through three points” → Use family of circles (faster than solving three equations)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Master the tangent formula** - Replace squares with products: $x^2 \to xx_1$, $y^2 \to yy_1$

> 2. **Remember center has negative signs** - In $x^2 + y^2 + 2gx + 2fy + c = 0$, center is $(-g, -f)$

> 3. **Normal is easy** - It always passes through center, so use two-point form

> 4. **Family of circles** - Use $S_1 + \lambda S_2 = 0$ to avoid finding intersection points explicitly

> 5. **Position check** - Substitute point in circle equation; positive = outside, zero = on, negative = inside
>
> **“The circle is the first conic section - master it well, because parabolas, ellipses, and hyperbolas build on these same ideas!”**
>
> **Next Step:** Ready to explore [Parabola](../parabola/index.md) - where the satellite dish shape comes from!

From TestGuru · our mock-test platform

## You've read Circles - Perfect Curves in Coordinate Geometry.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=coordinate-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcoordinate-geometry%2Fcircles%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/coordinate-geometry/circles/",this.page.identifier="/mathematics/coordinate-geometry/circles/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421583467458"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421583467458")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/coordinate-geometry/circles/](https://jeenotes.in/mathematics/coordinate-geometry/circles/) · raw HTML: `offline/mathematics/coordinate-geometry/circles/index.html`_
