---
title: "Binomial Theorem for Positive Integer"
source: "https://jeenotes.in/mathematics/binomial-theorem/binomial-expansion/"
description: "Complete guide to binomial expansion for positive integral index with formulas, properties, and JEE problems"
updated: "2026-08-01"
reading_time: "6 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 7"
html: "../../../../offline/mathematics/binomial-theorem/binomial-expansion/index.html"
extracted: "2026-11-23"
---

> Complete guide to binomial expansion for positive integral index with formulas, properties, and JEE problems

# Binomial Theorem for Positive Integer

## Introduction

The **Binomial Theorem** provides a formula for expanding $(a + b)^n$ where $n$ is a positive integer. This theorem is fundamental in algebra and has numerous applications in JEE problems.

---

## Binomial Theorem Statement

> **Binomial Theorem**: For any positive integer $n$,
>
> $$\boxed{(a + b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n}$$
>
> Or equivalently,
>
> $$\boxed{(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r}$$

where $\binom{n}{r} = \frac{n!}{r!(n-r)!} = {}^nC_r$

---

## Key Properties

### 1. Number of Terms

- The expansion of $(a + b)^n$ has exactly **$(n + 1)$ terms**

### 2. Powers in Each Term

> $$\boxed{\text{Sum of powers of } a \text{ and } b \text{ in each term} = n}$$

### 3. Binomial Coefficients

The coefficients $\binom{n}{0}, \binom{n}{1}, \binom{n}{2}, \ldots, \binom{n}{n}$ are called **binomial coefficients**.

---

## Important Forms

### Form 1: $(1 + x)^n$

$$\boxed{(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots + x^n}$$

### Form 2: $(1 - x)^n$

$$\boxed{(1 - x)^n = 1 - nx + \frac{n(n-1)}{2!}x^2 - \frac{n(n-1)(n-2)}{3!}x^3 + \cdots + (-1)^n x^n}$$

### Form 3: $(x + a)^n$

$$\boxed{(x + a)^n = x^n + nx^{n-1}a + \frac{n(n-1)}{2!}x^{n-2}a^2 + \cdots + a^n}$$

---

## Memory Tricks

### 🎯 Pascal’s Triangle Method

### Interactive Demo: Visualize Pascal’s Triangle

Explore binomial coefficients through Pascal’s Triangle visualization.

Remember the coefficients using Pascal’s Triangle:

```fallback
n=0:                1
n=1:              1   1
n=2:            1   2   1
n=3:          1   3   3   1
n=4:        1   4   6   4   1
n=5:      1   5  10  10   5   1
```

Each number is the sum of the two numbers directly above it.

### 🎯 Power Pattern

**“Powers go opposite ways”**

- Power of first term: decreases from $n$ to $0$
- Power of second term: increases from $0$ to $n$
- Remember: “Down-Up” pattern

### 🎯 Coefficient Formula

**“nCr = n Choose r”**

- Start with $n$ on top
- $r$ items in the denominator on right
- $(n-r)$ items on left
- Example: $\binom{5}{2} = \frac{5 \times 4}{2 \times 1}$

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting the Factorial Division

**Wrong**: $(x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$ ✗ (coefficients are wrong)

**Correct**: Use $\binom{3}{r}$ for coefficients:

- $\binom{3}{0} = 1$, $\binom{3}{1} = 3$, $\binom{3}{2} = 3$, $\binom{3}{3} = 1$

### ❌ Mistake 2: Sign Errors in $(a - b)^n$

**Wrong**: $(x - 2)^3 = x^3 - 3x^2(2) - 3x(4) - 8$ ✗

**Correct**: $(x - 2)^3 = x^3 + 3x^2(-2) + 3x(-2)^2 + (-2)^3$
$= x^3 - 6x^2 + 12x - 8$ ✓

**Tip**: Replace $b$ with $(-b)$ and apply the theorem.

### ❌ Mistake 3: Power Sum Not Equal to $n$

**Wrong**: In $(x + y)^5$, term $x^3y^3$ exists ✗

**Correct**: Sum of powers must be 5, so $x^3y^3$ (sum = 6) doesn’t exist ✓

### ❌ Mistake 4: Incorrect Coefficient Calculation

**Wrong**: $\binom{6}{2} = 6 \times 2 = 12$ ✗

**Correct**: $\binom{6}{2} = \frac{6!}{2!4!} = \frac{6 \times 5}{2 \times 1} = 15$ ✓

---

## Solved Examples

### Example 1: Basic Expansion (JEE Main Level)

**Expand $(2x + 3y)^4$ using binomial theorem.**

**Solution**:
Using $(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r$

Here $a = 2x$, $b = 3y$, $n = 4$

$$\begin{align}
(2x + 3y)^4 &= \binom{4}{0}(2x)^4 + \binom{4}{1}(2x)^3(3y) + \binom{4}{2}(2x)^2(3y)^2 \\
&\quad + \binom{4}{3}(2x)(3y)^3 + \binom{4}{4}(3y)^4 \\
&= 1(16x^4) + 4(8x^3)(3y) + 6(4x^2)(9y^2) \\
&\quad + 4(2x)(27y^3) + 1(81y^4) \\
&= 16x^4 + 96x^3y + 216x^2y^2 + 216xy^3 + 81y^4
\end{align}$$

---

### Example 2: Finding Specific Term (JEE Main Level)

**Find the coefficient of $x^5$ in the expansion of $(2 + 3x)^7$.**

**Solution**:
General term: $T_{r+1} = \binom{7}{r}(2)^{7-r}(3x)^r = \binom{7}{r}2^{7-r}3^r x^r$

For term containing $x^5$: $r = 5$

$$\begin{align}
T_6 &= \binom{7}{5}(2)^{2}(3)^5 x^5 \\
&= 21 \times 4 \times 243 \times x^5 \\
&= 20412x^5
\end{align}$$

**Coefficient of $x^5$ = 20412**

---

### Example 3: Numerical Calculation (JEE Advanced Level)

**Using binomial theorem, find the value of $(1.01)^5$ correct to 4 decimal places.**

**Solution**:
$(1.01)^5 = (1 + 0.01)^5$

$$\begin{align}
(1 + x)^5 &= 1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5
\end{align}$$

Substituting $x = 0.01$:

$$\begin{align}
(1.01)^5 &= 1 + 5(0.01) + 10(0.01)^2 + 10(0.01)^3 + 5(0.01)^4 + (0.01)^5 \\
&= 1 + 0.05 + 0.001 + 0.00001 + 0.0000005 + 0.00000001 \\
&= 1.0510 \text{ (correct to 4 decimal places)}
\end{align}$$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Expand $(x + 2)^5$ using binomial theorem.

<details><summary>Solution</summary>$$\begin{align}
(x + 2)^5 &amp;= x^5 + 5x^4(2) + 10x^3(4) + 10x^2(8) + 5x(16) + 32 \\
&amp;= x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32
\end{align}$$</details>

**Problem 1.2**: Find the number of terms in the expansion of $(3x - 2y)^{10}$.

<details><summary>Solution</summary><p>Number of terms = $n + 1 = 10 + 1 = 11$</p></details>

**Problem 1.3**: Write the general term in the expansion of $(a + b)^{12}$.

<details><summary>Solution</summary><p>General term: $T_{r+1} = \binom{12}{r}a^{12-r}b^r$ where $r = 0, 1, 2, \ldots, 12$</p></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Find the coefficient of $x^6$ in the expansion of $(1 + 2x)^{10}$.

<details><summary>Solution</summary><p>$T_{r+1} = \binom{10}{r}(2x)^r = \binom{10}{r}2^r x^r$</p><p>For $x^6$: $r = 6$</p><p>Coefficient $= \binom{10}{6}2^6 = 210 \times 64 = 13440$</p></details>

**Problem 2.2**: If the coefficients of $x^7$ and $x^8$ in $(2 + x/3)^n$ are equal, find $n$.

<details><summary>Solution</summary><p>Coefficient of $x^7$: $\binom{n}{7}2^{n-7}\left(\frac{1}{3}\right)^7$</p><p>Coefficient of $x^8$: $\binom{n}{8}2^{n-8}\left(\frac{1}{3}\right)^8$</p><p>Setting them equal:</p>$$\binom{n}{7}2^{n-7} \cdot 3^{-7} = \binom{n}{8}2^{n-8} \cdot 3^{-8}$$

$$\frac{n!}{7!(n-7)!} \cdot 2 = \frac{n!}{8!(n-8)!} \cdot 3$$

$$\frac{8}{n-7} \cdot 2 = 3$$

$$16 = 3(n - 7)$$

$$n = \frac{16}{3} + 7 = \frac{37}{3}$$<p>Wait, this should give integer. Let me recalculate:</p>$$\binom{n}{7} \cdot 2 \cdot 3 = \binom{n}{8}$$

$$\frac{n!}{7!(n-7)!} \cdot 6 = \frac{n!}{8!(n-8)!}$$

$$\frac{8!}{7!} \cdot \frac{(n-8)!}{(n-7)!} = \frac{1}{6}$$

$$8 \cdot \frac{1}{n-7} = \frac{1}{6}$$

$$n - 7 = 48$$<p>, so $n = 55$</p></details>

**Problem 2.3**: Calculate $(0.99)^6$ using binomial theorem (up to 4 decimal places).

<details><summary>Solution</summary><p>$(0.99)^6 = (1 - 0.01)^6$</p><p>$= 1 - 6(0.01) + 15(0.01)^2 - 20(0.01)^3 + \ldots$</p><p>$= 1 - 0.06 + 0.0015 - 0.00002 + \ldots$</p><p>$= 0.9415$ (to 4 decimal places)</p></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Find the term independent of $x$ in the expansion of $\left(2x^2 - \frac{1}{x}\right)^{12}$.

<details><summary>Solution</summary><p>General term: $T_{r+1} = \binom{12}{r}(2x^2)^{12-r}\left(-\frac{1}{x}\right)^r$</p><p>$= \binom{12}{r}2^{12-r}(-1)^r x^{24-2r-r}$</p><p>$= \binom{12}{r}2^{12-r}(-1)^r x^{24-3r}$</p><p>For term independent of $x$: $24 - 3r = 0 \Rightarrow r = 8$</p><p>$T_9 = \binom{12}{8}2^4(-1)^8 = 495 \times 16 \times 1 = 7920$</p></details>

**Problem 3.2**: If the sum of coefficients in the expansion of $(x + y)^n$ is 4096, find the greatest coefficient.

<details><summary>Solution</summary><p>Sum of coefficients = Put $x = y = 1$: $(1 + 1)^n = 2^n = 4096$</p><p>So $n = 12$</p><p>For $(x + y)^{12}$, greatest coefficient is the middle one: $\binom{12}{6} = 924$</p></details>

**Problem 3.3**: Prove that $\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 2^n$.

<details><summary>Solution</summary><p>Consider $(1 + 1)^n = \sum_{r=0}^{n}\binom{n}{r}(1)^{n-r}(1)^r = \sum_{r=0}^{n}\binom{n}{r}$</p><p>Therefore, $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 2^n$</p></details>

---

## Cross-References

- **Sequences and Series**: Binomial coefficients form interesting sequences → [Sequences and Series](../../sequences-series/index.md)
- **Differentiation**: Binomial theorem helps in differential calculus → [Differentiation](../../limits-continuity-differentiability/index.md)
- **General Term**: Learn about finding specific terms → [General Term](../general-term/index.md)
- **Binomial Coefficients**: Properties and identities → [Binomial Coefficients](../binomial-coefficients/index.md)

---

## Quick Revision Points

1. $(a + b)^n$ has $(n + 1)$ terms
2. General term: $T_{r+1} = \binom{n}{r}a^{n-r}b^r$
3. Sum of powers in each term = $n$
4. For $(1 + x)^n$: Put $a = 1, b = x$
5. For $(1 - x)^n$: Replace $x$ with $-x$
6. Pascal’s Triangle gives binomial coefficients
7. Sum of all coefficients: Put $a = b = 1$

---

*Last updated: October 15, 2025*

From TestGuru · our mock-test platform

## You've read Binomial Theorem for Positive Integer.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=binomial-theorem&tg_exam=jee-main&tg_page=%2Fmathematics%2Fbinomial-theorem%2Fbinomial-expansion%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/binomial-theorem/binomial-expansion/",this.page.identifier="/mathematics/binomial-theorem/binomial-expansion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="pascalTriangle" id="anim-pascalTriangle-1795396421319295157"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-pascalTriangle-1795396421319295157")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/binomial-theorem/binomial-expansion/](https://jeenotes.in/mathematics/binomial-theorem/binomial-expansion/) · raw HTML: `offline/mathematics/binomial-theorem/binomial-expansion/index.html`_
