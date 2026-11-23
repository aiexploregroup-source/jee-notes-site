---
title: "Factors Affecting Rate of Reaction"
source: "https://jeenotes.in/chemistry/chemical-kinetics/factors-affecting-rate/"
description: "Complete guide to factors affecting reaction rates: concentration, temperature, catalysts, surface area, and their effects on chemical kinetics for JEE"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Chemistry"
position: "/ Topic 3 of 10"
html: "../../../../offline/chemistry/chemical-kinetics/factors-affecting-rate/index.html"
extracted: "2026-11-23"
---

> Complete guide to factors affecting reaction rates: concentration, temperature, catalysts, surface area, and their effects on chemical kinetics for JEE

# Factors Affecting Rate of Reaction

## Real-Life Connection: Why Food Preservation Works

Why does storing food in the refrigerator keep it fresh longer? Why does blowing on a fire make it burn faster? Why does powdered sugar dissolve faster than a sugar cube? All these everyday observations are explained by the factors that affect reaction rates.

- **Refrigeration** slows bacterial growth by reducing temperature
- **Blowing on fire** increases oxygen concentration, speeding combustion
- **Powdered sugar** has more surface area, dissolving faster
- **Pressure cookers** increase temperature and pressure, cooking food faster

Understanding these factors is crucial for industrial processes, drug design, and even cooking!

## The Five Major Factors

### 1. Concentration of Reactants

### 2. Temperature

### 3. Catalyst

### 4. Surface Area

### 5. Nature of Reactants

Let’s explore each in detail.

## Factor 1: Concentration of Reactants

### The Collision Theory Explanation

For a reaction to occur:

1. Molecules must **collide**
2. Collisions must have **sufficient energy** (activation energy)
3. Molecules must have **proper orientation**

**Higher concentration** → **More molecules per unit volume** → **More collisions** → **Faster reaction**

### Mathematical Relationship

For most reactions, rate increases with concentration:

$$\boxed{\text{Rate} \propto [\text{Reactant}]^n}$$

where n is the order of reaction (discussed in detail in [Order and Molecularity](../order-molecularity/index.md))

### Example: Effect of Concentration

For the reaction:

$$2NO + O_2 \rightarrow 2NO_2$$

If we **double [NO]**, keeping [O₂] constant:

- Number of NO molecules doubles
- Collision frequency increases
- Rate increases (typically by factor of 4 for this reaction)

### Experimental Evidence

**Reaction:**

$$Zn + 2HCl \rightarrow ZnCl_2 + H_2$$

| [HCl] (M) | Initial Rate (mL H₂/min) |
| --- | --- |
| 0.5 | 10 |
| 1.0 | 20 |
| 2.0 | 40 |

**Observation:** Doubling concentration doubles the rate (first order in HCl)

### Pressure Effect (For Gaseous Reactions)

For gases: **Increase in pressure** = **Increase in concentration**

$$P = \frac{nRT}{V} \implies \text{Concentration} = \frac{n}{V} = \frac{P}{RT}$$

$$\boxed{[\text{Gas}] \propto P}$$

**Example:** Haber Process

$$N_2(g) + 3H_2(g) \rightarrow 2NH_3(g)$$

High pressure (200 atm) increases rate by increasing reactant concentrations.

## Factor 2: Temperature

### The Temperature Effect

**Most important rule in kinetics:**

$$\boxed{\text{Rate approximately doubles for every 10°C rise in temperature}}$$

This is called the **temperature coefficient rule** (rough approximation).

### Why Temperature Increases Rate

Temperature affects reaction rate in **two ways**:

1. **Increased collision frequency** (minor effect, ~1.5% per °C)
2. **Increased fraction of molecules with E ≥ Ea** (major effect)

### Maxwell-Boltzmann Distribution

At higher temperature:

- **Average kinetic energy** increases
- **More molecules** have energy ≥ Ea (activation energy)
- **Rate increases exponentially**

### Arrhenius Equation

The quantitative relationship between temperature and rate:

$$\boxed{k = Ae^{-E_a/RT}}$$

where:

- k = rate constant
- A = pre-exponential factor
- Ea = activation energy
- R = gas constant (8.314 J mol⁻¹ K⁻¹)
- T = temperature (Kelvin)

**Key insight:** Even small increase in T causes **exponential** increase in k

See detailed discussion: [Arrhenius Equation](../arrhenius-equation/index.md)

### Example: Medicine Expiry Dates

Pharmaceutical companies use the rule:

- Medicine stable for 2 years at 25°C
- Stable for only 1 year at 35°C
- Stable for 6 months at 45°C

Each 10°C increase roughly halves shelf life!

### Temperature Coefficient (Q₁₀)

$$\boxed{Q_{10} = \frac{k_{T+10}}{k_T}}$$

Typically, Q₁₀ = 2 to 3 for most reactions.

## Factor 3: Catalyst

### What is a Catalyst?

**Definition:** A substance that increases reaction rate without being consumed in the overall reaction.

$$\boxed{\text{Catalyst increases rate by providing alternative pathway with lower } E_a}$$

### How Catalysts Work

**Without catalyst:** A + B → Products (slow, high Ea)
**With catalyst:**

- A + B + Catalyst → Intermediate (lower Ea)
- Intermediate → Products + Catalyst (fast)

**Energy Profile:**

```fallback
Without catalyst:    ∧ (high Ea)
                    / \
                   /   \
                  /     \

With catalyst:      ∧∧  (lower Ea)
                   /  \/  \
                  /        \
```

### Key Properties of Catalysts

1. **Not consumed** - regenerated at the end
2. **Speeds both** forward and reverse reactions equally
3. **No effect on equilibrium position** (only reaches equilibrium faster)
4. **Small amount** needed (catalytic amount)
5. **Specific** - one catalyst for one type of reaction

### Types of Catalysis

#### A. Homogeneous Catalysis

Catalyst in **same phase** as reactants

**Example 1:** Lead chamber process for H₂SO₄

$$2SO_2(g) + O_2(g) \xrightarrow{NO(g)} 2SO_3(g)$$

NO(g) is in same phase as reactants.

**Example 2:** Acid catalysis of ester hydrolysis

$$CH_3COOCH_3 + H_2O \xrightarrow{H^+} CH_3COOH + CH_3OH$$

H⁺ is in same aqueous phase.

#### B. Heterogeneous Catalysis

Catalyst in **different phase** from reactants

**Example 1:** Haber Process

$$N_2(g) + 3H_2(g) \xrightarrow{Fe(s)} 2NH_3(g)$$

Fe(s) catalyst, reactants are gases.

**Example 2:** Hydrogenation of oils

$$\text{Vegetable oil}(l) + H_2(g) \xrightarrow{Ni(s)} \text{Vanaspati}(s)$$

**Example 3:** Catalytic converter in cars

$$2CO(g) + 2NO(g) \xrightarrow{Pt(s)} 2CO_2(g) + N_2(g)$$

### Mechanism of Heterogeneous Catalysis

**Steps:**

1. **Adsorption** of reactants on catalyst surface
2. **Reaction** on the surface (with lower Ea)
3. **Desorption** of products from surface

### Enzyme Catalysis (Biological Catalysts)

**Enzymes** are nature’s catalysts:

- Extremely specific (lock-and-key model)
- Work at body temperature (37°C)
- Can speed reactions by factors of 10⁶ to 10¹⁷!

**Example:** Carbonic anhydrase

$$CO_2 + H_2O \xrightarrow{\text{enzyme}} H_2CO_3$$

Without enzyme: very slow
With enzyme: 10⁷ times faster!

## Factor 4: Surface Area

### Effect of Surface Area

$$\boxed{\text{Greater surface area} \rightarrow \text{More active sites} \rightarrow \text{Faster reaction}}$$

**Important for:**

- Heterogeneous reactions
- Solid reactants

### Examples

1. **Powdered vs. lump calcium carbonate:**

   $$CaCO_3(s) + 2HCl(aq) \rightarrow CaCl_2(aq) + H_2O + CO_2(g)$$

   Powdered CaCO₃ reacts **much faster** than lumps.
2. **Wood burning:**

   - Thick log: burns slowly
   - Wood shavings: burn rapidly
   - Sawdust: can explode (dust explosion)!
3. **Coal dust explosions in mines:**
   Fine coal particles have enormous surface area, leading to rapid combustion and explosions.

### Quantification

If a cube of side ‘a’ is divided into smaller cubes:

- Original surface area = 6a²
- If divided into n³ cubes, new surface area = 6na²

**Surface area increases** as particle size decreases.

## Factor 5: Nature of Reactants

### Bond Strength

**Stronger bonds** → **Higher Ea** → **Slower reaction**

### Examples

1. **Alkali metals with water:**

   - Li: slow reaction
   - Na: vigorous reaction
   - K: very vigorous (flames)
   - Cs: explosive

   Reactivity increases down the group!
2. **Ionic vs. Covalent reactions:**

   - **Ionic reactions** (in solution): Very fast (10⁻⁸ to 10⁻¹⁰ s)

     $$Ag^+ + Cl^- \rightarrow AgCl$$

     (instantaneous)
   - **Covalent reactions**: Slower (bond breaking required)

     $$CH_4 + Cl_2 \rightarrow CH_3Cl + HCl$$

     (needs UV light, heat)
3. **Complexity of molecules:**

   - Simple molecules: faster reactions
   - Complex molecules: slower (more bonds to break/form)

## Memory Trick: “CCTTS”

**C**oncentration - More molecules, more collisions
**C**atalyst - Lowers the mountain (Ea)
**T**emperature - Makes molecules move faster and hit harder
**T**emperature - (doubles rate every 10°C)
**S**urface area - More surface, more action

**Alternative:** “**C**ats **C**an **T**rack **T**emperature **S**ignals”

## Common Mistakes in JEE

### Mistake 1: Catalyst and Equilibrium

**Wrong:** “Catalyst increases product yield in equilibrium reactions”

**Correct:** Catalyst has **NO effect on equilibrium position**, only helps reach equilibrium faster.

### Mistake 2: Temperature Coefficient

**Wrong:** “Rate exactly doubles for every 10°C rise”

**Correct:** This is an **approximation**. Actual factor depends on activation energy (typically 2-3).

### Mistake 3: Pressure Effect

**Wrong:** “Increasing pressure always increases rate”

**Correct:** Pressure affects rate **only for gaseous reactions** (by increasing concentration).

### Mistake 4: Surface Area in Solutions

**Wrong:** “Surface area matters for dissolved ionic compounds”

**Correct:** Surface area important only for **heterogeneous reactions** (solids with gases/liquids).

## Practice Problems

### Level 1: JEE Main Foundation

**Problem 1:** The rate of a reaction increases four times when temperature changes from 300 K to 320 K. Calculate the temperature coefficient (Q₁₀).

**Solution:**

$$\frac{k_{320}}{k_{300}} = 4$$

for 20°C rise

For 10°C rise:

$$Q_{10} = \sqrt{4} = 2$$

(Since 20°C rise gives factor of 4, 10°C rise gives √4 = 2)

### Level 2: JEE Main/Advanced

**Problem 2:** For a reaction, the rate doubles when concentration of reactant A is doubled. When temperature is increased from 300 K to 310 K, rate doubles again.

(a) What is the order with respect to A?
(b) What is the temperature coefficient?
(c) If both changes are made simultaneously, by what factor does rate increase?

**Solution:**

(a) Rate ∝ [A]ⁿ
If [A] doubles and rate doubles: 2 = 2ⁿ → n = 1
**Order = 1** (first order)

(b) Temperature coefficient:
Rate doubles for 10 K rise

$$Q_{10} = 2$$

(c) Both effects multiply:

- Doubling [A] → rate × 2
- Raising temperature by 10 K → rate × 2
- **Total effect** = 2 × 2 = **4 times**

### Level 3: JEE Advanced

**Problem 3:** A certain reaction has:

- Ea = 80 kJ/mol
- Rate constant k₁ at 300 K
- Rate constant k₂ at 320 K

Calculate k₂/k₁ using Arrhenius equation. (R = 8.314 J mol⁻¹ K⁻¹)

**Solution:**

Arrhenius equation in logarithmic form:

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$\ln\frac{k_2}{k_1} = \frac{80000}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right)$$

$$\ln\frac{k_2}{k_1} = 9620.7 \times \left(0.003333 - 0.003125\right)$$

$$\ln\frac{k_2}{k_1} = 9620.7 \times 0.000208 = 2.00$$

$$\frac{k_2}{k_1} = e^{2.00} = 7.39$$

**Answer:** Rate increases by factor of **7.39**

This confirms that for reactions with high Ea, temperature has a strong effect!

**Problem 4:** In the presence of catalyst C, a reaction has activation energy 60 kJ/mol. Without catalyst, Ea = 100 kJ/mol. At 300 K, by what factor does the catalyst increase the rate? (R = 8.314 J mol⁻¹ K⁻¹)

**Solution:**

$$\frac{k_{catalyzed}}{k_{uncatalyzed}} = \frac{Ae^{-E_{a,cat}/RT}}{Ae^{-E_{a,uncat}/RT}}$$

$$= e^{-(E_{a,cat} - E_{a,uncat})/RT}$$

$$= e^{-(60000 - 100000)/(8.314 \times 300)}$$

$$= e^{40000/2494.2} = e^{16.04}$$

$$= 9.16 \times 10^6$$

**Answer:** Catalyst increases rate by factor of **~10⁷**!

## Comparison Table: All Factors

| Factor | Effect on Rate | Mechanism | Examples |
| --- | --- | --- | --- |
| **↑ Concentration** | Increases | More collisions | Zn + HCl |
| **↑ Temperature** | Increases (exponential) | More energetic collisions | Food spoilage |
| **+ Catalyst** | Increases | Lower Ea pathway | Enzyme reactions |
| **↑ Surface Area** | Increases | More active sites | Powdered vs. lump |
| **Nature** | Varies | Bond strength, complexity | Ionic vs. covalent |
| **↑ Pressure (gas)** | Increases | Increased concentration | Haber process |

## Industrial Applications

### 1. Haber Process (NH₃ Production)

$$N_2 + 3H_2 \rightleftharpoons 2NH_3$$

**Optimized conditions:**

- **High pressure** (200 atm) - increases concentration
- **Moderate temperature** (450°C) - compromise between rate and equilibrium
- **Iron catalyst** - speeds up reaction

### 2. Contact Process (H₂SO₄ Production)

$$2SO_2 + O_2 \xrightarrow{V_2O_5} 2SO_3$$

**Optimized conditions:**

- **V₂O₅ catalyst** - lowers Ea
- **Moderate temperature** (450°C)
- **Atmospheric pressure**

### 3. Catalytic Converters

Convert harmful gases to less harmful:

$$2CO + 2NO \xrightarrow{Pt, Pd, Rh} 2CO_2 + N_2$$

**Honeycomb structure** provides maximum surface area for catalysis.

## Connection to Other Topics

### Link to Arrhenius Equation

- Temperature effect is quantified by Arrhenius equation
- See: [Arrhenius Equation](../arrhenius-equation/index.md)

### Link to Chemical Equilibrium

- Catalyst doesn’t change equilibrium constant K
- Both forward and reverse rates increase equally
- See: [Equilibrium Principles](../../equilibrium/index.md)

### Link to Thermodynamics

- ΔG determines spontaneity (equilibrium position)
- Ea determines rate (kinetics)
- Thermodynamically favorable reaction may be kinetically slow
- See: [Thermodynamics](../../thermodynamics/index.md)

### Link to Collision Theory

- All factors relate to collision frequency and energy
- See: [Rate Law](../rate-law/index.md)

## JEE Previous Year Questions

**JEE Main 2020:** Which factor does NOT affect the rate of reaction?
(a) Concentration of reactants
(b) Temperature
(c) ΔH of reaction
(d) Catalyst

**Answer:** (c) ΔH of reaction

**Explanation:** ΔH (enthalpy change) is a thermodynamic quantity that determines energy released/absorbed, but does NOT affect reaction rate. Rate depends on activation energy (Ea), not ΔH.

## Quick Revision Points

1. **Concentration** ↑ → Rate ↑ (more collisions)
2. **Temperature** ↑ → Rate ↑ exponentially (more energetic collisions)
3. **Catalyst** → Rate ↑ (lower Ea, no change in ΔH or K)
4. **Surface area** ↑ → Rate ↑ (heterogeneous reactions)
5. **Nature of reactants** - ionic faster than covalent
6. **Pressure** ↑ (for gases) → Concentration ↑ → Rate ↑
7. **Q₁₀ ≈ 2-3** for most reactions
8. **Catalyst specificity** - one catalyst, one reaction type

## Summary

Understanding factors affecting reaction rates is crucial for:

- **Predicting** how reactions behave under different conditions
- **Optimizing** industrial processes
- **Solving** JEE problems involving kinetics

The interplay between concentration, temperature, and catalysts forms the foundation of chemical kinetics and has wide-ranging applications from drug design to industrial chemistry.

---

**Previous Topic:** [Rate of Reaction](../rate-of-reaction/index.md)
**Next Topic:** [Order and Molecularity](../order-molecularity/index.md)

From TestGuru · our mock-test platform

## You've read Factors Affecting Rate of Reaction.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=chemical-kinetics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fchemical-kinetics%2Ffactors-affecting-rate%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-17

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/chemical-kinetics/factors-affecting-rate/",this.page.identifier="/chemistry/chemical-kinetics/factors-affecting-rate/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionRate" id="anim-reactionRate-1795396419409818661"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionRate-1795396419409818661")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="maxwellBoltzmann" id="anim-maxwellBoltzmann-1795396419409867826"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-maxwellBoltzmann-1795396419409867826")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/chemical-kinetics/factors-affecting-rate/](https://jeenotes.in/chemistry/chemical-kinetics/factors-affecting-rate/) · raw HTML: `offline/chemistry/chemical-kinetics/factors-affecting-rate/index.html`_
