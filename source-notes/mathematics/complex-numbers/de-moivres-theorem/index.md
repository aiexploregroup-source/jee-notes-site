---
title: "De Moivre's Theorem: Powers and Roots"
source: "https://jeenotes.in/mathematics/complex-numbers/de-moivres-theorem/"
description: "Master De Moivre's theorem for finding powers and nth roots of complex numbers for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 4 of 8"
html: "../../../../offline/mathematics/complex-numbers/de-moivres-theorem/index.html"
extracted: "2026-11-23"
---

> Master De Moivre's theorem for finding powers and nth roots of complex numbers for JEE Main & Advanced.

## The Hook: The Power of Rotation!

> **★ Key point · Connect: Thor's Hammer and Rotations**
>
> In **Thor** movies, when Thor swings Mjolnir (his hammer) in circles, each rotation multiplies the momentum. If he rotates it $n$ times, the effect is multiplied $n$ times!
>
> De Moivre’s theorem works similarly — when you raise a complex number to power $n$, you **multiply the angle by $n$** and **raise the modulus to power $n$**. It’s like spinning Thor’s hammer $n$ times!
>
> **Real-world application:** Signal processing, quantum mechanics, and solving polynomial equations all use this theorem!
>
> **Why this matters for JEE:** De Moivre’s theorem appears in 1-2 questions and is essential for finding roots of unity and solving higher-degree equations. Master it for quick solutions!

---

## Prerequisites

Before learning De Moivre’s theorem, ensure you understand:

- [Modulus and Argument](../modulus-argument/index.md) — Polar form $z = r(\cos\theta + i\sin\theta)$
- [Trigonometry](../../trigonometry/index.md) — Multiple angle formulas
- Exponent laws — $(a^m)^n = a^{mn}$
- Euler’s formula — $e^{i\theta} = \cos\theta + i\sin\theta$

---

## Interactive Demo: Visualize De Moivre’s Theorem

Explore De Moivre’s theorem in action! Use the **De Moivre’s Power** slider to raise z to different powers and watch:

- The **angle multiplies** by n (the argument becomes n times theta)
- The **modulus raises** to power n (r becomes r^n)

Click **Animate z^n** to see the smooth rotation! Try the **Roots of Unity** presets to see:

- Cube roots forming an equilateral triangle
- Fourth roots forming a square
- Fifth roots forming a regular pentagon
- How all nth roots sum to zero!

---

## De Moivre’s Theorem: The Statement

### For Positive Integer Powers

For any real number $\theta$ and positive integer $n$:

$$\boxed{(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)}$$

**In simple terms:** When you raise a complex number on the unit circle to power $n$, multiply the angle by $n$!

### General Form

For any complex number $z = r(\cos\theta + i\sin\theta)$ and positive integer $n$:

$$\boxed{z^n = r^n(\cos(n\theta) + i\sin(n\theta))}$$

**Breaking it down:**

- **Modulus:** $|z^n| = |z|^n = r^n$ (raise modulus to power $n$)
- **Argument:** $\arg(z^n) = n\theta$ (multiply angle by $n$)

### Using Exponential Form

Using Euler’s formula $e^{i\theta} = \cos\theta + i\sin\theta$:

$$\boxed{(re^{i\theta})^n = r^n e^{in\theta}}$$

This is the cleanest form!

---

## Why Does It Work?

### Proof for Positive Integers (by Induction)

**Base case:** $n = 1$

$$(\cos\theta + i\sin\theta)^1 = \cos(1 \cdot \theta) + i\sin(1 \cdot \theta)$$

✓

**Inductive step:** Assume true for $n = k$:

$$(\cos\theta + i\sin\theta)^k = \cos(k\theta) + i\sin(k\theta)$$

For $n = k + 1$:

$$(\cos\theta + i\sin\theta)^{k+1} = (\cos\theta + i\sin\theta)^k \cdot (\cos\theta + i\sin\theta)$$

$$= [\cos(k\theta) + i\sin(k\theta)][\cos\theta + i\sin\theta]$$

Using the multiplication formula for polar forms:

$$= \cos(k\theta + \theta) + i\sin(k\theta + \theta)$$

$$= \cos[(k+1)\theta] + i\sin[(k+1)\theta]$$

✓

**By induction, theorem holds for all positive integers $n$!**

---

## Applications: Finding Powers

### Example 1: Simple Power

Find $(1 + i)^{10}$.

**Solution:**

Step 1: Convert to polar form.

$|1 + i| = \sqrt{1^2 + 1^2} = \sqrt{2}$

$\arg(1 + i) = \frac{\pi}{4}$ (Quadrant I)

So $1 + i = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right)$

Step 2: Apply De Moivre’s theorem.

$$(1 + i)^{10} = (\sqrt{2})^{10}\left[\cos\left(10 \cdot \frac{\pi}{4}\right) + i\sin\left(10 \cdot \frac{\pi}{4}\right)\right]$$

$$= 2^5\left[\cos\frac{10\pi}{4} + i\sin\frac{10\pi}{4}\right]$$

$$= 32\left[\cos\frac{5\pi}{2} + i\sin\frac{5\pi}{2}\right]$$

Step 3: Simplify using periodicity.

$\frac{5\pi}{2} = 2\pi + \frac{\pi}{2}$

$$\cos\frac{5\pi}{2} = \cos\frac{\pi}{2} = 0$$

$$\sin\frac{5\pi}{2} = \sin\frac{\pi}{2} = 1$$

**Answer:** $(1 + i)^{10} = 32(0 + i \cdot 1) = 32i$

> **★ Key point · JEE Shortcut: Common Angles**
>
> Memorize powers of common complex numbers:
>
> - $(1 + i)^2 = 2i$

> - $(1 + i)^4 = -4$

> - $(1 + i)^8 = 16$

> - $(\sqrt{3} + i)^6 = -64$
>
> These appear frequently!

### Example 2: Negative Powers

Find $\left(\frac{1 + i\sqrt{3}}{2}\right)^{-5}$.

**Solution:**

First find the polar form:

$\left|\frac{1 + i\sqrt{3}}{2}\right| = \frac{\sqrt{1 + 3}}{2} = \frac{2}{2} = 1$

$\arg\left(\frac{1 + i\sqrt{3}}{2}\right) = \tan^{-1}(\sqrt{3}) = \frac{\pi}{3}$

So $\frac{1 + i\sqrt{3}}{2} = \cos\frac{\pi}{3} + i\sin\frac{\pi}{3}$

For negative power:

$$\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right)^{-5} = \cos\left(-5 \cdot \frac{\pi}{3}\right) + i\sin\left(-5 \cdot \frac{\pi}{3}\right)$$

$$= \cos\left(-\frac{5\pi}{3}\right) + i\sin\left(-\frac{5\pi}{3}\right)$$

Converting: $-\frac{5\pi}{3} = -2\pi + \frac{\pi}{3}$

$$= \cos\frac{\pi}{3} + i\sin\frac{\pi}{3} = \frac{1}{2} + i\frac{\sqrt{3}}{2}$$

**Answer:** $\frac{1 + i\sqrt{3}}{2}$

---

## Finding nth Roots of Complex Numbers

### The Problem

Given a complex number $w$ and positive integer $n$, find all complex numbers $z$ such that:

$$z^n = w$$

These are called the **nth roots of $w$**.

### The Formula

If $w = r(\cos\alpha + i\sin\alpha)$, then the $n$ distinct nth roots are:

$$\boxed{z_k = r^{1/n}\left[\cos\left(\frac{\alpha + 2k\pi}{n}\right) + i\sin\left(\frac{\alpha + 2k\pi}{n}\right)\right]}$$

where $k = 0, 1, 2, ..., n-1$.

**In simple terms:**

- **Modulus:** Take the $n$th root of modulus: $r^{1/n}$
- **Argument:** Divide angle by $n$ and add $\frac{2k\pi}{n}$ for each root

### Why $n$ Roots?

Every non-zero complex number has **exactly $n$ distinct nth roots**.

They are equally spaced around a circle of radius $r^{1/n}$ at angular intervals of $\frac{2\pi}{n}$.

### Geometric Interpretation

The $n$ nth roots form the vertices of a **regular $n$-sided polygon** inscribed in a circle of radius $r^{1/n}$!

---

## Examples: Finding Roots

### Example 1: Square Roots

Find all square roots of $i$.

**Solution:**

We need $z^2 = i$.

Step 1: Express $i$ in polar form.

$|i| = 1$, $\arg(i) = \frac{\pi}{2}$

So $i = 1 \cdot \left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right)$

Step 2: Apply root formula with $n = 2$.

$$z_k = 1^{1/2}\left[\cos\left(\frac{\frac{\pi}{2} + 2k\pi}{2}\right) + i\sin\left(\frac{\frac{\pi}{2} + 2k\pi}{2}\right)\right]$$

For $k = 0$:

$$z_0 = \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} = \frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}} = \frac{1 + i}{\sqrt{2}}$$

For $k = 1$:

$$z_1 = \cos\left(\frac{\pi}{4} + \pi\right) + i\sin\left(\frac{\pi}{4} + \pi\right) = \cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4}$$

$$= -\frac{1}{\sqrt{2}} - i\frac{1}{\sqrt{2}} = -\frac{1 + i}{\sqrt{2}}$$

**Answer:** $z = \pm\frac{1 + i}{\sqrt{2}}$

### Example 2: Cube Roots

Find all cube roots of $8$.

**Solution:**

We need $z^3 = 8$.

$8 = 8(\cos 0 + i\sin 0)$

$$z_k = 8^{1/3}\left[\cos\left(\frac{0 + 2k\pi}{3}\right) + i\sin\left(\frac{0 + 2k\pi}{3}\right)\right] = 2\left[\cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3}\right]$$

For $k = 0$: $z_0 = 2(\cos 0 + i\sin 0) = 2$

For $k = 1$: $z_1 = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 2\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -1 + i\sqrt{3}$

For $k = 2$: $z_2 = 2\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = 2\left(-\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = -1 - i\sqrt{3}$

**Answer:** $z = 2, -1 + i\sqrt{3}, -1 - i\sqrt{3}$

### Example 3: Fourth Roots

Find all fourth roots of $-16$.

**Solution:**

$-16 = 16(\cos\pi + i\sin\pi)$

$$z_k = 16^{1/4}\left[\cos\left(\frac{\pi + 2k\pi}{4}\right) + i\sin\left(\frac{\pi + 2k\pi}{4}\right)\right]$$

$$= 2\left[\cos\frac{(2k+1)\pi}{4} + i\sin\frac{(2k+1)\pi}{4}\right]$$

For $k = 0$: $z_0 = 2\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right) = 2 \cdot \frac{1 + i}{\sqrt{2}} = \sqrt{2}(1 + i)$

For $k = 1$: $z_1 = 2\left(\cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4}\right) = \sqrt{2}(-1 + i)$

For $k = 2$: $z_2 = 2\left(\cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4}\right) = \sqrt{2}(-1 - i)$

For $k = 3$: $z_3 = 2\left(\cos\frac{7\pi}{4} + i\sin\frac{7\pi}{4}\right) = \sqrt{2}(1 - i)$

**Answer:** $\pm\sqrt{2}(1 + i), \pm\sqrt{2}(1 - i)$

---

## Roots of Unity

### Definition

The **nth roots of unity** are the solutions to:

$$z^n = 1$$

These are denoted as $1, \omega, \omega^2, ..., \omega^{n-1}$ where $\omega = e^{2\pi i/n}$.

### General Formula

$$\boxed{\omega_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n} = e^{2\pi ik/n}}$$

where $k = 0, 1, 2, ..., n-1$.

### Properties

1. **Sum of roots:** $1 + \omega + \omega^2 + ... + \omega^{n-1} = 0$
2. **Product of roots:** $1 \cdot \omega \cdot \omega^2 \cdots \omega^{n-1} = (-1)^{n-1}$
3. **Geometric progression:** The roots form a GP with first term $1$ and common ratio $\omega$
4. **Regular polygon:** The roots are vertices of a regular $n$-gon on the unit circle

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Missing Roots**
>
> **Wrong:** The square roots of $4$ are $\pm 2$ (only real roots)
>
> **Right:** For complex numbers, always find ALL $n$ roots!
>
> For $z^2 = 4 = 4(\cos 0 + i\sin 0)$:
>
> $z_0 = 2(\cos 0 + i\sin 0) = 2$
>
> $z_1 = 2(\cos\pi + i\sin\pi) = -2$
>
> So roots are $\pm 2$ (happens to be real in this case)

> **⚠ Trap #2: Angle Reduction**
>
> After applying De Moivre’s theorem, **always reduce the angle** to standard range $[0, 2\pi)$ or $(-\pi, \pi]$.
>
> **Example:** $\cos\frac{10\pi}{4} = \cos\left(2\pi + \frac{\pi}{2}\right) = \cos\frac{\pi}{2} = 0$

> **⚠ Trap #3: Forgetting to Add 2kπ**
>
> **Wrong:** For $z^3 = 1$, just use $z = \cos 0 + i\sin 0 = 1$
>
> **Right:** There are 3 roots! Use $k = 0, 1, 2$:
>
> $z_0 = 1$, $z_1 = \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}$, $z_2 = \cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}$

> **⚠ Trap #4: Wrong Modulus for Roots**
>
> For nth root, the modulus is $r^{1/n}$, NOT $\frac{r}{n}$!
>
> **Example:** For cube roots of $8$, modulus is $8^{1/3} = 2$, not $8/3$

---

## When to Use De Moivre’s Theorem

> **★ Key point · Decision Tree**
>
> **Use De Moivre’s theorem when:**
>
> - Finding powers of complex numbers (especially high powers)

> - Finding nth roots of complex numbers

> - Deriving trigonometric identities (like $\cos 3\theta, \sin 5\theta$)

> - Solving equations like $z^n = w$

> - Working with roots of unity
>
> **Key insight:** Convert to polar form first, then apply the theorem — much faster than algebraic multiplication!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Find $(1 + i)^4$ using De Moivre’s theorem.
>
> **Solution:**
>
> $1 + i = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right)$
>
> $$(1+i)^4 = (\sqrt{2})^4\left[\cos\left(4 \cdot \frac{\pi}{4}\right) + i\sin\left(4 \cdot \frac{\pi}{4}\right)\right]$$

$$= 4(\cos\pi + i\sin\pi) = 4(-1 + 0) = -4$$
>
> **Answer:** $-4$

> **↗ Connection · Problem 1.2**
>
> Find all square roots of $-1$.
>
> **Solution:**
>
> $-1 = \cos\pi + i\sin\pi$
>
> $$z_k = \cos\frac{\pi + 2k\pi}{2} + i\sin\frac{\pi + 2k\pi}{2}$$
>
> For $k = 0$: $z_0 = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = i$
>
> For $k = 1$: $z_1 = \cos\frac{3\pi}{2} + i\sin\frac{3\pi}{2} = -i$
>
> **Answer:** $\pm i$

> **↗ Connection · Problem 1.3**
>
> Find the cube roots of unity.
>
> **Solution:**
>
> $1 = \cos 0 + i\sin 0$
>
> $$z_k = \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3}, \quad k = 0, 1, 2$$
>
> $z_0 = 1$
>
> $z_1 = \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2} = \omega$
>
> $z_2 = \cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2} = \omega^2$
>
> **Answer:** $1, \omega, \omega^2$ where $\omega = \frac{-1 + i\sqrt{3}}{2}$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Find $(\sqrt{3} + i)^{10}$.
>
> **Solution:**
>
> $|\sqrt{3} + i| = \sqrt{3 + 1} = 2$
>
> $\arg(\sqrt{3} + i) = \tan^{-1}\frac{1}{\sqrt{3}} = \frac{\pi}{6}$
>
> So $\sqrt{3} + i = 2\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)$
>
> $$(\sqrt{3} + i)^{10} = 2^{10}\left[\cos\frac{10\pi}{6} + i\sin\frac{10\pi}{6}\right]$$

$$= 1024\left[\cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3}\right]$$

$$= 1024\left[\frac{1}{2} - i\frac{\sqrt{3}}{2}\right]$$

$$= 512 - 512i\sqrt{3}$$
>
> **Answer:** $512(1 - i\sqrt{3})$

> **↗ Connection · Problem 2.2**
>
> If $z = 1 + \cos\theta + i\sin\theta$, prove that $z^n = 2^n\cos^n\frac{\theta}{2} \cdot e^{in\theta/2}$.
>
> **Solution:**
>
> First simplify $z$:
>
> $$z = 1 + \cos\theta + i\sin\theta = (1 + \cos\theta) + i\sin\theta$$
>
> Using: $1 + \cos\theta = 2\cos^2\frac{\theta}{2}$ and $\sin\theta = 2\sin\frac{\theta}{2}\cos\frac{\theta}{2}$
>
> $$z = 2\cos^2\frac{\theta}{2} + 2i\sin\frac{\theta}{2}\cos\frac{\theta}{2}$$

$$= 2\cos\frac{\theta}{2}\left(\cos\frac{\theta}{2} + i\sin\frac{\theta}{2}\right)$$

$$= 2\cos\frac{\theta}{2} \cdot e^{i\theta/2}$$
>
> Therefore:
>
> $$z^n = \left[2\cos\frac{\theta}{2} \cdot e^{i\theta/2}\right]^n = 2^n\cos^n\frac{\theta}{2} \cdot e^{in\theta/2}$$
>
> **Proved!**

> **↗ Connection · Problem 2.3**
>
> Find all values of $z$ satisfying $z^4 = -1 + i\sqrt{3}$.
>
> **Solution:**
>
> First, express $-1 + i\sqrt{3}$ in polar form:
>
> $r = \sqrt{1 + 3} = 2$
>
> $\theta = \pi - \tan^{-1}(\sqrt{3}) = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$ (Quadrant II)
>
> So $-1 + i\sqrt{3} = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right)$
>
> Fourth roots:
>
> $$z_k = 2^{1/4}\left[\cos\frac{\frac{2\pi}{3} + 2k\pi}{4} + i\sin\frac{\frac{2\pi}{3} + 2k\pi}{4}\right]$$

$$= \sqrt[4]{2}\left[\cos\frac{2\pi(3k+1)}{12} + i\sin\frac{2\pi(3k+1)}{12}\right]$$
>
> For $k = 0, 1, 2, 3$:
>
> $z_0 = \sqrt[4]{2}\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)$
>
> $z_1 = \sqrt[4]{2}\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right)$
>
> $z_2 = \sqrt[4]{2}\left(\cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6}\right)$
>
> $z_3 = \sqrt[4]{2}\left(\cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3}\right)$
>
> **Answer:** Four roots at angles $\frac{\pi}{6}, \frac{2\pi}{3}, \frac{7\pi}{6}, \frac{5\pi}{3}$ with modulus $\sqrt[4]{2}$

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $\alpha$ is a non-real 5th root of unity, find the value of $\alpha + \alpha^2 + \alpha^3 + \alpha^4$.
>
> **Solution:**
>
> The 5th roots of unity satisfy $z^5 = 1$, which gives:
>
> $z^5 - 1 = 0$
>
> $(z - 1)(z^4 + z^3 + z^2 + z + 1) = 0$
>
> Since $\alpha \neq 1$ (non-real), it satisfies:
>
> $$\alpha^4 + \alpha^3 + \alpha^2 + \alpha + 1 = 0$$
>
> Therefore:
>
> $$\alpha + \alpha^2 + \alpha^3 + \alpha^4 = -1$$
>
> **Answer:** $-1$

> **↗ Connection · Problem 3.2**
>
> Prove that the $n$th roots of unity form a geometric progression and their sum is zero.
>
> **Solution:**
>
> The nth roots are: $1, \omega, \omega^2, ..., \omega^{n-1}$ where $\omega = e^{2\pi i/n}$
>
> **GP property:** Each term is $\omega$ times the previous term, so they form a GP with first term $a = 1$ and common ratio $r = \omega$.
>
> **Sum:** Using GP sum formula:
>
> $$S = \frac{a(r^n - 1)}{r - 1} = \frac{1(\omega^n - 1)}{\omega - 1}$$
>
> Since $\omega^n = e^{2\pi i} = 1$:
>
> $$S = \frac{1 - 1}{\omega - 1} = 0$$
>
> **Proved!**

> **↗ Connection · Problem 3.3**
>
> Using De Moivre’s theorem, prove that $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$.
>
> **Solution:**
>
> By De Moivre’s theorem:
>
> $$(\cos\theta + i\sin\theta)^3 = \cos 3\theta + i\sin 3\theta$$
>
> Expanding LHS using binomial theorem:
>
> $$(\cos\theta + i\sin\theta)^3 = \cos^3\theta + 3\cos^2\theta(i\sin\theta) + 3\cos\theta(i\sin\theta)^2 + (i\sin\theta)^3$$

$$= \cos^3\theta + 3i\cos^2\theta\sin\theta - 3\cos\theta\sin^2\theta - i\sin^3\theta$$

$$= (\cos^3\theta - 3\cos\theta\sin^2\theta) + i(3\cos^2\theta\sin\theta - \sin^3\theta)$$
>
> Comparing real parts:
>
> $$\cos 3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta$$

$$= \cos^3\theta - 3\cos\theta(1 - \cos^2\theta)$$

$$= \cos^3\theta - 3\cos\theta + 3\cos^3\theta$$

$$= 4\cos^3\theta - 3\cos\theta$$
>
> **Proved!**

---

## Quick Revision Box

| Concept | Formula | Application |
| --- | --- | --- |
| De Moivre’s Theorem | $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$ | Powers |
| General form | $[r(\cos\theta + i\sin\theta)]^n = r^n(\cos(n\theta) + i\sin(n\theta))$ | Powers |
| Exponential form | $(re^{i\theta})^n = r^n e^{in\theta}$ | Quickest! |
| nth roots formula | $z_k = r^{1/n}\left[\cos\frac{\alpha + 2k\pi}{n} + i\sin\frac{\alpha + 2k\pi}{n}\right]$ | $k = 0, 1, ..., n-1$ |
| Roots of unity | $\omega_k = e^{2\pi ik/n}$ | $k = 0, 1, ..., n-1$ |
| Sum of nth roots of unity | $1 + \omega + \omega^2 + ... + \omega^{n-1} = 0$ | Important property |

---

## Related Topics

### Within Complex Numbers Chapter

- [Modulus and Argument](../modulus-argument/index.md) — Foundation for polar form
- [Cube Roots of Unity](../cube-roots-unity/index.md) — Special case of nth roots
- [Quadratic Equations](../quadratic-equations/index.md) — Finding complex roots

### Math Connections

- [Trigonometry](../../trigonometry/index.md) — Multiple angle formulas
- [Binomial Theorem](../../binomial-theorem/index.md) — Expanding $(a+b)^n$
- [Sequences and Series](../../sequences-series/index.md) — Geometric progressions

### Physics Applications

- Quantum Mechanics — Wave functions and operators
- AC Circuits — Phasor analysis
- Signal Processing — Fourier transforms

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **De Moivre’s Theorem:** $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$ makes powers trivial

> 2. **For powers:** Raise modulus to power $n$, multiply angle by $n$

> 3. **For nth roots:** Take nth root of modulus, divide angle by $n$, add $\frac{2k\pi}{n}$ for $k = 0, 1, ..., n-1$

> 4. **Every non-zero complex number has exactly $n$ distinct nth roots** equally spaced on a circle

> 5. **Roots of unity** sum to zero and form vertices of regular polygon
>
> **“De Moivre’s theorem is your superpower for complex number calculations — memorize it, master it, ace JEE!”**
>
> **Exam Strategy:** For any power or root problem, immediately convert to polar form and use De Moivre. Don’t waste time with algebraic multiplication!

---

From TestGuru · our mock-test platform

## You've read De Moivre's Theorem: Powers and Roots.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=complex-numbers&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcomplex-numbers%2Fde-moivres-theorem%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/complex-numbers/de-moivres-theorem/",this.page.identifier="/mathematics/complex-numbers/de-moivres-theorem/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="complexPlaneVisualizer" id="anim-complexPlaneVisualizer-1795396421511770823"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-complexPlaneVisualizer-1795396421511770823")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/complex-numbers/de-moivres-theorem/](https://jeenotes.in/mathematics/complex-numbers/de-moivres-theorem/) · raw HTML: `offline/mathematics/complex-numbers/de-moivres-theorem/index.html`_
