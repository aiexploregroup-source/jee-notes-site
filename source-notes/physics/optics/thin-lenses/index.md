---
title: "Thin Lenses"
source: "https://jeenotes.in/physics/optics/thin-lenses/"
description: "Master lens maker's equation, power of lenses, and lens combinations for JEE Physics"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 13"
html: "../../../../offline/physics/optics/thin-lenses/index.html"
extracted: "2026-11-23"
---

> Master lens maker's equation, power of lenses, and lens combinations for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Reflection and Refraction](../reflection-refraction/index.md) — Basic lens formula and sign conventions
- Snell’s law and refractive index
- Basic geometry and trigonometry

## The Hook: The Superhero Power of Focus

> **★ Key point · Connect: Real Life → Physics**
>
> Ever notice how **Iron Man**’s arc reactor uses lenses to focus light into a beam? Or how in **Spider-Man: Far From Home**, Mysterio uses holograms and lenses to create illusions? Lenses control where light goes — and that control is **power**!
>
> Why can some people see far but not near? Why do cameras zoom? Why does a magnifying glass burn paper? All because lenses bend light differently based on their **shape** and **material**. Let’s crack the code!

**JEE Weightage:**

**HIGH** — Expect 1-2 questions in JEE Main, 1 in Advanced (especially lens combinations)

---

## The Core Concept

A **thin lens** is a piece of transparent material (usually glass) with two curved surfaces, thin enough that we can ignore the thickness in calculations.

### Types of Lenses

| Type | Shape | Effect | Focal Length |
| --- | --- | --- | --- |
| **Convex (Converging)** | Thicker in middle | Converges parallel rays | Positive |
| **Concave (Diverging)** | Thinner in middle | Diverges parallel rays | Negative |

**In simple terms:** Convex lenses bring light together (like a magnifying glass), concave lenses spread light apart (like prescription glasses for nearsightedness).

### Ray Diagram for Convex Lens

---

## Lens Maker’s Equation

This is THE formula that tells you what focal length a lens will have based on its **shape** and **material**.

$$\boxed{\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)}$$

Where:

- $f$ = focal length of the lens
- $n$ = refractive index of lens material (relative to surrounding medium)
- $R_1$ = radius of curvature of first surface
- $R_2$ = radius of curvature of second surface

### Sign Convention for Radii

> **⚠ Trap · Critical for JEE!**
>
> Measure radii from the surface:
>
> - If center of curvature is on the **right** (image side): $R$ is **positive**

> - If center of curvature is on the **left** (object side): $R$ is **negative**
>
> **Mnemonic:** “**R**ight is **R**ight” (Right side = positive R)

### Common Lens Shapes

**Double Convex (Biconvex):**

- $R_1 > 0$ (first surface curves right)
- $R_2 < 0$ (second surface curves right, but we measure from second surface, so negative)
- Both surfaces converge light → strong positive lens

**Plano-Convex:**

- $R_1 > 0$ (curved surface)
- $R_2 = \infty$ (plane surface)
- $\frac{1}{f} = (n-1) \cdot \frac{1}{R_1}$

**Double Concave (Biconcave):**

- $R_1 < 0$
- $R_2 > 0$
- Both surfaces diverge light → strong negative lens

---

## Power of a Lens

The **power** of a lens measures its ability to converge or diverge light.

$$\boxed{P = \frac{1}{f}}$$

**Units:**

- $f$ in meters → $P$ in **diopters** (D)
- 1 D = 1 m$^{-1}$

**In simple terms:** Higher power = stronger bending of light. Short focal length = high power!

### Properties of Power

> **◐ In simple terms · Power Properties**
>
> 1. **Convex lens:** $P > 0$ (positive power)

> 2. **Concave lens:** $P < 0$ (negative power)

> 3. **Short focal length** = High power (strong lens)

> 4. **Long focal length** = Low power (weak lens)

**Example:**

- Reading glasses: $P = +2.5$ D → $f = \frac{1}{2.5} = 0.4$ m = 40 cm
- Nearsightedness glasses: $P = -1.5$ D → $f = -\frac{1}{1.5} = -0.67$ m

> **★ Key point · Interstellar Analogy**
>
> Think of power like gravitational strength in **Interstellar**. The stronger the gravity (higher power), the more it bends the trajectory (light path). A black hole (infinite power) bends light completely!

---

## Combination of Lenses

When two or more thin lenses are placed **in contact**, their powers **add up**!

### Lenses in Contact

$$\boxed{P_{total} = P_1 + P_2 + P_3 + ...}$$

Or equivalently:

$$\boxed{\frac{1}{f_{total}} = \frac{1}{f_1} + \frac{1}{f_2} + \frac{1}{f_3} + ...}$$

**In simple terms:** Powers add like resistances in parallel!

**Memory Trick:** “**P**owers **P**ile up **P**erfectly” → $P_{total} = P_1 + P_2$

### Example

Two lenses in contact: $f_1 = 20$ cm, $f_2 = -30$ cm

$$\frac{1}{f} = \frac{1}{20} + \frac{1}{-30} = \frac{3 - 2}{60} = \frac{1}{60}$$

$$f = 60 \text{ cm}$$

The combination acts like a single convex lens of focal length 60 cm!

### Lenses Separated by Distance

When lenses are separated by distance $d$:

$$\boxed{\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}}$$

**Special Case:** If $d = 0$ (in contact), this reduces to $\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2}$

> **⚠ Trap · JEE Trap!**
>
> For separated lenses, you CANNOT simply add powers! You must either:
>
> 1. Use the formula above, OR

> 2. Trace the image step-by-step (image by first lens becomes object for second lens)
>
> For JEE Advanced, always use the step-by-step method for clarity.

---

## Memory Tricks & Patterns

### Mnemonic for Lens Maker’s Equation

**Memory Trick:** “**N**isha **R**eally **R**uns” → $(n-1)(\frac{1}{R_1} - \frac{1}{R_2})$

### Mnemonic for Power Addition

**Memory Trick:** “**P**ile **P**owers” → $P = P_1 + P_2$

### Pattern Recognition

> **★ Key point · Power Patterns**
>
> 1. **Convex + Convex** = Stronger convex (powers add)

> 2. **Concave + Concave** = Stronger concave (powers add in negative)

> 3. **Convex + Concave** = Depends on which is stronger

>    - If $|P_{convex}| > |P_{concave}|$ → Resultant convex

>    - If $|P_{concave}| > |P_{convex}|$ → Resultant concave

### Quick Decision Tree

```fallback
Finding focal length?
├─ Given R₁, R₂, n? → Use Lens Maker's Equation
└─ Given object/image positions? → Use Lens Formula

Lens combination?
├─ In contact? → Add powers: P = P₁ + P₂
└─ Separated? → Use step-by-step image tracing
```

---

## Lens in Different Media

If a lens (refractive index $n_L$) is placed in a medium (refractive index $n_m$):

$$\boxed{\frac{1}{f} = \left(\frac{n_L}{n_m} - 1\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)}$$

### Special Cases

**Lens in water:**
If $n_{glass} = 1.5$ and $n_{water} = 1.33$:

$$\frac{1}{f_{water}} = \left(\frac{1.5}{1.33} - 1\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

The effective power **decreases** in water!

**Extreme case:** If $n_L = n_m$ (lens material = medium), then $f = \infty$ → lens disappears optically!

> **★ Key point · Underwater Vision**
>
> This is why our eyes (designed for air) don’t focus well underwater — the power of our eye lens decreases dramatically! Swimming goggles trap air, restoring normal vision.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Sign of Radii**
>
> **Wrong:** Using $R_1 = 20$ cm, $R_2 = 30$ cm for a double convex lens
>
> **Correct:** For double convex, second surface curves the other way:
>
> - $R_1 = +20$ cm

> - $R_2 = -30$ cm
>
> **Always draw the lens and mark which side the centers are!**

> **⚠ Trap #2: Power Addition for Separated Lenses**
>
> **Wrong:** $P_{total} = P_1 + P_2$ for lenses with separation
>
> **Correct:** Use $\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}$ OR trace images step-by-step
>
> **JEE Loves This Trap!** Read carefully — “in contact” or “separated by”?

> **⚠ Trap #3: Refractive Index Confusion**
>
> **Wrong:** Using absolute refractive index when lens is in water
>
> **Correct:** Use **relative** refractive index $\frac{n_{lens}}{n_{medium}}$
>
> The surrounding medium matters!

> **⚠ Trap #4: Unit Conversion for Power**
>
> **Wrong:** $f = 20$ cm → $P = \frac{1}{20} = 0.05$ D
>
> **Correct:** Convert to meters first! $f = 0.2$ m → $P = \frac{1}{0.2} = 5$ D
>
> **Always convert focal length to meters before calculating power!**

---

## Practice Problems

### Level 1: Foundation (NCERT-type)

> **↗ Connection · Problem 1: Basic Lens Maker's Equation**
>
> A double convex lens has radii of curvature 10 cm and 15 cm. The refractive index of glass is 1.5. Find the focal length.
>
> **Solution:**

> For double convex:
>
> - $R_1 = +10$ cm (first surface, center on right)

> - $R_2 = -15$ cm (second surface, center on left when measured from second surface)

> - $n = 1.5$
>
> $$\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

$$\frac{1}{f} = (1.5-1)\left(\frac{1}{10} - \frac{1}{-15}\right)$$

$$\frac{1}{f} = 0.5\left(\frac{1}{10} + \frac{1}{15}\right) = 0.5\left(\frac{3+2}{30}\right) = 0.5 \times \frac{5}{30}$$

$$\frac{1}{f} = \frac{1}{12}$$

$$f = 12 \text{ cm}$$
>
> **Answer:** 12 cm (converging lens)

> **↗ Connection · Problem 2: Power of Lens**
>
> A lens has a focal length of 25 cm. Find its power.
>
> **Solution:**

> Convert to meters: $f = 0.25$ m
>
> $$P = \frac{1}{f} = \frac{1}{0.25} = 4 \text{ D}$$
>
> **Answer:** +4 D (converging lens)

> **↗ Connection · Problem 3: Lenses in Contact**
>
> Two lenses of focal lengths 20 cm and 30 cm are placed in contact. Find the focal length of the combination.
>
> **Solution:**
>
> $$\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} = \frac{1}{20} + \frac{1}{30}$$

$$\frac{1}{f} = \frac{3+2}{60} = \frac{5}{60} = \frac{1}{12}$$

$$f = 12 \text{ cm}$$
>
> **Answer:** 12 cm

### Level 2: JEE Main

> **↗ Connection · Problem 4: Plano-Convex Lens**
>
> A plano-convex lens ($n = 1.5$) has a curved surface with radius 20 cm. What is its focal length? If the plane surface is now silvered (converted to mirror), what is the effective focal length of the system?
>
> **Solution:**

> **Part 1: Just the lens**
>
> - $R_1 = 20$ cm (curved surface)

> - $R_2 = \infty$ (plane surface)
>
> $$\frac{1}{f_{lens}} = (1.5-1)\left(\frac{1}{20} - \frac{1}{\infty}\right) = 0.5 \times \frac{1}{20} = \frac{1}{40}$$

$$f_{lens} = 40 \text{ cm}$$
>
> **Part 2: Plane surface silvered**

> This acts as a mirror with $f_{mirror} = \infty$ (plane mirror) combined with the lens.
>
> For lens + mirror combination: $P_{total} = P_{lens} + P_{mirror} + P_{lens}$ (light passes through lens twice)
>
> Actually, for a silvered lens:
>
> $$\frac{1}{f_{eq}} = \frac{1}{f_{lens}} + \frac{1}{f_{mirror}} + \frac{1}{f_{lens}} = \frac{2}{f_{lens}} + \frac{1}{f_{mirror}}$$
>
> For plane mirror: $f_{mirror} = \infty$
>
> $$\frac{1}{f_{eq}} = \frac{2}{40} + 0 = \frac{1}{20}$$

$$f_{eq} = 20 \text{ cm}$$
>
> **Answer:** Lens alone: 40 cm; Silvered: 20 cm (acts like a concave mirror!)

> **↗ Connection · Problem 5: Achromatic Combination**
>
> Two thin lenses of powers +5 D and $P$ D are placed in contact. If the combination has power +3 D, find $P$.
>
> **Solution:**
>
> $$P_{total} = P_1 + P_2$$

$$3 = 5 + P$$

$$P = -2 \text{ D}$$
>
> **Answer:** -2 D (a concave lens is needed to reduce the power)

> **↗ Connection · Problem 6: Separated Lenses**
>
> Two convex lenses of focal length 10 cm each are separated by 30 cm. Find the effective focal length.
>
> **Solution:**

> Using $\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}$:
>
> $$\frac{1}{f} = \frac{1}{10} + \frac{1}{10} - \frac{30}{10 \times 10}$$

$$\frac{1}{f} = 0.1 + 0.1 - 0.3 = -0.1$$

$$f = -10 \text{ cm}$$
>
> **Interesting!** Two convex lenses, when separated by $d = f_1 + f_2$, act like a diverging system!
>
> **Answer:** -10 cm (diverging)

### Level 3: JEE Advanced

> **↗ Connection · Problem 7: Lens in Different Medium**
>
> A convex lens made of glass ($n = 1.5$) has a focal length of 20 cm in air. What is its focal length when immersed in water ($n = 1.33$)?
>
> **Solution:**

> In air: $\frac{1}{f_{air}} = (1.5 - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right) = 0.5\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$
>
> So $\frac{1}{R_1} - \frac{1}{R_2} = \frac{2}{f_{air}} = \frac{2}{20} = \frac{1}{10}$
>
> In water: $\frac{1}{f_{water}} = \left(\frac{1.5}{1.33} - 1\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$
>
> $$\frac{1}{f_{water}} = (1.128 - 1) \times \frac{1}{10} = 0.128 \times 0.1 = 0.0128$$

$$f_{water} = \frac{1}{0.0128} = 78.1 \text{ cm}$$
>
> **Alternative formula:**
>
> $$\frac{f_{water}}{f_{air}} = \frac{(n_{glass} - n_{air})}{(n_{glass} - n_{water})} \times \frac{n_{water}}{n_{air}}$$

$$\frac{f_{water}}{20} = \frac{1.5 - 1}{1.5 - 1.33} \times \frac{1.33}{1} = \frac{0.5}{0.17} \times 1.33 = 3.91$$

$$f_{water} = 78.2 \text{ cm}$$
>
> **Answer:** ~78 cm (power decreases significantly in water!)

> **↗ Connection · Problem 8: Compound Lens System**
>
> Two lenses of focal lengths $f_1 = 10$ cm and $f_2 = 20$ cm are kept in contact. An object is placed at 20 cm from the combination. Find the position and magnification of the final image.
>
> **Solution:**

> **Step 1: Find combination focal length**
>
> $$\frac{1}{f} = \frac{1}{10} + \frac{1}{20} = \frac{2+1}{20} = \frac{3}{20}$$

$$f = \frac{20}{3} = 6.67 \text{ cm}$$
>
> **Step 2: Find image position**

> $u = -20$ cm
>
> $$\frac{1}{f} = \frac{1}{v} - \frac{1}{u}$$

$$\frac{3}{20} = \frac{1}{v} - \frac{1}{-20}$$

$$\frac{1}{v} = \frac{3}{20} - \frac{1}{20} = \frac{2}{20} = \frac{1}{10}$$

$$v = 10 \text{ cm}$$
>
> **Step 3: Magnification**
>
> $$m = \frac{v}{u} = \frac{10}{-20} = -0.5$$
>
> **Answer:** Image at 10 cm on opposite side, inverted, half the size

> **↗ Connection · Problem 9: Maximum/Minimum Power**
>
> A converging lens of focal length 20 cm is in contact with a diverging lens. If the power of the combination can vary from +1 D to +5 D, find the range of focal length of the diverging lens.
>
> **Solution:**

> For converging lens: $f_1 = 20$ cm $= 0.2$ m → $P_1 = +5$ D
>
> For combination: $P_{total} = P_1 + P_2 = 5 + P_2$
>
> **When $P_{total} = +1$ D:**
>
> $$1 = 5 + P_2 \implies P_2 = -4 \text{ D}$$

$$f_2 = -\frac{1}{4} = -0.25 \text{ m} = -25 \text{ cm}$$
>
> **When $P_{total} = +5$ D:**
>
> $$5 = 5 + P_2 \implies P_2 = 0$$

$$f_2 = \infty$$
>
> **Answer:** Diverging lens focal length ranges from -25 cm to $-\infty$ (or from -4 D to 0 D)

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Finding focal length from shape | $\frac{1}{f} = (n-1)(\frac{1}{R_1} - \frac{1}{R_2})$ |
| Double convex | Both surfaces converge → strong positive |
| Double concave | Both surfaces diverge → strong negative |
| Plano-convex | One curved, one flat → moderate power |
| Power from focal length | $P = \frac{1}{f}$ (f in meters) |
| Lenses in contact | $P = P_1 + P_2$ or $\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2}$ |
| Lenses separated | Use step-by-step OR $\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1f_2}$ |
| Lens in different medium | Use $n_{relative} = \frac{n_{lens}}{n_{medium}}$ |
| Silvered lens | $\frac{1}{f_{eq}} = \frac{2}{f_{lens}} + \frac{1}{f_{mirror}}$ |

---

## JEE Exam Strategy

> **★ Key point · Time-Saving Tips**
>
> 1. **For lens combinations in contact:** Just add powers (fastest method!)

> 2. **For separated lenses:** Always trace step-by-step (clearer, less error-prone)

> 3. **Check units:** Convert cm to m before calculating power (saves silly mistakes)

> 4. **Sign check:** Draw a quick lens diagram to verify $R_1$ and $R_2$ signs

> 5. **Silvered lens?** Remember light passes through lens TWICE → double power

**Common JEE Patterns:**

- Lens maker’s equation with one radius infinite (plano-convex/concave)
- Lens in water → power reduces
- Combination with one lens variable → find range/specific value
- Silvered lens → equivalent mirror system

**High-Yield Concepts:**

1. Power addition for contact lenses (easiest marks!)
2. Lens in different media (tricky but formulaic)
3. Separated lens systems (needs careful calculation)

---

## Related Topics

### Within Optics

- [Reflection and Refraction](../reflection-refraction/index.md) — Foundation of lens formula
- [Prism](../prism/index.md) — Refraction through non-spherical surfaces
- [Wave Optics](../wave-optics/index.md) — Interference effects in lenses
- [Diffraction](../diffraction/index.md) — Limits of lens resolution

### Connected Chapters

- [Ray Optics](../index.md) — Geometric construction of images
- [Human Eye](../../index.md) — Natural lens system
- [Optical Instruments](../optical-instruments/index.md) — Microscope, telescope designs

### Math Connections

- [Series and Reciprocals](../../../mathematics/sequences-series/index.md) — Understanding $\frac{1}{f}$ additions
- [Coordinate Geometry](../../../mathematics/coordinate-geometry/index.md) — Sign conventions
- [Optimization](../../../mathematics/limits-continuity-differentiability/applications-derivatives/index.md) — Finding max/min power

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Lens maker’s equation** connects shape (R₁, R₂) and material (n) to focal length

> 2. **Power = 1/f** — short focal length means high power (strong lens)

> 3. **Powers add for lenses in contact** — this is the fastest method for combinations

> 4. **Medium matters** — same lens has different focal length in water vs air

> 5. **Sign conventions for radii:** Draw the lens, mark centers, assign signs

> 6. **Silvered lens** = lens + mirror, light passes through lens twice
>
> **“Shape and material make the lens; power tells you its strength. Master the signs, and lens problems become your easiest points!”**
>
> **JEE Success Mantra:** Practice 15 problems on lens combinations — these are high-probability, high-scoring questions that take just 2 minutes if you know the formulas!

---

From TestGuru · our mock-test platform

## You've read Thin Lenses.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Fthin-lenses%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/thin-lenses/",this.page.identifier="/physics/optics/thin-lenses/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="lensMakerEquation" id="anim-lensMakerEquation-1795396423997572784"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-lensMakerEquation-1795396423997572784")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/thin-lenses/](https://jeenotes.in/physics/optics/thin-lenses/) · raw HTML: `offline/physics/optics/thin-lenses/index.html`_
