---
title: "Skew Lines and Shortest Distance"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/skew-lines/"
description: "Master skew lines, shortest distance between skew lines, and shortest distance between parallel lines for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/skew-lines/index.html"
extracted: "2026-11-23"
---

> Master skew lines, shortest distance between skew lines, and shortest distance between parallel lines for JEE Main and Advanced

## Real-World Hook: Bridges and Power Lines

Look at two **highways on different levels** of a flyover - they don’t intersect, and they’re not parallel. They’re **skew lines**! Similarly, power transmission lines crossing at different heights, railway tracks at different elevations in hilly terrain - these are all examples of skew lines. Engineers need to calculate the **shortest distance** between them for safety clearances.

---

## What are Skew Lines?

### Definition

Two lines in 3D space are called **skew lines** if they:

1. Do **NOT** intersect (no common point)
2. Are **NOT** parallel
3. Lie in **different planes** (not coplanar)

### Types of Line Pairs in 3D

| Type | Intersecting | Parallel | Coplanar |
| --- | --- | --- | --- |
| **Intersecting** | ✓ | ✗ | ✓ |
| **Parallel** | ✗ | ✓ | ✓ |
| **Skew** | ✗ | ✗ | ✗ |

### Memory Trick 🧠

**“Neither Together, Nor Same Direction”**

- NOT intersecting (not together)
- NOT parallel (not same direction)
- Therefore, they must be SKEW!

---

## Shortest Distance Between Two Lines

The **shortest distance** (SD) between two lines is the length of the **common perpendicular** - a line segment perpendicular to both lines.

### Formula (Vector Form)

If two lines are:

$$\vec{r} = \vec{a_1} + \lambda\vec{b_1} \quad \text{and} \quad \vec{r} = \vec{a_2} + \mu\vec{b_2}$$

Then shortest distance:

$$\boxed{SD = \frac{|(\vec{a_2} - \vec{a_1}) \cdot (\vec{b_1} \times \vec{b_2})|}{|\vec{b_1} \times \vec{b_2}|}}$$

### Interactive Demo: Visualize Skew Lines

See how skew lines exist in different planes with shortest distance.

### Formula (Cartesian Form)

If two lines are:

$$\frac{x-x_1}{a_1} = \frac{y-y_1}{b_1} = \frac{z-z_1}{c_1} \quad \text{and} \quad \frac{x-x_2}{a_2} = \frac{y-y_2}{b_2} = \frac{z-z_2}{c_2}$$

Then:

$$\boxed{SD = \frac{\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix}}{\sqrt{(b_1c_2-b_2c_1)^2 + (c_1a_2-c_2a_1)^2 + (a_1b_2-a_2b_1)^2}}}$$

### Memory Trick 🧠

**“Box Product Over Cross Product Magnitude”**

- Numerator: **Scalar triple product** = (**a₂** - **a₁**) · (**b₁** × **b₂**)
  - Represents volume of parallelepiped
- Denominator: |**b₁** × **b₂**|
  - Magnitude of cross product
  - Represents area of base

The height of the parallelepiped = Volume/Base Area = SD!

---

## Step-by-Step Method (Cartesian)

**Given**: Two lines in symmetric form

**Step 1**: Identify points and direction ratios

- Line 1: Point (x₁, y₁, z₁), DR (a₁, b₁, c₁)
- Line 2: Point (x₂, y₂, z₂), DR (a₂, b₂, c₂)

**Step 2**: Form the numerator determinant

$$\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix}$$

**Step 3**: Calculate denominator

$$\sqrt{(b_1c_2-b_2c_1)^2 + (c_1a_2-c_2a_1)^2 + (a_1b_2-a_2b_1)^2}$$

This is |**b₁** × **b₂**| where **b₁** = (a₁, b₁, c₁) and **b₂** = (a₂, b₂, c₂).

**Step 4**: Calculate SD = |Numerator|/Denominator

---

## Special Cases

### Case 1: Parallel Lines

If lines are **parallel**: **b₁** × **b₂** = **0** (direction vectors parallel)

Formula becomes: **0/0** (indeterminate)

Instead, use:

$$\boxed{SD = \frac{|(\vec{a_2} - \vec{a_1}) \times \vec{b_1}|}{|\vec{b_1}|}}$$

Or equivalently: Distance from a point on line 2 to line 1.

### Case 2: Intersecting Lines

If lines **intersect**: SD = **0**

This happens when:

$$(\vec{a_2} - \vec{a_1}) \cdot (\vec{b_1} \times \vec{b_2}) = 0$$

The numerator of the SD formula becomes zero.

### Common Mistake ⚠️

**Forgetting absolute value in determinant**:

```fallback
Determinant might be negative, but distance is always positive!

If numerator determinant = -5:
❌ SD = -5/denominator  [Negative distance!]
✓  SD = |-5|/denominator = 5/denominator  [Always positive]
```

---

## Condition for Lines to be Skew

Two lines are skew if and only if:

1. **Not parallel**: **b₁** × **b₂** ≠ **0**
2. **Not intersecting**: (**a₂** - **a₁**) · (**b₁** × **b₂**) ≠ 0

Both conditions must be satisfied!

---

## Worked Examples

### Example 1: Shortest Distance (JEE Main Level)

**Problem**: Find shortest distance between lines:

$$\frac{x-1}{2} = \frac{y-2}{3} = \frac{z-3}{4} \quad \text{and} \quad \frac{x-2}{3} = \frac{y-4}{4} = \frac{z-5}{5}$$

**Solution**:
Line 1: Point (1, 2, 3), DR (2, 3, 4)
Line 2: Point (2, 4, 5), DR (3, 4, 5)

**Numerator**:

$$\begin{vmatrix} 2-1 & 4-2 & 5-3 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{vmatrix} = \begin{vmatrix} 1 & 2 & 2 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{vmatrix}$$

Expanding along R1:

$$= 1(15-16) - 2(10-12) + 2(8-9)$$

$$= 1(-1) - 2(-2) + 2(-1)$$

$$= -1 + 4 - 2 = 1$$

**Denominator**: |**b₁** × **b₂**| where **b₁** = (2, 3, 4), **b₂** = (3, 4, 5)

$$\vec{b_1} \times \vec{b_2} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{vmatrix}$$

$$= \hat{i}(15-16) - \hat{j}(10-12) + \hat{k}(8-9)$$

$$= -\hat{i} + 2\hat{j} - \hat{k}$$

$$|\vec{b_1} \times \vec{b_2}| = \sqrt{1 + 4 + 1} = \sqrt{6}$$

**SD** = |1|/√6 = **1/√6 = √6/6 units**

---

### Example 2: Checking if Lines Intersect (JEE Main Level)

**Problem**: Check if the following lines intersect:

$$\frac{x-1}{3} = \frac{y-1}{-1} = \frac{z+1}{0} \quad \text{and} \quad \frac{x-4}{2} = \frac{y}{0} = \frac{z+1}{3}$$

**Solution**:
For intersecting lines, SD = 0, which means numerator determinant = 0.

Line 1: (1, 1, -1), DR (3, -1, 0)
Line 2: (4, 0, -1), DR (2, 0, 3)

$$\begin{vmatrix} 4-1 & 0-1 & -1-(-1) \\ 3 & -1 & 0 \\ 2 & 0 & 3 \end{vmatrix} = \begin{vmatrix} 3 & -1 & 0 \\ 3 & -1 & 0 \\ 2 & 0 & 3 \end{vmatrix}$$

R1 and R2 are identical → Determinant = **0**

Therefore, lines **intersect** (or are parallel - need to check).

Check parallel: 3/2 ≠ -1/0 (can’t be parallel)

**Answer**: Lines **intersect**.

To find point of intersection, solve the line equations simultaneously.

---

### Example 3: Parallel Lines Distance (JEE Advanced Level)

**Problem**: Find shortest distance between parallel lines:

$$\frac{x-1}{2} = \frac{y-2}{3} = \frac{z-3}{4} \quad \text{and} \quad \frac{x-3}{2} = \frac{y-4}{3} = \frac{z-5}{4}$$

**Solution**:
Lines are parallel (same DR: (2, 3, 4)).

Point on line 1: A(1, 2, 3)
Point on line 2: B(3, 4, 5)
Direction vector: **b** = (2, 3, 4)

**AB** = (3-1, 4-2, 5-3) = (2, 2, 2)

$$\vec{AB} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & 2 & 2 \\ 2 & 3 & 4 \end{vmatrix}$$

$$= \hat{i}(8-6) - \hat{j}(8-4) + \hat{k}(6-4)$$

$$= 2\hat{i} - 4\hat{j} + 2\hat{k}$$

$$|\vec{AB} \times \vec{b}| = \sqrt{4 + 16 + 4} = \sqrt{24} = 2\sqrt{6}$$

$$|\vec{b}| = \sqrt{4 + 9 + 16} = \sqrt{29}$$

**SD** = 2√6/√29 = **2√6/√29 = 2√174/29 units**

---

### Example 4: Vector Form (JEE Advanced Level)

**Problem**: Find shortest distance between:

$$\vec{r} = (\hat{i} + 2\hat{j} + 3\hat{k}) + \lambda(\hat{i} + \hat{j} + \hat{k})$$

$$\vec{r} = (2\hat{i} + 3\hat{j} + 4\hat{k}) + \mu(2\hat{i} + 3\hat{j} + 4\hat{k})$$

**Solution**:
**a₁** = (1, 2, 3), **b₁** = (1, 1, 1)
**a₂** = (2, 3, 4), **b₂** = (2, 3, 4)

**a₂** - **a₁** = (1, 1, 1)

$$\vec{b_1} \times \vec{b_2} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 1 & 1 & 1 \\ 2 & 3 & 4 \end{vmatrix}$$

$$= \hat{i}(4-3) - \hat{j}(4-2) + \hat{k}(3-2)$$

$$= \hat{i} - 2\hat{j} + \hat{k}$$

$$(\vec{a_2} - \vec{a_1}) \cdot (\vec{b_1} \times \vec{b_2}) = (1, 1, 1) \cdot (1, -2, 1)$$

$$= 1 - 2 + 1 = 0$$

Since numerator = 0, **SD = 0**

**Answer**: Lines **intersect** (or are parallel - let’s check).

Check parallel: **b₁** and **b₂** not proportional (1/2 ≠ 1/3), so not parallel.

Therefore, lines **intersect**.

---

## Practice Problems

### Level 1: JEE Main Basics

1. Find shortest distance between:

   - (x-1)/1 = (y-2)/2 = (z-3)/3
   - (x-2)/2 = (y-3)/3 = (z-4)/4
2. Check if lines are skew, intersecting, or parallel:

   - (x-1)/2 = (y-2)/3 = (z-3)/4
   - (x-2)/4 = (y-3)/6 = (z-4)/8
3. Find distance between parallel lines:

   - (x-1)/1 = (y-1)/1 = (z-1)/1
   - (x-2)/1 = (y-3)/1 = (z-4)/1

### Level 2: JEE Main Standard

4. Find shortest distance between lines:

   - **r** = (3**i** + 5**j** + 7**k**) + λ(**i** + 2**j** + **k**)
   - **r** = (-**i** - **j** - **k**) + μ(7**i** - 6**j** + **k**)
5. Show that the lines (x+1)/3 = (y+3)/5 = (z+5)/7 and (x-2)/1 = (y-4)/3 = (z-6)/5 are skew.
6. Find the shortest distance between the lines:

   - x/1 = y/2 = z/3
   - (x-2)/2 = (y-3)/3 = (z-4)/4

### Level 3: JEE Advanced

7. Find the equation of the line of shortest distance between:

   - (x-1)/1 = (y-2)/2 = (z-3)/3
   - (x-2)/3 = (y-4)/4 = (z-5)/5
8. Prove that the shortest distance between the lines:

   - **r** = **a₁** + λ**b**
   - **r** = **a₂** + μ**b** (parallel lines)
     is |(**a₂** - **a₁**) × **b**|/|**b**|.
9. Find the points on the two lines where the shortest distance occurs:

   - x/1 = (y-1)/2 = (z-2)/3
   - (x-1)/2 = (y-2)/3 = (z-3)/4
10. Two skew lines have direction ratios (1, 2, 3) and (2, 3, 4). If they pass through (1, 0, 0) and (0, 1, 0) respectively, find the shortest distance.

---

## Quick Reference Formulas

| Case | Formula |
| --- | --- |
| Skew lines (vector) | SD = |(**a₂**-**a₁**)·(**b₁**×**b₂**)|/|**b₁**×**b₂**| |
| Skew lines (Cartesian) | SD = |Det(x₂-x₁, y₂-y₁, z₂-z₁; a₁,b₁,c₁; a₂,b₂,c₂)|/|**b₁**×**b₂**| |
| Parallel lines | SD = |(**a₂**-**a₁**)×**b**|/|**b**| |
| Intersecting lines | SD = 0 (numerator = 0) |

---

## Algorithm: Finding Shortest Distance

**Step 1**: Identify line type

- Check if parallel: DR proportional?
- Check if intersecting: Numerator determinant = 0?
- Otherwise: Skew lines

**Step 2**: Choose appropriate formula

- Skew: Use full formula
- Parallel: Use simplified formula
- Intersecting: SD = 0

**Step 3**: Calculate

- Extract points and DRs
- Form determinant (numerator)
- Calculate cross product magnitude (denominator)
- Divide: SD = |Numerator|/Denominator

**Step 4**: Verify units and reasonableness

---

## Cross-Links

- **Previous Topic**: [Line-Plane Relations](../line-plane-relations/index.md) - Distance concepts
- **Related**: [Line in Space](../line-in-space/index.md) - Line equations
- **Foundation**: [Cross Product](../../vector-algebra/index.md) - Essential for SD formula
- **Foundation**: [Scalar Triple Product](../../vector-algebra/triple-products/index.md) - Numerator of SD formula
- **Next Topic**: [Coplanarity](../coplanarity/index.md) - Condition for lines in same plane

---

## Common Exam Patterns

**JEE Main typically asks**:

- Direct SD calculation (3-4 marks)
- Checking if lines are skew (2 marks)
- SD for parallel lines (2-3 marks)
- Verifying intersection (2 marks)

**JEE Advanced patterns**:

- Finding equation of line of shortest distance
- Finding points where SD occurs
- Locus problems involving SD
- Combined with planes and spheres

**Pro Tip**:

- Always check for parallel/intersecting cases first - simpler formulas!
- For skew lines, vector form is often cleaner than Cartesian
- Remember absolute value in final answer - distance is always positive!

---

*Last updated: November 2025*

From TestGuru · our mock-test platform

## You've read Skew Lines and Shortest Distance.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2Fskew-lines%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/three-dimensional-geometry/skew-lines/",this.page.identifier="/mathematics/three-dimensional-geometry/skew-lines/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="threeDVisualization" id="anim-threeDVisualization-1795396422370700888"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-threeDVisualization-1795396422370700888")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/skew-lines/](https://jeenotes.in/mathematics/three-dimensional-geometry/skew-lines/) · raw HTML: `offline/mathematics/three-dimensional-geometry/skew-lines/index.html`_
