---
title: "PV Diagrams and Cyclic Processes"
source: "https://jeenotes.in/physics/thermodynamics/pv-diagrams/"
description: "Master PV diagrams, calculate work from graphs, and understand cyclic processes for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 10"
html: "../../../../offline/physics/thermodynamics/pv-diagrams/index.html"
extracted: "2026-11-23"
---

> Master PV diagrams, calculate work from graphs, and understand cyclic processes for JEE Main & Advanced

## Real-Life Hook: The Heart is a Heat Engine!

Your heart works like a thermodynamic engine, completing about 100,000 cycles per day! Each heartbeat follows a cycle on a pressure-volume diagram:

1. **Filling** (diastole): Volume increases at low pressure
2. **Contraction** (systole): Pressure rises at nearly constant volume
3. **Ejection**: Blood pushed out at high pressure
4. **Relaxation**: Return to initial state

Just like the Carnot cycle or Otto cycle (in car engines), your heart’s PV diagram forms a closed loop. The area inside? That’s the **work done per beat**—literally the mechanical energy pumping blood through your body!

Understanding PV diagrams helps us analyze:

- Car engines (Otto, Diesel cycles)
- Refrigerators and ACs
- Steam turbines
- Any cyclic thermodynamic process

---

## PV Diagrams: The Basics

### What is a PV Diagram?

A **PV diagram** (Pressure-Volume diagram) plots:

- **X-axis:** Volume (V)
- **Y-axis:** Pressure (P)
- **Curve:** Shows how gas state changes during a process

### Why PV Diagrams?

1. **Visual representation** of thermodynamic processes
2. **Work done** = Area under the curve
3. **Easy comparison** of different processes
4. **Cyclic processes** shown as closed loops
5. **State changes** clearly visible

---

## Work from PV Diagrams

### Fundamental Principle

**Work done BY gas:**

$$W = \int_{V_1}^{V_2} P \, dV$$

**Graphically:**

$$W = \text{Area under the P-V curve}$$

### Sign Convention

- **Expansion** ($V$ increases, move right): **W > 0** (gas does work)
- **Compression** ($V$ decreases, move left): **W < 0** (work done on gas)

### Visual Rules

1. **Area above the curve** (moving right) = Positive work
2. **Area below the curve** (moving left) = Negative work (in magnitude)
3. **Net work in cycle** = Area enclosed by loop
4. **Clockwise cycle** = Net positive work (heat engine)
5. **Counter-clockwise cycle** = Net negative work (refrigerator/heat pump)

---

## The Four Basic Processes on PV Diagram

### 1. Isothermal Process

**Curve:** Rectangular hyperbola

$$PV = \text{constant}$$

**Shape:** Smooth curve, decreasing P as V increases

**Work:**

$$W = nRT\ln\frac{V_2}{V_1}$$

**On diagram:** Area under hyperbola

### 2. Adiabatic Process

**Curve:** Steeper hyperbola

$$PV^\gamma = \text{constant}$$

**Shape:** Steeper than isothermal (γ > 1)

**Work:**

$$W = \frac{P_1V_1 - P_2V_2}{\gamma - 1}$$

**Key:** Adiabatic slope = γ × Isothermal slope

### 3. Isobaric Process

**Curve:** Horizontal line

$$P = \text{constant}$$

**Work:**

$$W = P(V_2 - V_1) = P\Delta V$$

**On diagram:** Area of rectangle (height P, width ΔV)

### 4. Isochoric Process

**Curve:** Vertical line

$$V = \text{constant}$$

**Work:**

$$W = 0$$

(no area under vertical line!)

**On diagram:** No work (can’t integrate when V doesn’t change)

---

## Comparing Processes on Same PV Diagram

### All Starting from Same Point

If all four processes start at point A:

1. **Isochoric:** Vertical line (up or down)
2. **Adiabatic:** Steepest curve
3. **Isothermal:** Moderate curve
4. **Isobaric:** Horizontal line

**Slope magnitude order:**

$$\text{Isochoric (∞)} > \text{Adiabatic} > \text{Isothermal} > \text{Isobaric (0)}$$

### Expansion Work Comparison

For same final volume:

$$W_{\text{isobaric}} > W_{\text{isothermal}} > W_{\text{adiabatic}}$$

**Why?** Higher pressure throughout → More area under curve → More work

---

## Cyclic Processes

### Definition

**Cyclic process:** System returns to initial state after completing a sequence of processes.

### Key Properties

1. **ΔU = 0** (internal energy is state function)
2. **Q = W** (from First Law: 0 = Q - W)
3. **Net heat absorbed = Net work done**
4. **Closed loop** on PV diagram

### Work in Cyclic Process

**Net work = Area enclosed by cycle**

- **Clockwise:** W > 0 (heat engine)
- **Counter-clockwise:** W < 0 (refrigerator)

### Clockwise vs Counter-Clockwise

**Clockwise (Heat Engine):**

- Absorbs heat at high temperature
- Rejects heat at low temperature
- Produces net positive work
- Example: Car engine, steam turbine

**Counter-Clockwise (Refrigerator/Heat Pump):**

- Absorbs heat at low temperature
- Rejects heat at high temperature
- Requires net work input
- Example: Refrigerator, AC

---

## Calculating Work: Different Methods

### Method 1: Area Counting (for Simple Shapes)

For cycles made of straight lines:

- Divide into rectangles, triangles, trapezoids
- Calculate each area
- Sum with proper signs

**Example:** Rectangle

$$W = \text{base} \times \text{height} = \Delta V \times \Delta P$$

### Method 2: Integration

For curved processes:

$$W = \int_{V_1}^{V_2} P \, dV$$

Need to express P as function of V.

### Method 3: Process-by-Process

For cycles:

1. Calculate work for each leg
2. Sum: $W_{\text{net}} = W_1 + W_2 + W_3 + ...$
3. Use appropriate formula for each process

### Method 4: Coordinates

For polygon on PV diagram:

$$W = \oint P \, dV$$

Can use shoelace formula for polygon area.

---

## Important PV Diagram Configurations

### Type 1: Rectangular Cycle

**Process:**

1. A→B: Isobaric expansion (high P)
2. B→C: Isochoric cooling
3. C→D: Isobaric compression (low P)
4. D→A: Isochoric heating

**Work:**

$$W = P_{\text{high}}(V_B - V_A) - P_{\text{low}}(V_B - V_A)$$

$$W = (P_{\text{high}} - P_{\text{low}})(V_B - V_A)$$

$$W = \Delta P \times \Delta V$$

**Area of rectangle!**

### Type 2: Triangular Cycle

Three processes, forms triangle.

**Work = Area of triangle:**

$$W = \frac{1}{2} \times \text{base} \times \text{height}$$

### Type 3: Isothermal-Adiabatic Cycle (Carnot)

- Two isothermals at $T_H$ and $T_C$
- Two adiabatics connecting them
- Most efficient cycle
- Work = Area of curved quadrilateral

[More on Carnot cycle →](../heat-engines/index.md)

---

## Multi-Process Cycles: Step-by-Step

### Example: Cycle ABCA

**Given:**

- A (1 L, 10 atm)
- B (4 L, 10 atm)
- C (4 L, 2.5 atm)
- A→B: Isobaric
- B→C: Isochoric
- C→A: Straight line

**Find net work.**

**Solution:**

**Process AB (Isobaric):**

$$W_{AB} = P(V_B - V_A) = 10 \times 10^5 \times (4-1) \times 10^{-3}$$

$$W_{AB} = 3000 \text{ J}$$

**Process BC (Isochoric):**

$$W_{BC} = 0$$

**Process CA (Straight line):**
Need to integrate or use geometry.

Straight line from C(4, 2.5) to A(1, 10):

**Equation of line:**

$$P - P_C = \frac{P_A - P_C}{V_A - V_C}(V - V_C)$$

$$P - 2.5 = \frac{10 - 2.5}{1 - 4}(V - 4)$$

$$P - 2.5 = \frac{7.5}{-3}(V - 4)$$

$$P = 2.5 - 2.5(V - 4) = 2.5 - 2.5V + 10$$

$$P = 12.5 - 2.5V$$

**Work CA:**

$$W_{CA} = \int_4^1 P \, dV = \int_4^1 (12.5 - 2.5V) \, dV$$

$$W_{CA} = \left[12.5V - 1.25V^2\right]_4^1$$

$$W_{CA} = (12.5 - 1.25) - (50 - 20)$$

$$W_{CA} = 11.25 - 30 = -18.75 \text{ (atm}\cdot\text{L)}$$

Convert: $-18.75 \times 10^5 \times 10^{-3} = -1875$ J

**Or geometrically:** Area of trapezoid

$$W_{CA} = -\frac{1}{2}(P_A + P_C)(V_A - V_C)$$

$$W_{CA} = -\frac{1}{2}(10 + 2.5)(1 - 4) \times 10^5 \times 10^{-3}$$

$$W_{CA} = -\frac{1}{2}(12.5)(-3) \times 100$$

$$W_{CA} = -(-1875) = -1875 \text{ J}$$

Wait, sign confusion. For compression (V decreasing), work is negative on the gas.

**Correct approach:** Going from C to A, V decreases (4 → 1), so moving left = compression = negative work.

Area of trapezoid (base1 = 10, base2 = 2.5, height = 3):

$$\text{Area} = \frac{1}{2}(10 + 2.5) \times 3 = \frac{1}{2} \times 12.5 \times 3 = 18.75 \text{ (atm}\cdot\text{L)}$$

Since compression: $W_{CA} = -1875$ J

**Net work:**

$$W_{\text{net}} = 3000 + 0 + (-1875) = 1125 \text{ J}$$

**Clockwise → Positive work** ✓

---

## Common PV Diagram Scenarios in JEE

### Scenario 1: Free Expansion

Gas expands into vacuum.

- No external pressure: $P_{\text{ext}} = 0$
- $W = \int P_{\text{ext}} dV = 0$
- On PV diagram: Jump from one point to another (not quasi-static)
- **Not a valid PV curve** (process is irreversible)

### Scenario 2: Two Gases Separated by Piston

When piston is free to move:

- Both gases do equal and opposite work
- $W_1 = -W_2$
- Net work on system (both gases) = 0 (if isolated)

### Scenario 3: Gas in Cylinder with Weight on Piston

External pressure = atmospheric + weight/area

$$P_{\text{ext}} = P_0 + \frac{mg}{A}$$

Process is isobaric at this pressure.

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** A gas expands isobarically at 2 atm from 2 L to 5 L. Find work done.

<details><summary>Solution</summary>$$W = P\Delta V = P(V_2 - V_1)$$<p></p>$$W = 2 \times 10^5 \times (5 - 2) \times 10^{-3}$$<p></p>$$W = 2 \times 10^5 \times 3 \times 10^{-3}$$<p></p>$$W = 600 \text{ J}$$<p><strong>On PV diagram:</strong> Rectangle with height 2 atm, width 3 L.</p></details>

**Q2.** In a cyclic process ABCA, $W_{AB} = 100$ J, $W_{BC} = -50$ J. Find $W_{CA}$.

<details><summary>Solution</summary><p>For cyclic process: $W_{\text{net}} = Q_{\text{net}}$</p><p>But we can directly use: If cycle is closed,</p>$$W_{\text{net}} = W_{AB} + W_{BC} + W_{CA}$$<p>Actually, we need more information. Let me reconsider.</p><p>If the problem asks only for $W_{CA}$ and the cycle is given, we need heat information or to know it’s a specific type.</p><p><strong>However, if question states “find $W_{CA}$ if net work is zero”:</strong></p>$$W_{AB} + W_{BC} + W_{CA} = 0$$<p></p>$$100 + (-50) + W_{CA} = 0$$<p></p>$$W_{CA} = -50 \text{ J}$$<p><strong>If net work is 200 J:</strong></p>$$100 + (-50) + W_{CA} = 200$$<p></p>$$W_{CA} = 150 \text{ J}$$<p><strong>Need additional constraint.</strong> Typically JEE provides cycle closure or heat values.</p></details>

**Q3.** On a PV diagram, an isothermal and adiabatic curve intersect at point (2 L, 5 atm). Which curve is steeper at this point if γ = 1.4?

<details><summary>Solution</summary><p><strong>Isothermal slope:</strong></p>$$\left|\frac{dP}{dV}\right|_{iso} = \frac{P}{V} = \frac{5}{2} = 2.5 \text{ atm/L}$$<p><strong>Adiabatic slope:</strong></p>$$\left|\frac{dP}{dV}\right|_{ad} = \gamma\frac{P}{V} = 1.4 \times 2.5 = 3.5 \text{ atm/L}$$<p><strong>Adiabatic is steeper</strong> (as always, since γ &gt; 1).</p></details>

---

### Level 2: JEE Main/Advanced

**Q4.** A gas undergoes cycle shown: A(1,3) → B(4,3) → C(4,1) → A.
(Coordinates are (V in L, P in atm))

Find:
(a) Work in each process
(b) Net work
(c) Direction (clockwise or counter-clockwise)
(d) Is it heat engine or refrigerator?

<details><summary>Solution</summary><p><strong>Process AB:</strong> (1,3) → (4,3)</p><ul><li>Isobaric expansion at P = 3 atm
$$W_{AB} = P\Delta V = 3 \times (4-1) = 9 \text{ atm}\cdot\text{L}$$
$$W_{AB} = 9 \times 10^5 \times 10^{-3} = 900 \text{ J}$$</li></ul><p><strong>Process BC:</strong> (4,3) → (4,1)</p><ul><li>Isochoric (V = 4 L constant)
$$W_{BC} = 0$$</li></ul><p><strong>Process CA:</strong> (4,1) → (1,3)</p><ul><li>Linear path, need to calculate</li></ul><p>Area under line from V = 4 to V = 1 (going left, so negative):</p><p><strong>Equation of line:</strong> From C(4,1) to A(1,3)</p>$$P - 1 = \frac{3-1}{1-4}(V - 4)$$<p></p>$$P - 1 = \frac{2}{-3}(V - 4)$$<p></p>$$P = 1 - \frac{2}{3}(V - 4) = 1 - \frac{2V}{3} + \frac{8}{3}$$<p></p>$$P = \frac{11}{3} - \frac{2V}{3}$$<p>Work (compression, V from 4 to 1):</p>$$W_{CA} = \int_4^1 P \, dV = \int_4^1 \left(\frac{11}{3} - \frac{2V}{3}\right) dV$$<p>Or use geometry: <strong>Trapezoid area</strong></p><p>Bases: $P_C = 1$, $P_A = 3$; Height: $|V_C - V_A| = 3$</p>$$\text{Area} = \frac{1}{2}(1 + 3) \times 3 = 6 \text{ atm}\cdot\text{L}$$<p>Since going left (compression): $W_{CA} = -6 \times 100 = -600$ J</p><p><strong>(b) Net work:</strong></p>$$W_{\text{net}} = 900 + 0 + (-600) = 300 \text{ J}$$<p><strong>(c) Direction:</strong>
Plot points: A(1,3) → B(4,3) → C(4,1) → A(1,3)</p><ul><li>Right (expansion)</li><li>Down</li><li>Left-up (back to start)</li></ul><p>This is <strong>clockwise</strong>.</p><p><strong>(d) Type:</strong>
Clockwise + Positive work → <strong>Heat Engine</strong></p></details>

**Q5.** A gas expands from state A to state B along two different paths:

- Path 1: Directly along $P = 5 - V$ (P in atm, V in L)
- Path 2: A→C (isochoric) then C→B (isobaric)

A is at (1, 4) and B is at (4, 1). Find work done in each path.

<details><summary>Solution</summary><p><strong>Path 1:</strong> Direct, $P = 5 - V$</p>$$W_1 = \int_1^4 P \, dV = \int_1^4 (5 - V) \, dV$$<p></p>$$W_1 = \left[5V - \frac{V^2}{2}\right]_1^4$$<p></p>$$W_1 = \left(20 - 8\right) - \left(5 - 0.5\right)$$<p></p>$$W_1 = 12 - 4.5 = 7.5 \text{ atm}\cdot\text{L}$$<p></p>$$W_1 = 750 \text{ J}$$<p><strong>Path 2:</strong> A→C→B</p><p><strong>A→C:</strong> Isochoric at V = 1, from P = 4 to P = 1</p>$$W_{AC} = 0$$<p><strong>C→B:</strong> Isobaric at P = 1, from V = 1 to V = 4</p>$$W_{CB} = P\Delta V = 1 \times (4 - 1) = 3 \text{ atm}\cdot\text{L}$$<p></p>$$W_{CB} = 300 \text{ J}$$<p><strong>Total Path 2:</strong></p>$$W_2 = 0 + 300 = 300 \text{ J}$$<p><strong>Comparison:</strong></p>$$W_1 = 750 \text{ J} &gt; W_2 = 300 \text{ J}$$<p><strong>Work depends on path!</strong> (Not a state function)</p><p>Higher path on PV diagram → More area → More work.</p></details>

**Q6.** A Carnot engine operates between 400 K and 300 K. The engine absorbs 1000 J at high temperature. Find:
(a) Work done by engine
(b) Heat rejected at low temperature
(c) If the cycle is represented by a loop on PV diagram, what is the area?

<details><summary>Solution</summary><p><strong>(a) Carnot efficiency:</strong></p>$$\eta = 1 - \frac{T_C}{T_H} = 1 - \frac{300}{400} = 1 - 0.75 = 0.25$$

$$W = \eta \times Q_H = 0.25 \times 1000 = 250 \text{ J}$$<p><strong>(b) Heat rejected:</strong></p>$$Q_C = Q_H - W = 1000 - 250 = 750 \text{ J}$$<p><strong>(c) Area on PV diagram:</strong></p><p><strong>Area enclosed = Work done = 250 J</strong></p><p>Convert to atm·L: $250 \text{ J} = 250/100 = 2.5$ atm·L</p><p><strong>The area of the Carnot cycle loop equals 2.5 atm·L.</strong></p><p>Note: We don’t know the specific P and V values, but area still equals work!</p></details>

---

### Level 3: JEE Advanced

**Q7.** A gas follows path ABC where:

- A: (V₀, P₀)
- B: (2V₀, P₀/2)
- C: (2V₀, P₀)
- AB is isothermal
- BC is isochoric

Then returns to A via CA (straight line). Find:
(a) Work in AB
(b) Work in BC
(c) Work in CA
(d) Net work in cycle ABCA

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>A: $(V_0, P_0)$</li><li>B: $(2V_0, P_0/2)$</li><li>C: $(2V_0, P_0)$</li></ul><p><strong>(a) Work AB (Isothermal):</strong></p><p>Check if AB is isothermal: $P_AV_A = P_BV_B$?</p>$$P_0 \cdot V_0 = \frac{P_0}{2} \cdot 2V_0 = P_0V_0$$<p>✓</p>$$W_{AB} = P_AV_A \ln\frac{V_B}{V_A} = P_0V_0 \ln(2)$$<p></p>$$W_{AB} = 0.693 P_0V_0$$<p><strong>(b) Work BC (Isochoric):</strong>
Volume constant at $2V_0$:</p>$$W_{BC} = 0$$<p><strong>(c) Work CA (Straight line):</strong>
From C$(2V_0, P_0)$ to A$(V_0, P_0)$:</p><p>Wait, both C and A are at pressure $P_0$!</p><p>So CA is <strong>isobaric</strong> (not just straight line):</p>$$W_{CA} = P_0(V_A - V_C) = P_0(V_0 - 2V_0)$$<p></p>$$W_{CA} = -P_0V_0$$<p><strong>(d) Net work:</strong></p>$$W_{net} = W_{AB} + W_{BC} + W_{CA}$$<p></p>$$W_{net} = 0.693P_0V_0 + 0 + (-P_0V_0)$$<p></p>$$W_{net} = (0.693 - 1)P_0V_0$$<p></p>$$W_{net} = -0.307P_0V_0$$<p><strong>Negative net work</strong> → Counter-clockwise → <strong>Refrigerator/Heat Pump</strong></p><p><strong>Check direction:</strong></p><ul><li>A→B: Right-down (expansion)</li><li>B→C: Up (pressure increases)</li><li>C→A: Left (compression)</li></ul><p>This forms counter-clockwise loop ✓</p></details>

**Q8.** On a PV diagram, a cycle consists of:

1. Isothermal expansion from (1, 8) to (4, 2) (V in L, P in atm)
2. Adiabatic compression from (4, 2) to (1, P₂)
3. Isochoric process back to (1, 8)

Find:
(a) P₂ (pressure after adiabatic compression)
(b) γ for the gas
(c) Work done in each process
(d) Net work

<details><summary>Solution</summary><p><strong>State A:</strong> (1, 8)
<strong>State B:</strong> (4, 2)
<strong>State C:</strong> (1, P₂)</p><p><strong>(a) Find P₂:</strong></p><p>Process BC is adiabatic: $P_BV_B^\gamma = P_CV_C^\gamma$</p><p>Process CA is isochoric from C(1, P₂) to A(1, 8), so both at V = 1 L.</p><p>This means C and A are at same volume! So:</p><ul><li>C: (1, P₂)</li><li>A: (1, 8)</li></ul><p>For isochoric from C to A, pressure increases from P₂ to 8.</p><p>So <strong>P₂ &lt; 8</strong> (will find exact value using adiabatic equation).</p><p><strong>(b) Find γ:</strong></p><p>Process AB is isothermal: $P_AV_A = P_BV_B$</p>$$8 \times 1 = 2 \times 4 = 8$$<p>✓</p><p>Temperature: $T_A = T_B$ (isothermal AB)</p><p>For adiabatic BC:</p>$$P_BV_B^\gamma = P_CV_C^\gamma$$<p></p>$$2 \times 4^\gamma = P_2 \times 1^\gamma$$<p></p>$$P_2 = 2 \times 4^\gamma = 2 \times 2^{2\gamma} = 2^{1+2\gamma}$$<p>Also, temperature relation for BC (adiabatic):</p>$$T_BV_B^{\gamma-1} = T_CV_C^{\gamma-1}$$<p></p>$$T_B \times 4^{\gamma-1} = T_C \times 1$$<p></p>$$T_C = T_B \times 4^{\gamma-1}$$<p>For isochoric CA at V = 1:</p>$$\frac{P_C}{T_C} = \frac{P_A}{T_A}$$<p></p>$$\frac{P_2}{T_C} = \frac{8}{T_A}$$<p>Since $T_A = T_B$:</p>$$\frac{P_2}{T_C} = \frac{8}{T_B}$$<p></p>$$P_2 = 8 \times \frac{T_C}{T_B}$$<p>Substitute $T_C = T_B \times 4^{\gamma-1}$:</p>$$P_2 = 8 \times 4^{\gamma-1} = 8 \times 2^{2(\gamma-1)} = 2^3 \times 2^{2\gamma-2} = 2^{2\gamma+1}$$<p>From earlier: $P_2 = 2^{1+2\gamma}$</p><p>Both expressions match! ✓</p><p>Now we need another equation. <strong>The cycle must close</strong>, so we need consistency.</p><p>Actually, let me use the fact that this forms a valid cycle.</p><p><strong>Alternative approach:</strong> Use given information directly.</p><p>We know:</p><ul><li>AB: Isothermal at temperature T (from PV = 8)</li><li>BC: Adiabatic</li><li>CA: Isochoric</li></ul><p>From $P_AV_A = nRT$: $8 \times 1 = nRT$ → $T = 8/nR$ (in atm·L units)</p><p>Actually, without more constraints, we can’t uniquely determine γ.</p><p><strong>Let me assume γ = 1.5</strong> (common value) and solve:</p>$$P_2 = 2 \times 4^{1.5} = 2 \times 8 = 16 \text{ atm}$$<p>But this gives P₂ = 16 &gt; P_A = 8, which means pressure increases during adiabatic compression, which makes sense!</p><p><strong>(c) Work in each process:</strong></p><p><strong>AB (Isothermal expansion):</strong></p>$$W_{AB} = P_AV_A\ln\frac{V_B}{V_A} = 8 \times 1 \times \ln(4)$$<p></p>$$W_{AB} = 8 \times 1.386 = 11.09 \text{ atm}\cdot\text{L} = 1109 \text{ J}$$<p><strong>BC (Adiabatic compression with γ = 1.5):</strong></p>$$W_{BC} = \frac{P_BV_B - P_CV_C}{\gamma - 1}$$<p></p>$$W_{BC} = \frac{2 \times 4 - 16 \times 1}{1.5 - 1}$$<p></p>$$W_{BC} = \frac{8 - 16}{0.5} = \frac{-8}{0.5} = -16 \text{ atm}\cdot\text{L}$$<p></p>$$W_{BC} = -1600 \text{ J}$$<p><strong>CA (Isochoric):</strong></p>$$W_{CA} = 0$$<p><strong>(d) Net work:</strong></p>$$W_{net} = 1109 + (-1600) + 0 = -491 \text{ J}$$<p><strong>Negative → Counter-clockwise → Refrigerator</strong></p><p><strong>Note:</strong> Without additional information, we assumed γ = 1.5. In actual JEE problems, γ would be given or derivable from additional constraints.</p></details>

**Q9.** Prove that for any cyclic process, the net heat absorbed equals the area enclosed on the PV diagram.

<details><summary>Solution</summary><p><strong>Given:</strong> Cyclic process (returns to initial state)</p><p><strong>From First Law:</strong></p>$$\Delta Q = \Delta U + \Delta W$$<p><strong>For cyclic process:</strong></p>$$\Delta U_{cycle} = 0$$<p>(state function, returns to same state)</p><p>Therefore:</p>$$Q_{net} = W_{net}$$<p><strong>Work in thermodynamics:</strong></p>$$W = \int P \, dV$$<p>For a complete cycle:</p>$$W_{cycle} = \oint P \, dV$$<p><strong>On PV diagram:</strong></p><p>The integral $\oint P \, dV$ represents:</p><ul><li>Going right (expansion): Positive contribution (area under upper curve)</li><li>Going left (compression): Negative contribution (area under lower curve)</li></ul><p><strong>Net work = Area under upper path - Area under lower path</strong></p><p><strong>= Area enclosed by the loop</strong></p><p>Therefore:</p>$$Q_{net} = W_{net} = \text{Area enclosed on PV diagram}$$<p><strong>Direction matters:</strong></p><ul><li><strong>Clockwise:</strong> Net work positive (area counted positive)</li><li><strong>Counter-clockwise:</strong> Net work negative (area counted negative)</li></ul><p><strong>Proved!</strong></p><p>This fundamental result makes PV diagrams so powerful—the area directly tells us energy conversion!</p></details>

---

## Connection to Other Topics

### → Thermodynamic Processes

Each process has characteristic PV curve:
[Processes →](../thermodynamic-processes/index.md)

### → Heat Engines

Carnot, Otto, Diesel cycles on PV diagrams:
[Heat Engines →](../heat-engines/index.md)

### → First Law

Q, W, ΔU related through First Law:
[First Law →](../first-law/index.md)

### → Real Engines

- **Otto cycle:** Petrol engines
- **Diesel cycle:** Diesel engines
- **Refrigeration cycle:** ACs, refrigerators

---

## Quick Revision Points

### Key Formulas:

**Work:**

$$W = \int_{V_1}^{V_2} P \, dV = \text{Area under curve}$$

**Cyclic Process:**

$$\Delta U = 0$$

$$Q_{net} = W_{net} = \text{Area enclosed}$$

**Slopes:**

- Isothermal: $-P/V$
- Adiabatic: $-\gamma P/V$ (steeper)
- Isobaric: 0 (horizontal)
- Isochoric: ∞ (vertical)

**Direction:**

- Clockwise → Heat Engine (W > 0)
- Counter-clockwise → Refrigerator (W < 0)

---

## JEE Strategy Tips

1. **Draw the diagram** - visualize the process
2. **Identify each leg** - isothermal, adiabatic, etc.
3. **Calculate work process-by-process** - use appropriate formula
4. **Check direction** - clockwise or counter-clockwise
5. **Use geometry** - rectangles, triangles, trapezoids
6. **Remember:** Area = Work (fundamental principle)
7. **For cycles:** ΔU = 0, so Q = W

---

**Next Topic:** [Second Law of Thermodynamics →](../second-law/index.md)

---

*Last updated: February 2025*

From TestGuru · our mock-test platform

## You've read PV Diagrams and Cyclic Processes.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fphysics%2Fthermodynamics%2Fpv-diagrams%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/thermodynamics/pv-diagrams/",this.page.identifier="/physics/thermodynamics/pv-diagrams/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424327842205"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424327842205")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/thermodynamics/pv-diagrams/](https://jeenotes.in/physics/thermodynamics/pv-diagrams/) · raw HTML: `offline/physics/thermodynamics/pv-diagrams/index.html`_
