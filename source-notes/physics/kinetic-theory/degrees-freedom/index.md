---
title: "Degrees of Freedom and Law of Equipartition of Energy"
source: "https://jeenotes.in/physics/kinetic-theory/degrees-freedom/"
description: "Master degrees of freedom and energy distribution in gas molecules for JEE"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 7"
html: "../../../../offline/physics/kinetic-theory/degrees-freedom/index.html"
extracted: "2026-11-23"
---

> Master degrees of freedom and energy distribution in gas molecules for JEE

# Degrees of Freedom and Law of Equipartition of Energy

## Real-Life Hook

Why does a diatomic gas like air have different specific heat than a monoatomic gas like helium? The answer lies in degrees of freedom! When you heat air, energy goes into not just translational motion (movement in space), but also rotational motion (spinning of molecules). That’s why air needs more energy to raise its temperature by 1°C compared to helium - it’s like filling multiple energy “buckets” instead of just one! This principle is crucial in understanding why steam burns more severely than boiling water at the same temperature - steam molecules store extra energy in rotational and vibrational modes.

## Core Concepts

### What are Degrees of Freedom?

> **Degrees of Freedom (f)**
>
> The number of independent ways in which a molecule can possess energy, or the minimum number of independent coordinates required to specify the position and configuration of a system completely.

**Key Point**: Each degree of freedom represents a distinct mode in which energy can be stored.

### Types of Degrees of Freedom

#### 1. Translational Degrees of Freedom

Motion of the center of mass in space (along x, y, z axes).

- **All molecules** have 3 translational degrees of freedom
- Energy: $E_{trans} = \frac{1}{2}m(v_x^2 + v_y^2 + v_z^2)$

#### 2. Rotational Degrees of Freedom

Rotation about different axes passing through the center of mass.

- Depends on molecular structure
- Very small moments of inertia about the molecular axis are ignored

#### 3. Vibrational Degrees of Freedom

Oscillatory motion of atoms within a molecule.

- Important at high temperatures
- Each vibrational mode contributes 2 degrees of freedom (KE + PE)

## Degrees of Freedom for Different Molecules

### Monoatomic Gas (e.g., He, Ne, Ar)

> **Monoatomic: f = 3**
>
> - 3 translational

> - 0 rotational (point mass approximation)

> - 0 vibrational

**Examples**: Noble gases (He, Ne, Ar, Kr, Xe), metal vapors (Na, Hg)

**Physical Reason**: Single atoms can only translate; rotation of a point mass about its own axis has negligible moment of inertia.

### Diatomic Gas (e.g., H₂, O₂, N₂)

#### At Room Temperature (Linear Molecule):

> **Diatomic (moderate T): f = 5**
>
> - 3 translational

> - 2 rotational (about two perpendicular axes)

> - 0 vibrational (not excited at room T)

**Physical Reason**: Rotation about the molecular axis (line joining atoms) has negligible moment of inertia, so only 2 rotational modes count.

#### At High Temperature:

> **Diatomic (high T): f = 7**
>
> - 3 translational

> - 2 rotational

> - 2 vibrational (1 mode × 2 for KE and PE)

**Temperature Threshold**: Vibrational modes activate above ~1000 K for most diatomic gases.

### Triatomic and Polyatomic Gases

#### Linear Triatomic (e.g., CO₂):

> **Linear Triatomic: f = 7** (at moderate T)
>
> - 3 translational

> - 2 rotational

> - 2 vibrational (simplified)

#### Non-Linear Triatomic (e.g., H₂O):

> **Non-linear Triatomic: f = 6** (at moderate T)
>
> - 3 translational

> - 3 rotational (can rotate about all three axes)

> - 0 vibrational (at room temperature)

#### General Polyatomic (N atoms):

**Linear**: $f = 3N$

- Translational: 3
- Rotational: 2
- Vibrational: $3N - 5$

**Non-linear**: $f = 3N$

- Translational: 3
- Rotational: 3
- Vibrational: $3N - 6$

## Law of Equipartition of Energy

> **Law of Equipartition of Energy**
>
> In thermal equilibrium, energy is equally distributed among all degrees of freedom, with each degree of freedom possessing an average energy of $\frac{1}{2}kT$ per molecule (or $\frac{1}{2}RT$ per mole).

### Energy Per Degree of Freedom

> **Energy per degree of freedom**
>
> $$E_{per \, DOF} = \frac{1}{2}kT$$
>
> (per molecule)
>
> $$E_{per \, DOF} = \frac{1}{2}RT$$
>
> (per mole)

### Total Energy Formulas

For a molecule with $f$ degrees of freedom:

> **Average Energy per Molecule**
>
> $$\overline{E} = \frac{f}{2}kT$$

> **Internal Energy per Mole**
>
> $$U = \frac{f}{2}RT$$

> **Internal Energy for n moles**
>
> $$U = n \cdot \frac{f}{2}RT$$

### Internal Energy for Different Gases

| Gas Type | f | U (per mole) | U (n moles) |
| --- | --- | --- | --- |
| Monoatomic | 3 | $\frac{3}{2}RT$ | $\frac{3}{2}nRT$ |
| Diatomic (room T) | 5 | $\frac{5}{2}RT$ | $\frac{5}{2}nRT$ |
| Diatomic (high T) | 7 | $\frac{7}{2}RT$ | $\frac{7}{2}nRT$ |
| Linear Triatomic | 7 | $\frac{7}{2}RT$ | $\frac{7}{2}nRT$ |
| Non-linear Triatomic | 6 | $\frac{6}{2}RT = 3RT$ | $3nRT$ |

## Specific Heat Capacities

### Molar Specific Heat at Constant Volume ($C_V$)

From $U = \frac{f}{2}nRT$:

$$C_V = \frac{1}{n}\frac{dU}{dT} = \frac{f}{2}R$$

> **Molar Specific Heat ($C_V$)**
>
> $$C_V = \frac{f}{2}R$$

### Molar Specific Heat at Constant Pressure ($C_P$)

From Mayer’s relation: $C_P - C_V = R$

$$C_P = C_V + R = \frac{f}{2}R + R = \frac{f+2}{2}R$$

> **Molar Specific Heat ($C_P$)**
>
> $$C_P = \frac{f+2}{2}R$$

### Heat Capacity Ratio (γ)

$$\gamma = \frac{C_P}{C_V} = \frac{(f+2)R/2}{fR/2} = \frac{f+2}{f}$$

> **Adiabatic Index (γ)**
>
> $$\gamma = 1 + \frac{2}{f}$$

### Values for Different Gases

| Gas Type | f | $C_V$ | $C_P$ | γ |
| --- | --- | --- | --- | --- |
| Monoatomic | 3 | $\frac{3}{2}R$ | $\frac{5}{2}R$ | 1.67 |
| Diatomic (room T) | 5 | $\frac{5}{2}R$ | $\frac{7}{2}R$ | 1.40 |
| Diatomic (high T) | 7 | $\frac{7}{2}R$ | $\frac{9}{2}R$ | 1.29 |
| Non-linear Triatomic | 6 | $3R$ | $4R$ | 1.33 |

### Interactive Demo: Energy Equipartition in Action

See how energy distributes among different degrees of freedom as temperature changes.

## Memory Tricks

### “3-5-7” Rule for Diatomic Gases

- At **low T**: f = **3** (frozen rotations and vibrations - theoretical)
- At **room T**: f = **5** (rotations active, vibrations frozen)
- At **high T**: f = **7** (all modes active)

### “Monoatomic is 3, Add 2 for Rotation”

- Monoatomic: f = 3 (only translation)
- Diatomic: f = 3 + 2 = 5 (translation + rotation)
- Add 2 more for vibration at high T: f = 7

### γ Quick Values

- **1.67** for monoatomic (Noble gases) - “**1 and 2/3**”
- **1.40** for diatomic (Air, O₂, N₂) - “**1.4** like air”
- **1.33** for triatomic - “**1 and 1/3**”

### Mayer’s Relation: “CP minus CV equals R”

$$C_P - C_V = R$$

Think: “**C**onstant **P**ressure needs more energy than **C**onstant **V**olume by amount R”

### Energy Equipartition: “Half-kT per mode”

Each degree of freedom = $\frac{1}{2}kT$

- Monoatomic: 3 modes → $\frac{3}{2}kT$
- Diatomic: 5 modes → $\frac{5}{2}kT$

## Common Unit Conversion Mistakes

### Gas Constant R

- $R = 8.314$ J/(mol·K) for energy calculations
- $R = 0.0821$ L·atm/(mol·K) for PV work
- **Never mix**: Use 8.314 when calculating $C_V$, $C_P$, or U

### Specific Heat Units

- Molar specific heat: J/(mol·K)
- Specific heat: J/(kg·K) or J/(g·K)
- **Don’t confuse**: $C$ (molar) vs $c$ (specific per unit mass)

**Conversion**: $c = \frac{C}{M}$ where M = molar mass

### Temperature

- Always use Kelvin (K) for energy calculations
- $U = \frac{f}{2}nRT$ requires T in Kelvin

### Common Errors

1. **Using f = 3 for diatomic at room temperature**: Should be f = 5
2. **Forgetting the factor of 2**: $C_P = \frac{f+2}{2}R$ not $(f+2)R$
3. **Using γ = 1.4 for monoatomic gases**: Should be 1.67
4. **Confusing $C_V$ and $C_P$**: Remember $C_P > C_V$ always

## Important Formulas Summary

### Degrees of Freedom

> $$f = \text{Translational} + \text{Rotational} + 2 \times \text{Vibrational modes}$$

### Energy Relations

> $$U = \frac{f}{2}nRT$$
>
> (Internal energy)
>
> $$C_V = \frac{f}{2}R$$
>
> (Molar heat capacity at constant V)
>
> $$C_P = \frac{f+2}{2}R$$
>
> (Molar heat capacity at constant P)
>
> $$\gamma = 1 + \frac{2}{f} = \frac{C_P}{C_V}$$
>
> (Adiabatic index)

### Mayer’s Relation

> $$C_P - C_V = R$$

### Adiabatic Process Relations

> $$PV^\gamma = \text{constant}$$

$$TV^{\gamma-1} = \text{constant}$$

$$P^{1-\gamma}T^\gamma = \text{constant}$$

## 3-Level Practice Problems

### Level 1: JEE Main Basics

**Problem 1**: Calculate the molar specific heats $C_V$ and $C_P$ for helium gas. Also find γ. (R = 8.314 J/(mol·K))

<details><summary>Solution</summary><p>Helium is monoatomic, so f = 3</p>$$C_V = \frac{f}{2}R = \frac{3}{2} \times 8.314 = 12.471 \text{ J/(mol}\cdot\text{K)}$$

$$C_P = C_V + R = 12.471 + 8.314 = 20.785 \text{ J/(mol}\cdot\text{K)}$$<p>Or: $C_P = \frac{f+2}{2}R = \frac{5}{2} \times 8.314 = 20.785$ J/(mol·K)</p>$$\gamma = \frac{C_P}{C_V} = \frac{20.785}{12.471} = 1.67$$<p>Or: $\gamma = 1 + \frac{2}{f} = 1 + \frac{2}{3} = 1.67$</p><p><strong>Answer</strong>: $C_V = 12.5$ J/(mol·K), $C_P = 20.8$ J/(mol·K), γ = 1.67</p></details>

**Problem 2**: Find the internal energy of 2 moles of nitrogen gas at 27°C. (For N₂, f = 5, R = 8.314 J/(mol·K))

<details><summary>Solution</summary><p>Given:</p><ul><li>n = 2 mol</li><li>T = 27 + 273 = 300 K</li><li>f = 5 (diatomic at room temperature)</li></ul>$$U = \frac{f}{2}nRT = \frac{5}{2} \times 2 \times 8.314 \times 300$$

$$U = 2.5 \times 2 \times 8.314 \times 300 = 12471 \text{ J} = 12.47 \text{ kJ}$$<p><strong>Answer</strong>: 12.47 kJ</p></details>

### Level 2: JEE Main Advanced

**Problem 3**: A gas has γ = 1.4. Calculate:
(a) Degrees of freedom
(b) Molar specific heats $C_V$ and $C_P$
(c) Type of gas

<details><summary>Solution</summary><p><strong>(a) Degrees of freedom</strong>:</p><p>From $\gamma = 1 + \frac{2}{f}$:</p>$$1.4 = 1 + \frac{2}{f}$$

$$0.4 = \frac{2}{f}$$

$$f = \frac{2}{0.4} = 5$$<p><strong>(b) Specific heats</strong>:</p>$$C_V = \frac{f}{2}R = \frac{5}{2} \times 8.314 = 20.785 \text{ J/(mol}\cdot\text{K)}$$

$$C_P = C_V + R = 20.785 + 8.314 = 29.099 \text{ J/(mol}\cdot\text{K)}$$<p><strong>(c) Type of gas</strong>:</p><p>f = 5 indicates <strong>diatomic gas</strong> at room temperature (like N₂, O₂, air)</p><p><strong>Answer</strong>:</p><ul><li>(a) f = 5</li><li>(b) $C_V = 20.8$ J/(mol·K), $C_P = 29.1$ J/(mol·K)</li><li>(c) Diatomic gas</li></ul></details>

**Problem 4**: Two moles of a monoatomic gas and three moles of a diatomic gas are mixed. Calculate the equivalent value of γ for the mixture. (Assume room temperature)

<details><summary>Solution</summary><p>For monoatomic gas: $f_1 = 3$, $n_1 = 2$ mol
For diatomic gas: $f_2 = 5$, $n_2 = 3$ mol</p><p>For a mixture, equivalent $C_V$:</p>$$C_{V,mix} = \frac{n_1 C_{V1} + n_2 C_{V2}}{n_1 + n_2}$$

$$C_{V,mix} = \frac{2 \times \frac{3}{2}R + 3 \times \frac{5}{2}R}{2 + 3}$$

$$C_{V,mix} = \frac{3R + 7.5R}{5} = \frac{10.5R}{5} = 2.1R$$<p>Using Mayer’s relation:</p>$$C_{P,mix} = C_{V,mix} + R = 2.1R + R = 3.1R$$

$$\gamma_{mix} = \frac{C_{P,mix}}{C_{V,mix}} = \frac{3.1R}{2.1R} = \frac{3.1}{2.1} = 1.476$$<p><strong>Answer</strong>: γ = 1.48 (approximately)</p><p><strong>Shortcut</strong>: Equivalent f:</p>$$f_{eq} = \frac{n_1f_1 + n_2f_2}{n_1 + n_2} = \frac{2(3) + 3(5)}{5} = \frac{21}{5} = 4.2$$

$$\gamma = 1 + \frac{2}{f_{eq}} = 1 + \frac{2}{4.2} = 1.476$$</details>

### Level 3: JEE Advanced

**Problem 5**: One mole of an ideal gas undergoes a process where its internal energy changes according to $U = aT^2$, where a is a constant. Find the molar specific heat of the gas as a function of temperature. At what temperature does this equal the $C_V$ of a diatomic gas?

<details><summary>Solution</summary><p>Given: $U = aT^2$</p><p>Molar specific heat: $C = \frac{dU}{dT}$ (for 1 mole)</p>$$C = \frac{d(aT^2)}{dT} = 2aT$$<p>For diatomic gas: $C_V = \frac{5}{2}R$</p><p>Setting them equal:</p>$$2aT = \frac{5}{2}R$$

$$T = \frac{5R}{4a}$$<p><strong>Answer</strong>: $C = 2aT$; Temperature = $\frac{5R}{4a}$</p><p><strong>Note</strong>: This is a polytropic process where specific heat varies with temperature.</p></details>

**Problem 6**: Prove that for an ideal gas undergoing an adiabatic process, the work done is:

$$W = \frac{nR(T_1 - T_2)}{\gamma - 1}$$

<details><summary>Solution</summary><p>For an adiabatic process: $Q = 0$</p><p>From first law: $\Delta U = Q - W$</p>$$\Delta U = -W$$

$$W = -\Delta U = -(U_2 - U_1) = U_1 - U_2$$<p>For an ideal gas:</p>$$U = nC_VT$$

$$W = nC_V(T_1 - T_2)$$<p>We know: $C_V = \frac{R}{\gamma - 1}$ (from $\gamma = \frac{C_P}{C_V}$ and $C_P - C_V = R$)</p><p><strong>Derivation of $C_V = \frac{R}{\gamma-1}$</strong>:</p>$$\gamma = \frac{C_P}{C_V} = \frac{C_V + R}{C_V} = 1 + \frac{R}{C_V}$$

$$\gamma - 1 = \frac{R}{C_V}$$

$$C_V = \frac{R}{\gamma - 1}$$<p>Substituting:</p>$$W = n \cdot \frac{R}{\gamma - 1} \cdot (T_1 - T_2)$$<blockquote>$$W = \frac{nR(T_1 - T_2)}{\gamma - 1}$$</blockquote><p><strong>Proved</strong></p><p>Alternative forms:</p>$$W = \frac{P_1V_1 - P_2V_2}{\gamma - 1}$$<p>(using PV = nRT)</p></details>

## Advanced Concepts

### Why Vibrations are “Frozen” at Room Temperature

Quantum mechanics explains that vibrational energy levels are quantized with large spacing:

$$\Delta E_{vib} \approx \hbar\omega$$

At room temperature, $kT << \hbar\omega$ for most molecules, so vibrational modes are not excited.

**Threshold Temperature**: Vibrational modes activate when $kT \approx \hbar\omega$, typically above 1000 K.

### Temperature Dependence of Specific Heat

Real gases show variation in $C_V$ with temperature:

- Low T: Only translation → $C_V = \frac{3}{2}R$
- Room T: Translation + Rotation → $C_V = \frac{5}{2}R$
- High T: Translation + Rotation + Vibration → $C_V = \frac{7}{2}R$

This is called “freezing” and “unfreezing” of degrees of freedom.

## Cross-Links to Other Topics

### Related to Kinetic Theory

- [Kinetic Theory Assumptions](../kinetic-theory-assumptions/index.md) - Energy and temperature relation
- [Molecular Speeds](../molecular-speeds/index.md) - Translational KE distribution
- [Ideal Gas Equation](../ideal-gas-equation/index.md) - PV = nRT connections

### Related to Thermodynamics

- [First Law of Thermodynamics](../../thermodynamics/first-law/index.md) - Internal energy changes
- [Specific Heat Capacities](../../thermodynamics/specific-heat/index.md) - $C_P$ and $C_V$ applications
- [Adiabatic Processes](../../thermodynamics/index.md) - Using γ in calculations
- [Polytropic Processes](../../thermodynamics/index.md) - General PV^n relations

### Applications

- Thermodynamic cycles (Otto, Diesel, Carnot)
- Speed of sound in gases: $v = \sqrt{\frac{\gamma RT}{M}}$
- Heat engines and refrigerators

## Key Takeaways

1. **Degrees of freedom** = number of independent ways to store energy
2. **Equipartition**: Each DOF contributes $\frac{1}{2}kT$ average energy
3. **Monoatomic**: f = 3, γ = 1.67
4. **Diatomic (room T)**: f = 5, γ = 1.40
5. **Mayer’s relation**: $C_P - C_V = R$ (always true for ideal gases)
6. **γ and f**: $\gamma = 1 + \frac{2}{f}$
7. **Internal energy**: $U = \frac{f}{2}nRT$ (depends on temperature only for ideal gas)

## Exam Tips

- **JEE Main**: Focus on calculating f, $C_V$, $C_P$, γ for common gases
- **JEE Advanced**: Expect gas mixtures, derivations, and polyatomic molecules
- **Common trap**: Using f = 3 for all gases (check if mono/diatomic/polyatomic!)
- **Quick check**: γ must be > 1 always (since $C_P > C_V$)
- **Memory aid**: Air is diatomic → γ = 1.4 → f = 5
- **Conceptual**: Understand why rotation adds 2 DOF but vibration adds 2 per mode

---

*Last updated: February 25, 2025*

From TestGuru · our mock-test platform

## You've read Degrees of Freedom and Law of Equipartition of Energy.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinetic-theory&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinetic-theory%2Fdegrees-freedom%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinetic-theory/degrees-freedom/",this.page.identifier="/physics/kinetic-theory/degrees-freedom/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicsProcess" id="anim-thermodynamicsProcess-1795396423757362275"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicsProcess-1795396423757362275")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinetic-theory/degrees-freedom/](https://jeenotes.in/physics/kinetic-theory/degrees-freedom/) · raw HTML: `offline/physics/kinetic-theory/degrees-freedom/index.html`_
