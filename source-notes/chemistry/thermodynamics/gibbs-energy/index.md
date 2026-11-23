---
title: "Gibbs Free Energy and Spontaneity"
source: "https://jeenotes.in/chemistry/thermodynamics/gibbs-energy/"
description: "Master Gibbs energy, spontaneity criteria, and equilibrium predictions for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "21 min read"
breadcrumb: "Chemistry"
position: "/ Topic 4 of 7"
html: "../../../../offline/chemistry/thermodynamics/gibbs-energy/index.html"
extracted: "2026-11-23"
---

> Master Gibbs energy, spontaneity criteria, and equilibrium predictions for JEE Main & Advanced

## The Hook: The Ultimate Decision Maker

> **★ Key point · Connect: Real Life → Chemistry**
>
> **Imagine you’re the coach of a cricket team:**
>
> - **Batting strength (ΔH):** How many runs you can score (energy factor)

> - **Fielding discipline (ΔS):** How organized or chaotic your field placement is (entropy factor)

> - **Match outcome (ΔG):** Win or lose (spontaneity!)
>
> **The winning formula:** You don’t just need good batting OR good fielding - you need the RIGHT COMBINATION at the RIGHT TEMPERATURE of the match!
>
> **Three real-life mysteries:**
>
> 1. **Ice cubes in your drink (25°C):** Melting is endothermic (ΔH > 0, unfavorable), yet happens spontaneously. Why?

> 2. **Rusting of iron:** Happens without any external energy input. What drives this?

> 3. **Charging your phone:** Requires external energy. Why doesn’t the battery charge itself?
>
> The answer to all three lies in **Gibbs Free Energy (G)** - the ultimate spontaneity predictor that combines enthalpy and entropy!
>
> **Movie connection (Oppenheimer):** Just like atomic reactions release energy spontaneously when ΔG < 0, the same principle determines which nuclear processes can happen!

---

## The Core Concept

### What is Gibbs Free Energy?

**Gibbs Free Energy (G)** is the energy available to do useful work at constant temperature and pressure.

$$\boxed{G = H - TS}$$

where:

- **H** = Enthalpy (heat content)
- **T** = Absolute temperature (Kelvin)
- **S** = Entropy (disorder)

For a process:

$$\boxed{\Delta G = \Delta H - T\Delta S}$$

**In simple terms:** Gibbs energy tells you whether a reaction will happen spontaneously by balancing the enthalpy drive (release energy) against the entropy drive (increase disorder).

**Why “Free” Energy?**

- It’s the energy “free” (available) to do useful work
- Maximum work obtainable from a process at constant T and P
- $w_{max} = -\Delta G$

### The Golden Rule of Spontaneity

> **★ Key point · Gibbs Energy Criterion for Spontaneity**
>
> **At constant temperature and pressure:**
>
> $$\Delta G < 0 \quad \Rightarrow \quad \text{Spontaneous (forward direction)}$$

$$\Delta G = 0 \quad \Rightarrow \quad \text{Equilibrium (no net change)}$$

$$\Delta G > 0 \quad \Rightarrow \quad \text{Non-spontaneous (reverse direction favored)}$$
>
> **This is THE most important criterion in all of thermodynamics!**
>
> **Why?** Because ΔG combines both enthalpy AND entropy into one number:
>
> $$\Delta G = \Delta H - T\Delta S = -T\Delta S_{universe}$$
>
> When $\Delta G < 0$, this means $\Delta S_{universe} > 0$ (Second Law satisfied!)

### Connection to Entropy

Remember from [Entropy](../entropy/index.md):

$$\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings}$$

At constant T and P:

$$\Delta S_{surroundings} = -\frac{\Delta H_{system}}{T}$$

Therefore:

$$\Delta S_{universe} = \Delta S - \frac{\Delta H}{T}$$

Multiply by -T:

$$-T\Delta S_{universe} = \Delta H - T\Delta S = \Delta G$$

**Beautiful result:**

$$\boxed{\Delta G = -T\Delta S_{universe}}$$

**Interpretation:**

- $\Delta G < 0$ ⟺ $\Delta S_{universe} > 0$ ⟹ Spontaneous
- $\Delta G = 0$ ⟺ $\Delta S_{universe} = 0$ ⟹ Equilibrium
- $\Delta G > 0$ ⟺ $\Delta S_{universe} < 0$ ⟹ Non-spontaneous

**So instead of calculating ΔS_system AND ΔS_surroundings, we just calculate ΔG!**

---

## The Four Cases: ΔH vs ΔS Competition

### Case 1: ΔH < 0, ΔS > 0 (Always Spontaneous)

$$\Delta G = \Delta H - T\Delta S = \text{(negative)} - T \times \text{(positive)} = \text{negative at all T}$$

**Examples:**

- **Combustion:** $\text{CH}_4 + 2\text{O}_2 \to \text{CO}_2 + 2\text{H}_2\text{O}$

  - ΔH < 0 (exothermic, releases heat)
  - ΔS > 0 (more gas molecules from breaking liquid water if products are gas)
  - **Result:** Burns spontaneously at all temperatures!
- **Dissolution of NH₄NO₃ in water:**

  - ΔH < 0 (lattice energy < hydration energy for this case)
  - ΔS > 0 (solid → dispersed ions)
  - **Result:** Dissolves spontaneously

**Intuition:** Both enthalpy AND entropy favor the reaction - double win!

### Case 2: ΔH > 0, ΔS < 0 (Never Spontaneous)

$$\Delta G = \Delta H - T\Delta S = \text{(positive)} - T \times \text{(negative)} = \text{positive at all T}$$

**Examples:**

- **Reverse of combustion:** Making methane from CO₂ and H₂O

  - ΔH > 0 (endothermic)
  - ΔS < 0 (disorder decreases)
  - **Result:** Never happens spontaneously!
- **Freezing water at 50°C:**

  - ΔH > 0 (need to remove heat, but that means system needs to absorb heat to freeze - wait, freezing is exothermic!)

Let me correct this:

- **Water freezing at 50°C:**
  - Actually ΔH < 0 for freezing (exothermic)
  - But ΔS < 0 (liquid → solid)
  - At high T like 50°C: $\Delta G = \Delta H - T\Delta S$ becomes positive because TΔS term dominates
  - So this is actually Case 3!

Let me use better example:

- **Making NH₃ from N₂ and H₂ at very high temperature:**
  - $\text{N}_2(g) + 3\text{H}_2(g) \to 2\text{NH}_3(g)$
  - ΔH < 0 (exothermic, wait this would make it case 3)

Actually, finding pure Case 2 examples is hard because:

- If ΔH > 0 (endothermic) usually it means breaking into smaller, more disordered pieces (ΔS > 0) - that’s Case 4
- If ΔS < 0 (disorder decreases) usually it means forming bonds (ΔH < 0) - that’s Case 3

**Pure Case 2 example:**

- **Condensing a simple gas at very low pressure while also absorbing heat (hypothetical)**

**Better real example:**

- **Reverse of any spontaneous reaction at T where it’s spontaneous**
- Like trying to make diamond from graphite at low T without pressure:
  - ΔH > 0 (diamond is higher energy)
  - ΔS < 0 (diamond is more ordered)
  - **Result:** Won’t happen spontaneously

**Intuition:** Both enthalpy AND entropy oppose the reaction - double loss!

### Case 3: ΔH < 0, ΔS < 0 (Spontaneous at Low T)

$$\Delta G = \Delta H - T\Delta S = \text{(negative)} - T \times \text{(negative)}$$

**At low T:** $|\Delta H| > T|\Delta S|$ → ΔG < 0 (enthalpy wins)
**At high T:** $|\Delta H| < T|\Delta S|$ → ΔG > 0 (entropy penalty wins)

**Equilibrium temperature:**

$$T_{eq} = \frac{\Delta H}{\Delta S}$$

**Examples:**

- **Water freezing:** $\text{H}_2\text{O}(l) \to \text{H}_2\text{O}(s)$

  - ΔH < 0 (exothermic, releases heat)
  - ΔS < 0 (liquid → solid, disorder decreases)
  - **At T < 273 K (0°C):** ΔG < 0, freezing is spontaneous
  - **At T > 273 K (0°C):** ΔG > 0, melting is spontaneous
  - **At T = 273 K:** ΔG = 0, equilibrium!
- **Haber process:** $\text{N}_2(g) + 3\text{H}_2(g) \to 2\text{NH}_3(g)$

  - ΔH < 0 (exothermic, -92 kJ/mol)
  - ΔS < 0 (4 gas moles → 2 gas moles)
  - **Favored at low T:** But kinetics too slow!
  - **Industrial compromise:** Moderate T (400-450°C) with catalyst

**Intuition:** Enthalpy wants it, entropy doesn’t. At low T, enthalpy wins!

### Interactive Calculator: Gibbs Energy and Spontaneity

Use this interactive calculator to explore how ΔG changes with enthalpy, entropy, and temperature. See real-time bar charts and temperature dependence graphs!

**How to use this calculator:**

1. Select a preset reaction from the dropdown, or adjust ΔH and ΔS manually
2. Change the temperature using the slider to see how spontaneity changes
3. Observe the bar chart showing ΔH, -TΔS, and ΔG components
4. The temperature graph shows where ΔG crosses zero (equilibrium temperature)
5. The shaded green region indicates spontaneous conditions

### Case 4: ΔH > 0, ΔS > 0 (Spontaneous at High T)

$$\Delta G = \Delta H - T\Delta S = \text{(positive)} - T \times \text{(positive)}$$

**At low T:** $|\Delta H| > T|\Delta S|$ → ΔG > 0 (enthalpy penalty wins)
**At high T:** $|\Delta H| < T|\Delta S|$ → ΔG < 0 (entropy wins!)

**Equilibrium temperature:**

$$T_{eq} = \frac{\Delta H}{\Delta S}$$

**Examples:**

- **Ice melting:** $\text{H}_2\text{O}(s) \to \text{H}_2\text{O}(l)$

  - ΔH > 0 (endothermic, needs heat)
  - ΔS > 0 (solid → liquid, disorder increases)
  - **At T < 273 K:** ΔG > 0, won’t melt
  - **At T > 273 K:** ΔG < 0, melts spontaneously
  - **At T = 273 K:** ΔG = 0, equilibrium!
- **Decomposition of CaCO₃:** $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$

  - ΔH > 0 (endothermic, +178 kJ/mol)
  - ΔS > 0 (gas produced, disorder increases)
  - **High T needed:** Above ~1100 K, becomes spontaneous
  - **Used in cement industry**
- **Evaporation of water:** $\text{H}_2\text{O}(l) \to \text{H}_2\text{O}(g)$

  - ΔH > 0 (endothermic, +44 kJ/mol)
  - ΔS > 0 (liquid → gas, huge disorder increase)
  - **At high T:** Boils spontaneously

**Intuition:** Entropy wants it, enthalpy doesn’t. At high T, entropy term (TΔS) becomes large and wins!

---

## Summary Table: The Four Cases

| ΔH | ΔS | ΔG Sign | Spontaneity | Example |
| --- | --- | --- | --- | --- |
| **-** | **+** | **Always -** | **Always spontaneous** | Combustion, rusting |
| **+** | **-** | **Always +** | **Never spontaneous** | Reverse combustion |
| **-** | **-** | **- at low T, + at high T** | **Spontaneous at low T** | Freezing water, Haber process |
| **+** | **+** | **+ at low T, - at high T** | **Spontaneous at high T** | Melting ice, CaCO₃ decomposition |

**Memory trick: “Give Her The Stuff”**

- **G**ibbs = **H**eat - **T**emperature × **S**tuff (entropy)
- $\Delta G = \Delta H - T\Delta S$

---

## Standard Gibbs Energy

### Standard Gibbs Energy of Formation

$$\Delta_f G° = \text{Gibbs energy of formation from elements in standard state}$$

**Standard conditions:**

- Temperature: 298 K (25°C)
- Pressure: 1 bar
- Concentration: 1 M (for solutions)

**Key fact:**

$$\boxed{\Delta_f G°[\text{element in standard state}] = 0}$$

Just like enthalpy of formation!

### Calculating ΔG° for Reactions

**Method 1: From formation data**

$$\boxed{\Delta_r G° = \sum \Delta_f G°(\text{products}) - \sum \Delta_f G°(\text{reactants})}$$

**Method 2: From ΔH° and ΔS°**

$$\boxed{\Delta G° = \Delta H° - T\Delta S°}$$

**Method 3: From equilibrium constant (see below)**

$$\boxed{\Delta G° = -RT\ln K = -2.303RT\log K}$$

---

## Gibbs Energy and Equilibrium

### The Most Important Equation in Chemical Thermodynamics

$$\boxed{\Delta G = \Delta G° + RT\ln Q}$$

where:

- **Q** = Reaction quotient
- **R** = 8.314 J/mol·K
- **T** = Temperature (K)

**At equilibrium:** Q = K (equilibrium constant), and ΔG = 0

$$0 = \Delta G° + RT\ln K$$

$$\boxed{\Delta G° = -RT\ln K = -2.303RT\log K}$$

**This is HUGE!** We can calculate equilibrium constants from thermodynamic data without doing experiments!

### Relationship Between ΔG° and K

$$\Delta G° = -RT\ln K$$

**Rearranging:**

$$K = e^{-\Delta G°/RT}$$

or

$$\log K = -\frac{\Delta G°}{2.303RT}$$

**At 298 K:**

$$\log K = -\frac{\Delta G°}{2.303 \times 8.314 \times 298} = -\frac{\Delta G°}{5.708}$$

where ΔG° is in kJ/mol.

**Simplified at 298 K:**

$$\boxed{\log K = -\frac{\Delta G° \text{(kJ/mol)}}{5.7}}$$

### What Different Values Mean

> **★ Key point · ΔG° and K Interpretation**
>
> | ΔG° | K | Meaning |

> | --- | --- | --- |

> | **Large negative** (< -30 kJ/mol) | **K » 1** | Products heavily favored, nearly complete reaction |

> | **Small negative** (-30 to 0 kJ/mol) | **K > 1** | Products favored |

> | **Zero** | **K = 1** | Equal amounts of products and reactants |

> | **Small positive** (0 to +30 kJ/mol) | **K < 1** | Reactants favored |

> | **Large positive** (> +30 kJ/mol) | **K « 1** | Reactants heavily favored, almost no reaction |
>
> **At 298 K:**
>
> - ΔG° = -5.7 kJ/mol → K = 10

> - ΔG° = -11.4 kJ/mol → K = 100

> - ΔG° = -17.1 kJ/mol → K = 1000

> - ΔG° = 0 kJ/mol → K = 1

> - ΔG° = +5.7 kJ/mol → K = 0.1

> - ΔG° = +11.4 kJ/mol → K = 0.01
>
> **Pattern:** Every 5.7 kJ/mol change in ΔG° changes K by factor of 10!

### ΔG vs ΔG°: What’s the Difference?

**ΔG° (Standard Gibbs Energy Change):**

- At standard conditions (1 bar, 1 M, 298 K)
- Tells you the equilibrium position
- Related to K

**ΔG (Actual Gibbs Energy Change):**

- At any conditions (any concentrations/pressures)
- Tells you spontaneity at that moment
- Related to Q

$$\Delta G = \Delta G° + RT\ln Q$$

**Three cases:**

1. **Q < K:** System shifts forward (toward products)

   - $\Delta G < 0$ (spontaneous forward)
2. **Q = K:** System at equilibrium

   - $\Delta G = 0$ (no net change)
3. **Q > K:** System shifts backward (toward reactants)

   - $\Delta G > 0$ (spontaneous backward)

---

## Temperature Dependence of ΔG

### Gibbs-Helmholtz Equation

$$\Delta G = \Delta H - T\Delta S$$

**Assumption:** ΔH and ΔS are approximately constant over moderate temperature range.

**Finding equilibrium temperature:**

At equilibrium, ΔG = 0:

$$0 = \Delta H - T_{eq}\Delta S$$

$$\boxed{T_{eq} = \frac{\Delta H}{\Delta S}}$$

**This is the temperature where:**

- Forward and reverse reaction rates are equal
- Reaction switches from spontaneous to non-spontaneous (or vice versa)

**Example:** Water freezing/melting

$$T_{eq} = \frac{\Delta H_{fusion}}{\Delta S_{fusion}} = \frac{6000 \text{ J/mol}}{22 \text{ J/K}\cdot\text{mol}} = 273 \text{ K} = 0°\text{C}$$

Perfect!

### Van’t Hoff Equation (Temperature and K)

From $\Delta G° = -RT\ln K = \Delta H° - T\Delta S°$:

$$\ln K = -\frac{\Delta H°}{RT} + \frac{\Delta S°}{R}$$

**Differential form:**

$$\frac{d\ln K}{dT} = \frac{\Delta H°}{RT^2}$$

**Integrated form (between two temperatures):**

$$\boxed{\ln\frac{K_2}{K_1} = -\frac{\Delta H°}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)}$$

or in base-10 log:

$$\log\frac{K_2}{K_1} = -\frac{\Delta H°}{2.303R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

**Practical use:** Calculate how equilibrium constant changes with temperature!

**Sign check:**

- **Exothermic (ΔH° < 0):** K decreases with increasing T (Le Chatelier!)
- **Endothermic (ΔH° > 0):** K increases with increasing T

---

## Memory Tricks & Patterns

### Mnemonic for Gibbs Equation

**“Give Her The Stuff”**

- **G** = **H** - **T** × **S**
- $\Delta G = \Delta H - T\Delta S$

**“Good Hearts Tell Stories”**

- **G** (Gibbs) depends on **H** (Heat), **T** (Temperature), **S** (Stories/entropy)

### Spontaneity Decision Tree

```fallback
Is ΔG known?
├─ Yes → ΔG < 0? Spontaneous!
│         ΔG = 0? Equilibrium!
│         ΔG > 0? Non-spontaneous!
│
└─ No → Know ΔH and ΔS?
    ├─ ΔH(-), ΔS(+) → Always spontaneous
    ├─ ΔH(+), ΔS(-) → Never spontaneous
    ├─ ΔH(-), ΔS(-) → Spontaneous at LOW T
    └─ ΔH(+), ΔS(+) → Spontaneous at HIGH T
```

### Quick K Estimation (at 298 K)

$$\Delta G° \text{ (kJ/mol)} = -5.7 \times \log K$$

**Shortcut:**

- Every **6 kJ/mol** change in ΔG° ≈ factor of 10 in K
- ΔG° = 0 → K = 1
- ΔG° = -6 → K ≈ 10
- ΔG° = -12 → K ≈ 100
- ΔG° = +6 → K ≈ 0.1

### Pattern Recognition for JEE

**Given ΔH and ΔS, find temperature range:**

| Signs | Formula | When spontaneous |
| --- | --- | --- |
| ΔH(-), ΔS(-) | $T < \frac{\Delta H}{\Delta S}$ | Below equilibrium T |
| ΔH(+), ΔS(+) | $T > \frac{\Delta H}{\Delta S}$ | Above equilibrium T |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing ΔG and ΔG°**
>
> **Wrong:** “ΔG° < 0, so reaction is spontaneous at all conditions”
>
> **Right:** “ΔG° < 0 means K > 1 (products favored at equilibrium). Spontaneity depends on ΔG, not ΔG°”
>
> **Remember:**
>
> - **ΔG°** tells you equilibrium position (where it ends up)

> - **ΔG** tells you spontaneity (which way it goes now)
>
> $$\Delta G = \Delta G° + RT\ln Q$$
>
> Even if ΔG° > 0, reaction can be spontaneous if Q » K!

> **⚠ Trap #2: Using °C Instead of K**
>
> **Wrong:**
>
> $$\Delta G = \Delta H - T\Delta S = -100 - 25 \times 0.5 = -112.5 \text{ kJ}$$
>
> **Right:** Convert °C to K first!
>
> $$\Delta G = -100 - 298 \times 0.5 = -100 - 149 = -249 \text{ kJ}$$
>
> **Always use Kelvin for temperature in Gibbs equation!**

> **⚠ Trap #3: Unit Mismatch in ΔG = ΔH - TΔS**
>
> **Common error:** ΔH in kJ/mol, ΔS in J/K·mol
>
> **Example:**
>
> - ΔH = -100 kJ/mol

> - ΔS = -200 J/K·mol

> - T = 298 K
>
> **Wrong:**
>
> $$\Delta G = -100 - 298 \times (-200) = -100 + 59600 = +59500 \text{ kJ/mol}$$
>
> **Right:** Convert to same units!
>
> $$\Delta G = -100 - 298 \times (-0.200) = -100 + 59.6 = -40.4 \text{ kJ/mol}$$
>
> **Always check units: Either both in kJ or both in J!**

> **⚠ Trap #4: Sign Error in ΔG° = -RTlnK**
>
> **Wrong:** $\Delta G° = RT\ln K$ (forgetting negative sign)
>
> **Right:** $\Delta G° = -RT\ln K$
>
> **Check:**
>
> - If K > 1 (products favored), then ln K > 0, so ΔG° < 0 ✓

> - If K < 1 (reactants favored), then ln K < 0, so ΔG° > 0 ✓
>
> **The negative sign makes sense!**

> **⚠ Trap #5: Assuming ΔG = 0 Means No Reaction**
>
> **Wrong:** “ΔG = 0, so nothing happens”
>
> **Right:** “ΔG = 0 means system is at equilibrium - forward and reverse rates are equal, but both reactions still occur!”
>
> At equilibrium:
>
> - ΔG = 0 (no net change)

> - Both forward and reverse reactions continue

> - Concentrations/pressures remain constant

> - Dynamic equilibrium, not static!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Basic ΔG Calculation**
>
> **Question:** Calculate ΔG at 298 K for a reaction with:
>
> - ΔH = -100 kJ/mol

> - ΔS = -200 J/K·mol
>
> Is the reaction spontaneous?
>
> **Solution:**
>
> $$\Delta G = \Delta H - T\Delta S$$
>
> Convert ΔS to kJ/K·mol: $\Delta S = -0.200$ kJ/K·mol
>
> $$\Delta G = -100 - 298 \times (-0.200)$$

$$= -100 + 59.6$$

$$= -40.4 \text{ kJ/mol}$$
>
> Since ΔG < 0, reaction is **spontaneous** at 298 K.
>
> **Answer:** ΔG = -40.4 kJ/mol, spontaneous
>
> **Note:** This is Case 3 (ΔH < 0, ΔS < 0), spontaneous at low T.

> **↗ Connection · Problem 1.2: Equilibrium Temperature**
>
> **Question:** Find the temperature at which the reaction becomes non-spontaneous if:
>
> - ΔH = -50 kJ/mol

> - ΔS = -100 J/K·mol
>
> **Solution:**
>
> At equilibrium: $\Delta G = 0$
>
> $$0 = \Delta H - T_{eq}\Delta S$$

$$T_{eq} = \frac{\Delta H}{\Delta S}$$
>
> Convert to same units: ΔH = -50,000 J/mol, ΔS = -100 J/K·mol
>
> $$T_{eq} = \frac{-50000}{-100} = 500 \text{ K}$$
>
> **Interpretation:**
>
> - Case 3 (ΔH < 0, ΔS < 0): Spontaneous below 500 K

> - At T < 500 K: ΔG < 0 (spontaneous)

> - At T > 500 K: ΔG > 0 (non-spontaneous)

> - At T = 500 K: ΔG = 0 (equilibrium)
>
> **Answer:** 500 K (227°C)

> **↗ Connection · Problem 1.3: ΔG° from K**
>
> **Question:** Calculate ΔG° at 298 K for a reaction with equilibrium constant K = 100.
>
> **Solution:**
>
> $$\Delta G° = -RT\ln K = -2.303RT\log K$$

$$\Delta G° = -2.303 \times 8.314 \times 298 \times \log 100$$

$$= -2.303 \times 8.314 \times 298 \times 2$$

$$= -11,414 \text{ J/mol}$$

$$= -11.4 \text{ kJ/mol}$$
>
> **Quick check:** $\Delta G° = -5.7 \times \log K = -5.7 \times 2 = -11.4$ kJ/mol ✓
>
> **Answer:** -11.4 kJ/mol
>
> **Interpretation:** K > 1, so products are favored (ΔG° < 0).

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Spontaneity at Different Temperatures**
>
> **Question:** For the reaction: $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$
>
> Given:
>
> - $\Delta H° = +178$ kJ/mol

> - $\Delta S° = +160$ J/K·mol
>
> (a) Is the reaction spontaneous at 298 K?

> (b) At what temperature does it become spontaneous?
>
> **Solution:**
>
> **(a) At 298 K:**
>
> $$\Delta G° = \Delta H° - T\Delta S°$$

$$= 178 - 298 \times 0.160$$

$$= 178 - 47.7$$

$$= +130.3 \text{ kJ/mol}$$
>
> ΔG° > 0, so **non-spontaneous** at 298 K.
>
> **(b) Equilibrium temperature:**
>
> $$T_{eq} = \frac{\Delta H°}{\Delta S°} = \frac{178000}{160} = 1112.5 \text{ K}$$
>
> Above this temperature, ΔG < 0 (spontaneous).
>
> **Answer:**
>
> - (a) Non-spontaneous at 298 K (ΔG° = +130.3 kJ/mol)

> - (b) Spontaneous above 1113 K (840°C)
>
> **Industrial relevance:** This is why lime kilns operate at ~900°C!

> **↗ Connection · Problem 2.2: Using Formation Data**
>
> **Question:** Calculate ΔG° for combustion of methane at 298 K:
>
> $$\text{CH}_4(g) + 2\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(l)$$
>
> Given:
>
> - $\Delta_f G°[\text{CH}_4(g)] = -50.8$ kJ/mol

> - $\Delta_f G°[\text{CO}_2(g)] = -394.4$ kJ/mol

> - $\Delta_f G°[\text{H}_2\text{O}(l)] = -237.2$ kJ/mol

> - $\Delta_f G°[\text{O}_2(g)] = 0$ (element)
>
> **Solution:**
>
> $$\Delta_r G° = \sum \Delta_f G°(\text{products}) - \sum \Delta_f G°(\text{reactants})$$
>
> Products:
>
> $$= \Delta_f G°[\text{CO}_2] + 2\Delta_f G°[\text{H}_2\text{O}]$$

$$= -394.4 + 2(-237.2) = -868.8 \text{ kJ}$$
>
> Reactants:
>
> $$= \Delta_f G°[\text{CH}_4] + 2\Delta_f G°[\text{O}_2]$$

$$= -50.8 + 0 = -50.8 \text{ kJ}$$

$$\Delta_r G° = -868.8 - (-50.8) = -818.0 \text{ kJ/mol}$$
>
> **Calculate K:**
>
> $$\log K = -\frac{\Delta G°}{5.7} = -\frac{-818}{5.7} = 143.5$$

$$K = 10^{143.5} \approx \infty$$
>
> **Answer:** ΔG° = -818 kJ/mol, K ≈ 10¹⁴³ (essentially irreversible!)
>
> **Insight:** Huge negative ΔG° means combustion is extremely favorable!

> **↗ Connection · Problem 2.3: ΔG vs ΔG° Confusion**
>
> **Question:** A reaction has ΔG° = +10 kJ/mol at 298 K.
>
> (a) Is the reaction spontaneous under standard conditions?

> (b) Can it ever be spontaneous?
>
> **Solution:**
>
> **(a) Under standard conditions:**
>
> ΔG° > 0, so reaction is **non-spontaneous** when all species at 1 M/1 bar.
>
> **(b) Can it be spontaneous?**
>
> Yes! Using $\Delta G = \Delta G° + RT\ln Q$:
>
> For ΔG < 0:
>
> $$\Delta G° + RT\ln Q < 0$$

$$RT\ln Q < -\Delta G°$$

$$\ln Q < -\frac{\Delta G°}{RT}$$
>
> At 298 K:
>
> $$\ln Q < -\frac{10000}{8.314 \times 298} = -4.03$$

$$Q < e^{-4.03} = 0.018$$
>
> **Interpretation:** If Q < 0.018 (reactants in large excess), reaction is spontaneous!
>
> **Real-life example:** Even though ΔG° > 0, we can drive reaction forward by:
>
> - Increasing reactant concentrations

> - Removing products

> - Le Chatelier’s principle!
>
> **Answer:**
>
> - (a) Non-spontaneous at standard conditions

> - (b) Spontaneous when Q < 0.018 (reactants » products)

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Van't Hoff Equation**
>
> **Question:** The equilibrium constant for a reaction is K₁ = 100 at 300 K. If ΔH° = -50 kJ/mol, calculate K₂ at 400 K.
>
> **Solution:**
>
> Using Van’t Hoff equation:
>
> $$\ln\frac{K_2}{K_1} = -\frac{\Delta H°}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

$$\ln\frac{K_2}{100} = -\frac{-50000}{8.314}\left(\frac{1}{400} - \frac{1}{300}\right)$$

$$= +\frac{50000}{8.314}\left(\frac{1}{400} - \frac{1}{300}\right)$$

$$= 6014 \times (0.0025 - 0.00333)$$

$$= 6014 \times (-0.00083)$$

$$= -4.99$$

$$\frac{K_2}{100} = e^{-4.99} = 0.00674$$

$$K_2 = 100 \times 0.00674 = 0.674$$
>
> **Answer:** K₂ = 0.67 at 400 K
>
> **Check:** ΔH° < 0 (exothermic), so K decreases with increasing T ✓ (Le Chatelier!)
>
> **Insight:** Increasing T from 300 K to 400 K decreased K from 100 to 0.67 - huge change!

> **↗ Connection · Problem 3.2: Coupled Reactions**
>
> **Question:** Calculate ΔG° for the synthesis:
>
> $$\text{C(graphite)} + 2\text{H}_2(g) \to \text{CH}_4(g)$$
>
> Using coupled reactions:
>
> 1. $\text{CH}_4(g) + 2\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(l)$, $\Delta G°_1 = -818$ kJ

> 2. $\text{C(graphite)} + \text{O}_2(g) \to \text{CO}_2(g)$, $\Delta G°_2 = -394$ kJ

> 3. $\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{H}_2\text{O}(l)$, $\Delta G°_3 = -237$ kJ
>
> **Solution:**
>
> **Target:** $\text{C} + 2\text{H}_2 \to \text{CH}_4$
>
> **Manipulate:**
>
> Reverse reaction (1):
>
> $$\text{CO}_2 + 2\text{H}_2\text{O} \to \text{CH}_4 + 2\text{O}_2, \quad \Delta G° = +818 \text{ kJ}$$
>
> Use reaction (2) as is:
>
> $$\text{C} + \text{O}_2 \to \text{CO}_2, \quad \Delta G° = -394 \text{ kJ}$$
>
> Multiply reaction (3) by 2:
>
> $$2\text{H}_2 + \text{O}_2 \to 2\text{H}_2\text{O}, \quad \Delta G° = 2(-237) = -474 \text{ kJ}$$
>
> **Add all three:**
>
> $$\text{CO}_2 + 2\text{H}_2\text{O} + \text{C} + \text{O}_2 + 2\text{H}_2 + \text{O}_2 \to \text{CH}_4 + 2\text{O}_2 + \text{CO}_2 + 2\text{H}_2\text{O}$$
>
> **Cancel common terms:**
>
> $$\text{C} + 2\text{H}_2 \to \text{CH}_4$$

$$\Delta_f G°[\text{CH}_4] = +818 - 394 - 474 = -50 \text{ kJ/mol}$$
>
> **Answer:** ΔG° = -50 kJ/mol
>
> **Verification:** This matches standard formation data! ✓

> **↗ Connection · Problem 3.3: Temperature Range for Spontaneity**
>
> **Question:** For the reaction:
>
> $$2\text{NO}(g) + \text{O}_2(g) \to 2\text{NO}_2(g)$$
>
> Given at 298 K:
>
> - $\Delta H° = -114$ kJ/mol

> - $\Delta S° = -146$ J/K·mol
>
> (a) Determine the temperature range for spontaneity

> (b) Calculate K at 298 K

> (c) Explain why this reaction is favored at low T despite being exothermic
>
> **Solution:**
>
> **(a) Temperature range:**
>
> Case 3: ΔH < 0, ΔS < 0 → Spontaneous at low T
>
> Equilibrium temperature:
>
> $$T_{eq} = \frac{\Delta H}{\Delta S} = \frac{-114000}{-146} = 781 \text{ K}$$
>
> **Spontaneous when:** T < 781 K (508°C)

> **Non-spontaneous when:** T > 781 K
>
> **(b) K at 298 K:**
>
> $$\Delta G° = \Delta H° - T\Delta S°$$

$$= -114 - 298 \times (-0.146)$$

$$= -114 + 43.5$$

$$= -70.5 \text{ kJ/mol}$$

$$\log K = -\frac{\Delta G°}{5.7} = -\frac{-70.5}{5.7} = 12.4$$

$$K = 10^{12.4} \approx 2.5 \times 10^{12}$$
>
> **(c) Explanation:**
>
> This reaction:
>
> - **Exothermic** (ΔH < 0): Releases heat, favored by enthalpy

> - **Decreases disorder** (ΔS < 0): 3 gas moles → 2 gas moles, opposed by entropy
>
> **At low T (like 298 K):**
>
> - TΔS term is small: $298 \times 0.146 = 43.5$ kJ

> - ΔH term dominates: $|-114| > 43.5$

> - Net ΔG < 0, spontaneous!
>
> **At high T (above 781 K):**
>
> - TΔS term becomes large: $800 \times 0.146 = 117$ kJ

> - Now $117 > |-114|$

> - Net ΔG > 0, non-spontaneous!
>
> **Environmental relevance:** This is why NO₂ formation from NO is favored in cool parts of atmosphere and car exhausts, contributing to air pollution!
>
> **Answer:**
>
> - (a) Spontaneous below 781 K (508°C)

> - (b) K = 2.5 × 10¹² at 298 K

> - (c) Enthalpy term dominates entropy term at low T

---

## Quick Revision Box

### Essential Formulas

| Concept | Formula | Use |
| --- | --- | --- |
| Gibbs definition | $G = H - TS$ | Fundamental |
| Gibbs change | $\Delta G = \Delta H - T\Delta S$ | Spontaneity |
| Spontaneity | $\Delta G < 0$ | Forward spontaneous |
| Formation method | $\Delta G° = \sum \Delta_f G°_{\text{prod}} - \sum \Delta_f G°_{\text{react}}$ | From tables |
| Equilibrium | $\Delta G° = -RT\ln K$ | K from thermodynamics |
| Reaction quotient | $\Delta G = \Delta G° + RT\ln Q$ | Any conditions |
| Equilibrium temp | $T_{eq} = \frac{\Delta H}{\Delta S}$ | Where ΔG = 0 |
| Van’t Hoff | $\ln\frac{K_2}{K_1} = -\frac{\Delta H°}{R}(\frac{1}{T_2}-\frac{1}{T_1})$ | K vs temperature |

### Quick Reference at 298 K

$$\Delta G° = -5.7 \times \log K \quad \text{(kJ/mol)}$$

| ΔG° (kJ/mol) | K | Products vs Reactants |
| --- | --- | --- |
| -17 | 1000 | Strongly favor products |
| -11 | 100 | Favor products |
| -6 | 10 | Favor products |
| 0 | 1 | Equal |
| +6 | 0.1 | Favor reactants |
| +11 | 0.01 | Favor reactants |
| +17 | 0.001 | Strongly favor reactants |

### The Four Cases Summary

| ΔH | ΔS | Low T | High T | Example |
| --- | --- | --- | --- | --- |
| - | + | Spont | Spont | Combustion |
| + | - | Non-spont | Non-spont | Reverse combustion |
| - | - | Spont | Non-spont | Freezing H₂O |
| + | + | Non-spont | Spont | Melting H₂O |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> **1. Gibbs Energy: The Ultimate Spontaneity Criterion**
>
> $$\Delta G = \Delta H - T\Delta S$$
>
> Combines enthalpy and entropy into one number:
>
> - ΔG < 0 → Spontaneous

> - ΔG = 0 → Equilibrium

> - ΔG > 0 → Non-spontaneous
>
> **2. ΔG is Related to Entropy of Universe**
>
> $$\Delta G = -T\Delta S_{universe}$$
>
> So ΔG < 0 automatically means Second Law is satisfied!
>
> **3. The Four Cases: Enthalpy vs Entropy**
>
> Temperature determines which factor wins:
>
> - Both favor: Always spontaneous

> - Both oppose: Never spontaneous

> - Compete: Temperature decides winner
>
> **4. Equilibrium Constant from Thermodynamics**
>
> $$\Delta G° = -RT\ln K$$
>
> We can predict K without experiments! At 298 K:
>
> $$\log K = -\frac{\Delta G°}{5.7}$$
>
> **5. ΔG° vs ΔG**
>
> - **ΔG°**: Equilibrium position (standard conditions)

> - **ΔG**: Spontaneity now (actual conditions)
>
> $$\Delta G = \Delta G° + RT\ln Q$$
>
> **6. Temperature Changes Everything**
>
> Equilibrium temperature: $T_{eq} = \frac{\Delta H}{\Delta S}$
>
> This is where reaction switches from spontaneous to non-spontaneous.
>
> **“Gibbs energy is the final judge - it combines heat, disorder, and temperature to predict the future of every reaction.”**
>
> **JEE Weightage:** 4-5 questions per paper. Highest-yield thermodynamics topic!
>
> **Time-saving tip:** For MCQs, memorize $\log K = -\Delta G°/5.7$ at 298 K for instant K calculations!

---

## Cross-Links to Related Concepts

### Prerequisites

- [First Law](../first-law/index.md) - Internal energy, work, heat
- [Enthalpy](../enthalpy/index.md) - Heat content, ΔH calculations
- [Entropy](../entropy/index.md) - Disorder, Second Law
- [Thermochemistry](../thermochemistry/index.md) - Bond energies, Hess’s Law

### Equilibrium Applications

- [Chemical Equilibrium](../../equilibrium/chemical-equilibrium/index.md) - K, Q, reaction quotient
- [Le Chatelier’s Principle](../../equilibrium/le-chateliers-principle/index.md) - Temperature effects on equilibrium
- [Ionic Equilibrium](../../equilibrium/ionic-equilibrium/index.md) - Acid-base equilibria

### Electrochemistry Connections

- [Electrochemical Cells](../../redox-electrochemistry/electrochemical-cells/index.md) - ΔG° = -nFE°
- [Nernst Equation](../../redox-electrochemistry/nernst-equation/index.md) - Cell potential at non-standard conditions
- [Electrode Potentials](../../redox-electrochemistry/electrode-potentials/index.md) - Standard potentials

### Kinetics Links

- [Arrhenius Equation](../../chemical-kinetics/arrhenius-equation/index.md) - Activation energy
- [Rate of Reaction](../../chemical-kinetics/rate-of-reaction/index.md) - Kinetics vs thermodynamics

### Solution Chemistry

- [Colligative Properties](../../solutions/colligative-properties/index.md) - Dissolving spontaneity
- [Raoult’s Law](../../solutions/raoults-law/index.md) - Vapor pressure equilibrium

### Advanced Applications

- [Ionic Bonding - Born-Haber Cycle](../../chemical-bonding/ionic-bonding/index.md) - Lattice energy
- [p-Block Elements](../../p-block-elements/index.md) - Ellingham diagrams for metallurgy

---

## What’s Next?

> **◐ In simple terms · Coming Up Next**
>
> **[Thermochemistry](../thermochemistry/index.md)** - Apply everything you’ve learned! Calculate bond energies, heat of combustion, heat of formation, and solve complex energy problems using Born-Haber cycles and lattice energies!
>
> **What you’ll master:**
>
> - Bond dissociation energies and their applications

> - Heat of combustion and heat of formation calculations

> - Born-Haber cycle for ionic compounds

> - Lattice energy calculations

> - Flame temperatures and calorimetry
>
> **Connection:** Now that you know WHEN reactions happen (ΔG), you’ll learn HOW MUCH energy they involve in different contexts!

From TestGuru · our mock-test platform

## You've read Gibbs Free Energy and Spontaneity.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fthermodynamics%2Fgibbs-energy%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/thermodynamics/gibbs-energy/",this.page.identifier="/chemistry/thermodynamics/gibbs-energy/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="gibbsEnergyCalculator" id="anim-gibbsEnergyCalculator-1795396420614629451"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-gibbsEnergyCalculator-1795396420614629451")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/thermodynamics/gibbs-energy/](https://jeenotes.in/chemistry/thermodynamics/gibbs-energy/) · raw HTML: `offline/chemistry/thermodynamics/gibbs-energy/index.html`_
