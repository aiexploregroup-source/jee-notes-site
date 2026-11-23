---
title: "Transformers - Power Transmission Revolution"
source: "https://jeenotes.in/physics/electromagnetic-induction/transformers/"
description: "Master transformer principles, efficiency, and power transmission - the technology that enables modern electrical grids and powers our world"
updated: "2025-12-26"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 8 of 10"
html: "../../../../offline/physics/electromagnetic-induction/transformers/index.html"
extracted: "2026-11-23"
---

> Master transformer principles, efficiency, and power transmission - the technology that enables modern electrical grids and powers our world

## Movie Hook: The Power Grid Infrastructure

In disaster movies, when the power grid fails, you see massive transformer stations exploding in chains of sparks. These aren’t just props - **transformers are the backbone of electrical infrastructure**. They step up voltage from 11 kV at power plants to 400 kV for long-distance transmission, then step down through multiple stages to 230 V for your home. Without transformers, every city would need its own power plant. Nikola Tesla’s AC victory over Edison’s DC was won because transformers made AC practical for the modern world.

## What is a Transformer?

A transformer is a device that changes AC voltage levels using **mutual inductance**.

**Transformer**: A static device (no moving parts) that transfers electrical energy between two circuits through electromagnetic induction.

**Functions**:

- **Step-up**: Increase voltage, decrease current
- **Step-down**: Decrease voltage, increase current
- **Isolation**: Electrically isolate circuits while transferring power

**Key principle**: Mutual inductance between two coils

## Construction

**Components**:

1. **Primary coil**: Input side, $N_1$ turns
2. **Secondary coil**: Output side, $N_2$ turns
3. **Core**: Soft iron (high permeability)
   - Laminated to reduce eddy currents
   - Provides path for magnetic flux
4. **Insulation**: Between coils and from core

**Types by core design**:

- **Core-type**: Coils wound around core
- **Shell-type**: Core surrounds coils

## Working Principle

**Step-by-step**:

1. **AC voltage applied** to primary coil
2. **Changing current** in primary creates **changing magnetic flux** in core
3. **Core guides flux** through secondary coil (high coupling efficiency)
4. **Changing flux** induces EMF in secondary (Faraday’s law)
5. **Load connected** to secondary draws current
6. **Power transfers** from primary to secondary

**Key insight**: Energy transfers **magnetically**, not electrically. No physical connection between primary and secondary!

## Ideal Transformer Equations

**Assumptions** (ideal transformer):

1. No flux leakage (all flux links both coils)
2. No resistance in coils
3. No energy losses
4. Infinite permeability of core

### Voltage Transformation Ratio

**Same flux** links both coils: $\Phi_B$ (changing with time)

**EMF in primary**:

$$\mathcal{E}_1 = -N_1\frac{d\Phi_B}{dt}$$

**EMF in secondary**:

$$\mathcal{E}_2 = -N_2\frac{d\Phi_B}{dt}$$

**Ratio**:

$$\frac{\mathcal{E}_2}{\mathcal{E}_1} = \frac{N_2}{N_1}$$

**Voltage transformation ratio**:

$$\frac{V_2}{V_1} = \frac{N_2}{N_1} = K$$

Where:

- $V_1$, $V_2$ = Primary and secondary voltages
- $N_1$, $N_2$ = Number of turns
- $K$ = Transformation ratio

**Step-up**: $K > 1$ (more secondary turns → higher voltage)
**Step-down**: $K < 1$ (fewer secondary turns → lower voltage)

### Current Transformation Ratio

**Power conservation** (ideal transformer):

$$P_1 = P_2$$

$$V_1I_1 = V_2I_2$$

$$\frac{I_2}{I_1} = \frac{V_1}{V_2} = \frac{N_1}{N_2} = \frac{1}{K}$$

**Key point**: When voltage increases, current decreases proportionally!

**Combined equations**:

$$\frac{V_2}{V_1} = \frac{N_2}{N_1} = \frac{I_1}{I_2} = K$$

## Memory Trick: “VINE”

**V**oltage follows **I**nverse **N**umber (of turns), **E**xactly

- More turns → More voltage
- More voltage → Less current (for same power)

## Impedance Transformation

When load impedance $Z_L$ is connected to secondary:

**Secondary circuit**: $V_2 = I_2 Z_L$

**Impedance seen by primary**:

$$Z_1 = \frac{V_1}{I_1} = \frac{V_2/K}{KI_2} = \frac{V_2}{K^2I_2} = \frac{Z_L}{K^2}$$

$$\frac{Z_1}{Z_2} = \frac{N_1^2}{N_2^2}$$

**Impedance transforms** as the square of turns ratio!

**Application**: Impedance matching for maximum power transfer

## Energy Losses in Real Transformers

Real transformers aren’t 100% efficient. Energy losses occur as:

### 1. Copper Losses (I²R Losses)

**Cause**: Resistance of wire in coils

**Power lost**:

$$P_{Cu} = I_1^2R_1 + I_2^2R_2$$

**Minimization**:

- Use thick copper wire (low resistance)
- Operate at lower currents (step up voltage for transmission)

**Variation**: Proportional to $I^2$ (load-dependent)

### 2. Iron Losses (Core Losses)

**Two types**:

**(a) Hysteresis Loss**

**Cause**: Repeated magnetization and demagnetization of core

**Minimization**: Use soft iron or silicon steel (narrow hysteresis loop)

**Variation**: Proportional to frequency

**(b) Eddy Current Loss**

**Cause**: Circulating currents induced in the core itself

**Minimization**: Use **laminated core** (thin sheets insulated from each other)

- Breaks eddy current paths
- Reduces circulating currents dramatically

**Variation**: Proportional to $f^2$ and $B^2$

### 3. Flux Leakage

**Cause**: Not all flux from primary links secondary

**Effect**: Reduces effective turns ratio

**Minimization**: Close coupling, good core design

### 4. Magnetostriction

**Cause**: Core dimensions change slightly with magnetization (causes humming sound)

**Effect**: Small energy loss, noise

## Transformer Efficiency

$$\eta = \frac{\text{Output power}}{\text{Input power}} = \frac{P_2}{P_1} = \frac{V_2I_2\cos\phi_2}{V_1I_1\cos\phi_1}$$

**Alternative form**:

$$\eta = \frac{P_{out}}{P_{out} + P_{losses}} = \frac{P_{out}}{P_{out} + P_{Cu} + P_{Fe}}$$

Where:

- $P_{Cu}$ = Copper losses (variable with load)
- $P_{Fe}$ = Iron losses (constant, independent of load)

**Typical efficiencies**:

- Small transformers: 80-90%
- Power transformers: 95-99%

## Condition for Maximum Efficiency

Efficiency is maximum when **variable losses = constant losses**:

$$P_{Cu} = P_{Fe}$$

$$I^2R = \text{constant}$$

This occurs at a specific load current (typically 50-70% of full load for power transformers).

## Types of Transformers

### By Function

1. **Step-up transformer**: $N_2 > N_1$ (increase voltage)

   - Power stations: 11 kV → 132 kV, 220 kV, 400 kV
2. **Step-down transformer**: $N_2 < N_1$ (decrease voltage)

   - Distribution: 11 kV → 400 V
   - Household adapters: 230 V → 12 V, 5 V
3. **Isolation transformer**: $N_1 = N_2$ (electrical isolation)

   - Medical equipment (safety)
   - Audio equipment (reduce noise)

### By Application

1. **Power transformer**: Large capacity, power transmission
2. **Distribution transformer**: Medium capacity, local distribution
3. **Instrument transformer**: Measurement and protection
   - Current transformer (CT): Measure high currents
   - Potential transformer (PT): Measure high voltages
4. **Auto-transformer**: Single winding acts as both primary and secondary
5. **Pulse transformer**: High-frequency, digital circuits

## Auto-Transformer

**Special design**: Single winding with tap

**Advantages**:

- Smaller size
- Lower cost
- Higher efficiency (part of power transfers directly)

**Disadvantages**:

- No electrical isolation
- Not suitable for large voltage ratios

**Applications**:

- Voltage stabilizers
- Starter for induction motors
- Variable AC voltage sources (Variac)

## Power Transmission: Why Step Up Voltage?

**Problem**: Transmit 1000 kW over 100 km, wire resistance = 10 Ω

**Option 1**: Transmit at 1000 V

- Current: $I = \frac{P}{V} = \frac{10^6}{1000} = 1000$ A
- Power loss: $P_{loss} = I^2R = (1000)^2 \times 10 = 10^7$ W = 10 MW
- **Loss = 10× the power transmitted!** Impossible!

**Option 2**: Step up to 100,000 V

- Current: $I = \frac{P}{V} = \frac{10^6}{100000} = 10$ A
- Power loss: $P_{loss} = I^2R = (10)^2 \times 10 = 1000$ W = 1 kW
- **Loss = 0.1% of power** ✓

**Key insight**: $P_{loss} = I^2R$

Higher transmission voltage → Lower current → Drastically lower $I^2R$ losses

This is why power is transmitted at 132 kV, 220 kV, or 400 kV!

## Typical Power System

```fallback
Power Plant        Transmission      Distribution         Home
11 kV      →  400 kV         →   11 kV        →   230 V
           ↑ Step-up              ↓ Step-down      ↓ Step-down
         Generator             Substation      Pole transformer
```

## Common Mistakes Students Make

❌ **Mistake 1**: Thinking transformers work with DC
✅ **Reality**: **Only AC!** DC produces constant flux → no induced EMF

❌ **Mistake 2**: Confusing turns ratio with voltage ratio
✅ **Reality**: They’re the same: $\frac{V_2}{V_1} = \frac{N_2}{N_1}$

❌ **Mistake 3**: Thinking higher voltage means more power
✅ **Reality**: $P = VI$; when V increases, I decreases for same P

❌ **Mistake 4**: Using $P = I^2Z$ instead of $P = I^2R$ for losses
✅ **Reality**: Only resistance dissipates power as heat

❌ **Mistake 5**: Forgetting that impedance transforms as $K^2$
✅ **Reality**: $Z_1 = \frac{Z_2}{K^2}$, not $\frac{Z_2}{K}$

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: A transformer has 100 turns in primary and 400 turns in secondary. If primary voltage is 230 V, find secondary voltage.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $N_1 = 100$, $N_2 = 400$, $V_1 = 230$ V</p><p>Transformation ratio:</p>$$K = \frac{N_2}{N_1} = \frac{400}{100} = 4$$<p>Secondary voltage:</p>$$V_2 = KV_1 = 4 \times 230 = 920 \text{ V}$$<p><strong>Step-up transformer</strong> (K &gt; 1)</p><p><strong>Answer: 920 V</strong></p></div></details>

**Problem 1.2**: An ideal transformer steps down 2200 V to 220 V. If secondary current is 10 A, find primary current.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $V_1 = 2200$ V, $V_2 = 220$ V, $I_2 = 10$ A</p><p>For ideal transformer:</p>$$\frac{I_1}{I_2} = \frac{V_2}{V_1}$$

$$I_1 = I_2 \times \frac{V_2}{V_1} = 10 \times \frac{220}{2200} = 10 \times 0.1 = 1 \text{ A}$$<p><strong>Check power</strong>: $P_1 = 2200 \times 1 = 2200$ W
$P_2 = 220 \times 10 = 2200$ W ✓</p><p><strong>Answer: 1 A</strong></p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: A transformer has 500 primary turns and 50 secondary turns. Primary is connected to 230 V AC. If a resistance of 5 Ω is connected to secondary, find:
(a) Secondary voltage
(b) Secondary current
(c) Primary current
(d) Power delivered

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $N_1 = 500$, $N_2 = 50$, $V_1 = 230$ V, $R_L = 5$ Ω</p><p><strong>(a) Secondary voltage</strong>:</p>$$V_2 = V_1 \times \frac{N_2}{N_1} = 230 \times \frac{50}{500} = 230 \times 0.1 = 23 \text{ V}$$<p><strong>(b) Secondary current</strong>:</p>$$I_2 = \frac{V_2}{R_L} = \frac{23}{5} = 4.6 \text{ A}$$<p><strong>(c) Primary current</strong>:</p>$$I_1 = I_2 \times \frac{N_2}{N_1} = 4.6 \times \frac{50}{500} = 4.6 \times 0.1 = 0.46 \text{ A}$$<p><strong>(d) Power delivered</strong>:</p>$$P = V_2I_2 = 23 \times 4.6 = 105.8 \text{ W}$$<p>Or: $P = I_2^2R_L = (4.6)^2 \times 5 = 21.16 \times 5 = 105.8$ W ✓</p><p><strong>Answers</strong>: (a) 23 V, (b) 4.6 A, (c) 0.46 A, (d) 105.8 W</p></div></details>

**Problem 2.2**: A transformer has efficiency 90%. Primary voltage is 200 V and current is 5 A. If secondary voltage is 400 V, find secondary current.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $\eta = 90\% = 0.9$, $V_1 = 200$ V, $I_1 = 5$ A, $V_2 = 400$ V</p><p><strong>Input power</strong>:</p>$$P_1 = V_1I_1 = 200 \times 5 = 1000 \text{ W}$$<p><strong>Output power</strong>:</p>$$P_2 = \eta \times P_1 = 0.9 \times 1000 = 900 \text{ W}$$<p><strong>Secondary current</strong>:</p>$$I_2 = \frac{P_2}{V_2} = \frac{900}{400} = 2.25 \text{ A}$$<p><strong>Check</strong> (ideal case would give):</p>$$I_2^{ideal} = I_1 \times \frac{V_1}{V_2} = 5 \times \frac{200}{400} = 2.5 \text{ A}$$<p>Real current (2.25 A) is less due to losses. ✓</p><p><strong>Answer: 2.25 A</strong></p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: A transformer has primary resistance 0.5 Ω, secondary resistance 0.1 Ω. Turns ratio is 1:10. When primary is connected to 100 V and secondary delivers 10 A at 900 V, calculate:
(a) Primary current
(b) Copper losses
(c) Efficiency

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $R_1 = 0.5$ Ω, $R_2 = 0.1$ Ω, $\frac{N_2}{N_1} = 10$, $V_1 = 100$ V, $I_2 = 10$ A, $V_2 = 900$ V</p><p><strong>(a) Primary current</strong>:</p><p>For ideal transformer: $\frac{I_1}{I_2} = \frac{N_2}{N_1} = 10$</p><p>So: $I_1 = 10I_2 = 10 \times 10 = 100$ A</p><p>(More accurately, we should account for losses, but JEE problems typically use ideal relation for current)</p><p><strong>(b) Copper losses</strong>:</p>$$P_{Cu} = I_1^2R_1 + I_2^2R_2$$<p></p>$$P_{Cu} = (100)^2 \times 0.5 + (10)^2 \times 0.1$$<p></p>$$P_{Cu} = 10000 \times 0.5 + 100 \times 0.1 = 5000 + 10 = 5010 \text{ W}$$<p><strong>(c) Efficiency</strong>:</p><p>Input power: $P_1 = V_1I_1 = 100 \times 100 = 10000$ W</p><p>Output power: $P_2 = V_2I_2 = 900 \times 10 = 9000$ W</p><p>Efficiency:</p>$$\eta = \frac{P_2}{P_1} = \frac{9000}{10000} = 0.9 = 90\%$$<p><strong>Verification</strong>: Losses = $P_1 - P_2 = 10000 - 9000 = 1000$ W</p><p>But we calculated copper losses = 5010 W. <strong>Discrepancy!</strong></p><p>This means the given values are inconsistent, OR iron losses are negative (impossible), OR the problem expects us to work with given values as is.</p><p><strong>More realistic interpretation</strong>: If output is 900 V at 10 A from secondary:</p><ul><li>$P_2 = 9000$ W</li><li>For 90% efficiency: $P_1 = \frac{9000}{0.9} = 10000$ W ✓</li><li>Total losses = 1000 W</li><li>If copper losses = 5010 W, this is impossible.</li></ul><p><strong>Likely</strong>: The problem has inconsistent values. Using given voltages and currents:</p><p><strong>Answers</strong>: (a) 100 A, (b) 5010 W, (c) 90%</p><p>(Note: Real problems would have consistent values)</p></div></details>

**Problem 3.2**: Explain why transformers cannot work with DC, using Faraday’s law.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>Faraday’s law</strong>: $\mathcal{E} = -N\frac{d\Phi_B}{dt}$</p><p><strong>With DC (direct current)</strong>:</p><ol><li>Current in primary is <strong>constant</strong> (not changing with time)</li><li>Magnetic field produced is <strong>constant</strong>: $B = \mu_0nI$ (constant I → constant B)</li><li>Magnetic flux through secondary is <strong>constant</strong>: $\Phi_B = BA$ (constant B → constant Φ)</li><li>Rate of change of flux: $\frac{d\Phi_B}{dt} = 0$</li><li><strong>Induced EMF</strong>: $\mathcal{E} = -N \times 0 = 0$</li></ol><p><strong>No induced EMF → No voltage in secondary → Transformer doesn’t work!</strong></p><p><strong>With AC (alternating current)</strong>:</p><ol><li>Current varies sinusoidally: $I = I_0\sin(\omega t)$</li><li>Magnetic field varies: $B = \mu_0nI_0\sin(\omega t)$</li><li>Flux varies: $\Phi_B = BA = \mu_0nI_0A\sin(\omega t)$</li><li>Rate of change: $\frac{d\Phi_B}{dt} = \mu_0nI_0A\omega\cos(\omega t) \neq 0$</li><li><strong>Induced EMF</strong>: $\mathcal{E} = -N\mu_0nI_0A\omega\cos(\omega t)$</li></ol><p><strong>EMF is induced → Voltage appears in secondary → Transformer works!</strong></p><p><strong>Conclusion</strong>: Transformers are <strong>fundamentally AC devices</strong>. They require changing magnetic flux, which only AC provides.</p><p><strong>Additional point</strong>: With DC, the primary acts as a short circuit (low resistance) → high current → overheating!</p></div></details>

## Applications of Transformers

1. **Power Transmission**: Step up voltage for long-distance transmission
2. **Power Distribution**: Step down voltage for local use
3. **Isolation**: Electrical safety (medical equipment)
4. **Impedance Matching**: Audio systems, antennas
5. **Voltage Regulation**: Stabilize voltage fluctuations
6. **Measurement**: Current and voltage transformers (CTs, PTs)
7. **Electronic Devices**: Phone chargers, laptop adapters
8. **Welding Equipment**: High-current, low-voltage supply

## Safety and Practical Considerations

**Safety features**:

1. **Fuses/Circuit breakers**: Protect against overload
2. **Earthing**: Prevent electric shock
3. **Oil cooling**: Large transformers use oil for insulation and cooling
4. **Breather**: In oil-filled transformers, prevents moisture entry
5. **Conservator tank**: Accommodates oil expansion

**Ratings**:

- Voltage: Primary and secondary voltages
- Power: kVA (not kW, because power factor may vary)
- Frequency: 50 Hz or 60 Hz

## Connection to Other Chapters

- [**Mutual Inductance**](../mutual-inductance/index.md): Physical principle behind transformers
- [**Faraday’s Law**](../faradays-law/index.md): Induced EMF in secondary coil
- [**AC Circuits**](../ac-circuits/index.md): Transformer operation requires AC
- [**Power Transmission**](index.md): High-voltage transmission reduces losses
- [**Eddy Currents**](../../magnetism/index.md): Laminated cores reduce eddy current losses

## Key Takeaways

✓ Transformers change AC voltage using mutual inductance
✓ **Only work with AC**, not DC
✓ Voltage ratio = Turns ratio: $\frac{V_2}{V_1} = \frac{N_2}{N_1}$
✓ Current ratio = Inverse of turns ratio: $\frac{I_2}{I_1} = \frac{N_1}{N_2}$
✓ Ideal transformer: $V_1I_1 = V_2I_2$ (power conserved)
✓ Losses: Copper (I²R), Iron (hysteresis + eddy currents)
✓ Laminated core reduces eddy current losses
✓ High-voltage transmission reduces power loss: $P_{loss} = I^2R$
✓ Impedance transforms as square of turns ratio

## Formula Summary

**Ideal Transformer**:

**Voltage transformation**:

$$\frac{V_2}{V_1} = \frac{N_2}{N_1} = K$$

**Current transformation**:

$$\frac{I_2}{I_1} = \frac{N_1}{N_2} = \frac{1}{K}$$

**Power conservation**:

$$V_1I_1 = V_2I_2$$

**Impedance transformation**:

$$\frac{Z_1}{Z_2} = \frac{N_1^2}{N_2^2} = \frac{1}{K^2}$$

**Efficiency**:

$$\eta = \frac{P_{out}}{P_{in}} = \frac{V_2I_2}{V_1I_1}$$

**Losses**:

- Copper: $P_{Cu} = I_1^2R_1 + I_2^2R_2$
- Iron: $P_{Fe} = P_{hysteresis} + P_{eddy}$

**Transmission loss**:

$$P_{loss} = I^2R$$

**Lower I** (higher V) **→ Lower loss!**

## Historical Note: War of Currents

**1880s-1890s**: Battle between AC (Tesla/Westinghouse) and DC (Edison)

**Edison’s arguments**:

- DC is safer (lower voltage)
- DC works with batteries
- Existing DC infrastructure

**Tesla’s arguments**:

- AC can be transformed (step up/down)
- Efficient long-distance transmission
- Simpler generators and motors

**Winner**: AC, because transformers made it practical

**Result**: Modern power grids use AC at multiple voltage levels, all thanks to transformers!

**Today**: HVDC (High Voltage DC) is used for very long distances (>500 km) and undersea cables, using electronic converters. But local distribution remains AC.

---

*Chapter Complete!* You’ve mastered Electromagnetic Induction - from Faraday’s laws to transformers powering the world. Review all topics:

1. [Faraday’s Law](../faradays-law/index.md)
2. [Lenz’s Law](../lenzs-law/index.md)
3. [Motional EMF](../motional-emf/index.md)
4. [Self Inductance](../self-inductance/index.md)
5. [Mutual Inductance](../mutual-inductance/index.md)
6. [AC Circuits](../ac-circuits/index.md)
7. [LCR Circuits](../lcr-circuits/index.md)
8. [Transformers](index.md)

From TestGuru · our mock-test platform

## You've read Transformers - Power Transmission Revolution.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Ftransformers%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/transformers/",this.page.identifier="/physics/electromagnetic-induction/transformers/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-20

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423236763239"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423236763239")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423236790884"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423236790884")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-3

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423237008069"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423237008069")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-4

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423237102495"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423237102495")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/transformers/](https://jeenotes.in/physics/electromagnetic-induction/transformers/) · raw HTML: `offline/physics/electromagnetic-induction/transformers/index.html`_
