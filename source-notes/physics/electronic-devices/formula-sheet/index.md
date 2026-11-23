---
title: "Electronic Devices Formula Sheet"
source: "https://jeenotes.in/physics/electronic-devices/formula-sheet/"
description: "All key Electronic Devices formulas for JEE: semiconductors, p-n junction, diodes, rectifiers, Zener, LED, solar cell, transistor & logic gates. Quick revision."
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Physics"
position: "/ Topic 9 of 9"
html: "../../../../offline/physics/electronic-devices/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Electronic Devices formulas for JEE: semiconductors, p-n junction, diodes, rectifiers, Zener, LED, solar cell, transistor & logic gates. Quick revision.

Last-minute revision sheet for Electronic Devices: every formula, constant, and must-know result from the chapter, grouped by sub-topic for fast scanning.

## Semiconductors and Band Theory

### Carrier Concentration

| Quantity | Formula | Notes |
| --- | --- | --- |
| Intrinsic balance | $n_i = p_i$ | Pure semiconductor: equal electrons and holes |
| Intrinsic concentration | $n_i^2 = A T^3 e^{-E_g/kT}$ | $A$ = material constant, increases sharply with $T$ |
| Mass action law | $n \times p = n_i^2$ | Holds for ALL semiconductors at thermal equilibrium |

$$\boxed{n \times p = n_i^2}$$

### Conductivity

| Type | Conductivity | Majority / Minority |
| --- | --- | --- |
| Intrinsic | $\sigma_i = n_i e(\mu_e + \mu_h)$ | $n_i$ (e⁻) / $n_i$ (h⁺) |
| n-type | $\sigma_n = N_D e\mu_e$ (approx) | $n_n \approx N_D$ / $p_n = n_i^2/N_D$ |
| p-type | $\sigma_p = N_A e\mu_h$ (approx) | $p_p \approx N_A$ / $n_p = n_i^2/N_A$ |

Full (exact) forms before approximation:

$$\sigma_n = n_n e\mu_e + p_n e\mu_h \qquad \sigma_p = p_p e\mu_h + n_p e\mu_e$$

> **★ Key point · High-yield numbers to memorize**
>
> Band gaps: Si $E_g = 1.1$ eV, Ge $E_g = 0.7$ eV, Diamond $E_g = 5.4$ eV.
>
> Thermal energy at 300 K: $kT \approx 0.026$ eV; Boltzmann constant $k = 8.62 \times 10^{-5}$ eV/K.
>
> Si intrinsic concentration: $n_i \approx 1.5 \times 10^{10}$ cm⁻³ at 300 K.
>
> Semiconductors: $\rho \sim 10^{-3}$ to $10^{3}$ Ω·m, resistance DROPS with rising temperature (negative coefficient).

### Doping Types

| Type | Dopant (group) | Examples | Majority carrier |
| --- | --- | --- | --- |
| n-type | Pentavalent (V) | P, As, Sb | Electrons |
| p-type | Trivalent (III) | B, Al, Ga | Holes |

Mnemonic: “5 gives electrons (donor → n-type), 3 takes electrons (acceptor → p-type).”

---

## p-n Junction

### Barrier Potential and Depletion Region

$$\boxed{V_0 = \frac{kT}{e}\ln\!\left(\frac{N_A N_D}{n_i^2}\right)}$$

Equivalent form using carrier concentrations ($p_p \approx N_A$, $n_n \approx N_D$):

$$V_0 = \frac{kT}{e}\ln\!\left(\frac{p_p\, n_n}{n_i^2}\right)$$

$$\boxed{W = \sqrt{\frac{2\epsilon\epsilon_0 V_0}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)}} \qquad W \propto \sqrt{V_0}$$

| Quantity | Value / relation | Notes |
| --- | --- | --- |
| $kT/e$ at 300 K | $0.026$ V | $\dfrac{1.38\times10^{-23}\times300}{1.6\times10^{-19}}$ |
| Barrier potential $V_0$ | Si $\approx 0.7$ V, Ge $\approx 0.3$ V, GaAs $\approx 1.2$ V | Internal — reads 0 on a voltmeter |
| Depletion width $W_0$ | $\sim 10^{-6}$ m (1 µm) | Higher doping → narrower $W$ |
| Temperature effect | $V_0$ drops $\sim 2$ mV/°C; $I_0$ doubles every 10°C | — |

### Diode (Junction) Current

$$\boxed{I = I_0\left(e^{eV/kT} - 1\right)}$$

- Forward bias ($V > 0.1$ V): $I \approx I_0\, e^{eV/kT}$ (exponential rise)
- Reverse bias: $I \approx -I_0$ (constant saturation current, $I_0 \sim 10^{-9}$ A for Si)

### Bias Behavior

| Condition | Barrier | Depletion width | Current |
| --- | --- | --- | --- |
| No bias | $V_0$ | $W_0$ | $0$ |
| Forward (positive to p) | $V_0 - V$ ↓ | $W$ ↓ | Large ↑ |
| Reverse (positive to n) | $V_0 + \lvert V\rvert$ ↑ | $W$ ↑ | $\approx I_0$ (tiny) |

### Depletion (Junction) Capacitance

$$\boxed{C_j = \frac{\epsilon\epsilon_0 A}{W}} \qquad C_j \propto \frac{1}{\sqrt{V_0 + V_r}}\;\text{(reverse bias)}$$

> **★ Key point · Conceptual traps that score marks**
>
> An ideal voltmeter across an unbiased junction reads ZERO — contact potentials cancel $V_0$.
>
> Reverse current is NOT zero: minority carriers give $I_0$.
>
> Knee/threshold voltage $\approx$ barrier potential numerically (0.7 V Si, 0.3 V Ge) but they are conceptually different.

---

## Diode Characteristics and Rectifiers

### Diode Equation and Resistance

$$\boxed{I = I_0\left(e^{eV/\eta kT} - 1\right)} \xrightarrow{\text{300 K}} I \approx I_0\, e^{V/0.026}$$

($\eta$ = ideality factor: 1 ideal, 1–2 real diodes.)

| Resistance | Formula | Notes |
| --- | --- | --- |
| Static (DC) | $r_{dc} = \dfrac{V}{I}$ | Changes with operating point |
| Dynamic (AC) | $r_{ac} = \dfrac{dV}{dI} = \dfrac{\eta kT}{eI}$ | At 300 K: $r_{ac} = \dfrac{0.026}{I}$ Ω |

$$\boxed{r_{ac} = \frac{0.026}{I}\ \Omega \quad (\text{at } 300\text{ K})}$$

### Rectifier Output Formulas

| Parameter | Half-Wave | Full-Wave |
| --- | --- | --- |
| $V_{dc}$ | $\dfrac{V_m}{\pi} = 0.318\,V_m$ | $\dfrac{2V_m}{\pi} = 0.636\,V_m$ |
| $V_{rms}$ | $\dfrac{V_m}{2}$ | $\dfrac{V_m}{\sqrt{2}}$ |
| Efficiency $\eta$ | $\dfrac{4}{\pi^2} = 40.6\%$ | $\dfrac{8}{\pi^2} = 81.2\%$ |
| Ripple factor $r$ | $1.21$ | $0.48$ |
| Ripple frequency | $f$ | $2f$ |
| PIV (bridge) | $V_m$ | $V_m$ |
| PIV (center-tap) | — | $2V_m$ |

$$\boxed{V_{dc}^{\text{half}} = \frac{V_m}{\pi}, \quad V_{dc}^{\text{full}} = \frac{2V_m}{\pi}}$$

Efficiency: $\eta = \dfrac{P_{dc}}{P_{ac}} = \dfrac{V_{dc}^2}{V_{rms}^2}$, so $\eta_{\text{full}} = 2\,\eta_{\text{half}}$ exactly.

### Ripple Factor and Capacitor Filter

$$\boxed{r = \sqrt{\left(\frac{V_{rms}}{V_{dc}}\right)^2 - 1}}$$

$$V_r = \frac{I_{dc}}{fC} = \frac{V_{dc}}{fC R_L} \qquad r_{\text{full,filtered}} = \frac{1}{2\sqrt{3}\,f C R_L}$$

> **★ Key point · Rectifier shortcuts**
>
> Quick DC estimate: Half-wave $\approx 0.3 \times$ peak; Full-wave $\approx 0.6 \times$ peak.
>
> Real Si diode drops 0.7 V; bridge has TWO conducting diodes per half cycle → subtract 1.4 V.
>
> Lower ripple factor = smoother DC. Larger $C$ or higher $f$ → lower ripple.

---

## Zener Diode and Voltage Regulation

Operated in REVERSE breakdown; cathode to the positive rail.

$$\boxed{V_{out} = V_Z\ (\text{constant in breakdown})}$$

$$\boxed{I_s = I_Z + I_L} \qquad I_s = \frac{V_{in} - V_Z}{R_s}, \quad I_L = \frac{V_Z}{R_L}$$

$$\boxed{I_Z = \frac{V_{in} - V_Z}{R_s} - \frac{V_Z}{R_L}}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Series resistor | $R_s = \dfrac{V_{in} - V_Z}{I_s}$ | $I_s = I_Z + I_L$ |
| Power dissipation | $P_Z = V_Z I_Z$ | Must stay below $P_{Z,max}$ |
| Max current | $I_{Z,max} = \dfrac{P_{Z,max}}{V_Z}$ | Power-limited |
| Regulation window | $I_{Z,min} < I_Z < I_{Z,max}$ | Both bounds must hold |
| Output with real $r_z$ | $V_{out} = V_Z + I_Z r_z$ | $r_z$ ≈ 5–50 Ω; assume 0 if not given |

Minimum load resistance for regulation (worst case, $V_{in} = V_{min}$):

$$R_{L,\min} = \frac{V_Z R_s}{V_{min} - V_Z - I_{Z,min} R_s}$$

Breakdown types: Zener effect (field ionization, $< 5$ V, heavy doping) vs Avalanche (collision chain, $> 5$ V, light doping).

> **★ Key point · Zener exam checks**
>
> Always verify $I_Z > I_{Z,min}$ (else regulation fails) and $P_Z < P_{Z,max}$ (else it burns out).
>
> Common trap: forgetting that $I_s$ adds BOTH $I_Z$ and $I_L$.

---

## Special Diodes: LED, Photodiode, Solar Cell

### LED (Light Emitting Diode)

Forward biased; emits a photon per electron-hole recombination.

$$\boxed{E = h\nu = \frac{hc}{\lambda} = E_g} \qquad \boxed{\lambda(\text{nm}) = \frac{1240}{E_g(\text{eV})}}$$

$$\boxed{R = \frac{V_s - V_f}{I_f}}\ \text{(series current-limiting resistor)}$$

| Quantity | Value | Notes |
| --- | --- | --- |
| Forward voltage $V_f$ | Red ~1.8 V, Green ~2.0 V, Blue ~3.0 V, White ~3.2 V | Higher energy → higher $V_f$ |
| Typical current | 10–20 mA | $P = V_f I$ |
| Planck constant $h$ | $6.63 \times 10^{-34}$ J·s | — |
| Speed of light $c$ | $3 \times 10^8$ m/s | — |

Si and Ge make poor LEDs (indirect band gap → energy lost as lattice vibration, not light).

### Photodiode

Reverse biased; current rises with light intensity.

$$\boxed{I = I_0 + I_L} \qquad \boxed{I_L \propto \Phi} \qquad \boxed{R = \frac{I_L}{P_{opt}}}$$

$I_0$ = dark current (~nA); $I_L$ = photo-current; responsivity $R \approx 0.4$–0.6 A/W.

### Solar Cell (Photovoltaic)

Self-powered (no external bias).

$$\boxed{FF = \frac{V_m I_m}{V_{oc} I_{sc}}} \qquad \boxed{\eta = \frac{V_m I_m}{P_{in}} = \frac{FF \cdot V_{oc} \cdot I_{sc}}{P_{in}}}$$

| Quantity | Value | Notes |
| --- | --- | --- |
| Open-circuit voltage $V_{oc}$ | Si ~0.5–0.7 V (≈0.6 V) | Set by band gap, ~constant with intensity |
| Short-circuit current $I_{sc}$ | $\propto$ area × intensity | ~30–40 mA/cm² in full sun |
| Fill factor $FF$ | 0.7–0.85 | “Squareness” of I-V curve |
| Commercial Si efficiency | 15–20% | Shockley-Queisser limit (Si) ~33% |

> **★ Key point · Light-device essentials**
>
> Master formula: $\lambda(\text{nm}) = 1240 / E_g(\text{eV})$. Example: $E_g = 2$ eV → 620 nm (red).
>
> More light on a solar cell raises CURRENT ($I_{sc}$), not voltage. For higher voltage, wire cells in series.
>
> Photodiode needs an external battery; a solar cell generates its own power.

---

## Transistor (BJT) as Amplifier and Switch

Active mode: base-emitter forward biased, base-collector reverse biased. $V_{BE} \approx 0.7$ V (Si).

### Current Relations

$$\boxed{I_E = I_B + I_C} \qquad \boxed{\beta = \frac{I_C}{I_B}} \qquad \boxed{\alpha = \frac{I_C}{I_E}}$$

$$\boxed{\beta = \frac{\alpha}{1-\alpha}} \qquad \boxed{\alpha = \frac{\beta}{\beta + 1}}$$

Typical: $\beta = 50$–300, $\alpha = 0.95$–0.99, $I_E > I_C \gg I_B$.

### Common-Emitter Amplifier

$$\boxed{A_v = -\frac{R_C}{r_e}} \quad\text{where}\quad r_e = \frac{26\ \text{mV}}{I_E(\text{mA})}$$

$$\boxed{A_i = \beta} \qquad \boxed{A_p = A_v \times A_i}$$

The negative sign means 180° phase inversion (only CE inverts; CB and CC do not).

DC bias (voltage-divider): $V_B = \dfrac{R_2}{R_1 + R_2}V_{CC}$, $\;V_E = V_B - V_{BE}$, $\;I_E = \dfrac{V_E}{R_E}$, $\;I_C \approx I_E$, $\;V_C = V_{CC} - I_C R_C$.

### Transistor as a Switch

| State | Condition | $V_{CE}$ | $I_C$ |
| --- | --- | --- | --- |
| Cut-off (OFF) | $I_B = 0$ | $V_{CE} = V_{CC}$ | $\approx 0$ |
| Saturation (ON) | $I_B$ large | $V_{CE,sat} \approx 0.2$ V | $I_{C,sat} = \dfrac{V_{CC}}{R_C}$ |

$$\boxed{I_{C,sat} = \frac{V_{CC}}{R_C}} \qquad \boxed{R_B < \frac{(V_{in} - V_{BE})\,\beta}{I_{C,sat}}}$$

> **★ Key point · Transistor exam reminders**
>
> In SATURATION do NOT use $I_C = \beta I_B$; use $I_{C,sat} = V_{CC}/R_C$ instead.
>
> Always subtract $V_{BE} = 0.7$ V: $V_E = V_B - 0.7$.
>
> A small change in $\alpha$ causes a large change in $\beta$ ($\alpha: 0.98\to0.99$ gives $\beta: 49\to99$).

---

## Logic Gates and Boolean Algebra

### Truth Table (all seven gates)

| A | B | AND | OR | NAND | NOR | XOR | XNOR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

### Boolean Expressions

| Gate | Boolean | Output = 1 when |
| --- | --- | --- |
| NOT | $Y = \overline{A}$ | Input is 0 |
| AND | $Y = A \cdot B$ | ALL inputs are 1 |
| OR | $Y = A + B$ | ANY input is 1 |
| NAND | $Y = \overline{A \cdot B}$ | Not all inputs are 1 |
| NOR | $Y = \overline{A + B}$ | All inputs are 0 |
| XOR | $Y = A\overline{B} + \overline{A}B = A \oplus B$ | Inputs are different |
| XNOR | $Y = AB + \overline{A}\,\overline{B} = \overline{A \oplus B}$ | Inputs are same |

NAND and NOR are universal gates (any function can be built from either alone).

### De Morgan’s Theorems

$$\boxed{\overline{A + B} = \overline{A} \cdot \overline{B}} \qquad \boxed{\overline{A \cdot B} = \overline{A} + \overline{B}}$$

### Boolean Laws

| Law | Identity |
| --- | --- |
| Identity | $A + 0 = A$, $\;A \cdot 1 = A$ |
| Null | $A + 1 = 1$, $\;A \cdot 0 = 0$ |
| Idempotent | $A + A = A$, $\;A \cdot A = A$ |
| Complement | $A + \overline{A} = 1$, $\;A \cdot \overline{A} = 0$ |
| Double negation | $\overline{\overline{A}} = A$ |
| Distributive | $A(B + C) = AB + AC$ |
| Absorption | $A + AB = A$, $\;A(A + B) = A$ |

### XOR Properties

$$A \oplus 0 = A, \quad A \oplus 1 = \overline{A}, \quad A \oplus A = 0, \quad A \oplus \overline{A} = 1$$

### Combinational Circuits

| Circuit | Sum | Carry |
| --- | --- | --- |
| Half adder | $S = A \oplus B$ | $C = A \cdot B$ |
| Full adder | $S = A \oplus B \oplus C_{in}$ | $C_{out} = AB + BC_{in} + AC_{in}$ |

> **★ Key point · Logic-gate shortcuts**
>
> NAND = flip AND’s output column; NOR = flip OR’s output column.
>
> XOR output: count the 1s in the inputs — odd number of 1s → output 1.
>
> De Morgan’s: “Break the bar, change the operator.”

---

## Related Topics

- [Semiconductors and Band Theory](../semiconductors/index.md)
- [p-n Junction Formation](../pn-junction/index.md)
- [Diode Characteristics and Rectifiers](../diode-rectifier/index.md)
- [Special Purpose Diodes](../special-diodes/index.md)
- [Zener Diode and Voltage Regulation](../zener-diode/index.md)
- [Transistor as Amplifier and Switch](../transistor/index.md)
- [Basic Logic Gates and Truth Tables](../logic-gates/index.md)

From TestGuru · our mock-test platform

## You've read Electronic Devices Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electronic-devices&tg_exam=jee-main&tg_page=%2Fphysics%2Felectronic-devices%2Fformula-sheet%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electronic-devices/formula-sheet/",this.page.identifier="/physics/electronic-devices/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/electronic-devices/formula-sheet/](https://jeenotes.in/physics/electronic-devices/formula-sheet/) · raw HTML: `offline/physics/electronic-devices/formula-sheet/index.html`_
