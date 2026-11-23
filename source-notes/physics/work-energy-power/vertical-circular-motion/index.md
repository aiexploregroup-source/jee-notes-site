---
title: "Vertical Circular Motion"
source: "https://jeenotes.in/physics/work-energy-power/vertical-circular-motion/"
description: "Master minimum speed requirements and tension calculations for motion in a vertical circle."
updated: "2026-08-01"
reading_time: "4 min read"
breadcrumb: "Physics"
position: "/ Topic 6 of 10"
html: "../../../../offline/physics/work-energy-power/vertical-circular-motion/index.html"
extracted: "2026-11-23"
---

> Master minimum speed requirements and tension calculations for motion in a vertical circle.

## Prerequisites

Before studying this topic, review:

- [Circular Motion](../../kinematics/circular-motion/index.md) - Centripetal force
- [Conservation of Energy](../conservation-energy/index.md)

---

## Introduction

Vertical circular motion is a classic problem combining [energy conservation](../conservation-energy/index.md) with [circular motion](../../kinematics/circular-motion/index.md) dynamics. The key challenge: the speed keeps changing because gravity acts differently at various points of the circle.

---

## Types of Vertical Circular Motion

### 1. Object on a String (or Rod)

**String/Rope:** Can only pull, not push. Goes slack if tension becomes zero.
**Rod:** Can push or pull. Motion continues even at low speeds.

### 2. Object on a Track

Inner track (like a roller coaster loop) — Normal force acts inward
Outer track (ball in a bowl) — Normal force acts outward

> **◐ In simple terms · Critical Difference**
>
> For **strings**, minimum speed is required to maintain tension.

> For **rigid rods**, the object can complete the circle at any speed (even zero at top)!

---

## Analysis at Key Points

For an object of mass $m$ on a string of length $r$:

### At the Lowest Point (Bottom)

Forces: Tension $T$ upward, Weight $mg$ downward

$$T - mg = \frac{mv_{bottom}^2}{r}$$

$$\boxed{T_{bottom} = mg + \frac{mv_{bottom}^2}{r}}$$

Tension is **maximum** here.

### At the Highest Point (Top)

Forces: Tension $T$ downward, Weight $mg$ downward (both toward center)

$$T + mg = \frac{mv_{top}^2}{r}$$

$$\boxed{T_{top} = \frac{mv_{top}^2}{r} - mg}$$

Tension is **minimum** here.

### At Any Angle θ from Vertical

$$T - mg\cos\theta = \frac{mv^2}{r}$$

$$T = mg\cos\theta + \frac{mv^2}{r}$$

---

## Minimum Speed Conditions

For the string to remain taut, tension must be non-negative.

### Minimum Speed at Top

Setting $T_{top} = 0$:

$$0 = \frac{mv_{top}^2}{r} - mg$$

$$\boxed{v_{top}^{min} = \sqrt{gr}}$$

### Minimum Speed at Bottom

Using energy conservation from bottom to top:

$$\frac{1}{2}mv_{bottom}^2 = \frac{1}{2}mv_{top}^2 + mg(2r)$$

Substituting $v_{top} = \sqrt{gr}$:

$$\frac{1}{2}v_{bottom}^2 = \frac{1}{2}(gr) + 2gr = \frac{5gr}{2}$$

$$\boxed{v_{bottom}^{min} = \sqrt{5gr}}$$

### Interactive Demo: Visualize Vertical Circular Motion

See how speed and tension vary at different points in the vertical circle.

> **★ Key point · Critical Speeds**
>
> | Point | Minimum Speed | Condition |

> | --- | --- | --- |

> | Top | $\sqrt{gr}$ | Tension just becomes zero |

> | Bottom | $\sqrt{5gr}$ | Required to reach top |

---

## Tension at Critical Speed

When launched from bottom at exactly $v = \sqrt{5gr}$:

### At Bottom

$$T_{bottom} = mg + \frac{m(5gr)}{r} = mg + 5mg = \boxed{6mg}$$

### At Top

$$T_{top} = \frac{m(gr)}{r} - mg = mg - mg = \boxed{0}$$

### Tension Difference

$$T_{bottom} - T_{top} = 6mg$$

This is always true regardless of the actual speed (as long as the circle is completed):

$$\boxed{T_{bottom} - T_{top} = 6mg}$$

---

## Speed at Any Point

Using energy conservation from bottom:

$$\frac{1}{2}mv_{bottom}^2 = \frac{1}{2}mv^2 + mgh$$

where $h = r(1 - \cos\theta)$ (height above bottom)

$$v^2 = v_{bottom}^2 - 2gr(1 - \cos\theta)$$

---

## What Happens Below Critical Speed?

If $v_{bottom} < \sqrt{5gr}$:

### Case 1: $v_{bottom} < \sqrt{2gr}$

Object oscillates back and forth (doesn’t reach horizontal level) - similar to [SHM](../../oscillations-waves/simple-harmonic-motion/index.md) for small angles.

### Case 2: $\sqrt{2gr} < v_{bottom} < \sqrt{5gr}$

Object rises past horizontal but string goes slack before reaching top. Object becomes a [projectile](../../kinematics/projectile-motion/index.md).

The angle at which string goes slack:

$$\cos\theta = \frac{v_{bottom}^2 - 2gr}{3gr}$$

---

## Comparison: String vs Rod

| Aspect | String | Rigid Rod |
| --- | --- | --- |
| Can push? | No | Yes |
| $v_{top}^{min}$ | $\sqrt{gr}$ | 0 |
| $v_{bottom}^{min}$ | $\sqrt{5gr}$ | $\sqrt{4gr} = 2\sqrt{gr}$ |
| Goes slack? | Yes | No |

For a **rigid rod**, the object can be stationary at the top (rod pushes down):

$$v_{bottom}^{min} = \sqrt{2g(2r)} = 2\sqrt{gr}$$

---

## Worked Examples

### Example 1: Critical Speed

> **↗ Connection · Problem**
>
> A ball on a 1 m string makes vertical circles. Find the minimum speed at bottom for complete rotation. (g = 10 m/s²)

**Solution:**

$$v_{bottom}^{min} = \sqrt{5gr} = \sqrt{5 \times 10 \times 1} = \sqrt{50} = \boxed{5\sqrt{2} \approx 7.07 \text{ m/s}}$$

### Example 2: Tension Calculation

> **↗ Connection · Problem**
>
> A 2 kg ball on a 0.5 m string has speed 8 m/s at the bottom. Find tension at bottom and top.

**Solution:**

**At bottom:**

$$T_{bottom} = mg + \frac{mv^2}{r} = 2(10) + \frac{2(64)}{0.5} = 20 + 256 = \boxed{276 \text{ N}}$$

**Speed at top** (energy conservation):

$$v_{top}^2 = v_{bottom}^2 - 4gr = 64 - 4(10)(0.5) = 64 - 20 = 44$$

**At top:**

$$T_{top} = \frac{mv_{top}^2}{r} - mg = \frac{2(44)}{0.5} - 20 = 176 - 20 = \boxed{156 \text{ N}}$$

**Verify:** $T_{bottom} - T_{top} = 276 - 156 = 120 = 6mg$ (correct!)

### Example 3: Incomplete Circle

> **↗ Connection · Problem**
>
> A ball on a 2 m string is given 6 m/s at bottom. At what angle does the string go slack?

**Solution:**

Check: $\sqrt{2gr} = \sqrt{40} \approx 6.32$ m/s

Since $6 < 6.32$, ball won’t reach horizontal level. Let’s find where:

At height $h$, $v^2 = 36 - 2(10)h = 36 - 20h$

String goes slack when $T = 0$:

$$mg\cos\theta = \frac{mv^2}{r}$$

With $h = r(1-\cos\theta)$:

$$g\cos\theta = \frac{36 - 20(2)(1-\cos\theta)}{2}$$

$$20\cos\theta = 36 - 40 + 40\cos\theta$$

$$-20\cos\theta = -4$$

$$\cos\theta = 0.2$$

$$\theta = \boxed{78.5°}$$

---

## Practice Problems

1. A stone on a 0.8 m string is whirled in a vertical circle. Find the minimum speed at the highest point.
2. A 0.5 kg ball on a 1 m string moves with 10 m/s at the lowest point. Find tensions at bottom, top, and horizontal positions.
3. What minimum speed must a car have at the top of a circular bridge (radius 20 m) to maintain contact?

---

From TestGuru · our mock-test platform

## You've read Vertical Circular Motion.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=work-energy-power&tg_exam=jee-main&tg_page=%2Fphysics%2Fwork-energy-power%2Fvertical-circular-motion%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/work-energy-power/vertical-circular-motion/",this.page.identifier="/physics/work-energy-power/vertical-circular-motion/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="circularMotion" id="anim-circularMotion-1795396424562643004"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-circularMotion-1795396424562643004")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/work-energy-power/vertical-circular-motion/](https://jeenotes.in/physics/work-energy-power/vertical-circular-motion/) · raw HTML: `offline/physics/work-energy-power/vertical-circular-motion/index.html`_
