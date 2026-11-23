---
title: "Ampere's Circuital Law: The Elegant Shortcut"
source: "https://jeenotes.in/physics/magnetism/amperes-law/"
description: "Master Ampere's Law for calculating magnetic fields with symmetry - complete guide for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 9"
html: "../../../../offline/physics/magnetism/amperes-law/index.html"
extracted: "2026-11-23"
---

> Master Ampere's Law for calculating magnetic fields with symmetry - complete guide for JEE Main & Advanced

# Ampere’s Circuital Law: The Elegant Shortcut

## Movie Hook: Thor’s Lightning Path

In Thor: Ragnarok, Thor channels lightning through circular paths. The energy flows along closed loops, creating powerful electromagnetic fields. **Ampere’s Circuital Law** works the same way - it relates the magnetic field around a closed loop to the current passing through it. When you have symmetry (like Thor’s circular lightning), Ampere’s Law makes calculations ridiculously easy compared to Biot-Savart!

## The Big Picture

**What’s the Deal?**

- Ampere’s Law is the magnetic equivalent of Gauss’s Law in electrostatics
- Instead of integrating Biot-Savart (painful!), we use symmetry (smart!)
- It’s a SHORTCUT for symmetric current distributions
- Foundation for understanding solenoids, toroids, and transmission lines

**JEE Perspective:**

- JEE Main: Solenoid, toroid, infinite wire, coaxial cables
- JEE Advanced: Non-uniform fields, combinations, conceptual applications

---

## Core Concept: Ampere’s Circuital Law

### The Fundamental Statement

The line integral of magnetic field $\vec{B}$ around any closed loop (Amperian loop) equals $\mu_0$ times the net current enclosed by the loop:

$$\boxed{\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}}$$

**In words:** “The circulation of magnetic field around a closed path equals $\mu_0$ times current threading through the loop”

### When to Use Ampere’s Law?

**Perfect for:**

- Infinite straight wire (cylindrical symmetry)
- Infinite plane of current (planar symmetry)
- Solenoid (translational symmetry)
- Toroid (circular symmetry)
- Coaxial cables

**Not suitable for:**

- Finite wires
- Bent wires
- Points off the symmetry axis
- Complex irregular shapes

**Memory Trick: “SYMM-etry = Ampere’s HYMN”**

**S**traight infinite wires
**Y**ield to Ampere fast
**M**agnetic fields from solenoid
**M**ake problems a blast!

---

## Standard Applications (JEE Gold Mine!)

### 1. Infinite Straight Wire

**Setup:** Current I flows through infinite wire along z-axis

**Amperian Loop:** Circle of radius $r$ centered on wire

**Analysis:**

- By symmetry: $\vec{B}$ is tangential and constant at distance $r$
- $\oint \vec{B} \cdot d\vec{l} = B \oint dl = B(2\pi r)$
- Enclosed current: $I_{\text{enc}} = I$

**Applying Ampere’s Law:**

$$B(2\pi r) = \mu_0 I$$

$$\boxed{B = \frac{\mu_0 I}{2\pi r}}$$

**Direction:** Right-hand thumb rule (thumb = current, fingers = field circles)

**JEE Trick:** This is the FASTEST way to get this result (compare to Biot-Savart integration!)

### 2. Infinite Solenoid

**Setup:** Solenoid with $n$ turns per unit length, carrying current $I$

**Key Insight:** Field is uniform inside, zero outside (ideal solenoid)

**Amperian Loop:** Rectangle with one side inside, one outside

**Analysis:**

- Inside: $\vec{B} \cdot d\vec{l} = BL$ (along length L)
- Outside: $\vec{B} = 0$ (no contribution)
- Perpendicular sides: $\vec{B} \perp d\vec{l}$ (no contribution)
- Enclosed current: $I_{\text{enc}} = nLI$ (n turns per length × L)

**Applying Ampere’s Law:**

$$BL = \mu_0(nL)I$$

$$\boxed{B = \mu_0 n I}$$

**Direction:** Along the axis (use right-hand rule for coils)

### Interactive Demo: Magnetic Fields from Currents

Visualize how magnetic fields form around different current configurations.

**Memory Aid:** “Solenoid field is **n**ice and simple: μ₀**n**I”

**JEE Must-Know:**

- Field is INDEPENDENT of position inside (uniform!)
- Field is ZERO outside (ideal approximation)
- This is the basis for electromagnets

### 3. Toroid

**Setup:** Toroid with N total turns, mean radius $r$, carrying current $I$

**Amperian Loop:** Circle of radius $r$ (at the mean radius)

**Analysis:**

- By symmetry: Field is tangential and constant at radius $r$
- Enclosed current: $I_{\text{enc}} = NI$ (all N turns)

**Applying Ampere’s Law:**

$$B(2\pi r) = \mu_0 NI$$

$$\boxed{B = \frac{\mu_0 N I}{2\pi r}}$$

**Key Points:**

- Field INSIDE toroid: $B = \frac{\mu_0 NI}{2\pi r}$ (varies with $r$)
- Field OUTSIDE toroid: $B = 0$ (no enclosed current)
- Number of turns per unit length: $n = \frac{N}{2\pi r}$, so $B = \mu_0 nI$

**JEE Insight:** Toroid is like a solenoid bent into a circle!

### 4. Infinite Current Sheet

**Setup:** Infinite plane sheet with surface current density $K$ (current per unit width)

**Amperian Loop:** Rectangle perpendicular to sheet

**Result:**

$$\boxed{B = \frac{\mu_0 K}{2}}$$

**Direction:** Parallel to sheet, perpendicular to current direction

**Key Feature:** Field is UNIFORM and independent of distance from sheet!

### 5. Long Cylindrical Wire (Inside and Outside)

**Setup:** Solid cylindrical conductor of radius $R$ carrying current $I$ uniformly distributed

**Outside (r > R):**

- Enclosed current = $I$
- Result: $\boxed{B = \frac{\mu_0 I}{2\pi r}}$ (same as thin wire)

**Inside (r < R):**

- Current density: $J = \frac{I}{\pi R^2}$
- Enclosed current: $I_{\text{enc}} = J \times \pi r^2 = I\frac{r^2}{R^2}$
- Ampere’s Law: $B(2\pi r) = \mu_0 I \frac{r^2}{R^2}$

$$\boxed{B = \frac{\mu_0 I r}{2\pi R^2}}$$

**Key Insight:**

- Inside: $B \propto r$ (linear increase)
- Outside: $B \propto \frac{1}{r}$ (inverse decrease)
- Maximum at surface: $B_{\max} = \frac{\mu_0 I}{2\pi R}$

---

## Interactive Demo: Field Inside vs Outside

```python
import numpy as np
import matplotlib.pyplot as plt

def magnetic_field_cylinder(I, R, r):
    """
    Magnetic field for cylindrical conductor
    I: current (A)
    R: radius of conductor (m)
    r: distance from axis (array or float)
    """
    mu_0 = 4 * np.pi * 1e-7

    # Convert to array for easy calculation
    r = np.asarray(r)

    # Inside (r < R): B = (μ₀Ir)/(2πR²)
    # Outside (r >= R): B = (μ₀I)/(2πr)

    B = np.where(r <= R,
                 (mu_0 * I * r) / (2 * np.pi * R**2),
                 (mu_0 * I) / (2 * np.pi * r))
    return B

# Parameters
I = 100  # Amperes
R = 0.05  # 5 cm radius

# Distance array
r_values = np.linspace(0.001, 0.2, 1000)

# Calculate field
B_values = magnetic_field_cylinder(I, R, r_values)

# Plotting
plt.figure(figsize=(12, 6))
plt.plot(r_values * 100, B_values * 1e3, linewidth=2.5, color='darkblue')
plt.axvline(R * 100, color='red', linestyle='--', linewidth=2, label=f'Surface (r = {R*100} cm)')
plt.xlabel('Distance from Axis (cm)', fontsize=12)
plt.ylabel('Magnetic Field (mT)', fontsize=12)
plt.title('Magnetic Field Inside and Outside Cylindrical Conductor', fontsize=14, fontweight='bold')
plt.grid(True, alpha=0.3)
plt.legend(fontsize=11)

# Mark maximum
B_max = magnetic_field_cylinder(I, R, R)
plt.plot(R * 100, B_max * 1e3, 'ro', markersize=10, label=f'Maximum = {B_max*1e3:.2f} mT')

# Annotations
plt.annotate('Linear increase\n(B ∝ r)', xy=(2, B_values[200]*1e3), fontsize=11,
            bbox=dict(boxstyle='round', facecolor='wheat'))
plt.annotate('Inverse decrease\n(B ∝ 1/r)', xy=(15, B_values[800]*1e3), fontsize=11,
            bbox=dict(boxstyle='round', facecolor='lightblue'))

plt.tight_layout()
plt.show()

print(f"Maximum field at surface: {B_max*1e6:.2f} μT")
print(f"Field at center: 0 T")
print(f"Field at 2R: {magnetic_field_cylinder(I, R, 2*R)*1e6:.2f} μT")
```

**Observe:** The field increases linearly inside, then decreases as 1/r outside!

---

## Common JEE Mistakes (Avoid These Traps!)

### Mistake 1: Wrong Amperian Loop Choice

**Wrong:** Using complicated loops for symmetric problems
**Right:** Choose loop that follows field lines and exploits symmetry

**Example:** For solenoid, use rectangular loop (not circular!)

### Mistake 2: Miscounting Enclosed Current

**Wrong:** Including all current in the conductor
**Right:** Only count current INSIDE the Amperian loop

**Example:** For wire at r < R, enclosed current is $I\frac{r^2}{R^2}$, NOT $I$

### Mistake 3: Assuming Field is Zero Everywhere Outside

**Wrong:** “Outside solenoid, B = 0, so Ampere’s Law fails”
**Right:** For IDEAL infinite solenoid, B = 0 outside (approximation)

### Mistake 4: Wrong Direction

**Wrong:** Field always points along current
**Right:** Use right-hand rule: curl fingers with current, thumb shows field direction

### Mistake 5: Using Ampere’s Law Where Symmetry Doesn’t Exist

**Wrong:** Trying to find field at arbitrary point near finite wire
**Right:** Use Biot-Savart for non-symmetric cases

---

## Comparison: Ampere’s Law vs Biot-Savart Law

| Aspect | Ampere’s Law | Biot-Savart Law |
| --- | --- | --- |
| **Best for** | Symmetric configurations | Any configuration |
| **Calculation** | Algebraic (easy!) | Integration (hard!) |
| **Direct result** | Only with symmetry | Always |
| **Examples** | Solenoid, toroid, infinite wire | Finite wire, loops, arcs |
| **JEE frequency** | Very high (shortcuts!) | Moderate (specific cases) |

**Strategy:** Try Ampere’s Law first; if no symmetry, use Biot-Savart!

---

## Problem-Solving Strategy: The SEAL Method

**S**ymmetry check - Does problem have cylindrical/planar/translational symmetry?
**E**nclose current - Draw Amperian loop to enclose current
**A**pply law - $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$
**L**imit check - Verify answer for limiting cases

---

## Practice Problems

### Level 1: JEE Main Foundations

**Problem 1.1:** A long straight wire carries a current of 10 A. Find the magnetic field at a distance of 5 cm using Ampere’s Law.

<details><summary>Solution</summary><p><strong>Given:</strong> $I = 10$ A, $r = 0.05$ m</p><p><strong>Amperian Loop:</strong> Circle of radius r = 0.05 m</p><p><strong>Ampere’s Law:</strong></p>$$\oint \vec{B} \cdot d\vec{l} = \mu_0 I$$<p>By symmetry, B is constant on the loop:</p>$$B(2\pi r) = \mu_0 I$$

$$B = \frac{\mu_0 I}{2\pi r} = \frac{4\pi \times 10^{-7} \times 10}{2\pi \times 0.05}$$

$$B = \frac{40 \times 10^{-7}}{0.1} = 4 \times 10^{-5} \text{ T} = 40 \text{ μT}$$<p><strong>Answer:</strong> 40 μT (tangential direction by right-hand rule)</p></details>

**Problem 1.2:** A solenoid has 1000 turns per meter and carries a current of 2 A. Find the magnetic field inside.

<details><summary>Solution</summary><p><strong>Given:</strong> $n = 1000$ turns/m, $I = 2$ A</p><p><strong>Formula:</strong> $B = \mu_0 n I$</p>$$B = 4\pi \times 10^{-7} \times 1000 \times 2$$

$$B = 8000\pi \times 10^{-7} = 8\pi \times 10^{-4}$$

$$B = 2.51 \times 10^{-3} \text{ T} = 2.51 \text{ mT}$$<p><strong>Answer:</strong> 2.51 mT (along the axis)</p></details>

**Problem 1.3:** A toroid has 500 turns and mean radius 10 cm. If current is 3 A, find the magnetic field at the mean radius.

<details><summary>Solution</summary><p><strong>Given:</strong> $N = 500$ turns, $r = 0.1$ m, $I = 3$ A</p><p><strong>Formula:</strong> $B = \frac{\mu_0 NI}{2\pi r}$</p>$$B = \frac{4\pi \times 10^{-7} \times 500 \times 3}{2\pi \times 0.1}$$

$$B = \frac{6000 \times 10^{-7}}{0.2} = 3 \times 10^{-3} \text{ T} = 3 \text{ mT}$$<p><strong>Answer:</strong> 3 mT (tangential at mean radius)</p></details>

### Level 2: JEE Advanced Application

**Problem 2.1:** A solid cylindrical conductor of radius 5 cm carries a uniform current of 20 A. Find the magnetic field at: (a) r = 3 cm, (b) r = 5 cm, (c) r = 10 cm.

<details><summary>Solution</summary><p><strong>Given:</strong> $R = 0.05$ m, $I = 20$ A</p><p><strong>(a) At r = 0.03 m (inside):</strong></p>$$B = \frac{\mu_0 I r}{2\pi R^2} = \frac{4\pi \times 10^{-7} \times 20 \times 0.03}{2\pi \times (0.05)^2}$$

$$B = \frac{80 \times 10^{-7} \times 0.03}{2 \times 0.0025} = \frac{2.4 \times 10^{-7}}{0.005}$$

$$B = 4.8 \times 10^{-5} \text{ T} = 48 \text{ μT}$$<p><strong>(b) At r = 0.05 m (surface):</strong></p>$$B = \frac{\mu_0 I}{2\pi R} = \frac{4\pi \times 10^{-7} \times 20}{2\pi \times 0.05}$$

$$B = \frac{80 \times 10^{-7}}{0.1} = 8 \times 10^{-5} \text{ T} = 80 \text{ μT}$$<p><strong>(c) At r = 0.10 m (outside):</strong></p>$$B = \frac{\mu_0 I}{2\pi r} = \frac{4\pi \times 10^{-7} \times 20}{2\pi \times 0.10}$$

$$B = \frac{80 \times 10^{-7}}{0.2} = 4 \times 10^{-5} \text{ T} = 40 \text{ μT}$$<p><strong>Answers:</strong> (a) 48 μT, (b) 80 μT (maximum), (c) 40 μT</p></details>

**Problem 2.2:** Two long parallel wires separated by distance d carry equal currents I in opposite directions. Find the magnetic field at a point midway between them.

<details><summary>Solution</summary><p><strong>Setup:</strong> Wires at x = 0 and x = d, find field at x = d/2</p><p><strong>Field from wire 1 (at x = 0):</strong></p>$$B_1 = \frac{\mu_0 I}{2\pi (d/2)} = \frac{\mu_0 I}{\pi d}$$<p><strong>Direction:</strong> Using right-hand rule (say, into the page at midpoint)</p><p><strong>Field from wire 2 (at x = d):</strong></p>$$B_2 = \frac{\mu_0 I}{2\pi (d/2)} = \frac{\mu_0 I}{\pi d}$$<p><strong>Direction:</strong> Opposite currents mean same field direction at midpoint (also into page)</p><p><strong>Total field:</strong></p>$$B_{\text{net}} = B_1 + B_2 = \frac{\mu_0 I}{\pi d} + \frac{\mu_0 I}{\pi d}$$

$$\boxed{B_{\text{net}} = \frac{2\mu_0 I}{\pi d}}$$<p><strong>Answer:</strong> $\frac{2\mu_0 I}{\pi d}$ (perpendicular to plane of wires)</p><p><strong>Key Insight:</strong> Opposite currents → fields add at midpoint!</p></details>

**Problem 2.3:** A solenoid of length 50 cm has 1000 turns. When 5 A current flows, what is the magnetic field inside? If you want to double the field, what are your options?

<details><summary>Solution</summary><p><strong>Given:</strong> $L = 0.5$ m, $N = 1000$ turns, $I = 5$ A</p><p><strong>Number of turns per unit length:</strong></p>$$n = \frac{N}{L} = \frac{1000}{0.5} = 2000 \text{ turns/m}$$<p><strong>Magnetic field:</strong></p>$$B = \mu_0 n I = 4\pi \times 10^{-7} \times 2000 \times 5$$

$$B = 40000\pi \times 10^{-7} = 4\pi \times 10^{-3} = 12.57 \text{ mT}$$<p><strong>To double the field</strong> (B → 2B):</p><p>Since $B = \mu_0 nI$, we can:</p><ol><li><strong>Double the current:</strong> $I → 2I = 10$ A</li><li><strong>Double turns per length:</strong> $n → 2n$ (add 1000 more turns)</li><li><strong>Halve the length:</strong> $L → L/2$ (compress solenoid to 25 cm)</li></ol><p><strong>Answers:</strong></p><ul><li>Current field: 12.57 mT</li><li>Options to double: (1) I = 10 A, OR (2) N = 2000 turns, OR (3) L = 25 cm</li></ul></details>

### Level 3: JEE Advanced Mastery

**Problem 3.1:** A long hollow cylindrical conductor (inner radius a, outer radius b) carries current I uniformly distributed in the cross-section. Find magnetic field: (a) r < a, (b) a < r < b, (c) r > b.

<details><summary>Solution</summary><p><strong>Current density in conductor:</strong></p>$$J = \frac{I}{\pi(b^2 - a^2)}$$<p><strong>(a) Inside hollow region (r &lt; a):</strong></p><p>No current enclosed by Amperian loop at radius r:</p>$$\boxed{B = 0}$$<p><strong>(b) Within conductor (a &lt; r &lt; b):</strong></p><p>Enclosed current:</p>$$I_{\text{enc}} = J \times \pi(r^2 - a^2) = \frac{I}{\pi(b^2-a^2)} \times \pi(r^2-a^2)$$

$$I_{\text{enc}} = I\frac{r^2-a^2}{b^2-a^2}$$<p>Ampere’s Law:</p>$$B(2\pi r) = \mu_0 I \frac{r^2-a^2}{b^2-a^2}$$

$$\boxed{B = \frac{\mu_0 I(r^2-a^2)}{2\pi r(b^2-a^2)}}$$<p><strong>(c) Outside conductor (r &gt; b):</strong></p><p>All current enclosed:</p>$$B(2\pi r) = \mu_0 I$$

$$\boxed{B = \frac{\mu_0 I}{2\pi r}}$$<p><strong>Answers:</strong></p><ul><li>r &lt; a: B = 0</li><li>a &lt; r &lt; b: $B = \frac{\mu_0 I(r^2-a^2)}{2\pi r(b^2-a^2)}$</li><li>r &gt; b: $B = \frac{\mu_0 I}{2\pi r}$</li></ul></details>

**Problem 3.2:** A coaxial cable has inner conductor (radius a) carrying current I and outer cylindrical shell (inner radius b, outer radius c) carrying return current I in opposite direction. Find the magnetic field in all regions.

<details><summary>Solution</summary><p><strong>Four regions to consider:</strong></p><p><strong>(1) r &lt; a (inside inner conductor):</strong></p><p>Assume uniform current density: $J = \frac{I}{\pi a^2}$</p>$$I_{\text{enc}} = J \times \pi r^2 = I\frac{r^2}{a^2}$$

$$B = \frac{\mu_0 I r}{2\pi a^2}$$<p><strong>(2) a &lt; r &lt; b (between conductors):</strong></p><p>Only inner conductor current enclosed:</p>$$B = \frac{\mu_0 I}{2\pi r}$$<p><strong>(3) b &lt; r &lt; c (inside outer shell):</strong></p><p>Inner current: +I (upward)
Outer current enclosed: $-I\frac{r^2-b^2}{c^2-b^2}$ (downward)</p>$$I_{\text{enc}} = I - I\frac{r^2-b^2}{c^2-b^2} = I\frac{c^2-r^2}{c^2-b^2}$$

$$B = \frac{\mu_0 I(c^2-r^2)}{2\pi r(c^2-b^2)}$$<p><strong>(4) r &gt; c (outside cable):</strong></p><p>Net current = I - I = 0</p>$$B = 0$$<p><strong>Key Insight:</strong> Coaxial cable has ZERO field outside - perfect shielding!</p><p><strong>Answers:</strong></p><ul><li>r &lt; a: $B = \frac{\mu_0 I r}{2\pi a^2}$</li><li>a &lt; r &lt; b: $B = \frac{\mu_0 I}{2\pi r}$</li><li>b &lt; r &lt; c: $B = \frac{\mu_0 I(c^2-r^2)}{2\pi r(c^2-b^2)}$</li><li>r &gt; c: B = 0</li></ul></details>

**Problem 3.3:** A very long solenoid has n turns per unit length and carries current I. A second solenoid with N turns is wound over the first solenoid. Find the mutual inductance if the second solenoid has length l and same cross-sectional area A.

<details><summary>Solution</summary><p><strong>Concept:</strong> Mutual inductance relates flux linkage to current</p><p><strong>Step 1:</strong> Field inside first solenoid:</p>$$B_1 = \mu_0 n I$$<p><strong>Step 2:</strong> Flux through one turn of second solenoid:</p>$$\Phi = B_1 \times A = \mu_0 n I A$$<p><strong>Step 3:</strong> Total flux linkage through N turns:</p>$$\Phi_{\text{total}} = N \times \Phi = N \mu_0 n I A$$<p><strong>Step 4:</strong> Mutual inductance:</p>$$M = \frac{\Phi_{\text{total}}}{I} = N \mu_0 n A$$<p>Since $n$ is turns per unit length and second solenoid has length $l$:</p>$$\boxed{M = \mu_0 n N A = \mu_0 \frac{nN A l}{l}}$$<p>If second solenoid also has n’ turns per length: $N = n' l$</p>$$M = \mu_0 n n' A l$$<p><strong>Answer:</strong> $M = \mu_0 n N A$ (where N is total turns in second coil)</p><p><strong>JEE Insight:</strong> This connects Ampere’s Law to electromagnetic induction!</p></details>

---

## Maxwell’s Correction: The Missing Piece

**Original Ampere’s Law:** $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$

**Problem:** Doesn’t work for charging capacitors (breaks continuity!)

**Maxwell’s Fix:** Add displacement current term

$$\boxed{\oint \vec{B} \cdot d\vec{l} = \mu_0\left(I_{\text{enc}} + \epsilon_0 \frac{d\Phi_E}{dt}\right)}$$

where $\epsilon_0 \frac{d\Phi_E}{dt}$ is the **displacement current**

**JEE Scope:** Mostly conceptual for JEE Advanced

---

## Connections: The Web of Knowledge

### Link to Biot-Savart Law

- Ampere’s Law can be derived from Biot-Savart
- Ampere is easier when symmetry exists
- See: [Biot-Savart Law](../biot-savart-law/index.md)

### Link to Gauss’s Law

- Same mathematical structure: $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0}$
- Symmetry exploitation is identical
- See: [Gauss’s Law](../../electrostatics/gauss-law/index.md)

### Link to Electromagnetic Induction

- Changing B creates E (Faraday’s Law)
- Ampere gives us B from steady currents
- See: [Faraday’s Law](../../electromagnetic-induction/faradays-law/index.md)

### Link to Maxwell’s Equations

- Ampere-Maxwell Law is one of four fundamental equations
- Completes the theory of electromagnetism
- See: [Maxwell’s Equations](../../electromagnetic-waves/index.md)

---

## Quick Revision: Formula Sheet

| Configuration | Magnetic Field | Formula |
| --- | --- | --- |
| Infinite wire | Outside | $B = \frac{\mu_0 I}{2\pi r}$ |
| Solid cylinder | Inside (r < R) | $B = \frac{\mu_0 I r}{2\pi R^2}$ |
| Solid cylinder | Outside (r > R) | $B = \frac{\mu_0 I}{2\pi r}$ |
| Solenoid | Inside | $B = \mu_0 n I$ |
| Solenoid | Outside | $B = 0$ (ideal) |
| Toroid | Inside | $B = \frac{\mu_0 N I}{2\pi r}$ |
| Toroid | Outside | $B = 0$ |
| Current sheet | Both sides | $B = \frac{\mu_0 K}{2}$ |

**Master Equation:** $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$

---

## Exam Strategy

**When to Use Ampere’s Law:**

- If you see “infinite”, “very long”, or “toroid” → Ampere!
- If you can draw a simple Amperian loop → Ampere!
- For quick calculations → Ampere!

**Time Savers:**

- Memorize standard results (solenoid, toroid, wire)
- Check symmetry first (saves 5 minutes!)
- Use limiting cases to verify (r→0, r→∞)

**Red Flags:**

- Finite lengths usually need Biot-Savart
- “At a distance x from end” → probably not Ampere
- Complex shapes → check symmetry carefully

---

## Summary: Key Takeaways

1. **Ampere’s Circuital Law:** $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$ relates circulation to enclosed current
2. **Symmetry is Key:** Only useful when field has cylindrical, planar, or translational symmetry
3. **Standard Results:** Memorize solenoid ($\mu_0 nI$), toroid ($\frac{\mu_0 NI}{2\pi r}$), wire ($\frac{\mu_0 I}{2\pi r}$)
4. **Inside vs Outside:** Field behavior changes at boundaries (linear inside cylinder, inverse outside)
5. **Elegant Shortcut:** Much faster than Biot-Savart for symmetric cases
6. **JEE Pattern:** 80% solenoid/toroid/cylindrical problems, 20% conceptual/comparative

---

*Last Updated: March 18, 2025*
*Next Topic: [Force on Moving Charge](../force-moving-charge/index.md)*
*Previous Topic: [Biot-Savart Law](../biot-savart-law/index.md)*

From TestGuru · our mock-test platform

## You've read Ampere's Circuital Law: The Elegant Shortcut.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=magnetism&tg_exam=jee-main&tg_page=%2Fphysics%2Fmagnetism%2Famperes-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/magnetism/amperes-law/",this.page.identifier="/physics/magnetism/amperes-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="magneticField" id="anim-magneticField-1795396423882179888"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-magneticField-1795396423882179888")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/magnetism/amperes-law/](https://jeenotes.in/physics/magnetism/amperes-law/) · raw HTML: `offline/physics/magnetism/amperes-law/index.html`_
