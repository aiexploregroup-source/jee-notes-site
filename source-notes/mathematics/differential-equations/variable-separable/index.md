---
title: "Variable Separable Method"
source: "https://jeenotes.in/mathematics/differential-equations/variable-separable/"
description: "Master the variable separable method for solving first-order differential equations"
updated: "2025-12-26"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 8"
html: "../../../../offline/mathematics/differential-equations/variable-separable/index.html"
extracted: "2026-11-23"
---

> Master the variable separable method for solving first-order differential equations

# Variable Separable Method

## Introduction

The **Variable Separable Method** is one of the most fundamental techniques for solving first-order differential equations. It works when variables can be **separated** to opposite sides of the equation.

---

## Definition

> A differential equation is called **variable separable** if it can be written in the form:
>
> $$\boxed{f(x)dx = g(y)dy}$$
>
> or equivalently:
>
> $$\boxed{\frac{dy}{dx} = \frac{f(x)}{g(y)}}$$

where $f(x)$ is a function of $x$ only and $g(y)$ is a function of $y$ only.

---

## Standard Form

A first-order DE is variable separable if it can be written as:

> $$\boxed{\frac{dy}{dx} = h(x) \cdot k(y)}$$

where $h(x)$ depends only on $x$ and $k(y)$ depends only on $y$.

**Separating variables**:

$$\frac{dy}{k(y)} = h(x)dx$$

---

## Interactive Demo: Solve Variable Separable DEs

### Variable Separable DE Solver

Practice identifying variable separable equations

**Example Problem:**  
Solve: dy/dx = xy  
  
**Step 1:** Separate variables: dy/y = x dx  
**Step 2:** Integrate: ∫(1/y)dy = ∫x dx  
**Step 3:** Result: ln|y| = x²/2 + C  
**Step 4:** Solve for y: y = Ae^(x²/2), where A = ±e^C

**Try These:**  
1. dy/dx = 2xy → Separate: dy/y = 2x dx  
2. dy/dx = (1+y²)/x → Separate: dy/(1+y²) = dx/x  
3. dy/dx = e^(x+y) → Separate: e^(-y) dy = e^x dx

---

## Solution Method

### Step-by-Step Procedure

**Step 1**: Write the DE in the form $\frac{dy}{dx} = f(x, y)$

**Step 2**: Separate variables: Collect all $y$ terms with $dy$ and all $x$ terms with $dx$

**Step 3**: Integrate both sides:

$$\int \frac{dy}{k(y)} = \int h(x)dx$$

**Step 4**: Add constant of integration $C$ (only on one side)

**Step 5**: Solve for $y$ if possible (or leave in implicit form)

---

## Standard Forms and Solutions

### Form 1: Direct Separable

$$\boxed{\frac{dy}{dx} = f(x) \cdot g(y)}$$

**Solution**: $\int \frac{dy}{g(y)} = \int f(x)dx + C$

---

### Form 2: Product Form

$$\boxed{\frac{dy}{dx} = \frac{f(x)}{g(y)}}$$

**Solution**: $\int g(y)dy = \int f(x)dx + C$

---

### Form 3: With Coefficients

$$\boxed{f_1(x)g_1(y)dx + f_2(x)g_2(y)dy = 0}$$

**Separable if**: Can be written as $\frac{f_1(x)}{f_2(x)}dx = -\frac{g_2(y)}{g_1(y)}dy$

### Interactive Demo: Visualize Variable Separable Solutions

Plot solution curves for different variable separable differential equations.

---

## Memory Tricks

### 🎯 Separation Rule

**“X with dx, Y with dy”**:

- All $x$ terms go with $dx$
- All $y$ terms go with $dy$
- Move across equal sign to separate

### 🎯 Integration Constant

**“One C is enough”**:

- Add $C$ on only ONE side (usually right)
- Don’t write $C_1$ and $C_2$ (they combine)

### 🎯 Recognition Pattern

**“If you can say ’times’ between x-part and y-part, it’s separable”**:

Example: $\frac{dy}{dx} = x^2 \times y^3$ → Separable ✓

Counter: $\frac{dy}{dx} = x + y$ → NOT separable (it’s addition) ✗

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting to Separate Completely

**Wrong**: $\frac{dy}{dx} = xy$ → $\int dy = \int xy dx$ ✗

**Correct**: $\frac{dy}{y} = x dx$ → $\int \frac{dy}{y} = \int x dx$ ✓

### ❌ Mistake 2: Adding C on Both Sides

**Wrong**: $\int \frac{dy}{y} = \int x dx$ gives $\ln|y| + C_1 = \frac{x^2}{2} + C_2$ ✗

**Correct**: $\ln|y| = \frac{x^2}{2} + C$ (where $C = C_2 - C_1$) ✓

### ❌ Mistake 3: Wrong Variable Movement

**Wrong**: $\frac{dy}{dx} = \frac{x}{y}$ → $y dy = \frac{1}{x} dx$ ✗

**Correct**: $y dy = x dx$ ✓

### ❌ Mistake 4: Treating Non-Separable as Separable

**Wrong**: $\frac{dy}{dx} = x + y$ is separable ✗

**Correct**: $x + y$ cannot be factored as $f(x) \cdot g(y)$ ✓
(This requires linear DE method)

---

## Solved Examples

### Example 1: Basic Separation (JEE Main)

**Solve**: $\frac{dy}{dx} = xy$

**Solution**:
Separate variables:

$$\frac{dy}{y} = x dx$$

Integrate both sides:

$$\int \frac{dy}{y} = \int x dx$$

$$\ln|y| = \frac{x^2}{2} + C_1$$

$$|y| = e^{x^2/2 + C_1} = e^{C_1} \cdot e^{x^2/2}$$

Let $C = \pm e^{C_1}$:

$$\boxed{y = Ce^{x^2/2}}$$

---

### Example 2: With Initial Condition (JEE Main)

**Solve**: $\frac{dy}{dx} = \frac{1 + y^2}{1 + x^2}$ with $y(0) = 1$

**Solution**:
Separate variables:

$$\frac{dy}{1 + y^2} = \frac{dx}{1 + x^2}$$

Integrate:

$$\int \frac{dy}{1 + y^2} = \int \frac{dx}{1 + x^2}$$

$$\tan^{-1}y = \tan^{-1}x + C$$

Using initial condition $y(0) = 1$:

$$\tan^{-1}(1) = \tan^{-1}(0) + C$$

$$\frac{\pi}{4} = 0 + C$$

$$C = \frac{\pi}{4}$$

**Solution**: $\boxed{\tan^{-1}y = \tan^{-1}x + \frac{\pi}{4}}$

or $\boxed{y = \tan\left(\tan^{-1}x + \frac{\pi}{4}\right)}$

Using addition formula: $y = \frac{x + 1}{1 - x}$ (for $|x| < 1$)

---

### Example 3: Exponential Form (JEE Main)

**Solve**: $\frac{dy}{dx} = e^{x+y}$

**Solution**:
Rewrite: $\frac{dy}{dx} = e^x \cdot e^y$

Separate:

$$\frac{dy}{e^y} = e^x dx$$

$$e^{-y} dy = e^x dx$$

Integrate:

$$\int e^{-y} dy = \int e^x dx$$

$$-e^{-y} = e^x + C$$

$$e^{-y} = -e^x - C$$

$$-y = \ln(-e^x - C)$$

$$\boxed{y = -\ln(-e^x - C)}$$

or in different form: $\boxed{e^x + e^{-y} + C = 0}$

---

### Example 4: Trigonometric (JEE Advanced)

**Solve**: $\cos x \cos y dy = \sin x \sin y dx$

**Solution**:
Separate:

$$\frac{\cos y}{\sin y} dy = \frac{\sin x}{\cos x} dx$$

$$\cot y dy = \tan x dx$$

Integrate:

$$\int \cot y dy = \int \tan x dx$$

$$\ln|\sin y| = \ln|\sec x| + C_1$$

$$\ln|\sin y| = -\ln|\cos x| + C_1$$

$$\ln|\sin y| + \ln|\cos x| = C_1$$

$$\ln|\sin y \cos x| = C_1$$

$$\boxed{\sin y \cos x = C}$$

where $C = \pm e^{C_1}$

---

### Example 5: Rational Function (JEE Advanced)

**Solve**: $(1 + x^2)\frac{dy}{dx} + (1 + y^2) = 0$

**Solution**:
Rearrange:

$$(1 + x^2)\frac{dy}{dx} = -(1 + y^2)$$

$$\frac{dy}{1 + y^2} = -\frac{dx}{1 + x^2}$$

Integrate:

$$\int \frac{dy}{1 + y^2} = -\int \frac{dx}{1 + x^2}$$

$$\tan^{-1}y = -\tan^{-1}x + C$$

$$\boxed{\tan^{-1}y + \tan^{-1}x = C}$$

or

$$\boxed{y = \tan(C - \tan^{-1}x)}$$

---

### Example 6: With Product (JEE Advanced)

**Solve**: $xy\frac{dy}{dx} = 1 + x + y + xy$

**Solution**:
Factor RHS:

$$xy\frac{dy}{dx} = (1 + x) + y(1 + x) = (1 + x)(1 + y)$$

Separate:

$$\frac{y dy}{1 + y} = \frac{(1 + x)dx}{x}$$

$$\frac{y dy}{1 + y} = \left(1 + \frac{1}{x}\right)dx$$

For LHS, write: $\frac{y}{1 + y} = \frac{y + 1 - 1}{1 + y} = 1 - \frac{1}{1 + y}$

$$\int \left(1 - \frac{1}{1 + y}\right)dy = \int \left(1 + \frac{1}{x}\right)dx$$

$$y - \ln|1 + y| = x + \ln|x| + C$$

$$\boxed{y - x - \ln|1 + y| - \ln|x| = C}$$

or

$$\boxed{y - x = C + \ln|x(1 + y)|}$$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Solve $\frac{dy}{dx} = y$.

<details><summary>Solution</summary><p>$\frac{dy}{y} = dx$</p><p>$\int \frac{dy}{y} = \int dx$</p><p>$\ln|y| = x + C$</p><p>$y = Ae^x$ where $A = \pm e^C$</p></details>

**Problem 1.2**: Solve $\frac{dy}{dx} = x^2y$.

<details><summary>Solution</summary><p>$\frac{dy}{y} = x^2 dx$</p><p>$\int \frac{dy}{y} = \int x^2 dx$</p><p>$\ln|y| = \frac{x^3}{3} + C$</p><p>$y = Ae^{x^3/3}$</p></details>

**Problem 1.3**: Solve $\frac{dy}{dx} = \frac{x}{y}$ with $y(0) = 2$.

<details><summary>Solution</summary><p>$y dy = x dx$</p><p>$\int y dy = \int x dx$</p><p>$\frac{y^2}{2} = \frac{x^2}{2} + C$</p><p>$y^2 = x^2 + 2C$</p><p>Using $y(0) = 2$: $4 = 0 + 2C$, so $C = 2$</p><p>$y^2 = x^2 + 4$</p><p>$y = \sqrt{x^2 + 4}$ (taking positive root since $y(0) = 2 &gt; 0$)</p></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Solve $\frac{dy}{dx} = e^{x-y}$.

<details><summary>Solution</summary><p>$\frac{dy}{dx} = \frac{e^x}{e^y}$</p><p>$e^y dy = e^x dx$</p><p>$\int e^y dy = \int e^x dx$</p><p>$e^y = e^x + C$</p><p>$y = \ln(e^x + C)$</p></details>

**Problem 2.2**: Solve $(1 + x)\frac{dy}{dx} - xy = 0$ with $y(2) = 3$.

<details><summary>Solution</summary><p>$(1 + x)\frac{dy}{dx} = xy$</p><p>$\frac{dy}{y} = \frac{x dx}{1 + x}$</p><p>For RHS: $\frac{x}{1 + x} = \frac{x + 1 - 1}{1 + x} = 1 - \frac{1}{1 + x}$</p><p>$\int \frac{dy}{y} = \int \left(1 - \frac{1}{1 + x}\right)dx$</p><p>$\ln|y| = x - \ln|1 + x| + C$</p><p>Using $y(2) = 3$:
$\ln 3 = 2 - \ln 3 + C$</p><p>$C = 2\ln 3 - 2$</p><p>$\ln y = x - \ln(1 + x) + 2\ln 3 - 2$</p><p>$y = \frac{9e^{x-2}}{1 + x}$</p></details>

**Problem 2.3**: Solve $\sin x \frac{dy}{dx} + y = 0$ with $y\left(\frac{\pi}{2}\right) = 1$.

<details><summary>Solution</summary><p>$\sin x \frac{dy}{dx} = -y$</p><p>$\frac{dy}{y} = -\frac{dx}{\sin x}$</p><p>$\int \frac{dy}{y} = -\int \csc x dx$</p><p>$\ln|y| = -(-\ln|\csc x + \cot x|) + C$</p><p>$\ln|y| = \ln|\csc x + \cot x| + C$</p><p>Using $y(\pi/2) = 1$:
$\ln 1 = \ln|1 + 0| + C$, so $C = 0$</p><p>$\ln y = \ln(\csc x + \cot x)$</p><p>$y = \csc x + \cot x$</p></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Solve $\frac{dy}{dx} = \frac{y(y^2 - 1)}{x(x^2 - 1)}$.

<details><summary>Solution</summary><p>$\frac{dy}{y(y^2 - 1)} = \frac{dx}{x(x^2 - 1)}$</p><p>Use partial fractions on both sides:</p><p>$\frac{1}{y(y^2-1)} = \frac{1}{y(y-1)(y+1)}$</p><p>Using partial fractions: $\frac{A}{y} + \frac{B}{y-1} + \frac{C}{y+1}$</p><p>$1 = A(y-1)(y+1) + By(y+1) + Cy(y-1)$</p><p>Solving: $A = -1, B = 1/2, C = 1/2$</p><p>Similarly for $x$ side.</p><p>$\int \left(-\frac{1}{y} + \frac{1/2}{y-1} + \frac{1/2}{y+1}\right)dy = \int \left(-\frac{1}{x} + \frac{1/2}{x-1} + \frac{1/2}{x+1}\right)dx$</p><p>$-\ln|y| + \frac{1}{2}\ln|y-1| + \frac{1}{2}\ln|y+1| = -\ln|x| + \frac{1}{2}\ln|x-1| + \frac{1}{2}\ln|x+1| + C$</p><p>$\ln\left|\frac{(y-1)(y+1)}{y^2}\right|^{1/2} = \ln\left|\frac{(x-1)(x+1)}{x^2}\right|^{1/2} + C$</p><p>$\frac{y^2-1}{y^2} = K \cdot \frac{x^2-1}{x^2}$ where $K = e^{2C}$</p></details>

**Problem 3.2**: Solve $\frac{dy}{dx} + \frac{y}{x} = \frac{y^2}{x^2}$.

<details><summary>Solution</summary><p>This looks like Bernoulli, but let’s try separation:</p><p>$\frac{dy}{dx} = \frac{y^2}{x^2} - \frac{y}{x}$</p><p>$\frac{dy}{dx} = \frac{y^2 - xy}{x^2}$</p><p>$\frac{dy}{y^2 - xy} = \frac{dx}{x^2}$</p><p>Factor LHS: $\frac{dy}{y(y - x)} = \frac{dx}{x^2}$</p><p>This is NOT separable as written. This requires substitution method (Bernoulli equation).</p><p>Actually, rewrite: $\frac{dy}{dx} = \frac{y}{x}\left(\frac{y}{x} - 1\right)$</p><p>Let $v = y/x$, so $y = vx$ and $\frac{dy}{dx} = v + x\frac{dv}{dx}$</p><p>$v + x\frac{dv}{dx} = v(v - 1)$</p><p>$x\frac{dv}{dx} = v^2 - 2v$</p><p>$\frac{dv}{v(v-2)} = \frac{dx}{x}$</p><p>Now it’s separable!</p><p>$\frac{1}{v(v-2)} = \frac{A}{v} + \frac{B}{v-2}$</p><p>$1 = A(v-2) + Bv$</p><p>$A = -1/2, B = 1/2$</p><p>$\int \left(-\frac{1/2}{v} + \frac{1/2}{v-2}\right)dv = \int \frac{dx}{x}$</p><p>$-\frac{1}{2}\ln|v| + \frac{1}{2}\ln|v-2| = \ln|x| + C$</p><p>$\ln\left|\frac{v-2}{v}\right|^{1/2} = \ln|x| + C$</p><p>$\frac{v-2}{v} = Kx^2$</p><p>$\frac{y/x - 2}{y/x} = Kx^2$</p><p>$\frac{y - 2x}{y} = Kx^2$</p><p>$y - 2x = Kx^2y$</p><p>$y(1 - Kx^2) = 2x$</p><p>$y = \frac{2x}{1 - Kx^2}$</p></details>

**Problem 3.3**: Find the curve for which the slope at any point equals the ratio of ordinate to abscissa, and which passes through $(1, 2)$.

<details><summary>Solution</summary><p>Slope = $\frac{dy}{dx}$, ordinate = $y$, abscissa = $x$</p><p>$\frac{dy}{dx} = \frac{y}{x}$</p><p>Separate: $\frac{dy}{y} = \frac{dx}{x}$</p><p>$\int \frac{dy}{y} = \int \frac{dx}{x}$</p><p>$\ln|y| = \ln|x| + C$</p><p>$\ln|y| - \ln|x| = C$</p><p>$\ln\left|\frac{y}{x}\right| = C$</p><p>$\frac{y}{x} = A$ where $A = e^C$</p><p>Using $(1, 2)$: $\frac{2}{1} = A$, so $A = 2$</p><p><strong>Curve</strong>: $y = 2x$</p></details>

---

## Recognition of Variable Separable DEs

A DE $\frac{dy}{dx} = f(x, y)$ is variable separable if:

1. **Direct Check**: Can be written as $\frac{dy}{dx} = g(x) \cdot h(y)$
2. **Factor Test**: RHS can be factored into product of $x$-function and $y$-function
3. **Examples**:

   - $\frac{dy}{dx} = xy$ ✓ (product form)
   - $\frac{dy}{dx} = x^2y^3$ ✓ (product form)
   - $\frac{dy}{dx} = e^{x+y} = e^x \cdot e^y$ ✓ (can be factored)
   - $\frac{dy}{dx} = x + y$ ✗ (sum, not product)
   - $\frac{dy}{dx} = \sin(xy)$ ✗ (cannot separate)

---

## Important Integration Formulas

| Function | Integral |
| --- | --- |
| $\int \frac{dx}{x}$ | $\ln\|x\| + C$ |
| $\int \frac{dx}{x^2 + a^2}$ | $\frac{1}{a}\tan^{-1}\left(\frac{x}{a}\right) + C$ |
| $\int \frac{dx}{\sqrt{a^2 - x^2}}$ | $\sin^{-1}\left(\frac{x}{a}\right) + C$ |
| $\int e^{ax}dx$ | $\frac{1}{a}e^{ax} + C$ |
| $\int \tan x dx$ | $\ln\|\sec x\| + C$ |
| $\int \cot x dx$ | $\ln\|\sin x\| + C$ |
| $\int \sec x dx$ | $\ln\|\sec x + \tan x\| + C$ |
| $\int \csc x dx$ | $\ln\|\csc x - \cot x\| + C$ |

---

## Cross-References

- **Integration Techniques**: Required for solving → [Indefinite Integrals](../../integral-calculus/indefinite-integrals/index.md)
- **Advanced Integration**: For complex integrals → [Integration Techniques](../../integral-calculus/integration-techniques/index.md)
- **Trigonometric Integration**: For trig-based DEs → [Trigonometric Integration](../../integral-calculus/trigonometric-integration/index.md)
- **Homogeneous DEs**: Another solution method → [Homogeneous DE](../homogeneous-de/index.md)
- **Linear DEs**: Alternative method → [Linear DE](../linear-de/index.md)
- **Order and Degree**: Classification → [Order and Degree](../order-degree/index.md)
- **Inverse Trig Functions**: For inverse trig integrals → [Inverse Trigonometry](../../trigonometry/inverse-trig/index.md)

---

## Quick Revision Checklist

- Recognize separable form: $\frac{dy}{dx} = g(x) \cdot h(y)$
- Separate variables correctly: $X$ with $dx$, $Y$ with $dy$
- Integrate both sides
- Add constant $C$ on one side only
- Apply initial conditions if given
- Verify solution by substitution

---

*Last updated: November 12, 2025*

From TestGuru · our mock-test platform

## You've read Variable Separable Method.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=differential-equations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fdifferential-equations%2Fvariable-separable%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/differential-equations/variable-separable/",this.page.identifier="/mathematics/differential-equations/variable-separable/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421678644503"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421678644503")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/differential-equations/variable-separable/](https://jeenotes.in/mathematics/differential-equations/variable-separable/) · raw HTML: `offline/mathematics/differential-equations/variable-separable/index.html`_
