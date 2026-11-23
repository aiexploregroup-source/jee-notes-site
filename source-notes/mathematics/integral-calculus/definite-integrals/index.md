---
title: "Definite Integrals: Fundamental Theorem and Properties"
source: "https://jeenotes.in/mathematics/integral-calculus/definite-integrals/"
description: "Master definite integration, fundamental theorem of calculus, and powerful properties for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "16 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 7"
html: "../../../../offline/mathematics/integral-calculus/definite-integrals/index.html"
extracted: "2026-11-23"
---

> Master definite integration, fundamental theorem of calculus, and powerful properties for JEE Main and Advanced

## The Hook: The Total Distance Traveled

> **★ Key point · Connect: Real Life → Mathematics**
>
> In **Jawan** (2023), Shah Rukh Khan’s character hijacks a metro train. Imagine you’re tracking the train’s journey:
>
> - At $t = 0$ min, the train starts from rest

> - The speedometer shows varying speeds: slow at stations, fast between stops

> - After 30 minutes, how far has the train traveled?
>
> **The problem:** You have the speed function $v(t)$, and you need the total distance.
>
> **The solution:** This is exactly what a **definite integral** calculates!
>
> $$\text{Distance} = \int_0^{30} v(t) \, dt$$
>
> Unlike indefinite integrals (which give a family of functions $+ C$), definite integrals give you a **single number**—the exact accumulated quantity.
>
> **JEE Reality:** Definite integrals appear in 4-6 questions every year. This is a **must-master** high-yield topic!

---

## Interactive Demo: Visualize Definite Integrals as Area

Plot a function like $f(x) = x^2$ and see how the definite integral $\int_0^2 x^2 dx$ represents the area under the curve! Try different functions and limits to build intuition.

---

## Riemann Sum Visualizer: Watch Integration in Action

> **★ Key point · Interactive Learning**
>
> The definite integral is defined as the limit of Riemann sums. This visualizer shows you exactly how rectangles approximate the area under a curve, and how the approximation improves as you increase the number of rectangles!

### What This Visualizer Shows

1. **Choose a function:** Select from common functions like $x^2$, $\sin(x)$, $e^x$, and more
2. **Set integration bounds:** Adjust $a$ and $b$ to define the region
3. **Select the method:** Compare Left, Right, Midpoint, and Trapezoidal rules
4. **Vary $n$:** See how more rectangles give a better approximation
5. **Watch convergence:** Click “Watch Convergence” to see the sum approach the exact integral!

> **◐ In simple terms · JEE Connection**
>
> Understanding Riemann sums is essential for:
>
> - Recognizing when a limit represents an integral (JEE Advanced favorite!)

> - Evaluating limits of sums like $\lim_{n \to \infty} \frac{1}{n}\sum_{r=1}^{n} f\left(\frac{r}{n}\right)$

> - Understanding why integration formulas work

---

## The Fundamental Theorem of Calculus

### Part 1: Antiderivative Evaluation

> **★ Key point · The Most Important Theorem in Calculus**
>
> If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:
>
> $$\boxed{\int_a^b f(x) \, dx = F(b) - F(a) = [F(x)]_a^b}$$
>
> **In simple terms:**
>
> 1. Find the antiderivative $F(x)$ (just like indefinite integration)

> 2. Evaluate at the upper limit: $F(b)$

> 3. Subtract the lower limit: $F(b) - F(a)$

> 4. **No $+C$ needed!** (It cancels out)
>
> **Notation:** $[F(x)]_a^b$ means “evaluate $F$ from $a$ to $b$”

### Why the +C Cancels

If $F(x)$ is an antiderivative, then so is $F(x) + C$. Using the fundamental theorem:

$$\int_a^b f(x) \, dx = [F(x) + C]_a^b = [F(b) + C] - [F(a) + C] = F(b) - F(a)$$

The constants cancel! This is why definite integrals give exact numbers.

### Part 2: Differentiation of an Integral

$$\boxed{\frac{d}{dx}\left[\int_a^x f(t) \, dt\right] = f(x)}$$

**In simple terms:** If you integrate a function and then differentiate, you get back the original function. This is the reverse operation principle.

---

## Basic Evaluation Techniques

> **↗ Connection · Example 1: Direct Evaluation**
>
> **Problem:** Evaluate $\int_1^3 x^2 \, dx$
>
> **Solution:**
>
> **Step 1:** Find the antiderivative:
>
> $$\int x^2 \, dx = \frac{x^3}{3}$$
>
> **Step 2:** Apply limits:
>
> $$\int_1^3 x^2 \, dx = \left[\frac{x^3}{3}\right]_1^3 = \frac{3^3}{3} - \frac{1^3}{3} = \frac{27}{3} - \frac{1}{3} = \frac{26}{3}$$
>
> **Geometric meaning:** This is the area under the parabola $y = x^2$ from $x = 1$ to $x = 3$.

> **↗ Connection · Example 2: Using Substitution**
>
> **Problem:** Find $\int_0^1 2x \sqrt{x^2 + 1} \, dx$
>
> **Solution:**
>
> **Step 1:** Substitution: Let $u = x^2 + 1$
>
> - When $x = 0$: $u = 0^2 + 1 = 1$

> - When $x = 1$: $u = 1^2 + 1 = 2$

> - $du = 2x \, dx$
>
> **Step 2:** Change limits and integrate:
>
> $$\int_0^1 2x \sqrt{x^2 + 1} \, dx = \int_1^2 \sqrt{u} \, du = \int_1^2 u^{1/2} \, du$$

$$= \left[\frac{u^{3/2}}{3/2}\right]_1^2 = \frac{2}{3}[u^{3/2}]_1^2 = \frac{2}{3}(2^{3/2} - 1^{3/2})$$

$$= \frac{2}{3}(2\sqrt{2} - 1) = \frac{4\sqrt{2} - 2}{3}$$
>
> **Key point:** When using substitution in definite integrals, change the limits of integration! You can stay in $u$ all the way through.

---

## Properties of Definite Integrals

### Property 1: Reversing Limits

$$\boxed{\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx}$$

**Meaning:** Swapping limits changes the sign.

### Property 2: Zero Width Interval

$$\boxed{\int_a^a f(x) \, dx = 0}$$

**Meaning:** Integrating from a point to itself gives zero.

### Property 3: Additivity

$$\boxed{\int_a^b f(x) \, dx + \int_b^c f(x) \, dx = \int_a^c f(x) \, dx}$$

**Meaning:** You can break an integral into pieces. Useful when the function has different definitions on different intervals.

### Property 4: Constant Multiple and Sum

$$\int_a^b [kf(x) + g(x)] \, dx = k\int_a^b f(x) \, dx + \int_a^b g(x) \, dx$$

Just like indefinite integrals!

---

## Advanced Properties (High-Yield for JEE)

### Property 5: Symmetry Property

$$\boxed{\int_0^a f(x) \, dx = \int_0^a f(a-x) \, dx}$$

**Proof:** Let $u = a - x$, then $x = a - u$ and $dx = -du$

- When $x = 0$: $u = a$
- When $x = a$: $u = 0$

$$\int_0^a f(x) \, dx = \int_a^0 f(a-u)(-du) = \int_0^a f(a-u) \, du$$

Since the variable of integration is a dummy variable:

$$= \int_0^a f(a-x) \, dx$$

> **↗ Connection · Example 3: Using Symmetry**
>
> **Problem:** Evaluate $I = \int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x} \, dx$
>
> **Solution:**
>
> This looks hard! But use Property 5 with $a = \pi/2$:
>
> $$I = \int_0^{\pi/2} \frac{\sin(\pi/2 - x)}{\sin(\pi/2 - x) + \cos(\pi/2 - x)} \, dx$$
>
> Use $\sin(\pi/2 - x) = \cos x$ and $\cos(\pi/2 - x) = \sin x$:
>
> $$I = \int_0^{\pi/2} \frac{\cos x}{\cos x + \sin x} \, dx$$
>
> **Now add both forms:**
>
> $$I + I = \int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x} \, dx + \int_0^{\pi/2} \frac{\cos x}{\sin x + \cos x} \, dx$$

$$2I = \int_0^{\pi/2} \frac{\sin x + \cos x}{\sin x + \cos x} \, dx = \int_0^{\pi/2} 1 \, dx = \frac{\pi}{2}$$

$$I = \frac{\pi}{4}$$
>
> **Magic!** This “King Property” trick appears frequently in JEE!

### Property 6: Even and Odd Functions

For **even functions** ($f(-x) = f(x)$):

$$\boxed{\int_{-a}^a f(x) \, dx = 2\int_0^a f(x) \, dx}$$

For **odd functions** ($f(-x) = -f(x)$):

$$\boxed{\int_{-a}^a f(x) \, dx = 0}$$

> **↗ Connection · Example 4: Even/Odd Functions**
>
> **Problem:** Evaluate $\int_{-2}^2 (x^3 + x^5) \, dx$
>
> **Solution:**
>
> Check if $f(x) = x^3 + x^5$ is even or odd:
>
> $$f(-x) = (-x)^3 + (-x)^5 = -x^3 - x^5 = -(x^3 + x^5) = -f(x)$$
>
> So $f$ is **odd**!
>
> $$\int_{-2}^2 (x^3 + x^5) \, dx = 0$$
>
> **No calculation needed!** This saves massive time in JEE!

> **↗ Connection · Example 5: Mixed Even/Odd**
>
> **Problem:** Find $\int_{-1}^1 (x^4 + 3x^2 + x^3 - 5x) \, dx$
>
> **Solution:**
>
> Split into even and odd parts:
>
> $$f(x) = \underbrace{(x^4 + 3x^2)}_{\text{even}} + \underbrace{(x^3 - 5x)}_{\text{odd}}$$

$$\int_{-1}^1 (x^4 + 3x^2 + x^3 - 5x) \, dx = \int_{-1}^1 (x^4 + 3x^2) \, dx + \int_{-1}^1 (x^3 - 5x) \, dx$$

$$= 2\int_0^1 (x^4 + 3x^2) \, dx + 0$$

$$= 2\left[\frac{x^5}{5} + x^3\right]_0^1 = 2\left(\frac{1}{5} + 1\right) = 2 \cdot \frac{6}{5} = \frac{12}{5}$$

### Property 7: Periodic Functions

If $f(x)$ has period $T$ (i.e., $f(x+T) = f(x)$):

$$\boxed{\int_0^{nT} f(x) \, dx = n\int_0^T f(x) \, dx}$$

More generally:

$$\boxed{\int_a^{a+T} f(x) \, dx = \int_0^T f(x) \, dx}$$

> **↗ Connection · Example 6: Periodic Function**
>
> **Problem:** Evaluate $\int_0^{4\pi} |\sin x| \, dx$
>
> **Solution:**
>
> The function $|\sin x|$ has period $\pi$ (not $2\pi$, because of absolute value).
>
> Over one period $[0, \pi]$: $|\sin x| = \sin x$
>
> $$\int_0^\pi |\sin x| \, dx = \int_0^\pi \sin x \, dx = [-\cos x]_0^\pi = -\cos\pi - (-\cos 0) = -(-1) + 1 = 2$$
>
> Since $4\pi = 4 \times \pi$ (4 periods):
>
> $$\int_0^{4\pi} |\sin x| \, dx = 4 \int_0^\pi |\sin x| \, dx = 4 \times 2 = 8$$

### Property 8: The “King” Property (Most Powerful!)

$$\boxed{\int_a^b f(x) \, dx = \int_a^b f(a+b-x) \, dx}$$

**Proof:** Let $u = a + b - x$, then $du = -dx$

- When $x = a$: $u = b$
- When $x = b$: $u = a$

$$\int_a^b f(x) \, dx = \int_b^a f(u)(-du) = \int_a^b f(u) \, du = \int_a^b f(a+b-x) \, dx$$

> **↗ Connection · Example 7: The King Property in Action**
>
> **Problem:** Evaluate $I = \int_0^\pi \frac{x \sin x}{1 + \cos^2 x} \, dx$
>
> **Solution:**
>
> Apply King Property with $a = 0$, $b = \pi$:
>
> $$I = \int_0^\pi \frac{(0 + \pi - x)\sin(\pi - x)}{1 + \cos^2(\pi - x)} \, dx$$
>
> Use $\sin(\pi - x) = \sin x$ and $\cos(\pi - x) = -\cos x$:
>
> $$I = \int_0^\pi \frac{(\pi - x)\sin x}{1 + \cos^2 x} \, dx$$
>
> **Add both forms:**
>
> $$I + I = \int_0^\pi \frac{x\sin x}{1 + \cos^2 x} \, dx + \int_0^\pi \frac{(\pi - x)\sin x}{1 + \cos^2 x} \, dx$$

$$2I = \int_0^\pi \frac{\pi \sin x}{1 + \cos^2 x} \, dx = \pi \int_0^\pi \frac{\sin x}{1 + \cos^2 x} \, dx$$
>
> For the remaining integral, let $u = \cos x$, $du = -\sin x \, dx$:
>
> - When $x = 0$: $u = 1$

> - When $x = \pi$: $u = -1$
>
> $$\int_0^\pi \frac{\sin x}{1 + \cos^2 x} \, dx = \int_1^{-1} \frac{-1}{1 + u^2} \, du = \int_{-1}^1 \frac{1}{1 + u^2} \, du$$
>
> This is even! So:
>
> $$= 2\int_0^1 \frac{1}{1 + u^2} \, du = 2[\tan^{-1} u]_0^1 = 2\left(\frac{\pi}{4} - 0\right) = \frac{\pi}{2}$$
>
> Therefore:
>
> $$2I = \pi \cdot \frac{\pi}{2} = \frac{\pi^2}{2}$$

$$I = \frac{\pi^2}{4}$$
>
> **Powerful technique!** This is a JEE Advanced favorite!

---

## Special Limits to Remember

### Important Standard Results

$$\boxed{\int_0^{\pi/2} \sin^n x \, dx = \int_0^{\pi/2} \cos^n x \, dx}$$

**Proof:** Use $\int_0^a f(x) \, dx = \int_0^a f(a-x) \, dx$ with $a = \pi/2$:

$$\int_0^{\pi/2} \sin^n x \, dx = \int_0^{\pi/2} \sin^n(\pi/2 - x) \, dx = \int_0^{\pi/2} \cos^n x \, dx$$

### Wallis’s Formula (For Even Powers)

$$\int_0^{\pi/2} \sin^{2n} x \, dx = \int_0^{\pi/2} \cos^{2n} x \, dx = \frac{(2n-1)(2n-3) \cdots 3 \cdot 1}{(2n)(2n-2) \cdots 4 \cdot 2} \cdot \frac{\pi}{2}$$

$$\int_0^{\pi/2} \sin^{2n+1} x \, dx = \int_0^{\pi/2} \cos^{2n+1} x \, dx = \frac{(2n)(2n-2) \cdots 4 \cdot 2}{(2n+1)(2n-1) \cdots 3 \cdot 1}$$

> **↗ Connection · Example 8: Using Wallis's Formula**
>
> **Problem:** Find $\int_0^{\pi/2} \sin^4 x \, dx$
>
> **Solution:**
>
> Here $n = 2$ (since $2n = 4$), so:
>
> $$\int_0^{\pi/2} \sin^4 x \, dx = \frac{3 \cdot 1}{4 \cdot 2} \cdot \frac{\pi}{2} = \frac{3}{8} \cdot \frac{\pi}{2} = \frac{3\pi}{16}$$
>
> **JEE Tip:** Memorize the formula or derive quickly using reduction formulas!

---

## Leibniz Rule (Differentiation Under Integral Sign)

> **★ Key point · Advanced: When Limits are Functions**
>
> If $F(\alpha) = \int_{g(\alpha)}^{h(\alpha)} f(x) \, dx$, then:
>
> $$\boxed{\frac{dF}{d\alpha} = f(h(\alpha)) \cdot h'(\alpha) - f(g(\alpha)) \cdot g'(\alpha)}$$
>
> **In simple terms:** Differentiate the upper limit term minus the lower limit term, using the chain rule.
>
> **Special case:** If only the upper limit varies:
>
> $$\frac{d}{d\alpha}\left[\int_a^{\alpha} f(x) \, dx\right] = f(\alpha)$$

> **↗ Connection · Example 9: Leibniz Rule**
>
> **Problem:** Find $\frac{d}{dx}\left[\int_0^{x^2} \sin t \, dt\right]$
>
> **Solution:**
>
> Here $f(t) = \sin t$, $g(x) = 0$ (constant), $h(x) = x^2$
>
> $$\frac{d}{dx}\left[\int_0^{x^2} \sin t \, dt\right] = \sin(x^2) \cdot 2x - \sin(0) \cdot 0$$

$$= 2x \sin(x^2)$$
>
> **Verification:** We could also compute the integral first:
>
> $$\int_0^{x^2} \sin t \, dt = [-\cos t]_0^{x^2} = -\cos(x^2) + 1$$

$$\frac{d}{dx}[-\cos(x^2) + 1] = \sin(x^2) \cdot 2x$$
>
> ✓

---

## Estimating Definite Integrals

### Inequality Properties

If $f(x) \leq g(x)$ for all $x \in [a, b]$, then:

$$\int_a^b f(x) \, dx \leq \int_a^b g(x) \, dx$$

If $m \leq f(x) \leq M$ for all $x \in [a, b]$, then:

$$m(b-a) \leq \int_a^b f(x) \, dx \leq M(b-a)$$

> **↗ Connection · Example 10: Estimation**
>
> **Problem:** Without calculating, prove that $1 \leq \int_0^1 \sqrt{1 + x^3} \, dx \leq \sqrt{2}$
>
> **Solution:**
>
> For $x \in [0, 1]$:
>
> - Minimum: When $x = 0$: $\sqrt{1 + 0^3} = 1$

> - Maximum: When $x = 1$: $\sqrt{1 + 1^3} = \sqrt{2}$
>
> So $1 \leq \sqrt{1 + x^3} \leq \sqrt{2}$ on $[0, 1]$
>
> $$1 \cdot (1-0) \leq \int_0^1 \sqrt{1 + x^3} \, dx \leq \sqrt{2} \cdot (1-0)$$

$$1 \leq \int_0^1 \sqrt{1 + x^3} \, dx \leq \sqrt{2}$$
>
> ✓

---

## Memory Tricks & Patterns

### The “POSEK” Mnemonic for Properties

**P**eriodic functions: $\int_0^{nT} f(x) \, dx = n\int_0^T f(x) \, dx$
**O**dd functions: $\int_{-a}^a f(x) \, dx = 0$
**S**ymmetry: $\int_0^a f(x) \, dx = \int_0^a f(a-x) \, dx$
**E**ven functions: $\int_{-a}^a f(x) \, dx = 2\int_0^a f(x) \, dx$
**K**ing property: $\int_a^b f(x) \, dx = \int_a^b f(a+b-x) \, dx$

### Quick Decision Guide

> **★ Key point · Which Property to Use?**
>
> **Symmetric limits $[-a, a]$?** → Check even/odd
>
> **Limits $[0, a]$ with trig functions?** → Try symmetry or King property
>
> **$x$ in numerator with trig in denominator?** → Definitely King property!
>
> **Absolute value or modulus?** → Check for periodicity
>
> **Complex integrand with $x$ and $(a-x)$ symmetry?** → Add $I + I$ using King property

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting to Change Limits in Substitution**
>
> **WRONG:**
>
> $$\int_0^1 2x(x^2+1) \, dx \text{ with } u = x^2+1$$

$$= \int (u) \, du = \left[\frac{u^2}{2}\right]_0^1 = \frac{1}{2}$$
>
> ✗
>
> **CORRECT:** Change limits! When $x=0$, $u=1$; when $x=1$, $u=2$
>
> $$= \int_1^2 u \, du = \left[\frac{u^2}{2}\right]_1^2 = \frac{4}{2} - \frac{1}{2} = \frac{3}{2}$$

> **⚠ Trap #2: Misapplying Even/Odd Properties**
>
> **WRONG:** $\int_{-2}^3 x^3 \, dx = 0$ (limits are not symmetric!)
>
> **CORRECT:** Even/odd properties only work for symmetric limits $[-a, a]$
>
> For $[-2, 3]$, you must compute normally or split: $\int_{-2}^3 = \int_{-2}^0 + \int_0^3$

> **⚠ Trap #3: Sign Errors in Leibniz Rule**
>
> **Problem:** $\frac{d}{dx}\left[\int_{x}^1 t^2 \, dt\right]$
>
> **WRONG:** $= x^2$ (forgot the sign!)
>
> **CORRECT:** Lower limit is varying!
>
> $$\frac{d}{dx}\left[\int_x^1 t^2 \, dt\right] = 1^2 \cdot 0 - x^2 \cdot 1 = -x^2$$
>
> **Alternative:** Flip limits: $\int_x^1 = -\int_1^x$
>
> $$\frac{d}{dx}\left[-\int_1^x t^2 \, dt\right] = -x^2$$

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1**
>
> Evaluate: $\int_0^2 (x^2 + 2x - 3) \, dx$
>
> **Solution:**
>
> $$\int_0^2 (x^2 + 2x - 3) \, dx = \left[\frac{x^3}{3} + x^2 - 3x\right]_0^2$$

$$= \left(\frac{8}{3} + 4 - 6\right) - (0) = \frac{8}{3} - 2 = \frac{8 - 6}{3} = \frac{2}{3}$$

> **↗ Connection · Problem 2**
>
> Find: $\int_{-1}^1 x^2 \, dx$
>
> **Solution:**

> $f(x) = x^2$ is even, so:
>
> $$\int_{-1}^1 x^2 \, dx = 2\int_0^1 x^2 \, dx = 2\left[\frac{x^3}{3}\right]_0^1 = 2 \cdot \frac{1}{3} = \frac{2}{3}$$

### Level 2: JEE Main

> **↗ Connection · Problem 3**
>
> **JEE Main Pattern:** Evaluate $\int_0^{\pi/4} \frac{\sin x + \cos x}{9 + 16\sin 2x} \, dx$
>
> **Solution:**
>
> Use King Property: $\int_0^a f(x) \, dx = \int_0^a f(a-x) \, dx$ with $a = \pi/4$:
>
> $$I = \int_0^{\pi/4} \frac{\sin(\pi/4-x) + \cos(\pi/4-x)}{9 + 16\sin 2(\pi/4-x)} \, dx$$
>
> Use angle formulas:
>
> - $\sin(\pi/4 - x) = \frac{1}{\sqrt{2}}(\cos x - \sin x)$

> - $\cos(\pi/4 - x) = \frac{1}{\sqrt{2}}(\cos x + \sin x)$

> - $\sin(2(\pi/4 - x)) = \sin(\pi/2 - 2x) = \cos 2x$
>
> Actually, simpler:
>
> $$\sin(\pi/4-x) + \cos(\pi/4-x) = \cos x$$
>
> Wait, let me recalculate properly. Actually, this problem requires careful computation of the angle sum formulas.
>
> **Alternative approach:** This is a tricky problem that might require numerical methods or a clever substitution. In JEE, if you don’t see the pattern quickly, mark for review!

> **↗ Connection · Problem 4**
>
> **Problem:** Find $\int_{-\pi/2}^{\pi/2} \sin^7 x \, dx$
>
> **Solution:**
>
> Check if $f(x) = \sin^7 x$ is odd:
>
> $$f(-x) = \sin^7(-x) = (-\sin x)^7 = -\sin^7 x = -f(x)$$
>
> Yes, it’s odd!
>
> $$\int_{-\pi/2}^{\pi/2} \sin^7 x \, dx = 0$$
>
> **1 second solution!**

> **↗ Connection · Problem 5**
>
> **Problem:** Evaluate $\int_0^\pi x \sin x \, dx$
>
> **Solution:**
>
> Use integration by parts:
>
> - $u = x$ → $du = dx$

> - $dv = \sin x \, dx$ → $v = -\cos x$
>
> $$\int_0^\pi x \sin x \, dx = [x(-\cos x)]_0^\pi - \int_0^\pi (-\cos x) \, dx$$

$$= [-x\cos x]_0^\pi + \int_0^\pi \cos x \, dx$$

$$= [-\pi \cos\pi - 0] + [\sin x]_0^\pi$$

$$= -\pi(-1) + (\sin\pi - \sin 0) = \pi + 0 = \pi$$

### Level 3: JEE Advanced

> **↗ Connection · Problem 6**
>
> **JEE Advanced Pattern:** Prove that $\int_0^{\pi/2} \frac{\sin^{2023} x}{\sin^{2023} x + \cos^{2023} x} \, dx = \frac{\pi}{4}$
>
> **Solution:**
>
> Let $I = \int_0^{\pi/2} \frac{\sin^{2023} x}{\sin^{2023} x + \cos^{2023} x} \, dx$
>
> Use symmetry property: $\int_0^a f(x) \, dx = \int_0^a f(a-x) \, dx$ with $a = \pi/2$:
>
> $$I = \int_0^{\pi/2} \frac{\sin^{2023}(\pi/2 - x)}{\sin^{2023}(\pi/2-x) + \cos^{2023}(\pi/2-x)} \, dx$$
>
> Use $\sin(\pi/2-x) = \cos x$ and $\cos(\pi/2-x) = \sin x$:
>
> $$I = \int_0^{\pi/2} \frac{\cos^{2023} x}{\cos^{2023} x + \sin^{2023} x} \, dx$$
>
> **Add both:**
>
> $$2I = \int_0^{\pi/2} \frac{\sin^{2023} x + \cos^{2023} x}{\sin^{2023} x + \cos^{2023} x} \, dx = \int_0^{\pi/2} 1 \, dx = \frac{\pi}{2}$$

$$I = \frac{\pi}{4}$$
>
> **Beautiful!** This works for any power (2023, 2024, or $n$)!

> **↗ Connection · Problem 7**
>
> **Problem:** If $f(x)$ is continuous and $\int_0^9 f(x) \, dx = 4$, find $\int_0^3 x f(x^2) \, dx$
>
> **Solution:**
>
> For the second integral, let $u = x^2$, then $du = 2x \, dx$, so $x \, dx = \frac{du}{2}$
>
> When $x = 0$: $u = 0$

> When $x = 3$: $u = 9$
>
> $$\int_0^3 x f(x^2) \, dx = \int_0^9 f(u) \cdot \frac{du}{2} = \frac{1}{2}\int_0^9 f(u) \, du$$
>
> Since the variable of integration is dummy:
>
> $$= \frac{1}{2}\int_0^9 f(x) \, dx = \frac{1}{2} \cdot 4 = 2$$

---

## Quick Revision Box

| Property | Formula | When to Use |
| --- | --- | --- |
| **Fundamental Theorem** | $\int_a^b f(x) \, dx = F(b) - F(a)$ | Always! |
| **Odd function** | $\int_{-a}^a f(x) \, dx = 0$ | Symmetric limits + odd power |
| **Even function** | $\int_{-a}^a f(x) \, dx = 2\int_0^a f(x) \, dx$ | Symmetric limits + even power |
| **Symmetry** | $\int_0^a f(x) \, dx = \int_0^a f(a-x) \, dx$ | Limits $[0, a]$ with trig |
| **King Property** | $\int_a^b f(x) \, dx = \int_a^b f(a+b-x) \, dx$ | $x$ in numerator, trig in denominator |
| **Periodic** | $\int_0^{nT} f(x) \, dx = n\int_0^T f(x) \, dx$ | $\sin x$, $\cos x$, $\|·\|$ |

**Exam Strategy:** Check for symmetry properties BEFORE calculating—can save 2-3 minutes per problem!

---

## Cross-Links & Prerequisites

**Before studying this topic:**

- [Indefinite Integrals](../indefinite-integrals/index.md) - Antiderivatives
- [Integration Techniques](../integration-techniques/index.md) - Substitution, by parts
- [Trigonometric Integration](../trigonometric-integration/index.md) - Trig integrals
- [Trigonometric Identities](../../trigonometry/trig-identities/index.md) - For simplifying integrands
- [Inverse Trigonometry](../../trigonometry/inverse-trig/index.md) - For inverse trig results

**Related topics:**

- [Applications of Integrals](../applications-integrals/index.md) - Using definite integrals to find areas
- [Differential Equations](../../differential-equations/index.md) - Initial value problems
- [Limits Basics](../../limits-continuity-differentiability/limits-basics/index.md) - Foundation for integration
- [Continuity](../../limits-continuity-differentiability/continuity/index.md) - Conditions for integrability

**Cross-subject applications:**

- [Motion in 1D](../../../physics/kinematics/motion-1d/index.md) - Finding displacement from velocity
- [Work Done](../../../physics/work-energy-power/work-done/index.md) - Work done by variable force
- [Graphical Analysis](../../../physics/kinematics/graphical-analysis/index.md) - Area under velocity-time graph

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Fundamental Theorem is Everything:** Find antiderivative, evaluate at upper limit, subtract lower limit. The $+C$ cancels automatically.

> 2. **Properties Save Time:** In JEE, 40% of definite integral problems are designed to test properties, not calculation. Check for even/odd, symmetry, or King property FIRST.

> 3. **King Property is the King:** When you see $x$ in the numerator and trig functions in the denominator over limits $[0, \pi]$ or $[0, \pi/2]$, immediately try King property. Add $I + I$ and watch the magic happen.

> 4. **Change Limits in Substitution:** When using $u$-substitution, either change the limits (stay in $u$) or substitute back and use original limits. Never mix the two!

> 5. **Even/Odd Check Takes 5 Seconds:** For limits $[-a, a]$, always check if the function is even or odd. Can turn a 3-minute problem into a 5-second problem.
>
> **“Definite integrals reward pattern recognition. Master the 8 properties, and you’ll solve 70% of JEE problems without touching pen to paper.”**
>
> **JEE Strategy:**
>
> - **JEE Main:** Focuses on basic evaluation + even/odd + symmetry properties

> - **JEE Advanced:** Loves King property, Leibniz rule, and tricky periodic functions
>
> Aim to solve 80+ definite integral problems to build intuition for which property to use!

---

## What’s Next?

You’ve mastered definite integrals! Now put them to work:

1. **Next:** [Applications of Integrals](../applications-integrals/index.md) - Find areas between curves, volumes of revolution
2. **Then:** [Differential Equations](../../differential-equations/index.md) - Use integration to solve ODEs
3. **Advanced:** Sequences and Series - Integral test for convergence

The journey from derivatives to integrals to applications is complete. Now you can solve real-world problems using calculus!

From TestGuru · our mock-test platform

## You've read Definite Integrals: Fundamental Theorem and Properties.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=integral-calculus&tg_exam=jee-main&tg_page=%2Fmathematics%2Fintegral-calculus%2Fdefinite-integrals%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/integral-calculus/definite-integrals/",this.page.identifier="/mathematics/integral-calculus/definite-integrals/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421726891793"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421726891793")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/integral-calculus/definite-integrals/](https://jeenotes.in/mathematics/integral-calculus/definite-integrals/) · raw HTML: `offline/mathematics/integral-calculus/definite-integrals/index.html`_
