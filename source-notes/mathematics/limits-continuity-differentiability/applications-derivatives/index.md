---
title: "Applications of Derivatives"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/applications-derivatives/"
description: "Master maxima, minima, monotonicity, tangents, normals, and rate of change problems for JEE using derivatives."
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/applications-derivatives/index.html"
extracted: "2026-11-23"
---

> Master maxima, minima, monotonicity, tangents, normals, and rate of change problems for JEE using derivatives.

## The Hook: Finding the Perfect Shot

> **★ Key point · Connect: The Cricket Six in Jawan (2023)**
>
> Shah Rukh Khan needs to hit a six over the boundary. At what **angle** should he launch the ball to get maximum distance?
>
> This is an **optimization problem** — finding the best value (maximum distance) by adjusting a variable (launch angle).
>
> Calculus gives us the superpower to find **maxima and minima** — the highest and lowest values of any function. From business profits to rocket trajectories, derivatives solve real-world optimization!
>
> In cricket, physics tells us the optimal angle is **45°** (for maximum range). Calculus can prove this!

---

## Interactive: Explore Function Behavior

Try plotting $f(x) = x^3 - 3x$ and observe:

- Where the function is increasing/decreasing
- Local maximum and minimum points
- Points where slope = 0

---

## The Core Concept

### Why Applications Matter

Derivatives tell us the **rate of change** of functions. This unlocks powerful applications:

1. **Finding maxima/minima** — Optimization problems
2. **Checking if function is increasing/decreasing** — Monotonicity
3. **Finding equations of tangents/normals** — Geometry
4. **Solving rate of change problems** — Physics, economics
5. **Curve sketching** — Understanding function behavior

> **★ Key point · JEE Gold Mine**
>
> Applications of derivatives account for **4-6 questions** in JEE Main and **5-8 questions** in JEE Advanced. This is one of the highest-weightage topics!

---

## Application 1: Monotonicity (Increasing/Decreasing Functions)

### Definition

A function $f(x)$ is:

- **Increasing** on $(a, b)$ if $x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$
- **Decreasing** on $(a, b)$ if $x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$

### Derivative Test

$$\boxed{\begin{aligned}
f'(x) > 0 \text{ on } (a,b) &\Rightarrow f \text{ is increasing on } (a,b) \\
f'(x) < 0 \text{ on } (a,b) &\Rightarrow f \text{ is decreasing on } (a,b) \\
f'(x) = 0 \text{ on } (a,b) &\Rightarrow f \text{ is constant on } (a,b)
\end{aligned}}$$

**Strict versions:**

- Strictly increasing: $f'(x) \geq 0$ with equality at isolated points only
- Strictly decreasing: $f'(x) \leq 0$ with equality at isolated points only

### Process to Find Intervals

**Step 1:** Find $f'(x)$

**Step 2:** Solve $f'(x) = 0$ to find critical points

**Step 3:** Make a sign chart for $f'(x)$

**Step 4:** Conclude:

- Where $f'(x) > 0$: Increasing
- Where $f'(x) < 0$: Decreasing

### Example

Find intervals where $f(x) = x^3 - 3x^2 - 9x + 5$ is increasing/decreasing.

**Solution:**

$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$

Critical points: $x = -1, 3$

**Sign chart:**

| Interval | $x < -1$ | $x = -1$ | $-1 < x < 3$ | $x = 3$ | $x > 3$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | Increasing | — | Decreasing | — | Increasing |

**Answer:**

- Increasing on $(-\infty, -1) \cup (3, \infty)$
- Decreasing on $(-1, 3)$

> **★ Key point · Stock Market Connection**
>
> Increasing function = Stock price going up (bull market)

> Decreasing function = Stock price going down (bear market)

> Critical points = Trend reversal points (buy/sell signals!)
>
> Traders use derivatives (literally!) to predict market trends.

---

## Application 2: Maxima and Minima

### Definitions

**Local Maximum:** $f(a)$ is a local maximum if $f(a) \geq f(x)$ for all $x$ near $a$.

**Local Minimum:** $f(a)$ is a local minimum if $f(a) \leq f(x)$ for all $x$ near $a$.

**Global (Absolute) Maximum/Minimum:** Largest/smallest value on the entire domain.

### Critical Points

**Definition:** $x = c$ is a **critical point** if:

- $f'(c) = 0$, OR
- $f'(c)$ does not exist

**All local maxima and minima occur at critical points!**

(But not every critical point is a max/min — could be an inflection point)

---

## First Derivative Test

### Procedure

**Step 1:** Find all critical points (solve $f'(x) = 0$)

**Step 2:** Check sign of $f'(x)$ on either side of each critical point

**Step 3:** Conclude:

| $f'(x)$ changes from | Conclusion |
| --- | --- |
| $+$ to $-$ | Local **maximum** |
| $-$ to $+$ | Local **minimum** |
| No sign change | **Neither** (inflection point) |

### Example

Find local maxima and minima of $f(x) = x^3 - 3x + 2$.

**Solution:**

$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1)$

Critical points: $x = -1, 1$

**Sign chart:**

| Interval | $x < -1$ | $x = -1$ | $-1 < x < 1$ | $x = 1$ | $x > 1$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |

At $x = -1$: $f'$ changes $+$ to $-$ → **Local maximum**

- $f(-1) = (-1)^3 - 3(-1) + 2 = -1 + 3 + 2 = 4$

At $x = 1$: $f'$ changes $-$ to $+$ → **Local minimum**

- $f(1) = 1 - 3 + 2 = 0$

**Answer:** Local max at $(-1, 4)$, local min at $(1, 0)$

---

## Second Derivative Test

### Procedure

**Step 1:** Find critical points (solve $f'(x) = 0$)

**Step 2:** Find $f''(x)$ (second derivative)

**Step 3:** For each critical point $c$:

$$\boxed{\begin{aligned}
f''(c) > 0 &\Rightarrow \text{Local minimum at } x = c \\
f''(c) < 0 &\Rightarrow \text{Local maximum at } x = c \\
f''(c) = 0 &\Rightarrow \text{Test is inconclusive (use first derivative test)}
\end{aligned}}$$

**Intuition:**

- $f''(c) > 0$ means function is **concave up** (like a cup) → minimum
- $f''(c) < 0$ means function is **concave down** (like a cap) → maximum

### Example

Find local maxima and minima of $f(x) = x^3 - 6x^2 + 9x + 1$.

**Solution:**

$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$

Critical points: $x = 1, 3$

$f''(x) = 6x - 12$

At $x = 1$: $f''(1) = 6 - 12 = -6 < 0$ → **Local maximum**

- $f(1) = 1 - 6 + 9 + 1 = 5$

At $x = 3$: $f''(3) = 18 - 12 = 6 > 0$ → **Local minimum**

- $f(3) = 27 - 54 + 27 + 1 = 1$

**Answer:** Local max at $(1, 5)$, local min at $(3, 1)$

> **◐ In simple terms · Which Test to Use?**
>
> **First Derivative Test:**
>
> - Always works

> - More work (need to check signs on both sides)
>
> **Second Derivative Test:**
>
> - Faster when it works

> - Can be inconclusive ($f'' = 0$)

> - Need to compute second derivative
>
> **Recommendation:** Try second derivative test first. If $f'' = 0$, fall back to first derivative test.

---

## Global Maxima/Minima on Closed Intervals

### Extreme Value Theorem

If $f$ is continuous on $[a, b]$, then $f$ has both a global maximum and global minimum on $[a, b]$.

### Procedure to Find Global Extrema on $[a, b]$

**Step 1:** Find all critical points in $(a, b)$

**Step 2:** Evaluate $f$ at:

- All critical points
- Both endpoints: $f(a)$ and $f(b)$

**Step 3:** The largest value is the **global maximum**, smallest is the **global minimum**

### Example

Find absolute maximum and minimum of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

**Solution:**

$f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1$

Both critical points are in $[-2, 2]$.

Evaluate at critical points and endpoints:

- $f(-2) = -8 + 6 + 1 = -1$
- $f(-1) = -1 + 3 + 1 = 3$
- $f(1) = 1 - 3 + 1 = -1$
- $f(2) = 8 - 6 + 1 = 3$

**Global maximum:** $3$ at $x = -1$ and $x = 2$
**Global minimum:** $-1$ at $x = -2$ and $x = 1$

---

## Application 3: Optimization Problems

### General Strategy

**Step 1:** Understand the problem. Identify what to maximize/minimize.

**Step 2:** Draw a diagram if applicable.

**Step 3:** Write the objective function (what to optimize) in terms of variables.

**Step 4:** Use constraints to express everything in terms of **one variable**.

**Step 5:** Find derivative and critical points.

**Step 6:** Use first/second derivative test to find max/min.

**Step 7:** Check endpoints if domain is restricted.

### Classic Problems

#### Problem Type 1: Geometric Optimization

**Example:** Find the dimensions of a rectangle with perimeter 100 m that has maximum area.

**Solution:**

Let length = $x$, width = $y$.

Constraint: $2x + 2y = 100 \Rightarrow y = 50 - x$

Objective: Maximize area $A = xy = x(50 - x) = 50x - x^2$

Domain: $0 < x < 50$

$\frac{dA}{dx} = 50 - 2x = 0 \Rightarrow x = 25$

$\frac{d^2A}{dx^2} = -2 < 0$ → Maximum at $x = 25$

When $x = 25$: $y = 50 - 25 = 25$

**Answer:** Square with side 25 m has maximum area.

> **★ Key point · Pattern Recognition**
>
> For **fixed perimeter**, square has maximum area.

> For **fixed area**, square has minimum perimeter.
>
> This appears frequently in JEE!

#### Problem Type 2: Distance/Time Optimization

**Example:** A person is at point A, 3 km from a straight road. He wants to reach point B on the road, 5 km away from the foot of perpendicular from A. If he walks at 4 km/h on sand and 6 km/h on road, where should he hit the road to minimize time?

**Solution:**

Let him hit the road at distance $x$ from the foot of perpendicular.

Distance on sand: $\sqrt{9 + x^2}$
Distance on road: $5 - x$

Time: $T(x) = \frac{\sqrt{9 + x^2}}{4} + \frac{5 - x}{6}$

$\frac{dT}{dx} = \frac{x}{4\sqrt{9 + x^2}} - \frac{1}{6} = 0$

$\frac{x}{4\sqrt{9 + x^2}} = \frac{1}{6}$

$6x = 4\sqrt{9 + x^2}$

$36x^2 = 16(9 + x^2)$

$20x^2 = 144$

$x = \frac{12}{\sqrt{20}} = \frac{6}{\sqrt{5}}$ km

---

## Application 4: Tangents and Normals

### Definitions

**Tangent:** Line that touches the curve at exactly one point (locally).

**Normal:** Line perpendicular to the tangent at the point of contact.

### Equations

At point $(x_0, y_0)$ on curve $y = f(x)$:

**Slope of tangent:** $m_T = f'(x_0)$

**Equation of tangent:**

$$\boxed{y - y_0 = f'(x_0)(x - x_0)}$$

**Slope of normal:** $m_N = -\frac{1}{f'(x_0)}$ (negative reciprocal)

**Equation of normal:**

$$\boxed{y - y_0 = -\frac{1}{f'(x_0)}(x - x_0)}$$

### Example

Find equations of tangent and normal to $y = x^2$ at $(1, 1)$.

**Solution:**

$f(x) = x^2 \Rightarrow f'(x) = 2x$

At $x = 1$: $f'(1) = 2$

**Tangent:** $y - 1 = 2(x - 1) \Rightarrow y = 2x - 1$

**Normal:** $y - 1 = -\frac{1}{2}(x - 1) \Rightarrow y = -\frac{1}{2}x + \frac{3}{2}$

### Angle Between Two Curves

Two curves $y = f(x)$ and $y = g(x)$ intersect at point $P$.

**Angle of intersection** = Angle between their tangents at $P$

$$\boxed{\tan \theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|}$$

where $m_1 = f'(x_0)$ and $m_2 = g'(x_0)$ at intersection point $(x_0, y_0)$.

**Orthogonal (perpendicular) curves:** $m_1 \cdot m_2 = -1$

---

## Application 5: Rate of Change

### Related Rates

When two or more quantities are related and changing with time, their rates of change are related by differentiation.

**Method:** Differentiate the relation with respect to time $t$.

### Example: Expanding Circle

The radius of a circle is increasing at 2 cm/s. How fast is the area increasing when radius is 5 cm?

**Solution:**

Given: $\frac{dr}{dt} = 2$ cm/s

Find: $\frac{dA}{dt}$ when $r = 5$

Relation: $A = \pi r^2$

Differentiate w.r.t. $t$:

$$\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$

When $r = 5$:

$$\frac{dA}{dt} = 2\pi (5)(2) = 20\pi \text{ cm}^2/\text{s}$$

### Example: Ladder Sliding Down Wall

A 10 m ladder leans against a wall. The bottom slides away at 1 m/s. How fast is the top sliding down when the bottom is 6 m from the wall?

**Solution:**

Let $x$ = distance of bottom from wall, $y$ = height of top on wall.

Relation: $x^2 + y^2 = 100$ (Pythagoras)

Given: $\frac{dx}{dt} = 1$ m/s

Find: $\frac{dy}{dt}$ when $x = 6$

Differentiate:

$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$

When $x = 6$: $y = \sqrt{100 - 36} = 8$

$$2(6)(1) + 2(8)\frac{dy}{dt} = 0$$

$$\frac{dy}{dt} = -\frac{12}{16} = -\frac{3}{4} \text{ m/s}$$

(Negative means sliding down)

---

## Application 6: Mean Value Theorem (MVT)

### Statement

If $f$ is:

1. Continuous on $[a, b]$
2. Differentiable on $(a, b)$

Then there exists at least one $c \in (a, b)$ such that:

$$\boxed{f'(c) = \frac{f(b) - f(a)}{b - a}}$$

**Geometric meaning:** There exists a point where the **tangent is parallel to the chord** joining $(a, f(a))$ and $(b, f(b))$.

**Physical meaning:** At some instant, **instantaneous velocity equals average velocity**.

### Rolle’s Theorem (Special Case)

If additionally $f(a) = f(b)$, then:

$$\boxed{f'(c) = 0 \text{ for some } c \in (a, b)}$$

**Meaning:** Between two points with same height, there’s a point with horizontal tangent.

### Example

Verify MVT for $f(x) = x^2$ on $[1, 3]$.

**Solution:**

$f$ is polynomial → continuous and differentiable everywhere.

$\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4$

$f'(x) = 2x$

We need $f'(c) = 4$:

$$2c = 4 \Rightarrow c = 2$$

Since $2 \in (1, 3)$, MVT is verified.

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Find intervals where $f(x) = 2x^3 - 3x^2 - 12x + 5$ is increasing.
>
> **Solution:**
>
> $$f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)$$
>
> Critical points: $x = -1, 2$
>
> Sign chart shows $f'(x) > 0$ when $x < -1$ or $x > 2$.
>
> **Increasing on:** $(-\infty, -1) \cup (2, \infty)$

> **↗ Connection · Problem 2**
>
> **Question:** Find local maxima/minima of $f(x) = x^3 - 3x$.
>
> **Solution:**
>
> $$f'(x) = 3x^2 - 3 = 0 \Rightarrow x = \pm 1$$

$$f''(x) = 6x$$
>
> At $x = -1$: $f''(-1) = -6 < 0$ → Local max, $f(-1) = -1 + 3 = 2$
>
> At $x = 1$: $f''(1) = 6 > 0$ → Local min, $f(1) = 1 - 3 = -2$

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** A rectangle has perimeter 80 m. Find dimensions for maximum area.
>
> **Solution:**

> Let length = $x$, width = $y$.
>
> $2x + 2y = 80 \Rightarrow y = 40 - x$
>
> Area: $A = x(40 - x) = 40x - x^2$
>
> $\frac{dA}{dx} = 40 - 2x = 0 \Rightarrow x = 20$
>
> Maximum area when $x = y = 20$ m (square).

> **↗ Connection · Problem 4**
>
> **Question:** Find equation of tangent to $y = x^3 - 3x + 2$ at $x = 1$.
>
> **Solution:**

> At $x = 1$: $y = 1 - 3 + 2 = 0$, so point is $(1, 0)$.
>
> $\frac{dy}{dx} = 3x^2 - 3$
>
> At $x = 1$: slope $= 3 - 3 = 0$
>
> **Tangent:** $y - 0 = 0(x - 1) \Rightarrow y = 0$

> **↗ Connection · Problem 5**
>
> **Question:** The radius of a circle is increasing at 0.5 cm/s. Find rate of change of area when $r = 4$ cm.
>
> **Solution:**

> $A = \pi r^2$
>
> $\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$
>
> When $r = 4$ and $\frac{dr}{dt} = 0.5$:
>
> $\frac{dA}{dt} = 2\pi(4)(0.5) = 4\pi$ cm²/s

### Level 3: JEE Advanced

> **↗ Connection · Problem 6**
>
> **Question:** Find the point on curve $y^2 = 4x$ closest to $(2, 1)$.
>
> **Solution:**

> Let point on curve be $(x, y)$ where $y^2 = 4x$.
>
> Distance squared: $D^2 = (x - 2)^2 + (y - 1)^2$
>
> Substitute $x = \frac{y^2}{4}$:
>
> $D^2 = \left(\frac{y^2}{4} - 2\right)^2 + (y - 1)^2$
>
> Let $f(y) = \left(\frac{y^2}{4} - 2\right)^2 + (y - 1)^2$
>
> $f'(y) = 2\left(\frac{y^2}{4} - 2\right) \cdot \frac{y}{2} + 2(y - 1) = 0$
>
> $\left(\frac{y^2}{4} - 2\right)y + 2(y - 1) = 0$
>
> $\frac{y^3}{4} - 2y + 2y - 2 = 0$
>
> $y^3 = 8 \Rightarrow y = 2$
>
> When $y = 2$: $x = \frac{4}{4} = 1$
>
> **Closest point:** $(1, 2)$

> **↗ Connection · Problem 7**
>
> **Question:** Prove that $e^x > 1 + x$ for all $x > 0$ using derivatives.
>
> **Solution:**

> Let $f(x) = e^x - (1 + x)$.
>
> $f(0) = 1 - 1 = 0$
>
> $f'(x) = e^x - 1$
>
> For $x > 0$: $e^x > 1$, so $f'(x) > 0$.
>
> Thus $f$ is increasing for $x > 0$.
>
> Since $f(0) = 0$ and $f$ is increasing, $f(x) > 0$ for $x > 0$.
>
> Therefore, $e^x > 1 + x$ for $x > 0$.

> **↗ Connection · Problem 8**
>
> **Question:** A wire of length 100 cm is cut into two pieces. One forms a circle, the other a square. How should it be cut to minimize total area?
>
> **Solution:**

> Let circle have circumference $x$, square has perimeter $100 - x$.
>
> Circle: radius $= \frac{x}{2\pi}$, area $= \pi\left(\frac{x}{2\pi}\right)^2 = \frac{x^2}{4\pi}$
>
> Square: side $= \frac{100-x}{4}$, area $= \left(\frac{100-x}{4}\right)^2 = \frac{(100-x)^2}{16}$
>
> Total area: $A(x) = \frac{x^2}{4\pi} + \frac{(100-x)^2}{16}$
>
> $\frac{dA}{dx} = \frac{2x}{4\pi} - \frac{2(100-x)}{16} = 0$
>
> $\frac{x}{2\pi} = \frac{100-x}{8}$
>
> $4x = \pi(100 - x)$
>
> $x(4 + \pi) = 100\pi$
>
> $x = \frac{100\pi}{4 + \pi}$ cm for circle
>
> $100 - x = \frac{400}{4 + \pi}$ cm for square

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Critical Point ≠ Always Max/Min**
>
> **Wrong:** If $f'(c) = 0$, then $c$ is a max or min. ✗
>
> **Correct:** $f'(c) = 0$ means $c$ is a critical point. Use first/second derivative test to determine if it’s max, min, or neither.
>
> Example: $f(x) = x^3$ has $f'(0) = 0$, but $x = 0$ is **neither** max nor min (inflection point).

> **⚠ Trap #2: Forgetting Endpoints**
>
> For global max/min on $[a, b]$, **always check endpoints** in addition to critical points!
>
> Critical points give local extrema, but global extrema might occur at boundaries.

> **⚠ Trap #3: Sign Chart Errors**
>
> When making sign charts, test values in **each interval**, not just at critical points!
>
> Pick a test point in each interval and substitute into $f'(x)$.

> **⚠ Trap #4: Related Rates Without Variables**
>
> In related rates problems, don’t substitute values **before differentiating**!
>
> Differentiate the general equation first, **then** substitute the given values.

---

## Quick Revision Box

| Application | Key Formula/Method |
| --- | --- |
| **Increasing** | $f'(x) > 0$ |
| **Decreasing** | $f'(x) < 0$ |
| **Local Max** | $f'$ changes $+$ to $-$ OR $f'' < 0$ |
| **Local Min** | $f'$ changes $-$ to $+$ OR $f'' > 0$ |
| **Global Max/Min** | Check critical points + endpoints |
| **Tangent slope** | $m = f'(x_0)$ |
| **Normal slope** | $m = -\frac{1}{f'(x_0)}$ |
| **Related Rates** | Differentiate relation w.r.t. time |
| **MVT** | $f'(c) = \frac{f(b) - f(a)}{b - a}$ |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Applications of derivatives is a **monster topic** — 4-6 questions in JEE Main, 5-8 in JEE Advanced!
>
> **Time-Saver:** For simple max/min, second derivative test is faster than first derivative test.
>
> **Common Patterns:**
>
> - **Geometry problems:** Rectangle with fixed perimeter → square has max area

> - **Rate problems:** Always differentiate first, substitute later

> - **Tangent/normal:** Just plug into formulas — don’t overthink!
>
> **JEE Loves:** Optimization with constraints (use substitution to get one variable). Practice this extensively!
>
> **Trap Alert:** “Find maximum area” often has a **domain restriction** (like $x > 0$). Don’t forget to check endpoints!
>
> **Advanced Hack:** If $f'(x)$ has only one critical point and changes sign, you don’t need second derivative test — it’s automatically a max or min!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Derivatives reveal function behavior:** $f' > 0$ (increasing), $f' < 0$ (decreasing), $f' = 0$ (critical points).

> 2. **Two tests for max/min:** First derivative (sign change) always works; second derivative (concavity) is faster but can fail.

> 3. **Global extrema on $[a, b]$:** Check ALL critical points + BOTH endpoints. Largest = max, smallest = min.

> 4. **Optimization strategy:** Identify objective → find constraint → express in one variable → differentiate → solve.

> 5. **Related rates:** Differentiate the relation w.r.t. time, **then** substitute values (not before!).

> 6. **Tangent/Normal:** Plug and play with formulas. Tangent slope = $f'(x_0)$, normal slope = $-1/f'(x_0)$.
>
> **“Derivatives turn calculus theory into real-world problem-solving power!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Differentiability](../differentiability/index.md) — Foundation for applications
- [Differentiation Rules](../differentiation-rules/index.md) — Computing derivatives efficiently
- [Continuity](../continuity/index.md) — Mean Value Theorem requires continuity

### Mathematical Foundations

- [Functions Basics](../../sets-relations-functions/functions-basics/index.md) — Understanding domain, range
- [Coordinate Geometry](../../coordinate-geometry/index.md) — Tangents, normals, curves
- [Trigonometry](../../trigonometry/index.md) — Optimization with trig functions

### Applications

- [Integral Calculus](../../integral-calculus/index.md) — Area, volume optimization
- [Differential Equations](../../differential-equations/index.md) — Rate equations
- [Sequences & Series](../../sequences-series/index.md) — Maxima/minima of sequences

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) — Velocity/acceleration optimization
- [Projectile Motion](../../../physics/kinematics/index.md) — Maximum range, height
- [Work, Energy, Power](../../../physics/work-energy-power/index.md) — Potential energy minimization
- [Simple Harmonic Motion](../../../physics/oscillations-waves/index.md) — Amplitude, phase analysis

### Real-World Applications

- Economics: Profit maximization, cost minimization
- Engineering: Structural optimization, efficiency
- Biology: Population growth rates
- Business: Revenue optimization, inventory management

---

From TestGuru · our mock-test platform

## You've read Applications of Derivatives.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fapplications-derivatives%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/applications-derivatives/",this.page.identifier="/mathematics/limits-continuity-differentiability/applications-derivatives/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421771868370"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421771868370")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/applications-derivatives/](https://jeenotes.in/mathematics/limits-continuity-differentiability/applications-derivatives/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/applications-derivatives/index.html`_
