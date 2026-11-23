---
title: "Formation of Differential Equations"
source: "https://jeenotes.in/mathematics/differential-equations/formation-de/"
description: "Learn how to form differential equations from given relations, eliminating arbitrary constants"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 8"
html: "../../../../offline/mathematics/differential-equations/formation-de/index.html"
extracted: "2026-11-23"
---

> Learn how to form differential equations from given relations, eliminating arbitrary constants

# Formation of Differential Equations

## Introduction

**Formation of Differential Equations** involves creating a differential equation from a given relation by **eliminating arbitrary constants**. This is the reverse process of solving differential equations.

---

## Basic Principle

> **Key Concept**: If a relation contains $n$ arbitrary constants, differentiate it $n$ times and eliminate the constants to get a differential equation of **order $n$**.

$$\boxed{\text{Number of arbitrary constants} = \text{Order of DE}}$$

---

## General Procedure

### Step-by-Step Method

**Given**: An equation with $n$ arbitrary constants

**Step 1**: Differentiate the equation with respect to $x$ (as many times as there are arbitrary constants)

**Step 2**: Get $n+1$ equations (original + $n$ derivatives)

**Step 3**: Eliminate $n$ arbitrary constants from these $(n+1)$ equations

**Step 4**: The resulting equation is the required DE of order $n$

---

## Case 1: One Arbitrary Constant

For equation with **one arbitrary constant**, differentiate **once** and eliminate the constant.

### Interactive Demo: Slope Field Visualization

Explore how differential equations create direction fields. Click anywhere to draw solution curves through any initial condition.

### Example 1: Linear Relation

**Form DE from**: $y = mx + c$ where $c$ is an arbitrary constant.

**Solution**:
Given: $y = mx + c$ &mldr; (1) [one constant $c$]

Differentiate w.r.t. $x$:

$$\frac{dy}{dx} = m$$

From (1): $c = y - mx$

Since $m = \frac{dy}{dx}$, we can write: $c = y - x\frac{dy}{dx}$

Differentiating (1) again:

$$\frac{d^2y}{dx^2} = 0$$

**Required DE**: $\boxed{\frac{d^2y}{dx^2} = 0}$ (Order 2, since we had 1 arbitrary constant)

Wait, let me reconsider. If we’re given $y = mx + c$ where only $c$ is arbitrary (and $m$ is a given constant), we get:

Differentiate: $\frac{dy}{dx} = m$ (constant)

Differentiate again: $\boxed{\frac{d^2y}{dx^2} = 0}$

If both $m$ and $c$ are arbitrary (2 constants):
We need to differentiate twice and get: $\frac{d^2y}{dx^2} = 0$

---

### Example 2: Exponential Form

**Form DE from**: $y = Ae^{3x}$ where $A$ is arbitrary.

**Solution**:
Given: $y = Ae^{3x}$ &mldr; (1)

Differentiate w.r.t. $x$:

$$\frac{dy}{dx} = 3Ae^{3x} = 3y$$

**Required DE**: $\boxed{\frac{dy}{dx} = 3y}$ or $\boxed{\frac{dy}{dx} - 3y = 0}$

---

## Case 2: Two Arbitrary Constants

For equation with **two arbitrary constants**, differentiate **twice** and eliminate both constants.

### Example 3: Circle

**Form DE from**: $x^2 + y^2 = a^2$ where $a$ is arbitrary.

**Solution**:
Given: $x^2 + y^2 = a^2$ &mldr; (1) [one constant]

Differentiate w.r.t. $x$:

$$2x + 2y\frac{dy}{dx} = 0$$

$$\boxed{x + y\frac{dy}{dx} = 0}$$

or

$$\boxed{xy' + x = 0}$$

This is the required DE.

---

### Example 4: General Second-Order

**Form DE from**: $y = Ae^x + Be^{-x}$ where $A, B$ are arbitrary.

**Solution**:
Given: $y = Ae^x + Be^{-x}$ &mldr; (1) [two constants]

Differentiate once:

$$\frac{dy}{dx} = Ae^x - Be^{-x}$$

&mldr; (2)

Differentiate again:

$$\frac{d^2y}{dx^2} = Ae^x + Be^{-x}$$

&mldr; (3)

From (1) and (3):

$$\boxed{\frac{d^2y}{dx^2} = y}$$

or

$$\boxed{\frac{d^2y}{dx^2} - y = 0}$$

---

## Case 3: $n$ Arbitrary Constants

### Example 5: Polynomial

**Form DE from**: $y = c_1e^x + c_2e^{2x} + c_3e^{3x}$ where $c_1, c_2, c_3$ are arbitrary.

**Solution**:
[3 constants] → Need 3rd order DE

$y = c_1e^x + c_2e^{2x} + c_3e^{3x}$ &mldr; (1)

$y' = c_1e^x + 2c_2e^{2x} + 3c_3e^{3x}$ &mldr; (2)

$y'' = c_1e^x + 4c_2e^{2x} + 9c_3e^{3x}$ &mldr; (3)

$y''' = c_1e^x + 8c_2e^{2x} + 27c_3e^{3x}$ &mldr; (4)

Eliminate $c_1, c_2, c_3$ from these four equations (requires systematic elimination or determinant method).

---

## Method of Elimination

### Method 1: Direct Substitution

Solve for constants in terms of $y, y', y'', \ldots$ and substitute.

### Method 2: Successive Differentiation

Keep differentiating until you can eliminate all constants.

### Method 3: Determinant Method

For linear combinations, use determinants to eliminate constants.

**Example**: From $y = c_1e^x + c_2e^{2x}$:

Write in matrix form:

$$\begin{vmatrix} y & e^x & e^{2x} \\ y' & e^x & 2e^{2x} \\ y'' & e^x & 4e^{2x} \end{vmatrix} = 0$$

Expanding gives the DE.

---

## Special Forms

### Form 1: $y = e^{ax}(A\cos bx + B\sin bx)$

This gives second-order DE:

$$\boxed{\frac{d^2y}{dx^2} - 2a\frac{dy}{dx} + (a^2 + b^2)y = 0}$$

---

### Form 2: $y = (c_1 + c_2x)e^{ax}$

Differentiating twice and eliminating:

$$\boxed{\frac{d^2y}{dx^2} - 2a\frac{dy}{dx} + a^2y = 0}$$

---

### Form 3: Conic Sections

**Circle**: $x^2 + y^2 = r^2$ → $x + yy' = 0$

**Ellipse**: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ → $\frac{x}{a^2} + \frac{y}{b^2}y' = 0$

**Parabola**: $y^2 = 4ax$ → $yy' = 2a$

---

## Memory Tricks

### 🎯 Number of Constants Rule

**“Constants Count = Order Mount”**:

- 1 constant → 1st order DE
- 2 constants → 2nd order DE
- $n$ constants → $n$-th order DE

### 🎯 Differentiation Count

**“Differentiate as many times as constants”**:

- If 2 arbitrary constants → Differentiate 2 times

### 🎯 Elimination Strategy

**“D-E-R”**:

1. **D**ifferentiate
2. **E**liminate constants
3. **R**earrange to standard form

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Wrong Number of Differentiations

**Wrong**: For $y = Ae^x + Bxe^x$ (2 constants), differentiate once ✗

**Correct**: Differentiate **twice** for 2 constants ✓

### ❌ Mistake 2: Not Eliminating All Constants

**Wrong**: Leaving $A$ or $B$ in final DE ✗

**Correct**: Final DE should have only $x, y, y', y'', \ldots$ ✓

### ❌ Mistake 3: Treating Parameters as Constants

**Given**: $y^2 = 4ax$ where $a$ is a **parameter** (not arbitrary)

**Wrong**: Treat $a$ as arbitrary constant ✗

**Correct**:

- If $a$ is given parameter: $2yy' = 4a \Rightarrow yy' = 2a$
- If $a$ is arbitrary: Differentiate again to eliminate ✓

### ❌ Mistake 4: Incorrect Derivative Calculation

**Wrong**: From $y = Ae^{2x}$, $\frac{dy}{dx} = Ae^{2x}$ ✗

**Correct**: $\frac{dy}{dx} = 2Ae^{2x}$ ✓

---

## Solved Examples

### Example 1: Single Constant (JEE Main)

**Form differential equation from**: $y = ae^{-x}$ where $a$ is arbitrary constant.

**Solution**:
Given: $y = ae^{-x}$ &mldr; (1)

Differentiate w.r.t. $x$:

$$\frac{dy}{dx} = -ae^{-x} = -y$$

**Answer**: $\boxed{\frac{dy}{dx} + y = 0}$

---

### Example 2: Two Constants (JEE Main)

**Eliminate $a$ and $b$ from**: $y = ae^{2x} + be^{-2x}$

**Solution**:
$y = ae^{2x} + be^{-2x}$ &mldr; (1)

$\frac{dy}{dx} = 2ae^{2x} - 2be^{-2x}$ &mldr; (2)

$\frac{d^2y}{dx^2} = 4ae^{2x} + 4be^{-2x}$ &mldr; (3)

From (1): $4ae^{2x} + 4be^{-2x} = 4y$

From (3): $\frac{d^2y}{dx^2} = 4ae^{2x} + 4be^{-2x}$

Therefore: $\boxed{\frac{d^2y}{dx^2} = 4y}$ or $\boxed{\frac{d^2y}{dx^2} - 4y = 0}$

---

### Example 3: Trigonometric (JEE Advanced)

**Form DE by eliminating $A$ and $B$ from**: $y = A\cos 2x + B\sin 2x$

**Solution**:
$y = A\cos 2x + B\sin 2x$ &mldr; (1)

$y' = -2A\sin 2x + 2B\cos 2x$ &mldr; (2)

$y'' = -4A\cos 2x - 4B\sin 2x$ &mldr; (3)

From (1) and (3):

$$y'' = -4(A\cos 2x + B\sin 2x) = -4y$$

**Answer**: $\boxed{y'' + 4y = 0}$ or $\boxed{\frac{d^2y}{dx^2} + 4y = 0}$

---

### Example 4: Product Form (JEE Advanced)

**Eliminate constants from**: $y = (A + Bx)e^x$

**Solution**:
$y = (A + Bx)e^x$ &mldr; (1)

$y' = Be^x + (A + Bx)e^x = (A + B + Bx)e^x$ &mldr; (2)

$y'' = Be^x + (A + B + Bx)e^x = (A + 2B + Bx)e^x$ &mldr; (3)

From (1): $(A + Bx) = ye^{-x}$

From (2): $y' = Be^x + ye^{-x} \cdot e^x = Be^x + y$

So: $Be^x = y' - y$ &mldr; (4)

From (3): $y'' = Be^x + (A + B + Bx)e^x = (y' - y) + Be^x + ye^{-x} \cdot e^x$

$y'' = (y' - y) + (y' - y) + y = 2y' - y$

**Answer**: $\boxed{y'' - 2y' + y = 0}$ or $\boxed{\frac{d^2y}{dx^2} - 2\frac{dy}{dx} + y = 0}$

---

### Example 5: Geometric Application (JEE Advanced)

**Form DE of all circles passing through origin with center on $x$-axis**.

**Solution**:
Equation of circle with center $(a, 0)$ and radius $a$ (to pass through origin):

$$(x - a)^2 + y^2 = a^2$$

Expanding:

$$x^2 - 2ax + a^2 + y^2 = a^2$$

$$x^2 + y^2 = 2ax$$

&mldr; (1) [one constant $a$]

Differentiate w.r.t. $x$:

$$2x + 2yy' = 2a$$

&mldr; (2)

From (2): $a = x + yy'$

Substitute in (1):

$$x^2 + y^2 = 2x(x + yy')$$

$$x^2 + y^2 = 2x^2 + 2xyy'$$

**Answer**: $\boxed{y^2 = x^2 + 2xyy'}$ or $\boxed{y^2 - x^2 = 2xy\frac{dy}{dx}}$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Form DE from $y = cx^2$ where $c$ is arbitrary.

<details><summary>Solution</summary><p>$y = cx^2$ &amp;mldr; (1)</p><p>Differentiate: $y' = 2cx$</p><p>From (1): $c = \frac{y}{x^2}$</p><p>Substitute: $y' = 2 \cdot \frac{y}{x^2} \cdot x = \frac{2y}{x}$</p><p><strong>DE</strong>: $xy' = 2y$ or $x\frac{dy}{dx} - 2y = 0$</p></details>

**Problem 1.2**: Eliminate $a$ from $y = a\sin x + \cos x$.

<details><summary>Solution</summary><p>$y = a\sin x + \cos x$ &amp;mldr; (1)</p><p>$y' = a\cos x - \sin x$ &amp;mldr; (2)</p><p>From (1): $a = \frac{y - \cos x}{\sin x}$</p><p>Substitute in (2):
$y' = \frac{y - \cos x}{\sin x} \cdot \cos x - \sin x$</p><p>$y'\sin x = (y - \cos x)\cos x - \sin^2 x$</p><p>$y'\sin x = y\cos x - \cos^2 x - \sin^2 x$</p><p>$y'\sin x = y\cos x - 1$</p><p><strong>DE</strong>: $y\sin x - y\cos x = -1$ or $\frac{dy}{dx}\sin x - y\cos x = -1$</p><p>Actually, let’s reconsider. If only $a$ is arbitrary:</p><p>$y = a\sin x + \cos x$, $y' = a\cos x - \sin x$</p><p>From first: $a = \frac{y - \cos x}{\sin x}$</p><p>Into second: $y' = \frac{y - \cos x}{\sin x}\cos x - \sin x$</p><p>Multiply by $\sin x$:
$y'\sin x = y\cos x - \cos^2 x - \sin^2 x = y\cos x - 1$</p><p><strong>DE</strong>: $y' = y\cot x - \csc x$</p></details>

**Problem 1.3**: Form DE from $y = e^{ax}$ where $a$ is arbitrary.

<details><summary>Solution</summary><p>$y = e^{ax}$</p><p>Taking logarithm: $\ln y = ax$</p><p>So: $a = \frac{\ln y}{x}$</p><p>Differentiate original: $y' = ae^{ax} = ay$</p><p>Substitute $a$: $y' = \frac{\ln y}{x} \cdot y = \frac{y\ln y}{x}$</p><p><strong>DE</strong>: $xy' = y\ln y$ or $x\frac{dy}{dx} = y\ln y$</p></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Eliminate $a, b$ from $y = a\cos x + b\sin x$.

<details><summary>Solution</summary><p>$y = a\cos x + b\sin x$ &amp;mldr; (1)</p><p>$y' = -a\sin x + b\cos x$ &amp;mldr; (2)</p><p>$y'' = -a\cos x - b\sin x$ &amp;mldr; (3)</p><p>From (1) and (3): $y'' = -(a\cos x + b\sin x) = -y$</p><p><strong>DE</strong>: $y'' + y = 0$</p></details>

**Problem 2.2**: Form DE from $(x - a)^2 + (y - b)^2 = r^2$ where $a, b$ are arbitrary and $r$ is constant.

<details><summary>Solution</summary><p>$(x - a)^2 + (y - b)^2 = r^2$ &amp;mldr; (1) [2 constants]</p><p>Differentiate:
$2(x - a) + 2(y - b)y' = 0$</p><p>$(x - a) + (y - b)y' = 0$ &amp;mldr; (2)</p><p>Differentiate (2):
$1 + (y')^2 + (y - b)y'' = 0$</p><p>From (2): $(y - b) = -\frac{x - a}{y'}$</p><p>Substitute:
$1 + (y')^2 - \frac{x - a}{y'} \cdot y'' = 0$</p><p>From (2): $x - a = -(y - b)y'$</p><p>This becomes complex. Alternative:</p><p>From (2): $x - a = -(y - b)y'$</p><p>Differentiate: $1 = -(y')^2 - (y - b)y''$</p><p>So: $(y - b) = -\frac{1 + (y')^2}{y''}$</p><p><strong>DE</strong>: $[1 + (y')^2]^{3/2} = |r \cdot y''|$ (requires more work)</p><p>Standard result: $[1 + (y')^2]^3 = r^2(y'')^2$</p></details>

**Problem 2.3**: Eliminate $c_1, c_2$ from $y = c_1e^x + c_2e^{-x}$.

<details><summary>Solution</summary><p>$y = c_1e^x + c_2e^{-x}$ &amp;mldr; (1)</p><p>$y' = c_1e^x - c_2e^{-x}$ &amp;mldr; (2)</p><p>$y'' = c_1e^x + c_2e^{-x}$ &amp;mldr; (3)</p><p>From (1) and (3): $y'' = y$</p><p><strong>DE</strong>: $y'' - y = 0$</p></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Form DE representing all parabolas with vertex at origin and axis along positive $x$-axis.

<details><summary>Solution</summary><p>Equation: $y^2 = 4ax$ where $a$ is arbitrary.</p><p>Differentiate: $2yy' = 4a$</p><p>So: $a = \frac{yy'}{2}$</p><p>Substitute back: $y^2 = 4 \cdot \frac{yy'}{2} \cdot x = 2xyy'$</p><p><strong>DE</strong>: $y = 2xy'$ or $y = 2x\frac{dy}{dx}$</p></details>

**Problem 3.2**: Eliminate $a, b, c$ from $z = ax + by + c$ where $z$ is function of $x$ and $y$.

<details><summary>Solution</summary><p>This is a partial DE problem.</p><p>$z = ax + by + c$</p><p>$\frac{\partial z}{\partial x} = a$, $\frac{\partial z}{\partial y} = b$</p><p>$\frac{\partial^2 z}{\partial x \partial y} = 0$</p><p><strong>DE</strong>: $\frac{\partial^2 z}{\partial x \partial y} = 0$ or $z_{xy} = 0$</p></details>

**Problem 3.3**: Form DE from $y = Ae^{mx}\cos(nx + B)$ where $A, B$ are arbitrary and $m, n$ are constants.

<details><summary>Solution</summary><p>This requires two differentiations.</p><p>$y = Ae^{mx}\cos(nx + B)$</p><p>$y' = Ame^{mx}\cos(nx + B) - Ane^{mx}\sin(nx + B)$</p><p>$= my - Ane^{mx}\sin(nx + B)$</p><p>This leads to: $y'' - 2my' + (m^2 + n^2)y = 0$</p><p><strong>DE</strong>: $\frac{d^2y}{dx^2} - 2m\frac{dy}{dx} + (m^2 + n^2)y = 0$</p></details>

---

## Important Results Summary

| Given Relation | Differential Equation |
| --- | --- |
| $y = ae^{kx}$ | $\frac{dy}{dx} = ky$ |
| $y = ae^x + be^{-x}$ | $\frac{d^2y}{dx^2} - y = 0$ |
| $y = a\cos kx + b\sin kx$ | $\frac{d^2y}{dx^2} + k^2y = 0$ |
| $x^2 + y^2 = a^2$ | $x + y\frac{dy}{dx} = 0$ |
| $y^2 = 4ax$ | $y\frac{dy}{dx} = 2a$ or $yy' = 2a$ |
| $(y - a)^2 = 4a(x - b)$ | $(y')^2 = 4ay''$ (after elimination) |

---

## Cross-References

- **Order and Degree**: Understanding DE structure → [Order and Degree](../order-degree/index.md)
- **Differentiation Rules**: Required for formation → [Differentiation](../../limits-continuity-differentiability/index.md)
- **Solving DEs**: Reverse process → [Variable Separable Method](../variable-separable/index.md)

---

## Quick Revision Points

1. Number of arbitrary constants = Order of DE
2. Differentiate as many times as constants
3. Eliminate all constants from final DE
4. Final DE contains only $x, y$ and derivatives
5. Parameters (given values) are not eliminated
6. Check: Final DE should not have $A, B, C, \ldots$

---

*Last updated: November 8, 2025*

From TestGuru · our mock-test platform

## You've read Formation of Differential Equations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=differential-equations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fdifferential-equations%2Fformation-de%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/differential-equations/formation-de/",this.page.identifier="/mathematics/differential-equations/formation-de/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="slopeField" id="anim-slopeField-1795396421660195936"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-slopeField-1795396421660195936")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/differential-equations/formation-de/](https://jeenotes.in/mathematics/differential-equations/formation-de/) · raw HTML: `offline/mathematics/differential-equations/formation-de/index.html`_
