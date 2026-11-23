---
title: "Vector Addition: Triangle, Parallelogram & Component Methods"
source: "https://jeenotes.in/mathematics/vector-algebra/vector-addition/"
description: "Master vector addition with movie physics - learn triangle law, parallelogram law, and component method through Iron Man and Spider-Man examples"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 7"
html: "../../../../offline/mathematics/vector-algebra/vector-addition/index.html"
extracted: "2026-11-23"
---

> Master vector addition with movie physics - learn triangle law, parallelogram law, and component method through Iron Man and Spider-Man examples

## The Hook: Spider-Man’s Web Swing

> **★ Key point · Connect: Real Life → Vector Addition**
>
> When Spider-Man swings through Manhattan, he shoots two webs simultaneously at different buildings. Each web pulls him with a force:
>
> - **Web 1:** 500 N towards Empire State Building

> - **Web 2:** 300 N towards Chrysler Building
>
> **The Question:** What’s the total (resultant) force on Spider-Man? Can we just add 500 + 300 = 800 N?
>
> **NO!** Forces have direction. We need **vector addition**, not simple arithmetic.
>
> This is why you can’t lift a car by pulling from 10 different directions with 100 N each!

**JEE Weightage:**

Vector addition appears in 3-4 questions in JEE Main, 4-5 in JEE Advanced. Essential for all mechanics!

---

## The Core Concept

### What is Vector Addition?

> **◐ In simple terms · Definition**
>
> **Vector addition** combines two or more vectors to find a single **resultant vector** that has the same effect.
>
> **Key Insight:** You CANNOT add magnitudes directly. Direction matters!

**In simple terms:** If two forces pull you, you don’t move in either direction alone - you move along the resultant direction.

---

## Interactive Demo: Vector Addition Visualization

Experiment with adding different vectors visually! See how the parallelogram law and triangle law work in real-time. Try different magnitudes and angles to build intuition.

---

## Method 1: Triangle Law of Vector Addition

> **★ Key point · Triangle Law**
>
> If two vectors $\vec{a}$ and $\vec{b}$ are represented by two sides of a triangle taken in order, then their resultant is the **third side taken in opposite order**.
>
> $$\boxed{\vec{R} = \vec{a} + \vec{b}}$$

### How to Apply Triangle Law

**Steps:**

1. Draw vector $\vec{a}$
2. From the **head** of $\vec{a}$, draw vector $\vec{b}$
3. The resultant goes from **tail of $\vec{a}$** to **head of $\vec{b}$**

**Memory Trick:** “**T**ail to **H**ead, **T**hen **H**ead” → **TH-TH**

### Visual Representation

```fallback
→b
  -----→
 ↗
→a       Resultant R = a + b (closing the triangle)
```

> **↗ Connection · Example: Two Displacements**
>
> A person walks 3 km East, then 4 km North. Find resultant displacement.
>
> **Solution:**
>
> - $\vec{a} = 3\hat{i}$ (East)

> - $\vec{b} = 4\hat{j}$ (North)

> - Resultant: $\vec{R} = 3\hat{i} + 4\hat{j}$
>
> **Magnitude:** $|\vec{R}| = \sqrt{9 + 16} = 5$ km
>
> **Direction:** $\tan\theta = \frac{4}{3} \Rightarrow \theta = 53.13°$ North of East

---

## Method 2: Parallelogram Law of Vector Addition

> **★ Key point · Parallelogram Law**
>
> If two vectors $\vec{a}$ and $\vec{b}$ are represented by two **adjacent sides** of a parallelogram, then their resultant is the **diagonal** passing through their common point.
>
> $$\boxed{\vec{R} = \vec{a} + \vec{b}}$$

### How to Apply Parallelogram Law

**Steps:**

1. Draw both vectors $\vec{a}$ and $\vec{b}$ from the **same point**
2. Complete the parallelogram
3. Draw diagonal from common point - this is resultant

### Magnitude of Resultant

> **◐ In simple terms · Resultant Magnitude Formula**
>
> If angle between $\vec{a}$ and $\vec{b}$ is $\theta$:
>
> $$\boxed{|\vec{R}| = \sqrt{a^2 + b^2 + 2ab\cos\theta}}$$
>
> **Memory Trick:** “**R**esultant **R**esembles **C**osine **L**aw” → Like $c^2 = a^2 + b^2 - 2ab\cos C$ but with **+2ab cos θ**

### Direction of Resultant

If $\vec{R}$ makes angle $\alpha$ with $\vec{a}$:

$$\boxed{\tan\alpha = \frac{b\sin\theta}{a + b\cos\theta}}$$

### Special Cases (High-Yield for JEE!)

| Angle θ | Condition | Resultant Magnitude | Direction |
| --- | --- | --- | --- |
| **0°** | Parallel, same direction | $R = a + b$ | Along both vectors |
| **90°** | Perpendicular | $R = \sqrt{a^2 + b^2}$ | $\tan\alpha = \frac{b}{a}$ |
| **180°** | Opposite directions | $R = | a - b |
| **60°** | Common in JEE | $R = \sqrt{a^2 + b^2 + ab}$ | - |
| **120°** | Common in JEE | $R = \sqrt{a^2 + b^2 - ab}$ | - |

> **★ Key point · JEE Pattern: Equal Magnitude Vectors**
>
> When $|\vec{a}| = |\vec{b}| = a$ (equal magnitudes):
>
> $$\boxed{|\vec{R}| = 2a\cos\frac{\theta}{2}}$$
>
> **Special values:**
>
> - θ = 60° → $R = a\sqrt{3}$

> - θ = 90° → $R = a\sqrt{2}$

> - θ = 120° → $R = a$
>
> **Appears in 50% of JEE vector problems!**

> **↗ Connection · Example: Forces at 60°**
>
> Two forces 5 N and 10 N act at 60° to each other. Find resultant.
>
> **Solution:**
>
> $$R = \sqrt{5^2 + 10^2 + 2(5)(10)\cos 60°}$$

$$= \sqrt{25 + 100 + 2(50)\left(\frac{1}{2}\right)}$$

$$= \sqrt{25 + 100 + 50} = \sqrt{175} = 5\sqrt{7} \text{ N}$$
>
> **Direction:** $\tan\alpha = \frac{10\sin 60°}{5 + 10\cos 60°} = \frac{10 \cdot \frac{\sqrt{3}}{2}}{5 + 10 \cdot \frac{1}{2}} = \frac{5\sqrt{3}}{10} = \frac{\sqrt{3}}{2}$

---

## Method 3: Component Method (Most Powerful!)

> **★ Key point · Component Method**
>
> **Most efficient for JEE!** Break vectors into components along perpendicular axes, add separately, then combine.
>
> For vectors in 2D:
>
> $$\vec{a} = a_x\hat{i} + a_y\hat{j}$$

$$\vec{b} = b_x\hat{i} + b_y\hat{j}$$
>
> **Resultant:**
>
> $$\boxed{\vec{R} = (a_x + b_x)\hat{i} + (a_y + b_y)\hat{j}}$$

### For 3D Vectors

$$\boxed{\vec{R} = (a_x + b_x)\hat{i} + (a_y + b_y)\hat{j} + (a_z + b_z)\hat{k}}$$

**Simply:** Add corresponding components!

### Steps for Component Method

1. **Resolve** each vector into components
2. **Add** all x-components → $R_x$
3. **Add** all y-components → $R_y$
4. **Add** all z-components → $R_z$ (if 3D)
5. **Resultant:** $\vec{R} = R_x\hat{i} + R_y\hat{j} + R_z\hat{k}$

**Magnitude:** $|\vec{R}| = \sqrt{R_x^2 + R_y^2 + R_z^2}$

> **↗ Connection · Example: Three Vectors**
>
> Find resultant of:
>
> - $\vec{a} = 2\hat{i} + 3\hat{j} - \hat{k}$

> - $\vec{b} = \hat{i} - 2\hat{j} + 3\hat{k}$

> - $\vec{c} = -\hat{i} + \hat{j} + 2\hat{k}$
>
> **Solution:**
>
> $$\vec{R} = (2+1-1)\hat{i} + (3-2+1)\hat{j} + (-1+3+2)\hat{k}$$

$$= 2\hat{i} + 2\hat{j} + 4\hat{k}$$
>
> **Magnitude:** $|\vec{R}| = \sqrt{4 + 4 + 16} = \sqrt{24} = 2\sqrt{6}$

---

## Vector Subtraction

> **◐ In simple terms · Subtraction = Adding Negative**
>
> $$\boxed{\vec{a} - \vec{b} = \vec{a} + (-\vec{b})}$$
>
> **Simply:** Reverse direction of $\vec{b}$, then add!

### Component Method for Subtraction

$$\vec{a} - \vec{b} = (a_x - b_x)\hat{i} + (a_y - b_y)\hat{j} + (a_z - b_z)\hat{k}$$

> **↗ Connection · Example: Vector Subtraction**
>
> $\vec{a} = 5\hat{i} + 2\hat{j} + 3\hat{k}$, $\vec{b} = 2\hat{i} + \hat{j} + \hat{k}$. Find $\vec{a} - \vec{b}$.
>
> **Solution:**
>
> $$\vec{a} - \vec{b} = (5-2)\hat{i} + (2-1)\hat{j} + (3-1)\hat{k} = 3\hat{i} + \hat{j} + 2\hat{k}$$

---

## Properties of Vector Addition

### 1. Commutative Law

$$\boxed{\vec{a} + \vec{b} = \vec{b} + \vec{a}}$$

**Meaning:** Order doesn’t matter in addition.

### 2. Associative Law

$$\boxed{(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})}$$

**Meaning:** Grouping doesn’t matter.

### 3. Additive Identity

$$\boxed{\vec{a} + \vec{0} = \vec{a}}$$

**Meaning:** Adding zero vector doesn’t change anything.

### 4. Additive Inverse

$$\boxed{\vec{a} + (-\vec{a}) = \vec{0}}$$

**Meaning:** Vector plus its negative gives zero vector.

---

## Memory Tricks & Patterns

### Mnemonic for Resultant Formula

**Memory Trick:** “**A**lways **B**ring **C**osine **T**wice” → $a^2 + b^2 + 2ab\cos\theta$

**Compare with distance formula:** In triangles, we subtract (law of cosines). In vector addition, we add!

### Quick Angle Recognition

> **★ Key point · JEE Shortcut: Recognizing Special Cases**
>
> **See these in problem? Use shortcuts:**
>
> | Given | Think | Formula |

> | --- | --- | --- |

> | “Two equal forces” | $a = b$ | $R = 2a\cos\frac{\theta}{2}$ |

> | “Perpendicular forces” | θ = 90° | $R = \sqrt{a^2 + b^2}$ |

> | “Opposite directions” | θ = 180° | $R = |

> | “60° or 120° angle” | Common JEE | Substitute cos 60° = 1/2 |
>
> **Saves 1 minute per problem!**

### Component Method Decision Tree

> **★ Key point · When to Use Each Method**
>
> **Triangle Law:**
>
> - Only 2 vectors

> - Geometric/graphical representation needed
>
> **Parallelogram Law:**
>
> - 2 vectors, both from same point

> - Need to find magnitude/direction formula
>
> **Component Method:** ← **USE THIS 90% OF THE TIME**
>
> - 3 or more vectors

> - Vectors given in $\hat{i}, \hat{j}, \hat{k}$ form

> - Any complex calculation

> - **Fastest for JEE!**

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Adding Magnitudes Instead of Vectors**
>
> **Wrong:** Two forces 3 N and 4 N → Resultant = 7 N
>
> **Right:** Depends on angle!
>
> - If parallel (0°): R = 7 N ✓

> - If perpendicular (90°): R = 5 N

> - If opposite (180°): R = 1 N
>
> **JEE loves this trap in MCQs!**

> **⚠ Trap #2: Triangle Law Tail-Head Confusion**
>
> **Wrong:** Drawing both vectors from same point when using triangle law
>
> **Right:**
>
> - First vector: anywhere

> - Second vector: starts from **head** of first vector

> - Resultant: **tail of first** to **head of second**

> **⚠ Trap #3: Angle in Parallelogram Law**
>
> **Common Error:** Using exterior angle instead of interior angle
>
> **Question:** Two vectors at 120° to each other
>
> **Check:** Is this the angle **between** vectors? If they’re adjacent sides of parallelogram, use this angle directly!

> **⚠ Trap #4: Component Sign Errors**
>
> **Wrong:** $\vec{a} = 3\hat{i} - 2\hat{j}$, $\vec{b} = -\hat{i} + 4\hat{j}$

> Addition: $(3+1)\hat{i} + (-2+4)\hat{j}$ = $4\hat{i} + 2\hat{j}$ ✗
>
> **Right:** $(3 + (-1))\hat{i} + (-2 + 4)\hat{j}$ = $2\hat{i} + 2\hat{j}$ ✓
>
> **Tip:** Write negative signs in brackets to avoid mistakes!

> **⚠ Trap #5: Direction Angle Formula**
>
> **Wrong:** Using $\tan\alpha = \frac{b}{a}$ always
>
> **Right:**
>
> - **Perpendicular vectors (90°):** $\tan\alpha = \frac{b}{a}$ ✓

> - **General angle θ:** $\tan\alpha = \frac{b\sin\theta}{a + b\cos\theta}$ ✓

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1: Basic Triangle Law**
>
> Add vectors $\vec{a} = 3\hat{i} + 4\hat{j}$ and $\vec{b} = \hat{i} - 2\hat{j}$.
>
> **Solution:**
>
> $$\vec{R} = (3+1)\hat{i} + (4-2)\hat{j} = 4\hat{i} + 2\hat{j}$$
>
> **Magnitude:** $|\vec{R}| = \sqrt{16 + 4} = 2\sqrt{5}$

> **↗ Connection · Problem 2: Perpendicular Vectors**
>
> Two forces 12 N and 5 N act perpendicular to each other. Find resultant.
>
> **Solution:**
>
> $$R = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13 \text{ N}$$
>
> **Direction:** $\tan\alpha = \frac{5}{12}$, so $\alpha = \tan^{-1}(5/12) \approx 22.6°$

> **↗ Connection · Problem 3: Opposite Direction Vectors**
>
> Two forces 8 N and 3 N act in opposite directions. Find resultant.
>
> **Solution:**
>
> $$R = |8 - 3| = 5 \text{ N in direction of larger force (8 N)}$$

### Level 2: JEE Main Type

> **↗ Connection · Problem 4: Equal Forces at 120°**
>
> Two equal forces each of magnitude 10 N act at 120° to each other. Find resultant.
>
> **Solution:**

> **Method 1:** Using equal magnitude formula
>
> $$R = 2(10)\cos\frac{120°}{2} = 20\cos 60° = 20 \times \frac{1}{2} = 10 \text{ N}$$
>
> **Method 2:** General formula
>
> $$R = \sqrt{10^2 + 10^2 + 2(10)(10)\cos 120°}$$

$$= \sqrt{100 + 100 + 200(-\frac{1}{2})} = \sqrt{100} = 10 \text{ N}$$

> **↗ Connection · Problem 5: Three Vectors Sum**
>
> Find $\vec{a} + \vec{b} + \vec{c}$ where:
>
> - $\vec{a} = 2\hat{i} - 3\hat{j} + 5\hat{k}$

> - $\vec{b} = -\hat{i} + 4\hat{j} - 2\hat{k}$

> - $\vec{c} = 3\hat{i} - \hat{j} - 3\hat{k}$
>
> **Solution:**
>
> $$\vec{R} = (2-1+3)\hat{i} + (-3+4-1)\hat{j} + (5-2-3)\hat{k}$$

$$= 4\hat{i} + 0\hat{j} + 0\hat{k} = 4\hat{i}$$
>
> **Magnitude:** $|\vec{R}| = 4$

> **↗ Connection · Problem 6: Parallelogram Diagonal**
>
> Adjacent sides of parallelogram are $\vec{a} = 3\hat{i} + 4\hat{j}$ and $\vec{b} = 2\hat{i} - 3\hat{j}$. Find both diagonals.
>
> **Solution:**

> **Diagonal 1:** $\vec{d_1} = \vec{a} + \vec{b} = 5\hat{i} + \hat{j}$, magnitude = $\sqrt{26}$
>
> **Diagonal 2:** $\vec{d_2} = \vec{a} - \vec{b} = \hat{i} + 7\hat{j}$, magnitude = $\sqrt{50} = 5\sqrt{2}$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 7: Vector Equation**
>
> If $\vec{a} = 2\hat{i} + 3\hat{j}$, $\vec{b} = \hat{i} - 2\hat{j}$, find $\vec{c}$ such that $2\vec{a} + 3\vec{b} - \vec{c} = \vec{0}$.
>
> **Solution:**
>
> $$\vec{c} = 2\vec{a} + 3\vec{b}$$

$$= 2(2\hat{i} + 3\hat{j}) + 3(\hat{i} - 2\hat{j})$$

$$= 4\hat{i} + 6\hat{j} + 3\hat{i} - 6\hat{j}$$

$$= 7\hat{i}$$
>
> **Answer:** $\vec{c} = 7\hat{i}$

> **↗ Connection · Problem 8: Magnitude Condition**
>
> Two vectors $\vec{a}$ and $\vec{b}$ have magnitudes 3 and 4. If $|\vec{a} + \vec{b}| = 5$, find angle between them.
>
> **Solution:**
>
> $$|\vec{a} + \vec{b}|^2 = a^2 + b^2 + 2ab\cos\theta$$

$$25 = 9 + 16 + 2(3)(4)\cos\theta$$

$$25 = 25 + 24\cos\theta$$

$$0 = 24\cos\theta$$

$$\cos\theta = 0$$

$$\theta = 90°$$
>
> **Answer:** Vectors are perpendicular!

> **↗ Connection · Problem 9: Ratio Division**
>
> If $\vec{a} = 2\hat{i} + 3\hat{j}$, $\vec{b} = \hat{i} - \hat{j}$, find vector $\vec{r}$ that divides $\vec{a} + \vec{b}$ and $\vec{a} - \vec{b}$ in ratio 2:1.
>
> **Solution:**
>
> $$\vec{a} + \vec{b} = 3\hat{i} + 2\hat{j}$$

$$\vec{a} - \vec{b} = \hat{i} + 4\hat{j}$$
>
> Using section formula (internal division):
>
> $$\vec{r} = \frac{2(\hat{i}+4\hat{j}) + 1(3\hat{i}+2\hat{j})}{2+1}$$

$$= \frac{2\hat{i}+8\hat{j}+3\hat{i}+2\hat{j}}{3} = \frac{5\hat{i}+10\hat{j}}{3}$$
>
> **Answer:** $\vec{r} = \frac{5}{3}\hat{i} + \frac{10}{3}\hat{j}$

---

## Connection to Physics

> **◐ In simple terms · Every Force Problem Uses Vector Addition**
>
> **Critical Applications:**
>
> 1. **Equilibrium:** When $\sum \vec{F} = \vec{0}$
>
>    - See: [Equilibrium of Forces](../../../chemistry/equilibrium/index.md)

> 2. **Inclined Planes:** Resolving weight into components
>
>    - See: [Motion on Inclined Plane](../../../physics/laws-of-motion/index.md)

> 3. **Projectile Motion:** Velocity = horizontal + vertical components
>
>    - See: [Projectile Motion](../../../physics/kinematics/projectile-motion/index.md)

> 4. **Relative Velocity:** $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$
>
>    - See: [Relative Motion](../../../physics/kinematics/index.md)

> 5. **Electric/Magnetic Fields:** Force on charge in multiple fields
>
>    - See: [Electric Field](../../../physics/electrostatics/electric-field/index.md)
>
> **Pro Tip:** Every JEE mechanics problem with 2+ forces needs vector addition. Master this, save 3-5 minutes per problem!

---

## Quick Revision Box

| Situation | Method | Formula |
| --- | --- | --- |
| **2 vectors, any angle** | Parallelogram Law | $R = \sqrt{a^2 + b^2 + 2ab\cos\theta}$ |
| **Equal magnitudes** | Special formula | $R = 2a\cos(\theta/2)$ |
| **Perpendicular (90°)** | Pythagoras | $R = \sqrt{a^2 + b^2}$ |
| **Parallel (0°)** | Direct add | $R = a + b$ |
| **Opposite (180°)** | Subtract | $R = |
| **Components given** | Component method | Add each component |
| **3+ vectors** | Always component | $R_x, R_y, R_z$ separately |

**Direction Formula:** $\tan\alpha = \frac{b\sin\theta}{a+b\cos\theta}$ (general case)

---

## Interactive Visualization

**Try This:** Change angles and see how resultant changes!

- At θ = 0°: Resultant is maximum (a + b)
- At θ = 180°: Resultant is minimum (|a - b|)
- At θ = 90°: Resultant = $\sqrt{a^2 + b^2}$

---

## What’s Next?

Now that you can add vectors, learn how to **multiply them:**

> **★ Key point · Next Topics**
>
> **[Scalar Product (Dot Product)](../scalar-product/index.md)** - For work, projections, angles between vectors
>
> **[Vector Product (Cross Product)](../vector-product/index.md)** - For torque, area, perpendicular vectors
>
> **Also explore:**
>
> - [Motion in a Plane](../../../physics/kinematics/index.md) - Uses vector addition heavily

> - [3D Geometry](../../three-dimensional-geometry/index.md) - Equations of lines using vectors

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Component method is king** - use it unless specifically asked for triangle/parallelogram

> 2. **Never add magnitudes directly** - direction always matters!

> 3. **Special angles (60°, 90°, 120°)** appear in 70% of JEE problems - memorize formulas

> 4. **For equal magnitudes:** $R = 2a\cos(\theta/2)$ is your best friend

> 5. **Triangle law = Tail to Head** → Resultant closes the triangle
>
> **“In JEE, see multiple forces? Think vector addition. See components? Add them directly. This saves you 2 minutes per problem!”**
>
> **Time-saving tip:** For perpendicular vectors, directly use Pythagoras - no need for full formula!

---

**Pro Tip:** When exam gives you “$|\vec{a}| = 3$, $|\vec{b}| = 4$, $|\vec{a}+\vec{b}| = 5$” - immediately recognize 3-4-5 Pythagorean triplet → vectors are perpendicular! Saves 30 seconds!

From TestGuru · our mock-test platform

## You've read Vector Addition: Triangle, Parallelogram & Component Methods.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=vector-algebra&tg_exam=jee-main&tg_page=%2Fmathematics%2Fvector-algebra%2Fvector-addition%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-17

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/vector-algebra/vector-addition/",this.page.identifier="/mathematics/vector-algebra/vector-addition/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="vectorAddition" id="anim-vectorAddition-1795396422552825013"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-vectorAddition-1795396422552825013")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="vectorAddition" id="anim-vectorAddition-1795396422556504696"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-vectorAddition-1795396422556504696")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/vector-algebra/vector-addition/](https://jeenotes.in/mathematics/vector-algebra/vector-addition/) · raw HTML: `offline/mathematics/vector-algebra/vector-addition/index.html`_
