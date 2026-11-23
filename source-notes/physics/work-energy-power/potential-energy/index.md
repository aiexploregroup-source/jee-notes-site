---
title: "Potential Energy"
source: "https://jeenotes.in/physics/work-energy-power/potential-energy/"
description: "Understand gravitational and spring potential energy, and the relation between force and potential energy."
updated: "2026-08-01"
reading_time: "4 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 10"
html: "../../../../offline/physics/work-energy-power/potential-energy/index.html"
extracted: "2026-11-23"
---

> Understand gravitational and spring potential energy, and the relation between force and potential energy.

## Prerequisites

Before studying this topic, review:

- [Work Done by Forces](../work-done/index.md) - Work by gravity and springs
- [Kinetic Energy](../kinetic-energy/index.md) - Energy concepts

---

## What is Potential Energy?

**Potential energy** is energy stored in a system due to the position or configuration of its parts. Unlike kinetic energy (energy of motion), potential energy represents the *potential* to do work.

### Key Characteristics

- Depends on **position** or **configuration**
- Associated with **conservative forces** only
- Can be **positive, negative, or zero**
- Reference point is arbitrary (only *changes* matter)

---

## Gravitational Potential Energy

### Near Earth’s Surface

For a body of mass $m$ at height $h$ above a reference level:

$$\boxed{U_g = mgh}$$

where:

- $m$ = mass (kg)
- $g$ = acceleration due to gravity (m/s²)
- $h$ = height above reference (m)

> **◐ In simple terms · Reference Level**
>
> The choice of reference (where $h = 0$) is arbitrary. Usually choose:
>
> - Ground level

> - Starting position

> - Lowest point in the problem

### Interactive Demo: Visualize Potential Energy

Explore how potential energy changes with height and spring compression.

### General Gravitational PE

For two masses $M$ and $m$ separated by distance $r$ (as discussed in [Gravitation](../../gravitation/gravitational-field-potential/index.md)):

$$U = -\frac{GMm}{r}$$

The negative sign indicates a bound system (energy needed to separate).

---

## Spring Potential Energy

For a spring stretched or compressed by $x$ from its natural length:

$$\boxed{U_s = \frac{1}{2}kx^2}$$

where:

- $k$ = spring constant (N/m)
- $x$ = extension or compression (m)

### Properties

- Always **positive** (or zero at natural length)
- Symmetric for extension and compression
- Maximum when spring is most deformed
- Zero at natural length ($x = 0$)

> **★ Key point · Physical Meaning**
>
> Spring PE represents work needed to deform the spring from its natural length. It’s the work you do *against* the spring force.

---

## Relation Between Force and Potential Energy

For conservative forces, there’s a fundamental relationship:

$$\boxed{F = -\frac{dU}{dx}}$$

In three dimensions:

$$\vec{F} = -\nabla U = -\left(\frac{\partial U}{\partial x}\hat{i} + \frac{\partial U}{\partial y}\hat{j} + \frac{\partial U}{\partial z}\hat{k}\right)$$

### Interpretation

- **Negative sign**: Force points in direction of *decreasing* PE
- Force is stronger where PE changes rapidly (steep slope)
- At equilibrium points ($F = 0$), PE has maximum, minimum, or inflection

### Examples

1. **Gravity** ($U = mgh$): $F = -mg$ (force downward)
2. **Spring** ($U = \frac{1}{2}kx^2$): $F = -kx$ (restoring force)

---

## Work Done and Potential Energy Change

For conservative forces:

$$\boxed{W_{conservative} = -\Delta U = U_i - U_f}$$

### Proof

$$W = \int F\,dx = \int -\frac{dU}{dx}dx = -(U_f - U_i) = -\Delta U$$

> **★ Key point · Key Relationship**
>
> When a conservative force does **positive work**, potential energy **decreases**.

> When potential energy **increases**, the conservative force does **negative work**.

---

## Equilibrium Analysis Using PE

This analysis connects to [Newton’s Laws](../../laws-of-motion/index.md) where $F = 0$ at equilibrium.

### Types of Equilibrium

| Type | $F = 0$ | $\frac{d^2U}{dx^2}$ | PE Curve | Stability |
| --- | --- | --- | --- | --- |
| Stable | Yes | $> 0$ | Minimum | Returns when displaced |
| Unstable | Yes | $< 0$ | Maximum | Moves away when displaced |
| Neutral | Yes | $= 0$ | Flat | Stays at new position |

### Example: PE Curve Analysis

For $U(x) = x^3 - 3x$:

- $F = -\frac{dU}{dx} = -(3x^2 - 3) = 3 - 3x^2$
- Equilibrium at $x = \pm 1$ (where $F = 0$)
- $\frac{d^2U}{dx^2} = 6x$
  - At $x = 1$: $\frac{d^2U}{dx^2} = 6 > 0$ → **Stable**
  - At $x = -1$: $\frac{d^2U}{dx^2} = -6 < 0$ → **Unstable**

---

## Common Potential Energy Functions

| System | Potential Energy | Force |
| --- | --- | --- |
| Gravitational (near Earth) | $mgh$ | $-mg$ |
| Spring | $\frac{1}{2}kx^2$ | $-kx$ |
| Gravitational (general) | $-\frac{GMm}{r}$ | $-\frac{GMm}{r^2}$ |
| [Electric](../../electrostatics/electric-potential/index.md) | $\frac{kq_1q_2}{r}$ | $\frac{kq_1q_2}{r^2}$ |

---

## Worked Examples

### Example 1: Spring Compression

> **↗ Connection · Problem**
>
> A spring (k = 400 N/m) is compressed by 15 cm. How much potential energy is stored?

**Solution:**

$$U = \frac{1}{2}kx^2 = \frac{1}{2}(400)(0.15)^2 = \frac{1}{2}(400)(0.0225) = \boxed{4.5 \text{ J}}$$

### Example 2: Force from PE

> **↗ Connection · Problem**
>
> The potential energy of a particle is given by $U = 3x^2 + 5x + 2$ J. Find the force at x = 2 m.

**Solution:**

$$F = -\frac{dU}{dx} = -(6x + 5)$$

At $x = 2$:

$$F = -(6 \times 2 + 5) = -17 \text{ N}$$

The force is $\boxed{17 \text{ N}}$ in the negative x-direction.

### Example 3: Equilibrium Points

> **↗ Connection · Problem**
>
> For $U(x) = x^4 - 4x^2$, find equilibrium points and determine their stability.

**Solution:**

1. Find equilibrium ($F = 0$):

   $$F = -\frac{dU}{dx} = -(4x^3 - 8x) = -4x(x^2 - 2) = 0$$

$$x = 0, \pm\sqrt{2}$$
2. Check stability ($\frac{d^2U}{dx^2}$):

   $$\frac{d^2U}{dx^2} = 12x^2 - 8$$

- At $x = 0$: $12(0) - 8 = -8 < 0$ → **Unstable**
- At $x = \pm\sqrt{2}$: $12(2) - 8 = 16 > 0$ → **Stable**

---

## Practice Problems

1. A 2 kg ball is dropped from 5 m. What is its PE at the top and bottom? (Take bottom as reference)
2. A spring (k = 200 N/m) stretched from 10 cm to 30 cm. Calculate the change in PE.
3. Given $U(x) = x^2 - 6x + 10$ J, find the position of stable equilibrium and the force at x = 5 m.

---

From TestGuru · our mock-test platform

## You've read Potential Energy.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=work-energy-power&tg_exam=jee-main&tg_page=%2Fphysics%2Fwork-energy-power%2Fpotential-energy%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/work-energy-power/potential-energy/",this.page.identifier="/physics/work-energy-power/potential-energy/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="energyBar" id="anim-energyBar-1795396424558573419"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-energyBar-1795396424558573419")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/work-energy-power/potential-energy/](https://jeenotes.in/physics/work-energy-power/potential-energy/) · raw HTML: `offline/physics/work-energy-power/potential-energy/index.html`_
