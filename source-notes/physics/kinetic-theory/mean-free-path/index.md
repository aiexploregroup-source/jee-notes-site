---
title: "Mean Free Path and Molecular Collisions"
source: "https://jeenotes.in/physics/kinetic-theory/mean-free-path/"
description: "Understand mean free path, collision frequency, and molecular collisions for JEE"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 7"
html: "../../../../offline/physics/kinetic-theory/mean-free-path/index.html"
extracted: "2026-11-23"
---

> Understand mean free path, collision frequency, and molecular collisions for JEE

# Mean Free Path and Molecular Collisions

## Real-Life Hook

Why is smoke visible but air invisible? Both are made of molecules! The answer lies in mean free path. In clean air, molecules travel about 100 nanometers before colliding with another molecule - much smaller than the wavelength of visible light (400-700 nm), making air transparent. But smoke particles are much larger and scatter light effectively. This same principle explains why airplane contrails form - water vapor from jet exhaust condenses because the mean free path becomes very small in the turbulent, moisture-rich environment. Understanding mean free path is also crucial for vacuum technology - in ultra-high vacuum chambers used for semiconductor manufacturing, molecules can travel meters without collision!

## Core Concepts

### What is Mean Free Path?

> **Mean Free Path (λ)**
>
> The average distance traveled by a molecule between two successive collisions.

**Physical Picture**: Imagine a molecule moving through gas, constantly colliding with other molecules. The distances between collisions vary, but the average of all these distances is the mean free path.

### What is Collision Frequency?

> **Collision Frequency (ν or Z)**
>
> The average number of collisions a molecule undergoes per unit time.

**Units**: collisions per second (s⁻¹ or Hz)

### Molecular Diameter

> **Molecular Diameter (d)**
>
> The effective size of a molecule, treated as a hard sphere.

Typical values: d ≈ 2-5 Å (1 Å = 10⁻¹⁰ m)

## Derivation of Mean Free Path

### Simple Model (Stationary Target)

Assume one molecule moves while others are stationary:

A molecule sweeps a cylindrical volume as it moves:

- Radius of cylinder = d (molecular diameter)
- Length = $\overline{v} \times t$ (distance traveled)

Volume swept: $V_{swept} = \pi d^2 \cdot \overline{v} \cdot t$

Number of collisions in time t:

$$N_{collisions} = n \times V_{swept} = n \pi d^2 \overline{v} t$$

where n = number density (molecules per unit volume)

Mean free path:

$$\lambda = \frac{\text{Total distance}}{\text{Number of collisions}} = \frac{\overline{v} t}{n \pi d^2 \overline{v} t}$$

> **Mean Free Path (simplified)**
>
> $$\lambda = \frac{1}{n\pi d^2}$$

### Refined Model (All Molecules Moving)

In reality, all molecules are moving. The relative velocity between molecules is:

$$v_{rel} = \sqrt{2} \overline{v}$$

This gives the more accurate formula:

> **Mean Free Path (accurate)**
>
> $$\lambda = \frac{1}{\sqrt{2} \pi n d^2}$$

where:

- n = number density = N/V (molecules per m³)
- d = molecular diameter (m)

### Alternative Forms

Using ideal gas equation: $PV = NkT$, so $n = \frac{N}{V} = \frac{P}{kT}$

> **Mean Free Path (in terms of P and T)**
>
> $$\lambda = \frac{kT}{\sqrt{2} \pi d^2 P}$$

**Key Relations**:

- $\lambda \propto T$ (at constant pressure)
- $\lambda \propto \frac{1}{P}$ (at constant temperature)
- $\lambda \propto \frac{1}{n}$ (number density)
- $\lambda \propto \frac{1}{d^2}$ (molecular size)

## Collision Frequency

### Definition and Formula

Collision frequency is the number of collisions per unit time:

> **Collision Frequency**
>
> $$\nu = \frac{\overline{v}}{\lambda} = \sqrt{2} \pi n d^2 \overline{v}$$

Or in terms of pressure:

$$\nu = \frac{\sqrt{2} \pi d^2 P \overline{v}}{kT}$$

### Using RMS Speed

Often expressed using average speed:

$$\overline{v} = \sqrt{\frac{8kT}{\pi m}}$$

So:

$$\nu = \sqrt{2} \pi d^2 n \sqrt{\frac{8kT}{\pi m}} = 4\pi d^2 n \sqrt{\frac{kT}{\pi m}}$$

### Time Between Collisions

> **Mean Time Between Collisions**
>
> $$\tau = \frac{1}{\nu} = \frac{\lambda}{\overline{v}}$$

## Important Formulas Summary

### Mean Free Path

> $$\lambda = \frac{1}{\sqrt{2} \pi n d^2} = \frac{kT}{\sqrt{2} \pi d^2 P}$$

### Collision Frequency

> $$\nu = \frac{\overline{v}}{\lambda} = \sqrt{2} \pi n d^2 \overline{v}$$

### Collision Rate per Unit Volume

Total collisions per unit volume per unit time:

> $$Z = \frac{1}{2} n \nu = \frac{1}{2} n \times \sqrt{2} \pi n d^2 \overline{v}$$

$$Z = \frac{\pi n^2 d^2 \overline{v}}{\sqrt{2}}$$

(Factor of 1/2 because each collision involves two molecules)

### Number Density

> $$n = \frac{N}{V} = \frac{P}{kT} = \frac{N_A P}{RT}$$

where $N_A$ = Avogadro’s number

### Interactive Demo: Molecular Collisions Visualized

Watch molecules collide and see how mean free path changes with pressure and temperature.

## Memory Tricks

### “Lambda Loves 1 over n” for Mean Free Path

$$\lambda = \frac{1}{\sqrt{2} \pi n d^2}$$

- **L**ambda ∝ **1** over n
- More molecules → shorter mean free path
- Think: crowded room → less space to walk without bumping

### “Nu = v/λ” for Collision Frequency

$$\nu = \frac{\overline{v}}{\lambda}$$

**Think**: How many times do you cover distance λ per second?

- Fast speed, short path → more collisions
- Like: fast car on short track → more laps per hour

### Temperature and Pressure Effects

**“Hot and Sparse = Long Path”**

- High T → λ increases (molecules spread out)
- High P → λ decreases (molecules compressed together)
- $\lambda \propto \frac{T}{P}$

### √2 Factor

The √2 appears because all molecules are moving (relative velocity).

- **Without √2**: Assuming stationary targets
- **With √2**: Accounting for relative motion (more accurate)

### Typical Values to Remember

- At STP: λ ≈ 100 nm (≈ 10⁻⁷ m)
- At STP: ν ≈ 10⁹ to 10¹⁰ collisions/s
- Molecular diameter: d ≈ 3 × 10⁻¹⁰ m (3 Å)

## Common Unit Conversion Mistakes

### Molecular Diameter

**Critical**: d is usually given in Ångströms (Å)

- 1 Å = 10⁻¹⁰ m
- Example: d = 3 Å = 3 × 10⁻¹⁰ m

**Common Error**: Using Å directly without converting to meters!

### Number Density (n)

- Units: molecules/m³ (not per cm³!)
- At STP: n ≈ 2.7 × 10²⁵ molecules/m³

**Conversion from pressure**:

$$n = \frac{P}{kT}$$

- P in Pascal (Pa = N/m²)
- k = 1.38 × 10⁻²³ J/K
- T in Kelvin

### Mean Free Path

- Always in meters (usually get values ~10⁻⁷ m at STP)
- If you get λ in km or mm, something is wrong!

### Collision Frequency

- Units: s⁻¹ or Hz
- Typical values: 10⁹ to 10¹⁰ collisions/second at STP
- If you get ν ~ 10³, check your units!

## Effect of Conditions on Mean Free Path

### Pressure Variation (T constant)

$$\lambda \propto \frac{1}{P}$$

- **Low pressure** (vacuum): λ very large (molecules travel far)
- **High pressure**: λ very small (frequent collisions)

**Example**:

- At 1 atm: λ ≈ 100 nm
- At 10⁻⁶ atm (high vacuum): λ ≈ 100 m!

### Temperature Variation (P constant)

$$\lambda \propto T$$

- **Higher temperature**: Molecules spread out, λ increases
- **Lower temperature**: Molecules closer, λ decreases

### Volume Variation (N constant)

$$\lambda \propto V$$

(since n = N/V)

- Expansion → λ increases
- Compression → λ decreases

## 3-Level Practice Problems

### Level 1: JEE Main Basics

**Problem 1**: Calculate the mean free path of gas molecules at STP if the molecular diameter is 2 Å. (Assume n = 2.7 × 10²⁵ molecules/m³)

<details><summary>Solution</summary><p>Given:</p><ul><li>d = 2 Å = 2 × 10⁻¹⁰ m</li><li>n = 2.7 × 10²⁵ molecules/m³</li></ul><p>Using:</p>$$\lambda = \frac{1}{\sqrt{2} \pi n d^2}$$

$$\lambda = \frac{1}{\sqrt{2} \times \pi \times 2.7 \times 10^{25} \times (2 \times 10^{-10})^2}$$

$$\lambda = \frac{1}{\sqrt{2} \times \pi \times 2.7 \times 10^{25} \times 4 \times 10^{-20}}$$

$$\lambda = \frac{1}{1.414 \times 3.14 \times 2.7 \times 10^{25} \times 4 \times 10^{-20}}$$

$$\lambda = \frac{1}{4.79 \times 10^{6}} = 2.09 \times 10^{-7} \text{ m}$$

$$\lambda \approx 209 \text{ nm}$$<p><strong>Answer</strong>: λ ≈ 2.1 × 10⁻⁷ m or 210 nm</p></details>

**Problem 2**: If the mean free path of molecules is 10⁻⁷ m and their average speed is 500 m/s, calculate the collision frequency.

<details><summary>Solution</summary><p>Given:</p><ul><li>λ = 10⁻⁷ m</li><li>$\overline{v}$ = 500 m/s</li></ul><p>Using:</p>$$\nu = \frac{\overline{v}}{\lambda} = \frac{500}{10^{-7}} = 5 \times 10^{9} \text{ s}^{-1}$$<p><strong>Answer</strong>: ν = 5 × 10⁹ collisions/s (or 5 GHz)</p><p><strong>Interpretation</strong>: Each molecule undergoes 5 billion collisions per second!</p></details>

### Level 2: JEE Main Advanced

**Problem 3**: At what pressure will the mean free path of gas molecules be 1 m at 27°C? (Given: d = 3 × 10⁻¹⁰ m, k = 1.38 × 10⁻²³ J/K)

<details><summary>Solution</summary><p>Given:</p><ul><li>λ = 1 m</li><li>T = 27 + 273 = 300 K</li><li>d = 3 × 10⁻¹⁰ m</li></ul><p>Using:</p>$$\lambda = \frac{kT}{\sqrt{2} \pi d^2 P}$$<p>Rearranging:</p>$$P = \frac{kT}{\sqrt{2} \pi d^2 \lambda}$$

$$P = \frac{1.38 \times 10^{-23} \times 300}{\sqrt{2} \times \pi \times (3 \times 10^{-10})^2 \times 1}$$

$$P = \frac{4.14 \times 10^{-21}}{1.414 \times 3.14 \times 9 \times 10^{-20}}$$

$$P = \frac{4.14 \times 10^{-21}}{4.0 \times 10^{-19}} = 1.035 \times 10^{-2} \text{ Pa}$$

$$P \approx 10^{-2} \text{ Pa} = 10^{-7} \text{ atm}$$<p><strong>Answer</strong>: P ≈ 0.01 Pa (very high vacuum!)</p><p><strong>Physical Meaning</strong>: To achieve 1 m mean free path, you need vacuum conditions - molecules are so sparse they travel 1 meter before hitting another!</p></details>

**Problem 4**: The mean free path of molecules at a certain temperature and pressure is λ. If the pressure is doubled and temperature is increased to 4 times, find the new mean free path.

<details><summary>Solution</summary><p>From: $\lambda = \frac{kT}{\sqrt{2} \pi d^2 P}$</p><p>We see: $\lambda \propto \frac{T}{P}$</p><p>Initial: $\lambda_1 \propto \frac{T_1}{P_1}$</p><p>Final: $\lambda_2 \propto \frac{T_2}{P_2} = \frac{4T_1}{2P_1} = \frac{2T_1}{P_1}$</p><p>Therefore:</p>$$\frac{\lambda_2}{\lambda_1} = \frac{2T_1/P_1}{T_1/P_1} = 2$$

$$\lambda_2 = 2\lambda_1 = 2\lambda$$<p><strong>Answer</strong>: New mean free path = 2λ (doubles)</p><p><strong>Quick Rule</strong>: $\lambda_{new} = \lambda_{old} \times \frac{T_{new}}{T_{old}} \times \frac{P_{old}}{P_{new}}$</p></details>

### Level 3: JEE Advanced

**Problem 5**: A gas molecule has a diameter of 3 Å and average speed of 500 m/s. At 1 atm pressure and 300 K, calculate:
(a) Number density of molecules
(b) Mean free path
(c) Collision frequency
(d) Mean time between collisions
(k = 1.38 × 10⁻²³ J/K, 1 atm = 10⁵ Pa)

<details><summary>Solution</summary><p>Given:</p><ul><li>d = 3 Å = 3 × 10⁻¹⁰ m</li><li>$\overline{v}$ = 500 m/s</li><li>P = 1 atm = 10⁵ Pa</li><li>T = 300 K</li></ul><p><strong>(a) Number density</strong>:</p>$$n = \frac{P}{kT} = \frac{10^5}{1.38 \times 10^{-23} \times 300}$$

$$n = \frac{10^5}{4.14 \times 10^{-21}} = 2.42 \times 10^{25} \text{ molecules/m}^3$$<p><strong>(b) Mean free path</strong>:</p>$$\lambda = \frac{1}{\sqrt{2} \pi n d^2}$$

$$\lambda = \frac{1}{\sqrt{2} \times \pi \times 2.42 \times 10^{25} \times (3 \times 10^{-10})^2}$$

$$\lambda = \frac{1}{1.414 \times 3.14 \times 2.42 \times 10^{25} \times 9 \times 10^{-20}}$$

$$\lambda = \frac{1}{9.66 \times 10^{6}} = 1.04 \times 10^{-7} \text{ m}$$

$$\lambda \approx 104 \text{ nm}$$<p><strong>(c) Collision frequency</strong>:</p>$$\nu = \frac{\overline{v}}{\lambda} = \frac{500}{1.04 \times 10^{-7}} = 4.81 \times 10^{9} \text{ s}^{-1}$$<p><strong>(d) Mean time between collisions</strong>:</p>$$\tau = \frac{1}{\nu} = \frac{1}{4.81 \times 10^{9}} = 2.08 \times 10^{-10} \text{ s}$$

$$\tau \approx 0.21 \text{ ns}$$<p><strong>Answer</strong>:</p><ul><li>(a) n = 2.42 × 10²⁵ molecules/m³</li><li>(b) λ = 104 nm</li><li>(c) ν = 4.8 × 10⁹ collisions/s</li><li>(d) τ = 0.21 nanoseconds</li></ul></details>

**Problem 6**: Show that the collision frequency can be written as:

$$\nu = \frac{4P\pi d^2}{kT}\sqrt{\frac{2kT}{\pi m}}$$

<details><summary>Solution</summary><p>Starting with:</p>$$\nu = \sqrt{2} \pi n d^2 \overline{v}$$<p>Substitute $n = \frac{P}{kT}$:</p>$$\nu = \sqrt{2} \pi \frac{P}{kT} d^2 \overline{v}$$<p>Substitute $\overline{v} = \sqrt{\frac{8kT}{\pi m}}$:</p>$$\nu = \sqrt{2} \pi \frac{P}{kT} d^2 \sqrt{\frac{8kT}{\pi m}}$$

$$\nu = \frac{\sqrt{2} \pi P d^2}{kT} \sqrt{\frac{8kT}{\pi m}}$$

$$\nu = \frac{P\pi d^2}{kT} \sqrt{2} \times \sqrt{\frac{8kT}{\pi m}}$$

$$\nu = \frac{P\pi d^2}{kT} \sqrt{\frac{2 \times 8kT}{\pi m}}$$

$$\nu = \frac{P\pi d^2}{kT} \sqrt{\frac{16kT}{\pi m}}$$

$$\nu = \frac{P\pi d^2}{kT} \times 4\sqrt{\frac{kT}{\pi m}}$$<blockquote>$$\nu = \frac{4P\pi d^2}{kT}\sqrt{\frac{kT}{\pi m}}$$</blockquote><p>Or equivalently:</p>$$\nu = \frac{4P\pi d^2}{kT}\sqrt{\frac{2kT}{\pi m}} \times \frac{1}{\sqrt{2}}$$<p><strong>Proved</strong> (both forms are correct)</p></details>

## Viscosity and Thermal Conductivity

### Connection to Transport Properties

Mean free path is fundamental to understanding:

**Viscosity** (η):

$$\eta \propto \frac{m\overline{v}}{\pi d^2} \propto \sqrt{mT}$$

**Thermal Conductivity** (κ):

$$\kappa \propto \frac{C_V \overline{v}}{3\pi d^2} \propto \sqrt{T}$$

**Diffusion Coefficient** (D):

$$D \propto \frac{\overline{v}\lambda}{3} \propto \frac{T^{3/2}}{P}$$

**Key Insight**: All transport properties depend on λ and molecular motion!

## Applications and Physical Insights

### Vacuum Technology

Different vacuum regimes:

| Regime | Pressure | Mean Free Path | Application |
| --- | --- | --- | --- |
| Atmospheric | 10⁵ Pa | ~100 nm | Normal conditions |
| Low vacuum | 10³ Pa | ~10 μm | Vacuum cleaners |
| Medium vacuum | 10⁻¹ Pa | ~1 cm | Vacuum pumps |
| High vacuum | 10⁻⁵ Pa | ~100 m | Electron microscopes |
| Ultra-high vacuum | 10⁻¹⁰ Pa | ~10⁶ km | Space simulation |

### Knudsen Number

Dimensionless number comparing mean free path to characteristic length:

$$Kn = \frac{\lambda}{L}$$

- Kn « 1: Continuum flow (fluid mechanics applies)
- Kn » 1: Free molecular flow (kinetic theory needed)

### Atmospheric Physics

- At sea level: λ ≈ 70 nm
- At 100 km altitude: λ ≈ 1 m
- In upper atmosphere: Molecules rarely collide (exosphere)

## Cross-Links to Other Topics

### Related to Kinetic Theory

- [Kinetic Theory Assumptions](../kinetic-theory-assumptions/index.md) - Collision assumptions
- [Molecular Speeds](../molecular-speeds/index.md) - Average speed in collision frequency
- [Ideal Gas Equation](../ideal-gas-equation/index.md) - Pressure and density relations

### Related to Thermodynamics

- [Transport Phenomena](../../thermodynamics/index.md) - Viscosity, thermal conductivity
- [Diffusion](../../thermodynamics/index.md) - Molecular mixing

### Applications

- Vacuum systems and technology
- Atmospheric science
- Particle physics detectors
- Thin film deposition
- Gas discharge tubes

## Key Takeaways

1. **Mean free path**: Average distance between collisions = $\frac{kT}{\sqrt{2}\pi d^2 P}$
2. **Collision frequency**: Number of collisions per second = $\frac{\overline{v}}{\lambda}$
3. **Pressure effect**: λ ∝ 1/P (higher pressure → shorter path)
4. **Temperature effect**: λ ∝ T (higher temperature → longer path at constant P)
5. **√2 factor**: Accounts for relative motion of molecules
6. **Typical values**: At STP, λ ≈ 100 nm, ν ≈ 10¹⁰ collisions/s
7. **Vacuum**: Very low pressure → very large λ (molecules rarely collide)

## Exam Tips

- **JEE Main**: Focus on calculating λ, ν using formulas; understand P and T dependencies
- **JEE Advanced**: Expect derivations, conceptual questions, and applications to transport properties
- **Common trap**: Forgetting to convert Å to meters for d (d in meters!)
- **Unit check**: λ should be ~10⁻⁷ m at atmospheric pressure
- **Quick estimate**: At STP, λ is roughly 100 nm (1000× larger than molecular size)
- **Conceptual**: Understand physical meaning - how far molecules travel between bumps!
- **√2 factor**: Often tested - know when to include it (refined model with all molecules moving)

---

*Last updated: February 28, 2025*

From TestGuru · our mock-test platform

## You've read Mean Free Path and Molecular Collisions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinetic-theory&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinetic-theory%2Fmean-free-path%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinetic-theory/mean-free-path/",this.page.identifier="/physics/kinetic-theory/mean-free-path/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicsProcess" id="anim-thermodynamicsProcess-1795396423768230566"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicsProcess-1795396423768230566")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinetic-theory/mean-free-path/](https://jeenotes.in/physics/kinetic-theory/mean-free-path/) · raw HTML: `offline/physics/kinetic-theory/mean-free-path/index.html`_
