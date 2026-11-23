---
title: "Elastic Moduli"
source: "https://jeenotes.in/physics/properties-solids-liquids/elastic-moduli/"
description: "Master Young's modulus, bulk modulus, and shear modulus for JEE Physics"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 8"
html: "../../../../offline/physics/properties-solids-liquids/elastic-moduli/index.html"
extracted: "2026-11-23"
---

> Master Young's modulus, bulk modulus, and shear modulus for JEE Physics

## Prerequisites

Before studying elastic moduli, make sure you understand:

- [Stress and Strain](../stress-strain/index.md) — Foundation concepts of elasticity

## What is an Elastic Modulus?

An **elastic modulus** is a measure of a material’s **stiffness** or resistance to deformation.

$$\boxed{\text{Elastic Modulus} = \frac{\text{Stress}}{\text{Strain}}}$$

**Key Points:**

- Higher modulus = stiffer material = less deformation for same stress
- Unit: Pa (Pascal) or N/m²
- Dimensions: [ML⁻¹T⁻²] (same as stress and pressure)

There are **three** types of elastic moduli, corresponding to three types of deformation:

| Modulus | Type of Stress | Type of Strain | Deformation |
| --- | --- | --- | --- |
| **Young’s Modulus (Y)** | Tensile/Compressive | Longitudinal | Change in length |
| **Bulk Modulus (K)** | Hydraulic | Volume | Change in volume |
| **Shear Modulus (η or G)** | Shearing | Shearing | Change in shape |

## Young’s Modulus (Y)

**Young’s Modulus** measures resistance to **change in length** under tensile or compressive stress.

$$\boxed{Y = \frac{\text{Tensile Stress}}{\text{Longitudinal Strain}} = \frac{F/A}{\Delta L/L}}$$

$$\boxed{Y = \frac{FL}{A \cdot \Delta L}}$$

where:

- F = applied force
- A = cross-sectional area
- L = original length
- ΔL = change in length

### Interactive Demo: Visualize Elastic Moduli

Explore how different materials respond to stretching, compression, and shear forces.

**Alternative form (from Hooke’s law for wire):**

For a wire: $F = \frac{YA}{L} \cdot \Delta L$

This looks like F = kx where spring constant $k = \frac{YA}{L}$

> **★ Key point · Real Life: Guitar Strings**
>
> When you tune a guitar, you adjust the **tension** in strings. Thicker strings (larger A) need more force to achieve the same stretch (ΔL). Longer strings (larger L) are easier to stretch. The material (Y) determines the characteristic sound — steel strings (high Y) sound bright and crisp, nylon strings (lower Y) sound mellow and warm.

### Typical Values of Young’s Modulus

| Material | Young’s Modulus (Pa) | Young’s Modulus (GPa) |
| --- | --- | --- |
| **Steel** | 2 × 10¹¹ | 200 |
| **Iron** | 1.9 × 10¹¹ | 190 |
| **Copper** | 1.2 × 10¹¹ | 120 |
| **Aluminum** | 0.7 × 10¹¹ | 70 |
| **Brass** | 1.0 × 10¹¹ | 100 |
| **Glass** | 0.7 × 10¹¹ | 70 |
| **Wood** | 1.3 × 10¹⁰ | 13 |
| **Bone** | 1.5 × 10¹⁰ | 15 |
| **Rubber** | 5 × 10⁶ | 0.005 |

> **◐ In simple terms · Memory Trick**
>
> **Stiffness order:** Steel > Iron > Copper > Aluminum > Glass ≈ Wood > Rubber
>
> “**S**uperman **I**s **C**onstantly **A**voiding **G**iant **W**ooden **R**ockets”

### Important Properties

1. **Temperature dependence:** Y generally decreases with increasing temperature
2. **Independent of dimensions:** Y depends only on **material**, not on shape or size
3. **For a wire of length L:**

   - Extension ∝ L (longer wire stretches more)
   - Extension ∝ 1/A (thinner wire stretches more)
4. **Wires in series and parallel:**

**Series:** $\frac{1}{Y_{eff}} = \frac{1}{Y_1} + \frac{1}{Y_2}$ (NO! This is wrong — Y is material property)

Actually, for series: Extensions add up, but Y remains material property.

**Parallel:** Forces add up: $F_{total} = F_1 + F_2$

> **↗ Connection · Example: Steel Wire Extension**
>
> A steel wire of length 2 m and cross-section 0.1 cm² is stretched by a force of 200 N. Find the extension. (Y for steel = 2 × 10¹¹ Pa)
>
> **Solution:**
>
> $$\Delta L = \frac{FL}{AY}$$
>
> A = 0.1 cm² = 0.1 × 10⁻⁴ m² = 10⁻⁵ m²
>
> $$\Delta L = \frac{200 \times 2}{10^{-5} \times 2 \times 10^{11}}$$

$$= \frac{400}{2 \times 10^6} = 2 \times 10^{-4} \text{ m} = \boxed{0.2 \text{ mm}}$$

## Bulk Modulus (K)

**Bulk Modulus** measures resistance to **change in volume** under uniform pressure.

$$\boxed{K = \frac{\text{Hydraulic Stress}}{\text{Volume Strain}} = \frac{-\Delta P}{\Delta V/V}}$$

$$\boxed{K = -V \frac{\Delta P}{\Delta V}}$$

where:

- ΔP = change in pressure = P - P₀
- V = original volume
- ΔV = change in volume = V - V₀

**Negative sign:** Increase in pressure causes decrease in volume (ΔP and ΔV have opposite signs)

> **★ Key point · Compressibility**
>
> **Compressibility (κ)** is the **reciprocal** of bulk modulus:
>
> $$\boxed{\kappa = \frac{1}{K} = -\frac{1}{V}\frac{\Delta V}{\Delta P}}$$
>
> - High K = low κ = **incompressible** material

> - Low K = high κ = **compressible** material

> **★ Key point · Real Life: Submarine Design**
>
> Submarines dive to depths where water pressure is enormous. At 1000 m depth, pressure ≈ 100 atm. The submarine hull must resist this pressure without significant volume change. Materials with **high bulk modulus** (like steel, K ≈ 160 GPa) are essential. Water itself has high K ≈ 2 GPa, making it nearly incompressible — crucial for hydraulic systems!

### Typical Values of Bulk Modulus

| Material | Bulk Modulus (Pa) | Bulk Modulus (GPa) |
| --- | --- | --- |
| **Steel** | 1.6 × 10¹¹ | 160 |
| **Iron** | 1.0 × 10¹¹ | 100 |
| **Copper** | 1.4 × 10¹¹ | 140 |
| **Aluminum** | 0.7 × 10¹¹ | 70 |
| **Glass** | 0.4 × 10¹¹ | 40 |
| **Water** | 2.2 × 10⁹ | 2.2 |
| **Air (at STP)** | 1.0 × 10⁵ | 0.0001 |

> **◐ In simple terms · Observation**
>
> **Solids have higher K than liquids, liquids higher than gases.**
>
> This is why:
>
> - Solids are nearly incompressible

> - Liquids are slightly compressible

> - Gases are highly compressible
>
> Air has K about **1 million times** smaller than steel!

### Special Case: Gases

For an **ideal gas** undergoing:

**Isothermal process** (constant temperature):

$$\boxed{K_{isothermal} = P}$$

**Adiabatic process** (no heat exchange):

$$\boxed{K_{adiabatic} = \gamma P}$$

where γ = Cp/Cv (ratio of specific heats)

For air: γ ≈ 1.4

> **↗ Connection · Example: Water Under Pressure**
>
> Calculate the decrease in volume of 100 liters of water when subjected to pressure of 10⁵ Pa (approximately 1 atm). Bulk modulus of water = 2.2 × 10⁹ Pa.
>
> **Solution:**
>
> $$K = -V \frac{\Delta P}{\Delta V}$$

$$\Delta V = -\frac{V \cdot \Delta P}{K} = -\frac{100 \times 10^{-3} \times 10^5}{2.2 \times 10^9}$$

$$= -4.55 \times 10^{-6} \text{ m}^3 = -4.55 \text{ mL}$$
>
> **Decrease = 4.55 mL** (only 0.00455% of original volume!)
>
> Water is nearly incompressible!

## Shear Modulus (η or G)

**Shear Modulus** (also called **Modulus of Rigidity**) measures resistance to **change in shape** under shearing stress.

$$\boxed{\eta = \frac{\text{Shearing Stress}}{\text{Shearing Strain}} = \frac{F/A}{\theta}}$$

$$\boxed{\eta = \frac{F/A}{\Delta x/L}}$$

where:

- F = tangential force
- A = area parallel to force
- θ = shearing strain (angle of deformation in radians)
- Δx = lateral displacement
- L = perpendicular height

> **★ Key point · Real Life: Earthquake Resistance**
>
> During earthquakes, buildings experience **shear stress** as the ground moves horizontally while upper floors lag behind. Engineers use materials with appropriate shear modulus and design techniques (like base isolation) to allow controlled shearing without collapse. Steel frames (high η ≈ 80 GPa) provide rigidity while allowing some flexibility.

### Typical Values of Shear Modulus

| Material | Shear Modulus (Pa) | Shear Modulus (GPa) |
| --- | --- | --- |
| **Steel** | 0.8 × 10¹¹ | 80 |
| **Iron** | 0.7 × 10¹¹ | 70 |
| **Copper** | 0.4 × 10¹¹ | 40 |
| **Aluminum** | 0.25 × 10¹¹ | 25 |
| **Brass** | 0.4 × 10¹¹ | 40 |
| **Lead** | 0.055 × 10¹¹ | 5.5 |

> **★ Key point · Liquids and Gases Have NO Shear Modulus**
>
> **Liquids and gases cannot sustain shearing stress.**
>
> η = 0 for all fluids!
>
> This is why liquids flow — they have no rigidity. Any shearing stress causes continuous deformation (flow).
>
> Only **solids** have a shear modulus.

> **↗ Connection · Example: Shear in Rubber Block**
>
> A cube of rubber of side 5 cm has its lower face fixed. A tangential force of 100 N is applied to the upper face, causing a displacement of 0.2 cm. Find the shear modulus.
>
> **Solution:**
>
> A = (5 × 10⁻²)² = 25 × 10⁻⁴ m²
>
> Shearing stress = F/A = 100/(25 × 10⁻⁴) = 4 × 10⁴ Pa
>
> Shearing strain = Δx/L = (0.2 × 10⁻²)/(5 × 10⁻²) = 0.04 rad
>
> $$\eta = \frac{\text{Stress}}{\text{Strain}} = \frac{4 \times 10^4}{0.04} = \boxed{10^6 \text{ Pa} = 1 \text{ MPa}}$$
>
> (Rubber has very low shear modulus compared to metals)

## Poisson’s Ratio (σ)

When a material is stretched in one direction, it contracts in perpendicular directions.

**Poisson’s Ratio** is the ratio of lateral strain to longitudinal strain.

$$\boxed{\sigma = -\frac{\text{Lateral strain}}{\text{Longitudinal strain}} = -\frac{\Delta d/d}{\Delta L/L}}$$

where:

- Δd = change in diameter (or width)
- d = original diameter
- ΔL = change in length
- L = original length

**Negative sign:** Lateral and longitudinal strains have opposite signs (one expands, other contracts)

**Range of values:** 0 < σ < 0.5

- σ = 0: No lateral contraction (cork, ideal material for bottle stoppers!)
- σ = 0.5: Incompressible material (rubber ≈ 0.5)
- Most materials: σ ≈ 0.2 to 0.4

| Material | Poisson’s Ratio |
| --- | --- |
| **Cork** | ~0.0 |
| **Concrete** | 0.1 - 0.2 |
| **Steel** | 0.28 - 0.30 |
| **Aluminum** | 0.33 |
| **Copper** | 0.34 |
| **Gold** | 0.42 |
| **Rubber** | ~0.5 |

> **★ Key point · Real Life: Why Cork for Wine Bottles?**
>
> Cork has Poisson’s ratio ≈ 0! When you compress it to insert into a bottle neck, it doesn’t expand sideways — it just compresses. This makes it perfect for bottle stoppers. Other materials would bulge sideways and wouldn’t fit!

## Relationships Between Elastic Constants

For **isotropic materials** (same properties in all directions), the three moduli are related:

$$\boxed{Y = 2\eta(1 + \sigma)}$$

$$\boxed{Y = 3K(1 - 2\sigma)}$$

$$\boxed{K = \frac{Y}{3(1 - 2\sigma)}}$$

$$\boxed{\eta = \frac{Y}{2(1 + \sigma)}}$$

$$\boxed{K = \frac{\eta(2 + 2\sigma)}{3(1 - 2\sigma)}}$$

**Most important relationship:**

$$\boxed{Y = \frac{9K\eta}{3K + \eta}}$$

**Theoretical limits:**

For real materials:

- If σ = 0: Y = 2η, K = Y/3
- If σ = 0.5: Y = 3η, K → ∞ (incompressible)

> **◐ In simple terms · Memory Trick**
>
> For most metals, σ ≈ 0.3, so:
>
> Y ≈ 2.6η (roughly Y ≈ **2.5** to **3** times η)
>
> Y ≈ 1.2K (roughly Y ≈ K to 1.5K)

> **↗ Connection · Example: Finding Shear Modulus**
>
> For a material with Y = 12 × 10¹⁰ Pa and σ = 0.25, find bulk modulus K and shear modulus η.
>
> **Solution:**
>
> **Shear modulus:**
>
> $$\eta = \frac{Y}{2(1 + \sigma)} = \frac{12 \times 10^{10}}{2(1 + 0.25)}$$

$$= \frac{12 \times 10^{10}}{2.5} = \boxed{4.8 \times 10^{10} \text{ Pa}}$$
>
> **Bulk modulus:**
>
> $$K = \frac{Y}{3(1 - 2\sigma)} = \frac{12 \times 10^{10}}{3(1 - 0.5)}$$

$$= \frac{12 \times 10^{10}}{1.5} = \boxed{8 \times 10^{10} \text{ Pa}}$$

## Summary Table

| Property | Formula | Applies To | Unit |
| --- | --- | --- | --- |
| **Young’s Modulus (Y)** | Y = (F/A)/(ΔL/L) | Solids | Pa |
| **Bulk Modulus (K)** | K = -V(ΔP/ΔV) | Solids, Liquids, Gases | Pa |
| **Shear Modulus (η)** | η = (F/A)/θ | Solids only | Pa |
| **Poisson’s Ratio (σ)** | σ = -(Δd/d)/(ΔL/L) | Solids | Dimensionless |
| **Compressibility (κ)** | κ = 1/K | All materials | Pa⁻¹ |

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> A copper wire of length 3 m and area 2 mm² is stretched by 1.5 mm under a force F. If Y for copper = 1.2 × 10¹¹ Pa, find F.
>
> **Solution:**
>
> $$Y = \frac{FL}{A \cdot \Delta L}$$

$$F = \frac{Y \cdot A \cdot \Delta L}{L}$$
>
> A = 2 mm² = 2 × 10⁻⁶ m²
>
> $$F = \frac{1.2 \times 10^{11} \times 2 \times 10^{-6} \times 1.5 \times 10^{-3}}{3}$$

$$= \frac{1.2 \times 2 \times 1.5}{3} \times 10^2 = 1.2 \times 10^2 = \boxed{120 \text{ N}}$$

> **↗ Connection · Problem 2**
>
> A rubber ball of volume 500 cm³ is subjected to a pressure of 10⁶ Pa. If bulk modulus of rubber is 5 × 10⁸ Pa, find the decrease in volume.
>
> **Solution:**
>
> $$K = -V \frac{\Delta P}{\Delta V}$$

$$\Delta V = -\frac{V \cdot \Delta P}{K} = -\frac{500 \times 10^{-6} \times 10^6}{5 \times 10^8}$$

$$= -10^{-3} \text{ m}^3 = -1000 \text{ cm}^3$$
>
> Wait, this is twice the original volume — impossible!
>
> **Error check:** Actually should be:
>
> $$= -\frac{500 \times 10^{-6} \times 10^6}{5 \times 10^8} = -10^{-3} \text{ m}^3$$
>
> Converting: -10⁻³ m³ = -1000 cm³ is wrong!
>
> 10⁻³ m³ = 1000 cm³
>
> Actually: 500 × 10⁻⁶ m³ = 500 cm³ ✓
>
> $$\Delta V = -\frac{500 \times 10^{-6} \times 10^6}{5 \times 10^8} = -\frac{0.5}{500} = \boxed{-0.001 \text{ m}^3 = -1 \text{ cm}^3}$$
>
> Very small compression!

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> Two wires of same material and length are in the ratio of radii 1:2. They are stretched by the same force. Find ratio of:

> (a) Stress

> (b) Strain

> (c) Extension
>
> **Solution:**
>
> Let radii be r and 2r, so areas are πr² and 4πr².
>
> **(a) Stress ratio:**
>
> $$\frac{\sigma_1}{\sigma_2} = \frac{F/(\pi r^2)}{F/(4\pi r^2)} = \frac{4\pi r^2}{\pi r^2} = \boxed{4:1}$$
>
> **(b) Strain ratio:**
>
> Same material → same Y
>
> Strain = Stress/Y
>
> $$\frac{\epsilon_1}{\epsilon_2} = \frac{\sigma_1}{\sigma_2} = \boxed{4:1}$$
>
> **(c) Extension ratio:**
>
> Extension = Strain × Length = (ΔL/L) × L = ΔL
>
> Same length:
>
> $$\frac{\Delta L_1}{\Delta L_2} = \frac{\epsilon_1}{\epsilon_2} = \boxed{4:1}$$

> **↗ Connection · Problem 4**
>
> A material has Y = 10¹¹ Pa and η = 4 × 10¹⁰ Pa. Find Poisson’s ratio and bulk modulus.
>
> **Solution:**
>
> From $Y = 2\eta(1 + \sigma)$:
>
> $$\sigma = \frac{Y}{2\eta} - 1 = \frac{10^{11}}{2 \times 4 \times 10^{10}} - 1$$

$$= \frac{10}{8} - 1 = 1.25 - 1 = \boxed{0.25}$$
>
> From $K = \frac{Y}{3(1 - 2\sigma)}$:
>
> $$K = \frac{10^{11}}{3(1 - 0.5)} = \frac{10^{11}}{1.5} = \boxed{6.67 \times 10^{10} \text{ Pa}}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> A wire of length L and radius r is stretched by a force F. Another wire of same material has length 2L and radius 2r. What force will produce:

> (a) Same stress?

> (b) Same strain?

> (c) Same extension?
>
> **Solution:**
>
> **(a) Same stress:**
>
> Stress = F/A
>
> For stress₁ = stress₂:
>
> $$\frac{F_1}{\pi r^2} = \frac{F_2}{\pi(2r)^2}$$

$$F_2 = F_1 \times 4 = \boxed{4F}$$
>
> **(b) Same strain:**
>
> Same material → same Y → same stress gives same strain
>
> $$\boxed{F_2 = 4F}$$
>
> (same as part a)
>
> **(c) Same extension:**
>
> $$\Delta L = \frac{FL}{AY}$$
>
> For ΔL₁ = ΔL₂:
>
> $$\frac{F_1 \cdot L}{\pi r^2 \cdot Y} = \frac{F_2 \cdot 2L}{\pi(2r)^2 \cdot Y}$$

$$F_1 \cdot L \cdot 4 = F_2 \cdot 2L$$

$$F_2 = 2F_1 = \boxed{2F}$$

> **↗ Connection · Problem 6**
>
> A wire suspended vertically from a fixed point is stretched by its own weight. If density is ρ, length is L, and Young’s modulus is Y, prove that total extension is:
>
> $$\Delta L = \frac{\rho g L^2}{2Y}$$
>
> **Solution:**
>
> Consider element at distance x from bottom, of thickness dx.
>
> Weight below this element = (mass below) × g = (ρ × A × x) × g
>
> Tension at x: T(x) = ρgAx
>
> Stress at x: σ(x) = T(x)/A = ρgx
>
> Strain at x: ε(x) = σ(x)/Y = ρgx/Y
>
> Extension of element dx:
>
> $$d(\Delta L) = \epsilon(x) \cdot dx = \frac{\rho gx}{Y} dx$$
>
> Total extension:
>
> $$\Delta L = \int_0^L \frac{\rho gx}{Y} dx = \frac{\rho g}{Y} \int_0^L x \, dx$$

$$= \frac{\rho g}{Y} \cdot \frac{L^2}{2} = \boxed{\frac{\rho g L^2}{2Y}}$$
>
> **Proved!**
>
> Note: This is **half** the extension if the same total weight (ρgAL) were hung at the bottom!

---

## Related Topics

### Within Properties of Matter

- [Stress and Strain](../stress-strain/index.md) — Foundation of elasticity
- [Fluid Pressure](../fluid-pressure/index.md) — Bulk modulus applications
- [Viscosity](../viscosity/index.md) — Fluid resistance to shear
- [Surface Tension](../surface-tension/index.md) — Surface elasticity

### Connected Chapters

- [Simple Harmonic Motion](../../oscillations-waves/index.md) — Spring constant and Y
- [Waves](../../oscillations-waves/index.md) — Wave speed depends on elastic moduli
- [Gravitation](../../gravitation/index.md) — Tidal forces and material strength

---

From TestGuru · our mock-test platform

## You've read Elastic Moduli.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=properties-solids-liquids&tg_exam=jee-main&tg_page=%2Fphysics%2Fproperties-solids-liquids%2Felastic-moduli%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/properties-solids-liquids/elastic-moduli/",this.page.identifier="/physics/properties-solids-liquids/elastic-moduli/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="stressStrain" id="anim-stressStrain-1795396424137775072"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-stressStrain-1795396424137775072")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/properties-solids-liquids/elastic-moduli/](https://jeenotes.in/physics/properties-solids-liquids/elastic-moduli/) · raw HTML: `offline/physics/properties-solids-liquids/elastic-moduli/index.html`_
