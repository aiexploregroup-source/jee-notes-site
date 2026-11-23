---
title: "Electromagnetic Radiation"
source: "https://jeenotes.in/chemistry/atomic-structure/electromagnetic-radiation/"
description: "Master electromagnetic radiation for JEE: wave and particle nature, c = νλ, Planck's equation E = hν, the EM spectrum order with mnemonics, and photon calculations with solved examples."
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Chemistry"
position: "/ Topic 1 of 10"
html: "../../../../offline/chemistry/atomic-structure/electromagnetic-radiation/index.html"
extracted: "2026-11-23"
---

> Master electromagnetic radiation for JEE: wave and particle nature, c = νλ, Planck's equation E = hν, the EM spectrum order with mnemonics, and photon calculations with solved examples.

## The Hook: One Phenomenon, a Thousand Faces

> **★ Key point · Connect: Real Life → Chemistry**
>
> Think about a single evening: you heat popcorn in a microwave, change channels with a TV remote (infrared), watch *Mission: Impossible* where night-vision goggles spot agents in total darkness (infrared again), and scroll on a phone connected by radio waves. Meanwhile, in *Oppenheimer* (2023), the scientists at Trinity worry about invisible gamma rays that can tear molecules apart.
>
> Here is the puzzle: radio waves, microwaves, visible light, and gamma rays are all the **same phenomenon** — electromagnetic radiation — and all travel at exactly the same speed. So why is one harmless enough to broadcast cricket commentary while another is lethal? By the end of this page, one small equation, $E = h\nu$, will answer that completely.

> **★ Key point · Why This Matters for JEE**
>
> Atomic Structure contributes **2-3 questions in JEE Main** every year, and electromagnetic radiation is the entry point for the entire chapter. The formulas here ($c = \nu\lambda$, $E = h\nu$, $p = h/\lambda$) reappear in the [Photoelectric Effect](../photoelectric-effect/index.md), the [Hydrogen Spectrum](../hydrogen-spectrum/index.md), and [de Broglie wavelength](../../../physics/dual-nature/de-broglie/index.md) problems. Master this page and three other topics become easy.
>
> **Helpful prerequisite:** basic wave motion from [Oscillations and Waves](../../../physics/oscillations-waves/index.md).

---

## Introduction

Light and other forms of electromagnetic radiation exhibit a fascinating **dual nature** — behaving as both waves and particles. Understanding this duality is fundamental to atomic structure: classical wave theory explains interference and diffraction perfectly, but it completely fails to explain black-body radiation and the photoelectric effect. Resolving that failure launched quantum theory.

---

## Wave Nature of Radiation

Electromagnetic radiation can be described as **oscillating electric and magnetic fields traveling through space**. James Clerk Maxwell showed that an accelerating charged particle radiates energy as these coupled fields.

Key characteristics of electromagnetic waves:

- The electric field, the magnetic field, and the direction of propagation are all **mutually perpendicular** — EM waves are **transverse** waves.
- They **require no medium**: unlike sound, light happily crosses the vacuum of space (which is why we can see the Sun).
- In vacuum, **every** EM wave travels at the same speed, $c = 3 \times 10^8$ m/s, regardless of wavelength.
- The **intensity** (brightness) of radiation relates to the amplitude of the wave — not its frequency. Keep this distinction ready; it becomes critical in the particle picture below.

### Key Wave Properties

| Property | Symbol | Unit | Description |
| --- | --- | --- | --- |
| Wavelength | $\lambda$ | meters (m) | Distance between two consecutive crests |
| Frequency | $\nu$ | Hertz (Hz = s⁻¹) | Number of waves passing a point per second |
| Wave number | $\bar{\nu}$ | m⁻¹ | Number of wavelengths per unit length |
| Velocity | $c$ | m/s | Speed of light in vacuum |
| Amplitude | $A$ | — | Height of the wave; determines intensity |

### Fundamental Wave Equation

All electromagnetic radiation travels at the speed of light in vacuum:

$$\boxed{c = \nu \lambda = 3 \times 10^8 \text{ m/s}}$$

This means:

- Higher frequency → shorter wavelength
- Lower frequency → longer wavelength

**In simple terms:** wavelength and frequency are two ends of a seesaw with $c$ as the pivot. If one goes up, the other must come down so that their product stays fixed at $3 \times 10^8$ m/s.

### Wave Number

Wave number is the reciprocal of wavelength:

$$\bar{\nu} = \frac{1}{\lambda} = \frac{\nu}{c}$$

Spectroscopists love wave number because it is **directly proportional to energy**. Watch the units: chemistry data tables usually quote it in **cm⁻¹**, while the SI unit is m⁻¹ (1 cm⁻¹ = 100 m⁻¹). The Rydberg constant you will meet in the [Hydrogen Spectrum](../hydrogen-spectrum/index.md) is itself a wave number: $R_H = 1.097 \times 10^7$ m⁻¹.

> **★ Key point · Unit Conversions**
>
> - 1 nm = 10⁻⁹ m

> - 1 Å = 10⁻¹⁰ m

> - 1 pm = 10⁻¹² m
>
> For visible light: 400 nm (violet) to 700 nm (red)

---

## Electromagnetic Spectrum

The electromagnetic spectrum arranges radiation by wavelength/frequency:

```mermaid
graph LR
    A[Gamma rays] --> B[X-rays]
    B --> C[UV]
    C --> D[Visible]
    D --> E[Infrared]
    E --> F[Microwaves]
    F --> G[Radio waves]
    
    style A fill:#9b59b6
    style D fill:#e74c3c
```

| Region | Wavelength Range | Frequency Range | Typical Use |
| --- | --- | --- | --- |
| Gamma rays | < 10⁻¹¹ m | > 3×10¹⁹ Hz | Nuclear reactions |
| X-rays | 10⁻¹¹ to 10⁻⁸ m | 3×10¹⁶ to 3×10¹⁹ Hz | Medical imaging |
| UV | 10⁻⁸ to 4×10⁻⁷ m | 7.5×10¹⁴ to 3×10¹⁶ Hz | Sterilization |
| Visible | 4×10⁻⁷ to 7×10⁻⁷ m | 4.3×10¹⁴ to 7.5×10¹⁴ Hz | Vision |
| Infrared | 7×10⁻⁷ to 10⁻³ m | 3×10¹¹ to 4.3×10¹⁴ Hz | Heat sensing |
| Microwaves | 10⁻³ to 10⁻¹ m | 3×10⁹ to 3×10¹¹ Hz | Communication |
| Radio | > 10⁻¹ m | < 3×10⁹ Hz | Broadcasting |

### The Orderings JEE Actually Asks

JEE questions on the spectrum are almost always “arrange in increasing/decreasing order” questions. Learn both directions:

**Increasing wavelength (= decreasing frequency = decreasing energy):**

$$\gamma < \text{X-rays} < \text{UV} < \text{Visible} < \text{IR} < \text{Microwave} < \text{Radio}$$

**Increasing frequency / energy:** exactly the reverse.

Within visible light (increasing wavelength): **VIBGYOR** — Violet, Indigo, Blue, Green, Yellow, Orange, Red. Violet has the shortest wavelength (~400 nm, highest energy); red has the longest (~700 nm, lowest energy).

---

## Memory Tricks & Patterns

### Mnemonic for the Spectrum Order

**Memory Trick:** From gamma to radio (increasing wavelength):

**“Good Xylophones Use Very Interesting Musical Rhythms”**
→ **G**amma, **X**-rays, **U**V, **V**isible, **I**nfrared, **M**icrowave, **R**adio

Read it backwards for increasing frequency and energy.

### Mnemonic for Visible Light

**VIBGYOR** gives increasing wavelength; remember “**V**iolet is **v**iolent” — the violet end carries the most energetic visible photons.

### The 1240 Shortcut (Huge Time-Saver)

For photon energy in electron volts with wavelength in nanometers:

$$\boxed{E \text{ (eV)} = \frac{1240}{\lambda \text{ (nm)}}}$$

This comes from $hc = 1240$ eV·nm. A 620 nm photon carries $1240/620 = 2$ eV — done in three seconds, no powers of ten. This one shortcut saves a minute on nearly every photon question in JEE Main.

### Pattern Recognition

- Energy follows frequency: $E \propto \nu$ and $E \propto \dfrac{1}{\lambda}$.
- Doubling the wavelength halves the photon energy — ratios of energies are just inverse ratios of wavelengths.

---

## Particle Nature of Radiation

### Planck’s Quantum Theory

Classical wave theory predicted that a hot object should emit infinite energy at short wavelengths (the “ultraviolet catastrophe”) — clearly wrong. Max Planck (1900) fixed this with a radical idea: energy is **quantized** — emitted or absorbed only in discrete packets called **quanta** (for light, **photons**). A body can exchange energy only in whole-number multiples:

$$E_{total} = nh\nu \quad (n = 1, 2, 3, \ldots)$$

Einstein (1905) took the idea further, treating light itself as a stream of photons — which earned him the Nobel Prize for explaining the [photoelectric effect](../photoelectric-effect/index.md).

### Energy of a Photon

$$\boxed{E = h\nu = \frac{hc}{\lambda} = hc\bar{\nu}}$$

where:

- $E$ = energy of photon (Joules)
- $h$ = Planck’s constant = $6.626 \times 10^{-34}$ J·s
- $\nu$ = frequency (Hz)
- $\lambda$ = wavelength (m)

This single equation answers the hook question: gamma rays and radio waves travel at the same speed, but a gamma photon ($\nu \sim 10^{20}$ Hz) carries roughly **a trillion times** more energy than a radio photon ($\nu \sim 10^8$ Hz). That energy per photon is what breaks chemical bonds and damages DNA.

### Momentum of a Photon

Even though photons are massless, they carry momentum:

$$p = \frac{h}{\lambda} = \frac{E}{c}$$

### Properties of Photons — Quick List

1. Rest mass zero; always travel at speed $c$ in vacuum.
2. Energy $E = h\nu$; momentum $p = h/\lambda$.
3. Electrically neutral — not deflected by electric or magnetic fields.
4. Total energy of a beam = (number of photons) × ($h\nu$). Increasing **intensity** increases the *number* of photons, not the energy of each one.

> **↗ Connection · Quick Check**
>
> A 1 W red laser and a 1 W blue laser deliver the same total energy per second. Which emits **more photons** per second?
>
> **Answer:** The red laser. Each red photon carries less energy ($\lambda$ larger → $E$ smaller), so more photons are needed to add up to the same 1 W.

### Interactive Demo: Visualize Wave-Particle Duality

See how light behaves as both waves and photons with different frequencies.

### Which Experiments Show Which Nature?

| Wave nature explains | Particle nature explains |
| --- | --- |
| Interference | Black-body radiation |
| Diffraction | Photoelectric effect |
| Polarization | Compton effect |
| Reflection, refraction | Line spectra of atoms |

Neither picture alone is complete — this is the **dual nature** of radiation, explored fully in [Dual Nature of Matter](../dual-nature/index.md).

---

## Calculations

### Example 1: Energy from Wavelength

**Problem:** Calculate the energy of a photon of yellow light (λ = 580 nm).

**Solution:**

1. Convert wavelength: $\lambda = 580 \times 10^{-9}$ m
2. Apply formula:
   $$E = \frac{hc}{\lambda} = \frac{6.626 \times 10^{-34} \times 3 \times 10^8}{580 \times 10^{-9}}$$
   $$E = 3.43 \times 10^{-19} \text{ J}$$

To convert to eV: $E = \frac{3.43 \times 10^{-19}}{1.6 \times 10^{-19}} = 2.14$ eV

**Shortcut check:** $E = \dfrac{1240}{580} \approx 2.14$ eV. Same answer, far faster.

### Example 2: Frequency from Energy

**Problem:** A photon has energy 4.0 eV. Find its frequency.

**Solution:**

1. Convert to Joules: $E = 4.0 \times 1.6 \times 10^{-19} = 6.4 \times 10^{-19}$ J
2. Apply formula:
   $$\nu = \frac{E}{h} = \frac{6.4 \times 10^{-19}}{6.626 \times 10^{-34}} = 9.66 \times 10^{14} \text{ Hz}$$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Energy with Intensity**
>
> Don’t confuse energy and intensity!
>
> - **Energy of one photon** depends only on frequency: $E = h\nu$. A dim UV lamp still emits higher-energy photons than a blinding red floodlight.

> - **Intensity** depends on the number of photons arriving per second.
>
> JEE loves this trap in photoelectric effect questions: increasing intensity of light below threshold frequency ejects **zero** electrons, no matter how bright.

> **⚠ Trap #2: Unit Conversion Blunders**
>
> The single biggest source of wrong answers in this chapter:
>
> - $\lambda$ must be in **meters** before using $E = hc/\lambda$ with SI constants. Forgetting the $10^{-9}$ for nm changes your answer by nine orders of magnitude.

> - The shortcut $E = 1240/\lambda$ works **only** with $\lambda$ in nm and $E$ in eV. (With Å, use $E = 12400/\lambda$.)

> - Wave numbers: spectroscopy tables use **cm⁻¹**, but $R_H = 1.097 \times 10^7$ is in **m⁻¹**. Convert before mixing.

> **⚠ Trap #3: Mixing Up ν (nu) and v (velocity)**
>
> The Greek letter $\nu$ (frequency) looks dangerously like $v$ (velocity) in fast handwriting. In $c = \nu\lambda$, the symbol is frequency. Misreading it as velocity leads to nonsense like “speed × wavelength”. Write ν with a distinct curved tail during exams.

> **⚠ Trap #4: Reversed Ordering in Options**
>
> When a question asks for “increasing wavelength,” at least one option will list the correct sequence for increasing **frequency** — the exact reverse. Read the question twice, then anchor yourself: **radio = longest wavelength, gamma = highest energy**. They sit at opposite ends.

---

## Practice Problems

### Level 1: Foundation

> **↗ Connection · Problem 1: Wavelength from Frequency**
>
> Calculate the wavelength of radiation with frequency $5 \times 10^{14}$ Hz.
>
> **Solution:**
>
> $$\lambda = \frac{c}{\nu} = \frac{3 \times 10^8}{5 \times 10^{14}} = 6 \times 10^{-7} \text{ m} = 600 \text{ nm}$$
>
> This lies in the visible region (orange light).

> **↗ Connection · Problem 2: Counting Photons**
>
> How many photons of light with λ = 500 nm are needed to provide 1 J of energy?
>
> **Solution:**

> Energy of one photon:
>
> $$E = \frac{hc}{\lambda} = \frac{6.626 \times 10^{-34} \times 3 \times 10^8}{500 \times 10^{-9}} = 3.98 \times 10^{-19} \text{ J}$$
>
> Number of photons:
>
> $$n = \frac{1}{3.98 \times 10^{-19}} \approx 2.5 \times 10^{18} \text{ photons}$$

### Level 2: JEE Main

> **↗ Connection · Problem 3: Comparing Photon Energies**
>
> Compare the energies of photons of UV (300 nm) and infrared (1000 nm) light.
>
> **Solution:**

> Since $E \propto \dfrac{1}{\lambda}$:
>
> $$\frac{E_{UV}}{E_{IR}} = \frac{\lambda_{IR}}{\lambda_{UV}} = \frac{1000}{300} = \frac{10}{3} \approx 3.33$$
>
> Using the 1240 shortcut: $E_{UV} = 1240/300 = 4.13$ eV and $E_{IR} = 1240/1000 = 1.24$ eV. The UV photon is about 3.3 times more energetic — which is why UV causes sunburn and IR merely feels warm.

> **↗ Connection · Problem 4: Photon Emission Rate**
>
> A 100 W source emits monochromatic light of wavelength 400 nm. How many photons does it emit per second?
>
> **Solution:**

> Energy of one photon:
>
> $$E = \frac{hc}{\lambda} = \frac{6.626 \times 10^{-34} \times 3 \times 10^8}{400 \times 10^{-9}} = 4.97 \times 10^{-19} \text{ J}$$
>
> Photons per second:
>
> $$n = \frac{\text{Power}}{E} = \frac{100}{4.97 \times 10^{-19}} \approx 2 \times 10^{20} \text{ photons/s}$$
>
> This is a directly repeated JEE Main pattern — power divided by single-photon energy.

### Level 3: JEE Advanced

> **↗ Connection · Problem 5: Energy per Mole of Photons**
>
> Radiation has wave number $\bar{\nu} = 2 \times 10^6$ m⁻¹. Calculate the energy of **one mole** of photons of this radiation (in kJ/mol).
>
> **Solution:**

> Step 1 — Energy of one photon using $E = hc\bar{\nu}$:
>
> $$E = 6.626 \times 10^{-34} \times 3 \times 10^8 \times 2 \times 10^6 = 3.98 \times 10^{-19} \text{ J}$$
>
> Step 2 — Multiply by Avogadro’s number:
>
> $$E_{mole} = 3.98 \times 10^{-19} \times 6.022 \times 10^{23} = 2.39 \times 10^5 \text{ J/mol} \approx 239 \text{ kJ/mol}$$
>
> Sanity check: $\bar{\nu} = 2 \times 10^6$ m⁻¹ means $\lambda = 500$ nm (green light), and ~240 kJ/mol is comparable to typical bond energies — this is exactly why visible/UV light can drive photochemical reactions.

> **↗ Connection · Problem 6: Photon Momentum and Radiation Force**
>
> A laser emits light of wavelength 600 nm at a power of 30 mW for 2 s onto a perfectly absorbing surface. Find (a) the number of photons striking the surface, (b) the total momentum delivered, and (c) the average force on the surface.
>
> **Solution:**

> (a) Energy of one photon:
>
> $$E = \frac{hc}{\lambda} = \frac{6.626 \times 10^{-34} \times 3 \times 10^8}{600 \times 10^{-9}} = 3.31 \times 10^{-19} \text{ J}$$
>
> Total energy delivered = $0.030 \times 2 = 0.06$ J, so:
>
> $$n = \frac{0.06}{3.31 \times 10^{-19}} \approx 1.8 \times 10^{17} \text{ photons}$$
>
> (b) For complete absorption, total momentum = total energy / c:
>
> $$p = \frac{0.06}{3 \times 10^8} = 2 \times 10^{-10} \text{ kg}\cdot\text{m/s}$$
>
> (Check: $n \times h/\lambda = 1.8 \times 10^{17} \times 1.10 \times 10^{-27} \approx 2 \times 10^{-10}$ kg·m/s — consistent.)
>
> (c) Average force:
>
> $$F = \frac{p}{t} = \frac{2 \times 10^{-10}}{2} = 1 \times 10^{-10} \text{ N} \quad \left(= \frac{\text{Power}}{c}\right)$$
>
> **Advanced twist to remember:** if the surface were perfectly *reflecting*, the momentum transfer (and force) would double.

> **↗ Connection · Quick Check**
>
> Which has more energy: a radio wave photon or an X-ray photon? Why?
>
> **Answer:** The X-ray photon — its frequency is roughly $10^{8}$ to $10^{10}$ times higher, and $E = h\nu$ means energy scales directly with frequency.

---

## Quick Revision Box

| Quantity | Formula | Key Values / Units |
| --- | --- | --- |
| Speed of light | $c = \nu\lambda$ | $3 \times 10^8$ m/s (all EM waves, vacuum) |
| Wave number | $\bar{\nu} = 1/\lambda = \nu/c$ | m⁻¹ (SI); tables often use cm⁻¹ |
| Photon energy | $E = h\nu = hc/\lambda = hc\bar{\nu}$ | $h = 6.626 \times 10^{-34}$ J·s |
| Energy shortcut | $E$ (eV) $= 1240/\lambda$ (nm) | Only for eV + nm |
| Photon momentum | $p = h/\lambda = E/c$ | kg·m/s |
| Photons per second | $n = \text{Power}/(h\nu)$ | From source power |
| eV ↔ J | 1 eV $= 1.6 \times 10^{-19}$ J | Memorize |
| Spectrum (↑ λ) | γ < X < UV < Visible < IR < Micro < Radio | “Good Xylophones Use Very Interesting Musical Rhythms” |
| Visible range | 400 nm (violet) – 700 nm (red) | VIBGYOR (↑ λ) |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Wave properties**: wavelength, frequency, and speed are locked together by $c = \nu\lambda$ — all EM waves share the same $c$ in vacuum.

> 2. **Particle properties**: energy comes in quanta, $E = h\nu$; photon momentum is $p = h/\lambda$ even though photons are massless.

> 3. **Inverse relationship**: shorter wavelength ⇒ higher frequency ⇒ higher photon energy. Gamma rays are dangerous and radio waves are harmless for exactly this reason.

> 4. **Energy ≠ intensity**: frequency sets the energy of each photon; intensity sets how many photons arrive per second.

> 5. **Dual nature**: interference and diffraction demand waves; black-body radiation and the photoelectric effect demand particles. Light is both.
>
> **“Same speed, different punch — frequency decides how hard a photon hits.”**

---

## Related Topics

### Within Atomic Structure

- [Photoelectric Effect](../photoelectric-effect/index.md) — Where $E = h\nu$ proves the particle nature of light
- [Bohr’s Atomic Model](../bohr-model/index.md) — Photon absorption and emission between energy levels
- [Hydrogen Spectrum](../hydrogen-spectrum/index.md) — Wave numbers in action with the Rydberg formula
- [Dual Nature of Matter](../dual-nature/index.md) — Extending wave-particle duality to electrons

### Cross-Subject: Physics Connections

- [Electromagnetic Spectrum (Physics)](../../../physics/electromagnetic-waves/em-spectrum/index.md) — The same spectrum from the physics syllabus perspective
- [de Broglie Wavelength](../../../physics/dual-nature/de-broglie/index.md) — Matter waves use the same $p = h/\lambda$ relation

---

**Next: [Photoelectric Effect →](../photoelectric-effect/index.md)**

From TestGuru · our mock-test platform

## You've read Electromagnetic Radiation.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=atomic-structure&tg_exam=jee-main&tg_page=%2Fchemistry%2Fatomic-structure%2Felectromagnetic-radiation%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-16

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


### inline-script-17

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/atomic-structure/electromagnetic-radiation/",this.page.identifier="/chemistry/atomic-structure/electromagnetic-radiation/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="waveFunction" id="anim-waveFunction-1795396418765753922"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-waveFunction-1795396418765753922")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/atomic-structure/electromagnetic-radiation/](https://jeenotes.in/chemistry/atomic-structure/electromagnetic-radiation/) · raw HTML: `offline/chemistry/atomic-structure/electromagnetic-radiation/index.html`_
