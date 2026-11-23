---
title: "Radioactivity - Alpha, Beta, Gamma Decay and Half-Life"
source: "https://jeenotes.in/physics/atoms-nuclei/radioactivity/"
description: "Master radioactive decay, half-life calculations, decay laws, and nuclear stability for JEE Main and Advanced"
updated: "2025-12-26"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 9"
html: "../../../../offline/physics/atoms-nuclei/radioactivity/index.html"
extracted: "2026-11-23"
---

> Master radioactive decay, half-life calculations, decay laws, and nuclear stability for JEE Main and Advanced

# Radioactivity: Nature’s Nuclear Clock

## The Marie Curie Legacy 🎬

Before Oppenheimer harnessed nuclear energy, Marie Curie discovered radioactivity - winning two Nobel Prizes and revolutionizing physics! Her work with polonium and radium revealed that atoms aren’t immutable - they can spontaneously transform, ticking away like cosmic clocks.

*“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.”* - Marie Curie

---

## Discovery of Radioactivity

### Historical Timeline

**1896:** Henri Becquerel

- Discovered uranium emits “rays”
- Accidentally left uranium salt on photographic plate
- Plate darkened even wrapped in black paper!
- Not phosphorescence - something new! ⚛️

**1898:** Marie & Pierre Curie

- Discovered polonium (Po) and radium (Ra)
- Coined term “radioactivity”
- Isolated radioactive elements

**1899:** Rutherford

- Identified α and β radiation
- Different penetrating powers

**1900:** Villard

- Discovered γ radiation
- Most penetrating type

---

## Types of Radioactive Decay

### α-Decay (Alpha Decay)

**Emission of helium nucleus** ($^4_2He$ or α)

:::box

$$^A_ZX → ^{A-4}_{Z-2}Y + ^4_2He + Q$$

**Changes:**

- Mass number: A → A - 4
- Atomic number: Z → Z - 2
- New element (2 places left in periodic table)
  :::

**Example:**

$$^{238}_{92}U → ^{234}_{90}Th + ^4_2He + 4.27 \text{ MeV}$$

**Characteristics:**

- Heavy nuclei (A > 200) typically
- Low penetration (~few cm in air)
- Stopped by paper
- High ionization
- Energy: 4-9 MeV typically

---

### β⁻-Decay (Beta-minus Decay)

**Neutron converts to proton**

$$n → p + e^- + \bar{ν}_e$$

:::box

$$^A_ZX → ^{A}_{Z+1}Y + e^- + \bar{ν}_e + Q$$

**Changes:**

- Mass number: A unchanged
- Atomic number: Z → Z + 1
- New element (1 place right in periodic table)
- Electron and antineutrino emitted
  :::

**Example:**

$$^{14}_6C → ^{14}_7N + e^- + \bar{ν}_e + 0.156 \text{ MeV}$$

**Characteristics:**

- Neutron-rich nuclei
- Moderate penetration (~few mm in Al)
- Continuous energy spectrum (due to neutrino)
- Medium ionization

---

### β⁺-Decay (Beta-plus/Positron Decay)

**Proton converts to neutron**

$$p → n + e^+ + ν_e$$

:::box

$$^A_ZX → ^{A}_{Z-1}Y + e^+ + ν_e + Q$$

**Changes:**

- Mass number: A unchanged
- Atomic number: Z → Z - 1
- New element (1 place left)
- Positron and neutrino emitted
  :::

**Example:**

$$^{22}_{11}Na → ^{22}_{10}Ne + e^+ + ν_e + 0.545 \text{ MeV}$$

**Note:** Requires M(parent) > M(daughter) + 2m_e (threshold!)

---

### Electron Capture (EC)

**Nucleus captures inner shell electron**

$$p + e^- → n + ν_e$$

:::box

$$^A_ZX + e^- → ^{A}_{Z-1}Y + ν_e + Q$$

**Changes:**

- Mass number: A unchanged
- Atomic number: Z → Z - 1
- X-rays emitted (electron vacancy filled)
- Competes with β⁺ decay
  :::

**Example:**

$$^{7}_4Be + e^- → ^{7}_3Li + ν_e$$

---

### γ-Decay (Gamma Decay)

**Excited nucleus releases energy**

:::box

$$^A_ZX^* → ^A_ZX + γ$$

**Changes:**

- No change in A or Z!
- Same element, lower energy state
- Pure electromagnetic radiation
- Often follows α or β decay
  :::

**Example:**

$$^{60}_{27}Co^* → ^{60}_{27}Co + γ (1.17 \text{ MeV} + 1.33 \text{ MeV})$$

**Characteristics:**

- Very high penetration (many cm of Pb)
- No mass or charge
- Electromagnetic wave (photon)
- Low ionization
- Energy: keV to MeV

---

## Comparison of Radiation Types

| Property | α | β⁻/β⁺ | γ |
| --- | --- | --- | --- |
| **Nature** | ⁴He nucleus | Electron/Positron | Photon |
| **Charge** | +2e | ∓e | 0 |
| **Mass** | 4 u | ~0.0005 u | 0 |
| **Speed** | ~0.05c | ~0.9c | c |
| **Penetration** | Lowest | Medium | Highest |
| **Stopped by** | Paper | Al (few mm) | Pb (many cm) |
| **Ionization** | Highest | Medium | Lowest |
| **Deflection in field** | Small | Large | None |
| **A change** | -4 | 0 | 0 |
| **Z change** | -2 | ±1 | 0 |

---

## Radioactive Decay Law

### The Fundamental Law

:::box
**Decay Law**

$$N(t) = N_0 e^{-λt}$$

where:

- N(t) = number of nuclei at time t
- N₀ = initial number of nuclei
- λ = decay constant (characteristic of isotope)
- t = time
  :::

**Meaning:** Radioactive decay is:

- **Random** (can’t predict individual decay)
- **Spontaneous** (doesn’t need external trigger)
- **Exponential** (constant fraction decays per unit time)

### Activity (Rate of Decay)

:::box

$$A(t) = -\frac{dN}{dt} = λN(t) = λN_0 e^{-λt}$$

$$A(t) = A_0 e^{-λt}$$

**Units:**

- SI: Becquerel (Bq) = 1 decay/second
- Old: Curie (Ci) = 3.7 × 10¹⁰ Bq
  :::

---

## Half-Life (T₁/₂)

Time for half the nuclei to decay:

$$N(T_{1/2}) = \frac{N_0}{2}$$

:::box
**Half-Life Formula**

$$T_{1/2} = \frac{\ln 2}{λ} = \frac{0.693}{λ}$$

**After n half-lives:**

$$N = N_0 \left(\frac{1}{2}\right)^n$$

where $n = \frac{t}{T_{1/2}}$
:::

### Interactive Demo: Visualize Nuclear Decay

Watch radioactive nuclei decay exponentially over time, demonstrating half-life concepts.

### Mean Life (τ)

Average lifetime of a nucleus:

:::box

$$τ = \frac{1}{λ} = \frac{T_{1/2}}{\ln 2} = 1.44 \times T_{1/2}$$

:::

**Relation:**

$$T_{1/2} : τ : \frac{1}{λ} = 0.693 : 1 : 1$$

---

## Interactive Demo: Decay Calculator

```javascript
const RadioactiveDecaySimulator = () => {
  const [isotope, setIsotope] = useState('C14');
  const [time, setTime] = useState(5730);
  const [N0, setN0] = useState(1000000);

  const halfLives = {
    'C14': 5730, // years
    'U238': 4.47e9, // years
    'Ra226': 1600, // years
    'I131': 8.02, // days
    'Co60': 5.27 // years
  };

  const T_half = halfLives[isotope];
  const lambda = 0.693 / T_half;
  const N_t = N0 * Math.exp(-lambda * time);
  const A_t = lambda * N_t;
  const A_0 = lambda * N0;
  const n_halfLives = time / T_half;
  const percentRemaining = (N_t / N0) * 100;

  return (
    <div>
      <h3>Radioactive Decay Simulator</h3>

      <label>Isotope:</label>
      <select value={isotope} onChange={(e) => setIsotope(e.target.value)}>
        <option value="C14">Carbon-14 (T½=5730 y)</option>
        <option value="U238">Uranium-238 (T½=4.47 Gy)</option>
        <option value="Ra226">Radium-226 (T½=1600 y)</option>
        <option value="I131">Iodine-131 (T½=8 d)</option>
        <option value="Co60">Cobalt-60 (T½=5.27 y)</option>
      </select>

      <label>Initial nuclei: {N0.toExponential(2)}</label>
      <input
        type="range"
        min="100000"
        max="10000000"
        step="100000"
        value={N0}
        onChange={(e) => setN0(Number(e.target.value))}
      />

      <label>Time elapsed: {time} {isotope === 'I131' ? 'days' : 'years'}</label>
      <input
        type="range"
        min="0"
        max={T_half * 3}
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      />

      <div className="results">
        <h4>Decay Parameters:</h4>
        <p>Half-life: {T_half} {isotope === 'I131' ? 'days' : 'years'}</p>
        <p>Decay constant: {lambda.toExponential(3)} per year</p>
        <p>Mean life: {(1/lambda).toFixed(0)} {isotope === 'I131' ? 'days' : 'years'}</p>

        <h4>At time t = {time}:</h4>
        <p>Number of half-lives: {n_halfLives.toFixed(2)}</p>
        <p>Remaining nuclei: {N_t.toExponential(2)}</p>
        <p>Percent remaining: {percentRemaining.toFixed(1)}%</p>
        <p>Initial activity: {A_0.toExponential(2)} Bq</p>
        <p>Current activity: {A_t.toExponential(2)} Bq</p>

        <div className="visual">
          <div style={{
            width: '100%',
            height: '30px',
            backgroundColor: '#ccc',
            position: 'relative'
          }}>
            <div style={{
              width: `${percentRemaining}%`,
              height: '100%',
              backgroundColor: 'blue',
              transition: 'width 0.3s'
            }} />
          </div>
          <p>Visual: Fraction remaining</p>
        </div>

        {percentRemaining < 1 && (
          <p style={{color: 'red'}}>
            ⚠ Less than 1% remaining - essentially all decayed!
          </p>
        )}
      </div>
    </div>
  );
};
```

---

## Decay Series (Radioactive Chains)

Some isotopes decay through multiple steps:

### Uranium-238 Series

```fallback
²³⁸U (4.5 Gy)
  ↓ α
²³⁴Th (24 d)
  ↓ β⁻
²³⁴Pa (1.2 min)
  ↓ β⁻
²³⁴U (246,000 y)
  ↓ α
  ... (many steps)
  ↓
²⁰⁶Pb (stable)
```

Total: 14 steps, ending at stable lead-206!

### Other Series

1. **Thorium-232 series** → ²⁰⁸Pb
2. **Uranium-235 series** → ²⁰⁷Pb
3. **Neptunium-237 series** → ²⁰⁹Bi (extinct in nature)

---

## Memory Tricks 🧠

### “ALPHA BETA GAMMA” Comparison

**A**lpha: **A**ll **A**tomic mass lost (4 units)
**L**arge and heavy (He nucleus)
**P**aper stops it
**H**igh ionization
**A**lways from heavy nuclei

**B**eta: **B**asically electron
**E**nergy spectrum continuous
**T**ransmutation (Z changes by 1)
**A**luminum stops it

**G**amma: **G**o through everything
**A**nd no charge
**M**ass-less photon
**M**aximum penetration
**A**fter other decays usually

### Decay Formula Memory

$$N = N_0 e^{-λt}$$

**“Number equals N-zero times e to the minus lambda-t”**

**Half-life:**

$$T_{1/2} = \frac{0.693}{λ}$$

**“Point-six-nine-three over lambda”**

### Half-Life Pattern

```fallback
After 1 T½: ½ remains
After 2 T½: ¼ remains
After 3 T½: ⅛ remains
After n T½: (½)ⁿ remains

"Every half-life, half remains!"
```

---

## Common Mistakes ⚠️

### ❌ Mistake 1: Half-life formula

**Wrong:** T₁/₂ = 1/λ
**Right:** T₁/₂ = 0.693/λ (or ln2/λ)

### ❌ Mistake 2: Activity vs number

**Wrong:** A = N
**Right:** A = λN (activity is rate, not number!)

### ❌ Mistake 3: Decay direction

**Wrong:** α decay increases Z
**Right:** α decay decreases Z by 2, A by 4

### ❌ Mistake 4: Beta decay mass

**Wrong:** β⁻ decay decreases mass number
**Right:** β⁻ keeps A same, only Z changes

### ❌ Mistake 5: Exponential vs linear

**Wrong:** N = N₀ - λt (linear decay)
**Right:** N = N₀e^(-λt) (exponential decay)

---

## Important Half-Lives

### Common Isotopes

| Isotope | Type | Half-Life | Use |
| --- | --- | --- | --- |
| ²³⁸U | α | 4.47 × 10⁹ y | Dating rocks |
| ²³⁵U | α | 7.04 × 10⁸ y | Nuclear fuel |
| ⁴⁰K | β⁻, EC | 1.25 × 10⁹ y | Dating |
| ¹⁴C | β⁻ | 5,730 y | Carbon dating |
| ²²⁶Ra | α | 1,600 y | Historical source |
| ⁶⁰Co | β⁻, γ | 5.27 y | Medical |
| ⁹⁰Sr | β⁻ | 28.8 y | Fission product |
| ¹³¹I | β⁻, γ | 8.02 d | Medical |
| ²²²Rn | α | 3.82 d | Radon gas |
| ²¹⁰Po | α | 138 d | Curie’s poison! |

---

## Carbon-14 Dating

### The Principle

1. **Cosmic rays** create ¹⁴C in atmosphere
2. Living organisms maintain constant ¹⁴C/¹²C ratio
3. After death, ¹⁴C decays (T₁/₂ = 5730 y)
4. Measure remaining ¹⁴C → determine age!

:::box

$$t = \frac{T_{1/2}}{\ln 2} \ln\left(\frac{N_0}{N}\right)$$

or

$$t = \frac{5730}{\ln 2} \ln\left(\frac{A_0}{A}\right)$$

where A₀ is activity in living material, A is current activity.
:::

**Useful range:** Up to ~50,000 years

**Example:** Dead wood has ¼ the ¹⁴C activity of living wood.

$$t = \frac{5730}{0.693} \ln(4) = 8267 \times 1.386 = 11,460 \text{ years old}$$

---

## Equilibrium in Decay Series

### Secular Equilibrium

Parent half-life » daughter half-life:

$$T_{1/2}^{parent} >> T_{1/2}^{daughter}$$

Eventually:

$$λ_p N_p = λ_d N_d$$

Daughter decays as fast as it’s produced!

**Example:** ²³⁸U → ²³⁴Th system

### Transient Equilibrium

Parent half-life > daughter half-life (but comparable):

$$\frac{A_d}{A_p} = \frac{T_{1/2}^d}{T_{1/2}^d - T_{1/2}^p}$$

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** Complete the decay: $^{238}_{92}U → ? + ^4_2He$

**Solution:**

```fallback
α decay: A decreases by 4, Z decreases by 2

A: 238 - 4 = 234
Z: 92 - 2 = 90

²³⁴₉₀Th (Thorium-234)
```

**Q2.** A radioactive sample has half-life 10 days. What fraction remains after 30 days?

**Solution:**

```fallback
n = t/T₁/₂ = 30/10 = 3 half-lives

Fraction = (1/2)³ = 1/8
```

**Q3.** The decay constant of a sample is 0.01 per year. Find the half-life.

**Solution:**

```fallback
T₁/₂ = 0.693/λ = 0.693/0.01 = 69.3 years
```

---

### Level 2: JEE Main/Advanced

**Q4.** ²²⁶Ra (T₁/₂ = 1600 y) decays to ²²²Rn (T₁/₂ = 3.8 d). Initially pure Ra sample. After long time, what is ratio of Ra to Rn decay rates?

**Solution:**

```fallback
At secular equilibrium:
λ_Ra × N_Ra = λ_Rn × N_Rn

Decay rates: A_Ra = A_Rn

Ratio = 1:1

Even though numbers are different (N_Rn << N_Ra),
decay rates are equal at equilibrium!
```

**Q5.** A sample’s activity decreases to 6.25% of original in 2 hours. Find:
(a) Half-life
(b) Decay constant

**Solution:**

```fallback
A/A₀ = 6.25/100 = 1/16 = (1/2)⁴

4 half-lives in 2 hours
T₁/₂ = 2/4 = 0.5 hours = 30 minutes

λ = 0.693/T₁/₂ = 0.693/0.5 = 1.386 h⁻¹
```

**Q6.** A ¹⁴C sample has activity 15 disintegrations/minute/gram. Living carbon has 16 dpm/g. Find age of sample. (T₁/₂ = 5730 y)

**Solution:**

```fallback
A/A₀ = 15/16

t = (T₁/₂/ln2) × ln(A₀/A)
t = (5730/0.693) × ln(16/15)
t = 8267 × ln(1.0667)
t = 8267 × 0.0645
t ≈ 533 years
```

---

### Level 3: JEE Advanced

**Q7.** Two radioactive samples A and B have equal activities initially. After 4 days, activity of A is 1/16 and B is 1/4 of initial. Find:
(a) Ratio of half-lives
(b) Ratio of activities after 8 days

**Solution:**

```fallback
(a) For A: A_A/A₀ = 1/16 = (1/2)⁴
    4 days = 4 half-lives of A
    T_A = 1 day

    For B: A_B/A₀ = 1/4 = (1/2)²
    4 days = 2 half-lives of B
    T_B = 2 days

    T_A : T_B = 1:2

(b) After 8 days:
    For A: n = 8/1 = 8 half-lives
    A_A = A₀(1/2)⁸ = A₀/256

    For B: n = 8/2 = 4 half-lives
    A_B = A₀(1/2)⁴ = A₀/16

    A_A/A_B = (1/256)/(1/16) = 16/256 = 1/16
```

**Q8.** ²³⁸U decays to ²⁰⁶Pb with T₁/₂ = 4.5 × 10⁹ years. A rock has U:Pb ratio of 1:1. Find age of rock.

**Solution:**

```fallback
Initially: N₀ of U, 0 of Pb
After time t: N of U, (N₀-N) of Pb

Given: N/(N₀-N) = 1/1
∴ N = N₀ - N
∴ 2N = N₀
∴ N = N₀/2

One half-life has passed!
Age = T₁/₂ = 4.5 × 10⁹ years

Actually, should verify:
N/N₀ = e^(-λt) = 1/2
λt = ln2
t = (ln2)/λ = T₁/₂ ✓
```

**Q9.** A radioactive sample undergoes two types of decay with constants λ₁ and λ₂. Show that effective half-life is:

$$T_{eff} = \frac{\ln 2}{λ_1 + λ_2}$$

**Solution:**

```gdscript3
Effective decay constant: λ_eff = λ₁ + λ₂

(Each decay mode contributes independently)

Total decay rate:
dN/dt = -(λ₁ + λ₂)N = -λ_eff N

Solution: N = N₀ e^(-λ_eff t)

Half-life: N₀/2 = N₀ e^(-λ_eff T_eff)
1/2 = e^(-λ_eff T_eff)
ln(1/2) = -λ_eff T_eff
-ln2 = -λ_eff T_eff

T_eff = ln2/λ_eff = ln2/(λ₁ + λ₂) ✓

Physical meaning: Multiple decay paths
→ faster overall decay → shorter half-life
```

**Q10.** Show that mean life τ = 1/λ equals the average lifetime of radioactive nuclei.

**Solution:**

```fallback
Mean life = ∫₀^∞ t × P(t) dt

where P(t) = probability of decay at time t

P(t)dt = (fraction surviving to t) × (prob of decay in dt)
       = (N/N₀) × (λ dt)
       = e^(-λt) × λ dt

τ = ∫₀^∞ t × λ e^(-λt) dt

Integration by parts:
Let u = t, dv = λe^(-λt)dt
du = dt, v = -e^(-λt)

τ = [-te^(-λt)]₀^∞ + ∫₀^∞ e^(-λt) dt
  = 0 + [-e^(-λt)/λ]₀^∞
  = 0 - (-1/λ)
  = 1/λ ✓

Also: τ = T₁/₂/ln2 = T₁/₂/0.693 ≈ 1.44 T₁/₂
```

---

## Applications of Radioactivity

### 1. Medical

- **Diagnosis:** PET scans (¹⁸F), X-rays
- **Treatment:** Cancer therapy (⁶⁰Co, ¹³¹I)
- **Sterilization:** γ-rays kill bacteria

### 2. Dating

- **Carbon-14:** Organic materials (50,000 y)
- **Uranium-Lead:** Rocks (millions of years)
- **Potassium-Argon:** Volcanic rocks

### 3. Industrial

- **Thickness gauges:** β-rays
- **Smoke detectors:** ²⁴¹Am (α-emitter)
- **Tracers:** Follow fluid flow

### 4. Research

- **Rutherford scattering:** α-particles
- **Tracer studies:** Biological pathways
- **Neutron activation:** Element analysis

---

## Nuclear Stability

### Stable vs Unstable

**Stable nuclei:**

- Balanced N/Z ratio
- “Valley of stability” on N-Z plot
- ~270 stable isotopes

**Unstable nuclei (radioactive):**

- Too many neutrons → β⁻ decay
- Too many protons → β⁺ decay or EC
- Too heavy → α decay
- Excited state → γ decay

### N-Z Plot (Stability Curve)

```fallback
N
│       Heavy
│      (α decay)
│    ╱
│   ╱  Neutron-rich
│  ╱   (β⁻ decay)
│ ╱
│╱______ Stable
│     ╱ (N≈Z for light,
│    ╱   N>Z for heavy)
│   ╱ Proton-rich
│  ╱  (β⁺ or EC)
│ ╱
└─────────────→ Z
    Light
```

---

## Cross-Links to Related Topics

- [Nuclear Structure](../nuclear-structure/index.md) - Composition of nucleus
- [Binding Energy](../binding-energy/index.md) - Why some nuclei unstable
- [Nuclear Reactions](../nuclear-reactions/index.md) - Induced transmutations
- [Rutherford Model](../rutherford-model/index.md) - α-scattering experiments

---

## Quick Revision Checklist ✓

- α decay: A-4, Z-2, ⁴He emitted
- β⁻ decay: A same, Z+1, e⁻ emitted
- β⁺ decay: A same, Z-1, e⁺ emitted
- γ decay: A and Z same, photon emitted
- Decay law: N = N₀e^(-λt)
- Activity: A = λN
- Half-life: T₁/₂ = 0.693/λ
- After n half-lives: N = N₀(1/2)^n
- Mean life: τ = 1/λ = 1.44T₁/₂
- Penetration: α < β < γ
- Ionization: α > β > γ
- ¹⁴C dating: T₁/₂ = 5730 years

---

## Final Tips for JEE

1. **Master decay equations**: Know what changes in each type
2. **Exponential decay**: Not linear! N = N₀e^(-λt)
3. **Half-life formula**: T₁/₂ = 0.693/λ (not 1/λ!)
4. **Activity = rate**: A = λN (dN/dt)
5. **Conservation laws**: Check A and Z before/after
6. **Units**: Bq (SI) vs Ci (old)
7. **Carbon dating**: Know T₁/₂ = 5730 years
8. **Penetration order**: α < β < γ (remember!)
9. **Multiple half-lives**: Use (1/2)^n
10. **Physical meaning**: Random, spontaneous, exponential

---

*Last updated: May 8, 2025*
*Previous: [Binding Energy](../binding-energy/index.md)*
*Next: [Nuclear Reactions](../nuclear-reactions/index.md)*

From TestGuru · our mock-test platform

## You've read Radioactivity - Alpha, Beta, Gamma Decay and Half-Life.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=atoms-nuclei&tg_exam=jee-main&tg_page=%2Fphysics%2Fatoms-nuclei%2Fradioactivity%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/atoms-nuclei/radioactivity/",this.page.identifier="/physics/atoms-nuclei/radioactivity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="nuclearDecay" id="anim-nuclearDecay-1795396422918546578"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-nuclearDecay-1795396422918546578")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/atoms-nuclei/radioactivity/](https://jeenotes.in/physics/atoms-nuclei/radioactivity/) · raw HTML: `offline/physics/atoms-nuclei/radioactivity/index.html`_
