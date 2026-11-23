---
title: "Equilibrium Formula Sheet"
source: "https://jeenotes.in/chemistry/equilibrium/formula-sheet/"
description: "All key Chemistry formulas for Chemical & Ionic Equilibrium: Kp-Kc, pH, Ka/Kb, Henderson-Hasselbalch, Ksp. JEE Main & Advanced quick revision."
updated: "2026-11-17"
reading_time: "7 min read"
breadcrumb: "Chemistry"
position: "/ Topic 8 of 8"
html: "../../../../offline/chemistry/equilibrium/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Chemistry formulas for Chemical & Ionic Equilibrium: Kp-Kc, pH, Ka/Kb, Henderson-Hasselbalch, Ksp. JEE Main & Advanced quick revision.

Every must-know formula, constant, and rule from the Equilibrium chapter on one scannable page. Use this for last-minute revision before JEE Main and Advanced.

## Chemical Equilibrium

For the general reaction $aA + bB \rightleftharpoons cC + dD$:

$$\boxed{K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}}$$

$$\boxed{K_p = \frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}}$$

$$\boxed{K_p = K_c(RT)^{\Delta n_g}}$$

where $\Delta n_g = (\text{moles of gaseous products}) - (\text{moles of gaseous reactants})$, $R = 0.0821 \text{ L}\cdot\text{atm}\cdot\text{mol}^{-1}\text{K}^{-1}$, and $T$ in Kelvin.

| Quantity | Formula / Rule | Notes |
| --- | --- | --- |
| Equilibrium constant | $K_c = \dfrac{[\text{products}]^{\text{powers}}}{[\text{reactants}]^{\text{powers}}}$ | Pure solids/liquids excluded |
| $K_p$ vs $K_c$ | $K_p = K_c(RT)^{\Delta n_g}$ | $K_p = K_c$ when $\Delta n_g = 0$ |
| Units of $K$ | $(\text{mol/L})^{\Delta n}$ | Unitless if $\Delta n = 0$ |
| Reaction quotient | $Q_c = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}$ | Same form as $K$, any instant |

> **★ Key point · When Kp = Kc**
>
> If $\Delta n_g = 0$, then $(RT)^0 = 1$, so $K_p = K_c$. Classic examples: $H_2 + I_2 \rightleftharpoons 2HI$ and $N_2 + O_2 \rightleftharpoons 2NO$ (both $\Delta n_g = 0$).

### Predicting Direction with Q

| Comparison | Direction | What happens |
| --- | --- | --- |
| $Q < K$ | Forward | More products form |
| $Q = K$ | At equilibrium | No net change |
| $Q > K$ | Backward | More reactants form |

### Magnitude of K

| $K$ value | Meaning | Position |
| --- | --- | --- |
| $K \gg 1$ ($> 10^3$) | Products favoured | Lies to right (nearly complete) |
| $K \approx 1$ | Both favoured equally | Middle |
| $K \ll 1$ ($< 10^{-3}$) | Reactants favoured | Lies to left (barely proceeds) |

### Manipulating Equilibrium Constants

| Operation on reaction | Effect on K |
| --- | --- |
| Reverse reaction | $K_{\text{reverse}} = \dfrac{1}{K_{\text{forward}}}$ |
| Multiply equation by $n$ | $K_{\text{new}} = (K_{\text{old}})^n$ |
| Add reactions (1 + 2) | $K_3 = K_1 \times K_2$ |

### Degree of Dissociation (α)

$$\alpha = \frac{\text{amount dissociated}}{\text{initial amount}}, \qquad 0 \leq \alpha \leq 1$$

For $A \rightleftharpoons B + C$ with initial concentration $C_0$:

$$K_c = \frac{C_0\alpha^2}{1-\alpha}$$

When $\alpha \ll 1$ (valid if $K_c/C_0 < 0.0025$):

$$\boxed{\alpha \approx \sqrt{\frac{K_c}{C_0}}}$$

> **★ Key point · Affects K vs Not**
>
> Only **temperature** changes $K$. Concentration, pressure, and catalyst have **no effect** on the value of $K$.

## Le Chatelier’s Principle

A system at equilibrium shifts to counteract any disturbance.

| Disturbance | Equilibrium response | K changes? |
| --- | --- | --- |
| Add reactant | Shifts toward products | No |
| Add product | Shifts toward reactants | No |
| Increase pressure ($\Delta n \neq 0$) | Toward fewer gas moles | No |
| Increase pressure ($\Delta n = 0$) | No effect | No |
| Increase temp (endothermic, $\Delta H > 0$) | Shifts forward | Yes, increases |
| Increase temp (exothermic, $\Delta H < 0$) | Shifts backward | Yes, decreases |
| Add catalyst | Faster equilibrium, same position | No |
| Add inert gas (constant V) | No effect | No |
| Add inert gas (constant P) | Toward more gas moles | No |

$$\boxed{\Delta n_g = (\text{moles of gas products}) - (\text{moles of gas reactants})}$$

> **★ Key point · Pressure & Temperature Tricks**
>
> Pressure matters **only when** $\Delta n \neq 0$.
>
> For temperature, treat heat as a reactant (endothermic) or product (exothermic), then apply Le Chatelier as for any species.

## Ionic Equilibrium

### Electrolytes

- Strong electrolytes: $\alpha = 1$ (complete ionisation), no equilibrium.
- Weak electrolytes: $\alpha \ll 1$ (partial ionisation), equilibrium exists.

### Ostwald’s Dilution Law

For weak electrolyte $AB \rightleftharpoons A^+ + B^-$ at concentration $C$:

$$K = \frac{C\alpha^2}{1-\alpha}$$

When $\alpha \ll 1$:

$$\boxed{\alpha = \sqrt{\frac{K}{C}}}$$

Dilution increases the degree of ionisation $\alpha$.

### Ionisation Constants

| Quantity | Formula | Notes |
| --- | --- | --- |
| Weak acid | $K_a = \dfrac{[H^+][A^-]}{[HA]}$ | $HA \rightleftharpoons H^+ + A^-$ |
| Weak base | $K_b = \dfrac{[B^+][OH^-]}{[BOH]}$ | $BOH \rightleftharpoons B^+ + OH^-$ |
| $[H^+]$ from weak acid | $[H^+] = C\alpha = \sqrt{K_a \cdot C}$ | when $\alpha \ll 1$ |
| $[OH^-]$ from weak base | $[OH^-] = \sqrt{K_b \cdot C}$ | when $\alpha \ll 1$ |

### Conjugate Pair Relation

$$\boxed{K_a \times K_b = K_w = 10^{-14} \text{ (at 25°C)}}$$

$$\boxed{pK_a + pK_b = 14}$$

> **★ Key point · High-Yield Conversion**
>
> Given $K_a$ of an acid, the $K_b$ of its conjugate base is $K_b = K_w / K_a$. This appears in nearly every ionic-equilibrium set.

### Common Ion Effect

Adding a common ion suppresses ionisation of a weak electrolyte, shifts equilibrium toward the unionised form, and decreases $\alpha$ (Le Chatelier).

### Isohydric Solutions

Two weak acids have the same $[H^+]$ when:

$$\sqrt{K_{a1}C_1} = \sqrt{K_{a2}C_2}$$

## Acids and Bases

| Theory | Acid | Base |
| --- | --- | --- |
| Arrhenius | Produces $H^+$ in water | Produces $OH^-$ in water |
| Brønsted–Lowry | Proton ($H^+$) donor | Proton ($H^+$) acceptor |
| Lewis | Electron-pair acceptor | Electron-pair donor |

**Conjugate pairs** differ by exactly one $H^+$:

$$\underbrace{HA}_{\text{acid 1}} + \underbrace{B}_{\text{base 2}} \rightleftharpoons \underbrace{A^-}_{\text{base 1}} + \underbrace{BH^+}_{\text{acid 2}}$$

- Strong acid $\leftrightarrow$ weak conjugate base; weak acid $\leftrightarrow$ strong conjugate base.
- Amphiprotic species (donate **and** accept $H^+$): $H_2O$, $HCO_3^-$, $HSO_4^-$, $H_2PO_4^-$, $HPO_4^{2-}$, $HS^-$.

### Factors Affecting Acid Strength

| Factor | Trend | Example |
| --- | --- | --- |
| Electronegativity of atom bonded to H | More EN → stronger acid | $HF > H_2O > NH_3 > CH_4$ |
| Atomic size (same group) | Larger atom → stronger acid | $HI > HBr > HCl > HF$ |
| Oxidation state of central atom (oxoacids) | Higher state → stronger acid | $HClO_4 > HClO_3 > HClO_2 > HClO$ |
| Resonance stabilisation of conjugate base | More resonance → stronger acid | $CH_3COOH > CH_3OH$ |

> **★ Key point · Seven Strong Acids**
>
> Memorise these — everything else is weak: $HCl,\ HBr,\ HI,\ HNO_3,\ H_2SO_4,\ HClO_4,\ HClO_3$.

## pH and Buffers

### Water and the pH Scale

$$\boxed{K_w = [H^+][OH^-] = 10^{-14} \text{ (at 25°C)}}$$

$$\boxed{pH = -\log[H^+]} \qquad \boxed{pOH = -\log[OH^-]}$$

$$\boxed{pH + pOH = 14 \text{ (at 25°C)}}$$

### pH Formulas by Solution Type

| Solution type | pH formula | Key point |
| --- | --- | --- |
| Strong acid (monoprotic) | $pH = -\log C$ | $[H^+] = C_{\text{acid}}$ |
| Strong base | $pH = 14 + \log C$ | $[OH^-] = C_{\text{base}}$ |
| Weak acid | $pH = \tfrac{1}{2}(pK_a - \log C)$ | no salt present |
| Weak base | $pH = 14 - \tfrac{1}{2}(pK_b - \log C)$ | no salt present |
| Acidic buffer | $pH = pK_a + \log\dfrac{[\text{Salt}]}{[\text{Acid}]}$ | Henderson–Hasselbalch |
| Basic buffer | $pOH = pK_b + \log\dfrac{[\text{Salt}]}{[\text{Base}]}$, then $pH = 14 - pOH$ | Henderson–Hasselbalch |

For a diprotic strong acid (e.g. $H_2SO_4$): $[H^+] = 2 \times C_{\text{acid}}$.

### Henderson–Hasselbalch Equation

$$\boxed{pH = pK_a + \log\frac{[\text{Salt}]}{[\text{Acid}]} = pK_a + \log\frac{[A^-]}{[HA]}}$$

$$\boxed{pOH = pK_b + \log\frac{[\text{Salt}]}{[\text{Base}]}}$$

### Buffer Capacity and Range

$$\beta = \frac{\text{amount of acid/base added}}{\text{change in pH}}$$

- Maximum buffer capacity when $[\text{Salt}] = [\text{Acid}]$, i.e. $pH = pK_a$.
- Effective buffer range: $pH = pK_a \pm 1$ (ratio between 0.1 and 10).

> **★ Key point · Buffer Reminders**
>
> A buffer needs **both** the weak acid **and** its conjugate base present.
>
> Use **initial** concentrations directly in Henderson–Hasselbalch (the common-ion effect keeps ionisation negligible).

### Salt Hydrolysis (pH of Salt Solutions)

| Salt type | pH | Example |
| --- | --- | --- |
| Strong acid + strong base | 7 | $NaCl$ |
| Strong acid + weak base | $< 7$ | $NH_4Cl$ |
| Weak acid + strong base | $> 7$ | $CH_3COONa$ |
| Weak acid + weak base | Depends on $K_a$ vs $K_b$ | $CH_3COONH_4$ |

## Solubility Product (Ksp)

For a sparingly soluble salt $A_xB_y(s) \rightleftharpoons xA^{y+} + yB^{x-}$:

$$\boxed{K_{sp} = [A^{y+}]^x [B^{x-}]^y}$$

The solid is **not** included; $K_{sp}$ applies only to saturated solutions and depends on temperature.

### Ksp–Solubility Relationships

| Salt type | $K_{sp}$ expression | $K_{sp}$–S relation | $S$ from $K_{sp}$ | Example |
| --- | --- | --- | --- | --- |
| AB | $[A^+][B^-]$ | $S^2$ | $\sqrt{K_{sp}}$ | $AgCl$, $BaSO_4$ |
| AB₂ | $[A^{2+}][B^-]^2$ | $4S^3$ | $\sqrt[3]{K_{sp}/4}$ | $CaF_2$, $PbCl_2$ |
| A₂B | $[A^+]^2[B^{2-}]$ | $4S^3$ | $\sqrt[3]{K_{sp}/4}$ | $Ag_2S$, $Ag_2CrO_4$ |
| AB₃ | $[A^{3+}][B^-]^3$ | $27S^4$ | $\sqrt[4]{K_{sp}/27}$ | $AlF_3$ |
| A₂B₃ | $[A^{3+}]^2[B^{2-}]^3$ | $108S^5$ | $\sqrt[5]{K_{sp}/108}$ | $Al_2(SO_4)_3$ |

### Ionic Product (Q) vs Ksp

| Comparison | State | Result |
| --- | --- | --- |
| $Q < K_{sp}$ | Unsaturated | No precipitation, more can dissolve |
| $Q = K_{sp}$ | Saturated | At equilibrium |
| $Q > K_{sp}$ | Supersaturated | Precipitation occurs |

### Common Ion Effect on Solubility

For $AgCl$ in a solution already containing the common ion at concentration $c$ (with solubility $s \ll c$):

$$K_{sp} = s \times c \implies s = \frac{K_{sp}}{c}$$

Solubility falls sharply compared with pure water.

### Selective Precipitation

The salt requiring the **lower** counter-ion concentration to reach $Q = K_{sp}$ precipitates first (lower $K_{sp}$, for the same salt type). Minimum ion concentration needed to start precipitation:

$$[\text{counter-ion}] = \left(\frac{K_{sp}}{[\text{given ion}]^{\,p}}\right)^{1/q}$$

where $p$ is the **given ion’s** coefficient and $q$ is the **counter-ion’s** coefficient (e.g. for $PbCl_2$ with $Pb^{2+}$ given: $p=1$, $q=2$, so $[Cl^-] = (K_{sp}/[Pb^{2+}])^{1/2}$).

> **★ Key point · pH and Solubility**
>
> For salts with basic anions ($OH^-$, $S^{2-}$, $CO_3^{2-}$): **higher pH lowers** solubility of metal hydroxides, while **lower pH raises** solubility of basic salts (acid removes the anion and pulls equilibrium right).

## Master Constants & Relations

| Relation | Value / Form |
| --- | --- |
| Ionic product of water | $K_w = [H^+][OH^-] = 10^{-14}$ (25°C) |
| $pH + pOH$ | $14$ (25°C) |
| Conjugate pair | $K_a \times K_b = K_w$; $pK_a + pK_b = 14$ |
| $K_p$–$K_c$ | $K_p = K_c(RT)^{\Delta n_g}$ |
| Gas constant | $R = 0.0821 \text{ L}\cdot\text{atm}\cdot\text{mol}^{-1}\text{K}^{-1} = 8.314 \text{ J}\cdot\text{mol}^{-1}\text{K}^{-1}$ |
| Max buffer capacity | at $pH = pK_a$ ($[\text{Salt}]=[\text{Acid}]$) |
| Effective buffer range | $pK_a \pm 1$ |

From TestGuru · our mock-test platform

## You've read Equilibrium Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=equilibrium&tg_exam=jee-main&tg_page=%2Fchemistry%2Fequilibrium%2Fformula-sheet%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/equilibrium/formula-sheet/",this.page.identifier="/chemistry/equilibrium/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/chemistry/equilibrium/formula-sheet/](https://jeenotes.in/chemistry/equilibrium/formula-sheet/) · raw HTML: `offline/chemistry/equilibrium/formula-sheet/index.html`_
