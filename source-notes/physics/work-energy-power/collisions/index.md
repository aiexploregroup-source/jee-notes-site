---
title: "Collisions"
source: "https://jeenotes.in/physics/work-energy-power/collisions/"
description: "Master elastic and inelastic collisions, coefficient of restitution, and collision formulas for JEE."
updated: "2026-08-01"
reading_time: "7 min read"
breadcrumb: "Physics"
position: "/ Topic 8 of 10"
html: "../../../../offline/physics/work-energy-power/collisions/index.html"
extracted: "2026-11-23"
---

> Master elastic and inelastic collisions, coefficient of restitution, and collision formulas for JEE.

## Prerequisites

Before studying this topic, review:

- [Kinetic Energy](../kinetic-energy/index.md) — KE formula and its properties
- [Conservation of Energy](../conservation-energy/index.md) — When and how energy is conserved
- [Newton’s Laws](../../laws-of-motion/index.md) — Momentum and impulse concepts

---

## What is a Collision?

A **collision** is a brief, strong interaction between two or more bodies. During collision:

- Large forces act for short time
- External forces (like gravity) can be neglected
- Momentum is **always conserved**

> **★ Key point · Fast X Car Crashes!**
>
> Every *Fast & Furious* movie is basically a physics lesson! When Dom’s car crashes into another in *Fast X* (2023), momentum is ALWAYS conserved — heavier cars at higher speeds pack more punch. But kinetic energy? That goes into crumpling metal, making noise, and generating heat. Most real car crashes are **inelastic collisions**!

---

## Interactive: Compare Collision Types

Click the buttons to see how elastic, inelastic, and perfectly inelastic collisions differ:

---

## Interactive Collision Simulator

Explore collisions in depth with this full-featured simulator. Adjust masses, velocities, and collision types to see:

- How momentum is **always conserved** (watch the momentum arrows)
- How kinetic energy behaves differently for elastic vs inelastic collisions
- The effect of the coefficient of restitution
- Special cases like equal mass velocity exchange

> **★ Key point · Try These Experiments**
>
> 1. **Equal masses**: Set m1 = m2 = 5 kg, u1 = 5 m/s, u2 = 0 (elastic) - velocities swap!

> 2. **Heavy hits light**: m1 = 10 kg, m2 = 1 kg, u1 = 5 m/s, u2 = 0 - watch the light ball fly!

> 3. **Perfectly inelastic**: Any masses moving toward each other - see maximum KE loss

> 4. **Partial inelastic**: Use the coefficient slider to explore intermediate cases

---

## Types of Collisions

| Type | Momentum | Kinetic Energy | $e$ |
| --- | --- | --- | --- |
| **Elastic** | Conserved | Conserved | 1 |
| **Inelastic** | Conserved | Not conserved | 0 < e < 1 |
| **Perfectly Inelastic** | Conserved | Maximum loss | 0 |

> **★ Key Point**
>
> **Momentum is ALWAYS conserved** in collisions (in the absence of external forces), regardless of whether kinetic energy is conserved.

---

## Coefficient of Restitution

The coefficient of restitution $e$ measures the “bounciness” of a collision:

$$\boxed{e = \frac{v_2 - v_1}{u_1 - u_2} = \frac{\text{velocity of separation}}{\text{velocity of approach}}}$$

where:

- $u_1, u_2$ = initial velocities of bodies 1 and 2
- $v_1, v_2$ = final velocities of bodies 1 and 2

### Values of e

| Collision Type | e Value | Physical Meaning |
| --- | --- | --- |
| Perfectly elastic | $e = 1$ | No KE loss |
| Inelastic | $0 < e < 1$ | Partial KE loss |
| Perfectly inelastic | $e = 0$ | Bodies stick together |

---

## Elastic Collision (1D)

For two bodies with masses $m_1$, $m_2$ and initial velocities $u_1$, $u_2$:

### Conservation Equations

**Momentum:**

$$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$$

**Kinetic Energy:**

$$\frac{1}{2}m_1u_1^2 + \frac{1}{2}m_2u_2^2 = \frac{1}{2}m_1v_1^2 + \frac{1}{2}m_2v_2^2$$

### Final Velocity Formulas

$$\boxed{v_1 = \frac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2}}$$

$$\boxed{v_2 = \frac{(m_2 - m_1)u_2 + 2m_1u_1}{m_1 + m_2}}$$

---

## Special Cases of Elastic Collision

### Case 1: Equal Masses ($m_1 = m_2$)

$$v_1 = u_2, \quad v_2 = u_1$$

**Velocities are exchanged!**

> **◐ In simple terms · Newton's Cradle in Laapataa Ladies**
>
> Ever noticed the classic desk toy where metal balls swing and transfer motion? That’s the **equal mass exchange** in action! In *Laapataa Ladies* (2024), the carrom scenes show similar physics — when the striker hits a coin of similar mass, the striker nearly stops while the coin shoots away!

If one body is at rest ($u_2 = 0$):

- Moving body stops ($v_1 = 0$)
- Stationary body moves with initial velocity ($v_2 = u_1$)

### Case 2: Heavy Body Hits Light Body at Rest ($m_1 >> m_2$, $u_2 = 0$)

$$v_1 \approx u_1, \quad v_2 \approx 2u_1$$

Heavy body continues almost unchanged; light body moves at twice the speed.

### Case 3: Light Body Hits Heavy Body at Rest ($m_1 << m_2$, $u_2 = 0$)

$$v_1 \approx -u_1, \quad v_2 \approx 0$$

Light body bounces back with nearly same speed; heavy body barely moves.

### Case 4: Heavy Body at Rest ($m_2 >> m_1$, $u_2 = 0$)

$$v_1 \approx -u_1, \quad v_2 \approx 0$$

Light body rebounds, heavy body remains stationary.

---

## Perfectly Inelastic Collision

Bodies **stick together** after collision.

> **★ Key point · Jawan Train Scene**
>
> In *Jawan* (2023), when train cars couple together, that’s a **perfectly inelastic collision**! Two objects become one. They move with a common velocity afterward. Maximum kinetic energy is “lost” to deformation and sound — but momentum is ALWAYS conserved!

### Final Velocity

$$\boxed{v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}}$$

This is the velocity of the combined mass $(m_1 + m_2)$.

### Loss in Kinetic Energy

$$\boxed{\Delta KE = \frac{1}{2}\frac{m_1m_2}{m_1 + m_2}(u_1 - u_2)^2}$$

This is the **maximum possible loss** for given masses and velocities.

> **⚠ Trap · Common Mistake**
>
> “Perfectly inelastic” doesn’t mean ALL kinetic energy is lost! Some KE is retained by the combined moving mass. Only the *maximum possible* amount is lost.

---

## Inelastic Collision (General)

Using coefficient of restitution $e$:

$$v_2 - v_1 = e(u_1 - u_2)$$

Combined with momentum conservation:

$$v_1 = \frac{m_1u_1 + m_2u_2 - em_2(u_1 - u_2)}{m_1 + m_2}$$

$$v_2 = \frac{m_1u_1 + m_2u_2 + em_1(u_1 - u_2)}{m_1 + m_2}$$

### Loss in Kinetic Energy

$$\Delta KE = \frac{1}{2}\frac{m_1m_2}{m_1 + m_2}(1 - e^2)(u_1 - u_2)^2$$

---

## Two-Dimensional Collisions

For 2D collisions, apply conservation separately:

**x-component:**

$$m_1u_{1x} + m_2u_{2x} = m_1v_{1x} + m_2v_{2x}$$

**y-component:**

$$m_1u_{1y} + m_2u_{2y} = m_1v_{1y} + m_2v_{2y}$$

> **★ Important Result**
>
> In a 2D elastic collision between **equal masses** where one is initially at rest, the bodies move **perpendicular** to each other after collision.
>
> $$\vec{v_1} \perp \vec{v_2}$$

---

## Worked Examples

### Example 1: Elastic Collision

> **↗ Connection · Problem**
>
> Two balls of masses 1 kg and 2 kg collide head-on with velocities 3 m/s and -2 m/s. Find velocities after elastic collision.

**Solution:**
Using formulas:

$$v_1 = \frac{(1-2)(3) + 2(2)(-2)}{1+2} = \frac{-3 - 8}{3} = \frac{-11}{3} = -3.67 \text{ m/s}$$

$$v_2 = \frac{(2-1)(-2) + 2(1)(3)}{1+2} = \frac{-2 + 6}{3} = \frac{4}{3} = 1.33 \text{ m/s}$$

The 1 kg ball moves at **3.67 m/s (left)** and 2 kg ball moves at **1.33 m/s (right)**.

### Example 2: Perfectly Inelastic Collision

> **↗ Connection · Problem**
>
> A 4 kg ball moving at 8 m/s collides with a 2 kg ball at rest. They stick together. Find the common velocity and energy loss.

**Solution:**

**Common velocity:**

$$v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2} = \frac{4(8) + 2(0)}{4 + 2} = \frac{32}{6} = \boxed{\frac{16}{3} \approx 5.33 \text{ m/s}}$$

**Energy loss:**

$$\Delta KE = \frac{1}{2}\frac{m_1m_2}{m_1 + m_2}(u_1 - u_2)^2 = \frac{1}{2}\frac{4 \times 2}{6}(8)^2 = \frac{4}{6}(64) = \boxed{\frac{128}{3} \approx 42.67 \text{ J}}$$

### Example 3: Using Coefficient of Restitution

> **↗ Connection · Problem**
>
> A ball hits a wall at 10 m/s and rebounds at 6 m/s. Find coefficient of restitution.

**Solution:**
Wall is stationary before and after collision.

$$e = \frac{v_{ball} - v_{wall}}{u_{wall} - u_{ball}} = \frac{6 - 0}{0 - (-10)} = \frac{6}{10} = \boxed{0.6}$$

### Example 4: 2D Elastic Collision

> **↗ Connection · Problem**
>
> Two equal masses collide. One is at rest, the other moves at 10 m/s. After collision, if the first moves at 30° to original direction, find both final speeds.

**Solution:**
For equal mass elastic collision, bodies move perpendicular after collision.

So the second ball moves at 90° - 30° = 60° to original direction.

Momentum conservation (x):

$$m(10) = m(v_1\cos30°) + m(v_2\cos60°)$$

$$10 = v_1(0.866) + v_2(0.5)$$

Momentum conservation (y):

$$0 = m(v_1\sin30°) - m(v_2\sin60°)$$

$$v_1(0.5) = v_2(0.866)$$

$$v_1 = 1.732v_2$$

Substituting:

$$10 = 1.732v_2(0.866) + v_2(0.5) = 1.5v_2 + 0.5v_2 = 2v_2$$

$$v_2 = \boxed{5 \text{ m/s}}, \quad v_1 = \boxed{8.66 \text{ m/s}}$$

---

## Summary Table

| Type | Final Velocities | KE Loss |
| --- | --- | --- |
| Elastic | Use standard formulas | 0 |
| Perfectly inelastic | $v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}$ | Maximum |
| Inelastic (general) | Use $e$ with momentum | $\propto (1-e^2)$ |

---

## Practice Problems

1. A 3 kg ball moving at 4 m/s collides elastically with a 1 kg ball at rest. Find final velocities.
2. A ball dropped from height 2 m rebounds to height 1.28 m. Find coefficient of restitution.
3. Two balls (2 kg each) moving at 6 m/s toward each other collide inelastically ($e = 0.5$). Find final velocities and energy loss.
4. In a perfectly inelastic collision, show that the fraction of KE lost is $\frac{m_2}{m_1 + m_2}$ when $m_2$ is at rest.

---

---

## Related Topics

### Within Work, Energy & Power

- [Work-Energy Theorem](../work-energy-theorem/index.md) — Connects work and KE change
- [Conservation of Energy](../conservation-energy/index.md) — For elastic collisions

### Connected Chapters

- [Center of Mass](../../rotational-motion/index.md) — System approach to collisions
- [Projectile Motion](../../kinematics/projectile-motion/index.md) — 2D collision problems
- [Relative Velocity](../../kinematics/relative-velocity/index.md) — Velocity of approach/separation

### Real-World Applications

- [Atoms and Nuclei](../../atoms-nuclei/index.md) — Nuclear collisions and scattering
- [Kinetic Theory](../../thermodynamics/index.md) — Molecular collisions in gases

---

From TestGuru · our mock-test platform

## You've read Collisions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=work-energy-power&tg_exam=jee-main&tg_page=%2Fphysics%2Fwork-energy-power%2Fcollisions%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/work-energy-power/collisions/",this.page.identifier="/physics/work-energy-power/collisions/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="collisionDemo" id="anim-collisionDemo-1795396424539634241"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-collisionDemo-1795396424539634241")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="collisionsInteractive" id="anim-collisionsInteractive-1795396424539675137"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-collisionsInteractive-1795396424539675137")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/work-energy-power/collisions/](https://jeenotes.in/physics/work-energy-power/collisions/) · raw HTML: `offline/physics/work-energy-power/collisions/index.html`_
