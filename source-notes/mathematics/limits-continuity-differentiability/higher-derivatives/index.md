---
title: "Higher Order Derivatives"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/higher-derivatives/"
description: "Master second derivatives, nth derivatives, and their applications in JEE calculus problems."
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/higher-derivatives/index.html"
extracted: "2026-11-23"
---

> Master second derivatives, nth derivatives, and their applications in JEE calculus problems.

## The Hook: From Speed to Acceleration

> **★ Key point · Connect: The Tesla's Acceleration**
>
> In *Mission: Impossible - Dead Reckoning* (2023), Ethan Hunt drives a car off a cliff. We know:
>
> - **Position** $s(t)$ tells where the car is

> - **Velocity** $v(t) = s'(t)$ tells how fast it’s moving

> - **Acceleration** $a(t) = v'(t) = s''(t)$ tells how quickly the speed is changing
>
> The **second derivative** $s''(t)$ is acceleration — the rate of change of rate of change!
>
> **Question:** If $s(t) = 5t^2 + 20t$, what’s the acceleration?
>
> $s'(t) = 10t + 20$ (velocity)
>
> $s''(t) = 10$ (acceleration)
>
> The car accelerates at a constant 10 m/s²!
>
> This is the power of **higher derivatives** — they reveal deeper layers of change.

---

## Interactive: Visualize Position, Velocity, Acceleration

See how the graphs of $s(t)$, $s'(t)$, and $s''(t)$ relate to each other!

---

## What are Higher Derivatives?

### The Derivative Chain

**First Derivative:** $f'(x) = \frac{df}{dx}$ — Rate of change of $f$

**Second Derivative:** $f''(x) = \frac{d}{dx}[f'(x)] = \frac{d^2f}{dx^2}$ — Rate of change of $f'$

**Third Derivative:** $f'''(x) = \frac{d}{dx}[f''(x)] = \frac{d^3f}{dx^3}$

**nth Derivative:** $f^{(n)}(x) = \frac{d^n f}{dx^n}$

### Notation Systems

Multiple ways to denote higher derivatives:

| Order | Lagrange | Leibniz | Newton |
| --- | --- | --- | --- |
| 1st | $f'(x)$ | $\frac{dy}{dx}$ | $\dot{y}$ |
| 2nd | $f''(x)$ | $\frac{d^2y}{dx^2}$ | $\ddot{y}$ |
| 3rd | $f'''(x)$ | $\frac{d^3y}{dx^3}$ | $\dddot{y}$ |
| nth | $f^{(n)}(x)$ | $\frac{d^ny}{dx^n}$ | $y^{(n)}$ |

**Note:** $\frac{d^2y}{dx^2}$ does NOT mean $\left(\frac{dy}{dx}\right)^2$ — it’s the second derivative!

---

## Computing Second Derivatives

### Method: Differentiate Twice

**Example 1:** $f(x) = x^4$

$$f'(x) = 4x^3$$

$$f''(x) = \frac{d}{dx}(4x^3) = 12x^2$$

**Example 2:** $y = \sin(2x)$

$$\frac{dy}{dx} = 2\cos(2x)$$

$$\frac{d^2y}{dx^2} = \frac{d}{dx}[2\cos(2x)] = -4\sin(2x)$$

**Example 3:** $f(x) = e^{3x}$

$$f'(x) = 3e^{3x}$$

$$f''(x) = 9e^{3x}$$

---

## Higher Derivatives: General Patterns

### Pattern 1: Polynomial Functions

For $f(x) = x^n$:

$$f'(x) = nx^{n-1}$$

$$f''(x) = n(n-1)x^{n-2}$$

$$f'''(x) = n(n-1)(n-2)x^{n-3}$$

$$f^{(n)}(x) = n!$$

$$f^{(n+1)}(x) = 0$$

(and all higher derivatives are zero)

**Example:** $f(x) = x^5$

- $f'(x) = 5x^4$
- $f''(x) = 20x^3$
- $f'''(x) = 60x^2$
- $f^{(4)}(x) = 120x$
- $f^{(5)}(x) = 120$
- $f^{(6)}(x) = 0$

### Pattern 2: Exponential Function

For $f(x) = e^{ax}$:

$$\boxed{f^{(n)}(x) = a^n e^{ax}}$$

**Example:** $f(x) = e^{2x}$

- $f'(x) = 2e^{2x}$
- $f''(x) = 4e^{2x}$
- $f'''(x) = 8e^{2x}$
- $f^{(n)}(x) = 2^n e^{2x}$

**Special case:** $f(x) = e^x \Rightarrow f^{(n)}(x) = e^x$ (all derivatives equal to original!)

### Pattern 3: Trigonometric Functions

For $f(x) = \sin(ax)$:

$$f^{(n)}(x) = a^n \sin\left(ax + \frac{n\pi}{2}\right)$$

**Pattern:** $\sin \to \cos \to -\sin \to -\cos \to \sin$ (cycle of 4)

**Example:** $f(x) = \sin x$

- $f'(x) = \cos x = \sin(x + \frac{\pi}{2})$
- $f''(x) = -\sin x = \sin(x + \pi)$
- $f'''(x) = -\cos x = \sin(x + \frac{3\pi}{2})$
- $f^{(4)}(x) = \sin x = \sin(x + 2\pi)$

For $f(x) = \cos(ax)$:

$$f^{(n)}(x) = a^n \cos\left(ax + \frac{n\pi}{2}\right)$$

**Pattern:** $\cos \to -\sin \to -\cos \to \sin \to \cos$ (cycle of 4)

### Pattern 4: Logarithmic Function

For $f(x) = \ln x$:

$$f'(x) = \frac{1}{x} = x^{-1}$$

$$f''(x) = -x^{-2} = -\frac{1}{x^2}$$

$$f'''(x) = 2x^{-3} = \frac{2}{x^3}$$

$$\boxed{f^{(n)}(x) = \frac{(-1)^{n-1}(n-1)!}{x^n}}$$

---

## Second Derivatives in Different Forms

### 1. Implicit Functions

For $F(x, y) = 0$, we found $\frac{dy}{dx}$ by implicit differentiation.

To find $\frac{d^2y}{dx^2}$:

**Method:** Differentiate $\frac{dy}{dx}$ implicitly again!

**Example:** $x^2 + y^2 = 25$

We found: $\frac{dy}{dx} = -\frac{x}{y}$

Differentiate again:

$$\frac{d^2y}{dx^2} = -\frac{y \cdot 1 - x \cdot \frac{dy}{dx}}{y^2}$$

$$= -\frac{y - x\left(-\frac{x}{y}\right)}{y^2} = -\frac{y + \frac{x^2}{y}}{y^2}$$

$$= -\frac{y^2 + x^2}{y^3} = -\frac{25}{y^3}$$

(since $x^2 + y^2 = 25$)

### 2. Parametric Functions

For $x = f(t)$, $y = g(t)$:

We know: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$

**Second Derivative in Parametric Form:**

$$\boxed{\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}}$$

**Steps:**

1. Find $\frac{dy}{dx}$ in terms of $t$
2. Differentiate w.r.t. $t$
3. Divide by $\frac{dx}{dt}$

**Example:** $x = t^2$, $y = t^3$

$$\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$$

$$\frac{d}{dt}\left(\frac{3t}{2}\right) = \frac{3}{2}$$

$$\frac{d^2y}{dx^2} = \frac{3/2}{2t} = \frac{3}{4t}$$

---

## Leibniz’s Theorem for nth Derivative of Product

When finding nth derivative of a product $u(x) \cdot v(x)$:

**Leibniz’s Theorem:**

$$(uv)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} u^{(k)} v^{(n-k)}$$

**Expanded form:**

$$(uv)^{(n)} = u^{(n)}v + \binom{n}{1}u^{(n-1)}v' + \binom{n}{2}u^{(n-2)}v'' + \ldots + uv^{(n)}$$

**Similar to binomial theorem:** $(a + b)^n = \sum \binom{n}{k} a^k b^{n-k}$

### Example

Find the 5th derivative of $y = x^2 e^x$

Let $u = x^2$, $v = e^x$

Derivatives of $u$:

- $u = x^2$
- $u' = 2x$
- $u'' = 2$
- $u''' = 0$ (and all higher)

Derivatives of $v$:

- $v = e^x$
- $v' = e^x$
- $v'' = e^x$
- (all derivatives are $e^x$)

Using Leibniz:

$$y^{(5)} = u^{(5)}v + 5u^{(4)}v' + 10u^{(3)}v'' + 10u''v''' + 5u'v^{(4)} + uv^{(5)}$$

$$= 0 + 0 + 0 + 10(2)e^x + 5(2x)e^x + x^2e^x$$

$$= 20e^x + 10xe^x + x^2e^x$$

$$= e^x(x^2 + 10x + 20)$$

---

## Physical Interpretations

### In Kinematics (Physics)

**Position:** $s(t)$

**Velocity:** $v(t) = s'(t) = \frac{ds}{dt}$

**Acceleration:** $a(t) = v'(t) = s''(t) = \frac{d^2s}{dt^2}$

**Jerk:** $j(t) = a'(t) = s'''(t) = \frac{d^3s}{dt^3}$ (rate of change of acceleration)

**Example:** A particle moves with $s(t) = t^3 - 6t^2 + 9t$. Find velocity, acceleration, and jerk.

$$v(t) = s'(t) = 3t^2 - 12t + 9$$

$$a(t) = s''(t) = 6t - 12$$

$$j(t) = s'''(t) = 6$$

At $t = 2$:

- Velocity: $v(2) = 12 - 24 + 9 = -3$ m/s (moving backward)
- Acceleration: $a(2) = 12 - 12 = 0$ m/s² (momentarily constant speed)
- Jerk: $j(2) = 6$ m/s³ (acceleration increasing)

### In Curve Analysis

**First Derivative:** $f'(x)$ determines **slope** and **monotonicity**

- $f'(x) > 0$: Function increasing
- $f'(x) < 0$: Function decreasing

**Second Derivative:** $f''(x)$ determines **concavity**

- $f''(x) > 0$: Concave up (curve opens upward) ∪
- $f''(x) < 0$: Concave down (curve opens downward) ∩

---

## Special Formulas and Results

### nth Derivative Formulas

1. **$(x^n)^{(n)} = n!$** (and $(x^n)^{(k)} = 0$ for $k > n$)
2. **$(e^{ax})^{(n)} = a^n e^{ax}$**
3. **$(\sin ax)^{(n)} = a^n \sin(ax + \frac{n\pi}{2})$**
4. **$(\cos ax)^{(n)} = a^n \cos(ax + \frac{n\pi}{2})$**
5. **$(\ln x)^{(n)} = \frac{(-1)^{n-1}(n-1)!}{x^n}$**
6. **$(a^x)^{(n)} = a^x (\ln a)^n$**
7. **$\left(\frac{1}{ax+b}\right)^{(n)} = \frac{(-1)^n \cdot n! \cdot a^n}{(ax+b)^{n+1}}$**

---

## Memory Tricks

> **★ Key point · Trig Cycle Trick: CSCS**
>
> For $\sin x$ derivatives, remember the cycle:
>
> **$\sin \to \cos \to -\sin \to -\cos \to \sin$**
>
> **C**os → **S**in → **C**os → **S**in (with alternating signs)
>
> Or think: **“Sine Cycles: S→C→S→C, with + - - + pattern”**

> **★ Key point · Leibniz = Binomial Theorem**
>
> Leibniz’s theorem for $(uv)^{(n)}$ follows the same binomial coefficients as $(a+b)^n$!
>
> Just replace powers with derivatives:
>
> $$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

$$(uv)''' = u'''v + 3u''v' + 3u'v'' + uv'''$$

> **★ Key point · Parametric Second Derivative: DDT**
>
> “**D**ifferentiate, **D**ivide by $\frac{dx}{d**T**}"$
>
> $$\frac{d^2y}{dx^2} = \frac{d/dt(dy/dx)}{dx/dt}$$

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Find $\frac{d^2y}{dx^2}$ if $y = x^4 + 3x^2 + 5$
>
> **Solution:**
>
> $$\frac{dy}{dx} = 4x^3 + 6x$$

$$\frac{d^2y}{dx^2} = 12x^2 + 6$$

> **↗ Connection · Problem 2**
>
> **Question:** If $y = \sin(3x)$, find $y''$
>
> **Solution:**
>
> $$y' = 3\cos(3x)$$

$$y'' = -9\sin(3x)$$

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** Find the second derivative of $y = e^{2x}\cos x$
>
> **Solution (Product Rule):**
>
> $$y' = 2e^{2x}\cos x + e^{2x}(-\sin x) = e^{2x}(2\cos x - \sin x)$$

$$y'' = 2e^{2x}(2\cos x - \sin x) + e^{2x}(-2\sin x - \cos x)$$

$$= e^{2x}[4\cos x - 2\sin x - 2\sin x - \cos x]$$

$$= e^{2x}(3\cos x - 4\sin x)$$

> **↗ Connection · Problem 4**
>
> **Question:** If $y = x^3 \ln x$, find $y''$
>
> **Solution:**
>
> $$y' = 3x^2 \ln x + x^3 \cdot \frac{1}{x} = 3x^2\ln x + x^2$$

$$y'' = 6x\ln x + 3x^2 \cdot \frac{1}{x} + 2x = 6x\ln x + 3x + 2x$$

$$= 6x\ln x + 5x = x(6\ln x + 5)$$

> **↗ Connection · Problem 5**
>
> **Question:** If $x = at^2$, $y = 2at$, find $\frac{d^2y}{dx^2}$
>
> **Solution:**
>
> $$\frac{dx}{dt} = 2at, \quad \frac{dy}{dt} = 2a$$

$$\frac{dy}{dx} = \frac{2a}{2at} = \frac{1}{t}$$

$$\frac{d}{dt}\left(\frac{1}{t}\right) = -\frac{1}{t^2}$$

$$\frac{d^2y}{dx^2} = \frac{-1/t^2}{2at} = -\frac{1}{2at^3}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 6**
>
> **Question:** Find the 10th derivative of $y = \sin^2 x$
>
> **Solution:**
>
> Rewrite using double angle: $y = \frac{1 - \cos 2x}{2}$
>
> $$y = \frac{1}{2} - \frac{1}{2}\cos 2x$$
>
> For $\cos 2x$, the 10th derivative follows the pattern:
>
> $$(\cos 2x)^{(10)} = 2^{10} \cos(2x + 10 \cdot \frac{\pi}{2}) = 1024\cos(2x + 5\pi)$$

$$= 1024\cos(2x + \pi) = -1024\cos 2x$$
>
> Therefore:
>
> $$y^{(10)} = 0 - \frac{1}{2}(-1024\cos 2x) = 512\cos 2x$$

> **↗ Connection · Problem 7**
>
> **Question:** Find the 5th derivative of $y = x^2 \sin x$ using Leibniz theorem
>
> **Solution:**
>
> Let $u = x^2$, $v = \sin x$
>
> Derivatives of $u$: $u' = 2x$, $u'' = 2$, $u''' = 0$, &mldr;
>
> Derivatives of $v$: $v = \sin x$, $v' = \cos x$, $v'' = -\sin x$, $v''' = -\cos x$, $v^{(4)} = \sin x$, $v^{(5)} = \cos x$
>
> Using $(uv)^{(5)} = u^{(5)}v + 5u^{(4)}v' + 10u'''v'' + 10u''v''' + 5u'v^{(4)} + uv^{(5)}$:
>
> $$y^{(5)} = 0 + 0 + 0 + 10(2)(-\cos x) + 5(2x)(\sin x) + x^2(\cos x)$$

$$= -20\cos x + 10x\sin x + x^2\cos x$$

$$= (x^2 - 20)\cos x + 10x\sin x$$

> **↗ Connection · Problem 8 (JEE Advanced Type)**
>
> **Question:** If $y = (x + \sqrt{1+x^2})^n$, prove that $(1+x^2)y'' + xy' = n^2y$
>
> **Solution:**
>
> Let $y = (x + \sqrt{1+x^2})^n$
>
> $$y' = n(x + \sqrt{1+x^2})^{n-1} \left(1 + \frac{x}{\sqrt{1+x^2}}\right)$$

$$= n(x + \sqrt{1+x^2})^{n-1} \cdot \frac{\sqrt{1+x^2} + x}{\sqrt{1+x^2}}$$

$$= \frac{n(x + \sqrt{1+x^2})^n}{\sqrt{1+x^2}} = \frac{ny}{\sqrt{1+x^2}}$$
>
> So: $y'\sqrt{1+x^2} = ny$
>
> Square both sides: $(y')^2(1+x^2) = n^2y^2$ &mldr; (*)
>
> Differentiate (*):
>
> $$2y'y''(1+x^2) + (y')^2(2x) = 2n^2yy'$$
>
> Divide by $2y'$:
>
> $$y''(1+x^2) + xy' = n^2y$$
>
> $(1+x^2)y'' + xy' = n^2y$ ∎

> **↗ Connection · Problem 9 (Challenging!)**
>
> **Question:** Find $\frac{d^{100}}{dx^{100}}(x^{99}e^x)$
>
> **Solution (Leibniz Theorem):**
>
> Let $u = x^{99}$, $v = e^x$
>
> For $u = x^{99}$:
>
> - $u^{(99)} = 99!$

> - $u^{(100)} = 0$
>
> For $v = e^x$: all derivatives are $e^x$
>
> Using Leibniz:
>
> $$(uv)^{(100)} = \sum_{k=0}^{100} \binom{100}{k} u^{(k)} v^{(100-k)}$$
>
> Since $u^{(k)} = 0$ for $k > 99$:
>
> $$(uv)^{(100)} = \binom{100}{99} u^{(99)} v' + \binom{100}{100} u^{(100)} v$$

$$= 100 \cdot 99! \cdot e^x + 1 \cdot 0 \cdot e^x$$

$$= 100! \cdot e^x$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Notation Confusion**
>
> **Wrong:** $\frac{d^2y}{dx^2} = \left(\frac{dy}{dx}\right)^2$ ✗
>
> **Correct:** $\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right)$ ✓
>
> $d^2y/dx^2$ means second derivative, NOT the square of first derivative!

> **⚠ Trap #2: Parametric Second Derivative**
>
> **Wrong:** $\frac{d^2y}{dx^2} = \frac{d^2y/dt^2}{d^2x/dt^2}$ ✗
>
> **Correct:** $\frac{d^2y}{dx^2} = \frac{d/dt(dy/dx)}{dx/dt}$ ✓
>
> You must differentiate $\frac{dy}{dx}$ (not $y$ directly), then divide by $\frac{dx}{dt}$!

> **⚠ Trap #3: Product Rule Repeatedly**
>
> When finding higher derivatives of products, **don’t forget product rule at each step**!
>
> For $y = x^2e^x$:
>
> - $y' = 2xe^x + x^2e^x$ ✓

> - $y'' = (2xe^x)' + (x^2e^x)'$ ← Apply product rule to EACH term!

> **⚠ Trap #4: Sign Errors in Trig**
>
> For $\sin x$ derivatives, the cycle is: $\sin \to \cos \to -\sin \to -\cos \to \sin$
>
> Keep track of signs carefully! Use the formula $\sin^{(n)}(x) = \sin(x + n\pi/2)$ if unsure.

---

## Quick Revision Box

| Function | 2nd Derivative | nth Derivative |
| --- | --- | --- |
| $x^n$ | $n(n-1)x^{n-2}$ | $n!$ (for $n$th), $0$ (for higher) |
| $e^{ax}$ | $a^2e^{ax}$ | $a^n e^{ax}$ |
| $\sin(ax)$ | $-a^2\sin(ax)$ | $a^n\sin(ax + n\pi/2)$ |
| $\cos(ax)$ | $-a^2\cos(ax)$ | $a^n\cos(ax + n\pi/2)$ |
| $\ln x$ | $-\frac{1}{x^2}$ | $\frac{(-1)^{n-1}(n-1)!}{x^n}$ |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Higher derivatives appear in 1-2 JEE Main questions, 2-3 in JEE Advanced (often with physics applications).
>
> **Time-Saver:** Memorize the standard nth derivative formulas — saves computation time!
>
> **Common Pattern:** JEE loves asking nth derivative of products using Leibniz theorem, especially with $e^x$ and trig functions.
>
> **Trap Alert:** Parametric second derivatives are tricky! Remember: differentiate $\frac{dy}{dx}$ w.r.t. $t$, then divide by $\frac{dx}{dt}$.
>
> **Physics Connection:** Second derivative problems often have kinematics context (acceleration, jerk). Understand the physical meaning!
>
> **Exam Hack:** For $y = P(x)e^{ax}$ where $P$ is polynomial degree $n$, the $(n+1)$th derivative will have no polynomial part, just exponential.

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Higher derivatives** reveal deeper patterns of change: velocity → acceleration → jerk in physics.

> 2. **Standard formulas** for $e^{ax}$, $\sin ax$, $\cos ax$, $\ln x$ save massive time — memorize them!

> 3. **Leibniz theorem** extends product rule to nth derivatives: $(uv)^{(n)} = \sum \binom{n}{k} u^{(k)}v^{(n-k)}$ (like binomial theorem).

> 4. **Parametric second derivatives** require differentiating $\frac{dy}{dx}$ w.r.t. $t$, then dividing by $\frac{dx}{dt}$ again.

> 5. **Physical meaning:** $f''(x) > 0$ means concave up, $f''(x) < 0$ means concave down — crucial for curve sketching!
>
> **“Derivatives are like layers of an onion — each layer reveals a new rate of change!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Differentiation Rules](../differentiation-rules/index.md) — Foundation for higher derivatives
- [Implicit Differentiation](../implicit-differentiation/index.md) — Second derivatives of implicit functions
- [Applications of Derivatives](../applications-derivatives/index.md) — Using second derivatives for concavity
- [Curve Sketching](../curve-sketching/index.md) — Second derivative test for inflection points

### Applications

- [Mean Value Theorems](../mean-value-theorems/index.md) — Involving derivatives
- [Maxima-Minima](../maxima-minima/index.md) — Second derivative test
- [Differential Equations](../../differential-equations/index.md) — Equations with higher derivatives

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) — Velocity, acceleration, jerk
- [Simple Harmonic Motion](../../../physics/oscillations-waves/index.md) — $a = -\omega^2 x$ (second derivative)
- [Newton’s Laws](../../../physics/laws-of-motion/index.md) — $F = ma = m\frac{d^2x}{dt^2}$

---

From TestGuru · our mock-test platform

## You've read Higher Order Derivatives.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fhigher-derivatives%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/higher-derivatives/",this.page.identifier="/mathematics/limits-continuity-differentiability/higher-derivatives/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="derivativeSlope" id="anim-derivativeSlope-1795396421842781869"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-derivativeSlope-1795396421842781869")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/higher-derivatives/](https://jeenotes.in/mathematics/limits-continuity-differentiability/higher-derivatives/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/higher-derivatives/index.html`_
