---
title: "Atoms and Nuclei Formula Sheet"
source: "https://jeenotes.in/physics/atoms-nuclei/formula-sheet/"
description: "All key Atoms & Nuclei Physics formulas - Bohr model, hydrogen spectrum, mass defect, binding energy, radioactivity, fission & fusion for JEE quick revision."
updated: "2026-11-22"
reading_time: "7 min read"
breadcrumb: "Physics"
position: "/ Topic 9 of 9"
html: "../../../../offline/physics/atoms-nuclei/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Atoms & Nuclei Physics formulas - Bohr model, hydrogen spectrum, mass defect, binding energy, radioactivity, fission & fusion for JEE quick revision.

Every must-know formula, constant, and decay rule for the Atoms and Nuclei chapter, grouped sub-topic by sub-topic for last-minute revision.

## Rutherford Model and Alpha Scattering

**Distance of closest approach** (head-on collision, all KE converts to PE):

$$\boxed{r_0 = \frac{2kZe^2}{K} = \frac{2.88\,Z}{K(\text{MeV})}\text{ fm}}$$

**Impact parameter vs scattering angle:**

$$\boxed{b = \frac{r_0}{2} \cot\left(\frac{\theta}{2}\right) = \frac{kZe^2}{K}\cot\left(\frac{\theta}{2}\right)}$$

**Coulomb force on alpha particle** ($+2e$) from nucleus ($+Ze$): $\;F = \dfrac{k(2e)(Ze)}{r^2} = \dfrac{2kZe^2}{r^2}$

**Rutherford scattering formula:**

$$\frac{dN}{d\Omega} = \frac{N_i\,t\,n}{16r^2}\left(\frac{2kZe^2}{K}\right)^2 \csc^4\left(\frac{\theta}{2}\right) \qquad N(\theta) \propto \frac{Z^2}{K^2 \sin^4(\theta/2)}$$

| Quantity | Relation | Notes |
| --- | --- | --- |
| Closest approach | $r_0 \propto Z/K$ and $\propto q$ | $q = 2e$ for $\alpha$, $e$ for proton |
| Impact parameter | $b = \frac{r_0}{2}\cot(\theta/2)$ | $b \to 0 \Rightarrow \theta \to 180^\circ$; $b\to\infty \Rightarrow \theta\to 0^\circ$ |
| Scattering count | $N \propto Z^2,\; \propto 1/K^2,\; \propto 1/\sin^4(\theta/2),\; \propto t$ | All verified experimentally |
| Nuclear density | $\sim 10^{17}$ kg/m³ | $r_{\text{atom}}/r_{\text{nucleus}} \sim 10^5$ |

> **★ Key point · Angle trap**
>
> Always use $\theta/2$ inside the trig functions, and never forget the alpha particle carries charge $+2e$ (factor of 2 in every formula).

## Bohr Model (Hydrogen-like Atoms)

**Postulate 1 - quantized angular momentum:**

$$\boxed{L = mvr = \frac{nh}{2\pi} = n\hbar}$$

**Postulate 2 - transition energy:** $\;E_{\text{photon}} = E_i - E_f = h\nu$

**Radius of nth orbit:**

$$\boxed{r_n = \frac{n^2 h^2 \varepsilon_0}{\pi m Z e^2} = \frac{n^2 a_0}{Z} = 0.529\times\frac{n^2}{Z}\text{ Å}}$$

**Velocity in nth orbit:**

$$\boxed{v_n = \frac{Ze^2}{2\varepsilon_0 nh} = \frac{Z}{n}\cdot\frac{c}{137} = 2.19\times10^6\times\frac{Z}{n}\text{ m/s}}$$

**Energy of nth level:**

$$\boxed{E_n = -\frac{13.6\,Z^2}{n^2}\text{ eV}}$$

### n and Z Dependence

| Quantity | Formula (H-like) | n-dependence | Z-dependence |
| --- | --- | --- | --- |
| Radius | $r_n = n^2 a_0/Z$ | $\propto n^2$ | $\propto 1/Z$ |
| Velocity | $v_n = Zke^2/n\hbar$ | $\propto 1/n$ | $\propto Z$ |
| Energy | $E_n = -13.6Z^2/n^2$ eV | $\propto 1/n^2$ | $\propto Z^2$ |
| Period | $T_n = 2\pi r_n/v_n$ | $\propto n^3$ | $\propto 1/Z^2$ |
| Frequency | $f = 1/T$ | $\propto 1/n^3$ | $\propto Z^2$ |
| Kinetic energy | $K = -E_n$ | $\propto 1/n^2$ | $\propto Z^2$ |
| Potential energy | $U = 2E_n$ | $\propto 1/n^2$ | $\propto Z^2$ |

**Virial theorem (energy split):** $\;E = -K = \dfrac{U}{2}, \qquad K = \dfrac{ke^2}{2r}, \quad U = -\dfrac{ke^2}{r}$

> **★ Key point · Z-scaling shortcut**
>
> Ground state energy of hydrogen is $-13.6$ eV. For He$^+$ ($Z=2$) multiply by $4$; for Li$^{2+}$ ($Z=3$) multiply by $9$. Ionization energy of level $n$ is $|E_n|$.

## Hydrogen Spectrum

**Generalized Rydberg formula** ($n_i > n_f$ for emission):

$$\boxed{\frac{1}{\lambda} = RZ^2\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)}, \qquad R = 1.097\times10^7\text{ m}^{-1}$$

**Photon energy form:** $\;E_{\text{photon}} = 13.6\left(\dfrac{1}{n_f^2} - \dfrac{1}{n_i^2}\right)$ eV

**Series limit** ($n_i = \infty$, shortest wavelength of a series):

$$\boxed{\lambda_{\text{limit}} = \frac{n_f^2}{R}}$$

**Number of spectral lines** from level $n$ (all cascades down):

$$\boxed{N = \frac{n(n-1)}{2}}$$

### Spectral Series Reference

| Series | $n_f$ | Region | First line / limit |
| --- | --- | --- | --- |
| Lyman | 1 | UV | L$\alpha$ 121.6 nm; limit 91.2 nm |
| Balmer | 2 | Visible + near UV | H$\alpha$ 656.3 nm; limit 364.6 nm |
| Paschen | 3 | Near IR | Pa$\alpha$ 1875 nm; limit 820 nm |
| Brackett | 4 | IR | 4051 nm; limit 1458 nm |
| Pfund | 5 | Far IR | 7460 nm; limit 2279 nm |

**Balmer (visible) lines:** H$\alpha$ 656.3 nm (red), H$\beta$ 486.1 nm (cyan), H$\gamma$ 434.0 nm (blue), H$\delta$ 410.2 nm (violet).

> **★ Key point · f for final**
>
> In $\tfrac{1}{\lambda}=R(1/n_f^2 - 1/n_i^2)$, use $n_f$ = lower (final) level and $n_i$ = higher (initial) level. Series limit is the SHORTEST wavelength, not the longest.

## Nuclear Structure and Mass-Energy

**Nuclear notation:** $^A_Z X_N$ with $\;N = A - Z$ (nucleons = protons + neutrons).

**Nuclear radius** (volume $\propto A$, so density is constant):

$$\boxed{R = R_0 A^{1/3}, \qquad R_0 = 1.2\text{ fm}}$$

**Nuclear density:** $\;\rho = \dfrac{3 m_u}{4\pi R_0^3} \approx 2.3\times10^{17}\text{ kg/m}^3$ (same for all nuclei).

**Radius ratio:** $\;\dfrac{R_1}{R_2} = \left(\dfrac{A_1}{A_2}\right)^{1/3}$

**Mass-energy unit:**

$$\boxed{1\text{ u} = 1.66054\times10^{-27}\text{ kg} = 931.5\text{ MeV}/c^2}$$

**Mass defect** (mass that becomes binding energy):

$$\boxed{\Delta m = [Z m_p + (A-Z)m_n] - M_{\text{nucleus}} = [Z m_p + N m_n + Z m_e] - M_{\text{atom}}}$$

### Particle Masses

| Particle | Mass (u) | Mass (MeV/$c^2$) | Charge |
| --- | --- | --- | --- |
| Proton | 1.007276 | 938.27 | $+e$ |
| Neutron | 1.008665 | 939.57 | 0 |
| Electron | 0.000549 | 0.511 | $-e$ |

Useful: $m_n > m_p > m_e$; $\;m_n - m_p \approx 1.3$ MeV/$c^2$; $\;m_p/m_e = 1836$; $\;m_n/m_e = 1839$.

**Packing fraction:** $\;f = \dfrac{M - A}{A}$ (negative $f$ $\Rightarrow$ more tightly bound).

### Same-Family Nuclei

| Type | Same | Different | Example |
| --- | --- | --- | --- |
| Isotopes | $Z$ | $A, N$ | $^{12}$C, $^{14}$C |
| Isobars | $A$ | $Z, N$ | $^{14}$C, $^{14}$N |
| Isotones | $N$ | $Z, A$ | $^{14}$C, $^{15}$N |
| Isomers | $Z, A, N$ | energy state | $^{99m}$Tc |

## Binding Energy

**Binding energy** (energy to fully disassemble the nucleus):

$$\boxed{BE = \Delta m\, c^2 = \Delta m(\text{u})\times 931.5\text{ MeV}}$$

**Binding energy per nucleon** (stability measure):

$$\boxed{\frac{BE}{A}} \qquad \text{maximum at } ^{56}\text{Fe} \approx 8.8\text{ MeV/nucleon}$$

**Q-value via binding energies:** $\;Q = BE_{\text{products}} - BE_{\text{reactants}}$

| Nucleus | $A$ | $BE/A$ (MeV) | Note |
| --- | --- | --- | --- |
| $^2$H | 2 | 1.11 | weakly bound |
| $^4$He | 4 | 7.07 | doubly magic, very stable |
| $^{12}$C | 12 | 7.68 |  |
| $^{16}$O | 16 | 7.97 |  |
| $^{56}$Fe | 56 | 8.790 | peak / most stable |
| $^{235}$U | 235 | 7.59 | fissile |
| $^{238}$U | 238 | 7.57 | fertile |

**Semi-empirical (Weizsäcker) mass formula** (concept only, not detailed for JEE):

$$BE = a_v A - a_s A^{2/3} - a_c\frac{Z^2}{A^{1/3}} - a_a\frac{(A-2Z)^2}{A} + \delta(A,Z)$$

with $a_v \approx 15.8$, $a_s \approx 18.3$, $a_c \approx 0.714$, $a_a \approx 23.2$ MeV.

> **★ Key point · Toward iron, energy flows**
>
> Any process moving a nucleus toward $A\approx 56$ raises $BE/A$ and releases energy: fusion climbs from the left, fission climbs from the right. $^{56}$Fe is the nuclear dead end.

## Radioactivity and Decay Laws

**Decay law:**

$$\boxed{N(t) = N_0\, e^{-\lambda t}}$$

**Activity** (decay rate):

$$\boxed{A(t) = -\frac{dN}{dt} = \lambda N = A_0\, e^{-\lambda t}}$$

Units: 1 Bq = 1 decay/s; $\;1$ Ci $= 3.7\times10^{10}$ Bq.

**Half-life:**

$$\boxed{T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}}$$

After $n$ half-lives ($n = t/T_{1/2}$): $\;N = N_0\left(\dfrac{1}{2}\right)^n$

**Mean life:**

$$\boxed{\tau = \frac{1}{\lambda} = \frac{T_{1/2}}{\ln 2} = 1.44\,T_{1/2}}$$

**Carbon-14 dating** ($T_{1/2} = 5730$ y): $\;t = \dfrac{T_{1/2}}{\ln 2}\ln\!\left(\dfrac{N_0}{N}\right) = \dfrac{T_{1/2}}{\ln 2}\ln\!\left(\dfrac{A_0}{A}\right)$

**Multiple decay modes:** $\;\lambda_{\text{eff}} = \lambda_1 + \lambda_2 + \cdots, \qquad T_{\text{eff}} = \dfrac{\ln 2}{\lambda_1 + \lambda_2}$

**Secular equilibrium** ($T_p \gg T_d$): $\;\lambda_p N_p = \lambda_d N_d$ (equal activities).

### Decay Types

| Decay | Reaction | $\Delta A$ | $\Delta Z$ |
| --- | --- | --- | --- |
| $\alpha$ | $^A_Z X \to\ ^{A-4}_{Z-2}Y + \ ^4_2\text{He}$ | $-4$ | $-2$ |
| $\beta^-$ | $^A_Z X \to\ ^{A}_{Z+1}Y + e^- + \bar{\nu}_e$ | 0 | $+1$ |
| $\beta^+$ | $^A_Z X \to\ ^{A}_{Z-1}Y + e^+ + \nu_e$ | 0 | $-1$ |
| Electron capture | $^A_Z X + e^- \to\ ^{A}_{Z-1}Y + \nu_e$ | 0 | $-1$ |
| $\gamma$ | $^A_Z X^* \to\ ^A_Z X + \gamma$ | 0 | 0 |

Underlying nucleon conversions: $\;n \to p + e^- + \bar{\nu}_e$ (for $\beta^-$); $\;p \to n + e^+ + \nu_e$ (for $\beta^+$). $\beta^+$ requires $M_{\text{parent}} > M_{\text{daughter}} + 2m_e$.

**Penetration:** $\alpha < \beta < \gamma$. **Ionization:** $\alpha > \beta > \gamma$.

> **★ Key point · Don't confuse the timescales**
>
> $T_{1/2} = 0.693/\lambda$ (NOT $1/\lambda$), while mean life $\tau = 1/\lambda = 1.44\,T_{1/2}$. Activity $A = \lambda N$ is a rate, not the number of nuclei.

## Nuclear Reactions, Fission and Fusion

**Conservation laws:** mass-energy, charge, nucleon number $A$, momentum, and angular momentum are all conserved (check both $A$ and $Z$).

**Q-value:**

$$\boxed{Q = (M_{\text{reactants}} - M_{\text{products}})c^2 = \Delta m(\text{u})\times 931.5\text{ MeV}}$$

$Q > 0$ exothermic (energy released); $Q < 0$ endothermic (energy absorbed).

**Reaction shorthand:** $X(a,b)Y$, e.g. first artificial transmutation $^{14}_7\text{N} + \ ^4_2\text{He} \to\ ^{17}_8\text{O} + \ ^1_1\text{H}$, i.e. $^{14}\text{N}(\alpha,p)^{17}\text{O}$.

### Fission

$$^{235}_{92}\text{U} + \ ^1_0 n \to\ ^{236}_{92}\text{U}^* \to\ ^{144}\text{Ba} + \ ^{89}\text{Kr} + 3n + \sim200\text{ MeV}$$

**Neutron multiplication factor:** $\;k = \dfrac{\text{neutrons in generation } (n+1)}{\text{neutrons in generation } n}$

- $k < 1$ subcritical (dies out); $\;k = 1$ critical (steady); $\;k > 1$ supercritical (grows).

| Quantity | Value |
| --- | --- |
| Energy per U-235 fission | $\sim200$ MeV |
| Energy per kg U-235 | $8.2\times10^{13}$ J |
| Neutrons per fission | 2-3 (avg 2.5) |
| Critical mass U-235 (bare sphere) | $\sim52$ kg |
| Critical mass Pu-239 (bare sphere) | $\sim10$ kg |

**Breeding:** $\;^{238}\text{U} + n \to\ ^{239}\text{U} \to\ ^{239}\text{Np} + \beta^- \to\ ^{239}\text{Pu} + \beta^-$. Fissile: $^{233}$U, $^{235}$U, $^{239}$Pu. Fertile: $^{232}$Th, $^{238}$U.

### Fusion

$$^2_1\text{H} + \ ^3_1\text{H} \to\ ^4_2\text{He}\,(3.5\text{ MeV}) + n\,(14.1\text{ MeV}) = 17.6\text{ MeV}$$

**Stellar proton-proton chain:** $\;4(^1_1\text{H}) \to\ ^4_2\text{He} + 2e^+ + 2\nu_e + 26.7\text{ MeV}$

**Coulomb barrier:** $\;E_{\text{barrier}} = \dfrac{kZ_1 Z_2 e^2}{r}$ ($\approx 0.4$ MeV for D-T at contact).

**Lawson criterion** (net energy gain): $\;n\tau > 10^{20}$ s/m³.

| Fusion reaction | Q-value (MeV) |
| --- | --- |
| D + T $\to$ He + n | 17.6 |
| D + D $\to$ $^3$He + n | 3.27 |
| D + D $\to$ T + p | 4.03 |
| p + p $\to$ D + $e^+$ + $\nu$ | 0.42 |

### Energy Conversions

| Energy | Equivalent |
| --- | --- |
| 1 kg matter ($E=mc^2$) | $9\times10^{16}$ J |
| 1 MeV | $1.602\times10^{-13}$ J |
| 1 kg TNT | $4.6\times10^6$ J |
| 1 kg U-235 fission | $\sim17$ kilotons TNT |

> **★ Key point · Per reaction vs per kg**
>
> Fission gives more energy per reaction ($\sim200$ MeV vs $\sim17.6$ MeV), but fusion gives about $10\times$ more energy per kilogram of fuel.

## Key Constants at a Glance

| Constant | Symbol | Value |
| --- | --- | --- |
| Bohr radius | $a_0$ | 0.529 Å $= 5.29\times10^{-11}$ m |
| Rydberg energy | $E_0$ | 13.6 eV $= 2.18\times10^{-18}$ J |
| Rydberg constant | $R$ | $1.097\times10^7$ m$^{-1}$ |
| Ground-state velocity | $v_1$ | $c/137 = 2.19\times10^6$ m/s |
| Reduced Planck constant | $\hbar$ | $1.055\times10^{-34}$ J·s |
| Fine-structure constant | $\alpha$ | $1/137 \approx 0.0073$ |
| Coulomb constant | $k$ | $9\times10^9$ N·m²/C² $= 1.44$ MeV·fm |
| Atomic mass unit | u | $1.66054\times10^{-27}$ kg $= 931.5$ MeV/$c^2$ |
| Nuclear radius constant | $R_0$ | 1.2 fm |
| $hc$ (handy) | - | 1240 eV·nm |

## Related Pages

- [Rutherford Model](../rutherford-model/index.md)
- [Bohr Model](../bohr-model/index.md)
- [Hydrogen Spectrum](../hydrogen-spectrum/index.md)
- [Nuclear Structure](../nuclear-structure/index.md)
- [Binding Energy](../binding-energy/index.md)
- [Radioactivity](../radioactivity/index.md)
- [Nuclear Reactions](../nuclear-reactions/index.md)

From TestGuru · our mock-test platform

## You've read Atoms and Nuclei Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=atoms-nuclei&tg_exam=jee-main&tg_page=%2Fphysics%2Fatoms-nuclei%2Fformula-sheet%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/atoms-nuclei/formula-sheet/",this.page.identifier="/physics/atoms-nuclei/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-14

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/atoms-nuclei/formula-sheet/](https://jeenotes.in/physics/atoms-nuclei/formula-sheet/) · raw HTML: `offline/physics/atoms-nuclei/formula-sheet/index.html`_
