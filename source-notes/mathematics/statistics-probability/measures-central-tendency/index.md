---
title: "Measures of Central Tendency"
source: "https://jeenotes.in/mathematics/statistics-probability/measures-central-tendency/"
description: "Master mean, median, and mode for JEE - Learn to analyze cricket scores, exam marks, and real-world data distributions"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 10"
html: "../../../../offline/mathematics/statistics-probability/measures-central-tendency/index.html"
extracted: "2026-11-23"
---

> Master mean, median, and mode for JEE - Learn to analyze cricket scores, exam marks, and real-world data distributions

# Measures of Central Tendency

## The Cricket Score Mystery

Imagine Virat Kohli’s last 5 innings: **45, 89, 23, 67, 101**. Which single number best represents his “typical” performance? Is it the average (mean), the middle value (median), or the most frequent score (mode)? Understanding central tendency helps scouts, coaches, and analysts predict player performance—and helps you ace JEE Statistics!

---

## What Are Measures of Central Tendency?

Central tendency measures help us find the **“center”** or **“representative value”** of a dataset. The three main measures are:

1. **Mean** - The arithmetic average
2. **Median** - The middle value when data is ordered
3. **Mode** - The most frequently occurring value

Each has its strengths and is used in different scenarios.

---

## 1. Arithmetic Mean (Average)

### Definition

The **mean** is the sum of all observations divided by the number of observations.

### Formulas

Mean Formulas

**For Ungrouped Data:**

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{x_1 + x_2 + ... + x_n}{n}$$

**For Grouped Data (Discrete):**

$$\bar{x} = \frac{\sum_{i=1}^{n} f_i x_i}{\sum_{i=1}^{n} f_i} = \frac{\sum f_i x_i}{N}$$

**For Grouped Data (Continuous):**

$$\bar{x} = \frac{\sum_{i=1}^{n} f_i m_i}{\sum_{i=1}^{n} f_i}$$

where $m_i$ is the midpoint of the $i^{th}$ class interval.

### Properties of Mean

1. **Sum of deviations from mean = 0**: $\sum (x_i - \bar{x}) = 0$
2. **Effect of change**:
   - If each value increases by $k$, mean increases by $k$
   - If each value is multiplied by $k$, mean is multiplied by $k$
3. **Combined Mean**: For two groups with means $\bar{x}_1$ and $\bar{x}_2$ and sizes $n_1$ and $n_2$:
   $$\bar{x} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$$

### Interactive Visualization

---

## 2. Median

### Definition

The **median** is the middle value when data is arranged in ascending or descending order. It divides the data into two equal halves.

### Formulas

Median Formulas

**For Ungrouped Data:**

If $n$ is odd: $\text{Median} = x_{\frac{n+1}{2}}$

If $n$ is even: $\text{Median} = \frac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2}$

**For Grouped Data:**

$$\text{Median} = L + \left(\frac{\frac{N}{2} - CF}{f}\right) \times h$$

where:

- $L$ = Lower boundary of median class
- $N$ = Total frequency
- $CF$ = Cumulative frequency before median class
- $f$ = Frequency of median class
- $h$ = Class width

**Median class** is the class where cumulative frequency ≥ $\frac{N}{2}$

### Why Use Median?

- **Robust to outliers**: Not affected by extreme values
- **Real-life example**: House prices in a city. If one billionaire buys a ₹100 crore mansion, the mean price shoots up, but median stays realistic.

---

## 3. Mode

### Definition

The **mode** is the value that appears most frequently in a dataset. A dataset can have:

- **No mode** (all values appear once)
- **Unimodal** (one mode)
- **Bimodal** (two modes)
- **Multimodal** (more than two modes)

### Formulas

Mode Formulas

**For Ungrouped Data:**
Mode = Most frequently occurring value

**For Grouped Data:**

$$\text{Mode} = L + \left(\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right) \times h$$

where:

- $L$ = Lower boundary of modal class
- $f_1$ = Frequency of modal class
- $f_0$ = Frequency of class before modal class
- $f_2$ = Frequency of class after modal class
- $h$ = Class width

**Modal class** is the class with highest frequency.

### Empirical Relationship

For moderately skewed distributions:

$$\text{Mode} = 3 \times \text{Median} - 2 \times \text{Mean}$$

---

## Comparison: Mean vs Median vs Mode

| Aspect | Mean | Median | Mode |
| --- | --- | --- | --- |
| **Calculation** | Uses all data values | Uses middle value(s) | Uses frequency |
| **Outliers** | Affected by outliers | Not affected | Not affected |
| **Uniqueness** | Always unique | Always unique | May not be unique |
| **Application** | Symmetric distributions | Skewed distributions | Categorical data |
| **JEE Focus** | High (most formulas) | Medium | Low |

---

## Memory Tricks

Memory Tricks

1. **Mean = Team**: Uses ALL team members (all data points)
2. **Median = Middle**: The middle runner in a race
3. **Mode = Most**: The most fashionable (frequent) outfit

**Order of calculation for grouped data:**

- “**M**ean needs **M**idpoints”
- “**M**edian needs **M**idway point (cumulative frequency)”
- “**M**ode needs **M**aximum frequency”

---

## Common Mistakes to Avoid

Common Mistakes

1. **Not arranging data for median**: Always sort data before finding median
2. **Confusing class boundaries**: Use lower boundary, not lower limit
3. **Wrong cumulative frequency**: For median, use CF just *before* median class
4. **Forgetting class width**: Always multiply by $h$ in grouped data formulas
5. **Mean of means**: Can’t average means from different groups directly—need weighted mean

---

## Solved Examples

### Example 1: Cricket Scores (Ungrouped Data)

**Problem**: Rohit Sharma’s scores in 7 matches: 35, 67, 89, 23, 45, 78, 67. Find mean, median, and mode.

**Solution**:

**Mean**:

$$\bar{x} = \frac{35 + 67 + 89 + 23 + 45 + 78 + 67}{7} = \frac{404}{7} = 57.71$$

**Median**:
Arrange in order: 23, 35, 45, 67, 67, 78, 89

$$\text{Median} = x_4 = 67$$

(middle value, $n=7$ is odd)

**Mode**: 67 (appears twice, others once)

---

### Example 2: Exam Marks (Grouped Data)

**Problem**: Find mean, median, and mode for this class test data:

| Marks | 0-10 | 10-20 | 20-30 | 30-40 | 40-50 |
| --- | --- | --- | --- | --- | --- |
| Students | 5 | 8 | 15 | 12 | 10 |

**Solution**:

**Step 1: Create table for mean**

| Marks | Midpoint ($m_i$) | Frequency ($f_i$) | $f_i m_i$ |
| --- | --- | --- | --- |
| 0-10 | 5 | 5 | 25 |
| 10-20 | 15 | 8 | 120 |
| 20-30 | 25 | 15 | 375 |
| 30-40 | 35 | 12 | 420 |
| 40-50 | 45 | 10 | 450 |
| **Total** |  | **50** | **1390** |

$$\bar{x} = \frac{\sum f_i m_i}{N} = \frac{1390}{50} = 27.8 \text{ marks}$$

**Step 2: Find median**

| Marks | Frequency ($f_i$) | Cumulative Frequency (CF) |
| --- | --- | --- |
| 0-10 | 5 | 5 |
| 10-20 | 8 | 13 |
| 20-30 | 15 | 28 ← Median class |
| 30-40 | 12 | 40 |
| 40-50 | 10 | 50 |

$\frac{N}{2} = \frac{50}{2} = 25$. Median class is 20-30 (CF = 28 ≥ 25)

$$\text{Median} = 20 + \left(\frac{25 - 13}{15}\right) \times 10 = 20 + 8 = 28 \text{ marks}$$

**Step 3: Find mode**

Modal class = 20-30 (highest frequency = 15)

$$\text{Mode} = 20 + \left(\frac{15 - 8}{2(15) - 8 - 12}\right) \times 10 = 20 + \left(\frac{7}{10}\right) \times 10 = 27 \text{ marks}$$

---

### Example 3: Combined Mean (JEE Main 2023 Pattern)

**Problem**: The mean weight of 40 students in Class A is 55 kg, and the mean weight of 60 students in Class B is 62 kg. Find the combined mean weight.

**Solution**:

$$\bar{x} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2} = \frac{40(55) + 60(62)}{40 + 60} = \frac{2200 + 3720}{100} = \frac{5920}{100} = 59.2 \text{ kg}$$

---

## Practice Problems

### Level 1: Foundation (JEE Main)

1. Find the mean of: 3, 5, 7, 9, 11, 13, 15
2. The median of 5, 8, x, 12, 15 is 10. Find x.
3. Find the mode of: 2, 3, 4, 4, 5, 5, 5, 6, 7

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>Mean = (3+5+7+9+11+13+15)/7 = 63/7 = 9</p></li><li><p>Arrange: 5, 8, x, 12, 15. Since n=5 (odd), median = 3rd term = x
Given median = 10, so x = 10</p></li><li><p>Mode = 5 (appears 3 times, most frequent)</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. Find the mean and median:

| Class | 0-10 | 10-20 | 20-30 | 30-40 |
| --- | --- | --- | --- | --- |
| Frequency | 4 | 6 | 8 | 2 |

5. If each observation is increased by 5, how does the mean change?
6. The mean of 10 numbers is 50. If one number 60 is replaced by 80, find the new mean.

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>Mean = (5×4 + 15×6 + 25×8 + 35×2)/20 = (20+90+200+70)/20 = 380/20 = 19</p><p>N/2 = 10, CF: 4, 10, 18, 20. Median class: 20-30
Median = 20 + [(10-10)/8]×10 = 20</p></li><li><p>Mean increases by 5 (property of mean)</p></li><li><p>Old sum = 10×50 = 500. New sum = 500-60+80 = 520
New mean = 520/10 = 52</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. The mean and median of 100 observations are 50 and 52. The largest observation is 100. If it is replaced by 140, find the new mean and median.
8. Prove that the sum of deviations of observations from their mean is zero.
9. In a frequency distribution, the mean and mode are 26 and 29 respectively. Find the median using the empirical relationship.

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>New mean = 50 + (140-100)/100 = 50 + 0.4 = 50.4
Median remains 52 (depends on middle values, not extremes)</p></li><li><p>Let mean = x̄. Sum = Σ(xᵢ - x̄) = Σxᵢ - nx̄ = nx̄ - nx̄ = 0</p></li><li><p>Mode = 3×Median - 2×Mean
29 = 3×Median - 2×26
29 = 3×Median - 52
3×Median = 81
Median = 27</p></li></ol></div></details>

---

## Real-Life Applications

### 1. Cricket Analytics

- **Mean**: Average runs scored (overall performance)
- **Median**: Middle score (consistent performance indicator)
- **Mode**: Most common score (comfort zone)

### 2. Salary Analysis

- **Mean**: Affected by CEO’s crore-rupee salary
- **Median**: Better indicator of “typical” employee salary
- **Mode**: Most common pay grade

### 3. JEE Preparation

- **Mean**: Average score across all mock tests
- **Median**: Middle score (consistency check)
- **Mode**: Score range you hit most often

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Measures of Dispersion](../measures-dispersion/index.md) - How spread out is data around the mean?
- [Probability Basics](../probability-basics/index.md) - Expected value is a type of mean
- [Permutations & Combinations](../../permutations-combinations/index.md) - Counting in probability problems
- [Sequences and Series](../../sequences-series/index.md) - Arithmetic mean connects to AP

**Advanced Applications**:

- Weighted mean → Expected value in probability
- Median → Percentiles in competitive exams
- Mode → Most likely outcome in probability

---

## Quick Revision

Quick Revision Checklist

✓ **Mean**: Sum/Count, affected by outliers, uses all data
✓ **Median**: Middle value, robust to outliers, needs sorted data
✓ **Mode**: Most frequent, may not be unique, good for categorical data
✓ **Grouped Data**: Remember to use midpoints (mean), CF (median), max frequency (mode)
✓ **Combined Mean**: Weighted average formula
✓ **Empirical**: Mode = 3×Median - 2×Mean (for skewed data)

---

## Exam Tips

1. **Always check**: Is data grouped or ungrouped?
2. **For median**: Sort data first (ungrouped) or find CF (grouped)
3. **Class boundaries**: Use lower boundary in formulas, not lower limit
4. **Combined mean**: Weight by frequencies/sizes
5. **Speed trick**: For symmetric data, Mean = Median = Mode

---

## Next Steps

Ready to measure how “spread out” your data is? Continue to:

- [Measures of Dispersion](../measures-dispersion/index.md) - Variance, Standard Deviation, Range

---

*Last updated: December 15, 2025*
*Practice more at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Measures of Central Tendency.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fmeasures-central-tendency%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/measures-central-tendency/",this.page.identifier="/mathematics/statistics-probability/measures-central-tendency/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="centralTendency" id="anim-centralTendency-1795396422222299883"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-centralTendency-1795396422222299883")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/measures-central-tendency/](https://jeenotes.in/mathematics/statistics-probability/measures-central-tendency/) · raw HTML: `offline/mathematics/statistics-probability/measures-central-tendency/index.html`_
