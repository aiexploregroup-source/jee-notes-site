---
title: "Electric Field"
source: "https://jeenotes.in/physics/electrostatics/electric-field/"
description: "Master electric field due to point charges, superposition, and field line visualization for JEE Physics"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 8"
html: "../../../../offline/physics/electrostatics/electric-field/index.html"
extracted: "2026-11-23"
---

> Master electric field due to point charges, superposition, and field line visualization for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Electric Charges and Coulomb’s Law](../electric-charges/index.md) — Force between charges
- Vector addition and resolution

## The Hook: Invisible Force Fields

> **★ Key point · Connect: Marvel's Force Fields**
>
> Remember in **Iron Man** when Tony Stark talks about “generating a local electromagnetic field”? Or in **Stranger Things** when Eleven creates force fields around objects? Or the lightning scene in **Thor** where electric energy radiates outward?
>
> These fictional force fields are inspired by a very real physics concept: the **electric field** — an invisible region of influence around every charged particle. You can’t see it, but it’s there, ready to push or pull any charge that enters it!

---

## What is an Electric Field?

> **★ Key point · Electric Field Definition**
>
> An **electric field** is the region around a charged object where another charged object experiences a force.
>
> **In simple terms:** Every charge creates an invisible “influence zone” around itself. Any other charge entering this zone will feel a push or pull.

### Why Do We Need the Concept?

**Without field concept:** “Charge A pushes charge B” — action at a distance (spooky!)

**With field concept:**

1. Charge A creates a field around itself
2. Charge B interacts with this field at its location
3. The field exerts force on B

This makes physics more intuitive — charges don’t “reach out” to each other; they interact through fields!

---

## Electric Field Intensity

> **★ Key point · Definition**
>
> The **electric field intensity** at a point is the force experienced by a unit positive test charge placed at that point.

$$\boxed{\vec{E} = \frac{\vec{F}}{q_0}}$$

where:

- $\vec{E}$ = electric field (N/C or V/m)
- $\vec{F}$ = force on test charge
- $q_0$ = small positive test charge

**Key Point:** $q_0$ must be small enough that it doesn’t disturb the source charge distribution.

---

## Electric Field Due to a Point Charge

For a point charge $Q$ at distance $r$:

$$\boxed{\vec{E} = k\frac{Q}{r^2}\hat{r}}$$

**Magnitude:**

$$\boxed{E = k\frac{|Q|}{r^2} = \frac{1}{4\pi\varepsilon_0}\frac{|Q|}{r^2}}$$

where $k = 9 \times 10^9$ N·m²/C²

### Interactive Demo: Visualize Electric Field Lines

See how electric field lines emanate from positive charges and terminate on negative charges:

**Direction:**

- **Positive charge:** Field points **radially outward** (away from charge)
- **Negative charge:** Field points **radially inward** (toward charge)

> **★ Key point · Memory Trick**
>
> **“Positive Pushes Out, Negative Pulls In”**
>
> Think of positive charge as a **repeller** — its field arrows point outward, ready to push other positive charges away.
>
> Negative charge is an **attractor** — its field arrows point inward, ready to pull positive charges in.

---

## Interactive Demo: Electric Field Visualization

Explore the interactive electric field simulator below. You can add and remove charges, drag them around, and observe how the field lines and force on a test charge change in real-time:

> **◐ In simple terms · How to Use This Visualization**
>
> - **Add charges:** Click “+q” or “-q” buttons, then click on canvas to place

> - **Move charges:** Drag any charge to reposition it

> - **Test charge:** The green charge shows the force direction at that point (drag it around!)

> - **Toggle views:** Switch between field lines, vectors, and equipotential lines

> - **Presets:** Try the preset configurations to see common field patterns

> - **Remove charge:** Double-click on a charge to delete it

Try the different presets and observe:

- **Single +q / -q:** Radial field pattern - field strength decreases with distance (inverse square law)
- **Dipole:** Field lines start from + and end on - (curved paths, denser near charges)
- **Like Charges:** Repulsion pattern - field lines never cross, symmetric about midpoint
- **Parallel Plates:** Uniform field between plates - field is constant everywhere!

---

## Properties of Electric Field

### 1. Vector Quantity

Electric field has both **magnitude and direction**.

For force on charge $q$ in field $\vec{E}$:

$$\boxed{\vec{F} = q\vec{E}}$$

### 2. Depends on Source, Not on Test Charge

Field $\vec{E}$ is created by the source charge. It exists whether or not you place a test charge there!

### 3. Inverse Square Law

Field strength decreases with square of distance:

- At distance $r$: $E$
- At distance $2r$: $E/4$
- At distance $3r$: $E/9$

---

## Principle of Superposition for Electric Fields

> **★ Key point · Superposition Principle**
>
> When multiple charges are present, the **net electric field** at a point is the **vector sum** of fields due to individual charges.

$$\boxed{\vec{E}_{net} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + ... + \vec{E}_n}$$

**Strategy for Multi-Charge Problems:**

1. Find field due to each charge **separately** (as if others don’t exist)
2. Resolve each field into **x and y components**
3. Add components: $E_x = \sum E_{ix}$, $E_y = \sum E_{iy}$
4. Find magnitude: $E = \sqrt{E_x^2 + E_y^2}$
5. Find direction: $\theta = \tan^{-1}\left(\frac{E_y}{E_x}\right)$

---

## Electric Field Lines (Lines of Force)

Electric field lines are imaginary lines that represent the electric field visually.

### Properties of Field Lines

> **◐ In simple terms · Field Line Rules**
>
> 1. **Start** from positive charges (or infinity)

> 2. **End** at negative charges (or infinity)

> 3. **Never cross** each other

> 4. **Tangent** at any point gives field direction at that point

> 5. **Density** (closeness) represents field strength

> 6. **Perpendicular** to the surface of a conductor

> 7. **Perpendicular** to equipotential surfaces

### Why Can’t Field Lines Cross?

If two lines crossed, there would be **two different field directions** at that point. But field at a point is unique — a test charge can only experience force in ONE direction!

> **★ Key point · Jawan Chase Scene**
>
> Think of electric field lines like the paths cars take in the **Jawan** train chase. Each car (test charge) follows one specific path (field line) — two cars can’t occupy the exact same point going in different directions!

### Number of Field Lines

For a charge $Q$, the number of field lines drawn is proportional to $|Q|$.

**Example:**

- Charge $+2q$: Draw 8 lines outward
- Charge $+q$: Draw 4 lines outward
- Charge $-q$: Draw 4 lines inward

---

## Electric Field Patterns for Common Configurations

### 1. Single Positive Charge

- Lines radiate **outward** in all directions
- Uniformly distributed in 3D (sphere)
- Density decreases with distance

### 2. Single Negative Charge

- Lines converge **inward** from all directions
- Uniformly distributed in 3D

### 3. Two Equal Positive Charges

- Lines repel each other
- Symmetric pattern
- Zero field at midpoint (by symmetry)

### 4. Positive and Negative Charges (Dipole)

- Lines start from positive, end at negative
- Curved paths
- Denser lines near charges

### 5. Parallel Plates

- **Uniform field** between plates (straight, parallel lines)
- Field outside ≈ 0
- $E = \frac{\sigma}{\varepsilon_0}$ (inside)

---

## Electric Field Due to Continuous Charge Distributions

For continuous distributions, sum becomes integral:

$$\vec{E} = \int d\vec{E} = \int k\frac{dq}{r^2}\hat{r}$$

### Linear Charge Distribution (Line of Charge)

Charge per unit length: $\lambda = \frac{dq}{dl}$

### Surface Charge Distribution (Sheet of Charge)

Charge per unit area: $\sigma = \frac{dq}{dA}$

### Volume Charge Distribution (Charged 3D Object)

Charge per unit volume: $\rho = \frac{dq}{dV}$

---

## Important Results for Standard Distributions

### 1. Infinite Line Charge

For an infinitely long line with linear charge density $\lambda$:

$$\boxed{E = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r}}$$

Direction: Radially outward (perpendicular to line)

### 2. Infinite Plane Sheet

For an infinite plane with surface charge density $\sigma$:

$$\boxed{E = \frac{\sigma}{2\varepsilon_0}}$$

**Amazing property:** Field is **uniform** (doesn’t depend on distance from sheet!)

### 3. Two Parallel Infinite Sheets (Opposite Charges)

Between plates: $E = \frac{\sigma}{\varepsilon_0}$ (fields add)

Outside plates: $E = 0$ (fields cancel)

This is the basis for **parallel plate capacitors**!

### 4. Uniformly Charged Spherical Shell (radius R, total charge Q)

**Outside** ($r > R$):

$$E = k\frac{Q}{r^2}$$

(behaves like point charge at center)

**On surface** ($r = R$):

$$E = k\frac{Q}{R^2}$$

**Inside** ($r < R$):

$$E = 0$$

(zero field inside a conductor!)

### 5. Uniformly Charged Solid Sphere (radius R, total charge Q)

**Outside** ($r > R$):

$$E = k\frac{Q}{r^2}$$

**Inside** ($r < R$):

$$\boxed{E = k\frac{Qr}{R^3} = \frac{Q}{4\pi\varepsilon_0 R^3} \cdot r}$$

Field **increases linearly** from center!

---

## Memory Tricks & Patterns

### Mnemonic for Field Formulas

**“Every Point Keeps Quitting at Radius-Squared”**

$E = k \frac{Q}{r^2}$ (for point charge)

### Pattern Recognition: Field Behavior

| Configuration | Field Dependence | Special Feature |
| --- | --- | --- |
| Point charge | $E \propto \frac{1}{r^2}$ | Inverse square |
| Infinite line | $E \propto \frac{1}{r}$ | Inverse (not square!) |
| Infinite plane | $E =$ constant | Independent of distance |
| Spherical shell (inside) | $E = 0$ | Zero field |
| Solid sphere (inside) | $E \propto r$ | Linear increase |

> **★ Key point · Dimensionality Pattern**
>
> **JEE High-Yield Pattern:**
>
> - 0D (point): $E \propto \frac{1}{r^2}$

> - 1D (line): $E \propto \frac{1}{r^1}$

> - 2D (plane): $E \propto \frac{1}{r^0} = \text{constant}$
>
> Dimension of source affects how field decreases!

---

## When to Use Electric Field vs. Coulomb’s Law

> **★ Key point · Decision Tree**
>
> **Use Electric Field ($\vec{E}$) when:**
>
> - One charge is much smaller (test charge)

> - Asked about field at a point (not force)

> - Multiple test charges in the same field

> - Dealing with field lines or field visualization
>
> **Use Coulomb’s Law directly when:**
>
> - Both charges are comparable

> - Asked specifically about force between two charges

> - Simple two-charge system

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Direction Confusion**
>
> **Wrong:** “Negative charge, so field is negative”
>
> **Correct:**
>
> - Field **magnitude** is always positive: $E = k\frac{|Q|}{r^2}$

> - Field **direction** points toward negative charge
>
> Field is a vector — magnitude and direction are separate!

> **⚠ Trap #2: Forgetting Superposition is Vector Addition**
>
> **Wrong:** Two fields of 3 N/C and 4 N/C → total = 7 N/C
>
> **Correct:** Check angle!
>
> - If same direction: $E = 3 + 4 = 7$ N/C

> - If opposite: $E = |4 - 3| = 1$ N/C

> - If perpendicular: $E = \sqrt{3^2 + 4^2} = 5$ N/C

> **⚠ Trap #3: Test Charge Affects Field**
>
> **Wrong:** “Large test charge, so field is large”
>
> **Correct:** Field is created by **source charge**, independent of test charge!
>
> $\vec{E} = \frac{\vec{F}}{q_0}$ — even if you increase $q_0$, both $\vec{F}$ and $q_0$ increase proportionally, so $\vec{E}$ stays same.

> **⚠ Trap #4: Field Inside Conductor**
>
> **Wrong:** “Conductor has charges, so field inside is large”
>
> **Correct:** In **electrostatic equilibrium**, field inside a conductor is **always zero**.
>
> Charges redistribute on the surface to make internal field zero!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> A point charge of $+5$ μC is placed at the origin. Find the electric field at point $(3, 4)$ m.
>
> **Solution:**
>
> Distance: $r = \sqrt{3^2 + 4^2} = 5$ m
>
> Field magnitude:
>
> $$E = k\frac{Q}{r^2} = 9 \times 10^9 \times \frac{5 \times 10^{-6}}{25} = 1800 \text{ N/C}$$
>
> Direction: Along line from origin to $(3, 4)$
>
> Unit vector: $\hat{r} = \frac{3\hat{i} + 4\hat{j}}{5}$
>
> $$\boxed{\vec{E} = 1800 \times \frac{3\hat{i} + 4\hat{j}}{5} = 1080\hat{i} + 1440\hat{j} \text{ N/C}}$$

> **↗ Connection · Problem 1.2**
>
> An electron is placed in a uniform electric field of $500$ N/C. Find the force on it.
>
> **Solution:**
>
> $$F = qE = (1.6 \times 10^{-19}) \times 500$$

$$\boxed{F = 8 \times 10^{-17} \text{ N}}$$
>
> Direction: Opposite to field (electron is negative)

> **↗ Connection · Problem 1.3**
>
> At what distance from a $10$ μC charge is the electric field $9000$ N/C?
>
> **Solution:**
>
> $$E = k\frac{Q}{r^2}$$

$$r^2 = k\frac{Q}{E} = 9 \times 10^9 \times \frac{10 \times 10^{-6}}{9000} = 10$$

$$\boxed{r = \sqrt{10} \approx 3.16 \text{ m}}$$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Two charges $+4$ μC and $-4$ μC are placed 20 cm apart. Find the electric field at the midpoint.
>
> **Solution:**
>
> Midpoint is 10 cm = 0.1 m from each charge.
>
> Field due to $+4$ μC (pointing away from it, i.e., to the right):
>
> $$E_1 = k\frac{4 \times 10^{-6}}{(0.1)^2} = 9 \times 10^9 \times \frac{4 \times 10^{-6}}{0.01} = 3.6 \times 10^6 \text{ N/C}$$
>
> Field due to $-4$ μC (pointing toward it, i.e., also to the right):
>
> $$E_2 = k\frac{4 \times 10^{-6}}{(0.1)^2} = 3.6 \times 10^6 \text{ N/C}$$
>
> Both fields point in the **same direction** (from + to -)!
>
> $$\boxed{E_{net} = E_1 + E_2 = 7.2 \times 10^6 \text{ N/C (from + toward -)}}$$

> **↗ Connection · Problem 2.2**
>
> Four charges $+q$ each are placed at the corners of a square of side $a$. Find the field at the center.
>
> **Solution:**
>
> By **symmetry**, fields from all four charges cancel out!
>
> Each charge creates field toward center with magnitude $E = k\frac{q}{r^2}$ where $r = \frac{a}{\sqrt{2}}$.
>
> But opposite charges create equal and opposite fields.
>
> $$\boxed{E_{net} = 0}$$
>
> **Key Insight:** Always check for symmetry first!

> **↗ Connection · Problem 2.3**
>
> An electric field $\vec{E} = 200\hat{i} + 300\hat{j}$ N/C exists in a region. Find the force on a $-2$ μC charge.
>
> **Solution:**
>
> $$\vec{F} = q\vec{E} = (-2 \times 10^{-6})(200\hat{i} + 300\hat{j})$$

$$\boxed{\vec{F} = -400\hat{i} - 600\hat{j} \text{ μN} = -0.4\hat{i} - 0.6\hat{j} \text{ mN}}$$
>
> Magnitude: $F = \sqrt{0.4^2 + 0.6^2} = 0.72$ mN

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A charge $+Q$ is uniformly distributed on a thin ring of radius $R$. Find the electric field at a point on the axis at distance $x$ from the center.
>
> **Solution:**
>
> Consider a small element $dq$ on the ring. Its distance from point P:
>
> $$r = \sqrt{R^2 + x^2}$$
>
> Field magnitude: $dE = k\frac{dq}{R^2 + x^2}$
>
> **By symmetry:** Perpendicular components cancel, only axial component survives.
>
> Axial component: $dE_x = dE \cos\theta = dE \frac{x}{\sqrt{R^2 + x^2}}$
>
> Total field:
>
> $$E = \int dE_x = \int k\frac{dq}{R^2 + x^2} \cdot \frac{x}{\sqrt{R^2 + x^2}}$$

$$E = \frac{kx}{(R^2 + x^2)^{3/2}} \int dq = \frac{kx}{(R^2 + x^2)^{3/2}} \cdot Q$$

$$\boxed{E = \frac{kQx}{(R^2 + x^2)^{3/2}}}$$
>
> **Special cases:**
>
> - At center ($x = 0$): $E = 0$ (by symmetry)

> - Far away ($x >> R$): $E \approx \frac{kQ}{x^2}$ (point charge)

> **↗ Connection · Problem 3.2**
>
> Two charges $+Q$ and $-Q$ are separated by distance $2a$. Find the electric field at a point on the perpendicular bisector at distance $r$ from midpoint.
>
> **Solution:**
>
> Distance from each charge: $\sqrt{r^2 + a^2}$
>
> Field due to $+Q$: magnitude $E_1 = \frac{kQ}{r^2 + a^2}$, direction away from $+Q$
>
> Field due to $-Q$: magnitude $E_2 = \frac{kQ}{r^2 + a^2}$, direction toward $-Q$
>
> **By symmetry:** Components along the bisector cancel, perpendicular components add.
>
> Component perpendicular to line joining charges:
>
> $$E_{\perp} = 2E_1 \cos\theta = 2 \frac{kQ}{r^2 + a^2} \cdot \frac{a}{\sqrt{r^2 + a^2}}$$

$$\boxed{E = \frac{2kQa}{(r^2 + a^2)^{3/2}}}$$
>
> Direction: From $+Q$ to $-Q$ (perpendicular to bisector)
>
> **Note:** This is the field of an electric **dipole** on equatorial line!

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| Electric field definition | $\vec{E} = \frac{\vec{F}}{q_0}$ (force per unit charge) |
| Point charge field | $E = k\frac{Q}{r^2}$, direction: away from + / toward - |
| Superposition | $\vec{E}_{net} = \vec{E}_1 + \vec{E}_2 + ...$ (vector sum) |
| Field lines | Start from +, end at -, never cross, density = strength |
| Infinite line charge | $E = \frac{\lambda}{2\pi\varepsilon_0 r}$ |
| Infinite plane sheet | $E = \frac{\sigma}{2\varepsilon_0}$ (uniform!) |
| Spherical shell (inside) | $E = 0$ |
| Solid sphere (inside) | $E = k\frac{Qr}{R^3}$ (linear in $r$) |
| Conductor (electrostatic) | $E_{inside} = 0$, field perpendicular to surface |

**JEE Weightage:** 2-3 questions in JEE Main, 1-2 in JEE Advanced (often combined with other topics)

**Time-Saver:** For symmetric configurations, use symmetry to eliminate components before calculating!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Electric field exists independently** — it’s created by source charges, not by test charges

> 2. **Field is a vector** — always use vector addition (superposition) for multiple sources

> 3. **Field lines never cross** — unique field direction at each point

> 4. **Symmetry is your best friend** — use it to simplify calculations dramatically

> 5. **Field inside conductor is zero** — charges redistribute to cancel internal field
>
> **“The electric field is nature’s way of transmitting force. Master the field, and you master electrostatics.”**

---

## Related Topics

### Within Electrostatics

- [Electric Charges](../electric-charges/index.md) — The sources of electric field
- [Electric Dipole](../electric-dipole/index.md) — Field patterns for dipole
- [Gauss’s Law](../gauss-law/index.md) — Advanced method for symmetric fields
- [Electric Potential](../electric-potential/index.md) — Energy aspect of electric field

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) — Electric field drives current
- [Magnetism](../../magnetism/index.md) — Moving charges create magnetic fields
- [Electromagnetic Waves](../../electromagnetic-waves/index.md) — Oscillating electric and magnetic fields

### Math Connections

- [Vectors](../../../mathematics/vector-algebra/index.md) — Essential for field calculations
- [Calculus](../../../mathematics/limits-continuity-differentiability/index.md) — Integration for continuous distributions
- [Coordinate Geometry](../../../mathematics/coordinate-geometry/index.md) — Field in 2D/3D space

---

From TestGuru · our mock-test platform

## You've read Electric Field.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electrostatics&tg_exam=jee-main&tg_page=%2Fphysics%2Felectrostatics%2Felectric-field%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electrostatics/electric-field/",this.page.identifier="/physics/electrostatics/electric-field/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="electricFieldVisualizer" id="anim-electricFieldVisualizer-1795396423395661921"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-electricFieldVisualizer-1795396423395661921")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electrostatics/electric-field/](https://jeenotes.in/physics/electrostatics/electric-field/) · raw HTML: `offline/physics/electrostatics/electric-field/index.html`_
