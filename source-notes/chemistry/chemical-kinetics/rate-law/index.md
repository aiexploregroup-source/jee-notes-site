---
title: "Rate Law and Rate Constant"
source: "https://jeenotes.in/chemistry/chemical-kinetics/rate-law/"
description: "Comprehensive guide to rate law expressions, rate constants, and their determination for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Chemistry"
position: "/ Topic 7 of 10"
html: "../../../../offline/chemistry/chemical-kinetics/rate-law/index.html"
extracted: "2026-11-23"
---

> Comprehensive guide to rate law expressions, rate constants, and their determination for JEE Main and Advanced

# Rate Law and Rate Constant

## Real-Life Connection: Antibiotic Dosage Timing

Why does your doctor prescribe antibiotics “every 6 hours” or “every 12 hours”? The answer lies in **rate laws** and **rate constants**!

When you take a pill:

- The drug enters your bloodstream at a certain rate
- Your body eliminates it at a specific rate (characterized by rate constant k)
- The **rate law** describes how elimination rate depends on drug concentration
- The **rate constant** determines how quickly the drug is cleared

A drug with:

- **Large k** (fast elimination) → needs frequent dosing (every 6 hrs)
- **Small k** (slow elimination) → longer intervals (every 24 hrs)

Understanding rate laws helps pharmaceutical scientists design optimal drug delivery systems!

## What is a Rate Law?

The **rate law** (or rate equation) expresses the relationship between reaction rate and concentrations of reactants.

For a general reaction:

$$aA + bB \rightarrow \text{Products}$$

$$\boxed{\text{Rate} = k[A]^m[B]^n}$$

where:

- **k** = rate constant
- **m** = order with respect to A
- **n** = order with respect to B
- **[A], [B]** = molar concentrations

### Critical Points

1. Rate law is **determined experimentally** (not from balanced equation!)
2. The exponents m and n are **not** necessarily the stoichiometric coefficients
3. k is **specific to a particular reaction** at a given temperature
4. Rate law reveals the **mechanism** of the reaction

## The Rate Constant (k)

### Definition

The **rate constant** (k) is the proportionality constant in the rate law that is characteristic of a particular reaction at a given temperature.

$$\boxed{k = \text{rate constant} = \text{specific rate constant}}$$

### Properties of k

1. **Temperature dependent** - increases exponentially with temperature (Arrhenius equation)
2. **Independent of concentration** - constant for a given reaction at fixed temperature
3. **Catalyst dependent** - changes if catalyst is added
4. **Unique for each reaction** - different reactions have different k values
5. **Has units** - units depend on overall order of reaction

### Physical Meaning of k

- **Large k** → Fast reaction (products form quickly)
- **Small k** → Slow reaction (products form slowly)

**Example:**

- Explosion: k ~ 10⁶ s⁻¹ (very large, very fast)
- Rusting of iron: k ~ 10⁻⁸ s⁻¹ (very small, very slow)
- Radioactive decay (¹⁴C): k ~ 10⁻¹² s⁻¹ (extremely slow)

## Units of Rate Constant

The units of k depend on **overall order** of the reaction.

### General Formula

$$\boxed{\text{Units of } k = (\text{concentration})^{1-n} \times (\text{time})^{-1}}$$

where n = overall order

### For Different Orders

| Order | Rate Law | Units of k | Common Form |
| --- | --- | --- | --- |
| 0 | Rate = k | mol L⁻¹ s⁻¹ | M s⁻¹ |
| 1 | Rate = k[A] | s⁻¹ | s⁻¹, min⁻¹, hr⁻¹ |
| 2 | Rate = k[A]² or k[A][B] | L mol⁻¹ s⁻¹ | M⁻¹ s⁻¹ |
| 3 | Rate = k[A]²[B] | L² mol⁻² s⁻¹ | M⁻² s⁻¹ |

### Derivation of Units

For second order:

$$\text{Rate} = k[A]^2$$

$$\text{M s}^{-1} = k \times \text{M}^2$$

$$k = \frac{\text{M s}^{-1}}{\text{M}^2} = \text{M}^{-1}\text{s}^{-1}$$

## Types of Rate Laws

### 1. Differential Rate Law

Expresses rate as a function of **concentration** at any instant:

$$\boxed{-\frac{d[A]}{dt} = k[A]^n}$$

**Uses:**

- Determining order of reaction
- Finding how rate varies with concentration
- Understanding instantaneous behavior

### 2. Integrated Rate Law

Expresses **concentration** as a function of **time**:

$$\boxed{[A]_t = f(t)}$$

**Uses:**

- Calculating concentration at any time
- Finding time for specific concentration change
- Determining half-life

See detailed discussion: [Integrated Rate Equations](../integrated-rate-equations/index.md)

## Rate Laws for Different Orders

### Zero Order Reaction

**Differential form:**

$$\boxed{\text{Rate} = k}$$

**Integrated form:**

$$\boxed{[A]_t = [A]_0 - kt}$$

**Characteristics:**

- Rate is **constant** (independent of concentration)
- Linear plot: [A] vs t (slope = -k)
- Half-life:
  $$t_{1/2} = \frac{[A]_0}{2k}$$(depends on [A]₀)

**Example:** Photochemical reactions, enzyme-saturated reactions

### First Order Reaction

**Differential form:**

$$\boxed{\text{Rate} = k[A]}$$

**Integrated form:**

$$\boxed{\ln[A]_t = \ln[A]_0 - kt}$$

or

$$\boxed{[A]_t = [A]_0 e^{-kt}}$$

**Characteristics:**

- Rate **directly proportional** to concentration
- Linear plot: ln[A] vs t (slope = -k)
- Half-life:
  $$t_{1/2} = \frac{0.693}{k}$$(independent of [A]₀)

**Example:** Radioactive decay, drug elimination, N₂O₅ decomposition

### Second Order Reaction

**Differential form:**

$$\boxed{\text{Rate} = k[A]^2}$$

(Type I)

or

$$\boxed{\text{Rate} = k[A][B]}$$

(Type II)

**Integrated form (Type I):**

$$\boxed{\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt}$$

**Characteristics:**

- Rate proportional to square of concentration
- Linear plot: 1/[A] vs t (slope = +k)
- Half-life:
  $$t_{1/2} = \frac{1}{k[A]_0}$$(inversely proportional to [A]₀)

**Example:** NO₂ decomposition, gaseous dimerization

## Determining Rate Law Experimentally

### Method 1: Initial Rate Method

**Procedure:**

1. Perform multiple experiments with different initial concentrations
2. Measure initial rate in each experiment
3. Compare how rate changes with concentration
4. Determine order and k

**Example:**

For

$$A + B \rightarrow \text{Products}$$

| Exp | [A]₀ (M) | [B]₀ (M) | Initial Rate (M/s) |
| --- | --- | --- | --- |
| 1 | 0.10 | 0.10 | 1.0 × 10⁻³ |
| 2 | 0.20 | 0.10 | 4.0 × 10⁻³ |
| 3 | 0.10 | 0.20 | 2.0 × 10⁻³ |

**Step 1:** Find order w.r.t. A (compare exp 1 & 2):

$$\frac{r_2}{r_1} = \frac{k(0.20)^m(0.10)^n}{k(0.10)^m(0.10)^n} = \frac{4.0 \times 10^{-3}}{1.0 \times 10^{-3}}$$

$$2^m = 4 \implies m = 2$$

**Step 2:** Find order w.r.t. B (compare exp 1 & 3):

$$\frac{r_3}{r_1} = \frac{k(0.10)^m(0.20)^n}{k(0.10)^m(0.10)^n} = \frac{2.0 \times 10^{-3}}{1.0 \times 10^{-3}}$$

$$2^n = 2 \implies n = 1$$

**Step 3:** Write rate law:

$$\boxed{\text{Rate} = k[A]^2[B]}$$

**Step 4:** Calculate k using any experiment:

$$1.0 \times 10^{-3} = k(0.10)^2(0.10)$$

$$k = \frac{1.0 \times 10^{-3}}{0.001} = 1.0 \text{ M}^{-2}\text{s}^{-1}$$

### Method 2: Graphical Method

Plot different graphs to identify linear relationship:

| Order | Linear Plot | Equation | Slope |
| --- | --- | --- | --- |
| 0 | [A] vs t | y = -kt + [A]₀ | -k |
| 1 | ln[A] vs t | y = -kt + ln[A]₀ | -k |
| 2 | 1/[A] vs t | y = kt + 1/[A]₀ | +k |

**Whichever plot is linear** indicates the order!

### Method 3: Half-Life Method

Measure half-lives at different initial concentrations:

- If t₁/₂ is **constant** → **First order**
- If t₁/₂ ∝ [A]₀ → **Zero order**
- If t₁/₂ ∝ 1/[A]₀ → **Second order**

## Memory Tricks

### “RUCK” for Rate Law Components

**R**ate equals
**U**nique constant k
**C**oncentrations raised to powers
**K**inetically determined (not from stoichiometry)

### “ZOT” for Zero Order

**Z**ero dependence on concentration
**O**bserved in saturated reactions
**T**ime gives linear [A] plot

### “FELINE” for First Order

**F**irst power of concentration
**E**xponential decay
**L**n[A] gives linear plot
**I**ndependent half-life (constant t₁/₂)
**N**uclear decay example
**E**limination follows this often

### Units Memory

**“Order increases, k units get messier”**

- 0 order: M/s (simple)
- 1st order: 1/s (simpler!)
- 2nd order: 1/(M·s) (complex)
- 3rd order: 1/(M²·s) (very complex)

## Common JEE Mistakes

### Mistake 1: Order from Stoichiometry

**Wrong:** For

$$2NO + O_2 \rightarrow 2NO_2$$

, assuming Rate = k[NO]²[O₂]

**Correct:** Must determine experimentally! Actual rate law is Rate = k[NO]²[O₂], but this is coincidental - not guaranteed from equation.

### Mistake 2: Units of k

**Wrong:** “k always has units of s⁻¹”

**Correct:** Units of k depend on overall order:

- Zero order: M s⁻¹
- First order: s⁻¹
- Second order: M⁻¹ s⁻¹

### Mistake 3: Temperature and k

**Wrong:** “k is constant for a reaction”

**Correct:** k is constant at **fixed temperature**. k changes significantly with temperature!

### Mistake 4: Confusing Differential and Integrated Forms

**Wrong:** Using [A] = [A]₀ - kt for first order reaction

**Correct:**

- Zero order: [A] = [A]₀ - kt
- First order: ln[A] = ln[A]₀ - kt

## Practice Problems

### Level 1: JEE Main Foundation

**Problem 1:** For a first order reaction, rate constant k = 0.693 hr⁻¹. Calculate the half-life.

**Solution:**

For first order:

$$t_{1/2} = \frac{0.693}{k} = \frac{0.693}{0.693} = 1 \text{ hour}$$

**Answer: 1 hour**

### Level 2: JEE Main/Advanced

**Problem 2:** For the reaction

$$2A + B \rightarrow C$$

, following data is obtained:

| [A] (M) | [B] (M) | Rate (M/min) |
| --- | --- | --- |
| 0.1 | 0.1 | 0.004 |
| 0.2 | 0.2 | 0.032 |
| 0.2 | 0.1 | 0.016 |

Determine:
(a) Rate law
(b) Order of reaction
(c) Rate constant with units

**Solution:**

Let Rate = k[A]^m[B]^n

**Finding m:**
Compare experiments where only [A] changes:

From exp 1 and 3:

$$\frac{0.016}{0.004} = \left(\frac{0.2}{0.1}\right)^m \times \left(\frac{0.1}{0.1}\right)^n$$

$$4 = 2^m \implies m = 2$$

**Finding n:**
From exp 3 and 2:

$$\frac{0.032}{0.016} = \left(\frac{0.2}{0.2}\right)^m \times \left(\frac{0.2}{0.1}\right)^n$$

$$2 = 2^n \implies n = 1$$

(a) **Rate law:**

$$\text{Rate} = k[A]^2[B]$$

(b) **Order** = 2 + 1 = **3** (third order)

(c) From experiment 1:

$$0.004 = k(0.1)^2(0.1)$$

$$k = \frac{0.004}{0.001} = 4 \text{ M}^{-2}\text{min}^{-1}$$

**Units:** L² mol⁻² min⁻¹

### Level 3: JEE Advanced

**Problem 3:** A reaction is second order in A. When [A]₀ = 0.10 M, the half-life is 100 seconds. Calculate:
(a) Rate constant
(b) Time for [A] to decrease to 0.025 M
(c) Half-life when [A]₀ = 0.20 M

**Solution:**

(a) For second order:

$$t_{1/2} = \frac{1}{k[A]_0}$$

$$100 = \frac{1}{k \times 0.10}$$

$$k = \frac{1}{100 \times 0.10} = 0.1 \text{ M}^{-1}\text{s}^{-1}$$

(b) Second order integrated equation:

$$\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$$

$$\frac{1}{0.025} = \frac{1}{0.10} + 0.1 \times t$$

$$40 = 10 + 0.1t$$

$$t = \frac{30}{0.1} = 300 \text{ s}$$

**Alternative approach:**
From 0.10 M → 0.05 M: 100 s (first half-life)
From 0.05 M → 0.025 M: Need to calculate new t₁/₂

$$t_{1/2,new} = \frac{1}{k \times 0.05} = \frac{1}{0.1 \times 0.05} = 200 \text{ s}$$

Total time = 100 + 200 = **300 s**

(c) For [A]₀ = 0.20 M:

$$t_{1/2} = \frac{1}{k[A]_0} = \frac{1}{0.1 \times 0.20} = 50 \text{ s}$$

**Key insight:** When [A]₀ doubles, t₁/₂ halves (for second order)!

**Problem 4:** The decomposition of N₂O₅ follows first order kinetics:

$$2N_2O_5 \rightarrow 4NO_2 + O_2$$

At 300 K, k = 2.5 × 10⁻⁴ s⁻¹

(a) What % of N₂O₅ decomposes in 1 hour?
(b) How long for 90% decomposition?

**Solution:**

(a) First order:

$$\ln\frac{[A]_0}{[A]_t} = kt$$

t = 1 hour = 3600 s

$$\ln\frac{[A]_0}{[A]_t} = 2.5 \times 10^{-4} \times 3600 = 0.90$$

$$\frac{[A]_0}{[A]_t} = e^{0.90} = 2.46$$

$$[A]_t = \frac{[A]_0}{2.46} = 0.407[A]_0$$

Decomposed = [A]₀ - [A]ₜ = [A]₀ - 0.407[A]₀ = 0.593[A]₀

**% decomposed = 59.3%**

(b) For 90% decomposition: [A]ₜ = 0.10[A]₀

$$\ln\frac{[A]_0}{0.10[A]_0} = kt$$

$$\ln(10) = 2.5 \times 10^{-4} \times t$$

$$t = \frac{2.303}{2.5 \times 10^{-4}} = 9212 \text{ s} = 153.5 \text{ min} \approx 2.56 \text{ hours}$$

**Shortcut:** For 90% completion (10% remaining):

$$t = \frac{2.303}{k} = \frac{2.303}{2.5 \times 10^{-4}} = 9212 \text{ s}$$

## Relationship: Rate Law and Mechanism

The rate law provides clues about reaction mechanism!

### Elementary Reactions

For elementary reactions, rate law can be written from stoichiometry:

$$A + B \rightarrow \text{Products}$$

(elementary)

$$\text{Rate} = k[A][B]$$

✓

### Complex Reactions

For complex reactions, rate law differs from stoichiometry:

$$2N_2O_5 \rightarrow 4NO_2 + O_2$$

(overall)

$$\text{Rate} = k[N_2O_5]$$

(NOT k[N₂O₅]²!)

**Why?** Multiple elementary steps involved.

### Rate-Determining Step (RDS)

The **slowest step** in a mechanism determines the overall rate.

**Example:**

$$NO_2 + CO \rightarrow NO + CO_2$$

**Mechanism:**

- Step 1:
  $$2NO_2 \xrightarrow{slow} NO_3 + NO$$(RDS)
- Step 2:
  $$NO_3 + CO \xrightarrow{fast} NO_2 + CO_2$$

**Rate** = rate of step 1 = k[NO₂]²

This explains why CO doesn’t appear in rate law!

## Temperature Dependence of k

### Arrhenius Equation

$$\boxed{k = Ae^{-E_a/RT}}$$

**Logarithmic form:**

$$\boxed{\ln k = \ln A - \frac{E_a}{RT}}$$

**Two-temperature form:**

$$\boxed{\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)}$$

See detailed discussion: [Arrhenius Equation](../arrhenius-equation/index.md)

### Effect of Temperature

- Increase in temperature → k increases exponentially
- Typical: k doubles for every 10°C rise (depends on Ea)
- Large Ea → strong temperature dependence
- Small Ea → weak temperature dependence

## Connection to Other Topics

### Link to Order and Molecularity

- Order appears as exponents in rate law
- For elementary reactions: order = molecularity
- See: [Order and Molecularity](../order-molecularity/index.md)

### Link to Integrated Rate Equations

- Integration of differential rate law gives integrated form
- Different orders → different integrated equations
- See: [Integrated Rate Equations](../integrated-rate-equations/index.md)

### Link to Half-Life

- Half-life derived from integrated rate equations
- Dependence on [A]₀ varies with order
- See: [Half-Life](../half-life/index.md)

### Link to Catalysis

- Catalyst increases k (by lowering Ea)
- Does not change order or form of rate law
- See: [Catalysis](../catalysis/index.md)

### Link to Equilibrium

- At equilibrium: k_forward[reactants] = k_backward[products]
- Equilibrium constant K = k_f/k_b
- See: [Chemical Equilibrium](../../equilibrium/index.md)

## JEE Previous Year Questions

**JEE Main 2020:** The rate constant of a reaction is 1.5 × 10⁻³ s⁻¹. What is the order of the reaction?

**Answer:** First order

**Explanation:** Units of k are s⁻¹, which is characteristic of first order reactions.

**JEE Advanced 2019:** For a reaction A → Products, the following data is obtained:

| Time (min) | [A] (M) |
| --- | --- |
| 0 | 0.10 |
| 10 | 0.05 |
| 20 | 0.025 |

What is the order?

**Solution:**

- At t = 10 min: [A] = 0.05 = 0.10/2 (half of initial)
- At t = 20 min: [A] = 0.025 = 0.05/2 (half of previous)

Half-life is constant (10 min) → **First order**

Alternatively:

$$t_{1/2} = \frac{0.693}{k} = 10 \text{ min}$$

$$k = 0.0693 \text{ min}^{-1}$$

## Comparison Table: Rate Laws

| Order | Differential Form | Integrated Form | Linear Plot | Slope | Half-life |
| --- | --- | --- | --- | --- | --- |
| 0 | Rate = k | [A] = [A]₀ - kt | [A] vs t | -k | [A]₀/2k |
| 1 | Rate = k[A] | ln[A] = ln[A]₀ - kt | ln[A] vs t | -k | 0.693/k |
| 2 | Rate = k[A]² | 1/[A] = 1/[A]₀ + kt | 1/[A] vs t | +k | 1/(k[A]₀) |

## Quick Revision Points

1. **Rate law determined experimentally**, not from balanced equation
2. **k is temperature dependent** (increases with T)
3. **Units of k depend on overall order**
4. **Order** = sum of exponents in rate law
5. **Different orders** → different integrated equations
6. **Half-life dependence on [A]₀** varies with order
7. **RDS** (rate-determining step) controls overall rate
8. For **elementary reactions**: rate law from stoichiometry
9. For **complex reactions**: rate law from RDS

## Summary

Rate laws are the mathematical expressions that connect reaction rates to reactant concentrations. The rate constant k is a fundamental parameter that:

- Characterizes reaction speed
- Depends on temperature (Arrhenius equation)
- Has units determined by reaction order
- Provides insights into reaction mechanisms

Mastering rate laws is essential for:

- Predicting reaction behavior
- Designing industrial processes
- Understanding drug kinetics
- Solving JEE problems effectively

---

**Previous Topic:** [Order and Molecularity](../order-molecularity/index.md)
**Next Topic:** [Integrated Rate Equations](../integrated-rate-equations/index.md)

From TestGuru · our mock-test platform

## You've read Rate Law and Rate Constant.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=chemical-kinetics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fchemical-kinetics%2Frate-law%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/chemical-kinetics/rate-law/",this.page.identifier="/chemistry/chemical-kinetics/rate-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionRate" id="anim-reactionRate-1795396419431917972"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionRate-1795396419431917972")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/chemical-kinetics/rate-law/](https://jeenotes.in/chemistry/chemical-kinetics/rate-law/) · raw HTML: `offline/chemistry/chemical-kinetics/rate-law/index.html`_
