---
title: "Bernoulli's Theorem and Applications"
source: "https://jeenotes.in/physics/properties-solids-liquids/bernoullis/"
description: "Master Bernoulli's equation and fluid dynamics applications for JEE Physics"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 8"
html: "../../../../offline/physics/properties-solids-liquids/bernoullis/index.html"
extracted: "2026-11-23"
---

> Master Bernoulli's equation and fluid dynamics applications for JEE Physics

## Prerequisites

Before studying Bernoulli’s theorem, make sure you understand:

- [Fluid Pressure](../fluid-pressure/index.md) — Hydrostatic pressure
- [Work-Energy](../../work-energy-power/index.md) — Energy conservation
- [Viscosity](../viscosity/index.md) — Streamline vs turbulent flow

## What is Bernoulli’s Theorem?

**Bernoulli’s Theorem** is the **law of energy conservation** applied to fluids in motion.

> **★ Key point · Bernoulli's Principle**
>
> For an **ideal fluid** (non-viscous, incompressible) in **streamline flow**, the total mechanical energy per unit volume remains constant along a streamline.
>
> $$\boxed{P + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}}$$
>
> Or, dividing by ρg:
>
> $$\boxed{\frac{P}{\rho g} + \frac{v^2}{2g} + h = \text{constant}}$$

### Interactive Demo: Visualize Bernoulli’s Principle

Explore how pressure, velocity, and height are related in flowing fluids.

where:

- **P** = pressure (pressure energy per unit volume)
- **½ρv²** = kinetic energy per unit volume
- **ρgh** = potential energy per unit volume

> **★ Key point · Real Life: Airplane Wings**
>
> Ever wonder why airplanes fly?
>
> **Bernoulli’s principle!**
>
> Air flows **faster** over the curved top of the wing than the flat bottom. According to Bernoulli’s equation:
>
> - Higher velocity (top) → **Lower pressure**

> - Lower velocity (bottom) → **Higher pressure**
>
> Pressure difference creates **upward lift force** that keeps the plane airborne!
>
> A Boeing 747 generates about **1.8 million pounds** of lift using this principle.

## Assumptions for Bernoulli’s Equation

Bernoulli’s theorem applies when:

1. **Fluid is incompressible** (ρ = constant)

   - True for liquids
   - Approximately true for gases at low speeds (v « speed of sound)
2. **Fluid is non-viscous** (η = 0)

   - No internal friction
   - No energy loss to heat
3. **Flow is streamline** (laminar, not turbulent)

   - Organized, smooth flow
   - No eddies or vortices
4. **Flow is steady** (velocity at any point doesn’t change with time)

   - ∂v/∂t = 0
5. **No energy added or removed** along streamline

   - No pumps, turbines, or heat exchange

> **◐ In simple terms · Real vs Ideal Fluids**
>
> Real fluids have some viscosity and energy losses. Bernoulli’s equation gives **approximate** results for real fluids, with corrections needed for:
>
> - Viscous drag

> - Turbulence

> - Compressibility (for gases at high speeds)

## Derivation Using Energy Conservation

Consider a fluid element moving along a streamline from point 1 to point 2.

**Work done BY pressure forces:**

$$W_{pressure} = P_1 A_1 v_1 \Delta t - P_2 A_2 v_2 \Delta t$$

**Mass of fluid element:**

$$\Delta m = \rho A_1 v_1 \Delta t = \rho A_2 v_2 \Delta t$$

(continuity equation)

**Work-energy theorem:**

$$W = \Delta KE + \Delta PE$$

$$P_1 A_1 v_1 \Delta t - P_2 A_2 v_2 \Delta t = \frac{1}{2}\Delta m (v_2^2 - v_1^2) + \Delta m \cdot g(h_2 - h_1)$$

Divide by ΔV = A₁v₁Δt = A₂v₂Δt:

$$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2) + \rho g(h_2 - h_1)$$

Rearranging:

$$\boxed{P_1 + \frac{1}{2}\rho v_1^2 + \rho gh_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho gh_2}$$

**At any two points on a streamline!**

## Equation of Continuity

For **incompressible fluid** in streamline flow:

**Mass flow rate is constant** at all cross-sections.

$$\boxed{A_1 v_1 = A_2 v_2 = \text{constant}}$$

$$\boxed{Av = \text{constant}}$$

where:

- A = cross-sectional area
- v = velocity of fluid

**Physical meaning:** Where pipe narrows, fluid flows faster!

> **★ Key point · Real Life: Garden Hose**
>
> When you partially cover the end of a garden hose with your thumb:
>
> - **Area decreases** → **Velocity increases** (continuity equation)

> - Water shoots out **faster** and goes **farther**
>
> This is why firefighters use nozzles — to increase water velocity by reducing cross-section!

> **↗ Connection · Example: Continuity Equation**
>
> Water flows through a pipe of diameter 4 cm at 2 m/s. The pipe narrows to 2 cm diameter. Find velocity in narrow section.
>
> **Solution:**
>
> A₁v₁ = A₂v₂
>
> $$\pi r_1^2 v_1 = \pi r_2^2 v_2$$

$$r_1^2 v_1 = r_2^2 v_2$$

$$(2)^2 \times 2 = (1)^2 \times v_2$$

$$v_2 = \frac{4 \times 2}{1} = \boxed{8 \text{ m/s}}$$
>
> Velocity **quadruples** when radius is halved!

## Applications of Bernoulli’s Theorem

### 1. Torricelli’s Theorem (Efflux Velocity)

**Problem:** A tank filled with liquid has a small hole at depth h below the surface. Find velocity of liquid emerging from hole.

**Solution:**

Apply Bernoulli between surface (point 1) and hole (point 2):

At surface:

- P₁ = P₀ (atmospheric)
- v₁ ≈ 0 (large tank)
- height = h

At hole:

- P₂ = P₀ (jet exits to atmosphere)
- v₂ = v (to find)
- height = 0 (reference)

$$P_0 + 0 + \rho gh = P_0 + \frac{1}{2}\rho v^2 + 0$$

$$\boxed{v = \sqrt{2gh}}$$

**Torricelli’s Law:** Velocity of efflux equals velocity of free fall from height h!

> **◐ In simple terms · Same as Free Fall!**
>
> $$v = \sqrt{2gh}$$
>
> This is the **same formula** as for an object dropped from height h!
>
> The liquid “falls” horizontally through the hole with the same speed it would gain falling vertically through distance h.

> **★ Key point · Real Life: Water Tank Leakage**
>
> If your overhead water tank has a leak at the bottom (10 m below water surface):
>
> $$v = \sqrt{2 \times 10 \times 10} = \sqrt{200} \approx 14 \text{ m/s}$$
>
> Water shoots out at **14 m/s** (about 50 km/h) — that’s why leaks can spray water quite far!

### 2. Venturi Meter (Measuring Flow Rate)

**Device:** Horizontal tube with a **constriction** (narrow section) used to measure flow rate.

**Setup:**

- Wide section: area A₁, pressure P₁, velocity v₁
- Narrow section: area A₂, pressure P₂, velocity v₂
- Manometer measures pressure difference

**Analysis:**

From continuity: $A_1 v_1 = A_2 v_2$

From Bernoulli (horizontal, h₁ = h₂):

$$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2)$$

Using continuity to eliminate v₂:

$$v_1 = A_2 v_2 / A_1$$

After algebra:

$$\boxed{v_1 = A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho(A_1^2 - A_2^2)}}}$$

**Flow rate:**

$$\boxed{Q = A_1 v_1}$$

> **◐ In simple terms · Key Observation**
>
> In **constriction** (narrow section):
>
> - Velocity **increases** (continuity)

> - Pressure **decreases** (Bernoulli)
>
> **P₁ > P₂** even though v₁ < v₂!
>
> This seems counterintuitive but is fundamental to Bernoulli’s principle.

### 3. Atomizer/Sprayer

**Principle:** Air blown rapidly over a tube creates low pressure, sucking liquid up and spraying it.

**How it works:**

1. Air blows fast over tube opening (high velocity)
2. By Bernoulli: high v → **low pressure**
3. Atmospheric pressure in liquid container pushes liquid up
4. Liquid emerges and gets atomized by air stream

**Examples:**

- Perfume sprayers
- Paint sprayers
- Insecticide sprayers
- Carburetors in engines

> **★ Key point · Real Life: Perfume Spray Bottle**
>
> When you press a perfume sprayer:
>
> - Air rushes rapidly through narrow tube

> - Creates **low pressure zone** at tube exit (Bernoulli)

> - Liquid perfume is **pushed up** by atmospheric pressure from below

> - Air stream **atomizes** liquid into fine mist
>
> No pump needed — Bernoulli’s principle does all the work!

### 4. Magnus Effect (Spinning Ball)

When a ball **spins** while moving through air:

- Air velocity is **higher** on side moving with ball’s motion
- Air velocity is **lower** on side moving against ball’s motion
- By Bernoulli: **pressure difference** creates sideways force

**Examples:**

- **Baseball curve ball:** Spins to curve the trajectory
- **Table tennis spin:** Top spin makes ball dip, backspin makes it rise
- **Soccer free kicks:** “Banana kick” curves around defensive wall

> **★ Key point · Real Life: Cricket Swing Bowling**
>
> In cricket, bowlers make the ball **swing** in air using:
>
> 1. **Spin** (Magnus effect)

> 2. **Seam orientation** (creates asymmetric airflow)

> 3. **Ball shine** (one side rough, one smooth)
>
> Combined with Bernoulli’s principle, the ball can curve dramatically — sometimes more than a meter! This makes it incredibly difficult for batsmen.

### 5. Chimney and Ventilation

**Tall chimneys** create better draft (upward flow):

- Wind blows across top of chimney (high velocity)
- Creates low pressure at top (Bernoulli)
- Higher pressure inside causes smoke/air to rise

**Height advantage:** Taller chimney → greater pressure difference → better draft

### 6. Aerofoil (Airfoil) Lift

**Airplane wing shape:**

- **Curved top** (convex)
- **Flat or less curved bottom**

**Airflow:**

- Air travels **farther** over curved top → flows **faster** (to meet air from bottom)
- Faster flow on top → **lower pressure** (Bernoulli)
- Slower flow on bottom → **higher pressure**

**Result:** Net **upward force** (lift)

$$\boxed{F_{lift} = \frac{1}{2}\rho(v_{top}^2 - v_{bottom}^2) \cdot A}$$

where A = wing area

## Common Mistakes to Avoid

> **⚠ Trap · Mistake 1: Using Bernoulli for Viscous Fluids**
>
> **Wrong:** Applying Bernoulli to highly viscous fluids like honey.
>
> **Correct:** Bernoulli assumes **non-viscous** fluid. For viscous fluids, energy is lost to friction, and Bernoulli’s equation doesn’t hold.

> **⚠ Trap · Mistake 2: Comparing Points Not on Same Streamline**
>
> **Wrong:** Using Bernoulli between any two points in flow.
>
> **Correct:** Bernoulli equation connects points **on the same streamline** only. Can’t compare points on different streamlines unless flow is irrotational.

> **⚠ Trap · Mistake 3: Forgetting Atmospheric Pressure**
>
> **Wrong:** In Torricelli’s theorem, P₁ = ρgh, P₂ = 0
>
> **Correct:** Both surface and hole exit are at **atmospheric pressure** P₀. These cancel out in the equation.

> **⚠ Trap · Mistake 4: High Velocity Always Means Low Pressure**
>
> **Wrong:** “High speed always creates low pressure”
>
> **Correct:** High speed means low pressure **along a streamline** (Bernoulli). But different streamlines can have different total energies. Static pressure may increase with velocity if height or other factors change.

## Practice Problems

### Level 1: JEE Main Basics

> **↗ Connection · Problem 1**
>
> Water flows through a horizontal pipe. At section 1, area = 20 cm², velocity = 2 m/s, pressure = 10⁵ Pa. At section 2, area = 10 cm². Find pressure at section 2. (ρ_water = 1000 kg/m³)
>
> **Solution:**
>
> **From continuity:**
>
> $$A_1 v_1 = A_2 v_2$$

$$20 \times 2 = 10 \times v_2$$

$$v_2 = 4 \text{ m/s}$$
>
> **From Bernoulli (horizontal, h₁ = h₂):**
>
> $$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$

$$10^5 + \frac{1}{2} \times 1000 \times 4 = P_2 + \frac{1}{2} \times 1000 \times 16$$

$$10^5 + 2000 = P_2 + 8000$$

$$P_2 = 102000 - 8000 = 94000 \text{ Pa}$$
>
> **P₂ = 9.4 × 10⁴ Pa**
>
> Pressure **decreased** as velocity increased!

> **↗ Connection · Problem 2**
>
> A water tank has a hole at depth 5 m below surface. Find speed of water emerging from hole. (g = 10 m/s²)
>
> **Solution:**
>
> Using Torricelli’s theorem:
>
> $$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 5}$$

$$= \sqrt{100} = \boxed{10 \text{ m/s}}$$

### Level 2: JEE Main/Advanced

> **↗ Connection · Problem 3**
>
> A horizontal pipe has two sections with areas 40 cm² and 10 cm². Water flows at 1 m/s in larger section. Pressure difference between sections is measured as 3000 Pa. Find density of water.
>
> **Solution:**
>
> **Continuity:**
>
> $$v_1 = 1 \text{ m/s}, \quad v_2 = \frac{A_1 v_1}{A_2} = \frac{40 \times 1}{10} = 4 \text{ m/s}$$
>
> **Bernoulli:**
>
> $$P_1 - P_2 = \frac{1}{2}\rho(v_2^2 - v_1^2)$$

$$3000 = \frac{1}{2}\rho(16 - 1)$$

$$3000 = \frac{15\rho}{2}$$

$$\rho = \frac{6000}{15} = \boxed{400 \text{ kg/m}^3}$$
>
> (This is less than water’s actual density — problem might be for oil or there’s experimental error)

> **↗ Connection · Problem 4**
>
> Water flows through a pipe inclined at 30° to horizontal. At lower point (P₁), area = 20 cm², velocity = 2 m/s, pressure = 2 × 10⁵ Pa. At upper point (P₂) 2 m higher, area = 10 cm². Find pressure at P₂.
>
> **Solution:**
>
> **Continuity:**
>
> $$v_2 = \frac{A_1 v_1}{A_2} = \frac{20 \times 2}{10} = 4 \text{ m/s}$$
>
> **Bernoulli:**
>
> $$P_1 + \frac{1}{2}\rho v_1^2 + \rho g h_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g h_2$$
>
> Taking h₁ = 0, h₂ = 2:
>
> $$2 \times 10^5 + \frac{1}{2}(1000)(4) + 0 = P_2 + \frac{1}{2}(1000)(16) + 1000(10)(2)$$

$$200000 + 2000 = P_2 + 8000 + 20000$$

$$P_2 = 202000 - 28000 = \boxed{1.74 \times 10^5 \text{ Pa}}$$
>
> Pressure decreased due to both increased velocity and height!

### Level 3: JEE Advanced

> **↗ Connection · Problem 5**
>
> A cylindrical tank of height 3 m and radius 1 m is filled with water. A small hole of area 1 cm² is made at bottom. Find:

> (a) Initial velocity of efflux

> (b) Initial volume flow rate

> (c) Time to empty the tank (assuming constant velocity — approximation)
>
> **Solution:**
>
> **(a) Initial velocity:**
>
> $$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 3} = \sqrt{60} \approx 7.75 \text{ m/s}$$
>
> **(b) Volume flow rate:**
>
> $$Q = Av = (1 \times 10^{-4}) \times 7.75 = 7.75 \times 10^{-4} \text{ m}^3\text{/s}$$
>
> **(c) Time to empty:**
>
> Volume of tank = πr²h = π(1)²(3) = 3π m³
>
> $$t = \frac{V}{Q} = \frac{3\pi}{7.75 \times 10^{-4}} = \frac{9.42}{7.75 \times 10^{-4}} \approx 12155 \text{ s}$$
>
> **≈ 3.4 hours**
>
> (This is **underestimate** because velocity decreases as water level drops!)

> **↗ Connection · Problem 6**
>
> A large open tank has two small holes in its vertical wall, one at depth h₁ = 1 m and another at h₂ = 4 m from top. If the water streams from both holes hit the ground at the same point, find height of water in tank.
>
> **Solution:**
>
> Let water surface be at height H from ground.
>
> **Hole 1:** At depth h₁ = 1 m, height from ground = H - 1
>
> Efflux velocity: $v_1 = \sqrt{2gh_1} = \sqrt{2g}$
>
> Horizontal range (projectile motion):
>
> $$R_1 = v_1 \times t_1 = \sqrt{2g} \times \sqrt{\frac{2(H-1)}{g}} = 2\sqrt{H-1}$$
>
> **Hole 2:** At depth h₂ = 4 m, height from ground = H - 4
>
> Efflux velocity: $v_2 = \sqrt{2gh_2} = \sqrt{8g}$
>
> Range:
>
> $$R_2 = v_2 \times t_2 = \sqrt{8g} \times \sqrt{\frac{2(H-4)}{g}} = 4\sqrt{H-4}$$
>
> For same range: R₁ = R₂
>
> $$2\sqrt{H-1} = 4\sqrt{H-4}$$

$$\sqrt{H-1} = 2\sqrt{H-4}$$
>
> Square both sides:
>
> $$H - 1 = 4(H - 4)$$

$$H - 1 = 4H - 16$$

$$3H = 15$$

$$\boxed{H = 5 \text{ m}}$$
>
> Water height is **5 m** from ground.

## Summary Table

| Application | Key Formula | Condition |
| --- | --- | --- |
| **Bernoulli’s Equation** | P + ½ρv² + ρgh = const | Streamline flow, ideal fluid |
| **Continuity** | Av = constant | Incompressible fluid |
| **Torricelli’s Theorem** | v = √(2gh) | Horizontal efflux from depth h |
| **Venturi Meter** | v₁ = A₂√[2ΔP/ρ(A₁²-A₂²)] | Horizontal pipe |

---

## Related Topics

### Within Properties of Matter

- [Fluid Pressure](../fluid-pressure/index.md) — Static pressure fundamentals
- [Viscosity](../viscosity/index.md) — Real fluid effects
- [Surface Tension](../surface-tension/index.md) — Surface energy considerations

### Connected Chapters

- [Work-Energy-Power](../../work-energy-power/index.md) — Energy conservation
- [Kinematics](../../kinematics/projectile-motion/index.md) — Trajectory of water streams

---

From TestGuru · our mock-test platform

## You've read Bernoulli's Theorem and Applications.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=properties-solids-liquids&tg_exam=jee-main&tg_page=%2Fphysics%2Fproperties-solids-liquids%2Fbernoullis%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/properties-solids-liquids/bernoullis/",this.page.identifier="/physics/properties-solids-liquids/bernoullis/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="fluidFlow" id="anim-fluidFlow-1795396424140999433"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-fluidFlow-1795396424140999433")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/properties-solids-liquids/bernoullis/](https://jeenotes.in/physics/properties-solids-liquids/bernoullis/) · raw HTML: `offline/physics/properties-solids-liquids/bernoullis/index.html`_
