---
title: "Dimensional Analysis"
source: "https://jeenotes.in/physics/units-measurements/dimensional-analysis/"
description: "Master dimensional analysis for checking equations and deriving formulas in JEE Physics"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 7"
html: "../../../../offline/physics/units-measurements/dimensional-analysis/index.html"
extracted: "2026-11-23"
---

> Master dimensional analysis for checking equations and deriving formulas in JEE Physics

## Prerequisites

Before studying dimensional analysis, you should understand:

- [SI Units](../si-units/index.md) — Base and derived units
- [Dimensions](../dimensions/index.md) — Dimensional formulas of quantities

## What is Dimensional Analysis?

**Dimensional analysis** is a powerful mathematical tool that uses the dimensions of physical quantities to:

1. Check if equations are **dimensionally correct**
2. **Derive** relationships between physical quantities
3. **Convert** units from one system to another

> **★ Key point · Real Life: Engineering Safety**
>
> Before NASA launches a rocket, engineers use dimensional analysis to verify thousands of equations. A single dimensional error could mean the difference between a successful mission and a $327 million disaster (like the Mars Climate Orbiter in 1999).

## Applications of Dimensional Analysis

### 1. Checking Dimensional Correctness

**Principle:** A physical equation is **dimensionally correct** if all terms have the same dimensions.

> **★ Key point · Key Principle**
>
> $$\boxed{\text{If } A = B + C, \text{ then } [A] = [B] = [C]}$$
>
> You can only add/subtract quantities with **identical dimensions**.

#### Examples

> **↗ Connection · Example 1: Check s = ut + ½at²**
>
> **Given:** $s = ut + \frac{1}{2}at^2$
>
> **LHS:** [s] = [L]
>
> **RHS Term 1:** [ut] = [LT⁻¹][T] = [L] ✓
>
> **RHS Term 2:** [½at²] = [LT⁻²][T²] = [L] ✓
>
> All terms = [L]
>
> **Conclusion:** ✓ Dimensionally correct!

> **↗ Connection · Example 2: Check v² = u² + 2as**
>
> **LHS:** [v²] = [LT⁻¹]² = [L²T⁻²]
>
> **RHS:**
>
> - [u²] = [L²T⁻²] ✓

> - [2as] = [LT⁻²][L] = [L²T⁻²] ✓
>
> **Conclusion:** ✓ Dimensionally correct!

> **⚠ Trap · Common Mistake**
>
> **Wrong equation:** $s = ut + at$ (missing the square on time)
>
> **Check:**
>
> - [ut] = [L]

> - [at] = [LT⁻²][T] = [LT⁻¹] ≠ [L] ✗
>
> This equation is **dimensionally INCORRECT**!

### 2. Deriving Relationships (Most Important for JEE)

When a physical quantity depends on several other quantities, we can find the relationship using dimensional analysis.

**Standard Method:**

1. **Identify** the quantity to derive and the quantities it depends on
2. **Assume** a power-law relationship: $Q = k \cdot A^a B^b C^c ...$
   (where k is dimensionless constant)
3. **Write dimensions** of all quantities
4. **Equate powers** of M, L, T on both sides
5. **Solve** the system of equations
6. **Write** the final relationship

> **↗ Connection · Classic Example: Time Period of Simple Pendulum**
>
> **Problem:** The time period T of a simple pendulum depends on:
>
> - Length of pendulum (l)

> - Mass of bob (m)

> - Acceleration due to gravity (g)
>
> Find the relationship.
>
> **Solution:**
>
> **Step 1:** Assume $T = k \cdot l^a m^b g^c$
>
> **Step 2:** Write dimensions:
>
> - [T] = [T]

> - [l] = [L]

> - [m] = [M]

> - [g] = [LT⁻²]
>
> **Step 3:** Substitute:
>
> $$[T] = [L]^a [M]^b [LT^{-2}]^c$$

$$[M^0 L^0 T^1] = [M^b L^{a+c} T^{-2c}]$$
>
> **Step 4:** Equate powers:
>
> - For M: 0 = b → **b = 0**

> - For T: 1 = -2c → **c = -1/2**

> - For L: 0 = a + c → a = -c → **a = 1/2**
>
> **Step 5:** Final relation:
>
> $$\boxed{T = k\sqrt{\frac{l}{g}}}$$
>
> The actual formula is $T = 2\pi\sqrt{l/g}$, where k = 2π.
>
> **Key Insight:** Time period is **independent of mass**! Dimensional analysis revealed this.

### Interactive Demo: Visualize Dimensional Analysis

Explore how to derive physical relationships using dimensional analysis.

> **◐ Important Limitation**
>
> Dimensional analysis **cannot determine**:
>
> - Dimensionless constants (like 2π above)

> - Whether quantities appear in numerator or denominator (we get √(l/g) or √(g/l) — need physics!)

> - The exact form when exponential, logarithmic, or trigonometric functions are involved

### More Derivation Examples

> **↗ Connection · Example: Stokes' Law**
>
> **Problem:** The viscous force F on a sphere moving through a fluid depends on:
>
> - Radius of sphere (r)

> - Velocity of sphere (v)

> - Coefficient of viscosity (η), where [η] = [ML⁻¹T⁻¹]
>
> Derive the relation.
>
> **Solution:**
>
> Assume: $F = k \cdot r^a v^b \eta^c$
>
> Dimensions:
>
> $$[MLT^{-2}] = [L]^a [LT^{-1}]^b [ML^{-1}T^{-1}]^c$$

$$[MLT^{-2}] = [M^c L^{a+b-c} T^{-b-c}]$$
>
> Equating powers:
>
> - M: 1 = c → **c = 1**

> - T: -2 = -b - c = -b - 1 → **b = 1**

> - L: 1 = a + b - c = a + 1 - 1 → **a = 1**
>
> $$\boxed{F = k \cdot r \cdot v \cdot \eta = k \eta rv}$$
>
> The actual Stokes’ law: $F = 6\pi\eta rv$ (k = 6π)

> **↗ Connection · Example: Planck's Constant**
>
> **Problem:** The energy E of a photon depends on its frequency ν. If E = hν, find dimensions of Planck’s constant h.
>
> **Solution:**
>
> $$E = h\nu$$

$$h = \frac{E}{\nu}$$

$$[h] = \frac{[E]}{[\nu]} = \frac{[ML^2T^{-2}]}{[T^{-1}]}$$

$$\boxed{[h] = [ML^2T^{-1}]}$$
>
> This is **angular momentum** dimension! (Indeed, h/2π is the quantum of angular momentum)

### 3. Converting Units Between Systems

Dimensional analysis helps convert quantities from one unit system to another.

**Formula for conversion:**

$$n_2 u_2 = n_1 u_1 \left(\frac{M_1}{M_2}\right)^a \left(\frac{L_1}{L_2}\right)^b \left(\frac{T_1}{T_2}\right)^c$$

where:

- n₁, u₁ = numerical value and unit in system 1
- n₂, u₂ = numerical value and unit in system 2
- a, b, c = powers in dimensional formula [MᵃLᵇTᶜ]

> **↗ Connection · Example: Convert Force from CGS to SI**
>
> **Problem:** Convert 1 dyne to newtons.
>
> **Solution:**
>
> Force: [F] = [MLT⁻²] → a = 1, b = 1, c = -2
>
> CGS system (system 1):
>
> - M₁ = 1 gram

> - L₁ = 1 cm

> - T₁ = 1 s
>
> SI system (system 2):
>
> - M₂ = 1 kg = 1000 g

> - L₂ = 1 m = 100 cm

> - T₂ = 1 s
>
> $$n_2 = 1 \times \left(\frac{1}{1000}\right)^1 \left(\frac{1}{100}\right)^1 \left(\frac{1}{1}\right)^{-2}$$

$$n_2 = \frac{1}{1000} \times \frac{1}{100} = \frac{1}{10^5}$$

$$\boxed{1 \text{ dyne} = 10^{-5} \text{ N}}$$

## Limitations of Dimensional Analysis

> **⚠ Trap · What Dimensional Analysis CANNOT Do**
>
> 1. **Cannot find dimensionless constants**
>
>    - We got $T = k\sqrt{l/g}$ but not k = 2π

> 2. **Cannot distinguish between similar quantities**
>
>    - Work and torque both have [ML²T⁻²]

>    - Cannot tell which is which

> 3. **Cannot handle addition/subtraction**
>
>    - Equation like $F = ma + mg$ cannot be derived

> 4. **Cannot work with transcendental functions**
>
>    - $e^x$, $\sin x$, $\log x$ must have dimensionless arguments

> 5. **Cannot determine exact form**
>
>    - Could be $F \propto v$ or $F \propto v²$ if both work dimensionally

> 6. **May give wrong numerator/denominator**
>
>    - Could get $\sqrt{g/l}$ instead of $\sqrt{l/g}$ — need physics!

## Special Techniques

### Technique 1: Dimensionless Products

When deriving formulas, look for dimensionless combinations.

> **↗ Connection · Example: Drag Force on Sphere**
>
> For a sphere moving in fluid, dimensionless number:
>
> $$\text{Reynolds number} = \frac{\rho v d}{\eta}$$
>
> where ρ = density, v = velocity, d = diameter, η = viscosity
>
> Check: $[\rho vd/\eta] = \frac{[ML^{-3}][LT^{-1}][L]}{[ML^{-1}T^{-1}]} = [M^0L^0T^0] = 1$ ✓

### Technique 2: Matching Unknown Dimensions

If equation contains unknown constant with unknown dimensions:

> **↗ Connection · Example**
>
> Given: $F = Av + Bv^3$, find dimensions of A and B.
>
> **Solution:**
>
> From homogeneity, both terms must equal [F] = [MLT⁻²]
>
> Term 1: $[A][v] = [MLT^{-2}]$
>
> $$[A] = \frac{[MLT^{-2}]}{[LT^{-1}]} = \boxed{[MT^{-1}]}$$
>
> Term 2: $[B][v^3] = [MLT^{-2}]$
>
> $$[B] = \frac{[MLT^{-2}]}{[L^3T^{-3}]} = \boxed{[ML^{-2}T^1]}$$

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> Check if the equation $v = u + at$ is dimensionally correct.
>
> **Solution:**
>
> - [v] = [LT⁻¹]

> - [u] = [LT⁻¹]

> - [at] = [LT⁻²][T] = [LT⁻¹]
>
> All terms have [LT⁻¹]. **✓ Correct!**

> **↗ Connection · Problem 2**
>
> The velocity v of sound in a gas depends on pressure P and density ρ. Find the relation.
>
> **Solution:**
>
> Let $v = k P^a \rho^b$
>
> Dimensions:
>
> - [v] = [LT⁻¹]

> - [P] = [ML⁻¹T⁻²]

> - [ρ] = [ML⁻³]
>
> $$[LT^{-1}] = [ML^{-1}T^{-2}]^a [ML^{-3}]^b$$

$$[LT^{-1}] = [M^{a+b} L^{-a-3b} T^{-2a}]$$
>
> Equating:
>
> - M: 0 = a + b → b = -a

> - T: -1 = -2a → **a = 1/2**

> - L: 1 = -a - 3b = -1/2 + 3/2 ✓
>
> Therefore: **b = -1/2**
>
> $$\boxed{v = k\sqrt{\frac{P}{\rho}}}$$
>
> (Actual: $v = \sqrt{\gamma P/\rho}$ where γ is specific heat ratio)

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> The centripetal force F on a body of mass m moving in a circle depends on mass m, velocity v, and radius r. Derive the formula.
>
> **Solution:**
>
> Let $F = k m^a v^b r^c$
>
> $$[MLT^{-2}] = [M]^a [LT^{-1}]^b [L]^c$$

$$[MLT^{-2}] = [M^a L^{b+c} T^{-b}]$$
>
> Equating:
>
> - M: 1 = a → **a = 1**

> - T: -2 = -b → **b = 2**

> - L: 1 = b + c = 2 + c → **c = -1**
>
> $$\boxed{F = k \frac{mv^2}{r}}$$
>
> (k = 1, so $F = mv^2/r$)

> **↗ Connection · Problem 4**
>
> If force F, length L, and time T are fundamental units, express mass in terms of F, L, T.
>
> **Solution:**
>
> From $F = ma$:
>
> $$m = \frac{F}{a} = \frac{F}{L/T^2} = \frac{FT^2}{L}$$

$$\boxed{[m] = [F T^2 L^{-1}]}$$
>
> In new system: mass has dimensions F¹L⁻¹T²

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> The period of oscillation T of a drop of liquid depends on:
>
> - Radius r

> - Density ρ

> - Surface tension S (dimensions [MT⁻²])
>
> Find the relationship.
>
> **Solution:**
>
> Let $T = k r^a \rho^b S^c$
>
> $$[T] = [L]^a [ML^{-3}]^b [MT^{-2}]^c$$

$$[T] = [M^{b+c} L^{a-3b} T^{-2c}]$$
>
> Equating:
>
> - M: 0 = b + c → **b = -c**

> - T: 1 = -2c → **c = -1/2**

> - Therefore: **b = 1/2**

> - L: 0 = a - 3b = a - 3/2 → **a = 3/2**
>
> $$\boxed{T = k r^{3/2} \sqrt{\frac{\rho}{S}} = k\sqrt{\frac{r^3\rho}{S}}}$$
>
> (Actual formula: $T = 2\pi\sqrt{r^3\rho/S}$)

> **↗ Connection · Problem 6**
>
> In the equation $P = \frac{a}{V} - \frac{b}{V^2}$, where P is pressure and V is volume, find dimensions of a and b.
>
> **Solution:**
>
> From homogeneity, both terms must equal [P] = [ML⁻¹T⁻²]
>
> **For term 1:**
>
> $$\frac{[a]}{[V]} = [P]$$

$$[a] = [P][V] = [ML^{-1}T^{-2}][L^3]$$

$$\boxed{[a] = [ML^2T^{-2}]}$$
>
> (dimension of energy!)
>
> **For term 2:**
>
> $$\frac{[b]}{[V^2]} = [P]$$

$$[b] = [P][V^2] = [ML^{-1}T^{-2}][L^6]$$

$$\boxed{[b] = [ML^5T^{-2}]}$$

## Strategy for JEE Problems

> **★ Key point · Problem-Solving Strategy**
>
> **For checking equations:**
>
> 1. Find dimensions of each term separately

> 2. Check if all terms match

> 3. Special attention to arguments of sin, cos, log, exp (must be dimensionless)
>
> **For deriving formulas:**
>
> 1. List all relevant quantities

> 2. Assume power-law relationship

> 3. Write dimensional formula for each

> 4. Set up equations for M, L, T

> 5. Solve systematically

> 6. Write final relation (with “k” for unknown constant)
>
> **For conversions:**
>
> 1. Identify dimensional formula [MᵃLᵇTᶜ]

> 2. Note base unit ratios

> 3. Apply conversion formula

> 4. Calculate carefully!

## Summary Table

| Application | What It Can Do | What It Cannot Do |
| --- | --- | --- |
| **Check equations** | Verify dimensional correctness | Prove equation is physically correct |
| **Derive formulas** | Find power-law relationships | Find numerical constants |
| **Unit conversion** | Convert between systems | — |
| **Find dimensions** | Determine dimensions of constants | Distinguish similar quantities |

---

## Related Topics

### Within Units and Measurements

- [SI Units](../si-units/index.md) — Foundation of dimensional analysis
- [Dimensions](../dimensions/index.md) — Dimensional formulas needed here
- [Errors](../errors/index.md) — Error propagation uses dimensions
- [Significant Figures](../significant-figures/index.md) — Precision in dimensional calculations

### Connected Chapters

- [Kinematics](../../kinematics/index.md) — Deriving kinematic formulas
- [Newton’s Laws](../../laws-of-motion/index.md) — Checking force equations
- [Gravitation](../../gravitation/index.md) — Deriving orbital formulas
- [Oscillations](../../oscillations-waves/index.md) — Period of pendulum, springs
- [Fluid Mechanics](../../properties-solids-liquids/index.md) — Viscosity, surface tension formulas

### Math Connections

- [Algebra](../../../mathematics/index.md) — Solving simultaneous equations
- [Logarithms](../../../mathematics/index.md) — Dimensionless arguments

---

From TestGuru · our mock-test platform

## You've read Dimensional Analysis.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=units-measurements&tg_exam=jee-main&tg_page=%2Fphysics%2Funits-measurements%2Fdimensional-analysis%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/units-measurements/dimensional-analysis/",this.page.identifier="/physics/units-measurements/dimensional-analysis/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="dimensionalAnalysis" id="anim-dimensionalAnalysis-1795396424448395701"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-dimensionalAnalysis-1795396424448395701")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/units-measurements/dimensional-analysis/](https://jeenotes.in/physics/units-measurements/dimensional-analysis/) · raw HTML: `offline/physics/units-measurements/dimensional-analysis/index.html`_
