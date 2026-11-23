---
title: "First Law of Thermodynamics"
source: "https://jeenotes.in/chemistry/thermodynamics/first-law/"
description: "Master internal energy, work, heat, and the first law ΔU = q + w for JEE Main & Advanced with real-life examples"
updated: "2026-08-01"
reading_time: "15 min read"
breadcrumb: "Chemistry"
position: "/ Topic 1 of 7"
html: "../../../../offline/chemistry/thermodynamics/first-law/index.html"
extracted: "2026-11-23"
---

> Master internal energy, work, heat, and the first law ΔU = q + w for JEE Main & Advanced with real-life examples

## The Hook: Why Your Car Engine Gets Hot

> **★ Key point · Connect: Real Life → Chemistry**
>
> Ever noticed how a car engine gets incredibly hot after a long drive? You’re putting fuel (chemical energy) in, getting motion (mechanical work) out, and somehow heat is also being produced. Where does all this energy go?
>
> **Here’s the mystery:** If energy can’t be created or destroyed, why does your phone battery drain when you use it? Why does a refrigerator need electricity to cool food? Why do ice cubes melt when left outside?
>
> The answer lies in the **First Law of Thermodynamics** - the universal energy accounting system of the universe.

---

## The Core Concept

### System and Surroundings

Thermodynamics splits the universe into the **system** (the part we study) and the **surroundings** (everything else). Systems are classified by what they exchange:

| Type | Matter Exchange | Energy Exchange | Example |
| --- | --- | --- | --- |
| Open | Yes | Yes | Boiling water in an open pan |
| Closed | No | Yes | Gas sealed in a piston |
| Isolated | No | No | An ideal thermos flask |

### The First Law: Energy Accounting

$$\boxed{\Delta U = q + w}$$

**In simple terms:** “Energy can change forms but can’t be created or destroyed. Whatever energy enters or leaves a system must be accounted for.”

Think of it like your bank account:

- **ΔU** (Change in internal energy) = Your account balance change
- **q** (Heat) = Money deposited or withdrawn
- **w** (Work) = Salary earned or bills paid

The total money in your account changes only by deposits and withdrawals - it doesn’t magically appear or disappear!

### Sign Conventions: The Direction Matters

> **★ Key point · Sign Convention - Chemistry Standard**
>
> **Heat (q):**
>
> - Heat absorbed by system: **q = positive** (endothermic)

> - Heat released by system: **q = negative** (exothermic)
>
> **Work (w):**
>
> - Work done ON the system: **w = positive** (compression)

> - Work done BY the system: **w = negative** (expansion)
>
> **Remember:** Heat IN and Work ON are positive!

> **⚠ Trap · Physics vs Chemistry Sign Convention**
>
> In Physics textbooks, work done BY the system is often taken as positive. In Chemistry (and JEE), work done ON the system is positive. Always check which convention the question uses!

---

## Internal Energy (U): The Hidden Energy

### What is Internal Energy?

Internal energy is the **total energy stored inside a substance** - the sum of:

1. **Kinetic energy** of moving molecules
2. **Potential energy** of molecular interactions
3. **Electronic energy** within atoms
4. **Nuclear energy** (constant for chemical reactions)

**For ideal gases:** No intermolecular forces, so:

$$U = \text{kinetic energy only} = f \cdot \frac{nRT}{2}$$

where $f$ = degrees of freedom

- Monatomic: $f = 3$, so $U = \frac{3}{2}nRT$
- Diatomic: $f = 5$, so $U = \frac{5}{2}nRT$

### State Function Property

> **◐ In simple terms · State Function vs Path Function**
>
> **State Functions** (depend only on initial and final states):
>
> - Internal Energy (U)

> - Enthalpy (H)

> - Entropy (S)

> - Gibbs Energy (G)
>
> **Path Functions** (depend on how the process happens):
>
> - Heat (q)

> - Work (w)
>
> **Analogy:** Climbing a mountain
>
> - State function: Elevation gain (same whether you climb straight or zigzag)

> - Path function: Distance walked (different for different paths)

$$\Delta U = U_{final} - U_{initial}$$

For a cyclic process (returns to starting point):

$$\oint dU = 0 \quad \text{but} \quad \oint dq \neq 0, \quad \oint dw \neq 0$$

---

## Work in Thermodynamics

### Expansion/Compression Work

When a gas expands or compresses against external pressure:

$$\boxed{w = -P_{ext} \Delta V}$$

**Why the negative sign?**

- When gas expands (ΔV > 0), system does work on surroundings → w < 0
- When gas compresses (ΔV < 0), surroundings do work on system → w > 0

### Types of Work Processes

#### 1. Free Expansion (Into Vacuum)

When gas expands into vacuum: $P_{ext} = 0$

$$w = 0$$

**Example:** Bursting a balloon - the gas does no work because there’s nothing to push against.

#### 2. Expansion Against Constant External Pressure

$$w = -P_{ext}(V_2 - V_1) = -P_{ext}\Delta V$$

For ideal gas:

$$w = -P_{ext}\Delta V = -\Delta n_g RT$$

where $\Delta n_g$ = change in moles of gas

#### 3. Reversible Isothermal Expansion (Maximum Work)

For an ideal gas at constant temperature:

$$\boxed{w = -nRT \ln\frac{V_2}{V_1} = -2.303 \, nRT \log\frac{V_2}{V_1}}$$

or equivalently:

$$w = -nRT \ln\frac{P_1}{P_2} = -2.303 \, nRT \log\frac{P_1}{P_2}$$

**This gives MAXIMUM work** because the process is reversible (infinitely slow).

### Interactive Demo: Visualize Thermodynamic Processes

See how P, V, and T change during isothermal, adiabatic, and other processes.

> **★ Key point · JEE Shortcut**
>
> For isothermal expansion of ideal gas:
>
> - $\Delta U = 0$ (internal energy constant at constant T)

> - Therefore: $q = -w$

> - Heat absorbed = Work done by gas

#### 4. Adiabatic Process (No Heat Exchange)

$$q = 0 \quad \Rightarrow \quad \Delta U = w$$

For adiabatic expansion/compression of ideal gas:

$$w = \Delta U = nC_V(T_2 - T_1) = \frac{nR(T_2 - T_1)}{\gamma - 1}$$

where $\gamma = \frac{C_P}{C_V}$

---

## Heat (q): Energy Transfer by Temperature Difference

Heat flows from hot to cold objects until temperatures equalize.

### Processes at Constant Volume

In a rigid container (ΔV = 0):

- Work: $w = 0$ (no volume change)
- First Law: $\Delta U = q_V + 0$

$$\boxed{q_V = \Delta U}$$

**Heat capacity at constant volume:**

$$C_V = \left(\frac{dU}{dT}\right)_V$$

$$q_V = nC_V\Delta T$$

### Processes at Constant Pressure

At constant pressure:

$$q_P = \Delta U + P\Delta V$$

This leads us to define a new state function called **Enthalpy** (covered in next topic):

$$H = U + PV$$

$$\Delta H = q_P$$

---

## Memory Tricks & Patterns

### Mnemonic for First Law

**“Quick Work Updates”** → **q + w = ΔU**

**“Heat IN, Work ON”** → both are positive

### Pattern Recognition for JEE

#### Quick Decision Tree

| Process | ΔT | ΔU | Work | Heat |
| --- | --- | --- | --- | --- |
| Isothermal (ideal gas) | 0 | 0 | $-nRT\ln\frac{V_2}{V_1}$ | $-w$ |
| Adiabatic | Changes | $nC_V\Delta T$ | $\Delta U$ | 0 |
| Isochoric (const V) | Changes | $nC_V\Delta T$ | 0 | $\Delta U$ |
| Isobaric (const P) | Changes | $nC_V\Delta T$ | $-P\Delta V$ | $nC_P\Delta T$ |
| Free expansion | 0 (ideal gas) | 0 | 0 | 0 |
| Cyclic | 0 | 0 | $-q$ | $q$ |

### Formula Summary Sheet

| Quantity | Formula | When to Use |
| --- | --- | --- |
| Work (general) | $w = -P_{ext}\Delta V$ | Constant external pressure |
| Work (reversible) | $w = -nRT\ln\frac{V_2}{V_1}$ | Isothermal ideal gas |
| Work (adiabatic) | $w = nC_V\Delta T$ | No heat exchange |
| Heat (const V) | $q_V = nC_V\Delta T$ | Rigid container |
| Heat (const P) | $q_P = nC_P\Delta T$ | Open to atmosphere |
| Heat capacity relation | $C_P - C_V = R$ | Ideal gas only |

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Sign Convention Confusion**
>
> **Wrong:** Gas expands, so work is positive.

> **Right:** Gas expands doing work ON surroundings, so w is NEGATIVE.
>
> **Remember:** Work done BY system = negative in chemistry convention!

> **⚠ Trap #2: Assuming ΔU = 0 for All Isothermal Processes**
>
> **Wrong:** Any isothermal process has ΔU = 0.

> **Right:** Only for **ideal gases** is ΔU = 0 in isothermal process.
>
> For real gases and liquids, even at constant temperature, ΔU can change due to intermolecular forces.

> **⚠ Trap #3: Confusing Reversible and Irreversible Work**
>
> **Irreversible work:** $w = -P_{ext}\Delta V$ (finite external pressure)

> **Reversible work:** $w = -nRT\ln\frac{V_2}{V_1}$ (infinitesimal pressure difference)
>
> **JEE Fact:** Reversible expansion does **more work** than irreversible expansion between same initial and final states.

> **⚠ Trap #4: Free Expansion Confusion**
>
> **Free expansion (into vacuum):**
>
> - $P_{ext} = 0$, so $w = 0$

> - For ideal gas: $\Delta U = 0$ (isothermal)

> - Therefore: $q = 0$
>
> **Not to be confused with:** Expansion against very low pressure (w ≠ 0)

---

## When to Use This

> **★ Key point · Decision Tree: Which Formula to Use?**
>
> **Step 1:** Identify the process type
>
> - Constant volume → Use $q_V = \Delta U$

> - Constant pressure → Use $q_P = \Delta H$ (see [Enthalpy](../enthalpy/index.md))

> - Constant temperature (isothermal) → $\Delta U = 0$ for ideal gas

> - No heat exchange (adiabatic) → $q = 0$
>
> **Step 2:** Check for work
>
> - Volume changes → Calculate work

> - Rigid container → $w = 0$
>
> **Step 3:** Apply First Law
>
> - $\Delta U = q + w$

### Cross-Links to Related Topics

**Prerequisites:**

- [Basic Concepts](https://jeenotes.in/chemistry/basic-concepts/) - System, surroundings, state functions
- [Atomic Structure](https://jeenotes.in/chemistry/atomic-structure/) - Molecular energy levels

**Related Topics:**

- [Enthalpy](../enthalpy/index.md) - Heat at constant pressure
- [Kinetic Theory](../../../physics/kinetic-theory/index.md) - Molecular basis of internal energy
- [Laws of Motion](../../../physics/laws-of-motion/index.md) - Work-energy concepts

**Applications:**

- [Chemical Kinetics](https://jeenotes.in/chemistry/chemical-kinetics/) - Temperature dependence of rates
- [Equilibrium](https://jeenotes.in/chemistry/equilibrium/) - Energy changes in reversible reactions

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1: Basic First Law Calculation**
>
> **Question:** A system absorbs 250 J of heat and does 150 J of work on the surroundings. Calculate the change in internal energy.
>
> **Solution:**

> Given:
>
> - Heat absorbed: $q = +250$ J (positive, endothermic)

> - Work done BY system: $w = -150$ J (negative in chemistry convention)
>
> Using First Law:
>
> $$\Delta U = q + w = 250 + (-150) = 100 \text{ J}$$
>
> **Answer:** Internal energy increases by 100 J.

> **↗ Connection · Problem 1.2: Isothermal Expansion**
>
> **Question:** One mole of ideal gas expands isothermally at 300 K from 2 L to 10 L. Calculate work done by the gas.
>
> **Solution:**

> Given: $n = 1$ mol, $T = 300$ K, $V_1 = 2$ L, $V_2 = 10$ L
>
> For isothermal process:
>
> $$w = -2.303 \, nRT \log\frac{V_2}{V_1}$$

$$w = -2.303 \times 1 \times 8.314 \times 300 \times \log\frac{10}{2}$$

$$w = -2.303 \times 8.314 \times 300 \times \log 5$$

$$w = -2.303 \times 8.314 \times 300 \times 0.699$$

$$w = -4014 \text{ J} = -4.01 \text{ kJ}$$
>
> For isothermal ideal gas: $\Delta U = 0$

> Therefore: $q = -w = +4.01$ kJ (heat absorbed)
>
> **Answer:** Work done by gas = 4.01 kJ, Heat absorbed = 4.01 kJ

> **↗ Connection · Problem 1.3: Constant Volume Process**
>
> **Question:** 2 moles of a gas ($C_V = 20$ J/mol·K) is heated at constant volume from 300 K to 400 K. Calculate q, w, and ΔU.
>
> **Solution:**

> At constant volume: $\Delta V = 0$
>
> Work: $w = -P_{ext}\Delta V = 0$
>
> Heat: $q_V = nC_V\Delta T = 2 \times 20 \times (400-300) = 4000$ J
>
> Internal energy: $\Delta U = q + w = 4000 + 0 = 4000$ J
>
> **Answer:** q = 4000 J, w = 0, ΔU = 4000 J

---

### Level 2: JEE Main

> **↗ Connection · Problem 2.1: Cyclic Process**
>
> **Question:** A gas undergoes a cyclic process in which it absorbs 500 J of heat. What is the work done by the gas in the cycle?
>
> **Solution:**

> For a cyclic process, the system returns to its initial state.
>
> Therefore: $\Delta U = 0$ (state function)
>
> Using First Law:
>
> $$\Delta U = q + w$$

$$0 = 500 + w$$

$$w = -500 \text{ J}$$
>
> Work done BY the gas = 500 J (taking magnitude)
>
> **Answer:** 500 J of work is done by the gas.
>
> **Key Insight:** In a cyclic process, all heat absorbed is converted to work (or vice versa).

> **↗ Connection · Problem 2.2: Comparison of Reversible and Irreversible Work**
>
> **Question:** One mole of ideal gas at 300 K expands from 1 atm to 0.5 atm. Calculate work done in:

> (a) Reversible isothermal expansion

> (b) Irreversible expansion against constant external pressure of 0.5 atm
>
> **Solution:**
>
> **(a) Reversible isothermal:**
>
> $$w_{rev} = -2.303 \, nRT \log\frac{P_1}{P_2}$$

$$w_{rev} = -2.303 \times 1 \times 8.314 \times 300 \times \log\frac{1}{0.5}$$

$$w_{rev} = -2.303 \times 8.314 \times 300 \times 0.301$$

$$w_{rev} = -1729 \text{ J}$$
>
> **(b) Irreversible:**
>
> For isothermal ideal gas: $PV = nRT = \text{constant}$
>
> Initial: $P_1V_1 = 1 \times V_1$

> Final: $P_2V_2 = 0.5 \times V_2$
>
> Therefore: $V_2 = 2V_1$
>
> $$w_{irr} = -P_{ext}(V_2 - V_1) = -0.5 \times (2V_1 - V_1) = -0.5V_1$$
>
> But $V_1 = \frac{nRT}{P_1} = \frac{1 \times 8.314 \times 300}{1 \times 101.325} = 24.6$ L $= 0.0246$ m³
>
> Wait, let’s use consistent units. For gases, easier to use:
>
> $$w_{irr} = -P_{ext}\Delta V = -P_{ext}(V_2-V_1)$$
>
> Since $P_1V_1 = P_2V_2$ and $P_2 = 0.5$ atm:
>
> $$V_2 = \frac{P_1V_1}{P_2} = \frac{1 \times V_1}{0.5} = 2V_1$$

$$w_{irr} = -P_{ext} \times V_1 = -0.5 \times V_1$$
>
> Since $P_1V_1 = nRT = 1 \times 8.314 \times 300 = 2494$ J
>
> Therefore: $V_1 = \frac{2494}{101325 \text{ Pa}} = 0.0246$ m³
>
> $$w_{irr} = -0.5 \times 101325 \times 0.0246 = -1247 \text{ J}$$
>
> **Answer:**
>
> - Reversible: -1729 J (more work done BY gas)

> - Irreversible: -1247 J
>
> **Key Insight:** Reversible processes extract maximum work!

> **↗ Connection · Problem 2.3: Adiabatic Process**
>
> **Question:** One mole of an ideal gas ($C_V = 12.5$ J/mol·K) undergoes adiabatic expansion from 400 K to 300 K. Calculate q, w, and ΔU.
>
> **Solution:**
>
> Adiabatic process: $q = 0$ (no heat exchange)
>
> $$\Delta U = nC_V\Delta T = 1 \times 12.5 \times (300-400) = -1250 \text{ J}$$
>
> Using First Law:
>
> $$\Delta U = q + w$$

$$-1250 = 0 + w$$

$$w = -1250 \text{ J}$$
>
> **Answer:** q = 0, w = -1250 J, ΔU = -1250 J
>
> **Interpretation:** The gas does 1250 J of work on surroundings, and since no heat is supplied, its internal energy (and temperature) decreases.

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1: Multi-Step Process**
>
> **Question:** One mole of ideal gas at 300 K undergoes:
>
> - Step 1: Isothermal expansion from 1 atm to 0.5 atm

> - Step 2: Isobaric compression from 300 K to 200 K ($C_P = 29.1$ J/mol·K)
>
> Calculate total heat absorbed and work done.
>
> **Solution:**
>
> **Step 1: Isothermal expansion**
>
> $$w_1 = -2.303 \, nRT \log\frac{P_1}{P_2} = -2.303 \times 1 \times 8.314 \times 300 \times \log 2$$

$$w_1 = -2.303 \times 8.314 \times 300 \times 0.301 = -1729 \text{ J}$$
>
> For isothermal ideal gas: $\Delta U_1 = 0$
>
> Therefore: $q_1 = -w_1 = 1729$ J
>
> **Step 2: Isobaric compression at P = 0.5 atm**
>
> $$q_2 = nC_P\Delta T = 1 \times 29.1 \times (200-300) = -2910 \text{ J}$$

$$w_2 = -P\Delta V = -nR\Delta T = -1 \times 8.314 \times (200-300) = +831.4 \text{ J}$$
>
> (Work is positive because compression - work done ON gas)
>
> $$\Delta U_2 = q_2 + w_2 = -2910 + 831.4 = -2078.6 \text{ J}$$
>
> **Total:**
>
> - Total heat: $q_{total} = q_1 + q_2 = 1729 - 2910 = -1181$ J (released)

> - Total work: $w_{total} = w_1 + w_2 = -1729 + 831.4 = -897.6$ J

> - Total ΔU: $\Delta U_{total} = 0 + (-2078.6) = -2078.6$ J
>
> Verification: $\Delta U_{total} = q_{total} + w_{total} = -1181 + (-897.6) = -2078.6$ J ✓
>
> **Answer:** Total heat released = 1181 J, Net work done by gas = 897.6 J

> **↗ Connection · Problem 3.2: Free Expansion vs Regular Expansion**
>
> **Question:** Two identical samples of 1 mole ideal gas at 300 K and 10 atm are expanded to 1 atm:

> (a) Sample A: Free expansion into vacuum

> (b) Sample B: Isothermal reversible expansion
>
> For each, calculate q, w, ΔU, and final temperature.
>
> **Solution:**
>
> **(a) Free expansion:**
>
> - $P_{ext} = 0$

> - $w = 0$ (no opposing pressure)

> - For ideal gas, $\Delta U = 0$ (depends only on T, not V)

> - Therefore: $q = 0$

> - **Final temperature:** 300 K (isothermal for ideal gas)
>
> **(b) Isothermal reversible:**
>
> - $T = 300$ K (constant)

> - $\Delta U = 0$ (isothermal ideal gas)
>
> $$w = -2.303 \, nRT \log\frac{P_1}{P_2} = -2.303 \times 1 \times 8.314 \times 300 \times \log 10$$

$$w = -2.303 \times 8.314 \times 300 \times 1 = -5744 \text{ J}$$

$$q = -w = 5744 \text{ J}$$
>
> - **Final temperature:** 300 K
>
> **Comparison:**
>
> | Process | q (J) | w (J) | ΔU (J) | T_final (K) |

> | --- | --- | --- | --- | --- |

> | Free expansion | 0 | 0 | 0 | 300 |

> | Reversible isothermal | 5744 | -5744 | 0 | 300 |
>
> **Key Insight:** Same initial and final states, but different paths mean different q and w values. However, ΔU is same (state function)!

> **↗ Connection · Problem 3.3: Real Gas Effect**
>
> **Question:** For real gases, explain why ΔU ≠ 0 during free expansion (Joule expansion), even though w = 0 and q = 0.
>
> **Solution:**
>
> This appears to violate the First Law, but it doesn’t!
>
> **For real gases:**
>
> - Intermolecular forces exist (van der Waals forces)

> - During expansion, molecules move farther apart

> - Work must be done AGAINST these attractive forces

> - This work comes from internal kinetic energy

> - Therefore, temperature DROPS during free expansion
>
> **Energy accounting:**
>
> $$\Delta U = \Delta U_{kinetic} + \Delta U_{potential}$$
>
> - $\Delta U_{kinetic} < 0$ (molecules slow down, T decreases)

> - $\Delta U_{potential} > 0$ (molecules separated against attraction)
>
> For free expansion: $q = 0, w = 0$
>
> Therefore: $\Delta U = 0$ still holds!
>
> But unlike ideal gas, **temperature changes** even though ΔU = 0.
>
> **Real-life example:** Joule-Thomson effect - gas cools when expanded through a porous plug (used in refrigeration).
>
> **For ideal gas:** No intermolecular forces, so $\Delta U_{potential} = 0$, temperature remains constant.
>
> **JEE Insight:** Always specify “ideal gas” when assuming ΔU = 0 for isothermal process!

---

## Quick Revision Box

### Essential Formulas

| Concept | Formula | Condition |
| --- | --- | --- |
| First Law | $\Delta U = q + w$ | Always |
| Work (expansion) | $w = -P_{ext}\Delta V$ | Constant P_ext |
| Work (reversible) | $w = -nRT\ln\frac{V_2}{V_1}$ | Isothermal ideal gas |
| Heat (const V) | $q_V = \Delta U$ | Isochoric |
| Heat (const P) | $q_P = \Delta H$ | Isobaric |
| Isothermal (ideal gas) | $\Delta U = 0$ | T = constant |
| Adiabatic | $q = 0$, $\Delta U = w$ | No heat exchange |
| Cyclic process | $\Delta U = 0$, $q = -w$ | Returns to start |

### Sign Convention

| Energy Transfer | Sign | Example |
| --- | --- | --- |
| Heat absorbed | + | Melting ice |
| Heat released | - | Combustion |
| Work ON system | + | Compression |
| Work BY system | - | Expansion |

### JEE Strategy Tips

1. **Always write sign convention first** - saves silly mistakes
2. **Identify process type** before choosing formula
3. **For ideal gas isothermal:** Remember ΔU = 0 automatically
4. **State function or not?** U, H, S, G are state functions; q, w are not
5. **Maximum work:** Reversible process always gives maximum work

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> **1. The First Law is Universal Energy Conservation**
>
> $$\Delta U = q + w$$
>
> Energy entering or leaving must be accounted for as heat or work.
>
> **2. Sign Convention Mastery is Critical**
>
> - Heat IN, Work ON → Positive

> - Heat OUT, Work BY → Negative
>
> **3. Process Determines Formula**
>
> - Isothermal (ideal gas): $\Delta U = 0$, use $w = -nRT\ln\frac{V_2}{V_1}$

> - Adiabatic: $q = 0$, use $\Delta U = w = nC_V\Delta T$

> - Isochoric: $w = 0$, use $\Delta U = q_V = nC_V\Delta T$

> - Cyclic: $\Delta U = 0$, heat absorbed = work done
>
> **4. State Functions vs Path Functions**
>
> - ΔU depends only on initial and final states

> - q and w depend on the path taken

> - For cyclic process: ΔU = 0, but q ≠ 0 and w ≠ 0
>
> **5. Real Gases ≠ Ideal Gases**
>
> - For real gases, isothermal expansion can change temperature

> - Always specify “ideal gas” when making assumptions
>
> **“Energy is the currency of the universe - the First Law is its accounting system.”**
>
> **JEE Weightage:** 2-3 questions per paper, often combined with Enthalpy and Gibbs Energy.
>
> **Time-saving tip:** For MCQs, check if ΔU = 0 (isothermal ideal gas or cyclic) - eliminates 2 options immediately!

---

## What’s Next?

Now that you’ve mastered internal energy and the First Law, you’re ready to explore:

> **◐ In simple terms · Coming Up Next**
>
> **[Enthalpy and Heat of Reaction](../enthalpy/index.md)** - Learn why chemists prefer enthalpy over internal energy, master Hess’s Law, and calculate heat changes in reactions. Discover why some reactions feel hot while others feel cold!

**Related Advanced Topics:**

- [Entropy and Second Law](../entropy/index.md) - Why ice melts and why you can’t unscramble an egg
- [Gibbs Energy](../gibbs-energy/index.md) - The ultimate predictor of spontaneity
- [Chemical Kinetics](https://jeenotes.in/chemistry/chemical-kinetics/) - How fast do reactions happen?

From TestGuru · our mock-test platform

## You've read First Law of Thermodynamics.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fchemistry%2Fthermodynamics%2Ffirst-law%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/thermodynamics/first-law/",this.page.identifier="/chemistry/thermodynamics/first-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicsProcess" id="anim-thermodynamicsProcess-1795396420596442112"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicsProcess-1795396420596442112")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/thermodynamics/first-law/](https://jeenotes.in/chemistry/thermodynamics/first-law/) · raw HTML: `offline/chemistry/thermodynamics/first-law/index.html`_
