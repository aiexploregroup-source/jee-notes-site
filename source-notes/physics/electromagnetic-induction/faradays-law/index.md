---
title: "Faraday's Laws of Electromagnetic Induction"
source: "https://jeenotes.in/physics/electromagnetic-induction/faradays-law/"
description: "Master Faraday's revolutionary laws that power everything from generators to wireless charging - the foundation of electromagnetic induction"
updated: "2026-10-18"
reading_time: "8 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 10"
html: "../../../../offline/physics/electromagnetic-induction/faradays-law/index.html"
extracted: "2026-11-23"
---

> Master Faraday's revolutionary laws that power everything from generators to wireless charging - the foundation of electromagnetic induction

## Movie Hook: The Arc Reactor in Iron Man

Remember Tony Stark’s arc reactor? That glowing device in his chest isn’t just science fiction - it’s based on **Faraday’s laws of electromagnetic induction**! When magnetic flux changes through a coil, it generates electricity. The arc reactor uses rotating magnetic fields to induce massive currents, powering the Iron Man suit. Every time you charge your phone wirelessly or use a power generator, you’re using Faraday’s discovery from 1831.

## The Discovery That Changed the World

In 1831, Michael Faraday discovered that electricity and magnetism are two sides of the same coin. If Oersted showed that current creates magnetism (1820), Faraday proved the reverse: **changing magnetism creates current**.

### Faraday’s Experimental Setup

Faraday wound two separate coils around an iron ring. When he connected one coil to a battery, the other coil (not connected to anything!) showed a momentary deflection in a galvanometer. The key insight: the deflection occurred only when the current was **changing** - when switching on or off.

## Faraday’s First Law

> **Whenever the magnetic flux linked with a coil changes, an electromotive force (EMF) is induced in the coil.**

The induced EMF exists only as long as the flux is changing. No change in flux = no induced EMF.

### Ways to Change Magnetic Flux

1. **Change the magnetic field strength** (B): Move a magnet toward/away from a coil
2. **Change the area** (A): Expand/compress a loop in a magnetic field
3. **Change the orientation** (θ): Rotate a coil in a magnetic field

All three methods appear in JEE problems!

## Faraday’s Second Law

> **The magnitude of induced EMF is directly proportional to the rate of change of magnetic flux.**

Mathematically:

$$\mathcal{E} = -N \frac{d\Phi_B}{dt}$$

Where:

- $\mathcal{E}$ = Induced EMF (volts)
- $N$ = Number of turns in coil
- $\Phi_B$ = Magnetic flux = $\vec{B} \cdot \vec{A} = BA\cos\theta$
- The negative sign comes from Lenz’s law

### Understanding the Formula

**Flux linkage**: For N turns, total flux linkage = $N\Phi_B$

The faster you change the flux, the greater the induced EMF. This is why:

- Rapidly moving a magnet induces more EMF than slowly moving it
- More turns give more EMF (each turn contributes)
- Generators spin at high speeds to maximize $\frac{d\Phi}{dt}$

## Memory Trick: “FRAC”

**F**araday’s law: **R**ate of **A**rea-field **C**hange

The induced EMF depends on how fast you change the “area-field” product ($BA$).

## Magnetic Flux: The Core Concept

Think of magnetic flux as “how many magnetic field lines pass through a surface.”

$$\Phi_B = \int \vec{B} \cdot d\vec{A} = BA\cos\theta$$

For uniform field and flat surface:

- Maximum flux: θ = 0° (surface perpendicular to field)
- Zero flux: θ = 90° (surface parallel to field)

**Units**:

- Flux: Weber (Wb) = T·m² = V·s
- EMF: Volt (V) = Wb/s

## Types of Problems in JEE

### Type 1: Magnet Moving Through Coil

**Setup**: Bar magnet moves through a coil with N turns, area A.

**Solution Strategy**:

1. Identify how B changes with position/time
2. Calculate $\Phi_B = BA\cos\theta$ at different positions
3. Find $\mathcal{E} = -N\frac{d\Phi_B}{dt}$

### Type 2: Rotating Coil in Magnetic Field

**Setup**: Rectangular coil rotates with angular velocity ω in uniform field B.

$$\Phi_B = NBA\cos\theta = NBA\cos(\omega t)$$

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = NBA\omega\sin(\omega t)$$

$$\mathcal{E}_{max} = NBA\omega$$

This is the **AC generator principle** (see [AC circuits](../ac-circuits/index.md))!

### Type 3: Changing Area

**Setup**: Conducting rod slides on rails in magnetic field.

**Key**: Area increases as $A = \ell x$ where x changes with time.

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -B\frac{dA}{dt} = -B\ell\frac{dx}{dt} = -B\ell v$$

## Common Mistakes Students Make

❌ **Mistake 1**: Thinking static magnetic fields induce EMF
✅ **Reality**: Only **changing** flux induces EMF

❌ **Mistake 2**: Forgetting the cosθ factor in flux
✅ **Reality**: $\Phi_B = BA\cos\theta$ - angle matters!

❌ **Mistake 3**: Using the wrong angle
✅ **Reality**: θ is angle between $\vec{B}$ and area vector $\vec{A}$ (perpendicular to surface)

❌ **Mistake 4**: Confusing flux with flux density
✅ **Reality**:

- Flux density = B (Tesla)
- Flux = Φ = BA (Weber)

❌ **Mistake 5**: Ignoring the number of turns
✅ **Reality**: EMF is proportional to N

## Interactive Exploration

Try changing:

- Speed of magnet motion
- Number of coil turns
- Strength of magnet

Observe how induced EMF varies!

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: A circular coil of 100 turns and radius 5 cm is placed perpendicular to a magnetic field of 0.2 T. If the field is reduced to zero in 0.1 s, find the induced EMF.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: N = 100, r = 5 cm = 0.05 m, B₁ = 0.2 T, B₂ = 0, Δt = 0.1 s</p><p>Area: $A = \pi r^2 = \pi(0.05)^2 = 7.85 \times 10^{-3}$ m²</p><p>Initial flux: $\Phi_1 = B_1A = 0.2 \times 7.85 \times 10^{-3} = 1.57 \times 10^{-3}$ Wb</p><p>Final flux: $\Phi_2 = 0$</p><p>Change in flux: $\Delta\Phi = \Phi_2 - \Phi_1 = -1.57 \times 10^{-3}$ Wb</p><p>Induced EMF:</p>$$|\mathcal{E}| = N\frac{|\Delta\Phi|}{\Delta t} = 100 \times \frac{1.57 \times 10^{-3}}{0.1} = 1.57 \text{ V}$$<p><strong>Answer: 1.57 V</strong></p></div></details>

**Problem 1.2**: A coil of 200 turns and area 0.01 m² is rotating at 50 rev/s in a magnetic field of 0.5 T. Find the maximum induced EMF.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: N = 200, A = 0.01 m², f = 50 rev/s, B = 0.5 T</p><p>Angular velocity: $\omega = 2\pi f = 2\pi \times 50 = 100\pi$ rad/s</p><p>Maximum EMF in rotating coil:</p>$$\mathcal{E}_{max} = NBA\omega = 200 \times 0.5 \times 0.01 \times 100\pi$$<p></p>$$\mathcal{E}_{max} = 100\pi = 314.16 \text{ V}$$<p><strong>Answer: 314 V</strong></p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: A square loop of side 10 cm is placed with its plane perpendicular to a magnetic field. The field varies as $B = 0.2t^2$ (in Tesla, t in seconds). Calculate the induced EMF at t = 5 s.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: Side a = 10 cm = 0.1 m, $B = 0.2t^2$ T</p><p>Area: $A = a^2 = (0.1)^2 = 0.01$ m² (constant)</p><p>Flux: $\Phi_B = BA = 0.2t^2 \times 0.01 = 2 \times 10^{-3}t^2$ Wb</p><p>Induced EMF:</p>$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -\frac{d}{dt}(2 \times 10^{-3}t^2) = -4 \times 10^{-3}t$$<p>At t = 5 s:</p>$$|\mathcal{E}| = 4 \times 10^{-3} \times 5 = 0.02 \text{ V} = 20 \text{ mV}$$<p><strong>Answer: 20 mV</strong></p></div></details>

**Problem 2.2**: A conducting rod of length 20 cm moves with velocity 5 m/s perpendicular to a magnetic field of 0.8 T. The rod, field, and velocity are mutually perpendicular. Find the induced EMF.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>This is motional EMF (will be covered in detail in <a href="../motional-emf/index.md">motional-emf.md</a>)</p><p>Given: ℓ = 20 cm = 0.2 m, v = 5 m/s, B = 0.8 T</p><p>For a straight conductor moving perpendicular to B:</p>$$\mathcal{E} = B\ell v = 0.8 \times 0.2 \times 5 = 0.8 \text{ V}$$<p><strong>Answer: 0.8 V</strong></p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: A triangular loop ABC is placed in a non-uniform magnetic field given by $\vec{B} = B_0x\hat{k}$ where x is horizontal distance. The triangle has vertices at A(0,0), B(a,0), C(a/2, h). Find the magnetic flux through the triangle.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Since B varies with x, we must integrate:</p>$$\Phi_B = \int \vec{B} \cdot d\vec{A}$$<p>For a vertical strip at distance x of width dx:</p><ul><li>Height of strip at position x: $y(x) = \begin{cases} 2hx/a &amp; 0 \leq x \leq a/2 \\ 2h(a-x)/a &amp; a/2 \leq x \leq a \end{cases}$</li></ul><p>Strip area: $dA = y(x)dx$</p><p>Flux through strip: $d\Phi = B_0x \cdot y(x)dx$</p><p>The field is <strong>not</strong> symmetric about $x = a/2$ (it grows with x), so integrate both halves:</p>$$\Phi_B = \int_0^{a/2} B_0x\cdot\frac{2hx}{a}dx + \int_{a/2}^{a} B_0x\cdot\frac{2h(a-x)}{a}dx = \frac{B_0ha^2}{12} + \frac{B_0ha^2}{6} = \frac{B_0ha^2}{4}$$<p>(Check: for $B \propto x$, $\Phi = B_0\,\bar{x}\,(\text{area}) = B_0 \cdot \frac{a}{2} \cdot \frac{ah}{2}$.)</p><p><strong>Answer</strong>: $\Phi_B = \frac{B_0ha^2}{4}$</p></div></details>

**Problem 3.2**: A circular loop of radius R is placed in a time-varying magnetic field $B = B_0(1 + \alpha t)$ perpendicular to its plane. A resistance r is connected across a diameter. Find the current through the resistor.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: Radius R, $B = B_0(1 + \alpha t)$, resistance r across diameter</p><p>Area of circle: $A = \pi R^2$</p><p>Flux: $\Phi_B = BA = B_0(1 + \alpha t)\pi R^2$</p><p>Induced EMF:</p>$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -B_0\alpha\pi R^2$$<p><strong>Key insight</strong>: The diameter splits the loop into two halves. Each half-loop encloses flux $\frac{1}{2}\pi R^2 B$, so each has EMF $\frac{|\mathcal{E}|}{2} = \frac{1}{2}B_0\alpha\pi R^2$ circulating in the <strong>same</strong> sense. In the common diameter these two EMFs drive currents in <strong>opposite</strong> directions.</p><p>For a uniform ring (each semicircle of resistance $R_a$), mesh analysis gives equal mesh currents $i_1 = i_2 = \frac{|\mathcal{E}|}{2R_a}$, so the net current through the diameter is $i_1 - i_2 = 0$.</p><p><strong>Answer</strong>: $I = 0$ through the resistor r; a current $\frac{B_0\alpha\pi R^2}{2R_a}$ circulates around the ring.</p></div></details>

## Connection to Other Chapters

- [**Magnetism**](../../magnetism/index.md): Magnetic field B is the source that creates flux
- [**Current Electricity**](../../current-electricity/index.md): Induced EMF drives current through [Ohm’s law](../../current-electricity/ohms-law/index.md)
- [**Lenz’s Law**](../lenzs-law/index.md): Explains the negative sign in Faraday’s law
- [**Motional EMF**](../motional-emf/index.md): Special case where conductor moves in field
- [**Conservation of Energy**](../../work-energy-power/conservation-energy/index.md): Energy conversion in induction

## Real-World Applications

1. **Electric Generators**: Convert mechanical energy to electrical (power plants)
2. **Wireless Charging**: Your phone uses changing magnetic fields
3. **Transformers**: Change AC voltage levels (covered in [transformers.md](../transformers/index.md))
4. **Induction Cooktops**: Heat metal pans using induced currents
5. **Metal Detectors**: Detect induced currents in metal objects
6. **Electromagnetic Braking**: Used in trains and roller coasters

## Key Takeaways

✓ EMF is induced only when magnetic flux **changes**
✓ Induced EMF = $-N\frac{d\Phi_B}{dt}$ (fundamental formula)
✓ Three ways to change flux: change B, A, or θ
✓ More turns → more EMF (directly proportional to N)
✓ Faster change → more EMF (rate matters)
✓ The negative sign indicates direction (Lenz’s law)

## Quick Revision Formula Sheet

| Quantity | Formula | Units |
| --- | --- | --- |
| Magnetic Flux | $\Phi_B = BA\cos\theta$ | Wb (Weber) |
| Induced EMF | $\mathcal{E} = -N\frac{d\Phi_B}{dt}$ | V (Volt) |
| Rotating Coil | $\mathcal{E} = NBA\omega\sin(\omega t)$ | V |
| Max EMF (AC) | $\mathcal{E}_{max} = NBA\omega$ | V |
| Motional EMF | $\mathcal{E} = B\ell v$ | V |

---

*Next Topic*: [Lenz’s Law](../lenzs-law/index.md) - Understanding the direction of induced current

From TestGuru · our mock-test platform

## You've read Faraday's Laws of Electromagnetic Induction.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Ffaradays-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/faradays-law/",this.page.identifier="/physics/electromagnetic-induction/faradays-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423211226716"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423211226716")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423211493606"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423211493606")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/faradays-law/](https://jeenotes.in/physics/electromagnetic-induction/faradays-law/) · raw HTML: `offline/physics/electromagnetic-induction/faradays-law/index.html`_
