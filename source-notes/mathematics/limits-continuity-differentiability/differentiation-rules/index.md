---
title: "Rules of Differentiation"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiation-rules/"
description: "Master product rule, quotient rule, chain rule, and advanced differentiation techniques for JEE calculus problems."
updated: "2025-12-26"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/differentiation-rules/index.html"
extracted: "2026-11-23"
---

> Master product rule, quotient rule, chain rule, and advanced differentiation techniques for JEE calculus problems.

## The Hook: The Multiplication Mystery

> **★ Key point · Connect: The Compounding Effect**
>
> In *12th Fail* (2023), Manoj studies hard every day. His knowledge grows, and his confidence grows too.
>
> Question: How fast is his **total success** (knowledge × confidence) growing?
>
> If knowledge is function $u(t)$ and confidence is $v(t)$, success = $u(t) \times v(t)$.
>
> Can we just multiply the derivatives? Is $(uv)' = u'v'$?
>
> **Try it:** $u = x$, $v = x$, so $uv = x^2$.
>
> - LHS: $(x^2)' = 2x$

> - RHS: $(x)' \cdot (x)' = 1 \cdot 1 = 1$
>
> They’re **not equal**! So how do we differentiate products?
>
> This is where the **Product Rule** saves the day!

---

## Interactive: Derivative as Slope Visualizer

> **★ Key point · The 'Aha Moment' Tool**
>
> This interactive tool lets you **see** what a derivative really means. Watch how the secant line (through two points) becomes the tangent line as the distance $h$ approaches zero. This is the **definition of derivative** in action!
>
> **How to use:**
>
> 1. Select a function from the dropdown

> 2. Move the “Point a” slider to explore different locations on the curve

> 3. Adjust the “h” slider to see how the secant slope approaches the tangent slope

> 4. Click **“Watch h -> 0”** to see the limit animation

> 5. Toggle visibility of secant, tangent, and derivative curves
>
> **Key insight:** When the secant slope (orange dashed) matches the tangent slope (green solid), you’ve found the derivative!

---

## Interactive: Explore Function Transformations

Try plotting composite functions like $\sin(x^2)$ and see how they differ from $\sin x \cdot x^2$!

---

## The Core Concept

### Why We Need Rules

Computing derivatives from first principles every time is **tedious**.

Differentiation rules let us find derivatives of complex functions **instantly** by breaking them down into simpler parts.

**The Big Three Rules:**

1. **Product Rule** — For multiplying functions
2. **Quotient Rule** — For dividing functions
3. **Chain Rule** — For composing functions

---

## Rule 1: The Product Rule

### Statement

If $u(x)$ and $v(x)$ are differentiable, then:

$$\boxed{\frac{d}{dx}[u(x) \cdot v(x)] = u'(x) \cdot v(x) + u(x) \cdot v'(x)}$$

**Short form:** $(uv)' = u'v + uv'$

**In words:** “Derivative of first × second + first × derivative of second”

### Proof Sketch

$$\frac{d}{dx}(uv) = \lim_{h \to 0} \frac{u(x+h)v(x+h) - u(x)v(x)}{h}$$

Add and subtract $u(x+h)v(x)$:

$$= \lim_{h \to 0} \frac{u(x+h)v(x+h) - u(x+h)v(x) + u(x+h)v(x) - u(x)v(x)}{h}$$

$$= \lim_{h \to 0} \left[u(x+h) \cdot \frac{v(x+h) - v(x)}{h} + v(x) \cdot \frac{u(x+h) - u(x)}{h}\right]$$

$$= u(x) \cdot v'(x) + v(x) \cdot u'(x)$$

### Examples

**Example 1:** $f(x) = x^2 \sin x$

Let $u = x^2$, $v = \sin x$.

$$f'(x) = (x^2)' \sin x + x^2 (\sin x)'$$

$$= 2x \sin x + x^2 \cos x$$

**Example 2:** $f(x) = e^x (x^3 + 2x)$

$$f'(x) = (e^x)' (x^3 + 2x) + e^x (x^3 + 2x)'$$

$$= e^x (x^3 + 2x) + e^x (3x^2 + 2)$$

$$= e^x (x^3 + 3x^2 + 2x + 2)$$

> **◐ In simple terms · Memory Trick: FIRST-SECOND Rule**
>
> $(uv)' = $ **F**IRST’ × SECOND + FIRST × **S**ECOND'
>
> Or think: **“FS’ + SF’”** (First Second-prime plus Second First-prime)

### Extension: Product of Three Functions

For $f(x) = u(x) \cdot v(x) \cdot w(x)$:

$$\boxed{(uvw)' = u'vw + uv'w + uvw'}$$

**Pattern:** Differentiate one at a time, keeping others constant, then add!

---

## Rule 2: The Quotient Rule

### Statement

If $u(x)$ and $v(x)$ are differentiable and $v(x) \neq 0$, then:

$$\boxed{\frac{d}{dx}\left[\frac{u(x)}{v(x)}\right] = \frac{u'(x) \cdot v(x) - u(x) \cdot v'(x)}{[v(x)]^2}}$$

**Short form:** $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$

**In words:** “Bottom times derivative of top minus top times derivative of bottom, all over bottom squared”

### Proof Sketch

Use product rule on $u = \frac{u}{v} \cdot v$:

$$u' = \left(\frac{u}{v}\right)' \cdot v + \frac{u}{v} \cdot v'$$

Solving for $\left(\frac{u}{v}\right)'$:

$$\left(\frac{u}{v}\right)' = \frac{u' - \frac{u}{v} \cdot v'}{v} = \frac{u'v - uv'}{v^2}$$

### Examples

**Example 1:** $f(x) = \frac{x^2}{x + 1}$

Let $u = x^2$, $v = x + 1$.

$$f'(x) = \frac{(x^2)'(x+1) - x^2(x+1)'}{(x+1)^2}$$

$$= \frac{2x(x+1) - x^2(1)}{(x+1)^2}$$

$$= \frac{2x^2 + 2x - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}$$

**Example 2:** $f(x) = \frac{\sin x}{x}$

$$f'(x) = \frac{(\sin x)' \cdot x - \sin x \cdot (x)'}{x^2}$$

$$= \frac{x\cos x - \sin x}{x^2}$$

> **◐ In simple terms · Memory Trick: LO-dHI minus HI-dLO over LO-LO**
>
> Think of a **ladder** leaning against a wall:
>
> **LO**w × d**HI**gh - **HI**gh × d**LO**w, all over **LO-LO**
>
> (Bottom × derivative of top - top × derivative of bottom, over bottom squared)
>
> Or the cleaner version: **“Bottom-Top’ minus Top-Bottom’, over Bottom-Bottom”**

---

## Rule 3: The Chain Rule

### Statement

If $y = f(u)$ and $u = g(x)$, then:

$$\boxed{\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}}$$

**Alternate form:** If $y = f(g(x))$:

$$\boxed{\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)}$$

**In words:** “Derivative of outer function (at inner) × derivative of inner function”

### Intuition

Think of a **chain of events**:

- $x$ changes → $u = g(x)$ changes → $y = f(u)$ changes

Rate of change of $y$ w.r.t. $x$ = (rate of $y$ w.r.t. $u$) × (rate of $u$ w.r.t. $x$)

Just like: km/hour = (km/miles) × (miles/hour) — the “miles” cancel!

### Examples

**Example 1:** $y = \sin(x^2)$

Let $u = x^2$, so $y = \sin u$.

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx} = \cos u \cdot 2x = 2x\cos(x^2)$$

**Example 2:** $y = e^{3x}$

Let $u = 3x$, so $y = e^u$.

$$\frac{dy}{dx} = e^u \cdot 3 = 3e^{3x}$$

**Example 3:** $y = \sqrt{x^2 + 1}$

Let $u = x^2 + 1$, so $y = u^{1/2}$.

$$\frac{dy}{dx} = \frac{1}{2}u^{-1/2} \cdot 2x = \frac{x}{\sqrt{x^2 + 1}}$$

> **★ Key point · Movie Analogy: Mission: Impossible Chain Reaction**
>
> Think of Ethan Hunt in *Mission: Impossible* defusing a bomb. To stop the explosion (change in $y$), he must:
>
> 1. Cut the right wire (change $u$)

> 2. Which requires the right tool (change $x$)
>
> The **chain** of actions: tool → wire → explosion. Chain rule connects them!

### Nested Chain Rule

For $y = f(g(h(x)))$:

$$\frac{dy}{dx} = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$$

**Example:** $y = \sin(\sqrt{x^2 + 1})$

$$\frac{dy}{dx} = \cos(\sqrt{x^2 + 1}) \cdot \frac{1}{2\sqrt{x^2 + 1}} \cdot 2x = \frac{x\cos(\sqrt{x^2 + 1})}{\sqrt{x^2 + 1}}$$

---

## Combining the Rules

### When to Use Which?

| Function Type | Rule to Use |
| --- | --- |
| $u(x) \cdot v(x)$ | Product rule |
| $\frac{u(x)}{v(x)}$ | Quotient rule |
| $f(g(x))$ | Chain rule |
| $u(x) \cdot v(x) / w(x)$ | Product + Quotient |
| $f(g(h(x)))$ | Nested chain rule |

### Complex Example

$$f(x) = \frac{x^2 \sin(x^3)}{e^x}$$

**Step 1:** Quotient rule (outer structure)

Let $u = x^2 \sin(x^3)$, $v = e^x$.

$$f'(x) = \frac{u'e^x - u \cdot e^x}{(e^x)^2} = \frac{u' - u}{e^x}$$

**Step 2:** Product rule for $u$

$u = x^2 \cdot \sin(x^3)$

$$u' = 2x\sin(x^3) + x^2 \cdot (\sin(x^3))'$$

**Step 3:** Chain rule for $(\sin(x^3))'$

$$(\sin(x^3))' = \cos(x^3) \cdot 3x^2$$

**Combine:**

$$u' = 2x\sin(x^3) + x^2 \cdot 3x^2\cos(x^3) = 2x\sin(x^3) + 3x^4\cos(x^3)$$

$$f'(x) = \frac{2x\sin(x^3) + 3x^4\cos(x^3) - x^2\sin(x^3)}{e^x}$$

---

## Advanced Techniques

### 1. Logarithmic Differentiation

**When to use:** Products/quotients of many terms, or variable exponents.

**Method:** Take $\ln$ of both sides, then differentiate.

**Example:** $y = x^x$ (variable base and exponent!)

Take $\ln$: $\ln y = \ln(x^x) = x \ln x$

Differentiate both sides:

$$\frac{1}{y} \cdot \frac{dy}{dx} = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

$$\frac{dy}{dx} = y(\ln x + 1) = x^x(\ln x + 1)$$

**Example 2:** $y = \frac{x^3 \sqrt{x+1}}{(x-2)^2}$

Take $\ln$:

$$\ln y = 3\ln x + \frac{1}{2}\ln(x+1) - 2\ln(x-2)$$

Differentiate:

$$\frac{1}{y} \frac{dy}{dx} = \frac{3}{x} + \frac{1}{2(x+1)} - \frac{2}{x-2}$$

$$\frac{dy}{dx} = y\left[\frac{3}{x} + \frac{1}{2(x+1)} - \frac{2}{x-2}\right]$$

### 2. Implicit Differentiation

**When to use:** Equation is not in form $y = f(x)$ (e.g., $x^2 + y^2 = 1$).

**Method:** Differentiate both sides w.r.t. $x$, treating $y$ as a function of $x$.

**Example:** $x^2 + y^2 = 25$

Differentiate:

$$2x + 2y\frac{dy}{dx} = 0$$

$$\frac{dy}{dx} = -\frac{x}{y}$$

**Example 2:** $xy + \sin y = 1$

Differentiate:

$$y + x\frac{dy}{dx} + \cos y \cdot \frac{dy}{dx} = 0$$

$$\frac{dy}{dx}(x + \cos y) = -y$$

$$\frac{dy}{dx} = \frac{-y}{x + \cos y}$$

### 3. Parametric Differentiation

**When to use:** $x$ and $y$ both expressed in terms of parameter $t$.

**Formula:**

$$\boxed{\frac{dy}{dx} = \frac{dy/dt}{dx/dt}}$$

**Example:** $x = t^2$, $y = t^3$

$$\frac{dx}{dt} = 2t, \quad \frac{dy}{dt} = 3t^2$$

$$\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$$

---

## Memory Tricks & Patterns

### Product Rule Mnemonic

**“First times Second-prime Plus Second times First-prime”**

Or think: **“FS’ + SF’”**

### Quotient Rule Mnemonic

**“Low-dHigh minus High-dLow, over Low-Low”**

Or: **“Bottom-Top’ minus Top-Bottom’, over Bottom²”**

Or sing to the tune: **“LO-dHI, HI-dLO, square the bottom and away we go!”**

### Chain Rule Mnemonic

**“Derivative of Outside × Derivative of Inside”**

Think: **“Outside-Inside-Prime”** or **“OIP”**

### Pattern Recognition

| Pattern | Quick Formula |
| --- | --- |
| $(ax + b)^n$ | $an(ax + b)^{n-1}$ |
| $e^{ax}$ | $ae^{ax}$ |
| $\sin(ax)$ | $a\cos(ax)$ |
| $\ln(ax + b)$ | $\frac{a}{ax + b}$ |

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Differentiate $f(x) = x^3 \sin x$
>
> **Solution (Product Rule):**
>
> $$f'(x) = (x^3)' \sin x + x^3 (\sin x)'$$

$$= 3x^2 \sin x + x^3 \cos x$$

> **↗ Connection · Problem 2**
>
> **Question:** Find $\frac{d}{dx}\left(\frac{x^2}{x+1}\right)$
>
> **Solution (Quotient Rule):**
>
> $$\frac{d}{dx}\left(\frac{x^2}{x+1}\right) = \frac{2x(x+1) - x^2 \cdot 1}{(x+1)^2}$$

$$= \frac{2x^2 + 2x - x^2}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}$$

> **↗ Connection · Problem 3**
>
> **Question:** Differentiate $y = \sin(3x)$
>
> **Solution (Chain Rule):**
>
> $$\frac{dy}{dx} = \cos(3x) \cdot 3 = 3\cos(3x)$$

### Level 2: JEE Main

> **↗ Connection · Problem 4**
>
> **Question:** Find $\frac{dy}{dx}$ if $y = e^{x^2}$
>
> **Solution (Chain Rule):**
>
> $$\frac{dy}{dx} = e^{x^2} \cdot 2x = 2xe^{x^2}$$

> **↗ Connection · Problem 5**
>
> **Question:** Differentiate $f(x) = \frac{\sin x}{x^2}$
>
> **Solution (Quotient Rule):**
>
> $$f'(x) = \frac{(\sin x)' \cdot x^2 - \sin x \cdot (x^2)'}{(x^2)^2}$$

$$= \frac{x^2 \cos x - 2x\sin x}{x^4} = \frac{x\cos x - 2\sin x}{x^3}$$

> **↗ Connection · Problem 6**
>
> **Question:** Find $\frac{dy}{dx}$ if $x^2 + y^2 = 100$
>
> **Solution (Implicit Differentiation):**
>
> $$2x + 2y\frac{dy}{dx} = 0$$

$$\frac{dy}{dx} = -\frac{x}{y}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 7**
>
> **Question:** Differentiate $y = x^{\sin x}$
>
> **Solution (Logarithmic Differentiation):**
>
> $$\ln y = \sin x \cdot \ln x$$
>
> Differentiate both sides:
>
> $$\frac{1}{y}\frac{dy}{dx} = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x}$$

$$\frac{dy}{dx} = x^{\sin x}\left(\cos x \ln x + \frac{\sin x}{x}\right)$$

> **↗ Connection · Problem 8**
>
> **Question:** If $x = a(t - \sin t)$ and $y = a(1 - \cos t)$, find $\frac{dy}{dx}$.
>
> **Solution (Parametric Differentiation):**
>
> $$\frac{dx}{dt} = a(1 - \cos t), \quad \frac{dy}{dt} = a\sin t$$

$$\frac{dy}{dx} = \frac{a\sin t}{a(1 - \cos t)} = \frac{\sin t}{1 - \cos t}$$
>
> Simplify using $\sin t = 2\sin(t/2)\cos(t/2)$ and $1 - \cos t = 2\sin^2(t/2)$:
>
> $$\frac{dy}{dx} = \frac{2\sin(t/2)\cos(t/2)}{2\sin^2(t/2)} = \frac{\cos(t/2)}{\sin(t/2)} = \cot(t/2)$$

> **↗ Connection · Problem 9 (Tricky!)**
>
> **Question:** If $y = \sqrt{\sin x + \sqrt{\sin x + \sqrt{\sin x + \ldots}}}$ to infinity, find $\frac{dy}{dx}$.
>
> **Solution:**

> Since the pattern repeats infinitely, we have:
>
> $$y = \sqrt{\sin x + y}$$
>
> Square both sides:
>
> $$y^2 = \sin x + y$$
>
> Differentiate implicitly:
>
> $$2y\frac{dy}{dx} = \cos x + \frac{dy}{dx}$$

$$\frac{dy}{dx}(2y - 1) = \cos x$$

$$\frac{dy}{dx} = \frac{\cos x}{2y - 1}$$

> **↗ Connection · Problem 10 (JEE Advanced Level)**
>
> **Question:** Find $\frac{d^2y}{dx^2}$ if $y = e^{ax}\sin(bx)$
>
> **Solution:**

> First derivative (Product Rule):
>
> $$\frac{dy}{dx} = ae^{ax}\sin(bx) + be^{ax}\cos(bx) = e^{ax}[a\sin(bx) + b\cos(bx)]$$
>
> Second derivative (Product Rule again):
>
> $$\frac{d^2y}{dx^2} = ae^{ax}[a\sin(bx) + b\cos(bx)] + e^{ax}[ab\cos(bx) - b^2\sin(bx)]$$

$$= e^{ax}[a^2\sin(bx) + ab\cos(bx) + ab\cos(bx) - b^2\sin(bx)]$$

$$= e^{ax}[(a^2 - b^2)\sin(bx) + 2ab\cos(bx)]$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Product Rule Confusion**
>
> **Wrong:** $(uv)' = u'v'$ ✗
>
> **Correct:** $(uv)' = u'v + uv'$ ✓
>
> The derivatives do **NOT** multiply directly!

> **⚠ Trap #2: Quotient Rule Sign Error**
>
> **Wrong:** $\left(\frac{u}{v}\right)' = \frac{uv' - u'v}{v^2}$ ✗
>
> **Correct:** $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ ✓
>
> **Top-prime** comes first!

> **⚠ Trap #3: Forgetting Chain Rule**
>
> **Wrong:** $\frac{d}{dx}[\sin(x^2)] = \cos(x^2)$ ✗
>
> **Correct:** $\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2x$ ✓
>
> Don’t forget to multiply by the derivative of the inside!

> **⚠ Trap #4: Implicit Differentiation Miss**
>
> When differentiating $y^2$ w.r.t. $x$:
>
> **Wrong:** $\frac{d}{dx}(y^2) = 2y$ ✗
>
> **Correct:** $\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$ ✓
>
> Always include $\frac{dy}{dx}$ when differentiating $y$ terms!

---

## Quick Revision Box

| Rule | Formula | When to Use |
| --- | --- | --- |
| **Product** | $(uv)' = u'v + uv'$ | Functions multiplied |
| **Quotient** | $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ | Functions divided |
| **Chain** | $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ | Composite functions |
| **Logarithmic** | Take $\ln$, then differentiate | Complex products, $y^x$, $x^y$, $x^x$ |
| **Implicit** | Differentiate both sides w.r.t. $x$ | Equation not solved for $y$ |
| **Parametric** | $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ | Both $x$, $y$ functions of $t$ |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Differentiation rules appear in **every calculus problem** — they’re fundamental!
>
> **Time-Saver:** Memorize the mnemonics! They save precious seconds:
>
> - Product: “FS’ + SF'”

> - Quotient: “LO-dHI minus HI-dLO over LO-LO”

> - Chain: “Outside-Inside-Prime”
>
> **Common Pattern:** JEE Main loves chain rule with standard functions. Recognize patterns like $(ax + b)^n$ → derivative = $an(ax + b)^{n-1}$
>
> **Advanced Trick:** For complex fractions, sometimes **logarithmic differentiation** is faster than quotient rule!
>
> **Implicit Differentiation:** Always appears in JEE Advanced. Practice until automatic!
>
> **Exam Hack:** If you see $x^x$ or $x^{\sin x}$, immediately think **logarithmic differentiation**.

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **The Big Three** — Product, Quotient, Chain — are your differentiation toolkit. Master them, and you can differentiate anything.

> 2. **Product Rule:** $u'v + uv'$ (derivative of first × second + first × derivative of second)

> 3. **Quotient Rule:** $\frac{u'v - uv'}{v^2}$ (top-prime bottom minus top bottom-prime, over bottom squared)

> 4. **Chain Rule:** Derivative of outside × derivative of inside. For nested functions, work from outside to inside.

> 5. **Advanced techniques** — Logarithmic (for variable exponents), Implicit (for unsolved $y$), Parametric (for $t$-based) — extend your power to any function.
>
> **“Differentiation rules turn calculus from a marathon into a sprint!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Differentiability](../differentiability/index.md) - Foundation for these rules
- [Higher Derivatives](../higher-derivatives/index.md) - Second and higher order derivatives
- [Implicit Differentiation](../implicit-differentiation/index.md) - For implicit functions
- [Applications of Derivatives](../applications-derivatives/index.md) - Using derivatives for maxima, minima
- [Standard Limits](../standard-limits/index.md) - Used in derivative proofs
- [Maxima and Minima](../maxima-minima/index.md) - Optimization using derivatives

### Mathematical Foundations

- [Trigonometric Identities](../../trigonometry/trig-identities/index.md) - Trig function derivatives
- [Inverse Trigonometry](../../trigonometry/inverse-trig/index.md) - Inverse trig derivatives

### Applications

- [Indefinite Integrals](../../integral-calculus/indefinite-integrals/index.md) - Derivatives and integrals are inverses
- [Differential Equations](../../differential-equations/index.md) - Solving equations with derivatives
- [Tangent and Normal to Conics](../../coordinate-geometry/tangent-normal-conics/index.md) - Finding tangent lines

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) - Chain rule for velocity/acceleration
- [Simple Harmonic Motion](../../../physics/oscillations-waves/index.md) - Differentiating $\sin$, $\cos$
- [Current Electricity](../../../physics/current-electricity/index.md) - Rate of change of current

---

From TestGuru · our mock-test platform

## You've read Rules of Differentiation.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fdifferentiation-rules%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiation-rules/",this.page.identifier="/mathematics/limits-continuity-differentiability/differentiation-rules/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="derivativeVisualizer" id="anim-derivativeVisualizer-1795396421815147946"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-derivativeVisualizer-1795396421815147946")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421815184221"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421815184221")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiation-rules/](https://jeenotes.in/mathematics/limits-continuity-differentiability/differentiation-rules/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/differentiation-rules/index.html`_
