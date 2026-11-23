---
title: "Interference - Young's Double Slit & Thin Films"
source: "https://jeenotes.in/physics/optics/interference/"
description: "Master Young's double slit experiment, interference conditions, and thin film interference for JEE"
updated: "2026-10-18"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 13"
html: "../../../../offline/physics/optics/interference/index.html"
extracted: "2026-11-23"
---

> Master Young's double slit experiment, interference conditions, and thin film interference for JEE

# Interference - Creating Light and Dark Patterns

## The Movie Hook 🎬

Ever seen oil spills creating rainbow colors on water? Or soap bubbles showing swirling colors? Or the holographic security strips on currency notes? These are all **interference patterns** - nature’s way of creating colors without pigments! Even the beautiful patterns in *Doctor Strange*’s mirror dimension follow interference principles!

---

## The Big Picture

**Interference:** Redistribution of light intensity due to superposition of two or more coherent light waves.

**Key applications:**

- **Thin film colors** (soap bubbles, oil films)
- **Anti-reflection coatings** (camera lenses, eyeglasses)
- **Holography** (3D images)
- **Interferometers** (precision measurements)

**Connection Alert:** Builds on [Wave Optics](../wave-optics/index.md), relates to [Diffraction](../diffraction/index.md).

---

## Core Concepts

### 1. Conditions for Sustained Interference

1. **Coherent sources:** Same frequency, constant phase difference
2. **Same amplitude or comparable amplitudes** (for good contrast)
3. **Waves should be in same state of polarization**
4. **Monochromatic light** (single wavelength)

**Why monochromatic?**

- Different wavelengths → different fringe patterns
- Overlapping patterns → loss of clarity

---

### 2. Young’s Double Slit Experiment (YDSE)

**The most important experiment in wave optics!**

**Setup:**

- Single source S (for coherence)
- Two slits S₁ and S₂ separated by distance **d**
- Screen at distance **D** from slits
- Point P on screen at distance **y** from center O

**Path difference:**

$$\boxed{\Delta x = S_2P - S_1P \approx \frac{yd}{D}}$$

(For D » d and D » y)

---

### 3. Position of Bright Fringes (Maxima)

**Condition:** Path difference = nλ

$$\boxed{y_n = \frac{n\lambda D}{d}}$$

Where:

- **n** = 0, 1, 2, 3, &mldr; (order of fringe)
- **n = 0:** Central bright fringe
- **n = 1, 2, 3, &mldr;:** 1st, 2nd, 3rd order bright fringes

**Central maximum is brightest** (n = 0)

---

### 4. Position of Dark Fringes (Minima)

**Condition:** Path difference = (n + 1/2)λ = (2n+1)λ/2

$$\boxed{y_n = \frac{(2n+1)\lambda D}{2d}}$$

Where n = 0, 1, 2, 3, &mldr;

**First dark fringe:** n = 0 → y = λD/(2d)

---

### 5. Fringe Width (β)

**Fringe width:** Distance between consecutive bright (or dark) fringes

$$\boxed{\beta = \frac{\lambda D}{d}}$$

**Key properties:**

- All fringes are **equally spaced**
- β ∝ λ (red light → wider fringes than violet)
- β ∝ D (farther screen → wider fringes)
- β ∝ 1/d (closer slits → wider fringes)

**Memory Trick:** “**B**igger **W**avelength = **B**igger **W**idth” (β ∝ λ)

---

### 6. Angular Width

**Angular fringe width:**

$$\boxed{\theta = \frac{\beta}{D} = \frac{\lambda}{d}}$$

Independent of D!

**Angular position of nth bright fringe:**

$$\boxed{\theta_n = \frac{n\lambda}{d}}$$

---

### 7. Intensity Distribution

For two coherent sources of equal intensity I₀:

$$\boxed{I = 4I_0 \cos^2\left(\frac{\phi}{2}\right)}$$

Where phase difference:

$$\phi = \frac{2\pi}{\lambda} \times \Delta x = \frac{2\pi yd}{\lambda D}$$

Or:

$$\boxed{I = 4I_0 \cos^2\left(\frac{\pi yd}{\lambda D}\right)}$$

**At maxima (Δx = nλ):**

$$I_{max} = 4I_0$$

**At minima (Δx = (2n+1)λ/2):**

$$I_{min} = 0$$

**Average intensity over screen:**

$$I_{avg} = 2I_0$$

---

## Variations of YDSE

### 1. One Slit Wider

If one slit provides intensity I₁ and other I₂:

$$\boxed{I_{max} = (\sqrt{I_1} + \sqrt{I_2})^2}$$

$$\boxed{I_{min} = (\sqrt{I_1} - \sqrt{I_2})^2}$$

**Visibility (contrast):**

$$\boxed{V = \frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}}$$

Maximum visibility = 1 (when I₁ = I₂)

---

### 2. Thin Film in Front of One Slit

If film of thickness **t** and refractive index **n** is placed in front of one slit:

**Additional path difference introduced:**

$$\boxed{\Delta x_{extra} = (n-1)t}$$

**Shift in fringe pattern:**

$$\boxed{y_{shift} = \frac{(n-1)tD}{d}}$$

Pattern shifts **towards** the slit with film.

Central maximum is NO longer at center!

---

### 3. YDSE in Medium

When entire setup is in medium of refractive index n:

**Wavelength in medium:**

$$\lambda_m = \frac{\lambda}{n}$$

**New fringe width:**

$$\boxed{\beta_m = \frac{\lambda_m D}{d} = \frac{\lambda D}{nd} = \frac{\beta}{n}}$$

Fringes become **narrower**!

---

### 4. White Light YDSE

**Central fringe:** White (all wavelengths constructively interfere)

**Other fringes:** Colored

- Inner edge: Violet (λ smallest)
- Outer edge: Red (λ largest)

**After a few orders:** Overlapping colors → uniform illumination

**Position of nth bright fringe for color λ:**

$$y_n = \frac{n\lambda D}{d}$$

Since λ_red > λ_violet:

- Red fringes are farther from center
- Violet fringes are closer

---

## The Formula Cheat Sheet

```plaintext
YDSE ESSENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Path difference:      Δx = yd/D
2. Bright fringes:       y_n = nλD/d
3. Dark fringes:         y_n = (2n+1)λD/(2d)
4. Fringe width:         β = λD/d
5. Angular width:        θ = λ/d
6. Intensity:            I = 4I₀cos²(φ/2)
7. With film:            shift = (n-1)tD/d
8. In medium:            β_m = β/n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Thin Film Interference

### 1. Interference in Thin Films

**Examples:** Soap bubbles, oil films, anti-reflection coatings

**Two reflections:**

1. From **upper surface** (air-film)
2. From **lower surface** (film-air)

**Path difference:**

$$\boxed{\Delta x = 2nt \cos r}$$

Where:

- **n** = refractive index of film
- **t** = thickness of film
- **r** = angle of refraction in film

**For normal incidence (i = 0, r = 0):**

$$\boxed{\Delta x = 2nt}$$

---

### 2. Phase Change on Reflection

**Critical rule:** When light reflects from denser medium, phase change of **π** occurs.

**For film in air:**

- Reflection from upper surface: **phase change π** (rarer to denser)
- Reflection from lower surface: **no phase change** (denser to rarer)

**Effective path difference:**

$$\boxed{\Delta x_{eff} = 2nt \pm \frac{\lambda}{2}}$$

**Use +λ/2** if phase change occurs at one surface only.

---

### 3. Conditions for Constructive/Destructive

**For normal incidence on film in air:**

**Constructive interference (bright):**

$$\boxed{2nt = (m + \frac{1}{2})\lambda}$$

(m = 0, 1, 2, &mldr;)

**Destructive interference (dark):**

$$\boxed{2nt = m\lambda}$$

(m = 0, 1, 2, &mldr;)

**Note:** Opposite to standard YDSE due to phase change!

---

### 4. Anti-Reflection Coating

**Goal:** Minimize reflection, maximize transmission

**Condition for minimum reflection:**

$$\boxed{t = \frac{\lambda}{4n}}$$

For λ = 550 nm (middle of visible spectrum), n ≈ 1.38 (MgF₂):

$$t = \frac{550}{4 \times 1.38} \approx 100 \text{ nm}$$

**Refractive index of coating:**

$$\boxed{n_{coating} = \sqrt{n_{glass}}}$$

For glass (n = 1.5): n_coating ≈ 1.22

---

### 5. Newton’s Rings

**Setup:** Plano-convex lens on glass plate

**Air film** of variable thickness between lens and plate

**Thickness at distance r from center:**

$$\boxed{t = \frac{r^2}{2R}}$$

Where R = radius of curvature of lens

**Radius of nth dark ring:**

$$\boxed{r_n = \sqrt{n\lambda R}}$$

**Radius of nth bright ring:**

$$\boxed{r_n = \sqrt{(n - \frac{1}{2})\lambda R}}$$

**Central spot is dark** (due to phase change at glass surface)

---

## Common Traps & Mistakes

### Trap #1: Path Difference Formula

❌ **Wrong:** Using exact formula when approximation is valid
✅ **Right:** For D » d and D » y, use Δx = yd/d

### Trap #2: Film Interference Phase Change

❌ **Wrong:** Forgetting π phase change in thin films
✅ **Right:** Add λ/2 to path difference for single phase change

### Trap #3: Fringe Width Direction

❌ **Wrong:** Thinking β changes with position on screen
✅ **Right:** All fringes equally spaced (β constant)

### Trap #4: White Light Central Fringe

❌ **Wrong:** Central fringe is colored
✅ **Right:** Central fringe is WHITE, others are colored

### Trap #5: Shift with Film

❌ **Wrong:** Pattern shifts away from slit with film
✅ **Right:** Pattern shifts TOWARDS slit with film

---

## Practice Problems

### Level 1: JEE Main Warmup

**Problem 1.1:** In YDSE, slits are 0.5 mm apart and screen is 1 m away. Light of wavelength 600 nm is used. Find fringe width.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: d = 0.5 mm = 0.5 × 10⁻³ m, D = 1 m, λ = 600 nm = 600 × 10⁻⁹ m</p>$$\beta = \frac{\lambda D}{d} = \frac{600 \times 10^{-9} \times 1}{0.5 \times 10^{-3}}$$

$$\beta = \frac{600 \times 10^{-9}}{0.5 \times 10^{-3}} = 1.2 \times 10^{-3} \text{ m} = 1.2 \text{ mm}$$<p><strong>Answer:</strong> β = 1.2 mm</p></div></details>

---

**Problem 1.2:** In the above setup, find the position of 3rd bright fringe.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For 3rd bright fringe: n = 3</p>$$y_3 = \frac{n\lambda D}{d} = \frac{3 \times 600 \times 10^{-9} \times 1}{0.5 \times 10^{-3}}$$

$$y_3 = 3.6 \times 10^{-3} \text{ m} = 3.6 \text{ mm}$$<p><strong>Alternative:</strong> y_n = nβ = 3 × 1.2 = 3.6 mm</p><p><strong>Answer:</strong> 3.6 mm from center</p></div></details>

---

**Problem 1.3:** What should be the thickness of anti-reflection coating (n = 1.4) for λ = 560 nm?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For minimum reflection:</p>$$t = \frac{\lambda}{4n} = \frac{560 \times 10^{-9}}{4 \times 1.4} = \frac{560 \times 10^{-9}}{5.6} = 100 \times 10^{-9} \text{ m}$$<p><strong>Answer:</strong> t = 100 nm</p></div></details>

---

### Level 2: JEE Main/Advanced

**Problem 2.1:** In YDSE with d = 1 mm, D = 1 m, λ = 500 nm, a thin glass plate of thickness 0.01 mm and n = 1.5 is placed in front of one slit. Find:
(a) Shift in fringe pattern
(b) Position of central maximum

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: d = 1 mm = 10⁻³ m, D = 1 m, λ = 500 nm = 5 × 10⁻⁷ m
t = 0.01 mm = 10⁻⁵ m, n = 1.5</p><p><strong>(a) Shift:</strong></p>$$y_{shift} = \frac{(n-1)tD}{d} = \frac{(1.5-1) \times 10^{-5} \times 1}{10^{-3}}$$

$$y_{shift} = \frac{0.5 \times 10^{-5}}{10^{-3}} = 5 \times 10^{-3} \text{ m} = 5 \text{ mm}$$<p><strong>(b) Position of central maximum:</strong></p><p>Central maximum shifts by 5 mm <strong>towards</strong> the slit with glass plate.</p><p>If glass plate is in front of upper slit, central max is at y = +5 mm
If in front of lower slit, central max is at y = -5 mm</p><p><strong>Answers:</strong></p><ul><li>(a) 5 mm shift</li><li>(b) 5 mm from geometrical center (towards slit with film)</li></ul></div></details>

---

**Problem 2.2:** In YDSE, 5th bright fringe of one wavelength coincides with 6th bright fringe of another wavelength. If first wavelength is 600 nm, find second wavelength.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For same position:</p>$$y_5(\lambda_1) = y_6(\lambda_2)$$

$$\frac{5\lambda_1 D}{d} = \frac{6\lambda_2 D}{d}$$

$$5\lambda_1 = 6\lambda_2$$

$$\lambda_2 = \frac{5\lambda_1}{6} = \frac{5 \times 600}{6} = 500 \text{ nm}$$<p><strong>Answer:</strong> λ₂ = 500 nm</p></div></details>

---

**Problem 2.3:** In YDSE, intensity at point P is I₀/4 where I₀ is maximum intensity. Find path difference at P.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Since I₀ here is the <strong>maximum</strong> intensity:</p>$$I = I_0 \cos^2\left(\frac{\phi}{2}\right)$$<p></p>$$\frac{I_0}{4} = I_0 \cos^2\left(\frac{\phi}{2}\right) \Rightarrow \cos\left(\frac{\phi}{2}\right) = \frac{1}{2} \Rightarrow \phi = \frac{2\pi}{3}$$<p></p>$$\Delta x = \frac{\lambda}{2\pi} \times \frac{2\pi}{3} = \frac{\lambda}{3}$$<p><strong>Answer:</strong> Δx = λ/3 (in general, (n ± 1/3)λ)</p></div></details>

---

### Level 3: JEE Advanced

**Problem 3.1:** In Newton’s rings experiment with R = 100 cm and λ = 600 nm, find:
(a) Radius of 10th dark ring
(b) Radius of 10th bright ring

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: R = 100 cm = 1 m, λ = 600 nm = 6 × 10⁻⁷ m</p><p><strong>(a) 10th dark ring (n = 10):</strong></p>$$r_n = \sqrt{n\lambda R} = \sqrt{10 \times 6 \times 10^{-7} \times 1}$$

$$r_{10} = \sqrt{6 \times 10^{-6}} = 2.45 \times 10^{-3} \text{ m} = 2.45 \text{ mm}$$<p><strong>(b) 10th bright ring:</strong></p>$$r_n = \sqrt{(n - 1/2)\lambda R} = \sqrt{9.5 \times 6 \times 10^{-7} \times 1}$$

$$r_{10} = \sqrt{5.7 \times 10^{-6}} = 2.39 \times 10^{-3} \text{ m} = 2.39 \text{ mm}$$<p><strong>Answers:</strong></p><ul><li>(a) 2.45 mm</li><li>(b) 2.39 mm</li></ul></div></details>

---

**Problem 3.2:** In YDSE, one slit provides 4 times intensity of other. Find ratio of maximum to minimum intensity.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Let I₂ = I, then I₁ = 4I</p>$$I_{max} = (\sqrt{I_1} + \sqrt{I_2})^2 = (\sqrt{4I} + \sqrt{I})^2 = (2\sqrt{I} + \sqrt{I})^2 = 9I$$

$$I_{min} = (\sqrt{I_1} - \sqrt{I_2})^2 = (2\sqrt{I} - \sqrt{I})^2 = I$$

$$\frac{I_{max}}{I_{min}} = \frac{9I}{I} = 9$$<p><strong>Answer:</strong> 9:1</p><p><strong>Formula:</strong></p>$$\frac{I_{max}}{I_{min}} = \frac{(\sqrt{r} + 1)^2}{(\sqrt{r} - 1)^2}$$<p>where r = I₁/I₂ = 4</p>$$= \frac{(2+1)^2}{(2-1)^2} = \frac{9}{1} = 9$$</div></details>

---

## Quick Revision Cards

```plaintext
╔══════════════════════════════════════╗
║  INTERFERENCE QUICK FACTS           ║
╚══════════════════════════════════════╝

YDSE:
🎯 β = λD/d (fringe width)
🎯 y_n = nλD/d (bright)
🎯 All fringes equally spaced
🎯 I_max = 4I₀, I_min = 0
🎯 Film shift = (n-1)tD/d

THIN FILMS:
🎯 Path diff = 2nt (normal incidence)
🎯 Phase change π (rarer→denser reflection)
🎯 Anti-reflection: t = λ/4n
🎯 Newton's rings: r = √(nλR) (dark)

KEY POINTS:
🎯 Coherence essential
🎯 White light: central white, others colored
🎯 In medium: β becomes β/n
```

---

## Cross-Topic Connections

- **[Wave Optics](../wave-optics/index.md)**: Foundation for interference
- **[Diffraction](../diffraction/index.md)**: Combined with YDSE in reality
- **[Refraction](../refraction/index.md)**: Thin film calculations
- **[EM Waves](../../electromagnetic-waves/index.md)**: Nature of light waves

---

## Final Tips

1. **Always write** d, D, λ clearly - easy to confuse!
2. **Fringe width constant** throughout screen
3. **Film shift:** Pattern moves TOWARDS film
4. **Thin films:** Remember phase change π
5. **White light:** Central is white!

**Pro Tip:** For maximum contrast, I₁ = I₂ (equal slit widths)

---

*Next up: [Diffraction](../diffraction/index.md) - bending around obstacles!*

From TestGuru · our mock-test platform

## You've read Interference - Young's Double Slit & Thin Films.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Finterference%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/interference/",this.page.identifier="/physics/optics/interference/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-19

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="youngsDoubleSlit" id="anim-youngsDoubleSlit-1795396423993243550"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-youngsDoubleSlit-1795396423993243550")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="thinFilm" id="anim-thinFilm-1795396423993270175"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thinFilm-1795396423993270175")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-3

```html
<div class="animation-wrapper" data-animation="newtonsRings" id="anim-newtonsRings-1795396423993288894"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-newtonsRings-1795396423993288894")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/interference/](https://jeenotes.in/physics/optics/interference/) · raw HTML: `offline/physics/optics/interference/index.html`_
