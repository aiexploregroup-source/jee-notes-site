---
title: "Semiconductors and Band Theory"
source: "https://jeenotes.in/physics/electronic-devices/semiconductors/"
description: "Master intrinsic and extrinsic semiconductors, band theory, and doping for JEE Physics with smartphone processor analogy"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 9"
html: "../../../../offline/physics/electronic-devices/semiconductors/index.html"
extracted: "2026-11-23"
---

> Master intrinsic and extrinsic semiconductors, band theory, and doping for JEE Physics with smartphone processor analogy

## Prerequisites

Before studying this topic, make sure you understand:

- [Atomic Structure](../../atoms-nuclei/index.md) - Energy levels and electron configuration
- [Current Electricity](../../current-electricity/index.md) - Basic concepts of conductors and resistivity

## The Hook: What Powers Your Smartphone?

> **★ Key point · Connect: Your Phone → Semiconductors**
>
> Your smartphone has **over 10 billion transistors** in its processor - all made from semiconductors! A single grain of sand-sized chip contains more transistors than all the people who ever lived on Earth.
>
> **Intriguing fact:** Pure silicon is actually a poor conductor. But by adding just **1 impurity atom per 100 million silicon atoms**, engineers create the processors that run Instagram, YouTube, and yes - even JEE prep apps!
>
> How does adding such tiny amounts of “dirt” transform a poor conductor into the brain of modern technology? Let’s discover the science!

## Interactive Demo

Visualize energy bands and electron transitions in semiconductors:

---

## The Core Concept: What Are Semiconductors?

### The Big Picture

Materials are classified by their ability to conduct electricity:

**Conductors** (Metals like Copper):

- Resistivity: $\rho \sim 10^{-8}$ Ω·m
- Lots of free electrons
- Conductivity increases with decreasing temperature

**Insulators** (Rubber, Glass):

- Resistivity: $\rho \sim 10^{12}$ - $10^{16}$ Ω·m
- Almost no free electrons
- Poor conductors at all temperatures

**Semiconductors** (Silicon, Germanium):

- Resistivity: $\rho \sim 10^{-3}$ to $10^{3}$ Ω·m
- Conductivity **increases with temperature** (opposite to metals!)
- Conductivity can be controlled by adding impurities

> **◐ In simple terms · The Smartphone Connection**
>
> Your phone’s processor uses **billions of tiny semiconductor switches** (transistors) that can turn on and off billions of times per second. Each time you tap your screen, millions of these switches flip their states!
>
> The magic? By controlling the impurity atoms, engineers can make semiconductors conduct in specific patterns - creating the logic gates that form computer processors.

---

## Band Theory: The Foundation

### Energy Bands in Solids

When atoms come together to form a solid, individual atomic energy levels split into **bands**:

1. **Valence Band (VB):**

   - Filled with electrons at 0 K
   - Highest occupied energy band
   - Electrons here are bound to atoms
2. **Conduction Band (CB):**

   - Empty at 0 K
   - Electrons here are free to move
   - Responsible for electrical conduction
3. **Band Gap ($E_g$):**

   - Energy difference between VB and CB
   - Forbidden energy region
   - Determines electrical properties

### Classification by Band Gap

| Material | Band Gap ($E_g$) | Example |
| --- | --- | --- |
| **Conductors** | No band gap (CB and VB overlap) | Copper, Aluminum |
| **Semiconductors** | Small gap ($E_g < 3$ eV) | Si: 1.1 eV, Ge: 0.7 eV |
| **Insulators** | Large gap ($E_g > 3$ eV) | Diamond: 5.4 eV |

> **★ Key point · Why Temperature Matters**
>
> **At 0 K:** All electrons in valence band → semiconductor acts as insulator
>
> **At room temperature:** Thermal energy $kT \approx 0.026$ eV gives some electrons enough energy to jump the gap!
>
> For Silicon ($E_g = 1.1$ eV):
>
> - Not all electrons can jump (1.1 eV » 0.026 eV)

> - But enough electrons jump to make it conduct slightly

> - Higher temperature → more electrons jump → better conductivity
>
> **This is why semiconductors have NEGATIVE temperature coefficient** (unlike metals!)

---

## Intrinsic Semiconductors

### Definition

**Intrinsic semiconductor** = Pure semiconductor with no impurities

Characteristics:

- Number of free electrons = Number of holes
- $n_i = $ intrinsic carrier concentration
- At room temperature: $n_i \approx 10^{10}$ carriers/cm³ (very small!)

### How Conduction Happens

1. **Electron generation:** Thermal energy breaks covalent bond
2. **Free electron** created in conduction band
3. **Hole** (vacancy) left behind in valence band
4. Both electron and hole contribute to current!

$$\boxed{n_i = p_i}$$

where:

- $n_i$ = intrinsic electron concentration
- $p_i$ = intrinsic hole concentration

### Intrinsic Carrier Concentration

$$\boxed{n_i^2 = A T^3 e^{-E_g/kT}}$$

where:

- $A$ = constant depending on material
- $T$ = absolute temperature
- $E_g$ = band gap energy
- $k$ = Boltzmann constant ($8.62 \times 10^{-5}$ eV/K)

**Key insight:** $n_i$ increases exponentially with temperature!

### Conductivity of Intrinsic Semiconductor

$$\boxed{\sigma_i = n_i e (\mu_e + \mu_h)}$$

where:

- $\mu_e$ = electron mobility
- $\mu_h$ = hole mobility
- $e$ = electronic charge

For Silicon at 300 K:

- $\mu_e \approx 0.14$ m²/(V·s)
- $\mu_h \approx 0.05$ m²/(V·s)
- Electrons are about **3 times more mobile** than holes!

---

## Extrinsic Semiconductors: The Game Changer

### What is Doping?

**Doping** = Deliberately adding impurity atoms to control conductivity

**Key numbers:**

- Pure Si: $10^{22}$ atoms/cm³
- Typical doping: **1 impurity per $10^8$ Si atoms**
- But conductivity increases by **factor of 1000**!

This is like adding 1 drop of ink to 10 million drops of water - tiny amount, huge effect!

### n-Type Semiconductors (Electron Rich)

**Dopant:** Group V elements (Phosphorus, Arsenic, Antimony)

- 5 valence electrons
- 4 bond with Si, **1 extra electron** becomes free

**Result:**

- Majority carriers: **Electrons** ($n_n$)
- Minority carriers: Holes ($p_n$)
- $n_n >> p_n$

**Key relation:**

$$\boxed{n_n \approx N_D}$$

where $N_D$ = donor concentration

**Mass action law still holds:**

$$\boxed{n_n \times p_n = n_i^2}$$

So if $n_n$ increases, $p_n$ decreases!

### p-Type Semiconductors (Hole Rich)

**Dopant:** Group III elements (Boron, Aluminum, Gallium)

- 3 valence electrons
- Creates **hole** (electron vacancy)

**Result:**

- Majority carriers: **Holes** ($p_p$)
- Minority carriers: Electrons ($n_p$)
- $p_p >> n_p$

**Key relation:**

$$\boxed{p_p \approx N_A}$$

where $N_A$ = acceptor concentration

**Mass action law:**

$$\boxed{n_p \times p_p = n_i^2}$$

> **◐ In simple terms · The Processor Connection**
>
> Modern processors use **billions of n-type and p-type regions** placed next to each other. The boundary between n-type and p-type forms a **p-n junction** - the basis of diodes and transistors!
>
> By arranging these junctions cleverly, engineers create:
>
> - **Diodes** (one p-n junction) - Allow current in one direction

> - **Transistors** (two junctions) - Act as electronic switches

> - **Integrated circuits** - Billions of transistors on a chip!

---

## Important Formulas Summary

### For Intrinsic Semiconductor

$$\boxed{n_i = p_i}$$

$$\boxed{\sigma_i = n_i e (\mu_e + \mu_h)}$$

### For n-Type Semiconductor

$$\boxed{n_n \approx N_D \text{ (majority)}}$$

$$\boxed{p_n = \frac{n_i^2}{N_D} \text{ (minority)}}$$

$$\boxed{\sigma_n = n_n e \mu_e + p_n e \mu_h \approx N_D e \mu_e}$$

### For p-Type Semiconductor

$$\boxed{p_p \approx N_A \text{ (majority)}}$$

$$\boxed{n_p = \frac{n_i^2}{N_A} \text{ (minority)}}$$

$$\boxed{\sigma_p = p_p e \mu_h + n_p e \mu_e \approx N_A e \mu_h}$$

### Universal Relation (Mass Action Law)

$$\boxed{n \times p = n_i^2}$$

This holds for **ALL** semiconductors in thermal equilibrium!

---

## Memory Tricks & Patterns

### Mnemonic for Semiconductor Types

**“n-type has Negative charge carriers”** → Electrons (negative)

**“p-type has Positive holes”** → Holes (absence of electrons)

### Dopant Groups Memory

**“5 gives electrons, 3 takes electrons”**

- Group **V** (5 valence) → **Donor** → n-type
- Group **III** (3 valence) → **Acceptor** → p-type

### Pattern Recognition

1. **Temperature coefficient:**

   - Metals: Resistance increases with temperature (+ve coefficient)
   - Semiconductors: Resistance decreases with temperature (-ve coefficient)
2. **Typical values to memorize:**

   - Si band gap: $E_g = 1.1$ eV
   - Ge band gap: $E_g = 0.7$ eV
   - Room temperature $kT \approx 0.026$ eV
   - Si intrinsic concentration: $n_i \approx 1.5 \times 10^{10}$ cm⁻³ at 300 K
3. **Doping ratio:**

   - Heavy doping: 1 impurity per $10^6$ atoms
   - Medium doping: 1 impurity per $10^8$ atoms
   - Light doping: 1 impurity per $10^{10}$ atoms

---

## When to Use This

> **★ Key point · Decision Tree**
>
> **Use intrinsic semiconductor formulas when:**
>
> - Problem states “pure silicon” or “intrinsic”

> - Asked about temperature dependence of pure semiconductor

> - Need to find $n_i$ for use in mass action law
>
> **Use n-type formulas when:**
>
> - Dopant is Group V (P, As, Sb)

> - Problem gives donor concentration $N_D$

> - Majority carriers are electrons
>
> **Use p-type formulas when:**
>
> - Dopant is Group III (B, Al, Ga)

> - Problem gives acceptor concentration $N_A$

> - Majority carriers are holes
>
> **Use mass action law ($np = n_i^2$) when:**
>
> - Given majority carrier concentration, find minority

> - Comparing intrinsic and extrinsic semiconductors

> - ANY problem involving carrier concentrations!

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Confusing n-type with Negative Charge**
>
> **Wrong thinking:** “n-type semiconductor is negatively charged”
>
> **Reality:**
>
> - n-type is **electrically neutral** overall

> - More free electrons, but also more positive ions

> - Extra electrons exactly balance positive donor ions
>
> **JEE Trap:** Questions asking “net charge on n-type semiconductor?” Answer: **ZERO** (unless stated otherwise)!

> **⚠ Trap #2: Forgetting Minority Carriers**
>
> **Wrong:** “In n-type, only electrons conduct”
>
> **Correct:**
>
> - Majority: electrons ($n_n \approx N_D$)

> - Minority: holes ($p_n = n_i^2/N_D$)

> - **Both contribute to current** (but electrons dominate)
>
> **Why it matters:** Minority carriers are crucial in p-n junctions and transistors!

> **⚠ Trap #3: Temperature Dependence Confusion**
>
> **Wrong:** “Doped semiconductor conductivity is independent of temperature”
>
> **Correct:**

> At low doping or high temperature:
>
> - Intrinsic carriers can become significant

> - Temperature coefficient can change sign!
>
> **Rule of thumb:**
>
> - Extrinsic region (low T): $\sigma \approx$ constant

> - Intrinsic region (high T): $\sigma$ increases exponentially with T

---

## Practice Problems

### Level 1: Foundation (NCERT/Basic)

> **↗ Connection · Problem 1.1**
>
> Silicon has 5 × 10²² atoms/cm³. If it’s doped with phosphorus (1 atom per 10⁸ Si atoms), find the electron concentration in the doped semiconductor.
>
> **Solution:**
>
> Phosphorus (Group V) is a donor → creates n-type semiconductor
>
> Donor concentration:
>
> $$N_D = \frac{5 \times 10^{22}}{10^8} = 5 \times 10^{14} \text{ atoms/cm}^3$$
>
> For n-type: $n_n \approx N_D$
>
> $$n_n = 5 \times 10^{14} \text{ electrons/cm}^3$$
>
> **Answer:** $5 \times 10^{14}$ electrons/cm³
>
> **Insight:** This is $10^4$ times more than intrinsic Si ($n_i \approx 10^{10}$ cm⁻³)!

> **↗ Connection · Problem 1.2**
>
> For the above n-type silicon, find the hole concentration if $n_i = 1.5 \times 10^{10}$ cm⁻³.
>
> **Solution:**
>
> Using mass action law: $n_n \times p_n = n_i^2$
>
> $$p_n = \frac{n_i^2}{n_n} = \frac{(1.5 \times 10^{10})^2}{5 \times 10^{14}}$$

$$p_n = \frac{2.25 \times 10^{20}}{5 \times 10^{14}} = 4.5 \times 10^5 \text{ holes/cm}^3$$
>
> **Answer:** $4.5 \times 10^5$ holes/cm³
>
> **Key insight:** Minority carriers ($p_n$) are $10^9$ times less than majority carriers ($n_n$)!

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A semiconductor has electron and hole mobilities of 0.36 m²/(V·s) and 0.14 m²/(V·s) respectively. If it’s doped with 10²¹ donors/m³, find its conductivity. Given: $n_i = 1.5 \times 10^{16}$ m⁻³.
>
> **Solution:**
>
> For n-type: $n_n \approx N_D = 10^{21}$ m⁻³
>
> Minority carriers: $p_n = \frac{n_i^2}{N_D} = \frac{(1.5 \times 10^{16})^2}{10^{21}} = 2.25 \times 10^{11}$ m⁻³
>
> Conductivity:
>
> $$\sigma = n_n e \mu_e + p_n e \mu_h$$
>
> Since $n_n >> p_n$:
>
> $$\sigma \approx n_n e \mu_e$$

$$\sigma = 10^{21} \times 1.6 \times 10^{-19} \times 0.36$$

$$\sigma = 57.6 \text{ S/m}$$
>
> **Answer:** σ = 57.6 S/m
>
> **JEE Insight:** Minority carrier contribution is negligible when doping is heavy!

> **↗ Connection · Problem 2.2**
>
> Pure germanium has resistivity 0.6 Ω·m at 27°C. When doped, its resistivity drops to 0.003 Ω·m. Find the ratio of conductivity (doped/pure).
>
> **Solution:**
>
> $$\sigma = \frac{1}{\rho}$$

$$\frac{\sigma_{doped}}{\sigma_{intrinsic}} = \frac{\rho_{intrinsic}}{\rho_{doped}}$$

$$= \frac{0.6}{0.003} = 200$$
>
> **Answer:** Conductivity increases by factor of **200**
>
> **Key concept:** Even small doping dramatically increases conductivity!

> **↗ Connection · Problem 2.3**
>
> The energy gap of silicon is 1.1 eV. What fraction of electrons can jump from valence to conduction band at 300 K? (Given: $kT = 0.026$ eV)
>
> **Solution:**
>
> Fraction of electrons with energy > $E_g$:
>
> $$f \propto e^{-E_g/kT}$$

$$f \propto e^{-1.1/0.026} = e^{-42.3}$$

$$f \approx 10^{-18}$$
>
> **Answer:** About **1 in 10¹⁸** electrons
>
> **Insight:** Very few electrons can jump the gap thermally - that’s why pure Si is poor conductor!

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> An intrinsic semiconductor has intrinsic concentration $n_i$. It’s doped such that majority carrier concentration is $10^4 n_i$. Find the factor by which conductivity increases if $\mu_e = 2\mu_h$.
>
> **Solution:**
>
> **Intrinsic conductivity:**
>
> $$\sigma_i = n_i e (\mu_e + \mu_h) = n_i e (2\mu_h + \mu_h) = 3 n_i e \mu_h$$
>
> **Extrinsic (assume n-type):**
>
> $$n_n = 10^4 n_i$$

$$p_n = \frac{n_i^2}{10^4 n_i} = \frac{n_i}{10^4}$$

$$\sigma_e = n_n e \mu_e + p_n e \mu_h$$

$$= 10^4 n_i e (2\mu_h) + \frac{n_i}{10^4} e \mu_h$$

$$\approx 2 \times 10^4 n_i e \mu_h$$
>
> Ratio:
>
> $$\frac{\sigma_e}{\sigma_i} = \frac{2 \times 10^4 n_i e \mu_h}{3 n_i e \mu_h} = \frac{2 \times 10^4}{3} \approx 6667$$
>
> **Answer:** Conductivity increases by factor of **~6700**
>
> **Advanced concept:** Effect of doping is amplified by higher electron mobility!

> **↗ Connection · Problem 3.2**
>
> A semiconductor has equal concentration of donors and acceptors ($N_D = N_A = 10^{16}$ cm⁻³). Find electron and hole concentrations if $n_i = 10^{10}$ cm⁻³.
>
> **Solution:**
>
> This is **compensated semiconductor**!
>
> Net doping: $N_D - N_A = 0$
>
> When donors and acceptors are equal, they cancel out:
>
> - Each donor electron fills an acceptor hole

> - Result: Behaves like intrinsic!
>
> $$n = p = n_i = 10^{10} \text{ cm}^{-3}$$
>
> **Answer:** $n = p = 10^{10}$ cm⁻³ (intrinsic behavior)
>
> **Advanced concept:** Complete compensation makes extrinsic semiconductor behave intrinsic!

---

## Quick Revision Box

| Type | Dopant | Majority | Minority | $\sigma$ formula |
| --- | --- | --- | --- | --- |
| Intrinsic | None | $n_i$ (e⁻) | $n_i$ (h⁺) | $n_i e(\mu_e + \mu_h)$ |
| n-type | Group V | $N_D$ (e⁻) | $n_i^2/N_D$ (h⁺) | $N_D e \mu_e$ |
| p-type | Group III | $N_A$ (h⁺) | $n_i^2/N_A$ (e⁻) | $N_A e \mu_h$ |

**Universal:** $n \times p = n_i^2$ (always!)

---

## JEE Strategy: High-Yield Points

> **★ Key point · What JEE Loves to Test**
>
> 1. **Mass action law** ($np = n_i^2$) - appears in 60% of semiconductor problems!
>
>    - Given majority, find minority

> 2. **Identifying dopant type:**
>
>    - Group V (P, As, Sb) → n-type

>    - Group III (B, Al, Ga) → p-type

> 3. **Temperature dependence:**
>
>    - Semiconductors: resistance ↓ with temperature ↑

>    - Opposite to metals!

> 4. **Numerical values to memorize:**
>
>    - Si: $E_g = 1.1$ eV

>    - Ge: $E_g = 0.7$ eV

>    - $kT$ at 300K = 0.026 eV

>    - Si: $n_i = 1.5 \times 10^{10}$ cm⁻³

> 5. **Conductivity calculation:**
>
>    - For heavy doping: minority carriers negligible

>    - $\sigma \approx N_D e \mu_e$ (n-type) or $N_A e \mu_h$ (p-type)
>
> **Time-saving trick:** In most JEE problems, minority carriers can be ignored when calculating conductivity if doping is » $n_i$

---

## Related Topics

### Within Electronic Devices

- [p-n Junction](../pn-junction/index.md) - What happens when p and n regions meet
- [Diode](../diode-rectifier/index.md) - Using p-n junction for rectification
- [Transistor](../transistor/index.md) - Two p-n junctions working together

### Connected Chapters

- [Current Electricity](../../current-electricity/drift-velocity/index.md) - Understanding carrier motion
- [Atomic Structure](../../atoms-nuclei/index.md) - Energy levels and band formation
- [Electromagnetic Induction](../../electromagnetic-induction/index.md) - How semiconductors respond to changing fields

### Real-world Applications

- Smartphone processors (billions of transistors)
- LED lights (light-emitting semiconductors)
- Solar cells (converting light to electricity)
- Computer memory (storing data in semiconductor circuits)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Semiconductors have moderate conductivity that increases with temperature** - opposite to metals, making them unique and useful

> 2. **Band gap determines semiconductor behavior** - Si (1.1 eV) and Ge (0.7 eV) have perfect gaps for electronics at room temperature

> 3. **Intrinsic semiconductors have equal electrons and holes** ($n_i = p_i$) - but very few carriers overall, so poor conductors

> 4. **Doping transforms semiconductors** - adding 1 impurity per 10⁸ atoms increases conductivity 1000×!
>
>    - n-type: Group V donors → excess electrons

>    - p-type: Group III acceptors → excess holes

> 5. **Mass action law $np = n_i^2$ is universal** - works for intrinsic and extrinsic, the most important formula in semiconductor physics!

> 6. **Your smartphone’s brain contains >10 billion semiconductor switches** - all based on controlling these tiny impurity concentrations!
>
> **“From sand to smartphone: By adding just 1 impurity atom per 100 million, we transformed silicon into the most important material of the digital age!”**

---

From TestGuru · our mock-test platform

## You've read Semiconductors and Band Theory.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electronic-devices&tg_exam=jee-main&tg_page=%2Fphysics%2Felectronic-devices%2Fsemiconductors%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electronic-devices/semiconductors/",this.page.identifier="/physics/electronic-devices/semiconductors/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="semiconductorBands" id="anim-semiconductorBands-1795396423312819314"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-semiconductorBands-1795396423312819314")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electronic-devices/semiconductors/](https://jeenotes.in/physics/electronic-devices/semiconductors/) · raw HTML: `offline/physics/electronic-devices/semiconductors/index.html`_
