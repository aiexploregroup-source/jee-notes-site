---
title: "Straight Lines - The Foundation of Coordinate Geometry"
source: "https://jeenotes.in/mathematics/coordinate-geometry/straight-lines/"
description: "Master all forms of straight line equations, angle between lines, distance formulas, and conditions for parallel and perpendicular lines for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "15 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 10"
html: "../../../../offline/mathematics/coordinate-geometry/straight-lines/index.html"
extracted: "2026-11-23"
---

> Master all forms of straight line equations, angle between lines, distance formulas, and conditions for parallel and perpendicular lines for JEE Main and Advanced

## The Hook: When Your GPS Says “Continue Straight”

> **★ Key point · Connect: Real Life → Mathematics**
>
> Ever wondered how your GPS navigates you through the city? When it says “Continue straight for 2.5 km then turn left at 45 degrees,” it’s using coordinate geometry!
>
> - Your phone’s GPS uses coordinates (latitude, longitude)

> - It calculates the shortest distance between points

> - It finds angles between roads to give you turn-by-turn directions
>
> **The Question:** How do mathematicians describe “straight” precisely? How do we find angles between roads or the shortest distance from your location to a highway?
>
> **JEE Impact:** This topic appears in **3-4 questions** every year in JEE Main and 1-2 in Advanced. Master this, and coordinate geometry becomes easy!

---

## The Core Concept

A **straight line** is the shortest path between two points. In coordinate geometry, we describe this path using equations.

### The Big Idea

> **◐ In simple terms · Understanding Straight Lines**
>
> Think of a straight line as an infinite collection of points $(x, y)$ that satisfy a certain relationship. This relationship can be expressed in different forms depending on what information we have:
>
> - If we know **slope and a point**: Use point-slope form

> - If we know **two points**: Use two-point form

> - If we know **intercepts**: Use intercept form

> - For general cases: Use slope-intercept or general form

---

## Coordinate Geometry Basics

Before working with lines, make sure these point formulas are second nature — they appear inside almost every coordinate geometry problem.

### Distance Between Two Points

$$\boxed{d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}}$$

### Section Formula

Point dividing the line joining $(x_1, y_1)$ and $(x_2, y_2)$ in ratio $m:n$:

**Internal division:**

$$\left(\frac{mx_2 + nx_1}{m+n}, \frac{my_2 + ny_1}{m+n}\right)$$

**External division:**

$$\left(\frac{mx_2 - nx_1}{m-n}, \frac{my_2 - ny_1}{m-n}\right)$$

### Midpoint

$$\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$$

### Centroid of a Triangle

For vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:

$$G = \left(\frac{x_1+x_2+x_3}{3}, \frac{y_1+y_2+y_3}{3}\right)$$

---

## All Forms of Straight Line Equations

### 1. Slope-Intercept Form

$$\boxed{y = mx + c}$$

### Interactive Demo: Visualize Straight Lines

Plot and explore straight lines with different slopes and intercepts.

**In simple terms:** “The height $y$ depends on how steep the line is ($m$) and where it starts on the y-axis ($c$)”

- **$m$ = slope** = “steepness” or “gradient” of the line
- **$c$ = y-intercept** = where the line crosses the y-axis

**When to use:** When you know the slope and y-intercept directly.

> **↗ Connection · Example: GPS Direction**
>
> A car travels such that for every 3 km eastward (x-direction), it goes 4 km northward (y-direction), starting from 5 km north of origin.
>
> **Slope** $m = \frac{4}{3}$, **y-intercept** $c = 5$
>
> **Equation:** $y = \frac{4}{3}x + 5$

### 2. Point-Slope Form

$$\boxed{y - y_1 = m(x - x_1)}$$

**In simple terms:** “Starting from point $(x_1, y_1)$, for every step in x-direction, we move $m$ steps in y-direction”

**When to use:** When you know one point and the slope.

### 3. Two-Point Form

$$\boxed{y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)}$$

Or more symmetrically:

$$\boxed{\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}}$$

**In simple terms:** “If the line passes through two points, we can find its direction from those points”

**When to use:** When you know two points on the line.

### 4. Intercept Form

$$\boxed{\frac{x}{a} + \frac{y}{b} = 1}$$

**In simple terms:** “The line cuts the x-axis at $(a, 0)$ and y-axis at $(0, b)$”

- **$a$ = x-intercept**
- **$b$ = y-intercept**

**When to use:** When you know both intercepts (and neither is zero).

> **⚠ Trap: Line Passing Through Origin**
>
> If the line passes through origin, both intercepts are zero. You **cannot** use intercept form! Use $y = mx$ instead.

### 5. Normal Form (Perpendicular Form)

$$\boxed{x \cos \alpha + y \sin \alpha = p}$$

**In simple terms:** “Draw a perpendicular from origin to the line. If this perpendicular has length $p$ and makes angle $\alpha$ with x-axis, this is your equation”

- **$p$ = perpendicular distance** from origin to line
- **$\alpha$ = angle** the perpendicular makes with positive x-axis

**When to use:** Rarely in JEE, but useful for finding distance from origin.

### 6. General Form

$$\boxed{Ax + By + C = 0}$$

**In simple terms:** “The most general way to write any straight line”

**Key Relations:**

- Slope: $m = -\frac{A}{B}$ (if $B \neq 0$)
- x-intercept: $-\frac{C}{A}$ (if $A \neq 0$)
- y-intercept: $-\frac{C}{B}$ (if $B \neq 0$)

---

## Slope: The Measure of Steepness

### Definition

$$\boxed{m = \tan \theta = \frac{y_2 - y_1}{x_2 - x_1}}$$

where $\theta$ is the angle the line makes with the positive x-axis.

### Understanding Slope

| Slope | Meaning | Example |
| --- | --- | --- |
| $m > 0$ | Line rises as we move right | Uphill road |
| $m < 0$ | Line falls as we move right | Downhill road |
| $m = 0$ | Horizontal line | Flat road parallel to ground |
| $m = \infty$ | Vertical line | Wall perpendicular to ground |

> **★ Key point · Memory Trick: RISE over RUN**
>
> **“RISE over RUN”**
>
> $$m = \frac{\text{RISE (change in y)}}{\text{RUN (change in x)}} = \frac{\Delta y}{\Delta x}$$
>
> Think of climbing stairs: RISE = vertical height, RUN = horizontal distance.

---

## Angle Between Two Lines

### Formula

If two lines have slopes $m_1$ and $m_2$, the acute angle $\theta$ between them is:

$$\boxed{\tan \theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|}$$

**Visual Description:** Imagine two roads crossing. The angle between them is measured by the tangent formula above.

### Special Cases

#### 1. Parallel Lines

$$\boxed{m_1 = m_2 \quad \text{or} \quad \frac{A_1}{A_2} = \frac{B_1}{B_2} \neq \frac{C_1}{C_2}}$$

**In simple terms:** “Same slope, different intercepts” → Lines never meet (parallel tracks)

#### 2. Perpendicular Lines

$$\boxed{m_1 \cdot m_2 = -1 \quad \text{or} \quad A_1 A_2 + B_1 B_2 = 0}$$

**In simple terms:** “Product of slopes is -1” → Lines meet at 90° (like adjacent walls)

> **↗ Connection · Quick Check**
>
> **Are these lines perpendicular?**
>
> Line 1: $2x + 3y = 5$ → slope $m_1 = -\frac{2}{3}$
>
> Line 2: $3x - 2y = 7$ → slope $m_2 = \frac{3}{2}$
>
> Check: $m_1 \cdot m_2 = -\frac{2}{3} \times \frac{3}{2} = -1$ ✓
>
> **Yes, they’re perpendicular!**

#### 3. Coincident Lines

$$\boxed{\frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2}}$$

**In simple terms:** “Same line written differently”

---

## Distance Formulas

### 1. Distance from Point to Line

The perpendicular distance from point $(x_1, y_1)$ to line $Ax + By + C = 0$ is:

$$\boxed{d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}}$$

**Memory Trick:** “**A**dd **B**est **C**oordinates, **D**ivide by **R**oot”

**Visual Description:** Imagine dropping a perpendicular from a point to a road. This formula gives that shortest distance.

> **↗ Connection · Example: Distance from Home to Highway**
>
> Find distance from point $(1, 2)$ to line $3x + 4y - 5 = 0$
>
> $$d = \frac{|3(1) + 4(2) - 5|}{\sqrt{3^2 + 4^2}} = \frac{|3 + 8 - 5|}{\sqrt{9 + 16}} = \frac{6}{5} \text{ units}$$

### 2. Distance Between Parallel Lines

For parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$:

$$\boxed{d = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}}$$

**Visual Description:** Width of a road with parallel edges, measured perpendicular to the edges.

### 3. Distance Between Two Points

$$\boxed{d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$

This is just the **Pythagorean theorem**!

---

## Position of Point Relative to Line

For a line $Ax + By + C = 0$, substitute point $(x_1, y_1)$:

- If $Ax_1 + By_1 + C = 0$ → Point is **on the line**
- If $Ax_1 + By_1 + C > 0$ → Point is on one side
- If $Ax_1 + By_1 + C < 0$ → Point is on the other side

**Application:** Two points $(x_1, y_1)$ and $(x_2, y_2)$ are on:

- **Same side** if $Ax_1 + By_1 + C$ and $Ax_2 + By_2 + C$ have the **same sign**
- **Opposite sides** if they have **opposite signs**

---

## Memory Tricks & Patterns

### Mnemonic for Forms

**"**P**oint-**S**lope **T**akes **M**e **I**nside **N**ew **G**alaxy"**

- **P**oint-Slope: $y - y_1 = m(x - x_1)$
- **S**lope-Intercept: $y = mx + c$
- **T**wo-Point: Uses two points
- **M**→ Slope symbol
- **I**ntercept: $\frac{x}{a} + \frac{y}{b} = 1$
- **N**ormal: $x\cos\alpha + y\sin\alpha = p$
- **G**eneral: $Ax + By + C = 0$

### Pattern Recognition

> **★ Key point · JEE Pattern: Perpendicular Distance**
>
> **90% of JEE distance problems** use this formula:
>
> $$d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$$
>
> **Pro Tip:** First convert any line equation to $Ax + By + C = 0$ form for easy distance calculation.

### Slope Relationships

| Relationship | Slope Condition | Visual |
| --- | --- | --- |
| Parallel | $m_1 = m_2$ | Railway tracks |
| Perpendicular | $m_1 m_2 = -1$ | Corner of a room |
| $45°$ angle | $m = 1$ | Diagonal of a square |
| $135°$ angle | $m = -1$ | Other diagonal |

---

## When to Use Which Form

> **★ Key point · Decision Tree**
>
> **Given Information → Form to Use**
>
> 1. **Slope + y-intercept** → Use $y = mx + c$

> 2. **Slope + one point** → Use $y - y_1 = m(x - x_1)$

> 3. **Two points** → Use $\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}$

> 4. **Both intercepts** → Use $\frac{x}{a} + \frac{y}{b} = 1$

> 5. **For calculations** → Convert to $Ax + By + C = 0$
>
> **Exam Strategy:** In JEE, always convert to general form $Ax + By + C = 0$ for final answer unless specifically asked otherwise.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Slope and Angle**
>
> **Wrong:** “Line makes $60°$ angle, so slope = $60$”
>
> **Correct:** Slope $m = \tan 60° = \sqrt{3}$
>
> **Remember:** Slope is the **tangent** of the angle, not the angle itself!

> **⚠ Trap #2: Parallel Lines Formula**
>
> **Wrong:** $\frac{A_1}{A_2} = \frac{B_1}{B_2} = \frac{C_1}{C_2}$ (This means coincident lines!)
>
> **Correct:** $\frac{A_1}{A_2} = \frac{B_1}{B_2} \neq \frac{C_1}{C_2}$ (For parallel lines)
>
> **Key Difference:** Equal ratios throughout = same line, equal ratios for A,B only = parallel lines

> **⚠ Trap #3: Distance Formula Sign**
>
> **Common Error:** Forgetting the absolute value in distance formula
>
> $$d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$$
>
> **Remember:** Distance is always **positive**! The absolute value ensures this.

> **⚠ Trap #4: Intercept Form with Origin**
>
> **Wrong:** Using $\frac{x}{a} + \frac{y}{b} = 1$ when line passes through origin
>
> **Correct:** If line passes through origin, use $y = mx$ or $Ax + By = 0$
>
> **Why?** Both intercepts are zero, and we can’t divide by zero!

---

## Family of Lines

### Lines Through Intersection

Lines passing through the intersection of $L_1: A_1x + B_1y + C_1 = 0$ and $L_2: A_2x + B_2y + C_2 = 0$:

$$\boxed{L_1 + \lambda L_2 = 0}$$

or

$$\boxed{A_1x + B_1y + C_1 + \lambda(A_2x + B_2y + C_2) = 0}$$

**In simple terms:** “Any combination of two intersecting lines gives a line through their intersection point”

**JEE Trick:** This eliminates finding the intersection point explicitly!

> **↗ Connection · Example: Family of Lines**
>
> Find the line through intersection of $x + y = 1$ and $2x - y = 5$ that passes through origin.
>
> **Solution:**

> Family: $(x + y - 1) + \lambda(2x - y - 5) = 0$
>
> For origin $(0,0)$: $-1 + \lambda(-5) = 0$ → $\lambda = -\frac{1}{5}$
>
> Line: $(x + y - 1) - \frac{1}{5}(2x - y - 5) = 0$
>
> Simplifying: $3x + 6y = 0$ or $x + 2y = 0$

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Finding Equation from Points**
>
> **Question:** Find the equation of line passing through $(2, 3)$ and $(4, 7)$.
>
> **Solution:**
>
> Using two-point form:
>
> $$\frac{y - 3}{7 - 3} = \frac{x - 2}{4 - 2}$$

$$\frac{y - 3}{4} = \frac{x - 2}{2}$$

$$2(y - 3) = 4(x - 2)$$

$$2y - 6 = 4x - 8$$

$$\boxed{4x - 2y - 2 = 0 \quad \text{or} \quad 2x - y - 1 = 0}$$

> **↗ Connection · Problem 2: Parallel Line**
>
> **Question:** Find equation of line parallel to $3x + 4y = 7$ passing through $(1, 2)$.
>
> **Solution:**
>
> Parallel lines have same slope.
>
> From $3x + 4y = 7$: slope $m = -\frac{3}{4}$
>
> Using point-slope form:
>
> $$y - 2 = -\frac{3}{4}(x - 1)$$

$$4y - 8 = -3x + 3$$

$$\boxed{3x + 4y = 11}$$

> **↗ Connection · Problem 3: Distance Calculation**
>
> **Question:** Find distance from point $(3, 4)$ to line $5x - 12y + 10 = 0$.
>
> **Solution:**
>
> Using distance formula:
>
> $$d = \frac{|5(3) - 12(4) + 10|}{\sqrt{5^2 + 12^2}}$$

$$d = \frac{|15 - 48 + 10|}{\sqrt{25 + 144}} = \frac{|-23|}{13} = \frac{23}{13}$$

$$\boxed{d = \frac{23}{13} \text{ units}}$$

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Angle Between Lines**
>
> **Question:** Find the acute angle between lines $x + 2y = 3$ and $2x - y = 5$.
>
> **Solution:**
>
> Slopes: $m_1 = -\frac{1}{2}$, $m_2 = 2$
>
> $$\tan \theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right| = \left|\frac{-\frac{1}{2} - 2}{1 + (-\frac{1}{2})(2)}\right|$$

$$= \left|\frac{-\frac{5}{2}}{1 - 1}\right| = \left|\frac{-\frac{5}{2}}{0}\right|$$
>
> Since denominator is zero, $\tan \theta = \infty$
>
> $$\boxed{\theta = 90°}$$
>
> The lines are perpendicular! (Can verify: $m_1 \cdot m_2 = -1$)

> **↗ Connection · Problem 5: Reflection**
>
> **Question:** Find the reflection of point $(2, 3)$ in the line $x + y = 0$.
>
> **Solution:**
>
> Let reflection be $(h, k)$.
>
> **Condition 1:** Midpoint of $(2,3)$ and $(h,k)$ lies on the line:
>
> $$\frac{2+h}{2} + \frac{3+k}{2} = 0$$

$$h + k = -5 \quad \text{...(1)}$$
>
> **Condition 2:** Line joining $(2,3)$ and $(h,k)$ is perpendicular to $x+y=0$ (slope $= -1$):
>
> $$\frac{k-3}{h-2} \times (-1) = -1$$

$$\frac{k-3}{h-2} = 1$$

$$k - 3 = h - 2$$

$$h - k = 1 \quad \text{...(2)}$$
>
> From (1) and (2): $h = -2$, $k = -3$
>
> $$\boxed{\text{Reflection: } (-2, -3)}$$

> **↗ Connection · Problem 6: Foot of Perpendicular**
>
> **Question:** Find foot of perpendicular from $(1, 2)$ to line $2x + y = 5$.
>
> **Solution:**
>
> Perpendicular to $2x + y = 5$ (slope $= -2$) has slope $= \frac{1}{2}$
>
> Perpendicular line through $(1,2)$:
>
> $$y - 2 = \frac{1}{2}(x - 1)$$

$$2y - 4 = x - 1$$

$$x - 2y + 3 = 0 \quad \text{...(1)}$$
>
> Foot is intersection of (1) and $2x + y = 5$:
>
> From $2x + y = 5$: $y = 5 - 2x$
>
> Substitute in (1): $x - 2(5-2x) + 3 = 0$
>
> $$x - 10 + 4x + 3 = 0$$

$$5x = 7$$
>
> → $x = \frac{7}{5}$
>
> $$y = 5 - 2 \times \frac{7}{5} = \frac{11}{5}$$

$$\boxed{\text{Foot: } \left(\frac{7}{5}, \frac{11}{5}\right)}$$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 7: Locus Problem**
>
> **Question:** A line passes through the point $(2, 3)$ and makes intercepts on axes whose sum is zero. Find its equation.
>
> **Solution:**
>
> Let intercepts be $a$ and $b$ where $a + b = 0$ → $b = -a$
>
> Intercept form: $\frac{x}{a} + \frac{y}{b} = 1$
>
> $$\frac{x}{a} + \frac{y}{-a} = 1$$

$$\frac{x - y}{a} = 1$$

$$x - y = a \quad \text{...(1)}$$
>
> Line passes through $(2, 3)$:
>
> $$2 - 3 = a$$

$$a = -1$$
>
> From (1): $x - y = -1$
>
> $$\boxed{x - y + 1 = 0}$$
>
> **Alternate case:** If the line passes through origin (both intercepts zero, sum = 0):
>
> Slope through $(2,3)$ and $(0,0)$: $m = \frac{3}{2}$
>
> $$\boxed{y = \frac{3}{2}x \quad \text{or} \quad 3x - 2y = 0}$$
>
> **Answer:** $x - y + 1 = 0$ or $3x - 2y = 0$

> **↗ Connection · Problem 8: Area of Triangle**
>
> **Question:** Find area of triangle formed by line $3x + 4y = 12$ with coordinate axes.
>
> **Solution:**
>
> Find intercepts:
>
> - x-intercept (put $y=0$): $3x = 12$ → $x = 4$

> - y-intercept (put $x=0$): $4y = 12$ → $y = 3$
>
> Triangle has vertices $(0, 0)$, $(4, 0)$, $(0, 3)$
>
> $$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 4 \times 3$$

$$\boxed{\text{Area} = 6 \text{ sq. units}}$$
>
> **Formula method:** For line $\frac{x}{a} + \frac{y}{b} = 1$, area $= \frac{1}{2}|ab|$
>
> Here: $a = 4$, $b = 3$ → Area $= \frac{1}{2} \times 4 \times 3 = 6$ ✓

> **↗ Connection · Problem 9: Concurrent Lines**
>
> **Question:** Find value of $k$ for which lines $2x + 3y = 5$, $3x + 4y = 6$, and $4x + 5y = k$ are concurrent.
>
> **Solution:**
>
> Lines are concurrent if they pass through same point.
>
> Find intersection of first two lines:
>
> From $2x + 3y = 5$: $2x = 5 - 3y$ → $x = \frac{5-3y}{2}$
>
> Substitute in $3x + 4y = 6$:
>
> $$3 \times \frac{5-3y}{2} + 4y = 6$$

$$\frac{15 - 9y + 8y}{2} = 6$$

$$15 - y = 12$$

$$y = 3$$

$$x = \frac{5 - 9}{2} = -2$$
>
> Intersection point: $(-2, 3)$
>
> For third line to pass through this point:
>
> $$4(-2) + 5(3) = k$$

$$-8 + 15 = k$$

$$\boxed{k = 7}$$

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| **Slope from angle** | $m = \tan \theta$ |
| **Parallel lines** | $m_1 = m_2$ or $A_1/A_2 = B_1/B_2 \neq C_1/C_2$ |
| **Perpendicular lines** | $m_1 m_2 = -1$ or $A_1A_2 + B_1B_2 = 0$ |
| **Angle between lines** | $\tan\theta = \left |
| **Distance: point to line** | $d = \frac{ |
| **Distance: parallel lines** | $d = \frac{ |
| **Triangle area** | For $\frac{x}{a}+\frac{y}{b}=1$: Area $= \frac{1}{2} |
| **Family of lines** | $L_1 + \lambda L_2 = 0$ through intersection |

---

## Cross-Links to Related Topics

**Prerequisites:**

- [Trigonometric Identities](../../trigonometry/trig-identities/index.md) - For slope and angle conversions
- [Inverse Trigonometry](../../trigonometry/inverse-trig/index.md) - For angle calculations

**Related Topics:**

- [Circles](../circles/index.md) - Lines as tangents to circles
- [Parabola](../parabola/index.md) - Tangent and normal lines to parabola
- [Ellipse](../ellipse/index.md) - Lines as tangents/chords to ellipse
- [Hyperbola](../hyperbola/index.md) - Asymptotes and tangents
- [Tangent and Normal to Conics](../tangent-normal-conics/index.md) - Unified approach to tangent lines
- [Line in Space](../../three-dimensional-geometry/line-in-space/index.md) - Extension to 3D lines
- [Vector Basics](../../vector-algebra/vectors-basics/index.md) - Vector form of line equations

**Applications:**

- [Differentiation - Tangent Lines](../../limits-continuity-differentiability/applications-derivatives/index.md) - Finding tangent lines using calculus
- Physics: [Kinematics - Motion in a straight line](../../../physics/kinematics/index.md)
- Physics: [Friction - Inclined planes](../../../physics/laws-of-motion/friction/index.md)

---

## JEE Exam Strategy

> **★ Key point · High-Yield Points for JEE**
>
> **Weightage:** 3-4 questions in JEE Main, 1-2 in Advanced
>
> **Most Frequently Asked:**
>
> 1. Distance from point to line (appears almost every year)

> 2. Angle between two lines

> 3. Family of lines through intersection

> 4. Reflection and foot of perpendicular
>
> **Time-Saving Tricks:**
>
> 1. Always convert to $Ax + By + C = 0$ for calculations

> 2. For perpendicularity, just check $A_1A_2 + B_1B_2 = 0$ (faster than slopes)

> 3. For parallel distance, ensure same $(A, B)$ coefficients first
>
> **Common Trap Options:**
>
> - Giving slope value instead of tan of angle

> - Missing absolute value in distance formula

> - Confusing parallel and coincident line conditions

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Master the distance formula** $d = \frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}$ - this appears in 70% of coordinate geometry problems

> 2. **Remember slope relationships:** Parallel means equal slopes, perpendicular means product = -1

> 3. **Use the right form:** Choose line equation form based on given information to save time

> 4. **Family of lines trick** $L_1 + \lambda L_2 = 0$ eliminates tedious intersection calculations
>
> **“A straight line is the foundation. Master this, and all curves become easy - because tangents, normals, and asymptotes are all straight lines!”**
>
> **Next Step:** Move to [Circles](../circles/index.md) where straight lines become tangents and normals!

From TestGuru · our mock-test platform

## You've read Straight Lines - The Foundation of Coordinate Geometry.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=coordinate-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcoordinate-geometry%2Fstraight-lines%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/coordinate-geometry/straight-lines/",this.page.identifier="/mathematics/coordinate-geometry/straight-lines/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421576438497"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421576438497")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/coordinate-geometry/straight-lines/](https://jeenotes.in/mathematics/coordinate-geometry/straight-lines/) · raw HTML: `offline/mathematics/coordinate-geometry/straight-lines/index.html`_
