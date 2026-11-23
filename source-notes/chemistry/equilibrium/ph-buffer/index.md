---
title: "pH Scale and Buffer Solutions: Henderson-Hasselbalch Equation"
source: "https://jeenotes.in/chemistry/equilibrium/ph-buffer/"
description: "Master pH calculations, buffer solutions, Henderson-Hasselbalch equation, and buffer capacity for JEE Chemistry equilibrium."
updated: "2026-11-17"
reading_time: "15 min read"
breadcrumb: "Chemistry"
position: "/ Topic 5 of 8"
html: "../../../../offline/chemistry/equilibrium/ph-buffer/index.html"
extracted: "2026-11-23"
---

> Master pH calculations, buffer solutions, Henderson-Hasselbalch equation, and buffer capacity for JEE Chemistry equilibrium.

## The Hook: Why Doesn’t Your Blood pH Change When You Drink Lemon Juice?

> **★ Key point · Connect: Real Life → Chemistry**
>
> Your blood pH stays rock-solid at 7.35-7.45, whether you eat acidic lemons (pH ~2) or alkaline spinach (pH ~8). Deviate by just 0.4 units, and you could die! The secret? **Buffer systems**—the body’s shock absorbers for pH.
>
> Similarly:
>
> - **Swimming pool water** needs buffers to resist pH changes from chlorine

> - **Shampoo pH ~5.5** matches your scalp (too basic = dry hair!)

> - **Ocean pH ~8.1** is buffered by carbonate system (climate change threatens this!)
>
> **Real-world question:** How do chemists design solutions that refuse to change pH?
>
> **JEE Reality:** pH and buffers appear in 3-5 questions every year. Master the Henderson-Hasselbalch equation, and you’ll breeze through these high-scoring numericals!

---

## The Core Concept

### The pH Scale

**pH** is a measure of hydrogen ion concentration in solution.

$$\boxed{pH = -\log[H^+]}$$

**Alternative definition (using hydronium ion):**

$$pH = -\log[H_3O^+]$$

**In simple terms:** pH is the negative power of 10 for H⁺ concentration.

If [H⁺] = 10⁻⁷ M → pH = 7
If [H⁺] = 10⁻³ M → pH = 3

### The pOH Scale

Similarly, for hydroxide ions:

$$\boxed{pOH = -\log[OH^-]}$$

### Relationship Between pH and pOH

From the ionic product of water:

$$K_w = [H^+][OH^-] = 1.0 \times 10^{-14} \text{ at 25°C}$$

Taking negative logarithm:

$$\boxed{pH + pOH = 14}$$

(at 25°C)

### The pH Range

| pH | [H⁺] | [OH⁻] | Nature |
| --- | --- | --- | --- |
| 0 | 10⁰ = 1 M | 10⁻¹⁴ M | Very acidic |
| 1 | 10⁻¹ M | 10⁻¹³ M | Strongly acidic |
| 3 | 10⁻³ M | 10⁻¹¹ M | Acidic |
| 7 | 10⁻⁷ M | 10⁻⁷ M | Neutral |
| 10 | 10⁻¹⁰ M | 10⁻⁴ M | Basic |
| 13 | 10⁻¹³ M | 10⁻¹ M | Strongly basic |
| 14 | 10⁻¹⁴ M | 10⁰ = 1 M | Very basic |

### Interactive Demo: Visualize the pH Scale

Explore how hydrogen ion concentration relates to pH. See the color changes of indicators across the pH range.

> **◐ In simple terms · Why Negative Logarithm?**
>
> **Historical reason:** Makes the scale more convenient
>
> - [H⁺] ranges from 1 M to 10⁻¹⁴ M (huge range!)

> - pH ranges from 0 to 14 (manageable scale)
>
> **Mathematical convenience:** Lower pH = More acidic (intuitive)

---

## Calculating pH of Strong Acids and Bases

### Strong Acids

Strong acids **completely ionize**: α = 1

$$HCl \xrightarrow{100\%} H^+ + Cl^-$$

**For monoprotic strong acid:**

$$\boxed{[H^+] = C_{acid}}$$

$$\boxed{pH = -\log C_{acid}}$$

**Example:** 0.01 M HCl

- [H⁺] = 0.01 M = 10⁻² M
- pH = -log(10⁻²) = 2

**For diprotic strong acid (like H₂SO₄):**

$$H_2SO_4 \rightarrow 2H^+ + SO_4^{2-}$$

$$[H^+] = 2 \times C_{acid}$$

### Strong Bases

Strong bases **completely ionize**: α = 1

$$NaOH \xrightarrow{100\%} Na^+ + OH^-$$

**For strong base:**

$$\boxed{[OH^-] = C_{base}}$$

$$\boxed{pOH = -\log C_{base}}$$

$$\boxed{pH = 14 - pOH}$$

**Example:** 0.01 M NaOH

- [OH⁻] = 0.01 M = 10⁻² M
- pOH = 2
- pH = 14 - 2 = 12

---

## Calculating pH of Weak Acids

Weak acids **partially ionize**: α « 1

$$HA \rightleftharpoons H^+ + A^-$$

### Using Ka

From [ionic equilibrium](../index.md):

$$[H^+] = \sqrt{K_a \cdot C}$$

(when α « 1)

$$\boxed{pH = \frac{1}{2}(pK_a - \log C)}$$

**Derivation:**

$$[H^+] = \sqrt{K_a \cdot C}$$

Taking log:

$$\log[H^+] = \frac{1}{2}(\log K_a + \log C)$$

$$-\log[H^+] = -\frac{1}{2}(\log K_a + \log C)$$

$$pH = \frac{1}{2}(-\log K_a - \log C)$$

$$\boxed{pH = \frac{1}{2}(pK_a - \log C)}$$

**Example:** 0.1 M CH₃COOH (Ka = 1.8×10⁻⁵, pKa = 4.74)

$$pH = \frac{1}{2}(4.74 - \log 0.1) = \frac{1}{2}(4.74 + 1) = \frac{5.74}{2} = 2.87$$

---

## Calculating pH of Weak Bases

Weak bases **partially ionize**: α « 1

$$BOH \rightleftharpoons B^+ + OH^-$$

### Using Kb

$$[OH^-] = \sqrt{K_b \cdot C}$$

$$\boxed{pOH = \frac{1}{2}(pK_b - \log C)}$$

$$\boxed{pH = 14 - pOH}$$

**Example:** 0.1 M NH₄OH (Kb = 1.8×10⁻⁵, pKb = 4.74)

$$pOH = \frac{1}{2}(4.74 - \log 0.1) = 2.87$$

$$pH = 14 - 2.87 = 11.13$$

---

## pH of Salt Solutions (Hydrolysis)

When a salt dissolves, its ions may react with water (hydrolysis), making the solution acidic, basic, or neutral depending on the strengths of the parent acid and base.

| Salt Type | Example | Nature | pH |
| --- | --- | --- | --- |
| Strong acid + Strong base | NaCl | Neutral (no hydrolysis) | 7 |
| Strong acid + Weak base | NH₄Cl | Acidic (cation hydrolysis) | < 7 |
| Weak acid + Strong base | CH₃COONa | Basic (anion hydrolysis) | > 7 |
| Weak acid + Weak base | CH₃COONH₄ | Depends on $K_a$ vs $K_b$ | ≈ 7 if $K_a = K_b$ |

> **★ Key point · Quick Rule**
>
> The ion of the **weaker** parent wins: a salt of a weak acid + strong base is basic; a salt of a strong acid + weak base is acidic.

---

## Buffer Solutions: The pH Guardians

### What is a Buffer?

**Buffer solution:** A solution that resists changes in pH upon addition of small amounts of acid or base.

**How it works:** Contains both:

1. **Weak acid** (to neutralize added base)
2. **Conjugate base** (to neutralize added acid)

Or:

1. **Weak base** (to neutralize added acid)
2. **Conjugate acid** (to neutralize added base)

### Types of Buffers

#### 1. Acidic Buffer (pH < 7)

**Composition:** Weak acid + Salt of weak acid with strong base

**Example:** CH₃COOH + CH₃COONa (acetic acid + sodium acetate)

$$CH_3COOH \rightleftharpoons H^+ + CH_3COO^-$$

$$CH_3COONa \xrightarrow{100\%} CH_3COO^- + Na^+$$

**When acid (H⁺) is added:**

$$CH_3COO^- + H^+ \rightarrow CH_3COOH$$

(Conjugate base neutralizes H⁺)

**When base (OH⁻) is added:**

$$CH_3COOH + OH^- \rightarrow CH_3COO^- + H_2O$$

(Weak acid neutralizes OH⁻)

#### 2. Basic Buffer (pH > 7)

**Composition:** Weak base + Salt of weak base with strong acid

**Example:** NH₄OH + NH₄Cl (ammonium hydroxide + ammonium chloride)

$$NH_4OH \rightleftharpoons NH_4^+ + OH^-$$

$$NH_4Cl \xrightarrow{100\%} NH_4^+ + Cl^-$$

**When acid (H⁺) is added:**

$$NH_4OH + H^+ \rightarrow NH_4^+ + H_2O$$

(Weak base neutralizes H⁺)

**When base (OH⁻) is added:**

$$NH_4^+ + OH^- \rightarrow NH_4OH$$

(Conjugate acid neutralizes OH⁻)

---

## Henderson-Hasselbalch Equation: The Buffer Formula

### For Acidic Buffer

$$\boxed{pH = pK_a + \log\frac{[\text{salt}]}{[\text{acid}]}}$$

Or more generally:

$$\boxed{pH = pK_a + \log\frac{[\text{conjugate base}]}{[\text{weak acid}]}}$$

**In terms of A⁻ and HA:**

$$\boxed{pH = pK_a + \log\frac{[A^-]}{[HA]}}$$

### For Basic Buffer

$$\boxed{pOH = pK_b + \log\frac{[\text{salt}]}{[\text{base}]}}$$

$$\boxed{pH = 14 - pOH}$$

Or more generally:

$$\boxed{pOH = pK_b + \log\frac{[\text{conjugate acid}]}{[\text{weak base}]}}$$

### Derivation of Henderson-Hasselbalch

For weak acid equilibrium:

$$K_a = \frac{[H^+][A^-]}{[HA]}$$

$$[H^+] = K_a \times \frac{[HA]}{[A^-]}$$

Taking negative logarithm:

$$-\log[H^+] = -\log K_a - \log\frac{[HA]}{[A^-]}$$

$$pH = pK_a - \log\frac{[HA]}{[A^-]}$$

$$\boxed{pH = pK_a + \log\frac{[A^-]}{[HA]}}$$

> **★ Key point · JEE Gold Formula**
>
> **Henderson-Hasselbalch is the most important buffer equation!**
>
> **For acidic buffer:**
>
> $$pH = pK_a + \log\frac{[\text{Salt}]}{[\text{Acid}]}$$
>
> **Special case:** When [Salt] = [Acid]
>
> $$pH = pK_a + \log(1) = pK_a + 0 = pK_a$$
>
> **Maximum buffer capacity when pH = pKa!**

---

## Buffer Capacity

**Buffer capacity (β):** The amount of acid or base a buffer can neutralize before significant pH change occurs.

$$\beta = \frac{\text{Amount of acid/base added}}{\text{Change in pH}}$$

### Factors Affecting Buffer Capacity

1. **Concentration of components**

   - Higher concentrations → Greater capacity
   - 1 M buffer > 0.1 M buffer (same ratio)
2. **Ratio of [Salt]/[Acid]**

   - **Maximum capacity when ratio = 1** (equal concentrations)
   - When [Salt] = [Acid], pH = pKa
   - Effective range: 0.1 < [Salt]/[Acid] < 10
   - Effective pH range: **pKa ± 1**
3. **Nature of acid/base**

   - Polyprotic acids can have multiple buffer regions

### Buffer Range

**Effective buffer range:** pH = pKa ± 1

**Why?**

- If pH = pKa + 1: [Salt]/[Acid] = 10 (still reasonably balanced)
- If pH = pKa - 1: [Salt]/[Acid] = 0.1 (still reasonably balanced)
- Beyond this range: Buffer loses effectiveness

**Example:** Acetic acid buffer (pKa = 4.74)

- Effective range: pH 3.74 to 5.74

---

## Memory Tricks & Patterns

### Mnemonic for Henderson-Hasselbalch

**“pH Keeps Adding Logs of Salt/Acid”**

- **pH** = pH
- **Keeps** = K
- **Adding** = a (Ka)
- **Logs** = log
- **Salt/Acid** = [Salt]/[Acid]

→ pH = pKa + log([Salt]/[Acid])

### Pattern Recognition: pH Calculations

| Solution Type | pH Formula | Example |
| --- | --- | --- |
| Strong acid | $pH = -\log C$ | 0.01 M HCl → pH = 2 |
| Weak acid | $pH = \frac{1}{2}(pK_a - \log C)$ | 0.1 M CH₃COOH → pH = 2.87 |
| Strong base | $pH = 14 + \log C$ | 0.01 M NaOH → pH = 12 |
| Weak base | $pH = 14 - \frac{1}{2}(pK_b - \log C)$ | 0.1 M NH₃ → pH = 11.13 |
| Acidic buffer | $pH = pK_a + \log\frac{[Salt]}{[Acid]}$ | CH₃COOH/CH₃COONa |
| Basic buffer | $pH = 14 - (pK_b + \log\frac{[Salt]}{[Base]})$ | NH₃/NH₄Cl |

### Mnemonic for Buffer Effectiveness

**“Plus/Minus One from pKa, Buffer’s Having Fun”**

Effective buffer range: **pKa - 1 to pKa + 1**

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Using Wrong Concentrations in Henderson-Hasselbalch**
>
> **Wrong:** Mixing up initial concentrations with equilibrium concentrations
>
> **Correct:** For buffers (high [Salt] suppresses acid ionization), use **initial concentrations** directly in Henderson-Hasselbalch
>
> **Why?** Common ion effect ensures weak acid barely ionizes, so [HA]initial ≈ [HA]equilibrium
>
> **Example:** 0.1 M CH₃COOH + 0.15 M CH₃COONa
>
> $$pH = pK_a + \log\frac{0.15}{0.1}$$
>
> ✓ (Use these directly)

> **⚠ Trap #2: Forgetting to Account for Dilution**
>
> **Wrong:** Not adjusting volumes when mixing solutions
>
> **Correct:** When mixing, use **final concentrations** after dilution
>
> **Example:** Mix 50 mL of 0.2 M CH₃COOH with 50 mL of 0.2 M CH₃COONa
>
> Total volume = 100 mL
>
> Final [CH₃COOH] = (0.2 × 50)/100 = 0.1 M

> Final [CH₃COONa] = (0.2 × 50)/100 = 0.1 M
>
> $$pH = pK_a + \log\frac{0.1}{0.1} = pK_a$$
>
> ✓

> **⚠ Trap #3: Wrong pKa-pKb Relationship**
>
> **Common Error:** Using pKa of acid when you need pKb of conjugate base (or vice versa)
>
> **Correct:** For conjugate pairs:
>
> $$pK_a + pK_b = 14$$
>
> **Example:** Given pKa of NH₄⁺ = 9.26, find pKb of NH₃
>
> $$pK_b = 14 - 9.26 = 4.74$$
>
> ✓
>
> **JEE Tip:** They might give you pKa when you need pKb (or vice versa) to test if you know the relationship!

> **⚠ Trap #4: Confusing Buffer with Neutralization**
>
> **Buffer:** Weak acid + Its conjugate base (both present)

> **Neutralization:** Acid + Base react completely (one or both consumed)
>
> **Example:** CH₃COOH + NaOH
>
> - **If NaOH < CH₃COOH:** Buffer forms (excess acid remains)

> - **If NaOH = CH₃COOH:** Only salt (neutralization, NOT a buffer!)

> - **If NaOH > CH₃COOH:** Excess base (NOT a buffer!)
>
> **For buffer, you need BOTH components present!**

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic pH Calculation**
>
> Calculate pH of:
>
> 1. 0.001 M HCl

> 2. 0.01 M NaOH
>
> **Solution:**
>
> **1. 0.001 M HCl (strong acid)**
>
> $$[H^+] = 0.001 = 10^{-3} \text{ M}$$

$$pH = -\log(10^{-3}) = 3$$
>
> **2. 0.01 M NaOH (strong base)**
>
> $$[OH^-] = 0.01 = 10^{-2} \text{ M}$$

$$pOH = -\log(10^{-2}) = 2$$

$$pH = 14 - 2 = 12$$

> **↗ Connection · Problem 2: pH of Weak Acid**
>
> Calculate pH of 0.1 M acetic acid (CH₃COOH). Given: Ka = 1.8×10⁻⁵
>
> **Solution:**
>
> First, calculate pKa:
>
> $$pK_a = -\log(1.8 \times 10^{-5}) = 4.74$$
>
> Using weak acid formula:
>
> $$pH = \frac{1}{2}(pK_a - \log C) = \frac{1}{2}(4.74 - \log 0.1)$$

$$pH = \frac{1}{2}(4.74 - (-1)) = \frac{1}{2}(4.74 + 1) = \frac{5.74}{2}$$

$$pH = 2.87$$

> **↗ Connection · Problem 3: Simple Buffer pH**
>
> Calculate pH of a buffer containing 0.1 M CH₃COOH and 0.1 M CH₃COONa. (pKa = 4.74)
>
> **Solution:**
>
> Using Henderson-Hasselbalch:
>
> $$pH = pK_a + \log\frac{[\text{Salt}]}{[\text{Acid}]}$$

$$pH = 4.74 + \log\frac{0.1}{0.1} = 4.74 + \log(1) = 4.74 + 0$$

$$pH = 4.74$$
>
> **Key insight:** When [Salt] = [Acid], pH = pKa!

---

### Level 2: JEE Main

> **↗ Connection · Problem 4: Buffer pH with Different Concentrations**
>
> Calculate pH of a buffer solution containing 0.2 M CH₃COOH and 0.3 M CH₃COONa. (pKa of CH₃COOH = 4.74)
>
> **Solution:**
>
> $$pH = pK_a + \log\frac{[\text{Salt}]}{[\text{Acid}]} = 4.74 + \log\frac{0.3}{0.2}$$

$$pH = 4.74 + \log(1.5) = 4.74 + 0.176 = 4.92$$

> **↗ Connection · Problem 5: Buffer After Adding Acid**
>
> 1 L of buffer contains 0.1 M CH₃COOH and 0.1 M CH₃COONa (pKa = 4.74).
>
> If 0.01 mol HCl is added, what is the new pH?
>
> **Solution:**
>
> **Initial moles:**
>
> - CH₃COOH: 0.1 mol

> - CH₃COONa: 0.1 mol
>
> **After adding 0.01 mol HCl:**
>
> HCl reacts with acetate ion:
>
> $$H^+ + CH_3COO^- \rightarrow CH_3COOH$$
>
> - CH₃COO⁻ consumed: 0.01 mol → Remaining: 0.1 - 0.01 = 0.09 mol

> - CH₃COOH formed: 0.01 mol → New amount: 0.1 + 0.01 = 0.11 mol
>
> **New concentrations (volume still 1 L):**
>
> - [CH₃COOH] = 0.11 M

> - [CH₃COO⁻] = 0.09 M
>
> $$pH = 4.74 + \log\frac{0.09}{0.11} = 4.74 + \log(0.818)$$

$$pH = 4.74 + (-0.087) = 4.65$$
>
> **Change:** 4.74 → 4.65 (only 0.09 units!)
>
> **Compare:** If 0.01 M HCl added to pure water → pH = 2! Buffer works!

> **↗ Connection · Problem 6: Mixing to Form Buffer (JEE Main 2022 Type)**
>
> 50 mL of 0.2 M CH₃COOH is mixed with 50 mL of 0.1 M NaOH. Calculate pH of the resulting solution. (pKa = 4.74)
>
> **Solution:**
>
> **Initial moles:**
>
> - CH₃COOH: 0.2 × 0.05 = 0.01 mol

> - NaOH: 0.1 × 0.05 = 0.005 mol
>
> **Reaction:**
>
> $$CH_3COOH + NaOH \rightarrow CH_3COONa + H_2O$$
>
> NaOH is limiting (0.005 mol)
>
> **After reaction:**
>
> - CH₃COOH remaining: 0.01 - 0.005 = 0.005 mol

> - CH₃COONa formed: 0.005 mol

> - NaOH: 0 mol
>
> **This is a buffer!** (Weak acid + its conjugate base both present)
>
> Total volume = 100 mL = 0.1 L
>
> **Final concentrations:**
>
> - [CH₃COOH] = 0.005/0.1 = 0.05 M

> - [CH₃COONa] = 0.005/0.1 = 0.05 M
>
> $$pH = pK_a + \log\frac{0.05}{0.05} = 4.74 + 0 = 4.74$$

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Buffer Capacity Calculation (Advanced)**
>
> A buffer is prepared by mixing 0.5 M CH₃COOH and 0.5 M CH₃COONa. Another buffer is prepared with 0.05 M of each. Both have pH = 4.74.
>
> If 0.01 M HCl is added to 1 L of each buffer, calculate the pH change in both cases. (pKa = 4.74)
>
> **Solution:**
>
> **Buffer 1: 0.5 M each**
>
> Initial: pH = 4.74 (equal concentrations)
>
> After adding 0.01 mol HCl:
>
> - CH₃COOH: 0.5 + 0.01 = 0.51 M

> - CH₃COO⁻: 0.5 - 0.01 = 0.49 M
>
> $$pH = 4.74 + \log\frac{0.49}{0.51} = 4.74 + \log(0.961) = 4.74 - 0.017 = 4.72$$
>
> **Change: 0.02 units**
>
> **Buffer 2: 0.05 M each**
>
> After adding 0.01 mol HCl:
>
> - CH₃COOH: 0.05 + 0.01 = 0.06 M

> - CH₃COO⁻: 0.05 - 0.01 = 0.04 M
>
> $$pH = 4.74 + \log\frac{0.04}{0.06} = 4.74 + \log(0.667) = 4.74 - 0.176 = 4.56$$
>
> **Change: 0.18 units**
>
> **Conclusion:** Higher concentration buffer (Buffer 1) has **greater capacity** (smaller pH change)!

> **↗ Connection · Problem 8: Polyprotic Acid Buffer (Advanced)**
>
> Calculate pH of a buffer containing 0.1 M H₂PO₄⁻ and 0.15 M HPO₄²⁻.
>
> Given: For H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻, pKa₂ = 7.21
>
> **Solution:**
>
> This is an acidic buffer using the second ionization of phosphoric acid:
>
> - Weak acid: H₂PO₄⁻

> - Conjugate base: HPO₄²⁻
>
> Using Henderson-Hasselbalch:
>
> $$pH = pK_{a2} + \log\frac{[HPO_4^{2-}]}{[H_2PO_4^-]}$$

$$pH = 7.21 + \log\frac{0.15}{0.1} = 7.21 + \log(1.5)$$

$$pH = 7.21 + 0.176 = 7.39$$
>
> **JEE Insight:** This is similar to blood phosphate buffer system! pH ~7.4

> **↗ Connection · Problem 9: Real Blood Buffer System (JEE Advanced)**
>
> Blood pH is maintained by carbonic acid buffer:
>
> $$H_2CO_3 \rightleftharpoons H^+ + HCO_3^-$$
>
> Given: pKa = 6.1, [HCO₃⁻]/[H₂CO₃] = 20 in normal blood
>
> **Questions:**
>
> 1. Calculate normal blood pH

> 2. In acidosis, ratio becomes 10. What is new pH?

> 3. Why can we breathe out to increase pH?
>
> **Solution:**
>
> **1. Normal blood pH:**
>
> $$pH = pK_a + \log\frac{[HCO_3^-]}{[H_2CO_3]} = 6.1 + \log(20)$$

$$pH = 6.1 + 1.3 = 7.4$$
>
> ✓
>
> **2. During acidosis (ratio = 10):**
>
> $$pH = 6.1 + \log(10) = 6.1 + 1 = 7.1$$
>
> (Dangerous! Below 7.35 = acidosis)
>
> **3. Why breathing out increases pH:**
>
> $$CO_2 + H_2O \rightleftharpoons H_2CO_3 \rightleftharpoons H^+ + HCO_3^-$$
>
> - Exhaling removes CO₂

> - Equilibrium shifts **left** ([Le Chatelier](../le-chateliers-principle/index.md))

> - [H₂CO₃] decreases

> - Ratio [HCO₃⁻]/[H₂CO₃] **increases**

> - pH **increases**!
>
> **This is why hyperventilating can cause alkalosis (pH too high)!**
>
> **JEE Connection:** Biology meets chemistry—prepare for such interdisciplinary questions in JEE Advanced!

---

## Quick Revision Box

| Solution Type | pH Formula | Key Point |
| --- | --- | --- |
| Strong acid | $pH = -\log C$ | Complete ionization |
| Weak acid | $pH = \frac{1}{2}(pK_a - \log C)$ | Use when no salt present |
| Strong base | $pH = 14 + \log C$ | Complete ionization |
| Weak base | $pH = 14 - \frac{1}{2}(pK_b - \log C)$ | Use when no salt present |
| Acidic buffer | $pH = pK_a + \log\frac{[Salt]}{[Acid]}$ | Henderson-Hasselbalch |
| Basic buffer | $pOH = pK_b + \log\frac{[Salt]}{[Base]}$ | Then pH = 14 - pOH |

**Key Relationships:**

- pH + pOH = 14
- pKa + pKb = 14 (for conjugate pairs)
- Maximum buffer capacity: pH = pKa (when [Salt] = [Acid])
- Effective buffer range: pKa ± 1

---

## When to Use This

> **★ Key point · Decision Tree: pH Calculation Method**
>
> **Step 1: Identify the solution type**
>
> **Is it a strong acid/base?**
>
> - YES → Direct formula: pH = -log[H⁺] or pH = 14 + log[OH⁻]
>
> **Is it a weak acid/base alone?**
>
> - YES → Use Ka/Kb formula: pH = ½(pKa - logC)
>
> **Is it a mixture of weak acid + conjugate base (or weak base + conjugate acid)?**
>
> - YES → **Henderson-Hasselbalch equation**

> - Check: Both components present? → Buffer!
>
> **Are you mixing acid and base?**
>
> - Find limiting reagent

> - Determine what’s left after reaction

> - If both weak acid and conjugate base remain → Buffer (use Henderson-Hasselbalch)

> - If only one component left → Not a buffer (use Ka/Kb)

---

## Connection to Other Topics

pH and buffers connect to:

1. **[Ionic Equilibrium](../index.md)** - Foundation for Ka, Kb, and weak electrolytes
2. **[Acids and Bases](../index.md)** - Theoretical basis (Bronsted-Lowry conjugate pairs)
3. **[Chemical Equilibrium](../chemical-equilibrium/index.md)** - Uses same K, Q, Le Chatelier concepts
4. **[Solubility Product](../solubility-product/index.md)** - pH affects solubility of salts
5. **[Electrochemistry](../../redox-electrochemistry/index.md)** - Nernst equation uses pH
6. **[Organic Chemistry](../../organic-principles/index.md)** - Reaction conditions often require specific pH
7. **[Coordination Chemistry](../../coordination-compounds/index.md)** - Complex formation pH-dependent

---

## Biological Buffer Systems (JEE Advanced Special Topic)

### 1. Bicarbonate Buffer (Primary Blood Buffer)

$$CO_2 + H_2O \rightleftharpoons H_2CO_3 \rightleftharpoons H^+ + HCO_3^-$$

- **pKa = 6.1**
- **Normal ratio:** [HCO₃⁻]/[H₂CO₃] = 20:1
- **Normal pH:** 7.4

**Control mechanisms:**

- Lungs: Regulate CO₂ (respiratory control)
- Kidneys: Regulate HCO₃⁻ (metabolic control)

### 2. Phosphate Buffer

$$H_2PO_4^- \rightleftharpoons H^+ + HPO_4^{2-}$$

- **pKa = 7.21** (close to blood pH!)
- Important in intracellular fluid

### 3. Protein Buffer (Hemoglobin)

- Amino acids have both -COOH (acidic) and -NH₂ (basic) groups
- Act as zwitterions: H₃N⁺-CHR-COO⁻
- Can accept or donate H⁺

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **pH = -log[H⁺]** - The fundamental definition (memorize this!)

> 2. **pH + pOH = 14** - Valid at 25°C (use for base calculations)

> 3. **Henderson-Hasselbalch is gold** - pH = pKa + log([Salt]/[Acid])

> 4. **Buffer needs BOTH components** - Weak acid AND conjugate base (or vice versa)

> 5. **Maximum buffer capacity at pH = pKa** - When [Salt] = [Acid]
>
> **“A buffer is like a shock absorber for pH—it takes the hits from acids and bases so your solution doesn’t have to!”**
>
> **JEE Strategy:**
>
> - Henderson-Hasselbalch appears in 70% of buffer questions—master it!

> - Practice mixing problems (buffer formation from acid + base)

> - Buffer capacity questions are rising in JEE Advanced

> - Biological buffers (blood pH) are trendy—know carbonic acid system

> - Don’t forget: Use initial concentrations in Henderson-Hasselbalch for buffers

> - Link to real-world: Swimming pools, blood, ocean—buffers are everywhere!

---

## What’s Next?

You’ve mastered pH and buffers! Next, explore ionic equilibrium in heterogeneous systems:

- **[Solubility Product](../solubility-product/index.md)** - Ksp, common ion effect, and selective precipitation
- **[Chemical Kinetics](../../chemical-kinetics/index.md)** - Rate vs equilibrium (how fast vs how far)
- **[Electrochemistry](../../redox-electrochemistry/index.md)** - Nernst equation uses pH extensively

From TestGuru · our mock-test platform

## You've read pH Scale and Buffer Solutions: Henderson-Hasselbalch Equation.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=equilibrium&tg_exam=jee-main&tg_page=%2Fchemistry%2Fequilibrium%2Fph-buffer%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/equilibrium/ph-buffer/",this.page.identifier="/chemistry/equilibrium/ph-buffer/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="phIndicator" id="anim-phIndicator-1795396419623291953"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-phIndicator-1795396419623291953")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/equilibrium/ph-buffer/](https://jeenotes.in/chemistry/equilibrium/ph-buffer/) · raw HTML: `offline/chemistry/equilibrium/ph-buffer/index.html`_
