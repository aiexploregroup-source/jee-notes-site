---
title: "Stress and Strain"
source: "https://jeenotes.in/physics/properties-solids-liquids/stress-strain/"
description: "Master stress, strain, and Hooke's law for JEE Physics elasticity problems"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 8"
html: "../../../../offline/physics/properties-solids-liquids/stress-strain/index.html"
extracted: "2026-11-23"
---

> Master stress, strain, and Hooke's law for JEE Physics elasticity problems

## Prerequisites

Before studying stress and strain, make sure you understand:

- [Newton’s Laws](../../laws-of-motion/index.md) — Force and equilibrium concepts
- [Work and Energy](../../work-energy-power/index.md) — Elastic potential energy

## What is Elasticity?

**Elasticity** is the property of a material to regain its original shape and size after the deforming force is removed.

> **★ Key point · Real Life: Bungee Jumping**
>
> When you bungee jump, the elastic cord stretches as you fall, storing energy. Then it contracts, pulling you back up! The cord returns to its original length because of its **elasticity**. Materials like rubber bands, springs, and even steel beams exhibit this property — crucial for safety in bridges, buildings, and adventure sports!

**Types of Materials:**

| Type | Behavior | Examples |
| --- | --- | --- |
| **Perfectly Elastic** | Returns to original shape completely | Quartz, steel (within limits) |
| **Perfectly Plastic** | Doesn’t return, permanent deformation | Clay, putty, wet mud |
| **Partially Elastic** | Partial recovery | Most real materials, rubber |

> **◐ In simple terms · Perfect Elasticity is Rare**
>
> No material is perfectly elastic. Even steel has some permanent deformation. “Perfectly elastic” means negligible permanent deformation within normal use.

## Stress

**Stress** is the internal restoring force per unit area that develops in a material when it’s deformed.

$$\boxed{\text{Stress} = \frac{\text{Force}}{\text{Area}} = \frac{F}{A}}$$

**SI Unit:** N/m² or Pascal (Pa)

**Practical Units:**

- 1 MPa (megapascal) = 10⁶ Pa
- 1 GPa (gigapascal) = 10⁹ Pa

**Dimensions:** [ML⁻¹T⁻²] (same as pressure)

> **★ Key point · Key Concept**
>
> Stress is a **measure of internal resistance** to deformation. It’s not the applied force itself, but the force per unit area acting **inside** the material.
>
> Think of it like population density: same number of people (force) in a smaller area creates higher density (stress).

### Types of Stress

#### 1. Tensile Stress (Longitudinal Stress)

When forces try to **stretch** the material (pulling apart).

**Example:** Rope supporting a weight, wire hanging a load

$$\boxed{\text{Tensile stress} = \frac{F}{A}}$$

where F = stretching force, A = cross-sectional area

> **★ Key point · Real Life: Elevator Cables**
>
> Elevator cables experience **tensile stress**. A cable supporting a 1000 kg elevator with cross-section 5 cm² experiences:
>
> Stress = (1000 × 10) / (5 × 10⁻⁴) = 2 × 10⁷ Pa = 20 MPa
>
> Engineers ensure this is well below the breaking stress of steel (~400 MPa) for safety!

#### 2. Compressive Stress (Longitudinal Stress)

When forces try to **compress** the material (pushing together).

**Example:** Pillar supporting building, hydraulic press

$$\boxed{\text{Compressive stress} = \frac{F}{A}}$$

> **◐ In simple terms · Tensile vs Compressive**
>
> - **Tensile:** Forces pull outward, material stretches

> - **Compressive:** Forces push inward, material compresses
>
> Both are longitudinal (along the length) but opposite in direction.

#### 3. Shearing Stress (Tangential Stress)

When forces act **parallel** to the surface, causing layers to slide over each other.

**Example:** Cutting with scissors, rivets in joints

$$\boxed{\text{Shearing stress} = \frac{F_{\text{tangential}}}{A}}$$

> **★ Key point · Real Life: Scissors Cutting Paper**
>
> When you cut paper with scissors, you apply **shearing stress**. The two blades apply parallel forces on opposite faces of the paper, causing layers to slide past each other until the paper tears.

#### 4. Hydraulic Stress (Bulk Stress)

When **uniform pressure** acts on all surfaces of a material (like underwater).

**Example:** Submarine hull under water, gas in container

$$\boxed{\text{Hydraulic stress} = -\Delta P = -(P_{\text{applied}} - P_{\text{normal}})}$$

Negative sign indicates compression.

## Strain

**Strain** is the measure of deformation (change in dimension) relative to the original dimension.

$$\boxed{\text{Strain} = \frac{\text{Change in dimension}}{\text{Original dimension}}}$$

**Important Properties:**

- Strain is **dimensionless** (no units)
- It’s a **pure ratio**
- Usually expressed as fraction or percentage

### Types of Strain

#### 1. Longitudinal Strain (Tensile/Compressive Strain)

Change in **length** per unit original length.

$$\boxed{\text{Longitudinal strain} = \frac{\Delta L}{L} = \frac{L - L_0}{L_0}}$$

where:

- L₀ = original length
- L = final length (after deformation)
- ΔL = change in length = L - L₀

> **↗ Connection · Example**
>
> A wire of length 2.0 m is stretched to 2.002 m.
>
> Strain = (2.002 - 2.0) / 2.0 = 0.002 / 2.0 = 0.001 = **0.1%**

#### 2. Shearing Strain (Tangential Strain)

Measure of angular deformation when shearing stress is applied.

$$\boxed{\text{Shearing strain} = \theta = \frac{\Delta x}{L}}$$

where:

- Δx = lateral displacement
- L = perpendicular distance (height)
- θ = angle of deformation (in radians, for small angles)

For small deformations: tan θ ≈ θ (in radians)

> **◐ In simple terms · Shear Angle**
>
> Shearing strain is the **angle** (in radians) through which a face originally perpendicular to the fixed face gets turned.
>
> It’s dimensionless because θ = arc length / radius = L/L = dimensionless.

#### 3. Volume Strain (Bulk Strain)

Change in **volume** per unit original volume.

$$\boxed{\text{Volume strain} = \frac{\Delta V}{V} = \frac{V - V_0}{V_0}}$$

where:

- V₀ = original volume
- V = final volume
- ΔV = change in volume

> **↗ Connection · Example**
>
> A 1000 cm³ rubber ball is compressed to 998 cm³ underwater.
>
> Volume strain = (998 - 1000) / 1000 = -0.002 = **-0.2%**
>
> (Negative indicates compression)

## Hooke’s Law

**Hooke’s Law** states that within the **elastic limit**, stress is directly proportional to strain.

$$\boxed{\text{Stress} \propto \text{Strain}}$$

$$\boxed{\text{Stress} = E \times \text{Strain}}$$

where E is the **modulus of elasticity** (material constant).

### Interactive Demo: Visualize Stress and Strain

See how materials deform under different types of stress.

**Alternative forms:**

For a spring: $\boxed{F = kx}$

where:

- F = applied force
- k = spring constant
- x = displacement from equilibrium

> **★ Key point · Hooke's Law Conditions**
>
> Hooke’s law is valid **only**:
>
> 1. **Within elastic limit** (below yield point)

> 2. For **small deformations**

> 3. At **constant temperature**

> 4. For **isotropic materials** (same properties in all directions)

> **★ Key point · Real Life: Car Suspension Springs**
>
> Car suspension springs follow Hooke’s law. When you hit a bump:
>
> 1. Spring compresses (applies force F = kx)

> 2. Stores elastic energy

> 3. Releases energy, smoothing the ride
>
> Spring constant k determines how “stiff” the ride feels. Sports cars have higher k (stiffer), luxury cars have lower k (softer).

## Stress-Strain Curve

When we gradually increase load on a material and plot stress vs strain, we get important information about material behavior.

**Key Points on the Curve:**

### 1. Proportional Limit (Point A)

- Hooke’s law is valid up to this point
- Stress ∝ Strain (linear region)
- Perfectly elastic behavior

### 2. Elastic Limit (Point B)

- Maximum stress for which material returns to original shape
- Beyond this: permanent deformation begins
- Usually very close to proportional limit

### 3. Yield Point (Point C)

- Material starts to **flow** or **yield**
- Large strain for small increase in stress
- Permanent deformation is significant

**Upper Yield Point (C₁):** Stress drops slightly after this
**Lower Yield Point (C₂):** Stress at which yielding continues

### 4. Ultimate Tensile Strength (Point D)

- **Maximum stress** material can withstand
- After this, material begins to **neck** (cross-section reduces)
- Material weakens beyond this point

### 5. Breaking Point/Fracture Point (Point E)

- Material **breaks** or **fractures**
- Breaking stress < Ultimate stress (due to necking)

> **◐ In simple terms · Ductile vs Brittle Materials**
>
> **Ductile Materials** (metals like copper, aluminum):
>
> - Large plastic region (C to E)

> - Considerable elongation before breaking

> - Yield point clearly visible

> - Example: Iron wire can stretch significantly
>
> **Brittle Materials** (glass, ceramics):
>
> - Very small or no plastic region

> - Break suddenly with little deformation

> - Fracture point close to elastic limit

> - Example: Glass breaks suddenly without much bending

## Elastic Hysteresis

When a material is loaded and unloaded, the stress-strain curves for loading and unloading are **not identical**. The material doesn’t return along the same path.

**Characteristics:**

- Forms a **loop** on stress-strain graph
- Area of loop = **energy dissipated as heat**
- Indicates **internal friction** in material

> **★ Key point · Real Life: Rubber Bands**
>
> Stretch a rubber band and hold it against your lips. Feel the warmth? That’s **elastic hysteresis** — the energy lost as heat during deformation. This is why rubber bands get warm when stretched repeatedly!

## Elastic Potential Energy

When a material is deformed within elastic limit, work done is stored as **elastic potential energy**.

For a spring (or elastic material following Hooke’s law):

$$\boxed{U = \frac{1}{2}kx^2}$$

For a wire or rod:

$$\boxed{U = \frac{1}{2} \times \text{Stress} \times \text{Strain} \times \text{Volume}}$$

$$\boxed{U = \frac{1}{2} \times \frac{F}{A} \times \frac{\Delta L}{L} \times (A \times L)}$$

$$\boxed{U = \frac{1}{2} F \cdot \Delta L}$$

**Energy density** (energy per unit volume):

$$\boxed{u = \frac{U}{V} = \frac{1}{2} \times \text{Stress} \times \text{Strain}}$$

> **↗ Connection · Example: Spring Energy**
>
> A spring with k = 500 N/m is compressed by 10 cm. Find energy stored.
>
> **Solution:**
>
> $$U = \frac{1}{2}kx^2 = \frac{1}{2} \times 500 \times (0.1)^2$$

$$= \frac{1}{2} \times 500 \times 0.01 = 2.5 \text{ J}$$

## Common Mistakes to Avoid

> **⚠ Trap · Mistake 1: Confusing Stress and Pressure**
>
> **Wrong:** Stress and pressure are the same thing.
>
> **Correct:**
>
> - **Pressure** = external force per unit area

> - **Stress** = internal restoring force per unit area
>
> Pressure acts from outside, stress is the material’s internal response.

> **⚠ Trap · Mistake 2: Strain Has Units**
>
> **Wrong:** Strain is measured in meters or cm.
>
> **Correct:** Strain is **dimensionless** (ratio of lengths). Express as decimal or percentage.

> **⚠ Trap · Mistake 3: Hooke's Law Always Applies**
>
> **Wrong:** F = kx works for all deformations.
>
> **Correct:** Hooke’s law is valid **only within elastic limit**. Beyond that, relationship becomes non-linear.

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> A wire of length 2 m and cross-sectional area 2 mm² is stretched by 1 mm when a force of 100 N is applied. Calculate stress and strain.
>
> **Solution:**
>
> Area = 2 mm² = 2 × 10⁻⁶ m²
>
> **Stress:**
>
> $$\text{Stress} = \frac{F}{A} = \frac{100}{2 \times 10^{-6}} = 5 \times 10^7 \text{ Pa} = \boxed{50 \text{ MPa}}$$
>
> **Strain:**
>
> $$\text{Strain} = \frac{\Delta L}{L} = \frac{0.001}{2} = 5 \times 10^{-4} = \boxed{0.05\%}$$

> **↗ Connection · Problem 2**
>
> A spring of spring constant 200 N/m is compressed by 5 cm. Find the restoring force and elastic energy stored.
>
> **Solution:**
>
> **Force:**
>
> $$F = kx = 200 \times 0.05 = \boxed{10 \text{ N}}$$
>
> **Energy:**
>
> $$U = \frac{1}{2}kx^2 = \frac{1}{2} \times 200 \times (0.05)^2$$

$$= 100 \times 0.0025 = \boxed{0.25 \text{ J}}$$

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> Two wires of same material and length but cross-sectional areas in ratio 1:2 are stretched by same force. Find the ratio of:

> (a) Stress in two wires

> (b) Strain in two wires
>
> **Solution:**
>
> Let areas be A and 2A.
>
> **(a) Stress ratio:**
>
> $$\frac{\sigma_1}{\sigma_2} = \frac{F/A}{F/2A} = \frac{2A}{A} = \boxed{2:1}$$
>
> **(b) Strain ratio:**
>
> Since same material: same Young’s modulus Y
>
> From Hooke’s law: Strain = Stress/Y
>
> $$\frac{\epsilon_1}{\epsilon_2} = \frac{\sigma_1/Y}{\sigma_2/Y} = \frac{\sigma_1}{\sigma_2} = \boxed{2:1}$$
>
> **Thinner wire has more stress AND more strain!**

> **↗ Connection · Problem 4**
>
> A steel wire of length 4 m and diameter 2 mm is extended by 2 mm when loaded. If Young’s modulus of steel is 2 × 10¹¹ Pa, find the load applied.
>
> **Solution:**
>
> Radius r = 1 mm = 10⁻³ m
>
> Area A = πr² = π × (10⁻³)² = π × 10⁻⁶ m²
>
> Strain = ΔL/L = 0.002/4 = 5 × 10⁻⁴
>
> From Y = Stress/Strain:
>
> Stress = Y × Strain = 2 × 10¹¹ × 5 × 10⁻⁴ = 10⁸ Pa
>
> Force = Stress × Area = 10⁸ × π × 10⁻⁶
>
> $$F = 100\pi \approx \boxed{314 \text{ N}}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> A wire is stretched by applying a force F at one end. If the same wire is stretched by forces F at both ends (holding one end fixed), what is the ratio of elongation in two cases?
>
> **Solution:**
>
> **Case 1:** Force F at one end, other end fixed
>
> - Tension throughout = F

> - Elongation = ΔL₁
>
> **Case 2:** Force F at both ends
>
> - By Newton’s third law, tension throughout = F (same as case 1!)

> - One end is fixed, other pulled with F

> - Elongation = ΔL₂
>
> Since tension is same in both cases:
>
> $$\boxed{\frac{\Delta L_1}{\Delta L_2} = 1:1}$$
>
> **Important:** Pulling with F from both ends creates same tension as pulling with F from one end (with other end fixed against wall).

> **↗ Connection · Problem 6**
>
> A wire of length L and cross-sectional area A is stretched by force F. Another wire of same material has length 2L and area A/2. What force will produce the same extension?
>
> **Solution:**
>
> For wire 1: Extension = FL/(AY)
>
> For wire 2: Let force be F'
>
> Extension = F’(2L) / [(A/2)Y] = 4F’L/(AY)
>
> For same extension:
>
> $$\frac{FL}{AY} = \frac{4F'L}{AY}$$

$$F = 4F'$$

$$\boxed{F' = \frac{F}{4}}$$
>
> **One-fourth the force produces same extension!**

## Quick Summary

| Property | Definition | Formula | Units |
| --- | --- | --- | --- |
| **Stress** | Force per unit area | σ = F/A | Pa (N/m²) |
| **Strain** | Relative deformation | ε = ΔL/L | Dimensionless |
| **Hooke’s Law** | Stress ∝ Strain | σ = Eε | — |
| **Elastic Energy** | Stored energy | U = ½kx² | Joule (J) |

---

## Related Topics

### Within Properties of Matter

- [Elastic Moduli](../elastic-moduli/index.md) — Young’s, bulk, shear modulus
- [Fluid Pressure](../fluid-pressure/index.md) — Pressure in liquids
- [Viscosity](../viscosity/index.md) — Resistance to flow
- [Surface Tension](../surface-tension/index.md) — Surface energy

### Connected Chapters

- [Newton’s Laws](../../laws-of-motion/index.md) — Force and equilibrium
- [Work-Energy-Power](../../work-energy-power/index.md) — Elastic potential energy
- [Simple Harmonic Motion](../../oscillations-waves/index.md) — Spring oscillations

---

From TestGuru · our mock-test platform

## You've read Stress and Strain.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=properties-solids-liquids&tg_exam=jee-main&tg_page=%2Fphysics%2Fproperties-solids-liquids%2Fstress-strain%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/properties-solids-liquids/stress-strain/",this.page.identifier="/physics/properties-solids-liquids/stress-strain/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="stressStrain" id="anim-stressStrain-1795396424133295453"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-stressStrain-1795396424133295453")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/properties-solids-liquids/stress-strain/](https://jeenotes.in/physics/properties-solids-liquids/stress-strain/) · raw HTML: `offline/physics/properties-solids-liquids/stress-strain/index.html`_
