---
title: "Viscosity and Stokes' Law"
source: "https://jeenotes.in/physics/properties-solids-liquids/viscosity/"
description: "Master viscosity, streamline flow, and Stokes' law for JEE Physics fluid mechanics"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 8"
html: "../../../../offline/physics/properties-solids-liquids/viscosity/index.html"
extracted: "2026-11-23"
---

> Master viscosity, streamline flow, and Stokes' law for JEE Physics fluid mechanics

## Prerequisites

Before studying viscosity, make sure you understand:

- [Fluid Pressure](../fluid-pressure/index.md) — Basics of fluid mechanics
- [Newton’s Laws](../../laws-of-motion/index.md) — Force and motion

## What is Viscosity?

**Viscosity** is the property of a fluid that opposes the **relative motion** between its layers. It’s the **internal friction** in fluids.

Think of it as the “thickness” or “stickiness” of a fluid.

> **★ Key point · Real Life: Honey vs Water**
>
> Pour honey and water from the same height:
>
> - **Water** flows quickly (low viscosity)

> - **Honey** flows slowly (high viscosity)
>
> Honey has about **10,000 times** the viscosity of water! On a cold day, honey becomes even more viscous — viscosity generally **increases** as temperature **decreases**.

**Examples:**

- **Low viscosity:** Water, air, alcohol
- **Medium viscosity:** Motor oil, blood
- **High viscosity:** Honey, glycerin, molten glass

## Types of Fluid Flow

### 1. Streamline Flow (Laminar Flow)

**Orderly flow** where fluid particles move in parallel layers (laminas) with no mixing between layers.

**Characteristics:**

- Each particle follows a definite path (streamline)
- Velocity at any point remains constant with time
- No cross-currents or eddies
- Occurs at **low velocities**

**Streamline:** A curve whose tangent at any point gives the direction of fluid velocity at that point.

**Properties of streamlines:**

1. Never cross each other
2. Closer streamlines → higher velocity
3. Farther streamlines → lower velocity

> **◐ In simple terms · Why Streamlines Don't Cross**
>
> If two streamlines crossed, a particle at the intersection would have **two different velocities** simultaneously — impossible!

### 2. Turbulent Flow

**Chaotic, irregular flow** with eddies, vortices, and mixing between layers.

**Characteristics:**

- Velocity varies randomly with time
- Cross-currents and eddies present
- Occurs at **high velocities**
- Energy is dissipated as heat

**Example:** Smoke from a cigarette initially rises smoothly (laminar), then becomes chaotic (turbulent).

### Reynolds Number

**Reynolds number (Re)** determines whether flow is laminar or turbulent:

$$\boxed{Re = \frac{\rho v D}{\eta}}$$

where:

- ρ = density of fluid
- v = velocity of fluid
- D = characteristic dimension (diameter for pipes)
- η = coefficient of viscosity

**Critical values:**

- Re < 1000: **Laminar flow**
- Re > 2000: **Turbulent flow**
- 1000 < Re < 2000: **Transition region**

### Interactive Demo: Visualize Fluid Flow

Watch how viscous fluids flow and transition from laminar to turbulent flow.

> **★ Key point · Dimensionless Number**
>
> Reynolds number is **dimensionless**:
>
> $$[Re] = \frac{[ML^{-3}][LT^{-1}][L]}{[ML^{-1}T^{-1}]} = \frac{[ML^{-1}T^{-1}]}{[ML^{-1}T^{-1}]} = 1$$
>
> It’s a pure ratio!

## Coefficient of Viscosity (η)

When a fluid flows, layers move with different velocities. Viscous force opposes this relative motion.

**Newton’s Law of Viscosity:**

Consider two parallel layers of fluid separated by distance dy, moving with velocity difference dv.

**Viscous force:**

$$\boxed{F = -\eta A \frac{dv}{dy}}$$

where:

- η = coefficient of viscosity
- A = area of contact between layers
- dv/dy = velocity gradient (rate of change of velocity)

**Negative sign:** Force opposes relative motion.

**Coefficient of viscosity:**

$$\boxed{\eta = \frac{F \cdot dy}{A \cdot dv}}$$

**SI Unit:** Pa·s (Pascal-second) or N·s/m² or kg/(m·s)

**CGS Unit:** Poise (P)

- 1 Poise = 0.1 Pa·s
- 1 centipoise (cP) = 0.01 Poise = 10⁻³ Pa·s

**Dimensions:** [ML⁻¹T⁻¹]

> **◐ In simple terms · Memory Trick**
>
> **Viscosity units:** Think “**Pa**-**s**e” → **Pa·s** (Pascal-second)
>
> Water at 20°C: η ≈ 1 centipoise = 10⁻³ Pa·s

### Typical Viscosity Values (at 20°C)

| Fluid | Viscosity (Pa·s) | Viscosity (cP) |
| --- | --- | --- |
| **Air** | 1.8 × 10⁻⁵ | 0.018 |
| **Water** | 1.0 × 10⁻³ | 1.0 |
| **Blood** | 3-4 × 10⁻³ | 3-4 |
| **Olive oil** | 0.08 | 80 |
| **Glycerin** | 1.5 | 1500 |
| **Honey** | 10 | 10,000 |
| **Motor oil (SAE 30)** | 0.2-0.5 | 200-500 |

### Effect of Temperature on Viscosity

**Liquids:** Viscosity **decreases** with increasing temperature

- Molecules move faster, overcome intermolecular forces more easily
- Example: Honey flows more easily when warm

**Gases:** Viscosity **increases** with increasing temperature

- More molecular collisions transfer momentum between layers
- Opposite behavior from liquids!

> **★ Key point · Real Life: Engine Oil Grades**
>
> Motor oil is labeled SAE 10W-30, SAE 20W-50, etc.
>
> - **W** stands for “Winter”

> - **First number** (10W): viscosity at low temperature

> - **Second number** (30): viscosity at high temperature
>
> Multi-grade oils maintain relatively constant viscosity across temperature range — crucial for engine protection in cold starts and hot running conditions!

## Stokes’ Law (Viscous Force on Sphere)

When a **small sphere** moves through a viscous fluid at **low velocity**, the viscous drag force is:

$$\boxed{F = 6\pi \eta r v}$$

where:

- η = coefficient of viscosity
- r = radius of sphere
- v = velocity of sphere

**Conditions for Stokes’ Law:**

1. Sphere must be **small** and **perfectly spherical**
2. Velocity must be **small** (Re < 1, laminar flow)
3. Fluid must be **infinite in extent** (or container much larger than sphere)
4. No slip at surface (fluid layer at surface moves with sphere)

> **★ Key point · Direction**
>
> Viscous force always opposes motion, acting **opposite to velocity** direction.

### Derivation by Dimensional Analysis

Let F depend on η, r, v:

$$F = k \eta^a r^b v^c$$

Dimensions:

$$[MLT^{-2}] = [ML^{-1}T^{-1}]^a [L]^b [LT^{-1}]^c$$

$$[MLT^{-2}] = [M^a L^{-a+b+c} T^{-a-c}]$$

Equating powers:

- M: 1 = a → **a = 1**
- T: -2 = -a - c → -2 = -1 - c → **c = 1**
- L: 1 = -a + b + c → 1 = -1 + b + 1 → **b = 1**

$$F = k \eta r v$$

Stokes showed experimentally and theoretically: **k = 6π**

$$\boxed{F = 6\pi \eta r v}$$

> **↗ Connection · Example: Viscous Force on Raindrop**
>
> A spherical raindrop of radius 1 mm falls through air (η = 1.8 × 10⁻⁵ Pa·s) at 4 m/s. Find viscous drag force.
>
> **Solution:**
>
> $$F = 6\pi \eta r v$$

$$= 6 \times 3.14 \times 1.8 \times 10^{-5} \times 10^{-3} \times 4$$

$$= 6 \times 3.14 \times 1.8 \times 4 \times 10^{-8}$$

$$= 1.36 \times 10^{-6} \text{ N}$$
>
> **F ≈ 1.4 μN** (micro-newtons)
>
> Very small force, but significant for tiny droplets!

## Terminal Velocity

When a body falls through a viscous fluid:

1. **Initially:** Weight > Drag, body **accelerates** downward
2. **Gradually:** Velocity increases → Drag increases (F ∝ v)
3. **Finally:** Weight = Drag + Buoyancy, **constant velocity** achieved

This constant velocity is called **terminal velocity**.

**Force balance at terminal velocity:**

$$mg = F_B + F_{viscous}$$

$$\rho_{sphere} \cdot V \cdot g = \rho_{fluid} \cdot V \cdot g + 6\pi \eta r v_t$$

$$\rho_{sphere} \cdot \frac{4}{3}\pi r^3 \cdot g = \rho_{fluid} \cdot \frac{4}{3}\pi r^3 \cdot g + 6\pi \eta r v_t$$

$$\frac{4}{3}\pi r^3 g (\rho_{sphere} - \rho_{fluid}) = 6\pi \eta r v_t$$

$$\boxed{v_t = \frac{2r^2 g (\rho_{sphere} - \rho_{fluid})}{9\eta}}$$

**Simplified (when ρ_sphere » ρ_fluid, like lead ball in water):**

$$\boxed{v_t = \frac{2r^2 \rho g}{9\eta}}$$

> **★ Key point · Key Observations**
>
> Terminal velocity:
>
> 1. **∝ r²** (radius squared) — bigger drops fall much faster!

> 2. **∝ (ρ_sphere - ρ_fluid)** — denser objects fall faster

> 3. **∝ 1/η** — higher viscosity → slower fall

> 4. **∝ g** — terminal velocity would be different on Moon!

> **★ Key point · Real Life: Why Small Raindrops Fall Slowly**
>
> **Large raindrop** (r = 2 mm): v_t ≈ 9 m/s (falls fast, hits hard)
>
> **Drizzle** (r = 0.2 mm): v_t ≈ 0.09 m/s (falls gently)
>
> Since v_t ∝ r², a drop **10 times smaller** falls **100 times slower**!
>
> This is why clouds float (tiny droplets with v_t < 0.01 m/s), but heavy rain falls quickly. Without viscosity, even tiny droplets would hit like bullets!

### Time to Reach Terminal Velocity

For a sphere starting from rest:

$$\boxed{t = \frac{m}{6\pi \eta r} \ln\left(\frac{v_t}{v_t - v}\right)}$$

Typically, terminal velocity is reached in fraction of a second for small objects.

**Approximate time to reach 90% of terminal velocity:**

$$t_{90\%} \approx \frac{2m}{6\pi \eta r} = \frac{m}{3\pi \eta r}$$

> **↗ Connection · Example: Terminal Velocity of Steel Ball**
>
> A steel ball (ρ = 7800 kg/m³) of radius 1 mm falls through glycerin (η = 1.5 Pa·s, ρ = 1260 kg/m³). Find terminal velocity. (g = 10 m/s²)
>
> **Solution:**
>
> $$v_t = \frac{2r^2 g (\rho_{steel} - \rho_{glycerin})}{9\eta}$$

$$= \frac{2 \times (10^{-3})^2 \times 10 \times (7800 - 1260)}{9 \times 1.5}$$

$$= \frac{2 \times 10^{-6} \times 10 \times 6540}{13.5}$$

$$= \frac{0.1308}{13.5} = 0.0097 \text{ m/s}$$
>
> **v_t ≈ 9.7 mm/s** (very slow!)
>
> Glycerin is **very viscous**, so even steel falls slowly.

## Poiseuille’s Law (Flow Through Pipe)

For **laminar flow** of incompressible fluid through cylindrical pipe:

**Volume flow rate:**

$$\boxed{Q = \frac{\pi r^4 (P_1 - P_2)}{8\eta L}}$$

where:

- Q = volume flow rate (m³/s)
- r = radius of pipe
- P₁ - P₂ = pressure difference between ends
- η = viscosity
- L = length of pipe

**Key observations:**

1. **Q ∝ r⁴** — Doubling radius increases flow by **16 times**!
2. **Q ∝ ΔP** — Linear dependence on pressure
3. **Q ∝ 1/η** — Higher viscosity → lower flow
4. **Q ∝ 1/L** — Longer pipe → lower flow

> **★ Key point · Real Life: Blood Vessels and Artery Blockage**
>
> Blood flow in arteries follows Poiseuille’s law.
>
> If an artery is **50% blocked** (radius reduced to half):
>
> - Flow rate reduces to (1/2)⁴ = **1/16** of normal!
>
> This is why even partial artery blockage is dangerous — it drastically reduces blood flow. A mere **16% reduction in radius** cuts flow by **half**!
>
> This explains why doctors take arterial plaque so seriously.

## Common Mistakes to Avoid

> **⚠ Trap · Mistake 1: Confusing Stokes' Law Conditions**
>
> **Wrong:** Stokes’ law applies to all objects in fluids.
>
> **Correct:** Stokes’ law applies only to:
>
> - **Small spherical objects**

> - **Low velocities** (laminar flow, Re < 1)

> - **Infinite medium** (or very large container)
>
> At high velocities, drag ∝ v² (not v), and F ≠ 6πηrv

> **⚠ Trap · Mistake 2: Terminal Velocity is Maximum Velocity**
>
> **Wrong:** Terminal velocity is the maximum velocity possible.
>
> **Correct:** Terminal velocity is the **constant** velocity when forces balance. An object initially moving faster than v_t will **decelerate** to v_t.

> **⚠ Trap · Mistake 3: Ignoring Buoyancy in Terminal Velocity**
>
> **Wrong:** v_t = 2r²ρg/(9η) always.
>
> **Correct:** This is only when ρ_object » ρ_fluid. Generally:
>
> $$v_t = \frac{2r^2 g (\rho_{object} - \rho_{fluid})}{9\eta}$$
>
> For less dense objects (like air bubbles in water), buoyancy is crucial!

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> A sphere of radius 2 mm moves through water (η = 10⁻³ Pa·s) at 5 cm/s. Find the viscous force.
>
> **Solution:**
>
> $$F = 6\pi \eta r v$$

$$= 6 \times 3.14 \times 10^{-3} \times 2 \times 10^{-3} \times 5 \times 10^{-2}$$

$$= 6 \times 3.14 \times 10^{-8}$$

$$= 1.88 \times 10^{-7} \text{ N} = \boxed{0.188 \text{ μN}}$$

> **↗ Connection · Problem 2**
>
> Find the terminal velocity of a rain drop of radius 0.3 mm falling through air. (ρ_water = 1000 kg/m³, η_air = 1.8 × 10⁻⁵ Pa·s, neglect buoyancy, g = 10 m/s²)
>
> **Solution:**
>
> $$v_t = \frac{2r^2 \rho g}{9\eta}$$

$$= \frac{2 \times (3 \times 10^{-4})^2 \times 1000 \times 10}{9 \times 1.8 \times 10^{-5}}$$

$$= \frac{2 \times 9 \times 10^{-8} \times 10^4}{16.2 \times 10^{-5}}$$

$$= \frac{1.8 \times 10^{-3}}{16.2 \times 10^{-5}} = \frac{1.8}{0.162} = 11.1 \text{ m/s}$$
>
> **v_t ≈ 11 m/s** (about 40 km/h!)

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> Two spheres of same material and radii r and 2r fall through same viscous fluid. Find ratio of their terminal velocities.
>
> **Solution:**
>
> $$v_t = \frac{2r^2 \rho g}{9\eta}$$
>
> Terminal velocity ∝ r²
>
> $$\frac{v_{t1}}{v_{t2}} = \frac{r_1^2}{r_2^2} = \frac{r^2}{(2r)^2} = \frac{1}{4}$$
>
> **Ratio = 1:4**
>
> Larger sphere falls **4 times faster**!

> **↗ Connection · Problem 4**
>
> A liquid flows through a tube at 10 cm³/s when pressure difference is 20 Pa. What pressure difference is needed for flow rate of 25 cm³/s?
>
> **Solution:**
>
> From Poiseuille’s law: Q ∝ ΔP
>
> $$\frac{Q_2}{Q_1} = \frac{\Delta P_2}{\Delta P_1}$$

$$\frac{25}{10} = \frac{\Delta P_2}{20}$$

$$\Delta P_2 = \frac{25 \times 20}{10} = \boxed{50 \text{ Pa}}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> A sphere of density 2000 kg/m³ is dropped in a liquid of density 1500 kg/m³ and viscosity 1 Pa·s. If it attains terminal velocity of 1 cm/s, find its radius. (g = 10 m/s²)
>
> **Solution:**
>
> $$v_t = \frac{2r^2 g (\rho_{sphere} - \rho_{liquid})}{9\eta}$$

$$0.01 = \frac{2r^2 \times 10 \times (2000 - 1500)}{9 \times 1}$$

$$0.01 = \frac{2r^2 \times 10 \times 500}{9}$$

$$0.01 = \frac{10000 r^2}{9}$$

$$r^2 = \frac{0.01 \times 9}{10000} = \frac{0.09}{10000} = 9 \times 10^{-6}$$

$$r = 3 \times 10^{-3} \text{ m} = \boxed{3 \text{ mm}}$$

> **↗ Connection · Problem 6**
>
> Eight identical droplets of radius r and terminal velocity v coalesce to form a single drop. Find terminal velocity of larger drop.
>
> **Solution:**
>
> Volume conserved:
>
> $$8 \times \frac{4}{3}\pi r^3 = \frac{4}{3}\pi R^3$$

$$R^3 = 8r^3$$

$$R = 2r$$
>
> Since v_t ∝ r²:
>
> $$\frac{v_t(\text{large})}{v_t(\text{small})} = \frac{R^2}{r^2} = \frac{(2r)^2}{r^2} = 4$$
>
> **v_t(large) = 4v**
>
> The combined drop falls **4 times faster**!

---

## Related Topics

### Within Properties of Matter

- [Fluid Pressure](../fluid-pressure/index.md) — Pressure in static fluids
- [Bernoulli’s Theorem](../bernoullis/index.md) — Pressure in moving fluids
- [Surface Tension](../surface-tension/index.md) — Surface effects

### Connected Chapters

- [Newton’s Laws](../../laws-of-motion/index.md) — Force and drag
- [Circular Motion](../../kinematics/circular-motion/index.md) — Centripetal force in viscous medium

---

From TestGuru · our mock-test platform

## You've read Viscosity and Stokes' Law.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=properties-solids-liquids&tg_exam=jee-main&tg_page=%2Fphysics%2Fproperties-solids-liquids%2Fviscosity%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/properties-solids-liquids/viscosity/",this.page.identifier="/physics/properties-solids-liquids/viscosity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="fluidFlow" id="anim-fluidFlow-1795396424148069706"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-fluidFlow-1795396424148069706")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/properties-solids-liquids/viscosity/](https://jeenotes.in/physics/properties-solids-liquids/viscosity/) · raw HTML: `offline/physics/properties-solids-liquids/viscosity/index.html`_
