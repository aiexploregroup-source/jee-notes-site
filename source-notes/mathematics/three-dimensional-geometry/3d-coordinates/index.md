---
title: "3D Coordinate System & Distance Formula"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/3d-coordinates/"
description: "Master the three-dimensional coordinate system, distance formula, section formula, and coordinate transformations for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "7 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/3d-coordinates/index.html"
extracted: "2026-11-23"
---

> Master the three-dimensional coordinate system, distance formula, section formula, and coordinate transformations for JEE Main and Advanced

## Real-World Hook: GPS Navigation

When your phone shows “You are 150m away” from a destination, it’s calculating the **distance formula in 3D space** - considering latitude, longitude, and altitude! GPS satellites use 3D coordinates to pinpoint your exact location on Earth. Similarly, video game engines use 3D coordinate systems to render characters and objects in virtual worlds.

---

## The 3D Coordinate System

### Understanding the Three Axes

In 3D space, any point P is represented by an ordered triplet **(x, y, z)** where:

- **x-coordinate**: Distance from the YZ-plane (left/right)
- **y-coordinate**: Distance from the XZ-plane (forward/backward)
- **z-coordinate**: Distance from the XY-plane (up/down)

**Key Convention**: We use the **right-hand coordinate system**:

- Point your right thumb along positive X-axis
- Index finger along positive Y-axis
- Middle finger points along positive Z-axis

### The Eight Octants

Just like 2D has 4 quadrants, 3D space is divided into **8 octants**:

| Octant | x | y | z | Example Point |
| --- | --- | --- | --- | --- |
| I | + | + | + | (2, 3, 4) |
| II | - | + | + | (-2, 3, 4) |
| III | - | - | + | (-2, -3, 4) |
| IV | + | - | + | (2, -3, 4) |
| V | + | + | - | (2, 3, -4) |
| VI | - | + | - | (-2, 3, -4) |
| VII | - | - | - | (-2, -3, -4) |
| VIII | + | - | - | (2, -3, -4) |

---

## Distance Formula in 3D

### Formula

The distance between two points **A(x₁, y₁, z₁)** and **B(x₂, y₂, z₂)** is:

$$\boxed{AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}}$$

### Interactive Demo: Visualize 3D Distance

Explore points and distances in three-dimensional space with interactive visualization.

### Memory Trick 🧠

**“XYZ Differences Squared and Rooted”**

- Think of it as the 2D distance formula **plus** the z-component
- 2D: √[(Δx)² + (Δy)²]
- 3D: √[(Δx)² + (Δy)² + (Δz)²]

### Special Case: Distance from Origin

Distance of point **P(x, y, z)** from origin **O(0, 0, 0)**:

$$\boxed{OP = \sqrt{x^2 + y^2 + z^2}}$$

### Common Mistake ⚠️

**Wrong**: Taking absolute differences instead of squares

```fallback
❌ AB = √(|x₂ - x₁| + |y₂ - y₁| + |z₂ - z₁|)
✓  AB = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]
```

**Sign Awareness**: The order (x₂ - x₁) vs (x₁ - x₂) doesn’t matter because of squaring!

---

## Section Formula

### Internal Division

If point **P(x, y, z)** divides the line segment joining **A(x₁, y₁, z₁)** and **B(x₂, y₂, z₂)** internally in the ratio **m:n**, then:

$$\boxed{P = \left(\frac{mx_2 + nx_1}{m+n}, \frac{my_2 + ny_1}{m+n}, \frac{mz_2 + nz_1}{m+n}\right)}$$

### Memory Trick 🧠

**“M loves 2, N loves 1”**

- **m** goes with the **second point** (x₂, y₂, z₂)
- **n** goes with the **first point** (x₁, y₁, z₁)
- Denominator is always **(m + n)** for internal division

### External Division

If P divides AB **externally** in ratio **m:n**, then:

$$\boxed{P = \left(\frac{mx_2 - nx_1}{m-n}, \frac{my_2 - ny_1}{m-n}, \frac{mz_2 - nz_1}{m-n}\right)}$$

**Key Difference**:

- Internal: **m + n** in denominator, **+** in numerator
- External: **m - n** in denominator, **-** in numerator (second term)

### Midpoint Formula (Special Case: m = n = 1)

$$\boxed{\text{Midpoint} = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2}\right)}$$

### Common Mistake ⚠️

**Mixing up internal and external formulas**:

```fallback
Internal division (2:1) from A(1,2,3) to B(4,5,6):
❌ P = ((2·4 - 1·1)/(2-1), ...) = (7, ...)  [Used external formula!]
✓  P = ((2·4 + 1·1)/(2+1), ...) = (3, ...)  [Correct internal formula]
```

---

## Centroid of a Triangle and Tetrahedron

### Centroid of Triangle

For triangle with vertices **A(x₁, y₁, z₁)**, **B(x₂, y₂, z₂)**, **C(x₃, y₃, z₃)**:

$$\boxed{G = \left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}, \frac{z_1 + z_2 + z_3}{3}\right)}$$

### Centroid of Tetrahedron

For tetrahedron with vertices **A, B, C, D**:

$$\boxed{G = \left(\frac{x_1 + x_2 + x_3 + x_4}{4}, \frac{y_1 + y_2 + y_3 + y_4}{4}, \frac{z_1 + z_2 + z_3 + z_4}{4}\right)}$$

### Memory Trick 🧠

**“Average all coordinates”** - Just take the arithmetic mean of all x’s, y’s, and z’s separately!

---

## Worked Examples

### Example 1: Distance Calculation (JEE Main Level)

**Problem**: Find the distance between A(2, -1, 3) and B(-1, 0, 4).

**Solution**:
Using distance formula:

$$AB = \sqrt{(-1-2)^2 + (0-(-1))^2 + (4-3)^2}$$

$$= \sqrt{(-3)^2 + (1)^2 + (1)^2}$$

$$= \sqrt{9 + 1 + 1} = \sqrt{11}$$

**Answer**: √11 units

---

### Example 2: Section Formula (JEE Main Level)

**Problem**: Find the coordinates of point P that divides the line joining A(1, 2, 3) and B(4, 5, 6) internally in ratio 2:1.

**Solution**:
Using internal section formula with m = 2, n = 1:

$$x = \frac{2(4) + 1(1)}{2+1} = \frac{9}{3} = 3$$

$$y = \frac{2(5) + 1(2)}{2+1} = \frac{12}{3} = 4$$

$$z = \frac{2(6) + 1(3)}{2+1} = \frac{15}{3} = 5$$

**Answer**: P(3, 4, 5)

**Verification**: P is closer to B than A (ratio 2:1 means P divides closer to B).

---

### Example 3: Collinear Points (JEE Advanced Level)

**Problem**: Show that points A(1, 2, 3), B(2, 3, 4), and C(3, 4, 5) are collinear.

**Solution**:
For collinear points, **AB + BC = AC** (or any similar combination).

$$AB = \sqrt{(2-1)^2 + (3-2)^2 + (4-3)^2} = \sqrt{1+1+1} = \sqrt{3}$$

$$BC = \sqrt{(3-2)^2 + (4-3)^2 + (5-4)^2} = \sqrt{1+1+1} = \sqrt{3}$$

$$AC = \sqrt{(3-1)^2 + (4-2)^2 + (5-3)^2} = \sqrt{4+4+4} = 2\sqrt{3}$$

Since AB + BC = √3 + √3 = 2√3 = AC, the points are **collinear**.

**Alternative Method**: Check if the coordinates follow a linear pattern:

- x: 1, 2, 3 (common difference = 1)
- y: 2, 3, 4 (common difference = 1)
- z: 3, 4, 5 (common difference = 1)

All coordinates have the same pattern → Points are collinear.

---

## Practice Problems

### Level 1: JEE Main Basics

1. Find the distance between points P(3, 4, 5) and Q(6, 8, 10).
2. Find the midpoint of the line segment joining A(-2, 3, 5) and B(4, -1, 7).
3. In which octant does the point P(-3, 4, -2) lie?
4. Find the distance of point (2, 3, 6) from the origin.

### Level 2: JEE Main Standard

5. Point P divides the line joining A(2, 3, 4) and B(5, 6, 7) in ratio 2:1 internally. Find the coordinates of P.
6. The vertices of a triangle are A(1, 2, 3), B(4, 5, 6), C(7, 8, 9). Find the centroid.
7. If the distance between points (3, y, 5) and (1, 2, 3) is √12, find the value(s) of y.
8. Find the ratio in which the YZ-plane divides the line joining (2, 4, 5) and (-3, 5, 6).

### Level 3: JEE Advanced

9. Show that the points A(1, 2, 3), B(2, 4, 5), C(3, 6, 7) are collinear and find the ratio in which B divides AC.
10. Find the locus of a point which is equidistant from the points A(1, 2, 3) and B(3, 2, 1).
11. The vertices of a tetrahedron are (0, 0, 0), (4, 0, 0), (0, 4, 0), (0, 0, 4). Find:

    - (a) Centroid
    - (b) Distance from centroid to each vertex
    - (c) Volume using determinant formula
12. Point P moves such that its distance from A(1, 0, 0) is twice its distance from B(0, 0, 0). Find the equation of the locus.

---

## Quick Revision Formulas

| Concept | Formula |
| --- | --- |
| Distance AB | √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²] |
| Distance from origin | √(x² + y² + z²) |
| Internal division (m:n) | ((mx₂+nx₁)/(m+n), &mldr;) |
| External division (m:n) | ((mx₂-nx₁)/(m-n), &mldr;) |
| Midpoint | ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2) |
| Centroid (triangle) | ((x₁+x₂+x₃)/3, &mldr;) |
| Centroid (tetrahedron) | ((x₁+x₂+x₃+x₄)/4, &mldr;) |

---

## Cross-Links

- **Next Topic**: [Direction Cosines and Direction Ratios](../direction-cosines/index.md) - Learn how to define direction in 3D space
- **Related**: [Vectors in 3D](../../vector-algebra/index.md) - Position vectors and coordinate representation
- **Foundation**: [2D Coordinate Geometry](../../coordinate-geometry/index.md) - See the extension from 2D to 3D
- **Application**: [Line in Space](../line-in-space/index.md) - Use coordinates to define lines in 3D

---

## Common Exam Patterns

**JEE Main typically asks**:

- Direct distance calculations (1-2 marks)
- Section formula applications (2-3 marks)
- Centroid and midpoint problems (2 marks)
- Combined with vectors or lines (3-4 marks)

**JEE Advanced patterns**:

- Locus problems in 3D
- Proving collinearity/coplanarity
- Optimization (max/min distance)
- Integration with vector algebra

**Time-Saving Tip**: For exam speed, memorize the midpoint formula separately rather than substituting m=n=1 in section formula each time!

---

*Last updated: November 2025*

From TestGuru · our mock-test platform

## You've read 3D Coordinate System & Distance Formula.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2F3d-coordinates%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/three-dimensional-geometry/3d-coordinates/",this.page.identifier="/mathematics/three-dimensional-geometry/3d-coordinates/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="threeDVisualization" id="anim-threeDVisualization-1795396422321457643"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-threeDVisualization-1795396422321457643")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/3d-coordinates/](https://jeenotes.in/mathematics/three-dimensional-geometry/3d-coordinates/) · raw HTML: `offline/mathematics/three-dimensional-geometry/3d-coordinates/index.html`_
