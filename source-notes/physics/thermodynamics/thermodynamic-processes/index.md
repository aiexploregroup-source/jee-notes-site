---
title: "Thermodynamic Processes"
source: "https://jeenotes.in/physics/thermodynamics/thermodynamic-processes/"
description: "Master isothermal, adiabatic, isobaric, and isochoric processes for JEE Main & Advanced with real-world applications"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 10"
html: "../../../../offline/physics/thermodynamics/thermodynamic-processes/index.html"
extracted: "2026-11-23"
---

> Master isothermal, adiabatic, isobaric, and isochoric processes for JEE Main & Advanced with real-world applications

## Real-Life Hook: How Does a Diesel Engine Work Without Spark Plugs?

Unlike petrol engines that use spark plugs, diesel engines rely on extreme compression to ignite fuel. When air is compressed rapidly (adiabatically), its temperature shoots up to over 500°C—hot enough to ignite diesel fuel spontaneously!

This is a real-world **adiabatic process**: rapid compression prevents heat exchange, converting work directly into temperature rise. Understanding thermodynamic processes explains:

- Why diesel engines are more efficient
- How refrigerators cool
- Why pumping a bike tire heats the pump
- How atmospheric pressure changes with altitude

Let’s master all four fundamental processes!

---

## The Four Fundamental Processes

### Quick Comparison Table

| Process | Constant | Equation | Q | W | ΔU |
| --- | --- | --- | --- | --- | --- |
| **Isothermal** | Temperature (T) | $PV = \text{const}$ | $nRT\ln(V_2/V_1)$ | $nRT\ln(V_2/V_1)$ | 0 |
| **Adiabatic** | Heat (Q = 0) | $PV^\gamma = \text{const}$ | 0 | $\frac{nR(T_1-T_2)}{\gamma-1}$ | $-W$ |
| **Isobaric** | Pressure (P) | $V/T = \text{const}$ | $nC_P\Delta T$ | $P\Delta V$ | $nC_V\Delta T$ |
| **Isochoric** | Volume (V) | $P/T = \text{const}$ | $nC_V\Delta T$ | 0 | $nC_V\Delta T$ |

---

## 1. Isothermal Process (Constant Temperature)

### Definition

**Isothermal process:** Temperature remains constant throughout.

$$T = \text{constant} \quad \Rightarrow \quad \Delta T = 0$$

### Conditions Required

1. **Slow process:** Allows heat exchange with surroundings
2. **Thermally conducting walls:** System in contact with heat reservoir
3. **Constant temperature bath:** Maintains T constant

### For Ideal Gas

From $PV = nRT$ with T constant:

$$PV = \text{constant}$$

$$P_1V_1 = P_2V_2$$

**Or equivalently:**

$$P \propto \frac{1}{V}$$

This plots as a **rectangular hyperbola** on P-V diagram.

### First Law Application

Since $\Delta T = 0$ for ideal gas:

$$\Delta U = nC_V\Delta T = 0$$

From First Law:

$$Q = \Delta U + W$$

$$Q = 0 + W$$

$$\boxed{Q = W}$$

**All heat supplied is converted to work** (or vice versa).

### Work Done in Isothermal Process

$$W = \int_{V_1}^{V_2} P \, dV$$

Using $PV = nRT$ (constant):

$$P = \frac{nRT}{V}$$

$$W = \int_{V_1}^{V_2} \frac{nRT}{V} \, dV$$

$$W = nRT \ln\frac{V_2}{V_1}$$

**Alternative forms:**

$$W = nRT \ln\frac{P_1}{P_2}$$

$$W = P_1V_1 \ln\frac{V_2}{V_1} = P_2V_2 \ln\frac{V_2}{V_1}$$

### Sign Convention

- **Expansion** ($V_2 > V_1$): W > 0 (work done BY gas)
- **Compression** ($V_2 < V_1$): W < 0 (work done ON gas)

### Memory Trick

**“ISO-THERMAL → ISO-ENERGY”**

- Temperature constant → Internal energy constant (for ideal gas)
- Q = W (heat and work are equal and opposite)

---

## 2. Adiabatic Process (No Heat Exchange)

### Definition

**Adiabatic process:** No heat exchange with surroundings.

$$Q = 0$$

### Conditions Required

1. **Rapid process:** No time for heat transfer
2. **Thermally insulated walls:** Prevents heat exchange
3. **Examples:**
   - Rapid compression/expansion
   - Sound wave propagation
   - Diesel engine compression

### For Ideal Gas

From First Law with Q = 0:

$$0 = \Delta U + W$$

$$\Delta U = -W$$

This leads to three equivalent equations:

**Adiabatic Equations:**

$$PV^\gamma = \text{constant}$$

$$TV^{\gamma-1} = \text{constant}$$

$$TP^{(\gamma-1)/\gamma} = \text{constant}$$

Where $\gamma = C_P/C_V$

**Between two states:**

$$P_1V_1^\gamma = P_2V_2^\gamma$$

$$T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1}$$

$$\frac{T_1}{T_2} = \left(\frac{P_1}{P_2}\right)^{(\gamma-1)/\gamma}$$

### Derivation of PVγ = Constant

**Step 1:** First Law for adiabatic process

$$dU = -dW$$

$$nC_VdT = -PdV$$

**Step 2:** From ideal gas law $PV = nRT$:

$$PdV + VdP = nRdT$$

$$dT = \frac{PdV + VdP}{nR}$$

**Step 3:** Substitute in step 1:

$$nC_V\frac{PdV + VdP}{nR} = -PdV$$

$$C_V(PdV + VdP) = -RPdV$$

$$C_VPdV + C_VVdP = -RPdV$$

$$(C_V + R)PdV = -C_VVdP$$

Using $C_P = C_V + R$:

$$C_PPdV = -C_VVdP$$

$$\frac{C_P}{C_V}\frac{dV}{V} = -\frac{dP}{P}$$

$$\gamma\frac{dV}{V} = -\frac{dP}{P}$$

**Step 4:** Integrate:

$$\gamma \ln V = -\ln P + \text{const}$$

$$\ln V^\gamma + \ln P = \text{const}$$

$$\ln(PV^\gamma) = \text{const}$$

$$\boxed{PV^\gamma = \text{constant}}$$

### Work Done in Adiabatic Process

**Method 1: Using temperatures**

$$W = \frac{nR(T_1 - T_2)}{\gamma - 1}$$

**Method 2: Using pressures and volumes**

$$W = \frac{P_1V_1 - P_2V_2}{\gamma - 1}$$

**Method 3: Using ΔU**

$$W = -\Delta U = -nC_V\Delta T = nC_V(T_1 - T_2)$$

### Slope of Adiabatic Curve

From $PV^\gamma = K$:

$$\frac{dP}{dV} = -\gamma\frac{P}{V}$$

**Slope of adiabatic** = $-\gamma P/V$

For isothermal: $PV = K$

$$\frac{dP}{dV} = -\frac{P}{V}$$

**Slope of isothermal** = $-P/V$

**Comparison:**

$$\left|\frac{dP}{dV}\right|_{\text{adiabatic}} = \gamma \left|\frac{dP}{dV}\right|_{\text{isothermal}}$$

Since γ > 1, **adiabatic curve is steeper** than isothermal!

### Memory Trick

**“Adiabatic is STEEPER”**

- Adiabatic slope = γ × Isothermal slope
- γ > 1 → Adiabatic steeper on P-V diagram

**“No HEAT? Temperature CHANGES!”**

- Q = 0 (adiabatic)
- ΔT ≠ 0 (temperature changes!)
- Opposite of isothermal

---

## 3. Isobaric Process (Constant Pressure)

### Definition

**Isobaric process:** Pressure remains constant.

$$P = \text{constant}$$

### For Ideal Gas

From $PV = nRT$ with P constant:

$$\frac{V}{T} = \text{constant}$$

$$\frac{V_1}{T_1} = \frac{V_2}{T_2}$$

**Or:** $V \propto T$ (Charles’s Law)

### Work Done

$$W = P\Delta V = P(V_2 - V_1)$$

**Using ideal gas law:**

$$W = nR\Delta T = nR(T_2 - T_1)$$

### Heat Supplied

From First Law:

$$Q = \Delta U + W$$

$$Q = nC_V\Delta T + nR\Delta T$$

$$Q = n(C_V + R)\Delta T$$

$$Q = nC_P\Delta T$$

Using Mayer’s equation: $C_P = C_V + R$

### P-V Diagram

Horizontal line (pressure constant, volume changes)

### Real-Life Examples

- Boiling water at constant atmospheric pressure
- Heating gas in a cylinder with movable piston
- Atmospheric processes at constant altitude

### Memory Trick

**“Constant P → Use CP”**

- **P**ressure constant → Use $C_\mathbf{P}$
- $Q = nC_P\Delta T$

---

## 4. Isochoric Process (Constant Volume)

### Definition

**Isochoric process:** Volume remains constant.

$$V = \text{constant} \quad \Rightarrow \quad \Delta V = 0$$

Also called **isometric** or **isovolumetric** process.

### For Ideal Gas

From $PV = nRT$ with V constant:

$$\frac{P}{T} = \text{constant}$$

$$\frac{P_1}{T_1} = \frac{P_2}{T_2}$$

**Or:** $P \propto T$ (Gay-Lussac’s Law)

### Work Done

Since $\Delta V = 0$:

$$W = P\Delta V = 0$$

**No work done** in isochoric process!

### Heat Supplied

From First Law:

$$Q = \Delta U + W$$

$$Q = \Delta U + 0$$

$$Q = \Delta U = nC_V\Delta T$$

**All heat goes to internal energy.**

### P-V Diagram

Vertical line (volume constant, pressure changes)

### Real-Life Examples

- Heating gas in a rigid container
- Bomb calorimeter in chemistry
- Sealed pressure cooker heating

### Memory Trick

**“Constant V → Use CV”**

- **V**olume constant → Use $C_\mathbf{V}$
- $Q = nC_V\Delta T$

**“No Volume change → No Work”**

- W = PΔV = 0

---

## P-V Diagrams for All Processes

### Visual Comparison

On the same P-V diagram starting from same point:

1. **Isothermal:** Rectangular hyperbola, moderate slope
2. **Adiabatic:** Steeper curve than isothermal
3. **Isobaric:** Horizontal line
4. **Isochoric:** Vertical line

**Key Point:** Adiabatic is always steeper than isothermal through the same point!

### Slope Summary

| Process | Slope (dP/dV) |
| --- | --- |
| Isothermal | $-P/V$ |
| Adiabatic | $-\gamma P/V$ |
| Isobaric | 0 (horizontal) |
| Isochoric | ∞ (vertical) |

**Steepness order:** Isochoric > Adiabatic > Isothermal > Isobaric

---

## Common Mistakes & Tricks

### Mistake 1: Confusing Isothermal and Adiabatic

| Aspect | Isothermal | Adiabatic |
| --- | --- | --- |
| Temperature | Constant (ΔT = 0) | Changes (ΔT ≠ 0) |
| Heat | Q ≠ 0 | Q = 0 |
| Process speed | Slow | Fast |
| Equation | $PV = \text{const}$ | $PV^\gamma = \text{const}$ |
| ΔU | 0 | ≠ 0 |
| Q vs W | Q = W | W = -ΔU |

### Mistake 2: Using Wrong Heat Capacity

❌ Isochoric: $Q = nC_P\Delta T$ (Wrong!)
✅ Isochoric: $Q = nC_V\Delta T$

❌ Isobaric: $Q = nC_V\Delta T$ (Wrong!)
✅ Isobaric: $Q = nC_P\Delta T$

**Trick:** Match the subscript - **V** with **V**, **P** with **P**!

### Mistake 3: Sign of Work in Compression

For adiabatic compression:

- $V_2 < V_1$ (compressed)
- $T_2 > T_1$ (temperature increases)
- $W = \frac{nR(T_1 - T_2)}{\gamma - 1} < 0$ (work ON gas)

### Mistake 4: Forgetting γ in Adiabatic

❌ $PV = \text{const}$ (that’s isothermal!)
✅ $PV^\gamma = \text{const}$ (adiabatic)

### Memory Trick: “4 I’s”

1. **I**sothermal: **I**nternal energy constant
2. **I**sobaric: **I**ncludes work (Q = ΔU + W with both nonzero)
3. **I**sochoric: **I**gnore work (W = 0)
4. **I**solated (Adiabatic): **I**nsulated (Q = 0)

---

## Comparative Analysis

### Work Done (Expansion from V₁ to V₂)

**Order of work done:**

$$W_{\text{isobaric}} > W_{\text{isothermal}} > W_{\text{adiabatic}}$$

**Why?**

- Isobaric: Pressure stays high throughout
- Isothermal: Pressure decreases moderately
- Adiabatic: Pressure decreases rapidly (steeper curve)

Work = Area under curve → Higher curve → More work

### Temperature Change

For expansion from V₁ to V₂:

| Process | Temperature |
| --- | --- |
| Isothermal | No change (T constant) |
| Adiabatic | Decreases (gas cools) |
| Isobaric | Increases ($V \propto T$) |
| Isochoric | Not applicable (V fixed) |

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** An ideal gas expands isothermally at 300 K from 1 L to 5 L. If initial pressure is 5 atm, find:
(a) Final pressure
(b) Work done (R = 8.314 J/mol·K, 1 atm = $10^5$ Pa)

<details><summary>Solution</summary><p><strong>(a) Final pressure:</strong></p><p>Isothermal: $P_1V_1 = P_2V_2$</p>$$P_2 = P_1\frac{V_1}{V_2} = 5 \times \frac{1}{5} = 1 \text{ atm}$$<p><strong>(b) Work done:</strong></p><p>First find n:</p>$$n = \frac{P_1V_1}{RT} = \frac{5 \times 10^5 \times 10^{-3}}{8.314 \times 300}$$<p></p>$$n = \frac{500}{2494.2} = 0.2004 \text{ mol}$$

$$W = nRT\ln\frac{V_2}{V_1}$$<p></p>$$W = 0.2004 \times 8.314 \times 300 \times \ln(5)$$<p></p>$$W = 499.4 \times 1.609 = 803.6 \text{ J}$$<p><strong>Alternative:</strong></p>$$W = P_1V_1\ln\frac{V_2}{V_1} = 5 \times 10^5 \times 10^{-3} \times \ln(5)$$<p></p>$$W = 500 \times 1.609 = 804.5 \text{ J}$$</details>

**Q2.** A gas is compressed adiabatically to 1/3 of its volume. If γ = 1.5, by what factor does pressure increase?

<details><summary>Solution</summary><p>Adiabatic: $P_1V_1^\gamma = P_2V_2^\gamma$</p>$$\frac{P_2}{P_1} = \left(\frac{V_1}{V_2}\right)^\gamma$$<p>Given: $V_2 = V_1/3$, so $V_1/V_2 = 3$</p>$$\frac{P_2}{P_1} = 3^{1.5} = 3^{3/2} = 3\sqrt{3} = 3 \times 1.732 = 5.196$$<p><strong>Pressure increases by factor of ~5.2</strong></p></details>

**Q3.** 2 moles of gas at 300 K are heated at constant volume to 450 K. If $C_V = 20$ J/mol·K, find:
(a) Heat supplied
(b) Work done
(c) Change in internal energy

<details><summary>Solution</summary><p><strong>(a) Heat supplied:</strong></p>$$Q = nC_V\Delta T = 2 \times 20 \times (450 - 300)$$<p></p>$$Q = 40 \times 150 = 6000 \text{ J}$$<p><strong>(b) Work done:</strong>
Constant volume → $W = 0$</p><p><strong>(c) Change in internal energy:</strong></p>$$\Delta U = Q - W = 6000 - 0 = 6000 \text{ J}$$<p>Or directly: $\Delta U = nC_V\Delta T = 6000$ J ✓</p></details>

---

### Level 2: JEE Main/Advanced

**Q4.** One mole of ideal gas (γ = 1.4) at 27°C expands adiabatically from 1 L to 2 L. Find:
(a) Final temperature
(b) Work done
(c) Change in internal energy

<details><summary>Solution</summary><p>Given: $T_1 = 27°C = 300$ K, $V_1 = 1$ L, $V_2 = 2$ L, γ = 1.4</p><p><strong>(a) Final temperature:</strong></p><p>Adiabatic: $T_1V_1^{\gamma-1} = T_2V_2^{\gamma-1}$</p>$$T_2 = T_1\left(\frac{V_1}{V_2}\right)^{\gamma-1}$$<p></p>$$T_2 = 300 \times \left(\frac{1}{2}\right)^{1.4-1}$$<p></p>$$T_2 = 300 \times (0.5)^{0.4}$$<p>Calculate: $(0.5)^{0.4} = 0.758$</p>$$T_2 = 300 \times 0.758 = 227.4 \text{ K} = -45.6°C$$<p><strong>(b) Work done:</strong></p>$$W = \frac{nR(T_1 - T_2)}{\gamma - 1}$$<p></p>$$W = \frac{1 \times 8.314 \times (300 - 227.4)}{1.4 - 1}$$<p></p>$$W = \frac{8.314 \times 72.6}{0.4}$$<p></p>$$W = \frac{603.6}{0.4} = 1509 \text{ J}$$<p><strong>(c) Change in internal energy:</strong>
Adiabatic: $\Delta U = -W = -1509$ J</p><p>Or: $\Delta U = nC_V\Delta T$</p>$$C_V = \frac{R}{\gamma-1} = \frac{8.314}{0.4} = 20.785 \text{ J/mol}\cdot\text{K}$$

$$\Delta U = 1 \times 20.785 \times (227.4 - 300)$$<p></p>$$\Delta U = 20.785 \times (-72.6) = -1509 \text{ J}$$<p><strong>Gas expands, cools down, internal energy decreases.</strong></p></details>

**Q5.** An ideal gas undergoes process where $P \propto V^2$. If temperature changes from 300 K to 400 K, find the ratio $V_2/V_1$.

<details><summary>Solution</summary><p>Given: $P \propto V^2$ → $P = kV^2$</p><p>From ideal gas law: $PV = nRT$</p><p>Substitute $P = kV^2$:</p>$$kV^2 \cdot V = nRT$$<p></p>$$kV^3 = nRT$$<p></p>$$V^3 \propto T$$<p>Therefore:</p>$$\frac{V_2^3}{V_1^3} = \frac{T_2}{T_1} = \frac{400}{300} = \frac{4}{3}$$

$$\frac{V_2}{V_1} = \left(\frac{4}{3}\right)^{1/3} = 1.10$$<p><strong>Volume increases by factor of 1.10</strong></p></details>

**Q6.** Compare work done when 1 mole of ideal gas expands from 1 L to 2 L at 300 K:
(a) Isothermally
(b) Isobarically (starting at 10 atm)

<details><summary>Solution</summary><p><strong>(a) Isothermal work:</strong></p>$$W_{iso-T} = nRT\ln\frac{V_2}{V_1}$$<p></p>$$W_{iso-T} = 1 \times 8.314 \times 300 \times \ln(2)$$<p></p>$$W_{iso-T} = 2494.2 \times 0.693 = 1728.5 \text{ J}$$<p><strong>(b) Isobaric work:</strong></p><p>From initial state:</p>$$P_1 = \frac{nRT_1}{V_1} = \frac{1 \times 8.314 \times 300}{10^{-3}}$$<p></p>$$P_1 = 2494200 \text{ Pa} = 24.94 \text{ atm}$$<p>Wait, problem says “starting at 10 atm”, so use that:</p>$$P = 10 \text{ atm} = 10 \times 10^5 \text{ Pa}$$

$$W_{iso-P} = P\Delta V = 10 \times 10^5 \times (2-1) \times 10^{-3}$$<p></p>$$W_{iso-P} = 10^6 \times 10^{-3} = 1000 \text{ J}$$<p><strong>But this doesn’t make sense</strong> - if initial state is 1 mol at 300 K in 1 L, pressure must be:</p>$$P = \frac{nRT}{V} = \frac{1 \times 8.314 \times 300}{10^{-3}} = 2.49 \times 10^6 \text{ Pa} ≈ 24.9 \text{ atm}$$<p>Let me recalculate isobaric with correct pressure:</p>$$W_{iso-P} = P\Delta V = 2.49 \times 10^6 \times 1 \times 10^{-3}$$<p></p>$$W_{iso-P} = 2490 \text{ J}$$<p>Or using: $W = nR\Delta T$</p><p>For isobaric expansion from 1L to 2L:</p>$$\frac{V_1}{T_1} = \frac{V_2}{T_2}$$<p></p>$$\frac{1}{300} = \frac{2}{T_2}$$<p></p>$$T_2 = 600 \text{ K}$$

$$W_{iso-P} = nR\Delta T = 1 \times 8.314 \times (600-300)$$<p></p>$$W_{iso-P} = 8.314 \times 300 = 2494.2 \text{ J}$$<p><strong>Comparison:</strong></p>$$W_{iso-P} = 2494.2 \text{ J} &gt; W_{iso-T} = 1728.5 \text{ J}$$<p><strong>Isobaric work is greater</strong> (as expected - pressure stays higher).</p></details>

---

### Level 3: JEE Advanced

**Q7.** An ideal gas undergoes cycle ABCA where:

- AB: Isothermal expansion at 400 K from 1 L to 4 L
- BC: Isobaric compression
- CA: Isochoric heating back to initial state

Find:
(a) Pressure and volume at each point
(b) Work done in each process
(c) Net work in cycle

Assume 1 mole, initial pressure 10 atm.

<details><summary>Solution</summary><p><strong>State A:</strong> $T_A = 400$ K, $V_A = 1$ L, $P_A = 10$ atm</p><p><strong>(a) Find all states:</strong></p><p><strong>State B (after isothermal expansion):</strong></p><ul><li>$T_B = T_A = 400$ K (isothermal)</li><li>$V_B = 4$ L (given)</li><li>$P_AV_A = P_BV_B$
$$P_B = P_A\frac{V_A}{V_B} = 10 \times \frac{1}{4} = 2.5 \text{ atm}$$</li></ul><p><strong>State C (after isobaric compression to original volume):</strong></p><ul><li>$V_C = V_A = 1$ L (isochoric CA brings back to A)</li><li>$P_C = P_B = 2.5$ atm (isobaric BC)</li><li>From ideal gas: $\frac{V_B}{T_B} = \frac{V_C}{T_C}$
$$T_C = T_B\frac{V_C}{V_B} = 400 \times \frac{1}{4} = 100 \text{ K}$$</li></ul><p><strong>Verification:</strong> In process CA (isochoric), volume stays at 1 L:</p><ul><li>Initial: C at 1 L, 2.5 atm, 100 K</li><li>Final: A at 1 L, 10 atm, 400 K</li><li>Check: $P/T$ constant? $2.5/100 = 10/400$ → $0.025 = 0.025$ ✓</li></ul><p><strong>(b) Work in each process:</strong></p><p><strong>AB (Isothermal):</strong></p>$$W_{AB} = nRT\ln\frac{V_B}{V_A}$$<p></p>$$W_{AB} = 1 \times 8.314 \times 400 \times \ln(4)$$<p></p>$$W_{AB} = 3325.6 \times 1.386 = 4609.4 \text{ J}$$<p><strong>BC (Isobaric compression):</strong></p>$$W_{BC} = P_B(V_C - V_B)$$<p>Convert pressure: $P_B = 2.5 \times 10^5$ Pa</p>$$W_{BC} = 2.5 \times 10^5 \times (1 - 4) \times 10^{-3}$$<p></p>$$W_{BC} = 2.5 \times 10^5 \times (-3) \times 10^{-3}$$<p></p>$$W_{BC} = -750 \text{ J}$$<p><strong>CA (Isochoric):</strong></p>$$W_{CA} = 0$$<p>(no volume change)</p><p><strong>(c) Net work:</strong></p>$$W_{net} = W_{AB} + W_{BC} + W_{CA}$$<p></p>$$W_{net} = 4609.4 + (-750) + 0$$<p></p>$$W_{net} = 3859.4 \text{ J}$$<p><strong>Also equals net heat absorbed</strong> (cyclic process: ΔU = 0).</p></details>

**Q8.** Prove that for an adiabatic process of ideal gas:

$$TV^{\gamma-1} = \text{constant}$$

<details><summary>Solution</summary><p><strong>Given:</strong> $PV^\gamma = K_1$ (constant)</p><p><strong>From ideal gas law:</strong> $PV = nRT$</p>$$P = \frac{nRT}{V}$$<p><strong>Substitute in adiabatic equation:</strong></p>$$\frac{nRT}{V} \cdot V^\gamma = K_1$$<p></p>$$nRT \cdot V^{\gamma-1} = K_1$$<p>Since n and R are constants:</p>$$T \cdot V^{\gamma-1} = \frac{K_1}{nR} = K_2 \text{ (constant)}$$<div class="formula-box">$$\boxed{TV^{\gamma-1} = \text{constant}}$$</div><p><strong>Similarly, can derive:</strong></p><p>From $TV^{\gamma-1} = K_2$ and $PV = nRT$:</p>$$T = \frac{PV}{nR}$$<p>Substitute:</p>$$\frac{PV}{nR} \cdot V^{\gamma-1} = K_2$$<p></p>$$PV^\gamma = nRK_2 = K_1$$<p>Which gives back $PV^\gamma = \text{const}$ ✓</p><p><strong>For T-P relation:</strong></p><p>From $PV = nRT$: $V = nRT/P$</p><p>Substitute in $TV^{\gamma-1} = K_2$:</p>$$T \cdot \left(\frac{nRT}{P}\right)^{\gamma-1} = K_2$$<p></p>$$T \cdot \frac{(nRT)^{\gamma-1}}{P^{\gamma-1}} = K_2$$<p></p>$$T \cdot T^{\gamma-1} \cdot \frac{(nR)^{\gamma-1}}{P^{\gamma-1}} = K_2$$<p></p>$$T^\gamma \cdot \frac{(nR)^{\gamma-1}}{P^{\gamma-1}} = K_2$$<p></p>$$T^\gamma = K_2 \cdot \frac{P^{\gamma-1}}{(nR)^{\gamma-1}}$$<p></p>$$T^\gamma \propto P^{\gamma-1}$$<div class="formula-box">$$\boxed{TP^{(\gamma-1)/\gamma} = \text{constant}}$$<p>Or:</p>$$\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma}$$</div><p><strong>All three forms proven!</strong></p></details>

**Q9.** Show that slope of adiabatic curve is γ times the slope of isothermal curve at the same point.

<details><summary>Solution</summary><p><strong>Isothermal curve:</strong> $PV = K_1$</p><p>Differentiate:</p>$$\frac{d(PV)}{dV} = 0$$<p></p>$$P + V\frac{dP}{dV} = 0$$<p></p>$$\frac{dP}{dV}\bigg|_{iso-T} = -\frac{P}{V}$$<p><strong>Adiabatic curve:</strong> $PV^\gamma = K_2$</p><p>Differentiate:</p>$$\frac{d(PV^\gamma)}{dV} = 0$$<p></p>$$V^\gamma \frac{dP}{dV} + P \cdot \gamma V^{\gamma-1} = 0$$<p></p>$$V^\gamma \frac{dP}{dV} = -\gamma P V^{\gamma-1}$$<p></p>$$\frac{dP}{dV}\bigg|_{adiabatic} = -\gamma \frac{P}{V}$$<p><strong>Ratio:</strong></p>$$\frac{\left|\frac{dP}{dV}\right|_{adiabatic}}{\left|\frac{dP}{dV}\right|_{iso-T}} = \frac{\gamma P/V}{P/V} = \gamma$$<div class="formula-box">$$\boxed{\text{Slope}_{adiabatic} = \gamma \times \text{Slope}_{isothermal}}$$</div><p>Since γ &gt; 1, <strong>adiabatic curve is steeper!</strong></p></details>

---

## Connection to Other Topics

### → PV Diagrams

All processes visualized on P-V diagrams, work as area:
[PV Diagrams and Cycles →](../pv-diagrams/index.md)

### → First Law of Thermodynamics

Each process applies First Law differently:
[First Law →](../first-law/index.md)

### → Heat Engines

Carnot cycle uses isothermal and adiabatic processes:
[Heat Engines →](../heat-engines/index.md)

### → Kinetic Theory

Adiabatic exponent γ from degrees of freedom:
[Kinetic Theory →](../../kinetic-theory/index.md)

### → Sound Waves

Sound propagates adiabatically:

$$v = \sqrt{\frac{\gamma P}{\rho}}$$

---

## Quick Revision Table

| Process | Constant | Equation | Q | W | ΔU | Heat Capacity |
| --- | --- | --- | --- | --- | --- | --- |
| **Isothermal** | T | $PV = K$ | $nRT\ln(V_2/V_1)$ | $nRT\ln(V_2/V_1)$ | 0 | ∞ |
| **Adiabatic** | Q = 0 | $PV^\gamma = K$ | 0 | $\frac{nR(T_1-T_2)}{\gamma-1}$ | $-W$ | 0 |
| **Isobaric** | P | $V/T = K$ | $nC_P\Delta T$ | $P\Delta V$ | $nC_V\Delta T$ | $C_P$ |
| **Isochoric** | V | $P/T = K$ | $nC_V\Delta T$ | 0 | $nC_V\Delta T$ | $C_V$ |

---

## JEE Strategy Tips

1. **Identify the process** from given conditions (constant T, P, V, or Q)
2. **Write the governing equation** (PV, PV^γ, etc.)
3. **Use First Law** to connect Q, W, ΔU
4. **For work:** Use specific formula for each process
5. **Slopes:** Remember adiabatic is steeper than isothermal
6. **Sign conventions:** Expansion → W positive, Compression → W negative

---

**Next Topic:** [PV Diagrams and Cyclic Processes →](../pv-diagrams/index.md)

---

*Last updated: February 2025*

From TestGuru · our mock-test platform

## You've read Thermodynamic Processes.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fphysics%2Fthermodynamics%2Fthermodynamic-processes%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/thermodynamics/thermodynamic-processes/",this.page.identifier="/physics/thermodynamics/thermodynamic-processes/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424359895778"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424359895778")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/thermodynamics/thermodynamic-processes/](https://jeenotes.in/physics/thermodynamics/thermodynamic-processes/) · raw HTML: `offline/physics/thermodynamics/thermodynamic-processes/index.html`_
