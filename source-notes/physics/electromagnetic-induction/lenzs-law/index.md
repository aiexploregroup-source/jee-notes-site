---
title: "Lenz's Law - The Opposition Principle"
source: "https://jeenotes.in/physics/electromagnetic-induction/lenzs-law/"
description: "Master Lenz's law and understand why nature always opposes change in magnetic flux - the key to predicting current direction in electromagnetic induction"
updated: "2026-10-18"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 10"
html: "../../../../offline/physics/electromagnetic-induction/lenzs-law/index.html"
extracted: "2026-11-23"
---

> Master Lenz's law and understand why nature always opposes change in magnetic flux - the key to predicting current direction in electromagnetic induction

## Movie Hook: Electromagnetic Braking in Bullet Trains

In high-speed trains like the Japanese Shinkansen or the Shanghai Maglev, there are no traditional brakes grinding metal on metal. Instead, they use **electromagnetic braking** based on Lenz’s law! When strong magnets move past metal plates, they induce currents that create opposing magnetic fields, slowing the train smoothly. It’s the same principle that helps the Iron Man suit make controlled landings - opposing forces from induced magnetic fields.

## The Negative Sign Mystery

In Faraday’s law, we wrote:

$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

Why the negative sign? This is where **Lenz’s law** comes in.

## Lenz’s Law Statement

> **The direction of induced EMF (and hence induced current) is such that it opposes the change in magnetic flux that produced it.**

**Simple version**: Nature doesn’t like change. When you try to increase flux, induced current creates flux to decrease it. When you try to decrease flux, induced current creates flux to increase it.

## The Opposition Principle

Think of Lenz’s law as nature’s “resistance to change”:

**If flux is increasing** → Induced current creates field opposing the increase
**If flux is decreasing** → Induced current creates field opposing the decrease

The induced magnetic field always tries to **maintain the status quo**.

## Memory Trick: “Nature is LAZY”

**L**enz’s law = **A**lways opposes **Z**ero **Y**ield (the change)

Nature is lazy and doesn’t want things to change. The induced current flows in a direction to oppose whatever change you’re trying to make.

## Why Lenz’s Law Follows Conservation of Energy

Imagine what would happen if Lenz’s law worked opposite (induced current **assisted** the change):

1. You move magnet toward coil → Induced current creates field that pulls magnet faster
2. Magnet accelerates → More flux change → More induced current
3. More current → Stronger pull → Even faster acceleration
4. **Result**: Infinite energy from nothing!

This violates energy conservation. Therefore:

**Lenz’s Law = Conservation of Energy**

The opposing force means you must do **work** to change the flux. This work is converted into electrical energy (induced current).

$$\text{Mechanical Work Input} = \text{Electrical Energy Output}$$

## How to Apply Lenz’s Law: Step-by-Step

### Method 1: Flux Change Method (Most Common)

**Step 1**: Identify if magnetic flux through loop is **increasing** or **decreasing**

**Step 2**: Determine direction of **external** magnetic field

**Step 3**: Apply Lenz’s law:

- If flux increasing: Induced field **opposes** external field (opposite direction)
- If flux decreasing: Induced field **supports** external field (same direction)

**Step 4**: Use right-hand thumb rule to find current direction that produces the induced field

### Method 2: Force/Motion Method

**Step 1**: Identify the motion (magnet approaching, receding, etc.)

**Step 2**: Determine what force would **oppose** this motion

**Step 3**: Find current direction that creates this opposing force

## Detailed Examples

### Example 1: Bar Magnet Approaching a Coil

**Scenario**: North pole of magnet moves toward a coil from left.

**Analysis**:

1. Flux through coil is **increasing** (more field lines entering)
2. External field is toward **right** (from N to S)
3. To oppose increase, induced field must be toward **left** (opposite)
4. Induced field toward left requires current to be **counterclockwise** (viewed from magnet side)
5. The coil’s left face becomes a **North pole** (repels approaching magnet)

**Force**: Repulsive (opposes approach) → You must push harder to move magnet

**Approaching magnet**: Same pole forms on near face (repulsion)
**Receding magnet**: Opposite pole forms on near face (attraction)

Both cases **oppose the motion**!

### Example 2: Magnet Leaving the Coil

**Scenario**: North pole of magnet moves away from coil toward right.

**Analysis**:

1. Flux through coil is **decreasing** (field lines leaving)
2. External field is toward **right**
3. To oppose decrease, induced field must be toward **right** (same direction)
4. Induced field toward right requires current to be **clockwise** (viewed from magnet side)
5. The coil’s left face becomes a **South pole** (attracts receding magnet)

**Force**: Attractive (opposes recession) → Magnet experiences a drag

## Right-Hand Rules for Direction

### For Current Direction from Field Direction

**Right-Hand Thumb Rule**:

- Curl fingers in direction of induced current
- Thumb points in direction of induced magnetic field

### For Force on Current

**Fleming’s Left-Hand Rule**: (for force on current-carrying conductor)

- **F**irst finger: **F**ield direction
- Se**c**ond finger: **C**urrent direction
- Thu**m**b: **M**otion/Force direction

## Common JEE Problem Types

### Type 1: Falling Magnet Through Coil

**Problem**: A bar magnet falls through a vertical coil. Compare falling speed to free fall.

**Solution**:

1. As magnet enters: Flux increases → Induced current opposes motion → **Upward force**
2. As magnet exits: Flux decreases → Induced current opposes motion → **Upward force**
3. Net force is always upward (opposing gravity)
4. **Result**: Magnet falls **slower** than free fall

**Energy**: Gravitational PE → Electrical energy + reduced KE

### Type 2: Conductor Moving in Magnetic Field

**Problem**: A conducting rod moves on rails in perpendicular magnetic field.

**Solution**:

1. As rod moves right, flux through circuit increases
2. Induced current creates field opposing this increase
3. Current direction: Using Lenz’s law or force analysis
4. Force on rod (Fleming’s rule): **Opposes motion** (toward left)
5. You must apply force to maintain constant velocity

### Type 3: Expanding/Contracting Loops

**Problem**: A circular loop expands in a perpendicular magnetic field.

**Solution**:

1. As area increases, flux increases
2. Induced current opposes increase
3. Induced field is **opposite** to external field
4. Force on loop: **Inward** (opposes expansion)

## The Negative Sign in Faraday’s Law

The negative sign in $\mathcal{E} = -N\frac{d\Phi_B}{dt}$ mathematically represents Lenz’s law:

**If flux is increasing**: $\frac{d\Phi_B}{dt} > 0$ → $\mathcal{E} < 0$ (negative EMF)

**If flux is decreasing**: $\frac{d\Phi_B}{dt} < 0$ → $\mathcal{E} > 0$ (positive EMF)

The sign tells us the EMF opposes the change.

## Common Mistakes Students Make

❌ **Mistake 1**: Thinking induced field is always opposite to external field
✅ **Reality**: Induced field opposes the **change**, not necessarily the field itself

- Flux increasing → Induced field opposes external field
- Flux decreasing → Induced field supports external field

❌ **Mistake 2**: Confusing force direction with current direction
✅ **Reality**: Use separate rules:

- Lenz’s law → Current direction
- Fleming’s left-hand rule → Force direction

❌ **Mistake 3**: Forgetting that Lenz’s law is about opposing **change**
✅ **Reality**: Static fields produce no induction, regardless of strength

❌ **Mistake 4**: Applying right-hand rule incorrectly
✅ **Reality**:

- Curl fingers along current
- Thumb shows field direction **inside** the loop

❌ **Mistake 5**: Not considering energy conservation
✅ **Reality**: If you’re not sure, ask: “Does this violate energy conservation?”

## Interactive Exploration

Experiment with:

- Moving magnet toward/away from coil
- Changing magnet strength
- Reversing magnet polarity

Observe:

- Current direction
- Force on magnet
- Energy transformations

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: A bar magnet is dropped through a copper coil. Will it fall with acceleration g? Why?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>Answer</strong>: No, it will fall with acceleration <strong>less than g</strong>.</p><p><strong>Explanation</strong>:</p><ol><li>As magnet falls, flux through coil changes</li><li>By Lenz’s law, induced current opposes this change</li><li>The induced current creates a magnetic field that exerts an <strong>upward force</strong> on the magnet</li><li>Net force: $F_{net} = mg - F_{induced}$</li><li>Therefore: $a = g - \frac{F_{induced}}{m} &lt; g$</li></ol><p>The magnet experiences electromagnetic braking.</p><p><strong>Energy consideration</strong>: Some gravitational PE converts to electrical energy (heating the coil), not all to KE.</p></div></details>

**Problem 1.2**: The north pole of a bar magnet is pushed toward a metallic ring. Will the ring be attracted, repelled, or unaffected?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>Answer</strong>: The ring will be <strong>repelled</strong>.</p><p><strong>Explanation</strong>:</p><ol><li>As north pole approaches, flux through ring increases</li><li>By Lenz’s law, induced current opposes this increase</li><li>The induced current creates a magnetic field opposing the approaching field</li><li>The near face of ring becomes a <strong>north pole</strong></li><li>Like poles repel → Ring is repelled</li></ol><p><strong>Key</strong>: The opposition to change manifests as opposition to the motion causing the change.</p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: A rectangular loop is placed partly in a magnetic field (perpendicular to plane, into page). The loop is pulled out with constant velocity. Find:
(a) Direction of induced current
(b) Direction of force needed to maintain constant velocity

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: Loop pulled to the right, field into page, constant velocity v</p><p><strong>(a) Direction of induced current</strong>:</p><ol><li>As loop exits, flux through loop <strong>decreases</strong></li><li>External field is <strong>into page</strong></li><li>To oppose decrease, induced field must be <strong>into page</strong> (same direction)</li><li>Using right-hand rule: Curl fingers so thumb points into page</li><li>Current direction: <strong>Clockwise</strong> (when viewed from above)</li></ol><p><strong>(b) Force needed</strong>:</p><ol><li>Current flows in the part of loop still in field</li><li>Using Fleming’s left-hand rule:<ul><li>Field: Into page</li><li>Current: Downward (left edge in field)</li><li>Force: Toward <strong>left</strong> (opposes motion)</li></ul></li><li>To maintain constant velocity, applied force must be toward <strong>right</strong></li></ol><p><strong>Key insight</strong>: You must do work against electromagnetic force. This work equals the electrical energy dissipated.</p></div></details>

**Problem 2.2**: A conducting rod rotates about one end in a uniform magnetic field perpendicular to plane. Does the rod experience any magnetic force?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>Answer</strong>: Yes, the rod experiences a <strong>torque</strong> opposing its rotation.</p><p><strong>Explanation</strong>:</p><ol><li>As rod rotates, flux through sector swept increases</li><li>Induced EMF: $\mathcal{E} = \frac{1}{2}B\omega L^2$ (motional EMF)</li><li>If circuit is complete, current flows: $I = \frac{\mathcal{E}}{R}$</li><li>Force on each element $dl$ at distance $r$: $dF = BI \cdot dl$</li><li>Torque opposes rotation (by Lenz’s law)</li><li>Total torque: $\tau = \int r \cdot dF$ (retarding torque)</li></ol><p><strong>Without external torque</strong>: The rod will decelerate.
<strong>With constant external torque</strong>: Steady state reached when input power = dissipated power.</p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: A square metallic frame falls vertically through a horizontal magnetic field. The field exists only in a limited region. Describe the motion of the frame as it:
(a) Enters the field region
(b) Is completely inside the field
(c) Exits the field region

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>(a) Entering the field</strong>:</p><ul><li>Top edge enters field → Flux through frame <strong>increases</strong></li><li>By Lenz’s law, induced current opposes increase</li><li>Force on top edge (in field): <strong>Upward</strong> (opposes entry)</li><li>Frame decelerates (a &lt; g)</li></ul><p><strong>(b) Completely inside</strong>:</p><ul><li>Uniform field, no change in flux</li><li>No induced current, no induced EMF</li><li>Only gravity acts</li><li>Frame accelerates with a = g (free fall)</li></ul><p><strong>(c) Exiting the field</strong>:</p><ul><li>Bottom edge exits field → Flux through frame <strong>decreases</strong></li><li>By Lenz’s law, induced current opposes decrease</li><li>Force on bottom edge (still in field): <strong>Upward</strong> (opposes exit)</li><li>Frame decelerates again (a &lt; g)</li></ul><p><strong>Motion graph</strong>:</p><div class="highlight"><pre style="color:#cdd6f4;background-color:#1e1e2e;-moz-tab-size:2;-o-tab-size:2;tab-size:2;-webkit-text-size-adjust:none" tabindex="0"><code class="language-fallback" data-lang="fallback"><span style="display:flex"><span>Velocity
</span></span><span style="display:flex"><span>   ^
</span></span><span style="display:flex"><span>   |     /----\
</span></span><span style="display:flex"><span>   |    /      \
</span></span><span style="display:flex"><span>   |   /        \
</span></span><span style="display:flex"><span>   |  /          \
</span></span><span style="display:flex"><span>   |---------------&gt;
</span></span><span style="display:flex"><span>   Enter  Inside  Exit  Time
</span></span></code></pre></div><p>The frame speeds up in the middle region and slows down while entering/exiting.</p></div></details>

**Problem 3.2**: A conducting disc rotates in a perpendicular magnetic field. A circuit is connected between the center and rim. Explain the torque experienced using Lenz’s law and energy conservation.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>Given</strong>: Disc of radius R rotates with angular velocity ω in field B (perpendicular to disc).</p><p><strong>Analysis</strong>:</p><p><strong>EMF generation</strong>:</p><ul><li>Radial elements move in magnetic field</li><li>Motional EMF: $\mathcal{E} = \frac{1}{2}B\omega R^2$</li></ul><p><strong>Current flow</strong>:</p><ul><li>If external resistance R is connected: $I = \frac{\mathcal{E}}{R_{total}}$</li><li>Current flows radially (center to rim or vice versa)</li></ul><p><strong>Lenz’s Law application</strong>:</p><ol><li>As disc rotates, imagine flux through sectors increasing</li><li>Induced current opposes this rotation</li><li>Force on radial current elements: Perpendicular to radius, opposing rotation</li><li>Net torque: $\tau = -\frac{B^2\omega R^4}{4R_{total}}$ (retarding)</li></ol><p><strong>Energy conservation</strong>:</p><ul><li>Mechanical work done against torque: $P_{mech} = \tau \cdot \omega$</li><li>Electrical power dissipated: $P_{elec} = I^2 R = \frac{\mathcal{E}^2}{R}$</li><li>By energy conservation: $P_{mech} = P_{elec}$ ✓</li></ul><p><strong>Key insight</strong>: The negative sign (Lenz’s law) ensures energy is conserved. The disc can’t spontaneously speed up and generate energy.</p></div></details>

## Lenz’s Law vs Faraday’s Law

| Aspect | Faraday’s Law | Lenz’s Law |
| --- | --- | --- |
| **What it tells** | Magnitude of induced EMF | Direction of induced EMF/current |
| **Formula** | $\|\mathcal{E}\| = N\frac{d\Phi_B}{dt}$ | Negative sign in complete formula |
| **Basis** | Experimental observation | Conservation of energy |
| **Use in JEE** | Calculate EMF value | Find current direction, force direction |

## Eddy Currents

**Eddy currents** are currents induced in bulk conductors (not just wire loops) when they are exposed to changing magnetic fields. By Lenz’s law, they flow so as to oppose the change — which is why a metal plate swinging between magnet poles slows down dramatically.

**Applications:**

- Electromagnetic braking
- Induction heating
- Metal detectors

**Reduction:** Laminated cores (thin insulated sheets break the current paths)

## Applications of Lenz’s Law

1. **Electromagnetic Braking**: Trains, roller coasters (safe, no wear)
2. **Eddy Current Damping**: Galvanometer needles, weighing balances
3. **Induction Cooktops**: Induced currents heat cookware
4. **Metal Detectors**: Detect opposition from induced currents in metal
5. **Shock Absorbers**: Some use electromagnetic damping
6. **Speedometers**: Old cars used eddy current drag

## Connection to Other Chapters

- [**Faraday’s Law**](../faradays-law/index.md): Provides magnitude; Lenz gives direction
- [**Motional EMF**](../motional-emf/index.md): Lenz’s law predicts force on moving conductors
- [**Energy Conservation**](../../work-energy-power/index.md): Lenz’s law is a consequence
- [**AC Generators**](../ac-circuits/index.md): Opposition determines phase relationships

## Key Takeaways

✓ Induced current **always opposes** the change causing it
✓ This opposition is a manifestation of **energy conservation**
✓ Lenz’s law gives **direction**, Faraday’s law gives **magnitude**
✓ Approach → Repel; Recede → Attract (for magnets)
✓ Moving conductors experience **opposing forces** (must do work)
✓ The negative sign in Faraday’s law represents Lenz’s law

## Quick Decision Tree for Current Direction

```fallback
Is flux increasing?
├─ YES → Induced field opposes external field
│         → Use RH rule to find current
└─ NO (decreasing) → Induced field supports external field
                    → Use RH rule to find current
```

## Formula Summary

**Complete Faraday’s Law** (with Lenz):

$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

**Interpretation**:

- Magnitude: $|\mathcal{E}| = N\left|\frac{d\Phi_B}{dt}\right|$
- Direction: Negative sign → Opposes change (Lenz’s law)

**Energy Conservation**:

$$\text{Work done against induced force} = \text{Electrical energy produced}$$

---

*Next Topic*: [Motional EMF](../motional-emf/index.md) - EMF in moving conductors and force analysis

From TestGuru · our mock-test platform

## You've read Lenz's Law - The Opposition Principle.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Flenzs-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/lenzs-law/",this.page.identifier="/physics/electromagnetic-induction/lenzs-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423215053112"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423215053112")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423215262258"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423215262258")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/lenzs-law/](https://jeenotes.in/physics/electromagnetic-induction/lenzs-law/) · raw HTML: `offline/physics/electromagnetic-induction/lenzs-law/index.html`_
