---
title: "Integrated Rate Equations: Zero, First, and Second Order"
source: "https://jeenotes.in/chemistry/chemical-kinetics/integrated-rate-equations/"
description: "Complete derivation and application of integrated rate equations for zero, first, and second order reactions with JEE problem-solving strategies"
updated: "2025-12-26"
reading_time: "10 min read"
breadcrumb: "Chemistry"
position: "/ Topic 5 of 10"
html: "../../../../offline/chemistry/chemical-kinetics/integrated-rate-equations/index.html"
extracted: "2026-11-23"
---

> Complete derivation and application of integrated rate equations for zero, first, and second order reactions with JEE problem-solving strategies

# Integrated Rate Equations

## Real-Life Connection: Carbon Dating and Archaeological Discoveries

How do scientists determine that a fossil is 50,000 years old? Or that a mummy is 3,000 years old? The answer lies in **integrated rate equations**!

Carbon-14 dating uses the **first-order integrated rate equation**:

$$\ln\frac{N_0}{N_t} = kt$$

By measuring the ratio of C-14 to C-12 in ancient samples:

- Scientists calculate time elapsed since death
- Archaeologists date historical artifacts
- Geologists determine rock ages
- Forensic experts establish time of death

From Shroud of Turin to Egyptian pyramids, integrated rate equations help us peek into the past!

## From Differential to Integrated Form

### Why Integration?

**Differential rate law:** Tells us rate at any instant

$$-\frac{d[A]}{dt} = k[A]^n$$

**Integrated rate law:** Tells us concentration at any time

$$[A]_t = f(t, k, [A]_0)$$

**Integration** converts rate (derivative) into concentration (function of time).

## Zero Order Reactions

### Differential Form

$$\boxed{-\frac{d[A]}{dt} = k}$$

Rate is **independent** of concentration.

### Derivation of Integrated Form

$$-\frac{d[A]}{dt} = k$$

Separating variables:

$$-d[A] = k \cdot dt$$

Integrating both sides:

$$-\int_{[A]_0}^{[A]_t} d[A] = k\int_0^t dt$$

$$-([A]_t - [A]_0) = kt$$

$$\boxed{[A]_t = [A]_0 - kt}$$

**This is equation of a straight line:** y = mx + c

- y = [A]ₜ
- x = t
- m = -k (slope)
- c = [A]₀ (intercept)

### Graphical Representation

**Plot [A] vs t:**

- Straight line with negative slope
- Slope = -k
- y-intercept = [A]₀

```fallback
[A]
 |
[A]₀|___
 |    \
 |     \___
 |         \___
 |_____________\___
 0              t
```

### Key Characteristics

1. **Linear decrease** in concentration with time
2. **Constant rate** throughout reaction
3. **Half-life depends on [A]₀**:
   $$t_{1/2} = \frac{[A]_0}{2k}$$
4. **Units of k**: mol L⁻¹ s⁻¹ or M s⁻¹

### Examples

1. **Photochemical reactions:**

   $$H_2 + Cl_2 \xrightarrow{hv} 2HCl$$

   Rate limited by light intensity, not concentration.
2. **Enzyme-catalyzed at saturation:**
   All enzyme active sites occupied; adding more substrate doesn’t increase rate.
3. **Surface catalysis:**

   $$2NH_3 \xrightarrow{Pt} N_2 + 3H_2$$

   When catalyst surface fully covered.

## First Order Reactions

### Differential Form

$$\boxed{-\frac{d[A]}{dt} = k[A]}$$

Rate **directly proportional** to concentration.

### Derivation of Integrated Form

$$-\frac{d[A]}{dt} = k[A]$$

Separating variables:

$$-\frac{d[A]}{[A]} = k \cdot dt$$

Integrating both sides:

$$-\int_{[A]_0}^{[A]_t} \frac{d[A]}{[A]} = k\int_0^t dt$$

$$-[\ln[A]]_{[A]_0}^{[A]_t} = kt$$

$$-(\ln[A]_t - \ln[A]_0) = kt$$

$$\ln[A]_0 - \ln[A]_t = kt$$

$$\boxed{\ln\frac{[A]_0}{[A]_t} = kt}$$

**Alternative forms:**

$$\boxed{\ln[A]_t = \ln[A]_0 - kt}$$

(straight line form)

$$\boxed{[A]_t = [A]_0 e^{-kt}}$$

(exponential form)

$$\boxed{\log\frac{[A]_0}{[A]_t} = \frac{kt}{2.303}}$$

(common log form)

### Graphical Representation

**Plot ln[A] vs t:**

- Straight line with negative slope
- Slope = -k
- y-intercept = ln[A]₀

### Interactive Demo: Watch Concentration Change Over Time

Visualize how reactant concentration decreases over time for different reaction orders. Compare zero, first, and second order kinetics.

```fallback
ln[A]
  |
ln[A]₀|___
  |      \___
  |          \___
  |              \___
  |__________________\___
  0                   t
```

**Plot [A] vs t:**

- Exponential decay curve
- Never reaches zero (asymptotic to time axis)

### Key Characteristics

1. **Exponential decay** of concentration
2. **Half-life independent of [A]₀**:
   $$t_{1/2} = \frac{0.693}{k} = \frac{\ln 2}{k}$$
3. **Units of k**: s⁻¹ (time⁻¹)
4. **Most common order** in nature

### Examples

1. **Radioactive decay:**

   $$^{14}C \rightarrow ^{14}N + \beta^-$$

$$^{238}U \rightarrow ^{234}Th + ^4He$$
2. **N₂O₅ decomposition:**

   $$2N_2O_5 \rightarrow 4NO_2 + O_2$$

$$\text{Rate} = k[N_2O_5]$$
3. **Drug elimination:**
   Most pharmaceuticals follow first-order kinetics in the body.
4. **Acid-catalyzed ester hydrolysis** (water in excess):

   $$RCOOR' + H_2O \xrightarrow{H^+} RCOOH + R'OH$$

## Second Order Reactions

### Type I: Rate = k[A]²

#### Differential Form

$$\boxed{-\frac{d[A]}{dt} = k[A]^2}$$

#### Derivation of Integrated Form

$$-\frac{d[A]}{dt} = k[A]^2$$

Separating variables:

$$-\frac{d[A]}{[A]^2} = k \cdot dt$$

Integrating:

$$-\int_{[A]_0}^{[A]_t} [A]^{-2} d[A] = k\int_0^t dt$$

$$-\left[\frac{[A]^{-1}}{-1}\right]_{[A]_0}^{[A]_t} = kt$$

$$\left[\frac{1}{[A]}\right]_{[A]_0}^{[A]_t} = kt$$

$$\frac{1}{[A]_t} - \frac{1}{[A]_0} = kt$$

$$\boxed{\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt}$$

#### Graphical Representation

**Plot 1/[A] vs t:**

- Straight line with positive slope
- Slope = +k
- y-intercept = 1/[A]₀

```fallback
1/[A]
  |              ___/
  |          ___/
  |      ___/
1/[A]₀|___/
  |
  |________________
  0              t
```

#### Key Characteristics

1. **Hyperbolic decrease** in concentration
2. **Half-life depends on [A]₀**:
   $$t_{1/2} = \frac{1}{k[A]_0}$$
3. **Units of k**: L mol⁻¹ s⁻¹ or M⁻¹ s⁻¹
4. Each successive half-life is **twice** the previous one

#### Examples

1. **NO₂ decomposition:**

   $$2NO_2 \rightarrow 2NO + O_2$$

$$\text{Rate} = k[NO_2]^2$$
2. **Gaseous dimerization:**

   $$2C_4H_6 \rightarrow C_8H_{12}$$

### Type II: Rate = k[A][B]

For

$$A + B \rightarrow \text{Products}$$

#### Case 1: Equal Initial Concentrations [A]₀ = [B]₀

Reduces to Type I:

$$\boxed{\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt}$$

#### Case 2: Different Initial Concentrations [A]₀ ≠ [B]₀

$$\boxed{\frac{1}{[A]_0 - [B]_0} \ln\frac{[B]_0[A]_t}{[A]_0[B]_t} = kt}$$

**More complex** - rarely asked in JEE, but important for research.

#### Example

**Alkaline hydrolysis of ethyl acetate:**

$$CH_3COOC_2H_5 + NaOH \rightarrow CH_3COONa + C_2H_5OH$$

$$\text{Rate} = k[CH_3COOC_2H_5][NaOH]$$

## Summary Table: Integrated Rate Equations

| Order | Differential | Integrated | Linear Plot | Slope | Half-life | k Units |
| --- | --- | --- | --- | --- | --- | --- |
| **0** | -d[A]/dt = k | [A]ₜ = [A]₀ - kt | [A] vs t | -k | [A]₀/2k | M s⁻¹ |
| **1** | -d[A]/dt = k[A] | ln[A]ₜ = ln[A]₀ - kt | ln[A] vs t | -k | 0.693/k | s⁻¹ |
| **2** | -d[A]/dt = k[A]² | 1/[A]ₜ = 1/[A]₀ + kt | 1/[A] vs t | +k | 1/(k[A]₀) | M⁻¹ s⁻¹ |

## Determining Order from Concentration-Time Data

### Method 1: Graphical Method

**Plot all three graphs:**

1. [A] vs t
2. ln[A] vs t
3. 1/[A] vs t

**Whichever is linear** indicates the order!

### Method 2: Half-Life Method

Measure multiple half-lives:

- **Constant t₁/₂** → First order
- **t₁/₂ increases linearly** → Zero order
- **t₁/₂ doubles each time** → Second order

### Method 3: Substitution Method

**Try each integrated equation:**

- Calculate k at different times
- If k is constant → correct order
- If k varies → wrong order

## Memory Tricks

### “LIS” for Linear Plots

**L**og plot for first order (ln[A] vs t)
**I**nverse plot for second order (1/[A] vs t)
**S**traight plot for zero order ([A] vs t)

### “0-1-2 Pattern”

- **0** order: [A] to **power 0** in plot = [A]¹
- **1** order: [A] to **power 1** in log = ln[A]
- **2** order: [A] to **power -1** (inverse) = 1/[A]

### “HIL” for Half-life

**H**alf of initial (zero order): t₁/₂ ∝ [A]₀
**I**ndependent (first order): t₁/₂ constant
**L**ess when more (second order): t₁/₂ ∝ 1/[A]₀

## Common JEE Mistakes

### Mistake 1: Wrong Plot for Order Determination

**Wrong:** Plotting only [A] vs t and concluding it’s not zero order because curve isn’t perfectly linear

**Correct:** Plot **all three** graphs ([A] vs t, ln[A] vs t, 1/[A] vs t) and identify which is most linear

### Mistake 2: Sign of Slope

**Wrong:** “First order has positive slope in ln[A] vs t plot”

**Correct:** Slope is **-k** (negative) in ln[A] vs t plot for first order

### Mistake 3: Half-Life Formulas

**Wrong:** Using t₁/₂ = 0.693/k for all reactions

**Correct:** This formula is **only for first order**!

- Zero order: t₁/₂ = [A]₀/(2k)
- Second order: t₁/₂ = 1/(k[A]₀)

### Mistake 4: Units

**Wrong:** Treating k from different orders as comparable

**Correct:** k has different units for different orders - cannot compare directly!

## Practice Problems

### Level 1: JEE Main Foundation

**Problem 1:** For a first order reaction, initial concentration is 0.1 M. After 10 minutes, it becomes 0.05 M. Calculate the rate constant.

**Solution:**

First order:

$$\ln\frac{[A]_0}{[A]_t} = kt$$

$$\ln\frac{0.1}{0.05} = k \times 10$$

$$\ln 2 = 10k$$

$$k = \frac{0.693}{10} = 0.0693 \text{ min}^{-1}$$

**Alternative:**
Since concentration halved, t = t₁/₂ = 10 min

$$t_{1/2} = \frac{0.693}{k}$$

$$k = \frac{0.693}{10} = 0.0693 \text{ min}^{-1}$$

### Level 2: JEE Main/Advanced

**Problem 2:** A reaction A → Products follows second order kinetics. Initial concentration is 0.2 M and after 50 minutes it reduces to 0.05 M. Calculate:
(a) Rate constant
(b) Half-life at start
(c) Time for 90% completion

**Solution:**

(a) Second order:

$$\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$$

$$\frac{1}{0.05} = \frac{1}{0.2} + k \times 50$$

$$20 = 5 + 50k$$

$$k = \frac{15}{50} = 0.3 \text{ M}^{-1}\text{min}^{-1}$$

(b) Half-life at start:

$$t_{1/2} = \frac{1}{k[A]_0} = \frac{1}{0.3 \times 0.2} = \frac{1}{0.06} = 16.67 \text{ min}$$

(c) For 90% completion: [A]ₜ = 0.1[A]₀ = 0.02 M

$$\frac{1}{0.02} = \frac{1}{0.2} + 0.3 \times t$$

$$50 = 5 + 0.3t$$

$$t = \frac{45}{0.3} = 150 \text{ min}$$

### Level 3: JEE Advanced

**Problem 3:** The following data is obtained for decomposition of A:

| Time (s) | [A] (M) | ln[A] | 1/[A] (M⁻¹) |
| --- | --- | --- | --- |
| 0 | 0.100 | -2.303 | 10.0 |
| 100 | 0.067 | -2.708 | 14.9 |
| 200 | 0.050 | -2.996 | 20.0 |
| 300 | 0.040 | -3.219 | 25.0 |

Determine:
(a) Order of reaction
(b) Rate constant
(c) Half-life

**Solution:**

(a) **Check for linear relationship:**

For zero order ([A] vs t):

- Slope between 0-100s: (0.067-0.100)/100 = -0.00033
- Slope between 200-300s: (0.040-0.050)/100 = -0.0001
  **Not constant** → Not zero order

For first order (ln[A] vs t):

- Slope between 0-100s: (-2.708-(-2.303))/100 = -0.00405
- Slope between 200-300s: (-3.219-(-2.996))/100 = -0.00223
  **Not constant** → Not first order

For second order (1/[A] vs t):

- Slope between 0-100s: (14.9-10.0)/100 = 0.049
- Slope between 200-300s: (25.0-20.0)/100 = 0.050
  **Nearly constant** → **Second order!**

(b) From graph, average slope ≈ 0.05 M⁻¹s⁻¹

$$k = 0.05 \text{ M}^{-1}\text{s}^{-1}$$

**Verification:**

$$\frac{1}{0.050} - \frac{1}{0.100} = k \times 200$$

$$20 - 10 = 200k$$

$$k = 0.05 \text{ M}^{-1}\text{s}^{-1}$$

✓

(c) Half-life at [A]₀ = 0.100 M:

$$t_{1/2} = \frac{1}{k[A]_0} = \frac{1}{0.05 \times 0.100} = 200 \text{ s}$$

**Problem 4:** ¹⁴C has half-life of 5730 years. A wooden artifact has 62.5% of original ¹⁴C. How old is it?

**Solution:**

First order radioactive decay:

$$\ln\frac{N_0}{N_t} = kt$$

First, find k from half-life:

$$k = \frac{0.693}{t_{1/2}} = \frac{0.693}{5730} = 1.21 \times 10^{-4} \text{ year}^{-1}$$

Given: Nₜ = 0.625N₀

$$\ln\frac{N_0}{0.625N_0} = kt$$

$$\ln\frac{1}{0.625} = 1.21 \times 10^{-4} \times t$$

$$\ln 1.6 = 1.21 \times 10^{-4} \times t$$

$$0.470 = 1.21 \times 10^{-4} \times t$$

$$t = \frac{0.470}{1.21 \times 10^{-4}} = 3884 \text{ years}$$

**Alternative approach using half-lives:**

- 100% → 50% (1 half-life)
- 50% → 25% (2 half-lives)
- But we have 62.5% (between 100% and 50%)

$$\frac{N_t}{N_0} = \left(\frac{1}{2}\right)^n$$

$$0.625 = 0.5^n$$

$$\ln 0.625 = n \ln 0.5$$

$$n = \frac{\ln 0.625}{\ln 0.5} = 0.678 \text{ half-lives}$$

$$t = 0.678 \times 5730 = 3885 \text{ years}$$

**Age ≈ 3885 years**

## Special Cases and Applications

### Pseudo First Order Reactions

When one reactant is in large excess:

$$A + B \rightarrow \text{Products}$$

True rate law:

$$\text{Rate} = k[A][B]$$

If [B] » [A], then [B] ≈ constant

$$\text{Rate} = k[A][B] = k'[A]$$

where k’ = k[B] = pseudo first order rate constant

**Integrated form:**

$$\ln[A]_t = \ln[A]_0 - k't$$

**Example:** Acid hydrolysis of ester (water in excess)

### Consecutive Reactions

$$A \xrightarrow{k_1} B \xrightarrow{k_2} C$$

- A decreases exponentially
- B first increases, then decreases
- C increases continuously

**Applications:** Multi-step drug metabolism, radioactive decay series

### Parallel Reactions

$$A \xrightarrow{k_1} B$$

$$A \xrightarrow{k_2} C$$

$$[A]_t = [A]_0 e^{-(k_1+k_2)t}$$

Effective rate constant = k₁ + k₂

## Experimental Determination

### For Gaseous Reactions

Use **partial pressure** instead of concentration:

$$P_A = [A]RT$$

For first order:

$$\ln P_t = \ln P_0 - kt$$

**Example:** Decomposition of N₂O₅

$$2N_2O_5(g) \rightarrow 4NO_2(g) + O_2(g)$$

Monitor total pressure change over time.

### For Reactions in Solution

**Methods:**

1. **Titration** - withdraw samples and titrate
2. **Spectroscopy** - measure absorbance (colored species)
3. **Conductivity** - for ionic reactions
4. **pH** - for acid/base reactions
5. **Gas evolution** - collect and measure gas volume

## Connection to Other Topics

### Link to Rate Law

- Integrated form derived from differential rate law
- Different orders → different integrated equations
- See: [Rate Law](../rate-law/index.md)

### Link to Half-Life

- Half-life formulas derived from integrated equations
- See: [Half-Life](../half-life/index.md)

### Link to Graphical Methods

- Linear plots identify reaction order
- Slope gives rate constant k
- See: [Order and Molecularity](../order-molecularity/index.md)

### Link to Arrhenius Equation

- Temperature dependence of k
- k values used in Arrhenius plots
- See: [Arrhenius Equation](../arrhenius-equation/index.md)

## JEE Previous Year Questions

**JEE Main 2021:** For a first order reaction, time required for 99% completion is ‘x’ times the time required for 90% completion. The value of ‘x’ is:

**Solution:**

For first order:

$$t = \frac{2.303}{k}\log\frac{[A]_0}{[A]_t}$$

For 90% completion: [A]ₜ = 0.1[A]₀

$$t_{90} = \frac{2.303}{k}\log\frac{[A]_0}{0.1[A]_0} = \frac{2.303}{k}\log 10 = \frac{2.303}{k}$$

For 99% completion: [A]ₜ = 0.01[A]₀

$$t_{99} = \frac{2.303}{k}\log\frac{[A]_0}{0.01[A]_0} = \frac{2.303}{k}\log 100 = \frac{2 \times 2.303}{k}$$

$$x = \frac{t_{99}}{t_{90}} = \frac{2 \times 2.303/k}{2.303/k} = 2$$

**Answer: x = 2**

**JEE Advanced 2020:** A substance decomposes following first order kinetics. If 50% is decomposed in 120 minutes, what % will decompose in 240 minutes?

**Solution:**

t₁/₂ = 120 min

After 240 min = 2 half-lives:

- After 1st half-life: 50% remains
- After 2nd half-life: 25% remains

**Decomposed = 100% - 25% = 75%**

## Quick Revision Points

1. **Zero order:** [A] = [A]₀ - kt (linear decrease)
2. **First order:** ln[A] = ln[A]₀ - kt (exponential decay)
3. **Second order:** 1/[A] = 1/[A]₀ + kt (hyperbolic decrease)
4. **Linear plots identify order** - whichever is linear
5. **Half-life formulas differ** for each order
6. **Units of k differ** based on order
7. **First order most common** in nature (radioactive decay, drug elimination)
8. **Graphical method** most reliable for determining order

## Summary

Integrated rate equations are essential tools in chemical kinetics that:

- Connect concentration to time
- Allow prediction of reaction progress
- Enable determination of reaction order
- Provide basis for half-life calculations
- Have widespread applications from archaeology to pharmacology

Mastering these equations and their graphical representations is crucial for JEE success and understanding real-world kinetic processes!

---

**Previous Topic:** [Rate Law](../rate-law/index.md)
**Next Topic:** [Half-Life](../half-life/index.md)

From TestGuru · our mock-test platform

## You've read Integrated Rate Equations: Zero, First, and Second Order.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=chemical-kinetics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fchemical-kinetics%2Fintegrated-rate-equations%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/chemical-kinetics/integrated-rate-equations/",this.page.identifier="/chemistry/chemical-kinetics/integrated-rate-equations/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionRate" id="anim-reactionRate-1795396419422320345"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionRate-1795396419422320345")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="reactionKinetics" id="anim-reactionKinetics-1795396419422347031"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionKinetics-1795396419422347031")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/chemical-kinetics/integrated-rate-equations/](https://jeenotes.in/chemistry/chemical-kinetics/integrated-rate-equations/) · raw HTML: `offline/chemistry/chemical-kinetics/integrated-rate-equations/index.html`_
