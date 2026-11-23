---
title: "Rate of Reaction: Average and Instantaneous Rate"
source: "https://jeenotes.in/chemistry/chemical-kinetics/rate-of-reaction/"
description: "Master rate of reaction concepts including average rate, instantaneous rate, and rate measurement techniques for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "6 min read"
breadcrumb: "Chemistry"
position: "/ Topic 8 of 10"
html: "../../../../offline/chemistry/chemical-kinetics/rate-of-reaction/index.html"
extracted: "2026-11-23"
---

> Master rate of reaction concepts including average rate, instantaneous rate, and rate measurement techniques for JEE Main and Advanced

# Rate of Reaction: Average and Instantaneous Rate

## Real-Life Connection: Why Milk Spoils Faster in Summer

Ever wondered why milk left on the kitchen counter spoils within hours in summer but lasts much longer in winter? Or why medicine bottles have expiry dates that change with storage temperature? The answer lies in **reaction rates** - the speed at which chemical reactions occur.

When milk spoils, bacteria break down lactose and proteins at a certain rate. Higher temperatures increase this rate exponentially, making your milk sour faster. Understanding reaction rates helps pharmaceutical companies determine drug shelf life, food scientists develop preservation methods, and engineers design industrial reactors.

## Core Concept: What is Rate of Reaction?

The **rate of reaction** measures how fast reactants are consumed or products are formed in a chemical reaction.

For a general reaction:

$$aA + bB \rightarrow cC + dD$$

### Mathematical Definition

The rate can be expressed in terms of:

- **Decrease in concentration of reactants**
- **Increase in concentration of products**

$$\boxed{\text{Rate} = -\frac{1}{a}\frac{d[A]}{dt} = -\frac{1}{b}\frac{d[B]}{dt} = +\frac{1}{c}\frac{d[C]}{dt} = +\frac{1}{d}\frac{d[D]}{dt}}$$

**Key Points:**

- Negative sign for reactants (concentration decreases)
- Positive sign for products (concentration increases)
- Division by stoichiometric coefficients ensures **unique rate** for the reaction

### Units of Rate

$$\boxed{\text{Rate} = \text{mol L}^{-1}\text{s}^{-1} \text{ or M s}^{-1}}$$

## Average Rate vs Instantaneous Rate

### 1. Average Rate

The **average rate** is measured over a finite time interval.

$$\boxed{r_{avg} = -\frac{\Delta[A]}{\Delta t} = \frac{[A]_2 - [A]_1}{t_2 - t_1}}$$

**Example:** If concentration of A decreases from 0.8 M to 0.4 M in 20 seconds:

$$r_{avg} = -\frac{0.4 - 0.8}{20 - 0} = -\frac{-0.4}{20} = 0.02 \text{ M s}^{-1}$$

### 2. Instantaneous Rate

The **instantaneous rate** is the rate at a particular instant of time.

$$\boxed{r_{inst} = \lim_{\Delta t \to 0} \left(-\frac{\Delta[A]}{\Delta t}\right) = -\frac{d[A]}{dt}}$$

**Graphically:** It’s the slope of the tangent to the concentration-time curve at that point.

### Key Differences

| Aspect | Average Rate | Instantaneous Rate |
| --- | --- | --- |
| Time interval | Finite (Δt) | Infinitesimal (dt) |
| Graph representation | Slope of chord | Slope of tangent |
| Variation | Changes with time interval | Specific to one moment |
| Calculation | Simple arithmetic | Requires calculus |

## Memory Trick: “RAPID”

**R**eactants **A**lways have **P**ositive sign when **I**nverted (negative becomes positive in rate expression)
**D**ivide by stoichiometric coefficient for unique rate

Remember: **“Products Plus, Reactants Removed”** - Products get + sign, Reactants get - sign

## Common Mistakes in JEE

### Mistake 1: Forgetting Stoichiometric Coefficients

**Wrong:** For

$$2N_2O_5 \rightarrow 4NO_2 + O_2$$

, writing rate =

$$-\frac{d[N_2O_5]}{dt}$$

**Correct:**

$$\text{Rate} = -\frac{1}{2}\frac{d[N_2O_5]}{dt} = +\frac{1}{4}\frac{d[NO_2]}{dt} = +\frac{d[O_2]}{dt}$$

### Mistake 2: Sign Confusion

**Wrong:** Rate of product formation =

$$-\frac{d[C]}{dt}$$

(negative sign)

**Correct:** Rate of product formation =

$$+\frac{d[C]}{dt}$$

(positive sign)

### Mistake 3: Graph Interpretation

Students often confuse:

- **Steep slope** = Fast reaction (high rate)
- **Gentle slope** = Slow reaction (low rate)
- **Zero slope** = Reaction complete (zero rate)

## Practice Problems

### Level 1: JEE Main Foundation

**Problem 1:** For the reaction

$$N_2 + 3H_2 \rightarrow 2NH_3$$

, if

$$\frac{d[NH_3]}{dt} = 2 \times 10^{-4}$$

M/s, what is

$$\frac{d[H_2]}{dt}$$

?

**Solution:**

$$\frac{1}{2}\frac{d[NH_3]}{dt} = -\frac{1}{3}\frac{d[H_2]}{dt}$$

$$\frac{d[H_2]}{dt} = -\frac{3}{2} \times \frac{d[NH_3]}{dt} = -\frac{3}{2} \times 2 \times 10^{-4} = -3 \times 10^{-4} \text{ M/s}$$

(Negative sign indicates H₂ is consumed)

### Level 2: JEE Main/Advanced

**Problem 2:** For the reaction

$$2A + B \rightarrow 3C$$

, concentration of A decreases from 0.6 M to 0.2 M in 40 seconds. Calculate:
(a) Average rate of reaction
(b) Rate of formation of C

**Solution:**

(a) Average rate of disappearance of A:

$$r_A = -\frac{\Delta[A]}{\Delta t} = -\frac{0.2 - 0.6}{40} = 0.01 \text{ M/s}$$

Rate of reaction:

$$r = \frac{1}{2}r_A = \frac{1}{2} \times 0.01 = 0.005 \text{ M/s}$$

(b) Rate of formation of C:

$$r = \frac{1}{3}\frac{d[C]}{dt}$$

$$\frac{d[C]}{dt} = 3r = 3 \times 0.005 = 0.015 \text{ M/s}$$

### Level 3: JEE Advanced

**Problem 3:** For the decomposition of H₂O₂:

$$2H_2O_2 \rightarrow 2H_2O + O_2$$

The following data was obtained:

| Time (min) | [H₂O₂] (M) |
| --- | --- |
| 0 | 0.100 |
| 10 | 0.082 |
| 20 | 0.067 |
| 30 | 0.055 |

Calculate:
(a) Average rate between 0-10 min and 20-30 min
(b) Approximate instantaneous rate at t = 20 min

**Solution:**

(a) Average rate (0-10 min):

$$r_1 = -\frac{1}{2} \times \frac{0.082 - 0.100}{10 - 0} = -\frac{1}{2} \times \frac{-0.018}{10} = 9 \times 10^{-4} \text{ M/min}$$

Average rate (20-30 min):

$$r_2 = -\frac{1}{2} \times \frac{0.055 - 0.067}{30 - 20} = -\frac{1}{2} \times \frac{-0.012}{10} = 6 \times 10^{-4} \text{ M/min}$$

**Observation:** Rate decreases with time (as reactant concentration decreases)

(b) Instantaneous rate at t = 20 min (using central difference method):

$$r_{inst} \approx -\frac{1}{2} \times \frac{[H_2O_2]_{30} - [H_2O_2]_{10}}{30 - 10}$$

$$r_{inst} \approx -\frac{1}{2} \times \frac{0.055 - 0.082}{20} = -\frac{1}{2} \times \frac{-0.027}{20} = 6.75 \times 10^{-4} \text{ M/min}$$

## Experimental Measurement of Rate

### Methods for Following Reaction Rate

1. **Chemical Methods:**

   - Withdraw samples at intervals
   - Quench the reaction (stop it)
   - Analyze concentration by titration
2. **Physical Methods:**

   - **Colorimetry:** For colored reactants/products
   - **Gas volume:** For reactions producing gases
   - **Pressure change:** For gaseous reactions
   - **Conductivity:** For ionic reactions
   - **Optical rotation:** For optical isomers
   - **pH measurement:** For acid-base reactions

### Example: Iodine Clock Reaction

The famous “iodine clock” reaction suddenly turns blue after a specific time, demonstrating how reaction rates can be precisely measured and predicted.

## Connection to Other Topics

### Link to Chemical Equilibrium

- At equilibrium, **forward rate = backward rate**
- Net rate of reaction becomes zero
- See: [Chemical Equilibrium](../../equilibrium/index.md)

### Link to Thermodynamics

- Thermodynamics tells us **if** a reaction will occur (ΔG < 0)
- Kinetics tells us **how fast** it will occur
- Thermodynamically favorable reactions may be kinetically slow!
- See: [Gibbs Free Energy](../../thermodynamics/index.md)

### Link to Arrhenius Equation

- Temperature affects rate exponentially
- See: [Arrhenius Equation](../arrhenius-equation/index.md)

## JEE Previous Year Question

**JEE Advanced 2019:** For the reaction

$$2A + B \rightarrow 2C$$

, the rate of disappearance of A is

$$0.5 \times 10^{-3}$$

mol L⁻¹ s⁻¹. What is the rate of appearance of C?

**Solution:**

$$-\frac{1}{2}\frac{d[A]}{dt} = \frac{1}{2}\frac{d[C]}{dt}$$

$$\frac{d[C]}{dt} = \frac{d[A]}{dt} = -0.5 \times 10^{-3} \text{ mol L}^{-1}\text{s}^{-1}$$

Since we need rate of appearance (positive value):

$$\text{Rate of appearance of C} = 0.5 \times 10^{-3} \text{ mol L}^{-1}\text{s}^{-1}$$

## Quick Revision Points

1. Rate = change in concentration per unit time
2. Always divide by stoichiometric coefficient for unique rate
3. Negative sign for reactants, positive for products
4. Average rate uses Δ (finite interval)
5. Instantaneous rate uses d (differential)
6. Rate generally decreases with time as reactants are consumed
7. Units: mol L⁻¹ s⁻¹ or M s⁻¹

## Summary

Understanding reaction rates is fundamental to chemical kinetics. The distinction between average and instantaneous rates, proper use of stoichiometric coefficients, and correct sign conventions are crucial for JEE success. Remember that rates are always positive quantities when expressed as “rate of reaction,” though individual terms may carry signs.

---

**Next Topic:** [Factors Affecting Rate of Reaction](../factors-affecting-rate/index.md)

From TestGuru · our mock-test platform

## You've read Rate of Reaction: Average and Instantaneous Rate.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=chemical-kinetics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fchemical-kinetics%2Frate-of-reaction%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/chemical-kinetics/rate-of-reaction/",this.page.identifier="/chemistry/chemical-kinetics/rate-of-reaction/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionRate" id="anim-reactionRate-1795396419434471829"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionRate-1795396419434471829")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="instantaneousRate" id="anim-instantaneousRate-1795396419434496235"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-instantaneousRate-1795396419434496235")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/chemical-kinetics/rate-of-reaction/](https://jeenotes.in/chemistry/chemical-kinetics/rate-of-reaction/) · raw HTML: `offline/chemistry/chemical-kinetics/rate-of-reaction/index.html`_
