---
title: "Fluid Pressure and Pascal's Law"
source: "https://jeenotes.in/physics/properties-solids-liquids/fluid-pressure/"
description: "Master fluid pressure, Pascal's law, and hydrostatic applications for JEE Physics"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 8"
html: "../../../../offline/physics/properties-solids-liquids/fluid-pressure/index.html"
extracted: "2026-11-23"
---

> Master fluid pressure, Pascal's law, and hydrostatic applications for JEE Physics

## Prerequisites

Before studying fluid pressure, make sure you understand:

- [Newton’s Laws](../../laws-of-motion/index.md) — Force and equilibrium
- [Stress and Strain](../stress-strain/index.md) — Pressure concept

## What is a Fluid?

A **fluid** is a substance that can **flow** and takes the shape of its container.

**Types:**

- **Liquids:** Fixed volume, variable shape
- **Gases:** Variable volume and shape

**Key property:** Fluids cannot sustain **shearing stress** (shear modulus = 0). Any shear stress causes continuous flow.

> **★ Key point · Real Life: Why Can't You Walk on Water?**
>
> When you step on water, you apply a **perpendicular force** (normal stress) which water can support momentarily. But any **tangential force** (shearing stress) causes the water to flow away from under your feet. Solids can resist both, but fluids can’t resist shear — that’s why they flow!
>
> Fun fact: The **Basilisk lizard** can run on water by slapping the surface so fast that it doesn’t sink before pushing off!

## Pressure in Fluids

**Pressure** is the force per unit area acting perpendicular to a surface.

$$\boxed{P = \frac{F}{A}}$$

**SI Unit:** Pascal (Pa) = N/m²

**Other common units:**

- 1 atm (atmosphere) = 1.013 × 10⁵ Pa
- 1 bar = 10⁵ Pa
- 1 torr = 133.3 Pa
- 1 mm Hg = 133.3 Pa

**Dimensions:** [ML⁻¹T⁻²] (same as stress)

> **★ Key point · Pressure in Fluids is Scalar**
>
> Although defined as F/A (force is vector), pressure in fluids is a **scalar** quantity.
>
> Why? In a fluid at rest, pressure at a point is **same in all directions**. The force acts perpendicular to any surface placed at that point, regardless of orientation.

### Atmospheric Pressure

**Atmospheric pressure** is the pressure exerted by the weight of air above us.

**At sea level:**

- P₀ = 1 atm = 1.013 × 10⁵ Pa ≈ **10⁵ Pa** (for calculations)
- Equivalent to 76 cm of Hg column
- Equivalent to 10.3 m of water column

> **★ Key point · Real Life: Why Don't We Feel Atmospheric Pressure?**
>
> Air presses on your body with force ≈ 100,000 N (weight of a truck!)
>
> Why don’t we feel crushed?
>
> Because pressure **inside** our body (blood, air in lungs) equals atmospheric pressure outside. Net force = 0!
>
> When you go to high altitudes, external pressure drops but internal doesn’t adjust immediately — that’s why your ears “pop” and you feel pressure!

## Pascal’s Law

**Pascal’s Law** states: Pressure applied to an enclosed fluid is transmitted **undiminished** to every portion of the fluid and to the walls of the container.

$$\boxed{\Delta P = \text{constant throughout the fluid}}$$

> **★ Key point · Key Statement**
>
> “A change in pressure at any point in an enclosed incompressible fluid at rest is transmitted equally and undiminished to all points in the fluid.”

### Applications of Pascal’s Law

#### 1. Hydraulic Lift (Hydraulic Press)

Two cylinders of different areas connected by fluid.

**Principle:**

- Force applied on smaller piston (area A₁)
- Transmitted to larger piston (area A₂)
- **Mechanical advantage** achieved

$$\boxed{\frac{F_2}{F_1} = \frac{A_2}{A_1}}$$

Since pressure is same: P₁ = P₂

### Interactive Demo: Visualize Fluid Pressure

See how pressure changes with depth and how hydraulic systems work.

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

> **★ Key point · Real Life: Car Lift at Service Station**
>
> At a car service station, a mechanic easily lifts a 1500 kg car using a hydraulic lift!
>
> **How?** Small piston area = 10 cm², large piston area = 1000 cm²
>
> Mechanical advantage = 1000/10 = **100**
>
> Force needed = (1500 × 10)/100 = **150 N** (just 15 kg weight!)
>
> The mechanic pushes down 100 cm to lift the car 1 cm (work is conserved: F₁d₁ = F₂d₂).

**Important:** Work input = Work output (no free energy!)

$$F_1 \cdot d_1 = F_2 \cdot d_2$$

where d₁, d₂ are distances moved.

#### 2. Hydraulic Brakes

Pressing brake pedal creates pressure in brake fluid, transmitted equally to all wheel cylinders, applying brakes to all wheels simultaneously.

**Advantage:** Same braking force to all wheels, regardless of their position.

## Hydrostatic Pressure (Pressure Due to Liquid Column)

Pressure at depth h below the surface of a liquid:

$$\boxed{P = P_0 + \rho gh}$$

where:

- P₀ = atmospheric pressure at surface
- ρ = density of liquid
- g = acceleration due to gravity
- h = depth below surface

**Gauge pressure** (pressure above atmospheric):

$$\boxed{P_{gauge} = P - P_0 = \rho gh}$$

**Absolute pressure** = P₀ + P_gauge

> **★ Key point · Key Points About Hydrostatic Pressure**
>
> 1. **Depends only on depth h**, not on shape of container

> 2. **Same at all points at same horizontal level** in connected fluid

> 3. **Increases linearly with depth**

> 4. **Independent of container shape** (Hydrostatic Paradox)

> **↗ Connection · Example: Pressure at Ocean Depth**
>
> Find pressure at 100 m depth in ocean. (ρ_seawater = 1030 kg/m³, P₀ = 10⁵ Pa, g = 10 m/s²)
>
> **Solution:**
>
> $$P = P_0 + \rho gh$$

$$= 10^5 + 1030 \times 10 \times 100$$

$$= 10^5 + 1.03 \times 10^6$$

$$= 1.13 \times 10^6 \text{ Pa} = \boxed{11.3 \text{ atm}}$$
>
> At 100 m depth, pressure is about **11 times** atmospheric pressure!

### Hydrostatic Paradox

**Paradox:** Pressure at a point depends only on vertical depth, not on the **shape** or **amount** of liquid above it.

Three containers of different shapes but same height h have **same pressure** at the bottom, even though they contain different amounts of water!

**Explanation:** Pressure is due to vertical component of weight. Slanted walls provide support, reducing effective weight contribution.

> **★ Key point · Real Life: Dams**
>
> The **pressure distribution** on a dam wall depends only on depth, not on how much water the reservoir holds. That’s why dams are **thicker at the bottom** — pressure increases linearly with depth, and the wall must withstand maximum pressure at the base.

## Barometer (Measuring Atmospheric Pressure)

**Torricelli’s barometer:** A tube filled with mercury, inverted in a mercury dish.

**Principle:**

$$P_0 = \rho_{Hg} \cdot g \cdot h$$

At sea level: h ≈ **76 cm** of Hg

$$P_0 = 13600 \times 10 \times 0.76 = 1.03 \times 10^5 \text{ Pa} ≈ 1 \text{ atm}$$

**Why mercury?**

- High density (13,600 kg/m³) → short column (76 cm vs 10.3 m for water!)
- Doesn’t wet glass
- Low vapor pressure

> **◐ In simple terms · Memory Trick**
>
> **“76 cm Hg = 1 atm”** is a must-remember value for JEE!
>
> Alternatively: **“760 mm Hg = 1 atm”**

## Manometer (Measuring Gauge Pressure)

**Open-tube manometer:** U-tube with one end open to atmosphere, other connected to gas container.

**Pressure difference:**

$$\boxed{P_{gas} - P_0 = \rho g h}$$

where h = height difference between liquid levels.

- If h is positive (gas side lower): P_gas > P₀
- If h is negative (gas side higher): P_gas < P₀

> **↗ Connection · Example: Manometer Reading**
>
> A manometer connected to a gas cylinder shows mercury level 20 cm higher on the open side. Find gas pressure. (P₀ = 76 cm Hg)
>
> **Solution:**
>
> Gas side is lower → P_gas > P₀
>
> $$P_{gas} = P_0 + \rho_{Hg} g h$$
>
> In cm of Hg: P_gas = 76 + 20 = **96 cm Hg**
>
> Or: P_gas = 1.26 atm

## Archimedes’ Principle and Buoyancy

**Archimedes’ Principle:** When a body is partially or fully immersed in a fluid, it experiences an **upward force** (buoyant force) equal to the **weight of fluid displaced**.

$$\boxed{F_B = \rho_{fluid} \cdot V_{displaced} \cdot g}$$

where:

- ρ_fluid = density of fluid
- V_displaced = volume of fluid displaced
- g = acceleration due to gravity

**Direction:** Always **upward** (opposite to gravity)

**Origin:** Pressure difference between top and bottom surfaces of immersed body.

> **★ Key point · Real Life: Ships Float!**
>
> A steel ship weighs thousands of tons. Steel density (7800 kg/m³) » water density (1000 kg/m³).
>
> **How does it float?**
>
> The ship’s **hollow structure** displaces huge volume of water. As long as:
>
> **Weight of ship < Weight of water displaced**
>
> the ship floats!
>
> Buoyant force = Weight of water displaced > Weight of ship → Ship floats!

### Three Cases of Floating/Sinking

For a body of volume V and density ρ_body in fluid of density ρ_fluid:

**Weight of body:** W = ρ_body × V × g

**Maximum buoyant force:** F_B,max = ρ_fluid × V × g (when fully submerged)

#### Case 1: Floating (ρ_body < ρ_fluid)

Body floats partially submerged.

At equilibrium: Buoyant force = Weight

$$\rho_{fluid} \cdot V_{submerged} \cdot g = \rho_{body} \cdot V_{total} \cdot g$$

$$\boxed{\frac{V_{submerged}}{V_{total}} = \frac{\rho_{body}}{\rho_{fluid}}}$$

**Fraction submerged** = density ratio

> **↗ Connection · Example: Iceberg**
>
> Density of ice = 920 kg/m³, seawater = 1030 kg/m³
>
> Fraction submerged = 920/1030 = 0.893 = **89.3%**
>
> So about **90% of an iceberg is underwater** — “tip of the iceberg”!

#### Case 2: Just Floating (ρ_body = ρ_fluid)

Body is fully submerged but doesn’t sink.

**Neutral buoyancy** — like fish or submarines adjusting their density.

#### Case 3: Sinking (ρ_body > ρ_fluid)

Body sinks to bottom.

**Net downward force:**

$$F_{net} = W - F_B = (\rho_{body} - \rho_{fluid}) \cdot V \cdot g$$

This is the **apparent weight** in fluid.

$$\boxed{W_{apparent} = W_{actual} - F_B}$$

$$\boxed{W_{apparent} = V g (\rho_{body} - \rho_{fluid})}$$

> **↗ Connection · Example: Apparent Weight**
>
> A 2 kg metal block (density 8000 kg/m³) is immersed in water. Find apparent weight.
>
> **Solution:**
>
> Volume = m/ρ = 2/8000 = 2.5 × 10⁻⁴ m³
>
> F_B = ρ_water × V × g = 1000 × 2.5 × 10⁻⁴ × 10 = 2.5 N
>
> W_actual = 2 × 10 = 20 N
>
> W_apparent = 20 - 2.5 = **17.5 N**
>
> The block **feels lighter** in water!

## Common Mistakes to Avoid

> **⚠ Trap · Mistake 1: Pressure Depends on Container Shape**
>
> **Wrong:** Wider container has more pressure at bottom.
>
> **Correct:** Pressure at a depth h depends **only on h**, not on container width or shape (Hydrostatic Paradox).

> **⚠ Trap · Mistake 2: Buoyant Force = Weight of Body**
>
> **Wrong:** Buoyant force always equals weight of the immersed body.
>
> **Correct:** Buoyant force = Weight of **fluid displaced**, NOT weight of body.
>
> Only when floating: F_B = W (equilibrium condition)

> **⚠ Trap · Mistake 3: Pascal's Law Applies to Flowing Fluids**
>
> **Wrong:** Pascal’s law works for all fluids.
>
> **Correct:** Pascal’s law applies only to **fluids at rest** (hydrostatics). For moving fluids, use Bernoulli’s equation.

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> Find pressure at a depth of 10 m in water. (ρ_water = 1000 kg/m³, g = 10 m/s², P₀ = 10⁵ Pa)
>
> **Solution:**
>
> $$P = P_0 + \rho gh$$

$$= 10^5 + 1000 \times 10 \times 10$$

$$= 10^5 + 10^5 = 2 \times 10^5 \text{ Pa} = \boxed{2 \text{ atm}}$$

> **↗ Connection · Problem 2**
>
> A hydraulic lift has pistons of area 10 cm² and 100 cm². What force must be applied to smaller piston to lift 500 kg?
>
> **Solution:**
>
> Mechanical advantage = A₂/A₁ = 100/10 = 10
>
> F₂ = 500 × 10 = 5000 N
>
> $$F_1 = \frac{F_2}{10} = \frac{5000}{10} = \boxed{500 \text{ N}}$$
>
> (Equal to weight of 50 kg!)

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> A wooden block of mass 2 kg and density 800 kg/m³ floats in water. Find:

> (a) Fraction of volume submerged

> (b) Mass to be added so it just sinks
>
> **Solution:**
>
> **(a) Fraction submerged:**
>
> $$\frac{V_{sub}}{V_{total}} = \frac{\rho_{wood}}{\rho_{water}} = \frac{800}{1000} = \boxed{0.8 = 80\%}$$
>
> **(b) Mass to add:**
>
> Volume of block: V = m/ρ = 2/800 = 2.5 × 10⁻³ m³
>
> For just sinking, total mass must equal mass of water displaced when fully submerged:
>
> m_total = ρ_water × V = 1000 × 2.5 × 10⁻³ = 2.5 kg
>
> Mass to add = 2.5 - 2 = **0.5 kg**

> **↗ Connection · Problem 4**
>
> A U-tube contains water and oil (density 900 kg/m³). The oil column is 20 cm high. Find height of water column for equilibrium.
>
> **Solution:**
>
> At the same horizontal level (interface), pressure must be equal:
>
> $$P_{water} = P_{oil}$$

$$\rho_{water} \cdot g \cdot h_{water} = \rho_{oil} \cdot g \cdot h_{oil}$$

$$1000 \times h_{water} = 900 \times 20$$

$$h_{water} = \frac{18000}{1000} = \boxed{18 \text{ cm}}$$
>
> Denser liquid (water) has shorter column!

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> A cubical block of edge 10 cm and density 800 kg/m³ floats in water with a 4 cm high layer of oil (density 900 kg/m³) on top. Find how much of the cube is in oil and how much in water.
>
> **Solution:**
>
> Let x = height in oil, y = height in water
>
> Total height: x + y = 10 cm (assuming it doesn’t float above oil)
>
> Weight = Buoyant force:
>
> $$\rho_{cube} \cdot V_{cube} \cdot g = \rho_{oil} \cdot V_{oil} \cdot g + \rho_{water} \cdot V_{water} \cdot g$$
>
> Area of cube face = 100 cm² = 10⁻² m²
>
> $$800 \times (10 \times 10^{-2}) = 900 \times (x \times 10^{-2}) + 1000 \times (y \times 10^{-2})$$

$$800 \times 10 = 900x + 1000y$$

$$8000 = 900x + 1000y$$
>
> &mldr; (1)
>
> Also: x + y = 10 &mldr; (2)
>
> From (2): x = 10 - y
>
> Substitute in (1):
>
> $$8000 = 900(10 - y) + 1000y$$

$$8000 = 9000 - 900y + 1000y$$

$$8000 = 9000 + 100y$$

$$y = -10 \text{ cm}$$
>
> This is **impossible**!
>
> **Error:** Oil layer is only 4 cm high. Let’s check if cube extends above oil:
>
> Let h = height above oil surface
>
> Then: h + 4 + y = 10
>
> Weight = Buoyant forces:
>
> $$800 \times 10 = 900 \times 4 + 1000 \times y$$

$$8000 = 3600 + 1000y$$

$$y = 4.4 \text{ cm}$$
>
> h = 10 - 4 - 4.4 = 1.6 cm
>
> **Answer:**
>
> - **1.6 cm above oil** surface

> - **4 cm in oil** (entire oil layer)

> - **4.4 cm in water**

> **↗ Connection · Problem 6**
>
> A cylindrical vessel of height 30 cm is filled with water up to 20 cm. A wooden cylinder of height 10 cm, cross-section equal to vessel, and density 600 kg/m³ is placed in water. Find:

> (a) Height of cylinder above water

> (b) Rise in water level
>
> **Solution:**
>
> **(a) Floating depth:**
>
> Fraction submerged = ρ_wood/ρ_water = 600/1000 = 0.6
>
> Height submerged = 0.6 × 10 = 6 cm
>
> Height above water = 10 - 6 = **4 cm**
>
> **(b) Rise in water level:**
>
> Volume of cylinder submerged = Volume of water displaced
>
> Let A = cross-sectional area, Δh = rise in level
>
> Volume displaced = A × Δh
>
> Volume submerged = A × 6 cm
>
> But wait! Water level rises, so actual submerged depth changes.
>
> Let final water level be at height h from bottom.
>
> Initial water: 20 cm
>
> After adding cylinder:
>
> - Cylinder floats with 6 cm submerged

> - Water level = h

> - Submerged portion is below h
>
> Let’s say cylinder bottom is at height (h - 6) from vessel bottom.
>
> Volume conservation:

> Initial water volume = A × 20
>
> After: Water volume = A × h - A × 6 (cylinder displaces water)
>
> Since water volume is conserved:

> A × 20 = A × h - A × 6
>
> This doesn’t make sense. Let me reconsider.
>
> Actually: When cylinder is placed, water level rises by Δh.
>
> New water level = 20 + Δh
>
> For cylinder to float with 6 cm submerged:

> Bottom of cylinder is at (20 + Δh - 6) = (14 + Δh) from bottom
>
> Water displaced = Volume submerged = A × 6
>
> This displaced water raises level by Δh:

> A × Δh = A × 6
>
> **Δh = 6 cm**
>
> **Answer: Water level rises by 6 cm** (from 20 to 26 cm)
>
> But then: Total height in vessel = 26 cm < 30 cm ✓ (fits!)

---

## Related Topics

### Within Properties of Matter

- [Elastic Moduli](../elastic-moduli/index.md) — Bulk modulus and compressibility
- [Viscosity](../viscosity/index.md) — Resistance in flowing fluids
- [Bernoulli’s Theorem](../bernoullis/index.md) — Pressure in moving fluids
- [Surface Tension](../surface-tension/index.md) — Surface effects in liquids

### Connected Chapters

- [Newton’s Laws](../../laws-of-motion/index.md) — Force equilibrium
- [Gravitation](../../gravitation/index.md) — Variation of g with depth

---

From TestGuru · our mock-test platform

## You've read Fluid Pressure and Pascal's Law.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=properties-solids-liquids&tg_exam=jee-main&tg_page=%2Fphysics%2Fproperties-solids-liquids%2Ffluid-pressure%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/properties-solids-liquids/fluid-pressure/",this.page.identifier="/physics/properties-solids-liquids/fluid-pressure/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="fluidFlow" id="anim-fluidFlow-1795396424143011140"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-fluidFlow-1795396424143011140")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/properties-solids-liquids/fluid-pressure/](https://jeenotes.in/physics/properties-solids-liquids/fluid-pressure/) · raw HTML: `offline/physics/properties-solids-liquids/fluid-pressure/index.html`_
