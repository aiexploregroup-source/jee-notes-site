---
title: "Lorentz Force: When Charges Dance in Magnetic Fields"
source: "https://jeenotes.in/physics/magnetism/force-moving-charge/"
description: "Master the motion of charged particles in magnetic fields - Lorentz force, helical paths, cyclotron motion - complete JEE guide"
updated: "2026-10-18"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 9"
html: "../../../../offline/physics/magnetism/force-moving-charge/index.html"
extracted: "2026-11-23"
---

> Master the motion of charged particles in magnetic fields - Lorentz force, helical paths, cyclotron motion - complete JEE guide

# Lorentz Force: When Charges Dance in Magnetic Fields

## Movie Hook: Thor’s Hammer in Action

Ever wonder why Thor’s hammer Mjolnir can only be lifted by the “worthy”? Imagine if it used electromagnetic forces to detect neural patterns! When charged particles (like ions in your brain) move through magnetic fields, they experience a force perpendicular to both their motion and the field. This is the **Lorentz Force** - and it’s responsible for everything from cosmic ray deflection to how particle accelerators work. Let’s master the dance of charges in magnetic fields!

## The Big Picture

**What’s the Deal?**

- Moving charges in magnetic fields experience a force perpendicular to velocity
- This force does NO work (always perpendicular to motion)
- Results in circular/helical motion - basis for cyclotrons, mass spectrometers
- Combined with electric fields, gives complete electromagnetic force

**JEE Perspective:**

- JEE Main: Circular motion, cyclotron frequency, radius calculations
- JEE Advanced: Helical motion, velocity selectors, mass spectrometers, combined E-B fields

---

## Core Concept: The Lorentz Force

### Magnetic Force on Moving Charge

A charge $q$ moving with velocity $\vec{v}$ in magnetic field $\vec{B}$ experiences force:

$$\boxed{\vec{F} = q(\vec{v} \times \vec{B})}$$

**Magnitude:**

$$\boxed{F = qvB\sin\theta}$$

where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$

**Direction:** Right-hand rule (for positive charge)

- Fingers: velocity direction
- Bend fingers: toward B direction
- Thumb: force direction

**For negative charge:** Force is in opposite direction!

### Complete Lorentz Force (Electric + Magnetic)

$$\boxed{\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})}$$

**Memory Trick: “E-M Love Story”**

- **E**lectric force: parallel to E (along field)
- **M**agnetic force: perpendicular to v and B (cross product)
- Together: they’re the complete electromagnetic force!

---

## Key Properties of Magnetic Force

### 1. No Work Done!

**Crucial Insight:** Magnetic force is ALWAYS perpendicular to velocity

$$W = \vec{F} \cdot \vec{v} = q(\vec{v} \times \vec{B}) \cdot \vec{v} = 0$$

**Consequences:**

- Kinetic energy remains constant
- Only DIRECTION changes, not speed
- Magnetic field cannot speed up or slow down particles!

**JEE Gold:** “Magnetic force changes direction, NOT speed!”

### 2. Force Depends on Direction

| Angle θ | sin θ | Force | Motion |
| --- | --- | --- | --- |
| 0° (parallel) | 0 | F = 0 | Straight line |
| 90° (perpendicular) | 1 | F = qvB (max) | Circular |
| Other | sin θ | F = qvB sin θ | Helical |

### 3. Charge Sign Matters

- **Positive charge:** Force by right-hand rule
- **Negative charge:** Force opposite to right-hand rule
- **Application:** Separating particles in mass spectrometers!

---

## Standard Motion Patterns

### 1. Circular Motion (v ⊥ B)

When velocity is perpendicular to magnetic field:

**Centripetal Force = Magnetic Force:**

$$\frac{mv^2}{r} = qvB$$

**Radius of circular path:**

$$\boxed{r = \frac{mv}{qB}}$$

**Time period:**

$$\boxed{T = \frac{2\pi r}{v} = \frac{2\pi m}{qB}}$$

**Frequency (Cyclotron frequency):**

$$\boxed{f = \frac{1}{T} = \frac{qB}{2\pi m}}$$

**Angular frequency:**

$$\boxed{\omega = 2\pi f = \frac{qB}{m}}$$

**Memory Trick: “RTFO - Remember The Frequency is ωmega”**

- **R**adius: $\frac{mv}{qB}$ (has velocity)
- **T**ime period: $\frac{2\pi m}{qB}$ (no velocity!)
- **F**requency: $\frac{qB}{2\pi m}$ (independent of v!)
- **O**mega: $\frac{qB}{m}$ (simplest form!)

**Key Insight:** Frequency is INDEPENDENT of velocity and radius!

- Faster particles move in larger circles but take same time
- This is the BASIS for cyclotron operation!

### Interactive Demo: Lorentz Force Visualizer

Explore how charged particles move in magnetic fields with this comprehensive 3D visualizer. Adjust velocity, angle, charge sign, and magnetic field strength to see circular, helical, and straight-line motion in action!

**Try these experiments:**

1. **Circular motion:** Set angle to 90 degrees - particle moves in a perfect circle
2. **Helical motion:** Set angle to 45 degrees - particle spirals along B-field
3. **Straight line:** Set angle to 0 degrees - no magnetic force, no deflection
4. **Cyclotron demo:** Watch how radius increases with velocity (key to particle accelerators)

### 2. Helical Motion (v at angle to B)

When velocity makes angle $\theta$ with B:

**Resolve velocity:**

- Parallel component: $v_\parallel = v\cos\theta$ (no force, constant)
- Perpendicular component: $v_\perp = v\sin\theta$ (circular motion)

**Radius of helix:**

$$\boxed{r = \frac{mv\sin\theta}{qB}}$$

**Pitch (distance traveled in one revolution):**

$$\boxed{p = v_\parallel T = v\cos\theta \times \frac{2\pi m}{qB} = \frac{2\pi mv\cos\theta}{qB}}$$

**Visualization:**

```fallback
↑ B (z-axis)
        |
    ----⊙---- (circular motion in x-y plane)
   /    |    \
  /     |     \
 ↗      ↑      ↗ (helical path)
       pitch
```

**Applications:**

- Charged particles in Earth’s magnetic field
- Particles in magnetic bottles (fusion reactors)
- Aurora borealis (charged particles spiraling along field lines)

### 3. Straight Line Motion (v ∥ B)

When velocity is parallel or anti-parallel to B:

- $\theta = 0°$ or $180°$
- $\sin\theta = 0$
- $F = 0$
- **Motion:** Uniform straight line (no deflection)

---

## Applications: Real-World Devices

### 1. Cyclotron (Particle Accelerator)

**Principle:** Charged particles spiral outward while being accelerated

**Key Features:**

- Two D-shaped electrodes (dees)
- Uniform magnetic field perpendicular to plane
- Alternating electric field between dees

**Frequency of AC voltage:**

$$\boxed{f = \frac{qB}{2\pi m}}$$

**Maximum kinetic energy:**

$$KE = \frac{1}{2}mv^2 = \frac{1}{2}m\left(\frac{qBR}{m}\right)^2 = \frac{q^2B^2R^2}{2m}$$

$$\boxed{KE_{\text{max}} = \frac{q^2B^2R^2}{2m}}$$

where R is the radius of the dees

**JEE Trick:** Frequency is independent of radius - that’s why it works!

### 2. Velocity Selector

**Setup:** Crossed electric and magnetic fields (E ⊥ B ⊥ v)

**Condition for straight-line motion:**

$$F_E = F_B$$

$$qE = qvB$$

**Selected velocity:**

$$\boxed{v = \frac{E}{B}}$$

**Application:** Only particles with this specific velocity pass through undeflected!

### 3. Mass Spectrometer

**Components:**

1. Velocity selector (selects specific v)
2. Magnetic field region (particles move in semicircle)
3. Detector (measures radius)

**Radius in B-field:**

$$r = \frac{mv}{qB}$$

**Since v is selected (v = E/B):**

$$r = \frac{m(E/B)}{qB} = \frac{mE}{qB^2}$$

**Mass determination:**

$$\boxed{m = \frac{qB^2r}{E}}$$

**Application:** Separating isotopes, identifying molecules!

**JEE Pattern:** Often asks for ratio of radii for different masses:

$$\frac{r_1}{r_2} = \frac{m_1}{m_2}$$

(for same q, E, B)

### 4. Magnetic Focusing

**Charged particles starting from same point but different angles return to same point after half revolution**

**Distance between focuses:**

$$\boxed{d = \frac{\pi mv}{qB}}$$

**Application:** CRT displays, electron microscopes

---

## Interactive Demo: Particle Motion Simulator

```python
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

def particle_in_B_field(q, m, v, theta, B, t_max=1e-6, dt=1e-9):
    """
    Simulate charged particle in uniform magnetic field

    Parameters:
    q: charge (C)
    m: mass (kg)
    v: speed (m/s)
    theta: angle with B-field (degrees)
    B: magnetic field strength (T)
    t_max: simulation time (s)
    dt: time step (s)
    """
    # Convert angle to radians
    theta_rad = np.radians(theta)

    # Initial velocity components
    v_perp = v * np.sin(theta_rad)  # perpendicular to B
    v_para = v * np.cos(theta_rad)  # parallel to B

    # Initialize position and velocity
    x, y, z = 0, 0, 0
    vx, vy, vz = v_perp, 0, v_para

    # Storage
    positions = [[x, y, z]]

    # Time evolution
    t = 0
    while t < t_max:
        # Lorentz force (B in z-direction)
        Fx = q * vy * B
        Fy = -q * vx * B
        Fz = 0

        # Update velocity
        vx += (Fx/m) * dt
        vy += (Fy/m) * dt
        vz += (Fz/m) * dt

        # Update position
        x += vx * dt
        y += vy * dt
        z += vz * dt

        positions.append([x, y, z])
        t += dt

    return np.array(positions)

# Example 1: Pure circular motion (theta = 90°)
q = 1.6e-19  # electron charge
m = 9.1e-31  # electron mass
v = 1e6      # 1 million m/s
B = 0.1      # Tesla

fig = plt.figure(figsize=(15, 5))

# Circular motion
ax1 = fig.add_subplot(131, projection='3d')
positions = particle_in_B_field(q, m, v, 90, B, t_max=2e-8)
ax1.plot(positions[:, 0]*1e2, positions[:, 1]*1e2, positions[:, 2]*1e2, 'b-', linewidth=2)
ax1.set_xlabel('x (cm)')
ax1.set_ylabel('y (cm)')
ax1.set_zlabel('z (cm)')
ax1.set_title('Circular Motion (θ = 90°)')

# Helical motion (theta = 45°)
ax2 = fig.add_subplot(132, projection='3d')
positions = particle_in_B_field(q, m, v, 45, B, t_max=4e-8)
ax2.plot(positions[:, 0]*1e2, positions[:, 1]*1e2, positions[:, 2]*1e2, 'r-', linewidth=2)
ax2.set_xlabel('x (cm)')
ax2.set_ylabel('y (cm)')
ax2.set_zlabel('z (cm)')
ax2.set_title('Helical Motion (θ = 45°)')

# Gentle helix (theta = 30°)
ax3 = fig.add_subplot(133, projection='3d')
positions = particle_in_B_field(q, m, v, 30, B, t_max=4e-8)
ax3.plot(positions[:, 0]*1e2, positions[:, 1]*1e2, positions[:, 2]*1e2, 'g-', linewidth=2)
ax3.set_xlabel('x (cm)')
ax3.set_ylabel('y (cm)')
ax3.set_zlabel('z (cm)')
ax3.set_title('Helical Motion (θ = 30°)')

plt.tight_layout()
plt.show()

# Calculate theoretical values
r = (m * v * np.sin(np.radians(90))) / (abs(q) * B)
T = (2 * np.pi * m) / (abs(q) * B)
f = 1/T

print(f"Radius of circular motion: {r*100:.4f} cm")
print(f"Time period: {T*1e9:.4f} ns")
print(f"Cyclotron frequency: {f*1e-6:.4f} MHz")
```

**Experiment:** Change theta to see transition from circular to helical to straight-line motion!

---

## Common JEE Mistakes (Avoid These!)

### Mistake 1: Confusing Force Direction

**Wrong:** Force is along velocity
**Right:** Force is perpendicular to BOTH v and B (use right-hand rule!)

### Mistake 2: Thinking Magnetic Force Does Work

**Wrong:** Magnetic field increases kinetic energy
**Right:** F ⊥ v always, so W = 0, KE constant!

### Mistake 3: Wrong Formula for Helical Motion

**Wrong:** Using r = mv/qB for helical motion
**Right:** r = mv sin θ/qB (only perpendicular component!)

### Mistake 4: Forgetting Mass Dependence

**Wrong:** All particles have same radius in B-field
**Right:** r ∝ m (for same v and q)

### Mistake 5: Time Period Confusion

**Wrong:** Time period depends on velocity
**Right:** T = 2πm/qB (independent of v and r!)

---

## Problem-Solving Strategy: The MOVE Method

**M**agnetic force direction (right-hand rule)
**O**rient the coordinate system
**V**elocity components (parallel and perpendicular)
**E**quations for circular/helical motion

---

## Practice Problems

### Level 1: JEE Main Foundations

**Problem 1.1:** An electron (m = 9.1 × 10⁻³¹ kg, q = -1.6 × 10⁻¹⁹ C) moves with speed 10⁶ m/s perpendicular to a magnetic field of 0.1 T. Find the radius of its circular path.

<details><summary>Solution</summary><p><strong>Given:</strong></p><ul><li>m = 9.1 × 10⁻³¹ kg</li><li>v = 10⁶ m/s</li><li>B = 0.1 T</li><li>q = 1.6 × 10⁻¹⁹ C (magnitude)</li></ul><p><strong>Formula:</strong> $r = \frac{mv}{qB}$</p>$$r = \frac{9.1 \times 10^{-31} \times 10^6}{1.6 \times 10^{-19} \times 0.1}$$

$$r = \frac{9.1 \times 10^{-25}}{1.6 \times 10^{-20}} = \frac{9.1}{1.6} \times 10^{-5}$$

$$r = 5.69 \times 10^{-5} \text{ m} = 0.057 \text{ mm}$$<p><strong>Answer:</strong> 0.057 mm or 57 μm</p></details>

**Problem 1.2:** A proton (m = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C) moves in a circular path of radius 10 cm in a magnetic field of 0.5 T. Find its speed.

<details><summary>Solution</summary><p><strong>Given:</strong> r = 0.1 m, B = 0.5 T, m = 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C</p><p><strong>From:</strong> $r = \frac{mv}{qB}$</p>$$v = \frac{rqB}{m} = \frac{0.1 \times 1.6 \times 10^{-19} \times 0.5}{1.67 \times 10^{-27}}$$

$$v = \frac{0.8 \times 10^{-20}}{1.67 \times 10^{-27}} = \frac{0.8}{1.67} \times 10^{7}$$

$$v = 4.79 \times 10^{6} \text{ m/s}$$<p><strong>Answer:</strong> 4.79 × 10⁶ m/s (about 4.8 million m/s)</p></details>

**Problem 1.3:** Find the cyclotron frequency for an electron in a magnetic field of 0.2 T.

<details><summary>Solution</summary><p><strong>Given:</strong> B = 0.2 T, m = 9.1 × 10⁻³¹ kg, q = 1.6 × 10⁻¹⁹ C</p><p><strong>Formula:</strong> $f = \frac{qB}{2\pi m}$</p>$$f = \frac{1.6 \times 10^{-19} \times 0.2}{2\pi \times 9.1 \times 10^{-31}}$$

$$f = \frac{3.2 \times 10^{-20}}{5.71 \times 10^{-30}} = 5.6 \times 10^{9} \text{ Hz}$$<p><strong>Answer:</strong> 5.6 GHz (5.6 × 10⁹ Hz)</p><p><strong>Note:</strong> Frequency is independent of velocity!</p></details>

### Level 2: JEE Advanced Application

**Problem 2.1:** A charged particle enters a region of uniform magnetic field with velocity making 30° with the field direction. If the pitch of the helical path is equal to the radius of the helix, find the speed of the particle. (Given: q/m = 10⁷ C/kg, B = 0.1 T)

<details><summary>Solution</summary><p><strong>Given:</strong> θ = 30°, pitch p = radius r, q/m = 10⁷ C/kg, B = 0.1 T</p><p><strong>Radius:</strong> $r = \frac{mv\sin\theta}{qB} = \frac{v\sin 30°}{(q/m)B} = \frac{v \times 0.5}{10^7 \times 0.1} = \frac{v}{2 \times 10^6}$</p><p><strong>Pitch:</strong> $p = \frac{2\pi mv\cos\theta}{qB} = \frac{2\pi v\cos 30°}{(q/m)B} = \frac{2\pi v \times \frac{\sqrt{3}}{2}}{10^7 \times 0.1}$</p>$$p = \frac{\pi\sqrt{3} v}{10^6}$$<p><strong>Given p = r:</strong></p>$$\frac{\pi\sqrt{3} v}{10^6} = \frac{v}{2 \times 10^6}$$

$$\pi\sqrt{3} = \frac{1}{2}$$<p>Wait, this gives a contradiction! Let me recalculate&amp;mldr;</p><p><strong>Actually:</strong> Set p = r properly:</p>$$\frac{2\pi v\cos 30°}{(q/m)B} = \frac{v\sin 30°}{(q/m)B}$$

$$2\pi \cos 30° = \sin 30°$$<p>This is not satisfied for 30°. The problem is asking for v given the condition.</p><p><strong>Correct approach:</strong></p>$$p = r$$<p></p>$$\frac{2\pi m v\cos\theta}{qB} = \frac{m v\sin\theta}{qB}$$

$$2\pi \cos\theta = \sin\theta$$

$$\tan\theta = 2\pi$$<p>This doesn’t match θ = 30°.</p><p><strong>Reinterpreting:</strong> If given p = r AND θ = 30°, find v:</p>$$r = \frac{v \times 0.5}{10^7 \times 0.1} = \frac{v}{2 \times 10^6}$$

$$p = \frac{2\pi v \times \frac{\sqrt{3}}{2}}{10^6} = \frac{\pi\sqrt{3} v}{10^6}$$<p>If p = r (numerically):</p>$$\frac{\pi\sqrt{3} v}{10^6} = \frac{v}{2 \times 10^6}$$

$$\pi\sqrt{3} \times 2 = 1$$<p>This is inconsistent. The problem likely means find condition, not specific v.</p><p><strong>Answer:</strong> The condition p = r with θ = 30° is not self-consistent. If p = r, then tan θ = 2π.</p></details>

**Problem 2.2:** A velocity selector has E = 500 V/m and B = 0.05 T. What velocity particles will pass through undeflected? If a proton passes through, what is its kinetic energy?

<details><summary>Solution</summary><p><strong>Given:</strong> E = 500 V/m, B = 0.05 T</p><p><strong>(a) Selected velocity:</strong></p>$$v = \frac{E}{B} = \frac{500}{0.05} = 10,000 \text{ m/s} = 10^4 \text{ m/s}$$<p><strong>(b) Kinetic energy of proton:</strong></p><ul><li>m = 1.67 × 10⁻²⁷ kg</li><li>v = 10⁴ m/s</li></ul>$$KE = \frac{1}{2}mv^2 = \frac{1}{2} \times 1.67 \times 10^{-27} \times (10^4)^2$$

$$KE = 0.835 \times 10^{-27} \times 10^8 = 8.35 \times 10^{-20} \text{ J}$$<p><strong>In eV:</strong></p>$$KE = \frac{8.35 \times 10^{-20}}{1.6 \times 10^{-19}} = 0.52 \text{ eV}$$<p><strong>Answers:</strong></p><ul><li>Selected velocity: 10⁴ m/s</li><li>Proton KE: 8.35 × 10⁻²⁰ J = 0.52 eV</li></ul></details>

**Problem 2.3:** Two isotopes of mass m₁ and m₂ are accelerated through the same potential V and then enter a uniform magnetic field perpendicular to their motion. Find the ratio of their radii.

<details><summary>Solution</summary><p><strong>Energy from potential:</strong></p>$$qV = \frac{1}{2}mv^2$$<p></p>$$v = \sqrt{\frac{2qV}{m}}$$<p><strong>Radius in magnetic field:</strong></p>$$r = \frac{mv}{qB} = \frac{m}{qB}\sqrt{\frac{2qV}{m}} = \frac{\sqrt{2mqV}}{qB} = \frac{\sqrt{2mV}}{B}\sqrt{\frac{q}{q}}$$

$$r = \frac{1}{B}\sqrt{\frac{2mV}{q}}$$<p><strong>For same q, V, B:</strong></p>$$r \propto \sqrt{m}$$<p><strong>Ratio:</strong></p>$$\boxed{\frac{r_1}{r_2} = \sqrt{\frac{m_1}{m_2}}}$$<p><strong>Answer:</strong> $\frac{r_1}{r_2} = \sqrt{\frac{m_1}{m_2}}$</p><p><strong>JEE Trick:</strong> For particles accelerated through same V: radius ratio = √(mass ratio)</p></details>

### Level 3: JEE Advanced Mastery

**Problem 3.1:** A particle of mass m and charge q is projected with velocity v in a region where electric field E and magnetic field B are both present and parallel. Find the trajectory of the particle.

<details><summary>Solution</summary><p><strong>Setup:</strong> Let both $\vec{E}$ and $\vec{B}$ be along z-axis, initial velocity $\vec{v}$ at angle θ to z-axis.</p><p><strong>Force analysis:</strong></p><ul><li>Electric force: $\vec{F}_E = q\vec{E}$ (along z-axis)</li><li>Magnetic force: $\vec{F}_B = q\vec{v} \times \vec{B}$</li></ul><p><strong>Key insight:</strong> If $\vec{v} \parallel \vec{B}$, then $\vec{F}_B = 0$</p><p><strong>Components:</strong></p><ul><li>$v_z$ (parallel to B): Experiences only electric force</li><li>$v_\perp$ (perpendicular to B): Experiences magnetic force (circular motion)</li></ul><p><strong>Motion in z-direction:</strong></p>$$F_z = qE$$<p></p>$$z = \frac{1}{2}\frac{qE}{m}t^2 + v_z t$$<p>(uniformly accelerated)</p><p><strong>Motion in x-y plane:</strong>
Circular with radius $r = \frac{mv_\perp}{qB}$ and frequency $\omega = \frac{qB}{m}$</p><p><strong>Combined trajectory:</strong> Helix with increasing pitch (accelerating helix)</p><p><strong>Parametric equations:</strong></p>$$x = r\cos(\omega t)$$<p></p>$$y = r\sin(\omega t)$$<p></p>$$z = v_z t + \frac{1}{2}\frac{qE}{m}t^2$$<p><strong>Answer:</strong> Accelerating helical motion (helix with increasing pitch)</p></details>

**Problem 3.2:** A cyclotron has dees of radius 50 cm and magnetic field 1.5 T. (a) What is the maximum energy of accelerated protons? (b) If the frequency of the applied voltage is 20 MHz, what particle is being accelerated?

<details><summary>Solution</summary><p><strong>(a) Maximum energy:</strong></p><p>At maximum radius R = 0.5 m:</p>$$v_{\max} = \frac{qBR}{m} = \frac{1.6 \times 10^{-19} \times 1.5 \times 0.5}{1.67 \times 10^{-27}}$$

$$v_{\max} = \frac{1.2 \times 10^{-19}}{1.67 \times 10^{-27}} = 7.19 \times 10^{7} \text{ m/s}$$

$$KE_{\max} = \frac{1}{2}mv^2 = \frac{1}{2} \times 1.67 \times 10^{-27} \times (7.19 \times 10^7)^2$$

$$KE_{\max} = 4.32 \times 10^{-12} \text{ J}$$<p><strong>In MeV:</strong></p>$$KE = \frac{4.32 \times 10^{-12}}{1.6 \times 10^{-19} \times 10^6} = 27 \text{ MeV}$$<p><strong>(b) Particle identification:</strong></p><p><strong>Cyclotron frequency:</strong> $f = \frac{qB}{2\pi m}$</p><p>Given f = 20 MHz = 20 × 10⁶ Hz:</p>$$20 \times 10^6 = \frac{q \times 1.5}{2\pi m}$$

$$m = \frac{1.5q}{2\pi \times 20 \times 10^6} = \frac{1.5q}{1.257 \times 10^8}$$<p>For proton (q = 1.6 × 10⁻¹⁹ C):</p>$$m = \frac{1.5 \times 1.6 \times 10^{-19}}{1.257 \times 10^8} = 1.91 \times 10^{-27} \text{ kg}$$<p>This is close to proton mass (1.67 × 10⁻²⁷ kg), but let’s check deuteron:</p><p>For deuteron (m ≈ 2 × 1.67 × 10⁻²⁷ kg, q = 1.6 × 10⁻¹⁹ C):</p>$$f = \frac{1.6 \times 10^{-19} \times 1.5}{2\pi \times 3.34 \times 10^{-27}} = 11.4 \text{ MHz}$$<p>Not matching. It’s approximately a proton.</p><p><strong>Answers:</strong></p><ul><li>(a) Maximum KE = 27 MeV</li><li>(b) Proton (given the approximations)</li></ul></details>

**Problem 3.3:** A particle with specific charge q/m enters a region of crossed electric and magnetic fields (E perpendicular to B). Initially at rest, describe its motion. The fields are: E = 100 V/m (x-direction), B = 0.5 T (z-direction).

<details><summary>Solution</summary><p><strong>Initial condition:</strong> v = 0 at t = 0</p><p><strong>Forces:</strong></p><ul><li>Electric: $F_E = qE$ (constant, x-direction)</li><li>Magnetic: $F_B = q\vec{v} \times \vec{B}$ (perpendicular to v)</li></ul><p><strong>Motion analysis:</strong></p><p><strong>Phase 1:</strong> Initially, only electric force acts (v = 0, so F_B = 0)</p><ul><li>Particle accelerates in x-direction</li><li>Gains velocity: $v_x = \frac{qE}{m}t$</li></ul><p><strong>Phase 2:</strong> Once moving, magnetic force appears</p><ul><li>$F_{B,y} = -qv_xB$ (in y-direction)</li><li>Particle curves in x-y plane</li></ul><p><strong>Equations of motion:</strong></p>$$m\frac{dv_x}{dt} = qE + qv_yB$$<p></p>$$m\frac{dv_y}{dt} = -qv_xB$$<p><strong>This is a cycloidal motion!</strong></p><p><strong>Solution characteristics:</strong></p><ul><li>Particle drifts in the −y direction (along $\vec{E}\times\vec{B}$) with average speed: $v_{\text{drift}} = \frac{E}{B}$</li><li>Superimposed circular motion with cyclotron frequency: $\omega = \frac{qB}{m}$</li></ul><p><strong>Trajectory:</strong> Cycloid (like a rolling wheel)</p><p><strong>Drift velocity:</strong> $\vec{v}_{\text{drift}} = \dfrac{\vec{E}\times\vec{B}}{B^2}$, magnitude $\dfrac{E}{B} = \dfrac{100}{0.5} = 200$ m/s, along $\hat{x}\times\hat{z} = -\hat{y}$
<strong>Answer:</strong> Cycloidal motion with drift velocity 200 m/s in the −y direction (independent of the sign of q)</p></details>

---

## Connections: The Web of Knowledge

### Link to Circular Motion

- Magnetic force provides centripetal force
- Same equations: F = mv²/r
- See: [Circular Motion](../../kinematics/circular-motion/index.md)

### Link to Current-Carrying Conductor

- Current = moving charges, experiences force F = BIL
- Same underlying principle
- See: [Force on Current Conductor](../force-current-conductor/index.md)

### Link to Electromagnetic Induction

- Moving charges in B-field is basis for motional EMF
- v × B appears in both contexts
- See: [Motional EMF](../../electromagnetic-induction/motional-emf/index.md)

### Link to Electric Field

- Complete Lorentz force: F = q(E + v × B)
- E does work, B doesn’t
- See: [Electric Field](../../electrostatics/electric-field/index.md)

---

## Quick Revision: Formula Sheet

| Quantity | Formula | Note |
| --- | --- | --- |
| Magnetic force | $F = qvB\sin\theta$ | Max when v ⊥ B |
| Radius (circular) | $r = \frac{mv}{qB}$ | Perpendicular motion |
| Time period | $T = \frac{2\pi m}{qB}$ | Independent of v! |
| Frequency | $f = \frac{qB}{2\pi m}$ | Cyclotron frequency |
| Radius (helical) | $r = \frac{mv\sin\theta}{qB}$ | Perpendicular component |
| Pitch | $p = \frac{2\pi mv\cos\theta}{qB}$ | Parallel component |
| Velocity selector | $v = \frac{E}{B}$ | For straight motion |
| Cyclotron KE | $KE = \frac{q^2B^2R^2}{2m}$ | At maximum radius |

**Remember:** Magnetic force does NO work! (Always perpendicular to v)

---

## Exam Strategy

**Time Management:**

- Direction questions: 1 minute (right-hand rule)
- Radius/period calculations: 2-3 minutes
- Cyclotron/spectrometer: 5-7 minutes

**Quick Checks:**

- Is force perpendicular to v? (Always yes!)
- Does speed change? (No, only direction!)
- Is frequency independent of v? (Yes!)

**Common Patterns:**

- 40% circular motion problems
- 30% cyclotron/mass spectrometer
- 20% helical motion
- 10% crossed fields

---

## Summary: Key Takeaways

1. **Lorentz Force:** $\vec{F} = q(\vec{v} \times \vec{B})$ - always perpendicular to velocity
2. **No Work Done:** Magnetic force changes direction, NOT speed (KE constant)
3. **Circular Motion:** Radius $r = \frac{mv}{qB}$, frequency $f = \frac{qB}{2\pi m}$ (independent of v!)
4. **Helical Motion:** When v makes angle θ with B, combines circular + linear motion
5. **Applications:** Cyclotron (accelerator), mass spectrometer (isotope separation), velocity selector
6. **JEE Gold:** Frequency is independent of velocity - this is the KEY to cyclotron!

---

*Last Updated: March 22, 2025*
*Next Topic: [Force on Current-Carrying Conductor](../force-current-conductor/index.md)*
*Previous Topic: [Ampere’s Circuital Law](../amperes-law/index.md)*

From TestGuru · our mock-test platform

## You've read Lorentz Force: When Charges Dance in Magnetic Fields.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=magnetism&tg_exam=jee-main&tg_page=%2Fphysics%2Fmagnetism%2Fforce-moving-charge%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/magnetism/force-moving-charge/",this.page.identifier="/physics/magnetism/force-moving-charge/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="lorentzForceVisualizer" id="anim-lorentzForceVisualizer-1795396423917497366"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-lorentzForceVisualizer-1795396423917497366")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/magnetism/force-moving-charge/](https://jeenotes.in/physics/magnetism/force-moving-charge/) · raw HTML: `offline/physics/magnetism/force-moving-charge/index.html`_
