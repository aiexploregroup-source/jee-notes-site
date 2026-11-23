---
title: "Order and Molecularity of Reaction"
source: "https://jeenotes.in/chemistry/chemical-kinetics/order-molecularity/"
description: "Master the concepts of order of reaction and molecularity with clear distinctions, examples, and JEE problem-solving strategies"
updated: "2025-12-26"
reading_time: "11 min read"
breadcrumb: "Chemistry"
position: "/ Topic 6 of 10"
html: "../../../../offline/chemistry/chemical-kinetics/order-molecularity/index.html"
extracted: "2026-11-23"
---

> Master the concepts of order of reaction and molecularity with clear distinctions, examples, and JEE problem-solving strategies

# Order and Molecularity of Reaction

## Real-Life Connection: Why Drug Dosage Matters

Ever noticed how medicine labels specify “Take one tablet every 8 hours” or “Take two tablets once daily”? This is directly related to reaction order!

The way your body metabolizes drugs follows specific kinetic orders:

- **Alcohol metabolism**: Zero-order (constant amount processed per hour, regardless of blood alcohol level)
- **Most drugs**: First-order (rate depends on drug concentration)
- **Some enzyme-limited processes**: Second-order

Understanding order and molecularity helps pharmaceutical scientists determine:

- Optimal dosing intervals
- Safe maximum doses
- How long drugs remain effective

## Two Fundamental Concepts

### Order of Reaction

**Experimental, mathematical** - determined from rate law

### Molecularity of Reaction

**Theoretical, mechanistic** - determined from reaction mechanism

**Critical difference:** Order is found experimentally; molecularity is deduced from mechanism.

## Order of Reaction

### Definition

The **order of reaction** is the sum of powers of concentration terms in the rate law expression.

For a reaction:

$$aA + bB \rightarrow \text{Products}$$

Rate law:

$$\boxed{\text{Rate} = k[A]^m[B]^n}$$

**Order** = m + n

where:

- m = order with respect to A
- n = order with respect to B
- (m + n) = overall order of reaction

### Key Points

1. Order is **experimentally determined** (not from balanced equation!)
2. Can be **zero, integer, or fractional**
3. Can be **positive or negative** (rare)
4. **Independent** of stoichiometric coefficients

### Types of Order

#### 1. Zero Order Reaction

$$\text{Rate} = k[A]^0 = k$$

**Characteristics:**

- Rate is **independent** of concentration
- Rate = constant throughout
- Units of k: mol L⁻¹ s⁻¹

**Graph:**

```fallback
[A] vs time: Straight line with negative slope
Rate vs [A]: Horizontal line
```

**Examples:**

1. **Photochemical reactions:**

   $$H_2 + Cl_2 \xrightarrow{hv} 2HCl$$

   Rate depends on light intensity, not concentration.
2. **Enzyme catalyzed reactions at high substrate concentration:**
   All enzyme sites saturated, adding more substrate doesn’t increase rate.
3. **Surface catalyzed reactions:**

   $$2NH_3 \xrightarrow{Pt} N_2 + 3H_2$$

   When surface is fully covered, rate is constant.
4. **Alcohol metabolism in body:**
   Liver processes ~7-10g alcohol/hour regardless of blood alcohol level.

#### 2. First Order Reaction

$$\text{Rate} = k[A]^1 = k[A]$$

**Characteristics:**

- Rate **directly proportional** to concentration
- Units of k: s⁻¹ or time⁻¹
- Half-life **independent** of initial concentration

**Graph:**

```fallback
[A] vs time: Exponential decay
ln[A] vs time: Straight line (negative slope = -k)
```

**Examples:**

1. **Radioactive decay:**

   $$^{14}C \rightarrow ^{14}N + \beta^-$$
2. **Decomposition of N₂O₅:**

   $$2N_2O_5 \rightarrow 4NO_2 + O_2$$

$$\text{Rate} = k[N_2O_5]$$
3. **Hydrolysis of ester (acid catalyzed):**

   $$CH_3COOC_2H_5 + H_2O \xrightarrow{H^+} CH_3COOH + C_2H_5OH$$

   (Water in excess)
4. **Drug elimination from body** (most pharmaceuticals)

#### 3. Second Order Reaction

$$\text{Rate} = k[A]^2$$

or

$$\text{Rate} = k[A][B]$$

**Characteristics:**

- Rate proportional to square of one concentration or product of two
- Units of k: L mol⁻¹ s⁻¹ or M⁻¹ s⁻¹
- Half-life **inversely proportional** to initial concentration

**Graph:**

```fallback
1/[A] vs time: Straight line (slope = k)
```

**Examples:**

1. **NO₂ decomposition:**

   $$2NO_2 \rightarrow 2NO + O_2$$

$$\text{Rate} = k[NO_2]^2$$
2. **Alkaline hydrolysis of ester:**

   $$CH_3COOC_2H_5 + NaOH \rightarrow CH_3COONa + C_2H_5OH$$

$$\text{Rate} = k[CH_3COOC_2H_5][NaOH]$$
3. **Dimerization reactions:**

   $$2C_4H_6 \rightarrow C_8H_{12}$$

#### 4. Fractional Order Reaction

Order can be **non-integer** (0.5, 1.5, 2.5, etc.)

**Examples:**

1. **Acetaldehyde decomposition:**

   $$CH_3CHO \rightarrow CH_4 + CO$$

$$\text{Rate} = k[CH_3CHO]^{3/2}$$

   Order = 1.5
2. **Chlorine + Chloroform:**

   $$CHCl_3 + Cl_2 \rightarrow CCl_4 + HCl$$

$$\text{Rate} = k[CHCl_3][Cl_2]^{1/2}$$

   Order = 1.5

**Reason:** Complex mechanisms with multiple elementary steps.

### Pseudo Order Reactions

When one reactant is in **large excess**, reaction appears to be of lower order.

**Example:** Acid hydrolysis of ester

$$CH_3COOC_2H_5 + H_2O \xrightarrow{H^+} CH_3COOH + C_2H_5OH$$

**True rate law:**

$$\text{Rate} = k[CH_3COOC_2H_5][H_2O]$$

(Second order)

**Since [H₂O] » [ester]**, [H₂O] remains nearly constant:

$$\text{Rate} = k[CH_3COOC_2H_5][H_2O] = k'[CH_3COOC_2H_5]$$

where k’ = k[H₂O] = pseudo first order rate constant

**Appears to be first order** → **Pseudo first order reaction**

## Molecularity of Reaction

### Definition

The **molecularity** is the number of reacting species (atoms, ions, or molecules) that must collide simultaneously in an **elementary step** to form products.

$$\boxed{\text{Molecularity} = \text{Number of molecules in elementary step}}$$

### Key Characteristics

1. **Always a whole number** (1, 2, 3, &mldr;)
2. **Never zero or fractional**
3. **Never greater than 3** (trimolecular is rare)
4. Defined only for **elementary reactions**
5. **Theoretical concept** based on mechanism

### Types of Molecularity

#### 1. Unimolecular Reactions

**One molecule** participates in elementary step.

**Examples:**

1. **Radioactive decay:**

   $$^{238}U \rightarrow ^{234}Th + ^4He$$

   Molecularity = 1
2. **Isomerization:**

   $$\text{Cyclopropane} \rightarrow \text{Propene}$$

   Molecularity = 1
3. **Decomposition:**

   $$N_2O_5 \rightarrow NO_2 + NO_3$$

   (Elementary step)
   Molecularity = 1

#### 2. Bimolecular Reactions

**Two molecules** collide in elementary step.

**Examples:**

1. **NO + O₃ reaction:**

   $$NO + O_3 \rightarrow NO_2 + O_2$$

   Molecularity = 2
2. **H₂ + I₂ reaction:**
   (Elementary step)

   $$H_2 + I_2 \rightarrow 2HI$$

   Molecularity = 2
3. **Alkaline hydrolysis:**

   $$CH_3COOC_2H_5 + OH^- \rightarrow CH_3COO^- + C_2H_5OH$$

   Molecularity = 2

**Most common molecularity** - bimolecular collisions are frequent.

#### 3. Trimolecular (Termolecular) Reactions

**Three molecules** collide simultaneously.

**Examples:**

1. **NO + O₂ reaction:**

   $$2NO + O_2 \rightarrow 2NO_2$$

   (If this is elementary step)
   Molecularity = 3
2. **NO + Cl₂ reaction:**

   $$2NO + Cl_2 \rightarrow 2NOCl$$

**Very rare!** - Probability of 3 molecules colliding simultaneously with proper orientation and energy is extremely low.

### Why Molecularity > 3 is Not Observed?

**Statistical probability** of 4 or more molecules colliding simultaneously with:

- Correct orientation
- Sufficient energy
- At the same instant

is **virtually zero**.

Therefore, complex reactions proceed through **multiple elementary steps**, each with molecularity ≤ 3.

## Order vs Molecularity: The Critical Differences

| Aspect | Order | Molecularity |
| --- | --- | --- |
| **Definition** | Sum of powers in rate law | Number of molecules in elementary step |
| **Determination** | Experimental | Theoretical (from mechanism) |
| **Value** | 0, integer, fractional | Only positive integer (1, 2, 3) |
| **Applicability** | Any reaction (overall or elementary) | Only elementary reactions |
| **Complex reactions** | May differ from stoichiometry | Each step has its own molecularity |
| **Nature** | Mathematical concept | Physical concept |
| **Can be zero?** | Yes | No |
| **Can be fractional?** | Yes | No |

### Example Demonstrating Difference

**Reaction:**

$$2N_2O_5 \rightarrow 4NO_2 + O_2$$

**Experimentally determined rate law:**

$$\text{Rate} = k[N_2O_5]$$

**Order = 1** (first order)

But stoichiometry shows 2 moles of N₂O₅!

**Why?** Because this is **NOT an elementary reaction**. It proceeds through multiple steps.

**One possible elementary step:**

$$N_2O_5 \rightarrow NO_2 + NO_3$$

**Molecularity = 1** (unimolecular)

**Lesson:** Never assume order from balanced equation stoichiometry!

## Memory Tricks

### “ORDER-M” for remembering differences:

**O**btained experimentally vs **M**echanistic (theoretical)
**R**ate law based vs **M**olecule count based
**D**ecimals allowed vs **M**ust be integer
**E**ven for complex reactions vs **E**lementary steps only
**R**arely > 3 in practice vs **M**ax is 3

### “MOM” for molecularity:

**M**olecules count
**O**nly integers (1, 2, 3)
**M**echanism needed

### “EXPO” for order:

**EX**perimental
**P**owers in rate law
**O**ften differs from stoichiometry

## Common JEE Mistakes

### Mistake 1: Assuming Order = Stoichiometric Coefficient

**Wrong:** For

$$2A \rightarrow \text{Products}$$

, order must be 2

**Correct:** Order is determined experimentally, independent of stoichiometry!

### Mistake 2: Fractional Molecularity

**Wrong:** “Reaction has molecularity = 1.5”

**Correct:** Molecularity is **always integer** (1, 2, or 3). If someone says fractional molecularity, they’re confusing it with order.

### Mistake 3: Molecularity for Overall Reaction

**Wrong:** For

$$2NO + O_2 \rightarrow 2NO_2$$

, “molecularity = 3”

**Careful:** Only if this is an **elementary step**. If it’s overall reaction with mechanism, molecularity is defined for individual steps, not overall reaction.

### Mistake 4: Order from Balanced Equation

**Wrong:** For

$$H_2 + I_2 \rightarrow 2HI$$

, assuming order = 1 + 1 = 2

**Correct:** Must determine experimentally! (Though in this case it happens to be second order)

## Practice Problems

### Level 1: JEE Main Foundation

**Problem 1:** For the reaction

$$A + 2B \rightarrow C$$

, the rate law is

$$\text{Rate} = k[A][B]$$

. What is:
(a) Order with respect to A?
(b) Order with respect to B?
(c) Overall order?

**Solution:**
(a) Order w.r.t. A = 1
(b) Order w.r.t. B = 1 (not 2!)
(c) Overall order = 1 + 1 = **2**

**Note:** Stoichiometric coefficient of B is 2, but order w.r.t. B is 1.

### Level 2: JEE Main/Advanced

**Problem 2:** For a reaction

$$2A + B \rightarrow C + D$$

, the following data is obtained:

| Experiment | [A] (M) | [B] (M) | Initial Rate (M/s) |
| --- | --- | --- | --- |
| 1 | 0.1 | 0.1 | 2 × 10⁻³ |
| 2 | 0.2 | 0.1 | 8 × 10⁻³ |
| 3 | 0.1 | 0.2 | 4 × 10⁻³ |

Determine:
(a) Order with respect to A
(b) Order with respect to B
(c) Rate law
(d) Rate constant with units

**Solution:**

(a) Compare experiments 1 and 2 ([B] constant):

$$\frac{r_2}{r_1} = \frac{k[0.2]^m[0.1]^n}{k[0.1]^m[0.1]^n} = \frac{8 \times 10^{-3}}{2 \times 10^{-3}}$$

$$2^m = 4 \implies m = 2$$

**Order w.r.t. A = 2**

(b) Compare experiments 1 and 3 ([A] constant):

$$\frac{r_3}{r_1} = \frac{k[0.1]^m[0.2]^n}{k[0.1]^m[0.1]^n} = \frac{4 \times 10^{-3}}{2 \times 10^{-3}}$$

$$2^n = 2 \implies n = 1$$

**Order w.r.t. B = 1**

(c) **Rate law:**

$$\text{Rate} = k[A]^2[B]$$

(d) From experiment 1:

$$2 \times 10^{-3} = k(0.1)^2(0.1)$$

$$k = \frac{2 \times 10^{-3}}{0.001} = 2 \text{ M}^{-2}\text{s}^{-1}$$

**Units:** L² mol⁻² s⁻¹ or M⁻² s⁻¹

### Level 3: JEE Advanced

**Problem 3:** The decomposition of H₂O₂ follows the mechanism:

**Step 1:**

$$H_2O_2 + I^- \xrightarrow{slow} H_2O + IO^-$$

**Step 2:**

$$H_2O_2 + IO^- \xrightarrow{fast} H_2O + O_2 + I^-$$

Overall:

$$2H_2O_2 \rightarrow 2H_2O + O_2$$

Determine:
(a) Rate law
(b) Order of reaction
(c) Molecularity of each step
(d) Role of I⁻

**Solution:**

(a) **Rate-determining step (RDS)** is Step 1 (slow):

$$\text{Rate} = k[H_2O_2][I^-]$$

(b) **Order** = 1 + 1 = **2** (second order)

- First order in H₂O₂
- First order in I⁻

(c) **Molecularity:**

- Step 1: 2 molecules collide → **Molecularity = 2** (bimolecular)
- Step 2: 2 molecules collide → **Molecularity = 2** (bimolecular)

(d) **Role of I⁻:**
I⁻ is a **catalyst** (consumed in step 1, regenerated in step 2)

**Problem 4:** A reaction has order 0 with respect to A and order 2 with respect to B. If [A] is doubled and [B] is tripled, by what factor does the rate increase?

**Solution:**

Rate law:

$$\text{Rate} = k[A]^0[B]^2 = k[B]^2$$

Initial rate:

$$r_1 = k[B]^2$$

New rate:

$$r_2 = k(3[B])^2 = 9k[B]^2$$

$$\frac{r_2}{r_1} = \frac{9k[B]^2}{k[B]^2} = 9$$

**Answer:** Rate increases by factor of **9**

(Doubling [A] has no effect since order w.r.t. A is zero)

## Determining Order Experimentally

### Method 1: Initial Rate Method

Vary initial concentrations and measure initial rates.

**Procedure:**

1. Keep all concentrations constant except one
2. Measure how rate changes
3. Determine order for that reactant
4. Repeat for other reactants

(Illustrated in Problem 2 above)

### Method 2: Graphical Method

Plot different graphs and see which is linear:

| Order | Linear plot | Slope |
| --- | --- | --- |
| 0 | [A] vs t | -k |
| 1 | ln[A] vs t | -k |
| 2 | 1/[A] vs t | +k |

### Method 3: Half-Life Method

Compare half-lives at different initial concentrations:

- **Zero order:** t₁/₂ ∝ [A]₀
- **First order:** t₁/₂ independent of [A]₀
- **Second order:** t₁/₂ ∝ 1/[A]₀

See: [Half-Life](../half-life/index.md)

## Units of Rate Constant

The units of k depend on **overall order**:

$$\boxed{\text{Units of } k = (\text{mol L}^{-1})^{1-n} \times \text{time}^{-1}}$$

where n = overall order

| Order (n) | Units of k |
| --- | --- |
| 0 | mol L⁻¹ s⁻¹ |
| 1 | s⁻¹ |
| 2 | L mol⁻¹ s⁻¹ |
| 3 | L² mol⁻² s⁻¹ |

**Memory trick:** As order increases, k units get more complex (more L and mol⁻¹ terms)

## Complex Reactions and Mechanisms

Most reactions are **NOT elementary** - they proceed through multiple steps.

### Example: NO₂ + CO Reaction

**Overall:**

$$NO_2 + CO \rightarrow NO + CO_2$$

**Experimentally:**

$$\text{Rate} = k[NO_2]^2$$

Order = 2 (depends only on [NO₂]!)

**Why?** Proposed mechanism:

**Step 1 (slow):**

$$2NO_2 \rightarrow NO_3 + NO$$

(RDS)
**Step 2 (fast):**

$$NO_3 + CO \rightarrow NO_2 + CO_2$$

**Rate** = rate of slow step = k[NO₂]²

This explains why CO doesn’t appear in rate law even though it’s a reactant!

**Molecularity:**

- Step 1: Bimolecular (2)
- Step 2: Bimolecular (2)

**Overall order:** 2 (determined experimentally)

## Connection to Other Topics

### Link to Rate Law

- Order is determined from rate law expression
- See: [Rate Law](../rate-law/index.md)

### Link to Integrated Rate Equations

- Different orders give different integrated forms
- See: [Integrated Rate Equations](../integrated-rate-equations/index.md)

### Link to Half-Life

- Half-life dependence on [A]₀ varies with order
- See: [Half-Life](../half-life/index.md)

### Link to Catalysis

- Catalysts change mechanism (and thus molecularity of steps)
- Don’t change overall stoichiometry or order
- See: [Catalysis](../catalysis/index.md)

## JEE Previous Year Questions

**JEE Main 2021:** For the reaction

$$2A + B \rightarrow A_2B$$

, if the rate law is Rate = k[A][B]², what is the order?

**Answer:** 1 + 2 = **3** (third order)

**JEE Advanced 2018:** Which statement is correct?
(a) Order and molecularity are always equal
(b) Molecularity can be fractional
(c) Order is always an integer
(d) Molecularity is defined for elementary reactions only

**Answer:** (d)

**Explanation:**
(a) Wrong - order ≠ molecularity for complex reactions
(b) Wrong - molecularity is always integer
(c) Wrong - order can be fractional
(d) **Correct** - molecularity is meaningful only for elementary steps

## Quick Revision Table

| Property | Order | Molecularity |
| --- | --- | --- |
| How determined? | Experimental | Theoretical |
| Can be zero? | ✓ | ✗ |
| Can be fraction? | ✓ | ✗ |
| Max value? | No limit | 3 (practical) |
| For complex reaction? | ✓ (overall) | ✗ (only steps) |
| From rate law? | ✓ | ✗ |
| From mechanism? | ✗ | ✓ |

## Summary

**Order** and **molecularity** are two fundamental but distinct concepts in chemical kinetics:

1. **Order** is experimental and mathematical
2. **Molecularity** is theoretical and mechanistic
3. For **elementary reactions**, order = molecularity
4. For **complex reactions**, order ≠ stoichiometry
5. Always determine order experimentally
6. Never assume order from balanced equation

Mastering this distinction is crucial for JEE success and understanding reaction mechanisms!

---

**Previous Topic:** [Factors Affecting Rate](../factors-affecting-rate/index.md)
**Next Topic:** [Rate Law](../rate-law/index.md)

From TestGuru · our mock-test platform

## You've read Order and Molecularity of Reaction.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=chemical-kinetics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fchemical-kinetics%2Forder-molecularity%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/chemical-kinetics/order-molecularity/",this.page.identifier="/chemistry/chemical-kinetics/order-molecularity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionRate" id="anim-reactionRate-1795396419427386505"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionRate-1795396419427386505")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/chemical-kinetics/order-molecularity/](https://jeenotes.in/chemistry/chemical-kinetics/order-molecularity/) · raw HTML: `offline/chemistry/chemical-kinetics/order-molecularity/index.html`_
