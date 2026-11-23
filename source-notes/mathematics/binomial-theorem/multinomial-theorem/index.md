---
title: "Multinomial Theorem - Advanced Topic"
source: "https://jeenotes.in/mathematics/binomial-theorem/multinomial-theorem/"
description: "Advanced expansion using multinomial theorem for JEE Advanced preparation"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 7"
html: "../../../../offline/mathematics/binomial-theorem/multinomial-theorem/index.html"
extracted: "2026-11-23"
---

> Advanced expansion using multinomial theorem for JEE Advanced preparation

# Multinomial Theorem (Advanced)

## Introduction

The **Multinomial Theorem** is a generalization of the Binomial Theorem. While binomial theorem deals with expansion of $(a + b)^n$, multinomial theorem expands $(x_1 + x_2 + x_3 + \cdots + x_k)^n$.

This is an **advanced topic** primarily for **JEE Advanced** and olympiad-level problems.

---

## Multinomial Theorem Statement

> **Multinomial Theorem**: For positive integer $n$ and any $k$ variables:
>
> $$\boxed{(x_1 + x_2 + \cdots + x_k)^n = \sum \frac{n!}{n_1! n_2! \cdots n_k!} x_1^{n_1} x_2^{n_2} \cdots x_k^{n_k}}$$

where the sum is taken over all non-negative integers $n_1, n_2, \ldots, n_k$ such that:

$$n_1 + n_2 + \cdots + n_k = n$$

### Interactive Demo: Visualize Multinomial Patterns

Explore how multinomial coefficients extend Pascal’s Triangle.

---

## Multinomial Coefficient

The coefficient $\frac{n!}{n_1! n_2! \cdots n_k!}$ is called the **multinomial coefficient**, denoted:

> $$\boxed{\binom{n}{n_1, n_2, \ldots, n_k} = \frac{n!}{n_1! n_2! \cdots n_k!}}$$

**Special Cases**:

- When $k = 2$: $\binom{n}{n_1, n_2} = \binom{n}{n_1} = \frac{n!}{n_1! n_2!}$ (Binomial coefficient)
- When $k = 3$: $\binom{n}{n_1, n_2, n_3} = \frac{n!}{n_1! n_2! n_3!}$ (Trinomial coefficient)

---

## Trinomial Expansion

The most common case after binomial is **trinomial expansion**:

> $$\boxed{(a + b + c)^n = \sum_{p+q+r=n} \frac{n!}{p! q! r!} a^p b^q c^r}$$

where $p, q, r \geq 0$ and $p + q + r = n$.

### Example: $(a + b + c)^2$

$$\begin{align}
(a + b + c)^2 &= a^2 + b^2 + c^2 + 2ab + 2bc + 2ca
\end{align}$$

**Using multinomial theorem**:

- Term $a^2$: $\frac{2!}{2!0!0!}a^2 = 1 \cdot a^2$
- Term $b^2$: $\frac{2!}{0!2!0!}b^2 = 1 \cdot b^2$
- Term $c^2$: $\frac{2!}{0!0!2!}c^2 = 1 \cdot c^2$
- Term $ab$: $\frac{2!}{1!1!0!}ab = 2ab$
- Term $bc$: $\frac{2!}{0!1!1!}bc = 2bc$
- Term $ca$: $\frac{2!}{1!0!1!}ca = 2ca$

---

## Number of Terms

### Formula for Number of Terms

In the expansion of $(x_1 + x_2 + \cdots + x_k)^n$:

> $$\boxed{\text{Number of terms} = \binom{n + k - 1}{k - 1} = \binom{n + k - 1}{n}}$$

**Derivation**: This is equivalent to finding the number of non-negative integer solutions to:

$$n_1 + n_2 + \cdots + n_k = n$$

which is a classic “stars and bars” problem.

### Examples

1. $(a + b + c)^{10}$: Number of terms = $\binom{10+3-1}{3-1} = \binom{12}{2} = 66$
2. $(x + y + z + w)^5$: Number of terms = $\binom{5+4-1}{4-1} = \binom{8}{3} = 56$

---

## General Term in Trinomial

For $(x + y + z)^n$, the general term is:

> $$\boxed{T_{p,q,r} = \frac{n!}{p! q! r!} x^p y^q z^r}$$

where $p + q + r = n$ and $p, q, r \geq 0$.

---

## Finding Specific Terms

### Method 1: Direct Substitution

To find coefficient of $x^a y^b z^c$ in $(x + y + z)^n$:

1. Check if $a + b + c = n$
2. If yes, coefficient = $\frac{n!}{a! b! c!}$
3. If no, coefficient = 0

---

### Method 2: Grouping Method

To find coefficient in $(ax + by + cz)^n$:

**Coefficient of $x^p y^q z^r$** = $\frac{n!}{p! q! r!} a^p b^q c^r$

---

## Properties of Multinomial Coefficients

### Property 1: Sum of All Coefficients

> $$\boxed{\sum \binom{n}{n_1, n_2, \ldots, n_k} = k^n}$$

**Proof**: Put $x_1 = x_2 = \cdots = x_k = 1$ in multinomial theorem.

**Example**: Sum of all coefficients in $(a + b + c)^5 = 3^5 = 243$

---

### Property 2: Multinomial Identity

> $$\boxed{\sum_{n_1 + \cdots + n_k = n} \binom{n}{n_1, \ldots, n_k} = k^n}$$

---

### Property 3: Relationship with Binomial

$$\binom{n}{n_1, n_2, \ldots, n_k} = \binom{n}{n_1} \binom{n - n_1}{n_2} \binom{n - n_1 - n_2}{n_3} \cdots$$

---

## Advanced Applications

### Application 1: Greatest Coefficient

**To find greatest multinomial coefficient in $(x_1 + \cdots + x_k)^n$**:

The greatest coefficient occurs when the powers are as **equal as possible**.

If $n = kq + r$ where $0 \leq r < k$:

- $r$ terms get power $(q+1)$
- $(k-r)$ terms get power $q$

---

### Application 2: Coefficient of Specific Power

**Find coefficient of $x^m$ in $(1 + x + x^2 + \cdots + x^k)^n$**:

This requires generating functions and is related to partition theory.

---

## Memory Tricks

### 🎯 Multinomial Coefficient Pattern

**“Factorial on top, factorials below”**:

$$\frac{n!}{\text{product of factorials of individual powers}}$$

### 🎯 Number of Terms

**“Stars and Bars”**:

- $n$ stars (representing the power)
- $k-1$ bars (separating into $k$ groups)
- Total arrangements: $\binom{n+k-1}{k-1}$

### 🎯 Sum of Coefficients

**“Replace all variables with 1”**:
$(1 + 1 + \cdots + 1)^n = k^n$ where $k$ is number of terms.

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Wrong Factorial Arrangement

**Wrong**: Coefficient of $x^2y^3z^4$ in $(x+y+z)^9$ is $\frac{2!3!4!}{9!}$ ✗

**Correct**: Coefficient = $\frac{9!}{2!3!4!}$ ✓

**Remember**: Total factorial on **top**, individual factorials on **bottom**!

### ❌ Mistake 2: Forgetting Power Sum Condition

**Wrong**: Finding coefficient of $x^2y^3z^3$ in $(x+y+z)^7$ ✗

**Correct**: No such term exists since $2+3+3 = 8 \neq 7$ ✓

### ❌ Mistake 3: Incorrect Number of Terms Formula

**Wrong**: Number of terms in $(x+y+z)^n$ is $3n$ ✗

**Correct**: Number of terms = $\binom{n+2}{2}$ ✓

---

## Solved Examples

### Example 1: Trinomial Expansion (JEE Advanced)

**Expand $(x + 2y - 3z)^3$ completely.**

**Solution**:
Using $(a + b + c)^3 = \sum_{p+q+r=3} \frac{3!}{p!q!r!} a^p b^q c^r$

Here $a = x$, $b = 2y$, $c = -3z$

Terms where $p+q+r=3$:

| $p$ | $q$ | $r$ | Coefficient | Term |
| --- | --- | --- | --- | --- |
| 3 | 0 | 0 | $\frac{3!}{3!0!0!} = 1$ | $x^3$ |
| 0 | 3 | 0 | $\frac{3!}{0!3!0!} = 1$ | $(2y)^3 = 8y^3$ |
| 0 | 0 | 3 | $\frac{3!}{0!0!3!} = 1$ | $(-3z)^3 = -27z^3$ |
| 2 | 1 | 0 | $\frac{3!}{2!1!0!} = 3$ | $3x^2(2y) = 6x^2y$ |
| 2 | 0 | 1 | $\frac{3!}{2!0!1!} = 3$ | $3x^2(-3z) = -9x^2z$ |
| 1 | 2 | 0 | $\frac{3!}{1!2!0!} = 3$ | $3x(2y)^2 = 12xy^2$ |
| 0 | 2 | 1 | $\frac{3!}{0!2!1!} = 3$ | $3(2y)^2(-3z) = -36y^2z$ |
| 1 | 0 | 2 | $\frac{3!}{1!0!2!} = 3$ | $3x(-3z)^2 = 27xz^2$ |
| 0 | 1 | 2 | $\frac{3!}{0!1!2!} = 3$ | $3(2y)(-3z)^2 = 54yz^2$ |
| 1 | 1 | 1 | $\frac{3!}{1!1!1!} = 6$ | $6x(2y)(-3z) = -36xyz$ |

**Final Answer**:

$$x^3 + 8y^3 - 27z^3 + 6x^2y - 9x^2z + 12xy^2 - 36y^2z + 27xz^2 + 54yz^2 - 36xyz$$

---

### Example 2: Finding Coefficient (JEE Advanced)

**Find the coefficient of $x^3y^4z^2$ in the expansion of $(x + y + z)^9$.**

**Solution**:
Check: $3 + 4 + 2 = 9$ ✓

Coefficient = $\frac{9!}{3! \cdot 4! \cdot 2!}$

$$= \frac{362880}{6 \times 24 \times 2} = \frac{362880}{288} = 1260$$

---

### Example 3: Number of Terms (JEE Advanced)

**How many distinct terms are there in the expansion of $(a + b + c + d)^{10}$?**

**Solution**:
Using formula: Number of terms = $\binom{n+k-1}{k-1}$

Here $n = 10$, $k = 4$:

$$\text{Number of terms} = \binom{10+4-1}{4-1} = \binom{13}{3} = \frac{13 \times 12 \times 11}{6} = 286$$

---

### Example 4: Sum of Coefficients (JEE Advanced)

**Find the sum of all coefficients in $(2x - 3y + 4z)^{15}$.**

**Solution**:
Put $x = y = z = 1$:

Sum = $(2(1) - 3(1) + 4(1))^{15} = (2 - 3 + 4)^{15} = 3^{15}$

---

### Example 5: Coefficient with Powers (JEE Advanced)

**Find the coefficient of $x^2y^3z^4$ in $(2x - y + 3z)^9$.**

**Solution**:
Check: $2 + 3 + 4 = 9$ ✓

General term: $\frac{9!}{p!q!r!}(2x)^p(-y)^q(3z)^r$ where $p+q+r=9$

For $x^2y^3z^4$: $p=2, q=3, r=4$

Coefficient = $\frac{9!}{2!3!4!} \times 2^2 \times (-1)^3 \times 3^4$

$$= \frac{362880}{2 \times 6 \times 24} \times 4 \times (-1) \times 81$$

$$= 1260 \times 4 \times (-1) \times 81 = -408240$$

---

## Practice Problems

### Level 1: JEE Main/Advanced Basics

**Problem 1.1**: Find the number of terms in $(a + b + c)^8$.

<details><summary>Solution</summary><p>Number of terms = $\binom{8+3-1}{3-1} = \binom{10}{2} = 45$</p></details>

**Problem 1.2**: Find the coefficient of $abc$ in $(a + b + c)^3$.

<details><summary>Solution</summary><p>For $abc$: powers are $(1,1,1)$ and sum = 3 ✓</p><p>Coefficient = $\frac{3!}{1!1!1!} = 6$</p></details>

**Problem 1.3**: Find sum of all coefficients in $(x + y + z)^{10}$.

<details><summary>Solution</summary><p>Put $x = y = z = 1$: Sum = $(1+1+1)^{10} = 3^{10} = 59049$</p></details>

---

### Level 2: JEE Advanced

**Problem 2.1**: Find the coefficient of $x^2y^2z^2$ in $(x + y + z)^6$.

<details><summary>Solution</summary><p>Check: $2 + 2 + 2 = 6$ ✓</p><p>Coefficient = $\frac{6!}{2!2!2!} = \frac{720}{8} = 90$</p></details>

**Problem 2.2**: Find the greatest coefficient in $(1 + x + x^2)^{10}$.

<details><summary>Solution</summary><p>Rewrite as $(1 + x + x^2)^{10} = \sum \frac{10!}{p!q!r!} 1^p x^q (x^2)^r$</p><p>$= \sum \frac{10!}{p!q!r!} x^{q+2r}$ where $p+q+r=10$</p><p>Greatest multinomial coefficient when powers are most equal:
$p = q = r = 3$ with one being 4 is not possible since we need $p+q+r=10$.</p><p>Try: $p=4, q=3, r=3$: Coefficient = $\frac{10!}{4!3!3!} = 4200$</p><p>Or $p=3, q=4, r=3$: Same = $4200$</p><p>Or $p=3, q=3, r=4$: Same = $4200$</p><p>Greatest coefficient = $4200$</p></details>

**Problem 2.3**: In $(1 + x + x^2 + x^3)^{100}$, find the coefficient of $x^{200}$.

<details><summary>Solution</summary><p>$(1 + x + x^2 + x^3)^{100} = \sum \frac{100!}{n_0!n_1!n_2!n_3!} 1^{n_0} x^{n_1} (x^2)^{n_2} (x^3)^{n_3}$</p><p>where $n_0 + n_1 + n_2 + n_3 = 100$ and power of $x = n_1 + 2n_2 + 3n_3 = 200$</p><p>This is a complex partition problem. We need to count solutions to:</p><ul><li>$n_0 + n_1 + n_2 + n_3 = 100$</li><li>$n_1 + 2n_2 + 3n_3 = 200$</li></ul><p>From second: $n_1 = 200 - 2n_2 - 3n_3$</p><p>Substitute in first: $n_0 + 200 - 2n_2 - 3n_3 + n_2 + n_3 = 100$</p><p>$n_0 = -100 + n_2 + 2n_3$</p><p>Since $n_0 \geq 0$: $n_2 + 2n_3 \geq 100$</p><p>Also $n_1 \geq 0$: $2n_2 + 3n_3 \leq 200$</p><p>This requires systematic enumeration. (Advanced problem)</p></details>

---

### Level 3: Olympiad Level

**Problem 3.1**: Prove that the sum of all multinomial coefficients $\binom{n}{k_1, k_2, \ldots, k_m}$ where $k_1 + k_2 + \cdots + k_m = n$ equals $m^n$.

<details><summary>Solution</summary><p>Consider $(x_1 + x_2 + \cdots + x_m)^n = \sum \binom{n}{k_1,\ldots,k_m} x_1^{k_1} \cdots x_m^{k_m}$</p><p>Put $x_1 = x_2 = \cdots = x_m = 1$:</p><p>$(1 + 1 + \cdots + 1)^n = m^n = \sum \binom{n}{k_1,\ldots,k_m}$</p></details>

**Problem 3.2**: Find the coefficient of $x^{50}$ in $(1 + x + x^2 + \cdots + x^{10})^{10}$.

<details><summary>Solution</summary><p>Using generating functions:</p><p>$(1 + x + x^2 + \cdots + x^{10})^{10} = \left(\frac{1-x^{11}}{1-x}\right)^{10}$</p><p>$= (1-x^{11})^{10}(1-x)^{-10}$</p><p>$= \left[\sum_{k=0}^{10}\binom{10}{k}(-x^{11})^k\right] \left[\sum_{j=0}^{\infty}\binom{-10}{j}(-x)^j\right]$</p><p>$= \left[\sum_{k=0}^{10}\binom{10}{k}(-1)^k x^{11k}\right] \left[\sum_{j=0}^{\infty}\binom{j+9}{9}x^j\right]$</p><p>Coefficient of $x^{50}$: Need $11k + j = 50$</p><ul><li>$k=0, j=50$: $\binom{10}{0} \times 1 \times \binom{59}{9}$</li><li>$k=1, j=39$: $\binom{10}{1} \times (-1) \times \binom{48}{9}$</li><li>$k=2, j=28$: $\binom{10}{2} \times 1 \times \binom{37}{9}$</li><li>$k=3, j=17$: $\binom{10}{3} \times (-1) \times \binom{26}{9}$</li><li>$k=4, j=6$: $\binom{10}{4} \times 1 \times \binom{15}{9}$</li></ul><p>Sum these to get the coefficient.</p></details>

---

## Important Formulas Summary

| Property | Formula |
| --- | --- |
| Multinomial Expansion | $(x_1 + \cdots + x_k)^n = \sum \frac{n!}{n_1!\cdots n_k!}x_1^{n_1}\cdots x_k^{n_k}$ |
| Multinomial Coefficient | $\binom{n}{n_1,\ldots,n_k} = \frac{n!}{n_1! \cdots n_k!}$ |
| Number of Terms | $\binom{n+k-1}{k-1}$ |
| Sum of Coefficients | $k^n$ (put all variables = 1) |
| Trinomial | $(a+b+c)^n = \sum_{p+q+r=n}\frac{n!}{p!q!r!}a^pb^qc^r$ |

---

## Cross-References

- **Binomial Theorem**: Special case of multinomial → [Binomial Expansion](../binomial-expansion/index.md)
- **Combinatorics**: Stars and bars method → [Combinatorics](../../permutations-combinations/index.md)
- **Generating Functions**: Advanced applications → [Sequences and Series](../../sequences-series/index.md)

---

## Quick Revision Points

1. Multinomial generalizes binomial to multiple terms
2. Coefficient: Total factorial divided by individual factorials
3. Number of terms: Use stars and bars formula
4. Sum of coefficients: Replace all variables with 1
5. Always check if power sum equals $n$

---

*Last updated: October 28, 2025*

From TestGuru · our mock-test platform

## You've read Multinomial Theorem - Advanced Topic.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=binomial-theorem&tg_exam=jee-main&tg_page=%2Fmathematics%2Fbinomial-theorem%2Fmultinomial-theorem%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/binomial-theorem/multinomial-theorem/",this.page.identifier="/mathematics/binomial-theorem/multinomial-theorem/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="pascalTriangle" id="anim-pascalTriangle-1795396421329565732"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-pascalTriangle-1795396421329565732")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/binomial-theorem/multinomial-theorem/](https://jeenotes.in/mathematics/binomial-theorem/multinomial-theorem/) · raw HTML: `offline/mathematics/binomial-theorem/multinomial-theorem/index.html`_
