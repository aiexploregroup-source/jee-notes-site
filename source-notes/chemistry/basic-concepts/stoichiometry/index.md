---
title: "Stoichiometry"
source: "https://jeenotes.in/chemistry/basic-concepts/stoichiometry/"
description: "Complete guide to stoichiometric calculations, limiting reagent, excess reagent, and percentage yield for JEE Main and Advanced preparation"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Chemistry"
position: "/ Topic 6 of 8"
html: "../../../../offline/chemistry/basic-concepts/stoichiometry/index.html"
extracted: "2026-11-23"
---

> Complete guide to stoichiometric calculations, limiting reagent, excess reagent, and percentage yield for JEE Main and Advanced preparation

# Stoichiometry

## Real-Life Hook: The Perfect Recipe for Pancakes

Imagine making pancakes: 1 cup flour + 2 eggs + 1 cup milk = 4 pancakes. What if you have 3 cups flour, 10 eggs, and 2 cups milk? You can only make 8 pancakes because milk runs out first! This is exactly what chemists call a “limiting reagent” problem. In chemical reactions, just like cooking, you need ingredients in the right proportions - and one ingredient always runs out first, limiting how much product you can make.

---

## Introduction

Stoichiometry (from Greek: “stoicheion” = element, “metron” = measure) is the calculation of reactants and products in chemical reactions. It’s the mathematical heart of chemistry, essential for:

- Predicting how much product forms
- Determining which reactant limits the reaction
- Calculating percentage yield and purity
- Industrial chemical process optimization

For JEE, stoichiometry problems are among the most frequently tested topics, appearing in multiple choice, numerical, and assertion-reason formats.

---

## Balanced Chemical Equations

### Law of Conservation of Mass

In a chemical reaction, the total mass of reactants equals the total mass of products.

$$\boxed{\text{Mass of reactants} = \text{Mass of products}}$$

This requires **balanced equations** where:

- Number of atoms of each element is equal on both sides
- Total charge is conserved (in ionic equations)

### Balancing Equations - Strategy

**Step-by-step approach:**

1. **Write skeleton equation** with correct formulas
2. **Count atoms** of each element on both sides
3. **Balance metals first**, then non-metals, then H and O
4. **Use whole number coefficients** (multiply if needed to clear fractions)
5. **Verify** atom count and charges

### Example: Balancing

Balance: Fe + O₂ → Fe₂O₃

**Step 1:** Skeleton
Fe + O₂ → Fe₂O₃

**Step 2:** Count

- Left: Fe = 1, O = 2
- Right: Fe = 2, O = 3

**Step 3:** Balance Fe first
2Fe + O₂ → Fe₂O₃

**Step 4:** Balance O
2Fe + 3/2 O₂ → Fe₂O₃

**Step 5:** Clear fraction (multiply all by 2)

$$\boxed{4\text{Fe} + 3\text{O}_2 \rightarrow 2\text{Fe}_2\text{O}_3}$$

---

## Stoichiometric Coefficients

### Mole Ratio

The coefficients in a balanced equation represent the **mole ratio** of reactants and products.

For:

$$N_2 + 3H_2 \rightarrow 2NH_3$$

**Mole ratios:**

- 1 mole N₂ : 3 moles H₂ : 2 moles NH₃
- N₂ : H₂ : NH₃ = 1 : 3 : 2

### What Coefficients Tell Us

| Interpretation | N₂ + 3H₂ → 2NH₃ |
| --- | --- |
| Molecules | 1 molecule N₂ + 3 molecules H₂ → 2 molecules NH₃ |
| Moles | 1 mol N₂ + 3 mol H₂ → 2 mol NH₃ |
| Mass | 28 g N₂ + 6 g H₂ → 34 g NH₃ |
| Volume (gas, STP) | 22.4 L N₂ + 67.2 L H₂ → 44.8 L NH₃ |

### Memory Trick: “Coefficient = Mole Recipe”

Think of coefficients as a **mole recipe**:

- 1 mol N₂ + 3 mol H₂ → 2 mol NH₃
- Just like: 1 egg + 3 cups flour → 2 cakes

---

## Basic Stoichiometric Calculations

### General Approach

```fallback
Given amount → Moles → Mole ratio → Moles → Desired quantity
   (÷M)         of A     (from eq)    of B      (×M or ×Nₐ)
```

### Formula Framework

$$\boxed{\frac{n_A}{a} = \frac{n_B}{b}}$$

Where:

- nₐ, nᵦ = moles of substances A and B
- a, b = stoichiometric coefficients

### Interactive Demo: Visualize Mole Concept

Explore mole ratios and stoichiometric calculations interactively.

### Solved Example 1: Mass-to-Mass

Calculate mass of NH₃ produced from 14 g of N₂.
Reaction: N₂ + 3H₂ → 2NH₃

**Solution:**

Step 1: Find moles of N₂

$$n_{N_2} = \frac{14}{28} = 0.5 \text{ mol}$$

Step 2: Use mole ratio

$$\frac{n_{N_2}}{1} = \frac{n_{NH_3}}{2}$$

$$n_{NH_3} = 2 \times 0.5 = 1 \text{ mol}$$

Step 3: Convert to mass

$$m_{NH_3} = 1 \times 17 = 17 \text{ g}$$

$$\boxed{m_{NH_3} = 17 \text{ g}}$$

### Solved Example 2: Volume-to-Mass (Gas)

What mass of O₂ is required to react with 11.2 L of H₂ at STP?
Reaction: 2H₂ + O₂ → 2H₂O

**Solution:**

Step 1: Find moles of H₂

$$n_{H_2} = \frac{11.2}{22.4} = 0.5 \text{ mol}$$

Step 2: Use mole ratio

$$\frac{n_{H_2}}{2} = \frac{n_{O_2}}{1}$$

$$n_{O_2} = \frac{0.5}{2} = 0.25 \text{ mol}$$

Step 3: Convert to mass

$$m_{O_2} = 0.25 \times 32 = 8 \text{ g}$$

$$\boxed{m_{O_2} = 8 \text{ g}}$$

---

## Limiting Reagent

### Definition

The **limiting reagent** (or limiting reactant) is the reactant that is completely consumed first, limiting the amount of product formed.

The **excess reagent** is the reactant that remains after the reaction is complete.

### Analogy: Car Manufacturing

To make 1 car: 1 body + 4 wheels

If you have:

- 10 bodies
- 30 wheels

Maximum cars = 30/4 = 7.5 → 7 cars (can’t make half!)

- Wheels are limiting (need 40 for 10 cars, have only 30)
- Bodies are in excess (3 bodies left over)

### How to Find Limiting Reagent

**Method 1: Mole Ratio Method**

1. Calculate moles of each reactant
2. Divide moles by stoichiometric coefficient
3. Smallest value → limiting reagent

**Method 2: Product Method**

1. Calculate product from each reactant (assuming others are excess)
2. Reactant giving least product → limiting reagent

### Solved Example 3: Limiting Reagent

10 g N₂ reacts with 10 g H₂. Find:
a) Limiting reagent
b) Mass of NH₃ formed
c) Excess reagent remaining

Reaction: N₂ + 3H₂ → 2NH₃

**Solution:**

**Part a) Find limiting reagent**

Moles of N₂ = 10/28 = 0.357 mol
Moles of H₂ = 10/2 = 5 mol

Using mole ratio method:

$$\frac{n_{N_2}}{1} = \frac{0.357}{1} = 0.357$$

$$\frac{n_{H_2}}{3} = \frac{5}{3} = 1.667$$

Smallest value → N₂ is limiting reagent

**Part b) Mass of NH₃**

From limiting reagent N₂:

$$\frac{0.357}{1} = \frac{n_{NH_3}}{2}$$

$$n_{NH_3} = 0.714 \text{ mol}$$

$$m_{NH_3} = 0.714 \times 17 = 12.14 \text{ g}$$

**Part c) Excess reagent**

H₂ required = 3 × 0.357 = 1.071 mol = 2.142 g
H₂ in excess = 10 - 2.142 = 7.858 g

$$\boxed{\text{a) N}_2 \text{ limiting; b) 12.14 g NH}_3; \text{c) 7.86 g H}_2 \text{ excess}}$$

---

## Percentage Yield

### Theoretical vs Actual Yield

- **Theoretical yield**: Maximum product possible (calculated from stoichiometry)
- **Actual yield**: Product actually obtained (from experiment)
- **Percentage yield**: Efficiency of reaction

$$\boxed{\text{Percentage yield} = \frac{\text{Actual yield}}{\text{Theoretical yield}} \times 100\%}$$

### Why Actual < Theoretical?

1. **Incomplete reactions**: Equilibrium, reversible reactions
2. **Side reactions**: Formation of byproducts
3. **Loss during separation**: Filtration, crystallization losses
4. **Impure reactants**: Less than 100% purity
5. **Experimental errors**: Spillage, measurement errors

### Solved Example 4: Percentage Yield

20 g of CaCO₃ is heated. 8.8 g of CO₂ is collected. Calculate percentage yield.
Reaction: CaCO₃ → CaO + CO₂

**Solution:**

Step 1: Theoretical yield

Moles of CaCO₃ = 20/100 = 0.2 mol
From equation: 1 mol CaCO₃ → 1 mol CO₂
Moles of CO₂ = 0.2 mol
Theoretical mass of CO₂ = 0.2 × 44 = 8.8 g

Wait, this matches! Let me recalculate with actual < theoretical:

Actually, if 8.8 g is collected and theoretical is also 8.8 g:

$$\text{Percentage yield} = \frac{8.8}{8.8} \times 100 = 100\%$$

For a more realistic problem, let’s say 7 g was collected:

$$\text{Percentage yield} = \frac{7}{8.8} \times 100 = 79.5\%$$

---

## Consecutive Reactions

When reactions occur in sequence:
A → B → C

Calculate step by step, using product of first reaction as reactant for second.

### Solved Example 5: Consecutive Reactions

$$\text{C} + \text{O}_2 \rightarrow \text{CO}_2$$

$$\text{CO}_2 + \text{C} \rightarrow 2\text{CO}$$

If 12 g of C is burnt, then CO₂ reacts with 6 g more C, find total mass of CO formed.

**Solution:**

**Step 1:** First reaction

$$\text{C} + \text{O}_2 \rightarrow \text{CO}_2$$

Moles of C = 12/12 = 1 mol
Moles of CO₂ = 1 mol
Mass of CO₂ = 44 g

**Step 2:** Second reaction

$$\text{CO}_2 + \text{C} \rightarrow 2\text{CO}$$

Moles of CO₂ = 44/44 = 1 mol (from step 1)
Moles of C = 6/12 = 0.5 mol (given)

Check limiting reagent:

- From CO₂: 1 mol → 2 mol CO
- From C: 0.5 mol → 1 mol CO

C is limiting!
Moles of CO = 1 mol (from 0.5 mol C)

Mass of CO = 1 × 28 = 28 g

$$\boxed{m_{CO} = 28 \text{ g}}$$

---

## Common Calculation Mistakes

### Mistake 1: Using Mass Ratio Instead of Mole Ratio

❌ **Wrong**: For N₂ + 3H₂ → 2NH₃, if 28 g N₂ reacts with 6 g H₂
Using mass: Product = 28 + 6 = 34 g (correct by luck!)

✓ **Right**: Always convert to moles first, use mole ratio, then convert back

### Mistake 2: Not Finding Limiting Reagent

❌ **Wrong**: Calculating product from each reactant separately without checking which limits

✓ **Right**: Always identify limiting reagent first in excess reactant problems

### Mistake 3: Using Unbalanced Equations

❌ **Wrong**: Fe + O₂ → Fe₂O₃ (unbalanced!)

✓ **Right**: 4Fe + 3O₂ → 2Fe₂O₃ (balanced)

### Mistake 4: Wrong Molar Masses

❌ **Wrong**: M(O₂) = 16 g/mol (atomic mass)

✓ **Right**: M(O₂) = 32 g/mol (molecular mass)

### Mistake 5: Percentage Yield > 100%

❌ **Wrong**: If calculated yield > 100%, accepting it

✓ **Right**: Check calculations - yield can’t exceed 100% (impure product possible)

---

## Memory Tricks for Stoichiometry

### “MOLEMOLE” Method

1. **M**ass to moles (given substance) - divide by M
2. **O**bserve the balanced equation
3. **L**ook for mole ratio
4. **E**quate the ratios: nₐ/a = nᵦ/b
5. **M**oles of unknown calculated
6. **O**btain desired quantity
7. **L**abel with units
8. **E**valuate if reasonable

### Limiting Reagent Trick: “Divide and Conquer”

**Divide** moles by coefficient
**Conquer** by choosing smallest

### SYRUP for Yield Problems

- **S**tart with theoretical calculation
- **Y**ield actual from experiment
- **R**atio: actual/theoretical
- **U**nits: percentage
- **P**ractical is always less

---

## Practice Problems

### Level 1: Basic (JEE Main)

**Q1.** Balance the equation: Al + O₂ → Al₂O₃

<details><summary>Answer</summary>4Al + 3O₂ → 2Al₂O₃<p>Check: Al: 4 = 4 ✓, O: 6 = 6 ✓</p></details>

**Q2.** How many moles of O₂ are needed to react completely with 2 moles of C?
Reaction: C + O₂ → CO₂

<details><summary>Solution</summary>From balanced equation: 1 mol C : 1 mol O₂<p>For 2 mol C → 2 mol O₂ needed</p><p><strong>Answer</strong>: 2 moles O₂</p></details>

**Q3.** Calculate mass of H₂O formed from 4 g H₂.
Reaction: 2H₂ + O₂ → 2H₂O

<details><summary>Solution</summary>Moles of H₂ = 4/2 = 2 mol<p>From equation: 2 mol H₂ → 2 mol H₂O
So 2 mol H₂ → 2 mol H₂O</p><p>Mass of H₂O = 2 × 18 = 36 g</p><p><strong>Answer</strong>: 36 g</p></details>

**Q4.** What volume of CO₂ (at STP) is produced from 50 g CaCO₃?
Reaction: CaCO₃ → CaO + CO₂

<details><summary>Solution</summary>Moles of CaCO₃ = 50/100 = 0.5 mol<p>From equation: 1 mol CaCO₃ → 1 mol CO₂
So 0.5 mol CaCO₃ → 0.5 mol CO₂</p><p>Volume of CO₂ = 0.5 × 22.4 = 11.2 L</p><p><strong>Answer</strong>: 11.2 L at STP</p></details>

### Level 2: Intermediate (JEE Main/Advanced)

**Q5.** 14 g of N₂ and 6 g of H₂ are mixed and reacted. Find:
a) Limiting reagent
b) Mass of NH₃ formed
Reaction: N₂ + 3H₂ → 2NH₃

<details><summary>Solution</summary>Moles of N₂ = 14/28 = 0.5 mol
Moles of H₂ = 6/2 = 3 mol<p>Checking limiting reagent:
n(N₂)/1 = 0.5/1 = 0.5
n(H₂)/3 = 3/3 = 1</p><p>N₂ is limiting (smaller value)</p><p>From N₂: 0.5 mol N₂ → 1 mol NH₃
Mass of NH₃ = 1 × 17 = 17 g</p><p><strong>Answer</strong>: a) N₂ limiting, b) 17 g NH₃</p></details>

**Q6.** 10 g of impure CaCO₃ produces 2.24 L of CO₂ at STP. Calculate % purity of CaCO₃.
Reaction: CaCO₃ → CaO + CO₂

<details><summary>Solution</summary>Moles of CO₂ = 2.24/22.4 = 0.1 mol<p>From equation: 1 mol CO₂ comes from 1 mol CaCO₃
Moles of pure CaCO₃ = 0.1 mol
Mass of pure CaCO₃ = 0.1 × 100 = 10 g</p><p>% purity = (10/10) × 100 = 100%</p><p><strong>Answer</strong>: 100% pure</p><p>(Note: If sample was impure, the given mass would be greater than pure mass calculated)</p></details>

**Q7.** A mixture of FeO and Fe₂O₃ when heated with carbon monoxide, produces 11.2 g of Fe. If the mixture contained 0.15 mol of FeO, find moles of Fe₂O₃.

Reactions: FeO + CO → Fe + CO₂
Fe₂O₃ + 3CO → 2Fe + 3CO₂

<details><summary>Solution</summary>Moles of Fe produced = 11.2/56 = 0.2 mol<p>From FeO: 0.15 mol FeO → 0.15 mol Fe</p><p>Remaining Fe must come from Fe₂O₃:
Moles of Fe from Fe₂O₃ = 0.2 - 0.15 = 0.05 mol</p><p>From equation: 1 mol Fe₂O₃ → 2 mol Fe
Moles of Fe₂O₃ = 0.05/2 = 0.025 mol</p><p><strong>Answer</strong>: 0.025 mol Fe₂O₃</p></details>

**Q8.** Theoretical yield of a reaction is 25 g. If 20 g is obtained, what is the percentage yield?

<details><summary>Solution</summary>% yield = (20/25) × 100 = 80%<p><strong>Answer</strong>: 80%</p></details>

### Level 3: Advanced (JEE Advanced - Tricky)

**Q9.** (JEE Advanced Pattern) A gaseous mixture of H₂ and CO in molar ratio a:b reacts with O₂ to form H₂O and CO₂. If the ratio of O₂ consumed to H₂O formed is 5:4, find a:b.

Reactions: 2H₂ + O₂ → 2H₂O
2CO + O₂ → 2CO₂

<details><summary>Solution</summary>Let moles: H₂ = a, CO = b<p>From H₂ reaction: a mol H₂ consumes a/2 mol O₂, produces a mol H₂O
From CO reaction: b mol CO consumes b/2 mol O₂, produces b mol CO₂</p><p>Total O₂ consumed = a/2 + b/2 = (a+b)/2
Total H₂O formed = a</p><p>Given: O₂ : H₂O = 5 : 4</p>$$\frac{(a+b)/2}{a} = \frac{5}{4}$$

$$\frac{a+b}{2a} = \frac{5}{4}$$

$$4(a+b) = 10a$$

$$4a + 4b = 10a$$

$$4b = 6a$$

$$\frac{a}{b} = \frac{4}{6} = \frac{2}{3}$$<p><strong>Answer</strong>: a:b = 2:3</p></details>

**Q10.** (JEE Advanced 2017 Pattern) When 10 g of a metal M reacts with excess HCl, 11.2 L of H₂ (at STP) is evolved. The equivalent weight of metal is:
a) 10 b) 20 c) 30 d) 40

<details><summary>Solution</summary>Moles of H₂ = 11.2/22.4 = 0.5 mol<p>Reaction: M + nHCl → MCl_n + (n/2)H₂</p><p>For 1 equivalent of metal, 1/2 equivalent of H₂ (or 11.2 L) is produced</p><p>Equivalents of H₂ = 0.5 × 2 = 1 equivalent
(since H₂ has 2 H, each H⁺ is 1 equivalent)</p><p>Actually, simpler approach:
1 mol H₂ requires 2 equivalents of metal
0.5 mol H₂ requires 1 equivalent of metal</p><p>Equivalent weight = mass/equivalents = 10/1 = 10</p><p><strong>Answer</strong>: a) 10</p></details>

**Q11.** (Tricky) In the reaction C₃H₈ + O₂ → CO₂ + H₂O, if 22 g of C₃H₈ is burnt with 80 g of O₂:
a) Which is limiting reagent?
b) How much excess reagent remains?
c) Mass of CO₂ formed?

<details><summary>Solution</summary>First, balance the equation:
C₃H₈ + 5O₂ → 3CO₂ + 4H₂O<p>Moles of C₃H₈ = 22/44 = 0.5 mol
Moles of O₂ = 80/32 = 2.5 mol</p><p>Check limiting:
n(C₃H₈)/1 = 0.5/1 = 0.5
n(O₂)/5 = 2.5/5 = 0.5</p><p>Both exactly react! No limiting reagent, both are completely consumed.</p><p><strong>a) No limiting reagent</strong> (both completely react)</p><p><strong>b) No excess</strong> (both completely consumed)</p><p><strong>c) Mass of CO₂:</strong>
From 0.5 mol C₃H₈ → 1.5 mol CO₂
Mass = 1.5 × 44 = 66 g</p><p><strong>Answer</strong>: a) None, b) 0 g, c) 66 g CO₂</p></details>

**Q12.** (Conceptual) Two elements X and Y form compounds XY and X₂Y₃. If 0.1 mol of XY weighs 10 g and 0.05 mol of X₂Y₃ weighs 12.5 g, find atomic masses of X and Y.

<details><summary>Solution</summary>M(XY) = 10/0.1 = 100 g/mol
M(X₂Y₃) = 12.5/0.05 = 250 g/mol<p>Let atomic mass of X = x, Y = y</p><p>From XY: x + y = 100 &amp;mldr; (1)
From X₂Y₃: 2x + 3y = 250 &amp;mldr; (2)</p><p>From (1): x = 100 - y
Substitute in (2):
2(100 - y) + 3y = 250
200 - 2y + 3y = 250
y = 50</p><p>From (1): x = 100 - 50 = 50</p><p><strong>Answer</strong>: X = 50 amu, Y = 50 amu</p></details>

---

## Cross-Links and Further Study

### Related Topics

- [Mole Concept](../mole-concept/index.md) - Foundation for stoichiometry
- [Equivalent Concept](../equivalent-concept/index.md) - Alternative to mole calculations
- [Solutions](../../solutions/index.md) - Stoichiometry in solution reactions
- [Gaseous State](../../index.md) - Gas stoichiometry, Gay-Lussac’s law
- [Chemical Equilibrium](../../equilibrium/index.md) - Incomplete reactions, yield

### For JEE Advanced Students

- Gravimetric analysis
- Volumetric analysis (titrations)
- Eudiometry
- Combustion analysis for formula determination
- Industrial applications (Haber process, Contact process)

---

## Quick Revision Points

### Stoichiometry Steps

1. Write balanced equation
2. Convert given to moles
3. Use mole ratio
4. Convert to desired units
5. Check reasonableness

### Limiting Reagent

- Divide moles by coefficient
- Smallest value = limiting
- Calculate products from limiting reagent only
- Excess = initial - consumed

### Important Formulas

$$\boxed{\frac{n_A}{a} = \frac{n_B}{b}}$$

(mole ratio)

$$\boxed{\text{% Yield} = \frac{\text{Actual}}{\text{Theoretical}} \times 100}$$

$$\boxed{\text{Mass conserved: } \sum m_{\text{reactants}} = \sum m_{\text{products}}}$$

---

## Tips for JEE

1. **Always balance first** - No calculations without balanced equation
2. **Show all steps** - Partial credit in numerical problems
3. **Unit consistency** - Keep track of g, mol, L throughout
4. **Limiting reagent** - Default assumption: find it first
5. **Reasonableness check** - Does answer make sense?
6. **Gas problems** - Remember 22.4 L/mol at STP
7. **Percentage yield** - Never exceeds 100% in reality
8. **Practice variety** - Mass-mass, mass-volume, volume-volume problems

---

*Last updated: May 2025*
*Part of JEE Chemistry - Basic Concepts series*

From TestGuru · our mock-test platform

## You've read Stoichiometry.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=basic-concepts&tg_exam=jee-main&tg_page=%2Fchemistry%2Fbasic-concepts%2Fstoichiometry%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/basic-concepts/stoichiometry/",this.page.identifier="/chemistry/basic-concepts/stoichiometry/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="moleConcept" id="anim-moleConcept-1795396419027729622"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-moleConcept-1795396419027729622")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/basic-concepts/stoichiometry/](https://jeenotes.in/chemistry/basic-concepts/stoichiometry/) · raw HTML: `offline/chemistry/basic-concepts/stoichiometry/index.html`_
