---
title: "Entropy and the Second Law"
source: "https://jeenotes.in/chemistry/thermodynamics/entropy/"
description: "Master entropy, disorder, second law of thermodynamics, and spontaneity for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "17 min read"
breadcrumb: "Chemistry"
position: "/ Topic 3 of 7"
html: "../../../../offline/chemistry/thermodynamics/entropy/index.html"
extracted: "2026-11-23"
---

> Master entropy, disorder, second law of thermodynamics, and spontaneity for JEE Main & Advanced

## The Hook: Why You Can’t Unscramble an Egg

> **★ Key point · Connect: Real Life → Chemistry**
>
> **Three mysteries of everyday life:**
>
> 1. **Drop a glass:** It shatters into pieces. Why doesn’t it spontaneously reassemble?

> 2. **Melt an ice cube:** It becomes water. Why doesn’t water spontaneously freeze at room temperature?

> 3. **Scramble an egg:** It mixes completely. Why can’t you un-scramble it?
>
> **Here’s the puzzle:** Some of these processes are **exothermic** (release heat), some are **endothermic** (absorb heat). Yet they all happen spontaneously in one direction only!
>
> **The deeper question:** Why does ice melt at room temperature even though melting is endothermic (ΔH > 0)? Shouldn’t reactions favor releasing heat, not absorbing it?
>
> The answer lies in **Entropy** - the universe’s tendency toward disorder and randomness.
>
> **Movie connection (Oppenheimer):** “Now I am become Death, the destroyer of worlds” - just like entropy is the destroyer of order!

---

## The Core Concept

### What is Entropy?

**Entropy (S)** is a measure of **disorder, randomness, or number of possible microstates** in a system.

$$\text{Entropy} \propto \text{Disorder} \propto \text{Number of arrangements}$$

**In simple terms:** Entropy measures how “spread out” or “mixed up” energy and matter are.

**Boltzmann’s Definition (Statistical):**

$$S = k_B \ln W$$

where:

- $k_B$ = Boltzmann constant ($1.38 \times 10^{-23}$ J/K)
- $W$ = Number of microstates (ways to arrange molecules)

**Thermodynamic Definition:**

$$\boxed{\Delta S = \frac{q_{rev}}{T}}$$

where:

- $q_{rev}$ = Heat exchanged in reversible process
- $T$ = Absolute temperature (Kelvin)

**Units:** J/K or J/mol·K

### Visualizing Entropy: The Card Deck Analogy

**Ordered deck (low entropy):**

- All cards arranged by suit and rank
- Only **1 specific arrangement** = 1 microstate
- Very unlikely to occur by chance

**Shuffled deck (high entropy):**

- Cards randomly mixed
- **Billions of possible arrangements** = many microstates
- Very likely to occur

**That’s why:** Once you shuffle cards, they never spontaneously return to perfect order!

---

## The Second Law of Thermodynamics

### Statement of the Second Law

> **★ Key point · Second Law of Thermodynamics**
>
> **“The total entropy of the universe always increases for a spontaneous process.”**
>
> $$\boxed{\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} \geq 0}$$
>
> **For spontaneous process:** $\Delta S_{universe} > 0$
>
> **At equilibrium:** $\Delta S_{universe} = 0$
>
> **For non-spontaneous process:** $\Delta S_{universe} < 0$ (will not happen!)
>
> **Alternative statements:**
>
> - “Heat cannot spontaneously flow from cold to hot body”

> - “No process is 100% efficient in converting heat to work”

> - “Disorder of the universe always increases”

**Why is this the “Arrow of Time”?**

The Second Law gives direction to time:

- You can’t unbreak a glass (ΔS_universe would decrease)
- You can’t unmix cream from coffee (ΔS_universe would decrease)
- You age and eventually die (biological entropy increases)

**This is why we remember the past but not the future** - entropy only increases forward in time!

### Entropy of Surroundings

For a process at constant temperature and pressure:

$$\Delta S_{surroundings} = -\frac{\Delta H_{system}}{T}$$

**Why the negative sign?**

- If system releases heat (ΔH < 0, exothermic), surroundings absorb heat (ΔS_surr > 0)
- If system absorbs heat (ΔH > 0, endothermic), surroundings release heat (ΔS_surr < 0)

**Total entropy change:**

$$\Delta S_{universe} = \Delta S_{system} - \frac{\Delta H_{system}}{T}$$

This leads us to **Gibbs Energy** (next topic)!

### Interactive Demo: Visualize Entropy Changes

Watch how disorder increases in reversible and irreversible processes.

---

## Entropy Changes in Different Processes

### 1. Phase Transitions

$$\Delta S_{fusion} = \frac{\Delta H_{fusion}}{T_m}$$

$$\Delta S_{vaporization} = \frac{\Delta H_{vaporization}}{T_b}$$

where $T_m$ = melting point, $T_b$ = boiling point

**Example:** Water at 0°C:

$$\text{H}_2\text{O}(s) \to \text{H}_2\text{O}(l)$$

$$\Delta S_{fusion} = \frac{6.0 \text{ kJ/mol}}{273 \text{ K}} = \frac{6000}{273} = 22 \text{ J/K}\cdot\text{mol}$$

**Trend:** $\Delta S_{vap} > \Delta S_{fusion}$ (much larger disorder increase gas vs liquid)

### 2. Heating a Substance

At constant pressure:

$$\Delta S = nC_P \ln\frac{T_2}{T_1}$$

At constant volume:

$$\Delta S = nC_V \ln\frac{T_2}{T_1}$$

**Why ln?** Because $dS = \frac{dq}{T} = \frac{nC_PdT}{T}$, integrating gives ln.

### 3. Isothermal Expansion of Ideal Gas

At constant temperature:

$$\Delta S = nR\ln\frac{V_2}{V_1} = -nR\ln\frac{P_2}{P_1}$$

**Interpretation:** Expanding gas → molecules more spread out → higher entropy

**Sign check:**

- Expansion: $V_2 > V_1$ → $\ln\frac{V_2}{V_1} > 0$ → ΔS > 0 ✓
- Compression: $V_2 < V_1$ → $\ln\frac{V_2}{V_1} < 0$ → ΔS < 0 ✓

### 4. Mixing of Gases

When two ideal gases mix (both at same T, P):

$$\Delta S_{mixing} = -nR(x_1\ln x_1 + x_2\ln x_2)$$

where $x_1, x_2$ are mole fractions

**Always positive** because mixing increases disorder!

### 5. Chemical Reactions

$$\boxed{\Delta S°_{rxn} = \sum S°(\text{products}) - \sum S°(\text{reactants})}$$

**Note:** Unlike enthalpy, we use **absolute entropies** $S°$, not formation entropies.

**Why?** Third Law of Thermodynamics states: $S = 0$ for perfect crystal at 0 K (absolute zero).

---

## Factors Affecting Entropy

### 1. State of Matter

$$S_{gas} \gg S_{liquid} > S_{solid}$$

**Reason:** Molecules most free to move in gas, least in solid.

**Typical values at 298 K:**

- Solids: 50-100 J/mol·K
- Liquids: 100-200 J/mol·K
- Gases: 150-300 J/mol·K

**Example:**

- $S°[\text{H}_2\text{O}(s)] = 48$ J/mol·K
- $S°[\text{H}_2\text{O}(l)] = 70$ J/mol·K
- $S°[\text{H}_2\text{O}(g)] = 189$ J/mol·K

### 2. Temperature

**Higher temperature → Higher entropy**

$$\left(\frac{\partial S}{\partial T}\right)_P = \frac{C_P}{T} > 0$$

**Why?** More thermal energy → molecules move faster → more possible arrangements

### 3. Volume

**Larger volume → Higher entropy**

For ideal gas: $S \propto \ln V$

**Why?** More space → molecules more spread out → more possible positions

### 4. Number of Moles

**More particles → Higher entropy**

$S$ is extensive property: $S \propto n$

**Example:**

$$2\text{H}_2\text{O}(l) \quad \text{has} \quad S = 2 \times 70 = 140 \text{ J/K}$$

### 5. Molecular Complexity

**More complex molecules → Higher entropy**

**Reason:** More bonds → more vibrational modes → more ways to store energy

**Example (standard entropies at 298 K):**

- $S°[\text{CH}_4] = 186$ J/mol·K
- $S°[\text{C}_2\text{H}_6] = 230$ J/mol·K
- $S°[\text{C}_3\text{H}_8] = 270$ J/mol·K

### 6. Number of Particles in Reaction

$$\Delta S > 0 \quad \text{when} \quad n_{products} > n_{reactants}$$

**Example:**

$$2\text{H}_2\text{O}_2(l) \to 2\text{H}_2\text{O}(l) + \text{O}_2(g)$$

- Reactants: 2 liquid molecules
- Products: 2 liquid + 1 gas molecules
- **Net:** Formation of gas → large increase in entropy

---

## Predicting Sign of ΔS for Reactions

### Quick Rules

> **★ Key point · Entropy Prediction Shortcut**
>
> **ΔS > 0 (entropy increases):**
>
> 1. Solid → Liquid → Gas (phase change to higher disorder)

> 2. Few moles → Many moles (especially gases)

> 3. Dissociation reactions (1 molecule → many ions/molecules)

> 4. Dissolving ionic solids (usually, but exceptions exist)
>
> **ΔS < 0 (entropy decreases):**
>
> 1. Gas → Liquid → Solid (phase change to lower disorder)

> 2. Many moles → Few moles (especially gases)

> 3. Association reactions (many molecules → 1)

> 4. Condensation, crystallization
>
> **ΔS ≈ 0:**
>
> - No change in number of gas moles

> - No phase change

> - Similar molecular complexity

### Examples

**Large positive ΔS:**

$$\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$$

- Solid produces gas → large entropy increase

$$\text{NH}_4\text{NO}_3(s) \xrightarrow{\text{H}_2\text{O}} \text{NH}_4^+(aq) + \text{NO}_3^-(aq)$$

- Ordered crystal → dispersed ions in solution

**Large negative ΔS:**

$$\text{N}_2(g) + 3\text{H}_2(g) \to 2\text{NH}_3(g)$$

- 4 gas moles → 2 gas moles (Δn_g = -2)

$$3\text{O}_2(g) \to 2\text{O}_3(g)$$

- 3 moles → 2 moles

---

## Third Law of Thermodynamics

> **◐ In simple terms · Third Law**
>
> **“The entropy of a perfect crystal at absolute zero (0 K) is zero.”**
>
> $$S = 0 \quad \text{at} \quad T = 0 \text{ K (perfect crystal)}$$
>
> **Consequence:** We can calculate **absolute entropies** $S°$ (not just ΔS).
>
> **This is different from enthalpy!** We can only calculate ΔH, not absolute H values.

**Why this works:**

- At 0 K: No molecular motion, only one possible arrangement (perfect order)
- $W = 1$ (one microstate)
- $S = k_B \ln(1) = 0$

**Practical use:** Standard entropy tables give $S°_{298}$ values for all substances.

---

## Spontaneity and Entropy

### Why Do Endothermic Reactions Sometimes Happen?

**The ice melting paradox:**

$$\text{H}_2\text{O}(s) \to \text{H}_2\text{O}(l) \quad \text{at 25°C}$$

- $\Delta H = +6.0$ kJ/mol (endothermic - unfavorable!)
- But it happens spontaneously!

**Resolution:** Look at total entropy change:

$$\Delta S_{system} = \frac{6000}{298} = +20.1 \text{ J/K}\cdot\text{mol} \quad \text{(favorable!)}$$

$$\Delta S_{surroundings} = -\frac{\Delta H}{T} = -\frac{6000}{298} = -20.1 \text{ J/K}\cdot\text{mol}$$

But wait, at 25°C:

$$\Delta S_{system} > |\Delta S_{surroundings}|$$

Actually, let’s recalculate properly:

At 0°C (273 K), equilibrium:

$$\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} = +22 - 22 = 0$$

At 25°C (298 K), spontaneous melting:

$$\Delta S_{system} = +22 \text{ J/K}\cdot\text{mol (approximately)}$$

$$\Delta S_{surroundings} = -\frac{6000}{298} = -20.1 \text{ J/K}\cdot\text{mol}$$

$$\Delta S_{universe} = 22 - 20.1 = +1.9 \text{ J/K}\cdot\text{mol} > 0 \quad \checkmark$$

**Conclusion:** Even though melting absorbs heat (unfavorable enthalpy), the large entropy increase dominates, making the process spontaneous!

### Entropy vs Enthalpy Competition

| ΔH | ΔS | Result | Example |
| --- | --- | --- | --- |
| - (exo) | + (disorder increases) | **Always spontaneous** | Combustion |
| + (endo) | - (disorder decreases) | **Never spontaneous** | Freezing at high T |
| - (exo) | - (disorder decreases) | **Spontaneous at low T** | Freezing water |
| + (endo) | + (disorder increases) | **Spontaneous at high T** | Melting ice |

**This leads directly to Gibbs Energy!**

---

## Memory Tricks & Patterns

### Mnemonic for Entropy

**“Entropy = Disorder”**

**“MESS”** = More Entropy, Spread Out, Scattered

**“Gases are Gossips”** (spread information everywhere) → High entropy

**“Solids are Secretive”** (keep things organized) → Low entropy

### Pattern Recognition

**Entropy increases when:**

- **S** → **L** → **G** (phase change upward)
- **Few** → **Many** (particles increase)
- **Organized** → **Messy** (disorder increases)
- **Temperature increases** (more molecular motion)
- **Volume increases** (more space to spread out)

**Mnemonic for phase entropy:**

$$S_{ice} < S_{water} < S_{steam}$$

**“Ice Skaters Slide”** → I < W < S (alphabetically!)

### Quick Formula Summary

| Process | Formula | Quick Check |
| --- | --- | --- |
| Phase change | $\Delta S = \frac{\Delta H}{T}$ | Always use equilibrium T |
| Heating | $\Delta S = nC_P\ln\frac{T_2}{T_1}$ | T₂ > T₁ → ΔS > 0 |
| Expansion | $\Delta S = nR\ln\frac{V_2}{V_1}$ | V₂ > V₁ → ΔS > 0 |
| Reaction | $\Delta S° = \sum S°_{\text{prod}} - \sum S°_{\text{react}}$ | Use absolute S° values |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing ΔS_system with ΔS_universe**
>
> **Wrong:** “ΔS > 0, so reaction is spontaneous”
>
> **Right:** “ΔS_universe > 0, so reaction is spontaneous”
>
> A reaction can have ΔS_system < 0 but still be spontaneous if ΔS_surroundings is sufficiently positive!
>
> **Example:** Freezing water at -10°C
>
> - ΔS_system < 0 (disorder decreases)

> - ΔS_surroundings > 0 (heat released to surroundings)

> - ΔS_universe > 0 (spontaneous!)

> **⚠ Trap #2: Using Formation Entropies**
>
> **Wrong:** $\Delta S°_{rxn} = \sum \Delta_f S°(\text{products}) - \sum \Delta_f S°(\text{reactants})$
>
> **Right:** $\Delta S°_{rxn} = \sum S°(\text{products}) - \sum S°(\text{reactants})$
>
> Unlike enthalpy, we use **absolute entropies** $S°$, not “formation entropies”!
>
> **Why?** Third Law gives us absolute zero reference point for entropy.

> **⚠ Trap #3: Temperature Units**
>
> **Wrong:** Using °C in $\Delta S = \frac{q}{T}$
>
> **Right:** Always use **Kelvin (K)** for temperature in entropy calculations!
>
> $$\Delta S = \frac{6000 \text{ J}}{25°\text{C}} \quad \text{← WRONG!}$$

$$\Delta S = \frac{6000 \text{ J}}{298 \text{ K}} \quad \text{← Correct!}$$

> **⚠ Trap #4: Dissolving Ionic Solids**
>
> **Common assumption:** Dissolving always increases entropy (solid → dispersed ions)
>
> **Reality:** Sometimes ΔS < 0 for dissolving!
>
> **Example:** $\text{LiCl}(s) \to \text{Li}^+(aq) + \text{Cl}^-(aq)$ has ΔS < 0
>
> **Why?** Small Li⁺ ion heavily hydrates water molecules, creating more order!
>
> **Rule:** Entropy of dissolution depends on ion size and hydration effects.

> **⚠ Trap #5: Phase Change Temperature**
>
> **Wrong:** Using 298 K for all phase change entropy calculations
>
> **Right:** Use the **actual transition temperature** (melting point or boiling point)
>
> $$\Delta S_{fusion} = \frac{\Delta H_{fusion}}{T_m} \quad \text{(use melting point!)}$$
>
> **Example:** For water melting:
>
> - Use T = 273 K (0°C), not 298 K

> - $\Delta S = \frac{6000}{273} = 22$ J/K·mol

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Entropy of Fusion**
>
> **Question:** Calculate the entropy of fusion of ice given:
>
> - $\Delta H_{fusion} = 6.0$ kJ/mol

> - Melting point = 273 K
>
> **Solution:**
>
> At melting point (equilibrium):
>
> $$\Delta S_{fusion} = \frac{\Delta H_{fusion}}{T_m}$$

$$\Delta S_{fusion} = \frac{6000 \text{ J/mol}}{273 \text{ K}} = 22.0 \text{ J/K}\cdot\text{mol}$$
>
> **Answer:** 22.0 J/K·mol
>
> **Interpretation:** Positive ΔS confirms disorder increases when solid → liquid.

> **↗ Connection · Problem 1.2: Predicting Sign of ΔS**
>
> **Question:** Predict the sign of ΔS for:

> (a) $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$

> (b) $\text{N}_2(g) + 3\text{H}_2(g) \to 2\text{NH}_3(g)$

> (c) $\text{H}_2\text{O}(l) \to \text{H}_2\text{O}(g)$
>
> **Solution:**
>
> **(a)** $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$
>
> - Solid produces gas

> - 1 mole → 2 moles (including 1 gas)

> - **ΔS > 0** (large increase)
>
> **(b)** $\text{N}_2(g) + 3\text{H}_2(g) \to 2\text{NH}_3(g)$
>
> - 4 gas moles → 2 gas moles

> - Fewer particles

> - **ΔS < 0** (decrease)
>
> **(c)** $\text{H}_2\text{O}(l) \to \text{H}_2\text{O}(g)$
>
> - Liquid → gas

> - Large increase in disorder

> - **ΔS > 0** (very large increase)
>
> **Answer:** (a) positive, (b) negative, (c) positive (large)

> **↗ Connection · Problem 1.3: Isothermal Expansion Entropy**
>
> **Question:** One mole of ideal gas expands isothermally from 10 L to 20 L at 300 K. Calculate ΔS.
>
> **Solution:**
>
> For isothermal expansion:
>
> $$\Delta S = nR\ln\frac{V_2}{V_1}$$

$$\Delta S = 1 \times 8.314 \times \ln\frac{20}{10}$$

$$\Delta S = 8.314 \times \ln 2$$

$$\Delta S = 8.314 \times 0.693 = 5.76 \text{ J/K}$$
>
> **Answer:** +5.76 J/K
>
> **Check:** Expansion → ΔS > 0 ✓

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Calculating ΔS for Reaction**
>
> **Question:** Calculate $\Delta S°$ for the reaction:
>
> $$\text{CH}_4(g) + 2\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(l)$$
>
> Given standard entropies:
>
> - $S°[\text{CH}_4(g)] = 186$ J/mol·K

> - $S°[\text{O}_2(g)] = 205$ J/mol·K

> - $S°[\text{CO}_2(g)] = 214$ J/mol·K

> - $S°[\text{H}_2\text{O}(l)] = 70$ J/mol·K
>
> **Solution:**
>
> $$\Delta S° = \sum S°(\text{products}) - \sum S°(\text{reactants})$$
>
> Products:
>
> $$S°_{\text{products}} = S°[\text{CO}_2] + 2 \times S°[\text{H}_2\text{O}]$$

$$= 214 + 2(70) = 354 \text{ J/K}$$
>
> Reactants:
>
> $$S°_{\text{reactants}} = S°[\text{CH}_4] + 2 \times S°[\text{O}_2]$$

$$= 186 + 2(205) = 596 \text{ J/K}$$

$$\Delta S° = 354 - 596 = -242 \text{ J/K}$$
>
> **Answer:** -242 J/K
>
> **Interpretation:**
>
> - Negative because 3 gas moles → 1 gas mole + 2 liquid

> - Significant decrease in disorder

> - Yet combustion is spontaneous! Why? Large negative ΔH dominates (see [Gibbs Energy](../gibbs-energy/index.md))

> **↗ Connection · Problem 2.2: Entropy and Spontaneity**
>
> **Question:** For the melting of ice at 10°C, calculate ΔS_universe and determine if spontaneous.
>
> Given:
>
> - $\Delta H_{fusion} = 6.0$ kJ/mol

> - $T = 283$ K (10°C)
>
> **Solution:**
>
> **System (ice → water):**
>
> $$\Delta S_{system} = \frac{\Delta H_{fusion}}{T_{melting}} = \frac{6000}{273} = 22.0 \text{ J/K}\cdot\text{mol}$$
>
> Note: We use melting point 273 K for the phase transition entropy.
>
> **Surroundings:**

> At 283 K (actual temperature):
>
> $$\Delta S_{surroundings} = -\frac{\Delta H_{system}}{T_{actual}} = -\frac{6000}{283} = -21.2 \text{ J/K}\cdot\text{mol}$$
>
> **Universe:**
>
> $$\Delta S_{universe} = 22.0 + (-21.2) = +0.8 \text{ J/K}\cdot\text{mol}$$
>
> **Answer:** ΔS_universe = +0.8 J/K·mol > 0, therefore **spontaneous** ✓
>
> **Insight:** At 10°C (above melting point), entropy gain of system > entropy loss of surroundings, so ice melts spontaneously despite being endothermic!

> **↗ Connection · Problem 2.3: Heating and Entropy**
>
> **Question:** Calculate entropy change when 2 moles of water are heated from 300 K to 350 K at constant pressure. ($C_P = 75.3$ J/mol·K)
>
> **Solution:**
>
> $$\Delta S = nC_P\ln\frac{T_2}{T_1}$$

$$\Delta S = 2 \times 75.3 \times \ln\frac{350}{300}$$

$$\Delta S = 150.6 \times \ln(1.167)$$

$$\Delta S = 150.6 \times 0.154$$

$$\Delta S = 23.2 \text{ J/K}$$
>
> **Answer:** +23.2 J/K
>
> **Check:** Heating → temperature increases → entropy increases → ΔS > 0 ✓

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Multi-Step Entropy Calculation**
>
> **Question:** Calculate the total entropy change when 1 mole of ice at -10°C is converted to steam at 110°C.
>
> Given:
>
> - $C_P[\text{ice}] = 37.7$ J/mol·K

> - $C_P[\text{water}] = 75.3$ J/mol·K

> - $C_P[\text{steam}] = 33.6$ J/mol·K

> - $\Delta H_{fusion} = 6.0$ kJ/mol at 273 K

> - $\Delta H_{vaporization} = 40.7$ kJ/mol at 373 K
>
> **Solution:**
>
> **Step 1: Heat ice from -10°C (263 K) to 0°C (273 K)**
>
> $$\Delta S_1 = nC_P\ln\frac{T_2}{T_1} = 1 \times 37.7 \times \ln\frac{273}{263}$$

$$= 37.7 \times \ln(1.038) = 37.7 \times 0.0373 = 1.41 \text{ J/K}$$
>
> **Step 2: Melt ice at 0°C (273 K)**
>
> $$\Delta S_2 = \frac{\Delta H_{fusion}}{T_m} = \frac{6000}{273} = 22.0 \text{ J/K}$$
>
> **Step 3: Heat water from 0°C (273 K) to 100°C (373 K)**
>
> $$\Delta S_3 = 1 \times 75.3 \times \ln\frac{373}{273}$$

$$= 75.3 \times \ln(1.366) = 75.3 \times 0.312 = 23.5 \text{ J/K}$$
>
> **Step 4: Vaporize water at 100°C (373 K)**
>
> $$\Delta S_4 = \frac{\Delta H_{vap}}{T_b} = \frac{40700}{373} = 109.1 \text{ J/K}$$
>
> **Step 5: Heat steam from 100°C (373 K) to 110°C (383 K)**
>
> $$\Delta S_5 = 1 \times 33.6 \times \ln\frac{383}{373}$$

$$= 33.6 \times \ln(1.027) = 33.6 \times 0.0266 = 0.89 \text{ J/K}$$
>
> **Total entropy change:**
>
> $$\Delta S_{total} = 1.41 + 22.0 + 23.5 + 109.1 + 0.89 = 156.9 \text{ J/K}$$
>
> **Answer:** +156.9 J/K
>
> **Insights:**
>
> - Vaporization contributes most (109.1 J/K) - huge disorder increase!

> - Fusion contributes less (22.0 J/K)

> - Heating contributions are smaller

> **↗ Connection · Problem 3.2: Carnot Efficiency and Entropy**
>
> **Question:** A Carnot engine operates between 500 K (hot reservoir) and 300 K (cold reservoir).
>
> (a) Calculate maximum efficiency

> (b) If engine absorbs 1000 J from hot reservoir, calculate entropy change of universe
>
> **Solution:**
>
> **(a) Maximum efficiency (Carnot efficiency):**
>
> $$\eta_{max} = 1 - \frac{T_C}{T_H} = 1 - \frac{300}{500} = 1 - 0.6 = 0.4 = 40\%$$
>
> **(b) Entropy changes:**
>
> Heat absorbed from hot reservoir: $q_H = 1000$ J
>
> Work done: $w = \eta \times q_H = 0.4 \times 1000 = 400$ J
>
> Heat rejected to cold reservoir: $q_C = q_H - w = 1000 - 400 = 600$ J
>
> **Hot reservoir:**
>
> $$\Delta S_H = -\frac{q_H}{T_H} = -\frac{1000}{500} = -2.0 \text{ J/K}$$
>
> **Cold reservoir:**
>
> $$\Delta S_C = +\frac{q_C}{T_C} = +\frac{600}{300} = +2.0 \text{ J/K}$$
>
> **Universe (for reversible Carnot engine):**
>
> $$\Delta S_{universe} = \Delta S_H + \Delta S_C = -2.0 + 2.0 = 0$$
>
> **Answer:**
>
> - (a) Maximum efficiency = 40%

> - (b) ΔS_universe = 0 (reversible process!)
>
> **Key insight:** For reversible Carnot cycle, ΔS_universe = 0 (equilibrium condition). Real engines are irreversible and have ΔS_universe > 0, meaning lower efficiency.

> **↗ Connection · Problem 3.3: Free Expansion and Irreversibility**
>
> **Question:** One mole of ideal gas at 300 K expands freely (into vacuum) from 10 L to 20 L.
>
> (a) Calculate ΔS_system

> (b) Calculate ΔS_surroundings

> (c) Show this is irreversible
>
> **Solution:**
>
> **(a) System entropy change:**
>
> Even though process is irreversible, entropy is a state function:
>
> $$\Delta S_{system} = nR\ln\frac{V_2}{V_1} = 1 \times 8.314 \times \ln 2$$

$$= 8.314 \times 0.693 = 5.76 \text{ J/K}$$
>
> **(b) Surroundings:**
>
> Free expansion: $q = 0$ (no heat exchange)
>
> Therefore:
>
> $$\Delta S_{surroundings} = 0$$
>
> **(c) Universe:**
>
> $$\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings}$$

$$= 5.76 + 0 = 5.76 \text{ J/K} > 0$$
>
> **Answer:**
>
> - (a) ΔS_system = +5.76 J/K

> - (b) ΔS_surroundings = 0

> - (c) ΔS_universe = +5.76 J/K > 0 → **Irreversible!**
>
> **Deep insight:**
>
> - Free expansion is spontaneous (ΔS_universe > 0)

> - But does no work (w = 0) despite volume change

> - This is **irreversible** - you can’t spontaneously recompress the gas

> - Maximum work (reversible) would be: $w_{max} = -nRT\ln 2 = -1729$ J

> - Free expansion wastes this work potential - this is why entropy increases!
>
> **Comparison:**
>
> | Process | w (J) | q (J) | ΔS_sys (J/K) | ΔS_surr (J/K) | ΔS_univ (J/K) |

> | --- | --- | --- | --- | --- | --- |

> | Free expansion | 0 | 0 | +5.76 | 0 | +5.76 |

> | Reversible isothermal | -1729 | +1729 | +5.76 | -5.76 | 0 |
>
> The reversible process extracts maximum work and has ΔS_univ = 0 (equilibrium).

> The free expansion is wasteful and has ΔS_univ > 0 (irreversible).

---

## Quick Revision Box

### Essential Formulas

| Concept | Formula | Condition |
| --- | --- | --- |
| Entropy definition | $\Delta S = \frac{q_{rev}}{T}$ | Reversible process |
| Second Law | $\Delta S_{universe} \geq 0$ | Always |
| Surroundings | $\Delta S_{surr} = -\frac{\Delta H_{sys}}{T}$ | Constant T, P |
| Phase transition | $\Delta S = \frac{\Delta H}{T_{transition}}$ | At equilibrium T |
| Heating | $\Delta S = nC_P\ln\frac{T_2}{T_1}$ | Constant P |
| Expansion (ideal gas) | $\Delta S = nR\ln\frac{V_2}{V_1}$ | Isothermal |
| Reaction | $\Delta S° = \sum S°_{prod} - \sum S°_{react}$ | Use absolute S° |

### Entropy Trends

| Factor | Effect on S |
| --- | --- |
| Solid → Liquid → Gas | Increases (S_g » S_l > S_s) |
| Temperature increases | Increases |
| Volume increases | Increases |
| Particles increase | Increases |
| Molecular complexity increases | Increases |
| Dissolution (usually) | Increases |

### Spontaneity Quick Guide

| Condition | Spontaneity |
| --- | --- |
| ΔS_universe > 0 | Spontaneous |
| ΔS_universe = 0 | Equilibrium |
| ΔS_universe < 0 | Non-spontaneous |

### Standard Entropy Values (298 K)

| Substance | S° (J/mol·K) |
| --- | --- |
| H₂(g) | 131 |
| O₂(g) | 205 |
| N₂(g) | 192 |
| H₂O(l) | 70 |
| H₂O(g) | 189 |
| CO₂(g) | 214 |
| CH₄(g) | 186 |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> **1. Entropy Measures Disorder**
>
> $$S = k_B \ln W, \quad \Delta S = \frac{q_{rev}}{T}$$
>
> Higher entropy = more disorder, more randomness, more possible microstates.
>
> **2. Second Law: The Arrow of Time**
>
> $$\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} \geq 0$$
>
> For spontaneous processes, total entropy of universe always increases. This gives direction to time.
>
> **3. Entropy Depends on State**
>
> - Gases » Liquids > Solids

> - Higher T → Higher S

> - Larger V → Higher S

> - More complex molecules → Higher S
>
> **4. Predicting ΔS**
>
> - Phase change to higher state → ΔS > 0

> - More gas moles in products → ΔS > 0

> - Dissociation/dissolving → Usually ΔS > 0
>
> **5. Spontaneity Requires ΔS_universe > 0**
>
> Not just ΔS_system! Must consider surroundings too:
>
> $$\Delta S_{surr} = -\frac{\Delta H_{sys}}{T}$$
>
> This competition leads to **Gibbs Energy** (next topic).
>
> **6. Entropy is a State Function**
>
> Even for irreversible processes, ΔS depends only on initial and final states, not path.
>
> **“The universe tends toward maximum disorder - entropy is destiny.”**
>
> **JEE Weightage:** 2-3 questions per paper. Often combined with Gibbs Energy for spontaneity predictions.
>
> **Time-saving tip:** For MCQs, quickly check if gas moles increase or decrease to predict sign of ΔS without calculation!

---

## Cross-Links to Related Concepts

**Prerequisites:**

- [First Law](../first-law/index.md) - Internal energy, heat, work
- [Enthalpy](../enthalpy/index.md) - Heat at constant pressure

**Builds on:**

- [States of Matter](../../index.md) - Phase transitions
- [Atomic Structure](https://jeenotes.in/chemistry/atomic-structure/) - Microstates, energy levels

**Leads to:**

- [Gibbs Energy](../gibbs-energy/index.md) - Combining ΔH and ΔS for spontaneity
- [Equilibrium](https://jeenotes.in/chemistry/equilibrium/) - Entropy at equilibrium

**Applications:**

- [Chemical Kinetics](https://jeenotes.in/chemistry/chemical-kinetics/) - Activation entropy
- [Electrochemistry](https://jeenotes.in/chemistry/redox-electrochemistry/) - Entropy change in cells

**Related in Physics:**

- [Statistical Mechanics](../../../physics/thermodynamics/index.md) - Microscopic basis of entropy
- [Heat Engines](../../../physics/thermodynamics/heat-engines/index.md) - Carnot cycle, efficiency

---

## What’s Next?

> **◐ In simple terms · Coming Up Next**
>
> **[Gibbs Free Energy](../gibbs-energy/index.md)** - The ultimate spontaneity predictor! Learn how to combine enthalpy and entropy into one powerful criterion, master the equation ΔG = ΔH - TΔS, and predict equilibrium constants without doing experiments!
>
> **Teaser:**
>
> - We know WHAT energy changes (ΔH)

> - We know WHY things happen (ΔS)

> - Now we’ll learn WHEN exactly they happen (ΔG)!
>
> **The magic equation that combines everything:**
>
> $$\Delta G = \Delta H - T\Delta S$$
>
> When ΔG < 0, reaction is spontaneous!

> When ΔG = 0, system is at equilibrium!

> When ΔG > 0, reaction is non-spontaneous!

From TestGuru · our mock-test platform

## You've read Entropy and the Second Law.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fthermodynamics%2Fentropy%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/thermodynamics/entropy/",this.page.identifier="/chemistry/thermodynamics/entropy/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicsProcess" id="anim-thermodynamicsProcess-1795396420604490966"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicsProcess-1795396420604490966")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/thermodynamics/entropy/](https://jeenotes.in/chemistry/thermodynamics/entropy/) · raw HTML: `offline/chemistry/thermodynamics/entropy/index.html`_
