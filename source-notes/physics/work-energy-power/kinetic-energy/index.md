---
title: "Kinetic Energy"
source: "https://jeenotes.in/physics/work-energy-power/kinetic-energy/"
description: "Master kinetic energy for JEE: the KE-momentum relation, percentage-change shortcuts, rotational KE, and solved problems from foundation to JEE Advanced."
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 10"
html: "../../../../offline/physics/work-energy-power/kinetic-energy/index.html"
extracted: "2026-11-23"
---

> Master kinetic energy for JEE: the KE-momentum relation, percentage-change shortcuts, rotational KE, and solved problems from foundation to JEE Advanced.

## Prerequisites

Before studying this topic, review:

- [Work Done by Forces](../work-done/index.md) — definition of work
- [Kinematic Equations](../../kinematics/kinematic-equations/index.md) — used in the derivation below

---

## The Hook: The Bullet and the Truck

> **★ Key point · Connect: Real Life → Physics**
>
> Picture the train sequence in **Jawan (2023)**. Two very different objects are moving: a 20-gram bullet at 500 m/s, and a 5000-kg truck crawling at 1 m/s.
>
> **Which one carries more energy of motion?**
>
> Run the numbers: bullet KE $= \frac{1}{2}(0.02)(500)^2 = 2500$ J. Truck KE $= \frac{1}{2}(5000)(1)^2 = 2500$ J.
>
> **Identical!** Yet their momenta differ by a factor of 500. This mass-vs-speed tug of war — where speed enters *squared* — is exactly what JEE loves to test, and it’s the theme of this entire page.

**JEE Weightage:** Work, Energy and Power contributes 1-2 questions in JEE Main every year, and the KE-momentum relation is the single most repeated one-liner from this chapter.

---

## What is Kinetic Energy?

**Kinetic energy** is the energy possessed by a body due to its motion. It’s a scalar quantity that depends on both mass and speed.

### Definition

$$\boxed{KE = \frac{1}{2}mv^2}$$

where:

- $m$ = mass of the body (kg)
- $v$ = speed of the body (m/s)
- KE = kinetic energy (Joules)

**In simple terms:** kinetic energy measures how much work a moving body can do before it is brought to rest — or equivalently, how much work was done on it to bring it from rest to speed $v$.

> **◐ In simple terms · Key Properties**
>
> - Always **positive** (since $v^2 \geq 0$) — it can never be negative

> - **Scalar** quantity (no direction)

> - Zero when body is at rest

> - Depends on **reference frame** — a passenger has zero KE relative to the train, but plenty relative to the platform

### Interactive Demo: Visualize Energy Changes

See how kinetic energy changes with velocity and mass.

---

## Derivation from First Principles

### Method 1: Constant force + kinematics

Consider a body of mass $m$ accelerated from rest by a constant force $F$.

1. From [Newton’s second law](../../laws-of-motion/newtons-second-law/index.md): $F = ma$
2. Using $v^2 = u^2 + 2as$ (from [kinematic equations](../../kinematics/kinematic-equations/index.md)) with $u = 0$: $v^2 = 2as$, so $s = \frac{v^2}{2a}$
3. Work done: $W = Fs = ma \cdot \frac{v^2}{2a} = \frac{1}{2}mv^2$

This work done equals the kinetic energy acquired.

### Method 2: Calculus (works even for variable force)

$$W = \int F\,ds = \int m\frac{dv}{dt}\,ds = \int m\,\frac{ds}{dt}\,dv = \int_u^v mv\,dv = \frac{1}{2}mv^2 - \frac{1}{2}mu^2$$

The chain-rule trick $\frac{dv}{dt} = v\frac{dv}{ds}$ is worth memorizing — it appears throughout mechanics. This result, $W_{net} = \Delta KE$, is the [Work-Energy Theorem](../work-energy-theorem/index.md), covered in detail on the next page.

---

## Kinetic Energy and Momentum

There’s an important relationship between KE and [momentum](../../laws-of-motion/impulse-momentum/index.md) $p = mv$:

$$\boxed{KE = \frac{p^2}{2m} \qquad\Longleftrightarrow\qquad p = \sqrt{2m \cdot KE}}$$

### Proof

$$KE = \frac{1}{2}mv^2 = \frac{1}{2m}(mv)^2 = \frac{p^2}{2m}$$

### When to Use Which Form

| Given | Want | Use |
| --- | --- | --- |
| $m$, $v$ | KE | $\frac{1}{2}mv^2$ |
| $p$, $m$ | KE | $\frac{p^2}{2m}$ |
| KE, $m$ | $p$ | $\sqrt{2m \cdot KE}$ |

This relation is useful when:

- Momentum is conserved (as in [collisions](../collisions/index.md)) but velocity isn’t directly known
- Comparing energies of bodies with same momentum, or momenta of bodies with same energy

> **★ Important Comparison**
>
> For **same momentum**:
>
> $$KE \propto \frac{1}{m}$$
>
> *Lighter body has more kinetic energy* — “the light one flies”
>
> For **same kinetic energy**:
>
> $$p \propto \sqrt{m}$$
>
> *Heavier body has more momentum* — “the heavy one hits harder”

---

## Change in Kinetic Energy

When speed changes from $v_1$ to $v_2$:

$$\Delta KE = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2 = \frac{1}{2}m(v_2^2 - v_1^2)$$

Using difference of squares:

$$\Delta KE = \frac{1}{2}m(v_2 + v_1)(v_2 - v_1)$$

### Percentage Change in KE — The Exam Shortcut

If speed changes by fractional amount $x$ (i.e., new speed $= (1+x)v$):

$$\frac{\Delta KE}{KE} = (1+x)^2 - 1 = 2x + x^2$$

For small $x$:

$$\frac{\Delta KE}{KE} \approx 2x$$

**Ready-to-use table:**

| Speed change | KE change (exact) |
| --- | --- |
| +10% | +21% |
| +20% | +44% |
| +50% | +125% |
| doubled (+100%) | +300% (KE becomes 4×) |
| halved (−50%) | −75% (KE becomes 1/4) |

Because KE depends on $p^2$ too, the **same table works for momentum changes**: momentum +50% means KE $\times (1.5)^2 = 2.25$, i.e., +125%.

---

## Kinetic Energy in Different Scenarios

### 1. Rotational KE

For a rotating body with [moment of inertia](../../rotational-motion/moment-of-inertia/index.md) $I$ and angular velocity $\omega$:

$$KE_{rot} = \frac{1}{2}I\omega^2$$

Notice the perfect analogy: $m \to I$, $v \to \omega$.

### 2. Rolling Motion

For a [rolling body](../../rotational-motion/rolling-motion/index.md) (both translation + rotation):

$$KE_{total} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

### 3. Relativistic KE (For Reference)

At speeds close to light:

$$KE = (\gamma - 1)mc^2$$

where $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$

For $v \ll c$ this reduces to the familiar $\frac{1}{2}mv^2$ — the everyday formula is the low-speed limit of Einstein’s.

---

## Memory Tricks & Patterns

### The KE-p-m Triangle

Remember one formula, rearrange for the rest:

$$KE = \frac{p^2}{2m} \quad\Rightarrow\quad p = \sqrt{2m \cdot KE} \quad\Rightarrow\quad m = \frac{p^2}{2\,KE}$$

**Memory Trick:** “**Square the momentum, divide by twice the mass**” → $KE = p^2/2m$. Say it three times and it never leaves.

### The “Square Rule”

**“Speed enters squared — double the speed, quadruple the damage.”**

This is why highway crashes at 120 km/h are 4 times more destructive than at 60 km/h, not 2 times. One line, one mark, every year.

### Percentage Shortcut

**“Small change? Just double it.”** For a small percentage change $n\%$ in speed (or momentum), KE changes by approximately $2n\%$. For large changes, use $(1+x)^2 - 1$ exactly.

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Doubling Speed Doubles KE**
>
> If speed doubles, KE increases by factor of **4**, not 2!
>
> $$KE' = \frac{1}{2}m(2v)^2 = 4 \times \frac{1}{2}mv^2 = 4\,KE$$
>
> The percentage increase is 300%, not 100%. Trap options in JEE will include both.

> **⚠ Trap #2: Momentum +50% Means KE +50%**
>
> **WRONG.** KE $\propto p^2$, so:
>
> $$\frac{KE'}{KE} = (1.5)^2 = 2.25 \implies \Delta KE = +125\%$$
>
> Whenever momentum changes by a factor $k$, KE changes by factor $k^2$ (mass constant).

> **⚠ Trap #3: Negative Kinetic Energy**
>
> If a calculation gives negative KE, you’ve made an arithmetic error — KE is $\frac{1}{2}mv^2 \geq 0$ **always**, regardless of the direction of motion. Velocity can be negative; its square cannot.
>
> (Don’t confuse this with $\Delta KE$, which CAN be negative when a body slows down.)

> **⚠ Trap #4: Treating KE Like a Vector**
>
> Two identical cars move at speed $v$ in opposite directions. Total momentum = 0, but total KE $= 2 \times \frac{1}{2}mv^2$, NOT zero.
>
> KE is a scalar — contributions **add**, never cancel. This distinction decides many [collision](../collisions/index.md) problems.

---

## Practice Problems (Level-wise)

### Level 1: Foundation (NCERT Type)

> **↗ Connection · Problem 1**
>
> Find the kinetic energy of a 2 kg body moving at 10 m/s. What speed must a 8 kg body have to match this KE?
>
> **Solution:**
>
> $$KE = \frac{1}{2}(2)(10)^2 = 100 \text{ J}$$
>
> For the 8 kg body: $\frac{1}{2}(8)v^2 = 100 \Rightarrow v^2 = 25 \Rightarrow v =$ **5 m/s**
>
> (4× the mass needs only 1/2 the speed — because speed enters squared.)

> **↗ Connection · Problem 2**
>
> A bullet (20 g) moves at 500 m/s and a truck (5000 kg) moves at 1 m/s. Compare their kinetic energies and momenta.
>
> **Solution:**

> Bullet: $KE = \frac{1}{2}(0.02)(500)^2 = 2500$ J, $\quad p = 0.02 \times 500 = 10$ kg·m/s
>
> Truck: $KE = \frac{1}{2}(5000)(1)^2 = 2500$ J, $\quad p = 5000 \times 1 = 5000$ kg·m/s
>
> **Equal kinetic energies**, but the truck has **500 times** the momentum. Energy favors speed; momentum favors mass.

### Level 2: JEE Main Type

> **↗ Connection · Problem 3**
>
> A car (1000 kg) and a motorcycle (200 kg) have the same momentum. Find the ratio of their kinetic energies.
>
> **Solution:**

> For same momentum $p$, use $KE = \frac{p^2}{2m}$:
>
> $$\frac{KE_{car}}{KE_{motorcycle}} = \frac{p^2/2m_{car}}{p^2/2m_{motorcycle}} = \frac{m_{motorcycle}}{m_{car}} = \frac{200}{1000} = \boxed{1:5}$$
>
> The motorcycle has 5 times more kinetic energy — same momentum, lighter body, more energy.

> **↗ Connection · Problem 4**
>
> Two bodies A (3 kg) and B (4 kg) have the same kinetic energy. Find the ratio of their momenta.
>
> **Solution:**

> For same KE, $p = \sqrt{2m \cdot KE} \propto \sqrt{m}$:
>
> $$\frac{p_A}{p_B} = \sqrt{\frac{m_A}{m_B}} = \sqrt{\frac{3}{4}} = \boxed{\sqrt{3} : 2}$$

> **↗ Connection · Problem 5**
>
> (a) A body’s speed increases by 20%. (b) Another body’s momentum increases by 50%. Find the percentage change in KE in each case.
>
> **Solution:**

> **(a)** $KE \propto v^2$: $\quad \dfrac{\Delta KE}{KE} = (1.2)^2 - 1 = 0.44 = \boxed{+44\%}$
>
> **(b)** $KE \propto p^2$: $\quad \dfrac{\Delta KE}{KE} = (1.5)^2 - 1 = 1.25 = \boxed{+125\%}$

### Level 3: JEE Advanced Type

> **↗ Connection · Problem 6**
>
> A man running has half the kinetic energy of a boy of half his mass. When the man speeds up by 1 m/s, his KE becomes equal to the boy’s. Find their original speeds.
>
> **Solution:**

> Let man’s mass $= m$, speed $= v_m$; boy’s mass $= m/2$, speed $= v_b$.
>
> **Condition 1:** $\frac{1}{2}mv_m^2 = \frac{1}{2}\left[\frac{1}{2}\cdot\frac{m}{2}v_b^2\right] \Rightarrow v_m^2 = \frac{v_b^2}{4} \Rightarrow v_b = 2v_m$
>
> **Condition 2:** $\frac{1}{2}m(v_m + 1)^2 = \frac{1}{2}\cdot\frac{m}{2}v_b^2 = \frac{1}{2}\cdot\frac{m}{2}(2v_m)^2 = mv_m^2$
>
> $$(v_m + 1)^2 = 2v_m^2 \Rightarrow v_m + 1 = \sqrt{2}\,v_m \Rightarrow v_m = \frac{1}{\sqrt{2}-1} = \sqrt{2}+1$$
>
> **Man:** $v_m = \sqrt{2}+1 \approx$ **2.41 m/s**, **Boy:** $v_b = 2(\sqrt{2}+1) \approx$ **4.83 m/s**
>
> **Verify:** man’s KE $= \frac{1}{2}m(2.41)^2 = 2.91m$; boy’s KE $= \frac{1}{4}m(4.83)^2 = 5.83m \approx 2\times$. Checks out.

> **↗ Connection · Problem 7**
>
> A particle of mass $m$ starts from rest under a constant force $F$. Show that its kinetic energy is proportional to $t^2$ but grows linearly with distance.
>
> **Solution:**

> Velocity at time $t$: $v = \frac{F}{m}t$
>
> $$KE = \frac{1}{2}mv^2 = \frac{1}{2}m\left(\frac{Ft}{m}\right)^2 = \boxed{\frac{F^2t^2}{2m}} \propto t^2$$
>
> Versus distance, by the work-energy theorem: $KE = W = Fs \propto s$ (linear).
>
> **Insight:** KE-time graph is a parabola; KE-distance graph is a straight line. Graph-based questions on this appear regularly in JEE Main.

---

## Quick Revision Box

| Situation | Formula / Result |
| --- | --- |
| Kinetic energy | $KE = \frac{1}{2}mv^2$ (scalar, never negative) |
| KE from momentum | $KE = \frac{p^2}{2m}$ |
| Momentum from KE | $p = \sqrt{2m \cdot KE}$ |
| Same $p$, different $m$ | $KE \propto \frac{1}{m}$ (lighter wins) |
| Same KE, different $m$ | $p \propto \sqrt{m}$ (heavier wins) |
| Speed changed by factor $k$ | KE changed by factor $k^2$ |
| Small speed change $n\%$ | KE change $\approx 2n\%$ |
| Rotational KE | $\frac{1}{2}I\omega^2$ |
| Rolling body | $\frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$ |

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **KE = ½mv² — speed enters squared.** Double the speed, quadruple the energy. This single fact answers a surprising number of JEE questions.

> 2. **KE = p²/2m is the workhorse relation.** Same momentum → lighter body has more KE. Same KE → heavier body has more momentum.

> 3. **KE is a positive scalar** that depends on the reference frame; only $\Delta KE$ can be negative.

> 4. **Percentage shortcuts:** factor $k$ in speed or momentum → factor $k^2$ in KE; small change $n\%$ → about $2n\%$.

> 5. Work done by the net force equals the change in KE — that’s the [work-energy theorem](../work-energy-theorem/index.md), your next stop.
>
> **“Momentum is how hard it is to stop; kinetic energy is how much damage it does before it stops.”**

---

## Related Topics

- [Work Done by Forces](../work-done/index.md) — the source of every change in KE
- [Work-Energy Theorem](../work-energy-theorem/index.md) — $W_{net} = \Delta KE$, the bridge between force and energy
- [Potential Energy](../potential-energy/index.md) — the stored counterpart of kinetic energy
- [Collisions](../collisions/index.md) — where the KE-momentum contrast decides elastic vs inelastic
- [Impulse and Momentum](../../laws-of-motion/impulse-momentum/index.md) — the momentum side of the story

---

From TestGuru · our mock-test platform

## You've read Kinetic Energy.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=work-energy-power&tg_exam=jee-main&tg_page=%2Fphysics%2Fwork-energy-power%2Fkinetic-energy%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/work-energy-power/kinetic-energy/",this.page.identifier="/physics/work-energy-power/kinetic-energy/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="energyBar" id="anim-energyBar-1795396424546181252"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-energyBar-1795396424546181252")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/work-energy-power/kinetic-energy/](https://jeenotes.in/physics/work-energy-power/kinetic-energy/) · raw HTML: `offline/physics/work-energy-power/kinetic-energy/index.html`_
