---
title: "Ohm's Law and V-I Characteristics"
source: "https://jeenotes.in/physics/current-electricity/ohms-law/"
description: "Master Ohm's law, V-I characteristics, and conductor behavior for JEE Physics with real-world circuit examples"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 8"
html: "../../../../offline/physics/current-electricity/ohms-law/index.html"
extracted: "2026-11-23"
---

> Master Ohm's law, V-I characteristics, and conductor behavior for JEE Physics with real-world circuit examples

## Prerequisites

Before studying this topic, make sure you understand:

- [Drift Velocity](../drift-velocity/index.md) - How electrons move in conductors
- [Electric Potential](../../electrostatics/electric-potential/index.md) - Voltage fundamentals

## The Hook: Why Don’t All Wires Glow Like Bulbs?

> **★ Key point · Connect: Your Phone Charger → Ohm's Law**
>
> Ever noticed how your phone charger cable stays cool while charging, but a small LED bulb glows bright with the same voltage? Both have current flowing through them, so why the difference?
>
> **The answer:** Different materials have different **resistance** to current flow. This simple relationship between voltage, current, and resistance - discovered by Georg Ohm in 1827 - powers every circuit in the world, from Iron Man’s arc reactor to your smartphone!
>
> **Challenge question:** If you double the voltage across a wire, what happens to the current? Keep reading to find out!

## Interactive Demo

Adjust voltage and see how current changes for different materials:

### Formula Visualization: Understanding V = IR

See what each variable represents in a real circuit:

---

## The Core Concept: Ohm’s Law

### The Fundamental Relationship

$$\boxed{V = IR}$$

**In simple terms:** “Voltage is the push, Current is the flow, Resistance is the opposition”

Alternative forms:

- $I = \frac{V}{R}$ (current in terms of voltage)
- $R = \frac{V}{I}$ (resistance from V-I measurement)

> **◐ In simple terms · The Water Pipe Analogy**
>
> Think of electricity like water flowing through pipes:
>
> | Electrical | Water System |

> | --- | --- |

> | Voltage (V) | Water pressure |

> | Current (I) | Water flow rate |

> | Resistance (R) | Pipe narrowness/friction |
>
> **Higher pressure (V)** → More water flow (I)

> **Narrower pipe (higher R)** → Less water flow (I)
>
> This is exactly how Ohm’s law works!

### Units

- **Voltage (V):** Volt (V) = Joule/Coulomb
- **Current (I):** Ampere (A) = Coulomb/second
- **Resistance (R):** Ohm (Ω) = Volt/Ampere

---

## Ohmic vs Non-Ohmic Conductors

### Ohmic Conductors

**Definition:** Materials that obey Ohm’s law - current is directly proportional to voltage.

$$I \propto V \quad \text{(at constant temperature)}$$

**V-I Graph:** Straight line through origin

```fallback
I ↑
    |     /
    |    /
    |   /  (slope = 1/R)
    |  /
    | /
    |/________→ V
```

**Examples:**

- Metallic conductors (copper, aluminum, silver)
- Carbon resistors
- Nichrome wire (used in heaters)

**Key property:** Resistance $R$ remains constant (at constant temperature)

### Non-Ohmic Conductors

**Definition:** Materials where current is NOT directly proportional to voltage.

**V-I Graph:** NOT a straight line

**Examples:**

1. **Diode (Semiconductor)**

   - Current flows easily in one direction
   - High resistance in reverse direction
   - Exponential I-V relationship
2. **Filament Bulb**

   - Resistance increases as it heats up
   - I-V curve bends (current increases slower than voltage)
3. **LED (Light Emitting Diode)**

   - No current until threshold voltage
   - Then sudden current increase
4. **Electrolyte solutions**

   - I-V characteristic depends on ion concentration

> **⚠ Trap · Common Misconception**
>
> **Wrong thinking:** “Ohm’s law applies to all materials”
>
> **Reality:** Ohm’s law is NOT a universal law! It only works for ohmic conductors at constant temperature.
>
> **JEE Trap:** Questions may give a non-linear V-I graph and ask if Ohm’s law applies - answer is NO!

---

## V-I Characteristics Graphs

### 1. Metallic Conductor (Ohmic)

```gdscript3
I ↑
    |     /
    |    /  Straight line
    |   /   R = constant
    |  /
    | /
    |/________→ V
```

**Slope = 1/R**

- Linear relationship
- Passes through origin
- Constant resistance

### 2. Tungsten Filament Bulb

```fallback
I ↑
    |      ___---
    |   __/      Curve bends
    |  /         (R increases with I)
    | /
    |/________→ V
```

**Why it bends:**

- Current heats the filament
- Temperature ↑ → Resistance ↑
- So current increases slower than voltage

### 3. Diode (Semiconductor)

```fallback
I ↑  Forward bias
    |        |
    |        |___
    |        |
    |________|_______→ V
    |    Reverse
    |    bias
```

**Key features:**

- Threshold voltage needed in forward bias
- Very little current in reverse bias
- Used as one-way valve for current

### 4. Electrolyte

```fallback
I ↑
    |      /
    |    /   Initially curved
    |  /     (then becomes linear)
    | /
    |/________→ V
```

**Behavior:**

- Non-linear at low voltages
- Becomes approximately ohmic at higher voltages

---

## Limitations of Ohm’s Law

> **⚠ Trap · When Ohm's Law Breaks Down**
>
> 1. **Temperature changes:**
>
>    - Resistance varies with temperature

>    - Must specify “at constant temperature”

> 2. **Non-ohmic materials:**
>
>    - Semiconductors (diodes, transistors)

>    - Vacuum tubes

>    - Electrolytes (at low voltages)

> 3. **Very high electric fields:**
>
>    - Breakdown voltage exceeded

>    - Material properties change

> 4. **AC circuits with inductors/capacitors:**
>
>    - Need to use impedance, not resistance

>    - Phase difference between V and I

---

## Microscopic Form of Ohm’s Law

From drift velocity concepts:

$$J = \sigma E$$

where:

- $J$ = current density
- $\sigma$ = conductivity
- $E$ = electric field

**Derivation connection:**

$$I = nAev_d$$

$$v_d = \mu E = \frac{e\tau}{m}E$$

$$\therefore I = nAe \cdot \frac{e\tau}{m}E$$

With $E = \frac{V}{L}$ and $J = \frac{I}{A}$:

$$J = \sigma E \quad \text{where } \sigma = \frac{ne^2\tau}{m}$$

This is **Ohm’s law in vector form**!

---

## Memory Tricks & Patterns

### Mnemonic for Ohm’s Law

**“Very Interesting Results”** → $V = I \times R$

Or think: **“Voltage Is Really important”** → $V = IR$

### Remembering Forms

**Triangle method:**

```fallback
V
   ___
  | | |
  |I|R|
  |_|_|
```

- Cover V → $V = I \times R$
- Cover I → $I = V / R$
- Cover R → $R = V / I$

### Graph Recognition Patterns

| Graph Shape | Material Type | Ohm’s Law? |
| --- | --- | --- |
| Straight line through origin | Metallic conductor | YES |
| Curved upward (bending) | Filament bulb | NO |
| Steep rise after threshold | Diode/LED | NO |
| Flat then rising | Electrolyte | NO (initially) |

### JEE Exam Trick

**If graph is straight:** $R = \frac{V}{I} = \frac{1}{\text{slope}}$

**If graph is curved:** $R = \frac{V}{I}$ at that POINT (not constant!)

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Given two, find third:**
>
> - Know V and R → Find I = V/R

> - Know I and R → Find V = IR

> - Know V and I → Find R = V/I
>
> **For V-I graph questions:**
>
> - Straight line → Ohmic → Use $R = 1/\text{slope}$

> - Curved → Non-ohmic → Resistance varies with V or I
>
> **Word problem clues:**
>
> - “Metallic wire” → Assume ohmic

> - “Bulb”, “Diode”, “LED” → Non-ohmic

> - “At constant temperature” → Confirms ohmic behavior

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Assuming All Materials are Ohmic**
>
> **Wrong:** “This question has V and I, so V = IR applies”
>
> **Correct:** First check if material is ohmic!
>
> - Metals at constant T → Ohmic ✓

> - Semiconductors, bulbs, electrolytes → Non-ohmic ✗
>
> **JEE Insight:** If graph is given, it’s probably testing your understanding of NON-ohmic behavior!

> **⚠ Trap #2: Confusing Slope and Resistance**
>
> **Wrong:** “Slope of V-I graph = Resistance”
>
> **Correct:**
>
> - Slope of **V-I graph** = $\frac{dV}{dI} = R$

> - Slope of **I-V graph** = $\frac{dI}{dV} = \frac{1}{R}$ = Conductance
>
> **Memory trick:** More common is I-V graph, where slope = 1/R
>
> **Which axis is which?**
>
> - V-I graph: V on y-axis, I on x-axis → slope = R

> - I-V graph: I on y-axis, V on x-axis → slope = 1/R

> **⚠ Trap #3: Temperature Effect Ignored**
>
> **Wrong:** “Wire resistance is always constant”
>
> **Correct:** Resistance changes with temperature!
>
> - For metals: $R$ increases with T (positive temperature coefficient)

> - For semiconductors: $R$ decreases with T (negative temperature coefficient)
>
> **JEE application:** Filament bulb problems - as current increases, bulb heats up, R increases, so I-V curve bends!

> **⚠ Trap #4: Negative Resistance**
>
> **Wrong:** “Resistance can be negative if current flows backward”
>
> **Correct:**
>
> - Resistance is ALWAYS positive (for passive elements)

> - Current direction determines sign of $I$, not $R$

> - If you get negative R, you made a sign error!
>
> **Exception:** Active devices like tunnel diodes can show negative differential resistance in specific regions (but that’s beyond JEE scope).

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> A wire carries a current of 2 A when connected to a 12 V battery. Find its resistance.
>
> **Solution:**
>
> Using Ohm’s law: $V = IR$
>
> $$R = \frac{V}{I} = \frac{12}{2} = 6 \text{ Ω}$$
>
> **Answer:** $R = 6$ Ω
>
> **Concept check:** This assumes the wire is ohmic (metallic conductor).

> **↗ Connection · Problem 1.2**
>
> A resistor of 100 Ω is connected across a 220 V supply. Calculate the current through it.
>
> **Solution:**
>
> $$I = \frac{V}{R} = \frac{220}{100} = 2.2 \text{ A}$$
>
> **Answer:** $I = 2.2$ A
>
> **Safety note:** This is a significant current - the resistor will heat up! (We’ll study this in electrical power).

> **↗ Connection · Problem 1.3**
>
> Which of the following obey Ohm’s law?

> (a) Copper wire (b) LED (c) Diode (d) Nichrome wire
>
> **Solution:**
>
> **Ohmic conductors:** (a) Copper wire and (d) Nichrome wire
>
> - Both are metallic conductors

> - Show linear V-I characteristics at constant temperature
>
> **Non-ohmic:** (b) LED and (c) Diode
>
> - Semiconductor devices

> - Non-linear V-I characteristics
>
> **Answer:** (a) and (d) obey Ohm’s law

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> The V-I graph for a conductor makes an angle of 30° with the V-axis. Find the resistance of the conductor.
>
> **Solution:**
>
> In V-I graph (V on y-axis, I on x-axis):
>
> $$\text{slope} = \tan(30°) = \frac{V}{I} = R$$

$$R = \tan(30°) = \frac{1}{\sqrt{3}} = 0.577 \text{ Ω}$$
>
> **Answer:** $R = \frac{1}{\sqrt{3}}$ Ω
>
> **Key insight:** Angle with V-axis gives you the resistance directly!

> **↗ Connection · Problem 2.2**
>
> A 220 V, 100 W bulb is connected to a 110 V supply. What is the power consumed? (Assume resistance remains constant)
>
> **Solution:**
>
> First find resistance of bulb:
>
> $$P = \frac{V^2}{R}$$

$$R = \frac{V^2}{P} = \frac{(220)^2}{100} = 484 \text{ Ω}$$
>
> At 110 V:
>
> $$P' = \frac{V'^2}{R} = \frac{(110)^2}{484} = \frac{12100}{484} = 25 \text{ W}$$
>
> **Answer:** $P' = 25$ W
>
> **Key insight:** Power ∝ V² for constant R, so halving voltage reduces power to 1/4!
>
> **Reality check:** This assumes resistance stays constant, but for a real bulb, resistance decreases when cooler, so actual power would be slightly higher than 25 W.

> **↗ Connection · Problem 2.3**
>
> A battery of 12 V is connected to a resistor. The ammeter shows 3 A. If the voltmeter is connected across the resistor, what will it read?
>
> **Solution:**
>
> This tests understanding of circuit measurement!
>
> Ammeter reading: $I = 3$ A (measures current through resistor)
>
> By Ohm’s law:
>
> $$R = \frac{V}{I}$$
>
> But we need V! Since battery is 12 V and no internal resistance mentioned:
>
> **Voltmeter reading** = Voltage across resistor = **12 V**
>
> (Assuming ideal battery with no internal resistance)
>
> Using this:
>
> $$R = \frac{12}{3} = 4 \text{ Ω}$$
>
> **Answer:** Voltmeter reads 12 V
>
> **Circuit concept:** Voltmeter measures potential difference across the resistor, which equals battery voltage (for ideal battery).

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> The I-V characteristic of a non-ohmic conductor is given by $I = 2V + 3V^2$ (where I is in A and V is in volts). Find the resistance when V = 1 V and V = 2 V.
>
> **Solution:**
>
> For non-ohmic conductor, resistance varies with voltage.
>
> **At V = 1 V:**
>
> $$I = 2(1) + 3(1)^2 = 2 + 3 = 5 \text{ A}$$

$$R = \frac{V}{I} = \frac{1}{5} = 0.2 \text{ Ω}$$
>
> **At V = 2 V:**
>
> $$I = 2(2) + 3(2)^2 = 4 + 12 = 16 \text{ A}$$

$$R = \frac{V}{I} = \frac{2}{16} = 0.125 \text{ Ω}$$
>
> **Answer:**
>
> - At V = 1 V: R = 0.2 Ω

> - At V = 2 V: R = 0.125 Ω
>
> **Advanced insight:** Resistance DECREASES as voltage increases for this material. This is characteristic of certain semiconductors and electrolytes!
>
> **Differential resistance:**
>
> $$r = \frac{dV}{dI} = \frac{1}{\frac{dI}{dV}} = \frac{1}{2 + 6V}$$
>
> At V = 1 V: $r = 1/8 = 0.125$ Ω (dynamic resistance)

> **↗ Connection · Problem 3.2**
>
> Two wires of the same material have lengths in the ratio 1:2 and radii in the ratio 2:1. They are connected (a) in series, (b) in parallel across a battery. Find the ratio of currents through them in both cases.
>
> **Solution:**
>
> Resistance: $R = \rho \frac{L}{A} = \rho \frac{L}{\pi r^2}$
>
> For wire 1: $R_1 = \rho \frac{L_1}{\pi r_1^2}$
>
> For wire 2: $R_2 = \rho \frac{L_2}{\pi r_2^2}$
>
> $$\frac{R_2}{R_1} = \frac{L_2}{L_1} \times \frac{r_1^2}{r_2^2} = \frac{2}{1} \times \frac{(2)^2}{(1)^2} = 2 \times 4 = 8$$
>
> So $R_2 = 8R_1$
>
> **(a) In Series:**

> Same current through both wires!
>
> $$\frac{I_1}{I_2} = \frac{1}{1} = 1:1$$
>
> **(b) In Parallel:**

> Same voltage across both wires.
>
> $$I = \frac{V}{R}$$

$$\frac{I_1}{I_2} = \frac{R_2}{R_1} = \frac{8}{1} = 8:1$$
>
> **Answer:**
>
> - Series: $I_1 : I_2 = 1:1$

> - Parallel: $I_1 : I_2 = 8:1$
>
> **Key concepts:**
>
> - Series → Same current

> - Parallel → Current inversely proportional to resistance

> **↗ Connection · Problem 3.3 - JEE Advanced Level**
>
> The I-V characteristic of a material is shown below. Identify the region where the material obeys Ohm’s law, and calculate the resistance in that region.
>
> (Assume graph shows: Linear from 0-2V, then curved from 2-5V)
>
> **Solution:**
>
> **Ohmic region:** 0 to 2 V (linear portion)
>
> Let’s say at V = 2 V, I = 0.5 A (from graph)
>
> In linear region:
>
> $$R = \frac{V}{I} = \frac{2}{0.5} = 4 \text{ Ω}$$
>
> **Beyond 2 V:** Material becomes non-ohmic
>
> - Resistance is not constant

> - Must calculate $R = V/I$ at each point
>
> **Answer:**
>
> - Ohmic region: 0-2 V

> - Resistance in ohmic region: 4 Ω

> - Beyond 2 V: Non-ohmic behavior
>
> **JEE Strategy:** Always identify the LINEAR portion of V-I graphs - that’s where Ohm’s law applies!

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Basic Ohm’s law | $V = IR$ |
| Finding resistance from V-I graph (linear) | $R = \frac{V}{I} = \frac{1}{\text{slope of I-V graph}}$ |
| Metallic conductor at constant T | Ohmic (linear V-I) |
| Filament bulb, diode, LED | Non-ohmic (curved V-I) |
| Resistance from I-V curve | $R = V/I$ at that point |
| Microscopic form | $J = \sigma E$ |
| Power from Ohm’s law | $P = VI = I^2R = V^2/R$ |

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Graph interpretation**
>
>    - Identifying ohmic vs non-ohmic from V-I curves

>    - Calculating resistance from slope

>    - Appears in 2-3 questions every year!

> 2. **Conceptual understanding**
>
>    - Why Ohm’s law fails for certain materials

>    - Temperature effects on resistance

>    - Often asked as assertion-reason questions

> 3. **Numerical problems**
>
>    - Quick calculations with $V = IR$

>    - Combined with power formulas

>    - Multi-step problems with series/parallel circuits

> 4. **Common traps**
>
>    - Confusing slope of V-I vs I-V graphs

>    - Assuming all materials are ohmic

>    - Forgetting temperature dependence
>
> **Time-saving tricks:**
>
> - Recognize graph shapes instantly (practice 10-15 graphs)

> - Use triangle method for quick formula recall

> - For non-ohmic: Calculate R at specific points, don’t assume constant

---

## Real-World Applications

> **◐ In simple terms · Where You See Ohm's Law**
>
> 1. **Phone chargers**
>
>    - Converts 220V AC to 5V DC

>    - Resistance of charging cable determines current

> 2. **Filament bulbs** (Jawan, Oppenheimer scenes)
>
>    - Non-ohmic behavior due to heating

>    - That’s why bulbs often fail when switched ON (cold → low R → high surge current)

> 3. **LED lights**
>
>    - Don’t follow Ohm’s law

>    - Need current-limiting resistors

> 4. **Electric heaters** (Nichrome wire)
>
>    - Ohmic at steady state

>    - Constant resistance = predictable heating

> 5. **Iron Man’s arc reactor**
>
>    - Superconducting components (zero resistance!)

>    - Normal conductors would waste too much energy as heat

---

## Related Topics

### Within Current Electricity

- [Drift Velocity](../drift-velocity/index.md) - Microscopic origin of Ohm’s law
- [Resistance and Resistivity](../resistance/index.md) - Material properties affecting V-I characteristics
- [Electrical Power](../electrical-power/index.md) - Energy dissipation in resistors
- [Kirchhoff’s Laws](../kirchhoffs-laws/index.md) - Applying Ohm’s law to complex circuits

### Connected Chapters

- [Electrostatics](../../electrostatics/electric-potential/index.md) - Voltage as potential difference
- [Magnetism](../../magnetism/index.md) - V-I characteristics of inductors
- [Semiconductors](../../electronic-devices/index.md) - Non-ohmic behavior explained

### Math Connections

- [Linear Equations](../../../mathematics/index.md) - Straight-line V-I graphs
- [Graphs and Functions](../../../mathematics/coordinate-geometry/index.md) - Interpreting V-I characteristics
- [Differentiation](../../../mathematics/index.md) - Dynamic resistance = dV/dI

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Ohm’s law $V = IR$ relates voltage, current, and resistance** - but only for ohmic conductors at constant temperature!

> 2. **Ohmic conductors show linear V-I graphs** - metallic wires, resistors, nichrome. Non-ohmic show curved graphs - diodes, LEDs, bulbs, electrolytes.

> 3. **Resistance from graphs:** For I-V graph (most common), slope = 1/R. For V-I graph, slope = R.

> 4. **Temperature matters!** Metals increase resistance when heated (filament bulb curve bends). Semiconductors decrease resistance when heated.

> 5. **The microscopic form $J = \sigma E$ is Ohm’s law in vector form** - connects to drift velocity and material properties.
>
> **“Ohm’s law is like a straight road - only some materials follow it. Others take curved paths. Know who’s who, and you’ll ace JEE questions!”**

---

From TestGuru · our mock-test platform

## You've read Ohm's Law and V-I Characteristics.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=current-electricity&tg_exam=jee-main&tg_page=%2Fphysics%2Fcurrent-electricity%2Fohms-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-17

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/current-electricity/ohms-law/",this.page.identifier="/physics/current-electricity/ohms-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="ohmsLawSimulator" id="anim-ohmsLawSimulator-1795396423095169690"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-ohmsLawSimulator-1795396423095169690")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="formulaOhmsLaw" id="anim-formulaOhmsLaw-1795396423095198719"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-formulaOhmsLaw-1795396423095198719")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/current-electricity/ohms-law/](https://jeenotes.in/physics/current-electricity/ohms-law/) · raw HTML: `offline/physics/current-electricity/ohms-law/index.html`_
