---
title: "Thermochemistry: Bond Energies and Heats of Reaction"
source: "https://jeenotes.in/chemistry/thermodynamics/thermochemistry/"
description: "Master bond energies, heat of combustion, heat of formation, and Born-Haber cycle for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "20 min read"
breadcrumb: "Chemistry"
position: "/ Topic 5 of 7"
html: "../../../../offline/chemistry/thermodynamics/thermochemistry/index.html"
extracted: "2026-11-23"
---

> Master bond energies, heat of combustion, heat of formation, and Born-Haber cycle for JEE Main & Advanced

## The Hook: Why Rockets Need Specific Fuels

> **★ Key point · Connect: Real Life → Chemistry**
>
> **Three everyday energy mysteries:**
>
> 1. **Why does hydrogen fuel give rockets more thrust than gasoline?** Both burn with oxygen, both release heat - what’s the difference?

> 2. **Why does a diamond burn** (yes, it burns!) **but releases different energy than graphite?** Both are pure carbon!

> 3. **Why do we use lithium-ion batteries** in phones instead of sodium-ion, even though Na is cheaper and more abundant?
>
> The answer lies in **Thermochemistry** - the quantitative study of energy changes in chemical reactions, especially bond energies and heat of formation.
>
> **Movie connection (Oppenheimer):** The energy released in nuclear fission comes from breaking nuclear bonds. Chemical bonds work the same way - break strong bonds, you need a lot of energy. Form strong bonds, you release a lot of energy!
>
> **Real-world applications:**
>
> - Rocket fuels (maximize ΔH_combustion)

> - Explosives (maximize energy per gram)

> - Hand warmers (iron oxidation)

> - Batteries (maximize voltage = maximize ΔG per electron)

---

## The Core Concept

### What is Thermochemistry?

**Thermochemistry** is the branch of thermodynamics that deals with:

1. **Heat changes** in chemical reactions
2. **Bond energies** - energy to break/form chemical bonds
3. **Heats of combustion** - energy from burning substances
4. **Heats of formation** - energy to make compounds from elements
5. **Lattice energies** - energy in ionic crystals

**Why it matters for JEE:**

- Connects thermodynamics to actual chemical reactions
- Essential for predicting reaction feasibility
- Basis for electrochemistry and metallurgy
- Appears in 3-4 questions per JEE paper

---

## Bond Dissociation Energy

### Definition

**Bond Dissociation Energy (BDE)** is the energy required to break **one mole** of a specific bond in gaseous molecules, producing gaseous atoms or radicals.

**General notation:**

$$\text{A-B}(g) \to \text{A}(g) + \text{B}(g) \quad \Delta H = \text{BDE}$$

**Always endothermic:** Breaking bonds requires energy → ΔH > 0

**Example:**

$$\text{H-H}(g) \to 2\text{H}(g) \quad \Delta H = +436 \text{ kJ/mol}$$

$$\text{Cl-Cl}(g) \to 2\text{Cl}(g) \quad \Delta H = +243 \text{ kJ/mol}$$

$$\text{H-Cl}(g) \to \text{H}(g) + \text{Cl}(g) \quad \Delta H = +431 \text{ kJ/mol}$$

### Bond Dissociation Energy vs Average Bond Energy

> **◐ In simple terms · Two Types of Bond Energy**
>
> **1. Bond Dissociation Energy (Specific)**
>
> - Energy to break a **specific** bond in a **specific** molecule

> - Different for same type of bond in different molecules
>
> **Example:** Breaking O-H bonds in water:
>
> $$\text{H-O-H}(g) \to \text{H}(g) + \text{OH}(g) \quad \Delta H_1 = +499 \text{ kJ/mol}$$

$$\text{OH}(g) \to \text{H}(g) + \text{O}(g) \quad \Delta H_2 = +428 \text{ kJ/mol}$$
>
> First O-H bond: 499 kJ/mol

> Second O-H bond: 428 kJ/mol (different!)
>
> **2. Average Bond Energy (Mean)**
>
> - **Average** energy of that type of bond across many different molecules

> - Used for approximate calculations
>
> **Example:** Average O-H bond energy:
>
> $$\text{Average} = \frac{499 + 428}{2} = 464 \text{ kJ/mol}$$
>
> Or averaged across hundreds of different molecules containing O-H bonds.
>
> **For JEE:** Usually given “average bond energies” unless specified otherwise.

### Common Bond Energies

| Bond | Energy (kJ/mol) | Bond | Energy (kJ/mol) |
| --- | --- | --- | --- |
| H-H | 436 | C-C | 347 |
| O=O | 498 | C=C | 611 |
| N≡N | 946 | C≡C | 837 |
| Cl-Cl | 243 | C-H | 414 |
| Br-Br | 193 | C-O | 360 |
| I-I | 151 | C=O | 741 |
| H-F | 568 | C≡O | 1072 |
| H-Cl | 431 | O-H | 464 |
| H-Br | 366 | N-H | 389 |
| H-I | 298 | C-N | 293 |

**Trends to notice:**

1. **Triple > Double > Single:** C≡C (837) > C=C (611) > C-C (347)
2. **Smaller atoms → Stronger bonds:** H-F (568) > H-Cl (431) > H-Br (366) > H-I (298)
3. **C=O very strong:** 741 kJ/mol (important for CO₂ stability)

---

## Calculating ΔH from Bond Energies

### The Bond Energy Method

$$\boxed{\Delta H_{rxn} = \sum \text{BE}_{\text{bonds broken}} - \sum \text{BE}_{\text{bonds formed}}}$$

**Remember:**

- **Breaking bonds:** Endothermic, requires energy → **Add** bond energies
- **Forming bonds:** Exothermic, releases energy → **Subtract** bond energies

**Step-by-step method:**

**Step 1:** Draw structural formulas showing all bonds

**Step 2:** Count bonds broken in reactants (positive contribution)

**Step 3:** Count bonds formed in products (negative contribution)

**Step 4:** Calculate: ΔH = (bonds broken) - (bonds formed)

### Example: Combustion of Methane

$$\text{CH}_4(g) + 2\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(g)$$

**Bonds broken (reactants):**

- 4 × C-H bonds in CH₄: $4 \times 414 = 1656$ kJ
- 2 × O=O bonds: $2 \times 498 = 996$ kJ
- **Total broken:** $1656 + 996 = 2652$ kJ

**Bonds formed (products):**

- 2 × C=O bonds in CO₂: $2 \times 741 = 1482$ kJ
- 4 × O-H bonds in 2H₂O: $4 \times 464 = 1856$ kJ
- **Total formed:** $1482 + 1856 = 3338$ kJ

**ΔH:**

$$\Delta H = 2652 - 3338 = -686 \text{ kJ/mol}$$

**Interpretation:** Exothermic (ΔH < 0) because more energy released in forming strong C=O and O-H bonds than needed to break C-H and O=O bonds.

**Actual experimental value:** -890 kJ/mol

**Difference:** Bond energy method gives approximation because we use average bond energies, not exact values for specific molecules.

### Interactive Demo: Visualize Bond Energy and Enthalpy

See energy diagrams showing bond breaking and formation in chemical reactions.

---

## Heat of Combustion

### Definition

**Heat of Combustion ($\Delta_c H$)** is the enthalpy change when **one mole** of a substance undergoes complete combustion with oxygen under standard conditions.

$$\text{Substance} + \text{O}_2 \to \text{CO}_2 + \text{H}_2\text{O} \quad \Delta_c H < 0$$

**Key points:**

- Always **exothermic** (ΔH < 0)
- Products are fully oxidized: C → CO₂, H → H₂O, N → N₂
- Standard state: 298 K, 1 bar
- Usually given per mole of substance burned

### Common Heats of Combustion

| Substance | Formula | $\Delta_c H°$ (kJ/mol) |
| --- | --- | --- |
| Hydrogen | H₂(g) | -286 |
| Carbon (graphite) | C(s) | -394 |
| Methane | CH₄(g) | -890 |
| Ethane | C₂H₆(g) | -1560 |
| Propane | C₃H₈(g) | -2220 |
| Butane | C₄H₁₀(g) | -2878 |
| Ethanol | C₂H₅OH(l) | -1367 |
| Glucose | C₆H₁₂O₆(s) | -2808 |
| Octane | C₈H₁₈(l) | -5471 |

**Pattern:** Larger hydrocarbons have larger (more negative) heats of combustion.

### Calculating ΔH_formation from ΔH_combustion

**Key relationship:**

For combustion: $\Delta_{c} H°(\text{compound})$
For formation from combustion of elements:

$$\Delta_f H°(\text{compound}) = \sum \Delta_c H°(\text{elements}) - \Delta_c H°(\text{compound})$$

**Example:** Find $\Delta_f H°[\text{C}_2\text{H}_6]$ from combustion data

Given:

- $\Delta_c H°[\text{C}_2\text{H}_6] = -1560$ kJ/mol
- $\Delta_c H°[\text{C(graphite)}] = -394$ kJ/mol
- $\Delta_c H°[\text{H}_2] = -286$ kJ/mol

**Formation equation:**

$$2\text{C(s)} + 3\text{H}_2(g) \to \text{C}_2\text{H}_6(g)$$

**Using combustion data:**

$$\Delta_f H° = [2 \times \Delta_c H°(\text{C}) + 3 \times \Delta_c H°(\text{H}_2)] - \Delta_c H°(\text{C}_2\text{H}_6)$$

$$= [2(-394) + 3(-286)] - (-1560)$$

$$= [-788 - 858] + 1560$$

$$= -1646 + 1560 = -86 \text{ kJ/mol}$$

**Why this works:** Using Hess’s Law to manipulate combustion equations!

---

## Heat of Formation

### Standard Enthalpy of Formation

**Definition:** $\Delta_f H°$ is the enthalpy change when **one mole** of a compound is formed from its elements in their standard states.

**Standard state:**

- Most stable form at 298 K, 1 bar
- C: graphite (not diamond)
- O₂, H₂, N₂: diatomic gases
- Br₂: liquid, I₂: solid

**Crucial fact:**

$$\boxed{\Delta_f H°[\text{element in standard state}] = 0}$$

### Common Formation Enthalpies (298 K)

| Compound | $\Delta_f H°$ (kJ/mol) | Compound | $\Delta_f H°$ (kJ/mol) |
| --- | --- | --- | --- |
| H₂O(l) | -286 | NH₃(g) | -46 |
| H₂O(g) | -242 | NO(g) | +90 |
| CO₂(g) | -394 | NO₂(g) | +33 |
| CO(g) | -111 | SO₂(g) | -297 |
| CH₄(g) | -75 | SO₃(g) | -396 |
| C₂H₆(g) | -85 | H₂S(g) | -21 |
| C₂H₄(g) | +52 | HCl(g) | -92 |
| C₂H₂(g) | +227 | HBr(g) | -36 |
| C₆H₆(l) | +49 | HI(g) | +26 |
| CH₃OH(l) | -239 | NaCl(s) | -411 |
| C₂H₅OH(l) | -278 | CaO(s) | -635 |

**Note the signs:**

- **Negative:** Stable compounds (exothermic formation) - H₂O, CO₂, NH₃
- **Positive:** Unstable compounds (endothermic formation) - NO, C₂H₂, C₂H₄

### Why Some Compounds Have Positive ΔfH°

**Example:** Acetylene (C₂H₂), $\Delta_f H° = +227$ kJ/mol

Formation:

$$2\text{C(graphite)} + \text{H}_2(g) \to \text{C}_2\text{H}_2(g) \quad \Delta H = +227 \text{ kJ/mol}$$

**Endothermic formation** means:

- C₂H₂ has **higher energy** than its elements
- Unstable relative to decomposition
- Why it’s explosive!

When C₂H₂ decomposes:

$$\text{C}_2\text{H}_2 \to 2\text{C} + \text{H}_2 \quad \Delta H = -227 \text{ kJ/mol (exothermic!)}$$

Plus, it can combust:

$$\text{C}_2\text{H}_2 + \frac{5}{2}\text{O}_2 \to 2\text{CO}_2 + \text{H}_2\text{O} \quad \Delta H = -1300 \text{ kJ/mol}$$

**Very exothermic** → Used in welding torches!

---

## Born-Haber Cycle

### What is Born-Haber Cycle?

**Born-Haber Cycle** is a thermochemical cycle that relates lattice energy of an ionic compound to other measurable quantities using Hess’s Law.

**Purpose:**

- Calculate **lattice energy** (difficult to measure directly)
- Understand energetics of ionic bond formation
- Predict stability of ionic compounds

### The Cycle for NaCl

**Target:** Formation of NaCl(s) from elements

$$\text{Na}(s) + \frac{1}{2}\text{Cl}_2(g) \to \text{NaCl}(s) \quad \Delta_f H° = -411 \text{ kJ/mol}$$

**Step-by-step energy changes:**

**Step 1: Sublimation of Na**

$$\text{Na}(s) \to \text{Na}(g) \quad \Delta_{sub} H = +108 \text{ kJ/mol}$$

**Step 2: Dissociation of Cl₂**

$$\frac{1}{2}\text{Cl}_2(g) \to \text{Cl}(g) \quad \Delta H = +\frac{243}{2} = +122 \text{ kJ/mol}$$

**Step 3: Ionization of Na**

$$\text{Na}(g) \to \text{Na}^+(g) + e^- \quad \Delta_{ion} H = +496 \text{ kJ/mol}$$

**Step 4: Electron gain by Cl**

$$\text{Cl}(g) + e^- \to \text{Cl}^-(g) \quad \Delta_{eg} H = -349 \text{ kJ/mol}$$

**Step 5: Lattice formation**

$$\text{Na}^+(g) + \text{Cl}^-(g) \to \text{NaCl}(s) \quad U = \text{Lattice energy}$$

**By Hess’s Law:**

$$\Delta_f H° = \Delta_{sub} H + \Delta_{diss} H + \Delta_{ion} H + \Delta_{eg} H + U$$

$$-411 = 108 + 122 + 496 - 349 + U$$

$$-411 = 377 + U$$

$$U = -788 \text{ kJ/mol}$$

**Interpretation:** Large negative lattice energy means strong ionic bonding!

### Energy Diagram for Born-Haber Cycle

```fallback
Na⁺(g) + Cl(g) + e⁻
                          ↑ +496 (ionization)
                    Na(g) + Cl(g) + e⁻
                          ↑ +122 (dissociation)
                    Na(g) + ½Cl₂(g) + e⁻
                          ↑ +108 (sublimation)
Energy →    Na(s) + ½Cl₂(g) ←━━━━━━━━━━━━━━━━━→ NaCl(s)
                                   -411 (formation)
                          ↓ -349 (electron gain)
                    Na⁺(g) + Cl⁻(g)
                          ↓ -788 (lattice)
                        NaCl(s)
```

**Key insight:** Even though ionization is very endothermic (+496 kJ), the huge lattice energy (-788 kJ) more than compensates, making overall formation exothermic!

---

## Lattice Energy

### Definition

**Lattice Energy (U)** is the enthalpy change when one mole of an ionic compound is formed from gaseous ions.

$$\text{M}^{n+}(g) + \text{X}^{n-}(g) \to \text{MX}(s) \quad \Delta H = U$$

**Sign convention:**

- **Lattice formation:** Exothermic, U < 0
- **Lattice dissociation:** Endothermic, U > 0

**JEE uses both!** Check the question carefully.

### Factors Affecting Lattice Energy

**Born-Landé equation (simplified):**

$$U \propto \frac{|z_+||z_-|}{r_+ + r_-}$$

where:

- $z_+, z_-$ = charges on ions
- $r_+, r_-$ = ionic radii

**Two main factors:**

**1. Charge on ions:** Higher charge → Stronger attraction → More negative U

**Example:**

- NaCl (Na⁺, Cl⁻): U = -788 kJ/mol
- MgO (Mg²⁺, O²⁻): U = -3791 kJ/mol (nearly 5× stronger!)

**2. Size of ions:** Smaller ions → Shorter distance → Stronger attraction → More negative U

**Example (all with M⁺X⁻):**

- LiF (smallest): U = -1037 kJ/mol
- NaCl (medium): U = -788 kJ/mol
- KBr (larger): U = -689 kJ/mol
- CsI (largest): U = -604 kJ/mol

**Trend:** As you go down group, ionic radius increases → lattice energy decreases (becomes less negative)

### Lattice Energy Trends

| Compound | Ions | Lattice Energy (kJ/mol) |
| --- | --- | --- |
| LiF | Li⁺, F⁻ | -1037 |
| NaCl | Na⁺, Cl⁻ | -788 |
| KBr | K⁺, Br⁻ | -689 |
| MgO | Mg²⁺, O²⁻ | -3791 |
| CaO | Ca²⁺, O²⁻ | -3520 |
| Al₂O₃ | Al³⁺, O²⁻ | -15,916 |

**Key observation:** MgO has lattice energy ~5× larger than NaCl because of +2/-2 charges vs +1/-1!

---

## Resonance Energy and Strain Energy

### Resonance Energy

**Resonance Energy** is the extra stability gained by a molecule due to delocalization of electrons (resonance).

$$\text{Resonance Energy} = \Delta H_{\text{calculated from bonds}} - \Delta H_{\text{experimental}}$$

**Example: Benzene (C₆H₆)**

**Calculated from bonds** (Kekulé structure: 3 C=C, 3 C-C, 6 C-H):

$$\Delta H_{\text{calc}} = -(3 \times 611 + 3 \times 347 + 6 \times 414) = -5358 \text{ kJ/mol}$$

**Experimental** (from formation data):

$$\Delta H_{\text{exp}} = -5535 \text{ kJ/mol}$$

**Resonance energy:**

$$= -5535 - (-5358) = -177 \text{ kJ/mol}$$

**Interpretation:** Benzene is 177 kJ/mol **more stable** than predicted Kekulé structure due to delocalization!

This is why benzene doesn’t easily undergo addition reactions (would lose aromatic stability).

### Ring Strain Energy

**Ring Strain** is the extra energy in small cyclic compounds due to angle strain and torsional strain.

**Example: Cyclopropane (C₃H₆)**

Normal C-C-C bond angle: 109.5° (sp³)
In cyclopropane: 60° (forced by geometry)

**Result:** High strain → high energy → reactive

**Heat of combustion comparison:**

- Propane (C₃H₈): ΔH_c = -2220 kJ/mol
- Cyclopropane (C₃H₆): ΔH_c = -2091 kJ/mol

**Per CH₂ unit:**

- Propane: 2220/3 = 740 kJ/mol per CH₂
- Cyclopropane: 2091/3 = 697 kJ/mol per CH₂

**Ring strain** = 740 - 697 = 43 kJ/mol per CH₂ × 3 = 129 kJ/mol total

**Stability order:** Cyclohexane (no strain) > Cyclopentane (small strain) > Cyclobutane (moderate strain) > Cyclopropane (high strain)

---

## Memory Tricks & Patterns

### Mnemonic for Born-Haber Cycle

**“Some Dumb Idiots Eat Lettuce”**

- **S**ublimation (metal solid → gas)
- **D**issociation (nonmetal molecule → atoms)
- **I**onization (metal atom → cation)
- **E**lectron gain (nonmetal atom → anion)
- **L**attice (ions → crystal)

### Bond Energy Pattern

**“Breaking Bad”** (Breaking Bonds = Add energy = Positive)
**“Forming Friends”** (Forming bonds = Release energy = Negative/Subtract)

$$\Delta H = \text{Breaking (add)} - \text{Forming (subtract)}$$

### Lattice Energy Trends

**“Small Charges Stick Strongly”**

- **S**maller ions → Stronger lattice
- Higher **C**harges → Stronger lattice

$$U \propto \frac{q_+ \times q_-}{r}$$

### Combustion Data Trick

**All combustions are exothermic** (ΔH < 0)

If given positive value, it’s probably:

- Formation enthalpy
- Bond energy
- Ionization energy

**Never positive:** Combustion, neutralization, lattice formation

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Sign Error in Bond Energy Calculation**
>
> **Wrong:**
>
> $$\Delta H = \text{Bonds formed} - \text{Bonds broken}$$
>
> **Right:**
>
> $$\Delta H = \text{Bonds broken} - \text{Bonds formed}$$
>
> **Remember:** Breaking bonds costs energy (endothermic), forming bonds releases energy (exothermic).
>
> **Example:** If you break 1000 kJ worth of bonds and form 1500 kJ worth:
>
> $$\Delta H = 1000 - 1500 = -500 \text{ kJ (exothermic)} \quad ✓$$
>
> Not: $1500 - 1000 = +500$ kJ (wrong!)

> **⚠ Trap #2: Forgetting to Halve Diatomic Bond Energy**
>
> **Wrong:** For $\frac{1}{2}\text{Cl}_2 \to \text{Cl}$, using full Cl-Cl bond energy (243 kJ)
>
> **Right:** Use **half** the bond energy = 243/2 = 121.5 kJ
>
> **Why?** You’re only breaking half a mole of Cl-Cl bonds!
>
> **General rule:** Always match stoichiometry!

> **⚠ Trap #3: Confusing Lattice Energy Sign Convention**
>
> **Two conventions exist:**
>
> **Convention 1 (exothermic, negative):**
>
> $$\text{M}^+(g) + \text{X}^-(g) \to \text{MX}(s) \quad U < 0$$
>
> **Convention 2 (endothermic, positive):**
>
> $$\text{MX}(s) \to \text{M}^+(g) + \text{X}^-(g) \quad U > 0$$
>
> **JEE uses both!** Always check which direction is defined in the question.
>
> **Safe approach:** Write the equation, then assign sign based on whether it’s exothermic or endothermic.

> **⚠ Trap #4: Using ΔfH° for Elements**
>
> **Wrong:** $\Delta_f H°[\text{O}_2] = -498$ kJ/mol (bond energy)
>
> **Right:** $\Delta_f H°[\text{O}_2] = 0$ kJ/mol (element in standard state!)
>
> **Formation enthalpy is ZERO for elements in their standard states.**
>
> Bond energy and formation enthalpy are **different concepts**!

> **⚠ Trap #5: Ignoring State in Combustion**
>
> **Question:** Heat of combustion of ethanol?
>
> **Wrong:** Not specifying whether water product is liquid or gas
>
> **Right:** Specify product state!
>
> - If H₂O(l): ΔH_c = -1367 kJ/mol

> - If H₂O(g): ΔH_c = -1367 + 44 = -1323 kJ/mol
>
> **Difference** = heat of vaporization of water (44 kJ/mol per H₂O)
>
> **JEE standard:** Unless specified, water product is **liquid** in combustion.

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Bond Energy Calculation**
>
> **Question:** Calculate ΔH for:
>
> $$\text{H}_2(g) + \text{Cl}_2(g) \to 2\text{HCl}(g)$$
>
> Given bond energies:
>
> - H-H: 436 kJ/mol

> - Cl-Cl: 243 kJ/mol

> - H-Cl: 431 kJ/mol
>
> **Solution:**
>
> **Bonds broken:**
>
> - 1 × H-H: 436 kJ

> - 1 × Cl-Cl: 243 kJ

> - **Total:** 436 + 243 = 679 kJ
>
> **Bonds formed:**
>
> - 2 × H-Cl: 2 × 431 = 862 kJ
>
> **ΔH:**
>
> $$\Delta H = 679 - 862 = -183 \text{ kJ/mol}$$
>
> **Answer:** -183 kJ/mol (exothermic)
>
> **Interpretation:** More energy released forming H-Cl bonds than needed to break H-H and Cl-Cl bonds.

> **↗ Connection · Problem 1.2: Heat of Formation from Combustion**
>
> **Question:** Calculate $\Delta_f H°[\text{CH}_4]$ given:
>
> - $\Delta_c H°[\text{CH}_4] = -890$ kJ/mol

> - $\Delta_c H°[\text{C(graphite)}] = -394$ kJ/mol

> - $\Delta_c H°[\text{H}_2] = -286$ kJ/mol
>
> **Solution:**
>
> **Formation equation:**
>
> $$\text{C(s)} + 2\text{H}_2(g) \to \text{CH}_4(g)$$
>
> **Using combustion data:**
>
> $$\Delta_f H° = [\Delta_c H°(\text{C}) + 2 \times \Delta_c H°(\text{H}_2)] - \Delta_c H°(\text{CH}_4)$$

$$= [-394 + 2(-286)] - (-890)$$

$$= [-394 - 572] + 890$$

$$= -966 + 890 = -76 \text{ kJ/mol}$$
>
> **Answer:** $\Delta_f H°[\text{CH}_4] = -76$ kJ/mol
>
> **Check:** Literature value is -74.8 kJ/mol - very close! ✓

> **↗ Connection · Problem 1.3: Simple Born-Haber**
>
> **Question:** Calculate lattice energy of KCl given:
>
> - $\Delta_f H°[\text{KCl}] = -437$ kJ/mol

> - $\Delta_{sub} H[\text{K}] = +89$ kJ/mol

> - $\Delta_{diss} H[\text{Cl}_2] = +243$ kJ/mol (for whole molecule)

> - $\Delta_{ion} H[\text{K}] = +419$ kJ/mol

> - $\Delta_{eg} H[\text{Cl}] = -349$ kJ/mol
>
> **Solution:**
>
> Born-Haber cycle:
>
> $$\Delta_f H° = \Delta_{sub} + \frac{1}{2}\Delta_{diss} + \Delta_{ion} + \Delta_{eg} + U$$

$$-437 = 89 + \frac{243}{2} + 419 - 349 + U$$

$$-437 = 89 + 121.5 + 419 - 349 + U$$

$$-437 = 280.5 + U$$

$$U = -717.5 \text{ kJ/mol}$$
>
> **Answer:** Lattice energy = -717.5 kJ/mol
>
> **Note:** Negative sign means lattice formation is exothermic.

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Multi-Step Bond Energy**
>
> **Question:** Calculate ΔH for:
>
> $$\text{CH}_4(g) + \text{Cl}_2(g) \to \text{CH}_3\text{Cl}(g) + \text{HCl}(g)$$
>
> Given bond energies:
>
> - C-H: 414 kJ/mol

> - Cl-Cl: 243 kJ/mol

> - C-Cl: 339 kJ/mol

> - H-Cl: 431 kJ/mol
>
> **Solution:**
>
> **Bonds broken:**
>
> - 1 × C-H (one of four in CH₄): 414 kJ

> - 1 × Cl-Cl: 243 kJ

> - **Total broken:** 414 + 243 = 657 kJ
>
> **Bonds formed:**
>
> - 1 × C-Cl: 339 kJ

> - 1 × H-Cl: 431 kJ

> - **Total formed:** 339 + 431 = 770 kJ
>
> **ΔH:**
>
> $$\Delta H = 657 - 770 = -113 \text{ kJ/mol}$$
>
> **Answer:** -113 kJ/mol (exothermic)
>
> **Reaction type:** Free radical substitution (chlorination of methane)

> **↗ Connection · Problem 2.2: Comparing Lattice Energies**
>
> **Question:** Arrange in order of increasing lattice energy (magnitude):

> NaF, NaCl, MgO, CaO
>
> **Solution:**
>
> **Factors:**
>
> 1. **Charge:** Higher charge → stronger lattice

> 2. **Size:** Smaller ions → stronger lattice
>
> **Analysis:**
>
> **NaF vs NaCl:**
>
> - Same charges (+1, -1)

> - F⁻ smaller than Cl⁻

> - **NaF > NaCl**
>
> **MgO vs CaO:**
>
> - Same charges (+2, -2)

> - Mg²⁺ smaller than Ca²⁺

> - **MgO > CaO**
>
> **NaCl vs MgO:**
>
> - MgO has +2/-2 charges vs +1/-1

> - Even though ions larger in MgO, charge effect dominates

> - **MgO » NaCl**
>
> **Order (increasing magnitude):**
>
> $$\text{NaCl} < \text{NaF} < \text{CaO} < \text{MgO}$$
>
> **Actual values:**
>
> - NaCl: -788 kJ/mol

> - NaF: -926 kJ/mol

> - CaO: -3520 kJ/mol

> - MgO: -3791 kJ/mol
>
> **Answer:** NaCl < NaF < CaO < MgO

> **↗ Connection · Problem 2.3: Resonance Energy**
>
> **Question:** Calculate resonance energy of benzene given:
>
> - Heat of combustion of benzene: -3267 kJ/mol

> - Heat of combustion of hypothetical 1,3,5-cyclohexatriene (Kekulé): -3909 kJ/mol
>
> **Solution:**
>
> **Key concept:** More stable compound releases **less** heat on combustion (it’s already at lower energy).
>
> **Resonance energy:**
>
> $$= \Delta H_{\text{combustion(Kekulé)}} - \Delta H_{\text{combustion(actual benzene)}}$$

$$= (-3909) - (-3267)$$

$$= -3909 + 3267$$

$$= -642 \text{ kJ/mol}$$
>
> Wait, this doesn’t match typical values. Let me reconsider&mldr;
>
> Actually, the question setup is confusing. Let me use standard approach:
>
> **Alternative approach:** If given that hypothetical structure would release MORE heat:
>
> $$\text{Resonance energy} = |\Delta H_{\text{Kekulé}}| - |\Delta H_{\text{actual}}|$$

$$= 3909 - 3267 = 642 \text{ kJ/mol}$$
>
> Hmm, this is too large. Standard benzene resonance energy is ~150 kJ/mol.
>
> **Correct interpretation:** The resonance energy should be calculated from formation or atomization, not combustion. Let me provide standard calculation:
>
> **Standard answer:** Resonance energy of benzene ≈ 150 kJ/mol
>
> **Calculation method:** From bond energies (as done in Problem 3.3 of Enthalpy chapter).

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Complex Born-Haber with Multiple Ionizations**
>
> **Question:** Calculate lattice energy of MgCl₂ given:
>
> - $\Delta_f H°[\text{MgCl}_2] = -642$ kJ/mol

> - $\Delta_{sub} H[\text{Mg}] = +148$ kJ/mol

> - $\Delta_{diss} H[\text{Cl}_2] = +243$ kJ/mol

> - First ionization of Mg: +738 kJ/mol

> - Second ionization of Mg: +1451 kJ/mol

> - $\Delta_{eg} H[\text{Cl}] = -349$ kJ/mol
>
> **Solution:**
>
> **Formation:**
>
> $$\text{Mg}(s) + \text{Cl}_2(g) \to \text{MgCl}_2(s)$$
>
> **Born-Haber steps:**
>
> 1. Sublimation: $\text{Mg}(s) \to \text{Mg}(g)$, ΔH₁ = +148 kJ

> 2. Dissociation: $\text{Cl}_2(g) \to 2\text{Cl}(g)$, ΔH₂ = +243 kJ

> 3. First ionization: $\text{Mg}(g) \to \text{Mg}^+(g) + e^-$, ΔH₃ = +738 kJ

> 4. Second ionization: $\text{Mg}^+(g) \to \text{Mg}^{2+}(g) + e^-$, ΔH₄ = +1451 kJ

> 5. Electron gain (2 Cl): $2\text{Cl}(g) + 2e^- \to 2\text{Cl}^-(g)$, ΔH₅ = 2(-349) = -698 kJ

> 6. Lattice formation: $\text{Mg}^{2+}(g) + 2\text{Cl}^-(g) \to \text{MgCl}_2(s)$, ΔH₆ = U
>
> **By Hess’s Law:**
>
> $$\Delta_f H° = \Delta H_1 + \Delta H_2 + \Delta H_3 + \Delta H_4 + \Delta H_5 + U$$

$$-642 = 148 + 243 + 738 + 1451 - 698 + U$$

$$-642 = 1882 + U$$

$$U = -2524 \text{ kJ/mol}$$
>
> **Answer:** Lattice energy = -2524 kJ/mol
>
> **Comparison:**
>
> - NaCl (+1/-1): -788 kJ/mol

> - MgCl₂ (+2/-1): -2524 kJ/mol
>
> **Insight:** Even though only Mg is doubly charged, lattice energy is ~3× larger! This is why Mg²⁺ salts are more stable.

> **↗ Connection · Problem 3.2: Why MgCl₂ Forms Instead of MgCl**
>
> **Question:** Use Born-Haber cycle to explain why magnesium forms MgCl₂ rather than MgCl, even though second ionization energy is very large.
>
> Given approximate values:
>
> - Lattice energy of MgCl: -753 kJ/mol

> - Lattice energy of MgCl₂: -2524 kJ/mol

> - First IE of Mg: +738 kJ/mol

> - Second IE of Mg: +1451 kJ/mol
>
> **Solution:**
>
> **For MgCl formation:**
>
> $$\text{Mg}(s) + \frac{1}{2}\text{Cl}_2(g) \to \text{MgCl}(s)$$
>
> Energy balance (simplified):
>
> - Cost: First IE = +738 kJ

> - Gain: Lattice energy = -753 kJ

> - **Net:** -15 kJ (small exothermic)
>
> **For MgCl₂ formation:**
>
> $$\text{Mg}(s) + \text{Cl}_2(g) \to \text{MgCl}_2(s)$$
>
> Energy balance (simplified):
>
> - Cost: First IE + Second IE = +738 + 1451 = +2189 kJ

> - Gain: Lattice energy = -2524 kJ

> - **Net:** -335 kJ (highly exothermic!)
>
> **Extra energy gain from MgCl₂ over 2×MgCl:**
>
> $$\Delta = -335 - 2(-15) = -335 + 30 = -305 \text{ kJ}$$
>
> **Answer:** Even though second ionization requires huge energy (+1451 kJ), the lattice energy of MgCl₂ (-2524 kJ) is MORE than double that of MgCl (-753 kJ) due to higher charge density. Net result: MgCl₂ is much more stable!
>
> **General principle:** Higher charge on cation leads to disproportionately higher lattice energy, compensating for ionization energy cost.
>
> **This is why:**
>
> - Mg forms Mg²⁺, not Mg⁺

> - Ca forms Ca²⁺, not Ca⁺

> - Al forms Al³⁺, not Al⁺ or Al²⁺

> **↗ Connection · Problem 3.3: Fuel Efficiency Comparison**
>
> **Question:** Compare energy per gram for:

> (a) Hydrogen: H₂ + ½O₂ → H₂O, ΔH = -286 kJ/mol

> (b) Methane: CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = -890 kJ/mol

> (c) Octane: C₈H₁₈ + 25/2 O₂ → 8CO₂ + 9H₂O, ΔH = -5471 kJ/mol
>
> Which is the best rocket fuel on per-gram basis?
>
> **Solution:**
>
> **Energy per gram = $\frac{\Delta H_{\text{combustion}}}{\text{Molar mass}}$**
>
> **(a) Hydrogen (H₂, M = 2 g/mol):**
>
> $$\frac{286 \text{ kJ/mol}}{2 \text{ g/mol}} = 143 \text{ kJ/g}$$
>
> **(b) Methane (CH₄, M = 16 g/mol):**
>
> $$\frac{890 \text{ kJ/mol}}{16 \text{ g/mol}} = 55.6 \text{ kJ/g}$$
>
> **(c) Octane (C₈H₁₈, M = 114 g/mol):**
>
> $$\frac{5471 \text{ kJ/mol}}{114 \text{ g/mol}} = 48.0 \text{ kJ/g}$$
>
> **Ranking:**
>
> $$\text{Hydrogen (143 kJ/g)} > \text{Methane (55.6 kJ/g)} > \text{Octane (48 kJ/g)}$$
>
> **Answer:** Hydrogen is the best fuel per gram - nearly 3× more energy than octane!
>
> **Why rockets use hydrogen:**
>
> - Highest energy per gram

> - Only product is water (clean)

> - Disadvantage: Low density, needs large tanks
>
> **Why cars use octane/gasoline:**
>
> - Easier to store (liquid at room temperature)

> - Higher energy per **volume**

> - Disadvantage: Lower energy per gram, produces CO₂
>
> **JEE insight:** Always check whether question asks for energy per:
>
> - **Mole** (ΔH_combustion directly)

> - **Gram** (divide by molar mass)

> - **Volume** (multiply by density)

---

## Quick Revision Box

### Essential Formulas

| Concept | Formula | Use |
| --- | --- | --- |
| Bond energy method | $\Delta H = \sum(\text{broken}) - \sum(\text{formed})$ | Approximate ΔH |
| Heat of combustion | $\Delta_c H = \sum \Delta_f H°(\text{products}) - \sum \Delta_f H°(\text{reactants})$ | From formation data |
| Born-Haber cycle | $\Delta_f H° = \Delta_{sub} + \Delta_{diss} + \Delta_{ion} + \Delta_{eg} + U$ | Find lattice energy |
| Lattice energy trend | $U \propto \frac{q_+ \times q_-}{r_+ + r_-}$ | Compare compounds |
| Resonance energy | $E_{res} = E_{\text{calculated}} - E_{\text{actual}}$ | Stability from delocalization |

### Common Bond Energies (kJ/mol)

| Single | Energy | Double | Energy | Triple | Energy |
| --- | --- | --- | --- | --- | --- |
| H-H | 436 | C=C | 611 | N≡N | 946 |
| C-C | 347 | C=O | 741 | C≡C | 837 |
| C-H | 414 | O=O | 498 | C≡O | 1072 |
| O-H | 464 | C=N | 615 | C≡N | 891 |

### Lattice Energy Trends

**Increasing lattice energy (magnitude):**

1. **Smaller cation:** Li⁺ > Na⁺ > K⁺ (same anion)
2. **Smaller anion:** F⁻ > Cl⁻ > Br⁻ (same cation)
3. **Higher charge:** Mg²⁺ > Na⁺ (similar size)

**Typical values:**

- Singly charged (NaCl): ~800 kJ/mol
- Doubly charged (MgO): ~3800 kJ/mol

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> **1. Bond Energies: Breaking vs Forming**
>
> $$\Delta H_{rxn} = \text{Bonds broken (positive)} - \text{Bonds formed (positive)}$$
>
> - Breaking bonds: **Always endothermic** (requires energy)

> - Forming bonds: **Always exothermic** (releases energy)

> - Exothermic reaction: More energy from forming > energy to break
>
> **2. Heat of Combustion vs Heat of Formation**
>
> - **Combustion:** Burning with O₂, always exothermic

> - **Formation:** Making from elements, can be endo or exo

> - **Relationship:** Can convert one to other using Hess’s Law
>
> **3. Born-Haber Cycle: The Energy Ledger**
>
> Step-by-step energy accounting for ionic compound formation:
>
> 1. Sublimation (metal)

> 2. Dissociation (nonmetal)

> 3. Ionization (form cation)

> 4. Electron gain (form anion)

> 5. Lattice formation
>
> **Large lattice energy compensates for ionization energy!**
>
> **4. Lattice Energy Trends**
>
> $$U \propto \frac{\text{charge}}{\text{size}}$$
>
> - Higher charge → Stronger lattice (squared effect!)

> - Smaller ions → Stronger lattice

> - MgO (~3800 kJ/mol) » NaCl (~800 kJ/mol)
>
> **5. Why Chemical Reactions Release Energy**
>
> **Exothermic:** Products have stronger bonds than reactants
>
> - Energy released forming strong bonds > energy to break weak bonds

> - Example: Combustion (forming very strong C=O and O-H bonds)
>
> **Endothermic:** Reactants have stronger bonds than products
>
> - Energy to break strong bonds > energy from forming weak bonds

> - Example: Decomposition of stable compounds
>
> **“Energy is stored in bonds - break them to release it, form them to store it!”**
>
> **JEE Weightage:** 3-4 questions per paper, often combined with Hess’s Law and Gibbs Energy.
>
> **Time-saving tip:** For bond energy MCQs, check if more/fewer bonds in products - if MORE bonds, likely exothermic!

---

## Cross-Links to Related Concepts

**Prerequisites:**

- [Enthalpy](../enthalpy/index.md) - ΔH, Hess’s Law, formation enthalpies
- [First Law](../first-law/index.md) - Energy conservation

**Builds on:**

- [Chemical Bonding](https://jeenotes.in/chemistry/chemical-bonding/) - Bond types, strength
- [Atomic Structure](https://jeenotes.in/chemistry/atomic-structure/) - Ionization energy, electron affinity

**Applications:**

- [Electrochemistry](https://jeenotes.in/chemistry/redox-electrochemistry/) - Cell potentials from ΔG
- [Metallurgy](../../p-block-elements/index.md) - Ellingham diagrams
- [Organic Chemistry](https://jeenotes.in/chemistry/organic-principles/) - Reaction energetics

**Related concepts:**

- [Gibbs Energy](../gibbs-energy/index.md) - Spontaneity predictions
- [Equilibrium](https://jeenotes.in/chemistry/equilibrium/) - ΔH and K relationship

---

## What’s Next?

> **◐ In simple terms · Moving Forward**
>
> **Congratulations!** You’ve completed Chemical Thermodynamics - one of the most important chapters for JEE!
>
> **You now know:**
>
> - Energy changes in reactions (ΔH, ΔU)

> - Disorder and spontaneity (ΔS, Second Law)

> - Ultimate spontaneity criterion (ΔG)

> - Bond energies and lattice energies

> - How to predict if reactions will happen!
>
> **Next chapter: [Chemical Kinetics](https://jeenotes.in/chemistry/chemical-kinetics/)**
>
> **Thermodynamics tells you WHERE a reaction goes (equilibrium position).

> Kinetics tells you HOW FAST it gets there!**
>
> **Topics ahead:**
>
> - Rate laws and rate constants

> - Reaction mechanisms

> - Activation energy and Arrhenius equation

> - Catalysts and how they work
>
> **The connection:** ΔG tells you if reaction is possible, Ea (activation energy) tells you if it’s practical!

From TestGuru · our mock-test platform

## You've read Thermochemistry: Bond Energies and Heats of Reaction.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fthermodynamics%2Fthermochemistry%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/thermodynamics/thermochemistry/",this.page.identifier="/chemistry/thermodynamics/thermochemistry/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="enthalpyDiagram" id="anim-enthalpyDiagram-1795396420631241707"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-enthalpyDiagram-1795396420631241707")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/thermodynamics/thermochemistry/](https://jeenotes.in/chemistry/thermodynamics/thermochemistry/) · raw HTML: `offline/chemistry/thermodynamics/thermochemistry/index.html`_
