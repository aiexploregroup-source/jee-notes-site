---
title: "Electric Dipole"
source: "https://jeenotes.in/physics/electrostatics/electric-dipole/"
description: "Master dipole moment, electric field on axis and equator, torque and potential energy for JEE Physics"
updated: "2026-10-18"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 8"
html: "../../../../offline/physics/electrostatics/electric-dipole/index.html"
extracted: "2026-11-23"
---

> Master dipole moment, electric field on axis and equator, torque and potential energy for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Electric Charges](../electric-charges/index.md) — Coulomb’s law and superposition
- [Electric Field](../electric-field/index.md) — Field due to point charges
- Basic vector addition and trigonometry

## The Hook: Molecules Are Tiny Magnets!

> **★ Key point · Connect: Water's Secret Superpower**
>
> Ever wonder why water dissolves salt but oil doesn’t? Or why a plastic comb can pick up tiny paper pieces after you comb your hair? Or in **Oppenheimer** (2023), how atoms interact to form molecules?
>
> The secret is the **electric dipole** — most molecules are tiny electric dipoles! Water molecules have a positive end and a negative end, making them perfect at grabbing ions and charged particles. This simple concept explains chemistry, biology, and material science!

---

## What is an Electric Dipole?

> **★ Key point · Electric Dipole Definition**
>
> An **electric dipole** consists of two equal and opposite charges ($+q$ and $-q$) separated by a small distance ($2a$).

**Key Features:**

- **Equal magnitude** charges (usually denoted $q$)
- **Opposite signs** ($+q$ and $-q$)
- **Small separation** distance $2a$ (compared to observation distance)
- **Net charge = 0** (but creates electric field!)

> **◐ In simple terms · Real-World Dipoles**
>
> **Examples in nature:**
>
> - Water molecule (H₂O) — oxygen side is negative, hydrogen side is positive

> - HCl molecule — chlorine end is negative, hydrogen end is positive

> - CO₂ — linear, so dipole moments cancel (not a dipole!)

> - Atoms in external field — positive nucleus shifts one way, electron cloud the other
>
> **In movies:** Think of Thor’s hammer **Mjolnir** — one end attracts (negative), one end repels (positive)!

---

## Dipole Moment

The **dipole moment** is a measure of the “strength” of a dipole.

$$\boxed{\vec{p} = q \cdot 2a \cdot \hat{p}}$$

**Magnitude:** $p = q \times 2a$

**Direction:** From **negative** charge to **positive** charge (conventional)

**Unit:** Coulomb-meter (C·m) or Debye (D) where 1 D = $3.33 \times 10^{-30}$ C·m

> **★ Key point · Memory Trick**
>
> **“Dipole points from Negative to Positive”**
>
> Think of it as the “shift” direction when you pull the charges apart — you pull the positive charge in the direction of $\vec{p}$.
>
> **Visual:** Draw an arrow from $-q$ to $+q$ — that’s $\vec{p}$!

**Why is dipole moment important?**

- Larger $p$ → stronger interaction with fields
- Many molecular properties depend on dipole moment
- Dipole moment determines how molecules align in electric fields

---

## Electric Field Due to a Dipole

The field pattern of a dipole is characteristic — curved lines from $+q$ to $-q$.

We’ll calculate field at two special positions:

1. **Axial line** (along the dipole axis)
2. **Equatorial line** (perpendicular bisector)

### Conventions

- Center of dipole at origin
- Dipole aligned along an axis (say, $+q$ at $+a$, $-q$ at $-a$)
- Distance from center: $r$
- Assume $r >> a$ (observation point is far from dipole)

---

## Field on the Axial Line

**Position:** Point P on the axis of dipole, at distance $r$ from center

**Setup:**

- Distance from $+q$: $(r - a)$
- Distance from $-q$: $(r + a)$

**Field due to $+q$:**

$$E_+ = k\frac{q}{(r-a)^2}$$

(pointing away from $+q$, i.e., along positive axis)

**Field due to $-q$:**

$$E_- = k\frac{q}{(r+a)^2}$$

(pointing toward $-q$, i.e., also along positive axis)

**Net field:**

$$E_{axial} = E_+ - E_- = kq\left[\frac{1}{(r-a)^2} - \frac{1}{(r+a)^2}\right]$$

$$E_{axial} = kq\left[\frac{(r+a)^2 - (r-a)^2}{(r^2-a^2)^2}\right] = kq\left[\frac{4ar}{(r^2-a^2)^2}\right]$$

For $r >> a$, we have $r^2 - a^2 \approx r^2$:

$$\boxed{E_{axial} = \frac{2kp}{r^3}}$$

where $p = q \times 2a$ (dipole moment)

**Direction:** Along the dipole axis (from $-q$ to $+q$)

**Alternative form:**

$$\boxed{E_{axial} = \frac{2p}{4\pi\varepsilon_0 r^3}}$$

> **◐ In simple terms · Key Observation**
>
> Field falls off as $\frac{1}{r^3}$ (not $\frac{1}{r^2}$ like a point charge!)
>
> This is because the dipole has **net charge = 0**. The two charges’ fields partially cancel, making the net field weaker.

---

## Field on the Equatorial Line

**Position:** Point P on the perpendicular bisector, at distance $r$ from center

**Setup:**

- Distance from each charge: $\sqrt{r^2 + a^2}$
- Fields from $+q$ and $-q$ have equal magnitude but different directions

**Field magnitude from each charge:**

$$E_+ = E_- = k\frac{q}{r^2 + a^2}$$

**Direction analysis:**

- Field from $+q$ points away from $+q$
- Field from $-q$ points toward $-q$
- By symmetry, components perpendicular to equatorial line **cancel**
- Components along dipole axis (toward $-q$) **add**

**Component along axis:**

$$E_{component} = E \cos\theta = E \frac{a}{\sqrt{r^2 + a^2}}$$

**Net field:**

$$E_{equatorial} = 2 \times k\frac{q}{r^2 + a^2} \times \frac{a}{\sqrt{r^2 + a^2}} = \frac{2kqa}{(r^2 + a^2)^{3/2}}$$

For $r >> a$:

$$\boxed{E_{equatorial} = \frac{kp}{r^3}}$$

**Direction:** Parallel to dipole axis, from $+q$ to $-q$ (opposite to $\vec{p}$)

**Alternative form:**

$$\boxed{E_{equatorial} = \frac{p}{4\pi\varepsilon_0 r^3}}$$

---

## Comparing Axial and Equatorial Fields

| Property | Axial Field | Equatorial Field |
| --- | --- | --- |
| Magnitude | $\frac{2kp}{r^3}$ | $\frac{kp}{r^3}$ |
| Direction | Along $\vec{p}$ | Opposite to $\vec{p}$ |
| Ratio | $E_{axial} : E_{equatorial}$ | $2 : 1$ |
| Distance dependence | $\frac{1}{r^3}$ | $\frac{1}{r^3}$ |

> **★ Key point · Memory Trick**
>
> **“Axial is TWICE Equatorial”**
>
> $E_{axial} = 2 \times E_{equatorial}$ (at same distance $r$)
>
> **“Axial ALigns, Equatorial Opposes”**
>
> - Axial field: same direction as $\vec{p}$

> - Equatorial field: opposite to $\vec{p}$

---

## Electric Field at General Point

For a point at distance $r$ making angle $\theta$ with the dipole axis:

$$\boxed{E = \frac{kp}{r^3}\sqrt{1 + 3\cos^2\theta}}$$

**Direction:** Makes angle $\alpha$ with the radius vector (the line from the dipole centre to the point) where:

$$\tan\alpha = \frac{\tan\theta}{2}$$

**Special cases:**

- $\theta = 0°$ (axial): $E = \frac{2kp}{r^3}$
- $\theta = 90°$ (equatorial): $E = \frac{kp}{r^3}$

---

## Dipole in External Uniform Electric Field

Consider a dipole placed in a uniform external field $\vec{E}$.

### Forces on the Dipole

Force on $+q$: $\vec{F}_+ = q\vec{E}$ (along $\vec{E}$)

Force on $-q$: $\vec{F}_- = -q\vec{E}$ (opposite to $\vec{E}$)

**Net force:**

$$\boxed{F_{net} = \vec{F}_+ + \vec{F}_- = 0}$$

**Key Point:** Net force is **zero** (in uniform field) — dipole doesn’t accelerate!

But wait&mldr; if net force is zero, does nothing happen?

---

## Torque on Dipole in Electric Field

> **★ Key point · Torque on Dipole**
>
> Even though net force is zero, the two forces create a **torque** that tends to **rotate** the dipole to align with the field.

**Torque calculation:**

The two forces form a **couple** (equal, opposite, parallel forces).

Torque magnitude: $\tau = \text{Force} \times \text{perpendicular distance}$

Perpendicular distance between forces = $2a \sin\theta$

$$\tau = qE \times 2a\sin\theta = (q \times 2a) E \sin\theta$$

$$\boxed{\tau = pE\sin\theta}$$

**Vector form:**

$$\boxed{\vec{\tau} = \vec{p} \times \vec{E}}$$

**Direction:** Tends to **align** $\vec{p}$ with $\vec{E}$ (clockwise or counterclockwise)

> **★ Key point · Think Compass Needle!**
>
> This is exactly like a compass needle (magnetic dipole) aligning with Earth’s magnetic field!
>
> In **Interstellar**, when they use compasses on the ice planet — same principle, different type of dipole.
>
> **Stable equilibrium:** $\vec{p}$ parallel to $\vec{E}$ ($\theta = 0°$, $\tau = 0$)
>
> **Unstable equilibrium:** $\vec{p}$ antiparallel to $\vec{E}$ ($\theta = 180°$, $\tau = 0$)

---

## Potential Energy of Dipole in Electric Field

Work done to rotate dipole from angle $\theta_1$ to $\theta_2$:

$$W = -\int_{\theta_1}^{\theta_2} \tau \, d\theta = -\int_{\theta_1}^{\theta_2} pE\sin\theta \, d\theta$$

$$W = pE[\cos\theta_2 - \cos\theta_1]$$

Taking reference ($U = 0$) at $\theta = 90°$:

$$\boxed{U = -pE\cos\theta}$$

**Vector form:**

$$\boxed{U = -\vec{p} \cdot \vec{E}}$$

### Energy States

| Orientation | Angle $\theta$ | Energy $U$ | Stability |
| --- | --- | --- | --- |
| Parallel to $\vec{E}$ | $0°$ | $-pE$ | Stable (minimum) |
| Perpendicular to $\vec{E}$ | $90°$ | $0$ | Reference |
| Antiparallel to $\vec{E}$ | $180°$ | $+pE$ | Unstable (maximum) |

> **◐ In simple terms · Energy Interpretation**
>
> - **Minimum energy** ($-pE$): Dipole aligned with field (stable)

> - **Maximum energy** ($+pE$): Dipole opposite to field (unstable)

> - **Work to rotate 180°**: $W = 2pE$
>
> This is why dipoles **naturally align** with electric fields — they seek minimum energy!

---

## Dipole in Non-Uniform Electric Field

If field is **not uniform**, the forces on $+q$ and $-q$ are different.

**Net force:**

$$\vec{F}_{net} \neq 0$$

Result: Dipole experiences both:

1. **Translational motion** (due to net force)
2. **Rotational motion** (due to torque)

**Direction of motion:** Toward region of **stronger field**

This is how charged particles are trapped in electromagnetic traps!

---

## Electric Potential Due to Dipole

At a point distance $r$ from center, making angle $\theta$ with axis:

$$\boxed{V = \frac{kp\cos\theta}{r^2}}$$

**Vector form:**

$$V = \frac{k\vec{p} \cdot \hat{r}}{r^2}$$

**Special cases:**

- On axis ($\theta = 0°$): $V = \frac{kp}{r^2}$
- On equatorial line ($\theta = 90°$): $V = 0$

> **⚠ Trap · Common Mistake**
>
> **Wrong:** “Equatorial field is zero”
>
> **Correct:**
>
> - Equatorial **potential** is zero

> - Equatorial **field** is NOT zero: $E = \frac{kp}{r^3}$
>
> Don’t confuse $V$ and $E$!

---

## Memory Tricks & Patterns

### Mnemonic for Dipole Formulas

**“Two Kinds Please”** → $E_{axial} = \frac{2kp}{r^3}$

**“King’s Palace”** → $E_{equatorial} = \frac{kp}{r^3}$

**“Positive Equals Torque”** → $\tau = pE\sin\theta$

**“Potential Comes Over Radius-squared”** → $V = \frac{kp\cos\theta}{r^2}$

### Pattern Recognition

> **★ Key point · JEE High-Yield Pattern: Power of r**
>
> | Quantity | Dependence on $r$ |

> | --- | --- |

> | Point charge field | $E \propto \frac{1}{r^2}$ |

> | Dipole field | $E \propto \frac{1}{r^3}$ |

> | Point charge potential | $V \propto \frac{1}{r}$ |

> | Dipole potential | $V \propto \frac{1}{r^2}$ |
>
> **Rule:** Dipole quantities fall off **one power of r faster** than point charge!

---

## When to Use Dipole Approximation

> **★ Key point · Decision Tree**
>
> **Use dipole formulas when:**
>
> - Two equal and opposite charges

> - Observation point is far: $r >> 2a$ (distance between charges)

> - Problem mentions “electric dipole”
>
> **Don’t use dipole approximation when:**
>
> - Charges are not equal and opposite

> - Observation point is close to the charges

> - Need exact field (not approximate)
>
> **For exact calculations near dipole:** Use superposition with individual charges!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Dipole Moment Direction**
>
> **Wrong:** $\vec{p}$ points from positive to negative
>
> **Correct:** $\vec{p}$ points from **negative to positive**
>
> Remember: It’s the “displacement” of positive charge!

> **⚠ Trap #2: Torque vs Force**
>
> **Wrong:** “Dipole in uniform field experiences net force”
>
> **Correct:**
>
> - **Uniform field:** Net force = 0, but torque exists

> - **Non-uniform field:** Both force and torque exist
>
> Torque rotates, force translates!

> **⚠ Trap #3: Equatorial Potential**
>
> **Wrong:** “Equatorial field is zero, so potential is also zero”
>
> **Correct:**
>
> - Equatorial potential = 0 (correct!)

> - Equatorial field ≠ 0 (it’s $\frac{kp}{r^3}$)
>
> Zero potential doesn’t mean zero field!

> **⚠ Trap #4: Energy Sign**
>
> **Wrong:** $U = pE\cos\theta$
>
> **Correct:** $U = -pE\cos\theta$ (negative sign!)
>
> Minimum energy is at $\theta = 0°$ (aligned), which gives $U = -pE$ (negative).

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Two charges $+10$ μC and $-10$ μC are separated by 4 cm. Find the dipole moment.
>
> **Solution:**
>
> $$p = q \times 2a = 10 \times 10^{-6} \times 4 \times 10^{-2}$$

$$\boxed{p = 4 \times 10^{-7} \text{ C}\cdot\text{m}}$$
>
> Direction: From negative to positive charge

> **↗ Connection · Problem 1.2**
>
> A dipole of moment $4 \times 10^{-9}$ C·m is placed in a uniform field of $5 \times 10^5$ N/C. Find the maximum torque.
>
> **Solution:**
>
> Maximum torque occurs at $\theta = 90°$ (perpendicular to field):
>
> $$\tau_{max} = pE\sin 90° = pE$$

$$\tau_{max} = 4 \times 10^{-9} \times 5 \times 10^5$$

$$\boxed{\tau_{max} = 2 \times 10^{-3} \text{ N}\cdot\text{m} = 2 \text{ mN}\cdot\text{m}}$$

> **↗ Connection · Problem 1.3**
>
> Find the electric field on the axis of a dipole of moment $10^{-8}$ C·m at a distance of 10 cm from its center.
>
> **Solution:**
>
> $$E_{axial} = \frac{2kp}{r^3} = \frac{2 \times 9 \times 10^9 \times 10^{-8}}{(0.1)^3}$$

$$E_{axial} = \frac{18 \times 10}{10^{-3}} = 1.8 \times 10^5 \text{ N/C}$$

$$\boxed{E = 1.8 \times 10^5 \text{ N/C}}$$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A dipole is placed at the origin with its axis along the y-axis. If the electric field at point $(0, d, 0)$ is $E$, find the field at point $(d, 0, 0)$.
>
> **Solution:**
>
> Point $(0, d, 0)$ is on the **axis** (y-axis).
>
> $$E_{axial} = \frac{2kp}{d^3} = E$$
>
> So, $kp = \frac{Ed^3}{2}$
>
> Point $(d, 0, 0)$ is on the **equatorial** line (x-axis).
>
> $$E_{equatorial} = \frac{kp}{d^3} = \frac{Ed^3/2}{d^3} = \frac{E}{2}$$

$$\boxed{E_{equatorial} = \frac{E}{2}}$$
>
> **Key:** Equatorial field is half of axial field!

> **↗ Connection · Problem 2.2**
>
> Work done in rotating a dipole from $\theta = 0°$ to $\theta = 60°$ in a uniform field is $W$. Find the work to rotate from $60°$ to $120°$.
>
> **Solution:**
>
> Work done = Change in potential energy:
>
> $$W = U_f - U_i = -pE\cos\theta_f - (-pE\cos\theta_i) = pE(\cos\theta_i - \cos\theta_f)$$
>
> **First rotation** ($0°$ to $60°$):
>
> $$W_1 = pE(\cos 0° - \cos 60°) = pE(1 - 0.5) = 0.5pE = W$$
>
> So, $pE = 2W$
>
> **Second rotation** ($60°$ to $120°$):
>
> $$W_2 = pE(\cos 60° - \cos 120°) = pE(0.5 - (-0.5)) = pE$$

$$\boxed{W_2 = 2W}$$

> **↗ Connection · Problem 2.3**
>
> At what angle $\theta$ from the dipole axis does the electric field of a short dipole make an angle of $45°$ with the line joining the point to the centre of the dipole?
>
> **Solution:**
>
> Field direction makes angle $\alpha$ with the radius vector (line from dipole centre to the point) where:
>
> $$\tan\alpha = \frac{\tan\theta}{2}$$
>
> Given $\alpha = 45°$:
>
> $$\tan 45° = \frac{\tan\theta}{2}$$

$$1 = \frac{\tan\theta}{2}$$

$$\tan\theta = 2$$

$$\boxed{\theta = \tan^{-1}(2) \approx 63.43°}$$
>
> (At this point the field makes $\theta + \alpha \approx 108.4°$ with the dipole moment $\vec{p}$.)

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> Two dipoles of moments $p_1$ and $p_2$ are placed on the x-axis at $x = -a$ and $x = +a$ respectively, both pointing in the +y direction. Find the electric field at the origin.
>
> **Solution:**
>
> Both dipoles create field at origin (which is on their equatorial line).
>
> For dipole at $x = -a$:
>
> - Distance from origin: $a$

> - Equatorial field: $E_1 = \frac{kp_1}{a^3}$ pointing in **-y** direction (opposite to dipole)
>
> For dipole at $x = +a$:
>
> - Distance from origin: $a$

> - Equatorial field: $E_2 = \frac{kp_2}{a^3}$ pointing in **-y** direction
>
> Both fields are in the **same direction** (-y)!
>
> $$E_{net} = E_1 + E_2 = \frac{k(p_1 + p_2)}{a^3}$$

$$\boxed{E = \frac{k(p_1 + p_2)}{a^3} \text{ in -y direction}}$$

> **↗ Connection · Problem 3.2**
>
> A dipole of moment $p$ is placed at a distance $r$ from a point charge $Q$. The dipole is oriented radially (along the line joining them). Find the force on the dipole.
>
> **Solution:**
>
> Field due to $Q$ at distance $r$: $E = \frac{kQ}{r^2}$
>
> This field is **non-uniform** (changes with position).
>
> Force on dipole in non-uniform field:
>
> $$F = p\frac{dE}{dr}$$

$$\frac{dE}{dr} = \frac{d}{dr}\left(\frac{kQ}{r^2}\right) = kQ \times (-2)r^{-3} = -\frac{2kQ}{r^3}$$

$$F = p \times \frac{2kQ}{r^3}$$

$$\boxed{F = \frac{2kpQ}{r^3}}$$
>
> Direction: If $\vec{p}$ points along the field of $Q$ (away from a positive $Q$), the dipole is pulled toward $Q$, the region of stronger field. If $\vec{p}$ is reversed, it is pushed away.
>
> **Note:** Force exists because field is non-uniform!

> **↗ Connection · Problem 3.3**
>
> Show that the electric field of a short dipole at large distances is perpendicular to the dipole axis at $\theta = \tan^{-1}(\sqrt{2})$.
>
> **Solution:**
>
> Field at angle $\theta$ makes angle $\alpha$ with the radius vector (line from dipole centre to the point) where:
>
> $$\tan\alpha = \frac{\tan\theta}{2}$$
>
> So the field makes angle $\theta + \alpha$ with the dipole axis. For the field to be perpendicular to the axis, $\alpha + \theta = 90°$:
>
> $$\alpha = 90° - \theta$$

$$\tan(90° - \theta) = \frac{\tan\theta}{2}$$

$$\cot\theta = \frac{\tan\theta}{2}$$

$$\frac{1}{\tan\theta} = \frac{\tan\theta}{2}$$

$$\tan^2\theta = 2$$

$$\boxed{\theta = \tan^{-1}(\sqrt{2}) \approx 54.74°}$$
>
> **Check:** The axial component $E_z = \frac{kp}{r^3}(2\cos^2\theta - \sin^2\theta)$ vanishes when $\tan^2\theta = 2$ ✓
>
> At this angle the field is parallel to the equatorial plane: each field line reaches its maximum height above the equatorial plane here. (The field is perpendicular to the radius vector only on the equatorial line, $\theta = 90°$.)

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| Dipole moment | $\vec{p} = q \times 2a$ (from - to +) |
| Axial field | $E = \frac{2kp}{r^3}$ (along $\vec{p}$) |
| Equatorial field | $E = \frac{kp}{r^3}$ (opposite to $\vec{p}$) |
| Field at angle $\theta$ | $E = \frac{kp}{r^3}\sqrt{1 + 3\cos^2\theta}$ |
| Torque in uniform field | $\tau = pE\sin\theta$ or $\vec{\tau} = \vec{p} \times \vec{E}$ |
| Potential energy | $U = -pE\cos\theta$ or $U = -\vec{p} \cdot \vec{E}$ |
| Potential at angle $\theta$ | $V = \frac{kp\cos\theta}{r^2}$ |
| Axial : Equatorial field | $2 : 1$ (at same distance) |
| Stable orientation | $\vec{p} \parallel \vec{E}$ ($U = -pE$) |
| Unstable orientation | $\vec{p}$ antiparallel to $\vec{E}$ ($U = +pE$) |

**JEE Weightage:** 1-2 questions in JEE Main (formula-based), 1 question in JEE Advanced (often combined with torque/energy)

**Time-Saver:** Remember the 2:1 ratio for axial:equatorial — saves calculation time!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Dipole moment direction:** From negative to positive charge (conventional)

> 2. **Field falls as 1/r³** — faster than point charge because net charge = 0

> 3. **Axial field is twice equatorial field** — important ratio to remember

> 4. **Torque aligns dipole with field** — even though net force is zero (uniform field)

> 5. **Minimum energy when aligned** — dipoles naturally align with electric field
>
> **“The dipole is the simplest charge distribution with net charge zero. It’s the building block for understanding molecules and materials.”**

---

## Related Topics

### Within Electrostatics

- [Electric Charges](../electric-charges/index.md) — Understanding individual charges
- [Electric Field](../electric-field/index.md) — Field due to charges
- [Gauss’s Law](../gauss-law/index.md) — Alternative approach to fields
- [Electric Potential](../electric-potential/index.md) — Potential due to dipole

### Connected Chapters

- [Magnetism](../../magnetism/index.md) — Magnetic dipole (current loop) is analogous
- [Electromagnetic Induction](../../electromagnetic-induction/index.md) — Rotating dipoles in fields
- [Atoms and Nuclei](../../atoms-nuclei/index.md) — Atomic dipoles in spectroscopy

### Chemistry Connections

- Molecular polarity — HCl, H₂O are dipoles
- Intermolecular forces — Dipole-dipole interactions
- Solubility — “Like dissolves like” (polar in polar)

### Math Connections

- [Vectors](../../../mathematics/vector-algebra/index.md) — Dot product, cross product for $U$ and $\tau$
- [Trigonometry](../../../mathematics/trigonometry/index.md) — Angular dependence
- [Calculus](../../../mathematics/limits-continuity-differentiability/index.md) — Deriving field from potential

---

From TestGuru · our mock-test platform

## You've read Electric Dipole.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electrostatics&tg_exam=jee-main&tg_page=%2Fphysics%2Felectrostatics%2Felectric-dipole%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electrostatics/electric-dipole/",this.page.identifier="/physics/electrostatics/electric-dipole/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="electricField" id="anim-electricField-1795396423402116524"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-electricField-1795396423402116524")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electrostatics/electric-dipole/](https://jeenotes.in/physics/electrostatics/electric-dipole/) · raw HTML: `offline/physics/electrostatics/electric-dipole/index.html`_
