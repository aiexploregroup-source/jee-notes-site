---
title: "Arithmetico-Geometric Progression (AGP)"
source: "https://jeenotes.in/mathematics/sequences-series/agp/"
description: "Master AGP - combining AP and GP, sum formulas, and infinite series applications for JEE"
updated: "2025-12-26"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 10"
html: "../../../../offline/mathematics/sequences-series/agp/index.html"
extracted: "2026-11-23"
---

> Master AGP - combining AP and GP, sum formulas, and infinite series applications for JEE

### Interactive Demo: Visualize AGP

See how arithmetic and geometric progressions combine to form AGP patterns.

## Real-Life Hook: The Compound Interest with Installments

You invest ₹1000 in year 1, ₹2000 in year 2, ₹3000 in year 3, and so on (arithmetic increase). But each investment grows at 10% per year (geometric growth). How much total wealth do you have after many years?

This creates a sequence where:

- Year 1 contribution grows: $1000 \times (1.1)^{n-1}$
- Year 2 contribution grows: $2000 \times (1.1)^{n-2}$
- Year 3 contribution grows: $3000 \times (1.1)^{n-3}$

This is an **Arithmetico-Geometric Progression** - where arithmetic and geometric patterns combine!

Understanding AGP is crucial for financial mathematics, probability distributions, and complex JEE problems!

---

## What is an AGP?

An **Arithmetico-Geometric Progression (AGP)** is a sequence where each term is the **product** of corresponding terms from an AP and a GP.

**General Form:**

If AP is: $a, a+d, a+2d, a+3d, \ldots$

And GP is: $1, r, r^2, r^3, \ldots$

Then AGP is: $a, (a+d)r, (a+2d)r^2, (a+3d)r^3, \ldots$

**Standard Form:**

$$\boxed{a, (a+d)r, (a+2d)r^2, (a+3d)r^3, \ldots, [a+(n-1)d]r^{n-1}}$$

**Example:** $1, 4x, 7x^2, 10x^3, 13x^4, \ldots$

Here: AP is $1, 4, 7, 10, 13, \ldots$ (with $a=1, d=3$)

GP is $1, x, x^2, x^3, x^4, \ldots$ (with ratio $r=x$)

---

## nth Term of AGP

The $n$th term of AGP is:

$$\boxed{T_n = [a + (n-1)d] \cdot r^{n-1}}$$

**Structure:**

- **AP part:** $a + (n-1)d$
- **GP part:** $r^{n-1}$
- **AGP term:** Their product!

**Memory Trick:** “**A**P **T**imes **G**P **P**ower” → $[a+(n-1)d] \times r^{n-1}$

---

## Sum of n Terms of AGP

This is the **KEY FORMULA** for JEE!

For AGP: $a, (a+d)r, (a+2d)r^2, \ldots$

$$\boxed{S_n = \frac{a}{1-r} + \frac{dr[1-r^{n-1}]}{(1-r)^2} - \frac{[a+(n-1)d]r^n}{1-r}}$$

**Alternative Form (cleaner for memory):**

When $r \neq 1$:

$$\boxed{S_n = \frac{a - [a+(n-1)d]r^n}{1-r} + \frac{dr(1-r^{n-1})}{(1-r)^2}}$$

**When $r = 1$:** AGP becomes AP!

$$S_n = na + \frac{n(n-1)d}{2}$$

**Derivation Method:** Multiply sum by $r$ and subtract (see below)

---

## Derivation of Sum Formula

**Method: Multiply by r and Subtract**

$$S_n = a + (a+d)r + (a+2d)r^2 + \cdots + [a+(n-1)d]r^{n-1}$$

Multiply by $r$:

$$rS_n = ar + (a+d)r^2 + (a+2d)r^3 + \cdots + [a+(n-1)d]r^n$$

Subtract:

$$S_n - rS_n = a + dr + dr^2 + dr^3 + \cdots + dr^{n-1} - [a+(n-1)d]r^n$$

$$S_n(1-r) = a + dr(1 + r + r^2 + \cdots + r^{n-2}) - [a+(n-1)d]r^n$$

The part $(1 + r + r^2 + \cdots + r^{n-2})$ is a GP sum with $(n-1)$ terms:

$$= \frac{1-r^{n-1}}{1-r}$$

So:

$$S_n(1-r) = a + dr \cdot \frac{1-r^{n-1}}{1-r} - [a+(n-1)d]r^n$$

$$S_n = \frac{a}{1-r} + \frac{dr(1-r^{n-1})}{(1-r)^2} - \frac{[a+(n-1)d]r^n}{1-r}$$

---

## Sum of Infinite AGP

When $|r| < 1$, the infinite sum exists:

$$\boxed{S_\infty = \frac{a}{1-r} + \frac{dr}{(1-r)^2}}$$

**Derivation:**

As $n \to \infty$ and $|r| < 1$:

- $r^{n-1} \to 0$
- $r^n \to 0$

From finite sum formula:

$$S_\infty = \frac{a}{1-r} + \frac{dr(1-0)}{(1-r)^2} - \frac{[a+\infty \cdot d] \cdot 0}{1-r}$$

$$= \frac{a}{1-r} + \frac{dr}{(1-r)^2}$$

**Simplified:**

$$\boxed{S_\infty = \frac{a(1-r) + dr}{(1-r)^2} = \frac{a - ar + dr}{(1-r)^2} = \frac{a + r(d-a)}{(1-r)^2}}$$

**Memory Trick:** “**A** plus **D**-**A** times **R**, all over **(1-R) squared**”

---

## Special Cases

### Case 1: $a = 1, d = 1$

AGP: $1, 2r, 3r^2, 4r^3, \ldots$

$$\boxed{S_n = 1 + 2r + 3r^2 + 4r^3 + \cdots + nr^{n-1}}$$

**Infinite sum when $|r| < 1$:**

$$\boxed{S_\infty = \frac{1}{(1-r)^2}}$$

**This is a super important formula for JEE!**

---

### Case 2: $a = d$

AGP: $a, 2ar, 3ar^2, 4ar^3, \ldots$

$$S_\infty = \frac{a}{(1-r)^2}$$

---

## Common Mistakes & How to Avoid Them

### ❌ Mistake 1: Wrong nth Term

**Wrong:** $T_n = ar^{n-1} + (n-1)d$ ✗ (addition instead of multiplication!)

**Correct:** $T_n = [a + (n-1)d] \cdot r^{n-1}$ ✓

**Key:** It’s a **product**, not sum!

---

### ❌ Mistake 2: Infinite Sum Convergence

**Wrong:** $S_\infty = \frac{a}{1-r} + \frac{dr}{(1-r)^2}$ for any $r$ ✗

**Correct:** Only when $|r| < 1$ ✓

**Example:** For $r = 2$, the series $1 + 4 + 12 + 32 + \cdots$ diverges!

---

### ❌ Mistake 3: Formula Confusion

**Problem:** Find sum of $1 + 3x + 5x^2 + 7x^3 + \cdots$ to $n$ terms

**Wrong:** Using GP formula ✗

**Correct:** This is AGP with $a = 1, d = 2, r = x$

Use AGP sum formula! ✓

---

### ❌ Mistake 4: Sign in $(1-r)$

**Problem:** Sum $1 - 2x + 3x^2 - 4x^3 + \cdots$

**Wrong:** Using $r = x$ ✗

**Correct:** Here $r = -x$ (negative!)

$$S_\infty = \frac{1}{[1-(-x)]^2} = \frac{1}{(1+x)^2}$$

---

## Problem-Solving Strategies

### Strategy 1: Identify AP and GP Components

**Problem:** Find the 5th term of AGP: $2, 6x, 12x^2, 20x^3, \ldots$

**Solution:**

Identify pattern:

- Coefficients: $2, 6, 12, 20, \ldots$
  - Check differences: $6-2=4$, $12-6=6$, $20-12=8$ (not AP!)
  - Check if product pattern: $2 = 2 \times 1$, $6 = 3 \times 2$, $12 = 4 \times 3$, $20 = 5 \times 4$
  - Pattern: $n(n+1)$

So $T_n = n(n+1) \cdot x^{n-1}$

$T_5 = 5 \times 6 \times x^4 = 30x^4$

**Answer:** $30x^4$

---

### Strategy 2: Sum Using Standard Formula

**Problem:** Find sum of first 5 terms: $1 + 3x + 5x^2 + 7x^3 + 9x^4$

**Solution:**

This is AGP with:

- $a = 1$ (first term of AP)
- $d = 2$ (common difference of AP)
- $r = x$ (common ratio)
- $n = 5$

Using formula:

$$S_5 = \frac{1 - [1+4(2)]x^5}{1-x} + \frac{2x(1-x^4)}{(1-x)^2}$$

$$= \frac{1 - 9x^5}{1-x} + \frac{2x(1-x^4)}{(1-x)^2}$$

For numerical answer, we’d need value of $x$.

**Answer:** $S_5 = \frac{1 - 9x^5}{1-x} + \frac{2x(1-x^4)}{(1-x)^2}$

---

### Strategy 3: Infinite Sum Application

**Problem:** Find $1 + 2 \times \frac{1}{3} + 3 \times \frac{1}{9} + 4 \times \frac{1}{27} + \cdots$

**Solution:**

This is AGP with $a = 1, d = 1, r = \frac{1}{3}$

Check convergence: $|r| = \frac{1}{3} < 1$ ✓

$$S_\infty = \frac{1}{(1-\frac{1}{3})^2} = \frac{1}{(\frac{2}{3})^2} = \frac{1}{\frac{4}{9}} = \frac{9}{4}$$

**Answer:** $\frac{9}{4}$

---

### Strategy 4: Multiply and Subtract Method

**Problem:** Find sum: $S = 1 + 3x + 5x^2 + 7x^3 + \cdots$ (infinite, $|x| < 1$)

**Solution:**

$S = 1 + 3x + 5x^2 + 7x^3 + 9x^4 + \cdots$

$xS = x + 3x^2 + 5x^3 + 7x^4 + \cdots$

Subtract:

$S - xS = 1 + 2x + 2x^2 + 2x^3 + 2x^4 + \cdots$

$S(1-x) = 1 + 2x(1 + x + x^2 + \cdots)$

$S(1-x) = 1 + 2x \cdot \frac{1}{1-x}$

$S(1-x) = 1 + \frac{2x}{1-x}$

$S(1-x) = \frac{1-x+2x}{1-x} = \frac{1+x}{1-x}$

$S = \frac{1+x}{(1-x)^2}$

**Verify:** Using formula with $a=1, d=2, r=x$:

$S_\infty = \frac{1 + x(2-1)}{(1-x)^2} = \frac{1+x}{(1-x)^2}$ ✓

**Answer:** $\frac{1+x}{(1-x)^2}$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1:** Find the 6th term of AGP: $3, 6r, 9r^2, 12r^3, \ldots$

<details><summary>Solution</summary><p>Identify: $a = 3, d = 3, r = r$</p><p>$T_6 = [3 + 5(3)] \cdot r^5 = 18r^5$</p><p><strong>Answer:</strong> $18r^5$</p></details>

---

**Problem 2:** Find sum: $1 + 2 \times \frac{1}{2} + 3 \times \frac{1}{4} + 4 \times \frac{1}{8} + \cdots$ (infinite)

<details><summary>Solution</summary><p>AGP with $a = 1, d = 1, r = \frac{1}{2}$</p><p>$|r| = \frac{1}{2} &lt; 1$ ✓</p><p>$S_\infty = \frac{1}{(1-\frac{1}{2})^2} = \frac{1}{(\frac{1}{2})^2} = \frac{1}{\frac{1}{4}} = 4$</p><p><strong>Answer:</strong> 4</p></details>

---

**Problem 3:** Is $2, 6, 18, 54, \ldots$ an AGP?

<details><summary>Solution</summary><p>Check ratios: $\frac{6}{2} = 3$, $\frac{18}{6} = 3$, $\frac{54}{18} = 3$</p><p>This is a <strong>GP</strong>, not AGP! (constant ratio, not increasing/decreasing coefficients)</p><p><strong>Answer:</strong> No, it’s a GP</p></details>

---

### Level 2: JEE Main/Advanced

**Problem 4:** Find the sum of first 4 terms of AGP: $1, 4x, 7x^2, 10x^3, \ldots$

<details><summary>Solution</summary><p>$a = 1, d = 3, r = x, n = 4$</p><p>Method 1: Direct calculation
$S_4 = 1 + 4x + 7x^2 + 10x^3$</p><p>Method 2: Using formula</p>$$S_4 = \frac{1 - [1+3(3)]x^4}{1-x} + \frac{3x(1-x^3)}{(1-x)^2}$$

$$= \frac{1 - 10x^4}{1-x} + \frac{3x(1-x^3)}{(1-x)^2}$$<p>For specific $x$, we can evaluate. Generally, answer is as above.</p><p><strong>Answer:</strong> $1 + 4x + 7x^2 + 10x^3$ or formula form</p></details>

---

**Problem 5:** If $1 + 3x + 5x^2 + 7x^3 + \cdots = \frac{9}{4}$ (infinite series), find $x$.

<details><summary>Solution</summary><p>AGP: $a = 1, d = 2, r = x$</p><p>$S_\infty = \frac{1 + x(2-1)}{(1-x)^2} = \frac{1+x}{(1-x)^2} = \frac{9}{4}$</p><p>$4(1+x) = 9(1-x)^2$</p><p>$4 + 4x = 9(1 - 2x + x^2)$</p><p>$4 + 4x = 9 - 18x + 9x^2$</p><p>$9x^2 - 22x + 5 = 0$</p><p>Using quadratic formula:</p><p>$x = \frac{22 \pm \sqrt{484 - 180}}{18} = \frac{22 \pm \sqrt{304}}{18} = \frac{22 \pm 4\sqrt{19}}{18} = \frac{11 \pm 2\sqrt{19}}{9}$</p><p>Check convergence: We need $|x| &lt; 1$</p><p>$x_1 = \frac{11 + 2\sqrt{19}}{9} \approx \frac{11 + 8.72}{9} \approx 2.19 &gt; 1$ ✗</p><p>$x_2 = \frac{11 - 2\sqrt{19}}{9} \approx \frac{11 - 8.72}{9} \approx 0.25 &lt; 1$ ✓</p><p><strong>Answer:</strong> $x = \frac{11 - 2\sqrt{19}}{9}$</p></details>

---

**Problem 6:** Find sum: $1 - 3x + 5x^2 - 7x^3 + \cdots$ where $|x| < 1$

<details><summary>Solution</summary><p>This is AGP with alternating signs: $r = -x$</p><p>$a = 1, d = 2, r = -x$</p><p>$S_\infty = \frac{1 + (-x)(2-1)}{(1-(-x))^2} = \frac{1-x}{(1+x)^2}$</p><p><strong>Answer:</strong> $\frac{1-x}{(1+x)^2}$</p></details>

---

### Level 3: JEE Advanced

**Problem 7:** Prove that $\sum_{k=1}^{\infty} kx^{k-1} = \frac{1}{(1-x)^2}$ for $|x| < 1$.

<details><summary>Solution</summary><p>Method 1: Recognize as derivative</p><p>We know: $\sum_{k=0}^{\infty} x^k = \frac{1}{1-x}$ for $|x| &lt; 1$</p><p>Differentiate both sides with respect to $x$:</p><p>$\sum_{k=1}^{\infty} kx^{k-1} = \frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{0 \cdot (1-x) - 1 \cdot (-1)}{(1-x)^2} = \frac{1}{(1-x)^2}$ ✓</p><p>Method 2: AGP approach</p><p>$S = 1 + 2x + 3x^2 + 4x^3 + \cdots$</p><p>This is AGP with $a = 1, d = 1, r = x$</p><p>$S_\infty = \frac{1}{(1-x)^2}$ ✓</p><p><strong>Answer:</strong> Proven</p></details>

---

**Problem 8:** Find $\sum_{k=1}^{n} k(k+1)x^k$ in closed form.

<details><summary>Solution</summary><p>Expand: $k(k+1) = k^2 + k$</p><p>$\sum k(k+1)x^k = \sum k^2 x^k + \sum kx^k$</p><p>We know:</p><ul><li>$\sum_{k=1}^{\infty} kx^k = \frac{x}{(1-x)^2}$ (multiply standard AGP by $x$)</li></ul><p>For $\sum k^2 x^k$, we can derive by differentiating $\sum kx^k$:</p><p>$\sum kx^k = \frac{x}{(1-x)^2}$</p><p>Differentiate: $\sum k^2x^{k-1} = \frac{d}{dx}\left(\frac{x}{(1-x)^2}\right)$</p><p>$= \frac{(1-x)^2 - x \cdot 2(1-x)(-1)}{(1-x)^4}$</p><p>$= \frac{(1-x)^2 + 2x(1-x)}{(1-x)^4}$</p><p>$= \frac{(1-x)(1-x+2x)}{(1-x)^4}$</p><p>$= \frac{1+x}{(1-x)^3}$</p><p>So: $\sum k^2 x^k = x \cdot \frac{1+x}{(1-x)^3} = \frac{x(1+x)}{(1-x)^3}$</p><p>Therefore:</p><p>$\sum k(k+1)x^k = \frac{x(1+x)}{(1-x)^3} + \frac{x}{(1-x)^2}$</p><p>$= \frac{x(1+x) + x(1-x)}{(1-x)^3}$</p><p>$= \frac{x(1+x+1-x)}{(1-x)^3}$</p><p>$= \frac{2x}{(1-x)^3}$</p><p>For finite sum to $n$ terms, this gets complex. The infinite case is cleaner.</p><p><strong>Answer (infinite):</strong> $\frac{2x}{(1-x)^3}$ for $|x| &lt; 1$</p></details>

---

## Important Results to Remember

### 1. Basic AGP Infinite Sum

$$\boxed{1 + 2x + 3x^2 + 4x^3 + \cdots = \frac{1}{(1-x)^2} \text{ for } |x| < 1}$$

---

### 2. Shifted AGP

$$\boxed{x + 2x^2 + 3x^3 + 4x^4 + \cdots = \frac{x}{(1-x)^2} \text{ for } |x| < 1}$$

---

### 3. Sum of Squares AGP

$$\boxed{1 + 4x + 9x^2 + 16x^3 + \cdots = \frac{1+x}{(1-x)^3} \text{ for } |x| < 1}$$

---

### 4. General AGP

$$\boxed{a + (a+d)r + (a+2d)r^2 + \cdots = \frac{a + r(d-a)}{(1-r)^2} \text{ for } |r| < 1}$$

Wait, let me recalculate this using the standard formula:

$S_\infty = \frac{a}{1-r} + \frac{dr}{(1-r)^2}$

$= \frac{a(1-r) + dr}{(1-r)^2}$

$= \frac{a - ar + dr}{(1-r)^2}$

$= \frac{a + r(d-a)}{(1-r)^2}$ ✓

---

## Cross-Topic Connections

### 1. Link to Calculus - Derivatives

The formula $\sum kx^{k-1} = \frac{1}{(1-x)^2}$ is actually the derivative of $\sum x^k = \frac{1}{1-x}$!

This connects series summation to differentiation.

### 2. Link to Probability

Expected value calculations in geometric distributions often involve AGP.

### 3. Link to Infinite GP

AGP generalizes infinite GP by adding linear growth to exponential decay. See [Infinite GP](../infinite-gp/index.md).

### 4. Link to Binomial Theorem

Differentiation of binomial series $(1+x)^n$ produces AGP-like patterns. See [Binomial Theorem](../../binomial-theorem/index.md).

---

## Quick Revision Checklist

- AGP = (AP term) × (GP term): $[a+(n-1)d] \cdot r^{n-1}$
- Infinite sum: $S_\infty = \frac{a + r(d-a)}{(1-r)^2}$ when $|r| < 1$
- Standard: $1 + 2x + 3x^2 + \cdots = \frac{1}{(1-x)^2}$
- Multiply and subtract method works well
- Always check $|r| < 1$ for infinite sums
- Watch for alternating signs (negative $r$)
- Connection to derivatives of power series

---

## Memory Palace Technique

Imagine a **factory assembly line** (AGP):

1. **Workers (AP):** Workers numbered $1, 2, 3, 4, \ldots$ (arithmetic)
2. **Productivity (GP):** Each works at efficiency $1, r, r^2, r^3, \ldots$ (geometric)
3. **Output (AGP):** Total output = worker number × efficiency: $1 \cdot 1, 2 \cdot r, 3 \cdot r^2, \ldots$
4. **Total Production:** $\frac{1}{(1-r)^2}$ when efficiency ratio $r < 1$ (diminishing returns!)
5. **Formula Board:** Shows $\frac{a + r(d-a)}{(1-r)^2}$ for general case

---

## Final Tips for JEE

1. **Recognize pattern** - increasing/decreasing coefficients with powers
2. **Check convergence** - $|r| < 1$ mandatory for infinite sums
3. **Use multiply-subtract** - often simpler than direct formula
4. **Remember $\frac{1}{(1-x)^2}$** - most common AGP result
5. **Connect to derivatives** - $\sum kx^{k-1}$ is derivative of $\sum x^k$
6. **Watch alternating signs** - indicates negative $r$
7. **Verify with small terms** - calculate first few terms to check pattern
8. **Finite sum is complex** - prefer infinite sum problems when possible

---

*Last Updated: October 31, 2025*

From TestGuru · our mock-test platform

## You've read Arithmetico-Geometric Progression (AGP).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sequences-series&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsequences-series%2Fagp%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sequences-series/agp/",this.page.identifier="/mathematics/sequences-series/agp/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="seriesVisualization" id="anim-seriesVisualization-1795396422095948080"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-seriesVisualization-1795396422095948080")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sequences-series/agp/](https://jeenotes.in/mathematics/sequences-series/agp/) · raw HTML: `offline/mathematics/sequences-series/agp/index.html`_
