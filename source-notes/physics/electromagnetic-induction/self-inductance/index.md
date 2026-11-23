---
title: "Self Inductance - The Electromagnetic Inertia"
source: "https://jeenotes.in/physics/electromagnetic-induction/self-inductance/"
description: "Master self inductance and energy storage in inductors - the key to understanding why current can't change instantly in circuits"
updated: "2026-10-18"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 10"
html: "../../../../offline/physics/electromagnetic-induction/self-inductance/index.html"
extracted: "2026-11-23"
---

> Master self inductance and energy storage in inductors - the key to understanding why current can't change instantly in circuits

## Movie Hook: The Power Grid in Oppenheimer

When you see massive electrical explosions in movies like Oppenheimer’s atomic energy facilities, there’s real physics behind the sparks. When you suddenly break a circuit carrying large current, the **self inductance** of coils tries to maintain that current. This creates enormous voltage spikes that can jump across air gaps - those dramatic electrical arcs! Power grids use careful control of inductance to prevent such catastrophic failures. Inductance is like electromagnetic inertia - it resists changes in current.

## What is Self Inductance?

When current through a coil changes, it creates a changing magnetic field, which induces an EMF in **the same coil**. This is called **self induction**.

**Self Inductance (L)**: The property of a coil that opposes changes in current through it by inducing a back-EMF.

**Analogy**:

- Mass opposes changes in velocity (mechanical inertia)
- Inductance opposes changes in current (electromagnetic inertia)

## The Physics Behind Self Inductance

1. Current $I$ flows through a coil
2. Creates magnetic field $B$ proportional to $I$
3. Magnetic flux through coil: $\Phi_B \propto I$
4. When $I$ changes, $\Phi_B$ changes
5. By Faraday’s law, EMF is induced
6. By Lenz’s law, this EMF **opposes** the change in current

**Key insight**: The coil induces EMF in itself!

## Definition of Self Inductance

**Flux linkage is proportional to current**:

$$N\Phi_B = LI$$

Where:

- $L$ = Self inductance (Henry, H)
- $N$ = Number of turns
- $\Phi_B$ = Magnetic flux through one turn
- $I$ = Current

**Self inductance**: $L = \frac{N\Phi_B}{I}$

**Unit**: 1 Henry (H) = 1 Wb/A = 1 V·s/A

## Induced EMF Due to Self Inductance

When current changes at rate $\frac{dI}{dt}$:

$$\mathcal{E} = -\frac{d(N\Phi_B)}{dt} = -\frac{d(LI)}{dt} = -L\frac{dI}{dt}$$

$$\mathcal{E} = -L\frac{dI}{dt}$$

**The negative sign** (Lenz’s law):

- If current **increasing** → Induced EMF **opposes** increase
- If current **decreasing** → Induced EMF **opposes** decrease

**Key point**: Induced EMF is proportional to **rate of change** of current, not current itself.

## Memory Trick: “L for LAZY”

**L**-inductance makes circuits **LAZY** - they don’t like to change current quickly!

The bigger L, the more the circuit resists change.

## Self Inductance of Different Geometries

### 1. Solenoid (Most Common in JEE)

For a solenoid with:

- Length: $\ell$
- Cross-sectional area: $A$
- Number of turns: $N$
- Core permeability: $\mu$ (= $\mu_0$ for air)

$$L = \frac{\mu_0 N^2 A}{\ell}$$

**For air core**: $\mu = \mu_0 = 4\pi \times 10^{-7}$ H/m

**For material core**: $L = \frac{\mu_r\mu_0 N^2 A}{\ell}$ where $\mu_r$ is relative permeability

**Derivation**:

1. Field inside solenoid: $B = \mu_0 nI = \mu_0 \frac{N}{\ell}I$
2. Flux through one turn: $\Phi_B = BA = \mu_0 \frac{N}{\ell}IA$
3. Total flux linkage: $N\Phi_B = N \cdot \mu_0 \frac{N}{\ell}IA = \frac{\mu_0 N^2 A}{\ell}I$
4. Self inductance: $L = \frac{N\Phi_B}{I} = \frac{\mu_0 N^2 A}{\ell}$ ✓

**Key dependencies**:

- $L \propto N^2$ (double turns → quadruple inductance!)
- $L \propto A$ (larger area → more flux)
- $L \propto 1/\ell$ (longer → weaker field → less flux)

### 2. Toroid

For a toroid with:

- Mean radius: $r$
- Cross-sectional area: $A$
- Total turns: $N$

$$L = \frac{\mu_0 N^2 A}{2\pi r}$$

**Advantage**: No fringing fields, more efficient than solenoid

### 3. Single-Turn Coil

For a circular loop of radius $R$:

$$L \approx \mu_0 R\left[\ln\left(\frac{8R}{a}\right) - 2\right]$$

where $a$ is wire radius. **Rarely asked in JEE**.

## LR Circuits: Growth and Decay of Current

### Circuit 1: LR Circuit with Battery (Current Growth)

**Setup**: Inductor $L$, resistor $R$, battery $\mathcal{E}_0$ connected in series. Switch closed at $t = 0$.

**Applying Kirchhoff’s voltage law**:

$$\mathcal{E}_0 - L\frac{dI}{dt} - IR = 0$$

$$L\frac{dI}{dt} = \mathcal{E}_0 - IR$$

$$\frac{dI}{\mathcal{E}_0 - IR} = \frac{dt}{L}$$

**Solving** (initial condition: $I = 0$ at $t = 0$):

$$\int_0^I \frac{dI}{\mathcal{E}_0 - IR} = \int_0^t \frac{dt}{L}$$

Let $I_0 = \frac{\mathcal{E}_0}{R}$ (steady-state current)

$$I(t) = I_0(1 - e^{-t/\tau})$$

Where:

- $I_0 = \frac{\mathcal{E}_0}{R}$ = Maximum (steady-state) current
- $\tau = \frac{L}{R}$ = Time constant (seconds)

**At $t = \tau$**: $I = I_0(1 - e^{-1}) = 0.63I_0$ (63% of maximum)

**Graph**: Current grows exponentially, approaching $I_0$

```fallback
I
^
I₀|        ___________
  |      /
  |     /
  |    /
  |   /
  |__/________________> t
    0  τ  2τ  3τ  4τ
```

**Physical interpretation**:

- At $t = 0$: $\frac{dI}{dt}$ is maximum → Induced EMF = $\mathcal{E}_0$ → No current
- At $t = \infty$: $\frac{dI}{dt} = 0$ → No induced EMF → Current = $I_0$

### Circuit 2: LR Circuit Discharge (Current Decay)

**Setup**: Remove battery, short-circuit the LR combination at $t = 0$. Initial current = $I_0$.

**KVL**: $-L\frac{dI}{dt} - IR = 0$

$$\frac{dI}{I} = -\frac{R}{L}dt$$

$$I(t) = I_0 e^{-t/\tau}$$

Where $\tau = \frac{L}{R}$

**At $t = \tau$**: $I = I_0 e^{-1} = 0.37I_0$ (37% of initial)

**Graph**: Exponential decay

```fallback
I
^
I₀|\\
  | \\
  |  \\
  |   \\___________
  |________________> t
    0  τ  2τ  3τ
```

## Time Constant: τ = L/R

**Time constant** $\tau = \frac{L}{R}$ characterizes how quickly circuit responds:

**Large τ** (large L or small R):

- Slow changes in current
- Takes longer to reach steady state
- Good for filtering rapid fluctuations

**Small τ** (small L or large R):

- Fast changes in current
- Quickly reaches steady state
- Responds rapidly to changes

**Units**: $\tau = \frac{L}{R} = \frac{\text{H}}{\Omega} = \frac{\text{V}\cdot\text{s/A}}{\text{V/A}} = \text{s}$ ✓

## Energy Stored in Inductor

When current builds up in an inductor, energy is stored in the magnetic field.

**Power delivered to inductor**:

$$P = \mathcal{E} \cdot I = L\frac{dI}{dt} \cdot I$$

**Energy stored** (from $I = 0$ to $I = I_f$):

$$U = \int_0^{I_f} P \, dt = \int_0^{I_f} LI \, dI = L\int_0^{I_f} I \, dI = \frac{1}{2}LI_f^2$$

$$U = \frac{1}{2}LI^2$$

**Energy density** in magnetic field:

$$u = \frac{U}{\text{Volume}} = \frac{B^2}{2\mu_0}$$

**Analogy**:

- Capacitor: $U = \frac{1}{2}CV^2$ (energy in electric field)
- Inductor: $U = \frac{1}{2}LI^2$ (energy in magnetic field)

**Derivation of energy density**:

For a solenoid: $L = \frac{\mu_0 N^2 A}{\ell}$ and $B = \mu_0 nI = \mu_0\frac{N}{\ell}I$

$$U = \frac{1}{2}LI^2 = \frac{1}{2} \cdot \frac{\mu_0 N^2 A}{\ell} \cdot I^2$$

From $B = \mu_0\frac{N}{\ell}I$: $I = \frac{B\ell}{\mu_0 N}$

$$U = \frac{1}{2} \cdot \frac{\mu_0 N^2 A}{\ell} \cdot \frac{B^2\ell^2}{\mu_0^2 N^2} = \frac{B^2 A\ell}{2\mu_0}$$

Volume = $A\ell$, so:

$$u = \frac{U}{A\ell} = \frac{B^2}{2\mu_0}$$

## Common Mistakes Students Make

❌ **Mistake 1**: Thinking inductance depends on current
✅ **Reality**: $L$ depends only on geometry and material, not on $I$

❌ **Mistake 2**: Confusing $L$ with $\ell$ (length)
✅ **Reality**: Use clear notation: $L$ = inductance, $\ell$ = length

❌ **Mistake 3**: Forgetting the negative sign in induced EMF
✅ **Reality**: $\mathcal{E} = -L\frac{dI}{dt}$ (opposes change)

❌ **Mistake 4**: Using $U = \frac{1}{2}LI^2$ when current is still changing
✅ **Reality**: This formula gives instantaneous energy at any current $I$

❌ **Mistake 5**: Thinking current through inductor can change instantly
✅ **Reality**: $\frac{dI}{dt}$ would be infinite → Infinite EMF (impossible)

**Important**: Current through inductor is **continuous** (can’t jump)

## Behavior of Inductor

| Time | DC (steady state) | AC | Transient |
| --- | --- | --- | --- |
| **Impedance** | Zero (short circuit) | $X_L = \omega L$ | Varies |
| **Current** | Maximum | Limited by $X_L$ | Grows/decays exponentially |
| **Voltage** | Zero | $V = IX_L$ | $V = L\frac{dI}{dt}$ |

**Key point**:

- Inductor **blocks** AC (high frequency → high impedance)
- Inductor **passes** DC (steady state → zero impedance)

Opposite behavior to capacitor!

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: A solenoid has 500 turns, length 50 cm, and cross-sectional area 10 cm². Calculate its self inductance.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $N = 500$, $\ell = 0.5$ m, $A = 10 \times 10^{-4} = 10^{-3}$ m²</p><p>Self inductance:</p>$$L = \frac{\mu_0 N^2 A}{\ell} = \frac{4\pi \times 10^{-7} \times (500)^2 \times 10^{-3}}{0.5}$$

$$L = \frac{4\pi \times 10^{-7} \times 25 \times 10^4 \times 10^{-3}}{0.5}$$

$$L = \frac{4\pi \times 25 \times 10^{-6}}{0.5} = \frac{100\pi \times 10^{-6}}{0.5}$$

$$L = 200\pi \times 10^{-6} = 6.28 \times 10^{-4} \text{ H} = 0.628 \text{ mH}$$<p><strong>Answer: 0.628 mH</strong></p></div></details>

**Problem 1.2**: The current through a 2 H inductor changes from 0 to 5 A in 0.1 s. Find the magnitude of induced EMF.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L = 2$ H, $\Delta I = 5 - 0 = 5$ A, $\Delta t = 0.1$ s</p><p>Average rate of change: $\frac{dI}{dt} = \frac{\Delta I}{\Delta t} = \frac{5}{0.1} = 50$ A/s</p><p>Induced EMF:</p>$$|\mathcal{E}| = L\frac{dI}{dt} = 2 \times 50 = 100 \text{ V}$$<p><strong>Answer: 100 V</strong></p><p><strong>Note</strong>: This large EMF opposes the rapid current change.</p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: A coil of inductance 0.5 H and resistance 10 Ω is connected to a 12 V battery. Find:
(a) Time constant
(b) Maximum current
(c) Current after one time constant
(d) Energy stored in steady state

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L = 0.5$ H, $R = 10$ Ω, $\mathcal{E}_0 = 12$ V</p><p><strong>(a) Time constant</strong>:</p>$$\tau = \frac{L}{R} = \frac{0.5}{10} = 0.05 \text{ s} = 50 \text{ ms}$$<p><strong>(b) Maximum current</strong> (steady state):</p>$$I_0 = \frac{\mathcal{E}_0}{R} = \frac{12}{10} = 1.2 \text{ A}$$<p><strong>(c) Current after τ</strong>:</p>$$I(\tau) = I_0(1 - e^{-1}) = 1.2 \times 0.63 = 0.756 \text{ A}$$<p><strong>(d) Energy in steady state</strong>:</p>$$U = \frac{1}{2}LI_0^2 = \frac{1}{2} \times 0.5 \times (1.2)^2 = 0.25 \times 1.44 = 0.36 \text{ J}$$<p><strong>Answers</strong>: (a) 50 ms, (b) 1.2 A, (c) 0.756 A, (d) 0.36 J</p></div></details>

**Problem 2.2**: Two solenoids have the same length and number of turns, but one has twice the radius of the other. What is the ratio of their self inductances?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $\ell_1 = \ell_2 = \ell$, $N_1 = N_2 = N$, $r_2 = 2r_1$</p><p>Self inductance: $L = \frac{\mu_0 N^2 A}{\ell}$</p><p>For circular cross-section: $A = \pi r^2$</p>$$L_1 = \frac{\mu_0 N^2 \pi r_1^2}{\ell}$$

$$L_2 = \frac{\mu_0 N^2 \pi r_2^2}{\ell} = \frac{\mu_0 N^2 \pi (2r_1)^2}{\ell} = \frac{\mu_0 N^2 \pi \cdot 4r_1^2}{\ell}$$<p>Ratio:</p>$$\frac{L_2}{L_1} = \frac{4r_1^2}{r_1^2} = 4$$<p><strong>Answer</strong>: $L_2 : L_1 = 4 : 1$</p><p><strong>Key</strong>: Inductance is proportional to area, hence $r^2$.</p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: A solenoid of inductance L and resistance R is connected to a battery of EMF $\mathcal{E}_0$. Find:
(a) Expression for current as function of time
(b) Time when current reaches 99% of maximum
(c) Energy supplied by battery from $t = 0$ to $t = \tau$
(d) Energy dissipated as heat in that time
(e) Energy stored in inductor at $t = \tau$

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>(a) Current vs time</strong>:</p>$$I(t) = \frac{\mathcal{E}_0}{R}(1 - e^{-Rt/L})$$<p>Let $I_0 = \frac{\mathcal{E}_0}{R}$ and $\tau = \frac{L}{R}$</p>$$I(t) = I_0(1 - e^{-t/\tau})$$<p><strong>(b) Time for 99% of maximum</strong>:</p>$$0.99I_0 = I_0(1 - e^{-t/\tau})$$<p></p>$$0.99 = 1 - e^{-t/\tau}$$<p></p>$$e^{-t/\tau} = 0.01$$<p></p>$$-\frac{t}{\tau} = \ln(0.01) = -\ln(100) = -4.605$$<p></p>$$t = 4.605\tau = 4.605\frac{L}{R}$$<p><strong>(c)</strong> $E_{battery} = \int_0^{\tau}\mathcal{E}_0 I_0(1-e^{-t/\tau})dt = \mathcal{E}_0 I_0\tau e^{-1} = \frac{LI_0^2}{e} \approx 0.368\,LI_0^2$
<strong>(e)</strong> $U_L = \frac{1}{2}L\left[I_0(1-e^{-1})\right]^2 \approx 0.200\,LI_0^2$
<strong>(d)</strong> $E_{heat} = E_{battery} - U_L \approx 0.168\,LI_0^2$</p><p>(Over $0 \to \infty$ both the battery energy and the heat diverge, because the steady current keeps dissipating $I_0^2R$. Only the stored energy is finite, $\frac{1}{2}LI_0^2$. The “half stored, half dissipated” rule applies to charging a <strong>capacitor</strong>, not to an LR circuit.)</p><p><strong>Answers</strong>:</p><ul><li>(a) $I(t) = \frac{\mathcal{E}_0}{R}(1 - e^{-Rt/L})$</li><li>(b) $t = 4.605\frac{L}{R}$</li><li>(c) $E_{battery}(0 \to \tau) = \frac{L\mathcal{E}_0^2}{eR^2} \approx 0.368\,\frac{L\mathcal{E}_0^2}{R^2}$</li><li>(d) $E_{heat}(0 \to \tau) \approx 0.168\,\frac{L\mathcal{E}_0^2}{R^2}$</li><li>(e) $U_L(\tau) = \frac{1}{2}\left(1 - e^{-1}\right)^2\frac{L\mathcal{E}_0^2}{R^2} \approx 0.200\,\frac{L\mathcal{E}_0^2}{R^2}$</li></ul></div></details>

**Problem 3.2**: A long solenoid with air core is filled with a material of relative permeability $\mu_r = 100$. By what factor does its inductance change?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p><strong>With air core</strong>:</p>$$L_{air} = \frac{\mu_0 N^2 A}{\ell}$$<p><strong>With material core</strong>:</p>$$L_{material} = \frac{\mu_r\mu_0 N^2 A}{\ell} = \mu_r \cdot \frac{\mu_0 N^2 A}{\ell} = \mu_r L_{air}$$<p>Factor:</p>$$\frac{L_{material}}{L_{air}} = \mu_r = 100$$<p><strong>Answer</strong>: Inductance increases by factor of 100.</p><p><strong>Practical use</strong>: Iron cores greatly increase inductance without changing coil size.</p></div></details>

## Applications of Self Inductance

1. **Chokes**: Block AC, pass DC (fluorescent lights, power supplies)
2. **Transformers**: Both self and mutual inductance (covered in [transformers.md](../transformers/index.md))
3. **Filters**: Smooth out fluctuations in power supplies
4. **Energy Storage**: Superconducting magnets, pulsed lasers
5. **Induction Motors**: Starting and running
6. **Spark Coils**: Create high voltage (car ignition systems)
7. **LC Oscillators**: Generate AC signals

## Connection to Other Chapters

- [**Faraday’s Law**](../faradays-law/index.md): Basis of self induction
- [**Lenz’s Law**](../lenzs-law/index.md): Explains opposition to current change
- [**Mutual Inductance**](../mutual-inductance/index.md): Inductance between two coils
- [**AC Circuits**](../ac-circuits/index.md): Inductive reactance $X_L = \omega L$
- [**LCR Circuits**](../lcr-circuits/index.md): Resonance and oscillations

## Key Takeaways

✓ Self inductance $L$ is electromagnetic inertia - opposes current changes
✓ Induced EMF: $\mathcal{E} = -L\frac{dI}{dt}$ (proportional to rate of change)
✓ Solenoid: $L = \frac{\mu_0 N^2 A}{\ell}$ (proportional to $N^2$)
✓ Time constant: $\tau = \frac{L}{R}$ determines response speed
✓ Energy stored: $U = \frac{1}{2}LI^2$ (in magnetic field)
✓ Current through inductor cannot change instantaneously
✓ DC steady state: Inductor acts like short circuit
✓ AC: Inductor blocks high frequencies

## Formula Summary

**Definition**:

$$L = \frac{N\Phi_B}{I} \quad \text{(H = Wb/A)}$$

**Induced EMF**:

$$\mathcal{E} = -L\frac{dI}{dt}$$

**Solenoid**:

$$L = \frac{\mu_0 N^2 A}{\ell}$$

**LR Circuit Growth**:

$$I(t) = I_0(1 - e^{-t/\tau}), \quad \tau = \frac{L}{R}$$

**LR Circuit Decay**:

$$I(t) = I_0 e^{-t/\tau}$$

**Energy Stored**:

$$U = \frac{1}{2}LI^2$$

**Energy Density**:

$$u = \frac{B^2}{2\mu_0}$$

---

*Next Topic*: [Mutual Inductance](../mutual-inductance/index.md) - Inductance between two coils and transformer principle

From TestGuru · our mock-test platform

## You've read Self Inductance - The Electromagnetic Inertia.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Fself-inductance%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/self-inductance/",this.page.identifier="/physics/electromagnetic-induction/self-inductance/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423223770255"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423223770255")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423224033597"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423224033597")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/self-inductance/](https://jeenotes.in/physics/electromagnetic-induction/self-inductance/) · raw HTML: `offline/physics/electromagnetic-induction/self-inductance/index.html`_
