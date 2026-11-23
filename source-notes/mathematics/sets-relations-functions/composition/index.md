---
title: "Composition of Functions"
source: "https://jeenotes.in/mathematics/sets-relations-functions/composition/"
description: "Master function composition, inverse functions, and their properties for JEE Mathematics."
updated: "2026-08-01"
reading_time: "5 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 9"
html: "../../../../offline/mathematics/sets-relations-functions/composition/index.html"
extracted: "2026-11-23"
---

> Master function composition, inverse functions, and their properties for JEE Mathematics.

## Introduction

When we apply one function after another, we create a **composite function**. Composition is a powerful way to build complex functions from simpler ones.

---

## Composition of Functions

### Definition

If $f: A \to B$ and $g: B \to C$, then the **composition** of $g$ with $f$, denoted $g \circ f$, is:

$$\boxed{(g \circ f)(x) = g(f(x))}$$

Read as: “$g$ of $f$ of $x$” or “$g$ composed with $f$”

### Domain of Composition

$$\text{Dom}(g \circ f) = \{x \in A : f(x) \in \text{Dom}(g)\}$$

### Visualization

```fallback
f         g
A ────► B ────► C

    g ∘ f
A ─────────────► C
```

### Example 1

Let $f(x) = 2x + 1$ and $g(x) = x^2$.

$$(g \circ f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$$

$$(f \circ g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1$$

> **⚠ Trap · Order Matters!**
>
> In general, $g \circ f \neq f \circ g$
>
> Composition is **NOT commutative**!

---

## Properties of Composition

### 1. Associativity

For $f: A \to B$, $g: B \to C$, $h: C \to D$:

$$\boxed{(h \circ g) \circ f = h \circ (g \circ f)}$$

Both equal $h(g(f(x)))$.

### 2. Identity Function

The identity function $I(x) = x$ acts as identity for composition:

$$f \circ I = I \circ f = f$$

### 3. Non-Commutativity

Generally: $f \circ g \neq g \circ f$

### 4. Injectivity and Surjectivity

| If | Then |
| --- | --- |
| $f$ and $g$ are one-one | $g \circ f$ is one-one |
| $f$ and $g$ are onto | $g \circ f$ is onto |
| $f$ and $g$ are bijective | $g \circ f$ is bijective |

**Converse results:**

| If | Then |
| --- | --- |
| $g \circ f$ is one-one | $f$ is one-one |
| $g \circ f$ is onto | $g$ is onto |

### Interactive Demo: Visualize Function Composition

Explore how composing functions affects their graphs.

---

## Inverse Functions

### Definition

For a **bijective** function $f: A \to B$, the **inverse function** $f^{-1}: B \to A$ satisfies:

$$\boxed{f^{-1}(y) = x \iff f(x) = y}$$

### Key Properties

1. $f^{-1} \circ f = I_A$ (identity on $A$)
2. $f \circ f^{-1} = I_B$ (identity on $B$)
3. $(f^{-1})^{-1} = f$
4. $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ (reverses order!)

### Finding the Inverse

**Step 1:** Write $y = f(x)$

**Step 2:** Solve for $x$ in terms of $y$

**Step 3:** Replace $y$ with $x$ to get $f^{-1}(x)$

### Example 2

Find the inverse of $f(x) = 2x + 3$.

**Solution:**

1. Let $y = 2x + 3$
2. Solve for $x$: $x = \frac{y - 3}{2}$
3. Replace $y$ with $x$: $f^{-1}(x) = \frac{x - 3}{2}$

**Verification:**
$(f \circ f^{-1})(x) = f\left(\frac{x-3}{2}\right) = 2 \cdot \frac{x-3}{2} + 3 = x - 3 + 3 = x$ (verified)

### Example 3

Find the inverse of $f(x) = \frac{2x + 1}{x - 3}$, $x \neq 3$.

**Solution:**

1. Let $y = \frac{2x + 1}{x - 3}$
2. Cross multiply: $y(x - 3) = 2x + 1$
3. Expand: $xy - 3y = 2x + 1$
4. Collect $x$ terms: $xy - 2x = 3y + 1$
5. Factor: $x(y - 2) = 3y + 1$
6. Solve: $x = \frac{3y + 1}{y - 2}$

$$f^{-1}(x) = \frac{3x + 1}{x - 2}$$

---

## Graph of Inverse Function

The graph of $f^{-1}$ is the **reflection** of the graph of $f$ about the line $y = x$.

If $(a, b)$ is on the graph of $f$, then $(b, a)$ is on the graph of $f^{-1}$.

### Self-Inverse Functions

A function $f$ is **self-inverse** (or an **involution**) if:

$$f^{-1} = f \quad \text{or} \quad f(f(x)) = x$$

**Examples of self-inverse functions:**

- $f(x) = \frac{1}{x}$
- $f(x) = -x$
- $f(x) = \frac{a - x}{1 + ax}$ (for $ax \neq -1$)

---

## Composition Examples

### Example 4: Multiple Compositions

If $f(x) = x^2$ and $g(x) = x + 1$, find:

a) $(g \circ f)(3)$
b) $(f \circ g)(3)$
c) $(g \circ g)(3)$
d) $(f \circ f)(2)$

**Solutions:**

a) $(g \circ f)(3) = g(f(3)) = g(9) = 9 + 1 = 10$

b) $(f \circ g)(3) = f(g(3)) = f(4) = 16$

c) $(g \circ g)(3) = g(g(3)) = g(4) = 5$

d) $(f \circ f)(2) = f(f(2)) = f(4) = 16$

### Example 5: Finding Component Functions

If $(g \circ f)(x) = \sin^2(x)$, find possible $f$ and $g$.

**Solution:**

One possibility:

- $f(x) = \sin(x)$
- $g(x) = x^2$

Then $(g \circ f)(x) = g(\sin(x)) = \sin^2(x)$ (correct)

Another possibility:

- $f(x) = \sin^2(x)$
- $g(x) = x$

There are infinitely many solutions!

---

## JEE Important Results

### If $f \circ g = I$ and $g \circ f = I$

Then $f$ and $g$ are inverses of each other.

### If $f: \mathbb{R} \to \mathbb{R}$ is bijective

Then $f^{-1}$ exists and:

- $(f^{-1})'(y) = \frac{1}{f'(x)}$ where $y = f(x)$

### Periodic Compositions

If $f$ has period $T$, then $g \circ f$ also has period $T$.

---

## Summary

| Concept | Formula/Property |
| --- | --- |
| Composition | $(g \circ f)(x) = g(f(x))$ |
| Not commutative | $g \circ f \neq f \circ g$ in general |
| Associative | $(h \circ g) \circ f = h \circ (g \circ f)$ |
| Inverse exists | Only for bijective functions |
| Inverse property | $f^{-1}(f(x)) = x = f(f^{-1}(x))$ |
| Composition inverse | $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ |

---

## Practice Problems

1. If $f(x) = \frac{x}{x+1}$ and $g(x) = \frac{1}{1-x}$, find $(g \circ f)(x)$ and its domain.
2. If $f(x) = x^3 + 3x - 1$ and $g = f^{-1}$, find $g(3)$.
   (Hint: If $f(a) = 3$, then $g(3) = a$)
3. Find all functions $f: \mathbb{R} \to \mathbb{R}$ such that $f(f(x)) = x$ for all $x$.
4. If $(f \circ f)(x) = 4x - 3$ and $f(0) = 1$, find $f(x)$.

> **↗ Connection · Quick Check**
>
> If $f(x) = 2x$ and $g(x) = x + 3$, verify that $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.

---

## What’s Next?

You’ve completed the Sets, Relations and Functions chapter! Key connections:

- [Limits and Continuity](../../limits-continuity-differentiability/index.md) - Uses function concepts extensively
- [Permutations and Combinations](../../permutations-combinations/index.md) - Counting functions

---

**[← Types of Functions](../types-of-functions/index.md) | [Back to Chapter Overview](../../index.md)**

From TestGuru · our mock-test platform

## You've read Composition of Functions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sets-relations-functions&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsets-relations-functions%2Fcomposition%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sets-relations-functions/composition/",this.page.identifier="/mathematics/sets-relations-functions/composition/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396422162355781"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396422162355781")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sets-relations-functions/composition/](https://jeenotes.in/mathematics/sets-relations-functions/composition/) · raw HTML: `offline/mathematics/sets-relations-functions/composition/index.html`_
