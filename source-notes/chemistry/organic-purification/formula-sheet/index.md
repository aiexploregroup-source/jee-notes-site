---
title: "Purification & Characterisation of Organic Compounds Formula Sheet"
source: "https://jeenotes.in/chemistry/organic-purification/formula-sheet/"
description: "All key formulas, tests, and reactions for organic purification and characterisation - Rf, Raoult, Carius, Kjeldahl, Lassaigne - JEE Main & Advanced quick revision."
updated: "2026-07-01"
reading_time: "7 min read"
breadcrumb: "Chemistry"
position: "/ Topic 6 of 6"
html: "../../../../offline/chemistry/organic-purification/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key formulas, tests, and reactions for organic purification and characterisation - Rf, Raoult, Carius, Kjeldahl, Lassaigne - JEE Main & Advanced quick revision.

Last-minute revision sheet for purification and characterisation of organic compounds. This chapter is mostly technique- and reaction-based, so it mixes a small set of true formulas (percentage composition, Rf, Raoult’s law, Clausius-Clapeyron) with high-yield qualitative tests, key reactions, and selection rules. Everything below is drawn only from the chapter pages.

## Purification Methods - Selection Rules

> **★ Key point · Pick the right technique first**
>
> Match the method to the physical nature of the sample before anything else. This single decision wins most “which technique” MCQs.

| Method | Use when | Key requirement |
| --- | --- | --- |
| Crystallization | Solid + temperature-dependent solubility difference | High solubility hot, low solubility cold |
| Simple distillation | Liquid + solid impurity, or two liquids | B.P. difference > 30 °C |
| Fractional distillation | Miscible liquids, close boiling points | B.P. difference < 30 °C (even 5-10 °C) |
| Steam distillation | Heat-sensitive, water-immiscible compound | Appreciable vapour pressure at ~100 °C |
| Vacuum distillation | High-B.P. compound that decomposes | Lower pressure -> lower B.P. |
| Chromatography | Closely related compounds / mixtures / trace amounts | Differential adsorption or partition |

## Crystallization

**Principle:** purification by difference in solubility of compound in hot vs cold solvent; pure crystals separate on cooling, impurities stay in mother liquor.

| Quantity | Relation | Notes |
| --- | --- | --- |
| Amount crystallized | $m_{\text{crystals}} = m_{\text{dissolved}} - (S_{\text{cold}} \times V)$ | $S$ = solubility per unit volume at the low temperature |
| % recovery | $\dfrac{m_{\text{crystals}}}{m_{\text{pure}}} \times 100$ | mother liquor retains $S_{\text{cold}} \times V$ |

**Condition for complete separation of A and B in one step:**

$$\boxed{\dfrac{S_A(T_H)}{S_A(T_L)} \gg \dfrac{S_B(T_H)}{S_B(T_L)}}$$

A must have a much steeper solubility-temperature curve than B.

> **★ Key point · High-yield crystallization rules**
>
> - Use **minimum** hot solvent -> maximizes yield.

> - **Slow cooling** -> large, pure crystals; rapid cooling traps impurities.

> - **Hot filtration** removes insoluble impurities; **activated charcoal** removes coloured impurities.

> - Wash crystals with **cold** solvent only (hot solvent dissolves product).

> - Heat organic/volatile solvents on a **water bath**, never a direct flame.

> - **Sharp melting point** = pure compound; a wide range signals impurities.

## Distillation

### Raoult’s Law (ideal solutions - fractional distillation)

$$\boxed{P_A = X_A \, P_A^{0}} \qquad P_{\text{total}} = P_A + P_B$$

Vapour-phase mole fraction (more volatile component is enriched):

$$Y_A = \dfrac{P_A}{P_{\text{total}}}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Partial pressure | $P_A = X_A P_A^{0}$ | $X_A$ = liquid mole fraction |
| Total pressure | $P_{\text{total}} = P_A + P_B$ | two-component ideal mix |
| Vapour composition | $Y_A = P_A / P_{\text{total}}$ | always richer in volatile component |
| Theoretical plate | one complete vaporization-condensation cycle | good column has 10-20 plates |
| Multi-plate enrichment | $\left(\dfrac{A}{B}\right)_n = \left(\dfrac{A}{B}\right)_0 \, \alpha^{\,n}$ | $\alpha$ = enrichment factor/plate, $n$ = plates |

### Steam Distillation

Boils when the sum of vapour pressures equals atmospheric pressure (below the B.P. of either pure liquid):

$$\boxed{P_{\text{total}} = P_{\text{water}} + P_{\text{organic}} = P_{\text{atm}}}$$

| Quantity | Formula | Notes |
| --- | --- | --- |
| Mole ratio in vapour | $\dfrac{n_{\text{org}}}{n_{\text{water}}} = \dfrac{P_{\text{org}}}{P_{\text{water}}}$ | independent of amount present |
| Mass ratio in distillate | $\dfrac{m_{\text{org}}}{m_{\text{water}}} = \dfrac{P_{\text{org}} \, M_{\text{org}}}{P_{\text{water}} \, M_{\text{water}}}$ | $M$ = molar mass |

### Vacuum Distillation - Clausius-Clapeyron

$$\boxed{\ln\!\left(\dfrac{P_2}{P_1}\right) = \dfrac{\Delta H_{vap}}{R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)}$$

Used to find the lowered boiling point at reduced pressure. Rule of thumb: roughly every halving of pressure lowers B.P. by 10-15 °C.

> **★ Key point · Apparatus rules that get tested**
>
> - **Thermometer bulb** sits at the **side-arm level** (measures vapour temperature, not liquid).

> - **Condenser water** enters from the **bottom**, exits at the **top** (countercurrent cooling).

> - **Boiling chips** added **before** heating (prevent superheating/bumping); never to a hot liquid.

### Azeotropes (constant-boiling mixtures - cannot be separated by simple fractional distillation)

| Type | Example | Composition / B.P. |
| --- | --- | --- |
| Minimum-boiling | Ethanol-water | 95.6% ethanol, 4.4% water; B.P. 78.2 °C |
| Maximum-boiling | HCl-water | 20.2% HCl, 79.8% water; B.P. 108.6 °C |

Break the ethanol-water azeotrope chemically: $\ce{CaO + H2O -> Ca(OH)2}$ removes water, giving absolute ethanol; or use 3 Å molecular sieves.

## Detection of Elements (Qualitative)

### Lassaigne’s (Sodium Fusion) Reactions

Sodium fusion converts covalent N, S, X into water-soluble ionic salts:

$$\ce{C, N + Na ->[\Delta] NaCN} \qquad \ce{C, S + Na ->[\Delta] Na2S} \qquad \ce{C, X + Na ->[\Delta] NaX}$$

When **both N and S** are present:

$$\ce{NaCN + S ->[\Delta] NaSCN}$$

### Element Tests Summary

| Element | Reagent / test | Positive result | Key reaction |
| --- | --- | --- | --- |
| Nitrogen | FeSO₄ then FeCl₃ (Prussian blue test) | Intense blue ppt | $\ce{3Na4[Fe(CN)6] + 4FeCl3 -> Fe4[Fe(CN)6]3 + 12NaCl}$ |
| Sulfur | Sodium nitroprusside | Purple/violet colour | $\ce{Na2S + Na2[Fe(CN)5NO] -> Na4[Fe(CN)5NOS]}$ |
| Sulfur | Lead acetate | Black ppt (PbS) | $\ce{Na2S + (CH3COO)2Pb -> PbS + 2CH3COONa}$ |
| N + S together | FeCl₃ | Blood-red colour | $\ce{NaSCN + FeCl3 -> [Fe(SCN)]^{2+}}$ |
| Halogen | dil. HNO₃ then AgNO₃ | Coloured ppt (see below) | $\ce{NaX + AgNO3 -> AgX + NaNO3}$ |
| Halogen (quick) | Beilstein (Cu wire) | Green flame | volatile CuX₂ |
| Carbon | Heat with CuO, lime water | Lime water turns milky | $\ce{C + 2CuO -> CO2 + 2Cu}$; $\ce{CO2 + Ca(OH)2 -> CaCO3 + H2O}$ |
| Hydrogen | Heat with CuO, anhyd. CuSO₄ | White CuSO₄ turns blue | $\ce{2H + CuO -> H2O + Cu}$ |
| Phosphorus | conc. HNO₃, then ammonium molybdate | Canary-yellow ppt | $\ce{Organic-P ->[HNO3] H3PO4}$ |

### Silver Halide Identification

| Halogen | AgX colour | Solubility in NH₃ |
| --- | --- | --- |
| Cl | White (AgCl) | Soluble in dilute NH₃ |
| Br | Pale yellow (AgBr) | Soluble only in conc. NH₃ |
| I | Yellow (AgI) | Insoluble even in conc. NH₃ |

Dissolution of AgCl: $\ce{AgCl + 2NH3 -> [Ag(NH3)2]+ + Cl-}$

> **★ Key point · Interference removal - examiners love this**
>
> - Remove **S²⁻ before the N test** (add lead acetate, filter off PbS) - otherwise blood-red SCN⁻ masks the blue.

> - Remove **CN⁻ and S²⁻ before the halogen test** by boiling with **dilute HNO₃**: $\ce{NaCN + HNO3 -> HCN ^ + NaNO3}$ and $\ce{Na2S + 2HNO3 -> H2S ^ + 2NaNO3}$ (fume hood - HCN is toxic).

> - Use **freshly prepared FeSO₄** (Fe²⁺); oxidised Fe³⁺ gives a false negative for nitrogen.

> - Use **HNO₃, not HCl/H₂SO₄**, before AgNO₃ (HCl adds Cl⁻; H₂SO₄ gives Ag₂SO₄).

## Quantitative Estimation

### Carbon & Hydrogen (Liebig combustion)

$$\boxed{\%\,C = \dfrac{12}{44} \times \dfrac{\text{mass of CO}_2}{\text{mass of compound}} \times 100}$$

$$\boxed{\%\,H = \dfrac{2}{18} \times \dfrac{\text{mass of H}_2\text{O}}{\text{mass of compound}} \times 100}$$

CO₂ absorbed in KOH; H₂O absorbed in anhydrous CaCl₂ (or Mg(ClO₄)₂).

### Nitrogen

**Dumas method** (works for all N; collects N₂ gas):

$$\text{moles of N}_2 = \dfrac{PV}{RT}, \qquad \%\,N = \dfrac{2 \times (\text{moles N}_2) \times 14}{\text{mass of compound}} \times 100$$

**Kjeldahl method** (amino-N only - amines, amides, proteins):

$$\ce{Organic-N ->[H2SO4] (NH4)2SO4} \;\xrightarrow{\text{NaOH}}\; \ce{NH3}$$

$$\%\,N = \dfrac{1.4 \times \text{(normality} \times \text{volume of acid used by NH}_3)}{\text{mass of compound}}$$

> **⚠ Trap · Kjeldahl fails for**
>
> Nitro (–NO₂), nitroso (–NO), azo (–N=N–), and ring/heterocyclic nitrogen (pyridine). These N atoms are not reduced to NH₃ by H₂SO₄ - use the Dumas method instead.

### Sulfur & Halogens (Carius method - oxidise in sealed tube with fuming HNO₃)

Sulfur, weighed as BaSO₄ (M = 233):

$$\boxed{\%\,S = \dfrac{32}{233} \times \dfrac{\text{mass of BaSO}_4}{\text{mass of compound}} \times 100}$$

Halogen, weighed as AgX:

$$\boxed{\%\,X = \dfrac{\text{at. mass of }X}{M_{AgX}} \times \dfrac{\text{mass of AgX}}{\text{mass of compound}} \times 100}$$

| Halide | $M_{AgX}$ | At. mass of X |
| --- | --- | --- |
| AgCl | 143.5 | Cl = 35.5 |
| AgBr | 188 | Br = 80 |
| AgI | 235 | I = 127 |

## Empirical & Molecular Formula

1. Find percentage composition of each element.
2. Empirical formula: divide each % by atomic mass, then by the smallest ratio.
3. Molecular formula:

$$\boxed{n = \dfrac{\text{Molar mass}}{\text{Empirical formula mass}}, \qquad \text{Molecular formula} = n \times \text{Empirical formula}}$$

## Chromatography

**Principle:** differential migration of components between a stationary and a mobile phase (adsorption for TLC/column; partition for paper).

### Retention factor

$$\boxed{R_f = \dfrac{\text{distance travelled by compound}}{\text{distance travelled by solvent front}}}$$

| Property | Value / meaning |
| --- | --- |
| Range | $0 < R_f < 1$ (ideal 0.3-0.7) |
| $R_f = 0$ | compound not moved (too strongly adsorbed) |
| $R_f = 1$ | moved with solvent front (not adsorbed) |
| Polar compound | low $R_f$ (strong adsorption on silica) |
| Non-polar compound | high $R_f$ |
| More polar mobile phase | higher $R_f$ |

### Partition coefficient (paper chromatography)

$$\boxed{R_f = \dfrac{K}{K + \beta}} \qquad K = \dfrac{R_f \, \beta}{1 - R_f}$$

where $K = C_{\text{mobile}}/C_{\text{stationary}}$ and $\beta = V_s/V_m$ is the phase ratio.

### Resolution & column efficiency

| Quantity | Formula | Notes |
| --- | --- | --- |
| Resolution | $R_s = \dfrac{2(d_2 - d_1)}{w_1 + w_2}$ | $R_s > 1.5$ = baseline separation |
| Theoretical plates | $N = 16\left(\dfrac{d}{w}\right)^2$ | higher $N$ = better efficiency |
| Plate height (HETP) | $HETP = \dfrac{L}{N}$ | lower = more efficient |
| Van Deemter | $H = A + \dfrac{B}{u} + Cu$ | optimal flow $u$ gives minimum $H$ |

### Eluotropic series (increasing polarity)

$$\text{Pet. ether} < \text{hexane} < \text{CCl}_4 < \text{benzene} < \text{CHCl}_3 < \text{Et}_2\text{O} < \text{EtOAc} < \text{acetone} < \text{MeOH} < \text{water}$$

> **★ Key point · Chromatography exam pointers**
>
> - **TLC** = analytical (mg scale, fast); **column** = preparative (g scale); **paper** = partition, best for polar compounds (amino acids, sugars).

> - Spot must sit **above** the solvent level; mark only with **pencil** (ink dissolves and runs).

> - Saturate the chamber with vapour for a straight solvent front and reproducible $R_f$.

> - Never let a column **run dry** (cracking, channelling, sample loss); flow ~1-2 drops/sec; adsorbent:sample ratio ≈ 30:1.

> - Visualisation: UV (254/366 nm), iodine vapour, ninhydrin (amino acids).

## Cross-Links

- [Crystallization](../crystallization/index.md)
- [Distillation](../distillation/index.md)
- [Detection of Elements](../detection-elements/index.md)
- [Chromatography](../chromatography/index.md)

From TestGuru · our mock-test platform

## You've read Purification & Characterisation of Organic Compounds Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=organic-purification&tg_exam=jee-main&tg_page=%2Fchemistry%2Forganic-purification%2Fformula-sheet%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/organic-purification/formula-sheet/",this.page.identifier="/chemistry/organic-purification/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/chemistry/organic-purification/formula-sheet/](https://jeenotes.in/chemistry/organic-purification/formula-sheet/) · raw HTML: `offline/chemistry/organic-purification/formula-sheet/index.html`_
