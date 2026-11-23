---
title: "Prism - Dispersion, Deviation & Rainbow Physics"
source: "https://jeenotes.in/physics/optics/prism/"
description: "Master prism formulas, angular deviation, dispersion, and rainbow formation for JEE Main and Advanced"
updated: "2025-12-26"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 13"
html: "../../../../offline/physics/optics/prism/index.html"
extracted: "2026-11-23"
---

> Master prism formulas, angular deviation, dispersion, and rainbow formation for JEE Main and Advanced

# Prism Optics - Splitting Light

## The Movie Hook 🎬

Remember Pink Floyd’s *Dark Side of the Moon* album cover with the prism creating a rainbow? Or the rainbow in *The Wizard of Oz*? Or how *Thor: Ragnarok* uses the Bifrost as a cosmic prism? These aren’t just artistic choices - they show the beautiful physics of **dispersion** that separates white light into colors!

---

## The Big Picture

A **prism** is a transparent optical element with flat, polished surfaces that refract light. Key phenomena:

- **Deviation:** Bending of light through prism
- **Dispersion:** Separation of white light into colors
- **Rainbow formation:** Nature’s prism show
- **Spectrometers:** Measuring wavelengths

**Connection Alert:** Builds on [Refraction](../refraction/index.md), relates to [Wave Optics](../wave-optics/index.md).

---

## Core Concepts

### 1. Prism Terminology

**Key Terms:**

- **Refracting surfaces:** Two plane surfaces at an angle
- **Refracting edge:** Intersection of two refracting surfaces
- **Refracting angle (A):** Angle between two refracting surfaces
- **Principal section:** Section perpendicular to refracting edge
- **Angle of incidence (i):** Angle of incoming ray with normal
- **Angle of emergence (e):** Angle of outgoing ray with normal
- **Angle of deviation (δ):** Angle between incident and emergent rays

**Memory Trick:** “**P**risms **R**efract **A**ll **R**ays **D**ifferently” (PRARD)

---

### 2. Prism Formula (Deviation)

For a ray passing through prism:

$$\boxed{\delta = i + e - A}$$

Where:

- **δ** = angle of deviation
- **i** = angle of incidence
- **e** = angle of emergence
- **A** = angle of prism (refracting angle)

**At both surfaces, Snell’s law applies:**

At first surface:

$$n_1 \sin i = n \sin r_1$$

At second surface:

$$n \sin r_2 = n_1 \sin e$$

**Relation between angles:**

$$\boxed{A = r_1 + r_2}$$

Where r₁ and r₂ are angles of refraction at first and second surfaces.

---

### 3. Minimum Deviation

**Condition for minimum deviation:**

- Ray passes **symmetrically** through prism
- i = e (angle of incidence = angle of emergence)
- r₁ = r₂ = r

**At minimum deviation:**

$$\boxed{\delta_m = 2i - A}$$

Or:

$$\boxed{i = \frac{A + \delta_m}{2}}$$

Also:

$$r = \frac{A}{2}$$

**Refractive index from minimum deviation:**

$$\boxed{n = \frac{\sin\left(\frac{A + \delta_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}}$$

**This is THE most important prism formula for JEE!**

**Memory Trick:** “**A**t **M**inimum, **I** **E**qual **E**verything” (i = e, r₁ = r₂)

---

### 4. Thin Prism (Small Angle Approximation)

For small angles (A < 10°):

$$\boxed{\delta = (n-1)A}$$

This is **independent of i** for thin prisms!

**Derivation:** For small angles, sin θ ≈ θ

From Snell’s law and geometry:

$$\delta \approx (n-1)A$$

**Application:** Used in lens aberration corrections, optical instruments.

---

### 5. Dispersion

**Dispersion:** Splitting of white light into constituent colors due to variation of refractive index with wavelength.

**Cauchy’s Equation:**

$$\boxed{n = A + \frac{B}{\lambda^2}}$$

Shows that n decreases as λ increases.

**Order of colors (increasing wavelength):**
**VIBGYOR:** Violet, Indigo, Blue, Green, Yellow, Orange, Red

**Refractive indices:**

$$n_V > n_I > n_B > n_G > n_Y > n_O > n_R$$

**Deviations:**

$$\delta_V > \delta_I > \delta_B > \delta_G > \delta_Y > \delta_O > \delta_R$$

> **◐ In simple terms**
>
> **Key Insight:** Violet light bends **most** (highest n), red light bends **least** (lowest n).

---

### 6. Angular Dispersion

**Angular dispersion (θ):** Angular separation between extreme colors (violet and red)

$$\boxed{\theta = \delta_V - \delta_R}$$

For thin prism:

$$\boxed{\theta = (n_V - n_R)A}$$

**Memory Trick:** “**V**ery **R**ed **D**ifference” (θ = δ_V - δ_R)

---

### 7. Dispersive Power

**Dispersive power (ω):** Measure of prism’s ability to disperse light

$$\boxed{\omega = \frac{\theta}{\delta_Y} = \frac{\delta_V - \delta_R}{\delta_Y}}$$

Or using refractive indices:

$$\boxed{\omega = \frac{n_V - n_R}{n_Y - 1}}$$

Where n_Y is refractive index for yellow light (mean color).

**Properties:**

- Dimensionless quantity
- Depends only on material, not on angle A
- Crown glass: ω ≈ 0.03
- Flint glass: ω ≈ 0.05

---

### 8. Deviation Without Dispersion (Achromatic Combination)

To get **deviation** without **dispersion**, combine two prisms:

**Condition:**

$$\boxed{\omega_1 A_1 + \omega_2 A_2 = 0}$$

Net deviation:

$$\boxed{\delta = (n_Y - 1)(A_1 + A_2)}$$

Usually: Two prisms of opposite orientation (one upright, one inverted)

**Example:** Crown glass prism + Flint glass prism (inverted)

---

### 9. Dispersion Without Deviation (Direct Vision Combination)

To get **dispersion** without **deviation**:

**Condition:**

$$\boxed{(n_{Y1} - 1)A_1 + (n_{Y2} - 1)A_2 = 0}$$

Net dispersion:

$$\boxed{\theta = \theta_1 + \theta_2}$$

Used in **direct vision spectroscopes**.

---

## The Formula Cheat Sheet

```plaintext
PRISM ESSENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Deviation:            δ = i + e - A
2. Angle relation:       A = r₁ + r₂
3. Min deviation:        n = sin[(A+δₘ)/2] / sin(A/2)
4. Thin prism:           δ = (n-1)A
5. Dispersion:           θ = δ_V - δ_R
6. Dispersive power:     ω = (n_V-n_R)/(n_Y-1)
7. Achromatic:           ω₁A₁ + ω₂A₂ = 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Rainbow Physics

### Primary Rainbow

**Formation:**

1. **One internal reflection** inside water droplet
2. Refraction → Reflection → Refraction
3. **Red on top** (42° from anti-solar point)
4. **Violet on bottom** (40° from anti-solar point)

**Angle:** About 40-42° from anti-solar direction

**Colors:** ROYGBIV (reversed from prism!)

### Secondary Rainbow

**Formation:**

1. **Two internal reflections** inside droplet
2. Refraction → Reflection → Reflection → Refraction
3. **Violet on top**, **Red on bottom** (reversed!)
4. Fainter than primary (more light lost)

**Angle:** About 50-53° from anti-solar point

**Dark band between rainbows:** Alexander’s dark band (no light scattered at these angles)

> **◐ In simple terms**
>
> **Why is rainbow circular?** Because all droplets at same angle from anti-solar point scatter light toward you - forms a cone!

---

## Common Traps & Mistakes

### Trap #1: Deviation Formula

❌ **Wrong:** δ = i - e + A
✅ **Right:** δ = i + e - A (both incident and emergent contribute!)

### Trap #2: Minimum Deviation Condition

❌ **Wrong:** Using i = e in δ = i + e - A to get δ = 2i - A for all cases
✅ **Right:** δ = 2i - A is ONLY at minimum deviation!

### Trap #3: Color Order in Rainbow

❌ **Wrong:** Thinking rainbow has same color order as prism
✅ **Right:** Primary rainbow has RED on top (opposite to prism spectrum on ground)

### Trap #4: Dispersive Power

❌ **Wrong:** ω = (n_V - n_R)/n_Y
✅ **Right:** ω = (n_V - n_R)/(n_Y - 1) - don’t forget the -1!

### Trap #5: Thin Prism Approximation

❌ **Wrong:** Using δ = (n-1)A for large angle prisms
✅ **Right:** Only valid for A < 10° approximately

---

## Practice Problems

### Level 1: JEE Main Warmup

**Problem 1.1:** A prism has refracting angle A = 60° and refractive index n = 1.5. Find the angle of minimum deviation.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: A = 60°, n = 1.5</p><p>Using minimum deviation formula:</p>$$n = \frac{\sin\left(\frac{A + \delta_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}$$

$$1.5 = \frac{\sin\left(\frac{60° + \delta_m}{2}\right)}{\sin 30°}$$

$$1.5 = \frac{\sin\left(\frac{60° + \delta_m}{2}\right)}{0.5}$$

$$\sin\left(\frac{60° + \delta_m}{2}\right) = 0.75$$

$$\frac{60° + \delta_m}{2} = \sin^{-1}(0.75) = 48.6°$$

$$60° + \delta_m = 97.2°$$

$$\delta_m = 37.2°$$<p><strong>Answer:</strong> δₘ = 37.2°</p></div></details>

---

**Problem 1.2:** A thin prism of angle 5° and refractive index 1.5 is placed in front of a lens. Find the deviation produced.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For thin prism:</p>$$\delta = (n-1)A$$

$$\delta = (1.5 - 1) \times 5° = 0.5 \times 5° = 2.5°$$<p><strong>Answer:</strong> δ = 2.5°</p><p><strong>Note:</strong> Independent of angle of incidence for thin prisms!</p></div></details>

---

**Problem 1.3:** For a prism, n_V = 1.52, n_R = 1.48, n_Y = 1.50. Find dispersive power.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content">$$\omega = \frac{n_V - n_R}{n_Y - 1} = \frac{1.52 - 1.48}{1.50 - 1} = \frac{0.04}{0.50} = 0.08$$<p><strong>Answer:</strong> ω = 0.08</p></div></details>

---

### Level 2: JEE Main/Advanced

**Problem 2.1:** A ray of light passes through a prism of angle 60° in minimum deviation position. If refractive index is √2, find:
(a) Angle of incidence
(b) Angle of minimum deviation
(c) Angle of refraction inside prism

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: A = 60°, n = √2</p><p><strong>(a) Angle of incidence:</strong></p>$$n = \frac{\sin\left(\frac{A + \delta_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}$$

$$\sqrt{2} = \frac{\sin\left(\frac{60° + \delta_m}{2}\right)}{\sin 30°}$$

$$\sqrt{2} = \frac{\sin\left(\frac{60° + \delta_m}{2}\right)}{0.5}$$

$$\sin\left(\frac{60° + \delta_m}{2}\right) = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}}$$

$$\frac{60° + \delta_m}{2} = 45°$$

$$60° + \delta_m = 90°$$

$$\delta_m = 30°$$<p><strong>(b) Minimum deviation:</strong> δₘ = 30°</p><p>For angle of incidence at minimum deviation:</p>$$i = \frac{A + \delta_m}{2} = \frac{60° + 30°}{2} = 45°$$<p><strong>(c) Angle of refraction:</strong>
At minimum deviation:</p>$$r = \frac{A}{2} = \frac{60°}{2} = 30°$$<p><strong>Answers:</strong></p><ul><li>(a) i = 45°</li><li>(b) δₘ = 30°</li><li>(c) r = 30°</li></ul></div></details>

---

**Problem 2.2:** Two prisms of angles 6° each and refractive indices 1.5 and 1.6 are combined to produce dispersion without deviation. Are they in correct position or inverted with respect to each other?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For dispersion without deviation:</p>$$(n_1 - 1)A_1 + (n_2 - 1)A_2 = 0$$<p>Let’s check if they can be in same orientation:</p>$$(1.5 - 1) \times 6° + (1.6 - 1) \times 6° = 0.5 \times 6° + 0.6 \times 6°$$<p></p>$$= 3° + 3.6° = 6.6° \neq 0$$<p>So they must be inverted (opposite orientations).</p><p>Let A₂ be negative (inverted):</p>$$(1.5 - 1) \times 6° + (1.6 - 1) \times (-6°) = 3° - 3.6° = -0.6° \neq 0$$<p>This doesn’t work either with equal angles.</p><p><strong>Actually</strong>, for dispersion without deviation, we need:</p>$$\frac{(n_1 - 1)A_1}{(n_2 - 1)A_2} = -1$$<p>This means one must be inverted and:</p>$$\frac{0.5 \times 6}{0.6 \times A_2} = -1$$<p></p>$$A_2 = -5°$$<p><strong>Answer:</strong> Prisms must be inverted, but with different effective angles OR the question implies they can’t produce exactly zero deviation with equal angles.</p><p><strong>Correct interpretation:</strong> With equal angles, they’re inverted and produce net deviation of 0.6°.</p></div></details>

---

### Level 3: JEE Advanced

**Problem 3.1:** A prism of refracting angle 4° is made of material with n_V = 1.524 and n_R = 1.516 for violet and red light. Find:
(a) Angular dispersion
(b) Dispersive power (assume n_Y = 1.520)

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: A = 4°, n_V = 1.524, n_R = 1.516, n_Y = 1.520</p><p><strong>(a) Angular dispersion:</strong></p><p>For thin prism:</p>$$\theta = (n_V - n_R)A$$<p></p>$$\theta = (1.524 - 1.516) \times 4°$$<p></p>$$\theta = 0.008 \times 4° = 0.032° = 1.92'$$<p>(arc minutes)</p><p><strong>(b) Dispersive power:</strong></p>$$\omega = \frac{n_V - n_R}{n_Y - 1} = \frac{1.524 - 1.516}{1.520 - 1} = \frac{0.008}{0.520} = 0.0154$$<p><strong>Answers:</strong></p><ul><li>(a) θ = 0.032° or 1.92 arc minutes</li><li>(b) ω = 0.0154</li></ul></div></details>

---

## Quick Revision Cards

```plaintext
╔══════════════════════════════════════╗
║  PRISM QUICK FACTS                  ║
╚══════════════════════════════════════╝

🎯 δ = i + e - A (deviation)
🎯 A = r₁ + r₂ (angle relation)
🎯 At min: i = e, r₁ = r₂ = A/2
🎯 n = sin[(A+δₘ)/2] / sin(A/2)
🎯 Thin: δ = (n-1)A
🎯 Dispersion: θ = δ_V - δ_R
🎯 ω = (n_V - n_R)/(n_Y - 1)
🎯 VIBGYOR: V bends most!
```

---

## Cross-Topic Connections

- **[Refraction](../refraction/index.md)**: Double refraction in prism
- **[Thin Lens](../thin-lens/index.md)**: Chromatic aberration due to dispersion
- **[Optical Instruments](../optical-instruments/index.md)**: Spectrometers use prisms
- **[Wave Optics](../wave-optics/index.md)**: Wavelength dependence of n

---

## Final Tips

1. **Draw the prism** with ray path - helps visualize angles
2. **Check TIR condition** at second surface if angle seems large
3. **For minimum deviation:** Remember i = e shortcut
4. **Thin prism:** Only when A < 10°
5. **Color order:** VIBGYOR (V highest n, R lowest n)

**Pro Tip:** In exam, if they give n for yellow/mean color, use that as n_Y for dispersive power!

---

*Next up: [Optical Instruments](../optical-instruments/index.md) - using prisms and lenses together!*

From TestGuru · our mock-test platform

## You've read Prism - Dispersion, Deviation & Rainbow Physics.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Fprism%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/prism/",this.page.identifier="/physics/optics/prism/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="prismGeometry" id="anim-prismGeometry-1795396424011775279"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-prismGeometry-1795396424011775279")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="minimumDeviation" id="anim-minimumDeviation-1795396424011802891"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-minimumDeviation-1795396424011802891")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/prism/](https://jeenotes.in/physics/optics/prism/) · raw HTML: `offline/physics/optics/prism/index.html`_
