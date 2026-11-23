---
title: "Solubility Product (Ksp) and Common Ion Effect"
source: "https://jeenotes.in/chemistry/equilibrium/solubility-product/"
description: "Master solubility product constant Ksp, common ion effect, precipitation, and selective precipitation for JEE Chemistry equilibrium."
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Chemistry"
position: "/ Topic 6 of 8"
html: "../../../../offline/chemistry/equilibrium/solubility-product/index.html"
extracted: "2026-11-23"
---

> Master solubility product constant Ksp, common ion effect, precipitation, and selective precipitation for JEE Chemistry equilibrium.

## The Hook: Why Do Caves Have Stalactites?

> **★ Key point · Connect: Real Life → Chemistry**
>
> **Stalactites and stalagmites** in caves form because of solubility equilibrium! Water containing dissolved CaCO₃ drips from the ceiling. When CO₂ escapes, equilibrium shifts, and CaCO₃ precipitates—building these magnificent formations over thousands of years.
>
> **Other everyday examples:**
>
> - **Hard water:** CaCO₃ and Mg(OH)₂ precipitate in pipes (low solubility!)

> - **Kidney stones:** Calcium oxalate crystals form when Ksp is exceeded

> - **Toothpaste with fluoride:** CaF₂ precipitates on teeth, making them stronger

> - **Photography:** AgBr (low Ksp) was used in film
>
> **The question:** How do we predict when a solid will dissolve or precipitate?
>
> **JEE Reality:** Solubility product is a high-yield topic (2-4 questions/year). It’s the perfect blend of equilibrium, ionic chemistry, and mathematical calculations. Master Ksp, and qualitative analysis becomes easy!

---

## The Core Concept

### What is Solubility Product (Ksp)?

For a **sparingly soluble salt** (one that barely dissolves):

$$A_xB_y(s) \rightleftharpoons xA^{y+}(aq) + yB^{x-}(aq)$$

At equilibrium (saturated solution):

$$\boxed{K_{sp} = [A^{y+}]^x [B^{x-}]^y}$$

**Key points:**

1. **Solid is NOT included** in the expression (activity = 1)
2. Only applies to **saturated solutions** (solid in equilibrium with ions)
3. Ksp is temperature-dependent (like all K values)
4. Smaller Ksp → Lower solubility (harder to dissolve)

**In simple terms:** Ksp tells us how much of a solid can dissolve before it starts precipitating.

---

## Relationship Between Ksp and Solubility (S)

**Solubility (S):** Maximum amount of solute that dissolves in a given amount of solvent at a particular temperature.

Units: mol/L, g/L, or g/100g water

### Case 1: AB Type Salt

$$AB(s) \rightleftharpoons A^+(aq) + B^-(aq)$$

If S mol/L dissolves:

- [A⁺] = S
- [B⁻] = S

$$K_{sp} = [A^+][B^-] = S \times S$$

$$\boxed{K_{sp} = S^2}$$

$$\boxed{S = \sqrt{K_{sp}}}$$

**Examples:** AgCl, BaSO₄, PbSO₄

### Case 2: AB₂ Type Salt

$$AB_2(s) \rightleftharpoons A^{2+}(aq) + 2B^-(aq)$$

If S mol/L dissolves:

- [A²⁺] = S
- [B⁻] = 2S

$$K_{sp} = [A^{2+}][B^-]^2 = S \times (2S)^2 = 4S^3$$

$$\boxed{K_{sp} = 4S^3}$$

$$\boxed{S = \sqrt[3]{\frac{K_{sp}}{4}}}$$

**Examples:** CaF₂, PbCl₂, Mg(OH)₂

### Case 3: A₂B Type Salt

$$A_2B(s) \rightleftharpoons 2A^+(aq) + B^{2-}(aq)$$

If S mol/L dissolves:

- [A⁺] = 2S
- [B²⁻] = S

$$K_{sp} = [A^+]^2[B^{2-}] = (2S)^2 \times S = 4S^3$$

$$\boxed{K_{sp} = 4S^3}$$

**Examples:** Ag₂S, Ag₂CrO₄

### Case 4: A₂B₃ Type Salt

$$A_2B_3(s) \rightleftharpoons 2A^{3+}(aq) + 3B^{2-}(aq)$$

If S mol/L dissolves:

- [A³⁺] = 2S
- [B²⁻] = 3S

$$K_{sp} = [A^{3+}]^2[B^{2-}]^3 = (2S)^2 \times (3S)^3 = 4S^2 \times 27S^3$$

$$\boxed{K_{sp} = 108S^5}$$

$$\boxed{S = \sqrt[5]{\frac{K_{sp}}{108}}}$$

**Examples:** Al₂(SO₄)₃, Fe₂(SO₄)₃

---

## Memory Tricks & Patterns

### Mnemonic for Ksp-S Relationships

| Salt Type | Formula | Ksp-S Relation | Example |
| --- | --- | --- | --- |
| **AB** | 1:1 | $K_{sp} = S^2$ | AgCl |
| **AB₂** or **A₂B** | 1:2 or 2:1 | $K_{sp} = 4S^3$ | CaF₂, Ag₂S |
| **AB₃** or **A₃B** | 1:3 or 3:1 | $K_{sp} = 27S^4$ | AlF₃ |
| **A₂B₃** | 2:3 | $K_{sp} = 108S^5$ | Al₂(SO₄)₃ |

**Pattern Recognition:**

- Count total ions (x+y)
- Power of S = (x+y)
- Coefficient = Product of (coefficient × each ion)^(its power)

**Example:** AB₂ → Total ions = 1+2 = 3

- S³ term
- Coefficient: 1 × 2² = 4
- Ksp = 4S³

### Mnemonic for Precipitation Prediction

**“Quotient Questions Ksp: If Greater, Precipitate!”**

- **Q** (ionic product) vs **Ksp**
- If **Q > Ksp** → Precipitation occurs
- If **Q = Ksp** → Saturated (equilibrium)
- If **Q < Ksp** → Unsaturated (more can dissolve)

---

## Common Ion Effect on Solubility

**Common Ion Effect:** The solubility of a sparingly soluble salt **decreases** when a common ion is added.

### Why Does This Happen?

**[Le Chatelier’s Principle](../le-chateliers-principle/index.md)** in action!

$$AgCl(s) \rightleftharpoons Ag^+(aq) + Cl^-(aq)$$

Add NaCl (provides Cl⁻):

- [Cl⁻] increases
- Equilibrium shifts **left** (toward solid)
- [Ag⁺] decreases
- **Solubility decreases**

### Quantitative Treatment

For AgCl in pure water:

$$K_{sp} = S^2$$

$$S = \sqrt{K_{sp}}$$

For AgCl in 0.1 M NaCl:

Let solubility = s (much smaller than S)

- [Ag⁺] = s
- [Cl⁻] = 0.1 + s ≈ 0.1 (since s « 0.1)

$$K_{sp} = [Ag^+][Cl^-] = s \times 0.1$$

$$s = \frac{K_{sp}}{0.1}$$

Since Ksp is constant, s « S

**Solubility in presence of common ion is much lower!**

---

## Ionic Product (Q) vs Ksp

**Ionic Product (Q):** Same expression as Ksp but for **non-equilibrium** conditions.

$$Q = [A^{y+}]^x [B^{x-}]^y$$

(at any instant)

### Decision Tree: Will Precipitation Occur?

| Comparison | Meaning | Result |
| --- | --- | --- |
| **Q < Ksp** | Solution is unsaturated | No precipitation, more can dissolve |
| **Q = Ksp** | Solution is saturated | At equilibrium, no net change |
| **Q > Ksp** | Solution is supersaturated | Precipitation occurs until Q = Ksp |

> **★ Key point · JEE Gold Strategy**
>
> **Precipitation questions always use Q vs Ksp comparison!**
>
> **Steps:**
>
> 1. Calculate Q from given ion concentrations

> 2. Compare Q with Ksp

> 3. If Q > Ksp → Precipitation occurs

> 4. If Q < Ksp → No precipitation
>
> **Example:** Will AgCl precipitate if [Ag⁺] = 10⁻⁴ M and [Cl⁻] = 10⁻⁶ M?
>
> Given: Ksp(AgCl) = 1.8×10⁻¹⁰
>
> Q = [Ag⁺][Cl⁻] = (10⁻⁴)(10⁻⁶) = 10⁻¹⁰
>
> Q = 10⁻¹⁰ > Ksp = 1.8×10⁻¹⁰?
>
> Actually, 10⁻¹⁰ < 1.8×10⁻¹⁰
>
> **No precipitation!** (Q < Ksp)

---

## Selective Precipitation

**Concept:** Using differences in Ksp to separate ions by **sequential precipitation**.

### How It Works

If a solution contains multiple cations (like Ag⁺ and Pb²⁺), add an anion (like Cl⁻) slowly:

- The salt with **lower Ksp precipitates first**
- Continue adding until that ion is essentially removed
- Then the second salt starts precipitating

### Example: Separating Ag⁺ and Pb²⁺

Solution contains: 0.01 M Ag⁺ and 0.01 M Pb²⁺

Given:

- Ksp(AgCl) = 1.8×10⁻¹⁰
- Ksp(PbCl₂) = 1.7×10⁻⁵

Add Cl⁻ slowly:

**For AgCl to precipitate:**

$$[Cl^-] = \frac{K_{sp}}{[Ag^+]} = \frac{1.8 \times 10^{-10}}{0.01} = 1.8 \times 10^{-8} \text{ M}$$

**For PbCl₂ to precipitate:**

$$[Cl^-]^2 = \frac{K_{sp}}{[Pb^{2+}]} = \frac{1.7 \times 10^{-5}}{0.01} = 1.7 \times 10^{-3}$$

$$[Cl^-] = \sqrt{1.7 \times 10^{-3}} = 4.1 \times 10^{-2} \text{ M}$$

**Result:**

- AgCl precipitates first (needs only 1.8×10⁻⁸ M Cl⁻)
- PbCl₂ precipitates much later (needs 4.1×10⁻² M Cl⁻)
- Excellent separation possible!

---

## Effect of pH on Solubility

For salts containing **basic anions** (like OH⁻, S²⁻, CO₃²⁻, PO₄³⁻), pH affects solubility.

### Example: Mg(OH)₂

$$Mg(OH)_2(s) \rightleftharpoons Mg^{2+}(aq) + 2OH^-(aq)$$

$$K_{sp} = [Mg^{2+}][OH^-]^2$$

**Effect of adding acid (lowering pH):**

- Acid neutralizes OH⁻: H⁺ + OH⁻ → H₂O
- [OH⁻] decreases
- Equilibrium shifts **right** to replace OH⁻
- More Mg(OH)₂ dissolves
- **Solubility increases**

**Effect of adding base (increasing pH):**

- [OH⁻] increases (common ion effect)
- Equilibrium shifts **left**
- **Solubility decreases**

### Metal Sulfides: Qualitative Analysis

Metal sulfides (like CuS, ZnS, FeS) have different Ksp values and dissolve at different pH:

$$MS \rightleftharpoons M^{2+} + S^{2-}$$

In acidic solution:

$$S^{2-} + H^+ \rightarrow HS^-$$

$$HS^- + H^+ \rightarrow H_2S$$

- Acid removes S²⁻
- Shifts equilibrium right
- More sulfide dissolves

**JEE Application:** Group analysis in qualitative analysis uses this!

- Group II (CuS, PbS): Precipitate even in acidic medium (very low Ksp)
- Group IV (ZnS, MnS): Precipitate only in basic medium (higher Ksp)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Wrong Ksp-S Relationship**
>
> **Common Error:** Using $S = \sqrt{K_{sp}}$ for all salts
>
> **Correct:** Relationship depends on salt type!
>
> | Salt Type | Correct Formula |

> | --- | --- |

> | AB | $S = \sqrt{K_{sp}}$ |

> | AB₂ or A₂B | $S = \sqrt[3]{K_{sp}/4}$ |

> | A₂B₃ | $S = \sqrt[5]{K_{sp}/108}$ |
>
> **JEE Trap:** Mixing up AB₂ and A₂B (both give 4S³ but different examples!)

> **⚠ Trap #2: Ignoring Common Ion**
>
> **Wrong:** Calculating solubility of AgCl in NaCl solution using $S = \sqrt{K_{sp}}$
>
> **Correct:** Account for Cl⁻ from NaCl!
>
> For AgCl in 0.1 M NaCl:
>
> - [Cl⁻] = 0.1 + s ≈ 0.1 (common ion dominates)

> - $K_{sp} = s \times 0.1$

> - $s = K_{sp}/0.1$
>
> **Always check if a common ion is present!**

> **⚠ Trap #3: Q vs Ksp Direction**
>
> **Common Error:** “Q > Ksp means more will dissolve”
>
> **Correct:** Q > Ksp means **precipitation occurs** (solution is supersaturated)
>
> **Memory:** “Q questions Ksp. If Q is greater, solid gets heavier (precipitates)!”

> **⚠ Trap #4: Forgetting Stoichiometry in Q**
>
> **Wrong:** For PbCl₂, writing Q = [Pb²⁺][Cl⁻]
>
> **Correct:** Q = [Pb²⁺][Cl⁻]²
>
> **Rule:** Always raise concentrations to their stoichiometric coefficients!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic Ksp Calculation**
>
> The solubility of AgCl in water is 1.3×10⁻⁵ M. Calculate Ksp.
>
> **Solution:**
>
> AgCl is AB type: $AgCl \rightleftharpoons Ag^+ + Cl^-$
>
> If S = 1.3×10⁻⁵ M:
>
> - [Ag⁺] = 1.3×10⁻⁵ M

> - [Cl⁻] = 1.3×10⁻⁵ M
>
> $$K_{sp} = [Ag^+][Cl^-] = S^2$$

$$K_{sp} = (1.3 \times 10^{-5})^2 = 1.69 \times 10^{-10}$$

> **↗ Connection · Problem 2: Solubility from Ksp**
>
> Ksp of BaSO₄ is 1.0×10⁻¹⁰. Calculate its solubility in mol/L.
>
> **Solution:**
>
> BaSO₄ is AB type: $BaSO_4 \rightleftharpoons Ba^{2+} + SO_4^{2-}$
>
> $$K_{sp} = S^2$$

$$S = \sqrt{K_{sp}} = \sqrt{1.0 \times 10^{-10}}$$

$$S = 1.0 \times 10^{-5} \text{ mol/L}$$

> **↗ Connection · Problem 3: Will Precipitation Occur?**
>
> Will AgCl precipitate when 100 mL of 10⁻⁴ M AgNO₃ is mixed with 100 mL of 10⁻⁴ M NaCl?
>
> Given: Ksp(AgCl) = 1.8×10⁻¹⁰
>
> **Solution:**
>
> **After mixing (dilution):**

> Total volume = 200 mL
>
> $$[Ag^+] = \frac{10^{-4} \times 100}{200} = 5 \times 10^{-5} \text{ M}$$

$$[Cl^-] = \frac{10^{-4} \times 100}{200} = 5 \times 10^{-5} \text{ M}$$
>
> **Calculate Q:**
>
> $$Q = [Ag^+][Cl^-] = (5 \times 10^{-5})(5 \times 10^{-5}) = 25 \times 10^{-10} = 2.5 \times 10^{-9}$$
>
> **Compare:**

> Q = 2.5×10⁻⁹ > Ksp = 1.8×10⁻¹⁰
>
> **Answer: YES, precipitation will occur!** (Q > Ksp)

---

### Level 2: JEE Main

> **↗ Connection · Problem 4: AB₂ Type Salt**
>
> Calculate the solubility of CaF₂ in water. Given: Ksp = 3.2×10⁻¹¹
>
> **Solution:**
>
> CaF₂ is AB₂ type: $CaF_2 \rightleftharpoons Ca^{2+} + 2F^-$
>
> If S mol/L dissolves:
>
> - [Ca²⁺] = S

> - [F⁻] = 2S
>
> $$K_{sp} = [Ca^{2+}][F^-]^2 = S(2S)^2 = 4S^3$$

$$S^3 = \frac{K_{sp}}{4} = \frac{3.2 \times 10^{-11}}{4} = 8 \times 10^{-12}$$

$$S = \sqrt[3]{8 \times 10^{-12}} = 2 \times 10^{-4} \text{ mol/L}$$

> **↗ Connection · Problem 5: Common Ion Effect (Quantitative)**
>
> Calculate the solubility of AgCl in:
>
> 1. Pure water

> 2. 0.01 M AgNO₃ solution
>
> Given: Ksp(AgCl) = 1.8×10⁻¹⁰
>
> **Solution:**
>
> **1. In pure water:**
>
> $$S_1 = \sqrt{K_{sp}} = \sqrt{1.8 \times 10^{-10}} = 1.34 \times 10^{-5} \text{ M}$$
>
> **2. In 0.01 M AgNO₃:**
>
> AgNO₃ provides Ag⁺ = 0.01 M (common ion)
>
> Let solubility = s (much smaller than 0.01)
>
> - [Ag⁺] = 0.01 + s ≈ 0.01 M

> - [Cl⁻] = s
>
> $$K_{sp} = [Ag^+][Cl^-] = 0.01 \times s$$

$$s = \frac{K_{sp}}{0.01} = \frac{1.8 \times 10^{-10}}{0.01} = 1.8 \times 10^{-8} \text{ M}$$
>
> **Comparison:**
>
> - In pure water: 1.34×10⁻⁵ M

> - In 0.01 M AgNO₃: 1.8×10⁻⁸ M
>
> **Solubility decreased by factor of ~740!** (Common ion effect)

### Interactive Demo: Visualize Equilibrium Constant and Solubility

Explore how Ksp affects solubility and observe the common ion effect in action.

> **↗ Connection · Problem 6: Selective Precipitation (JEE Main 2021 Type)**
>
> A solution contains 0.01 M each of Cl⁻ and CrO₄²⁻. Ag⁺ is added gradually. Which will precipitate first?
>
> Given:
>
> - Ksp(AgCl) = 1.8×10⁻¹⁰

> - Ksp(Ag₂CrO₄) = 1.9×10⁻¹²
>
> **Solution:**
>
> **For AgCl to precipitate:**
>
> $$K_{sp} = [Ag^+][Cl^-]$$

$$[Ag^+] = \frac{K_{sp}}{[Cl^-]} = \frac{1.8 \times 10^{-10}}{0.01} = 1.8 \times 10^{-8} \text{ M}$$
>
> **For Ag₂CrO₄ to precipitate:**
>
> $$K_{sp} = [Ag^+]^2[CrO_4^{2-}]$$

$$[Ag^+]^2 = \frac{K_{sp}}{[CrO_4^{2-}]} = \frac{1.9 \times 10^{-12}}{0.01} = 1.9 \times 10^{-10}$$

$$[Ag^+] = \sqrt{1.9 \times 10^{-10}} = 1.38 \times 10^{-5} \text{ M}$$
>
> **Comparison:**
>
> - AgCl needs: 1.8×10⁻⁸ M Ag⁺

> - Ag₂CrO₄ needs: 1.38×10⁻⁵ M Ag⁺
>
> **Answer: AgCl precipitates first!** (needs less Ag⁺)
>
> **JEE Insight:** This is the basis of **chromate test** for Cl⁻ detection!

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Complex Ksp Problem (Advanced)**
>
> The Ksp of Ag₂CrO₄ is 1.9×10⁻¹². What is the solubility of Ag₂CrO₄ in:
>
> 1. Pure water

> 2. 0.1 M AgNO₃
>
> **Solution:**
>
> **1. In pure water:**
>
> Ag₂CrO₄ is A₂B type: $Ag_2CrO_4 \rightleftharpoons 2Ag^+ + CrO_4^{2-}$
>
> If S mol/L dissolves:
>
> - [Ag⁺] = 2S

> - [CrO₄²⁻] = S
>
> $$K_{sp} = [Ag^+]^2[CrO_4^{2-}] = (2S)^2 \times S = 4S^3$$

$$S^3 = \frac{K_{sp}}{4} = \frac{1.9 \times 10^{-12}}{4} = 4.75 \times 10^{-13}$$

$$S = \sqrt[3]{4.75 \times 10^{-13}} = 7.8 \times 10^{-5} \text{ M}$$
>
> **2. In 0.1 M AgNO₃:**
>
> AgNO₃ provides Ag⁺ = 0.1 M (common ion)
>
> Let solubility = s
>
> - [Ag⁺] = 0.1 + 2s ≈ 0.1 M (since s « 0.1)

> - [CrO₄²⁻] = s
>
> $$K_{sp} = [Ag^+]^2[CrO_4^{2-}] = (0.1)^2 \times s$$

$$s = \frac{K_{sp}}{(0.1)^2} = \frac{1.9 \times 10^{-12}}{0.01} = 1.9 \times 10^{-10} \text{ M}$$
>
> **Comparison:**
>
> - In pure water: 7.8×10⁻⁵ M

> - In 0.1 M AgNO₃: 1.9×10⁻¹⁰ M
>
> **Solubility decreased by factor of ~400,000!** (Strong common ion effect for A₂B type)

> **↗ Connection · Problem 8: pH Effect on Solubility (Advanced)**
>
> Calculate the solubility of Mg(OH)₂ at pH = 12.
>
> Given: Ksp[Mg(OH)₂] = 1.8×10⁻¹¹
>
> **Solution:**
>
> At pH = 12:
>
> $$pOH = 14 - 12 = 2$$

$$[OH^-] = 10^{-2} = 0.01 \text{ M}$$
>
> $Mg(OH)_2 \rightleftharpoons Mg^{2+} + 2OH^-$
>
> Let solubility = s
>
> - [Mg²⁺] = s

> - [OH⁻] = 0.01 + 2s ≈ 0.01 M (common ion from pH)
>
> $$K_{sp} = [Mg^{2+}][OH^-]^2 = s \times (0.01)^2$$

$$s = \frac{K_{sp}}{(0.01)^2} = \frac{1.8 \times 10^{-11}}{10^{-4}} = 1.8 \times 10^{-7} \text{ M}$$
>
> **Compare to pure water:**
>
> $$S_{water} = \sqrt[3]{\frac{K_{sp}}{4}} = \sqrt[3]{\frac{1.8 \times 10^{-11}}{4}} = 1.65 \times 10^{-4} \text{ M}$$
>
> **In basic solution (pH 12), solubility is ~900 times lower!**
>
> **JEE Application:** This explains why adding NaOH precipitates Mg(OH)₂!

> **↗ Connection · Problem 9: Simultaneous Equilibria (JEE Advanced)**
>
> A saturated solution of H₂S contains 0.1 M H₂S. Calculate [S²⁻] at pH = 1.
>
> Given:
>
> - Ka₁(H₂S) = 1×10⁻⁷

> - Ka₂(H₂S) = 1.3×10⁻¹⁴
>
> **Solution:**
>
> **First ionization:**
>
> $$H_2S \rightleftharpoons H^+ + HS^-$$

$$K_{a1} = \frac{[H^+][HS^-]}{[H_2S]}$$
>
> At pH = 1: [H⁺] = 10⁻¹ M
>
> $$1 \times 10^{-7} = \frac{10^{-1} \times [HS^-]}{0.1}$$

$$[HS^-] = \frac{1 \times 10^{-7} \times 0.1}{10^{-1}} = 1 \times 10^{-7} \text{ M}$$
>
> **Second ionization:**
>
> $$HS^- \rightleftharpoons H^+ + S^{2-}$$

$$K_{a2} = \frac{[H^+][S^{2-}]}{[HS^-]}$$

$$1.3 \times 10^{-14} = \frac{10^{-1} \times [S^{2-}]}{1 \times 10^{-7}}$$

$$[S^{2-}] = \frac{1.3 \times 10^{-14} \times 1 \times 10^{-7}}{10^{-1}} = 1.3 \times 10^{-20} \text{ M}$$
>
> **Key Insight:** At low pH (acidic), [S²⁻] is extremely small! This is why Group II sulfides (CuS, PbS with very low Ksp) precipitate even in acidic medium, but Group IV sulfides (ZnS, MnS with higher Ksp) don’t.
>
> **Qualitative analysis connection!**

---

## Quick Revision Box

| Salt Type | Ksp Expression | Ksp-S Relation | Example |
| --- | --- | --- | --- |
| AB | $[A^+][B^-]$ | $S^2$ | AgCl, BaSO₄ |
| AB₂ | $[A^{2+}][B^-]^2$ | $4S^3$ | CaF₂, PbCl₂ |
| A₂B | $[A^+]^2[B^{2-}]$ | $4S^3$ | Ag₂S, Ag₂CrO₄ |
| AB₃ | $[A^{3+}][B^-]^3$ | $27S^4$ | AlF₃ |
| A₂B₃ | $[A^{3+}]^2[B^{2-}]^3$ | $108S^5$ | Al₂(SO₄)₃ |

**Precipitation Rules:**

- Q < Ksp → Unsaturated (no precipitation)
- Q = Ksp → Saturated (equilibrium)
- Q > Ksp → Supersaturated (precipitation occurs)

**Common Ion Effect:**

- Adding common ion → Solubility decreases
- Higher pH → Metal hydroxide solubility decreases
- Lower pH → Basic salt solubility increases

---

## When to Use This

> **★ Key point · Decision Tree: Ksp Problems**
>
> **Step 1: Identify the question type**
>
> **Given Ksp, find solubility?**
>
> - Identify salt type (AB, AB₂, etc.)

> - Check for common ion

> - Use appropriate Ksp-S formula
>
> **Given solubility, find Ksp?**
>
> - Write equilibrium expression

> - Find ion concentrations from S

> - Calculate Ksp
>
> **Will precipitation occur?**
>
> - Calculate Q from given concentrations

> - Compare Q with Ksp

> - Q > Ksp → Yes, Q < Ksp → No
>
> **Which precipitates first?**
>
> - Calculate minimum ion concentration needed for each salt

> - Lower concentration needed → Precipitates first
>
> **Effect of pH?**
>
> - If anion is basic (OH⁻, S²⁻, CO₃²⁻) → pH affects solubility

> - Higher pH → Lower solubility (for metal hydroxides)

---

## Qualitative Analysis Connection (JEE Advanced)

### Group-wise Precipitation

| Group | Reagent | Precipitates | Ksp Range |
| --- | --- | --- | --- |
| **I** | Dil HCl | AgCl, PbCl₂, Hg₂Cl₂ | 10⁻¹⁰ to 10⁻¹⁸ |
| **II** | H₂S (acidic) | CuS, PbS, CdS, Bi₂S₃ | 10⁻³⁶ to 10⁻⁵² |
| **III** | NH₄OH + NH₄Cl | Al(OH)₃, Fe(OH)₃, Cr(OH)₃ | Medium Ksp |
| **IV** | H₂S (basic) | ZnS, MnS, NiS, CoS | 10⁻²² to 10⁻²⁶ |
| **V** | (NH₄)₂CO₃ | BaCO₃, CaCO₃, SrCO₃ | 10⁻⁹ to 10⁻¹⁰ |

**Why different groups?**

- **Low Ksp** (Group I, II): Precipitate easily, even in acidic medium
- **Medium Ksp** (Group III, IV): Need specific pH/conditions
- **Higher Ksp** (Group V): Precipitate only with strong reagents

---

## Connection to Other Topics

Solubility product connects to:

1. **[Ionic Equilibrium](../index.md)** - Ksp is an equilibrium constant
2. **[Le Chatelier’s Principle](../le-chateliers-principle/index.md)** - Common ion effect explained
3. **[pH and Buffers](../ph-buffer/index.md)** - pH affects solubility of basic salts
4. **[Chemical Equilibrium](../chemical-equilibrium/index.md)** - Uses Q vs K concept
5. **[Acids and Bases](../index.md)** - Anion basicity affects solubility
6. **[Coordination Chemistry](../../coordination-compounds/index.md)** - Complex formation increases solubility
7. **[Electrochemistry](../../redox-electrochemistry/index.md)** - AgCl reference electrode

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Ksp is the equilibrium constant for sparingly soluble salts** - Smaller Ksp = Lower solubility

> 2. **Ksp-S relationship depends on salt type** - AB: S², AB₂: 4S³, A₂B₃: 108S⁵

> 3. **Q > Ksp means precipitation** - Compare ionic product with Ksp

> 4. **Common ion decreases solubility** - Le Chatelier’s principle in action

> 5. **pH affects solubility of basic salts** - Higher pH → Lower solubility of M(OH)ₙ
>
> **“Ksp is nature’s way of saying ’that’s all I can dissolve!’ Go beyond it, and the excess precipitates out.”**
>
> **JEE Strategy:**
>
> - Master Ksp-S formulas for different salt types (AB, AB₂, A₂B, A₂B₃)

> - Always check for common ions before calculating solubility

> - Q vs Ksp comparison is the key to precipitation questions

> - Link to qualitative analysis—know which groups precipitate when

> - pH effect on solubility is favorite in JEE Advanced (H₂S, metal hydroxides)

> - Selective precipitation problems test your numerical skills—practice them!

---

## What’s Next?

Congratulations! You’ve completed the Equilibrium chapter. Here’s where to go next:

**Within Chemistry:**

- **[Chemical Kinetics](../../chemical-kinetics/index.md)** - How fast reactions reach equilibrium
- **[Thermodynamics](../../thermodynamics/index.md)** - Energy changes and spontaneity (ΔG° = -RT ln K)
- **[Electrochemistry](../../redox-electrochemistry/index.md)** - Nernst equation uses equilibrium concepts

**Cross-subject connections:**

- **[Logarithms](../../../mathematics/index.md)** - Essential for pH, pKa, Ksp calculations
- **[Differential Equations](../../../mathematics/index.md)** - Rate laws in kinetics

**For comprehensive revision:**

- Review all 6 equilibrium topics together
- Practice mixed problems combining multiple concepts
- Focus on numerical problem-solving speed

From TestGuru · our mock-test platform

## You've read Solubility Product (Ksp) and Common Ion Effect.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=equilibrium&tg_exam=jee-main&tg_page=%2Fchemistry%2Fequilibrium%2Fsolubility-product%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/equilibrium/solubility-product/",this.page.identifier="/chemistry/equilibrium/solubility-product/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="equilibriumConstant" id="anim-equilibriumConstant-1795396419637098756"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-equilibriumConstant-1795396419637098756")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/equilibrium/solubility-product/](https://jeenotes.in/chemistry/equilibrium/solubility-product/) · raw HTML: `offline/chemistry/equilibrium/solubility-product/index.html`_
