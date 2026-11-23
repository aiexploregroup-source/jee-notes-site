---
title: "Maxwell's Displacement Current"
source: "https://jeenotes.in/physics/electromagnetic-waves/displacement-current/"
description: "Understand displacement current and Maxwell's modification to Ampere's law for JEE"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 5"
html: "../../../../offline/physics/electromagnetic-waves/displacement-current/index.html"
extracted: "2026-11-23"
---

> Understand displacement current and Maxwell's modification to Ampere's law for JEE

# Maxwell’s Displacement Current

## Real-Life Hook

How does your smartphone charge wirelessly? The secret lies in Maxwell’s displacement current! When you place your phone on a charging pad, changing electric fields in the gap between the coils create displacement currents, which in turn generate magnetic fields - transferring energy without any physical contact. Similarly, this concept explains how radio waves carry information through space. Maxwell’s brilliant insight - that changing electric fields create magnetic fields just like electric currents do - revolutionized physics and made modern wireless technology possible. Without displacement current, electromagnetic waves couldn’t exist, and you wouldn’t have Wi-Fi, GPS, or radio communication!

## The Problem with Ampere’s Law

### Original Ampere’s Circuital Law

For steady currents:

> **Ampere’s Law (Original)**
>
> $$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enclosed}$$

**Problem**: This works perfectly for steady currents, but **fails** for time-varying situations!

### The Capacitor Paradox

Consider a charging capacitor connected to a circuit:

**Setup**:

- Current I flows in wires
- Capacitor plates separated by gap (no conduction current in gap)
- Apply Ampere’s law with different surfaces

**Surface 1** (flat disk between wires):

- Encloses current I
- $\oint \vec{B} \cdot d\vec{l} = \mu_0 I$ ✓

**Surface 2** (bulges through capacitor gap):

- No conduction current passes through (insulator!)
- $\oint \vec{B} \cdot d\vec{l} = 0$ ✗

**Same loop, different answers!** This is **inconsistent**!

### The Root Cause

The issue: During charging, electric field between plates **changes with time**:

$$\frac{d\vec{E}}{dt} \neq 0$$

This changing electric field should contribute to the “effective current”!

## Maxwell’s Solution: Displacement Current

### The Key Insight

Maxwell realized: A changing electric field is **equivalent** to a current in producing magnetic fields!

> **Displacement Current Density**
>
> $$\vec{J}_d = \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$
>
> Where:
>
> - $\vec{J}_d$ = displacement current density (A/m²)

> - $\epsilon_0$ = permittivity of free space = 8.85 × 10⁻¹² F/m

> - $\frac{\partial \vec{E}}{\partial t}$ = rate of change of electric field

### Displacement Current

> **Displacement Current**
>
> $$I_d = \epsilon_0 \frac{d\Phi_E}{dt}$$
>
> Where $\Phi_E = \int \vec{E} \cdot d\vec{A}$ = electric flux

**For uniform field**:

$$I_d = \epsilon_0 A \frac{dE}{dt}$$

where A = area of the surface

### Modified Ampere-Maxwell Law

> **Ampere-Maxwell Law**
>
> $$\oint \vec{B} \cdot d\vec{l} = \mu_0(I_c + I_d) = \mu_0 I_c + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}$$
>
> Where:
>
> - $I_c$ = conduction current

> - $I_d$ = displacement current

**In differential form**:

$$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t}$$

### Interactive Demo: Visualize Displacement Current

See how changing electric fields create displacement currents in capacitors and electromagnetic waves.

## Displacement Current in a Charging Capacitor

### Parallel Plate Capacitor

Consider a capacitor with:

- Plate area = A
- Separation = d
- Charging current = $I_c$
- Charge at time t = q(t)

**Electric field between plates**:

$$E = \frac{\sigma}{\epsilon_0} = \frac{q}{\epsilon_0 A}$$

**Rate of change of electric field**:

$$\frac{dE}{dt} = \frac{1}{\epsilon_0 A} \frac{dq}{dt} = \frac{I_c}{\epsilon_0 A}$$

**Displacement current**:

$$I_d = \epsilon_0 A \frac{dE}{dt} = \epsilon_0 A \times \frac{I_c}{\epsilon_0 A} = I_c$$

> **Key Result**: In a charging capacitor, **displacement current equals conduction current**!
>
> $$I_d = I_c$$

This resolves the paradox - surface through the gap “sees” displacement current $I_d = I_c$!

## Physical Interpretation

### What is Displacement Current?

**Important**: Displacement current is **NOT** a flow of charges!

**What it is**:

- An effective current due to changing electric field
- Produces the same magnetic effect as real current
- Exists in vacuum or insulators (where no charges flow)

**Analogy**: Just as moving charges (current) create magnetic fields, changing electric fields also create magnetic fields.

### Comparison Table

| Property | Conduction Current ($I_c$) | Displacement Current ($I_d$) |
| --- | --- | --- |
| **Cause** | Flow of charges | Changing electric field |
| **Medium** | Conductors | Vacuum, insulators, conductors |
| **Formula** | $I_c = \frac{dq}{dt}$ | $I_d = \epsilon_0 \frac{d\Phi_E}{dt}$ |
| **Magnetic effect** | Creates $\vec{B}$ | Creates $\vec{B}$ (same as $I_c$) |
| **Joule heating** | Yes (I²R loss) | No heating |
| **Real charge flow** | Yes | No |

## Maxwell’s Equations (Complete Set)

With displacement current, Maxwell completed the set of equations governing electromagnetism:

> **Maxwell’s Equations (Integral Form)**
>
> 1. **Gauss’s Law**: $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}$

> 2. **Gauss’s Law for Magnetism**: $\oint \vec{B} \cdot d\vec{A} = 0$

> 3. **Faraday’s Law**: $\oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt}$

> 4. **Ampere-Maxwell Law**: $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_c + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}$

**Key Symmetry**:

- Changing magnetic field → Electric field (Faraday)
- Changing electric field → Magnetic field (Maxwell)

This symmetry leads to electromagnetic waves!

## Memory Tricks

### “CHANGE Creates Current” for Displacement Current

- **CH**anging electric field
- **A**cts as
- **N**on-material
- **G**enerator of
- **E**ffective current

Think: Even though nothing flows, changing E-field acts like a current!

### “I_d = ε₀ dΦ/dt” Mnemonic

**“Epsilon Delta Phi Dee-Tee”**

- **E**psilon (ε₀)
- **D**elta (d/dt)
- **Phi** (Φ_E)
- Equals **Dee** (I_d)

### Capacitor Rule: “Conduction = Displacement”

In a charging/discharging capacitor:

$$I_d = I_c$$

- **C**onduction in wires
- **D**isplacement in gap
- Both are **equal**!

### Maxwell’s Modification: “Plus ε₀ dE/dt”

Original Ampere’s Law + Maxwell’s addition

$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I \quad \rightarrow \quad \oint \vec{B} \cdot d\vec{l} = \mu_0 I + \mu_0\epsilon_0 \frac{d\Phi_E}{dt}$$

## Common Unit Conversion Mistakes

### Permittivity of Free Space (ε₀)

- **ε₀ = 8.85 × 10⁻¹² F/m** (farads per meter)
- Also written as: 8.85 × 10⁻¹² C²/(N·m²)
- In calculations: Often approximated as $\frac{1}{9 \times 10^9 \times 4\pi}$ F/m

### Permeability of Free Space (μ₀)

- **μ₀ = 4π × 10⁻⁷ T·m/A** (tesla·meter/ampere)
- Also: 4π × 10⁻⁷ H/m (henry per meter)

### Speed of Light Relation

$$c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}$$

- c = 3 × 10⁸ m/s

### Electric Field Units

- E in V/m or N/C
- dE/dt in (V/m)/s = V/(m·s)

### Displacement Current Units

- $I_d$ in Amperes (A)
- $J_d$ in A/m² (current density)

**Common Error**: Forgetting ε₀ has very small magnitude (10⁻¹²), so displacement currents in typical circuits are tiny!

## Important Formulas Summary

### Displacement Current

> $$I_d = \epsilon_0 \frac{d\Phi_E}{dt} = \epsilon_0 A \frac{dE}{dt}$$

### Displacement Current Density

> $$J_d = \epsilon_0 \frac{dE}{dt}$$

### In Charging Capacitor

> $$I_d = I_c$$
>
> (displacement current equals conduction current)

### Ampere-Maxwell Law

> $$\oint \vec{B} \cdot d\vec{l} = \mu_0(I_c + I_d)$$

### Electromagnetic Wave Relation

> $$c = \frac{1}{\sqrt{\mu_0\epsilon_0}} = 3 \times 10^8 \text{ m/s}$$

## 3-Level Practice Problems

### Level 1: JEE Main Basics

**Problem 1**: A parallel plate capacitor with circular plates of radius 5 cm is being charged. The electric field between plates increases at a rate of 10¹² V/(m·s). Calculate the displacement current. (ε₀ = 8.85 × 10⁻¹² F/m)

<details><summary>Solution</summary><p>Given:</p><ul><li>R = 5 cm = 0.05 m</li><li>dE/dt = 10¹² V/(m·s)</li></ul><p>Area of plates:</p>$$A = \pi R^2 = \pi \times (0.05)^2 = 7.85 \times 10^{-3} \text{ m}^2$$<p>Displacement current:</p>$$I_d = \epsilon_0 A \frac{dE}{dt}$$

$$I_d = 8.85 \times 10^{-12} \times 7.85 \times 10^{-3} \times 10^{12}$$

$$I_d = 8.85 \times 7.85 = 69.5 \text{ A}$$<p><strong>Answer</strong>: $I_d \approx 70$ A</p></details>

**Problem 2**: A capacitor of capacitance 10 μF is connected to a 200 V battery. If the capacitor charges completely in 10⁻³ s, find the average displacement current during charging.

<details><summary>Solution</summary><p>Given:</p><ul><li>C = 10 μF = 10 × 10⁻⁶ F</li><li>V = 200 V</li><li>t = 10⁻³ s</li></ul><p>Charge on capacitor:</p>$$Q = CV = 10 \times 10^{-6} \times 200 = 2 \times 10^{-3} \text{ C}$$<p>Average charging current (= average displacement current):</p>$$I_d = I_c = \frac{Q}{t} = \frac{2 \times 10^{-3}}{10^{-3}} = 2 \text{ A}$$<p><strong>Answer</strong>: $I_d = 2$ A</p><p><strong>Note</strong>: In a capacitor, $I_d = I_c$ always!</p></details>

### Level 2: JEE Main Advanced

**Problem 3**: A parallel plate capacitor has circular plates each of radius 2 cm. The plates are being charged such that the electric field in the gap changes at a constant rate of 5 × 10¹¹ V/(m·s). Find:
(a) The displacement current
(b) The magnetic field at a distance of 1 cm from the axis between the plates
(ε₀ = 8.85 × 10⁻¹² F/m, μ₀ = 4π × 10⁻⁷ T·m/A)

<details><summary>Solution</summary><p>Given:</p><ul><li>R = 2 cm = 0.02 m</li><li>r = 1 cm = 0.01 m (point where B is needed)</li><li>dE/dt = 5 × 10¹¹ V/(m·s)</li></ul><p><strong>(a) Displacement current</strong>:</p><p>Total area: $A = \pi R^2 = \pi \times (0.02)^2 = 1.257 \times 10^{-3}$ m²</p>$$I_d = \epsilon_0 A \frac{dE}{dt}$$

$$I_d = 8.85 \times 10^{-12} \times 1.257 \times 10^{-3} \times 5 \times 10^{11}$$

$$I_d = 5.56 \text{ A}$$<p><strong>(b) Magnetic field at r = 1 cm</strong>:</p><p>Since r &lt; R (inside the capacitor region), we use Ampere-Maxwell law on a circular path of radius r:</p><p>Displacement current through circle of radius r:</p>$$I_{d,enclosed} = \epsilon_0 (\pi r^2) \frac{dE}{dt}$$

$$I_{d,enclosed} = 8.85 \times 10^{-12} \times \pi \times (0.01)^2 \times 5 \times 10^{11}$$

$$I_{d,enclosed} = 1.39 \text{ A}$$<p>Applying Ampere-Maxwell law:</p>$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{d,enclosed}$$

$$B \times 2\pi r = \mu_0 I_{d,enclosed}$$

$$B = \frac{\mu_0 I_{d,enclosed}}{2\pi r} = \frac{4\pi \times 10^{-7} \times 1.39}{2\pi \times 0.01}$$

$$B = \frac{2 \times 10^{-7} \times 1.39}{0.01} = 2.78 \times 10^{-5} \text{ T}$$<p><strong>Answer</strong>:</p><ul><li>(a) $I_d = 5.56$ A</li><li>(b) $B = 2.78 \times 10^{-5}$ T or 27.8 μT</li></ul></details>

**Problem 4**: Show that for a parallel plate capacitor being charged, the displacement current in the gap equals the conduction current in the connecting wires.

<details><summary>Solution</summary><p><strong>Conduction current in wire</strong>:</p>$$I_c = \frac{dq}{dt}$$<p><strong>Electric field between capacitor plates</strong>:</p>$$E = \frac{\sigma}{\epsilon_0} = \frac{q}{\epsilon_0 A}$$<p>where A = area of plates</p><p><strong>Rate of change of electric field</strong>:</p>$$\frac{dE}{dt} = \frac{1}{\epsilon_0 A} \frac{dq}{dt}$$<p><strong>Displacement current in gap</strong>:</p>$$I_d = \epsilon_0 A \frac{dE}{dt}$$<p>Substituting:</p>$$I_d = \epsilon_0 A \times \frac{1}{\epsilon_0 A} \frac{dq}{dt} = \frac{dq}{dt} = I_c$$<blockquote>$$\boxed{I_d = I_c}$$</blockquote><p><strong>Proved</strong>: Displacement current in gap equals conduction current in wires!</p><p><strong>Physical Meaning</strong>: The “circuit” is complete - current is continuous throughout!</p></details>

### Level 3: JEE Advanced

**Problem 5**: A parallel plate capacitor with square plates of side ‘a’ is being charged. At an instant, the conduction current is I₀. Find the magnitude of displacement current through a circular area of radius r (where r < a/2) parallel to the plates and situated symmetrically between them.

<details><summary>Solution</summary><p>Since $I_d = I_c$ for the entire capacitor:</p><p>Total displacement current through entire capacitor = $I_0$</p><p>Area of square plates: $A_{total} = a^2$</p><p>Area of circular region: $A_{circle} = \pi r^2$</p><p>Since displacement current density is uniform:</p>$$J_d = \frac{I_0}{a^2}$$<p>Displacement current through circular area:</p>$$I_{d,circle} = J_d \times A_{circle} = \frac{I_0}{a^2} \times \pi r^2$$<blockquote>$$I_{d,circle} = \frac{\pi r^2 I_0}{a^2}$$</blockquote><p><strong>Answer</strong>: $I_d = \frac{\pi r^2 I_0}{a^2}$</p><p><strong>Note</strong>: This is proportional to the fraction of area: $\frac{\pi r^2}{a^2}$</p></details>

**Problem 6**: Derive the expression for the magnetic field at a distance r from the axis (where r < R) inside a charging capacitor with circular plates of radius R. The electric field increases uniformly at rate dE/dt.

<details><summary>Solution</summary><p><strong>Setup</strong>: Use Ampere-Maxwell law on a circular loop of radius r (r &lt; R) centered on the axis.</p>$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{d,enclosed}$$<p><strong>Left side</strong>: By symmetry, B is constant on the circle and tangent to it:</p>$$\oint \vec{B} \cdot d\vec{l} = B \times 2\pi r$$<p><strong>Right side</strong>: Displacement current through area πr²:</p>$$I_{d,enclosed} = \epsilon_0 (\pi r^2) \frac{dE}{dt}$$<p><strong>Equating</strong>:</p>$$B \times 2\pi r = \mu_0 \epsilon_0 \pi r^2 \frac{dE}{dt}$$

$$B = \frac{\mu_0 \epsilon_0 r}{2} \frac{dE}{dt}$$<blockquote>$$\boxed{B = \frac{\mu_0 \epsilon_0 r}{2} \frac{dE}{dt}}$$</blockquote><p><strong>Key observations</strong>:</p><ol><li>B ∝ r (inside the capacitor)</li><li>B = 0 at center (r = 0)</li><li>B increases linearly with distance from axis</li></ol><p><strong>Vector form</strong>: $\vec{B}$ forms concentric circles around the axis, direction given by right-hand rule with displacement current.</p><p><strong>Proved</strong></p></details>

## Significance of Displacement Current

### 1. Completes Maxwell’s Equations

Makes electromagnetic theory consistent and symmetric.

### 2. Predicts Electromagnetic Waves

Changing E-field creates B-field, which creates E-field, and so on → propagating EM waves!

### 3. Continuity of Current

Ensures current is continuous even through capacitors and gaps.

### 4. Practical Applications

- Capacitive circuits in AC
- Wireless power transfer
- Radio wave generation
- Antenna theory

## Electromagnetic Wave Generation

From Maxwell’s equations with displacement current:

**Wave equation in vacuum**:

$$\frac{\partial^2 \vec{E}}{\partial t^2} = c^2 \nabla^2 \vec{E}$$

where $c = \frac{1}{\sqrt{\mu_0\epsilon_0}}$ = speed of light

**This shows**: Electromagnetic waves can propagate through vacuum!

## Cross-Links to Other Topics

### Related to Electromagnetism

- [Ampere’s Law](../../magnetism/amperes-law/index.md) - Original formulation
- [Faraday’s Law](../../electromagnetic-induction/faradays-law/index.md) - Changing magnetic field
- [Capacitors](../../electrostatics/capacitors/index.md) - Charging and discharging

### Related to EM Waves

- [EM Wave Properties](../em-wave-properties/index.md) - Wave propagation
- [EM Spectrum](../em-spectrum/index.md) - Different wavelengths

### Related to Optics

- [Light as EM Wave](../../optics/index.md) - Electromagnetic nature
- [Polarization](../../optics/polarization/index.md) - Transverse wave property

## Key Takeaways

1. **Displacement current** is due to changing electric field, not charge flow
2. **$I_d = \epsilon_0 \frac{d\Phi_E}{dt}$** - fundamental formula
3. In capacitors: **$I_d = I_c$** (displacement equals conduction)
4. Maxwell’s addition makes Ampere’s law work for time-varying fields
5. **No displacement current** ⇒ No electromagnetic waves!
6. Displacement current produces magnetic field just like conduction current
7. Critical for EM wave theory and modern technology

## Exam Tips

- **JEE Main**: Focus on calculating $I_d$ in capacitors; know $I_d = I_c$ relation
- **JEE Advanced**: Expect derivations of B-field using Ampere-Maxwell law, conceptual questions
- **Common trap**: Thinking displacement current involves charge flow (it doesn’t!)
- **Formula recall**: $I_d = \epsilon_0 A \frac{dE}{dt}$ for uniform field
- **Symmetry**: Changing E → B (Maxwell) like changing B → E (Faraday)
- **Conceptual**: Understand WHY original Ampere’s law failed (capacitor paradox)
- **Units**: Check that $I_d$ comes out in Amperes

---

*Last updated: March 5, 2025*

From TestGuru · our mock-test platform

## You've read Maxwell's Displacement Current.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-waves%2Fdisplacement-current%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-waves/displacement-current/",this.page.identifier="/physics/electromagnetic-waves/displacement-current/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="waveFunction" id="anim-waveFunction-1795396423281801086"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-waveFunction-1795396423281801086")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-waves/displacement-current/](https://jeenotes.in/physics/electromagnetic-waves/displacement-current/) · raw HTML: `offline/physics/electromagnetic-waves/displacement-current/index.html`_
