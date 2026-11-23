---
title: "Drift Velocity and Current Density"
source: "https://jeenotes.in/physics/current-electricity/drift-velocity/"
description: "Master drift velocity, current density, and mobility for JEE Physics with Iron Man's arc reactor analogy"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 8"
html: "../../../../offline/physics/current-electricity/drift-velocity/index.html"
extracted: "2026-11-23"
---

> Master drift velocity, current density, and mobility for JEE Physics with Iron Man's arc reactor analogy

## Prerequisites

Before studying this topic, make sure you understand:

- [Electric Charge and Fields](../../electrostatics/electric-charges/index.md) - Basic charge concepts
- [Electric Potential](../../electrostatics/electric-potential/index.md) - Potential difference fundamentals

## The Hook: How Does Tony Stark’s Arc Reactor Actually Work?

> **★ Key point · Connect: Iron Man → Current Electricity**
>
> In **Iron Man** (2008), Tony Stark’s arc reactor powers his entire suit with a continuous flow of energy. But have you ever wondered: when billions of electrons flow through a wire, how fast do they ACTUALLY move?
>
> **Surprising fact:** Even though electricity travels at nearly the speed of light, individual electrons drift slower than a snail! How is that possible? Let’s crack this mystery.

## Interactive Demo

See how electrons drift through a conductor when voltage is applied:

---

## The Core Concept: What is Drift Velocity?

### The Big Picture

When you switch on a light, the bulb glows instantly. But the electrons inside the wire are NOT racing at light speed. They’re actually bumping around randomly like people in a crowded market!

**Without Electric Field:**

- Electrons move randomly in all directions
- Average velocity = 0 (thermal motion)
- No net current flow

**With Electric Field (Voltage Applied):**

- Electrons still move randomly BUT now have a slight bias in one direction
- This small net velocity = **Drift Velocity** ($v_d$)
- This creates electric current!

> **◐ In simple terms · The Iron Man Connection**
>
> Tony’s arc reactor creates a **potential difference** that makes electrons drift in a specific direction. Even though each electron moves slowly (~1 mm/s), the **SIGNAL** to start moving travels at nearly light speed. That’s why the suit powers up instantly!
>
> Think of it like a water pipe already full of water. When you open the tap, water comes out immediately - not because the water from the tap traveled fast, but because the water was already there, just waiting to flow.

---

## Drift Velocity Formula

$$\boxed{v_d = \frac{eE\tau}{m}}$$

where:

- $e$ = charge of electron ($1.6 \times 10^{-19}$ C)
- $E$ = electric field strength
- $\tau$ = relaxation time (average time between collisions)
- $m$ = mass of electron ($9.1 \times 10^{-31}$ kg)

**In simple terms:** “Drift velocity depends on how strong the electric push is and how often electrons bump into atoms.”

### Alternative Form (Most Useful for JEE)

$$\boxed{v_d = \frac{I}{nAe}}$$

where:

- $I$ = current (amperes)
- $n$ = number density of free electrons (electrons per unit volume)
- $A$ = cross-sectional area of conductor
- $e$ = electronic charge

---

## Current Density: The Intensity of Flow

Current density tells us how much current flows through each square meter of cross-section.

$$\boxed{J = \frac{I}{A}}$$

**Vector form:**

$$\vec{J} = n e \vec{v_d}$$

**Unit:** Ampere per square meter (A/m²)

> **★ Key point · Think Water Flow**
>
> Current density is like water pressure in a pipe. Same total water flow (current $I$) through:
>
> - Thick pipe (large $A$) → Low pressure (low $J$)

> - Thin pipe (small $A$) → High pressure (high $J$)

### Relation Between J and E

$$\boxed{\vec{J} = \sigma \vec{E}}$$

where $\sigma$ = conductivity of material

This is **Ohm’s law in vector form**!

---

## Mobility: How Fast Electrons Respond

**Mobility** ($\mu$) measures how quickly electrons achieve drift velocity when electric field is applied.

$$\boxed{\mu = \frac{v_d}{E} = \frac{e\tau}{m}}$$

**Unit:** m²/(V·s)

### Important Relations

1. **Conductivity and Mobility:**

   $$\sigma = ne\mu$$
2. **Current in terms of mobility:**

   $$I = neA\mu E = neA\mu \frac{V}{L}$$

> **◐ In simple terms · Why Metals are Good Conductors**
>
> Metals like copper have:
>
> - High $n$ (lots of free electrons)

> - High $\mu$ (electrons move easily)

> - Therefore high $\sigma$ (great conductivity)
>
> Silver > Copper > Gold > Aluminum (in order of conductivity)

---

## Memory Tricks & Patterns

### Mnemonic for Drift Velocity

**“I Need A Electron”** → $I = nAe \times v_d$

Rearranged: $v_d = \frac{I}{nAe}$

### Mnemonic for Current Density

**“Just Equals I over Area”** → $J = \frac{I}{A}$

### Pattern Recognition

1. **Drift velocity is TINY:**

   - Typically $10^{-4}$ to $10^{-3}$ m/s
   - Slower than a tortoise!
   - Yet current establishes in nanoseconds
2. **n values (memorize these):**

   - Copper: $n \approx 8.5 \times 10^{28}$ electrons/m³
   - One free electron per atom for most metals
3. **If wire is stretched:**

   - Length doubles → Area halves (volume constant)
   - For same current: $v_d$ doubles (since $A$ halves)

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Use drift velocity formula when:**
>
> - Problem gives number density $n$ and asks for current

> - Problem relates microscopic (electron motion) to macroscopic (current)

> - Asked to compare drift velocities in different conductors
>
> **Use current density when:**
>
> - Need to analyze current distribution in non-uniform conductors

> - Comparing current flow in different cross-sections

> - Working with Ohm’s law in vector form

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing Signal Speed with Drift Speed**
>
> **Wrong thinking:** “Electricity travels at light speed, so electrons move fast!”
>
> **Reality:**
>
> - Signal speed (electromagnetic wave) ≈ $3 \times 10^8$ m/s

> - Drift velocity ≈ $10^{-4}$ m/s

> - Ratio: Signal is $10^{12}$ times faster!
>
> **JEE Trap:** Questions asking “how long for electrons to travel 1 km?” - use drift velocity, NOT signal speed!

> **⚠ Trap #2: Forgetting Area When Wire is Stretched**
>
> **Wrong:** “Wire stretched to 2L means $v_d$ stays same”
>
> **Correct:**
>
> - Volume constant: $AL = A'L'$

> - If $L' = 2L$, then $A' = A/2$

> - For same current: $v_d' = \frac{I}{nA'e} = 2v_d$
>
> **Memory trick:** Stretch wire → electrons must drift FASTER through thinner cross-section to carry same current!

> **⚠ Trap #3: Current Density Direction**
>
> **Wrong:** “Current density is scalar”
>
> **Correct:** $\vec{J}$ is a **vector** pointing in direction of current flow (opposite to electron drift!)
>
> Remember: Conventional current direction is opposite to electron motion.

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> A current of 1.6 A flows through a copper wire of cross-section $1 \text{ mm}^2$. If the number density of free electrons is $8 \times 10^{28} \text{ m}^{-3}$, find the drift velocity.
>
> **Solution:**
>
> Given: $I = 1.6$ A, $A = 1 \text{ mm}^2 = 10^{-6} \text{ m}^2$, $n = 8 \times 10^{28}$ m⁻³
>
> $$v_d = \frac{I}{nAe} = \frac{1.6}{8 \times 10^{28} \times 10^{-6} \times 1.6 \times 10^{-19}}$$

$$v_d = \frac{1.6}{1.28 \times 10^{4}} = 1.25 \times 10^{-4} \text{ m/s}$$
>
> **Answer:** $v_d = 0.125$ mm/s
>
> **Insight:** Drift velocity is indeed very small - about 0.1 mm per second!

> **↗ Connection · Problem 1.2**
>
> A wire carries current of 2 A. Calculate current density if wire diameter is 2 mm.
>
> **Solution:**
>
> $A = \pi r^2 = \pi (10^{-3})^2 = \pi \times 10^{-6}$ m²
>
> $$J = \frac{I}{A} = \frac{2}{\pi \times 10^{-6}} = \frac{2 \times 10^6}{\pi}$$

$$J \approx 6.37 \times 10^5 \text{ A/m}^2$$
>
> **Answer:** $J = 6.37 \times 10^5$ A/m²

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A metallic wire is stretched to double its length. If the original drift velocity of electrons was $v_d$, what is the new drift velocity when the same current passes through it?
>
> **Solution:**
>
> **Key concept:** Volume remains constant when wire is stretched
>
> Original: $A_1 L_1$, New: $A_2 L_2$
>
> $A_1 L_1 = A_2 L_2$
>
> If $L_2 = 2L_1$, then $A_2 = \frac{A_1}{2}$
>
> For same current $I$:
>
> $$v_d = \frac{I}{nAe}$$

$$\frac{v_{d2}}{v_{d1}} = \frac{A_1}{A_2} = \frac{A_1}{A_1/2} = 2$$
>
> **Answer:** New drift velocity = $2v_d$
>
> **JEE Insight:** Stretched wire → thinner cross-section → electrons drift faster for same current!

> **↗ Connection · Problem 2.2**
>
> Two wires of same material have lengths in ratio 1:2 and radii in ratio 2:1. If the same potential difference is applied, compare the drift velocities.
>
> **Solution:**
>
> For same material: same $n$, same $e$
>
> $$v_d = \frac{I}{nAe}$$
>
> But $I = \frac{V}{R}$ and $R = \frac{\rho L}{A}$
>
> So: $I = \frac{VA}{\rho L}$
>
> $$v_d = \frac{V A}{\rho L nAe} = \frac{V}{\rho L ne}$$

$$\frac{v_{d1}}{v_{d2}} = \frac{L_2}{L_1} = \frac{2}{1}$$
>
> **Answer:** $v_{d1} : v_{d2} = 2:1$
>
> **Key insight:** Drift velocity inversely proportional to length (for same V)!

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A non-uniform cylindrical wire has radius varying as $r = r_0(1 + \frac{x}{L})$ where $x$ is distance from one end. If current $I$ flows through it, find drift velocity as function of $x$.
>
> **Solution:**
>
> At position $x$:
>
> $$A(x) = \pi r^2 = \pi r_0^2 \left(1 + \frac{x}{L}\right)^2$$
>
> Current density:
>
> $$J(x) = \frac{I}{A(x)} = \frac{I}{\pi r_0^2 \left(1 + \frac{x}{L}\right)^2}$$
>
> Drift velocity:
>
> $$v_d(x) = \frac{J}{ne} = \frac{I}{\pi r_0^2 ne \left(1 + \frac{x}{L}\right)^2}$$
>
> **Answer:**
>
> $$\boxed{v_d(x) = \frac{I}{\pi r_0^2 ne} \times \frac{1}{\left(1 + \frac{x}{L}\right)^2}}$$
>
> **Advanced concept:** In non-uniform conductors, drift velocity varies with position!

> **↗ Connection · Problem 3.2**
>
> Estimate the time taken by an electron to drift from car battery to the headlight if the wire length is 1 m and drift velocity is $10^{-4}$ m/s. Why does the light turn on instantly?
>
> **Solution:**
>
> $$t = \frac{\text{distance}}{v_d} = \frac{1}{10^{-4}} = 10^4 \text{ s}$$
>
> Converting: $t = \frac{10^4}{3600} \approx 2.78$ hours!
>
> **Why instant light?**
>
> The electric field propagates at speed $c \approx 3 \times 10^8$ m/s
>
> Time for signal: $t_{signal} = \frac{1}{3 \times 10^8} \approx 3 \times 10^{-9}$ s (3 nanoseconds!)
>
> **Answer:** Electron drift time ≈ 3 hours, but signal time ≈ 3 ns
>
> **This explains:** Wire is already full of electrons (like a full water pipe). When you flip the switch, the electromagnetic signal tells ALL electrons to start drifting simultaneously. The electron at the bulb starts moving immediately, even though the electron at the battery takes hours to reach the bulb!

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Finding drift velocity from current | $v_d = \frac{I}{nAe}$ |
| Finding current density | $J = \frac{I}{A} = nev_d$ |
| Wire stretched (length changes) | $v_d \propto \frac{1}{A}$ (for same I) |
| Comparing drift velocities | Use $v_d = \frac{V}{\rho L ne}$ |
| Vector form of Ohm’s law | $\vec{J} = \sigma \vec{E}$ |
| Mobility relation | $\mu = \frac{v_d}{E}$, $\sigma = ne\mu$ |

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Wire stretching problems** (appears EVERY year!)
>
>    - Remember: Volume constant, so $AL = $ constant

> 2. **Microscopic to macroscopic conversion**
>
>    - Relate $v_d$, $n$, $e$ to measurable current $I$

> 3. **Conceptual traps**
>
>    - Signal speed vs drift speed

>    - Current density as vector

> 4. **Numerical estimation**
>
>    - Order of magnitude of drift velocity (~$10^{-4}$ m/s)

>    - Typical values of $n$ for copper (~$10^{28}$ m⁻³)
>
> **Time-saving trick:** For stretched wire problems, directly use:
>
> - Resistance × $n^2$ (from $R = \frac{\rho L}{A}$)

> - Drift velocity × $n$ (from $v_d = \frac{I}{nAe}$)

---

## Related Topics

### Within Current Electricity

- [Ohm’s Law](../ohms-law/index.md) - How drift velocity relates to V-I characteristics
- [Resistance and Resistivity](../resistance/index.md) - Why drift velocity varies with material
- [Electrical Power](../electrical-power/index.md) - Energy perspective of drifting electrons

### Connected Chapters

- [Electrostatics](../../electrostatics/index.md) - Electric field that causes drift
- [Magnetism](../../magnetism/index.md) - Moving charges create magnetic fields
- [Electromagnetic Induction](../../electromagnetic-induction/index.md) - How changing fields affect electron motion

### Math Connections

- [Vectors](../../../mathematics/vector-algebra/index.md) - Current density as vector quantity
- [Proportionality](../../../mathematics/index.md) - Understanding $v_d \propto I/A$ relationships

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Drift velocity is the tiny net velocity electrons acquire in an electric field** - typically $10^{-4}$ m/s, slower than a snail!

> 2. **Current density $J = I/A$ measures intensity of current flow** - crucial for non-uniform conductors and vector form of Ohm’s law

> 3. **The formula $I = nAev_d$ connects microscopic (electron motion) to macroscopic (current)** - the bridge between atomic and circuit levels

> 4. **Wire stretching problems:** Remember volume constant → if length doubles, area halves → drift velocity doubles (for same current)

> 5. **Don’t confuse signal speed (≈c) with drift speed (≈mm/s)** - the electromagnetic signal travels fast, but individual electrons drift slowly!
>
> **“Electrons drift like sleepy snails, but the electromagnetic signal races like light - that’s why your Iron Man suit powers up instantly!”**

---

From TestGuru · our mock-test platform

## You've read Drift Velocity and Current Density.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=current-electricity&tg_exam=jee-main&tg_page=%2Fphysics%2Fcurrent-electricity%2Fdrift-velocity%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/current-electricity/drift-velocity/",this.page.identifier="/physics/current-electricity/drift-velocity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="driftVelocity" id="anim-driftVelocity-1795396423087776827"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-driftVelocity-1795396423087776827")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/current-electricity/drift-velocity/](https://jeenotes.in/physics/current-electricity/drift-velocity/) · raw HTML: `offline/physics/current-electricity/drift-velocity/index.html`_
