---
title: "Second Law of Thermodynamics"
source: "https://jeenotes.in/physics/thermodynamics/second-law/"
description: "Master the Second Law, Kelvin-Planck and Clausius statements, and understand entropy for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 10"
html: "../../../../offline/physics/thermodynamics/second-law/index.html"
extracted: "2026-11-23"
---

> Master the Second Law, Kelvin-Planck and Clausius statements, and understand entropy for JEE Main & Advanced

## Real-Life Hook: Why Can’t We Run Cars on Ocean Heat?

The ocean contains enormous thermal energy—enough to power civilization for millennia! So why can’t we extract it and run cars, factories, and cities for free?

The answer lies in the **Second Law of Thermodynamics**: you can’t convert heat completely into work without something else happening. The ocean is at uniform temperature, and the Second Law forbids extracting work from a single heat reservoir.

This explains why:

- We can’t build perpetual motion machines
- Refrigerators need external power
- All real engines are less than 100% efficient
- Time flows in one direction (broken eggs don’t un-break!)

The Second Law is the most profound law in physics—it governs the arrow of time itself.

---

## The Second Law: Why It Matters

### What Does the First Law Miss?

**First Law:** Energy is conserved (Q = ΔU + W)

But First Law allows:

- Heat flowing from cold to hot spontaneously ❌
- 100% conversion of heat to work ❌
- Running engines on single reservoir ❌

**None of these happen in nature!** We need the Second Law.

### The Second Law: Multiple Perspectives

The Second Law has several equivalent statements:

1. **Kelvin-Planck Statement** (heat engines)
2. **Clausius Statement** (refrigerators)
3. **Entropy Statement** (general)

All are equivalent—proving one proves all!

---

## Kelvin-Planck Statement

### Statement

> **It is impossible to construct a heat engine that, operating in a cycle, produces no effect other than the absorption of heat from a reservoir and the performance of an equal amount of work.**

### Simplified Version

**You cannot build an engine that:**

- Takes heat from single source
- Converts it completely to work (100% efficiency)
- Has no other effect

### Why It Matters

**Implications:**

1. **No perfect heat engine** (efficiency always < 100%)
2. **Must have two reservoirs** (hot and cold)
3. **Must reject some heat** to cold reservoir
4. **Carnot engine is the best possible**

### Violation Would Mean

If Kelvin-Planck could be violated:

- Ships could run on ocean heat alone
- Cars could run on atmospheric heat
- Perpetual motion of second kind
- Free energy from environment!

**Nature forbids this.** Some heat MUST be wasted.

### Mathematical Form

For any heat engine:

$$\eta = \frac{W}{Q_H} < 1$$

Or equivalently:

$$W < Q_H$$

**Cannot convert all absorbed heat to work in a cycle.**

---

## Clausius Statement

### Statement

> **It is impossible to construct a device that, operating in a cycle, produces no effect other than the transfer of heat from a cooler body to a hotter body.**

### Simplified Version

**Heat cannot spontaneously flow from cold to hot.**

### Why It Matters

**Implications:**

1. **Heat flows cold → hot only with external work**
2. **Refrigerators need power input**
3. **Air conditioners require electricity**
4. **Natural direction:** hot → cold

### Violation Would Mean

If Clausius could be violated:

- Rooms would cool without AC
- Ice would form in hot water spontaneously
- Refrigerators would work without power
- Heat would flow “uphill” for free

**Never observed in nature.**

### Mathematical Form

For refrigerator/heat pump:

$$\text{Work input } W > 0 \text{ required to move heat from } T_C \text{ to } T_H$$

---

## Equivalence of Kelvin-Planck and Clausius

### Proof: Clausius Violation → Kelvin-Planck Violation

**Assume:** We have device R violating Clausius (transfers Q from cold to hot with no work).

**Construct:**

1. Device R: Transfers Q₂ from cold to hot (no work)
2. Real engine E: Takes Q₁ from hot, does work W, rejects Q₂ to cold

**Combined system:**

- Hot reservoir: receives Q₂ from R, gives Q₁ to E → net: receives (Q₂ - Q₁) = -W
- Cold reservoir: gives Q₂ to R, receives Q₂ from E → net: zero
- Output: Work W

**Result:** Combined device takes heat W from single reservoir (hot) and converts to work W completely!

**This violates Kelvin-Planck!**

Therefore: **Clausius violation → Kelvin-Planck violation**

### Proof: Kelvin-Planck Violation → Clausius Violation

**Left as exercise** (similar logic, reverse direction)

**Conclusion:** The two statements are equivalent.

---

## Heat Engine Fundamentals

### Heat Engine Basics

**Components:**

1. **Hot reservoir** at $T_H$: Supplies heat $Q_H$
2. **Working substance** (gas): Undergoes cyclic process
3. **Cold reservoir** at $T_C$: Receives rejected heat $Q_C$

**Process:**

- Absorb heat $Q_H$ from hot reservoir
- Do work $W$ on surroundings
- Reject heat $Q_C$ to cold reservoir
- Return to initial state (cyclic)

### Energy Conservation (First Law)

For complete cycle: $\Delta U = 0$

$$Q_H = W + Q_C$$

$$W = Q_H - Q_C$$

### Efficiency

**Efficiency:**

$$\eta = \frac{W}{Q_H} = \frac{Q_H - Q_C}{Q_H}$$

$$\eta = 1 - \frac{Q_C}{Q_H}$$

**Second Law constraint:**

$$\eta < 1 \quad \text{(always)}$$

### Maximum Efficiency: Carnot Engine

**Carnot efficiency:**

$$\eta_{Carnot} = 1 - \frac{T_C}{T_H}$$

This is the **maximum possible** efficiency for any engine between $T_H$ and $T_C$.

**Key point:** Depends ONLY on temperatures, not on working substance!

More details: [Heat Engines and Carnot Cycle →](../heat-engines/index.md)

---

## Refrigerator and Heat Pump

### Refrigerator

**Purpose:** Remove heat from cold space

**Components:**

- Cold reservoir at $T_C$ (inside fridge)
- Hot reservoir at $T_H$ (room)
- Work input $W$

**Process:**

- Absorb heat $Q_C$ from cold space
- Input work $W$
- Reject heat $Q_H$ to room
- $Q_H = Q_C + W$

### Coefficient of Performance (COP)

**For Refrigerator:**

$$\text{COP}_R = \frac{Q_C}{W} = \frac{Q_C}{Q_H - Q_C}$$

**Higher is better** (more cooling per unit work)

**Carnot refrigerator (maximum):**

$$\text{COP}_{Carnot,R} = \frac{T_C}{T_H - T_C}$$

### Heat Pump

**Purpose:** Heat warm space (opposite focus from refrigerator)

**For Heat Pump:**

$$\text{COP}_{HP} = \frac{Q_H}{W} = \frac{Q_H}{Q_H - Q_C}$$

**Note:** $\text{COP}_{HP} = \text{COP}_R + 1$

**Carnot heat pump:**

$$\text{COP}_{Carnot,HP} = \frac{T_H}{T_H - T_C}$$

### Key Differences

| Device | Goal | COP | Typical Values |
| --- | --- | --- | --- |
| **Refrigerator** | Cool inside | $Q_C/W$ | 2-5 |
| **Heat Pump** | Heat inside | $Q_H/W$ | 3-6 |
| **Heat Engine** | Produce work | $W/Q_H$ (η) | 0.3-0.6 |

**Note:** COP can be > 1 (unlike efficiency)! This is because refrigerator moves existing heat, doesn’t create it.

---

## Reversible vs Irreversible Processes

### Reversible Process

**Definition:** A process that can be reversed by infinitesimal changes, leaving no trace in universe.

**Conditions:**

1. **Quasi-static:** Infinitely slow (always near equilibrium)
2. **No friction:** No dissipative forces
3. **No heat flow across finite ΔT:** Only across infinitesimal temperature difference
4. **No turbulence, mixing, etc.**

**Examples:**

- Ideal gas expanding in frictionless piston, infinitely slowly
- Carnot cycle (theoretical)

**Reality:** **No real process is perfectly reversible!**

### Irreversible Process

**Definition:** Process that cannot be reversed without leaving changes in surroundings.

**Causes of Irreversibility:**

1. **Friction**
2. **Heat transfer across finite ΔT**
3. **Free expansion**
4. **Mixing of different substances**
5. **Plastic deformation**
6. **Electrical resistance**

**Examples:**

- Rubbing hands (friction → heat)
- Ice melting in warm water
- Gas expanding into vacuum
- Stirring cream into coffee

**Reality:** **All real processes are irreversible!**

### Why It Matters

**Key Theorem:**

> **All reversible engines operating between same two temperatures have same efficiency (Carnot efficiency). All irreversible engines have lower efficiency.**

$$\eta_{reversible} = \eta_{Carnot} = 1 - \frac{T_C}{T_H}$$

$$\eta_{irreversible} < \eta_{Carnot}$$

**Carnot engine is the ideal limit!**

---

## Carnot’s Theorem

### Statement

> **No engine operating between two given temperatures can be more efficient than a Carnot (reversible) engine operating between the same temperatures.**

### Implications

1. **Carnot efficiency is maximum possible**
2. **All reversible engines have same efficiency** (independent of working substance!)
3. **All real engines are less efficient** (due to irreversibilities)
4. **Efficiency depends only on temperatures**

### Proof (by Contradiction)

**Assume:** Engine E is more efficient than Carnot engine C.

**Setup:**

- Both operate between $T_H$ and $T_C$
- Let $\eta_E > \eta_C$
- Run C in reverse as refrigerator (possible since reversible)

**Energy flow:**

- Engine E: Takes $Q_H$ from hot, does work $W_E$, rejects $Q_C$
- Refrigerator C: Takes work $W_C < W_E$, removes $Q_C'$ from cold, delivers $Q_H'$ to hot

**Adjust C so** $Q_H' = Q_H$:

- Work input to C: $W_C = Q_H(1 - \eta_C)$
- Work output from E: $W_E = Q_H \eta_E$
- Net work: $W_{net} = W_E - W_C = Q_H(\eta_E - \eta_C) > 0$

**Combined system:**

- Hot reservoir: Zero net heat transfer
- Cold reservoir: Net heat extracted
- Output: Net work

**This is a device extracting heat from single reservoir and converting completely to work!**

**Violates Kelvin-Planck!**

Therefore: **$\eta_E \leq \eta_{Carnot}$**

---

## Common Mistakes & Misconceptions

### Mistake 1: Confusing Efficiency and COP

❌ Refrigerator efficiency = $Q_C/W$
✅ Refrigerator COP = $Q_C/W$ (don’t call it efficiency!)

**Efficiency** applies to engines (always < 1).
**COP** applies to refrigerators/heat pumps (can be > 1).

### Mistake 2: 100% Efficiency Possible

❌ With perfect insulation, η = 100%
✅ Second Law forbids η = 100% (even with perfect insulation)

**Must reject some heat to cold reservoir.**

### Mistake 3: Second Law = Energy Conservation

❌ Second Law says energy is conserved
✅ That’s First Law! Second Law says **direction** of processes

**First Law:** How much energy?
**Second Law:** Which direction?

### Mistake 4: Reversible = Can Physically Reverse

❌ Reversible means you can run it backward in practice
✅ Reversible means **thermodynamically** reversible (quasi-static, no friction, etc.)

**Real processes can often run backward (like engines), but they’re still thermodynamically irreversible!**

### Memory Trick: “KP-HE, C-R”

- **K**elvin-**P**lanck: **H**eat **E**ngines (can’t be 100% efficient)
- **C**lausius: **R**efrigerators (need work to cool)

### Trick: Carnot is the GOAT

**G**reatest **O**f **A**ll **T**emperatures (efficiency depends only on T)

- Best possible efficiency
- Same for all working substances
- Only temperature matters

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** Which statement is the Kelvin-Planck statement of Second Law?
(a) Heat cannot flow from cold to hot
(b) No engine can be 100% efficient
(c) Entropy always increases
(d) Energy is conserved

<details><summary>Solution</summary><p><strong>(b) No engine can be 100% efficient</strong></p><p>More precisely: No engine operating in a cycle can convert heat completely to work without any other effect.</p><ul><li>(a) is Clausius statement</li><li>(c) is Entropy statement</li><li>(d) is First Law</li></ul></details>

**Q2.** A Carnot engine operates between 500 K and 300 K. Find its efficiency.

<details><summary>Solution</summary>$$\eta = 1 - \frac{T_C}{T_H} = 1 - \frac{300}{500} = 1 - 0.6 = 0.4$$<p><strong>Efficiency = 40%</strong></p><p><strong>Remember:</strong> Always use Kelvin for Carnot efficiency!</p></details>

**Q3.** A refrigerator absorbs 100 J from cold reservoir and rejects 140 J to hot reservoir. Find:
(a) Work input
(b) COP

<details><summary>Solution</summary><p><strong>(a) Work input:</strong></p>$$Q_H = Q_C + W$$<p></p>$$140 = 100 + W$$<p></p>$$W = 40 \text{ J}$$<p><strong>(b) COP:</strong></p>$$\text{COP} = \frac{Q_C}{W} = \frac{100}{40} = 2.5$$</details>

---

### Level 2: JEE Main/Advanced

**Q4.** A heat engine has efficiency 30%. It rejects 700 J to cold reservoir per cycle. Find:
(a) Heat absorbed from hot reservoir
(b) Work done per cycle

<details><summary>Solution</summary><p>Given: $\eta = 0.3$, $Q_C = 700$ J</p><p><strong>(a) Heat absorbed:</strong></p>$$\eta = 1 - \frac{Q_C}{Q_H}$$<p></p>$$0.3 = 1 - \frac{700}{Q_H}$$<p></p>$$\frac{700}{Q_H} = 0.7$$<p></p>$$Q_H = \frac{700}{0.7} = 1000 \text{ J}$$<p><strong>(b) Work done:</strong></p>$$W = Q_H - Q_C = 1000 - 700 = 300 \text{ J}$$<p>Or: $W = \eta \times Q_H = 0.3 \times 1000 = 300$ J ✓</p></details>

**Q5.** An ideal refrigerator operates between -10°C and 30°C. Find:
(a) Maximum COP
(b) Heat rejected to room when 100 J is removed from cold space

<details><summary>Solution</summary><p>Convert to Kelvin: $T_C = 263$ K, $T_H = 303$ K</p><p><strong>(a) Maximum COP (Carnot):</strong></p>$$\text{COP}_{max} = \frac{T_C}{T_H - T_C} = \frac{263}{303 - 263} = \frac{263}{40} = 6.575$$<p><strong>(b) Work required:</strong></p>$$\text{COP} = \frac{Q_C}{W}$$<p></p>$$W = \frac{Q_C}{\text{COP}} = \frac{100}{6.575} = 15.21 \text{ J}$$<p><strong>Heat rejected:</strong></p>$$Q_H = Q_C + W = 100 + 15.21 = 115.21 \text{ J}$$<p><strong>Note:</strong> High COP means little work needed (temperature difference is small).</p></details>

**Q6.** Two Carnot engines A and B operate in series. Engine A absorbs heat from reservoir at 600 K and rejects to reservoir at temperature T. Engine B absorbs this rejected heat and rejects to reservoir at 300 K. If both have same efficiency, find T.

<details><summary>Solution</summary><p><strong>Engine A:</strong> Between 600 K and T</p>$$\eta_A = 1 - \frac{T}{600}$$<p><strong>Engine B:</strong> Between T and 300 K</p>$$\eta_B = 1 - \frac{300}{T}$$<p><strong>Given:</strong> $\eta_A = \eta_B$</p>$$1 - \frac{T}{600} = 1 - \frac{300}{T}$$<p></p>$$\frac{T}{600} = \frac{300}{T}$$<p></p>$$T^2 = 600 \times 300 = 180000$$<p></p>$$T = \sqrt{180000} = 424.26 \text{ K}$$<p><strong>Or use geometric mean:</strong>
For equal efficiencies in series, intermediate temperature is geometric mean:</p>$$T = \sqrt{T_H \times T_C} = \sqrt{600 \times 300} = \sqrt{180000} ≈ 424 \text{ K}$$</details>

---

### Level 3: JEE Advanced

**Q7.** A heat engine absorbs 1000 J from reservoir at 500 K and rejects heat to reservoir at 300 K. What is the maximum work it can do? If it does only 300 J of work, is the engine reversible?

<details><summary>Solution</summary><p><strong>(a) Maximum work (Carnot):</strong></p>$$\eta_{max} = 1 - \frac{300}{500} = 1 - 0.6 = 0.4$$

$$W_{max} = \eta_{max} \times Q_H = 0.4 \times 1000 = 400 \text{ J}$$<p><strong>(b) Is engine reversible?</strong></p><p>Actual work: $W = 300$ J &lt; $W_{max} = 400$ J</p><p>Actual efficiency:</p>$$\eta_{actual} = \frac{300}{1000} = 0.3 &lt; \eta_{max}$$<p><strong>Engine is irreversible</strong> (less efficient than Carnot).</p><p><strong>Heat rejected:</strong></p>$$Q_C = Q_H - W = 1000 - 300 = 700 \text{ J}$$<p><strong>Check:</strong> For Carnot, $Q_C$ would be $1000 - 400 = 600$ J.
Actual engine rejects more heat (700 J &gt; 600 J), confirming irreversibility.</p></details>

**Q8.** Prove that COP of heat pump is always greater than COP of refrigerator by exactly 1.

<details><summary>Solution</summary><p><strong>For Refrigerator:</strong></p>$$\text{COP}_R = \frac{Q_C}{W}$$<p><strong>For Heat Pump:</strong></p>$$\text{COP}_{HP} = \frac{Q_H}{W}$$<p><strong>From First Law:</strong> $Q_H = Q_C + W$</p><p>Substitute in $\text{COP}_{HP}$:</p>$$\text{COP}_{HP} = \frac{Q_C + W}{W} = \frac{Q_C}{W} + \frac{W}{W}$$<p></p>$$\text{COP}_{HP} = \frac{Q_C}{W} + 1$$<p></p>$$\text{COP}_{HP} = \text{COP}_R + 1$$<p><strong>Proved!</strong></p><p><strong>Intuition:</strong> Heat pump delivers all the heat removed from cold space PLUS the work done, so COP is higher by exactly the work term.</p><p><strong>Example:</strong> If $\text{COP}_R = 4$, then $\text{COP}_{HP} = 5$.</p></details>

**Q9.** A Carnot engine efficiency is 40%. If temperature of cold reservoir is decreased by 50 K, efficiency becomes 50%. Find the temperatures of both reservoirs.

<details><summary>Solution</summary><p><strong>Initial condition:</strong></p>$$\eta_1 = 1 - \frac{T_C}{T_H} = 0.4$$<p></p>$$\frac{T_C}{T_H} = 0.6$$<p></p>$$T_C = 0.6T_H \quad ...(1)$$<p><strong>After decreasing $T_C$ by 50 K:</strong></p>$$\eta_2 = 1 - \frac{T_C - 50}{T_H} = 0.5$$<p></p>$$\frac{T_C - 50}{T_H} = 0.5$$<p></p>$$T_C - 50 = 0.5T_H$$<p></p>$$T_C = 0.5T_H + 50 \quad ...(2)$$<p><strong>Equate (1) and (2):</strong></p>$$0.6T_H = 0.5T_H + 50$$<p></p>$$0.1T_H = 50$$<p></p>$$T_H = 500 \text{ K}$$<p><strong>From (1):</strong></p>$$T_C = 0.6 \times 500 = 300 \text{ K}$$<p><strong>Verification:</strong></p><ul><li>Initial: $\eta = 1 - 300/500 = 0.4$ ✓</li><li>After: $\eta = 1 - 250/500 = 0.5$ ✓</li></ul><p><strong>Answer:</strong> $T_H = 500$ K (227°C), $T_C = 300$ K (27°C)</p></details>

**Q10.** Three Carnot engines operate in series between 800 K and 200 K with equal efficiencies. Find the intermediate temperatures.

<details><summary>Solution</summary><p>Let temperatures be: 800 K, $T_1$, $T_2$, 200 K</p><p><strong>Engines:</strong></p><ol><li>A: 800 K to $T_1$, efficiency $\eta$</li><li>B: $T_1$ to $T_2$, efficiency $\eta$</li><li>C: $T_2$ to 200 K, efficiency $\eta$</li></ol><p><strong>For equal efficiencies:</strong></p>$$1 - \frac{T_1}{800} = 1 - \frac{T_2}{T_1} = 1 - \frac{200}{T_2}$$<p><strong>From first two:</strong></p>$$\frac{T_1}{800} = \frac{T_2}{T_1}$$<p></p>$$T_1^2 = 800T_2 \quad ...(1)$$<p><strong>From last two:</strong></p>$$\frac{T_2}{T_1} = \frac{200}{T_2}$$<p></p>$$T_2^2 = 200T_1 \quad ...(2)$$<p><strong>Substitute (2) into (1):</strong></p>$$T_1^2 = 800T_2$$<p>From (2): $T_2 = \sqrt{200T_1}$</p>$$T_1^2 = 800\sqrt{200T_1}$$<p></p>$$T_1^4 = 640000 \times 200T_1$$<p></p>$$T_1^3 = 128000000$$<p></p>$$T_1 = (128 \times 10^6)^{1/3} = 502.4 \text{ K}$$<p>Wait, let me use a better approach.</p><p><strong>For n engines in series with equal efficiencies:</strong>
Temperatures form geometric progression!</p>$$T_1 = 800 \times r$$<p></p>$$T_2 = 800 \times r^2$$<p></p>$$200 = 800 \times r^3$$

$$r^3 = \frac{200}{800} = \frac{1}{4}$$<p></p>$$r = \left(\frac{1}{4}\right)^{1/3} = \frac{1}{4^{1/3}} = \frac{1}{1.587} = 0.630$$

$$T_1 = 800 \times 0.630 = 504 \text{ K}$$<p></p>$$T_2 = 800 \times (0.630)^2 = 800 \times 0.397 = 317.6 \text{ K}$$<p><strong>Verification:</strong></p><ul><li>$\eta_A = 1 - 504/800 = 0.37$</li><li>$\eta_B = 1 - 317.6/504 = 0.37$ ✓</li><li>$\eta_C = 1 - 200/317.6 = 0.37$ ✓</li></ul><p><strong>Answer:</strong> $T_1 ≈ 504$ K, $T_2 ≈ 318$ K</p><p><strong>General formula:</strong> For n engines between $T_H$ and $T_C$:</p>$$T_i = T_H \left(\frac{T_C}{T_H}\right)^{i/n}$$</details>

---

## Connection to Other Topics

### → Heat Engines and Carnot Cycle

Detailed analysis of Carnot engine, efficiency:
[Heat Engines →](../heat-engines/index.md)

### → Entropy

Second Law can be stated as “Entropy of universe increases”:
[Entropy →](../entropy/index.md)

### → PV Diagrams

Reversible processes are quasi-static paths on PV diagrams:
[PV Diagrams →](../pv-diagrams/index.md)

### → Real Engines

Otto, Diesel cycles less efficient than Carnot:
[Real engine cycles →](../heat-engines/index.md)

---

## Quick Revision Points

### Kelvin-Planck:

No engine can be 100% efficient in converting heat to work

### Clausius:

Heat cannot spontaneously flow from cold to hot

### Carnot Efficiency:

$$\eta_{Carnot} = 1 - \frac{T_C}{T_H}$$

(Maximum possible between $T_H$ and $T_C$)

### Refrigerator COP:

$$\text{COP}_R = \frac{Q_C}{W} = \frac{T_C}{T_H - T_C}$$

### Heat Pump COP:

$$\text{COP}_{HP} = \frac{Q_H}{W} = \frac{T_H}{T_H - T_C} = \text{COP}_R + 1$$

### Key Relations:

- All reversible engines: Same efficiency (Carnot)
- All irreversible engines: Lower efficiency
- Real processes: Always irreversible

---

## JEE Strategy Tips

1. **Always convert to Kelvin** for Carnot formulas
2. **Efficiency < 1** for engines, **COP can be > 1** for refrigerators
3. **Carnot is maximum** - any real engine has lower efficiency
4. **Reversible ≠ Realistic** - all real processes are irreversible
5. **For series engines:** Use geometric mean for equal efficiencies
6. **Remember:** $\text{COP}_{HP} = \text{COP}_R + 1$

---

**Next Topic:** [Heat Engines and Carnot Cycle →](../heat-engines/index.md)

---

*Last updated: February 2025*

From TestGuru · our mock-test platform

## You've read Second Law of Thermodynamics.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fphysics%2Fthermodynamics%2Fsecond-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/thermodynamics/second-law/",this.page.identifier="/physics/thermodynamics/second-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424344333154"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424344333154")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/thermodynamics/second-law/](https://jeenotes.in/physics/thermodynamics/second-law/) · raw HTML: `offline/physics/thermodynamics/second-law/index.html`_
