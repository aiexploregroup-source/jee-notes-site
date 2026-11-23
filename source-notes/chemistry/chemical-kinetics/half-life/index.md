---
title: "Half-Life of Reactions: Zero, First, and Second Order"
source: "https://jeenotes.in/chemistry/chemical-kinetics/half-life/"
description: "Master half-life concepts for different reaction orders with derivations, calculations, and JEE problem-solving techniques"
updated: "2025-12-26"
reading_time: "10 min read"
breadcrumb: "Chemistry"
position: "/ Topic 4 of 10"
html: "../../../../offline/chemistry/chemical-kinetics/half-life/index.html"
extracted: "2026-11-23"
---

> Master half-life concepts for different reaction orders with derivations, calculations, and JEE problem-solving techniques

# Half-Life of Reactions

## Real-Life Connection: From Nuclear Power to Medicine

Why is plutonium-239 so dangerous for thousands of years? Why does iodine-131 used in thyroid treatment become safe in weeks? Why do some medicines need to be taken every 6 hours while others last 24 hours?

The answer: **Half-life**!

**Nuclear waste management:**

- Pu-239: t₁/₂ = 24,000 years → radioactive for millennia
- I-131: t₁/₂ = 8 days → decays quickly (used in medical treatment)

**Pharmaceutical design:**

- Aspirin: t₁/₂ = 2-3 hours → frequent dosing
- Long-acting drugs: t₁/₂ = 24+ hours → once-daily dosing

**Archaeological dating:**

- C-14: t₁/₂ = 5,730 years → date artifacts up to 50,000 years old
- U-238: t₁/₂ = 4.5 billion years → date geological samples

Understanding half-life helps us predict reaction timescales, design safe nuclear facilities, and develop effective medications!

## What is Half-Life?

### Definition

**Half-life (t₁/₂)** is the time required for the concentration of a reactant to decrease to **half** of its initial value.

$$\boxed{t_{1/2} = \text{time when } [A]_t = \frac{[A]_0}{2}}$$

**Key concept:** After each half-life, concentration reduces by 50%

### General Pattern

| Number of half-lives | Remaining fraction | % Remaining | % Reacted |
| --- | --- | --- | --- |
| 0 | 1 | 100% | 0% |
| 1 | 1/2 | 50% | 50% |
| 2 | 1/4 | 25% | 75% |
| 3 | 1/8 | 12.5% | 87.5% |
| 4 | 1/16 | 6.25% | 93.75% |
| n | (1/2)ⁿ | 100/(2ⁿ)% | [100-100/2ⁿ]% |

**Formula:**

$$\boxed{\frac{[A]_t}{[A]_0} = \left(\frac{1}{2}\right)^n}$$

where n = number of half-lives elapsed

## Half-Life for Zero Order Reactions

### Derivation

Integrated equation:

$$[A]_t = [A]_0 - kt$$

At t = t₁/₂:

$$[A]_t = \frac{[A]_0}{2}$$

$$\frac{[A]_0}{2} = [A]_0 - kt_{1/2}$$

$$kt_{1/2} = [A]_0 - \frac{[A]_0}{2} = \frac{[A]_0}{2}$$

$$\boxed{t_{1/2} = \frac{[A]_0}{2k}}$$

### Key Characteristics

1. **Depends on initial concentration** [A]₀
2. **Directly proportional** to [A]₀
3. If [A]₀ doubles, t₁/₂ doubles
4. Each successive half-life is **shorter** (takes less time to halve smaller amounts)

### Successive Half-Lives

For zero order:

**First half-life:** [A]₀ → [A]₀/2

$$t_1 = \frac{[A]_0}{2k}$$

**Second half-life:** [A]₀/2 → [A]₀/4

$$t_2 = \frac{[A]_0/2}{2k} = \frac{[A]_0}{4k}$$

**Third half-life:** [A]₀/4 → [A]₀/8

$$t_3 = \frac{[A]_0/4}{2k} = \frac{[A]_0}{8k}$$

**Pattern:** t₁ : t₂ : t₃ = 1 : 1/2 : 1/4

**Each successive half-life is half the previous one!**

### Example

Photochemical reaction with k = 0.01 M/s

Initial concentration [A]₀ = 0.4 M

**First half-life:**

$$t_{1/2} = \frac{0.4}{2 \times 0.01} = 20 \text{ s}$$

If [A]₀ = 0.8 M:

$$t_{1/2} = \frac{0.8}{2 \times 0.01} = 40 \text{ s}$$

Doubling [A]₀ doubles t₁/₂!

## Half-Life for First Order Reactions

### Derivation

Integrated equation:

$$\ln\frac{[A]_0}{[A]_t} = kt$$

At t = t₁/₂:

$$[A]_t = \frac{[A]_0}{2}$$

$$\ln\frac{[A]_0}{[A]_0/2} = kt_{1/2}$$

$$\ln 2 = kt_{1/2}$$

$$\boxed{t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}}$$

### Key Characteristics

1. **Independent of initial concentration** [A]₀
2. **Constant** throughout the reaction
3. **Characteristic property** of the substance
4. Each successive half-life takes the **same time**

### Why First Order is Special

**Only for first order reactions:**

- Half-life is constant
- Independent of how much you start with
- Each half-life period reduces concentration by exactly 50%

This makes first order kinetics ideal for:

- **Radioactive dating** (predictable decay)
- **Drug dosing** (predictable elimination)
- **Process control** (consistent behavior)

### Successive Half-Lives

For first order, **all half-lives are equal:**

t₁ = t₂ = t₃ = &mldr; = 0.693/k

```fallback
[A]
 |
100%|___
    |   |___
50% |   |   |___
    |   |   |   |___
25% |   |   |   |
    |___|___|___|___
    0  t₁/₂ 2t₁/₂ 3t₁/₂
```

### Relationship to Rate Constant

$$k = \frac{0.693}{t_{1/2}}$$

**Large k** → **Small t₁/₂** → Fast reaction
**Small k** → **Large t₁/₂** → Slow reaction

### Examples

1. **C-14 decay:**

   - t₁/₂ = 5,730 years
   - k = 0.693/5730 = 1.21 × 10⁻⁴ year⁻¹
2. **I-131 decay:**

   - t₁/₂ = 8 days
   - k = 0.693/8 = 0.0866 day⁻¹
3. **Drug elimination:**

   - Caffeine: t₁/₂ = 5 hours
   - Aspirin: t₁/₂ = 2-3 hours

## Half-Life for Second Order Reactions

### Derivation (Type I: Rate = k[A]²)

Integrated equation:

$$\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$$

At t = t₁/₂:

$$[A]_t = \frac{[A]_0}{2}$$

$$\frac{1}{[A]_0/2} = \frac{1}{[A]_0} + kt_{1/2}$$

$$\frac{2}{[A]_0} = \frac{1}{[A]_0} + kt_{1/2}$$

$$kt_{1/2} = \frac{2}{[A]_0} - \frac{1}{[A]_0} = \frac{1}{[A]_0}$$

$$\boxed{t_{1/2} = \frac{1}{k[A]_0}}$$

### Key Characteristics

1. **Inversely proportional** to [A]₀
2. If [A]₀ doubles, t₁/₂ halves
3. Each successive half-life is **twice** the previous one
4. Reaction slows down significantly over time

### Successive Half-Lives

For second order:

**First half-life:** [A]₀ → [A]₀/2

$$t_1 = \frac{1}{k[A]_0}$$

**Second half-life:** [A]₀/2 → [A]₀/4

$$t_2 = \frac{1}{k[A]_0/2} = \frac{2}{k[A]_0} = 2t_1$$

**Third half-life:** [A]₀/4 → [A]₀/8

$$t_3 = \frac{1}{k[A]_0/4} = \frac{4}{k[A]_0} = 4t_1$$

**Pattern:** t₁ : t₂ : t₃ = 1 : 2 : 4

**Each successive half-life doubles!**

### Example

NO₂ decomposition with k = 0.5 M⁻¹s⁻¹

Initial concentration [A]₀ = 0.2 M

**First half-life:**

$$t_{1/2} = \frac{1}{0.5 \times 0.2} = 10 \text{ s}$$

**Second half-life:**

$$t_{1/2} = \frac{1}{0.5 \times 0.1} = 20 \text{ s}$$

Total time for 75% completion = 10 + 20 = 30 s

## Comparison Table: Half-Life for Different Orders

| Order | Formula | Dependence on [A]₀ | Successive half-lives | Pattern |
| --- | --- | --- | --- | --- |
| **0** | t₁/₂ = [A]₀/(2k) | Directly proportional | Decrease | 1, 1/2, 1/4, &mldr; |
| **1** | t₁/₂ = 0.693/k | Independent | Constant | 1, 1, 1, &mldr; |
| **2** | t₁/₂ = 1/(k[A]₀) | Inversely proportional | Increase | 1, 2, 4, &mldr; |

### Visual Comparison

```fallback
Zero Order:
|||||_____
    |||___
      |_

First Order:
||||||||
    ||||||||
        ||||||||

Second Order:
||||
    ||||||||
            ||||||||||||||||
```

## Memory Tricks

### “ZIP” for Half-life Patterns

**Z**ero order: Decreasing half-lives (faster and faster)
**I** (one/first) order: Identical half-lives (constant)
**P**air (two/second) order: Progressively increasing (doubling)

### “FIC” for First Order

**F**ixed half-life
**I**ndependent of concentration
**C**onstant throughout

### “SID” for Second Order

**S**lowly increasing half-lives
**I**nversely proportional to [A]₀
**D**oubling each time

### Mathematical Pattern

- **0 order:** t₁/₂ has [A]₀ in **numerator** (increases with [A]₀)
- **1 order:** t₁/₂ has **no [A]₀** term (independent)
- **2 order:** t₁/₂ has [A]₀ in **denominator** (decreases with [A]₀)

## Determining Reaction Order from Half-Life

### Method: Vary [A]₀ and Measure t₁/₂

| Observation | Order |
| --- | --- |
| t₁/₂ increases as [A]₀ increases | Zero |
| t₁/₂ constant (independent of [A]₀) | First |
| t₁/₂ decreases as [A]₀ increases | Second |

### Mathematical Test

Measure t₁/₂ at two different [A]₀:

$$\frac{t_{1/2}^{(1)}}{t_{1/2}^{(2)}} = \left(\frac{[A]_0^{(1)}}{[A]_0^{(2)}}\right)^{1-n}$$

where n = order

- If ratio = 1 → n = 1 (first order)
- If ratio > 1 when [A]₀⁽¹⁾ > [A]₀⁽²⁾ → n = 0 (zero order)
- If ratio < 1 when [A]₀⁽¹⁾ > [A]₀⁽²⁾ → n = 2 (second order)

## Common JEE Mistakes

### Mistake 1: Using Wrong Formula

**Wrong:** Using t₁/₂ = 0.693/k for all reactions

**Correct:** This formula is **only for first order**!

- Check order first
- Use appropriate formula

### Mistake 2: Successive Half-Lives

**Wrong:** “All reactions have equal successive half-lives”

**Correct:** Only **first order** has equal successive half-lives!

- Zero order: decreasing
- Second order: increasing

### Mistake 3: n Half-Lives Calculation

**Wrong:** After 3 half-lives, 3/4 of reactant remains

**Correct:** After n half-lives, (1/2)ⁿ remains

- After 3 half-lives: (1/2)³ = 1/8 remains (7/8 reacted)

### Mistake 4: Units

**Wrong:** Treating t₁/₂ values in different units as comparable

**Correct:** Always convert to same time unit before comparing!

## Practice Problems

### Level 1: JEE Main Foundation

**Problem 1:** A first order reaction has k = 0.0693 min⁻¹. Calculate half-life.

**Solution:**

$$t_{1/2} = \frac{0.693}{k} = \frac{0.693}{0.0693} = 10 \text{ min}$$

**Problem 2:** In a first order reaction, 75% of reactant decomposes in 60 minutes. Find half-life.

**Solution:**

75% decomposed → 25% remains

$$\frac{[A]_t}{[A]_0} = 0.25 = \left(\frac{1}{2}\right)^n$$

$$\left(\frac{1}{2}\right)^2 = 0.25$$

So n = 2 half-lives

$$2 \times t_{1/2} = 60 \text{ min}$$

$$t_{1/2} = 30 \text{ min}$$

### Level 2: JEE Main/Advanced

**Problem 3:** A radioactive sample has half-life of 10 days. Calculate:
(a) Time for 87.5% decay
(b) % remaining after 30 days
(c) Rate constant

**Solution:**

(a) 87.5% decay → 12.5% remains = 1/8 of original

$$\frac{1}{8} = \left(\frac{1}{2}\right)^3$$

So 3 half-lives needed

$$t = 3 \times 10 = 30 \text{ days}$$

(b) 30 days = 3 half-lives

$$\text{Remaining} = \left(\frac{1}{2}\right)^3 \times 100\% = 12.5\%$$

(c)

$$k = \frac{0.693}{t_{1/2}} = \frac{0.693}{10} = 0.0693 \text{ day}^{-1}$$

**Problem 4:** For a second order reaction with k = 0.2 M⁻¹min⁻¹, calculate time for 75% completion if [A]₀ = 0.1 M.

**Solution:**

75% completion → [A]ₜ = 0.25[A]₀ = 0.025 M

Method 1 - Direct calculation:

$$\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$$

$$\frac{1}{0.025} = \frac{1}{0.1} + 0.2t$$

$$40 = 10 + 0.2t$$

$$t = 150 \text{ min}$$

Method 2 - Using half-lives:

First half-life:

$$t_1 = \frac{1}{k[A]_0} = \frac{1}{0.2 \times 0.1} = 50 \text{ min}$$

Second half-life (when [A] = 0.05 M):

$$t_2 = \frac{1}{k \times 0.05} = \frac{1}{0.2 \times 0.05} = 100 \text{ min}$$

Total = 50 + 100 = **150 min**

### Level 3: JEE Advanced

**Problem 5:** A substance decomposes by first order kinetics. If 60% decomposes in 60 minutes, calculate:
(a) Half-life
(b) Time for 90% decomposition
(c) Rate constant
(d) Time for 99% decomposition

**Solution:**

(a) 60% decomposed → 40% remains

$$\ln\frac{100}{40} = kt$$

$$\ln 2.5 = k \times 60$$

$$0.916 = 60k$$

$$k = 0.01527 \text{ min}^{-1}$$

$$t_{1/2} = \frac{0.693}{0.01527} = 45.4 \text{ min}$$

(b) For 90% decomposition (10% remains):

$$\ln\frac{100}{10} = kt$$

$$\ln 10 = 0.01527 \times t$$

$$2.303 = 0.01527t$$

$$t = 150.8 \text{ min}$$

(c) k = 0.01527 min⁻¹ (from part a)

(d) For 99% decomposition (1% remains):

$$\ln\frac{100}{1} = 0.01527t$$

$$\ln 100 = 0.01527t$$

$$4.606 = 0.01527t$$

$$t = 301.6 \text{ min}$$

**Alternative for parts b and d using half-lives:**

(b) 90% decomposition:

$$t = \frac{2.303}{k} = \frac{2.303}{0.01527} \approx 3.32 \times t_{1/2} = 150.8 \text{ min}$$

(d) 99% decomposition:

$$t = \frac{2 \times 2.303}{k} \approx 6.64 \times t_{1/2} = 301.5 \text{ min}$$

**Problem 6:** Two substances A and B decompose by first order kinetics. Half-life of A is twice that of B. Calculate the ratio of time taken for 75% decomposition of A to 87.5% decomposition of B.

**Solution:**

Let t₁/₂(B) = t
Then t₁/₂(A) = 2t

For A (75% decomposition = 25% remaining = 2 half-lives):

$$t_A = 2 \times t_{1/2}(A) = 2 \times 2t = 4t$$

For B (87.5% decomposition = 12.5% remaining = 3 half-lives):

$$t_B = 3 \times t_{1/2}(B) = 3t$$

$$\frac{t_A}{t_B} = \frac{4t}{3t} = \frac{4}{3}$$

**Answer: 4:3**

## Average Life (Mean Life)

Related concept: **Average life** or **mean life** (τ)

For first order reactions:

$$\boxed{\tau = \frac{1}{k} = 1.443 \times t_{1/2}}$$

**Relationship:**

$$t_{1/2} = 0.693 \tau$$

**Physical meaning:** Average time a molecule exists before reacting

**Used in:**

- Radioactive decay (mean lifetime of nucleus)
- Excited state lifetimes in spectroscopy
- Fluorescence decay

## Applications of Half-Life

### 1. Radioactive Dating

**C-14 dating:**

- Living organisms have constant C-14/C-12 ratio
- After death, C-14 decays (t₁/₂ = 5,730 years)
- Measuring ratio gives age

**Example:** Dead wood with 1/4 original C-14

- 2 half-lives have passed
- Age = 2 × 5,730 = 11,460 years

### 2. Drug Dosing

**Pharmacokinetics:**

- Most drugs follow first-order elimination
- After 5 half-lives: >96% eliminated
- Dosing interval based on t₁/₂

**Example:** Drug with t₁/₂ = 6 hours

- Dose every 6 hours to maintain therapeutic levels
- Complete elimination in ~30 hours (5 half-lives)

### 3. Nuclear Medicine

**Medical isotopes:**

- Short t₁/₂ → quick decay → less radiation exposure
- I-131 (t₁/₂ = 8 days) for thyroid treatment
- Tc-99m (t₁/₂ = 6 hours) for imaging

### 4. Environmental Science

**Pesticide persistence:**

- DDT: t₁/₂ ~ 15 years (very persistent)
- Safer alternatives: t₁/₂ ~ days to months

### 5. Nuclear Waste

**Safe disposal:**

- Pu-239: t₁/₂ = 24,000 years
- Must be isolated for >10 half-lives (~240,000 years!)

## Connection to Other Topics

### Link to Integrated Rate Equations

- Half-life derived from integrated rate laws
- See: [Integrated Rate Equations](../integrated-rate-equations/index.md)

### Link to Rate Constant

- k and t₁/₂ are inversely related (for first order)
- See: [Rate Law](../rate-law/index.md)

### Link to Order Determination

- Half-life behavior identifies reaction order
- See: [Order and Molecularity](../order-molecularity/index.md)

### Link to Arrhenius Equation

- Temperature affects k, which affects t₁/₂
- See: [Arrhenius Equation](../arrhenius-equation/index.md)

## JEE Previous Year Questions

**JEE Main 2022:** The half-life of a first order reaction is 10 minutes. What % of the reactant will remain after 30 minutes?

**Solution:**

30 min = 3 half-lives

$$\text{Remaining} = \left(\frac{1}{2}\right)^3 = \frac{1}{8} = 0.125$$

**% remaining = 12.5%**

**JEE Advanced 2019:** For a first order reaction, time required for 99% completion is n times the time required for 90% completion. Find n.

**Solution:**

$$t = \frac{2.303}{k}\log\frac{100}{100-\%}$$

For 90%:

$$t_{90} = \frac{2.303}{k}\log 10 = \frac{2.303}{k}$$

For 99%:

$$t_{99} = \frac{2.303}{k}\log 100 = \frac{2 \times 2.303}{k}$$

$$n = \frac{t_{99}}{t_{90}} = 2$$

**Answer: n = 2**

## Quick Revision Points

1. **Half-life** = time for [A] to reduce to [A]₀/2
2. **Zero order:** t₁/₂ ∝ [A]₀ (decreasing successive half-lives)
3. **First order:** t₁/₂ = 0.693/k (constant, independent of [A]₀)
4. **Second order:** t₁/₂ ∝ 1/[A]₀ (increasing successive half-lives)
5. After n half-lives: **(1/2)ⁿ remains**
6. **First order is unique** - only order with constant t₁/₂
7. **Measuring t₁/₂ at different [A]₀** determines order
8. **Radioactive decay** always first order

## Summary

Half-life is a fundamental concept in chemical kinetics with:

- **Different formulas** for different orders
- **Unique behavior** for first order (constant t₁/₂)
- **Wide applications** from archaeology to medicine
- **Diagnostic value** for determining reaction order

Understanding half-life patterns is essential for:

- Solving JEE kinetics problems
- Interpreting experimental data
- Real-world applications in science and technology

The key is remembering that **only first-order reactions have constant half-lives** - this single fact solves many JEE problems!

---

**Previous Topic:** [Integrated Rate Equations](../integrated-rate-equations/index.md)
**Next Topic:** [Arrhenius Equation](../arrhenius-equation/index.md)

From TestGuru · our mock-test platform

## You've read Half-Life of Reactions: Zero, First, and Second Order.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=chemical-kinetics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fchemical-kinetics%2Fhalf-life%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/chemical-kinetics/half-life/",this.page.identifier="/chemistry/chemical-kinetics/half-life/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionRate" id="anim-reactionRate-1795396419417006285"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionRate-1795396419417006285")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/chemical-kinetics/half-life/](https://jeenotes.in/chemistry/chemical-kinetics/half-life/) · raw HTML: `offline/chemistry/chemical-kinetics/half-life/index.html`_
