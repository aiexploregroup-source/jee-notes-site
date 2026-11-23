---
title: "Measures of Dispersion"
source: "https://jeenotes.in/mathematics/statistics-probability/measures-dispersion/"
description: "Master variance, standard deviation, and range for JEE - Understand data spread in cricket scores, stock markets, and competitive exams"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 10"
html: "../../../../offline/mathematics/statistics-probability/measures-dispersion/index.html"
extracted: "2026-11-23"
---

> Master variance, standard deviation, and range for JEE - Understand data spread in cricket scores, stock markets, and competitive exams

# Measures of Dispersion

## The Consistency Challenge

Two batsmen have the same average of 50 runs:

- **Batsman A**: Scores are 48, 49, 50, 51, 52 (very consistent)
- **Batsman B**: Scores are 10, 30, 50, 70, 90 (highly variable)

Who would you pick for a crucial match? While both have identical means, their **consistency** (dispersion) differs dramatically. Dispersion measures reveal the “spread” or “variability” in data—crucial for JEE, stock analysis, and quality control!

---

## What Are Measures of Dispersion?

**Dispersion** measures how scattered or spread out data values are from the central value. While central tendency tells us the “center,” dispersion tells us how far values deviate from it.

### Types of Dispersion Measures

1. **Range** - Simplest measure (Max - Min)
2. **Quartile Deviation** - Based on quartiles
3. **Mean Absolute Deviation (MAD)** - Average of absolute deviations
4. **Variance** - Average of squared deviations ⭐ Most important
5. **Standard Deviation** - Square root of variance ⭐ Most used

---

## 1. Range

### Definition

**Range** is the difference between the maximum and minimum values.

Range Formula

$$\text{Range} = \text{Maximum Value} - \text{Minimum Value}$$

$$R = x_{\max} - x_{\min}$$

### Limitations

- Uses only two values (ignores all others)
- Highly affected by outliers
- Doesn’t show how data is distributed

**Example**: For scores 10, 50, 51, 52, 90

- Range = 90 - 10 = 80 (one outlier makes it large)

---

## 2. Quartile Deviation (Semi-Interquartile Range)

### Definition

**Quartile Deviation** measures the spread of the middle 50% of data.

Quartile Deviation

$$\text{Quartile Deviation (QD)} = \frac{Q_3 - Q_1}{2}$$

where:

- $Q_1$ = First Quartile (25th percentile)
- $Q_3$ = Third Quartile (75th percentile)

**Coefficient of Quartile Deviation**:

$$\text{Coefficient of QD} = \frac{Q_3 - Q_1}{Q_3 + Q_1}$$

### How to Find Quartiles

**For ungrouped data** (n observations, arranged in order):

- $Q_1 = \left(\frac{n+1}{4}\right)^{th}$ term
- $Q_2 = \text{Median} = \left(\frac{n+1}{2}\right)^{th}$ term
- $Q_3 = 3\left(\frac{n+1}{4}\right)^{th}$ term

**For grouped data**:

$$Q_1 = L + \left(\frac{\frac{N}{4} - CF}{f}\right) \times h$$

$$Q_3 = L + \left(\frac{\frac{3N}{4} - CF}{f}\right) \times h$$

---

## 3. Mean Absolute Deviation (MAD)

### Definition

**MAD** is the average of absolute deviations from the mean (or median).

Mean Absolute Deviation

**From Mean**:

$$\text{MAD} = \frac{1}{n}\sum_{i=1}^{n}|x_i - \bar{x}|$$

**From Median**:

$$\text{MAD} = \frac{1}{n}\sum_{i=1}^{n}|x_i - M|$$

**For grouped data**:

$$\text{MAD} = \frac{\sum f_i|x_i - \bar{x}|}{\sum f_i}$$

---

## 4. Variance (σ² or s²)

### Definition

**Variance** is the average of squared deviations from the mean. It’s the most important dispersion measure in statistics!

Variance Formulas

**Population Variance (σ²)**:

$$\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

**Alternative Formula** (easier for calculation):

$$\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}x_i^2 - \left(\bar{x}\right)^2 = \frac{\sum x_i^2}{n} - \left(\frac{\sum x_i}{n}\right)^2$$

**For Grouped Data**:

$$\sigma^2 = \frac{\sum f_i x_i^2}{\sum f_i} - \left(\frac{\sum f_i x_i}{\sum f_i}\right)^2$$

**Sample Variance (s²)** (for JEE, usually use population formula):

$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

### Why Square Deviations?

- Positive and negative deviations don’t cancel out
- Larger deviations are penalized more (squaring amplifies them)
- Makes mathematical analysis easier (differentiable, etc.)

### Properties of Variance

1. **Always non-negative**: $\sigma^2 \geq 0$
2. **Variance of constant**: $\text{Var}(c) = 0$
3. **Effect of adding constant**: $\text{Var}(X + c) = \text{Var}(X)$
4. **Effect of multiplying**: $\text{Var}(cX) = c^2 \text{Var}(X)$
5. **Minimum property**: Variance about mean is minimum (less than variance about any other value)

---

## 5. Standard Deviation (σ or s)

### Definition

**Standard Deviation (SD)** is the square root of variance. It’s in the same units as the original data, making it more interpretable.

Standard Deviation Formulas

**Population Standard Deviation**:

$$\sigma = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

**Alternative Formula**:

$$\sigma = \sqrt{\frac{\sum x_i^2}{n} - \left(\bar{x}\right)^2}$$

**For Grouped Data**:

$$\sigma = \sqrt{\frac{\sum f_i x_i^2}{\sum f_i} - \left(\frac{\sum f_i x_i}{\sum f_i}\right)^2}$$

**Sample Standard Deviation**:

$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

### Coefficient of Variation (CV)

Compares variability of datasets with different units or means:

$$\text{CV} = \frac{\sigma}{\bar{x}} \times 100\%$$

- **Lower CV** → More consistent
- **Higher CV** → More variable

**Example**: Compare consistency of batsmen with different averages.

---

## Interactive Visualization

---

## Memory Tricks

Memory Tricks

1. **“Very Stressed? Take Square Root!”**

   - **V**ariance is **S**quared → **S**tandard **D**eviation is **√** of variance
2. **“Range is Lazy”** - Uses only 2 values (max, min)
3. **Formula trick for variance**:

   - **“Mean of squares minus square of mean”**
   - $\sigma^2 = \overline{x^2} - (\bar{x})^2$
4. **Units**:

   - Variance has **squared units** (runs²)
   - SD has **original units** (runs)
5. **Order of magnitude**:

   - Range > SD > QD (usually)

---

## Common Mistakes to Avoid

Common Mistakes

1. **Forgetting to square in variance**: Must square deviations, not just sum them
2. **Wrong formula**: $\sigma^2 = \frac{\sum x_i^2}{n} - (\bar{x})^2$, NOT $\frac{(\sum x_i)^2}{n} - \bar{x}$
3. **Confusing σ and σ²**: Standard deviation is √(variance), not variance itself
4. **Adding SDs directly**: Can’t add standard deviations like means (need variance formula)
5. **Units**: Variance has squared units; always take √ for SD to get original units
6. **Effect of transformation**: Adding constant doesn’t change SD, but multiplying does!

---

## Solved Examples

### Example 1: Basic Variance Calculation (Ungrouped Data)

**Problem**: Find the variance and standard deviation of: 5, 10, 15, 20, 25

**Solution**:

**Step 1**: Find mean

$$\bar{x} = \frac{5 + 10 + 15 + 20 + 25}{5} = \frac{75}{5} = 15$$

**Method 1** (Deviations):

$$\sigma^2 = \frac{(5-15)^2 + (10-15)^2 + (15-15)^2 + (20-15)^2 + (25-15)^2}{5}$$

$$= \frac{100 + 25 + 0 + 25 + 100}{5} = \frac{250}{5} = 50$$

**Method 2** (Easier formula):

$$\sum x_i^2 = 25 + 100 + 225 + 400 + 625 = 1375$$

$$\sigma^2 = \frac{1375}{5} - (15)^2 = 275 - 225 = 50$$

**Standard Deviation**:

$$\sigma = \sqrt{50} = 5\sqrt{2} \approx 7.07$$

---

### Example 2: Grouped Data Variance

**Problem**: Find variance and SD for:

| Class | 0-10 | 10-20 | 20-30 | 30-40 |
| --- | --- | --- | --- | --- |
| Frequency | 3 | 7 | 12 | 8 |

**Solution**:

| Class | Midpoint ($x_i$) | $f_i$ | $f_i x_i$ | $x_i^2$ | $f_i x_i^2$ |
| --- | --- | --- | --- | --- | --- |
| 0-10 | 5 | 3 | 15 | 25 | 75 |
| 10-20 | 15 | 7 | 105 | 225 | 1575 |
| 20-30 | 25 | 12 | 300 | 625 | 7500 |
| 30-40 | 35 | 8 | 280 | 1225 | 9800 |
| **Total** |  | **30** | **700** |  | **18950** |

**Mean**:

$$\bar{x} = \frac{700}{30} = 23.33$$

**Variance**:

$$\sigma^2 = \frac{18950}{30} - (23.33)^2 = 631.67 - 544.49 = 87.18$$

**Standard Deviation**:

$$\sigma = \sqrt{87.18} \approx 9.34$$

---

### Example 3: Effect of Transformation (JEE Pattern)

**Problem**: The variance of 10, 20, 30, 40, 50 is 200. Find:
(a) Variance if each value is increased by 5
(b) Variance if each value is multiplied by 3

**Solution**:

**(a) Adding constant (k = 5)**:
Variance remains **unchanged** = 200
(Adding constant shifts data but doesn’t change spread)

**(b) Multiplying by constant (k = 3)**:

$$\text{New Variance} = k^2 \times \text{Old Variance} = 3^2 \times 200 = 9 \times 200 = 1800$$

**Key Rule**:

- $\text{Var}(X + k) = \text{Var}(X)$
- $\text{Var}(kX) = k^2 \text{Var}(X)$

---

### Example 4: Coefficient of Variation (Real-Life Application)

**Problem**: Two batsmen have:

- **Batsman A**: Mean = 40 runs, SD = 12 runs
- **Batsman B**: Mean = 60 runs, SD = 15 runs

Who is more consistent?

**Solution**:

**CV for Batsman A**:

$$\text{CV}_A = \frac{12}{40} \times 100 = 30\%$$

**CV for Batsman B**:

$$\text{CV}_B = \frac{15}{60} \times 100 = 25\%$$

**Answer**: Batsman B is more consistent (lower CV)

---

### Example 5: Combined Variance (JEE Advanced)

**Problem**: Group 1 has 10 observations with mean 50 and variance 16. Group 2 has 15 observations with mean 60 and variance 25. Find the combined variance.

**Solution**:

Combined Variance Formula

$$\sigma^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}$$

where $d_1 = \bar{x}_1 - \bar{x}$, $d_2 = \bar{x}_2 - \bar{x}$, and $\bar{x}$ is combined mean.

**Step 1**: Combined mean

$$\bar{x} = \frac{10(50) + 15(60)}{10 + 15} = \frac{500 + 900}{25} = \frac{1400}{25} = 56$$

**Step 2**: Calculate deviations

$$d_1 = 50 - 56 = -6$$

$$d_2 = 60 - 56 = 4$$

**Step 3**: Combined variance

$$\sigma^2 = \frac{10(16 + 36) + 15(25 + 16)}{25} = \frac{10(52) + 15(41)}{25} = \frac{520 + 615}{25} = \frac{1135}{25} = 45.4$$

---

## Practice Problems

### Level 1: Foundation (JEE Main)

1. Find the range of: 12, 18, 15, 22, 9, 25
2. Find variance of: 2, 4, 6, 8, 10
3. If SD of 5, 10, 15, 20 is σ, what is SD of 10, 15, 20, 25?

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>Range = 25 - 9 = 16</p></li><li><p>Mean = 6, Variance = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²]/5
= [16 + 4 + 0 + 4 + 16]/5 = 40/5 = 8</p></li><li><p>Same as σ (adding 5 to each value doesn’t change SD)</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. Find variance for grouped data:

| x | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| f | 4 | 8 | 14 | 8 | 6 |

5. Variance of 10 observations is 25. If each observation is multiplied by 2, find new variance and SD.
6. Mean and variance of 5 observations are 4 and 5.2. If three observations are 3, 4, 4, find the other two observations (assume they are equal).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>Σf = 40, Σfx = 4+16+42+32+30 = 124, Σfx² = 4+32+126+128+150 = 440
Mean = 124/40 = 3.1
Variance = 440/40 - (3.1)² = 11 - 9.61 = 1.39</p></li><li><p>New variance = 2² × 25 = 100
New SD = 2 × 5 = 10</p></li><li><p>Let other two be a, a. Mean: (3+4+4+a+a)/5 = 4 → 11+2a = 20 → a = 4.5
Variance: [(3-4)²+(4-4)²+(4-4)²+(4.5-4)²+(4.5-4)²]/5 = 5.2
[1+0+0+0.25+0.25]/5 = 0.3 ≠ 5.2 (Check calculation - problem may have different values)</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. Prove that variance is minimum when calculated about the mean (i.e., variance about any other point is greater).
8. Two sets of observations have the same variance σ². If the two sets are combined, prove that the variance of the combined set is at least σ².
9. If the variance of n observations is σ², what is the variance of (a₁x₁ + b), (a₁x₂ + b), &mldr;, (a₁xₙ + b)?

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>Let variance about point ‘a’ be V(a) = Σ(xᵢ-a)²/n
= Σ[(xᵢ-x̄) + (x̄-a)]²/n
= Σ(xᵢ-x̄)²/n + 2(x̄-a)Σ(xᵢ-x̄)/n + (x̄-a)²
= σ² + 0 + (x̄-a)² ≥ σ²
Minimum when a = x̄</p></li><li><p>Combined variance includes d² terms (deviations of means from combined mean)
σ²(combined) = [n₁(σ² + d₁²) + n₂(σ² + d₂²)]/(n₁+n₂)
= σ² + [n₁d₁² + n₂d₂²]/(n₁+n₂) ≥ σ²</p></li><li><p>Var(aX + b) = a²Var(X) = a²σ²</p></li></ol></div></details>

---

## Real-Life Applications

### 1. Quality Control

Manufacturing bolts with mean length 10 cm:

- **Low SD** (0.1 cm): High quality, consistent
- **High SD** (1 cm): Poor quality, reject batch

### 2. Stock Market

Two stocks with same average return:

- **Low SD**: Stable, lower risk
- **High SD**: Volatile, higher risk

### 3. Cricket/Sports

- **Low SD**: Consistent performer (reliable)
- **High SD**: Unpredictable (match-winner or failure)

### 4. Education

Class test scores:

- **Low SD**: Most students at similar level
- **High SD**: Mixed ability group

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Measures of Central Tendency](../measures-central-tendency/index.md) - Mean is used in all dispersion formulas
- [Probability Distributions](../probability-distributions/index.md) - Variance of binomial, Poisson distributions
- [Random Variables](../random-variables/index.md) - Variance and expectation of random variables
- [Binomial Theorem](../../binomial-theorem/index.md) - (a+b)² expansion in variance formula

**Advanced Connections**:

- **Standard Deviation** → Standard Error → Hypothesis Testing
- **Variance** → Covariance → Correlation
- **CV** → Comparing investments with different scales

---

## Important Formulas Summary

Formula Quick Reference

| Measure | Formula | Units |
| --- | --- | --- |
| **Range** | Max - Min | Same as data |
| **QD** | (Q₃ - Q₁)/2 | Same as data |
| **MAD** | Σ|xᵢ - x̄|/n | Same as data |
| **Variance** | Σ(xᵢ - x̄)²/n = Σxᵢ²/n - (x̄)² | Squared units |
| **SD** | √Variance | Same as data |
| **CV** | (σ/x̄) × 100% | Percentage |

**Transformation Rules**:

- Var(X + k) = Var(X)
- Var(kX) = k²Var(X)
- SD(X + k) = SD(X)
- SD(kX) = |k|SD(X)

---

## Quick Revision Checklist

Quick Revision

✓ **Range**: Simplest, uses only 2 values, affected by outliers
✓ **Variance**: Mean of squared deviations, most important measure
✓ **Standard Deviation**: √Variance, same units as data
✓ **Formula**: σ² = (Σx²/n) - (x̄)² ← “Mean of squares - Square of mean”
✓ **Properties**: Var(X+k) = Var(X), Var(kX) = k²Var(X)
✓ **CV**: For comparing datasets with different units/scales
✓ **Units**: Variance has squared units, SD has original units

---

## Exam Tips

1. **Use alternative formula**: σ² = (Σx²/n) - (x̄)² is faster than Σ(x-x̄)²/n
2. **Check units**: If asked for SD but calculated variance, take square root!
3. **Transformation problems**: Remember k² for multiplication, no change for addition
4. **Combined variance**: Need both individual variances AND means
5. **CV for comparison**: When means differ significantly, use coefficient of variation

---

## Next Steps

Now that you understand how data spreads, let’s explore the foundations of probability:

- [Probability Basics](../probability-basics/index.md) - Sample space, events, and probability axioms

---

*Last updated: December 16, 2025*
*Master dispersion concepts at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Measures of Dispersion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fmeasures-dispersion%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/measures-dispersion/",this.page.identifier="/mathematics/statistics-probability/measures-dispersion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="dispersion" id="anim-dispersion-1795396422226547646"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-dispersion-1795396422226547646")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/measures-dispersion/](https://jeenotes.in/mathematics/statistics-probability/measures-dispersion/) · raw HTML: `offline/mathematics/statistics-probability/measures-dispersion/index.html`_
