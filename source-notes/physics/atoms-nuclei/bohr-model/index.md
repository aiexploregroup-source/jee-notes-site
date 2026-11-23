---
title: "Bohr Model - Quantization of Energy Levels"
source: "https://jeenotes.in/physics/atoms-nuclei/bohr-model/"
description: "Master Bohr's postulates, energy levels, radius calculations, and atomic transitions for JEE Main and Advanced"
updated: "2025-12-26"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 9"
html: "../../../../offline/physics/atoms-nuclei/bohr-model/index.html"
extracted: "2026-11-23"
---

> Master Bohr's postulates, energy levels, radius calculations, and atomic transitions for JEE Main and Advanced

# Bohr Model: The Quantum Leap That Saved Atoms

## The Quantum Foundation of Everything 🎬

Before Oppenheimer could split atoms, Bohr had to explain why they don’t collapse! His quantum model (1913) was the first successful theory combining classical and quantum physics, explaining atomic stability and spectral lines in one brilliant stroke.

*“Anyone who is not shocked by quantum theory has not understood it.”* - Niels Bohr

---

## The Crisis Rutherford Created

### Rutherford’s Model (1911)

✓ Explained α-scattering
✓ Discovered the nucleus

❌ **Fatal Problem:** Accelerating charges radiate energy!

```fallback
Electron orbit
         ↻ ⊖
    ╱         ╲
   │     ⊕     │ ← Nucleus
    ╲         ╱
         ↓
    Radiates EM waves
         ↓
    Loses energy
         ↓
    Spirals inward!
         ↓
    COLLAPSE! 💥
```

**Classical prediction:** Atom collapses in ~10⁻¹¹ seconds
**Reality:** Atoms are stable for billions of years!

---

## Bohr’s Revolutionary Postulates (1913)

### Postulate 1: Stationary Orbits

:::box
**Electrons revolve in certain discrete orbits called stationary states where they DO NOT radiate energy, despite being accelerated.**

These orbits have quantized angular momentum:

$$L = mvr = \frac{nh}{2π} = n\hbar$$

where:

- n = 1, 2, 3, &mldr; (principal quantum number)
- ℏ = h/2π = 1.055 × 10⁻³⁴ J·s (reduced Planck’s constant)
  :::

**This was revolutionary!** It defied classical electromagnetism.

### Postulate 2: Quantum Transitions

:::box
**Energy is emitted or absorbed only when an electron jumps from one stationary orbit to another.**

$$E_{photon} = E_i - E_f = hν$$

where:

- E_i = initial energy level
- E_f = final energy level
- ν = frequency of emitted/absorbed photon
  :::

```fallback
n=3 ────── E₃
        ↓ hν
    n=2 ────── E₂
        ↓ hν'
    n=1 ────── E₁ (ground state)
```

---

## Derivation of Bohr’s Model

### For Hydrogen Atom (Z = 1)

Two equations govern electron motion:

**1. Centripetal Force = Coulomb Force**

$$\frac{mv^2}{r} = \frac{ke^2}{r^2}$$

$$mv^2r = ke^2 \quad \text{...(1)}$$

**2. Angular Momentum Quantization**

$$mvr = n\hbar \quad \text{...(2)}$$

### Solving for Radius

From (2): $v = \frac{n\hbar}{mr}$

Substituting in (1):

$$m \cdot \frac{n^2\hbar^2}{m^2r^2} \cdot r = ke^2$$

$$\frac{n^2\hbar^2}{mr} = ke^2$$

:::box
**Bohr Radius Formula**

$$r_n = \frac{n^2\hbar^2}{mke^2} = n^2 a_0$$

where:

$$a_0 = \frac{\hbar^2}{mke^2} = 0.529 \text{ Å}$$

is the **Bohr radius** (ground state radius of hydrogen).
:::

### For Hydrogen-like Ions (Z ≠ 1)

:::box

$$r_n = \frac{n^2 a_0}{Z}$$

where Z = atomic number
:::

---

## Energy Levels

### Kinetic Energy

From $mv^2r = ke^2$:

$$K = \frac{1}{2}mv^2 = \frac{ke^2}{2r}$$

### Potential Energy

$$U = -\frac{ke^2}{r}$$

### Total Energy

$$E = K + U = \frac{ke^2}{2r} - \frac{ke^2}{r} = -\frac{ke^2}{2r}$$

Substituting $r_n = \frac{n^2a_0}{Z}$:

:::box
**Bohr Energy Formula**

$$E_n = -\frac{ke^2}{2r_n} = -\frac{Z^2 ke^2}{2n^2 a_0}$$

$$E_n = -\frac{13.6 \times Z^2}{n^2} \text{ eV}$$

where 13.6 eV is the **Rydberg energy**.
:::

### Ground State (n = 1)

$$E_1 = -13.6 Z^2 \text{ eV}$$

**Note:** Negative energy means bound state!

---

## Velocity of Electron

From angular momentum:

$$v = \frac{n\hbar}{mr_n}$$

Substituting r_n:

:::box

$$v_n = \frac{Zke^2}{n\hbar} = \frac{Z}{n} \times c/137$$

where c/137 ≈ 2.19 × 10⁶ m/s is the ground state velocity of hydrogen.
:::

**Fine structure constant:** α = 1/137 ≈ 0.0073

For hydrogen ground state (Z=1, n=1):

$$v_1 = c/137 \approx 2.19 × 10^6 \text{ m/s}$$

This is only 0.7% of light speed - non-relativistic! ✓

---

## Key Formulas Summary Table

| Quantity | Formula (H-like) | n-dependence | Z-dependence |
| --- | --- | --- | --- |
| **Radius** | r_n = n²a₀/Z | r ∝ n² | r ∝ 1/Z |
| **Velocity** | v_n = Zke²/nℏ | v ∝ 1/n | v ∝ Z |
| **Energy** | E_n = -13.6Z²/n² eV | E ∝ 1/n² | E ∝ Z² |
| **Period** | T_n = 2πr_n/v_n | T ∝ n³ | T ∝ 1/Z² |
| **Frequency** | f = 1/T | f ∝ 1/n³ | f ∝ Z² |
| **KE** | K = -E_n/2 | K ∝ 1/n² | K ∝ Z² |
| **PE** | U = 2E_n | U ∝ 1/n² | U ∝ Z² |

**Universal relations:**

- E = -K = U/2 (Virial theorem)
- Total angular momentum: L = nℏ

---

## Interactive Demo: Bohr Atom Visualizer

```javascript
const BohrAtomDemo = () => {
  const [Z, setZ] = useState(1); // Atomic number
  const [n, setN] = useState(1); // Quantum number

  const a0 = 0.529; // Å
  const rydberg = 13.6; // eV

  const radius = (n * n * a0) / Z;
  const energy = -(rydberg * Z * Z) / (n * n);
  const velocity = (Z / n) * 2.19e6; // m/s
  const period = (n * n * n) / (Z * Z) * 1.52e-16; // seconds

  return (
    <div>
      <h3>Bohr Atom Calculator</h3>

      <label>Element (Z): {Z}</label>
      <select value={Z} onChange={(e) => setZ(Number(e.target.value))}>
        <option value="1">Hydrogen (H)</option>
        <option value="2">Helium ion (He⁺)</option>
        <option value="3">Lithium ion (Li²⁺)</option>
        <option value="6">Carbon ion (C⁵⁺)</option>
      </select>

      <label>Quantum Number (n): {n}</label>
      <input
        type="range"
        min="1"
        max="7"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />

      <div className="results">
        <h4>Orbital Properties:</h4>
        <p>Orbital radius: {radius.toFixed(3)} Å</p>
        <p>Energy level: {energy.toFixed(2)} eV</p>
        <p>Electron velocity: {(velocity/1e6).toFixed(2)} × 10⁶ m/s</p>
        <p>Orbital period: {(period/1e-16).toFixed(2)} × 10⁻¹⁶ s</p>

        <h4>Transitions from n={n}:</h4>
        {n > 1 && (
          <>
            <p>To n={n-1}: Photon energy = {(Math.abs(energy) - Math.abs(-(rydberg*Z*Z)/((n-1)*(n-1)))).toFixed(2)} eV</p>
            <p>To n=1: Photon energy = {(Math.abs(energy) - Math.abs(-(rydberg*Z*Z)/(1))).toFixed(2)} eV</p>
          </>
        )}

        <h4>Comparisons:</h4>
        <p>r_n/r_1 = {(n*n).toFixed(0)} (radius increases as n²)</p>
        <p>v_n/v_1 = {(1/n).toFixed(2)} (velocity decreases as 1/n)</p>
        <p>|E_n|/|E_1| = {(1/(n*n)).toFixed(3)} (energy decreases as 1/n²)</p>
      </div>

      <div className="visualization">
        <svg width="400" height="400" viewBox="-200 -200 400 400">
          {/* Nucleus */}
          <circle cx="0" cy="0" r="5" fill="red" />

          {/* Orbits */}
          {[1, 2, 3, 4, 5].map(orbit => {
            const r = (orbit * orbit * 30) / Z; // Scaled for display
            return (
              <circle
                key={orbit}
                cx="0"
                cy="0"
                r={r}
                fill="none"
                stroke={orbit === n ? "blue" : "#ccc"}
                strokeWidth={orbit === n ? 2 : 1}
              />
            );
          })}

          {/* Electron */}
          <circle
            cx={(n * n * 30) / Z}
            cy="0"
            r="3"
            fill="blue"
          />
        </svg>
      </div>
    </div>
  );
};
```

---

## Memory Tricks 🧠

### “BOHR” for Postulates

**B**ound orbits (quantized L = nℏ)
**O**rbits are stationary (no radiation)
**H**ν equals energy difference
**R**adiation only during transitions

### Energy Formula Trick

$$E_n = -\frac{13.6 Z^2}{n^2} \text{ eV}$$

**“13.6 is magic, Z squared on top, n squared below, negative keeps ’em bound!”**

### Interactive Demo: Visualize Bohr Atom

Explore electron orbits, energy levels, and transitions in the Bohr atomic model.

### Scaling Rules (Easy to remember!)

```fallback
n → 2n (larger orbit)
├─ Radius ×4 (n²)
├─ Velocity ÷2 (1/n)
├─ Energy ÷4 (1/n²)
└─ Period ×8 (n³)

Z → 2Z (heavier nucleus)
├─ Radius ÷2 (1/Z)
├─ Velocity ×2 (Z)
├─ Energy ×4 (Z²)
└─ Period ÷4 (1/Z²)
```

### “KEU” Relations

```fallback
K = +|E|  (Kinetic is positive magnitude)
E = -|E|  (Total is negative)
U = -2|E| (Potential is twice total)

Or: K + U = E
    K - 2K = -K ✓
```

---

## Common Mistakes ⚠️

### ❌ Mistake 1: Sign confusion

**Wrong:** Energy is positive
**Right:** E_n is always negative (bound states)

### ❌ Mistake 2: Forgetting Z

**Wrong:** Using E = -13.6/n² for He⁺
**Right:** E = -13.6 × 4/n² = -54.4/n² eV (Z=2)

### ❌ Mistake 3: ℏ vs h confusion

**Wrong:** L = nh
**Right:** L = nℏ = nh/2π

### ❌ Mistake 4: Transition direction

**Wrong:** ΔE always positive
**Right:** ΔE = E_final - E_initial (can be ±)

- Absorption: ΔE > 0 (n_f > n_i)
- Emission: ΔE < 0 (n_f < n_i)

### ❌ Mistake 5: Ground state number

**Wrong:** n = 0 is ground state
**Right:** n = 1 is ground state (n starts from 1!)

---

## Important Numerical Values

### Fundamental Constants

| Constant | Symbol | Value |
| --- | --- | --- |
| Bohr radius | a₀ | 0.529 Å = 5.29 × 10⁻¹¹ m |
| Rydberg energy | E₀ | 13.6 eV = 2.18 × 10⁻¹⁸ J |
| Ground state velocity | v₁ | c/137 = 2.19 × 10⁶ m/s |
| Reduced Planck’s | ℏ | 1.055 × 10⁻³⁴ J·s |
| Fine structure const | α | 1/137 ≈ 0.0073 |

### Hydrogen Energy Levels

| n | E_n (eV) | r_n (Å) | Binding Energy (eV) |
| --- | --- | --- | --- |
| 1 | -13.6 | 0.529 | 13.6 |
| 2 | -3.4 | 2.12 | 3.4 |
| 3 | -1.51 | 4.76 | 1.51 |
| 4 | -0.85 | 8.46 | 0.85 |
| ∞ | 0 | ∞ | 0 (ionized) |

**Binding Energy** = |E_n| = energy needed to remove electron

---

## Derivations You Must Know

### 1. Bohr Radius

Starting from:

- Force balance: $mv^2/r = ke^2/r^2$
- Quantization: $mvr = n\hbar$

Eliminating v:

$$v = \frac{n\hbar}{mr}$$

$$m \cdot \frac{n^2\hbar^2}{m^2r^2} \cdot \frac{1}{r} = \frac{ke^2}{r^2}$$

$$r_n = \frac{n^2\hbar^2}{mke^2} = \frac{n^2 \times (1.055 \times 10^{-34})^2}{9.11 \times 10^{-31} \times 9 \times 10^9 \times (1.6 \times 10^{-19})^2}$$

$$r_n = n^2 \times 0.529 \text{ Å}$$

### 2. Energy Levels

$$E = K + U = \frac{1}{2}mv^2 - \frac{ke^2}{r}$$

From force balance: $mv^2 = \frac{ke^2}{r}$

$$E = \frac{ke^2}{2r} - \frac{ke^2}{r} = -\frac{ke^2}{2r}$$

$$E_n = -\frac{ke^2}{2r_n} = -\frac{ke^2}{2} \cdot \frac{mke^2}{n^2\hbar^2}$$

$$E_n = -\frac{mk^2e^4}{2n^2\hbar^2} = -\frac{13.6}{n^2} \text{ eV}$$

### 3. Rydberg Formula (from Bohr)

$$E_{photon} = E_i - E_f = 13.6\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right) \text{ eV}$$

$$hν = \frac{hc}{λ}$$

$$\frac{1}{λ} = \frac{13.6}{hc}\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

$$\frac{1}{λ} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $R = \frac{13.6 \text{ eV}}{hc} = 1.097 \times 10^7 \text{ m}^{-1}$ is the **Rydberg constant**.

---

## Problem-Solving Strategy

### Step 1: Identify the System

- Hydrogen (Z=1) or H-like ion (Z>1)?
- Ground state (n=1) or excited state?
- Transition between levels?

### Step 2: Choose Formula

```fallback
Want?           Use
----            ---
Radius          r_n = n²a₀/Z
Energy          E_n = -13.6Z²/n²
Velocity        v_n = Zke²/nℏ
Transition      ΔE = E_f - E_i = hν
Ionization      IE = |E_n| (to remove from n)
Wavelength      1/λ = R(1/n_f² - 1/n_i²)
```

### Step 3: Watch Units

- Energy: eV (atomic) or J (SI)
- Length: Å (atomic) or m (SI)
- Use hc = 1240 eV·nm for quick calculations

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** Calculate the radius and energy of the first Bohr orbit of hydrogen.

**Solution:**

```fallback
For n=1, Z=1:
r₁ = a₀ = 0.529 Å
E₁ = -13.6 eV
```

**Q2.** Find the energy required to remove an electron from the ground state of hydrogen.

**Solution:**

```fallback
Ionization energy = |E₁| = 13.6 eV
```

**Q3.** An electron in hydrogen jumps from n=3 to n=2. Calculate:
(a) Energy of emitted photon
(b) Wavelength

**Solution:**

```fallback
(a) E₃ = -13.6/9 = -1.51 eV
    E₂ = -13.6/4 = -3.4 eV

    ΔE = E₂ - E₃ = -3.4 - (-1.51) = -1.89 eV
    |ΔE| = 1.89 eV (emitted)

(b) λ = hc/|ΔE| = 1240 eV·nm / 1.89 eV = 656 nm
    (This is H-alpha line in Balmer series!)
```

---

### Level 2: JEE Main/Advanced

**Q4.** Compare the radii of first orbits of H, He⁺, and Li²⁺.

**Solution:**

```fallback
r₁ = a₀/Z

For H (Z=1): r = a₀
For He⁺ (Z=2): r = a₀/2
For Li²⁺ (Z=3): r = a₀/3

Ratio: 1 : 1/2 : 1/3 = 6 : 3 : 2
```

**Q5.** The energy of an electron in second Bohr orbit of He⁺ equals that of electron in nth orbit of hydrogen. Find n.

**Solution:**

```fallback
For He⁺ (Z=2), n=2:
E = -13.6 × 4/4 = -13.6 eV

For H (Z=1):
E = -13.6/n²

Equating: -13.6/n² = -13.6
n² = 1
n = 1

Wait, this gives ground state of H = first excited state of He⁺
Both have E = -13.6 eV ✓
```

**Q6.** Find the velocity of electron in the third orbit of hydrogen atom.

**Solution:**

```fallback
v_n = (Z/n) × (c/137)

For n=3, Z=1:
v₃ = (1/3) × (3×10⁸/137)
v₃ = (1/3) × 2.19×10⁶
v₃ = 7.3×10⁵ m/s
```

---

### Level 3: JEE Advanced

**Q7.** A photon of wavelength 102.6 nm ionizes a hydrogen atom from its ground state. Find:
(a) Energy of photon
(b) Kinetic energy of ejected electron
(c) Velocity of ejected electron

**Solution:**

```fallback
(a) E_photon = hc/λ = 1240 eV·nm / 102.6 nm = 12.09 eV

(b) Binding energy of ground state = 13.6 eV

    KE of electron = E_photon - BE
    KE = 12.09 - 13.6 = -1.51 eV

    Wait! Photon energy less than ionization energy!
    Cannot ionize. ✗

    Let me recalculate:
    Actually 102.6 nm is UV, E = 12.09 eV < 13.6 eV
    This photon CANNOT ionize hydrogen from ground state.

    However, if the question is correct, maybe:
    E = 1240/102.6 = 12.08...

    Actually, for ionization threshold:
    λ = 1240/13.6 = 91.2 nm

    Since 102.6 > 91.2, cannot ionize from n=1.

    Could ionize from n=2:
    BE(n=2) = 3.4 eV < 12.09 eV ✓

    KE = 12.09 - 3.4 = 8.69 eV

(c) ½mv² = 8.69 eV = 8.69 × 1.6×10⁻¹⁹ J
    v = √(2×8.69×1.6×10⁻¹⁹ / 9.11×10⁻³¹)
    v = 1.75×10⁶ m/s
```

**Q8.** An electron in hydrogen makes a transition from n=4 to n=2. Calculate:
(a) Angular momentum change
(b) Change in radius
(c) Number of revolutions per second in each orbit

**Solution:**

```fallback
(a) L = nℏ
    ΔL = L₄ - L₂ = 4ℏ - 2ℏ = 2ℏ
    ΔL = 2 × 1.055×10⁻³⁴ = 2.11×10⁻³⁴ J·s

(b) r_n = n²a₀
    r₄ = 16 × 0.529 = 8.46 Å
    r₂ = 4 × 0.529 = 2.12 Å
    Δr = 8.46 - 2.12 = 6.34 Å

(c) v_n = c/137n
    For n=2: v₂ = c/(137×2) = 1.09×10⁶ m/s
    For n=4: v₄ = c/(137×4) = 5.47×10⁵ m/s

    f = v/2πr
    f₂ = 1.09×10⁶/(2π × 2.12×10⁻¹⁰) = 8.2×10¹⁴ Hz
    f₄ = 5.47×10⁵/(2π × 8.46×10⁻¹⁰) = 1.03×10¹⁴ Hz
```

**Q9.** A hydrogen atom in ground state absorbs a photon of wavelength λ. The electron jumps to an excited state and the atom becomes α times its original size. Find:
(a) The value of n
(b) Wavelength λ
(c) The minimum value of α

**Solution:**

```fallback
(a) r_n = n²a₀, r₁ = a₀
    r_n/r₁ = n² = α
    n = √α

(b) ΔE = E_n - E₁ = -13.6/n² - (-13.6)
    ΔE = 13.6(1 - 1/α)

    λ = hc/ΔE = 1240 eV·nm / [13.6(1-1/α)]
    λ = 91.2(1-1/α)⁻¹ nm

(c) Minimum α when n is smallest excited state: n=2
    α_min = 2² = 4

    Then λ = 91.2/(1-1/4) = 91.2/(3/4) = 121.6 nm
    (This is Lyman-alpha line!)
```

**Q10.** Show that in Bohr model, the frequency of revolution of electron in nth orbit is related to frequency of photon emitted in n→(n-1) transition when n»1. (Bohr’s Correspondence Principle)

**Solution:**

```fallback
Frequency of revolution: f_rev = v/2πr

For large n:
E_n ≈ -13.6/n²
E_{n-1} ≈ -13.6/(n-1)² ≈ -13.6/(n²-2n+1)

For n>>1: (n-1)² ≈ n²(1-2/n)

ΔE = E_{n-1} - E_n ≈ -13.6/n² × [1/(1-2/n)² - 1]

Using (1-x)⁻² ≈ 1+2x for small x:
ΔE ≈ 13.6/n² × [1+4/n - 1] = 13.6 × 4/n³

f_photon = ΔE/h = (13.6 × 4)/(h × n³)

Now, f_rev in nth orbit:
v_n = c/137n, r_n = n²a₀

f_rev = v/(2πr) = (c/137n)/(2π × n²a₀)
      = c/(274πn³a₀)

Numerically, this works out to:
f_rev = 54.4/n³ × 10¹⁴ Hz

And: 13.6 × 4/h = 54.4/n³ × 10¹⁴ Hz

∴ f_photon = f_rev for large n!

This is Bohr's correspondence principle:
Quantum → Classical for large n
```

---

## Successes of Bohr Model

### ✓ Explained

1. **Atomic Stability**

   - Stationary orbits don’t radiate
   - Atoms are stable!
2. **Hydrogen Spectrum**

   - Predicted ALL spectral series
   - Lyman, Balmer, Paschen, etc.
3. **Rydberg Constant**

   - Calculated R = 1.097 × 10⁷ m⁻¹
   - Matched experimental value!
4. **H-like Ions**

   - He⁺, Li²⁺, etc. explained
   - Z² scaling verified
5. **Atomic Sizes**

   - Predicted a₀ = 0.529 Å
   - Matches observations

---

## Limitations of Bohr Model

### ✗ Cannot Explain

1. **Multi-electron Atoms**

   - Works only for H-like (one electron)
   - Fails for He, Li, etc.
2. **Fine Structure**

   - Spectral lines have fine splitting
   - Needs spin and relativistic effects
3. **Zeeman/Stark Effects**

   - Spectral splitting in fields
   - Needs advanced quantum mechanics
4. **Intensity of Spectral Lines**

   - Cannot predict which transitions are bright
   - Needs transition probabilities
5. **Wave-Particle Duality**

   - Treats electron as classical particle
   - Ignores de Broglie waves

### Solution: Quantum Mechanics (Schrödinger, 1926)

Wave functions, orbitals, probability densities&mldr;
But Bohr was the crucial stepping stone! 🪜

---

## Cross-Links to Related Topics

- [Hydrogen Spectrum](../hydrogen-spectrum/index.md) - Application of Bohr model
- [Rutherford Model](../rutherford-model/index.md) - Problem Bohr solved
- [de Broglie Waves](../../dual-nature/de-broglie/index.md) - Explains WHY quantization
- [Photoelectric Effect](../../dual-nature/photoelectric-effect/index.md) - Photon energy hν

---

## Quick Revision Checklist ✓

- Two postulates: L = nℏ, ΔE = hν
- Bohr radius: a₀ = 0.529 Å
- Rydberg energy: 13.6 eV
- E_n = -13.6Z²/n² eV
- r_n = n²a₀/Z
- v_n ∝ Z/n, v₁ = c/137
- E = -K = U/2 (Virial theorem)
- Ground state: n=1, not n=0
- Negative energy = bound
- Ionization energy = |E_n|
- Works for H-like ions only
- Led to quantum mechanics

---

## Final Tips for JEE

1. **Master the three formulas**: r_n, E_n, v_n
2. **Don’t forget Z**: Crucial for ions!
3. **Sign matters**: Energy is negative
4. **Transition direction**: E_f - E_i determines emission/absorption
5. **Scaling laws**: Know how things change with n and Z
6. **Ground state**: Always n=1 (not zero!)
7. **Quick check**: For H, E₁=-13.6, r₁=0.529Å, v₁=c/137
8. **Limitations**: Be ready to critique Bohr model
9. **Historical context**: 1913, Nobel 1922
10. **Correspondence principle**: Quantum→Classical for large n

---

*Last updated: April 25, 2025*
*Previous: [Rutherford Model](../rutherford-model/index.md)*
*Next: [Hydrogen Spectrum](../hydrogen-spectrum/index.md)*

From TestGuru · our mock-test platform

## You've read Bohr Model - Quantization of Energy Levels.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=atoms-nuclei&tg_exam=jee-main&tg_page=%2Fphysics%2Fatoms-nuclei%2Fbohr-model%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/atoms-nuclei/bohr-model/",this.page.identifier="/physics/atoms-nuclei/bohr-model/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="bohrModel" id="anim-bohrModel-1795396422797949768"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-bohrModel-1795396422797949768")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/atoms-nuclei/bohr-model/](https://jeenotes.in/physics/atoms-nuclei/bohr-model/) · raw HTML: `offline/physics/atoms-nuclei/bohr-model/index.html`_
