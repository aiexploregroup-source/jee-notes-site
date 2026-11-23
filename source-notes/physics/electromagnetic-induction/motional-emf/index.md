---
title: "Motional EMF - EMF in Moving Conductors"
source: "https://jeenotes.in/physics/electromagnetic-induction/motional-emf/"
description: "Master motional EMF and understand how moving conductors generate electricity - the principle behind generators, speedometers, and electromagnetic railguns"
updated: "2026-10-18"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 3 of 10"
html: "../../../../offline/physics/electromagnetic-induction/motional-emf/index.html"
extracted: "2026-11-23"
---

> Master motional EMF and understand how moving conductors generate electricity - the principle behind generators, speedometers, and electromagnetic railguns

## Movie Hook: The Electromagnetic Railgun

In sci-fi movies and military tech demonstrations, **railguns** launch projectiles at hypersonic speeds using electromagnetic forces. When massive currents flow through conducting rails, the Lorentz force accelerates a sliding projectile. The same principle works in reverse: when a conductor moves through a magnetic field, it generates EMF. This is **motional EMF** - the basis of every electric generator, from massive hydroelectric dams to the alternator in your car!

## What is Motional EMF?

When a conductor moves through a magnetic field (or a magnetic field moves relative to a conductor), an EMF is induced even though no coil or loop is involved.

**Motional EMF**: EMF induced in a straight conductor moving through a magnetic field due to the magnetic force on charge carriers.

**Key difference from Faraday’s law**:

- Faraday’s law: Focus on changing flux through a loop
- Motional EMF: Focus on force on charges in moving conductor

Both are manifestations of the same phenomenon, just different viewpoints!

## The Physics: Lorentz Force on Charges

When a conductor moves with velocity $\vec{v}$ in a magnetic field $\vec{B}$:

1. **Free electrons** in the conductor also move with velocity $\vec{v}$
2. These moving charges experience **Lorentz force**: $\vec{F} = q(\vec{v} \times \vec{B})$
3. Force pushes charges to one end of conductor
4. Charge accumulation creates **potential difference** (EMF)
5. Equilibrium when electric force = magnetic force

## Motional EMF Formula

For a straight conductor of length $\ell$ moving perpendicular to magnetic field $B$ with velocity $v$:

$$\mathcal{E} = B\ell v$$

**Conditions**:

- $\vec{B}$, $\vec{v}$, and $\vec{\ell}$ are mutually perpendicular
- Uniform magnetic field
- Constant velocity

**General formula** (for any angle):

$$\mathcal{E} = B\ell v \sin\theta$$

where θ is angle between $\vec{v}$ and $\vec{B}$

### Vector Form

For a conductor element $d\vec{\ell}$ moving with velocity $\vec{v}$:

$$d\mathcal{E} = (\vec{v} \times \vec{B}) \cdot d\vec{\ell}$$

Total EMF:

$$\mathcal{E} = \int (\vec{v} \times \vec{B}) \cdot d\vec{\ell}$$

## Derivation: Two Perspectives

### Method 1: From Lorentz Force (Microscopic View)

Consider a conductor of length $\ell$ moving with velocity $v$ in field $B$:

1. Force on electron: $F = evB$ (perpendicular to $v$ and $B$)
2. Electrons accumulate at one end until electric field $E$ develops
3. At equilibrium: $eE = evB$ → $E = vB$
4. Potential difference: $\mathcal{E} = E\ell = vB\ell = B\ell v$ ✓

### Method 2: From Faraday’s Law (Macroscopic View)

Consider a rod sliding on rails forming a closed loop:

1. Area swept in time $dt$: $dA = \ell \cdot (v \cdot dt)$
2. Change in flux: $d\Phi_B = B \cdot dA = B\ell v \cdot dt$
3. Induced EMF: $\mathcal{E} = \frac{d\Phi_B}{dt} = B\ell v$ ✓

**Both methods give same result!** Choose based on problem context.

## The Sliding Rod Problem (Classic JEE)

**Setup**: A conducting rod of length $\ell$ slides on two parallel conducting rails in a perpendicular magnetic field $B$. The rails are connected by resistor $R$.

### Case 1: Rod Pulled with Constant Velocity

**Given**: Rod pulled with constant velocity $v$ to the right.

**Find**: Induced EMF, current, force required, power dissipated.

**Solution**:

**Induced EMF**:

$$\mathcal{E} = B\ell v$$

**Induced current**:

$$I = \frac{\mathcal{E}}{R} = \frac{B\ell v}{R}$$

**Direction** (by Lenz’s law): Opposes increase in flux → Current flows counterclockwise

**Magnetic force on rod**:

$$F_B = BI\ell = B \cdot \frac{B\ell v}{R} \cdot \ell = \frac{B^2\ell^2 v}{R}$$

**Direction**: Opposes motion (to the left, by Lenz’s law)

**Applied force** (to maintain constant velocity):

$$F_{app} = F_B = \frac{B^2\ell^2 v}{R}$$

(to the right)

**Power dissipated** in resistor:

$$P = I^2 R = \frac{(B\ell v)^2}{R}$$

**Power delivered** by applied force:

$$P = F_{app} \cdot v = \frac{B^2\ell^2 v}{R} \cdot v = \frac{B^2\ell^2 v^2}{R}$$

**Energy conservation**: ✓ Both powers are equal!

### Case 2: Rod Released from Rest (No Applied Force)

**Given**: Rod given initial velocity $v_0$, then released.

**Find**: Velocity as function of time.

**Solution**:

**Equation of motion**:

$$m\frac{dv}{dt} = -F_B = -\frac{B^2\ell^2 v}{R}$$

$$\frac{dv}{v} = -\frac{B^2\ell^2}{mR}dt$$

Let $\alpha = \frac{B^2\ell^2}{mR}$

$$\int_{v_0}^{v}\frac{dv}{v} = -\alpha\int_0^t dt$$

$$\ln\frac{v}{v_0} = -\alpha t$$

$$v(t) = v_0 e^{-\alpha t} = v_0 e^{-\frac{B^2\ell^2}{mR}t}$$

**Exponential decay!** Velocity decreases exponentially to zero.

**Time constant**: $\tau = \frac{mR}{B^2\ell^2}$

**Distance traveled** before stopping:

$$s = \int_0^{\infty} v \, dt = v_0\int_0^{\infty} e^{-\alpha t}dt = \frac{v_0}{\alpha} = \frac{v_0 mR}{B^2\ell^2}$$

## Memory Trick: “BLV”

**B**-field × **L**ength × **V**elocity = Motional EMF

Just remember “BLV” for $\mathcal{E} = B\ell v$ (when perpendicular)

## Rotating Rod in Magnetic Field

**Setup**: A rod of length $L$ rotates about one end with angular velocity $\omega$ in perpendicular field $B$.

**Key insight**: Different parts of rod have different velocities!

At distance $r$ from pivot: $v = \omega r$

Motional EMF in small element $dr$:

$$d\mathcal{E} = B \cdot v \cdot dr = B\omega r \, dr$$

Total EMF:

$$\mathcal{E} = \int_0^L B\omega r \, dr = B\omega \int_0^L r \, dr = B\omega \frac{L^2}{2}$$

$$\mathcal{E} = \frac{1}{2}B\omega L^2$$

**Alternative form**: $\mathcal{E} = \frac{1}{2}Bv_{tip}L$ where $v_{tip} = \omega L$

**Physical interpretation**:

- Average velocity: $v_{avg} = \frac{v_{tip}}{2} = \frac{\omega L}{2}$
- Average EMF: $\mathcal{E} = B \cdot v_{avg} \cdot L = \frac{1}{2}B\omega L^2$ ✓

## Rotating Disc in Magnetic Field

**Setup**: Conducting disc of radius $R$ rotates about center with angular velocity $\omega$ in perpendicular field $B$.

**EMF between center and rim**:

Using the same logic as rotating rod:

$$\mathcal{E} = \frac{1}{2}B\omega R^2$$

**This is a “disc generator”** - used in some practical generators.

**If connected in circuit**:

- Current flows radially (from center to rim or vice versa)
- Magnetic force creates retarding torque (Lenz’s law)

## Common JEE Problem Types

### Type 1: Rod on Rails (Variable Force)

**Problem**: Rod starts from rest. Find velocity as function of time if constant force $F_0$ is applied.

**Solution**:

$$F_0 - \frac{B^2\ell^2 v}{R} = m\frac{dv}{dt}$$

**Terminal velocity** (when $\frac{dv}{dt} = 0$):

$$v_{terminal} = \frac{F_0 R}{B^2\ell^2}$$

**Complete solution** requires solving differential equation.

### Type 2: Inclined Rails

**Problem**: Rod slides down frictionless inclined rails (angle θ) in perpendicular field.

**Forces**:

1. $mg\sin\theta$ (down the incline)
2. $\frac{B^2\ell^2 v}{R}$ (up the incline, electromagnetic braking)

**Terminal velocity**:

$$mg\sin\theta = \frac{B^2\ell^2 v_t}{R}$$

$$v_t = \frac{mgR\sin\theta}{B^2\ell^2}$$

### Type 3: Rectangular Loop Entering/Exiting Field

**Problem**: Rectangular loop (width $w$, length $L$) moves into magnetic field region with velocity $v$.

**While entering** (distance $x$ inside):

- Flux: $\Phi_B = Bwx$
- EMF: $\mathcal{E} = \frac{d\Phi_B}{dt} = Bw\frac{dx}{dt} = Bwv$
- Same as motional EMF formula!

**Completely inside**: No change in flux → No EMF

**While exiting**: EMF again = $Bwv$ (opposite direction)

## Direction of Induced Current

Use **Fleming’s Right-Hand Rule** (Generator rule):

- **Thumb**: Motion of conductor
- **First finger**: Field direction
- **Second finger**: Induced current direction

Or use Lenz’s law (always reliable):

1. Determine if flux is increasing/decreasing
2. Induced current opposes this change

## Common Mistakes Students Make

❌ **Mistake 1**: Using $B\ell v$ when vectors aren’t perpendicular
✅ **Reality**: Use $B\ell v\sin\theta$ or vector form

❌ **Mistake 2**: Forgetting that different parts of rotating rod have different velocities
✅ **Reality**: Must integrate: $\mathcal{E} = \int_0^L B\omega r \, dr$

❌ **Mistake 3**: Not considering the retarding force (Lenz’s law)
✅ **Reality**: Moving conductor always experiences opposing force

❌ **Mistake 4**: Confusing EMF and potential difference
✅ **Reality**:

- EMF = $B\ell v$ (open circuit)
- PD across resistor = $IR$ (closed circuit)

❌ **Mistake 5**: Wrong direction of force or current
✅ **Reality**: Always use Lenz’s law or Fleming’s rules systematically

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: A rod of length 0.5 m moves perpendicular to a magnetic field of 0.4 T with velocity 10 m/s. Calculate the induced EMF.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $\ell = 0.5$ m, $B = 0.4$ T, $v = 10$ m/s</p><p>All three vectors are perpendicular, so:</p>$$\mathcal{E} = B\ell v = 0.4 \times 0.5 \times 10 = 2 \text{ V}$$<p><strong>Answer: 2 V</strong></p></div></details>

**Problem 1.2**: A conducting rod rotates about one end at 120 rpm in a perpendicular magnetic field of 0.5 T. The rod length is 0.4 m. Find EMF between ends.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $f = 120$ rpm $= 2$ rev/s, $B = 0.5$ T, $L = 0.4$ m</p><p>Angular velocity: $\omega = 2\pi f = 2\pi \times 2 = 4\pi$ rad/s</p><p>EMF in rotating rod:</p>$$\mathcal{E} = \frac{1}{2}B\omega L^2 = \frac{1}{2} \times 0.5 \times 4\pi \times (0.4)^2$$<p></p>$$\mathcal{E} = 0.5 \times 0.5 \times 4\pi \times 0.16 = 0.16\pi \approx 0.503 \text{ V}$$<p><strong>Answer: 0.5 V</strong></p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: A rod of length 1 m and mass 100 g slides on frictionless horizontal rails connected by a resistor of 10 Ω. The magnetic field is 0.5 T perpendicular to the plane. If the rod is given initial velocity 20 m/s, find:
(a) Initial induced EMF
(b) Initial acceleration
(c) Time constant of velocity decay

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $\ell = 1$ m, $m = 0.1$ kg, $R = 10$ Ω, $B = 0.5$ T, $v_0 = 20$ m/s</p><p><strong>(a) Initial EMF</strong>:</p>$$\mathcal{E}_0 = B\ell v_0 = 0.5 \times 1 \times 20 = 10 \text{ V}$$<p><strong>(b) Initial acceleration</strong>:
Initial current: $I_0 = \frac{\mathcal{E}_0}{R} = \frac{10}{10} = 1$ A</p><p>Initial force: $F_0 = BI_0\ell = 0.5 \times 1 \times 1 = 0.5$ N (opposing motion)</p><p>Initial acceleration: $a_0 = -\frac{F_0}{m} = -\frac{0.5}{0.1} = -5$ m/s² (negative = deceleration)</p><p><strong>(c) Time constant</strong>:</p>$$\tau = \frac{mR}{B^2\ell^2} = \frac{0.1 \times 10}{(0.5)^2 \times 1^2} = \frac{1}{0.25} = 4 \text{ s}$$<p><strong>Velocity equation</strong>: $v(t) = 20e^{-t/4}$ m/s</p><p><strong>Answers</strong>: (a) 10 V, (b) -5 m/s², (c) 4 s</p></div></details>

**Problem 2.2**: A rectangular loop (20 cm × 10 cm) enters a magnetic field region of 0.8 T with velocity 5 m/s. The field is perpendicular to the plane and the 10 cm side enters first. If the loop has resistance 2 Ω, find the power dissipated while entering.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $w = 0.1$ m (entering side), $\ell = 0.2$ m, $B = 0.8$ T, $v = 5$ m/s, $R = 2$ Ω</p><p><strong>While entering</strong>:
EMF induced: $\mathcal{E} = Bwv = 0.8 \times 0.1 \times 5 = 0.4$ V</p><p>Current: $I = \frac{\mathcal{E}}{R} = \frac{0.4}{2} = 0.2$ A</p><p>Power dissipated:</p>$$P = I^2R = (0.2)^2 \times 2 = 0.08 \text{ W}$$<p><strong>Alternative</strong>: $P = \frac{\mathcal{E}^2}{R} = \frac{(0.4)^2}{2} = 0.08$ W ✓</p><p><strong>Answer: 0.08 W = 80 mW</strong></p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: A metal disc of radius $a$ rotates about its axis with angular velocity ω in a perpendicular magnetic field B. A circuit is formed by connecting centre to rim through external resistance R. Find:
(a) Current through resistor
(b) Torque required to maintain constant ω
(c) Power delivered by external agent

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: Disc radius $a$, angular velocity $\omega$, field $B$, external resistance $R$</p><p>Let disc resistance = $r$ (usually negligible, assume $r \ll R$)</p><p><strong>(a) Current</strong>:
EMF: $\mathcal{E} = \frac{1}{2}B\omega a^2$</p><p>Current: $I = \frac{\mathcal{E}}{R+r} \approx \frac{B\omega a^2}{2R}$ (if $r \ll R$)</p><p><strong>(b) Torque required</strong>:
Current flows radially. Consider annular ring at radius $r$ of width $dr$:</p><ul><li>Current through ring: $I$ (same throughout)</li><li>Force on ring: $dF = BI \cdot dr$</li><li>Torque by ring: $d\tau = r \cdot dF = BIr \, dr$</li></ul><p>Total torque:</p>$$\tau = \int_0^a BIr \, dr = BI\int_0^a r \, dr = BI \frac{a^2}{2}$$<p>Substituting $I = \frac{B\omega a^2}{2R}$:</p>$$\tau = B \cdot \frac{B\omega a^2}{2R} \cdot \frac{a^2}{2} = \frac{B^2\omega a^4}{4R}$$<p><strong>(c) Power delivered</strong>:</p>$$P = \tau \omega = \frac{B^2\omega a^4}{4R} \cdot \omega = \frac{B^2\omega^2 a^4}{4R}$$<p>This equals $I^2R$ (check!):</p>$$I^2R = \left(\frac{B\omega a^2}{2R}\right)^2 R = \frac{B^2\omega^2 a^4}{4R^2} \cdot R = \frac{B^2\omega^2 a^4}{4R}$$<p>✓</p><p><strong>Answers</strong>: (a) $I = \frac{B\omega a^2}{2R}$, (b) $\tau = \frac{B^2\omega a^4}{4R}$, (c) $P = \frac{B^2\omega^2 a^4}{4R}$</p></div></details>

**Problem 3.2**: Two parallel conducting rails are placed on an inclined plane (angle 30°) in a region where magnetic field B = 1 T is perpendicular to the plane. A rod of mass 0.2 kg and length 0.5 m can slide on the rails. The rails are connected at top by resistance R = 5 Ω. Find the terminal velocity of the rod as it slides down.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $\theta = 30°$, $B = 1$ T, $m = 0.2$ kg, $\ell = 0.5$ m, $R = 5$ Ω, $g = 10$ m/s²</p><p><strong>At terminal velocity</strong>, net force = 0:</p><p><strong>Forces</strong>:</p><ol><li>Component of weight down the incline: $F_g = mg\sin\theta = 0.2 \times 10 \times 0.5 = 1$ N</li><li>Magnetic force up the incline: $F_B = BI\ell = B \cdot \frac{B\ell v_t}{R} \cdot \ell = \frac{B^2\ell^2 v_t}{R}$</li></ol><p><strong>At equilibrium</strong>:</p>$$mg\sin\theta = \frac{B^2\ell^2 v_t}{R}$$

$$v_t = \frac{mgR\sin\theta}{B^2\ell^2} = \frac{0.2 \times 10 \times 5 \times 0.5}{1^2 \times (0.5)^2}$$

$$v_t = \frac{5}{0.25} = 20 \text{ m/s}$$<p><strong>Physical insight</strong>: Steeper incline or larger resistance → higher terminal velocity. Stronger field or longer rod → lower terminal velocity.</p><p><strong>Answer: 20 m/s</strong></p></div></details>

## Applications of Motional EMF

1. **Electric Generators**: Rotating coils in magnetic field (power plants)
2. **Speedometers**: Moving magnet induces current proportional to speed
3. **Electromagnetic Railguns**: Accelerate projectiles using Lorentz force
4. **Electromagnetic Braking**: Trains, elevators (eddy current braking)
5. **Tachometers**: Measure rotation speed
6. **Velocity Sensors**: Non-contact speed measurement
7. **Electromagnetic Flowmeters**: Measure flow of conducting fluids

## Connection to Other Chapters

- [**Faraday’s Law**](../faradays-law/index.md): Motional EMF is special case
- [**Lenz’s Law**](../lenzs-law/index.md): Determines direction of current and force
- [**Magnetic Force**](../../magnetism/index.md): Force on current-carrying conductor
- [**AC Generators**](../ac-circuits/index.md): Rotating coil is continuous motional EMF

## Key Takeaways

✓ Motional EMF: $\mathcal{E} = B\ell v$ (when perpendicular)
✓ Caused by Lorentz force on charge carriers
✓ Moving conductor experiences retarding force (Lenz’s law)
✓ Rotating rod: $\mathcal{E} = \frac{1}{2}B\omega L^2$ (must integrate)
✓ Energy conservation: Mechanical work = Electrical energy
✓ Terminal velocity when driving force = magnetic retarding force

## Formula Summary

**Straight conductor** (perpendicular motion):

$$\mathcal{E} = B\ell v$$

**General case** (with angle θ):

$$\mathcal{E} = B\ell v\sin\theta$$

**Rotating rod** (about one end):

$$\mathcal{E} = \frac{1}{2}B\omega L^2$$

**Magnetic force** on current-carrying rod:

$$F = BI\ell = \frac{B^2\ell^2 v}{R}$$

**Terminal velocity** (inclined plane):

$$v_t = \frac{mgR\sin\theta}{B^2\ell^2}$$

---

*Next Topic*: [Self Inductance](../self-inductance/index.md) - When a coil induces EMF in itself

From TestGuru · our mock-test platform

## You've read Motional EMF - EMF in Moving Conductors.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Fmotional-emf%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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


### inline-script-17

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


### inline-script-18

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/motional-emf/",this.page.identifier="/physics/electromagnetic-induction/motional-emf/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-19

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423219238590"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423219238590")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423219368167"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423219368167")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-3

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423219430297"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423219430297")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/motional-emf/](https://jeenotes.in/physics/electromagnetic-induction/motional-emf/) · raw HTML: `offline/physics/electromagnetic-induction/motional-emf/index.html`_
