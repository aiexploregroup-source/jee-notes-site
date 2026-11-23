---
title: "Nernst Equation and Concentration Cells"
source: "https://jeenotes.in/chemistry/redox-electrochemistry/nernst-equation/"
description: "Master the Nernst equation, concentration cells, and EMF calculations at non-standard conditions for JEE."
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Chemistry"
position: "/ Topic 4 of 9"
html: "../../../../offline/chemistry/redox-electrochemistry/nernst-equation/index.html"
extracted: "2026-11-23"
---

> Master the Nernst equation, concentration cells, and EMF calculations at non-standard conditions for JEE.

## Introduction

Your smartphone battery voltage drops from 4.2V when fully charged to 3.0V when depleted - but the chemistry inside hasn’t changed! What’s happening? The **Nernst equation** explains how cell potential varies with ion concentrations. This fundamental equation connects electrochemistry with thermodynamics and is one of the most important formulas in JEE Chemistry!

> **★ Key point · Why Your Phone Dies at 1%**
>
> The iPhone 15 (2024) shuts down when the battery voltage drops below ~3.0V, even though the lithium and cobalt inside haven’t disappeared! As the battery discharges, lithium ion concentration decreases at one electrode and increases at the other. The Nernst equation predicts this voltage drop. When you see “20% battery remaining,” that’s actually measuring voltage, not the amount of lithium - it’s all Nernst equation in action!

---

## Interactive: Nernst Equation Demonstration

Watch how EMF changes as you vary ion concentrations:

---

## Derivation of Nernst Equation

### From Thermodynamics

For a general cell reaction at temperature T:

$$\Delta G = \Delta G° + RT \ln Q$$

where Q = reaction quotient

### Connecting to Electrochemistry

We know:

$$\Delta G = -nFE_{\text{cell}}$$

$$\Delta G° = -nFE°_{\text{cell}}$$

Substituting:

$$-nFE_{\text{cell}} = -nFE°_{\text{cell}} + RT \ln Q$$

Dividing by -nF:

$$E_{\text{cell}} = E°_{\text{cell}} - \frac{RT}{nF} \ln Q$$

### Converting to log₁₀

$$\ln Q = 2.303 \log Q$$

$$\boxed{E_{\text{cell}} = E°_{\text{cell}} - \frac{2.303RT}{nF} \log Q}$$

### At 298 K (25°C)

Substituting values:

- R = 8.314 J/(mol·K)
- T = 298 K
- F = 96,500 C/mol

$$\frac{2.303RT}{F} = \frac{2.303 \times 8.314 \times 298}{96500} = 0.0591 \approx 0.059$$

$$\boxed{E_{\text{cell}} = E°_{\text{cell}} - \frac{0.059}{n} \log Q}$$

This is the **Nernst equation** at 25°C - memorize this form for JEE!

> **★ Key point · Three Forms - Know Them All!**
>
> **General form:** $E = E° - \frac{RT}{nF} \ln Q$
>
> **At 298 K (natural log):** $E = E° - \frac{0.0591}{n} \ln Q$
>
> **At 298 K (log₁₀):** $E = E° - \frac{0.059}{n} \log Q$ ← **Use this for JEE!**

---

## Understanding the Reaction Quotient (Q)

### For General Reaction

$$aA + bB \rightarrow cC + dD$$

$$Q = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

### Important Rules for Q

1. **Solids and pure liquids:** Activity = 1 (excluded from Q)
2. **Solutions:** Use molar concentration [M]
3. **Gases:** Use partial pressure in bar or atm
4. **Electrodes:** Pure metals/solids omitted

### Example: Daniell Cell

$$\text{Zn}_{(s)} + \text{Cu}^{2+}_{(aq)} \rightarrow \text{Zn}^{2+}_{(aq)} + \text{Cu}_{(s)}$$

$$Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]}$$

Note: Solid Zn and Cu are omitted!

---

## Applying the Nernst Equation

### Example 1: Simple Metal-Ion Cell

**Problem:** Calculate EMF of the cell at 25°C:

$$\text{Zn} | \text{Zn}^{2+}(0.1M) || \text{Cu}^{2+}(0.01M) | \text{Cu}$$

Given: E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = +0.34 V

**Solution:**

**Step 1:** Calculate E°cell

$$E°_{\text{cell}} = E°_{\text{cathode}} - E°_{\text{anode}} = 0.34 - (-0.76) = 1.10 \text{ V}$$

**Step 2:** Write cell reaction

$$\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$$

**Step 3:** Find Q

$$Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} = \frac{0.1}{0.01} = 10$$

**Step 4:** Apply Nernst equation (n = 2)

$$E_{\text{cell}} = 1.10 - \frac{0.059}{2} \log 10$$

$$E_{\text{cell}} = 1.10 - 0.0295 \times 1$$

$$\boxed{E_{\text{cell}} = 1.0705 \text{ V}}$$

### Example 2: Gas Electrode

**Problem:** Calculate EMF at 25°C:

$$\text{Pt} | \text{H}_2(2 \text{ atm}) | \text{H}^+(0.1M) || \text{Ag}^+(0.01M) | \text{Ag}$$

Given: E°(Ag⁺/Ag) = +0.80 V, E°(H⁺/H₂) = 0.00 V

**Solution:**

**Cell reaction:**

$$\text{H}_2 + 2\text{Ag}^+ \rightarrow 2\text{H}^+ + 2\text{Ag}$$

$$E°_{\text{cell}} = 0.80 - 0 = 0.80 \text{ V}$$

$$Q = \frac{[\text{H}^+]^2}{P_{\text{H}_2}[\text{Ag}^+]^2} = \frac{(0.1)^2}{2 \times (0.01)^2} = \frac{0.01}{2 \times 0.0001} = 50$$

$$E_{\text{cell}} = 0.80 - \frac{0.059}{2} \log 50$$

$$E_{\text{cell}} = 0.80 - 0.0295 \times 1.699$$

$$\boxed{E_{\text{cell}} = 0.75 \text{ V}}$$

> **◐ In simple terms · Sign Tip**
>
> If Q > 1: log Q is positive → Ecell **decreases** (voltage drops)
>
> If Q < 1: log Q is negative → Ecell **increases** (voltage rises)
>
> This makes sense: as products form (Q increases), the driving force (EMF) decreases!

---

## Nernst Equation for Half-Cells

### For Single Electrode

For a half-reaction: $\text{M}^{n+} + ne^- \rightarrow \text{M}$

$$\boxed{E = E° - \frac{0.059}{n} \log \frac{1}{[\text{M}^{n+}]}}$$

$$\boxed{E = E° + \frac{0.059}{n} \log [\text{M}^{n+}]}$$

### Example: Cu²⁺/Cu Electrode

For Cu²⁺(0.01M) at 25°C:

$$E = 0.34 + \frac{0.059}{2} \log(0.01)$$

$$E = 0.34 + 0.0295 \times (-2)$$

$$E = 0.34 - 0.059 = 0.281 \text{ V}$$

Lower concentration → Lower electrode potential!

---

## Concentration Cells

A **concentration cell** is a galvanic cell where both electrodes are made of the **same material** but are immersed in solutions of **different concentrations**.

### Principle

- EMF is generated solely due to concentration difference
- Ions flow from higher to lower concentration
- Electrons flow to equalize concentrations

### General Setup

$$\text{M} | \text{M}^{n+}(C_1) || \text{M}^{n+}(C_2) | \text{M}$$

where C₁ < C₂ (C₁ is dilute, C₂ is concentrated)

### EMF of Concentration Cell

**E°cell = 0** (same electrodes!)

**Cell reaction:**

$$\text{M}^{n+}(C_2) \rightarrow \text{M}^{n+}(C_1)$$

(Ions move from concentrated to dilute)

$$Q = \frac{C_1}{C_2}$$

$$\boxed{E_{\text{cell}} = 0 - \frac{0.059}{n} \log \frac{C_1}{C_2} = \frac{0.059}{n} \log \frac{C_2}{C_1}}$$

Since C₂ > C₁, the log term is positive → Positive EMF!

> **★ Key point · Concentration Cell Memory Trick**
>
> **“Dilute on Left, Concentrated on Right”**
>
> The **dilute solution (lower conc.) goes to anode** (left side in cell notation)
>
> The **concentrated solution goes to cathode** (right side)
>
> This ensures **positive EMF** and spontaneous electron flow!

---

## Types of Concentration Cells

### 1. Electrolyte Concentration Cell

**Same electrode, different electrolyte concentrations**

**Example:**

$$\text{Zn} | \text{Zn}^{2+}(0.01M) || \text{Zn}^{2+}(1M) | \text{Zn}$$

$$E_{\text{cell}} = \frac{0.059}{2} \log \frac{1}{0.01} = \frac{0.059}{2} \times 2 = 0.059 \text{ V}$$

**At anode (dilute side):** $\text{Zn} \rightarrow \text{Zn}^{2+}(0.01M) + 2e^-$

**At cathode (concentrated side):** $\text{Zn}^{2+}(1M) + 2e^- \rightarrow \text{Zn}$

**Net:** Zn²⁺ moves from concentrated to dilute until equilibrium!

### 2. Electrode Concentration Cell (Gas)

**Different gas pressures at the same electrode**

**Example:** Hydrogen concentration cell

$$\text{Pt} | \text{H}_2(P_1) | \text{H}^+(1M) || \text{H}^+(1M) | \text{H}_2(P_2) | \text{Pt}$$

where P₁ > P₂ (higher-pressure gas oxidised at the anode)

$$E_{\text{cell}} = \frac{0.059}{2} \log \frac{P_1}{P_2}$$

### 3. Amalgam Concentration Cell

**Different concentrations of metal in mercury amalgam**

**Example:**

$$\text{Zn-Hg}(C_1) | \text{Zn}^{2+} || \text{Zn}^{2+} | \text{Zn-Hg}(C_2)$$

Same principle applies!

---

## Equilibrium and the Nernst Equation

### At Equilibrium

When a cell reaches equilibrium:

- **Ecell = 0** (no driving force)
- **Q = K** (reaction quotient = equilibrium constant)

Substituting into Nernst equation:

$$0 = E°_{\text{cell}} - \frac{0.059}{n} \log K$$

$$\boxed{E°_{\text{cell}} = \frac{0.059}{n} \log K}$$

This connects electrode potential to equilibrium constant!

### Example: Finding Equilibrium Constant

For the reaction: $\text{Zn} + \text{Cu}^{2+} \rightleftharpoons \text{Zn}^{2+} + \text{Cu}$

E°cell = 1.10 V, n = 2

$$1.10 = \frac{0.059}{2} \log K$$

$$\log K = \frac{2 \times 1.10}{0.059} = 37.29$$

$$\boxed{K = 10^{37.29} \approx 2 \times 10^{37}}$$

Huge K! This reaction goes essentially to completion.

> **↗ Connection · Quick Check**
>
> **Q:** If E°cell is positive, what does it tell us about K?
>
> **A:** K > 1 (products favored at equilibrium). The more positive E°cell, the larger K becomes!

---

## Relationship Summary

### Connecting Everything

$$\boxed{\Delta G° = -nFE°_{\text{cell}} = -RT \ln K = -2.303RT \log K}$$

At 298 K:

$$\boxed{E°_{\text{cell}} = \frac{0.059}{n} \log K}$$

$$\boxed{\Delta G° = -2.303 \times 8.314 \times 298 \times \log K = -5.706 \log K \text{ kJ/mol}}$$

| E°cell | ΔG° | K | Reaction |
| --- | --- | --- | --- |
| **Positive** | **Negative** | **> 1** | **Spontaneous** (products favored) |
| **Zero** | **Zero** | **= 1** | **Equilibrium** |
| **Negative** | **Positive** | **< 1** | **Non-spontaneous** (reactants favored) |

---

## Practice Problems

### Level 1: JEE Main

**Q1.** Calculate EMF of the cell at 25°C:

$$\text{Zn} | \text{Zn}^{2+}(0.01M) || \text{Cu}^{2+}(0.1M) | \text{Cu}$$

Given: E°cell = 1.10 V

**Q2.** For a concentration cell:

$$\text{Ag} | \text{Ag}^+(0.001M) || \text{Ag}^+(0.1M) | \text{Ag}$$

Calculate EMF at 25°C.

**Q3.** At what concentration of Ag⁺ will the electrode potential be 0.80 V at 25°C?
Given: E°(Ag⁺/Ag) = +0.80 V

---

### Level 2: JEE Main/Advanced

**Q4.** Calculate the equilibrium constant for the reaction:

$$\text{Fe}^{2+} + \text{Ag}^+ \rightarrow \text{Fe}^{3+} + \text{Ag}$$

Given: E°(Ag⁺/Ag) = +0.80 V, E°(Fe³⁺/Fe²⁺) = +0.77 V

**Q5.** A hydrogen electrode is immersed in a solution of pH = 3 at 25°C. Calculate its electrode potential.

**Q6.** For the cell:

$$\text{Pt} | \text{H}_2(1 \text{ atm}) | \text{H}^+(xM) || \text{H}^+(0.1M) | \text{H}_2(1 \text{ atm}) | \text{Pt}$$

If EMF = 0.0295 V, find x.

---

### Level 3: JEE Advanced

**Q7.** Calculate ΔG° for the reaction at 25°C:

$$2\text{Al} + 3\text{Cu}^{2+} \rightarrow 2\text{Al}^{3+} + 3\text{Cu}$$

Given: E°(Cu²⁺/Cu) = +0.34 V, E°(Al³⁺/Al) = -1.66 V

**Q8.** A cell has E°cell = 1.5 V. At what ratio of [products]/[reactants] will the cell EMF become zero at 25°C? (Assume n = 2)

**Q9.** For the reaction:

$$\text{Zn} + 2\text{Ag}^+ \rightleftharpoons \text{Zn}^{2+} + 2\text{Ag}$$

If initial [Ag⁺] = 1M and [Zn²⁺] = 0.01M, what will be the EMF when [Ag⁺] drops to 0.5M?

Given: E°cell = 1.56 V

**Q10.** The EMF of the cell:

$$\text{Zn} | \text{Zn}^{2+}(C_1) || \text{Zn}^{2+}(C_2) | \text{Zn}$$

is 0.0295 V at 25°C. Find the ratio C₂/C₁.

---

## Solutions to Practice Problems

**A1.**

$$Q = \frac{0.01}{0.1} = 0.1$$

$$E = 1.10 - \frac{0.059}{2} \log(0.1) = 1.10 - \frac{0.059}{2}(-1) = 1.10 + 0.0295 = \boxed{1.1295 \text{ V}}$$

**A2.**

$$E = \frac{0.059}{1} \log \frac{0.1}{0.001} = 0.059 \times 2 = \boxed{0.118 \text{ V}}$$

**A3.**

$$0.80 = 0.80 + \frac{0.059}{1} \log[\text{Ag}^+]$$

$$\log[\text{Ag}^+] = 0$$

$$\boxed{[\text{Ag}^+] = 1 \text{ M}}$$

(At standard concentration!)

**A4.**

$$E°_{\text{cell}} = 0.80 - 0.77 = 0.03 \text{ V}$$

$$0.03 = \frac{0.059}{1} \log K$$

$$K = 10^{0.03/0.059} = 10^{0.508} \approx \boxed{3.2}$$

**A5.**
pH = 3 → [H⁺] = 10⁻³ M

$$E = 0 + \frac{0.059}{2} \log(10^{-3})^2 = \frac{0.059}{2} \times (-6) = \boxed{-0.177 \text{ V}}$$

**A6.**

$$0.0295 = \frac{0.059}{2} \log \frac{0.1}{x}$$

$$1 = \log \frac{0.1}{x}$$

$$\frac{0.1}{x} = 10$$

$$\boxed{x = 0.01 \text{ M}}$$

**A7.**

$$E°_{\text{cell}} = 0.34 - (-1.66) = 2.00 \text{ V}$$

$$\Delta G° = -nFE° = -6 \times 96500 \times 2.00 = \boxed{-1158 \text{ kJ}}$$

**A8.**

$$0 = 1.5 - \frac{0.059}{2} \log Q$$

$$\log Q = \frac{2 \times 1.5}{0.059} = 50.85$$

$$\boxed{Q = 10^{50.85} \approx 7.1 \times 10^{50}}$$

**A9.**
When [Ag⁺] = 0.5M, Zn reacted = 0.5/2 = 0.25 mol
So [Zn²⁺] = 0.01 + 0.25 = 0.26M (if initial Zn was sufficient)

$$Q = \frac{0.26}{(0.5)^2} = \frac{0.26}{0.25} = 1.04$$

$$E = 1.56 - \frac{0.059}{2} \log(1.04) = 1.56 - 0.0005 \approx \boxed{1.559 \text{ V}}$$

**A10.**

$$0.0295 = \frac{0.059}{2} \log \frac{C_2}{C_1}$$

$$\log \frac{C_2}{C_1} = 1$$

$$\boxed{\frac{C_2}{C_1} = 10}$$

---

## Common Mistakes to Avoid

> **★ Key point · Nernst Equation Pitfalls**
>
> **Mistake 1:** Wrong Q expression
>
> - **Remember:** Solids and pure liquids are **excluded**

> - Gases use **partial pressure**, solutions use **molarity**
>
> **Mistake 2:** Forgetting the sign
>
> - $E = E° - \frac{0.059}{n} \log Q$ (minus sign!)

> - As Q increases, E **decreases**
>
> **Mistake 3:** Wrong value of n
>
> - n = number of **electrons transferred** in balanced equation

> - Don’t confuse with ion charges!
>
> **Mistake 4:** Concentration cell notation
>
> - **Dilute** solution must be on **left** (anode)

> - Otherwise E will be negative!
>
> **Mistake 5:** Using ln instead of log
>
> - At 298K: Use $\frac{0.059}{n} \log Q$ (log₁₀)

> - NOT $\frac{0.0591}{n} \ln Q$ (unless specified)
>
> **Mistake 6:** Multiplying E° by coefficients
>
> - E° and E are **intensive properties**

> - Doubling the reaction doesn’t double EMF!

---

## Advanced Applications

### pH Measurement

A **pH meter** uses the Nernst equation!

For hydrogen electrode in solution of unknown pH:

$$E = 0 - \frac{0.059}{2} \log \frac{(P_{\text{H}_2})}{[\text{H}^+]^2}$$

At 1 atm H₂:

$$E = -0.059 \log \frac{1}{[\text{H}^+]} = 0.059 \log[\text{H}^+]$$

$$E = -0.059 \text{ pH}$$

$$\boxed{\text{pH} = -\frac{E}{0.059}}$$

### Solubility Product from EMF

For AgCl electrode:

$$\text{AgCl} + e^- \rightarrow \text{Ag} + \text{Cl}^-$$

$$E = E° - 0.059 \log[\text{Cl}^-]$$

Can be used to find Ksp!

> **◐ In simple terms · Ocean Battery Concept**
>
> Engineers are developing **salinity gradient batteries** (2025 research) that use concentration cells between seawater and river water! The salt concentration difference at river mouths creates EMF via the Nernst equation. The Mediterranean-Nile delta could theoretically generate GWs of power - all based on concentration cells!

---

## Key Formulas Summary

### Must Memorize for JEE

**Nernst equation (298 K):**

$$\boxed{E = E° - \frac{0.059}{n} \log Q}$$

**Concentration cell:**

$$\boxed{E = \frac{0.059}{n} \log \frac{C_{\text{concentrated}}}{C_{\text{dilute}}}}$$

**Equilibrium connection:**

$$\boxed{E° = \frac{0.059}{n} \log K}$$

**Thermodynamic relations:**

$$\boxed{\Delta G° = -nFE°}$$

$$\boxed{\Delta G° = -2.303RT \log K}$$

---

## Related Topics

### Within Electrochemistry

- [Electrochemical Cells](../electrochemical-cells/index.md) - Foundation of cell EMF
- [Electrode Potentials](../electrode-potentials/index.md) - Standard E° values and electrochemical series
- [Oxidation-Reduction](../oxidation-reduction/index.md) - Redox fundamentals
- [Batteries](../batteries/index.md) - Practical voltage calculations in primary/secondary cells
- [Electrolysis](../electrolysis/index.md) - Reverse EMF considerations
- [Corrosion](../corrosion/index.md) - Concentration cells in rusting

### Equilibrium and Thermodynamics

- [Chemical Equilibrium](../../equilibrium/chemical-equilibrium/index.md) - Relationship between K and E°
- [Gibbs Energy](../../thermodynamics/gibbs-energy/index.md) - ΔG° = -nFE° derivation
- [Entropy](../../thermodynamics/entropy/index.md) - Spontaneity and equilibrium
- [Ionic Equilibrium](../../equilibrium/ionic-equilibrium/index.md) - pH calculations with Nernst
- [Solubility Product](../../equilibrium/solubility-product/index.md) - Ksp from EMF measurements

### Solutions and Concentrations

- [Concentration Methods](../../solutions/concentration-methods/index.md) - Molarity in Nernst calculations
- [Colligative Properties](../../solutions/colligative-properties/index.md) - Activity vs concentration

### Physics Connections

- [Current Electricity](../../../physics/current-electricity/index.md) - Voltage and potential difference
- [Thermodynamics](../../../physics/thermodynamics/index.md) - Energy conversions
- [Electrostatics - Electric Potential](../../../physics/electrostatics/electric-potential/index.md) - Potential concepts

### Mathematics Connections

- [Logarithms](../../../mathematics/sets-relations-functions/index.md) - Log calculations in Nernst equation

---

From TestGuru · our mock-test platform

## You've read Nernst Equation and Concentration Cells.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=redox-electrochemistry&tg_exam=jee-main&tg_page=%2Fchemistry%2Fredox-electrochemistry%2Fnernst-equation%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/redox-electrochemistry/nernst-equation/",this.page.identifier="/chemistry/redox-electrochemistry/nernst-equation/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="electrochemicalCell" id="anim-electrochemicalCell-1795396420494091153"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-electrochemicalCell-1795396420494091153")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/redox-electrochemistry/nernst-equation/](https://jeenotes.in/chemistry/redox-electrochemistry/nernst-equation/) · raw HTML: `offline/chemistry/redox-electrochemistry/nernst-equation/index.html`_
