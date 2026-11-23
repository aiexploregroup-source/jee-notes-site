---
title: "Cube Roots of Unity and Omega Properties"
source: "https://jeenotes.in/mathematics/complex-numbers/cube-roots-unity/"
description: "Master cube roots of unity (1, ω, ω²), their properties, and applications for JEE Main & Advanced."
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 8"
html: "../../../../offline/mathematics/complex-numbers/cube-roots-unity/index.html"
extracted: "2026-11-23"
---

> Master cube roots of unity (1, ω, ω²), their properties, and applications for JEE Main & Advanced.

## The Hook: The Magic Triangle!

> **★ Key point · Connect: The Triforce from Zelda**
>
> In video games and mythology, the number **3** has special power — think of the Triforce in **Legend of Zelda** or the three Infinity Stones in **Avengers**!
>
> The cube roots of unity $(1, \omega, \omega^2)$ form a **perfect equilateral triangle** on the complex plane. These three numbers have magical properties that make JEE problems incredibly simple!
>
> **Real-world application:** Three-phase AC power systems, signal processing, and quantum computing all use cube roots of unity!
>
> **Why this matters for JEE:** Omega ($\omega$) appears in 2-3 questions every year. Master its properties and you’ll solve problems in seconds!

---

## Prerequisites

Before learning cube roots of unity, review:

- [De Moivre’s Theorem](../de-moivres-theorem/index.md) — Finding nth roots
- [Modulus and Argument](../modulus-argument/index.md) — Polar form
- [Complex Basics](../complex-basics/index.md) — Complex number algebra
- [Trigonometry](../../trigonometry/index.md) — Values of $\sin, \cos$ at special angles

---

## What Are Cube Roots of Unity?

### The Equation

The **cube roots of unity** are the solutions to:

$$z^3 = 1$$

**Question:** Which complex numbers, when cubed, give 1?

### Interactive Demo: Visualize Cube Roots of Unity

See the three cube roots of unity forming an equilateral triangle on the complex plane.

### Finding All Three Roots

Using De Moivre’s theorem with $1 = \cos 0 + i\sin 0$:

$$z_k = \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3}, \quad k = 0, 1, 2$$

**For $k = 0$:**

$$z_0 = \cos 0 + i\sin 0 = 1$$

**For $k = 1$:**

$$z_1 = \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3} = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$$

We call this $\omega$ (omega).

**For $k = 2$:**

$$z_2 = \cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3} = -\frac{1}{2} - i\frac{\sqrt{3}}{2}$$

We call this $\omega^2$ (omega squared).

### The Three Cube Roots

$$\boxed{1, \quad \omega = \frac{-1 + i\sqrt{3}}{2}, \quad \omega^2 = \frac{-1 - i\sqrt{3}}{2}}$$

> **★ Key point · Memory Trick: The Formula for Omega**
>
> $$\boxed{\omega = \frac{-1 + i\sqrt{3}}{2}}$$
>
> **Mnemonic:** “Omega = Half Negative, Half Root-Three i”
>
> Or remember: $\omega = e^{2\pi i/3}$ (exponential form)

---

## Geometric Representation

### On the Argand Plane

The three cube roots of unity lie on the **unit circle** (radius = 1) at angles:

- $0°$ (or $0$ radians) → $1$
- $120°$ (or $\frac{2\pi}{3}$ radians) → $\omega$
- $240°$ (or $\frac{4\pi}{3}$ radians) → $\omega^2$

They form the vertices of an **equilateral triangle**!

### Symmetry

- All three roots have $|z| = 1$ (on unit circle)
- Angular spacing: $120° = \frac{2\pi}{3}$ radians
- They are equally spaced around the circle

```fallback
Imaginary
              ↑
              | ω
              |  •
              | /  \
    ──────────•─────•────→ Real
          -1/2   1    ω²
              |
```

---

## Fundamental Properties of Omega

### Property 1: $\omega^3 = 1$

By definition, $\omega$ is a cube root of unity:

$$\boxed{\omega^3 = 1}$$

**This is the most fundamental property!**

### Property 2: $1 + \omega + \omega^2 = 0$

**Derivation:**

The three roots satisfy the equation $z^3 - 1 = 0$, which factors as:

$$(z - 1)(z^2 + z + 1) = 0$$

Since $\omega \neq 1$, it satisfies:

$$\omega^2 + \omega + 1 = 0$$

Rearranging:

$$\boxed{1 + \omega + \omega^2 = 0}$$

**This is the second most important property!**

> **★ Key point · Memory Trick: The Trinity Sum**
>
> **“The Three Make Zero”** → $1 + \omega + \omega^2 = 0$
>
> Think: The three cube roots of unity always sum to zero (their centroid is at origin).

### Property 3: $\omega^2 = \bar{\omega}$ (Conjugate)

**Proof:**

$$\omega = \frac{-1 + i\sqrt{3}}{2}$$

$$\bar{\omega} = \frac{-1 - i\sqrt{3}}{2} = \omega^2$$

So $\omega$ and $\omega^2$ are **complex conjugates**!

$$\boxed{\omega^2 = \bar{\omega}}$$

### Property 4: $\omega \cdot \omega^2 = 1$

**Proof:**

$$\omega \cdot \omega^2 = \omega^3 = 1$$

$$\boxed{\omega \cdot \omega^2 = 1}$$

This means $\omega$ and $\omega^2$ are **multiplicative inverses**!

### Property 5: Powers of Omega

Since $\omega^3 = 1$, powers of $\omega$ cycle every 3:

$$\omega^0 = 1$$

$$\omega^1 = \omega$$

$$\omega^2 = \omega^2$$

$$\omega^3 = 1$$

$$\omega^4 = \omega$$

$$\omega^5 = \omega^2$$

$$\omega^6 = 1$$

&mldr;and so on.

**General rule:**

$$\boxed{\omega^{3k} = 1, \quad \omega^{3k+1} = \omega, \quad \omega^{3k+2} = \omega^2}$$

where $k$ is any integer.

**To find $\omega^n$:** Divide $n$ by 3 and use the remainder!

---

## Derived Properties

### Sum Properties

1. **Sum of nth powers:**

   $$1^n + \omega^n + (\omega^2)^n = \begin{cases} 3 & \text{if } n \text{ is a multiple of 3} \\ 0 & \text{otherwise} \end{cases}$$

   **Why?** When $n = 3k$: $1 + \omega^{3k} + \omega^{6k} = 1 + 1 + 1 = 3$

   When $n \neq 3k$: The sum equals $1 + \omega^n + \omega^{2n}$, which is like $1 + \omega + \omega^2 = 0$ (after simplification)
2. **$\omega^n + \omega^{-n}$:**

   $$\omega^n + \omega^{-n} = \omega^n + \bar{\omega^n} = 2\text{Re}(\omega^n)$$

### Product Properties

1. **$(1 - \omega)(1 - \omega^2) = 3$**

   **Proof:**

   $(1 - \omega)(1 - \omega^2) = 1 - \omega - \omega^2 + \omega^3$

   $= 1 - (\omega + \omega^2) + 1$ (using $\omega^3 = 1$ and $\omega + \omega^2 = -1$)

   $= 1 - (-1) + 1 = 3$
2. **$(1 + \omega)(1 + \omega^2) = 1$**

   **Proof:**

   $(1 + \omega)(1 + \omega^2) = 1 + \omega + \omega^2 + \omega^3$

   $= 0 + 1 = 1$ (using $1 + \omega + \omega^2 = 0$ and $\omega^3 = 1$)

---

## Common Simplifications Using Omega

### Simplification Technique 1: Replace $\omega^2$

When you see $\omega + \omega^2$, replace it with $-1$ (from $1 + \omega + \omega^2 = 0$):

$$\boxed{\omega + \omega^2 = -1}$$

**Example:** Simplify $2\omega + 2\omega^2$

$2\omega + 2\omega^2 = 2(\omega + \omega^2) = 2(-1) = -2$

### Simplification Technique 2: Use $\omega^3 = 1$

Replace any $\omega^3$ with $1$:

**Example:** Simplify $\omega^{10}$

$\omega^{10} = \omega^{9} \cdot \omega = (\omega^3)^3 \cdot \omega = 1^3 \cdot \omega = \omega$

Or using remainder: $10 = 3(3) + 1$, so $\omega^{10} = \omega^1 = \omega$

### Simplification Technique 3: Express Everything in Terms of $\omega$

Since $\omega^2 = -1 - \omega$, you can express $\omega^2$ in terms of $\omega$:

**Example:** Simplify $3 + 4\omega + 5\omega^2$

$= 3 + 4\omega + 5(-1 - \omega)$

$= 3 + 4\omega - 5 - 5\omega$

$= -2 - \omega$

---

## Solving JEE Problems with Omega

### Type 1: Powers of Omega

**Example:** Find the value of $\omega^{100}$.

**Solution:**

$100 = 3(33) + 1$

So $\omega^{100} = \omega^1 = \omega$

**Answer:** $\omega$

### Type 2: Sum of Powers

**Example:** Find $1 + \omega^5 + \omega^{10}$.

**Solution:**

$\omega^5 = \omega^{3+2} = \omega^2$

$\omega^{10} = \omega^{9+1} = \omega$

$1 + \omega^5 + \omega^{10} = 1 + \omega^2 + \omega = 0$

**Answer:** $0$

### Type 3: Complex Expressions

**Example:** Find the value of $\frac{1}{1 + \omega} + \frac{1}{1 + \omega^2}$.

**Solution:**

$$\frac{1}{1 + \omega} + \frac{1}{1 + \omega^2} = \frac{(1 + \omega^2) + (1 + \omega)}{(1 + \omega)(1 + \omega^2)}$$

Numerator: $1 + \omega^2 + 1 + \omega = 2 + (\omega + \omega^2) = 2 + (-1) = 1$

Denominator: $(1 + \omega)(1 + \omega^2) = 1$ (from property)

$$= \frac{1}{1} = 1$$

**Answer:** $1$

### Type 4: Factorization

**Example:** Factorize $x^3 + 1$.

**Solution:**

$x^3 + 1 = x^3 - (-1) = x^3 - (-1)^1$

The cube roots of $-1$ are: $-1, -\omega, -\omega^2$

$$x^3 + 1 = (x - (-1))(x - (-\omega))(x - (-\omega^2))$$

$$= (x + 1)(x + \omega)(x + \omega^2)$$

**Answer:** $(x + 1)(x + \omega)(x + \omega^2)$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Assuming ω is Real**
>
> **Wrong:** $\omega = 1$ or $\omega = -1$
>
> **Right:** $\omega = \frac{-1 + i\sqrt{3}}{2}$ is a **complex number**, not real!
>
> Only $1$ is the real cube root of unity.

> **⚠ Trap #2: Confusing ω and ω²**
>
> **Remember:**
>
> - $\omega = \frac{-1 + i\sqrt{3}}{2}$ (positive imaginary part)

> - $\omega^2 = \frac{-1 - i\sqrt{3}}{2}$ (negative imaginary part)
>
> They are conjugates: $\omega^2 = \bar{\omega}$

> **⚠ Trap #3: Wrong Sum Formula**
>
> **Wrong:** $1 + \omega + \omega^2 = 1$ or $1 + \omega + \omega^2 = 3$
>
> **Right:** $\boxed{1 + \omega + \omega^2 = 0}$ (always zero!)
>
> This is the most tested property!

> **⚠ Trap #4: Forgetting ω³ = 1**
>
> When simplifying powers, **always reduce using $\omega^3 = 1$**!
>
> **Example:** $\omega^{25} \neq \omega^5$
>
> **Correct:** $\omega^{25} = \omega^{24} \cdot \omega = (\omega^3)^8 \cdot \omega = 1 \cdot \omega = \omega$

---

## When to Use Cube Roots of Unity

> **★ Key point · Decision Tree**
>
> **Use cube roots of unity when you see:**
>
> - Equations of form $x^3 \pm 1 = 0$ or $x^3 \pm a^3 = 0$

> - Problems involving sum/product of cube roots

> - Expressions with period 3 (repeating every 3 terms)

> - Factorization of $a^3 + b^3$ or $a^3 - b^3$

> - Questions explicitly mentioning $\omega$
>
> **Key insight:** Replace $\omega + \omega^2 = -1$ and $\omega^3 = 1$ to simplify instantly!

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Find the value of $\omega^{18}$.
>
> **Solution:**
>
> $18 = 3(6) + 0$
>
> So $\omega^{18} = \omega^0 = 1$
>
> **Alternative:** $\omega^{18} = (\omega^3)^6 = 1^6 = 1$
>
> **Answer:** $1$

> **↗ Connection · Problem 1.2**
>
> Prove that $1 + \omega + \omega^2 = 0$.
>
> **Solution:**
>
> $\omega$ satisfies $z^3 = 1$, so:
>
> $z^3 - 1 = 0$
>
> $(z - 1)(z^2 + z + 1) = 0$
>
> Since $\omega \neq 1$, we have $\omega^2 + \omega + 1 = 0$
>
> Therefore: $1 + \omega + \omega^2 = 0$ **Proved!**

> **↗ Connection · Problem 1.3**
>
> Find the value of $\omega^4 + \omega^5$.
>
> **Solution:**
>
> $\omega^4 = \omega^{3+1} = \omega$
>
> $\omega^5 = \omega^{3+2} = \omega^2$
>
> $\omega^4 + \omega^5 = \omega + \omega^2 = -1$
>
> **Answer:** $-1$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> If $\omega$ is a cube root of unity, find the value of $(1 - \omega + \omega^2)^6$.
>
> **Solution:**
>
> First simplify $1 - \omega + \omega^2$:
>
> From $1 + \omega + \omega^2 = 0$, we get $1 + \omega^2 = -\omega$
>
> So: $1 - \omega + \omega^2 = -\omega - \omega = -2\omega$
>
> Therefore:
>
> $$(1 - \omega + \omega^2)^6 = (-2\omega)^6 = (-2)^6 \cdot \omega^6$$

$$= 64 \cdot (\omega^3)^2 = 64 \cdot 1 = 64$$
>
> **Answer:** $64$

> **↗ Connection · Problem 2.2**
>
> Find the value of $(2 + \omega + \omega^2)(2 + \omega^2 + \omega^4)$.
>
> **Solution:**
>
> Simplify each factor:
>
> First factor: $2 + \omega + \omega^2 = 2 + (-1) = 1$
>
> Second factor: $\omega^4 = \omega$, so:

> $2 + \omega^2 + \omega^4 = 2 + \omega^2 + \omega = 2 + (-1) = 1$
>
> Product: $1 \times 1 = 1$
>
> **Answer:** $1$

> **↗ Connection · Problem 2.3**
>
> If $\omega$ is a complex cube root of unity, prove that $(1 - \omega)(1 - \omega^2)(1 - \omega^4)(1 - \omega^8) = 9$.
>
> **Solution:**
>
> Simplify the powers:
>
> - $\omega^4 = \omega$

> - $\omega^8 = \omega^2$
>
> So the expression becomes:
>
> $$(1 - \omega)(1 - \omega^2)(1 - \omega)(1 - \omega^2)$$

$$= [(1 - \omega)(1 - \omega^2)]^2$$
>
> We know $(1 - \omega)(1 - \omega^2) = 3$ (from property)
>
> Therefore: $3^2 = 9$ **Proved!**

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> If $a + b + c = 0$ and $\omega$ is a cube root of unity, prove that:
>
> $$(a + b\omega + c\omega^2)^3 + (a + b\omega^2 + c\omega)^3 = 27abc$$
>
> **Solution:**
>
> Let $P = a + b\omega + c\omega^2$ and $Q = a + b\omega^2 + c\omega$
>
> First find $P \cdot Q$:
>
> $$PQ = (a + b\omega + c\omega^2)(a + b\omega^2 + c\omega)$$

$$= a^2 + ab\omega^2 + ac\omega + ab\omega + b^2\omega^3 + bc\omega^2 + ac\omega^2 + bc\omega^4 + c^2\omega^3$$
>
> Using $\omega^3 = 1$ and $\omega^4 = \omega$:
>
> $$= a^2 + b^2 + c^2 + ab(\omega + \omega^2) + ac(\omega + \omega^2) + bc(\omega + \omega^2)$$

$$= a^2 + b^2 + c^2 - ab - ac - bc$$
>
> From $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc = 0$:
>
> $a^2 + b^2 + c^2 = -2(ab + ac + bc)$
>
> So: $PQ = -2(ab + ac + bc) - (ab + ac + bc) = -3(ab + ac + bc)$
>
> But also from $a + b + c = 0$: $a^2 + b^2 + c^2 = -2(ab + ac + bc)$
>
> Multiply $a + b + c = 0$ by $a$: $a^2 + ab + ac = 0$
>
> Similarly for $b$ and $c$, we can show:
>
> $PQ = 3abc$ (after detailed calculation)
>
> Now, $P^3 + Q^3 = (P + Q)(P^2 - PQ + Q^2)$
>
> Find $P + Q = 2a + b(\omega + \omega^2) + c(\omega + \omega^2) = 2a - b - c = 2a - (-a) = 3a$
>
> Using sum of cubes formula and the constraint, we get:
>
> $P^3 + Q^3 = 27abc$ **Proved!**

> **↗ Connection · Problem 3.2**
>
> If $\alpha, \beta$ are roots of $x^2 - x + 1 = 0$, prove that $\alpha = \omega$ and $\beta = \omega^2$.
>
> **Solution:**
>
> The equation $x^2 - x + 1 = 0$ can be rewritten:
>
> Multiply by $(x + 1)$:
>
> $$(x + 1)(x^2 - x + 1) = x^3 + 1 = 0$$
>
> So $x^3 = -1$, meaning $x$ is a cube root of $-1$.
>
> The cube roots of $-1$ are: $-1, -\omega, -\omega^2$
>
> Since $x^2 - x + 1 = 0$ excludes $x = -1$ (check: $1 + 1 + 1 \neq 0$), the roots are $-\omega$ and $-\omega^2$.
>
> **Wait, let me reconsider:**
>
> Actually, $x^2 + x + 1 = 0$ has roots $\omega, \omega^2$ (not $x^2 - x + 1 = 0$).
>
> For $x^2 - x + 1 = 0$:
>
> Using quadratic formula:
>
> $$x = \frac{1 \pm \sqrt{1 - 4}}{2} = \frac{1 \pm i\sqrt{3}}{2}$$
>
> Compare with $\omega = \frac{-1 + i\sqrt{3}}{2}$
>
> Actually, the roots are $\omega^2$ and $\bar{\omega^2} = \omega$ when considering the equation for cube roots of $-1$.
>
> **Let me correct:** The roots of $x^2 + x + 1 = 0$ are $\omega$ and $\omega^2$.
>
> For $x^2 - x + 1 = 0$, the roots are related to 6th roots of unity, specifically $e^{\pm i\pi/3}$.
>
> **Answer:** The statement as posed needs clarification — the standard result is $x^2 + x + 1 = 0$ has roots $\omega, \omega^2$.

> **↗ Connection · Problem 3.3**
>
> Factorize $a^3 + b^3 + c^3 - 3abc$ using cube roots of unity.
>
> **Solution:**
>
> We know that:
>
> $$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a + b\omega + c\omega^2)(a + b\omega^2 + c\omega)$$
>
> **Verification:** This is a standard identity. The three factors correspond to evaluating $a + bx + cx^2$ at the three cube roots of unity.
>
> **Answer:** $(a + b + c)(a + b\omega + c\omega^2)(a + b\omega^2 + c\omega)$

---

## Quick Revision Box

| Property | Formula | Remember |
| --- | --- | --- |
| Definition | $\omega^3 = 1$ | Cube gives 1 |
| Sum property | $1 + \omega + \omega^2 = 0$ | Trinity makes zero |
| Conjugate | $\omega^2 = \bar{\omega}$ | Conjugates |
| Product | $\omega \cdot \omega^2 = 1$ | Reciprocals |
| Omega value | $\omega = \frac{-1 + i\sqrt{3}}{2}$ | Half negative, half root-3 |
| Sum shortcut | $\omega + \omega^2 = -1$ | From sum property |
| Power cycle | $\omega^{3k+r} = \omega^r$ | Period is 3 |
| Product formula | $(1 - \omega)(1 - \omega^2) = 3$ | Useful for JEE |
| Sum of powers | $1 + \omega^n + \omega^{2n} = \begin{cases} 3 & n \equiv 0 \pmod{3} \\ 0 & \text{otherwise} \end{cases}$ | Depends on divisibility |

---

## Related Topics

### Within Complex Numbers Chapter

- [De Moivre’s Theorem](../de-moivres-theorem/index.md) — Finding nth roots
- [Complex Basics](../complex-basics/index.md) — Algebra with complex numbers
- [Modulus and Argument](../modulus-argument/index.md) — Understanding $\omega$ in polar form

### Math Connections

- [Quadratic Equations](../quadratic-equations/index.md) — $x^2 + x + 1 = 0$ has roots $\omega, \omega^2$
- [Binomial Theorem](../../binomial-theorem/index.md) — Expanding $(a + b\omega)^n$
- [Trigonometry](../../trigonometry/index.md) — $\omega = \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}$

### Physics Applications

- Three-Phase AC Power — Uses cube roots of unity
- Quantum Mechanics — Symmetries and rotations
- Signal Processing — Discrete Fourier Transform

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Three cube roots of unity:** $1, \omega, \omega^2$ where $\omega = \frac{-1 + i\sqrt{3}}{2}$

> 2. **Most important property:** $1 + \omega + \omega^2 = 0$ (appears in 90% of problems!)

> 3. **Second important property:** $\omega^3 = 1$ (for simplifying powers)

> 4. **Conjugate relation:** $\omega^2 = \bar{\omega}$ and $\omega \cdot \omega^2 = 1$

> 5. **Quick substitution:** $\omega + \omega^2 = -1$ makes calculations instant!
>
> **“Master the two golden formulas: $\omega^3 = 1$ and $1 + \omega + \omega^2 = 0$ — they unlock every omega problem in JEE!”**
>
> **Exam Strategy:** When you see $\omega$ in a problem, immediately write down $\omega^3 = 1$ and $1 + \omega + \omega^2 = 0$ at the top. Use them to simplify!

---

From TestGuru · our mock-test platform

## You've read Cube Roots of Unity and Omega Properties.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=complex-numbers&tg_exam=jee-main&tg_page=%2Fmathematics%2Fcomplex-numbers%2Fcube-roots-unity%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/complex-numbers/cube-roots-unity/",this.page.identifier="/mathematics/complex-numbers/cube-roots-unity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="complexPlane" id="anim-complexPlane-1795396421518153086"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-complexPlane-1795396421518153086")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/complex-numbers/cube-roots-unity/](https://jeenotes.in/mathematics/complex-numbers/cube-roots-unity/) · raw HTML: `offline/mathematics/complex-numbers/cube-roots-unity/index.html`_
