---
title: "de Broglie Hypothesis - Matter Waves Revolution"
source: "https://jeenotes.in/physics/dual-nature/de-broglie/"
description: "Master de Broglie wavelength, wave-particle duality, and matter wave concepts for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 5"
html: "../../../../offline/physics/dual-nature/de-broglie/index.html"
extracted: "2026-11-23"
---

> Master de Broglie wavelength, wave-particle duality, and matter wave concepts for JEE Main and Advanced

# de Broglie Hypothesis: When Particles Ride Waves

## The Ant-Man Quantum Realm Connection 🎬

In Ant-Man, Scott Lang shrinks to quantum scales where classical physics breaks down. At those scales, even particles like electrons behave like waves! This isn’t science fiction - it’s the de Broglie hypothesis that revolutionized quantum mechanics.

*“If light can be both wave and particle, why not matter?”* - Louis de Broglie, 1924

---

## The Historical Context

### Einstein’s Photon (1905)

Light waves → Particles (photons)

$$E = hν, \quad p = \frac{h}{λ}$$

### de Broglie’s Bold Leap (1924)

If waves can be particles&mldr;
**Can particles be waves?** 🤔

---

## de Broglie’s Hypothesis

Every moving particle has an associated wave called a **matter wave** or **de Broglie wave**.

:::box
**The de Broglie Wavelength**

$$λ = \frac{h}{p} = \frac{h}{mv}$$

where:

- λ = de Broglie wavelength
- h = 6.626 × 10⁻³⁴ J·s (Planck’s constant)
- p = momentum of particle
- m = mass, v = velocity
  :::

### Key Insight: Symmetry in Nature

| Particle Property | Wave Property |
| --- | --- |
| Energy: E = mc² | Frequency: ν = E/h |
| Momentum: p = mv | Wavelength: λ = h/p |

---

## Multiple Forms of de Broglie Equation

### For a Free Particle

$$λ = \frac{h}{mv}$$

### In Terms of Kinetic Energy

$$K = \frac{1}{2}mv^2 = \frac{p^2}{2m}$$

$$p = \sqrt{2mK}$$

:::box

$$λ = \frac{h}{\sqrt{2mK}}$$

:::

### Interactive Demo: Visualize Matter Waves

Watch how particles exhibit wave-like behavior with de Broglie wavelength.

### For Charged Particles in Electric Field

When a particle of charge q is accelerated through potential V:

$$K = qV$$

:::box

$$λ = \frac{h}{\sqrt{2mqV}}$$

:::

**For electrons** (q = e):

$$λ = \frac{h}{\sqrt{2meV}} = \frac{12.27}{\sqrt{V}} \text{ Å}$$

where V is in volts.

### For Thermal Particles

A particle in thermal equilibrium at temperature T has average kinetic energy $K = \frac{3}{2}kT$, so:

$$λ = \frac{h}{\sqrt{3mkT}}$$

This is the standard form for thermal neutrons in JEE problems.

### Relativistic Form (for high speeds)

$$λ = \frac{h}{\sqrt{2m_0K(1 + K/2m_0c^2)}}$$

---

## Wave-Particle Duality: The Complete Picture

### Electromagnetic Radiation

- **Wave nature**: Interference, diffraction, polarization
- **Particle nature**: Photoelectric effect, Compton effect

### Material Particles

- **Particle nature**: Definite mass, charge, trajectory
- **Wave nature**: Interference, diffraction (Davisson-Germer)

### de Broglie’s Unification

```fallback
DUALITY
           ↓
    ┌──────┴──────┐
    ↓             ↓
  WAVES       PARTICLES
    ↓             ↓
 λ = c/ν      p = mv
    ↓             ↓
    └──── h ─────┘
         ↓
    λ = h/p
```

---

## Phase Velocity vs Group Velocity

### Phase Velocity (vₚ)

Velocity of a single wave component:

$$v_p = νλ = \frac{ω}{k}$$

For matter waves:

$$v_p = \frac{E}{p} = \frac{mc^2}{mv} = \frac{c^2}{v}$$

**Note:** vₚ > c (but no information travels at vₚ!)

### Group Velocity (vₘ)

Velocity of wave packet (actual particle velocity):

$$v_g = \frac{dω}{dk}$$

For matter waves: **vₘ = v** (particle velocity)

### Beautiful Relation

$$v_p \times v_g = c^2$$

---

## Interactive Demo: de Broglie Wavelength Calculator

```javascript
const DeBroglieCalculator = () => {
  const [particle, setParticle] = useState('electron');
  const [velocity, setVelocity] = useState(1e6); // m/s

  const particles = {
    electron: { mass: 9.11e-31, charge: 1.6e-19 },
    proton: { mass: 1.67e-27, charge: 1.6e-19 },
    neutron: { mass: 1.67e-27, charge: 0 },
    ball: { mass: 0.05, charge: 0 } // 50g ball
  };

  const h = 6.626e-34;
  const m = particles[particle].mass;
  const lambda = h / (m * velocity);

  return (
    <div>
      <h3>de Broglie Wavelength Calculator</h3>

      <label>Particle:</label>
      <select value={particle} onChange={(e) => setParticle(e.target.value)}>
        <option value="electron">Electron</option>
        <option value="proton">Proton</option>
        <option value="neutron">Neutron</option>
        <option value="ball">Cricket Ball (50g)</option>
      </select>

      <label>Velocity: {velocity.toExponential(2)} m/s</label>
      <input
        type="range"
        min="1e3"
        max="1e7"
        value={velocity}
        onChange={(e) => setVelocity(Number(e.target.value))}
      />

      <div className="result">
        <h4>Results:</h4>
        <p>Mass: {m.toExponential(2)} kg</p>
        <p>Momentum: {(m * velocity).toExponential(2)} kg·m/s</p>
        <p>de Broglie wavelength: {lambda.toExponential(2)} m</p>

        {lambda > 1e-10 ? (
          <p style={{color: 'green'}}>
            ✓ Observable wave nature! ({(lambda * 1e10).toFixed(2)} Å)
          </p>
        ) : (
          <p style={{color: 'red'}}>
            Wave nature negligible for macroscopic objects
          </p>
        )}

        <p>For comparison:</p>
        <ul>
          <li>Atomic spacing: ~1-3 Å</li>
          <li>Visible light: 4000-7000 Å</li>
          <li>X-rays: 0.1-10 Å</li>
        </ul>
      </div>
    </div>
  );
};
```

---

## Why Don’t We See Cricket Balls Diffract?

### Example Calculation

Cricket ball: m = 0.05 kg, v = 40 m/s

$$λ = \frac{h}{mv} = \frac{6.626 × 10^{-34}}{0.05 × 40} = 3.3 × 10^{-34} \text{ m}$$

**This is impossibly small!** (10²⁴ times smaller than an atom)

### The Rule of Thumb

Wave nature is significant when:

$$λ \sim \text{size of obstacle/slit}$$

- **Electrons**: λ ~ 1 Å, atomic spacing ~ 1 Å → **Diffraction visible!**
- **Macroscopic objects**: λ ~ 10⁻³⁴ m → **No diffraction**

---

## Bohr’s Quantization from de Broglie

### The Circular Standing Wave Condition

For an electron in a stable orbit around nucleus:

```fallback
Orbit
     ___________
    /     λ     \
   |  ← → ← → ← |  Standing wave
    \___________/

Circumference = nλ
```

$$2πr = nλ$$

Substituting λ = h/mv:

$$2πr = n\frac{h}{mv}$$

$$mvr = \frac{nh}{2π} = n\hbar$$

**This is Bohr’s quantization condition!** 🎯

de Broglie explained WHY angular momentum is quantized - electrons are standing waves!

---

## Heisenberg’s Uncertainty Principle

Matter waves come with a fundamental limit on measurement:

$$\boxed{\Delta x \cdot \Delta p \geq \frac{h}{4\pi}}$$

Also:

$$\Delta E \cdot \Delta t \geq \frac{h}{4\pi}$$

**Implications:**

- Cannot simultaneously know exact position and momentum
- Explains why electrons don’t fall into the nucleus
- Sets limits on measurement precision

---

## Memory Tricks 🧠

### “LAMBDA PIZZA” for de Broglie

**L**ight has λ = c/ν
**A**ll particles have waves
**M**omentum determines λ
**B**ig mass → small λ
**D**e Broglie: λ = h/p
**A**ccelerated charges: use qV

**P**lanck’s h is the bridge
**I**nverse relation with p
**Z**ero momentum → infinite λ
**Z**ig-zag electron paths are waves
**A**ngular momentum quantized

### The MASS-SPEED Memory

```fallback
Heavy & Slow → LARGE λ → Wave-like
Light & Fast → SMALL λ → Particle-like

Wait, that's backwards! 🤔

Actually:
Heavy OR Slow → small λ (mv in denominator)
Light AND Fast → can have large λ

Electron (light) at normal speeds → λ ~ Å ✓
Bullet (heavy) at any speed → λ ~ 10⁻³⁴ m
```

### Quick Conversion Formulas

For **electrons** accelerated through V volts:

$$λ(\text{Å}) = \frac{12.27}{\sqrt{V}}$$

For **kinetic energy** K in eV:

$$λ(\text{Å}) = \frac{12.27}{\sqrt{K}}$$

---

## Common Mistakes ⚠️

### ❌ Mistake 1: Using wrong mass

**Wrong:** Using rest mass for relativistic particles
**Right:** Use relativistic momentum p = γm₀v for v ~ c

### ❌ Mistake 2: Confusing λ with wavelength of light

**Wrong:** “Electron absorbs light of wavelength λ”
**Right:** Electron HAS associated wavelength λ (not light!)

### ❌ Mistake 3: Forgetting √2m

**Wrong:** λ = h/√(mK)
**Right:** λ = h/√(2mK)

### ❌ Mistake 4: Mixing up phase and group velocity

**Wrong:** “Particle travels at vₚ = c²/v”
**Right:** Particle travels at vₘ = v (group velocity)

### ❌ Mistake 5: Wrong units

**Wrong:** V in mV, getting λ in wrong units
**Right:** V must be in volts for λ(Å) = 12.27/√V

---

## Important Comparisons

### Photon vs Electron

| Property | Photon | Electron |
| --- | --- | --- |
| Rest mass | 0 | $9.1 \times 10^{-31}$ kg |
| Charge | 0 | $-1.6 \times 10^{-19}$ C |
| Speed | c always | v < c |
| Wavelength | $\frac{hc}{E}$ | $\frac{h}{mv}$ |

### de Broglie Wavelengths at Room Temperature (300 K)

Using thermal energy: K = (3/2)kT = 0.039 eV

| Particle | Mass (kg) | λ (Å) |
| --- | --- | --- |
| Electron | 9.11 × 10⁻³¹ | 62 |
| Proton | 1.67 × 10⁻²⁷ | 1.4 |
| H₂ molecule | 3.34 × 10⁻²⁷ | 1.0 |
| He atom | 6.68 × 10⁻²⁷ | 0.7 |

### Electron Wavelengths at Different Energies

| Accelerating Voltage | K (eV) | λ (Å) |
| --- | --- | --- |
| 10 V | 10 | 3.88 |
| 100 V | 100 | 1.23 |
| 1000 V | 1 keV | 0.388 |
| 10,000 V | 10 keV | 0.123 |

**Note:** At 10 keV, relativistic effects ~1%

---

## Derivations You Must Know

### 1. λ from Kinetic Energy

$$K = \frac{1}{2}mv^2$$

$$p^2 = 2mK$$

$$p = \sqrt{2mK}$$

$$λ = \frac{h}{p} = \frac{h}{\sqrt{2mK}}$$

### 2. λ for Accelerated Electron

$$K = eV$$

$$λ = \frac{h}{\sqrt{2meV}}$$

Substituting values:

- h = 6.626 × 10⁻³⁴ J·s
- m = 9.11 × 10⁻³¹ kg
- e = 1.6 × 10⁻¹⁹ C

$$λ = \frac{6.626 × 10^{-34}}{\sqrt{2 × 9.11 × 10^{-31} × 1.6 × 10^{-19} × V}}$$

$$λ = \frac{12.27 × 10^{-10}}{\sqrt{V}} = \frac{12.27}{\sqrt{V}} \text{ Å}$$

### 3. Bohr Radius from de Broglie

For ground state (n = 1):

$$2πr_1 = λ$$

$$2πr_1 = \frac{h}{mv}$$

Also, for circular motion:

$$\frac{mv^2}{r_1} = \frac{ke^2}{r_1^2}$$

Combining these:

$$r_1 = \frac{h^2}{4π^2mke^2} = 0.529 \text{ Å}$$

This is the Bohr radius!

---

## Problem-Solving Strategy

### Step 1: Identify Given Information

- Mass of particle
- Velocity OR kinetic energy OR potential
- Sometimes wavelength → find other quantities

### Step 2: Choose Appropriate Formula

```fallback
Known?          Use Formula
------          -----------
v               λ = h/mv
K               λ = h/√(2mK)
V (potential)   λ = h/√(2mqV)
E (total)       Find K first, then use above
```

### Step 3: Unit Consistency

| Quantity | SI Unit | Alternative |
| --- | --- | --- |
| h | 6.626 × 10⁻³⁴ J·s | 4.14 × 10⁻¹⁵ eV·s |
| m | kg | - |
| v | m/s | - |
| K | J | eV (1.6 × 10⁻¹⁹ J) |
| λ | m | Å (10⁻¹⁰ m) |

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** An electron is accelerated through 100 V. Find its de Broglie wavelength.

**Solution:**

```fallback
Using λ = 12.27/√V Å
λ = 12.27/√100 = 12.27/10 = 1.227 Å
```

**Q2.** A particle of mass 10⁻⁶ kg is moving with velocity 10⁻² m/s. Calculate its de Broglie wavelength.

**Solution:**

```fallback
λ = h/mv
λ = (6.626 × 10⁻³⁴)/(10⁻⁶ × 10⁻²)
λ = 6.626 × 10⁻²⁶ m

This is extremely small - wave nature negligible!
```

**Q3.** An electron and a proton have the same kinetic energy. Find the ratio of their de Broglie wavelengths.

**Solution:**

```fallback
λ = h/√(2mK)

λₑ/λₚ = √(mₚ/mₑ) = √(1836) ≈ 43

Electron wavelength is 43 times larger!
```

---

### Level 2: JEE Main/Advanced

**Q4.** An electron has de Broglie wavelength equal to the wavelength of yellow light (600 nm). Find:
(a) Momentum of electron
(b) Kinetic energy in eV
(c) Accelerating potential needed

**Solution:**

```fallback
(a) p = h/λ = (6.626 × 10⁻³⁴)/(600 × 10⁻⁹)
    p = 1.104 × 10⁻²⁷ kg·m/s

(b) K = p²/2m = (1.104 × 10⁻²⁷)²/(2 × 9.11 × 10⁻³¹)
    K = 6.69 × 10⁻²⁵ J = 4.18 × 10⁻⁶ eV
    K ≈ 4.18 μeV (very small!)

(c) V = K/e = 4.18 × 10⁻⁶ V ≈ 4.18 μV
```

**Q5.** A proton and an α-particle are accelerated through the same potential difference. Find the ratio of their de Broglie wavelengths.

**Solution:**

```fallback
λ = h/√(2mqV)

For same V:
λ ∝ 1/√(mq)

Proton: m = mₚ, q = e
α-particle: m = 4mₚ, q = 2e

λₚ/λₐ = √(mₐqₐ)/(mₚqₚ) = √(4mₚ × 2e)/(mₚ × e)
λₚ/λₐ = √8 = 2√2 ≈ 2.83
```

**Q6.** Show that for a photon, de Broglie wavelength equals electromagnetic wavelength.

**Solution:**

```fallback
For photon:
E = pc (massless)
E = hν = hc/λ_EM

p = E/c = h/λ_EM

de Broglie: λ_dB = h/p = h/(h/λ_EM) = λ_EM

Perfect match! ✓
```

---

### Level 3: JEE Advanced

**Q7.** An electron in hydrogen atom jumps from n=3 to n=1 orbit. The emitted photon strikes a metal surface with work function 2 eV. Find:
(a) de Broglie wavelength of emitted photon
(b) de Broglie wavelength of ejected photoelectron
(Energy levels: Eₙ = -13.6/n² eV)

**Solution:**

```fallback
(a) E₃ = -13.6/9 = -1.51 eV
    E₁ = -13.6 eV

    Photon energy: hν = E₃ - E₁ = -1.51 - (-13.6) = 12.09 eV

    λ_photon = hc/E = 1240 eV·nm / 12.09 eV = 102.6 nm

(b) K_max = hν - φ = 12.09 - 2 = 10.09 eV

    For electron:
    λ = 12.27/√K Å = 12.27/√10.09 = 3.86 Å
```

**Q8.** An electron and a photon have the same wavelength of 0.1 nm. Compare their:
(a) Momentum
(b) Energy

**Solution:**

```fallback
(a) Both have same momentum!
    p = h/λ = (6.626 × 10⁻³⁴)/(0.1 × 10⁻⁹)
    p = 6.626 × 10⁻²⁴ kg·m/s

(b) For photon:
    E = pc = 6.626 × 10⁻²⁴ × 3 × 10⁸
    E = 1.988 × 10⁻¹⁵ J = 12.4 keV

    For electron:
    E = p²/2m = (6.626 × 10⁻²⁴)²/(2 × 9.11 × 10⁻³¹)
    E = 2.41 × 10⁻¹⁷ J = 150 eV

    E_photon/E_electron = 12400/150 ≈ 83

Photon has 83 times more energy for same wavelength!
```

**Q9.** An electron is confined in a one-dimensional box of length L. Using de Broglie hypothesis, show that allowed energies are quantized.

**Solution:**

```fallback
For standing wave in box: L = n(λ/2)
where n = 1, 2, 3, ...

λ = 2L/n

Using de Broglie: λ = h/p
2L/n = h/p

p = nh/2L

Energy: E = p²/2m = (nh/2L)²/2m

E = n²h²/8mL²

This is the particle-in-a-box quantization!
Allowed energies: E₁, E₂, E₃, ... ∝ n²
```

**Q10.** A neutron beam is used for diffraction from crystal planes with spacing d = 2 Å. If the first-order maximum occurs at θ = 30°, find:
(a) de Broglie wavelength
(b) Velocity of neutrons
(c) Temperature corresponding to this thermal energy

**Solution:**

```fallback
(a) Bragg's law: 2d sinθ = nλ
    For n = 1: λ = 2d sinθ = 2 × 2 × sin30°
    λ = 2 × 2 × 0.5 = 2 Å

(b) λ = h/mv
    v = h/mλ
    v = (6.626 × 10⁻³⁴)/(1.67 × 10⁻²⁷ × 2 × 10⁻¹⁰)
    v = 1.98 × 10³ m/s

(c) K = ½mv² = ½ × 1.67 × 10⁻²⁷ × (1.98 × 10³)²
    K = 3.28 × 10⁻²¹ J

    K = (3/2)kT
    T = 2K/3k = (2 × 3.28 × 10⁻²¹)/(3 × 1.38 × 10⁻²³)
    T = 158 K ≈ -115°C

This is cryogenic temperature!
```

---

## Cross-Links to Related Topics

- [Photoelectric Effect](../photoelectric-effect/index.md) - Wave-particle duality of light
- [Davisson-Germer Experiment](../davisson-germer/index.md) - Experimental proof of de Broglie hypothesis
- [Bohr Model](../../atoms-nuclei/bohr-model/index.md) - Angular momentum quantization explained
- [Hydrogen Spectrum](../../atoms-nuclei/hydrogen-spectrum/index.md) - Energy levels and transitions

---

## Quick Revision Checklist ✓

- de Broglie relation: λ = h/p = h/mv
- For kinetic energy: λ = h/√(2mK)
- For accelerated electron: λ = 12.27/√V Å
- Wave-particle duality applies to ALL matter
- Massive/fast particles → small λ → particle-like
- Light/slow particles → large λ → wave-like
- Bohr quantization: 2πr = nλ
- Phase velocity: vₚ = c²/v
- Group velocity: vₘ = v (particle velocity)
- Photon: λ_dB = λ_EM (same!)

---

## Conceptual Questions for Deep Understanding

**Q1.** Why can’t we observe diffraction of cricket balls?
**A:** λ ~ 10⁻³⁴ m, far smaller than any obstacle. Need λ ~ size for diffraction.

**Q2.** Can a photon have a de Broglie wavelength?
**A:** Yes! λ = h/p, and for photon p = E/c, so λ = hc/E = electromagnetic λ.

**Q3.** Why does heavier particle have smaller wavelength at same speed?
**A:** λ = h/mv. Larger m (mass) in denominator → smaller λ.

**Q4.** Can macroscopic objects behave like waves?
**A:** In principle yes, but λ is so tiny it’s unobservable. Quantum effects vanish for large masses.

**Q5.** What happens to λ as particle approaches speed of light?
**A:** Must use relativistic momentum. λ → 0 as v → c (for massive particles).

---

## Final Tips for JEE

1. **Master the formula**: λ = h/p in all forms
2. **Quick electron formula**: λ(Å) = 12.27/√V - memorize this!
3. **Proportionalities**: λ ∝ 1/v, λ ∝ 1/√K, λ ∝ 1/√V
4. **Same K**: λ ∝ 1/√m (lighter particle → larger λ)
5. **Same V**: λ ∝ 1/√(mq) (compare different particles)
6. **Units**: Keep h in J·s, get λ in m; OR use shortcuts
7. **Bohr connection**: Standing waves → quantization
8. **Numerical values**: Know electron/proton mass ratio = 1836

---

*Last updated: April 18, 2025*
*Previous: [Photoelectric Effect](../photoelectric-effect/index.md)*
*Next: [Davisson-Germer Experiment](../davisson-germer/index.md)*

From TestGuru · our mock-test platform

## You've read de Broglie Hypothesis - Matter Waves Revolution.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=dual-nature&tg_exam=jee-main&tg_page=%2Fphysics%2Fdual-nature%2Fde-broglie%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/dual-nature/de-broglie/",this.page.identifier="/physics/dual-nature/de-broglie/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="waveFunction" id="anim-waveFunction-1795396423182300048"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-waveFunction-1795396423182300048")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/dual-nature/de-broglie/](https://jeenotes.in/physics/dual-nature/de-broglie/) · raw HTML: `offline/physics/dual-nature/de-broglie/index.html`_
