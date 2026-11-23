---
title: "Power"
source: "https://jeenotes.in/physics/work-energy-power/power/"
description: "Understand power as the rate of doing work, and learn instantaneous and average power calculations."
updated: "2026-08-01"
reading_time: "4 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 10"
html: "../../../../offline/physics/work-energy-power/power/index.html"
extracted: "2026-11-23"
---

> Understand power as the rate of doing work, and learn instantaneous and average power calculations.

## Prerequisites

Before studying this topic, review:

- [Work Done by Forces](../work-done/index.md)
- [Kinetic Energy](../kinetic-energy/index.md)

---

## What is Power?

**Power** is the rate at which work is done or energy is transferred. While work tells us *how much* energy is transferred, power tells us *how fast* it happens.

### Definition

$$\boxed{P = \frac{dW}{dt}}$$

Power = Rate of work done = Rate of energy transfer

---

## Average Power

Total work divided by total time:

$$\boxed{P_{avg} = \frac{W_{total}}{t_{total}} = \frac{\Delta E}{\Delta t}}$$

### Example

If a machine does 1000 J of work in 5 seconds:

$$P_{avg} = \frac{1000}{5} = 200 \text{ W}$$

---

## Instantaneous Power

### Using Force and Velocity

$$\boxed{P = \vec{F} \cdot \vec{v} = Fv\cos\theta}$$

where $\theta$ is the angle between force and velocity.

### Derivation

$$P = \frac{dW}{dt} = \frac{\vec{F} \cdot d\vec{r}}{dt} = \vec{F} \cdot \frac{d\vec{r}}{dt} = \vec{F} \cdot \vec{v}$$

> **★ Key point · Physical Meaning**
>
> Instantaneous power equals the component of force along the velocity times the speed.

### Interactive Demo: Visualize Power and Work

Explore the relationship between power, force, and velocity.

---

## Units of Power

### SI Unit: Watt (W)

$$1 \text{ W} = 1 \text{ J/s} = 1 \text{ kg}\cdot\text{m}^2/\text{s}^3$$

### Common Units

| Unit | Conversion |
| --- | --- |
| 1 kilowatt (kW) | 1000 W |
| 1 megawatt (MW) | $10^6$ W |
| 1 horsepower (hp) | **746 W** |
| 1 kWh (energy) | $3.6 \times 10^6$ J |

> **◐ In simple terms · Remember**
>
> **kWh is a unit of energy**, not power!
>
> $$1 \text{ kWh} = 1000 \text{ W} \times 3600 \text{ s} = 3.6 \times 10^6 \text{ J}$$

---

## Power in Common Scenarios

### 1. Lifting at Constant Velocity

Force = Weight = $mg$ (upward)
Velocity = $v$ (upward)

$$P = mgv$$

### 2. Vehicle Moving on Level Road

Against resistive force $f$ (like [friction](../../laws-of-motion/friction/index.md)) at constant velocity:

$$P = fv$$

### 3. Vehicle Moving Up an Incline

Against gravity component + friction:

$$P = (mg\sin\theta + f)v$$

### 4. Maximum Velocity of a Vehicle

At maximum speed, all engine power goes to overcome resistance:

$$P = f_{max} \cdot v_{max}$$

If resistance $f = kv^2$:

$$P = kv_{max}^3$$

$$v_{max} = \left(\frac{P}{k}\right)^{1/3}$$

---

## Motion Under Constant Power

When power $P$ is constant (compare with [uniform acceleration](../../kinematics/motion-1d/index.md) where force is constant):

$$P = Fv = mav = m\frac{dv}{dt}v$$

$$P\,dt = mv\,dv$$

Integrating from $v_0$ to $v$:

$$Pt = \frac{1}{2}mv^2 - \frac{1}{2}mv_0^2$$

Starting from rest ($v_0 = 0$):

$$\boxed{v = \sqrt{\frac{2Pt}{m}}}$$

So velocity increases as $\sqrt{t}$ under constant power.

### Position under Constant Power

$$v = \frac{dx}{dt} = \sqrt{\frac{2Pt}{m}}$$

$$x = \int_0^t \sqrt{\frac{2P}{m}}\sqrt{t}\,dt = \sqrt{\frac{2P}{m}} \cdot \frac{2}{3}t^{3/2}$$

$$\boxed{x = \frac{2}{3}\sqrt{\frac{2P}{m}}t^{3/2}}$$

Position varies as $t^{3/2}$.

---

## Worked Examples

### Example 1: Power of a Pump

> **↗ Connection · Problem**
>
> A pump lifts 100 kg of water to a height of 20 m in 50 seconds. Find the power of the pump. (g = 10 m/s²)

**Solution:**
Work done:

$$W = mgh = 100 \times 10 \times 20 = 20000 \text{ J}$$

Power:

$$P = \frac{W}{t} = \frac{20000}{50} = \boxed{400 \text{ W}}$$

### Example 2: Vehicle Power

> **↗ Connection · Problem**
>
> A car engine develops 75 kW power. If the resistive force is 1500 N, find the maximum speed.

**Solution:**
At maximum speed:

$$P = f \cdot v_{max}$$

$$75000 = 1500 \times v_{max}$$

$$v_{max} = \frac{75000}{1500} = \boxed{50 \text{ m/s} = 180 \text{ km/h}}$$

### Example 3: Constant Power Motion

> **↗ Connection · Problem**
>
> A 2 kg object starts from rest under constant power of 16 W. Find velocity and distance after 4 seconds.

**Solution:**

**Velocity:**

$$v = \sqrt{\frac{2Pt}{m}} = \sqrt{\frac{2 \times 16 \times 4}{2}} = \sqrt{64} = \boxed{8 \text{ m/s}}$$

**Distance:**

$$x = \frac{2}{3}\sqrt{\frac{2P}{m}}t^{3/2} = \frac{2}{3}\sqrt{\frac{32}{2}}(4)^{3/2}$$

$$x = \frac{2}{3}\sqrt{16} \times 8 = \frac{2}{3} \times 4 \times 8 = \boxed{\frac{64}{3} \approx 21.3 \text{ m}}$$

### Example 4: Horsepower Conversion

> **↗ Connection · Problem**
>
> A car engine has 100 hp. What is its power in kW?

**Solution:**

$$P = 100 \times 746 = 74600 \text{ W} = \boxed{74.6 \text{ kW}}$$

---

## Power vs Time Graph

### Area Under Power-Time Graph

$$\text{Area} = \int P\,dt = W = \text{Work done}$$

### If Power is Constant

Work = $P \times t$ = Area of rectangle

### If Power Varies Linearly

Work = Area of trapezoid or triangle

---

## Practice Problems

1. A crane lifts a 500 kg load at 2 m/s. Find the power developed.
2. A car of mass 1000 kg accelerates from rest to 20 m/s in 10 s. Find the average power delivered by the engine.
3. A motor operates at 5 kW for 2 hours. Calculate the energy consumed in kWh and Joules.
4. Under constant power 18 W, a 1 kg body starts from rest. Find its speed after traveling 12 m.

---

From TestGuru · our mock-test platform

## You've read Power.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=work-energy-power&tg_exam=jee-main&tg_page=%2Fphysics%2Fwork-energy-power%2Fpower%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/work-energy-power/power/",this.page.identifier="/physics/work-energy-power/power/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="workDone" id="anim-workDone-1795396424565555845"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-workDone-1795396424565555845")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/work-energy-power/power/](https://jeenotes.in/physics/work-energy-power/power/) · raw HTML: `offline/physics/work-energy-power/power/index.html`_
