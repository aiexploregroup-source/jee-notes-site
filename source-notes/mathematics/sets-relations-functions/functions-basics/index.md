---
title: "Introduction to Functions"
source: "https://jeenotes.in/mathematics/sets-relations-functions/functions-basics/"
description: "Learn the definition, domain, range, and graphical representation of functions for JEE Mathematics."
updated: "2026-08-01"
reading_time: "6 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 9"
html: "../../../../offline/mathematics/sets-relations-functions/functions-basics/index.html"
extracted: "2026-11-23"
---

> Learn the definition, domain, range, and graphical representation of functions for JEE Mathematics.

## Introduction

A **function** is a special type of relation where every input has exactly one output. Functions are one of the most important concepts in mathematics, appearing in calculus, algebra, and beyond.

## Interactive: Explore Function Graphs

Click different function types to see their graphs:

---

> **★ Key point · Google Maps = A Function!**
>
> Think of **Google Maps** like a function: you input a destination, it outputs ONE route. You can’t input “Pizza Hut” and get two different locations from the same address — that would break the function! Just like in *12th Fail* (2023), where one student (input) gets one result (output) — every input maps to exactly one output.

---

## Definition of a Function

### Formal Definition

A **function** $f$ from set $A$ to set $B$, written $f: A \to B$, is a relation such that:

$$\boxed{\text{Every element of } A \text{ is related to exactly one element of } B}$$

### Two Key Requirements

1. **Every** element in $A$ must have an image in $B$
2. Each element in $A$ can have **only one** image

### Examples

**Valid Functions:**

$f: \{1, 2, 3\} \to \{a, b, c\}$

$f = \{(1, a), (2, b), (3, c)\}$ (valid)

$g = \{(1, a), (2, a), (3, a)\}$ (valid - same output is OK)

**Not Functions:**

$R = \{(1, a), (2, b)\}$ ✗ (3 has no image)

$R = \{(1, a), (1, b), (2, c), (3, d)\}$ ✗ (1 has two images)

> **★ Key point · Vertical Line Test**
>
> For functions $f: \mathbb{R} \to \mathbb{R}$, a graph represents a function if and only if every vertical line intersects the graph at **most once**.

---

## Terminology

| Term | Definition | Notation |
| --- | --- | --- |
| **Domain** | Set of all inputs (set $A$) | $\text{Dom}(f)$ |
| **Co-domain** | Set of possible outputs (set $B$) | - |
| **Range** | Set of actual outputs | $\text{Range}(f)$ |
| **Image** | Output for a specific input | $f(x)$ |
| **Pre-image** | Input(s) that give a specific output | $f^{-1}(\{y\})$ |

### Important Relationship

$$\text{Range}(f) \subseteq \text{Co-domain}$$

The range is always a subset of the co-domain!

### Example

$f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x^2$

- **Domain**: $\mathbb{R}$ (all real numbers)
- **Co-domain**: $\mathbb{R}$ (all real numbers)
- **Range**: $[0, \infty)$ (only non-negative reals are outputs)
- **Image of 3**: $f(3) = 9$
- **Pre-image of 4**: $\{-2, 2\}$ (since $f(-2) = f(2) = 4$)

---

## Finding Domain and Range

### Finding Domain

The domain is the set of all $x$ for which $f(x)$ is defined.

**Common Restrictions:**

| Expression | Restriction |
| --- | --- |
| $\frac{1}{g(x)}$ | $g(x) \neq 0$ |
| $\sqrt{g(x)}$ | $g(x) \geq 0$ |
| $\log(g(x))$ | $g(x) > 0$ |
| $\tan(x)$ | $x \neq \frac{\pi}{2} + n\pi$ |

### Examples

**Example 1:** $f(x) = \frac{1}{x - 2}$

Domain: $x \neq 2$, so $\text{Dom}(f) = \mathbb{R} - \{2\}$ or $(-\infty, 2) \cup (2, \infty)$

**Example 2:** $f(x) = \sqrt{4 - x^2}$

Need: $4 - x^2 \geq 0 \Rightarrow x^2 \leq 4 \Rightarrow -2 \leq x \leq 2$

Domain: $[-2, 2]$

**Example 3:** $f(x) = \log(x - 1) + \sqrt{5 - x}$

Need: $x - 1 > 0$ AND $5 - x \geq 0$

So: $x > 1$ AND $x \leq 5$

Domain: $(1, 5]$

### Finding Range

**Method 1:** Find all possible output values

**Method 2:** Set $y = f(x)$ and solve for $x$. The values of $y$ for which $x$ is valid form the range.

**Example:** $f(x) = \frac{x}{x + 1}$, Domain: $\mathbb{R} - \{-1\}$

Let $y = \frac{x}{x + 1}$

$y(x + 1) = x$

$yx + y = x$

$y = x - yx = x(1 - y)$

$x = \frac{y}{1 - y}$

This is defined for all $y \neq 1$.

Range: $\mathbb{R} - \{1\}$

---

## Ways to Define Functions

### 1. Explicit Formula

$f(x) = x^2 + 2x + 1$

### 2. Piecewise Definition

$$f(x) = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

This is the absolute value function $|x|$.

### 3. Implicit Definition

$x^2 + y^2 = 1$ defines $y$ as a function of $x$ only if we restrict to upper or lower semicircle.

### 4. Parametric Definition

$x = \cos(t)$, $y = \sin(t)$ for $t \in [0, 2\pi)$

---

## Special Functions

### Identity Function

$$I(x) = x$$

- Domain: $A$
- Range: $A$
- Graph: Line through origin with slope 1

### Constant Function

$$f(x) = c$$

(where $c$ is a constant)

- Domain: $A$
- Range: $\{c\}$
- Graph: Horizontal line

### Modulus (Absolute Value) Function

$$f(x) = |x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$

- Domain: $\mathbb{R}$
- Range: $[0, \infty)$

### Greatest Integer Function (Floor)

$$f(x) = \lfloor x \rfloor = \text{greatest integer} \leq x$$

Examples: $\lfloor 2.7 \rfloor = 2$, $\lfloor -1.3 \rfloor = -2$

> **◐ In simple terms · Age Calculations in Movies!**
>
> The greatest integer function is how we calculate age! If you’re 17 years and 11 months old (17.917 years), your age is $\lfloor 17.917 \rfloor = 17$ — the greatest integer less than or equal to your exact age. That’s why in *12th Fail*, Manoj is “just 17” even if he’s almost 18!

### Fractional Part Function

$$\{x\} = x - \lfloor x \rfloor$$

Always in the range $[0, 1)$.

### Signum Function

$$\text{sgn}(x) = \begin{cases} 1 & \text{if } x > 0 \\ 0 & \text{if } x = 0 \\ -1 & \text{if } x < 0 \end{cases}$$

---

## Algebra of Functions

For functions $f, g: A \to \mathbb{R}$:

| Operation | Definition | Domain |
| --- | --- | --- |
| $(f + g)(x)$ | $f(x) + g(x)$ | $\text{Dom}(f) \cap \text{Dom}(g)$ |
| $(f - g)(x)$ | $f(x) - g(x)$ | $\text{Dom}(f) \cap \text{Dom}(g)$ |
| $(fg)(x)$ | $f(x) \cdot g(x)$ | $\text{Dom}(f) \cap \text{Dom}(g)$ |
| $(f/g)(x)$ | $\frac{f(x)}{g(x)}$ | $\text{Dom}(f) \cap \text{Dom}(g) \cap \{x : g(x) \neq 0\}$ |

---

## Even and Odd Functions

### Even Function

$f(-x) = f(x)$ for all $x$ in domain

- Graph is symmetric about **y-axis**
- Examples: $x^2$, $\cos(x)$, $|x|$

### Odd Function

$f(-x) = -f(x)$ for all $x$ in domain

- Graph is symmetric about **origin**
- Examples: $x^3$, $\sin(x)$, $x$

> **★ Key point · JEE Tip**
>
> Any function can be written as sum of even and odd parts:
>
> $$f(x) = \underbrace{\frac{f(x) + f(-x)}{2}}_{\text{even}} + \underbrace{\frac{f(x) - f(-x)}{2}}_{\text{odd}}$$

---

## Practice Problems

1. Find the domain of $f(x) = \frac{\sqrt{x + 3}}{\log(2 - x)}$
2. Is $f(x) = x^3 + x$ even, odd, or neither?
3. Find the range of $f(x) = \frac{x^2}{x^2 + 1}$

> **↗ Connection · Quick Check**
>
> If $f(x) = \sqrt{x}$ with domain $[0, \infty)$ and co-domain $\mathbb{R}$, what is its range?

---

---

## Related Topics

### Within Sets, Relations & Functions

- [Types of Relations](../types-of-relations/index.md) — Foundation for understanding functions
- [Types of Functions](../types-of-functions/index.md) — One-one, onto, bijective functions
- [Composition of Functions](../composition/index.md) — Combining functions

### Math Connections

- [Limits and Continuity](../../limits-continuity-differentiability/index.md) — Behavior of functions
- [Differentiation](../../limits-continuity-differentiability/index.md) — Rate of change of functions
- [Integration](../../integral-calculus/index.md) — Area under function curves
- [Trigonometry](../../trigonometry/index.md) — Trigonometric functions

### Physics Applications

- [Kinematics](../../../physics/kinematics/index.md) — Position, velocity as functions of time
- [SHM](../../../physics/oscillations-waves/index.md) — Sinusoidal functions describe oscillations
- [Wave Motion](../../../physics/oscillations-waves/index.md) — Wave functions

### Chemistry Applications

- [Chemical Kinetics](../../../chemistry/chemical-kinetics/index.md) — Rate as function of concentration
- [Thermodynamics](../../../chemistry/thermodynamics/index.md) — State functions vs path functions

---

From TestGuru · our mock-test platform

## You've read Introduction to Functions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sets-relations-functions&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsets-relations-functions%2Ffunctions-basics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sets-relations-functions/functions-basics/",this.page.identifier="/mathematics/sets-relations-functions/functions-basics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396422166168310"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396422166168310")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sets-relations-functions/functions-basics/](https://jeenotes.in/mathematics/sets-relations-functions/functions-basics/) · raw HTML: `offline/mathematics/sets-relations-functions/functions-basics/index.html`_
