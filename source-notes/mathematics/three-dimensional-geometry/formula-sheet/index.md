---
title: "Three Dimensional Geometry Formula Sheet"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/formula-sheet/"
description: "Every key 3D Geometry formula for JEE - distance, section, direction cosines, line & plane equations, angles, shortest distance & coplanarity. Quick revision."
updated: "2026-07-01"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 10 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/formula-sheet/index.html"
extracted: "2026-11-23"
---

> Every key 3D Geometry formula for JEE - distance, section, direction cosines, line & plane equations, angles, shortest distance & coplanarity. Quick revision.

All the must-know formulas from the Three Dimensional Geometry chapter in one scannable sheet - coordinates, direction cosines, lines, planes, angles, shortest distance and coplanarity. Use it for last-minute revision before JEE Main and Advanced.

## Coordinates, Distance and Section Formula

> **★ Key point · Sign awareness**
>
> In the distance formula the order of subtraction does not matter because every term is squared: $(x_2-x_1)^2 = (x_1-x_2)^2$. Never replace squares with absolute values.

Distance between $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$:

$$\boxed{AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}}$$

Distance of $P(x, y, z)$ from the origin:

$$\boxed{OP = \sqrt{x^2 + y^2 + z^2}}$$

Point dividing $AB$ **internally** in ratio $m:n$:

$$\boxed{P = \left(\frac{mx_2 + nx_1}{m+n},\ \frac{my_2 + ny_1}{m+n},\ \frac{mz_2 + nz_1}{m+n}\right)}$$

Point dividing $AB$ **externally** in ratio $m:n$:

$$\boxed{P = \left(\frac{mx_2 - nx_1}{m-n},\ \frac{my_2 - ny_1}{m-n},\ \frac{mz_2 - nz_1}{m-n}\right)}$$

Midpoint (special case $m = n = 1$):

$$\boxed{M = \left(\frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2},\ \frac{z_1 + z_2}{2}\right)}$$

Centroid of a triangle $A, B, C$:

$$\boxed{G = \left(\frac{x_1 + x_2 + x_3}{3},\ \frac{y_1 + y_2 + y_3}{3},\ \frac{z_1 + z_2 + z_3}{3}\right)}$$

Centroid of a tetrahedron $A, B, C, D$:

$$\boxed{G = \left(\frac{x_1 + x_2 + x_3 + x_4}{4},\ \frac{y_1 + y_2 + y_3 + y_4}{4},\ \frac{z_1 + z_2 + z_3 + z_4}{4}\right)}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Distance $AB$ | $\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$ | Order of subtraction irrelevant |
| Distance from origin | $\sqrt{x^2 + y^2 + z^2}$ | Special case with $O$ |
| Internal division $m:n$ | $\left(\tfrac{mx_2+nx_1}{m+n}, \dots\right)$ | $+$ in numerator, $m+n$ below |
| External division $m:n$ | $\left(\tfrac{mx_2-nx_1}{m-n}, \dots\right)$ | $-$ in numerator, $m-n$ below |
| Midpoint | $\left(\tfrac{x_1+x_2}{2}, \dots\right)$ | Average of coordinates |
| Centroid (triangle) | $\left(\tfrac{x_1+x_2+x_3}{3}, \dots\right)$ | Divide by 3 |
| Centroid (tetrahedron) | $\left(\tfrac{x_1+x_2+x_3+x_4}{4}, \dots\right)$ | Divide by 4 |

> **◐ In simple terms · Octants**
>
> 3D space is split into **8 octants** by the three coordinate planes (compare to 4 quadrants in 2D). Octant I is $(+,+,+)$.

## Direction Cosines and Direction Ratios

For a line making angles $\alpha, \beta, \gamma$ with the positive X, Y, Z axes, the direction cosines are:

$$\boxed{l = \cos\alpha, \quad m = \cos\beta, \quad n = \cos\gamma}$$

Fundamental identity (always holds):

$$\boxed{l^2 + m^2 + n^2 = 1}$$

Equivalently $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$, which also gives $\sin^2\alpha + \sin^2\beta + \sin^2\gamma = 2$.

Direction cosines of the line joining $A(x_1,y_1,z_1)$ and $B(x_2,y_2,z_2)$:

$$\boxed{l = \frac{x_2 - x_1}{AB}, \quad m = \frac{y_2 - y_1}{AB}, \quad n = \frac{z_2 - z_1}{AB}}$$

where $AB = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$.

Direction ratios $(a, b, c)$ are any triple proportional to $(l, m, n)$:

$$\boxed{a : b : c = l : m : n}$$

Converting direction ratios to direction cosines:

$$\boxed{l = \frac{\pm a}{\sqrt{a^2+b^2+c^2}}, \quad m = \frac{\pm b}{\sqrt{a^2+b^2+c^2}}, \quad n = \frac{\pm c}{\sqrt{a^2+b^2+c^2}}}$$

The $\pm$ accounts for the two opposite directions along the same line.

> **★ Key point · High-yield check**
>
> After computing direction cosines, always verify $l^2 + m^2 + n^2 = 1$. It instantly catches arithmetic slips.

| Object | Direction Cosines $(l, m, n)$ | Direction Ratios |
| --- | --- | --- |
| X-axis | $(1, 0, 0)$ | $(1, 0, 0)$ |
| Y-axis | $(0, 1, 0)$ | $(0, 1, 0)$ |
| Z-axis | $(0, 0, 1)$ | $(0, 0, 1)$ |

## Angle Between Two Lines

Using direction cosines $(l_1, m_1, n_1)$ and $(l_2, m_2, n_2)$:

$$\boxed{\cos\theta = |l_1 l_2 + m_1 m_2 + n_1 n_2|}$$

Using direction ratios $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$:

$$\boxed{\cos\theta = \frac{|a_1 a_2 + b_1 b_2 + c_1 c_2|}{\sqrt{a_1^2+b_1^2+c_1^2}\,\sqrt{a_2^2+b_2^2+c_2^2}}}$$

Using vector direction vectors $\vec{b_1}, \vec{b_2}$:

$$\boxed{\cos\theta = \frac{|\vec{b_1} \cdot \vec{b_2}|}{|\vec{b_1}|\,|\vec{b_2}|}}$$

The absolute value forces the **acute** angle $0^\circ \le \theta \le 90^\circ$.

| Condition | Direction Ratios | Direction Cosines |
| --- | --- | --- |
| **Parallel** ($\theta = 0^\circ$) | $\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$ | $l_1 = l_2,\ m_1 = m_2,\ n_1 = n_2$ |
| **Perpendicular** ($\theta = 90^\circ$) | $a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$ | $l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$ |

> **⚠ Trap · Classic trap**
>
> Parallel means **ratios** are equal; perpendicular means the **dot product** (sum of products) is zero. Never test perpendicularity with $\tfrac{a_1}{a_2} + \tfrac{b_1}{b_2} + \tfrac{c_1}{c_2} = 0$.

## Equation of a Line in Space

**Vector form** (through point with position vector $\vec{a}$, parallel to $\vec{b}$):

$$\boxed{\vec{r} = \vec{a} + \lambda\vec{b}}$$

Two-point vector form (through $A$ and $B$):

$$\boxed{\vec{r} = \vec{a} + \lambda(\vec{b} - \vec{a}) = (1-\lambda)\vec{a} + \lambda\vec{b}}$$

**Parametric form** (point $(x_1, y_1, z_1)$, direction ratios $(a, b, c)$):

$$\boxed{x = x_1 + \lambda a, \quad y = y_1 + \lambda b, \quad z = z_1 + \lambda c}$$

**Symmetric / Cartesian form** (most used in JEE):

$$\boxed{\frac{x - x_1}{a} = \frac{y - y_1}{b} = \frac{z - z_1}{c}}$$

Two-point symmetric form:

$$\boxed{\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} = \frac{z - z_1}{z_2 - z_1}}$$

| Form | Equation | Best for |
| --- | --- | --- |
| Vector | $\vec{r} = \vec{a} + \lambda\vec{b}$ | Theory, vector problems |
| Parametric | $x = x_1 + \lambda a,\ y = y_1 + \lambda b,\ z = z_1 + \lambda c$ | Finding specific points |
| Symmetric | $\dfrac{x-x_1}{a} = \dfrac{y-y_1}{b} = \dfrac{z-z_1}{c}$ | Most calculations, point checks |

> **⚠ Trap · Zero direction ratio**
>
> If a direction ratio is $0$ (line parallel to an axis/plane) you cannot divide by it in symmetric form. Instead set that coordinate equal to the point’s value, e.g. a line parallel to the X-axis through $(2,3,4)$ is $y = 3,\ z = 4$.

## Equation of a Plane

**General form** - $(a, b, c)$ are the direction ratios of the normal:

$$\boxed{ax + by + cz + d = 0}$$

**Point-normal form** (through $(x_1,y_1,z_1)$ with normal $(a,b,c)$):

$$\boxed{a(x - x_1) + b(y - y_1) + c(z - z_1) = 0}$$

Vector form of point-normal:

$$\boxed{(\vec{r} - \vec{a}) \cdot \vec{n} = 0}$$

**Intercept form** ($a, b, c$ are the X, Y, Z intercepts):

$$\boxed{\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1}$$

**Plane through three points** $A, B, C$:

$$\boxed{\begin{vmatrix} x - x_1 & y - y_1 & z - z_1 \\ x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ x_3 - x_1 & y_3 - y_1 & z_3 - z_1 \end{vmatrix} = 0}$$

**Parametric (vector) form** ($\vec{b}, \vec{c}$ non-parallel and parallel to plane):

$$\boxed{\vec{r} = \vec{a} + \lambda\vec{b} + \mu\vec{c}}$$

Plane through the origin: $\boxed{ax + by + cz = 0}$ (constant term $d = 0$).

Intercepts of $ax + by + cz + d = 0$: x-intercept $= -d/a$, y-intercept $= -d/b$, z-intercept $= -d/c$.

| Special plane | Equation | Normal |
| --- | --- | --- |
| Parallel to XY-plane | $z = k$ | $(0, 0, 1)$ |
| Parallel to YZ-plane | $x = k$ | $(1, 0, 0)$ |
| Parallel to XZ-plane | $y = k$ | $(0, 1, 0)$ |

> **⚠ Trap · Intercept vs reciprocal**
>
> In $\dfrac{x}{2} + \dfrac{y}{3} + \dfrac{z}{4} = 1$ the intercepts are $2, 3, 4$ (the denominators themselves), not their reciprocals. The plane cuts the axes at $(2,0,0)$, $(0,3,0)$, $(0,0,4)$.

## Line and Plane Relations

**Angle between a line** (direction ratios $l, m, n$) **and a plane** (normal $a, b, c$) - note the **sine**:

$$\boxed{\sin\theta = \frac{|al + bm + cn|}{\sqrt{a^2+b^2+c^2}\,\sqrt{l^2+m^2+n^2}}}$$

| Relation | Condition |
| --- | --- |
| Line **parallel** to plane ($\theta = 0^\circ$) | $al + bm + cn = 0$ |
| Line **perpendicular** to plane ($\theta = 90^\circ$) | $\dfrac{l}{a} = \dfrac{m}{b} = \dfrac{n}{c}$ |

**Distance from point** $P(x_1, y_1, z_1)$ **to plane** $ax + by + cz + d = 0$:

$$\boxed{D = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}}$$

**Distance between parallel planes** $ax + by + cz + d_1 = 0$ and $ax + by + cz + d_2 = 0$:

$$\boxed{D = \frac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}}$$

(Coefficients of $x, y, z$ must be identical - make the normals match before applying.)

**Image of point** $(x_1, y_1, z_1)$ **in plane** $ax + by + cz + d = 0$, writing $k = ax_1 + by_1 + cz_1 + d$:

$$\boxed{\left(x_1 - \frac{2ak}{a^2+b^2+c^2},\ y_1 - \frac{2bk}{a^2+b^2+c^2},\ z_1 - \frac{2ck}{a^2+b^2+c^2}\right)}$$

> **★ Key point · Line-plane uses SINE, line-line uses COSINE**
>
> Both formulas share the same numerator (the dot product), but the angle between a **line and a plane** uses $\sin\theta$ because it is measured from the plane, not its normal. Using cosine here is the single most common mistake.

**Intersection of line and plane** - substitute the parametric line into the plane and solve for $\lambda$:

| Result for $\lambda$ | Geometric meaning |
| --- | --- |
| Unique value | Line meets plane at one point |
| $0 = 0$ (identity) | Line lies in the plane |
| $0 = k,\ k \ne 0$ | Line parallel to plane, no intersection |

## Shortest Distance Between Lines

**Skew lines** $\vec{r} = \vec{a_1} + \lambda\vec{b_1}$ and $\vec{r} = \vec{a_2} + \mu\vec{b_2}$ (vector form):

$$\boxed{SD = \frac{|(\vec{a_2} - \vec{a_1}) \cdot (\vec{b_1} \times \vec{b_2})|}{|\vec{b_1} \times \vec{b_2}|}}$$

**Cartesian form:**

$$\boxed{SD = \frac{\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix}}{\sqrt{(b_1 c_2 - b_2 c_1)^2 + (c_1 a_2 - c_2 a_1)^2 + (a_1 b_2 - a_2 b_1)^2}}}$$

**Parallel lines** $\vec{r} = \vec{a_1} + \lambda\vec{b}$ and $\vec{r} = \vec{a_2} + \mu\vec{b}$:

$$\boxed{SD = \frac{|(\vec{a_2} - \vec{a_1}) \times \vec{b}|}{|\vec{b}|}}$$

**Intersecting lines:** $SD = 0$ (the numerator scalar triple product vanishes).

| Case | Formula |
| --- | --- |
| Skew (vector) | $\dfrac{ |
| Skew (Cartesian) | $\dfrac{ |
| Parallel | $\dfrac{ |
| Intersecting | $0$ |

> **★ Key point · Classify first**
>
> Before plugging into the skew formula, check the easy cases: proportional direction ratios mean **parallel** (use the parallel formula), and a zero numerator means **intersecting** ($SD = 0$). Always take the absolute value - distance is never negative.

Line-pair classification at a glance:

| Type | Intersect | Parallel | Coplanar |
| --- | --- | --- | --- |
| Intersecting | Yes | No | Yes |
| Parallel | No | Yes | Yes |
| Skew | No | No | No |

## Coplanarity

**Four points** $A, B, C, D$ are coplanar iff the scalar triple product vanishes:

$$\boxed{[\,\vec{AB}\ \ \vec{AC}\ \ \vec{AD}\,] = 0}$$

Equivalently, by determinant of differences:

$$\boxed{\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\ x_3-x_1 & y_3-y_1 & z_3-z_1 \\ x_4-x_1 & y_4-y_1 & z_4-z_1 \end{vmatrix} = 0}$$

Or with the $4\times 4$ determinant:

$$\boxed{\begin{vmatrix} x_1 & y_1 & z_1 & 1 \\ x_2 & y_2 & z_2 & 1 \\ x_3 & y_3 & z_3 & 1 \\ x_4 & y_4 & z_4 & 1 \end{vmatrix} = 0}$$

**Two lines** $\vec{r} = \vec{a_1} + \lambda\vec{b_1}$ and $\vec{r} = \vec{a_2} + \mu\vec{b_2}$ are coplanar iff:

$$\boxed{(\vec{a_2} - \vec{a_1}) \cdot (\vec{b_1} \times \vec{b_2}) = 0}$$

**Cartesian condition** for two lines to be coplanar:

$$\boxed{\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix} = 0}$$

Normal to the plane containing two coplanar lines: $\boxed{\vec{n} = \vec{b_1} \times \vec{b_2}}$, then use the point-normal form with any point on either line.

| Item | Coplanarity condition |
| --- | --- |
| 4 points | $[\vec{AB}\ \vec{AC}\ \vec{AD}] = 0$ |
| 2 lines | $[(\vec{a_2}-\vec{a_1})\ \vec{b_1}\ \vec{b_2}] = 0$ |
| 3 vectors | $[\vec{u}\ \vec{v}\ \vec{w}] = 0$ |
| Plane normal (2 lines) | $\vec{n} = \vec{b_1} \times \vec{b_2}$ |

> **◐ In simple terms · Coplanarity links to shortest distance**
>
> Two lines are coplanar exactly when their shortest distance is $0$ - the coplanarity determinant is precisely the **numerator** of the skew-line shortest-distance formula. Parallel and intersecting lines are always coplanar; only skew lines are not.

## Related Topics

- [3D Coordinate System & Distance Formula](../3d-coordinates/index.md)
- [Direction Cosines and Direction Ratios](../direction-cosines/index.md)
- [Angle Between Two Lines in Space](../angle-between-lines/index.md)
- [Equation of a Line in 3D Space](../line-in-space/index.md)
- [Equation of a Plane in 3D Space](../plane-equations/index.md)
- [Line and Plane Relations in 3D](../line-plane-relations/index.md)
- [Skew Lines and Shortest Distance](../skew-lines/index.md)
- [Coplanarity of Lines and Points](../coplanarity/index.md)

From TestGuru · our mock-test platform

## You've read Three Dimensional Geometry Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2Fformula-sheet%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/three-dimensional-geometry/formula-sheet/",this.page.identifier="/mathematics/three-dimensional-geometry/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/formula-sheet/](https://jeenotes.in/mathematics/three-dimensional-geometry/formula-sheet/) · raw HTML: `offline/mathematics/three-dimensional-geometry/formula-sheet/index.html`_
