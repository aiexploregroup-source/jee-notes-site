---
title: "Equation of a Plane in 3D Space"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/plane-equations/"
description: "Master all forms of plane equations - normal form, intercept form, general form, and plane through three points for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/plane-equations/index.html"
extracted: "2026-11-23"
---

> Master all forms of plane equations - normal form, intercept form, general form, and plane through three points for JEE Main and Advanced

## Real-World Hook: Flat Surfaces Everywhere

Every **flat wall** in your room, every **table top**, every **floor** represents a **plane in 3D space**! Architects use plane equations to design buildings, aerospace engineers use them to model aircraft wings, and geologists use them to describe fault lines in Earth’s crust. Even your phone screen is mathematically a plane!

---

## What is a Plane?

A **plane** is a flat, two-dimensional surface extending infinitely in 3D space. It requires:

1. A **point** on the plane, OR
2. A **normal vector** (perpendicular to the plane), OR
3. **Three non-collinear points**, OR
4. **Intercepts** on the axes

---

## Form 1: General Equation of a Plane

### Equation

$$\boxed{ax + by + cz + d = 0}$$

### Interactive Demo: Visualize Planes in 3D

See how planes are oriented in three-dimensional space.

where:

- **a, b, c** are constants (not all zero)
- **(a, b, c)** represents the **normal vector** to the plane
- **d** is a constant
- **(x, y, z)** is any point on the plane

### Key Insight

The coefficients **(a, b, c)** give the direction ratios of the **normal** (perpendicular) to the plane!

### Memory Trick 🧠

**“ABC is the Normal Direction”**

- Plane: ax + by + cz + d = 0
- Normal vector: **n** = a**i** + b**j** + c**k**
- This is analogous to 2D: ax + by + c = 0 has normal (a, b)

---

## Form 2: Normal Form (Point-Normal Form)

### Equation

If plane passes through point **(x₁, y₁, z₁)** with normal vector **(a, b, c)**:

$$\boxed{a(x - x_1) + b(y - y_1) + c(z - z_1) = 0}$$

### Vector Form

$$\boxed{(\vec{r} - \vec{a}) \cdot \vec{n} = 0}$$

where:

- **r** = position vector of any point on plane = x**i** + y**j** + z**k**
- **a** = position vector of given point = x₁**i** + y₁**j** + z₁**k**
- **n** = normal vector = a**i** + b**j** + c**k**

### Geometric Interpretation

Vector from given point to any point on plane (**r** - **a**) is **perpendicular** to normal **n**.
Hence their dot product = 0!

### Perpendicular (Distance) Form

If **l, m, n** are the direction cosines of the normal and **p** is the perpendicular distance of the plane from the origin:

$$\boxed{lx + my + nz = p}$$

To reach this form, divide the general equation **ax + by + cz + d = 0** by √(a² + b² + c²); the constant term then directly gives the distance from the origin.

---

## Form 3: Intercept Form

### Equation

Plane making intercepts **a, b, c** on X, Y, Z axes:

$$\boxed{\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1}$$

where:

- **a** = x-intercept (plane cuts X-axis at (a, 0, 0))
- **b** = y-intercept (plane cuts Y-axis at (0, b, 0))
- **c** = z-intercept (plane cuts Z-axis at (0, 0, c))

### Memory Trick 🧠

**“Sum of Ratios Equals 1”**

- Exactly like 2D line intercept form: x/a + y/b = 1
- Extended to 3D: x/a + y/b + z/c = 1

### Converting to General Form

Multiply throughout by **abc**:

$$bcx + acy + abz = abc$$

Or: **bcx + acy + abz - abc = 0**

### Common Mistake ⚠️

**Intercept vs coefficient confusion**:

```fallback
Plane: x/2 + y/3 + z/4 = 1

❌ x-intercept = 1/2  [Taking reciprocal!]
✓  x-intercept = 2   [Denominator itself]

The plane cuts X-axis at (2, 0, 0), Y-axis at (0, 3, 0), Z-axis at (0, 0, 4)
```

---

## Form 4: Plane Through Three Points

### Method

Given three non-collinear points **A(x₁, y₁, z₁)**, **B(x₂, y₂, z₂)**, **C(x₃, y₃, z₃)**, the plane equation is:

$$\boxed{\begin{vmatrix} x - x_1 & y - y_1 & z - z_1 \\ x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ x_3 - x_1 & y_3 - y_1 & z_3 - z_1 \end{vmatrix} = 0}$$

### Alternative Method (Easier!)

**Step 1**: Let plane be ax + by + cz + d = 0

**Step 2**: Substitute all three points to get three equations

**Step 3**: Solve for a, b, c in terms of d (or vice versa)

**Step 4**: Write final equation

### Memory Trick 🧠

**“Determinant with Differences”**

- First row: (x - x₁, y - y₁, z - z₁) [general point minus first point]
- Second row: (x₂ - x₁, y₂ - y₁, z₂ - z₁) [second point minus first]
- Third row: (x₃ - x₁, y₃ - y₁, z₃ - z₁) [third point minus first]

---

## Form 5: Vector Form of Plane

### Equation

$$\boxed{\vec{r} = \vec{a} + \lambda\vec{b} + \mu\vec{c}}$$

where:

- **r** = position vector of any point on plane
- **a** = position vector of a given point on plane
- **b**, **c** = two non-parallel vectors parallel to the plane
- **λ, μ** = parameters (scalars)

This is the **parametric form** of a plane.

### Converting to Cartesian Form

If **r** = x**i** + y**j** + z**k**, **a** = a₁**i** + a₂**j** + a₃**k**, **b** = b₁**i** + b₂**j** + b₃**k**, **c** = c₁**i** + c₂**j** + c₃**k**:

$$x = a_1 + \lambda b_1 + \mu c_1$$

$$y = a_2 + \lambda b_2 + \mu c_2$$

$$z = a_3 + \lambda b_3 + \mu c_3$$

Eliminate λ and μ to get Cartesian form.

---

## Special Planes

### Plane Parallel to XY-plane

**z = k** (constant)

General form: **0x + 0y + 1z - k = 0**
Normal: (0, 0, 1) - parallel to Z-axis

### Plane Parallel to YZ-plane

**x = k** (constant)

Normal: (1, 0, 0) - parallel to X-axis

### Plane Parallel to XZ-plane

**y = k** (constant)

Normal: (0, 1, 0) - parallel to Y-axis

### Plane Through Origin

If plane passes through origin (0, 0, 0):

$$\boxed{ax + by + cz = 0}$$

(The constant term d = 0)

---

## Finding Intercepts from General Form

Given: **ax + by + cz + d = 0**

**Step 1**: Rearrange to: ax + by + cz = -d

**Step 2**: Divide by -d:

$$\frac{ax}{-d} + \frac{by}{-d} + \frac{cz}{-d} = 1$$

**Step 3**: Rewrite as:

$$\frac{x}{-d/a} + \frac{y}{-d/b} + \frac{z}{-d/c} = 1$$

**Intercepts**:

- x-intercept = **-d/a**
- y-intercept = **-d/b**
- z-intercept = **-d/c**

---

## Worked Examples

### Example 1: Point-Normal Form (JEE Main Level)

**Problem**: Find equation of plane passing through (1, 2, 3) with normal (2, 3, 4).

**Solution**:
Using normal form:

$$a(x - x_1) + b(y - y_1) + c(z - z_1) = 0$$

$$2(x - 1) + 3(y - 2) + 4(z - 3) = 0$$

$$2x - 2 + 3y - 6 + 4z - 12 = 0$$

$$\boxed{2x + 3y + 4z = 20}$$

Or: **2x + 3y + 4z - 20 = 0**

---

### Example 2: Three Points (JEE Main Level)

**Problem**: Find plane through A(1, 1, 1), B(2, 3, 1), C(3, 2, 2).

**Solution**:
Let plane be **ax + by + cz = d** (assuming it doesn’t pass through origin)

Substituting points:

- A: a + b + c = d &mldr; (i)
- B: 2a + 3b + c = d &mldr; (ii)
- C: 3a + 2b + 2c = d &mldr; (iii)

From (i): d = a + b + c

Substitute in (ii): 2a + 3b + c = a + b + c
→ a + 2b = 0
→ a = -2b

Substitute in (iii): 3a + 2b + 2c = a + b + c
→ 2a + b + c = 0
→ 2(-2b) + b + c = 0
→ -4b + b + c = 0
→ c = 3b

Let b = 1, then a = -2, c = 3
From (i): d = -2 + 1 + 3 = 2

**Equation**: **-2x + y + 3z = 2**

Or: **2x - y - 3z + 2 = 0**

---

### Example 3: Intercept Form (JEE Main Level)

**Problem**: Find equation of plane with intercepts 2, 3, 4 on X, Y, Z axes respectively.

**Solution**:
Using intercept form:

$$\frac{x}{2} + \frac{y}{3} + \frac{z}{4} = 1$$

Multiplying by LCM(2, 3, 4) = 12:

$$\boxed{6x + 4y + 3z = 12}$$

Or: **6x + 4y + 3z - 12 = 0**

---

### Example 4: Finding Intercepts (JEE Main Level)

**Problem**: Find intercepts made by plane 2x + 3y + 6z = 12 on the axes.

**Solution**:
**Method 1**: Convert to intercept form

Divide equation by 12:

$$\frac{2x}{12} + \frac{3y}{12} + \frac{6z}{12} = 1$$

$$\frac{x}{6} + \frac{y}{4} + \frac{z}{2} = 1$$

**Intercepts**: x = 6, y = 4, z = 2

**Method 2**: Direct calculation

- x-intercept: Put y = z = 0 → 2x = 12 → x = 6
- y-intercept: Put x = z = 0 → 3y = 12 → y = 4
- z-intercept: Put x = y = 0 → 6z = 12 → z = 2

---

### Example 5: Plane Through Origin (JEE Advanced Level)

**Problem**: Find plane through origin and points (1, 2, 3), (3, 2, 1).

**Solution**:
Since plane passes through origin, equation is: **ax + by + cz = 0**

Substituting (1, 2, 3): a + 2b + 3c = 0 &mldr; (i)
Substituting (3, 2, 1): 3a + 2b + c = 0 &mldr; (ii)

From (ii) - (i): 2a - 2c = 0 → a = c

Substitute in (i): a + 2b + 3a = 0 → 4a + 2b = 0 → b = -2a

Let a = 1, then c = 1, b = -2

**Equation**: **x - 2y + z = 0**

---

## Practice Problems

### Level 1: JEE Main Basics

1. Find the equation of plane passing through (2, 3, 1) with normal vector (1, 2, 3).
2. Write the equation x + 2y + 3z = 6 in intercept form.
3. Find intercepts made by plane 3x + 4y + 6z = 12.
4. Find the equation of YZ-plane.

### Level 2: JEE Main Standard

5. Find equation of plane through points (1, 0, 0), (0, 2, 0), (0, 0, 3).
6. Find equation of plane passing through (1, 1, 1), (2, 3, 4), and parallel to Z-axis.
7. Find the value of k if plane 2x + 3y + kz = 6 passes through (1, 1, 1).
8. Find equation of plane through (1, 2, 3) and perpendicular to line joining (1, 2, 3) and (3, 4, 5).

### Level 3: JEE Advanced

9. Find equation of plane equidistant from points (1, 2, 3) and (3, 4, 5).
10. Find plane through line (x-1)/2 = (y-2)/3 = (z-3)/4 and point (1, 1, 1).
11. Find equation of plane through intersection of planes x + 2y + 3z = 4 and 2x + y - z = 5, and passing through (1, 1, 1).
12. Find the locus of a point equidistant from the planes x + 2y + 3z = 0 and 3x + 2y + z = 0.

---

## Quick Reference: All Forms

| Form | Equation | When to Use |
| --- | --- | --- |
| General | ax + by + cz + d = 0 | Standard form, (a,b,c) is normal |
| Normal | a(x-x₁) + b(y-y₁) + c(z-z₁) = 0 | Given point and normal |
| Intercept | x/a + y/b + z/c = 1 | Given intercepts |
| Vector | (**r**-**a**)·**n** = 0 | Vector problems |
| Three points | Use determinant or substitution | Given 3 points |

---

## Algorithm: Finding Plane Equation

**Given**: Information about the plane

**Case 1 - Point and Normal**:
Use a(x-x₁) + b(y-y₁) + c(z-z₁) = 0

**Case 2 - Intercepts**:
Use x/a + y/b + z/c = 1

**Case 3 - Three Points**:

- Substitute in ax + by + cz = d
- Solve for a, b, c (in terms of d)
- Write final equation

**Case 4 - Two Points + Parallel to Line/Plane**:

- Find normal using cross product
- Use point-normal form

---

## Cross-Links

- **Previous Topic**: [Angle Between Lines](../angle-between-lines/index.md) - Foundation for understanding angles
- **Next Topic**: [Line-Plane Relations](../line-plane-relations/index.md) - Intersection and angles
- **Related**: [Vector Cross Product](../../vector-algebra/index.md) - Finding normal to plane
- **Application**: [Distance from Plane](../line-plane-relations/index.md) - Distance formulas

---

## Common Exam Patterns

**JEE Main typically asks**:

- Finding plane from point and normal (2-3 marks)
- Intercept form conversions (2 marks)
- Plane through three points (3-4 marks)
- Finding intercepts from general form (2 marks)

**JEE Advanced patterns**:

- Plane through line and point
- Plane through intersection of two planes
- Family of planes
- Locus problems with planes

**Pro Tip**:

- For three points, substitution method is often faster than determinant
- Always verify by substituting points back into final equation
- Check if plane passes through origin - simplifies to ax + by + cz = 0

---

*Last updated: November 2025*

From TestGuru · our mock-test platform

## You've read Equation of a Plane in 3D Space.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2Fplane-equations%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/three-dimensional-geometry/plane-equations/",this.page.identifier="/mathematics/three-dimensional-geometry/plane-equations/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="threeDVisualization" id="anim-threeDVisualization-1795396422361604047"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-threeDVisualization-1795396422361604047")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/plane-equations/](https://jeenotes.in/mathematics/three-dimensional-geometry/plane-equations/) · raw HTML: `offline/mathematics/three-dimensional-geometry/plane-equations/index.html`_
