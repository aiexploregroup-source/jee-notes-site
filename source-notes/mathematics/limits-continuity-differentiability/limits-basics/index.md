---
title: "Introduction to Limits"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/limits-basics/"
description: "Master the concept of limits with intuitive examples, evaluation techniques, and JEE problem-solving strategies for calculus."
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/limits-basics/index.html"
extracted: "2026-11-23"
---

> Master the concept of limits with intuitive examples, evaluation techniques, and JEE problem-solving strategies for calculus.

## The Hook: Why Can’t We Just Substitute?

> **★ Key point · Connect: The Speedometer Paradox**
>
> You’re driving and glance at your speedometer — it says 60 km/h. But wait, to measure speed, you need distance and time. At a **single instant**, time = 0, so speed would be 0/0, which is meaningless!
>
> Yet your speedometer works perfectly. How?
>
> This is the **magic of limits** — the foundation of calculus that helps us find instantaneous rates when direct calculation fails.

---

## Interactive: Explore Limits Visually

See how functions approach limit values:

Try plotting $f(x) = \frac{x^2 - 1}{x - 1}$ and zoom in near $x = 1$. Notice something?

---

## The Core Concept

### What is a Limit?

When we write:

$$\boxed{\lim_{x \to a} f(x) = L}$$

**In simple terms:** “As $x$ gets closer and closer to $a$ (but never equals $a$), $f(x)$ gets closer and closer to $L$.”

Think of it like approaching a celebrity at an airport — you can get arbitrarily close, but there’s always security keeping you from reaching them!

### The Formal Definition (ε-δ Definition)

For every $\varepsilon > 0$ (no matter how small), there exists $\delta > 0$ such that:

$$0 < |x - a| < \delta \implies |f(x) - L| < \varepsilon$$

**Translation:** We can make $f(x)$ as close to $L$ as we want by making $x$ sufficiently close to $a$.

### Interactive: Explore the Epsilon-Delta Definition

Use this visualization to understand how epsilon and delta work together. Adjust the sliders to see when the limit condition is satisfied:

> **★ Key point · How to Use This Visualization**
>
> 1. The **green band** shows the epsilon-neighborhood around L (the limit value)

> 2. The **blue band** shows the delta-neighborhood around a (the point we approach)

> 3. Try making epsilon smaller - you’ll need a smaller delta to satisfy the condition

> 4. Enable “Auto-adjust delta” to see the relationship between epsilon and delta

> 5. The curve turns **green** when the condition is satisfied, **red** when violated

> **◐ In simple terms · JEE Focus**
>
> You don’t need to prove using ε-δ for JEE. Focus on **computing limits** and understanding the concept intuitively.

---

## Left Hand and Right Hand Limits

### Left Hand Limit (LHL)

$$\lim_{x \to a^-} f(x) = L_1$$

Approach $a$ from the **left** (values less than $a$).

### Right Hand Limit (RHL)

$$\lim_{x \to a^+} f(x) = L_2$$

Approach $a$ from the **right** (values greater than $a$).

### The Golden Rule

$$\boxed{\lim_{x \to a} f(x) \text{ exists} \iff \text{LHL} = \text{RHL}}$$

If LHL ≠ RHL, the limit **does not exist**.

### Example: The Jump Function

Consider:

$$f(x) = \begin{cases}
x + 1 & \text{if } x < 2 \\
x + 5 & \text{if } x \geq 2
\end{cases}$$

At $x = 2$:

- LHL: $\lim_{x \to 2^-} f(x) = 2 + 1 = 3$
- RHL: $\lim_{x \to 2^+} f(x) = 2 + 5 = 7$

Since LHL ≠ RHL, $\lim_{x \to 2} f(x)$ **does not exist**.

> **★ Key point · Movie Connection: Laapataa Ladies (2024)**
>
> Think of a train platform where two trains are on opposite tracks. If you’re standing at the platform (point $a$), and one train approaches from the left at 3 km/h while another approaches from the right at 7 km/h, there’s no single “approach speed” — just like LHL ≠ RHL!

---

## Properties of Limits

If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} g(x) = M$, then:

| Property | Formula |
| --- | --- |
| **Sum Rule** | $\lim_{x \to a} [f(x) + g(x)] = L + M$ |
| **Difference Rule** | $\lim_{x \to a} [f(x) - g(x)] = L - M$ |
| **Product Rule** | $\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$ |
| **Quotient Rule** | $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}$ (if $M \neq 0$) |
| **Power Rule** | $\lim_{x \to a} [f(x)]^n = L^n$ |
| **Constant Multiple** | $\lim_{x \to a} [c \cdot f(x)] = c \cdot L$ |

> **★ Key point · Memory Trick: LIMS**
>
> **L**imit of **S**um = **S**um of **L**imits
>
> **L**imit of **P**roduct = **P**roduct of **L**imits
>
> This works for all algebraic operations (provided limits exist and denominators aren’t zero)!

---

## Evaluation Techniques

### Method 1: Direct Substitution

If $f(x)$ is **defined and continuous** at $x = a$, simply substitute:

$$\lim_{x \to a} f(x) = f(a)$$

**Example:**

$$\lim_{x \to 2} (x^2 + 3x - 1) = 2^2 + 3(2) - 1 = 9$$

### Method 2: Factorization (for 0/0 form)

If direct substitution gives $\frac{0}{0}$, try factoring.

**Example:**

$$\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$$

Direct substitution: $\frac{0}{0}$ (indeterminate)

Factor: $\frac{(x-3)(x+3)}{x-3} = x + 3$ (for $x \neq 3$)

$$\lim_{x \to 3} (x + 3) = 6$$

### Method 3: Rationalization (for surds)

When you have square roots causing $\frac{0}{0}$, multiply by conjugate.

**Example:**

$$\lim_{x \to 0} \frac{\sqrt{1+x} - 1}{x}$$

Multiply by $\frac{\sqrt{1+x} + 1}{\sqrt{1+x} + 1}$:

$$= \lim_{x \to 0} \frac{(1+x) - 1}{x(\sqrt{1+x} + 1)} = \lim_{x \to 0} \frac{x}{x(\sqrt{1+x} + 1)} = \frac{1}{2}$$

### Method 4: Using Standard Limits

For specific patterns, use known limit formulas (covered in [Standard Limits](../standard-limits/index.md)).

$$\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0} \frac{e^x - 1}{x} = 1$$

---

## Limits at Infinity

### Definition

$$\lim_{x \to \infty} f(x) = L$$

means $f(x)$ approaches $L$ as $x$ becomes arbitrarily large.

### Technique: Divide by Highest Power

**Example:**

$$\lim_{x \to \infty} \frac{3x^2 + 5x - 7}{2x^2 - x + 1}$$

Divide numerator and denominator by $x^2$:

$$= \lim_{x \to \infty} \frac{3 + \frac{5}{x} - \frac{7}{x^2}}{2 - \frac{1}{x} + \frac{1}{x^2}} = \frac{3 + 0 - 0}{2 - 0 + 0} = \frac{3}{2}$$

### Quick Rule for Rational Functions

For $\lim_{x \to \infty} \frac{a_n x^n + \ldots}{b_m x^m + \ldots}$:

| Condition | Limit |
| --- | --- |
| $n < m$ | $0$ |
| $n = m$ | $\frac{a_n}{b_m}$ |
| $n > m$ | $\pm \infty$ |

---

## Indeterminate Forms

These forms require special techniques:

| Form | Meaning | Common Techniques |
| --- | --- | --- |
| $\frac{0}{0}$ | Both → 0 | Factorization, L’Hôpital’s Rule |
| $\frac{\infty}{\infty}$ | Both → ∞ | Divide by highest power, L’Hôpital |
| $0 \times \infty$ | Product of 0 and ∞ | Convert to $\frac{0}{0}$ or $\frac{\infty}{\infty}$ |
| $\infty - \infty$ | Difference of infinities | Rationalization, common denominator |
| $1^\infty$ | 1 raised to ∞ | Use $e^{\lim g(x)[f(x)-1]}$ formula |
| $0^0$ | 0 raised to 0 | Take logarithm |
| $\infty^0$ | ∞ raised to 0 | Take logarithm |

> **⚠ Trap Alert!**
>
> $\frac{1}{0}$ is **NOT** indeterminate — it’s **undefined** (limit = $\pm \infty$).
>
> Only the 7 forms above are truly indeterminate and require special methods.

---

## Memory Tricks & Patterns

### The “7 Sinners” Mnemonic

**Indeterminate forms** (remember as “Seven Sinners”):

**0/0** — Zero Over Zero
**∞/∞** — Infinity Over Infinity
**0·∞** — Zero Times Infinity
**∞ - ∞** — Infinity Minus Infinity
**1^∞** — One to Infinity
**0^0** — Zero to Zero
**∞^0** — Infinity to Zero

### Pattern Recognition

1. **Polynomial/Polynomial at ∞**: Divide by highest power
2. **Square roots in numerator**: Rationalize
3. **sin, tan in numerator**: Use standard limits
4. **$e^x$ or $\ln x$ involved**: Use exponential/log limits

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Step 1:** Try direct substitution
>
> - If it works → Done!

> - If $\frac{c}{0}$ (c ≠ 0) → Limit = ±∞

> - If indeterminate form → Go to Step 2
>
> **Step 2:** Identify the form
>
> - $\frac{0}{0}$: Factor or rationalize

> - $\frac{\infty}{\infty}$: Divide by highest power

> - Other forms: Convert or use standard limits
>
> **Step 3:** If stuck, use L’Hôpital’s Rule (for JEE Advanced)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Canceling Without Checking**
>
> **Wrong:** $\lim_{x \to 0} \frac{x}{x} = \lim_{x \to 0} 1 = 1$ ✓
>
> **Wrong:** $\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{1}{1} = 1$ ✗
>
> **Correct:** You can’t cancel unlike terms! Use the standard limit: $\lim_{x \to 0} \frac{\sin x}{x} = 1$

> **⚠ Trap #2: Ignoring LHL vs RHL**
>
> For $f(x) = \frac{|x|}{x}$:
>
> Don’t just calculate $\lim_{x \to 0} f(x)$ directly!
>
> Check: LHL = $-1$, RHL = $+1$ → Limit does not exist.

> **⚠ Trap #3: Assuming ∞ is a Number**
>
> **Wrong:** $\infty - \infty = 0$ ✗
>
> **Correct:** $\infty - \infty$ is indeterminate — could be anything!
>
> Example: $\lim_{x \to \infty} (x^2 - x) = \infty$ (not 0)

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Evaluate $\lim_{x \to 5} (x^2 - 3x + 7)$
>
> **Solution:**

> Direct substitution (polynomial is continuous):
>
> $$\lim_{x \to 5} (x^2 - 3x + 7) = 5^2 - 3(5) + 7 = 25 - 15 + 7 = 17$$

> **↗ Connection · Problem 2**
>
> **Question:** Find $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$
>
> **Solution:**

> Direct substitution gives $\frac{0}{0}$.
>
> Factor: $\frac{(x-2)(x+2)}{x-2} = x + 2$ (for $x \neq 2$)
>
> $$\lim_{x \to 2} (x + 2) = 4$$

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** Evaluate $\lim_{x \to 1} \frac{x^4 - 1}{x - 1}$
>
> **Solution:**

> Method 1 (Factorization):
>
> $$\frac{x^4 - 1}{x - 1} = \frac{(x-1)(x^3 + x^2 + x + 1)}{x-1} = x^3 + x^2 + x + 1$$

$$\lim_{x \to 1} (x^3 + x^2 + x + 1) = 1 + 1 + 1 + 1 = 4$$
>
> Method 2 (Formula):
>
> $$\lim_{x \to a} \frac{x^n - a^n}{x - a} = na^{n-1} = 4(1)^3 = 4$$

> **↗ Connection · Problem 4**
>
> **Question:** Find $\lim_{x \to 0} \frac{\sqrt{1 + x + x^2} - 1}{x}$
>
> **Solution:**

> Rationalize by multiplying with $\frac{\sqrt{1 + x + x^2} + 1}{\sqrt{1 + x + x^2} + 1}$:
>
> $$= \lim_{x \to 0} \frac{(1 + x + x^2) - 1}{x(\sqrt{1 + x + x^2} + 1)}$$

$$= \lim_{x \to 0} \frac{x + x^2}{x(\sqrt{1 + x + x^2} + 1)}$$

$$= \lim_{x \to 0} \frac{1 + x}{\sqrt{1 + x + x^2} + 1} = \frac{1}{2}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> **Question:** Evaluate $\lim_{x \to \infty} \frac{\sqrt{x^2 + x} - \sqrt{x^2 - x}}{x}$
>
> **Solution:**

> Rationalize:
>
> $$= \lim_{x \to \infty} \frac{(x^2 + x) - (x^2 - x)}{x(\sqrt{x^2 + x} + \sqrt{x^2 - x})}$$

$$= \lim_{x \to \infty} \frac{2x}{x(\sqrt{x^2 + x} + \sqrt{x^2 - x})}$$

$$= \lim_{x \to \infty} \frac{2}{\sqrt{x^2 + x} + \sqrt{x^2 - x}}$$
>
> Divide by $x$ inside square roots:
>
> $$= \lim_{x \to \infty} \frac{2}{x\sqrt{1 + 1/x} + x\sqrt{1 - 1/x}}$$

$$= \lim_{x \to \infty} \frac{2}{x(\sqrt{1 + 1/x} + \sqrt{1 - 1/x})} = \frac{2}{1 + 1} = 1$$

> **↗ Connection · Problem 6 (Tricky!)**
>
> **Question:** If $f(x) = \begin{cases} x + 1 & x < 2 \\ 3 & x = 2 \\ x^2 - 1 & x > 2 \end{cases}$, does $\lim_{x \to 2} f(x)$ exist?
>
> **Solution:**

> Check LHL and RHL:
>
> - LHL: $\lim_{x \to 2^-} f(x) = 2 + 1 = 3$

> - RHL: $\lim_{x \to 2^+} f(x) = 2^2 - 1 = 3$
>
> Since LHL = RHL = 3, **limit exists** and equals 3.
>
> **Note:** The value $f(2) = 3$ is irrelevant for the limit!

---

## Quick Revision Box

| Situation | Approach |
| --- | --- |
| Continuous function at $a$ | Direct substitution: $\lim_{x \to a} f(x) = f(a)$ |
| $\frac{0}{0}$ form | Factor and cancel common terms |
| Square roots causing $\frac{0}{0}$ | Rationalize (multiply by conjugate) |
| Polynomial at $\infty$ | Divide by highest power of $x$ |
| Piecewise function | Check LHL and RHL separately |
| Modulus/absolute value | Split into cases based on sign |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Limits appear in 1-2 questions in JEE Main, 2-3 in JEE Advanced
>
> **Time-Saver:** For polynomial limits, direct substitution takes 10 seconds. Always try it first!
>
> **Common Trap:** JEE loves to test LHL ≠ RHL scenarios. Always check both sides for piecewise functions.
>
> **Shortcut:** For $\lim_{x \to \infty} \frac{\text{polynomial}}{\text{polynomial}}$, just compare degrees — saves 30 seconds!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Limits describe approach behavior**, not actual values. $\lim_{x \to a} f(x)$ exists even if $f(a)$ is undefined.

> 2. **LHL must equal RHL** for a limit to exist. This is your first check for piecewise functions.

> 3. **Direct substitution first**, then identify indeterminate forms and apply appropriate techniques.

> 4. **Master the basic techniques**: factorization, rationalization, and standard limits will solve 90% of JEE problems.

> 5. **Limits are the gateway to calculus** — they define derivatives, integrals, and continuity.
>
> **“Limits don’t care about the destination, only the journey toward it!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Standard Limits](../standard-limits/index.md) - Essential limit formulas for quick evaluation
- [Continuity](../continuity/index.md) - How limits define continuous functions
- [Differentiability](../differentiability/index.md) - Limits define derivatives
- [Differentiation Rules](../differentiation-rules/index.md) - Using limits for differentiation

### Prerequisites

- [Functions Basics](../../sets-relations-functions/functions-basics/index.md) - Understanding domain, range, and function notation
- [Types of Functions](../../sets-relations-functions/types-of-functions/index.md) - Knowing different function types

### Applications

- [Indefinite Integrals](../../integral-calculus/indefinite-integrals/index.md) - Integration as reverse of differentiation
- [Definite Integrals](../../integral-calculus/definite-integrals/index.md) - Limits define definite integrals
- [Maxima and Minima](../maxima-minima/index.md) - Optimization using calculus

### Cross-Subject Connections

- [Motion in 1D](../../../physics/kinematics/motion-1d/index.md) - Instantaneous velocity uses limits
- [Chemical Kinetics](../../../chemistry/chemical-kinetics/index.md) - Instantaneous reaction rates
- [Kinematics Basics](../../../physics/kinematics/index.md) - Velocity and acceleration as derivatives

---

From TestGuru · our mock-test platform

## You've read Introduction to Limits.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Flimits-basics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/limits-basics/",this.page.identifier="/mathematics/limits-continuity-differentiability/limits-basics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421764390344"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421764390344")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="epsilonDelta" id="anim-epsilonDelta-1795396421764416681"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-epsilonDelta-1795396421764416681")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/limits-basics/](https://jeenotes.in/mathematics/limits-continuity-differentiability/limits-basics/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/limits-basics/index.html`_
