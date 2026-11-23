---
title: "Errors in Measurement"
source: "https://jeenotes.in/physics/units-measurements/errors/"
description: "Master types of errors and error propagation for JEE Physics experiments"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 7"
html: "../../../../offline/physics/units-measurements/errors/index.html"
extracted: "2026-11-23"
---

> Master types of errors and error propagation for JEE Physics experiments

## Prerequisites

Before studying errors, you should understand:

- [SI Units](../si-units/index.md) — Measurement standards
- [Significant Figures](../significant-figures/index.md) — Precision representation

## Why Study Errors?

No measurement is perfect! Understanding errors helps us:

- Know the **reliability** of measurements
- Express results with appropriate **precision**
- Improve experimental techniques

> **★ Key point · Real Life: The Hubble Telescope Mishap**
>
> When the Hubble Space Telescope was launched in 1990, its images were blurry. Why? The primary mirror had a **systematic error** of just 2.2 micrometers (1/50th the width of human hair) in its curvature. This tiny error cost NASA $50 million to fix in space! This shows why understanding and minimizing errors is crucial.

## Accuracy vs Precision

These terms are often confused but mean different things:

| **Accuracy** | **Precision** |
| --- | --- |
| How close a measurement is to the **true value** | How close measurements are to **each other** |
| Related to **systematic errors** | Related to **random errors** |
| Can be improved by **calibration** | Can be improved by **better instruments** |

> **◐ In simple terms · Dartboard Analogy**
>
> Imagine throwing darts:
>
> **High Accuracy, Low Precision:** Darts scattered around the bullseye
>
> **Low Accuracy, High Precision:** Darts clustered together but away from bullseye
>
> **High Accuracy, High Precision:** Darts clustered tightly at the bullseye (IDEAL!)
>
> **Low Accuracy, Low Precision:** Darts scattered everywhere (WORST!)

## Types of Errors

### 1. Systematic Errors (Constant Errors)

Errors that occur in the **same direction** (always positive or always negative) with **constant magnitude**.

**Characteristics:**

- Same for all measurements
- Can be **corrected** if cause is known
- Affect **accuracy**

**Common Sources:**

> **⚠ Trap · Sources of Systematic Errors**
>
> **Instrumental Errors:**
>
> - Zero error in [vernier calipers](../../experimental-skills/vernier-caliper/index.md)

> - Incorrect calibration

> - Worn-out meter stick
>
> **Environmental Errors:**
>
> - Temperature affecting length measurements

> - Air pressure affecting gas experiments

> - Humidity affecting electrical measurements
>
> **Personal Errors:**
>
> - Parallax error in reading scales

> - Reaction time in stopwatch measurements

> - Always reading on one side of pointer
>
> **Theoretical Errors:**
>
> - Using simplified formulas

> - Ignoring air resistance

> - Approximations in calculations

> **↗ Connection · Example: Zero Error**
>
> A [vernier caliper](../../experimental-skills/vernier-caliper/index.md) shows reading of 0.03 cm when jaws are closed (should be 0.00 cm).
>
> This is a **positive zero error** of +0.03 cm.
>
> **Correction:** Subtract 0.03 cm from all readings.
>
> If measured value = 5.47 cm, **True value = 5.47 - 0.03 = 5.44 cm**

### Interactive Demo: Visualize Error Analysis

Understand how errors propagate through calculations and measurements.

### 2. Random Errors (Accidental Errors)

Errors that vary in **magnitude and sign** from measurement to measurement.

**Characteristics:**

- Unpredictable
- Can be **positive or negative**
- Cannot be eliminated, only **reduced**
- Affect **precision**

**Common Sources:**

- Fluctuations in experimental conditions
- Limitations of measuring instruments
- Observer’s inability to read exactly

**Reduction Method:**

$$\boxed{\text{Take multiple measurements and find the MEAN}}$$

The mean of many measurements is closer to true value than any single measurement.

> **↗ Connection · Example: Measuring Time Period**
>
> 5 measurements of time period: 2.1 s, 2.3 s, 2.2 s, 2.4 s, 2.0 s
>
> **Mean:** $\bar{T} = \frac{2.1 + 2.3 + 2.2 + 2.4 + 2.0}{5} = \frac{11.0}{5} = 2.2$ s
>
> The mean (2.2 s) is more reliable than any single reading.

### 3. Gross Errors (Blunders)

Large errors due to **human mistakes**.

**Examples:**

- Reading scale incorrectly (reading 5 instead of 6)
- Recording wrong value
- Using wrong formula
- Calculation mistakes

**Solution:** **Careful observation** and **double-checking**!

## Absolute Error, Relative Error, and Percentage Error

### Absolute Error (Δa)

The magnitude of difference between **true value** and **measured value**.

$$\boxed{\Delta a = |a_{\text{measured}} - a_{\text{true}}|}$$

If true value is unknown, use **mean** of measurements:

For n measurements a₁, a₂, &mldr;, aₙ:

**Mean value:**

$$\boxed{\bar{a} = \frac{a_1 + a_2 + ... + a_n}{n}}$$

**Absolute errors:**

$$\Delta a_1 = |a_1 - \bar{a}|, \quad \Delta a_2 = |a_2 - \bar{a}|, \quad ...$$

**Mean absolute error:**

$$\boxed{\Delta a_{mean} = \frac{\Delta a_1 + \Delta a_2 + ... + \Delta a_n}{n}}$$

**Final result:**

$$\boxed{a = \bar{a} \pm \Delta a_{mean}}$$

### Relative Error (δa)

The ratio of **absolute error** to the **true value** (or mean value).

$$\boxed{\delta a = \frac{\Delta a}{a}}$$

**Dimensionless** quantity.

### Percentage Error

Relative error expressed as percentage.

$$\boxed{\text{Percentage error} = \frac{\Delta a}{a} \times 100\%}$$

> **↗ Connection · Example: Complete Error Analysis**
>
> **Problem:** Five measurements of length: 5.2 cm, 5.4 cm, 5.1 cm, 5.3 cm, 5.5 cm
>
> **Step 1: Mean value**
>
> $$\bar{l} = \frac{5.2 + 5.4 + 5.1 + 5.3 + 5.5}{5} = \frac{26.5}{5} = 5.3 \text{ cm}$$
>
> **Step 2: Absolute errors**
>
> - Δl₁ = |5.2 - 5.3| = 0.1 cm

> - Δl₂ = |5.4 - 5.3| = 0.1 cm

> - Δl₃ = |5.1 - 5.3| = 0.2 cm

> - Δl₄ = |5.3 - 5.3| = 0.0 cm

> - Δl₅ = |5.5 - 5.3| = 0.2 cm
>
> **Step 3: Mean absolute error**
>
> $$\Delta l_{mean} = \frac{0.1 + 0.1 + 0.2 + 0.0 + 0.2}{5} = \frac{0.6}{5} = 0.12 \text{ cm}$$
>
> **Step 4: Relative error**
>
> $$\delta l = \frac{0.12}{5.3} = 0.0226$$
>
> **Step 5: Percentage error**
>
> $$\text{Percentage error} = 0.0226 \times 100\% = 2.26\%$$
>
> **Final Result:**
>
> $$\boxed{l = (5.3 \pm 0.12) \text{ cm} \text{ or } 5.3 \text{ cm} \pm 2.26\%}$$

## Error Propagation (Combination of Errors)

When we calculate a quantity using measured values, errors propagate through the calculation.

### Rule 1: Addition and Subtraction

$$\boxed{\text{If } Z = A + B \text{ or } Z = A - B}$$

$$\boxed{\text{then } \Delta Z = \Delta A + \Delta B}$$

**Maximum absolute error = Sum of absolute errors**

> **↗ Connection · Example: Addition**
>
> - A = 50 ± 2 cm

> - B = 30 ± 1 cm

> - Z = A + B = ?
>
> **Answer:**
>
> - Z = 50 + 30 = 80 cm

> - ΔZ = 2 + 1 = 3 cm

> - **Z = 80 ± 3 cm**

### Rule 2: Multiplication and Division

$$\boxed{\text{If } Z = A \times B \text{ or } Z = \frac{A}{B}}$$

$$\boxed{\text{then } \frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}}$$

**Maximum relative error = Sum of relative errors**

> **↗ Connection · Example: Multiplication**
>
> - A = 10 ± 0.2 cm

> - B = 5 ± 0.1 cm

> - Z = A × B = ?
>
> **Step 1:** Z = 10 × 5 = 50 cm²
>
> **Step 2:** Relative errors
>
> - δA = 0.2/10 = 0.02

> - δB = 0.1/5 = 0.02
>
> **Step 3:** δZ = 0.02 + 0.02 = 0.04
>
> **Step 4:** ΔZ = 0.04 × 50 = 2 cm²
>
> **Answer: Z = 50 ± 2 cm²**

### Rule 3: Power (Most Important for JEE)

$$\boxed{\text{If } Z = A^n}$$

$$\boxed{\text{then } \frac{\Delta Z}{Z} = n \cdot \frac{\Delta A}{A}}$$

**Relative error gets multiplied by the power!**

> **↗ Connection · Example: Volume of Sphere**
>
> Volume $V = \frac{4}{3}\pi r^3$
>
> If radius measured: r = 5 ± 0.1 cm, find error in volume.
>
> **Solution:**
>
> Since V ∝ r³:
>
> $$\frac{\Delta V}{V} = 3 \cdot \frac{\Delta r}{r} = 3 \times \frac{0.1}{5} = 3 \times 0.02 = 0.06$$
>
> V = (4/3)π(5)³ = 523.6 cm³
>
> ΔV = 0.06 × 523.6 = 31.4 cm³
>
> **Answer: V = 524 ± 31 cm³** (or 6% error)

### Rule 4: General Function

For $Z = \frac{A^a B^b}{C^c D^d}$:

$$\boxed{\frac{\Delta Z}{Z} = a\frac{\Delta A}{A} + b\frac{\Delta B}{B} + c\frac{\Delta C}{C} + d\frac{\Delta D}{D}}$$

> **↗ Connection · Example: Density**
>
> Density $\rho = \frac{m}{V}$ where V = l³
>
> If m = 100 ± 1 g and l = 10 ± 0.1 cm:
>
> **Solution:**
>
> $$\rho = \frac{m}{l^3}$$

$$\frac{\Delta\rho}{\rho} = \frac{\Delta m}{m} + 3\frac{\Delta l}{l}$$

$$= \frac{1}{100} + 3 \times \frac{0.1}{10} = 0.01 + 0.03 = 0.04$$
>
> ρ = 100/1000 = 0.1 g/cm³
>
> Δρ = 0.04 × 0.1 = 0.004 g/cm³
>
> **Answer: ρ = (0.100 ± 0.004) g/cm³** (or 4% error)

## Summary of Error Propagation Rules

| Operation | Formula | Error Rule |
| --- | --- | --- |
| **Sum** | Z = A + B | ΔZ = ΔA + ΔB |
| **Difference** | Z = A - B | ΔZ = ΔA + ΔB |
| **Product** | Z = A × B | ΔZ/Z = ΔA/A + ΔB/B |
| **Quotient** | Z = A / B | ΔZ/Z = ΔA/A + ΔB/B |
| **Power** | Z = Aⁿ | ΔZ/Z = n(ΔA/A) |
| **General** | Z = AᵃBᵇ/CᶜDᵈ | ΔZ/Z = a(ΔA/A) + b(ΔB/B) + c(ΔC/C) + d(ΔD/D) |

> **◐ In simple terms · Memory Trick**
>
> **Addition/Subtraction:** Add ABSOLUTE errors
>
> **Multiplication/Division:** Add RELATIVE errors
>
> **Powers:** MULTIPLY relative error by power

## Least Count and Instrumental Error

**Least Count (LC)** = Smallest measurement possible with an instrument

| Instrument | Least Count |
| --- | --- |
| Meter scale | 1 mm = 0.1 cm |
| [Vernier calipers](../../experimental-skills/vernier-caliper/index.md) | 0.01 cm = 0.1 mm |
| Screw gauge | 0.001 cm = 0.01 mm |
| Stopwatch (analog) | 0.1 s |
| Stopwatch (digital) | 0.01 s |

**Instrumental error = ± (Least Count)**

**How least count is calculated:**

- [Vernier calipers](../../experimental-skills/vernier-caliper/index.md): LC = 1 MSD − 1 VSD = Main Scale Division ÷ Number of Vernier divisions (typically 1 mm ÷ 10 = 0.1 mm = 0.01 cm)
- Screw gauge: LC = Pitch ÷ Number of divisions on circular scale (typically 1 mm ÷ 100 = 0.01 mm)

> **★ Important for JEE**
>
> If least count is not given, **take half the smallest division** as the error.
>
> Example: If ruler has mm markings, error = ± 0.5 mm

## Common Mistakes to Avoid

> **⚠ Trap · Mistake 1: Adding Percentage Errors in Multiplication**
>
> **Wrong:** If A = 10 ± 2% and B = 5 ± 3%, then A×B has error 2% + 3% = 5%
>
> **Correct:** Convert to relative errors (0.02 + 0.03 = 0.05), so 5% is correct!
>
> **Note:** This “mistake” actually gives right answer for percentages, but conceptually we add *relative* errors, not percentage errors (they just happen to add the same way).

> **⚠ Trap · Mistake 2: Wrong Power Rule**
>
> **Wrong:** If V = πr²h and r has 2% error, h has 3% error, then V has (2×2 + 3) = 7% error
>
> **Correct:** V = πr²h → ΔV/V = 2(Δr/r) + (Δh/h) = 2(2%) + 3% = **7%** ✓
>
> (This happens to be correct!)

> **⚠ Trap · Mistake 3: Subtracting Errors in Subtraction**
>
> **Wrong:** If Z = A - B, then ΔZ = ΔA - ΔB
>
> **Correct:** ΔZ = ΔA + ΔB (always ADD absolute errors!)
>
> Errors always **add**, never subtract.

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> If L = 10.0 ± 0.1 cm and B = 5.0 ± 0.1 cm, find area A = L × B with error.
>
> **Solution:**
>
> A = 10.0 × 5.0 = 50.0 cm²
>
> $$\frac{\Delta A}{A} = \frac{\Delta L}{L} + \frac{\Delta B}{B} = \frac{0.1}{10.0} + \frac{0.1}{5.0}$$

$$= 0.01 + 0.02 = 0.03$$
>
> ΔA = 0.03 × 50 = 1.5 cm²
>
> **Answer: A = 50.0 ± 1.5 cm²** (or 50 ± 2 cm² with proper sig figs)

> **↗ Connection · Problem 2**
>
> Resistance R = V/I. If V = 100 ± 5 V and I = 10 ± 0.2 A, find R with error.
>
> **Solution:**
>
> R = 100/10 = 10 Ω
>
> $$\frac{\Delta R}{R} = \frac{\Delta V}{V} + \frac{\Delta I}{I} = \frac{5}{100} + \frac{0.2}{10}$$

$$= 0.05 + 0.02 = 0.07$$
>
> ΔR = 0.07 × 10 = 0.7 Ω
>
> **Answer: R = 10.0 ± 0.7 Ω** (or 7% error)

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> The period T of a simple pendulum is given by $T = 2\pi\sqrt{l/g}$. If error in measuring l is 2%, what is the error in T?
>
> **Solution:**
>
> $$T = 2\pi l^{1/2} g^{-1/2}$$

$$\frac{\Delta T}{T} = \frac{1}{2} \cdot \frac{\Delta l}{l} + \frac{1}{2} \cdot \frac{\Delta g}{g}$$
>
> If only l has error (g is constant):
>
> $$\frac{\Delta T}{T} = \frac{1}{2} \times 2\% = \boxed{1\%}$$

> **↗ Connection · Problem 4**
>
> In an experiment, refractive index μ is calculated using μ = sin i / sin r. If maximum error in measuring angles is 1°, and i = 60°, r = 30°, find percentage error in μ.
>
> **Solution:**
>
> For small errors in angles (in radians):
>
> $$\frac{\Delta(\sin\theta)}{\sin\theta} = \frac{\cos\theta \cdot \Delta\theta}{\sin\theta} = \cot\theta \cdot \Delta\theta$$
>
> Convert 1° to radians: Δi = Δr = 1° × π/180 = 0.0175 rad
>
> $$\frac{\Delta\mu}{\mu} = \cot(60°) \times 0.0175 + \cot(30°) \times 0.0175$$

$$= \frac{1}{\sqrt{3}} \times 0.0175 + \sqrt{3} \times 0.0175$$

$$= 0.0101 + 0.0303 = 0.0404$$
>
> **Percentage error = 4.04% ≈ 4%**

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> The density of a sphere is calculated using $\rho = \frac{6m}{\pi d^3}$ where m is mass and d is diameter. If errors in m and d are 3% and 1% respectively, find percentage error in ρ.
>
> **Solution:**
>
> $$\rho = 6\pi^{-1} m^1 d^{-3}$$

$$\frac{\Delta\rho}{\rho} = 1 \cdot \frac{\Delta m}{m} + 3 \cdot \frac{\Delta d}{d}$$

$$= 1 \times 3\% + 3 \times 1\% = 3\% + 3\% = \boxed{6\%}$$

> **↗ Connection · Problem 6**
>
> In a resonance tube experiment, two resonance lengths are l₁ = 25.0 ± 0.5 cm and l₂ = 75.0 ± 0.8 cm. Calculate wavelength λ = 2(l₂ - l₁) with absolute error.
>
> **Solution:**
>
> λ = 2(75.0 - 25.0) = 2 × 50.0 = 100.0 cm
>
> For difference: Δ(l₂ - l₁) = Δl₂ + Δl₁ = 0.8 + 0.5 = 1.3 cm
>
> For multiplication by constant: Δλ = 2 × Δ(l₂ - l₁) = 2 × 1.3 = 2.6 cm
>
> **Answer: λ = 100.0 ± 2.6 cm** (or about 3% error)

> **↗ Connection · Problem 7**
>
> A physical quantity $P$ is related to four quantities $a$, $b$, $c$, and $d$ as $P = \frac{a^3b^2}{\sqrt{cd}}$. The percentage errors in $a$, $b$, $c$, and $d$ are 1%, 2%, 3%, and 4% respectively. Find the percentage error in $P$.
>
> **Solution:**
>
> $$\frac{\Delta P}{P} = 3\frac{\Delta a}{a} + 2\frac{\Delta b}{b} + \frac{1}{2}\frac{\Delta c}{c} + \frac{1}{2}\frac{\Delta d}{d}$$

$$= 3(1\%) + 2(2\%) + \frac{1}{2}(3\%) + \frac{1}{2}(4\%) = 3\% + 4\% + 1.5\% + 2\% = \boxed{10.5\%}$$

## Quick Reference Chart

> **◐ In simple terms · Error Propagation Quick Reference**
>
> | Operation | Formula | Error Rule |

> | --- | --- | --- |

> | **Sum** | Z = A + B | $\Delta Z = \Delta A + \Delta B$ |

> | **Difference** | Z = A - B | $\Delta Z = \Delta A + \Delta B$ |

> | **Product** | Z = A × B | $\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}$ |

> | **Quotient** | Z = A / B | $\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}$ |

> | **Power** | Z = Aⁿ | $\frac{\Delta Z}{Z} = n \cdot \frac{\Delta A}{A}$ |

> | **Constant multiple** | Z = kA | $\Delta Z = k \cdot \Delta A$ |

---

## Related Topics

### Within Units and Measurements

- [SI Units](../si-units/index.md) — Standard measurement systems
- [Dimensions](../dimensions/index.md) — Dimensional correctness relates to errors
- [Dimensional Analysis](../dimensional-analysis/index.md) — Verifying formulas
- [Significant Figures](../significant-figures/index.md) — Expressing precision

### Connected Chapters

- [Experimental Skills](../../experimental-skills/index.md) — Practical error reduction
- [Kinematics](../../kinematics/index.md) — Measurement errors in motion
- [Gravitation](../../gravitation/index.md) — Error in g calculation

### Math Connections

- [Statistics](../../../mathematics/index.md) — Mean, standard deviation
- [Calculus](../../../mathematics/limits-continuity-differentiability/index.md) — Error in derivatives

---

From TestGuru · our mock-test platform

## You've read Errors in Measurement.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=units-measurements&tg_exam=jee-main&tg_page=%2Fphysics%2Funits-measurements%2Ferrors%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/units-measurements/errors/",this.page.identifier="/physics/units-measurements/errors/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="dimensionalAnalysis" id="anim-dimensionalAnalysis-1795396424463758955"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-dimensionalAnalysis-1795396424463758955")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/units-measurements/errors/](https://jeenotes.in/physics/units-measurements/errors/) · raw HTML: `offline/physics/units-measurements/errors/index.html`_
