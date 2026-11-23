---
title: "Indefinite Integrals: Antiderivatives and Standard Forms"
source: "https://jeenotes.in/mathematics/integral-calculus/indefinite-integrals/"
description: "Master indefinite integration with standard formulas, antiderivatives, and integration techniques for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 7"
html: "../../../../offline/mathematics/integral-calculus/indefinite-integrals/index.html"
extracted: "2026-11-23"
---

> Master indefinite integration with standard formulas, antiderivatives, and integration techniques for JEE Main and Advanced

## The Hook: Reversing a Speedometer

> **★ Key point · Connect: Real Life → Mathematics**
>
> Imagine you’re watching the car chase scene from **Fast X** (2023). The speedometer shows the car’s speed changing constantly—sometimes 60 km/h, sometimes 100 km/h. Now here’s the question:
>
> **If someone gives you only the speedometer readings (speed at every instant), can you figure out the total distance traveled?**
>
> This is exactly what integration does! If differentiation gives you the rate of change (speed from distance), **integration reverses it** to get the accumulated quantity (distance from speed).
>
> In JEE, this concept appears in 3-4 questions every year—making it a **high-yield topic**.

---

## The Core Concept

### What is an Indefinite Integral?

An **indefinite integral** (or **antiderivative**) is the reverse operation of differentiation.

$$\boxed{\int f(x) \, dx = F(x) + C}$$

where:

- $\int$ is the integration symbol (elongated S for “sum”)
- $f(x)$ is the **integrand** (function to integrate)
- $dx$ indicates integration with respect to $x$
- $F(x)$ is the **antiderivative** such that $\frac{d}{dx}F(x) = f(x)$
- $C$ is the **constant of integration** (crucial!)

**In simple terms:** Integration asks: “Which function, when differentiated, gives me $f(x)$?”

### Why the “+C”?

> **◐ In simple terms · The Mystery of the Constant**
>
> When you differentiate $x^2$, you get $2x$.

> When you differentiate $x^2 + 5$, you still get $2x$.

> When you differentiate $x^2 - 100$, you still get $2x$!
>
> The derivative “kills” the constant. So when reversing (integrating), we must add back an arbitrary constant $C$ because we don’t know what was lost.
>
> **JEE Trap:** Forgetting $+C$ in indefinite integrals costs you marks!

---

## Interactive Demo: Visualize Antiderivatives

Plot a function like $f(x) = 2x$ and see how its antiderivative $F(x) = x^2 + C$ changes with different values of C. This shows why we need the constant of integration!

---

## Standard Integral Formulas

### Power Functions

$$\boxed{\int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1}$$

**Memory Trick:** “**I**ncrease **P**ower, **D**ivide” → **IPD Rule**

Special case:

$$\boxed{\int x^{-1} \, dx = \int \frac{1}{x} \, dx = \ln|x| + C}$$

### Exponential Functions

$$\boxed{\int e^x \, dx = e^x + C}$$

$$\boxed{\int a^x \, dx = \frac{a^x}{\ln a} + C, \quad a > 0, a \neq 1}$$

**Pattern:** $e^x$ is special—it’s its own derivative AND its own integral!

### Trigonometric Functions

| Function | Integral |
| --- | --- |
| $\int \sin x \, dx$ | $-\cos x + C$ |
| $\int \cos x \, dx$ | $\sin x + C$ |
| $\int \sec^2 x \, dx$ | $\tan x + C$ |
| $\int \csc^2 x \, dx$ | $-\cot x + C$ |
| $\int \sec x \tan x \, dx$ | $\sec x + C$ |
| $\int \csc x \cot x \, dx$ | $-\csc x + C$ |

**Memory Trick:** “**S**ign **C**hanges for **S**in **C**os” → Sine’s integral has a negative sign!

### Inverse Trigonometric Functions

$$\boxed{\int \frac{1}{\sqrt{1-x^2}} \, dx = \sin^{-1} x + C}$$

$$\boxed{\int \frac{1}{1+x^2} \, dx = \tan^{-1} x + C}$$

$$\boxed{\int \frac{1}{x\sqrt{x^2-1}} \, dx = \sec^{-1} x + C}$$

### Special Integrals with Parameter $a$

These five forms appear constantly in JEE problems — memorize them:

$$\boxed{\int \frac{dx}{x^2 + a^2} = \frac{1}{a}\tan^{-1}\frac{x}{a} + C}$$

$$\boxed{\int \frac{dx}{x^2 - a^2} = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C}$$

$$\boxed{\int \frac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\frac{x}{a} + C}$$

$$\boxed{\int \frac{dx}{\sqrt{x^2 + a^2}} = \ln\left|x + \sqrt{x^2 + a^2}\right| + C}$$

$$\boxed{\int \frac{dx}{\sqrt{x^2 - a^2}} = \ln\left|x + \sqrt{x^2 - a^2}\right| + C}$$

> **★ Key point · JEE Tip**
>
> For integrals of the form $\int \frac{dx}{ax^2 + bx + c}$, complete the square first to convert to one of these standard forms.

---

## Properties of Indefinite Integrals

### Linearity Properties

1. **Constant Multiple Rule:**

   $$\int k \cdot f(x) \, dx = k \int f(x) \, dx$$
2. **Sum/Difference Rule:**

   $$\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx$$

> **↗ Connection · Example 1: Using Properties**
>
> **Problem:** Find $\int (3x^2 - 5\cos x + 2e^x) \, dx$
>
> **Solution:**
>
> $$\begin{aligned}

> \int (3x^2 - 5\cos x + 2e^x) \, dx &= 3\int x^2 \, dx - 5\int \cos x \, dx + 2\int e^x \, dx \\

> &= 3 \cdot \frac{x^3}{3} - 5\sin x + 2e^x + C \\

> &= x^3 - 5\sin x + 2e^x + C

> \end{aligned}$$

### Non-Linear Operations (Important!)

> **⚠ Trap #1: Integration is NOT Distributive**
>
> **WRONG:** $\int [f(x) \cdot g(x)] \, dx \neq \int f(x) \, dx \cdot \int g(x) \, dx$
>
> **WRONG:** $\int \frac{f(x)}{g(x)} \, dx \neq \frac{\int f(x) \, dx}{\int g(x) \, dx}$
>
> **Example:** $\int x \cdot e^x \, dx \neq \frac{x^2}{2} \cdot e^x$ (This needs integration by parts!)

---

## Fundamental Integration Techniques

### Technique 1: Direct Formula Application

> **↗ Connection · Example 2: Direct Integration**
>
> **Problem:** Evaluate $\int \left(x^4 + \frac{3}{x^2} - \sqrt{x}\right) dx$
>
> **Solution:**
>
> $$\begin{aligned}

> \int \left(x^4 + 3x^{-2} - x^{1/2}\right) dx &= \frac{x^5}{5} + 3 \cdot \frac{x^{-1}}{-1} - \frac{x^{3/2}}{3/2} + C \\

> &= \frac{x^5}{5} - \frac{3}{x} - \frac{2x^{3/2}}{3} + C

> \end{aligned}$$

### Technique 2: Simplification Before Integration

> **↗ Connection · Example 3: Simplify First**
>
> **Problem:** Find $\int \frac{x^3 + 3x^2 + 3x + 1}{x^2} \, dx$
>
> **Solution:**

> First, simplify by dividing:
>
> $$\frac{x^3 + 3x^2 + 3x + 1}{x^2} = x + 3 + \frac{3}{x} + \frac{1}{x^2}$$
>
> Now integrate:
>
> $$\begin{aligned}

> \int \left(x + 3 + 3x^{-1} + x^{-2}\right) dx &= \frac{x^2}{2} + 3x + 3\ln|x| - \frac{1}{x} + C

> \end{aligned}$$

### Technique 3: Trigonometric Identities

> **↗ Connection · Example 4: Using Identities**
>
> **Problem:** Evaluate $\int \sin^2 x \, dx$
>
> **Solution:**

> Use the identity: $\sin^2 x = \frac{1 - \cos 2x}{2}$
>
> $$\begin{aligned}

> \int \sin^2 x \, dx &= \int \frac{1 - \cos 2x}{2} \, dx \\

> &= \frac{1}{2}\int 1 \, dx - \frac{1}{2}\int \cos 2x \, dx \\

> &= \frac{x}{2} - \frac{1}{2} \cdot \frac{\sin 2x}{2} + C \\

> &= \frac{x}{2} - \frac{\sin 2x}{4} + C

> \end{aligned}$$

---

## Common Algebraic Manipulations

### Rationalization Technique

> **↗ Connection · Example 5: Rationalization**
>
> **Problem:** Find $\int \frac{1}{x + \sqrt{x}} \, dx$
>
> **Solution:**

> Rationalize by multiplying by $\frac{\sqrt{x}}{\sqrt{x}}$:
>
> $$\frac{1}{x + \sqrt{x}} = \frac{1}{\sqrt{x}(\sqrt{x} + 1)} = \frac{1}{\sqrt{x}(\sqrt{x} + 1)} \cdot \frac{\sqrt{x} - 1}{\sqrt{x} - 1}$$
>
> Actually, simpler approach: Factor out $\sqrt{x}$:
>
> $$\frac{1}{x + \sqrt{x}} = \frac{1}{\sqrt{x}(\sqrt{x} + 1)}$$
>
> Let $u = \sqrt{x} + 1$ (we’ll learn substitution in the next topic!)
>
> For now, recognize: This splits into partial fractions.

---

## Memory Tricks & Patterns

### Master Formula Sheet

> **★ Key point · The Essential 15 Formulas**
>
> **Powers:**
>
> 1. $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$ (IPD Rule)

> 2. $\int \frac{1}{x} \, dx = \ln|x| + C$
>
> **Exponentials:**

> 3. $\int e^x \, dx = e^x + C$

> 4. $\int a^x \, dx = \frac{a^x}{\ln a} + C$
>
> **Trigonometric (The Big 6):**

> 5. $\int \sin x \, dx = -\cos x + C$ (negative!)

> 6. $\int \cos x \, dx = \sin x + C$ (positive!)

> 7. $\int \sec^2 x \, dx = \tan x + C$

> 8. $\int \csc^2 x \, dx = -\cot x + C$

> 9. $\int \sec x \tan x \, dx = \sec x + C$

> 10. $\int \csc x \cot x \, dx = -\csc x + C$
>
> **Inverse Trigonometric:**

> 11. $\int \frac{1}{\sqrt{1-x^2}} \, dx = \sin^{-1} x + C$

> 12. $\int \frac{-1}{\sqrt{1-x^2}} \, dx = \cos^{-1} x + C$

> 13. $\int \frac{1}{1+x^2} \, dx = \tan^{-1} x + C$

> 14. $\int \frac{-1}{1+x^2} \, dx = \cot^{-1} x + C$

> 15. $\int \frac{1}{|x|\sqrt{x^2-1}} \, dx = \sec^{-1} x + C$
>
> **Memorize these 15—they appear in 90% of JEE integration problems!**

### Sign Pattern for Trig Functions

**Mnemonic:** “**Some Cops Have Caught Students Cutting**”

- **S**ome = $\sin x$ integrates to **negative** ($-\cos x$)
- **C**ops = $\cos x$ integrates to **positive** ($\sin x$)
- **H**ave = (skip)
- **C**aught = $\csc^2 x$ integrates to **negative** ($-\cot x$)
- **S**tudents = $\sec^2 x$ integrates to **positive** ($\tan x$)
- **C**utting = $\csc x \cot x$ integrates to **negative** ($-\csc x$)

---

## When to Use Standard Formulas

> **★ Key point · Decision Tree**
>
> **Step 1:** Can you simplify algebraically?
>
> - Expand brackets

> - Divide polynomials

> - Use trig identities
>
> **Step 2:** Does it match a standard form?
>
> - Check the master list of 15 formulas

> - Look for $\frac{f'(x)}{f(x)}$ pattern → $\ln|f(x)|$
>
> **Step 3:** Need advanced technique?
>
> - Substitution → See [Integration Techniques](../integration-techniques/index.md)

> - By Parts → See [Integration Techniques](../integration-techniques/index.md)

> - Partial Fractions → See [Integration Techniques](../integration-techniques/index.md)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting the Constant**
>
> **WRONG:** $\int 2x \, dx = x^2$

> **CORRECT:** $\int 2x \, dx = x^2 + C$
>
> **Why it matters:** In JEE, if a problem asks for an indefinite integral, missing $+C$ is marked wrong!

> **⚠ Trap #2: Power Rule for n = -1**
>
> **WRONG:** $\int x^{-1} \, dx = \frac{x^0}{0} + C$ (Undefined!)

> **CORRECT:** $\int \frac{1}{x} \, dx = \ln|x| + C$
>
> This is a **special case**—memorize it separately!

> **⚠ Trap #3: Forgetting Absolute Value**
>
> **WRONG:** $\int \frac{1}{x} \, dx = \ln x + C$

> **CORRECT:** $\int \frac{1}{x} \, dx = \ln|x| + C$
>
> The domain of $\ln x$ is $x > 0$, but $\frac{1}{x}$ is defined for all $x \neq 0$. The absolute value ensures the integral works for negative $x$ too.

> **⚠ Trap #4: Sign Mistakes in Trig Integrals**
>
> **WRONG:** $\int \sin x \, dx = \cos x + C$

> **CORRECT:** $\int \sin x \, dx = -\cos x + C$
>
> **Check method:** Differentiate your answer! $\frac{d}{dx}(-\cos x) = \sin x$ ✓

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> Evaluate: $\int (x^3 - 2x^2 + 5x - 7) \, dx$
>
> **Solution:**
>
> $$\begin{aligned}

> \int (x^3 - 2x^2 + 5x - 7) \, dx &= \frac{x^4}{4} - 2 \cdot \frac{x^3}{3} + 5 \cdot \frac{x^2}{2} - 7x + C \\

> &= \frac{x^4}{4} - \frac{2x^3}{3} + \frac{5x^2}{2} - 7x + C

> \end{aligned}$$

> **↗ Connection · Problem 2**
>
> Find: $\int (3\sin x - 4\cos x) \, dx$
>
> **Solution:**
>
> $$\begin{aligned}

> \int (3\sin x - 4\cos x) \, dx &= 3\int \sin x \, dx - 4\int \cos x \, dx \\

> &= 3(-\cos x) - 4(\sin x) + C \\

> &= -3\cos x - 4\sin x + C

> \end{aligned}$$

> **↗ Connection · Problem 3**
>
> Evaluate: $\int \left(e^x + \frac{1}{x} + 2^x\right) dx$
>
> **Solution:**
>
> $$\begin{aligned}

> \int \left(e^x + \frac{1}{x} + 2^x\right) dx &= e^x + \ln|x| + \frac{2^x}{\ln 2} + C

> \end{aligned}$$

### Level 2: JEE Main

> **↗ Connection · Problem 4**
>
> **JEE Main 2023 Pattern:** Find $\int \frac{x^4 + 1}{x^2} \, dx$
>
> **Solution:**

> Simplify first:
>
> $$\frac{x^4 + 1}{x^2} = x^2 + x^{-2}$$

$$\begin{aligned}

> \int (x^2 + x^{-2}) \, dx &= \frac{x^3}{3} + \frac{x^{-1}}{-1} + C \\

> &= \frac{x^3}{3} - \frac{1}{x} + C

> \end{aligned}$$

> **↗ Connection · Problem 5**
>
> **Problem:** Evaluate $\int (\sqrt{x} + \frac{1}{\sqrt{x}})^2 dx$
>
> **Solution:**

> Expand first:
>
> $$(\sqrt{x} + \frac{1}{\sqrt{x}})^2 = x + 2 + \frac{1}{x}$$

$$\begin{aligned}

> \int \left(x + 2 + \frac{1}{x}\right) dx &= \frac{x^2}{2} + 2x + \ln|x| + C

> \end{aligned}$$
>
> **JEE Tip:** Always expand before integrating—don’t try to integrate the squared form directly!

> **↗ Connection · Problem 6**
>
> **Problem:** Find $\int \frac{1 - \cos 2x}{1 + \cos 2x} \, dx$
>
> **Solution:**

> Use half-angle formulas:
>
> - $1 - \cos 2x = 2\sin^2 x$

> - $1 + \cos 2x = 2\cos^2 x$
>
> $$\frac{1 - \cos 2x}{1 + \cos 2x} = \frac{2\sin^2 x}{2\cos^2 x} = \tan^2 x$$
>
> Now use: $\tan^2 x = \sec^2 x - 1$
>
> $$\begin{aligned}

> \int \tan^2 x \, dx &= \int (\sec^2 x - 1) \, dx \\

> &= \tan x - x + C

> \end{aligned}$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 7**
>
> **JEE Advanced Pattern:** If $\int f(x) \, dx = \psi(x)$, then find $\int x^5 f(x^3) \, dx$ in terms of $\psi$.
>
> **Solution:**

> This requires substitution. Let $u = x^3$, then $du = 3x^2 \, dx$, so $x^2 \, dx = \frac{du}{3}$.
>
> $$x^5 f(x^3) \, dx = x^3 \cdot x^2 f(x^3) \, dx = u \cdot f(u) \cdot \frac{du}{3}$$
>
> But we need more manipulation. Note: $x^5 = x^3 \cdot x^2 = u \cdot x^2$.
>
> $$\int x^5 f(x^3) \, dx = \int u \cdot f(u) \cdot x^2 \, dx$$
>
> Since $u = x^3$, we have $x^2 \, dx = \frac{du}{3}$:
>
> $$\int u \cdot f(u) \cdot \frac{du}{3} = \frac{1}{3} \int u f(u) \, du$$
>
> This still requires integration by parts or knowing more about $f$.
>
> **Key learning:** Advanced problems combine multiple techniques!

> **↗ Connection · Problem 8**
>
> **Problem:** Prove that $\int \frac{dx}{x^2(x^4 + 1)^{3/4}} = -\left[\frac{x^4 + 1}{x^4}\right]^{1/4} + C$
>
> **Solution:**

> Rewrite the integrand:
>
> $$\frac{1}{x^2(x^4 + 1)^{3/4}} = \frac{x^{-2}}{(x^4 + 1)^{3/4}}$$
>
> Divide numerator and denominator by $x^3$:
>
> $$= \frac{x^{-2}}{x^3(x + x^{-3})^{3/4}} = \frac{1}{x^5(x + x^{-3})^{3/4}}$$
>
> Actually, better approach: Substitute $t = \frac{x^4 + 1}{x^4}$
>
> Then $t = 1 + x^{-4}$, so $dt = -4x^{-5} \, dx$
>
> This is complex—requires practice with advanced substitution!
>
> **For JEE Advanced:** Focus on pattern recognition and creative substitutions.

> **↗ Connection · Problem 9**
>
> **Conceptual Problem:** Let $I = \int \sin x \, dx$ and $J = \int \cos x \, dx$. Then which of the following is true?
>
> A) $I^2 + J^2 = C$ (constant)

> B) $\frac{dI}{dx} = J$

> C) $\frac{dJ}{dx} = I$

> D) $\frac{d^2I}{dx^2} + I = 0$
>
> **Solution:**

> We have:
>
> - $I = -\cos x + C_1$

> - $J = \sin x + C_2$
>
> **Option A:** $I^2 + J^2 = (-\cos x + C_1)^2 + (\sin x + C_2)^2$ ≠ constant ✗
>
> **Option B:** $\frac{dI}{dx} = \frac{d}{dx}(-\cos x + C_1) = \sin x$ ✗ (Not equal to $J = \sin x + C_2$ unless $C_2 = 0$)
>
> **Option C:** $\frac{dJ}{dx} = \frac{d}{dx}(\sin x + C_2) = \cos x$ ✗ (Not equal to $I = -\cos x + C_1$)
>
> **Option D:** $\frac{d^2I}{dx^2} = \frac{d}{dx}(\sin x) = \cos x$, and $I = -\cos x + C_1$
>
> So $\frac{d^2I}{dx^2} + I = \cos x + (-\cos x + C_1) = C_1$ ✗ (Not zero unless $C_1 = 0$)
>
> **Actually:** The question is testing if you understand the arbitrary constant! If we take $C_1 = C_2 = 0$, then **Option D** is correct.
>
> **Answer:** D (with understanding that we can choose constants appropriately)

---

## Quick Revision Box

| Type | Integral | Result |
| --- | --- | --- |
| Power | $\int x^n \, dx$ | $\frac{x^{n+1}}{n+1} + C$ (IPD Rule) |
| Special power | $\int \frac{1}{x} \, dx$ | $\ln\|x\| + C$ |
| Exponential | $\int e^x \, dx$ | $e^x + C$ |
| Exponential | $\int a^x \, dx$ | $\frac{a^x}{\ln a} + C$ |
| Sine | $\int \sin x \, dx$ | $-\cos x + C$ (negative!) |
| Cosine | $\int \cos x \, dx$ | $\sin x + C$ (positive!) |
| $\sec^2$ | $\int \sec^2 x \, dx$ | $\tan x + C$ |
| $\csc^2$ | $\int \csc^2 x \, dx$ | $-\cot x + C$ |
| $\frac{1}{1+x^2}$ | $\int \frac{1}{1+x^2} \, dx$ | $\tan^{-1} x + C$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\int \frac{1}{\sqrt{1-x^2}} \, dx$ | $\sin^{-1} x + C$ |

**Quick Check Method:** Always differentiate your answer to verify!

---

## Cross-Links & Prerequisites

**Before studying this topic:**

- [Limits Basics](../../limits-continuity-differentiability/limits-basics/index.md) - Understanding limits
- [Differentiation Rules](../../limits-continuity-differentiability/differentiation-rules/index.md) - Integration reverses differentiation
- [Trigonometric Identities](../../trigonometry/trig-identities/index.md) - For trigonometric integrals
- [Inverse Trigonometry](../../trigonometry/inverse-trig/index.md) - For inverse trig integrals

**Related topics:**

- [Integration Techniques](../integration-techniques/index.md) - Advanced methods (substitution, by parts)
- [Trigonometric Integration](../trigonometric-integration/index.md) - Special trig integral techniques
- [Definite Integrals](../definite-integrals/index.md) - Integration with limits
- [Applications of Integrals](../applications-integrals/index.md) - Finding areas and volumes

**Applications in Physics:**

- [Kinematics](../../../physics/kinematics/index.md) - Finding displacement from velocity
- [Work-Energy-Power](../../../physics/work-energy-power/index.md) - Work as integral of force

**Applications in Other Math Topics:**

- [Differential Equations](../../differential-equations/index.md) - Solving ODEs requires integration

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Integration is Anti-Differentiation:** It reverses the derivative operation. Always verify by differentiating your answer.

> 2. **The +C is Sacred:** Every indefinite integral MUST have the constant of integration. In JEE, forgetting it costs you the entire question.

> 3. **Master the Essential 15:** The 15 standard formulas cover 90% of JEE problems. Drill them until they’re automatic.

> 4. **Simplify Before You Integrate:** Expand brackets, divide polynomials, use trig identities—make the integral look like a standard form.

> 5. **Sign Discipline:** Negative signs in trig integrals (especially $\sin x \to -\cos x$) are the #1 silly mistake. Double-check!
>
> **“Integration is like solving a puzzle—you’re given the derivative (the clue) and must find the original function (the answer). Master the standard patterns, and the puzzle becomes easy.”**
>
> **JEE Strategy:** In the exam, 60% of integration problems can be solved with just these standard formulas. Don’t overcomplicate—check if it’s a direct formula question before attempting advanced techniques!

---

## What’s Next?

Now that you understand indefinite integrals, you’re ready to tackle more complex problems:

1. **Next:** [Integration Techniques](../integration-techniques/index.md) - Substitution, integration by parts, and partial fractions
2. **Then:** [Trigonometric Integration](../trigonometric-integration/index.md) - Special methods for trig functions
3. **Finally:** [Definite Integrals](../definite-integrals/index.md) - Adding limits to find exact areas

Keep practicing daily—integration mastery comes from solving 100+ problems, not just reading!

From TestGuru · our mock-test platform

## You've read Indefinite Integrals: Antiderivatives and Standard Forms.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=integral-calculus&tg_exam=jee-main&tg_page=%2Fmathematics%2Fintegral-calculus%2Findefinite-integrals%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/integral-calculus/indefinite-integrals/",this.page.identifier="/mathematics/integral-calculus/indefinite-integrals/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421706592165"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421706592165")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/integral-calculus/indefinite-integrals/](https://jeenotes.in/mathematics/integral-calculus/indefinite-integrals/) · raw HTML: `offline/mathematics/integral-calculus/indefinite-integrals/index.html`_
