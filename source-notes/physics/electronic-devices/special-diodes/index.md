---
title: "Special Purpose Diodes - LED, Photodiode, Solar Cell"
source: "https://jeenotes.in/physics/electronic-devices/special-diodes/"
description: "Master LED, photodiode, and solar cell physics for JEE with smartphone screen and solar panel applications"
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 9"
html: "../../../../offline/physics/electronic-devices/special-diodes/index.html"
extracted: "2026-11-23"
---

> Master LED, photodiode, and solar cell physics for JEE with smartphone screen and solar panel applications

## Prerequisites

Before studying this topic, make sure you understand:

- [p-n Junction Formation](../pn-junction/index.md) - Forward and reverse bias concepts
- [Diode Characteristics](../diode-rectifier/index.md) - Basic diode operation
- [Semiconductors](../semiconductors/index.md) - Band theory and energy gaps

## The Hook: How Does Your Phone Screen Glow?

> **★ Key point · Connect: Smartphone Screen → LEDs**
>
> Your **smartphone screen** contains **millions of tiny LEDs** (Light Emitting Diodes)! Each pixel has red, green, and blue LEDs that can mix to create 16 million colors.
>
> **Mind-blowing facts:**
>
> - Modern OLED screens have **>800 pixels per inch** - that’s over **2 million LEDs** in a 6-inch screen!

> - When you dim your screen to save battery, you’re literally reducing current through billions of p-n junctions

> - The **solar panel on a calculator** is essentially running LEDs in reverse - absorbing light instead of emitting it!
>
> How does a simple forward-biased p-n junction emit light? And how does the reverse process generate electricity from sunlight? Let’s explore these miracles of semiconductor physics!

## Interactive Demo

See how LEDs emit light and photodiodes detect it:

---

## Light Emitting Diode (LED)

### What is an LED?

**LED** = Forward-biased p-n junction that emits light when current flows

**Basic principle:**

- Electrons from n-side cross junction
- Recombine with holes in p-side
- Energy released as **photons** (light)!

### Energy and Wavelength

When electron-hole recombination occurs:

**Energy of emitted photon:**

$$\boxed{E = h\nu = \frac{hc}{\lambda} = E_g}$$

where:

- $E_g$ = band gap energy
- $h$ = Planck’s constant ($6.63 \times 10^{-34}$ J·s)
- $c$ = speed of light ($3 \times 10^8$ m/s)
- $\lambda$ = wavelength of emitted light

**Wavelength formula:**

$$\boxed{\lambda = \frac{hc}{E_g} = \frac{1240}{E_g} \text{ nm}}$$

(when $E_g$ is in eV)

> **◐ In simple terms · Why Different LED Colors?**
>
> Different semiconductor materials → Different band gaps → Different colors!
>
> | Material | Band Gap ($E_g$) | Wavelength | Color |

> | --- | --- | --- | --- |

> | **GaAs** (Gallium Arsenide) | 1.4 eV | 886 nm | Infrared (IR) |

> | **GaAsP** | 1.9 eV | 650 nm | Red |

> | **GaP** | 2.2 eV | 560 nm | Green |

> | **GaN** | 2.9 eV | 430 nm | Blue |

> | **InGaN** | 2.7-3.4 eV | 365-460 nm | Violet to Blue |
>
> **White LED** = Blue LED + Yellow phosphor coating!
>
> Silicon ($E_g = 1.1$ eV) and Germanium ($E_g = 0.7$ eV) **don’t work as LEDs** - they’re indirect band gap semiconductors (energy goes to vibrations, not light).

### LED Characteristics

**Advantages:**

1. **High efficiency** - 90% energy → light (vs 5% for incandescent bulbs!)
2. **Long life** - 50,000+ hours (vs 1,000 for bulbs)
3. **Fast switching** - nanosecond response time
4. **Small size** - can be microscopic
5. **Low voltage** - typically 1.5-3.5V
6. **Monochromatic** - pure color without filters

**Forward voltage ($V_f$):**

- Red LED: ~1.8V
- Green LED: ~2.0V
- Blue LED: ~3.0V
- White LED: ~3.2V

Higher energy (shorter wavelength) → Higher voltage needed!

**Typical current:** 10-20 mA

**Power:** $P = V_f \times I$ ≈ 20-60 mW

### LED Circuit

**Never connect LED directly to battery!** Always use current-limiting resistor.

```fallback
+V ——R——┬——▷|——⏚
           LED
```

**Resistor calculation:**

$$\boxed{R = \frac{V_s - V_f}{I_f}}$$

where:

- $V_s$ = supply voltage
- $V_f$ = LED forward voltage
- $I_f$ = desired LED current

**Example:** Power red LED (1.8V, 20mA) from 5V battery:

$$R = \frac{5 - 1.8}{0.02} = \frac{3.2}{0.02} = 160 \text{ Ω}$$

Use standard 180Ω resistor.

> **★ Key point · Why LEDs Beat Bulbs**
>
> **Incandescent bulb:**
>
> - Heats filament to 3000K → mostly infrared heat!

> - Only 5% energy becomes visible light

> - 95% wasted as heat
>
> **LED:**
>
> - Direct band gap recombination → photons!

> - 80-90% energy becomes light

> - Cool to touch, saves energy
>
> **This is why:**
>
> - LED bulbs use 1/10th the power

> - Last 50× longer

> - Global push to replace all incandescent bulbs with LEDs!
>
> Your smartphone screen would be impossible with bulbs - it would melt!

---

## Photodiode

### What is a Photodiode?

**Photodiode** = Reverse-biased p-n junction that detects light

**Exactly opposite of LED:**

- LED: Current → Light
- Photodiode: Light → Current

### Working Principle

**In dark (no light):**

- Reverse-biased junction
- Only small reverse saturation current $I_0$ flows
- Called **dark current** (~nA)

**When illuminated:**

- Photons create electron-hole pairs in depletion region
- Electric field separates them immediately
- Electrons → n-side, Holes → p-side
- **Photo-current** flows (proportional to light intensity)

**Total current:**

$$\boxed{I = I_0 + I_L}$$

where:

- $I_0$ = dark current (constant)
- $I_L$ = photo-current (proportional to light intensity)

### Photo-current vs Illuminance

$$\boxed{I_L \propto \Phi}$$

where $\Phi$ = illuminance (light intensity)

**Linearity:** Photo-current is directly proportional to light intensity over wide range!

**Responsivity ($R$):**

$$\boxed{R = \frac{I_L}{P_{opt}}}$$

Typical values: 0.4-0.6 A/W (amperes per watt of light)

### Applications of Photodiode

1. **Light detection** - cameras, light sensors
2. **Optical communication** - fiber optic receivers
3. **Barcode scanners** - detecting reflected light patterns
4. **Remote controls** - IR photodiodes detect TV remote signals
5. **Safety systems** - burglar alarms, automatic doors
6. **Medical instruments** - pulse oximeters (measuring blood oxygen)

> **◐ In simple terms · Your Phone's Ambient Light Sensor**
>
> Ever noticed your phone screen **automatically dims in dark** and **brightens in sunlight**?
>
> That’s a **photodiode** at work!
>
> - Measures ambient light continuously

> - Adjusts screen brightness accordingly

> - Saves battery in dark conditions

> - Prevents eye strain in bright conditions
>
> Same principle used in:
>
> - Auto-brightness in laptops

> - Street lights that turn on at dusk

> - Camera exposure control

### Photodiode vs LED Comparison

| Property | LED | Photodiode |
| --- | --- | --- |
| Bias | Forward | Reverse |
| Function | Emits light | Detects light |
| Input | Electric current | Light photons |
| Output | Light photons | Electric current |
| Material | GaAs, GaP, GaN | Si, Ge (also GaAs) |
| Current | ~10-20 mA | ~µA (depends on light) |

**Beautiful symmetry:** LEDs and photodiodes are **inverse processes**!

---

## Solar Cell (Photovoltaic Cell)

### What is a Solar Cell?

**Solar cell** = p-n junction that **generates voltage** from light

**Key difference from photodiode:**

- Photodiode: Requires external battery (reverse bias)
- Solar cell: **NO external source** - generates its own voltage!

### Working Principle

**When light falls on p-n junction:**

1. **Photon absorption:**

   - Photons with $E > E_g$ create electron-hole pairs
   - Generated throughout p-region, n-region, and depletion region
2. **Carrier separation:**

   - **In depletion region:** Built-in field separates them
     - Electrons → n-side
     - Holes → p-side
   - **Outside depletion:** Minority carriers diffuse to junction, then separate
3. **Voltage generation:**

   - Accumulation of electrons on n-side
   - Accumulation of holes on p-side
   - Creates **photo-voltage** across junction
4. **Current flow:**

   - Connect load across terminals
   - Electrons flow n → load → p (conventional current p → n)
   - Continuous power generation!

### Solar Cell Parameters

**1. Open Circuit Voltage ($V_{oc}$):**

Maximum voltage when no load connected (infinite resistance).

Typically:

- Si solar cell: $V_{oc} \approx 0.5-0.7$ V
- Single cell gives only ~0.6V!
- Panels connect many cells in series

**2. Short Circuit Current ($I_{sc}$):**

Maximum current when terminals shorted (zero resistance).

$$I_{sc} \propto \text{Area} \times \text{Intensity}$$

Typical: 30-40 mA/cm² in full sunlight

**3. Fill Factor (FF):**

Measure of “squareness” of I-V curve.

$$\boxed{FF = \frac{V_m \times I_m}{V_{oc} \times I_{sc}}}$$

where $V_m$, $I_m$ = voltage and current at maximum power point

Typical FF: 0.7-0.85 (70-85%)

**4. Efficiency ($\eta$):**

$$\boxed{\eta = \frac{P_{out}}{P_{in}} = \frac{V_m I_m}{P_{incident}}}$$

**Or using fill factor:**

$$\boxed{\eta = \frac{FF \times V_{oc} \times I_{sc}}{P_{incident}}}$$

**Typical efficiencies:**

- Commercial Si panels: 15-20%
- Lab record (multi-junction): >45%
- Theoretical limit (Si): ~33% (Shockley-Queisser limit)

> **★ Key point · Why Not 100% Efficiency?**
>
> **Major losses:**
>
> 1. **Photons with $E < E_g$:** Not absorbed (pass through)

> 2. **Photons with $E > E_g$:** Excess energy lost as heat

> 3. **Reflection:** ~4% of light reflects off surface

> 4. **Recombination:** Some carriers recombine before reaching contacts

> 5. **Resistance losses:** Wire resistance, contact resistance
>
> **Maximum theoretical efficiency** for single-junction Si cell: **~33%**
>
> To beat this: **Multi-junction cells**
>
> - Stack materials with different $E_g$

> - Each layer absorbs different wavelength range

> - Space solar panels achieve >30% efficiency this way!

### I-V Characteristics

**In dark:** Regular diode curve

**Under illumination:** Curve shifts down by $I_{sc}$

**In 4th quadrant** (negative current, positive voltage):

- Cell delivers power!
- $P = V \times I$ (both positive in magnitude)

**Maximum power point:**

- Neither at $V_{oc}$ (I = 0, so P = 0)
- Nor at $I_{sc}$ (V = 0, so P = 0)
- At intermediate point where $P = VI$ is maximum

### Solar Panel Construction

**Single cell:** ~0.6V

**Practical panel:**

- **60 cells in series:** $V = 60 \times 0.6 = 36$ V
- Can charge **12V battery** (needs >14V for charging)
- **72 cells:** 43V (for 24V systems)

**For high power:**

- Multiple strings in parallel
- Typical home panel: 300-400W
  - Voltage: 30-40V
  - Current: 8-10A

### Applications of Solar Cells

1. **Residential power** - rooftop solar panels
2. **Satellites** - primary power source in space
3. **Calculators** - small solar cells
4. **Street lights** - solar-powered LED lights
5. **Water pumps** - irrigation in remote areas
6. **Spacecraft** - ISS has 2500 m² of solar panels!

> **◐ In simple terms · The Solar Revolution**
>
> **International Space Station:**
>
> - Solar array area: 2500 m² (half a football field!)

> - Power generated: 120 kW (powers ~50 homes)

> - No fuel needed - works for decades!
>
> **Your calculator:**
>
> - Tiny solar cell (~1 cm²)

> - Generates ~1 mW

> - Enough to power LCD display!

> - Never needs batteries in bright light
>
> **Global impact:**
>
> - Solar panel costs dropped **90% in 10 years**

> - Now **cheapest** source of electricity in many countries

> - Can power homes, cities, even spacecraft - all from p-n junctions!

---

## Comparison Table

| Device | Bias | Input | Output | Application |
| --- | --- | --- | --- | --- |
| **LED** | Forward | Current (20mA) | Light | Displays, lighting |
| **Photodiode** | Reverse | Light | Current (µA) | Sensors, detectors |
| **Solar Cell** | None (self) | Light | Voltage + Current | Power generation |

**Common physics:** All based on photon ↔ electron-hole pair conversion!

---

## Important Formulas Summary

### LED

$$\boxed{\lambda = \frac{hc}{E_g} = \frac{1240}{E_g} \text{ nm}} \quad \text{($E_g$ in eV)}$$

$$\boxed{R = \frac{V_s - V_f}{I_f}} \quad \text{(Series resistor)}$$

### Photodiode

$$\boxed{I = I_0 + I_L}$$

$$\boxed{I_L \propto \Phi} \quad \text{(Light intensity)}$$

### Solar Cell

$$\boxed{\eta = \frac{FF \times V_{oc} \times I_{sc}}{P_{in}}}$$

$$\boxed{FF = \frac{V_m I_m}{V_{oc} I_{sc}}}$$

---

## Memory Tricks & Patterns

### Mnemonic for LED vs Photodiode

**“LED Lights Forward, Photodiode Pulls Reverse”**

- **LED:** **F**orward bias → **L**ight output
- **Photodiode:** **R**everse bias → **R**eceives light

### Wavelength Calculation Shortcut

**“1-2-4-0 divided by eV”**

$$\lambda(\text{nm}) = \frac{1240}{E_g(\text{eV})}$$

**Example:** $E_g = 2$ eV → $\lambda = 1240/2 = 620$ nm (red)

### Solar Cell Orientation

**“Sun Shines on p-type Surface”**

Most solar cells have:

- **Thin p-layer** on top (light enters here)
- **Thick n-layer** below
- Light must penetrate to junction!

### LED Color Order

**“RGB Going Blue needs More Energy”**

- **R**ed: 1.8-2.0 eV (lowest)
- **G**reen: 2.0-2.4 eV (medium)
- **B**lue: 2.6-3.0 eV (highest)

Higher energy → Higher voltage needed!

### Pattern Recognition

1. **All three devices involve photons:**

   - LED: Electrons → Photons (emission)
   - Photodiode: Photons → Current (detection)
   - Solar cell: Photons → Power (generation)
2. **Voltage values:**

   - LED forward voltage: 1.5-3.5V (depends on color)
   - Solar cell voltage: ~0.6V (fixed for Si)
   - Photodiode: Externally biased (typically 5-10V reverse)
3. **Efficiency hierarchy:**

   - LED: 80-90% (electrical → light)
   - Solar cell: 15-20% (light → electrical)
   - Round-trip efficiency: ~15% (terrible for energy storage!)

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Use LED formulas when:**
>
> - Asked about wavelength from band gap

> - Calculating series resistor

> - Comparing different color LEDs

> - Energy efficiency questions
>
> **Use photodiode concepts when:**
>
> - Light detection problems

> - Photo-current proportionality

> - Sensor applications

> - Reverse bias with light input
>
> **Use solar cell formulas when:**
>
> - Efficiency calculations

> - Fill factor problems

> - Power output from illumination

> - Panel voltage/current in series/parallel
>
> **Quick identification:**
>
> - Forward bias + light output → **LED**

> - Reverse bias + light input → **Photodiode**

> - No bias + light input + power output → **Solar cell**

---

## Common Mistakes to Avoid

> **⚠ Trap #1: LED Without Resistor**
>
> **Wrong:** “Connect LED directly to 5V battery”
>
> **Correct:** **ALWAYS** use current-limiting resistor!
>
> **Why?**
>
> - LED has very low dynamic resistance above threshold

> - Without resistor, current skyrockets

> - LED **burns out** in seconds!
>
> **JEE scenario:** “LED rated 2V, 20mA connected to 5V. What happens?”
>
> - Without resistor: LED destroyed

> - With resistor: $R = (5-2)/0.02 = 150$ Ω needed

> **⚠ Trap #2: Confusing Photodiode and Solar Cell**
>
> **Wrong:** “Photodiode and solar cell are same thing”
>
> **Correct:**
>
> - **Photodiode:** Requires external battery (reverse bias), measures light intensity

> - **Solar cell:** Generates its own voltage, provides power
>
> **Key difference:**
>
> - Photodiode: **Consumes** power (needs battery)

> - Solar cell: **Generates** power (no battery needed)
>
> **JEE trap:** “Which device needs external bias?” → Photodiode (not solar cell!)

> **⚠ Trap #3: Solar Cell Voltage Misconception**
>
> **Wrong:** “More light → higher voltage from solar cell”
>
> **Correct:**
>
> - More light → **higher current** ($I_{sc}$ increases)

> - Voltage ($V_{oc}$) stays nearly **constant** (~0.6V for Si)

> - Intensity mainly affects current, not voltage!
>
> **Why?**
>
> - $V_{oc}$ depends on band gap (material property)

> - $I_{sc}$ depends on number of photons (intensity)
>
> **To get higher voltage:** Connect cells in **series**, not increase light!

> **⚠ Trap #4: LED Wavelength Calculation**
>
> **Wrong:** Using $E = hc/\lambda$ with wrong units
>
> **Correct:** Must be consistent!
>
> **Method 1** (SI units):
>
> $$E(\text{J}) = \frac{6.63 \times 10^{-34} \times 3 \times 10^8}{\lambda(\text{m})}$$
>
> **Method 2** (eV and nm):
>
> $$\lambda(\text{nm}) = \frac{1240}{E_g(\text{eV})}$$
>
> **JEE shortcut:** Memorize **1240** formula - saves calculation time!
>
> **Example:** Green LED, $E_g = 2.2$ eV
>
> $$\lambda = \frac{1240}{2.2} = 564 \text{ nm}$$
>
> ✓ (Green region)

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> An LED has band gap 1.9 eV. Find the wavelength and color of emitted light.
>
> **Solution:**
>
> $$\lambda = \frac{1240}{E_g} = \frac{1240}{1.9} = 653 \text{ nm}$$
>
> **Color identification:**
>
> - 620-750 nm = Red region

> - 653 nm = **Red**
>
> **Answer:** λ = 653 nm, **Red** color
>
> **Material:** Likely GaAsP (Gallium Arsenide Phosphide)

> **↗ Connection · Problem 1.2**
>
> A red LED (forward voltage 1.8V) needs 15 mA current. Calculate series resistor for 5V supply.
>
> **Solution:**
>
> $$R = \frac{V_s - V_f}{I_f}$$

$$R = \frac{5 - 1.8}{0.015} = \frac{3.2}{0.015} = 213.3 \text{ Ω}$$
>
> **Nearest standard resistor:** 220Ω
>
> **Answer:** Use **220Ω** resistor
>
> **Power dissipated in resistor:**
>
> $$P_R = I^2 R = (0.015)^2 \times 220 = 0.05 \text{ W} = 50 \text{ mW}$$
>
> Use 1/4W (250 mW) or higher rated resistor.

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A solar cell has $V_{oc} = 0.6$V, $I_{sc} = 40$ mA, and fill factor FF = 0.8. If incident power is 100 mW, find:

> (a) Maximum power output

> (b) Efficiency
>
> **Solution:**
>
> **(a) Maximum power:**
>
> $$P_{max} = FF \times V_{oc} \times I_{sc}$$

$$P_{max} = 0.8 \times 0.6 \times 0.04$$

$$P_{max} = 0.0192 \text{ W} = 19.2 \text{ mW}$$
>
> **(b) Efficiency:**
>
> $$\eta = \frac{P_{max}}{P_{in}} \times 100\%$$

$$\eta = \frac{19.2}{100} \times 100\% = 19.2\%$$
>
> **Answer:** (a) 19.2 mW, (b) 19.2% efficiency
>
> **Insight:** Good commercial Si cell efficiency!

> **↗ Connection · Problem 2.2**
>
> Compare the wavelengths of red LED ($E_g = 1.8$ eV) and blue LED ($E_g = 2.7$ eV).
>
> **Solution:**
>
> **Red LED:**
>
> $$\lambda_R = \frac{1240}{1.8} = 689 \text{ nm}$$
>
> **Blue LED:**
>
> $$\lambda_B = \frac{1240}{2.7} = 459 \text{ nm}$$
>
> **Ratio:**
>
> $$\frac{\lambda_R}{\lambda_B} = \frac{689}{459} = 1.5$$
>
> **Answer:** Red wavelength is **1.5 times longer** than blue
>
> **Energy relationship:**
>
> $$\frac{E_B}{E_R} = \frac{2.7}{1.8} = 1.5$$

$$\frac{\lambda_R}{\lambda_B} = \frac{E_B}{E_R}$$
>
> (inverse relationship!)
>
> **Key insight:** Higher energy → shorter wavelength!

> **↗ Connection · Problem 2.3**
>
> A photodiode has dark current 10 nA. When illuminated, total current is 50 µA. Find photo-current.
>
> **Solution:**
>
> $$I_{total} = I_0 + I_L$$

$$I_L = I_{total} - I_0$$

$$I_L = 50 \times 10^{-6} - 10 \times 10^{-9}$$

$$I_L = 50 \times 10^{-6} - 0.01 \times 10^{-6}$$

$$I_L = 49.99 \times 10^{-6} \approx 50 \text{ µA}$$
>
> **Answer:** Photo-current ≈ **50 µA**
>
> **Insight:** Dark current (10 nA) is negligible compared to photo-current (50 µA) - ratio of 1:5000!

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A solar panel has 36 cells in series. Each cell has $V_{oc} = 0.6$V and $I_{sc} = 2$A. If FF = 0.75 and incident solar power is 500 W, find:

> (a) Open circuit voltage of panel

> (b) Maximum power output

> (c) Overall efficiency
>
> **Solution:**
>
> **(a) Panel voltage:**
>
> Cells in series → voltages add:
>
> $$V_{oc,panel} = 36 \times 0.6 = 21.6 \text{ V}$$
>
> **(b) Panel current:**
>
> Cells in series → same current:
>
> $$I_{sc,panel} = 2 \text{ A}$$
>
> **Maximum power:**
>
> $$P_{max} = FF \times V_{oc} \times I_{sc}$$

$$P_{max} = 0.75 \times 21.6 \times 2 = 32.4 \text{ W}$$
>
> **(c) Efficiency:**
>
> $$\eta = \frac{P_{max}}{P_{in}} \times 100\% = \frac{32.4}{500} \times 100\% = 6.48\%$$
>
> **Answer:**
>
> - (a) 21.6 V

> - (b) 32.4 W

> - (c) 6.48%
>
> **Note:** Low efficiency suggests this is an older or small panel. Modern panels achieve 15-20%.

> **↗ Connection · Problem 3.2**
>
> An LED emits at 600 nm. If forward current is 20 mA and voltage is 2.0V, find:

> (a) Band gap energy

> (b) Power input

> (c) If quantum efficiency is 50%, find optical power output
>
> **Solution:**
>
> **(a) Band gap from wavelength:**
>
> $$E_g = \frac{1240}{\lambda(\text{nm})} = \frac{1240}{600} = 2.07 \text{ eV}$$
>
> **(b) Electrical power input:**
>
> $$P_{in} = V \times I = 2.0 \times 0.02 = 0.04 \text{ W} = 40 \text{ mW}$$
>
> **(c) Optical power:**
>
> Quantum efficiency = 50% means half the electrons produce photons
>
> **External quantum efficiency:**
>
> $$\eta_Q = \frac{\text{Number of photons emitted}}{\text{Number of electrons injected}}$$
>
> Current of 20 mA means:
>
> $$\text{Electrons per second} = \frac{I}{e} = \frac{0.02}{1.6 \times 10^{-19}} = 1.25 \times 10^{17}$$
>
> Photons emitted: $0.5 \times 1.25 \times 10^{17} = 6.25 \times 10^{16}$ per second
>
> Energy per photon: $E = 2.07$ eV $= 2.07 \times 1.6 \times 10^{-19}$ J
>
> $$P_{optical} = 6.25 \times 10^{16} \times 2.07 \times 1.6 \times 10^{-19}$$

$$P_{optical} = 0.02 \text{ W} = 20 \text{ mW}$$
>
> **Or simply:** $P_{optical} = 0.5 \times P_{in} = 0.5 \times 40 = 20$ mW
>
> **Answer:**
>
> - (a) $E_g = 2.07$ eV

> - (b) $P_{in} = 40$ mW

> - (c) $P_{optical} = 20$ mW
>
> **Power efficiency:** 20/40 = **50%** (same as quantum efficiency here)

---

## Quick Revision Box

| Device | Bias | $V_f / V_{oc}$ | Current | Main Use |
| --- | --- | --- | --- | --- |
| **LED** | Forward | 1.8-3.5V | 10-20 mA | Light emission |
| **Photodiode** | Reverse | -5 to -10V (ext) | µA (depends on light) | Light detection |
| **Solar Cell** | Self (none) | ~0.6V | Depends on area/light | Power generation |

**Key formula:** $\lambda(\text{nm}) = 1240 / E_g(\text{eV})$

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **LED wavelength calculation** - Given $E_g$, find λ
>
>    - Use shortcut: $\lambda = 1240/E_g$

>    - Remember color ranges: Red 620-750, Green 495-570, Blue 450-495 nm

> 2. **Series resistor for LED** - Always appears!
>
>    - $R = (V_s - V_f)/I_f$

>    - Common trap: Forgetting to subtract $V_f$

> 3. **Solar cell efficiency** - Standard problem
>
>    - $\eta = (FF \times V_{oc} \times I_{sc}) / P_{in}$

>    - Typical Si efficiency: 15-20%

>    - Maximum theoretical: ~33%

> 4. **Comparison questions:**
>
>    - “LED vs photodiode bias?” → Forward vs Reverse

>    - “Which generates power?” → Solar cell (not photodiode!)

>    - “Effect of increasing light on solar cell?” → Current increases (voltage ~constant)

> 5. **Conceptual understanding:**
>
>    - Why Si doesn’t make good LED? → Indirect band gap

>    - Why photodiode in reverse bias? → Wider depletion, faster response

>    - Why solar cell efficiency < 100%? → Photon energy loss, recombination, reflection

> 6. **Numerical values to remember:**
>
>    - Si solar cell: $V_{oc} \approx 0.6$ V

>    - LED forward voltage: 1.8V (red) to 3.2V (white)

>    - $\lambda = 1240/E_g$ (master formula!)
>
> **Time-saving trick:** For LED color identification:
>
> - < 500 nm → Blue/Violet

> - 500-600 nm → Green/Yellow

> - > 600 nm → Orange/Red

---

## Related Topics

### Within Electronic Devices

- [p-n Junction](../pn-junction/index.md) - Foundation of all these devices
- [Diode Characteristics](../diode-rectifier/index.md) - Basic diode behavior
- [Zener Diode](../zener-diode/index.md) - Another special diode
- [Transistor](../transistor/index.md) - Building on junction concepts

### Connected Chapters

- [Dual Nature of Matter](../../dual-nature/index.md) - Photon energy $E = h\nu$
- [Atomic Structure](../../atoms-nuclei/index.md) - Energy levels and transitions
- [Electromagnetic Waves](../../electromagnetic-waves/index.md) - Light as wave

### Real-world Applications

- **Displays:** Phone/TV screens (OLED - billions of LEDs)
- **Lighting:** LED bulbs replacing incandescent (90% energy savings)
- **Renewable energy:** Solar panels (terawatts of installed capacity)
- **Communication:** Fiber optics (LED/photodiode pairs)
- **Sensors:** Cameras, proximity sensors, ambient light detection

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **LED (Light Emitting Diode) - Forward bias emits light**
>
>    - Electron-hole recombination releases energy as photons

>    - $\lambda = 1240/E_g$ determines color

>    - Different materials (GaAs, GaN) → different colors

>    - Always use series resistor: $R = (V_s - V_f)/I_f$

> 2. **Photodiode - Reverse bias detects light**
>
>    - Photons create electron-hole pairs → current flow

>    - $I = I_0 + I_L$ where $I_L \propto$ light intensity

>    - Used in cameras, sensors, optical communication

>    - Opposite of LED!

> 3. **Solar Cell - Self-powered by light**
>
>    - No external bias needed - generates its own voltage

>    - $V_{oc} \approx 0.6$V for Si (fixed), $I_{sc}$ depends on light

>    - Efficiency: $\eta = (FF \times V_{oc} \times I_{sc})/P_{in}$

>    - Powers satellites, homes, calculators!

> 4. **All three convert between photons and electricity:**
>
>    - LED: Electricity → Light (emission)

>    - Photodiode: Light → Current (detection)

>    - Solar cell: Light → Power (generation)

> 5. **Your smartphone uses all three:**
>
>    - **OLED screen:** Millions of LEDs

>    - **Camera:** Photodiode arrays (image sensor)

>    - **Ambient sensor:** Photodiode

>    - All from p-n junction physics!
>
> **“Three simple variations of the p-n junction - one for lighting the world with LEDs, one for detecting light in cameras, and one for powering the future with solar energy!”**

---

From TestGuru · our mock-test platform

## You've read Special Purpose Diodes - LED, Photodiode, Solar Cell.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electronic-devices&tg_exam=jee-main&tg_page=%2Fphysics%2Felectronic-devices%2Fspecial-diodes%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electronic-devices/special-diodes/",this.page.identifier="/physics/electronic-devices/special-diodes/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="specialDiodes" id="anim-specialDiodes-1795396423325628734"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-specialDiodes-1795396423325628734")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electronic-devices/special-diodes/](https://jeenotes.in/physics/electronic-devices/special-diodes/) · raw HTML: `offline/physics/electronic-devices/special-diodes/index.html`_
