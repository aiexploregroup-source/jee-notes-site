---
title: "Types of Relations"
source: "https://jeenotes.in/mathematics/sets-relations-functions/types-of-relations/"
description: "Master reflexive, symmetric, transitive, and equivalence relations for JEE Mathematics."
updated: "2026-08-01"
reading_time: "6 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 9"
html: "../../../../offline/mathematics/sets-relations-functions/types-of-relations/index.html"
extracted: "2026-11-23"
---

> Master reflexive, symmetric, transitive, and equivalence relations for JEE Mathematics.

## Introduction

Relations on a set can be classified based on their properties. Understanding these properties is crucial for recognizing equivalence relations, which are fundamental in mathematics.

---

## Reflexive Relation

### Definition

A relation $R$ on set $A$ is **reflexive** if every element is related to itself:

$$\boxed{(a, a) \in R \text{ for all } a \in A}$$

### How to Check

The diagonal elements $(a, a)$ must ALL be present in $R$.

### Examples

**Reflexive:**

- On $A = \{1, 2, 3\}$: $R = \{(1,1), (2,2), (3,3), (1,2)\}$ (reflexive)
- “=” on real numbers: $x = x$ for all $x$ (reflexive)
- “≤” on real numbers: $x \leq x$ for all $x$ (reflexive)

**Not Reflexive:**

- On $A = \{1, 2, 3\}$: $R = \{(1,1), (2,2), (1,2)\}$ ✗ (missing $(3,3)$)
- “<” on real numbers: $x < x$ is false ✗

> **★ Key point · Matrix Check**
>
> In the matrix representation, a relation is reflexive if and only if **all diagonal elements are 1**.

---

## Symmetric Relation

### Definition

A relation $R$ on set $A$ is **symmetric** if:

$$\boxed{(a, b) \in R \Rightarrow (b, a) \in R}$$

Whenever $a$ is related to $b$, then $b$ is also related to $a$.

### How to Check

For every ordered pair $(a, b)$ in $R$, check if $(b, a)$ is also in $R$.

### Examples

**Symmetric:**

- On $A = \{1, 2, 3\}$: $R = \{(1,1), (1,2), (2,1)\}$ (symmetric)
- “=” on real numbers: if $x = y$, then $y = x$ (symmetric)
- “is sibling of” on people (symmetric)

**Not Symmetric:**

- On $A = \{1, 2\}$: $R = \{(1,2)\}$ ✗ (has $(1,2)$ but not $(2,1)$)
- “≤” on real numbers: $2 \leq 3$ but not $3 \leq 2$ ✗
- “is father of” ✗

> **★ Key point · Matrix Check**
>
> In the matrix representation, a relation is symmetric if and only if the matrix equals its **transpose**: $M = M^T$.

---

## Anti-Symmetric Relation

### Definition

A relation $R$ on set $A$ is **anti-symmetric** if:

$$\boxed{(a, b) \in R \text{ and } (b, a) \in R \Rightarrow a = b}$$

Different elements cannot be related in both directions.

### Examples

**Anti-symmetric:**

- “≤” on real numbers: if $x \leq y$ and $y \leq x$, then $x = y$ (antisymmetric)
- “divides” on positive integers (antisymmetric)

**Not Anti-symmetric:**

- On $A = \{1, 2\}$: $R = \{(1,2), (2,1)\}$ ✗ (1 ≠ 2 but both pairs exist)

> **◐ In simple terms · Symmetric vs Anti-symmetric**
>
> A relation can be:
>
> - Both symmetric AND anti-symmetric (only if $R$ only contains $(a,a)$ pairs)

> - Neither symmetric nor anti-symmetric

> - Symmetric but not anti-symmetric

> - Anti-symmetric but not symmetric

---

## Transitive Relation

### Definition

A relation $R$ on set $A$ is **transitive** if:

$$\boxed{(a, b) \in R \text{ and } (b, c) \in R \Rightarrow (a, c) \in R}$$

If $a$ is related to $b$, and $b$ is related to $c$, then $a$ must be related to $c$.

### How to Check

For every chain $a \to b \to c$ in the relation, verify $a \to c$ exists.

### Examples

**Transitive:**

- On $A = \{1, 2, 3\}$: $R = \{(1,2), (2,3), (1,3)\}$ (transitive)
- “≤” on real numbers: if $x \leq y$ and $y \leq z$, then $x \leq z$ (transitive)
- “is ancestor of” (transitive)

**Not Transitive:**

- On $A = \{1, 2, 3\}$: $R = \{(1,2), (2,3)\}$ ✗ (missing $(1,3)$)
- “is friend of” (friend’s friend may not be your friend) ✗

> **⚠ Trap · Common Mistake**
>
> An empty relation IS transitive (vacuously true - there are no pairs to check).
>
> A relation with just one pair $(a, b)$ where $a \neq b$ is transitive (no chain to check).

### Interactive Demo: Visualize Relation Properties

Explore different types of relations and their properties graphically.

---

## Summary of Properties

| Property | Condition | Check |
| --- | --- | --- |
| Reflexive | $(a, a) \in R$ for all $a$ | All diagonal pairs present |
| Symmetric | $(a,b) \in R \Rightarrow (b,a) \in R$ | Pairs come in symmetric pairs |
| Anti-symmetric | $(a,b), (b,a) \in R \Rightarrow a = b$ | No symmetric pairs for different elements |
| Transitive | $(a,b), (b,c) \in R \Rightarrow (a,c) \in R$ | All chains close |

---

## Equivalence Relation

### Definition

A relation $R$ on set $A$ is an **equivalence relation** if it is:

$$\boxed{\text{Reflexive + Symmetric + Transitive}}$$

### Examples of Equivalence Relations

1. **Equality** on any set: $x = y$
2. **Congruence modulo n** on integers:
   $a \equiv b \pmod{n}$ (same remainder when divided by $n$)
3. **Same birthday** on people
4. **Parallel lines** on the set of lines

### Example Verification

**Claim:** “Has same remainder when divided by 3” is an equivalence relation on $\mathbb{Z}$.

**Proof:**

Let $aRb$ mean “$a - b$ is divisible by 3”.

1. **Reflexive:** $a - a = 0$ is divisible by 3. (Yes)
2. **Symmetric:** If $a - b$ is divisible by 3, then $b - a = -(a-b)$ is also divisible by 3. (Yes)
3. **Transitive:** If $a - b = 3k$ and $b - c = 3m$, then:
   $a - c = (a - b) + (b - c) = 3k + 3m = 3(k+m)$ is divisible by 3. (Yes)

---

## Equivalence Classes

### Definition

For an equivalence relation $R$ on $A$, the **equivalence class** of element $a$ is:

$$[a] = \{x \in A : xRa\}$$

All elements equivalent to $a$.

### Example

For “same remainder mod 3” on $\mathbb{Z}$:

- $[0] = \{..., -6, -3, 0, 3, 6, 9, ...\}$ (divisible by 3)
- $[1] = \{..., -5, -2, 1, 4, 7, 10, ...\}$ (remainder 1)
- $[2] = \{..., -4, -1, 2, 5, 8, 11, ...\}$ (remainder 2)

### Properties of Equivalence Classes

1. Every element belongs to exactly one equivalence class
2. Two equivalence classes are either **identical** or **disjoint**
3. The equivalence classes **partition** the set $A$

> **★ Key point · Partition**
>
> An equivalence relation on $A$ divides $A$ into non-overlapping equivalence classes whose union is $A$. This is called a **partition**.

---

## Counting Problems

### Number of Reflexive Relations

Each of the $n^2 - n$ non-diagonal entries can be 0 or 1:

$$\text{Reflexive relations on } A = 2^{n^2 - n} = 2^{n(n-1)}$$

### Number of Symmetric Relations

Choose the upper triangle (including diagonal) freely; lower triangle is determined:

$$\text{Symmetric relations on } A = 2^{\frac{n(n+1)}{2}}$$

### Number of Reflexive and Symmetric Relations

$$= 2^{\frac{n(n-1)}{2}}$$

---

## Quick Comparison Table

| Relation | Reflexive | Symmetric | Transitive | Equivalence |
| --- | --- | --- | --- | --- |
| = | Yes | Yes | Yes | Yes |
| ≤ | Yes | No | Yes | No |
| < | No | No | Yes | No |
| ⊥ (perpendicular) | No | Yes | No | No |
| ∥ (parallel) | Yes | Yes | Yes | Yes |

---

## Practice Problems

1. Check if $R = \{(1,1), (2,2), (3,3), (1,2), (2,1)\}$ on $\{1,2,3\}$ is an equivalence relation.
2. On $\mathbb{Z}$, define $aRb$ if $|a - b| \leq 1$. Is $R$ transitive?
3. Find all equivalence classes for “divisible by 4” on $\{1, 2, 3, ..., 12\}$.

> **↗ Connection · Quick Check**
>
> If $A$ has 4 elements, how many reflexive relations are possible on $A$?

---

From TestGuru · our mock-test platform

## You've read Types of Relations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sets-relations-functions&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsets-relations-functions%2Ftypes-of-relations%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sets-relations-functions/types-of-relations/",this.page.identifier="/mathematics/sets-relations-functions/types-of-relations/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396422163349606"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396422163349606")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sets-relations-functions/types-of-relations/](https://jeenotes.in/mathematics/sets-relations-functions/types-of-relations/) · raw HTML: `offline/mathematics/sets-relations-functions/types-of-relations/index.html`_
