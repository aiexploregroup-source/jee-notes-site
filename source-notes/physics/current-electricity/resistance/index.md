---
title: "Resistance, Resistivity, and Temperature Dependence"
source: "https://jeenotes.in/physics/current-electricity/resistance/"
description: "Master resistance, resistivity, temperature coefficient, and material properties for JEE Physics"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 8"
html: "../../../../offline/physics/current-electricity/resistance/index.html"
extracted: "2026-11-23"
---

> Master resistance, resistivity, temperature coefficient, and material properties for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Ohm’s Law](../ohms-law/index.md) - Foundation of resistance concept
- [Drift Velocity](../drift-velocity/index.md) - Microscopic understanding of current

## The Hook: Why Are Extension Cords Made of Thick Copper Wire?

> **★ Key point · Connect: Your Home Wiring → Resistance**
>
> You’re watching **Jawan** (2023) on your TV. Suddenly, you plug in an electric heater using a thin, long extension cord. The lights dim! What just happened?
>
> **The culprit:** RESISTANCE
>
> The thin, long cord has HIGH resistance. When heavy current flows (from heater + TV), voltage drops across the cord, leaving less for your appliances. This is why:
>
> - House wiring uses THICK copper wires (low resistance)

> - Extension cords have limits (thin → high R → voltage drop)

> - Gold connectors in premium cables (very low resistivity!)
>
> **Question:** Why does copper work better than iron? And why does a hot wire have MORE resistance than a cold one? Let’s find out!

## Interactive Demo

See how length, area, and material affect resistance:

---

## The Core Concept: What is Resistance?

**Resistance** is the opposition to current flow in a conductor.

Think of it as “electrical friction” - just like mechanical friction opposes motion, resistance opposes current.

### Ohm’s Definition

$$\boxed{R = \frac{V}{I}}$$

**Unit:** Ohm (Ω)

**In simple terms:** “How much voltage is needed to push 1 ampere of current through the conductor”

---

## Factors Affecting Resistance

Resistance of a conductor depends on:

### 1. Length (L)

$$R \propto L$$

**Longer wire → More resistance**

Like a longer obstacle course - more length means more collisions for electrons!

### 2. Cross-sectional Area (A)

$$R \propto \frac{1}{A}$$

**Thicker wire → Less resistance**

Like a wider highway - more lanes for electrons to flow!

### 3. Material (ρ - resistivity)

$$R \propto \rho$$

**Different materials, different resistances**

Some materials let electrons flow easily (conductors), others don’t (insulators).

### Combined Formula

$$\boxed{R = \rho \frac{L}{A}}$$

where:

- $\rho$ = resistivity of material (Ω·m)
- $L$ = length (m)
- $A$ = cross-sectional area (m²)

> **◐ In simple terms · Iron Man's Cables**
>
> Tony Stark’s arc reactor needs to deliver HUGE currents to his suit. That’s why:
>
> - Cables are extremely SHORT (minimize L)

> - Cables are very THICK (maximize A)

> - Made of best conductors, likely superconducting! (minimize ρ)
>
> **Real engineering:** High-power cables in real life use multiple thick copper strands for the same reason!

---

## Resistivity (ρ): The Material Property

**Resistivity** is an intrinsic property of a material - doesn’t depend on shape or size.

$$\boxed{\rho = R \frac{A}{L}}$$

**Unit:** Ohm-meter (Ω·m)

### Typical Values (at 20°C)

| Material | Resistivity (Ω·m) | Type |
| --- | --- | --- |
| Silver | $1.6 \times 10^{-8}$ | Best conductor |
| Copper | $1.7 \times 10^{-8}$ | Excellent conductor |
| Gold | $2.4 \times 10^{-8}$ | Good conductor |
| Aluminum | $2.8 \times 10^{-8}$ | Good conductor |
| Tungsten | $5.6 \times 10^{-8}$ | Used in bulbs |
| Iron | $10 \times 10^{-8}$ | Fair conductor |
| Nichrome | $100 \times 10^{-8}$ | Used in heaters |
| Glass | $10^{10} - 10^{14}$ | Insulator |
| Rubber | $10^{13} - 10^{16}$ | Insulator |

**Pattern recognition:**

- Conductors: $\rho \sim 10^{-8}$ Ω·m
- Semiconductors: $\rho \sim 10^{-3}$ to $10^{3}$ Ω·m
- Insulators: $\rho > 10^{8}$ Ω·m

> **★ Key point · Why Not Use Silver Everywhere?**
>
> Silver has the lowest resistivity, so why do we use copper?
>
> **Answer:** COST!
>
> - Silver: Expensive, used only in critical applications (high-frequency circuits, aerospace)

> - Copper: 100x cheaper, almost as good (1.7 vs 1.6 × 10⁻⁸)

> - Aluminum: Even cheaper, lighter (used in power transmission lines despite higher ρ)

> - Gold: Doesn’t corrode (used in connectors, not for bulk wiring)

---

## Conductivity (σ): The Inverse

**Conductivity** measures how well a material conducts electricity.

$$\boxed{\sigma = \frac{1}{\rho}}$$

**Unit:** Siemens per meter (S/m) or (Ω·m)⁻¹

**In Ohm’s law:**

$$J = \sigma E$$

- High σ (low ρ) → Good conductor
- Low σ (high ρ) → Poor conductor (insulator)

---

## Temperature Dependence of Resistance

### For Metals (Positive Temperature Coefficient)

$$\boxed{R_T = R_0(1 + \alpha \Delta T)}$$

$$R_T = R_0[1 + \alpha(T - T_0)]$$

where:

- $R_T$ = resistance at temperature T
- $R_0$ = resistance at reference temperature $T_0$ (usually 0°C or 20°C)
- $\alpha$ = temperature coefficient of resistance (per °C or per K)
- $\Delta T = T - T_0$

**For metals:** $\alpha > 0$ (resistance INCREASES with temperature)

### Why Does This Happen?

**Microscopic explanation:**

Higher temperature → Atoms vibrate more → More collisions for electrons → Higher resistance

Think of it like:

- Cold wire: Atoms are calm, electrons drift smoothly
- Hot wire: Atoms shake violently, electrons keep bumping into them!

### Temperature Coefficient (α)

| Material | α (per °C) | Behavior |
| --- | --- | --- |
| Silver | $3.8 \times 10^{-3}$ | R increases with T |
| Copper | $3.9 \times 10^{-3}$ | R increases with T |
| Aluminum | $3.9 \times 10^{-3}$ | R increases with T |
| Tungsten | $4.5 \times 10^{-3}$ | R increases with T |
| Nichrome | $0.4 \times 10^{-3}$ | Nearly constant |
| Manganin | $0.002 \times 10^{-3}$ | Nearly constant |
| Semiconductors | Negative | R decreases with T |
| Electrolytes | Negative | R decreases with T |

> **⚠ Trap · Filament Bulb Mystery Solved!**
>
> **Question:** Why does a bulb often burn out when you switch it ON, not when it’s already glowing?
>
> **Answer:**
>
> - When OFF (cold): $R_{cold}$ is LOW

> - When ON (hot, ~2500°C): $R_{hot}$ is HIGH (can be 10-15 times higher!)

> - At switch-on: Huge surge current ($I = V/R_{cold}$) flows

> - This surge can break the filament!
>
> **This is why:** The I-V curve of a bulb is non-linear and bends upward!

### For Semiconductors (Negative Temperature Coefficient)

$$R_T = R_0 e^{-\beta \Delta T}$$

**For small ΔT:**

$$R_T \approx R_0(1 - \alpha \Delta T)$$

where $\alpha < 0$ (negative)

**Semiconductors:** Higher temperature → More free electrons → LOWER resistance

Used in:

- Thermistors (temperature sensors)
- Temperature compensation circuits

---

## Special Cases and Applications

### 1. Wire Stretching Problems (JEE Favorite!)

When a wire is stretched, volume remains constant.

**Original:** Length $L$, Area $A$, Resistance $R$

**After stretching to length $nL$:**

Volume constant: $AL = A'L'$

If $L' = nL$, then $A' = \frac{A}{n}$

New resistance:

$$R' = \rho \frac{L'}{A'} = \rho \frac{nL}{A/n} = \rho \frac{n^2 L}{A} = n^2 R$$

$$\boxed{R' = n^2 R}$$

**Key formula:** If length becomes $n$ times, resistance becomes $n^2$ times!

### 2. Combining Same Wire into n Parts

**Wire cut into n equal parts:**

Each part: $R_{part} = \frac{R}{n}$

**If all n parts connected in parallel:**

$$\frac{1}{R_{eq}} = n \times \frac{1}{R/n} = \frac{n^2}{R}$$

$$\boxed{R_{eq} = \frac{R}{n^2}}$$

### 3. Cylindrical Shell

For a hollow cylinder (tube):

$$R = \rho \frac{L}{\pi(r_2^2 - r_1^2)}$$

where $r_2$ = outer radius, $r_1$ = inner radius

---

## Conductance (G): The Inverse of Resistance

$$\boxed{G = \frac{1}{R} = \frac{I}{V}}$$

**Unit:** Siemens (S) or mho (℧)

From $R = \rho \frac{L}{A}$:

$$G = \frac{1}{R} = \frac{\sigma A}{L}$$

**Uses:**

- Parallel circuit calculations become easier (add conductances directly!)
- $G_{eq} = G_1 + G_2 + G_3$ (in parallel)

---

## Combination of Resistors

### Series Combination

$$\boxed{R_{eq} = R_1 + R_2 + R_3 + ...}$$

- Same current through all resistors
- Voltage divides proportionally

**Voltage divider:**

$$V_1 = \frac{R_1}{R_1 + R_2}V$$

### Parallel Combination

$$\boxed{\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...}$$

- Same voltage across all resistors
- Current divides inversely

**Current divider:**

$$I_1 = \frac{R_2}{R_1 + R_2}I$$

### Special Cases

**Two resistors in parallel:**

$$R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$$

**n equal resistors:**

- Series: $R_{eq} = nR$
- Parallel: $R_{eq} = \frac{R}{n}$

---

## Memory Tricks & Patterns

### Mnemonic for Resistance Formula

**“Really Long And Pointless”** → $R = \rho \frac{L}{A}$

Or: **“Rho Loves Africa”** → $R = \rho L / A$

### Temperature Coefficient Memory

**“Metals Get MAD when heated”** → $\alpha$ is positive, R increases

**“Semiconductors Stay COOL”** → $\alpha$ is negative, R decreases

### Wire Stretching

**“Stretch to N, Resistance to N-squared”**

$L \to nL$, then $R \to n^2R$

### JEE Pattern Recognition

1. **If ρ is given:** Problem involves different materials
2. **If wire is stretched:** Use $R' = n^2 R$
3. **If temperature mentioned:** Use $R_T = R_0(1 + \alpha \Delta T)$
4. **If wire is cut and rearranged:** Use $R = \rho L/A$ for each part

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Given geometry (L, A) and material (ρ):**
>
> - Use $R = \rho L/A$
>
> **Given R at one temperature, find at another:**
>
> - Use $R_T = R_0(1 + \alpha \Delta T)$
>
> **Wire is stretched/compressed:**
>
> - Use volume constant: $AL = A'L'$

> - Then $R' = n^2 R$ if stretched to $nL$
>
> **Comparing resistances of different wires:**
>
> - Use $\frac{R_1}{R_2} = \frac{\rho_1}{\rho_2} \times \frac{L_1}{L_2} \times \frac{A_2}{A_1}$
>
> **For alloys (Manganin, Nichrome, Constantan):**
>
> - Nearly constant R with temperature

> - Used in standard resistors

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing ρ (resistivity) with R (resistance)**
>
> **Wrong:** “Resistivity depends on length and area”
>
> **Correct:**
>
> - **Resistivity (ρ):** Material property, independent of dimensions

> - **Resistance (R):** Depends on both material (ρ) AND dimensions (L, A)
>
> **JEE Trap:** “Find resistivity of a 2m copper wire” - resistivity is SAME for all copper, regardless of length!

> **⚠ Trap #2: Wire Stretching - Forgetting Volume Constant**
>
> **Wrong:** “Wire stretched to 2L, so R becomes 2R”
>
> **Correct:** Must account for BOTH length increase AND area decrease!
>
> - $L' = 2L$ → Factor of 2

> - $A' = A/2$ → Factor of 2 (in denominator)

> - Combined: $R' = 2 \times 2 \times R = 4R$
>
> **Formula:** $R' = n^2 R$ where $n$ is stretching factor

> **⚠ Trap #3: Temperature Formula Sign Errors**
>
> **Wrong:** “For all materials, $R_T = R_0(1 + \alpha \Delta T)$”
>
> **Correct:**
>
> - **Metals:** Use $+\alpha$ (α positive)

> - **Semiconductors:** Use $-\alpha$ (α negative) OR different formula!
>
> **Common error:** Using metal formula for semiconductors!

> **⚠ Trap #4: Forgetting Units**
>
> **Common mistake:** Mixing cm and m, mm² and m²
>
> **Always convert to SI:**
>
> - Length → meters (m)

> - Area → m²

> - Resistivity → Ω·m
>
> **Example:** Area = 2 mm² = $2 \times 10^{-6}$ m² (NOT $2 \times 10^{-3}$!)

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> A copper wire has length 10 m and cross-sectional area 2 mm². If resistivity of copper is $1.7 \times 10^{-8}$ Ω·m, find its resistance.
>
> **Solution:**
>
> Given:
>
> - $L = 10$ m

> - $A = 2 \text{ mm}^2 = 2 \times 10^{-6}$ m²

> - $\rho = 1.7 \times 10^{-8}$ Ω·m
>
> $$R = \rho \frac{L}{A} = 1.7 \times 10^{-8} \times \frac{10}{2 \times 10^{-6}}$$

$$R = 1.7 \times 10^{-8} \times 5 \times 10^{6} = 8.5 \times 10^{-2} = 0.085 \text{ Ω}$$
>
> **Answer:** $R = 0.085$ Ω = 85 mΩ
>
> **Insight:** Even 10 m of copper wire has very small resistance!

> **↗ Connection · Problem 1.2**
>
> A wire has resistance 20 Ω at 0°C. Find its resistance at 100°C if temperature coefficient is $4 \times 10^{-3}$ per °C.
>
> **Solution:**
>
> $$R_T = R_0(1 + \alpha \Delta T)$$

$$R_{100} = 20[1 + 4 \times 10^{-3} \times (100 - 0)]$$

$$R_{100} = 20[1 + 0.4] = 20 \times 1.4 = 28 \text{ Ω}$$
>
> **Answer:** $R_{100} = 28$ Ω
>
> **Concept:** Resistance increased by 40% for 100°C rise!

> **↗ Connection · Problem 1.3**
>
> Two wires of same material have equal lengths but radii in ratio 2:1. What is the ratio of their resistances?
>
> **Solution:**
>
> $$R = \rho \frac{L}{A} = \rho \frac{L}{\pi r^2}$$
>
> Same material (ρ), same length (L):
>
> $$\frac{R_1}{R_2} = \frac{r_2^2}{r_1^2}$$
>
> Given $\frac{r_1}{r_2} = \frac{2}{1}$:
>
> $$\frac{R_1}{R_2} = \frac{1^2}{2^2} = \frac{1}{4}$$
>
> **Answer:** $R_1 : R_2 = 1:4$
>
> **Key point:** Resistance inversely proportional to square of radius!

### Level 2: JEE Main

> **↗ Connection · Problem 2.1 - Wire Stretching (HIGH YIELD!)**
>
> A wire of resistance 100 Ω is stretched to twice its original length. What is its new resistance?
>
> **Solution:**
>
> **Method 1: Direct formula**
>
> Wire stretched to $n = 2$ times:
>
> $$R' = n^2 R = 2^2 \times 100 = 400 \text{ Ω}$$
>
> **Method 2: From first principles**
>
> Original: $L$, $A$, $R = 100$ Ω
>
> Stretched: $L' = 2L$
>
> Volume constant: $AL = A'L'$
>
> $$A' = \frac{AL}{L'} = \frac{AL}{2L} = \frac{A}{2}$$

$$R' = \rho \frac{L'}{A'} = \rho \frac{2L}{A/2} = 4 \rho \frac{L}{A} = 4R = 400 \text{ Ω}$$
>
> **Answer:** $R' = 400$ Ω
>
> **JEE Shortcut:** Remember $R' = n^2 R$ - saves 30 seconds in exam!

> **↗ Connection · Problem 2.2**
>
> A wire of resistance R is cut into 5 equal parts. These parts are connected in parallel. What is the equivalent resistance?
>
> **Solution:**
>
> Each part: $R_{part} = \frac{R}{5}$
>
> 5 parts in parallel:
>
> $$\frac{1}{R_{eq}} = \frac{1}{R/5} + \frac{1}{R/5} + \frac{1}{R/5} + \frac{1}{R/5} + \frac{1}{R/5}$$

$$\frac{1}{R_{eq}} = 5 \times \frac{5}{R} = \frac{25}{R}$$

$$R_{eq} = \frac{R}{25}$$
>
> **Quick formula:** Cut into $n$ parts, connected in parallel → $R_{eq} = \frac{R}{n^2}$
>
> **Answer:** $R_{eq} = \frac{R}{25}$

> **↗ Connection · Problem 2.3**
>
> Resistance of a metal wire at 0°C is 100 Ω. At what temperature will it be 120 Ω? (α = $4 \times 10^{-3}$ per °C)
>
> **Solution:**
>
> $$R_T = R_0(1 + \alpha \Delta T)$$

$$120 = 100[1 + 4 \times 10^{-3} \times (T - 0)]$$

$$1.2 = 1 + 4 \times 10^{-3} \times T$$

$$0.2 = 4 \times 10^{-3} \times T$$

$$T = \frac{0.2}{4 \times 10^{-3}} = \frac{0.2}{0.004} = 50°\text{C}$$
>
> **Answer:** $T = 50°$C
>
> **Check:** 20% increase needs 50°C rise (since α = 0.004 = 0.4% per °C)

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A wire of resistance R is stretched uniformly so that its radius becomes half. What is the ratio of new resistance to original resistance?
>
> **Solution:**
>
> If radius becomes half: $r' = \frac{r}{2}$
>
> Area: $A' = \pi (r')^2 = \pi \left(\frac{r}{2}\right)^2 = \frac{\pi r^2}{4} = \frac{A}{4}$
>
> Volume constant: $AL = A'L'$
>
> $$L' = \frac{AL}{A'} = \frac{AL}{A/4} = 4L$$
>
> New resistance:
>
> $$R' = \rho \frac{L'}{A'} = \rho \frac{4L}{A/4} = 16 \rho \frac{L}{A} = 16R$$
>
> **Answer:** $\frac{R'}{R} = 16$
>
> **Pattern:** If radius → r/2, then R → 16R
>
> - Area reduces by 4

> - Length increases by 4

> - Combined effect: 4 × 4 = 16
>
> **Alternative:** $n = L'/L = 4$, so $R' = n^2 R = 16R$

> **↗ Connection · Problem 3.2**
>
> Two wires A and B of same material have their lengths in ratio 1:2 and radii in ratio 2:3. They are connected in series. Find the ratio of potential drops across them.
>
> **Solution:**
>
> $$R = \rho \frac{L}{\pi r^2}$$

$$\frac{R_A}{R_B} = \frac{L_A}{L_B} \times \frac{r_B^2}{r_A^2} = \frac{1}{2} \times \frac{3^2}{2^2} = \frac{1}{2} \times \frac{9}{4} = \frac{9}{8}$$
>
> In series, same current flows through both.
>
> Potential drop: $V = IR$
>
> $$\frac{V_A}{V_B} = \frac{R_A}{R_B} = \frac{9}{8}$$
>
> **Answer:** $V_A : V_B = 9:8$
>
> **Key concept:** In series, voltage divides in ratio of resistances.

> **↗ Connection · Problem 3.3 - JEE Advanced Level**
>
> A metal rod of length L and cross-section A has resistivity varying with distance x from one end as $\rho(x) = \rho_0(1 + \frac{x}{L})$. Find the resistance of the rod.
>
> **Solution:**
>
> For non-uniform resistivity, integrate!
>
> Consider small element at distance x of length dx:
>
> $$dR = \rho(x) \frac{dx}{A} = \frac{\rho_0}{A}\left(1 + \frac{x}{L}\right)dx$$
>
> Total resistance:
>
> $$R = \int_0^L dR = \int_0^L \frac{\rho_0}{A}\left(1 + \frac{x}{L}\right)dx$$

$$R = \frac{\rho_0}{A} \int_0^L \left(1 + \frac{x}{L}\right)dx$$

$$R = \frac{\rho_0}{A} \left[x + \frac{x^2}{2L}\right]_0^L$$

$$R = \frac{\rho_0}{A} \left[L + \frac{L^2}{2L}\right] = \frac{\rho_0}{A}\left[L + \frac{L}{2}\right]$$

$$R = \frac{\rho_0 L}{A} \times \frac{3}{2}$$
>
> **Answer:**
>
> $$\boxed{R = \frac{3\rho_0 L}{2A}}$$
>
> **Advanced concept:** For non-uniform materials, use calculus!
>
> **Sanity check:** If ρ were constant at ρ₀, we’d get $R = \frac{\rho_0 L}{A}$. Our answer is 1.5 times this, which makes sense since ρ increases along the rod!

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Basic resistance formula | $R = \rho \frac{L}{A}$ |
| Temperature dependence (metal) | $R_T = R_0(1 + \alpha \Delta T)$ |
| Wire stretched to $nL$ | $R_{new} = n^2 R$ |
| Wire cut into $n$ parts, parallel | $R_{eq} = \frac{R}{n^2}$ |
| Conductivity | $\sigma = \frac{1}{\rho}$ |
| Conductance | $G = \frac{1}{R}$ |
| Radius halved | $R$ becomes 16 times |
| Comparing two wires | $\frac{R_1}{R_2} = \frac{\rho_1}{\rho_2} \cdot \frac{L_1}{L_2} \cdot \frac{A_2}{A_1}$ |

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Wire stretching problems** (EVERY YEAR!)
>
>    - Formula: $R' = n^2 R$ where wire stretched to $n$ times length

>    - Practice 10-15 variations before exam

> 2. **Temperature dependence**
>
>    - $R_T = R_0(1 + \alpha \Delta T)$ for metals

>    - Don’t forget: α positive for metals, negative for semiconductors

> 3. **Comparing resistances**
>
>    - Two wires with different L, A, ρ

>    - Use ratio method to avoid calculation errors

> 4. **Material properties**
>
>    - Memorize: Copper ρ ≈ $1.7 \times 10^{-8}$ Ω·m

>    - Know order: Silver < Copper < Gold < Aluminum

> 5. **Tricky scenarios**
>
>    - Wire cut and rearranged

>    - Non-uniform cross-section or resistivity

>    - Hollow cylinders
>
> **Time-saving tricks:**
>
> - For stretched wire, directly use $R' = n^2 R$

> - For cut wire in parallel, use $R_{eq} = R/n^2$

> - Always check if volume constant mentioned (stretching problems)

---

## Related Topics

### Within Current Electricity

- [Ohm’s Law](../ohms-law/index.md) - Foundation for understanding resistance
- [Drift Velocity](../drift-velocity/index.md) - Microscopic explanation of resistivity
- [Electrical Power](../electrical-power/index.md) - Energy dissipation in resistors
- [Kirchhoff’s Laws](../kirchhoffs-laws/index.md) - Analyzing resistor networks

### Connected Chapters

- [Thermal Physics](../../thermodynamics/index.md) - Temperature effects on resistance
- [Atomic Structure](../../atoms-nuclei/index.md) - Why different materials have different ρ
- [Semiconductors](../../electronic-devices/index.md) - Negative temperature coefficient explained

### Math Connections

- [Proportionality](../../../mathematics/index.md) - $R \propto L$, $R \propto 1/A$
- [Integration](../../../mathematics/index.md) - For non-uniform resistivity problems
- [Logarithms](../../../mathematics/index.md) - For exponential temperature dependence

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Resistance formula $R = \rho L/A$ combines material property (ρ) with geometry (L, A)** - longer and thinner means higher R!

> 2. **Resistivity (ρ) is intrinsic to material, resistance (R) depends on dimensions** - don’t confuse the two!

> 3. **Wire stretching: $R' = n^2 R$ when length becomes $nL$** - most common JEE problem type in this topic!

> 4. **Temperature dependence: Metals have positive α (R increases), semiconductors have negative α (R decreases)** - explains filament bulb behavior!

> 5. **Know your materials:** Silver < Copper < Gold < Aluminum in resistivity (silver is the best conductor, aluminum the worst of these). Nichrome and Manganin have nearly constant R with temperature.
>
> **“Resistance is like traffic - longer roads (L ↑), narrower lanes (A ↓), or difficult terrain (ρ ↑) all slow down the flow. Master this, and circuit problems become easy!”**

---

From TestGuru · our mock-test platform

## You've read Resistance, Resistivity, and Temperature Dependence.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=current-electricity&tg_exam=jee-main&tg_page=%2Fphysics%2Fcurrent-electricity%2Fresistance%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/current-electricity/resistance/",this.page.identifier="/physics/current-electricity/resistance/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="resistanceSimulator" id="anim-resistanceSimulator-1795396423102190337"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-resistanceSimulator-1795396423102190337")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/current-electricity/resistance/](https://jeenotes.in/physics/current-electricity/resistance/) · raw HTML: `offline/physics/current-electricity/resistance/index.html`_
