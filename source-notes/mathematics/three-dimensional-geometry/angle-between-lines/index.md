---
title: "Angle Between Two Lines in Space"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/angle-between-lines/"
description: "Master techniques to find angles between lines, identify parallel and perpendicular lines, and solve related problems for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/angle-between-lines/index.html"
extracted: "2026-11-23"
---

> Master techniques to find angles between lines, identify parallel and perpendicular lines, and solve related problems for JEE Main and Advanced

## Real-World Hook: Satellite Dishes and Antenna Alignment

When installing a satellite dish, technicians must calculate the **angle between the dish direction and the satellite signal path** to get perfect reception. Similarly, structural engineers calculate angles between support beams to ensure buildings can withstand stress. These are practical applications of finding angles between lines in 3D space!

---

## Angle Between Two Lines: The Formula

### Using Direction Ratios

If two lines have direction ratios **(a₁, b₁, c₁)** and **(a₂, b₂, c₂)**, the angle **θ** between them is:

$$\boxed{\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2} \cdot \sqrt{a_2^2+b_2^2+c_2^2}}}$$

### Interactive Demo: Visualize Angles Between Lines

Explore how angles between lines are measured in 3D space.

### Using Direction Cosines

If direction cosines are **(l₁, m₁, n₁)** and **(l₂, m₂, n₂)**:

$$\boxed{\cos\theta = |l_1l_2 + m_1m_2 + n_1n_2|}$$

### Memory Trick 🧠

**“Dot Product Over Product of Magnitudes”**

- This is **exactly** the dot product formula for vectors!
- **u·v = |u||v| cos θ**
- Rearranging: **cos θ = (u·v)/(|u||v|)**
- The absolute value ensures **0° ≤ θ ≤ 90°** (acute angle convention)

### Why Absolute Value?

Lines don’t have a “direction” - we always measure the **acute angle** between them.

- Without |·|: might get obtuse angle (90° < θ < 180°)
- With |·|: always get acute angle (0° ≤ θ ≤ 90°)

---

## Special Cases: Parallel and Perpendicular Lines

### Parallel Lines (θ = 0°)

Two lines are **parallel** if **cos θ = 1**, which means:

$$\boxed{\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}}$$

Or using direction cosines: **l₁ = l₂, m₁ = m₂, n₁ = n₂**

**Key Insight**: Direction ratios are **proportional** for parallel lines.

### Perpendicular Lines (θ = 90°)

Two lines are **perpendicular** if **cos θ = 0**, which means:

$$\boxed{a_1a_2 + b_1b_2 + c_1c_2 = 0}$$

Or using direction cosines: **l₁l₂ + m₁m₂ + n₁n₂ = 0**

**Key Insight**: **Dot product = 0** for perpendicular lines (just like perpendicular vectors!)

### Common Mistake ⚠️

**Confusing parallel and perpendicular conditions**:

```fallback
Parallel: RATIOS are equal (a₁/a₂ = b₁/b₂ = c₁/c₂)
Perpendicular: DOT PRODUCT is zero (a₁a₂ + b₁b₂ + c₁c₂ = 0)

Example: Lines (2, 4, 6) and (1, 2, 3)
Check parallel: 2/1 = 4/2 = 6/3 = 2  ✓ PARALLEL
Check perpendicular: 2(1) + 4(2) + 6(3) = 2 + 8 + 18 = 28 ≠ 0  ✗

❌ Common error: For perpendicular, checking 2/1 + 4/2 + 6/3 = 0
✓  Correct: Multiply corresponding components, then sum
```

---

## Angle Between Lines in Different Forms

### Lines in Symmetric Form

$$\frac{x-x_1}{a_1} = \frac{y-y_1}{b_1} = \frac{z-z_1}{c_1} \quad \text{and} \quad \frac{x-x_2}{a_2} = \frac{y-y_2}{b_2} = \frac{z-z_2}{c_2}$$

Direction ratios: **(a₁, b₁, c₁)** and **(a₂, b₂, c₂)** (read directly from denominators!)

Then apply:

$$\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2} \cdot \sqrt{a_2^2+b_2^2+c_2^2}}$$

### Lines in Vector Form

$$\vec{r} = \vec{a_1} + \lambda\vec{b_1} \quad \text{and} \quad \vec{r} = \vec{a_2} + \mu\vec{b_2}$$

Direction vectors: **b₁** and **b₂**

Then:

$$\boxed{\cos\theta = \frac{|\vec{b_1} \cdot \vec{b_2}|}{|\vec{b_1}| \cdot |\vec{b_2}|}}$$

### Lines in Parametric Form

$$x = x_1 + \lambda a_1, y = y_1 + \lambda b_1, z = z_1 + \lambda c_1$$

$$x = x_2 + \mu a_2, y = y_2 + \mu b_2, z = z_2 + \mu c_2$$

Direction ratios: **(a₁, b₁, c₁)** and **(a₂, b₂, c₂)** (coefficients of λ and μ)

Then apply the standard formula.

---

## Worked Examples

### Example 1: Basic Angle Calculation (JEE Main Level)

**Problem**: Find the angle between lines with direction ratios (1, 2, 2) and (2, 3, 6).

**Solution**:

$$\cos\theta = \frac{|1(2) + 2(3) + 2(6)|}{\sqrt{1^2+2^2+2^2} \cdot \sqrt{2^2+3^2+6^2}}$$

$$= \frac{|2 + 6 + 12|}{\sqrt{1+4+4} \cdot \sqrt{4+9+36}}$$

$$= \frac{20}{\sqrt{9} \cdot \sqrt{49}} = \frac{20}{3 \times 7} = \frac{20}{21}$$

**Answer**: θ = cos⁻¹(20/21) ≈ 18.19°

---

### Example 2: Checking Perpendicularity (JEE Main Level)

**Problem**: Show that lines (x-1)/2 = (y-3)/3 = (z+1)/4 and (x-2)/1 = (y-4)/-5 = (z+3)/5 are perpendicular.

**Solution**:
Direction ratios: (2, 3, 4) and (1, -5, 5)

Check: a₁a₂ + b₁b₂ + c₁c₂ = 2(1) + 3(-5) + 4(5)
= 2 - 15 + 20 = 7 ≠ 0

**Conclusion**: Lines are **NOT perpendicular** (common trap question!)

---

### Example 3: Checking Parallelism (JEE Main Level)

**Problem**: For what value of k are the lines (x-3)/1 = (y-4)/2 = (z-5)/k and (x-1)/k = (y-2)/4 = (z-3)/2 parallel?

**Solution**:
For parallel lines: a₁/a₂ = b₁/b₂ = c₁/c₂

$$\frac{1}{k} = \frac{2}{4} = \frac{k}{2}$$

From b₁/b₂: 2/4 = 1/2 ✓

From a₁/a₂: 1/k = 1/2 → k = 2

From c₁/c₂: k/2 = 1/2 → k = 1

**Contradiction!** No single value of k makes them parallel.

Wait - let’s reconsider. For the ratios to be equal:

$$\frac{1}{k} = \frac{2}{4} \Rightarrow k = 2$$

$$\frac{k}{2} = \frac{2}{4} \Rightarrow k = 1$$

These give different values, so **no value of k makes them parallel**.

**Alternative approach**: Check if k=1 works:
DR: (1, 2, 1) and (1, 4, 2) → 1/1 ≠ 2/4 ✗

Check if k=2 works:
DR: (1, 2, 2) and (2, 4, 2) → 1/2 = 2/4 but 2/2 ≠ 2/4 ✗

**Answer**: No such value of k exists.

---

### Example 4: Vector Form (JEE Advanced Level)

**Problem**: Find angle between lines **r** = (2**i** + 3**j** - **k**) + λ(**i** + 2**j** + 2**k**) and **r** = (3**i** + **j** + 2**k**) + μ(2**i** + **j** - 2**k**).

**Solution**:
Direction vectors: **b₁** = **i** + 2**j** + 2**k**, **b₂** = 2**i** + **j** - 2**k**

$$\vec{b_1} \cdot \vec{b_2} = 1(2) + 2(1) + 2(-2) = 2 + 2 - 4 = 0$$

Since dot product = 0, the lines are **perpendicular**.

**Answer**: θ = 90°

---

### Example 5: Finding Unknown Direction Ratio (JEE Advanced Level)

**Problem**: Find k if the angle between lines with direction ratios (1, 2, 3) and (2, 3, k) is 60°.

**Solution**:
Given: cos 60° = 1/2

$$\frac{|1(2) + 2(3) + 3(k)|}{\sqrt{1^2+2^2+3^2} \cdot \sqrt{2^2+3^2+k^2}} = \frac{1}{2}$$

$$\frac{|2 + 6 + 3k|}{\sqrt{14} \cdot \sqrt{13+k^2}} = \frac{1}{2}$$

$$\frac{|8 + 3k|}{\sqrt{14(13+k^2)}} = \frac{1}{2}$$

$$2|8 + 3k| = \sqrt{14(13+k^2)}$$

Squaring both sides:

$$4(8 + 3k)^2 = 14(13 + k^2)$$

$$4(64 + 48k + 9k^2) = 182 + 14k^2$$

$$256 + 192k + 36k^2 = 182 + 14k^2$$

$$22k^2 + 192k + 74 = 0$$

$$11k^2 + 96k + 37 = 0$$

Using quadratic formula:

$$k = \frac{-96 \pm \sqrt{96^2 - 4(11)(37)}}{22}$$

$$= \frac{-96 \pm \sqrt{9216 - 1628}}{22} = \frac{-96 \pm \sqrt{7588}}{22}$$

$$= \frac{-96 \pm 87.11}{22}$$

**k ≈ -0.40** or **k ≈ -8.33**

---

## Practice Problems

### Level 1: JEE Main Basics

1. Find the angle between lines with direction ratios (1, 1, 2) and (√3-1, -√3-1, 4).
2. Show that lines (x-1)/3 = (y-2)/2 = (z-3)/1 and (x+1)/6 = (y-1)/4 = (z-2)/2 are parallel.
3. Check if lines with direction ratios (2, -3, 4) and (1, 2, 1) are perpendicular.
4. Find the angle between the X-axis and line (x-1)/1 = (y-2)/2 = (z-3)/3.

### Level 2: JEE Main Standard

5. Find the angle between lines **r** = **i** + 2**j** + **k** + λ(**i** + **j** + **k**) and **r** = 2**i** - **j** - **k** + μ(2**i** + **j** + 2**k**).
6. Find k if lines (x-1)/1 = (y-2)/2 = (z-3)/k and (x-2)/k = (y-3)/1 = (z-4)/2 are perpendicular.
7. Prove that the line joining (1, 2, 3) and (2, 3, 5) is perpendicular to the line joining (3, 5, 9) and (4, 3, 5).
8. Find the acute angle between the lines (x-2)/3 = (y+1)/-2 = z/1 and (x-1)/1 = (2y+3)/3 = (z+5)/2.

### Level 3: JEE Advanced

9. Find the angle between any two diagonals of a cube.
10. Find the equation of a line passing through (1, 2, 3) and making equal angles with the coordinate axes.
11. A line makes angles α, β, γ with the coordinate axes. Another line makes angles α + 90°, β + 90°, γ + 90° with the axes. Find the angle between these lines.
12. Find the angle between lines:

    - (x-1)/1 = (y-1)/2 = (z-1)/3
    - (x-2)/-3 = (y-3)/-2 = (z-4)/-1

---

## Quick Reference Table

| Condition | Direction Ratios | Direction Cosines | Angle |
| --- | --- | --- | --- |
| Parallel | a₁/a₂ = b₁/b₂ = c₁/c₂ | l₁ = l₂, m₁ = m₂, n₁ = n₂ | 0° |
| Perpendicular | a₁a₂ + b₁b₂ + c₁c₂ = 0 | l₁l₂ + m₁m₂ + n₁n₂ = 0 | 90° |
| General | cos θ = |a₁a₂+b₁b₂+c₁c₂|/√(&mldr;) | cos θ = |l₁l₂+m₁m₂+n₁n₂| | 0° to 90° |

---

## Algorithm: Finding Angle Between Lines

**Step 1**: Identify the form of line equations

- Symmetric: Read DR from denominators
- Parametric: Read DR from coefficients of parameter
- Vector: Direction vector is coefficient of parameter

**Step 2**: Extract direction ratios (a₁, b₁, c₁) and (a₂, b₂, c₂)

**Step 3**: Check special cases first

- Parallel: a₁/a₂ = b₁/b₂ = c₁/c₂ → θ = 0°
- Perpendicular: a₁a₂ + b₁b₂ + c₁c₂ = 0 → θ = 90°

**Step 4**: If neither, apply formula

$$\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2+b_1^2+c_1^2} \cdot \sqrt{a_2^2+b_2^2+c_2^2}}$$

**Step 5**: Calculate θ = cos⁻¹(value)

---

## Cross-Links

- **Previous Topic**: [Direction Cosines](../direction-cosines/index.md) - Foundation for understanding angles
- **Related**: [Line in Space](../line-in-space/index.md) - Different forms of line equations
- **Next Topic**: [Plane Equations](../plane-equations/index.md) - Extend to angles with planes
- **Application**: [Skew Lines](../skew-lines/index.md) - Angle between non-intersecting lines
- **Foundation**: [Dot Product](../../vector-algebra/index.md) - Vector interpretation of angle formula

---

## Common Exam Patterns

**JEE Main typically asks**:

- Direct angle calculation (2-3 marks)
- Checking parallel/perpendicular (2 marks)
- Finding unknown DR using angle condition (3 marks)
- Angle with coordinate axes (2 marks)

**JEE Advanced patterns**:

- Angle between diagonals of geometric shapes
- Lines making given angles with axes
- Locus problems involving angles
- Combined with planes and spheres

**Pro Tip**:

- Always check for perpendicular (dot product = 0) or parallel (proportional ratios) **before** using the general formula - it saves time!
- Remember absolute value in formula for acute angle

---

*Last updated: November 2025*

From TestGuru · our mock-test platform

## You've read Angle Between Two Lines in Space.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2Fangle-between-lines%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/three-dimensional-geometry/angle-between-lines/",this.page.identifier="/mathematics/three-dimensional-geometry/angle-between-lines/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="threeDVisualization" id="anim-threeDVisualization-1795396422328638859"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-threeDVisualization-1795396422328638859")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/angle-between-lines/](https://jeenotes.in/mathematics/three-dimensional-geometry/angle-between-lines/) · raw HTML: `offline/mathematics/three-dimensional-geometry/angle-between-lines/index.html`_
