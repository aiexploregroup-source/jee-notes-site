---
title: "Dual Nature of Matter"
source: "https://jeenotes.in/chemistry/atomic-structure/dual-nature/"
description: "Master de Broglie hypothesis and Heisenberg uncertainty principle for JEE Chemistry."
updated: "2026-08-01"
reading_time: "4 min read"
breadcrumb: "Chemistry"
position: "/ Topic 5 of 10"
html: "../../../../offline/chemistry/atomic-structure/dual-nature/index.html"
extracted: "2026-11-23"
---

> Master de Broglie hypothesis and Heisenberg uncertainty principle for JEE Chemistry.

## Introduction

Just as light exhibits both wave and particle nature, Louis de Broglie proposed in 1924 that **matter also has wave-like properties**. This revolutionary idea earned him the Nobel Prize and laid the foundation for quantum mechanics.

---

## de Broglie Hypothesis

### The Wave-Particle Duality of Matter

de Broglie suggested that every moving particle has an associated wavelength:

$$\boxed{\lambda = \frac{h}{mv} = \frac{h}{p}}$$

where:

- $\lambda$ = de Broglie wavelength
- $h$ = Planck’s constant = $6.626 \times 10^{-34}$ J·s
- $m$ = mass of particle
- $v$ = velocity of particle
- $p$ = momentum = $mv$

### Interactive Demo: Visualize Matter Waves

See the wave nature of matter particles and how wavelength changes with momentum.

### Key Insights

1. **Wavelength is inversely proportional to momentum**
2. **Heavier objects** have negligibly small wavelengths
3. **Only significant** for microscopic particles (electrons, protons)

> **★ Key point · Why We Don't See Wave Nature in Daily Life**
>
> For a 1 kg ball moving at 1 m/s:
>
> $$\lambda = \frac{6.626 \times 10^{-34}}{1 \times 1} = 6.626 \times 10^{-34} \text{ m}$$
>
> This is so tiny (10²⁰ times smaller than a nucleus!) that wave effects are undetectable.

---

## de Broglie Wavelength Formulas

### For Particles with Given KE

If kinetic energy $KE = \frac{1}{2}mv^2$:

$$\boxed{\lambda = \frac{h}{\sqrt{2mKE}}}$$

### For Accelerated Charged Particles

For a particle with charge $q$ accelerated through potential $V$:

$$KE = qV$$

$$\boxed{\lambda = \frac{h}{\sqrt{2mqV}}}$$

### For Electrons (Simplified)

For electrons accelerated through potential V (in volts):

$$\boxed{\lambda = \frac{12.27}{\sqrt{V}} \text{ Å}}$$

This is a very useful formula for quick calculations!

### Thermal de Broglie Wavelength

For particles at temperature T:

$$\lambda = \frac{h}{\sqrt{3mkT}}$$

---

## Calculations

### Example 1: Electron Wavelength

**Problem:** Find the de Broglie wavelength of an electron moving at $10^6$ m/s.

**Solution:**

$$\lambda = \frac{h}{mv} = \frac{6.626 \times 10^{-34}}{9.1 \times 10^{-31} \times 10^6}$$

$$\lambda = 7.28 \times 10^{-10} \text{ m} = 7.28 \text{ Å}$$

### Example 2: Accelerated Electron

**Problem:** An electron is accelerated through 100 V. Find its wavelength.

**Solution:**
Using the simplified formula:

$$\lambda = \frac{12.27}{\sqrt{100}} = \frac{12.27}{10} = 1.227 \text{ Å}$$

### Example 3: Proton vs Electron

**Problem:** An electron and proton have the same kinetic energy. Compare their wavelengths.

**Solution:**

$$\frac{\lambda_e}{\lambda_p} = \frac{h/\sqrt{2m_e KE}}{h/\sqrt{2m_p KE}} = \sqrt{\frac{m_p}{m_e}} = \sqrt{1836} \approx 42.8$$

The electron has ~43 times larger wavelength!

---

## Verification of Bohr’s Quantization

de Broglie showed that Bohr’s angular momentum quantization follows naturally if we assume an integral number of wavelengths fit in an orbit:

$$2\pi r = n\lambda$$

Substituting $\lambda = \frac{h}{mv}$:

$$2\pi r = n \times \frac{h}{mv}$$

$$mvr = \frac{nh}{2\pi}$$

This is exactly Bohr’s quantization condition!

---

## Heisenberg Uncertainty Principle

### Statement

It is **impossible to simultaneously determine** the exact position and momentum of a particle:

$$\boxed{\Delta x \cdot \Delta p \geq \frac{h}{4\pi}}$$

or equivalently:

$$\boxed{\Delta x \cdot m\Delta v \geq \frac{h}{4\pi}}$$

where:

- $\Delta x$ = uncertainty in position
- $\Delta p$ = uncertainty in momentum
- $\Delta v$ = uncertainty in velocity

### Energy-Time Form

There’s also an energy-time uncertainty relation:

$$\Delta E \cdot \Delta t \geq \frac{h}{4\pi}$$

> **★ Key point · Physical Meaning**
>
> The uncertainty principle is NOT about measurement limitations—it’s a **fundamental property of nature**. A particle simply doesn’t have definite position and momentum simultaneously!

---

## Implications of Uncertainty Principle

### 1. Electrons Cannot Exist in the Nucleus

If an electron were confined to the nucleus (Δx ≈ 10⁻¹⁴ m):

$$\Delta v \geq \frac{h}{4\pi m \Delta x} = \frac{6.626 \times 10^{-34}}{4\pi \times 9.1 \times 10^{-31} \times 10^{-14}}$$

$$\Delta v \geq 5.8 \times 10^9 \text{ m/s}$$

This exceeds the speed of light! So electrons can’t be in the nucleus.

### 2. Bohr’s Model is Fundamentally Flawed

Bohr’s model specifies exact orbits (definite r and v), violating the uncertainty principle.

### Example Calculation

**Problem:** The uncertainty in position of an electron is 0.1 Å. Calculate the minimum uncertainty in its velocity.

**Solution:**

$$\Delta v = \frac{h}{4\pi m \Delta x} = \frac{6.626 \times 10^{-34}}{4\pi \times 9.1 \times 10^{-31} \times 10^{-11}}$$

$$\Delta v = 5.79 \times 10^{6} \text{ m/s}$$

---

## Comparison of Macroscopic vs Microscopic

| Aspect | Macroscopic (Ball) | Microscopic (Electron) |
| --- | --- | --- |
| de Broglie λ | ~10⁻³⁴ m | ~10⁻¹⁰ m |
| Wave effects | Unobservable | Significant |
| Uncertainty | Negligible | Fundamental |

---

## Key Points for JEE

> **★ Key point · Remember**
>
> 1. λ ∝ 1/m and λ ∝ 1/v

> 2. For same KE: λ ∝ 1/√m

> 3. For same momentum: λ is same

> 4. For electrons: λ = 12.27/√V Å

> 5. Uncertainty principle applies to conjugate pairs: (x, p), (E, t), (θ, L)

---

## Practice Problems

1. An α-particle and a proton are accelerated through the same potential. Find the ratio of their de Broglie wavelengths.
2. The uncertainty in position of a particle is equal to its de Broglie wavelength. What is the minimum uncertainty in its velocity?
3. Calculate the wavelength of a neutron with kinetic energy 0.025 eV (thermal neutron).

> **↗ Connection · Quick Check**
>
> If an electron and a photon have the same wavelength, which has more energy?

---

From TestGuru · our mock-test platform

## You've read Dual Nature of Matter.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=atomic-structure&tg_exam=jee-main&tg_page=%2Fchemistry%2Fatomic-structure%2Fdual-nature%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/atomic-structure/dual-nature/",this.page.identifier="/chemistry/atomic-structure/dual-nature/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="waveFunction" id="anim-waveFunction-1795396418783294447"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-waveFunction-1795396418783294447")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/atomic-structure/dual-nature/](https://jeenotes.in/chemistry/atomic-structure/dual-nature/) · raw HTML: `offline/chemistry/atomic-structure/dual-nature/index.html`_
