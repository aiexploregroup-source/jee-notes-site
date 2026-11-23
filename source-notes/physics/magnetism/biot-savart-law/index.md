---
title: "Biot-Savart Law: The Foundation of Magnetic Fields"
source: "https://jeenotes.in/physics/magnetism/biot-savart-law/"
description: "Master Biot-Savart law and magnetic field calculations for current-carrying conductors - complete guide for JEE Main & Advanced"
updated: "2026-10-18"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 9"
html: "../../../../offline/physics/magnetism/biot-savart-law/index.html"
extracted: "2026-11-23"
---

> Master Biot-Savart law and magnetic field calculations for current-carrying conductors - complete guide for JEE Main & Advanced

# Biot-Savart Law: The Foundation of Magnetic Fields

## Movie Hook: The Arc Reactor’s Magnetic Blueprint

Remember Tony Stark’s Arc Reactor in Iron Man? The glowing blue ring generates massive magnetic fields to contain plasma. Ever wondered how engineers calculate the magnetic field from those circular current loops? Enter the **Biot-Savart Law** - the fundamental principle that tells us exactly how moving charges create magnetic fields. Just as Stark designed his reactor with precision, you’ll master calculating magnetic fields from any current configuration!

## The Big Picture

**What’s the Deal?**

- Biot-Savart Law is to magnetism what Coulomb’s Law is to electrostatics
- It tells us the magnetic field produced by a tiny current element
- By integrating (adding up) contributions from all elements, we find the total field
- This is the STARTING POINT for understanding electromagnets, motors, and generators

**JEE Perspective:**

- JEE Main: Direct formula applications, standard geometries (straight wire, circular loop)
- JEE Advanced: Complex integrations, combinations of current configurations, vector calculations

---

## Core Concept: The Biot-Savart Law

### The Fundamental Formula

For a small current element of length $d\vec{l}$ carrying current $I$, the magnetic field $d\vec{B}$ at a point P located at position vector $\vec{r}$ from the element:

$$\boxed{d\vec{B} = \frac{\mu_0}{4\pi} \cdot \frac{I \, d\vec{l} \times \vec{r}}{r^3}}$$

**Alternative form:**

$$\boxed{dB = \frac{\mu_0}{4\pi} \cdot \frac{I \, dl \sin\theta}{r^2}}$$

where:

- $\mu_0 = 4\pi \times 10^{-7}$ T·m/A (permeability of free space)
- $\theta$ = angle between $d\vec{l}$ and $\vec{r}$
- $r$ = distance from current element to point P
- Direction: Given by right-hand rule ($d\vec{l} \times \vec{r}$)

### Memory Trick: “BIOT Stands for Building In Organized Tiny-parts”

**B**reak the conductor into tiny elements
**I**ntegrate all contributions
**O**rient using right-hand rule
**T**otal field is the vector sum

**Quick Direction Rule:** Point your right thumb along current direction, fingers curl in the direction of magnetic field loops!

---

## Standard Configurations (JEE Favorites!)

### 1. Infinite Straight Wire

**Setup:** Wire along z-axis, find field at perpendicular distance $r$

**Result:**

$$\boxed{B = \frac{\mu_0 I}{2\pi r}}$$

**Direction:** Circular loops around wire (right-hand thumb rule)

**Derivation Insight:**

```fallback
Consider element at distance z from foot of perpendicular
- r² = a² + z² (where a = perpendicular distance)
- sin θ = a/r
- Integrate from -∞ to +∞
- Result: B = (μ₀I/2πa)
```

**JEE Trick:** This appears in 60% of magnetism problems as a building block!

**General case — finite wire:**

If the point subtends angles $\alpha$ and $\beta$ with the perpendicular from the two ends of the wire:

$$B = \frac{\mu_0 I}{4\pi r}(\sin\alpha + \sin\beta)$$

Setting $\alpha = \beta = 90°$ recovers the infinite wire result.

### Interactive Demo: Magnetic Field Patterns

Visualize magnetic field lines around current-carrying conductors of various shapes.

### 2. Semi-Infinite Wire

**Setup:** Wire from origin to infinity along positive x-axis, field at perpendicular distance $r$

$$\boxed{B = \frac{\mu_0 I}{4\pi r}}$$

**Memory:** Half of infinite wire = half the field!

### 3. Circular Loop (On-Axis)

**Setup:** Circular loop of radius $R$, field at distance $x$ from center along axis

**At center (x = 0):**

$$\boxed{B_{\text{center}} = \frac{\mu_0 I}{2R}}$$

**On axis at distance x:**

$$\boxed{B_x = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}}$$

**At large distance (x » R):**

$$\boxed{B \approx \frac{\mu_0 I R^2}{2x^3} = \frac{\mu_0 M}{2\pi x^3}}$$

where $M = I\pi R^2$ is the magnetic dipole moment

**Memory Trick:** “Center field has 2R, axis field has the 3/2 power!”

### 4. Circular Arc

**Setup:** Arc of radius $R$ subtending angle $\theta$ at center

**Field at center:**

$$\boxed{B = \frac{\mu_0 I \theta}{4\pi R}}$$

**Special cases:**

- Semicircle ($\theta = \pi$): $B = \frac{\mu_0 I}{4R}$
- Quarter circle ($\theta = \pi/2$): $B = \frac{\mu_0 I}{8R}$
- Full circle ($\theta = 2\pi$): $B = \frac{\mu_0 I}{2R}$

### 5. Square Loop

**Setup:** Square loop of side $a$, field at center

$$\boxed{B = \frac{2\sqrt{2}\mu_0 I}{\pi a}}$$

**Derivation approach:** Calculate field from one side, multiply by 4!

---

## Interactive Demo: Magnetic Field Visualizer

```python
import numpy as np
import matplotlib.pyplot as plt

def magnetic_field_wire(I, distance):
    """Calculate B-field from infinite straight wire"""
    mu_0 = 4 * np.pi * 1e-7
    return (mu_0 * I) / (2 * np.pi * distance)

def magnetic_field_loop_axis(I, R, x):
    """Calculate B-field on axis of circular loop"""
    mu_0 = 4 * np.pi * 1e-7
    return (mu_0 * I * R**2) / (2 * (R**2 + x**2)**(3/2))

# Example: Compare fields
I = 10  # Amperes
R = 0.1  # meters
distances = np.linspace(0.01, 1, 100)

B_wire = magnetic_field_wire(I, distances)
B_loop = magnetic_field_loop_axis(I, R, distances)

plt.figure(figsize=(10, 6))
plt.plot(distances, B_wire * 1e6, label='Infinite Wire', linewidth=2)
plt.plot(distances, B_loop * 1e6, label=f'Circular Loop (R={R}m)', linewidth=2)
plt.xlabel('Distance (m)')
plt.ylabel('Magnetic Field (μT)')
plt.title('Magnetic Field Comparison: Wire vs Loop')
plt.legend()
plt.grid(True)
plt.show()

print(f"At center of loop: B = {magnetic_field_loop_axis(I, R, 0)*1e6:.2f} μT")
print(f"Wire at same distance: B = {magnetic_field_wire(I, R)*1e6:.2f} μT")
```

**Experiment:** Change current and radius values to see how fields vary!

---

## Common JEE Mistakes (Don’t Fall for These!)

### Mistake 1: Wrong Vector Cross Product

**Wrong:** Taking magnitude first, then cross product
**Right:** $d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \vec{r}}{r^3}$ - cross product is vector operation!

### Mistake 2: Forgetting the 1/r³ vs 1/r²

**Wrong:** Using $1/r^2$ in vector form
**Right:** Vector form has $r^3$ (denominator), scalar form has $r^2$ (because $\hat{r}$ is extracted)

### Mistake 3: Integration Limits

**Wrong:** Integrating angle from 0 to 2π for semicircle
**Right:** For semicircle, integrate angle from 0 to π OR parametrize correctly!

### Mistake 4: Direction Confusion

**Wrong:** Field points radially outward from wire
**Right:** Field forms CIRCULAR loops around wire (tangential direction)

### Mistake 5: Superposition Errors

**Common Error:** Adding magnitudes without considering vector directions
**Solution:** ALWAYS resolve into components before adding!

---

## Problem-Solving Strategy: The RICE Method

**R**ead and draw the configuration
**I**dentify symmetry and choose coordinate system
**C**alculate contribution from one element
**E**valuate integral using proper limits

---

## Practice Problems

### Level 1: JEE Main Foundations

**Problem 1.1:** A straight wire carries a current of 5 A. What is the magnetic field at a perpendicular distance of 10 cm from the wire?

<details><summary>Solution</summary><p>Given: $I = 5$ A, $r = 0.1$ m</p><p>Using: $B = \frac{\mu_0 I}{2\pi r}$</p>$$B = \frac{4\pi \times 10^{-7} \times 5}{2\pi \times 0.1}$$

$$B = \frac{20 \times 10^{-7}}{0.2} = 10^{-5} \text{ T} = 10 \text{ μT}$$<p><strong>Answer:</strong> 10 μT, direction given by right-hand thumb rule</p></details>

**Problem 1.2:** A circular coil of radius 5 cm carries a current of 2 A. Find the magnetic field at its center.

<details><summary>Solution</summary><p>Given: $R = 0.05$ m, $I = 2$ A</p><p>Using: $B = \frac{\mu_0 I}{2R}$</p>$$B = \frac{4\pi \times 10^{-7} \times 2}{2 \times 0.05}$$

$$B = \frac{8\pi \times 10^{-7}}{0.1} = 8\pi \times 10^{-6} = 25.1 \text{ μT}$$<p><strong>Answer:</strong> 25.1 μT (perpendicular to plane of coil)</p></details>

**Problem 1.3:** A semicircular wire of radius 10 cm carries 3 A. Find magnetic field at center.

<details><summary>Solution</summary><p>For semicircle: $\theta = \pi$ radians</p><p>Using: $B = \frac{\mu_0 I \theta}{4\pi R}$</p>$$B = \frac{4\pi \times 10^{-7} \times 3 \times \pi}{4\pi \times 0.1}$$

$$B = \frac{3\pi \times 10^{-7}}{0.1} = 3\pi \times 10^{-6} \text{ T} = 9.42 \text{ μT}$$<p><strong>Answer:</strong> 9.42 μT</p></details>

### Level 2: JEE Advanced Application

**Problem 2.1:** A wire is bent in the form of a square loop of side 10 cm. If it carries 2 A, find the magnetic field at the center.

<details><summary>Solution</summary><p>For square loop: $B = \frac{2\sqrt{2}\mu_0 I}{\pi a}$</p><p>Given: $a = 0.1$ m, $I = 2$ A</p>$$B = \frac{2\sqrt{2} \times 4\pi \times 10^{-7} \times 2}{\pi \times 0.1}$$

$$B = \frac{16\sqrt{2} \times 10^{-7}}{0.1} = 160\sqrt{2} \times 10^{-7}$$

$$B = 2.26 \times 10^{-5} \text{ T} = 22.6 \text{ μT}$$<p><strong>Answer:</strong> 22.6 μT</p></details>

**Problem 2.2:** Two infinite parallel wires separated by 20 cm carry currents of 5 A and 3 A in the same direction. Find the point where the net magnetic field is zero.

<details><summary>Solution</summary><p>Let the zero field point be at distance $x$ from 5 A wire.
Then distance from 3 A wire = $(0.2 - x)$ m</p><p>For zero field:</p>$$\frac{\mu_0 \times 5}{2\pi x} = \frac{\mu_0 \times 3}{2\pi(0.2-x)}$$

$$\frac{5}{x} = \frac{3}{0.2-x}$$

$$5(0.2-x) = 3x$$

$$1 - 5x = 3x$$

$$x = \frac{1}{8} = 0.125 \text{ m} = 12.5 \text{ cm}$$<p><strong>Answer:</strong> 12.5 cm from the 5 A wire (between the wires)</p></details>

**Problem 2.3:** A circular loop of radius R carries current I. Find the magnetic field at a distance R from the center on the axis.

<details><summary>Solution</summary><p>Given: $x = R$</p><p>Using: $B_x = \frac{\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$</p>$$B = \frac{\mu_0 I R^2}{2(R^2 + R^2)^{3/2}}$$

$$B = \frac{\mu_0 I R^2}{2(2R^2)^{3/2}} = \frac{\mu_0 I R^2}{2 \times 2^{3/2} R^3}$$

$$B = \frac{\mu_0 I}{2^{5/2} R} = \frac{\mu_0 I}{4\sqrt{2}R}$$<p><strong>Answer:</strong> $\frac{\mu_0 I}{4\sqrt{2}R}$ or $\frac{\mu_0 I}{2R} \times \frac{1}{2\sqrt{2}}$</p></details>

### Level 3: JEE Advanced Mastery

**Problem 3.1:** A wire carrying current I is bent into the shape of a regular hexagon of side a. Find the magnetic field at the center.

<details><summary>Solution</summary><p><strong>Approach:</strong> Hexagon has 6 sides. Find field due to one side, multiply by 6.</p><p>For one straight side of length $a$ at perpendicular distance $r$:</p><ul><li>The perpendicular distance from center to side: $r = \frac{a}{2\tan 30°} = \frac{a\sqrt{3}}{2}$</li><li>Each side subtends angle $60°$ at the ends as seen from center</li><li>Angles from perpendicular: $\pm 30°$</li></ul><p>Field due to one side:</p>$$B_1 = \frac{\mu_0 I}{4\pi r}(\sin 30° + \sin 30°) = \frac{\mu_0 I}{4\pi r} \times 1$$

$$B_1 = \frac{\mu_0 I}{4\pi} \times \frac{2}{a\sqrt{3}} = \frac{\mu_0 I}{2\sqrt{3}\pi a}$$<p>Total field (6 sides):</p>$$B = 6B_1 = \frac{6\mu_0 I}{2\sqrt{3}\pi a} = \frac{3\mu_0 I}{\sqrt{3}\pi a}$$

$$\boxed{B = \frac{\sqrt{3}\mu_0 I}{\pi a}}$$<p><strong>Answer:</strong> $\frac{\sqrt{3}\mu_0 I}{\pi a}$</p></details>

**Problem 3.2:** Two circular coils of radii R and 2R are placed coaxially with their centers separated by distance 2R. Both carry current I in the same direction. Find the magnetic field at the midpoint between their centers.

<details><summary>Solution</summary><p><strong>Setup:</strong></p><ul><li>Coil 1 (radius R): distance from midpoint = R</li><li>Coil 2 (radius 2R): distance from midpoint = R</li></ul><p>Field from coil 1:</p>$$B_1 = \frac{\mu_0 I R^2}{2(R^2 + R^2)^{3/2}} = \frac{\mu_0 I R^2}{2(2R^2)^{3/2}} = \frac{\mu_0 I}{4\sqrt{2}R}$$<p>Field from coil 2:</p>$$B_2 = \frac{\mu_0 I (2R)^2}{2((2R)^2 + R^2)^{3/2}} = \frac{\mu_0 I \times 4R^2}{2(5R^2)^{3/2}}$$

$$B_2 = \frac{2\mu_0 I R^2}{5^{3/2}R^3} = \frac{2\mu_0 I}{5\sqrt{5}R}$$<p>Both fields point in same direction:</p>$$B_{\text{net}} = B_1 + B_2 = \frac{\mu_0 I}{4\sqrt{2}R} + \frac{2\mu_0 I}{5\sqrt{5}R}$$

$$B_{\text{net}} = \frac{\mu_0 I}{R}\left(\frac{1}{4\sqrt{2}} + \frac{2}{5\sqrt{5}}\right)$$

$$B_{\text{net}} = \frac{\mu_0 I}{R}\left(\frac{5\sqrt{5} + 8\sqrt{2}}{20\sqrt{10}}\right)$$<p><strong>Answer:</strong> $\frac{\mu_0 I}{R}\left(\frac{1}{4\sqrt{2}} + \frac{2}{5\sqrt{5}}\right)$ (simplified form depends on required format)</p></details>

**Problem 3.3:** A current I flows in an infinitely long wire bent at right angles as shown. Find the magnetic field at a point P which is at perpendicular distance a from both the semi-infinite parts.

<details><summary>Solution</summary><p><strong>Configuration:</strong> L-shaped wire (corner O), point P inside the right angle at perpendicular distance $a$ from each arm (so OP = $a\sqrt{2}$).</p><p>For each arm, the foot of the perpendicular from P is a distance $a$ from the corner, so the arm subtends $90°$ on one side and $45°$ on the other:</p>$$B_1 = B_2 = \frac{\mu_0 I}{4\pi a}(\sin 90° + \sin 45°) = \frac{\mu_0 I}{4\pi a}\left(1 + \frac{1}{\sqrt{2}}\right)$$<p>Both fields point the same way (perpendicular to the plane), so</p>$$\boxed{B_{\text{net}} = \frac{\mu_0 I}{2\pi a}\left(1 + \frac{1}{\sqrt{2}}\right) = \frac{(2+\sqrt{2})\mu_0 I}{4\pi a}}$$<p>(The result $\mu_0 I/4\pi a$ per arm holds only for a point on the perpendicular through the <em>end</em> of a semi-infinite wire.)</p><p><strong>Answer:</strong> $\frac{\mu_0 I}{2\pi a}\left(1 + \frac{1}{\sqrt{2}}\right) = \frac{(2+\sqrt{2})\mu_0 I}{4\pi a}$ (perpendicular to plane, into or out depending on current direction)</p></details>

---

## Connections: The Web of Knowledge

### Link to Current Electricity

- Current creates magnetic field (Biot-Savart)
- Moving charges are the source of magnetism
- See: [Current Electricity Fundamentals](../../current-electricity/index.md)

### Link to Ampere’s Law

- Biot-Savart is fundamental, Ampere’s Law is elegant shortcut
- For symmetric configurations, Ampere’s Law is easier
- See: [Ampere’s Circuital Law](../amperes-law/index.md)

### Link to Electromagnetic Induction

- Changing magnetic fields create electric fields
- Biot-Savart gives us B, Faraday’s law uses changing B
- See: [Electromagnetic Induction](../../electromagnetic-induction/faradays-law/index.md)

### Link to Magnetic Dipole

- Far-field of current loop behaves as magnetic dipole
- Dipole moment M = IA
- See: [Magnetic Dipole Moment](../magnetic-dipole/index.md)

---

## Quick Revision: Formula Sheet

| Configuration | Magnetic Field | Key Point |
| --- | --- | --- |
| Infinite wire | $B = \frac{\mu_0 I}{2\pi r}$ | Most common! |
| Semi-infinite wire | $B = \frac{\mu_0 I}{4\pi r}$ | Half of infinite |
| Circular loop (center) | $B = \frac{\mu_0 I}{2R}$ | Perpendicular to plane |
| Circular loop (axis) | $B = \frac{\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$ | 3/2 power! |
| Arc (center) | $B = \frac{\mu_0 I\theta}{4\pi R}$ | θ in radians |
| Square loop (center) | $B = \frac{2\sqrt{2}\mu_0 I}{\pi a}$ | Remember √2 |

**Constants to Remember:**

- $\mu_0 = 4\pi \times 10^{-7}$ T·m/A
- $\frac{\mu_0}{4\pi} = 10^{-7}$ T·m/A

---

## Exam Strategy

**Time Management:**

- Standard configurations: 2 minutes
- Integration problems: 5-7 minutes
- Multi-part questions: 8-10 minutes

**Red Flags:**

- If integration looks too complex, check for symmetry
- If answer has weird units, you made a mistake
- Always check limiting cases (x→0, x→∞)

**Last-Minute Tips:**

- Right-hand rule: Practice it NOW!
- Remember $\mu_0/4\pi = 10^{-7}$ saves calculation time
- Vector addition: Resolve components first!

---

## Summary: Key Takeaways

1. **Biot-Savart Law** gives magnetic field from current elements: $d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \vec{r}}{r^3}$
2. **Standard Results** must be memorized: infinite wire, circular loop, arc formulas
3. **Direction** always follows right-hand rule: thumb = current, curl = field
4. **Integration** is key: Break conductor into elements, integrate with proper limits
5. **Superposition** applies: Total field is vector sum of individual contributions
6. **JEE Pattern:** 70% standard configurations, 30% require integration/combination

---

*Last Updated: March 15, 2025*
*Next Topic: [Ampere’s Circuital Law](../amperes-law/index.md)*
*Previous Topic: [Current Electricity](../../current-electricity/index.md)*

From TestGuru · our mock-test platform

## You've read Biot-Savart Law: The Foundation of Magnetic Fields.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=magnetism&tg_exam=jee-main&tg_page=%2Fphysics%2Fmagnetism%2Fbiot-savart-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/magnetism/biot-savart-law/",this.page.identifier="/physics/magnetism/biot-savart-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="magneticField" id="anim-magneticField-1795396423890600698"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-magneticField-1795396423890600698")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/magnetism/biot-savart-law/](https://jeenotes.in/physics/magnetism/biot-savart-law/) · raw HTML: `offline/physics/magnetism/biot-savart-law/index.html`_
