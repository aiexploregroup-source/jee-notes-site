---
title: "AM-GM-HM Inequalities"
source: "https://jeenotes.in/mathematics/sequences-series/am-gm-hm/"
description: "Master AM-GM-HM inequalities - proofs, applications, and optimization problems for JEE"
updated: "2025-12-26"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 10"
html: "../../../../offline/mathematics/sequences-series/am-gm-hm/index.html"
extracted: "2026-11-23"
---

> Master AM-GM-HM inequalities - proofs, applications, and optimization problems for JEE

### Interactive Demo: Visualize Mean Inequalities

Explore how AM, GM, and HM relate to each other for different values.

## Real-Life Hook: The Farmer’s Optimization Problem

A farmer has 100 meters of fence and wants to create a rectangular enclosure with maximum area. Should he make it square or rectangular?

Using **AM-GM inequality**, we can prove that for a fixed perimeter, a **square gives maximum area**! This powerful inequality helps solve countless optimization problems in physics, economics, and engineering.

From proving $x + \frac{1}{x} \geq 2$ to finding maximum volumes and minimum distances, AM-GM-HM inequalities are the **Swiss Army knife** of JEE Mathematics!

---

## The Three Means

For positive numbers $a$ and $b$:

### 1. Arithmetic Mean (AM)

$$\boxed{\text{AM} = \frac{a+b}{2}}$$

**For $n$ numbers:** $\text{AM} = \frac{a_1 + a_2 + \cdots + a_n}{n}$

**Interpretation:** Simple average

---

### 2. Geometric Mean (GM)

$$\boxed{\text{GM} = \sqrt{ab}}$$

**For $n$ numbers:** $\text{GM} = \sqrt[n]{a_1 \cdot a_2 \cdot \ldots \cdot a_n}$

**Interpretation:** $n$th root of product

---

### 3. Harmonic Mean (HM)

$$\boxed{\text{HM} = \frac{2ab}{a+b} = \frac{2}{\frac{1}{a} + \frac{1}{b}}}$$

**For $n$ numbers:** $\text{HM} = \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \cdots + \frac{1}{a_n}}$

**Interpretation:** Reciprocal of average of reciprocals

---

## The Fundamental Inequality

For positive numbers $a$ and $b$:

$$\boxed{\text{AM} \geq \text{GM} \geq \text{HM}}$$

$$\boxed{\frac{a+b}{2} \geq \sqrt{ab} \geq \frac{2ab}{a+b}}$$

**Equality Condition:** All three are equal **if and only if** $a = b$

**For $n$ positive numbers:**

$$\boxed{\frac{a_1 + a_2 + \cdots + a_n}{n} \geq \sqrt[n]{a_1 a_2 \ldots a_n} \geq \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \cdots + \frac{1}{a_n}}}$$

---

## Proofs

### Proof 1: AM ≥ GM (for two numbers)

**Method 1: Algebraic**

We need to prove: $\frac{a+b}{2} \geq \sqrt{ab}$

Multiply both sides by 2: $a + b \geq 2\sqrt{ab}$

Square both sides (both positive): $(a+b)^2 \geq 4ab$

$a^2 + 2ab + b^2 \geq 4ab$

$a^2 - 2ab + b^2 \geq 0$

$(a-b)^2 \geq 0$ ✓ (always true!)

Equality when $(a-b)^2 = 0$, i.e., $a = b$

---

**Method 2: Geometric**

Consider a semicircle with diameter $a + b$. The chord at distance from diameter that divides it into segments $a$ and $b$ has height $\sqrt{ab}$ (by geometric mean theorem).

The radius (which is $\frac{a+b}{2}$) is always greater than or equal to any chord, so:

$$\frac{a+b}{2} \geq \sqrt{ab}$$

---

### Proof 2: GM ≥ HM (for two numbers)

We need to prove: $\sqrt{ab} \geq \frac{2ab}{a+b}$

Divide both sides by $\sqrt{ab}$ (positive): $1 \geq \frac{2\sqrt{ab}}{a+b}$

$a + b \geq 2\sqrt{ab}$

This is exactly the AM ≥ GM inequality! ✓

So GM ≥ HM follows from AM ≥ GM.

---

### Alternative: Direct Proof AM ≥ HM

$\frac{a+b}{2} \geq \frac{2ab}{a+b}$

$(a+b)^2 \geq 4ab$

$a^2 + 2ab + b^2 \geq 4ab$

$a^2 - 2ab + b^2 \geq 0$

$(a-b)^2 \geq 0$ ✓

---

## Important Relationships

### 1. Connection Formula

If AM, GM, HM are the three means of $a$ and $b$:

$$\boxed{\text{GM}^2 = \text{AM} \times \text{HM}}$$

**Proof:**

$\text{GM}^2 = ab$

$\text{AM} \times \text{HM} = \frac{a+b}{2} \times \frac{2ab}{a+b} = ab$ ✓

**This is a KEY formula for JEE!**

---

### 2. For Equal AM and GM

If AM = GM, then:

$\frac{a+b}{2} = \sqrt{ab}$

$(a+b)^2 = 4ab$

$a^2 + 2ab + b^2 = 4ab$

$a^2 - 2ab + b^2 = 0$

$(a-b)^2 = 0$

$a = b$ ✓

---

### 3. Weighted AM-GM

For positive $a, b$ and positive weights $m, n$:

$$\boxed{\frac{ma + nb}{m+n} \geq \sqrt[m+n]{a^m b^n}}$$

With equality when $a = b$.

---

## Common Mistakes & How to Avoid Them

### ❌ Mistake 1: Negative Numbers

**Wrong:** Applying AM-GM to negative numbers ✗

**Example:** $a = -2, b = -3$

$\text{AM} = \frac{-2-3}{2} = -2.5$

$\text{GM} = \sqrt{(-2)(-3)} = \sqrt{6} \approx 2.45$

Here GM > AM! ✗ (Inequality reverses!)

**Correct:** AM-GM-HM inequalities apply ONLY to **positive numbers** ✓

---

### ❌ Mistake 2: HM Formula Confusion

**Wrong:** $\text{HM} = \frac{a+b}{2ab}$ ✗

**Correct:** $\text{HM} = \frac{2ab}{a+b}$ ✓

**Memory Trick:** “**H**igh **P**roduct” → Numerator has product $ab$

---

### ❌ Mistake 3: Equality Condition

**Wrong:** AM = GM when $a \approx b$ ✗

**Correct:** AM = GM **only when** $a = b$ (exactly!) ✓

**Example:** $a = 5, b = 5.001$

$\text{AM} = 5.0005$, $\text{GM} = \sqrt{25.005} \approx 5.0004999$ (not equal!)

---

### ❌ Mistake 4: Multi-variable Application

**Wrong:** For $x + y + z = 12$, minimum of $xyz$ is when $x = y = z = 4$ ✗

**Correct:** That gives **MAXIMUM** of $xyz$! ✓

By AM-GM: $\frac{x+y+z}{3} \geq \sqrt[3]{xyz}$

$4 \geq \sqrt[3]{xyz}$ → $xyz \leq 64$ (maximum, not minimum!)

**For minimum:** No lower bound unless constraints added (can approach 0)

---

## Problem-Solving Strategies

### Strategy 1: Basic Optimization

**Problem:** Find minimum value of $x + \frac{1}{x}$ for $x > 0$.

**Solution:**

By AM-GM: $\frac{x + \frac{1}{x}}{2} \geq \sqrt{x \cdot \frac{1}{x}} = \sqrt{1} = 1$

$x + \frac{1}{x} \geq 2$

Minimum value = $2$, achieved when $x = \frac{1}{x}$, i.e., $x = 1$

**Answer:** Minimum = $2$ at $x = 1$

---

### Strategy 2: Constraint Optimization

**Problem:** If $xy = 16$ and $x, y > 0$, find minimum value of $x + y$.

**Solution:**

By AM-GM: $\frac{x+y}{2} \geq \sqrt{xy} = \sqrt{16} = 4$

$x + y \geq 8$

Minimum = $8$, achieved when $x = y = 4$

**Answer:** Minimum = $8$

---

### Strategy 3: Creative Grouping

**Problem:** Find minimum value of $\frac{x^2 + 1}{x}$ for $x > 0$.

**Solution:**

$\frac{x^2 + 1}{x} = x + \frac{1}{x}$

By AM-GM: $x + \frac{1}{x} \geq 2\sqrt{x \cdot \frac{1}{x}} = 2$

Minimum = $2$ at $x = 1$

**Answer:** Minimum = $2$

---

### Strategy 4: Multi-term Problems

**Problem:** If $a + b + c = 12$ and $a, b, c > 0$, find maximum of $abc$.

**Solution:**

By AM-GM: $\frac{a+b+c}{3} \geq \sqrt[3]{abc}$

$\frac{12}{3} \geq \sqrt[3]{abc}$

$4 \geq \sqrt[3]{abc}$

$abc \leq 64$

Maximum = $64$, achieved when $a = b = c = 4$

**Answer:** Maximum = $64$

---

### Strategy 5: Weighted AM-GM

**Problem:** Find minimum of $2x + \frac{9}{x}$ for $x > 0$.

**Solution:**

Using weighted AM-GM with weights 2:1:

$\frac{2x + 2x + \frac{9}{x}}{3} \geq \sqrt[3]{2x \cdot 2x \cdot \frac{9}{x}} = \sqrt[3]{36x}$

This doesn’t simplify nicely. Let me try different grouping:

$2x + \frac{9}{x} = x + x + \frac{9}{x}$

By AM-GM: $\frac{x + x + \frac{9}{x}}{3} \geq \sqrt[3]{x \cdot x \cdot \frac{9}{x}} = \sqrt[3]{9x}$

Still not clean. Better approach:

Let $2x = a$ and $\frac{9}{x} = b$. We want minimum of $a + b$ subject to $a \cdot \frac{b}{2} = 2x \cdot \frac{9}{2x} = 9$.

Actually, simplest: By AM-GM on two groups:

$2x + \frac{9}{x} \geq 2\sqrt{2x \cdot \frac{9}{x}} = 2\sqrt{18} = 6\sqrt{2}$

Minimum when $2x = \frac{9}{x}$ → $x^2 = \frac{9}{2}$ → $x = \frac{3}{\sqrt{2}}$

**Answer:** Minimum = $6\sqrt{2}$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1:** Find AM, GM, and HM of 4 and 9. Verify AM ≥ GM ≥ HM.

<details><summary>Solution</summary><p>$\text{AM} = \frac{4+9}{2} = 6.5$</p><p>$\text{GM} = \sqrt{4 \times 9} = \sqrt{36} = 6$</p><p>$\text{HM} = \frac{2 \times 4 \times 9}{4+9} = \frac{72}{13} \approx 5.54$</p><p>Check: $6.5 \geq 6 \geq 5.54$ ✓</p><p><strong>Answer:</strong> AM = 6.5, GM = 6, HM = 72/13</p></details>

---

**Problem 2:** Find the minimum value of $x^2 + \frac{4}{x^2}$ for $x > 0$.

<details><summary>Solution</summary><p>By AM-GM: $\frac{x^2 + \frac{4}{x^2}}{2} \geq \sqrt{x^2 \cdot \frac{4}{x^2}} = \sqrt{4} = 2$</p><p>$x^2 + \frac{4}{x^2} \geq 4$</p><p>Minimum = 4, when $x^2 = \frac{4}{x^2}$ → $x^4 = 4$ → $x = \sqrt[4]{4} = \sqrt{2}$</p><p><strong>Answer:</strong> Minimum = 4 at $x = \sqrt{2}$</p></details>

---

**Problem 3:** If AM and GM of two numbers are 10 and 8 respectively, find the numbers.

<details><summary>Solution</summary><p>$\frac{a+b}{2} = 10$ → $a + b = 20$ &amp;mldr; (1)</p><p>$\sqrt{ab} = 8$ → $ab = 64$ &amp;mldr; (2)</p><p>From (1) and (2), $a$ and $b$ are roots of: $t^2 - 20t + 64 = 0$</p><p>$t = \frac{20 \pm \sqrt{400 - 256}}{2} = \frac{20 \pm \sqrt{144}}{2} = \frac{20 \pm 12}{2}$</p><p>$t = 16$ or $t = 4$</p><p><strong>Answer:</strong> The numbers are 4 and 16</p></details>

---

### Level 2: JEE Main/Advanced

**Problem 4:** If $a, b, c > 0$ and $a + b + c = 3$, find the maximum value of $a^2b^3c^4$.

<details><summary>Solution</summary><p>Using weighted AM-GM with weights 2:3:4:</p><p>$\frac{2a + 3b + 4c}{2+3+4} \geq \sqrt[9]{a^2 b^3 c^4}$</p><p>Wait, we need the terms to multiply correctly. Let me use:</p><p>$\frac{\frac{a}{2} + \frac{a}{2} + \frac{b}{3} + \frac{b}{3} + \frac{b}{3} + \frac{c}{4} + \frac{c}{4} + \frac{c}{4} + \frac{c}{4}}{9} \geq \sqrt[9]{\left(\frac{a}{2}\right)^2 \left(\frac{b}{3}\right)^3 \left(\frac{c}{4}\right)^4}$</p><p>Hmm, this gets messy. Let me try a different approach.</p><p>By AM-GM on $\underbrace{a, a}_{2}, \underbrace{b, b, b}_{3}, \underbrace{c, c, c, c}_{4}$ (9 terms):</p><p>$\frac{2a + 3b + 4c}{9} \geq \sqrt[9]{a^2 b^3 c^4}$</p><p>But we know $a + b + c = 3$, not $2a + 3b + 4c = $ constant.</p><p>For maximum of $a^2 b^3 c^4$, at equality in AM-GM:
$a = b = c$, but this doesn’t match the weights.</p><p>Actually, for weighted AM-GM, equality occurs when all terms being averaged are equal:
$\frac{a}{2} = \frac{b}{3} = \frac{c}{4} = k$</p><p>So $a = 2k, b = 3k, c = 4k$</p><p>From $a + b + c = 3$: $2k + 3k + 4k = 3$ → $k = \frac{1}{3}$</p><p>$a = \frac{2}{3}, b = 1, c = \frac{4}{3}$</p><p>Maximum value: $\left(\frac{2}{3}\right)^2 \cdot 1^3 \cdot \left(\frac{4}{3}\right)^4 = \frac{4}{9} \cdot \frac{256}{81} = \frac{1024}{729}$</p><p><strong>Answer:</strong> Maximum = $\frac{1024}{729}$ at $a = \frac{2}{3}, b = 1, c = \frac{4}{3}$</p></details>

---

**Problem 5:** Prove that for positive $a, b, c$: $\frac{a}{b} + \frac{b}{c} + \frac{c}{a} \geq 3$

<details><summary>Solution</summary><p>By AM-GM on the three terms:</p><p>$\frac{\frac{a}{b} + \frac{b}{c} + \frac{c}{a}}{3} \geq \sqrt[3]{\frac{a}{b} \cdot \frac{b}{c} \cdot \frac{c}{a}} = \sqrt[3]{1} = 1$</p><p>$\frac{a}{b} + \frac{b}{c} + \frac{c}{a} \geq 3$</p><p>Equality when $\frac{a}{b} = \frac{b}{c} = \frac{c}{a} = 1$, i.e., $a = b = c$ ✓</p><p><strong>Answer:</strong> Proven</p></details>

---

**Problem 6:** If $x + y = 8$, find the maximum value of $xy(16-xy)$ where $x, y > 0$.

<details><summary>Solution</summary><p>Let $xy = t$. Since $x + y = 8$:</p><p>By AM-GM: $\frac{x+y}{2} \geq \sqrt{xy}$ → $4 \geq \sqrt{t}$ → $t \leq 16$</p><p>So $0 &lt; t \leq 16$.</p><p>We want to maximize $f(t) = t(16-t) = 16t - t^2$</p><p>This is a parabola opening downward. Maximum at $t = 8$:</p><p>$f(8) = 8(16-8) = 64$</p><p>Check if $t = 8$ is achievable: $xy = 8$ and $x + y = 8$</p><p>This gives $x = y = 4$ (by symmetry or solving $x^2 - 8x + 8 = 0$&amp;mldr; wait:</p><p>$x^2 - 8x + 8 = 0$ → $x = \frac{8 \pm \sqrt{64-32}}{2} = \frac{8 \pm \sqrt{32}}{2} = 4 \pm 2\sqrt{2}$</p><p>So $x = 4 + 2\sqrt{2}, y = 4 - 2\sqrt{2}$ (or vice versa)</p><p>And $xy = (4+2\sqrt{2})(4-2\sqrt{2}) = 16 - 8 = 8$ ✓</p><p><strong>Answer:</strong> Maximum = 64 at $xy = 8$</p></details>

---

### Level 3: JEE Advanced

**Problem 7:** Find the minimum value of $\frac{(x+y+z)^2}{xy+yz+zx}$ for positive $x, y, z$.

<details><summary>Solution</summary><p>Let $S = x + y + z$ and $P = xy + yz + zx$.</p><p>We need to minimize $\frac{S^2}{P}$.</p><p>Note: $(x+y+z)^2 = x^2 + y^2 + z^2 + 2(xy + yz + zx)$</p><p>So $S^2 = x^2 + y^2 + z^2 + 2P$</p><p>By Cauchy-Schwarz or AM-GM:
$x^2 + y^2 + z^2 \geq xy + yz + zx$ (can be proven using $(x-y)^2 + (y-z)^2 + (z-x)^2 \geq 0$)</p><p>So $S^2 = x^2 + y^2 + z^2 + 2P \geq P + 2P = 3P$</p><p>$\frac{S^2}{P} \geq 3$</p><p>Minimum = 3, achieved when $x = y = z$</p><p><strong>Answer:</strong> Minimum = 3</p></details>

---

**Problem 8:** Prove that if $a, b, c > 0$ and $abc = 1$, then $a + b + c \geq 3$.

<details><summary>Solution</summary><p>By AM-GM: $\frac{a + b + c}{3} \geq \sqrt[3]{abc} = \sqrt[3]{1} = 1$</p><p>$a + b + c \geq 3$</p><p>Equality when $a = b = c = 1$ ✓</p><p><strong>Answer:</strong> Proven</p></details>

---

## Cross-Topic Connections

### 1. Link to Calculus

Optimization problems using derivatives often confirm AM-GM results. See [Differential Calculus](../../limits-continuity-differentiability/index.md) for comparison.

### 2. Link to Inequalities

Cauchy-Schwarz inequality and Holder’s inequality are generalizations of AM-GM. Essential for JEE Advanced.

### 3. Link to Trigonometry

In triangles, inequalities involving sides and angles use AM-GM principles.

### 4. Link to Complex Numbers

$|z_1 + z_2| \leq |z_1| + |z_2|$ (triangle inequality) relates to mean inequalities. See [Complex Numbers](../../complex-numbers/index.md).

---

## Quick Revision Checklist

- AM ≥ GM ≥ HM (only for positive numbers!)
- Equality holds **only when** all numbers are equal
- $\text{GM}^2 = \text{AM} \times \text{HM}$ (KEY formula!)
- HM = $\frac{2ab}{a+b}$ (product on top!)
- For max/min with product constant → use AM-GM
- For max/min with sum constant → use AM-GM
- $x + \frac{k}{x} \geq 2\sqrt{k}$ (standard result)

---

## Memory Palace Technique

Imagine a **podium** (means hierarchy):

1. **Gold Medal (AM - highest):** Stands at $\frac{a+b}{2}$
2. **Silver Medal (GM - middle):** Stands at $\sqrt{ab}$
3. **Bronze Medal (HM - lowest):** Stands at $\frac{2ab}{a+b}$
4. **Equality Platform:** All three stand together when $a = b$
5. **Positive Zone:** Podium only works in positive number territory!

---

## Final Tips for JEE

1. **Check positivity first** - AM-GM-HM needs all positive numbers!
2. **Equality condition** - Always verify when equality holds
3. **Creative grouping** - Sometimes need to rewrite expression cleverly
4. **Weighted AM-GM** - For expressions with different coefficients
5. **Maximum vs Minimum** - AM-GM gives upper/lower bound depending on constraint
6. **Verify answer** - Substitute back to check if equality condition is achievable
7. **Common pattern:** $x + \frac{a}{x} \geq 2\sqrt{a}$ appears frequently!

---

## Advanced Results (JEE Advanced)

### Power Mean Inequality

For $r > s$:

$$\left(\frac{a_1^r + a_2^r + \cdots + a_n^r}{n}\right)^{1/r} \geq \left(\frac{a_1^s + a_2^s + \cdots + a_n^s}{n}\right)^{1/s}$$

Special cases:

- $r = 1, s = 0$: AM ≥ GM
- $r = 0, s = -1$: GM ≥ HM

### Cauchy-Schwarz Inequality

$(a_1^2 + a_2^2 + \cdots + a_n^2)(b_1^2 + b_2^2 + \cdots + b_n^2) \geq (a_1b_1 + a_2b_2 + \cdots + a_nb_n)^2$

---

*Last Updated: October 22, 2025*

From TestGuru · our mock-test platform

## You've read AM-GM-HM Inequalities.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sequences-series&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsequences-series%2Fam-gm-hm%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/sequences-series/am-gm-hm/",this.page.identifier="/mathematics/sequences-series/am-gm-hm/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="seriesVisualization" id="anim-seriesVisualization-1795396422099198694"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-seriesVisualization-1795396422099198694")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/sequences-series/am-gm-hm/](https://jeenotes.in/mathematics/sequences-series/am-gm-hm/) · raw HTML: `offline/mathematics/sequences-series/am-gm-hm/index.html`_
