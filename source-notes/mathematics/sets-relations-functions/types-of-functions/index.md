---
title: "Types of Functions"
source: "https://jeenotes.in/mathematics/sets-relations-functions/types-of-functions/"
description: "Master one-one, onto, bijective functions and counting formulas for JEE Mathematics."
updated: "2026-08-01"
reading_time: "5 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 9"
html: "../../../../offline/mathematics/sets-relations-functions/types-of-functions/index.html"
extracted: "2026-11-23"
---

> Master one-one, onto, bijective functions and counting formulas for JEE Mathematics.

## Introduction

Functions can be classified based on how they map elements from the domain to the co-domain. Understanding these types is crucial for function problems in JEE.

---

## One-One (Injective) Function

### Definition

A function $f: A \to B$ is **one-one** (or **injective**) if different inputs always give different outputs:

$$\boxed{f(x_1) = f(x_2) \Rightarrow x_1 = x_2}$$

Equivalently: $x_1 \neq x_2 \Rightarrow f(x_1) \neq f(x_2)$

### Visual Representation

```fallback
A          B
  1  ──────► a
  2  ──────► b
  3  ──────► c
             d  (unused)
```

Each element of $B$ has **at most one** pre-image.

### How to Check

**Method 1 (Algebraic):** Assume $f(x_1) = f(x_2)$ and prove $x_1 = x_2$

**Method 2 (Calculus):** For differentiable functions, check if $f$ is strictly monotonic:

- $f'(x) > 0$ for all $x$ (strictly increasing) → one-one
- $f'(x) < 0$ for all $x$ (strictly decreasing) → one-one

**Method 3 (Horizontal Line Test):** Every horizontal line intersects the graph at most once.

### Examples

**One-one:**

- $f(x) = 2x + 3$ (linear with non-zero slope)
- $f(x) = e^x$ (strictly increasing)
- $f(x) = x^3$ (strictly increasing)

**Not one-one:**

- $f(x) = x^2$ on $\mathbb{R}$ ✗ ($f(-2) = f(2) = 4$)
- $f(x) = \sin(x)$ on $\mathbb{R}$ ✗ ($f(0) = f(\pi) = 0$)

> **★ Key point · Making Functions One-One**
>
> By restricting the domain, a non-injective function can become injective:
>
> - $f(x) = x^2$ on $[0, \infty)$ is one-one

> - $f(x) = \sin(x)$ on $[-\frac{\pi}{2}, \frac{\pi}{2}]$ is one-one

---

## Onto (Surjective) Function

### Definition

A function $f: A \to B$ is **onto** (or **surjective**) if every element of $B$ is an image of some element of $A$:

$$\boxed{\text{Range}(f) = \text{Co-domain } B}$$

Equivalently: For every $b \in B$, there exists $a \in A$ such that $f(a) = b$.

### Visual Representation

```fallback
A          B
  1  ──────► a
  2  ──────► b
  3  ──────► a
  4  ──────► c
```

Every element of $B$ is “hit” by at least one arrow.

### How to Check

**Method 1:** Find the range and verify it equals the co-domain.

**Method 2:** For any $y \in B$, solve $f(x) = y$ for $x$. If a solution exists in $A$ for every $y$, then $f$ is onto.

### Examples

**Onto:**

- $f: \mathbb{R} \to \mathbb{R}$, $f(x) = 2x + 3$ (range = $\mathbb{R}$)
- $f: \mathbb{R} \to \mathbb{R}^+$, $f(x) = e^x$ (range = $\mathbb{R}^+$)

**Not onto:**

- $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ ✗ (range = $[0, \infty) \neq \mathbb{R}$)
- $f: \mathbb{R} \to \mathbb{R}$, $f(x) = e^x$ ✗ (range = $(0, \infty) \neq \mathbb{R}$)

> **⚠ Trap · Co-domain Matters!**
>
> The same function can be onto or not depending on the co-domain:
>
> - $f(x) = x^2$, $f: \mathbb{R} \to \mathbb{R}$ is NOT onto

> - $f(x) = x^2$, $f: \mathbb{R} \to [0, \infty)$ IS onto

### Interactive Demo: Visualize Function Types

Plot and explore one-one, onto, and bijective functions.

---

## Bijective Function (One-to-One Correspondence)

### Definition

A function is **bijective** if it is both one-one AND onto:

$$\boxed{\text{Bijective} = \text{Injective} + \text{Surjective}}$$

### Visual Representation

```fallback
A          B
  1  ──────► a
  2  ──────► b
  3  ──────► c
```

Perfect matching: each element of $A$ paired with exactly one element of $B$.

### Key Property

**Only bijective functions have inverses!**

If $f: A \to B$ is bijective, then $f^{-1}: B \to A$ exists.

### Examples

**Bijective:**

- $f: \mathbb{R} \to \mathbb{R}$, $f(x) = 2x + 3$ (bijective)
- $f: \mathbb{R}^+ \to \mathbb{R}^+$, $f(x) = x^2$ (bijective)
- $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^3$ (bijective)

**Not bijective:**

- $f: \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$ ✗ (not one-one, not onto)
- $f: \mathbb{R}^+ \to \mathbb{R}$, $f(x) = x^2$ ✗ (one-one but not onto)

---

## Summary Diagram

```mermaid
graph TD
    F[Functions] --> O[One-OneInjective]
    F --> ON[OntoSurjective]
    F --> B[Bijective]
    O --> |"Different inputs → Different outputs"| O1[|A| ≤ |B|]
    ON --> |"Range = Co-domain"| ON1[|A| ≥ |B|]
    B --> |"One-One + Onto"| B1[|A| = |B|Has inverse]
```

---

## Counting Functions

For finite sets $A$ and $B$ with $|A| = m$ and $|B| = n$:

### Total Number of Functions

$$\boxed{\text{Total functions} = n^m}$$

Each of $m$ elements can map to any of $n$ elements.

### Number of One-One Functions

$$\boxed{\text{One-one functions} = \frac{n!}{(n-m)!} = P(n, m)}$$

Valid only when $m \leq n$. (If $m > n$, there are 0 one-one functions.)

### Number of Onto Functions

Using inclusion-exclusion:

$$\boxed{\text{Onto functions} = \sum_{r=0}^{n-1} (-1)^r \binom{n}{r}(n-r)^m}$$

Valid only when $m \geq n$.

For small cases:

- Onto functions from $m$ to $2$: $2^m - 2$
- Onto functions from $m$ to $3$: $3^m - 3 \cdot 2^m + 3$

### Number of Bijective Functions

$$\boxed{\text{Bijective functions} = n!}$$

(only when $m = n$)

### Summary Table

| Type | Formula | Condition |
| --- | --- | --- |
| All functions | $n^m$ | Always |
| One-one | $\frac{n!}{(n-m)!}$ | $m \leq n$ |
| Onto | $\sum_{r=0}^{n-1} (-1)^r \binom{n}{r}(n-r)^m$ | $m \geq n$ |
| Bijective | $n!$ | $m = n$ |

---

## Example Calculations

### Example 1

**Problem:** Find the number of one-one functions from $\{1, 2, 3\}$ to $\{a, b, c, d, e\}$.

**Solution:**
$m = 3$, $n = 5$

One-one functions = $\frac{5!}{(5-3)!} = \frac{5!}{2!} = \frac{120}{2} = 60$

### Example 2

**Problem:** Find the number of onto functions from $\{1, 2, 3, 4\}$ to $\{a, b\}$.

**Solution:**
$m = 4$, $n = 2$

Onto functions = $2^4 - 2 = 16 - 2 = 14$

(Total functions minus functions that miss one element)

### Example 3

**Problem:** A function $f: \{1, 2, 3, 4, 5\} \to \{1, 2, 3, 4, 5\}$ is both one-one and onto. How many such functions exist?

**Solution:**
Bijective functions = $5! = 120$

---

## JEE Important Points

> **★ Key point · Remember**
>
> 1. For one-one: $|A| \leq |B|$ (can’t have more inputs than outputs)

> 2. For onto: $|A| \geq |B|$ (can’t have more outputs than inputs)

> 3. For bijective: $|A| = |B|$

> 4. Only bijective functions have inverses

> 5. Restricting domain can make a function one-one

> 6. Restricting co-domain can make a function onto

---

## Practice Problems

1. Check if $f(x) = x^3 - x$ is one-one on $\mathbb{R}$.
2. Find the number of functions from a set of 4 elements to a set of 3 elements that are onto.
3. If $f: A \to B$ is one-one and $|A| = |B| = 5$, prove $f$ is onto.

> **↗ Connection · Quick Check**
>
> How many bijective functions exist from $\{1, 2, 3, 4\}$ to $\{a, b, c, d\}$?

---

From TestGuru · our mock-test platform

## You've read Types of Functions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sets-relations-functions&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsets-relations-functions%2Ftypes-of-functions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sets-relations-functions/types-of-functions/",this.page.identifier="/mathematics/sets-relations-functions/types-of-functions/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396422169620108"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396422169620108")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sets-relations-functions/types-of-functions/](https://jeenotes.in/mathematics/sets-relations-functions/types-of-functions/) · raw HTML: `offline/mathematics/sets-relations-functions/types-of-functions/index.html`_
