---
title: "Surface Tension and Capillarity"
source: "https://jeenotes.in/physics/properties-solids-liquids/surface-tension/"
description: "Master surface tension, capillary action, and surface energy for JEE Physics"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 8"
html: "../../../../offline/physics/properties-solids-liquids/surface-tension/index.html"
extracted: "2026-11-23"
---

> Master surface tension, capillary action, and surface energy for JEE Physics

## Prerequisites

Before studying surface tension, make sure you understand:

- [Fluid Pressure](../fluid-pressure/index.md) — Pressure fundamentals
- [Work-Energy](../../work-energy-power/index.md) — Energy concepts

## What is Surface Tension?

**Surface tension** is the property of a liquid surface that makes it behave like a **stretched elastic membrane**.

It’s the tendency of liquid surfaces to **minimize their surface area**.

> **★ Key point · Real Life: Water Striders Walk on Water**
>
> Have you seen insects walking on water? **Water striders** can do this because of surface tension!
>
> The liquid surface acts like a stretched rubber sheet. The insect’s weight creates a small depression, but surface tension provides an **upward force** that balances the weight — keeping the insect afloat.
>
> Same reason you can **carefully float a needle** on water, even though steel is denser than water!

**Molecular explanation:**

**Inside liquid:**

- Molecule experiences equal attractions from all sides
- **Net force = 0**

**At surface:**

- Molecule has more neighbors below than above
- **Net inward force** pulls molecules into bulk
- Surface tries to **contract** to minimum area

This creates **tension** in the surface layer!

## Definition and Formula

**Surface tension (γ or σ)** is defined as:

### Definition 1: Force per unit length

$$\boxed{\gamma = \frac{F}{L}}$$

Force acting perpendicular to an imaginary line of length L in the surface.

**SI Unit:** N/m (Newton per meter)

### Definition 2: Energy per unit area

$$\boxed{\gamma = \frac{W}{A}}$$

Work done in increasing surface area by unit amount.

**SI Unit:** J/m² (Joule per meter squared)

**Note:** N/m = J/m² (both are equivalent!)

$$\text{N/m} = \frac{\text{N} \cdot \text{m}}{\text{m}^2} = \frac{\text{J}}{\text{m}^2}$$

**Dimensions:** [MT⁻²] (same as spring constant!)

> **◐ In simple terms · Two Equivalent Definitions**
>
> **Force definition:** Surface tension is force per unit length
>
> **Energy definition:** Surface tension is energy per unit area
>
> Both give same numerical value and units!

### Typical Surface Tension Values (at 20°C)

| Liquid | Surface Tension (N/m) | Surface Tension (dyne/cm) |
| --- | --- | --- |
| **Water** | 0.073 | 73 |
| **Mercury** | 0.465 | 465 |
| **Ethanol** | 0.022 | 22 |
| **Glycerin** | 0.063 | 63 |
| **Soap solution** | 0.025 | 25 |
| **Blood** | 0.058 | 58 |
| **Olive oil** | 0.032 | 32 |

> **◐ In simple terms · Memory Trick**
>
> **Mercury has highest** surface tension (≈ 0.47 N/m)
>
> **Water** is moderate (≈ 0.073 N/m)
>
> **Alcohol, soap** have low surface tension (≈ 0.02 N/m)
>
> Order: **M**ercury > **W**ater > **S**oap → “**M**y **W**ife is **S**weet”

### Effect of Temperature

Surface tension **decreases** with increasing temperature.

**Why?** Higher temperature → greater molecular kinetic energy → weaker intermolecular forces → lower surface tension

**At critical temperature:** Surface tension becomes **zero** (liquid-gas distinction vanishes)

## Surface Energy

**Surface energy** is the extra potential energy of molecules at the surface compared to those in the bulk.

**Work done to create new surface:**

$$\boxed{W = \gamma \cdot \Delta A}$$

where ΔA = increase in surface area

**Surface energy per unit area = γ**

> **↗ Connection · Example: Soap Bubble Energy**
>
> A soap bubble has radius 2 cm. Find work done in blowing the bubble. (γ_soap = 0.03 N/m)
>
> **Solution:**
>
> Soap bubble has **two surfaces** (inner and outer)!
>
> Total surface area = 2 × 4πr² = 8πr²
>
> $$W = \gamma \times A = 0.03 \times 8\pi \times (0.02)^2$$

$$= 0.03 \times 8 \times 3.14 \times 0.0004$$

$$= 0.03 \times 0.01 = 3 \times 10^{-4} \text{ J}$$
>
> **W = 0.3 mJ**

## Excess Pressure in Drops and Bubbles

Due to surface tension, pressure **inside** a curved liquid surface is **greater** than outside.

### 1. Liquid Drop (one surface)

$$\boxed{P_{inside} - P_{outside} = \frac{2\gamma}{r}}$$

$$\boxed{\Delta P = \frac{2\gamma}{r}}$$

### 2. Soap Bubble (two surfaces)

$$\boxed{\Delta P = \frac{4\gamma}{r}}$$

Factor of **4** because bubble has **inner and outer** surfaces!

### 3. Air Bubble in Liquid (one surface, like drop)

$$\boxed{\Delta P = \frac{2\gamma}{r}}$$

### Interactive Demo: Visualize Surface Tension

See how surface tension creates excess pressure in drops and bubbles.

> **★ Key point · Key Observations**
>
> 1. **Smaller radius → Higher excess pressure**
>
>    - Tiny drops have enormous internal pressure!

> 2. **Pressure is same throughout inside**
>
>    - Uniform pressure inside drop/bubble

> 3. **Shape is spherical**
>
>    - Sphere has minimum surface area for given volume

> **★ Key point · Real Life: Soap Bubbles Burst**
>
> Ever notice how **small bubbles burst faster** than large ones?
>
> From ΔP = 4γ/r:
>
> - **Small bubble:** High pressure, bursts easily

> - **Large bubble:** Lower pressure, more stable
>
> Also, when two bubbles of different sizes connect, air flows from **smaller to larger** (higher to lower pressure), and small bubble shrinks while large one grows!

### Derivation: Excess Pressure in Drop

**Method 1: Force balance**

Consider hemisphere of drop, radius r.

**Inward force** due to excess pressure:

$$F_{pressure} = \Delta P \times \pi r^2$$

**Outward force** due to surface tension:

$$F_{tension} = \gamma \times 2\pi r$$

(γ acts along circumference of circle)

At equilibrium:

$$\Delta P \times \pi r^2 = \gamma \times 2\pi r$$

$$\boxed{\Delta P = \frac{2\gamma}{r}}$$

**Method 2: Energy consideration**

Increase radius from r to r + dr.

Work done **by pressure:**

$$W_P = \Delta P \times 4\pi r^2 \times dr$$

Work done **against surface tension:**

$$W_\gamma = \gamma \times d(4\pi r^2) = \gamma \times 8\pi r \, dr$$

These must be equal:

$$\Delta P \times 4\pi r^2 \times dr = \gamma \times 8\pi r \, dr$$

$$\boxed{\Delta P = \frac{2\gamma}{r}}$$

> **↗ Connection · Example: Pressure Inside Water Drop**
>
> Find excess pressure inside a water drop of radius 1 mm. (γ_water = 0.073 N/m)
>
> **Solution:**
>
> $$\Delta P = \frac{2\gamma}{r} = \frac{2 \times 0.073}{10^{-3}}$$

$$= \frac{0.146}{10^{-3}} = 146 \text{ Pa}$$
>
> **About 0.0014 atm** — small but measurable!
>
> For a drop of radius **1 μm** (micrometer):
>
> $$\Delta P = \frac{2 \times 0.073}{10^{-6}} = 1.46 \times 10^5 \text{ Pa} \approx 1.4 \text{ atm}$$
>
> Enormous pressure in tiny drops!

## Angle of Contact (θ)

**Angle of contact** is the angle between the solid surface and tangent to liquid surface at the point of contact, measured **through the liquid**.

**Depends on:**

1. Nature of liquid
2. Nature of solid
3. Cleanliness of surfaces

**Two cases:**

### 1. Acute Angle of Contact (θ < 90°)

- Liquid **wets** the surface
- **Concave meniscus** (curved downward in tube)
- Adhesive force > Cohesive force
- **Examples:** Water on clean glass, alcohol on glass

### 2. Obtuse Angle of Contact (θ > 90°)

- Liquid **doesn’t wet** the surface
- **Convex meniscus** (curved upward in tube)
- Cohesive force > Adhesive force
- **Examples:** Mercury on glass, water on waxy surface

**Special cases:**

- θ = 0°: Perfect wetting (spreads completely)
- θ = 180°: No wetting at all (complete repulsion)

> **◐ In simple terms · Contact Angles**
>
> **Water on glass:** θ ≈ 0° to 30° (wets)
>
> **Mercury on glass:** θ ≈ 135° to 140° (doesn’t wet)
>
> **Water on Teflon:** θ ≈ 108° (doesn’t wet — that’s why food doesn’t stick!)
>
> **Water on leaf (lotus effect):** θ ≈ 160° (super-hydrophobic)

## Capillarity (Capillary Action)

**Capillary action** is the rise or fall of liquid in a narrow tube (capillary) due to surface tension.

### Capillary Rise (θ < 90°, liquid wets tube)

When a capillary tube is dipped in a liquid that wets it:

$$\boxed{h = \frac{2\gamma \cos\theta}{\rho g r}}$$

where:

- h = height of rise (or depression)
- γ = surface tension
- θ = angle of contact
- ρ = density of liquid
- g = acceleration due to gravity
- r = radius of capillary tube

**For perfect wetting (θ = 0°, cos θ = 1):**

$$\boxed{h = \frac{2\gamma}{\rho g r}}$$

> **★ Key point · Key Observations**
>
> 1. **h ∝ 1/r** — Thinner tube → greater rise

> 2. **h ∝ γ** — Higher surface tension → greater rise

> 3. **h ∝ 1/ρ** — Lighter liquid → greater rise

> 4. **In zero gravity:** h → ∞ (liquid rises indefinitely!)

### Capillary Depression (θ > 90°, liquid doesn’t wet tube)

For mercury in glass:

$$\boxed{h = -\frac{2\gamma \cos\theta}{\rho g r}}$$

Negative h means **depression** (liquid surface goes down).

> **★ Key point · Real Life: How Plants Drink Water**
>
> **Capillary action** is crucial for plant survival!
>
> Water rises through **xylem vessels** (thin tubes) in plant stems from roots to leaves. Combined with:
>
> - **Capillary rise** (surface tension pulls water up)

> - **Transpiration pull** (evaporation from leaves creates suction)

> - **Root pressure** (osmotic pressure pushes water up)
>
> Trees can transport water **100 meters high** using these mechanisms!
>
> The xylem tubes are microscopic (≈ 0.02 mm diameter), so capillary rise can be significant:
>
> $$h = \frac{2 \times 0.073}{1000 \times 10 \times 10^{-5}} = 1.46 \text{ m}$$
>
> Combined with other effects, water reaches the top of tallest trees!

### Derivation of Capillary Rise

**Forces on liquid column in capillary:**

**Upward force** (due to surface tension):

$$F_{up} = \gamma \times 2\pi r \times \cos\theta$$

(γ acts along the contact line, vertical component is γ cos θ)

**Downward force** (weight of liquid column):

$$F_{down} = \rho \times \pi r^2 \times h \times g$$

At equilibrium:

$$\gamma \times 2\pi r \times \cos\theta = \rho \times \pi r^2 \times h \times g$$

$$2\gamma \cos\theta = \rho g r h$$

$$\boxed{h = \frac{2\gamma \cos\theta}{\rho g r}}$$

> **↗ Connection · Example: Water in Capillary**
>
> Find the height water rises in a capillary tube of radius 0.5 mm. (γ = 0.073 N/m, ρ = 1000 kg/m³, θ = 0°, g = 10 m/s²)
>
> **Solution:**
>
> $$h = \frac{2\gamma \cos\theta}{\rho g r}$$

$$= \frac{2 \times 0.073 \times 1}{1000 \times 10 \times 0.5 \times 10^{-3}}$$

$$= \frac{0.146}{5} = 0.0292 \text{ m}$$
>
> **h ≈ 3 cm**
>
> In a tube of radius **0.05 mm** (10 times thinner):
>
> $$h = 10 \times 3 = 30 \text{ cm}$$
>
> Much higher rise in thinner tube!

## Applications of Surface Tension

### 1. Detergents and Soaps

**Problem:** Water has high surface tension → doesn’t wet greasy/oily surfaces well

**Solution:** Add soap/detergent

- **Reduces surface tension** of water (from 0.073 to ~0.025 N/m)
- **Reduces contact angle** with fabric
- Water **penetrates** fabric better
- **Emulsifies** oil/grease (breaks into tiny droplets)

### 2. Waterproofing

**Hydrophobic coatings** (Teflon, wax) create **large contact angle** (> 90°):

- Water doesn’t wet surface
- Forms droplets and **rolls off**
- Surface stays dry

**Lotus effect:** Super-hydrophobic surface (θ ≈ 160°)

- Water beads up and rolls off, carrying dirt
- **Self-cleaning** surfaces

### 3. Oil Spreads on Water

**Why oil spreads?**

- Surface tension of oil (≈ 0.03 N/m) < surface tension of water (0.073 N/m)
- Oil film **reduces** total surface energy
- **Minimizes** overall surface area

**Application:** Oil spills spread rapidly on ocean surface, causing environmental damage.

### 4. Hot Soup Tastes Better

**Why?**

- Hot soup has **lower surface tension** than cold soup
- Spreads more easily on tongue
- **Greater contact area** with taste buds
- **Enhanced flavor**!

### 5. Antiseptic Efficiency

**Dettol/antiseptics** have low surface tension:

- **Spread easily** on skin
- **Penetrate** wounds better
- More effective killing bacteria

## Common Mistakes to Avoid

> **⚠ Trap · Mistake 1: Forgetting Two Surfaces of Soap Bubble**
>
> **Wrong:** Excess pressure in soap bubble = 2γ/r
>
> **Correct:** Soap bubble has **inner and outer** surfaces!
>
> $$\Delta P = \frac{4\gamma}{r}$$
>
> (Not 2γ/r like a drop)

> **⚠ Trap · Mistake 2: Contact Angle Measured from Solid**
>
> **Wrong:** Measuring angle from solid surface to liquid
>
> **Correct:** Angle of contact is measured **through the liquid**
>
> - Water on glass: θ ≈ 10° (acute, measured inside water)

> - Mercury on glass: θ ≈ 140° (obtuse, measured inside mercury)

> **⚠ Trap · Mistake 3: Capillary Rise in Wide Tubes**
>
> **Wrong:** Using h = 2γ/(ρgr) for tubes of radius > 1 cm
>
> **Correct:** Capillary formula is valid for **narrow tubes** only (r < few mm). For wide tubes, meniscus curvature changes, formula doesn’t apply.

> **⚠ Trap · Mistake 4: Surface Energy = Surface Tension**
>
> **Wrong:** They are the same thing.
>
> **Correct:**
>
> - **Surface tension (γ):** Force per unit length (N/m) OR Energy per unit area (J/m²)

> - **Surface energy (U):** Total energy = γ × Area (Joules)
>
> γ is intensive property, U is extensive.

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> Find the excess pressure inside a water drop of radius 2 mm. (γ_water = 0.073 N/m)
>
> **Solution:**
>
> $$\Delta P = \frac{2\gamma}{r} = \frac{2 \times 0.073}{2 \times 10^{-3}}$$

$$= \frac{0.146}{0.002} = \boxed{73 \text{ Pa}}$$

> **↗ Connection · Problem 2**
>
> Find work done in blowing a soap bubble of radius 5 cm. (γ_soap = 0.03 N/m)
>
> **Solution:**
>
> Surface area of bubble (two surfaces) = 2 × 4πr² = 8πr²
>
> $$W = \gamma \times A = 0.03 \times 8\pi \times (0.05)^2$$

$$= 0.03 \times 8 \times 3.14 \times 0.0025$$

$$= 0.03 \times 0.0628 = \boxed{1.88 \times 10^{-3} \text{ J} = 1.88 \text{ mJ}}$$

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> Water rises to height 6 cm in a capillary tube of radius r. If radius is doubled, find new height of rise.
>
> **Solution:**
>
> From h = 2γ/(ρgr):
>
> $$h \propto \frac{1}{r}$$

$$\frac{h_2}{h_1} = \frac{r_1}{r_2} = \frac{r}{2r} = \frac{1}{2}$$

$$h_2 = \frac{h_1}{2} = \frac{6}{2} = \boxed{3 \text{ cm}}$$
>
> Doubling radius **halves** the rise.

> **↗ Connection · Problem 4**
>
> Two soap bubbles of radii r₁ = 2 cm and r₂ = 4 cm coalesce to form a single bubble. Find radius of new bubble (assume isothermal process).
>
> **Solution:**
>
> **Surface energy conserved** (isothermal):
>
> $$\gamma \times 8\pi r_1^2 + \gamma \times 8\pi r_2^2 = \gamma \times 8\pi R^2$$

$$r_1^2 + r_2^2 = R^2$$

$$4 + 16 = R^2$$

$$R^2 = 20$$

$$R = \sqrt{20} = 2\sqrt{5} \approx \boxed{4.47 \text{ cm}}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> A capillary tube of radius 0.5 mm is dipped vertically in water. Find:

> (a) Height of water rise

> (b) If tube is tilted at 60° to vertical, find length of water column in tube
>
> (γ = 0.073 N/m, ρ = 1000 kg/m³, θ = 0°, g = 10 m/s²)
>
> **Solution:**
>
> **(a) Vertical rise:**
>
> $$h = \frac{2\gamma}{\rho g r} = \frac{2 \times 0.073}{1000 \times 10 \times 0.5 \times 10^{-3}}$$

$$= \frac{0.146}{5} = 0.0292 \text{ m} = \boxed{2.92 \text{ cm}}$$
>
> **(b) Tilted tube:**
>
> **Vertical height remains same** (h = 2.92 cm)
>
> But water column is now along the inclined tube!
>
> If L = length of column:
>
> $$L \cos 60° = h$$

$$L \times 0.5 = 2.92$$

$$L = \frac{2.92}{0.5} = \boxed{5.84 \text{ cm}}$$
>
> Length **doubles** when tube is at 60° to vertical.

> **↗ Connection · Problem 6**
>
> A soap bubble of radius 3 cm is blown at the end of a tube. By how much must the pressure inside the tube be increased to blow a bubble of radius 4 cm? (γ_soap = 0.03 N/m)
>
> **Solution:**
>
> Initial excess pressure:
>
> $$\Delta P_1 = \frac{4\gamma}{r_1} = \frac{4 \times 0.03}{0.03} = 4 \text{ Pa}$$
>
> Final excess pressure:
>
> $$\Delta P_2 = \frac{4\gamma}{r_2} = \frac{4 \times 0.03}{0.04} = 3 \text{ Pa}$$
>
> **Change in pressure:**
>
> $$\Delta P_2 - \Delta P_1 = 3 - 4 = -1 \text{ Pa}$$
>
> **Pressure must be DECREASED by 1 Pa**!
>
> (Larger bubble needs **less** excess pressure)
>
> Actually, question asks by how much to **increase**:
>
> Initial: P_tube = P_atm + 4 Pa

> Final: P_tube = P_atm + 3 Pa
>
> **Decrease by 1 Pa** (or increase by -1 Pa)

> **↗ Connection · Problem 7**
>
> Mercury has surface tension 0.465 N/m, density 13600 kg/m³, and angle of contact 140° with glass. Find depression of mercury in a capillary tube of radius 1 mm. (g = 10 m/s²)
>
> **Solution:**
>
> $$h = \frac{2\gamma \cos\theta}{\rho g r}$$

$$= \frac{2 \times 0.465 \times \cos 140°}{13600 \times 10 \times 10^{-3}}$$
>
> cos 140° = -cos 40° ≈ -0.766
>
> $$= \frac{2 \times 0.465 \times (-0.766)}{136}$$

$$= \frac{-0.712}{136} = -0.00524 \text{ m}$$
>
> **h = -5.2 mm** (depression)
>
> Mercury **depresses** by about 5 mm in this tube.

## Summary Table

| Concept | Formula | Units |
| --- | --- | --- |
| **Surface Tension** | γ = F/L or W/A | N/m or J/m² |
| **Excess Pressure (Drop)** | ΔP = 2γ/r | Pa |
| **Excess Pressure (Bubble)** | ΔP = 4γ/r | Pa |
| **Capillary Rise** | h = 2γcosθ/(ρgr) | m |
| **Surface Energy** | U = γA | J |

---

## Related Topics

### Within Properties of Matter

- [Fluid Pressure](../fluid-pressure/index.md) — Pressure fundamentals
- [Viscosity](../viscosity/index.md) — Internal friction
- [Bernoulli’s Theorem](../bernoullis/index.md) — Fluid dynamics

### Connected Chapters

- [Work-Energy-Power](../../work-energy-power/index.md) — Surface energy
- [Thermodynamics](../../thermodynamics/index.md) — Temperature effects on surface tension

---

From TestGuru · our mock-test platform

## You've read Surface Tension and Capillarity.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=properties-solids-liquids&tg_exam=jee-main&tg_page=%2Fphysics%2Fproperties-solids-liquids%2Fsurface-tension%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/properties-solids-liquids/surface-tension/",this.page.identifier="/physics/properties-solids-liquids/surface-tension/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="surfaceTension" id="anim-surfaceTension-1795396424153316188"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-surfaceTension-1795396424153316188")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/properties-solids-liquids/surface-tension/](https://jeenotes.in/physics/properties-solids-liquids/surface-tension/) · raw HTML: `offline/physics/properties-solids-liquids/surface-tension/index.html`_
