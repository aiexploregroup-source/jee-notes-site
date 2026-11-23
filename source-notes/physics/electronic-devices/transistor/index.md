---
title: "Transistor as Amplifier and Switch"
source: "https://jeenotes.in/physics/electronic-devices/transistor/"
description: "Master BJT transistor working, CE amplifier, and digital switching for JEE Physics with smartphone processor analogy"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 9"
html: "../../../../offline/physics/electronic-devices/transistor/index.html"
extracted: "2026-11-23"
---

> Master BJT transistor working, CE amplifier, and digital switching for JEE Physics with smartphone processor analogy

## Prerequisites

Before studying this topic, make sure you understand:

- [Semiconductors](../semiconductors/index.md) - p-type and n-type materials
- [p-n Junction](../pn-junction/index.md) - Junction biasing concepts
- [Current Electricity](../../current-electricity/index.md) - Ohm’s law and circuit analysis

## The Hook: What’s Inside Your Smartphone Processor?

> **★ Key point · Connect: Smartphone Brain → Transistors**
>
> Your **smartphone processor** contains over **15 BILLION transistors** in an area smaller than your fingernail! Each transistor:
>
> - Switches ON/OFF **billions of times per second**

> - Acts as a tiny amplifier or digital switch

> - Consumes less power than a grain of sand heating up
>
> **Mind-blowing scale:**
>
> - iPhone 14 Pro chip: 16 billion transistors

> - All transistors switching → performing trillion operations/second

> - If each transistor was 1 cm, the chip would be size of **Manhattan**!
>
> How does a simple sandwich of p-n-p or n-p-n semiconductors create the brain of modern civilization? Let’s decode the most important invention of the 20th century!

## Interactive Demo

Visualize transistor amplification and switching action:

---

## The Core Concept: What is a Transistor?

### Transistor = Transfer Resistor

**Name origin:**

- **Trans**fer + Res**istor** = **Transistor**
- Small current in input **transfers** to large current in output
- Acts like **current-controlled resistor**

### Two p-n Junctions Back-to-Back

**Bipolar Junction Transistor (BJT)** has two types:

**1. npn Transistor:**

```fallback
C (Collector)
  |
  n
  |
  p ←— B (Base)
  |
  n
  |
  E (Emitter)
```

**2. pnp Transistor:**

```fallback
C (Collector)
  |
  p
  |
  n ←— B (Base)
  |
  p
  |
  E (Emitter)
```

**Three regions:**

- **Emitter (E):** Heavily doped, **emits** charge carriers
- **Base (B):** Very thin (~1 µm), lightly doped
- **Collector (C):** Moderately doped, **collects** carriers

> **◐ In simple terms · Why Two p-n Junctions?**
>
> **Single p-n junction (diode):**
>
> - Current flows one way

> - Can’t amplify
>
> **Two junctions (transistor):**
>
> - **Base-Emitter (BE):** Forward biased (allows current)

> - **Base-Collector (BC):** Reverse biased (normally blocks)

> - **Magic:** Carriers from emitter cross thin base into collector

> - **Small base current controls large collector current!**
>
> **Think of it like:**
>
> - Water dam with small control valve (base)

> - Tiny adjustment → huge water flow change (collector)

> - **Current amplification!**

---

## Transistor Action (npn)

### Biasing for Active Mode

**Proper biasing:**

- BE junction: **Forward biased** (VBE ≈ 0.7V)
- BC junction: **Reverse biased** (VCB > 0)

### Current Flow Mechanism

**Step 1:** Electrons injected from emitter (heavily doped n-type)

**Step 2:** Enter thin p-type base

- Some recombine with holes → small **base current** $I_B$
- Most (>95%) continue through thin base

**Step 3:** Reach reverse-biased BC junction

- Collector electric field pulls them in
- Creates **collector current** $I_C$

**Result:**

$$\boxed{I_E = I_B + I_C}$$

where:

- $I_E$ = emitter current (largest)
- $I_C$ = collector current (~99% of $I_E$)
- $I_B$ = base current (~1% of $I_E$)

### Current Gain Parameters

**1. Current Gain (β or $h_{FE}$):**

$$\boxed{\beta = \frac{I_C}{I_B}}$$

Typical values: **β = 50 to 300**

This is the **amplification factor**!

**2. Alpha (α):**

$$\boxed{\alpha = \frac{I_C}{I_E}}$$

Typical: **α ≈ 0.95 to 0.99**

**Relationship:**

$$\boxed{\beta = \frac{\alpha}{1-\alpha}}$$

$$\boxed{\alpha = \frac{\beta}{\beta + 1}}$$

> **★ Key point · The Amplification Magic**
>
> **Example:** β = 100
>
> **Input:** Base current $I_B = 10$ µA (tiny!)
>
> **Output:** Collector current $I_C = \beta I_B = 100 \times 10 = 1000$ µA = 1 mA
>
> **Amplification = 100×!**
>
> **Power perspective:**
>
> - Small base power controls large collector power

> - Like tiny steering wheel controlling massive truck

> - This is how transistors amplify signals!
>
> **In your smartphone:**
>
> - Microphone signal: ~millivolts

> - After transistor amplification: volts

> - You can hear music clearly through speakers!

---

## Transistor Configurations

### 1. Common Emitter (CE) - Most Important

**Circuit:**

```fallback
VCC
       |
       RC
       |
   C ──┴── Vout

Input ──┤  npn
       │
   E ──┬── GND
       |
       RE
```

**Characteristics:**

- Input: Between base and emitter
- Output: Between collector and emitter
- Emitter is **common** to both

**Properties:**

| Parameter | Value |
| --- | --- |
| Current gain | High (β) |
| Voltage gain | High (~100) |
| Power gain | Very high |
| Phase shift | 180° (inverted) |
| Input resistance | Medium (~1 kΩ) |
| Output resistance | High (~50 kΩ) |

**Use:** **Voltage amplifiers** (most common!)

### 2. Common Collector (CC) - Emitter Follower

**Properties:**

- Voltage gain ≈ 1 (no amplification)
- Current gain = High
- Output follows input (no inversion)
- Low output impedance

**Use:** **Impedance matching**, buffer

### 3. Common Base (CB)

**Properties:**

- Current gain < 1 (no current amplification)
- Voltage gain = High
- No phase inversion
- Very low input impedance

**Use:** High-frequency applications, RF amplifiers

**For JEE:** Focus on **Common Emitter** - most important and frequently asked!

---

## Common Emitter Amplifier

### Circuit Analysis

**DC Analysis (Biasing):**

**Base voltage:**

$$V_B = \frac{R_2}{R_1 + R_2} V_{CC}$$

**Emitter voltage:**

$$V_E = V_B - V_{BE}$$

where $V_{BE} \approx 0.7$ V for Si

**Emitter current:**

$$I_E = \frac{V_E}{R_E}$$

**Collector current:**

$$I_C \approx I_E$$

(since α ≈ 1)

**Collector voltage:**

$$V_C = V_{CC} - I_C R_C$$

**AC Analysis (Small Signal):**

**Voltage gain:**

$$\boxed{A_v = -\frac{R_C}{r_e}}$$

where:

- $r_e$ = dynamic emitter resistance ≈ $\frac{26 \text{ mV}}{I_E}$ at 300K
- Negative sign indicates **phase inversion**

**Alternative form:**

$$\boxed{A_v = -\frac{\beta R_C}{R_i}}$$

**Current gain:**

$$\boxed{A_i = \beta}$$

**Power gain:**

$$\boxed{A_p = A_v \times A_i = \beta \times \frac{R_C}{r_e}}$$

### Input and Output Characteristics

**Input characteristic** (VBE vs IB):

- Similar to diode curve
- Exponential rise after 0.7V
- Controls base current

**Output characteristic** (VCE vs IC):

- Shows three regions:

**1. Cut-off region:** $I_B = 0$, $I_C \approx 0$ (OFF)

**2. Active region:** $I_C = \beta I_B$ (linear amplification)

**3. Saturation region:** $V_{CE} < 0.2$ V (fully ON)

> **◐ In simple terms · Smartphone Audio Amplifier**
>
> When you play music on your phone:
>
> **Input:** Microphone or audio file → tiny AC signal (~mV)
>
> **Transistor amplifier:**
>
> - Operating point set in **active region**

> - Small input signal varies base current

> - Collector current varies by β times

> - Output voltage varies across $R_C$
>
> **Output:** Amplified signal (~V) drives speaker
>
> **Multiple stages:** Typical phone has 2-3 amplifier stages
>
> - Each stage amplifies by ~100×

> - Total gain: $100 \times 100 = 10,000×$!

> - Millivolt input → Volt-level output → Audible sound!

---

## Transistor as a Switch

### Digital Switching

Transistor can work in two extreme states:

**1. OFF State (Cut-off):**

- $I_B = 0$
- $I_C = 0$
- $V_{CE} = V_{CC}$ (maximum)
- Acts like **open switch**

**2. ON State (Saturation):**

- $I_B$ > minimum value
- $I_C = I_{C,sat} = \frac{V_{CC}}{R_C}$
- $V_{CE,sat} \approx 0.2$ V (minimum)
- Acts like **closed switch**

### Switching Circuit

```fallback
VCC
       |
       RC
       |
   C ──┴── Vout

Input ──┤  npn
       │
   E ──┴── GND
```

**Operation:**

**Input LOW (0V):**

- $I_B = 0$
- Transistor OFF
- $V_{out} = V_{CC}$ (HIGH)

**Input HIGH (5V):**

- $I_B > 0$
- Transistor ON (saturated)
- $V_{out} \approx 0$ V (LOW)

**Notice:** Output is **inverted** from input!

This is a **NOT gate** (inverter)!

### Calculating Base Resistor

To ensure saturation:

$$I_B > \frac{I_{C,sat}}{\beta}$$

**Base current:**

$$I_B = \frac{V_{in} - V_{BE}}{R_B}$$

**For saturation:**

$$\boxed{R_B < \frac{(V_{in} - V_{BE}) \beta}{I_{C,sat}}}$$

Typically choose: $R_B = \frac{(V_{in} - V_{BE}) \beta}{2 I_{C,sat}}$ (provides margin)

> **★ Key point · Your Processor's Logic Gates**
>
> **Every logic gate in your processor is made of transistors as switches!**
>
> **NAND gate:** 4 transistors

> **NOR gate:** 4 transistors

> **Complex CPU:** Billions of transistors switching!
>
> **Example - Intel Core i9:**
>
> - 16 billion transistors

> - Each switches billions of times/second

> - Switching speed: < 100 picoseconds (10⁻¹⁰ s)!

> - All performing binary logic: 0s and 1s
>
> **Power consumption:**
>
> - Each transistor uses ~femtojoules per switch

> - 16 billion × billions of switches/sec = ~100 watts

> - This is why CPUs need cooling fans!
>
> **From transistors to Instagram:** Binary switches → Logic gates → Processors → Smartphones → Your entire digital life!

---

## Important Formulas Summary

### Current Relations

$$\boxed{I_E = I_B + I_C}$$

$$\boxed{\beta = \frac{I_C}{I_B}} \quad \text{(50-300)}$$

$$\boxed{\alpha = \frac{I_C}{I_E}} \quad \text{(0.95-0.99)}$$

$$\boxed{\alpha = \frac{\beta}{\beta+1}}$$

### CE Amplifier

$$\boxed{A_v = -\frac{R_C}{r_e}} \quad \text{where } r_e = \frac{26 \text{ mV}}{I_E}$$

$$\boxed{A_i = \beta}$$

$$\boxed{A_p = A_v \times A_i}$$

### Switching

$$\boxed{I_{C,sat} = \frac{V_{CC}}{R_C}}$$

$$\boxed{V_{CE,sat} \approx 0.2 \text{ V}}$$

---

## Memory Tricks & Patterns

### Mnemonic for npn vs pnp

**“npn - Not Pointing iN”** - Arrow points OUT
**“pnp - Pointing iN Permanently”** - Arrow points IN

(Arrow is on emitter)

### Current Relationship

**“Every Base and Collector makes Emitter”**

$$I_E = I_B + I_C$$

### Beta Memory

**“Beta is Big, Alpha Almost 1”**

- β = 50-300 (large)
- α = 0.95-0.99 (close to 1)

### CE Amplifier Sign

**“CE Causes inversion”** - Common Emitter has **negative** voltage gain (180° phase shift)

### Transistor Regions

**“Cut-off is Closed, Saturation is Short”**

- **Cut-off:** Like open circuit (no current)
- **Saturation:** Like short circuit (full current)
- **Active:** In between (amplification)

### Pattern Recognition

1. **Current magnitudes:**

   $$I_E > I_C >> I_B$$

   Typical: If $I_B = 10$ µA, then $I_C \approx 1$ mA, $I_E \approx 1.01$ mA
2. **Voltage drops:**

   - $V_{BE} \approx 0.7$ V (forward-biased junction)
   - $V_{CE,sat} \approx 0.2$ V (in saturation)
   - $V_{CE,cutoff} \approx V_{CC}$ (in cut-off)
3. **Dynamic resistance:**

   $$r_e(\Omega) = \frac{26 \text{ mV}}{I_E(\text{mA})}$$

   At $I_E = 1$ mA: $r_e = 26$ Ω

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Transistor as amplifier when:**
>
> - Need voltage/current/power gain

> - Analog signal processing

> - Operating in **active region**

> - Small signal variations around DC operating point
>
> **Transistor as switch when:**
>
> - Digital circuits (logic gates)

> - ON/OFF control (LED, relay)

> - Operating in **saturation** (ON) or **cut-off** (OFF)

> - No intermediate states needed
>
> **For problem solving:**
>
> **Given circuit, find gain:**

> → Identify configuration (CE/CB/CC)

> → Use appropriate gain formulas
>
> **Given switching circuit:**

> → Check if transistor in saturation or cut-off

> → Calculate currents and voltages accordingly
>
> **Current amplification:**

> → Use $\beta = I_C/I_B$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing npn and pnp**
>
> **Wrong:** Using npn formulas for pnp circuit
>
> **Correct:**
>
> - **npn:** Conventional current flows C→E, base current is positive

> - **pnp:** Conventional current flows E→C, all polarities reversed
>
> **Easy identification:**
>
> - Arrow on emitter pointing **OUT** → npn

> - Arrow pointing **IN** → pnp
>
> **For JEE:** Most problems use **npn** (standard convention)

> **⚠ Trap #2: Forgetting VBE Drop**
>
> **Wrong:** “If base voltage is 2V, emitter voltage is 2V”
>
> **Correct:**
>
> $$V_E = V_B - V_{BE} = 2 - 0.7 = 1.3 \text{ V}$$
>
> **Always subtract 0.7V** for Si transistor (0.3V for Ge)
>
> **Common JEE error:** Calculating emitter current without accounting for $V_{BE}$

> **⚠ Trap #3: Assuming Linear Operation in Saturation**
>
> **Wrong:** “In saturation, $I_C = \beta I_B$”
>
> **Correct:**
>
> - **Active region:** $I_C = \beta I_B$ ✓

> - **Saturation:** $I_C < \beta I_B$ (limited by $R_C$)
>
> In saturation:
>
> $$I_C = I_{C,sat} = \frac{V_{CC} - V_{CE,sat}}{R_C} \approx \frac{V_{CC}}{R_C}$$
>
> **Not** dependent on β!
>
> **JEE trap:** “Find IC when transistor is saturated” - don’t use β formula!

> **⚠ Trap #4: Phase Inversion Confusion**
>
> **Wrong:** “All amplifiers invert signal”
>
> **Correct:**
>
> - **CE amplifier:** 180° phase shift (inverted)

> - **CC amplifier:** 0° phase shift (no inversion)

> - **CB amplifier:** 0° phase shift (no inversion)
>
> **Remember:** Only **Common Emitter inverts**!
>
> **Negative sign in formula:**
>
> $$A_v = -\frac{R_C}{r_e}$$
>
> The minus means inversion!

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> A transistor has $\beta = 100$. If base current is 50 µA, find:

> (a) Collector current

> (b) Emitter current
>
> **Solution:**
>
> **(a) Collector current:**
>
> $$I_C = \beta I_B = 100 \times 50 \times 10^{-6}$$

$$I_C = 5 \times 10^{-3} \text{ A} = 5 \text{ mA}$$
>
> **(b) Emitter current:**
>
> $$I_E = I_B + I_C = 0.05 + 5 = 5.05 \text{ mA}$$
>
> **Answer:** (a) 5 mA, (b) 5.05 mA
>
> **Insight:** Emitter current only slightly larger than collector current!

> **↗ Connection · Problem 1.2**
>
> For the above transistor, find α.
>
> **Solution:**
>
> $$\alpha = \frac{\beta}{\beta + 1} = \frac{100}{100 + 1} = \frac{100}{101} = 0.99$$
>
> **Or directly:**
>
> $$\alpha = \frac{I_C}{I_E} = \frac{5}{5.05} = 0.99$$
>
> **Answer:** α = 0.99
>
> **Insight:** α very close to 1 for good transistor!

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A CE amplifier has $R_C = 2$ kΩ and transistor operating at $I_E = 2$ mA. Find voltage gain.
>
> **Solution:**
>
> **Dynamic emitter resistance:**
>
> $$r_e = \frac{26 \text{ mV}}{I_E(\text{mA})} = \frac{26}{2} = 13 \text{ Ω}$$
>
> **Voltage gain:**
>
> $$A_v = -\frac{R_C}{r_e} = -\frac{2000}{13} = -154$$
>
> **Answer:** $A_v = -154$ (magnitude 154, inverted phase)
>
> **Insight:** Negative sign means 180° phase shift!

> **↗ Connection · Problem 2.2**
>
> A transistor switch has $V_{CC} = 12$V, $R_C = 1$ kΩ. Find:

> (a) Collector current in saturation

> (b) Minimum base current needed if β = 80
>
> **Solution:**
>
> **(a) Saturation collector current:**
>
> $$I_{C,sat} = \frac{V_{CC}}{R_C} = \frac{12}{1000} = 0.012 \text{ A} = 12 \text{ mA}$$
>
> **(b) Minimum base current:**
>
> For saturation:
>
> $$I_B > \frac{I_{C,sat}}{\beta} = \frac{12}{80} = 0.15 \text{ mA}$$
>
> Practical design (2× margin):
>
> $$I_B = \frac{2 \times 12}{80} = 0.3 \text{ mA}$$
>
> **Answer:**
>
> - (a) 12 mA

> - (b) Minimum 0.15 mA, recommended 0.3 mA
>
> **Insight:** Provide extra base current to ensure hard saturation!

> **↗ Connection · Problem 2.3**
>
> In a CE amplifier, $V_{CC} = 12$V, $R_C = 3$ kΩ, $I_C = 2$ mA. Find:

> (a) $V_C$

> (b) $V_{CE}$ if $V_E = 1$V
>
> **Solution:**
>
> **(a) Collector voltage:**
>
> $$V_C = V_{CC} - I_C R_C$$

$$V_C = 12 - (2 \times 10^{-3})(3 \times 10^3)$$

$$V_C = 12 - 6 = 6 \text{ V}$$
>
> **(b) Collector-emitter voltage:**
>
> $$V_{CE} = V_C - V_E = 6 - 1 = 5 \text{ V}$$
>
> **Answer:** (a) 6V, (b) 5V
>
> **Check:** $V_{CE} = 5$V > 0.2V → Transistor in **active region** ✓

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A CE amplifier has voltage divider bias: $R_1 = 10$ kΩ, $R_2 = 2.2$ kΩ, $R_E = 1$ kΩ, $R_C = 2.2$ kΩ, $V_{CC} = 12$V. Find:

> (a) Operating point $(I_C, V_{CE})$

> (b) Voltage gain
>
> **Solution:**
>
> **(a) DC analysis:**
>
> **Base voltage:**
>
> $$V_B = \frac{R_2}{R_1 + R_2} V_{CC} = \frac{2.2}{10 + 2.2} \times 12$$

$$V_B = \frac{2.2}{12.2} \times 12 = 2.16 \text{ V}$$
>
> **Emitter voltage:**
>
> $$V_E = V_B - V_{BE} = 2.16 - 0.7 = 1.46 \text{ V}$$
>
> **Emitter current:**
>
> $$I_E = \frac{V_E}{R_E} = \frac{1.46}{1000} = 1.46 \text{ mA}$$
>
> **Collector current:**
>
> $$I_C \approx I_E = 1.46 \text{ mA}$$
>
> **Collector voltage:**
>
> $$V_C = V_{CC} - I_C R_C = 12 - (1.46 \times 2.2)$$

$$V_C = 12 - 3.21 = 8.79 \text{ V}$$
>
> **VCE:**
>
> $$V_{CE} = V_C - V_E = 8.79 - 1.46 = 7.33 \text{ V}$$
>
> **Operating point:** $(1.46 \text{ mA}, 7.33 \text{ V})$
>
> **(b) AC analysis:**
>
> $$r_e = \frac{26}{1.46} = 17.8 \text{ Ω}$$

$$A_v = -\frac{R_C}{r_e} = -\frac{2200}{17.8} = -124$$
>
> **Answer:**
>
> - (a) Q-point: (1.46 mA, 7.33V)

> - (b) $A_v = -124$
>
> **Insight:** Well-designed bias point near middle of load line for maximum swing!

> **↗ Connection · Problem 3.2**
>
> Show that for a transistor, $\beta = \alpha/(1-\alpha)$.
>
> **Solution:**
>
> **Starting from definitions:**
>
> $$\alpha = \frac{I_C}{I_E}, \quad \beta = \frac{I_C}{I_B}$$
>
> **Also:** $I_E = I_B + I_C$
>
> $$\alpha = \frac{I_C}{I_B + I_C} = \frac{I_C/I_B}{I_B/I_B + I_C/I_B}$$

$$\alpha = \frac{\beta}{1 + \beta}$$
>
> **Solving for β:**
>
> $$\alpha(1 + \beta) = \beta$$

$$\alpha + \alpha\beta = \beta$$

$$\alpha = \beta - \alpha\beta = \beta(1 - \alpha)$$

$$\boxed{\beta = \frac{\alpha}{1-\alpha}}$$
>
> **Check:** If $\alpha = 0.99$:
>
> $$\beta = \frac{0.99}{1-0.99} = \frac{0.99}{0.01} = 99$$
>
> ✓
>
> **Proved!**
>
> **Insight:** Small change in α causes large change in β!
>
> - α: 0.98 → 0.99 (1% change)

> - β: 49 → 99 (100% change!)
>
> This is why β varies widely between transistors!

---

## Quick Revision Box

| Parameter | Formula | Typical Value |
| --- | --- | --- |
| Current gain (β) | $I_C/I_B$ | 50-300 |
| Alpha (α) | $I_C/I_E$ | 0.95-0.99 |
| $V_{BE}$ | - | 0.7V (Si) |
| $V_{CE,sat}$ | - | 0.2V |
| CE voltage gain | $-R_C/r_e$ | -100 to -500 |
| $r_e$ | $26\text{mV}/I_E$ | 10-50Ω |

**Key relation:** $I_E = I_B + I_C$, $\beta = \alpha/(1-\alpha)$

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Current relations** - Most common!
>
>    - $I_E = I_B + I_C$

>    - $\beta = I_C/I_B$

>    - $\alpha = I_C/I_E$

>    - Conversion: $\beta = \alpha/(1-\alpha)$

> 2. **Transistor configurations:**
>
>    - Identify CE/CB/CC from circuit

>    - Remember: CE inverts, others don’t

>    - CE most commonly asked!

> 3. **DC biasing calculations:**
>
>    - Always use $V_{BE} = 0.7$V

>    - $V_E = V_B - 0.7$

>    - $I_E = V_E/R_E$

>    - $I_C \approx I_E$

> 4. **CE amplifier gain:**
>
>    - $r_e = 26\text{mV}/I_E(\text{mA})$

>    - $A_v = -R_C/r_e$

>    - Negative sign = phase inversion

> 5. **Switching operation:**
>
>    - Cut-off: $I_B = 0$, $V_{CE} = V_{CC}$

>    - Saturation: $V_{CE} = 0.2$V, $I_C = V_{CC}/R_C$

>    - Don’t use $\beta$ in saturation!

> 6. **Conceptual questions:**
>
>    - “Why base thin?” → Most carriers reach collector

>    - “Why emitter heavily doped?” → Inject many carriers

>    - “Active vs saturation?” → Check $V_{CE}$ value
>
> **Time-saving tricks:**
>
> - For β = 100: $I_C \approx 100 I_B$

> - For $I_E$: $I_E \approx I_C$ (α ≈ 1)

> - In saturation: $V_{CE} \approx 0$ (short circuit)

> - In cut-off: $I_C \approx 0$ (open circuit)

---

## Related Topics

### Within Electronic Devices

- [Semiconductors](../semiconductors/index.md) - p-n junction basics
- [p-n Junction](../pn-junction/index.md) - Understanding junctions
- [Logic Gates](../logic-gates/index.md) - Transistors as digital switches

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) - Circuit analysis
- [Magnetism](../../magnetism/index.md) - Hall effect in semiconductors

### Real-world Applications

- **Amplifiers** - Audio, RF, instrumentation
- **Switches** - Digital logic, power control
- **Oscillators** - Signal generation
- **Processors** - Billions in CPU/GPU
- **Memory** - RAM, Flash storage

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Transistor = Two p-n junctions back-to-back** (npn or pnp)
>
>    - Emitter (heavily doped) → Base (thin) → Collector (moderate)

>    - BE forward biased, BC reverse biased for active operation

> 2. **Current amplification:** $\beta = I_C/I_B$ (typically 50-300)
>
>    - Small base current controls large collector current

>    - $I_E = I_B + I_C$ (Kirchhoff’s law)

>    - $\alpha = I_C/I_E \approx 0.99$ (most carriers reach collector)

> 3. **As amplifier (Active region):**
>
>    - Common Emitter most important

>    - Voltage gain: $A_v = -R_C/r_e$ where $r_e = 26\text{mV}/I_E$

>    - Phase inverted (180°)

>    - Used in audio, RF, instrumentation

> 4. **As switch (Cut-off/Saturation):**
>
>    - Cut-off: $I_B = 0$ → transistor OFF → $V_{CE} = V_{CC}$

>    - Saturation: $I_B$ large → transistor ON → $V_{CE} \approx 0.2$V

>    - Foundation of digital logic gates

> 5. **15 billion transistors in your smartphone processor** - each a tiny amplifier or switch, working together to create the digital world!
>
> **“From a simple sandwich of doped silicon to the brain of civilization - the transistor is humanity’s most important invention after the wheel!”**

---

From TestGuru · our mock-test platform

## You've read Transistor as Amplifier and Switch.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electronic-devices&tg_exam=jee-main&tg_page=%2Fphysics%2Felectronic-devices%2Ftransistor%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electronic-devices/transistor/",this.page.identifier="/physics/electronic-devices/transistor/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="transistorAction" id="anim-transistorAction-1795396423340685894"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-transistorAction-1795396423340685894")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electronic-devices/transistor/](https://jeenotes.in/physics/electronic-devices/transistor/) · raw HTML: `offline/physics/electronic-devices/transistor/index.html`_
