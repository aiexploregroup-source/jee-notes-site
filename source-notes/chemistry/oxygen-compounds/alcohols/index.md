---
title: "Alcohols: From Hand Sanitizers to JEE Champions"
source: "https://jeenotes.in/chemistry/oxygen-compounds/alcohols/"
description: "Master classification, preparation methods, and reactions of alcohols with JEE-focused strategies and memory tricks"
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Chemistry"
position: "/ Topic 1 of 7"
html: "../../../../offline/chemistry/oxygen-compounds/alcohols/index.html"
extracted: "2026-11-23"
---

> Master classification, preparation methods, and reactions of alcohols with JEE-focused strategies and memory tricks

## The Hook: Breaking Bad Chemistry (But Legal!)

> **★ Key point · Connect: Real Life → Chemistry**
>
> Remember the hand sanitizer shortage during 2020? Everyone was scrambling for bottles containing 70% ethanol. But have you ever wondered why exactly 70% and not 100%? Or how that same compound that sanitizes your hands can also power cars, make perfumes, and be the starting material for hundreds of organic reactions?
>
> **The JEE Question:** In the 2023 JEE Advanced paper, students who understood alcohol reactions scored 8 marks in just 3 minutes. Those who didn’t? They stared at the paper wondering why their ROH wasn’t behaving like they expected!

---

## The Core Concept: What Makes Alcohols Special?

### General Formula & Functional Group

$$\boxed{\text{R-OH (Hydroxyl group attached to saturated carbon)}}$$

**In simple terms:** Alcohols are like hydrocarbons that got upgraded with an -OH group. Think of it as adding a “smart feature” to a basic phone - the carbon chain is the phone, and -OH is the feature that makes everything interesting!

**Critical Distinction:**

- **Alcohol:** -OH attached to **sp³** carbon (C-OH)
- **Phenol:** -OH attached to **sp²** carbon of benzene ring (not covered here - see [phenols](../phenols/index.md))
- **Enol:** -OH attached to carbon with C=C (unstable, tautomerizes)

> **⚠ Trap · JEE Trap Alert!**
>
> **Mistake:** Calling C₆H₅-CH₂-OH (benzyl alcohol) a phenol

> **Reality:** This IS an alcohol! The -OH is on sp³ carbon, not the benzene ring itself.

---

## Classification: The 1°, 2°, 3° Family

### Based on Carbon Bearing -OH

```fallback
Primary (1°)         Secondary (2°)      Tertiary (3°)
    |                     |                    |
R-CH₂-OH            R₂CH-OH              R₃C-OH
    |                     |                    |
  1 R group           2 R groups          3 R groups
```

**Memory Trick:** “**P**rimary has **P**athetic friends (only 1), **S**econdary is **S**ocial (2 friends), **T**ertiary is **T**oo popular (3 friends)”

### Interactive Demo: Visualize Reaction Mechanisms

Watch SN1, SN2, and E1, E2 mechanisms in alcohol reactions.

### Reactivity Pattern

$$\boxed{\text{Reactivity Order: } 3° > 2° > 1° \text{ (for substitution/elimination)}}$$

**Why?** Carbocation stability: 3° carbocation is most stable (hyperconjugation + inductive effect)

> **◐ In simple terms · Detailed Reasoning**
>
> **For SN1/E1 reactions:**
>
> - 3° alcohols form 3° carbocations (most stable) → fastest reaction

> - 1° alcohols struggle to form 1° carbocations → slowest/different mechanism
>
> **For oxidation:**
>
> - 1° → can be oxidized to aldehyde, then carboxylic acid

> - 2° → can be oxidized to ketone (stops here)

> - 3° → **cannot be oxidized** (no H on C-OH carbon!)
>
> **JEE Gold:** This reactivity flip is tested heavily!

---

## Preparation Methods: Your Reaction Toolkit

### Method 1: Hydration of Alkenes (Markovnikov’s Rule)

**Reaction:**

```fallback
H₂SO₄/H₂O
CH₃-CH=CH₂  ────────→  CH₃-CH(OH)-CH₃  (2° alcohol)
 Propene              Isopropyl alcohol
```

**Mechanism (Markovnikov Addition):**

```fallback
Step 1: Protonation
CH₃-CH=CH₂ + H⁺ → CH₃-CH⁺-CH₃ (2° carbocation - more stable!)
                   NOT CH₃-CH₂-CH₂⁺ (1° - less stable)

Step 2: Nucleophilic attack
CH₃-CH⁺-CH₃ + H₂O → CH₃-CH(OH)-CH₃
```

**Memory Trick:** “**M**arkovnikov is **M**ighty **M**ean - gives -OH to the **M**ore substituted carbon!”

> **★ Key point · Anti-Markovnikov Route**
>
> Want the -OH on the less substituted carbon? Use **hydroboration-oxidation**:
>
> ```fallback

> (1) BH₃/THF

> CH₃-CH=CH₂  ────────────→  CH₃-CH₂-CH₂-OH  (1° alcohol)

>        (2) H₂O₂/OH⁻

> ```
>
> **JEE Pattern:** They’ll give you an alkene and ask which reagent gives which alcohol isomer!

### Method 2: Reduction of Carbonyl Compounds

**The Big Picture:**

```fallback
Reduction
Carboxylic acid ──────→ 1° alcohol
     ↑                      ↓
                            ↓
Aldehyde ──────────────→ 1° alcohol
     ↑                      ↓
                            ↓
Ketone ────────────────→ 2° alcohol
```

**Reagents:**

| Starting Material | Reagent | Product | Mechanism Type |
| --- | --- | --- | --- |
| Aldehyde | LiAlH₄ or NaBH₄ | 1° alcohol | Nucleophilic addition |
| Ketone | LiAlH₄ or NaBH₄ | 2° alcohol | Nucleophilic addition |
| Ester | LiAlH₄ (not NaBH₄!) | 1° alcohol | Nucleophilic acyl substitution |
| Carboxylic acid | LiAlH₄ (not NaBH₄!) | 1° alcohol | Reduction |

**Memory Trick:** “**L**iAlH₄ is **L**ike a **L**ion - powerful, reduces everything! NaBH₄ is a **N**ice **B**aby - only reduces aldehydes/ketones”

**Mechanism (LiAlH₄ reduction of aldehyde):**

```fallback
H                      H   H⁻
     |                      |   |
R-C=O + H⁻ (from LiAlH₄) → R-C-O⁻  ──H₃O⁺──→  R-CH₂-OH
     |                      |
  (Aldehyde)            (Alkoxide)         (1° alcohol)
```

### Method 3: Grignard Reaction (THE JEE FAVORITE!)

**Grignard Reagent:** R-MgX (behaves like R⁻)

**Pattern Recognition:**

| Carbonyl + Grignard | Product Alcohol Class | Example |
| --- | --- | --- |
| **Formaldehyde** (HCHO) + RMgX | **1° alcohol** | CH₃MgBr + HCHO → CH₃CH₂OH |
| **Other aldehyde** (R’CHO) + RMgX | **2° alcohol** | CH₃MgBr + CH₃CHO → (CH₃)₂CHOH |
| **Ketone** (R’COR") + RMgX | **3° alcohol** | CH₃MgBr + CH₃COCH₃ → (CH₃)₃COH |
| **Ester** (RCOOR’) + 2 RMgX | **3° alcohol (2 same R groups!)** | 2 CH₃MgBr + HCOOCH₃ → (CH₃)₃COH |

**Memory Trick:** “**F**ormaldehyde makes **F**irst-degree (1°), **A**ldehyde makes **A**lmost-middle (2°), **K**etone makes **K**ing (3°)”

**Mechanism:**

```fallback
δ+  δ-              O⁻MgBr                 OH
         |   |               |                      |
R'-C=O + R-MgBr  ──→  R'-C-R   ──H₃O⁺──→   R'-C-R
         |                    |                     |
         R"                   R"                    R"
```

> **↗ Connection · JEE Advanced Pattern**
>
> **Question Type:** “Which Grignard reagent + carbonyl gives this specific alcohol?”
>
> **Strategy:** Work backward!
>
> 1. Identify alcohol class (1°, 2°, 3°)

> 2. Check symmetry - if two groups are identical in 3° alcohol → ester route

> 3. Draw the carbonyl and Grignard components
>
> **Example:** To make (CH₃)₂CH-CH(OH)-CH₃
>
> - 2° alcohol → use aldehyde + Grignard

> - Options: CH₃CHO + (CH₃)₂CHMgBr OR (CH₃)₂CHCHO + CH₃MgBr

### Method 4: Hydrolysis of Alkyl Halides

**Reaction:**

```fallback
NaOH/H₂O
R-X  ────────────→  R-OH + NaX
     (or KOH)
```

**Problem:** This competes with **elimination** (E2 mechanism)!

**Decision Table:**

| Alkyl Halide | Aqueous NaOH (dilute) | Alcoholic KOH (conc.) |
| --- | --- | --- |
| 1° (like CH₃CH₂Br) | Mainly substitution → alcohol | Mainly elimination → alkene |
| 2° | Competition | Mainly elimination |
| 3° | Mainly elimination (SN1 + E1) | Mainly elimination |

**Memory Trick:** “**B**ulky bases **B**oost elimination, **W**atery **W**ants substitution”

---

## Reactions of Alcohols: The Main Event

### Reaction 1: Reaction with Hydrogen Halides (ROH → R-X)

**Order of Reactivity:**

$$\boxed{\text{HI} > \text{HBr} > \text{HCl (very slow)}}$$

$$\boxed{3° \text{ alcohol} > 2° > 1°}$$

**Mechanism for 3° alcohol (SN1):**

```fallback
Step 1: Protonation
R₃C-OH + HBr → R₃C-OH₂⁺

Step 2: Loss of H₂O (good leaving group!)
R₃C-OH₂⁺ → R₃C⁺ + H₂O

Step 3: Nucleophilic attack
R₃C⁺ + Br⁻ → R₃C-Br
```

**Mechanism for 1° alcohol (SN2):**

```fallback
R-CH₂-OH₂⁺ + Br⁻ → R-CH₂-Br + H₂O
(Backside attack in one step)
```

**Reagent Tricks:**

| Reagent Combination | Purpose | Alcohol Type |
| --- | --- | --- |
| **Lucas Reagent** (conc. HCl + ZnCl₂) | **Distinguishes 1°, 2°, 3°** | See below |

**Lucas Test:**

- **3° alcohol:** Turbidity **immediately** (ZnCl₂ helps stabilize carbocation)
- **2° alcohol:** Turbidity in **5 minutes**
- **1° alcohol:** **No turbidity** at room temp (needs heating)

**Memory Trick:** “**L**ucas **L**oves **L**arge alcohols - 3° reacts **L**ickety-split!”

**Victor Meyer Test** (the color-based alternative to Lucas):

| Alcohol | Final Color |
| --- | --- |
| 1° | **Red** |
| 2° | **Blue** |
| 3° | **Colorless** |

Sequence: alcohol → alkyl iodide (P/I₂) → nitroalkane (AgNO₂) → treat with HNO₂, then NaOH. The color of the product distinguishes 1°, 2°, and 3° alcohols.

### Reaction 2: Dehydration to Alkenes (Elimination)

**General Reaction:**

```fallback
conc. H₂SO₄
R-CH₂-CH₂-OH  ──────────→  R-CH=CH₂ + H₂O
       Heat (170°C)
```

**Mechanism (E1 for 2°/3°):**

```fallback
Step 1: Protonation
CH₃-CH(OH)-CH₃ + H₂SO₄ → CH₃-CH(OH₂⁺)-CH₃

Step 2: Loss of H₂O
CH₃-CH(OH₂⁺)-CH₃ → CH₃-CH⁺-CH₃ + H₂O

Step 3: Loss of H⁺ (E1)
CH₃-CH⁺-CH₃ → CH₂=CH-CH₃ (propene)
```

**Saytzeff’s Rule (Zaitsev):**
“In elimination, the **more substituted alkene** is the **major product**”

**Example:**

```fallback
conc. H₂SO₄
CH₃-CH(OH)-CH₂-CH₃  ──────────→  CH₃-CH=CH-CH₃  (major, more substituted)
                                  +
                                  CH₂=CH-CH₂-CH₃  (minor, less substituted)
```

**Memory Trick:** “**S**aytzeff **S**ays **S**tability **S**ucceeds - more substituted = more stable = major”

> **⚠ Trap · Temperature Matters!**
>
> **140°C with H₂SO₄:** Forms **ether** (2 R-OH → R-O-R + H₂O)

> **170°C with H₂SO₄:** Forms **alkene** (R-OH → R-CH=CH₂ + H₂O)
>
> **JEE Trap:** They’ll change temperature and ask for product!

### Reaction 3: Oxidation - The Degree Matters!

**Reagents:** KMnO₄ (alkaline), K₂Cr₂O₇/H₂SO₄ (acidified), PCC, Jones reagent

**Pattern:**

| Alcohol | Mild Oxidation (PCC) | Strong Oxidation (K₂Cr₂O₇/H⁺) |
| --- | --- | --- |
| **1° (R-CH₂-OH)** | R-CHO (aldehyde) | R-COOH (carboxylic acid) |
| **2° (R₂CH-OH)** | R₂C=O (ketone) | R₂C=O (ketone - **stops here!**) |
| **3° (R₃C-OH)** | **No reaction** | **No reaction** |

**Mechanism (simplified):**

```fallback
1° alcohol oxidation:

     H                       O                          O
     |                       ‖                          ‖
R-C-OH  ──[O]──→   R-C-H   ──[O]──→   R-C-OH
     |
     H                    Aldehyde               Carboxylic acid
  (1° alcohol)
```

**PCC (Pyridinium Chlorochromate) - The Stopper:**

- Stops oxidation at **aldehyde** stage
- Used in **anhydrous** conditions (CH₂Cl₂ solvent)

**Memory Trick:** “**P**CC is **P**erfect for **P**artial oxidation - stops at aldehyde!”

**JEE Pattern:**

```fallback
Question: CH₃CH₂CH₂OH ──Reagent X──→ CH₃CH₂CHO (propanal, NOT propanoic acid)

Answer: PCC (not K₂Cr₂O₇!)
```

### Reaction 4: Esterification (Fischer Esterification)

**Reaction:**

```fallback
conc. H₂SO₄
R-OH + R'-COOH  ⇌  R'-COO-R + H₂O
 (alcohol) (acid)    (ester)
```

**Mechanism:**

```fallback
Step 1: Protonation of acid
       O                    OH⁺
       ‖                    |
R'-C-OH + H⁺  →   R'-C-OH

Step 2: Nucleophilic attack by alcohol
       OH⁺                      OH
       |                        |
R'-C-OH + R-OH  →   R'-C-OH
                                |
                               O-R

Step 3: Loss of H₂O
       OH                       O
       |                        ‖
R'-C-OH  →   R'-C-O-R + H₂O
       |
      O-R
```

**Important:** This is an **equilibrium** reaction!

To shift toward ester:

- Use **excess** alcohol or acid
- Remove water (use Dean-Stark apparatus)
- Use **conc. H₂SO₄** (dehydrating agent)

> **★ Key point · JEE Shortcut**
>
> **Quick Recognition:**
>
> - Alcohol + Carboxylic acid + acid catalyst → **Ester** + Water

> - Ester + Water + acid catalyst → **Alcohol** + Carboxylic acid (hydrolysis)
>
> Both use H₂SO₄, so check if water is added or removed!

### Reaction 5: Reaction with Metals (Na, K)

**Reaction:**

```fallback
2 R-OH + 2 Na  →  2 R-O⁻Na⁺ + H₂↑
                  (Sodium alkoxide)
```

**Test for -OH group:** Effervescence (H₂ gas) with Na metal

**Uses:**

- Confirms presence of -OH
- Prepares alkoxides (strong bases for organic synthesis)

**Comparison with Water:**

```fallback
2 H₂O + 2 Na  →  2 NaOH + H₂↑   (vigorous)
2 R-OH + 2 Na  →  2 R-ONa + H₂↑ (less vigorous, since R-OH is weaker acid than H₂O)
```

**Acidity Order:**

$$\boxed{\text{Water} > 1° \text{ alcohol} > 2° > 3°}$$

**Why?** +I effect of R groups destabilizes R-O⁻ (makes it less willing to donate H⁺)

---

## Memory Tricks & Patterns

### The Master Mnemonic: “**GRILLED DUCKS OFTEN ESCAPE HEAT**”

- **G**rignard → Alcohols of all degrees
- **R**eduction → Carbonyl to alcohol
- **I**dentification → Lucas test (1°, 2°, 3°)
- **L**ucas → Distinguishing test
- **L**iAlH₄ → Powerful reducer
- **E**limination → Alkenes (Saytzeff rule)
- **D**ehydration → 170°C for alkene, 140°C for ether
- **O**xidation → 1° → aldehyde → acid, 2° → ketone, 3° → no reaction
- **F**ischer → Esterification
- **T**ertiary → Most reactive for substitution/elimination

### Reactivity Pattern

**For SN1/E1 (with HX, dehydration):**

```fallback
3° > 2° > 1° (carbocation stability)
```

**For SN2 (with NaOH/H₂O):**

```fallback
1° > 2° > 3° (steric hindrance)
```

**For Oxidation:**

```fallback
1° (goes furthest) > 2° (stops at ketone) > 3° (no reaction)
```

**Memory Trick:** “**S**N**1** loves **S**tability (3° wins), **S**N**2** loves **S**pace (1° wins)”

### Common JEE Patterns

| Pattern Type | Example | Key Point |
| --- | --- | --- |
| **Reagent swap** | PCC vs K₂Cr₂O₇ | PCC stops at aldehyde |
| **Temperature change** | 140°C vs 170°C with H₂SO₄ | Ether vs alkene |
| **Mechanism switch** | 1° vs 3° with HBr | SN2 vs SN1 |
| **Grignard backward** | Given alcohol, find reagents | Check symmetry! |
| **Rearrangement** | 2° carbocation to 3° | Hydride/methyl shift |

---

## Special Case: Carbocation Rearrangements

> **★ Key point · JEE Advanced Alert!**
>
> In SN1/E1 reactions (3° and 2° alcohols), **carbocation rearrangements** can occur!
>
> **Types:**
>
> 1. **Hydride shift (H⁻ with 2 e⁻)**

> 2. **Methyl shift (CH₃⁻ with 2 e⁻)**
>
> **Rule:** Rearrangement happens if it creates a **more stable carbocation**

**Example:**

```fallback
CH₃-CH(OH)-CH(CH₃)₂  ──HBr──→  ?

Step 1: CH₃-CH⁺-CH(CH₃)₂  (2° carbocation)

Step 2: Hydride shift from adjacent carbon
        CH₃-CH₂-C⁺(CH₃)₂  (3° carbocation - MORE STABLE!)

Step 3: Br⁻ attacks
        CH₃-CH₂-C(Br)(CH₃)₂  (major product)
```

**Memory Trick:** “**C**arbocations **C**rave **C**omfort - they’ll rearrange to 3° if possible!”

**JEE Pattern:** They give you a 2° alcohol with HBr and expect you to predict rearrangement!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Alcohols with Phenols**
>
> **Wrong:** Treating benzyl alcohol (C₆H₅-CH₂-OH) like phenol

> **Right:** Benzyl alcohol is an alcohol (aliphatic -OH), NOT phenol (aromatic -OH)
>
> **Test:** Phenol gives violet color with FeCl₃; benzyl alcohol doesn’t!

> **⚠ Trap #2: NaBH₄ vs LiAlH₄**
>
> **Wrong:** Using NaBH₄ to reduce esters or carboxylic acids

> **Right:** NaBH₄ only reduces aldehydes and ketones. Use LiAlH₄ for esters/acids!
>
> **Mnemonic:** “**N**aBH₄ is **N**ot strong enough for esters!”

> **⚠ Trap #3: Forgetting Rearrangements**
>
> **Wrong:** Writing direct product without checking for possible carbocation rearrangement

> **Right:** Always check if 2° carbocation can become 3° through H⁻ or CH₃⁻ shift!
>
> **JEE Impact:** This single mistake costs 4 marks in JEE Advanced!

> **⚠ Trap #4: Saytzeff Rule Direction**
>
> **Wrong:** Thinking “more substituted” means more H atoms on alkene carbon

> **Right:** More substituted = more carbon groups attached to C=C carbons
>
> Example: CH₃-CH=CH₂ (less substituted) vs CH₃-CH=CH-CH₃ (more substituted)

> **⚠ Trap #5: 3° Alcohols and Oxidation**
>
> **Wrong:** Thinking 3° alcohols can be oxidized under harsh conditions

> **Right:** 3° alcohols have **no H on C-OH carbon**, so oxidation is impossible without breaking C-C bonds!
>
> **What happens:** Under very harsh conditions, C-C bond breaks (destructive)

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1.1**
>
> **Question:** Classify the following alcohols as 1°, 2°, or 3°:

> (a) CH₃-CH₂-CH₂-OH

> (b) (CH₃)₂CH-OH

> (c) (CH₃)₃C-OH

> (d) C₆H₅-CH₂-OH
>
> **Solution:**

> (a) **1° (primary)** - only 1 carbon attached to C-OH

> (b) **2° (secondary)** - 2 carbons attached to C-OH

> (c) **3° (tertiary)** - 3 carbons attached to C-OH

> (d) **1° (primary)** - only 1 carbon (the benzene ring) attached to C-OH; this is benzyl alcohol, not phenol!

> **↗ Connection · Problem 1.2**
>
> **Question:** Complete the reaction:
>
> ```fallback

> CH₃-CH₂-OH + Na → ?

> ```
>
> **Solution:**
>
> ```fallback

> 2 CH₃-CH₂-OH + 2 Na → 2 CH₃-CH₂-O⁻Na⁺ + H₂↑

>                       (Sodium ethoxide)

> ```
>
> **Observation:** Effervescence of H₂ gas (less vigorous than with water)

> **↗ Connection · Problem 1.3**
>
> **Question:** What product is formed when propan-2-ol is oxidized with K₂Cr₂O₇/H⁺?
>
> **Solution:**
>
> ```fallback

> K₂Cr₂O₇/H⁺

> CH₃-CH(OH)-CH₃  ──────────→  CH₃-CO-CH₃

> (Propan-2-ol, 2°)           (Propanone/acetone, ketone)

> ```
>
> **Why?** 2° alcohols are oxidized to **ketones** and stop there (no further oxidation possible).

### Level 2: JEE Main Style

> **↗ Connection · Problem 2.1**
>
> **Question:** Which reagent can be used to convert propene to propan-2-ol?
>
> (A) H₂O/H₂SO₄

> (B) BH₃/THF followed by H₂O₂/OH⁻

> (C) Both (A) and (B)

> (D) Neither (A) nor (B)
>
> **Solution: (A)**
>
> **Explanation:**
>
> ```fallback

> Option A (Markovnikov):

>        H₂SO₄/H₂O

> CH₃-CH=CH₂  ────────→  CH₃-CH(OH)-CH₃  ✓

>                       (propan-2-ol, 2°)
>
> Option B (Anti-Markovnikov):

>        (1) BH₃/THF

> CH₃-CH=CH₂  ────────────→  CH₃-CH₂-CH₂-OH  ✗

>        (2) H₂O₂/OH⁻      (propan-1-ol, 1°)

> ```
>
> **Key:** Markovnikov gives -OH to more substituted carbon!

> **↗ Connection · Problem 2.2**
>
> **Question:** Arrange the following in increasing order of reactivity towards Lucas reagent:

> I. Butan-1-ol

> II. Butan-2-ol

> III. 2-Methylpropan-2-ol
>
> (A) I < II < III

> (B) III < II < I

> (C) I < III < II

> (D) II < I < III
>
> **Solution: (A) I < II < III**
>
> **Explanation:**

> Lucas reagent (conc. HCl + ZnCl₂) distinguishes 1°, 2°, 3° alcohols via SN1 mechanism.
>
> Reactivity order: **3° > 2° > 1°** (carbocation stability)
>
> - I (Butan-1-ol): 1° → slowest (no turbidity at room temp)

> - II (Butan-2-ol): 2° → medium (turbidity in ~5 min)

> - III (2-Methylpropan-2-ol): 3° → fastest (immediate turbidity)
>
> **Therefore:** I < II < III ✓

> **↗ Connection · Problem 2.3**
>
> **Question:** Identify the major product:
>
> ```fallback

> conc. H₂SO₄

> CH₃-C(OH)(CH₃)-CH₂-CH₃  ──────────→  ?

>         170°C

> ```
>
> (A) CH₃-C(CH₃)=CH-CH₃

> (B) CH₂=C(CH₃)-CH₂-CH₃

> (C) Both in equal amounts

> (D) CH₃-O-CH₂-CH(CH₃)₂
>
> **Solution: (A) CH₃-C(CH₃)=CH-CH₃**
>
> **Explanation:**

> This is a dehydration reaction at 170°C → forms alkene (not ether at 140°C!)
>
> Possible alkenes:
>
> ```fallback

> Option A: CH₃-C(CH₃)=CH-CH₃  (tetrasubstituted alkene)

> Option B: CH₂=C(CH₃)-CH₂-CH₃  (trisubstituted alkene)

> ```
>
> **Saytzeff’s Rule:** More substituted alkene is major product!
>
> Option A has 4 R groups on C=C → **major product** ✓

### Level 3: JEE Advanced Style

> **↗ Connection · Problem 3.1**
>
> **Question:** A compound (A) with molecular formula C₄H₁₀O gives turbidity immediately with Lucas reagent. On oxidation with K₂Cr₂O₇/H⁺, (A) gives no product. Identify (A) and explain.
>
> **Solution:**
>
> **Analysis:**
>
> 1. **Immediate turbidity with Lucas reagent** → compound is **3° alcohol**

> 2. **No oxidation product** → confirms **3° alcohol** (no H on C-OH carbon)

> 3. Molecular formula C₄H₁₀O with 3° alcohol → must be **2-methylpropan-2-ol**
>
> **Structure of A:**
>
> ```fallback

> CH₃

>       |

> CH₃-C-OH

>       |

>       CH₃
>
> (2-methylpropan-2-ol, also called tert-butyl alcohol)

> ```
>
> **Explanation:**
>
> - 3 methyl groups attached to C-OH → 3° alcohol ✓

> - No H on C-OH → cannot be oxidized ✓

> - Forms 3° carbocation quickly → immediate turbidity with Lucas ✓

> **↗ Connection · Problem 3.2**
>
> **Question:** Predict the major product of the following reaction with mechanism:
>
> ```fallback

> CH₃-CH(OH)-CH(CH₃)₂  ──HBr──→  ?

> ```
>
> **Solution:**
>
> **Mechanism:**
>
> ```fallback

> Step 1: Protonation

> CH₃-CH(OH)-CH(CH₃)₂ + HBr → CH₃-CH(OH₂⁺)-CH(CH₃)₂
>
> Step 2: Loss of H₂O

> CH₃-CH(OH₂⁺)-CH(CH₃)₂ → CH₃-CH⁺-CH(CH₃)₂ + H₂O

>                          (2° carbocation)
>
> Step 3: Hydride shift (rearrangement!)

>          H

>          |

> CH₃-CH⁺-CH(CH₃)₂  →  CH₃-CH₂-C⁺(CH₃)₂

> (2° carbocation)      (3° carbocation - MORE STABLE!)
>
> Step 4: Nucleophilic attack

> CH₃-CH₂-C⁺(CH₃)₂ + Br⁻ → CH₃-CH₂-C(Br)(CH₃)₂

> ```
>
> **Major product:** CH₃-CH₂-C(Br)(CH₃)₂ (2-bromo-2-methylbutane)
>
> **Key Point:** Carbocation rearrangement from 2° to 3° via hydride shift!

> **↗ Connection · Problem 3.3**
>
> **Question:** A Grignard reagent reacts with formaldehyde to give compound (X). (X) on treatment with PCC gives (Y). (Y) undergoes Cannizzaro reaction. Identify (X) and (Y).
>
> **Solution:**
>
> **Working backward:**
>
> - (Y) undergoes **Cannizzaro reaction** → (Y) must be an **aldehyde without α-H** (like HCHO, C₆H₅CHO)

> - (X) + PCC → (Y, aldehyde) → (X) must be **1° alcohol**

> - R-MgX + HCHO → 1° alcohol → (X) = R-CH₂-OH
>
> **Simplest case:**
>
> - Grignard reagent: CH₃MgBr

> - Reaction: CH₃MgBr + HCHO → CH₃CH₂OH (X, ethanol)

> - Oxidation: CH₃CH₂OH + PCC → CH₃CHO (Y, acetaldehyde)
>
> **But wait!** CH₃CHO has α-H, so it doesn’t undergo Cannizzaro!
>
> **Correct case:**

> Must be aromatic aldehyde without α-H:
>
> - Grignard: C₆H₅MgBr

> - (X): C₆H₅-CH₂-OH (benzyl alcohol)

> - (Y): C₆H₅-CHO (benzaldehyde - **no α-H!**)
>
> **Answer:**
>
> - X = Benzyl alcohol (C₆H₅CH₂OH)

> - Y = Benzaldehyde (C₆H₅CHO)
>
> **Verification:** Benzaldehyde has no α-H (H on carbon next to CHO), so it undergoes Cannizzaro! ✓

> **↗ Connection · Problem 3.4 (Multi-Step Synthesis)**
>
> **Question:** Starting from propene, how would you synthesize propan-1-ol? Give reagents for each step.
>
> **Solution:**
>
> **Route 1: Hydroboration-Oxidation (Direct)**
>
> ```fallback

> Step 1: Hydroboration-oxidation

>        (1) BH₃/THF

> CH₃-CH=CH₂  ────────────→  CH₃-CH₂-CH₂-OH

>        (2) H₂O₂/OH⁻      (propan-1-ol)

> ```
>
> **One-step synthesis!** ✓
>
> **Route 2: Via Markovnikov alcohol (Alternative)**
>
> ```fallback

> Step 1: Markovnikov hydration

>        H₂SO₄/H₂O

> CH₃-CH=CH₂  ────────→  CH₃-CH(OH)-CH₃

>                       (propan-2-ol, 2°)
>
> Step 2: Oxidation to ketone

>        K₂Cr₂O₇/H⁺

> CH₃-CH(OH)-CH₃  ──────────→  CH₃-CO-CH₃

>                              (propanone)
>
> Step 3: Reduction

>        LiAlH₄

> CH₃-CO-CH₃  ──────→  CH₃-CH(OH)-CH₃

>                     (back to 2° alcohol)

> ```
>
> **This doesn’t work!** Reduction gives back 2° alcohol, not 1°!
>
> **Correct answer:** Use **Route 1** (hydroboration-oxidation) for Anti-Markovnikov addition!

---

## Quick Revision Box

| Situation | Formula/Approach | Key Point |
| --- | --- | --- |
| **Distinguish 1°, 2°, 3° alcohols** | Lucas reagent (HCl + ZnCl₂) | 3° immediate, 2° in 5 min, 1° no reaction |
| **Make 1° alcohol from alkene** | BH₃/THF, then H₂O₂/OH⁻ | Anti-Markovnikov |
| **Make 2° alcohol from alkene** | H₂SO₄/H₂O | Markovnikov |
| **Aldehyde → 1° alcohol** | LiAlH₄ or NaBH₄ | Both work |
| **Ester → 1° alcohol** | LiAlH₄ (NOT NaBH₄!) | NaBH₄ too weak |
| **Stop oxidation at aldehyde** | PCC | Anhydrous conditions |
| **Oxidize 1° to carboxylic acid** | K₂Cr₂O₇/H₂SO₄ | Aqueous, excess |
| **Make alkene from alcohol** | Conc. H₂SO₄, 170°C | Saytzeff rule |
| **Make ether from alcohol** | Conc. H₂SO₄, 140°C | Lower temp than alkene |
| **Reactivity with HX** | 3° > 2° > 1° | Carbocation stability |
| **Check for -OH group** | Na metal | Effervescence (H₂ gas) |
| **Formaldehyde + RMgX** | Gives 1° alcohol | R-CH₂-OH |
| **Aldehyde + RMgX** | Gives 2° alcohol | R-CH(OH)-R' |
| **Ketone + RMgX** | Gives 3° alcohol | R-C(OH)(R’)R" |

---

## Connection to Other Topics

**Prerequisites (Review these first):**

- [Hydrocarbons: Alkenes](https://jeenotes.in/chemistry/hydrocarbons/alkenes/) - for addition reactions
- [Organic Principles: Reaction Mechanisms](../../organic-principles/index.md) - SN1, SN2, E1, E2
- [Hydrocarbons: Alkyl Halides](../../halogens-compounds/alkyl-halides/index.md) - for substitution comparison

**Related Topics:**

- [Phenols](../phenols/index.md) - aromatic -OH compounds with different chemistry
- [Ethers](../ethers/index.md) - alcohol dehydration product
- [Aldehydes & Ketones](../aldehydes-ketones/index.md) - oxidation products of alcohols
- [Carboxylic Acids](../carboxylic-acids/index.md) - final oxidation product of 1° alcohols

**Advanced Applications:**

- [Nitrogen Compounds: Amines](../../nitrogen-compounds/index.md) - similar H-bonding, basicity comparison
- Grignard reagents (covered in detail in organometallics)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> **1. Classification is Key:**
>
> - 1°, 2°, 3° determines reactivity in SN1/E1 (3° > 2° > 1°) and oxidation (1° most, 3° none)

> - Lucas test distinguishes them in exam: 3° instant, 2° in 5 min, 1° no reaction
>
> **2. Preparation Master List:**
>
> - Alkenes → alcohols: Markovnikov (H₂SO₄/H₂O) vs Anti-Markovnikov (BH₃, then H₂O₂)

> - Carbonyls → alcohols: LiAlH₄ (powerful), NaBH₄ (selective for aldehydes/ketones only)

> - Grignard: Formaldehyde → 1°, aldehyde → 2°, ketone/ester → 3°
>
> **3. Oxidation Memory:**
>
> - 1° alcohol → aldehyde (PCC stops here) → carboxylic acid (K₂Cr₂O₇ goes further)

> - 2° alcohol → ketone (stops, can’t go further)

> - 3° alcohol → NO REACTION (no H on C-OH)
>
> **4. Reaction Mechanisms Matter:**
>
> - 3° and 2° alcohols: SN1/E1 with carbocation (watch for rearrangements!)

> - 1° alcohols: SN2 (no carbocation)

> - Temperature: 140°C → ether, 170°C → alkene
>
> **5. JEE Strategy:**
>
> - Memorize Lucas test, Grignard patterns, oxidation outcomes

> - Always check for carbocation rearrangements in 2°/3° alcohols

> - Know when to use PCC vs K₂Cr₂O₇, NaBH₄ vs LiAlH₄

> - Practice working backward from products to reagents
>
> **“In JEE, alcohols are not just functional groups - they’re the crossroads where substitution meets elimination, where oxidation meets reduction, and where carbocations love to rearrange. Master alcohols, and you’ve mastered organic chemistry’s foundation!”**

---

**Next Topic:** [Phenols →](../phenols/index.md) - Discover why that -OH on benzene ring changes everything!

From TestGuru · our mock-test platform

## You've read Alcohols: From Hand Sanitizers to JEE Champions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=oxygen-compounds&tg_exam=jee-main&tg_page=%2Fchemistry%2Foxygen-compounds%2Falcohols%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/oxygen-compounds/alcohols/",this.page.identifier="/chemistry/oxygen-compounds/alcohols/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="reactionMechanism" id="anim-reactionMechanism-1795396420121460987"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-reactionMechanism-1795396420121460987")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/oxygen-compounds/alcohols/](https://jeenotes.in/chemistry/oxygen-compounds/alcohols/) · raw HTML: `offline/chemistry/oxygen-compounds/alcohols/index.html`_
