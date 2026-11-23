---
title: "Stability of Coordination Compounds"
source: "https://jeenotes.in/chemistry/coordination-compounds/stability-constants/"
description: "Master stability constants, chelate effect, factors affecting stability, and thermodynamic aspects of coordination compounds for JEE."
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Chemistry"
position: "/ Topic 6 of 9"
html: "../../../../offline/chemistry/coordination-compounds/stability-constants/index.html"
extracted: "2026-11-23"
---

> Master stability constants, chelate effect, factors affecting stability, and thermodynamic aspects of coordination compounds for JEE.

## Introduction

Not all coordination compounds are created equal! Some are rock-solid and persist in solution for years, while others fall apart the moment you make them. Why does [Fe(CN)₆]⁴⁻ remain stable in solution while [FeF₆]³⁻ readily decomposes? Understanding stability is crucial for applications ranging from medicine to metallurgy.

> **★ Key point · EDTA: The Medical Lifesaver**
>
> Ever heard of lead poisoning treatment? Doctors use **EDTA** (a hexadentate ligand) to chelate Pb²⁺ ions in the bloodstream! EDTA forms such a stable complex with lead that it literally pulls the toxic metal out of your body tissues. The EDTA-Pb complex is then safely excreted through urine. The stability constant of [Pb(EDTA)]²⁻ is 10¹⁸ - meaning once EDTA grabs lead, it almost never lets go! This same principle is used to treat heavy metal poisoning from mercury, cadmium, and other toxic metals.

---

## Equilibrium in Complex Formation

### Stepwise Formation

When ligands add to a metal ion, they add **one at a time**:

$$M + L \rightleftharpoons ML \quad K_1 = \frac{[ML]}{[M][L]}$$

$$ML + L \rightleftharpoons ML_2 \quad K_2 = \frac{[ML_2]}{[ML][L]}$$

$$ML_2 + L \rightleftharpoons ML_3 \quad K_3 = \frac{[ML_3]}{[ML_2][L]}$$

And so on&mldr;

**K₁, K₂, K₃&mldr;** are called **stepwise formation constants** or **stability constants**.

### Overall Formation Constant

The **overall stability constant** (β_n) is the product of stepwise constants:

$$\beta_n = K_1 \times K_2 \times K_3 \times ... \times K_n$$

### Interactive Demo: Visualize Equilibrium Constants

Watch how stability constants affect complex formation and dissociation in real-time.

**Example:** For [Cu(NH₃)₄]²⁺

$$Cu^{2+} + 4NH_3 \rightleftharpoons [Cu(NH_3)_4]^{2+}$$

$$\beta_4 = K_1 \times K_2 \times K_3 \times K_4$$

> **★ Key point · Stability Interpretation**
>
> **Large β (>10⁸):** Very stable complex

> **Medium β (10⁴-10⁸):** Moderately stable

> **Small β (<10⁴):** Weak complex, easily dissociates

---

## Dissociation vs Formation Constants

### Dissociation Constant (Instability Constant)

The **reverse** of formation:

$$ML_n \rightleftharpoons M + nL$$

$$K_d = \frac{[M][L]^n}{[ML_n]} = \frac{1}{\beta_n}$$

**Relationship:**

$$K_d \times \beta_n = 1$$

### Comparison

| Property | K_d (Dissociation) | β_n (Formation) |
| --- | --- | --- |
| **Meaning** | Tendency to break apart | Tendency to form |
| **Large value** | Unstable complex | Stable complex |
| **Small value** | Stable complex | Unstable complex |
| **Relationship** | K_d = 1/β_n | β_n = 1/K_d |

---

## Factors Affecting Stability

### 1. Nature of Metal Ion

#### Charge Density Effect

**Higher charge and smaller size → Greater stability**

$$\text{Charge density} = \frac{\text{Charge}}{\text{Radius}}$$

**Example:** Stability order for same ligand

$$M^{3+} > M^{2+} > M^+$$

$$Al^{3+} > Mg^{2+} > Na^+$$

**For same group, higher period (larger size) → Lower stability**

$$Ni^{2+} > Pd^{2+} > Pt^{2+}$$

(wait, this is WRONG for d⁸!)

Actually:

$$Pt^{2+} > Pd^{2+} > Ni^{2+}$$

(greater d orbital participation)

#### Irving-Williams Series

For **first-row transition metals** with the **same ligand**:

$$\boxed{Mn^{2+} < Fe^{2+} < Co^{2+} < Ni^{2+} < Cu^{2+} > Zn^{2+}}$$

**Explanation:**

- Increasing stability from Mn²⁺ to Cu²⁺ (increasing charge density, CFSE)
- Cu²⁺ maximum due to d⁹ configuration (Jahn-Teller effect adds extra stabilization)
- Zn²⁺ drops (d¹⁰, no CFSE)

> **◐ In simple terms · CFSE Contribution**
>
> **Crystal Field Stabilization Energy** significantly affects complex stability:
>
> - d³ (Cr³⁺): CFSE = -1.2Δ₀ → Very stable

> - d⁵ (high spin Mn²⁺): CFSE = 0 → Less stable

> - d⁰ (Sc³⁺): CFSE = 0 → Lower stability

> - d¹⁰ (Zn²⁺): CFSE = 0 → Lower stability

---

### 2. Nature of Ligand

#### Basicity of Ligand

**Better Lewis base → Forms stronger coordinate bond → More stable complex**

For nitrogen donors:

$$NH_3 > NH_2-NH_2 > py$$

For oxygen donors:

$$OH^- > RO^- > H_2O$$

#### Hard-Soft Acid-Base (HSAB) Principle

**Hard acids prefer hard bases**
**Soft acids prefer soft bases**

| Type | Metals | Ligands | Example |
| --- | --- | --- | --- |
| **Hard** | Small, high charge (Al³⁺, Fe³⁺, Cr³⁺) | F⁻, O²⁻, OH⁻, H₂O, NO₃⁻ | [AlF₆]³⁻ |
| **Soft** | Large, low charge (Cu⁺, Ag⁺, Pd²⁺, Pt²⁺) | I⁻, CN⁻, CO, PR₃, S²⁻ | [Ag(CN)₂]⁻ |
| **Borderline** | Fe²⁺, Co²⁺, Ni²⁺, Cu²⁺ | Br⁻, N₃⁻, SCN⁻ | [Cu(NH₃)₄]²⁺ |

**Examples:**

- Fe³⁺ (hard) + F⁻ (hard) → Very stable [FeF₆]³⁻
- Ag⁺ (soft) + CN⁻ (soft) → Very stable [Ag(CN)₂]⁻
- Fe³⁺ (hard) + I⁻ (soft) → Unstable, rarely exists

---

### 3. Chelate Effect

**Chelates** (complexes with polydentate ligands) are **much more stable** than analogous complexes with monodentate ligands.

#### Quantitative Comparison

**Example:** Ni²⁺ with ammonia vs ethylenediamine

**Reaction 1:** (Monodentate)

$$[Ni(H_2O)_6]^{2+} + 6NH_3 \rightleftharpoons [Ni(NH_3)_6]^{2+} + 6H_2O$$

$$\log \beta_6 = 8.61$$

**Reaction 2:** (Bidentate)

$$[Ni(H_2O)_6]^{2+} + 3en \rightleftharpoons [Ni(en)_3]^{2+} + 6H_2O$$

$$\log \beta_3 = 18.28$$

**Difference:** The bidentate complex is **10⁹·⁶⁷ ≈ 5 billion times** more stable!

### Why Does Chelate Effect Occur?

#### Entropic Advantage (Main Reason)

**Monodentate replacement:**

$$[Ni(H_2O)_6]^{2+} + 6NH_3 \rightleftharpoons [Ni(NH_3)_6]^{2+} + 6H_2O$$

- Reactants: 7 particles
- Products: 7 particles
- **ΔS ≈ 0** (no entropy change)

**Chelate replacement:**

$$[Ni(H_2O)_6]^{2+} + 3en \rightleftharpoons [Ni(en)_3]^{2+} + 6H_2O$$

- Reactants: 4 particles
- Products: 7 particles
- **ΔS > 0** (positive entropy change!)

**More particles → Greater disorder → Favorable entropy**

$$\Delta G = \Delta H - T\Delta S$$

Since ΔS is positive and large → ΔG more negative → **More stable!**

#### Statistical Advantage

Once one end of bidentate ligand binds, the other end is **already nearby**, making the second binding much more probable!

> **★ Key point · Memory Aid**
>
> **“Chelate = Grab Like a Claw”**

> (Greek: “chele” = claw)
>
> A crab’s claw doesn’t easily let go once it grabs you with both pincers! Similarly, chelates bind tightly with multiple “pincers.”

---

### 4. Macrocyclic Effect

Complexes with **macrocyclic ligands** (ring-shaped) are even MORE stable than chelates!

**Example:** Porphyrin complexes (hemoglobin, chlorophyll)

**Reasons:**

1. **Preorganization:** Ligand is already in the right geometry
2. **Entropic advantage:** Even less reorganization needed
3. **Kinetic stability:** Once in, very hard to get out of the ring!

**Stability order:**

$$\text{Macrocyclic} > \text{Chelate} > \text{Monodentate}$$

---

## Thermodynamic vs Kinetic Stability

### Thermodynamic Stability

**How stable is the complex at equilibrium?**

- Measured by **formation constant (β)**
- Large β = thermodynamically stable

**Example:** [Ni(CN)₄]²⁻ has huge β → very stable thermodynamically

### Kinetic Stability (Inertness)

**How fast does the complex react/exchange ligands?**

- **Labile:** Rapidly exchanges ligands (half-life < 1 minute)
- **Inert:** Slowly exchanges ligands (half-life > 1 minute)

> **★ Key point · Key Distinction**
>
> **Thermodynamic stability ≠ Kinetic stability!**
>
> A complex can be:
>
> - Thermodynamically **unstable** but kinetically **inert**

> - Thermodynamically **stable** but kinetically **labile**

### Examples

| Complex | Thermodynamic | Kinetic | Explanation |
| --- | --- | --- | --- |
| [Ni(CN)₄]²⁻ | Stable (large β) | Labile | d⁸, rapid exchange |
| [Co(NH₃)₆]³⁺ | Stable | Inert | d⁶ low spin, slow exchange |
| [Cr(H₂O)₆]³⁺ | Stable | Inert | d³, high CFSE barrier |
| [CrF₆]³⁻ | Unstable (in water) | Inert | Slow to hydrolyze despite thermodynamic driving force |

### Labile vs Inert: General Rules

**Labile complexes:**

- d⁰ (no CFSE to lose)
- d¹⁰ (no CFSE to lose)
- d⁴-d⁷ high spin (weak field)
- Large metal ions

**Inert complexes:**

- d³ low spin (Cr³⁺, Co³⁺)
- d⁶ low spin (Co³⁺, Rh³⁺, Ir³⁺)
- High charge density

---

## Quantitative Problems

### Problem Type 1: Calculating Free Metal Ion Concentration

**Example:** What is [Cu²⁺] in a solution containing 0.1 M [Cu(NH₃)₄]²⁺ and 1 M free NH₃?

Given: β₄ = 1.1 × 10¹³

**Solution:**

$$\beta_4 = \frac{[Cu(NH_3)_4^{2+}]}{[Cu^{2+}][NH_3]^4}$$

$$1.1 \times 10^{13} = \frac{0.1}{[Cu^{2+}](/chemistry/coordination-compounds/)^4}$$

$$[Cu^{2+}] = \frac{0.1}{1.1 \times 10^{13}} = 9.1 \times 10^{-15} \text{ M}$$

**Interpretation:** Almost all Cu²⁺ is complexed!

---

### Problem Type 2: Comparing Stabilities

**Example:** Which is more stable: [Ni(NH₃)₆]²⁺ (β₆ = 10⁸) or [Ni(en)₃]²⁺ (β₃ = 10¹⁸)?

**Solution:**
log β[Ni(en)₃]²⁺ = 18
log β[Ni(NH₃)₆]²⁺ = 8

**Difference:** 10¹⁰ times more stable!

**Answer:** [Ni(en)₃]²⁺ is vastly more stable (chelate effect)

---

## Applications of Stability Concepts

### 1. Qualitative Analysis

**Example:** Detection of Fe³⁺ using SCN⁻

$$Fe^{3+} + SCN^- \rightleftharpoons [Fe(SCN)]^{2+}$$

(blood-red color)

But adding F⁻:

$$[Fe(SCN)]^{2+} + 6F^- \rightleftharpoons [FeF_6]^{3-} + SCN^-$$

Red color disappears because [FeF₆]³⁻ is MORE stable (hard-hard combination)!

### 2. Metallurgy

**Extraction of gold:**

$$4Au + 8CN^- + O_2 + 2H_2O \rightarrow 4[Au(CN)_2]^- + 4OH^-$$

Very stable [Au(CN)₂]⁻ (β ≈ 10³⁸) allows gold to be leached from ore.

### 3. Medicine

**EDTA for heavy metal poisoning:**

- Forms very stable complexes with Pb²⁺, Hg²⁺, Cd²⁺
- β values > 10¹⁶
- Complexes are water-soluble and excreted

### 4. Water Softening

Hard water contains Ca²⁺ and Mg²⁺. Adding EDTA:

$$Ca^{2+} + EDTA^{4-} \rightarrow [Ca(EDTA)]^{2-}$$

Stability constant: β ≈ 10¹⁰
This “ties up” Ca²⁺, preventing soap scum formation.

### 5. Photography

**Fixing agent:** Sodium thiosulfate (hypo)

$$AgBr(s) + 2S_2O_3^{2-} \rightarrow [Ag(S_2O_3)_2]^{3-} + Br^-$$

The stable thiosulfate complex removes unexposed AgBr from film.

---

## Memory Tricks

### Stability Factors - “CMCL”

**C**harge density: Higher → More stable
**M**etal hardness: Match with ligand (HSAB)
**C**helate effect: Rings → More stable
**L**igand basicity: Better base → More stable

### Irving-Williams Order

**“Most Friendly Cats Need Careful Zookeepers”**

**M**n < **F**e < **C**o < **N**i < **C**u > **Z**n

### Labile vs Inert

**“d³ and d⁶ low spin are SLOW”** (inert)
**“d⁰ and d¹⁰ are GO-GO”** (labile)

---

## Common Mistakes

> **⚠ Trap · Mistake 1: Confusing β and K_d**
>
> **Wrong:** Large K_d means stable complex

> **Right:** Large K_d means UNSTABLE (easily dissociates)
>
> Remember: β = 1/K_d

> Large β = stable, Large K_d = unstable

> **⚠ Trap · Mistake 2: Confusing Thermodynamic and Kinetic Stability**
>
> **Wrong:** “The complex has large β, so it will exchange ligands rapidly”

> **Right:** Large β = thermodynamically stable (doesn’t tell us about reaction RATE)
>
> [Cr(H₂O)₆]³⁺ is both thermodynamically stable AND kinetically inert!

> **⚠ Trap · Mistake 3: Forgetting Chelate Effect is Mostly Entropic**
>
> **Wrong:** “Chelates are more stable because bonds are stronger”

> **Right:** Chelates are more stable mainly due to ENTROPY (more particles released)
>
> ΔH is similar, but ΔS is much more positive!

> **⚠ Trap · Mistake 4: Applying HSAB Incorrectly**
>
> **Wrong:** “All d-block metals are soft acids”

> **Right:**
>
> - Early transition metals (high oxidation state) = Hard

> - Late transition metals (low oxidation state) = Soft
>
> Fe³⁺ is hard, but Fe²⁺ is borderline!

---

## Practice Problems

### Level 1: Basic Concepts

**Q1.** Arrange in increasing order of stability:
a) [Ni(NH₃)₆]²⁺, [Ni(en)₃]²⁺, [Ni(EDTA)]²⁻
b) [FeF₆]³⁻, [FeCl₆]³⁻, [Fe(CN)₆]³⁻

**Q2.** If β₄ for [Cu(NH₃)₄]²⁺ is 10¹³, what is its dissociation constant K_d?

**Q3.** Why is [Co(NH₃)₆]³⁺ kinetically inert despite being thermodynamically stable?

### Level 2: Application

**Q4.** Given: K₁ = 10⁴, K₂ = 10³, K₃ = 10²
Calculate β₃ for the complex.

**Q5.** A solution contains 0.01 M [Ag(NH₃)₂]⁺ and 0.1 M free NH₃.
Calculate [Ag⁺] if β₂ = 10⁸.

**Q6.** Explain why:
a) [Cr(H₂O)₆]³⁺ exchanges water very slowly
b) [Cu(H₂O)₆]²⁺ exchanges water very rapidly

**Q7.** Which is more stable: [CaEDTA]²⁻ or [Ca(H₂O)₆]²⁺? Explain using the chelate effect.

### Level 3: JEE Advanced

**Q8.** The stability constant for [Cu(NH₃)₄]²⁺ is 10¹³. If excess KCN is added to this solution:

$$[Cu(NH_3)_4]^{2+} + 4CN^- \rightleftharpoons [Cu(CN)_4]^{2-} + 4NH_3$$

Given β for [Cu(CN)₄]²⁻ = 10²⁸, calculate the equilibrium constant for the above reaction.

**Q9.** Explain the Irving-Williams series using:
a) CFSE arguments
b) Charge density arguments
c) Why Zn²⁺ deviates from the trend

**Q10.** A student adds Fe³⁺ solution to SCN⁻ and observes blood-red color. When F⁻ is added, the color disappears. But when the student adds EDTA to the colorless solution, the red color DOES NOT return. Explain all observations.

**Q11.** Calculate ΔG° for the formation of [Ni(en)₃]²⁺ at 298 K if β₃ = 10¹⁸.
(R = 8.314 J/mol·K)

**Q12.** A complex has β = 10⁵ and exchanges its ligands in 10⁻⁶ seconds. Another has β = 10¹⁰ but exchanges ligands in 10⁴ seconds. Which is:
a) More thermodynamically stable?
b) More kinetically inert?
c) Better for long-term storage?
d) Better for rapid catalysis?

> **↗ Connection · Quick Check**
>
> If a complex has very large β but is also very labile, what does this tell you about:
>
> 1. Its equilibrium position?

> 2. How fast it reaches equilibrium?

> 3. Its practical usefulness in analytical chemistry?

---

## Solutions to Selected Problems

**Q1.**
a) [Ni(NH₃)₆]²⁺ < [Ni(en)₃]²⁺ < [Ni(EDTA)]²⁻
(monodentate < bidentate < hexadentate)
b) [FeCl₆]³⁻ < [FeF₆]³⁻ < [Fe(CN)₆]³⁻
(based on spectrochemical series and HSAB)

**Q2.** K_d = 1/β₄ = 10⁻¹³

**Q4.** β₃ = K₁ × K₂ × K₃ = 10⁴ × 10³ × 10² = 10⁹

**Q5.**

$$\beta_2 = \frac{[Ag(NH_3)_2^+]}{[Ag^+][NH_3]^2}$$

$$10^8 = \frac{0.01}{[Ag^+](/chemistry/coordination-compounds/)^2}$$

$$[Ag^+] = 10^{-9} \text{ M}$$

**Q8.**

$$K_{eq} = \frac{\beta_{[Cu(CN)_4]^{2-}}}{\beta_{[Cu(NH_3)_4]^{2+}}} = \frac{10^{28}}{10^{13}} = 10^{15}$$

Reaction goes essentially to completion!

**Q11.**

$$\Delta G° = -RT \ln \beta = -8.314 \times 298 \times \ln(10^{18})$$

$$= -8.314 \times 298 \times 18 \times 2.303$$

$$= -103 \text{ kJ/mol}$$

**Q12.**
a) Second (β = 10¹⁰)
b) Second (slow exchange = inert)
c) Second (stable and doesn’t decompose)
d) First (rapid exchange allows catalytic turnover)

---

## Summary Table

| Factor | Effect on Stability | Example |
| --- | --- | --- |
| **Higher charge** | ↑ Stability | Al³⁺ > Mg²⁺ |
| **Smaller size** | ↑ Stability | Ni²⁺ > Sr²⁺ |
| **Better Lewis base** | ↑ Stability | CN⁻ > NH₃ > H₂O |
| **Hard-Hard match** | ↑ Stability | Fe³⁺-F⁻ |
| **Soft-Soft match** | ↑ Stability | Ag⁺-CN⁻ |
| **Chelate effect** | ↑↑ Stability | en > 2NH₃ |
| **Macrocyclic** | ↑↑↑ Stability | Porphyrin |
| **Higher CFSE** | ↑ Stability | d³, d⁶ (low spin) |

---

## Related Topics

### Within Coordination Compounds

- [Werner’s Theory](../werners-theory/index.md) — Foundation of coordination chemistry
- [Bonding Theories](../bonding-theories/index.md) — CFSE and stability
- [Crystal Field Theory](../crystal-field-theory/index.md) — CFSE calculations
- [Applications](../applications/index.md) — Real-world uses of stable complexes

### Cross-Chapter Connections

- [Chemical Equilibrium](../../equilibrium/index.md) — Equilibrium constants
- [Thermodynamics](../../thermodynamics/index.md) — ΔG, ΔH, ΔS
- [d-Block Elements](../../d-f-block-elements/index.md) — Metal properties
- [Chemical Kinetics](../../chemical-kinetics/index.md) — Labile vs inert

---

From TestGuru · our mock-test platform

## You've read Stability of Coordination Compounds.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=coordination-compounds&tg_exam=jee-main&tg_page=%2Fchemistry%2Fcoordination-compounds%2Fstability-constants%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/coordination-compounds/stability-constants/",this.page.identifier="/chemistry/coordination-compounds/stability-constants/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="equilibriumConstant" id="anim-equilibriumConstant-1795396419506929279"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-equilibriumConstant-1795396419506929279")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/coordination-compounds/stability-constants/](https://jeenotes.in/chemistry/coordination-compounds/stability-constants/) · raw HTML: `offline/chemistry/coordination-compounds/stability-constants/index.html`_
