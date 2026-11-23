---
title: "Electrical Power and Heating Effects"
source: "https://jeenotes.in/physics/current-electricity/electrical-power/"
description: "Master electrical power, Joule's heating, and energy dissipation for JEE Physics with practical applications"
updated: "2026-08-01"
reading_time: "15 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 8"
html: "../../../../offline/physics/current-electricity/electrical-power/index.html"
extracted: "2026-11-23"
---

> Master electrical power, Joule's heating, and energy dissipation for JEE Physics with practical applications

## Prerequisites

Before studying this topic, make sure you understand:

- [Ohm’s Law](../ohms-law/index.md) - V-I relationship
- [Resistance](../resistance/index.md) - Energy dissipation mechanism
- [Work and Energy](../../work-energy-power/index.md) - Basic energy concepts

## The Hook: Why Does Your Phone Charger Get Warm?

> **★ Key point · Connect: Charging Your Phone → Electrical Power**
>
> You’re binge-watching **Stranger Things** on your phone. After 2 hours of continuous charging, you touch the charger - it’s WARM! Why?
>
> **The answer:** Electrical energy is being WASTED as heat in the charger and cable. This is inevitable whenever current flows through resistance.
>
> **More examples:**
>
> - Electric kettles boil water using this heating effect

> - Incandescent bulbs waste 90% of energy as heat (only 10% as light!)

> - Iron Man’s arc reactor would overheat instantly without sci-fi cooling

> - Your laptop fan works overtime because CPU resistors generate heat
>
> **The Big Question:** How much electrical energy is consumed per second? And how much becomes heat? Let’s calculate!

## Interactive Demo

Adjust voltage and resistance to see power dissipation:

---

## The Core Concept: Electrical Power

**Power** is the rate at which electrical energy is consumed or delivered.

$$\boxed{P = \frac{W}{t} = \frac{E}{t}}$$

**Unit:** Watt (W) = Joule/second

**In simple terms:** “How many joules of electrical energy are used per second”

### Power in Terms of V and I

From work done in moving charge:

$$W = VQ$$

$$P = \frac{W}{t} = \frac{VQ}{t} = V \times \frac{Q}{t}$$

$$\boxed{P = VI}$$

**This is the MASTER formula for electrical power!**

---

## Multiple Forms of Power Formula

Using Ohm’s law ($V = IR$), we can derive different forms:

### 1. Basic Form

$$\boxed{P = VI}$$

**Use when:** V and I are directly given

### 2. Current Form

$$\boxed{P = I^2R}$$

**Derivation:** $P = VI = (IR) \times I = I^2R$

**Use when:** Current and resistance are known

### 3. Voltage Form

$$\boxed{P = \frac{V^2}{R}}$$

**Derivation:** $P = VI = V \times \frac{V}{R} = \frac{V^2}{R}$

**Use when:** Voltage and resistance are known

> **◐ In simple terms · Which Formula to Use?**
>
> | Given | Use Formula | Example |

> | --- | --- | --- |

> | V and I | $P = VI$ | Power consumed by any device |

> | I and R | $P = I^2R$ | Heat in resistor, same I |

> | V and R | $P = V^2/R$ | Devices in parallel, same V |
>
> **Common mistake:** Using wrong formula based on what’s given!
>
> **JEE Trick:** In series (same I) → Use $P = I^2R$

> In parallel (same V) → Use $P = V^2/R$

---

## Joule’s Law of Heating

When current flows through a resistor, electrical energy is converted to heat.

**Heat produced:**

$$\boxed{H = I^2Rt = Pt}$$

where:

- $H$ = heat energy (Joules)
- $I$ = current (A)
- $R$ = resistance (Ω)
- $t$ = time (seconds)

**Alternative forms:**

$$H = VIt = \frac{V^2t}{R}$$

**In calories:**

$$H = \frac{I^2Rt}{4.2} \text{ calories}$$

(Since 1 calorie = 4.2 J)

> **◐ In simple terms · Real-World Example: Electric Heater**
>
> An electric heater rated 1000 W running for 1 hour:
>
> Energy consumed: $E = Pt = 1000 \times 3600 = 3.6 \times 10^6$ J = 3.6 MJ
>
> This equals: 1 kWh (kilowatt-hour) = 1 “unit” of electricity!
>
> **Electricity bill:** You pay for ENERGY (kWh), not power (W)!

---

## Applications of Heating Effect

### 1. Electric Heater / Kettle

**Mechanism:** Nichrome wire (high resistance) → Current → Heat → Boils water

**Why Nichrome?**

- High resistivity → More heat per unit length
- High melting point (1400°C) → Won’t melt
- Low temperature coefficient → Constant performance

### 2. Electric Fuse

**Purpose:** Protects circuits from excessive current

**Mechanism:**

- Thin wire with low melting point (tin/lead alloy)
- If $I$ exceeds safe limit → $I^2R$ heating melts the wire
- Circuit breaks → Prevents fire

**Design:** Rated for specific current (5A, 10A, 15A fuses)

> **⚠ Trap · Never Replace Fuse with Thick Wire!**
>
> Using thick wire or aluminum foil instead of proper fuse is EXTREMELY DANGEROUS!
>
> **What happens:**
>
> - Thick wire won’t melt even at high current

> - Excessive current → House wiring heats up

> - Can cause FIRE!
>
> **Always use correct rated fuse.**

### 3. Electric Bulb (Incandescent)

**Mechanism:**

- Tungsten filament at ~2500°C glows white-hot
- Power input: 100 W
- Light output: ~10 W (10% efficiency!)
- Heat waste: ~90 W (90% wasted as heat)

**Why tungsten?**

- Highest melting point of all metals (3422°C)
- Can glow white-hot without melting

**This is why:** LEDs are better - 90% efficiency, almost no heat!

### 4. Electric Iron

**Temperature control:**

- Bimetallic strip acts as thermostat
- When too hot → Strip bends → Breaks circuit
- When cool → Strip straightens → Completes circuit

### 5. Welding

**High current (100-400 A) through contact point:**

- $H = I^2Rt$ with large $I$ → Intense heat
- Metals melt and fuse together

---

## Power Rating of Appliances

Household appliances are marked with power ratings.

**Example:** “220V, 100W” bulb

**Meaning:**

- Designed to work at 220 V
- Consumes 100 W at this voltage
- Current drawn: $I = P/V = 100/220 = 0.45$ A
- Resistance: $R = V^2/P = 48400/100 = 484$ Ω

### What if Voltage Changes?

**Case 1: Bulb rated “220V, 100W” connected to 110V**

Resistance stays constant: $R = \frac{V^2}{P} = \frac{220^2}{100} = 484$ Ω

At 110V:

$$P' = \frac{V'^2}{R} = \frac{110^2}{484} = \frac{12100}{484} = 25 \text{ W}$$

**Result:** Bulb glows dimly (only 25W instead of 100W)

**Case 2: Same bulb connected to 440V**

$$P' = \frac{440^2}{484} = \frac{193600}{484} = 400 \text{ W}$$

**Result:** Bulb draws 4 times rated power → Will burn out instantly!

> **⚠ Trap · Voltage Mismatch Danger**
>
> **Lower voltage than rated:**
>
> - Device works but at reduced power (dim light, slow heating)

> - Generally safe
>
> **Higher voltage than rated:**
>
> - Excessive power → Overheating

> - Can damage or destroy device

> - FIRE HAZARD!
>
> **Always check voltage ratings before using appliances!**

---

## Comparing Bulbs: Which Glows Brighter?

### In Series Connection

**Same current** through both bulbs.

Power: $P = I^2R$

**Higher resistance → Higher power → Brighter glow**

**Example:** 100W and 60W bulbs (both rated 220V) in series

$$R_{100} = \frac{220^2}{100} = 484 \text{ Ω}$$

$$R_{60} = \frac{220^2}{60} = 806.7 \text{ Ω}$$

Since $R_{60} > R_{100}$:

**In series:** 60W bulb glows BRIGHTER! (counterintuitive!)

### In Parallel Connection

**Same voltage** across both bulbs.

Power: $P = \frac{V^2}{R}$

**Lower resistance → Higher power → Brighter glow**

Since $R_{100} < R_{60}$:

**In parallel:** 100W bulb glows BRIGHTER! (as expected)

> **★ Key point · JEE Memory Trick**
>
> **Series:** “Same I, so P = I²R → **High R wins**”
>
> - 60W bulb (higher R) glows brighter
>
> **Parallel:** “Same V, so P = V²/R → **Low R wins**”
>
> - 100W bulb (lower R) glows brighter
>
> **Mnemonic:** “**S**eries likes **S**tubborn (high R), **P**arallel likes **P**owerful (low R, high P rating)”

---

## Maximum Power Transfer Theorem

For a source with internal resistance $r$ connected to external load $R$:

**Power delivered to load:**

$$P = I^2R = \left(\frac{E}{R+r}\right)^2 R$$

**Maximum power when:**

$$\boxed{R = r}$$

**Maximum power:**

$$P_{max} = \frac{E^2}{4r}$$

**Efficiency at maximum power:** 50% (half energy wasted in internal resistance!)

> **◐ In simple terms · Why Maximum Power Transfer Matters**
>
> **Audio systems:** Speaker impedance matched to amplifier output

> **Power transmission:** NOT used (efficiency more important than max power)

> **Battery charging:** Fast charging needs impedance matching
>
> **JEE problems often test:** Finding R for maximum power, or calculating efficiency

---

## Electrical Energy and Commercial Unit

### Energy

$$E = Pt = VIt = I^2Rt = \frac{V^2t}{R}$$

**SI Unit:** Joule (J)

**Commercial Unit:** Kilowatt-hour (kWh) or “Unit”

$$1 \text{ kWh} = 1000 \text{ W} \times 3600 \text{ s} = 3.6 \times 10^6 \text{ J}$$

### Calculating Electricity Bill

**Example:** 5 bulbs of 100W each, used 6 hours daily for 30 days

Energy consumed:

$$E = 5 \times 100 \text{ W} \times 6 \times 30 \text{ hours} = 90,000 \text{ Wh} = 90 \text{ kWh}$$

If cost is Rs. 5 per unit:

$$\text{Bill} = 90 \times 5 = \text{Rs. } 450$$

---

## Memory Tricks & Patterns

### Mnemonic for Power Formulas

**“Power Very Impressive”** → $P = VI$

**“Powerful Indians Ride Reliably”** → $P = I^2R$

**“Vinod’s Victory Realizes”** → $P = V^2/R$

### Series vs Parallel Power

**“Series → Same I → I² matters → High R wins”**

**“Parallel → Same V → V²/R matters → Low R wins”**

### Unit Conversion

**“Kill a Watt, Hire 3600 joules”** → 1 kWh = 3.6 × 10⁶ J

### JEE Pattern Recognition

1. **If “in series” mentioned:** Use $P = I^2R$
2. **If “in parallel” mentioned:** Use $P = V^2/R$
3. **If “brighter bulb” asked:** Calculate power dissipated
4. **If “electricity bill” asked:** Find energy in kWh

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Power calculation:**
>
> - Given V, I → Use $P = VI$

> - Given I, R (series) → Use $P = I^2R$

> - Given V, R (parallel) → Use $P = V^2/R$
>
> **Heating problems:**
>
> - Heat produced → Use $H = I^2Rt$

> - Temperature rise → Connect $H = mc\Delta T$
>
> **Comparing bulbs:**
>
> - In series → Compare using $P = I^2R$ (higher R brighter)

> - In parallel → Compare using $P = V^2/R$ (lower R brighter)
>
> **Efficiency:**
>
> - $\eta = \frac{\text{Useful output}}{\text{Input}} \times 100\%$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Using Wrong Power Formula**
>
> **Wrong:** “Always use P = VI”
>
> **Correct:** Choose based on what’s CONSTANT in the circuit!
>
> - Series (constant I) → Use $P = I^2R$

> - Parallel (constant V) → Use $P = V^2/R$
>
> **Example trap:** Two resistors 2Ω and 4Ω in series with 6A current. Power in each?
>
> **Wrong approach:** “Need V for each, use P = VI”

> **Right approach:** Same I! Use $P = I^2R$ directly
>
> - $P_1 = 6^2 \times 2 = 72$ W

> - $P_2 = 6^2 \times 4 = 144$ W

> **⚠ Trap #2: Confusing Power Rating with Actual Power**
>
> **Wrong:** “100W bulb always consumes 100W”
>
> **Correct:** 100W is power consumed at RATED voltage only!
>
> **Example:** “100W, 220V” bulb at 110V:
>
> - Rating tells us $R = V^2/P = 484$ Ω (constant)

> - At 110V: $P = V^2/R = 110^2/484 = 25$ W (NOT 100W!)

> **⚠ Trap #3: Series Bulb Brightness**
>
> **Wrong:** “100W bulb is always brighter than 60W bulb”
>
> **Correct:** In SERIES, it’s OPPOSITE!
>
> **Reason:**
>
> - $R_{100} = 484$ Ω (from rating)

> - $R_{60} = 806.7$ Ω (from rating)

> - In series: $P = I^2R$ (same I)

> - Higher R → Higher P → 60W bulb glows brighter!
>
> **Memory:** Ratings are for parallel (home wiring), series behavior is opposite!

> **⚠ Trap #4: Heat vs Energy Confusion**
>
> **Wrong:** “H = I²Rt gives heat in watts”
>
> **Correct:** This gives heat in JOULES!
>
> **Units check:**
>
> - $I^2Rt$ = A² × Ω × s = W × s = J (energy, not power!)

> - For power (W), use $P = I^2R$ (without time)
>
> **Example:** 2A through 5Ω for 10s
>
> - Heat: $H = 2^2 \times 5 \times 10 = 200$ J

> - Power: $P = 2^2 \times 5 = 20$ W

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> A 100W, 220V bulb is operated at rated voltage. Find (a) current drawn, (b) resistance.
>
> **Solution:**
>
> **(a) Current:**
>
> $$P = VI$$

$$I = \frac{P}{V} = \frac{100}{220} = 0.45 \text{ A}$$
>
> **(b) Resistance:**
>
> $$R = \frac{V}{I} = \frac{220}{0.45} = 488.9 \text{ Ω}$$
>
> Or directly:
>
> $$R = \frac{V^2}{P} = \frac{220^2}{100} = 484 \text{ Ω}$$
>
> **Answer:** (a) 0.45 A, (b) 484 Ω

> **↗ Connection · Problem 1.2**
>
> An electric heater of resistance 10Ω takes 5A current. Find power consumed and heat produced in 2 minutes.
>
> **Solution:**
>
> **Power:**
>
> $$P = I^2R = 5^2 \times 10 = 250 \text{ W}$$
>
> **Heat in 2 min = 120 s:**
>
> $$H = Pt = 250 \times 120 = 30,000 \text{ J} = 30 \text{ kJ}$$
>
> Or:
>
> $$H = I^2Rt = 25 \times 10 \times 120 = 30,000 \text{ J}$$
>
> **Answer:** Power = 250 W, Heat = 30 kJ

> **↗ Connection · Problem 1.3**
>
> Calculate electricity bill for a 1000W heater used 2 hours daily for 30 days at Rs. 6 per kWh.
>
> **Solution:**
>
> Energy consumed:
>
> $$E = Pt = 1000 \text{ W} \times 2 \times 30 = 60,000 \text{ Wh} = 60 \text{ kWh}$$
>
> Bill:
>
> $$\text{Cost} = 60 \times 6 = \text{Rs. } 360$$
>
> **Answer:** Rs. 360

### Level 2: JEE Main

> **↗ Connection · Problem 2.1 - Classic JEE Question!**
>
> Two bulbs rated “100W, 220V” and “60W, 220V” are connected in series to 220V supply. Which glows brighter?
>
> **Solution:**
>
> **Step 1:** Find resistances from ratings
>
> $$R_{100} = \frac{V^2}{P} = \frac{220^2}{100} = 484 \text{ Ω}$$

$$R_{60} = \frac{V^2}{P} = \frac{220^2}{60} = 806.7 \text{ Ω}$$
>
> **Step 2:** In series, same current $I$
>
> Total: $R_{total} = 484 + 806.7 = 1290.7$ Ω
>
> $$I = \frac{220}{1290.7} = 0.17 \text{ A}$$
>
> **Step 3:** Power dissipated (use $P = I^2R$ since same I)
>
> $$P_{100} = I^2 R_{100} = (0.17)^2 \times 484 = 14 \text{ W}$$

$$P_{60} = I^2 R_{60} = (0.17)^2 \times 806.7 = 23.5 \text{ W}$$
>
> **Answer:** 60W bulb glows BRIGHTER (counterintuitive!)
>
> **Quick method:** In series, higher R dissipates more power

> Since $R_{60} > R_{100}$, 60W bulb wins!

> **↗ Connection · Problem 2.2**
>
> A “100W, 220V” bulb is connected to 110V supply. Find power consumed and compare brightness.
>
> **Solution:**
>
> Resistance (constant):
>
> $$R = \frac{220^2}{100} = 484 \text{ Ω}$$
>
> At 110V:
>
> $$P = \frac{V^2}{R} = \frac{110^2}{484} = \frac{12100}{484} = 25 \text{ W}$$
>
> **Answer:** Power = 25 W (only 25% of rated power!)
>
> **Brightness:** 1/4 of normal → Much dimmer!

> **↗ Connection · Problem 2.3**
>
> Three 60Ω resistors are connected (a) in series, (b) in parallel across 120V. Find power in each case.
>
> **Solution:**
>
> **(a) Series:**
>
> $$R_{eq} = 60 + 60 + 60 = 180 \text{ Ω}$$

$$P = \frac{V^2}{R_{eq}} = \frac{120^2}{180} = \frac{14400}{180} = 80 \text{ W}$$
>
> **(b) Parallel:**
>
> $$\frac{1}{R_{eq}} = \frac{1}{60} + \frac{1}{60} + \frac{1}{60} = \frac{3}{60}$$

$$R_{eq} = 20 \text{ Ω}$$

$$P = \frac{V^2}{R_{eq}} = \frac{120^2}{20} = \frac{14400}{20} = 720 \text{ W}$$
>
> **Answer:** (a) 80 W, (b) 720 W
>
> **Insight:** Parallel draws 9 times more power! (Lower equivalent R)

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A battery of EMF 12V and internal resistance 2Ω is connected to variable external resistance R. Find R for maximum power transfer and calculate the maximum power.
>
> **Solution:**
>
> **Maximum power condition:**
>
> $$R = r = 2 \text{ Ω}$$
>
> **Current at this condition:**
>
> $$I = \frac{E}{R + r} = \frac{12}{2 + 2} = 3 \text{ A}$$
>
> **Maximum power delivered to R:**
>
> $$P_{max} = I^2R = 3^2 \times 2 = 18 \text{ W}$$
>
> Or directly:
>
> $$P_{max} = \frac{E^2}{4r} = \frac{144}{4 \times 2} = 18 \text{ W}$$
>
> **Efficiency:**
>
> $$\eta = \frac{R}{R+r} = \frac{2}{4} = 50\%$$
>
> **Answer:** R = 2Ω, P_max = 18W, Efficiency = 50%
>
> **Key insight:** At maximum power, efficiency is only 50% - half the energy is wasted in internal resistance!

> **↗ Connection · Problem 3.2**
>
> An electric kettle has two coils. When one is used, water boils in 10 min. When the other is used, water boils in 20 min. How long will it take if (a) both coils are used in series, (b) both in parallel?
>
> **Solution:**
>
> Let the coils have resistances $R_1$ and $R_2$.
>
> Power: $P = \frac{V^2}{R}$
>
> Time: $t \propto R$ (for same heat required)
>
> **From given data:**

> $R_1 \propto 10$ min → $R_1 = 10k$ (where k is constant)

> $R_2 \propto 20$ min → $R_2 = 20k$
>
> **(a) Series:**
>
> $$R_s = R_1 + R_2 = 10k + 20k = 30k$$

$$t_s = 30 \text{ min}$$
>
> **(b) Parallel:**
>
> $$\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{10k} + \frac{1}{20k} = \frac{3}{20k}$$

$$R_p = \frac{20k}{3}$$

$$t_p = \frac{20}{3} = 6.67 \text{ min}$$
>
> **Answer:** (a) 30 min, (b) 6.67 min
>
> **Shortcut for similar problems:**
>
> - Series: Add times → 10 + 20 = 30 min

> - Parallel: Reciprocal addition → $\frac{1}{t_p} = \frac{1}{10} + \frac{1}{20} = \frac{3}{20}$ → $t_p = 6.67$ min

> **↗ Connection · Problem 3.3 - JEE Advanced Level**
>
> Two resistors $R_1 = 100$ Ω and $R_2 = 200$ Ω are connected in series to a 300V supply. If heat developed in $R_1$ in time $t_1$ equals heat developed in $R_2$ in time $t_2$, find $t_1/t_2$.
>
> **Solution:**
>
> In series, same current $I$ flows.
>
> Heat in $R_1$: $H_1 = I^2 R_1 t_1$

> Heat in $R_2$: $H_2 = I^2 R_2 t_2$
>
> Given: $H_1 = H_2$
>
> $$I^2 R_1 t_1 = I^2 R_2 t_2$$

$$R_1 t_1 = R_2 t_2$$

$$\frac{t_1}{t_2} = \frac{R_2}{R_1} = \frac{200}{100} = 2$$
>
> **Answer:** $t_1/t_2 = 2$ or $t_1 : t_2 = 2:1$
>
> **Key insight:** For same heat in series circuit, time is inversely proportional to resistance!
>
> - Smaller R needs MORE time

> - Larger R needs LESS time

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Basic power | $P = VI$ |
| Power in resistor (current known) | $P = I^2R$ |
| Power in resistor (voltage known) | $P = V^2/R$ |
| Heat produced | $H = I^2Rt = Pt$ |
| Series connection (bulbs) | Use $P = I^2R$ → Higher R brighter |
| Parallel connection (bulbs) | Use $P = V^2/R$ → Lower R brighter |
| Maximum power transfer | $R = r$, $P_{max} = E^2/(4r)$ |
| Energy in kWh | $E = Pt$ (P in kW, t in hours) |
| Electricity bill | Energy (kWh) × Rate per unit |

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Bulb comparison in series vs parallel** (VERY HIGH YIELD!)
>
>    - Memorize: Series → Higher R brighter, Parallel → Higher P rating brighter

>    - Practice 10+ variations

> 2. **Power formula selection**
>
>    - Series → $P = I^2R$ (same current)

>    - Parallel → $P = V^2/R$ (same voltage)

>    - Don’t blindly use $P = VI$!

> 3. **Voltage change effect on power**
>
>    - Find R from rating: $R = V^2/P$

>    - Then calculate new power at new voltage

>    - Common in numerical problems

> 4. **Maximum power transfer**
>
>    - Condition: $R = r$

>    - Efficiency: 50% at maximum power

>    - Often combined with battery problems

> 5. **Heating effect applications**
>
>    - Electric kettle time problems

>    - Fuse wire calculations

>    - Water boiling problems
>
> **Time-saving tricks:**
>
> - For bulb ratings, remember: $R = V^2/P$ first, then proceed

> - Series bulbs: No need to calculate I, just compare R values

> - Parallel bulbs: Compare power ratings directly

> - Heating time problems: $t \propto R$ (for same heat, same V)

---

## Related Topics

### Within Current Electricity

- [Ohm’s Law](../ohms-law/index.md) - Foundation for power calculations
- [Resistance](../resistance/index.md) - Why power is dissipated as heat
- [Kirchhoff’s Laws](../kirchhoffs-laws/index.md) - Power in complex circuits
- [Wheatstone Bridge](../wheatstone-bridge/index.md) - Balanced condition means zero power

### Connected Chapters

- [Work, Energy, Power](../../work-energy-power/index.md) - Energy concepts
- [Thermodynamics](../../thermodynamics/index.md) - Heat and temperature
- [Magnetic Effects](../../magnetism/index.md) - Power in electromagnetic devices

### Math Connections

- [Quadratic Equations](../../../mathematics/index.md) - Maximum power problems
- [Proportionality](../../../mathematics/index.md) - P ∝ I², P ∝ V²
- [Optimization](../../../mathematics/index.md) - Finding maximum power conditions

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Three forms of power: $P = VI = I^2R = V^2/R$** - choose based on what’s constant (I in series, V in parallel)!

> 2. **Heating effect: $H = I^2Rt$** - electrical energy converted to heat, unavoidable in resistors

> 3. **Bulbs in series: Higher resistance glows brighter** (use $P = I^2R$). **In parallel: Higher power rating glows brighter** (use $P = V^2/R$)

> 4. **Maximum power transfer when load resistance equals source internal resistance** ($R = r$), but efficiency is only 50%

> 5. **Power rating (100W, 220V) is at RATED voltage only** - actual power changes if voltage changes according to $P = V^2/R$ where R is constant
>
> **“Electrical power is energy per second, and most of it becomes heat in resistors - that’s why your charger gets warm, your bulb wastes energy, and Iron Man needs a massive cooling system!”**

---

From TestGuru · our mock-test platform

## You've read Electrical Power and Heating Effects.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=current-electricity&tg_exam=jee-main&tg_page=%2Fphysics%2Fcurrent-electricity%2Felectrical-power%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/current-electricity/electrical-power/",this.page.identifier="/physics/current-electricity/electrical-power/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="powerCalculator" id="anim-powerCalculator-1795396423108891076"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-powerCalculator-1795396423108891076")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/current-electricity/electrical-power/](https://jeenotes.in/physics/current-electricity/electrical-power/) · raw HTML: `offline/physics/current-electricity/electrical-power/index.html`_
