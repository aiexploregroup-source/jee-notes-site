---
title: "Newton's Law of Universal Gravitation"
source: "https://jeenotes.in/physics/gravitation/universal-gravitation/"
description: "Master Newton's universal law of gravitation and the gravitational constant G for JEE Physics"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 8"
html: "../../../../offline/physics/gravitation/universal-gravitation/index.html"
extracted: "2026-11-23"
---

> Master Newton's universal law of gravitation and the gravitational constant G for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Newton’s Laws of Motion](../../laws-of-motion/index.md) - Force and acceleration concepts
- [Vectors](../../kinematics/motion-2d/index.md) - Vector addition and resolution

---

## The Hook: Why Does the Moon Not Fall to Earth?

> **★ Key point · Connect: Interstellar → Physics**
>
> Remember the breathtaking scene in **Interstellar** where Cooper’s spacecraft orbits the black hole Gargantua? The ship is constantly “falling” towards the black hole, yet it never crashes. Why?
>
> The same question puzzled scientists for centuries: **Why doesn’t the Moon crash into Earth?**
>
> Newton’s genius was realizing that the Moon IS falling — it’s just moving forward so fast that it keeps missing Earth! And the force causing this “fall” is the same one that makes an apple drop from a tree.
>
> **One force, one law — from apples to galaxies.**

---

## The Core Concept

### Newton’s Law of Universal Gravitation

Every particle in the universe attracts every other particle with a force that is:

1. **Directly proportional** to the product of their masses
2. **Inversely proportional** to the square of the distance between them

$$\boxed{F = G\frac{m_1 m_2}{r^2}}$$

**In simple terms:** “The bigger the masses, the stronger the pull. The farther apart, the weaker the pull — and it weakens FAST (as 1/r²).”

### Interactive Demo: Visualize Newton’s Law

See exactly what each variable means and how changing them affects the gravitational force:

### Understanding Each Component

| Symbol | Meaning | Unit |
| --- | --- | --- |
| $F$ | Gravitational force | Newton (N) |
| $G$ | Universal gravitational constant | $6.67 \times 10^{-11}$ N·m²/kg² |
| $m_1, m_2$ | Masses of the two objects | kg |
| $r$ | Distance between **centers** of masses | m |

> **★ Key point · The Universal Constant G**
>
> $G = 6.67 \times 10^{-11}$ N·m²/kg²
>
> - **Universal** — Same everywhere in the universe (not ‘g’ which varies!)

> - Measured by Henry Cavendish in 1798 using a torsion balance

> - Very small value — gravity is the weakest fundamental force

> - For JEE: Remember $G \approx 6.67 \times 10^{-11}$ (exact value matters!)
>
> **Don’t confuse:**
>
> - $G$ = Universal gravitational constant (6.67 × 10⁻¹¹)

> - $g$ = Acceleration due to gravity on Earth’s surface (9.8 m/s²)

---

## Vector Form of Newton’s Law

The gravitational force is **always attractive** and acts along the line joining the centers:

$$\boxed{\vec{F}_{12} = -G\frac{m_1 m_2}{r^2}\hat{r}_{12}}$$

where $\hat{r}_{12}$ is the unit vector from mass 1 to mass 2, and the negative sign indicates attraction.

**By Newton’s Third Law:**

$$\vec{F}_{12} = -\vec{F}_{21}$$

The force Earth exerts on you equals the force you exert on Earth — but Earth’s mass is so huge that its acceleration is negligible!

---

## Properties of Gravitational Force

### 1. Always Attractive

Unlike electric force (which can repel), gravity only attracts. No “negative mass” exists.

### 2. Central Force

Acts along the line joining the centers of the two masses.

### 3. Long Range

Extends to infinity, though it weakens as 1/r². This is why distant stars still exert (tiny) forces on us.

### 4. Follows Inverse Square Law

Doubling the distance makes force **four times weaker** (2² = 4).

| Distance | Force |
| --- | --- |
| r | F |
| 2r | F/4 |
| 3r | F/9 |
| 10r | F/100 |

### 5. Obeys Superposition Principle

If multiple masses act on one object, the total force is the **vector sum** of individual forces.

$$\vec{F}_{net} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + ...$$

---

## Memory Tricks & Patterns

### Mnemonic for the Formula

**“Funny Girls Make Me Run Round”** → F = G · M · m / r · r

Or remember: **“Force is G times Mass-Mass over r-squared”**

### The 1/r² Pattern

> **★ Key point · Inverse Square Law — Nature's Favorite!**
>
> Many forces in physics follow 1/r²:
>
> - Gravitational force

> - Electric force (Coulomb’s law)

> - Light intensity

> - Sound intensity
>
> **Why?** Because they spread out in 3D space. Think of a balloon expanding — surface area grows as r², so force per unit area decreases as 1/r².

### Quick Dimensional Check

$[G] = \frac{[F][r^2]}{[m_1][m_2]} = \frac{N \cdot m^2}{kg^2} = \frac{kg \cdot m \cdot s^{-2} \cdot m^2}{kg^2} = m^3 kg^{-1} s^{-2}$

**For JEE:** You might need to verify dimensions of G in MCQs!

---

## Connecting to ISRO’s Chandrayaan

> **◐ In simple terms · Real World: Chandrayaan-3's Journey**
>
> When **ISRO’s Chandrayaan-3** traveled to the Moon in 2023:
>
> 1. **Near Earth:** Gravitational force from Earth dominated (Earth’s mass is 81 times Moon’s mass)

> 2. **Midway:** There’s a point where $F_{Earth} = F_{Moon}$ — the spacecraft experiences **zero net force**!

> 3. **Near Moon:** Moon’s gravity takes over, pulling the lander down
>
> At every point, Newton’s law calculated the exact force:
>
> $$F = G\frac{M_{Earth} \cdot m_{spacecraft}}{r_{Earth}^2} + G\frac{M_{Moon} \cdot m_{spacecraft}}{r_{Moon}^2}$$
>
> This precision allowed the soft landing in the South Polar region!

---

## When to Use This Formula

> **★ Key point · Decision Tree**
>
> **Use Newton’s Law of Gravitation when:**
>
> - Calculating force between **any two masses** (planets, stars, satellites)

> - Objects are **far from Earth’s surface** (where g varies)

> - Dealing with **multiple masses** (use superposition)
>
> **Use F = mg when:**
>
> - Object is **near Earth’s surface** (constant g ≈ 9.8 m/s²)

> - Simpler calculations (free fall, projectiles)

> - Heights are small compared to Earth’s radius
>
> **Connection:** $mg = G\frac{Mm}{R^2}$ gives us $g = \frac{GM}{R^2}$ — we’ll explore this in the next topic!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting r is Center-to-Center Distance**
>
> **Wrong:** For Earth-Moon system, using distance from Earth’s surface
>
> **Correct:** Use distance from Earth’s **center** to Moon’s **center**
>
> Example: For object at height h above Earth:
>
> - Wrong: $r = h$

> - Correct: $r = R + h$ (where R = Earth’s radius)

> **⚠ Trap #2: Confusing G and g**
>
> $G$ = Universal constant (6.67 × 10⁻¹¹) — same everywhere
>
> $g$ = Acceleration on Earth’s surface (9.8 m/s²) — **varies** with location
>
> **JEE Trap:** “Find the value of g on Moon if its mass is M and radius is R”

> Answer: $g_{Moon} = \frac{GM}{R^2}$ (uses G, not Earth’s g!)

> **⚠ Trap #3: Vector Addition for Multiple Masses**
>
> When two masses pull on a third, **add forces as vectors**, not scalars!
>
> Example: Two equal masses at right angles pull on a third mass.

> Result: $F_{net} = \sqrt{F_1^2 + F_2^2} = F\sqrt{2}$ (not 2F!)

---

## Practice Problems

### Level 1: Foundation (NCERT/Basics)

> **↗ Connection · Problem 1**
>
> Calculate the gravitational force between Earth (mass $6 \times 10^{24}$ kg) and a 50 kg student on its surface. (Earth’s radius = $6.4 \times 10^6$ m, $G = 6.67 \times 10^{-11}$ N·m²/kg²)
>
> **Solution:**
>
> $$F = G\frac{Mm}{r^2} = \frac{6.67 \times 10^{-11} \times 6 \times 10^{24} \times 50}{(6.4 \times 10^6)^2}$$

$$F = \frac{6.67 \times 6 \times 50 \times 10^{13}}{40.96 \times 10^{12}} = \frac{2001 \times 10^{13}}{40.96 \times 10^{12}}$$

$$F \approx 488 \text{ N}$$
>
> **Alternative:** $F = mg = 50 \times 9.8 = 490$ N (close enough!)

> **↗ Connection · Problem 2**
>
> If the distance between two masses is doubled, by what factor does the gravitational force change?
>
> **Solution:**
>
> $F \propto \frac{1}{r^2}$
>
> If $r \to 2r$: $F' = \frac{F}{(2)^2} = \frac{F}{4}$
>
> **Answer:** Force becomes **one-fourth** (decreases by factor of 4)

---

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> Two particles of equal mass m are placed at a distance r apart. A third particle of mass M is placed on the line joining them such that it experiences zero net force. Where should it be placed?
>
> **Solution:**
>
> Let the third mass be at distance x from first mass.
>
> For zero net force:
>
> $$G\frac{Mm}{x^2} = G\frac{Mm}{(r-x)^2}$$

$$\frac{1}{x^2} = \frac{1}{(r-x)^2}$$

$$x = r - x$$

$$x = \frac{r}{2}$$
>
> **Answer:** At the **midpoint** between the two equal masses.

> **↗ Connection · Problem 4**
>
> At what distance from Earth’s center is the gravitational force on a mass m equal to half its value on Earth’s surface?
>
> **Solution:**
>
> On surface: $F_0 = G\frac{Mm}{R^2}$
>
> At distance r: $F = G\frac{Mm}{r^2} = \frac{F_0}{2}$
>
> $$G\frac{Mm}{r^2} = \frac{1}{2} \cdot G\frac{Mm}{R^2}$$

$$\frac{1}{r^2} = \frac{1}{2R^2}$$

$$r^2 = 2R^2$$

$$r = R\sqrt{2} = 1.414R$$
>
> **Answer:** $r = \sqrt{2}R$ from Earth’s center (or at height $h = R(\sqrt{2} - 1) = 0.414R$ above surface)

---

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 5**
>
> Four identical particles each of mass m are placed at the corners of a square of side a. Find the gravitational force on any one particle due to the other three.
>
> **Solution:**
>
> Consider particle at corner A. Forces from:
>
> 1. **Adjacent corners B and D** (distance = a):
>
>    $$F_1 = F_2 = G\frac{m^2}{a^2}$$
>
>    These are at 90° to each other.
>
>    Resultant: $F_R = \sqrt{F_1^2 + F_2^2} = \frac{Gm^2}{a^2}\sqrt{2}$
>
>    Direction: Along diagonal towards center

> 2. **Opposite corner C** (distance = $a\sqrt{2}$):
>
>    $$F_3 = G\frac{m^2}{(a\sqrt{2})^2} = \frac{Gm^2}{2a^2}$$
>
>    Direction: Along diagonal towards center

> 3. **Total force:**

>    All forces point towards center, so add directly:
>
>    $$F_{net} = F_R + F_3 = \frac{Gm^2}{a^2}\sqrt{2} + \frac{Gm^2}{2a^2}$$

$$F_{net} = \frac{Gm^2}{a^2}\left(\sqrt{2} + \frac{1}{2}\right) = \frac{Gm^2}{a^2}\left(\frac{2\sqrt{2} + 1}{2}\right)$$
>
> **Answer:** $F = \frac{Gm^2}{a^2}\left(\sqrt{2} + \frac{1}{2}\right)$ along the diagonal towards center
>
> **Alternative form:** $F = \frac{Gm^2}{a^2} \times \frac{2\sqrt{2} + 1}{2} \approx \frac{1.914 \cdot Gm^2}{a^2}$

> **↗ Connection · Problem 6 (Challenging)**
>
> The gravitational force between two point masses M and m at distance r is F. If 25% of mass of M is transferred to m, find the new force at the same distance.
>
> **Solution:**
>
> Initially: $F = G\frac{Mm}{r^2}$
>
> After transfer:
>
> - $M' = M - 0.25M = 0.75M$

> - $m' = m + 0.25M$
>
> New force:
>
> $$F' = G\frac{M' \cdot m'}{r^2} = G\frac{(0.75M)(m + 0.25M)}{r^2}$$

$$F' = G\frac{0.75Mm + 0.1875M^2}{r^2}$$
>
> This depends on the ratio m/M. Let’s find when F’ is maximum:
>
> $$F' = G\frac{M \cdot m'}{r^2} \cdot 0.75 + G\frac{0.1875M^2}{r^2}$$
>
> For **special case m = M:**
>
> $$F' = G\frac{(0.75M)(1.25M)}{r^2} = G\frac{0.9375M^2}{r^2}$$
>
> Original: $F = G\frac{M^2}{r^2}$
>
> $$\frac{F'}{F} = 0.9375 = \frac{15}{16}$$
>
> **General Answer:** Force changes to $F' = \frac{(0.75M)(m + 0.25M)}{Mm} \cdot F$
>
> **For equal masses:** $F' = \frac{15F}{16}$ (decreases slightly)

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Force between two masses | $F = G\frac{m_1 m_2}{r^2}$ |
| Distance doubled | Force becomes F/4 |
| Both masses doubled | Force becomes 4F |
| Multiple masses on one object | Vector sum of individual forces |
| Distance from center | Use $r = R + h$ (not just h) |
| Finding acceleration | $a = \frac{F}{m} = G\frac{M}{r^2}$ |

**Key Values to Remember:**

- $G = 6.67 \times 10^{-11}$ N·m²/kg²
- Earth’s mass: $M_E \approx 6 \times 10^{24}$ kg
- Earth’s radius: $R_E \approx 6.4 \times 10^6$ m

---

## Related Topics

### Within Gravitation Chapter

- [Acceleration due to Gravity](../acceleration-gravity/index.md) — How g varies with height and depth
- [Gravitational Field and Potential](../gravitational-field-potential/index.md) — Energy perspective on gravity
- [Satellites](../satellites/index.md) — Applications of universal gravitation

### Connected Chapters

- [Newton’s Laws of Motion](../../laws-of-motion/index.md) — F = ma connects to gravitational force
- [Circular Motion](../../kinematics/circular-motion/index.md) — Satellites use this
- [Work and Energy](../../work-energy-power/index.md) — Gravitational potential energy

### Math Connections

- [Vectors](../../../mathematics/vector-algebra/index.md) — Vector addition for multiple masses
- [Quadratic Equations](../../../mathematics/index.md) — Solving for distances in problems

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **One Universal Law:** Newton unified terrestrial and celestial mechanics — the same law governs apples and planets

> 2. **Inverse Square is Fundamental:** Force weakens as 1/r² — double distance, quarter the force

> 3. **G is Universal, g is Local:** Don’t confuse the universal constant G with Earth’s surface gravity g

> 4. **Always Attractive:** Unlike charges that repel, masses only attract — gravity is always pulling things together

> 5. **Distance is Center-to-Center:** Always use distance between centers, not surface-to-surface
>
> **“From an apple falling in Newton’s garden to spacecraft orbiting black holes — one law explains it all. Master this, and you’ve unlocked the cosmos.”**

---

From TestGuru · our mock-test platform

## You've read Newton's Law of Universal Gravitation.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=gravitation&tg_exam=jee-main&tg_page=%2Fphysics%2Fgravitation%2Funiversal-gravitation%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/gravitation/universal-gravitation/",this.page.identifier="/physics/gravitation/universal-gravitation/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="formulaGravitation" id="anim-formulaGravitation-1795396423518984144"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-formulaGravitation-1795396423518984144")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/gravitation/universal-gravitation/](https://jeenotes.in/physics/gravitation/universal-gravitation/) · raw HTML: `offline/physics/gravitation/universal-gravitation/index.html`_
