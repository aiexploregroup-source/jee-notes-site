---
title: "Set Operations"
source: "https://jeenotes.in/mathematics/sets-relations-functions/set-operations/"
description: "Master union, intersection, complement, De Morgan's laws, and power sets for JEE Mathematics."
updated: "2026-08-01"
reading_time: "6 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 9"
html: "../../../../offline/mathematics/sets-relations-functions/set-operations/index.html"
extracted: "2026-11-23"
---

> Master union, intersection, complement, De Morgan's laws, and power sets for JEE Mathematics.

## Introduction

Set operations allow us to combine, compare, and manipulate sets. These operations form the basis of logic, probability, and computer science.

## Interactive: Visualize Set Operations

Click the operation buttons to see the corresponding Venn diagram region highlighted:

---

## Union of Sets

### Definition

The **union** of sets $A$ and $B$ is the set of elements that belong to $A$ OR $B$ (or both).

$$\boxed{A \cup B = \{x : x \in A \text{ or } x \in B\}}$$

### Venn Diagram

> **◐ In simple terms · A ∪ B Visualization**
>
> **Shaded region:** Everything inside A OR B (or both)
>
> | Region | Included? |

> | --- | --- |

> | Only in A | Yes |

> | Only in B | Yes |

> | In both A and B | Yes |

> | Outside both | No |

### Example

If $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$:

$$A \cup B = \{1, 2, 3, 4, 5\}$$

(Note: 3 appears only once!)

---

## Intersection of Sets

### Definition

The **intersection** of sets $A$ and $B$ is the set of elements that belong to BOTH $A$ AND $B$.

$$\boxed{A \cap B = \{x : x \in A \text{ and } x \in B\}}$$

### Venn Diagram

> **◐ In simple terms · A ∩ B Visualization**
>
> **Shaded region:** Only the overlapping part (elements in BOTH A and B)
>
> | Region | Included? |

> | --- | --- |

> | Only in A | No |

> | Only in B | No |

> | In both A and B | Yes |

> | Outside both | No |

### Example

If $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$:

$$A \cap B = \{3\}$$

### Disjoint Sets

Sets $A$ and $B$ are **disjoint** if they have no common elements:

$$A \cap B = \emptyset$$

---

## Difference of Sets

### Definition

The **difference** $A - B$ (or $A \setminus B$) is the set of elements in $A$ but not in $B$.

$$\boxed{A - B = \{x : x \in A \text{ and } x \notin B\}}$$

### Example

If $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5\}$:

$$A - B = \{1, 2\}$$

$$B - A = \{5\}$$

> **⚠ Trap · Not Commutative!**
>
> $A - B \neq B - A$ in general. These are different sets!

---

## Complement of a Set

### Definition

The **complement** of set $A$ (denoted $A'$ or $\bar{A}$ or $A^c$) with respect to universal set $U$ is:

$$\boxed{A' = \{x : x \in U \text{ and } x \notin A\} = U - A}$$

### Example

If $U = \{1, 2, 3, 4, 5\}$ and $A = \{1, 2\}$:

$$A' = \{3, 4, 5\}$$

### Properties of Complement

1. $(A')' = A$ (double complement)
2. $A \cup A' = U$ (exhaustive)
3. $A \cap A' = \emptyset$ (mutually exclusive)
4. $U' = \emptyset$
5. $\emptyset' = U$

---

## Symmetric Difference

The **symmetric difference** $A \triangle B$ contains elements in either $A$ or $B$ but not both:

$$A \triangle B = (A - B) \cup (B - A) = (A \cup B) - (A \cap B)$$

---

## Algebraic Properties

### Commutative Laws

$$A \cup B = B \cup A$$

$$A \cap B = B \cap A$$

### Associative Laws

$$(A \cup B) \cup C = A \cup (B \cup C)$$

$$(A \cap B) \cap C = A \cap (B \cap C)$$

### Distributive Laws

$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$

$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$

### Identity Laws

$$A \cup \emptyset = A$$

$$A \cap U = A$$

### Domination Laws

$$A \cup U = U$$

$$A \cap \emptyset = \emptyset$$

### Idempotent Laws

$$A \cup A = A$$

$$A \cap A = A$$

### Absorption Laws

$$A \cup (A \cap B) = A$$

$$A \cap (A \cup B) = A$$

---

## De Morgan’s Laws

### The Laws

$$\boxed{(A \cup B)' = A' \cap B'}$$

$$\boxed{(A \cap B)' = A' \cup B'}$$

### How to Remember

**“Break the bracket, change the operation, complement each set”**

| Original | Step 1: Complement | Step 2: Change Operation | Step 3: Complement Each |
| --- | --- | --- | --- |
| $A \cup B$ | $(A \cup B)'$ | $\cap$ | $A' \cap B'$ |
| $A \cap B$ | $(A \cap B)'$ | $\cup$ | $A' \cup B'$ |

### Generalized De Morgan’s Laws

For any number of sets:

$$(A_1 \cup A_2 \cup ... \cup A_n)' = A_1' \cap A_2' \cap ... \cap A_n'$$

$$(A_1 \cap A_2 \cap ... \cap A_n)' = A_1' \cup A_2' \cup ... \cup A_n'$$

> **★ Key point · JEE Tip**
>
> De Morgan’s Laws are frequently tested! Practice converting between union-complement and intersection-complement forms.

---

## Power Set

### Definition

The **power set** of $A$, denoted $P(A)$ or $2^A$, is the set of ALL subsets of $A$.

$$P(A) = \{S : S \subseteq A\}$$

### Examples

1. If $A = \{1\}$:

   $$P(A) = \{\emptyset, \{1\}\}$$
2. If $A = \{1, 2\}$:

   $$P(A) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$$
3. If $A = \{1, 2, 3\}$:

   $$P(A) = \{\emptyset, \{1\}, \{2\}, \{3\}, \{1,2\}, \{1,3\}, \{2,3\}, \{1,2,3\}\}$$

### Cardinality of Power Set

$$\boxed{|P(A)| = 2^{|A|} = 2^n}$$

where $n = |A|$ is the number of elements in $A$.

**Why 2^n?** Each element has 2 choices: be in the subset or not.

### Power Set Properties

1. $\emptyset \in P(A)$ for any set $A$
2. $A \in P(A)$ for any set $A$
3. If $A \subseteq B$, then $P(A) \subseteq P(B)$

---

## Cardinality Formulas

### Two Sets

$$|A \cup B| = |A| + |B| - |A \cap B|$$

### Three Sets

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |A \cap C| + |A \cap B \cap C|$$

### General Inclusion-Exclusion Principle

For $n$ sets:

$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum|A_i| - \sum|A_i \cap A_j| + \sum|A_i \cap A_j \cap A_k| - ... + (-1)^{n+1}|A_1 \cap ... \cap A_n|$$

---

## Calculations

### Example 1: Using Inclusion-Exclusion

**Problem:** In a class of 60 students, 35 study Math, 40 study Physics, and 20 study both. How many study neither?

**Solution:**

$$|M \cup P| = |M| + |P| - |M \cap P| = 35 + 40 - 20 = 55$$

Students studying neither = $60 - 55 = 5$

### Example 2: Using De Morgan’s Law

**Problem:** If $n(U) = 50$, $n(A) = 30$, $n(B) = 25$, $n(A \cap B) = 15$, find $n(A' \cap B')$.

**Solution:**

$$A' \cap B' = (A \cup B)' \text{ (De Morgan)}$$

$$n(A \cup B) = 30 + 25 - 15 = 40$$

$$n(A' \cap B') = n(U) - n(A \cup B) = 50 - 40 = 10$$

---

## Practice Problems

1. If $A = \{1, 2, 3, 4\}$ and $B = \{2, 4, 6\}$, find $A \cup B$, $A \cap B$, $A - B$, $B - A$.
2. Verify De Morgan’s Laws for $A = \{1, 2\}$ and $B = \{2, 3\}$ with $U = \{1, 2, 3, 4\}$.
3. How many elements are in $P(P(\{a\}))$? (Power set of power set)

> **↗ Connection · Quick Check**
>
> If $|A| = 4$, how many elements does $P(A)$ have? How many subsets of $P(A)$ are there?

---

From TestGuru · our mock-test platform

## You've read Set Operations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sets-relations-functions&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsets-relations-functions%2Fset-operations%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sets-relations-functions/set-operations/",this.page.identifier="/mathematics/sets-relations-functions/set-operations/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="setOperations" id="anim-setOperations-1795396422157773243"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-setOperations-1795396422157773243")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sets-relations-functions/set-operations/](https://jeenotes.in/mathematics/sets-relations-functions/set-operations/) · raw HTML: `offline/mathematics/sets-relations-functions/set-operations/index.html`_
