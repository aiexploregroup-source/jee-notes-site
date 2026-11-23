---
title: "Frame of Reference"
source: "https://jeenotes.in/physics/kinematics/frame-of-reference/"
description: "Inertial and non-inertial frames, pseudo forces, and apparent weight — explained from first principles with solved JEE problems on lifts, pendulums, and wedges"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 10"
html: "../../../../offline/physics/kinematics/frame-of-reference/index.html"
extracted: "2026-11-23"
---

> Inertial and non-inertial frames, pseudo forces, and apparent weight — explained from first principles with solved JEE problems on lifts, pendulums, and wedges

## Prerequisites

This is the first topic in Kinematics, so you only need:

- [Units and Measurements](../../units-measurements/index.md) — SI units and basic vector ideas

---

## The Hook: Who Is Really Moving?

> **★ Key point · Connect: Real Life → Physics**
>
> Remember the train sequence in **Jawan** (2023)? Shah Rukh Khan stands calmly on top of a speeding train. To the passengers inside, he is perfectly still. To a farmer standing in a field, he is flying past at 100 km/h.
>
> **So is he at rest or in motion?**
>
> Both answers are correct — it depends on *who is watching*. That “who is watching” is what physicists call a **frame of reference**, and getting this idea right is the foundation of ALL of mechanics.

> **◐ In simple terms · JEE Weightage**
>
> Frame of reference is rarely asked as a standalone question, but it silently powers **every** mechanics problem you will ever solve. Pseudo-force questions (lifts, accelerating cars, wedges) show up in JEE Main almost every year, and choosing a clever frame can turn a 5-minute JEE Advanced problem into a 30-second one.

---

## The Core Concept: What is a Frame of Reference?

A **frame of reference** is a coordinate system that we use to describe the position and motion of objects. Think of it as your “point of view” for observing motion.

More precisely, a frame of reference consists of three things:

1. **An origin** — the observer’s location (where you measure from)
2. **Coordinate axes** — directions to measure along ($x$, $y$, $z$)
3. **A clock** — to record *when* the object is at each position

**In simple terms:** “Before you can say how something moves, you must first say who is watching and from where.”

> **◐ In simple terms · Simple Analogy**
>
> When you’re sitting in a moving train, you see a person standing on the platform moving backward. But someone on the platform sees you moving forward. Both observations are correct—in different frames of reference!

### Rest and Motion are Relative

There is **no absolute rest** in the universe. You are “at rest” in your chair right now — but the Earth is spinning, orbiting the Sun, and the Sun is orbiting the galactic center. Whether an object is at rest or in motion is meaningful **only after** you specify the frame of reference.

$$\boxed{\text{Position, velocity, and trajectory all depend on the chosen frame}}$$

What does NOT depend on the frame (as long as frames don’t accelerate relative to each other): **acceleration** and **time intervals** (in classical mechanics).

---

## Types of Reference Frames

### 1. Inertial Frame of Reference

An **inertial frame** is one in which Newton’s laws of motion hold true.

**Characteristics:**

- The frame is either at rest or moving with constant velocity
- No acceleration of the frame itself
- Objects at rest remain at rest (Newton’s 1st Law applies)

**Examples:**

- A room at rest on Earth (approximately)
- A train moving at constant speed on straight tracks
- A spaceship far from any gravitational influence

> **◐ In simple terms · Is Earth Really Inertial?**
>
> Strictly, no! Earth spins and orbits the Sun, so it accelerates. But these accelerations are tiny (centripetal acceleration due to spin is only about $0.034 \text{ m/s}^2$ at the equator), so for JEE problems, **the ground is treated as an inertial frame** unless stated otherwise.

### 2. Non-Inertial Frame of Reference

A **non-inertial frame** is an accelerating frame where Newton’s laws don’t directly apply.

**Characteristics:**

- The frame is accelerating (changing speed or direction)
- Pseudo forces appear to act on objects
- Newton’s laws require modification

**Examples:**

- A car taking a turn
- An elevator accelerating up or down
- A merry-go-round

---

## Pseudo Forces

In non-inertial frames, we introduce **pseudo forces** (also called fictitious forces) to apply Newton’s laws.

$$\boxed{\vec{F}_{pseudo} = -m\vec{a}_{frame}}$$

where $\vec{a}_{frame}$ is the acceleration of the non-inertial frame.

**Decode the formula:**

- Magnitude = (mass of the object) × (acceleration of the *frame*)
- Direction = **opposite** to the frame’s acceleration (that’s what the minus sign says)

**Everyday proof:** When a bus suddenly accelerates *forward*, you get thrown *backward*. When it brakes (accelerates backward), you lurch *forward*. The pseudo force always points opposite to the frame’s acceleration.

### Example: Elevator (The Classic JEE Laboratory)

When an elevator accelerates upward with acceleration $a$:

- You feel heavier
- Effective weight = $m(g + a)$

When the elevator accelerates downward:

- You feel lighter
- Effective weight = $m(g - a)$

**Where does this come from?** The “weight” you feel is really the normal force $N$ from the floor. In the ground frame, for a lift accelerating up:

$$N - mg = ma \implies N = m(g + a)$$

Here is the complete map of every lift situation JEE can throw at you:

| Lift State | Apparent Weight ($N$) | How You Feel |
| --- | --- | --- |
| At rest | $mg$ | Normal |
| Moving up or down at **constant velocity** | $mg$ | Normal |
| Accelerating **up** with $a$ | $m(g + a)$ | Heavier |
| Accelerating **down** with $a$ | $m(g - a)$ | Lighter |
| Free fall (cable snaps, $a = g$) | $0$ | Weightless |

> **★ Key Point**
>
> Pseudo forces are not real forces—they arise because we’re observing from an accelerating frame. They have no third-law reaction pair.

### Rotating Frames: The Centrifugal Force

A rotating frame is also non-inertial. An observer rotating with angular speed $\omega$ at radius $r$ must add an outward pseudo force:

$$F_{centrifugal} = m\omega^2 r \quad \text{(directed away from the center)}$$

This is why you feel “pushed outward” on a merry-go-round — there is no real outward force; it is your rotating frame playing tricks. You’ll use this heavily in [Circular Dynamics](../../laws-of-motion/circular-dynamics/index.md).

### Interactive Demo: Visualize Motion in Different Frames

Explore how motion appears different from various reference frames.

---

## Choosing the Right Frame

The choice of reference frame can simplify problem-solving:

| Situation | Best Frame to Use |
| --- | --- |
| Ground-based problems | Earth’s surface (inertial) |
| Problems inside vehicles | Vehicle frame + pseudo forces |
| Relative motion problems | One object as reference |
| Rotating systems | Rotating frame + centrifugal force |

> **★ Key point · Decision Tree**
>
> **Ask one question: “Is my observer accelerating?”**
>
> - **No** → Inertial frame → Apply Newton’s laws directly. Done.

> - **Yes** → Non-inertial frame → Add ONE pseudo force $-m\vec{a}_{frame}$ on every object, then apply Newton’s laws as usual.
>
> That’s the entire recipe. Nothing else changes.

---

## Memory Tricks & Patterns

### Mnemonic: When do pseudo forces appear?

**Memory Trick:** “**PAIN**” → **P**seudo forces **A**ppear **I**n **N**on-inertial frames.

No acceleration of the frame = no PAIN = no pseudo force.

### The Elevator Chant

**“Up adds, Down subtracts, Free fall — nothing at all.”**

- Accelerating up: $N = m(g + a)$
- Accelerating down: $N = m(g - a)$
- Free fall: $N = 0$

### Direction Rule

**“Pseudo pushes backward.”** Whatever direction the frame accelerates, the pseudo force on objects inside points the *opposite* way — exactly like your body lurching backward when a car accelerates forward.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Moving Frame ≠ Non-Inertial Frame**
>
> A train moving at a **constant** 200 km/h is still an **inertial** frame — no pseudo forces needed!
>
> **Rule:** Only *acceleration* of the frame makes it non-inertial. Velocity — however large — does not.

> **⚠ Trap #2: Direction of Motion vs Direction of Acceleration**
>
> **Problem:** A lift is moving *downward* but *slowing down*. Does the person feel lighter?
>
> **WRONG:** “Moving down, so lighter: $N = m(g-a)$.”
>
> **CORRECT:** Slowing down while moving down means acceleration points **upward**. So $N = m(g + a)$ — the person feels **heavier**!
>
> **Rule:** Apparent weight depends on the direction of **acceleration**, never on the direction of motion.

> **⚠ Trap #3: Treating Pseudo Force as a Real Force**
>
> Pseudo forces have **no reaction pair** (Newton’s third law does not apply to them) and **no physical agent** exerting them.
>
> Never add a pseudo force when working in the **ground frame** — that double-counts the effect and gives wrong answers. Pseudo force belongs ONLY inside the accelerating frame’s analysis.

> **⚠ Trap #4: Adding Pseudo Force in the Same Direction as the Frame's Acceleration**
>
> The pseudo force is $-m\vec{a}_{frame}$ — note the **minus sign**. If the car accelerates forward (east), the pseudo force on the passenger points backward (west).
>
> Getting this sign wrong flips your entire equation. Check it every single time.

---

## Practice Problems

### Level 1: Foundation

> **↗ Connection · Problem 1: The Heavy Feeling**
>
> A person in a lift feels their weight to be $1.2$ times their actual weight. If $g = 10 \text{ m/s}^2$, find the acceleration of the lift.
>
> **Solution:**
>
> - Apparent weight = $m(g + a) = 1.2mg$

> - Therefore: $g + a = 1.2g$

> - $a = 0.2g = 2 \text{ m/s}^2$ (upward)

### Level 2: JEE Main

> **↗ Connection · Problem 2: Pendulum in an Accelerating Car**
>
> A bob hangs from the ceiling of a car accelerating horizontally at $a = 10 \text{ m/s}^2$. Find the angle the string makes with the vertical. ($g = 10 \text{ m/s}^2$)
>
> **Solution:**

> Work in the car’s frame. Forces on the bob:
>
> - Weight $mg$ (down)

> - Pseudo force $ma$ (backward, opposite to car’s acceleration)

> - Tension $T$ along the string
>
> For equilibrium in the car frame, the string aligns with the resultant of gravity and pseudo force:
>
> $$\tan\theta = \frac{ma}{mg} = \frac{a}{g} = \frac{10}{10} = 1$$

$$\theta = \mathbf{45°}$$
>
> **Bonus:** Tension $T = m\sqrt{g^2 + a^2} = 10\sqrt{2}\,m$ — the bob behaves as if gravity has magnitude $g_{eff} = \sqrt{g^2 + a^2}$.

> **↗ Connection · Problem 3: Coin Dropped in a Lift**
>
> A lift accelerates upward at $2 \text{ m/s}^2$. A coin is released from rest (relative to the lift) at a height $1.5$ m above the floor. How long does it take to hit the floor? ($g = 10 \text{ m/s}^2$)
>
> **Solution:**

> In the lift’s frame, add a downward pseudo force $ma$, so effective gravity is:
>
> $$g_{eff} = g + a = 10 + 2 = 12 \text{ m/s}^2$$
>
> Using $h = \frac{1}{2}g_{eff}t^2$:
>
> $$1.5 = \frac{1}{2}(12)t^2 \implies t^2 = 0.25 \implies t = \mathbf{0.5 \text{ s}}$$
>
> Notice how the pseudo-force method reduces the problem to simple free fall with a modified $g$!

### Level 3: JEE Advanced

> **↗ Connection · Problem 4: Block on an Accelerating Wedge**
>
> A block rests on the smooth (frictionless) inclined surface of a wedge, inclination $\theta = 30°$. With what horizontal acceleration $a$ must the wedge move so that the block stays stationary relative to the wedge? ($g = 10 \text{ m/s}^2$)
>
> **Solution:**

> Work in the wedge’s frame. Forces on the block:
>
> - Weight $mg$ (down)

> - Normal force $N$ (perpendicular to incline)

> - Pseudo force $ma$ (horizontal, opposite to the wedge’s acceleration)
>
> For the block to be in equilibrium in this frame, resolve along the incline:
>
> $$mg\sin\theta = ma\cos\theta$$

$$\boxed{a = g\tan\theta}$$
>
> Plugging in: $a = 10 \tan 30° = \frac{10}{\sqrt{3}} \approx \mathbf{5.8 \text{ m/s}^2}$
>
> **Check the physics:** If $\theta \to 0$ (flat surface), $a \to 0$ — no acceleration needed. If $\theta \to 90°$ (vertical wall), $a \to \infty$ — makes sense. The formula passes the sanity test.

---

## Quick Revision Box

| Situation | Approach / Formula |
| --- | --- |
| Frame at rest or constant velocity | Newton’s laws directly (inertial) |
| Frame with acceleration $\vec{a}_{frame}$ | Add pseudo force $-m\vec{a}_{frame}$ on each object |
| Lift accelerating up | $N = m(g + a)$ |
| Lift accelerating down | $N = m(g - a)$ |
| Lift in free fall | $N = 0$ (weightlessness) |
| Pendulum in accelerating vehicle | $\tan\theta = a/g$, $\; g_{eff} = \sqrt{g^2 + a^2}$ |
| Block stationary on accelerating smooth wedge | $a = g\tan\theta$ |
| Rotating frame (angular speed $\omega$, radius $r$) | Centrifugal force $m\omega^2 r$ outward |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Motion is always relative** — specify the frame before describing any motion.

> 2. **Inertial frames** (rest or constant velocity): Newton’s laws work as-is. **Non-inertial frames** (accelerating): add exactly one pseudo force $-m\vec{a}_{frame}$ per object.

> 3. **Apparent weight follows acceleration, not velocity** — a lift slowing down while descending makes you feel *heavier*.

> 4. Pseudo forces are bookkeeping tools, not real forces — no reaction pair, and never used in the ground frame.
>
> **“Choose your frame wisely — the right observer makes a hard problem easy.”**

---

## Related Topics

### Within Kinematics

- [Motion in a Straight Line](../motion-1d/index.md) — describing motion once the frame is fixed
- [Relative Velocity](../relative-velocity/index.md) — comparing observations between two moving frames
- [Circular Motion](../circular-motion/index.md) — where rotating frames become essential

### Connected Chapters

- [Newton’s First Law](../../laws-of-motion/newtons-first-law/index.md) — the law that *defines* inertial frames
- [Newton’s Second Law](../../laws-of-motion/newtons-second-law/index.md) — applied with pseudo forces in accelerating frames
- [Circular Dynamics](../../laws-of-motion/circular-dynamics/index.md) — centripetal vs centrifugal, resolved properly

---

From TestGuru · our mock-test platform

## You've read Frame of Reference.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinematics&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2Fframe-of-reference%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinematics/frame-of-reference/",this.page.identifier="/physics/kinematics/frame-of-reference/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="velocityTime" id="anim-velocityTime-1795396423631513887"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-velocityTime-1795396423631513887")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinematics/frame-of-reference/](https://jeenotes.in/physics/kinematics/frame-of-reference/) · raw HTML: `offline/physics/kinematics/frame-of-reference/index.html`_
