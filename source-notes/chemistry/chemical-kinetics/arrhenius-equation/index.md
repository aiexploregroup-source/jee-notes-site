---
title: "Arrhenius Equation and Activation Energy"
source: "https://jeenotes.in/chemistry/chemical-kinetics/arrhenius-equation/"
description: "Complete guide to Arrhenius equation, activation energy, temperature dependence of rate constant, and energy profiles for JEE"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Chemistry"
position: "/ Topic 1 of 10"
html: "../../../../offline/chemistry/chemical-kinetics/arrhenius-equation/index.html"
extracted: "2026-11-23"
---

> Complete guide to Arrhenius equation, activation energy, temperature dependence of rate constant, and energy profiles for JEE

# Arrhenius Equation and Activation Energy

## Real-Life Connection: Why Refrigeration Preserves Food

Why does milk last for days in the refrigerator but spoils in hours at room temperature? Why do chemical hand warmers activate when you break an inner pouch? Why do fireflies glow only when warm?

The answer: **Activation energy and the Arrhenius equation**!

**Food preservation:**

- At 25°C: Bacterial growth rapid (k large)
- At 4°C: Bacterial growth slow (k small)
- Temperature decrease → Exponential decrease in rate

**Chemical hand warmers:**

- Breaking pouch exposes iron to air
- Fe + O₂ reaction has high activation energy
- Needs initial heat to overcome Ea barrier
- Once started, releases more heat (exothermic)

**Biological processes:**

- Enzymes optimized for 37°C (body temperature)
- Fever (↑T) → faster metabolism
- Hypothermia (↓T) → slower metabolism

The **Arrhenius equation** quantifies how temperature affects reaction rates through activation energy!

## What is Activation Energy?

### Definition

**Activation energy (Ea)** is the minimum energy that colliding molecules must possess for a reaction to occur.

$$\boxed{E_a = \text{Energy barrier that must be overcome}}$$

### Energy Profile Diagram

```fallback
Energy
  |
  |      ╱╲  ← Transition State
  |     ╱  ╲
  |    ╱    ╲
Ea→   |      ╲
  |   |       ╲_____ Products
  |___Reactants
  |
  |_________________
     Reaction Progress
```

**Key points:**

- **Reactants** must climb energy barrier
- **Transition state** (activated complex) at the top
- **Ea** = height of barrier
- **Products** may be higher or lower energy (ΔH)

### Why Activation Energy Exists

**Not all collisions lead to reaction!**

For reaction to occur, molecules need:

1. **Sufficient energy** (≥ Ea)
2. **Proper orientation**
3. **Collision** to occur

**Ea represents:**

- Energy to break old bonds (partially)
- Energy to rearrange atoms
- Energy to form transition state

### Relationship to Rate

$$\boxed{\text{Higher } E_a \rightarrow \text{Slower reaction}}$$

$$\boxed{\text{Lower } E_a \rightarrow \text{Faster reaction}}$$

**Examples:**

- Combustion reactions: Low Ea → Fast (can explode)
- Rusting of iron: High Ea → Slow (years)
- Diamond → Graphite: Very high Ea → No observable change (thermodynamically favorable but kinetically impossible!)

## The Arrhenius Equation

### Basic Form

$$\boxed{k = Ae^{-E_a/RT}}$$

where:

- **k** = rate constant
- **A** = pre-exponential factor (frequency factor)
- **Ea** = activation energy (J/mol or kJ/mol)
- **R** = gas constant = 8.314 J mol⁻¹ K⁻¹
- **T** = absolute temperature (Kelvin)

### Physical Meaning

**A (pre-exponential factor):**

- Represents collision frequency and orientation factor
- How often molecules collide with proper orientation
- Units: same as k (depends on order)
- Typically 10⁸ to 10¹⁴ for most reactions

**e^(-Ea/RT) (Boltzmann factor):**

- Fraction of molecules with energy ≥ Ea
- Temperature-dependent term
- At higher T, more molecules have E ≥ Ea

### Logarithmic Form

Taking natural logarithm of both sides:

$$\boxed{\ln k = \ln A - \frac{E_a}{RT}}$$

This is equation of **straight line**: y = mx + c

- y = ln k
- x = 1/T
- m = -Ea/R (slope)
- c = ln A (intercept)

**Common logarithm form:**

$$\boxed{\log k = \log A - \frac{E_a}{2.303RT}}$$

### Two-Temperature Form

Most useful for JEE problems!

For two different temperatures T₁ and T₂:

$$\ln k_1 = \ln A - \frac{E_a}{RT_1}$$

$$\ln k_2 = \ln A - \frac{E_a}{RT_2}$$

Subtracting:

$$\boxed{\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)}$$

or

$$\boxed{\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)}$$

### Interactive Demo: Explore Activation Energy and Temperature Effects

See how temperature affects reaction rates through the Arrhenius equation. Adjust activation energy and temperature to observe changes in rate constant.

**This is the most frequently used form in JEE!**

## Arrhenius Plot

### Graph: ln k vs 1/T

Plotting ln k against 1/T gives a **straight line**:

```fallback
ln k
  |
  |        ╲
  |         ╲
  |          ╲
  |           ╲
  |            ╲
  |_____________╲____
       1/T
```

**From the plot:**

- **Slope** = -Ea/R
- **Ea** = -slope × R
- **Intercept** = ln A

### Determining Ea Graphically

**Method:**

1. Perform reaction at different temperatures
2. Measure k at each temperature
3. Plot ln k vs 1/T
4. Find slope (should be negative)
5. Calculate: Ea = -slope × R

**Example:**
If slope = -10,000 K

$$E_a = -(-10000) \times 8.314 = 83,140 \text{ J/mol} = 83.14 \text{ kJ/mol}$$

## Effect of Temperature on Rate

### Temperature Coefficient (Q₁₀)

**Rule of thumb:** Rate approximately doubles for every 10°C rise

$$\boxed{Q_{10} = \frac{k_{T+10}}{k_T} \approx 2 \text{ to } 3}$$

### Deriving Temperature Effect

From Arrhenius equation:

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{T_2 - T_1}{T_1T_2}\right)$$

For small temperature change:

$$\frac{k_2}{k_1} \approx e^{E_a\Delta T/(RT^2)}$$

**Key insight:**

- High Ea → strong temperature dependence
- Low Ea → weak temperature dependence

### Why Small T Change Causes Large k Change?

**Exponential relationship!**

e^(-Ea/RT) is extremely sensitive to T

**Example:** For Ea = 50 kJ/mol

- At 300 K: e^(-50000/(8.314×300)) = e^(-20.05) = 1.94 × 10⁻⁹
- At 310 K: e^(-50000/(8.314×310)) = e^(-19.41) = 3.63 × 10⁻⁹

**87% increase** in k for just 10 K rise!

## Collision Theory

### Why Arrhenius Equation Works

**Collision theory** provides theoretical basis:

$$\text{Rate} = Z \times f \times p$$

where:

- **Z** = collision frequency
- **f** = fraction with E ≥ Ea = e^(-Ea/RT)
- **p** = steric factor (proper orientation)

$$k = Z \times p \times e^{-E_a/RT}$$

**A = Z × p** (pre-exponential factor)

### Maxwell-Boltzmann Distribution

At any temperature, molecules have range of kinetic energies:

```fallback
Number
  |     T₁
  | ╱╲
  |╱  ╲___  T₂ (higher)
  |     ╲  ╱╲
  |      ╲╱  ╲___
  |           |
  |___________|_______ Energy
              Ea
```

**Key points:**

- At higher T, distribution shifts right and flattens
- **More molecules** have E ≥ Ea at higher T
- **Area under curve** beyond Ea increases exponentially with T

## Catalyst and Activation Energy

### How Catalysts Work

**Catalyst provides alternative pathway with lower Ea**

```fallback
Without Catalyst:        With Catalyst:
Energy                   Energy
  |                        |
  |   ╱╲                   |  ╱╲
  |  ╱  ╲                  | ╱  ╲╱╲
  | ╱    ╲                 |╱      ╲
  |╱      ╲___             |        ╲___
  |_____________           |_____________
     Progress                 Progress

  Ea(uncat) = 100 kJ/mol   Ea(cat) = 50 kJ/mol
```

**Effect on rate:**

$$\frac{k_{cat}}{k_{uncat}} = e^{-(E_{a,cat} - E_{a,uncat})/RT}$$

**Example:** At 300 K, reducing Ea from 100 to 50 kJ/mol:

$$\frac{k_{cat}}{k_{uncat}} = e^{50000/(8.314 \times 300)} = e^{20.05} = 5.1 \times 10^8$$

**Rate increases by ~500 million times!**

### Important Points

1. **Catalyst lowers Ea** for both forward and reverse reactions
2. **No effect on ΔH** (thermodynamics unchanged)
3. **No effect on equilibrium constant** K
4. **Only affects rate**, not equilibrium position
5. **Catalyst is not consumed** (regenerated)

## Energy Profiles: Detailed Analysis

### Exothermic Reaction

```fallback
Energy
  |
  |      ╱╲  ← Transition State
  |     ╱  ╲
  |    ╱    ╲
  |___╱ Ea,f ╲
  |           ╲_____ Products
  |                Ea,r
  |
  |↑ΔH<0 (negative)
  |_________________
     Reaction Progress
```

**Characteristics:**

- Products lower energy than reactants
- ΔH < 0 (exothermic)
- **Ea(forward) < Ea(reverse)**
- Releases energy

**Relationship:**

$$\boxed{\Delta H = E_{a,f} - E_{a,r}}$$

For exothermic: Ea,f < Ea,r

### Endothermic Reaction

```fallback
Energy
  |
  |      ╱╲  ← Transition State
  |     ╱  ╲
  |    ╱    ╲
  |   ╱ Ea,f ╲_____ Products
  |__╱            ↑
  |               |Ea,r
  |               |
  |↑ΔH>0 (positive)
  |_________________
     Reaction Progress
```

**Characteristics:**

- Products higher energy than reactants
- ΔH > 0 (endothermic)
- **Ea(forward) > Ea(reverse)**
- Requires energy input

**Relationship:**

$$\boxed{\Delta H = E_{a,f} - E_{a,r}}$$

For endothermic: Ea,f > Ea,r

### Key Relationships

$$E_{a,forward} - E_{a,reverse} = \Delta H$$

$$E_{a,forward} = \Delta H + E_{a,reverse}$$

(endothermic)

$$E_{a,reverse} = E_{a,forward} - \Delta H$$

(general)

## Memory Tricks

### “ARRHENIUS” Mnemonic

**A**ctivation energy in exponent (negative)
**R**ate constant k on left
**R**T in denominator
**H**igher T means higher k
**E**xponential relationship
**N**eeds absolute temperature (Kelvin)
**I**ntercept gives ln A
**U**seful for temperature dependence
**S**lope gives -Ea/R

### “CAT” for Catalyst

**C**uts activation energy (lowers Ea)
**A**ccelerates both directions (forward and reverse)
**T**hermodynamics unchanged (ΔH and K same)

### “HEAT” for Temperature Effect

**H**igher T increases k
**E**xponential increase
**A**ctivation energy determines sensitivity
**T**en degrees doubles rate (approximately)

## Common JEE Mistakes

### Mistake 1: Temperature Units

**Wrong:** Using temperature in °C in Arrhenius equation

**Correct:** **Always use Kelvin!**

- T(K) = T(°C) + 273.15
- Never use Celsius in exponential term

### Mistake 2: Ea Units

**Wrong:** Mixing kJ/mol with R = 8.314 J mol⁻¹ K⁻¹

**Correct:** Units must match!

- If Ea in kJ/mol, use R = 8.314 × 10⁻³ kJ mol⁻¹ K⁻¹
- OR convert Ea to J/mol

### Mistake 3: Sign of Slope

**Wrong:** “Slope of ln k vs 1/T is positive”

**Correct:** Slope is **-Ea/R** (always negative!)

- Ea is always positive
- Therefore slope is negative

### Mistake 4: Catalyst and Equilibrium

**Wrong:** “Catalyst increases product yield”

**Correct:** Catalyst has **no effect on equilibrium**

- Only increases rate to reach equilibrium
- K unchanged

### Mistake 5: ΔH vs Ea Confusion

**Wrong:** “ΔH = Ea”

**Correct:** ΔH = Ea(forward) - Ea(reverse)

- These are different quantities!
- Ea always positive, ΔH can be positive or negative

## Practice Problems

### Level 1: JEE Main Foundation

**Problem 1:** A reaction has Ea = 50 kJ/mol. At 300 K, k = 10⁻⁵ s⁻¹. Calculate k at 310 K.

**Solution:**

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$\ln\frac{k_2}{10^{-5}} = \frac{50000}{8.314}\left(\frac{1}{300} - \frac{1}{310}\right)$$

$$\ln\frac{k_2}{10^{-5}} = 6014.4 \times (0.003333 - 0.003226)$$

$$\ln\frac{k_2}{10^{-5}} = 6014.4 \times 0.000107 = 0.644$$

$$\frac{k_2}{10^{-5}} = e^{0.644} = 1.90$$

$$k_2 = 1.90 \times 10^{-5} \text{ s}^{-1}$$

**90% increase** for 10 K rise!

### Level 2: JEE Main/Advanced

**Problem 2:** For a reaction, rate constant increases by factor of 4 when temperature increases from 300 K to 320 K. Calculate activation energy.

**Solution:**

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

Given: k₂/k₁ = 4

$$\ln 4 = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right)$$

$$1.386 = \frac{E_a}{8.314} \times (0.003333 - 0.003125)$$

$$1.386 = \frac{E_a}{8.314} \times 0.000208$$

$$E_a = \frac{1.386 \times 8.314}{0.000208} = 55,360 \text{ J/mol}$$

$$E_a = 55.4 \text{ kJ/mol}$$

**Problem 3:** The following data is obtained:

| T (K) | k (s⁻¹) | 1/T (K⁻¹) | ln k |
| --- | --- | --- | --- |
| 300 | 1.0×10⁻⁵ | 0.00333 | -11.51 |
| 320 | 4.5×10⁻⁵ | 0.00313 | -10.01 |
| 340 | 1.8×10⁻⁴ | 0.00294 | -8.62 |

Calculate:
(a) Ea from graph
(b) Pre-exponential factor A

**Solution:**

(a) **Graphical method:**

Slope = Δ(ln k) / Δ(1/T)

Using first and last points:

$$\text{Slope} = \frac{-8.62 - (-11.51)}{0.00294 - 0.00333} = \frac{2.89}{-0.00039} = -7410 \text{ K}$$

$$E_a = -\text{slope} \times R = 7410 \times 8.314 = 61,607 \text{ J/mol} = 61.6 \text{ kJ/mol}$$

**Algebraic method:**

Using two-temperature formula with T₁ = 300 K, T₂ = 340 K:

$$\ln\frac{1.8 \times 10^{-4}}{1.0 \times 10^{-5}} = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{340}\right)$$

$$\ln 18 = \frac{E_a}{8.314} \times 0.000392$$

$$2.89 = \frac{E_a}{8.314} \times 0.000392$$

$$E_a = 61,300 \text{ J/mol} = 61.3 \text{ kJ/mol}$$

(b) From any data point, using k = Ae^(-Ea/RT):

At 300 K:

$$1.0 \times 10^{-5} = A \times e^{-61300/(8.314 \times 300)}$$

$$1.0 \times 10^{-5} = A \times e^{-24.58}$$

$$1.0 \times 10^{-5} = A \times 2.09 \times 10^{-11}$$

$$A = \frac{1.0 \times 10^{-5}}{2.09 \times 10^{-11}} = 4.78 \times 10^5 \text{ s}^{-1}$$

### Level 3: JEE Advanced

**Problem 4:** For a reaction, the rate doubles when temperature increases from 27°C to 37°C. Calculate:
(a) Activation energy
(b) Temperature at which rate will be four times the rate at 27°C

**Solution:**

(a) T₁ = 27°C = 300 K, T₂ = 37°C = 310 K

k₂ = 2k₁

$$\ln 2 = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{310}\right)$$

$$0.693 = \frac{E_a}{8.314} \times 0.000107$$

$$E_a = \frac{0.693 \times 8.314}{0.000107} = 53,800 \text{ J/mol} = 53.8 \text{ kJ/mol}$$

(b) For k₃ = 4k₁:

$$\ln 4 = \frac{53800}{8.314}\left(\frac{1}{300} - \frac{1}{T_3}\right)$$

$$1.386 = 6469.8 \times \left(0.003333 - \frac{1}{T_3}\right)$$

$$2.14 \times 10^{-4} = 0.003333 - \frac{1}{T_3}$$

$$\frac{1}{T_3} = 0.003333 - 0.000214 = 0.003119$$

$$T_3 = 320.5 \text{ K} = 47.5°\text{C}$$

**Problem 5:** A reaction has ΔH = -80 kJ/mol and Ea(forward) = 50 kJ/mol. Calculate:
(a) Ea(reverse)
(b) Energy profile diagram values

**Solution:**

(a)

$$\Delta H = E_{a,f} - E_{a,r}$$

$$-80 = 50 - E_{a,r}$$

$$E_{a,r} = 50 - (-80) = 130 \text{ kJ/mol}$$

(b) **Energy profile:**

- Reactants at 0 kJ (reference)
- Transition state at +50 kJ (height of forward barrier)
- Products at -80 kJ (below reactants)
- Reverse barrier from products = 130 kJ

**Verification:** 50 - 130 = -80 ✓

### Problem 6:** In presence of catalyst, activation energy reduces from 100 kJ/mol to 60 kJ/mol. By what factor does rate increase at 300 K?

**Solution:**

$$\frac{k_{cat}}{k_{uncat}} = \frac{Ae^{-E_{a,cat}/RT}}{Ae^{-E_{a,uncat}/RT}}$$

$$= e^{-(E_{a,cat} - E_{a,uncat})/RT}$$

$$= e^{-(60000 - 100000)/(8.314 \times 300)}$$

$$= e^{40000/2494.2} = e^{16.04}$$

$$= 9.2 \times 10^6$$

**Rate increases by factor of ~10⁷!**

This shows the **dramatic effect** of catalysts!

## Relationship to Equilibrium

### Connection to Equilibrium Constant

At equilibrium:

$$K = \frac{k_f}{k_r}$$

From Arrhenius equation:

$$K = \frac{A_f e^{-E_{a,f}/RT}}{A_r e^{-E_{a,r}/RT}}$$

$$K = \frac{A_f}{A_r} \times e^{-(E_{a,f} - E_{a,r})/RT}$$

Since Ea,f - Ea,r = ΔH:

$$K = \frac{A_f}{A_r} \times e^{-\Delta H/RT}$$

**This connects kinetics to thermodynamics!**

### van’t Hoff Equation

Taking ln:

$$\ln K = \ln\frac{A_f}{A_r} - \frac{\Delta H}{RT}$$

This is the **van’t Hoff equation** for temperature dependence of K!

See: [Chemical Equilibrium](../../equilibrium/index.md)

## Connection to Other Topics

### Within Chemical Kinetics

- [Rate of Reaction](../rate-of-reaction/index.md) - Measuring reaction speed
- [Rate Law](../rate-law/index.md) - Rate constant and order
- [Order and Molecularity](../order-molecularity/index.md) - Mechanism implications
- [Integrated Rate Equations](../integrated-rate-equations/index.md) - Time dependence
- [Half-Life](../half-life/index.md) - Temperature dependence of half-life
- [Factors Affecting Rate](../factors-affecting-rate/index.md) - Temperature as a key factor
- [Catalysis](../catalysis/index.md) - How catalysts lower Ea

### Thermodynamics Connections

- [Gibbs Energy](../../thermodynamics/gibbs-energy/index.md) - Spontaneity vs kinetics
- [Enthalpy](../../thermodynamics/enthalpy/index.md) - ΔH = Ea(forward) - Ea(reverse)
- [Entropy](../../thermodynamics/entropy/index.md) - Disorder and transition state

### Equilibrium Links

- [Chemical Equilibrium](../../equilibrium/chemical-equilibrium/index.md) - K = kf/kr connection
- [Le Chatelier’s Principle](../../equilibrium/le-chateliers-principle/index.md) - Temperature effects

### Organic Chemistry Applications

- [Reaction Intermediates](../../organic-principles/reaction-intermediates/index.md) - Transition states
- [Reaction Types](../../organic-principles/reaction-types/index.md) - SN1, SN2 energy profiles

### Physics Connections

- [Kinetic Theory](../../../physics/kinetic-theory/index.md) - Maxwell-Boltzmann distribution

## JEE Previous Year Questions

**JEE Main 2021:** Rate constant of a reaction at 200 K is 10⁴ times the rate constant at 300 K. What is the activation energy?

**Solution:**

$$\ln\frac{k_1}{k_2} = \frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

$$\ln\frac{10^4 k}{k} = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{200}\right)$$

$$\ln 10^4 = \frac{E_a}{8.314} \times (-0.00167)$$

$$9.21 = -\frac{E_a}{8.314} \times 0.00167$$

This gives **negative Ea**, which is impossible!

**Correction:** The question likely meant k₂₀₀ = k₃₀₀/10⁴ (rate decreases at lower T)

$$\ln\frac{k_{300}}{k_{200}} = \ln 10^4 = 9.21$$

$$9.21 = \frac{E_a}{8.314} \times 0.00167$$

$$E_a = 45,900 \text{ J/mol} = 45.9 \text{ kJ/mol}$$

**JEE Advanced 2020:** For an exothermic reaction with Ea = 60 kJ/mol and ΔH = -40 kJ/mol, what is Ea for reverse reaction?

**Solution:**

$$\Delta H = E_{a,f} - E_{a,r}$$

$$-40 = 60 - E_{a,r}$$

$$E_{a,r} = 100 \text{ kJ/mol}$$

## Quick Revision Points

1. **Arrhenius equation:** k = Ae^(-Ea/RT)
2. **Ea** = activation energy (always positive)
3. **Higher T** → **higher k** (exponential)
4. **ln k vs 1/T** gives straight line (slope = -Ea/R)
5. **Two-temperature form** most useful for JEE
6. **Always use Kelvin** for temperature
7. **Catalyst lowers Ea**, increases k dramatically
8. **ΔH = Ea(forward) - Ea(reverse)**
9. **Higher Ea** → **slower reaction**, **stronger T-dependence**
10. **Q₁₀ ≈ 2-3** (rate doubles per 10°C rise)

## Summary

The Arrhenius equation is fundamental to understanding:

- **Temperature dependence** of reaction rates
- **Activation energy** concept
- **Catalyst mechanisms**
- **Connection** between kinetics and thermodynamics

Key takeaways:

- **Exponential relationship** between k and T
- **Small temperature changes** cause large rate changes
- **Catalysts work** by lowering Ea
- **Graphical methods** for determining Ea
- **Energy profiles** visualize reaction pathways

Mastering the Arrhenius equation is essential for:

- Solving JEE kinetics problems
- Understanding industrial process optimization
- Predicting reaction behavior at different temperatures
- Connecting kinetics to thermodynamics

---

**Previous Topic:** [Half-Life](../half-life/index.md)
**Next Topic:** [Catalysis](../catalysis/index.md)

From TestGuru · our mock-test platform

## You've read Arrhenius Equation and Activation Energy.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=chemical-kinetics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fchemical-kinetics%2Farrhenius-equation%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-18

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/chemical-kinetics/arrhenius-equation/",this.page.identifier="/chemistry/chemical-kinetics/arrhenius-equation/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-19

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionRate" id="anim-reactionRate-1795396419391420606"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionRate-1795396419391420606")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="reactionKinetics" id="anim-reactionKinetics-1795396419391473639"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionKinetics-1795396419391473639")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-3

```html
<div class="animation-wrapper" data-animation="maxwellBoltzmann" id="anim-maxwellBoltzmann-1795396419391547127"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-maxwellBoltzmann-1795396419391547127")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/chemical-kinetics/arrhenius-equation/](https://jeenotes.in/chemistry/chemical-kinetics/arrhenius-equation/) · raw HTML: `offline/chemistry/chemical-kinetics/arrhenius-equation/index.html`_
