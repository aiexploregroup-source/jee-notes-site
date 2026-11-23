---
title: "LCR Circuits - Impedance and Resonance"
source: "https://jeenotes.in/physics/electromagnetic-induction/lcr-circuits/"
description: "Master LCR circuits, impedance, power factor, and resonance - the key to understanding radio tuning, filters, and AC circuit analysis"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 10"
html: "../../../../offline/physics/electromagnetic-induction/lcr-circuits/index.html"
extracted: "2026-11-23"
---

> Master LCR circuits, impedance, power factor, and resonance - the key to understanding radio tuning, filters, and AC circuit analysis

## Movie Hook: Tuning the Radio in Vintage Films

In old movies, you see characters turning a dial to tune a radio to different stations. That dial adjusts a **variable capacitor** in an **LCR circuit**. When the circuit’s resonant frequency matches the radio wave frequency, the circuit “lights up” with maximum current - you hear that station loud and clear! Every frequency has its own LCR fingerprint. The same principle works in your phone’s antenna, Wi-Fi receivers, and even MRI machines. Welcome to the world of **resonance**!

## What is an LCR Circuit?

An LCR circuit contains a **resistor (R)**, **inductor (L)**, and **capacitor (C)** connected to an AC source.

**LCR Circuit**: Combines resistive, inductive, and capacitive elements.

**Key phenomenon**: **Resonance** - maximum current at specific frequency

**Applications**:

- Radio/TV tuning
- Filters (pass or block specific frequencies)
- Oscillators
- Impedance matching

## Series LCR Circuit

**Setup**: R, L, and C connected in series with AC source $V = V_0\sin(\omega t)$

**Same current** flows through all elements (series connection).

### Voltage Across Each Element

Let current: $I = I_0\sin(\omega t)$

**Across R**: $V_R = IR$ (in phase with I)

$$V_R = I_0R\sin(\omega t)$$

**Across L**: $V_L = IX_L$ (leads I by 90°)

$$V_L = I_0X_L\sin(\omega t + 90°) = I_0X_L\cos(\omega t)$$

**Across C**: $V_C = IX_C$ (lags I by 90°)

$$V_C = I_0X_C\sin(\omega t - 90°) = -I_0X_C\cos(\omega t)$$

### Phasor Addition

**Cannot simply add** $V_R + V_L + V_C$ because phases differ!

**Phasor diagram**:

- $V_R$ along current direction (reference)
- $V_L$ perpendicular upward (leads by 90°)
- $V_C$ perpendicular downward (lags by 90°)

**Net reactive voltage**: $V_L - V_C$ (they oppose each other)

**Total voltage** (by Pythagorean theorem):

$$V_0 = \sqrt{V_R^2 + (V_L - V_C)^2}$$

$$V_0 = \sqrt{(I_0R)^2 + (I_0X_L - I_0X_C)^2}$$

$$V_0 = I_0\sqrt{R^2 + (X_L - X_C)^2}$$

**Impedance Z**:

$$Z = \frac{V_0}{I_0} = \sqrt{R^2 + (X_L - X_C)^2}$$

$$Z = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}$$

**Impedance** is the AC equivalent of resistance - it relates peak (or RMS) voltage to peak (or RMS) current.

## Memory Trick: “Z is Hypotenuse”

**Z** = **Z**zzz (sleep on) right triangle

- Horizontal side: R
- Vertical side: $X_L - X_C$
- Hypotenuse: Z

## Phase Angle

The applied voltage leads or lags the current by angle φ.

$$\tan\phi = \frac{X_L - X_C}{R} = \frac{\omega L - \frac{1}{\omega C}}{R}$$

**Three cases**:

1. **$X_L > X_C$** (Inductive): $\phi > 0$, voltage **leads** current
2. **$X_L < X_C$** (Capacitive): $\phi < 0$, voltage **lags** current
3. **$X_L = X_C$** (Resonance): $\phi = 0$, voltage and current **in phase**

**Voltage-Current relationship**:

$$V = V_0\sin(\omega t + \phi)$$

$$I = I_0\sin(\omega t)$$

## Power in LCR Circuit

**Instantaneous power**: $P(t) = V(t) \cdot I(t)$

$$P(t) = V_0\sin(\omega t + \phi) \cdot I_0\sin(\omega t)$$

**Average power** (over one cycle):

$$\langle P \rangle = \frac{V_0I_0}{2}\cos\phi = V_{rms}I_{rms}\cos\phi$$

$$P = V_{rms}I_{rms}\cos\phi = I_{rms}^2R$$

**Power factor**: $\cos\phi$

**Components**:

- **Active power** (consumed): $P = V_{rms}I_{rms}\cos\phi$ (dissipated in R)
- **Reactive power** (not consumed): $Q = V_{rms}I_{rms}\sin\phi$ (oscillates in L and C)

**Note**: Only resistor consumes power! L and C store and return energy.

### Power Factor

$$\cos\phi = \frac{R}{Z} = \frac{R}{\sqrt{R^2 + (X_L - X_C)^2}}$$

**Special cases**:

- $\cos\phi = 1$: Resonance (maximum power transfer)
- $\cos\phi = 0$: Pure reactive (no power consumption)

**Importance**: Power companies want high power factor (close to 1) for efficiency.

## Resonance in Series LCR Circuit

**Resonance condition**: $X_L = X_C$

$$\omega_r L = \frac{1}{\omega_r C}$$

$$\omega_r^2 = \frac{1}{LC}$$

**Resonant angular frequency**:

$$\omega_r = \frac{1}{\sqrt{LC}}$$

**Resonant frequency**:

$$f_r = \frac{1}{2\pi\sqrt{LC}}$$

**At resonance**:

1. **Impedance minimum**: $Z = R$ (purely resistive)
2. **Current maximum**: $I_{max} = \frac{V_0}{R}$
3. **Phase angle zero**: $\phi = 0$ (V and I in phase)
4. **Power factor unity**: $\cos\phi = 1$
5. **Power maximum**: $P = \frac{V_{rms}^2}{R}$

**Physical interpretation**:

- At resonance, energy oscillates between L and C
- Voltages $V_L$ and $V_C$ are equal and opposite (can be much larger than source voltage!)
- All source voltage drops across R

### Voltage Magnification

At resonance: $V_L = V_C = I_{max}X_L = \frac{V_0}{R} \cdot \omega_r L$

$$V_L = V_C = V_0 \cdot \frac{\omega_r L}{R} = V_0 \cdot Q$$

where $Q = \frac{\omega_r L}{R}$ is the **quality factor**.

**Voltage amplification**: $V_L$ and $V_C$ can be Q times larger than source voltage!

## Quality Factor (Q-factor)

$$Q = \frac{\omega_r L}{R} = \frac{1}{\omega_r CR} = \frac{1}{R}\sqrt{\frac{L}{C}}$$

**Physical meaning**:

- Measure of sharpness of resonance
- Ratio of energy stored to energy dissipated per cycle
- Higher Q → sharper peak, better frequency selectivity

**Bandwidth**: $\Delta\omega = \frac{\omega_r}{Q}$

**Narrow bandwidth** (high Q): Highly selective (radio tuning)
**Wide bandwidth** (low Q): Less selective (broad response)

## Resonance Curve

**Current vs Frequency**:

```fallback
I
^
|        Peak at f_r
|          /\
|         /  \
|        /    \
|       /      \
|------/--------\-------> f
      f_r
```

**Characteristics**:

- Peak at $f = f_r$
- High Q → Sharp, tall peak
- Low Q → Broad, flat peak

## Series vs Parallel LCR Circuits

### Parallel LCR Circuit

**Same voltage** across all elements.

**Currents add** (phasor addition):

$$I_0 = \sqrt{I_R^2 + (I_C - I_L)^2}$$

**Admittance** (Y = 1/Z):

$$Y = \sqrt{\frac{1}{R^2} + \left(\omega C - \frac{1}{\omega L}\right)^2}$$

**At resonance**:

- $I_L = I_C$ (reactive currents cancel)
- **Impedance maximum** (opposite of series!)
- **Current minimum** from source

### Comparison Table

| Property | Series LCR | Parallel LCR |
| --- | --- | --- |
| **Same quantity** | Current | Voltage |
| **Resonance condition** | $X_L = X_C$ | $X_L = X_C$ |
| **Resonant frequency** | $f_r = \frac{1}{2\pi\sqrt{LC}}$ | $f_r = \frac{1}{2\pi\sqrt{LC}}$ |
| **At resonance** | Z minimum, I maximum | Z maximum, I minimum |
| **Impedance at resonance** | Z = R (min) | Z = ∞ (ideally, R max practically) |
| **Application** | Acceptor circuit (passes $f_r$) | Rejector circuit (blocks $f_r$) |

## Common Mistakes Students Make

❌ **Mistake 1**: Adding $V_R$, $V_L$, $V_C$ algebraically
✅ **Reality**: Must use phasor (vector) addition

❌ **Mistake 2**: Thinking impedance = $R + X_L + X_C$
✅ **Reality**: $Z = \sqrt{R^2 + (X_L - X_C)^2}$

❌ **Mistake 3**: Confusing series and parallel resonance
✅ **Reality**:

- Series: Z minimum, I maximum
- Parallel: Z maximum, I minimum

❌ **Mistake 4**: Using wrong formula for power
✅ **Reality**: $P = V_{rms}I_{rms}\cos\phi = I_{rms}^2R$ (NOT $I_{rms}^2Z$)

❌ **Mistake 5**: Forgetting phase angle sign
✅ **Reality**:

- Inductive ($X_L > X_C$): $\phi > 0$ (V leads I)
- Capacitive ($X_L < X_C$): $\phi < 0$ (V lags I)

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: A series LCR circuit has R = 10 Ω, L = 0.1 H, C = 100 μF. Find the resonant frequency.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $R = 10$ Ω, $L = 0.1$ H, $C = 100$ μF $= 100 \times 10^{-6}$ F</p><p>Resonant frequency:</p>$$f_r = \frac{1}{2\pi\sqrt{LC}} = \frac{1}{2\pi\sqrt{0.1 \times 100 \times 10^{-6}}}$$

$$f_r = \frac{1}{2\pi\sqrt{10^{-5}}} = \frac{1}{2\pi \times 10^{-2.5}}$$

$$f_r = \frac{1}{2\pi \times 3.16 \times 10^{-3}} = \frac{1000}{2\pi \times 3.16}$$

$$f_r = \frac{1000}{19.87} \approx 50.3 \text{ Hz}$$<p><strong>Answer: 50.3 Hz</strong></p></div></details>

**Problem 1.2**: In a series LCR circuit, R = 30 Ω, $X_L = 50$ Ω, $X_C = 30$ Ω. Find:
(a) Impedance
(b) Phase angle

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $R = 30$ Ω, $X_L = 50$ Ω, $X_C = 30$ Ω</p><p><strong>(a) Impedance</strong>:</p>$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{30^2 + (50 - 30)^2}$$<p></p>$$Z = \sqrt{900 + 400} = \sqrt{1300} = 36.06 \text{ Ω}$$<p><strong>(b) Phase angle</strong>:</p>$$\tan\phi = \frac{X_L - X_C}{R} = \frac{50 - 30}{30} = \frac{20}{30} = \frac{2}{3}$$<p></p>$$\phi = \tan^{-1}(2/3) = 33.69°$$<p>Since $X_L &gt; X_C$, circuit is inductive, so voltage leads current by 33.69°.</p><p><strong>Answers</strong>: (a) 36.06 Ω, (b) 33.69° (inductive)</p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: A series LCR circuit with R = 20 Ω, L = 0.2 H, C = 50 μF is connected to a 230 V, 50 Hz AC source. Calculate:
(a) Inductive and capacitive reactances
(b) Impedance
(c) Current
(d) Power consumed

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $R = 20$ Ω, $L = 0.2$ H, $C = 50 \times 10^{-6}$ F, $V_{rms} = 230$ V, $f = 50$ Hz</p><p>$\omega = 2\pi f = 100\pi$ rad/s</p><p><strong>(a) Reactances</strong>:</p>$$X_L = \omega L = 100\pi \times 0.2 = 20\pi = 62.83 \text{ Ω}$$

$$X_C = \frac{1}{\omega C} = \frac{1}{100\pi \times 50 \times 10^{-6}} = \frac{10^4}{5\pi} = \frac{2000}{\pi} = 63.66 \text{ Ω}$$<p><strong>(b) Impedance</strong>:</p>$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{20^2 + (62.83 - 63.66)^2}$$<p></p>$$Z = \sqrt{400 + (-0.83)^2} = \sqrt{400 + 0.69} \approx 20.02 \text{ Ω}$$<p><strong>Almost at resonance!</strong> ($X_L \approx X_C$)</p><p><strong>(c) Current</strong>:</p>$$I_{rms} = \frac{V_{rms}}{Z} = \frac{230}{20.02} = 11.49 \text{ A}$$<p><strong>(d) Power</strong>:</p>$$P = I_{rms}^2 R = (11.49)^2 \times 20 = 132 \times 20 = 2640 \text{ W}$$<p>Or: $\cos\phi = \frac{R}{Z} = \frac{20}{20.02} \approx 0.999$</p>$$P = V_{rms}I_{rms}\cos\phi = 230 \times 11.49 \times 0.999 = 2640 \text{ W}$$<p>✓</p><p><strong>Answers</strong>: (a) 62.83 Ω, 63.66 Ω, (b) 20.02 Ω, (c) 11.49 A, (d) 2640 W</p></div></details>

**Problem 2.2**: At resonance in a series LCR circuit, the voltage across L is 200 V and across C is 200 V. If R = 10 Ω and the current is 2 A, find the applied voltage.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: At resonance, $V_L = 200$ V, $V_C = 200$ V, $R = 10$ Ω, $I = 2$ A</p><p><strong>At resonance</strong>:</p><ul><li>$V_L = V_C$ ✓ (confirmed)</li><li>They cancel each other in phasor addition</li><li>Impedance: $Z = R = 10$ Ω</li></ul><p><strong>Applied voltage</strong>:</p>$$V = IR = 2 \times 10 = 20 \text{ V}$$<p><strong>Key insight</strong>: Even though $V_L = V_C = 200$ V (10 times the source!), they are 180° out of phase and cancel each other. Only voltage across R matters.</p><p><strong>Answer: 20 V</strong></p><p><strong>Voltage magnification</strong>: $Q = \frac{V_L}{V} = \frac{200}{20} = 10$</p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: A series LCR circuit has L = 1 H, C = 1 μF, R = 100 Ω. Find:
(a) Resonant frequency
(b) Quality factor
(c) Bandwidth
(d) If connected to 10 V AC at resonance, find voltage across L

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L = 1$ H, $C = 1 \times 10^{-6}$ F, $R = 100$ Ω, $V = 10$ V</p><p><strong>(a) Resonant frequency</strong>:</p>$$\omega_r = \frac{1}{\sqrt{LC}} = \frac{1}{\sqrt{1 \times 10^{-6}}} = \frac{1}{10^{-3}} = 1000 \text{ rad/s}$$

$$f_r = \frac{\omega_r}{2\pi} = \frac{1000}{2\pi} = 159.15 \text{ Hz}$$<p><strong>(b) Quality factor</strong>:</p>$$Q = \frac{\omega_r L}{R} = \frac{1000 \times 1}{100} = 10$$<p><strong>(c) Bandwidth</strong>:</p>$$\Delta\omega = \frac{\omega_r}{Q} = \frac{1000}{10} = 100 \text{ rad/s}$$

$$\Delta f = \frac{\Delta\omega}{2\pi} = \frac{100}{2\pi} = 15.92 \text{ Hz}$$<p><strong>(d) Voltage across L</strong>:
At resonance: $I = \frac{V}{R} = \frac{10}{100} = 0.1$ A</p>$$V_L = IX_L = I\omega_r L = 0.1 \times 1000 \times 1 = 100 \text{ V}$$<p>Or: $V_L = QV = 10 \times 10 = 100$ V ✓</p><p><strong>Voltage magnification by factor of 10!</strong></p><p><strong>Answers</strong>: (a) 159.15 Hz, (b) 10, (c) 15.92 Hz, (d) 100 V</p></div></details>

**Problem 3.2**: Show that at resonance in a series LCR circuit, the power dissipated equals $\frac{V_{rms}^2}{R}$.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>At resonance</strong>:</p><ul><li>Condition: $X_L = X_C$</li><li>Impedance: $Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + 0} = R$</li><li>Phase angle: $\tan\phi = \frac{X_L - X_C}{R} = 0$ → $\phi = 0°$</li><li>Power factor: $\cos\phi = \cos(0°) = 1$</li></ul><p><strong>Current</strong>:</p>$$I_{rms} = \frac{V_{rms}}{Z} = \frac{V_{rms}}{R}$$<p><strong>Power dissipated</strong>:</p>$$P = V_{rms}I_{rms}\cos\phi = V_{rms} \cdot \frac{V_{rms}}{R} \cdot 1 = \frac{V_{rms}^2}{R}$$<p><strong>Alternative</strong>:</p>$$P = I_{rms}^2 R = \left(\frac{V_{rms}}{R}\right)^2 R = \frac{V_{rms}^2}{R}$$<p>✓</p><p><strong>Conclusion</strong>: At resonance, LCR circuit behaves like pure resistor, dissipating maximum power.</p></div></details>

## Applications of LCR Circuits

1. **Radio Tuning**: Adjust C to match broadcast frequency
2. **Filters**:
   - Band-pass: Pass frequencies near resonance
   - Band-stop: Block frequencies near resonance
3. **Oscillators**: Generate specific frequencies
4. **Impedance Matching**: Maximize power transfer
5. **Signal Processing**: Separate frequency components
6. **Communication Systems**: Modulation and demodulation
7. **Medical Devices**: MRI, ultrasound imaging
8. **Wireless Charging**: Resonant inductive coupling

## Real-World Example: Radio Receiver

**How AM radio works**:

1. **Antenna** receives all radio frequencies
2. **LCR tuning circuit** (variable capacitor):
   - Adjust C to set resonant frequency = desired station
   - At resonance, that frequency has maximum current
3. **Detector** extracts audio signal
4. **Amplifier** boosts signal
5. **Speaker** converts to sound

**Why it works**: High Q-factor makes circuit highly selective, rejecting unwanted frequencies.

## Connection to Other Chapters

- [**AC Circuits**](../ac-circuits/index.md): Foundation for L and C behavior
- [**Self Inductance**](../self-inductance/index.md): Inductive element properties
- [**Capacitors**](../../electrostatics/capacitors/index.md): Capacitive element properties
- [**Oscillations**](../../index.md): Resonance is fundamental oscillation phenomenon
- [**Electromagnetic Waves**](../../electromagnetic-waves/index.md): LC oscillations generate EM waves

## Key Takeaways

✓ Series LCR: $Z = \sqrt{R^2 + (X_L - X_C)^2}$
✓ Phase angle: $\tan\phi = \frac{X_L - X_C}{R}$
✓ Power: $P = V_{rms}I_{rms}\cos\phi = I_{rms}^2R$ (only R dissipates)
✓ Resonance: $f_r = \frac{1}{2\pi\sqrt{LC}}$ (when $X_L = X_C$)
✓ At resonance: Z minimum, I maximum, $\phi = 0°$, power maximum
✓ Quality factor: $Q = \frac{\omega_r L}{R}$ (sharpness of resonance)
✓ Voltage magnification: $V_L = V_C = QV$ at resonance
✓ Series: Current resonance (I max); Parallel: Voltage resonance (Z max)

## Formula Summary

**Series LCR Circuit**:

**Impedance**:

$$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}$$

**Phase angle**:

$$\tan\phi = \frac{X_L - X_C}{R}$$

**Power**:

$$P = V_{rms}I_{rms}\cos\phi = I_{rms}^2R$$

**Power factor**:

$$\cos\phi = \frac{R}{Z}$$

**Resonance**:

$$f_r = \frac{1}{2\pi\sqrt{LC}}, \quad \omega_r = \frac{1}{\sqrt{LC}}$$

**At resonance**:

- $Z = R$ (minimum)
- $I = \frac{V}{R}$ (maximum)
- $\phi = 0°$
- $\cos\phi = 1$

**Quality factor**:

$$Q = \frac{\omega_r L}{R} = \frac{1}{\omega_r CR} = \frac{1}{R}\sqrt{\frac{L}{C}}$$

**Bandwidth**:

$$\Delta\omega = \frac{\omega_r}{Q}$$

---

*Next Topic*: [Transformers](../transformers/index.md) - Voltage transformation, efficiency, and power transmission principles

From TestGuru · our mock-test platform

## You've read LCR Circuits - Impedance and Resonance.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Flcr-circuits%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-18

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/lcr-circuits/",this.page.identifier="/physics/electromagnetic-induction/lcr-circuits/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-19

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423231778865"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423231778865")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423232228883"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423232228883")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-3

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423232250279"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423232250279")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/lcr-circuits/](https://jeenotes.in/physics/electromagnetic-induction/lcr-circuits/) · raw HTML: `offline/physics/electromagnetic-induction/lcr-circuits/index.html`_
