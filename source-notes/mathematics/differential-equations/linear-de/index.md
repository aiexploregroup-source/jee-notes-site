---
title: "Linear Differential Equations"
source: "https://jeenotes.in/mathematics/differential-equations/linear-de/"
description: "Complete guide to solving first-order linear differential equations using integrating factor method"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 8"
html: "../../../../offline/mathematics/differential-equations/linear-de/index.html"
extracted: "2026-11-23"
---

> Complete guide to solving first-order linear differential equations using integrating factor method

# Linear Differential Equations

## Introduction

A **Linear Differential Equation** of first order has a specific standard form and is solved using the powerful **Integrating Factor (IF)** method. This is one of the most important techniques in JEE differential equations.

---

## Definition

> A differential equation is **linear** if it can be written in the form:
>
> $$\boxed{\frac{dy}{dx} + P(x) \cdot y = Q(x)}$$

where $P(x)$ and $Q(x)$ are functions of $x$ only (or constants).

**Key Features**:

- $y$ and $\frac{dy}{dx}$ appear to **first power only**
- No products like $y \cdot \frac{dy}{dx}$
- No powers like $y^2$ or $\left(\frac{dy}{dx}\right)^2$

---

## Standard Form

### Form 1: In $x$

$$\boxed{\frac{dy}{dx} + P(x)y = Q(x)}$$

### Form 2: In $y$ (when $x$ is dependent variable)

$$\boxed{\frac{dx}{dy} + P(y)x = Q(y)}$$

---

## Linear vs Non-Linear

### Linear Examples

- $\frac{dy}{dx} + 3y = x^2$ ✓
- $\frac{dy}{dx} + xy = \sin x$ ✓
- $x\frac{dy}{dx} + y = x^3$ ✓ (can be written as $\frac{dy}{dx} + \frac{y}{x} = x^2$)

### Non-Linear Examples

- $\frac{dy}{dx} + y^2 = x$ ✗ ($y^2$ appears)
- $y\frac{dy}{dx} + x = 0$ ✗ (product of $y$ and $\frac{dy}{dx}$)
- $\left(\frac{dy}{dx}\right)^2 + y = 0$ ✗ (square of derivative)

---

## Integrating Factor Method

### Definition of Integrating Factor

> **Integrating Factor (IF)**:
>
> $$\boxed{IF = e^{\int P(x)dx}}$$

where $P(x)$ is the coefficient of $y$ in standard form.

---

### Solution Formula

The general solution of $\frac{dy}{dx} + P(x)y = Q(x)$ is:

> $$\boxed{y \cdot IF = \int Q(x) \cdot IF \, dx + C}$$

or equivalently:

> $$\boxed{y \cdot e^{\int P dx} = \int Q \cdot e^{\int P dx} dx + C}$$

---

## Step-by-Step Solution Method

**Step 1**: Write the DE in standard form $\frac{dy}{dx} + Py = Q$

**Step 2**: Identify $P(x)$ and $Q(x)$

**Step 3**: Find the Integrating Factor: $IF = e^{\int P(x)dx}$

- Don’t add constant in this integration!

**Step 4**: Multiply both sides of DE by IF

**Step 5**: Recognize LHS as $\frac{d}{dx}(y \cdot IF)$

**Step 6**: Integrate both sides

**Step 7**: Solve for $y$

---

## Why Integrating Factor Works

Starting with: $\frac{dy}{dx} + Py = Q$

Multiply by $IF = e^{\int P dx}$:

$$e^{\int P dx} \frac{dy}{dx} + P e^{\int P dx} y = Q e^{\int P dx}$$

Notice that:

$$\frac{d}{dx}\left(y \cdot e^{\int P dx}\right) = e^{\int P dx}\frac{dy}{dx} + y \cdot P e^{\int P dx}$$

(by product rule)

So the LHS becomes:

$$\frac{d}{dx}(y \cdot IF) = Q \cdot IF$$

Now integrate both sides!

### Interactive Demo: Visualize Linear DE Solutions

Plot solution curves for first-order linear differential equations.

---

## Memory Tricks

### 🎯 Standard Form Recognition

**“dy/dx PLUS Py equals Q”**:

- Must have $+$ sign (convert $-$ to $+$ if needed)
- $P$ multiplies $y$
- $Q$ is on right side

### 🎯 IF Formula Memory

**“I F equals E to the Integral P”**:

$$IF = e^{\int P \, dx}$$

**Mnemonic**: “**I**ntegrate **P** to get **IF**”

### 🎯 Solution Pattern

**“Y-IF equals Integral Q-IF”**:

$$y \cdot IF = \int Q \cdot IF \, dx + C$$

**Remember**:

- LHS: $y$ times IF
- RHS: Integral of ($Q$ times IF)

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Adding Constant in IF

**Wrong**: $IF = e^{\int P dx + C}$ ✗

**Correct**: $IF = e^{\int P dx}$ (NO constant here!) ✓

**Why**: The constant will cancel out anyway, and including it makes the solution complicated.

### ❌ Mistake 2: Wrong Sign in Standard Form

**Wrong**: $\frac{dy}{dx} - 2y = x$ → $P = 2$ ✗

**Correct**: Standard form needs $+$ sign

- Rewrite as: $\frac{dy}{dx} + (-2)y = x$
- So $P = -2$ ✓

### ❌ Mistake 3: Forgetting to Multiply Q by IF

**Wrong**: $y \cdot IF = \int Q \, dx$ ✗

**Correct**: $y \cdot IF = \int (Q \cdot IF) \, dx$ ✓

### ❌ Mistake 4: Treating Non-Linear as Linear

**Wrong**: $\frac{dy}{dx} + y^2 = x$ is linear ✗

**Correct**: This is Bernoulli equation (contains $y^2$), not linear ✓

---

## Solved Examples

### Example 1: Basic Linear DE (JEE Main)

**Solve**: $\frac{dy}{dx} + y = e^x$

**Solution**:

**Step 1**: Already in standard form: $\frac{dy}{dx} + 1 \cdot y = e^x$

**Step 2**: $P(x) = 1$, $Q(x) = e^x$

**Step 3**: $IF = e^{\int 1 \, dx} = e^x$

**Step 4**: Multiply by IF:

$$e^x \frac{dy}{dx} + e^x y = e^x \cdot e^x = e^{2x}$$

**Step 5**: LHS = $\frac{d}{dx}(y \cdot e^x)$

**Step 6**: Integrate:

$$y \cdot e^x = \int e^{2x} dx = \frac{e^{2x}}{2} + C$$

**Step 7**: Solve for $y$:

$$\boxed{y = \frac{e^x}{2} + Ce^{-x}}$$

---

### Example 2: With Variable Coefficient (JEE Main)

**Solve**: $\frac{dy}{dx} + y\tan x = \sec x$

**Solution**:

Standard form: $\frac{dy}{dx} + (\tan x)y = \sec x$

$P = \tan x$, $Q = \sec x$

$IF = e^{\int \tan x \, dx} = e^{\ln|\sec x|} = \sec x$

Multiply by IF:

$$\sec x \frac{dy}{dx} + \sec x \tan x \cdot y = \sec^2 x$$

$$\frac{d}{dx}(y \sec x) = \sec^2 x$$

Integrate:

$$y \sec x = \tan x + C$$

$$\boxed{y = \sin x + C\cos x}$$

---

### Example 3: With Initial Condition (JEE Main)

**Solve**: $\frac{dy}{dx} + \frac{y}{x} = x^2$ with $y(1) = 1$

**Solution**:

$P = \frac{1}{x}$, $Q = x^2$

$IF = e^{\int \frac{1}{x}dx} = e^{\ln|x|} = x$ (taking $x > 0$)

Multiply by IF:

$$x\frac{dy}{dx} + y = x^3$$

$$\frac{d}{dx}(xy) = x^3$$

Integrate:

$$xy = \frac{x^4}{4} + C$$

$$y = \frac{x^3}{4} + \frac{C}{x}$$

Using $y(1) = 1$:

$$1 = \frac{1}{4} + C \Rightarrow C = \frac{3}{4}$$

$$\boxed{y = \frac{x^3}{4} + \frac{3}{4x}}$$

---

### Example 4: Requires Rearrangement (JEE Advanced)

**Solve**: $x\frac{dy}{dx} - y = x^2\sin x$

**Solution**:

**Step 1**: Convert to standard form:

$$\frac{dy}{dx} - \frac{y}{x} = x\sin x$$

Rewrite with $+$ sign:

$$\frac{dy}{dx} + \left(-\frac{1}{x}\right)y = x\sin x$$

$P = -\frac{1}{x}$, $Q = x\sin x$

$IF = e^{\int -\frac{1}{x}dx} = e^{-\ln|x|} = \frac{1}{x}$

Multiply by IF:

$$\frac{1}{x}\frac{dy}{dx} - \frac{y}{x^2} = \sin x$$

$$\frac{d}{dx}\left(\frac{y}{x}\right) = \sin x$$

Integrate:

$$\frac{y}{x} = -\cos x + C$$

$$\boxed{y = -x\cos x + Cx}$$

---

### Example 5: Trigonometric Coefficients (JEE Advanced)

**Solve**: $\cos^2 x \frac{dy}{dx} + y = \tan x$

**Solution**:

Convert to standard form:

$$\frac{dy}{dx} + \frac{y}{\cos^2 x} = \frac{\tan x}{\cos^2 x}$$

$$\frac{dy}{dx} + y\sec^2 x = \tan x \sec^2 x$$

$P = \sec^2 x$, $Q = \tan x \sec^2 x$

$IF = e^{\int \sec^2 x \, dx} = e^{\tan x}$

Multiply by IF:

$$e^{\tan x}\frac{dy}{dx} + y e^{\tan x}\sec^2 x = \tan x \sec^2 x \cdot e^{\tan x}$$

$$\frac{d}{dx}(y e^{\tan x}) = \tan x \sec^2 x \cdot e^{\tan x}$$

For RHS, let $u = \tan x$, then $du = \sec^2 x \, dx$:

$$\int \tan x \sec^2 x \cdot e^{\tan x} dx = \int u e^u du$$

Using integration by parts: $\int ue^u du = ue^u - e^u + C = e^u(u - 1) + C$

So:

$$y e^{\tan x} = e^{\tan x}(\tan x - 1) + C$$

$$\boxed{y = \tan x - 1 + Ce^{-\tan x}}$$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Solve $\frac{dy}{dx} + 2y = 4$.

<details><summary>Solution</summary><p>$P = 2$, $Q = 4$</p><p>$IF = e^{\int 2 \, dx} = e^{2x}$</p><p>$y \cdot e^{2x} = \int 4e^{2x} dx = 2e^{2x} + C$</p><p>$y = 2 + Ce^{-2x}$</p></details>

**Problem 1.2**: Solve $\frac{dy}{dx} - y = 1$.

<details><summary>Solution</summary><p>$\frac{dy}{dx} + (-1)y = 1$</p><p>$P = -1$, $Q = 1$</p><p>$IF = e^{-x}$</p><p>$y \cdot e^{-x} = \int e^{-x} dx = -e^{-x} + C$</p><p>$y = -1 + Ce^x$</p></details>

**Problem 1.3**: Solve $\frac{dy}{dx} + \frac{y}{x} = 1$ where $x > 0$.

<details><summary>Solution</summary><p>$P = \frac{1}{x}$, $Q = 1$</p><p>$IF = e^{\ln x} = x$</p><p>$y \cdot x = \int x \, dx = \frac{x^2}{2} + C$</p><p>$y = \frac{x}{2} + \frac{C}{x}$</p></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Solve $\frac{dy}{dx} + y\cot x = 2\cos x$ with $y\left(\frac{\pi}{2}\right) = 0$.

<details><summary>Solution</summary><p>$P = \cot x$, $Q = 2\cos x$</p><p>$IF = e^{\int \cot x \, dx} = e^{\ln|\sin x|} = \sin x$</p><p>$y\sin x = \int 2\cos x \sin x \, dx = \int \sin 2x \, dx = -\frac{\cos 2x}{2} + C$</p><p>Using $y(\pi/2) = 0$:
$0 = -\frac{\cos \pi}{2} + C = \frac{1}{2} + C$, so $C = -\frac{1}{2}$</p><p>$y\sin x = -\frac{\cos 2x}{2} - \frac{1}{2}$</p><p>$y = -\frac{\cos 2x + 1}{2\sin x} = -\frac{2\cos^2 x}{2\sin x} = -\frac{\cos^2 x}{\sin x}$</p></details>

**Problem 2.2**: Solve $(1 + x^2)\frac{dy}{dx} + 2xy = \frac{1}{1 + x^2}$.

<details><summary>Solution</summary><p>$\frac{dy}{dx} + \frac{2x}{1 + x^2}y = \frac{1}{(1 + x^2)^2}$</p><p>$P = \frac{2x}{1 + x^2}$, $Q = \frac{1}{(1 + x^2)^2}$</p><p>$IF = e^{\int \frac{2x}{1+x^2}dx} = e^{\ln(1+x^2)} = 1 + x^2$</p><p>$y(1 + x^2) = \int \frac{1 + x^2}{(1 + x^2)^2} dx = \int \frac{1}{1 + x^2} dx = \tan^{-1}x + C$</p><p>$y = \frac{\tan^{-1}x + C}{1 + x^2}$</p></details>

**Problem 2.3**: Solve $x\frac{dy}{dx} + 2y = x^2\log x$.

<details><summary>Solution</summary><p>$\frac{dy}{dx} + \frac{2}{x}y = x\log x$</p><p>$P = \frac{2}{x}$, $Q = x\log x$</p><p>$IF = e^{\int \frac{2}{x}dx} = e^{2\ln x} = x^2$</p><p>$yx^2 = \int x^3\log x \, dx$</p><p>Using integration by parts:
$\int x^3\log x \, dx = \frac{x^4\log x}{4} - \int \frac{x^4}{4} \cdot \frac{1}{x} dx = \frac{x^4\log x}{4} - \frac{x^4}{16} + C$</p><p>$y = \frac{x^2\log x}{4} - \frac{x^2}{16} + \frac{C}{x^2}$</p></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Solve $\frac{dy}{dx} = \frac{y\log y - y}{x}$.

<details><summary>Solution</summary><p>Rewrite: $\frac{dy}{dx} = \frac{y(\log y - 1)}{x}$</p><p>This is NOT linear in $y$! It’s linear in $x$ as a function of $y$.</p><p>Write: $\frac{dx}{dy} = \frac{x}{y(\log y - 1)}$</p><p>$\frac{dx}{dy} - \frac{x}{y(\log y - 1)} = 0$</p><p>Actually, better approach:
$\frac{dy}{dx} - \frac{y}{x} = -\frac{y\log y}{x}$</p><p>This is Bernoulli type. Let’s use different approach.</p><p>$x\frac{dy}{dx} = y\log y - y$</p><p>$x\frac{dy}{dx} - y\log y + y = 0$</p><p>$\frac{1}{y\log y - y}\frac{dy}{dx} = \frac{1}{x}$</p><p>Actually: $\frac{dx}{dy} = \frac{x}{y\log y - y}$</p><p>$\frac{dx}{dy} - \frac{x}{y(\log y - 1)} = 0$</p><p>Linear in $x$:
$\frac{dx}{dy} + \left(-\frac{1}{y(\log y - 1)}\right)x = 0$</p><p>$P = -\frac{1}{y(\log y - 1)}$</p><p>$IF = e^{\int -\frac{1}{y(\log y-1)}dy}$</p><p>Let $u = \log y - 1$, $du = \frac{dy}{y}$:</p><p>$\int -\frac{1}{y(\log y-1)}dy = -\int \frac{du}{u} = -\ln|u| = -\ln|\log y - 1|$</p><p>$IF = e^{-\ln|\log y - 1|} = \frac{1}{\log y - 1}$</p><p>$x \cdot \frac{1}{\log y - 1} = C$</p><p>$x = C(\log y - 1)$</p></details>

**Problem 3.2**: Solve $\frac{dy}{dx} + \frac{y}{x\log x} = \frac{1}{x}$.

<details><summary>Solution</summary><p>$P = \frac{1}{x\log x}$, $Q = \frac{1}{x}$</p><p>$IF = e^{\int \frac{1}{x\log x}dx}$</p><p>Let $u = \log x$, $du = \frac{dx}{x}$:</p><p>$\int \frac{1}{x\log x}dx = \int \frac{du}{u} = \ln|u| = \ln|\log x|$</p><p>$IF = e^{\ln|\log x|} = \log x$ (assuming $x &gt; 1$)</p><p>$y\log x = \int \frac{\log x}{x} dx$</p><p>Let $v = \log x$, $dv = \frac{dx}{x}$:</p><p>$\int \frac{\log x}{x}dx = \int v \, dv = \frac{v^2}{2} = \frac{(\log x)^2}{2} + C$</p><p>$y = \frac{\log x}{2} + \frac{C}{\log x}$</p></details>

**Problem 3.3**: A curve passes through $(1, 1)$ and at any point $(x, y)$ on it, the slope of tangent is $\frac{y}{x} + \sec\left(\frac{y}{x}\right)$. Find the curve.

<details><summary>Solution</summary><p>$\frac{dy}{dx} = \frac{y}{x} + \sec\left(\frac{y}{x}\right)$</p><p>This is homogeneous! Not linear.</p><p>Use $y = vx$:
$v + x\frac{dv}{dx} = v + \sec v$</p><p>$x\frac{dv}{dx} = \sec v$</p><p>$\cos v \, dv = \frac{dx}{x}$</p><p>$\sin v = \ln|x| + C$</p><p>Using $(1, 1)$: $\sin(1) = 0 + C$, so $C = \sin 1$</p><p>$\sin\left(\frac{y}{x}\right) = \ln|x| + \sin 1$</p></details>

---

## When to Use Linear DE Method

Use this method when:

- DE can be written as $\frac{dy}{dx} + Py = Q$
- $y$ and $\frac{dy}{dx}$ appear to first power only
- No products of $y$ and derivatives
- $P$ and $Q$ are functions of $x$ only

---

## Extensions: Bernoulli and Exact Equations

### Bernoulli’s Equation

$$\boxed{\frac{dy}{dx} + Py = Qy^n}$$

This is **not linear** (because of $y^n$), but it reduces to linear form.

**Substitute**: $v = y^{1-n}$, so that $\frac{dv}{dx} = (1-n)y^{-n}\frac{dy}{dx}$

Dividing the equation by $y^n$ and substituting gives the linear equation:

$$\frac{dv}{dx} + (1-n)Pv = (1-n)Q$$

Solve it with the integrating factor method above, then substitute back $v = y^{1-n}$.

### Exact Equations

An equation of the form $M\,dx + N\,dy = 0$ is **exact** if:

$$\boxed{\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}}$$

In that case it is the total differential of some function $F(x, y)$, and the solution is $F(x, y) = C$.

---

## Comparison with Other Methods

| Method | When to Use | Form |
| --- | --- | --- |
| **Variable Separable** | Can separate $x$ and $y$ | $\frac{dy}{dx} = f(x)g(y)$ |
| **Homogeneous** | Function of $\frac{y}{x}$ | $\frac{dy}{dx} = F(y/x)$ |
| **Linear** | First power of $y$ and $y'$ | $\frac{dy}{dx} + Py = Q$ |
| **Bernoulli** | Linear except for $y^n$ on RHS | $\frac{dy}{dx} + Py = Qy^n$ |
| **Exact** | $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ | $M\,dx + N\,dy = 0$ |

---

## Cross-References

- **Variable Separable**: Alternative method → [Variable Separable](../variable-separable/index.md)
- **Homogeneous DE**: Another first-order method → [Homogeneous DE](../homogeneous-de/index.md)
- **Order and Degree**: Classification of DEs → [Order and Degree](../order-degree/index.md)
- **Formation of DE**: Creating DEs from equations → [Formation of DE](../formation-de/index.md)
- **Applications**: Real-world uses → [Applications of DE](../applications-de/index.md)
- **Integration**: Required for solving → [Indefinite Integrals](../../integral-calculus/indefinite-integrals/index.md)
- **Integration Techniques**: For complex integrals → [Integration Techniques](../../integral-calculus/integration-techniques/index.md)
- **Inverse Trigonometry**: For inverse trig solutions → [Inverse Trig](../../trigonometry/inverse-trig/index.md)

---

## Quick Revision Points

1. Standard form: $\frac{dy}{dx} + Py = Q$
2. IF = $e^{\int P \, dx}$ (NO constant here!)
3. Solution: $y \cdot IF = \int Q \cdot IF \, dx + C$
4. LHS becomes $\frac{d}{dx}(y \cdot IF)$
5. Linear means first power of $y$ and $y'$ only
6. Remember to multiply $Q$ by IF before integrating

---

*Last updated: November 18, 2025*

From TestGuru · our mock-test platform

## You've read Linear Differential Equations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=differential-equations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fdifferential-equations%2Flinear-de%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/differential-equations/linear-de/",this.page.identifier="/mathematics/differential-equations/linear-de/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421671738466"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421671738466")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/differential-equations/linear-de/](https://jeenotes.in/mathematics/differential-equations/linear-de/) · raw HTML: `offline/mathematics/differential-equations/linear-de/index.html`_
