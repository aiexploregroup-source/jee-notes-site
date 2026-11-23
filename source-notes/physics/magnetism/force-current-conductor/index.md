---
title: "Force on Current-Carrying Conductors: Electromagnetism in Action"
source: "https://jeenotes.in/physics/magnetism/force-current-conductor/"
description: "Master forces between current-carrying conductors, torque on coils, and electromagnetic applications for JEE"
updated: "2026-10-18"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 9"
html: "../../../../offline/physics/magnetism/force-current-conductor/index.html"
extracted: "2026-11-23"
---

> Master forces between current-carrying conductors, torque on coils, and electromagnetic applications for JEE

# Force on Current-Carrying Conductors: Electromagnetism in Action

## Movie Hook: Iron Man’s Repulsor Technology

In Iron Man, Tony Stark’s repulsor beams use electromagnetic forces to push and pull objects. While Hollywood takes creative liberty, the real physics is equally impressive! When electric currents flow through conductors in magnetic fields, they experience forces - the same principle behind electric motors, maglev trains, and loudspeakers. Master this, and you’ll understand how we convert electrical energy into mechanical motion!

## The Big Picture

**What’s the Deal?**

- Current-carrying wires in magnetic fields experience forces
- This is the basis for electric motors and generators
- Parallel wires carrying currents attract or repel each other
- Torque on current loops is how galvanometers work

**JEE Perspective:**

- JEE Main: Force on straight wires, parallel conductors, rectangular loops
- JEE Advanced: Torque calculations, work done, non-uniform fields, complex geometries

---

## Core Concept: Force on Current Element

### The Fundamental Law

A current element $I\,d\vec{l}$ in magnetic field $\vec{B}$ experiences force:

$$\boxed{d\vec{F} = I\,d\vec{l} \times \vec{B}}$$

**Magnitude:**

$$\boxed{dF = I\,dl\,B\sin\theta}$$

where $\theta$ is the angle between current direction and magnetic field

**For straight conductor of length L:**

$$\boxed{\vec{F} = I\vec{L} \times \vec{B}}$$

**Magnitude:**

$$\boxed{F = BIL\sin\theta}$$

**Maximum force:** When current ⊥ field (θ = 90°): $F_{\max} = BIL$

**Direction:** Right-hand rule

- Fingers: Current direction (I)
- Bend toward: Magnetic field (B)
- Thumb: Force direction (F)

**Memory Trick: “FBI - Force, B-field, I-current”**

- Point fingers along **I**
- Bend into **B**
- Thumb shows **F**

**Alternative — Fleming’s left-hand rule:** Stretch the first finger, middle finger, and thumb of your left hand mutually perpendicular. First finger = B (field), middle finger = I (current), thumb = F (force).

---

## Understanding the Force: Microscopic View

**Why does wire experience force?**

Current = Flow of charges with drift velocity $v_d$

**Number of charge carriers in length L:**

$$N = nAL$$

where n = number density, A = cross-sectional area

**Force on each charge:**

$$f = qv_dB$$

**Total force:**

$$F = Nf = (nAL)(qv_dB)$$

Since current $I = nAqv_d$:

$$\boxed{F = BIL}$$

**Key Insight:** Macroscopic force on wire = Sum of microscopic forces on all moving charges!

---

## Standard Configurations

### 1. Straight Wire in Uniform Field

**Setup:** Wire of length L carrying current I perpendicular to field B

**Force:**

$$\boxed{F = BIL}$$

**Direction:** Perpendicular to both I and B (right-hand rule)

**Applications:**

- DC motors (force on armature wires)
- Electromagnetic railguns
- Loudspeaker coils

### 2. Two Parallel Conductors

**Setup:** Two long parallel wires separated by distance d, carrying currents I₁ and I₂

**Magnetic field from wire 1 at wire 2:**

$$B_1 = \frac{\mu_0 I_1}{2\pi d}$$

**Force on length L of wire 2:**

$$\boxed{F = \frac{\mu_0 I_1 I_2 L}{2\pi d}}$$

**Force per unit length:**

$$\boxed{\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}}$$

**Direction:**

- **Same direction currents:** Attract (force inward)
- **Opposite direction currents:** Repel (force outward)

**Memory Trick: “Same currents are friends - they ATTRACT!”**

### Interactive Demo: Forces Between Conductors

Watch how parallel conductors attract or repel based on current direction.

**Definition of Ampere (SI unit):**
The ampere is defined such that two parallel conductors 1 meter apart, each carrying 1 ampere, experience a force of exactly $2 \times 10^{-7}$ N per meter.

$$\frac{F}{L} = \frac{4\pi \times 10^{-7} \times 1 \times 1}{2\pi \times 1} = 2 \times 10^{-7} \text{ N/m}$$

### 3. Rectangular Loop in Magnetic Field

**Setup:** Rectangular loop (sides a × b) in uniform field B, current I

**Forces on each side:**

- Two sides parallel to B: $F = 0$ (θ = 0°)
- Two sides perpendicular to B: $F = BIa$ (opposite directions)

**Net force:** Zero (forces cancel)

**BUT&mldr; there’s a TORQUE!**

$$\boxed{\tau = BINA\sin\theta}$$

where:

- N = number of turns
- A = area of loop
- θ = angle between normal to loop and B

**For single turn:** $\tau = BIA\sin\theta$

**Maximum torque:** When loop plane is parallel to B (θ = 90°)

$$\tau_{\max} = BIA$$

**Stable equilibrium:** When loop plane is perpendicular to B (θ = 0°)

### 4. Circular Loop in Uniform Field

**Same torque equation:**

$$\boxed{\tau = BINA\sin\theta}$$

where $A = \pi r^2$ for radius r

**Special property:** Torque is same at all orientations for given θ!

---

## Magnetic Dipole Moment

**Definition:**

$$\boxed{\vec{M} = NI\vec{A}}$$

where $\vec{A}$ is area vector (perpendicular to plane, right-hand rule for current)

**Magnitude:** $M = NIA$

**Torque in terms of dipole moment:**

$$\boxed{\vec{\tau} = \vec{M} \times \vec{B}}$$

**Magnitude:** $\tau = MB\sin\theta$

**Potential energy:**

$$\boxed{U = -\vec{M} \cdot \vec{B} = -MB\cos\theta}$$

**Energy configurations:**

- **Minimum U:** θ = 0° (stable, M ∥ B)
- **Maximum U:** θ = 180° (unstable, M anti-parallel B)

**Work done to rotate from θ₁ to θ₂:**

$$\boxed{W = MB(\cos\theta_1 - \cos\theta_2)}$$

**Memory Trick: “Magnetic dipole acts like electric dipole in E-field!”**

- Electric: $\tau = pE\sin\theta$, $U = -pE\cos\theta$
- Magnetic: $\tau = MB\sin\theta$, $U = -MB\cos\theta$

---

## Interactive Demo: Forces Between Wires

```python
import numpy as np
import matplotlib.pyplot as plt

def force_per_length(I1, I2, d):
    """
    Force per unit length between parallel wires
    I1, I2: currents (A)
    d: separation (m)
    Returns: Force per meter (N/m)
    """
    mu_0 = 4 * np.pi * 1e-7
    return (mu_0 * I1 * I2) / (2 * np.pi * d)

# Explore how force varies with distance
distances = np.linspace(0.01, 0.5, 100)  # 1 cm to 50 cm
I1 = 10  # Amperes
I2 = 10  # Amperes

forces = force_per_length(I1, I2, distances)

plt.figure(figsize=(12, 5))

# Plot 1: Force vs Distance
plt.subplot(1, 2, 1)
plt.plot(distances * 100, forces * 1e3, linewidth=2.5, color='darkred')
plt.xlabel('Distance (cm)', fontsize=12)
plt.ylabel('Force per meter (mN/m)', fontsize=12)
plt.title(f'Force Between Parallel Wires (I₁=I₂={I1}A)', fontsize=13, fontweight='bold')
plt.grid(True, alpha=0.3)
plt.axhline(y=0, color='k', linewidth=0.5)

# Annotations
plt.annotate('Force ∝ 1/d', xy=(25, forces[50]*1e3), fontsize=11,
            bbox=dict(boxstyle='round', facecolor='yellow', alpha=0.7))

# Plot 2: Force vs Current (at fixed distance)
plt.subplot(1, 2, 2)
d_fixed = 0.1  # 10 cm
currents = np.linspace(1, 20, 100)
forces_I = force_per_length(currents, currents, d_fixed)

plt.plot(currents, forces_I * 1e3, linewidth=2.5, color='darkblue')
plt.xlabel('Current in each wire (A)', fontsize=12)
plt.ylabel('Force per meter (mN/m)', fontsize=12)
plt.title(f'Force vs Current (d={d_fixed*100}cm)', fontsize=13, fontweight='bold')
plt.grid(True, alpha=0.3)

plt.annotate('Force ∝ I²', xy=(10, forces_I[50]*1e3), fontsize=11,
            bbox=dict(boxstyle='round', facecolor='lightblue', alpha=0.7))

plt.tight_layout()
plt.show()

# Calculate some specific values
print("Example Calculations:")
print(f"At d=5cm, I=10A each: F/L = {force_per_length(10, 10, 0.05)*1e3:.3f} mN/m")
print(f"At d=10cm, I=10A each: F/L = {force_per_length(10, 10, 0.10)*1e3:.3f} mN/m")
print(f"At d=1m, I=1A each: F/L = {force_per_length(1, 1, 1)*1e7:.3f} × 10⁻⁷ N/m")
print(f"(Should be 2×10⁻⁷ N/m for SI definition): {2e-7} N/m ✓")
```

**Observe:** Force decreases with distance (∝ 1/d) and increases with current product (∝ I₁I₂)

---

## Applications: Real-World Devices

### 1. Moving Coil Galvanometer

**Principle:** Torque on current-carrying coil in magnetic field

**Components:**

- Coil of N turns, area A
- Radial magnetic field B (uniform)
- Restoring spring with constant k

**Torque due to magnetic field:**

$$\tau_B = NIBA$$

**Restoring torque from spring:**

$$\tau_s = k\theta$$

**At equilibrium:**

$$NIBA = k\theta$$

$$\boxed{\theta = \frac{NIBA}{k} = \frac{NAB}{k} \cdot I}$$

**Current sensitivity:**

$$\boxed{S_I = \frac{\theta}{I} = \frac{NAB}{k}}$$

**To increase sensitivity:**

- Increase N (more turns)
- Increase A (larger coil area)
- Increase B (stronger magnet)
- Decrease k (weaker spring)

### 2. Conversion to Ammeter

**Problem:** Galvanometer has small current capacity (typically μA to mA)

**Solution:** Connect low-resistance **shunt** in parallel

**Shunt resistance:**

$$\boxed{S = \frac{I_g G}{I - I_g}}$$

where:

- I_g = full-scale deflection current of galvanometer
- G = galvanometer resistance
- I = desired full-scale current

**Key:** Shunt carries most of the current, galvanometer carries small fraction

### 3. Conversion to Voltmeter

**Solution:** Connect high resistance in **series**

**Series resistance:**

$$\boxed{R = \frac{V}{I_g} - G}$$

where V is desired full-scale voltage

**Key:** High resistance limits current through galvanometer

### 4. DC Motor

**Principle:** Torque on coil rotates armature

**Components:**

- Armature coil in magnetic field
- Commutator (reverses current every half turn)
- Brushes (maintain electrical contact)

**Torque:** $\tau = NIBA\sin\theta$

**Commutator ensures:** Torque always in same direction (continuous rotation)

**Power:** $P = \tau \omega = (BIA)I\omega$

---

## Common JEE Mistakes (Avoid These!)

### Mistake 1: Wrong Direction (Right-Hand Rule)

**Wrong:** Force is along current direction
**Right:** Force is perpendicular to BOTH current and field (use FBI rule!)

### Mistake 2: Confusing Attraction/Repulsion

**Wrong:** Opposite currents attract
**Right:** SAME direction currents attract, OPPOSITE currents repel!

### Mistake 3: Force on Bent Wire

**Wrong:** Calculating force for each segment separately
**Right:** Effective length is straight-line distance between ends!

**Example:** Semicircular wire in uniform field

- Effective length = diameter = 2R
- F = BI(2R), not the arc length!

### Mistake 4: Torque at Equilibrium

**Wrong:** Torque is maximum at equilibrium (θ = 0°)
**Right:** Torque is ZERO at equilibrium! Maximum at θ = 90°

### Mistake 5: Magnetic Dipole Energy

**Wrong:** U = MB cos θ (positive)
**Right:** U = -MB cos θ (negative sign is crucial!)

---

## Problem-Solving Strategy: The LIFT Method

**L**ength and current identification
**I**dentify field direction and magnitude
**F**orce direction (right-hand rule)
**T**orque if there’s a moment arm

---

## Practice Problems

### Level 1: JEE Main Foundations

**Problem 1.1:** A wire of length 50 cm carrying a current of 2 A is placed perpendicular to a magnetic field of 0.5 T. Find the force on the wire.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>L = 0.5 m</li><li>I = 2 A</li><li>B = 0.5 T</li><li>θ = 90° (perpendicular)</li></ul><p><strong>Formula:</strong> $F = BIL\sin\theta$</p>$$F = 0.5 \times 2 \times 0.5 \times \sin 90°$$

$$F = 0.5 \times 2 \times 0.5 \times 1 = 0.5 \text{ N}$$<p><strong>Answer:</strong> 0.5 N (perpendicular to both wire and field)</p></details>

**Problem 1.2:** Two parallel wires 10 cm apart carry currents of 5 A each in the same direction. Find the force per unit length between them.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>d = 0.1 m</li><li>I₁ = I₂ = 5 A</li><li>Same direction (attractive)</li></ul><p><strong>Formula:</strong> $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$</p>$$\frac{F}{L} = \frac{4\pi \times 10^{-7} \times 5 \times 5}{2\pi \times 0.1}$$

$$\frac{F}{L} = \frac{100 \times 10^{-7}}{0.2} = 5 \times 10^{-5} \text{ N/m}$$

$$\frac{F}{L} = 50 \text{ μN/m}$$<p><strong>Answer:</strong> 50 μN/m (attractive force)</p></details>

**Problem 1.3:** A rectangular coil of 100 turns, area 0.02 m², carries a current of 0.5 A in a magnetic field of 0.8 T. Find the maximum torque.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>N = 100 turns</li><li>A = 0.02 m²</li><li>I = 0.5 A</li><li>B = 0.8 T</li></ul><p><strong>Maximum torque</strong> (when θ = 90°):</p>$$\tau_{\max} = NIBA$$

$$\tau = 100 \times 0.5 \times 0.8 \times 0.02$$

$$\tau = 0.8 \text{ N}\cdot\text{m}$$<p><strong>Answer:</strong> 0.8 N·m</p></details>

### Level 2: JEE Advanced Application

**Problem 2.1:** A semicircular wire of radius 10 cm carrying 5 A is placed in a uniform field of 0.5 T perpendicular to the plane of the wire. Find the force on the wire.

<details><summary>Solution</summary><p><strong>Key Insight:</strong> For any curved wire in uniform field, effective length is the straight-line distance between end points!</p><p><strong>Given:</strong></p><ul><li>Radius r = 0.1 m</li><li>I = 5 A</li><li>B = 0.5 T</li><li>Perpendicular to plane</li></ul><p><strong>Effective length:</strong> Diameter = 2r = 0.2 m</p><p><strong>Force:</strong></p>$$F = BIL_{\text{eff}} = 0.5 \times 5 \times 0.2$$

$$F = 0.5 \text{ N}$$<p><strong>Direction:</strong> From one end to the other, along the diameter</p><p><strong>Answer:</strong> 0.5 N (along the diameter)</p><p><strong>JEE Trick:</strong> Arc length πr doesn’t matter - only straight-line distance!</p></details>

**Problem 2.2:** A galvanometer has 50 turns, area 10 cm², and experiences a magnetic field of 0.2 T. The spring constant is 10⁻⁴ N·m/rad. Find the current for 30° deflection.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>N = 50</li><li>A = 10 cm² = 10 × 10⁻⁴ m² = 10⁻³ m²</li><li>B = 0.2 T</li><li>k = 10⁻⁴ N·m/rad</li><li>θ = 30° = π/6 rad</li></ul><p><strong>At equilibrium:</strong></p>$$NIBA = k\theta$$

$$I = \frac{k\theta}{NBA}$$

$$I = \frac{10^{-4} \times (\pi/6)}{50 \times 0.2 \times 10^{-3}}$$

$$I = \frac{10^{-4} \times 0.524}{10^{-2}} = \frac{5.24 \times 10^{-5}}{10^{-2}}$$

$$I = 5.24 \times 10^{-3} \text{ A} = 5.24 \text{ mA}$$<p><strong>Answer:</strong> 5.24 mA</p></details>

**Problem 2.3:** A galvanometer of resistance 100 Ω gives full-scale deflection for 1 mA. How would you convert it to: (a) an ammeter of range 0-1 A, (b) a voltmeter of range 0-10 V?

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>G = 100 Ω</li><li>I_g = 1 mA = 10⁻³ A</li></ul><p><strong>(a) Ammeter (0-1 A):</strong></p><p>Need shunt resistance S in parallel:</p>$$S = \frac{I_g G}{I - I_g} = \frac{10^{-3} \times 100}{1 - 10^{-3}}$$

$$S = \frac{0.1}{0.999} = 0.1001 \text{ Ω} \approx 0.1 \text{ Ω}$$<p><strong>Configuration:</strong> 0.1 Ω shunt in parallel with galvanometer</p><p><strong>(b) Voltmeter (0-10 V):</strong></p><p>Need series resistance R:</p>$$R = \frac{V}{I_g} - G = \frac{10}{10^{-3}} - 100$$

$$R = 10,000 - 100 = 9,900 \text{ Ω} = 9.9 \text{ kΩ}$$<p><strong>Configuration:</strong> 9.9 kΩ resistor in series with galvanometer</p><p><strong>Answers:</strong></p><ul><li>(a) Shunt of 0.1 Ω in parallel</li><li>(b) Resistance of 9.9 kΩ in series</li></ul></details>

### Level 3: JEE Advanced Mastery

**Problem 3.1:** Three parallel wires are located at the corners of an equilateral triangle of side 10 cm. Each carries a current of 5 A in the same direction (perpendicular to plane, coming out). Find the force on each wire per unit length.

<details><summary>Solution</summary><p><strong>Setup:</strong> Equilateral triangle, side a = 0.1 m, all currents equal I = 5 A</p><p><strong>Force on wire 1 due to wire 2:</strong></p>$$F_{12} = \frac{\mu_0 I^2}{2\pi a}$$<p>(attractive, toward wire 2)</p><p><strong>Force on wire 1 due to wire 3:</strong></p>$$F_{13} = \frac{\mu_0 I^2}{2\pi a}$$<p>(attractive, toward wire 3)</p><p><strong>Angle between F₁₂ and F₁₃:</strong> 60° (equilateral triangle)</p><p><strong>Magnitude of each force:</strong></p>$$F_{12} = F_{13} = \frac{4\pi \times 10^{-7} \times 25}{2\pi \times 0.1} = \frac{2 \times 10^{-7} \times 25}{0.1} = 5 \times 10^{-5} \text{ N/m}$$<p><strong>Resultant force:</strong></p>$$F_{\text{net}} = \sqrt{F_{12}^2 + F_{13}^2 + 2F_{12}F_{13}\cos 60°}$$

$$F_{\text{net}} = F_{12}\sqrt{1 + 1 + 2 \times 0.5} = F_{12}\sqrt{3}$$

$$F_{\text{net}} = 5 \times 10^{-5} \times \sqrt{3} = 8.66 \times 10^{-5} \text{ N/m}$$<p><strong>Direction:</strong> Toward the centroid of the triangle (bisecting the 60° angle)</p><p><strong>Answer:</strong> $8.66 \times 10^{-5}$ N/m ≈ 87 μN/m toward the centre</p><p><strong>By symmetry:</strong> All three wires experience same magnitude force toward center</p></details>

**Problem 3.2:** A circular coil of radius 5 cm with 20 turns carries a current of 1 A. It is placed in a magnetic field of 0.5 T such that the plane of the coil makes 60° with the field. Find: (a) the torque, (b) work done to rotate it to perpendicular position.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>r = 0.05 m, so A = πr² = π(0.05)² = 7.85 × 10⁻³ m²</li><li>N = 20</li><li>I = 1 A</li><li>B = 0.5 T</li></ul><p><strong>Initial configuration:</strong> Plane makes 60° with B</p><ul><li>This means normal to plane makes 30° with B (complementary angle)</li><li>So θ₁ = 30°</li></ul><p><strong>Final configuration:</strong> Plane perpendicular to B</p><ul><li>Normal parallel to B</li><li>θ₂ = 0°</li></ul><p><strong>(a) Initial torque:</strong></p>$$\tau = NIBA\sin\theta_1$$

$$\tau = 20 \times 1 \times 0.5 \times 7.85 \times 10^{-3} \times \sin 30°$$

$$\tau = 10 \times 7.85 \times 10^{-3} \times 0.5$$

$$\tau = 0.0393 \text{ N}\cdot\text{m} = 39.3 \text{ mN}\cdot\text{m}$$<p><strong>(b) Work done:</strong></p>$$W = MB(\cos\theta_1 - \cos\theta_2)$$<p>where M = NIA = 20 × 1 × 7.85 × 10⁻³ = 0.157 A·m²</p>$$W = 0.157 \times 0.5 \times (\cos 30° - \cos 0°)$$

$$W = 0.0785 \times (0.866 - 1)$$

$$W_{\text{ext}} = MB(\cos\theta_1 - \cos\theta_2) = 0.0785 \times (0.866 - 1) = -0.0105 \text{ J}$$<p><strong>Negative external work</strong> means the field itself does the work: the coil turns toward its stable orientation, so the field does $+10.5$ mJ of work.</p><p><strong>If instead the coil is turned back from θ = 0° to θ = 30° (against the field):</strong></p>$$W_{\text{external}} = MB(\cos 0° - \cos 30°) = +0.0105 \text{ J} = 10.5 \text{ mJ}$$<p><strong>Answers:</strong></p><ul><li>(a) Torque = 39.3 mN·m</li><li>(b) External work = −10.5 mJ (work done by the field = +10.5 mJ)</li></ul></details>

**Problem 3.3:** A conducting rod of length L and mass m is suspended by two flexible wires in a magnetic field B perpendicular to the rod. When current I flows through the rod, it makes angle θ with vertical at equilibrium. Find the current I.

<details><summary>Solution</summary><p><strong>Setup:</strong></p><ul><li>Rod suspended by wires, can swing like a pendulum</li><li>Magnetic force acts horizontally (perpendicular to both I and B)</li><li>At equilibrium: balances component of gravity</li></ul><p><strong>Forces:</strong></p><ul><li>Weight: mg (downward)</li><li>Tension: T (along wires)</li><li>Magnetic force: F = BIL (horizontal)</li></ul><p><strong>At equilibrium angle θ:</strong></p><p><strong>Horizontal component:</strong> $T\sin\theta = BIL$</p><p><strong>Vertical component:</strong> $T\cos\theta = mg$</p><p><strong>Dividing:</strong></p>$$\tan\theta = \frac{BIL}{mg}$$

$$\boxed{I = \frac{mg\tan\theta}{BL}}$$<p><strong>Answer:</strong> $I = \frac{mg\tan\theta}{BL}$</p><p><strong>Physical interpretation:</strong></p><ul><li>Larger current → larger angle (stronger magnetic force)</li><li>Heavier rod → larger current needed for same angle</li><li>Stronger field → smaller current needed</li></ul></details>

---

## Special Case: Effective Length

**Important Theorem:** For any shape of wire in a uniform magnetic field, the force equals the force on a straight wire connecting the end points.

**Mathematical form:**

$$\vec{F} = I\vec{L}_{\text{eff}} \times \vec{B}$$

where $\vec{L}_{\text{eff}}$ is the vector from start to end point.

**Applications:**

- Semicircle: $L_{\text{eff}} = 2r$ (diameter)
- Quarter circle: $L_{\text{eff}} = r\sqrt{2}$ (diagonal)
- Closed loop: $L_{\text{eff}} = 0$, so F = 0!

**JEE Gold:** Closed loop in uniform field has ZERO net force (but can have torque!)

---

## Connections: The Web of Knowledge

### Link to Lorentz Force

- Force on current = Sum of forces on moving charges
- F = BIL derived from F = qvB
- See: [Force on Moving Charge](../force-moving-charge/index.md)

### Link to Electromagnetic Induction

- Moving conductor in B generates EMF (motional EMF)
- Force and EMF are related through power
- See: [Motional EMF](../../electromagnetic-induction/motional-emf/index.md)

### Link to Galvanometer

- Torque on coil is the basis for measurement
- Moving coil galvanometer uses this principle
- See: [Moving Coil Galvanometer](../galvanometer/index.md)

### Link to Electric Motors

- Continuous torque from commutator reversal
- Conversion of electrical to mechanical energy
- See: [DC Motors](../index.md)

---

## Quick Revision: Formula Sheet

| Quantity | Formula | Note |
| --- | --- | --- |
| Force on wire | $F = BIL\sin\theta$ | Max when I ⊥ B |
| Force between wires | $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$ | Attractive if same direction |
| Torque on coil | $\tau = NIBA\sin\theta$ | Max when plane ∥ B |
| Magnetic moment | $M = NIA$ | Current × Area |
| Potential energy | $U = -MB\cos\theta$ | Min when M ∥ B |
| Work done | $W = MB(\cos\theta_1 - \cos\theta_2)$ | Rotation |
| Ammeter shunt | $S = \frac{I_g G}{I - I_g}$ | Parallel, low R |
| Voltmeter series R | $R = \frac{V}{I_g} - G$ | Series, high R |

**Remember:**

- Same currents attract, opposite currents repel
- Effective length for curved wire = straight-line distance
- Closed loop: F = 0, but τ may not be zero!

---

## Exam Strategy

**Pattern Recognition:**

- “Two parallel wires” → Force per unit length formula
- “Coil in magnetic field” → Torque or energy
- “Galvanometer converted to” → Shunt or series resistance

**Time Savers:**

- Right-hand rule: Practice until automatic!
- For bent wires: Use effective length theorem
- Check units: Force in N, torque in N·m

**Common Traps:**

- Direction of current (arrow carefully!)
- Angle confusion: plane vs normal
- Sign of work: who does the work?

---

## Summary: Key Takeaways

1. **Force on Current:** $\vec{F} = I\vec{L} \times \vec{B}$ - perpendicular to both I and B
2. **Parallel Conductors:** Same currents attract ($\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi d}$), opposite repel
3. **Torque on Loop:** $\tau = NIBA\sin\theta$ - maximum when plane parallel to B
4. **Magnetic Dipole:** Moment M = NIA, behaves like electric dipole (U = -MB cos θ)
5. **Galvanometer:** Converts to ammeter (low R shunt) or voltmeter (high R series)
6. **Effective Length:** Force on curved wire = force on straight connector
7. **JEE Pattern:** 50% torque/energy, 30% parallel wires, 20% galvanometer conversion

---

*Last Updated: March 25, 2025*
*Next Topic: [Moving Coil Galvanometer](../galvanometer/index.md)*
*Previous Topic: [Force on Moving Charge](../force-moving-charge/index.md)*

From TestGuru · our mock-test platform

## You've read Force on Current-Carrying Conductors: Electromagnetism in Action.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=magnetism&tg_exam=jee-main&tg_page=%2Fphysics%2Fmagnetism%2Fforce-current-conductor%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/magnetism/force-current-conductor/",this.page.identifier="/physics/magnetism/force-current-conductor/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="magneticField" id="anim-magneticField-1795396423901957330"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-magneticField-1795396423901957330")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/magnetism/force-current-conductor/](https://jeenotes.in/physics/magnetism/force-current-conductor/) · raw HTML: `offline/physics/magnetism/force-current-conductor/index.html`_
