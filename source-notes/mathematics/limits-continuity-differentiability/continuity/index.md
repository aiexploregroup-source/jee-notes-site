---
title: "Continuity of Functions"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/continuity/"
description: "Master continuity, types of discontinuity, and theorems like IVT and MVT for JEE Main and Advanced calculus."
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/continuity/index.html"
extracted: "2026-11-23"
---

> Master continuity, types of discontinuity, and theorems like IVT and MVT for JEE Main and Advanced calculus.

## The Hook: Can You Draw Without Lifting Your Pen?

> **★ Key point · Connect: The Broken Bridge Challenge**
>
> In *Jawan* (2023), Shah Rukh Khan’s team needs to cross a bridge. But what if there’s a gap in the middle?
>
> You can walk on either side, but you **can’t cross the gap** without jumping.
>
> This is exactly what discontinuity means in mathematics! A **continuous function** is like an unbroken bridge — you can trace it without lifting your pen. A **discontinuous function** has gaps, jumps, or breaks.
>
> Can you trace $f(x) = \frac{1}{x}$ through $x = 0$ without lifting your pen? No! It has a discontinuity at $x = 0$.

---

## Interactive: Explore Continuous Functions

Try plotting these and observe continuity:

- $f(x) = x^2$ (continuous everywhere)
- $f(x) = \frac{1}{x}$ (discontinuous at $x = 0$)
- $f(x) = \lfloor x \rfloor$ (jump discontinuities at integers)

---

## The Core Concept

### What is Continuity?

A function $f(x)$ is **continuous at $x = a$** if:

$$\boxed{\lim_{x \to a} f(x) = f(a)}$$

**In simple terms:** The function value at $a$ equals what you’d expect from approaching $a$.

### The Three Commandments of Continuity

For $f(x)$ to be continuous at $x = a$, **ALL THREE** must be true:

1. **$f(a)$ exists** — The function is defined at $a$
2. **$\lim_{x \to a} f(x)$ exists** — LHL = RHL
3. **$\lim_{x \to a} f(x) = f(a)$** — The limit equals the function value

Break **any one** of these, and you have a discontinuity!

> **◐ In simple terms · Memory Trick: DEL**
>
> **D**efined at the point ✓
>
> **E**xists as a limit ✓
>
> **L**imit equals function value ✓
>
> All three → Continuous!

---

## Visualizing Continuity

### Continuous Function Example

$$f(x) = x^2 \text{ at } x = 2$$

1. $f(2) = 4$ ✓ (defined)
2. $\lim_{x \to 2} f(x) = 4$ ✓ (limit exists)
3. $\lim_{x \to 2} f(x) = f(2)$ ✓ (limit equals value)

**Continuous** at $x = 2$!

### Discontinuous Function Example

$$f(x) = \frac{x^2 - 4}{x - 2} \text{ at } x = 2$$

1. $f(2)$ = undefined ✗ (division by zero)
2. $\lim_{x \to 2} f(x) = 4$ ✓ (limit exists)
3. Can’t check since $f(2)$ doesn’t exist ✗

**Discontinuous** at $x = 2$!

---

## Types of Discontinuity

### 1. Removable Discontinuity

**Definition:** $\lim_{x \to a} f(x)$ exists, but either:

- $f(a)$ is not defined, OR
- $f(a) \neq \lim_{x \to a} f(x)$

**Why “removable”?** We can “fix” it by redefining $f(a) = \lim_{x \to a} f(x)$.

**Example:**

$$f(x) = \frac{x^2 - 9}{x - 3}$$

At $x = 3$:

- $f(3)$ is undefined
- $\lim_{x \to 3} f(x) = 6$ (factoring gives $x + 3$)

**Fix:** Define $f(3) = 6$, and the function becomes continuous!

> **★ Key point · Movie Analogy**
>
> Think of a removable discontinuity like a small pothole on a road in *Laapataa Ladies* (2024). The road is mostly smooth, and filling the pothole (redefining one point) makes it perfect!

### 2. Jump Discontinuity

**Definition:** LHL ≠ RHL at $x = a$.

The function “jumps” from one value to another.

**Example: Greatest Integer Function**

$$f(x) = \lfloor x \rfloor \text{ at } x = 2$$

- LHL: $\lim_{x \to 2^-} \lfloor x \rfloor = 1$ (approaching from 1.9, 1.99, etc.)
- RHL: $\lim_{x \to 2^+} \lfloor x \rfloor = 2$ (approaching from 2.1, 2.01, etc.)

Since LHL ≠ RHL, there’s a **jump** at $x = 2$.

**Example: Piecewise Function**

$$f(x) = \begin{cases}
x + 1 & \text{if } x < 2 \\
x + 5 & \text{if } x \geq 2
\end{cases}$$

At $x = 2$:

- LHL = 3, RHL = 7
- Jump discontinuity!

### 3. Infinite Discontinuity

**Definition:** $\lim_{x \to a} f(x) = \pm \infty$

The function shoots to infinity at $x = a$.

**Example:**

$$f(x) = \frac{1}{x - 2} \text{ at } x = 2$$

- $\lim_{x \to 2^-} f(x) = -\infty$
- $\lim_{x \to 2^+} f(x) = +\infty$

Vertical asymptote at $x = 2$.

### 4. Oscillatory Discontinuity

**Definition:** The function oscillates infinitely as $x \to a$, so the limit doesn’t exist.

**Example:**

$$f(x) = \sin\left(\frac{1}{x}\right) \text{ at } x = 0$$

As $x \to 0$, $\frac{1}{x} \to \infty$, causing $\sin$ to oscillate infinitely between -1 and +1.

No limit exists!

---

## Summary Table: Types of Discontinuity

| Type | Condition | Can We Fix It? | Example |
| --- | --- | --- | --- |
| **Removable** | Limit exists but ≠ $f(a)$ | Yes (redefine $f(a)$) | $\frac{x^2-1}{x-1}$ at $x=1$ |
| **Jump** | LHL ≠ RHL | No | $\lfloor x \rfloor$ at integers |
| **Infinite** | Limit = $\pm\infty$ | No | $\frac{1}{x}$ at $x=0$ |
| **Oscillatory** | Limit doesn’t exist (oscillation) | No | $\sin(1/x)$ at $x=0$ |

> **★ Key point · JEE Favorite**
>
> JEE **loves** testing piecewise functions! Always check LHL, RHL, and $f(a)$ separately at boundary points.

---

## Continuity on an Interval

### Continuity in an Interval

$f(x)$ is **continuous on $(a, b)$** if it’s continuous at every point in $(a, b)$.

$f(x)$ is **continuous on $[a, b]$** if:

- Continuous on $(a, b)$
- Right-continuous at $a$: $\lim_{x \to a^+} f(x) = f(a)$
- Left-continuous at $b$: $\lim_{x \to b^-} f(x) = f(b)$

---

## Properties of Continuous Functions

If $f$ and $g$ are continuous at $x = a$, then:

| Operation | Continuity |
| --- | --- |
| $f(x) + g(x)$ | Continuous at $a$ |
| $f(x) - g(x)$ | Continuous at $a$ |
| $f(x) \cdot g(x)$ | Continuous at $a$ |
| $\frac{f(x)}{g(x)}$ | Continuous at $a$ (if $g(a) \neq 0$) |
| $c \cdot f(x)$ | Continuous at $a$ |
| $f(g(x))$ | Continuous at $a$ (if $g$ continuous at $a$) |

### Always Continuous Functions

These functions are continuous **everywhere** in their domain:

- Polynomial functions: $x^n$, $ax^2 + bx + c$
- Exponential: $e^x$, $a^x$
- Logarithmic: $\ln x$ (for $x > 0$)
- Trigonometric: $\sin x$, $\cos x$, $\tan x$ (except where undefined)
- Absolute value: $|x|$

---

## Important Theorems

### Intermediate Value Theorem (IVT)

**Statement:** If $f$ is continuous on $[a, b]$ and $k$ is any value between $f(a)$ and $f(b)$, then there exists at least one $c \in (a, b)$ such that:

$$\boxed{f(c) = k}$$

**In simple terms:** A continuous function takes on **every value** between $f(a)$ and $f(b)$.

**Application:** Finding roots of equations!

> **★ Key point · Root-Finding Trick**
>
> To show $f(x) = 0$ has a solution in $(a, b)$:
>
> 1. Check $f$ is continuous on $[a, b]$

> 2. Show $f(a) \cdot f(b) < 0$ (opposite signs)

> 3. By IVT, there exists $c$ where $f(c) = 0$!
>
> **JEE loves this pattern!**

**Example:**

Show that $x^3 - 2x - 5 = 0$ has a root in $(2, 3)$.

Let $f(x) = x^3 - 2x - 5$.

- $f(2) = 8 - 4 - 5 = -1 < 0$
- $f(3) = 27 - 6 - 5 = 16 > 0$

Since $f$ is continuous (polynomial) and $f(2) < 0 < f(3)$, by IVT there exists $c \in (2, 3)$ where $f(c) = 0$.

### Mean Value Theorem (Preview)

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then:

$$\boxed{f'(c) = \frac{f(b) - f(a)}{b - a} \text{ for some } c \in (a, b)}$$

There exists a point where the **instantaneous rate of change** equals the **average rate of change**.

(We’ll cover this in depth in [Applications of Derivatives](../applications-derivatives/index.md))

---

## Checking Continuity: Step-by-Step

### For a Point $x = a$

**Step 1:** Check if $f(a)$ is defined

**Step 2:** Calculate LHL: $\lim_{x \to a^-} f(x)$

**Step 3:** Calculate RHL: $\lim_{x \to a^+} f(x)$

**Step 4:** If LHL = RHL, that’s the limit. Check if it equals $f(a)$.

**Step 5:** If all match → Continuous. Otherwise → Discontinuous (identify type).

### For Piecewise Functions

At **boundary points**, use the above method. Inside each piece, check if the formula is continuous.

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Is $f(x) = x^2 + 3x - 1$ continuous at $x = 2$?
>
> **Solution:**

> Polynomial functions are continuous everywhere.
>
> Alternatively:
>
> - $f(2) = 4 + 6 - 1 = 9$ ✓

> - $\lim_{x \to 2} f(x) = 9$ ✓

> - Limit equals value ✓
>
> **Continuous** at $x = 2$.

> **↗ Connection · Problem 2**
>
> **Question:** Check continuity of $f(x) = \frac{x^2 - 4}{x - 2}$ at $x = 2$.
>
> **Solution:**
>
> - $f(2)$ is undefined (division by zero) ✗
>
> **Discontinuous** at $x = 2$ (removable — limit exists and equals 4).

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:**
>
> $$f(x) = \begin{cases}

> x^2 - 4 & \text{if } x \neq 2 \\

> k & \text{if } x = 2

> \end{cases}$$
>
> Find $k$ for continuity at $x = 2$.
>
> **Solution:**

> For continuity: $\lim_{x \to 2} f(x) = f(2)$
>
> $$\lim_{x \to 2} (x^2 - 4) = 4 - 4 = 0$$
>
> So $k = 0$ for continuity.

> **↗ Connection · Problem 4**
>
> **Question:**
>
> $$f(x) = \begin{cases}

> \frac{\sin 3x}{x} & \text{if } x \neq 0 \\

> k & \text{if } x = 0

> \end{cases}$$
>
> Find $k$ for continuity at $x = 0$.
>
> **Solution:**
>
> $$\lim_{x \to 0} \frac{\sin 3x}{x} = \lim_{x \to 0} \frac{\sin 3x}{3x} \cdot 3 = 1 \cdot 3 = 3$$
>
> For continuity, $k = 3$.

> **↗ Connection · Problem 5**
>
> **Question:** Discuss continuity of $f(x) = |x - 1|$ at $x = 1$.
>
> **Solution:**
>
> $$f(x) = \begin{cases}

> -(x - 1) = 1 - x & \text{if } x < 1 \\

> x - 1 & \text{if } x \geq 1

> \end{cases}$$
>
> At $x = 1$:
>
> - $f(1) = 0$ ✓

> - LHL: $\lim_{x \to 1^-} (1 - x) = 0$ ✓

> - RHL: $\lim_{x \to 1^+} (x - 1) = 0$ ✓

> - LHL = RHL = $f(1) = 0$ ✓
>
> **Continuous** at $x = 1$.

### Level 3: JEE Advanced

> **↗ Connection · Problem 6 (IVT Application)**
>
> **Question:** Show that $\cos x = x$ has at least one solution in $(0, \pi/2)$.
>
> **Solution:**

> Let $f(x) = \cos x - x$.
>
> Check continuity: Both $\cos x$ and $x$ are continuous, so $f(x)$ is continuous on $[0, \pi/2]$.
>
> Evaluate endpoints:
>
> - $f(0) = \cos 0 - 0 = 1 > 0$

> - $f(\pi/2) = \cos(\pi/2) - \pi/2 = 0 - \pi/2 < 0$
>
> Since $f(0) > 0 > f(\pi/2)$, by IVT there exists $c \in (0, \pi/2)$ where $f(c) = 0$.
>
> Therefore, $\cos c = c$ has a solution.

> **↗ Connection · Problem 7 (Piecewise with Parameter)**
>
> **Question:**
>
> $$f(x) = \begin{cases}

> \frac{1 - \cos 2x}{x^2} & \text{if } x < 0 \\

> a & \text{if } x = 0 \\

> \frac{\sqrt{1 + x} - 1}{x} & \text{if } x > 0

> \end{cases}$$
>
> Find $a$ for continuity at $x = 0$.
>
> **Solution:**

> LHL:
>
> $$\lim_{x \to 0^-} \frac{1 - \cos 2x}{x^2} = \lim_{x \to 0} \frac{1 - \cos 2x}{(2x)^2} \cdot 4 = \frac{1}{2} \cdot 4 = 2$$
>
> RHL:
>
> $$\lim_{x \to 0^+} \frac{\sqrt{1 + x} - 1}{x}$$
>
> Rationalize:
>
> $$= \lim_{x \to 0} \frac{(\sqrt{1+x} - 1)(\sqrt{1+x} + 1)}{x(\sqrt{1+x} + 1)} = \lim_{x \to 0} \frac{x}{x(\sqrt{1+x} + 1)} = \frac{1}{2}$$
>
> LHL = 2, RHL = $\frac{1}{2}$
>
> LHL ≠ RHL → **No value of $a$ makes $f$ continuous** at $x = 0$!

> **↗ Connection · Problem 8 (Tricky!)**
>
> **Question:** If $f(x) = \frac{|x - 3|}{x - 3}$, discuss continuity at $x = 3$.
>
> **Solution:**
>
> $$f(x) = \begin{cases}

> \frac{-(x - 3)}{x - 3} = -1 & \text{if } x < 3 \\

> \text{undefined} & \text{if } x = 3 \\

> \frac{x - 3}{x - 3} = 1 & \text{if } x > 3

> \end{cases}$$
>
> - $f(3)$ is undefined ✗

> - LHL = -1, RHL = 1

> - LHL ≠ RHL ✗
>
> **Discontinuous** at $x = 3$ (jump discontinuity, cannot be removed).

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Assuming Limit = Continuity**
>
> **Wrong:** If $\lim_{x \to a} f(x)$ exists, then $f$ is continuous at $a$. ✗
>
> **Correct:** You also need $f(a)$ to exist AND equal the limit!
>
> Example: $f(x) = \frac{x^2 - 1}{x - 1}$ at $x = 1$. Limit exists (= 2), but $f(1)$ is undefined → Discontinuous.

> **⚠ Trap #2: Forgetting to Check All Three Conditions**
>
> Always verify **DEL**:
>
> 1. **D**efined

> 2. Limit **E**xists

> 3. **L**imit equals value
>
> Missing even one means discontinuity!

> **⚠ Trap #3: Piecewise Function Pitfall**
>
> For piecewise functions, the value at the boundary point is determined by the formula that **includes** that point (usually with $\leq$ or $\geq$).
>
> Don’t confuse which piece defines $f(a)$!

---

## Quick Revision Box

| Function Type | Continuous? | Notes |
| --- | --- | --- |
| Polynomials | Everywhere | No exceptions |
| $\sin x$, $\cos x$ | Everywhere | — |
| $\tan x$, $\sec x$ | Except at $\frac{\pi}{2} + n\pi$ | Vertical asymptotes |
| $e^x$, $a^x$ | Everywhere | — |
| $\ln x$ | For $x > 0$ | Undefined for $x \leq 0$ |
| $\frac{1}{x}$ | Except $x = 0$ | Infinite discontinuity |
| $ | x | $ |
| $\lfloor x \rfloor$ | Except integers | Jump discontinuities |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Continuity appears in 1-2 questions in JEE Main, 2-3 in JEE Advanced (often combined with differentiability).
>
> **Time-Saver:** For polynomials, exponentials, and trig functions in their domain, just say “continuous everywhere” — saves 1 minute!
>
> **IVT is a JEE favorite** for proving roots exist. Template: Check continuity + Check sign change + Apply IVT.
>
> **Piecewise functions:** 80% of JEE continuity problems! Master the LHL/RHL/f(a) drill.
>
> **Common Trap:** JEE will give you a piecewise function and ask for the value of a parameter. Always set LHL = RHL = f(a).

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Continuity = No breaks in the graph.** You can trace it without lifting your pen.

> 2. **The three conditions (DEL)** are non-negotiable: Defined, Exists, Limit equals value.

> 3. **Types of discontinuity:** Removable (fixable), Jump (LHL ≠ RHL), Infinite (vertical asymptote), Oscillatory (no limit).

> 4. **Piecewise functions are 80% of JEE problems** — drill the LHL/RHL check until it’s automatic.

> 5. **IVT is your root-finding superpower** — continuous function + sign change = guaranteed root.
>
> **“Continuity is the bridge between algebra and calculus!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Introduction to Limits](../limits-basics/index.md) — Foundation for continuity
- [Standard Limits](../standard-limits/index.md) — Used in continuity checks
- [Differentiability](../differentiability/index.md) — Differentiability implies continuity

### Mathematical Foundations

- [Functions Basics](../../sets-relations-functions/functions-basics/index.md) — Domain, range, and function behavior
- [Piecewise Functions](../../sets-relations-functions/index.md) — Commonly tested with continuity

### Applications

- [Intermediate Value Theorem](index.md#intermediate-value-theorem) — Root finding
- [Applications of Derivatives](../applications-derivatives/index.md) — Mean Value Theorem
- [Integral Calculus](../../integral-calculus/index.md) — Continuity required for definite integrals

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) — Position functions must be continuous
- [Wave Motion](../../../physics/oscillations-waves/index.md) — Wave functions are continuous
- [Electric Potential](../../../physics/electrostatics/index.md) — Continuous except at charges

---

From TestGuru · our mock-test platform

## You've read Continuity of Functions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fcontinuity%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/continuity/",this.page.identifier="/mathematics/limits-continuity-differentiability/continuity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421792363824"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421792363824")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/continuity/](https://jeenotes.in/mathematics/limits-continuity-differentiability/continuity/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/continuity/index.html`_
