---
title: "Enthalpy and Heat of Reaction"
source: "https://jeenotes.in/chemistry/thermodynamics/enthalpy/"
description: "Master enthalpy changes, Hess's Law, and thermochemistry for JEE Main & Advanced with practical examples"
updated: "2026-08-01"
reading_time: "18 min read"
breadcrumb: "Chemistry"
position: "/ Topic 2 of 7"
html: "../../../../offline/chemistry/thermodynamics/enthalpy/index.html"
extracted: "2026-11-23"
---

> Master enthalpy changes, Hess's Law, and thermochemistry for JEE Main & Advanced with practical examples

## The Hook: Why Does a Hand Warmer Get Hot?

> **★ Key point · Connect: Real Life → Chemistry**
>
> You’re at a cricket match on a cold winter evening. You crack open a hand warmer packet, shake it, and within seconds it feels warm in your hands. No battery, no external heat source - just a chemical reaction inside the packet.
>
> **The questions:**
>
> - Where does this heat come from?

> - Why do some reactions release heat (like burning) while others absorb heat (like melting ice)?

> - How can we predict and measure heat changes in reactions without actually performing them?
>
> The answer lies in **Enthalpy** - the heat content of substances and the heat exchanged during reactions at constant pressure.
>
> **Real-world connections:** Hand warmers, instant cold packs for injuries, cooking food, car engines, industrial chemical plants - all involve enthalpy changes!

---

## The Core Concept

### What is Enthalpy?

**Enthalpy (H)** is the total heat content of a system at constant pressure.

$$\boxed{H = U + PV}$$

where:

- **U** = Internal energy
- **P** = Pressure
- **V** = Volume

**Why do we need Enthalpy when we have Internal Energy?**

Most chemical reactions happen at **constant atmospheric pressure** (open beakers, not sealed bombs). At constant pressure, heat change equals enthalpy change, making calculations easier!

$$\boxed{\Delta H = q_P}$$

**In simple terms:** Enthalpy is the heat absorbed or released by a reaction at constant pressure.

### Relation Between ΔH and ΔU

Starting from $H = U + PV$:

$$\Delta H = \Delta U + \Delta(PV)$$

At constant pressure:

$$\boxed{\Delta H = \Delta U + P\Delta V}$$

For reactions involving gases (using ideal gas law):

$$PV = nRT$$

$$P\Delta V = \Delta n_g RT$$

where $\Delta n_g$ = (moles of gaseous products) - (moles of gaseous reactants)

$$\boxed{\Delta H = \Delta U + \Delta n_g RT}$$

> **★ Key point · Key Formula for JEE**
>
> $$\Delta H = \Delta U + \Delta n_g RT$$
>
> **When to use:**
>
> - When converting between ΔH and ΔU

> - When reactions involve gaseous species

> - **Count only gaseous moles**, not liquids or solids!
>
> **Sign of Δn_g:**
>
> - More gas moles in products: Δn_g > 0 → ΔH > ΔU

> - More gas moles in reactants: Δn_g < 0 → ΔH < ΔU

> - No change in gas moles: Δn_g = 0 → ΔH = ΔU

---

## Exothermic vs Endothermic Reactions

### Exothermic Reactions (Heat Released)

$$\Delta H < 0 \quad \text{(negative)}$$

**Examples:**

- Combustion: $\text{CH}_4 + 2\text{O}_2 \to \text{CO}_2 + 2\text{H}_2\text{O}$, $\Delta H = -890$ kJ/mol
- Neutralization: $\text{HCl} + \text{NaOH} \to \text{NaCl} + \text{H}_2\text{O}$, $\Delta H = -57.1$ kJ/mol
- Freezing water: $\text{H}_2\text{O}(l) \to \text{H}_2\text{O}(s)$, $\Delta H = -6$ kJ/mol
- Respiration: $\text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2 \to 6\text{CO}_2 + 6\text{H}_2\text{O}$

**Molecular view:** Products are more stable (lower energy) than reactants. Excess energy is released as heat.

**Real-life:** Hand warmers, burning fuels, acid-base reactions

### Endothermic Reactions (Heat Absorbed)

$$\Delta H > 0 \quad \text{(positive)}$$

**Examples:**

- Photosynthesis: $6\text{CO}_2 + 6\text{H}_2\text{O} \to \text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2$, $\Delta H = +2802$ kJ/mol
- Melting ice: $\text{H}_2\text{O}(s) \to \text{H}_2\text{O}(l)$, $\Delta H = +6$ kJ/mol
- Decomposition of calcium carbonate: $\text{CaCO}_3 \to \text{CaO} + \text{CO}_2$, $\Delta H = +178$ kJ/mol
- Evaporation: $\text{H}_2\text{O}(l) \to \text{H}_2\text{O}(g)$, $\Delta H = +44$ kJ/mol

**Molecular view:** Products are less stable (higher energy) than reactants. Energy must be supplied from surroundings.

**Real-life:** Instant cold packs, cooking (breaking bonds), evaporative cooling (sweat)

---

## Standard Enthalpy Changes

### Standard State Conditions

**Standard state (°):**

- Temperature: **298 K (25°C)** unless specified
- Pressure: **1 bar** (≈ 1 atm)
- Concentration: **1 M** for solutions
- Pure substances in their most stable form

> **◐ In simple terms · Standard State Examples**
>
> - Oxygen: O₂(g) at 1 bar, not O₃(g) or O(g)

> - Carbon: C(graphite), not C(diamond)

> - Water: H₂O(l), not H₂O(g) at 298 K

> - Mercury: Hg(l), not Hg(s) at 298 K

### Types of Standard Enthalpy Changes

| Type | Symbol | Definition | Example |
| --- | --- | --- | --- |
| **Formation** | $\Delta_f H°$ | Heat change when **1 mole** of compound forms from elements in standard states | $\text{C} + \text{O}_2 \to \text{CO}_2$, $\Delta_f H° = -393.5$ kJ/mol |
| **Combustion** | $\Delta_c H°$ | Heat released when **1 mole** burns completely in O₂ | $\text{CH}_4 + 2\text{O}_2 \to \text{CO}_2 + 2\text{H}_2\text{O}$, $\Delta_c H° = -890$ kJ/mol |
| **Neutralization** | $\Delta_{neut} H°$ | Heat released when 1 mole H⁺ neutralizes 1 mole OH⁻ | $\text{H}^+ + \text{OH}^- \to \text{H}_2\text{O}$, $\Delta_{neut} H° = -57.1$ kJ/mol |
| **Atomization** | $\Delta_a H°$ | Heat to convert **1 mole** to gaseous atoms | $\text{CH}_4(g) \to \text{C}(g) + 4\text{H}(g)$, $\Delta_a H° = +1660$ kJ/mol |
| **Bond dissociation** | $\Delta_{bond} H°$ | Energy to break **1 mole** of specific bonds | $\text{Cl}_2(g) \to 2\text{Cl}(g)$, $\Delta_{bond} H° = +243$ kJ/mol |
| **Sublimation** | $\Delta_{sub} H°$ | Solid → Gas directly | $\text{I}_2(s) \to \text{I}_2(g)$, $\Delta_{sub} H° = +62.4$ kJ/mol |
| **Fusion (melting)** | $\Delta_{fus} H°$ | Solid → Liquid | $\text{H}_2\text{O}(s) \to \text{H}_2\text{O}(l)$, $\Delta_{fus} H° = +6.0$ kJ/mol |
| **Vaporization** | $\Delta_{vap} H°$ | Liquid → Gas | $\text{H}_2\text{O}(l) \to \text{H}_2\text{O}(g)$, $\Delta_{vap} H° = +40.7$ kJ/mol |
| **Ionization** | $\Delta_{ion} H$ | Removing electron from gaseous atom | $\text{Na}(g) \to \text{Na}^+(g) + e^-$, $\Delta_{ion} H = +496$ kJ/mol |
| **Electron gain** | $\Delta_{eg} H$ | Adding electron to gaseous atom | $\text{Cl}(g) + e^- \to \text{Cl}^-(g)$, $\Delta_{eg} H = -349$ kJ/mol |
| **Hydration** | $\Delta_{hyd} H$ | Ion in gas → Ion in water | $\text{Na}^+(g) \to \text{Na}^+(aq)$, $\Delta_{hyd} H = -406$ kJ/mol |
| **Solution** | $\Delta_{sol} H$ | Dissolving substance in solvent | $\text{NaCl}(s) \to \text{Na}^+(aq) + \text{Cl}^-(aq)$, $\Delta_{sol} H = +3.9$ kJ/mol |

### Key Facts About Standard Enthalpy of Formation

> **★ Key point · Crucial JEE Point**
>
> **Standard enthalpy of formation of elements in their standard state is ZERO.**
>
> $$\Delta_f H°[\text{element in standard state}] = 0$$
>
> **Examples:**
>
> - $\Delta_f H°[\text{O}_2(g)] = 0$

> - $\Delta_f H°[\text{H}_2(g)] = 0$

> - $\Delta_f H°[\text{C(graphite)}] = 0$

> - $\Delta_f H°[\text{Br}_2(l)] = 0$
>
> **But:**
>
> - $\Delta_f H°[\text{O}_3(g)] \neq 0$ (not standard form)

> - $\Delta_f H°[\text{C(diamond)}] \neq 0$ (graphite is standard form)

---

## Calculating ΔH for Reactions

### Method 1: Using Standard Enthalpies of Formation

$$\boxed{\Delta_r H° = \sum \Delta_f H°(\text{products}) - \sum \Delta_f H°(\text{reactants})}$$

**Remember:** Multiply each $\Delta_f H°$ by the stoichiometric coefficient!

### Interactive Demo: Visualize Enthalpy Changes

See energy diagrams showing exothermic and endothermic reactions.

**Example:** Calculate $\Delta_r H°$ for:

$$\text{CH}_4(g) + 2\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(l)$$

Given:

- $\Delta_f H°[\text{CH}_4(g)] = -74.8$ kJ/mol
- $\Delta_f H°[\text{CO}_2(g)] = -393.5$ kJ/mol
- $\Delta_f H°[\text{H}_2\text{O}(l)] = -285.8$ kJ/mol
- $\Delta_f H°[\text{O}_2(g)] = 0$ (element)

$$\Delta_r H° = [\Delta_f H°(\text{CO}_2) + 2\Delta_f H°(\text{H}_2\text{O})] - [\Delta_f H°(\text{CH}_4) + 2\Delta_f H°(\text{O}_2)]$$

$$= [-393.5 + 2(-285.8)] - [-74.8 + 0]$$

$$= [-393.5 - 571.6] - [-74.8]$$

$$= -965.1 + 74.8 = -890.3 \text{ kJ/mol}$$

### Method 2: Using Combustion Data

$$\Delta_r H° = \sum \Delta_c H°(\text{reactants}) - \sum \Delta_c H°(\text{products})$$

**Note:** Opposite sign convention compared to formation enthalpies!

**Why?** Because combustion data tells us heat released when substance burns. For products, they’ve already been “burned” (oxidized), so we subtract.

---

## Hess’s Law: The Most Powerful Tool

### Statement of Hess’s Law

> **★ Key point · Hess's Law**
>
> **“The total enthalpy change for a reaction is independent of the path taken.”**
>
> Or equivalently:
>
> **“If a reaction can be carried out in steps, the sum of enthalpy changes of individual steps equals the enthalpy change of the direct reaction.”**
>
> $$\Delta H_{overall} = \Delta H_1 + \Delta H_2 + \Delta H_3 + ...$$
>
> **Why?** Because enthalpy is a **state function** - depends only on initial and final states, not the path!

**Analogy:** Climbing a mountain

- Route A: Straight up (direct path)
- Route B: Zigzag path (multiple steps)
- **Elevation gain is the same** regardless of route!

### How to Apply Hess’s Law

**Rules for manipulating equations:**

1. **Reversing a reaction:** Change sign of ΔH

   $$\text{If } A \to B, \Delta H = x$$

$$\text{Then } B \to A, \Delta H = -x$$
2. **Multiplying by a factor:** Multiply ΔH by same factor

   $$\text{If } A \to B, \Delta H = x$$

$$\text{Then } 2A \to 2B, \Delta H = 2x$$
3. **Adding equations:** Add the ΔH values

   $$A \to B, \Delta H_1$$

$$B \to C, \Delta H_2$$

$$A \to C, \Delta H = \Delta H_1 + \Delta H_2$$

### Hess’s Law Strategy

> **★ Key point · Step-by-Step Strategy**
>
> **Step 1:** Write the target reaction clearly
>
> **Step 2:** Identify given reactions and their ΔH values
>
> **Step 3:** Manipulate given reactions to match target:
>
> - Reverse reactions if needed (flip ΔH sign)

> - Multiply reactions if needed (multiply ΔH)

> - Cancel common species on both sides
>
> **Step 4:** Add manipulated equations and their ΔH values
>
> **Step 5:** Verify target equation matches and calculate ΔH

---

## Thermochemistry: Bond Energies

### Bond Dissociation Energy vs Average Bond Energy

**Bond Dissociation Energy:** Energy to break a **specific** bond in a **specific** molecule

- Example: Breaking first O-H bond in H₂O requires different energy than breaking second O-H bond

**Average Bond Energy:** Average energy of that bond across **many different** molecules

- Used for approximate calculations
- Example: C-H bond energy ≈ 414 kJ/mol (average across all organic molecules)

### Calculating ΔH from Bond Energies

$$\boxed{\Delta H_{rxn} = \sum(\text{Bonds broken}) - \sum(\text{Bonds formed})}$$

or equivalently:

$$\Delta H_{rxn} = \sum(\text{Bond energies of reactants}) - \sum(\text{Bond energies of products})$$

**Remember:**

- Breaking bonds: **Endothermic** (requires energy) → **Positive**
- Forming bonds: **Exothermic** (releases energy) → **Negative**

**Mnemonic:** “**B**reak **B**ad” (Breaking Bonds = Positive)

> **⚠ Trap · Common Mistake**
>
> **Wrong:** Bond energy is energy released when bond forms.

> **Right:** Bond energy is energy **required to break** the bond.
>
> Forming bonds **releases** energy equal in magnitude but opposite in sign!

### Why Reactions Release or Absorb Heat

**Exothermic reaction (ΔH < 0):**

- Energy released when forming product bonds **>** Energy needed to break reactant bonds
- Products have **stronger** bonds than reactants
- Net energy is released

**Endothermic reaction (ΔH > 0):**

- Energy needed to break reactant bonds **>** Energy released when forming product bonds
- Reactants have **stronger** bonds than products
- Net energy must be supplied

---

## Memory Tricks & Patterns

### Mnemonic for Enthalpy

**“Help = U + PV”** → **H = U + PV**

**“Heat Produces Volume”** → ΔH = ΔU + PΔV (at constant pressure)

### Sign Convention Memory

**“EXIT is negative”** → Exothermic = Negative ΔH (energy exits)

**“ENTER is positive”** → Endothermic = Positive ΔH (energy enters)

### Neutralization Pattern

For strong acid + strong base:

$$\Delta_{neut} H° = -57.1 \text{ kJ/mol} \quad \text{(constant!)}$$

**Why constant?** The actual reaction is just:

$$\text{H}^+(aq) + \text{OH}^-(aq) \to \text{H}_2\text{O}(l)$$

For weak acid or weak base: Less heat released (some energy used in ionization)

### Hess’s Law Mnemonic

**“Target, Given, Manipulate, Add”** (TGMA)

1. **T**arget equation
2. **G**iven equations
3. **M**anipulate (reverse/multiply)
4. **A**dd them up

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting Stoichiometric Coefficients**
>
> **Wrong:**
>
> $$\Delta_r H° = \Delta_f H°(\text{H}_2\text{O}) - \Delta_f H°(\text{H}_2) - \Delta_f H°(\text{O}_2)$$
>
> **Right:** For $2\text{H}_2 + \text{O}_2 \to 2\text{H}_2\text{O}$
>
> $$\Delta_r H° = 2\Delta_f H°(\text{H}_2\text{O}) - [2\Delta_f H°(\text{H}_2) + \Delta_f H°(\text{O}_2)]$$
>
> Always multiply by the coefficient in balanced equation!

> **⚠ Trap #2: ΔH vs ΔU Conversion Error**
>
> **Common mistake:** Using Δn (total change in moles) instead of Δn_g
>
> **Right formula:**
>
> $$\Delta H = \Delta U + \Delta n_g RT$$
>
> where $\Delta n_g$ = change in **gaseous** moles only!
>
> **Example:** $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$
>
> - Δn_g = 1 - 0 = +1 (only CO₂ is gas)

> - NOT Δn = 2 - 1 = +1

> **⚠ Trap #3: Standard State Assumptions**
>
> **Wrong:** $\Delta_f H°[\text{Br}_2(g)] = 0$

> **Right:** $\Delta_f H°[\text{Br}_2(l)] = 0$ (liquid is standard state at 298 K)
>
> **Wrong:** $\Delta_f H°[\text{C(diamond)}] = 0$

> **Right:** $\Delta_f H°[\text{C(graphite)}] = 0$ (graphite is more stable)
>
> Always check standard states carefully!

> **⚠ Trap #4: Bond Energy Sign Confusion**
>
> **Wrong thinking:** “C-H bond energy = -414 kJ/mol” (bond formation)
>
> **Right:** Bond energy is **always positive** (energy to break bond)
>
> - Breaking C-H: +414 kJ/mol (endothermic)

> - Forming C-H: -414 kJ/mol (exothermic)
>
> Use the formula correctly:
>
> $$\Delta H = \text{Bonds broken (positive)} - \text{Bonds formed (positive values, but subtract)}$$

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Basic ΔH Calculation**
>
> **Question:** Calculate the standard enthalpy of formation of CO₂ from:
>
> $$\text{C(graphite)} + \text{O}_2(g) \to \text{CO}_2(g), \quad \Delta H = -393.5 \text{ kJ/mol}$$
>
> **Solution:**
>
> This reaction itself represents the formation of CO₂ from elements in standard states.
>
> By definition:
>
> $$\Delta_f H°[\text{CO}_2(g)] = -393.5 \text{ kJ/mol}$$
>
> **Answer:** -393.5 kJ/mol
>
> **Key point:** Formation enthalpy is for making 1 mole from elements.

> **↗ Connection · Problem 1.2: ΔH to ΔU Conversion**
>
> **Question:** For the reaction:
>
> $$\text{N}_2(g) + 3\text{H}_2(g) \to 2\text{NH}_3(g)$$
>
> Given $\Delta H = -92.4$ kJ at 298 K, calculate ΔU.
>
> **Solution:**
>
> $$\Delta H = \Delta U + \Delta n_g RT$$
>
> Calculate Δn_g:
>
> - Gaseous products: 2 moles NH₃

> - Gaseous reactants: 1 + 3 = 4 moles

> - $\Delta n_g = 2 - 4 = -2$
>
> $$\Delta U = \Delta H - \Delta n_g RT$$

$$\Delta U = -92.4 - (-2)(8.314 \times 10^{-3})(298)$$

$$\Delta U = -92.4 + 4.96$$

$$\Delta U = -87.44 \text{ kJ}$$
>
> **Answer:** ΔU = -87.44 kJ
>
> **Note:** ΔH is more negative than ΔU because volume decreases (Δn_g < 0).

> **↗ Connection · Problem 1.3: Using Formation Enthalpies**
>
> **Question:** Calculate ΔH for:
>
> $$\text{Fe}_2\text{O}_3(s) + 3\text{CO}(g) \to 2\text{Fe}(s) + 3\text{CO}_2(g)$$
>
> Given:
>
> - $\Delta_f H°[\text{Fe}_2\text{O}_3] = -824$ kJ/mol

> - $\Delta_f H°[\text{CO}] = -110.5$ kJ/mol

> - $\Delta_f H°[\text{CO}_2] = -393.5$ kJ/mol

> - $\Delta_f H°[\text{Fe}] = 0$ (element)
>
> **Solution:**
>
> $$\Delta_r H° = \sum \Delta_f H°(\text{products}) - \sum \Delta_f H°(\text{reactants})$$
>
> Products: $2\text{Fe} + 3\text{CO}_2$
>
> $$= 2(0) + 3(-393.5) = -1180.5 \text{ kJ}$$
>
> Reactants: $\text{Fe}_2\text{O}_3 + 3\text{CO}$
>
> $$= -824 + 3(-110.5) = -824 - 331.5 = -1155.5 \text{ kJ}$$

$$\Delta_r H° = -1180.5 - (-1155.5) = -25 \text{ kJ}$$
>
> **Answer:** -25 kJ (exothermic)

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Hess's Law Application**
>
> **Question:** Calculate the enthalpy of formation of ethane (C₂H₆) from:
>
> (1) $\text{C}_2\text{H}_6(g) + \frac{7}{2}\text{O}_2(g) \to 2\text{CO}_2(g) + 3\text{H}_2\text{O}(l)$, $\Delta H_1 = -1560$ kJ

> (2) $\text{C(graphite)} + \text{O}_2(g) \to \text{CO}_2(g)$, $\Delta H_2 = -393.5$ kJ

> (3) $\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{H}_2\text{O}(l)$, $\Delta H_3 = -285.8$ kJ
>
> **Solution:**
>
> **Target equation:**
>
> $$2\text{C(graphite)} + 3\text{H}_2(g) \to \text{C}_2\text{H}_6(g)$$
>
> **Manipulate given equations:**
>
> Reverse equation (1):
>
> $$2\text{CO}_2(g) + 3\text{H}_2\text{O}(l) \to \text{C}_2\text{H}_6(g) + \frac{7}{2}\text{O}_2(g), \quad \Delta H = +1560 \text{ kJ}$$
>
> Multiply equation (2) by 2:
>
> $$2\text{C(graphite)} + 2\text{O}_2(g) \to 2\text{CO}_2(g), \quad \Delta H = 2(-393.5) = -787 \text{ kJ}$$
>
> Multiply equation (3) by 3:
>
> $$3\text{H}_2(g) + \frac{3}{2}\text{O}_2(g) \to 3\text{H}_2\text{O}(l), \quad \Delta H = 3(-285.8) = -857.4 \text{ kJ}$$
>
> **Add all three:**
>
> $$2\text{C} + 2\text{O}_2 + 3\text{H}_2 + \frac{3}{2}\text{O}_2 + 2\text{CO}_2 + 3\text{H}_2\text{O} \to 2\text{CO}_2 + 3\text{H}_2\text{O} + \text{C}_2\text{H}_6 + \frac{7}{2}\text{O}_2$$
>
> Cancel common terms:
>
> $$2\text{C(graphite)} + 3\text{H}_2(g) \to \text{C}_2\text{H}_6(g)$$

$$\Delta_f H°[\text{C}_2\text{H}_6] = +1560 - 787 - 857.4 = -84.4 \text{ kJ/mol}$$
>
> **Answer:** -84.4 kJ/mol

> **↗ Connection · Problem 2.2: Bond Energy Calculation**
>
> **Question:** Calculate the C=C bond energy in ethene (C₂H₄) given:
>
> - $\Delta_f H°[\text{C}_2\text{H}_4(g)] = +52$ kJ/mol

> - $\Delta_f H°[\text{C(g)}] = +717$ kJ/mol (atomization)

> - $\Delta_f H°[\text{H(g)}] = +218$ kJ/mol (atomization)

> - C-H bond energy = 414 kJ/mol
>
> **Solution:**
>
> Formation of C₂H₄ from gaseous atoms:
>
> $$2\text{C(g)} + 4\text{H(g)} \to \text{C}_2\text{H}_4(g)$$
>
> Enthalpy change = Bond energies formed:
>
> $$\Delta H_{\text{bonds}} = -(4 \times \text{BE}_{\text{C-H}} + 1 \times \text{BE}_{\text{C=C}})$$
>
> Formation from elements:
>
> $$2\text{C(graphite)} + 2\text{H}_2(g) \to \text{C}_2\text{H}_4(g), \quad \Delta H = +52 \text{ kJ}$$
>
> Step 1: Atomize elements
>
> $$2\text{C(graphite)} \to 2\text{C(g)}, \quad \Delta H = 2(717) = +1434 \text{ kJ}$$

$$2\text{H}_2(g) \to 4\text{H(g)}, \quad \Delta H = 4(218) = +872 \text{ kJ}$$
>
> Step 2: Form molecule from atoms
>
> $$2\text{C(g)} + 4\text{H(g)} \to \text{C}_2\text{H}_4(g), \quad \Delta H = ?$$
>
> By Hess’s Law:
>
> $$+52 = +1434 + 872 + \Delta H_{\text{bonds}}$$

$$\Delta H_{\text{bonds}} = 52 - 2306 = -2254 \text{ kJ}$$
>
> This represents forming 4 C-H bonds and 1 C=C bond:
>
> $$-2254 = -(4 \times 414 + \text{BE}_{\text{C=C}})$$

$$-2254 = -1656 - \text{BE}_{\text{C=C}}$$

$$\text{BE}_{\text{C=C}} = 2254 - 1656 = 598 \text{ kJ/mol}$$
>
> **Answer:** C=C bond energy = 598 kJ/mol

> **↗ Connection · Problem 2.3: Neutralization Enthalpy**
>
> **Question:** Calculate the heat evolved when 200 mL of 0.5 M HCl is mixed with 150 mL of 0.8 M NaOH.
>
> Given: $\Delta_{neut} H° = -57.1$ kJ/mol
>
> **Solution:**
>
> Moles of HCl = $0.2 \times 0.5 = 0.1$ mol

> Moles of NaOH = $0.15 \times 0.8 = 0.12$ mol
>
> **Limiting reagent:** HCl (0.1 mol)
>
> Neutralization reaction:
>
> $$\text{HCl} + \text{NaOH} \to \text{NaCl} + \text{H}_2\text{O}$$
>
> or in ionic form:
>
> $$\text{H}^+ + \text{OH}^- \to \text{H}_2\text{O}$$
>
> Heat evolved = Moles of limiting reagent × $\Delta_{neut} H°$
>
> $$= 0.1 \times 57.1 = 5.71 \text{ kJ}$$
>
> **Answer:** 5.71 kJ of heat is evolved.
>
> **Note:** We take magnitude since question asks for heat evolved (not ΔH).

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Complex Hess's Law**
>
> **Question:** Calculate the heat of formation of methanol (CH₃OH) from:
>
> (1) $\text{CH}_3\text{OH}(l) + \frac{3}{2}\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(l)$, $\Delta H_1 = -726$ kJ

> (2) $\text{C(graphite)} + \text{O}_2(g) \to \text{CO}_2(g)$, $\Delta H_2 = -393.5$ kJ

> (3) $\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{H}_2\text{O}(l)$, $\Delta H_3 = -285.8$ kJ
>
> Also, if the standard enthalpy of combustion of methanol is -726 kJ/mol, determine whether the formation is exothermic or endothermic.
>
> **Solution:**
>
> **Target:**
>
> $$\text{C(graphite)} + 2\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{CH}_3\text{OH}(l)$$
>
> **Manipulation:**
>
> Reverse equation (1):
>
> $$\text{CO}_2(g) + 2\text{H}_2\text{O}(l) \to \text{CH}_3\text{OH}(l) + \frac{3}{2}\text{O}_2(g), \quad \Delta H = +726 \text{ kJ}$$
>
> Use equation (2) as is:
>
> $$\text{C(graphite)} + \text{O}_2(g) \to \text{CO}_2(g), \quad \Delta H = -393.5 \text{ kJ}$$
>
> Multiply equation (3) by 2:
>
> $$2\text{H}_2(g) + \text{O}_2(g) \to 2\text{H}_2\text{O}(l), \quad \Delta H = 2(-285.8) = -571.6 \text{ kJ}$$
>
> **Add all:**
>
> $$\text{C} + \text{O}_2 + 2\text{H}_2 + \text{O}_2 + \text{CO}_2 + 2\text{H}_2\text{O} \to \text{CO}_2 + 2\text{H}_2\text{O} + \text{CH}_3\text{OH} + \frac{3}{2}\text{O}_2$$
>
> **Simplify (cancel CO₂ and 2H₂O):**
>
> $$\text{C(graphite)} + 2\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{CH}_3\text{OH}(l)$$

$$\Delta_f H° = +726 - 393.5 - 571.6 = -239.1 \text{ kJ/mol}$$
>
> **Answer:** $\Delta_f H°[\text{CH}_3\text{OH}] = -239.1$ kJ/mol (exothermic formation)

> **↗ Connection · Problem 3.2: Born-Haber Cycle Concept**
>
> **Question:** Calculate the lattice enthalpy of NaCl using:
>
> - $\Delta_f H°[\text{NaCl}(s)] = -411$ kJ/mol

> - $\Delta_{sub} H°[\text{Na}(s)] = +108$ kJ/mol (sublimation)

> - $\Delta_{diss} H°[\text{Cl}_2] = +243$ kJ/mol (bond dissociation)

> - $\Delta_{ion} H[\text{Na}(g)] = +496$ kJ/mol (ionization)

> - $\Delta_{eg} H[\text{Cl}(g)] = -349$ kJ/mol (electron gain)
>
> **Solution:**
>
> **Target formation reaction:**
>
> $$\text{Na}(s) + \frac{1}{2}\text{Cl}_2(g) \to \text{NaCl}(s), \quad \Delta_f H° = -411 \text{ kJ}$$
>
> **Born-Haber cycle steps:**
>
> (1) Sublimation: $\text{Na}(s) \to \text{Na}(g)$, $\Delta H_1 = +108$ kJ
>
> (2) Dissociation: $\frac{1}{2}\text{Cl}_2(g) \to \text{Cl}(g)$, $\Delta H_2 = +\frac{243}{2} = +121.5$ kJ
>
> (3) Ionization: $\text{Na}(g) \to \text{Na}^+(g) + e^-$, $\Delta H_3 = +496$ kJ
>
> (4) Electron gain: $\text{Cl}(g) + e^- \to \text{Cl}^-(g)$, $\Delta H_4 = -349$ kJ
>
> (5) Lattice formation: $\text{Na}^+(g) + \text{Cl}^-(g) \to \text{NaCl}(s)$, $\Delta H_5 = U$ (lattice enthalpy)
>
> **By Hess’s Law:**
>
> $$\Delta_f H° = \Delta H_1 + \Delta H_2 + \Delta H_3 + \Delta H_4 + U$$

$$-411 = 108 + 121.5 + 496 - 349 + U$$

$$-411 = 376.5 + U$$

$$U = -411 - 376.5 = -787.5 \text{ kJ/mol}$$
>
> **Answer:** Lattice enthalpy of NaCl = -787.5 kJ/mol
>
> **Interpretation:** Large negative value indicates strong ionic bonding in the crystal.

> **↗ Connection · Problem 3.3: Resonance Energy**
>
> **Question:** Calculate the resonance energy of benzene given:
>
> - $\Delta_f H°[\text{C}_6\text{H}_6(g)] = +83$ kJ/mol

> - $\Delta_f H°[\text{C(g)}] = +717$ kJ/mol

> - $\Delta_f H°[\text{H(g)}] = +218$ kJ/mol

> - C-H bond energy = 414 kJ/mol

> - C-C bond energy = 347 kJ/mol

> - C=C bond energy = 618 kJ/mol
>
> Assume hypothetical benzene structure has 3 C=C and 3 C-C bonds (Kekulé structure).
>
> **Solution:**
>
> **Step 1: Energy to atomize elements**
>
> $$6\text{C(graphite)} \to 6\text{C(g)}, \quad \Delta H = 6(717) = +4302 \text{ kJ}$$

$$3\text{H}_2(g) \to 6\text{H(g)}, \quad \Delta H = 6(218) = +1308 \text{ kJ}$$
>
> **Step 2: Formation from atoms (actual benzene)**
>
> $$6\text{C(g)} + 6\text{H(g)} \to \text{C}_6\text{H}_6(g), \quad \Delta H = ?$$
>
> By Hess’s Law (formation from elements):
>
> $$\Delta_f H° = \Delta H_{\text{atomization}} + \Delta H_{\text{bond formation}}$$

$$+83 = 4302 + 1308 + \Delta H_{\text{bonds}}$$

$$\Delta H_{\text{bonds}} = 83 - 5610 = -5527 \text{ kJ}$$
>
> This represents forming 6 C-H bonds and 6 C-C bonds (in resonance hybrid).
>
> **Step 3: Energy if Kekulé structure (3 C=C + 3 C-C + 6 C-H)**
>
> $$\Delta H_{\text{Kekulé}} = -(3 \times 618 + 3 \times 347 + 6 \times 414)$$

$$= -(1854 + 1041 + 2484) = -5379 \text{ kJ}$$
>
> **Step 4: Resonance energy**
>
> $$\text{Resonance energy} = \Delta H_{\text{actual}} - \Delta H_{\text{Kekulé}}$$

$$= -5527 - (-5379) = -148 \text{ kJ/mol}$$
>
> **Answer:** Resonance energy of benzene = -148 kJ/mol
>
> **Interpretation:** Actual benzene is 148 kJ/mol more stable than hypothetical Kekulé structure due to delocalization (resonance).

---

## Quick Revision Box

### Essential Formulas

| Concept | Formula | Use |
| --- | --- | --- |
| Enthalpy | $H = U + PV$ | Definition |
| Enthalpy change | $\Delta H = \Delta U + P\Delta V$ | Constant pressure |
| Gas reactions | $\Delta H = \Delta U + \Delta n_g RT$ | Ideal gas |
| Heat at const P | $\Delta H = q_P$ | Open container |
| Formation method | $\Delta_r H° = \sum \Delta_f H°(\text{prod}) - \sum \Delta_f H°(\text{react})$ | Using formation data |
| Hess’s Law | $\Delta H_{\text{total}} = \sum \Delta H_{\text{steps}}$ | Indirect calculation |
| Bond energies | $\Delta H = \sum(\text{broken}) - \sum(\text{formed})$ | From bond data |
| Gibbs equation | $\Delta G° = -RT\ln K$ | (covered in [Gibbs Energy](../gibbs-energy/index.md)) |

### Standard Enthalpies (Common Values)

| Substance | $\Delta_f H°$ (kJ/mol) |
| --- | --- |
| H₂O(l) | -285.8 |
| H₂O(g) | -241.8 |
| CO₂(g) | -393.5 |
| CO(g) | -110.5 |
| CH₄(g) | -74.8 |
| NH₃(g) | -46.1 |
| HCl(g) | -92.3 |

### Sign Conventions Quick Reference

| Type | ΔH Sign | Example |
| --- | --- | --- |
| Exothermic | - (negative) | Combustion, freezing |
| Endothermic | + (positive) | Melting, photosynthesis |
| Bond breaking | + (positive) | Always requires energy |
| Bond forming | - (negative) | Always releases energy |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> **1. Enthalpy is Heat at Constant Pressure**
>
> $$H = U + PV, \quad \Delta H = q_P$$
>
> Most reactions occur at constant atmospheric pressure, making ΔH more practical than ΔU.
>
> **2. Formation Enthalpies are Building Blocks**
>
> $$\Delta_r H° = \sum \Delta_f H°(\text{products}) - \sum \Delta_f H°(\text{reactants})$$
>
> Always multiply by stoichiometric coefficients! Elements in standard state have $\Delta_f H° = 0$.
>
> **3. Hess’s Law: Path Independence**
>
> Total enthalpy change is independent of path - you can calculate ΔH for any reaction by combining other reactions algebraically.
>
> **4. Bond Energies Explain Exothermic vs Endothermic**
>
> $$\Delta H = \text{Energy to break bonds} - \text{Energy from forming bonds}$$
>
> - If more energy released in forming product bonds → Exothermic (ΔH < 0)

> - If more energy needed to break reactant bonds → Endothermic (ΔH > 0)
>
> **5. Sign Conventions Matter**
>
> - Exothermic: ΔH < 0 (heat exits)

> - Endothermic: ΔH > 0 (heat enters)

> - Bond breaking: always positive

> - Bond forming: always negative (releases energy)
>
> **“Enthalpy is the chemist’s favorite because most reactions happen at constant pressure!”**
>
> **JEE Weightage:** 3-4 questions per paper. High-yield topic! Master Hess’s Law calculations.
>
> **Time-saving tip:** For MCQs on Hess’s Law, check if intermediate species cancel - if not, you made an error!

---

## Cross-Links to Related Concepts

**Prerequisites:**

- [First Law of Thermodynamics](../first-law/index.md) - Internal energy, work, heat
- [Basic Concepts](https://jeenotes.in/chemistry/basic-concepts/) - Mole concept, stoichiometry

**Builds on:**

- [Chemical Bonding](https://jeenotes.in/chemistry/chemical-bonding/) - Bond energies, molecular stability

**Leads to:**

- [Entropy](../entropy/index.md) - Why some endothermic reactions are spontaneous
- [Gibbs Energy](../gibbs-energy/index.md) - Combining enthalpy and entropy for spontaneity
- [Equilibrium](https://jeenotes.in/chemistry/equilibrium/) - Relation between ΔH° and equilibrium constant

**Applications:**

- [Chemical Kinetics](https://jeenotes.in/chemistry/chemical-kinetics/) - Activation energy and rate
- [Electrochemistry](https://jeenotes.in/chemistry/redox-electrochemistry/) - Cell potential and enthalpy

**Related in Physics:**

- [Calorimetry](../../../physics/thermodynamics/index.md) - Measuring heat changes experimentally

---

## What’s Next?

> **◐ In simple terms · Coming Up Next**
>
> **[Entropy and the Second Law](../entropy/index.md)** - Learn why ice melts spontaneously even though it’s endothermic, understand disorder and randomness, and discover why you can’t unscramble an egg!
>
> **Teaser:** We’ve learned WHAT happens (ΔH), now we’ll learn WHY it happens (ΔS) and WHEN it happens spontaneously (ΔG)!

From TestGuru · our mock-test platform

## You've read Enthalpy and Heat of Reaction.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fthermodynamics%2Fenthalpy%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/thermodynamics/enthalpy/",this.page.identifier="/chemistry/thermodynamics/enthalpy/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="enthalpyDiagram" id="anim-enthalpyDiagram-1795396420596512087"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-enthalpyDiagram-1795396420596512087")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/thermodynamics/enthalpy/](https://jeenotes.in/chemistry/thermodynamics/enthalpy/) · raw HTML: `offline/chemistry/thermodynamics/enthalpy/index.html`_
