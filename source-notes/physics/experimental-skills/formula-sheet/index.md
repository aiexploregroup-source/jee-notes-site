---
title: "Experimental Skills Formula Sheet"
source: "https://jeenotes.in/physics/experimental-skills/formula-sheet/"
description: "All key Physics formulas for Experimental Skills: least count, zero error, pendulum, meter bridge, lens, prism, YDSE & error analysis for JEE Main & Advanced quick revision."
updated: "2026-08-01"
reading_time: "7 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 5"
html: "../../../../offline/physics/experimental-skills/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Physics formulas for Experimental Skills: least count, zero error, pendulum, meter bridge, lens, prism, YDSE & error analysis for JEE Main & Advanced quick revision.

Every formula, least count, zero-error rule, and experiment result from this chapter, condensed for last-minute revision. Use it alongside the detailed topic pages.

> **★ Key point · How to use this sheet**
>
> Measurement tools (vernier caliper, screw gauge) and zero-error correction appear in JEE Main almost every year. Master those first, then the experiment formulas and graph shapes.

## Measuring Instruments

### Vernier Caliper

$$\boxed{\text{LC} = 1\,\text{MSD} - 1\,\text{VSD}}$$

$$\boxed{\text{LC} = \frac{1\,\text{MSD}}{\text{Number of VS divisions}}}$$

$$\boxed{\text{Reading} = \text{MSR} + \text{VC} \times \text{LC}}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Vernier scale division | $1\,\text{VSD} = \dfrac{9\,\text{mm}}{10} = 0.9\,\text{mm}$ | Standard 10-division vernier |
| Least count (standard) | $\dfrac{1\,\text{mm}}{10} = 0.1\,\text{mm} = 0.01\,\text{cm}$ | 10 VS divisions span 9 mm |
| Least count (precise) | $\dfrac{1\,\text{mm}}{50} = 0.02\,\text{mm} = 0.002\,\text{cm}$ | 50 VS divisions span 49 mm |
| Least count (with MSD = 0.5 mm) | $\dfrac{0.5\,\text{mm}}{50} = 0.01\,\text{mm}$ | 50 VS = 49 MS |
| Inch vernier LC | $\dfrac{0.025\,\text{inch}}{25} = 0.001\,\text{inch}$ | MSD = 0.025 inch, 25 VS divisions span 24 MS |
| MSR | Last complete division **before** VS zero | Lower value, not nearest |
| VC | Vernier coincidence — a whole number | $0, 1, \dots, 9$ for 10-division |

### Screw Gauge (Micrometer)

$$\boxed{\text{Pitch} = \frac{\text{Linear distance moved}}{\text{Number of rotations}}}$$

$$\boxed{\text{LC} = \frac{\text{Pitch}}{\text{Number of circular scale divisions}}}$$

$$\boxed{\text{Reading} = \text{LSR} + \text{CSR} \times \text{LC}}$$

| Quantity | Value / Formula | Notes |
| --- | --- | --- |
| Standard pitch | $0.5\,\text{mm}$ | Distance moved per full rotation |
| LC (pitch 0.5 mm, 50 div) | $\dfrac{0.5}{50} = 0.01\,\text{mm} = 0.001\,\text{cm}$ | Standard practical precision |
| LC (pitch 0.5 mm, 100 div) | $\dfrac{0.5}{100} = 0.005\,\text{mm}$ | Theoretical; read to 0.01 mm in practice |
| LSR (PSR) | Last visible division on sleeve | Check if graduations are 0.5 mm or 1 mm |
| CSR | Circular scale division at reference line | Thimble reading |

> **★ Key point · Screw gauge is 10x more precise than vernier**
>
> $$\frac{\text{LC}_{\text{vernier}}}{\text{LC}_{\text{screw}}} = \frac{0.1\,\text{mm}}{0.01\,\text{mm}} = 10$$
>
> Pitch is **not** the least count: pitch is distance per full rotation (0.5 mm); LC is distance per single division (0.01 mm).

### Instrument Comparison

| Instrument | Measures | Range | Least Count |
| --- | --- | --- | --- |
| Metre scale | Length | 0–100 cm | 1 mm (0.1 cm) |
| Vernier caliper | Length, diameter, depth (internal/external) | 0–15 cm | 0.01 cm |
| Screw gauge | Thickness, wire diameter | 0–2.5 cm | 0.001 cm |
| Spherometer | Radius of curvature | — | 0.001 cm |
| Stopwatch | Time | — | 0.01 s |
| Thermometer | Temperature | — | 0.1 °C |

## Zero Error and Correction

$$\boxed{\text{Actual Reading} = \text{Observed Reading} - \text{Zero Error (with sign)}}$$

| Type | Position (vernier / screw) | Error value | Correction |
| --- | --- | --- | --- |
| Positive | VS zero right of MS zero / CSR below ref line | $+(\text{div}) \times \text{LC}$ | Subtract error |
| Negative | VS zero left of MS zero / CSR above ref line | $-(n - \text{div}) \times \text{LC}$ | Add $\lvert\text{error}\rvert$ |

- Negative vernier ($n=10$): e.g. 8th from end coincides $\Rightarrow -(10-8)\times 0.01 = -0.02\,\text{cm}$.
- Negative screw ($n=100$): e.g. CSR = 96 coincides $\Rightarrow -(100-96)\times 0.01 = -0.04\,\text{mm}$.

> **⚠ Trap · The sign trap (JEE favourite)**
>
> For a **negative** zero error:
>
> $$\text{Actual} = \text{Observed} - (-\text{Error}) = \text{Observed} + \lvert\text{Error}\rvert$$
>
> Minus a negative becomes plus. Always write “Observed − (sign × value)”.

> **◐ In simple terms · Backlash error (screw gauge)**
>
> Play in loose screw threads makes the spindle position change when rotation reverses. Avoid it by rotating the thimble in **one direction only** and using the ratchet for constant pressure.

## Mechanics Experiments

### Simple Pendulum (finding g)

$$\boxed{T = 2\pi\sqrt{\frac{L}{g}}} \qquad \boxed{g = \frac{4\pi^2 L}{T^2}}$$

| Item | Detail |
| --- | --- |
| Effective length | $L = \text{string length} + \text{bob radius } r$ |
| Time period | $T = \dfrac{\text{time for 20 oscillations}}{20}$ |
| Graph | $T^2$ vs $L$ → straight line through origin |
| Slope | $\dfrac{4\pi^2}{g}$ |
| Amplitude | Keep small (< 10°) so $T = 2\pi\sqrt{L/g}$ holds |

### Young’s Modulus (Searle’s Apparatus)

$$\boxed{Y = \frac{FL}{A\,\Delta L} = \frac{4FL}{\pi d^2 \Delta L}}$$

Plot $F$ vs $\Delta L$; measure wire diameter $d$ to get area $A = \pi d^2/4$.

### Surface Tension (Capillary Rise)

$$\boxed{S = \frac{\rho g r h}{2\cos\theta}}$$

For water–glass, $\cos\theta = 1$.

### Coefficient of Viscosity (Stokes’ Law)

$$\boxed{\eta = \frac{2r^2(\rho - \sigma)g}{9 v_t}}$$

Measure terminal velocity $v_t$ of a sphere falling through the liquid.

### Specific Heat Capacity (Calorimeter)

$$\boxed{m_1 c_1 (T_1 - T) = m_2 c_2 (T - T_2)}$$

### Sonometer (string vibrations)

$$\boxed{f = \frac{1}{2L}\sqrt{\frac{T}{\mu}}}$$

| Quantity | Relation / Graph |
| --- | --- |
| Tension | $T = Mg$; $\mu$ = mass per unit length |
| At constant $T$ | $f \propto \dfrac{1}{L}$ → $f$ vs $1/L$ straight line through origin |
| At constant $L$ | $f \propto \sqrt{T}$ → $f^2$ vs $T$ straight line through origin |

## Sound Experiments

### Speed of Sound (Resonance Tube)

$$\boxed{v = 2f(l_2 - l_1)}$$

End correction: $e = \dfrac{l_2 - 3l_1}{2}$, where $l_1, l_2$ are first and second resonance lengths.

## Electricity Experiments

### Ohm’s Law (V–I Characteristics)

$$\boxed{V = IR} \qquad R = \frac{V}{I} = \text{slope of } V\text{ vs } I$$

Ohmic conductor → straight line through origin. Diode/LED → curved (non-ohmic).

### Metre Bridge (unknown resistance)

$$\boxed{\frac{R}{S} = \frac{l}{100-l}} \qquad R = S \cdot \frac{l}{100-l}$$

| Item | Detail |
| --- | --- |
| Principle | Wheatstone bridge |
| Balance point | Galvanometer shows zero deflection |
| Best accuracy | Balancing length $l \approx 40$–$60\,\text{cm}$ (near 50 cm) |
| Specific resistance | $\rho = \dfrac{\pi d^2 R}{4L}$ |

### Resistivity of a Wire

$$\boxed{\rho = \frac{RA}{L}}, \quad A = \pi r^2$$

$R$ from $V/I$ graph slope; radius $r$ from screw gauge; units $\Omega\!\cdot\!\text{m}$.

### Potentiometer (EMF and internal resistance)

$$\boxed{\frac{E_1}{E_2} = \frac{l_1}{l_2}} \qquad \boxed{r = \left(\frac{l_1 - l_2}{l_2}\right) R}$$

$l_1$ = balancing length with key open; $l_2$ = balancing length with key closed across $R$. Advantage over a voltmeter: draws no current at balance, so it measures true EMF.

### Galvanometer

$$\boxed{K = \frac{E}{(R + G)\theta}} \quad \text{(figure of merit)}$$

| Conversion | Formula |
| --- | --- |
| To ammeter | Shunt $S = \dfrac{I_g G}{I - I_g}$ |
| To voltmeter | Series $R_h = \dfrac{V}{I_g} - G$ |

## Optics Experiments

### Convex Lens — u–v Method

$$\boxed{\frac{1}{f} = \frac{1}{v} - \frac{1}{u}}$$

| Item | Detail |
| --- | --- |
| Sign convention | $u$ negative (object left), $v$ positive (real image right), $f$ positive |
| Graph | $1/v$ vs $1/u$ → straight line, slope $= -1$ |
| Intercepts | Both equal $1/f$ |

### Convex Lens — Displacement (Bessel’s) Method

$$\boxed{f = \frac{D^2 - d^2}{4D}}$$

$D$ = fixed object-to-screen distance, $d$ = separation between the two lens positions. Condition: $D > 4f$. No parallax error.

### Concave Mirror — Focal Length

$$\boxed{\frac{1}{f} = \frac{1}{v} + \frac{1}{u}} \qquad f = \frac{uv}{u+v}$$

For real images, both $u$ and $v$ are negative. Distant-object method: $f = R/2$.

### Prism — Angle and Refractive Index

$$\boxed{A = \frac{r_1 + r_2}{2}} \qquad \boxed{\delta = i + e - A}$$

$$\boxed{n = \frac{\sin\!\left(\dfrac{A + \delta_m}{2}\right)}{\sin\!\left(\dfrac{A}{2}\right)}}$$

| Item | Detail |
| --- | --- |
| Minimum deviation | Occurs when $i = e$ (symmetric path) |
| Graph | $\delta$ vs $i$ → U-shaped, minimum at $\delta_m$ |

### Refractive Index (Glass Slab, travelling microscope)

$$\boxed{n = \frac{\text{Real depth}}{\text{Apparent depth}}}$$

### Young’s Double Slit — Wavelength of Light

$$\boxed{\lambda = \frac{\beta\, d}{D}}$$

$\beta$ = fringe width $= \dfrac{\text{distance for } n \text{ fringes}}{n}$, $d$ = slit separation, $D$ = slit-to-screen distance.

## Error Analysis

### Error Propagation

For $Z = A^a B^b C^c$:

$$\boxed{\frac{\Delta Z}{Z} = \lvert a\rvert\frac{\Delta A}{A} + \lvert b\rvert\frac{\Delta B}{B} + \lvert c\rvert\frac{\Delta C}{C}}$$

### Types of Errors

| Category | Examples | How to minimize |
| --- | --- | --- |
| Systematic | Zero error, index error, backlash, least-count limit | Check/correct zero error, calibrate, use smaller-LC instruments |
| Random | Parallax, reaction time, fluctuating readings | Take $\geq 3$ readings, take mean, view scale at eye level |
| Personal / gross | Misreading, bias, careless mistakes | Follow procedure, double-check, stay objective |

### Significant Figures

- All non-zero digits are significant.
- Zeros between digits are significant.
- Leading zeros are **not** significant.
- Trailing zeros after a decimal **are** significant.

### Mean Absolute Error

$$\lvert\Delta x_i\rvert = \lvert x_i - \bar{x}\rvert \qquad \overline{\lvert\Delta x\rvert} = \frac{1}{n}\sum_{i=1}^{n}\lvert\Delta x_i\rvert$$

Report a measurement as $x = (\bar{x} \pm \overline{\lvert\Delta x\rvert})$; random error is typically of the order of the least count.

## Graphs and Data Presentation

$$\boxed{\text{Slope} = \frac{y_2 - y_1}{x_2 - x_1}}$$

Choose points far apart on the best-fit line. Rules: pick a suitable scale, plot points clearly, draw a best-fit line/curve, label axes with units, and give a title.

| Experiment | Plot | Shape |
| --- | --- | --- |
| Simple pendulum | $T^2$ vs $L$ | Straight line through origin |
| Lens (u–v) | $1/v$ vs $1/u$ | Straight line, slope $-1$ |
| Ohm’s law | $V$ vs $I$ | Straight line through origin |
| Sonometer | $f$ vs $1/L$ | Straight line through origin |
| Prism | $\delta$ vs $i$ | U-shaped, min at $\delta_m$ |
| Diode | $I$ vs $V$ | Curved (exponential) |

## High-Yield Reminders

> **★ Key point · Memorise these constants**
>
> Vernier caliper LC = **0.01 cm** (0.1 mm). Screw gauge LC = **0.001 cm** (0.01 mm). Standard screw pitch = **0.5 mm**. Best metre-bridge balance ≈ **50 cm**. Pendulum: time **20 oscillations** to cut reaction-time error.

> **↗ Connection · Final-reading sanity check**
>
> A reported reading must be a whole multiple of the least count: with LC = 0.01 cm, “2.37 cm” is valid but “2.375 cm” is over-precise.

## Related Pages

- [Vernier Caliper](../vernier-caliper/index.md) — least count, reading, zero error in detail
- [Screw Gauge](../screw-gauge/index.md) — pitch, least count, backlash
- [Common Experiments](../common-experiments/index.md) — apparatus, procedures, viva questions
- [Units and Measurements](../../units-measurements/index.md) — error theory and significant figures
- [Current Electricity](../../current-electricity/index.md) — electrical experiments
- [Optics](../../optics/index.md) — lens, mirror, prism, YDSE theory

From TestGuru · our mock-test platform

## You've read Experimental Skills Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=experimental-skills&tg_exam=jee-main&tg_page=%2Fphysics%2Fexperimental-skills%2Fformula-sheet%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/experimental-skills/formula-sheet/",this.page.identifier="/physics/experimental-skills/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/experimental-skills/formula-sheet/](https://jeenotes.in/physics/experimental-skills/formula-sheet/) · raw HTML: `offline/physics/experimental-skills/formula-sheet/index.html`_
