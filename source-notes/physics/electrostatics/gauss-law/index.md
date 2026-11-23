---
title: "Gauss's Law"
source: "https://jeenotes.in/physics/electrostatics/gauss-law/"
description: "Master Gauss's law, electric flux, and applications to symmetric charge distributions for JEE Physics"
updated: "2026-10-18"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 8"
html: "../../../../offline/physics/electrostatics/gauss-law/index.html"
extracted: "2026-11-23"
---

> Master Gauss's law, electric flux, and applications to symmetric charge distributions for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Electric Field](../electric-field/index.md) — Field concept and superposition
- [Electric Charges](../electric-charges/index.md) — Charge distributions
- Vector dot product and surface integrals (basic calculus)

## The Hook: Why is Lightning Safe Inside a Car?

> **★ Key point · Connect: The Car Cage**
>
> You’ve probably heard: “If lightning strikes while you’re in a car, you’re safe!” But why? The electricity should fry you, right?
>
> Or think of **Iron Man’s** suit protecting him from electric attacks. Or in **Stranger Things**, how metal cages protect from electromagnetic disturbances?
>
> The secret is **Gauss’s Law** — one of the most powerful and elegant laws in physics. It explains why electric charge on a conductor always moves to the surface, leaving the interior completely field-free. This is your natural “Faraday cage”!

---

## What is Electric Flux?

Before understanding Gauss’s Law, we need to understand **electric flux**.

> **★ Key point · Electric Flux Definition**
>
> **Electric flux** through a surface is a measure of “how many” electric field lines pass through that surface.

Think of it like water flow:

- More water through a pipe → larger flux
- Pipe perpendicular to flow → maximum flux
- Pipe parallel to flow → zero flux

---

## Electric Flux: Mathematical Definition

For a **uniform field** $\vec{E}$ and a **flat surface** of area $A$:

$$\boxed{\phi = \vec{E} \cdot \vec{A} = EA\cos\theta}$$

where:

- $\phi$ = electric flux (unit: N·m²/C or V·m)
- $\vec{A}$ = area vector (magnitude $A$, direction perpendicular to surface)
- $\theta$ = angle between $\vec{E}$ and $\vec{A}$

**For a general surface** (non-uniform field, curved surface):

$$\boxed{\phi = \int \vec{E} \cdot d\vec{A}}$$

This is a **surface integral** — sum over all small area elements.

> **★ Key point · Memory Trick**
>
> **“Flux is Field × Area × Alignment”**
>
> - Maximum flux when field is **perpendicular** to surface ($\theta = 0°$, $\cos\theta = 1$)

> - Zero flux when field is **parallel** to surface ($\theta = 90°$, $\cos\theta = 0$)

> - Negative flux when field **enters** the surface (backward)
>
> Think of **rain falling on a roof**:
>
> - Flat roof (horizontal) → maximum rain flux

> - Vertical wall → zero rain flux

> - Tilted roof → intermediate flux

---

## Gauss’s Law: Statement

> **★ Key point · Gauss's Law**
>
> **The total electric flux through any closed surface is equal to the net charge enclosed by that surface divided by ε₀.**

$$\boxed{\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enclosed}}{\varepsilon_0}}$$

where:

- $\oint$ = integral over a **closed surface** (called Gaussian surface)
- $Q_{enclosed}$ = net charge **inside** the closed surface
- $\varepsilon_0 = 8.85 \times 10^{-12}$ C²/N·m² (permittivity of free space)

**Alternative form:**

$$\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enclosed}}{\varepsilon_0} = 4\pi k\,Q_{enclosed}$$

where $k = 9 \times 10^9$ N·m²/C²

### Interactive Demo: Visualize Gauss’s Law

See how electric field lines pass through Gaussian surfaces.

---

## Understanding Gauss’s Law

### Key Insights

1. **Only enclosed charge matters**

   - Charges outside the surface? Irrelevant!
   - Even if they create field at the surface, their net flux = 0
2. **Any closed surface works**

   - Sphere, cube, cylinder, irregular blob — doesn’t matter!
   - Flux depends only on enclosed charge
3. **Total flux, not local flux**

   - Field may vary over surface
   - We care about the **integral** (total), not pointwise values
4. **It’s always true**

   - But useful for calculating $\vec{E}$ only with **high symmetry**

> **◐ In simple terms · Jawan Strategy Scene**
>
> In **Jawan** (2023), SRK says “Count the people inside the vault, not outside.” Gauss’s Law is similar — only the charge **inside** your imaginary surface contributes to net flux, even though outside charges create fields everywhere!

---

## Why Gauss’s Law Works: Intuition

Imagine a point charge $+Q$ and draw a **sphere** around it:

- Field at surface: $E = k\frac{Q}{r^2}$
- Surface area of sphere: $A = 4\pi r^2$
- Flux: $\phi = E \times A = k\frac{Q}{r^2} \times 4\pi r^2 = 4\pi kQ = \frac{Q}{\varepsilon_0}$

**Key observation:** $r$ cancels! Flux is **same for any radius**.

If you use a **different shape** (cube, cylinder), flux is still the same — field lines that enter eventually leave, and only the net “source” inside matters.

> **★ Key point · Field Lines Interpretation**
>
> **Flux = Number of field lines through surface**
>
> - Each unit charge $q$ produces $\frac{q}{\varepsilon_0}$ field lines

> - Count lines passing **outward** (positive) vs **inward** (negative)

> - Net flux = $\frac{Q_{enclosed}}{\varepsilon_0}$
>
> This is why Gauss’s Law is so intuitive!

---

## When to Use Gauss’s Law

Gauss’s Law is **always true**, but it’s **useful for calculating $\vec{E}$** only when there’s **symmetry**.

> **★ Key point · Decision Tree**
>
> **Use Gauss’s Law when charge distribution has:**
>
> 1. **Spherical symmetry** (sphere, spherical shell)

> 2. **Cylindrical symmetry** (infinite line, infinite cylinder)

> 3. **Planar symmetry** (infinite plane, parallel plates)
>
> **Don’t use Gauss’s Law when:**
>
> - Asymmetric charge distribution (use superposition)

> - Finite objects without symmetry

> - Dipoles, arbitrary shapes
>
> **Why symmetry matters:** With symmetry, $\vec{E}$ is constant in magnitude and perpendicular to surface, making $\oint \vec{E} \cdot d\vec{A} = E \cdot A$ (simple algebra instead of hard integral).

---

## Strategy for Applying Gauss’s Law

1. **Identify symmetry** (spherical, cylindrical, planar)
2. **Choose Gaussian surface** matching the symmetry
3. **Find enclosed charge** $Q_{enclosed}$
4. **Simplify flux integral** using symmetry
5. **Solve for $E$**

Let’s see this in action!

---

## Application 1: Uniformly Charged Spherical Shell

**Setup:**

- Spherical shell of radius $R$
- Total charge $Q$ uniformly distributed on surface
- Find field at distance $r$ from center

### Case 1: Outside the Shell ($r > R$)

**Gaussian surface:** Sphere of radius $r > R$

**Enclosed charge:** $Q_{enclosed} = Q$ (entire shell is inside)

**By symmetry:** Field is radial and has same magnitude at all points on Gaussian surface.

$$\oint \vec{E} \cdot d\vec{A} = E \oint dA = E \times 4\pi r^2$$

**Gauss’s Law:**

$$E \times 4\pi r^2 = \frac{Q}{\varepsilon_0}$$

$$\boxed{E = \frac{Q}{4\pi\varepsilon_0 r^2} = k\frac{Q}{r^2}}$$

**Key Result:** Outside looks like a **point charge at center**!

### Case 2: Inside the Shell ($r < R$)

**Gaussian surface:** Sphere of radius $r < R$

**Enclosed charge:** $Q_{enclosed} = 0$ (charge is on the shell, not inside)

**Gauss’s Law:**

$$E \times 4\pi r^2 = \frac{0}{\varepsilon_0} = 0$$

$$\boxed{E = 0}$$

**Amazing result:** Field **inside** a uniformly charged shell is **zero** everywhere!

> **★ Key point · Why Lightning Can't Harm You in a Car**
>
> Your car is a (roughly) spherical metal shell. Charge distributes on the **surface**, making the field **inside zero**.
>
> Even if lightning strikes (putting huge charge on the car), you’re safe inside — no electric field!
>
> This is called a **Faraday cage**. It’s used to:
>
> - Protect sensitive electronics

> - Shield MRI machines

> - Keep you safe in airplanes during lightning

> - Protect Iron Man inside his metal suit!

---

## Application 2: Uniformly Charged Solid Sphere

**Setup:**

- Solid sphere of radius $R$
- Total charge $Q$ uniformly distributed throughout volume
- Volume charge density: $\rho = \frac{Q}{\frac{4}{3}\pi R^3} = \frac{3Q}{4\pi R^3}$

### Case 1: Outside ($r > R$)

Same as spherical shell:

$$\boxed{E = k\frac{Q}{r^2}}$$

### Case 2: Inside ($r < R$)

**Gaussian surface:** Sphere of radius $r < R$

**Enclosed charge:**

$$Q_{enclosed} = \rho \times \text{volume} = \frac{3Q}{4\pi R^3} \times \frac{4}{3}\pi r^3 = Q\frac{r^3}{R^3}$$

**Gauss’s Law:**

$$E \times 4\pi r^2 = \frac{Q r^3/R^3}{\varepsilon_0}$$

$$\boxed{E = \frac{Q}{4\pi\varepsilon_0 R^3} \cdot r = k\frac{Qr}{R^3}}$$

**Key Result:** Field **increases linearly** from center!

- At center ($r = 0$): $E = 0$
- At surface ($r = R$): $E = k\frac{Q}{R^2}$
- Outside ($r > R$): $E = k\frac{Q}{r^2}$

> **★ Key point · Pattern Recognition**
>
> **Inside solid sphere:** $E \propto r$ (linear)
>
> **Outside sphere (solid or shell):** $E \propto \frac{1}{r^2}$ (inverse square)
>
> **Inside spherical shell:** $E = 0$ (zero!)
>
> Graph this — it’s a common JEE question!

---

## Application 3: Infinite Line Charge

**Setup:**

- Infinitely long line with uniform linear charge density $\lambda$ (C/m)
- Find field at perpendicular distance $r$

**Gaussian surface:** Cylinder of radius $r$ and length $L$ (axis along the line charge)

**By symmetry:** Field is radial (perpendicular to line) and has same magnitude at distance $r$.

**Flux calculation:**

- Through curved surface: $\phi = E \times 2\pi rL$ (field perpendicular to surface)
- Through flat ends: $\phi = 0$ (field parallel to ends)

**Enclosed charge:** $Q_{enclosed} = \lambda L$

**Gauss’s Law:**

$$E \times 2\pi rL = \frac{\lambda L}{\varepsilon_0}$$

$$\boxed{E = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r}}$$

**Direction:** Radially outward (if $\lambda > 0$)

> **◐ In simple terms · Compare with Point Charge**
>
> - Point charge: $E \propto \frac{1}{r^2}$

> - Line charge: $E \propto \frac{1}{r}$ (falls off slower!)
>
> Why? Line extends to infinity, so more charge contributes as you go farther out.

---

## Application 4: Infinite Plane Sheet

**Setup:**

- Infinite plane with uniform surface charge density $\sigma$ (C/m²)
- Find field at distance $r$ from plane

**Gaussian surface:** Cylindrical “pillbox” with flat ends parallel to sheet, area $A$ each

**By symmetry:** Field is perpendicular to sheet and has same magnitude on both sides.

**Flux calculation:**

- Through flat ends: $\phi = 2EA$ (field perpendicular, same on both sides)
- Through curved surface: $\phi = 0$ (field parallel)

**Enclosed charge:** $Q_{enclosed} = \sigma A$

**Gauss’s Law:**

$$2EA = \frac{\sigma A}{\varepsilon_0}$$

$$\boxed{E = \frac{\sigma}{2\varepsilon_0}}$$

**Amazing result:** Field is **uniform** — doesn’t depend on distance from plane!

**Direction:** Perpendicular to plane, away from plane (if $\sigma > 0$)

> **★ Key point · Infinite Plane Superpower**
>
> **The field doesn’t decrease with distance!**
>
> This seems weird, but it’s because the plane extends to infinity in all directions. As you move away, more distant parts of the plane contribute, exactly compensating for the $1/r^2$ decrease.
>
> **Practical use:** Parallel plate capacitors approximate this (for points not too near edges).

---

## Application 5: Two Parallel Infinite Planes (Opposite Charges)

**Setup:**

- Two parallel planes with surface charge densities $+\sigma$ and $-\sigma$

**Field due to each plane:**

- Positive plane: $E_+ = \frac{\sigma}{2\varepsilon_0}$ (pointing away)
- Negative plane: $E_- = \frac{\sigma}{2\varepsilon_0}$ (pointing toward it)

### Three Regions

1. **Left of both planes:** Fields oppose → cancel

   $$E = \frac{\sigma}{2\varepsilon_0} - \frac{\sigma}{2\varepsilon_0} = 0$$
2. **Between the planes:** Fields add (both point left to right)

   $$\boxed{E = \frac{\sigma}{2\varepsilon_0} + \frac{\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0}}$$
3. **Right of both planes:** Fields oppose → cancel

   $$E = 0$$

**Result:** Uniform field $\frac{\sigma}{\varepsilon_0}$ **only between plates**, zero outside!

This is the principle of **parallel plate capacitors**.

---

## Application 6: Infinite Cylindrical Shell

**Setup:**

- Infinite cylindrical shell of radius $R$
- Surface charge density $\sigma$ (or linear charge density $\lambda = 2\pi R\sigma$)

### Case 1: Outside ($r > R$)

Same as infinite line:

$$\boxed{E = \frac{\lambda}{2\pi\varepsilon_0 r}}$$

### Case 2: Inside ($r < R$)

Enclosed charge = 0:

$$\boxed{E = 0}$$

Same principle as spherical shell — field inside is zero!

---

## Summary of Important Results

| Configuration | Region | Electric Field |
| --- | --- | --- |
| Spherical shell (charge $Q$, radius $R$) | $r < R$ | $E = 0$ |
|  | $r \geq R$ | $E = k\frac{Q}{r^2}$ |
| Solid sphere (charge $Q$, radius $R$) | $r < R$ | $E = k\frac{Qr}{R^3}$ |
|  | $r \geq R$ | $E = k\frac{Q}{r^2}$ |
| Infinite line (charge density $\lambda$) | All $r$ | $E = \frac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite plane (charge density $\sigma$) | All $r$ | $E = \frac{\sigma}{2\varepsilon_0}$ |
| Two parallel planes ($\pm\sigma$) | Between | $E = \frac{\sigma}{\varepsilon_0}$ |
|  | Outside | $E = 0$ |

---

## Memory Tricks & Patterns

### Mnemonic for Gauss’s Law

**“Quits Every Area”** → $Q = \varepsilon_0 \oint E \cdot dA$

Or: **“Flux Equals Charge Over Epsilon”** → $\phi = \frac{Q}{\varepsilon_0}$

### Pattern Recognition

> **★ Key point · JEE High-Yield Pattern: Shells vs Solids**
>
> | Type | Inside | Outside |

> | --- | --- | --- |

> | **Shell** (spherical or cylindrical) | $E = 0$ | $E = \frac{1}{r^2}$ or $\frac{1}{r}$ |

> | **Solid** (sphere or cylinder) | $E \propto r$ | $E = \frac{1}{r^2}$ or $\frac{1}{r}$ |
>
> **Rule:**
>
> - **Shell:** Charge on surface → zero field inside

> - **Solid:** Charge throughout → field increases linearly inside

### Dimensional Analysis

> **★ Key point · Quick Check for Units**
>
> $\frac{\sigma}{\varepsilon_0}$ should have units of electric field:
>
> $$\frac{\text{C/m}^2}{\text{C}^2/\text{N}\cdot\text{m}^2} = \frac{\text{N}}{\text{C}} = \text{E field units} \checkmark$$
>
> Always check dimensions to avoid formula mistakes!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Using Gauss's Law Without Symmetry**
>
> **Wrong:** “I’ll use Gauss’s Law for this dipole”
>
> **Correct:** Gauss’s Law is **always true**, but **only useful** with symmetry!
>
> For dipole, use superposition instead.

> **⚠ Trap #2: Forgetting Direction**
>
> **Wrong:** Field inside spherical shell is zero, so it’s always zero
>
> **Correct:** Field is zero only in **electrostatic equilibrium** for conductors, or by symmetry for uniformly charged shells.
>
> If charges are moving, field can exist inside!

> **⚠ Trap #3: Enclosed Charge Confusion**
>
> **Wrong:** “Large charge outside, so large flux”
>
> **Correct:** Only **enclosed** charge matters for Gauss’s Law!
>
> Outside charges create field, but their net flux through a closed surface is **zero** (lines that enter also exit).

> **⚠ Trap #4: Two Planes Formula**
>
> **Wrong:** Between two planes with $+\sigma$ each: $E = \frac{2\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0}$
>
> **Correct:** Check if they’re **opposite** or **same** sign!
>
> - Opposite ($+\sigma$ and $-\sigma$): $E = \frac{\sigma}{\varepsilon_0}$ (between), $E = 0$ (outside)

> - Same sign ($+\sigma$ and $+\sigma$): $E = 0$ (between), $E = \frac{\sigma}{\varepsilon_0}$ (outside)

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> A charge of $20$ μC is enclosed by a Gaussian sphere of radius 10 cm. Find the electric flux through the sphere.
>
> **Solution:**
>
> By Gauss’s Law:
>
> $$\phi = \frac{Q_{enclosed}}{\varepsilon_0}$$
>
> We can also use: $\phi = 4\pi k Q$ (since $\frac{1}{\varepsilon_0} = 4\pi k$) where $k = 9 \times 10^9$
>
> $$\phi = \frac{20 \times 10^{-6}}{8.85 \times 10^{-12}} = 2.26 \times 10^6 \text{ N}\cdot\text{m}^2/\text{C}$$
>
> Or: $\phi = 4\pi k Q = 4\pi \times 9 \times 10^9 \times 20 \times 10^{-6}$
>
> $$\boxed{\phi = 2.26 \times 10^6 \text{ N}\cdot\text{m}^2/\text{C}}$$
>
> **Note:** Flux is **independent of radius**!

> **↗ Connection · Problem 1.2**
>
> An infinite plane has surface charge density $2 \times 10^{-6}$ C/m². Find the electric field near the plane.
>
> **Solution:**
>
> $$E = \frac{\sigma}{2\varepsilon_0} = \frac{2 \times 10^{-6}}{2 \times 8.85 \times 10^{-12}}$$

$$E = \frac{10^{-6}}{8.85 \times 10^{-12}} = 1.13 \times 10^5 \text{ N/C}$$

$$\boxed{E \approx 1.13 \times 10^5 \text{ N/C}}$$

> **↗ Connection · Problem 1.3**
>
> A uniformly charged spherical shell of radius 10 cm has total charge $5$ μC. Find the field at (a) 5 cm from center, (b) 15 cm from center.
>
> **Solution:**
>
> **(a) Inside ($r = 5$ cm $< R$):**
>
> $$\boxed{E = 0}$$
>
> **(b) Outside ($r = 15$ cm $> R$):**
>
> $$E = k\frac{Q}{r^2} = 9 \times 10^9 \times \frac{5 \times 10^{-6}}{(0.15)^2}$$

$$E = 9 \times 10^9 \times \frac{5 \times 10^{-6}}{0.0225} = 2 \times 10^6 \text{ N/C}$$

$$\boxed{E = 2 \times 10^6 \text{ N/C}}$$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A uniformly charged solid sphere of radius $R$ has total charge $Q$. At what distance from the center is the electric field maximum?
>
> **Solution:**
>
> **Inside ($r < R$):** $E = k\frac{Qr}{R^3}$ (increases linearly)
>
> **Outside ($r > R$):** $E = k\frac{Q}{r^2}$ (decreases)
>
> Maximum is at the **boundary** where they meet: $r = R$
>
> $$E_{max} = k\frac{Q}{R^2}$$

$$\boxed{r = R \text{ (at the surface)}}$$

> **↗ Connection · Problem 2.2**
>
> Two parallel infinite planes have charge densities $+\sigma$ and $+3\sigma$. Find the electric field in all three regions.
>
> **Solution:**
>
> Let the $+\sigma$ plane be on the left and the $+3\sigma$ plane on the right. Each positive sheet produces a field **away from itself** on both sides:
>
> $E_1 = \frac{\sigma}{2\varepsilon_0}$ (due to $+\sigma$), $\quad E_2 = \frac{3\sigma}{2\varepsilon_0}$ (due to $+3\sigma$)
>
> **Region I (left of both):**

> Both point left: $E = E_1 + E_2 = \frac{\sigma}{2\varepsilon_0} + \frac{3\sigma}{2\varepsilon_0} = \frac{2\sigma}{\varepsilon_0}$ (leftward)
>
> **Region II (between):**

> $E_1$ points right, $E_2$ points left:

> $E = E_2 - E_1 = \frac{3\sigma}{2\varepsilon_0} - \frac{\sigma}{2\varepsilon_0} = \frac{\sigma}{\varepsilon_0}$ (leftward, toward the $+\sigma$ plane)
>
> **Region III (right of both):**

> Both point right: $E = \frac{2\sigma}{\varepsilon_0}$ (rightward)
>
> $$\boxed{E_I = E_{III} = \frac{2\sigma}{\varepsilon_0} \text{ (pointing away from the planes)}, \quad E_{II} = \frac{\sigma}{\varepsilon_0} \text{ (toward the } +\sigma \text{ plane)}}$$

> **↗ Connection · Problem 2.3**
>
> An infinite line charge with $\lambda = 5$ μC/m lies along the z-axis. Find the electric field at distance 2 m from the line.
>
> **Solution:**
>
> $$E = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r}$$

$$E = \frac{2 \times 9 \times 10^9 \times 5 \times 10^{-6}}{2}$$

$$E = \frac{9 \times 10^4}{2} = 4.5 \times 10^4 = 45000 \text{ N/C}$$

$$\boxed{E = 4.5 \times 10^4 \text{ N/C (radially outward)}}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A uniformly charged solid sphere of radius $R$ and charge density $\rho$ has a spherical cavity of radius $R/2$ with center at distance $R/2$ from the sphere’s center. Find the field at the center of the cavity.
>
> **Solution:**
>
> **Superposition approach:** Treat the cavity as the full sphere (charge density $\rho$) plus a small sphere of charge density $-\rho$ filling the cavity.
>
> Let O be the centre of the large sphere and P the centre of the cavity, with $\vec{d} = \overrightarrow{OP}$, $|\vec{d}| = R/2$.
>
> **Due to large (full) sphere:**

> P is inside, at distance $r = R/2$ from O:
>
> $$\vec{E}_1 = \frac{\rho \vec{r}}{3\varepsilon_0} = \frac{\rho \vec{d}}{3\varepsilon_0}, \quad E_1 = \frac{\rho (R/2)}{3\varepsilon_0} = \frac{\rho R}{6\varepsilon_0}$$
>
> (away from O, toward P)
>
> **Due to the $-\rho$ sphere (the cavity):**

> P is at the centre of this sphere, so by symmetry $\vec{E}_2 = 0$.
>
> **Net field at P:**
>
> $$\vec{E} = \vec{E}_1 + \vec{E}_2 = \frac{\rho \vec{d}}{3\varepsilon_0}$$

$$\boxed{E = \frac{\rho R}{6\varepsilon_0}}$$
>
> Direction: along $\overrightarrow{OP}$, from the centre of the large sphere toward the cavity centre (for $\rho > 0$).
>
> **Bonus:** For any point $\vec{r}$ inside the cavity, $\vec{E} = \frac{\rho}{3\varepsilon_0}\left[\vec{r} - (\vec{r} - \vec{d})\right] = \frac{\rho \vec{d}}{3\varepsilon_0}$, so the field is **uniform** throughout the cavity.

> **↗ Connection · Problem 3.2**
>
> A non-conducting sphere of radius $R$ has charge density $\rho(r) = \rho_0 \frac{r}{R}$ (varies linearly with $r$). Find the electric field inside and outside.
>
> **Solution:**
>
> **Outside ($r > R$):**
>
> Total charge first:
>
> $$Q = \int_0^R \rho(r) \cdot 4\pi r^2 \, dr = \int_0^R \rho_0 \frac{r}{R} \cdot 4\pi r^2 \, dr$$

$$Q = \frac{4\pi\rho_0}{R} \int_0^R r^3 \, dr = \frac{4\pi\rho_0}{R} \cdot \frac{R^4}{4} = \pi\rho_0 R^3$$
>
> Outside: $E = k\frac{Q}{r^2} = k\frac{\pi\rho_0 R^3}{r^2}$
>
> $$\boxed{E_{out} = \frac{\rho_0 R^3}{4\varepsilon_0 r^2}}$$
>
> **Inside ($r < R$):**
>
> Enclosed charge:
>
> $$Q(r) = \int_0^r \rho_0 \frac{r'}{R} \cdot 4\pi r'^2 \, dr' = \frac{4\pi\rho_0}{R} \cdot \frac{r^4}{4} = \frac{\pi\rho_0 r^4}{R}$$
>
> Gauss’s Law:
>
> $$E \cdot 4\pi r^2 = \frac{Q(r)}{\varepsilon_0} = \frac{\pi\rho_0 r^4}{R\varepsilon_0}$$

$$E = \frac{\rho_0 r^2}{4\varepsilon_0 R}$$

$$\boxed{E_{in} = \frac{\rho_0 r^2}{4\varepsilon_0 R}}$$
>
> **Note:** Field inside varies as $r^2$ (not linear) because density varies with $r$!

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| Electric flux | $\phi = \oint \vec{E} \cdot d\vec{A}$ |
| Gauss’s Law | $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enclosed}}{\varepsilon_0}$ |
| Spherical shell (inside) | $E = 0$ |
| Spherical shell (outside) | $E = k\frac{Q}{r^2}$ |
| Solid sphere (inside) | $E = k\frac{Qr}{R^3}$ |
| Solid sphere (outside) | $E = k\frac{Q}{r^2}$ |
| Infinite line charge | $E = \frac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite plane sheet | $E = \frac{\sigma}{2\varepsilon_0}$ |
| Two parallel planes (opposite) | $E = \frac{\sigma}{\varepsilon_0}$ (between), $E = 0$ (outside) |
| Faraday cage | Field inside conductor = 0 (electrostatics) |

**JEE Weightage:** 2-3 questions in JEE Main, 1-2 in JEE Advanced (often combined with capacitors or conductors)

**Time-Saver:** For symmetric problems, Gauss’s Law gives instant answers — memorize the standard results!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Gauss’s Law relates flux to enclosed charge** — outside charges don’t contribute to net flux

> 2. **Use Gauss’s Law only with symmetry** — spherical, cylindrical, or planar

> 3. **Field inside shell is zero** — this is why Faraday cages work

> 4. **Field inside solid increases linearly** — enclosed charge increases with volume

> 5. **Infinite plane gives uniform field** — doesn’t decrease with distance
>
> **“Gauss’s Law is the most elegant shortcut in electrostatics. When symmetry is your friend, Gauss’s Law is your superpower.”**

---

## Related Topics

### Within Electrostatics

- [Electric Charges](../electric-charges/index.md) — Source of electric field
- [Electric Field](../electric-field/index.md) — What Gauss’s Law calculates
- [Electric Potential](../electric-potential/index.md) — Energy aspect of fields
- [Capacitors](../capacitors/index.md) — Applications of parallel plate field

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) — Conductors and charge flow
- [Magnetism](../../magnetism/index.md) — Analogous Gauss’s Law for magnetic fields
- [Electromagnetic Induction](../../electromagnetic-induction/index.md) — Faraday’s Law (flux concept)

### Math Connections

- [Vectors](../../../mathematics/vector-algebra/index.md) — Dot product for flux
- [Calculus](../../../mathematics/limits-continuity-differentiability/index.md) — Surface integrals
- [Coordinate Geometry](../../../mathematics/coordinate-geometry/index.md) — 3D surfaces

---

From TestGuru · our mock-test platform

## You've read Gauss's Law.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electrostatics&tg_exam=jee-main&tg_page=%2Fphysics%2Felectrostatics%2Fgauss-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electrostatics/gauss-law/",this.page.identifier="/physics/electrostatics/gauss-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="electricField" id="anim-electricField-1795396423409293619"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-electricField-1795396423409293619")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electrostatics/gauss-law/](https://jeenotes.in/physics/electrostatics/gauss-law/) · raw HTML: `offline/physics/electrostatics/gauss-law/index.html`_
