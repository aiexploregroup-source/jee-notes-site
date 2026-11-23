---
title: "Circular Motion"
source: "https://jeenotes.in/physics/kinematics/circular-motion/"
description: "Understanding uniform circular motion and centripetal acceleration"
updated: "2026-11-17"
reading_time: "5 min read"
breadcrumb: "Physics"
position: "/ Topic 8 of 10"
html: "../../../../offline/physics/kinematics/circular-motion/index.html"
extracted: "2026-11-23"
---

> Understanding uniform circular motion and centripetal acceleration

## Prerequisites

Before studying this topic, make sure you understand:

- [Motion in a Plane](../motion-2d/index.md) - 2D motion concepts
- [Kinematic Equations](../kinematic-equations/index.md) - for understanding acceleration

## What is Circular Motion?

**Circular motion** occurs when an object moves along a circular path. Even if the speed is constant, the velocity is constantly changing direction.

> **★ Key point · Thor's Hammer Spin!**
>
> Remember how **Thor** spins Mjolnir in circles before throwing it in the *Thor* movies? That’s circular motion! Even though the hammer moves at constant speed, its velocity (direction) keeps changing — pointing tangent to the circle. The centripetal force? That’s the tension in his arm pulling the hammer toward the center!

> **★ Key point · Key Insight**
>
> In circular motion, even at constant speed, the object is **accelerating** because velocity (a vector) is changing direction!

## Interactive Demo

See how velocity (green, tangent) and centripetal acceleration (orange, towards center) behave:

## Angular Quantities

### Angular Displacement ($\theta$)

The angle swept by the radius vector.

- **Unit:** radian (rad)
- **1 revolution = 2π rad = 360°**

### Angular Velocity ($\omega$)

Rate of change of angular displacement.

$$\omega = \frac{d\theta}{dt}$$

- **Unit:** rad/s
- **Direction:** Along axis of rotation (right-hand rule)

### Angular Acceleration ($\alpha$)

Rate of change of angular velocity.

$$\alpha = \frac{d\omega}{dt}$$

- **Unit:** rad/s²

## Relation Between Linear and Angular Quantities

For a particle at distance $r$ from the center:

| Linear | Angular | Relation |
| --- | --- | --- |
| Arc length $s$ | $\theta$ | $s = r\theta$ |
| Linear velocity $v$ | $\omega$ | $v = r\omega$ |
| Tangential acceleration $a_t$ | $\alpha$ | $a_t = r\alpha$ |

> **★ Key point · Easy Conversion**
>
> To convert angular to linear: **multiply by radius $r$**

## Uniform Circular Motion (UCM)

In **uniform circular motion**:

- Speed is **constant**
- Angular velocity is **constant**
- Acceleration exists but is directed toward center

### Key Formulas

$$\boxed{v = r\omega}$$

$$\boxed{T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}}$$

$$\boxed{f = \frac{1}{T} = \frac{\omega}{2\pi}}$$

where:

- $T$ = Time period (time for one revolution)
- $f$ = Frequency (revolutions per second)

## Centripetal Acceleration

The acceleration directed toward the center of the circle:

$$\boxed{a_c = \frac{v^2}{r} = \omega^2 r = v\omega}$$

### Direction

Always **toward the center** (hence “centripetal” = center-seeking)

### Why It Exists

Even though speed is constant, velocity direction changes. This change in velocity direction requires acceleration toward the center.

> **◐ In simple terms · Velocity and Acceleration Relationship**
>
> In UCM:
>
> - Velocity is **tangent** to the circle

> - Acceleration is **perpendicular** to velocity (toward center)

> - This is why speed doesn’t change!

## Centripetal vs Centrifugal

| Centripetal | Centrifugal |
| --- | --- |
| Real force | Pseudo force |
| Exists in inertial frame | Appears in rotating frame |
| Toward center | Away from center |
| Causes circular motion | Appears to oppose centripetal |

> **★ Key point · Interstellar Spinning Space Station**
>
> In *Interstellar* (2014), the Endurance spacecraft spins to create artificial gravity. From **inside**, astronauts feel pushed outward (centrifugal force) — but that’s a pseudo force! From **outside**, it’s the spacecraft walls pushing them inward (centripetal force) that keeps them in circular motion. Christopher Nolan got the physics right!

> **⚠ Trap · Common Misconception**
>
> Centrifugal force is NOT a real force! It’s a pseudo force that appears when you’re in the rotating reference frame (like inside a merry-go-round).

## Non-Uniform Circular Motion

When speed changes while moving in a circle:

### Two Components of Acceleration

1. **Centripetal acceleration** ($a_c$): Toward center, changes direction

   $$a_c = \frac{v^2}{r}$$
2. **Tangential acceleration** ($a_t$): Along tangent, changes speed

   $$a_t = \frac{dv}{dt} = r\alpha$$

### Total Acceleration

$$\vec{a} = \vec{a}_c + \vec{a}_t$$

$$|a| = \sqrt{a_c^2 + a_t^2}$$

Direction makes angle $\phi$ with radius:

$$\tan\phi = \frac{a_t}{a_c}$$

## Angular Kinematic Equations

For constant angular acceleration ($\alpha$ = constant):

| Linear Form | Angular Form |
| --- | --- |
| $v = u + at$ | $\omega = \omega_0 + \alpha t$ |
| $s = ut + \frac{1}{2}at^2$ | $\theta = \omega_0 t + \frac{1}{2}\alpha t^2$ |
| $v^2 = u^2 + 2as$ | $\omega^2 = \omega_0^2 + 2\alpha\theta$ |

## Summary Table

| Quantity | Symbol | Formula | Unit |
| --- | --- | --- | --- |
| Angular displacement | $\theta$ | — | rad |
| Angular velocity | $\omega$ | $\frac{d\theta}{dt}$ | rad/s |
| Angular acceleration | $\alpha$ | $\frac{d\omega}{dt}$ | rad/s² |
| Linear velocity | $v$ | $r\omega$ | m/s |
| Centripetal acceleration | $a_c$ | $\frac{v^2}{r} = \omega^2 r$ | m/s² |
| Time period | $T$ | $\frac{2\pi}{\omega}$ | s |
| Frequency | $f$ | $\frac{1}{T}$ | Hz |

## Practice Problems

> **↗ Connection · Problem 1**
>
> A particle moves in a circle of radius 2 m with constant speed 4 m/s. Find centripetal acceleration and time period.
>
> **Solution:**

> $a_c = \frac{v^2}{r} = \frac{16}{2} = $ **8 m/s²**
>
> $T = \frac{2\pi r}{v} = \frac{2\pi \times 2}{4} = $ **π s ≈ 3.14 s**

> **↗ Connection · Problem 2**
>
> A wheel starts from rest and accelerates at 2 rad/s². Find angular velocity and angle turned after 5 seconds.
>
> **Solution:**

> $\omega = \omega_0 + \alpha t = 0 + 2 \times 5 = $ **10 rad/s**
>
> $\theta = \omega_0 t + \frac{1}{2}\alpha t^2 = 0 + \frac{1}{2} \times 2 \times 25 = $ **25 rad**

> **↗ Connection · Problem 3**
>
> A car moves on a circular track of radius 100 m. At a certain instant, its speed is 20 m/s and is increasing at 3 m/s². Find total acceleration.
>
> **Solution:**

> $a_c = \frac{v^2}{r} = \frac{400}{100} = 4$ m/s²
>
> $a_t = 3$ m/s²
>
> $a = \sqrt{a_c^2 + a_t^2} = \sqrt{16 + 9} = $ **5 m/s²**

---

## Further Study

Now that you’ve mastered Kinematics, move on to:

- [Laws of Motion](../../laws-of-motion/index.md) - Forces that cause motion
- [Work, Energy and Power](../../work-energy-power/index.md) - Energy in motion
- [Rotational Motion](../../rotational-motion/index.md) - Extended bodies in rotation

From TestGuru · our mock-test platform

## You've read Circular Motion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fcircular-motion%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/circular-motion/",this.page.identifier="/physics/kinematics/circular-motion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="circularMotion" id="anim-circularMotion-1795396423642700842"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-circularMotion-1795396423642700842")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/circular-motion/](https://jeenotes.in/physics/kinematics/circular-motion/) · raw HTML: `offline/physics/kinematics/circular-motion/index.html`_
