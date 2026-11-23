---
title: "Solutions Formula Sheet"
source: "https://jeenotes.in/chemistry/solutions/formula-sheet/"
description: "All key Solutions formulas for JEE: concentration units, Raoult's law, colligative properties, osmotic pressure, and van't Hoff factor — quick revision for JEE Main & Advanced."
updated: "2026-07-01"
reading_time: "7 min read"
breadcrumb: "Chemistry"
position: "/ Topic 7 of 7"
html: "../../../../offline/chemistry/solutions/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Solutions formulas for JEE: concentration units, Raoult's law, colligative properties, osmotic pressure, and van't Hoff factor — quick revision for JEE Main & Advanced.

Every must-know formula, constant, and high-yield fact from the Solutions chapter in one scannable sheet. Use it for last-minute revision before JEE Main and Advanced.

## Concentration Units

| Quantity | Formula | Notes |
| --- | --- | --- |
| Molarity (M) | $M = \dfrac{n}{V_{\text{(L)}}}$ | mol per L of **solution**; temperature dependent |
| Molality (m) | $m = \dfrac{n}{W_{\text{solvent (kg)}}}$ | mol per kg of **solvent**; temperature independent |
| Mole fraction ($\chi$) | $\chi_A = \dfrac{n_A}{n_{\text{total}}}$ | Dimensionless; $\chi_{\text{solute}} + \chi_{\text{solvent}} = 1$ |
| ppm | $\text{ppm} = \dfrac{\text{mass solute}}{\text{mass solution}} \times 10^6$ | Trace concentrations |
| % (w/w) | $\dfrac{\text{mass solute}}{\text{mass solution}} \times 100$ | Temperature independent |
| % (v/v) | $\dfrac{\text{volume solute}}{\text{volume solution}} \times 100$ | Temperature dependent |
| % (w/v) | $\dfrac{\text{mass solute (g)}}{\text{volume solution (mL)}} \times 100$ | Temperature dependent |

### Molarity from Mass

$$\boxed{M = \frac{W_{\text{solute}} \times 1000}{M_{\text{solute}} \times V_{\text{(mL)}}}}$$

$$\text{Moles} = M \times V_{\text{(L)}} = \frac{M \times V_{\text{(mL)}}}{1000}$$

### Molality from Mass

$$\boxed{m = \frac{W_{\text{solute}} \times 1000}{M_{\text{solute}} \times W_{\text{solvent (g)}}}}$$

> **★ Key point · High-Yield Memory Hook**
>
> **M for Mix the Volume, m for Mass of solvent.** Molarity uses total solution volume; molality uses solvent mass. Molality is the one used in colligative properties because it doesn’t change with temperature.

## Interconversion Formulas

| Conversion | Formula | Notes |
| --- | --- | --- |
| M $\to$ m | $m = \dfrac{1000M}{1000d - M \cdot M_{\text{solute}}}$ | $d$ = density (g/mL) |
| m $\to$ M | $M = \dfrac{1000\,m\,d}{1000 + m \cdot M_{\text{solute}}}$ | Density is the bridge |
| m $\to \chi_{\text{solute}}$ | $\chi_{\text{solute}} = \dfrac{m \cdot M_{\text{solvent}}}{1000 + m \cdot M_{\text{solvent}}}$ | $M_{\text{solvent}}$ in g/mol |
| m $\to \chi_{\text{solvent}}$ | $\chi_{\text{solvent}} = \dfrac{1000}{1000 + m \cdot M_{\text{solvent}}}$ | — |
| M $\to \chi_{\text{solute}}$ | $\chi_{\text{solute}} = \dfrac{M \cdot M_{\text{solvent}}}{1000\,d}$ | For dilute aqueous ($d \approx 1$) |
| Normality $\leftrightarrow$ Molarity | $N = n \times M$ | $n$ = n-factor (valency factor) |

**n-factor (valency factor):** number of H⁺ for acids, OH⁻ for bases, or change in oxidation state for redox.

## Raoult’s Law (Ideal Solutions)

$$\boxed{P_A = P_A^0 \cdot \chi_A}$$

$$\boxed{P_{\text{total}} = P_A^0 \chi_A + P_B^0 \chi_B}$$

For a **non-volatile** solute ($P_B^0 = 0$):

$$\boxed{P_{\text{solution}} = P_{\text{solvent}}^0 \cdot \chi_{\text{solvent}} = P_{\text{solvent}}^0 (1 - \chi_{\text{solute}})}$$

### Vapor-Phase Composition (Dalton’s Law)

$$\boxed{y_A = \frac{P_A}{P_{\text{total}}} = \frac{P_A^0 \chi_A}{P_A^0 \chi_A + P_B^0 \chi_B}}$$

> **★ Key point · Vapor Enrichment**
>
> The vapor is **always richer in the more volatile component**: if $P_A^0 > P_B^0$, then $y_A > \chi_A$. This is the basis of fractional distillation.

### Ideal vs Non-Ideal Solutions

| Property | Ideal | Positive Deviation | Negative Deviation |
| --- | --- | --- | --- |
| $\Delta H_{\text{mix}}$ | 0 | $> 0$ (endothermic) | $< 0$ (exothermic) |
| $\Delta V_{\text{mix}}$ | 0 | $> 0$ | $< 0$ |
| A–B vs A–A, B–B | Equal | Weaker | Stronger |
| $P_{\text{total}}$ | Obeys Raoult | $> P_{\text{ideal}}$ | $< P_{\text{ideal}}$ |
| Example | Benzene + Toluene | Ethanol + Water | Chloroform + Acetone |
| Azeotrope | — | Minimum boiling | Maximum boiling |

**Must-remember examples**

- Ideal: Benzene + Toluene; n-Hexane + n-Heptane; CCl₄ + SiCl₄
- Positive deviation: Ethanol + Water; Acetone + CS₂; CCl₄ + CHCl₃
- Negative deviation: Chloroform + Acetone (new H-bond); Water + HNO₃; Water + HCl

### Azeotropes (cannot be separated by fractional distillation)

| Type | Deviation | Example (composition, BP) |
| --- | --- | --- |
| Minimum boiling | Positive (max VP) | Ethanol (95.6%) + Water → 78.2°C |
| Maximum boiling | Negative (min VP) | HNO₃ (68%) + Water → 120.5°C |

## Colligative Properties

The four colligative properties depend only on the **number** of solute particles, not their nature. Mnemonic: **ROBE** — RLVP, Osmotic pressure, Boiling-point elevation, freezing-point dEpression.

### 1. Relative Lowering of Vapor Pressure (RLVP)

$$\boxed{\frac{P^0 - P_s}{P^0} = \chi_{\text{solute}} = \frac{n_{\text{solute}}}{n_{\text{solute}} + n_{\text{solvent}}}}$$

For dilute solutions ($n_{\text{solute}} \ll n_{\text{solvent}}$):

$$\frac{P^0 - P_s}{P^0} \approx \frac{n_{\text{solute}}}{n_{\text{solvent}}} = \frac{w/M}{W/M_{\text{solvent}}}$$

For dilute **aqueous** solutions ($M_{\text{water}} = 18$):

$$\frac{\Delta P}{P^0} = \frac{w \times 18}{M \times W}$$

### 2. Elevation of Boiling Point

$$\boxed{\Delta T_b = K_b \, m = K_b \cdot \frac{w \times 1000}{M \times W}}$$

### 3. Depression of Freezing Point

$$\boxed{\Delta T_f = K_f \, m = K_f \cdot \frac{w \times 1000}{M \times W}}$$

where $w$ = mass of solute (g), $M$ = molar mass of solute, $W$ = mass of solvent (g).

### Theoretical Relations for $K_b$ and $K_f$

$$K_b = \frac{R \, M_{\text{solvent}} \, (T_b^0)^2}{1000 \, \Delta H_{\text{vap}}} \qquad K_f = \frac{R \, M_{\text{solvent}} \, (T_f^0)^2}{1000 \, \Delta H_{\text{fusion}}}$$

Both depend on **solvent properties only**. Since $\Delta H_{\text{fusion}} < \Delta H_{\text{vap}}$, usually $K_f > K_b$.

### Ratio of the Two Constants (same molality)

$$\boxed{\frac{\Delta T_b}{\Delta T_f} = \frac{K_b}{K_f}}$$

For water: $\dfrac{\Delta T_b}{\Delta T_f} = \dfrac{0.52}{1.86} \approx \dfrac{1}{3.58}$ — FP depression is ~3.5× the BP elevation.

### Molal Constants (memorize)

| Solvent | $K_b$ (K·kg/mol) | Normal BP (°C) | $K_f$ (K·kg/mol) | Normal FP (°C) |
| --- | --- | --- | --- | --- |
| Water | 0.52 | 100 | 1.86 | 0 |
| Benzene | 2.53 | 80.1 | 5.12 | 5.5 |
| Chloroform | 3.63 | 61.2 | 4.68 | −63.5 |
| Ethanol | 1.22 | 78.4 | — | — |
| CCl₄ | 5.03 | 76.7 | — | — |
| Acetic acid | — | — | 3.90 | 16.6 |
| Camphor | — | — | 37.7 | 179.8 |

> **★ Key point · Constants to Lock In**
>
> Water: $K_b = 0.52$, $K_f = 1.86$. Benzene: $K_b = 2.53$, $K_f = 5.12$. **Camphor $K_f = 37.7$** (highest) — used for molar-mass determination by Rast method.

### 4. Osmotic Pressure

$$\boxed{\pi = CRT = \frac{n}{V}RT = \frac{w}{M\,V}RT}$$

where $C$ = molarity (mol/L), $R$ = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K), $T$ in K, $V$ in L.

**Isotonic condition:** $\;\pi_1 = \pi_2 \implies C_1 = C_2$ (same T)

**Reverse osmosis:** $\;P_{\text{applied}} > \pi$

| Tonicity | Concentration vs cell | Water flow | Cell response |
| --- | --- | --- | --- |
| Hypotonic | Lower (e.g. < 0.9% NaCl) | Into cell | Swells, may burst (hemolysis) |
| Isotonic | Equal (0.9% NaCl) | No net flow | Normal |
| Hypertonic | Higher (e.g. > 0.9% NaCl) | Out of cell | Shrinks (crenation) |

> **★ Key point · Osmotic Pressure Pitfalls**
>
> $\pi$ uses **molarity (C), not molality**. Temperature must be in **Kelvin**. Pick the right $R$: use 0.0821 with atm, 8.314 with Pa. Water flows from **dilute → concentrated** (low $\pi$ → high $\pi$).

## Molar Mass Determination

| From | Formula |
| --- | --- |
| Boiling-point elevation | $M = \dfrac{K_b \, w \times 1000}{\Delta T_b \times W}$ |
| Freezing-point depression | $M = \dfrac{K_f \, w \times 1000}{\Delta T_f \times W}$ |
| Osmotic pressure | $M = \dfrac{w\,R\,T}{\pi\,V}$ |

Osmotic pressure is best for **macromolecules (polymers, proteins)** — large, easily measured $\pi$ at room temperature.

## van’t Hoff Factor (i)

$$\boxed{i = \frac{\text{Actual no. of particles in solution}}{\text{No. of formula units dissolved}} = \frac{\text{Observed colligative property}}{\text{Calculated (assuming } i = 1)}}$$

### Modified Colligative Properties

$$\frac{P^0 - P_s}{P^0} = i\,\chi_{\text{solute}} \qquad \Delta T_b = i\,K_b\,m \qquad \Delta T_f = i\,K_f\,m \qquad \pi = i\,CRT$$

### Dissociation (i > 1)

$$\boxed{i = 1 + \alpha(n - 1)} \qquad \boxed{\alpha = \frac{i - 1}{n - 1}}$$

where $n$ = number of ions on complete dissociation, $\alpha$ = degree of dissociation.

| Compound | Dissociation | Theoretical i |
| --- | --- | --- |
| NaCl, KBr | $\to$ 2 ions | 2 |
| CaCl₂, Na₂SO₄, K₂SO₄ | $\to$ 3 ions | 3 |
| AlCl₃, K₃[Fe(CN)₆] | $\to$ 4 ions | 4 |
| K₄[Fe(CN)₆], Al₂(SO₄)₃ | $\to$ 5 ions | 5 |

### Association (i < 1)

$$\boxed{i = 1 - \alpha\left(1 - \frac{1}{n}\right)} \qquad \boxed{\alpha = \frac{(1-i)\,n}{n-1}}$$

For **dimerization** ($n = 2$):

$$\boxed{i = 1 - \frac{\alpha}{2}} \qquad \boxed{\alpha = 2(1 - i)}$$

For trimerization ($n = 3$): $\;i = 1 - \dfrac{2\alpha}{3}$

### Abnormal Molar Mass

$$\boxed{i = \frac{M_{\text{theoretical}}}{M_{\text{observed}}}} \qquad M_{\text{observed}} = \frac{M_{\text{theoretical}}}{i}$$

| Process | i | $M_{\text{observed}}$ |
| --- | --- | --- |
| Dissociation | $> 1$ | $< M_{\text{theoretical}}$ |
| Association | $< 1$ | $> M_{\text{theoretical}}$ |
| Neither | $= 1$ | $= M_{\text{theoretical}}$ |

> **★ Key point · i Decision Tree**
>
> $i > 1 \Rightarrow$ dissociation (electrolyte). $i = 1 \Rightarrow$ non-electrolyte (glucose, urea, sucrose). $i < 1 \Rightarrow$ association (e.g. acetic acid / benzoic acid in benzene, $i \approx 0.5$). Don’t mix up the dissociation and association formulas.

### Real-World i Values

| Substance | Behavior | i |
| --- | --- | --- |
| Glucose / urea / sucrose (water) | Non-electrolyte | 1 |
| NaCl (dilute) | Strong electrolyte | ~1.9–2.0 |
| NaCl (1 M) | Strong electrolyte | ~1.7 (ion-pairing) |
| CaCl₂ | Strong electrolyte | ~2.5–2.7 |
| CH₃COOH (water) | Weak acid | 1.01–1.10 |
| CH₃COOH / benzoic acid (benzene) | Associated (dimer) | ~0.5 |

## Henry’s Law (Gas in Liquid)

$$\boxed{P_{\text{gas}} = K_H \cdot \chi_{\text{gas}}}$$

Higher $K_H$ $\to$ lower solubility. Applications: carbonated drinks (CO₂), scuba diving (the bends / N₂ narcosis), O₂ solubility in blood. Example: $K_H$ for CO₂ in water at 25°C $= 1.67 \times 10^8$ torr.

## Key Constants & Reference Facts

| Item | Value |
| --- | --- |
| $R$ | 0.0821 L·atm/(mol·K) = 8.314 J/(mol·K) |
| Water: $M$, density | 18 g/mol, 1 g/mL (≈ 55.56 mol per L) |
| Normal saline | 0.9% NaCl — isotonic with blood ($\pi \approx 7.8$ atm) |
| Isotonic glucose | ~5% (w/v) |
| Seawater | ~3.5% salt → $\pi \approx 30$ atm |
| Common molar masses | NaCl 58.5, H₂SO₄ 98, NaOH 40, glucose 180, urea 60, sucrose 342 |

> **★ Key point · JEE Exam Strategy**
>
> Highest-weightage items across this chapter: M↔m interconversion, RLVP with non-volatile solute, molar mass from $\Delta T_f$, $\pi = iCRT$ for electrolytes, and computing $i$ then $\alpha$. Always check: molality (not molarity) for $\Delta T_b/\Delta T_f$, molarity (not molality) for $\pi$, the ×1000 factor, $\Delta T_f = T_f^0 - T_f$, and the van’t Hoff factor for any electrolyte.

## Related Topics

- [Concentration Methods](../concentration-methods/index.md)
- [Raoult’s Law](../raoults-law/index.md)
- [Colligative Properties](../colligative-properties/index.md)
- [Osmotic Pressure](../osmotic-pressure/index.md)
- [van’t Hoff Factor](../vant-hoff-factor/index.md)

From TestGuru · our mock-test platform

## You've read Solutions Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=solutions&tg_exam=jee-main&tg_page=%2Fchemistry%2Fsolutions%2Fformula-sheet%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/solutions/formula-sheet/",this.page.identifier="/chemistry/solutions/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/chemistry/solutions/formula-sheet/](https://jeenotes.in/chemistry/solutions/formula-sheet/) · raw HTML: `offline/chemistry/solutions/formula-sheet/index.html`_
