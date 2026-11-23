---
title: "Basic Logic Gates and Truth Tables"
source: "https://jeenotes.in/physics/electronic-devices/logic-gates/"
description: "Master NOT, AND, OR, NAND, NOR gates and Boolean algebra for JEE Physics with computer processor fundamentals"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 9"
html: "../../../../offline/physics/electronic-devices/logic-gates/index.html"
extracted: "2026-11-23"
---

> Master NOT, AND, OR, NAND, NOR gates and Boolean algebra for JEE Physics with computer processor fundamentals

## Prerequisites

Before studying this topic, make sure you understand:

- [Transistor](../transistor/index.md) - Transistor as digital switch
- [Diode](../diode-rectifier/index.md) - Diode switching behavior
- Basic binary number system (0 and 1)

## The Hook: How Does Your Computer Make Decisions?

> **★ Key point · Connect: Smartphone Decisions → Logic Gates**
>
> Every time you tap your **smartphone screen**, billions of **logic gates** spring into action:
>
> - Is touch detected **AND** screen unlocked? → Open app

> - Is battery low **OR** overheating? → Alert user

> - **NOT** connected to WiFi? → Use mobile data
>
> **Mind-blowing scale:**
>
> - Modern processor: **Billions of logic gates**

> - Each gate: Made from **2-4 transistors**

> - All working together at **GHz speeds** (billion operations/second)
>
> **Your calculator solving 2+3:**
>
> - Binary addition using **AND/XOR gates**

> - Carry propagation through **chain of gates**

> - Display output via **decoder gates**

> - All in nanoseconds!
>
> How do simple transistor switches combine to create the digital brain that runs AI, games, and the internet? Let’s decode the building blocks of computing!

## Interactive Demo

Build logic circuits and see truth tables in action:

---

## The Core Concept: Binary Logic

### Digital vs Analog

**Analog:** Continuous values (like volume knob)

**Digital:** Only two states (like light switch)

- **0** = LOW = False = ~0V
- **1** = HIGH = True = ~5V

**Why digital won:**

- **Noise immunity:** Easier to distinguish 0 from 1
- **Reliable storage:** Bits don’t drift
- **Perfect copying:** No degradation
- **Easy processing:** Boolean algebra!

### Boolean Algebra Basics

**Three fundamental operations:**

1. **NOT** (complement): $\overline{A}$ or $A'$
2. **AND** (product): $A \cdot B$ or $AB$
3. **OR** (sum): $A + B$

**All digital circuits built from these three!**

> **◐ In simple terms · From Math to Computers**
>
> **George Boole** (1854) invented Boolean algebra for logic
>
> - Worked with True/False, not numbers

> - Showed logic can be mathematical!
>
> **Claude Shannon** (1938) - Master’s thesis (most important ever!)
>
> - Connected Boolean algebra to **electrical circuits**

> - Showed switches can perform logic

> - **Foundation of all digital computers!**
>
> **Result:** Your smartphone uses 170-year-old math and 85-year-old circuit ideas - timeless fundamentals!

---

## The Seven Basic Gates

### 1. NOT Gate (Inverter)

**Symbol:**

```fallback
——|▷○|—— Output
A     NOT
```

**Truth Table:**

| A | Y |
| --- | --- |
| 0 | 1 |
| 1 | 0 |

**Boolean:** $Y = \overline{A}$ or $Y = A'$

**Transistor circuit:**

```fallback
VCC
     |
     RC
     |
     ├── Y
A ───┤ (npn)
     │
    GND
```

**Operation:**

- A = 0 → Transistor OFF → Y = HIGH (1)
- A = 1 → Transistor ON → Y = LOW (0)

**Uses:** Signal inversion, creating complements

---

### 2. AND Gate

**Symbol:**

```fallback
A ——|    \
     | &  |—— Y
B ——|    /
```

**Truth Table:**

| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**Boolean:** $Y = A \cdot B$ or $Y = AB$

**In words:** Output is 1 **only if** A **AND** B **both** are 1

**Real-world analogy:**

- A = Key inserted
- B = Door unlocked
- Y = Door opens
- Need **BOTH** conditions!

**Uses:** Conditional execution, masking, multiplication (binary)

---

### 3. OR Gate

**Symbol:**

```fallback
A ——|    \
     |≥1  |—— Y
B ——|    /
```

**Truth Table:**

| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

**Boolean:** $Y = A + B$

**In words:** Output is 1 **if** A **OR** B **or both** are 1

**Real-world analogy:**

- A = Front door sensor
- B = Back door sensor
- Y = Alarm triggers
- **Either** door opening triggers alarm!

**Uses:** Signal combination, decision trees

---

### 4. NAND Gate (Universal Gate)

**Symbol:**

```fallback
A ——|    \
     | &  |○—— Y
B ——|    /
```

(AND + NOT bubble)

**Truth Table:**

| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

**Boolean:** $Y = \overline{A \cdot B}$ or $Y = (AB)'$

**In words:** Output is 0 **only if both** A **AND** B are 1

**Special property: UNIVERSAL GATE!**

- Can create **any** logic gate using only NAND
- Preferred in IC manufacturing (simpler)

**Create other gates from NAND:**

**NOT:** Connect inputs together: $\overline{A} = \overline{A \cdot A}$

**AND:** NAND + NOT: $AB = \overline{\overline{AB}}$

**OR:** $A + B = \overline{\overline{A} \cdot \overline{B}}$ (De Morgan’s law)

---

### 5. NOR Gate (Universal Gate)

**Symbol:**

```fallback
A ——|    \
     |≥1  |○—— Y
B ——|    /
```

(OR + NOT bubble)

**Truth Table:**

| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

**Boolean:** $Y = \overline{A + B}$ or $Y = (A+B)'$

**In words:** Output is 1 **only if both** A **AND** B are 0

**Also UNIVERSAL GATE!**

- Can create any gate using only NOR
- Alternative to NAND for IC design

**Create NOT from NOR:** $\overline{A} = \overline{A + A}$

---

### 6. XOR Gate (Exclusive OR)

**Symbol:**

```fallback
A ——|    \
     | =1 |—— Y
B ——|    /
```

**Truth Table:**

| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

**Boolean:** $Y = A \oplus B = A\overline{B} + \overline{A}B$

**In words:** Output is 1 **if inputs are different**

**Real-world:** Two-way light switch!

- Either switch flips → Light state changes
- Both flip → Back to original state

**Uses:**

- **Binary addition** (1+1 = 0, carry 1)
- **Parity checking** (error detection)
- **Comparators** (detecting differences)

---

### 7. XNOR Gate (Exclusive NOR)

**Symbol:**

```fallback
A ——|    \
     | =1 |○—— Y
B ——|    /
```

(XOR + NOT bubble)

**Truth Table:**

| A | B | Y |
| --- | --- | --- |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

**Boolean:** $Y = \overline{A \oplus B} = AB + \overline{A}\,\overline{B}$

**In words:** Output is 1 **if inputs are same**

**Use:** **Equality checker**

- Password match? (all bits same → output 1)
- Data verification

---

## Truth Table Summary

| A | B | AND | OR | NAND | NOR | XOR | XNOR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

**Pattern recognition:**

- **NAND** = NOT(AND)
- **NOR** = NOT(OR)
- **XNOR** = NOT(XOR)
- **XOR** = 1 when inputs **different**
- **XNOR** = 1 when inputs **same**

---

## Boolean Algebra Laws

### Basic Laws

**1. Identity Laws:**

$$A + 0 = A \quad ; \quad A \cdot 1 = A$$

**2. Null Laws:**

$$A + 1 = 1 \quad ; \quad A \cdot 0 = 0$$

**3. Idempotent Laws:**

$$A + A = A \quad ; \quad A \cdot A = A$$

**4. Complement Laws:**

$$A + \overline{A} = 1 \quad ; \quad A \cdot \overline{A} = 0$$

**5. Double Negation:**

$$\overline{\overline{A}} = A$$

### Important Theorems

**De Morgan’s Theorems** (Most important for JEE!)

$$\boxed{\overline{A + B} = \overline{A} \cdot \overline{B}}$$

$$\boxed{\overline{A \cdot B} = \overline{A} + \overline{B}}$$

**In words:**

- NOT(OR) = (NOT A) AND (NOT B)
- NOT(AND) = (NOT A) OR (NOT B)

**This converts NAND ↔ NOR!**

**Distributive Law:**

$$A(B + C) = AB + AC$$

**Absorption Law:**

$$A + AB = A$$

$$A(A + B) = A$$

> **★ Key point · Why De Morgan's Matters**
>
> **NAND to NOR conversion:**
>
> $$\overline{AB} = \overline{A} + \overline{B}$$
>
> **Practical use:**

> If you have only NAND gates, but need NOR:
>
> 1. Invert both inputs (use NAND as NOT)

> 2. Feed to NAND gate

> 3. Result = NOR operation!
>
> **This is how real chips optimize gate count:**
>
> - Design with AND/OR (easy to understand)

> - Convert all to NAND or NOR (cheaper to manufacture)

> - De Morgan’s laws enable the conversion!
>
> **Your processor:** Billions of NAND gates pretending to be AND/OR/NOT!

---

## Combinational Logic

### Half Adder

Adds two 1-bit numbers.

**Inputs:** A, B
**Outputs:** Sum (S), Carry (C)

**Truth Table:**

| A | B | S (Sum) | C (Carry) |
| --- | --- | --- | --- |
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

**Boolean:**

$$S = A \oplus B \quad \text{(XOR)}$$

$$C = A \cdot B \quad \text{(AND)}$$

**Circuit:** 1 XOR + 1 AND gate

### Full Adder

Adds three 1-bit numbers (includes carry-in).

**Inputs:** A, B, $C_{in}$
**Outputs:** Sum (S), Carry ($C_{out}$)

**Boolean:**

$$S = A \oplus B \oplus C_{in}$$

$$C_{out} = AB + BC_{in} + AC_{in}$$

**Uses:** Building multi-bit adders in calculators, processors!

**8-bit adder:** Chain 8 full adders → Add two 8-bit numbers!

---

## Memory Tricks & Patterns

### Gate Memory Mnemonics

**AND:** “**A**ll **N**eed to be **D**one”

- All inputs must be 1 for output 1

**OR:** “**O**ne is **R**eady”

- Any one input being 1 makes output 1

**NAND:** “**N**ot **A**ll **N**eed to be **D**one”

- Output 0 only when all are 1

**XOR:** “E**x**actly **O**ne **R**eady”

- Output 1 when exactly one input is 1 (for 2 inputs)

**XNOR:** “**S**ame gives **1**”

- Inputs same → output 1

### De Morgan’s Quick Memory

**“Break the bar, Change the operator”**

$$\overline{A + B} → \overline{A} \cdot \overline{B}$$

- Break bar over (A+B)
- Add bars over A and B
- Change + to ·

### Truth Table Patterns

**NAND = Opposite of AND**

- Just flip AND’s output column!

**NOR = Opposite of OR**

- Just flip OR’s output column!

**XOR pattern:** Outputs alternate in groups

- 0, 1, 1, 0 (one each, then swap)

### Universal Gates Memory

**"**N**aughty **A**nd **N**aughty **O**r **R**ule"**

**NAND** and **NOR** are universal!

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **For circuit simplification:**
>
> 1. Write Boolean expression

> 2. Apply De Morgan’s and Boolean laws

> 3. Minimize gates
>
> **For truth table → circuit:**
>
> 1. Write Sum of Products (SOP) or Product of Sums (POS)

> 2. Simplify using Boolean algebra or K-map

> 3. Implement with gates
>
> **For gate conversion:**
>
> - Need NOT? → Use NAND/NOR with inputs tied together

> - Have only NAND? → Use De Morgan’s to convert everything

> - Have only NOR? → Use De Morgan’s to convert everything
>
> **For JEE problems:**
>
> - Given truth table → Find Boolean expression

> - Given Boolean expression → Draw circuit

> - Simplify expression → Count minimum gates

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing AND with OR**
>
> **Wrong:** “AND gives 1 if any input is 1”
>
> **Correct:**
>
> - **AND:** Output 1 only if **all** inputs are 1

> - **OR:** Output 1 if **any** input is 1
>
> **Memory aid:**
>
> - AND is strict (needs all)

> - OR is lenient (needs any)
>
> **JEE trap:** Truth table with 3 inputs - carefully check all combinations!

> **⚠ Trap #2: De Morgan's Law Errors**
>
> **Wrong:** $\overline{A + B} = \overline{A} + \overline{B}$
>
> **Correct:** $\overline{A + B} = \overline{A} \cdot \overline{B}$
>
> **Remember:** Break bar + Change operator!
>
> **Common mistake:** Forgetting to change + to · (or vice versa)
>
> **Check yourself:** NAND ≠ OR with inverted inputs!

> **⚠ Trap #3: XOR vs OR Confusion**
>
> **Wrong:** “XOR gives 1 if both inputs are 1”
>
> **Correct:**
>
> - **OR:** 1 if **at least one** is 1 (inclusive OR)

> - **XOR:** 1 if **exactly one** is 1 (exclusive OR)

> - **XOR(1,1) = 0** ← Key difference!
>
> **Think:** XOR = “one or the other, **but not both**”
>
> **JEE loves asking:** “Difference between OR and XOR?” → The (1,1) case!

> **⚠ Trap #4: NOT Gate Symbol**
>
> **Wrong:** Forgetting the bubble means NOT
>
> **Correct:**
>
> - Small circle (○) on gate output = NOT operation

> - NAND = AND + bubble

> - NOR = OR + bubble

> - Bubble on input = that input is inverted
>
> **Symbol reading:**
>
> 1. Identify base gate (AND/OR shape)

> 2. Check for bubble(s)

> 3. Bubble = inversion

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> Write the truth table for a 2-input NAND gate.
>
> **Solution:**
>
> | A | B | AB | Y = $\overline{AB}$ |

> | --- | --- | --- | --- |

> | 0 | 0 | 0 | 1 |

> | 0 | 1 | 0 | 1 |

> | 1 | 0 | 0 | 1 |

> | 1 | 1 | 1 | 0 |
>
> **Pattern:** Output 0 **only** when both inputs 1
>
> **Answer:** See table above

> **↗ Connection · Problem 1.2**
>
> How can you create a NOT gate using a 2-input NAND gate?
>
> **Solution:**
>
> Connect **both inputs together:**
>
> $$Y = \overline{A \cdot A} = \overline{A}$$
>
> **Circuit:**
>
> ```fallback

> ——|    \

> A   —| &  |○—— Y = Ā

>     ——|    /

> ```
>
> **Truth table check:**
>
> - A = 0 → Y = $\overline{0 \cdot 0}$ = $\overline{0}$ = 1 ✓

> - A = 1 → Y = $\overline{1 \cdot 1}$ = $\overline{1}$ = 0 ✓
>
> **Answer:** Tie both NAND inputs to same signal
>
> **Insight:** This is how NOT gates are made in real ICs!

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Simplify: $Y = A\overline{B} + AB$
>
> **Solution:**
>
> **Method 1 - Factoring:**
>
> $$Y = A\overline{B} + AB$$

$$Y = A(\overline{B} + B)$$

$$Y = A \cdot 1$$
>
> (since $\overline{B} + B = 1$)
>
> $$Y = A$$
>
> **Method 2 - Absorption law:**
>
> $$Y = A(\overline{B} + B) = A$$
>
> **Answer:** $Y = A$
>
> **Insight:** The B term completely disappears! Output depends only on A.
>
> **Circuit:** Just a wire (or buffer)!

> **↗ Connection · Problem 2.2**
>
> Apply De Morgan’s theorem to: $Y = \overline{A + BC}$
>
> **Solution:**
>
> **Step 1:** Apply De Morgan’s:
>
> $$Y = \overline{A + BC} = \overline{A} \cdot \overline{BC}$$
>
> **Step 2:** Apply De Morgan’s again to $\overline{BC}$:
>
> $$\overline{BC} = \overline{B} + \overline{C}$$
>
> **Final result:**
>
> $$\boxed{Y = \overline{A}(\overline{B} + \overline{C})}$$
>
> **Or expanded:**
>
> $$Y = \overline{A}\,\overline{B} + \overline{A}\,\overline{C}$$
>
> **Answer:** $Y = \overline{A}(\overline{B} + \overline{C})$
>
> **Gate count:**
>
> - Original: 1 AND + 1 OR + 1 NOT = 3 gates

> - Simplified: 3 NOT + 1 OR + 1 AND = 5 gates

> - (But sometimes NAND/NOR form is preferred in IC design!)

> **↗ Connection · Problem 2.3**
>
> Design a 2-input XOR gate using only NAND gates.
>
> **Solution:**
>
> **XOR Boolean expression:**
>
> $$Y = A \oplus B = A\overline{B} + \overline{A}B$$
>
> **Using NAND:**
>
> **Step 1:** Create $\overline{AB}$ (direct NAND)
>
> **Step 2:** Create $A\overline{AB}$ and $B\overline{AB}$
>
> **Step 3:** NAND the results
>
> **Simplified circuit:** **4 NAND gates needed**
>
> ```fallback

> A ——NAND₁—┐

> B ——      |—NAND₃—┐

>             ↓      |

> A ——      NAND₁—NAND₄—— Y

> B ——NAND₂—┘

> ```
>
> **Truth table verification:**
>
> | A | B | Y |

> | --- | --- | --- |

> | 0 | 0 | 0 |

> | 0 | 1 | 1 |

> | 1 | 0 | 1 |

> | 1 | 1 | 0 |
>
> **Answer:** 4 NAND gates in specific configuration
>
> **Insight:** XOR is more complex than AND/OR - needs multiple gates!

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> Prove that NAND is a universal gate by creating AND, OR, and NOT gates from NAND.
>
> **Solution:**
>
> **(1) NOT from NAND:**
>
> Inputs tied together:
>
> $$Y = \overline{A \cdot A} = \overline{A}$$
>
> ✓
>
> **(2) AND from NAND:**
>
> NAND + NOT:
>
> $$Y = \overline{\overline{A \cdot B}} = AB$$
>
> ✓
>
> Circuit: NAND gate followed by NOT (made from NAND with tied inputs)
>
> **(3) OR from NAND:**
>
> Using De Morgan’s: $A + B = \overline{\overline{A} \cdot \overline{B}}$
>
> **Step 1:** Create $\overline{A}$ and $\overline{B}$ (NAND with tied inputs)
>
> **Step 2:** NAND them: $\overline{\overline{A} \cdot \overline{B}} = A + B$ ✓
>
> **Proved!** All three basic gates can be made from NAND.
>
> Since AND, OR, NOT are complete set → **NAND is universal**!
>
> **Why it matters:** Real IC chips often use only NAND gates for entire design!

> **↗ Connection · Problem 3.2**
>
> A full adder has inputs A=1, B=1, $C_{in}$=1. Find Sum and Carry outputs.
>
> **Solution:**
>
> **Full adder equations:**
>
> $$S = A \oplus B \oplus C_{in}$$

$$C_{out} = AB + BC_{in} + AC_{in}$$
>
> **Given:** A=1, B=1, $C_{in}$=1
>
> **Sum:**
>
> $$S = 1 \oplus 1 \oplus 1$$

$$= 0 \oplus 1$$
>
> (since $1 \oplus 1 = 0$)
>
> $$= 1$$
>
> **Carry:**
>
> $$C_{out} = (1)(1) + (1)(1) + (1)(1)$$

$$= 1 + 1 + 1 = 1$$
>
> (in Boolean, $1+1 = 1$)
>
> **Binary interpretation:**
>
> $$1 + 1 + 1 = 11_2$$
>
> - Sum bit = 1 (LSB)

> - Carry bit = 1 (MSB)
>
> **Answer:** S = 1, $C_{out}$ = 1
>
> **This represents:** 1+1+1 = 3 (decimal) = 11 (binary)

---

## Quick Revision Box

| Gate | Symbol | Boolean | Output = 1 when |
| --- | --- | --- | --- |
| NOT | $\overline{A}$ | $\overline{A}$ | Input is 0 |
| AND | $AB$ | $A \cdot B$ | **All** inputs are 1 |
| OR | $A+B$ | $A + B$ | **Any** input is 1 |
| NAND | $\overline{AB}$ | $\overline{A \cdot B}$ | **Not all** inputs are 1 |
| NOR | $\overline{A+B}$ | $\overline{A + B}$ | **All** inputs are 0 |
| XOR | $A \oplus B$ | $A\overline{B}+\overline{A}B$ | Inputs are **different** |
| XNOR | $\overline{A \oplus B}$ | $AB+\overline{A}\,\overline{B}$ | Inputs are **same** |

**De Morgan’s:** $\overline{A+B} = \overline{A} \cdot \overline{B}$, $\overline{AB} = \overline{A} + \overline{B}$

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Truth tables** - Given gate, write truth table (or vice versa)
>
>    - Know all 7 gates by heart!

>    - Especially AND, OR, NAND, NOR, XOR

> 2. **Boolean simplification** - Reduce expressions
>
>    - Identity, null, complement laws

>    - Absorption: $A + AB = A$

>    - **De Morgan’s** - appears every year!

> 3. **De Morgan’s theorem** - Most important!
>
>    - $\overline{A+B} = \overline{A} \cdot \overline{B}$

>    - $\overline{AB} = \overline{A} + \overline{B}$

>    - Can convert NAND ↔ NOR

> 4. **Universal gates** - NAND and NOR
>
>    - Creating other gates from NAND

>    - Creating other gates from NOR

>    - Why universal? (Can create NOT, AND, OR)

> 5. **XOR properties:**
>
>    - $A \oplus 0 = A$

>    - $A \oplus 1 = \overline{A}$

>    - $A \oplus A = 0$

>    - $A \oplus \overline{A} = 1$

>    - Commutative, associative

> 6. **Combinational circuits:**
>
>    - Half adder (1 XOR + 1 AND)

>    - Full adder (2 XOR + 2 AND + 1 OR)

>    - Gate count minimization
>
> **Time-saving tricks:**
>
> - NAND = NOT(AND) - flip AND’s outputs

> - NOR = NOT(OR) - flip OR’s outputs

> - For XOR: Count 1s in inputs - if odd → output 1

> - De Morgan’s: “Break bar, change operator”

---

## Related Topics

### Within Electronic Devices

- [Transistor](../transistor/index.md) - Building blocks of gates
- [Diode](../diode-rectifier/index.md) - Diode logic gates (older tech)

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) - Circuit analysis
- [Electrostatics](../../electrostatics/index.md) - Voltage concepts

### Real-world Applications

- **Processors** - Billions of logic gates (ALU, control unit)
- **Memory** - NAND/NOR flash, RAM
- **Calculators** - Adders, comparators
- **Digital watches** - Counters, decoders
- **Smartphones** - Everything digital!
- **Internet routers** - Packet processing logic

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Three fundamental operations: NOT, AND, OR**
>
>    - All digital logic built from these

>    - Combined to create seven basic gates

> 2. **Truth tables define gate behavior:**
>
>    - AND: Output 1 only if **all** inputs 1

>    - OR: Output 1 if **any** input 1

>    - XOR: Output 1 if inputs **different**

>    - NAND/NOR: Inverses of AND/OR

>    - XNOR: Inverse of XOR (equality check)

> 3. **NAND and NOR are universal gates**
>
>    - Can create any other gate from them

>    - Entire processors built using just NAND gates!

>    - Cheaper to manufacture (one type of gate)

> 4. **De Morgan’s theorems are crucial:**
>
>    - $\overline{A+B} = \overline{A} \cdot \overline{B}$

>    - $\overline{AB} = \overline{A} + \overline{B}$

>    - Enables gate conversion and circuit simplification

> 5. **Boolean algebra simplifies circuits**
>
>    - Fewer gates = faster, cheaper, less power

>    - Modern chips: billions of optimized gates

> 6. **From gates to intelligence:**
>
>    - Gates → Adders → ALU → Processor

>    - Billions working together → AI, internet, smartphones

>    - All from simple ON/OFF switches!
>
> **“Seven simple gates combining in billions - creating the digital revolution that runs our world, from calculators to AI!”**

---

From TestGuru · our mock-test platform

## You've read Basic Logic Gates and Truth Tables.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electronic-devices&tg_exam=jee-main&tg_page=%2Fphysics%2Felectronic-devices%2Flogic-gates%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electronic-devices/logic-gates/",this.page.identifier="/physics/electronic-devices/logic-gates/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="logicGates" id="anim-logicGates-1795396423345017410"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-logicGates-1795396423345017410")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electronic-devices/logic-gates/](https://jeenotes.in/physics/electronic-devices/logic-gates/) · raw HTML: `offline/physics/electronic-devices/logic-gates/index.html`_
