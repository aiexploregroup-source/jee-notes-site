---
title: "Inverse Trigonometric Functions: Reversing the Circle"
source: "https://jeenotes.in/mathematics/trigonometry/inverse-trig/"
description: "Master inverse trig functions, principal values, domains, ranges, and properties for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 6"
html: "../../../../offline/mathematics/trigonometry/inverse-trig/index.html"
extracted: "2026-11-23"
---

> Master inverse trig functions, principal values, domains, ranges, and properties for JEE Main and Advanced

## The Hook: The GPS Problem

> **★ Key point · Connect: Navigation → Inverse Functions**
>
> Imagine you’re watching **Mission: Impossible** and Ethan Hunt needs to calculate the **angle** to throw his grappling hook. He knows:
>
> - Distance to building: 20 meters (adjacent)

> - Height of window: 15 meters (opposite)
>
> He needs the **angle** θ. He can’t use sin θ = 15/hypotenuse because he doesn’t know hypotenuse yet. But he CAN use:
>
> $$\theta = \tan^{-1}\left(\frac{15}{20}\right) = \tan^{-1}(0.75) \approx 36.87°$$
>
> **That’s an inverse trig function!** It answers: “What angle gives me this ratio?”
>
> **JEE Reality:** Inverse trig shows up in **calculus integration**, limits, complex numbers, and physics. Master it, and you’ve unlocked 8-10 marks in JEE!
>
> **Question:** Why is sin⁻¹(sin 200°) ≠ 200°? By the end of this, you’ll understand principal values and domain restrictions.

---

## The Core Concept

### What Are Inverse Trigonometric Functions?

**Normal trig function:** Given angle θ → Find ratio

- sin 30° = 1/2

**Inverse trig function:** Given ratio → Find angle

- sin⁻¹(1/2) = 30°

**In simple terms:** If y = sin x means “x is the angle whose sine is y,” then x = sin⁻¹ y means “x is the angle whose sine is y.”

**Critical Difference from Algebra:**

- In algebra: If y = x², then x = ±√y (two values)
- In trig: If y = sin x, then x = sin⁻¹ y (infinite values possible!)
- **Solution:** We restrict to **principal value** (one specific value in a defined range)

---

## The Six Inverse Functions

### Notation (Both are correct!)

| Function | Notation 1 | Notation 2 | Reads As |
| --- | --- | --- | --- |
| Inverse Sine | sin⁻¹ x | arcsin x | “Sine inverse x” or “Arc sine x” |
| Inverse Cosine | cos⁻¹ x | arccos x | “Cosine inverse x” |
| Inverse Tangent | tan⁻¹ x | arctan x | “Tangent inverse x” |
| Inverse Cotangent | cot⁻¹ x | arccot x | “Cotangent inverse x” |
| Inverse Secant | sec⁻¹ x | arcsec x | “Secant inverse x” |
| Inverse Cosecant | cosec⁻¹ x | arccosec x | “Cosecant inverse x” |

**Warning:** sin⁻¹ x ≠ 1/sin x ≠ cosec x

- sin⁻¹ x is the **inverse function**
- (sin x)⁻¹ = 1/sin x is the **reciprocal**

---

## Memory Tricks & Patterns

### Domain and Range: The “Mirror Rule”

For a function and its inverse, **domain and range are swapped!**

$$\boxed{
\begin{array}{|c|c|c|}
\hline
\textbf{Function} & \textbf{Domain} & \textbf{Range (Principal Value)} \\
\hline
\sin^{-1} x & [-1, 1] & [-\pi/2, \pi/2] \text{ or } [-90°, 90°] \\
\cos^{-1} x & [-1, 1] & [0, \pi] \text{ or } [0°, 180°] \\
\tan^{-1} x & \mathbb{R} \text{ (all reals)} & (-\pi/2, \pi/2) \text{ or } (-90°, 90°) \\
\cot^{-1} x & \mathbb{R} & (0, \pi) \text{ or } (0°, 180°) \\
\sec^{-1} x & (-\infty, -1] \cup [1, \infty) & [0, \pi] - \{\pi/2\} \\
\csc^{-1} x & (-\infty, -1] \cup [1, \infty) & [-\pi/2, \pi/2] - \{0\} \\
\hline
\end{array}
}$$

### Mnemonic: “SCOOT at 90, REST at 180”

**For ranges:**

- **S**in⁻¹ and **C**sc⁻¹: centered at **0**, span ±90° → **[-90°, 90°]**
- **T**an⁻¹: centered at **0**, approaches ±90° → **(-90°, 90°)** (open interval)
- **C**os⁻¹, **S**ec⁻¹, **Cot**⁻¹: start at **0**, go to **180°** → **[0°, 180°]**

**Visual Memory:**

```fallback
sin⁻¹ range        cos⁻¹ range
        |                    |
      90° ----             180° ----
        |                    |
      0° ----              90° ----
        |                    |
     -90° ----               0° ----
```

### Why These Specific Ranges?

**Principle:** Choose range where original function is **one-to-one** (passes horizontal line test).

**Example for sin⁻¹:**

- Sin x repeats every 360°
- We need a portion where it’s strictly increasing (one y for each x)
- **[-90°, 90°]** works! Sin increases from -1 to +1 here
- This becomes the **range** of sin⁻¹ x

---

## Principal Value vs General Value

### Principal Value (What Calculators Give)

**Definition:** The **unique value** of the inverse function in its defined range.

**Example:**

```fallback
sin⁻¹(1/2) = 30° (principal value)

But sin 150° = 1/2 also! And sin 390°, sin 510°, ...
We choose 30° because it's in [-90°, 90°]
```

### Why sin⁻¹(sin θ) ≠ θ Always

$$\boxed{\sin^{-1}(\sin\theta) = \theta \text{ ONLY if } \theta \in [-90°, 90°]}$$

**Example:**

```fallback
sin⁻¹(sin 200°) ≠ 200°

Step 1: Find sin 200°
sin 200° = sin(180° + 20°) = -sin 20°

Step 2: Find sin⁻¹(-sin 20°)
sin⁻¹(-sin 20°) = -sin⁻¹(sin 20°) = -20°

Answer: -20° (not 200°!)
```

**JEE Trap:** Questions often ask sin⁻¹(sin 5π/4). Answer is NOT 5π/4!

---

## Important Properties and Identities

### Complementary Angle Relations

$$\boxed{
\begin{align}
\sin^{-1} x + \cos^{-1} x &= \frac{\pi}{2} \text{ (always!)} \\
\tan^{-1} x + \cot^{-1} x &= \frac{\pi}{2} \\
\sec^{-1} x + \csc^{-1} x &= \frac{\pi}{2}
\end{align}
}$$

**Memory Trick:** **“Sine and Cosine are 90° Complementary Partners”**

**Proof for sin⁻¹ x + cos⁻¹ x = π/2:**

```fallback
Let sin⁻¹ x = θ
Then sin θ = x
And cos(90° - θ) = x (co-function identity)
So 90° - θ = cos⁻¹ x
Therefore θ + cos⁻¹ x = 90°
sin⁻¹ x + cos⁻¹ x = π/2
```

**JEE Application:** If you forget cos⁻¹ formula, use cos⁻¹ x = π/2 - sin⁻¹ x!

### Negative Argument Properties

$$\boxed{
\begin{align}
\sin^{-1}(-x) &= -\sin^{-1} x \\
\tan^{-1}(-x) &= -\tan^{-1} x \\
\csc^{-1}(-x) &= -\csc^{-1} x \\
\cos^{-1}(-x) &= \pi - \cos^{-1} x \\
\sec^{-1}(-x) &= \pi - \sec^{-1} x \\
\cot^{-1}(-x) &= \pi - \cot^{-1} x
\end{align}
}$$

**Pattern Recognition:**

- **Sin, Tan, Csc are ODD functions:** f(-x) = -f(x)
- **Cos, Sec, Cot use the π shift:** f(-x) = π - f(x)

**Mnemonic:** **“STC are Odd, CSC use Pi”** (Sine-Tan-Cosec vs Cos-Sec-Cot)

### Addition Formulas

$$\boxed{
\begin{align}
\tan^{-1} x + \tan^{-1} y &= \tan^{-1}\left(\frac{x+y}{1-xy}\right), \quad xy < 1 \\
\tan^{-1} x + \tan^{-1} y &= \pi + \tan^{-1}\left(\frac{x+y}{1-xy}\right), \quad xy > 1, x > 0 \\
\tan^{-1} x - \tan^{-1} y &= \tan^{-1}\left(\frac{x-y}{1+xy}\right) \\
\end{align}
}$$

**Memory Trick:** Same as tan(A+B) formula, but with tan⁻¹ on the outside!

**JEE Shortcut:** If xy < 1, simple formula. If xy > 1, add π.

### Special Double Argument Formulas

$$\boxed{
\begin{align}
2\sin^{-1} x &= \sin^{-1}(2x\sqrt{1-x^2}), \quad |x| \le \tfrac{1}{\sqrt{2}} \\
2\cos^{-1} x &= \cos^{-1}(2x^2 - 1), \quad 0 \le x \le 1 \\
2\tan^{-1} x &= \tan^{-1}\left(\frac{2x}{1-x^2}\right), \quad |x| < 1 \\
2\tan^{-1} x &= \pi + \tan^{-1}\left(\frac{2x}{1-x^2}\right), \quad x > 1 \\
2\tan^{-1} x &= -\pi + \tan^{-1}\left(\frac{2x}{1-x^2}\right), \quad x < -1
\end{align}
}$$

**Derivation Hint:** Let θ = tan⁻¹ x, then tan θ = x. Use tan 2θ = 2 tan θ/(1 - tan²θ).

---

## Conversion Between Inverse Functions

### sin⁻¹ x in Terms of Others

$$\boxed{
\begin{align}
\sin^{-1} x &= \cos^{-1}\sqrt{1-x^2} \\
&= \tan^{-1}\left(\frac{x}{\sqrt{1-x^2}}\right) \\
&= \cot^{-1}\left(\frac{\sqrt{1-x^2}}{x}\right)
\end{align}
}$$

**Visual Method:** Draw a right triangle!

```fallback
If sin θ = x, then:
       •
      /|
   1 / | x (opposite)
    /  |
   /θ  |
  •----•
    √(1-x²) (adjacent)

From this triangle:
cos θ = √(1-x²)
tan θ = x/√(1-x²)
```

### tan⁻¹ x in Terms of sin⁻¹ and cos⁻¹

$$\boxed{
\begin{align}
\tan^{-1} x &= \sin^{-1}\left(\frac{x}{\sqrt{1+x^2}}\right) \\
&= \cos^{-1}\left(\frac{1}{\sqrt{1+x^2}}\right), \quad x \ge 0
\end{align}
}$$

**Domain caveat:** The $\sin^{-1}$ form holds for all real $x$, but the $\cos^{-1}$ form holds only for $x \ge 0$. For $x < 0$, $\cos^{-1}\!\left(\tfrac{1}{\sqrt{1+x^2}}\right)$ is positive while $\tan^{-1}x$ is negative — use $\tan^{-1}x = -\cos^{-1}\!\left(\tfrac{1}{\sqrt{1+x^2}}\right)$ instead.

**Triangle for tan⁻¹ x:**

```fallback
If tan θ = x, then:
       •
      /|
  √(1+x²) / | x (opposite)
    /  |
   /θ  |
  •----•
    1 (adjacent)

sin θ = x/√(1+x²)
cos θ = 1/√(1+x²)
```

---

## When to Use Inverse Trig Functions

> **★ Key point · Decision Tree for JEE Problems**
>
> **Integration of 1/√(1-x²)?**

> → Answer: sin⁻¹ x + C
>
> **Integration of 1/(1+x²)?**

> → Answer: tan⁻¹ x + C
>
> **Simplifying sin⁻¹ x + cos⁻¹ x?**

> → Use: sin⁻¹ x + cos⁻¹ x = π/2
>
> **Finding tan⁻¹ 1 + tan⁻¹ 2 + tan⁻¹ 3?**

> → Use addition formula (watch for xy > 1 case!)
>
> **Solving equations like sin⁻¹ x = cos⁻¹ x?**

> → Use: x = π/4 (since both must equal π/4 to sum to π/2)
>
> **Differentiation of inverse trig functions?**

> → Use standard formulas (d/dx sin⁻¹ x = 1/√(1-x²), etc.)
>
> **Given right triangle sides, find angle?**

> → Use inverse trig directly (arctan(opp/adj), arcsin(opp/hyp), etc.)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Inverse with Reciprocal**
>
> **Wrong:** sin⁻¹ x = 1/sin x ❌
>
> **Right:**
>
> - sin⁻¹ x is the **inverse function** (arcsin x)

> - 1/sin x is the **reciprocal** (cosec x)
>
> **Example:**
>
> ```fallback

> sin⁻¹(1/2) = 30° ✓

> 1/sin(1/2) = 1/0.479 ≈ 2.09 (completely different!)

> ```
>
> **Fix:** Use **arcsin** notation if confused, or think “sin to the power minus 1” means inverse operation, not reciprocal.

> **⚠ Trap #2: Ignoring Domain Restrictions**
>
> **Wrong:** sin⁻¹(2) exists ❌
>
> **Right:** sin⁻¹ x is defined ONLY for x ∈ [-1, 1]
>
> **Why:** Sine values can never exceed 1 or go below -1!
>
> **JEE Trap:**
>
> ```fallback

> Find sin⁻¹(sin 7π/6)
>
> Step 1: sin 7π/6 = sin(π + π/6) = -sin π/6 = -1/2

> Step 2: sin⁻¹(-1/2) = -π/6 (in range [-π/2, π/2])
>
> Answer: -π/6 (NOT 7π/6!)

> ```

> **⚠ Trap #3: Addition Formula Domain Error**
>
> **Wrong:** tan⁻¹ 2 + tan⁻¹ 3 = tan⁻¹[(2+3)/(1-6)] = tan⁻¹(-1) = -π/4
>
> **Right:**
>
> ```fallback

> Here xy = 2·3 = 6 > 1 and x, y > 0
>
> So tan⁻¹ 2 + tan⁻¹ 3 = π + tan⁻¹[(2+3)/(1-6)]

>                         = π + tan⁻¹(-1)

>                         = π - π/4

>                         = 3π/4

> ```
>
> **Fix:** **Always check** if xy < 1 or xy > 1 before applying tan⁻¹ addition formula!

> **⚠ Trap #4: Assuming sin⁻¹(sin θ) = θ**
>
> **Wrong:** sin⁻¹(sin 250°) = 250° ❌
>
> **Right:**
>
> ```fallback

> Step 1: Bring angle to standard position

> sin 250° = sin(180° + 70°) = -sin 70°
>
> Step 2: Apply sin⁻¹

> sin⁻¹(-sin 70°) = -sin⁻¹(sin 70°) = -70°

> ```
>
> **General Rule:**
>
> $$\sin^{-1}(\sin\theta) = \begin{cases}

> \theta & \text{if } \theta \in [-90°, 90°] \\

> 180° - \theta & \text{if } \theta \in [90°, 270°] \\

> \theta - 360° & \text{if } \theta \in [270°, 450°]

> \end{cases}$$
>
> **Fix:** First reduce the argument to [-1, 1], then find principal value in range.

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic Evaluation**
>
> **Question:** Find the exact value of sin⁻¹(√3/2)
>
> **Solution:**

> We need angle θ such that sin θ = √3/2 and θ ∈ [-90°, 90°]
>
> From standard values: sin 60° = √3/2
>
> Since 60° ∈ [-90°, 90°]:
>
> **Answer:** sin⁻¹(√3/2) = 60° = π/3

> **↗ Connection · Problem 2: Complementary Relation**
>
> **Question:** Prove that sin⁻¹(3/5) + cos⁻¹(3/5) = π/2
>
> **Solution:**

> Use the identity: sin⁻¹ x + cos⁻¹ x = π/2 for all x ∈ [-1, 1]
>
> Since 3/5 ∈ [-1, 1], the identity holds.
>
> Therefore: sin⁻¹(3/5) + cos⁻¹(3/5) = π/2 ✓
>
> **Alternatively (verification):**
>
> ```fallback

> Let sin⁻¹(3/5) = α, so sin α = 3/5
>
> Draw right triangle:

>      •

>     /|

>  5 / | 3

>   /  |

>  /α  |

> •----•

>   4
>
> cos α = 4/5

> So cos⁻¹(4/5) = α = sin⁻¹(3/5)
>
> But we need cos⁻¹(3/5):

> If sin α = 3/5, then cos(90° - α) = 3/5

> So 90° - α = cos⁻¹(3/5)

> α + cos⁻¹(3/5) = 90° ✓

> ```
>
> **Proved!**

> **↗ Connection · Problem 3: Negative Argument**
>
> **Question:** Find tan⁻¹(-1)
>
> **Solution:**

> Method 1: Use property tan⁻¹(-x) = -tan⁻¹(x)
>
> ```fallback

> tan⁻¹(-1) = -tan⁻¹(1) = -π/4 = -45°

> ```
>
> Method 2: Direct
>
> ```fallback

> We need θ such that tan θ = -1 and θ ∈ (-90°, 90°)

> tan(-45°) = -1 ✓

> ```
>
> **Answer:** -π/4 or -45°

### Level 2: JEE Main

> **↗ Connection · Problem 4: Simplification Using Identity**
>
> **Question:** Simplify: sin⁻¹(3/5) + cos⁻¹(12/13)
>
> **Solution:**

> Let α = sin⁻¹(3/5) and β = cos⁻¹(12/13)
>
> Find sin α and cos α:
>
> ```fallback

> sin α = 3/5

> cos α = √(1 - 9/25) = 4/5

> ```
>
> Find sin β and cos β:
>
> ```fallback

> cos β = 12/13

> sin β = √(1 - 144/169) = 5/13

> ```
>
> Use sin(α + β) = sin α cos β + cos α sin β:
>
> ```fallback

> sin(α + β) = (3/5)(12/13) + (4/5)(5/13)

>            = 36/65 + 20/65

>            = 56/65

> ```
>
> Therefore: α + β = sin⁻¹(56/65)
>
> **Answer:** sin⁻¹(56/65)
>
> **Alternative:** If you recognize 3-4-5 and 5-12-13 Pythagorean triples, use geometry!

> **↗ Connection · Problem 5: Addition Formula Application**
>
> **Question:** Find tan⁻¹(1/2) + tan⁻¹(1/3)
>
> **Solution:**

> Use formula: tan⁻¹ x + tan⁻¹ y = tan⁻¹[(x+y)/(1-xy)] when xy < 1
>
> Here x = 1/2, y = 1/3:
>
> ```fallback

> xy = (1/2)(1/3) = 1/6 < 1 ✓
>
> tan⁻¹(1/2) + tan⁻¹(1/3) = tan⁻¹[(1/2 + 1/3)/(1 - 1/6)]

>                           = tan⁻¹[(5/6)/(5/6)]

>                           = tan⁻¹(1)

>                           = π/4

> ```
>
> **Answer:** π/4 or 45°

> **↗ Connection · Problem 6: Domain Check**
>
> **Question:** Find the value of sin⁻¹(sin 3π/4)
>
> **Solution:**

> **Wrong approach:** sin⁻¹(sin 3π/4) = 3π/4 ❌ (3π/4 is NOT in [-π/2, π/2])
>
> **Correct approach:**
>
> ```fallback

> Step 1: Find sin 3π/4

> sin 3π/4 = sin(π - π/4) = sin π/4 = √2/2
>
> Step 2: Find principal value

> sin⁻¹(√2/2) = π/4 (since π/4 ∈ [-π/2, π/2])

> ```
>
> **Answer:** π/4 (NOT 3π/4!)
>
> **General Pattern:**
>
> ```fallback

> For θ ∈ [π/2, π]:

> sin⁻¹(sin θ) = π - θ
>
> Verify: sin⁻¹(sin 3π/4) = π - 3π/4 = π/4 ✓

> ```

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Sum of Inverse Tangents**
>
> **Question:** Prove that tan⁻¹(1/2) + tan⁻¹(1/5) + tan⁻¹(1/8) = π/4
>
> **Solution:**

> Step 1: Add first two terms using formula
>
> ```fallback

> tan⁻¹(1/2) + tan⁻¹(1/5)

> = tan⁻¹[(1/2 + 1/5)/(1 - 1/10)]

> = tan⁻¹[(7/10)/(9/10)]

> = tan⁻¹(7/9)

> ```
>
> Step 2: Add result with third term
>
> ```fallback

> tan⁻¹(7/9) + tan⁻¹(1/8)

> = tan⁻¹[(7/9 + 1/8)/(1 - 7/72)]

> = tan⁻¹[(56/72 + 9/72)/(65/72)]

> = tan⁻¹[(65/72)/(65/72)]

> = tan⁻¹(1)

> = π/4

> ```
>
> **Proved!**
>
> **JEE Pattern:** Such sums are designed to collapse to π/4 or other standard values!

> **↗ Connection · Problem 8: Complex Simplification**
>
> **Question:** Simplify: 2 tan⁻¹(1/3) - tan⁻¹(1/7)
>
> **Solution:**

> Step 1: Use 2 tan⁻¹ x formula
>
> ```fallback

> 2 tan⁻¹(1/3) = tan⁻¹[2(1/3)/(1 - 1/9)]

>              = tan⁻¹[(2/3)/(8/9)]

>              = tan⁻¹(2/3 × 9/8)

>              = tan⁻¹(3/4)

> ```
>
> Step 2: Subtract using formula tan⁻¹ x - tan⁻¹ y = tan⁻¹[(x-y)/(1+xy)]
>
> ```fallback

> tan⁻¹(3/4) - tan⁻¹(1/7)

> = tan⁻¹[(3/4 - 1/7)/(1 + 3/28)]

> = tan⁻¹[(21/28 - 4/28)/(31/28)]

> = tan⁻¹[(17/28)/(31/28)]

> = tan⁻¹(17/31)

> ```
>
> **Answer:** tan⁻¹(17/31)

> **↗ Connection · Problem 9: JEE Advanced 2017 Type**
>
> **Question:** The value of cos⁻¹(cos 10) is:

> (Where 10 is in radians)
>
> **Solution:**

> **Key insight:** 10 radians is NOT in [0, π] which is the range of cos⁻¹!
>
> Step 1: Find equivalent angle in [0, 2π]
>
> ```fallback

> 10 rad ≈ 10 rad

> Since 2π ≈ 6.28, we have:

> 10 = 2π - (2π - 10) = 2π - (6.28 - 10)

> Wait, 10 > 2π, so 10 = 3·2π + remainder

> 10 ÷ 6.28 ≈ 1.59

> 10 = 1·(2π) + (10 - 2π)

> 10 - 2π ≈ 10 - 6.28 = 3.72 rad

> ```
>
> Step 2: Since cos is 2π periodic:
>
> ```fallback

> cos 10 = cos(10 - 2π) = cos(3.72...)
>
> But 3.72 > π, so use:

> cos θ = cos(2π - θ)

> cos 3.72 = cos(2π - 3.72) = cos(6.28 - 3.72) = cos 2.56

> ```
>
> Actually, simpler approach:
>
> **For cos⁻¹(cos θ):**
>
> - If θ ∈ [0, π]: answer is θ

> - If θ ∈ (π, 2π]: answer is 2π - θ

> - If θ > 2π: reduce modulo 2π first
>
> ```fallback

> 10 rad = 10 - 2π ≈ 3.72 rad (after one cycle)

> Since 3.72 > π:

> cos⁻¹(cos 10) = cos⁻¹(cos 3.72) = 2π - 3.72 ≈ 2.56
>
> But exact form:

> 10 = 3π + (10 - 3π)

> cos 10 = cos(10 - 2π) since cos has period 2π

> 10 - 2π ≈ 3.717
>
> Since 10 - 2π > π:

> Answer = 2π - (10 - 2π) = 4π - 10

> ```
>
> **Answer:** 4π - 10 rad
>
> **JEE Trick:** For cos⁻¹(cos θ), reduce to [0, 2π] then to [0, π] using symmetry!

---

## Integration and Differentiation (Quick Reference)

### Derivatives of Inverse Trig Functions

$$\boxed{
\begin{align}
\frac{d}{dx}\sin^{-1} x &= \frac{1}{\sqrt{1-x^2}}, \quad |x| < 1 \\
\frac{d}{dx}\cos^{-1} x &= \frac{-1}{\sqrt{1-x^2}}, \quad |x| < 1 \\
\frac{d}{dx}\tan^{-1} x &= \frac{1}{1+x^2} \\
\frac{d}{dx}\cot^{-1} x &= \frac{-1}{1+x^2} \\
\frac{d}{dx}\sec^{-1} x &= \frac{1}{|x|\sqrt{x^2-1}}, \quad |x| > 1 \\
\frac{d}{dx}\csc^{-1} x &= \frac{-1}{|x|\sqrt{x^2-1}}, \quad |x| > 1
\end{align}
}$$

**Pattern:** Co-functions (cos⁻¹, cot⁻¹, csc⁻¹) have **negative** derivatives!

### Standard Integrals

$$\boxed{
\begin{align}
\int \frac{1}{\sqrt{1-x^2}} dx &= \sin^{-1} x + C \\
\int \frac{1}{1+x^2} dx &= \tan^{-1} x + C \\
\int \frac{1}{x\sqrt{x^2-1}} dx &= \sec^{-1} x + C
\end{align}
}$$

**JEE High-Yield:** The tan⁻¹ x integral appears in 50% of inverse trig integration problems!

---

## Quick Revision Box

| Function | Domain | Range | Key Property |
| --- | --- | --- | --- |
| sin⁻¹ x | [-1, 1] | [-π/2, π/2] | sin⁻¹(-x) = -sin⁻¹ x |
| cos⁻¹ x | [-1, 1] | [0, π] | cos⁻¹(-x) = π - cos⁻¹ x |
| tan⁻¹ x | ℝ | (-π/2, π/2) | tan⁻¹(-x) = -tan⁻¹ x |
| sin⁻¹ + cos⁻¹ | — | — | = π/2 (always) |
| tan⁻¹ x + tan⁻¹ y | xy < 1 | — | = tan⁻¹[(x+y)/(1-xy)] |
| sin⁻¹(sin θ) | — | — | = θ only if θ ∈ range |

---

## Links to Related Topics

**Prerequisites:**

- [Trigonometric Identities](../trig-identities/index.md) - Essential for simplification
- [Trigonometric Equations](../trig-equations/index.md) - Principal values connection

**Connected Concepts:**

- [Limits and Continuity](../../limits-continuity-differentiability/index.md) - Limits involving inverse trig
- [Differentiation](../../limits-continuity-differentiability/index.md) - Chain rule with inverse trig
- [Integration Techniques](../../integral-calculus/integration-techniques/index.md) - Standard integrals
- [Complex Numbers - Euler’s Form](../../complex-numbers/index.md) - Argument of complex numbers
- [Definite Integrals](../../integral-calculus/definite-integrals/index.md) - Area under curves

**What’s Next:**

- [Properties of Triangles](../properties-triangles/index.md) - Apply inverse trig to find angles
- [Differential Calculus](../../limits-continuity-differentiability/index.md) - Advanced applications

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Inverse ≠ Reciprocal:** sin⁻¹ x is the inverse function (arcsin), NOT 1/sin x. Keep this crystal clear!

> 2. **Domain is Sacred:** sin⁻¹ and cos⁻¹ work ONLY for |x| ≤ 1. Going outside this gives no real solution.

> 3. **Principal Value Range Matters:** sin⁻¹(sin θ) = θ ONLY if θ is in [-π/2, π/2]. Otherwise, reduce to principal range first.

> 4. **The Magic π/2 Formula:** sin⁻¹ x + cos⁻¹ x = π/2 is your best friend. Use it to convert between functions instantly.

> 5. **Addition Formulas Have Conditions:** For tan⁻¹ x + tan⁻¹ y, check if xy < 1 or xy > 1. Formula changes with π addition!

> 6. **Integration Shortcuts:** Memorize the big 3: ∫1/√(1-x²) = sin⁻¹ x, ∫1/(1+x²) = tan⁻¹ x, ∫1/(x√(x²-1)) = sec⁻¹ x. These save minutes!
>
> **Exam Strategy:** When stuck on inverse trig, draw a right triangle! Visual representation often reveals the answer faster than algebra.
>
> **“Inverse trig is not about formulas—it’s about understanding that every ratio has an angle, and we’re just finding it within the right neighborhood (principal range).”**

---

**Weightage:**

- JEE Main: 1-2 direct questions + 3-4 in calculus (integration, differentiation)
- JEE Advanced: 1 question + heavily used in complex numbers and calculus

**Time-Saving Tip:** Create a “Domain-Range Cheat Card” with all 6 inverse functions. Laminate it. Look at it daily for 2 weeks. You’ll never forget!

From TestGuru · our mock-test platform

## You've read Inverse Trigonometric Functions: Reversing the Circle.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=trigonometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Ftrigonometry%2Finverse-trig%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/trigonometry/inverse-trig/",this.page.identifier="/mathematics/trigonometry/inverse-trig/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="trigCircle" id="anim-trigCircle-1795396422493425088"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-trigCircle-1795396422493425088")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/trigonometry/inverse-trig/](https://jeenotes.in/mathematics/trigonometry/inverse-trig/) · raw HTML: `offline/mathematics/trigonometry/inverse-trig/index.html`_
