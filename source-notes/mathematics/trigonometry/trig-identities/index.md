---
title: "Trigonometric Identities: The Foundation of JEE Trigonometry"
source: "https://jeenotes.in/mathematics/trigonometry/trig-identities/"
description: "Master fundamental trigonometric identities, compound angles, and transformation formulas with memory tricks and JEE strategies"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 6"
html: "../../../../offline/mathematics/trigonometry/trig-identities/index.html"
extracted: "2026-11-23"
---

> Master fundamental trigonometric identities, compound angles, and transformation formulas with memory tricks and JEE strategies

## The Hook: The Circle That Rules JEE

> **★ Key point · Connect: Movies → Mathematics**
>
> Remember the **Interstellar** spinning spaceship scene? Or the **Inception** rotating hallway fight? Both involve circular motion, and guess what powers the math behind all rotations? **Trigonometric identities!**
>
> Here’s the deal: In JEE, nearly **every** rotation problem, oscillation question, and complex number challenge traces back to these identities. Master them, and you’ve unlocked 15-20% of your JEE Math paper.
>
> **Question:** Why do sin²θ + cos²θ always equal 1, no matter what angle you pick? By the end of this, you’ll not just know it—you’ll *see* it.

---

## The Core Concept

### What Are Trigonometric Identities?

**In simple terms:** Trigonometric identities are equations involving trig functions that are **always true** for all values where they’re defined. Think of them as the “multiplication tables” of trigonometry—once you know them, complex problems become simple.

### The Basic Ratios (Quick Refresher)

In a right triangle:

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

**Reciprocal ratios:**

$$\csc\theta = \frac{1}{\sin\theta}, \quad \sec\theta = \frac{1}{\cos\theta}, \quad \cot\theta = \frac{1}{\tan\theta}$$

**Quotient identities:**

$$\tan\theta = \frac{\sin\theta}{\cos\theta}, \quad \cot\theta = \frac{\cos\theta}{\sin\theta}$$

**Standard values:**

| Angle | 0° | 30° | 45° | 60° | 90° |
| --- | --- | --- | --- | --- | --- |
| sin | 0 | 1/2 | 1/√2 | √3/2 | 1 |
| cos | 1 | √3/2 | 1/√2 | 1/2 | 0 |
| tan | 0 | 1/√3 | 1 | √3 | ∞ |

### The Fundamental Identity: Pythagoras in Disguise

$$\boxed{\sin^2\theta + \cos^2\theta = 1}$$

**Why it works:** Drop a perpendicular from any point on the unit circle. By Pythagoras theorem: (opposite)² + (adjacent)² = (hypotenuse)². Since hypotenuse = 1 for unit circle, we get sin²θ + cos²θ = 1.

**Visual proof:**

---

## Memory Tricks & Patterns

### The “All Students Take Calculus” Rule

**Memory Trick for Sign Convention:**

**“All Students Take Calculus”** or **“Add Sugar To Coffee”**

- **Quadrant I (0° to 90°):** **A**ll functions positive
- **Quadrant II (90° to 180°):** **S**ine (and cosec) positive only
- **Quadrant III (180° to 270°):** **T**an (and cot) positive only
- **Quadrant IV (270° to 360°):** **C**os (and sec) positive only

### The Three Sacred Identities

$$\boxed{
\begin{align}
\sin^2\theta + \cos^2\theta &= 1 \\
1 + \tan^2\theta &= \sec^2\theta \\
1 + \cot^2\theta &= \csc^2\theta
\end{align}
}$$

**Mnemonic:** **“Some People Can”**

- **S**in² + **P**ower 1 = **C**os² (rearranged: sin² + cos² = 1)
- **1** + **T**an² = **S**ec² (divide first identity by cos²θ)
- **1** + **C**ot² = **C**osec² (divide first identity by sin²θ)

---

## Compound Angle Formulas

### Addition Formulas (The Building Blocks)

$$\boxed{
\begin{align}
\sin(A + B) &= \sin A \cos B + \cos A \sin B \\
\sin(A - B) &= \sin A \cos B - \cos A \sin B \\
\cos(A + B) &= \cos A \cos B - \sin A \sin B \\
\cos(A - B) &= \cos A \cos B + \sin A \sin B
\end{align}
}$$

**Memory Trick:** **“Sine Changes, Cosine Doesn’t”**

- For **sin(A + B)**: both terms are **additions** (sin·cos + cos·sin)
- For **cos(A + B)**: sign **changes** to minus (cos·cos - sin·sin)

**Alternative Mnemonic:** **“SCP CPS”** for sin(A+B) = **S**in**C**os + **P**lus **C**os**S**in

**JEE Pattern:** 60% of compound angle questions test sin(A+B) and cos(A-B) together!

### Tangent Addition Formulas

$$\boxed{
\begin{align}
\tan(A + B) &= \frac{\tan A + \tan B}{1 - \tan A \tan B} \\
\tan(A - B) &= \frac{\tan A - \tan B}{1 + \tan A \tan B}
\end{align}
}$$

**Memory Trick:** Notice the **sign flip** in denominator:

- Addition: minus in bottom
- Subtraction: plus in bottom

**“Opposite Day in Denominator!”**

---

## Double Angle Formulas

### The Power Trio

$$\boxed{
\begin{align}
\sin 2\theta &= 2\sin\theta\cos\theta \\
\cos 2\theta &= \cos^2\theta - \sin^2\theta \\
&= 2\cos^2\theta - 1 \\
&= 1 - 2\sin^2\theta \\
\tan 2\theta &= \frac{2\tan\theta}{1-\tan^2\theta}
\end{align}
}$$

**Memory Trick for sin 2θ:** **“2 Sinners Cosplaying”** → 2 sin cos

**Memory Trick for cos 2θ three forms:**

1. **C² - S²** (difference of squares, basic form)
2. **2C² - 1** (substitute S² = 1 - C²)
3. **1 - 2S²** (substitute C² = 1 - S²)

**JEE Shortcut:** If question has **sin θ** given, use form 3. If **cos θ** given, use form 2!

---

## Triple Angle Formulas

$$\boxed{
\begin{align}
\sin 3\theta &= 3\sin\theta - 4\sin^3\theta \\
\cos 3\theta &= 4\cos^3\theta - 3\cos\theta \\
\tan 3\theta &= \frac{3\tan\theta - \tan^3\theta}{1 - 3\tan^2\theta}
\end{align}
}$$

**Pattern Recognition:** Notice the **3-4 pattern**:

- sin 3θ: coefficient **3** for linear term, **4** for cubic
- cos 3θ: coefficient **4** for cubic, **3** for linear
- They’re **flipped**!

**Memory Trick:** **“Sine starts with 3, Cosine starts with 4”** (in decreasing power order)

---

## Transformation Formulas (Product to Sum)

### Product → Sum Conversions

$$\boxed{
\begin{align}
\sin A \cos B &= \frac{1}{2}[\sin(A+B) + \sin(A-B)] \\
\cos A \sin B &= \frac{1}{2}[\sin(A+B) - \sin(A-B)] \\
\cos A \cos B &= \frac{1}{2}[\cos(A+B) + \cos(A-B)] \\
\sin A \sin B &= \frac{1}{2}[\cos(A-B) - \cos(A+B)]
\end{align}
}$$

**Memory Trick:** **“SC adds, CC adds, SS reverses”**

- **S**in·**C**os: both sines with **+**
- **C**os·**C**os: both cosines with **+**
- **S**in·**S**in: both cosines but **reversed signs** (A-B first, then -)

### Sum → Product Conversions

$$\boxed{
\begin{align}
\sin C + \sin D &= 2\sin\left(\frac{C+D}{2}\right)\cos\left(\frac{C-D}{2}\right) \\
\sin C - \sin D &= 2\cos\left(\frac{C+D}{2}\right)\sin\left(\frac{C-D}{2}\right) \\
\cos C + \cos D &= 2\cos\left(\frac{C+D}{2}\right)\cos\left(\frac{C-D}{2}\right) \\
\cos C - \cos D &= -2\sin\left(\frac{C+D}{2}\right)\sin\left(\frac{C-D}{2}\right)
\end{align}
}$$

**Master Mnemonic:** **“Sums Start with Sin, Differences are Different”**

**Substitute C = A+B, D = A-B to derive product formulas!**

**JEE Time-Saver:** These formulas convert products (hard to integrate/differentiate) into sums (easy)!

---

## Half Angle Formulas

$$\boxed{
\begin{align}
\sin\frac{\theta}{2} &= \pm\sqrt{\frac{1-\cos\theta}{2}} \\
\cos\frac{\theta}{2} &= \pm\sqrt{\frac{1+\cos\theta}{2}} \\
\tan\frac{\theta}{2} &= \frac{1-\cos\theta}{\sin\theta} = \frac{\sin\theta}{1+\cos\theta}
\end{align}
}$$

**Memory Pattern:**

- **sin θ/2:** has **minus** (1 - cos θ)
- **cos θ/2:** has **plus** (1 + cos θ)

**JEE Trick:** tan θ/2 has **two forms**—use whichever is given in the question!

---

## When to Use Each Identity

> **★ Key point · Decision Tree for JEE Problems**
>
> **Given sin θ or cos θ → Find other functions?**

> → Use sin²θ + cos²θ = 1
>
> **Given tan θ → Find sec θ or vice versa?**

> → Use 1 + tan²θ = sec²θ
>
> **Expression has 2θ → Simplify to θ?**

> → Use double angle formulas
>
> **Need to find sin 15° or cos 75°?**

> → Use sin(45° - 30°) or cos(45° + 30°) with compound angles
>
> **Product of two trig functions → Need to integrate/differentiate?**

> → Convert product to sum first
>
> **Sum of two trig functions → Need to simplify?**

> → Convert sum to product
>
> **Integration of form ∫ sin² x dx or ∫ cos² x dx?**

> → Use cos 2x formulas to reduce power

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Sign Errors in Compound Angles**
>
> **Wrong:** cos(A + B) = cos A cos B + sin A sin B ❌
>
> **Right:** cos(A + B) = cos A cos B **- sin A sin B** ✓
>
> **Why students mess up:** They confuse it with sin(A + B) which has +.
>
> **Fix:** Remember “Cosine Changes sign” → minus for addition.

> **⚠ Trap #2: Forgetting Domain for Half-Angle**
>
> **Wrong:** sin(θ/2) = √[(1 - cos θ)/2] without considering sign
>
> **Right:** sin(θ/2) = **±**√[(1 - cos θ)/2]
>
> **Fix:** Check which **quadrant** θ/2 lies in using ASTC rule!

> **⚠ Trap #3: tan 2θ Denominator**
>
> **Wrong:** tan 2θ = 2 tan θ / (1 + tan²θ)
>
> **Right:** tan 2θ = 2 tan θ / (1 **-** tan²θ)
>
> **Why it matters:** Gets you to undefined at θ = 45° (which is correct behavior).

> **⚠ Trap #4: Product-to-Sum Formula Selection**
>
> **Common Error:** Using wrong formula for sin A sin B
>
> **Wrong:** sin A sin B = ½[cos(A-B) + cos(A+B)]
>
> **Right:** sin A sin B = ½[cos(A-B) **- cos(A+B)**]
>
> **Mnemonic:** “**SS** is the **rebel**—it has reversed sign!”

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic Identity Application**
>
> **Question:** If sin θ = 3/5 and θ is in the second quadrant, find cos θ and tan θ.
>
> **Solution:**

> Step 1: Use sin²θ + cos²θ = 1
>
> ```fallback

> (3/5)² + cos²θ = 1

> 9/25 + cos²θ = 1

> cos²θ = 16/25

> cos θ = ±4/5

> ```
>
> Step 2: Since θ is in quadrant II, cos θ is negative (by ASTC rule)
>
> ```fallback

> cos θ = -4/5

> ```
>
> Step 3: tan θ = sin θ / cos θ
>
> ```fallback

> tan θ = (3/5) / (-4/5) = -3/4

> ```
>
> **Answer:** cos θ = -4/5, tan θ = -3/4

> **↗ Connection · Problem 2: Compound Angle**
>
> **Question:** Find the exact value of sin 75°.
>
> **Solution:**

> Step 1: Write 75° = 45° + 30°

> Step 2: Apply sin(A + B) = sin A cos B + cos A sin B
>
> ```fallback

> sin 75° = sin(45° + 30°)

>         = sin 45° cos 30° + cos 45° sin 30°

>         = (√2/2)(√3/2) + (√2/2)(1/2)

>         = (√6/4) + (√2/4)

>         = (√6 + √2)/4

> ```
>
> **Answer:** sin 75° = (√6 + √2)/4

> **↗ Connection · Problem 3: Double Angle**
>
> **Question:** If tan θ = 2, find tan 2θ.
>
> **Solution:**

> Use tan 2θ = 2 tan θ / (1 - tan²θ)
>
> ```fallback

> tan 2θ = 2(2) / (1 - 2²)

>        = 4 / (1 - 4)

>        = 4 / (-3)

>        = -4/3

> ```
>
> **Answer:** tan 2θ = -4/3

### Level 2: JEE Main

> **↗ Connection · Problem 4: Identity Proof**
>
> **Question:** Prove that: (sin 3θ + sin θ)/(cos 3θ + cos θ) = tan 2θ
>
> **Solution:**

> Use sum-to-product formulas:
>
> Numerator:
>
> ```fallback

> sin 3θ + sin θ = 2 sin[(3θ+θ)/2] cos[(3θ-θ)/2]

>                = 2 sin 2θ cos θ

> ```
>
> Denominator:
>
> ```fallback

> cos 3θ + cos θ = 2 cos[(3θ+θ)/2] cos[(3θ-θ)/2]

>                = 2 cos 2θ cos θ

> ```
>
> Therefore:
>
> ```fallback

> (sin 3θ + sin θ)/(cos 3θ + cos θ) = (2 sin 2θ cos θ)/(2 cos 2θ cos θ)

>                                    = sin 2θ / cos 2θ

>                                    = tan 2θ

> ```
>
> **Proved!**

> **↗ Connection · Problem 5: Multiple Identities**
>
> **Question:** If sin θ + cos θ = √2, find sin⁴θ + cos⁴θ.
>
> **Solution:**

> Step 1: Square both sides
>
> ```fallback

> (sin θ + cos θ)² = 2

> sin²θ + cos²θ + 2 sin θ cos θ = 2

> 1 + 2 sin θ cos θ = 2

> sin θ cos θ = 1/2

> ```
>
> Step 2: Find sin⁴θ + cos⁴θ using identity
>
> ```fallback

> sin⁴θ + cos⁴θ = (sin²θ + cos²θ)² - 2 sin²θ cos²θ

>                = 1² - 2(sin θ cos θ)²

>                = 1 - 2(1/2)²

>                = 1 - 2(1/4)

>                = 1 - 1/2

>                = 1/2

> ```
>
> **Answer:** 1/2

> **↗ Connection · Problem 6: Transformation Formula Application**
>
> **Question:** Express 2 sin 5x cos 3x as a sum.
>
> **Solution:**

> Use sin A cos B = ½[sin(A+B) + sin(A-B)]
>
> Here A = 5x, B = 3x:
>
> ```fallback

> 2 sin 5x cos 3x = 2 × ½[sin(5x+3x) + sin(5x-3x)]

>                 = sin 8x + sin 2x

> ```
>
> **Answer:** sin 8x + sin 2x
>
> **JEE Trick:** Factor of 2 cancels with ½ from formula!

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Complex Identity Challenge**
>
> **Question:** If α + β = π/4, prove that:

> (1 + tan α)(1 + tan β) = 2
>
> **Solution:**

> Expand LHS:
>
> ```fallback

> (1 + tan α)(1 + tan β) = 1 + tan α + tan β + tan α tan β

> ```
>
> Since α + β = π/4:
>
> ```fallback

> tan(α + β) = tan(π/4) = 1

> ```
>
> Using tan(α + β) = (tan α + tan β)/(1 - tan α tan β):
>
> ```fallback

> 1 = (tan α + tan β)/(1 - tan α tan β)

> 1 - tan α tan β = tan α + tan β

> tan α + tan β = 1 - tan α tan β

> ```
>
> Substitute into LHS:
>
> ```fallback

> 1 + (tan α + tan β) + tan α tan β = 1 + (1 - tan α tan β) + tan α tan β

>                                   = 1 + 1

>                                   = 2

> ```
>
> **Proved!**

> **↗ Connection · Problem 8: JEE 2019 Style**
>
> **Question:** If cos(α - β) = 1 and cos(α + β) = 1/e, where α, β ∈ [-π, π], find the number of ordered pairs (α, β).
>
> **Solution:**

> From cos(α - β) = 1:
>
> ```fallback

> α - β = 0 (since cos 0 = 1 and α - β ∈ [-2π, 2π])

> α = β

> ```
>
> From cos(α + β) = 1/e:
>
> ```fallback

> α + β = ± cos⁻¹(1/e)

> ```
>
> Since α = β:
>
> ```fallback

> 2α = ± cos⁻¹(1/e)

> α = ± cos⁻¹(1/e)/2

> ```
>
> Since α ∈ [-π, π] and 1/e ≈ 0.368:
>
> ```fallback

> cos⁻¹(1/e) ≈ 1.19 radians

> ```
>
> Both α = cos⁻¹(1/e)/2 and α = -cos⁻¹(1/e)/2 lie in [-π, π].
>
> Since β = α, we have **2 ordered pairs**:
>
> - (cos⁻¹(1/e)/2, cos⁻¹(1/e)/2)

> - (-cos⁻¹(1/e)/2, -cos⁻¹(1/e)/2)
>
> **Answer:** 2 ordered pairs

> **↗ Connection · Problem 9: Maximum/Minimum Value**
>
> **Question:** Find the maximum value of sin x + cos x.
>
> **Solution:**

> Method 1 (Using compound angles):
>
> ```fallback

> sin x + cos x = √2 [sin x/√2 + cos x/√2]

>               = √2 [sin x cos 45° + cos x sin 45°]

>               = √2 sin(x + 45°)

> ```
>
> Maximum value of sin(x + 45°) = 1
>
> Therefore, maximum of sin x + cos x = √2(1) = **√2**
>
> Method 2 (Calculus - bonus):
>
> ```fallback

> Let y = sin x + cos x

> dy/dx = cos x - sin x = 0

> tan x = 1

> x = 45°
>
> y_max = sin 45° + cos 45° = √2/2 + √2/2 = √2

> ```
>
> **Answer:** √2 (achieved at x = 45° + 360°n)

---

## Quick Revision Box

| Identity Type | Formula | When to Use |
| --- | --- | --- |
| Pythagorean | sin²θ + cos²θ = 1 | Finding one from other |
| Pythagorean | 1 + tan²θ = sec²θ | Tan-Sec conversions |
| Double Angle | sin 2θ = 2 sin θ cos θ | Simplifying 2θ to θ |
| Double Angle | cos 2θ = 1 - 2sin²θ | Integration of sin²θ |
| Compound | sin(A±B) = sin A cos B ± cos A sin B | Finding exact values |
| Compound | cos(A±B) = cos A cos B ∓ sin A sin B | Simplification |
| Product→Sum | sin A cos B = ½[sin(A+B) + sin(A-B)] | Integration of products |
| Sum→Product | sin C + sin D = 2sin((C+D)/2)cos((C-D)/2) | Solving equations |
| Half Angle | tan(θ/2) = sin θ/(1+cos θ) | Simplifying half angles |

---

## Links to Related Topics

**Connected Concepts within Trigonometry:**

- [Trigonometric Equations](../trig-equations/index.md) - Apply these identities to solve equations
- [Inverse Trigonometric Functions](../inverse-trig/index.md) - Domain/range uses these
- [Properties of Triangles](../properties-triangles/index.md) - Apply to triangle geometry

**Applications in Calculus:**

- [Trigonometric Integration](../../integral-calculus/trigonometric-integration/index.md) - Uses product-to-sum heavily
- [Integration Techniques](../../integral-calculus/integration-techniques/index.md) - Trig substitution
- [Indefinite Integrals](../../integral-calculus/indefinite-integrals/index.md) - Integrating trig functions
- [Differentiation Rules](../../limits-continuity-differentiability/differentiation-rules/index.md) - Derivatives of trig functions

**Complex Numbers Connection:**

- [Complex Numbers Basics](../../complex-numbers/complex-basics/index.md) - e^(i theta) = cos theta + i sin theta
- [De Moivre’s Theorem](../../complex-numbers/de-moivres-theorem/index.md) - Powers of complex numbers
- [Argand Diagram](../../complex-numbers/argand-diagram/index.md) - Polar form uses trig

**Physics Applications:**

- [Simple Harmonic Motion](../../../physics/oscillations-waves/simple-harmonic-motion/index.md) - SHM involves trig identities
- [Circular Motion](../../../physics/kinematics/circular-motion/index.md) - Angular motion uses trig
- [Projectile Motion](../../../physics/kinematics/projectile-motion/index.md) - Trajectory analysis

**What’s Next:**

- [Trigonometric Equations](../trig-equations/index.md) - Now use these identities to solve equations!

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **The Three Pillars:** Master sin²θ + cos²θ = 1 and its two derivative forms (divide by cos²θ and sin²θ respectively). These unlock 80% of identity problems.

> 2. **Compound Angles = Building Blocks:** Every other identity (double, triple, half-angle) can be derived from sin(A±B) and cos(A±B). Don’t memorize blindly—understand the derivation.

> 3. **Transformation Formulas Save Time:** Product-to-sum and sum-to-product are NOT for memorization—they’re for integration and equation-solving. Keep the formula sheet handy initially.

> 4. **Sign Convention is Everything:** Use ASTC (“All Students Take Calculus”) religiously. Most JEE wrong answers come from sign errors.

> 5. **Pattern Over Memory:** Notice 3-4 pattern in triple angles, sign flip in compound angles. JEE rewards pattern recognition over rote learning.
>
> **Exam Strategy:** In a 3-hour paper, you’ll save 10-15 minutes if you can recall these identities instantly. That’s worth 2-3 extra questions attempted!
>
> **“Trigonometry is not about memorizing 30 formulas—it’s about mastering 5 core identities and knowing how to transform them. The unit circle never lies.”**

---

**Weightage:**

- JEE Main: 2-3 questions directly, plus 5-6 questions indirectly (in calculus, complex numbers)
- JEE Advanced: 1-2 questions directly, heavily used in geometry and calculus

**Time-Saving Tip:** Create a single A4 formula sheet with only the “core 5” identities. Derive others on the fly—builds confidence and saves memory load!

From TestGuru · our mock-test platform

## You've read Trigonometric Identities: The Foundation of JEE Trigonometry.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=trigonometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Ftrigonometry%2Ftrig-identities%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/trigonometry/trig-identities/",this.page.identifier="/mathematics/trigonometry/trig-identities/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="trigCircle" id="anim-trigCircle-1795396422482555453"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-trigCircle-1795396422482555453")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/trigonometry/trig-identities/](https://jeenotes.in/mathematics/trigonometry/trig-identities/) · raw HTML: `offline/mathematics/trigonometry/trig-identities/index.html`_
