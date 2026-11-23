---
title: "AC Circuits - Alternating Current Fundamentals"
source: "https://jeenotes.in/physics/electromagnetic-induction/ac-circuits/"
description: "Master AC voltage, current, phasors, and phase relationships in resistive and reactive circuits - the foundation of modern electrical power systems"
updated: "2025-12-26"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 10"
html: "../../../../offline/physics/electromagnetic-induction/ac-circuits/index.html"
extracted: "2026-11-23"
---

> Master AC voltage, current, phasors, and phase relationships in resistive and reactive circuits - the foundation of modern electrical power systems

## Movie Hook: The Power Grid

Every light bulb, every computer, every arc reactor prototype runs on **alternating current (AC)**. Why AC and not DC? Because Nikola Tesla won the “War of Currents” against Edison. AC can be easily transformed to high voltages for efficient long-distance transmission, then stepped down for safe home use. When you see those massive transmission towers carrying 400 kV lines in documentaries about power infrastructure, you’re seeing AC at work. The current reverses direction 50 or 60 times per second, yet it delivers power continuously!

## What is Alternating Current?

Unlike DC (constant direction), AC periodically reverses direction.

**Alternating Current (AC)**: Current that varies sinusoidally with time, periodically reversing direction.

**Key characteristics**:

- **Amplitude**: Maximum value
- **Frequency**: How many cycles per second (Hz)
- **Phase**: Position in the cycle at t = 0

**Why AC?**

- Easy voltage transformation (transformers)
- Efficient long-distance transmission
- Motors and generators naturally produce AC

## AC Voltage and Current

### Standard Form

**AC Voltage**:

$$V = V_0 \sin(\omega t + \phi_V)$$

**AC Current**:

$$I = I_0 \sin(\omega t + \phi_I)$$

Where:

- $V_0$, $I_0$ = Peak (maximum) values
- $\omega = 2\pi f$ = Angular frequency (rad/s)
- $f$ = Frequency (Hz)
- $T = 1/f$ = Time period (s)
- $\phi_V$, $\phi_I$ = Initial phases

**Phase difference**: $\Delta\phi = \phi_V - \phi_I$

## Memory Trick: “VIPER”

**V** = **I** × **P**hasor **E**quivalent **R**esistance

For AC circuits, replace R with impedance Z: $V = IZ$

## RMS (Root Mean Square) Values

**Problem**: Peak values aren’t useful for power calculations because AC varies with time.

**Solution**: Use **effective** or **RMS** values.

**Definition**: RMS value is the equivalent DC value that produces the same average power.

$$V_{rms} = \frac{V_0}{\sqrt{2}} = 0.707 V_0$$

$$I_{rms} = \frac{I_0}{\sqrt{2}} = 0.707 I_0$$

**Conversely**:

$$V_0 = \sqrt{2} \cdot V_{rms} = 1.414 V_{rms}$$

$$I_0 = \sqrt{2} \cdot I_{rms}$$

**Why $\sqrt{2}$?**

Average of $\sin^2(\omega t)$ over one cycle = $\frac{1}{2}$

So: $V_{rms} = \sqrt{\langle V^2 \rangle} = \sqrt{\frac{V_0^2}{2}} = \frac{V_0}{\sqrt{2}}$

**Example**: Household AC in India: 230 V means $V_{rms} = 230$ V

- Peak voltage: $V_0 = 230\sqrt{2} \approx 325$ V
- Frequency: 50 Hz

## Phasor Representation

**Phasor**: A rotating vector representing sinusoidal quantities.

**Why phasors?**

- Convert differential equations to algebra
- Visualize phase relationships
- Simplify AC circuit analysis

**Phasor diagram**:

- Length = Amplitude (peak or RMS)
- Angle = Phase
- Rotation: ω rad/s (counterclockwise)

**Convention**: Usually draw RMS phasors, not peak.

## AC Through Pure Resistance

**Circuit**: AC source connected to resistor R.

**Applied voltage**: $V = V_0\sin(\omega t)$

**By Ohm’s law** (applies instantaneously):

$$I = \frac{V}{R} = \frac{V_0\sin(\omega t)}{R} = I_0\sin(\omega t)$$

where $I_0 = \frac{V_0}{R}$

**Key observations**:

1. Current is **in phase** with voltage ($\Delta\phi = 0$)
2. $\frac{V_0}{I_0} = R$ (Ohm’s law holds for peak values)
3. $\frac{V_{rms}}{I_{rms}} = R$ (also holds for RMS values)

**Phasor diagram**: $\vec{V}$ and $\vec{I}$ point in same direction

**Power**:

$$P = V_{rms}I_{rms} = I_{rms}^2 R = \frac{V_{rms}^2}{R}$$

(Always positive - resistor always dissipates power)

## AC Through Pure Inductor

**Circuit**: AC source connected to inductor L (no resistance).

**Applied voltage**: $V = V_0\sin(\omega t)$

**Induced EMF** in inductor: $\mathcal{E} = -L\frac{dI}{dt}$

**For current to flow**: Applied voltage must overcome induced EMF

$$V = L\frac{dI}{dt}$$

$$V_0\sin(\omega t) = L\frac{dI}{dt}$$

**Integrating**:

$$I = \int \frac{V_0}{L}\sin(\omega t) dt = -\frac{V_0}{L\omega}\cos(\omega t) + C$$

For AC, average current = 0, so C = 0:

$$I = -\frac{V_0}{\omega L}\cos(\omega t) = \frac{V_0}{\omega L}\sin(\omega t - 90°)$$

Let $I_0 = \frac{V_0}{\omega L}$:

$$I = I_0\sin(\omega t - 90°)$$

**Key observations**:

1. Current **lags** voltage by **90°** ($\phi = -90°$)
2. $\frac{V_0}{I_0} = \omega L$ (Inductive reactance)

**Inductive Reactance**:

$$X_L = \omega L = 2\pi fL$$

**Unit**: Ohm (Ω), like resistance

**Properties**:

- $X_L \propto f$ (higher frequency → higher opposition)
- DC ($f = 0$): $X_L = 0$ (inductor is short circuit)
- High frequency: $X_L$ very large (inductor blocks high frequency)

**Mnemonic**: “**ELI the ICE man**”

- **ELI**: In **L** (inductor), **E** (EMF/voltage) leads **I** (current)

**Power**:

$$P(t) = VI = V_0\sin(\omega t) \cdot I_0\sin(\omega t - 90°)$$

Using $\sin(A)\sin(B) = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$:

$$P(t) = \frac{V_0I_0}{2}\sin(2\omega t)$$

**Average power** over one cycle: $\langle P \rangle = 0$

**Interpretation**: Inductor stores energy in magnetic field during one half-cycle, returns it during the next half. **No net power consumed!**

## AC Through Pure Capacitor

**Circuit**: AC source connected to capacitor C.

**Applied voltage**: $V = V_0\sin(\omega t)$

**Charge on capacitor**: $Q = CV = CV_0\sin(\omega t)$

**Current** (rate of charge flow):

$$I = \frac{dQ}{dt} = \frac{d}{dt}[CV_0\sin(\omega t)] = CV_0\omega\cos(\omega t)$$

$$I = CV_0\omega\sin(\omega t + 90°)$$

Let $I_0 = CV_0\omega$:

$$I = I_0\sin(\omega t + 90°)$$

**Key observations**:

1. Current **leads** voltage by **90°** ($\phi = +90°$)
2. $\frac{V_0}{I_0} = \frac{1}{\omega C}$ (Capacitive reactance)

**Capacitive Reactance**:

$$X_C = \frac{1}{\omega C} = \frac{1}{2\pi fC}$$

**Unit**: Ohm (Ω)

**Properties**:

- $X_C \propto \frac{1}{f}$ (higher frequency → lower opposition)
- DC ($f = 0$): $X_C = \infty$ (capacitor blocks DC)
- High frequency: $X_C$ very small (capacitor passes high frequency)

**Mnemonic**: “**ELI the ICE man**”

- **ICE**: In **C** (capacitor), **I** (current) leads **E** (EMF/voltage)

**Power**:

$$P(t) = VI = V_0\sin(\omega t) \cdot I_0\sin(\omega t + 90°) = -\frac{V_0I_0}{2}\sin(2\omega t)$$

**Average power**: $\langle P \rangle = 0$

**Interpretation**: Capacitor stores energy in electric field during one half-cycle, returns it during the next half. **No net power consumed!**

## Comparison: R, L, C in AC

| Element | Phase Relation | “Resistance” | Formula | Frequency Dependence | Power |
| --- | --- | --- | --- | --- | --- |
| **Resistor** | V and I in phase | Resistance R | $R$ | Constant | $P = I_{rms}^2R$ |
| **Inductor** | V leads I by 90° | Inductive reactance | $X_L = \omega L$ | $\propto f$ | $\langle P \rangle = 0$ |
| **Capacitor** | I leads V by 90° | Capacitive reactance | $X_C = \frac{1}{\omega C}$ | $\propto \frac{1}{f}$ | $\langle P \rangle = 0$ |

## Phasor Diagrams

### For R:

```fallback
I, V
   ↑
   |
   |
---+---→
```

Both in same direction

### For L:

```fallback
V
   ↑
   |
   |
---+---→ I
   |
```

V leads I by 90°

### For C:

```fallback
I
   ↑
   |
   |
---+---→ V
   |
```

I leads V by 90°

## Common Mistakes Students Make

❌ **Mistake 1**: Using peak values in power formulas
✅ **Reality**: $P = V_{rms}I_{rms}\cos\phi$, not $V_0I_0\cos\phi$

❌ **Mistake 2**: Confusing “leads” and “lags”
✅ **Reality**:

- L: Voltage leads current (“ELI”)
- C: Current leads voltage (“ICE”)

❌ **Mistake 3**: Adding peak values when phases differ
✅ **Reality**: Must use phasor addition (vector addition)

❌ **Mistake 4**: Thinking reactance is constant
✅ **Reality**: $X_L$ and $X_C$ depend on frequency!

❌ **Mistake 5**: Assuming inductor/capacitor consume power
✅ **Reality**: They store and return energy; average power = 0

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: An AC voltage $V = 100\sin(100\pi t)$ V is applied to a circuit. Find:
(a) Peak voltage
(b) RMS voltage
(c) Frequency

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $V = 100\sin(100\pi t)$ V</p><p>Comparing with $V = V_0\sin(\omega t)$:</p><p><strong>(a) Peak voltage</strong>:</p>$$V_0 = 100 \text{ V}$$<p><strong>(b) RMS voltage</strong>:</p>$$V_{rms} = \frac{V_0}{\sqrt{2}} = \frac{100}{\sqrt{2}} = 70.7 \text{ V}$$<p><strong>(c) Frequency</strong>:</p>$$\omega = 100\pi \text{ rad/s}$$<p></p>$$2\pi f = 100\pi$$<p></p>$$f = 50 \text{ Hz}$$<p><strong>Answers</strong>: (a) 100 V, (b) 70.7 V, (c) 50 Hz</p></div></details>

**Problem 1.2**: A 10 Ω resistor is connected to an AC source of 220 V (RMS), 50 Hz. Find the peak current.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $R = 10$ Ω, $V_{rms} = 220$ V, $f = 50$ Hz</p><p>RMS current:</p>$$I_{rms} = \frac{V_{rms}}{R} = \frac{220}{10} = 22 \text{ A}$$<p>Peak current:</p>$$I_0 = \sqrt{2} \cdot I_{rms} = 1.414 \times 22 = 31.1 \text{ A}$$<p><strong>Answer: 31.1 A</strong></p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: An inductor of 0.1 H is connected to a 230 V, 50 Hz AC source. Find:
(a) Inductive reactance
(b) RMS current
(c) Peak current

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L = 0.1$ H, $V_{rms} = 230$ V, $f = 50$ Hz</p><p><strong>(a) Inductive reactance</strong>:</p>$$X_L = 2\pi fL = 2\pi \times 50 \times 0.1 = 10\pi = 31.4 \text{ Ω}$$<p><strong>(b) RMS current</strong>:</p>$$I_{rms} = \frac{V_{rms}}{X_L} = \frac{230}{31.4} = 7.32 \text{ A}$$<p><strong>(c) Peak current</strong>:</p>$$I_0 = \sqrt{2} \cdot I_{rms} = 1.414 \times 7.32 = 10.35 \text{ A}$$<p><strong>Answers</strong>: (a) 31.4 Ω, (b) 7.32 A, (c) 10.35 A</p></div></details>

**Problem 2.2**: A capacitor of 100 μF is connected to a 100 V, 50 Hz AC supply. Calculate:
(a) Capacitive reactance
(b) RMS current
(c) Is current leading or lagging voltage, and by what angle?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $C = 100$ μF $= 100 \times 10^{-6}$ F, $V_{rms} = 100$ V, $f = 50$ Hz</p><p><strong>(a) Capacitive reactance</strong>:</p>$$X_C = \frac{1}{2\pi fC} = \frac{1}{2\pi \times 50 \times 100 \times 10^{-6}}$$<p></p>$$X_C = \frac{1}{2\pi \times 50 \times 10^{-4}} = \frac{10^4}{100\pi} = \frac{100}{\pi} = 31.8 \text{ Ω}$$<p><strong>(b) RMS current</strong>:</p>$$I_{rms} = \frac{V_{rms}}{X_C} = \frac{100}{31.8} = 3.14 \text{ A}$$<p><strong>(c) Phase relation</strong>:
For a pure capacitor, current <strong>leads</strong> voltage by <strong>90°</strong>.</p><p><strong>Answers</strong>: (a) 31.8 Ω, (b) 3.14 A, (c) Current leads by 90°</p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: Show that the average power consumed by a pure inductor over one complete cycle is zero.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Let voltage: $V = V_0\sin(\omega t)$</p><p>For pure inductor, current lags by 90°:</p>$$I = I_0\sin(\omega t - 90°) = -I_0\cos(\omega t)$$<p>Instantaneous power:</p>$$P(t) = V \cdot I = V_0\sin(\omega t) \cdot [-I_0\cos(\omega t)]$$<p></p>$$P(t) = -V_0I_0\sin(\omega t)\cos(\omega t)$$<p>Using $\sin(2\theta) = 2\sin\theta\cos\theta$:</p>$$\sin(\omega t)\cos(\omega t) = \frac{1}{2}\sin(2\omega t)$$<p>So:</p>$$P(t) = -\frac{V_0I_0}{2}\sin(2\omega t)$$<p><strong>Average over one cycle</strong> (period T = $\frac{2\pi}{\omega}$):</p>$$\langle P \rangle = \frac{1}{T}\int_0^T P(t) \, dt = \frac{1}{T}\int_0^T \left[-\frac{V_0I_0}{2}\sin(2\omega t)\right] dt$$

$$= -\frac{V_0I_0}{2T}\left[-\frac{1}{2\omega}\cos(2\omega t)\right]_0^T$$

$$= -\frac{V_0I_0}{2T} \cdot \left[-\frac{1}{2\omega}\right][\cos(2\omega T) - \cos(0)]$$<p>Since $T = \frac{2\pi}{\omega}$: $2\omega T = 4\pi$</p>$$\cos(4\pi) = \cos(0) = 1$$

$$\langle P \rangle = -\frac{V_0I_0}{2T} \cdot \left[-\frac{1}{2\omega}\right][1 - 1] = 0$$<p><strong>Conclusion</strong>: Average power = 0 ✓</p><p><strong>Physical meaning</strong>: Energy alternately stored in magnetic field and returned to source.</p></div></details>

**Problem 3.2**: An inductor has reactance 100 Ω at 50 Hz. At what frequency will it have reactance 200 Ω?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: At $f_1 = 50$ Hz, $X_{L1} = 100$ Ω
Find: $f_2$ when $X_{L2} = 200$ Ω</p><p><strong>For inductor</strong>: $X_L = 2\pi fL$</p><p>At frequency $f_1$:</p>$$X_{L1} = 2\pi f_1 L = 100$$<p></p>$$L = \frac{100}{2\pi f_1} = \frac{100}{2\pi \times 50} = \frac{1}{\pi} \text{ H}$$<p>At frequency $f_2$:</p>$$X_{L2} = 2\pi f_2 L = 200$$<p></p>$$2\pi f_2 \times \frac{1}{\pi} = 200$$<p></p>$$2f_2 = 200$$<p></p>$$f_2 = 100 \text{ Hz}$$<p><strong>Alternative (faster) method</strong>:</p><p>Since $X_L \propto f$:</p>$$\frac{X_{L2}}{X_{L1}} = \frac{f_2}{f_1}$$<p></p>$$\frac{200}{100} = \frac{f_2}{50}$$<p></p>$$f_2 = 100 \text{ Hz}$$<p><strong>Answer: 100 Hz</strong></p><p><strong>Key insight</strong>: Doubling frequency doubles inductive reactance.</p></div></details>

## Applications of AC Circuits

1. **Power Distribution**: Entire electrical grid runs on AC
2. **Transformers**: Voltage conversion (only works with AC)
3. **Filters**: Separate frequencies (audio, radio)
4. **Tuning Circuits**: Select specific frequencies (radio, TV)
5. **Power Supplies**: Convert AC to DC (with rectifiers)
6. **Induction Motors**: Most common industrial motors
7. **Wireless Communication**: Radio waves are AC electromagnetic fields

## Why AC Won Over DC

**Advantages of AC**:

1. **Easy voltage transformation**: Step up for transmission, step down for use
2. **Lower transmission losses**: High voltage → Low current → $P_{loss} = I^2R$ small
3. **Simpler generators**: Naturally produce AC
4. **No commutator wear**: DC motors need brushes that wear out

**Nikola Tesla vs Thomas Edison** (late 1800s):

- Tesla championed AC (supported by Westinghouse)
- Edison promoted DC
- AC won because of transformers and long-distance efficiency

## Connection to Other Chapters

- [**Faraday’s Law**](../faradays-law/index.md): AC generators use rotating coils
- [**Self Inductance**](../self-inductance/index.md): Basis of inductive reactance
- [**LCR Circuits**](../lcr-circuits/index.md): Combination of R, L, C elements
- [**Transformers**](../transformers/index.md): AC voltage transformation
- [**Electromagnetic Waves**](../../electromagnetic-waves/index.md): AC currents generate EM waves

## Key Takeaways

✓ AC varies sinusoidally: $V = V_0\sin(\omega t)$
✓ RMS values: $V_{rms} = \frac{V_0}{\sqrt{2}}$ (effective DC equivalent)
✓ **Pure R**: V and I in phase; Power = $I_{rms}^2R$
✓ **Pure L**: V leads I by 90°; $X_L = \omega L$; Average power = 0
✓ **Pure C**: I leads V by 90°; $X_C = \frac{1}{\omega C}$; Average power = 0
✓ Phasors simplify AC analysis
✓ “**ELI the ICE man**”: Phase relationships
✓ Reactances are frequency-dependent

## Formula Summary

**AC Voltage/Current**:

$$V = V_0\sin(\omega t), \quad I = I_0\sin(\omega t + \phi)$$

**RMS Values**:

$$V_{rms} = \frac{V_0}{\sqrt{2}}, \quad I_{rms} = \frac{I_0}{\sqrt{2}}$$

**Pure Resistor**:

- Phase: 0° (in phase)
- $I_0 = \frac{V_0}{R}$

**Pure Inductor**:

- Phase: V leads I by 90°
- $X_L = \omega L = 2\pi fL$
- $I_0 = \frac{V_0}{X_L}$

**Pure Capacitor**:

- Phase: I leads V by 90°
- $X_C = \frac{1}{\omega C} = \frac{1}{2\pi fC}$
- $I_0 = \frac{V_0}{X_C}$

**Angular frequency**:

$$\omega = 2\pi f = \frac{2\pi}{T}$$

---

*Next Topic*: [LCR Circuits](../lcr-circuits/index.md) - Series and parallel LCR circuits, impedance, resonance, and power factor

From TestGuru · our mock-test platform

## You've read AC Circuits - Alternating Current Fundamentals.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Fac-circuits%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-19

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


### inline-script-20

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/ac-circuits/",this.page.identifier="/physics/electromagnetic-induction/ac-circuits/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-21

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423215896891"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423215896891")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423216008908"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423216008908")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-3

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423216030192"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423216030192")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-4

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423216153439"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423216153439")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-5

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423216304618"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423216304618")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/ac-circuits/](https://jeenotes.in/physics/electromagnetic-induction/ac-circuits/) · raw HTML: `offline/physics/electromagnetic-induction/ac-circuits/index.html`_
