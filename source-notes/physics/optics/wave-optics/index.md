---
title: "Wave Optics - Huygens Principle & Wavefronts"
source: "https://jeenotes.in/physics/optics/wave-optics/"
description: "Master Huygens principle, wavefront theory, and wave nature of light for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "8 min read"
breadcrumb: "Physics"
position: "/ Topic 11 of 13"
html: "../../../../offline/physics/optics/wave-optics/index.html"
extracted: "2026-11-23"
---

> Master Huygens principle, wavefront theory, and wave nature of light for JEE Main and Advanced

# Wave Optics - Light as a Wave

## The Movie Hook 🎬

Remember the water ripples in *Inception* that represent reality layers? Or the circular waves when Thor’s hammer hits water? Or the sound waves visualization in *A Quiet Place*? These wave patterns are exactly how light behaves - and Huygens showed us how!

---

## The Big Picture

**Wave optics** treats light as a wave phenomenon, explaining:

- **Interference:** Bright and dark fringes
- **Diffraction:** Bending around obstacles
- **Polarization:** Transverse nature of light
- **Wavefronts:** How light propagates

**Connection Alert:** Foundation for [Interference](../interference/index.md), [Diffraction](../diffraction/index.md), and [Polarization](../polarization/index.md). Links to [EM Waves](../../electromagnetic-waves/index.md).

---

## Core Concepts

### 1. Wave Nature of Light

**Light is an electromagnetic wave:**

- Electric field E oscillates
- Magnetic field B oscillates (perpendicular to E)
- Both perpendicular to direction of propagation
- **Transverse wave**

**Wave equation:**

$$\boxed{y = A \sin(\omega t - kx + \phi)}$$

Where:

- **A** = amplitude
- **ω** = angular frequency = 2πf
- **k** = wave number = 2π/λ
- **φ** = initial phase

**Wave speed:**

$$\boxed{c = f\lambda = \frac{\omega}{k}}$$

---

### 2. Wavefront

**Wavefront:** Locus of all points vibrating in same phase

**Types:**

1. **Spherical wavefront:** From point source

   - Expands as sphere
   - Radius increases with time
2. **Cylindrical wavefront:** From line source

   - Expands as cylinder
3. **Plane wavefront:** At large distance from source

   - OR from source at infinity
   - Parallel planes

**Key property:** Wavefront is perpendicular to direction of propagation (rays)

**Memory Trick:** “**W**aves **P**ropagate **P**erpendicular” (wavefront ⊥ rays)

---

### 3. Huygens Principle

**Statement:** Every point on a wavefront acts as a source of secondary wavelets. The new wavefront is the tangent envelope to these wavelets.

**Applications:**

1. Explains propagation of waves
2. Derives laws of reflection
3. Derives laws of refraction
4. Explains diffraction

**Construction:**

1. Draw primary wavefront
2. From each point, draw secondary wavelets (circles/spheres)
3. Draw common tangent → new wavefront

---

### 4. Huygens Derivation of Refraction (Snell’s Law)

Consider plane wavefront traveling from medium 1 (speed v₁) to medium 2 (speed v₂).

Time for wavelet to travel in medium 1:

$$t = \frac{AC}{v_1}$$

Distance traveled in medium 2:

$$BD = v_2 t = v_2 \frac{AC}{v_1}$$

From geometry:

$$\frac{AC}{\sin i} = AB = \frac{BD}{\sin r}$$

$$\frac{AC}{\sin i} = \frac{v_2 AC/(v_1)}{\sin r}$$

$$\frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{n_2}{n_1}$$

Therefore:

$$\boxed{n_1 \sin i = n_2 \sin r}$$

**Snell’s law derived from wave theory!**

---

### 5. Coherent Sources

**Coherent sources:** Two sources having:

1. **Same frequency**
2. **Constant phase difference**

**Why needed?**

- For stable interference pattern
- Random phase changes → no fixed pattern

**How to obtain:**

1. **Division of wavefront:** Single source split (Young’s slits, Fresnel biprism)
2. **Division of amplitude:** Partial reflection (thin films, Newton’s rings)

**Incoherent sources:**

- Independent sources (two bulbs)
- Random phase changes
- No stable interference

---

### 6. Path Difference and Phase Difference

**Relation:**

$$\boxed{\phi = \frac{2\pi}{\lambda} \times \Delta x}$$

Or:

$$\boxed{\Delta x = \frac{\lambda}{2\pi} \times \phi}$$

Where:

- **φ** = phase difference (radians)
- **Δx** = path difference
- **λ** = wavelength

**For constructive interference:**

- Path difference = nλ (n = 0, 1, 2, &mldr;)
- Phase difference = 2nπ

**For destructive interference:**

- Path difference = (n + 1/2)λ = (2n+1)λ/2
- Phase difference = (2n+1)π

**Memory Trick:** “**C**omplete **W**avelengths **C**onstruct” (nλ → constructive)

---

### 7. Superposition Principle

**When two waves meet:**

$$\boxed{y = y_1 + y_2}$$

If:

$$y_1 = A_1 \sin(\omega t)$$

and

$$y_2 = A_2 \sin(\omega t + \phi)$$

**Resultant amplitude:**

$$\boxed{A = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \cos \phi}}$$

**Special cases:**

1. **Constructive (φ = 0, 2π, 4π, &mldr;):**

   $$A_{max} = A_1 + A_2$$

$$I_{max} = (I_1^{1/2} + I_2^{1/2})^2$$
2. **Destructive (φ = π, 3π, 5π, &mldr;):**

   $$A_{min} = |A_1 - A_2|$$

$$I_{min} = (I_1^{1/2} - I_2^{1/2})^2$$
3. **For equal amplitudes (A₁ = A₂ = A₀):**

   $$A = 2A_0 \cos(\phi/2)$$

$$I = 4I_0 \cos^2(\phi/2)$$

---

### 8. Intensity Relations

**Intensity ∝ (Amplitude)²:**

$$\boxed{I = kA^2}$$

For two coherent sources:

$$\boxed{I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos \phi}$$

**Maximum intensity:**

$$\boxed{I_{max} = I_1 + I_2 + 2\sqrt{I_1 I_2} = (\sqrt{I_1} + \sqrt{I_2})^2}$$

**Minimum intensity:**

$$\boxed{I_{min} = I_1 + I_2 - 2\sqrt{I_1 I_2} = (\sqrt{I_1} - \sqrt{I_2})^2}$$

**For equal intensities (I₁ = I₂ = I₀):**

- I_max = 4I₀
- I_min = 0
- Average intensity = 2I₀ (energy conserved!)

---

## The Formula Cheat Sheet

```plaintext
WAVE OPTICS ESSENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Wave equation:        y = A sin(ωt - kx + φ)
2. Wave speed:           c = fλ = ω/k
3. Phase-path:           φ = (2π/λ)Δx
4. Constructive:         Δx = nλ, φ = 2nπ
5. Destructive:          Δx = (n+½)λ, φ = (2n+1)π
6. Resultant amp:        A² = A₁² + A₂² + 2A₁A₂cosφ
7. Intensity:            I = I₁ + I₂ + 2√(I₁I₂)cosφ
8. Equal sources:        I_max = 4I₀, I_min = 0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Common Traps & Mistakes

### Trap #1: Confusing Path and Phase Difference

❌ **Wrong:** Using path difference directly in cosφ
✅ **Right:** Convert: φ = (2π/λ) × Δx first!

### Trap #2: Intensity Addition

❌ **Wrong:** I_total = I₁ + I₂ (ignoring interference term)
✅ **Right:** I = I₁ + I₂ + 2√(I₁I₂)cosφ

### Trap #3: Wavelength in Medium

❌ **Wrong:** Using vacuum wavelength in medium
✅ **Right:** λ_medium = λ_vacuum / n

### Trap #4: Coherence Requirement

❌ **Wrong:** Expecting interference from any two sources
✅ **Right:** Sources must be coherent (same frequency, constant phase)

---

## Practice Problems

### Level 1: JEE Main Warmup

**Problem 1.1:** Two waves have path difference of 3λ/2. What is the phase difference? Is interference constructive or destructive?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: Δx = 3λ/2</p><p>Phase difference:</p>$$\phi = \frac{2\pi}{\lambda} \times \Delta x = \frac{2\pi}{\lambda} \times \frac{3\lambda}{2} = 3\pi$$<p>Since φ = 3π = (2×1+1)π → odd multiple of π</p><p><strong>Answer:</strong> Phase difference = 3π, <strong>Destructive interference</strong></p></div></details>

---

**Problem 1.2:** Two coherent sources have intensities in ratio 4:1. Find the ratio of maximum to minimum intensity.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: I₁/I₂ = 4/1</p><p>Let I₂ = I, then I₁ = 4I</p>$$I_{max} = (\sqrt{I_1} + \sqrt{I_2})^2 = (\sqrt{4I} + \sqrt{I})^2 = (2\sqrt{I} + \sqrt{I})^2 = (3\sqrt{I})^2 = 9I$$

$$I_{min} = (\sqrt{I_1} - \sqrt{I_2})^2 = (2\sqrt{I} - \sqrt{I})^2 = (\sqrt{I})^2 = I$$

$$\frac{I_{max}}{I_{min}} = \frac{9I}{I} = 9$$<p><strong>Answer:</strong> 9:1</p><p><strong>Formula trick:</strong></p>$$\frac{I_{max}}{I_{min}} = \frac{(\sqrt{I_1} + \sqrt{I_2})^2}{(\sqrt{I_1} - \sqrt{I_2})^2} = \left(\frac{\sqrt{4} + \sqrt{1}}{\sqrt{4} - \sqrt{1}}\right)^2 = \left(\frac{3}{1}\right)^2 = 9$$</div></details>

---

### Level 2: JEE Main/Advanced

**Problem 2.1:** Two coherent sources of equal intensity I₀ produce interference. Find:
(a) Maximum and minimum intensities
(b) Intensity at a point where phase difference is π/3
(c) Intensity at a point where path difference is λ/4

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: I₁ = I₂ = I₀</p><p><strong>(a) Maximum and minimum:</strong></p>$$I_{max} = 4I_0$$<p></p>$$I_{min} = 0$$<p><strong>(b) At φ = π/3:</strong></p>$$I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos \phi$$<p></p>$$I = I_0 + I_0 + 2\sqrt{I_0 \cdot I_0} \cos(\pi/3)$$<p></p>$$I = 2I_0 + 2I_0 \times \frac{1}{2} = 2I_0 + I_0 = 3I_0$$<p><strong>(c) At Δx = λ/4:</strong></p>$$\phi = \frac{2\pi}{\lambda} \times \frac{\lambda}{4} = \frac{\pi}{2}$$

$$I = 2I_0 + 2I_0 \cos(\pi/2) = 2I_0 + 0 = 2I_0$$<p><strong>Answers:</strong></p><ul><li>(a) I_max = 4I₀, I_min = 0</li><li>(b) I = 3I₀</li><li>(c) I = 2I₀</li></ul></div></details>

---

**Problem 2.2:** Two waves are represented by:
y₁ = 5 sin(ωt)
y₂ = 5 sin(ωt + π/2)

Find the amplitude of resultant wave.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: A₁ = A₂ = 5, φ = π/2</p>$$A = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \cos \phi}$$<p></p>$$A = \sqrt{25 + 25 + 2 \times 5 \times 5 \times \cos(\pi/2)}$$<p></p>$$A = \sqrt{50 + 50 \times 0} = \sqrt{50} = 5\sqrt{2}$$<p><strong>Answer:</strong> A = 5√2</p><p><strong>Alternative (for π/2):</strong>
For equal amplitudes and φ = 90°:</p>$$A = A_0\sqrt{2} = 5\sqrt{2}$$</div></details>

---

### Level 3: JEE Advanced

**Problem 3.1:** Three coherent sources of equal intensity I₀ are placed at vertices of an equilateral triangle. Find the intensity at the centroid. (Assume all have same phase)

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>All three sources have:</p><ul><li>Same amplitude A₀</li><li>Same phase (φ = 0)</li><li>Equal distance from centroid</li></ul><p>The three waves arriving at centroid:</p>$$y_1 = A_0 \sin(\omega t)$$<p></p>$$y_2 = A_0 \sin(\omega t)$$<p></p>$$y_3 = A_0 \sin(\omega t)$$<p>Resultant:</p>$$y = 3A_0 \sin(\omega t)$$<p>Resultant amplitude:</p>$$A = 3A_0$$<p>Intensity:</p>$$I = kA^2 = k(3A_0)^2 = 9kA_0^2 = 9I_0$$<p><strong>Answer:</strong> I = 9I₀</p><p><strong>General formula for n coherent sources in phase:</strong></p>$$I = n^2 I_0$$</div></details>

---

**Problem 3.2:** A point source S emits light of wavelength λ. Two points A and B are at distances 10λ and 10.5λ from S. What is the phase difference between waves reaching A and B?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Path from S to A: r_A = 10λ
Path from S to B: r_B = 10.5λ</p><p>Path difference:</p>$$\Delta x = r_B - r_A = 10.5\lambda - 10\lambda = 0.5\lambda = \frac{\lambda}{2}$$<p>Phase difference:</p>$$\phi = \frac{2\pi}{\lambda} \times \Delta x = \frac{2\pi}{\lambda} \times \frac{\lambda}{2} = \pi$$<p><strong>Answer:</strong> φ = π radians (180°)</p><p>This is <strong>destructive interference</strong> condition.</p></div></details>

---

## Advanced Concepts

### 1. Doppler Effect for Light

$$\boxed{f' = f\sqrt{\frac{1 \pm v/c}{1 \mp v/c}}}$$

**Approaching:** Use upper signs
**Receding:** Use lower signs

**Red shift:** Source receding → frequency decreases, wavelength increases
**Blue shift:** Source approaching → frequency increases

### 2. Electromagnetic Spectrum

| Type | Wavelength | Frequency |
| --- | --- | --- |
| Radio | > 1 m | < 300 MHz |
| Microwave | 1 mm - 1 m | 300 MHz - 300 GHz |
| Infrared | 700 nm - 1 mm | 300 GHz - 430 THz |
| Visible | 400-700 nm | 430-750 THz |
| UV | 10-400 nm | 750 THz - 30 PHz |
| X-ray | 0.01-10 nm | 30 PHz - 30 EHz |
| Gamma | < 0.01 nm | > 30 EHz |

**Visible spectrum:** VIBGYOR (400-700 nm)

---

## Quick Revision Cards

```plaintext
╔══════════════════════════════════════╗
║  WAVE OPTICS QUICK FACTS            ║
╚══════════════════════════════════════╝

🎯 Light is EM wave (transverse)
🎯 Wavefront ⊥ rays
🎯 Huygens: Every point → secondary source
🎯 Coherence: same f, constant φ
🎯 Constructive: Δx = nλ
🎯 Destructive: Δx = (n+½)λ
🎯 φ = (2π/λ)Δx
🎯 I_max/I_min = (√I₁+√I₂)²/(√I₁-√I₂)²
🎯 Equal sources: I_max = 4I₀
```

---

## Cross-Topic Connections

- **[Interference](../interference/index.md)**: Young’s double slit uses wave optics
- **[Diffraction](../diffraction/index.md)**: Explained by Huygens principle
- **[Polarization](../polarization/index.md)**: Shows transverse nature
- **[EM Waves](../../electromagnetic-waves/index.md)**: Light is EM radiation
- **[Dual Nature](../../dual-nature/index.md)**: Wave-particle duality

---

## Exam Strategy

**Time Allocation:**

- Wavefront/Huygens questions: 2 min
- Coherence/superposition: 3 min
- Intensity calculations: 3 min

**Common JEE Patterns:**

1. **Intensity ratio calculations**
2. **Path/phase difference conversions**
3. **Huygens construction**
4. **Coherent source requirements**
5. **Wavelength in different media**

---

## Final Tips

1. **Always convert** path difference to phase difference for intensity
2. **Coherence is must** for stable interference
3. **Energy is conserved:** Average intensity = I₁ + I₂
4. **In medium:** λ_medium = λ_vacuum / n
5. **Wavefront ⊥ rays:** Use this for constructions

**Pro Tip:** For equal intensities, I_max = 4I₀ (not 2I₀!) - very common JEE trap!

---

*Next up: [Interference](../interference/index.md) - Young’s double slit experiment!*

From TestGuru · our mock-test platform

## You've read Wave Optics - Huygens Principle & Wavefronts.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Fwave-optics%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/wave-optics/",this.page.identifier="/physics/optics/wave-optics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="wavefronts" id="anim-wavefronts-1795396424028293855"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-wavefronts-1795396424028293855")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="huygensConstruction" id="anim-huygensConstruction-1795396424028321589"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-huygensConstruction-1795396424028321589")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/wave-optics/](https://jeenotes.in/physics/optics/wave-optics/) · raw HTML: `offline/physics/optics/wave-optics/index.html`_
