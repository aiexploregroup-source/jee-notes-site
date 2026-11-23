---
title: "Diffraction"
source: "https://jeenotes.in/physics/optics/diffraction/"
description: "Master single slit diffraction, diffraction grating, and resolving power for JEE Physics"
updated: "2026-10-18"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 13"
html: "../../../../offline/physics/optics/diffraction/index.html"
extracted: "2026-11-23"
---

> Master single slit diffraction, diffraction grating, and resolving power for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Wave Optics](../wave-optics/index.md) — Interference, path difference, coherence
- [Reflection and Refraction](../reflection-refraction/index.md) — Basic light properties
- Wave motion fundamentals
- Basic trigonometry

## The Hook: Why Shadows Aren’t Perfect

> **★ Key point · Connect: Real Life → Physics**
>
> Why can you hear someone around a corner but not see them? Why do you see colorful patterns when looking at a distant street light through a thin cloth? Why can’t we see atoms even with the most powerful optical microscope?
>
> In **Interstellar**, Cooper says “We need to think beyond three dimensions.” Similarly, light doesn’t just travel in straight lines (ray optics) — it **bends around corners** and creates patterns when passing through small openings. This is **diffraction**, and it sets the ultimate limit on what we can see!
>
> Even **Spider-Man’s** spider-sense can’t see around corners, but light can (to some extent)!

**JEE Weightage:**

**MEDIUM-HIGH** — Expect 1-2 questions in JEE Main, 1 in Advanced (especially resolving power)

---

## The Core Concept

**Diffraction** is the bending of waves around obstacles or through openings when the size of the obstacle/opening is comparable to the wavelength.

### Why Does Diffraction Occur?

According to **Huygens’ Principle**, every point on a wavefront acts as a source of secondary wavelets. When a wave passes through a slit:

- Different parts of the slit act as coherent sources
- These sources interfere with each other
- Result: Light “spreads out” and creates a pattern of bright and dark regions

**In simple terms:** Light doesn’t just go straight through — it spreads out and interferes with itself!

### Difference: Interference vs Diffraction

| Property | Interference | Diffraction |
| --- | --- | --- |
| **Number of sources** | Two or more separate sources | Single wavefront (many points on it) |
| **Fringe width** | Usually equal | Central bright is wider than others |
| **Intensity** | All maxima roughly equal | Intensity decreases for higher order |
| **Example** | YDSE (two slits) | Single slit pattern |

**Reality:** Diffraction and interference often occur together! YDSE pattern is actually interference + diffraction combined.

---

## Single Slit Diffraction

### Experimental Setup

Light of wavelength $\lambda$ passes through a single slit of width $a$. A screen is placed at distance $D$.

**Pattern observed:**

- Wide **central bright** fringe (maximum intensity at center)
- Alternating dark and bright fringes on both sides
- Intensity decreases rapidly for higher order fringes

### Condition for Minima (Dark Fringes)

$$\boxed{a\sin\theta = n\lambda}$$

Where:

- $a$ = slit width
- $\theta$ = angular position of dark fringe
- $n = 1, 2, 3, ...$ (order of minimum)

**Position of minima on screen:**

$$y_n = \frac{n\lambda D}{a}$$

**For small angles:** $\sin\theta \approx \tan\theta = \frac{y}{D}$

### Width of Central Maximum

The central bright fringe extends from first minimum on one side to first minimum on other side:

$$\boxed{\text{Width of central maximum} = 2y_1 = \frac{2\lambda D}{a}}$$

**Compare with YDSE:** In YDSE, fringe width $\beta = \frac{\lambda D}{d}$. In single slit, central maximum is **twice** as wide, and $a$ is in denominator (not $d$).

### Condition for Maxima (Bright Fringes)

Secondary maxima occur approximately at:

$$a\sin\theta = \left(n + \frac{1}{2}\right)\lambda$$

Where $n = 1, 2, 3, ...$

**Note:** This is approximate. Exact positions require solving a transcendental equation.

### Intensity Distribution

$$\boxed{I = I_0 \left(\frac{\sin\beta}{\beta}\right)^2}$$

Where $\beta = \frac{\pi a \sin\theta}{\lambda}$

- At $\beta = 0$ (center): $I = I_0$ (maximum)
- At $\beta = \pi, 2\pi, 3\pi, ...$: $I = 0$ (minima)

> **◐ In simple terms · Central Maximum is Brightest**
>
> Unlike YDSE (where all bright fringes have equal intensity), in single slit:
>
> - **Central maximum** is brightest

> - **Secondary maxima** get progressively dimmer

> - Intensity falls off as $\frac{1}{n^2}$ approximately

---

## Diffraction Grating

A **diffraction grating** is a device with a large number of parallel, equally spaced slits (typically thousands per cm).

### Grating Equation

For a grating with slit separation $d$, bright fringes (principal maxima) occur at:

$$\boxed{d\sin\theta = n\lambda}$$

Where:

- $d$ = grating element (distance between adjacent slits)
- $\theta$ = angle of diffraction
- $n = 0, 1, 2, 3, ...$ (order of spectrum)

**Memory Trick:** “**D**on’t **S**in **N**ormally with **L**ight” → $d\sin\theta = n\lambda$

### Number of Lines per Unit Length

If there are $N$ lines per meter:

$$d = \frac{1}{N}$$

Example: 5000 lines/cm = 500,000 lines/m → $d = \frac{1}{500000} = 2 \times 10^{-6}$ m

### Maximum Order of Spectrum

Since $\sin\theta \leq 1$:

$$n_{max} = \left\lfloor \frac{d}{\lambda} \right\rfloor$$

(Greatest integer less than or equal to $\frac{d}{\lambda}$)

**In simple terms:** How many complete spectra can we see? Depends on grating spacing and wavelength.

### Absent Spectra

If both single slit diffraction and grating interference are considered, some orders may be **missing** (absent).

**Condition for absent order:**
If $\frac{a}{d} = \frac{p}{q}$ (in lowest terms), then orders $n = q, 2q, 3q, ...$ are absent.

Example: If $a = \frac{d}{2}$, then $n = 2, 4, 6, ...$ (even orders) are missing!

---

## Resolving Power

The ability to distinguish between two closely spaced objects or wavelengths.

### Rayleigh’s Criterion

Two point sources are **just resolved** when the central maximum of one coincides with the first minimum of the other.

**Angular separation for resolution:**

$$\boxed{\theta_{min} = \frac{1.22\lambda}{D}}$$

Where:

- $D$ = diameter of circular aperture (like telescope lens or eye pupil)
- Factor 1.22 comes from circular aperture (for slit, it’s just $\frac{\lambda}{a}$)

### Resolving Power of Telescope

$$\boxed{R_T = \frac{1}{\theta_{min}} = \frac{D}{1.22\lambda}}$$

**In simple terms:** Bigger telescope (larger $D$) → better resolving power → can see finer details!

**This is why:**

- Hubble telescope has a 2.4 m mirror (high resolving power)
- Radio telescopes need to be HUGE (radio waves have large $\lambda$)

### Resolving Power of Microscope

$$\boxed{R_M = \frac{2\mu\sin\theta}{1.22\lambda}}$$

Where:

- $\mu$ = refractive index of medium between object and lens
- $\theta$ = half-angle of cone of light entering objective

**This is why:**

- Electron microscopes exist (electrons have tiny wavelength)
- We can’t see atoms with optical microscope (visible light $\lambda$ too large)

### Resolving Power of Grating

The ability to distinguish between two nearby wavelengths:

$$\boxed{R_G = nN}$$

Where:

- $n$ = order of spectrum
- $N$ = total number of lines in the grating

**In simple terms:** More lines + higher order = better wavelength resolution!

> **★ Key point · Interstellar Telescope**
>
> In **Interstellar**, they use powerful telescopes to see distant phenomena. The resolving power determines how far apart two stars must be to see them as separate — not just one blob of light!

---

## Comparison: Single Slit vs Double Slit vs Grating

| Feature | Single Slit | Double Slit (YDSE) | Diffraction Grating |
| --- | --- | --- | --- |
| **Number of slits** | 1 | 2 | Many (thousands) |
| **Pattern** | Wide central, dim sides | Equally spaced, equal intensity | Sharp, bright lines |
| **Formula for maxima** | $(n+\frac{1}{2})\lambda$ (approx) | $n\lambda$ | $n\lambda$ |
| **Formula for minima** | $n\lambda$ | $(2n-1)\frac{\lambda}{2}$ | Many minima between maxima |
| **Central maximum width** | $\frac{2\lambda D}{a}$ | — | — |
| **Fringe width** | Decreasing | Constant | — |
| **Intensity distribution** | Decreasing | Constant | Decreasing |
| **Sharpness** | Broad fringes | Moderate | Very sharp |

---

## Memory Tricks & Patterns

### Mnemonic for Grating Equation

**Memory Trick:** “**D**rama **S**tarts with **N**ew **L**ines” → $d\sin\theta = n\lambda$

### Mnemonic for Resolving Power

**Memory Trick:** “**R**esolve with **n**ice **N**umbers” → $R = nN$ (for grating)

### Pattern Recognition

> **★ Key point · Diffraction Patterns**
>
> 1. **Slit width increases** → Central maximum gets **narrower**

> 2. **Wavelength increases** → Pattern spreads out (**wider**)

> 3. **More slits in grating** → Lines become **sharper**

> 4. **Higher order spectrum** → Spreads out more (larger $\theta$)

> 5. **Circular aperture** → Factor 1.22 appears (not for rectangular slit)

### Quick Decision Tree

```fallback
Diffraction problem?
├─ Single slit? → Minima at a·sinθ = nλ
├─ Grating? → Maxima at d·sinθ = nλ
├─ Resolving power?
│   ├─ Telescope/Microscope? → R = D/(1.22λ)
│   └─ Grating? → R = nN
└─ Width of central max? → 2λD/a
```

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Single Slit vs YDSE Formula**
>
> **Wrong:** Using $d\sin\theta = n\lambda$ for single slit minima
>
> **Correct:**
>
> - **Single slit minima:** $a\sin\theta = n\lambda$ (uses slit width $a$)

> - **YDSE/Grating maxima:** $d\sin\theta = n\lambda$ (uses slit separation $d$)
>
> **Opposite roles!** For single slit, this gives minima; for grating, it gives maxima.

> **⚠ Trap #2: Central Maximum Width**
>
> **Wrong:** Central maximum width = $\frac{\lambda D}{a}$ (like YDSE fringe width)
>
> **Correct:** Central maximum width = $\frac{2\lambda D}{a}$ (factor of 2!)
>
> It extends from first minimum to first minimum on opposite side.

> **⚠ Trap #3: Grating Lines Confusion**
>
> **Wrong:** Using number of lines directly as $d$
>
> **Correct:** If $N$ lines per cm, then $d = \frac{1}{N}$ (in cm)
>
> Example: 5000 lines/cm → $d = \frac{1}{5000}$ cm = $2 \times 10^{-4}$ cm
>
> **Convert to meters!**

> **⚠ Trap #4: Resolving Power Factor**
>
> **Wrong:** Using $\theta_{min} = \frac{\lambda}{D}$ for circular aperture
>
> **Correct:** $\theta_{min} = \frac{1.22\lambda}{D}$ (factor 1.22 for circular!)
>
> For **rectangular slit**, it’s $\frac{\lambda}{a}$ (no 1.22)

---

## Practice Problems

### Level 1: Foundation (NCERT-type)

> **↗ Connection · Problem 1: Single Slit First Minimum**
>
> Light of wavelength 600 nm falls on a slit of width 0.3 mm. A screen is placed 1 m away. Find the position of the first dark fringe.
>
> **Solution:**

> For first minimum: $n = 1$
>
> $$y_1 = \frac{n\lambda D}{a} = \frac{1 \times 6 \times 10^{-7} \times 1}{3 \times 10^{-4}} = 2 \times 10^{-3} \text{ m}$$
>
> **Answer:** 2 mm from center

> **↗ Connection · Problem 2: Width of Central Maximum**
>
> For the same setup as Problem 1, find the width of the central maximum.
>
> **Solution:**
>
> $$\text{Width} = 2y_1 = 2 \times 2 = 4 \text{ mm}$$
>
> **Answer:** 4 mm

> **↗ Connection · Problem 3: Grating Equation**
>
> A diffraction grating has 5000 lines/cm. At what angle will the first order maximum occur for light of wavelength 500 nm?
>
> **Solution:**

> $N = 5000$ lines/cm $= 500,000$ lines/m
>
> $$d = \frac{1}{N} = \frac{1}{500,000} = 2 \times 10^{-6} \text{ m}$$
>
> For first order: $n = 1$
>
> $$d\sin\theta = n\lambda$$

$$\sin\theta = \frac{\lambda}{d} = \frac{5 \times 10^{-7}}{2 \times 10^{-6}} = 0.25$$

$$\theta = \sin^{-1}(0.25) \approx 14.5°$$
>
> **Answer:** 14.5°

### Level 2: JEE Main

> **↗ Connection · Problem 4: Maximum Order**
>
> A grating with 4000 lines/cm is illuminated with light of wavelength 625 nm. What is the highest order spectrum that can be observed?
>
> **Solution:**
>
> $$d = \frac{1}{4000 \times 100} = 2.5 \times 10^{-6} \text{ m}$$
>
> Maximum order when $\sin\theta = 1$:
>
> $$n_{max} = \frac{d}{\lambda} = \frac{2.5 \times 10^{-6}}{625 \times 10^{-9}} = \frac{2.5}{0.625} = 4$$
>
> **Answer:** 4th order (i.e., $n = 0, 1, 2, 3, 4$ → five spectra visible)

> **↗ Connection · Problem 5: Slit Width from Central Maximum**
>
> In a single slit diffraction experiment, the width of the central maximum is 4 cm when screen is 2 m away and wavelength is 600 nm. Find the slit width.
>
> **Solution:**
>
> $$\text{Width} = \frac{2\lambda D}{a}$$

$$4 \times 10^{-2} = \frac{2 \times 6 \times 10^{-7} \times 2}{a}$$

$$a = \frac{2 \times 6 \times 10^{-7} \times 2}{4 \times 10^{-2}} = \frac{24 \times 10^{-7}}{4 \times 10^{-2}} = 6 \times 10^{-5} \text{ m}$$
>
> **Answer:** 0.06 mm or 60 μm

> **↗ Connection · Problem 6: Resolving Power of Telescope**
>
> A telescope has an objective lens of diameter 1 m. What is its resolving power for light of wavelength 500 nm?
>
> **Solution:**
>
> $$R = \frac{D}{1.22\lambda} = \frac{1}{1.22 \times 5 \times 10^{-7}} = \frac{10^7}{6.1} \approx 1.64 \times 10^6$$
>
> **Answer:** $1.64 \times 10^6$ (can resolve objects 1.64 million times closer than their distance)

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Absent Spectra**
>
> A diffraction grating has slit separation $d$ equal to twice the slit width $a$ (i.e., $d = 2a$). Which orders of spectra will be absent?
>
> **Solution:**

> For absent order: diffraction minimum coincides with grating maximum
>
> Single slit minima: $a\sin\theta = m\lambda$

> Grating maxima: $d\sin\theta = n\lambda$
>
> For coincidence: $\frac{n}{m} = \frac{d}{a}$
>
> Given $d = 2a$: $n = 2m$, i.e., $n = 2, 4, 6, ...$
>
> **Answer:** 2nd, 4th, 6th, &mldr; (all even orders) are absent

> **↗ Connection · Problem 8: Resolving Power of Grating**
>
> A grating has 8000 lines and is used in 3rd order. What is its resolving power? Can it resolve wavelengths 500.0 nm and 500.5 nm?
>
> **Solution:**
>
> $$R = nN = 3 \times 8000 = 24,000$$
>
> For resolving $\lambda$ and $\lambda + \Delta\lambda$:
>
> $$R = \frac{\lambda}{\Delta\lambda}$$
>
> Required resolving power:
>
> $$R_{req} = \frac{500}{0.5} = 1000$$
>
> Since $24,000 > 1000$, **YES**, it can easily resolve these wavelengths!
>
> **Answer:** Resolving power = 24,000; Yes, can resolve

> **↗ Connection · Problem 9: Angular Spread**
>
> White light (400 nm to 700 nm) falls normally on a grating with 5000 lines/cm. Find the angular separation between red (700 nm) and violet (400 nm) in the first order spectrum.
>
> **Solution:**
>
> $$d = \frac{1}{500,000} = 2 \times 10^{-6} \text{ m}$$
>
> **For violet (400 nm):**
>
> $$\sin\theta_V = \frac{n\lambda_V}{d} = \frac{1 \times 400 \times 10^{-9}}{2 \times 10^{-6}} = 0.2$$

$$\theta_V = \sin^{-1}(0.2) = 11.54°$$
>
> **For red (700 nm):**
>
> $$\sin\theta_R = \frac{700 \times 10^{-9}}{2 \times 10^{-6}} = 0.35$$

$$\theta_R = \sin^{-1}(0.35) = 20.49°$$
>
> **Angular spread:**
>
> $$\Delta\theta = \theta_R - \theta_V = 20.49° - 11.54° = 8.95°$$
>
> **Answer:** ~9° (angular width of first order spectrum)

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Single slit minima | $a\sin\theta = n\lambda$, $n = 1,2,3,...$ |
| Width of central maximum | $\frac{2\lambda D}{a}$ |
| Grating maxima | $d\sin\theta = n\lambda$, $n = 0,1,2,...$ |
| Grating element from lines | $d = \frac{1}{N}$ (N = lines per unit length) |
| Maximum order | $n_{max} = \lfloor\frac{d}{\lambda}\rfloor$ |
| Resolving power (telescope) | $R = \frac{D}{1.22\lambda}$ |
| Resolving power (grating) | $R = nN$ |
| Rayleigh criterion | $\theta_{min} = \frac{1.22\lambda}{D}$ (circular aperture) |
| Absent orders | If $\frac{a}{d} = \frac{p}{q}$, then $n = q, 2q, 3q,...$ absent |

---

## JEE Exam Strategy

> **★ Key point · Time-Saving Tips**
>
> 1. **Identify the setup:** Single slit? Grating? Resolving power?

> 2. **Watch for “lines per cm”** → Convert to $d = \frac{1}{N}$ immediately

> 3. **Factor 1.22** appears only for circular apertures (telescope, microscope pupil)

> 4. **Maximum order:** Quick check: $n_{max} = \frac{d}{\lambda}$ (round down)

> 5. **Absent spectra:** Rarely asked, but easy marks if you know the condition

**Common JEE Patterns:**

- Single slit central maximum width (direct formula)
- Grating equation for finding angle or order
- Maximum order calculation
- Resolving power of telescope (factor 1.22 trap!)
- Grating resolving power (simple: $nN$)

**High-Yield Concepts:**

1. Grating equation: $d\sin\theta = n\lambda$ (appears in 90% of grating problems)
2. Central maximum width: $\frac{2\lambda D}{a}$ (factor of 2!)
3. Resolving power formulas (know all three: telescope, microscope, grating)

---

## Related Topics

### Within Optics

- [Wave Optics](../wave-optics/index.md) — Interference, coherence, YDSE
- [Polarization](../polarization/index.md) — Another wave property
- [Reflection and Refraction](../reflection-refraction/index.md) — Ray optics limits
- [Prism](../prism/index.md) — Dispersion and spectrum

### Connected Chapters

- [Wave Motion](https://jeenotes.in/physics/oscillations-waves/wave-motion/) — Huygens’ principle
- [Sound Waves](../../oscillations-waves/index.md) — Diffraction in sound
- [Electromagnetic Waves](https://jeenotes.in/physics/electromagnetic-waves/) — Light wavelength

### Real-World Applications

- **CDs and DVDs:** Diffraction grating creates rainbow effect
- **X-ray crystallography:** Determining atomic structures
- **Spectroscopy:** Identifying elements by spectral lines
- **Astronomy:** Resolving power limits what telescopes can see
- **Holography:** Recording interference and diffraction patterns

### Math Connections

- [Trigonometry](../../../mathematics/trigonometry/index.md) — Sin, tan for small angles
- [Maxima and Minima](../../../mathematics/limits-continuity-differentiability/applications-derivatives/index.md) — Intensity distribution

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Diffraction** is bending of light around obstacles/through openings when size ~ wavelength

> 2. **Single slit:** Minima at $a\sin\theta = n\lambda$ → Central max is **widest**

> 3. **Grating:** Maxima at $d\sin\theta = n\lambda$ → **Sharp, bright** spectral lines

> 4. **Resolving power** sets limits on what we can distinguish:

>    - Telescope/Microscope: $R = \frac{D}{1.22\lambda}$ (bigger diameter = better)

>    - Grating: $R = nN$ (more lines, higher order = better)

> 5. **Central maximum width** = $\frac{2\lambda D}{a}$ (factor of 2, don’t forget!)

> 6. **Maximum order** from grating: $n_{max} = \frac{d}{\lambda}$ (limited by $\sin\theta \leq 1$)
>
> **“Diffraction shows light is a wave. Single slit spreads it out, grating sharpens it up, and resolving power tells us the limits of what we can see!”**
>
> **JEE Success Mantra:** Grating problems are straightforward — memorize $d\sin\theta = n\lambda$ and $R = nN$. Single slit: remember the factor of 2 in central maximum width. Practice 15 problems and these become automatic!

---

From TestGuru · our mock-test platform

## You've read Diffraction.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Fdiffraction%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/diffraction/",this.page.identifier="/physics/optics/diffraction/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="singleSlitDiffraction" id="anim-singleSlitDiffraction-1795396423986961043"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-singleSlitDiffraction-1795396423986961043")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="rayleighCriterion" id="anim-rayleighCriterion-1795396423987106037"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-rayleighCriterion-1795396423987106037")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/diffraction/](https://jeenotes.in/physics/optics/diffraction/) · raw HTML: `offline/physics/optics/diffraction/index.html`_
