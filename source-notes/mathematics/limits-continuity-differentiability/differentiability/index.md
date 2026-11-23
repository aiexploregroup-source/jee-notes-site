---
title: "Differentiability & Derivatives"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiability/"
description: "Master differentiability, LHD/RHD concepts, and the relationship between continuity and differentiability for JEE."
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/differentiability/index.html"
extracted: "2026-11-23"
---

> Master differentiability, LHD/RHD concepts, and the relationship between continuity and differentiability for JEE.

## The Hook: Speedometer Science

> **★ Key point · Connect: The Chase Scene in Pathaan (2023)**
>
> Shah Rukh Khan is chasing villains in a high-speed car. At **exactly 10:00:00 AM**, what is his speed?
>
> To calculate speed, you need: Speed = Distance/Time
>
> But at a **single instant**, time interval = 0, so you get $\frac{\text{distance}}{0}$ — undefined!
>
> Yet the speedometer shows 120 km/h. How?
>
> This is the miracle of **derivatives** — the mathematical tool that finds **instantaneous rates of change** when direct calculation fails. The derivative is the “speedometer” of mathematics!

---

## Interactive: Explore Tangent Lines

Plot $f(x) = x^2$ and observe how the tangent line’s slope changes as you move along the curve. That slope is the **derivative**!

---

## The Core Concept

### What is a Derivative?

The **derivative** of $f(x)$ at $x = a$ is:

$$\boxed{f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}}$$

**Alternate form:**

$$\boxed{f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}}$$

**In simple terms:** The derivative is the **slope of the tangent line** to the graph at $x = a$.

### Geometric Meaning

$$\frac{f(a + h) - f(a)}{h}$$

is the slope of the **secant line** joining $(a, f(a))$ and $(a+h, f(a+h))$.

As $h \to 0$, the secant line becomes the **tangent line**, and the slope becomes $f'(a)$.

> **◐ In simple terms · Physical Meaning**
>
> If $s(t)$ is position at time $t$:
>
> - $\frac{s(t + h) - s(t)}{h}$ = Average velocity

> - $s'(t) = \lim_{h \to 0} \frac{s(t + h) - s(t)}{h}$ = **Instantaneous velocity**
>
> Derivative = **Instantaneous rate of change**!

---

## What is Differentiability?

### Definition

A function $f(x)$ is **differentiable at $x = a$** if:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

**exists** (and is finite).

**In simple terms:** The function has a well-defined tangent line at $x = a$.

### Left Hand Derivative (LHD) & Right Hand Derivative (RHD)

**Left Hand Derivative:**

$$\boxed{f'(a^-) = \lim_{h \to 0^-} \frac{f(a + h) - f(a)}{h}}$$

(Approaching from the left)

**Right Hand Derivative:**

$$\boxed{f'(a^+) = \lim_{h \to 0^+} \frac{f(a + h) - f(a)}{h}}$$

(Approaching from the right)

### The Golden Rule

$$\boxed{f \text{ is differentiable at } a \iff f'(a^-) = f'(a^+) \text{ (both finite)}}$$

If LHD ≠ RHD, the function is **not differentiable** at $a$.

---

## Differentiability Implies Continuity

### The Theorem

$$\boxed{\text{If } f \text{ is differentiable at } a \text{, then } f \text{ is continuous at } a}$$

**Proof Idea:**

If $f'(a)$ exists, then:

$$\lim_{h \to 0} [f(a + h) - f(a)] = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h} \cdot h = f'(a) \cdot 0 = 0$$

So $\lim_{x \to a} f(x) = f(a)$ → Continuous!

### But the Converse is FALSE!

$$\boxed{\text{Continuous does NOT imply differentiable}}$$

**Classic Example:** $f(x) = |x|$ at $x = 0$

- Continuous at $x = 0$ ✓
- Sharp corner at $x = 0$ → Not differentiable ✗

> **⚠ Trap · Common Trap**
>
> **Differentiable → Continuous** ✓
>
> **Continuous → Differentiable** ✗
>
> JEE loves to test this distinction!

---

## Relationship Diagram

```fallback
Differentiable ⟹ Continuous ⟹ Limit exists

But:
Limit exists ⟹̸ Continuous
Continuous ⟹̸ Differentiable
```

**Example Flow:**

1. $f(x) = |x|$ is continuous everywhere but not differentiable at $x = 0$
2. $f(x) = \frac{x^2 - 1}{x - 1}$ has a limit at $x = 1$ but is not continuous there
3. $f(x) = \sin x$ is differentiable everywhere → continuous everywhere → limit exists everywhere

---

## When is a Function NOT Differentiable?

### Case 1: Sharp Corner (Cusp)

**Example:** $f(x) = |x|$ at $x = 0$

$$f(x) = \begin{cases}
-x & x < 0 \\
x & x \geq 0
\end{cases}$$

LHD: $f'(0^-) = \lim_{h \to 0^-} \frac{f(h) - f(0)}{h} = \lim_{h \to 0^-} \frac{-h}{h} = -1$

RHD: $f'(0^+) = \lim_{h \to 0^+} \frac{f(h) - f(0)}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1$

LHD ≠ RHD → **Not differentiable** at $x = 0$.

> **★ Key point · Cricket Analogy**
>
> Think of a ball bouncing off a wall in *Laapataa Ladies* (2024). At the exact moment of impact, the velocity direction changes sharply — that’s a corner! The derivative (instantaneous velocity) doesn’t exist at that instant.

### Case 2: Vertical Tangent

**Example:** $f(x) = x^{1/3}$ at $x = 0$

$$f'(0) = \lim_{h \to 0} \frac{h^{1/3} - 0}{h} = \lim_{h \to 0} \frac{1}{h^{2/3}} = \infty$$

Derivative is **infinite** → Not differentiable.

(The tangent line is vertical, slope = ∞)

### Case 3: Discontinuity

If $f$ is discontinuous at $x = a$, it **cannot** be differentiable there.

**Example:** $f(x) = \lfloor x \rfloor$ (greatest integer function)

Discontinuous at all integers → Not differentiable at integers.

### Case 4: Sharp Turn in Piecewise Functions

**Example:**

$$f(x) = \begin{cases}
x^2 & x < 1 \\
2x - 1 & x \geq 1
\end{cases}$$

Check at $x = 1$:

LHD: $f'(1^-) = \lim_{h \to 0^-} \frac{(1+h)^2 - 1}{h} = \lim_{h \to 0} \frac{2h + h^2}{h} = 2$

RHD: $f'(1^+) = \lim_{h \to 0^+} \frac{2(1+h) - 1 - 1}{h} = \lim_{h \to 0} \frac{2h}{h} = 2$

LHD = RHD = 2 → **Differentiable** at $x = 1$!

(Smooth join, no sharp corner)

---

## Notation for Derivatives

Multiple ways to denote the derivative of $y = f(x)$:

| Notation | Meaning |
| --- | --- |
| $f'(x)$ | Lagrange notation |
| $\frac{dy}{dx}$ | Leibniz notation |
| $\frac{df}{dx}$ | Leibniz (alternate) |
| $Df(x)$ | Operator notation |
| $y'$ | Simplified |

**All mean the same thing!**

---

## Basic Derivatives from First Principles

### Derivative of $x^n$

$$f(x) = x^n$$

$$f'(x) = \lim_{h \to 0} \frac{(x + h)^n - x^n}{h}$$

Using binomial theorem or the standard limit $\lim_{x \to a} \frac{x^n - a^n}{x - a} = na^{n-1}$:

$$\boxed{f'(x) = nx^{n-1}}$$

**Examples:**

- $f(x) = x^3 \Rightarrow f'(x) = 3x^2$
- $f(x) = x \Rightarrow f'(x) = 1$
- $f(x) = 1 \Rightarrow f'(x) = 0$

### Derivative of $\sin x$

$$f(x) = \sin x$$

$$f'(x) = \lim_{h \to 0} \frac{\sin(x + h) - \sin x}{h}$$

Using $\sin A - \sin B = 2\cos\frac{A+B}{2}\sin\frac{A-B}{2}$:

$$= \lim_{h \to 0} \frac{2\cos(x + h/2)\sin(h/2)}{h}$$

$$= \lim_{h \to 0} \cos(x + h/2) \cdot \frac{\sin(h/2)}{h/2}$$

$$= \cos x \cdot 1 = \cos x$$

$$\boxed{\frac{d}{dx}(\sin x) = \cos x}$$

### Derivative of $e^x$

$$f(x) = e^x$$

$$f'(x) = \lim_{h \to 0} \frac{e^{x+h} - e^x}{h} = \lim_{h \to 0} e^x \cdot \frac{e^h - 1}{h}$$

Using $\lim_{h \to 0} \frac{e^h - 1}{h} = 1$:

$$\boxed{\frac{d}{dx}(e^x) = e^x}$$

(The only function equal to its own derivative!)

---

## Table of Basic Derivatives

| Function $f(x)$ | Derivative $f'(x)$ |
| --- | --- |
| $c$ (constant) | $0$ |
| $x$ | $1$ |
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |
| $\sqrt{x}$ | $\frac{1}{2\sqrt{x}}$ |

### Inverse Trigonometric Derivatives

| Function | Derivative |
| --- | --- |
| $\sin^{-1} x$ | $\frac{1}{\sqrt{1 - x^2}}$ |
| $\cos^{-1} x$ | $\frac{-1}{\sqrt{1 - x^2}}$ |
| $\tan^{-1} x$ | $\frac{1}{1 + x^2}$ |
| $\cot^{-1} x$ | $\frac{-1}{1 + x^2}$ |
| $\sec^{-1} x$ | $\frac{1}{ |
| $\csc^{-1} x$ | $\frac{-1}{ |

---

## Memory Tricks & Patterns

### The “Co-Function” Pattern

For trig derivatives, **co-functions get a minus sign**:

$$\frac{d}{dx}(\cos x) = -\sin x$$

$$\frac{d}{dx}(\cot x) = -\csc^2 x$$

$$\frac{d}{dx}(\csc x) = -\csc x \cot x$$

**Mnemonic:** “**Co**-functions are **Co**ld (negative)”

### The “Square Pattern”

$$\frac{d}{dx}(\tan x) = \sec^2 x$$

$$\frac{d}{dx}(\cot x) = -\csc^2 x$$

**Mnemonic:** “Tan and Cot derivatives are **squared**”

### The “Product Pattern”

$$\frac{d}{dx}(\sec x) = \sec x \tan x$$

$$\frac{d}{dx}(\csc x) = -\csc x \cot x$$

**Mnemonic:** “Sec and Csc derivatives are **products** (function × neighbor)”

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Find the derivative of $f(x) = x^5$ from first principles.
>
> **Solution:**
>
> $$f'(x) = \lim_{h \to 0} \frac{(x + h)^5 - x^5}{h}$$
>
> Using $\lim_{x \to a} \frac{x^n - a^n}{x - a} = na^{n-1}$:
>
> $$f'(x) = 5x^4$$

> **↗ Connection · Problem 2**
>
> **Question:** Is $f(x) = |x|$ differentiable at $x = 0$?
>
> **Solution:**
>
> $$f(x) = \begin{cases}

> -x & x < 0 \\

> x & x \geq 0

> \end{cases}$$
>
> LHD: $f'(0^-) = -1$
>
> RHD: $f'(0^+) = 1$
>
> LHD ≠ RHD → **Not differentiable** at $x = 0$.

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:**
>
> $$f(x) = \begin{cases}

> x^2 \sin(1/x) & x \neq 0 \\

> 0 & x = 0

> \end{cases}$$
>
> Is $f$ differentiable at $x = 0$?
>
> **Solution:**
>
> $$f'(0) = \lim_{h \to 0} \frac{f(h) - f(0)}{h} = \lim_{h \to 0} \frac{h^2 \sin(1/h)}{h}$$

$$= \lim_{h \to 0} h \sin(1/h)$$
>
> Since $-1 \leq \sin(1/h) \leq 1$:
>
> $$-|h| \leq h\sin(1/h) \leq |h|$$
>
> By squeeze theorem: $\lim_{h \to 0} h\sin(1/h) = 0$
>
> **Differentiable** at $x = 0$, with $f'(0) = 0$.

> **↗ Connection · Problem 4**
>
> **Question:**
>
> $$f(x) = \begin{cases}

> x^2 & x \leq 1 \\

> ax + b & x > 1

> \end{cases}$$
>
> Find $a$ and $b$ for $f$ to be differentiable at $x = 1$.
>
> **Solution:**

> For **continuity** at $x = 1$:
>
> $$\lim_{x \to 1^-} f(x) = f(1) = \lim_{x \to 1^+} f(x)$$

$$1 = a + b \quad \ldots (1)$$
>
> For **differentiability** at $x = 1$:
>
> $$f'(1^-) = f'(1^+)$$
>
> LHD: $f'(1^-) = 2(1) = 2$
>
> RHD: $f'(1^+) = a$
>
> So $a = 2$.
>
> From (1): $b = 1 - 2 = -1$
>
> **Answer:** $a = 2, b = -1$

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> **Question:** Show that $f(x) = x|x|$ is differentiable at $x = 0$ and find $f'(0)$.
>
> **Solution:**
>
> $$f(x) = \begin{cases}

> -x^2 & x < 0 \\

> x^2 & x \geq 0

> \end{cases}$$
>
> LHD:
>
> $$f'(0^-) = \lim_{h \to 0^-} \frac{-h^2 - 0}{h} = \lim_{h \to 0^-} \frac{-h^2}{h} = \lim_{h \to 0^-} (-h) = 0$$
>
> RHD:
>
> $$f'(0^+) = \lim_{h \to 0^+} \frac{h^2 - 0}{h} = \lim_{h \to 0^+} h = 0$$
>
> LHD = RHD = 0 → **Differentiable** at $x = 0$, with $f'(0) = 0$.

> **↗ Connection · Problem 6**
>
> **Question:** If $f(x) = x^n$, show that $f'(x) = nx^{n-1}$ using first principles.
>
> **Solution:**
>
> $$f'(x) = \lim_{h \to 0} \frac{(x + h)^n - x^n}{h}$$
>
> Let $x + h = t$. As $h \to 0$, $t \to x$.
>
> $$= \lim_{t \to x} \frac{t^n - x^n}{t - x}$$
>
> Using the standard limit $\lim_{t \to a} \frac{t^n - a^n}{t - a} = na^{n-1}$:
>
> $$f'(x) = nx^{n-1}$$

> **↗ Connection · Problem 7 (Tricky!)**
>
> **Question:**
>
> $$f(x) = \begin{cases}

> x^2 + 2x & x < 0 \\

> 2x & 0 \leq x < 1 \\

> ax^2 + bx + c & x \geq 1

> \end{cases}$$
>
> Find $a$, $b$, $c$ for $f$ to be differentiable everywhere.
>
> **Solution:**

> **At $x = 0$:**
>
> Continuity: $\lim_{x \to 0^-} (x^2 + 2x) = 0 = f(0) = 0$ ✓
>
> LHD: $f'(0^-) = 2(0) + 2 = 2$
>
> RHD: $f'(0^+) = 2$
>
> Differentiable at $x = 0$ ✓
>
> **At $x = 1$:**
>
> Continuity: $2(1) = a + b + c$
>
> $$a + b + c = 2 \quad \ldots (1)$$
>
> LHD: $f'(1^-) = 2$
>
> RHD: $f'(1^+) = 2a + b$
>
> Differentiability: $2a + b = 2 \quad \ldots (2)$
>
> Also need continuity of derivative (for smoothness):
>
> $$f''(1^-) = f''(1^+) \Rightarrow 0 = 2a$$

$$a = 0$$
>
> From (2): $b = 2$
>
> From (1): $c = 0$
>
> **Answer:** $a = 0, b = 2, c = 0$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Continuous ≠ Differentiable**
>
> **Wrong:** $f(x) = |x|$ is continuous everywhere, so it’s differentiable everywhere. ✗
>
> **Correct:** $f(x) = |x|$ is continuous everywhere but **not differentiable** at $x = 0$ (sharp corner).

> **⚠ Trap #2: Confusing LHD/RHD with LHL/RHL**
>
> LHL/RHL are for **limits** (continuity).
>
> LHD/RHD are for **derivatives** (differentiability).
>
> They use similar symbols but test different things!

> **⚠ Trap #3: Forgetting to Check Both Conditions**
>
> For differentiability at a point in a piecewise function:
>
> 1. Check **continuity** first (LHL = RHL = f(a))

> 2. Then check **differentiability** (LHD = RHD)
>
> If continuity fails, differentiability automatically fails!

---

## Quick Revision Box

| Concept | Formula/Rule |
| --- | --- |
| Derivative definition | $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ |
| Differentiability test | LHD = RHD (both finite) |
| Key implication | Differentiable ⟹ Continuous |
| NOT differentiable when | Sharp corner, vertical tangent, discontinuity |
| Power rule | $(x^n)' = nx^{n-1}$ |
| Sin rule | $(\sin x)' = \cos x$ |
| Exponential rule | $(e^x)' = e^x$ |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Differentiability appears in 2-3 questions in JEE Main, 3-4 in JEE Advanced (often combined with continuity).
>
> **Time-Saver:** For piecewise functions, if continuity fails, don’t waste time checking differentiability — it’s automatically not differentiable!
>
> **Common Pattern:** JEE loves giving piecewise functions with parameters. Template:
>
> 1. Set LHL = RHL = f(a) for continuity

> 2. Calculate LHD and RHD separately

> 3. Set LHD = RHD for differentiability
>
> **Trap Alert:** $|x|$ at $x = 0$ is the most common counter-example. Memorize it!
>
> **Advanced Tip:** If asked to prove differentiability from first principles, use the alternate form $\lim_{x \to a} \frac{f(x) - f(a)}{x - a}$ — sometimes easier!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Derivative = Instantaneous rate of change** = Slope of tangent line. It’s the “speedometer” of math.

> 2. **Differentiable ⟹ Continuous**, but continuous does NOT imply differentiable. $|x|$ is the classic counter-example.

> 3. **LHD = RHD (finite)** is the test for differentiability. Sharp corners, vertical tangents, and discontinuities all cause failure.

> 4. **For piecewise functions:** Check continuity first (saves time), then check LHD = RHD at boundary points.

> 5. **Master the basic derivatives** — power rule, trig, exponential, log. They’re the building blocks for all differentiation.
>
> **“Differentiability is continuity with smoothness!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Continuity](../continuity/index.md) — Differentiability implies continuity
- [Differentiation Rules](../differentiation-rules/index.md) — Product, quotient, chain rules
- [Standard Limits](../standard-limits/index.md) — Used in derivative definitions

### Mathematical Foundations

- [Functions Basics](../../sets-relations-functions/functions-basics/index.md) — Understanding function behavior
- [Trigonometry](../../trigonometry/index.md) — Trig function derivatives

### Applications

- [Applications of Derivatives](../applications-derivatives/index.md) — Maxima, minima, rate of change
- [Integral Calculus](../../integral-calculus/index.md) — Derivatives and integrals are inverses
- [Differential Equations](../../differential-equations/index.md) — Equations involving derivatives

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) — Velocity = derivative of position
- [Newton’s Laws](../../../physics/laws-of-motion/index.md) — Force involves derivatives of momentum
- [SHM](../../../physics/oscillations-waves/index.md) — Acceleration = second derivative

---

From TestGuru · our mock-test platform

## You've read Differentiability & Derivatives.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fdifferentiability%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiability/",this.page.identifier="/mathematics/limits-continuity-differentiability/differentiability/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421800973353"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421800973353")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiability/](https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiability/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/differentiability/index.html`_
