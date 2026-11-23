---
title: "Significant Figures"
source: "https://jeenotes.in/physics/units-measurements/significant-figures/"
description: "Master rules of significant figures for precision in JEE Physics calculations"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 7"
html: "../../../../offline/physics/units-measurements/significant-figures/index.html"
extracted: "2026-11-23"
---

> Master rules of significant figures for precision in JEE Physics calculations

## Prerequisites

Before studying significant figures, you should understand:

- [SI Units](../si-units/index.md) — Measurement systems
- [Errors](../errors/index.md) — Measurement precision and accuracy

## What Are Significant Figures?

**Significant figures** (or significant digits) are all the digits in a measurement that are known with certainty, plus one uncertain digit.

They indicate the **precision** of a measurement.

> **★ Key point · Real Life: Pharmacy Precision**
>
> When a pharmacist measures 250.0 mg of medicine vs 250 mg, the extra zero matters!
>
> - 250 mg (3 sig figs) → could be anywhere from 249.5 to 250.5 mg

> - 250.0 mg (4 sig figs) → measured to nearest 0.1 mg, between 249.95 and 250.05 mg
>
> That extra precision could be the difference between effective treatment and overdose!

## Rules for Counting Significant Figures

### Rule 1: All Non-Zero Digits Are Significant

**Examples:**

- 123 → **3** significant figures
- 56.78 → **4** significant figures
- 9 → **1** significant figure

### Rule 2: Zeros Between Non-Zero Digits Are Significant (Captive Zeros)

**Examples:**

- 1002 → **4** significant figures
- 50.03 → **4** significant figures
- 2.004 → **4** significant figures

> **◐ In simple terms · Memory Trick**
>
> Think of zeros as “captive” when they’re trapped between non-zero digits — captives always count!

### Rule 3: Leading Zeros Are NOT Significant (Placeholder Zeros)

Leading zeros only indicate the position of the decimal point.

**Examples:**

- 0.0025 → **2** significant figures (only 2 and 5)
- 0.00340 → **3** significant figures (3, 4, and trailing 0)
- 0.5 → **1** significant figure

> **★ Key point · Quick Trick**
>
> Write in scientific notation to easily count sig figs:
>
> - 0.0025 = 2.5 × 10⁻³ → clearly **2** sig figs

> - 0.00340 = 3.40 × 10⁻³ → clearly **3** sig figs

### Rule 4: Trailing Zeros Are Significant ONLY If Decimal Point Is Present

**With decimal point:**

- 250.0 → **4** significant figures
- 2.500 → **4** significant figures
- 100. → **3** significant figures (note the decimal point!)

**Without decimal point (ambiguous):**

- 2500 → could be **2, 3, or 4** sig figs (ambiguous!)
- 100 → could be **1, 2, or 3** sig figs (ambiguous!)

> **⚠ Trap · Ambiguity Alert**
>
> **Problem:** Does 4500 have 2, 3, or 4 significant figures?
>
> **Solution:** Use scientific notation to clarify:
>
> - 4.5 × 10³ → **2** sig figs

> - 4.50 × 10³ → **3** sig figs

> - 4.500 × 10³ → **4** sig figs

### Rule 5: Exact Numbers Have Infinite Significant Figures

**Exact numbers come from:**

- Counting (5 apples, 12 students)
- Definitions (1 m = 100 cm, 1 hour = 60 min)
- Mathematical constants when defined exactly (like “2” in diameter = 2 × radius)

**Examples:**

- There are **exactly** 100 cm in 1 m (not 99.99 or 100.01)
- A class has **exactly** 30 students
- Area of circle = πr² (the “2” in “r²” is exact, but π = 3.14159&mldr; is not)

### Interactive Demo: Visualize Significant Figures

Practice identifying and using significant figures in calculations.

> **◐ Important for Calculations**
>
> When multiplying/dividing, exact numbers don’t limit the significant figures in the result.
>
> Example: If radius = 5.0 cm (2 sig figs), then diameter = **2** × 5.0 = 10. cm (still 2 sig figs, the “2” doesn’t limit it)

## Quick Reference Table

| Number | Significant Figures | Explanation |
| --- | --- | --- |
| 123 | 3 | All non-zero |
| 0.00123 | 3 | Leading zeros don’t count |
| 1.0023 | 5 | Captive zeros count |
| 1.200 | 4 | Trailing zeros after decimal count |
| 1200 | 2, 3, or 4 | Ambiguous! Use scientific notation |
| 1200. | 4 | Decimal point makes trailing zeros count |
| 1.2 × 10³ | 2 | Clear from scientific notation |
| 0.0500 | 3 | Leading zeros don’t count, trailing do |

## Rounding to Significant Figures

### Rounding Rules

When rounding to n significant figures:

1. **If next digit < 5:** Round down (leave as is)
2. **If next digit > 5:** Round up
3. **If next digit = 5:**
   - If followed by non-zero: Round up
   - If followed by zeros or nothing: Round to nearest **even** number

> **↗ Connection · Rounding Examples**
>
> Round to 3 significant figures:
>
> - 12.34 → **12.3** (4 < 5, round down)

> - 12.36 → **12.4** (6 > 5, round up)

> - 12.45 → **12.4** (5 followed by nothing, round to even)

> - 12.55 → **12.6** (5 followed by nothing, round to even)

> - 12.451 → **12.5** (5 followed by non-zero, round up)

> **◐ In simple terms · Even Rounding (Banker's Rounding)**
>
> The “round to even when exactly 5” rule minimizes cumulative rounding errors in long calculations. It’s used in scientific and financial calculations.
>
> **Examples:**
>
> - 2.5 → 2 (round to even)

> - 3.5 → 4 (round to even)

> - 4.5 → 4 (round to even)

## Operations with Significant Figures

### Addition and Subtraction

**Rule:** Result should have the same number of **decimal places** as the measurement with the **fewest decimal places**.

> **↗ Connection · Example 1: Addition**
>
> $$12.3 + 0.45 + 0.006 = 12.756$$
>
> - 12.3 (1 decimal place) ← limiting factor

> - 0.45 (2 decimal places)

> - 0.006 (3 decimal places)
>
> **Answer: 12.8** (rounded to 1 decimal place)

> **↗ Connection · Example 2: Subtraction**
>
> $$123.456 - 12.1 = 111.356$$
>
> - 123.456 (3 decimal places)

> - 12.1 (1 decimal place) ← limiting factor
>
> **Answer: 111.4** (rounded to 1 decimal place)

### Multiplication and Division

**Rule:** Result should have the same number of **significant figures** as the measurement with the **fewest significant figures**.

> **↗ Connection · Example 1: Multiplication**
>
> $$2.5 \times 3.42 = 8.55$$
>
> - 2.5 (2 sig figs) ← limiting factor

> - 3.42 (3 sig figs)
>
> **Answer: 8.6** (rounded to 2 sig figs)

> **↗ Connection · Example 2: Division**
>
> $$\frac{12.5}{0.25} = 50.0$$
>
> - 12.5 (3 sig figs)

> - 0.25 (2 sig figs) ← limiting factor
>
> **Answer: 50** or **5.0 × 10¹** (2 sig figs)
>
> Note: Writing “50” is ambiguous. Better to write **5.0 × 10¹** to show 2 sig figs clearly.

### Powers and Roots

**Rule:** Result has same significant figures as the original number.

> **↗ Connection · Examples**
>
> - $(2.5)^2 = 6.25$ → **6.2** (2 sig figs, same as 2.5)

> - $\sqrt{16.0} = 4.00$ → **4.00** (3 sig figs, same as 16.0)

> - $(1.5)^3 = 3.375$ → **3.4** (2 sig figs, same as 1.5)

### Mixed Operations

For complex calculations, carry extra digits during intermediate steps and round only at the end.

> **↗ Connection · Example: Volume of Cylinder**
>
> Given: radius r = 2.5 cm (2 sig figs), height h = 10.0 cm (3 sig figs)
>
> Find: Volume V = πr²h
>
> **Step-by-step:**
>
> 1. r² = (2.5)² = 6.25 cm² (keep extra digits)

> 2. πr² = 3.14159&mldr; × 6.25 = 19.6349&mldr; cm² (keep extra digits)

> 3. V = 19.6349&mldr; × 10.0 = 196.349&mldr; cm³
>
> **Final answer: 2.0 × 10² cm³** (rounded to 2 sig figs, limited by r = 2.5)
>
> Or: **200 cm³** if written without scientific notation (but this looks like 1 or 2 or 3 sig figs — ambiguous!)

## Common Mistakes to Avoid

> **⚠ Trap · Mistake 1: Counting Leading Zeros**
>
> **Wrong:** 0.0045 has 4 significant figures
>
> **Correct:** 0.0045 = 4.5 × 10⁻³ has **2** significant figures (only 4 and 5)

> **⚠ Trap · Mistake 2: Ignoring Decimal Point in Trailing Zeros**
>
> **Wrong:** 250 and 250. both have 2 significant figures
>
> **Correct:**
>
> - 250 → ambiguous (could be 2 or 3 sig figs)

> - 250. → **3** significant figures (decimal point makes trailing zero significant)

> **⚠ Trap · Mistake 3: Using Sig Fig Rule for Addition**
>
> **Wrong:** 12.3 + 0.456 = 12.756 → round to 3 sig figs = 12.8
>
> **Correct:** Use **decimal places** for addition, not sig figs!
>
> - 12.3 (1 decimal place)

> - Result: 12.8 (1 decimal place)
>
> This happens to give 12.8 in both cases, but reasoning is different!

> **⚠ Trap · Mistake 4: Rounding Intermediate Steps**
>
> **Wrong:**
>
> - r = 2.5 cm

> - r² = 6.25 → round to 6.2 (2 sig figs)

> - πr² = 3.14 × 6.2 = 19.468 → 19 cm²
>
> **Correct:**
>
> - Keep extra digits in intermediate steps

> - r² = 6.25

> - πr² = 3.14159 × 6.25 = 19.6349

> - Final: **20 cm²** (2 sig figs)
>
> The wrong method gives 19 cm², correct gives 20 cm² — different answers!

> **⚠ Trap · Mistake 5: Treating Exact Numbers as Limiting**
>
> **Wrong:** Diameter = 2 × 5.00 cm = 10 cm (limited to 1 sig fig by “2”)
>
> **Correct:** The “2” is exact, doesn’t limit sig figs.

> Diameter = 2 × 5.00 = **10.0 cm** (3 sig figs, same as 5.00)

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> How many significant figures in each?
>
> a) 0.00508

> b) 3.1400

> c) 2000

> d) 2.4 × 10⁵
>
> **Solution:**
>
> a) 0.00508 = 5.08 × 10⁻³ → **3** sig figs
>
> b) 3.1400 → **5** sig figs (trailing zeros after decimal)
>
> c) 2000 → **ambiguous** (could be 1, 2, 3, or 4)
>
> d) 2.4 × 10⁵ → **2** sig figs

> **↗ Connection · Problem 2**
>
> Calculate: 25.2 + 1.34 + 0.006
>
> **Solution:**
>
> Sum = 26.546
>
> Decimal places:
>
> - 25.2 (1 decimal place) ← limiting

> - 1.34 (2 decimal places)

> - 0.006 (3 decimal places)
>
> **Answer: 26.5** (1 decimal place)

> **↗ Connection · Problem 3**
>
> Calculate: 5.2 × 3.145
>
> **Solution:**
>
> Product = 16.354
>
> Significant figures:
>
> - 5.2 (2 sig figs) ← limiting

> - 3.145 (4 sig figs)
>
> **Answer: 16** (2 sig figs)

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 4**
>
> Calculate the area of a rectangle with length 12.4 cm and width 5.3 cm.
>
> **Solution:**
>
> Area = 12.4 × 5.3 = 65.72 cm²
>
> Significant figures:
>
> - 12.4 (3 sig figs)

> - 5.3 (2 sig figs) ← limiting
>
> **Answer: 66 cm²** (2 sig figs)
>
> Or better: **6.6 × 10¹ cm²** to clearly show 2 sig figs

> **↗ Connection · Problem 5**
>
> Density ρ = m/V where m = 25.3 g and V = 12.5 cm³. Find ρ.
>
> **Solution:**
>
> ρ = 25.3 / 12.5 = 2.024 g/cm³
>
> Both have 3 sig figs, so result has 3 sig figs:
>
> **Answer: 2.02 g/cm³** (3 sig figs)

> **↗ Connection · Problem 6**
>
> Calculate: $(2.0 \times 10^2) \times (3.5 \times 10^{-3}) / (5.0 \times 10^4)$
>
> **Solution:**
>
> Numerator: $2.0 \times 3.5 = 7.0$ (2 sig figs)
>
> Result: $\frac{7.0 \times 10^{-1}}{5.0 \times 10^4} = 1.4 \times 10^{-5}$
>
> All numbers have 2 sig figs, answer has 2 sig figs:
>
> **Answer: 1.4 × 10⁻⁵** (2 sig figs)

### Level 3: JEE Advanced

> **↗ Connection · Problem 7**
>
> The mass of a solid cube is measured as 150.0 g. One side is measured as 5.20 cm. Find the density in proper significant figures.
>
> **Solution:**
>
> Volume = (5.20)³ = 140.608 cm³ (keep extra digits)
>
> Density = 150.0 / 140.608 = 1.0668&mldr; g/cm³
>
> Significant figures:
>
> - Mass: 150.0 → 4 sig figs

> - Side: 5.20 → 3 sig figs → Volume has 3 sig figs

> - Limiting: 3 sig figs
>
> **Answer: 1.07 g/cm³** (3 sig figs)

> **↗ Connection · Problem 8**
>
> In an experiment, time period T = 2π√(l/g).
>
> Given: l = 100.0 cm = 1.000 m, g = 9.81 m/s²
>
> Calculate T with proper sig figs. (Take π = 3.14159&mldr;)
>
> **Solution:**
>
> T = 2π√(1.000/9.81)
>
> l/g = 1.000/9.81 = 0.10193&mldr; (keep extra digits)
>
> √(l/g) = 0.31927&mldr; (keep extra digits)
>
> T = 2 × 3.14159 × 0.31927 = 2.0062&mldr; s
>
> Significant figures:
>
> - l = 1.000 → 4 sig figs

> - g = 9.81 → 3 sig figs ← limiting

> - “2” is exact (from definition)

> - π is exact (mathematical constant)
>
> **Answer: 2.01 s** (3 sig figs, limited by g)

> **↗ Connection · Problem 9**
>
> Calculate: $\frac{(5.2)^2 \times 10.0}{2.0 \times 3.5}$
>
> **Solution:**
>
> Numerator: $(5.2)^2 \times 10.0 = 27.04 \times 10.0 = 270.4$
>
> - (5.2)² → 2 sig figs

> - 10.0 → 3 sig figs

> - Numerator → 2 sig figs (limited by 5.2)
>
> Denominator: $2.0 \times 3.5 = 7.0$
>
> - Both have 2 sig figs
>
> Result: $270.4 / 7.0 = 38.628...$
>
> Overall: 2 sig figs (limited by multiple factors)
>
> **Answer: 39** or **3.9 × 10¹** (2 sig figs)

## Quick Summary Chart

> **◐ In simple terms · Significant Figures Quick Guide**
>
> **Counting Rules:**
>
> | Digit Type | Rule |

> | --- | --- |

> | Non-zero digits | Always count |

> | Captive zeros (between digits) | Always count |

> | Leading zeros | Never count |

> | Trailing zeros | Count only if decimal present |

> | Exact numbers | Infinite sig figs |
>
> **Operation Rules:**
>
> | Operation | Rule |

> | --- | --- |

> | Addition/Subtraction | Least decimal places |

> | Multiplication/Division | Fewest sig figs |

> | Powers/Roots | Same sig figs as original |

## Strategy for JEE

> **★ Key point · Exam Strategy**
>
> 1. **For MCQs:** Check answer options first. If all have different sig figs, that’s your clue!

> 2. **For numerical answers:** JEE typically expects 2-4 significant figures unless specified.

> 3. **When in doubt:** Use scientific notation to clearly show sig figs.

> 4. **Intermediate steps:** Keep at least one extra digit, round only at end.

> 5. **Common JEE values:**
>
>    - g = 10 m/s² (exact for simplification)

>    - g = 9.8 m/s² (2 sig figs)

>    - g = 9.81 m/s² (3 sig figs)

>    - π = 3.14 (3 sig figs) or use exact value

---

## Related Topics

### Within Units and Measurements

- [SI Units](../si-units/index.md) — Measurement precision
- [Dimensions](../dimensions/index.md) — Dimensionless quantities
- [Dimensional Analysis](../dimensional-analysis/index.md) — Checking equation validity
- [Errors](../errors/index.md) — Relationship between errors and sig figs

### Connected Chapters

- [Experimental Skills](../../experimental-skills/index.md) — Recording measurements
- All numerical problems in Physics — Proper precision in answers

### Math Connections

- [Scientific Notation](../../../mathematics/index.md) — Expressing large/small numbers
- [Rounding](../../../mathematics/index.md) — Approximation techniques

---

From TestGuru · our mock-test platform

## You've read Significant Figures.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=units-measurements&tg_exam=jee-main&tg_page=%2Fphysics%2Funits-measurements%2Fsignificant-figures%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/units-measurements/significant-figures/",this.page.identifier="/physics/units-measurements/significant-figures/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="dimensionalAnalysis" id="anim-dimensionalAnalysis-1795396424471624695"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-dimensionalAnalysis-1795396424471624695")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/units-measurements/significant-figures/](https://jeenotes.in/physics/units-measurements/significant-figures/) · raw HTML: `offline/physics/units-measurements/significant-figures/index.html`_
