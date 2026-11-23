---
title: "Applications of Binomial Theorem in Approximations"
source: "https://jeenotes.in/mathematics/binomial-theorem/applications/"
description: "Practical applications of binomial theorem for numerical approximations and JEE problem solving"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 7"
html: "../../../../offline/mathematics/binomial-theorem/applications/index.html"
extracted: "2026-11-23"
---

> Practical applications of binomial theorem for numerical approximations and JEE problem solving

# Applications of Binomial Theorem in Approximations

## Introduction

The **Binomial Theorem** is not just a theoretical tool—it has powerful applications in **numerical approximations**, **error estimation**, **series expansions**, and solving **JEE problems** efficiently.

---

## Binomial Approximation Formula

For small values of $x$ (typically $|x| < 1$):

> $$\boxed{(1 + x)^n \approx 1 + nx}$$

### Interactive Demo: Visualize Binomial Approximations

See how binomial expansion terms relate to Pascal’s Triangle.

This is the **first-order approximation** (keeping only first two terms).

### More Accurate Approximation

> $$\boxed{(1 + x)^n \approx 1 + nx + \frac{n(n-1)}{2}x^2}$$

This is the **second-order approximation** (keeping first three terms).

### General Form

> $$\boxed{(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots}$$

**Valid for**: $|x| < 1$ and any real $n$ (positive, negative, or fraction)

---

## Standard Approximations

### Type 1: Computing Powers Near 1

**For $(1 + x)^n$ where $x$ is small**:

$$\boxed{(1 + x)^n \approx 1 + nx}$$

**Examples**:

- $(1.01)^5 \approx 1 + 5(0.01) = 1.05$
- $(0.99)^{10} = (1 - 0.01)^{10} \approx 1 + 10(-0.01) = 0.90$

---

### Type 2: Square Roots

**For $\sqrt{1 + x}$ where $x$ is small**:

$$\boxed{\sqrt{1 + x} = (1 + x)^{1/2} \approx 1 + \frac{x}{2} - \frac{x^2}{8}}$$

**First order**: $\sqrt{1 + x} \approx 1 + \frac{x}{2}$

**Examples**:

- $\sqrt{1.04} = \sqrt{1 + 0.04} \approx 1 + \frac{0.04}{2} = 1.02$
- $\sqrt{0.96} = \sqrt{1 - 0.04} \approx 1 - \frac{0.04}{2} = 0.98$

---

### Type 3: Cube Roots

**For $\sqrt[3]{1 + x}$ where $x$ is small**:

$$\boxed{\sqrt[3]{1 + x} = (1 + x)^{1/3} \approx 1 + \frac{x}{3} - \frac{x^2}{9}}$$

**First order**: $\sqrt[3]{1 + x} \approx 1 + \frac{x}{3}$

**Examples**:

- $\sqrt[3]{1.06} \approx 1 + \frac{0.06}{3} = 1.02$
- $\sqrt[3]{0.97} \approx 1 - \frac{0.03}{3} = 0.99$

---

### Type 4: Reciprocals

**For $\frac{1}{1 + x}$ where $x$ is small**:

$$\boxed{\frac{1}{1 + x} = (1 + x)^{-1} \approx 1 - x + x^2 - x^3 + \cdots}$$

**First order**: $\frac{1}{1 + x} \approx 1 - x$

**Examples**:

- $\frac{1}{1.02} \approx 1 - 0.02 = 0.98$
- $\frac{1}{0.98} = \frac{1}{1 - 0.02} \approx 1 + 0.02 = 1.02$

---

## Conversion to Standard Form

To use binomial approximation, convert expressions to the form $(1 + x)^n$:

### Method 1: Factor Out

**Example**: Approximate $(2.03)^5$

$$\begin{align}
(2.03)^5 &= (2 + 0.03)^5 \\
&= 2^5\left(1 + \frac{0.03}{2}\right)^5 \\
&= 32(1 + 0.015)^5 \\
&\approx 32[1 + 5(0.015)] \\
&= 32(1.075) \\
&= 34.4
\end{align}$$

---

### Method 2: Rewrite Form

**Example**: Approximate $\sqrt{99}$

$$\begin{align}
\sqrt{99} &= \sqrt{100 - 1} \\
&= 10\sqrt{1 - \frac{1}{100}} \\
&= 10(1 - 0.01)^{1/2} \\
&\approx 10\left[1 + \frac{1}{2}(-0.01)\right] \\
&= 10(1 - 0.005) \\
&= 9.95
\end{align}$$

---

## Error Estimation

The **error** in approximation depends on terms we neglected.

### Relative Error

If we use $(1 + x)^n \approx 1 + nx$, the relative error is approximately:

> $$\boxed{\text{Relative Error} \approx \frac{n(n-1)x^2}{2}}$$

**Example**: For $(1.01)^{10}$ using $(1 + x)^n \approx 1 + nx$:

Error $\approx \frac{10 \times 9 \times (0.01)^2}{2} = 0.0045 = 0.45\%$

---

## Applications in Different Areas

### Application 1: Finding Greatest Term

**To find numerically greatest term in $(a + b)^n$**:

The greatest term is $T_{r+1}$ where:

$$\boxed{r = \left[\frac{(n+1)|b|}{|a| + |b|}\right]}$$

where $[x]$ denotes greatest integer function.

**Alternative Method**: $T_{r+1} > T_r$ when:

$$\frac{(n - r + 1)|b|}{r|a|} > 1$$

**Special Case $(1 + x)^n$ with $x > 0$**:

If $\frac{(n+1)x}{1+x}$ is an integer $m$, then $T_m$ and $T_{m+1}$ are both numerically greatest.

Otherwise, $T_{[m]+1}$ is the greatest term (where $[m]$ denotes the greatest integer function).

---

### Application 2: Divisibility Problems

**Check if $(a + b)^n$ is divisible by some number**:

Use binomial expansion and modular arithmetic.

**Example**: Is $7^{100}$ divisible by 25?

$$7^{100} = (1 + 6)^{100} = 1 + 100(6) + \binom{100}{2}(6)^2 + \cdots$$

$= 1 + 600 + 4950(36) + \cdots$

First two terms: $1 + 600 = 601$ (divisible by 25? No, but continue&mldr;)

All terms after second contain $6^2 = 36$, and with large binomial coefficients, we can analyze modulo 25.

---

### Application 3: Proving Inequalities

**Using binomial theorem to prove inequalities**:

**Example**: Prove $2^n > 1 + n$ for $n \geq 2$.

**Proof**:

$$2^n = (1 + 1)^n = 1 + n + \binom{n}{2} + \binom{n}{3} + \cdots$$

Since all binomial coefficients are positive for $n \geq 2$:

$$2^n > 1 + n$$

---

### Application 4: Sum of Series

**Finding sums using binomial identities**:

**Example**: Find $1 + 2x + 3x^2 + 4x^3 + \cdots + (n+1)x^n$

This is related to differentiating $(1 + x)^{n+1}$.

---

## Memory Tricks

### 🎯 Small x Approximation

**“One plus n times x”**: $(1 + x)^n \approx 1 + nx$ for small $x$

**Mnemonic**: “**W**hen **S**mall, **K**eep **T**wo”

- When $x$ is small, keep (first) two terms

### 🎯 Root Approximations

- Square root: “**Half** the difference”
  $\sqrt{1 + x} \approx 1 + \frac{x}{2}$
- Cube root: “**Third** the difference”
  $\sqrt[3]{1 + x} \approx 1 + \frac{x}{3}$
- $n$-th root: “$\frac{1}{n}$ the difference”
  $(1 + x)^{1/n} \approx 1 + \frac{x}{n}$

### 🎯 Conversion Trick

**“Factor and Convert”**:

1. Factor out to make base close to 1
2. Convert to $(1 + \text{small number})^n$
3. Apply approximation

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Using Approximation for Large x

**Wrong**: $(1 + 0.5)^{10} \approx 1 + 10(0.5) = 6$ ✗

**Correct**: $x = 0.5$ is not small enough for first-order approximation.
Use more terms or calculate exactly: $(1.5)^{10} = 57.665$ ✓

**Rule**: Use approximation only when $|x| \ll 1$ (typically $|x| < 0.1$)

### ❌ Mistake 2: Forgetting Sign in $(1 - x)^n$

**Wrong**: $(0.98)^5 = (1 - 0.02)^5 \approx 1 + 5(0.02)$ ✗

**Correct**: $(1 - 0.02)^5 \approx 1 + 5(-0.02) = 1 - 0.1 = 0.9$ ✓

### ❌ Mistake 3: Incorrect Factoring

**Wrong**: $(3.1)^4 = 3^4(1 + 0.1)^4$ ✗

**Correct**: $(3.1)^4 = (3 + 0.1)^4 = 3^4\left(1 + \frac{0.1}{3}\right)^4$ ✓

### ❌ Mistake 4: Wrong Root Formula

**Wrong**: $\sqrt{1 + x} \approx 1 + x$ ✗

**Correct**: $\sqrt{1 + x} = (1 + x)^{1/2} \approx 1 + \frac{x}{2}$ ✓

---

## Solved Examples

### Example 1: Power Approximation (JEE Main)

**Find the approximate value of $(1.02)^{10}$ using binomial theorem.**

**Solution**:
$(1.02)^{10} = (1 + 0.02)^{10}$

Using $(1 + x)^n = 1 + nx + \frac{n(n-1)}{2}x^2 + \cdots$

**First-order approximation**:

$$(1.02)^{10} \approx 1 + 10(0.02) = 1.2$$

**Second-order approximation**:

$$\begin{align}
(1.02)^{10} &\approx 1 + 10(0.02) + \frac{10 \times 9}{2}(0.02)^2 \\
&= 1 + 0.2 + 45(0.0004) \\
&= 1 + 0.2 + 0.018 \\
&= 1.218
\end{align}$$

**Exact value**: $(1.02)^{10} = 1.21899...$

---

### Example 2: Square Root (JEE Main)

**Calculate $\sqrt{26}$ approximately.**

**Solution**:

$$\begin{align}
\sqrt{26} &= \sqrt{25 + 1} \\
&= 5\sqrt{1 + \frac{1}{25}} \\
&= 5(1 + 0.04)^{1/2} \\
&\approx 5\left[1 + \frac{1}{2}(0.04)\right] \\
&= 5(1 + 0.02) \\
&= 5.1
\end{align}$$

**Exact value**: $\sqrt{26} = 5.0990...$

**Error**: $5.1 - 5.099 = 0.001$ (very small!)

---

### Example 3: Reciprocal Approximation (JEE Advanced)

**Find the value of $\frac{1}{(2.002)^3}$ up to 4 decimal places.**

**Solution**:

$$\begin{align}
\frac{1}{(2.002)^3} &= \frac{1}{2^3(1 + 0.001)^3} \\
&= \frac{1}{8} \cdot \frac{1}{(1 + 0.001)^3} \\
&= \frac{1}{8}(1 + 0.001)^{-3}
\end{align}$$

Using $(1 + x)^{-3} = 1 - 3x + 6x^2 - 10x^3 + \cdots$:

$$\begin{align}
&\approx \frac{1}{8}[1 - 3(0.001) + 6(0.001)^2] \\
&= \frac{1}{8}[1 - 0.003 + 0.000006] \\
&= \frac{1}{8}(0.997006) \\
&= 0.1246 \text{ (to 4 decimal places)}
\end{align}$$

---

### Example 4: Cube Root (JEE Advanced)

**Evaluate $(127)^{1/3}$ approximately.**

**Solution**:

$$\begin{align}
(127)^{1/3} &= (125 + 2)^{1/3} \\
&= 125^{1/3}\left(1 + \frac{2}{125}\right)^{1/3} \\
&= 5(1 + 0.016)^{1/3} \\
&\approx 5\left[1 + \frac{1}{3}(0.016)\right] \\
&= 5(1 + 0.00533) \\
&= 5.0267
\end{align}$$

**Exact value**: $(127)^{1/3} = 5.0265...$

---

### Example 5: Mixed Application (JEE Advanced)

**If $(1 + x)^n = C_0 + C_1x + C_2x^2 + \cdots + C_nx^n$, find approximately the value of $C_0 + C_1/2 + C_2/4 + C_3/8 + \cdots + C_n/2^n$ when $n = 10$.**

**Solution**:
We need: $C_0 + \frac{C_1}{2} + \frac{C_2}{4} + \cdots + \frac{C_{10}}{2^{10}}$

This is $(1 + x)^n$ evaluated at $x = 1/2$:

$$(1 + 1/2)^{10} = (1.5)^{10}$$

Converting: $(1.5)^{10} = \left(\frac{3}{2}\right)^{10} = \frac{3^{10}}{2^{10}}$

$= \frac{59049}{1024} = 57.665$

Or using approximation: $1.5 = 1 + 0.5$

But $x = 0.5$ is too large for simple approximation. Better to calculate exactly or use logarithms.

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Find $(0.99)^5$ approximately.

<details><summary>Solution</summary><p>$(0.99)^5 = (1 - 0.01)^5 \approx 1 + 5(-0.01) = 1 - 0.05 = 0.95$</p><p>More accurate: $1 - 5(0.01) + 10(0.01)^2 = 1 - 0.05 + 0.001 = 0.951$</p><p>Exact: $(0.99)^5 = 0.9510...$</p></details>

**Problem 1.2**: Approximate $\sqrt{37}$.

<details><summary>Solution</summary><p>$\sqrt{37} = \sqrt{36 + 1} = 6\sqrt{1 + 1/36} = 6(1 + 1/36)^{1/2}$</p><p>$\approx 6\left[1 + \frac{1}{2} \cdot \frac{1}{36}\right] = 6\left[1 + \frac{1}{72}\right] = 6.0833$</p><p>Exact: $\sqrt{37} = 6.0828...$</p></details>

**Problem 1.3**: Find $(1.05)^3$ using binomial expansion.

<details><summary>Solution</summary><p>$(1.05)^3 = (1 + 0.05)^3$</p><p>$= 1 + 3(0.05) + 3(0.05)^2 + (0.05)^3$</p><p>$= 1 + 0.15 + 3(0.0025) + 0.000125$</p><p>$= 1 + 0.15 + 0.0075 + 0.000125$</p><p>$= 1.157625$</p></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Find the approximate value of $(0.998)^{10}$ correct to four decimal places.

<details><summary>Solution</summary><p>$(0.998)^{10} = (1 - 0.002)^{10}$</p><p>$\approx 1 + 10(-0.002) + \frac{10 \times 9}{2}(0.002)^2 + \frac{10 \times 9 \times 8}{6}(0.002)^3$</p><p>$= 1 - 0.02 + 45(0.000004) + 120(0.000000008)$</p><p>$= 1 - 0.02 + 0.00018 + 0.00000096$</p><p>$= 0.9802$ (to 4 decimal places)</p></details>

**Problem 2.2**: Using binomial theorem, prove that $n! > \left(\frac{n}{e}\right)^n$ for $n \geq 1$.

<details><summary>Solution</summary><p>Consider $(1 + 1/n)^n = 1 + n \cdot \frac{1}{n} + \frac{n(n-1)}{2!} \cdot \frac{1}{n^2} + \cdots$</p><p>$= 1 + 1 + \frac{1}{2!}\left(1 - \frac{1}{n}\right) + \frac{1}{3!}\left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right) + \cdots$</p><p>As $n \to \infty$: $(1 + 1/n)^n \to e$</p><p>For finite $n$: $(1 + 1/n)^n &lt; e$, so $n &lt; e^n \cdot n^n / n^n$&amp;mldr;</p><p>(This requires Stirling’s approximation for complete proof)</p></details>

**Problem 2.3**: Find $\sqrt[4]{17}$ approximately.

<details><summary>Solution</summary><p>$\sqrt[4]{17} = (16 + 1)^{1/4} = 2(1 + 1/16)^{1/4}$</p><p>$\approx 2\left[1 + \frac{1}{4} \cdot \frac{1}{16}\right] = 2\left[1 + \frac{1}{64}\right] = 2.03125$</p><p>Exact: $\sqrt[4]{17} = 2.0305...$</p></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Show that for large $n$, $\left(1 + \frac{1}{n}\right)^n \approx e\left(1 - \frac{1}{2n}\right)$ where $e = 2.718...$

<details><summary>Solution</summary><p>Using binomial expansion and taking logarithm:</p><p>$\ln\left[\left(1 + \frac{1}{n}\right)^n\right] = n\ln\left(1 + \frac{1}{n}\right)$</p><p>For small $x$: $\ln(1 + x) \approx x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$</p><p>$n\ln\left(1 + \frac{1}{n}\right) \approx n\left[\frac{1}{n} - \frac{1}{2n^2} + \frac{1}{3n^3} - \cdots\right]$</p><p>$= 1 - \frac{1}{2n} + \frac{1}{3n^2} - \cdots \approx 1 - \frac{1}{2n}$ for large $n$</p><p>Therefore: $\left(1 + \frac{1}{n}\right)^n \approx e^{1-1/(2n)} = e \cdot e^{-1/(2n)} \approx e\left(1 - \frac{1}{2n}\right)$</p></details>

**Problem 3.2**: If $x$ is so small that $x^3$ and higher powers can be neglected, show that:

$$\frac{(1-x)^{3/2}}{(1+x)^{1/2}} \approx 1 - 2x$$

<details><summary>Solution</summary><p>$(1-x)^{3/2} \approx 1 + \frac{3}{2}(-x) + \frac{3/2 \cdot 1/2}{2}(-x)^2$</p><p>$= 1 - \frac{3x}{2} + \frac{3x^2}{8}$</p><p>Neglecting $x^2$: $(1-x)^{3/2} \approx 1 - \frac{3x}{2}$</p><p>$(1+x)^{-1/2} \approx 1 + \left(-\frac{1}{2}\right)x = 1 - \frac{x}{2}$</p><p>Therefore:
$\frac{(1-x)^{3/2}}{(1+x)^{1/2}} \approx \left(1 - \frac{3x}{2}\right)\left(1 - \frac{x}{2}\right)$</p><p>$= 1 - \frac{3x}{2} - \frac{x}{2} + \frac{3x^2}{4}$</p><p>Neglecting $x^2$: $\approx 1 - 2x$</p></details>

**Problem 3.3**: Find the percentage error in taking $(0.997)^{1/3}$ as $1 - \frac{0.003}{3}$.

<details><summary>Solution</summary><p>Approximation: $(0.997)^{1/3} \approx 1 - \frac{0.003}{3} = 1 - 0.001 = 0.999$</p><p>Better approximation:
$(0.997)^{1/3} = (1 - 0.003)^{1/3}$</p><p>$\approx 1 + \frac{1}{3}(-0.003) + \frac{(1/3)(-2/3)}{2}(-0.003)^2$</p><p>$= 1 - 0.001 - \frac{1}{9}(0.000009)$</p><p>$= 1 - 0.001 - 0.000001 = 0.999999$</p><p>Percentage error $= \frac{0.999999 - 0.999}{0.999999} \times 100 \approx 0.0001\%$</p><p>The error is negligible!</p></details>

---

## Quick Reference Table

| Expression | Approximation (small $x$) |
| --- | --- |
| $(1 + x)^n$ | $1 + nx$ |
| $(1 - x)^n$ | $1 - nx$ |
| $\sqrt{1 + x}$ | $1 + \frac{x}{2}$ |
| $\sqrt[3]{1 + x}$ | $1 + \frac{x}{3}$ |
| $\frac{1}{1 + x}$ | $1 - x$ |
| $\frac{1}{\sqrt{1 + x}}$ | $1 - \frac{x}{2}$ |
| $\frac{1}{(1 + x)^2}$ | $1 - 2x$ |

---

## Cross-References

- **Binomial Expansion**: Core concepts → [Binomial Expansion](../binomial-expansion/index.md)
- **Calculus Applications**: Taylor series connection → [Differentiation](../../limits-continuity-differentiability/index.md)
- **Limits**: Approximations in limits → [Limits](../../index.md)

---

## Quick Revision Points

1. Use binomial approximation only for $|x| \ll 1$
2. First-order: Keep two terms
3. Second-order: Keep three terms
4. Always convert to $(1 + x)^n$ form
5. Check sign carefully for $(1 - x)^n$
6. Root formulas: power is $1/n$

---

*Last updated: October 25, 2025*

From TestGuru · our mock-test platform

## You've read Applications of Binomial Theorem in Approximations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=binomial-theorem&tg_exam=jee-main&tg_page=%2Fmathematics%2Fbinomial-theorem%2Fapplications%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/binomial-theorem/applications/",this.page.identifier="/mathematics/binomial-theorem/applications/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="pascalTriangle" id="anim-pascalTriangle-1795396421313009350"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-pascalTriangle-1795396421313009350")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/binomial-theorem/applications/](https://jeenotes.in/mathematics/binomial-theorem/applications/) · raw HTML: `offline/mathematics/binomial-theorem/applications/index.html`_
