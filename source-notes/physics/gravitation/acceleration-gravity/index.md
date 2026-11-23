---
title: "Acceleration due to Gravity and Its Variation"
source: "https://jeenotes.in/physics/gravitation/acceleration-gravity/"
description: "Understand how g varies with height, depth, latitude, and rotation for JEE Physics"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 8"
html: "../../../../offline/physics/gravitation/acceleration-gravity/index.html"
extracted: "2026-11-23"
---

> Understand how g varies with height, depth, latitude, and rotation for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Law of Universal Gravitation](../universal-gravitation/index.md) — The foundation for understanding g
- [Circular Motion](../../kinematics/circular-motion/index.md) — For understanding Earth’s rotation effects

---

## The Hook: Why Astronauts Train Underwater

> **★ Key point · Connect: ISRO Training → Physics**
>
> Ever wondered why **ISRO astronauts** for Gaganyaan mission train in swimming pools?
>
> Because underwater, their **effective weight** reduces due to buoyancy — simulating conditions where gravity is weaker (like on the Moon or at high altitudes).
>
> But here’s the fascinating part: **Gravity itself changes with location!**
>
> - Climb Mount Everest? You’re slightly lighter (g is less)

> - Dive to the ocean floor? You’re heavier (g is more)

> - Stand at the equator vs poles? Different weights!
>
> **Why does g vary? Let’s find out.**

---

## The Core Concept

### What is ‘g’?

**Acceleration due to gravity** (g) is the acceleration experienced by a freely falling object near Earth’s surface.

At Earth’s surface, using Newton’s law:

$$mg = G\frac{Mm}{R^2}$$

$$\boxed{g = \frac{GM}{R^2}}$$

**Standard value:** $g = 9.8$ m/s² (or 10 m/s² for quick calculations)

**In simple terms:** “g tells you how fast things accelerate when falling. It’s what gives you your weight: W = mg”

### Interactive Demo: Visualize Gravitational Formulas

Explore how g changes with mass and radius of a planet.

> **★ Key point · g vs G — The Key Difference**
>
> | Property | $G$ (Universal Constant) | $g$ (Acceleration) |

> | --- | --- | --- |

> | **Value** | $6.67 \times 10^{-11}$ N·m²/kg² | 9.8 m/s² |

> | **Nature** | Fundamental constant | Derived quantity |

> | **Varies?** | **NO** — same everywhere | **YES** — depends on location |

> | **Depends on** | Nothing (universal) | Mass and radius of planet |
>
> **Formula connecting them:** $g = \frac{GM}{R^2}$

---

## Variation of g with Height

### Above Earth’s Surface

For an object at height $h$ above Earth’s surface:

Distance from center: $r = R + h$

$$g_h = \frac{GM}{(R+h)^2}$$

Comparing with surface value $g = \frac{GM}{R^2}$:

$$\boxed{g_h = g\left(\frac{R}{R+h}\right)^2}$$

### Approximation for Small Heights (h « R)

For satellites close to Earth or tall mountains:

$$g_h = g\left(1 + \frac{h}{R}\right)^{-2}$$

Using binomial expansion $(1+x)^n \approx 1 + nx$ for small x:

$$\boxed{g_h \approx g\left(1 - \frac{2h}{R}\right)}$$

**Valid when:** $h < 0.1R$ (i.e., h < 640 km)

> **◐ In simple terms · Mount Everest Example**
>
> At **Mount Everest** summit (h = 8.85 km):
>
> $$g_h = g\left(1 - \frac{2 \times 8850}{6.4 \times 10^6}\right) = g(1 - 0.00276)$$

$$g_h \approx 0.9973g \approx 9.773 \text{ m/s}^2$$
>
> You’re about **0.27% lighter** at the summit! A 60 kg person “loses” about 160 grams.

---

## Variation of g with Depth

### Below Earth’s Surface

Assumption: Earth has uniform density $\rho$

At depth $d$ below surface, only the mass of the sphere of radius $(R-d)$ contributes (shell theorem!).

$$M' = \frac{4}{3}\pi(R-d)^3 \rho$$

Since $M = \frac{4}{3}\pi R^3 \rho$, we get $\frac{M'}{M} = \frac{(R-d)^3}{R^3}$

$$g_d = \frac{GM'}{(R-d)^2} = \frac{G \cdot M \cdot (R-d)^3}{R^3 \cdot (R-d)^2}$$

$$g_d = \frac{GM}{R^2} \cdot \frac{R-d}{R}$$

$$\boxed{g_d = g\left(1 - \frac{d}{R}\right)}$$

**Linear decrease!** Unlike the 1/r² decrease with height, g decreases **linearly** with depth.

### At the Center of Earth

When $d = R$:

$$g_{center} = g(1 - 1) = 0$$

> **★ Key point · Why Zero at Center?**
>
> At Earth’s center, you’re pulled equally in all directions by the surrounding mass. All gravitational forces **cancel out** — you’d be weightless!
>
> **Movie Connection:** In *Total Recall* and similar sci-fi movies, elevators through Earth’s core would experience zero gravity at the center.

---

## Comparing Height vs Depth Variation

| Property | Height ($h$) | Depth ($d$) |
| --- | --- | --- |
| Formula | $g_h = g\left(\frac{R}{R+h}\right)^2$ | $g_d = g\left(1 - \frac{d}{R}\right)$ |
| Approximation | $g_h \approx g\left(1 - \frac{2h}{R}\right)$ | No approximation needed |
| Variation type | Inverse square (1/r²) | Linear |
| At equal distance | $g_h < g_d$ | $g_d > g_h$ |
| Maximum decrease | Approaches 0 at $r \to \infty$ | Becomes 0 at center |

**Key Insight:** For same distance, **depth has less effect** than height!

Example: At h = d = R/2:

- $g_h = g \cdot \frac{4}{9} \approx 0.44g$
- $g_d = g \cdot \frac{1}{2} = 0.5g$

$g_d > g_h$ — You’re heavier deep underground than high in the sky!

---

## Variation of g with Latitude

### Effect of Earth’s Rotation

Earth rotates with angular velocity $\omega = \frac{2\pi}{T}$ where $T = 24$ hours.

An object at latitude $\lambda$ experiences:

1. **True gravitational force:** $mg$ (towards center)
2. **Centrifugal force:** $m\omega^2 R\cos\lambda$ (outward)

Effective $g'$ (apparent gravity):

$$\boxed{g' = g - \omega^2 R\cos^2\lambda}$$

### At Different Latitudes

| Location | Latitude $\lambda$ | $\cos\lambda$ | Effective g |
| --- | --- | --- | --- |
| **Poles** | 90° | 0 | $g_{pole} = g$ (maximum) |
| **Equator** | 0° | 1 | $g_{eq} = g - \omega^2 R$ (minimum) |
| **45° latitude** | 45° | $1/\sqrt{2}$ | $g_{45} = g - \frac{\omega^2 R}{2}$ |

**Numerical value:** $\omega^2 R \approx 0.034$ m/s²

So: $g_{pole} - g_{eq} \approx 0.034$ m/s² (about 0.35% difference)

> **◐ In simple terms · ISRO Launches from Sriharikota**
>
> **Why does ISRO launch rockets from Sriharikota (near equator)?**
>
> At equator:
>
> 1. $g$ is minimum — less fuel needed to escape gravity

> 2. Earth’s rotational speed is maximum (about 460 m/s eastward) — **free boost** to orbital velocity!
>
> **For eastward launches:** Effective launch velocity = rocket velocity + Earth’s rotation
>
> This saves fuel and increases payload capacity!

---

## Combined Variation with Height and Latitude

At height $h$ and latitude $\lambda$:

$$g' = g\left(\frac{R}{R+h}\right)^2 - \omega^2(R+h)\cos^2\lambda$$

For small heights:

$$g' \approx g\left(1 - \frac{2h}{R}\right) - \omega^2 R\cos^2\lambda$$

---

## Memory Tricks & Patterns

### Mnemonic for Variation Formulas

**“Height Hurts Heavily, Depth Decreases Directly”**

- **Height:** Square law → $\left(\frac{R}{R+h}\right)^2$ or $1 - \frac{2h}{R}$
- **Depth:** Linear → $1 - \frac{d}{R}$

### The 1/2 vs 2 Pattern

> **★ Key point · Pattern Recognition**
>
> **Height approximation:** Factor is **2h**
>
> $$g_h \approx g\left(1 - \frac{2h}{R}\right)$$
>
> **Depth formula:** Factor is just **d**
>
> $$g_d = g\left(1 - \frac{d}{R}\right)$$
>
> **Remember:** Height has “2” because it follows inverse square law!

### Quick Comparison Trick

**Same distance h = d:**

For both: decrease = $\frac{2h}{R}$ and $\frac{d}{R}$

Since $\frac{2h}{R} > \frac{d}{R}$ for same distance:

**Height decreases g MORE than depth** → $g_h < g_d$

---

## When to Use Which Formula

> **★ Key point · Decision Tree**
>
> **At surface (no height/depth):**
>
> - Simple problems: $g = 9.8$ m/s² or $g = 10$ m/s²

> - Deriving g: $g = \frac{GM}{R^2}$
>
> **Above surface (height h):**
>
> - General: $g_h = g\left(\frac{R}{R+h}\right)^2$

> - Small heights (h < 640 km): $g_h \approx g\left(1 - \frac{2h}{R}\right)$

> - Far from Earth (satellites): Use $g = \frac{GM}{r^2}$ directly
>
> **Below surface (depth d):**
>
> - Always: $g_d = g\left(1 - \frac{d}{R}\right)$

> - At center: $g = 0$
>
> **Rotation effects:**
>
> - Add: $g' = g - \omega^2 R\cos^2\lambda$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Using h Instead of (R+h)**
>
> **Wrong:** $g_h = \frac{GM}{h^2}$
>
> **Correct:** $g_h = \frac{GM}{(R+h)^2}$
>
> Distance is measured from **Earth’s center**, not surface!

> **⚠ Trap #2: Wrong Approximation**
>
> **For small h:**
>
> **Wrong:** $g_h \approx g\left(1 - \frac{h}{R}\right)$ ❌
>
> **Correct:** $g_h \approx g\left(1 - \frac{2h}{R}\right)$ ✓
>
> Don’t forget the factor of 2!

> **⚠ Trap #3: Mixing Height and Depth Formulas**
>
> Height and depth formulas are **NOT the same**!
>
> **Height:** $g_h = g\left(1 - \frac{2h}{R}\right)$ (approximation)
>
> **Depth:** $g_d = g\left(1 - \frac{d}{R}\right)$ (exact)
>
> Different factors: 2 vs 1

> **⚠ Trap #4: Forgetting Earth is Not Uniform**
>
> The depth formula assumes **uniform density**. Real Earth has denser core, so:
>
> - Formula is approximate

> - In mines, measured g is slightly higher than predicted
>
> For JEE, **assume uniform density** unless stated otherwise.

---

## Practice Problems

### Level 1: Foundation (NCERT/Basics)

> **↗ Connection · Problem 1**
>
> At what height above Earth’s surface will g be 4.9 m/s² (half of 9.8 m/s²)? (Earth’s radius = 6400 km)
>
> **Solution:**
>
> $$g_h = g\left(\frac{R}{R+h}\right)^2$$

$$\frac{g}{2} = g\left(\frac{R}{R+h}\right)^2$$

$$\frac{1}{2} = \left(\frac{R}{R+h}\right)^2$$

$$\frac{R}{R+h} = \frac{1}{\sqrt{2}}$$

$$R+h = R\sqrt{2}$$

$$h = R(\sqrt{2} - 1) = R(1.414 - 1) = 0.414R$$

$$h = 0.414 \times 6400 = 2650 \text{ km}$$
>
> **Answer:** At height **2650 km** above Earth’s surface

> **↗ Connection · Problem 2**
>
> At what depth below Earth’s surface is g reduced to 60% of its surface value? (R = 6400 km)
>
> **Solution:**
>
> $$g_d = g\left(1 - \frac{d}{R}\right)$$

$$0.6g = g\left(1 - \frac{d}{R}\right)$$

$$0.6 = 1 - \frac{d}{R}$$

$$\frac{d}{R} = 0.4$$

$$d = 0.4R = 0.4 \times 6400 = 2560 \text{ km}$$
>
> **Answer:** At depth **2560 km** below surface

---

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> Compare the values of g at height h and depth h below Earth’s surface, where h « R.
>
> **Solution:**
>
> At height h:
>
> $$g_h = g\left(1 - \frac{2h}{R}\right)$$
>
> At depth h:
>
> $$g_d = g\left(1 - \frac{h}{R}\right)$$
>
> Ratio:
>
> $$\frac{g_h}{g_d} = \frac{1 - \frac{2h}{R}}{1 - \frac{h}{R}}$$
>
> For small h/R, approximate:
>
> $$\frac{g_h}{g_d} \approx \left(1 - \frac{2h}{R}\right)\left(1 + \frac{h}{R}\right)$$

$$\approx 1 - \frac{2h}{R} + \frac{h}{R} = 1 - \frac{h}{R}$$
>
> **Conclusion:** $g_h < g_d$
>
> The decrease is more at height than at depth!
>
> **Numerical example:** If h = R/100 (64 km):
>
> - $g_h = g(1 - 0.02) = 0.98g$

> - $g_d = g(1 - 0.01) = 0.99g$
>
> Ratio: $\frac{g_h}{g_d} = \frac{0.98}{0.99} \approx 0.99$

> **↗ Connection · Problem 4**
>
> If g at Earth’s surface is 9.8 m/s², find g at height equal to Earth’s radius.
>
> **Solution:**
>
> Given: $h = R$
>
> $$g_h = g\left(\frac{R}{R+h}\right)^2 = g\left(\frac{R}{R+R}\right)^2$$

$$g_h = g\left(\frac{R}{2R}\right)^2 = g\left(\frac{1}{2}\right)^2 = \frac{g}{4}$$

$$g_h = \frac{9.8}{4} = 2.45 \text{ m/s}^2$$
>
> **Answer:** **2.45 m/s²** (one-fourth of surface value)
>
> **Note:** At h = R, distance from center is 2R, so by inverse square law, g becomes (1/2)² = 1/4.

> **↗ Connection · Problem 5**
>
> A body weighs 63 N on Earth’s surface. What will it weigh at a height of R/2? (g = 10 m/s²)
>
> **Solution:**
>
> Weight on surface: $W = mg = 63$ N → $m = 6.3$ kg
>
> At height h = R/2:
>
> $$g_h = g\left(\frac{R}{R + R/2}\right)^2 = g\left(\frac{R}{3R/2}\right)^2 = g\left(\frac{2}{3}\right)^2 = \frac{4g}{9}$$
>
> New weight:
>
> $$W_h = mg_h = m \cdot \frac{4g}{9} = \frac{4mg}{9} = \frac{4 \times 63}{9} = 28 \text{ N}$$
>
> **Answer:** **28 N**
>
> **Shortcut:** $W_h = W \cdot \left(\frac{R}{R+h}\right)^2 = 63 \times \frac{4}{9} = 28$ N

---

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 6**
>
> At what distance from Earth’s center is the value of g same as at a depth of R/2 below surface?
>
> **Solution:**
>
> At depth d = R/2:
>
> $$g_d = g\left(1 - \frac{R/2}{R}\right) = g\left(\frac{1}{2}\right) = \frac{g}{2}$$
>
> At distance r from center (height h = r - R):
>
> $$g_r = \frac{GM}{r^2} = \frac{g}{2}$$
>
> Since $g = \frac{GM}{R^2}$:
>
> $$\frac{GM}{r^2} = \frac{1}{2} \cdot \frac{GM}{R^2}$$

$$\frac{1}{r^2} = \frac{1}{2R^2}$$

$$r^2 = 2R^2$$

$$r = R\sqrt{2}$$
>
> **Answer:** At distance **$R\sqrt{2}$** from Earth’s center
>
> Height above surface: $h = R\sqrt{2} - R = R(\sqrt{2} - 1) \approx 0.414R$

> **↗ Connection · Problem 7 (Tricky)**
>
> Find the ratio of heights above Earth’s surface where g reduces to (a) 36% of surface value, and (b) where weight reduces to 36% of surface weight.
>
> **Solution:**
>
> **Case (a): g reduces to 36%**
>
> $$g_h = 0.36g$$

$$g\left(\frac{R}{R+h}\right)^2 = 0.36g$$

$$\frac{R}{R+h} = 0.6$$

$$R = 0.6R + 0.6h$$

$$0.4R = 0.6h$$

$$h = \frac{2R}{3}$$
>
> **Case (b): Weight reduces to 36%**
>
> Weight = mg, so if weight reduces to 36%, then g ALSO reduces to 36% (mass doesn’t change!).
>
> $$h = \frac{2R}{3}$$
>
> (same as case a)
>
> **Answer:** **Both are the same** = $\frac{2R}{3}$
>
> **Key Insight:** Reduction in weight is ALWAYS equal to reduction in g (since W = mg and m is constant).

> **↗ Connection · Problem 8 (Challenging)**
>
> A tunnel is dug along a diameter of Earth. A particle is dropped into it. Show that it will execute SHM and find the time period. (Assume uniform density, neglect air resistance)
>
> **Solution:**
>
> At distance $x$ from center:
>
> $$g(x) = g \cdot \frac{x}{R}$$
>
> (This is the depth formula rearranged: at depth d, $g_d = g(1 - d/R) = g \cdot (R-d)/R = g \cdot x/R$ where x = R-d)
>
> Force on particle of mass m:
>
> $$F = -mg(x) = -mg\frac{x}{R}$$
>
> Negative sign because force is towards center (restoring).
>
> $$F = -\frac{mg}{R} \cdot x$$
>
> This is of the form $F = -kx$ where $k = \frac{mg}{R}$
>
> **This is SHM!**
>
> Acceleration:
>
> $$a = \frac{F}{m} = -\frac{g}{R}x$$
>
> Comparing with $a = -\omega^2 x$:
>
> $$\omega^2 = \frac{g}{R}$$

$$\omega = \sqrt{\frac{g}{R}}$$
>
> Time period:
>
> $$T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{R}{g}}$$
>
> **Numerical value:**
>
> $$T = 2\pi\sqrt{\frac{6.4 \times 10^6}{10}} = 2\pi\sqrt{640000} = 2\pi \times 800$$

$$T \approx 5024 \text{ seconds} \approx 84 \text{ minutes}$$
>
> **Answer:** Time period = $2\pi\sqrt{\frac{R}{g}} \approx 84$ minutes
>
> **Amazing fact:** This is **independent of the mass** of the particle! Also, this is the same as the time period of a satellite orbiting very close to Earth’s surface!

---

## Quick Revision Box

| Situation | Formula | Key Point |
| --- | --- | --- |
| At height h (general) | $g_h = g\left(\frac{R}{R+h}\right)^2$ | Inverse square law |
| At height h (h « R) | $g_h \approx g\left(1 - \frac{2h}{R}\right)$ | Note the factor of 2 |
| At depth d | $g_d = g\left(1 - \frac{d}{R}\right)$ | Linear decrease |
| At Earth’s center | $g = 0$ | All forces cancel |
| Due to rotation | $g' = g - \omega^2R\cos^2\lambda$ | Minimum at equator |
| At poles | $g' = g$ | Maximum value |
| At equator | $g' = g - \omega^2R$ | Minimum value |
| Same distance h = d | $g_h < g_d$ | Height affects more |

**Critical Values:**

- $g = 9.8$ m/s² (or 10 m/s²)
- $R = 6.4 \times 10^6$ m
- $\omega^2R \approx 0.034$ m/s²

---

## Related Topics

### Within Gravitation Chapter

- [Universal Gravitation](../universal-gravitation/index.md) — Foundation for deriving g
- [Gravitational Field and Potential](../gravitational-field-potential/index.md) — Energy aspects
- [Satellites](../satellites/index.md) — Uses variation of g with height

### Connected Chapters

- [Kinematics](../../kinematics/motion-1d/index.md) — Free fall uses constant g
- [Circular Motion](../../kinematics/circular-motion/index.md) — Earth’s rotation effects
- [Simple Harmonic Motion](../../oscillations-waves/index.md) — Tunnel through Earth problem

### Experimental

- [Experimental Skills](../../experimental-skills/index.md) — Measuring g using pendulum or free fall

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **g is Not Constant:** It varies with height, depth, and latitude — only approximately constant near Earth’s surface

> 2. **Height vs Depth:** For same distance, height reduces g MORE than depth ($g_h < g_d$) because of inverse square vs linear variation

> 3. **Two Key Formulas:** Height → $g\left(1 - \frac{2h}{R}\right)$, Depth → $g\left(1 - \frac{d}{R}\right)$ — note the factor of 2 difference!

> 4. **Rotation Matters:** Earth’s spin makes you lighter at the equator — that’s why rockets launch from there

> 5. **Center is Special:** At Earth’s center, g = 0 despite enormous mass around you — symmetry cancels all forces
>
> **“From mountain peaks to ocean depths, from poles to equator — gravity’s strength varies. Master these variations, and you’ll understand why satellites orbit, why ISRO launches from Sriharikota, and why your weight certificate from sea level won’t match at Shimla!”**

---

From TestGuru · our mock-test platform

## You've read Acceleration due to Gravity and Its Variation.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=gravitation&tg_exam=jee-main&tg_page=%2Fphysics%2Fgravitation%2Facceleration-gravity%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/gravitation/acceleration-gravity/",this.page.identifier="/physics/gravitation/acceleration-gravity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="formulaGravitation" id="anim-formulaGravitation-1795396423524933077"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-formulaGravitation-1795396423524933077")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/gravitation/acceleration-gravity/](https://jeenotes.in/physics/gravitation/acceleration-gravity/) · raw HTML: `offline/physics/gravitation/acceleration-gravity/index.html`_
