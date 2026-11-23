---
title: "Geometric Progression (GP)"
source: "https://jeenotes.in/mathematics/sequences-series/geometric-progression/"
description: "Master Geometric Progressions - nth term, sum formulas, infinite GP, and exponential growth applications"
updated: "2025-12-26"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 10"
html: "../../../../offline/mathematics/sequences-series/geometric-progression/index.html"
extracted: "2026-11-23"
---

> Master Geometric Progressions - nth term, sum formulas, infinite GP, and exponential growth applications

## Real-Life Hook: The Viral Video Phenomenon

You post a video online. On day 1, it gets 100 views. On day 2, it gets 300 views (3× more). On day 3, it gets 900 views (3× again). On day 4, 2700 views&mldr; This is **Geometric Progression** in action!

From compound interest that multiplies your wealth to bacteria doubling every hour, from radioactive decay to population growth, GP governs anything that grows or shrinks by a **constant ratio**. Understanding GP unlocks the mathematics of exponential change.

---

## What is a Geometric Progression?

A **Geometric Progression (GP)** is a sequence where each term is obtained by multiplying the previous term by a constant value called the **common ratio (r)**.

**General Form:** $a, ar, ar^2, ar^3, \ldots$

where:

- $a$ = first term (non-zero)
- $r$ = common ratio (non-zero)
- $n$ = number of terms

**Example:** 2, 6, 18, 54, 162, &mldr; (here $a = 2$, $r = 3$)

---

## Interactive Demo: Geometric Progression Explorer

### GP Calculator & Visualizer

First term (a): 
Common ratio (r): 
Number of terms (n):

---

## Core Formulas

### 1. nth Term Formula

$$\boxed{T_n = ar^{n-1}}$$

**Memory Trick:** “**A**lways **R**aise to **N**-1” → $ar^{n-1}$

- Start with $a$
- Multiply by $r$ exactly $(n-1)$ times

### 2. Sum of n Terms (when $r \neq 1$)

$$\boxed{S_n = a\frac{r^n - 1}{r - 1} = a\frac{1 - r^n}{1 - r}}$$

**Use which form?**

- If $r > 1$: Use $S_n = a\frac{r^n - 1}{r - 1}$ (positive denominator)
- If $r < 1$: Use $S_n = a\frac{1 - r^n}{1 - r}$ (positive denominator)

**When $r = 1$:** All terms are equal to $a$, so $S_n = na$

**Memory Trick:** “**G**reat **R**atios **N**eed **D**ifference” → $\frac{r^n-1}{r-1}$

### 3. Common Ratio Test

$$\boxed{r = \frac{T_{n+1}}{T_n} = \frac{T_n}{T_{n-1}}}$$

A sequence is GP if the ratio of consecutive terms is constant.

### Interactive Demo: Visualize Geometric Progression

Explore how GP terms grow or decay exponentially with different ratios.

---

## Important Properties

### 1. Three Terms in GP

If $a, b, c$ are in GP, then:

$$\boxed{b^2 = ac}$$

or

$$b = \pm\sqrt{ac}$$

The middle term is the **geometric mean** of the outer terms.

### 2. Selection of Terms in GP

- **3 terms:** $\frac{a}{r}, a, ar$ (product = $a^3$)
- **4 terms:** $\frac{a}{r^3}, \frac{a}{r}, ar, ar^3$ (product = $a^4$)
- **5 terms:** $\frac{a}{r^2}, \frac{a}{r}, a, ar, ar^2$ (product = $a^5$)

**Advantage:** Symmetric selection simplifies product calculations!

### 3. Product of Terms Equidistant from Ends

In a GP with $n$ terms:

$$T_k \cdot T_{n-k+1} = a \cdot l = \text{constant}$$

where $l$ is the last term.

**Example:** In GP with 10 terms, $T_2 \cdot T_9 = T_3 \cdot T_8 = T_1 \cdot T_{10}$

### 4. Geometric Mean (GM)

**GM of two numbers $a$ and $b$:**

$$\text{GM} = \sqrt{ab}$$

**Insert $n$ GMs between $a$ and $b$:**

Common ratio:

$$r = \left(\frac{b}{a}\right)^{\frac{1}{n+1}}$$

### 5. Important GP Relationships

1. If each term of GP is multiplied/divided by same non-zero constant, result is still GP
2. If each term is raised to same power, result is still GP
3. Reciprocals of GP terms form a GP with ratio $\frac{1}{r}$
4. Product of corresponding terms of two GPs is also a GP

---

## Common Mistakes & How to Avoid Them

### ❌ Mistake 1: Power Confusion in nth Term

**Wrong:** $T_n = ar^n$ ✗

**Correct:** $T_n = ar^{n-1}$ ✓

**Why?** For $n=1$, we need $T_1 = a$, not $ar$!

**Check:** $T_1 = ar^{1-1} = ar^0 = a$ ✓

---

### ❌ Mistake 2: Sign Errors with Negative Ratio

**Problem:** Find 5th term of GP: 3, -6, 12, -24, &mldr;

**Wrong:** $r = \frac{-6}{3} = -2$, then $T_5 = 3(-2)^4 = 3 \times 16 = 48$ ✗

**Correct:** $r = -2$, so $T_5 = 3(-2)^4 = 3 \times 16 = 48$ ✓

Wait, that’s correct! Let me fix:

**Wrong:** $T_5 = 3(2)^4 = 48$ (forgetting negative sign) ✗

**Correct:** $r = -2$, so $T_5 = 3(-2)^{5-1} = 3(-2)^4 = 3 \times 16 = 48$ ✓

**Note:** $(-2)^4 = +16$ (even power → positive)

For $T_6 = 3(-2)^5 = 3 \times (-32) = -96$ (odd power → negative)

---

### ❌ Mistake 3: Wrong Sum Formula Selection

**Problem:** Sum first 5 terms of GP: 2, -6, 18, -54, &mldr;

**Wrong:** $r = -3$, using $S_n = a\frac{r^n-1}{r-1}$:

$S_5 = 2\frac{(-3)^5-1}{-3-1} = 2\frac{-243-1}{-4} = 2\frac{-244}{-4} = 2 \times 61 = 122$ ✓

**Alternative (also correct):** $S_5 = a\frac{1-r^n}{1-r} = 2\frac{1-(-3)^5}{1-(-3)} = 2\frac{1-(-243)}{4} = 2\frac{244}{4} = 122$ ✓

**Tip:** Both forms work! Choose the one that gives simpler arithmetic.

---

### ❌ Mistake 4: Forgetting r = 1 Case

**Problem:** Sum first 10 terms when $a = 5, r = 1$

**Wrong:** $S_{10} = 5\frac{1^{10}-1}{1-1} = \frac{0}{0}$ ✗ (undefined!)

**Correct:** When $r = 1$, all terms equal $a$, so $S_{10} = 10a = 10 \times 5 = 50$ ✓

**Always check:** Is $r = 1$? Use $S_n = na$ instead!

---

### ❌ Mistake 5: Sum of Infinite GP Conditions

**Wrong:** $S_\infty = \frac{a}{1-r}$ for any GP ✗

**Correct:** $S_\infty = \frac{a}{1-r}$ ONLY when $|r| < 1$ ✓

**Counter-example:** For $r = 2$, sum grows infinitely and doesn’t converge!

---

## Problem-Solving Strategies

### Strategy 1: Finding Unknown Terms

**Problem:** Three numbers in GP have sum 26 and product 216. Find the numbers.

**Solution:**

Let terms be $\frac{a}{r}, a, ar$ (smart selection!)

Product: $\frac{a}{r} \cdot a \cdot ar = a^3 = 216$ → $a = 6$

Sum: $\frac{6}{r} + 6 + 6r = 26$

$\frac{6}{r} + 6r = 20$

Multiply by $r$: $6 + 6r^2 = 20r$

$6r^2 - 20r + 6 = 0$

$3r^2 - 10r + 3 = 0$

$3r^2 - 9r - r + 3 = 0$

$3r(r-3) - 1(r-3) = 0$

$(3r-1)(r-3) = 0$

$r = 3$ or $r = \frac{1}{3}$

**For $r = 3$:** Terms are $\frac{6}{3}, 6, 18$ = $2, 6, 18$

**For $r = \frac{1}{3}$:** Terms are $18, 6, 2$

**Answer:** $2, 6, 18$ (or reverse order)

---

### Strategy 2: Sum Problems with Powers

**Problem:** Find sum: $1 + 2 + 4 + 8 + \cdots + 2^{10}$

**Solution:**

This is GP with $a = 1, r = 2, n = 11$ (from $2^0$ to $2^{10}$, that’s 11 terms)

$S_{11} = 1 \cdot \frac{2^{11} - 1}{2-1} = 2^{11} - 1 = 2048 - 1 = 2047$

**Shortcut:** $1 + 2 + 4 + \cdots + 2^n = 2^{n+1} - 1$

**Answer:** 2047

---

### Strategy 3: Finding Number of Terms

**Problem:** How many terms of GP $3, 3^2, 3^3, \ldots$ must be taken so that sum = 120?

**Solution:**

$a = 3, r = 3$

$S_n = 3 \cdot \frac{3^n - 1}{3-1} = 3 \cdot \frac{3^n-1}{2} = 120$

$\frac{3^n - 1}{2} = 40$

$3^n - 1 = 80$

$3^n = 81 = 3^4$

$n = 4$

**Verification:** $S_4 = 3 + 9 + 27 + 81 = 120$ ✓

**Answer:** 4 terms

---

### Strategy 4: Mixed AP-GP Problems

**Problem:** Find $x$ if $1, x, 16$ are in GP and $x, 16, y$ are in AP.

**Solution:**

**From GP condition:** $x^2 = 1 \times 16 = 16$ → $x = \pm 4$

**From AP condition:** $2 \times 16 = x + y$ → $y = 32 - x$

**If $x = 4$:** $y = 32 - 4 = 28$

**If $x = -4$:** $y = 32 - (-4) = 36$

**Answer:** $(x, y) = (4, 28)$ or $(-4, 36)$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1:** Find the 8th term of the GP: 5, 15, 45, &mldr;

<details><summary>Solution</summary><p>$a = 5$, $r = \frac{15}{5} = 3$</p><p>$T_8 = ar^{7} = 5 \times 3^7 = 5 \times 2187 = 10935$</p><p><strong>Answer:</strong> 10935</p></details>

---

**Problem 2:** Find the sum of first 6 terms of GP: 2, 6, 18, 54, &mldr;

<details><summary>Solution</summary><p>$a = 2$, $r = 3$, $n = 6$</p><p>$S_6 = 2 \cdot \frac{3^6 - 1}{3 - 1} = 2 \cdot \frac{729 - 1}{2} = 728$</p><p><strong>Answer:</strong> 728</p></details>

---

**Problem 3:** If 5th term of GP is 48 and 8th term is 384, find the first term and common ratio.

<details><summary>Solution</summary><p>$T_5 = ar^4 = 48$ &amp;mldr; (1)</p><p>$T_8 = ar^7 = 384$ &amp;mldr; (2)</p><p>Divide (2) by (1): $\frac{ar^7}{ar^4} = \frac{384}{48}$</p><p>$r^3 = 8$</p><p>$r = 2$</p><p>Substitute in (1): $a \times 2^4 = 48$</p><p>$16a = 48$</p><p>$a = 3$</p><p><strong>Answer:</strong> $a = 3, r = 2$</p></details>

---

### Level 2: JEE Main/Advanced

**Problem 4:** The sum of first three terms of a GP is 13 and sum of their squares is 91. Find the GP.

<details><summary>Solution</summary><p>Let GP be $\frac{a}{r}, a, ar$</p><p>Sum: $\frac{a}{r} + a + ar = 13$ &amp;mldr; (1)</p><p>Sum of squares: $\frac{a^2}{r^2} + a^2 + a^2r^2 = 91$ &amp;mldr; (2)</p><p>From (1): $a\left(\frac{1}{r} + 1 + r\right) = 13$</p><p>From (2): $a^2\left(\frac{1}{r^2} + 1 + r^2\right) = 91$</p><p>Note: $\frac{1}{r^2} + 1 + r^2 = \left(\frac{1}{r} + r\right)^2 - 2 + 1 = \left(\frac{1}{r} + r\right)^2 - 1$</p><p>Let $\frac{1}{r} + 1 + r = t$, then $\frac{1}{r} + r = t - 1$</p><p>From (1): $at = 13$</p><p>From (2): $a^2[(t-1)^2 - 1] = 91$</p><p>$a^2[t^2 - 2t + 1 - 1] = 91$</p><p>$a^2(t^2 - 2t) = 91$</p><p>$a^2 \cdot t(t-2) = 91$</p><p>$(at) \cdot a(t-2) = 91$</p><p>$13 \cdot a(t-2) = 91$</p><p>$a(t-2) = 7$</p><p>$at - 2a = 7$</p><p>$13 - 2a = 7$</p><p>$a = 3$</p><p>From $at = 13$: $t = \frac{13}{3}$</p><p>$\frac{1}{r} + 1 + r = \frac{13}{3}$</p><p>$\frac{1}{r} + r = \frac{10}{3}$</p><p>Multiply by $r$: $1 + r^2 = \frac{10r}{3}$</p><p>$3 + 3r^2 = 10r$</p><p>$3r^2 - 10r + 3 = 0$</p><p>$(3r-1)(r-3) = 0$</p><p>$r = 3$ or $r = \frac{1}{3}$</p><p><strong>For $r = 3$:</strong> GP is $1, 3, 9$</p><p><strong>For $r = \frac{1}{3}$:</strong> GP is $9, 3, 1$</p><p><strong>Answer:</strong> $1, 3, 9$ or $9, 3, 1$</p></details>

---

**Problem 5:** If $a, b, c$ are in GP and $\log_a x, \log_b x, \log_c x$ are in AP, find the common ratio of the GP.

<details><summary>Solution</summary><p>Since $a, b, c$ are in GP: $b^2 = ac$ and $c = ar^2, b = ar$ for some $r$.</p><p>Given: $\log_a x, \log_b x, \log_c x$ are in AP</p><p>$2\log_b x = \log_a x + \log_c x$</p><p>Using change of base: $\log_b x = \frac{\ln x}{\ln b}$</p><p>$2 \cdot \frac{\ln x}{\ln b} = \frac{\ln x}{\ln a} + \frac{\ln x}{\ln c}$</p><p>Divide by $\ln x$ (assuming $x \neq 1$):</p><p>$\frac{2}{\ln b} = \frac{1}{\ln a} + \frac{1}{\ln c}$</p><p>$\frac{2}{\ln b} = \frac{\ln c + \ln a}{\ln a \cdot \ln c}$</p><p>$2\ln a \cdot \ln c = \ln b(\ln a + \ln c)$</p><p>$2\ln a \cdot \ln c = \ln b \cdot \ln(ac)$</p><p>Since $b^2 = ac$: $\ln b^2 = \ln(ac)$ → $2\ln b = \ln(ac)$</p><p>$2\ln a \cdot \ln c = \ln b \cdot 2\ln b$</p><p>$\ln a \cdot \ln c = (\ln b)^2$</p><p>Since $b = ar, c = ar^2$:</p><p>$\ln a \cdot \ln(ar^2) = (\ln ar)^2$</p><p>$\ln a \cdot (\ln a + 2\ln r) = (\ln a + \ln r)^2$</p><p>$(\ln a)^2 + 2\ln a \ln r = (\ln a)^2 + 2\ln a \ln r + (\ln r)^2$</p><p>$0 = (\ln r)^2$</p><p>$\ln r = 0$</p><p>$r = 1$</p><p>Wait, this means all terms are equal, which is trivial.</p><p>Let me reconsider. Actually, the condition “$a, b, c$ in GP” with the log condition might have a different solution. Let me try a different approach:</p><p>If $\frac{1}{\log_a x}, \frac{1}{\log_b x}, \frac{1}{\log_c x}$ (which are $\log_x a, \log_x b, \log_x c$) are in HP (reciprocals of AP are in HP), then:</p><p>$2\log_x b = \log_x a + \log_x c$</p><p>$\log_x b^2 = \log_x(ac)$</p><p>$b^2 = ac$ ✓ (which confirms GP condition!)</p><p>So actually, the answer is <strong>any common ratio $r$</strong> works!</p><p><strong>Answer:</strong> Any value of $r$ (the GP condition automatically satisfies the AP condition)</p><p>Actually, reviewing: the problem states they are in AP, not HP. Let me recalculate properly.</p><p>For AP: $2\log_b x = \log_a x + \log_c x$</p><p>This leads to $r = 1$ as shown above, which means the GP is constant.</p><p><strong>Answer:</strong> $r = 1$</p></details>

---

### Level 3: JEE Advanced

**Problem 6:** Find the sum: $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$ to $\infty$

<details><summary>Solution</summary><p>This is infinite GP with $a = 1, r = \frac{1}{2}$</p><p>Since $|r| = \frac{1}{2} &lt; 1$, sum converges:</p><p>$S_\infty = \frac{a}{1-r} = \frac{1}{1-\frac{1}{2}} = \frac{1}{\frac{1}{2}} = 2$</p><p><strong>Answer:</strong> 2</p></details>

---

**Problem 7:** If $S_1, S_2, S_3, \ldots$ denote the sums of infinite geometric progressions with first terms $1, 2, 3, \ldots$ and common ratio $\frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \ldots$ respectively, find $S_1 + S_2 + S_3 + \cdots + S_n$.

<details><summary>Solution</summary><p>$S_k = \frac{k}{1 - \frac{1}{k+1}} = \frac{k}{\frac{k}{k+1}} = \frac{k(k+1)}{k} = k+1$</p><p>So: $S_1 = 2, S_2 = 3, S_3 = 4, \ldots, S_n = n+1$</p><p>Sum = $2 + 3 + 4 + \cdots + (n+1)$</p><p>This is sum of $(n+1-2+1) = n$ terms starting from 2.</p><p>$= \frac{n}{2}[2 + (n+1)] = \frac{n(n+3)}{2}$</p><p><strong>Answer:</strong> $\frac{n(n+3)}{2}$</p></details>

---

**Problem 8:** If the sum of first $n$ terms of a series is $2^n - 1$, show that it forms a GP and find the series.

<details><summary>Solution</summary><p>$S_n = 2^n - 1$</p><p>$T_n = S_n - S_{n-1} = (2^n - 1) - (2^{n-1} - 1) = 2^n - 2^{n-1} = 2^{n-1}(2-1) = 2^{n-1}$</p><p>For $n = 1$: $T_1 = S_1 = 2^1 - 1 = 1$ ✓</p><p>Also, $T_1 = 2^{1-1} = 2^0 = 1$ ✓</p><p>The series is: $1, 2, 4, 8, 16, \ldots$ (GP with $a = 1, r = 2$)</p><p>Ratio: $\frac{T_{n+1}}{T_n} = \frac{2^n}{2^{n-1}} = 2$ (constant) ✓</p><p><strong>Answer:</strong> GP with first term 1 and common ratio 2: $1, 2, 4, 8, 16, \ldots$</p></details>

---

## Cross-Topic Connections

### 1. Link to Logarithms

GP problems often involve logarithms. If $a, b, c$ are in GP, then $\log a, \log b, \log c$ are in AP! See applications in logarithmic series.

### 2. Link to Limits

Infinite GP convergence: $\lim_{n \to \infty} S_n = \frac{a}{1-r}$ when $|r| < 1$. This connects to [Limits and Continuity](../../limits-continuity-differentiability/index.md).

### 3. Link to Binomial Theorem

Expanding $(1+x)^n$ and substituting special values creates GP patterns. See [Binomial Theorem](../../binomial-theorem/index.md) for connections.

### 4. Link to Complex Numbers

Roots of unity form a GP on the complex plane. See [Complex Numbers](../../complex-numbers/index.md).

---

## Quick Revision Checklist

- Remember $T_n = ar^{n-1}$ (not $ar^n$!)
- Know both sum forms: $\frac{r^n-1}{r-1}$ and $\frac{1-r^n}{1-r}$
- Special case: When $r = 1$, $S_n = na$
- Infinite GP: $S_\infty = \frac{a}{1-r}$ only when $|r| < 1$
- Selection: 3 terms as $\frac{a}{r}, a, ar$ (product = $a^3$)
- $b^2 = ac$ if $a, b, c$ in GP
- Handle negative ratios carefully (check even/odd powers!)

---

## Memory Palace Technique

Imagine a **bacterial culture** (GP = exponential growth):

1. **Petri Dish (First Term):** You start with $a$ bacteria
2. **Doubling (Common Ratio):** Every hour, bacteria multiply by $r$
3. **Time Machine (nth Term):** After $n$ hours, you have $ar^{n-1}$ bacteria
4. **Total Count (Sum):** To find total bacteria ever: $\frac{r^n-1}{r-1}$ formula
5. **Infinity (Infinite GP):** If bacteria keep dying faster ($r < 1$), total approaches $\frac{a}{1-r}$

---

## Final Tips for JEE

1. **Check $r = 1$ separately** - sum formula doesn’t work!
2. **Infinite GP convergence** - only when $|r| < 1$, never forget absolute value
3. **Sign management** - negative $r$ alternates signs; watch even/odd powers
4. **Smart selection** - use $\frac{a}{r}, a, ar$ for easier algebra with products
5. **Verify conditions** - always check if your solution satisfies all given conditions
6. **Common ratio from two terms** - $\frac{T_8}{T_5} = r^3$ (subtract indices!)
7. **Infinite decimals** - $0.333\ldots = \frac{3}{9}$ is infinite GP application

---

*Last Updated: October 18, 2025*

From TestGuru · our mock-test platform

## You've read Geometric Progression (GP).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sequences-series&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsequences-series%2Fgeometric-progression%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
function generateGP(){const n=parseFloat(document.getElementById("gpFirst").value)||2,e=parseFloat(document.getElementById("gpRatio").value)||3,t=parseInt(document.getElementById("gpTerms").value)||6;let s=[],i=0;for(let o=0;o<t;o++){const a=n*e**o;s.push(a.toFixed(2)),i+=a}const o=n*e**(t-1),a=e!==1?n*(e**t-1)/(e-1):t*n;document.getElementById("gpSequence").innerHTML="GP: "+s.join(", ")+(t<15?"":", ..."),document.getElementById("gpFormulas").innerHTML=`
    <strong>Results:</strong><br>
    • nth term (T<sub>${t}</sub>) = ${o.toFixed(2)}<br>
    • Sum (S<sub>${t}</sub>) = ${a.toFixed(2)}<br>
    • Formula: ${n} × ${e}<sup>${t-1}</sup> = ${o.toFixed(2)} ✓<br>
    • Growth type: ${(e<0?-e:e)>1?"Exponential Growth":(e<0?-e:e)<1?"Exponential Decay":"Constant"}
  `}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",generateGP):generateGP()
```


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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sequences-series/geometric-progression/",this.page.identifier="/mathematics/sequences-series/geometric-progression/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="seriesVisualization" id="anim-seriesVisualization-1795396422106493416"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-seriesVisualization-1795396422106493416")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sequences-series/geometric-progression/](https://jeenotes.in/mathematics/sequences-series/geometric-progression/) · raw HTML: `offline/mathematics/sequences-series/geometric-progression/index.html`_
