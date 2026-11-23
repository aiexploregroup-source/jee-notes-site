---
title: "Heat Engines and Carnot Cycle"
source: "https://jeenotes.in/physics/thermodynamics/heat-engines/"
description: "Master heat engines, Carnot cycle, efficiency, and real engine cycles for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 10"
html: "../../../../offline/physics/thermodynamics/heat-engines/index.html"
extracted: "2026-11-23"
---

> Master heat engines, Carnot cycle, efficiency, and real engine cycles for JEE Main & Advanced

## Real-Life Hook: Your Car is a Heat Engine on Wheels!

Every time you start your car, you’re operating a sophisticated heat engine! The gasoline explodes at ~2000°C (high temperature), pushes pistons to do work (driving wheels), and exhausts waste heat through the radiator (low temperature).

Your car’s efficiency? Only about **25-30%**! Where does the rest go?

- ~35% lost through exhaust
- ~30% lost through cooling system
- ~5% lost to friction

Even the best Formula 1 engines achieve only ~50% efficiency. Why can’t we do better? **The Second Law of Thermodynamics** sets a fundamental limit: the **Carnot efficiency**, which depends only on operating temperatures.

Understanding heat engines explains:

- Why hybrid cars are more efficient
- Why diesel engines beat petrol engines
- How power plants generate electricity
- Why we can’t build perpetual motion machines

---

## What is a Heat Engine?

### Definition

**Heat engine:** A device that converts heat into mechanical work by operating in a cycle.

### Basic Components

1. **Hot reservoir (Source)** at temperature $T_H$
2. **Working substance** (gas, steam, etc.)
3. **Cold reservoir (Sink)** at temperature $T_C$
4. **Mechanical output** (piston, turbine, etc.)

### Operating Principle

**In one complete cycle:**

1. Absorb heat $Q_H$ from hot reservoir
2. Convert part to work $W$
3. Reject remaining heat $Q_C$ to cold reservoir
4. Return to initial state

---

## Energy Flow in Heat Engines

### First Law Application

For complete cycle: $\Delta U = 0$ (returns to same state)

**Energy conservation:**

$$Q_H = W + Q_C$$

**Work output:**

$$W = Q_H - Q_C$$

**Sign convention:**

- $Q_H$ > 0 (heat absorbed)
- $Q_C$ > 0 (magnitude of heat rejected)
- $W$ > 0 (work done by engine)

### Efficiency

**Thermal efficiency (η):**

$$\eta = \frac{\text{Useful output}}{\text{Energy input}} = \frac{W}{Q_H}$$

**In terms of heat:**

$$\eta = \frac{Q_H - Q_C}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

**Constraints:**

- $0 < \eta < 1$ (Second Law)
- $\eta < 1 - \frac{T_C}{T_H}$ (Carnot limit)

### Why Efficiency Matters

**Example:** 1000 MW power plant with η = 40%

- Fuel energy input: 2500 MW
- Electrical output: 1000 MW (40%)
- Waste heat: 1500 MW (60%)
- This waste heat warms rivers, requires cooling towers!

---

## The Carnot Cycle: The Ideal Heat Engine

### What is the Carnot Cycle?

The **Carnot cycle** is a theoretical ideal cycle consisting of:

1. Two isothermal processes (at $T_H$ and $T_C$)
2. Two adiabatic processes (connecting the isothermals)

**All processes are reversible** (quasi-static, frictionless).

### The Four Steps

**Step 1: Isothermal Expansion (A → B) at $T_H$**

- Gas in contact with hot reservoir at $T_H$
- Expands from $V_A$ to $V_B$ at constant temperature
- Heat absorbed: $Q_H = nRT_H\ln(V_B/V_A)$
- Work done: $W_1 = Q_H$ (since $\Delta U = 0$)

**Step 2: Adiabatic Expansion (B → C)**

- Thermally isolated (no heat exchange)
- Expands from $V_B$ to $V_C$
- Temperature drops from $T_H$ to $T_C$
- Work done: $W_2 = nC_V(T_H - T_C)$
- Heat: $Q = 0$

**Step 3: Isothermal Compression (C → D) at $T_C$**

- Gas in contact with cold reservoir at $T_C$
- Compresses from $V_C$ to $V_D$ at constant temperature
- Heat rejected: $Q_C = nRT_C\ln(V_C/V_D)$
- Work done: $W_3 = -Q_C$ (negative, compression)

**Step 4: Adiabatic Compression (D → A)**

- Thermally isolated
- Compresses from $V_D$ to $V_A$
- Temperature rises from $T_C$ to $T_H$
- Work done: $W_4 = -nC_V(T_H - T_C)$
- Heat: $Q = 0$

### Carnot Cycle on PV Diagram

**Shape:** Elongated loop with:

- Two hyperbolic curves (isothermals)
- Two steeper curves (adiabatics)
- Clockwise direction (heat engine)

**Area enclosed = Net work done**

---

## Carnot Efficiency: The Ultimate Limit

### Derivation

**Heat absorbed at $T_H$:**

$$Q_H = nRT_H\ln\frac{V_B}{V_A}$$

**Heat rejected at $T_C$:**

$$Q_C = nRT_C\ln\frac{V_C}{V_D}$$

**For adiabatic processes:**

- B → C: $T_HV_B^{\gamma-1} = T_CV_C^{\gamma-1}$
- D → A: $T_CV_D^{\gamma-1} = T_HV_A^{\gamma-1}$

Dividing these:

$$\frac{V_B^{\gamma-1}}{V_D^{\gamma-1}} = \frac{V_C^{\gamma-1}}{V_A^{\gamma-1}}$$

$$\left(\frac{V_B}{V_D}\right)^{\gamma-1} = \left(\frac{V_C}{V_A}\right)^{\gamma-1}$$

$$\frac{V_B}{V_D} = \frac{V_C}{V_A}$$

Or: $\frac{V_B}{V_A} = \frac{V_C}{V_D}$

**Therefore:**

$$\frac{Q_C}{Q_H} = \frac{nRT_C\ln(V_C/V_D)}{nRT_H\ln(V_B/V_A)} = \frac{T_C}{T_H}$$

**Carnot efficiency:**

$$\eta_{Carnot} = 1 - \frac{Q_C}{Q_H} = 1 - \frac{T_C}{T_H}$$

**This is the maximum possible efficiency!**

**Depends ONLY on temperatures** - independent of:

- Working substance (gas type)
- Pressure or volume values
- Amount of gas

### Implications

1. **To increase efficiency:**

   - Increase $T_H$ (hotter combustion)
   - Decrease $T_C$ (better cooling)
2. **100% efficiency requires:**

   - $T_C = 0$ (absolute zero - impossible!)
   - Or $T_H = \infty$ (infinite temperature - impossible!)
3. **Practical limits:**

   - Car engines: $T_H ≈ 2000$ K, $T_C ≈ 350$ K → $\eta_{max} ≈ 82.5%$
   - Actual: ~30% (due to irreversibilities)

---

## Carnot’s Theorem

### Statement

> **No heat engine operating between two reservoirs can be more efficient than a Carnot engine operating between the same two temperatures.**

### Corollaries

1. **All reversible engines** between same $T_H$ and $T_C$ have **same efficiency** (Carnot)
2. **All irreversible engines** have **lower efficiency**
3. **Efficiency depends only on temperatures**, not working substance

### Why Carnot is Ideal

**Reversible means:**

- Quasi-static (infinitely slow)
- Frictionless
- No heat flow across finite ΔT
- **Impossible to achieve in practice!**

**All real engines are irreversible** → Less efficient than Carnot

---

## Real Heat Engines

### 1. Otto Cycle (Petrol Engine)

**Processes:**

1. **Adiabatic compression** (compression stroke)
2. **Isochoric heat addition** (spark ignition)
3. **Adiabatic expansion** (power stroke)
4. **Isochoric heat rejection** (exhaust)

**Efficiency:**

$$\eta_{Otto} = 1 - \frac{1}{r^{\gamma-1}}$$

where $r = V_{max}/V_{min}$ is **compression ratio**

**Typical values:**

- Compression ratio: 8-11
- Efficiency: 25-30% (real), 50-60% (theoretical)

**Why less than Carnot?**

- Isochoric processes (not isothermal)
- Friction, heat loss
- Incomplete combustion

### 2. Diesel Cycle

**Processes:**

1. **Adiabatic compression** (higher than Otto)
2. **Isobaric heat addition** (fuel injection)
3. **Adiabatic expansion**
4. **Isochoric heat rejection**

**Efficiency:**

$$\eta_{Diesel} = 1 - \frac{1}{r^{\gamma-1}} \times \frac{\rho^\gamma - 1}{\gamma(\rho - 1)}$$

where $\rho$ is **cutoff ratio** = $V_3/V_2$

**Typical values:**

- Compression ratio: 14-25 (higher than Otto!)
- Efficiency: 30-40% (real), 60-70% (theoretical)

**Why more efficient than Otto?**

- Higher compression ratio
- Higher operating temperatures

### 3. Stirling Cycle

**Processes:**

1. Isothermal expansion at $T_H$
2. Isochoric cooling
3. Isothermal compression at $T_C$
4. Isochoric heating

**Efficiency:**

$$\eta_{Stirling} = \eta_{Carnot} = 1 - \frac{T_C}{T_H}$$

**Why not used more?**

- Difficult to implement
- Low power output
- Slow speed
- Used in specialized applications (submarines, space)

### 4. Brayton Cycle (Gas Turbine)

**Processes:**

1. Adiabatic compression (compressor)
2. Isobaric heat addition (combustor)
3. Adiabatic expansion (turbine)
4. Isobaric heat rejection (exhaust)

**Used in:**

- Jet engines
- Power plants (combined cycle)

**Efficiency:**

$$\eta_{Brayton} = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$$

where $r_p = P_2/P_1$ is pressure ratio

---

## Increasing Efficiency: Practical Methods

### 1. Combined Cycle Power Plants

**Concept:** Combine gas turbine (Brayton) with steam turbine (Rankine)

**How it works:**

1. Gas turbine burns fuel → electricity (efficiency ~40%)
2. Exhaust heat boils water → steam turbine → more electricity
3. Combined efficiency: **55-60%** (best for large plants!)

### 2. Cogeneration (CHP)

**Combined Heat and Power:** Use waste heat for heating/cooling

**Overall utilization:** Up to 90% (not efficiency, but energy use)

### 3. Higher Operating Temperatures

**Materials challenge:**

- Higher $T_H$ → Better efficiency
- But materials must withstand heat
- Modern turbines: Use ceramic coatings, active cooling

### 4. Regeneration and Recuperation

**Concept:** Use exhaust heat to preheat incoming air/fuel

**Benefit:** Less fuel needed for same power

---

## Common Mistakes & Tricks

### Mistake 1: Using °C in Carnot Formula

❌ $\eta = 1 - 300/500$ (if temperatures in °C)
✅ Convert to Kelvin first!

**Always use absolute temperature (Kelvin)** in thermodynamic formulas.

### Mistake 2: Thinking Real Engine Can Match Carnot

❌ Car engine between 2000 K and 300 K → η should be 85%
✅ Real engines: friction, heat loss, finite-speed → Much lower!

**Carnot is theoretical limit**, never achieved in practice.

### Mistake 3: Confusing Heat and Temperature

- High temperature ≠ High heat content
- Carnot efficiency depends on **temperature ratio**, not heat amounts

### Mistake 4: Reversible = Realistic

❌ Carnot is reversible, so we can build it
✅ Reversible requires infinitely slow, frictionless - impossible!

**All real processes are irreversible.**

### Memory Trick: “Hot-Cold Gap”

$$\eta = 1 - \frac{T_C}{T_H} = \frac{T_H - T_C}{T_H}$$

**Bigger the gap ($T_H - T_C$), better the efficiency!**

### Trick: Compression Ratio

**Otto cycle:** Higher compression → Better efficiency
But: Too high → Knocking (pre-ignition)

**Diesel:** Can use higher compression (no premix, no knocking)
→ More efficient than petrol!

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** A Carnot engine operates between 400 K and 300 K. Find its efficiency and work done if 1000 J is absorbed from hot reservoir.

<details><summary>Solution</summary><p><strong>Efficiency:</strong></p>$$\eta = 1 - \frac{T_C}{T_H} = 1 - \frac{300}{400} = 1 - 0.75 = 0.25 = 25\%$$<p><strong>Work done:</strong></p>$$W = \eta \times Q_H = 0.25 \times 1000 = 250 \text{ J}$$<p><strong>Heat rejected:</strong></p>$$Q_C = Q_H - W = 1000 - 250 = 750 \text{ J}$$</details>

**Q2.** An engine has efficiency 40% and does 200 J of work per cycle. Find:
(a) Heat absorbed
(b) Heat rejected

<details><summary>Solution</summary><p><strong>(a) Heat absorbed:</strong></p>$$\eta = \frac{W}{Q_H}$$<p></p>$$Q_H = \frac{W}{\eta} = \frac{200}{0.4} = 500 \text{ J}$$<p><strong>(b) Heat rejected:</strong></p>$$Q_C = Q_H - W = 500 - 200 = 300 \text{ J}$$<p>Or: $Q_C = Q_H(1 - \eta) = 500 \times 0.6 = 300$ J ✓</p></details>

**Q3.** At what temperature is Carnot efficiency 50% if cold reservoir is at 27°C?

<details><summary>Solution</summary><p>Given: $\eta = 0.5$, $T_C = 27°C = 300$ K</p>$$\eta = 1 - \frac{T_C}{T_H}$$<p></p>$$0.5 = 1 - \frac{300}{T_H}$$<p></p>$$\frac{300}{T_H} = 0.5$$<p></p>$$T_H = \frac{300}{0.5} = 600 \text{ K} = 327°C$$</details>

---

### Level 2: JEE Main/Advanced

**Q4.** A Carnot engine working between 400 K and 300 K absorbs 600 J from hot reservoir. A second Carnot engine works between 300 K and 200 K, taking heat rejected by first engine. Find:
(a) Work done by each engine
(b) Total work
(c) Overall efficiency if treated as single engine

<details><summary>Solution</summary><p><strong>Engine 1:</strong> Between 400 K and 300 K</p>$$\eta_1 = 1 - \frac{300}{400} = 0.25$$

$$W_1 = \eta_1 \times Q_{H1} = 0.25 \times 600 = 150 \text{ J}$$

$$Q_{C1} = Q_{H1} - W_1 = 600 - 150 = 450 \text{ J}$$<p><strong>Engine 2:</strong> Between 300 K and 200 K</p><p>Heat input to engine 2: $Q_{H2} = Q_{C1} = 450$ J</p>$$\eta_2 = 1 - \frac{200}{300} = \frac{1}{3} ≈ 0.333$$

$$W_2 = \eta_2 \times Q_{H2} = \frac{1}{3} \times 450 = 150 \text{ J}$$<p><strong>(b) Total work:</strong></p>$$W_{total} = W_1 + W_2 = 150 + 150 = 300 \text{ J}$$<p><strong>(c) Overall efficiency:</strong>
Heat absorbed from 400 K reservoir: 600 J
Total work: 300 J</p>$$\eta_{overall} = \frac{300}{600} = 0.5 = 50\%$$<p><strong>Check using Carnot formula:</strong></p>$$\eta_{overall} = 1 - \frac{200}{400} = 0.5$$<p>✓</p><p><strong>Note:</strong> Two Carnot engines in series = One Carnot engine from highest to lowest temperature!</p></details>

**Q5.** An Otto cycle has compression ratio 8 and operates with air (γ = 1.4). Find:
(a) Theoretical efficiency
(b) Compare with Carnot efficiency if $T_{max} = 2000$ K, $T_{min} = 300$ K

<details><summary>Solution</summary><p><strong>(a) Otto efficiency:</strong></p>$$\eta_{Otto} = 1 - \frac{1}{r^{\gamma-1}}$$<p></p>$$\eta_{Otto} = 1 - \frac{1}{8^{1.4-1}} = 1 - \frac{1}{8^{0.4}}$$<p>Calculate: $8^{0.4} = (2^3)^{0.4} = 2^{1.2} = 2.297$</p>$$\eta_{Otto} = 1 - \frac{1}{2.297} = 1 - 0.435 = 0.565 = 56.5\%$$<p><strong>(b) Carnot efficiency:</strong></p>$$\eta_{Carnot} = 1 - \frac{300}{2000} = 1 - 0.15 = 0.85 = 85\%$$<p><strong>Comparison:</strong></p>$$\eta_{Otto} = 56.5\% &lt; \eta_{Carnot} = 85\%$$<p><strong>Otto is less efficient</strong> because:</p><ul><li>Uses isochoric (not isothermal) heat addition/rejection</li><li>Doesn’t operate at constant max/min temperatures throughout</li><li>Has irreversibilities</li></ul><p><strong>But 56.5% is still much better than real engines (~30%)</strong> due to friction, heat loss, etc.</p></details>

**Q6.** A refrigerator (reverse Carnot engine) has COP = 5 and rejects 600 J to room. Find:
(a) Heat removed from inside
(b) Work input
(c) If used as heat pump, what is COP?

<details><summary>Solution</summary><p><strong>(a) Heat removed:</strong></p>$$\text{COP}_R = \frac{Q_C}{W}$$<p>Also: $Q_H = Q_C + W = 600$ J</p>$$\text{COP}_R = \frac{Q_C}{Q_H - Q_C}$$<p></p>$$5 = \frac{Q_C}{600 - Q_C}$$<p></p>$$5(600 - Q_C) = Q_C$$<p></p>$$3000 - 5Q_C = Q_C$$<p></p>$$3000 = 6Q_C$$<p></p>$$Q_C = 500 \text{ J}$$<p><strong>(b) Work input:</strong></p>$$W = Q_H - Q_C = 600 - 500 = 100 \text{ J}$$<p>Or: $W = Q_C/\text{COP}_R = 500/5 = 100$ J ✓</p><p><strong>(c) COP as heat pump:</strong></p>$$\text{COP}_{HP} = \text{COP}_R + 1 = 5 + 1 = 6$$<p>Or: $\text{COP}_{HP} = Q_H/W = 600/100 = 6$ ✓</p><p><strong>Same device, different purpose → Different COP!</strong></p></details>

---

### Level 3: JEE Advanced

**Q7.** A Carnot engine operates between $T_H$ and $T_C$. If both temperatures are increased by same amount ΔT, does efficiency increase, decrease, or stay same? Prove mathematically.

<details><summary>Solution</summary><p><strong>Initial efficiency:</strong></p>$$\eta_1 = 1 - \frac{T_C}{T_H}$$<p><strong>After increasing both by ΔT:</strong></p>$$\eta_2 = 1 - \frac{T_C + \Delta T}{T_H + \Delta T}$$<p><strong>Compare:</strong></p>$$\eta_2 - \eta_1 = \left(1 - \frac{T_C + \Delta T}{T_H + \Delta T}\right) - \left(1 - \frac{T_C}{T_H}\right)$$

$$= \frac{T_C}{T_H} - \frac{T_C + \Delta T}{T_H + \Delta T}$$

$$= \frac{T_C(T_H + \Delta T) - T_H(T_C + \Delta T)}{T_H(T_H + \Delta T)}$$

$$= \frac{T_C T_H + T_C\Delta T - T_H T_C - T_H\Delta T}{T_H(T_H + \Delta T)}$$

$$= \frac{T_C\Delta T - T_H\Delta T}{T_H(T_H + \Delta T)}$$

$$= \frac{\Delta T(T_C - T_H)}{T_H(T_H + \Delta T)}$$<p>Since $T_C &lt; T_H$ (always), numerator is negative.</p>$$\eta_2 - \eta_1 &lt; 0$$

$$\boxed{\eta_2 &lt; \eta_1}$$<p><strong>Efficiency DECREASES!</strong></p><p><strong>Intuition:</strong></p>$$\eta = \frac{T_H - T_C}{T_H}$$<p>Adding same ΔT to both:</p>$$\eta_{new} = \frac{(T_H + \Delta T) - (T_C + \Delta T)}{T_H + \Delta T} = \frac{T_H - T_C}{T_H + \Delta T}$$<p>Same numerator, <strong>larger denominator</strong> → <strong>smaller efficiency</strong>.</p><p><strong>Practical:</strong> To increase efficiency, increase $T_H$ MORE than $T_C$ (or decrease $T_C$).</p></details>

**Q8.** A Carnot engine takes 1000 J from 500 K reservoir and rejects to 300 K reservoir. A second engine takes 1000 J from 300 K reservoir and rejects to 100 K reservoir. Compare:
(a) Work outputs
(b) Efficiencies
(c) Heat rejected

<details><summary>Solution</summary><p><strong>Engine 1:</strong> 500 K to 300 K</p>$$\eta_1 = 1 - \frac{300}{500} = 0.4$$

$$W_1 = \eta_1 \times Q_{H1} = 0.4 \times 1000 = 400 \text{ J}$$

$$Q_{C1} = 1000 - 400 = 600 \text{ J}$$<p><strong>Engine 2:</strong> 300 K to 100 K</p>$$\eta_2 = 1 - \frac{100}{300} = 1 - \frac{1}{3} = \frac{2}{3} ≈ 0.667$$

$$W_2 = \eta_2 \times Q_{H2} = \frac{2}{3} \times 1000 = 666.7 \text{ J}$$

$$Q_{C2} = 1000 - 666.7 = 333.3 \text{ J}$$<p><strong>(a) Work comparison:</strong></p>$$W_2 = 666.7 \text{ J} &gt; W_1 = 400 \text{ J}$$<p><strong>Engine 2 produces more work!</strong></p><p><strong>(b) Efficiency comparison:</strong></p>$$\eta_2 = 66.7\% &gt; \eta_1 = 40\%$$<p><strong>Engine 2 is more efficient!</strong></p><p>Why? Larger temperature ratio:</p>$$\frac{T_H - T_C}{T_H}\bigg|_1 = \frac{200}{500} = 0.4$$<p></p>$$\frac{T_H - T_C}{T_H}\bigg|_2 = \frac{200}{300} = 0.667$$<p><strong>(c) Heat rejected:</strong></p>$$Q_{C1} = 600 \text{ J} &gt; Q_{C2} = 333.3 \text{ J}$$<p><strong>Engine 1 wastes more heat.</strong></p><p><strong>Lesson:</strong> Even with same heat input, efficiency depends on temperature ratio, not absolute temperatures!</p></details>

**Q9.** A Carnot refrigerator works between 0°C and 27°C. To make 10 kg of ice at 0°C from water at 0°C, how much work is required? (Latent heat of ice = 336 kJ/kg)

<details><summary>Solution</summary><p>Given:</p><ul><li>$T_C = 0°C = 273$ K (ice compartment)</li><li>$T_H = 27°C = 300$ K (room)</li><li>Heat to remove: $Q_C = mL = 10 \times 336 = 3360$ kJ</li></ul><p><strong>COP of Carnot refrigerator:</strong></p>$$\text{COP} = \frac{T_C}{T_H - T_C} = \frac{273}{300 - 273} = \frac{273}{27} = 10.11$$<p><strong>Work required:</strong></p>$$W = \frac{Q_C}{\text{COP}} = \frac{3360}{10.11} = 332.3 \text{ kJ}$$<p><strong>Heat rejected to room:</strong></p>$$Q_H = Q_C + W = 3360 + 332.3 = 3692.3 \text{ kJ}$$<p><strong>Note:</strong> For every 1 kJ of work, refrigerator removes 10.11 kJ of heat (COP = 10.11)!</p><p><strong>If refrigerator were 50% of Carnot efficiency:</strong></p>$$\text{COP}_{real} = 0.5 \times 10.11 = 5.055$$<p></p>$$W_{real} = \frac{3360}{5.055} = 665 \text{ kJ}$$<p>(twice as much!)</p></details>

**Q10.** Derive the efficiency of Otto cycle in terms of compression ratio r and γ.

<details><summary>Solution</summary><p><strong>Otto cycle processes:</strong></p><ol><li><strong>1→2:</strong> Adiabatic compression, $V_1$ to $V_2$</li><li><strong>2→3:</strong> Isochoric heat addition at $V_2$</li><li><strong>3→4:</strong> Adiabatic expansion, $V_2$ to $V_1$</li><li><strong>4→1:</strong> Isochoric heat rejection at $V_1$</li></ol><p><strong>Compression ratio:</strong> $r = V_1/V_2 = V_{max}/V_{min}$</p><p><strong>Heat addition (isochoric 2→3):</strong></p>$$Q_{in} = nC_V(T_3 - T_2)$$<p><strong>Heat rejection (isochoric 4→1):</strong></p>$$Q_{out} = nC_V(T_4 - T_1)$$<p><strong>Efficiency:</strong></p>$$\eta = 1 - \frac{Q_{out}}{Q_{in}} = 1 - \frac{T_4 - T_1}{T_3 - T_2}$$<p><strong>For adiabatic processes:</strong></p><p><strong>1→2:</strong> $T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1}$</p>$$\frac{T_2}{T_1} = \left(\frac{V_1}{V_2}\right)^{\gamma-1} = r^{\gamma-1}$$<p><strong>3→4:</strong> $T_3V_2^{\gamma-1} = T_4V_1^{\gamma-1}$</p>$$\frac{T_3}{T_4} = \left(\frac{V_1}{V_2}\right)^{\gamma-1} = r^{\gamma-1}$$<p><strong>Therefore:</strong></p>$$\frac{T_2}{T_1} = \frac{T_3}{T_4} = r^{\gamma-1}$$<p>Or: $T_2 = T_1 r^{\gamma-1}$ and $T_3 = T_4 r^{\gamma-1}$</p><p><strong>Substitute in efficiency:</strong></p>$$\eta = 1 - \frac{T_4 - T_1}{T_3 - T_2} = 1 - \frac{T_4 - T_1}{T_4 r^{\gamma-1} - T_1 r^{\gamma-1}}$$

$$= 1 - \frac{T_4 - T_1}{r^{\gamma-1}(T_4 - T_1)}$$<div class="formula-box">$$\boxed{\eta_{Otto} = 1 - \frac{1}{r^{\gamma-1}}}$$</div><p><strong>Depends only on compression ratio and γ!</strong></p><p><strong>To increase efficiency:</strong> Increase r (higher compression)</p><p><strong>Typical values:</strong></p><ul><li>r = 8, γ = 1.4 → η ≈ 56%</li><li>r = 10, γ = 1.4 → η ≈ 60%</li></ul><p><strong>Real engines:</strong> ~30% (half of theoretical due to irreversibilities)</p></details>

---

## Connection to Other Topics

### → Second Law of Thermodynamics

Carnot theorem, efficiency limits:
[Second Law →](../second-law/index.md)

### → PV Diagrams

Carnot cycle, Otto cycle on PV diagrams:
[PV Diagrams →](../pv-diagrams/index.md)

### → Entropy

Carnot cycle has zero entropy change:
[Entropy →](../entropy/index.md)

### → Thermodynamic Processes

Isothermal, adiabatic processes in cycles:
[Processes →](../thermodynamic-processes/index.md)

---

## Quick Revision Formula Sheet

### Heat Engine:

$$\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}$$

### Carnot Efficiency:

$$\eta_{Carnot} = 1 - \frac{T_C}{T_H}$$

### Otto Cycle:

$$\eta_{Otto} = 1 - \frac{1}{r^{\gamma-1}}$$

where $r$ = compression ratio

### Refrigerator:

$$\text{COP}_R = \frac{Q_C}{W} = \frac{T_C}{T_H - T_C}$$

### Heat Pump:

$$\text{COP}_{HP} = \frac{Q_H}{W} = \frac{T_H}{T_H - T_C} = \text{COP}_R + 1$$

### Key Relations:

- $Q_H = W + Q_C$ (First Law)
- $\eta < \eta_{Carnot}$ (Second Law)
- All reversible engines: Same efficiency
- All irreversible engines: Lower efficiency

---

## JEE Strategy Tips

1. **Always convert to Kelvin** for efficiency formulas
2. **Carnot is maximum** - any real engine is less efficient
3. **Series engines:** Overall η = Carnot from $T_{highest}$ to $T_{lowest}$
4. **Compression ratio:** Higher r → Higher Otto efficiency
5. **COP can be > 1** (refrigerator/heat pump), but **η < 1** (engine)
6. **Remember:** $\text{COP}_{HP} = \text{COP}_R + 1$
7. **For Carnot:** Only temperatures matter, not working substance

---

**Next Topic:** [Entropy →](../entropy/index.md)

---

*Last updated: February 2025*

From TestGuru · our mock-test platform

## You've read Heat Engines and Carnot Cycle.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fphysics%2Fthermodynamics%2Fheat-engines%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/thermodynamics/heat-engines/",this.page.identifier="/physics/thermodynamics/heat-engines/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424321167155"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424321167155")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/thermodynamics/heat-engines/](https://jeenotes.in/physics/thermodynamics/heat-engines/) · raw HTML: `offline/physics/thermodynamics/heat-engines/index.html`_
