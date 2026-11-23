---
title: "Order and Degree of Differential Equations"
source: "https://jeenotes.in/mathematics/differential-equations/order-degree/"
description: "Complete guide to understanding order and degree of differential equations for JEE"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 8"
html: "../../../../offline/mathematics/differential-equations/order-degree/index.html"
extracted: "2026-11-23"
---

> Complete guide to understanding order and degree of differential equations for JEE

# Order and Degree of Differential Equations

## Introduction

A **Differential Equation (DE)** is an equation involving derivatives of a function. Understanding the **order** and **degree** of a DE is fundamental for classification and solving techniques.

---

## Differential Equation Definition

> A **differential equation** is an equation containing derivatives of one or more dependent variables with respect to one or more independent variables.

**Examples**:

1. $\frac{dy}{dx} + y = x$ (First-order DE)
2. $\frac{d^2y}{dx^2} + 4\frac{dy}{dx} + 3y = 0$ (Second-order DE)
3. $\left(\frac{dy}{dx}\right)^3 + x\frac{dy}{dx} - y = 0$ (First-order, third-degree DE)

---

## Order of Differential Equation

> **Order**: The order of a differential equation is the **highest derivative** present in the equation.

$$\boxed{\text{Order} = \text{Highest order derivative in the DE}}$$

### Examples

| Differential Equation | Order | Reason |
| --- | --- | --- |
| $\frac{dy}{dx} = x + y$ | 1 | Highest derivative: $\frac{dy}{dx}$ |
| $\frac{d^2y}{dx^2} + 3\frac{dy}{dx} = 0$ | 2 | Highest derivative: $\frac{d^2y}{dx^2}$ |
| $\frac{d^3y}{dx^3} + x^2\frac{dy}{dx} = \sin x$ | 3 | Highest derivative: $\frac{d^3y}{dx^3}$ |
| $y'' + 5y' + 6y = 0$ | 2 | $y''$ is second derivative |
| $\left(\frac{d^2y}{dx^2}\right)^4 + \frac{dy}{dx} = 0$ | 2 | Highest derivative: $\frac{d^2y}{dx^2}$ (power doesn’t matter) |

---

## Degree of Differential Equation

> **Degree**: The degree of a differential equation is the **power (exponent)** of the **highest order derivative**, when the equation is a polynomial in derivatives.

$$\boxed{\text{Degree} = \text{Power of highest order derivative}}$$

### Important Conditions

The degree is defined **only when**:

1. The DE is a **polynomial** in all derivatives
2. All derivatives are **free from radicals and fractions**

If the DE contains derivatives in radicals, exponents, or transcendental functions, **degree is not defined**.

---

### Examples

| Differential Equation | Order | Degree | Explanation |
| --- | --- | --- | --- |
| $\frac{dy}{dx} + y = x$ | 1 | 1 | Power of $\frac{dy}{dx}$ is 1 |
| $\left(\frac{dy}{dx}\right)^3 + x\frac{dy}{dx} = y$ | 1 | 3 | Power of $\frac{dy}{dx}$ is 3 |
| $\frac{d^2y}{dx^2} + 5\frac{dy}{dx} + 6y = 0$ | 2 | 1 | Power of $\frac{d^2y}{dx^2}$ is 1 |
| $\left(\frac{d^2y}{dx^2}\right)^2 + \frac{dy}{dx} = 0$ | 2 | 2 | Power of $\frac{d^2y}{dx^2}$ is 2 |
| $\sqrt{\frac{dy}{dx}} = x + y$ | 1 | 2 | After squaring: $\frac{dy}{dx} = (x+y)^2$ |
| $\frac{d^2y}{dx^2} + \sqrt{\frac{dy}{dx}} = 0$ | 2 | Not defined | Contains square root of derivative |
| $\frac{d^2y}{dx^2} + \sin\left(\frac{dy}{dx}\right) = 0$ | 2 | Not defined | Contains transcendental function |
| $e^{dy/dx} = x$ | 1 | Not defined | Derivative in exponent |

---

## General and Particular Solutions

A **solution** of a differential equation is a relation between the variables (free of derivatives) that satisfies the equation.

**General Solution**: Contains as many arbitrary constants as the **order** of the differential equation.

**Particular Solution**: Obtained from the general solution by giving specific values to the arbitrary constants (usually fixed by initial or boundary conditions).

**Example**: For $\frac{d^2y}{dx^2} + y = 0$ (order 2), the general solution $y = A\cos x + B\sin x$ has 2 arbitrary constants; $y = 3\cos x$ is a particular solution.

---

## Steps to Find Order and Degree

### Step 1: Identify the Highest Derivative

Look for the highest order derivative in the equation.

- **Order** = Order of this derivative

### Step 2: Check if DE is Polynomial in Derivatives

- If yes, proceed to Step 3
- If no, degree is **not defined**

### Step 3: Make Derivatives Free from Radicals/Fractions

- Remove square roots by squaring
- Clear fractions if needed
- Ensure all derivatives appear as positive integer powers

### Step 4: Find Power of Highest Order Derivative

- **Degree** = Exponent of highest order derivative

### Interactive Demo: Slope Field Visualization

Explore how differential equations create direction fields. Click anywhere to draw solution curves that follow the slope at each point using Euler’s method.

---

## Memory Tricks

### 🎯 Order Memory

**“Order = Highest Derivative Number”**

- First derivative ($y'$) → Order 1
- Second derivative ($y''$) → Order 2
- Third derivative ($y'''$) → Order 3

**Mnemonic**: “**O**rder comes from **O**rder of derivative”

### 🎯 Degree Memory

**“Degree = Power of Top Derivative”**

- Power of highest order derivative = Degree
- Must be polynomial first!

**Mnemonic**: “**D**egree is the **D**erivative’s power”

### 🎯 When Degree Doesn’t Exist

**“No REFT allowed”**:

- **R**adicals (square roots, cube roots)
- **E**xponents (derivative in power)
- **F**ractions (derivative in denominator)
- **T**ranscendental (sin, cos, log, etc.)

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Confusing Order with Degree

**Wrong**: In $\left(\frac{d^2y}{dx^2}\right)^3 = 0$, order = 3 ✗

**Correct**: Order = 2 (highest derivative is second), Degree = 3 (power of $\frac{d^2y}{dx^2}$) ✓

### ❌ Mistake 2: Finding Degree When Not Polynomial

**Wrong**: In $e^{dy/dx} + y = 0$, degree = 1 ✗

**Correct**: Degree is **not defined** (derivative appears in exponent) ✓

### ❌ Mistake 3: Forgetting to Simplify Before Finding Degree

**Wrong**: In $\sqrt{\frac{d^2y}{dx^2}} + y = 0$, degree not defined ✗

**Correct**: Square both sides: $\frac{d^2y}{dx^2} + 2y\sqrt{\frac{d^2y}{dx^2}} + y^2 = 0$
Still contains radical, so degree **not defined** ✓

Actually, this example shows degree is truly not defined!

### ❌ Mistake 4: Considering Lower Order Derivatives for Degree

**Wrong**: In $\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^5 = 0$, degree = 5 ✗

**Correct**: Degree = 1 (power of **highest order** derivative $\frac{d^2y}{dx^2}$) ✓

---

## Solved Examples

### Example 1: Basic Order and Degree (JEE Main)

**Find the order and degree of: $\frac{d^3y}{dx^3} + 2\left(\frac{d^2y}{dx^2}\right)^2 + \frac{dy}{dx} = 0$**

**Solution**:

- **Highest derivative**: $\frac{d^3y}{dx^3}$ → **Order = 3**
- **Polynomial in derivatives**: Yes ✓
- **Power of $\frac{d^3y}{dx^3}$**: 1 → **Degree = 1**

**Answer**: Order = 3, Degree = 1

---

### Example 2: Degree After Simplification (JEE Main)

**Find order and degree of: $\sqrt{1 + \left(\frac{dy}{dx}\right)^2} = x$**

**Solution**:
Squaring both sides:

$$1 + \left(\frac{dy}{dx}\right)^2 = x^2$$

- **Order**: 1 (highest derivative is $\frac{dy}{dx}$)
- **Degree**: 2 (power of $\frac{dy}{dx}$ after squaring)

**Answer**: Order = 1, Degree = 2

---

### Example 3: Degree Not Defined (JEE Advanced)

**Find order and degree of: $\frac{d^2y}{dx^2} + \sin\left(\frac{dy}{dx}\right) = 0$**

**Solution**:

- **Order**: 2 (highest derivative is $\frac{d^2y}{dx^2}$)
- **Degree**: **Not defined** (contains $\sin$ of derivative, which is transcendental)

**Answer**: Order = 2, Degree = Not defined

---

### Example 4: Complex Expression (JEE Advanced)

**Find order and degree of: $\left[\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^2\right]^{3/2} = 5\frac{d^3y}{dx^3}$**

**Solution**:
Raise both sides to power 2 to remove fractional power:

$$\left[\frac{d^2y}{dx^2} + \left(\frac{dy}{dx}\right)^2\right]^3 = 25\left(\frac{d^3y}{dx^3}\right)^2$$

- **Order**: 3 (highest derivative is $\frac{d^3y}{dx^3}$)
- **Polynomial in derivatives**: Yes (after simplification) ✓
- **Power of $\frac{d^3y}{dx^3}$**: 2 → **Degree = 2**

**Answer**: Order = 3, Degree = 2

---

### Example 5: Tricky Case (JEE Advanced)

**Find order and degree of: $\frac{dy}{dx} + \sqrt{\frac{d^2y}{dx^2}} = 0$**

**Solution**:
Try to remove radical:

$$\frac{dy}{dx} = -\sqrt{\frac{d^2y}{dx^2}}$$

Square both sides:

$$\left(\frac{dy}{dx}\right)^2 = \frac{d^2y}{dx^2}$$

- **Order**: 2
- **Degree**: 1 (power of $\frac{d^2y}{dx^2}$ is 1)

**Answer**: Order = 2, Degree = 1

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Find order and degree of $\frac{dy}{dx} = x^2 + y^2$.

<details><summary>Solution</summary><ul><li>Order = 1 (highest derivative: $\frac{dy}{dx}$)</li><li>Degree = 1 (power of $\frac{dy}{dx}$ is 1)</li></ul></details>

**Problem 1.2**: Find order and degree of $\frac{d^4y}{dx^4} + 3y = 0$.

<details><summary>Solution</summary><ul><li>Order = 4 (highest derivative: $\frac{d^4y}{dx^4}$)</li><li>Degree = 1 (power of $\frac{d^4y}{dx^4}$ is 1)</li></ul></details>

**Problem 1.3**: Find order and degree of $\left(\frac{dy}{dx}\right)^4 + y^3 = x^5$.

<details><summary>Solution</summary><ul><li>Order = 1 (highest derivative: $\frac{dy}{dx}$)</li><li>Degree = 4 (power of $\frac{dy}{dx}$ is 4)</li></ul></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Find order and degree of $y'' + (y')^3 + y = 0$.

<details><summary>Solution</summary><ul><li>Order = 2 (highest derivative: $y''$)</li><li>Degree = 1 (power of $y''$ is 1; $(y')^3$ doesn’t matter for degree)</li></ul></details>

**Problem 2.2**: Find order and degree of $\sqrt{\frac{d^3y}{dx^3}} + \frac{d^2y}{dx^2} = 0$.

<details><summary>Solution</summary><p>Square both sides:</p>$$\frac{d^3y}{dx^3} + 2\frac{d^2y}{dx^2}\sqrt{\frac{d^3y}{dx^3}} + \left(\frac{d^2y}{dx^2}\right)^2 = 0$$<p>Still contains radical!</p><p><strong>Order = 3, Degree = Not defined</strong></p></details>

**Problem 2.3**: Find order and degree of $\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{3/4} = \frac{d^2y}{dx^2}$.

<details><summary>Solution</summary><p>Raise to power 4:</p>$$\left[1 + \left(\frac{dy}{dx}\right)^2\right]^3 = \left(\frac{d^2y}{dx^2}\right)^4$$<ul><li>Order = 2</li><li>Degree = 4</li></ul></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Find order and degree of $x\left(\frac{d^2y}{dx^2}\right)^3 + y\left(\frac{dy}{dx}\right)^4 + x^3 = 0$.

<details><summary>Solution</summary><p>Already polynomial in derivatives.</p><ul><li>Order = 2 (highest derivative: $\frac{d^2y}{dx^2}$)</li><li>Degree = 3 (power of $\frac{d^2y}{dx^2}$ is 3)</li></ul></details>

**Problem 3.2**: Find order and degree of $\frac{d^2y}{dx^2} = \left[1 + \left(\frac{dy}{dx}\right)^2\right]^{3/2}$.

<details><summary>Solution</summary><p>Square both sides:</p>$$\left(\frac{d^2y}{dx^2}\right)^2 = \left[1 + \left(\frac{dy}{dx}\right)^2\right]^3$$<ul><li>Order = 2</li><li>Degree = 2</li></ul></details>

**Problem 3.3**: Determine if degree exists for $\frac{dy}{dx} = e^{d^2y/dx^2}$.

<details><summary>Solution</summary><p>Taking logarithm:</p>$$\ln\left(\frac{dy}{dx}\right) = \frac{d^2y}{dx^2}$$<p>Derivative appears in logarithm (transcendental function).</p><p><strong>Order = 2, Degree = Not defined</strong></p></details>

---

## Classification of Differential Equations

### By Order

- **First Order**: $\frac{dy}{dx} = f(x, y)$
- **Second Order**: $\frac{d^2y}{dx^2} = f\left(x, y, \frac{dy}{dx}\right)$
- **$n$-th Order**: Highest derivative is $n$-th order

### By Degree

- **First Degree**: Linear in all derivatives
- **Higher Degree**: Power of highest derivative > 1

### By Linearity

- **Linear**: No products/powers of $y$ and derivatives

  - Example: $\frac{d^2y}{dx^2} + 3\frac{dy}{dx} + 2y = x$
- **Non-linear**: Contains products or powers

  - Example: $\frac{d^2y}{dx^2} + y\frac{dy}{dx} = 0$

---

## Standard Forms

### First Order, First Degree

$$\boxed{\frac{dy}{dx} = f(x, y)}$$

Examples:

- $\frac{dy}{dx} = x + y$
- $\frac{dy}{dx} = \frac{y}{x}$

### Second Order, First Degree

$$\boxed{\frac{d^2y}{dx^2} + P(x)\frac{dy}{dx} + Q(x)y = R(x)}$$

Example: $\frac{d^2y}{dx^2} + 4\frac{dy}{dx} + 3y = e^x$

---

## Quick Identification Table

| Feature | How to Identify |
| --- | --- |
| **Order** | Count apostrophes in $y', y'', y'''$ or look at denominator in $\frac{d^ny}{dx^n}$ |
| **Degree** | Power of highest derivative (if polynomial) |
| **Linear** | No $y \times y'$, no $(y')^2$, etc. |
| **Homogeneous** | All terms have same degree in $y$ and derivatives |

---

## Cross-References

- **Formation of DE**: Creating DEs from equations → [Formation of Differential Equations](../formation-de/index.md)
- **Differentiation**: Understanding derivatives → [Differentiation Rules](../../limits-continuity-differentiability/differentiation-rules/index.md)
- **Solving DEs**: Methods based on order/degree → [Variable Separable](../variable-separable/index.md)
- **Integration Techniques**: Required for solving DEs → [Indefinite Integrals](../../integral-calculus/indefinite-integrals/index.md)
- **Higher Derivatives**: Understanding multiple differentiation → [Higher Derivatives](../../limits-continuity-differentiability/higher-derivatives/index.md)

---

## Quick Revision Checklist

- Order = highest derivative number
- Degree = power of highest derivative (if polynomial)
- Degree not defined for radicals/transcendental functions
- Simplify to polynomial form before finding degree
- Don’t confuse order with degree
- Linear DE has no products/powers of $y$ and derivatives

---

*Last updated: November 5, 2025*

From TestGuru · our mock-test platform

## You've read Order and Degree of Differential Equations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=differential-equations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fdifferential-equations%2Forder-degree%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/differential-equations/order-degree/",this.page.identifier="/mathematics/differential-equations/order-degree/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="slopeField" id="anim-slopeField-1795396421675100049"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-slopeField-1795396421675100049")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/differential-equations/order-degree/](https://jeenotes.in/mathematics/differential-equations/order-degree/) · raw HTML: `offline/mathematics/differential-equations/order-degree/index.html`_
