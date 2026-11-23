---
title: "Electrolysis and Faraday's Laws"
source: "https://jeenotes.in/chemistry/redox-electrochemistry/electrolysis/"
description: "Master electrolysis, Faraday's laws, quantitative calculations, and industrial applications for JEE Chemistry."
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Chemistry"
position: "/ Topic 5 of 9"
html: "../../../../offline/chemistry/redox-electrochemistry/electrolysis/index.html"
extracted: "2026-11-23"
---

> Master electrolysis, Faraday's laws, quantitative calculations, and industrial applications for JEE Chemistry.

## Introduction

Every aluminum can you drink from, every iPhone chip, and every gold-plated connector in your laptop exists because of **electrolysis**! This forced electrochemical process uses electrical energy to drive non-spontaneous reactions. From refining metals to producing chemicals, electrolysis is the backbone of modern industry.

> **★ Key point · iPhone Manufacturing Magic**
>
> The 2024 Apple iPhone 15 Pro’s titanium frame undergoes **anodization** (electrolytic oxidation) to create that distinctive colored finish! Electrolysis builds up a protective oxide layer that’s harder than steel. Meanwhile, its A17 Pro chip contains copper traces deposited via **electroplating**. Your phone literally wouldn’t exist without the electrolysis principles you’re about to learn!

---

## Interactive: Electrolysis Demonstration

Watch electrolysis of water - see hydrogen and oxygen forming at electrodes:

---

## What is Electrolysis?

**Electrolysis** is the process of using electrical energy to drive a **non-spontaneous** chemical reaction.

### Galvanic vs Electrolytic Cells

| Feature | Galvanic Cell | Electrolytic Cell |
| --- | --- | --- |
| **Energy conversion** | Chemical → Electrical | Electrical → Chemical |
| **ΔG** | Negative | Positive |
| **E°cell** | Positive | Negative |
| **Spontaneity** | Spontaneous | Non-spontaneous |
| **Anode** | Negative (-) | Positive (+) |
| **Cathode** | Positive (+) | Negative (-) |
| **Process at anode** | Oxidation | Oxidation |
| **Process at cathode** | Reduction | Reduction |
| **Example** | Battery | Charging battery, electroplating |

> **★ Key point · Electrode Polarity Flip!**
>
> **In electrolytic cells:**
>
> - **Anode** is **positive** (connected to + terminal of battery)

> - **Cathode** is **negative** (connected to - terminal of battery)
>
> **But oxidation STILL occurs at anode, reduction STILL at cathode!**
>
> **Memory trick:** AN OX and RED CAT never change, but polarity flips in electrolysis!

---

## Basic Principles of Electrolysis

### Requirements

1. **Electrolyte:** Molten salt or aqueous solution containing ions
2. **Electrodes:** Usually inert (Pt, graphite) or reactive (metal being plated)
3. **External power source:** Battery or DC supply
4. **Closed circuit:** Complete path for electron flow

### Electrode Processes

**At Anode (+):**

- **Oxidation** occurs
- Anions migrate toward anode
- Electrons are removed
- Example: $2\text{Cl}^- \rightarrow \text{Cl}_2 + 2e^-$

**At Cathode (-):**

- **Reduction** occurs
- Cations migrate toward cathode
- Electrons are supplied
- Example: $\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$

---

## Conductance of Electrolytic Solutions

Before quantifying electrolysis, we need to measure how well an electrolyte conducts.

### Resistance and Conductance

$$R = \rho \frac{l}{A}$$

$$G = \frac{1}{R} = \kappa \frac{A}{l}$$

where κ = conductivity (S/m).

### Molar Conductivity

$$\Lambda_m = \frac{\kappa \times 1000}{M}$$

where M = molarity. Λm increases on dilution — sharply for weak electrolytes (more dissociation), gently for strong electrolytes (less inter-ionic attraction).

### Kohlrausch’s Law

$$\Lambda_m^° = \lambda^°_+ + \lambda^°_-$$

At infinite dilution, each ion contributes independently to the molar conductivity.

**Applications:**

- Calculate Λ°m for weak electrolytes (e.g., CH₃COOH from strong-electrolyte data)
- Find degree of dissociation: α = Λm/Λ°m
- Determine solubility of sparingly soluble salts

---

## Electrolysis of Molten Salts

### Example: Molten NaCl

**At Cathode (-):**

$$\text{Na}^+ + e^- \rightarrow \text{Na}_{(l)}$$

**At Anode (+):**

$$2\text{Cl}^- \rightarrow \text{Cl}_2 + 2e^-$$

**Overall:**

$$\boxed{2\text{NaCl}_{(l)} \xrightarrow{\text{electrolysis}} 2\text{Na}_{(l)} + \text{Cl}_2}$$

This is how **sodium metal** is produced industrially!

### Example: Molten Al₂O₃ (Hall-Héroult Process)

**At Cathode (-):**

$$\text{Al}^{3+} + 3e^- \rightarrow \text{Al}_{(l)}$$

**At Anode (+):**

$$2\text{O}^{2-} \rightarrow \text{O}_2 + 4e^-$$

$$\text{C} + \text{O}_2 \rightarrow \text{CO}_2$$

(carbon anode burns)

**Overall:**

$$\boxed{2\text{Al}_2\text{O}_3 \xrightarrow{\text{electrolysis}} 4\text{Al} + 3\text{O}_2}$$

> **◐ In simple terms · Why Aluminum Was Once More Expensive Than Gold**
>
> Before the Hall-Héroult process (1886), aluminum was so rare it was used for jewelry! Napoleon III had aluminum cutlery while guests used gold. The Washington Monument’s capstone is aluminum - the largest piece cast at the time (1884). Today, electrolysis makes aluminum cheap enough for beverage cans. That’s the power of electrochemistry!

---

## Electrolysis of Aqueous Solutions

### Competing Reactions

In aqueous solutions, **both** the salt ions and water can undergo electrolysis!

**At Cathode (reduction):**

- Metal cations: $\text{M}^{n+} + ne^- \rightarrow \text{M}$
- Water: $2\text{H}_2\text{O} + 2e^- \rightarrow \text{H}_2 + 2\text{OH}^-$ (E° = -0.83 V)
- H⁺ ions: $2\text{H}^+ + 2e^- \rightarrow \text{H}_2$ (E° = 0.00 V)

**At Anode (oxidation):**

- Anions: $2\text{Cl}^- \rightarrow \text{Cl}_2 + 2e^-$, $2\text{Br}^- \rightarrow \text{Br}_2 + 2e^-$
- Water: $2\text{H}_2\text{O} \rightarrow \text{O}_2 + 4\text{H}^+ + 4e^-$ (E° = 1.23 V)
- OH⁻ ions: $4\text{OH}^- \rightarrow \text{O}_2 + 2\text{H}_2\text{O} + 4e^-$ (E° = 0.40 V)

### Preferential Discharge Rules

**At Cathode:**
Species with **higher reduction potential** (less negative) is reduced first.

**Order:** Metal ions (high E°) > H⁺ > Active metals (low E°) > Water

**At Anode:**
Species with **lower oxidation potential** (less positive) is oxidized first.

**Order:** Anions (Cl⁻, Br⁻, I⁻) > OH⁻/H₂O > Oxyanions (SO₄²⁻, NO₃⁻)

> **★ Key point · Quick Discharge Priority**
>
> **Cathode (reduction):** Higher E° wins
>
> - Ag⁺ > Cu²⁺ > H⁺ > Zn²⁺ > Na⁺
>
> **Anode (oxidation):** Lower E° wins
>
> - I⁻ > Br⁻ > Cl⁻ > OH⁻ > SO₄²⁻, NO₃⁻
>
> **Exception:** Concentrated solutions favor salt ion discharge over water!

---

## Examples of Aqueous Electrolysis

### Example 1: Electrolysis of CuSO₄ (aq) with Pt Electrodes

**At Cathode (-):**

- Choices: Cu²⁺ + 2e⁻ → Cu (E° = +0.34 V) OR 2H₂O + 2e⁻ → H₂ + 2OH⁻ (E° = -0.83 V)
- **Cu²⁺ wins** (higher E°)

$$\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$$

**At Anode (+):**

- Choices: SO₄²⁻ oxidation (very difficult) OR 2H₂O → O₂ + 4H⁺ + 4e⁻
- **Water wins**

$$2\text{H}_2\text{O} \rightarrow \text{O}_2 + 4\text{H}^+ + 4e^-$$

**Overall:**

$$\boxed{2\text{CuSO}_4 + 2\text{H}_2\text{O} \rightarrow 2\text{Cu} + 2\text{H}_2\text{SO}_4 + \text{O}_2}$$

**Observation:** Copper deposits on cathode, O₂ gas at anode, solution becomes acidic

---

### Example 2: Electrolysis of NaCl (aq) with Pt Electrodes

**At Cathode (-):**

- Choices: Na⁺ + e⁻ → Na (E° = -2.71 V) OR 2H₂O + 2e⁻ → H₂ + 2OH⁻ (E° = -0.83 V)
- **Water wins** (much higher E°)

$$2\text{H}_2\text{O} + 2e^- \rightarrow \text{H}_2 + 2\text{OH}^-$$

**At Anode (+):**

- Choices: 2Cl⁻ → Cl₂ + 2e⁻ (E° = 1.36 V) OR 2H₂O → O₂ + 4H⁺ + 4e⁻ (E° = 1.23 V)
- In concentrated NaCl, **Cl⁻ wins** (due to overpotential)

$$2\text{Cl}^- \rightarrow \text{Cl}_2 + 2e^-$$

**Overall:**

$$\boxed{2\text{NaCl} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{H}_2 + \text{Cl}_2}$$

**This is the Chlor-alkali process!**

---

### Example 3: Electrolysis of H₂SO₄ (aq) with Pt Electrodes

**At Cathode (-):**

$$2\text{H}^+ + 2e^- \rightarrow \text{H}_2$$

**At Anode (+):**

$$2\text{H}_2\text{O} \rightarrow \text{O}_2 + 4\text{H}^+ + 4e^-$$

**Overall:**

$$\boxed{2\text{H}_2\text{O} \xrightarrow{\text{electrolysis}} 2\text{H}_2 + \text{O}_2}$$

**This is how hydrogen fuel is produced!**

---

## Faraday’s Laws of Electrolysis

Michael Faraday (1834) discovered quantitative relationships between electricity and chemical change.

### Faraday’s First Law

**The mass of substance deposited/liberated at an electrode is directly proportional to the quantity of electricity passed.**

$$\boxed{m \propto Q}$$

$$\boxed{m = Z \times Q = Z \times I \times t}$$

where:

- $m$ = mass deposited (grams)
- $Z$ = electrochemical equivalent (g/C)
- $Q$ = charge in coulombs (C)
- $I$ = current in amperes (A)
- $t$ = time in seconds (s)

### Electrochemical Equivalent (Z)

$$\boxed{Z = \frac{M}{nF}}$$

where:

- $M$ = molar mass (g/mol)
- $n$ = number of electrons transferred
- $F$ = Faraday’s constant = **96,500 C/mol** ≈ **96,485 C/mol**

**1 Faraday (F) = Charge on 1 mole of electrons = 96,500 C**

---

### Faraday’s Second Law

**When the same quantity of electricity is passed through different electrolytes, the masses of substances deposited are proportional to their equivalent weights.**

$$\boxed{\frac{m_1}{m_2} = \frac{E_1}{E_2} = \frac{M_1/n_1}{M_2/n_2}}$$

where $E$ = equivalent weight = $\frac{\text{Molar mass}}{n}$

---

## Quantitative Calculations

### Formula Summary

**Mass deposited:**

$$\boxed{m = \frac{M \times I \times t}{nF}}$$

$$\boxed{m = \frac{M \times Q}{nF}}$$

**Moles deposited:**

$$\boxed{\text{Moles} = \frac{Q}{nF} = \frac{It}{nF}}$$

**Volume of gas liberated (at STP):**

$$\boxed{V = \frac{22.4 \times I \times t}{nF} \text{ liters}}$$

> **★ Key point · Quick Calculation Framework**
>
> **Step 1:** Find charge Q = I × t
>
> **Step 2:** Find moles of electrons = Q/F
>
> **Step 3:** Find moles of substance = (moles of e⁻)/n
>
> **Step 4:** Find mass = moles × M OR volume = moles × 22.4 L

---

### Example 1: Copper Deposition

**Problem:** How much copper is deposited when a current of 2 A flows through CuSO₄ solution for 1 hour?

**Given:** M(Cu) = 63.5 g/mol, F = 96,500 C/mol

**Solution:**

**Step 1:** Calculate charge

$$Q = I \times t = 2 \times 3600 = 7200 \text{ C}$$

**Step 2:** For Cu²⁺ + 2e⁻ → Cu, n = 2

**Step 3:** Calculate mass

$$m = \frac{M \times Q}{nF} = \frac{63.5 \times 7200}{2 \times 96500}$$

$$m = \frac{457,200}{193,000} = \boxed{2.37 \text{ g}}$$

---

### Example 2: Hydrogen Gas Volume

**Problem:** What volume of H₂ (at STP) is liberated when 5 A current is passed through acidified water for 30 minutes?

**Solution:**

$$t = 30 \times 60 = 1800 \text{ s}$$

$$Q = 5 \times 1800 = 9000 \text{ C}$$

For 2H⁺ + 2e⁻ → H₂, n = 2

$$\text{Moles of H}_2 = \frac{Q}{nF} = \frac{9000}{2 \times 96500} = 0.0466 \text{ mol}$$

$$V = 0.0466 \times 22.4 = \boxed{1.044 \text{ L}}$$

---

### Example 3: Faraday’s Second Law Application

**Problem:** The same current deposits 0.54 g of Ag and x g of Cu from their salt solutions. Find x.

**Given:** M(Ag) = 108, M(Cu) = 63.5, n(Ag) = 1, n(Cu) = 2

**Solution:**

$$\frac{m_{\text{Cu}}}{m_{\text{Ag}}} = \frac{M_{\text{Cu}}/n_{\text{Cu}}}{M_{\text{Ag}}/n_{\text{Ag}}}$$

$$\frac{x}{0.54} = \frac{63.5/2}{108/1} = \frac{31.75}{108}$$

$$x = 0.54 \times \frac{31.75}{108} = \boxed{0.159 \text{ g}}$$

---

## Industrial Applications of Electrolysis

### 1. Electroplating

**Coating a metal object with a thin layer of another metal**

**Example: Chromium Plating**

- Cathode: Object to be plated (e.g., car bumper)
- Anode: Pure chromium
- Electrolyte: Chromic acid (H₂CrO₄)

**At cathode:** $\text{Cr}^{3+} + 3e^- \rightarrow \text{Cr}$

**Purpose:** Decoration, corrosion protection

> **◐ In simple terms · Gold-Plated HDMI Cables**
>
> Those $100 "premium" HDMI cables with gold-plated connectors? The gold layer is typically 0.5-2 micrometers thick, deposited via electrolysis. The actual gold value is less than $0.10! But gold does prevent corrosion in humid environments. The 2025 PS5 Pro uses gold-plated connectors - all thanks to electroplating!

---

### 2. Electrorefining (Purification of Metals)

**Example: Copper Refining**

- Anode: Impure copper
- Cathode: Pure copper (thin sheet)
- Electrolyte: CuSO₄ + H₂SO₄

**At anode:** $\text{Cu} \rightarrow \text{Cu}^{2+} + 2e^-$ (impurities fall as anode mud)

**At cathode:** $\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$ (pure copper deposits)

**Result:** 99.99% pure copper for electronics!

---

### 3. Manufacture of Chemicals

**Chlor-Alkali Industry (Nelson-Solvay Cell):**

Electrolysis of brine (NaCl solution):

$$2\text{NaCl} + 2\text{H}_2\text{O} \rightarrow 2\text{NaOH} + \text{H}_2 + \text{Cl}_2$$

**Products:**

- **Chlorine (Cl₂):** PVC plastics, water treatment
- **Sodium hydroxide (NaOH):** Paper, soap, chemicals
- **Hydrogen (H₂):** Fuel, ammonia synthesis

**Global production:** 70+ million tons/year!

---

### 4. Extraction of Metals

**Aluminum (Hall-Héroult Process):**

- Electrolysis of Al₂O₃ dissolved in molten cryolite (Na₃AlF₆)
- Temperature: 950-1000°C
- Uses 13-15 kWh per kg of Al!

**Sodium (Downs Cell):**

- Electrolysis of molten NaCl
- Operating temperature: 600°C
- Produces Na and Cl₂

---

### 5. Anodization

**Electrolytic passivation to increase oxide layer thickness**

**Example: Aluminum anodization**

- Anode: Aluminum object
- Electrolyte: Sulfuric acid
- Forms thick, protective Al₂O₃ layer (5-25 μm)

**Applications:**

- iPhone cases, cookware, architectural panels
- Can be dyed for colored finishes!

---

## Practice Problems

### Level 1: JEE Main

**Q1.** Calculate the mass of copper deposited when 0.5 A current flows through CuSO₄ for 2 hours.
Given: M(Cu) = 63.5, F = 96,500 C/mol

**Q2.** How long will it take to deposit 2.7 g of Al from Al₂(SO₄)₃ using a 3 A current?
Given: M(Al) = 27

**Q3.** What volume of O₂ (at STP) is liberated at the anode when 1 F of electricity is passed through dilute H₂SO₄?

---

### Level 2: JEE Main/Advanced

**Q4.** The same quantity of electricity that deposits 0.583 g of Ag from AgNO₃ will deposit how much Cu from CuSO₄?
Given: M(Ag) = 108, M(Cu) = 63.5

**Q5.** A current of 1.5 A is passed through CuSO₄ solution for 40 minutes using platinum electrodes.

- (a) Mass of Cu deposited
- (b) Volume of O₂ released at STP

**Q6.** During electrolysis of molten NaCl, 2.3 g of Na is deposited. Find the volume of Cl₂ gas (STP) liberated at the anode.
Given: M(Na) = 23

---

### Level 3: JEE Advanced

**Q7.** Three electrolytic cells containing AgNO₃, CuSO₄, and AlCl₃ are connected in series. The same current deposits 1.08 g of Ag. Calculate:

- (a) Mass of Cu deposited
- (b) Mass of Al deposited

**Q8.** A solution of Ni²⁺ is electrolyzed between Pt electrodes using 0.1 F of electricity. If 60% of this is used for H₂ evolution, what mass of Ni is deposited?
Given: M(Ni) = 58.7

**Q9.** A solution contains Cu²⁺ and Ag⁺ ions. When electrolysis is carried out, all Ag⁺ deposits first, then Cu²⁺. If total charge passed is 1000 C and 1.62 g of Ag is deposited, find:

- (a) Charge used for Ag deposition
- (b) Mass of Cu deposited
  Given: M(Ag) = 108, M(Cu) = 63.5

**Q10.** In the electrolysis of acidified water, if 2.24 L of H₂ (STP) is collected, calculate:

- (a) Volume of O₂ collected
- (b) Total charge passed

---

## Solutions to Practice Problems

**A1.**

$$Q = 0.5 \times 2 \times 3600 = 3600 \text{ C}$$

$$m = \frac{63.5 \times 3600}{2 \times 96500} = \boxed{1.185 \text{ g}}$$

**A2.**

$$Q = \frac{m \times nF}{M} = \frac{2.7 \times 3 \times 96500}{27} = 28,950 \text{ C}$$

$$t = \frac{Q}{I} = \frac{28950}{3} = 9650 \text{ s} = \boxed{160.83 \text{ min}}$$

**A3.**
4OH⁻ → O₂ + 2H₂O + 4e⁻ (n = 4)

$$V = \frac{1 \times 22.4}{4} = \boxed{5.6 \text{ L}}$$

**A4.**
Moles of Ag = 0.583/108 = 0.0054 mol → 0.0054 F used
Cu²⁺ + 2e⁻ → Cu: 0.0054 F deposits 0.0027 mol Cu

$$m = 0.0027 \times 63.5 = \boxed{0.172 \text{ g}}$$

**A5.**
Q = 1.5 × 40 × 60 = 3600 C
(a) m(Cu) = (63.5 × 3600)/(2 × 96500) = **1.185 g**
(b) 2H₂O → O₂ + 4H⁺ + 4e⁻: V = (3600 × 22.4)/(4 × 96500) = **0.209 L**

**A6.**
Moles of Na = 2.3/23 = 0.1 mol
2Cl⁻ → Cl₂ + 2e⁻: 0.1 mol e⁻ → 0.05 mol Cl₂

$$V = 0.05 \times 22.4 = \boxed{1.12 \text{ L}}$$

**A7.**
Moles of Ag = 1.08/108 = 0.01 mol = 0.01 F
(a) Cu: 0.01 F → 0.005 mol → **0.318 g**
(b) Al: 0.01 F → 0.00333 mol → **0.09 g**

**A8.**
40% for Ni: 0.04 F
Ni²⁺ + 2e⁻ → Ni: 0.04/2 = 0.02 mol

$$m = 0.02 \times 58.7 = \boxed{1.174 \text{ g}}$$

**A9.**
(a) Ag⁺ + e⁻ → Ag: 1.62/108 = 0.015 mol → **1448.25 C**
(b) Remaining charge = 1000 - 1448.25 = -448.25 (impossible!)
**Error in problem:** Need more charge! If 1.62 g Ag deposited, Q used = 1448 C, so total Q must be > 1448 C.

**A10.**
Moles of H₂ = 2.24/22.4 = 0.1 mol
(a) 2H₂O → 2H₂ + O₂: V(O₂) = **1.12 L**
(b) 2H⁺ + 2e⁻ → H₂: Q = 0.1 × 2 × 96500 = **19,300 C**

---

## Common Mistakes to Avoid

> **★ Key point · Electrolysis Pitfalls**
>
> **Mistake 1:** Confusing anode/cathode polarity in electrolytic cells
>
> - **Remember:** In electrolysis, anode is **positive**, cathode is **negative**

> - But oxidation STILL at anode, reduction STILL at cathode!
>
> **Mistake 2:** Wrong value of n
>
> - For Cu²⁺ + 2e⁻ → Cu: n = **2**, not 1!

> - For Al³⁺ + 3e⁻ → Al: n = **3**
>
> **Mistake 3:** Forgetting to convert time to seconds
>
> - Always use **seconds** in Q = I × t
>
> **Mistake 4:** Using 1 F = 96,485 vs 96,500
>
> - JEE usually accepts both, but **96,500** is more common
>
> **Mistake 5:** Wrong preferential discharge
>
> - **Concentrated solutions** behave differently than dilute ones

> - Example: Conc. NaCl gives Cl₂, but dilute gives O₂ at anode
>
> **Mistake 6:** Not considering both electrodes
>
> - In electrolysis of CuSO₄, Cu deposits at cathode BUT O₂ forms at anode

> - Must account for both products!

---

## Key Takeaways for JEE

### Essential Formulas

$$\boxed{Q = I \times t}$$

$$\boxed{m = \frac{M \times I \times t}{nF}}$$

$$\boxed{\frac{m_1}{m_2} = \frac{E_1}{E_2}}$$

$$\boxed{1 \text{ Faraday (F)} = 96,500 \text{ C}}$$

### Must Remember

1. **Faraday’s constant:** F = 96,500 C/mol
2. **Preferential discharge:** Higher E° at cathode, lower E° at anode
3. **Electrolysis reverses** spontaneous cell reactions (needs external voltage)
4. **Same current, different cells** → Use Faraday’s Second Law
5. **n value** depends on electrons in half-reaction, not ion charge alone

---

## Related Topics

### Within Electrochemistry

- [Oxidation-Reduction](../oxidation-reduction/index.md) — Electron transfer fundamentals
- [Electrochemical Cells](../electrochemical-cells/index.md) — Galvanic vs electrolytic
- [Electrode Potentials](../electrode-potentials/index.md) — Predicting discharge order
- [Batteries](../batteries/index.md) — Rechargeable batteries use electrolysis

### Cross-Chapter Connections

- [Chemical Kinetics](../../chemical-kinetics/index.md) — Rate of electrode reactions
- [Thermodynamics](../../thermodynamics/index.md) — Energy requirements (ΔG > 0)
- [Metallurgy](../../d-f-block-elements/index.md) — Metal extraction and refining

### Physics Connections

- [Current Electricity](../../../physics/current-electricity/index.md) — Current, resistance, power
- [Magnetism](../../../physics/magnetism/index.md) — Electromagnetic effects in electrolysis

---

From TestGuru · our mock-test platform

## You've read Electrolysis and Faraday's Laws.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=redox-electrochemistry&tg_exam=jee-main&tg_page=%2Fchemistry%2Fredox-electrochemistry%2Felectrolysis%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/redox-electrochemistry/electrolysis/",this.page.identifier="/chemistry/redox-electrochemistry/electrolysis/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="electrochemicalCell" id="anim-electrochemicalCell-1795396420498565941"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-electrochemicalCell-1795396420498565941")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/redox-electrochemistry/electrolysis/](https://jeenotes.in/chemistry/redox-electrochemistry/electrolysis/) · raw HTML: `offline/chemistry/redox-electrochemistry/electrolysis/index.html`_
