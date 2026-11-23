---
title: "Implicit Differentiation & Parametric Forms"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/implicit-differentiation/"
description: "Master implicit differentiation, parametric equations, and advanced differentiation techniques for JEE calculus."
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/implicit-differentiation/index.html"
extracted: "2026-11-23"
---

> Master implicit differentiation, parametric equations, and advanced differentiation techniques for JEE calculus.

## The Hook: Hidden Relationships

> **★ Key point · Connect: The Circle Equation Mystery**
>
> In *3 Idiots* (2009), Rancho says “Don’t chase success, chase excellence and success will follow.”
>
> Similarly, in the equation of a circle $x^2 + y^2 = 25$, we can’t directly solve for $y$ as a simple function of $x$ (we get $y = \pm\sqrt{25 - x^2}$).
>
> **Question:** How do we find the slope of the tangent line to this circle at any point?
>
> We need **implicit differentiation** — a technique that finds $\frac{dy}{dx}$ without explicitly solving for $y$!
>
> This is the power of working with relationships hidden in equations.

---

## Interactive: Visualize Implicit Curves

Plot implicit curves like $x^2 + y^2 = 25$ and see how the tangent slope changes!

---

## What is Implicit Differentiation?

### Explicit vs Implicit Functions

**Explicit Function:** $y$ is written explicitly in terms of $x$

- Example: $y = x^2 + 3x + 1$
- Easy to differentiate: $\frac{dy}{dx} = 2x + 3$

**Implicit Function:** $x$ and $y$ are mixed together in an equation

- Example: $x^2 + y^2 = 25$
- Can’t easily solve for $y$

### The Technique

**Key Idea:** Differentiate both sides with respect to $x$, treating $y$ as a function of $x$.

**Chain Rule for $y$ terms:**

When differentiating $y^n$ with respect to $x$:

$$\frac{d}{dx}(y^n) = ny^{n-1} \cdot \frac{dy}{dx}$$

Don’t forget the $\frac{dy}{dx}$ factor!

---

## Step-by-Step Method

### Example 1: Circle Equation

Find $\frac{dy}{dx}$ if $x^2 + y^2 = 25$

**Step 1:** Differentiate both sides w.r.t. $x$

$$\frac{d}{dx}(x^2 + y^2) = \frac{d}{dx}(25)$$

**Step 2:** Apply differentiation rules

$$2x + 2y\frac{dy}{dx} = 0$$

(Remember: $\frac{d}{dx}(y^2) = 2y \cdot \frac{dy}{dx}$ by chain rule!)

**Step 3:** Solve for $\frac{dy}{dx}$

$$2y\frac{dy}{dx} = -2x$$

$$\boxed{\frac{dy}{dx} = -\frac{x}{y}}$$

**Interpretation:** At point $(3, 4)$ on the circle, slope = $-\frac{3}{4}$

### Example 2: More Complex Equation

Find $\frac{dy}{dx}$ if $x^3 + y^3 = 6xy$

**Differentiate both sides:**

$$3x^2 + 3y^2\frac{dy}{dx} = 6y + 6x\frac{dy}{dx}$$

(Used product rule on the right: $\frac{d}{dx}(xy) = y + x\frac{dy}{dx}$)

**Collect $\frac{dy}{dx}$ terms:**

$$3y^2\frac{dy}{dx} - 6x\frac{dy}{dx} = 6y - 3x^2$$

$$\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2$$

$$\boxed{\frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}}$$

---

## Common Patterns in Implicit Differentiation

### Pattern 1: $y^n$ Terms

$$\frac{d}{dx}(y^n) = ny^{n-1}\frac{dy}{dx}$$

**Examples:**

- $\frac{d}{dx}(y^3) = 3y^2\frac{dy}{dx}$
- $\frac{d}{dx}(\sqrt{y}) = \frac{1}{2\sqrt{y}}\frac{dy}{dx}$

### Pattern 2: Product of $x$ and $y$

$$\frac{d}{dx}(xy) = y + x\frac{dy}{dx}$$

$$\frac{d}{dx}(x^2y) = 2xy + x^2\frac{dy}{dx}$$

### Pattern 3: Trigonometric Functions of $y$

$$\frac{d}{dx}(\sin y) = \cos y \cdot \frac{dy}{dx}$$

$$\frac{d}{dx}(\tan y) = \sec^2 y \cdot \frac{dy}{dx}$$

### Pattern 4: Exponential/Logarithmic with $y$

$$\frac{d}{dx}(e^y) = e^y\frac{dy}{dx}$$

$$\frac{d}{dx}(\ln y) = \frac{1}{y}\frac{dy}{dx}$$

---

## Parametric Differentiation

### What are Parametric Equations?

Instead of $y = f(x)$, both $x$ and $y$ are expressed in terms of a third variable (parameter) $t$:

$$x = f(t), \quad y = g(t)$$

**Example:** Motion of a projectile

- $x = v_0t\cos\theta$ (horizontal position)
- $y = v_0t\sin\theta - \frac{1}{2}gt^2$ (vertical position)

### Finding $\frac{dy}{dx}$ from Parametric Form

**Parametric Derivative Formula:**

$$\boxed{\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}}$$

Provided $\frac{dx}{dt} \neq 0$

**Intuition:** By chain rule:

$$\frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \frac{dy/dt}{dx/dt}$$

### Example 1: Simple Parametric Curve

If $x = t^2$ and $y = t^3$, find $\frac{dy}{dx}$.

**Solution:**

$$\frac{dx}{dt} = 2t, \quad \frac{dy}{dt} = 3t^2$$

$$\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$$

To express in terms of $x$: Since $t = \sqrt{x}$,

$$\frac{dy}{dx} = \frac{3\sqrt{x}}{2}$$

### Example 2: Cycloid Curve

A cycloid is traced by a point on a rolling circle:

$$x = a(t - \sin t), \quad y = a(1 - \cos t)$$

Find $\frac{dy}{dx}$.

**Solution:**

$$\frac{dx}{dt} = a(1 - \cos t)$$

$$\frac{dy}{dt} = a\sin t$$

$$\frac{dy}{dx} = \frac{a\sin t}{a(1 - \cos t)} = \frac{\sin t}{1 - \cos t}$$

**Simplify using half-angle formulas:**

$$\sin t = 2\sin\frac{t}{2}\cos\frac{t}{2}, \quad 1 - \cos t = 2\sin^2\frac{t}{2}$$

$$\frac{dy}{dx} = \frac{2\sin\frac{t}{2}\cos\frac{t}{2}}{2\sin^2\frac{t}{2}} = \frac{\cos\frac{t}{2}}{\sin\frac{t}{2}} = \cot\frac{t}{2}$$

---

## Second Derivatives in Parametric Form

**Second Derivative:**

$$\boxed{\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}}$$

### Example

For $x = at^2$, $y = 2at$, find $\frac{d^2y}{dx^2}$.

**First derivative:**

$$\frac{dy}{dx} = \frac{2a}{2at} = \frac{1}{t}$$

**Second derivative:**

$$\frac{d}{dt}\left(\frac{dy}{dx}\right) = \frac{d}{dt}\left(\frac{1}{t}\right) = -\frac{1}{t^2}$$

$$\frac{d^2y}{dx^2} = \frac{-\frac{1}{t^2}}{2at} = -\frac{1}{2at^3}$$

---

## Special Cases and Applications

### Case 1: Logarithmic Implicit Differentiation

For equations with products/quotients, take $\ln$ first!

**Example:** If $xy = e^{x-y}$, find $\frac{dy}{dx}$.

**Method 1: Direct implicit differentiation** (tedious)

**Method 2: Take $\ln$ first** (clever!)

$$\ln(xy) = \ln(e^{x-y})$$

$$\ln x + \ln y = x - y$$

Differentiate:

$$\frac{1}{x} + \frac{1}{y}\frac{dy}{dx} = 1 - \frac{dy}{dx}$$

$$\frac{dy}{dx}\left(\frac{1}{y} + 1\right) = 1 - \frac{1}{x}$$

$$\frac{dy}{dx} = \frac{1 - \frac{1}{x}}{\frac{1}{y} + 1} = \frac{y(x-1)}{x(y+1)}$$

### Case 2: Tangent and Normal to Curves

For implicit curve $F(x, y) = 0$ at point $(x_0, y_0)$:

**Tangent Line:**

$$y - y_0 = \frac{dy}{dx}\bigg|_{(x_0, y_0)} (x - x_0)$$

**Normal Line (perpendicular to tangent):**

$$y - y_0 = -\frac{1}{\frac{dy}{dx}\bigg|_{(x_0, y_0)}} (x - x_0)$$

**Example:** Find the tangent to $x^2 + y^2 = 25$ at $(3, 4)$.

We found earlier: $\frac{dy}{dx} = -\frac{x}{y}$

At $(3, 4)$: $\frac{dy}{dx} = -\frac{3}{4}$

**Tangent:** $y - 4 = -\frac{3}{4}(x - 3)$

Simplify: $3x + 4y = 25$

### Case 3: Slope of Polar Curves

For polar curve $r = f(\theta)$:

$$x = r\cos\theta, \quad y = r\sin\theta$$

$$\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$$

---

## Memory Tricks

> **★ Key point · Mnemonic: CHAIN-Y**
>
> When you see a **$y$ term**, think **CHAIN rule**!
>
> $$\frac{d}{dx}(y^n) = ny^{n-1} \times \frac{dy}{dx}$$
>
> **“Don’t forget dy/dx, it’s your friend!”**

> **★ Key point · Parametric Trick: Divide Derivatives**
>
> For parametric:
>
> $$\frac{dy}{dx} = \frac{\text{derivative of } y}{\text{derivative of } x} = \frac{dy/dt}{dx/dt}$$
>
> **“Divide the derivatives, both w.r.t. parameter!”**

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> **Question:** Find $\frac{dy}{dx}$ if $x^2 + y^2 = 16$
>
> **Solution:**
>
> Differentiate both sides:
>
> $$2x + 2y\frac{dy}{dx} = 0$$

$$\frac{dy}{dx} = -\frac{x}{y}$$

> **↗ Connection · Problem 2**
>
> **Question:** If $x = 3t$, $y = t^2$, find $\frac{dy}{dx}$
>
> **Solution:**
>
> $$\frac{dx}{dt} = 3, \quad \frac{dy}{dt} = 2t$$

$$\frac{dy}{dx} = \frac{2t}{3}$$

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **Question:** Find $\frac{dy}{dx}$ if $xy + y^2 = \tan x$
>
> **Solution:**
>
> Differentiate:
>
> $$y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = \sec^2 x$$

$$\frac{dy}{dx}(x + 2y) = \sec^2 x - y$$

$$\frac{dy}{dx} = \frac{\sec^2 x - y}{x + 2y}$$

> **↗ Connection · Problem 4**
>
> **Question:** If $x = a\cos^3\theta$, $y = a\sin^3\theta$, find $\frac{dy}{dx}$
>
> **Solution:**
>
> $$\frac{dx}{d\theta} = -3a\cos^2\theta\sin\theta$$

$$\frac{dy}{d\theta} = 3a\sin^2\theta\cos\theta$$

$$\frac{dy}{dx} = \frac{3a\sin^2\theta\cos\theta}{-3a\cos^2\theta\sin\theta} = -\frac{\sin\theta}{\cos\theta} = -\tan\theta$$

> **↗ Connection · Problem 5**
>
> **Question:** Find the equation of tangent to $x^2 + y^2 = 13$ at point $(2, 3)$
>
> **Solution:**
>
> Implicit differentiation: $\frac{dy}{dx} = -\frac{x}{y}$
>
> At $(2, 3)$: $\frac{dy}{dx} = -\frac{2}{3}$
>
> **Tangent equation:**
>
> $$y - 3 = -\frac{2}{3}(x - 2)$$

$$3y - 9 = -2x + 4$$

$$2x + 3y = 13$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 6**
>
> **Question:** If $x\sqrt{1+y} + y\sqrt{1+x} = 0$, prove that $\frac{dy}{dx} = -\frac{1}{(1+x)^2}$
>
> **Solution:**
>
> Rewrite: $x\sqrt{1+y} = -y\sqrt{1+x}$
>
> Square both sides:
>
> $$x^2(1+y) = y^2(1+x)$$

$$x^2 + x^2y = y^2 + xy^2$$

$$x^2 - y^2 = xy^2 - x^2y = xy(y - x)$$

$$(x-y)(x+y) = -xy(x-y)$$
>
> If $x \neq y$, divide by $(x-y)$:
>
> $$x + y = -xy$$
>
> Differentiate:
>
> $$1 + \frac{dy}{dx} = -y - x\frac{dy}{dx}$$

$$\frac{dy}{dx}(1 + x) = -1 - y$$
>
> From $x + y = -xy$, we get $y = -\frac{x}{1+x}$
>
> So $1 + y = \frac{1}{1+x}$
>
> $$\frac{dy}{dx} = \frac{-1-y}{1+x} = \frac{-(1+y)}{1+x} = -\frac{1}{(1+x)^2}$$
>
> Hence proved. ∎

> **↗ Connection · Problem 7**
>
> **Question:** If $x = a(\theta + \sin\theta)$, $y = a(1 - \cos\theta)$, find $\frac{d^2y}{dx^2}$ at $\theta = \frac{\pi}{2}$
>
> **Solution:**
>
> $$\frac{dx}{d\theta} = a(1 + \cos\theta), \quad \frac{dy}{d\theta} = a\sin\theta$$

$$\frac{dy}{dx} = \frac{a\sin\theta}{a(1+\cos\theta)} = \frac{\sin\theta}{1+\cos\theta}$$
>
> For second derivative:
>
> $$\frac{d}{d\theta}\left(\frac{dy}{dx}\right) = \frac{(1+\cos\theta)\cos\theta - \sin\theta(-\sin\theta)}{(1+\cos\theta)^2}$$

$$= \frac{\cos\theta + \cos^2\theta + \sin^2\theta}{(1+\cos\theta)^2} = \frac{\cos\theta + 1}{(1+\cos\theta)^2} = \frac{1}{1+\cos\theta}$$

$$\frac{d^2y}{dx^2} = \frac{\frac{1}{1+\cos\theta}}{a(1+\cos\theta)} = \frac{1}{a(1+\cos\theta)^2}$$
>
> At $\theta = \frac{\pi}{2}$: $\cos\frac{\pi}{2} = 0$
>
> $$\frac{d^2y}{dx^2} = \frac{1}{a(1+0)^2} = \frac{1}{a}$$

> **↗ Connection · Problem 8 (JEE Advanced 2019 Type)**
>
> **Question:** If $y = y(x)$ satisfies $x\cos y + y\cos x = \pi$, find $y''(0)$.
>
> **Solution:**
>
> At $x = 0$: $0 + y\cos 0 = \pi \Rightarrow y(0) = \pi$
>
> Differentiate: $\cos y - x\sin y \cdot y' + y' \cos x - y\sin x = 0$
>
> At $x = 0$, $y = \pi$:
>
> $$\cos\pi - 0 + y'(0)\cos 0 - \pi \sin 0 = 0$$

$$-1 + y'(0) = 0 \Rightarrow y'(0) = 1$$
>
> Differentiate again:
>
> $$-\sin y \cdot y' - [\sin y \cdot y' + x\sin y \cdot (y')^2 + x\cos y \cdot y''] + [y'' \cos x - y' \sin x] - [y'\sin x + y\cos x] = 0$$
>
> At $x = 0$, $y = \pi$, $y' = 1$:
>
> $$0 - 0 + y''(0) - 1 - 0 = 0$$

$$y''(0) = 1$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting $\frac{dy}{dx}$ in Implicit**
>
> **Wrong:** $\frac{d}{dx}(y^2) = 2y$ ✗
>
> **Correct:** $\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$ ✓
>
> Always apply chain rule to $y$ terms!

> **⚠ Trap #2: Product Rule Miss in $xy$ Terms**
>
> **Wrong:** $\frac{d}{dx}(xy) = y$ ✗
>
> **Correct:** $\frac{d}{dx}(xy) = y + x\frac{dy}{dx}$ ✓
>
> Use product rule!

> **⚠ Trap #3: Parametric Division Error**
>
> **Wrong:** $\frac{dy}{dx} = \frac{dx/dt}{dy/dt}$ ✗
>
> **Correct:** $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ ✓
>
> **"$dy$ on top, $dx$ on bottom!"**

> **⚠ Trap #4: Not Simplifying Before Substitution**
>
> When finding second derivatives in parametric form, simplify $\frac{dy}{dx}$ in terms of $t$ first, then differentiate. Don’t substitute $(x, y)$ values prematurely!

---

## Quick Revision Box

| Concept | Formula | Key Point |
| --- | --- | --- |
| **Implicit Differentiation** | Differentiate both sides w.r.t. $x$ | Don’t forget $\frac{dy}{dx}$ on $y$ terms |
| **$y^n$ terms** | $\frac{d}{dx}(y^n) = ny^{n-1}\frac{dy}{dx}$ | Chain rule always! |
| **$xy$ terms** | $\frac{d}{dx}(xy) = y + x\frac{dy}{dx}$ | Product rule |
| **Parametric** | $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ | Divide derivatives |
| **Second derivative** | $\frac{d^2y}{dx^2} = \frac{d/dt(dy/dx)}{dx/dt}$ | Differentiate w.r.t. $t$, then divide |

---

## JEE Strategy Tips

> **★ Key point · Exam Wisdom**
>
> **Weightage:** Implicit and parametric differentiation appear in 2-3 questions every JEE.
>
> **Time-Saver:** For tangent/normal problems, implicit differentiation is often faster than solving for $y$ explicitly!
>
> **Common Pattern:** JEE loves mixing implicit + parametric. Be ready to convert between forms.
>
> **Trap Alert:** Always check if $\frac{dx}{dt} = 0$ at any point in parametric — derivative is undefined there (vertical tangent)!
>
> **Advanced Tip:** For complex implicit equations, taking $\ln$ before differentiating can simplify massively.
>
> **Exam Hack:** In parametric second derivatives, express $\frac{dy}{dx}$ purely in terms of $t$ before differentiating again.

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Implicit differentiation** finds $\frac{dy}{dx}$ without solving for $y$ — essential for circles, ellipses, and complex curves.

> 2. **Golden rule:** Always apply chain rule to $y$ terms: $\frac{d}{dx}(y^n) = ny^{n-1}\frac{dy}{dx}$

> 3. **Parametric curves** express both $x$ and $y$ in terms of $t$. Use $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$.

> 4. **Second derivatives** in parametric form require differentiating $\frac{dy}{dx}$ w.r.t. $t$, then dividing by $\frac{dx}{dt}$ again.

> 5. **Applications** include tangent/normal to curves, physics (motion), and polar coordinates.
>
> **“Implicit differentiation: when $y$ is shy and won’t come out explicitly!”**

---

## Related Topics

### Within Limits, Continuity & Differentiability

- [Differentiation Rules](../differentiation-rules/index.md) — Foundation for implicit/parametric techniques
- [Higher Derivatives](../higher-derivatives/index.md) — Extending to second and higher orders
- [Applications of Derivatives](../applications-derivatives/index.md) — Using derivatives for tangents, normals

### Mathematical Foundations

- [Functions](../../sets-relations-functions/functions-basics/index.md) — Understanding implicit relations
- [Trigonometry](../../trigonometry/index.md) — Trig identities in parametric forms
- [Coordinate Geometry](../../coordinate-geometry/index.md) — Curves and tangents

### Applications

- [Curve Sketching](../curve-sketching/index.md) — Using derivatives to analyze curves
- [Differential Equations](../../differential-equations/index.md) — Implicit differentiation in DEs

### Physics Connections

- [Kinematics](../../../physics/kinematics/index.md) — Parametric equations for projectile motion
- [Circular Motion](../../../physics/kinematics/circular-motion/index.md) — Polar coordinate derivatives

---

From TestGuru · our mock-test platform

## You've read Implicit Differentiation & Parametric Forms.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fimplicit-differentiation%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/limits-continuity-differentiability/implicit-differentiation/",this.page.identifier="/mathematics/limits-continuity-differentiability/implicit-differentiation/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="derivativeSlope" id="anim-derivativeSlope-1795396421822717587"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-derivativeSlope-1795396421822717587")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/implicit-differentiation/](https://jeenotes.in/mathematics/limits-continuity-differentiability/implicit-differentiation/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/implicit-differentiation/index.html`_
