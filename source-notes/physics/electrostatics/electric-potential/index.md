---
title: "Electric Potential and Potential Energy"
source: "https://jeenotes.in/physics/electrostatics/electric-potential/"
description: "Master electric potential, potential difference, equipotential surfaces, and energy for JEE Physics"
updated: "2026-10-18"
reading_time: "7 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 8"
html: "../../../../offline/physics/electrostatics/electric-potential/index.html"
extracted: "2026-11-23"
---

> Master electric potential, potential difference, equipotential surfaces, and energy for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Electric Field](../electric-field/index.md) — Field creates potential
- [Work-Energy Theorem](../../work-energy-power/index.md) — Work and energy concepts
- Line integrals (basic calculus)

## The Hook: Why Don’t Birds Get Shocked on Power Lines?

> **★ Key point · Connect: The Bird Paradox**
>
> You’ve seen birds sitting comfortably on high-voltage power lines carrying thousands of volts. Why don’t they get electrocuted?
>
> Or in **Thor** movies, why can Thor withstand lightning (millions of volts) while humans can’t? Or in **Iron Man**, how does the arc reactor store massive energy in a tiny space?
>
> The answer isn’t about voltage (potential) alone — it’s about **potential difference**. The bird’s two feet are at the **same potential**, so no current flows through it!
>
> Understanding electric potential is the key to understanding how circuits work, how batteries store energy, and why some shocks are deadly while others are harmless.

---

## What is Electric Potential?

> **★ Key point · Electric Potential Definition**
>
> **Electric potential** at a point is the work done per unit charge in bringing a small positive test charge from infinity to that point (against the electric field).

$$\boxed{V = \frac{W_{\infty \to P}}{q_0}}$$

where:

- $V$ = electric potential (unit: Volt, V = J/C)
- $W$ = work done
- $q_0$ = test charge (positive)

**In simple terms:** Potential is the “electric energy per unit charge” at a location.

> **◐ In simple terms · Gravity Analogy**
>
> Electric potential is like **gravitational potential energy per unit mass** (height).
>
> | Gravity | Electricity |

> | --- | --- |

> | Height ($h$) | Potential ($V$) |

> | Mass falls down | Positive charge moves to lower potential |

> | PE = $mgh$ | PE = $qV$ |

> | Force: $\vec{F} = m\vec{g}$ | Force: $\vec{F} = q\vec{E}$ |
>
> Just as water flows downhill, positive charges “flow” from high to low potential!

---

## Electric Potential vs Electric Field

| Electric Field $\vec{E}$ | Electric Potential $V$ |
| --- | --- |
| **Vector** quantity | **Scalar** quantity |
| Force per unit charge | Energy per unit charge |
| Unit: N/C or V/m | Unit: Volt (V) or J/C |
| Tells **direction** of force | Tells “height” in energy landscape |
| Difficult to add (vectors) | Easy to add (scalars) |

**Key Advantage of Potential:** It’s a **scalar**! Much easier to calculate and add than vector fields.

---

## Potential Due to a Point Charge

For a point charge $Q$ at distance $r$:

$$\boxed{V = k\frac{Q}{r} = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r}}$$

where $k = 9 \times 10^9$ N·m²/C²

**Sign convention:**

- Positive charge ($Q > 0$): $V > 0$ (positive potential)
- Negative charge ($Q < 0$): $V < 0$ (negative potential)

**At infinity:** $V = 0$ (reference point)

> **★ Key point · Memory Trick**
>
> **“Voltage equals K-Q-over-R”**
>
> Compare with field: $E = k\frac{Q}{r^2}$ (has $r^2$ in denominator)
>
> **Pattern:**
>
> - Field: $E \propto \frac{1}{r^2}$

> - Potential: $V \propto \frac{1}{r}$
>
> Potential falls off **slower** than field!

---

## Potential Difference

> **★ Key point · Potential Difference**
>
> The **potential difference** between two points is the work done per unit charge in moving a charge from one point to another.

$$\boxed{V_A - V_B = \frac{W_{B \to A}}{q}}$$

**Also called:** Voltage (when referring to potential difference)

**Example:** A 12V battery means the potential difference between its terminals is 12 volts — it can do 12 joules of work per coulomb of charge.

> **◐ In simple terms · Why Birds Don't Get Shocked**
>
> A bird on a power line has both feet at (nearly) the **same potential**!
>
> $$V_A - V_B \approx 0 \implies W = 0$$
>
> No potential difference → no current → no shock!
>
> But if the bird touches **two wires** or touches the wire and ground — huge potential difference → electrocution!
>
> Same reason you can touch one terminal of a battery safely, but touching both simultaneously with wet hands is dangerous.

---

## Relation Between Electric Field and Potential

Electric field is the **negative gradient** of potential:

$$\boxed{\vec{E} = -\nabla V}$$

In 1D (say, along x-axis):

$$\boxed{E = -\frac{dV}{dx}}$$

Or equivalently:

$$\boxed{V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}}$$

### Interactive Demo: Visualize Electric Field and Potential

Explore how electric field lines relate to equipotential surfaces.

**Physical meaning:**

- Field points from **high potential to low potential**
- Steeper potential change → stronger electric field
- Constant potential (plateau) → zero field

> **★ Key point · Think Mountain Hiking**
>
> **Potential = Height of mountain**
>
> **Field = Steepness of slope**
>
> - Steep cliff (large $E$) → rapid potential drop

> - Flat plateau ($E = 0$) → constant potential

> - Water flows downhill (high to low potential)
>
> In **Pushpa 2**, when characters stand on a cliff — height difference is like potential difference, steepness is like electric field!

---

## Potential Due to Multiple Charges (Superposition)

Since potential is a **scalar**, we can simply **add** potentials due to individual charges:

$$\boxed{V = V_1 + V_2 + V_3 + ... = \sum_{i=1}^n k\frac{q_i}{r_i}}$$

**Much easier than adding vector fields!**

**Example:** For two charges $q_1$ and $q_2$ at distances $r_1$ and $r_2$ from point P:

$$V_P = k\frac{q_1}{r_1} + k\frac{q_2}{r_2}$$

(No vector addition, no components — just arithmetic!)

---

## Potential Due to Special Charge Distributions

### 1. Electric Dipole

For a dipole with moment $\vec{p}$, at distance $r$ making angle $\theta$ with dipole axis:

$$\boxed{V = \frac{kp\cos\theta}{r^2}}$$

**Special cases:**

- On axis ($\theta = 0°$): $V = \frac{kp}{r^2}$
- On equatorial line ($\theta = 90°$): $V = 0$

### 2. Uniformly Charged Ring

Ring of radius $R$ with total charge $Q$, at distance $x$ on axis:

$$\boxed{V = \frac{kQ}{\sqrt{R^2 + x^2}}}$$

**Special cases:**

- At center ($x = 0$): $V = \frac{kQ}{R}$
- Far away ($x >> R$): $V \approx \frac{kQ}{x}$ (point charge)

### 3. Uniformly Charged Disk

Disk of radius $R$ with surface charge density $\sigma$, at distance $x$ on axis:

$$V = \frac{\sigma}{2\varepsilon_0}\left(\sqrt{R^2 + x^2} - x\right)$$

### 4. Uniformly Charged Spherical Shell (radius $R$, charge $Q$)

**Outside** ($r \geq R$):

$$V = k\frac{Q}{r}$$

**On surface** ($r = R$):

$$V = k\frac{Q}{R}$$

**Inside** ($r < R$):

$$\boxed{V = k\frac{Q}{R} = \text{constant}}$$

**Key point:** Potential is **constant inside** (but not zero!)

Since $E = -\frac{dV}{dr}$ and $V$ is constant inside, $E = 0$ inside (consistent with Gauss’s Law).

### 5. Uniformly Charged Solid Sphere (radius $R$, charge $Q$)

**Outside** ($r \geq R$):

$$V = k\frac{Q}{r}$$

**Inside** ($r < R$):

$$\boxed{V = \frac{kQ}{2R^3}(3R^2 - r^2)}$$

**At center** ($r = 0$):

$$V_{center} = \frac{3kQ}{2R}$$

---

## Equipotential Surfaces

> **★ Key point · Equipotential Surface Definition**
>
> An **equipotential surface** is a surface where all points have the **same electric potential**.

**Properties:**

1. **No work** to move a charge along an equipotential surface

   $$W = q(V_B - V_A) = 0 \quad (\text{if } V_B = V_A)$$
2. **Electric field is perpendicular** to equipotential surfaces

   - Field is along direction of steepest potential decrease
   - Along equipotential, potential doesn’t change → field must be perpendicular
3. **Field lines** and equipotential surfaces are always **orthogonal** (at 90°)
4. **Closer surfaces** → stronger field (rapid potential change)
5. **Conductors** in electrostatic equilibrium are equipotential volumes

   - Entire conductor at same potential
   - Surface is an equipotential

> **◐ In simple terms · Visualizing Equipotentials**
>
> Think of **topographic maps** used in hiking:
>
> - Contour lines = equipotential surfaces

> - Closer contours = steeper terrain = stronger field

> - Water flows perpendicular to contours (like field lines perpendicular to equipotentials)
>
> In **Interstellar**, when they show topographic maps of planets — same concept!

---

## Equipotential Surfaces for Common Configurations

| Charge Distribution | Equipotential Surfaces |
| --- | --- |
| Point charge | Concentric spheres centered at charge |
| Infinite line charge | Concentric cylinders around line |
| Infinite plane sheet | Parallel planes to the sheet |
| Electric dipole | Complex 3D surfaces (figure-8 shape near dipole) |
| Uniform field | Equally spaced parallel planes perpendicular to field |
| Conductor | Surface of conductor (entire conductor at same potential) |

---

## Electric Potential Energy

> **★ Key point · Potential Energy Definition**
>
> The **electric potential energy** of a charge $q$ at a point where potential is $V$:

$$\boxed{U = qV}$$

**For a system of two point charges** $q_1$ and $q_2$ at distance $r$:

$$\boxed{U = k\frac{q_1 q_2}{r}}$$

**Sign convention:**

- Same signs ($q_1 q_2 > 0$): $U > 0$ (repulsion, positive energy)
- Opposite signs ($q_1 q_2 < 0$): $U < 0$ (attraction, negative energy)

**Reference:** $U = 0$ when charges are at **infinite separation**

---

## Potential Energy of a System of Charges

For a system of $n$ charges, the total potential energy is:

$$\boxed{U = k\sum_{iSum over all **pairs** of charges.

**Example: Three charges**

For charges $q_1$, $q_2$, $q_3$:

$$U = k\left[\frac{q_1 q_2}{r_{12}} + \frac{q_1 q_3}{r_{13}} + \frac{q_2 q_3}{r_{23}}\right]$$

(3 pairs: 1-2, 1-3, 2-3)

> **⚠ Trap · Common Mistake**
>
> **Wrong:** Add $U = q_1 V_1 + q_2 V_2 + q_3 V_3$
>
> This **double counts** each pair!
>
> **Correct:** Use pairwise formula: $U = \sum_{i
>
> Or: $U = \frac{1}{2}\sum_{i=1}^n q_i V_i$ (where $V_i$ is potential at $q_i$ due to **other** charges)

---

## Work-Energy Theorem in Electrostatics

**Work done by electric field** on charge $q$ moving from A to B:

$$W_{field} = q(V_A - V_B)$$

**Work done by external agent** (against field):

$$W_{external} = q(V_B - V_A) = -W_{field}$$

**Change in kinetic energy:**

$$\Delta KE = W_{field} = q(V_A - V_B)$$

**Conservation of energy:**

$$KE_A + U_A = KE_B + U_B$$

$$\frac{1}{2}mv_A^2 + qV_A = \frac{1}{2}mv_B^2 + qV_B$$

---

## Electron Volt (eV)

> **◐ In simple terms · Electron Volt Definition**
>
> **1 electron volt (eV)** = kinetic energy gained by an electron when accelerated through a potential difference of 1 volt.

$$1 \text{ eV} = 1.6 \times 10^{-19} \text{ J}$$

**Useful for atomic and nuclear physics** where energies are tiny!

**Examples:**

- Ionization energy of hydrogen: 13.6 eV
- Rest mass energy of electron: $m_e c^2 = 0.511$ MeV
- Energy per photon (visible light): ~2 eV

**Conversion:**

If electron accelerates through potential $V$:

$$KE = eV = 1.6 \times 10^{-19} \times V \text{ joules}$$

Or simply: $KE = V$ eV

---

## Memory Tricks & Patterns

### Mnemonic for Potential Formulas

**“Voltage is K-Q-over-R”** → $V = k\frac{Q}{r}$

**“U equals Q-V”** → $U = qV$

**“Energy is K-Q-Q-over-R”** → $U = k\frac{q_1 q_2}{r}$

### Pattern Recognition

> **★ Key point · JEE High-Yield Pattern: r-Dependence**
>
> | Quantity | Point Charge | Dipole |

> | --- | --- | --- |

> | Field $E$ | $\frac{1}{r^2}$ | $\frac{1}{r^3}$ |

> | Potential $V$ | $\frac{1}{r}$ | $\frac{1}{r^2}$ |
>
> **Rule:** Potential always has **one less power of r** than field!
>
> This is because $E = -\frac{dV}{dr}$ (derivative reduces power by 1)

---

## When to Use Potential vs Field

> **★ Key point · Decision Tree**
>
> **Use Electric Potential when:**
>
> - Asked about energy, work, or voltage

> - Multiple charges (scalar addition is easier!)

> - Need to find field later using $E = -\frac{dV}{dr}$

> - Given equipotential surfaces
>
> **Use Electric Field when:**
>
> - Asked about force or acceleration

> - Need direction of force

> - Using Gauss’s Law (symmetric problems)

> - Field line visualization

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Potential vs Potential Energy**
>
> **Wrong:** “Potential and potential energy are the same”
>
> **Correct:**
>
> - Potential $V$ = energy **per unit charge** (property of space)

> - Potential energy $U = qV$ = energy of a **specific charge** at that point
>
> $$V = \frac{U}{q}$$

> **⚠ Trap #2: Sign of Work**
>
> **Wrong:** “Positive charge moves to higher potential, gaining energy”
>
> **Correct:**
>
> - Positive charge **naturally** moves to **lower** potential (loses PE, gains KE)

> - To move to **higher** potential requires **external work**
>
> Same as ball rolling downhill vs lifting it uphill!

> **⚠ Trap #3: Potential Inside Shell**
>
> **Wrong:** “Field inside shell is zero, so potential is zero”
>
> **Correct:**
>
> - Field inside = 0 (true!)

> - Potential inside = $k\frac{Q}{R}$ = **constant** (not zero!)
>
> $E = 0$ means $\frac{dV}{dr} = 0$ (constant), not $V = 0$

> **⚠ Trap #4: Equipotential Confusion**
>
> **Wrong:** “No field on equipotential surface”
>
> **Correct:**
>
> - No **work** along equipotential ($\vec{E}$ perpendicular to motion)

> - Field **exists** but is perpendicular to surface
>
> Zero work ≠ zero field!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Find the potential at a distance of 9 cm from a charge of $+5$ μC.
>
> **Solution:**
>
> $$V = k\frac{Q}{r} = 9 \times 10^9 \times \frac{5 \times 10^{-6}}{0.09}$$

$$V = 9 \times 10^9 \times \frac{5 \times 10^{-6}}{9 \times 10^{-2}} = 5 \times 10^5 \text{ V}$$

$$\boxed{V = 5 \times 10^5 \text{ V} = 500 \text{ kV}}$$

> **↗ Connection · Problem 1.2**
>
> An electron is accelerated from rest through a potential difference of 100 V. Find its final kinetic energy in eV and joules.
>
> **Solution:**
>
> **In eV:**
>
> $$KE = eV = 100 \text{ eV}$$
>
> **In joules:**
>
> $$KE = 100 \times 1.6 \times 10^{-19} = 1.6 \times 10^{-17} \text{ J}$$

$$\boxed{KE = 100 \text{ eV} = 1.6 \times 10^{-17} \text{ J}}$$

> **↗ Connection · Problem 1.3**
>
> Two charges $+3$ μC and $+5$ μC are placed at $(0, 0)$ and $(4, 0)$ m. Find potential at $(4, 3)$ m.
>
> **Solution:**
>
> Distance from $q_1 = 3$ μC at origin to point $(4, 3)$:
>
> $$r_1 = \sqrt{4^2 + 3^2} = 5 \text{ m}$$
>
> Distance from $q_2 = 5$ μC at $(4, 0)$ to point $(4, 3)$:
>
> $$r_2 = 3 \text{ m}$$

$$V = k\frac{q_1}{r_1} + k\frac{q_2}{r_2} = 9 \times 10^9 \left[\frac{3 \times 10^{-6}}{5} + \frac{5 \times 10^{-6}}{3}\right]$$

$$V = 9 \times 10^3 \left[\frac{3}{5} + \frac{5}{3}\right] = 9 \times 10^3 \left[\frac{9 + 25}{15}\right]$$

$$V = 9 \times 10^3 \times \frac{34}{15} = 20.4 \times 10^3 \text{ V}$$

$$\boxed{V = 20.4 \text{ kV}}$$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A hollow metal sphere of radius 10 cm is charged to 100 V. Find the potential at (a) the center, (b) the surface, (c) 20 cm from center.
>
> **Solution:**
>
> **(a) At center ($r = 0$):**
>
> Inside a spherical shell, potential is constant:
>
> $$\boxed{V_{center} = 100 \text{ V}}$$
>
> **(b) At surface ($r = R = 10$ cm):**
>
> $$\boxed{V_{surface} = 100 \text{ V}}$$
>
> (Given)
>
> **(c) At $r = 20$ cm (outside):**
>
> Outside: $V = k\frac{Q}{r}$
>
> At surface: $V_R = k\frac{Q}{R} = 100$ V
>
> So, $kQ = 100R = 100 \times 0.1 = 10$ V·m
>
> At $r = 0.2$ m:
>
> $$V = \frac{10}{0.2} = 50 \text{ V}$$

$$\boxed{V = 50 \text{ V}}$$

> **↗ Connection · Problem 2.2**
>
> Find the work done to bring three charges $q$, $q$, and $-q$ from infinity to the vertices of an equilateral triangle of side $a$.
>
> **Solution:**
>
> **Step-by-step assembly:**
>
> 1. Bring first $q$: $W_1 = 0$ (no other charges present)

> 2. Bring second $q$ to distance $a$ from first:
>
>    $$W_2 = k\frac{q \cdot q}{a} = \frac{kq^2}{a}$$

> 3. Bring third $-q$:
>
>    - Potential due to first two charges at third vertex:

>      $$V = k\frac{q}{a} + k\frac{q}{a} = \frac{2kq}{a}$$

>    - Work: $W_3 = (-q) \times V = -q \times \frac{2kq}{a} = -\frac{2kq^2}{a}$
>
> **Total work:**
>
> $$W = W_1 + W_2 + W_3 = 0 + \frac{kq^2}{a} - \frac{2kq^2}{a}$$

$$\boxed{W = -\frac{kq^2}{a}}$$
>
> (Negative work means system **releases energy** — it’s bound!)

> **↗ Connection · Problem 2.3**
>
> A uniform electric field $E = 1000$ V/m points in the +x direction. Find the potential difference between points $(0, 0, 0)$ and $(1, 0, 0)$ m.
>
> **Solution:**
>
> For uniform field:
>
> $$V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$$

$$V(1,0,0) - V(0,0,0) = -\int_0^1 E \, dx = -E \times 1$$

$$V_B - V_A = -1000 \text{ V}$$

$$\boxed{\Delta V = -1000 \text{ V}}$$
>
> (Moving in direction of field → potential decreases)

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> Four charges $q$, $-q$, $q$, $-q$ are placed at the corners of a square of side $a$ in order. Find the work to bring a fifth charge $Q$ from infinity to the center.
>
> **Solution:**
>
> **Potential at center due to four charges:**
>
> Distance from each corner to center: $r = \frac{a}{\sqrt{2}}$
>
> $$V_{center} = \sum k\frac{q_i}{r} = k\frac{1}{a/\sqrt{2}}\left[q + (-q) + q + (-q)\right]$$

$$V_{center} = \frac{k\sqrt{2}}{a} \times 0 = 0$$
>
> **Work to bring $Q$:**
>
> $$W = Q \times V_{center} = Q \times 0$$

$$\boxed{W = 0}$$
>
> **Key insight:** Alternating charges create zero net potential at center!

> **↗ Connection · Problem 3.2**
>
> A non-uniform electric field $\vec{E} = (200x)\hat{i}$ V/m exists in a region. Find the potential difference between origin and point $(2, 0, 0)$ m.
>
> **Solution:**
>
> $$V(2,0,0) - V(0,0,0) = -\int_0^2 \vec{E} \cdot d\vec{l}$$

$$= -\int_0^2 200x \, dx = -200 \left[\frac{x^2}{2}\right]_0^2$$

$$= -200 \times 2 = -400 \text{ V}$$

$$\boxed{\Delta V = -400 \text{ V}}$$

> **↗ Connection · Problem 3.3**
>
> An electric dipole with charges $\pm 10$ μC separated by 2 mm is placed at the origin along the y-axis (positive charge at +y). Find the potential at point $(3, 4)$ cm.
>
> **Solution:**
>
> Dipole moment: $p = q \times 2a = 10 \times 10^{-6} \times 2 \times 10^{-3} = 2 \times 10^{-8}$ C·m
>
> Point $(3, 4)$ cm = $(0.03, 0.04)$ m
>
> Distance: $r = \sqrt{0.03^2 + 0.04^2} = 0.05$ m = 5 cm
>
> Angle with dipole axis (y-axis):
>
> $$\cos\theta = \frac{y}{r} = \frac{0.04}{0.05} = 0.8$$

$$V = \frac{kp\cos\theta}{r^2} = \frac{9 \times 10^9 \times 2 \times 10^{-8} \times 0.8}{(0.05)^2}$$

$$V = \frac{144}{2.5 \times 10^{-3}} = 57.6 \times 10^3 \text{ V}$$

$$\boxed{V = 57.6 \text{ kV}}$$

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| Electric potential | $V = \frac{W}{q_0}$ (work per unit charge from ∞) |
| Point charge potential | $V = k\frac{Q}{r}$ |
| Potential difference | $V_A - V_B = -\int_B^A \vec{E} \cdot d\vec{l}$ |
| Field from potential | $\vec{E} = -\nabla V$ or $E = -\frac{dV}{dr}$ |
| Superposition | $V = \sum k\frac{q_i}{r_i}$ (scalar sum) |
| Potential energy | $U = qV$ or $U = k\frac{q_1 q_2}{r}$ |
| System energy | $U = \sum_{i |
| Work by field | $W = q(V_A - V_B)$ |
| Equipotential | $V =$ constant, $\vec{E} \perp$ surface |
| Conductor | Entire volume at same potential |
| Inside shell | $V = k\frac{Q}{R}$ (constant) |
| Electron volt | 1 eV = $1.6 \times 10^{-19}$ J |

**JEE Weightage:** 2-3 questions in JEE Main, 1-2 in JEE Advanced (often with capacitors or energy)

**Time-Saver:** Use potential (scalar) instead of field (vector) when possible — much easier to add!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Potential is scalar** — much easier to work with than vector field

> 2. **Potential difference drives current** — voltage, not absolute potential, matters

> 3. **Field points from high to low potential** — like water flowing downhill

> 4. **Equipotentials are perpendicular to field lines** — fundamental relationship

> 5. **Conductor is equipotential** — field inside = 0, potential = constant
>
> **“Potential is the landscape of energy. Charges naturally ‘roll downhill’ from high to low potential, just like water flows from mountains to valleys.”**

---

## Related Topics

### Within Electrostatics

- [Electric Field](../electric-field/index.md) — Field creates potential
- [Electric Charges](../electric-charges/index.md) — Point charge potential
- [Gauss’s Law](../gauss-law/index.md) — Field calculations for potential
- [Capacitors](../capacitors/index.md) — Storing charge and energy using potential difference

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) — Potential difference drives current
- [Work-Energy-Power](../../work-energy-power/index.md) — Energy conservation
- [Magnetism](../../magnetism/index.md) — Magnetic potential (analogous concept)

### Math Connections

- [Calculus](../../../mathematics/limits-continuity-differentiability/index.md) — Gradient, line integrals
- [Vectors](../../../mathematics/vector-algebra/index.md) — Gradient operator
- [Differential Equations](../../../mathematics/differential-equations/index.md) — Laplace’s equation

---

From TestGuru · our mock-test platform

## You've read Electric Potential and Potential Energy.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electrostatics&tg_exam=jee-main&tg_page=%2Fphysics%2Felectrostatics%2Felectric-potential%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electrostatics/electric-potential/",this.page.identifier="/physics/electrostatics/electric-potential/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="electricField" id="anim-electricField-1795396423416729816"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-electricField-1795396423416729816")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electrostatics/electric-potential/](https://jeenotes.in/physics/electrostatics/electric-potential/) · raw HTML: `offline/physics/electrostatics/electric-potential/index.html`_
