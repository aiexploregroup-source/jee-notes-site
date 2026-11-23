---
title: "Moving Coil Galvanometer: The Art of Measuring Current"
source: "https://jeenotes.in/physics/magnetism/galvanometer/"
description: "Master moving coil galvanometers, conversion to ammeters and voltmeters, and current measurement principles for JEE"
updated: "2026-08-01"
reading_time: "17 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 9"
html: "../../../../offline/physics/magnetism/galvanometer/index.html"
extracted: "2026-11-23"
---

> Master moving coil galvanometers, conversion to ammeters and voltmeters, and current measurement principles for JEE

# Moving Coil Galvanometer: The Art of Measuring Current

## Movie Hook: Tony Stark’s Arc Reactor Diagnostics

In Iron Man 2, Tony constantly monitors his Arc Reactor’s output - voltage, current, power levels. How do these meters work? At their heart is a brilliant application of electromagnetism: the **moving coil galvanometer**. When current flows through a coil in a magnetic field, it experiences torque proportional to the current. This simple principle lets us measure the tiniest currents with incredible precision!

## The Big Picture

**What’s the Deal?**

- Galvanometer is the basic current-measuring instrument
- Uses torque on a current-carrying coil in a magnetic field
- Can be converted to ammeter (low resistance) or voltmeter (high resistance)
- Understanding this unlocks all analog electrical measurements

**JEE Perspective:**

- JEE Main: Working principle, sensitivity, ammeter/voltmeter conversion
- JEE Advanced: Shunt calculations, series resistance, error analysis, combinations

---

## Core Concept: Moving Coil Galvanometer

### Construction

**Key Components:**

1. **Coil:** Rectangular, many turns (N), mounted on spindle
2. **Magnetic field:** Radial (always perpendicular to coil sides)
3. **Soft iron core:** Cylindrical, makes field radial and uniform
4. **Spring:** Provides restoring torque
5. **Pointer:** Attached to coil, moves over scale

**Radial Field - The Secret Sauce:**

- Magnetic field is always perpendicular to the plane of the coil
- Achieved by cylindrical soft iron core inside coil
- This makes torque proportional to current (not sin θ)!

### Working Principle

**When current I flows through coil:**

**Deflecting torque:**

$$\tau_{\text{mag}} = NIBA$$

where:

- N = number of turns
- I = current
- B = magnetic field strength
- A = area of coil

**Key Feature:** Since field is radial, this torque is constant (doesn’t depend on angle θ)!

**Restoring torque from spring:**

$$\tau_{\text{spring}} = k\theta$$

where:

- k = torsional constant of spring (N·m/rad)
- θ = angular deflection

**At equilibrium:**

$$NIBA = k\theta$$

$$\boxed{\theta = \frac{NIBA}{k} \cdot I = CI}$$

where $C = \frac{NBA}{k}$ is a constant

**Linear Relationship:** Deflection ∝ Current (that’s why scale is uniform!)

---

## Sensitivity: How Good is Your Galvanometer?

### Current Sensitivity

**Definition:** Deflection per unit current

$$\boxed{S_I = \frac{\theta}{I} = \frac{NBA}{k}}$$

**Unit:** rad/A or divisions/A

### Interactive Demo: Galvanometer in Action

See how current causes coil deflection in a magnetic field for precise measurements.

**To increase current sensitivity:**

- **Increase N:** More turns
- **Increase B:** Stronger magnet
- **Increase A:** Larger coil area
- **Decrease k:** Weaker spring (more flexible)

**Trade-off:** Very sensitive galvanometer is fragile and has limited range!

### Voltage Sensitivity

**Definition:** Deflection per unit voltage across galvanometer

$$S_V = \frac{\theta}{V} = \frac{\theta}{IG}$$

where G is galvanometer resistance

$$\boxed{S_V = \frac{S_I}{G} = \frac{NBA}{kG}}$$

**Unit:** rad/V or divisions/V

**To increase voltage sensitivity:**

- Same as current sensitivity, plus
- **Decrease G:** Lower coil resistance

### Figure of Merit

**Definition:** Current required for one division deflection

$$\boxed{k_g = \frac{I}{\theta} = \frac{1}{S_I}}$$

**Unit:** A/division

**Lower figure of merit** = **Higher sensitivity** (less current needed for deflection)

---

## Conversion to Ammeter

### The Challenge

**Problem:** Galvanometer can measure only small currents (typically μA to mA)

**Solution:** Use a **shunt** - low resistance in parallel

### Shunt Resistance Calculation

**Setup:**

- Galvanometer: resistance G, full-scale current I_g
- Required range: 0 to I amperes
- Shunt resistance: S (to be calculated)

**At full scale:**

- Current through galvanometer: I_g
- Current through shunt: (I - I_g)
- Voltage across both same (parallel)

**Voltage equation:**

$$I_g G = (I - I_g)S$$

$$\boxed{S = \frac{I_g G}{I - I_g} = \frac{G}{n-1}}$$

where $n = \frac{I}{I_g}$ is the multiplication factor

**Key Features:**

- **S < G** (shunt has lower resistance)
- **Most current flows through shunt**
- **Galvanometer protected from large currents**

**Effective resistance of ammeter:**

$$\boxed{R_A = \frac{GS}{G+S} = \frac{G}{n}}$$

**Ideal ammeter:** $R_A \approx 0$ (very low resistance, doesn’t affect circuit)

### Example Calculation

**Given:** G = 100 Ω, I_g = 1 mA, convert to 0-1 A range

**Find:** n = I/I_g = 1/0.001 = 1000

$$S = \frac{G}{n-1} = \frac{100}{999} = 0.1001 \text{ Ω} \approx 0.1 \text{ Ω}$$

**Effective resistance:**

$$R_A = \frac{100}{1000} = 0.1 \text{ Ω}$$

**Result:** 99.9% of current flows through shunt!

---

## Conversion to Voltmeter

### The Challenge

**Problem:** Galvanometer gives full deflection for small voltage (V_g = I_g × G)

**Solution:** Connect **high resistance in series**

### Series Resistance Calculation

**Setup:**

- Galvanometer: resistance G, full-scale current I_g
- Required range: 0 to V volts
- Series resistance: R (to be calculated)

**At full scale:**

- Current through circuit: I_g (limited by galvanometer)
- Voltage across galvanometer: I_g G
- Voltage across series resistor: I_g R
- Total voltage: V

**Voltage equation:**

$$V = I_g(G + R)$$

$$\boxed{R = \frac{V}{I_g} - G = \frac{V - I_g G}{I_g}}$$

**Alternative form:**

$$\boxed{R = (m-1)G}$$

where $m = \frac{V}{I_g G}$ is the multiplication factor

**Key Features:**

- **R » G** (series resistance is much larger)
- **Limits current to safe value**
- **Voltage divided between G and R**

**Effective resistance of voltmeter:**

$$\boxed{R_V = G + R = mG = \frac{V}{I_g}}$$

**Ideal voltmeter:** $R_V \to \infty$ (very high resistance, draws negligible current)

### Example Calculation

**Given:** G = 100 Ω, I_g = 1 mA, convert to 0-10 V range

**Find:**

$$R = \frac{V}{I_g} - G = \frac{10}{0.001} - 100 = 10,000 - 100 = 9,900 \text{ Ω}$$

**Effective resistance:**

$$R_V = 10,000 \text{ Ω} = 10 \text{ kΩ}$$

**Result:** Very high resistance, draws only 1 mA at full scale!

---

## Interactive Demo: Shunt and Series Calculations

```python
import numpy as np
import matplotlib.pyplot as plt

def calculate_shunt(G, I_g, I_range):
    """Calculate shunt resistance for ammeter"""
    S = (I_g * G) / (I_range - I_g)
    R_A = (G * S) / (G + S)
    return S, R_A

def calculate_series(G, I_g, V_range):
    """Calculate series resistance for voltmeter"""
    R = (V_range / I_g) - G
    R_V = G + R
    return R, R_V

# Galvanometer specifications
G = 100  # Ohms
I_g = 1e-3  # 1 mA

# Ammeter conversions
ammeter_ranges = np.array([0.01, 0.1, 1, 10, 100])  # Amperes
shunts = []
R_ammeters = []

for I in ammeter_ranges:
    S, R_A = calculate_shunt(G, I_g, I)
    shunts.append(S)
    R_ammeters.append(R_A)

# Voltmeter conversions
voltmeter_ranges = np.array([1, 10, 100, 1000])  # Volts
series_R = []
R_voltmeters = []

for V in voltmeter_ranges:
    R, R_V = calculate_series(G, I_g, V)
    series_R.append(R)
    R_voltmeters.append(R_V)

# Plotting
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Plot 1: Shunt vs Range
axes[0, 0].loglog(ammeter_ranges, shunts, 'o-', linewidth=2, markersize=8, color='darkblue')
axes[0, 0].set_xlabel('Ammeter Range (A)', fontsize=11)
axes[0, 0].set_ylabel('Shunt Resistance (Ω)', fontsize=11)
axes[0, 0].set_title('Shunt Resistance vs Ammeter Range', fontsize=12, fontweight='bold')
axes[0, 0].grid(True, alpha=0.3)

# Plot 2: Ammeter Resistance
axes[0, 1].loglog(ammeter_ranges, R_ammeters, 's-', linewidth=2, markersize=8, color='darkgreen')
axes[0, 1].set_xlabel('Ammeter Range (A)', fontsize=11)
axes[0, 1].set_ylabel('Effective Resistance (Ω)', fontsize=11)
axes[0, 1].set_title('Ammeter Effective Resistance', fontsize=12, fontweight='bold')
axes[0, 1].grid(True, alpha=0.3)
axes[0, 1].axhline(y=1, color='red', linestyle='--', label='Target: ≈0')

# Plot 3: Series R vs Range
axes[1, 0].loglog(voltmeter_ranges, series_R, 'o-', linewidth=2, markersize=8, color='darkred')
axes[1, 0].set_xlabel('Voltmeter Range (V)', fontsize=11)
axes[1, 0].set_ylabel('Series Resistance (Ω)', fontsize=11)
axes[1, 0].set_title('Series Resistance vs Voltmeter Range', fontsize=12, fontweight='bold')
axes[1, 0].grid(True, alpha=0.3)

# Plot 4: Voltmeter Resistance
axes[1, 1].loglog(voltmeter_ranges, R_voltmeters, 's-', linewidth=2, markersize=8, color='purple')
axes[1, 1].set_xlabel('Voltmeter Range (V)', fontsize=11)
axes[1, 1].set_ylabel('Effective Resistance (Ω)', fontsize=11)
axes[1, 1].set_title('Voltmeter Effective Resistance', fontsize=12, fontweight='bold')
axes[1, 1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Print table
print("=" * 70)
print("AMMETER CONVERSIONS")
print("=" * 70)
print(f"{'Range (A)':<12} {'Shunt (Ω)':<15} {'Eff. R (Ω)':<15} {'% through G':<12}")
print("-" * 70)
for i, I in enumerate(ammeter_ranges):
    percent_G = (I_g / I) * 100
    print(f"{I:<12.3f} {shunts[i]:<15.6f} {R_ammeters[i]:<15.6f} {percent_G:<12.3f}")

print("\n" + "=" * 70)
print("VOLTMETER CONVERSIONS")
print("=" * 70)
print(f"{'Range (V)':<12} {'Series R (Ω)':<15} {'Eff. R (Ω)':<15} {'Ω/V':<12}")
print("-" * 70)
for i, V in enumerate(voltmeter_ranges):
    ohm_per_volt = R_voltmeters[i] / V
    print(f"{V:<12.3f} {series_R[i]:<15.1f} {R_voltmeters[i]:<15.1f} {ohm_per_volt:<12.1f}")
```

**Observe:**

- Ammeter: Higher range → Lower shunt resistance
- Voltmeter: Higher range → Higher total resistance
- Quality voltmeter has constant Ω/V rating!

---

## Common JEE Mistakes (Avoid These!)

### Mistake 1: Confusing Parallel vs Series

**Wrong:** Using series resistance for ammeter
**Right:** Ammeter uses PARALLEL shunt, Voltmeter uses SERIES resistance!

### Mistake 2: Wrong Current in Shunt Formula

**Wrong:** $S = \frac{IG}{I_g}$
**Right:** $S = \frac{I_g G}{I - I_g}$ (note the I - I_g in denominator!)

### Mistake 3: Ignoring Galvanometer Resistance

**Wrong:** $R = \frac{V}{I_g}$ (for voltmeter)
**Right:** $R = \frac{V}{I_g} - G$ (must subtract G!)

### Mistake 4: Sensitivity Confusion

**Wrong:** Higher k means more sensitive
**Right:** Lower k (figure of merit) means MORE sensitive!

### Mistake 5: Ideal Meter Assumption

**Wrong:** Ammeter has infinite resistance, voltmeter has zero resistance
**Right:** Opposite! Ammeter → 0 Ω (ideal), Voltmeter → ∞ Ω (ideal)

---

## Advanced Concepts

### 1. Multiple Range Ammeter

**Setup:** Different shunts for different ranges (using selector switch)

**For ranges I₁, I₂, I₃:**

$$S_1 = \frac{I_g G}{I_1 - I_g}, \quad S_2 = \frac{I_g G}{I_2 - I_g}, \quad S_3 = \frac{I_g G}{I_3 - I_g}$$

### 2. Multiple Range Voltmeter

**Setup:** Different series resistances (using selector switch)

**For ranges V₁, V₂, V₃:**

$$R_1 = \frac{V_1}{I_g} - G, \quad R_2 = \frac{V_2}{I_g} - G, \quad R_3 = \frac{V_3}{I_g} - G$$

### 3. Voltmeter Quality: Ω/V Rating

**Definition:** Resistance per volt of range

$$\text{Quality} = \frac{R_V}{V} = \frac{1}{I_g}$$

**Example:** If I_g = 1 mA, quality = 1000 Ω/V

**Better Quality:** Higher Ω/V rating (lower I_g)

### 4. Half-Deflection Method

**To find galvanometer resistance G:**

1. Connect galvanometer in series with battery and high resistance R
2. Note deflection θ
3. Add shunt S across galvanometer
4. Adjust S until deflection is θ/2

**Result:**

$$\boxed{G = S}$$

**Proof:** When deflection halves, current through G halves, so current through S equals current through G, meaning G = S.

---

## Problem-Solving Strategy: The GRAM Method

**G**alvanometer specs (G, I_g)
**R**ange required (I or V)
**A**mmeter? Use shunt in parallel
**(Vol)M**eter? Use resistance in series

---

## Practice Problems

### Level 1: JEE Main Foundations

**Problem 1.1:** A galvanometer has resistance 50 Ω and gives full-scale deflection for 2 mA. Calculate the shunt resistance needed to convert it to an ammeter of range 0-2 A.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>G = 50 Ω</li><li>I_g = 2 mA = 0.002 A</li><li>I = 2 A</li></ul><p><strong>Formula:</strong></p>$$S = \frac{I_g G}{I - I_g}$$

$$S = \frac{0.002 \times 50}{2 - 0.002} = \frac{0.1}{1.998}$$

$$S = 0.0501 \text{ Ω} \approx 0.05 \text{ Ω}$$<p><strong>Answer:</strong> 0.05 Ω (very low resistance!)</p><p><strong>Effective ammeter resistance:</strong></p>$$R_A = \frac{GS}{G+S} = \frac{50 \times 0.05}{50.05} = 0.0499 \text{ Ω}$$</details>

**Problem 1.2:** The same galvanometer (G = 50 Ω, I_g = 2 mA) is to be converted to a voltmeter of range 0-5 V. Find the required series resistance.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>G = 50 Ω</li><li>I_g = 2 mA = 0.002 A</li><li>V = 5 V</li></ul><p><strong>Formula:</strong></p>$$R = \frac{V}{I_g} - G$$

$$R = \frac{5}{0.002} - 50 = 2500 - 50 = 2450 \text{ Ω}$$<p><strong>Answer:</strong> 2450 Ω = 2.45 kΩ</p><p><strong>Effective voltmeter resistance:</strong></p>$$R_V = G + R = 50 + 2450 = 2500 \text{ Ω}$$<p><strong>Ω/V rating:</strong> 2500/5 = 500 Ω/V</p></details>

**Problem 1.3:** A galvanometer coil has 100 turns, area 10 cm², and is in a magnetic field of 0.1 T. If the spring constant is 10⁻⁵ N·m/rad, find the current for a deflection of 30°.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>N = 100</li><li>A = 10 cm² = 10 × 10⁻⁴ m² = 10⁻³ m²</li><li>B = 0.1 T</li><li>k = 10⁻⁵ N·m/rad</li><li>θ = 30° = π/6 rad ≈ 0.524 rad</li></ul><p><strong>At equilibrium:</strong></p>$$NIBA = k\theta$$

$$I = \frac{k\theta}{NBA}$$

$$I = \frac{10^{-5} \times 0.524}{100 \times 0.1 \times 10^{-3}}$$

$$I = \frac{5.24 \times 10^{-6}}{10^{-2}} = 5.24 \times 10^{-4} \text{ A}$$

$$I = 0.524 \text{ mA}$$<p><strong>Answer:</strong> 0.524 mA</p></details>

### Level 2: JEE Advanced Application

**Problem 2.1:** A galvanometer of resistance 100 Ω gives full deflection for 10 mA. How would you convert it to read: (a) up to 10 A, (b) up to 100 V? Also find the effective resistances.

<details><summary>Solution</summary><p><strong>Given:</strong> G = 100 Ω, I_g = 10 mA = 0.01 A</p><p><strong>(a) Ammeter (0-10 A):</strong></p>$$S = \frac{I_g G}{I - I_g} = \frac{0.01 \times 100}{10 - 0.01}$$

$$S = \frac{1}{9.99} = 0.1001 \text{ Ω} \approx 0.1 \text{ Ω}$$<p><strong>Effective resistance:</strong></p>$$R_A = \frac{GS}{G+S} = \frac{100 \times 0.1}{100.1} = 0.0999 \text{ Ω} \approx 0.1 \text{ Ω}$$<p><strong>(b) Voltmeter (0-100 V):</strong></p>$$R = \frac{V}{I_g} - G = \frac{100}{0.01} - 100$$

$$R = 10,000 - 100 = 9,900 \text{ Ω} = 9.9 \text{ kΩ}$$<p><strong>Effective resistance:</strong></p>$$R_V = G + R = 100 + 9,900 = 10,000 \text{ Ω} = 10 \text{ kΩ}$$<p><strong>Ω/V rating:</strong> 10,000/100 = 100 Ω/V</p><p><strong>Answers:</strong></p><ul><li>(a) Shunt = 0.1 Ω, R_A = 0.1 Ω</li><li>(b) Series R = 9.9 kΩ, R_V = 10 kΩ</li></ul></details>

**Problem 2.2:** Two identical galvanometers (G = 60 Ω, I_g = 5 mA each) are available. How can you use them to make: (a) an ammeter of range 0-1 A, (b) a voltmeter of range 0-15 V?

<details><summary>Solution</summary><p><strong>Given:</strong> Two galvanometers, G = 60 Ω, I_g = 5 mA = 0.005 A each</p><p><strong>(a) Ammeter (0-1 A):</strong></p><p><strong>Strategy:</strong> Connect two galvanometers in parallel (doubles current capacity to 10 mA), then add shunt</p><p><strong>Equivalent galvanometer:</strong></p><ul><li>G_eq = 60/2 = 30 Ω (parallel)</li><li>I_g,eq = 2 × 5 = 10 mA = 0.01 A</li></ul><p><strong>Shunt needed:</strong></p>$$S = \frac{I_g G_{eq}}{I - I_g} = \frac{0.01 \times 30}{1 - 0.01}$$

$$S = \frac{0.3}{0.99} = 0.303 \text{ Ω}$$<p><strong>(b) Voltmeter (0-15 V):</strong></p><p><strong>Strategy:</strong> Connect two galvanometers in series (doubles voltage capacity), then add series resistance</p><p><strong>Equivalent galvanometer:</strong></p><ul><li>G_eq = 60 + 60 = 120 Ω (series)</li><li>I_g,eq = 5 mA (same)</li><li>V_g,eq = 2 × (5 × 10⁻³ × 60) = 0.6 V</li></ul><p><strong>Series resistance:</strong></p>$$R = \frac{V}{I_g} - G_{eq} = \frac{15}{0.005} - 120$$

$$R = 3000 - 120 = 2,880 \text{ Ω} = 2.88 \text{ kΩ}$$<p><strong>Answers:</strong></p><ul><li>(a) Two G in parallel + shunt of 0.303 Ω</li><li>(b) Two G in series + series R of 2.88 kΩ</li></ul></details>

**Problem 2.3:** A galvanometer with full-scale deflection current of 1 mA is converted to an ammeter by a shunt of 0.1 Ω. The galvanometer shows 40 divisions deflection when 4 A flows through the ammeter. Find: (a) galvanometer resistance, (b) current sensitivity in div/mA.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>I_g = 1 mA = 0.001 A (full scale)</li><li>S = 0.1 Ω</li><li>When I_ammeter = 4 A, deflection = 40 divisions</li></ul><p><strong>(a) Find G:</strong></p><p>When 4 A flows through ammeter, current through galvanometer can be found from voltage equality:</p>$$I_g' \times G = I_s' \times S$$<p>where I_g’ + I_s’ = 4</p><p>Also, since 40 divisions out of full scale (say 100), ratio:</p>$$\frac{I_g'}{I_g} = \frac{40}{100}$$<p>(assuming 100 div full scale)</p><p>Actually, we need more information. Let’s use another approach.</p><p><strong>From shunt formula:</strong></p>$$S = \frac{I_g G}{I - I_g}$$<p>We need to find total range I first.</p><p>When ammeter reads 4 A, and deflection is 40% (assuming proportional):
Current through G = 40% of I_g = 0.4 mA (if 100 divisions = full scale)</p><p><strong>Wait, problem states 40 divisions at 4 A. Need to find what full scale current is.</strong></p><p>If proportional: $\frac{I_g}{I} = \frac{100}{x}$ where x is unknown.</p><p><strong>Alternative:</strong> At 4 A, current through G is such that deflection is 40 divisions.</p><p>If full scale (100 div) = 1 mA, then 40 div = 0.4 mA</p><p>Current through shunt = 4 - 0.0004 ≈ 4 A</p>$$0.0004 \times G = 4 \times 0.1$$

$$G = \frac{0.4}{0.0004} = 1000 \text{ Ω}$$<p>But this seems too high. Let me reconsider&amp;mldr;</p><p><strong>Better approach:</strong> Assume full scale is 100 divisions = 1 mA through G</p><p>At full scale (100 div, 1 mA through G):</p>$$I_g \times G = (I - I_g) \times S$$<p></p>$$0.001 \times G = (I - 0.001) \times 0.1$$<p>At 40 divisions (0.4 mA through G), total = 4 A:</p>$$0.0004 \times G = (4 - 0.0004) \times 0.1$$<p></p>$$G = \frac{0.4}{0.0004} = 1000 \text{ Ω}$$<p><strong>Check with full scale:</strong></p>$$I = \frac{0.001 \times 1000}{0.1} + 0.001 = 10 + 0.001 \approx 10 \text{ A}$$<p>So ammeter range is 0-10 A.</p><p>At 4 A: current through G = $\frac{4 \times 0.1}{1000} = 0.0004$ A = 0.4 mA ✓</p><p><strong>(a) Answer:</strong> G = 1000 Ω</p><p><strong>(b) Current sensitivity:</strong>
Full scale (100 div) = 1 mA</p>$$S_I = \frac{100 \text{ div}}{1 \text{ mA}} = 100 \text{ div/mA}$$<p><strong>Answers:</strong></p><ul><li>(a) G = 1000 Ω</li><li>(b) S_I = 100 div/mA</li></ul></details>

### Level 3: JEE Advanced Mastery

**Problem 3.1:** A galvanometer has a current sensitivity of 1 div/μA. When a shunt of 1 Ω is connected, the current for the same deflection becomes 10001 μA. Find the galvanometer resistance.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>Sensitivity = 1 div/μA (1 div needs 1 μA)</li><li>With shunt S = 1 Ω, same deflection needs total current 10001 μA</li></ul><p><strong>Analysis:</strong></p><p><strong>Without shunt:</strong> Current for deflection = 1 μA (all through G)</p><p><strong>With shunt:</strong> Same deflection = same current through G = 1 μA
But total current = 10001 μA</p><p><strong>So current through shunt:</strong></p>$$I_s = 10001 - 1 = 10000 \text{ μA}$$<p><strong>Voltage equality (parallel):</strong></p>$$I_g \times G = I_s \times S$$

$$1 \times G = 10000 \times 1$$

$$\boxed{G = 10,000 \text{ Ω} = 10 \text{ kΩ}}$$<p><strong>Answer:</strong> 10 kΩ</p><p><strong>Verification:</strong></p>$$\frac{I_s}{I_g} = \frac{G}{S} = \frac{10000}{1} = 10000$$<p>✓</p></details>

**Problem 3.2:** A galvanometer (G = 50 Ω, I_g = 100 μA) is to be used as a voltmeter. A resistor of 4950 Ω is available. What is the maximum voltage that can be measured? If you want to measure up to 10 V, what modification is needed?

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>G = 50 Ω</li><li>I_g = 100 μA = 10⁻⁴ A</li><li>Available R = 4950 Ω</li></ul><p><strong>(a) Maximum voltage with R = 4950 Ω:</strong></p><p>Total resistance = G + R = 50 + 4950 = 5000 Ω</p>$$V_{\max} = I_g \times (G + R) = 10^{-4} \times 5000$$

$$V_{\max} = 0.5 \text{ V}$$<p><strong>(b) To measure up to 10 V:</strong></p><p><strong>Required total resistance:</strong></p>$$R_{total} = \frac{V}{I_g} = \frac{10}{10^{-4}} = 100,000 \text{ Ω}$$<p><strong>Additional resistance needed:</strong></p>$$R_{add} = R_{total} - (G + R) = 100,000 - 5000$$

$$R_{add} = 95,000 \text{ Ω} = 95 \text{ kΩ}$$<p><strong>Solution:</strong> Add 95 kΩ in series with existing setup</p><p><strong>Answers:</strong></p><ul><li>(a) Maximum voltage = 0.5 V</li><li>(b) Add 95 kΩ resistance in series</li></ul></details>

**Problem 3.3:** Two voltmeters (V₁ and V₂) are connected in series across a 300 V supply. V₁ reads 120 V and has resistance 8000 Ω. If V₂ reads 180 V, find its resistance.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>Total voltage = 300 V</li><li>V₁ reading = 120 V, R₁ = 8000 Ω</li><li>V₂ reading = 180 V, R₂ = ?</li></ul><p><strong>Current through series circuit:</strong></p><p>Since in series, current is same through both.</p><p>From V₁:</p>$$I = \frac{V_1}{R_1} = \frac{120}{8000} = 0.015 \text{ A} = 15 \text{ mA}$$<p>From V₂:</p>$$R_2 = \frac{V_2}{I} = \frac{180}{0.015}$$

$$R_2 = 12,000 \text{ Ω} = 12 \text{ kΩ}$$<p><strong>Check:</strong> Total voltage = IR_total = 0.015 × (8000 + 12000) = 0.015 × 20000 = 300 V ✓</p><p><strong>Answer:</strong> R₂ = 12 kΩ</p><p><strong>Key Insight:</strong> In series, current is same. Each voltmeter reads V = IR (its own resistance drop).</p></details>

---

## Experimental Techniques

### Half-Deflection Method (Finding G)

**Procedure:**

1. Connect: Battery - Key - R (high resistance) - Galvanometer - Battery
2. Note deflection θ
3. Connect shunt S across galvanometer
4. Adjust S until deflection = θ/2

**Result:** G = S (galvanometer resistance equals shunt resistance)

**Why it works:**

- Half deflection → half current through G
- Other half goes through S
- Equal currents in parallel → equal resistances

### Post Office Box Method

More accurate for finding G, involves Wheatstone bridge principle.

---

## Connections: The Web of Knowledge

### Link to Force on Current Conductor

- Galvanometer uses torque = NIBA
- Same force principle in different geometry
- See: [Force on Current Conductor](../force-current-conductor/index.md)

### Link to Magnetic Dipole

- Coil has magnetic moment M = NIA
- Torque τ = MB sin θ (but radial field makes it constant)
- See: [Magnetic Dipole](../magnetic-dipole/index.md)

### Link to Kirchhoff’s Laws

- Shunt and series calculations use current/voltage division
- Circuit analysis principles
- See: [Kirchhoff’s Laws](../../current-electricity/kirchhoffs-laws/index.md)

### Link to Wheatstone Bridge

- Finding G uses bridge principle
- Balancing conditions
- See: [Wheatstone Bridge](../../current-electricity/wheatstone-bridge/index.md)

---

## Quick Revision: Formula Sheet

| Quantity | Formula | Notes |
| --- | --- | --- |
| Deflection | $\theta = \frac{NBA}{k} I$ | Linear relation |
| Current sensitivity | $S_I = \frac{NBA}{k}$ | Higher is better |
| Voltage sensitivity | $S_V = \frac{NBA}{kG}$ | Depends on G too |
| Figure of merit | $k_g = \frac{1}{S_I}$ | Lower is better |
| Shunt (ammeter) | $S = \frac{I_g G}{I - I_g}$ | Parallel, low R |
| Series R (voltmeter) | $R = \frac{V}{I_g} - G$ | Series, high R |
| Ammeter resistance | $R_A = \frac{G}{n}$ | n = I/I_g |
| Voltmeter resistance | $R_V = mG$ | m = V/(I_g G) |

**Memory Aid:**

- **A**mmeter: **A**dd shunt in **p**Arallel (low R)
- **V**oltmeter: **V**ery high R in **s**erie**s**

---

## Exam Strategy

**Common Question Types:**

1. Shunt/series resistance calculations (60%)
2. Sensitivity and figure of merit (20%)
3. Multiple galvanometers/ranges (15%)
4. Error analysis (5%)

**Time Management:**

- Basic conversion: 2-3 minutes
- Sensitivity questions: 3-4 minutes
- Multiple component problems: 6-8 minutes

**Red Flags:**

- Check if asking for shunt or total ammeter resistance
- Don’t forget to subtract G in voltmeter series R formula
- Watch units: mA vs A, kΩ vs Ω

**Quick Checks:**

- Ammeter shunt < Galvanometer resistance
- Voltmeter series R » Galvanometer resistance
- Higher range → lower shunt, higher series R

---

## Summary: Key Takeaways

1. **Working Principle:** Torque on coil (τ = NIBA) balanced by spring (τ = kθ) gives deflection ∝ current
2. **Sensitivity:** $S_I = \frac{NBA}{k}$ - increase N, B, A or decrease k
3. **Ammeter Conversion:** Low resistance shunt in parallel: $S = \frac{I_g G}{I - I_g}$
4. **Voltmeter Conversion:** High resistance in series: $R = \frac{V}{I_g} - G$
5. **Ideal Behavior:** Ammeter → R ≈ 0 (doesn’t affect circuit), Voltmeter → R → ∞ (draws no current)
6. **Quality:** Voltmeter quality measured in Ω/V = 1/I_g (higher is better)
7. **JEE Pattern:** 70% conversion problems, 20% sensitivity, 10% experimental methods

---

*Last Updated: March 28, 2025*
*Next Topic: [Magnetic Dipole Moment](../magnetic-dipole/index.md)*
*Previous Topic: [Force on Current Conductor](../force-current-conductor/index.md)*

From TestGuru · our mock-test platform

## You've read Moving Coil Galvanometer: The Art of Measuring Current.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=magnetism&tg_exam=jee-main&tg_page=%2Fphysics%2Fmagnetism%2Fgalvanometer%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/magnetism/galvanometer/",this.page.identifier="/physics/magnetism/galvanometer/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="magneticField" id="anim-magneticField-1795396423934900993"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-magneticField-1795396423934900993")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/magnetism/galvanometer/](https://jeenotes.in/physics/magnetism/galvanometer/) · raw HTML: `offline/physics/magnetism/galvanometer/index.html`_
