---
title: "Polarization - Malus Law, Brewster's Angle & Transverse Waves"
source: "https://jeenotes.in/physics/optics/polarization/"
description: "Master polarization, polaroids, Malus law, and Brewster's angle for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 13"
html: "../../../../offline/physics/optics/polarization/index.html"
extracted: "2026-11-23"
---

> Master polarization, polaroids, Malus law, and Brewster's angle for JEE Main and Advanced

# Polarization - Proving Light is Transverse

## The Movie Hook 🎬

Ever worn polarized sunglasses and noticed they reduce glare from water or roads? Or noticed 3D movie glasses create depth perception? Or seen how LCD screens go dark when you tilt your phone? That’s all **polarization** - the property that proves light is a **transverse wave**!

---

## The Big Picture

**Polarization:** The phenomenon of restricting the vibrations of light (electric field) to a particular direction perpendicular to the direction of wave propagation.

**Key applications:**

- **Sunglasses** (reducing glare)
- **3D movies** (stereoscopic vision)
- **LCD screens** (controlling light)
- **Photography** (reducing reflections)
- **Stress analysis** (photoelasticity)

**Connection Alert:** Proves light is **transverse**, relates to [Wave Optics](../wave-optics/index.md) and [EM Waves](../../electromagnetic-waves/index.md).

---

## Core Concepts

### 1. Unpolarized vs Polarized Light

**Unpolarized light:**

- Electric field vibrates in **all directions** perpendicular to propagation
- Example: Sunlight, bulb light
- Random orientation of E-field vectors

**Polarized light:**

- Electric field vibrates in **one particular direction** only
- Obtained by passing unpolarized light through polarizer
- Fixed orientation of E-field

**Memory Trick:** “**U**npolarized = **U**niverse of directions”, “**P**olarized = **P**articular direction”

---

### 2. Plane of Vibration and Plane of Polarization

**Plane of vibration:** Plane containing the direction of vibration (E-field) and direction of propagation

**Plane of polarization:** Plane perpendicular to plane of vibration

> **◐ In simple terms**
>
> **Important:** Plane of polarization is perpendicular to the direction of E-field vibrations!

**In JEE:** Usually we just refer to “polarization direction” = direction of E-field vibrations.

---

### 3. Transverse Nature of Light

**Only transverse waves can be polarized!**

- Longitudinal waves (like sound) **cannot** be polarized
- The fact that light **can be polarized** proves it’s transverse
- Electric field perpendicular to propagation direction

**Why sound cannot be polarized?**
Sound is longitudinal → particles vibrate parallel to propagation → no perpendicular direction to restrict!

---

### 4. Polaroid (Polarizer)

**Polaroid:** Material that produces polarized light by selective absorption

**Working:**

- Contains long-chain molecules aligned in one direction
- Absorbs light with E-field parallel to molecular chains
- Transmits light with E-field perpendicular to molecular chains

**Transmission axis:** Direction perpendicular to aligned molecules (allowed E-field direction)

**When unpolarized light passes through polaroid:**

- Intensity becomes **half**
- Light becomes **plane polarized**

$$\boxed{I = \frac{I_0}{2}}$$

Where I₀ = intensity of unpolarized light

---

### 5. Malus Law

**Setup:** Polarized light of intensity I₀ passes through an analyzer (second polaroid)

**Angle θ:** Between transmission axes of polarizer and analyzer

**Malus Law:**

$$\boxed{I = I_0 \cos^2 \theta}$$

Where:

- **I** = transmitted intensity
- **I₀** = incident polarized light intensity
- **θ** = angle between polarizer and analyzer axes

**Special cases:**

| θ | cos²θ | I | Condition |
| --- | --- | --- | --- |
| 0° | 1 | I₀ | Maximum (parallel) |
| 45° | 1/2 | I₀/2 | Half intensity |
| 60° | 1/4 | I₀/4 | Quarter intensity |
| 90° | 0 | 0 | Minimum (crossed, dark) |

**Memory Trick:** “**M**alus with **C**osine **S**quared” (Malus = cos²θ)

---

### 6. Two Polaroids Setup

**Case 1: Unpolarized light through two polaroids**

After first polaroid (polarizer):

$$I_1 = \frac{I_0}{2}$$

After second polaroid (analyzer) at angle θ:

$$I_2 = I_1 \cos^2 \theta = \frac{I_0}{2} \cos^2 \theta$$

**Complete formula:**

$$\boxed{I = \frac{I_0}{2} \cos^2 \theta}$$

**For crossed polaroids (θ = 90°):**

$$I = 0$$

(complete darkness!)

---

### 7. Three Polaroids Setup

**Common JEE question!**

Setup: P₁ at 0°, P₂ at θ, P₃ at 90°

**Without middle polaroid (P₂):**

- P₁ and P₃ are crossed (90°)
- No light passes → I = 0

**With middle polaroid (P₂) at angle θ:**

After P₁:

$$I_1 = \frac{I_0}{2}$$

After P₂ (angle θ from P₁):

$$I_2 = I_1 \cos^2 \theta = \frac{I_0}{2} \cos^2 \theta$$

After P₃ (angle 90°-θ from P₂):

$$I_3 = I_2 \cos^2(90° - \theta) = I_2 \sin^2 \theta$$

$$I_3 = \frac{I_0}{2} \cos^2 \theta \sin^2 \theta$$

Using

$$\sin 2\theta = 2\sin\theta \cos\theta$$

:

$$\sin^2\theta \cos^2\theta = \frac{1}{4}\sin^2 2\theta$$

$$\boxed{I_3 = \frac{I_0}{8} \sin^2 2\theta}$$

**Maximum transmission:** When θ = 45°

$$I_{max} = \frac{I_0}{8}$$

**Key insight:** Inserting middle polaroid actually allows some light through crossed polaroids!

---

## Polarization by Reflection

### 1. Brewster’s Law

When unpolarized light is incident on a transparent surface at a certain angle, the **reflected light is completely plane polarized**.

**Brewster’s angle (i_p):**

$$\boxed{\tan i_p = n}$$

Or:

$$\boxed{i_p = \tan^{-1}(n)}$$

Where:

- **i_p** = polarizing angle (Brewster’s angle)
- **n** = refractive index of medium (relative to air)

**At Brewster’s angle:**

- Reflected light is **completely polarized** (⊥ to plane of incidence)
- Refracted light is **partially polarized**
- Reflected and refracted rays are **perpendicular** to each other

**Relation:**

$$\boxed{i_p + r = 90°}$$

Where r = angle of refraction

**Memory Trick:** “**B**rewster needs **T**an” (Brewster’s angle uses tan, not sin!)

---

### 2. Derivation of Brewster’s Law

At Brewster’s angle: i_p + r = 90°

So: r = 90° - i_p

Using Snell’s law:

$$\sin i_p = n \sin r = n \sin(90° - i_p) = n \cos i_p$$

$$\frac{\sin i_p}{\cos i_p} = n$$

$$\boxed{\tan i_p = n}$$

---

### 3. Polarization by Scattering

**Rayleigh scattering:** Scattering of light by particles much smaller than wavelength

**Sky appears blue:**

- Shorter wavelengths (blue) scatter more
- Intensity ∝ 1/λ⁴

**Scattered light is partially polarized:**

- Maximum polarization perpendicular to incident beam
- At 90° scattering angle, light is completely polarized

**This is why:**

- Sky is blue (blue scatters most)
- Sunset is red (blue scattered away, red transmitted)
- Polarized sunglasses reduce glare from sky

---

## Methods of Polarization

### Summary Table

| Method | Principle | Polarization | Example |
| --- | --- | --- | --- |
| **Polaroid** | Selective absorption | Complete | Sunglasses |
| **Reflection** | Brewster’s law | Complete (reflected) | Water surface |
| **Refraction** | Double refraction | Partial/Complete | Calcite crystal |
| **Scattering** | Rayleigh scattering | Partial | Blue sky |

---

## The Formula Cheat Sheet

```plaintext
POLARIZATION ESSENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Through polaroid:     I = I₀/2
2. Malus law:            I = I₀cos²θ
3. Two polaroids:        I = (I₀/2)cos²θ
4. Three polaroids:      I = (I₀/8)sin²2θ
5. Brewster's law:       tan i_p = n
6. At Brewster:          i_p + r = 90°
7. Crossed polaroids:    θ = 90° → I = 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Common Traps & Mistakes

### Trap #1: Forgetting Factor of 1/2

❌ **Wrong:** I = I₀ cos²θ for unpolarized light through two polaroids
✅ **Right:** I = (I₀/2) cos²θ (factor 1/2 from first polaroid!)

### Trap #2: Brewster’s Angle Formula

❌ **Wrong:** sin i_p = n (confusing with Snell’s law)
✅ **Right:** **tan** i_p = n (Brewster uses tangent!)

### Trap #3: Three Polaroids Maximum

❌ **Wrong:** Maximum at θ = 0° or 90°
✅ **Right:** Maximum at θ = 45° → I_max = I₀/8

### Trap #4: Longitudinal Wave Polarization

❌ **Wrong:** Sound can be polarized
✅ **Right:** Only **transverse** waves can be polarized!

### Trap #5: Angle in Malus Law

❌ **Wrong:** Using angle with horizontal or vertical
✅ **Right:** Use angle between **transmission axes** of polarizer and analyzer

---

## Practice Problems

### Level 1: JEE Main Warmup

**Problem 1.1:** Unpolarized light of intensity I₀ passes through a polaroid. What is the intensity of emerging light?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>When unpolarized light passes through single polaroid:</p>$$I = \frac{I_0}{2}$$<p><strong>Answer:</strong> I₀/2</p><p><strong>Reason:</strong> Polaroid blocks half the randomly oriented vibrations.</p></div></details>

---

**Problem 1.2:** Polarized light of intensity I₀ is incident on an analyzer. The angle between polarizer and analyzer is 60°. Find transmitted intensity.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Using Malus law:</p>$$I = I_0 \cos^2 \theta = I_0 \cos^2 60°$$

$$I = I_0 \times \left(\frac{1}{2}\right)^2 = I_0 \times \frac{1}{4} = \frac{I_0}{4}$$<p><strong>Answer:</strong> I₀/4</p></div></details>

---

**Problem 1.3:** Find Brewster’s angle for water (n = 4/3).

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content">$$\tan i_p = n = \frac{4}{3}$$

$$i_p = \tan^{-1}\left(\frac{4}{3}\right) = \tan^{-1}(1.33) \approx 53.1°$$<p><strong>Answer:</strong> 53.1°</p><p>At this angle, reflected light from water surface is completely polarized!</p></div></details>

---

### Level 2: JEE Main/Advanced

**Problem 2.1:** Unpolarized light passes through two polaroids with transmission axes at 30° to each other. What fraction of incident intensity is transmitted?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>After first polaroid:</p>$$I_1 = \frac{I_0}{2}$$<p>After second polaroid (at 30°):</p>$$I_2 = I_1 \cos^2 30° = \frac{I_0}{2} \times \left(\frac{\sqrt{3}}{2}\right)^2$$

$$I_2 = \frac{I_0}{2} \times \frac{3}{4} = \frac{3I_0}{8}$$<p>Fraction transmitted:</p>$$\frac{I_2}{I_0} = \frac{3}{8}$$<p><strong>Answer:</strong> 3/8 or 37.5%</p></div></details>

---

**Problem 2.2:** At what angle of incidence will light reflected from glass (n = 1.5) be completely polarized?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Using Brewster’s law:</p>$$\tan i_p = n = 1.5$$

$$i_p = \tan^{-1}(1.5) \approx 56.3°$$<p>Angle of refraction:</p>$$r = 90° - i_p = 90° - 56.3° = 33.7°$$<p><strong>Verification using Snell’s law:</strong></p>$$\sin 56.3° = 1.5 \times \sin 33.7°$$<p></p>$$0.832 = 1.5 \times 0.555 = 0.833$$<p>✓</p><p><strong>Answer:</strong> i_p = 56.3°</p></div></details>

---

### Level 3: JEE Advanced

**Problem 3.1:** Two polaroids P₁ and P₂ are crossed (90°). A third polaroid P₃ is placed between them at 45° to P₁. If unpolarized light of intensity I₀ is incident on P₁, find the final transmitted intensity.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>After P₁:</p>$$I_1 = \frac{I_0}{2}$$<p>After P₃ (at 45° from P₁):</p>$$I_2 = I_1 \cos^2 45° = \frac{I_0}{2} \times \frac{1}{2} = \frac{I_0}{4}$$<p>After P₂ (at 45° from P₃):</p>$$I_3 = I_2 \cos^2 45° = \frac{I_0}{4} \times \frac{1}{2} = \frac{I_0}{8}$$<p><strong>Using formula directly:</strong></p>$$I_3 = \frac{I_0}{8} \sin^2(2 \times 45°) = \frac{I_0}{8} \times 1 = \frac{I_0}{8}$$<p><strong>Answer:</strong> I₀/8</p><p><strong>Key:</strong> Without P₃, intensity is zero. With P₃ at 45°, we get maximum transmission = I₀/8!</p></div></details>

---

## Quick Revision Cards

```plaintext
╔══════════════════════════════════════╗
║  POLARIZATION QUICK FACTS           ║
╚══════════════════════════════════════╝

BASICS:
🎯 Only transverse waves polarize
🎯 Light is transverse EM wave
🎯 Through 1 polaroid: I = I₀/2
🎯 Malus law: I = I₀cos²θ

TWO POLAROIDS:
🎯 Parallel (0°): I = I₀/2
🎯 At 45°: I = I₀/4
🎯 At 60°: I = I₀/8
🎯 Crossed (90°): I = 0

THREE POLAROIDS:
🎯 I = (I₀/8)sin²2θ
🎯 Maximum at θ = 45°
🎯 I_max = I₀/8

BREWSTER:
🎯 tan i_p = n
🎯 i_p + r = 90°
🎯 Reflected light 100% polarized
```

---

## Cross-Topic Connections

- **[Wave Optics](../wave-optics/index.md)**: Transverse nature of waves
- **[EM Waves](../../electromagnetic-waves/index.md)**: Electric field oscillations
- **[Refraction](../refraction/index.md)**: Brewster’s angle uses Snell’s law
- **[Interference](../interference/index.md)**: Polarized light interference

---

## Final Tips

1. **Malus law** needs polarized incident light!
2. **First polaroid** always gives I₀/2 (for unpolarized)
3. **Brewster’s** angle uses **tan i_p = n** (easy to confuse with sin!)
4. **Three polaroids** - remember sin²2θ formula
5. **Only transverse** waves can be polarized

**Pro Tip:** In three polaroid problems, middle polaroid at 45° gives maximum transmission = I₀/8!

---

*Congratulations! You’ve completed the comprehensive Optics chapter covering all major JEE topics!*

From TestGuru · our mock-test platform

## You've read Polarization - Malus Law, Brewster's Angle & Transverse Waves.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Fpolarization%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-18

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/polarization/",this.page.identifier="/physics/optics/polarization/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-19

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="polarization" id="anim-polarization-1795396424008086903"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-polarization-1795396424008086903")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="malusLaw" id="anim-malusLaw-1795396424008270185"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-malusLaw-1795396424008270185")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-3

```html
<div class="animation-wrapper" data-animation="brewsterAngle" id="anim-brewsterAngle-1795396424008290680"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-brewsterAngle-1795396424008290680")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/polarization/](https://jeenotes.in/physics/optics/polarization/) · raw HTML: `offline/physics/optics/polarization/index.html`_
