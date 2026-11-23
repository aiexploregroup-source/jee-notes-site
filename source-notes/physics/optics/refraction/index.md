---
title: "Refraction of Light - Snell's Law and Total Internal Reflection"
source: "https://jeenotes.in/physics/optics/refraction/"
description: "Master Snell's law, refractive index, critical angle, and TIR for JEE Main and Advanced"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 9 of 13"
html: "../../../../offline/physics/optics/refraction/index.html"
extracted: "2026-11-23"
---

> Master Snell's law, refractive index, critical angle, and TIR for JEE Main and Advanced

# Refraction of Light - Bending Light Paths

## The Movie Hook 🎬

Ever noticed how *Interstellar*’s black hole bends light creating gravitational lensing? Or why the pool in *The Graduate* looks shallower than it is? Or how *Cast Away* could use water droplets as magnifying glasses? That’s all refraction - light bending as it enters different materials!

---

## The Big Picture

**Refraction** is the bending of light when it passes from one medium to another due to change in speed. This is the foundation for:

- **Lenses** (glasses, cameras, microscopes)
- **Optical fibers** (internet cables!)
- **Atmospheric phenomena** (mirages, rainbows)
- **Total Internal Reflection** (diamonds sparkle!)

**Connection Alert:** Links to [Thin Lens](../thin-lens/index.md), [Prism](../prism/index.md), and [Wave Optics](../wave-optics/index.md).

---

## Core Concepts

### 1. Refractive Index

**Definition:** Ratio of speed of light in vacuum to speed in medium

$$\boxed{n = \frac{c}{v}}$$

Where:

- **n** = refractive index (dimensionless)
- **c** = speed of light in vacuum = 3 × 10⁸ m/s
- **v** = speed of light in medium

**Key Values to Remember:**

| Medium | Refractive Index |
| --- | --- |
| Vacuum | 1.0 (exactly) |
| Air | ~1.0003 ≈ 1 |
| Water | 1.33 |
| Glass | 1.5 |
| Diamond | 2.42 |

**Memory Trick:** “**V**ery **W**et **G**irls **D**ance” (Vacuum < Water < Glass < Diamond)

---

### 2. Snell’s Law

When light passes from medium 1 to medium 2:

$$\boxed{n_1 \sin i = n_2 \sin r}$$

Or equivalently:

$$\boxed{\frac{n_2}{n_1} = \frac{\sin i}{\sin r} = \frac{v_1}{v_2} = \frac{\lambda_1}{\lambda_2}}$$

**Critical Insight:** Frequency remains constant during refraction!

**Memory Trick:** “**S**illy **N**ice **I**ndex **S**tudents **R**ule” (sn × i = sn × r)

---

### 3. Behavior at Interface

#### Case 1: Rarer to Denser (n₂ > n₁)

- Light **bends towards normal**
- r < i (angle of refraction < angle of incidence)
- Speed decreases
- Wavelength decreases

#### Case 2: Denser to Rarer (n₂ < n₁)

- Light **bends away from normal**
- r > i
- Speed increases
- Wavelength increases

> **◐ In simple terms**
>
> **Golden Rule:** Light bends **towards** normal when entering denser medium, **away** from normal when entering rarer medium.

---

### 4. Apparent Depth & Real Depth

When viewing object in water from air:

$$\boxed{\text{Apparent Depth} = \frac{\text{Real Depth}}{n}}$$

Or more generally:

$$\boxed{n = \frac{\text{Real Depth}}{\text{Apparent Depth}}}$$

**For small angles:**

$$\boxed{\text{Shift} = t\left(1 - \frac{1}{n}\right)}$$

Where t = thickness of medium

**JEE Trick:** Object appears closer when viewing from denser to rarer medium!

---

### 5. Total Internal Reflection (TIR)

**Conditions for TIR:**

1. Light travels from **denser to rarer** medium (n₁ > n₂)
2. Angle of incidence > Critical angle (i > iₓ)

#### Critical Angle

$$\boxed{\sin i_c = \frac{n_2}{n_1}}$$

For air-water:

$$i_c = \sin^{-1}\left(\frac{1}{1.33}\right) \approx 48.6°$$

For air-glass:

$$i_c = \sin^{-1}\left(\frac{1}{1.5}\right) \approx 41.8°$$

For air-diamond:

$$i_c = \sin^{-1}\left(\frac{1}{2.42}\right) \approx 24.4°$$

**Memory Trick:** “**TIR** requires **D**enser to **R**arer and **C**ritical” (DRC)

---

### 6. Applications of TIR

1. **Optical Fibers:** Light trapped by repeated TIR

   - Core has higher n than cladding
   - Used in telecommunications, internet
2. **Diamonds:** Small critical angle → multiple TIR → sparkle
3. **Mirage:** Hot air (rarer) below, cooler air (denser) above → TIR
4. **Prisms:** 45-45-90 prism used in binoculars

---

### 7. Refraction Through Glass Slab

**Key Result:** Emergent ray is **parallel** to incident ray but **laterally displaced**

$$\boxed{\text{Lateral Displacement} = t \frac{\sin(i - r)}{\cos r}}$$

Where:

- t = thickness of slab
- i = angle of incidence
- r = angle of refraction

**For small angles:**

$$\boxed{d \approx t(i - r) = t \cdot i\left(1 - \frac{1}{n}\right)}$$

---

## The Formula Cheat Sheet

```plaintext
REFRACTION ESSENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Refractive index:     n = c/v
2. Snell's law:          n₁sin i = n₂sin r
3. Apparent depth:       d_app = d_real / n
4. Critical angle:       sin iₓ = n₂/n₁
5. TIR condition:        i > iₓ (denser→rarer)
6. Slab shift:           s = t(1 - 1/n)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Common Traps & Mistakes

### Trap #1: Confusing Rarer and Denser

❌ **Wrong:** Assuming higher density → higher refractive index
✅ **Right:** Optically denser means higher n (not physical density!)

### Trap #2: TIR Direction

❌ **Wrong:** Expecting TIR when going rarer → denser
✅ **Right:** TIR only when denser → rarer

### Trap #3: Critical Angle Formula

❌ **Wrong:** sin iₓ = n₁/n₂
✅ **Right:** sin iₓ = n₂/n₁ (smaller n in numerator!)

### Trap #4: Frequency vs Wavelength

❌ **Wrong:** Thinking frequency changes during refraction
✅ **Right:** Only speed and wavelength change; frequency constant!

---

## Practice Problems

### Level 1: JEE Main Warmup

**Problem 1.1:** Light travels from air (n=1) into water (n=1.33) at 60° to normal. Find angle of refraction.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: n₁ = 1, n₂ = 1.33, i = 60°</p><p>Using Snell’s law:</p>$$n_1 \sin i = n_2 \sin r$$<p></p>$$1 \times \sin 60° = 1.33 \times \sin r$$<p></p>$$\sin r = \frac{\sqrt{3}/2}{1.33} = \frac{0.866}{1.33} = 0.651$$<p></p>$$r = \sin^{-1}(0.651) \approx 40.6°$$<p><strong>Answer:</strong> 40.6° (bends towards normal as expected)</p></div></details>

---

**Problem 1.2:** A coin lies at the bottom of a pool 3m deep (n=1.33). What is its apparent depth when viewed from above?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content">$$\text{Apparent depth} = \frac{\text{Real depth}}{n} = \frac{3}{1.33} = 2.26 \text{ m}$$<p><strong>Answer:</strong> 2.26 m (appears closer!)</p></div></details>

---

**Problem 1.3:** Find the critical angle for water-air interface (n_water = 1.33).

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For water → air: n₁ = 1.33, n₂ = 1</p>$$\sin i_c = \frac{n_2}{n_1} = \frac{1}{1.33} = 0.752$$<p></p>$$i_c = \sin^{-1}(0.752) \approx 48.8°$$<p><strong>Answer:</strong> 48.8°</p></div></details>

---

### Level 2: JEE Main/Advanced

**Problem 2.1:** A ray of light passes through a glass slab (n=1.5) of thickness 6 cm at an angle of incidence 60°. Find the lateral displacement.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: n = 1.5, t = 6 cm, i = 60°</p><p>First find r using Snell’s law:</p>$$\sin r = \frac{n_1 \sin i}{n_2} = \frac{1 \times \sin 60°}{1.5} = \frac{\sqrt{3}/2}{1.5} = 0.577$$<p></p>$$r = \sin^{-1}(0.577) = 35.3°$$<p>Lateral displacement:</p>$$d = t \frac{\sin(i-r)}{\cos r}$$<p></p>$$d = 6 \times \frac{\sin(60° - 35.3°)}{\cos 35.3°}$$<p></p>$$d = 6 \times \frac{\sin 24.7°}{\cos 35.3°} = 6 \times \frac{0.418}{0.816} = 3.07 \text{ cm}$$<p><strong>Answer:</strong> 3.07 cm</p></div></details>

---

**Problem 2.2:** A light ray is incident on a water surface at polarizing angle (Brewster’s angle). If refractive index of water is 4/3, find the angle of refraction.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>At Brewster’s angle:</p>$$\tan i_p = n = \frac{4}{3}$$<p>This gives:</p>$$i_p = \tan^{-1}(4/3) = 53.1°$$<p><strong>Special property:</strong> At Brewster’s angle:</p>$$i_p + r = 90°$$<p>Therefore:</p>$$r = 90° - 53.1° = 36.9°$$<p>We can verify using Snell’s law:</p>$$1 \times \sin 53.1° = \frac{4}{3} \times \sin r$$<p></p>$$\sin r = \frac{3 \times 0.8}{4} = 0.6$$<p></p>$$r = 36.9°$$<p>✓</p><p><strong>Answer:</strong> 36.9° (perpendicular to incident ray!)</p></div></details>

---

**Problem 2.3:** What should be the minimum refractive index of a material for which critical angle is 30°?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For critical angle with air (n₂ = 1):</p>$$\sin i_c = \frac{n_2}{n_1} = \frac{1}{n_1}$$<p>Given iₓ = 30°:</p>$$\sin 30° = \frac{1}{n_1}$$<p></p>$$\frac{1}{2} = \frac{1}{n_1}$$<p></p>$$n_1 = 2$$<p><strong>Answer:</strong> Refractive index = 2</p></div></details>

---

### Level 3: JEE Advanced

**Problem 3.1:** A point source is placed at the bottom of a tank filled with water (n=4/3) to height h. An opaque disc of radius r is placed on water surface with its center vertically above the source. For total darkness above the disc, find minimum r in terms of h.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For total darkness, all light from source must undergo TIR at water surface.</p><p>Critical angle:</p>$$\sin i_c = \frac{n_{\text{air}}}{n_{\text{water}}} = \frac{1}{4/3} = \frac{3}{4}$$<p>At the edge of disc, ray makes critical angle:</p>$$\tan i_c = \frac{r}{h}$$<p>From sin iₓ = 3/4, we can find cos iₓ:</p>$$\cos i_c = \sqrt{1 - \sin^2 i_c} = \sqrt{1 - \frac{9}{16}} = \frac{\sqrt{7}}{4}$$

$$\tan i_c = \frac{\sin i_c}{\cos i_c} = \frac{3/4}{\sqrt{7}/4} = \frac{3}{\sqrt{7}}$$<p>Therefore:</p>$$r = h \tan i_c = \frac{3h}{\sqrt{7}}$$<p><strong>Answer:</strong></p>$$r_{\min} = \frac{3h}{\sqrt{7}} = \frac{3h\sqrt{7}}{7}$$</div></details>

---

**Problem 3.2:** A ray of light is incident at an angle of 60° on one face of a rectangular glass slab of thickness 0.1 m and refractive index √3. Calculate the lateral shift and time taken by light to pass through the slab.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p><strong>Part A: Lateral Shift</strong></p><p>Given: i = 60°, n = √3, t = 0.1 m</p><p>Find angle of refraction:</p>$$\sin r = \frac{\sin i}{n} = \frac{\sin 60°}{\sqrt{3}} = \frac{\sqrt{3}/2}{\sqrt{3}} = \frac{1}{2}$$<p></p>$$r = 30°$$<p>Lateral displacement:</p>$$d = t \frac{\sin(i-r)}{\cos r} = 0.1 \times \frac{\sin 30°}{\cos 30°} = 0.1 \times \frac{1/2}{\sqrt{3}/2} = \frac{0.1}{\sqrt{3}} = 0.0577 \text{ m}$$<p><strong>Part B: Time Taken</strong></p><p>Distance traveled in glass:</p>$$l = \frac{t}{\cos r} = \frac{0.1}{\cos 30°} = \frac{0.1}{\sqrt{3}/2} = \frac{0.2}{\sqrt{3}}$$<p>Speed in glass:</p>$$v = \frac{c}{n} = \frac{3 \times 10^8}{\sqrt{3}}$$<p>Time:</p>$$t = \frac{l}{v} = \frac{0.2/\sqrt{3}}{3 \times 10^8/\sqrt{3}} = \frac{0.2}{3 \times 10^8} = 6.67 \times 10^{-10} \text{ s}$$<p><strong>Answers:</strong></p><ul><li>Lateral shift = 5.77 cm</li><li>Time = 6.67 × 10⁻¹⁰ s = 0.667 ns</li></ul></div></details>

---

**Problem 3.3:** A container is filled with water (n=4/3) up to height 20 cm. A point source is placed at the bottom. If we pour oil (n=1.2) on water to form a 5 cm layer, find the apparent depth of source as seen from above oil.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>This is a <strong>two-layer problem</strong>. Work backwards from top.</p><p><strong>Step 1:</strong> Apparent depth of source as seen from oil-air interface</p><p>The source appears at some depth d₁ when viewed from water’s top surface:</p>$$d_1 = \frac{20}{4/3} = 15 \text{ cm below water surface}$$<p><strong>Step 2:</strong> Now this “apparent source” is at 15 cm in water, but below 5 cm of oil</p><p>Total depth from oil surface = 5 + 15 = 20 cm (but 5 cm is in oil, 15 cm is apparent position in water)</p><p>Actually, we need to use the refraction through each layer:</p><p><strong>Correct approach:</strong>
When viewing from air through oil then water:</p><p>Shift due to water:</p>$$s_w = h_w\left(1 - \frac{1}{n_w}\right) = 20\left(1 - \frac{3}{4}\right) = 5 \text{ cm}$$<p>Object appears at: 20 - 5 = 15 cm from water’s bottom</p><p>Now this appears through oil of thickness 5 cm:</p>$$s_o = 5\left(1 - \frac{1}{1.2}\right) = 5 \times 0.167 = 0.833 \text{ cm}$$<p>Total apparent depth from top surface = 15 + 5 - 0.833 = 19.17 cm</p><p><strong>Answer:</strong> 19.17 cm from top surface</p><p><strong>Better formula:</strong> For composite medium:</p>$$d_{\text{app}} = \frac{t_1}{n_1} + \frac{t_2}{n_2} = \frac{5}{1.2} + \frac{20}{1.33} = 4.17 + 15.04 = 19.21 \text{ cm}$$<p><strong>Answer:</strong> Approximately 19.2 cm</p></div></details>

---

## Advanced Concepts

### 1. Relative Refractive Index

$$\boxed{_1n_2 = \frac{n_2}{n_1} = \frac{v_1}{v_2}}$$

Reads as “refractive index of medium 2 with respect to medium 1”

### 2. Cauchy’s Formula (Dispersion)

$$\boxed{n = A + \frac{B}{\lambda^2}}$$

Shows that n depends on wavelength (leads to dispersion in prisms!)

### 3. Vector Form of Snell’s Law

For advanced ray tracing problems - rarely asked in JEE but good to know.

---

## Quick Revision Cards

```plaintext
╔══════════════════════════════════════╗
║  REFRACTION QUICK FACTS             ║
╚══════════════════════════════════════╝

🎯 n = c/v (always ≥ 1)
🎯 n₁sin i = n₂sin r
🎯 Rarer→Denser: bends toward normal
🎯 Denser→Rarer: bends away from normal
🎯 TIR: denser→rarer AND i > iₓ
🎯 sin iₓ = n_rarer/n_denser
🎯 Apparent depth = Real depth / n
🎯 Frequency constant in refraction
```

---

## Cross-Topic Connections

- **[Reflection](../reflection/index.md)**: Combined with refraction in lenses
- **[Thin Lens](../thin-lens/index.md)**: Uses refraction at curved surfaces
- **[Prism](../prism/index.md)**: Double refraction + dispersion
- **[Wave Optics](../wave-optics/index.md)**: Huygens’ principle explains refraction
- **[EM Waves](../../electromagnetic-waves/index.md)**: Speed of light in different media

---

## Exam Strategy

**Time Allocation:**

- Snell’s law application: 2 min
- TIR problems: 3 min
- Multi-layer problems: 4-5 min

**Common JEE Patterns:**

1. **Apparent depth + slab combinations**
2. **Critical angle calculations**
3. **TIR in optical fibers**
4. **Fish looking at bird problems** (reverse apparent depth)
5. **Swimming pool problems**

**Red Flags:**

- Watch for “fish observing bird” - reverse the formula!
- Multiple media - apply Snell’s law at each interface
- TIR questions - check both conditions

---

## Final Tips

1. **Draw ray diagrams** - shows bending direction instantly
2. **Check if i > iₓ** before concluding TIR
3. **Remember:** Denser medium has **larger** n, **smaller** v
4. For **quick checks**: If going into water, angle decreases; if leaving water, angle increases

**Pro Tip:** In JEE, if problem mentions “critical angle” or “just undergoes TIR,” angle is exactly iₓ!

---

*Next up: [Thin Lens Formula](../thin-lens/index.md) - where we combine refraction at two surfaces!*

From TestGuru · our mock-test platform

## You've read Refraction of Light - Snell's Law and Total Internal Reflection.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Frefraction%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/refraction/",this.page.identifier="/physics/optics/refraction/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="snellsLaw" id="anim-snellsLaw-1795396424019277807"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-snellsLaw-1795396424019277807")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="totalInternalReflection" id="anim-totalInternalReflection-1795396424019477936"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-totalInternalReflection-1795396424019477936")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/refraction/](https://jeenotes.in/physics/optics/refraction/) · raw HTML: `offline/physics/optics/refraction/index.html`_
