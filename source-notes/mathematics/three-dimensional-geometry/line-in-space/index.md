---
title: "Equation of a Line in 3D Space"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/line-in-space/"
description: "Master vector, parametric, and symmetric forms of line equations in three-dimensional space for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/line-in-space/index.html"
extracted: "2026-11-23"
---

> Master vector, parametric, and symmetric forms of line equations in three-dimensional space for JEE Main and Advanced

## Real-World Hook: Laser Beams and Flight Paths

When a laser pointer creates a beam in a room, it traces a **line in 3D space**. Similarly, air traffic controllers use line equations to track airplane trajectories, ensuring no two flight paths intersect! Video game engines use line equations to calculate bullet trajectories and line-of-sight for characters.

---

## Three Forms of Line Equations

A line in 3D can be represented in **three equivalent forms**:

1. **Vector Form** (using position vectors)
2. **Parametric Form** (using parameter λ or t)
3. **Symmetric/Cartesian Form** (eliminating parameter)

Each form has its advantages - let’s master all three!

---

## Interactive Demo: 3D Line Equation Converter

### Convert Between Line Forms

Enter point (x₀, y₀, z₀) and direction (a, b, c) to see all three forms

**Point on line:**  
x₀: 
y₀: 
z₀:   
**Direction vector:**  
a: 
b: 
c:

---

## 1. Vector Form of a Line

### Equation

A line passing through point **A** (position vector **a**) and parallel to vector **b** is given by:

$$\boxed{\vec{r} = \vec{a} + \lambda\vec{b}}$$

### Interactive Demo: Visualize Lines in 3D

Explore how lines extend through three-dimensional space.

where:

- **r** = position vector of any point on the line
- **a** = position vector of a given point on the line
- **b** = direction vector (parallel to the line)
- **λ** = parameter (scalar, can take any real value)

### Two-Point Form (Vector)

Line passing through points **A** (position vector **a**) and **B** (position vector **b**):

$$\boxed{\vec{r} = \vec{a} + \lambda(\vec{b} - \vec{a})}$$

Or equivalently:

$$\boxed{\vec{r} = (1-\lambda)\vec{a} + \lambda\vec{b}}$$

### Memory Trick 🧠

**“Point Plus Lambda Times Direction”**

- Start at point **a**
- Move **λ** steps in direction **b**
- λ > 0: forward direction
- λ < 0: backward direction
- λ = 0: at point A itself

---

## 2. Parametric Form of a Line

### Equation

If the line passes through point **(x₁, y₁, z₁)** with direction ratios **(a, b, c)**:

$$\boxed{x = x_1 + \lambda a, \quad y = y_1 + \lambda b, \quad z = z_1 + \lambda c}$$

### Two-Point Form (Parametric)

Line through points **A(x₁, y₁, z₁)** and **B(x₂, y₂, z₂)**:

$$\boxed{x = x_1 + \lambda(x_2-x_1), \quad y = y_1 + \lambda(y_2-y_1), \quad z = z_1 + \lambda(z_2-z_1)}$$

### Finding a Point on the Line

To find coordinates of any point:

1. Choose a value of λ (say λ = 1, 2, -1, etc.)
2. Substitute in parametric equations
3. Calculate (x, y, z)

**Example**: For λ = 0 → Point (x₁, y₁, z₁) (starting point A)
For λ = 1 → Point (x₁+a, y₁+b, z₁+c)

---

## 3. Symmetric (Cartesian) Form

### Equation

Eliminating **λ** from parametric form:

$$\boxed{\frac{x - x_1}{a} = \frac{y - y_1}{b} = \frac{z - z_1}{c}}$$

where (x₁, y₁, z₁) is a point on the line and (a, b, c) are direction ratios.

This is the **most commonly used form** in JEE!

### Two-Point Form (Symmetric)

Line through **A(x₁, y₁, z₁)** and **B(x₂, y₂, z₂)**:

$$\boxed{\frac{x - x_1}{x_2-x_1} = \frac{y - y_1}{y_2-y_1} = \frac{z - z_1}{z_2-z_1}}$$

### Memory Trick 🧠

**“Difference Over Direction Ratio”**

- Numerator: (coordinate - known point coordinate)
- Denominator: direction ratio
- All three fractions are equal (= λ, the parameter)

---

## Special Cases: Lines Parallel to Axes/Planes

### Line Parallel to X-axis

Direction ratios: (1, 0, 0)

Equation:

$$\boxed{\frac{x-x_1}{1} = \frac{y-y_1}{0} = \frac{z-z_1}{0}}$$

This means: **y = y₁, z = z₁** (y and z are constant)

### Line Parallel to Y-axis

Equation: **x = x₁, z = z₁** (only y varies)

### Line Parallel to Z-axis

Equation: **x = x₁, y = y₁** (only z varies)

### Line Parallel to XY-plane

Direction vector perpendicular to (0, 0, 1), so **c = 0**:

$$\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{0}$$

This gives: **z = z₁** (constant z-coordinate)

### Common Mistake ⚠️

**Division by zero in symmetric form**:

```fallback
For line parallel to X-axis through (2, 3, 4):
❌ (x-2)/1 = (y-3)/0 = (z-4)/0  [Can't divide by 0!]
✓  Correct form: y = 3, z = 4 (and x is free)

Or parametric: x = 2 + λ, y = 3, z = 4
```

**Rule**: When a direction ratio is 0, set that coordinate equal to the point coordinate!

---

## Converting Between Forms

### Vector → Parametric

If **r** = (x₁**i** + y₁**j** + z₁**k**) + λ(a**i** + b**j** + c**k**), then:

- x = x₁ + λa
- y = y₁ + λb
- z = z₁ + λc

### Parametric → Symmetric

From x = x₁ + λa, y = y₁ + λb, z = z₁ + λc:

Solve for λ from each:

- λ = (x - x₁)/a
- λ = (y - y₁)/b
- λ = (z - z₁)/c

Equate: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c

### Symmetric → Vector

From (x-x₁)/a = (y-y₁)/b = (z-z₁)/c:

- Point: **a** = x₁**i** + y₁**j** + z₁**k**
- Direction: **b** = a**i** + b**j** + c**k**
- Vector form: **r** = **a** + λ**b**

---

## Checking if a Point Lies on a Line

### Method 1: Symmetric Form

Substitute point coordinates (x, y, z) and check if all three ratios are equal.

**Example**: Check if (5, 7, 9) lies on (x-2)/1 = (y-3)/2 = (z-5)/2

Calculate: (5-2)/1 = 3, (7-3)/2 = 2, (9-5)/2 = 2

Since 3 ≠ 2, point does **not** lie on the line.

### Method 2: Parametric Form

Substitute in parametric equations and solve for λ. If same λ satisfies all three equations, point is on the line.

---

## Worked Examples

### Example 1: Vector to Symmetric Form (JEE Main Level)

**Problem**: Convert **r** = (2**i** + 3**j** - **k**) + λ(**i** + 2**j** + 3**k**) to symmetric form.

**Solution**:
Point on line: (2, 3, -1)
Direction vector: (1, 2, 3)

Symmetric form:

$$\frac{x-2}{1} = \frac{y-3}{2} = \frac{z+1}{3}$$

---

### Example 2: Line Through Two Points (JEE Main Level)

**Problem**: Find the equation of line passing through A(1, 2, 3) and B(4, 5, 6).

**Solution**:
Direction ratios: (4-1, 5-2, 6-3) = (3, 3, 3) or simplified: (1, 1, 1)

**Symmetric form**:

$$\frac{x-1}{1} = \frac{y-2}{1} = \frac{z-3}{1}$$

**Parametric form**:

$$x = 1 + \lambda, \quad y = 2 + \lambda, \quad z = 3 + \lambda$$

**Vector form**:

$$\vec{r} = (\hat{i} + 2\hat{j} + 3\hat{k}) + \lambda(\hat{i} + \hat{j} + \hat{k})$$

---

### Example 3: Point on a Line (JEE Main Level)

**Problem**: Find the coordinates of a point on the line (x-1)/2 = (y+1)/3 = (z-2)/4 at a distance √29 from the point (1, -1, 2).

**Solution**:
Parametric form: x = 1 + 2λ, y = -1 + 3λ, z = 2 + 4λ

General point P: (1+2λ, -1+3λ, 2+4λ)
Given point A: (1, -1, 2)

Distance AP:

$$\sqrt{(2\lambda)^2 + (3\lambda)^2 + (4\lambda)^2} = \sqrt{29}$$

$$\sqrt{4\lambda^2 + 9\lambda^2 + 16\lambda^2} = \sqrt{29}$$

$$\sqrt{29\lambda^2} = \sqrt{29}$$

$$|\lambda| = 1$$

$$\lambda = \pm 1$$

For λ = 1: P = (3, 2, 6)
For λ = -1: P = (-1, -4, -2)

**Answer**: Two points (3, 2, 6) and (-1, -4, -2)

---

### Example 4: Line Parallel to Given Line (JEE Advanced Level)

**Problem**: Find the equation of a line passing through (2, -1, 3) and parallel to the line (x-1)/2 = (y+2)/3 = (z-4)/4.

**Solution**:
Parallel lines have **same direction ratios**.

Given line has DR: (2, 3, 4)
Required line also has DR: (2, 3, 4)
Passes through: (2, -1, 3)

**Equation**:

$$\frac{x-2}{2} = \frac{y+1}{3} = \frac{z-3}{4}$$

**Key Insight**: Only the point changes, direction ratios remain the same for parallel lines!

---

## Practice Problems

### Level 1: JEE Main Basics

1. Find the vector equation of a line passing through (1, 2, 3) with direction ratios (2, 3, 4).
2. Convert to symmetric form: x = 2 + 3λ, y = -1 + 2λ, z = 4 + λ
3. Find direction ratios of the line: (x-1)/3 = (y+2)/4 = (z-5)/2
4. Does point (3, 5, 7) lie on the line (x-1)/1 = (y-2)/3 = (z-3)/2?

### Level 2: JEE Main Standard

5. Find the Cartesian equation of line passing through (2, -1, 4) and (3, 2, -1).
6. Find coordinates of the point where the line (x-1)/2 = (y+1)/3 = z/4 meets the YZ-plane.
7. Show that lines **r** = (2**i** - **j** + 3**k**) + λ(**i** + 2**j** + **k**) and (x-3)/1 = (y-1)/2 = (z-4)/1 are parallel.
8. Find the value of k if the line (x-3)/1 = (y-4)/2 = (z-k)/3 passes through the point (5, 8, 6).

### Level 3: JEE Advanced

9. Find the equation of the line passing through (1, 2, 3) and perpendicular to lines:

   - (x-1)/1 = (y-2)/2 = (z-3)/3
   - (x+2)/2 = (y-1)/1 = (z+7)/-3
10. A line makes equal angles with the coordinate axes and passes through (1, 2, 3). Find its equation.
11. Find the foot of perpendicular from point (1, 2, 3) to the line (x-6)/3 = (y-7)/2 = (z-7)/-2.
12. Find the image (reflection) of point (1, 2, 3) in the line (x-1)/1 = (y-2)/2 = (z-3)/3.

---

## Quick Reference: All Forms

| Form | Equation | When to Use |
| --- | --- | --- |
| Vector | **r** = **a** + λ**b** | Vector problems, theory |
| Parametric | x = x₁+λa, y = y₁+λb, z = z₁+λc | Finding specific points |
| Symmetric | (x-x₁)/a = (y-y₁)/b = (z-z₁)/c | Most calculations, checking points |

---

## Algorithm: Finding Line Equation

**Given**: Two points A and B

**Step 1**: Find direction ratios

- DR = (x₂-x₁, y₂-y₁, z₂-z₁)

**Step 2**: Choose one point (usually A)

**Step 3**: Write in required form

- Symmetric: (x-x₁)/a = (y-y₁)/b = (z-z₁)/c
- Parametric: x = x₁ + λa, etc.
- Vector: **r** = **a** + λ(**b** - **a**)

---

## Cross-Links

- **Previous Topic**: [Direction Cosines](../direction-cosines/index.md) - Direction ratios are key to line equations
- **Next Topic**: [Angle Between Lines](../angle-between-lines/index.md) - Using line equations to find angles
- **Related**: [Vector Addition](../../vector-algebra/vector-addition/index.md) - Vector form of lines
- **Application**: [Line-Plane Relations](../line-plane-relations/index.md) - Intersection of lines with planes
- **2D Lines**: [Straight Lines](../../coordinate-geometry/straight-lines/index.md) - 2D counterpart
- **Plane Equations**: [Plane Equations](../plane-equations/index.md) - Intersection with planes

---

## Common Exam Patterns

**JEE Main typically asks**:

- Converting between forms (2-3 marks)
- Finding line through two points (2 marks)
- Checking if point lies on line (2 marks)
- Finding point at given distance (3-4 marks)

**JEE Advanced patterns**:

- Line perpendicular to two given lines
- Foot of perpendicular from point to line
- Image of point in a line
- Combined with planes and spheres

**Exam Strategy**:

- Symmetric form is fastest for most problems
- Use parametric form when finding specific points
- Vector form is best for theoretical questions

---

*Last updated: November 2025*

From TestGuru · our mock-test platform

## You've read Equation of a Line in 3D Space.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2Fline-in-space%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
function convertLine(){const e=parseFloat(document.getElementById("lx0").value)||0,t=parseFloat(document.getElementById("ly0").value)||0,n=parseFloat(document.getElementById("lz0").value)||0,s=parseFloat(document.getElementById("la").value)||1,o=parseFloat(document.getElementById("lb").value)||1,i=parseFloat(document.getElementById("lc").value)||1;document.getElementById("lineResult").innerHTML=`
    <strong>Vector Form:</strong><br>
    r⃗ = (${e}î + ${t}ĵ + ${n}k̂) + λ(${s}î + ${o}ĵ + ${i}k̂)<br><br>
    <strong>Parametric Form:</strong><br>
    x = ${e} + ${s}λ<br>
    y = ${t} + ${o}λ<br>
    z = ${n} + ${i}λ<br><br>
    <strong>Symmetric/Cartesian Form:</strong><br>
    (x - ${e})/${s} = (y - ${t})/${o} = (z - ${n})/${i}
  `}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",convertLine):convertLine()
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/three-dimensional-geometry/line-in-space/",this.page.identifier="/mathematics/three-dimensional-geometry/line-in-space/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="threeDVisualization" id="anim-threeDVisualization-1795396422341752338"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-threeDVisualization-1795396422341752338")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/line-in-space/](https://jeenotes.in/mathematics/three-dimensional-geometry/line-in-space/) · raw HTML: `offline/mathematics/three-dimensional-geometry/line-in-space/index.html`_
