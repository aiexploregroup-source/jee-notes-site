---
title: "Method of Differences and V_n Method"
source: "https://jeenotes.in/mathematics/sequences-series/method-differences/"
description: "Master the Method of Differences and V_n method for summing complex series in JEE problems"
updated: "2025-12-26"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 10"
html: "../../../../offline/mathematics/sequences-series/method-differences/index.html"
extracted: "2026-11-23"
---

> Master the Method of Differences and V_n method for summing complex series in JEE problems

### Interactive Demo: Visualize Telescoping Series

See how terms cancel in a telescoping series using the method of differences.

## Real-Life Hook: The Collapsing Tower

Imagine building a tower where each block cancels out part of the previous one. You have blocks labeled:

- Block 1: +10 -5
- Block 2: +5 -2
- Block 3: +2 -1
- Block 4: +1 -0.5

When you stack them, the -5 from Block 1 cancels with +5 from Block 2, the -2 from Block 2 cancels with +2 from Block 3, and so on!

Final result: Only +10 from first block and -0.5 from last block remain = 9.5

This is the **Method of Differences** - a powerful telescoping technique that makes seemingly impossible summations trivial!

---

## What is the Method of Differences?

The **Method of Differences** (also called **Telescoping Series**) is used when the general term of a series can be expressed as:

$$T_n = f(n+1) - f(n)$$

When we sum such terms, **most terms cancel out**, leaving only the first and last terms!

$$S_n = \sum_{k=1}^{n} T_k = \sum_{k=1}^{n} [f(k+1) - f(k)]$$

Expanding:

$$S_n = [f(2) - f(1)] + [f(3) - f(2)] + [f(4) - f(3)] + \cdots + [f(n+1) - f(n)]$$

After cancellation:

$$\boxed{S_n = f(n+1) - f(1)}$$

**Key Insight:** Find function $f$ such that $T_n = f(n+1) - f(n)$!

---

## Core Technique: Finding the Difference Function

### Strategy: Use Partial Fractions

Many series can be expressed as differences using **partial fractions**.

**Example 1:** $T_n = \frac{1}{n(n+1)}$

Using partial fractions:

$$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$$

So $f(n) = \frac{1}{n}$ and:

$$S_n = \sum_{k=1}^{n} \left(\frac{1}{k} - \frac{1}{k+1}\right) = \frac{1}{1} - \frac{1}{n+1} = \frac{n}{n+1}$$

---

**Example 2:** $T_n = \frac{1}{n(n+1)(n+2)}$

Using partial fractions:

$$\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\left[\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right]$$

So $f(n) = \frac{1}{2n(n+1)}$ and:

$$S_n = \frac{1}{2}\left[\frac{1}{1 \times 2} - \frac{1}{(n+1)(n+2)}\right] = \frac{1}{4} - \frac{1}{2(n+1)(n+2)}$$

---

## Standard Forms

### Form 1: $\sum \frac{1}{n(n+1)}$

$$\boxed{\sum_{k=1}^{n} \frac{1}{k(k+1)} = \frac{n}{n+1}}$$

**Partial Fraction:** $\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$

---

### Form 2: $\sum \frac{1}{n(n+2)}$

$$\boxed{\sum_{k=1}^{n} \frac{1}{k(k+2)} = \frac{3}{4} - \frac{2n+3}{2(n+1)(n+2)}}$$

**Partial Fraction:** $\frac{1}{k(k+2)} = \frac{1}{2}\left(\frac{1}{k} - \frac{1}{k+2}\right)$

Telescoping (with gap of 2):

$$S_n = \frac{1}{2}\left[\left(\frac{1}{1} + \frac{1}{2}\right) - \left(\frac{1}{n+1} + \frac{1}{n+2}\right)\right]$$

---

### Form 3: $\sum \frac{1}{n(n+1)(n+2)}$

$$\boxed{\sum_{k=1}^{n} \frac{1}{k(k+1)(k+2)} = \frac{1}{4} - \frac{1}{2(n+1)(n+2)}}$$

**Partial Fraction:** $\frac{1}{k(k+1)(k+2)} = \frac{1}{2}\left[\frac{1}{k(k+1)} - \frac{1}{(k+1)(k+2)}\right]$

---

### Form 4: $\sum \frac{1}{\sqrt{n} + \sqrt{n+1}}$

$$\boxed{\sum_{k=1}^{n} \frac{1}{\sqrt{k} + \sqrt{k+1}} = \sqrt{n+1} - 1}$$

**Rationalization:**

$$\frac{1}{\sqrt{k} + \sqrt{k+1}} = \frac{\sqrt{k+1} - \sqrt{k}}{(\sqrt{k+1} - \sqrt{k})(\sqrt{k+1} + \sqrt{k})} = \sqrt{k+1} - \sqrt{k}$$

---

### Form 5: $\sum n \cdot n!$

$$\boxed{\sum_{k=1}^{n} k \cdot k! = (n+1)! - 1}$$

**Recognition:** $k \cdot k! = (k+1)! - k! = (k+1-1) \cdot k! = (k+1)! - k!$

---

## The V_n Method

The **V_n method** is a variant used when:

$$T_n = V_{n+1} - V_n$$

where $V_n$ is some function of $n$.

**Process:**

1. Identify or construct $V_n$ such that $T_n = V_{n+1} - V_n$
2. Sum: $S_n = V_{n+1} - V_1$

**When to Use:** When the general term involves factorials, products, or complex recursions.

---

## Common Mistakes & How to Avoid Them

### ❌ Mistake 1: Incorrect Cancellation

**Wrong:** Assuming all terms cancel completely ✗

**Correct:** First few and last few terms remain! ✓

**Example:** $\sum_{k=1}^{n} \left(\frac{1}{k} - \frac{1}{k+2}\right)$

**Wrong:** Everything cancels to 0 ✗

**Correct:**

$$S_n = \left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots$$

Only $\frac{1}{1}$ and $\frac{1}{2}$ don’t cancel from the start, and $\frac{1}{n+1}, \frac{1}{n+2}$ don’t cancel from the end!

$$S_n = \frac{1}{1} + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2} = \frac{3}{2} - \frac{2n+3}{(n+1)(n+2)}$$

---

### ❌ Mistake 2: Partial Fraction Errors

**Wrong:** $\frac{1}{n(n+1)} = \frac{1}{n} + \frac{1}{n+1}$ ✗

**Correct:** $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$ ✓ (subtraction, not addition!)

**Verification:** $\frac{1}{n} - \frac{1}{n+1} = \frac{n+1-n}{n(n+1)} = \frac{1}{n(n+1)}$ ✓

---

### ❌ Mistake 3: Forgetting Initial/Final Terms

**Problem:** Find $\sum_{k=1}^{100} (k+1)! - k!$

**Wrong:** $S = 101! - 1!$ ✗ (using $f(101) - f(1)$ incorrectly)

**Correct:**

$$T_k = (k+1)! - k!$$

Here already in difference form with $f(k) = k!$

$$S = \sum [f(k+1) - f(k)] = f(101) - f(1) = 101! - 1!$$

Actually that’s correct! So no mistake here. Let me find a real mistake:

**Wrong:** $S = 101!$ ✗ (forgetting to subtract $1!$)

**Correct:** $S = 101! - 1 = 101! - 1$ ✓

---

## Problem-Solving Strategies

### Strategy 1: Recognize Partial Fractions

**Problem:** Find $\sum_{k=1}^{n} \frac{2}{(2k-1)(2k+1)}$

**Solution:**

Partial fractions:

$$\frac{2}{(2k-1)(2k+1)} = \frac{A}{2k-1} + \frac{B}{2k+1}$$

$$2 = A(2k+1) + B(2k-1)$$

Setting $k = \frac{1}{2}$: $2 = 2A$ → $A = 1$

Setting $k = -\frac{1}{2}$: $2 = -2B$ → $B = -1$

$$\frac{2}{(2k-1)(2k+1)} = \frac{1}{2k-1} - \frac{1}{2k+1}$$

Telescoping:

$$S_n = \sum_{k=1}^{n} \left(\frac{1}{2k-1} - \frac{1}{2k+1}\right)$$

$$= \left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{5} - \frac{1}{7}\right) + \cdots + \left(\frac{1}{2n-1} - \frac{1}{2n+1}\right)$$

$$= 1 - \frac{1}{2n+1} = \frac{2n}{2n+1}$$

**Answer:** $\frac{2n}{2n+1}$

---

### Strategy 2: Rationalization

**Problem:** Find $\sum_{k=1}^{50} \frac{1}{\sqrt{k+1} + \sqrt{k}}$

**Solution:**

Rationalize:

$$\frac{1}{\sqrt{k+1} + \sqrt{k}} \times \frac{\sqrt{k+1} - \sqrt{k}}{\sqrt{k+1} - \sqrt{k}} = \frac{\sqrt{k+1} - \sqrt{k}}{(k+1) - k} = \sqrt{k+1} - \sqrt{k}$$

Telescoping:

$$S_{50} = \sum_{k=1}^{50} (\sqrt{k+1} - \sqrt{k})$$

$$= (\sqrt{2} - \sqrt{1}) + (\sqrt{3} - \sqrt{2}) + \cdots + (\sqrt{51} - \sqrt{50})$$

$$= \sqrt{51} - 1$$

**Answer:** $\sqrt{51} - 1$

---

### Strategy 3: Factorial Recognition

**Problem:** Find $\sum_{k=1}^{n} k \cdot k!$

**Solution:**

Recognize: $k \cdot k! = (k+1-1) \cdot k! = (k+1) \cdot k! - k! = (k+1)! - k!$

Telescoping:

$$S_n = \sum_{k=1}^{n} [(k+1)! - k!]$$

$$= [2! - 1!] + [3! - 2!] + [4! - 3!] + \cdots + [(n+1)! - n!]$$

$$= (n+1)! - 1!$$

$$= (n+1)! - 1$$

**Answer:** $(n+1)! - 1$

---

### Strategy 4: Three-Term Partial Fractions

**Problem:** Find $\sum_{k=1}^{n} \frac{1}{k(k+1)(k+2)}$

**Solution:**

Partial fractions (method: decompose into two two-term fractions):

$$\frac{1}{k(k+1)(k+2)} = \frac{1}{2} \cdot \frac{2}{k(k+1)(k+2)}$$

$$= \frac{1}{2} \cdot \frac{(k+2) - k}{k(k+1)(k+2)}$$

$$= \frac{1}{2}\left[\frac{1}{k(k+1)} - \frac{1}{(k+1)(k+2)}\right]$$

Telescoping:

$$S_n = \frac{1}{2}\left[\frac{1}{1 \times 2} - \frac{1}{(n+1)(n+2)}\right]$$

$$= \frac{1}{2}\left[\frac{1}{2} - \frac{1}{(n+1)(n+2)}\right]$$

$$= \frac{1}{4} - \frac{1}{2(n+1)(n+2)}$$

**Answer:** $\frac{1}{4} - \frac{1}{2(n+1)(n+2)}$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1:** Find $\sum_{k=1}^{10} \frac{1}{k(k+1)}$

<details><summary>Solution</summary><p>$\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$</p><p>$S_{10} = \sum_{k=1}^{10} \left(\frac{1}{k} - \frac{1}{k+1}\right) = 1 - \frac{1}{11} = \frac{10}{11}$</p><p><strong>Answer:</strong> $\frac{10}{11}$</p></details>

---

**Problem 2:** Find $\sum_{k=1}^{n} (\sqrt{k+1} - \sqrt{k})$

<details><summary>Solution</summary><p>This is already in telescoping form:</p><p>$S_n = (\sqrt{2} - \sqrt{1}) + (\sqrt{3} - \sqrt{2}) + \cdots + (\sqrt{n+1} - \sqrt{n})$</p><p>$= \sqrt{n+1} - 1$</p><p><strong>Answer:</strong> $\sqrt{n+1} - 1$</p></details>

---

**Problem 3:** Find $\sum_{k=1}^{5} \frac{1}{\sqrt{k} + \sqrt{k+1}}$

<details><summary>Solution</summary><p>Rationalize: $\frac{1}{\sqrt{k} + \sqrt{k+1}} = \sqrt{k+1} - \sqrt{k}$</p><p>$S_5 = \sum_{k=1}^{5} (\sqrt{k+1} - \sqrt{k}) = \sqrt{6} - 1$</p><p><strong>Answer:</strong> $\sqrt{6} - 1$</p></details>

---

### Level 2: JEE Main/Advanced

**Problem 4:** Find $\sum_{k=1}^{n} \frac{1}{(2k-1)(2k+1)}$

<details><summary>Solution</summary><p>Partial fractions:</p>$$\frac{1}{(2k-1)(2k+1)} = \frac{1}{2}\left(\frac{1}{2k-1} - \frac{1}{2k+1}\right)$$<p>$S_n = \frac{1}{2}\sum_{k=1}^{n} \left(\frac{1}{2k-1} - \frac{1}{2k+1}\right)$</p><p>$= \frac{1}{2}\left(1 - \frac{1}{2n+1}\right)$</p><p>$= \frac{1}{2} \cdot \frac{2n}{2n+1}$</p><p>$= \frac{n}{2n+1}$</p><p><strong>Answer:</strong> $\frac{n}{2n+1}$</p></details>

---

**Problem 5:** Find $\sum_{k=2}^{n} \frac{1}{k^2-1}$

<details><summary>Solution</summary><p>Note: $k^2 - 1 = (k-1)(k+1)$</p><p>Partial fractions:</p>$$\frac{1}{(k-1)(k+1)} = \frac{1}{2}\left(\frac{1}{k-1} - \frac{1}{k+1}\right)$$<p>$S = \frac{1}{2}\sum_{k=2}^{n} \left(\frac{1}{k-1} - \frac{1}{k+1}\right)$</p><p>This telescopes with a gap of 2:</p><p>$= \frac{1}{2}\left[\left(\frac{1}{1} + \frac{1}{2}\right) - \left(\frac{1}{n} + \frac{1}{n+1}\right)\right]$</p><p>$= \frac{1}{2}\left[\frac{3}{2} - \frac{2n+1}{n(n+1)}\right]$</p><p>$= \frac{3}{4} - \frac{2n+1}{2n(n+1)}$</p><p><strong>Answer:</strong> $\frac{3}{4} - \frac{2n+1}{2n(n+1)}$</p></details>

---

**Problem 6:** Find $\sum_{k=1}^{n} k(k+1)$

<details><summary>Solution</summary><p>Method 1: Expand and use standard formulas</p><p>$k(k+1) = k^2 + k$</p><p>$\sum k(k+1) = \sum k^2 + \sum k = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}$</p><p>$= \frac{n(n+1)}{6}[2n+1+3] = \frac{n(n+1)(2n+4)}{6} = \frac{n(n+1)(n+2)}{3}$</p><p>Method 2: Recognize as difference</p><p>$k(k+1) = \frac{(k+2)(k+1)k - (k+1)k(k-1)}{3}$&amp;mldr; (complex!)</p><p>Method 1 is simpler for this case.</p><p><strong>Answer:</strong> $\frac{n(n+1)(n+2)}{3}$</p></details>

---

### Level 3: JEE Advanced

**Problem 7:** Find $\sum_{k=1}^{n} \frac{k}{(k+1)!}$

<details><summary>Solution</summary><p>Recognize: $\frac{k}{(k+1)!} = \frac{(k+1)-1}{(k+1)!} = \frac{1}{k!} - \frac{1}{(k+1)!}$</p><p>Telescoping:
$S_n = \sum_{k=1}^{n} \left(\frac{1}{k!} - \frac{1}{(k+1)!}\right)$</p><p>$= \frac{1}{1!} - \frac{1}{(n+1)!}$</p><p>$= 1 - \frac{1}{(n+1)!}$</p><p><strong>Answer:</strong> $1 - \frac{1}{(n+1)!}$</p></details>

---

**Problem 8:** Find $\sum_{k=1}^{n} \frac{1}{k(k+1)(k+2)(k+3)}$

<details><summary>Solution</summary><p>Partial fractions (using the trick of writing as difference of products):</p>$$\frac{1}{k(k+1)(k+2)(k+3)} = \frac{1}{3}\left[\frac{1}{k(k+1)(k+2)} - \frac{1}{(k+1)(k+2)(k+3)}\right]$$<p>This telescopes!</p><p>$S_n = \frac{1}{3}\left[\frac{1}{1 \times 2 \times 3} - \frac{1}{(n+1)(n+2)(n+3)}\right]$</p><p>$= \frac{1}{3}\left[\frac{1}{6} - \frac{1}{(n+1)(n+2)(n+3)}\right]$</p><p>$= \frac{1}{18} - \frac{1}{3(n+1)(n+2)(n+3)}$</p><p><strong>Answer:</strong> $\frac{1}{18} - \frac{1}{3(n+1)(n+2)(n+3)}$</p></details>

---

## Advanced Techniques

### Technique 1: Creating Differences

Sometimes you need to **create** a difference by adding and subtracting terms.

**Example:** Sum $\sum k^2$

Recognize: $(k+1)^3 - k^3 = 3k^2 + 3k + 1$

Rearrange: $k^2 = \frac{1}{3}[(k+1)^3 - k^3 - 3k - 1]$

Then telescoping gives the standard formula.

---

### Technique 2: Double Telescoping

Some series telescope in multiple ways simultaneously.

**Example:** $\sum \frac{1}{k^2(k+1)^2}$

Can be written as: $\left(\frac{1}{k} - \frac{1}{k+1}\right)^2 + \frac{1}{k(k+1)} - \frac{1}{(k)(k+1)}$&mldr; (complex!)

---

## Cross-Topic Connections

### 1. Link to Partial Fractions

Essential algebra technique from rational expressions. See [Algebra - Partial Fractions].

### 2. Link to Limits

As $n \to \infty$, many telescoping series converge:

$$\lim_{n \to \infty} \sum_{k=1}^{n} \frac{1}{k(k+1)} = \lim_{n \to \infty} \frac{n}{n+1} = 1$$

See [Limits](../../limits-continuity-differentiability/index.md).

### 3. Link to Integration

Telescoping sums are discrete analogs of the Fundamental Theorem of Calculus:

$$\sum_{k=a}^{b} [f(k+1) - f(k)] = f(b+1) - f(a)$$

$$\int_a^b f'(x) \, dx = f(b) - f(a)$$

---

## Quick Revision Checklist

- Recognize telescoping: $T_n = f(n+1) - f(n)$
- Sum = $f(n+1) - f(1)$ (last minus first!)
- Partial fractions: $\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$
- Rationalization: $\frac{1}{\sqrt{k+1} + \sqrt{k}} = \sqrt{k+1} - \sqrt{k}$
- Factorial form: $k \cdot k! = (k+1)! - k!$
- Watch for gap cancellation (e.g., $\frac{1}{k} - \frac{1}{k+2}$)
- Verify with first few terms to catch errors

---

## Memory Palace Technique

Imagine a **domino chain** (telescoping):

1. **Setup (Recognize):** Arrange dominoes as differences $f(k+1) - f(k)$
2. **Knock First (Start sum):** First domino falls: $f(2) - f(1)$
3. **Cascade (Middle cancels):** Middle dominoes knock each other: $-f(2) + f(2)$ cancels!
4. **Last Standing (Final result):** Only first piece of first domino and last piece of last domino remain: $f(n+1) - f(1)$

---

## Final Tips for JEE

1. **Master partial fractions** - 90% of telescoping problems use this!
2. **Look for $(k+1) - k$ patterns** - sign of telescoping
3. **Write out first 3-4 terms** - visualize the cancellation
4. **Don’t forget $- f(1)$** - common error to only write $f(n+1)$
5. **Rationalization for surds** - multiply by conjugate
6. **Factorial manipulation** - $k \cdot k! = (k+1)! - k!$
7. **Gap telescoping** - some series cancel with gap of 2 or more
8. **Verify answer** - substitute small $n$ to check

---

*Last Updated: October 27, 2025*

From TestGuru · our mock-test platform

## You've read Method of Differences and V_n Method.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sequences-series&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsequences-series%2Fmethod-differences%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sequences-series/method-differences/",this.page.identifier="/mathematics/sequences-series/method-differences/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="seriesVisualization" id="anim-seriesVisualization-1795396422115881579"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-seriesVisualization-1795396422115881579")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sequences-series/method-differences/](https://jeenotes.in/mathematics/sequences-series/method-differences/) · raw HTML: `offline/mathematics/sequences-series/method-differences/index.html`_
