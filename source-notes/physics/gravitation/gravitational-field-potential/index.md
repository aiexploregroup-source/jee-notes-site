---
title: "Gravitational Field and Potential"
source: "https://jeenotes.in/physics/gravitation/gravitational-field-potential/"
description: "Master gravitational field intensity, potential, and potential energy concepts for JEE Physics"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 8"
html: "../../../../offline/physics/gravitation/gravitational-field-potential/index.html"
extracted: "2026-11-23"
---

> Master gravitational field intensity, potential, and potential energy concepts for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Law of Universal Gravitation](../universal-gravitation/index.md) — Force between masses
- [Work and Energy](../../work-energy-power/work-done/index.md) — Work and energy concepts
- [Potential Energy](../../work-energy-power/potential-energy/index.md) — Foundation for gravitational PE

---

## The Hook: Why Does Water Flow Downhill?

> **★ Key point · Connect: Interstellar → Physics**
>
> In **Interstellar**, when Cooper’s team descends to Miller’s planet near the black hole Gargantua, they enter a region of **intense gravitational field**. Time slows down, and escaping requires enormous energy.
>
> Similarly, on Earth:
>
> - Water flows downhill — from **high gravitational potential** to low

> - Satellites stay in orbit — balanced between kinetic and **potential energy**

> - Escape velocity depends on **how deep** you are in Earth’s gravitational well
>
> **The concept:** Every point in space has a **gravitational potential** — a measure of how much energy it takes to get there. Understanding this transforms problems from force-calculations to energy-calculations.
>
> **Energy approach > Force approach** for many JEE problems!

---

## The Core Concept

### Gravitational Field

**Gravitational field intensity** $\vec{E}$ at a point is the gravitational force per unit mass experienced by a test mass placed there.

$$\boxed{\vec{E} = \frac{\vec{F}}{m} = -\frac{GM}{r^2}\hat{r}}$$

**Units:** N/kg or m/s² (same as acceleration!)

**In simple terms:** “Gravitational field tells you the ‘strength’ of gravity at any point. It’s the acceleration a mass would experience there.”

**Note:** $\vec{E} = \vec{g}$ (Field intensity = acceleration due to gravity)

### Why the Negative Sign?

The negative sign indicates direction: field points **towards** the mass M (attractive).

> **◐ In simple terms · Field Lines**
>
> Gravitational field lines:
>
> - Always point **towards** the mass (gravity attracts)

> - Density of lines indicates field strength

> - Never cross each other

> - Extend to infinity (long-range force)
>
> For Earth: Field lines point radially inward toward center.

---

## Gravitational Potential

### Definition

**Gravitational potential** V at a point is the work done per unit mass in bringing a test mass from infinity to that point.

$$\boxed{V = -\frac{GM}{r}}$$

**Units:** J/kg or m²/s²

**Sign convention:**

- V = 0 at infinity (reference point)
- V is **always negative** (you need to do negative work against attractive gravity)

### Interactive Demo: Visualize Gravitational Field

See how gravitational field lines and potential vary around a mass.

**In simple terms:** “Potential tells you how ‘deep’ in the gravitational well you are. Deeper (closer to mass) = more negative.”

### Relation with Field

The gravitational field is the negative gradient of potential:

$$\boxed{E = -\frac{dV}{dr}}$$

Or: $V = -\int E \, dr$

**Physical meaning:** Field is the rate of change of potential with distance.

---

## Gravitational Potential Energy

### Definition

**Gravitational potential energy** of mass m at distance r from mass M:

$$\boxed{U = -\frac{GMm}{r}}$$

**Relation with potential:**

$$U = mV$$

### Why Negative?

At infinity: U = 0 (reference)

As masses come closer (r decreases):

- Attractive force does **positive work**
- System loses energy
- U becomes **more negative**

**Bound system:** Total energy is negative (can’t escape to infinity)

> **★ Key point · Sign Conventions — Critical for JEE!**
>
> **Common confusion:** Why is gravitational PE negative but spring PE positive?
>
> | Type | Formula | Sign | Why? |

> | --- | --- | --- | --- |

> | **Near surface** | $U = mgh$ | **Positive** | Measured from ground (reference at h=0) |

> | **Universal** | $U = -\frac{GMm}{r}$ | **Negative** | Measured from infinity (reference at r=∞) |

> | **Spring** | $U = \frac{1}{2}kx^2$ | **Positive** | Always stored energy |
>
> **Key:** Sign depends on reference point!

---

## Key Formulas Summary

### For Mass M at Distance r

| Quantity | Formula | Units | Nature |
| --- | --- | --- | --- |
| **Force** | $F = \frac{GMm}{r^2}$ | N | Vector (attractive) |
| **Field** | $E = \frac{GM}{r^2}$ | N/kg = m/s² | Vector (toward M) |
| **Potential** | $V = -\frac{GM}{r}$ | J/kg | Scalar |
| **PE** | $U = -\frac{GMm}{r}$ | J | Scalar |

**Key relations:**

- $E = \frac{F}{m}$
- $V = \frac{U}{m}$
- $E = -\frac{dV}{dr}$
- $F = -\frac{dU}{dr}$

---

## Potential and PE for Earth

### At Surface

Distance from center: $r = R$

$$V_{surface} = -\frac{GM}{R}$$

$$U_{surface} = -\frac{GMm}{R}$$

Since $g = \frac{GM}{R^2}$, we can write:

$$V_{surface} = -gR$$

$$U_{surface} = -mgR$$

### At Height h

Distance from center: $r = R + h$

$$V_h = -\frac{GM}{R+h}$$

$$U_h = -\frac{GMm}{R+h}$$

### Change in PE

When moving from surface to height h:

$$\Delta U = U_h - U_{surface} = GMm\left(\frac{1}{R} - \frac{1}{R+h}\right)$$

$$\boxed{\Delta U = \frac{GMmh}{R(R+h)}}$$

For **small heights** (h « R):

$$\Delta U \approx \frac{GMm}{R^2} \cdot h = mgh$$

**This is the familiar formula!** The $mgh$ formula is an approximation valid near Earth’s surface.

---

## Potential Difference and Work Done

### Work to Move a Mass

Work done **against** gravity to move mass m from $r_1$ to $r_2$:

$$W = m(V_2 - V_1) = \Delta U$$

$$\boxed{W = GMm\left(\frac{1}{r_1} - \frac{1}{r_2}\right)}$$

**From surface to infinity:**

$$W = GMm\left(\frac{1}{R} - 0\right) = \frac{GMm}{R}$$

This is the **binding energy** — energy needed to completely remove the mass from Earth’s influence.

---

## Potential Energy Graph

For mass m at distance r from Earth’s center:

$$U(r) = -\frac{GMm}{r}$$

**Graph characteristics:**

- At $r = 0$: $U \to -\infty$ (not physically meaningful)
- At $r = R$ (surface): $U = -\frac{GMm}{R}$
- At $r \to \infty$: $U \to 0$
- Curve: $U \propto -\frac{1}{r}$ (rectangular hyperbola in 4th quadrant)
- Slope: $\frac{dU}{dr} = \frac{GMm}{r^2} = -F$ (negative of force)

> **◐ In simple terms · Gravitational Well Analogy**
>
> Think of potential energy as a **well**:
>
> - Bottom of well (near mass) = very negative U

> - Ground level (infinity) = U = 0

> - To escape the well, you need energy = depth of well = $\frac{GMm}{R}$
>
> **Movie connection:** In *Interstellar*, Miller’s planet is deep in Gargantua’s gravitational well — enormous energy needed to climb out!

---

## Superposition for Multiple Masses

### Potential is Scalar

Unlike force and field (vectors), potential is a **scalar** — just add algebraically!

For masses $M_1, M_2, M_3$ at distances $r_1, r_2, r_3$:

$$\boxed{V_{total} = V_1 + V_2 + V_3 = -G\left(\frac{M_1}{r_1} + \frac{M_2}{r_2} + \frac{M_3}{r_3}\right)}$$

**This makes calculations much easier than vector addition of forces!**

---

## Memory Tricks & Patterns

### Mnemonic for Formulas

**“Every Field Vanishes Ultimately”** → E, F have $r^2$; V, U have $r^1$

| Quantity | Power of r | Sign |
| --- | --- | --- |
| F, E | $r^{-2}$ | Positive (magnitude) |
| V, U | $r^{-1}$ | Negative |

### The Negative Sign Pattern

**All potentials and PEs are NEGATIVE:**

- $V = -\frac{GM}{r}$ (negative)
- $U = -\frac{GMm}{r}$ (negative)

**Why?** Reference at infinity (U = 0 there), attractive force brings you down.

### Derivative Connections

> **★ Key point · Calculus Shortcuts**
>
> **From V to E:**
>
> $$E = -\frac{dV}{dr} = -\frac{d}{dr}\left(-\frac{GM}{r}\right) = -GM \cdot \frac{-1}{r^2} = -\frac{GM}{r^2}$$
>
> **From U to F:**
>
> $$F = -\frac{dU}{dr} = -\frac{d}{dr}\left(-\frac{GMm}{r}\right) = -\frac{GMm}{r^2}$$
>
> **Pattern:** Differentiating $-\frac{1}{r}$ gives $\frac{1}{r^2}$

---

## When to Use Energy vs Force Approach

> **★ Key point · Decision Tree**
>
> **Use Energy/Potential when:**
>
> - Finding work done in moving masses

> - Analyzing satellite orbits (conservation of energy)

> - Escape velocity problems

> - Multiple masses (potential is scalar — easier!)

> - Initial and final states given (path doesn’t matter)
>
> **Use Force/Field when:**
>
> - Finding instantaneous acceleration

> - Trajectory calculations

> - Equilibrium positions

> - Vector problems requiring direction
>
> **JEE Tip:** Energy approach is often faster! Look for “work done” or “velocity at” clues.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting Negative Sign**
>
> **Wrong:** $V = \frac{GM}{r}$ ❌
>
> **Correct:** $V = -\frac{GM}{r}$ ✓
>
> The negative sign is NOT optional — it has physical meaning!

> **⚠ Trap #2: Confusing mgh with Universal PE**
>
> $U = mgh$ is **only for small heights** near surface.
>
> For satellites, rockets, or large heights: **Must use** $U = -\frac{GMm}{r}$
>
> **When h is comparable to R:** Use universal formula!

> **⚠ Trap #3: Adding Potentials as Vectors**
>
> Potential and PE are **scalars**, not vectors!
>
> For multiple masses:
>
> - **Wrong:** Vector addition ❌

> - **Correct:** Algebraic addition (watch signs) ✓
>
> Example: Two equal masses M at distance r each from point P:
>
> $$V_P = -\frac{GM}{r} + \left(-\frac{GM}{r}\right) = -\frac{2GM}{r}$$
>
> (Both negative, so add magnitudes with negative sign)

> **⚠ Trap #4: Wrong Reference Point**
>
> **Universal gravitation:** Reference at $r = \infty$ (U = 0 there)
>
> **Near surface:** Reference at ground (U = 0 there, U = mgh above)
>
> **Don’t mix the two!** Be clear about your reference.

---

## Practice Problems

### Level 1: Foundation (NCERT/Basics)

> **↗ Connection · Problem 1**
>
> Calculate the gravitational potential at Earth’s surface. (M = $6 \times 10^{24}$ kg, R = $6.4 \times 10^6$ m, G = $6.67 \times 10^{-11}$ N·m²/kg²)
>
> **Solution:**
>
> $$V = -\frac{GM}{R}$$

$$V = -\frac{6.67 \times 10^{-11} \times 6 \times 10^{24}}{6.4 \times 10^6}$$

$$V = -\frac{40.02 \times 10^{13}}{6.4 \times 10^6} = -\frac{40.02 \times 10^7}{6.4}$$

$$V \approx -6.25 \times 10^7 \text{ J/kg}$$
>
> **Answer:** $V \approx -6.25 \times 10^7$ J/kg or $-62.5$ MJ/kg
>
> **Alternate using g:**

> $V = -gR = -9.8 \times 6.4 \times 10^6 = -62.72 \times 10^6$ J/kg ✓

> **↗ Connection · Problem 2**
>
> Find the gravitational PE of a 10 kg object at height 1000 km above Earth’s surface. (R = 6400 km, g = 10 m/s²)
>
> **Solution:**
>
> Distance from center: $r = R + h = 6400 + 1000 = 7400$ km = $7.4 \times 10^6$ m
>
> Method 1: Using universal formula
>
> $$U = -\frac{GMm}{r}$$
>
> We know $GM = gR^2 = 10 \times (6.4 \times 10^6)^2 = 4.096 \times 10^{14}$
>
> $$U = -\frac{4.096 \times 10^{14} \times 10}{7.4 \times 10^6} = -\frac{4.096 \times 10^{15}}{7.4 \times 10^6}$$

$$U \approx -5.54 \times 10^8 \text{ J}$$
>
> Method 2: Using $\Delta U$
>
> $$\Delta U = mgR \times \frac{h}{R+h} = 10 \times 10 \times 6.4 \times 10^6 \times \frac{1000}{7400} \times 10^3$$
>
> (This gives change from surface; add to surface PE for total)
>
> **Answer:** $U \approx -5.54 \times 10^8$ J

---

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> How much energy is required to move a 1000 kg satellite from Earth’s surface to a height of 3R above the surface?
>
> **Solution:**
>
> Initial position: $r_1 = R$

> Final position: $r_2 = R + 3R = 4R$
>
> $$U_1 = -\frac{GMm}{R}$$

$$U_2 = -\frac{GMm}{4R}$$
>
> Work done = Change in PE:
>
> $$W = U_2 - U_1 = -\frac{GMm}{4R} - \left(-\frac{GMm}{R}\right)$$

$$W = GMm\left(\frac{1}{R} - \frac{1}{4R}\right) = \frac{GMm}{R}\left(1 - \frac{1}{4}\right)$$

$$W = \frac{3GMm}{4R}$$
>
> Using $GM = gR^2$:
>
> $$W = \frac{3gR^2m}{4R} = \frac{3mgR}{4}$$

$$W = \frac{3 \times 1000 \times 10 \times 6.4 \times 10^6}{4}$$

$$W = \frac{1.92 \times 10^{11}}{4} = 4.8 \times 10^{10} \text{ J}$$
>
> **Answer:** **$4.8 \times 10^{10}$ J** or **48 GJ**
>
> **Fraction of surface PE:** This is $\frac{3}{4}$ of the binding energy $\frac{GMm}{R}$

> **↗ Connection · Problem 4**
>
> Two particles of equal mass m are at distance r apart. Find the gravitational potential at the midpoint between them.
>
> **Solution:**
>
> Distance of midpoint from each mass = $\frac{r}{2}$
>
> Potential due to first mass:
>
> $$V_1 = -\frac{Gm}{r/2} = -\frac{2Gm}{r}$$
>
> Potential due to second mass:
>
> $$V_2 = -\frac{Gm}{r/2} = -\frac{2Gm}{r}$$
>
> Total potential (scalar addition):
>
> $$V = V_1 + V_2 = -\frac{2Gm}{r} - \frac{2Gm}{r}$$

$$V = -\frac{4Gm}{r}$$
>
> **Answer:** $V = -\frac{4Gm}{r}$
>
> **Note:** Although forces cancel at midpoint (equal and opposite), potentials **add** (both negative)!

> **↗ Connection · Problem 5**
>
> The gravitational field intensity at a point is $5 \times 10^{-6}$ N/kg. Find the potential gradient at that point.
>
> **Solution:**
>
> Relation between field and potential:
>
> $$E = -\frac{dV}{dr}$$
>
> So potential gradient:
>
> $$\frac{dV}{dr} = -E = -5 \times 10^{-6} \text{ J/(kg}\cdot\text{m)}$$
>
> **Answer:** **$-5 \times 10^{-6}$ J/(kg·m)** or **$-5 \times 10^{-6}$ m/s²**
>
> **Interpretation:** Potential decreases by $5 \times 10^{-6}$ J/kg for every meter moved in the direction of the field.

---

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 6**
>
> A particle is projected vertically upward from Earth’s surface with velocity equal to half the escape velocity. Find the maximum height reached. (Express in terms of Earth’s radius R)
>
> **Solution:**
>
> Escape velocity: $v_e = \sqrt{\frac{2GM}{R}}$
>
> Given velocity: $v = \frac{v_e}{2} = \frac{1}{2}\sqrt{\frac{2GM}{R}}$
>
> Using energy conservation:
>
> At surface:
>
> $$E_i = KE_i + PE_i = \frac{1}{2}mv^2 - \frac{GMm}{R}$$
>
> At maximum height h (where velocity = 0):
>
> $$E_f = 0 - \frac{GMm}{R+h}$$
>
> By conservation:
>
> $$\frac{1}{2}mv^2 - \frac{GMm}{R} = -\frac{GMm}{R+h}$$

$$\frac{1}{2}m \times \frac{1}{4} \times \frac{2GM}{R} - \frac{GMm}{R} = -\frac{GMm}{R+h}$$

$$\frac{GMm}{4R} - \frac{GMm}{R} = -\frac{GMm}{R+h}$$

$$\frac{GMm}{R}\left(\frac{1}{4} - 1\right) = -\frac{GMm}{R+h}$$

$$-\frac{3GMm}{4R} = -\frac{GMm}{R+h}$$

$$\frac{3}{4R} = \frac{1}{R+h}$$

$$3(R+h) = 4R$$

$$3R + 3h = 4R$$

$$3h = R$$

$$h = \frac{R}{3}$$
>
> **Answer:** Maximum height = **R/3**
>
> **Check:** With $v = v_e$, we’d get h → ∞ (escapes). With $v = v_e/2$, getting finite h makes sense.

> **↗ Connection · Problem 7 (Challenging)**
>
> Three particles, each of mass m, are placed at the vertices of an equilateral triangle of side a. Find:

> (a) The gravitational PE of the system

> (b) The work required to double the separation between them (i.e., side becomes 2a)
>
> **Solution:**
>
> **(a) Gravitational PE of the system**
>
> PE of system = Sum of PE of all pairs
>
> Number of pairs = $\binom{3}{2} = 3$
>
> Each pair is at distance a:
>
> $$U_{pair} = -\frac{Gm^2}{a}$$
>
> Total PE:
>
> $$U_{total} = 3 \times \left(-\frac{Gm^2}{a}\right) = -\frac{3Gm^2}{a}$$
>
> **Answer (a):** $U = -\frac{3Gm^2}{a}$
>
> **(b) Work to double separation**
>
> When side becomes 2a:
>
> $$U_{final} = -\frac{3Gm^2}{2a}$$
>
> Work done:
>
> $$W = U_{final} - U_{initial} = -\frac{3Gm^2}{2a} - \left(-\frac{3Gm^2}{a}\right)$$

$$W = -\frac{3Gm^2}{2a} + \frac{3Gm^2}{a} = \frac{3Gm^2}{a}\left(1 - \frac{1}{2}\right)$$

$$W = \frac{3Gm^2}{2a}$$
>
> **Answer (b):** $W = \frac{3Gm^2}{2a}$ (positive — energy supplied to separate)
>
> **Physical insight:** Work is positive because we’re pulling apart masses against attractive gravity. System gains PE (becomes less negative).

> **↗ Connection · Problem 8 (Very Challenging)**
>
> Show that the gravitational potential energy of a uniform solid sphere of mass M and radius R is $U = -\frac{3GM^2}{5R}$.
>
> **Solution:**
>
> Consider building the sphere shell by shell from the center.
>
> When radius has grown to $r$, mass assembled so far:
>
> $$m(r) = M \times \frac{r^3}{R^3} = \frac{Mr^3}{R^3}$$
>
> (Assuming uniform density: $m \propto$ volume $\propto r^3$)
>
> To bring next thin shell of mass $dm$ from infinity:
>
> $$dm = \frac{3M}{R^3} r^2 dr$$
>
> (Volume of shell = $4\pi r^2 dr$; density = $\frac{3M}{4\pi R^3}$)
>
> Work done (= PE of this shell):
>
> $$dU = -\frac{Gm(r) \cdot dm}{r} = -\frac{G \cdot \frac{Mr^3}{R^3} \cdot \frac{3M r^2 dr}{R^3}}{r}$$

$$dU = -\frac{3GM^2}{R^6} r^4 dr$$
>
> Total PE:
>
> $$U = \int_0^R dU = -\frac{3GM^2}{R^6} \int_0^R r^4 dr$$

$$U = -\frac{3GM^2}{R^6} \times \frac{r^5}{5}\Big|_0^R = -\frac{3GM^2}{R^6} \times \frac{R^5}{5}$$

$$\boxed{U = -\frac{3GM^2}{5R}}$$
>
> **This is the self-energy of the sphere** — energy needed to assemble it from dispersed matter.
>
> **JEE Application:** Sometimes asked to compare with PE of two point masses at distance R: $U_{point} = -\frac{GM^2}{R}$
>
> Ratio: $\frac{U_{sphere}}{U_{point}} = \frac{3}{5}$

---

## Quick Revision Box

| Quantity | Formula | Sign | Scalar/Vector |
| --- | --- | --- | --- |
| Gravitational Force | $F = \frac{GMm}{r^2}$ | Positive (magnitude) | Vector |
| Gravitational Field | $E = \frac{GM}{r^2}$ | Positive (magnitude) | Vector |
| Gravitational Potential | $V = -\frac{GM}{r}$ | Negative | Scalar |
| Gravitational PE | $U = -\frac{GMm}{r}$ | Negative | Scalar |

**Key Relations:**

- $E = \frac{F}{m}$
- $V = \frac{U}{m}$
- $E = -\frac{dV}{dr}$
- $F = -\frac{dU}{dr}$

**Special Cases:**

- At surface: $V = -gR$, $U = -mgR$
- Near surface (small h): $\Delta U = mgh$
- Multiple masses: Add potentials algebraically (scalar!)

---

## Related Topics

### Within Gravitation Chapter

- [Universal Gravitation](../universal-gravitation/index.md) — Force foundation
- [Escape Velocity](../escape-velocity/index.md) — Uses PE = 0 at infinity
- [Satellites](../satellites/index.md) — Energy analysis of orbits

### Connected Chapters

- [Work and Energy](../../work-energy-power/work-done/index.md) — Foundation concepts
- [Potential Energy](../../work-energy-power/potential-energy/index.md) — General PE ideas
- [Conservation of Energy](../../work-energy-power/conservation-energy/index.md) — Used in orbit problems

### Math Connections

- [Differentiation](../../../mathematics/limits-continuity-differentiability/index.md) — Relating E and V
- [Integration](../../../mathematics/integral-calculus/index.md) — Calculating work, self-energy

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Two Perspectives:** Force/Field (vector, harder) vs Potential/Energy (scalar, easier) — learn to switch between them

> 2. **Always Negative:** Both V and U are negative (reference at infinity) — this is not a mistake, it’s physics!

> 3. **Energy is Easier:** For JEE, energy approach often simplifies problems — especially with multiple masses (scalars add simply)

> 4. **Derivative Connection:** Field is negative derivative of potential: $E = -\frac{dV}{dr}$ — memorize this!

> 5. **Near vs Far:** Use $mgh$ near surface, $-\frac{GMm}{r}$ for satellites and space — know when to switch
>
> **“Force tells you HOW gravity pulls. Potential tells you HOW DEEP in the gravitational well you are. Energy tells you IF you can escape. Master all three perspectives, and gravity becomes your playground!”**

---

From TestGuru · our mock-test platform

## You've read Gravitational Field and Potential.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=gravitation&tg_exam=jee-main&tg_page=%2Fphysics%2Fgravitation%2Fgravitational-field-potential%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/gravitation/gravitational-field-potential/",this.page.identifier="/physics/gravitation/gravitational-field-potential/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="electricField" id="anim-electricField-1795396423534742097"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-electricField-1795396423534742097")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/gravitation/gravitational-field-potential/](https://jeenotes.in/physics/gravitation/gravitational-field-potential/) · raw HTML: `offline/physics/gravitation/gravitational-field-potential/index.html`_
