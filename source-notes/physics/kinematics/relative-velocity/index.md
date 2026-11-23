---
title: "Relative Velocity"
source: "https://jeenotes.in/physics/kinematics/relative-velocity/"
description: "Understanding motion observed from different reference frames"
updated: "2026-08-01"
reading_time: "5 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 10"
html: "../../../../offline/physics/kinematics/relative-velocity/index.html"
extracted: "2026-11-23"
---

> Understanding motion observed from different reference frames

## Prerequisites

Before studying this topic, make sure you understand:

- [Frame of Reference](../frame-of-reference/index.md) - reference frames concept
- [Motion in a Plane](../motion-2d/index.md) - vector addition

## What is Relative Velocity?

**Relative velocity** is the velocity of one object as observed from another moving object.

> **★ Key point · Train Fight in Jawan!**
>
> Remember the epic train fight scene in *Jawan* (2023)? When SRK fights on top of a moving train, his velocity relative to the train is slow (he’s on it!), but relative to the ground, he’s zooming at 100+ km/h! If he jumps between train cars moving at the same speed, relative to them, it’s like a normal jump. That’s relative velocity in action!

> **◐ In simple terms · Key Concept**
>
> Motion is always relative. When you say “a car is moving at 60 km/h,” you mean relative to the ground. But what if you observe it from another moving car?

## The Formula

The velocity of object **A** relative to object **B**:

$$\boxed{\vec{v}_{AB} = \vec{v}_A - \vec{v}_B}$$

Similarly:

$$\vec{v}_{BA} = \vec{v}_B - \vec{v}_A = -\vec{v}_{AB}$$

### Important Properties

1. $\vec{v}_{AB} + \vec{v}_{BA} = 0$
2. $\vec{v}_{AB} = -\vec{v}_{BA}$ (equal magnitude, opposite direction)
3. $\vec{v}_{AC} = \vec{v}_{AB} + \vec{v}_{BC}$ (chain rule)

## Cases in 1D Motion

### Same Direction

If A and B move in the same direction:

$$v_{AB} = v_A - v_B$$

**Example:** Car A at 80 km/h, Car B at 60 km/h (same direction)

- A relative to B: 80 - 60 = 20 km/h (A appears to move forward)
- B relative to A: 60 - 80 = -20 km/h (B appears to move backward)

### Opposite Directions

If A and B move in opposite directions:

$$|v_{AB}| = v_A + v_B$$

**Example:** Two trains approaching each other at 60 km/h each

- Relative speed = 60 + 60 = 120 km/h

> **◐ In simple terms · Fast & Furious Head-On Chase**
>
> In *Fast X* (2023), when two cars race TOWARD each other, the relative speed is the SUM of their speeds! That’s why head-on collisions in movies look so dramatic — if both cars are at 100 km/h, they approach each other at 200 km/h. Physics makes the stunts even more intense!

> **★ Key point · Quick Rule**
>
> - Same direction: **Subtract** speeds

> - Opposite directions: **Add** speeds

## Cases in 2D Motion

For 2D motion, use vector subtraction:

$$\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$$

**Magnitude:** $|\vec{v}_{AB}| = \sqrt{v_A^2 + v_B^2 - 2v_Av_B\cos\theta}$

where $\theta$ is the angle between $\vec{v}_A$ and $\vec{v}_B$.

**Special cases:**

- $\theta = 0°$ (same direction): $|v_{AB}| = |v_A - v_B|$
- $\theta = 180°$ (opposite): $|v_{AB}| = v_A + v_B$
- $\theta = 90°$ (perpendicular): $|v_{AB}| = \sqrt{v_A^2 + v_B^2}$

### Interactive Demo: Visualize Vector Addition

See how relative velocity is calculated using vector subtraction.

## Application 1: Rain and Man Problem

> **★ Key point · Bollywood Rain Scenes!**
>
> Every Bollywood romantic rain song — from *Kabhi Khushi Kabhie Gham* to *Jawan* — shows heroes walking in rain. Here’s the physics: when you walk, rain appears to come from the front! The faster you run, the more you need to tilt your umbrella forward. That’s $\vec{v}_{rain,you} = \vec{v}_{rain} - \vec{v}_{you}$!

### Problem Setup

A man walks with velocity $\vec{v}_m$ while rain falls with velocity $\vec{v}_r$. What angle does the rain appear to fall?

### Solution Approach

Velocity of rain relative to man:

$$\vec{v}_{rm} = \vec{v}_r - \vec{v}_m$$

The rain appears to come from the direction of $\vec{v}_{rm}$.

### Common Scenarios

**Case 1: Rain falling vertically, man walking horizontally**

If rain falls at speed $v_r$ (vertical) and man walks at $v_m$ (horizontal):

$$|\vec{v}_{rm}| = \sqrt{v_r^2 + v_m^2}$$

Angle with vertical: $\tan\alpha = \frac{v_m}{v_r}$

**To stay dry:** The man should hold his umbrella at angle $\alpha$ from vertical, tilted forward.

**Case 2: At what speed should man walk so rain appears vertical?**

Man should walk with velocity equal to the horizontal component of rain velocity.

## Application 2: River Crossing

A boat crosses a river of width $d$ with current velocity $\vec{v}_r$.

### Problem Types

**Type 1: Shortest Time**

Point boat directly across (perpendicular to bank).

- Time: $t = \frac{d}{v_b}$
- Drift: $x = v_r \times t = \frac{v_r \cdot d}{v_b}$

**Type 2: Shortest Path (No Drift)**

Point boat upstream at angle $\theta$ such that:

$$v_b\sin\theta = v_r$$

$$\sin\theta = \frac{v_r}{v_b}$$

This requires $v_b > v_r$ (boat faster than current).

- Resultant velocity: $v_{res} = \sqrt{v_b^2 - v_r^2}$
- Time: $t = \frac{d}{\sqrt{v_b^2 - v_r^2}}$

> **⚠ Important Condition**
>
> For shortest path crossing, the boat speed must be **greater than** river speed ($v_b > v_r$). Otherwise, the boat cannot go straight across.

### Summary Table

| Objective | Boat Direction | Time | Drift |
| --- | --- | --- | --- |
| Shortest time | Perpendicular | $\frac{d}{v_b}$ | $\frac{v_r d}{v_b}$ |
| Shortest path | Upstream at $\sin^{-1}(\frac{v_r}{v_b})$ | $\frac{d}{\sqrt{v_b^2 - v_r^2}}$ | 0 |

## Application 3: Aircraft in Wind

For an aircraft with airspeed $\vec{v}_a$ flying in wind $\vec{v}_w$:

**Ground velocity:** $\vec{v}_g = \vec{v}_a + \vec{v}_w$

### To reach destination directly

The pilot must head at an angle such that the resultant velocity points toward the destination.

## Practice Problems

> **↗ Connection · Problem 1**
>
> Two cars A and B move with velocities 20 m/s east and 15 m/s north respectively. Find velocity of A relative to B.
>
> **Solution:**

> $\vec{v}_A = 20\hat{i}$ m/s, $\vec{v}_B = 15\hat{j}$ m/s
>
> $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B = 20\hat{i} - 15\hat{j}$ m/s
>
> $|\vec{v}_{AB}| = \sqrt{20^2 + 15^2} = \sqrt{625} = $ **25 m/s**
>
> Direction: $\tan\theta = \frac{15}{20} = 0.75$, $\theta = 36.87°$ south of east

> **↗ Connection · Problem 2**
>
> Rain falls vertically at 10 m/s. A man walks at 6 m/s. At what angle should he hold his umbrella?
>
> **Solution:**

> $\tan\alpha = \frac{v_m}{v_r} = \frac{6}{10} = 0.6$
>
> $\alpha = \tan^{-1}(0.6) ≈ $ **31° from vertical** (tilted forward)

> **↗ Connection · Problem 3**
>
> A river is 400 m wide with current 3 m/s. A boat has speed 5 m/s in still water. Find:

> (a) Time for shortest path

> (b) Time for shortest time
>
> **Solution:**

> (a) $v_{res} = \sqrt{5^2 - 3^2} = 4$ m/s

> $t = \frac{400}{4} = $ **100 s**
>
> (b) $t = \frac{400}{5} = $ **80 s** (with drift = $\frac{3 \times 400}{5} = 240$ m)

---

From TestGuru · our mock-test platform

## You've read Relative Velocity.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Frelative-velocity%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/relative-velocity/",this.page.identifier="/physics/kinematics/relative-velocity/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="vectorAddition" id="anim-vectorAddition-1795396423724016323"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-vectorAddition-1795396423724016323")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/relative-velocity/](https://jeenotes.in/physics/kinematics/relative-velocity/) · raw HTML: `offline/physics/kinematics/relative-velocity/index.html`_
