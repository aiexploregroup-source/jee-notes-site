---
title: "Properties of Electromagnetic Waves"
source: "https://jeenotes.in/physics/electromagnetic-waves/em-wave-properties/"
description: "Master EM wave properties, energy density, and radiation pressure for JEE"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 5"
html: "../../../../offline/physics/electromagnetic-waves/em-wave-properties/index.html"
extracted: "2026-11-23"
---

> Master EM wave properties, energy density, and radiation pressure for JEE

# Properties of Electromagnetic Waves

## Real-Life Hook

Why do solar sails work in space? How can light push objects? The answer lies in electromagnetic wave properties! When sunlight hits a reflective sail, it transfers momentum and creates radiation pressure - enough to propel spacecraft without fuel! This same principle explains why comet tails always point away from the sun (solar radiation pressure pushes dust particles), why laser cooling can trap atoms, and why your black car gets hotter than a white one (absorption of EM energy). Even more fascinating: the pressure of sunlight on Earth is about 10⁻⁶ N/m² - tiny but measurable! Understanding EM wave properties also explains how radio telescopes detect signals from billions of light-years away and how optical tweezers can manipulate individual cells in biology labs.

## Fundamental Nature of EM Waves

### What are Electromagnetic Waves?

> **Electromagnetic Wave**
>
> A self-sustaining oscillation of electric and magnetic fields that propagates through space at the speed of light.

**Key Characteristics**:

1. Do NOT require a medium (can travel in vacuum)
2. Are transverse waves (E and B perpendicular to direction of propagation)
3. Travel at speed c = 3 × 10⁸ m/s in vacuum
4. Carry energy and momentum

### The Wave Equations

From Maxwell’s equations, both E and B satisfy wave equations:

$$\frac{\partial^2 \vec{E}}{\partial t^2} = c^2 \nabla^2 \vec{E}$$

$$\frac{\partial^2 \vec{B}}{\partial t^2} = c^2 \nabla^2 \vec{B}$$

where $c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$

## Core Properties of EM Waves

### 1. Transverse Nature

> **EM waves are transverse**
>
> - Electric field ($\vec{E}$) perpendicular to direction of propagation

> - Magnetic field ($\vec{B}$) perpendicular to direction of propagation

> - $\vec{E} \perp \vec{B}$ (E and B perpendicular to each other)

**Vector Relation**:

$$\vec{E} \times \vec{B} \parallel \text{direction of propagation}$$

**Proof**: No longitudinal component - E and B oscillate perpendicular to wave travel direction.

### 2. E and B are in Phase

> **Phase Relationship**
>
> Electric and magnetic fields oscillate in phase - they reach maximum, zero, and minimum values at the same instant and at the same location.

**Mathematical Expression**:
If wave travels in +x direction:

$$E_y = E_0 \sin(kx - \omega t)$$

$$B_z = B_0 \sin(kx - \omega t)$$

Note: Both have the same phase $(kx - \omega t)$

### 3. Ratio of E and B

> **E/B Ratio**
>
> $$\frac{E}{B} = c$$
>
> Where c = 3 × 10⁸ m/s (speed of light)

**Derivation**: From Maxwell’s equations, the ratio of amplitudes:

$$\frac{E_0}{B_0} = c$$

At any instant: $\frac{E}{B} = c$

**Example**: If E = 600 V/m, then B = 600/(3×10⁸) = 2×10⁻⁶ T = 2 μT

### 4. Speed in Vacuum

> **Speed of EM Waves**
>
> $$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = 3 \times 10^8 \text{ m/s}$$
>
> Where:
>
> - μ₀ = 4π × 10⁻⁷ T·m/A (permeability)

> - ε₀ = 8.85 × 10⁻¹² F/m (permittivity)

**Universal Constant**: Same for all EM waves (radio, light, X-rays, etc.)

### 5. Speed in a Medium

In a medium with permittivity ε and permeability μ:

> **Speed in Medium**
>
> $$v = \frac{1}{\sqrt{\mu \epsilon}} = \frac{c}{n}$$
>
> Where n = refractive index = $\sqrt{\mu_r \epsilon_r}$

For most dielectrics (non-magnetic): μ_r ≈ 1, so:

$$n \approx \sqrt{\epsilon_r}$$

**Examples**:

- Air: n ≈ 1.0003 → v ≈ c
- Water: n ≈ 1.33 → v ≈ 2.25 × 10⁸ m/s
- Glass: n ≈ 1.5 → v ≈ 2 × 10⁸ m/s

### 6. No Need for Medium

> **EM waves can propagate in vacuum**

Unlike mechanical waves (sound, water), EM waves don’t need a material medium.

**Historical Note**: The “luminiferous ether” hypothesis was disproved by Michelson-Morley experiment (1887).

### 7. Polarization

EM waves can be polarized - the direction of E-field oscillation can be controlled.

**Types**:

- **Linear polarization**: E oscillates in a fixed plane
- **Circular polarization**: E rotates as wave propagates
- **Unpolarized**: Random E-field orientation (sunlight)

**Note**: We usually describe polarization by E-field direction (B automatically perpendicular).

## Energy in EM Waves

### Energy Density

Energy is carried in both electric and magnetic fields.

> **Electric Field Energy Density**
>
> $$u_E = \frac{1}{2}\epsilon_0 E^2$$

> **Magnetic Field Energy Density**
>
> $$u_B = \frac{1}{2\mu_0} B^2$$

**Key Result**: For EM waves, $u_E = u_B$ (equal energy in E and B fields!)

**Proof**:

$$u_E = \frac{1}{2}\epsilon_0 E^2$$

$$u_B = \frac{1}{2\mu_0} B^2 = \frac{1}{2\mu_0} \left(\frac{E}{c}\right)^2 = \frac{1}{2\mu_0} \cdot \frac{E^2}{c^2}$$

Since $c^2 = \frac{1}{\mu_0 \epsilon_0}$:

$$u_B = \frac{1}{2\mu_0} \cdot E^2 \mu_0 \epsilon_0 = \frac{1}{2}\epsilon_0 E^2 = u_E$$

> **Total Energy Density**
>
> $$u = u_E + u_B = 2u_E = 2u_B$$

$$u = \epsilon_0 E^2 = \frac{B^2}{\mu_0}$$

Or:

$$u = \epsilon_0 E^2 = \frac{1}{\mu_0}B^2 = \frac{EB}{\mu_0 c}$$

### Intensity (Poynting Vector)

The rate of energy flow per unit area:

> **Intensity (I)**
>
> $$I = u \cdot c = \epsilon_0 c E^2 = \frac{cB^2}{\mu_0}$$

$$I = \frac{EB}{\mu_0}$$

**For sinusoidal wave**, intensity is time-averaged:

> **Average Intensity**
>
> $$\langle I \rangle = \frac{1}{2}\epsilon_0 c E_0^2 = \frac{c B_0^2}{2\mu_0}$$
>
> Or:
>
> $$\langle I \rangle = \frac{E_0 B_0}{2\mu_0}$$

where E₀ and B₀ are amplitudes.

**Units**: W/m² (watts per square meter)

### Poynting Vector

Direction and magnitude of energy flow:

> **Poynting Vector**
>
> $$\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$$

**Properties**:

- Direction: Direction of energy flow (wave propagation)
- Magnitude: Instantaneous energy flux (W/m²)
- $\vec{S} = I \hat{n}$ where $\hat{n}$ is propagation direction

## Momentum and Radiation Pressure

### Momentum of EM Wave

EM waves carry momentum (despite having no mass!).

> **Momentum Density**
>
> $$\vec{p} = \frac{\vec{S}}{c^2} = \frac{u}{c}\hat{n}$$

> **Momentum of Photon**
>
> $$p = \frac{E}{c} = \frac{h}{\lambda}$$

where E = hf is photon energy.

### Radiation Pressure

When EM waves are absorbed or reflected, they exert pressure.

> **Radiation Pressure (complete absorption)**
>
> $$P_{abs} = \frac{I}{c} = \frac{u \cdot c}{c} = u$$

> **Radiation Pressure (complete reflection)**
>
> $$P_{ref} = \frac{2I}{c} = 2u$$

**Why factor of 2?**: Momentum change is $\Delta p = p_i - p_f = p - (-p) = 2p$ (reversal!)

### Force Due to Radiation

> **Force on surface**
>
> $$F = P \times A$$
>
> Where A = area of surface

For complete absorption:

$$F = \frac{IA}{c}$$

For complete reflection:

$$F = \frac{2IA}{c}$$

## Mathematical Description of Plane EM Wave

### General Form

For wave traveling in +x direction:

> $$E_y = E_0 \sin(kx - \omega t)$$

$$B_z = B_0 \sin(kx - \omega t)$$
>
> Where:
>
> - $E_0/B_0 = c$

> - $k = \frac{2\pi}{\lambda}$ (wave number)

> - $\omega = 2\pi f$ (angular frequency)

> - $\omega = ck$ (dispersion relation)

**In vector form**:

$$\vec{E} = E_0 \sin(kx - \omega t) \hat{j}$$

$$\vec{B} = B_0 \sin(kx - \omega t) \hat{k}$$

Direction of propagation: $\hat{i}$ (since $\hat{j} \times \hat{k} = \hat{i}$)

## Memory Tricks

### “E and B are Best Friends”

- **E** and **B** are perpendicular (⊥)
- **E** and **B** are in phase
- **E** and **B** have ratio E/B = c
- Both propagate together

### “E Over B Equals C”

$$\frac{E}{B} = c$$

Think: “**E**lectric **O**ver **B** = **C**”

### Interactive Demo: Visualize EM Wave Propagation

See how electric and magnetic fields oscillate perpendicular to each other and the direction of propagation.

### “Twice the Momentum on Reflection”

- **Absorption**: P = I/c
- **Reflection**: P = 2I/c (factor of 2!)
- Think: Ball bouncing back → double momentum change

### “Equal Energy in E and B”

$$u_E = u_B$$

- Half total energy in E-field
- Half total energy in B-field
- Total: u = 2u_E = 2u_B

### “Intensity = Energy × Speed”

$$I = u \cdot c$$

- Energy density × speed of propagation
- Think: How fast energy flows through area

### Polarization Direction

“**P**olarization follows **E**lectric field”

- Polarization direction = direction of E-field oscillation
- (Not B-field direction!)

## Common Unit Conversion Mistakes

### Electric Field (E)

- Units: V/m or N/C
- Typical values: 10² to 10⁶ V/m for EM waves
- **Common error**: Using V instead of V/m

### Magnetic Field (B)

- Units: Tesla (T) or Gauss (G)
- 1 T = 10⁴ G
- Typical EM wave: 10⁻⁶ to 10⁻³ T (μT to mT)
- **Common error**: Forgetting B is very small compared to E numerically

### Intensity (I)

- Units: W/m²
- Sunlight on Earth: ~1000 W/m²
- **Common error**: Using W instead of W/m²

### Radiation Pressure (P)

- Units: Pa (Pascal) = N/m²
- Sunlight pressure: ~10⁻⁶ Pa (very small!)
- **Common error**: Forgetting to divide by c

### Energy Density (u)

- Units: J/m³
- **Common error**: Confusing with intensity (W/m²)

### Permittivity and Permeability

- ε₀ = 8.85 × 10⁻¹² F/m (very small!)
- μ₀ = 4π × 10⁻⁷ T·m/A ≈ 1.26 × 10⁻⁶ T·m/A
- **Common error**: Sign of exponent (10⁻¹² not 10¹²!)

## Important Formulas Summary

### Wave Relations

> $$\frac{E}{B} = c$$

$$c = f\lambda = \frac{\omega}{k}$$

$$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$$

### Energy Relations

> $$u = \epsilon_0 E^2 = \frac{B^2}{\mu_0}$$
>
> (total energy density)
>
> $$I = uc = \epsilon_0 c E^2$$
>
> (intensity)
>
> $$\langle I \rangle = \frac{1}{2}\epsilon_0 c E_0^2$$
>
> (average intensity)

### Momentum and Pressure

> $$p = \frac{E}{c}$$
>
> (photon momentum)
>
> $$P_{abs} = \frac{I}{c}$$
>
> (radiation pressure, absorption)
>
> $$P_{ref} = \frac{2I}{c}$$
>
> (radiation pressure, reflection)

### Poynting Vector

> $$\vec{S} = \frac{1}{\mu_0}(\vec{E} \times \vec{B})$$

$$|\vec{S}| = I = \frac{EB}{\mu_0}$$

## 3-Level Practice Problems

### Level 1: JEE Main Basics

**Problem 1**: The electric field in an EM wave is 300 V/m. Calculate the magnitude of the magnetic field. (c = 3 × 10⁸ m/s)

<details><summary>Solution</summary><p>Given:</p><ul><li>E = 300 V/m</li></ul><p>Using: $\frac{E}{B} = c$</p>$$B = \frac{E}{c} = \frac{300}{3 \times 10^8} = 10^{-6} \text{ T} = 1 \text{ μT}$$<p><strong>Answer</strong>: B = 1 μT</p><p><strong>Note</strong>: B is numerically much smaller than E!</p></details>

**Problem 2**: Calculate the energy density of an EM wave with electric field amplitude E₀ = 600 V/m. (ε₀ = 8.85 × 10⁻¹² F/m)

<details><summary>Solution</summary><p>Given:</p><ul><li>E₀ = 600 V/m</li></ul><p>Energy density (instantaneous at maximum):</p>$$u = \epsilon_0 E^2 = 8.85 \times 10^{-12} \times (600)^2$$

$$u = 8.85 \times 10^{-12} \times 3.6 \times 10^5$$

$$u = 3.186 \times 10^{-6} \text{ J/m}^3$$<p><strong>Answer</strong>: u = 3.19 × 10⁻⁶ J/m³ or 3.19 μJ/m³</p><p><strong>Average energy density</strong>: $\langle u \rangle = \frac{u}{2} = 1.59$ μJ/m³</p></details>

### Level 2: JEE Main Advanced

**Problem 3**: Sunlight has an intensity of 1000 W/m² at Earth’s surface. Calculate:
(a) Energy density
(b) Radiation pressure (assuming complete absorption)
(c = 3 × 10⁸ m/s)

<details><summary>Solution</summary><p>Given:</p><ul><li>I = 1000 W/m²</li></ul><p><strong>(a) Energy density</strong>:</p>$$u = \frac{I}{c} = \frac{1000}{3 \times 10^8}$$

$$u = 3.33 \times 10^{-6} \text{ J/m}^3$$<p><strong>(b) Radiation pressure (absorption)</strong>:</p>$$P = \frac{I}{c} = \frac{1000}{3 \times 10^8}$$

$$P = 3.33 \times 10^{-6} \text{ Pa} = 3.33 \text{ μPa}$$<p><strong>Answer</strong>:</p><ul><li>(a) u = 3.33 μJ/m³</li><li>(b) P = 3.33 μPa</li></ul><p><strong>Physical Insight</strong>: Even bright sunlight exerts tiny pressure - about 10⁻⁶ atmospheres!</p></details>

**Problem 4**: A plane EM wave has E₀ = 90 V/m and B₀ = 3 × 10⁻⁷ T. Calculate:
(a) Speed of the wave
(b) Average intensity
(ε₀ = 8.85 × 10⁻¹² F/m, c = 3 × 10⁸ m/s)

<details><summary>Solution</summary><p>Given:</p><ul><li>E₀ = 90 V/m</li><li>B₀ = 3 × 10⁻⁷ T</li></ul><p><strong>(a) Speed</strong>:</p>$$v = \frac{E_0}{B_0} = \frac{90}{3 \times 10^{-7}} = 3 \times 10^8 \text{ m/s}$$<p>This equals c, so wave is in <strong>vacuum</strong>!</p><p><strong>(b) Average intensity</strong>:</p>$$\langle I \rangle = \frac{1}{2}\epsilon_0 c E_0^2$$

$$\langle I \rangle = \frac{1}{2} \times 8.85 \times 10^{-12} \times 3 \times 10^8 \times (90)^2$$

$$\langle I \rangle = \frac{1}{2} \times 8.85 \times 10^{-12} \times 3 \times 10^8 \times 8100$$

$$\langle I \rangle = 10.76 \text{ W/m}^2$$<p><strong>Answer</strong>:</p><ul><li>(a) v = 3 × 10⁸ m/s (wave in vacuum)</li><li>(b) ⟨I⟩ = 10.8 W/m²</li></ul></details>

### Level 3: JEE Advanced

**Problem 5**: A laser beam of power 10 mW has a cross-sectional area of 1 mm². It falls normally on a perfectly reflecting surface. Calculate:
(a) Intensity of the beam
(b) Radiation pressure on the surface
(c) Force exerted on the surface
(c = 3 × 10⁸ m/s)

<details><summary>Solution</summary><p>Given:</p><ul><li>P = 10 mW = 10 × 10⁻³ W = 0.01 W</li><li>A = 1 mm² = 1 × 10⁻⁶ m²</li></ul><p><strong>(a) Intensity</strong>:</p>$$I = \frac{P}{A} = \frac{0.01}{10^{-6}} = 10^4 \text{ W/m}^2$$<p><strong>(b) Radiation pressure (perfect reflection)</strong>:</p>$$P_{rad} = \frac{2I}{c} = \frac{2 \times 10^4}{3 \times 10^8}$$

$$P_{rad} = 6.67 \times 10^{-5} \text{ Pa}$$<p><strong>(c) Force</strong>:</p>$$F = P_{rad} \times A = 6.67 \times 10^{-5} \times 10^{-6}$$

$$F = 6.67 \times 10^{-11} \text{ N}$$<p><strong>Answer</strong>:</p><ul><li>(a) I = 10⁴ W/m²</li><li>(b) P = 6.67 × 10⁻⁵ Pa</li><li>(c) F = 6.67 × 10⁻¹¹ N</li></ul><p><strong>Physical Insight</strong>: Even intense laser creates tiny force - but enough to trap particles!</p></details>

**Problem 6**: Show that in an EM wave, the electric field energy density equals the magnetic field energy density.

<details><summary>Solution</summary><p><strong>Electric field energy density</strong>:</p>$$u_E = \frac{1}{2}\epsilon_0 E^2$$<p><strong>Magnetic field energy density</strong>:</p>$$u_B = \frac{1}{2\mu_0} B^2$$<p>For EM wave: $B = \frac{E}{c}$</p><p>Substituting:</p>$$u_B = \frac{1}{2\mu_0} \left(\frac{E}{c}\right)^2 = \frac{E^2}{2\mu_0 c^2}$$<p>Using $c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$, so $c^2 = \frac{1}{\mu_0 \epsilon_0}$:</p>$$u_B = \frac{E^2}{2\mu_0} \times \mu_0 \epsilon_0 = \frac{1}{2}\epsilon_0 E^2 = u_E$$<blockquote>$$\boxed{u_E = u_B}$$</blockquote><p><strong>Proved</strong>: Equal energy in E and B fields!</p><p><strong>Total energy density</strong>: $u = u_E + u_B = 2u_E = 2u_B = \epsilon_0 E^2 = \frac{B^2}{\mu_0}$</p></details>

## Advanced Topics

### Inverse Square Law for Point Source

For a point source emitting power P uniformly:

$$I = \frac{P}{4\pi r^2}$$

Intensity decreases as $1/r^2$ (inverse square law).

**Example**: Sun’s intensity at Earth (r = 1.5 × 10¹¹ m):

$$I = \frac{3.8 \times 10^{26}}{4\pi (1.5 \times 10^{11})^2} \approx 1350 \text{ W/m}^2$$

(Solar constant)

### Doppler Effect for EM Waves

When source and observer have relative velocity v:

$$f' = f\sqrt{\frac{c + v_r}{c - v_r}}$$

where $v_r$ = radial velocity (positive if approaching).

**Applications**: Redshift in astronomy, radar speed detection.

## Cross-Links to Other Topics

### Related to EM Theory

- [Displacement Current](../displacement-current/index.md) - Maxwell’s equations
- [EM Spectrum](../em-spectrum/index.md) - Different wavelengths

### Related to Optics

- [Reflection](../../optics/reflection-refraction/index.md) - Radiation pressure on mirrors
- [Polarization](../../optics/polarization/index.md) - E-field orientation
- [Interference](../../optics/interference/index.md) - Wave superposition
- [Photoelectric Effect](../../dual-nature/photoelectric-effect/index.md) - Photon momentum and energy

### Related to Thermodynamics

- [Stefan-Boltzmann Law](../../thermodynamics/index.md) - EM radiation from hot bodies
- [Radiation Heat Transfer](../../thermodynamics/index.md) - Energy transport

## Key Takeaways

1. **EM waves are transverse**: E ⊥ B ⊥ direction
2. **E/B = c**: Fundamental ratio
3. **Equal energy**: $u_E = u_B$ (half in each field)
4. **Intensity**: I = uc (energy flow rate)
5. **Radiation pressure**: P = I/c (absorption), P = 2I/c (reflection)
6. **Speed in vacuum**: c is universal for all EM waves
7. **Carry momentum**: p = E/c despite zero mass!

## Exam Tips

- **JEE Main**: Focus on E/B ratio, energy density, intensity calculations
- **JEE Advanced**: Expect radiation pressure problems, derivations, Poynting vector
- **Common trap**: Forgetting factor of 2 for radiation pressure on reflection
- **Quick check**: B is always much smaller than E numerically (B = E/c)
- **Units**: Intensity in W/m², pressure in Pa, energy density in J/m³
- **Conceptual**: Understand physical meaning - energy flow, momentum transfer
- **Average values**: For sinusoidal waves, use ⟨I⟩ = ½ε₀cE₀² (factor of 1/2!)

---

*Last updated: March 12, 2025*

From TestGuru · our mock-test platform

## You've read Properties of Electromagnetic Waves.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-waves%2Fem-wave-properties%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-waves/em-wave-properties/",this.page.identifier="/physics/electromagnetic-waves/em-wave-properties/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="waveFunction" id="anim-waveFunction-1795396423290253939"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-waveFunction-1795396423290253939")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-waves/em-wave-properties/](https://jeenotes.in/physics/electromagnetic-waves/em-wave-properties/) · raw HTML: `offline/physics/electromagnetic-waves/em-wave-properties/index.html`_
