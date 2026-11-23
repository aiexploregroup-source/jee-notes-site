---
title: "Entropy and Irreversibility"
source: "https://jeenotes.in/physics/thermodynamics/entropy/"
description: "Master entropy, reversible and irreversible processes, and the arrow of time for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 10"
html: "../../../../offline/physics/thermodynamics/entropy/index.html"
extracted: "2026-11-23"
---

> Master entropy, reversible and irreversible processes, and the arrow of time for JEE Main & Advanced

## Real-Life Hook: Why Can’t You Unscramble an Egg?

Drop an egg, and it splatters. Mix cream into coffee, and it spreads. Break a glass, and shards scatter. We’ve all seen these happen—but have you ever seen them reverse spontaneously?

The egg never reassembles itself. The cream never unmixes. The glass never repairs itself. **Why?**

The answer is **entropy**—the measure of disorder. The Second Law of Thermodynamics states: **Entropy of the universe always increases.** This gives time its arrow—the reason we remember the past but not the future, and why all processes have a preferred direction.

Understanding entropy explains:

- Why heat flows from hot to cold (never reversed)
- Why perpetual motion machines are impossible
- Why mixing is easy, unmixing is impossible
- Why engines can’t be 100% efficient
- The ultimate fate of the universe (heat death)

---

## What is Entropy?

### Definition

**Entropy (S):** A measure of the disorder or randomness of a system.

### Mathematical Definition

For a **reversible process**:

$$dS = \frac{dQ_{rev}}{T}$$

**Finite change:**

$$\Delta S = \int \frac{dQ_{rev}}{T}$$

**Units:** J/K (joules per kelvin)

**Note:** Temperature T must be in Kelvin!

### Key Properties

1. **State function:** Depends only on initial and final states, not path
2. **Extensive property:** Depends on amount of substance (like mass, volume)
3. **Never decreases** for isolated system (Second Law!)
4. **Increases for irreversible processes**
5. **Constant for reversible processes** in isolated system

---

## Entropy and Disorder

### Microscopic View

**Entropy measures the number of microstates** (arrangements) corresponding to a macrostate.

**Boltzmann’s formula:**

$$S = k_B \ln \Omega$$

where:

- $k_B$ = Boltzmann constant = $1.38 \times 10^{-23}$ J/K
- $\Omega$ = Number of microstates

### Examples

**1. Ice melting:**

- Ice: Molecules in rigid crystal structure (low disorder, low S)
- Water: Molecules move freely (high disorder, high S)
- Melting: S increases ✓

**2. Mixing gases:**

- Separated: Each gas in own compartment (lower S)
- Mixed: Gases spread throughout (higher S)
- Mixing: S increases ✓

**3. Breaking glass:**

- Intact: Atoms in ordered structure (low S)
- Broken: Fragments scattered randomly (high S)
- Breaking: S increases ✓

### Order vs Disorder

| System | Order | Entropy |
| --- | --- | --- |
| Crystal | High | Low |
| Liquid | Medium | Medium |
| Gas | Low | High |
| Dispersed | Very Low | Very High |

**General principle:** Disorder increases → Entropy increases

---

## The Second Law (Entropy Statement)

### Clausius Inequality

For any cyclic process:

$$\oint \frac{dQ}{T} \leq 0$$

- **Equality (=):** Reversible process
- **Inequality (<):** Irreversible process

### Entropy and Second Law

**For isolated system:**

$$\Delta S_{universe} \geq 0$$

**For any process:**

$$\Delta S_{system} + \Delta S_{surroundings} \geq 0$$

**Equality:** Reversible process
**Inequality:** Irreversible process

### Implications

1. **Entropy of universe always increases** (or stays constant)
2. **Reversible processes:** $\Delta S_{universe} = 0$
3. **Irreversible processes:** $\Delta S_{universe} > 0$
4. **No process can decrease** $S_{universe}$
5. **Direction of time:** Processes occur in direction of increasing entropy

---

## Calculating Entropy Changes

### For Different Processes

**1. Isothermal Process (T = constant)**

$$\Delta S = \frac{Q}{T}$$

For ideal gas isothermal expansion/compression:

$$\Delta S = nR\ln\frac{V_2}{V_1} = nR\ln\frac{P_1}{P_2}$$

**2. Adiabatic Process (Q = 0)**

For reversible adiabatic:

$$\Delta S = 0$$

(isentropic process)

For irreversible adiabatic:

$$\Delta S > 0$$

**3. Isochoric Process (V = constant)**

$$\Delta S = \int_{T_1}^{T_2} \frac{nC_V dT}{T} = nC_V\ln\frac{T_2}{T_1}$$

**4. Isobaric Process (P = constant)**

$$\Delta S = \int_{T_1}^{T_2} \frac{nC_P dT}{T} = nC_P\ln\frac{T_2}{T_1}$$

**5. Phase Change (at constant T and P)**

$$\Delta S = \frac{Q}{T} = \frac{mL}{T}$$

where L = latent heat

**Example:** Melting ice at 0°C (273 K)

$$\Delta S = \frac{mL_f}{273}$$

---

## Entropy in Different Processes

### Reversible vs Irreversible

**Reversible process:**

- Quasi-static (infinitely slow)
- Always in equilibrium
- $\Delta S_{universe} = 0$
- Can be reversed with no net change

**Irreversible process:**

- Finite speed
- Not always in equilibrium
- $\Delta S_{universe} > 0$
- Cannot be reversed without leaving trace

### Examples

**Reversible:**

- Carnot cycle (theoretical)
- Slow compression with heat bath

**Irreversible:**

- Free expansion (gas into vacuum)
- Heat flow across finite ΔT
- Friction
- Mixing of gases
- **All real processes!**

---

## Entropy Change for Ideal Gas

### General Formula

For ideal gas going from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$:

$$\Delta S = nC_V\ln\frac{T_2}{T_1} + nR\ln\frac{V_2}{V_1}$$

**Or:**

$$\Delta S = nC_P\ln\frac{T_2}{T_1} - nR\ln\frac{P_2}{P_1}$$

**Or:**

$$\Delta S = nC_V\ln\frac{P_2}{P_1} + nC_P\ln\frac{V_2}{V_1}$$

### Derivation

From First Law: $dU = dQ - dW$

For reversible process: $dQ = dU + PdV$

For ideal gas: $dU = nC_VdT$, $PV = nRT$

$$dQ = nC_VdT + \frac{nRT}{V}dV$$

$$dS = \frac{dQ}{T} = \frac{nC_VdT}{T} + \frac{nRdV}{V}$$

Integrate:

$$\Delta S = nC_V\ln\frac{T_2}{T_1} + nR\ln\frac{V_2}{V_1}$$

---

## Special Cases

### 1. Free Expansion

**Setup:** Gas expands into vacuum (no external pressure)

**Observations:**

- $Q = 0$ (isolated)
- $W = 0$ (no external pressure)
- $\Delta U = 0$ (from First Law)
- $\Delta T = 0$ (for ideal gas)

**But volumes change:** $V_1 \to V_2$

**Entropy change:**

$$\Delta S = nR\ln\frac{V_2}{V_1} > 0$$

**Key point:** Entropy increases even though Q = 0!

- Process is **irreversible**
- $\Delta S_{universe} > 0$

### 2. Heat Flow Across Finite ΔT

**Setup:** Heat Q flows from hot body ($T_H$) to cold body ($T_C$)

**Entropy changes:**

- Hot body: $\Delta S_H = -\frac{Q}{T_H}$ (loses heat)
- Cold body: $\Delta S_C = +\frac{Q}{T_C}$ (gains heat)

**Total:**

$$\Delta S_{total} = \Delta S_C + \Delta S_H = \frac{Q}{T_C} - \frac{Q}{T_H}$$

Since $T_C < T_H$:

$$\Delta S_{total} = Q\left(\frac{1}{T_C} - \frac{1}{T_H}\right) > 0$$

**Entropy increases!** Process is irreversible.

### 3. Mixing of Ideal Gases

**Setup:** Two gases at same T, P in separate compartments, partition removed

**Entropy of mixing:**

$$\Delta S_{mix} = -nR(x_1\ln x_1 + x_2\ln x_2)$$

where $x_1$, $x_2$ are mole fractions.

Always positive! (since $\ln x < 0$ for $x < 1$)

---

## Carnot Cycle and Entropy

### Entropy Changes in Carnot Cycle

**Step 1: Isothermal expansion at $T_H$**

$$\Delta S_1 = \frac{Q_H}{T_H}$$

**Step 2: Adiabatic expansion**

$$\Delta S_2 = 0$$

**Step 3: Isothermal compression at $T_C$**

$$\Delta S_3 = -\frac{Q_C}{T_C}$$

**Step 4: Adiabatic compression**

$$\Delta S_4 = 0$$

**Net entropy change of gas:**

$$\Delta S_{gas} = \frac{Q_H}{T_H} - \frac{Q_C}{T_C}$$

For Carnot cycle: $\frac{Q_H}{T_H} = \frac{Q_C}{T_C}$ (can prove from efficiency)

Therefore:

$$\Delta S_{gas} = 0$$

**Gas returns to same state → Entropy unchanged** ✓

### Entropy of Surroundings

**Hot reservoir:** Loses $Q_H$ at $T_H$

$$\Delta S_H = -\frac{Q_H}{T_H}$$

**Cold reservoir:** Gains $Q_C$ at $T_C$

$$\Delta S_C = +\frac{Q_C}{T_C}$$

**Total:**

$$\Delta S_{universe} = \Delta S_{gas} + \Delta S_H + \Delta S_C$$

$$= 0 - \frac{Q_H}{T_H} + \frac{Q_C}{T_C} = 0$$

**For Carnot (reversible) cycle: $\Delta S_{universe} = 0$** ✓

**For real (irreversible) engine: $\Delta S_{universe} > 0$**

---

## Temperature-Entropy (T-S) Diagram

### Why T-S Diagrams?

Just like P-V diagrams show work, **T-S diagrams** are useful for heat!

**On T-S diagram:**

- Area under curve = Heat absorbed/rejected
- Reversible process: Smooth curve
- Irreversible process: Doesn’t have unique path

### Carnot Cycle on T-S Diagram

**Shape:** Rectangle!

- Top: Isothermal at $T_H$ (horizontal line)
- Bottom: Isothermal at $T_C$ (horizontal line)
- Sides: Adiabatic (vertical lines, since $\Delta S = 0$)

**Area = Net work = $W = (T_H - T_C)(S_2 - S_1)$**

Beautiful symmetry with P-V diagram!

---

## Common Mistakes & Tricks

### Mistake 1: Confusing Entropy with Energy

❌ High entropy = High energy
✅ High entropy = High disorder

Energy and entropy are different!

- Energy: How much (quantity)
- Entropy: How spread out (quality)

### Mistake 2: Thinking ΔS Can Be Negative

❌ Entropy can never decrease
✅ Entropy of **isolated system** never decreases

**Local entropy can decrease** (like freezing water), but **universe entropy increases**!

### Mistake 3: Using °C in Entropy Formulas

❌ $\Delta S = Q/T$ with T in °C
✅ Always use Kelvin!

Temperature must be absolute (Kelvin) in all thermodynamic formulas.

### Mistake 4: ΔS = 0 Means Reversible

❌ If $\Delta S_{system} = 0$, process is reversible
✅ Need $\Delta S_{universe} = 0$ for reversible

Check system + surroundings!

### Mistake 5: Adiabatic Always Means ΔS = 0

❌ Adiabatic → $\Delta S = 0$
✅ **Reversible** adiabatic → $\Delta S = 0$

**Irreversible** adiabatic (like free expansion) → $\Delta S > 0$!

### Memory Trick: “SUDS”

**S**pontaneous processes increase **U**niverse’s **D**isorder (**S**entropy)

### Trick: “Heat Flow”

Heat flows from hot to cold because:

$$\Delta S = \frac{Q}{T_C} - \frac{Q}{T_H} > 0$$

Smaller T → Bigger $\Delta S$ when gaining heat!

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** 100 g of ice at 0°C melts to water at 0°C. Find the entropy change. (Latent heat of fusion = 336 J/g)

<details><summary>Solution</summary><p>Temperature: $T = 0°C = 273$ K</p><p>Heat absorbed: $Q = mL = 100 \times 336 = 33600$ J</p><p><strong>Entropy change:</strong></p>$$\Delta S = \frac{Q}{T} = \frac{33600}{273} = 123.1 \text{ J/K}$$<p><strong>Entropy increases</strong> (ice is more ordered than water).</p></details>

**Q2.** One mole of ideal gas expands isothermally at 300 K from 1 L to 5 L. Find entropy change.

<details><summary>Solution</summary><p>For isothermal process:</p>$$\Delta S = nR\ln\frac{V_2}{V_1}$$<p></p>$$\Delta S = 1 \times 8.314 \times \ln(5)$$<p></p>$$\Delta S = 8.314 \times 1.609 = 13.38 \text{ J/K}$$<p><strong>Entropy increases</strong> (gas expands, more disorder).</p></details>

**Q3.** In which process does entropy of the system remain constant?
(a) Isothermal
(b) Adiabatic reversible
(c) Isobaric
(d) Isochoric

<details><summary>Solution</summary><p><strong>(b) Adiabatic reversible</strong></p><p>In reversible adiabatic process:</p><ul><li>$Q = 0$ (adiabatic)</li><li>$\Delta S = \int dQ/T = 0$</li></ul><p>Also called <strong>isentropic</strong> process.</p><p>Other processes change entropy.</p></details>

---

### Level 2: JEE Main/Advanced

**Q4.** 1 kg of water at 50°C is mixed with 1 kg of water at 30°C in an insulated container. Find the total entropy change. (Specific heat of water = 4200 J/kg·K)

<details><summary>Solution</summary><p><strong>Find final temperature:</strong></p><p>Heat lost by hot water = Heat gained by cold water:</p>$$mc(50 - T_f) = mc(T_f - 30)$$<p></p>$$50 - T_f = T_f - 30$$<p></p>$$T_f = 40°C = 313 \text{ K}$$<p><strong>Entropy change of hot water:</strong></p>$$\Delta S_1 = mc\ln\frac{T_f}{T_1} = 1 \times 4200 \times \ln\frac{313}{323}$$<p></p>$$= 4200 \times \ln(0.969) = 4200 \times (-0.0315)$$<p></p>$$= -132.3 \text{ J/K}$$<p><strong>Entropy change of cold water:</strong></p>$$\Delta S_2 = mc\ln\frac{T_f}{T_2} = 1 \times 4200 \times \ln\frac{313}{303}$$<p></p>$$= 4200 \times \ln(1.033) = 4200 \times 0.0325$$<p></p>$$= 136.5 \text{ J/K}$$<p><strong>Total entropy change:</strong></p>$$\Delta S_{total} = \Delta S_1 + \Delta S_2 = -132.3 + 136.5$$<p></p>$$= 4.2 \text{ J/K}$$<p><strong>Positive!</strong> As expected for irreversible process (heat flow across finite ΔT).</p></details>

**Q5.** One mole of ideal gas ($\gamma = 1.4$) expands adiabatically from (2 atm, 300 K) to 1 atm. Find:
(a) Final temperature
(b) Entropy change if process is reversible
(c) Entropy change if process is free expansion

<details><summary>Solution</summary><p><strong>(a) Final temperature:</strong></p><p>For adiabatic: $TP^{(\gamma-1)/\gamma} = \text{const}$</p>$$T_2 = T_1\left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma}$$<p></p>$$T_2 = 300 \times \left(\frac{1}{2}\right)^{0.4/1.4}$$<p></p>$$T_2 = 300 \times (0.5)^{2/7} = 300 \times 0.82 = 246 \text{ K}$$<p><strong>(b) Reversible adiabatic:</strong></p>$$\Delta S = 0$$<p>(isentropic)</p><p><strong>(c) Free expansion:</strong></p><p>Even though Q = 0, process is irreversible!</p><p>Find volumes using ideal gas law:</p>$$V_1 = \frac{nRT_1}{P_1} = \frac{1 \times 8.314 \times 300}{2 \times 10^5}$$<p>For free expansion: $\Delta U = 0$ → $\Delta T = 0$ (ideal gas)</p><p>So $T_2 = T_1 = 300$ K (not 246 K!)</p>$$V_2 = \frac{nRT_2}{P_2} = \frac{1 \times 8.314 \times 300}{1 \times 10^5}$$

$$\frac{V_2}{V_1} = \frac{P_1}{P_2} = \frac{2}{1} = 2$$

$$\Delta S = nR\ln\frac{V_2}{V_1} = 1 \times 8.314 \times \ln(2)$$<p></p>$$= 8.314 \times 0.693 = 5.76 \text{ J/K}$$<p><strong>Free expansion is irreversible</strong> → $\Delta S &gt; 0$ ✓</p></details>

**Q6.** A Carnot engine operates between 400 K and 300 K. It absorbs 1000 J from hot reservoir. Find:
(a) Entropy change of hot reservoir
(b) Entropy change of cold reservoir
(c) Entropy change of universe

<details><summary>Solution</summary><p><strong>Carnot engine:</strong></p>$$\eta = 1 - \frac{300}{400} = 0.25$$

$$W = 0.25 \times 1000 = 250 \text{ J}$$

$$Q_C = Q_H - W = 1000 - 250 = 750 \text{ J}$$<p><strong>(a) Hot reservoir:</strong>
Loses 1000 J at 400 K:</p>$$\Delta S_H = -\frac{1000}{400} = -2.5 \text{ J/K}$$<p><strong>(b) Cold reservoir:</strong>
Gains 750 J at 300 K:</p>$$\Delta S_C = \frac{750}{300} = 2.5 \text{ J/K}$$<p><strong>(c) Universe:</strong></p>$$\Delta S_{universe} = \Delta S_H + \Delta S_C + \Delta S_{gas}$$<p></p>$$= -2.5 + 2.5 + 0 = 0$$<p><strong>Reversible process</strong> → $\Delta S_{universe} = 0$ ✓</p><p><strong>If engine were irreversible:</strong> $\Delta S_{universe} &gt; 0$</p></details>

---

### Level 3: JEE Advanced

**Q7.** Two identical bodies at temperatures $T_1$ and $T_2$ are brought into thermal contact. Find the entropy change when they reach equilibrium. Show that $\Delta S > 0$ if $T_1 \neq T_2$.

<details><summary>Solution</summary><p><strong>Final temperature:</strong></p><p>By energy conservation (equal heat capacities):</p>$$T_f = \frac{T_1 + T_2}{2}$$<p><strong>Entropy change:</strong></p><p>Each body: $\Delta S = C\ln(T_f/T_i)$</p>$$\Delta S_{total} = C\ln\frac{T_f}{T_1} + C\ln\frac{T_f}{T_2}$$<p></p>$$= C\ln\frac{T_f^2}{T_1T_2}$$<p>Substitute $T_f = (T_1 + T_2)/2$:</p>$$\Delta S = C\ln\frac{(T_1 + T_2)^2}{4T_1T_2}$$<p><strong>Prove positive:</strong></p><p>Need to show: $(T_1 + T_2)^2 &gt; 4T_1T_2$</p>$$T_1^2 + 2T_1T_2 + T_2^2 &gt; 4T_1T_2$$<p></p>$$T_1^2 - 2T_1T_2 + T_2^2 &gt; 0$$<p></p>$$(T_1 - T_2)^2 &gt; 0$$<p>This is <strong>always true</strong> if $T_1 \neq T_2$!</p><p>Therefore: <strong>$\Delta S &gt; 0$</strong> ✓</p><p><strong>Special case:</strong> If $T_1 = T_2$ (already in equilibrium):</p>$$(T_1 - T_2)^2 = 0$$<p>→ $\Delta S = 0$ ✓</p><p><strong>Conclusion:</strong> Entropy increases for irreversible process (heat flow across ΔT).</p></details>

**Q8.** Show that for Carnot cycle, $\oint dQ/T = 0$.

<details><summary>Solution</summary><p><strong>Carnot cycle:</strong></p><p><strong>Process 1-2 (Isothermal at $T_H$):</strong></p>$$\int_1^2 \frac{dQ}{T} = \frac{Q_H}{T_H}$$<p><strong>Process 2-3 (Adiabatic):</strong></p>$$\int_2^3 \frac{dQ}{T} = 0$$<p>(since Q = 0)</p><p><strong>Process 3-4 (Isothermal at $T_C$):</strong></p>$$\int_3^4 \frac{dQ}{T} = \frac{-Q_C}{T_C}$$<p>(Negative because heat is rejected)</p><p><strong>Process 4-1 (Adiabatic):</strong></p>$$\int_4^1 \frac{dQ}{T} = 0$$<p><strong>Total:</strong></p>$$\oint \frac{dQ}{T} = \frac{Q_H}{T_H} - \frac{Q_C}{T_C}$$<p><strong>For Carnot engine:</strong></p><p>From efficiency: $\eta = 1 - \frac{Q_C}{Q_H} = 1 - \frac{T_C}{T_H}$</p><p>Therefore: $\frac{Q_C}{Q_H} = \frac{T_C}{T_H}$</p><p>Or: $\frac{Q_H}{T_H} = \frac{Q_C}{T_C}$</p><p><strong>Substitute:</strong></p>$$\oint \frac{dQ}{T} = \frac{Q_H}{T_H} - \frac{Q_C}{T_C} = 0$$<p><strong>Proved!</strong></p><p>This is <strong>Clausius theorem</strong> for reversible cycle.</p><p><strong>For irreversible cycle:</strong> $\oint dQ/T &lt; 0$</p></details>

**Q9.** A gas undergoes free expansion from volume $V$ to $2V$. Calculate entropy change:
(a) For the gas
(b) For the surroundings
(c) For the universe

<details><summary>Solution</summary><p><strong>Free expansion:</strong></p><ul><li>Gas expands into vacuum</li><li>$Q = 0$ (isolated)</li><li>$W = 0$ (no external pressure)</li><li>$\Delta U = 0$ → $\Delta T = 0$ (ideal gas)</li></ul><p><strong>(a) Entropy of gas:</strong></p><p>Even though Q = 0, entropy increases (irreversible!):</p>$$\Delta S_{gas} = nR\ln\frac{V_2}{V_1} = nR\ln\frac{2V}{V}$$<p></p>$$= nR\ln 2 = 0.693nR$$<p><strong>(b) Entropy of surroundings:</strong></p><p>Since system is isolated:</p>$$\Delta S_{surr} = 0$$<p><strong>(c) Entropy of universe:</strong></p>$$\Delta S_{univ} = \Delta S_{gas} + \Delta S_{surr}$$<p></p>$$= 0.693nR + 0 = 0.693nR &gt; 0$$<p><strong>Key insight:</strong> Entropy increases even with Q = 0!</p><ul><li>Process is irreversible</li><li>Second Law: $\Delta S_{univ} &gt; 0$ ✓</li></ul><p><strong>Contrast with reversible expansion:</strong>
For reversible isothermal expansion (same $\Delta V$):</p><ul><li>Gas: $\Delta S = nR\ln 2$ (same!)</li><li>Surroundings: $\Delta S = -nR\ln 2$ (absorbs work as heat)</li><li>Universe: $\Delta S = 0$ (reversible)</li></ul></details>

**Q10.** Prove that efficiency of Carnot engine can be written as:

$$\eta = 1 - \frac{T_C}{T_H}$$

using entropy considerations.

<details><summary>Solution</summary><p><strong>For Carnot cycle (reversible):</strong></p><p>Net entropy change = 0 (returns to same state):</p>$$\Delta S_{cycle} = 0$$<p><strong>Entropy changes:</strong></p><p><strong>From hot reservoir ($T_H$):</strong></p>$$\Delta S_1 = \frac{Q_H}{T_H}$$<p>(Entropy gained from hot source)</p><p><strong>To cold reservoir ($T_C$):</strong></p>$$\Delta S_2 = -\frac{Q_C}{T_C}$$<p>(Entropy lost to cold sink, negative sign because rejected)</p><p><strong>Total:</strong></p>$$\Delta S_{cycle} = \frac{Q_H}{T_H} - \frac{Q_C}{T_C} = 0$$<p>Therefore:</p>$$\frac{Q_H}{T_H} = \frac{Q_C}{T_C}$$

$$\frac{Q_C}{Q_H} = \frac{T_C}{T_H}$$<p><strong>Efficiency:</strong></p>$$\eta = 1 - \frac{Q_C}{Q_H} = 1 - \frac{T_C}{T_H}$$<p><strong>Proved!</strong></p><p><strong>This shows:</strong> Carnot efficiency follows directly from entropy being state function (cycle returns to same S).</p><p><strong>For irreversible engine:</strong></p>$$\Delta S_{univ} &gt; 0$$<p></p>$$\frac{Q_H}{T_H} - \frac{Q_C}{T_C} &lt; 0$$<p></p>$$\frac{Q_C}{Q_H} &gt; \frac{T_C}{T_H}$$<p></p>$$\eta = 1 - \frac{Q_C}{Q_H} &lt; 1 - \frac{T_C}{T_H}$$<p><strong>Irreversible efficiency is lower!</strong> ✓</p></details>

---

## Connection to Other Topics

### → Second Law of Thermodynamics

Entropy is alternative statement of Second Law:
[Second Law →](../second-law/index.md)

### → Heat Engines

Carnot efficiency from entropy considerations:
[Heat Engines →](../heat-engines/index.md)

### → Thermodynamic Processes

Entropy changes in different processes:
[Processes →](../thermodynamic-processes/index.md)

### → Statistical Mechanics

Boltzmann’s formula connects entropy to microstates:

$$S = k_B\ln\Omega$$

---

## Philosophical Implications

### The Arrow of Time

**Why does time flow forward?**

Entropy! The increase of entropy defines the direction of time:

- Past: Lower entropy (more ordered)
- Future: Higher entropy (more disordered)

We remember the past but not the future because:

- Our brain creates memories (ordered structures) from disordered surroundings
- This only works in direction of increasing entropy
- Reversing time would require decreasing universe entropy (forbidden!)

### Heat Death of Universe

If entropy always increases, what’s the endgame?

**Heat death:** State of maximum entropy

- No temperature differences
- No energy gradients
- No work possible
- Universe reaches thermal equilibrium

Estimated: Trillions of years from now!

---

## Quick Revision Formula Sheet

### Definition:

$$dS = \frac{dQ_{rev}}{T}, \quad \Delta S = \int \frac{dQ_{rev}}{T}$$

### Second Law:

$$\Delta S_{universe} \geq 0$$

- Equality: Reversible
- Inequality: Irreversible

### Ideal Gas:

$$\Delta S = nC_V\ln\frac{T_2}{T_1} + nR\ln\frac{V_2}{V_1}$$

### Isothermal:

$$\Delta S = \frac{Q}{T} = nR\ln\frac{V_2}{V_1}$$

### Phase Change:

$$\Delta S = \frac{mL}{T}$$

### Reversible Adiabatic:

$$\Delta S = 0$$

(isentropic)

### Clausius Inequality:

$$\oint \frac{dQ}{T} \leq 0$$

- Reversible: = 0
- Irreversible: < 0

---

## JEE Strategy Tips

1. **Always use Kelvin** in entropy calculations
2. **State function:** ΔS depends only on initial and final states
3. **Isolated system:** ΔS ≥ 0 (never negative!)
4. **Reversible adiabatic:** ΔS = 0 (isentropic)
5. **Free expansion:** ΔS > 0 even though Q = 0
6. **For universe:** Check system + surroundings
7. **Carnot cycle:** ΔS = 0 for gas, universe

---

**Back to:** [Thermodynamics Introduction](../index.md)

---

*Last updated: February 2025*

From TestGuru · our mock-test platform

## You've read Entropy and Irreversibility.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fphysics%2Fthermodynamics%2Fentropy%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/thermodynamics/entropy/",this.page.identifier="/physics/thermodynamics/entropy/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424298821366"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424298821366")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/thermodynamics/entropy/](https://jeenotes.in/physics/thermodynamics/entropy/) · raw HTML: `offline/physics/thermodynamics/entropy/index.html`_
