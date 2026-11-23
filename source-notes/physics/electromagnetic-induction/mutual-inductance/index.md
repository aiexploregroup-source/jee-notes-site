---
title: "Mutual Inductance - Wireless Energy Transfer"
source: "https://jeenotes.in/physics/electromagnetic-induction/mutual-inductance/"
description: "Master mutual inductance and understand how two coils can transfer energy wirelessly - the principle behind transformers and wireless charging"
updated: "2025-12-26"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 10"
html: "../../../../offline/physics/electromagnetic-induction/mutual-inductance/index.html"
extracted: "2026-11-23"
---

> Master mutual inductance and understand how two coils can transfer energy wirelessly - the principle behind transformers and wireless charging

## Movie Hook: Wireless Charging in Modern Devices

Your smartphone charges without any wires touching it. Your electric toothbrush sits on a stand and recharges. Electric cars park over a charging pad and power up wirelessly. This isn’t magic - it’s **mutual inductance**! When current changes in one coil (the charger), it creates a changing magnetic field that induces current in another coil (your device). The same principle powers every transformer in the world, from the charger plugged into your wall to massive transformers at power stations. Energy teleportation through electromagnetic induction!

## What is Mutual Inductance?

When current changes in one coil, it can induce EMF in a nearby coil. This is **mutual inductance**.

**Mutual Inductance (M)**: The property of two coils where changing current in one induces EMF in the other.

**Key difference from self inductance**:

- Self inductance: Coil induces EMF in itself
- Mutual inductance: Coil 1 induces EMF in coil 2

## The Physics: Two Coupled Coils

**Setup**: Two coils placed near each other.

1. Current $I_1$ in coil 1 creates magnetic field
2. Some field lines pass through coil 2
3. Flux through coil 2: $\Phi_{21} \propto I_1$
4. When $I_1$ changes, $\Phi_{21}$ changes
5. EMF induced in coil 2 by Faraday’s law

**Reciprocity**: The same thing happens when current changes in coil 2 - EMF is induced in coil 1.

## Definition of Mutual Inductance

**Flux linkage in coil 2 due to current in coil 1**:

$$N_2\Phi_{21} = M_{21}I_1$$

**Mutual inductance** $M_{21}$:

$$M_{21} = \frac{N_2\Phi_{21}}{I_1}$$

**Similarly**:

$$M_{12} = \frac{N_1\Phi_{12}}{I_2}$$

**Remarkable fact**: $M_{12} = M_{21} = M$ (proved below)

**Unit**: Henry (H), same as self inductance

## Induced EMF Due to Mutual Inductance

When current in coil 1 changes at rate $\frac{dI_1}{dt}$:

**EMF induced in coil 2**:

$$\mathcal{E}_2 = -M\frac{dI_1}{dt}$$

**Similarly**, when current in coil 2 changes:

$$\mathcal{E}_1 = -M\frac{dI_2}{dt}$$

The negative sign (Lenz’s law) indicates the induced EMF opposes the change.

## Proof: M₁₂ = M₂₁

This beautiful result comes from energy conservation.

**Consider**: Current $I_1$ in coil 1, current $I_2$ in coil 2.

**Total magnetic energy**:

$$U = \frac{1}{2}L_1I_1^2 + \frac{1}{2}L_2I_2^2 + M_{12}I_1I_2$$

The last term is the mutual energy (can be positive or negative depending on orientation).

**From thermodynamics** (energy is path-independent):

$$\frac{\partial^2 U}{\partial I_1 \partial I_2} = \frac{\partial^2 U}{\partial I_2 \partial I_1}$$

$$\frac{\partial}{\partial I_1}(L_2I_2 + M_{12}I_1) = \frac{\partial}{\partial I_2}(L_1I_1 + M_{21}I_2)$$

$$M_{12} = M_{21} = M$$

✓

**Physical interpretation**: The coupling between coils is symmetric!

## Mutual Inductance of Solenoids

### Case 1: Coil Wound Over Another Solenoid

**Setup**:

- Solenoid 1: Length $\ell$, turns $N_1$, area $A$
- Coil 2: Wound over solenoid 1, turns $N_2$

**Analysis**:

Field due to $I_1$ in solenoid 1:

$$B_1 = \mu_0 \frac{N_1}{\ell}I_1$$

Flux through one turn of coil 2:

$$\Phi_{21} = B_1 \cdot A = \mu_0 \frac{N_1}{\ell}I_1 \cdot A$$

Total flux linkage in coil 2:

$$N_2\Phi_{21} = N_2 \cdot \mu_0 \frac{N_1}{\ell}I_1 \cdot A$$

$$M = \frac{N_2\Phi_{21}}{I_1} = \frac{\mu_0 N_1 N_2 A}{\ell}$$

**Key points**:

- $M \propto N_1 N_2$ (product of turns)
- $M \propto A$ (cross-sectional area)
- $M \propto 1/\ell$ (inversely proportional to length)

**Note**: If coil 2 doesn’t cover full length, multiply by coverage fraction.

### Case 2: Two Nearby Solenoids

**Setup**: Two solenoids placed coaxially but separated.

**Mutual inductance** depends on:

1. Geometries of both solenoids
2. Relative position and orientation
3. Fraction of flux from one that passes through the other

**Exact formula**: Complex, requires integration. JEE usually gives simplified cases.

## Coefficient of Coupling (k)

Not all flux from coil 1 passes through coil 2. The **coefficient of coupling** quantifies this:

$$M = k\sqrt{L_1 L_2}$$

Where:

- $k$ = Coefficient of coupling (0 ≤ k ≤ 1)
- $L_1$, $L_2$ = Self inductances of the two coils

**Special cases**:

- $k = 1$: Perfect coupling (all flux links both coils)
- $k = 0$: No coupling (no mutual flux)
- $0 < k < 1$: Partial coupling (realistic case)

**For two solenoids perfectly wound over each other**:

$$L_1 = \frac{\mu_0 N_1^2 A}{\ell}, \quad L_2 = \frac{\mu_0 N_2^2 A}{\ell}$$

$$\sqrt{L_1 L_2} = \sqrt{\frac{\mu_0 N_1^2 A}{\ell} \cdot \frac{\mu_0 N_2^2 A}{\ell}} = \frac{\mu_0 N_1 N_2 A}{\ell}$$

$$M = k\sqrt{L_1 L_2} = k \cdot \frac{\mu_0 N_1 N_2 A}{\ell}$$

For perfect coupling: $k = 1$, so $M = \frac{\mu_0 N_1 N_2 A}{\ell}$ ✓

## Memory Trick: “M for MAGIC”

**M**utual inductance enables **M**agnetic **A**ction **G**iving **I**nduced **C**urrent

One coil magically induces current in another without touching!

## Energy in Coupled Coils

When both coils carry current and are coupled:

$$U = \frac{1}{2}L_1I_1^2 + \frac{1}{2}L_2I_2^2 \pm MI_1I_2$$

**Sign convention**:

- **Positive (+)**: Magnetic fields aid each other (series aiding)
- **Negative (−)**: Magnetic fields oppose each other (series opposing)

**Maximum energy**: $U_{max} = \frac{1}{2}L_1I_1^2 + \frac{1}{2}L_2I_2^2 + MI_1I_2$

**Minimum energy**: $U_{min} = \frac{1}{2}L_1I_1^2 + \frac{1}{2}L_2I_2^2 - MI_1I_2$

## Series and Parallel Combinations

### Series Connection

**Series Aiding** (fields in same direction):

$$L_{eq} = L_1 + L_2 + 2M$$

**Series Opposing** (fields in opposite directions):

$$L_{eq} = L_1 + L_2 - 2M$$

**Experimental trick to find M**:

1. Measure $L_{aiding}$ and $L_{opposing}$
2. $L_{aiding} - L_{opposing} = 4M$
3. $M = \frac{L_{aiding} - L_{opposing}}{4}$

### Parallel Connection

**Parallel Aiding**:

$$\frac{1}{L_{eq}} = \frac{1}{L_1 + M} + \frac{1}{L_2 + M}$$

**Parallel Opposing**:

$$\frac{1}{L_{eq}} = \frac{1}{L_1 - M} + \frac{1}{L_2 - M}$$

**Special case** ($L_1 = L_2 = L$):

- Aiding: $L_{eq} = \frac{L + M}{2}$
- Opposing: $L_{eq} = \frac{L - M}{2}$

## Transformer Principle (Qualitative)

A transformer uses mutual inductance to change AC voltage levels.

**Primary coil** (input): $N_1$ turns, voltage $V_1$, current $I_1$
**Secondary coil** (output): $N_2$ turns, voltage $V_2$, current $I_2$

**Ideal transformer** (100% coupling, no losses):

$$\frac{V_2}{V_1} = \frac{N_2}{N_1}$$

$$\frac{I_2}{I_1} = \frac{N_1}{N_2}$$

**Power conservation**: $V_1I_1 = V_2I_2$

**Step-up**: $N_2 > N_1$ → $V_2 > V_1$ (increase voltage, decrease current)
**Step-down**: $N_2 < N_1$ → $V_2 < V_1$ (decrease voltage, increase current)

More details in [transformers.md](../transformers/index.md).

## Common Mistakes Students Make

❌ **Mistake 1**: Assuming $M = \sqrt{L_1 L_2}$ always
✅ **Reality**: $M = k\sqrt{L_1 L_2}$ where $k \leq 1$

❌ **Mistake 2**: Forgetting that M depends on orientation
✅ **Reality**: Relative position and alignment critically affect M

❌ **Mistake 3**: Using wrong sign in energy formula
✅ **Reality**: Check if fields aid (+) or oppose (−)

❌ **Mistake 4**: Thinking mutual inductance works with DC
✅ **Reality**: Current must be **changing** to induce EMF

❌ **Mistake 5**: Confusing $N_1N_2$ with $(N_1 + N_2)$ or $N_1^2$
✅ **Reality**: $M \propto N_1N_2$ (product, not sum or square)

## Practice Problems

### Level 1: JEE Main (Basics)

**Problem 1.1**: Two coils have self inductances $L_1 = 2$ mH and $L_2 = 8$ mH. They are perfectly coupled (k = 1). Find their mutual inductance.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L_1 = 2$ mH, $L_2 = 8$ mH, $k = 1$</p><p>Mutual inductance:</p>$$M = k\sqrt{L_1 L_2} = 1 \times \sqrt{2 \times 8} = \sqrt{16} = 4 \text{ mH}$$<p><strong>Answer: 4 mH</strong></p></div></details>

**Problem 1.2**: A solenoid of 500 turns, length 50 cm, and area 10 cm² has another coil of 100 turns wound over it. Calculate mutual inductance.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $N_1 = 500$, $\ell = 0.5$ m, $A = 10 \times 10^{-4} = 10^{-3}$ m², $N_2 = 100$</p><p>Mutual inductance:</p>$$M = \frac{\mu_0 N_1 N_2 A}{\ell} = \frac{4\pi \times 10^{-7} \times 500 \times 100 \times 10^{-3}}{0.5}$$

$$M = \frac{4\pi \times 10^{-7} \times 5 \times 10^4 \times 10^{-3}}{0.5}$$

$$M = \frac{4\pi \times 5 \times 10^{-6}}{0.5} = \frac{20\pi \times 10^{-6}}{0.5}$$

$$M = 40\pi \times 10^{-6} = 1.256 \times 10^{-4} \text{ H} = 0.126 \text{ mH}$$<p><strong>Answer: 0.126 mH</strong></p></div></details>

### Level 2: JEE Advanced (Application)

**Problem 2.1**: Current in a coil changes from 0 to 10 A in 0.2 s. If mutual inductance with a nearby coil is 0.5 H, find the induced EMF in the second coil.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $\Delta I = 10 - 0 = 10$ A, $\Delta t = 0.2$ s, $M = 0.5$ H</p><p>Rate of change of current:</p>$$\frac{dI}{dt} = \frac{\Delta I}{\Delta t} = \frac{10}{0.2} = 50 \text{ A/s}$$<p>Induced EMF:</p>$$|\mathcal{E}| = M\frac{dI}{dt} = 0.5 \times 50 = 25 \text{ V}$$<p><strong>Answer: 25 V</strong></p><p><strong>Direction</strong>: By Lenz’s law, opposes the increase in current.</p></div></details>

**Problem 2.2**: Two coils with $L_1 = 4$ H and $L_2 = 9$ H are connected in series. When fields aid, total inductance is 25 H. Find:
(a) Mutual inductance
(b) Coefficient of coupling
(c) Inductance when fields oppose

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L_1 = 4$ H, $L_2 = 9$ H, $L_{aiding} = 25$ H</p><p><strong>(a) Mutual inductance</strong>:
For series aiding:</p>$$L_{aiding} = L_1 + L_2 + 2M$$<p></p>$$25 = 4 + 9 + 2M$$<p></p>$$25 = 13 + 2M$$<p></p>$$2M = 12$$<p></p>$$M = 6 \text{ H}$$<p><strong>(b) Coefficient of coupling</strong>:</p>$$M = k\sqrt{L_1 L_2}$$<p></p>$$6 = k\sqrt{4 \times 9} = k \times 6$$<p></p>$$k = 1$$<p><strong>Perfect coupling!</strong></p><p><strong>(c) Series opposing</strong>:</p>$$L_{opposing} = L_1 + L_2 - 2M = 4 + 9 - 12 = 1 \text{ H}$$<p><strong>Answers</strong>: (a) 6 H, (b) k = 1, (c) 1 H</p></div></details>

### Level 3: JEE Advanced (Challenging)

**Problem 3.1**: Two coils A and B have self inductances $L_A = 1$ H and $L_B = 4$ H. When a current of 2 A flows through A, total flux linkage in B is 6 Wb-turns. Find:
(a) Mutual inductance
(b) Coefficient of coupling
(c) If current in A changes at 5 A/s, what EMF is induced in B?

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L_A = 1$ H, $L_B = 4$ H, $I_A = 2$ A, $N_B\Phi_{BA} = 6$ Wb-turns</p><p><strong>(a) Mutual inductance</strong>:</p>$$M = \frac{N_B\Phi_{BA}}{I_A} = \frac{6}{2} = 3 \text{ H}$$<p><strong>(b) Coefficient of coupling</strong>:</p>$$M = k\sqrt{L_A L_B}$$<p></p>$$3 = k\sqrt{1 \times 4} = 2k$$<p></p>$$k = \frac{3}{2} = 1.5$$<p><strong>Wait!</strong> $k &gt; 1$ is impossible! Let’s check the problem&amp;mldr;</p><p><strong>Error in problem</strong>: The given flux linkage is too high for the given inductances. Maximum possible M:</p>$$M_{max} = \sqrt{L_A L_B} = \sqrt{1 \times 4} = 2 \text{ H}$$<p>But calculated M = 3 H &gt; 2 H, which violates $M \leq \sqrt{L_1L_2}$.</p><p><strong>Assuming problem meant</strong> total flux linkage = 4 Wb-turns:</p>$$M = \frac{4}{2} = 2 \text{ H}$$<p></p>$$k = \frac{2}{2} = 1$$<p>✓ (perfect coupling)</p><p><strong>(c) Induced EMF</strong>:</p>$$\mathcal{E}_B = M\frac{dI_A}{dt} = 2 \times 5 = 10 \text{ V}$$<p><strong>Answers</strong> (corrected): (a) 2 H, (b) k = 1, (c) 10 V</p></div></details>

**Problem 3.2**: Two identical coils, each of inductance L, are placed such that their mutual inductance is M. They are connected:
(i) In series with fields aiding
(ii) In series with fields opposing
(iii) In parallel with fields aiding

Find equivalent inductance in each case.

<details class="details-block"><summary class="details-summary">Solution</summary><div class="details-content"><p>Given: $L_1 = L_2 = L$, mutual inductance = $M$</p><p><strong>(i) Series aiding</strong>:</p>$$L_{eq} = L_1 + L_2 + 2M = L + L + 2M = 2L + 2M = 2(L + M)$$<p><strong>(ii) Series opposing</strong>:</p>$$L_{eq} = L_1 + L_2 - 2M = L + L - 2M = 2L - 2M = 2(L - M)$$<p><strong>(iii) Parallel aiding</strong>:
For identical coils in parallel aiding:</p>$$L_{eq} = \frac{L + M}{2}$$<p><strong>Derivation</strong>:</p>$$\frac{1}{L_{eq}} = \frac{1}{L_1 + M} + \frac{1}{L_2 + M}$$<p>Since $L_1 = L_2 = L$:</p>$$\frac{1}{L_{eq}} = \frac{1}{L + M} + \frac{1}{L + M} = \frac{2}{L + M}$$

$$L_{eq} = \frac{L + M}{2}$$<p><strong>Answers</strong>:</p><ul><li>(i) $2(L + M)$</li><li>(ii) $2(L - M)$</li><li>(iii) $\frac{L + M}{2}$</li></ul></div></details>

## Applications of Mutual Inductance

1. **Transformers**: Voltage conversion in power distribution
2. **Wireless Charging**: Phones, electric toothbrushes, EVs
3. **Induction Heating**: Industrial heating, induction cooktops
4. **Metal Detectors**: Detect conducting objects
5. **RFID Tags**: Contactless identification and payment
6. **Ignition Coils**: Generate high voltage in car engines
7. **Coupled Inductors**: Filter circuits, switching power supplies

## Real-World Example: Wireless Phone Charging

**How it works**:

1. **Transmitter coil** (in charging pad): AC current creates changing magnetic field
2. **Receiver coil** (in phone): Changing field induces AC voltage
3. **Rectifier circuit**: Converts AC to DC to charge battery
4. **Efficiency**: Depends on coupling coefficient k
   - Good alignment: k ≈ 0.5-0.7 (50-70% efficiency)
   - Poor alignment: k ≈ 0.1-0.3 (low efficiency, slow charging)

**Why it gets hot**: Energy lost in resistance and misalignment

## Connection to Other Chapters

- [**Self Inductance**](../self-inductance/index.md): M couples two coils; L is self-coupling
- [**Faraday’s Law**](../faradays-law/index.md): Basis of mutual induction
- [**Transformers**](../transformers/index.md): Primary application of mutual inductance
- [**AC Circuits**](../ac-circuits/index.md): Coupled coils in AC analysis

## Key Takeaways

✓ Mutual inductance enables energy transfer between coils
✓ $M_{12} = M_{21} = M$ (reciprocity)
✓ $M = k\sqrt{L_1L_2}$ where $0 \leq k \leq 1$
✓ For solenoids: $M = \frac{\mu_0 N_1 N_2 A}{\ell}$
✓ Induced EMF: $\mathcal{E}_2 = -M\frac{dI_1}{dt}$
✓ Series aiding: $L_{eq} = L_1 + L_2 + 2M$
✓ Series opposing: $L_{eq} = L_1 + L_2 - 2M$
✓ Perfect coupling: $k = 1$ (all flux links both coils)

## Formula Summary

**Definition**:

$$M = \frac{N_2\Phi_{21}}{I_1} = \frac{N_1\Phi_{12}}{I_2}$$

**Coupling coefficient**:

$$M = k\sqrt{L_1 L_2}, \quad 0 \leq k \leq 1$$

**Solenoid pair**:

$$M = \frac{\mu_0 N_1 N_2 A}{\ell}$$

**Induced EMF**:

$$\mathcal{E}_2 = -M\frac{dI_1}{dt}$$

**Series combinations**:

- Aiding: $L_{eq} = L_1 + L_2 + 2M$
- Opposing: $L_{eq} = L_1 + L_2 - 2M$

**Energy**:

$$U = \frac{1}{2}L_1I_1^2 + \frac{1}{2}L_2I_2^2 \pm MI_1I_2$$

**Transformer (ideal)**:

$$\frac{V_2}{V_1} = \frac{N_2}{N_1}, \quad \frac{I_2}{I_1} = \frac{N_1}{N_2}$$

---

*Next Topic*: [AC Circuits](../ac-circuits/index.md) - AC voltage, current, and phasors in resistive and reactive circuits

From TestGuru · our mock-test platform

## You've read Mutual Inductance - Wireless Energy Transfer.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electromagnetic-induction&tg_exam=jee-main&tg_page=%2Fphysics%2Felectromagnetic-induction%2Fmutual-inductance%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electromagnetic-induction/mutual-inductance/",this.page.identifier="/physics/electromagnetic-induction/mutual-inductance/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423227567319"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423227567319")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="emInduction" id="anim-emInduction-1795396423227901549"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-emInduction-1795396423227901549")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electromagnetic-induction/mutual-inductance/](https://jeenotes.in/physics/electromagnetic-induction/mutual-inductance/) · raw HTML: `offline/physics/electromagnetic-induction/mutual-inductance/index.html`_
