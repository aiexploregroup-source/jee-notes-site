---
title: "Hydrogen Spectrum - Spectral Series Explained"
source: "https://jeenotes.in/physics/atoms-nuclei/hydrogen-spectrum/"
description: "Master Lyman, Balmer, Paschen series, Rydberg formula, and spectral line calculations for JEE Main and Advanced"
updated: "2025-12-26"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 9"
html: "../../../../offline/physics/atoms-nuclei/hydrogen-spectrum/index.html"
extracted: "2026-11-23"
---

> Master Lyman, Balmer, Paschen series, Rydberg formula, and spectral line calculations for JEE Main and Advanced

# Hydrogen Spectrum: The Fingerprint of Atoms

## The Stellar Spectroscopy Connection 🎬

Just like forensic analysis in crime shows identifies substances from traces, astronomers identify elements in distant stars from their spectral fingerprints! Hydrogen’s spectrum, decoded by Bohr, revealed the quantum nature of atoms and unlocked the composition of the universe.

*“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood&mldr; were made in the interiors of collapsing stars. We are made of star stuff.”* - Carl Sagan

---

## The Historical Journey

### Pre-Quantum Era

**1814:** Fraunhofer discovers dark lines in solar spectrum
**1885:** Balmer finds empirical formula for visible H lines
**1890s:** Lyman, Paschen, Brackett, Pfund discover other series

### The Mystery

```fallback
Why discrete lines?
Why specific wavelengths?
What's the pattern?
     ↓
Balmer's formula (empirical):
λ = 364.6 × n²/(n²-4) nm
     ↓
    BUT WHY?
```

### Bohr’s Breakthrough (1913)

Derived ALL spectral series from first principles:

- Explained Balmer’s formula
- Predicted undiscovered series
- Calculated Rydberg constant

**Triumph of quantum theory!** 🎯

---

## Emission vs Absorption Spectrum

### Emission Spectrum

Electron jumps from **higher** to **lower** energy level:

```fallback
Excited atom
         ↓
    n=3 ──────
         ↓ hν (photon emitted)
    n=2 ──────
         ↓
    n=1 ──────
         ↓
    Ground state

Bright lines on dark background
```

**How produced:**

- Heat gas / pass electric discharge
- Atoms get excited
- Emit light at specific wavelengths
- See colored lines

### Absorption Spectrum

Electron jumps from **lower** to **higher** energy level:

```fallback
White light → Gas → Detector

    Atom absorbs photon of exact energy

    n=1 ──────
         ↑ hν (absorbed from white light)
    n=2 ──────
         ↑
    n=3 ──────

Dark lines on continuous spectrum
```

**How produced:**

- Pass white light through cool gas
- Gas absorbs specific wavelengths
- See dark lines at same positions as emission

---

## The Rydberg Formula

From Bohr’s theory:

:::box
**Generalized Rydberg Formula**

$$\frac{1}{λ} = RZ^2\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where:

- R = 1.097 × 10⁷ m⁻¹ (Rydberg constant)
- Z = atomic number (1 for hydrogen)
- n_i = initial level (higher)
- n_f = final level (lower)
- λ = wavelength of emitted photon
  :::

### In Terms of Wavenumber

$$\bar{ν} = \frac{1}{λ} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

where $\bar{ν}$ (nu-bar) is the wavenumber in m⁻¹

### Energy Form

$$E_{photon} = 13.6\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right) \text{ eV}$$

---

## Spectral Series of Hydrogen

### Complete Map

```fallback
n=∞ ──────  0 eV (ionization)
    n=6 ──────  -0.38 eV ┐
    n=5 ──────  -0.54 eV │ Pfund (IR)
    n=4 ──────  -0.85 eV ├ Brackett (IR)
    n=3 ──────  -1.51 eV ├ Paschen (IR)
    n=2 ──────  -3.40 eV ├ Balmer (Visible + UV)
    n=1 ──────  -13.6 eV ┘ Lyman (UV)
```

---

### 1. Lyman Series (UV)

**Transitions:** n → 1 (all to ground state)

$$\frac{1}{λ} = R\left(1 - \frac{1}{n^2}\right), \quad n = 2, 3, 4, ...$$

| Transition | Name | Wavelength (nm) | Energy (eV) |
| --- | --- | --- | --- |
| 2 → 1 | Lyman-α | 121.6 | 10.2 |
| 3 → 1 | Lyman-β | 102.6 | 12.1 |
| 4 → 1 | Lyman-γ | 97.3 | 12.8 |
| ∞ → 1 | Series limit | 91.2 | 13.6 |

**Region:** Ultraviolet (UV)
**Discovery:** Theodore Lyman (1906-1914)
**Importance:** Dominant in stellar atmospheres

---

### 2. Balmer Series (Visible)

**Transitions:** n → 2 (all to first excited state)

$$\frac{1}{λ} = R\left(\frac{1}{4} - \frac{1}{n^2}\right), \quad n = 3, 4, 5, ...$$

| Transition | Name | Wavelength (nm) | Color | Energy (eV) |
| --- | --- | --- | --- | --- |
| 3 → 2 | H-α | 656.3 | Red | 1.89 |
| 4 → 2 | H-β | 486.1 | Cyan | 2.55 |
| 5 → 2 | H-γ | 434.0 | Blue | 2.86 |
| 6 → 2 | H-δ | 410.2 | Violet | 3.02 |
| ∞ → 2 | Series limit | 364.6 | UV | 3.4 |

**Region:** Visible + near UV
**Discovery:** Johann Balmer (1885) - first discovered!
**Importance:** Easily observed, used in astronomy

**The Famous Four:**

- H-α (red): Most prominent, nebulae glow
- H-β (cyan): Second brightest
- H-γ (blue): Fainter
- H-δ (violet): Faintest visible

---

### 3. Paschen Series (Near IR)

**Transitions:** n → 3

$$\frac{1}{λ} = R\left(\frac{1}{9} - \frac{1}{n^2}\right), \quad n = 4, 5, 6, ...$$

| Transition | Name | Wavelength (nm) | Energy (eV) |
| --- | --- | --- | --- |
| 4 → 3 | Pa-α | 1875 | 0.66 |
| 5 → 3 | Pa-β | 1282 | 0.97 |
| 6 → 3 | Pa-γ | 1094 | 1.13 |
| ∞ → 3 | Series limit | 820 | 1.51 |

**Region:** Near infrared (IR)
**Discovery:** Friedrich Paschen (1908)

---

### 4. Brackett Series (IR)

**Transitions:** n → 4

$$\frac{1}{λ} = R\left(\frac{1}{16} - \frac{1}{n^2}\right), \quad n = 5, 6, 7, ...$$

**First line:** 5 → 4, λ = 4051 nm (4.05 μm)
**Series limit:** ∞ → 4, λ = 1458 nm (1.46 μm)

**Region:** Infrared
**Discovery:** Frederick Brackett (1922)

---

### 5. Pfund Series (Far IR)

**Transitions:** n → 5

$$\frac{1}{λ} = R\left(\frac{1}{25} - \frac{1}{n^2}\right), \quad n = 6, 7, 8, ...$$

**First line:** 6 → 5, λ = 7460 nm (7.46 μm)
**Series limit:** ∞ → 5, λ = 2279 nm (2.28 μm)

**Region:** Far infrared
**Discovery:** August Pfund (1924)

---

## Series Limits

The **series limit** is the shortest wavelength (highest frequency) in each series, corresponding to transition from n = ∞.

:::box
**Series Limit Formula**

$$λ_{limit} = \frac{n_f^2}{R}$$

| Series | n_f | λ_limit (nm) |
| --- | --- | --- |
| Lyman | 1 | 91.2 |
| Balmer | 2 | 364.6 |
| Paschen | 3 | 820 |
| Brackett | 4 | 1458 |
| Pfund | 5 | 2279 |
| ::: |  |  |

**Physical meaning:**

- Energy required to ionize atom from state n_f
- Highest energy photon that can be emitted ending at n_f

---

## Number of Spectral Lines

### From Single Transition n_i → n_f

**Answer:** 1 line (obviously!)

### From State n to Ground State (Direct)

If electron at level n can **only** go directly to ground state:
**Answer:** 1 line

### From State n Allowing All Cascades

If electron at level n can make **all possible** transitions on way down:

:::box
**Total number of lines:**

$$N = \frac{n(n-1)}{2}$$

where n is the highest level.
:::

**Derivation:** Choose 2 levels from n levels: $^nC_2 = \frac{n!}{2!(n-2)!} = \frac{n(n-1)}{2}$

**Examples:**

- n = 2: N = 1 (just 2→1)
- n = 3: N = 3 (3→2, 3→1, 2→1)
- n = 4: N = 6
- n = 5: N = 10

---

## Interactive Demo: Hydrogen Spectrum Visualizer

```javascript
const HydrogenSpectrumDemo = () => {
  const [series, setSeries] = useState('balmer');
  const [niValue, setNiValue] = useState(3);

  const R = 1.097e7; // m^-1
  const nf_values = {
    lyman: 1,
    balmer: 2,
    paschen: 3,
    brackett: 4,
    pfund: 5
  };

  const nf = nf_values[series];
  const ni = niValue;

  const wavenumber = R * (1/(nf*nf) - 1/(ni*ni));
  const wavelength = 1e9 / wavenumber; // nm
  const energy = 13.6 * (1/(nf*nf) - 1/(ni*ni)); // eV

  const getRegion = (wl) => {
    if (wl < 380) return 'UV';
    if (wl < 450) return 'Violet';
    if (wl < 495) return 'Blue';
    if (wl < 570) return 'Green';
    if (wl < 590) return 'Yellow';
    if (wl < 620) return 'Orange';
    if (wl < 750) return 'Red';
    return 'IR';
  };

  const getColor = (wl) => {
    if (wl < 380) return '#8B00FF';
    if (wl < 450) return '#4B0082';
    if (wl < 495) return '#0000FF';
    if (wl < 570) return '#00FF00';
    if (wl < 590) return '#FFFF00';
    if (wl < 620) return '#FFA500';
    if (wl < 750) return '#FF0000';
    return '#8B0000';
  };

  return (
    <div>
      <h3>Hydrogen Spectrum Calculator</h3>

      <label>Series:</label>
      <select value={series} onChange={(e) => setSeries(e.target.value)}>
        <option value="lyman">Lyman (n→1)</option>
        <option value="balmer">Balmer (n→2)</option>
        <option value="paschen">Paschen (n→3)</option>
        <option value="brackett">Brackett (n→4)</option>
        <option value="pfund">Pfund (n→5)</option>
      </select>

      <label>Initial level (nᵢ): {ni}</label>
      <input
        type="range"
        min={nf + 1}
        max={nf + 10}
        value={ni}
        onChange={(e) => setNiValue(Number(e.target.value))}
      />

      <div className="results">
        <h4>Transition: {ni} → {nf}</h4>
        <p>Wavenumber: {(wavenumber/1e7).toFixed(3)} × 10⁷ m⁻¹</p>
        <p>Wavelength: {wavelength.toFixed(1)} nm</p>
        <p>Energy: {energy.toFixed(2)} eV</p>
        <p>Region: {getRegion(wavelength)}</p>

        <div
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: getColor(wavelength),
            marginTop: '20px'
          }}
        >
          {wavelength >= 380 && wavelength <= 750 ? (
            <p style={{color: 'white', padding: '15px'}}>
              Visible Light!
            </p>
          ) : (
            <p style={{color: 'white', padding: '15px'}}>
              Not visible to human eye
            </p>
          )}
        </div>

        <h4>Famous Lines:</h4>
        {series === 'balmer' && (
          <ul>
            <li>H-α (3→2): 656.3 nm (Red)</li>
            <li>H-β (4→2): 486.1 nm (Cyan)</li>
            <li>H-γ (5→2): 434.0 nm (Blue)</li>
            <li>H-δ (6→2): 410.2 nm (Violet)</li>
          </ul>
        )}
        {series === 'lyman' && (
          <ul>
            <li>Lyman-α (2→1): 121.6 nm (UV)</li>
            <li>Lyman-β (3→1): 102.6 nm (UV)</li>
            <li>Series limit: 91.2 nm</li>
          </ul>
        )}
      </div>
    </div>
  );
};
```

---

## Memory Tricks 🧠

### “LBPBP” for Series Order

**L**yman (UV) → n → 1
**B**almer (Visible) → n → 2
**P**aschen (IR) → n → 3
**B**rackett (IR) → n → 4
**P**fund (IR) → n → 5

### “Little Boys Play By Pool” (energy decreasing)

### Balmer Lines Color Mnemonic

**“Red Cats Bring Violets”**

- **R**ed: H-α (656 nm)
- **C**yan: H-β (486 nm)
- **B**lue: H-γ (434 nm)
- **V**iolet: H-δ (410 nm)

### Rydberg Formula Quick

$$\frac{1}{λ} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

**“One over lambda equals R times (one over f-squared minus one over i-squared)”**

**Remember:**

- **f for final** (lower level, smaller n)
- **i for initial** (higher level, larger n)

### Number of Lines

$$N = \frac{n(n-1)}{2}$$

**“n choose 2” = all possible transitions**

Examples: 3→3, 4→6, 5→10, 6→15 (triangular numbers)

### Interactive Demo: Visualize Bohr Model Energy Levels

See electron transitions between quantized energy levels and spectral line emissions.

---

## Common Mistakes ⚠️

### ❌ Mistake 1: Wrong level order

**Wrong:** n_f > n_i for emission
**Right:** n_i > n_f for emission (electron falls down)

### ❌ Mistake 2: Forgetting R

**Wrong:** Using R = 1.1 × 10⁷
**Right:** R = 1.097 × 10⁷ m⁻¹ (be precise!)

### ❌ Mistake 3: Series limit confusion

**Wrong:** Series limit is longest wavelength
**Right:** Series limit is SHORTEST wavelength (n_i = ∞)

### ❌ Mistake 4: Wavelength vs wavenumber

**Wrong:** Mixing up λ and 1/λ
**Right:** Rydberg formula gives 1/λ (wavenumber)

### ❌ Mistake 5: Counting lines incorrectly

**Wrong:** From n=5, only 5 lines possible
**Right:** From n=5, N = 5×4/2 = 10 lines possible

### ❌ Mistake 6: Visible spectrum range

**Wrong:** All Balmer lines are visible
**Right:** Only 4→2, 5→2, 6→2, 7→2 visible; rest UV

---

## Important Values to Memorize

### Rydberg Constant

| Form | Value |
| --- | --- |
| SI | R = 1.097 × 10⁷ m⁻¹ |
| CGS | R = 109,737 cm⁻¹ |
| Relation | R = 13.6 eV / hc |

### Key Wavelengths

| Line | Wavelength | Easy to Remember |
| --- | --- | --- |
| Lyman-α | 121.6 nm | ~122 nm |
| Lyman limit | 91.2 nm | ~91 nm |
| H-α | 656.3 nm | ~656 nm |
| H-β | 486.1 nm | ~486 nm |
| Balmer limit | 364.6 nm | ~365 nm |

### Series Limits

| Series | λ_limit | Formula |
| --- | --- | --- |
| Lyman | 91.2 nm | 1/R |
| Balmer | 364.6 nm | 4/R |
| Paschen | 820 nm | 9/R |

---

## Derivations You Must Know

### 1. Rydberg Formula from Bohr

Energy levels: $E_n = -\frac{13.6}{n^2}$ eV

For transition n_i → n_f:

$$hν = E_i - E_f = -\frac{13.6}{n_i^2} - \left(-\frac{13.6}{n_f^2}\right)$$

$$hν = 13.6\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

$$ν = \frac{c}{λ}$$

$$\frac{hc}{λ} = 13.6\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

$$\frac{1}{λ} = \frac{13.6}{hc}\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

Define: $R = \frac{13.6 \text{ eV}}{hc}$

$$R = \frac{13.6 \times 1.6 \times 10^{-19}}{6.626 \times 10^{-34} \times 3 \times 10^8} = 1.097 \times 10^7 \text{ m}^{-1}$$

$$\therefore \frac{1}{λ} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$$

### 2. Series Limit Wavelength

For n_i = ∞:

$$\frac{1}{λ_{limit}} = R\left(\frac{1}{n_f^2} - 0\right) = \frac{R}{n_f^2}$$

$$λ_{limit} = \frac{n_f^2}{R}$$

### 3. Number of Spectral Lines

From level n, electron can transition to:
n-1, n-2, &mldr;, 3, 2, 1 (total n-1 levels below)

From level n-1: can go to n-2, &mldr;, 1 (total n-2)
From level n-2: can go to n-3, &mldr;, 1 (total n-3)
&mldr;
From level 2: can go to 1 (total 1)

Total = (n-1) + (n-2) + &mldr; + 2 + 1 = $\frac{n(n-1)}{2}$

---

## Problem-Solving Strategy

### Step 1: Identify the Series

- To n=1 → Lyman
- To n=2 → Balmer
- To n=3 → Paschen
- etc.

### Step 2: Determine n_i and n_f

- Emission: n_i > n_f (falls down)
- Absorption: n_i < n_f (jumps up)
- Series limit: n_i = ∞

### Step 3: Choose Formula

```fallback
Want?           Use
----            ---
Wavelength      1/λ = R(1/n_f² - 1/n_i²)
Energy          ΔE = 13.6(1/n_f² - 1/n_i²)
Frequency       ν = c/λ or ΔE/h
Number of lines N = n(n-1)/2
Series limit    λ = n_f²/R
```

### Step 4: Check Units

- R in m⁻¹ → λ in m
- R in cm⁻¹ → λ in cm
- Energy in eV, wavelength often in nm

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** Calculate the wavelength of H-α line (Balmer series, 3→2).

**Solution:**

```fallback
1/λ = R(1/2² - 1/3²)
1/λ = 1.097×10⁷(1/4 - 1/9)
1/λ = 1.097×10⁷ × 5/36
1/λ = 1.524×10⁶ m⁻¹
λ = 6.56×10⁻⁷ m = 656 nm (Red)
```

**Q2.** Find the series limit of Lyman series.

**Solution:**

```fallback
λ_limit = n_f²/R = 1²/(1.097×10⁷)
λ = 9.12×10⁻⁸ m = 91.2 nm
```

**Q3.** An electron in hydrogen jumps from n=4 to n=2. In which series does this line appear?

**Solution:**

```fallback
Final state n_f = 2
→ Balmer series ✓
This is H-β line (486 nm, cyan)
```

---

### Level 2: JEE Main/Advanced

**Q4.** How many spectral lines are emitted when electrons in hydrogen atoms, excited to n=5, return to ground state?

**Solution:**

```fallback
N = n(n-1)/2 = 5×4/2 = 10 lines

Details:
5→4, 5→3, 5→2, 5→1 (4 lines from n=5)
4→3, 4→2, 4→1 (3 lines from n=4)
3→2, 3→1 (2 lines from n=3)
2→1 (1 line from n=2)
Total = 4+3+2+1 = 10 ✓
```

**Q5.** The shortest wavelength in Lyman series is λ₁. Find the longest wavelength in Balmer series in terms of λ₁.

**Solution:**

```fallback
Shortest in Lyman: n_i=∞, n_f=1
1/λ₁ = R(1/1² - 0) = R
λ₁ = 1/R

Longest in Balmer: n_i=3, n_f=2
1/λ₂ = R(1/4 - 1/9) = R × 5/36
λ₂ = 36/(5R) = 36λ₁/5 = 7.2λ₁

Numerically: λ₁ = 91.2 nm
λ₂ = 7.2 × 91.2 = 656.6 nm ✓
```

**Q6.** A photon of wavelength 102.6 nm is absorbed by a hydrogen atom in ground state. To which level is the electron excited?

**Solution:**

```fallback
ΔE = hc/λ = 1240 eV·nm / 102.6 nm = 12.08 eV

E_n - E_1 = 12.08
-13.6/n² - (-13.6) = 12.08
13.6(1 - 1/n²) = 12.08
1 - 1/n² = 12.08/13.6 = 0.888
1/n² = 0.112
n² ≈ 9
n = 3

The electron is excited to n=3.
(This is Lyman-β absorption!)
```

---

### Level 3: JEE Advanced

**Q7.** In a sample of hydrogen atoms, electrons are in excited state n. It is observed that 15 different wavelengths are emitted. Find n.

**Solution:**

```fallback
N = n(n-1)/2 = 15
n(n-1) = 30
n² - n - 30 = 0
(n-6)(n+5) = 0
n = 6 (n can't be negative)

Verification: 6×5/2 = 15 ✓
```

**Q8.** The wavelength of first line of Balmer series is 656 nm. Calculate:
(a) Wavelength of first line of Lyman series
(b) Wavelength of second line of Balmer series

**Solution:**

```fallback
(a) First Balmer: 3→2
    1/656 = R(1/4 - 1/9) = 5R/36
    R = 36/(5×656) = 0.01097 nm⁻¹

    First Lyman: 2→1
    1/λ = R(1/1 - 1/4) = 3R/4
    1/λ = (3/4) × 0.01097
    λ = 121.6 nm

(b) Second Balmer: 4→2
    1/λ = R(1/4 - 1/16) = 3R/16
    1/λ = (3/16) × 0.01097
    λ = 486.3 nm
```

**Q9.** Show that the shortest wavelength in Balmer series is equal to the longest wavelength in the Paschen series.

**Solution:**

```fallback
Shortest Balmer: n_i=∞, n_f=2
1/λ_B = R(1/4 - 0) = R/4
λ_B = 4/R

Longest Paschen: n_i=4, n_f=3
1/λ_P = R(1/9 - 1/16) = R(16-9)/(9×16) = 7R/144
λ_P = 144/(7R)

These are NOT equal!

Actually, let me reconsider:
Shortest Balmer = series limit = 364.6 nm
Longest Paschen = 4→3 = ?

1/λ_P = 1.097×10⁷(1/9 - 1/16)
1/λ_P = 1.097×10⁷ × 0.0486
λ_P = 1875 nm

These are different. The question statement might be incorrect.

Perhaps meant: Show ratio of wavelengths?
λ_P/λ_B = (144/7R)/(4/R) = 144/(7×4) = 36/7 ≈ 5.14
```

**Q10.** In a hydrogen atom, an electron makes a transition from n=n₁ to n=n₂. The wavelength of photon emitted is λ. If the electron makes a transition from n=(n₁-1) to n=(n₂-1), the wavelength is λ’. Show that:

$$\frac{1}{λ'} - \frac{1}{λ} = R\left[\frac{1}{(n_2-1)^2} - \frac{1}{(n_1-1)^2} - \frac{1}{n_2^2} + \frac{1}{n_1^2}\right]$$

**Solution:**

```fallback
For first transition:
1/λ = R(1/n₂² - 1/n₁²)

For second transition:
1/λ' = R(1/(n₂-1)² - 1/(n₁-1)²)

Subtracting:
1/λ' - 1/λ = R[1/(n₂-1)² - 1/(n₁-1)² - 1/n₂² + 1/n₁²]

Rearranging:
1/λ' - 1/λ = R[1/(n₂-1)² - 1/n₂² + 1/n₁² - 1/(n₁-1)²]

This simplifies to the required expression. ✓

Physical meaning: The difference in wave numbers
depends on the spacing between energy levels.
```

---

## Applications & Significance

### 1. Stellar Spectroscopy

- Identify elements in stars
- Measure stellar temperatures
- Determine redshift → distance & expansion
- Detect exoplanet atmospheres

### 2. Nebulae & Galaxies

- H-α emission makes nebulae glow red
- Balmer lines map ionized hydrogen
- Study star formation regions

### 3. Plasma Physics

- Fusion reactor diagnostics
- Plasma temperature measurement
- Density measurements

### 4. Quantum Mechanics Development

- First success of quantum theory
- Led to modern quantum mechanics
- Inspired Schrödinger, Heisenberg, Dirac

---

## Cross-Links to Related Topics

- [Bohr Model](../bohr-model/index.md) - Theory explaining spectrum
- [Photoelectric Effect](../../dual-nature/photoelectric-effect/index.md) - Photon energy hν
- [de Broglie Waves](../../dual-nature/de-broglie/index.md) - Wave nature of electrons
- [Atomic Structure](../nuclear-structure/index.md) - Building blocks

---

## Quick Revision Checklist ✓

- Rydberg formula: 1/λ = R(1/n_f² - 1/n_i²)
- R = 1.097 × 10⁷ m⁻¹
- Five series: Lyman, Balmer, Paschen, Brackett, Pfund
- Lyman (UV): n→1
- Balmer (Visible): n→2
- H-α = 656 nm (red), H-β = 486 nm (cyan)
- Series limit: λ = n_f²/R (shortest wavelength)
- Number of lines: N = n(n-1)/2
- Emission: n_i > n_f (photon emitted)
- Absorption: n_i < n_f (photon absorbed)
- ΔE = 13.6(1/n_f² - 1/n_i²) eV

---

## Final Tips for JEE

1. **Master Rydberg formula**: All problems stem from this
2. **Know the series**: Which n_f for each series
3. **Balmer is special**: Only visible series, know the 4 lines
4. **Series limit**: Always n_i = ∞, shortest wavelength
5. **Counting lines**: Use n(n-1)/2, not just n-1
6. **Units**: R in m⁻¹, convert nm properly
7. **Energy or wavelength**: Use ΔE = hc/λ to convert
8. **Historical context**: Balmer→Bohr→Quantum mechanics
9. **Qualitative reasoning**: UV has higher energy than visible
10. **Double-check**: n_i > n_f for emission, remember!

---

*Last updated: April 28, 2025*
*Previous: [Bohr Model](../bohr-model/index.md)*
*Next: [Nuclear Structure](../nuclear-structure/index.md)*

From TestGuru · our mock-test platform

## You've read Hydrogen Spectrum - Spectral Series Explained.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=atoms-nuclei&tg_exam=jee-main&tg_page=%2Fphysics%2Fatoms-nuclei%2Fhydrogen-spectrum%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/atoms-nuclei/hydrogen-spectrum/",this.page.identifier="/physics/atoms-nuclei/hydrogen-spectrum/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="bohrModel" id="anim-bohrModel-1795396422814400760"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-bohrModel-1795396422814400760")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/atoms-nuclei/hydrogen-spectrum/](https://jeenotes.in/physics/atoms-nuclei/hydrogen-spectrum/) · raw HTML: `offline/physics/atoms-nuclei/hydrogen-spectrum/index.html`_
