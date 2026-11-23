---
title: "Special Series and Standard Summations"
source: "https://jeenotes.in/mathematics/sequences-series/special-series/"
description: "Master special series - sum of natural numbers, squares, cubes, and combined summations for JEE"
updated: "2025-12-26"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 10"
html: "../../../../offline/mathematics/sequences-series/special-series/index.html"
extracted: "2026-11-23"
---

> Master special series - sum of natural numbers, squares, cubes, and combined summations for JEE

### Interactive Demo: Visualize Special Series

Explore how different standard summations grow and compare to each other.

## Real-Life Hook: The Young Gauss Story

Legend says that when Carl Friedrich Gauss was just 10 years old, his teacher asked the class to sum all numbers from 1 to 100, expecting it would keep them busy. Within seconds, Gauss wrote down **5050** on his slate!

His secret? He noticed: $1 + 100 = 101$, $2 + 99 = 101$, &mldr;, $50 + 51 = 101$ (50 pairs)

So sum = $50 \times 101 = 5050$!

This insight leads to the formula: $1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$

Special series formulas are the **speed keys** for JEE - they turn tedious calculations into one-line solutions!

---

## Standard Summation Formulas

### 1. Sum of First n Natural Numbers

$$\boxed{\sum_{k=1}^{n} k = 1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}}$$

**Derivation (Gauss Method):**

$S = 1 + 2 + 3 + \cdots + n$

$S = n + (n-1) + (n-2) + \cdots + 1$ (reverse order)

Adding: $2S = (n+1) + (n+1) + \cdots + (n+1)$ ($n$ times)

$2S = n(n+1)$

$S = \frac{n(n+1)}{2}$

**Memory Trick:** “**N**umber **N**ext **H**alf” → $\frac{n(n+1)}{2}$

---

### 2. Sum of First n Squares

$$\boxed{\sum_{k=1}^{n} k^2 = 1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{n(n+1)(2n+1)}{6}}$$

**Memory Trick:** “**N**, **N**ext, **D**ouble-**N**ext, **S**ix” → $\frac{n(n+1)(2n+1)}{6}$

**Quick Check:** For $n=3$: $1 + 4 + 9 = 14 = \frac{3 \times 4 \times 7}{6} = \frac{84}{6} = 14$ ✓

---

### 3. Sum of First n Cubes

$$\boxed{\sum_{k=1}^{n} k^3 = 1^3 + 2^3 + 3^3 + \cdots + n^3 = \left[\frac{n(n+1)}{2}\right]^2}$$

**Beautiful Result:** Sum of cubes = (Sum of natural numbers)²!

**Memory Trick:** “Cubes = Square of Sum” → $\left(\sum k\right)^2$

**Quick Check:** For $n=4$: $1 + 8 + 27 + 64 = 100 = \left[\frac{4 \times 5}{2}\right]^2 = 10^2 = 100$ ✓

---

### 4. Sum of First n Even Numbers

$$\boxed{\sum_{k=1}^{n} 2k = 2 + 4 + 6 + \cdots + 2n = n(n+1)}$$

**Derivation:** $2(1 + 2 + 3 + \cdots + n) = 2 \times \frac{n(n+1)}{2} = n(n+1)$

---

### 5. Sum of First n Odd Numbers

$$\boxed{\sum_{k=1}^{n} (2k-1) = 1 + 3 + 5 + \cdots + (2n-1) = n^2}$$

**Beautiful Pattern:** Sum of first $n$ odd numbers = $n^2$!

**Visualization:**

- 1 = 1²
- 1 + 3 = 4 = 2²
- 1 + 3 + 5 = 9 = 3²
- 1 + 3 + 5 + 7 = 16 = 4²

---

## Derivations (JEE Advanced)

### Derivation 1: Sum of Squares Using Telescoping

Consider: $(k+1)^3 - k^3 = 3k^2 + 3k + 1$

Summing from $k=1$ to $n$:

$$\sum_{k=1}^{n} [(k+1)^3 - k^3] = \sum_{k=1}^{n} (3k^2 + 3k + 1)$$

Left side (telescoping): $(n+1)^3 - 1^3 = (n+1)^3 - 1$

Right side: $3\sum k^2 + 3\sum k + \sum 1 = 3\sum k^2 + 3 \times \frac{n(n+1)}{2} + n$

$$(n+1)^3 - 1 = 3\sum k^2 + \frac{3n(n+1)}{2} + n$$

$$n^3 + 3n^2 + 3n + 1 - 1 = 3\sum k^2 + \frac{3n(n+1)}{2} + n$$

$$n^3 + 3n^2 + 3n = 3\sum k^2 + \frac{3n(n+1)}{2} + n$$

$$n^3 + 3n^2 + 2n = 3\sum k^2 + \frac{3n(n+1)}{2}$$

$$n(n^2 + 3n + 2) = 3\sum k^2 + \frac{3n(n+1)}{2}$$

$$n(n+1)(n+2) = 3\sum k^2 + \frac{3n(n+1)}{2}$$

$$3\sum k^2 = n(n+1)(n+2) - \frac{3n(n+1)}{2}$$

$$3\sum k^2 = n(n+1)\left[n+2 - \frac{3}{2}\right] = n(n+1)\left[\frac{2n+4-3}{2}\right] = \frac{n(n+1)(2n+1)}{2}$$

$$\sum k^2 = \frac{n(n+1)(2n+1)}{6}$$

✓

---

### Derivation 2: Sum of Cubes

Consider: $(k+1)^4 - k^4 = 4k^3 + 6k^2 + 4k + 1$

Summing from $k=1$ to $n$:

$$(n+1)^4 - 1 = 4\sum k^3 + 6\sum k^2 + 4\sum k + n$$

Substitute known formulas:

$$n^4 + 4n^3 + 6n^2 + 4n = 4\sum k^3 + 6 \times \frac{n(n+1)(2n+1)}{6} + 4 \times \frac{n(n+1)}{2} + n$$

$$n^4 + 4n^3 + 6n^2 + 4n = 4\sum k^3 + n(n+1)(2n+1) + 2n(n+1) + n$$

$$n^4 + 4n^3 + 6n^2 + 4n = 4\sum k^3 + 2n^3 + 3n^2 + n + 2n^2 + 2n + n$$

$$n^4 + 4n^3 + 6n^2 + 4n = 4\sum k^3 + 2n^3 + 5n^2 + 4n$$

$$n^4 + 2n^3 + n^2 = 4\sum k^3$$

$$n^2(n^2 + 2n + 1) = 4\sum k^3$$

$$n^2(n+1)^2 = 4\sum k^3$$

$$\sum k^3 = \frac{n^2(n+1)^2}{4} = \left[\frac{n(n+1)}{2}\right]^2$$

✓

---

## Combined Summations

### 1. Sum of First n Terms: $\sum (ak + b)$

$$\boxed{\sum_{k=1}^{n} (ak+b) = a\sum k + b\sum 1 = a \times \frac{n(n+1)}{2} + bn}$$

**Example:** $\sum_{k=1}^{100} (3k+5) = 3 \times \frac{100 \times 101}{2} + 5 \times 100 = 15150 + 500 = 15650$

---

### 2. Sum of Type: $\sum (k^2 + k)$

$$\sum_{k=1}^{n} (k^2 + k) = \sum k^2 + \sum k = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}$$

$$= \frac{n(n+1)}{6}[2n+1+3] = \frac{n(n+1)(2n+4)}{6} = \frac{n(n+1)(n+2)}{3}$$

**Pattern Recognition:** $\sum k(k+1) = \frac{n(n+1)(n+2)}{3}$ (product of 3 consecutive integers divided by 3!)

---

### 3. General: $\sum k(k+1)(k+2)\cdots(k+r-1)$

$$\boxed{\sum_{k=1}^{n} k(k+1)(k+2)\cdots(k+r-1) = \frac{n(n+1)(n+2)\cdots(n+r)}{r+1}}$$

**Pattern:** Product of $r$ consecutive terms sums to product of $(r+1)$ consecutive terms divided by $(r+1)$!

---

## Common Mistakes & How to Avoid Them

### ❌ Mistake 1: Formula Confusion

**Wrong:** $\sum k^2 = \frac{n(n+1)}{2}$ ✗ (this is for $\sum k$!)

**Correct:** $\sum k^2 = \frac{n(n+1)(2n+1)}{6}$ ✓

**Tip:** Squares need THREE factors: $n$, $(n+1)$, $(2n+1)$ and divide by 6

---

### ❌ Mistake 2: Range Errors

**Problem:** Find $\sum_{k=5}^{20} k$

**Wrong:** $\frac{20 \times 21}{2} = 210$ ✗ (this is sum from 1 to 20!)

**Correct:** $\sum_{k=5}^{20} k = \sum_{k=1}^{20} k - \sum_{k=1}^{4} k = \frac{20 \times 21}{2} - \frac{4 \times 5}{2} = 210 - 10 = 200$ ✓

**Tip:** Use $\sum_{k=a}^{b} f(k) = \sum_{k=1}^{b} f(k) - \sum_{k=1}^{a-1} f(k)$

---

### ❌ Mistake 3: Cubes Formula

**Wrong:** $\sum k^3 = \frac{n^2(n+1)^2}{2}$ ✗

**Correct:** $\sum k^3 = \frac{n^2(n+1)^2}{4} = \left[\frac{n(n+1)}{2}\right]^2$ ✓

**Memory:** Divide by **4**, not 2! Or remember: square of sum formula

---

### ❌ Mistake 4: Odd Numbers Sum

**Wrong:** $1 + 3 + 5 + \cdots + (2n-1) = n(2n-1)$ ✗

**Correct:** $1 + 3 + 5 + \cdots + (2n-1) = n^2$ ✓

**Quick Check:** $1 + 3 + 5 = 9 = 3^2$ ✓ (not $3 \times 5 = 15$ ✗)

---

## Problem-Solving Strategies

### Strategy 1: Direct Formula Application

**Problem:** Find $1 + 2 + 3 + \cdots + 50$

**Solution:** $\sum_{k=1}^{50} k = \frac{50 \times 51}{2} = 1275$

**Answer:** 1275

---

### Strategy 2: Range Adjustment

**Problem:** Find $11 + 12 + 13 + \cdots + 30$

**Solution:**

$\sum_{k=11}^{30} k = \sum_{k=1}^{30} k - \sum_{k=1}^{10} k$

$= \frac{30 \times 31}{2} - \frac{10 \times 11}{2}$

$= 465 - 55 = 410$

**Answer:** 410

---

### Strategy 3: Combining Formulas

**Problem:** Find $1^2 + 2^2 + 3^2 + \cdots + 20^2$

**Solution:** $\sum_{k=1}^{20} k^2 = \frac{20 \times 21 \times 41}{6} = \frac{17220}{6} = 2870$

**Answer:** 2870

---

### Strategy 4: Factoring Common Terms

**Problem:** Find $1 \times 2 + 2 \times 3 + 3 \times 4 + \cdots + n(n+1)$

**Solution:**

$\sum_{k=1}^{n} k(k+1) = \sum_{k=1}^{n} (k^2 + k) = \sum k^2 + \sum k$

$= \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}$

$= \frac{n(n+1)}{6}[2n+1+3]$

$= \frac{n(n+1)(2n+4)}{6}$

$= \frac{n(n+1) \times 2(n+2)}{6}$

$= \frac{n(n+1)(n+2)}{3}$

**Answer:** $\frac{n(n+1)(n+2)}{3}$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1:** Find the sum of first 100 natural numbers.

<details><summary>Solution</summary><p>$\sum_{k=1}^{100} k = \frac{100 \times 101}{2} = 5050$</p><p><strong>Answer:</strong> 5050 (Gauss’s answer!)</p></details>

---

**Problem 2:** Find $1 + 3 + 5 + 7 + \cdots + 99$ (sum of first 50 odd numbers).

<details><summary>Solution</summary><p>This is sum of first 50 odd numbers (since 99 = 2(50) - 1).</p><p>$\sum_{k=1}^{50} (2k-1) = 50^2 = 2500$</p><p>Or verify: $\frac{1+99}{2} \times 50 = 50 \times 50 = 2500$ ✓</p><p><strong>Answer:</strong> 2500</p></details>

---

**Problem 3:** Find $1^3 + 2^3 + 3^3 + 4^3 + 5^3$.

<details><summary>Solution</summary><p>$\sum_{k=1}^{5} k^3 = \left[\frac{5 \times 6}{2}\right]^2 = 15^2 = 225$</p><p>Or verify: $1 + 8 + 27 + 64 + 125 = 225$ ✓</p><p><strong>Answer:</strong> 225</p></details>

---

### Level 2: JEE Main/Advanced

**Problem 4:** Find the sum: $2^2 + 4^2 + 6^2 + \cdots + (2n)^2$

<details><summary>Solution</summary><p>$\sum_{k=1}^{n} (2k)^2 = \sum_{k=1}^{n} 4k^2 = 4\sum_{k=1}^{n} k^2$</p><p>$= 4 \times \frac{n(n+1)(2n+1)}{6}$</p><p>$= \frac{2n(n+1)(2n+1)}{3}$</p><p><strong>Answer:</strong> $\frac{2n(n+1)(2n+1)}{3}$</p></details>

---

**Problem 5:** If $\sum_{k=1}^{n} k = 820$, find $n$.

<details><summary>Solution</summary><p>$\frac{n(n+1)}{2} = 820$</p><p>$n(n+1) = 1640$</p><p>$n^2 + n - 1640 = 0$</p><p>Using quadratic formula: $n = \frac{-1 \pm \sqrt{1 + 6560}}{2} = \frac{-1 \pm \sqrt{6561}}{2} = \frac{-1 \pm 81}{2}$</p><p>$n = 40$ (taking positive value)</p><p>Verify: $\frac{40 \times 41}{2} = 820$ ✓</p><p><strong>Answer:</strong> $n = 40$</p></details>

---

**Problem 6:** Find $\sum_{k=1}^{n} k(k+1)(k+2)$

<details><summary>Solution</summary><p>Using the pattern: $\sum k(k+1)(k+2) = \frac{n(n+1)(n+2)(n+3)}{4}$</p><p><strong>Derivation:</strong></p><p>$k(k+1)(k+2) = k^3 + 3k^2 + 2k$</p><p>$\sum k(k+1)(k+2) = \sum k^3 + 3\sum k^2 + 2\sum k$</p><p>$= \frac{n^2(n+1)^2}{4} + 3 \times \frac{n(n+1)(2n+1)}{6} + 2 \times \frac{n(n+1)}{2}$</p><p>$= \frac{n^2(n+1)^2}{4} + \frac{n(n+1)(2n+1)}{2} + n(n+1)$</p><p>$= \frac{n(n+1)}{4}[n(n+1) + 2(2n+1) + 4]$</p><p>$= \frac{n(n+1)}{4}[n^2 + n + 4n + 2 + 4]$</p><p>$= \frac{n(n+1)}{4}[n^2 + 5n + 6]$</p><p>$= \frac{n(n+1)(n+2)(n+3)}{4}$</p><p><strong>Answer:</strong> $\frac{n(n+1)(n+2)(n+3)}{4}$</p></details>

---

### Level 3: JEE Advanced

**Problem 7:** Find $\sum_{k=1}^{n} k^2(k+1)$

<details><summary>Solution</summary><p>$k^2(k+1) = k^3 + k^2$</p><p>$\sum k^2(k+1) = \sum k^3 + \sum k^2$</p><p>$= \frac{n^2(n+1)^2}{4} + \frac{n(n+1)(2n+1)}{6}$</p><p>$= \frac{n(n+1)}{12}[3n(n+1) + 2(2n+1)]$</p><p>$= \frac{n(n+1)}{12}[3n^2 + 3n + 4n + 2]$</p><p>$= \frac{n(n+1)(3n^2 + 7n + 2)}{12}$</p><p>Factor: $3n^2 + 7n + 2 = (3n+1)(n+2)$</p><p>$= \frac{n(n+1)(n+2)(3n+1)}{12}$</p><p><strong>Answer:</strong> $\frac{n(n+1)(n+2)(3n+1)}{12}$</p></details>

---

**Problem 8:** If $S_n = 1 + 4 + 9 + 16 + \cdots + n^2$, find $S_n - S_{n-1}$ and verify it equals $n^2$.

<details><summary>Solution</summary><p>$S_n = \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$</p><p>$S_{n-1} = \frac{(n-1)n(2n-1)}{6}$</p><p>$S_n - S_{n-1} = \frac{n}{6}[(n+1)(2n+1) - (n-1)(2n-1)]$</p><p>$= \frac{n}{6}[2n^2 + 3n + 1 - (2n^2 - 3n + 1)]$</p><p>$= \frac{n}{6}[6n] = n^2$ ✓</p><p>This verifies that the $n$th term of the series is $n^2$.</p><p><strong>Answer:</strong> $S_n - S_{n-1} = n^2$ ✓</p></details>

---

## Advanced Patterns

### 1. Sum of Fourth Powers

$$\sum_{k=1}^{n} k^4 = \frac{n(n+1)(2n+1)(3n^2+3n-1)}{30}$$

(Rarely asked in JEE, but good to know exists!)

---

### 2. Alternating Sums

$$1 - 2 + 3 - 4 + \cdots + (-1)^{n-1}n = \begin{cases} \frac{n+1}{2} & \text{if } n \text{ is odd} \\ -\frac{n}{2} & \text{if } n \text{ is even} \end{cases}$$

---

### 3. Reciprocal Sums

$$\sum_{k=1}^{n} \frac{1}{k(k+1)} = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

**Proof:** Use partial fractions: $\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$ (telescoping!)

---

## Cross-Topic Connections

### 1. Link to Binomial Theorem

Binomial coefficients $\binom{n}{r}$ satisfy summation identities. See [Binomial Theorem](../../binomial-theorem/index.md).

### 2. Link to Calculus

These summations are discrete versions of integrals:

- $\sum k \leftrightarrow \int x \, dx = \frac{x^2}{2}$
- $\sum k^2 \leftrightarrow \int x^2 \, dx = \frac{x^3}{3}$

### 3. Link to Mathematical Induction

These formulas are commonly proven using induction. See proof techniques.

---

## Quick Revision Checklist

- $\sum k = \frac{n(n+1)}{2}$ (memorize!)
- $\sum k^2 = \frac{n(n+1)(2n+1)}{6}$ (3 factors, divide by 6)
- $\sum k^3 = \left[\frac{n(n+1)}{2}\right]^2$ (square of sum!)
- Sum of first $n$ odd numbers = $n^2$
- $\sum k(k+1) = \frac{n(n+1)(n+2)}{3}$ (pattern for products)
- For range $[a,b]$: subtract sums!
- Verify with small values ($n=1,2,3$)

---

## Memory Palace Technique

Imagine a **number pyramid** (special series):

1. **Base (Natural numbers):** $\frac{n(n+1)}{2}$ - single fraction
2. **Second Floor (Squares):** $\frac{n(n+1)(2n+1)}{6}$ - three factors
3. **Third Floor (Cubes):** $\left[\frac{n(n+1)}{2}\right]^2$ - square of base!
4. **Side Path (Odd):** $n^2$ - surprisingly simple!
5. **Balcony (Products):** $\frac{n(n+1)(n+2)}{3}$ - one more factor than base

---

## Final Tips for JEE

1. **Memorize the first three** - $\sum k$, $\sum k^2$, $\sum k^3$ are essential
2. **Odd numbers = $n^2$** - frequently appears in geometry problems
3. **Range problems** - always use difference of sums
4. **Verify with small $n$** - check $n=1,2,3$ to catch errors
5. **Pattern recognition** - $\sum k(k+1)(k+2) = \frac{n(n+1)(n+2)(n+3)}{4}$
6. **Telescoping series** - watch for partial fractions
7. **Don’t derive in exam** - memorize and apply quickly!

---

*Last Updated: October 25, 2025*

From TestGuru · our mock-test platform

## You've read Special Series and Standard Summations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sequences-series&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsequences-series%2Fspecial-series%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sequences-series/special-series/",this.page.identifier="/mathematics/sequences-series/special-series/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="seriesVisualization" id="anim-seriesVisualization-1795396422118563956"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-seriesVisualization-1795396422118563956")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sequences-series/special-series/](https://jeenotes.in/mathematics/sequences-series/special-series/) · raw HTML: `offline/mathematics/sequences-series/special-series/index.html`_
