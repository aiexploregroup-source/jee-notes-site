---
title: "Dimensional Formulas"
source: "https://jeenotes.in/physics/units-measurements/dimensions/"
description: "Master dimensional formulas of physical quantities for JEE Physics"
updated: "2026-08-01"
reading_time: "7 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 7"
html: "../../../../offline/physics/units-measurements/dimensions/index.html"
extracted: "2026-11-23"
---

> Master dimensional formulas of physical quantities for JEE Physics

## Prerequisites

Before studying dimensional formulas, you should understand:

- [SI Units](../si-units/index.md) — Base and derived units

## What Are Dimensions?

**Dimensions** of a physical quantity are the powers (exponents) to which the base quantities are raised to represent that quantity.

> **★ Key point · Real Life: Building a House**
>
> Think of dimensions like a recipe. Just as a cake recipe tells you how much flour, sugar, and eggs you need, dimensional formulas tell you how physical quantities are “made” from fundamental quantities like mass, length, and time.

## The Seven Fundamental Dimensions

We use square brackets [ ] to denote dimensions:

| Base Quantity | Symbol | Dimension |
| --- | --- | --- |
| **Mass** | M | [M] |
| **Length** | L | [L] |
| **Time** | T | [T] |
| **Electric Current** | I or A | [I] or [A] |
| **Temperature** | θ or K | [θ] or [K] |
| **Amount of Substance** | N or mol | [N] or [mol] |
| **Luminous Intensity** | J or cd | [J] or [cd] |

> **◐ In simple terms · For JEE: Focus on MLT**
>
> Most JEE problems use only the first three: **M** (Mass), **L** (Length), and **T** (Time). Electrical quantities also use **I** (Current). Temperature **θ** appears in thermodynamics.

## Dimensional Formula vs Unit

**Don’t confuse these two concepts:**

| Physical Quantity | **Unit** | **Dimensional Formula** |
| --- | --- | --- |
| Velocity | m/s | [M⁰L¹T⁻¹] or [LT⁻¹] |
| Force | newton (N) | [MLT⁻²] |
| Energy | joule (J) | [ML²T⁻²] |

- **Unit** = actual measurement standard (meter, kilogram, etc.)
- **Dimensional Formula** = abstract relationship between base quantities

## Writing Dimensional Formulas: Step-by-Step

### Method 1: From Definition/Formula

**Example: Velocity**

$$v = \frac{\text{displacement}}{\text{time}} = \frac{L}{T}$$

$$\boxed{[v] = [L][T]^{-1} = [M^0 L^1 T^{-1}]}$$

**Example: Force**

$$F = ma = M \times \frac{L}{T^2}$$

$$\boxed{[F] = [M][L][T]^{-2} = [M^1 L^1 T^{-2}]}$$

### Method 2: From SI Unit

**Example: Pressure**

Unit: Pascal (Pa) = N/m² = kg/(m·s²)

$$\boxed{[P] = \frac{[M]}{[L][T]^2} = [M^1 L^{-1} T^{-2}]}$$

> **★ Key point · Golden Rule**
>
> In dimensional formulas:
>
> - Powers can be **positive, negative, or zero**

> - Powers are always **rational numbers**

> - We write [M⁰L¹T⁻¹] or simply [LT⁻¹] (omitting M⁰)

### Interactive Demo: Visualize Dimensional Formulas

See how physical quantities are composed from fundamental dimensions.

## Comprehensive Dimensional Formula Table

### 1. Mechanical Quantities

| Physical Quantity | Symbol | Formula/Definition | Dimensional Formula | SI Unit |
| --- | --- | --- | --- | --- |
| **Length** | l, d, r | — | [L] | m |
| **Mass** | m | — | [M] | kg |
| **Time** | t | — | [T] | s |
| **Area** | A | l² | [L²] | m² |
| **Volume** | V | l³ | [L³] | m³ |
| **Density** | ρ | m/V | [ML⁻³] | kg/m³ |
| **Velocity** | v | s/t | [LT⁻¹] | m/s |
| **Acceleration** | a | v/t | [LT⁻²] | m/s² |
| **Momentum** | p | mv | [MLT⁻¹] | kg·m/s |
| **Force** | F | ma | [MLT⁻²] | N |
| **Impulse** | J | Ft | [MLT⁻¹] | N·s |
| **Work/Energy** | W, E | Fs | [ML²T⁻²] | J |
| **Power** | P | W/t | [ML²T⁻³] | W |
| **Pressure** | p | F/A | [ML⁻¹T⁻²] | Pa |
| **Angular velocity** | ω | θ/t | [T⁻¹] | rad/s |
| **Angular acceleration** | α | ω/t | [T⁻²] | rad/s² |
| **Moment of inertia** | I | mr² | [ML²] | kg·m² |
| **Torque** | τ | Fr | [ML²T⁻²] | N·m |
| **Angular momentum** | L | Iω | [ML²T⁻¹] | kg·m²/s |

> **◐ Important Observation**
>
> **Work, Energy, and Torque** all have the same dimensions [ML²T⁻²], but:
>
> - Work and Energy have the same unit: **joule (J)**

> - Torque has unit: **N·m** (not joule!)
>
> This is because torque is a **vector product** (r × F) while work is a **scalar product** (F · s).

### 2. Thermal Quantities

| Physical Quantity | Symbol | Dimensional Formula | SI Unit |
| --- | --- | --- | --- |
| **Temperature** | T, θ | [K] or [θ] | K |
| **Heat** | Q | [ML²T⁻²] | J |
| **Specific heat** | s, c | [L²T⁻²K⁻¹] | J/(kg·K) |
| **Latent heat** | L | [L²T⁻²] | J/kg |
| **Thermal conductivity** | k | [MLT⁻³K⁻¹] | W/(m·K) |
| **Stefan’s constant** | σ | [MT⁻³K⁻⁴] | W/(m²·K⁴) |
| **Boltzmann constant** | k_B | [ML²T⁻²K⁻¹] | J/K |
| **Gas constant** | R | [ML²T⁻²K⁻¹mol⁻¹] | J/(mol·K) |

### 3. Electricity and Magnetism

| Physical Quantity | Symbol | Dimensional Formula | SI Unit |
| --- | --- | --- | --- |
| **Charge** | q, Q | [IT] or [AT] | C |
| **Current** | I | [I] or [A] | A |
| **Voltage/EMF** | V, ε | [ML²T⁻³I⁻¹] | V |
| **Resistance** | R | [ML²T⁻³I⁻²] | Ω |
| **Capacitance** | C | [M⁻¹L⁻²T⁴I²] | F |
| **Electric field** | E | [MLT⁻³I⁻¹] | V/m or N/C |
| **Magnetic field** | B | [MT⁻²I⁻¹] | T |
| **Magnetic flux** | Φ | [ML²T⁻²I⁻¹] | Wb |
| **Inductance** | L | [ML²T⁻²I⁻²] | H |
| **Permittivity** | ε₀ | [M⁻¹L⁻³T⁴I²] | F/m |
| **Permeability** | μ₀ | [MLT⁻²I⁻²] | H/m |

### 4. Waves and Oscillations

| Physical Quantity | Symbol | Dimensional Formula | SI Unit |
| --- | --- | --- | --- |
| **Frequency** | f, ν | [T⁻¹] | Hz |
| **Wavelength** | λ | [L] | m |
| **Wave velocity** | v | [LT⁻¹] | m/s |
| **Amplitude** | A | [L] | m |
| **Time period** | T | [T] | s |
| **Spring constant** | k | [MT⁻²] | N/m |
| **Surface tension** | γ, σ | [MT⁻²] | N/m |
| **Viscosity** | η | [ML⁻¹T⁻¹] | Pa·s |

### 5. Modern Physics

| Physical Quantity | Symbol | Dimensional Formula | SI Unit |
| --- | --- | --- | --- |
| **Planck’s constant** | h | [ML²T⁻¹] | J·s |
| **Work function** | φ | [ML²T⁻²] | J or eV |
| **Radioactive decay constant** | λ | [T⁻¹] | s⁻¹ |
| **Half-life** | t₁/₂ | [T] | s |

### 6. Special Constants

| Physical Quantity | Symbol | Dimensional Formula | SI Unit |
| --- | --- | --- | --- |
| **Gravitational constant** | G | [M⁻¹L³T⁻²] | N·m²/kg² |
| **Acceleration due to gravity** | g | [LT⁻²] | m/s² |
| **Universal gas constant** | R | [ML²T⁻²K⁻¹mol⁻¹] | J/(mol·K) |
| **Avogadro’s number** | N_A | [mol⁻¹] | mol⁻¹ |

## Dimensionless Quantities

Some quantities have **no dimensions** (all powers are zero):

| Quantity | Type | Example |
| --- | --- | --- |
| **Pure numbers** | Counting | 1, 2, π, e |
| **Ratios of same quantities** | Relative | Strain = ΔL/L |
| **Angles** | Trigonometric | θ, sin θ, cos θ, tan θ |
| **Relative density** | Ratio | ρ_substance/ρ_water |
| **Refractive index** | Ratio | n = c/v |
| **Coefficient of friction** | Ratio | μ = F_friction/F_normal |
| **Poisson’s ratio** | Ratio | σ = -lateral strain/longitudinal strain |
| **Reynold’s number** | Dimensionless parameter | Re = ρvL/η |

$$\boxed{[\text{Dimensionless}] = [M^0 L^0 T^0] = [1]}$$

> **⚠ Trap · Common Mistake**
>
> **Mistake:** Thinking angles have dimensions because they’re measured in degrees or radians.
>
> **Fact:** Angles are dimensionless! Radians are defined as arc length/radius = L/L = 1 (dimensionless).
>
> Same for **solid angle** (steradians): area/radius² = L²/L² = 1.

## Principle of Homogeneity of Dimensions

> **★ Key point · Fundamental Principle**
>
> **In any correct physical equation, the dimensions of all terms on both sides must be the same.**
>
> This is called the **Principle of Homogeneity**.

### Example: Checking Homogeneity

$$s = ut + \frac{1}{2}at^2$$

Check each term:

- [s] = [L]
- [ut] = [LT⁻¹][T] = [L] ✓
- [½at²] = [LT⁻²][T²] = [L] ✓

All terms have dimension [L], so the equation is **dimensionally correct**.

> **◐ Important**
>
> - Only terms with **same dimensions** can be added or subtracted

> - Dimensionless constants (like ½, π, e) don’t affect dimensional analysis

> - Arguments of exponential, logarithmic, and trigonometric functions must be **dimensionless**

## Memory Tricks

> **★ Key point · Trick 1: Power = Force × Velocity**
>
> $$[P] = [F][v] = [MLT^{-2}][LT^{-1}] = [ML^2T^{-3}]$$
>
> Remember: “Power is Force times Velocity” → Powers add when multiplying!

> **★ Key point · Trick 2: Energy Family**
>
> All have [ML²T⁻²]:
>
> - Work

> - Energy (kinetic, potential, heat)

> - Torque

> - Moment of force
>
> **Memory:** “WET Moments” = Work, Energy, Torque, Moments

> **★ Key point · Trick 3: Per Unit Area → Add L⁻²**
>
> - Pressure = Force/**Area** → [MLT⁻²][L⁻²] = [ML⁻¹T⁻²]

> - Surface tension = Force/**Length** → [MLT⁻²][L⁻¹] = [MT⁻²]

> - Stress = Force/**Area** → [ML⁻¹T⁻²]

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> Find the dimensional formula of kinetic energy using KE = ½mv².
>
> **Solution:**
>
> $$[KE] = [m][v]^2 = [M][LT^{-1}]^2$$

$$= [M][L^2T^{-2}]$$

$$= \boxed{[ML^2T^{-2}]}$$

> **↗ Connection · Problem 2**
>
> What are the dimensions of universal gravitational constant G in the equation F = Gm₁m₂/r²?
>
> **Solution:**
>
> $$F = \frac{Gm_1m_2}{r^2}$$

$$G = \frac{Fr^2}{m_1m_2}$$

$$[G] = \frac{[MLT^{-2}][L^2]}{[M][M]} = \frac{[ML^3T^{-2}]}{[M^2]}$$

$$= \boxed{[M^{-1}L^3T^{-2}]}$$

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> Check if the equation $v^2 = u^2 + 2as$ is dimensionally correct.
>
> **Solution:**

> LHS: $[v^2] = [LT^{-1}]^2 = [L^2T^{-2}]$
>
> RHS:
>
> - $[u^2] = [L^2T^{-2}]$

> - $[2as] = [LT^{-2}][L] = [L^2T^{-2}]$
>
> Both terms on RHS have [L²T⁻²], and LHS = RHS.
>
> **Answer:** ✓ Dimensionally correct!

> **↗ Connection · Problem 4**
>
> Find the dimensions of a/b in the equation P = (a - t²)/bx, where P = pressure, t = time, x = distance.
>
> **Solution:**
>
> $$P = \frac{a - t^2}{bx}$$
>
> Since (a - t²) must have same dimensions as t²:
>
> $$[a] = [t^2] = [T^2]$$
>
> From dimensional homogeneity:
>
> $$[P] = \frac{[a]}{[b][x]} = \frac{[T^2]}{[b][L]}$$

$$[ML^{-1}T^{-2}] = \frac{[T^2]}{[b][L]}$$

$$[b] = \frac{[T^2]}{[ML^{-1}T^{-2}][L]} = \frac{[T^2]}{[MT^{-2}]} = [M^{-1}T^4]$$

$$\frac{[a]}{[b]} = \frac{[T^2]}{[M^{-1}T^4]} = \boxed{[MT^{-2}]}$$
>
> This is the dimension of **surface tension** or **spring constant**!

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> The velocity v of water waves depends on wavelength λ, density ρ, and acceleration due to gravity g. Find the relation between them using dimensional analysis.
>
> **Solution:**

> Let $v = k\lambda^a \rho^b g^c$ (k is dimensionless)
>
> Dimensions:
>
> - [v] = [LT⁻¹]

> - [λ] = [L]

> - [ρ] = [ML⁻³]

> - [g] = [LT⁻²]
>
> $$[LT^{-1}] = [L]^a [ML^{-3}]^b [LT^{-2}]^c$$

$$[LT^{-1}] = [M^b L^{a-3b+c} T^{-2c}]$$
>
> Comparing powers:
>
> - For M: 0 = b → **b = 0**

> - For T: -1 = -2c → **c = 1/2**

> - For L: 1 = a - 3b + c = a + 1/2 → **a = 1/2**
>
> $$\boxed{v = k\sqrt{\lambda g}}$$
>
> (The actual formula is v = √(gλ/2π), where k = 1/√(2π))

## Quick Reference

| Dimensional Formula | Physical Quantities |
| --- | --- |
| [L] | Length, wavelength, amplitude |
| [T] | Time, time period, half-life |
| [LT⁻¹] | Velocity, wave velocity |
| [LT⁻²] | Acceleration, gravity |
| [MLT⁻¹] | Momentum, impulse |
| [MLT⁻²] | Force, weight, thrust |
| [ML²T⁻²] | Work, energy, torque |
| [ML²T⁻³] | Power |
| [ML⁻¹T⁻²] | Pressure, stress |
| [ML⁻³] | Density |
| [MT⁻²] | Surface tension, spring constant |
| [ML⁻¹T⁻¹] | Viscosity |
| [T⁻¹] | Frequency, angular velocity, decay constant |

---

## Related Topics

### Within Units and Measurements

- [SI Units](../si-units/index.md) — Foundation of dimensional analysis
- [Dimensional Analysis](../dimensional-analysis/index.md) — Applications and problem-solving
- [Errors](../errors/index.md) — Connecting dimensions to error propagation
- [Significant Figures](../significant-figures/index.md) — Precision in dimensional calculations

### Connected Chapters

- [Kinematics](../../kinematics/index.md) — Dimensions in motion
- [Newton’s Laws](../../laws-of-motion/index.md) — Force dimensions
- [Gravitation](../../gravitation/index.md) — Gravitational constant dimensions
- [Electrostatics](../../electrostatics/index.md) — Electrical quantity dimensions

---

From TestGuru · our mock-test platform

## You've read Dimensional Formulas.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=units-measurements&tg_exam=jee-main&tg_page=%2Fphysics%2Funits-measurements%2Fdimensions%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/units-measurements/dimensions/",this.page.identifier="/physics/units-measurements/dimensions/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="dimensionalAnalysis" id="anim-dimensionalAnalysis-1795396424456491341"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-dimensionalAnalysis-1795396424456491341")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/units-measurements/dimensions/](https://jeenotes.in/physics/units-measurements/dimensions/) · raw HTML: `offline/physics/units-measurements/dimensions/index.html`_
