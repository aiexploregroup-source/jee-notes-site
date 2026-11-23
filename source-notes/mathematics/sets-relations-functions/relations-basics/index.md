---
title: "Introduction to Relations"
source: "https://jeenotes.in/mathematics/sets-relations-functions/relations-basics/"
description: "Learn about Cartesian products, relations, domain, co-domain, and range for JEE Mathematics."
updated: "2026-08-01"
reading_time: "5 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 9"
html: "../../../../offline/mathematics/sets-relations-functions/relations-basics/index.html"
extracted: "2026-11-23"
---

> Learn about Cartesian products, relations, domain, co-domain, and range for JEE Mathematics.

## Introduction

A **relation** describes a connection between elements of two sets. Before understanding relations, we need to understand the Cartesian product.

---

## Cartesian Product

### Definition

The **Cartesian product** of sets $A$ and $B$, denoted $A \times B$, is the set of all ordered pairs $(a, b)$ where $a \in A$ and $b \in B$.

$$\boxed{A \times B = \{(a, b) : a \in A \text{ and } b \in B\}}$$

### Example

If $A = \{1, 2\}$ and $B = \{x, y\}$:

$$A \times B = \{(1, x), (1, y), (2, x), (2, y)\}$$

### Properties

1. **Not commutative**: $A \times B \neq B \times A$ (unless $A = B$ or one is empty)
2. **Cardinality**: $|A \times B| = |A| \times |B|$
3. **Empty product**: $A \times \emptyset = \emptyset = \emptyset \times A$

### Graphical Representation

For $A = \{1, 2\}$ and $B = \{a, b\}$:

```fallback
B
  │
b │  •  •
  │
a │  •  •
  │
  └──────── A
     1  2
```

Each point represents an ordered pair.

> **★ Key point · Ordered Pairs**
>
> In an ordered pair $(a, b)$:
>
> - Order matters: $(1, 2) \neq (2, 1)$

> - $(a, b) = (c, d) \iff a = c$ AND $b = d$

---

## What is a Relation?

### Definition

A **relation** $R$ from set $A$ to set $B$ is a subset of $A \times B$.

$$R \subseteq A \times B$$

If $(a, b) \in R$, we write $aRb$ and say “$a$ is related to $b$”.

### Example

Let $A = \{1, 2, 3\}$ and $B = \{1, 4, 9\}$.

Define relation $R$: “$a$ is the square root of $b$”

$$R = \{(1, 1), (2, 4), (3, 9)\}$$

Here, $1R1$, $2R4$, $3R9$ are true statements.

### Relation on a Set

A relation $R$ from set $A$ to itself ($R \subseteq A \times A$) is called a **relation on $A$**.

**Example:** On $A = \{1, 2, 3\}$, define $R$: “$a$ divides $b$”

$$R = \{(1, 1), (1, 2), (1, 3), (2, 2), (3, 3)\}$$

---

## Domain, Co-domain, and Range

### Definitions

For a relation $R$ from $A$ to $B$:

| Term | Definition | Notation |
| --- | --- | --- |
| **Domain** | Set of first elements of ordered pairs in $R$ | $\text{Dom}(R)$ |
| **Co-domain** | The set $B$ | - |
| **Range** | Set of second elements of ordered pairs in $R$ | $\text{Range}(R)$ |

### Important Relationship

$$\boxed{\text{Range}(R) \subseteq \text{Co-domain}}$$

The range is always a subset of the co-domain!

### Example

Let $A = \{1, 2, 3, 4\}$ and $B = \{a, b, c, d, e\}$.

$R = \{(1, a), (2, b), (3, c), (1, b)\}$

- **Domain** = $\{1, 2, 3\}$ (first elements)
- **Co-domain** = $\{a, b, c, d, e\}$ (the set $B$)
- **Range** = $\{a, b, c\}$ (second elements)

Note: 4 is not in the domain, and $d, e$ are not in the range.

> **⚠ Trap · Common Confusion**
>
> **Range ≠ Co-domain** (in general)
>
> Range only includes elements that are actually “hit” by the relation.

---

## Ways to Represent Relations

### 1. Roster Form

List all ordered pairs:

$$R = \{(1, 2), (2, 4), (3, 6)\}$$

### 2. Set-Builder Form

Describe the relationship:

$$R = \{(a, b) : b = 2a, a \in \{1, 2, 3\}\}$$

### 3. Arrow Diagram

Draw arrows from elements of $A$ to related elements of $B$:

```fallback
A          B
  1  ──────► 2
  2  ──────► 4
  3  ──────► 6
```

### 4. Matrix Representation

For $A = \{a_1, a_2, ..., a_m\}$ and $B = \{b_1, b_2, ..., b_n\}$:

Create an $m \times n$ matrix $M$ where:

$$M_{ij} = \begin{cases} 1 & \text{if } (a_i, b_j) \in R \\ 0 & \text{otherwise} \end{cases}$$

**Example:** For $R = \{(1, a), (2, b), (2, c)\}$ on $A = \{1, 2\}$ and $B = \{a, b, c\}$:

$$M = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$$

---

## Number of Relations

### Counting Relations

Since a relation from $A$ to $B$ is a subset of $A \times B$:

$$\boxed{\text{Number of relations} = 2^{|A| \times |B|}}$$

**Example:** If $|A| = 2$ and $|B| = 3$:

- $|A \times B| = 6$
- Number of relations = $2^6 = 64$

### Special Cases

| Relation Type | Count |
| --- | --- |
| Empty relation | 1 |
| Universal relation | 1 |
| Non-empty relations | $2^{mn} - 1$ |

---

## Inverse of a Relation

### Definition

The **inverse** of relation $R$ from $A$ to $B$, denoted $R^{-1}$, is:

$$R^{-1} = \{(b, a) : (a, b) \in R\}$$

$R^{-1}$ is a relation from $B$ to $A$.

### Example

If $R = \{(1, a), (2, b), (3, a)\}$

Then $R^{-1} = \{(a, 1), (b, 2), (a, 3)\}$

### Properties

1. $(R^{-1})^{-1} = R$
2. Domain of $R^{-1}$ = Range of $R$
3. Range of $R^{-1}$ = Domain of $R$

### Interactive Demo: Visualize Relations

Explore relations, domain, range, and inverse relations graphically.

---

## Practice Problems

1. Find all ordered pairs in $A \times B$ where $A = \{1, 2\}$ and $B = \{3\}$.
2. Let $R = \{(x, y) : y = x + 1\}$ on $A = \{0, 1, 2, 3\}$. List all elements of $R$.
3. Find the domain and range of $R = \{(1, 4), (2, 5), (3, 6), (4, 6)\}$.
4. How many relations are possible from a set of 3 elements to a set of 2 elements?

> **↗ Connection · Quick Check**
>
> If $R$ is a relation from $A$ to $B$ with $|A| = 3$ and $|B| = 4$, what is the maximum number of ordered pairs in $R$?

---

From TestGuru · our mock-test platform

## You've read Introduction to Relations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sets-relations-functions&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsets-relations-functions%2Frelations-basics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sets-relations-functions/relations-basics/",this.page.identifier="/mathematics/sets-relations-functions/relations-basics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396422160941134"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396422160941134")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sets-relations-functions/relations-basics/](https://jeenotes.in/mathematics/sets-relations-functions/relations-basics/) · raw HTML: `offline/mathematics/sets-relations-functions/relations-basics/index.html`_
