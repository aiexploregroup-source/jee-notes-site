---
title: "Line and Plane Relations in 3D"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/line-plane-relations/"
description: "Master angle between line and plane, distance from point to plane, intersection of line and plane, and related problems for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/line-plane-relations/index.html"
extracted: "2026-11-23"
---

> Master angle between line and plane, distance from point to plane, intersection of line and plane, and related problems for JEE Main and Advanced

## Real-World Hook: Landing an Aircraft

When a pilot approaches a runway for landing, they need to calculate the **angle between the flight path (line) and the runway (plane)**. The ideal approach angle is typically 3° - too steep and the landing is hard, too shallow and you might overshoot! Air traffic controllers use these line-plane calculations constantly.

---

## Angle Between a Line and a Plane

### Formula

If line has direction ratios **(l, m, n)** and plane has equation **ax + by + cz + d = 0** (normal **(a, b, c)**), then the angle **θ** between them satisfies:

$$\boxed{\sin\theta = \frac{|al + bm + cn|}{\sqrt{a^2+b^2+c^2} \cdot \sqrt{l^2+m^2+n^2}}}$$

### Interactive Demo: Visualize Line-Plane Relations

Explore how lines interact with planes in 3D space. Adjust the plane coefficients and line parameters to see:

- Intersection point calculation
- Angle between line and plane
- Whether the line is parallel, perpendicular, or intersecting the plane

### Why Sine (Not Cosine)?

- **Angle between line and plane** = Angle between line and **normal to plane**
- If φ = angle between line and normal, then **θ = 90° - φ**
- Since sin θ = cos(90° - θ), we get **sin θ = cos φ**
- And cos φ is the dot product formula!

### Memory Trick 🧠

**“Line-Plane uses SINE, Line-Line uses COSINE”**

- Between two **lines**: cos θ formula
- Between **line and plane**: sin θ formula
- Both have same numerator (dot product), different trig function!

### Common Mistake ⚠️

**Using cosine instead of sine**:

```fallback
Line: (x-1)/2 = (y-2)/3 = (z-3)/4, DR: (2,3,4)
Plane: 2x + 3y + 4z = 5, Normal: (2,3,4)

❌ cos θ = |2(2)+3(3)+4(4)|/(√29·√29) = 29/29 = 1 → θ = 0°
   [This is angle between line and NORMAL]

✓  sin θ = |2(2)+3(3)+4(4)|/(√29·√29) = 1 → θ = 90°
   [Correct angle between line and PLANE]
```

---

## Special Cases: Parallel and Perpendicular

### Line Parallel to Plane (θ = 0°)

Line is **parallel** to plane when **sin θ = 0**, which means:

$$\boxed{al + bm + cn = 0}$$

**Interpretation**: Direction vector of line is **perpendicular** to normal of plane.

### Line Perpendicular to Plane (θ = 90°)

Line is **perpendicular** to plane when **sin θ = 1**, which means:

$$\boxed{\frac{l}{a} = \frac{m}{b} = \frac{n}{c}}$$

**Interpretation**: Direction vector of line is **parallel** to normal of plane.

---

## Distance from Point to Plane

### Formula

Distance of point **P(x₁, y₁, z₁)** from plane **ax + by + cz + d = 0**:

$$\boxed{D = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}}$$

### Memory Trick 🧠

**“Substitute and Normalize”**

1. **Substitute** point coordinates in LHS of plane equation
2. Take **absolute value**
3. **Divide** by magnitude of normal vector √(a² + b² + c²)

### Derivation (Optional)

The perpendicular distance from P to plane equals the projection of **AP** on the normal direction, where A is any point on the plane.

If A is chosen such that plane becomes **ax + by + cz + d = 0**, the formula follows from vector projection.

---

## Angle Between Two Planes

The angle between two planes equals the angle between their normal vectors.

For planes **a₁x + b₁y + c₁z + d₁ = 0** and **a₂x + b₂y + c₂z + d₂ = 0**:

$$\boxed{\cos\theta = \frac{a_1a_2 + b_1b_2 + c_1c_2}{\sqrt{a_1^2+b_1^2+c_1^2}\sqrt{a_2^2+b_2^2+c_2^2}}}$$

**Special cases**:

- **Perpendicular planes**: $a_1a_2 + b_1b_2 + c_1c_2 = 0$
- **Parallel planes**: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$

---

## Distance Between Parallel Planes

### Formula

Distance between parallel planes **ax + by + cz + d₁ = 0** and **ax + by + cz + d₂ = 0**:

$$\boxed{D = \frac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}}$$

**Important**: Planes must have **same normal** (coefficients of x, y, z proportional).

### Memory Trick 🧠

**“Difference of Constants Over Normal Magnitude”**

- Numerator: |d₁ - d₂| (difference of constant terms)
- Denominator: √(a² + b² + c²) (magnitude of normal)

### Common Mistake ⚠️

**Forgetting to check if planes are parallel**:

```fallback
Planes: 2x + 3y + 4z = 5 and 4x + 6y + 8z = 7

Check parallel: (2,3,4) and (4,6,8) → 2/4 = 3/6 = 4/8 = 1/2  ✓ PARALLEL

Rewrite second as: 2x + 3y + 4z = 7/2

Distance = |5 - 7/2|/√(4+9+16) = |3/2|/√29 = 3/(2√29)  ✓

If you forgot to check and they weren't parallel, this formula gives nonsense!
```

---

## Intersection of Line and Plane

### Method

**Step 1**: Write line in parametric form: x = x₁ + lλ, y = y₁ + mλ, z = z₁ + nλ

**Step 2**: Substitute in plane equation ax + by + cz + d = 0

**Step 3**: Solve for λ

**Step 4**: Substitute λ back to get intersection point (x, y, z)

### Special Cases

**Case 1**: If equation gives **unique λ** → Line intersects plane at one point

**Case 2**: If equation gives **0 = 0** (identity) → Line lies **in** the plane

**Case 3**: If equation gives **0 = k** (k ≠ 0, contradiction) → Line is **parallel** to plane (no intersection)

---

## Foot of Perpendicular from Point to Plane

### Method

**Step 1**: Find normal to plane (a, b, c) from equation ax + by + cz + d = 0

**Step 2**: Write line through given point perpendicular to plane:

$$\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c} = \lambda$$

**Step 3**: Parametric form: x = x₁ + aλ, y = y₁ + bλ, z = z₁ + cλ

**Step 4**: Substitute in plane equation to find λ

**Step 5**: Substitute λ back to get foot of perpendicular

---

## Image of Point in a Plane

### Method

Let **P(x₁, y₁, z₁)** be the point and **Q** be its image in plane ax + by + cz + d = 0.

**Step 1**: Find foot of perpendicular **F** using above method

**Step 2**: F is the **midpoint** of P and Q

**Step 3**: Use midpoint formula:

- x₂ = 2x_F - x₁
- y₂ = 2y_F - y₁
- z₂ = 2z_F - z₁

where (x₂, y₂, z₂) is the image Q.

### Direct Formula (Advanced)

Image of point **(x₁, y₁, z₁)** in plane **ax + by + cz + d = 0** is:

$$\boxed{\left(x_1 - \frac{2a(ax_1+by_1+cz_1+d)}{a^2+b^2+c^2}, \, y_1 - \frac{2b(ax_1+by_1+cz_1+d)}{a^2+b^2+c^2}, \, z_1 - \frac{2c(ax_1+by_1+cz_1+d)}{a^2+b^2+c^2}\right)}$$

---

## Worked Examples

### Example 1: Angle Between Line and Plane (JEE Main Level)

**Problem**: Find angle between line (x-1)/1 = (y-2)/2 = (z-3)/3 and plane 2x + 3y + 4z = 5.

**Solution**:
Line direction ratios: (1, 2, 3)
Plane normal: (2, 3, 4)

$$\sin\theta = \frac{|1(2) + 2(3) + 3(4)|}{\sqrt{1^2+2^2+3^2} \cdot \sqrt{2^2+3^2+4^2}}$$

$$= \frac{|2 + 6 + 12|}{\sqrt{14} \cdot \sqrt{29}} = \frac{20}{\sqrt{406}}$$

**Answer**: θ = sin⁻¹(20/√406) ≈ 82.4°

---

### Example 2: Distance from Point to Plane (JEE Main Level)

**Problem**: Find distance of point (1, 2, 3) from plane 2x + 3y + 6z = 14.

**Solution**:
Using formula:

$$D = \frac{|2(1) + 3(2) + 6(3) - 14|}{\sqrt{2^2 + 3^2 + 6^2}}$$

$$= \frac{|2 + 6 + 18 - 14|}{\sqrt{4 + 9 + 36}} = \frac{12}{\sqrt{49}} = \frac{12}{7}$$

**Answer**: 12/7 units

---

### Example 3: Intersection of Line and Plane (JEE Main Level)

**Problem**: Find point of intersection of line (x-1)/2 = (y-2)/3 = (z-3)/4 with plane 2x + y + z = 10.

**Solution**:
Parametric form: x = 1 + 2λ, y = 2 + 3λ, z = 3 + 4λ

Substitute in plane equation:

$$2(1 + 2\lambda) + (2 + 3\lambda) + (3 + 4\lambda) = 10$$

$$2 + 4\lambda + 2 + 3\lambda + 3 + 4\lambda = 10$$

$$7 + 11\lambda = 10$$

$$\lambda = \frac{3}{11}$$

Point of intersection:

- x = 1 + 2(3/11) = 1 + 6/11 = 17/11
- y = 2 + 3(3/11) = 2 + 9/11 = 31/11
- z = 3 + 4(3/11) = 3 + 12/11 = 45/11

**Answer**: (17/11, 31/11, 45/11)

---

### Example 4: Foot of Perpendicular (JEE Advanced Level)

**Problem**: Find foot of perpendicular from point (1, 2, 3) to plane 2x + 3y + 4z = 20.

**Solution**:
Normal to plane: (2, 3, 4)

Line through (1, 2, 3) perpendicular to plane:

$$\frac{x-1}{2} = \frac{y-2}{3} = \frac{z-3}{4} = \lambda$$

Parametric: x = 1 + 2λ, y = 2 + 3λ, z = 3 + 4λ

Substitute in plane:

$$2(1+2\lambda) + 3(2+3\lambda) + 4(3+4\lambda) = 20$$

$$2 + 4\lambda + 6 + 9\lambda + 12 + 16\lambda = 20$$

$$20 + 29\lambda = 20$$

$$\lambda = 0$$

Foot of perpendicular:
x = 1 + 2(0) = 1
y = 2 + 3(0) = 2
z = 3 + 4(0) = 3

**Answer**: (1, 2, 3)

**Interpretation**: Point already lies on the plane! (Verify: 2(1) + 3(2) + 4(3) = 2 + 6 + 12 = 20 ✓)

---

### Example 5: Image of Point (JEE Advanced Level)

**Problem**: Find image of point (1, 3, 4) in plane 2x - y + z + 3 = 0.

**Solution**:
**Step 1**: Find foot of perpendicular

Line through (1, 3, 4) perpendicular to plane:

$$\frac{x-1}{2} = \frac{y-3}{-1} = \frac{z-4}{1} = \lambda$$

Parametric: x = 1 + 2λ, y = 3 - λ, z = 4 + λ

Substitute in plane:

$$2(1+2\lambda) - (3-\lambda) + (4+\lambda) + 3 = 0$$

$$2 + 4\lambda - 3 + \lambda + 4 + \lambda + 3 = 0$$

$$6 + 6\lambda = 0$$

$$\lambda = -1$$

Foot F:

- x_F = 1 + 2(-1) = -1
- y_F = 3 - (-1) = 4
- z_F = 4 + (-1) = 3

**Step 2**: F is midpoint of P(1, 3, 4) and image Q(x, y, z)

$$(-1, 4, 3) = \left(\frac{1+x}{2}, \frac{3+y}{2}, \frac{4+z}{2}\right)$$

Solving:

- 1 + x = -2 → x = -3
- 3 + y = 8 → y = 5
- 4 + z = 6 → z = 2

**Answer**: Image is (-3, 5, 2)

**Verification**:

- Distance from P to plane = Distance from Q to plane ✓
- F is midpoint of P and Q ✓

---

## Practice Problems

### Level 1: JEE Main Basics

1. Find angle between line (x-1)/1 = (y-2)/1 = (z-3)/1 and plane x + y + z = 6.
2. Find distance of origin from plane 3x + 4y + 12z = 52.
3. Check if line (x-1)/2 = (y-3)/3 = (z-5)/4 is parallel to plane 2x + 3y + 4z = 7.
4. Find distance between planes 2x + 3y + 6z = 7 and 2x + 3y + 6z = 14.

### Level 2: JEE Main Standard

5. Find point where line x/1 = y/2 = z/3 meets plane x + y + z = 6.
6. Find foot of perpendicular from (2, 3, 4) to plane 3x + 4y + 5z = 50.
7. Find the value of k if line (x-2)/3 = (y-3)/k = (z-4)/2 is parallel to plane 2x + 3y + 4z = 5.
8. Find distance of point (1, -2, 3) from plane 2x - y + 2z + 3 = 0.

### Level 3: JEE Advanced

9. Find image of point (1, 6, 3) in the plane x + y + z = 5.
10. Find equation of plane through line (x-1)/1 = (y-2)/2 = (z-3)/3 and perpendicular to plane 2x + 3y + 4z = 5.
11. A variable plane is at a constant distance p from origin and meets the axes at A, B, C. Show that the locus of centroid of triangle ABC is x⁻² + y⁻² + z⁻² = p⁻².
12. Find shortest distance between line (x-1)/2 = (y-2)/3 = (z-3)/4 and plane 2x + 3y + 4z = 5.

---

## Quick Reference Formulas

| Concept | Formula |
| --- | --- |
| Angle (line-plane) | sin θ = |al+bm+cn|/(√(a²+b²+c²)·√(l²+m²+n²)) |
| Line ⊥ plane | l/a = m/b = n/c |
| Line ∥ plane | al + bm + cn = 0 |
| Distance (point-plane) | D = |ax₁+by₁+cz₁+d|/√(a²+b²+c²) |
| Distance (parallel planes) | D = |d₁-d₂|/√(a²+b²+c²) |

---

## Algorithm: Line-Plane Intersection

**Step 1**: Write line in parametric form

- x = x₁ + lλ, y = y₁ + mλ, z = z₁ + nλ

**Step 2**: Substitute in plane equation ax + by + cz + d = 0

**Step 3**: Solve for λ

- Unique λ → Single intersection point
- 0 = 0 → Line lies in plane
- 0 = k (k ≠ 0) → Line parallel to plane, no intersection

**Step 4**: Find point coordinates using λ

---

## Cross-Links

- **Previous Topic**: [Plane Equations](../plane-equations/index.md) - Different forms of plane
- **Related**: [Line in Space](../line-in-space/index.md) - Line equations
- **Related**: [Angle Between Lines](../angle-between-lines/index.md) - Similar angle calculations
- **Next Topic**: [Skew Lines](../skew-lines/index.md) - Non-intersecting, non-parallel lines
- **Foundation**: [Distance Formula](../3d-coordinates/index.md) - 3D distance concepts

---

## Common Exam Patterns

**JEE Main typically asks**:

- Angle between line and plane (3 marks)
- Distance from point to plane (2-3 marks)
- Intersection point (3-4 marks)
- Checking parallel/perpendicular (2 marks)

**JEE Advanced patterns**:

- Foot of perpendicular and image (4-6 marks)
- Locus problems involving planes
- Combined with spheres and cones
- Optimization (shortest distance)

**Pro Tip**:

- For line-plane angle, use **SINE** (most common mistake is using cosine!)
- Always verify intersection by substituting back
- Image of point: Foot is always the midpoint

---

*Last updated: November 2025*

From TestGuru · our mock-test platform

## You've read Line and Plane Relations in 3D.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2Fline-plane-relations%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/three-dimensional-geometry/line-plane-relations/",this.page.identifier="/mathematics/three-dimensional-geometry/line-plane-relations/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="threeDGeometry" id="anim-threeDGeometry-1795396422346577291"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-threeDGeometry-1795396422346577291")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/line-plane-relations/](https://jeenotes.in/mathematics/three-dimensional-geometry/line-plane-relations/) · raw HTML: `offline/mathematics/three-dimensional-geometry/line-plane-relations/index.html`_
