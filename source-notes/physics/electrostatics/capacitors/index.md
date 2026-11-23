---
title: "Capacitors and Capacitance"
source: "https://jeenotes.in/physics/electrostatics/capacitors/"
description: "Master parallel plate capacitors, series-parallel combinations, energy storage, and dielectrics for JEE Physics"
updated: "2026-10-18"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 8"
html: "../../../../offline/physics/electrostatics/capacitors/index.html"
extracted: "2026-11-23"
---

> Master parallel plate capacitors, series-parallel combinations, energy storage, and dielectrics for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Electric Potential](../electric-potential/index.md) — Voltage and potential difference
- [Electric Field](../electric-field/index.md) — Field between plates
- [Gauss’s Law](../gauss-law/index.md) — Field due to charged surfaces

## The Hook: Iron Man’s Arc Reactor

> **★ Key point · Connect: Powering the Impossible**
>
> In **Iron Man** (2008), Tony Stark builds a miniature arc reactor that powers his entire suit — repulsor rays, flight, and all. How can such a tiny device store and deliver enormous amounts of energy?
>
> Or think of **camera flashes** that charge up and release a bright burst instantly. Or **defibrillators** in hospitals that deliver life-saving electric shocks. Or your **phone’s battery** storing charge for hours of use.
>
> The secret is **capacitors** — devices that store electric charge and energy, ready to release it when needed. From tiny circuits to massive power grids, capacitors are everywhere!

---

## What is a Capacitor?

> **★ Key point · Capacitor Definition**
>
> A **capacitor** is a device that stores electric charge and energy. It consists of two conductors (called **plates**) separated by an insulator (called **dielectric**).

**Basic principle:**

1. Connect capacitor to battery (voltage source)
2. Positive charge accumulates on one plate
3. Equal negative charge on the other plate
4. Net charge = 0, but separated charge creates electric field
5. Remove battery → charge stays trapped (energy stored!)

> **◐ In simple terms · Water Tank Analogy**
>
> Think of a capacitor like a **water tank**:
>
> | Water Tank | Capacitor |

> | --- | --- |

> | Tank size | Capacitance ($C$) |

> | Water volume | Charge ($Q$) |

> | Water pressure | Voltage ($V$) |

> | Larger tank holds more water | Larger capacitor stores more charge |
>
> Charging = filling the tank. Discharging = draining it.

---

## Capacitance

> **★ Key point · Capacitance Definition**
>
> **Capacitance** is the ability of a capacitor to store charge per unit potential difference.

$$\boxed{C = \frac{Q}{V}}$$

where:

- $C$ = capacitance (unit: Farad, F)
- $Q$ = charge on one plate (in Coulombs)
- $V$ = potential difference between plates (in Volts)

### Interactive Demo: Visualize Capacitor Charging

See how charge accumulates on the plates and how the electric field develops:

**Unit:** 1 Farad (F) = 1 Coulomb/Volt

Practical units:

- 1 μF = $10^{-6}$ F (microfarad)
- 1 nF = $10^{-9}$ F (nanofarad)
- 1 pF = $10^{-12}$ F (picofarad)

> **★ Key point · Memory Trick**
>
> **“Capacitance = Charge per Volt”**
>
> $C = \frac{Q}{V}$ → **“C-Q-V”** (like “see queue of V”)
>
> Larger $C$ → stores more charge at same voltage
>
> Think of it as the “capacity” of the capacitor!

**Key point:** Capacitance depends only on **geometry** (size, shape, separation) and **material** (dielectric), NOT on charge or voltage!

---

## Parallel Plate Capacitor

The most common and important type.

**Structure:**

- Two parallel conducting plates, each of area $A$
- Separated by distance $d$
- Usually $d << \sqrt{A}$ (separation much smaller than plate dimensions)

**Electric field between plates:**

Using [Gauss’s Law](../gauss-law/index.md), field due to each plate with surface charge density $\sigma$:

$$E = \frac{\sigma}{\varepsilon_0}$$

**Potential difference:**

$$V = Ed = \frac{\sigma d}{\varepsilon_0} = \frac{Qd}{A\varepsilon_0}$$

(Since $\sigma = \frac{Q}{A}$)

**Capacitance:**

$$C = \frac{Q}{V} = \frac{Q}{Qd/(A\varepsilon_0)}$$

$$\boxed{C = \frac{\varepsilon_0 A}{d}}$$

**Key relationships:**

- $C \propto A$ (larger area → more capacitance)
- $C \propto \frac{1}{d}$ (closer plates → more capacitance)

> **★ Key point · Pattern Recognition**
>
> **“Capacitance loves Close and Large”**
>
> - **Closer** plates ($d$ decreases) → $C$ increases

> - **Larger** area ($A$ increases) → $C$ increases
>
> Think of it: closer plates = stronger attraction = easier to store opposite charges!

---

## Capacitors with Dielectric

**Dielectric** = insulating material (glass, plastic, ceramic) placed between plates

**Effect of dielectric:**

When you insert a dielectric with **dielectric constant** $K$ (also called relative permittivity $\varepsilon_r$):

$$\boxed{C = \frac{K\varepsilon_0 A}{d} = KC_0}$$

where $C_0$ is capacitance with vacuum/air between plates.

**Dielectric constant** $K$:

- Vacuum: $K = 1$ (by definition)
- Air: $K \approx 1$
- Paper: $K \approx 3.7$
- Glass: $K \approx 5-10$
- Water: $K \approx 80$
- Mica: $K \approx 6$
- Ceramic: $K$ can be 1000+

**Why does capacitance increase?**

1. Dielectric molecules get polarized in the electric field
2. They create an **opposing field** inside
3. Net field decreases: $E_{net} = \frac{E_0}{K}$
4. For same charge, voltage decreases: $V = \frac{V_0}{K}$
5. $C = \frac{Q}{V}$ increases by factor $K$

> **◐ In simple terms · Oppenheimer's Atomic Insight**
>
> In **Oppenheimer** (2023), we see how atoms respond to electric fields — electrons shift slightly relative to the nucleus. This **atomic polarization** is exactly what happens in a dielectric!
>
> Millions of atoms aligning creates a macroscopic effect — increased capacitance.

---

## Energy Stored in a Capacitor

A charged capacitor stores **electrical potential energy**.

**Derivation:**

To charge a capacitor, we move charge $dq$ from one plate to another against potential difference $V = \frac{q}{C}$ (where $q$ is current charge).

Work done: $dW = V \, dq = \frac{q}{C} dq$

Total work (= energy stored):

$$U = \int_0^Q \frac{q}{C} dq = \frac{1}{C} \cdot \frac{Q^2}{2}$$

$$\boxed{U = \frac{Q^2}{2C}}$$

**Alternative forms:**

Using $Q = CV$:

$$\boxed{U = \frac{1}{2}CV^2}$$

$$\boxed{U = \frac{1}{2}QV}$$

All three are equivalent — use whichever is convenient!

> **★ Key point · Memory Trick for Energy Formulas**
>
> **“Half-C-V-squared, Half-Q-V, Q-squared-over-2C”**
>
> Remember the **1/2** factor — it comes from averaging (charging from 0 to V, average voltage is V/2).
>
> **Quick check:** All three must give same answer!
>
> - $\frac{1}{2}CV^2 = \frac{1}{2}(Q/V) \cdot V^2 = \frac{1}{2}QV$ ✓

> - $\frac{1}{2}QV = \frac{1}{2}(CV) \cdot V = \frac{1}{2}CV^2$ ✓

---

## Energy Density

Energy per unit volume stored in the electric field:

$$u = \frac{U}{\text{Volume}} = \frac{U}{Ad}$$

Using $U = \frac{1}{2}CV^2$ and $C = \frac{\varepsilon_0 A}{d}$, $V = Ed$:

$$u = \frac{1}{2}\frac{\varepsilon_0 A}{d} \cdot \frac{(Ed)^2}{Ad} = \frac{1}{2}\varepsilon_0 E^2$$

$$\boxed{u = \frac{1}{2}\varepsilon_0 E^2}$$

**Key insight:** Energy is stored in the **electric field itself**!

With dielectric:

$$\boxed{u = \frac{1}{2}K\varepsilon_0 E^2}$$

---

## Capacitors in Series

**Series connection:** Capacitors connected end-to-end (same charge on all).

**Key properties:**

1. **Same charge** $Q$ on all capacitors
2. **Voltages add:** $V_{total} = V_1 + V_2 + V_3 + ...$
3. **Equivalent capacitance:**

$$\frac{V_{total}}{Q} = \frac{V_1}{Q} + \frac{V_2}{Q} + \frac{V_3}{Q} + ...$$

$$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + ...$$

$$\boxed{\frac{1}{C_{series}} = \sum \frac{1}{C_i}}$$

**For two capacitors:**

$$\boxed{C_{eq} = \frac{C_1 C_2}{C_1 + C_2}}$$

**Pattern:** Series capacitance is **less than** the smallest individual capacitance!

> **★ Key point · Memory Trick**
>
> **“Series - like Resistors in Parallel”**
>
> Series capacitors combine like **resistors in parallel**!
>
> - Resistors in series: $R_{eq} = R_1 + R_2 + ...$

> - Capacitors in series: $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + ...$
>
> **Visual:** Series capacitors = increased effective separation → less capacitance

---

## Capacitors in Parallel

**Parallel connection:** Capacitors connected side-by-side (same voltage across all).

**Key properties:**

1. **Same voltage** $V$ across all capacitors
2. **Charges add:** $Q_{total} = Q_1 + Q_2 + Q_3 + ...$
3. **Equivalent capacitance:**

$$\frac{Q_{total}}{V} = \frac{Q_1}{V} + \frac{Q_2}{V} + \frac{Q_3}{V} + ...$$

$$\boxed{C_{parallel} = C_1 + C_2 + C_3 + ... = \sum C_i}$$

**Pattern:** Parallel capacitance is **sum** of individual capacitances.

> **★ Key point · Memory Trick**
>
> **“Parallel - like Resistors in Series”**
>
> Parallel capacitors combine like **resistors in series**!
>
> - Resistors in parallel: $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$

> - Capacitors in parallel: $C_{eq} = C_1 + C_2 + ...$
>
> **Visual:** Parallel capacitors = increased effective area → more capacitance

---

## Comparison: Series vs Parallel

| Property | Series | Parallel |
| --- | --- | --- |
| Charge | Same ($Q$) on all | Different (adds up) |
| Voltage | Adds up | Same ($V$) across all |
| Equivalent $C$ | $\frac{1}{C_{eq}} = \sum \frac{1}{C_i}$ | $C_{eq} = \sum C_i$ |
| Comparison | $C_{eq} <$ smallest $C_i$ | $C_{eq} >$ largest $C_i$ |
| Energy | $U = \frac{Q^2}{2C_{eq}}$ | $U = \frac{1}{2}C_{eq}V^2$ |

> **◐ In simple terms · Jawan Team Strategy**
>
> Think of **Jawan** (2023) team planning:
>
> **Series:** Each person handles part of the task sequentially → total time increases (like voltage adds up)
>
> **Parallel:** Everyone works together → combined capacity increases (like capacitance adds up)
>
> Same logic applies to capacitors!

---

## Effects of Dielectric: Two Cases

### Case 1: Battery Connected (Constant Voltage)

When you insert dielectric **while battery is connected**:

**Before:** $Q_0 = C_0 V$, $U_0 = \frac{1}{2}C_0 V^2$

**After:**

- Voltage $V$ stays same (battery maintains it)
- Capacitance: $C = KC_0$
- Charge: $Q = CV = KC_0 V$ (increases by factor $K$)
- Energy: $U = \frac{1}{2}CV^2 = K \cdot \frac{1}{2}C_0 V^2$ (increases by factor $K$)

**Summary:** $Q$ and $U$ increase by factor $K$

### Case 2: Battery Disconnected (Constant Charge)

When you insert dielectric **after disconnecting battery**:

**Before:** $Q_0 = C_0 V_0$, $U_0 = \frac{Q_0^2}{2C_0}$

**After:**

- Charge $Q = Q_0$ stays same (isolated capacitor)
- Capacitance: $C = KC_0$
- Voltage: $V = \frac{Q}{C} = \frac{Q_0}{KC_0} = \frac{V_0}{K}$ (decreases by factor $K$)
- Energy: $U = \frac{Q^2}{2C} = \frac{Q_0^2}{2KC_0} = \frac{U_0}{K}$ (decreases by factor $K$)

**Summary:** $V$ and $U$ decrease by factor $K$

> **⚠ Trap · Common JEE Trap**
>
> **Always check:** Is battery connected or disconnected?
>
> - **Connected** → $V$ constant, $Q$ changes

> - **Disconnected** → $Q$ constant, $V$ changes
>
> This determines whether energy increases or decreases!

---

## Common Capacitor Configurations

### 1. Spherical Capacitor

Two concentric spheres, radii $a$ (inner) and $b$ (outer):

$$C = 4\pi\varepsilon_0 \frac{ab}{b-a}$$

For $b >> a$: $C \approx 4\pi\varepsilon_0 a$ (isolated sphere)

### 2. Cylindrical Capacitor

Two coaxial cylinders, radii $a$ (inner) and $b$ (outer), length $L$:

$$C = \frac{2\pi\varepsilon_0 L}{\ln(b/a)}$$

### 3. Parallel Plates (main formula)

$$C = \frac{\varepsilon_0 A}{d}$$

---

## Charging and Discharging (RC Circuits)

When capacitor charges through resistor $R$ from voltage source $V_0$:

**Charging:**

- Charge: $Q(t) = CV_0(1 - e^{-t/RC})$
- Voltage: $V_C(t) = V_0(1 - e^{-t/RC})$
- Current: $I(t) = \frac{V_0}{R}e^{-t/RC}$

**Discharging:**

- Charge: $Q(t) = Q_0 e^{-t/RC}$
- Voltage: $V_C(t) = V_0 e^{-t/RC}$
- Current: $I(t) = -\frac{V_0}{R}e^{-t/RC}$

**Time constant:** $\tau = RC$

- At $t = \tau$: capacitor charges to 63% of maximum
- At $t = 5\tau$: essentially fully charged (>99%)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Series vs Parallel Formulas**
>
> **Wrong:** Series capacitors add: $C_{series} = C_1 + C_2$
>
> **Correct:**
>
> - **Parallel:** $C = C_1 + C_2$ (adds directly)

> - **Series:** $\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2}$ (reciprocals add)
>
> **Opposite** of resistors!

> **⚠ Trap #2: Energy Formula Confusion**
>
> **Wrong:** Using wrong formula for given quantities
>
> **Correct:** Pick the right one:
>
> - Given $Q$ and $C$: Use $U = \frac{Q^2}{2C}$

> - Given $V$ and $C$: Use $U = \frac{1}{2}CV^2$

> - Given $Q$ and $V$: Use $U = \frac{1}{2}QV$

> **⚠ Trap #3: Dielectric Insertion**
>
> **Wrong:** “Dielectric always increases energy”
>
> **Correct:**
>
> - Battery **connected**: Energy **increases** ($U = \frac{1}{2}CV^2$, $C$ increases)

> - Battery **disconnected**: Energy **decreases** ($U = \frac{Q^2}{2C}$, $C$ increases)
>
> Check if $Q$ or $V$ is constant!

> **⚠ Trap #4: Parallel Plate Formula**
>
> **Wrong:** $C = \frac{\varepsilon_0 d}{A}$
>
> **Correct:** $C = \frac{\varepsilon_0 A}{d}$
>
> Area in **numerator**, distance in **denominator**!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> A parallel plate capacitor has plates of area $100$ cm² separated by 2 mm. Find its capacitance.
>
> **Solution:**
>
> $$C = \frac{\varepsilon_0 A}{d} = \frac{8.85 \times 10^{-12} \times 100 \times 10^{-4}}{2 \times 10^{-3}}$$

$$C = \frac{8.85 \times 10^{-12} \times 10^{-2}}{2 \times 10^{-3}} = \frac{8.85 \times 10^{-14}}{2 \times 10^{-3}}$$

$$C = 4.425 \times 10^{-11} \text{ F}$$

$$\boxed{C \approx 44.25 \text{ pF}}$$

> **↗ Connection · Problem 1.2**
>
> A 10 μF capacitor is charged to 100 V. Find (a) charge stored, (b) energy stored.
>
> **Solution:**
>
> **(a) Charge:**
>
> $$Q = CV = 10 \times 10^{-6} \times 100 = 10^{-3} \text{ C}$$

$$\boxed{Q = 1 \text{ mC}}$$
>
> **(b) Energy:**
>
> $$U = \frac{1}{2}CV^2 = \frac{1}{2} \times 10 \times 10^{-6} \times (100)^2$$

$$U = 5 \times 10^{-6} \times 10^4 = 5 \times 10^{-2} \text{ J}$$

$$\boxed{U = 0.05 \text{ J} = 50 \text{ mJ}}$$

> **↗ Connection · Problem 1.3**
>
> Two capacitors of 4 μF and 6 μF are connected in series. Find equivalent capacitance.
>
> **Solution:**
>
> $$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} = \frac{1}{4} + \frac{1}{6} = \frac{3 + 2}{12} = \frac{5}{12}$$

$$C_{eq} = \frac{12}{5} = 2.4 \text{ μF}$$

$$\boxed{C_{eq} = 2.4 \text{ μF}}$$
>
> (Less than smallest: 2.4 < 4 ✓)

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A parallel plate capacitor is charged to 200 V and then disconnected. A dielectric slab ($K = 5$) is inserted. Find the new voltage.
>
> **Solution:**
>
> **Battery disconnected** → Charge $Q$ constant
>
> Original: $V_0 = 200$ V
>
> After inserting dielectric:
>
> - Capacitance becomes $C = KC_0 = 5C_0$

> - Charge same: $Q = C_0 V_0 = CV$
>
> $$V = \frac{Q}{C} = \frac{C_0 V_0}{KC_0} = \frac{V_0}{K} = \frac{200}{5}$$

$$\boxed{V = 40 \text{ V}}$$
>
> (Voltage decreases by factor 5)

> **↗ Connection · Problem 2.2**
>
> Three capacitors 2 μF, 3 μF, and 6 μF are connected in parallel. This combination is connected in series with a 4 μF capacitor. Find total capacitance.
>
> **Solution:**
>
> **Step 1:** Parallel combination:
>
> $$C_{parallel} = 2 + 3 + 6 = 11 \text{ μF}$$
>
> **Step 2:** Series with 4 μF:
>
> $$\frac{1}{C_{total}} = \frac{1}{11} + \frac{1}{4} = \frac{4 + 11}{44} = \frac{15}{44}$$

$$C_{total} = \frac{44}{15} \approx 2.93 \text{ μF}$$

$$\boxed{C_{total} \approx 2.93 \text{ μF}}$$

> **↗ Connection · Problem 2.3**
>
> A capacitor of capacitance $C$ is charged to voltage $V$ and then connected to an identical uncharged capacitor. Find (a) final voltage on each, (b) energy loss.
>
> **Solution:**
>
> Initial charge: $Q_0 = CV$
>
> When connected, charge distributes equally (same voltage on both):
>
> **(a) Final voltage:**
>
> Total charge conserved: $Q_0 = Q_1 + Q_2 = CV_f + CV_f = 2CV_f$
>
> $$V_f = \frac{Q_0}{2C} = \frac{CV}{2C} = \frac{V}{2}$$

$$\boxed{V_f = \frac{V}{2} \text{ on each}}$$
>
> **(b) Energy loss:**
>
> Initial energy: $U_i = \frac{1}{2}CV^2$
>
> Final energy: $U_f = 2 \times \frac{1}{2}C\left(\frac{V}{2}\right)^2 = 2 \times \frac{1}{2}C \times \frac{V^2}{4} = \frac{CV^2}{4}$
>
> Energy loss: $\Delta U = U_i - U_f = \frac{1}{2}CV^2 - \frac{1}{4}CV^2$
>
> $$\boxed{\Delta U = \frac{1}{4}CV^2}$$
>
> (Half the energy is lost as heat during charge redistribution!)

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A capacitor is made of two square plates of side $L$ separated by distance $d$. A dielectric slab of thickness $d$ and dielectric constant $K$ is inserted to fill half the gap (covering half the area). Find capacitance.
>
> **Solution:**
>
> Think of it as **two capacitors in parallel**:
>
> **Capacitor 1** (with dielectric, area $A/2 = L^2/2$):
>
> $$C_1 = \frac{K\varepsilon_0 (L^2/2)}{d} = \frac{K\varepsilon_0 L^2}{2d}$$
>
> **Capacitor 2** (without dielectric, area $A/2 = L^2/2$):
>
> $$C_2 = \frac{\varepsilon_0 (L^2/2)}{d} = \frac{\varepsilon_0 L^2}{2d}$$
>
> **Total** (parallel):
>
> $$C = C_1 + C_2 = \frac{K\varepsilon_0 L^2}{2d} + \frac{\varepsilon_0 L^2}{2d}$$

$$C = \frac{\varepsilon_0 L^2}{2d}(K + 1)$$

$$\boxed{C = \frac{\varepsilon_0 L^2(K+1)}{2d}}$$

> **↗ Connection · Problem 3.2**
>
> An infinite number of capacitors are connected in series: first $C$, then $2C$ in series with it, then $4C$ in series, then $8C$, etc. Find effective capacitance.
>
> **Solution:**
>
> Let effective capacitance be $C_{eq}$.
>
> After the first capacitor $C$, the rest of the chain (starting from $2C$) is similar to the original but with capacitances doubled.
>
> So, rest of the chain has capacitance $2C_{eq}$ (by scaling).
>
> First capacitor $C$ is in series with $2C_{eq}$:
>
> $$\frac{1}{C_{eq}} = \frac{1}{C} + \frac{1}{2C_{eq}}$$

$$\frac{1}{C_{eq}} - \frac{1}{2C_{eq}} = \frac{1}{C}$$

$$\frac{2 - 1}{2C_{eq}} = \frac{1}{C}$$

$$\frac{1}{2C_{eq}} = \frac{1}{C} \;\Rightarrow\; 2C_{eq} = C$$

$$\boxed{C_{eq} = \frac{C}{2}}$$
>
> **Check (geometric series):** $\frac{1}{C_{eq}} = \frac{1}{C}\left(1 + \frac{1}{2} + \frac{1}{4} + \cdots\right) = \frac{2}{C}$ ✓
>
> (Series combination is always less than the smallest capacitor: $\frac{C}{2} < C$ ✓)
>
> **Beautiful result:** Infinite series converges to finite value!

> **↗ Connection · Problem 3.3**
>
> A parallel plate capacitor with air ($K=1$) has capacitance $C_0$ and is charged to voltage $V_0$, then disconnected. A dielectric slab ($K=4$) of thickness $d/2$ (where $d$ is plate separation) is inserted. Find (a) new capacitance, (b) new voltage, (c) new energy.
>
> **Solution:**
>
> Think as **two capacitors in series**:
>
> - Gap with dielectric (thickness $d/2$): $C_1 = \frac{K\varepsilon_0 A}{d/2} = \frac{4 \times 2\varepsilon_0 A}{d} = \frac{8\varepsilon_0 A}{d}$

> - Gap with air (thickness $d/2$): $C_2 = \frac{\varepsilon_0 A}{d/2} = \frac{2\varepsilon_0 A}{d}$
>
> **(a) New capacitance:**
>
> $$\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} = \frac{d}{8\varepsilon_0 A} + \frac{d}{2\varepsilon_0 A} = \frac{d}{\varepsilon_0 A}\left[\frac{1}{8} + \frac{4}{8}\right]$$

$$\frac{1}{C} = \frac{5d}{8\varepsilon_0 A}$$

$$C = \frac{8\varepsilon_0 A}{5d}$$
>
> Since $C_0 = \frac{\varepsilon_0 A}{d}$:
>
> $$\boxed{C = \frac{8C_0}{5} = 1.6C_0}$$
>
> **(b) New voltage:**
>
> Charge conserved: $Q = C_0 V_0$
>
> $$V = \frac{Q}{C} = \frac{C_0 V_0}{1.6C_0} = \frac{V_0}{1.6}$$

$$\boxed{V = \frac{5V_0}{8} = 0.625V_0}$$
>
> **(c) New energy:**
>
> $$U = \frac{Q^2}{2C} = \frac{(C_0 V_0)^2}{2 \times 1.6C_0} = \frac{C_0 V_0^2}{3.2}$$
>
> Original: $U_0 = \frac{1}{2}C_0 V_0^2$
>
> $$U = \frac{U_0}{1.6} = \frac{5U_0}{8}$$

$$\boxed{U = 0.625U_0}$$
>
> (Energy decreases by 37.5%)

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| Capacitance | $C = \frac{Q}{V}$ (charge per volt) |
| Parallel plate | $C = \frac{\varepsilon_0 A}{d}$ (or $\frac{K\varepsilon_0 A}{d}$ with dielectric) |
| Energy stored | $U = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{Q^2}{2C}$ |
| Energy density | $u = \frac{1}{2}\varepsilon_0 E^2$ |
| Series combination | $\frac{1}{C_{eq}} = \sum \frac{1}{C_i}$ (like R in parallel) |
| Parallel combination | $C_{eq} = \sum C_i$ (like R in series) |
| Two in series | $C = \frac{C_1 C_2}{C_1 + C_2}$ |
| Dielectric effect | $C$ multiplied by $K$ |
| Battery connected | $V$ constant, $Q$ and $U$ increase with dielectric |
| Battery disconnected | $Q$ constant, $V$ and $U$ decrease with dielectric |
| Time constant | $\tau = RC$ (charging/discharging) |

**JEE Weightage:** 2-3 questions in JEE Main, 1-2 in JEE Advanced (often numerical on combinations or energy)

**Time-Saver:** For series/parallel, remember it’s **opposite** of resistors!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Capacitance is geometry-dependent** — larger area and closer plates give more capacitance

> 2. **Capacitors store energy in electric field** — $U = \frac{1}{2}CV^2$

> 3. **Series and parallel are opposite of resistors** — series adds reciprocals, parallel adds directly

> 4. **Dielectric increases capacitance** — factor $K$ (dielectric constant)

> 5. **Battery connected vs disconnected matters** — determines if $V$ or $Q$ is constant
>
> **“Capacitors are the energy reservoirs of electronics. Master their combinations and you master circuit design.”**

---

## Related Topics

### Within Electrostatics

- [Electric Potential](../electric-potential/index.md) — Voltage across capacitor
- [Electric Field](../electric-field/index.md) — Field between capacitor plates
- [Gauss’s Law](../gauss-law/index.md) — Deriving field for parallel plates

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) — RC circuits, charging/discharging
- [Electromagnetic Waves](../../electromagnetic-waves/index.md) — Oscillating LC circuits
- [AC Circuits](../../current-electricity/index.md) — Capacitive reactance

### Applications

- Camera flash storage
- Computer memory (DRAM uses capacitors)
- Power supply filters
- Touch screens (capacitive sensing)
- Defibrillators (energy storage)

### Math Connections

- [Exponential Functions](../../../mathematics/limits-continuity-differentiability/index.md) — RC circuit equations
- [Differential Equations](../../../mathematics/differential-equations/index.md) — Charging/discharging dynamics

---

---

## Final Note

Congratulations! You’ve completed the Electrostatics chapter. You now understand:

- How charges interact (Coulomb’s Law)
- How they create fields and potentials
- How dipoles behave
- How to use Gauss’s Law for symmetric problems
- How to work with energy and potential
- How capacitors store charge and energy

**Next steps:**

- Practice more problems from previous JEE papers
- Connect these concepts to [Current Electricity](../../current-electricity/index.md)
- Explore applications in [Magnetism](../../magnetism/index.md) and [Electromagnetic Induction](../../electromagnetic-induction/index.md)

Keep practicing, and remember: **Electrostatics is the foundation for all of electromagnetism!**

From TestGuru · our mock-test platform

## You've read Capacitors and Capacitance.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electrostatics&tg_exam=jee-main&tg_page=%2Fphysics%2Felectrostatics%2Fcapacitors%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electrostatics/capacitors/",this.page.identifier="/physics/electrostatics/capacitors/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="capacitorDemo" id="anim-capacitorDemo-1795396423390882155"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-capacitorDemo-1795396423390882155")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electrostatics/capacitors/](https://jeenotes.in/physics/electrostatics/capacitors/) · raw HTML: `offline/physics/electrostatics/capacitors/index.html`_
