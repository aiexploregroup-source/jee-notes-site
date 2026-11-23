---
title: "Magnetic Materials: Para, Dia, and Ferromagnetism"
source: "https://jeenotes.in/physics/magnetism/magnetic-materials/"
description: "Master magnetic properties of materials, magnetization, susceptibility, and hysteresis for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 9"
html: "../../../../offline/physics/magnetism/magnetic-materials/index.html"
extracted: "2026-11-23"
---

> Master magnetic properties of materials, magnetization, susceptibility, and hysteresis for JEE Main & Advanced

# Magnetic Materials: Para, Dia, and Ferromagnetism

## Movie Hook: Magneto’s Metal Manipulation

In X-Men, Magneto controls all metals with magnetism. But in reality, not all materials respond to magnetic fields the same way! Iron is strongly magnetic (ferromagnetic), aluminum is weakly attracted (paramagnetic), and copper actually repels fields slightly (diamagnetic). Understanding **magnetic materials** is crucial for designing transformers, hard drives, MRI machines, and yes, even separating metals at recycling centers!

## The Big Picture

**What’s the Deal?**

- All materials respond to magnetic fields, but differently
- Response depends on atomic structure and electron configurations
- Three main types: diamagnetic, paramagnetic, ferromagnetic
- Applications: electromagnets, transformers, data storage, medical imaging

**JEE Perspective:**

- JEE Main: Classification, magnetic susceptibility, relative permeability
- JEE Advanced: Curie law, hysteresis, domain theory, quantitative problems

---

## Core Concepts: Magnetization and Magnetic Intensity

### Magnetic Intensity (H)

**Definition:** Magnetic field strength independent of the medium

$$\boxed{\vec{H} = \frac{\vec{B}}{\mu_0} - \vec{M}}$$

**For solenoid:**

$$\boxed{H = nI}$$

where n = turns per unit length, I = current

**Unit:** A/m (ampere per meter)

**Physical meaning:** H depends only on currents, not on material properties

### Magnetization (M)

**Definition:** Magnetic dipole moment per unit volume

$$\boxed{M = \frac{\text{Total magnetic moment}}{\text{Volume}}}$$

**Unit:** A/m (same as H)

**Relation to atomic dipoles:**
If N atoms per volume, each with moment m:

$$M = Nm$$

### Magnetic Permeability (μ)

**Relation between B and H:**

$$\boxed{\vec{B} = \mu \vec{H}}$$

where μ = permeability of the material

**Relative permeability:**

$$\boxed{\mu_r = \frac{\mu}{\mu_0}}$$

**For vacuum:** μ_r = 1

### Magnetic Susceptibility (χ)

**Definition:** Measure of how much a material magnetizes in response to field

$$\boxed{M = \chi H}$$

$$\boxed{\vec{B} = \mu_0(\vec{H} + \vec{M}) = \mu_0(1 + \chi)\vec{H}}$$

**Relation to permeability:**

$$\boxed{\mu_r = 1 + \chi}$$

$$\boxed{\chi = \mu_r - 1}$$

**Key equation:**

$$\boxed{B = \mu_0 \mu_r H = \mu_0(1 + \chi)H}$$

**Memory Trick: “CHI makes Material respond to H!”**

---

## Three Types of Magnetic Materials

### 1. Diamagnetic Materials

**Properties:**

- **Weakly repelled** by magnetic fields
- χ is **negative** (small magnitude: ~10⁻⁵)
- μ_r **< 1** (slightly less than 1)
- No permanent magnetic moment
- Effect is temperature independent

**Mechanism:**

- External field induces currents in electron orbits (Lenz’s law)
- Induced magnetic moment opposes applied field
- Present in ALL materials, but usually masked by stronger effects

**Examples:**

- Bismuth (strongest diamagnet)
- Copper, Gold, Silver
- Water, Wood
- Superconductors (perfect diamagnetism, χ = -1)

**Behavior in non-uniform field:**

- Move from stronger to weaker field region
- Repelled by magnets

**JEE Key Values:**

- χ ≈ -10⁻⁵ to -10⁻⁶
- μ_r ≈ 0.99999

### 2. Paramagnetic Materials

**Properties:**

- **Weakly attracted** by magnetic fields
- χ is **positive** (small magnitude: ~10⁻⁵ to 10⁻³)
- μ_r **> 1** (slightly greater than 1)
- Have permanent atomic dipole moments
- Effect **decreases** with temperature (thermal agitation)

**Mechanism:**

- Atoms have unpaired electrons → permanent magnetic moments
- Without field: random orientation → no net magnetization
- With field: partial alignment → net magnetization
- Thermal motion opposes alignment

**Examples:**

- Aluminum, Platinum
- Oxygen (liquid O₂ is paramagnetic!)
- Manganese, Chromium
- CuSO₄, FeSO₄

**Behavior in non-uniform field:**

- Move from weaker to stronger field region
- Attracted by magnets

**Curie Law:**

$$\boxed{\chi = \frac{C}{T}}$$

where C is Curie constant, T is absolute temperature

**Key insight:** Susceptibility inversely proportional to temperature!

**JEE Key Values:**

- χ ≈ 10⁻⁵ to 10⁻³
- μ_r ≈ 1.00001 to 1.001

### 3. Ferromagnetic Materials

**Properties:**

- **Strongly attracted** by magnetic fields
- χ is **large positive** (~10² to 10⁵)
- μ_r **» 1** (can be 1000 to 100,000!)
- Retain magnetization even after field removed (permanent magnets)
- Effect **decreases** with temperature

**Mechanism:**

- Strong interaction between atomic dipoles
- Spontaneous alignment in small regions (domains)
- External field aligns domains → strong magnetization

**Examples:**

- Iron, Cobalt, Nickel
- Alnico (Al-Ni-Co alloy)
- Ferrites (iron oxides)
- Rare earth magnets (Nd-Fe-B)

**Curie-Weiss Law:**

$$\boxed{\chi = \frac{C}{T - T_C}}$$

where T_C is Curie temperature

**Above Curie temperature:** Ferromagnetic → Paramagnetic!

**Curie Temperatures:**

- Iron: 1043 K (770°C)
- Cobalt: 1394 K (1121°C)
- Nickel: 631 K (358°C)

**JEE Key Values:**

- χ ≈ 10² to 10⁵
- μ_r ≈ 1000 to 100,000

---

## Comparison Table: The Big Three

| Property | Diamagnetic | Paramagnetic | Ferromagnetic |
| --- | --- | --- | --- |
| **Susceptibility χ** | Negative (~-10⁻⁵) | Positive (~10⁻⁵ to 10⁻³) | Large positive (~10³ to 10⁵) |
| **Permeability μ_r** | < 1 (~0.99999) | > 1 (~1.00001) | » 1 (~1000 to 100,000) |
| **Behavior in B-field** | Weak repulsion | Weak attraction | Strong attraction |
| **Permanent moment** | No | Yes (atomic) | Yes (domain) |
| **Temperature effect** | Independent | χ ∝ 1/T | χ ∝ 1/(T-T_C) |
| **In non-uniform field** | Weak → Strong | Strong ← Weak | Strong ← Weak |
| **Examples** | Cu, Au, H₂O | Al, O₂, Pt | Fe, Co, Ni |
| **Retentivity** | None | None | High (hysteresis) |

**Memory Trick: “DPF - Diamagnetic Pulls Faintly away, Paramagnetic Pulls Faintly toward, Ferromagnetic Pulls Forcefully!”**

### Interactive Demo: Material Response to Magnetic Fields

See how different materials respond to magnetic fields based on their atomic structure.

---

## Magnetic Domains: The Secret of Ferromagnetism

### Domain Theory

**Key Concept:** Ferromagnetic material consists of small regions (~10⁻¹⁰ m³) called domains

**Within each domain:**

- All atomic dipoles are perfectly aligned
- Domain has large magnetic moment

**Without external field:**

- Domains point in random directions
- Net magnetization = 0

**With external field:**

- Domains aligned with field grow (domain wall movement)
- Domains not aligned shrink or rotate
- Net magnetization increases

**At saturation:**

- All domains aligned
- Maximum possible magnetization
- Further increase in H doesn’t increase M

### Hysteresis Loop

**Hysteresis:** Lagging of magnetization behind magnetizing field

**Key Points on Loop:**

1. **O → A:** Initial magnetization (virgin curve)

   - Domains start aligning
   - M increases with H
2. **A:** Saturation

   - All domains aligned
   - M = M_s (saturation magnetization)
3. **A → B:** Reducing H to zero

   - Some domains misalign
   - M = M_r at H = 0 (**retentivity** or **remanence**)
4. **B → C:** Reversing field

   - Domains flip to opposite direction
   - M = 0 at H = -H_c (**coercivity**)
5. **C → D:** Saturation in opposite direction

   - M = -M_s
6. **D → E → A:** Completing the loop

**Area of loop:** Energy dissipated per cycle per unit volume (as heat)

$$\boxed{E = \oint H \, dB}$$

**Memory Trick: “ReCo - REtentivity at H=0, COercivity at M=0”**

### Hard vs Soft Magnetic Materials

| Property | Soft Magnetic | Hard Magnetic |
| --- | --- | --- |
| **Hysteresis loop** | Narrow (small area) | Wide (large area) |
| **Retentivity** | Low | High |
| **Coercivity** | Low | High |
| **Energy loss** | Low | High |
| **Magnetization** | Easy | Difficult |
| **Demagnetization** | Easy | Difficult |
| **Applications** | Electromagnets, transformers, cores | Permanent magnets, data storage |
| **Examples** | Soft iron, permalloy | Steel, alnico, NdFeB |

**JEE Gold:**

- **Soft:** Easy to magnetize/demagnetize (good for AC applications)
- **Hard:** Retains magnetization (good for permanent magnets)

---

## Interactive Demo: Susceptibility vs Temperature

```python
import numpy as np
import matplotlib.pyplot as plt

def curie_law_paramagnetic(T, C):
    """Paramagnetic susceptibility: χ = C/T"""
    return C / T

def curie_weiss_ferromagnetic(T, C, T_c):
    """Ferromagnetic susceptibility: χ = C/(T - T_c)"""
    # Only defined for T > T_c
    return np.where(T > T_c, C / (T - T_c), np.nan)

# Temperature range
T_para = np.linspace(50, 500, 100)  # Kelvin
T_ferro = np.linspace(650, 1500, 100)  # Above Curie temp

# Constants
C_para = 0.5
C_ferro = 100
T_curie_Fe = 1043  # Iron

# Calculate susceptibilities
chi_para = curie_law_paramagnetic(T_para, C_para)
chi_ferro = curie_weiss_ferromagnetic(T_ferro, C_ferro, T_curie_Fe)

# Plotting
fig, axes = plt.subplots(1, 3, figsize=(16, 5))

# Plot 1: Paramagnetic
axes[0].plot(T_para, chi_para * 1e3, linewidth=2.5, color='blue')
axes[0].set_xlabel('Temperature (K)', fontsize=12)
axes[0].set_ylabel('Susceptibility χ (×10⁻³)', fontsize=12)
axes[0].set_title('Paramagnetic: Curie Law (χ ∝ 1/T)', fontsize=13, fontweight='bold')
axes[0].grid(True, alpha=0.3)
axes[0].annotate('χ decreases\nwith T', xy=(300, chi_para[150]*1e3),
                xytext=(350, chi_para[50]*1e3),
                arrowprops=dict(arrowstyle='->', color='red'),
                fontsize=11, bbox=dict(boxstyle='round', facecolor='yellow', alpha=0.7))

# Plot 2: Ferromagnetic (above T_c)
axes[1].plot(T_ferro, chi_ferro, linewidth=2.5, color='red')
axes[1].axvline(T_curie_Fe, color='green', linestyle='--', linewidth=2, label=f'T_C = {T_curie_Fe} K')
axes[1].set_xlabel('Temperature (K)', fontsize=12)
axes[1].set_ylabel('Susceptibility χ', fontsize=12)
axes[1].set_title('Ferromagnetic: Curie-Weiss Law', fontsize=13, fontweight='bold')
axes[1].grid(True, alpha=0.3)
axes[1].legend(fontsize=11)
axes[1].set_ylim(0, 50)

# Plot 3: Comparison at room temperature effect
materials = ['Diamagnetic\n(Cu)', 'Paramagnetic\n(Al)', 'Ferromagnetic\n(Fe)']
chi_values = [-1e-5, 2e-5, 1000]  # Representative values
colors_mat = ['cyan', 'orange', 'darkred']

axes[2].bar(materials, chi_values, color=colors_mat, alpha=0.7, edgecolor='black', linewidth=2)
axes[2].set_ylabel('Susceptibility χ (log scale)', fontsize=12)
axes[2].set_title('Susceptibility Comparison', fontsize=13, fontweight='bold')
axes[2].set_yscale('symlog', linthresh=1e-4)
axes[2].axhline(y=0, color='black', linewidth=0.8)
axes[2].grid(True, alpha=0.3, axis='y')

# Add values on bars
for i, (mat, chi, color) in enumerate(zip(materials, chi_values, colors_mat)):
    if chi < 0:
        axes[2].text(i, chi/2, f'{chi:.0e}', ha='center', fontsize=10, fontweight='bold')
    else:
        axes[2].text(i, chi*2 if chi > 1 else chi+1e-4, f'{chi:.0e}', ha='center', fontsize=10, fontweight='bold')

plt.tight_layout()
plt.show()

# Print comparison table
print("\n" + "=" * 70)
print("MAGNETIC SUSCEPTIBILITY AT ROOM TEMPERATURE (300 K)")
print("=" * 70)
print(f"{'Material':<20} {'Type':<15} {'χ (approx)':<20} {'μ_r':<15}")
print("-" * 70)
print(f"{'Bismuth':<20} {'Diamagnetic':<15} {'-1.7×10⁻⁵':<20} {'0.999983':<15}")
print(f"{'Copper':<20} {'Diamagnetic':<15} {'-1.0×10⁻⁵':<20} {'0.99999':<15}")
print(f"{'Aluminum':<20} {'Paramagnetic':<15} {'+2.2×10⁻⁵':<20} {'1.000022':<15}")
print(f"{'Platinum':<20} {'Paramagnetic':<15} {'+2.8×10⁻⁴':<20} {'1.00028':<15}")
print(f"{'Iron (soft)':<20} {'Ferromagnetic':<15} {'+5000':<20} {'5000':<15}")
print(f"{'Permalloy':<20} {'Ferromagnetic':<15} {'+100,000':<20} {'100,000':<15}")
print("=" * 70)
```

**Observe:**

- Paramagnetic χ decreases with temperature (thermal disorder)
- Ferromagnetic becomes paramagnetic above Curie temperature
- Huge difference in magnitude between types!

---

## Common JEE Mistakes (Avoid These!)

### Mistake 1: Sign of Diamagnetic Susceptibility

**Wrong:** Diamagnetic χ is positive
**Right:** Diamagnetic χ is NEGATIVE (repulsion!)

### Mistake 2: Permeability Relations

**Wrong:** μ_r = 1 - χ
**Right:** μ_r = 1 + χ (plus sign!)

### Mistake 3: Temperature Effect Direction

**Wrong:** Paramagnetic χ increases with temperature
**Right:** Paramagnetic χ DECREASES with temperature (χ ∝ 1/T)

### Mistake 4: Hysteresis Terminology

**Wrong:** Retentivity when M = 0
**Right:** Retentivity when H = 0, Coercivity when M = 0

### Mistake 5: Domain Misconception

**Wrong:** Domains exist only when external field applied
**Right:** Domains exist ALWAYS; field just aligns them!

---

## Problem-Solving Strategy: The MCHR Method

**M**aterial type identification (dia/para/ferro)
**C**hi and mu_r calculation
**H**ysteresis if ferromagnetic
**R**elation between B, H, M

---

## Practice Problems

### Level 1: JEE Main Foundations

**Problem 1.1:** A material has relative permeability μ_r = 1.00005. Classify the material and find its susceptibility.

<details><summary>Solution</summary><p><strong>Given:</strong> μ_r = 1.00005</p><p><strong>Analysis:</strong></p><ul><li>μ_r &gt; 1 → Material is <strong>paramagnetic</strong></li></ul><p><strong>Susceptibility:</strong></p>$$\chi = \mu_r - 1 = 1.00005 - 1 = 0.00005 = 5 \times 10^{-5}$$<p><strong>Answers:</strong></p><ul><li>Material: Paramagnetic</li><li>Susceptibility: 5 × 10⁻⁵</li></ul></details>

**Problem 1.2:** The magnetic susceptibility of a material is -4.2 × 10⁻⁶. Is it diamagnetic or paramagnetic? Find its relative permeability.

<details><summary>Solution</summary><p><strong>Given:</strong> χ = -4.2 × 10⁻⁶</p><p><strong>Classification:</strong></p><ul><li>χ &lt; 0 → <strong>Diamagnetic</strong></li></ul><p><strong>Relative permeability:</strong></p>$$\mu_r = 1 + \chi = 1 + (-4.2 \times 10^{-6})$$<p></p>$$\mu_r = 1 - 0.0000042 = 0.9999958$$<p><strong>Answers:</strong></p><ul><li>Material: Diamagnetic</li><li>μ_r = 0.9999958 (&lt; 1, as expected)</li></ul></details>

**Problem 1.3:** A paramagnetic material has susceptibility 3 × 10⁻⁴ at 300 K. Find its susceptibility at 400 K (assuming Curie law).

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>χ₁ = 3 × 10⁻⁴ at T₁ = 300 K</li><li>Find χ₂ at T₂ = 400 K</li></ul><p><strong>Curie Law:</strong> χ = C/T</p>$$\frac{\chi_1}{\chi_2} = \frac{T_2}{T_1}$$

$$\chi_2 = \chi_1 \times \frac{T_1}{T_2} = 3 \times 10^{-4} \times \frac{300}{400}$$

$$\chi_2 = 3 \times 10^{-4} \times 0.75 = 2.25 \times 10^{-4}$$<p><strong>Answer:</strong> 2.25 × 10⁻⁴ (decreases with temperature!)</p></details>

### Level 2: JEE Advanced Application

**Problem 2.1:** A solenoid with 1000 turns/m carrying 5 A has a core of relative permeability 500. Find: (a) magnetic intensity H, (b) magnetic field B, (c) magnetization M.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>n = 1000 turns/m</li><li>I = 5 A</li><li>μ_r = 500</li></ul><p><strong>(a) Magnetic intensity:</strong></p>$$H = nI = 1000 \times 5 = 5000 \text{ A/m}$$<p><strong>(b) Magnetic field:</strong></p>$$B = \mu_0 \mu_r H = 4\pi \times 10^{-7} \times 500 \times 5000$$<p></p>$$B = 2\pi \times 10^{-3} \times 5000 = 10\pi \times 10^{-0}$$<p></p>$$B = 3.14 \text{ T}$$<p><strong>(c) Magnetization:</strong></p><p>Method 1: $\chi = \mu_r - 1 = 500 - 1 = 499$</p>$$M = \chi H = 499 \times 5000 = 2,495,000 \text{ A/m}$$<p>Method 2: $B = \mu_0(H + M)$</p>$$3.14 = 4\pi \times 10^{-7}(5000 + M)$$<p></p>$$\frac{3.14}{4\pi \times 10^{-7}} = 5000 + M$$<p></p>$$2.5 \times 10^6 = 5000 + M$$<p></p>$$M \approx 2.5 \times 10^6 \text{ A/m}$$<p><strong>Answers:</strong></p><ul><li>(a) H = 5000 A/m</li><li>(b) B = 3.14 T</li><li>(c) M ≈ 2.5 × 10⁶ A/m</li></ul></details>

**Problem 2.2:** The retentivity of a ferromagnetic material is 1.5 T and coercivity is 6000 A/m. Sketch the hysteresis loop qualitatively and find the approximate energy dissipated per cycle if the loop can be approximated as a rectangle.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>Retentivity: B_r = 1.5 T (at H = 0)</li><li>Coercivity: H_c = 6000 A/m (at B = 0)</li></ul><p><strong>Hysteresis Loop Sketch:</strong></p><div class="highlight"><pre style="color:#cdd6f4;background-color:#1e1e2e;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-text-size-adjust:none" tabindex="0"><code class="language-fallback" data-lang="fallback"><span style="display:flex"><span>     B (T)
</span></span><span style="display:flex"><span>      ↑
</span></span><span style="display:flex"><span>      |    +1.5 ──────┐
</span></span><span style="display:flex"><span>      |              │
</span></span><span style="display:flex"><span>      |              │
</span></span><span style="display:flex"><span>      |              ↓
</span></span><span style="display:flex"><span>──────┼──────────────── → H (A/m)
</span></span><span style="display:flex"><span>-6000 |         +6000
</span></span><span style="display:flex"><span>      |      ↑
</span></span><span style="display:flex"><span>      |      │
</span></span><span style="display:flex"><span>      | ─────┘
</span></span><span style="display:flex"><span>      |   -1.5
</span></span></code></pre></div><p><strong>Energy per cycle per unit volume:</strong></p><p>For rectangular approximation:</p>$$E = \text{Area of loop} = 4 \times B_r \times H_c$$

$$E = 4 \times 1.5 \times 6000 = 36,000 \text{ J/m}^3$$<p><strong>Answer:</strong> Energy dissipated ≈ 36 kJ/m³ per cycle</p><p><strong>Note:</strong> Actual loop is rounded, so real energy is less (maybe 70-80% of rectangular estimate)</p></details>

**Problem 2.3:** A magnetic material has susceptibility that varies with temperature as χ = 0.6/(T - 400) in SI units. (a) What type of material is it? (b) What is its Curie temperature? (c) Find χ at 500 K.

<details><summary>Solution</summary><p><strong>Given:</strong> $\chi = \frac{0.6}{T - 400}$</p><p><strong>(a) Material type:</strong></p><p>This follows Curie-Weiss law: $\chi = \frac{C}{T - T_C}$</p><p><strong>Material is FERROMAGNETIC</strong> (above Curie temperature)</p><p><strong>(b) Curie temperature:</strong></p><p>Comparing with standard form:</p>$$T_C = 400 \text{ K}$$<p><strong>(c) Susceptibility at T = 500 K:</strong></p>$$\chi = \frac{0.6}{500 - 400} = \frac{0.6}{100} = 0.006 = 6 \times 10^{-3}$$<p><strong>Answers:</strong></p><ul><li>(a) Ferromagnetic (above Curie temperature)</li><li>(b) T_C = 400 K</li><li>(c) χ = 0.006 at 500 K</li></ul></details>

### Level 3: JEE Advanced Mastery

**Problem 3.1:** A toroid with 2000 turns, mean radius 10 cm, and cross-sectional area 1 cm² has a ferromagnetic core with μ_r = 1000. When 2 A current flows: (a) Find B inside core, (b) Find magnetization M, (c) If core is removed, what current would produce same B?

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>N = 2000 turns</li><li>Mean circumference: 2πr = 2π(0.1) = 0.628 m</li><li>n = N/(2πr) = 2000/0.628 = 3185 turns/m</li><li>I = 2 A</li><li>μ_r = 1000</li></ul><p><strong>(a) Magnetic field B:</strong></p>$$H = nI = 3185 \times 2 = 6370 \text{ A/m}$$

$$B = \mu_0 \mu_r H = 4\pi \times 10^{-7} \times 1000 \times 6370$$

$$B = 8 \text{ T}$$<p><strong>(b) Magnetization M:</strong></p>$$\chi = \mu_r - 1 = 999$$

$$M = \chi H = 999 \times 6370 = 6.36 \times 10^6 \text{ A/m}$$<p>Or: $B = \mu_0(H + M)$</p>$$8 = 4\pi \times 10^{-7}(6370 + M)$$<p></p>$$M \approx 6.36 \times 10^6 \text{ A/m}$$<p><strong>(c) Current without core:</strong></p><p>Without core, μ_r = 1:</p>$$B = \mu_0 H = \mu_0 n I'$$

$$8 = 4\pi \times 10^{-7} \times 3185 \times I'$$

$$I' = \frac{8}{4\pi \times 10^{-7} \times 3185} = \frac{8}{4 \times 10^{-3}} = 2000 \text{ A}$$<p><strong>Answers:</strong></p><ul><li>(a) B = 8 T</li><li>(b) M = 6.36 × 10⁶ A/m</li><li>(c) I’ = 2000 A (1000 times more!)</li></ul><p><strong>Key Insight:</strong> Ferromagnetic core amplifies field by factor μ_r = 1000!</p></details>

**Problem 3.2:** Two identical samples of a paramagnetic material are placed in regions where magnetic field intensities are H₁ = 10⁴ A/m and H₂ = 2 × 10⁴ A/m. The ratio of magnetizations is found to be M₁/M₂ = 1/3. If the first sample is at 300 K, find temperature of second sample.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>H₁ = 10⁴ A/m at T₁ = 300 K</li><li>H₂ = 2 × 10⁴ A/m at T₂ = ?</li><li>M₁/M₂ = 1/3</li></ul><p><strong>For paramagnetic:</strong> M = χH and χ = C/T</p>$$M_1 = \chi_1 H_1 = \frac{C}{T_1} H_1$$

$$M_2 = \chi_2 H_2 = \frac{C}{T_2} H_2$$<p><strong>Ratio:</strong></p>$$\frac{M_1}{M_2} = \frac{C H_1 / T_1}{C H_2 / T_2} = \frac{H_1 T_2}{H_2 T_1}$$

$$\frac{1}{3} = \frac{10^4 \times T_2}{2 \times 10^4 \times 300}$$

$$\frac{1}{3} = \frac{T_2}{600}$$

$$T_2 = 200 \text{ K}$$<p><strong>Answer:</strong> T₂ = 200 K</p><p><strong>Physical check:</strong></p><ul><li>Lower temperature → higher χ → higher M</li><li>But H₂ is also higher</li><li>Net effect: M₂ = 3M₁ makes sense with lower T and higher H</li></ul></details>

**Problem 3.3:** A bar magnet is cut into two equal pieces perpendicular to its length. Each piece has retentivity B_r. The pieces are placed end-to-end with like poles together (N-N). If they behave like a single soft magnetic material in Earth’s field (B_E = 5 × 10⁻⁵ T), estimate the repulsive force. Assume cross-sectional area A = 1 cm².

<details><summary>Solution</summary><p><strong>Setup:</strong></p><ul><li>Two pieces: each with retentivity B_r</li><li>Like poles together (N-N or S-S) → repulsion</li><li>Earth’s field tries to flip one piece</li></ul><p><strong>Magnetic field at interface:</strong></p><p>Each piece produces field ≈ B_r/2 at its pole (using dipole approximation)</p><p><strong>Field between facing poles:</strong> B ≈ B_r (both contribute)</p><p><strong>However, without knowing actual B_r value, we can’t calculate numerical force.</strong></p><p><strong>General approach:</strong></p><p>Force between magnetic poles:</p>$$F = \frac{B^2 A}{2\mu_0}$$<p>where B is field at interface.</p><p>If B_r given, say B_r = 0.5 T:</p>$$F = \frac{(0.5)^2 \times 10^{-4}}{2 \times 4\pi \times 10^{-7}}$$

$$F = \frac{0.25 \times 10^{-4}}{8\pi \times 10^{-7}} = \frac{2.5 \times 10^{-5}}{2.5 \times 10^{-6}} \approx 10 \text{ N}$$<p><strong>Answer:</strong> Force depends on B_r value (not given). Method: $F = \frac{B^2 A}{2\mu_0}$</p></details>

---

## Applications: Where Magnetic Materials Matter

### 1. Transformer Cores

**Material:** Soft ferromagnetic (silicon steel, ferrites)

**Why soft?**

- Low hysteresis loss (narrow loop)
- Easy magnetization/demagnetization with AC
- High μ_r (concentrates flux)

**Energy loss:** Proportional to loop area × frequency

### 2. Permanent Magnets

**Material:** Hard ferromagnetic (alnico, NdFeB, SmCo)

**Why hard?**

- High retentivity (strong residual field)
- High coercivity (resists demagnetization)
- Wide hysteresis loop

**Applications:** Motors, generators, speakers, MRI, magnetic latches

### 3. Magnetic Storage

**Material:** Hard ferromagnetic films

**Principle:**

- Data stored as magnetization direction (0 or 1)
- High coercivity prevents accidental erasure
- Read head detects field direction

**Examples:** Hard drives, magnetic tapes, credit card strips

### 4. MRI Machines

**Material:** Superconductors (perfect diamagnetism)

**Principle:**

- χ = -1 (perfect diamagnet)
- Expels all magnetic flux (Meissner effect)
- Creates ultra-strong stable fields (3-7 T)

---

## Connections: The Web of Knowledge

### Link to Magnetic Dipole

- Atomic magnetic moments create bulk properties
- M = (dipole moment per atom) × (number density)
- See: [Magnetic Dipole](../magnetic-dipole/index.md)

### Link to Electromagnetic Induction

- Changing B in magnetic core induces EMF
- Hysteresis loss dissipated as heat
- See: [Faraday’s Law](../../electromagnetic-induction/faradays-law/index.md)

### Link to Ampere’s Law

- H = nI from Ampere’s law
- B = μH in material
- See: [Ampere’s Circuital Law](../amperes-law/index.md)

### Link to Atomic Structure

- Paramagnetic: unpaired electrons
- Diamagnetic: paired electrons
- See: [Atomic Structure](../../../chemistry/atomic-structure/electronic-configuration/index.md)

---

## Quick Revision: Formula Sheet

| Quantity | Formula | Note |
| --- | --- | --- |
| Magnetization | $M = \chi H$ | Response to H |
| Susceptibility | $\chi = \mu_r - 1$ | Dimensionless |
| Permeability | $\mu_r = 1 + \chi$ | Relative to μ₀ |
| B-H relation | $B = \mu_0 \mu_r H$ | In material |
| B-M relation | $B = \mu_0(H + M)$ | Alternative form |
| Curie law (para) | $\chi = \frac{C}{T}$ | χ ∝ 1/T |
| Curie-Weiss (ferro) | $\chi = \frac{C}{T - T_C}$ | Above T_C |
| Hysteresis loss | $E = \oint H \, dB$ | Energy per cycle |

**Classification:**

- **Diamagnetic:** χ < 0, μ_r < 1, weak repulsion
- **Paramagnetic:** χ > 0 (small), μ_r > 1 (slightly), weak attraction
- **Ferromagnetic:** χ » 0, μ_r » 1, strong attraction

---

## Exam Strategy

**Pattern Recognition:**

- “χ negative” → Diamagnetic
- “χ positive small (~10⁻⁵)” → Paramagnetic
- “χ large (~10³)” → Ferromagnetic
- “Temperature increases, χ decreases” → Para or Ferro
- “Hysteresis loop” → Ferromagnetic

**Common Question Types:**

1. Classification from χ or μ_r (40%)
2. Temperature dependence (Curie law) (30%)
3. B-H-M calculations (20%)
4. Hysteresis properties (10%)

**Time Savers:**

- μ_r = 1 + χ (memorize!)
- Curie: χ ∝ 1/T
- Retentivity at H = 0, Coercivity at M = 0

**Quick Checks:**

- Diamagnetic always has χ < 0
- μ_r close to 1? Dia or Para
- μ_r » 1? Definitely Ferro

---

## Summary: Key Takeaways

1. **Three Types:** Diamagnetic (χ < 0), Paramagnetic (χ > 0, small), Ferromagnetic (χ » 0, large)
2. **Key Relations:** χ = μ_r - 1, B = μ₀μ_r H = μ₀(H + M)
3. **Temperature:** Paramagnetic χ ∝ 1/T (Curie), Ferromagnetic χ ∝ 1/(T - T_C) (Curie-Weiss)
4. **Domains:** Ferromagnetic has spontaneous magnetization in regions; field aligns domains
5. **Hysteresis:** Retentivity (B when H = 0), Coercivity (H when B = 0), loop area = energy loss
6. **Soft vs Hard:** Soft (narrow loop, transformers), Hard (wide loop, permanent magnets)
7. **JEE Pattern:** 60% classification + χ/μ_r, 25% temperature effects, 15% hysteresis

---

*Last Updated: April 5, 2025*
*Next Chapter: [Electromagnetic Induction](../../electromagnetic-induction/index.md)*
*Previous Topic: [Magnetic Dipole](../magnetic-dipole/index.md)*

From TestGuru · our mock-test platform

## You've read Magnetic Materials: Para, Dia, and Ferromagnetism.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=magnetism&tg_exam=jee-main&tg_page=%2Fphysics%2Fmagnetism%2Fmagnetic-materials%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/magnetism/magnetic-materials/",this.page.identifier="/physics/magnetism/magnetic-materials/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="magneticField" id="anim-magneticField-1795396423969588300"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-magneticField-1795396423969588300")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/magnetism/magnetic-materials/](https://jeenotes.in/physics/magnetism/magnetic-materials/) · raw HTML: `offline/physics/magnetism/magnetic-materials/index.html`_
