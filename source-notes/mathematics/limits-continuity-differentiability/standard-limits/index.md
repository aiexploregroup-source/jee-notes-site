---
title: "Standard Limits & L'Hôpital's Rule"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/standard-limits/"
description: "Master essential standard limits formulas including sin x/x, exponential, logarithmic limits, and L'Hôpital's Rule for JEE."
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/standard-limits/index.html"
extracted: "2026-11-23"
---

> Master essential standard limits formulas including sin x/x, exponential, logarithmic limits, and L'Hôpital's Rule for JEE.

## The Hook: The Mystery of sin(x)/x

> **★ Key point · Connect: Cricket Ball Trajectory**
>
> Imagine Virat Kohli hitting a six in *Jawan* (2023) — the ball follows a smooth arc. To find the **exact direction** at the highest point, we need calculus. But calculating the derivative of $\sin x$ requires knowing:
>
> $$\lim_{x \to 0} \frac{\sin x}{x} = ?$$
>
> This limit can’t be solved by substitution (gives $\frac{0}{0}$), but it’s so fundamental that **all of trigonometric calculus depends on it**.
>
> Today, we master the **standard limits** — the special formulas that unlock complex limit problems in seconds!

---

## The Core Concept

### What are Standard Limits?

Standard limits are **pre-proven limit formulas** that appear repeatedly in calculus. Instead of deriving them each time, we memorize and apply them directly.

Think of them as the “formulas” of limits — just like $a^2 - b^2 = (a+b)(a-b)$ in algebra.

> **★ Key point · JEE Gold Mine**
>
> About **70% of JEE limit problems** can be solved by recognizing and applying standard limits. Master these, and you’ll solve most problems in under 30 seconds!

---

## Category 1: Trigonometric Limits

### The Fundamental Trigonometric Limit

$$\boxed{\lim_{x \to 0} \frac{\sin x}{x} = 1}$$

**Where:** $x$ is in **radians**, not degrees!

### Interactive Demo: Visualize Standard Limits

Explore how standard limit formulas behave as x approaches specific values.

**Proof Sketch:** Using geometry (area of sector vs triangle), we can show this rigorously.

### Derived Trigonometric Limits

$$\boxed{\lim_{x \to 0} \frac{\tan x}{x} = 1}$$

$$\boxed{\lim_{x \to 0} \frac{\sin^{-1} x}{x} = 1}$$

$$\boxed{\lim_{x \to 0} \frac{\tan^{-1} x}{x} = 1}$$

$$\boxed{\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}}$$

$$\boxed{\lim_{x \to 0} \frac{1 - \cos x}{x} = 0}$$

### General Forms

$$\boxed{\lim_{x \to 0} \frac{\sin(ax)}{x} = a}$$

$$\boxed{\lim_{x \to 0} \frac{\sin(ax)}{\sin(bx)} = \frac{a}{b}}$$

$$\boxed{\lim_{x \to 0} \frac{\tan(ax)}{\tan(bx)} = \frac{a}{b}}$$

> **◐ In simple terms · Quick Derivation**
>
> For $\lim_{x \to 0} \frac{\tan x}{x}$:
>
> $$\frac{\tan x}{x} = \frac{\sin x}{x \cos x} = \frac{\sin x}{x} \cdot \frac{1}{\cos x}$$

$$\lim_{x \to 0} \frac{\tan x}{x} = \lim_{x \to 0} \frac{\sin x}{x} \cdot \lim_{x \to 0} \frac{1}{\cos x} = 1 \cdot 1 = 1$$

---

## Category 2: Exponential Limits

### The Fundamental Exponential Limits

$$\boxed{\lim_{x \to 0} \frac{e^x - 1}{x} = 1}$$

$$\boxed{\lim_{x \to 0} \frac{a^x - 1}{x} = \ln a}$$

$$\boxed{\lim_{x \to 0} \frac{a^x - b^x}{x} = \ln a - \ln b = \ln\left(\frac{a}{b}\right)}$$

### The Famous $e$ Limit

$$\boxed{\lim_{x \to 0} (1 + x)^{1/x} = e}$$

$$\boxed{\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e}$$

$$\boxed{\lim_{x \to \infty} \left(1 + \frac{a}{x}\right)^x = e^a}$$

**Generalization:**

$$\boxed{\lim_{x \to a} \left(1 + \frac{1}{f(x)}\right)^{f(x)} = e \text{ when } f(x) \to \infty}$$

> **★ Key point · Stock Market Connection!**
>
> The limit $\lim_{n \to \infty} \left(1 + \frac{r}{n}\right)^n = e^r$ describes **compound interest**!
>
> If you invest money at rate $r$ compounded continuously, your money grows by factor $e^r$. This is why banks love exponentials — and why you should love this limit!

---

## Category 3: Logarithmic Limits

### Fundamental Logarithmic Limits

$$\boxed{\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1}$$

$$\boxed{\lim_{x \to 0} \frac{\log_a(1 + x)}{x} = \frac{1}{\ln a}}$$

**Generalization:**

$$\boxed{\lim_{x \to 0} \frac{\ln(1 + ax)}{x} = a}$$

> **◐ In simple terms · Connection to Exponential Limits**
>
> Notice the symmetry:
>
> - $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$ (exponential)

> - $\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1$ (logarithm)
>
> This is because $\ln$ and $e^x$ are **inverse functions**!

---

## Category 4: Algebraic Limits

### The Power Formula

$$\boxed{\lim_{x \to a} \frac{x^n - a^n}{x - a} = na^{n-1}}$$

This is actually the **derivative of $x^n$** from first principles!

**Special cases:**

$$\lim_{x \to 0} \frac{x^n}{x} = \begin{cases} 0 & \text{if } n > 1 \\ 1 & \text{if } n = 1 \\ \infty & \text{if } n < 1 \end{cases}$$

### Generalized Power Limit

$$\boxed{\lim_{x \to 0} \frac{(1 + x)^n - 1}{x} = n}$$

---

## Category 5: The $1^\infty$ Form

### Master Formula for $1^\infty$

When $\lim f(x) = 1$ and $\lim g(x) = \infty$:

$$\boxed{\lim [f(x)]^{g(x)} = e^{\lim g(x)[f(x) - 1]}}$$

**Application:** This solves all $1^\infty$ indeterminate forms!

**Example:**

$$\lim_{x \to \infty} \left(\frac{x + 3}{x + 1}\right)^{2x}$$

Here $f(x) = \frac{x+3}{x+1} \to 1$ and $g(x) = 2x \to \infty$.

$$f(x) - 1 = \frac{x+3}{x+1} - 1 = \frac{2}{x+1}$$

$$g(x)[f(x) - 1] = 2x \cdot \frac{2}{x+1} = \frac{4x}{x+1} \to 4$$

$$\lim_{x \to \infty} \left(\frac{x + 3}{x + 1}\right)^{2x} = e^4$$

---

## L’Hôpital’s Rule (JEE Advanced)

### The Rule

For indeterminate forms $\frac{0}{0}$ or $\frac{\infty}{\infty}$:

$$\boxed{\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}}$$

**Conditions:**

1. The limit gives $\frac{0}{0}$ or $\frac{\infty}{\infty}$
2. Both $f$ and $g$ are differentiable near $a$
3. The limit of $\frac{f'(x)}{g'(x)}$ exists

### When to Use L’Hôpital

> **★ Key point · Decision: L'Hôpital or Standard Limits?**
>
> **Use L’Hôpital when:**
>
> - You recognize $\frac{0}{0}$ or $\frac{\infty}{\infty}$ form

> - Factorization/rationalization seems messy

> - You’re allowed to use derivatives (JEE Advanced)
>
> **Use Standard Limits when:**
>
> - You recognize a standard pattern

> - JEE Main problem (L’Hôpital not in syllabus)

> - Faster than differentiating

### Examples Using L’Hôpital

**Example 1:**

$$\lim_{x \to 0} \frac{\sin x - x}{x^3}$$

Direct: $\frac{0}{0}$ form.

Apply L’Hôpital:

$$= \lim_{x \to 0} \frac{\cos x - 1}{3x^2} \quad (\text{still } \frac{0}{0})$$

Apply again:

$$= \lim_{x \to 0} \frac{-\sin x}{6x} = \frac{-1}{6} \lim_{x \to 0} \frac{\sin x}{x} = \frac{-1}{6}$$

**Example 2:**

$$\lim_{x \to \infty} \frac{\ln x}{x}$$

Form: $\frac{\infty}{\infty}$

$$= \lim_{x \to \infty} \frac{1/x}{1} = \lim_{x \to \infty} \frac{1}{x} = 0$$

> **⚠ Trap · Common L'Hôpital Mistakes**
>
> **Mistake 1:** Using L’Hôpital when form is NOT $\frac{0}{0}$ or $\frac{\infty}{\infty}$
>
> **Mistake 2:** Using quotient rule instead of differentiating numerator and denominator **separately**
>
> **Wrong:** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{g(x)^2}$ ✗
>
> **Correct for L’Hôpital:** $\frac{f'(x)}{g'(x)}$ ✓

---

## Memory Tricks & Patterns

### The “SET” Mnemonic

Standard limits fall into three categories — remember **“SET”**:

**S**in limits: $\frac{\sin x}{x} = 1$, $\frac{1 - \cos x}{x^2} = \frac{1}{2}$

**E**xponential limits: $\frac{e^x - 1}{x} = 1$, $(1 + x)^{1/x} = e$

**T**angent & others: $\frac{\tan x}{x} = 1$, $\frac{\ln(1+x)}{x} = 1$

### The Symmetry Pattern

Notice the beautiful symmetry:

| Exponential | Logarithmic |
| --- | --- |
| $\frac{e^x - 1}{x} = 1$ | $\frac{\ln(1 + x)}{x} = 1$ |
| $\frac{a^x - 1}{x} = \ln a$ | $\frac{\log_a(1 + x)}{x} = \frac{1}{\ln a}$ |

They’re **inverses** of each other!

### The “Magic $e$” Family

All these equal $e$:

$$\lim_{x \to 0} (1 + x)^{1/x} = e$$

$$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$

$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

**Memory trick:** “**E**veryone **Approaches 1** but gets raised to **Infinity**”

---

## Quick Reference Table

### All Standard Limits at a Glance

| Limit | Value |
| --- | --- |
| $\lim_{x \to 0} \frac{\sin x}{x}$ | $1$ |
| $\lim_{x \to 0} \frac{\tan x}{x}$ | $1$ |
| $\lim_{x \to 0} \frac{1 - \cos x}{x^2}$ | $\frac{1}{2}$ |
| $\lim_{x \to 0} \frac{e^x - 1}{x}$ | $1$ |
| $\lim_{x \to 0} \frac{a^x - 1}{x}$ | $\ln a$ |
| $\lim_{x \to 0} \frac{\ln(1 + x)}{x}$ | $1$ |
| $\lim_{x \to 0} (1 + x)^{1/x}$ | $e$ |
| $\lim_{x \to \infty} (1 + 1/x)^x$ | $e$ |
| $\lim_{x \to a} \frac{x^n - a^n}{x - a}$ | $na^{n-1}$ |
| $\lim_{x \to 0} \frac{(1+x)^n - 1}{x}$ | $n$ |

### Generalized Forms

| Pattern | Formula |
| --- | --- |
| $\lim_{x \to 0} \frac{\sin(ax)}{bx}$ | $\frac{a}{b}$ |
| $\lim_{x \to 0} \frac{e^{ax} - 1}{bx}$ | $\frac{a}{b}$ |
| $\lim_{x \to 0} \frac{\ln(1 + ax)}{bx}$ | $\frac{a}{b}$ |
| $\lim [f(x)]^{g(x)}$ when $f \to 1, g \to \infty$ | $e^{\lim g(x)[f(x)-1]}$ |

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Evaluate $\lim_{x \to 0} \frac{\sin 5x}{x}$
>
> **Solution:**
>
> $$\lim_{x \to 0} \frac{\sin 5x}{x} = \lim_{x \to 0} \frac{\sin 5x}{5x} \cdot 5 = 1 \cdot 5 = 5$$
>
> Using $\lim_{x \to 0} \frac{\sin(ax)}{x} = a$ directly: Answer = $5$

> **↗ Connection · Problem 2**
>
> **Question:** Find $\lim_{x \to 0} \frac{e^{3x} - 1}{x}$
>
> **Solution:**
>
> $$\lim_{x \to 0} \frac{e^{3x} - 1}{x} = \lim_{x \to 0} \frac{e^{3x} - 1}{3x} \cdot 3 = 1 \cdot 3 = 3$$
>
> Using $\lim_{x \to 0} \frac{e^{ax} - 1}{x} = a$ directly: Answer = $3$

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** Evaluate $\lim_{x \to 0} \frac{\sin 3x}{\tan 2x}$
>
> **Solution:**
>
> $$\frac{\sin 3x}{\tan 2x} = \frac{\sin 3x}{\sin 2x} \cdot \cos 2x$$

$$= \frac{\sin 3x}{3x} \cdot \frac{2x}{\sin 2x} \cdot \frac{3x}{2x} \cdot \cos 2x$$

$$\lim_{x \to 0} \left[1 \cdot 1 \cdot \frac{3}{2} \cdot 1\right] = \frac{3}{2}$$

> **↗ Connection · Problem 4**
>
> **Question:** Find $\lim_{x \to 0} \frac{2^x - 3^x}{x}$
>
> **Solution:**
>
> $$\lim_{x \to 0} \frac{2^x - 3^x}{x} = \lim_{x \to 0} \frac{2^x - 1}{x} - \lim_{x \to 0} \frac{3^x - 1}{x}$$

$$= \ln 2 - \ln 3 = \ln\left(\frac{2}{3}\right)$$

> **↗ Connection · Problem 5**
>
> **Question:** Evaluate $\lim_{x \to 0} \frac{1 - \cos 2x}{x^2}$
>
> **Solution:**
>
> $$\lim_{x \to 0} \frac{1 - \cos 2x}{x^2} = \lim_{x \to 0} \frac{1 - \cos 2x}{(2x)^2} \cdot 4 = \frac{1}{2} \cdot 4 = 2$$
>
> Using $\lim_{x \to 0} \frac{1 - \cos(ax)}{x^2} = \frac{a^2}{2}$ directly: $\frac{4}{2} = 2$

### Level 3: JEE Advanced

> **↗ Connection · Problem 6**
>
> **Question:** Find $\lim_{x \to \infty} \left(\frac{x + 5}{x + 3}\right)^{x + 2}$
>
> **Solution:**

> This is $1^\infty$ form.
>
> Let $f(x) = \frac{x+5}{x+3}$ and $g(x) = x + 2$.
>
> $$f(x) - 1 = \frac{x+5}{x+3} - 1 = \frac{2}{x+3}$$

$$g(x)[f(x) - 1] = (x+2) \cdot \frac{2}{x+3} = \frac{2x + 4}{x + 3}$$

$$\lim_{x \to \infty} \frac{2x + 4}{x + 3} = 2$$

$$\lim_{x \to \infty} \left(\frac{x + 5}{x + 3}\right)^{x + 2} = e^2$$

> **↗ Connection · Problem 7 (L'Hôpital)**
>
> **Question:** Evaluate $\lim_{x \to 0} \frac{x - \sin x}{x^3}$
>
> **Solution:**

> Form: $\frac{0}{0}$
>
> Apply L’Hôpital:
>
> $$= \lim_{x \to 0} \frac{1 - \cos x}{3x^2} \quad (\text{still } \frac{0}{0})$$
>
> Apply again:
>
> $$= \lim_{x \to 0} \frac{\sin x}{6x} = \frac{1}{6} \cdot 1 = \frac{1}{6}$$

> **↗ Connection · Problem 8 (Tricky!)**
>
> **Question:** Find $\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2}$
>
> **Solution:**

> This is $1^\infty$ form.
>
> Let $f(x) = \frac{\sin x}{x}$ and $g(x) = \frac{1}{x^2}$.
>
> Using Taylor series: $\sin x = x - \frac{x^3}{6} + \ldots$
>
> $$f(x) = \frac{x - x^3/6 + \ldots}{x} = 1 - \frac{x^2}{6} + \ldots$$

$$f(x) - 1 = -\frac{x^2}{6}$$

$$g(x)[f(x) - 1] = \frac{1}{x^2} \cdot \left(-\frac{x^2}{6}\right) = -\frac{1}{6}$$

$$\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2} = e^{-1/6}$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting to Match Forms**
>
> **Wrong:**
>
> $$\lim_{x \to 0} \frac{\sin 3x}{2x} = 1$$
>
> ✗
>
> **Correct:**
>
> $$\lim_{x \to 0} \frac{\sin 3x}{2x} = \lim_{x \to 0} \frac{\sin 3x}{3x} \cdot \frac{3}{2} = 1 \cdot \frac{3}{2} = \frac{3}{2}$$
>
> ✓
>
> You must have $\frac{\sin(ax)}{ax}$ to get 1!

> **⚠ Trap #2: Mixing Up Exponentials**
>
> **Wrong:**
>
> $$\lim_{x \to 0} \frac{2^x - 1}{x} = 1$$
>
> ✗
>
> **Correct:**
>
> $$\lim_{x \to 0} \frac{2^x - 1}{x} = \ln 2$$
>
> ✓
>
> Only $e^x$ gives 1, others give $\ln a$!

> **⚠ Trap #3: L'Hôpital on Non-Indeterminate Forms**
>
> **Wrong:**
>
> $$\lim_{x \to 0} \frac{x + 1}{x + 2} \stackrel{?}{=} \lim_{x \to 0} \frac{1}{1} = 1$$
>
> ✗
>
> This gives $\frac{1}{2}$, not $\frac{0}{0}$! Don’t use L’Hôpital.
>
> **Correct:** Direct substitution: $\frac{0 + 1}{0 + 2} = \frac{1}{2}$ ✓

---

## Quick Revision Box

| Form | Standard Limit to Use |
| --- | --- |
| $\frac{\sin(ax)}{x}$ | Equals $a$ |
| $\frac{e^{ax} - 1}{x}$ | Equals $a$ |
| $\frac{\ln(1 + ax)}{x}$ | Equals $a$ |
| $\frac{1 - \cos(ax)}{x^2}$ | Equals $\frac{a^2}{2}$ |
| $(1 + x)^{1/x}$ as $x \to 0$ | Equals $e$ |
| $(1 + 1/x)^x$ as $x \to \infty$ | Equals $e$ |
| $f(x)^{g(x)}$ when $f \to 1, g \to \infty$ | $e^{\lim g(x)[f(x)-1]}$ |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Speed Hack:** If you see $\sin$, $\tan$, $e^x$, or $\ln$ in a limit, immediately think “standard limits” — it’s probably a 30-second problem!
>
> **JEE Main:** Focus on direct application of standard limits. L’Hôpital’s Rule is **NOT** in the syllabus.
>
> **JEE Advanced:** Master both standard limits AND L’Hôpital. Advanced problems combine multiple techniques.
>
> **Common Pattern:** JEE loves $1^\infty$ forms. Practice the formula $e^{\lim g(x)[f(x)-1]}$ until it’s muscle memory.
>
> **Time Saver:** Make flash cards for all standard limits. Recognition speed is everything!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Standard limits are your first weapon** against difficult limit problems. Always check if a standard pattern applies before trying other methods.

> 2. **The three pillars:** Sin/Tan limits (value 1), Exponential limits ($\ln a$), and the magic $e$ family. Master these and you’ll solve 70% of problems instantly.

> 3. **L’Hôpital is powerful but has conditions** — only for $\frac{0}{0}$ or $\frac{\infty}{\infty}$, and differentiate separately, NOT using quotient rule.

> 4. **The $1^\infty$ formula is your JEE Advanced secret weapon**: $\lim [f(x)]^{g(x)} = e^{\lim g(x)[f(x)-1]}$

> 5. **Symmetry is beautiful**: Notice how $e^x$ and $\ln x$ limits mirror each other — they’re inverse functions!
>
> **“Standard limits turn impossible problems into one-line solutions!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Introduction to Limits](../limits-basics/index.md) — Foundation concepts
- [Continuity](../continuity/index.md) — Using limits to check continuity
- [Differentiability](../differentiability/index.md) — Derivatives use standard limits

### Mathematical Foundations

- [Exponential Functions](../../sets-relations-functions/index.md) — Understanding $e^x$ behavior
- [Trigonometry](../../trigonometry/index.md) — Sin, cos, tan functions
- [Logarithms](../../index.md) — Properties of $\ln$ and $\log$

### Applications

- [Derivatives & Differentiation](../differentiation-rules/index.md) — Standard limits derive basic derivatives
- [Integral Calculus](../../integral-calculus/index.md) — Limits define integrals
- [Series & Sequences](../../sequences-series/index.md) — $e$ defined as series limit

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) — Instantaneous velocity from limits
- [Simple Harmonic Motion](../../../physics/oscillations-waves/index.md) — Sin/cos limits in oscillations
- [Radioactive Decay](../../../physics/dual-nature/index.md) — Exponential limit applications

---

From TestGuru · our mock-test platform

## You've read Standard Limits & L'Hôpital's Rule.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fstandard-limits%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/standard-limits/",this.page.identifier="/mathematics/limits-continuity-differentiability/standard-limits/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421774931537"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421774931537")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/standard-limits/](https://jeenotes.in/mathematics/limits-continuity-differentiability/standard-limits/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/standard-limits/index.html`_
