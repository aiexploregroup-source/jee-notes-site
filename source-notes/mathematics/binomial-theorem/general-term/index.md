---
title: "General Term and Middle Term in Binomial Expansion"
source: "https://jeenotes.in/mathematics/binomial-theorem/general-term/"
description: "Master the general term formula, middle term, and term finding techniques for JEE"
updated: "2025-12-26"
reading_time: "7 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 7"
html: "../../../../offline/mathematics/binomial-theorem/general-term/index.html"
extracted: "2026-11-23"
---

> Master the general term formula, middle term, and term finding techniques for JEE

# General Term and Middle Term

## General Term Formula

The **general term** (also called the $(r+1)^{\text{th}}$ term) in the expansion of $(a + b)^n$ is:

> $$\boxed{T_{r+1} = \binom{n}{r} a^{n-r} b^r}$$

where $r = 0, 1, 2, \ldots, n$

### Key Points

- $T_{r+1}$ represents the $(r+1)^{\text{th}}$ term
- $r$ is the index starting from 0
- First term: $T_1$ when $r = 0$
- Last term: $T_{n+1}$ when $r = n$

---

## General Term in Different Forms

### Form 1: $(x + a)^n$

$$\boxed{T_{r+1} = \binom{n}{r} x^{n-r} a^r}$$

### Form 2: $(1 + x)^n$

$$\boxed{T_{r+1} = \binom{n}{r} x^r}$$

### Form 3: $(ax + b)^n$

$$\boxed{T_{r+1} = \binom{n}{r} (ax)^{n-r} b^r = \binom{n}{r} a^{n-r} b^r x^{n-r}}$$

### Form 4: $\left(x + \frac{1}{x}\right)^n$

$$\boxed{T_{r+1} = \binom{n}{r} x^{n-r} \cdot x^{-r} = \binom{n}{r} x^{n-2r}}$$

---

## Middle Term(s)

The middle term(s) depend on whether $n$ is even or odd.

### Case 1: When $n$ is Even

> **Single Middle Term**: $T_{\frac{n}{2} + 1}$ (the $\left(\frac{n}{2} + 1\right)^{\text{th}}$ term)
>
> $$\boxed{T_{\frac{n}{2}+1} = \binom{n}{n/2} a^{n/2} b^{n/2}}$$

**Example**: In $(a + b)^6$, middle term is $T_4$ (when $r = 3$)

### Interactive Demo: Visualize Binomial Coefficients

See how coefficients relate to Pascal’s Triangle positions.

### Case 2: When $n$ is Odd

> **Two Middle Terms**: $T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$
>
> $$\boxed{T_{\frac{n+1}{2}} = \binom{n}{(n-1)/2} a^{(n+1)/2} b^{(n-1)/2}}$$

$$\boxed{T_{\frac{n+3}{2}} = \binom{n}{(n+1)/2} a^{(n-1)/2} b^{(n+1)/2}}$$

**Example**: In $(a + b)^7$, middle terms are $T_4$ and $T_5$ (when $r = 3$ and $r = 4$)

---

## Memory Tricks

### 🎯 General Term Index

**“r+1 Rule”**: The $(r+1)^{\text{th}}$ term has:

- Binomial coefficient: $\binom{n}{r}$
- First quantity’s power: $n - r$
- Second quantity’s power: $r$

**Mnemonic**: “**N**ame **R**emains, **R** **G**oes **U**p”

- $n$ stays in $\binom{n}{r}$
- $r$ increases from 0 to $n$
- Powers of second term go up

### 🎯 Middle Term Quick Find

**Even $n$**: Middle position = $\frac{n}{2} + 1$

- For $n = 6$: Position = $3 + 1 = 4$ (4th term)

**Odd $n$**: Two middles at $\frac{n+1}{2}$ and $\frac{n+1}{2} + 1$

- For $n = 7$: Positions = $4$ and $5$ (4th and 5th terms)

### 🎯 Independent Term Finder

**“Power Sum = 0”**: For term independent of $x$ in $\left(x^a + \frac{b}{x^c}\right)^n$:

- General term power: $a(n-r) - cr$
- Set equal to 0: $a(n-r) - cr = 0$
- Solve for $r$

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Confusing $r$ and Term Number

**Wrong**: “5th term means $r = 5$” ✗

**Correct**: “5th term means $T_5$, so $r = 4$” ✓

**Remember**: Term number = $r + 1$

### ❌ Mistake 2: Wrong Middle Term for Odd $n$

**Wrong**: For $(x + y)^9$, middle term is $T_5$ ✗

**Correct**: For $(x + y)^9$, there are TWO middle terms: $T_5$ and $T_6$ ✓

### ❌ Mistake 3: Power Calculation Error

**Wrong**: In $\left(2x^2 - \frac{3}{x}\right)^{10}$, power of $x$ in $T_{r+1}$ is $2r - 1$ ✗

**Correct**:
$T_{r+1} = \binom{10}{r}(2x^2)^{10-r}\left(-\frac{3}{x}\right)^r$

Power of $x = 2(10-r) - r = 20 - 3r$ ✓

### ❌ Mistake 4: Sign Error in Negative Terms

**Wrong**: In $(x - 2y)^5$, $T_3 = \binom{5}{2}x^3(2y)^2$ ✗

**Correct**: $T_3 = \binom{5}{2}x^3(-2y)^2 = 10x^3 \cdot 4y^2 = 40x^3y^2$ ✓

**Remember**: Include the sign when raising to power!

---

## Solved Examples

### Example 1: Finding Specific Term (JEE Main)

**Find the 7th term in the expansion of $(3x - 2y)^{10}$.**

**Solution**:
For 7th term: $T_7 = T_{6+1}$, so $r = 6$

$$\begin{align}
T_7 &= \binom{10}{6}(3x)^{10-6}(-2y)^6 \\
&= \binom{10}{6}(3x)^4(64y^6) \\
&= 210 \times 81x^4 \times 64y^6 \\
&= 1088640x^4y^6
\end{align}$$

---

### Example 2: Middle Term (JEE Main)

**Find the middle term in the expansion of $(2x - 3y)^8$.**

**Solution**:
Since $n = 8$ (even), there is ONE middle term.

Middle term = $T_{\frac{8}{2}+1} = T_5$ (when $r = 4$)

$$\begin{align}
T_5 &= \binom{8}{4}(2x)^{8-4}(-3y)^4 \\
&= 70 \times 16x^4 \times 81y^4 \\
&= 90720x^4y^4
\end{align}$$

---

### Example 3: Term Independent of $x$ (JEE Advanced)

**Find the term independent of $x$ in $\left(3x^2 - \frac{2}{x^3}\right)^{10}$.**

**Solution**:
General term:

$$T_{r+1} = \binom{10}{r}(3x^2)^{10-r}\left(-\frac{2}{x^3}\right)^r$$

$$= \binom{10}{r} \cdot 3^{10-r} \cdot (-2)^r \cdot x^{2(10-r)-3r}$$

$$= \binom{10}{r} \cdot 3^{10-r} \cdot (-2)^r \cdot x^{20-5r}$$

For term independent of $x$: $20 - 5r = 0$

$\Rightarrow r = 4$

$$\begin{align}
T_5 &= \binom{10}{4} \cdot 3^6 \cdot (-2)^4 \\
&= 210 \times 729 \times 16 \\
&= 2449440
\end{align}$$

---

### Example 4: Coefficient of Specific Power (JEE Advanced)

**Find the coefficient of $x^{-5}$ in the expansion of $\left(x - \frac{1}{x^2}\right)^{11}$.**

**Solution**:
General term:

$$T_{r+1} = \binom{11}{r}(x)^{11-r}\left(-\frac{1}{x^2}\right)^r$$

$$= \binom{11}{r}(-1)^r x^{11-r-2r} = \binom{11}{r}(-1)^r x^{11-3r}$$

For $x^{-5}$: $11 - 3r = -5$

$\Rightarrow 3r = 16$

$\Rightarrow r = \frac{16}{3}$ (not an integer!)

**Therefore, there is NO term containing $x^{-5}$. Coefficient = 0.**

---

### Example 5: Middle Terms in Odd Power (JEE Main)

**Find both middle terms in the expansion of $\left(x + \frac{2}{x}\right)^7$.**

**Solution**:
Since $n = 7$ (odd), there are TWO middle terms.

**First middle term**: $T_{\frac{7+1}{2}} = T_4$ (when $r = 3$)

$$\begin{align}
T_4 &= \binom{7}{3}(x)^{7-3}\left(\frac{2}{x}\right)^3 \\
&= 35 \times x^4 \times \frac{8}{x^3} \\
&= 280x
\end{align}$$

**Second middle term**: $T_{\frac{7+3}{2}} = T_5$ (when $r = 4$)

$$\begin{align}
T_5 &= \binom{7}{4}(x)^{7-4}\left(\frac{2}{x}\right)^4 \\
&= 35 \times x^3 \times \frac{16}{x^4} \\
&= \frac{560}{x}
\end{align}$$

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: Find the 5th term in $(2a + b)^8$.

<details><summary>Solution</summary><p>$T_5 = T_{4+1}$, so $r = 4$</p>$$T_5 = \binom{8}{4}(2a)^4(b)^4 = 70 \times 16a^4 \times b^4 = 1120a^4b^4$$</details>

**Problem 1.2**: Find the middle term in $(x + 2y)^6$.

<details><summary>Solution</summary><p>$n = 6$ (even), middle term = $T_4$ ($r = 3$)</p>$$T_4 = \binom{6}{3}(x)^3(2y)^3 = 20 \times x^3 \times 8y^3 = 160x^3y^3$$</details>

**Problem 1.3**: Write the general term of $\left(x - \frac{1}{x}\right)^{12}$.

<details><summary>Solution</summary>$$T_{r+1} = \binom{12}{r}(x)^{12-r}\left(-\frac{1}{x}\right)^r = \binom{12}{r}(-1)^r x^{12-2r}$$</details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: Find the term independent of $x$ in $\left(x^2 - \frac{3}{x}\right)^9$.

<details><summary>Solution</summary><p>General term: $T_{r+1} = \binom{9}{r}(x^2)^{9-r}\left(-\frac{3}{x}\right)^r = \binom{9}{r}(-3)^r x^{18-3r}$</p><p>For independence: $18 - 3r = 0 \Rightarrow r = 6$</p>$$T_7 = \binom{9}{6}(-3)^6 = 84 \times 729 = 61236$$</details>

**Problem 2.2**: If the coefficients of $(r-1)^{\text{th}}$, $r^{\text{th}}$, and $(r+1)^{\text{th}}$ terms in $(1+x)^{20}$ are in AP, find $r$.

<details><summary>Solution</summary><p>Coefficients are: $\binom{20}{r-2}$, $\binom{20}{r-1}$, $\binom{20}{r}$</p><p>In AP: $2\binom{20}{r-1} = \binom{20}{r-2} + \binom{20}{r}$</p><p>Using $\binom{n}{r-1} + \binom{n}{r} = \binom{n+1}{r}$:</p><p>$2\binom{20}{r-1} = \binom{20}{r-2} + \binom{20}{r}$</p><p>After calculation: $r = 7$ or $r = 14$</p></details>

**Problem 2.3**: Find the ratio of the 5th term to the 4th term in $(3x + 2y)^{10}$.

<details><summary>Solution</summary>$$\frac{T_5}{T_4} = \frac{\binom{10}{4}(3x)^6(2y)^4}{\binom{10}{3}(3x)^7(2y)^3}$$

$$= \frac{\binom{10}{4}}{\binom{10}{3}} \times \frac{(3x)^6}{(3x)^7} \times \frac{(2y)^4}{(2y)^3}$$

$$= \frac{10!/(4!6!)}{10!/(3!7!)} \times \frac{1}{3x} \times 2y$$

$$= \frac{7}{4} \times \frac{2y}{3x} = \frac{7y}{6x}$$</details>

---

### Level 3: JEE Advanced

**Problem 3.1**: Find the greatest term numerically in the expansion of $(3 - 5x)^{15}$ when $x = 1/5$.

<details><summary>Solution</summary><p>For greatest term, use: $\frac{T_{r+1}}{T_r} = \frac{(n-r+1)|b|}{r|a|}$</p><p>Here $a = 3$, $b = -5x = -1$, $n = 15$</p><p>$\frac{T_{r+1}}{T_r} = \frac{(16-r) \times 1}{r \times 3} = \frac{16-r}{3r}$</p><p>For greatest term: $\frac{16-r}{3r} \geq 1$ and $\frac{16-(r+1)}{3(r+1)} &lt; 1$</p><p>From first: $16 - r \geq 3r \Rightarrow r \leq 4$</p><p>So greatest term is $T_5$ or check ratio.</p><p>Calculate $T_4$ and $T_5$ and compare numerically.</p></details>

**Problem 3.2**: If the 3rd term in $(x^{\alpha} + x^{-\beta})^n$ is independent of $x$, express $\alpha$ in terms of $\beta$ and $n$.

<details><summary>Solution</summary><p>3rd term: $T_3 = T_{2+1}$, so $r = 2$</p>$$T_3 = \binom{n}{2}(x^{\alpha})^{n-2}(x^{-\beta})^2 = \binom{n}{2}x^{\alpha(n-2)-2\beta}$$<p>For independence: $\alpha(n-2) - 2\beta = 0$</p>$$\alpha = \frac{2\beta}{n-2}$$</details>

**Problem 3.3**: Show that the middle term in $(1 + x)^{2n}$ is $\frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} \cdot 2^n \cdot x^n$.

<details><summary>Solution</summary><p>Middle term when power is $2n$ (even): $T_{n+1}$ (where $r = n$)</p>$$T_{n+1} = \binom{2n}{n}x^n = \frac{(2n)!}{n! \cdot n!}x^n$$

$$= \frac{2n \cdot (2n-1) \cdot (2n-2) \cdots 2 \cdot 1}{n! \cdot n!}x^n$$

$$= \frac{[2 \cdot 4 \cdot 6 \cdots (2n)] \cdot [1 \cdot 3 \cdot 5 \cdots (2n-1)]}{(n!)^2}x^n$$

$$= \frac{2^n \cdot n! \cdot [1 \cdot 3 \cdot 5 \cdots (2n-1)]}{(n!)^2}x^n$$

$$= \frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} \cdot 2^n \cdot x^n$$</details>

---

## Important Results Summary

| Property | Formula |
| --- | --- |
| General Term | $T_{r+1} = \binom{n}{r}a^{n-r}b^r$ |
| Middle Term ($n$ even) | $T_{\frac{n}{2}+1}$ |
| Middle Terms ($n$ odd) | $T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$ |
| Term number from end | $T_r$ from end = $T_{n-r+2}$ from start |
| Greatest coefficient | $\binom{n}{n/2}$ if $n$ even, $\binom{n}{(n-1)/2}$ or $\binom{n}{(n+1)/2}$ if $n$ odd |

---

## Cross-References

- **Binomial Expansion Basics**: Foundation concepts → [Binomial Expansion](../binomial-expansion/index.md)
- **Binomial Coefficients**: Properties of coefficients → [Binomial Coefficients](../binomial-coefficients/index.md)
- **Sequences**: Binomial coefficients as sequences → [Sequences and Series](../../sequences-series/index.md)

---

## Quick Revision Checklist

- General term formula memorized
- Can find middle term for even and odd $n$
- Know how to find term independent of variable
- Understand relationship between $r$ and term number
- Can handle fractional/negative powers
- Practice finding specific coefficients

---

*Last updated: October 18, 2025*

From TestGuru · our mock-test platform

## You've read General Term and Middle Term in Binomial Expansion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=binomial-theorem&tg_exam=jee-main&tg_page=%2Fmathematics%2Fbinomial-theorem%2Fgeneral-term%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/binomial-theorem/general-term/",this.page.identifier="/mathematics/binomial-theorem/general-term/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="pascalTriangle" id="anim-pascalTriangle-1795396421321996452"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-pascalTriangle-1795396421321996452")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/binomial-theorem/general-term/](https://jeenotes.in/mathematics/binomial-theorem/general-term/) · raw HTML: `offline/mathematics/binomial-theorem/general-term/index.html`_
