---
title: "Specific Heat and Molar Heat Capacity"
source: "https://jeenotes.in/physics/thermodynamics/specific-heat/"
description: "Master specific heat, molar heat capacities Cp and Cv, and Mayer's equation for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 10"
html: "../../../../offline/physics/thermodynamics/specific-heat/index.html"
extracted: "2026-11-23"
---

> Master specific heat, molar heat capacities Cp and Cv, and Mayer's equation for JEE Main & Advanced

## Real-Life Hook: Why Does Sand Burn Your Feet But Water Doesn’t?

Ever walked barefoot on beach sand in summer? It’s scorching! But the ocean water next to it is cool and refreshing. Both received the same amount of sunlight—so why the huge temperature difference?

The answer: **specific heat capacity**. Water has a high specific heat (4186 J/kg·K) while sand has low specific heat (~800 J/kg·K). Water needs more than 5 times the energy to heat up by the same amount. This is why:

- Coastal areas have moderate climates
- Water is used as coolant in car engines
- Desert sand gets extremely hot during day and cold at night

Understanding specific heat is crucial for JEE thermodynamics!

---

## Heat Capacity: The Basics

### Definitions

**1. Heat Capacity (C):**

$$C = \frac{\Delta Q}{\Delta T}$$

- Amount of heat needed to raise temperature by 1 K
- Unit: J/K or cal/K
- Depends on amount of substance

**2. Specific Heat Capacity (c):**

$$c = \frac{\Delta Q}{m \Delta T} = \frac{C}{m}$$

- Heat per unit mass per degree temperature rise
- Unit: J/(kg·K) or cal/(g·°C)
- Material property (intensive)

**3. Molar Heat Capacity (Cm):**

$$C_m = \frac{\Delta Q}{n \Delta T} = \frac{C}{n}$$

- Heat per mole per degree temperature rise
- Unit: J/(mol·K)
- For gases: $C_V$ and $C_P$ are crucial

### Example Values (at room temperature)

| Substance | Specific Heat c (J/kg·K) | Why It Matters |
| --- | --- | --- |
| Water | 4186 | Climate control, coolant |
| Copper | 385 | Heats/cools quickly |
| Iron | 450 | Cooking utensils |
| Aluminum | 900 | Better than iron for cookware |
| Air | ~1000 | Atmospheric processes |
| Sand | 800 | Desert temperature swings |

**Memory Trick:** “Water is the champion” - highest specific heat among common substances!

---

## Molar Heat Capacities for Gases

### Why Two Heat Capacities?

For gases, heating can occur at:

1. **Constant Volume** ($C_V$): All heat → internal energy
2. **Constant Pressure** ($C_P$): Heat → internal energy + work

Since work is done at constant pressure, $C_P > C_V$

---

## Derivation of CV and CP

### At Constant Volume (CV)

Process: Isochoric (V = constant)

- Work done: $W = P\Delta V = 0$
- First Law: $Q = \Delta U + W = \Delta U$

$$Q = nC_V\Delta T$$

$$\Delta U = nC_V\Delta T$$

**Therefore:**

$$C_V = \frac{\Delta U}{n\Delta T}$$

$C_V$ is the molar heat capacity at constant volume.

### At Constant Pressure (CP)

Process: Isobaric (P = constant)

- Work done: $W = P\Delta V = nR\Delta T$ (from ideal gas law)
- First Law: $Q = \Delta U + W$

$$Q = nC_V\Delta T + nR\Delta T$$

$$nC_P\Delta T = n(C_V + R)\Delta T$$

**Mayer’s Equation:**

$$C_P = C_V + R$$

This fundamental relation connects the two heat capacities!

---

## Values of CV and CP

### From Kinetic Theory

Internal energy of ideal gas with f degrees of freedom:

$$U = n \times \frac{f}{2}RT$$

Therefore:

$$C_V = \frac{1}{n}\frac{dU}{dT} = \frac{f}{2}R$$

### For Different Gases

| Gas Type | Degrees of Freedom (f) | $C_V$ | $C_P$ | $\gamma = C_P/C_V$ |
| --- | --- | --- | --- | --- |
| **Monatomic** (He, Ar) | 3 (translational) | $\frac{3}{2}R$ | $\frac{5}{2}R$ | $\frac{5}{3} ≈ 1.67$ |
| **Diatomic** (H₂, N₂, O₂) | 5 (3 trans + 2 rot) | $\frac{5}{2}R$ | $\frac{7}{2}R$ | $\frac{7}{5} = 1.4$ |
| **Polyatomic** (CO₂, NH₃) | 6+ | $3R$ or more | $4R$ or more | ≈ 1.33 |

**Key Relations:**

$$C_P - C_V = R$$

$$\gamma = \frac{C_P}{C_V}$$

$$C_V = \frac{R}{\gamma - 1}$$

$$C_P = \frac{\gamma R}{\gamma - 1}$$

### Memory Trick: “3-5-7 Rule”

For diatomic gases (most common in JEE):

- $C_V = \frac{5}{2}R$ → numerator **5**
- $C_P = \frac{7}{2}R$ → numerator **7**
- Difference: $7 - 5 = 2$ (which is 2R/2 = R) ✓

For monatomic:

- $C_V = \frac{3}{2}R$ → numerator **3**
- $C_P = \frac{5}{2}R$ → numerator **5**
- Difference: $5 - 3 = 2$ (which is 2R/2 = R) ✓

**Mnemonic:** “Mono 3-5, Di 5-7, difference always 2”

---

## The Ratio γ (Gamma)

### Definition

$$\gamma = \frac{C_P}{C_V}$$

Also written as: $\gamma = \frac{c_p}{c_v}$ (for specific heats)

### Importance in JEE

1. **Adiabatic processes:** $PV^\gamma = \text{constant}$
2. **Sound waves:** Speed $v = \sqrt{\frac{\gamma P}{\rho}}$
3. **Carnot efficiency:** Appears in temperature ratios
4. **Quick identification:** γ tells us gas type
   - γ = 5/3? → Monatomic
   - γ = 7/5? → Diatomic

### Properties of γ

1. $\gamma > 1$ always (since $C_P > C_V$)
2. $\gamma$ is dimensionless
3. For ideal gas: $\gamma$ depends only on molecular structure
4. Relation: $C_V = \frac{R}{\gamma - 1}$

---

## Mayer’s Equation - Deep Dive

### Derivation (Important for JEE Advanced)

Consider 1 mole of ideal gas heated at constant pressure:

**Heat supplied:**

$$Q = C_P \Delta T$$

**Change in internal energy:**

$$\Delta U = C_V \Delta T$$

**Work done by gas:**
From ideal gas law: $PV = RT$ (for 1 mole)

At constant P:

$$P\Delta V = R\Delta T$$

$$W = P\Delta V = R\Delta T$$

**First Law:**

$$Q = \Delta U + W$$

$$C_P\Delta T = C_V\Delta T + R\Delta T$$

$$\boxed{C_P - C_V = R}$$

This is **Mayer’s Equation** - valid for all ideal gases!

### Applications

1. Finding one from the other:

   - Given $C_V$: $C_P = C_V + R$
   - Given $C_P$: $C_V = C_P - R$
2. Finding γ:

   $$\gamma = \frac{C_V + R}{C_V} = 1 + \frac{R}{C_V}$$
3. Finding $C_V$ from γ:

   $$C_V = \frac{R}{\gamma - 1}$$

---

## Heat Supplied in Different Processes

### Summary Table

| Process | Constraint | Heat Supplied (Q) | Key Formula |
| --- | --- | --- | --- |
| **Isochoric** | V = const | $nC_V\Delta T$ | $Q = \Delta U$ |
| **Isobaric** | P = const | $nC_P\Delta T$ | $Q = \Delta U + P\Delta V$ |
| **Isothermal** | T = const | $nRT\ln(V_2/V_1)$ | $Q = W$ |
| **Adiabatic** | Q = 0 | 0 | $\Delta U = -W$ |

### Polytropic Process

General process: $PV^n = \text{constant}$

Molar heat capacity:

$$C_n = C_V\frac{\gamma - n}{1 - n}$$

**Special cases:**

- n = 0 (isobaric): $C_n = C_P$ ✓
- n = 1 (isothermal): $C_n = \infty$ (infinite heat for zero ΔT)
- n = γ (adiabatic): $C_n = 0$ ✓
- n = ∞ (isochoric): $C_n = C_V$ ✓

---

## Common Mistakes & Tricks

### Mistake 1: Using c instead of Cm

❌ Heat = $mc\Delta T$ for gases in moles
✅ Heat = $nC_m\Delta T$ for gases

**Remember:** For gases, always use molar quantities (n, $C_m$), not mass (m, c).

### Mistake 2: Forgetting R in Mayer’s Equation

❌ $C_P - C_V = k_B$ (Boltzmann constant)
✅ $C_P - C_V = R$ (gas constant)

**Trick:** “Mayer uses **R**egular gas constant”

### Mistake 3: Wrong γ for Gas Type

Air is primarily N₂ and O₂ (diatomic):
✅ $\gamma = 1.4$ for air
❌ $\gamma = 1.67$ (that’s monatomic)

### Mistake 4: Using CP in Isochoric Process

At constant volume:
✅ $Q = nC_V\Delta T$ (no work done)
❌ $Q = nC_P\Delta T$ (this is for constant pressure!)

### Memory Trick: “V for Volume, P for Pressure + work”

- **V**olume constant → Use $C_\mathbf{V}$ → No work → $Q = \Delta U$
- **P**ressure constant → Use $C_\mathbf{P}$ → Work done → $Q = \Delta U + W$

---

## Specific Heat of Solids and Liquids

### Dulong-Petit Law (Solids)

For most solid elements at room temperature:

$$C_V ≈ 3R ≈ 25 \text{ J/mol}\cdot\text{K}$$

**Why 3R?**

- Atoms vibrate in 3D: 6 degrees of freedom (3 kinetic + 3 potential)
- Average energy: $\frac{6}{2}kT = 3kT$ per atom
- For 1 mole: $U = 3RT$
- Therefore: $C_V = 3R$

### Specific Heat of Liquids

- Generally higher than solids
- Water has exceptionally high: 4186 J/kg·K
- No simple theory (molecules interact complexly)

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** Find $C_P$ for a gas with $C_V = 20$ J/mol·K. (R = 8.314 J/mol·K)

<details><summary>Solution</summary><p>Mayer’s Equation:</p>$$C_P = C_V + R$$<p></p>$$C_P = 20 + 8.314 = 28.314 \text{ J/mol}\cdot\text{K}$$<p>Also find γ:</p>$$\gamma = \frac{C_P}{C_V} = \frac{28.314}{20} = 1.416 ≈ 1.4$$<p>This suggests the gas is <strong>diatomic</strong>.</p></details>

**Q2.** 2 kg of water is heated from 20°C to 80°C. How much heat is required? (Specific heat of water = 4200 J/kg·K)

<details><summary>Solution</summary>$$Q = mc\Delta T$$<p></p>$$Q = 2 \times 4200 \times (80 - 20)$$<p></p>$$Q = 2 \times 4200 \times 60$$<p></p>$$Q = 504000 \text{ J} = 504 \text{ kJ}$$<p><strong>Note:</strong> For water, use mass and specific heat, not molar quantities.</p></details>

**Q3.** For a monatomic ideal gas, find the ratio $C_P/C_V$.

<details><summary>Solution</summary><p>Monatomic gas:</p><ul><li>$C_V = \frac{3}{2}R$</li><li>$C_P = C_V + R = \frac{3}{2}R + R = \frac{5}{2}R$</li></ul>$$\gamma = \frac{C_P}{C_V} = \frac{5/2 \, R}{3/2 \, R} = \frac{5}{3} ≈ 1.67$$<p><strong>This is the standard value for monatomic gases like He, Ar, Ne.</strong></p></details>

---

### Level 2: JEE Main/Advanced

**Q4.** One mole of an ideal gas ($\gamma = 1.4$) is heated at constant pressure from 300 K to 400 K. Find:
(a) Heat supplied
(b) Change in internal energy
(c) Work done

<details><summary>Solution</summary><p>Given: $\gamma = 1.4$ (diatomic), n = 1 mole, $\Delta T = 100$ K</p><p><strong>(a) Heat supplied at constant pressure:</strong></p><p>First find $C_P$:</p>$$C_V = \frac{R}{\gamma - 1} = \frac{8.314}{1.4 - 1} = \frac{8.314}{0.4} = 20.785 \text{ J/mol}\cdot\text{K}$$

$$C_P = C_V + R = 20.785 + 8.314 = 29.099 \text{ J/mol}\cdot\text{K}$$<p>Or directly: $C_P = \frac{\gamma R}{\gamma - 1} = \frac{1.4 \times 8.314}{0.4} = 29.099$ J/mol·K</p>$$Q = nC_P\Delta T = 1 \times 29.099 \times 100 = 2909.9 \text{ J}$$<p><strong>(b) Change in internal energy:</strong></p>$$\Delta U = nC_V\Delta T = 1 \times 20.785 \times 100 = 2078.5 \text{ J}$$<p><strong>(c) Work done:</strong></p>$$W = Q - \Delta U = 2909.9 - 2078.5 = 831.4 \text{ J}$$<p>Or directly: $W = nR\Delta T = 1 \times 8.314 \times 100 = 831.4$ J ✓</p><p><strong>Check:</strong> $C_P - C_V = 29.099 - 20.785 = 8.314 = R$ ✓</p></details>

**Q5.** An ideal gas has $C_V = 2.5R$. Identify the gas type and find $C_P$ and γ.

<details><summary>Solution</summary><p>Given: $C_V = 2.5R = \frac{5}{2}R$</p><p>This is <strong>diatomic</strong> gas (5 degrees of freedom).</p><p><strong>(a) Find $C_P$:</strong></p>$$C_P = C_V + R = \frac{5}{2}R + R = \frac{7}{2}R = 3.5R$$<p><strong>(b) Find γ:</strong></p>$$\gamma = \frac{C_P}{C_V} = \frac{7/2 \, R}{5/2 \, R} = \frac{7}{5} = 1.4$$<p><strong>Examples:</strong> H₂, N₂, O₂, air</p></details>

**Q6.** Two moles of a gas ($\gamma = 5/3$) are heated at constant volume from 300 K to 350 K. Find the heat required.

<details><summary>Solution</summary><p>$\gamma = 5/3$ → Monatomic gas</p>$$C_V = \frac{R}{\gamma - 1} = \frac{R}{5/3 - 1} = \frac{R}{2/3} = \frac{3R}{2}$$<p>Heat at constant volume:</p>$$Q = nC_V\Delta T$$<p></p>$$Q = 2 \times \frac{3}{2}R \times (350 - 300)$$<p></p>$$Q = 3R \times 50$$<p></p>$$Q = 150R$$<p></p>$$Q = 150 \times 8.314 = 1247.1 \text{ J}$$<p><strong>Alternative:</strong> If R = 8.314 J/mol·K</p>$$Q = 150 \times 8.314 ≈ 1247 \text{ J}$$</details>

---

### Level 3: JEE Advanced

**Q7.** A gas mixture contains 2 moles of monatomic gas and 3 moles of diatomic gas. Find the equivalent $C_V$, $C_P$, and γ for the mixture.

<details><summary>Solution</summary><p><strong>For monatomic:</strong> $C_{V1} = \frac{3}{2}R$, $n_1 = 2$</p><p><strong>For diatomic:</strong> $C_{V2} = \frac{5}{2}R$, $n_2 = 3$</p><p><strong>Equivalent $C_V$ for mixture:</strong>
Total internal energy change:</p>$$\Delta U = n_1C_{V1}\Delta T + n_2C_{V2}\Delta T$$<p></p>$$\Delta U = (n_1C_{V1} + n_2C_{V2})\Delta T$$<p>For total n = 5 moles:</p>$$\Delta U = nC_{V,mix}\Delta T = 5C_{V,mix}\Delta T$$<p>Therefore:</p>$$5C_{V,mix} = n_1C_{V1} + n_2C_{V2}$$<p></p>$$C_{V,mix} = \frac{2 \times \frac{3}{2}R + 3 \times \frac{5}{2}R}{5}$$<p></p>$$C_{V,mix} = \frac{3R + \frac{15R}{2}}{5} = \frac{6R + 15R}{10} = \frac{21R}{10} = 2.1R$$<p><strong>Find $C_P$:</strong></p>$$C_{P,mix} = C_{V,mix} + R = 2.1R + R = 3.1R$$<p><strong>Find γ:</strong></p>$$\gamma_{mix} = \frac{C_P}{C_V} = \frac{3.1R}{2.1R} = \frac{31}{21} ≈ 1.476$$<p><strong>Note:</strong> Mixture γ lies between 1.4 (diatomic) and 1.67 (monatomic). ✓</p></details>

**Q8.** Show that for an ideal gas undergoing a polytropic process $PV^n = \text{const}$, the molar heat capacity is:

$$C_n = C_V\frac{\gamma - n}{1 - n}$$

<details><summary>Solution</summary><p>For polytropic process: $PV^n = K$ (constant)</p><p><strong>Step 1:</strong> Relate P, V, T using ideal gas law</p><p>From $PV = nRT$:</p>$$P = \frac{nRT}{V}$$<p>Substitute in $PV^n = K$:</p>$$\frac{nRT}{V} \cdot V^n = K$$<p></p>$$nRT \cdot V^{n-1} = K$$<p></p>$$T \cdot V^{n-1} = \frac{K}{nR} = \text{const}$$<p>So: $TV^{n-1} = \text{const}$</p><p><strong>Step 2:</strong> Differentiate for small changes</p>$$T_1V_1^{n-1} = T_2V_2^{n-1}$$<p>For small changes:</p>$$d(TV^{n-1}) = 0$$<p></p>$$V^{n-1}dT + T(n-1)V^{n-2}dV = 0$$<p></p>$$V^{n-1}dT = -T(n-1)V^{n-2}dV$$<p></p>$$dT = -\frac{T(n-1)}{V}dV$$<p><strong>Step 3:</strong> Find work done</p>$$dW = PdV = \frac{nRT}{V}dV$$<p>For 1 mole (n = 1):</p>$$dW = \frac{RT}{V}dV$$<p><strong>Step 4:</strong> Apply First Law</p>$$dQ = dU + dW = C_VdT + \frac{RT}{V}dV$$<p>Substitute $dT = -\frac{T(n-1)}{V}dV$:</p>$$dQ = C_V\left(-\frac{T(n-1)}{V}dV\right) + \frac{RT}{V}dV$$<p></p>$$dQ = \frac{T}{V}[-C_V(n-1) + R]dV$$<p></p>$$dQ = \frac{T}{V}[R - C_V(n-1)]dV$$<p>Using $C_P = C_V + R$:</p>$$dQ = \frac{T}{V}[(C_P - C_V) - C_V(n-1)]dV$$<p></p>$$dQ = \frac{T}{V}[C_P - C_Vn]dV$$<p><strong>Step 5:</strong> Find heat capacity</p><p>From $dT = -\frac{T(n-1)}{V}dV$:</p>$$dV = -\frac{VdT}{T(n-1)}$$

$$dQ = \frac{T}{V}[C_P - C_Vn]\left(-\frac{VdT}{T(n-1)}\right)$$<p></p>$$dQ = -\frac{C_P - C_Vn}{n-1}dT$$<p></p>$$dQ = \frac{C_P - C_Vn}{1-n}dT$$<p>Therefore:</p>$$C_n = \frac{dQ}{dT} = \frac{C_P - C_Vn}{1-n}$$<p>Using $C_P = \gamma C_V$:</p>$$C_n = \frac{\gamma C_V - C_Vn}{1-n} = C_V\frac{\gamma - n}{1-n}$$<p><strong>Proved!</strong></p><p><strong>Verification of special cases:</strong></p><ul><li>n = 0: $C_n = C_V\frac{\gamma}{1} = \gamma C_V = C_P$ ✓ (isobaric)</li><li>n = γ: $C_n = C_V\frac{0}{1-\gamma} = 0$ ✓ (adiabatic)</li><li>n → ∞: $C_n → C_V$ ✓ (isochoric)</li></ul></details>

**Q9.** The molar heat capacity of a gas at constant pressure is $\frac{7}{2}R$. Find:
(a) Degrees of freedom
(b) Is it monoatomic or diatomic?
(c) Molar heat capacity at constant volume
(d) Speed of sound if pressure is P and density is ρ

<details><summary>Solution</summary><p>Given: $C_P = \frac{7}{2}R$</p><p><strong>(a) Find $C_V$:</strong></p>$$C_V = C_P - R = \frac{7}{2}R - R = \frac{5}{2}R$$<p><strong>(b) Degrees of freedom:</strong></p>$$C_V = \frac{f}{2}R$$<p></p>$$\frac{5}{2}R = \frac{f}{2}R$$<p></p>$$f = 5$$<p><strong>(c) Gas type:</strong>
5 degrees of freedom → <strong>Diatomic</strong> (3 translational + 2 rotational)</p><p><strong>(d) Find γ:</strong></p>$$\gamma = \frac{C_P}{C_V} = \frac{7/2}{5/2} = \frac{7}{5} = 1.4$$<p><strong>(e) Speed of sound:</strong></p>$$v = \sqrt{\frac{\gamma P}{\rho}}$$<p></p>$$v = \sqrt{\frac{1.4P}{\rho}}$$<p><strong>Numerical:</strong> If P = $10^5$ Pa, ρ = 1.29 kg/m³ (air at STP):</p>$$v = \sqrt{\frac{1.4 \times 10^5}{1.29}} = \sqrt{108527} ≈ 329 \text{ m/s}$$<p>Close to actual speed of sound in air (343 m/s at 20°C). ✓</p></details>

---

## Connection to Other Topics

### → First Law of Thermodynamics

Heat capacities used in calculating Q and ΔU:
[First Law →](../first-law/index.md)

### → Thermodynamic Processes

Different processes use different heat capacities:
[Processes →](../thermodynamic-processes/index.md)

### → Kinetic Theory

Degrees of freedom determine $C_V$:

$$C_V = \frac{f}{2}R$$

[Kinetic Theory →](../../kinetic-theory/index.md)

### → Adiabatic Process

γ is crucial for adiabatic equations:

$$PV^\gamma = \text{const}$$

### → Sound Waves

Speed of sound:

$$v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma RT}{M}}$$

### → Chemistry: Calorimetry

Specific heats in bomb calorimeter, coffee-cup calorimeter:
[Chemistry Thermodynamics →](../../../chemistry/thermodynamics/index.md)

---

## Quick Revision Formula Sheet

### Definitions:

$$c = \frac{Q}{m\Delta T}, \quad C_m = \frac{Q}{n\Delta T}$$

### Mayer’s Equation:

$$C_P - C_V = R$$

### Heat Capacity Ratio:

$$\gamma = \frac{C_P}{C_V}$$

### From Degrees of Freedom:

$$C_V = \frac{f}{2}R, \quad C_P = \left(\frac{f}{2} + 1\right)R$$

### Standard Values:

- Monatomic: $C_V = \frac{3}{2}R$, $C_P = \frac{5}{2}R$, $\gamma = \frac{5}{3}$
- Diatomic: $C_V = \frac{5}{2}R$, $C_P = \frac{7}{2}R$, $\gamma = \frac{7}{5}$

### Heat in Processes:

- Constant V: $Q = nC_V\Delta T$
- Constant P: $Q = nC_P\Delta T$

### Useful Relations:

$$C_V = \frac{R}{\gamma - 1}, \quad C_P = \frac{\gamma R}{\gamma - 1}$$

---

## JEE Strategy Tips

1. **Identify gas type** from $C_V$ or γ (monatomic vs diatomic)
2. **Always use Mayer’s equation** to find missing heat capacity
3. **Constant V → $C_V$, Constant P → $C_P$**
4. **For mixtures:** Use weighted average by moles
5. **Degrees of freedom:** f = 3 (mono), 5 (di), 6 (poly)
6. **Remember:** $C_P > C_V$ always for gases

---

**Next Topic:** [Thermodynamic Processes →](../thermodynamic-processes/index.md)

---

*Last updated: February 2025*

From TestGuru · our mock-test platform

## You've read Specific Heat and Molar Heat Capacity.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fphysics%2Fthermodynamics%2Fspecific-heat%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/thermodynamics/specific-heat/",this.page.identifier="/physics/thermodynamics/specific-heat/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424351766424"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424351766424")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/thermodynamics/specific-heat/](https://jeenotes.in/physics/thermodynamics/specific-heat/) · raw HTML: `offline/physics/thermodynamics/specific-heat/index.html`_
