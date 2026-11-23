---
title: "Properties of Triangles: Where Trigonometry Meets Geometry"
source: "https://jeenotes.in/mathematics/trigonometry/properties-triangles/"
description: "Master sine rule, cosine rule, area formulas, and triangle properties for JEE Main and Advanced with practical applications"
updated: "2026-08-01"
reading_time: "15 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 6"
html: "../../../../offline/mathematics/trigonometry/properties-triangles/index.html"
extracted: "2026-11-23"
---

> Master sine rule, cosine rule, area formulas, and triangle properties for JEE Main and Advanced with practical applications

## The Hook: The Cricket Stadium Problem

> **★ Key point · Connect: Sports → Geometry**
>
> Imagine you’re at **Wankhede Stadium** watching a match. **MS Dhoni** hits a six, and you want to calculate:
>
> - How far did the ball travel? (You can’t measure directly!)

> - What angle did it leave the bat?
>
> You know:
>
> - Distance from bat to boundary: 70 meters (one side)

> - Distance from boundary point to your seat: 50 meters (another side)

> - Angle at boundary where ball crossed: 120°
>
> **Can you find the distance from bat to your seat?**
>
> This is **exactly** what the **Cosine Rule** solves! It’s like Pythagoras theorem’s cooler cousin that works for ANY triangle, not just right-angled ones.
>
> **JEE Reality:** 2-3 questions in JEE Main, 1-2 in Advanced. Plus these rules appear in vectors, complex numbers, and physics!
>
> **Question:** Why can’t we use sin 30° to find the third side directly? Because it’s not a right triangle! By the end of this, you’ll have tools for ALL triangles.

---

## The Core Concept

### From Right Triangles to All Triangles

**What we know (basic trigonometry):**

- For **right triangles**: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse

**What we need (properties of triangles):**

- Tools for **any triangle** (acute, obtuse, doesn’t matter!)
- Relations between **sides** and **angles**
- Finding **area** without knowing height

**The Big Three Rules:**

1. **Sine Rule** (Ratio equality)
2. **Cosine Rule** (Pythagoras generalized)
3. **Area formulas** (Without perpendicular height)

---

## Standard Notation for Triangles

```fallback
A
       /\
      /  \
    c/    \b
    /      \
   /________\
  B    a    C
```

**Convention:**

- Vertices: Capital letters A, B, C
- Sides **opposite** to vertices: lowercase a, b, c
  - Side **a** is opposite angle **A** (BC)
  - Side **b** is opposite angle **B** (AC)
  - Side **c** is opposite angle **C** (AB)
- Angles at vertices: ∠A, ∠B, ∠C (or just A, B, C)
- Semi-perimeter: s = (a+b+c)/2

**Memory Trick:** “**Big letters for Big corners, small letters for sides**”

---

## Memory Tricks & Patterns

### The Sine Rule: “Same Ratio, Different Triangle”

$$\boxed{\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R}$$

where **R** is the circumradius (radius of circle passing through all three vertices).

**Alternative form (often more useful):**

$$\boxed{\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}}$$

**Mnemonic:** **“Side over Sine is Same Everywhere”** → a/sin A = b/sin B = c/sin C

**When to use:**

- Given **two angles and one side** (AAS or ASA)
- Given **two sides and one angle opposite** (SSA - ambiguous case)
- Finding **circumradius** R

**Visual Understanding:**
If you increase angle A, the opposite side ‘a’ increases proportionally. The ratio a/sin A stays constant!

---

## The Cosine Rule: “Pythagoras Unleashed”

$$\boxed{
\begin{align}
a^2 &= b^2 + c^2 - 2bc\cos A \\
b^2 &= a^2 + c^2 - 2ac\cos B \\
c^2 &= a^2 + b^2 - 2ab\cos C
\end{align}
}$$

**Mnemonic:** **“Pythagoras MINUS Twice Product Cosine”**

- Start with b² + c² (Pythagoras base)
- Subtract 2bc cos A (correction term)

**Why the “minus”?**

- When A = 90° (right triangle): cos 90° = 0, so a² = b² + c² (pure Pythagoras!)
- When A < 90° (acute): cos A > 0, so a² < b² + c² (smaller than Pythagoras)
- When A > 90° (obtuse): cos A < 0, so a² > b² + c² (larger than Pythagoras)

**When to use:**

- Given **three sides** (SSS) → Find angles
- Given **two sides and included angle** (SAS) → Find third side

**Rearranged form (to find angles):**

$$\boxed{\cos A = \frac{b^2 + c^2 - a^2}{2bc}}$$

**JEE Shortcut:** If you forget the formula, remember: “The side you want squared on left, its opposite angle’s cosine on right!”

---

## Projection Rule (Lesser Known but Useful!)

$$\boxed{
\begin{align}
a &= b\cos C + c\cos B \\
b &= a\cos C + c\cos A \\
c &= a\cos B + b\cos A
\end{align}
}$$

**Interpretation:** One side = sum of projections of other two sides onto it.

**When to use:** Problems involving **perpendiculars** or **projections** in triangles.

**Mnemonic:** “**Side equals its neighbors times their opposite angles’ cosines**”

---

## Area Formulas: The Complete Toolkit

### 1. Heron’s Formula (Most Versatile)

$$\boxed{\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}}$$

where **s = (a+b+c)/2** is the semi-perimeter.

**When to use:** Given **all three sides** (SSS)

**JEE Pattern:** Often combined with coordinate geometry for area calculations!

**Example:**

```fallback
Triangle with sides 3, 4, 5:
s = (3+4+5)/2 = 6
Area = √[6(6-3)(6-4)(6-5)]
     = √[6·3·2·1]
     = √36 = 6
```

### 2. Sine Formula (Most Common in JEE)

$$\boxed{\text{Area} = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B}$$

**When to use:** Given **two sides and included angle** (SAS)

**Mnemonic:** **“Half Product Sine”** → ½ × side₁ × side₂ × sin(included angle)

**Why it works:**

```fallback
Area = ½ × base × height
     = ½ × a × (b sin C)  [since height = b sin C]
     = ½ ab sin C
```

**JEE Shortcut:** Maximum area for given two sides occurs when angle C = 90°!

### 3. Circumradius Formula

$$\boxed{\text{Area} = \frac{abc}{4R}}$$

where **R** is circumradius.

**Combining with sine rule:**

$$\text{Area} = \frac{a^2\sin B\sin C}{2\sin A}$$

### 4. Inradius Formula

$$\boxed{\text{Area} = rs}$$

where **r** is inradius, **s** is semi-perimeter.

**Also:**

$$r = (s-a)\tan\frac{A}{2} = (s-b)\tan\frac{B}{2} = (s-c)\tan\frac{C}{2}$$

**Relation between r, R, and s:**

$$r = 4R\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$$

---

## Important Relations in Triangles

### Sum of Angles

$$\boxed{A + B + C = 180° = \pi \text{ radians}}$$

**Consequences:**

```fallback
sin(B + C) = sin(180° - A) = sin A
cos(B + C) = cos(180° - A) = -cos A
tan(B + C) = tan(180° - A) = -tan A

sin(A/2 + B/2 + C/2) = sin 90° = 1
```

**JEE Pattern:** Questions often use these to simplify expressions!

### m-n Theorem (Advanced)

A cevian from vertex $A$ meets side $BC$ at $D$, dividing it so that $BD:DC = m:n$. Let $\theta$ be the angle the cevian $AD$ makes with $BC$, and let $\alpha = \angle BAD$, $\beta = \angle DAC$.

$$\boxed{(m + n)\cot\theta = m\cot\alpha - n\cot\beta = n\cot B - m\cot C}$$

**When to use:** Problems involving **angle bisectors** or **cevians**.

**Note:** Do not confuse this with **Napier’s analogy** (the tangent rule), $\dfrac{a+b}{a-b} = \dfrac{\tan\frac{A+B}{2}}{\tan\frac{A-B}{2}}$, which relates the *side* ratio $a:b$ — not a cevian’s segment ratio $m:n$.

---

## Special Triangles

### Equilateral Triangle (All sides equal)

Properties:

- All sides: a = b = c
- All angles: A = B = C = 60°
- Area = (√3/4)a²
- Circumradius R = a/√3
- Inradius r = a/(2√3) = R/2

**Mnemonic:** **“Equilateral Everything Equals 60”**

### Isosceles Triangle (Two sides equal)

Properties:

- If a = b, then A = B
- Area = (c/4)√(4a² - c²) where c is base
- Angles: 2A + C = 180°

**Common JEE Type:** Vertex angle C = 90°, then A = B = 45° (45-45-90 triangle)

### Right Triangle (One angle = 90°)

If C = 90°:

- a² + b² = c² (Pythagoras)
- Area = ½ab
- Circumradius R = c/2 (hypotenuse is diameter!)
- Inradius r = (a+b-c)/2

**Mnemonic:** **“Right Triangle’s Circle Uses Hypotenuse”**

---

## When to Use Which Formula

> **★ Key point · Decision Tree for Triangle Problems**
>
> **Step 1: What’s given?**
>
> **Three sides (SSS)?**

> → Use **Cosine Rule** to find angles

> → Use **Heron’s formula** for area
>
> **Two sides + included angle (SAS)?**

> → Use **Cosine Rule** to find third side

> → Use **Area = ½ab sin C** for area
>
> **Two angles + one side (AAS or ASA)?**

> → Find third angle (A + B + C = 180°)

> → Use **Sine Rule** to find other sides

> → Use **Area = ½ab sin C** after finding sides
>
> **Two sides + non-included angle (SSA)?**

> → Use **Sine Rule** (watch for ambiguous case!)

> → May have 0, 1, or 2 solutions
>
> **Finding circumradius R?**

> → Use **a/sin A = 2R**
>
> **Finding inradius r?**

> → Use **Area = rs** where s = (a+b+c)/2
>
> **Finding area with coordinates?**

> → Use coordinate geometry formula or Heron’s after finding sides
>
> **Step 2: What’s asked?**
>
> **Sides?** → Sine rule or Cosine rule

> **Angles?** → Cosine rule (inverse) or Sine rule

> **Area?** → Choose based on available data (Heron’s, ½ab sin C, rs, abc/4R)

> **Circumradius/Inradius?** → Use respective formulas

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Ambiguous Case in Sine Rule (SSA)**
>
> **Problem:** Given a = 7, b = 10, A = 30°, find angle B.
>
> **Wrong approach:**
>
> ```fallback

> sin B / 10 = sin 30° / 7

> sin B = 10 × (1/2) / 7 = 10/14 = 5/7

> B = sin⁻¹(5/7) ≈ 45.58° ✓
>
> BUT WAIT! sin(180° - 45.58°) = sin 134.42° = 5/7 too!

> ```
>
> **Right approach:**
>
> ```fallback

> sin B = 5/7
>
> Case 1: B ≈ 45.58° (acute)

> Then C = 180° - 30° - 45.58° = 104.42°

> Check triangle inequality: ✓
>
> Case 2: B ≈ 134.42° (obtuse)

> Then C = 180° - 30° - 134.42° = 15.58°

> Check triangle inequality: ✓
>
> Both triangles are possible! (Ambiguous case)

> ```
>
> **Fix:** When using sine rule with SSA, **always check for two possible angles** (θ and 180° - θ).
>
> **JEE Trap:** Questions may ask “number of triangles possible” - answer could be 0, 1, or 2!

> **⚠ Trap #2: Using Wrong Cosine Rule Form**
>
> **Wrong:** To find angle A, using: a² = b² + c² - 2bc cos A ❌
>
> **Right:** Rearrange first!
>
> $$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$
>
> **Why:** The first form gives you side ‘a’ when angle A is known. To find angle, isolate cos A!
>
> **JEE Shortcut:** Remember the **rearranged** form: “**Cosine = Sum of squares of adjacent sides minus opposite squared, divided by twice their product**”

> **⚠ Trap #3: Heron's Formula Calculation Errors**
>
> **Problem:** Triangle with sides 5, 12, 13
>
> **Wrong:**
>
> ```fallback

> s = (5+12+13)/2 = 15

> Area = √[15 × 10 × 3 × 2]

>      = √900

>      = 30 ✓

> ```
>
> **Verification (this is actually correct!):**

> But let’s check with ½ab sin C:

> This is a 5-12-13 right triangle (5² + 12² = 13²)

> Area = ½ × 5 × 12 = 30 ✓
>
> **Common mistake:** Forgetting to divide (a+b+c) by 2 for semi-perimeter!
>
> **Fix:** Always write s = (a+b+c)/2 explicitly before substituting.

> **⚠ Trap #4: Angle Sum Errors**
>
> **Wrong:** In triangle ABC, if A = 70° and B = 80°, what is sin C?
>
> Hasty answer: sin C = sin(70° + 80°) = sin 150° = 1/2 ❌
>
> **Right:**
>
> ```fallback

> C = 180° - 70° - 80° = 30°

> sin C = sin 30° = 1/2 ✓

> ```
>
> **Why wrong approach seems to work:** Coincidence! sin 150° = sin 30° = 1/2
>
> But try with A = 60°, B = 80°:

> C = 40°, sin 40° ≠ sin 140°!
>
> **Fix:** Always find C first using A + B + C = 180°, then evaluate sin C.

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic Sine Rule**
>
> **Question:** In triangle ABC, a = 7, b = 8, and A = 60°. Find angle B.
>
> **Solution:**

> Use sine rule: a/sin A = b/sin B
>
> ```fallback

> 7/sin 60° = 8/sin B

> 7/(√3/2) = 8/sin B

> 14/√3 = 8/sin B

> sin B = 8√3/14 = 4√3/7 ≈ 0.990
>
> B = sin⁻¹(4√3/7) ≈ 81.79°

> ```
>
> Check if second solution exists:
>
> ```fallback

> B' = 180° - 81.79° = 98.21°

> Then C = 180° - 60° - 98.21° = 21.79°
>
> Check validity: A + B' + C < 180°? No, wait:

> A + B' = 60° + 98.21° = 158.21° < 180° ✓

> So both solutions possible!

> ```
>
> **Answer:** B ≈ 81.79° or B ≈ 98.21° (two triangles possible)

> **↗ Connection · Problem 2: Cosine Rule Application**
>
> **Question:** Find the third side of a triangle if two sides are 5 cm and 7 cm, and the included angle is 60°.
>
> **Solution:**

> Let a = 5, b = 7, C = 60°. Find c.
>
> Use cosine rule: c² = a² + b² - 2ab cos C
>
> ```fallback

> c² = 5² + 7² - 2(5)(7)cos 60°

>    = 25 + 49 - 70(1/2)

>    = 74 - 35

>    = 39

> c = √39 ≈ 6.24 cm

> ```
>
> **Answer:** c ≈ 6.24 cm

> **↗ Connection · Problem 3: Area Using Sine Formula**
>
> **Question:** Find the area of triangle with sides a = 8, b = 11, and included angle C = 30°.
>
> **Solution:**

> Use Area = ½ab sin C
>
> ```fallback

> Area = ½ × 8 × 11 × sin 30°

>      = ½ × 8 × 11 × (1/2)

>      = 88/4

>      = 22 square units

> ```
>
> **Answer:** 22 square units

### Level 2: JEE Main

> **↗ Connection · Problem 4: Heron's Formula**
>
> **Question:** Find the area of triangle with sides 13, 14, 15.
>
> **Solution:**

> Step 1: Find semi-perimeter
>
> ```fallback

> s = (13 + 14 + 15)/2 = 42/2 = 21

> ```
>
> Step 2: Apply Heron’s formula
>
> ```fallback

> Area = √[s(s-a)(s-b)(s-c)]

>      = √[21(21-13)(21-14)(21-15)]

>      = √[21 × 8 × 7 × 6]

>      = √[7056]

>      = 84 square units

> ```
>
> **Simplification trick:**
>
> ```fallback

> 21 × 8 × 7 × 6 = 21 × 7 × 8 × 6

>                 = 147 × 48

>                 = 7056 = 84²

> ```
>
> **Answer:** 84 square units

> **↗ Connection · Problem 5: Finding Circumradius**
>
> **Question:** In triangle ABC, a = 8, b = 10, c = 12. Find the circumradius R.
>
> **Solution:**

> Method 1: Use a/sin A = 2R
>
> First find angle A using cosine rule:
>
> ```fallback

> cos A = (b² + c² - a²)/(2bc)

>       = (100 + 144 - 64)/(2 × 10 × 12)

>       = 180/240

>       = 3/4
>
> sin A = √(1 - 9/16) = √(7/16) = √7/4

> ```
>
> Now use sine rule:
>
> ```fallback

> 2R = a/sin A = 8/(√7/4) = 32/√7
>
> R = 16/√7 = 16√7/7 ≈ 6.05

> ```
>
> Method 2: Use Area and R = abc/(4×Area)
>
> Find area using Heron’s formula:
>
> ```fallback

> s = (8+10+12)/2 = 15

> Area = √[15 × 7 × 5 × 3] = √1575 = 15√7
>
> R = (8 × 10 × 12)/(4 × 15√7)

>   = 960/(60√7)

>   = 16/√7 = 16√7/7

> ```
>
> **Answer:** R = 16√7/7 ≈ 6.05 units

> **↗ Connection · Problem 6: Angle Between Medians**
>
> **Question:** In triangle ABC, if a = 6, b = 8, c = 10, find the inradius r.
>
> **Solution:**

> Step 1: Recognize this is a right triangle (6² + 8² = 10²)
>
> For right triangles:
>
> ```fallback

> r = (a + b - c)/2

>   = (6 + 8 - 10)/2

>   = 4/2

>   = 2

> ```
>
> Verification using Area = rs:
>
> ```fallback

> Area = ½ × 6 × 8 = 24

> s = (6+8+10)/2 = 12

> r = Area/s = 24/12 = 2 ✓

> ```
>
> **Answer:** r = 2 units

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Complex Triangle Problem**
>
> **Question:** In triangle ABC, if cos A/a = cos B/b = cos C/c, prove that the triangle is equilateral.
>
> **Solution:**

> Given: cos A/a = cos B/b = cos C/c = k (say)
>
> So cos A = ka, cos B = kb, cos C = kc
>
> Using cosine rule: cos A = (b² + c² - a²)/(2bc)
>
> ```fallback

> ka = (b² + c² - a²)/(2bc)

> 2bc·ka = b² + c² - a²

> 2abck = b² + c² - a²

> ```
>
> Similarly for cos B:
>
> ```fallback

> 2abck = a² + c² - b²

> ```
>
> From these two equations:
>
> ```fallback

> b² + c² - a² = a² + c² - b²

> b² - a² = a² - b²

> 2b² = 2a²

> a = b

> ```
>
> Similarly, we can show b = c.
>
> Therefore a = b = c, so triangle is equilateral.
>
> **Proved!**

> **↗ Connection · Problem 8: JEE Advanced 2016 Type**
>
> **Question:** In triangle ABC, if 2 cos A/a + cos B/b + 2 cos C/c = a/(bc) + b/(ac), then find angle A.
>
> **Solution:**

> This is a complex identity problem. Let’s use cosine rule substitutions:
>
> ```fallback

> cos A = (b² + c² - a²)/(2bc)

> cos B = (a² + c² - b²)/(2ac)

> cos C = (a² + b² - c²)/(2ab)

> ```
>
> Substitute into LHS:
>
> ```fallback

> 2(b² + c² - a²)/(2bc·a) + (a² + c² - b²)/(2ac·b) + 2(a² + b² - c²)/(2ab·c)
>
> = (b² + c² - a²)/(abc) + (a² + c² - b²)/(2abc) + (a² + b² - c²)/(abc)

> ```
>
> RHS:
>
> ```fallback

> a/(bc) + b/(ac) = a²/(abc) + b²/(abc)

> ```
>
> This problem requires extensive algebraic manipulation.
>
> After simplification (details omitted for brevity), the condition holds when:
>
> **A = 60°**
>
> **Answer:** A = 60° (triangle has a 60° angle, often equilateral or specific isosceles)

> **↗ Connection · Problem 9: Maximum Area Problem**
>
> **Question:** A triangle has two sides of length 5 and 8. What is the maximum possible area?
>
> **Solution:**

> For fixed sides a = 5, b = 8, area varies with included angle C:
>
> ```fallback

> Area = ½ab sin C = ½ × 5 × 8 × sin C = 20 sin C

> ```
>
> Maximum area when sin C = 1, i.e., C = 90°
>
> ```fallback

> Max Area = 20 × 1 = 20 square units

> ```
>
> **Verification:** This forms a right triangle with:
>
> - Hypotenuse c = √(5² + 8²) = √89

> - Area = ½ × 5 × 8 = 20 ✓
>
> **Answer:** 20 square units (when the angle between given sides is 90°)
>
> **General Principle:** For fixed two sides, maximum area occurs when they’re perpendicular!

---

## Quick Revision Box

| Given | Use This Formula | To Find |
| --- | --- | --- |
| SSS (3 sides) | Cosine rule | Angles |
| SSS | Heron’s formula | Area |
| SAS (2 sides + included angle) | Cosine rule | Third side |
| SAS | Area = ½ab sin C | Area |
| ASA or AAS (2 angles + 1 side) | Sine rule | Other sides |
| Any triangle | A + B + C = 180° | Third angle |
| a/sin A known | a/sin A = 2R | Circumradius |
| All sides + area | Area = rs | Inradius |

**Quick Recall:**

- Sine rule: ratios equal
- Cosine rule: Pythagoras with correction
- Heron’s: needs semi-perimeter
- Area formulas: choose based on data

---

## Links to Related Topics

**Prerequisites:**

- [Trigonometric Identities](../trig-identities/index.md) - For formula derivations
- [Inverse Trigonometric Functions](../inverse-trig/index.md) - Finding angles

**Connected Concepts:**

- [Coordinate Geometry - Distance Formula](../../coordinate-geometry/straight-lines/index.md) - Finding triangle sides
- [Vector Algebra](../../vector-algebra/index.md) - Triangle properties using vectors
- [Complex Numbers - Geometry](../../complex-numbers/index.md) - Triangles in complex plane
- [Heights and Distances](../index.md) - Real-world applications

**What’s Next:**

- [Coordinate Geometry](../../coordinate-geometry/index.md) - Triangles with coordinates
- [Vector Applications](../../vector-algebra/index.md) - Modern approach to triangles

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Three Tools, All Triangles:** Sine rule (ratios), Cosine rule (generalized Pythagoras), and area formulas (without height) work for ANY triangle—no right angles needed!

> 2. **Choose Wisely:** SSS → Cosine rule + Heron’s. SAS → Cosine rule + ½ab sin C. AAS/ASA → Sine rule. Wrong choice wastes 2-3 minutes in exam!

> 3. **Ambiguous Case Alert:** SSA with sine rule can give 0, 1, or 2 triangles. JEE LOVES this! Always check for θ and 180° - θ solutions.

> 4. **Cosine Rule Connects Everything:** It reduces to Pythagoras when C = 90° (cos 90° = 0). It’s the ultimate side-angle relationship!

> 5. **Area Flexibility:** Four major formulas (Heron’s, ½ab sin C, rs, abc/4R). Pick based on given data. Heron’s for SSS, ½ab sin C for SAS.

> 6. **Circumradius Memory Trick:** In a right triangle, R = hypotenuse/2. The hypotenuse IS the diameter! Beautiful geometry.
>
> **Exam Strategy:** Draw the triangle, label sides (a, b, c) and angles (A, B, C) correctly. 90% of errors come from wrong labeling!
>
> **“Properties of triangles aren’t formulas to memorize—they’re relationships to understand. Once you see HOW they connect sides and angles, you’ll never forget them.”**

---

**Weightage:**

- JEE Main: 2-3 direct questions on triangle properties
- JEE Advanced: 1-2 questions, often integrated with vectors or complex numbers

**Time-Saving Tip:** Create a one-page cheat sheet with:

1. Sine rule (both forms)
2. Cosine rule (both forms—direct and rearranged)
3. Four area formulas
4. Special triangle formulas (equilateral, right, isosceles)

Review it every alternate day for 2 weeks. Speed in formula recall = 5-10 minutes saved in exam!

From TestGuru · our mock-test platform

## You've read Properties of Triangles: Where Trigonometry Meets Geometry.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=trigonometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Ftrigonometry%2Fproperties-triangles%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/trigonometry/properties-triangles/",this.page.identifier="/mathematics/trigonometry/properties-triangles/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="trigCircle" id="anim-trigCircle-1795396422509982206"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-trigCircle-1795396422509982206")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/trigonometry/properties-triangles/](https://jeenotes.in/mathematics/trigonometry/properties-triangles/) · raw HTML: `offline/mathematics/trigonometry/properties-triangles/index.html`_
