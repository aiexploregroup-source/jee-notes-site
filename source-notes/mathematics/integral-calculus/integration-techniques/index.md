---
title: "Advanced Integration Techniques: Substitution, By Parts, and Partial Fractions"
source: "https://jeenotes.in/mathematics/integral-calculus/integration-techniques/"
description: "Master substitution method, integration by parts using LIATE rule, and partial fractions for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "17 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 7"
html: "../../../../offline/mathematics/integral-calculus/integration-techniques/index.html"
extracted: "2026-11-23"
---

> Master substitution method, integration by parts using LIATE rule, and partial fractions for JEE Main and Advanced

## The Hook: The Master Key Problem

> **★ Key point · Connect: Real Life → Mathematics**
>
> In **Mission: Impossible - Dead Reckoning** (2023), Ethan Hunt needs to unlock a series of complex locks. Some locks need a **simple key** (direct approach), but others need **special tools** and **multi-step techniques**.
>
> Similarly, in integration:
>
> - **Simple lock:** $\int x^2 \, dx$ → Direct formula (basic key)

> - **Complex lock:** $\int x \cdot e^x \, dx$ → Needs integration by parts (special tool)

> - **Tricky lock:** $\int \frac{2x+3}{x^2-5x+6} \, dx$ → Needs partial fractions (multi-step technique)
>
> **JEE Reality:** About 60% of integration problems need these advanced techniques. This is a **must-master** topic for both JEE Main and Advanced!

---

## Technique 1: Integration by Substitution

### The Core Concept

**Substitution** is the reverse of the chain rule. If you can spot a function and its derivative hiding in the integrand, substitution unlocks the problem.

$$\boxed{\int f(g(x)) \cdot g'(x) \, dx = \int f(u) \, du \quad \text{where } u = g(x)}$$

**In simple terms:** Replace a complicated part with a simple variable $u$, integrate, then substitute back.

### When to Use Substitution

> **★ Key point · Pattern Recognition**
>
> Look for these patterns:
>
> 1. **$f(x) \cdot f'(x)$ pattern:** $\int x \cos(x^2) \, dx$ → $u = x^2$, $du = 2x \, dx$

> 2. **$\frac{f'(x)}{f(x)}$ pattern:** $\int \frac{2x}{x^2+1} \, dx$ → Gives $\ln|f(x)| + C$

> 3. **$f'(x) \cdot [f(x)]^n$ pattern:** $\int 2x(x^2+1)^5 \, dx$ → $u = x^2 + 1$

> 4. **Composite function:** $\int \sin(3x) \, dx$ → $u = 3x$
>
> **Quick test:** Can I find a function whose derivative appears as a factor?

### Step-by-Step Process

**Step 1:** Identify the substitution $u = g(x)$
**Step 2:** Find $du = g'(x) \, dx$
**Step 3:** Replace all $x$ terms with $u$ terms
**Step 4:** Integrate with respect to $u$
**Step 5:** Substitute back to get the answer in terms of $x$

### Worked Examples

> **↗ Connection · Example 1: Basic Substitution**
>
> **Problem:** Evaluate $\int 2x \cos(x^2) \, dx$
>
> **Solution:**
>
> **Step 1:** Let $u = x^2$ (inner function)
>
> **Step 2:** Then $du = 2x \, dx$ (perfect! we have $2x \, dx$ in the integral)
>
> **Step 3:** Rewrite:
>
> $$\int 2x \cos(x^2) \, dx = \int \cos(u) \, du$$
>
> **Step 4:** Integrate:
>
> $$\int \cos(u) \, du = \sin(u) + C$$
>
> **Step 5:** Substitute back:
>
> $$= \sin(x^2) + C$$
>
> **Verification:** $\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2x$ ✓

> **↗ Connection · Example 2: The $\frac{f'(x)}{f(x)}$ Pattern**
>
> **Problem:** Find $\int \frac{2x + 3}{x^2 + 3x + 5} \, dx$
>
> **Solution:**
>
> Notice: If $f(x) = x^2 + 3x + 5$, then $f'(x) = 2x + 3$ (numerator!)
>
> **Special rule:** $\int \frac{f'(x)}{f(x)} \, dx = \ln|f(x)| + C$
>
> $$\int \frac{2x + 3}{x^2 + 3x + 5} \, dx = \ln|x^2 + 3x + 5| + C$$
>
> **JEE Shortcut:** Always check if the numerator is the derivative of the denominator!

> **↗ Connection · Example 3: Adjusting Constants**
>
> **Problem:** Evaluate $\int \frac{x}{x^2 + 3x + 5} \, dx$
>
> **Solution:**
>
> Numerator is $x$, but derivative of denominator is $2x + 3$.
>
> **Strategy:** Write $x = \frac{1}{2}(2x) = \frac{1}{2}(2x + 3 - 3)$
>
> $$\int \frac{x}{x^2 + 3x + 5} \, dx = \int \frac{\frac{1}{2}(2x + 3) - \frac{3}{2}}{x^2 + 3x + 5} \, dx$$

$$= \frac{1}{2}\int \frac{2x + 3}{x^2 + 3x + 5} \, dx - \frac{3}{2}\int \frac{1}{x^2 + 3x + 5} \, dx$$

$$= \frac{1}{2}\ln|x^2 + 3x + 5| - \frac{3}{2} \cdot \text{(requires completing the square)}$$
>
> **Key skill:** Sometimes you need to manipulate the numerator to match the derivative!

> **↗ Connection · Example 4: Trigonometric Substitution Setup**
>
> **Problem:** Evaluate $\int \sin^3 x \cos x \, dx$
>
> **Solution:**
>
> Notice: $\frac{d}{dx}(\sin x) = \cos x$ (the derivative is present!)
>
> **Let $u = \sin x$**, then $du = \cos x \, dx$
>
> $$\int \sin^3 x \cos x \, dx = \int u^3 \, du = \frac{u^4}{4} + C = \frac{\sin^4 x}{4} + C$$
>
> **Pattern:** When you see $\sin^n x \cos x$ or $\cos^n x \sin x$, use substitution!

### Standard Trigonometric Substitutions

When the integrand contains these square-root expressions, substitute:

| Expression | Substitution |
| --- | --- |
| $\sqrt{a^2 - x^2}$ | $x = a\sin\theta$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan\theta$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec\theta$ |

For rational functions of $\sin x$ and $\cos x$ (like $a + b\cos x$ in the denominator), use the Weierstrass substitution $t = \tan\frac{x}{2}$ — covered in detail in [Trigonometric Integration](../trigonometric-integration/index.md).

---

## Technique 2: Integration by Parts

### The Core Concept

**Integration by parts** is the reverse of the product rule for differentiation.

$$\boxed{\int u \, dv = uv - \int v \, du}$$

Or in expanded form:

$$\boxed{\int u(x) \cdot v'(x) \, dx = u(x) \cdot v(x) - \int v(x) \cdot u'(x) \, dx}$$

**In simple terms:** To integrate a product, sacrifice one function (differentiate it) and integrate the other, then deal with what’s left over.

### The LIATE Rule (Memory Trick)

> **★ Key point · LIATE: Choosing u and dv**
>
> When deciding which function to choose as $u$ (to differentiate), use the **LIATE priority**:
>
> **L** - **L**ogarithmic functions ($\ln x$, $\log x$)

> **I** - **I**nverse trigonometric ($\sin^{-1} x$, $\tan^{-1} x$, etc.)

> **A** - **A**lgebraic ($x$, $x^2$, $x^n$)

> **T** - **T**rigonometric ($\sin x$, $\cos x$, $\tan x$)

> **E** - **E**xponential ($e^x$, $a^x$)
>
> **Choose $u$ as the function highest on the list, and $dv$ as the remaining part.**
>
> **Why?**
>
> - Logarithmic functions become simpler when differentiated: $(\ln x)' = \frac{1}{x}$

> - Exponential functions stay the same: $(e^x)' = e^x$, so better to integrate them
>
> **Example:** In $\int x e^x \, dx$:
>
> - $x$ is Algebraic (A)

> - $e^x$ is Exponential (E)

> - Since A comes before E in LIATE, choose $u = x$, $dv = e^x \, dx$

### Step-by-Step Process

**Step 1:** Choose $u$ and $dv$ using LIATE
**Step 2:** Find $du$ by differentiating $u$
**Step 3:** Find $v$ by integrating $dv$
**Step 4:** Apply formula: $\int u \, dv = uv - \int v \, du$
**Step 5:** Evaluate the remaining integral

### Interactive Demo: Visualize Integration Techniques

Explore how different integration methods transform functions interactively.

### Worked Examples

> **↗ Connection · Example 5: Basic By Parts**
>
> **Problem:** Evaluate $\int x e^x \, dx$
>
> **Solution:**
>
> **Using LIATE:** $x$ (Algebraic) comes before $e^x$ (Exponential)
>
> - Let $u = x$ → $du = dx$

> - Let $dv = e^x \, dx$ → $v = e^x$
>
> **Apply formula:**
>
> $$\int x e^x \, dx = x \cdot e^x - \int e^x \cdot 1 \, dx$$

$$= x e^x - e^x + C = e^x(x - 1) + C$$
>
> **Verification:** $\frac{d}{dx}[e^x(x-1)] = e^x(x-1) + e^x \cdot 1 = xe^x$ ✓

> **↗ Connection · Example 6: Logarithmic Function**
>
> **Problem:** Find $\int \ln x \, dx$
>
> **Solution:**
>
> This looks like a single function, but we can write it as $\int \ln x \cdot 1 \, dx$
>
> **Using LIATE:** $\ln x$ (Logarithmic) comes before $1$ (constant, treat as Algebraic)
>
> - Let $u = \ln x$ → $du = \frac{1}{x} \, dx$

> - Let $dv = 1 \, dx$ → $v = x$
>
> **Apply formula:**
>
> $$\int \ln x \, dx = (\ln x) \cdot x - \int x \cdot \frac{1}{x} \, dx$$

$$= x\ln x - \int 1 \, dx = x\ln x - x + C$$

$$= x(\ln x - 1) + C$$
>
> **JEE Pattern:** Logarithmic and inverse trig functions often need this “multiply by 1” trick!

> **↗ Connection · Example 7: Repeated By Parts**
>
> **Problem:** Evaluate $\int x^2 e^x \, dx$
>
> **Solution:**
>
> **First application:**
>
> - $u = x^2$ → $du = 2x \, dx$

> - $dv = e^x \, dx$ → $v = e^x$
>
> $$\int x^2 e^x \, dx = x^2 e^x - \int e^x \cdot 2x \, dx$$

$$= x^2 e^x - 2\int x e^x \, dx$$
>
> **Second application** (on $\int x e^x \, dx$):
>
> - $u = x$ → $du = dx$

> - $dv = e^x \, dx$ → $v = e^x$
>
> $$\int x e^x \, dx = xe^x - \int e^x \, dx = xe^x - e^x$$
>
> **Combine:**
>
> $$\int x^2 e^x \, dx = x^2 e^x - 2(xe^x - e^x) + C$$

$$= x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$$
>
> **Pattern:** For $\int x^n e^x \, dx$, you need to apply by parts $n$ times!

> **↗ Connection · Example 8: The Circular Trick**
>
> **Problem:** Find $\int e^x \sin x \, dx$
>
> **Solution:**
>
> Let $I = \int e^x \sin x \, dx$
>
> **First application:**
>
> - $u = \sin x$ → $du = \cos x \, dx$

> - $dv = e^x \, dx$ → $v = e^x$
>
> $$I = e^x \sin x - \int e^x \cos x \, dx$$
>
> **Second application** (on $\int e^x \cos x \, dx$):
>
> - $u = \cos x$ → $du = -\sin x \, dx$

> - $dv = e^x \, dx$ → $v = e^x$
>
> $$\int e^x \cos x \, dx = e^x \cos x - \int e^x \cdot (-\sin x) \, dx$$

$$= e^x \cos x + \int e^x \sin x \, dx = e^x \cos x + I$$
>
> **Substitute back:**
>
> $$I = e^x \sin x - (e^x \cos x + I)$$

$$I = e^x \sin x - e^x \cos x - I$$

$$2I = e^x(\sin x - \cos x)$$

$$I = \frac{e^x(\sin x - \cos x)}{2} + C$$
>
> **Magic trick:** The integral appeared on both sides! This “circular” technique works for $\int e^{ax} \sin bx \, dx$ and $\int e^{ax} \cos bx \, dx$.

### Special Pattern: $e^x[f(x) + f'(x)]$

When the integrand is $e^x$ times a function plus its derivative, the answer collapses immediately:

$$\boxed{\int e^x[f(x) + f'(x)]\,dx = e^x f(x) + C}$$

**Why it works:** $\frac{d}{dx}[e^x f(x)] = e^x f(x) + e^x f'(x)$ — the product rule produces exactly the integrand.

**Example:** $\int e^x(\tan x + \sec^2 x)\,dx = e^x \tan x + C$ (here $f(x) = \tan x$, $f'(x) = \sec^2 x$)

---

## Technique 3: Partial Fractions

### The Core Concept

**Partial fractions** is used when integrating **rational functions** (ratio of polynomials) where the degree of the numerator is less than the degree of the denominator.

**Strategy:** Break a complex fraction into simpler fractions that we can integrate easily.

$$\frac{P(x)}{Q(x)} = \frac{A}{x - a} + \frac{B}{x - b} + \ldots$$

### When to Use Partial Fractions

> **★ Key point · Decision Tree**
>
> **Given:** $\int \frac{P(x)}{Q(x)} \, dx$ (ratio of polynomials)
>
> **Step 1:** Is degree of $P(x) < $ degree of $Q(x)$?
>
> - **No:** Do polynomial long division first

> - **Yes:** Proceed to factorization
>
> **Step 2:** Can you factor $Q(x)$ into linear and/or quadratic factors?
>
> - **Yes:** Use partial fractions

> - **No:** May need advanced techniques (substitution, completing the square)
>
> **Step 3:** Check if numerator is related to derivative of denominator
>
> - If $P(x) = Q'(x)$ → Direct formula: $\ln|Q(x)| + C$

### Types of Partial Fractions

#### Type 1: Distinct Linear Factors

$$\frac{P(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

> **↗ Connection · Example 9: Distinct Linear Factors**
>
> **Problem:** Evaluate $\int \frac{1}{x^2 - 5x + 6} \, dx$
>
> **Solution:**
>
> **Step 1:** Factor the denominator:
>
> $$x^2 - 5x + 6 = (x-2)(x-3)$$
>
> **Step 2:** Set up partial fractions:
>
> $$\frac{1}{(x-2)(x-3)} = \frac{A}{x-2} + \frac{B}{x-3}$$
>
> **Step 3:** Multiply both sides by $(x-2)(x-3)$:
>
> $$1 = A(x-3) + B(x-2)$$
>
> **Step 4:** Find $A$ and $B$:
>
> - **Method 1 (Substitution):**
>
>   - Let $x = 2$: $1 = A(-1) + 0$ → $A = -1$

>   - Let $x = 3$: $1 = 0 + B(1)$ → $B = 1$

> - **Method 2 (Coefficient comparison):**
>
>   - $1 = Ax - 3A + Bx - 2B = (A+B)x + (-3A-2B)$

>   - Coefficient of $x$: $0 = A + B$

>   - Constant term: $1 = -3A - 2B$

>   - Solving: $A = -1$, $B = 1$
>
> **Step 5:** Integrate:
>
> $$\int \frac{1}{x^2 - 5x + 6} \, dx = \int \left(\frac{-1}{x-2} + \frac{1}{x-3}\right) dx$$

$$= -\ln|x-2| + \ln|x-3| + C = \ln\left|\frac{x-3}{x-2}\right| + C$$

#### Type 2: Repeated Linear Factors

$$\frac{P(x)}{(x-a)^n} = \frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \ldots + \frac{A_n}{(x-a)^n}$$

> **↗ Connection · Example 10: Repeated Linear Factors**
>
> **Problem:** Find $\int \frac{2x + 1}{(x-1)^2} \, dx$
>
> **Solution:**
>
> **Step 1:** Set up partial fractions:
>
> $$\frac{2x + 1}{(x-1)^2} = \frac{A}{x-1} + \frac{B}{(x-1)^2}$$
>
> **Step 2:** Multiply by $(x-1)^2$:
>
> $$2x + 1 = A(x-1) + B$$
>
> **Step 3:** Find constants:
>
> - Let $x = 1$: $3 = 0 + B$ → $B = 3$

> - Coefficient of $x$: $2 = A$ → $A = 2$
>
> **Step 4:** Integrate:
>
> $$\int \frac{2x + 1}{(x-1)^2} \, dx = \int \left(\frac{2}{x-1} + \frac{3}{(x-1)^2}\right) dx$$

$$= 2\ln|x-1| + 3 \cdot \frac{(x-1)^{-1}}{-1} + C$$

$$= 2\ln|x-1| - \frac{3}{x-1} + C$$

#### Type 3: Irreducible Quadratic Factors

$$\frac{P(x)}{(x^2 + bx + c)} = \frac{Ax + B}{x^2 + bx + c}$$

> **↗ Connection · Example 11: Quadratic in Denominator**
>
> **Problem:** Evaluate $\int \frac{3x + 5}{x^2 + 2x + 5} \, dx$
>
> **Solution:**
>
> **Step 1:** Check if numerator is related to derivative of denominator.
>
> - $\frac{d}{dx}(x^2 + 2x + 5) = 2x + 2$
>
> **Step 2:** Write $3x + 5 = \frac{3}{2}(2x + 2) + (5 - 3) = \frac{3}{2}(2x + 2) + 2$
>
> **Step 3:** Split the integral:
>
> $$\int \frac{3x + 5}{x^2 + 2x + 5} \, dx = \int \frac{\frac{3}{2}(2x + 2)}{x^2 + 2x + 5} \, dx + \int \frac{2}{x^2 + 2x + 5} \, dx$$

$$= \frac{3}{2}\ln|x^2 + 2x + 5| + 2\int \frac{1}{x^2 + 2x + 5} \, dx$$
>
> **Step 4:** For the second integral, complete the square:
>
> $$x^2 + 2x + 5 = (x+1)^2 + 4$$

$$\int \frac{1}{(x+1)^2 + 4} \, dx = \frac{1}{2}\tan^{-1}\left(\frac{x+1}{2}\right) + C$$
>
> **Final answer:**
>
> $$= \frac{3}{2}\ln|x^2 + 2x + 5| + 2 \cdot \frac{1}{2}\tan^{-1}\left(\frac{x+1}{2}\right) + C$$

$$= \frac{3}{2}\ln|x^2 + 2x + 5| + \tan^{-1}\left(\frac{x+1}{2}\right) + C$$

---

## Memory Tricks & Patterns

### Integration Decision Flowchart

> **★ Key point · Quick Decision Guide**
>
> **1. Can you use a standard formula?** → Do it! (Fastest method)
>
> **2. Is it a product of two functions?**
>
> - Is one function’s derivative present? → **Substitution**

> - Not related by derivatives? → **Integration by parts** (use LIATE)
>
> **3. Is it a rational function (fraction)?**
>
> - Numerator = derivative of denominator? → $\ln$ formula

> - Not quite? → Adjust numerator or use **partial fractions**
>
> **4. Is it a trigonometric integral?** → See [Trigonometric Integration](../trigonometric-integration/index.md)
>
> **5. Still stuck?** → Try algebraic manipulation, trig identities, or advanced substitutions

### LIATE Mnemonic

**"**L**ately **I** **A**te **T**wo **E**ggs"**

- **L**ately = Logarithmic
- **I** = Inverse trig
- **A**te = Algebraic
- **T**wo = Trigonometric
- **E**ggs = Exponential

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Wrong Choice of u in By Parts**
>
> **WRONG:** In $\int x e^x \, dx$, choosing $u = e^x$ and $dv = x \, dx$
>
> This gives: $\int x e^x \, dx = e^x \cdot \frac{x^2}{2} - \int \frac{x^2}{2} e^x \, dx$
>
> The second integral is **more complicated** than the original!
>
> **CORRECT:** Use LIATE—choose $u = x$ (simpler after differentiation)

> **⚠ Trap #2: Forgetting to Adjust du**
>
> **Problem:** $\int x \sin(x^2) \, dx$
>
> **WRONG:** Let $u = x^2$, $du = 2x \, dx$, then $\int \sin u \, du$ (forgot to adjust!)
>
> **CORRECT:** Since $du = 2x \, dx$, we have $x \, dx = \frac{du}{2}$
>
> $$\int x \sin(x^2) \, dx = \int \sin u \cdot \frac{du}{2} = \frac{1}{2}\int \sin u \, du = -\frac{1}{2}\cos u + C = -\frac{1}{2}\cos(x^2) + C$$

> **⚠ Trap #3: Partial Fractions Without Factoring**
>
> **WRONG:** Trying to decompose $\frac{1}{x^2 + 1}$ into $\frac{A}{x} + \frac{B}{x}$ (doesn’t factor!)
>
> **CORRECT:** $x^2 + 1$ is irreducible over real numbers. Use the standard formula:
>
> $$\int \frac{1}{x^2 + 1} \, dx = \tan^{-1} x + C$$

> **⚠ Trap #4: Forgetting Absolute Value in Logarithms**
>
> **WRONG:** $\int \frac{1}{x-2} \, dx = \ln(x-2) + C$
>
> **CORRECT:** $\int \frac{1}{x-2} \, dx = \ln|x-2| + C$
>
> The absolute value is crucial for $x < 2$!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic Substitution**
>
> Evaluate: $\int \frac{1}{2x + 3} \, dx$
>
> **Solution:**

> Let $u = 2x + 3$, then $du = 2 \, dx$, so $dx = \frac{du}{2}$
>
> $$\int \frac{1}{2x + 3} \, dx = \int \frac{1}{u} \cdot \frac{du}{2} = \frac{1}{2}\ln|u| + C = \frac{1}{2}\ln|2x+3| + C$$

> **↗ Connection · Problem 2: Basic By Parts**
>
> Find: $\int x \sin x \, dx$
>
> **Solution:**

> Using LIATE: $u = x$ (Algebraic), $dv = \sin x \, dx$ (Trigonometric)
>
> - $u = x$ → $du = dx$

> - $dv = \sin x \, dx$ → $v = -\cos x$
>
> $$\int x \sin x \, dx = x(-\cos x) - \int (-\cos x) \, dx = -x\cos x + \sin x + C$$

> **↗ Connection · Problem 3: Simple Partial Fractions**
>
> Evaluate: $\int \frac{1}{x(x+1)} \, dx$
>
> **Solution:**
>
> $$\frac{1}{x(x+1)} = \frac{A}{x} + \frac{B}{x+1}$$
>
> $1 = A(x+1) + Bx$
>
> - Let $x = 0$: $1 = A$ → $A = 1$

> - Let $x = -1$: $1 = -B$ → $B = -1$
>
> $$\int \frac{1}{x(x+1)} \, dx = \int \left(\frac{1}{x} - \frac{1}{x+1}\right) dx = \ln|x| - \ln|x+1| + C = \ln\left|\frac{x}{x+1}\right| + C$$

### Level 2: JEE Main

> **↗ Connection · Problem 4: Substitution with Adjustment**
>
> **JEE Main Pattern:** Find $\int \frac{x^2}{(x^3 + 1)^4} \, dx$
>
> **Solution:**

> Let $u = x^3 + 1$, then $du = 3x^2 \, dx$, so $x^2 \, dx = \frac{du}{3}$
>
> $$\int \frac{x^2}{(x^3 + 1)^4} \, dx = \int \frac{1}{u^4} \cdot \frac{du}{3} = \frac{1}{3}\int u^{-4} \, du$$

$$= \frac{1}{3} \cdot \frac{u^{-3}}{-3} + C = -\frac{1}{9u^3} + C = -\frac{1}{9(x^3+1)^3} + C$$

> **↗ Connection · Problem 5: By Parts with Polynomial**
>
> **Problem:** Evaluate $\int (2x + 3)e^x \, dx$
>
> **Solution:**

> Using LIATE: $u = 2x + 3$, $dv = e^x \, dx$
>
> - $u = 2x + 3$ → $du = 2 \, dx$

> - $dv = e^x \, dx$ → $v = e^x$
>
> $$\int (2x + 3)e^x \, dx = (2x+3)e^x - \int e^x \cdot 2 \, dx$$

$$= (2x+3)e^x - 2e^x + C = e^x(2x + 3 - 2) + C = e^x(2x + 1) + C$$

> **↗ Connection · Problem 6: Mixed Technique**
>
> **Problem:** Find $\int \frac{5x - 2}{x^2 - 4} \, dx$
>
> **Solution:**

> Factor: $x^2 - 4 = (x-2)(x+2)$
>
> Partial fractions:
>
> $$\frac{5x - 2}{(x-2)(x+2)} = \frac{A}{x-2} + \frac{B}{x+2}$$
>
> $5x - 2 = A(x+2) + B(x-2)$
>
> - Let $x = 2$: $8 = 4A$ → $A = 2$

> - Let $x = -2$: $-12 = -4B$ → $B = 3$
>
> $$\int \frac{5x - 2}{x^2 - 4} \, dx = \int \left(\frac{2}{x-2} + \frac{3}{x+2}\right) dx$$

$$= 2\ln|x-2| + 3\ln|x+2| + C = \ln|(x-2)^2(x+2)^3| + C$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Advanced By Parts**
>
> **JEE Advanced Pattern:** Evaluate $\int x^2 \ln x \, dx$
>
> **Solution:**

> Using LIATE: $u = \ln x$ (Logarithmic), $dv = x^2 \, dx$ (Algebraic)
>
> - $u = \ln x$ → $du = \frac{1}{x} \, dx$

> - $dv = x^2 \, dx$ → $v = \frac{x^3}{3}$
>
> $$\int x^2 \ln x \, dx = \ln x \cdot \frac{x^3}{3} - \int \frac{x^3}{3} \cdot \frac{1}{x} \, dx$$

$$= \frac{x^3 \ln x}{3} - \frac{1}{3}\int x^2 \, dx$$

$$= \frac{x^3 \ln x}{3} - \frac{1}{3} \cdot \frac{x^3}{3} + C = \frac{x^3 \ln x}{3} - \frac{x^3}{9} + C$$

$$= \frac{x^3}{9}(3\ln x - 1) + C$$

> **↗ Connection · Problem 8: Tricky Substitution**
>
> **Problem:** Find $\int \frac{e^x}{e^x + 1} \, dx$
>
> **Solution:**

> Notice: If $u = e^x + 1$, then $du = e^x \, dx$ (perfect!)
>
> $$\int \frac{e^x}{e^x + 1} \, dx = \int \frac{1}{u} \, du = \ln|u| + C = \ln|e^x + 1| + C$$
>
> Since $e^x + 1 > 0$ for all $x$:
>
> $$= \ln(e^x + 1) + C$$
>
> **Alternative approach:** $\frac{e^x}{e^x + 1} = 1 - \frac{1}{e^x + 1}$ also works!

> **↗ Connection · Problem 9: Reduction Formula Pattern**
>
> **Conceptual Problem:** If $I_n = \int x^n e^x \, dx$, prove that $I_n = x^n e^x - n I_{n-1}$
>
> **Solution:**

> Use integration by parts with $u = x^n$, $dv = e^x \, dx$:
>
> - $u = x^n$ → $du = nx^{n-1} \, dx$

> - $dv = e^x \, dx$ → $v = e^x$
>
> $$I_n = \int x^n e^x \, dx = x^n e^x - \int e^x \cdot nx^{n-1} \, dx$$

$$= x^n e^x - n\int x^{n-1} e^x \, dx = x^n e^x - n I_{n-1}$$
>
> **Application:** This is a **reduction formula**—allows you to compute $I_n$ in terms of $I_{n-1}$, eventually reaching $I_0 = e^x$.
>
> This pattern is crucial for JEE Advanced!

---

## Quick Revision Box

| Method | When to Use | Example |
| --- | --- | --- |
| **Substitution** | $f(g(x)) \cdot g'(x)$ pattern | $\int x\cos(x^2) dx$ |
| **$\frac{f'(x)}{f(x)}$** | Numerator = derivative of denominator | $\int \frac{2x}{x^2+1} dx = \ln(x^2+1)$ |
| **By Parts (LIATE)** | Product of unrelated functions | $\int x e^x dx$ |
| **Partial Fractions** | Rational function (proper) | $\int \frac{1}{x^2-1} dx$ |
| **Completing Square** | Quadratic in denominator | $\int \frac{1}{x^2+4x+5} dx$ |

---

## Cross-Links & Prerequisites

**Before studying this topic:**

- [Indefinite Integrals](../indefinite-integrals/index.md) - Standard formulas
- [Differentiation Rules](../../limits-continuity-differentiability/differentiation-rules/index.md) - Chain rule, product rule
- [Higher Derivatives](../../limits-continuity-differentiability/higher-derivatives/index.md) - For repeated integration by parts

**Related topics:**

- [Trigonometric Integration](../trigonometric-integration/index.md) - Special methods for trig functions
- [Definite Integrals](../definite-integrals/index.md) - Applying these techniques with limits
- [Inverse Trigonometry](../../trigonometry/inverse-trig/index.md) - For inverse trig substitutions

**Applications:**

- [Differential Equations](../../differential-equations/index.md) - Solving ODEs requires integration techniques
- [Variable Separable Method](../../differential-equations/variable-separable/index.md) - Direct application

**Algebraic Prerequisites:**

- [Complex Numbers](../../complex-numbers/complex-basics/index.md) - For partial fractions with complex roots

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Substitution = Reverse Chain Rule:** Look for a function and its derivative hiding in the integrand. Master the $\frac{f'(x)}{f(x)} = \ln|f(x)|$ pattern.

> 2. **LIATE is Your Best Friend:** For integration by parts, always use LIATE to choose $u$. Logarithmic and inverse trig functions should almost always be $u$.

> 3. **Partial Fractions: Factor First:** You can’t decompose what you can’t factor. Linear factors give logarithms, quadratic factors need completing the square.

> 4. **Practice Decision Making:** The hardest part isn’t doing the integration—it’s choosing the right method. Build your pattern recognition by solving 50+ problems.

> 5. **Verify by Differentiation:** After finding an antiderivative, always check by differentiating. This catches silly mistakes and builds confidence.
>
> **“Integration is 50% technique and 50% pattern recognition. Master the techniques here, and you’ll solve 80% of JEE integration problems.”**
>
> **JEE Strategy:** In the exam, spend 10-15 seconds deciding the method before starting. A wrong method can waste 3-4 minutes!

---

## What’s Next?

You’ve mastered the core techniques! Now specialize:

1. **Next:** [Trigonometric Integration](../trigonometric-integration/index.md) - Special identities and transformations for trig integrals
2. **Then:** [Definite Integrals](../definite-integrals/index.md) - Adding limits and using properties
3. **Finally:** [Applications of Integrals](../applications-integrals/index.md) - Finding areas, volumes, and solving real problems

Keep practicing—integration mastery is a marathon, not a sprint!

From TestGuru · our mock-test platform

## You've read Advanced Integration Techniques: Substitution, By Parts, and Partial Fractions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=integral-calculus&tg_exam=jee-main&tg_page=%2Fmathematics%2Fintegral-calculus%2Fintegration-techniques%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/integral-calculus/integration-techniques/",this.page.identifier="/mathematics/integral-calculus/integration-techniques/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421713662609"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421713662609")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/integral-calculus/integration-techniques/](https://jeenotes.in/mathematics/integral-calculus/integration-techniques/) · raw HTML: `offline/mathematics/integral-calculus/integration-techniques/index.html`_
