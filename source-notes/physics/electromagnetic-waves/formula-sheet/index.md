---
title: "Electromagnetic Waves Formula Sheet"
source: "https://jeenotes.in/physics/electromagnetic-waves/formula-sheet/"
description: "All key Electromagnetic Waves formulas: displacement current, Maxwell's equations, E-B relations, energy density, intensity, radiation pressure & the EM spectrum for JEE."
updated: "2026-07-01"
reading_time: "6 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 5"
html: "../../../../offline/physics/electromagnetic-waves/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Electromagnetic Waves formulas: displacement current, Maxwell's equations, E-B relations, energy density, intensity, radiation pressure & the EM spectrum for JEE.

Every must-know formula, relation, and constant for Electromagnetic Waves in one scannable sheet — built for last-minute JEE Main and Advanced revision.

## Displacement Current

The headline formula Maxwell added to fix Ampere’s law for time-varying fields:

$$\boxed{I_d = \varepsilon_0 \frac{d\Phi_E}{dt}}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Displacement current | $I_d = \varepsilon_0 \dfrac{d\Phi_E}{dt}$ | $\Phi_E = \int \vec{E} \cdot d\vec{A}$ = electric flux |
| Displacement current (uniform field) | $I_d = \varepsilon_0 A \dfrac{dE}{dt}$ | $A$ = area of surface |
| Displacement current density | $J_d = \varepsilon_0 \dfrac{dE}{dt}$ | Units A/m² |
| Conduction current | $I_c = \dfrac{dq}{dt}$ | Real charge flow |
| Charging capacitor | $I_d = I_c$ | Always equal in a charging/discharging capacitor |

**In a parallel-plate capacitor**, the field is $E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{q}{\varepsilon_0 A}$, giving $\dfrac{dE}{dt} = \dfrac{I_c}{\varepsilon_0 A}$, which forces $I_d = I_c$.

### Ampere–Maxwell Law

$$\oint \vec{B} \cdot d\vec{l} = \mu_0(I_c + I_d) = \mu_0 I_c + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}$$

Differential form:

$$\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

### Magnetic Field Inside a Charging Capacitor

For circular plates of radius $R$, at distance $r < R$ from the axis:

$$\boxed{B = \frac{\mu_0 \varepsilon_0\, r}{2}\frac{dE}{dt}}$$

- $B \propto r$ (inside the capacitor); $B = 0$ at the centre.

> **★ Key point · High-Yield**
>
> For a square-plate capacitor (side $a$) carrying conduction current $I_0$, the displacement current through a small circular area of radius $r$ between the plates is $I_d = \dfrac{\pi r^2 I_0}{a^2}$ — it scales with the area fraction.

## Maxwell’s Equations (Integral Form)

| # | Law | Equation |
| --- | --- | --- |
| 1 | Gauss’s law | $\oint \vec{E} \cdot d\vec{A} = \dfrac{Q_{enc}}{\varepsilon_0}$ |
| 2 | Gauss’s law (magnetism) | $\oint \vec{B} \cdot d\vec{A} = 0$ |
| 3 | Faraday’s law | $\oint \vec{E} \cdot d\vec{l} = -\dfrac{d\Phi_B}{dt}$ |
| 4 | Ampere–Maxwell law | $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_c + \mu_0 \varepsilon_0 \dfrac{d\Phi_E}{dt}$ |

**Key symmetry:** changing $\vec{B} \rightarrow \vec{E}$ (Faraday); changing $\vec{E} \rightarrow \vec{B}$ (Maxwell). This symmetry is what produces self-propagating EM waves.

## Speed of EM Waves

$$\boxed{c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} = 3 \times 10^8 \text{ m/s}}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Speed in vacuum | $c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}}$ | Universal for all EM waves |
| Speed in medium | $v = \dfrac{1}{\sqrt{\mu\varepsilon}} = \dfrac{c}{n}$ | $n$ = refractive index |
| Refractive index | $n = \sqrt{\mu_r \varepsilon_r}$ | Non-magnetic media: $n \approx \sqrt{\varepsilon_r}$ |
| Wave equation | $\dfrac{\partial^2 \vec{E}}{\partial t^2} = c^2 \nabla^2 \vec{E}$ | Same form for $\vec{B}$ |

**Sample medium speeds:** water ($n \approx 1.33$) → $v \approx 2.25 \times 10^8$ m/s; glass ($n \approx 1.5$) → $v \approx 2 \times 10^8$ m/s.

## Wave Structure: E and B Fields

For a plane wave travelling in the $+x$ direction:

$$\vec{E} = E_0 \sin(kx - \omega t)\,\hat{j}, \qquad \vec{B} = B_0 \sin(kx - \omega t)\,\hat{k}$$

Direction of propagation: $\hat{j} \times \hat{k} = \hat{i}$.

| Relation | Formula | Notes |
| --- | --- | --- |
| Field ratio | $\dfrac{E}{B} = \dfrac{E_0}{B_0} = c$ | $E$ and $B$ in phase |
| Wave number | $k = \dfrac{2\pi}{\lambda}$ |  |
| Angular frequency | $\omega = 2\pi f$ |  |
| Dispersion relation | $\omega = ck$ | $c = \dfrac{\omega}{k}$ |
| Wave relation | $c = f\lambda$ |  |

$$\boxed{\frac{E}{B} = c}$$

> **★ Key point · Transverse & In-Phase**
>
> EM waves are transverse: $\vec{E} \perp \vec{B} \perp$ direction of propagation, and $\vec{E} \times \vec{B}$ points along the propagation direction. $\vec{E}$ and $\vec{B}$ reach their maxima and zeros at the same instant. Polarization is described by the $\vec{E}$-field direction. EM waves need no medium — they travel through vacuum at $c$.

## Energy in EM Waves

### Energy Density

| Quantity | Formula |
| --- | --- |
| Electric energy density | $u_E = \dfrac{1}{2}\varepsilon_0 E^2$ |
| Magnetic energy density | $u_B = \dfrac{B^2}{2\mu_0}$ |
| Total energy density | $u = u_E + u_B = \varepsilon_0 E^2 = \dfrac{B^2}{\mu_0} = \dfrac{EB}{\mu_0 c}$ |

$$\boxed{u_E = u_B \implies u = 2u_E = 2u_B}$$

Energy is split equally between the electric and magnetic fields.

### Intensity and Poynting Vector

| Quantity | Formula | Notes |
| --- | --- | --- |
| Poynting vector | $\vec{S} = \dfrac{1}{\mu_0}(\vec{E} \times \vec{B})$ | Energy flow per unit area per unit time |
| Instantaneous intensity | $I = uc = \varepsilon_0 c E^2 = \dfrac{cB^2}{\mu_0} = \dfrac{EB}{\mu_0}$ | Units W/m² |
| Average intensity | $\langle I \rangle = \dfrac{1}{2}\varepsilon_0 c E_0^2 = \dfrac{c B_0^2}{2\mu_0} = \dfrac{E_0 B_0}{2\mu_0}$ | $E_0, B_0$ = amplitudes |

$$\boxed{\langle I \rangle = \frac{1}{2}\varepsilon_0 c E_0^2 = \frac{E_0 B_0}{2\mu_0}}$$

> **★ Key point · Don't Drop the ½**
>
> For sinusoidal waves the time-average introduces a factor of $\tfrac{1}{2}$: use $\langle I \rangle = \tfrac{1}{2}\varepsilon_0 c E_0^2$ with amplitudes, not the instantaneous $I = \varepsilon_0 c E^2$.

### Inverse Square Law (Point Source)

$$I = \frac{P}{4\pi r^2}$$

Solar constant at Earth ($r = 1.5 \times 10^{11}$ m) ≈ 1350 W/m².

## Momentum and Radiation Pressure

| Quantity | Formula | Notes |
| --- | --- | --- |
| Momentum density | $\vec{p} = \dfrac{\vec{S}}{c^2} = \dfrac{u}{c}\hat{n}$ |  |
| Photon momentum | $p = \dfrac{E}{c} = \dfrac{h}{\lambda}$ | EM waves carry momentum despite zero mass |
| Radiation pressure (absorption) | $P_{abs} = \dfrac{I}{c} = u$ | Surface absorbs the wave |
| Radiation pressure (reflection) | $P_{ref} = \dfrac{2I}{c} = 2u$ | Factor of 2 from momentum reversal |
| Force on surface | $F = P \times A$ | $F = \dfrac{IA}{c}$ (abs.), $\dfrac{2IA}{c}$ (refl.) |

$$\boxed{P_{abs} = \frac{I}{c}, \qquad P_{ref} = \frac{2I}{c}}$$

> **⚠ Trap · Common Trap**
>
> The factor of 2 in $P_{ref} = \dfrac{2I}{c}$ comes from the momentum change $\Delta p = p - (-p) = 2p$ on reflection. Forgetting it is the most common error in radiation-pressure problems.

### Doppler Effect for EM Waves

$$f' = f\sqrt{\frac{c + v_r}{c - v_r}}$$

$v_r$ = radial velocity (positive if approaching). Used for astronomical redshift and radar speed detection.

## Electromagnetic Spectrum

$$\boxed{c = f\lambda}, \qquad f = \frac{c}{\lambda}, \quad \lambda = \frac{c}{f}$$

Order from longest wavelength / lowest energy to shortest / highest:

```mermaid
graph LR
    A[Radio] --> B[Microwave] --> C[Infrared] --> D[Visible] --> E[Ultraviolet] --> F[X-rays] --> G[Gamma]
```

| Type | Wavelength | Frequency | Source |
| --- | --- | --- | --- |
| Radio | > 0.1 m | < 3 GHz | Oscillating circuits, antennas |
| Microwave | 1 mm – 0.1 m | 3 GHz – 300 GHz | Magnetron, klystron, Gunn diode |
| Infrared | 700 nm – 1 mm | 300 GHz – 4×10¹⁴ Hz | Hot objects, molecular vibrations |
| Visible | 400 – 700 nm | 4×10¹⁴ – 7.5×10¹⁴ Hz | Atomic transitions (outer e⁻) |
| Ultraviolet | 10 – 400 nm | 7.5×10¹⁴ – 3×10¹⁶ Hz | Sun, mercury lamps |
| X-rays | 0.01 – 10 nm | 3×10¹⁶ – 3×10¹⁹ Hz | Inner-shell e⁻, X-ray tube |
| Gamma rays | < 0.01 nm | > 3×10¹⁹ Hz | Nuclei, cosmic sources |

**Full span:** frequency 10⁴ Hz (radio) → 10²² Hz (gamma); wavelength 10⁴ m → 10⁻¹⁴ m. All travel at $c$ in vacuum.

> **★ Key point · Order Mnemonics**
>
> Spectrum order: **R**adio → **M**icrowave → **I**nfrared → **V**isible → **U**ltraviolet → **X**-rays → **G**amma (“Real Men In Vegas Usually X-ray Gorillas”). Visible: **VIBGYOR** — Violet (shortest λ, highest f) to Red (longest λ, lowest f). Ionizing: UV (partially), X-rays, and Gamma.

### Visible Spectrum

| Color | Wavelength (nm) |
| --- | --- |
| Violet | 400–450 (highest frequency) |
| Indigo | 450–475 |
| Blue | 475–495 |
| Green | 495–570 |
| Yellow | 570–590 |
| Orange | 590–620 |
| Red | 620–700 (lowest frequency) |

## Photon Energy and Momentum

| Quantity | Formula | Notes |
| --- | --- | --- |
| Photon energy | $E = hf = \dfrac{hc}{\lambda}$ | $h = 6.626 \times 10^{-34}$ J·s |
| Energy in eV | $E(\text{eV}) = \dfrac{1240}{\lambda(\text{nm})}$ | Shortcut for visible/UV |
| Photon momentum | $p = \dfrac{E}{c} = \dfrac{h}{\lambda}$ |  |

$$\boxed{E = hf = \frac{hc}{\lambda} \quad\Rightarrow\quad E(\text{eV}) = \frac{1240}{\lambda(\text{nm})}}$$

**Quick values:** red (620 nm) ≈ 2 eV; blue (450 nm) ≈ 2.76 eV; UV (300 nm) ≈ 4.13 eV; X-ray (1 nm) ≈ 1.24 keV.

## Key Constants

| Constant | Value | Notes |
| --- | --- | --- |
| Permittivity of free space | $\varepsilon_0 = 8.85 \times 10^{-12}$ F/m | Also C²/(N·m²) |
| Permeability of free space | $\mu_0 = 4\pi \times 10^{-7}$ T·m/A | $\approx 1.26 \times 10^{-6}$; also H/m |
| Speed of light | $c = 3 \times 10^8$ m/s | $c = 1/\sqrt{\mu_0\varepsilon_0}$ |
| Planck’s constant | $h = 6.626 \times 10^{-34}$ J·s |  |
| Electron volt | $1 \text{ eV} = 1.6 \times 10^{-19}$ J |  |

> **⚠ Trap · Unit Gotchas**
>
> $1$ nm $= 10\,$Å (X-ray $1$ Å $= 0.1$ nm, not 1 nm). $B$ is numerically much smaller than $E$ since $B = E/c$. Intensity in W/m², energy density in J/m³, radiation pressure in Pa — don’t confuse them. Keep the exponent sign right: $\varepsilon_0 = 10^{-12}$, not $10^{12}$.

## Related Topics

- [Maxwell’s Displacement Current](../displacement-current/index.md)
- [Properties of Electromagnetic Waves](../em-wave-properties/index.md)
- [Electromagnetic Spectrum and Wave Properties](../em-spectrum/index.md)

From TestGuru · our mock-test platform

## You've read Electromagnetic Waves Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-waves%2Fformula-sheet%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-14

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-waves/formula-sheet/",this.page.identifier="/physics/electromagnetic-waves/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-15

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-waves/formula-sheet/](https://jeenotes.in/physics/electromagnetic-waves/formula-sheet/) · raw HTML: `offline/physics/electromagnetic-waves/formula-sheet/index.html`_
