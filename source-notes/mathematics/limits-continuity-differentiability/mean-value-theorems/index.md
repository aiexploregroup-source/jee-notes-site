---
title: "Mean Value Theorems - Rolle's, Lagrange, L'Hospital"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/mean-value-theorems/"
description: "Master Rolle's theorem, Lagrange's MVT, Cauchy's MVT, and L'Hospital's rule for JEE calculus."
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 10 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/mean-value-theorems/index.html"
extracted: "2026-11-23"
---

> Master Rolle's theorem, Lagrange's MVT, Cauchy's MVT, and L'Hospital's rule for JEE calculus.

## The Hook: The Speed Camera Paradox

> **★ Key point · Connect: The Highway Chase in Dhoom (2004)**
>
> John Abraham rides a superbike on a highway. Two speed cameras are 10 km apart.
>
> **Camera 1 (2:00 PM):** Photo taken

> **Camera 2 (2:05 PM):** Photo taken
>
> Time difference = 5 minutes = 1/12 hour
>
> **Average speed** = 10 km ÷ (1/12 hour) = **120 km/h**
>
> **Speed limit** = 80 km/h
>
> Cop: “You were speeding!”

> John: “But both cameras showed I was at 79 km/h at those exact moments!”
>
> **Question:** Can John escape the ticket?
>
> **Answer:** NO! **Rolle’s theorem** proves that at **some point** between the cameras, his instantaneous speed must have been 120 km/h!
>
> This is the power of **Mean Value Theorems** — they guarantee certain things happen, even if you don’t see them directly.

---

## Interactive: Visualize Mean Value Theorems

See how the tangent line parallels the secant line somewhere in between!

---

## Rolle’s Theorem

### Statement

**Rolle’s Theorem:**

Let $f(x)$ be a function such that:

1. $f$ is **continuous** on $[a, b]$
2. $f$ is **differentiable** on $(a, b)$
3. $f(a) = f(b)$ (same value at endpoints)

Then there exists at least one point $c \in (a, b)$ such that:

$$\boxed{f'(c) = 0}$$

**In words:** “If you return to the same height, you must have reached a turning point somewhere!”

### Geometric Interpretation

Imagine climbing a mountain and returning to the same elevation — you must have reached a **peak** or **valley** somewhere (where slope = 0).

Graph: If endpoints have same $y$-value and curve is smooth, there’s at least one horizontal tangent in between.

### Example 1

Verify Rolle’s theorem for $f(x) = x^2 - 5x + 6$ on $[2, 3]$.

**Check conditions:**

1. Polynomial → continuous on $[2, 3]$ ✓
2. Polynomial → differentiable on $(2, 3)$ ✓
3. $f(2) = 4 - 10 + 6 = 0$, $f(3) = 9 - 15 + 6 = 0$ → $f(2) = f(3)$ ✓

**Find $c$:**

$$f'(x) = 2x - 5 = 0 \Rightarrow x = \frac{5}{2} = 2.5$$

Since $2 < 2.5 < 3$, $c = 2.5 \in (2, 3)$ ✓

Rolle’s theorem is verified!

### Example 2: Application

Show that $x^3 + x - 1 = 0$ has exactly one real root.

**Solution:**

Let $f(x) = x^3 + x - 1$

**Existence of root:**

- $f(0) = -1 < 0$
- $f(1) = 1 > 0$

By Intermediate Value Theorem, there exists $c \in (0, 1)$ where $f(c) = 0$ → At least one root exists.

**Uniqueness (only one root):**

Assume there are two roots $a$ and $b$ with $a < b$, so $f(a) = f(b) = 0$.

By Rolle’s theorem, there exists $c \in (a, b)$ where $f'(c) = 0$.

But $f'(x) = 3x^2 + 1 > 0$ for all $x$ (always positive!)

Contradiction! So there cannot be two roots.

**Conclusion:** Exactly one real root exists. ∎

---

## Lagrange’s Mean Value Theorem (LMVT)

### Statement

**Lagrange’s Mean Value Theorem (LMVT):**

Let $f(x)$ be a function such that:

1. $f$ is **continuous** on $[a, b]$
2. $f$ is **differentiable** on $(a, b)$

Then there exists at least one point $c \in (a, b)$ such that:

$$\boxed{f'(c) = \frac{f(b) - f(a)}{b - a}}$$

**In words:** “Instantaneous rate at some point = Average rate over the interval”

### Geometric Interpretation

The **slope of the tangent** at some point $c$ equals the **slope of the chord** joining $(a, f(a))$ and $(b, f(b))$.

**Physical meaning (Speed Camera paradox):**

Instantaneous velocity at some moment = Average velocity over the journey

### Connection to Rolle’s Theorem

**LMVT is a generalization of Rolle’s theorem!**

If $f(a) = f(b)$, then $\frac{f(b) - f(a)}{b - a} = 0$, so LMVT says $f'(c) = 0$ (which is Rolle’s theorem).

### Example 1

Verify LMVT for $f(x) = x^2$ on $[1, 3]$.

**Check conditions:**

1. Polynomial → continuous on $[1, 3]$ ✓
2. Polynomial → differentiable on $(1, 3)$ ✓

**Find $c$:**

$$\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4$$

$$f'(x) = 2x$$

Set $f'(c) = 4$:

$$2c = 4 \Rightarrow c = 2$$

Since $1 < 2 < 3$, $c = 2 \in (1, 3)$ ✓

LMVT is verified!

### Example 2: Application

If $f'(x) = 0$ for all $x$ in an interval, prove that $f(x)$ is constant.

**Proof:**

Let $a, b$ be any two points in the interval with $a < b$.

By LMVT, there exists $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

Given $f'(x) = 0$ for all $x$, so $f'(c) = 0$:

$$0 = \frac{f(b) - f(a)}{b - a} \Rightarrow f(b) = f(a)$$

Since $a$ and $b$ are arbitrary, $f$ is constant. ∎

---

## Cauchy’s Mean Value Theorem

### Statement

**Cauchy’s Mean Value Theorem:**

Let $f(x)$ and $g(x)$ be functions such that:

1. Both are **continuous** on $[a, b]$
2. Both are **differentiable** on $(a, b)$
3. $g'(x) \neq 0$ for any $x \in (a, b)$

Then there exists at least one point $c \in (a, b)$ such that:

$$\boxed{\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}}$$

### Connection to LMVT

If we take $g(x) = x$, then $g'(x) = 1$ and:

$$\frac{f'(c)}{1} = \frac{f(b) - f(a)}{b - a}$$

This is exactly **Lagrange’s MVT**! So LMVT is a special case of Cauchy’s MVT.

### Parametric Form Interpretation

If $x = g(t)$ and $y = f(t)$ (parametric), then:

$$\frac{dy/dt}{dx/dt}\bigg|_{t=c} = \frac{y(b) - y(a)}{x(b) - x(a)}$$

The **slope of the tangent** at some $t = c$ equals the **slope of the chord**.

---

## L’Hospital’s Rule

### The Indeterminate Form Problem

Limits like $\lim_{x \to 0} \frac{\sin x}{x}$ give $\frac{0}{0}$ form (indeterminate).

**L’Hospital’s Rule** is a powerful technique to evaluate such limits!

### Statement

**L’Hospital’s Rule:**

If $\lim_{x \to a} f(x) = 0$ and $\lim_{x \to a} g(x) = 0$ (or both $\to \infty$), and if $\lim_{x \to a} \frac{f'(x)}{g'(x)}$ exists, then:

$$\boxed{\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}}$$

**Applicable for indeterminate forms:**

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$

**Other forms** can be converted: $0 \cdot \infty$, $\infty - \infty$, $0^0$, $1^\infty$, $\infty^0$

### Example 1: Basic Application

Evaluate $\lim_{x \to 0} \frac{\sin x}{x}$

**Direct substitution:** $\frac{0}{0}$ (indeterminate)

**Apply L’Hospital:**

$$\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{(\sin x)'}{(x)'} = \lim_{x \to 0} \frac{\cos x}{1} = 1$$

### Example 2: Multiple Applications

Evaluate $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$

**Form:** $\frac{0}{0}$

**First application:**

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x}$$

Still $\frac{0}{0}$!

**Second application:**

$$= \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$$

### Example 3: $\frac{\infty}{\infty}$ Form

Evaluate $\lim_{x \to \infty} \frac{\ln x}{x}$

**Form:** $\frac{\infty}{\infty}$

**Apply L’Hospital:**

$$\lim_{x \to \infty} \frac{\ln x}{x} = \lim_{x \to \infty} \frac{1/x}{1} = \lim_{x \to \infty} \frac{1}{x} = 0$$

### Example 4: Converting $0 \cdot \infty$ Form

Evaluate $\lim_{x \to 0^+} x \ln x$

**Form:** $0 \cdot (-\infty)$ (indeterminate)

**Convert to $\frac{0}{0}$ or $\frac{\infty}{\infty}$:**

$$x \ln x = \frac{\ln x}{1/x}$$

(now $\frac{-\infty}{\infty}$ form)

**Apply L’Hospital:**

$$\lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} \frac{x^2}{-x} = \lim_{x \to 0^+} (-x) = 0$$

### Example 5: $1^\infty$ Form

Evaluate $\lim_{x \to 0^+} (1 + x)^{1/x}$

**Form:** $1^\infty$ (indeterminate)

**Method:** Let $y = (1 + x)^{1/x}$, take $\ln$:

$$\ln y = \frac{1}{x} \ln(1 + x) = \frac{\ln(1 + x)}{x}$$

**Form:** $\frac{0}{0}$

**Apply L’Hospital:**

$$\lim_{x \to 0^+} \frac{\ln(1 + x)}{x} = \lim_{x \to 0^+} \frac{1/(1+x)}{1} = 1$$

So $\lim \ln y = 1 \Rightarrow \lim y = e^1 = e$

$$\boxed{\lim_{x \to 0^+} (1 + x)^{1/x} = e}$$

---

## Important Results and Applications

### Result 1: Increasing/Decreasing Functions

**Using MVT to test monotonicity:**

Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$.

- If $f'(x) > 0$ for all $x \in (a, b)$, then $f$ is **strictly increasing** on $[a, b]$
- If $f'(x) < 0$ for all $x \in (a, b)$, then $f$ is **strictly decreasing** on $[a, b]$

**Proof idea:** Use LMVT on any two points to show $f(b) > f(a)$ when $f' > 0$.

### Result 2: Bounding Functions

If $|f'(x)| \leq M$ on $[a, b]$, then by LMVT:

$$|f(b) - f(a)| = |f'(c)| \cdot |b - a| \leq M|b - a|$$

This bounds the change in $f$.

---

## Common Indeterminate Forms and Techniques

| Form | Example | Technique |
| --- | --- | --- |
| $\frac{0}{0}$ | $\frac{\sin x}{x}$ | Direct L’Hospital |
| $\frac{\infty}{\infty}$ | $\frac{x^2}{e^x}$ | Direct L’Hospital |
| $0 \cdot \infty$ | $x \ln x$ | Rewrite as $\frac{\ln x}{1/x}$ |
| $\infty - \infty$ | $x - \ln x$ | Combine into single fraction |
| $1^\infty$ | $(1+x)^{1/x}$ | Take $\ln$, apply L’Hospital, exponentiate |
| $0^0$ | $x^x$ | Take $\ln$, apply L’Hospital, exponentiate |
| $\infty^0$ | $x^{1/x}$ | Take $\ln$, apply L’Hospital, exponentiate |

---

## Memory Tricks

> **★ Key point · Rolle's Theorem: Return to Start**
>
> **“Return to the same height → Must have turned around somewhere”**
>
> If $f(a) = f(b)$, then $f'(c) = 0$ for some $c$.
>
> Think: Throwing a ball up — it returns to hand height, so velocity was zero at the peak!

> **★ Key point · LMVT: Instant = Average**
>
> **“At some moment, your speed equals your average speed”**
>
> $$f'(c) = \frac{f(b) - f(a)}{b - a}$$
>
> Speed camera paradox!

> **★ Key point · L'Hospital: Differentiate Top and Bottom**
>
> **“When in doubt, differentiate separately!”**
>
> $$\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$$
>
> (for $\frac{0}{0}$ or $\frac{\infty}{\infty}$)
>
> **NOT** $\left(\frac{f}{g}\right)'$ — differentiate numerator and denominator **separately**!

> **★ Key point · Converting Forms: TL Trick**
>
> **T**ake **L**ogarithm for $1^\infty$, $0^0$, $\infty^0$ forms!
>
> Then apply L’Hospital, then exponentiate: $\lim y = e^{\lim \ln y}$

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Verify Rolle’s theorem for $f(x) = x(x-1)$ on $[0, 1]$.
>
> **Solution:**
>
> $f(0) = 0$, $f(1) = 0$ → $f(0) = f(1)$ ✓
>
> Continuous and differentiable (polynomial) ✓
>
> $$f'(x) = 2x - 1 = 0 \Rightarrow x = \frac{1}{2} \in (0, 1)$$
>
> ✓

> **↗ Connection · Problem 2**
>
> **Question:** Evaluate $\lim_{x \to 0} \frac{e^x - 1}{x}$ using L’Hospital’s rule.
>
> **Solution:**
>
> Form: $\frac{0}{0}$
>
> $$\lim_{x \to 0} \frac{e^x - 1}{x} = \lim_{x \to 0} \frac{e^x}{1} = 1$$

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** Verify LMVT for $f(x) = x^3 - 3x$ on $[0, 2]$ and find the value of $c$.
>
> **Solution:**
>
> $$\frac{f(2) - f(0)}{2 - 0} = \frac{(8-6) - 0}{2} = 1$$

$$f'(x) = 3x^2 - 3$$
>
> Set $f'(c) = 1$:
>
> $$3c^2 - 3 = 1 \Rightarrow c^2 = \frac{4}{3} \Rightarrow c = \frac{2}{\sqrt{3}} \in (0, 2)$$
>
> ✓

> **↗ Connection · Problem 4**
>
> **Question:** Evaluate $\lim_{x \to 0} \frac{\tan x - x}{x^3}$
>
> **Solution:**
>
> Form: $\frac{0}{0}$
>
> **First L’Hospital:**
>
> $$\lim_{x \to 0} \frac{\sec^2 x - 1}{3x^2}$$
>
> Still $\frac{0}{0}$!
>
> **Second L’Hospital:**
>
> $$\lim_{x \to 0} \frac{2\sec^2 x \tan x}{6x}$$
>
> Still $\frac{0}{0}$!
>
> **Third L’Hospital:**
>
> $$\lim_{x \to 0} \frac{2[\sec^2 x \sec^2 x + \tan x \cdot 2\sec^2 x \tan x]}{6}$$

$$= \frac{2[1 \cdot 1 + 0]}{6} = \frac{1}{3}$$

> **↗ Connection · Problem 5**
>
> **Question:** Evaluate $\lim_{x \to \infty} \frac{x^2}{e^x}$
>
> **Solution:**
>
> Form: $\frac{\infty}{\infty}$
>
> **First L’Hospital:**
>
> $$\lim_{x \to \infty} \frac{2x}{e^x}$$
>
> Still $\frac{\infty}{\infty}$!
>
> **Second L’Hospital:**
>
> $$\lim_{x \to \infty} \frac{2}{e^x} = 0$$
>
> **Conclusion:** Exponential grows faster than polynomial!

### Level 3: JEE Advanced

> **↗ Connection · Problem 6**
>
> **Question:** Show that the equation $x^5 + x - 1 = 0$ has exactly one real root in $(0, 1)$.
>
> **Solution:**
>
> Let $f(x) = x^5 + x - 1$
>
> **Existence:** $f(0) = -1 < 0$, $f(1) = 1 > 0$
>
> By IVT, there exists $c \in (0, 1)$ where $f(c) = 0$. ✓
>
> **Uniqueness:** Assume two roots $a, b$ with $0 < a < b < 1$ and $f(a) = f(b) = 0$.
>
> By Rolle’s theorem, $\exists c \in (a, b)$ where $f'(c) = 0$.
>
> But $f'(x) = 5x^4 + 1 > 0$ for all $x$ (always positive!).
>
> Contradiction! So exactly one root exists. ∎

> **↗ Connection · Problem 7**
>
> **Question:** Evaluate $\lim_{x \to 0} \frac{x - \sin x}{x^3}$ without L’Hospital’s rule, then verify using L’Hospital.
>
> **Solution (Series Method):**
>
> $$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \ldots$$

$$x - \sin x = \frac{x^3}{6} - \frac{x^5}{120} + \ldots$$

$$\frac{x - \sin x}{x^3} = \frac{1}{6} - \frac{x^2}{120} + \ldots \to \frac{1}{6}$$
>
> **Using L’Hospital (3 times):**
>
> $$\lim_{x \to 0} \frac{x - \sin x}{x^3} = \lim_{x \to 0} \frac{1 - \cos x}{3x^2}$$

$$= \lim_{x \to 0} \frac{\sin x}{6x} = \lim_{x \to 0} \frac{\cos x}{6} = \frac{1}{6}$$
>
> ✓

> **↗ Connection · Problem 8 (JEE Advanced Type)**
>
> **Question:** Evaluate $\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2}$
>
> **Solution:**
>
> Form: $1^\infty$
>
> Let $y = \left(\frac{\sin x}{x}\right)^{1/x^2}$
>
> $$\ln y = \frac{1}{x^2} \ln\left(\frac{\sin x}{x}\right) = \frac{\ln(\sin x) - \ln x}{x^2}$$
>
> Form: $\frac{-\infty}{\infty} = \frac{\infty}{\infty}$ after adjusting signs
>
> Actually, as $x \to 0$: $\sin x \approx x - \frac{x^3}{6}$
>
> $$\frac{\sin x}{x} \approx 1 - \frac{x^2}{6} \to 1$$
>
> So $\ln\left(\frac{\sin x}{x}\right) \approx \ln\left(1 - \frac{x^2}{6}\right) \approx -\frac{x^2}{6}$
>
> $$\lim \ln y = \lim_{x \to 0} \frac{-x^2/6}{x^2} = -\frac{1}{6}$$

$$\lim y = e^{-1/6}$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Rolle's Requires $f(a) = f(b)$**
>
> Rolle’s theorem needs **equal endpoint values**. If $f(a) \neq f(b)$, use LMVT instead!

> **⚠ Trap #2: L'Hospital is NOT Quotient Rule**
>
> **Wrong:** $\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$ ✗
>
> **Correct:** $\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$ ✓
>
> Differentiate numerator and denominator **separately**!

> **⚠ Trap #3: L'Hospital Only for Indeterminate Forms**
>
> **Wrong:** $\lim_{x \to 0} \frac{x^2 + 1}{x + 2} = \lim_{x \to 0} \frac{2x}{1}$ ✗
>
> The original limit is $\frac{1}{2}$ (not indeterminate), so don’t use L’Hospital!
>
> **Only use L’Hospital for $\frac{0}{0}$ or $\frac{\infty}{\infty}$ forms!**

> **⚠ Trap #4: Forgetting to Check Conditions**
>
> Before applying MVT/Rolle’s:
>
> 1. Check continuity on $[a, b]$

> 2. Check differentiability on $(a, b)$

> 3. For Rolle’s, check $f(a) = f(b)$
>
> Don’t just mechanically solve $f'(x) = 0$!

---

## Quick Revision Box

| Theorem | Conditions | Conclusion |
| --- | --- | --- |
| **Rolle’s** | Continuous on $[a,b]$, differentiable on $(a,b)$, $f(a)=f(b)$ | $\exists c: f'(c) = 0$ |
| **Lagrange MVT** | Continuous on $[a,b]$, differentiable on $(a,b)$ | $\exists c: f'(c) = \frac{f(b)-f(a)}{b-a}$ |
| **Cauchy MVT** | Both continuous on $[a,b]$, differentiable on $(a,b)$, $g' \neq 0$ | $\exists c: \frac{f'(c)}{g'(c)} = \frac{f(b)-f(a)}{g(b)-g(a)}$ |
| **L’Hospital** | $\frac{0}{0}$ or $\frac{\infty}{\infty}$ form | $\lim \frac{f}{g} = \lim \frac{f'}{g'}$ |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** MVT appears in 2-3 JEE questions, L’Hospital in 3-4 questions (very common!).
>
> **Time-Saver:** For “exactly one root” problems, combine IVT (existence) + Rolle’s (uniqueness via contradiction).
>
> **Common Pattern:** JEE loves:
>
> - $\frac{0}{0}$ forms with trig/exponential

> - $1^\infty$ forms (use logarithm!)

> - Proving monotonicity using $f' > 0$
>
> **Trap Alert:** L’Hospital can be applied repeatedly, but check the form each time! Don’t blindly keep differentiating.
>
> **Advanced Tip:** Sometimes series expansion is faster than multiple L’Hospital applications.
>
> **Exam Hack:** If L’Hospital gets too messy after 2-3 attempts, try another method (series, algebraic manipulation).

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Rolle’s theorem:** Equal endpoints → horizontal tangent somewhere ($f'(c) = 0$)

> 2. **Lagrange MVT:** Instantaneous rate at some point = Average rate over interval

> 3. **L’Hospital’s rule:** For $\frac{0}{0}$ or $\frac{\infty}{\infty}$, differentiate top and bottom separately

> 4. **Applications:** Proving uniqueness of roots, testing monotonicity, evaluating tricky limits

> 5. **Converting indeterminate forms:** Use algebra, logarithms, or rewrite to apply L’Hospital
>
> **“Mean Value Theorems: The guarantee that somewhere in between, something special happens!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Continuity](../continuity/index.md) — MVT requires continuity
- [Differentiability](../differentiability/index.md) — MVT requires differentiability
- [Limits](../limits-basics/index.md) — L’Hospital evaluates limits
- [Standard Limits](../standard-limits/index.md) — Many can be proved using L’Hospital
- [Maxima-Minima](../maxima-minima/index.md) — Rolle’s theorem connects to extrema

### Applications

- [Curve Sketching](../curve-sketching/index.md) — Using monotonicity from MVT
- [Differential Equations](../../differential-equations/index.md) — Existence and uniqueness theorems

### Mathematical Foundations

- [Functions](../../sets-relations-functions/index.md) — Understanding behavior on intervals

---

From TestGuru · our mock-test platform

## You've read Mean Value Theorems - Rolle's, Lagrange, L'Hospital.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fmean-value-theorems%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/mean-value-theorems/",this.page.identifier="/mathematics/limits-continuity-differentiability/mean-value-theorems/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="derivativeSlope" id="anim-derivativeSlope-1795396421869131930"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-derivativeSlope-1795396421869131930")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/mean-value-theorems/](https://jeenotes.in/mathematics/limits-continuity-differentiability/mean-value-theorems/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/mean-value-theorems/index.html`_
