---
title: "Properties of Binomial Coefficients"
source: "https://jeenotes.in/mathematics/binomial-theorem/binomial-coefficients/"
description: "Complete guide to binomial coefficient properties, identities, and applications in JEE problems"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 7"
html: "../../../../offline/mathematics/binomial-theorem/binomial-coefficients/index.html"
extracted: "2026-11-23"
---

> Complete guide to binomial coefficient properties, identities, and applications in JEE problems

# Properties of Binomial Coefficients

## Introduction

**Binomial coefficients** are the numerical coefficients in the expansion of $(a + b)^n$, denoted by $\binom{n}{r}$ or ${}^nC_r$. They have remarkable properties that simplify many algebraic calculations.

---

## Interactive Demo: Pascal’s Triangle

### Build Pascal's Triangle

Each number is the sum of the two numbers above it. This visualizes Pascal's Identity: C(n,r) = C(n-1,r-1) + C(n-1,r)

---

## Definition

> $$\boxed{\binom{n}{r} = {}^nC_r = \frac{n!}{r!(n-r)!}}$$

where $0 \leq r \leq n$ and $n, r$ are non-negative integers.

**Special Cases**:

- $\binom{n}{0} = 1$
- $\binom{n}{n} = 1$
- $\binom{n}{1} = n$
- $\binom{n}{n-1} = n$

---

## Fundamental Properties

### Interactive Demo: Visualize Coefficient Properties

Explore properties like symmetry through Pascal’s Triangle.

### Property 1: Symmetry Property

> $$\boxed{\binom{n}{r} = \binom{n}{n-r}}$$

**Proof**:

$$\binom{n}{r} = \frac{n!}{r!(n-r)!} = \frac{n!}{(n-r)![n-(n-r)]!} = \binom{n}{n-r}$$

**Example**: $\binom{10}{3} = \binom{10}{7} = 120$

---

### Property 2: Pascal’s Identity

> $$\boxed{\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}}$$

**Proof**:

$$\begin{align}
\binom{n-1}{r-1} + \binom{n-1}{r} &= \frac{(n-1)!}{(r-1)!(n-r)!} + \frac{(n-1)!}{r!(n-r-1)!} \\
&= \frac{(n-1)!}{(r-1)!(n-r-1)!}\left[\frac{1}{n-r} + \frac{1}{r}\right] \\
&= \frac{(n-1)!}{(r-1)!(n-r-1)!} \cdot \frac{n}{r(n-r)} \\
&= \frac{n!}{r!(n-r)!} = \binom{n}{r}
\end{align}$$

This property generates **Pascal’s Triangle**.

---

### Property 3: Sum of All Binomial Coefficients

> $$\boxed{\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \cdots + \binom{n}{n} = 2^n}$$

**Proof**: Put $a = b = 1$ in $(a+b)^n$:

$$(1+1)^n = \sum_{r=0}^{n}\binom{n}{r} = 2^n$$

**Example**: $\binom{5}{0} + \binom{5}{1} + \binom{5}{2} + \binom{5}{3} + \binom{5}{4} + \binom{5}{5} = 1+5+10+10+5+1 = 32 = 2^5$

---

### Property 4: Sum of Coefficients at Odd and Even Places

> $$\boxed{\binom{n}{0} + \binom{n}{2} + \binom{n}{4} + \cdots = \binom{n}{1} + \binom{n}{3} + \binom{n}{5} + \cdots = 2^{n-1}}$$

**Proof**: Put $a = 1, b = -1$ in $(a+b)^n$:

$$(1-1)^n = \binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \binom{n}{3} + \cdots = 0$$

Let $E = \binom{n}{0} + \binom{n}{2} + \binom{n}{4} + \cdots$ (even positions)

Let $O = \binom{n}{1} + \binom{n}{3} + \binom{n}{5} + \cdots$ (odd positions)

Then: $E - O = 0 \Rightarrow E = O$

And: $E + O = 2^n \Rightarrow 2E = 2^n \Rightarrow E = O = 2^{n-1}$

---

### Property 5: Sum with Variable Powers

> $$\boxed{\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \binom{n}{3} + \cdots + (-1)^n\binom{n}{n} = 0}$$

**Proof**: Put $x = -1$ in $(1+x)^n = \sum_{r=0}^{n}\binom{n}{r}x^r$

---

### Property 6: Ratio of Consecutive Coefficients

> $$\boxed{\frac{\binom{n}{r}}{\binom{n}{r-1}} = \frac{n-r+1}{r}}$$

**Proof**:

$$\frac{\binom{n}{r}}{\binom{n}{r-1}} = \frac{n!/(r!(n-r)!)}{n!/((r-1)!(n-r+1)!)} = \frac{(r-1)!(n-r+1)!}{r!(n-r)!} = \frac{n-r+1}{r}$$

---

## Advanced Properties

### Property 7: Sum of Products

> $$\boxed{\binom{n}{0}^2 + \binom{n}{1}^2 + \binom{n}{2}^2 + \cdots + \binom{n}{n}^2 = \binom{2n}{n}}$$

**Proof**: Consider $(1+x)^n \cdot (1+x)^n = (1+x)^{2n}$

Coefficient of $x^n$ on LHS = $\sum_{r=0}^{n}\binom{n}{r}\binom{n}{n-r} = \sum_{r=0}^{n}\binom{n}{r}^2$

Coefficient of $x^n$ on RHS = $\binom{2n}{n}$

---

### Property 8: Sum with Index Multiplication

> $$\boxed{\sum_{r=0}^{n} r \cdot \binom{n}{r} = n \cdot 2^{n-1}}$$

**Proof**:

$$\sum_{r=0}^{n} r \cdot \binom{n}{r} x^r = x\frac{d}{dx}[(1+x)^n] = x \cdot n(1+x)^{n-1}$$

Put $x = 1$: $\sum_{r=0}^{n} r \cdot \binom{n}{r} = n \cdot 2^{n-1}$

---

### Property 9: Vandermonde’s Identity

> $$\boxed{\sum_{r=0}^{k} \binom{m}{r}\binom{n}{k-r} = \binom{m+n}{k}}$$

This is the coefficient of $x^k$ in $(1+x)^m(1+x)^n = (1+x)^{m+n}$

---

## Memory Tricks

### 🎯 Symmetry Memory

**“Mirror Property”**: $\binom{n}{r} = \binom{n}{n-r}$

- Choosing $r$ items = Leaving $(n-r)$ items
- Both are the same!

### 🎯 Pascal’s Triangle Builder

**“Add the neighbors above”**:

```fallback
1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
```

Each number = sum of two numbers directly above it.

### 🎯 Sum Formula Memory

**“Power of 2 Rule”**:

- All coefficients sum: $2^n$
- Even position sum = Odd position sum = $2^{n-1}$
- Think: “Half the total”

### 🎯 Ratio Trick

**“Top-Bottom Rule”**: $\frac{\binom{n}{r}}{\binom{n}{r-1}} = \frac{n-r+1}{r}$

**Mnemonic**: “**N**ew **M**inus **R** plus 1, over **R**”

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Wrong Symmetry Application

**Wrong**: $\binom{10}{3} = \binom{3}{10}$ ✗

**Correct**: $\binom{10}{3} = \binom{10}{10-3} = \binom{10}{7}$ ✓

**Remember**: Both $n$ values must be same in symmetry!

### ❌ Mistake 2: Pascal’s Identity Confusion

**Wrong**: $\binom{n}{r} = \binom{n}{r-1} + \binom{n}{r+1}$ ✗

**Correct**: $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$ ✓

**Remember**: Go to **previous row** (n-1), not same row!

### ❌ Mistake 3: Sum Calculation Error

**Wrong**: Sum of odd-positioned coefficients = $2^n$ ✗

**Correct**: Sum of odd-positioned OR even-positioned = $2^{n-1}$ ✓

### ❌ Mistake 4: Ratio Formula Misuse

**Wrong**: $\frac{\binom{n}{r}}{\binom{n}{r-1}} = \frac{r}{n-r+1}$ ✗

**Correct**: $\frac{\binom{n}{r}}{\binom{n}{r-1}} = \frac{n-r+1}{r}$ ✓

---

## Solved Examples

### Example 1: Using Symmetry (JEE Main)

**Evaluate: $\binom{20}{17} + \binom{20}{16}$**

**Solution**:
Using symmetry: $\binom{20}{17} = \binom{20}{3}$ and $\binom{20}{16} = \binom{20}{4}$

$$\begin{align}
\binom{20}{3} + \binom{20}{4} &= \frac{20 \times 19 \times 18}{3 \times 2 \times 1} + \frac{20 \times 19 \times 18 \times 17}{4 \times 3 \times 2 \times 1} \\
&= 1140 + 4845 \\
&= 5985
\end{align}$$

Or using Pascal’s Identity: $\binom{20}{3} + \binom{20}{4} = \binom{21}{4} = 5985$

---

### Example 2: Sum of Coefficients (JEE Main)

**If the sum of coefficients in $(1 + x)^n$ is 1024, find $n$.**

**Solution**:
Sum of coefficients = $2^n = 1024 = 2^{10}$

Therefore, $n = 10$

---

### Example 3: Odd/Even Position Sum (JEE Advanced)

**In the expansion of $(1 + x)^{20}$, find the sum of coefficients of even powers of $x$.**

**Solution**:
Sum of coefficients at even powers = $2^{n-1} = 2^{20-1} = 2^{19} = 524288$

---

### Example 4: Using Ratio Property (JEE Advanced)

**In the expansion of $(1 + x)^n$, if the coefficient of 5th term is equal to the coefficient of 8th term, find $n$.**

**Solution**:
5th term: $T_5 = \binom{n}{4}x^4$, coefficient = $\binom{n}{4}$

8th term: $T_8 = \binom{n}{7}x^7$, coefficient = $\binom{n}{7}$

Given: $\binom{n}{4} = \binom{n}{7}$

Using symmetry: $\binom{n}{4} = \binom{n}{n-4}$

So: $\binom{n}{7} = \binom{n}{n-4}$

Therefore: $7 = n - 4 \Rightarrow n = 11$

---

### Example 5: Vandermonde’s Identity (JEE Advanced)

**Prove: $\binom{2n}{0}\binom{2n}{2n} + \binom{2n}{1}\binom{2n}{2n-1} + \cdots + \binom{2n}{2n}\binom{2n}{0} = \binom{4n}{2n}$**

**Solution**:
Using Vandermonde’s Identity with $m = n = 2n$ and $k = 2n$:

$$\sum_{r=0}^{2n} \binom{2n}{r}\binom{2n}{2n-r} = \binom{4n}{2n}$$

But $\binom{2n}{2n-r} = \binom{2n}{r}$ (symmetry)

Therefore: $\sum_{r=0}^{2n} \binom{2n}{r}\binom{2n}{r} = \binom{4n}{2n}$

Hence proved.

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Evaluate $\binom{15}{12} + \binom{15}{13}$ using Pascal’s identity.

<details><summary>Solution</summary><p>Using Pascal’s Identity: $\binom{n-1}{r-1} + \binom{n-1}{r} = \binom{n}{r}$</p><p>Here: $\binom{15}{12} + \binom{15}{13} = \binom{16}{13}$</p><p>Using symmetry: $\binom{16}{13} = \binom{16}{3} = \frac{16 \times 15 \times 14}{6} = 560$</p></details>

**Problem 1.2**: Find the sum of all binomial coefficients in $(1 + 2x)^{10}$.

<details><summary>Solution</summary><p>Put $x = 1$: $(1 + 2)^{10} = 3^{10} = 59049$</p><p>Note: This gives sum of all coefficients including the constant multipliers.</p><p>For just binomial coefficients $\binom{10}{r}$: Sum = $2^{10} = 1024$</p></details>

**Problem 1.3**: If $\binom{n}{8} = \binom{n}{6}$, find $n$.

<details><summary>Solution</summary><p>Using symmetry: $\binom{n}{r} = \binom{n}{n-r}$</p><p>So: $\binom{n}{8} = \binom{n}{n-8}$</p><p>Given: $\binom{n}{8} = \binom{n}{6}$</p><p>Therefore: $6 = n - 8 \Rightarrow n = 14$</p></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Prove that $\binom{n}{1} + 2\binom{n}{2} + 3\binom{n}{3} + \cdots + n\binom{n}{n} = n \cdot 2^{n-1}$.

<details><summary>Solution</summary><p>We know: $r\binom{n}{r} = n\binom{n-1}{r-1}$</p><p>So: $\sum_{r=1}^{n} r\binom{n}{r} = n\sum_{r=1}^{n}\binom{n-1}{r-1}$</p><p>Let $k = r-1$, then when $r = 1, k = 0$ and when $r = n, k = n-1$:</p><p>$= n\sum_{k=0}^{n-1}\binom{n-1}{k} = n \cdot 2^{n-1}$</p></details>

**Problem 2.2**: Find the value of $\binom{10}{0}\binom{10}{10} + \binom{10}{1}\binom{10}{9} + \cdots + \binom{10}{10}\binom{10}{0}$.

<details><summary>Solution</summary><p>Using Property 7: $\sum_{r=0}^{n}\binom{n}{r}^2 = \binom{2n}{n}$</p><p>Here $n = 10$:</p><p>$\sum_{r=0}^{10}\binom{10}{r}\binom{10}{10-r} = \sum_{r=0}^{10}\binom{10}{r}^2 = \binom{20}{10}$</p><p>$= \frac{20!}{10! \cdot 10!} = 184756$</p></details>

**Problem 2.3**: If $\binom{n}{r-1} = 36$, $\binom{n}{r} = 84$, and $\binom{n}{r+1} = 126$, find $n$ and $r$.

<details><summary>Solution</summary><p>Using $\frac{\binom{n}{r}}{\binom{n}{r-1}} = \frac{n-r+1}{r}$:</p><p>$\frac{84}{36} = \frac{n-r+1}{r} \Rightarrow \frac{7}{3} = \frac{n-r+1}{r}$</p><p>$\Rightarrow 7r = 3(n-r+1) \Rightarrow 7r = 3n - 3r + 3 \Rightarrow 10r = 3n + 3$ &amp;mldr; (1)</p><p>Similarly: $\frac{\binom{n}{r+1}}{\binom{n}{r}} = \frac{n-r}{r+1}$:</p><p>$\frac{126}{84} = \frac{n-r}{r+1} \Rightarrow \frac{3}{2} = \frac{n-r}{r+1}$</p><p>$\Rightarrow 3(r+1) = 2(n-r) \Rightarrow 3r + 3 = 2n - 2r \Rightarrow 5r = 2n - 3$ &amp;mldr; (2)</p><p>From (1): $n = \frac{10r - 3}{3}$</p><p>Substitute in (2): $5r = 2 \cdot \frac{10r - 3}{3} - 3$</p><p>$15r = 20r - 6 - 9 \Rightarrow 5r = 15 \Rightarrow r = 3$</p><p>From (2): $n = \frac{5(3) + 3}{2} = 9$</p><p>Therefore: $n = 9, r = 3$</p></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Prove that $\sum_{r=0}^{n} \frac{\binom{n}{r}}{r+1} = \frac{2^{n+1} - 1}{n+1}$.

<details><summary>Solution</summary><p>We know: $(1+x)^n = \sum_{r=0}^{n}\binom{n}{r}x^r$</p><p>Integrate both sides from 0 to 1:</p><p>$\int_0^1 (1+x)^n dx = \sum_{r=0}^{n}\binom{n}{r}\int_0^1 x^r dx$</p><p>$\left[\frac{(1+x)^{n+1}}{n+1}\right]_0^1 = \sum_{r=0}^{n}\binom{n}{r}\left[\frac{x^{r+1}}{r+1}\right]_0^1$</p><p>$\frac{2^{n+1} - 1}{n+1} = \sum_{r=0}^{n}\frac{\binom{n}{r}}{r+1}$</p></details>

**Problem 3.2**: Show that $\binom{n}{0}^2 - \binom{n}{1}^2 + \binom{n}{2}^2 - \cdots + (-1)^n\binom{n}{n}^2 = \begin{cases}0 & \text{if } n \text{ is odd} \\ (-1)^{n/2}\binom{n}{n/2} & \text{if } n \text{ is even}\end{cases}$

<details><summary>Solution</summary><p>Consider $(1+x)^n(1-x)^n = (1-x^2)^n$</p><p>Coefficient of $x^n$ on LHS:</p><p>$\sum_{r=0}^{n}(-1)^{n-r}\binom{n}{r}\binom{n}{n-r} = (-1)^n\sum_{r=0}^{n}(-1)^r\binom{n}{r}^2$</p><p>Coefficient of $x^n$ on RHS from $(1-x^2)^n = \sum_{k=0}^{n}\binom{n}{k}(-x^2)^k$:</p><p>For $x^n$: need $2k = n$, so $k = n/2$ (only if $n$ is even)</p><p>If $n$ odd: coefficient = 0</p><p>If $n$ even: coefficient = $\binom{n}{n/2}(-1)^{n/2}$</p><p>Therefore: $(-1)^n\sum_{r=0}^{n}(-1)^r\binom{n}{r}^2 = \begin{cases}0 &amp; n \text{ odd} \\ (-1)^{n/2}\binom{n}{n/2} &amp; n \text{ even}\end{cases}$</p><p>Hence: $\sum_{r=0}^{n}(-1)^r\binom{n}{r}^2 = \begin{cases}0 &amp; n \text{ odd} \\ (-1)^{n/2}\binom{n}{n/2} &amp; n \text{ even}\end{cases}$</p></details>

**Problem 3.3**: Prove: $\sum_{r=0}^{n} r^2 \binom{n}{r} = n(n+1)2^{n-2}$.

<details><summary>Solution</summary><p>We know: $r\binom{n}{r} = n\binom{n-1}{r-1}$</p><p>So: $r^2\binom{n}{r} = rn\binom{n-1}{r-1} = n(r-1+1)\binom{n-1}{r-1}$</p><p>$= n(r-1)\binom{n-1}{r-1} + n\binom{n-1}{r-1}$</p><p>$= n(n-1)\binom{n-2}{r-2} + n\binom{n-1}{r-1}$</p><p>Therefore:
$\sum_{r=0}^{n}r^2\binom{n}{r} = n(n-1)\sum_{r=0}^{n}\binom{n-2}{r-2} + n\sum_{r=0}^{n}\binom{n-1}{r-1}$</p><p>$= n(n-1) \cdot 2^{n-2} + n \cdot 2^{n-1}$</p><p>$= n \cdot 2^{n-2}[(n-1) + 2]$</p><p>$= n(n+1)2^{n-2}$</p></details>

---

## Important Identities Summary

| Identity | Formula |
| --- | --- |
| Symmetry | $\binom{n}{r} = \binom{n}{n-r}$ |
| Pascal’s | $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$ |
| Sum of all | $\sum_{r=0}^{n}\binom{n}{r} = 2^n$ |
| Odd/Even sum | $\sum_{r=0,2,4,\ldots}\binom{n}{r} = 2^{n-1}$ |
| Alternating sum | $\sum_{r=0}^{n}(-1)^r\binom{n}{r} = 0$ |
| Squares sum | $\sum_{r=0}^{n}\binom{n}{r}^2 = \binom{2n}{n}$ |
| Weighted sum | $\sum_{r=0}^{n}r\binom{n}{r} = n \cdot 2^{n-1}$ |
| Vandermonde | $\sum_{r=0}^{k}\binom{m}{r}\binom{n}{k-r} = \binom{m+n}{k}$ |

---

## Cross-References

- **Binomial Expansion**: Foundation → [Binomial Expansion](../binomial-expansion/index.md)
- **General Term**: Applications of coefficients → [General Term](../general-term/index.md)
- **Combinatorics**: Counting principles → [Combinatorics](../../permutations-combinations/index.md)
- **Sequences**: Pascal’s triangle as sequence → [Sequences](../../sequences-series/index.md)

---

## Quick Revision Checklist

- Symmetry property mastered
- Pascal’s identity understood
- Can calculate sum of all coefficients
- Know odd/even position sums
- Memorized ratio of consecutive coefficients
- Understand Vandermonde’s identity
- Practice with weighted sums

---

*Last updated: October 22, 2025*

From TestGuru · our mock-test platform

## You've read Properties of Binomial Coefficients.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=binomial-theorem&tg_exam=jee-main&tg_page=%2Fmathematics%2Fbinomial-theorem%2Fbinomial-coefficients%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
let pascalRows=[[1],[1,1]];function displayPascal(){const e=document.getElementById("pascalTriangle");if(!e)return;e.innerHTML=pascalRows.map((e,t)=>{const n="&nbsp;".repeat((pascalRows.length-t)*2);return n+e.map(e=>`<span style="display: inline-block; width: 40px; background: rgba(255,255,255,0.2); margin: 2px; padding: 5px; border-radius: 4px;">${e}</span>`).join("")}).join("<br>")}function addPascalRow(){if(pascalRows.length>=10){alert("Maximum 10 rows for display!");return}const e=pascalRows[pascalRows.length-1],t=[1];for(let n=0;n<e.length-1;n++)t.push(e[n]+e[n+1]);t.push(1),pascalRows.push(t),displayPascal()}function resetPascal(){pascalRows=[[1],[1,1]],displayPascal()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",displayPascal):displayPascal()
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/binomial-theorem/binomial-coefficients/",this.page.identifier="/mathematics/binomial-theorem/binomial-coefficients/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="pascalTriangle" id="anim-pascalTriangle-1795396421316455697"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-pascalTriangle-1795396421316455697")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/binomial-theorem/binomial-coefficients/](https://jeenotes.in/mathematics/binomial-theorem/binomial-coefficients/) · raw HTML: `offline/mathematics/binomial-theorem/binomial-coefficients/index.html`_
