---
title: "Curve Sketching - Monotonicity, Concavity, Asymptotes"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/curve-sketching/"
description: "Master curve sketching using derivatives, analyze monotonicity, concavity, inflection points, and asymptotes for JEE."
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 11 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/curve-sketching/index.html"
extracted: "2026-11-23"
---

> Master curve sketching using derivatives, analyze monotonicity, concavity, inflection points, and asymptotes for JEE.

## The Hook: Reading the Story of a Graph

> **★ Key point · Connect: The Journey in Zindagi Na Milegi Dobara (2011)**
>
> Three friends go on a road trip through Spain. Their journey has:
>
> - **Uphill stretches** (exciting, growing)

> - **Downhill slopes** (relaxing, declining)

> - **Sharp turns** (sudden changes in direction)

> - **Smooth curves** (gradual transitions)

> - **Plateaus** (stable periods)
>
> Just like their journey, every function $f(x)$ tells a **story** through its graph!
>
> **Curve sketching** is the art of reading this story using calculus:
>
> - Where is $f$ increasing/decreasing? (Uphill/downhill)

> - Where does $f$ change direction? (Critical points)

> - Where does $f$ curve up/down? (Concavity)

> - Where does $f$ approach infinity? (Asymptotes)
>
> Master curve sketching, and you can visualize **any** function instantly!

---

## Interactive: Build a Curve Step-by-Step

See how derivatives control the shape of curves!

---

## The Curve Sketching Checklist

**Complete Curve Sketching Procedure:**

**Step 1: Domain & Range** — Where is $f$ defined? Any restrictions?

**Step 2: Intercepts**

- $y$-intercept: Set $x = 0$
- $x$-intercept: Solve $f(x) = 0$

**Step 3: Symmetry**

- Even function: $f(-x) = f(x)$ (symmetric about $y$-axis)
- Odd function: $f(-x) = -f(x)$ (symmetric about origin)

**Step 4: Asymptotes**

- Vertical: Where denominator = 0
- Horizontal: $\lim_{x \to \pm\infty} f(x)$
- Oblique: Long division if degree(numerator) = degree(denominator) + 1

**Step 5: First Derivative** — Monotonicity

- Find $f'(x)$ and critical points ($f'(x) = 0$ or undefined)
- Sign chart for $f'(x)$ → Intervals of increase/decrease

**Step 6: Second Derivative** — Concavity

- Find $f''(x)$ and inflection point candidates ($f''(x) = 0$ or undefined)
- Sign chart for $f''(x)$ → Concave up/down regions

**Step 7: Key Points** — Evaluate $f$ at:

- Critical points
- Inflection points
- A few sample points

**Step 8: Sketch** — Combine all information!

---

## Monotonicity (Increasing/Decreasing)

### Definitions

**Increasing on an interval:**

- **Strictly increasing:** $f(x_1) < f(x_2)$ whenever $x_1 < x_2$
- **Non-decreasing:** $f(x_1) \leq f(x_2)$ whenever $x_1 < x_2$

**Decreasing on an interval:**

- **Strictly decreasing:** $f(x_1) > f(x_2)$ whenever $x_1 < x_2$
- **Non-increasing:** $f(x_1) \geq f(x_2)$ whenever $x_1 < x_2$

### Using First Derivative

**Monotonicity Test:**

On interval $I$:

- $f'(x) > 0$ for all $x \in I$ $\Rightarrow$ $f$ is **strictly increasing** on $I$
- $f'(x) < 0$ for all $x \in I$ $\Rightarrow$ $f$ is **strictly decreasing** on $I$
- $f'(x) = 0$ for all $x \in I$ $\Rightarrow$ $f$ is **constant** on $I$

**Visual:**

- Positive slope → Graph rises from left to right
- Negative slope → Graph falls from left to right
- Zero slope → Horizontal line

### Example: Finding Monotonicity Intervals

Find where $f(x) = x^3 - 6x^2 + 9x + 1$ is increasing/decreasing.

**Step 1:** Find $f'(x)$

$$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$$

**Step 2:** Critical points

$$f'(x) = 0 \Rightarrow x = 1, 3$$

**Step 3:** Sign chart

| Interval | $x < 1$ | $x = 1$ | $1 < x < 3$ | $x = 3$ | $x > 3$ |
| --- | --- | --- | --- | --- | --- |
| $(x-1)$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $(x-3)$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | ↗ | Max | ↘ | Min | ↗ |

**Answer:**

- **Increasing:** $(-\infty, 1) \cup (3, \infty)$
- **Decreasing:** $(1, 3)$
- **Local maximum** at $x = 1$
- **Local minimum** at $x = 3$

---

## Concavity and Inflection Points

### Definitions

**Concave Up (∪):** Graph curves upward, like a cup

- Tangent lines lie **below** the curve
- Function “holds water”

**Concave Down (∩):** Graph curves downward, like a cap

- Tangent lines lie **above** the curve
- Function “spills water”

**Inflection Point:** Point where concavity changes (from ∪ to ∩ or vice versa)

### Using Second Derivative

**Concavity Test:**

On interval $I$:

- $f''(x) > 0$ for all $x \in I$ $\Rightarrow$ $f$ is **concave up** on $I$
- $f''(x) < 0$ for all $x \in I$ $\Rightarrow$ $f$ is **concave down** on $I$

**Inflection Point at $x = c$:**

- $f''(c) = 0$ (or undefined)
- $f''$ changes sign at $x = c$

**Note:** $f''(c) = 0$ is necessary but NOT sufficient! Must check sign change.

### Example: Finding Concavity and Inflection Points

Find concavity and inflection points of $f(x) = x^4 - 4x^3$

**Step 1:** Find $f''(x)$

$$f'(x) = 4x^3 - 12x^2$$

$$f''(x) = 12x^2 - 24x = 12x(x - 2)$$

**Step 2:** Solve $f''(x) = 0$

$$x = 0, 2$$

**Step 3:** Sign chart

| Interval | $x < 0$ | $x = 0$ | $0 < x < 2$ | $x = 2$ | $x > 2$ |
| --- | --- | --- | --- | --- | --- |
| $12x$ | $-$ | $0$ | $+$ | $+$ | $+$ |
| $(x-2)$ | $-$ | $-$ | $-$ | $0$ | $+$ |
| $f''(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| Concavity | ∪ | ? | ∩ | ? | ∪ |

**Step 4:** Check sign changes

- At $x = 0$: $f''$ changes from $+$ to $-$ → **Inflection point** ✓
- At $x = 2$: $f''$ changes from $-$ to $+$ → **Inflection point** ✓

**Values:**

- $f(0) = 0$
- $f(2) = 16 - 32 = -16$

**Answer:**

- **Concave up:** $(-\infty, 0) \cup (2, \infty)$
- **Concave down:** $(0, 2)$
- **Inflection points:** $(0, 0)$ and $(2, -16)$

---

## Asymptotes

### Vertical Asymptotes

**Vertical asymptote at $x = a$:**

If $\lim_{x \to a^+} f(x) = \pm\infty$ or $\lim_{x \to a^-} f(x) = \pm\infty$

**Finding:** Solve denominator = 0 (for rational functions)

**Example:** $f(x) = \frac{1}{x - 2}$

Denominator = 0: $x = 2$

$\lim_{x \to 2^+} \frac{1}{x-2} = +\infty$, $\lim_{x \to 2^-} \frac{1}{x-2} = -\infty$

**Vertical asymptote:** $x = 2$

### Horizontal Asymptotes

**Horizontal asymptote $y = L$:**

If $\lim_{x \to \infty} f(x) = L$ or $\lim_{x \to -\infty} f(x) = L$

**For rational functions** $\frac{p(x)}{q(x)}$:

- Degree of $p <$ Degree of $q$ → $y = 0$
- Degree of $p =$ Degree of $q$ → $y = \frac{\text{leading coeff of } p}{\text{leading coeff of } q}$
- Degree of $p >$ Degree of $q$ → No horizontal asymptote

**Examples:**

1. $f(x) = \frac{2x^2 + 1}{x^2 - 4}$: Same degree → $y = \frac{2}{1} = 2$
2. $f(x) = \frac{3x}{x^2 + 1}$: Numerator degree < denominator → $y = 0$
3. $f(x) = \frac{x^3}{x^2 - 1}$: Numerator degree > denominator → No horizontal asymptote (but has oblique)

### Oblique (Slant) Asymptotes

**Oblique asymptote $y = mx + c$:**

When degree(numerator) = degree(denominator) + 1

**Finding:** Perform polynomial long division

**Example:** $f(x) = \frac{x^2 + 1}{x}$

Long division: $\frac{x^2 + 1}{x} = x + \frac{1}{x}$

As $x \to \infty$, $\frac{1}{x} \to 0$

**Oblique asymptote:** $y = x$

---

## Complete Example: Full Curve Sketch

Sketch $f(x) = \frac{x^2}{x^2 - 4}$

### Step 1: Domain

Denominator ≠ 0: $x^2 - 4 \neq 0 \Rightarrow x \neq \pm 2$

**Domain:** $(-\infty, -2) \cup (-2, 2) \cup (2, \infty)$

### Step 2: Intercepts

- $y$-intercept: $f(0) = 0$ → $(0, 0)$
- $x$-intercept: $x^2 = 0 \Rightarrow x = 0$ → $(0, 0)$

### Step 3: Symmetry

$$f(-x) = \frac{(-x)^2}{(-x)^2 - 4} = \frac{x^2}{x^2 - 4} = f(x)$$

**Even function** → Symmetric about $y$-axis

### Step 4: Asymptotes

**Vertical:** $x = -2, 2$

**Horizontal:**

$$\lim_{x \to \infty} \frac{x^2}{x^2 - 4} = \lim_{x \to \infty} \frac{1}{1 - 4/x^2} = 1$$

**Horizontal asymptote:** $y = 1$

### Step 5: First Derivative (Monotonicity)

$$f'(x) = \frac{2x(x^2 - 4) - x^2(2x)}{(x^2 - 4)^2} = \frac{2x^3 - 8x - 2x^3}{(x^2-4)^2} = \frac{-8x}{(x^2-4)^2}$$

Critical point: $x = 0$

Sign chart:

| Interval | $x < -2$ | $-2 < x < 0$ | $0 < x < 2$ | $x > 2$ |
| --- | --- | --- | --- | --- |
| $-8x$ | $+$ | $+$ | $-$ | $-$ |
| $(x^2-4)^2$ | $+$ | $+$ | $+$ | $+$ |
| $f'(x)$ | $+$ | $+$ | $-$ | $-$ |
| $f(x)$ | ↗ | ↗ | ↘ | ↘ |

**Increasing:** $(-\infty, -2) \cup (-2, 0)$
**Decreasing:** $(0, 2) \cup (2, \infty)$
**Local maximum** at $x = 0$: $f(0) = 0$

### Step 6: Second Derivative (Concavity)

$$f''(x) = \frac{-8(x^2-4)^2 - (-8x) \cdot 2(x^2-4)(2x)}{(x^2-4)^4}$$

$$= \frac{-8(x^2-4) + 32x^2}{(x^2-4)^3} = \frac{24x^2 + 32}{(x^2-4)^3}$$

Numerator $24x^2 + 32 > 0$ always!

Sign depends on $(x^2 - 4)^3$:

| Interval | $x < -2$ | $-2 < x < 2$ | $x > 2$ |
| --- | --- | --- | --- |
| $(x^2-4)^3$ | $-$ | $+$ (wait, $x^2 < 4$ so $x^2-4 < 0$!) | Actually $-$ when $-2 < x < 2$, $+$ otherwise |

Correct analysis:

For $x \in (-2, 2)$: $x^2 - 4 < 0$, so $(x^2-4)^3 < 0$ → $f''(x) < 0$ → **Concave down**

For $x < -2$ or $x > 2$: $x^2 - 4 > 0$, so $(x^2-4)^3 > 0$ → $f''(x) > 0$ → **Concave up**

### Step 7: Key Points

- Origin: $(0, 0)$ — intercept and local max
- Behavior near asymptotes:
  - As $x \to 2^+$: $f(x) \to +\infty$
  - As $x \to 2^-$: $f(x) \to -\infty$
  - As $x \to -2$: Similar (by symmetry)

### Step 8: Sketch Summary

- Symmetric about $y$-axis (even function)
- Passes through origin (local max)
- Vertical asymptotes at $x = \pm 2$
- Horizontal asymptote at $y = 1$
- Increasing to the left of $x = 0$, decreasing to the right
- Concave up for $|x| > 2$, concave down for $|x| < 2$

---

## Special Curve Types

### Polynomial Curves

- **Degree $n$:** At most $n - 1$ turning points
- **Even degree:** Same end behavior (both up or both down)
- **Odd degree:** Opposite end behavior (one up, one down)

### Rational Functions

- Check for vertical asymptotes (denominator = 0)
- Check for horizontal/oblique asymptotes (end behavior)
- Often have symmetry

### Trigonometric Curves

- Periodic (repeat every $2\pi$ for sin/cos)
- Bounded between -1 and 1 (for standard trig)
- Use derivatives to find max/min within one period

### Exponential/Logarithmic

- $e^x$: Always increasing, concave up, horizontal asymptote $y = 0$ as $x \to -\infty$
- $\ln x$: Always increasing, concave down, vertical asymptote $x = 0$

---

## Memory Tricks

> **★ Key point · Concavity: Cup vs Cap**
>
> - $f''(x) > 0$: **∪** (Concave UP like a CUP — holds water)

> - $f''(x) < 0$: **∩** (Concave down like a CAP — spills water)
>
> **“Positive second derivative = Cup!”**

> **★ Key point · First Derivative: Slope Story**
>
> $f'(x)$ tells the **slope story**:
>
> - $f' > 0$: Walking **uphill** (increasing)

> - $f' < 0$: Walking **downhill** (decreasing)

> - $f' = 0$: **Flat ground** (critical point — could be peak, valley, or plateau)
>
> **“Follow the slope!”**

> **★ Key point · Asymptote Quick Check: DDD**
>
> **D**enominator = 0 → Vertical

> **D**egrees same → Horizontal (ratio of leading coefficients)

> **D**egree of top = degree of bottom + 1 → Oblique (long division)
>
> **“Three D’s: Denominator, Degrees, Degree+1”**

> **★ Key point · Inflection Point: Sign Change Required**
>
> $f''(c) = 0$ is **not enough** for inflection point!
>
> Must check: Does $f''$ **change sign** at $x = c$?
>
> **Example:** $f(x) = x^4$ at $x = 0$: $f''(0) = 0$ but NO sign change (always concave up) → NOT an inflection point!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Find intervals where $f(x) = x^2 - 4x + 3$ is increasing/decreasing.
>
> **Solution:**
>
> $$f'(x) = 2x - 4 = 0 \Rightarrow x = 2$$
>
> - For $x < 2$: $f'(x) < 0$ → **Decreasing**

> - For $x > 2$: $f'(x) > 0$ → **Increasing**
>
> **Answer:** Decreasing on $(-\infty, 2)$, increasing on $(2, \infty)$

> **↗ Connection · Problem 2**
>
> **Question:** Find concavity of $f(x) = x^3 - 3x$
>
> **Solution:**
>
> $$f'(x) = 3x^2 - 3$$

$$f''(x) = 6x$$
>
> - $f''(x) > 0$ when $x > 0$ → **Concave up** on $(0, \infty)$

> - $f''(x) < 0$ when $x < 0$ → **Concave down** on $(-\infty, 0)$
>
> **Inflection point:** $(0, 0)$ (sign change in $f''$)

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** Find asymptotes of $f(x) = \frac{2x^2 - 3}{x^2 - 1}$
>
> **Solution:**
>
> **Vertical:** $x^2 - 1 = 0 \Rightarrow x = \pm 1$
>
> **Horizontal:** Same degree → $y = \frac{2}{1} = 2$
>
> **Answer:** Vertical asymptotes $x = -1, 1$; horizontal asymptote $y = 2$

> **↗ Connection · Problem 4**
>
> **Question:** Find inflection points of $f(x) = x^4 - 6x^2$
>
> **Solution:**
>
> $$f'(x) = 4x^3 - 12x$$

$$f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$$
>
> $f''(x) = 0$ at $x = \pm 1$
>
> Sign chart:
>
> | Interval | $x < -1$ | $-1 < x < 1$ | $x > 1$ |

> | --- | --- | --- | --- |

> | $f''(x)$ | $+$ | $-$ | $+$ |
>
> Both $x = -1$ and $x = 1$ have sign changes!
>
> **Inflection points:** $(-1, f(-1)) = (-1, -5)$ and $(1, -5)$

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> **Question:** Sketch the complete curve of $f(x) = \frac{x}{x^2 + 1}$
>
> **Solution:**
>
> **Domain:** All real numbers (denominator never zero)
>
> **Intercepts:** $f(0) = 0$ → $(0, 0)$
>
> **Symmetry:** $f(-x) = \frac{-x}{x^2+1} = -f(x)$ → **Odd function** (origin symmetry)
>
> **Asymptotes:**
>
> - Vertical: None

> - Horizontal: Degree of numerator < denominator → $y = 0$
>
> **First derivative:**
>
> $$f'(x) = \frac{(x^2+1) - x(2x)}{(x^2+1)^2} = \frac{1 - x^2}{(x^2+1)^2}$$
>
> $f'(x) = 0$ at $x = \pm 1$
>
> - $x < -1$: $f' < 0$ (decreasing)

> - $-1 < x < 1$: $f' > 0$ (increasing)

> - $x > 1$: $f' < 0$ (decreasing)
>
> Local min at $x = -1$: $f(-1) = -\frac{1}{2}$

> Local max at $x = 1$: $f(1) = \frac{1}{2}$
>
> **Second derivative:**
>
> $$f''(x) = \frac{-2x(x^2+1)^2 - (1-x^2) \cdot 2(x^2+1)(2x)}{(x^2+1)^4}$$

$$= \frac{-2x(x^2+1) - (1-x^2)(4x)}{(x^2+1)^3} = \frac{-2x^3 - 2x - 4x + 4x^3}{(x^2+1)^3}$$

$$= \frac{2x^3 - 6x}{(x^2+1)^3} = \frac{2x(x^2 - 3)}{(x^2+1)^3}$$
>
> $f''(x) = 0$ at $x = 0, \pm\sqrt{3}$
>
> Inflection points at these three values.
>
> **Sketch:**
>
> - Passes through origin

> - Symmetric about origin (odd)

> - Max at $(1, 1/2)$, min at $(-1, -1/2)$

> - Horizontal asymptote $y = 0$

> - Three inflection points

> **↗ Connection · Problem 6 (JEE Advanced Type)**
>
> **Question:** Find the range of values of $a$ for which $f(x) = x^3 - 3ax + 2$ is strictly increasing for all $x \in \mathbb{R}$.
>
> **Solution:**
>
> For strictly increasing: $f'(x) > 0$ for all $x$
>
> $$f'(x) = 3x^2 - 3a$$
>
> For $f'(x) > 0$ for all $x$:
>
> $$3x^2 - 3a > 0 \Rightarrow x^2 > a$$
>
> Since minimum value of $x^2$ is $0$:
>
> For $x^2 > a$ to hold for all $x$, we need $a < 0$ (actually $a \leq 0$)
>
> Wait, let’s reconsider: $f'(x) = 3x^2 - 3a \geq 0$ for all $x$
>
> Since $x^2 \geq 0$, minimum of $3x^2$ is $0$ (at $x = 0$)
>
> So: $0 - 3a \geq 0 \Rightarrow a \leq 0$
>
> But for **strictly** increasing (not just non-decreasing), we need $f'(x) > 0$ except possibly at isolated points.
>
> If $a = 0$: $f'(x) = 3x^2 \geq 0$ (equals 0 only at $x = 0$) → Still strictly increasing overall ✓
>
> If $a < 0$: $f'(x) = 3x^2 - 3a > 0$ always (since $x^2 \geq 0$ and $-3a > 0$) ✓
>
> If $a > 0$: $f'(x) = 0$ at $x = \pm\sqrt{a}$, and $f' < 0$ between these roots → NOT always increasing ✗
>
> **Answer:** $a \leq 0$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Inflection Point ≠ Just $f''(x) = 0$**
>
> $f''(c) = 0$ is **necessary** but not **sufficient**!
>
> Must check: Does $f''$ change sign at $x = c$?
>
> **Counter-example:** $f(x) = x^4$ at $x = 0$: $f''(0) = 0$ but concave up everywhere → NOT an inflection point!

> **⚠ Trap #2: Forgetting Domain Restrictions**
>
> When finding asymptotes or sketching, always check the **domain** first!
>
> Can’t have a curve where the function isn’t defined.

> **⚠ Trap #3: Symmetry Assumptions**
>
> Don’t assume symmetry without checking!
>
> Test $f(-x)$:
>
> - If $f(-x) = f(x)$: Even (y-axis symmetry)

> - If $f(-x) = -f(x)$: Odd (origin symmetry)

> - Otherwise: No symmetry

> **⚠ Trap #4: Oblique Asymptote Confusion**
>
> Oblique asymptotes only exist when degree(num) = degree(den) + 1
>
> If degrees differ by more than 1, or numerator degree is smaller, no oblique asymptote!

---

## Quick Revision Box

| Concept | Test | Result |
| --- | --- | --- |
| **Increasing** | $f'(x) > 0$ | Function rises |
| **Decreasing** | $f'(x) < 0$ | Function falls |
| **Concave up** | $f''(x) > 0$ | ∪ (cup shape) |
| **Concave down** | $f''(x) < 0$ | ∩ (cap shape) |
| **Inflection point** | $f''(x) = 0$ AND sign change | Concavity switches |
| **Vertical asymptote** | Denominator = 0 | $x = a$ |
| **Horizontal asymptote** | $\lim_{x \to \infty} f(x)$ | $y = L$ |
| **Oblique asymptote** | Deg(num) = Deg(den) + 1 | $y = mx + c$ |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Curve sketching concepts appear in 3-4 JEE questions (combined with other topics).
>
> **Time-Saver:** Use symmetry! If $f$ is even/odd, only analyze half the graph, then reflect.
>
> **Common Pattern:** JEE loves rational functions with multiple asymptotes and turning points.
>
> **Trap Alert:** Always verify inflection points with sign change test, don’t just solve $f'' = 0$!
>
> **Advanced Tip:** For complex curves, plot key points first (intercepts, max/min, inflection) then connect smoothly.
>
> **Exam Hack:** If asked to sketch without calculator, focus on qualitative features (increasing/decreasing, concavity, asymptotes) rather than exact coordinates.

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **First derivative** $f'$ controls **slope and monotonicity**: $f' > 0$ → increasing, $f' < 0$ → decreasing

> 2. **Second derivative** $f''$ controls **concavity**: $f'' > 0$ → concave up (∪), $f'' < 0$ → concave down (∩)

> 3. **Inflection points** require $f'' = 0$ (or undefined) **AND sign change** in $f''$

> 4. **Asymptotes** reveal end behavior:
>
>    - Vertical: Denominator = 0

>    - Horizontal: Compare degrees of num/den

>    - Oblique: Long division when deg(num) = deg(den) + 1

> 5. **Curve sketching checklist**: Domain → Intercepts → Symmetry → Asymptotes → $f'$ analysis → $f''$ analysis → Key points → Sketch!
>
> **“Every curve tells a story — derivatives help you read it!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Differentiability](../differentiability/index.md) — Foundation for using derivatives
- [Higher Derivatives](../higher-derivatives/index.md) — Second derivatives for concavity
- [Maxima-Minima](../maxima-minima/index.md) — Critical points in curve sketching
- [Mean Value Theorems](../mean-value-theorems/index.md) — Monotonicity proofs

### Applications

- [Limits](../limits-basics/index.md) — Finding asymptotes
- [Integration](../../integral-calculus/index.md) — Area under curves

### Mathematical Foundations

- [Functions](../../sets-relations-functions/index.md) — Understanding function behavior
- [Coordinate Geometry](../../coordinate-geometry/index.md) — Graphing techniques

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) — Position-time graphs
- [Potential Energy Curves](../../../physics/work-energy-power/index.md) — Analyzing energy landscapes

---

From TestGuru · our mock-test platform

## You've read Curve Sketching - Monotonicity, Concavity, Asymptotes.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fcurve-sketching%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/curve-sketching/",this.page.identifier="/mathematics/limits-continuity-differentiability/curve-sketching/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="derivativeSlope" id="anim-derivativeSlope-1795396421824464324"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-derivativeSlope-1795396421824464324")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/curve-sketching/](https://jeenotes.in/mathematics/limits-continuity-differentiability/curve-sketching/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/curve-sketching/index.html`_
