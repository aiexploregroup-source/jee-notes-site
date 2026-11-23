---
title: "p-n Junction Formation and Depletion Region"
source: "https://jeenotes.in/physics/electronic-devices/pn-junction/"
description: "Master p-n junction formation, depletion region, barrier potential, and junction biasing for JEE Physics with solar cell analogy"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 9"
html: "../../../../offline/physics/electronic-devices/pn-junction/index.html"
extracted: "2026-11-23"
---

> Master p-n junction formation, depletion region, barrier potential, and junction biasing for JEE Physics with solar cell analogy

## Prerequisites

Before studying this topic, make sure you understand:

- [Semiconductors and Band Theory](../semiconductors/index.md) - Intrinsic and extrinsic semiconductors
- [Current Electricity](../../current-electricity/index.md) - Electric field and potential concepts
- [Electrostatics](../../electrostatics/electric-potential/index.md) - Potential difference fundamentals

## The Hook: How Do Solar Panels Convert Light to Electricity?

> **★ Key point · Connect: Solar Panels → p-n Junctions**
>
> A **solar panel** on your roof contains thousands of p-n junctions! When sunlight hits these junctions, they generate electricity without any moving parts, fuel, or pollution.
>
> **Mind-blowing fact:** The International Space Station uses p-n junction solar panels with area larger than a basketball court, generating enough power for a small neighborhood - all from the same physics happening at the boundary between p-type and n-type semiconductors!
>
> How does a simple boundary between two doped silicon regions create voltage? Let’s unlock this miracle of modern physics!

## Interactive Demo

Visualize the formation of depletion region and barrier potential:

---

## The Core Concept: What Happens When p and n Meet?

### The Big Picture

Imagine two rooms connected by a door:

- **Left room (n-type):** Full of free electrons (like people)
- **Right room (p-type):** Full of holes (like empty seats)

When you open the door (bring p and n together):

- Electrons rush into p-side to fill holes
- This creates a **special region** near the junction
- This region acts like an **invisible barrier**

This is the **p-n junction** - the most important structure in all of electronics!

> **◐ In simple terms · The Solar Cell Connection**
>
> In a solar panel, when photons (light particles) hit the p-n junction:
>
> 1. They create electron-hole pairs

> 2. The junction’s built-in electric field separates them

> 3. Electrons go one way, holes go the other

> 4. This separation creates voltage across the junction!
>
> Every smartphone charger, LED, and computer chip relies on this same p-n junction physics!

---

## Formation of p-n Junction

### Step-by-Step Process

**Before Contact:**

- p-type: Lots of holes, few electrons
- n-type: Lots of electrons, few holes
- Both regions electrically neutral

**After Contact - The Diffusion Drama:**

**Step 1: Diffusion (0-1 nanosecond)**

- Electrons from n-side diffuse to p-side
- Holes from p-side diffuse to n-side
- Driven by concentration gradient

**Step 2: Recombination**

- Electrons meeting holes recombine
- Both disappear!
- Leaves behind **fixed ions**

**Step 3: Depletion Region Formation**

- Near junction: No free carriers left
- Only **immobile ions** remain
- n-side: Positive donor ions (lost electrons)
- p-side: Negative acceptor ions (lost holes)

**Step 4: Electric Field Creation**

- Positive ions on n-side, negative on p-side
- Creates **built-in electric field** $E_0$
- Field points from n to p (positive to negative)

**Step 5: Equilibrium**

- Electric field opposes further diffusion
- Drift current = Diffusion current
- **No net current flows!**

### The Depletion Region

The region near the junction depleted of free charge carriers:

**Characteristics:**

- Width: $W \approx 10^{-6}$ m = **1 micrometer**
- Contains only immobile ions
- Acts as an insulator
- Creates potential barrier

**Width Formula:**

$$\boxed{W = \sqrt{\frac{2\epsilon \epsilon_0 V_0}{e} \left(\frac{1}{N_A} + \frac{1}{N_D}\right)}}$$

where:

- $\epsilon$ = relative permittivity of semiconductor
- $\epsilon_0$ = permittivity of free space
- $V_0$ = barrier potential
- $N_A$ = acceptor concentration (p-side)
- $N_D$ = donor concentration (n-side)

**Key insight:** Higher doping → narrower depletion region!

---

## Barrier Potential (Built-in Voltage)

### What is Barrier Potential?

The **potential difference** across the depletion region that stops further diffusion.

$$\boxed{V_0 = \frac{kT}{e} \ln\left(\frac{N_A N_D}{n_i^2}\right)}$$

where:

- $k$ = Boltzmann constant ($1.38 \times 10^{-23}$ J/K)
- $T$ = absolute temperature (K)
- $e$ = electronic charge
- $n_i$ = intrinsic carrier concentration

**At room temperature (300 K):**

$$\frac{kT}{e} = \frac{1.38 \times 10^{-23} \times 300}{1.6 \times 10^{-19}} = 0.026 \text{ V}$$

**Typical values:**

- Silicon: $V_0 \approx 0.7$ V
- Germanium: $V_0 \approx 0.3$ V
- GaAs: $V_0 \approx 1.2$ V

### Alternative Formula

$$\boxed{V_0 = \frac{kT}{e} \ln\left(\frac{p_p n_n}{n_i^2}\right)}$$

where:

- $p_p$ = hole concentration in p-region ($\approx N_A$)
- $n_n$ = electron concentration in n-region ($\approx N_D$)

> **★ Key point · Why Can't We Measure Barrier Potential?**
>
> **Paradox:** Barrier potential exists, but when you connect a voltmeter, it reads **zero**!
>
> **Why?**

> When you connect wires to measure voltage:
>
> - Metal-semiconductor junctions form at both ends

> - These create **contact potentials** that exactly cancel $V_0$

> - Net measured voltage = 0!
>
> **Think of it like:** Trying to measure atmospheric pressure from inside - you can’t feel it because you’re surrounded by it! The barrier potential is an **internal** effect.

---

## Energy Band Diagram

### Before Junction Formation

**p-type:**

- Fermi level near valence band
- Mostly holes

**n-type:**

- Fermi level near conduction band
- Mostly electrons

### After Junction Formation

**At equilibrium:**

- **Fermi levels align** (must be equal in equilibrium!)
- Conduction and valence bands bend near junction
- Band bending creates **potential barrier** = $eV_0$

**Energy barrier for electrons:**

$$E_0 = eV_0$$

This barrier prevents electrons from n-side flowing to p-side at equilibrium!

---

## Junction Biasing

### Forward Bias (Making Current Flow)

**Connection:**

- p-side to **positive** terminal
- n-side to **negative** terminal

**Effects:**

1. External field opposes built-in field
2. Barrier potential decreases: $V_0 - V$
3. Depletion width decreases
4. Majority carriers can cross junction
5. **Large current flows!**

**Current formula:**

$$\boxed{I = I_0 \left(e^{eV/kT} - 1\right)}$$

where $I_0$ = reverse saturation current (very small, ~$10^{-9}$ A)

For $V > 0.1$ V (forward bias):

$$I \approx I_0 e^{eV/kT}$$

**Exponential increase!**

**Knee voltage (threshold):**

- Si: ~0.7 V
- Ge: ~0.3 V

Below this, current is negligible. Above this, current rises sharply!

### Reverse Bias (Blocking Current)

**Connection:**

- p-side to **negative** terminal
- n-side to **positive** terminal

**Effects:**

1. External field aids built-in field
2. Barrier potential increases: $V_0 + |V|$
3. Depletion width increases
4. Majority carriers repelled from junction
5. Only tiny **reverse saturation current** flows

**Current:**

$$I = -I_0$$

(constant, independent of reverse voltage!)

**Typical value:** $I_0 \sim 10^{-9}$ A for Si (nanoamperes)

**Why any current?**

- Minority carriers cross junction
- Thermally generated carriers
- Very small, but non-zero

> **◐ In simple terms · The Diode Behavior**
>
> This **asymmetric** behavior is what makes a diode:
>
> - **Forward bias:** Low resistance, current flows

> - **Reverse bias:** High resistance, negligible current
>
> **Think of it as:** A one-way valve for electricity!
>
> This is why:
>
> - **Rectifiers** convert AC to DC

> - **Solar cells** generate voltage

> - **LEDs** emit light in one direction

---

## Depletion Capacitance

The depletion region behaves like a **capacitor**:

- Two parallel charged regions (ions)
- Separated by depletion width $W$

$$\boxed{C_j = \frac{\epsilon \epsilon_0 A}{W}}$$

where $A$ = junction area

**Important:** Capacitance varies with applied voltage!

$$\boxed{C_j \propto \frac{1}{\sqrt{V_0 + V_r}}}$$

Under reverse bias ($V_r$):

- Depletion width increases
- Capacitance decreases

**Application:** **Varactor diode** - voltage-controlled capacitor used in tuning circuits!

---

## Important Formulas Summary

### Junction Formation

$$\boxed{V_0 = \frac{kT}{e} \ln\left(\frac{N_A N_D}{n_i^2}\right)} \quad \text{(Barrier potential)}$$

$$\boxed{W \propto \sqrt{V_0}} \quad \text{(Depletion width)}$$

### Junction Current

$$\boxed{I = I_0 \left(e^{eV/kT} - 1\right)} \quad \text{(Diode equation)}$$

**Forward bias:** $I \approx I_0 e^{eV/kT}$ (exponential)

**Reverse bias:** $I \approx -I_0$ (constant)

### Capacitance

$$\boxed{C_j \propto \frac{1}{\sqrt{V_0 + V_r}}} \quad \text{(Reverse bias)}$$

---

## Memory Tricks & Patterns

### Mnemonic for Biasing

**“Forward = Flow, Reverse = Resist”**

- **F**orward bias → Current **F**lows
- **R**everse bias → Current **R**esisted

### Polarity Memory

**“Positive to p, Negative to n”** → **Forward bias**

**“Negative to p, Positive to n”** → **Reverse bias**

### Barrier Potential Values

**“Silicon is 7, Germanium is 3”**

- Si: 0.**7** V
- Ge: 0.**3** V

### Pattern Recognition

1. **Depletion width:**

   - Forward bias: Width decreases
   - Reverse bias: Width increases
   - Zero bias: Width = $W_0$
2. **Current characteristics:**

   - Forward: Exponential rise after threshold
   - Reverse: Flat (constant $I_0$)
   - Asymmetric I-V curve
3. **Temperature effects:**

   - Barrier potential decreases ~2 mV/°C
   - Reverse current doubles every 10°C
   - Forward voltage decreases with temperature

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Use barrier potential formula when:**
>
> - Asked to find built-in voltage

> - Given doping concentrations $N_A$ and $N_D$

> - Comparing different p-n junctions
>
> **Use diode equation when:**
>
> - Finding current for given voltage

> - Both forward and reverse bias problems

> - Temperature dependence questions
>
> **Use depletion width formula when:**
>
> - Finding junction width

> - Capacitance calculations

> - Effect of doping on junction properties
>
> **Key principle:**
>
> - Forward bias: Think about lowering barrier

> - Reverse bias: Think about raising barrier

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Measuring Barrier Potential**
>
> **Wrong thinking:** “Voltmeter will show 0.7 V across unbiased Si junction”
>
> **Reality:**
>
> - Voltmeter reads **zero** across open junction

> - Contact potentials cancel out barrier potential

> - $V_0$ exists internally but can’t be measured directly
>
> **JEE Trap:** “What voltage does an ideal voltmeter read across unbiased p-n junction?” Answer: **ZERO**

> **⚠ Trap #2: Reverse Current is Not Zero**
>
> **Wrong:** “No current flows in reverse bias”
>
> **Correct:**
>
> - Small reverse saturation current $I_0$ always flows

> - Due to minority carriers

> - Typically ~$10^{-9}$ A for Si
>
> **Why it matters:**
>
> - Solar cells work on this principle!

> - Photodiodes detect light through reverse current

> **⚠ Trap #3: Confusing Bias Polarity**
>
> **Wrong memory:** “Positive to n-side is forward”
>
> **Correct:**
>
> - **Positive to p-side** = Forward bias

> - **Positive to n-side** = Reverse bias
>
> **Memory trick:** **“P likes Positive”** → Forward bias
>
> **Common JEE trick:** Showing circuit with unusual orientation - always check which side is p and which is n!

> **⚠ Trap #4: Threshold Voltage vs Barrier Potential**
>
> **Wrong:** “Threshold voltage = Barrier potential”
>
> **Correct:**
>
> - Barrier potential $V_0 \approx 0.7$ V (Si) exists internally

> - Threshold voltage $V_{th} \approx 0.7$ V (Si) is external voltage needed

> - They’re numerically similar but conceptually different!
>
> **Barrier potential:** Internal property of junction

> **Threshold voltage:** External voltage needed for conduction

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> A p-n junction has $N_A = 10^{17}$ cm⁻³ and $N_D = 10^{16}$ cm⁻³. Find the barrier potential at 300 K if $n_i = 1.5 \times 10^{10}$ cm⁻³.
>
> **Solution:**
>
> $$V_0 = \frac{kT}{e} \ln\left(\frac{N_A N_D}{n_i^2}\right)$$
>
> At 300 K: $\frac{kT}{e} = 0.026$ V
>
> $$V_0 = 0.026 \ln\left(\frac{10^{17} \times 10^{16}}{(1.5 \times 10^{10})^2}\right)$$

$$= 0.026 \ln\left(\frac{10^{33}}{2.25 \times 10^{20}}\right)$$

$$= 0.026 \ln(4.44 \times 10^{12})$$

$$= 0.026 \times \ln(4.44) + 0.026 \times 12 \ln(10)$$

$$= 0.026 \times (1.49 + 12 \times 2.303)$$

$$= 0.026 \times 29.13 \approx 0.76 \text{ V}$$
>
> **Answer:** $V_0 \approx 0.76$ V (close to 0.7 V for Si)
>
> **Insight:** Barrier potential is primarily determined by doping levels!

> **↗ Connection · Problem 1.2**
>
> A Si diode has reverse saturation current $I_0 = 10^{-9}$ A. Find the forward current when voltage is 0.7 V at 300 K.
>
> **Solution:**
>
> $$I = I_0 \left(e^{eV/kT} - 1\right)$$

$$\frac{eV}{kT} = \frac{0.7}{0.026} \approx 27$$

$$I = 10^{-9} (e^{27} - 1)$$

$$e^{27} \approx 5.3 \times 10^{11}$$

$$I \approx 10^{-9} \times 5.3 \times 10^{11} = 530 \text{ A}$$
>
> Wait! This is unrealistic. In practice, resistance limits current.
>
> For practical estimation:
>
> $$I \approx I_0 e^{eV/kT} \sim 0.5 \text{ A (with series resistance)}$$
>
> **Answer:** ~0.5 A (in practice, limited by resistance)
>
> **Key insight:** Diode equation gives ideal current - actual current limited by resistance!

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> The depletion width of a p-n junction is $10^{-6}$ m under zero bias. What happens to the width when:

> (a) Forward bias of 0.3 V is applied?

> (b) Reverse bias of 5 V is applied?
>
> **Solution:**
>
> $$W \propto \sqrt{V_0 + V}$$
>
> where $V$ is negative for forward bias, positive for reverse bias.
>
> Assume $V_0 = 0.7$ V for Si.
>
> **(a) Forward bias V = -0.3 V:**
>
> $$\frac{W_f}{W_0} = \sqrt{\frac{V_0 - 0.3}{V_0}} = \sqrt{\frac{0.7 - 0.3}{0.7}} = \sqrt{\frac{0.4}{0.7}} = 0.76$$

$$W_f = 0.76 \times 10^{-6} = 0.76 \text{ μm}$$
>
> Width **decreases** to 76% of original.
>
> **(b) Reverse bias V = +5 V:**
>
> $$\frac{W_r}{W_0} = \sqrt{\frac{V_0 + 5}{V_0}} = \sqrt{\frac{0.7 + 5}{0.7}} = \sqrt{\frac{5.7}{0.7}} = 2.85$$

$$W_r = 2.85 \times 10^{-6} = 2.85 \text{ μm}$$
>
> Width **increases** to 285% of original.
>
> **Answer:**
>
> - (a) Decreases to 0.76 μm

> - (b) Increases to 2.85 μm
>
> **JEE Insight:** Reverse bias significantly increases depletion width!

> **↗ Connection · Problem 2.2**
>
> A p-n junction has barrier potential 0.7 V. If temperature increases from 300 K to 400 K, estimate the new barrier potential. (Barrier potential decreases ~2 mV/°C)
>
> **Solution:**
>
> Temperature change: $\Delta T = 100$ K = 100°C
>
> Change in barrier potential:
>
> $$\Delta V_0 = -2 \text{ mV/°C} \times 100°C = -200 \text{ mV} = -0.2 \text{ V}$$
>
> New barrier potential:
>
> $$V_0' = 0.7 - 0.2 = 0.5 \text{ V}$$
>
> **Answer:** $V_0 \approx 0.5$ V at 400 K
>
> **Key concept:** Higher temperature → lower barrier potential → easier for carriers to cross!

> **↗ Connection · Problem 2.3**
>
> Compare the depletion width of two junctions:
>
> - Junction A: $N_A = N_D = 10^{16}$ cm⁻³

> - Junction B: $N_A = N_D = 10^{18}$ cm⁻³
>
> **Solution:**
>
> $$W \propto \sqrt{\frac{1}{N_A} + \frac{1}{N_D}}$$
>
> For symmetric junction ($N_A = N_D = N$):
>
> $$W \propto \sqrt{\frac{2}{N}} \propto \frac{1}{\sqrt{N}}$$

$$\frac{W_A}{W_B} = \sqrt{\frac{N_B}{N_A}} = \sqrt{\frac{10^{18}}{10^{16}}} = \sqrt{100} = 10$$
>
> **Answer:** Junction A has **10 times wider** depletion region than Junction B
>
> **Key insight:** Higher doping → narrower depletion region!

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A p-n junction has $I_0 = 10^{-12}$ A at 27°C. If reverse saturation current doubles every 10°C rise, find $I_0$ at 57°C.
>
> **Solution:**
>
> Temperature rise: $57 - 27 = 30$°C
>
> Number of 10°C intervals: $n = 30/10 = 3$
>
> Current doubles each interval:
>
> $$I_0(57°C) = I_0(27°C) \times 2^3 = 10^{-12} \times 8$$

$$I_0(57°C) = 8 \times 10^{-12} \text{ A}$$
>
> **Answer:** $8 \times 10^{-12}$ A = 8 pA
>
> **Advanced concept:** Temperature strongly affects minority carrier generation!

> **↗ Connection · Problem 3.2**
>
> Show that the electric field at the junction is maximum at the metallurgical junction (x = 0).
>
> **Solution:**
>
> **Poisson’s equation in depletion region:**
>
> In p-region ($-x_p < x < 0$):
>
> $$\frac{d^2V}{dx^2} = \frac{\rho}{\epsilon \epsilon_0} = \frac{-eN_A}{\epsilon \epsilon_0}$$
>
> In n-region ($0 < x < x_n$):
>
> $$\frac{d^2V}{dx^2} = \frac{eN_D}{\epsilon \epsilon_0}$$
>
> Electric field: $E = -\frac{dV}{dx}$
>
> $$\frac{dE}{dx} = -\frac{d^2V}{dx^2}$$
>
> Integrating with boundary condition $E = 0$ at edges:
>
> **In p-region:**
>
> $$E(x) = -\frac{eN_A}{\epsilon \epsilon_0}(x + x_p)$$
>
> At $x = 0$: $E_{\text{max}} = -\frac{eN_A x_p}{\epsilon \epsilon_0}$
>
> **In n-region:**
>
> $$E(x) = \frac{eN_D}{\epsilon \epsilon_0}(x_n - x)$$
>
> At $x = 0$: $E_{\text{max}} = \frac{eN_D x_n}{\epsilon \epsilon_0}$
>
> **Field is continuous at junction and maximum at x = 0!**
>
> **Answer:** Electric field is maximum at metallurgical junction, decreases linearly to zero at depletion edges.
>
> **Advanced insight:** This triangular field distribution is key to junction capacitance!

---

## Quick Revision Box

| Condition | Barrier | Depletion Width | Current | Applications |
| --- | --- | --- | --- | --- |
| No bias | $V_0$ | $W_0$ | 0 | Barrier measurement |
| Forward | $V_0 - V$ ↓ | $W$ ↓ | Large ↑ | Rectifier, LED |
| Reverse | $V_0 + \|V\|$ ↑ | $W$ ↑ | $\approx I_0$ (tiny) | Solar cell, Photodiode |

**Key values (Si):** $V_0 = 0.7$ V, $I_0 \sim 10^{-9}$ A, $W_0 \sim 1$ μm

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Bias identification** - Given circuit, identify forward/reverse
>
>    - Remember: “Positive to p” = Forward

> 2. **Barrier potential calculation** - Using $V_0 = (kT/e) \ln(N_A N_D/n_i^2)$
>
>    - At 300 K: $kT/e = 0.026$ V (memorize!)

> 3. **Depletion width variation** - How $W$ changes with bias
>
>    - $W \propto \sqrt{V_0 + V}$

>    - Forward: $W$ decreases

>    - Reverse: $W$ increases

> 4. **I-V characteristics** - Understanding diode equation
>
>    - Forward: Exponential rise

>    - Reverse: Flat at $I_0$

>    - Knee voltage: ~0.7 V (Si), ~0.3 V (Ge)

> 5. **Conceptual traps:**
>
>    - Barrier potential can’t be measured directly (contacts cancel it)

>    - Reverse current is NOT zero (minority carriers)

>    - Threshold ≈ barrier potential (numerically, not conceptually)
>
> **Time-saving trick:** For quick estimation in forward bias:
>
> - Below 0.6 V: $I \approx 0$

> - At 0.7 V: $I$ = moderate

> - Above 0.8 V: $I$ = large (limited by resistance)

---

## Related Topics

### Within Electronic Devices

- [Semiconductors](../semiconductors/index.md) - Understanding p and n type materials
- [Diode and Rectifier](../diode-rectifier/index.md) - Using p-n junction for AC to DC conversion
- [Special Diodes](../special-diodes/index.md) - LED, photodiode, solar cell applications
- [Zener Diode](../zener-diode/index.md) - Voltage regulation using reverse bias
- [Transistor](../transistor/index.md) - Two p-n junctions back-to-back

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) - Understanding current flow
- [Electrostatics](../../electrostatics/electric-potential/index.md) - Potential barrier concepts
- [Electromagnetic Waves](../../electromagnetic-waves/index.md) - Photon energy in solar cells

### Real-world Applications

- **Rectifiers** - AC to DC conversion (phone chargers)
- **Solar cells** - Converting sunlight to electricity
- **LEDs** - Light emission from forward-biased junctions
- **Photodiodes** - Light detection in cameras
- **Transistors** - Amplifiers and switches (all electronics)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **When p and n type semiconductors meet, diffusion creates a depletion region** - depleted of free carriers, filled with immobile ions

> 2. **Barrier potential ($V_0$) forms naturally** - typically 0.7 V for Si, 0.3 V for Ge - prevents further diffusion at equilibrium

> 3. **Forward bias (positive to p) lowers barrier** - allows current to flow exponentially: $I \propto e^{V/0.026}$ at room temperature

> 4. **Reverse bias (positive to n) raises barrier** - blocks majority carriers, only tiny $I_0$ flows from minority carriers

> 5. **Depletion width varies with bias:** $W \propto \sqrt{V_0 + V}$
>
>    - Forward: Width decreases (easier conduction)

>    - Reverse: Width increases (better blocking)

> 6. **The p-n junction is the foundation of ALL semiconductor devices** - from simple diodes to complex microprocessors with billions of transistors!
>
> **“A simple boundary between p and n type silicon powers your smartphone, lights your LEDs, and converts sunlight to electricity - all through the magic of the depletion region!”**

---

From TestGuru · our mock-test platform

## You've read p-n Junction Formation and Depletion Region.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electronic-devices&tg_exam=jee-main&tg_page=%2Fphysics%2Felectronic-devices%2Fpn-junction%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electronic-devices/pn-junction/",this.page.identifier="/physics/electronic-devices/pn-junction/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="pnJunction" id="anim-pnJunction-1795396423318673756"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-pnJunction-1795396423318673756")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electronic-devices/pn-junction/](https://jeenotes.in/physics/electronic-devices/pn-junction/) · raw HTML: `offline/physics/electronic-devices/pn-junction/index.html`_
