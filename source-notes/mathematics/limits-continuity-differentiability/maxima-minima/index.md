---
title: "Maxima and Minima - Optimization Problems"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/maxima-minima/"
description: "Master finding local and global extrema, optimization techniques, and the second derivative test for JEE."
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 9 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/maxima-minima/index.html"
extracted: "2026-11-23"
---

> Master finding local and global extrema, optimization techniques, and the second derivative test for JEE.

## The Hook: Maximizing Profit, Minimizing Cost

> **★ Key point · Connect: The Business Strategy in Rocket Singh (2008)**
>
> Harpreet Singh Bedi starts a company and faces a classic problem:
>
> **Price too high** → Few customers → Low profit

> **Price too low** → Many customers but little margin → Low profit
>
> **Question:** What price maximizes profit?
>
> This is an **optimization problem** — finding the maximum or minimum value of a function.
>
> If profit $P(x) = -2x^2 + 40x - 50$ (where $x$ is price), we need to find when $P(x)$ is maximum.
>
> **Solution:** Find when $P'(x) = 0$
>
> $P'(x) = -4x + 40 = 0 \Rightarrow x = 10$
>
> Maximum profit at price = ₹10!
>
> This is the power of **maxima and minima** — optimization is everywhere in real life.

---

## Interactive: Explore Function Extrema

See how functions reach their highest and lowest points!

---

## What are Maxima and Minima?

### Definitions

**Local Maximum at $x = a$:**
$f(a) \geq f(x)$ for all $x$ in a small neighborhood around $a$

**Local Minimum at $x = a$:**
$f(a) \leq f(x)$ for all $x$ in a small neighborhood around $a$

**Global (Absolute) Maximum:**
$f(a) \geq f(x)$ for ALL $x$ in the domain

**Global (Absolute) Minimum:**
$f(a) \leq f(x)$ for ALL $x$ in the domain

### Geometric Interpretation

- **Local maximum:** Peak of a hill (but there might be higher hills elsewhere)
- **Global maximum:** The highest point on the entire graph
- **Local minimum:** Bottom of a valley (but there might be deeper valleys)
- **Global minimum:** The lowest point on the entire graph

---

## Critical Points and Stationary Points

**Critical Point:** A point $x = a$ where **either**:

1. $f'(a) = 0$ (horizontal tangent), OR
2. $f'(a)$ does not exist (sharp corner, vertical tangent, discontinuity)

**Stationary Point:** A point where $f'(a) = 0$ (subset of critical points)

**Key Fact:** Maxima and minima can only occur at:

- Critical points (interior of domain)
- Endpoints of the domain

---

## Finding Maxima and Minima: The Process

### Step-by-Step Method

**To find maxima/minima of $f(x)$ on $[a, b]$:**

**Step 1:** Find $f'(x)$

**Step 2:** Solve $f'(x) = 0$ to find stationary points

**Step 3:** Check points where $f'(x)$ doesn’t exist (if any)

**Step 4:** Determine nature using:

- **First Derivative Test**, OR
- **Second Derivative Test**

**Step 5:** Evaluate $f(x)$ at critical points and endpoints

**Step 6:** Compare values to find global maximum/minimum

---

## First Derivative Test

**First Derivative Test:**

Let $x = a$ be a critical point where $f'(a) = 0$.

| Condition | Nature of $x = a$ |
| --- | --- |
| $f'(x)$ changes from $+$ to $-$ as $x$ increases through $a$ | **Local Maximum** |
| $f'(x)$ changes from $-$ to $+$ as $x$ increases through $a$ | **Local Minimum** |
| $f'(x)$ doesn’t change sign | **Neither** (point of inflection) |

**Visual:** Think of climbing a mountain:

- Slope goes from **uphill (+) to downhill (-)** → You’re at the **top** (maximum)
- Slope goes from **downhill (-) to uphill (+)** → You’re at the **bottom** (minimum)

### Example 1

Find local extrema of $f(x) = x^3 - 3x^2 - 9x + 5$

**Step 1:** $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$

**Step 2:** $f'(x) = 0 \Rightarrow x = -1, 3$

**Step 3:** Sign analysis

| Interval | $x < -1$ | $x = -1$ | $-1 < x < 3$ | $x = 3$ | $x > 3$ |
| --- | --- | --- | --- | --- | --- |
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | Increasing | Max | Decreasing | Min | Increasing |

**Conclusion:**

- $x = -1$: Local **maximum** (slope changes from + to -)
- $x = 3$: Local **minimum** (slope changes from - to +)

---

## Second Derivative Test

**Second Derivative Test:**

Let $f'(a) = 0$ and $f''(a)$ exists. Then:

| Condition | Nature of $x = a$ |
| --- | --- |
| $f''(a) > 0$ | **Local Minimum** (concave up ∪) |
| $f''(a) < 0$ | **Local Maximum** (concave down ∩) |
| $f''(a) = 0$ | **Test fails** (use first derivative test) |

**Intuition:**

- $f''(a) > 0$: Curve bends upward → bottom of a cup → **minimum**
- $f''(a) < 0$: Curve bends downward → top of a hill → **maximum**

### Example 2

Find extrema of $f(x) = x^4 - 4x^3$

**Step 1:** $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$

**Step 2:** $f'(x) = 0 \Rightarrow x = 0, 3$

**Step 3:** Second derivative test

$f''(x) = 12x^2 - 24x = 12x(x - 2)$

At $x = 0$: $f''(0) = 0$ (test fails)

At $x = 3$: $f''(3) = 12(3)(1) = 36 > 0$ → **Local minimum**

For $x = 0$, use first derivative test:

- For $x < 0$: $f'(x) = 4x^2(x-3) < 0$ (negative × negative = positive? NO, $(x-3)$ is negative)
- Actually: $x = -0.1$: $f'(-0.1) = 4(0.01)(-3.1) < 0$
- $x = 0.1$: $f'(0.1) = 4(0.01)(-2.9) < 0$

Slope doesn’t change sign → $x = 0$ is **neither** max nor min (inflection point)

**Values:**

- $f(0) = 0$
- $f(3) = 81 - 108 = -27$ ← Local minimum

---

## Special Cases and Important Results

### Case 1: Points Where Derivative Doesn’t Exist

**Example:** $f(x) = |x|$ on $[-2, 2]$

$f'(x)$ doesn’t exist at $x = 0$ (sharp corner)

But $f(0) = 0$ is the **global minimum**!

**Lesson:** Always check points where $f'$ doesn’t exist.

### Case 2: Endpoints of Closed Interval

**Example:** $f(x) = x^2$ on $[1, 3]$

$f'(x) = 2x = 0 \Rightarrow x = 0$ (not in $[1, 3]$)

Check endpoints:

- $f(1) = 1$ ← **Global minimum**
- $f(3) = 9$ ← **Global maximum**

**Lesson:** Always evaluate at endpoints!

### Case 3: No Global Extrema

**Example:** $f(x) = x^3$ on $(-\infty, \infty)$

$f'(x) = 3x^2 = 0 \Rightarrow x = 0$

But $f''(0) = 0$ and first derivative test shows $f'(x) \geq 0$ everywhere (always increasing)

$x = 0$ is **neither** max nor min (inflection point)

No global max or min exists!

---

## Optimization Problems: Real-World Applications

### Template for Word Problems

**Optimization Problem Steps:**

1. **Read carefully** — Identify what to maximize/minimize
2. **Draw a diagram** if geometric
3. **Define variables** — Let $x$ be the unknown
4. **Write the objective function** — Express what you want to optimize in terms of $x$
5. **Find constraints** — Any restrictions on $x$?
6. **Differentiate** — Find $f'(x) = 0$
7. **Check nature** — Use second derivative or first derivative test
8. **Answer the question** — Don’t forget units!

### Example 1: Maximum Area Problem

**Problem:** A farmer has 100 m of fencing. What dimensions maximize the area of a rectangular enclosure?

**Solution:**

Let length = $x$, width = $y$

**Constraint:** Perimeter = $2x + 2y = 100 \Rightarrow y = 50 - x$

**Objective:** Maximize area $A = xy = x(50 - x) = 50x - x^2$

**Differentiate:** $\frac{dA}{dx} = 50 - 2x = 0 \Rightarrow x = 25$

**Second derivative:** $\frac{d^2A}{dx^2} = -2 < 0$ → **Maximum** ✓

**Answer:** Length = 25 m, Width = 25 m (square gives maximum area)

### Example 2: Minimum Distance Problem

**Problem:** Find the point on the curve $y = x^2$ closest to $(0, 1)$.

**Solution:**

Point on curve: $(x, x^2)$

**Distance:** $D = \sqrt{(x-0)^2 + (x^2-1)^2} = \sqrt{x^2 + (x^2-1)^2}$

**Tip:** Minimize $D^2$ instead (easier, same result):

$$f(x) = D^2 = x^2 + (x^2 - 1)^2 = x^2 + x^4 - 2x^2 + 1 = x^4 - x^2 + 1$$

**Differentiate:** $f'(x) = 4x^3 - 2x = 2x(2x^2 - 1) = 0$

$x = 0$ or $x^2 = \frac{1}{2} \Rightarrow x = \pm\frac{1}{\sqrt{2}}$

**Second derivative:** $f''(x) = 12x^2 - 2$

- $f''(0) = -2 < 0$ → **Maximum** (furthest point)
- $f''\left(\frac{1}{\sqrt{2}}\right) = 12 \cdot \frac{1}{2} - 2 = 4 > 0$ → **Minimum** ✓

**Answer:** Closest points are $\left(\pm\frac{1}{\sqrt{2}}, \frac{1}{2}\right)$

### Example 3: Minimum Cost Problem (JEE Type)

**Problem:** A box with square base and open top must have volume 32 m³. Find dimensions that minimize material used.

**Solution:**

Let base side = $x$, height = $h$

**Constraint:** Volume = $x^2h = 32 \Rightarrow h = \frac{32}{x^2}$

**Surface area (material):** $S = x^2 + 4xh$ (base + 4 sides, no top)

$$S = x^2 + 4x \cdot \frac{32}{x^2} = x^2 + \frac{128}{x}$$

**Differentiate:** $\frac{dS}{dx} = 2x - \frac{128}{x^2} = 0$

$$2x = \frac{128}{x^2} \Rightarrow 2x^3 = 128 \Rightarrow x^3 = 64 \Rightarrow x = 4$$

**Second derivative:** $\frac{d^2S}{dx^2} = 2 + \frac{256}{x^3}$

At $x = 4$: $\frac{d^2S}{dx^2} = 2 + \frac{256}{64} = 2 + 4 = 6 > 0$ → **Minimum** ✓

**Answer:** Base = 4 m × 4 m, Height = $\frac{32}{16} = 2$ m

---

## Advanced Concepts

### Absolute Maxima/Minima on Closed Interval

**Extreme Value Theorem:**

If $f(x)$ is continuous on closed interval $[a, b]$, then $f$ attains both absolute maximum and absolute minimum on $[a, b]$.

**Method to find them:**

1. Find all critical points in $(a, b)$
2. Evaluate $f$ at critical points and endpoints $a, b$
3. Largest value = absolute max, smallest = absolute min

### Multiple Critical Points

When a function has many critical points, create a table:

| $x$ | $f(x)$ | Type |
| --- | --- | --- |
| Critical point 1 | Value | Max/Min/Neither |
| Critical point 2 | Value | Max/Min/Neither |
| Endpoint 1 | Value | - |
| Endpoint 2 | Value | - |

Compare all values to determine global extrema.

---

## Memory Tricks

> **★ Key point · Second Derivative Trick: CUP vs CAP**
>
> - $f''(x) > 0$: **C**oncave **UP** (∪) → Like a **CUP** → Holds water → **Minimum**

> - $f''(x) < 0$: **C**oncave down (∩) → Like a **CAP** → Water falls off → **Maximum**
>
> **“Positive second derivative = Cup = Minimum”**

> **★ Key point · First Derivative Sign Change: Hill & Valley**
>
> - **+ to -**: Climbing **up** then going **down** → At the **top** → **Maximum**

> - **- to +**: Going **down** then climbing **up** → At the **bottom** → **Minimum**
>
> **“Plus-to-minus = Maximum, Minus-to-plus = Minimum”**

> **★ Key point · Optimization Mnemonic: DCDC**
>
> **D**efine variables

> **C**onstraint equation

> **D**ifferentiate

> **C**heck nature (2nd derivative)
>
> **“Define, Constrain, Differentiate, Check!”**

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Find local maxima/minima of $f(x) = x^3 - 6x^2 + 9x + 15$
>
> **Solution:**
>
> $$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$$
>
> Critical points: $x = 1, 3$
>
> Second derivative: $f''(x) = 6x - 12$
>
> At $x = 1$: $f''(1) = -6 < 0$ → **Local maximum**, $f(1) = 19$
>
> At $x = 3$: $f''(3) = 6 > 0$ → **Local minimum**, $f(3) = 15$

> **↗ Connection · Problem 2**
>
> **Question:** Find absolute max/min of $f(x) = x^2 - 4x + 6$ on $[0, 4]$
>
> **Solution:**
>
> $$f'(x) = 2x - 4 = 0 \Rightarrow x = 2$$
>
> Evaluate:
>
> - $f(0) = 6$

> - $f(2) = 4 - 8 + 6 = 2$ ← **Absolute minimum**

> - $f(4) = 16 - 16 + 6 = 6$
>
> **Absolute maximum** = 6 (at $x = 0$ and $x = 4$)

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** Divide 10 into two parts such that their product is maximum.
>
> **Solution:**
>
> Let parts be $x$ and $10 - x$
>
> **Product:** $P = x(10 - x) = 10x - x^2$
>
> $$P'(x) = 10 - 2x = 0 \Rightarrow x = 5$$

$$P''(x) = -2 < 0$$
>
> → **Maximum**
>
> **Answer:** Parts are 5 and 5.

> **↗ Connection · Problem 4**
>
> **Question:** A wire of length 28 cm is bent into a rectangle. What dimensions give maximum area?
>
> **Solution:**
>
> Let length = $x$, width = $y$
>
> Perimeter: $2x + 2y = 28 \Rightarrow y = 14 - x$
>
> Area: $A = xy = x(14 - x) = 14x - x^2$
>
> $$A'(x) = 14 - 2x = 0 \Rightarrow x = 7$$

$$A''(x) = -2 < 0$$
>
> → **Maximum**
>
> **Answer:** 7 cm × 7 cm (square)

> **↗ Connection · Problem 5**
>
> **Question:** Find two positive numbers whose sum is 16 and sum of whose squares is minimum.
>
> **Solution:**
>
> Let numbers be $x$ and $16 - x$
>
> Sum of squares: $S = x^2 + (16-x)^2 = x^2 + 256 - 32x + x^2 = 2x^2 - 32x + 256$
>
> $$S'(x) = 4x - 32 = 0 \Rightarrow x = 8$$

$$S''(x) = 4 > 0$$
>
> → **Minimum**
>
> **Answer:** Numbers are 8 and 8.

### Level 3: JEE Advanced

> **↗ Connection · Problem 6**
>
> **Question:** A cylinder is inscribed in a sphere of radius $R$. Find the maximum volume of the cylinder.
>
> **Solution:**
>
> Let cylinder radius = $r$, height = $h$
>
> By Pythagorean theorem: $r^2 + \left(\frac{h}{2}\right)^2 = R^2$
>
> $$r^2 = R^2 - \frac{h^2}{4}$$
>
> Volume: $V = \pi r^2 h = \pi\left(R^2 - \frac{h^2}{4}\right)h = \pi R^2h - \frac{\pi h^3}{4}$
>
> $$\frac{dV}{dh} = \pi R^2 - \frac{3\pi h^2}{4} = 0$$

$$R^2 = \frac{3h^2}{4} \Rightarrow h = \frac{2R}{\sqrt{3}}$$

$$r^2 = R^2 - \frac{h^2}{4} = R^2 - \frac{R^2}{3} = \frac{2R^2}{3}$$
>
> Maximum volume: $V = \pi \cdot \frac{2R^2}{3} \cdot \frac{2R}{\sqrt{3}} = \frac{4\pi R^3}{3\sqrt{3}} = \frac{4\pi R^3\sqrt{3}}{9}$

> **↗ Connection · Problem 7 (JEE Advanced 2018 Type)**
>
> **Question:** A window has the shape of a rectangle surmounted by a semicircle. If the perimeter is 10 m, find dimensions for maximum light (area).
>
> **Solution:**
>
> Let rectangle width = $2r$ (diameter of semicircle), height = $h$
>
> Perimeter: $2h + 2r + \pi r = 10$
>
> $$h = \frac{10 - 2r - \pi r}{2} = 5 - r - \frac{\pi r}{2}$$
>
> Area: $A = 2rh + \frac{\pi r^2}{2}$
>
> $$A = 2r\left(5 - r - \frac{\pi r}{2}\right) + \frac{\pi r^2}{2}$$

$$= 10r - 2r^2 - \pi r^2 + \frac{\pi r^2}{2} = 10r - 2r^2 - \frac{\pi r^2}{2}$$

$$\frac{dA}{dr} = 10 - 4r - \pi r = 0$$

$$r = \frac{10}{4 + \pi}$$

$$h = 5 - r - \frac{\pi r}{2} = 5 - \frac{10}{4+\pi} - \frac{5\pi}{4+\pi} = \frac{5(4+\pi) - 10 - 5\pi}{4+\pi} = \frac{10}{4+\pi}$$
>
> **Answer:** $r = \frac{10}{4+\pi}$ m, $h = \frac{10}{4+\pi}$ m (height = radius!)

> **↗ Connection · Problem 8 (Challenging!)**
>
> **Question:** Prove that of all rectangles with given perimeter, the square has maximum area.
>
> **Solution:**
>
> Let perimeter = $P$, length = $x$, width = $y$
>
> Constraint: $2x + 2y = P \Rightarrow y = \frac{P}{2} - x$
>
> Area: $A = xy = x\left(\frac{P}{2} - x\right) = \frac{Px}{2} - x^2$
>
> $$\frac{dA}{dx} = \frac{P}{2} - 2x = 0 \Rightarrow x = \frac{P}{4}$$

$$y = \frac{P}{2} - \frac{P}{4} = \frac{P}{4}$$
>
> Since $x = y$, the rectangle is a **square**.
>
> $$\frac{d^2A}{dx^2} = -2 < 0$$
>
> → **Maximum** ∎

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting Endpoints**
>
> When finding absolute max/min on $[a, b]$, **always** evaluate at endpoints!
>
> Critical points give local extrema, but global extrema might be at boundaries.

> **⚠ Trap #2: Second Derivative Test Failure**
>
> If $f''(a) = 0$, second derivative test **fails**. Must use first derivative test instead!
>
> **Example:** $f(x) = x^4$ at $x = 0$: $f'(0) = 0$, $f''(0) = 0$ (test fails), but $x = 0$ is actually a minimum.

> **⚠ Trap #3: Not Checking Feasibility**
>
> In optimization problems, check if your solution makes physical sense!
>
> If you get $x = -5$ meters for a length, something’s wrong!

> **⚠ Trap #4: Optimizing Wrong Function**
>
> **Problem:** “Find dimensions that minimize cost&mldr;”
>
> Don’t minimize area/volume — minimize **cost** (which may depend on area/volume)!

---

## Quick Revision Box

| Test | Condition | Result |
| --- | --- | --- |
| **First Derivative** | $f'$ changes + to - | Local Max |
|  | $f'$ changes - to + | Local Min |
| **Second Derivative** | $f'(a) = 0$ and $f''(a) > 0$ | Local Min (∪) |
|  | $f'(a) = 0$ and $f''(a) < 0$ | Local Max (∩) |
|  | $f''(a) = 0$ | Test fails |

**Critical Points:** $f'(x) = 0$ or $f'(x)$ doesn’t exist

**Absolute Extrema on $[a, b]$:** Check critical points + endpoints

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Maxima-minima is **HUGE** in JEE — 4-5 questions across Main & Advanced!
>
> **Time-Saver:** In optimization, if objective function has only one critical point and problem makes sense, you can often skip checking nature (it must be max/min).
>
> **Common Pattern:** JEE loves:
>
> - Cylinder/cone in sphere problems

> - Rectangle/square area/perimeter problems

> - Distance minimization problems
>
> **Trap Alert:** Always check domain restrictions! Negative lengths/areas are meaningless.
>
> **Advanced Tip:** For complex optimization, sometimes **AM-GM inequality** is faster than calculus!
>
> **Exam Hack:** If asked “prove square gives max area” or similar, use second derivative to show it’s truly a maximum, not just $f'(x) = 0$.

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Maxima/minima** occur at critical points (where $f'(x) = 0$ or doesn’t exist) or at endpoints.

> 2. **First derivative test:** Check sign change of $f'(x)$ around critical point.

> 3. **Second derivative test:** $f''(a) > 0$ → min, $f''(a) < 0$ → max (faster but can fail if $f'' = 0$).

> 4. **Optimization strategy:** Define variables → Write constraint → Express objective function → Differentiate → Check nature.

> 5. **Absolute extrema on $[a, b]$:** Evaluate at ALL critical points AND endpoints, then compare.
>
> **“In life and calculus, finding the maximum and minimum is all about knowing where to look!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Higher Derivatives](../higher-derivatives/index.md) — Second derivative test uses $f''(x)$
- [Mean Value Theorems](../mean-value-theorems/index.md) — Rolle’s theorem connects to maxima/minima
- [Curve Sketching](../curve-sketching/index.md) — Using extrema to sketch curves
- [Applications of Derivatives](../applications-derivatives/index.md) — Broader applications

### Mathematical Foundations

- [Inequalities](../../index.md) — AM-GM for optimization
- [Coordinate Geometry](../../coordinate-geometry/index.md) — Distance problems

### Applications

- [Area Under Curves](../../integral-calculus/index.md) — Related optimization
- [Differential Equations](../../differential-equations/index.md) — Finding extrema of solutions

### Physics Connections

- [Projectile Motion](../../../physics/kinematics/index.md) — Maximum height/range
- [Energy Conservation](../../../physics/work-energy-power/index.md) — Minimum energy configurations
- [Optics](../../../physics/optics/index.md) — Lens optimization

---

From TestGuru · our mock-test platform

## You've read Maxima and Minima - Optimization Problems.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fmaxima-minima%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/maxima-minima/",this.page.identifier="/mathematics/limits-continuity-differentiability/maxima-minima/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="derivativeSlope" id="anim-derivativeSlope-1795396421851826542"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-derivativeSlope-1795396421851826542")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/maxima-minima/](https://jeenotes.in/mathematics/limits-continuity-differentiability/maxima-minima/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/maxima-minima/index.html`_
