---
title: "Kirchhoff's Current and Voltage Laws"
source: "https://jeenotes.in/physics/current-electricity/kirchhoffs-laws/"
description: "Master Kirchhoff's laws for solving complex circuits in JEE Physics with systematic techniques"
updated: "2026-08-01"
reading_time: "17 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 8"
html: "../../../../offline/physics/current-electricity/kirchhoffs-laws/index.html"
extracted: "2026-11-23"
---

> Master Kirchhoff's laws for solving complex circuits in JEE Physics with systematic techniques

## Prerequisites

Before studying this topic, make sure you understand:

- [Ohm’s Law](../ohms-law/index.md) - V = IR relationship
- [Resistance](../resistance/index.md) - Series and parallel combinations
- [Electrical Power](../electrical-power/index.md) - Energy considerations

## The Hook: How Does Your House Wiring Work?

> **★ Key point · Connect: House Circuits → Kirchhoff's Laws**
>
> Imagine you’re watching **Jawan** (2023) on TV, your phone is charging, and the lights are on. All these devices are connected to the SAME supply, yet each gets the right amount of current. How?
>
> **The answer:** Your house wiring is a complex network that follows two simple but powerful rules discovered by Gustav Kirchhoff in 1845.
>
> **Challenge scenario:** If your TV draws 2A, charger draws 1A, and lights draw 3A, how much current flows from the main supply? And why doesn’t all 6A flow through your TV and blow it up?
>
> **The secret:** Kirchhoff’s Current Law (KCL) and Kirchhoff’s Voltage Law (KVL) - the two fundamental laws that govern ALL electrical circuits!

## Interactive Demo

Build and analyze a circuit using Kirchhoff’s laws:

---

## The Core Concept: Two Fundamental Laws

### Kirchhoff’s Current Law (KCL) - Junction Rule

**Statement:** The algebraic sum of currents at any junction is zero.

$$\boxed{\sum I_{in} = \sum I_{out}}$$

**Alternative form:**

$$\sum I = 0$$

(Taking currents entering as +ve, leaving as -ve)

**Physical basis:** Conservation of electric charge

- Charge cannot accumulate at a junction
- Whatever flows IN must flow OUT

> **◐ In simple terms · Real-Life Analogy: Traffic Junction**
>
> Think of a road junction in **Fast X** (2023) car chase:
>
> - Cars entering the junction = Current IN

> - Cars leaving the junction = Current OUT

> - Cars can’t pile up at the junction!

> - Total cars IN = Total cars OUT
>
> **Same principle:** Electrons can’t accumulate at a wire junction!

### Kirchhoff’s Voltage Law (KVL) - Loop Rule

**Statement:** The algebraic sum of all potential differences around any closed loop is zero.

$$\boxed{\sum V = 0}$$

**Alternative statement:** The sum of EMFs = Sum of potential drops

$$\sum \varepsilon = \sum IR$$

**Physical basis:** Conservation of energy

- Electric potential is path-independent
- Going around a loop brings you back to same potential
- Net change in potential = 0

> **◐ In simple terms · Real-Life Analogy: Hiking Trail**
>
> Imagine hiking on a circular trail:
>
> - You start at 100 m altitude

> - Go up hills (gain height → gain potential)

> - Go down valleys (lose height → lose potential)

> - After completing the loop, you’re back at 100 m

> - **Net altitude change = 0**
>
> **Same principle:** Traveling around a circuit loop, net voltage change = 0!

---

## Kirchhoff’s Current Law (KCL) in Detail

### Sign Convention

**Currents entering junction:** Positive (+)
**Currents leaving junction:** Negative (-)

### Example: KCL at Junction

```fallback
I₁ →  ●  ← I₃
          ↓
          I₂
```

At junction:

$$I_1 - I_2 - I_3 = 0$$

Or:

$$I_1 = I_2 + I_3$$

“Current IN = Current OUT”

### Common Applications

1. **Series circuit:** Same current everywhere (no junctions)
2. **Parallel branches:**

   - Current divides at junction
   - Total current = Sum of branch currents
3. **Complex networks:**

   - Write KCL at each junction
   - Get system of equations

> **★ Key point · JEE Shortcut**
>
> In a circuit with $n$ junctions, you need only $(n-1)$ KCL equations!
>
> **Why?** The $n^{th}$ equation is automatically satisfied (not independent).
>
> **Example:** 4 junctions → Use KCL at any 3 junctions

---

## Kirchhoff’s Voltage Law (KVL) in Detail

### Sign Convention (CRITICAL!)

**Going through a resistor:**

- In direction of current: Potential DROP → $-IR$
- Against current: Potential RISE → $+IR$

**Going through a battery:**

- From - to + terminal: Potential RISE → $+\varepsilon$
- From + to - terminal: Potential DROP → $-\varepsilon$

**Going through internal resistance:**

- Same as external resistor rules

### Example: Simple Loop

```fallback
+─── R₁ ───┬─── R₂ ───+
  |          ↓ I        |
  |                     |
  +                     -
  | E (battery)         |
  |                     |
  +─────────────────────+
```

Going clockwise from bottom left:

$$+E - IR_1 - IR_2 = 0$$

$$E = I(R_1 + R_2)$$

**This is just Ohm’s law for the complete circuit!**

### Common Loop Patterns

**Single battery, multiple resistors:**

$$\varepsilon = I(R_1 + R_2 + R_3 + ...)$$

**Multiple batteries in a loop:**

$$\varepsilon_1 + \varepsilon_2 - \varepsilon_3 = I(R_1 + R_2 + R_3)$$

(Mind the polarity!)

---

## EMF, Internal Resistance, and Combination of Cells

Real batteries have internal resistance, which matters in every KVL loop they appear in.

**Terminal voltage:**

$$V = \varepsilon - Ir$$

where:

- ε = EMF of cell
- r = internal resistance

### Cells in Series

$$\varepsilon_{eq} = \varepsilon_1 + \varepsilon_2$$

$$r_{eq} = r_1 + r_2$$

### Cells in Parallel

$$\varepsilon_{eq} = \frac{\varepsilon_1/r_1 + \varepsilon_2/r_2}{1/r_1 + 1/r_2}$$

$$\frac{1}{r_{eq}} = \frac{1}{r_1} + \frac{1}{r_2}$$

For n identical cells (ε, r) in parallel:

$$\varepsilon_{eq} = \varepsilon, \quad r_{eq} = \frac{r}{n}$$

---

## Step-by-Step Method for Circuit Problems

### Step 1: Identify and Label

- Mark all junctions (nodes)
- Label currents in each branch (assume direction if unknown)
- Mark polarities of batteries

### Step 2: Apply KCL

- Write equations for $(n-1)$ junctions
- Use $I_{in} = I_{out}$ form

### Step 3: Identify Loops

- Choose independent loops (usually mesh currents)
- For $n$ independent loops, write $n$ KVL equations

### Step 4: Apply KVL

- Choose direction to traverse loop (clockwise or anticlockwise)
- Write potential changes carefully (mind signs!)

### Step 5: Solve Equations

- System of linear equations
- Use substitution or matrix method
- Solve for unknown currents/voltages

### Step 6: Check Results

- If current comes out negative, actual direction is opposite
- Check power balance: $\sum P_{sources} = \sum P_{loads}$

> **⚠ Trap · Most Common KVL Mistake!**
>
> **Wrong:** “Going through resistor in direction of current → +IR”
>
> **Correct:** Going through resistor in direction of current → POTENTIAL DROPS → $-IR$
>
> **Think:** Current flows from high to low potential (like water flows downhill)
>
> - So traveling WITH current means going DOWN in potential → Negative!
>
> **Memory trick:** “Current flows **DOWN** potential hill → Sign is **DOWN** (negative)”

---

## Worked Example: Two-Loop Circuit

### Problem Setup

```fallback
R₁=2Ω        R₂=4Ω
  +────────┬────────────+
  |    I₁→ │ ←I₂        |
E₁=12V     │            E₂=8V
  |        R₃=3Ω        |
  +────────┴────────────+
```

Find currents $I_1$, $I_2$, and $I_3$ (through $R_3$).

### Solution

**Step 1: Label**

- Assume $I_1$ flows clockwise in left loop
- Assume $I_2$ flows clockwise in right loop
- Current through $R_3$: $I_3 = I_1 - I_2$ (downward)

**Step 2: KCL at middle junction**

$$I_1 = I_2 + I_3$$

$$I_3 = I_1 - I_2$$

&mldr; (Equation 1)

**Step 3: KVL for left loop** (clockwise)

$$+E_1 - I_1 R_1 - I_3 R_3 = 0$$

$$12 - 2I_1 - 3I_3 = 0$$

&mldr; (Equation 2)

**Step 4: KVL for right loop** (clockwise)

$$+I_3 R_3 - I_2 R_2 - E_2 = 0$$

$$3I_3 - 4I_2 - 8 = 0$$

&mldr; (Equation 3)

**Step 5: Solve**

Substitute Eq. 1 into Eq. 2:

$$12 - 2I_1 - 3(I_1 - I_2) = 0$$

$$12 - 2I_1 - 3I_1 + 3I_2 = 0$$

$$12 = 5I_1 - 3I_2$$

&mldr; (Equation 2')

Substitute Eq. 1 into Eq. 3:

$$3(I_1 - I_2) - 4I_2 - 8 = 0$$

$$3I_1 - 3I_2 - 4I_2 - 8 = 0$$

$$3I_1 - 7I_2 = 8$$

&mldr; (Equation 3')

From Eq. 2’: $I_1 = \frac{12 + 3I_2}{5}$

Substitute into Eq. 3’:

$$3 \times \frac{12 + 3I_2}{5} - 7I_2 = 8$$

$$\frac{36 + 9I_2}{5} - 7I_2 = 8$$

$$36 + 9I_2 - 35I_2 = 40$$

$$-26I_2 = 4$$

$$I_2 = -\frac{4}{26} = -\frac{2}{13} \text{ A}$$

Negative means actual direction is OPPOSITE (counterclockwise)!

$$I_1 = \frac{12 + 3(-2/13)}{5} = \frac{12 - 6/13}{5} = \frac{150/13}{5} = \frac{30}{13} \text{ A}$$

$$I_3 = I_1 - I_2 = \frac{30}{13} - \left(-\frac{2}{13}\right) = \frac{32}{13} \text{ A}$$

**Final Answer:**

- $I_1 = 2.31$ A (left loop, clockwise)
- $I_2 = 0.15$ A (right loop, counterclockwise - opposite to assumed)
- $I_3 = 2.46$ A (through $R_3$, downward)

---

## Memory Tricks & Patterns

### Mnemonic for KCL

**“Kings Come In, Kings Come Out”** → KCL: $I_{in} = I_{out}$

Or: **“Junction Just Conserves”** → No accumulation at junction

### Mnemonic for KVL

**“Loop Loves Zero”** → Sum of voltages in loop = 0

Or: **“Kings Very Lucky”** → KVL: Around loop, voltage change = 0

### Sign Convention Memory

**For resistors:**
**“WITH current = DOWN potential = NEGATIVE sign”**

**For batteries:**
**“Minus to Plus = UP = POSITIVE”**
**“Plus to Minus = DOWN = NEGATIVE”**

### JEE Pattern Recognition

1. **Two batteries opposing:** Effective EMF = $E_1 - E_2$
2. **Batteries in parallel:** Don’t connect different EMFs in parallel! (unless with resistances)
3. **Wheatstone bridge:** Special case where KCL/KVL lead to balanced condition
4. **Symmetric circuits:** Use symmetry to reduce equations

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Use KCL when:**
>
> - Finding current distribution at junctions

> - Checking current conservation

> - Simplifying complex networks
>
> **Use KVL when:**
>
> - Finding unknown EMF or resistance

> - Analyzing loops with multiple elements

> - Checking energy balance
>
> **Use BOTH when:**
>
> - Complex circuits with multiple loops and junctions

> - Circuit analysis from scratch

> - Verification of other methods (like mesh/nodal analysis)
>
> **Don’t need KCL/KVL for:**
>
> - Simple series (use $R_{eq} = \sum R$)

> - Simple parallel (use $\frac{1}{R_{eq}} = \sum \frac{1}{R}$)

> - Balanced Wheatstone bridge (use direct formula)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: KVL Sign Errors (Most Common!)**
>
> **Wrong:** “Going through resistor with current → +IR”
>
> **Correct:** WITH current → potential DROP → $-IR$
>
> **Example:** Current 2A flows left-to-right through 5Ω resistor
>
> - Traveling left-to-right (WITH current): $-2 \times 5 = -10$ V

> - Traveling right-to-left (AGAINST current): $+2 \times 5 = +10$ V
>
> **Memory aid:** Current flows downhill (high to low V), so WITH current = going down = negative!

> **⚠ Trap #2: Battery Polarity Confusion**
>
> **Wrong:** “Positive terminal → always add voltage”
>
> **Correct:** Depends on direction of traversal!
>
> **Rule:**
>
> - Entering at (-), exiting at (+): GAIN potential → $+\varepsilon$

> - Entering at (+), exiting at (-): LOSE potential → $-\varepsilon$
>
> **Visual trick:** Think of battery as uphill/downhill
>
> - Going through battery from - to + is going UPHILL → +

> - Going through battery from + to - is going DOWNHILL → -

> **⚠ Trap #3: Using More Equations Than Needed**
>
> **Wrong:** “5 junctions → Write 5 KCL equations”
>
> **Correct:** 5 junctions → Only 4 independent equations!
>
> **Why?** Last equation is linear combination of others (redundant)
>
> **JEE impact:** Wastes time! You’ll get $0 = 0$ when trying to solve.
>
> **Rule:** For $n$ junctions, write $(n-1)$ KCL equations

> **⚠ Trap #4: Forgetting Internal Resistance**
>
> **Wrong:** “Battery EMF 12V → Voltage across terminals is 12V”
>
> **Correct:** Terminal voltage = $\varepsilon - Ir$ when current flows
>
> **In KVL:** Treat internal resistance like another resistor in series with EMF
>
> **Example:** Battery (E, r) with external R
>
> $$E - Ir - IR = 0$$

$$I = \frac{E}{R+r}$$

> **⚠ Trap #5: Incorrect Loop Choice**
>
> **Wrong:** Choosing overlapping loops that aren’t independent
>
> **Correct:** Choose “mesh” loops (innermost loops with no loops inside)
>
> **Example:** Circuit with 3 meshes → Choose these 3, not random combinations
>
> **Result of wrong choice:** Equations will be linearly dependent → Can’t solve uniquely!

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1 - KCL Application**
>
> At a junction, currents are: 5A entering, 2A and 3A leaving, and one unknown current. Find the unknown current.
>
> ```fallback

> 5A →  ●  ← ?

>           ↓ ↓

>          2A 3A

> ```
>
> **Solution:**
>
> KCL: $I_{in} = I_{out}$
>
> $$5 + ? = 2 + 3$$

$$? = 5 - 5 = 0 \text{ A}$$
>
> Wait, that’s not right! Let me reconsider.
>
> If 5A enters, 2A and 3A leave, and there’s one more current:
>
> Case 1: Unknown current ENTERS
>
> $$5 + I = 2 + 3$$

$$I = 0$$
>
> A
>
> Case 2: Unknown current LEAVES
>
> $$5 = 2 + 3 + I$$

$$I = 0$$
>
> A
>
> **Answer:** Unknown current = 0 A (no current in that branch)
>
> **Check:** In = 5A, Out = 2 + 3 + 0 = 5A ✓

> **↗ Connection · Problem 1.2 - Simple KVL**
>
> A 12V battery is connected to three resistors 2Ω, 3Ω, and 5Ω in series. Find the current.
>
> **Solution:**
>
> KVL around loop:
>
> $$12 - I(2) - I(3) - I(5) = 0$$

$$12 - 10I = 0$$

$$I = 1.2 \text{ A}$$
>
> Or directly: $I = \frac{V}{R_{total}} = \frac{12}{10} = 1.2$ A
>
> **Answer:** $I = 1.2$ A

> **↗ Connection · Problem 1.3 - Parallel Currents**
>
> A 6A current divides into three parallel branches with resistances 2Ω, 3Ω, and 6Ω. Find current in each branch.
>
> **Solution:**
>
> Same voltage $V$ across all three (parallel).
>
> $$I_1 = \frac{V}{2}, \quad I_2 = \frac{V}{3}, \quad I_3 = \frac{V}{6}$$
>
> KCL: $I_1 + I_2 + I_3 = 6$
>
> $$\frac{V}{2} + \frac{V}{3} + \frac{V}{6} = 6$$

$$V\left(\frac{3 + 2 + 1}{6}\right) = 6$$

$$V \times 1 = 6$$

$$V = 6 \text{ V}$$
>
> Therefore:
>
> $$I_1 = \frac{6}{2} = 3 \text{ A}$$

$$I_2 = \frac{6}{3} = 2 \text{ A}$$

$$I_3 = \frac{6}{6} = 1 \text{ A}$$
>
> **Answer:** 3A, 2A, 1A
>
> **Check:** $3 + 2 + 1 = 6$ ✓

### Level 2: JEE Main

> **↗ Connection · Problem 2.1 - Two Batteries**
>
> Two batteries of EMF 12V and 8V with internal resistances 1Ω and 2Ω respectively are connected in series with an external resistor 3Ω. Find the current.
>
> ```fallback

> +12V- ─1Ω─┬─3Ω─┬─2Ω─ +8V-

>            │     │

> ```
>
> **Solution:**
>
> Both batteries are aiding (EMFs add up).
>
> KVL around the loop (clockwise):
>
> $$+12 - I(1) - I(3) - I(2) + 8 = 0$$
>
> Wait, check battery polarity. If both have + on same side:
>
> $$12 + 8 - I(1 + 3 + 2) = 0$$

$$20 = 6I$$

$$I = \frac{20}{6} = \frac{10}{3} = 3.33 \text{ A}$$
>
> If batteries oppose each other:
>
> $$12 - 8 - I(1 + 3 + 2) = 0$$

$$4 = 6I$$

$$I = \frac{4}{6} = \frac{2}{3} = 0.67 \text{ A}$$
>
> **Assuming batteries aid (series-aiding):**

> **Answer:** $I = 3.33$ A
>
> **Assuming batteries oppose:**

> **Answer:** $I = 0.67$ A
>
> (Need circuit diagram clarity for definite answer - assuming aiding is more common)

> **↗ Connection · Problem 2.2 - Three Resistors, Two Junctions**
>
> Find the current through the 6Ω resistor:
>
> ```fallback

> 3Ω      6Ω

> A ────┬──────┬──── B

>       │      │

>      12V     |

>       │      │

> ──────┴──────┴────

>       ↓2Ω

> ```
>
> Actually, let me reconsider this circuit. Better example:
>
> **Modified Problem:**

> 12V battery connected to point A. From A, two branches:
>
> - Branch 1: 3Ω resistor to point B

> - Branch 2: 6Ω resistor to point B

>   From B, a 2Ω resistor goes back to battery.
>
> **Solution:**
>
> 3Ω and 6Ω are in parallel between A and B.
>
> $$R_{AB} = \frac{3 \times 6}{3 + 6} = 2 \text{ Ω}$$
>
> Total circuit: $R_{total} = R_{AB} + 2 = 2 + 2 = 4$ Ω
>
> Main current: $I = \frac{12}{4} = 3$ A
>
> Voltage across AB: $V_{AB} = I \times R_{AB} = 3 \times 2 = 6$ V
>
> Current through 6Ω: $I_6 = \frac{V_{AB}}{6} = \frac{6}{6} = 1$ A
>
> **Answer:** Current through 6Ω resistor = 1 A

> **↗ Connection · Problem 2.3 - KVL with Sign Practice**
>
> Find current in the circuit using KVL:
>
> ```fallback

> +─── 5Ω ────+

>   |     ↑I    |

>   +           -

>   | 20V       |

>   -           +

>   |    10Ω    |

>   +───────────+

> ```
>
> **Solution:**
>
> Assume current $I$ flows clockwise.
>
> **Traversing clockwise from bottom-left:**
>
> - Through 20V battery (- to +): $+20$ V

> - Through 5Ω (with current): $-5I$ V

> - Through 10Ω (with current): $-10I$ V
>
> KVL:
>
> $$20 - 5I - 10I = 0$$

$$20 = 15I$$

$$I = \frac{20}{15} = \frac{4}{3} = 1.33 \text{ A}$$
>
> **Answer:** $I = 1.33$ A (clockwise)
>
> **Verification:**
>
> - Voltage drop across 5Ω: $5 \times 1.33 = 6.67$ V

> - Voltage drop across 10Ω: $10 \times 1.33 = 13.33$ V

> - Total drop: $6.67 + 13.33 = 20$ V = Battery EMF ✓

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1 - Two-Loop Circuit (Classic JEE!)**
>
> Find all currents in the circuit:
>
> ```fallback

> 2Ω         4Ω

>   +────────┬─────────+

>   |    I₁→ │ ←I₂     |

> 10V        │         6V

>   |       3Ω         |

>   +────────┴─────────+

> ```
>
> **Solution:**
>
> Let $I_1$ flow in left loop (clockwise), $I_2$ in right loop (clockwise).
>
> Current through 3Ω: $I_3 = I_1 - I_2$ (downward)
>
> **KCL at top-middle junction:**
>
> $$I_1 = I_3 + I_2$$
>
> (already used in defining $I_3$)
>
> **KVL for left loop (clockwise):**
>
> $$+10 - 2I_1 - 3I_3 = 0$$

$$10 - 2I_1 - 3(I_1 - I_2) = 0$$

$$10 - 2I_1 - 3I_1 + 3I_2 = 0$$

$$10 = 5I_1 - 3I_2$$
>
> &mldr; (Equation 1)
>
> **KVL for right loop (clockwise):**
>
> $$+3I_3 - 4I_2 - 6 = 0$$

$$3(I_1 - I_2) - 4I_2 - 6 = 0$$

$$3I_1 - 3I_2 - 4I_2 = 6$$

$$3I_1 - 7I_2 = 6$$
>
> &mldr; (Equation 2)
>
> **Solving:**
>
> From Eq. 1: $I_1 = \frac{10 + 3I_2}{5}$
>
> Substitute into Eq. 2:
>
> $$3 \times \frac{10 + 3I_2}{5} - 7I_2 = 6$$

$$\frac{30 + 9I_2}{5} - 7I_2 = 6$$

$$30 + 9I_2 - 35I_2 = 30$$

$$-26I_2 = 0$$

$$I_2 = 0 \text{ A}$$
>
> From Eq. 1:
>
> $$10 = 5I_1 - 3(0)$$

$$I_1 = 2 \text{ A}$$

$$I_3 = I_1 - I_2 = 2 - 0 = 2 \text{ A}$$
>
> **Answer:**
>
> - $I_1 = 2$ A (through 2Ω and 3Ω)

> - $I_2 = 0$ A (no current in right loop!)

> - $I_3 = 2$ A (through 3Ω, downward)
>
> **Insight:** Right loop has no current because the batteries and resistances are perfectly balanced!
>
> **Verification:**
>
> - Left loop: $10 - 2(2) - 3(2) = 10 - 4 - 6 = 0$ ✓

> - Right loop: $3(2) - 4(0) - 6 = 6 - 6 = 0$ ✓

> **↗ Connection · Problem 3.2 - Three-Loop Circuit (JEE Advanced)**
>
> This is getting complex. Here’s a challenging problem:
>
> In a circuit, three resistors 1Ω, 2Ω, and 3Ω form a triangle ABC (1Ω on AB, 2Ω on BC, 3Ω on CA). A 6V battery is connected between A and B. Find current through each resistor.
>
> **Solution:**
>
> This requires mesh analysis with 2 loops (inside and outside the triangle).
>
> Actually, this is simpler:
>
> - 1Ω is directly across 6V battery

> - 2Ω and 3Ω are in series, this combination in parallel with 1Ω
>
> **Direct approach:**
>
> Current through 1Ω: $I_1 = \frac{6}{1} = 6$ A
>
> 2Ω and 3Ω in series: $R_{series} = 2 + 3 = 5$ Ω
>
> Current through this branch: $I_2 = \frac{6}{5} = 1.2$ A
>
> **Answer:**
>
> - Current through 1Ω (AB): 6 A

> - Current through 2Ω (BC): 1.2 A

> - Current through 3Ω (CA): 1.2 A
>
> **Using KCL at A:**

> Total current from battery = $6 + 1.2 = 7.2$ A

> **↗ Connection · Problem 3.3 - Internal Resistance Challenge**
>
> A battery of EMF 12V and unknown internal resistance $r$ is connected to external resistance 5Ω. A voltmeter across the battery reads 10V. Find (a) internal resistance, (b) current, (c) power dissipated in internal resistance.
>
> **Solution:**
>
> **(a) Internal resistance:**
>
> Terminal voltage: $V = E - Ir$
>
> $$10 = 12 - Ir$$

$$Ir = 2$$
>
> &mldr; (Equation 1)
>
> Current: $I = \frac{V}{R} = \frac{10}{5} = 2$ A
>
> From Eq. 1:
>
> $$2r = 2$$

$$r = 1 \text{ Ω}$$
>
> **(b) Current:**
>
> $$I = 2 \text{ A}$$
>
> **(c) Power in internal resistance:**
>
> $$P_r = I^2 r = 2^2 \times 1 = 4 \text{ W}$$
>
> **Answer:** (a) r = 1Ω, (b) I = 2A, (c) P = 4W
>
> **Verification using KVL:**
>
> $$12 - I(1) - I(5) = 0$$

$$12 - 2(1) - 2(5) = 12 - 2 - 10 = 0$$
>
> ✓

---

## Quick Revision Box

| Situation | Law/Approach |
| --- | --- |
| Current at junction | KCL: $I_{in} = I_{out}$ |
| Voltage around loop | KVL: $\sum V = 0$ |
| With current through R | Potential drop: $-IR$ |
| Against current through R | Potential rise: $+IR$ |
| Battery (- to +) | Potential rise: $+\varepsilon$ |
| Battery (+ to -) | Potential drop: $-\varepsilon$ |
| Number of KCL equations | $(n-1)$ for $n$ junctions |
| Number of KVL equations | Number of independent loops |

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Sign conventions in KVL** (MOST COMMON ERROR!)
>
>    - With current → $-IR$ (potential drop)

>    - Against current → $+IR$ (potential rise)

>    - Practice 20+ problems to internalize this!

> 2. **Two-battery problems**
>
>    - Batteries aiding vs opposing

>    - Internal resistance effects

>    - Very common in JEE Main

> 3. **Multi-loop circuits**
>
>    - Usually 2-3 loops maximum

>    - Set up equations systematically

>    - Check if some currents come out negative (direction reverses)

> 4. **Wheatstone bridge** (special application)
>
>    - Balanced condition from KVL

>    - Next topic!

> 5. **Conceptual questions**
>
>    - “What happens if battery polarity is reversed?”

>    - “Why can’t we connect batteries of different EMF in parallel?”

>    - Often asked as assertion-reason
>
> **Time-saving tricks:**
>
> - For two-loop circuits, use standard variables ($I_1$, $I_2$, $I_3 = I_1 - I_2$)

> - Write KVL by choosing ONE direction consistently (always clockwise, or always anticlockwise)

> - Check answer: Sum of power delivered by batteries = Sum of power in resistors

> - If answer looks wrong, check SIGNS first before recalculating!
>
> **Common shortcuts:**
>
> - Symmetric circuits: Use symmetry to find equal currents

> - Battery in short circuit: $I = E/r$ (maximum current)

> - Open circuit: $V = E$ (maximum voltage)

---

## Related Topics

### Within Current Electricity

- [Ohm’s Law](../ohms-law/index.md) - Used within KVL equations
- [Resistance](../resistance/index.md) - Series/parallel simplification before KCL/KVL
- [Electrical Power](../electrical-power/index.md) - Power verification using KCL/KVL
- [Wheatstone Bridge](../wheatstone-bridge/index.md) - Special application of Kirchhoff’s laws

### Connected Chapters

- [Electrostatics](../../electrostatics/electric-potential/index.md) - Potential difference concept
- [Magnetism](../../magnetism/index.md) - Induced EMF in KVL
- [AC Circuits](../../electromagnetic-induction/index.md) - KCL/KVL with capacitors and inductors

### Math Connections

- [Linear Equations](../../../mathematics/index.md) - Solving systems from KCL/KVL
- [Matrix Methods](../../../mathematics/index.md) - For large circuits
- [Graph Theory](../../../mathematics/index.md) - Circuit topology

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **KCL: Current IN = Current OUT at any junction** - conservation of charge. Use $(n-1)$ equations for $n$ junctions.

> 2. **KVL: Sum of voltages around any loop = 0** - conservation of energy. Choose direction, then apply signs consistently!

> 3. **Critical sign convention:** With current through R → potential DROP → $-IR$. Battery (- to +) → potential RISE → $+\varepsilon$.

> 4. **Systematic approach:** Label currents, apply KCL at junctions, apply KVL around loops, solve system of equations. If current is negative, actual direction is opposite.

> 5. **These two laws can solve ANY DC circuit** - from simple series to complex networks. Master the sign conventions and you’re unstoppable!
>
> **“Kirchhoff’s laws are the Newton’s laws of circuits - two simple rules that govern all electrical networks. Get the signs right, and you’ll crack every circuit problem JEE throws at you!”**

---

From TestGuru · our mock-test platform

## You've read Kirchhoff's Current and Voltage Laws.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=current-electricity&tg_exam=jee-main&tg_page=%2Fphysics%2Fcurrent-electricity%2Fkirchhoffs-laws%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/current-electricity/kirchhoffs-laws/",this.page.identifier="/physics/current-electricity/kirchhoffs-laws/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="circuitSimulator" id="anim-circuitSimulator-1795396423116225225"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-circuitSimulator-1795396423116225225")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/current-electricity/kirchhoffs-laws/](https://jeenotes.in/physics/current-electricity/kirchhoffs-laws/) · raw HTML: `offline/physics/current-electricity/kirchhoffs-laws/index.html`_
