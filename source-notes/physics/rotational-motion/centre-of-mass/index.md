---
title: "Centre of Mass"
source: "https://jeenotes.in/physics/rotational-motion/centre-of-mass/"
description: "Master centre of mass calculations for systems of particles and rigid bodies - essential for JEE Main & Advanced rotational motion problems."
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 8"
html: "../../../../offline/physics/rotational-motion/centre-of-mass/index.html"
extracted: "2026-11-23"
---

> Master centre of mass calculations for systems of particles and rigid bodies - essential for JEE Main & Advanced rotational motion problems.

## Prerequisites

Before studying this topic, review:

- [Vectors](https://jeenotes.in/physics/kinematics/motion-2d/) - Vector addition and components
- [Newton’s Laws](https://jeenotes.in/physics/laws-of-motion/) - Force and mass concepts

---

## The Hook: Why Does Thor’s Mjolnir Spin Perfectly?

> **★ Key point · Connect: Real Life → Physics**
>
> Ever wondered why Thor’s hammer Mjolnir spins so perfectly when he throws it? Or why a thrown stick wobbles in the air but rotates around one special point?
>
> In the climactic battle scene of **Thor: Ragnarok**, when Thor hurls Mjolnir, it spins elegantly around a single point - its **centre of mass**. This isn’t movie magic; it’s fundamental physics!
>
> Similarly, when cricketers throw the ball with a scrambled seam, it wobbles but still follows a parabolic path. That path is traced by one special point: the **centre of mass**.

**The Question:** Why does every object, no matter how irregularly shaped, have one special point that behaves as if all the mass is concentrated there?

---

## The Core Concept

### What is Centre of Mass?

The **centre of mass** (COM) is the point where the entire mass of a system can be considered to be concentrated for analyzing translational motion.

> **◐ In simple terms · Simple Definition**
>
> **Centre of Mass is the “average position” of all the mass in a system.**
>
> Imagine you have to balance an irregular object on your finger - that balance point is near the centre of mass!

### Interactive Demo: Visualize Centre of Mass

Explore how the centre of mass changes for different mass distributions.

### Formula for Centre of Mass

**For a system of particles:**

$$\boxed{\vec{r}_{cm} = \frac{\sum_{i=1}^{n} m_i\vec{r}_i}{\sum_{i=1}^{n} m_i} = \frac{m_1\vec{r}_1 + m_2\vec{r}_2 + \cdots + m_n\vec{r}_n}{m_1 + m_2 + \cdots + m_n}}$$

**In component form:**

$$x_{cm} = \frac{\sum m_i x_i}{M}, \quad y_{cm} = \frac{\sum m_i y_i}{M}, \quad z_{cm} = \frac{\sum m_i z_i}{M}$$

where $M = \sum m_i$ is the total mass.

**For continuous bodies:**

$$\boxed{\vec{r}_{cm} = \frac{1}{M}\int \vec{r}\,dm}$$

---

## Memory Tricks & Patterns

### Mnemonic for Centre of Mass Formula

**Memory Trick:** “**C**hildren’s **M**arks **A**verage” → **C**entre of **M**ass is **A**verage position

Just like averaging test scores (multiply each score by weight, then divide by total weight), COM is the weighted average of positions!

$$\text{COM} = \frac{\text{(mass }\times\text{ position) for all parts}}{\text{total mass}}$$

### Pattern Recognition: Symmetry Shortcuts

> **★ Key point · Time-Saving Trick for JEE**
>
> **If a body is symmetric about an axis, the COM lies on that axis.**
>
> **If a body has two or more axes of symmetry, the COM is at their intersection.**
>
> **Examples:**
>
> - Uniform rod: COM at geometric center

> - Uniform disc/sphere: COM at geometric center

> - Uniform square plate: COM at intersection of diagonals

> - Hollow hemisphere: COM is NOT at geometric center (no full symmetry)

---

## Centre of Mass for Common Systems

### 1. Two-Particle System

For two particles of masses $m_1$ and $m_2$ separated by distance $d$:

$$x_{cm} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}$$

**Taking $m_1$ at origin ($x_1 = 0$) and $m_2$ at distance $d$ ($x_2 = d$):**

$$\boxed{x_{cm} = \frac{m_2 d}{m_1 + m_2}}$$

The COM divides the line joining them in the ratio $m_2 : m_1$ (inverse ratio of masses).

> **★ Key point · JEE Shortcut**
>
> For two masses: **COM is closer to the heavier mass.**
>
> If $m_1 = m_2$, then COM is exactly at the midpoint.

### 2. Three Particles (Triangle)

For three particles at vertices of a triangle:

$$x_{cm} = \frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3}$$

$$y_{cm} = \frac{m_1 y_1 + m_2 y_2 + m_3 y_3}{m_1 + m_2 + m_3}$$

**Special case:** If $m_1 = m_2 = m_3$, COM is at the centroid (intersection of medians).

### 3. Uniform Rod

For a uniform rod of length $L$:

- **COM is at the geometric center** (distance $L/2$ from either end)

### 4. Semicircular Ring

For a thin semicircular ring of radius $R$:

$$y_{cm} = \frac{2R}{\pi}$$

(measured from center, along the axis of symmetry)

### 5. Semicircular Disc

For a uniform semicircular disc of radius $R$:

$$y_{cm} = \frac{4R}{3\pi}$$

### 6. Hollow Hemisphere

For a thin hemispherical shell of radius $R$:

$$y_{cm} = \frac{R}{2}$$

### 7. Solid Hemisphere

For a solid hemisphere of radius $R$:

$$y_{cm} = \frac{3R}{8}$$

### Quick Reference Table

| Object | Centre of Mass Location |
| --- | --- |
| Uniform rod (length $L$) | At center: $L/2$ from end |
| Semicircular ring (radius $R$) | $\frac{2R}{\pi}$ from center |
| Semicircular disc (radius $R$) | $\frac{4R}{3\pi}$ from center |
| Hollow hemisphere (radius $R$) | $\frac{R}{2}$ from base |
| Solid hemisphere (radius $R$) | $\frac{3R}{8}$ from base |
| Hollow cone (height $h$) | $\frac{h}{3}$ from base |
| Solid cone (height $h$) | $\frac{h}{4}$ from base |

---

## Motion of Centre of Mass

### Velocity of Centre of Mass

$$\boxed{\vec{v}_{cm} = \frac{\sum m_i \vec{v}_i}{M} = \frac{\vec{p}_{total}}{M}}$$

**Key insight:** The velocity of COM is the total momentum divided by total mass.

### Acceleration of Centre of Mass

$$\boxed{\vec{a}_{cm} = \frac{\sum m_i \vec{a}_i}{M} = \frac{\vec{F}_{ext}}{M}}$$

**Newton’s Second Law for a System:**

$$\vec{F}_{ext} = M\vec{a}_{cm}$$

> **★ Key point · Critical Concept**
>
> **Internal forces do NOT affect the motion of the centre of mass.**
>
> Only external forces can change the velocity of COM. This is why:
>
> - A person standing on a frictionless floor cannot move by pushing themselves

> - A bomb exploding in mid-air: COM continues on the same parabolic path

> - A cat falling: cannot change COM trajectory by twisting in air

---

## When to Use Centre of Mass

> **★ Key point · Decision Tree**
>
> **Use COM analysis when:**
>
> 1. Multiple objects are interacting (collisions, explosions)

> 2. System of particles with internal forces

> 3. Finding trajectory of complex objects (javelin throw, rotating stick)

> 4. No external force → COM moves with constant velocity

> 5. Need to simplify complex motion into translation of one point
>
> **Don’t use COM for:**
>
> - Rotational motion about the COM (use torque/angular momentum)

> - Individual particle motion when forces are different on each

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Centre of Mass vs Centre of Gravity**
>
> **Mistake:** Thinking COM and centre of gravity are always the same.
>
> **Truth:** They’re the same only when gravitational field is uniform. In non-uniform fields (like near a black hole), they differ.
>
> **For JEE:** Treat them as the same unless specifically mentioned.

> **⚠ Trap #2: COM Outside the Body**
>
> **Mistake:** Thinking COM must be inside the material of the object.
>
> **Truth:** COM can be outside the body!
>
> **Examples:**
>
> - Hollow hemisphere: COM is in the hollow region

> - Ring: COM is at the center (no material there)

> - Boomerang/horseshoe: COM is in the gap

> **⚠ Trap #3: Internal Forces Change COM Motion**
>
> **Mistake:** Thinking a person can move their COM on frictionless surface by moving their arms.
>
> **Correct approach:** Only external forces change COM motion. Internal forces (muscles) create equal and opposite reactions that cancel out.

---

## Worked Examples

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Two Masses**
>
> Two point masses 3 kg and 2 kg are placed at coordinates (1, 2) m and (3, 4) m respectively. Find the position of their centre of mass.
>
> **Solution:**
>
> $$x_{cm} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \frac{3(1) + 2(3)}{3 + 2} = \frac{3 + 6}{5} = \boxed{1.8 \text{ m}}$$

$$y_{cm} = \frac{m_1 y_1 + m_2 y_2}{m_1 + m_2} = \frac{3(2) + 2(4)}{3 + 2} = \frac{6 + 8}{5} = \boxed{2.8 \text{ m}}$$
>
> **Centre of mass:** $(1.8, 2.8)$ m

> **↗ Connection · Problem 2: System in Motion**
>
> A 2 kg mass moves with velocity 3 m/s and a 3 kg mass moves with velocity 2 m/s in the same direction. Find the velocity of their centre of mass.
>
> **Solution:**
>
> $$v_{cm} = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} = \frac{2(3) + 3(2)}{2 + 3} = \frac{6 + 6}{5} = \boxed{2.4 \text{ m/s}}$$

### Level 2: JEE Main

> **↗ Connection · Problem 3: L-Shaped Rod**
>
> Two uniform rods each of mass $m$ and length $L$ are joined to form an L-shape. Find the position of the centre of mass from the corner.
>
> **Solution:**
>
> Consider corner as origin. Each rod’s COM is at its center.
>
> **Horizontal rod:** COM at $(L/2, 0)$

> **Vertical rod:** COM at $(0, L/2)$
>
> $$x_{cm} = \frac{m(L/2) + m(0)}{m + m} = \frac{L}{4}$$

$$y_{cm} = \frac{m(0) + m(L/2)}{m + m} = \frac{L}{4}$$
>
> **COM position:** $\boxed{\left(\frac{L}{4}, \frac{L}{4}\right)}$ from corner
>
> **Distance from corner:** $\sqrt{(L/4)^2 + (L/4)^2} = \boxed{\frac{L}{2\sqrt{2}}}$

> **↗ Connection · Problem 4: Explosion in Air**
>
> A projectile is fired with velocity 20 m/s at 60° to horizontal. At the highest point, it explodes into two equal fragments. One fragment returns to the launch point. Where does the other fragment land? (Take $g = 10$ m/s²)
>
> **Solution:**
>
> **Key concept:** COM continues on the original parabolic path.
>
> Original range: $R = \frac{u^2 \sin 2\theta}{g} = \frac{20^2 \sin 120°}{10} = \frac{400 \times \sqrt{3}/2}{10} = 20\sqrt{3}$ m
>
> At highest point, horizontal velocity = $u \cos\theta = 20 \cos 60° = 10$ m/s
>
> **After explosion:**
>
> - Fragment 1 returns to launch point (lands at $x = 0$)

> - Fragment 2 lands at $x = x_2$

> - COM must land at original range: $x_{cm} = 20\sqrt{3}$ m
>
> $$x_{cm} = \frac{m(0) + m(x_2)}{2m} = \frac{x_2}{2} = 20\sqrt{3}$$

$$\boxed{x_2 = 40\sqrt{3} \text{ m}}$$
>
> The second fragment lands at twice the original range!

### Level 3: JEE Advanced

> **↗ Connection · Problem 5: Variable Mass System**
>
> A uniform chain of length $L$ and mass $M$ is placed on a smooth table with length $b$ hanging over the edge. The chain starts sliding. Find the velocity of the chain when it just leaves the table.
>
> **Solution:**
>
> **Initial position:** Length $b$ hanging, $(L-b)$ on table
>
> **Initial COM height from ground:**
>
> $$h_i = \frac{(L-b) \cdot h_{\text{table}} + b \cdot (h_{\text{table}} - b/2)}{L}$$
>
> Taking table height as reference (0):
>
> $$h_i = \frac{0 + b(-b/2)}{L} = -\frac{b^2}{2L}$$
>
> **Final position:** Just leaving table - entire length $L$ hanging
>
> **Final COM height:**
>
> $$h_f = -\frac{L}{2}$$
>
> **Using energy conservation:**
>
> $$Mg(h_i - h_f) = \frac{1}{2}Mv^2$$

$$g\left(-\frac{b^2}{2L} + \frac{L}{2}\right) = \frac{v^2}{2}$$

$$g\left(\frac{L}{2} - \frac{b^2}{2L}\right) = \frac{v^2}{2}$$

$$g\left(\frac{L^2 - b^2}{2L}\right) = \frac{v^2}{2}$$

$$\boxed{v = \sqrt{\frac{g(L^2 - b^2)}{L}}}$$

> **↗ Connection · Problem 6: Two-Body Collision**
>
> Two particles of masses $m$ and $2m$ are initially at rest at distance $d$ apart. They move towards each other under mutual gravitational attraction. Where do they collide?
>
> **Solution:**
>
> **Key concept:** No external force → COM doesn’t move!
>
> Initial COM position (taking $m$ at origin):
>
> $$x_{cm} = \frac{m(0) + 2m(d)}{m + 2m} = \frac{2d}{3}$$
>
> Since COM doesn’t move, collision occurs at $\boxed{x = \frac{2d}{3}}$ from mass $m$.
>
> **Alternative insight:** Distance traveled is inversely proportional to mass.
>
> - Mass $m$ travels: $\frac{2d}{3}$

> - Mass $2m$ travels: $\frac{d}{3}$

> - Ratio: $2:1$ (inverse of mass ratio)

---

## Real-World Applications

1. **Rocket Propulsion:** Fuel ejection doesn’t change rocket’s COM momentum in absence of external forces
2. **High Jump:** Athletes arch their backs - body passes over bar but COM can pass under it!
3. **Stability:** Lower COM → more stable (race cars, SUVs)
4. **Spacecraft Orientation:** Astronauts use conservation of angular momentum about COM
5. **Ballet Pirouettes:** Dancer spins around COM by redistributing mass

---

## Quick Revision Box

| Situation | Formula/Approach | Key Point |
| --- | --- | --- |
| Two particles | $x_{cm} = \frac{m_1x_1 + m_2x_2}{m_1 + m_2}$ | Closer to heavier mass |
| Symmetric body | Use symmetry | COM at geometric center |
| COM velocity | $\vec{v}_{cm} = \frac{\vec{p}_{total}}{M}$ | Total momentum / total mass |
| COM acceleration | $\vec{a}_{cm} = \frac{\vec{F}_{ext}}{M}$ | Only external forces matter |
| Explosion | COM continues original path | Internal forces cancel |
| No external force | $\vec{v}_{cm}$ = constant | Momentum conservation |

---

## Practice Problems

### Foundation Level

1. Three particles of masses 1 kg, 2 kg, and 3 kg are at positions (1, 2), (3, 1), and (2, 4) meters. Find the COM.
2. A uniform rod of length 2 m is cut into two pieces of lengths 0.5 m and 1.5 m. Find the shift in COM.
3. Find the COM of a uniform semicircular disc of radius 10 cm from its center.

### JEE Main Level

4. A man of mass 60 kg stands on one end of a 140 kg boat of length 4 m. He walks to the other end. How far does the boat move? (Water is frictionless)
5. A shell explodes at the highest point of its trajectory into two equal fragments. One fragment has velocity 3 times the velocity at highest point in the forward direction. Find the velocity of the other fragment.
6. Four particles each of mass $m$ are placed at the corners of a square of side $a$. Find the COM when one corner mass is removed.

### JEE Advanced Level

7. A uniform chain of mass $M$ and length $L$ is held vertically with its lower end just touching a horizontal table. It is released. What is the force on the table when a length $x$ has fallen?
8. Two particles of masses $m_1$ and $m_2$ start moving towards each other from rest due to mutual attraction. Find the position where they collide if initially separated by distance $d$.
9. A disc of radius $R$ has a circular hole of radius $R/2$ cut from it. The center of hole is at distance $R/2$ from center of disc. Find the COM of the remaining portion.

---

## Connection to Other Topics

**Prerequisites you should know:**

- [Vectors and Components](https://jeenotes.in/physics/kinematics/motion-2d/) - For 2D/3D COM calculations
- [Newton’s Laws](https://jeenotes.in/physics/laws-of-motion/) - For understanding forces on systems

**What’s next:**

- [Moment of Inertia](../moment-of-inertia/index.md) - Rotational analog of mass
- [Linear Momentum](https://jeenotes.in/physics/laws-of-motion/) - COM velocity relates to total momentum
- [Collisions](https://jeenotes.in/physics/work-energy-power/collisions/) - COM analysis simplifies collision problems

**Cross-chapter links:**

- [Projectile Motion](https://jeenotes.in/physics/kinematics/projectile-motion/) - COM follows parabolic path
- [Conservation of Energy](https://jeenotes.in/physics/work-energy-power/conservation-energy/) - COM motion and energy

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Centre of Mass is the weighted average position** of all mass in a system - like averaging test scores!

> 2. **Only external forces change COM motion** - internal forces (explosions, muscle movements) don’t affect it

> 3. **For symmetric bodies, use symmetry** to instantly locate COM - saves 2-3 minutes in exam!

> 4. **In JEE, look for:**
>
>    - Explosion problems → COM continues original path

>    - Frictionless surface → COM can’t move if no external force

>    - Man-boat problems → use COM conservation

> 5. **Memory aid:** “COM behaves as if all mass is concentrated there” - makes complex systems simple!
>
> **“The centre of mass is nature’s way of simplifying chaos into elegant simplicity.”**
>
> Master this, and you’ve unlocked 3-4 guaranteed marks in JEE. More importantly, you’ll see why Thor’s hammer spins so beautifully - physics, not magic!

---

From TestGuru · our mock-test platform

## You've read Centre of Mass.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=rotational-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Frotational-motion%2Fcentre-of-mass%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/rotational-motion/centre-of-mass/",this.page.identifier="/physics/rotational-motion/centre-of-mass/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="rotationalMotion" id="anim-rotationalMotion-1795396424192326552"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-rotationalMotion-1795396424192326552")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/rotational-motion/centre-of-mass/](https://jeenotes.in/physics/rotational-motion/centre-of-mass/) · raw HTML: `offline/physics/rotational-motion/centre-of-mass/index.html`_
