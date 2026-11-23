---
title: "Molecular Speeds: RMS, Average, and Most Probable"
source: "https://jeenotes.in/physics/kinetic-theory/molecular-speeds/"
description: "Master the three types of molecular speeds and Maxwell-Boltzmann distribution for JEE"
updated: "2026-08-01"
reading_time: "9 min read"
breadcrumb: "Physics"
position: "/ Topic 5 of 7"
html: "../../../../offline/physics/kinetic-theory/molecular-speeds/index.html"
extracted: "2026-11-23"
---

> Master the three types of molecular speeds and Maxwell-Boltzmann distribution for JEE

# Molecular Speeds: RMS, Average, and Most Probable

## Real-Life Hook

Ever wondered why helium balloons rise while air-filled ones don’t? It’s all about molecular speeds! Helium atoms, being lighter, move at average speeds of about 1,350 m/s at room temperature - that’s faster than the speed of sound (343 m/s)! This is why helium changes your voice when you inhale it - sound waves travel faster through the lighter, faster-moving helium molecules. Similarly, this is why hydrogen is the fastest-escaping gas from Earth’s atmosphere, while heavier gases like CO₂ stay trapped. Understanding molecular speeds also explains why refrigerators work - slower-moving molecules mean lower temperature!

## Core Concepts

### Why Three Different Speeds?

In a gas, molecules don’t all move at the same speed. The Maxwell-Boltzmann distribution shows that molecules have a wide range of speeds, from nearly zero to very high values. We use three statistical measures:

1. **Most Probable Speed** ($v_p$): The speed at which maximum molecules are found
2. **Average Speed** ($\overline{v}$): The arithmetic mean of all molecular speeds
3. **Root Mean Square Speed** ($v_{rms}$): The square root of the mean of squared speeds

### Maxwell-Boltzmann Distribution

The distribution of molecular speeds follows:

> **Maxwell-Boltzmann Distribution Function**
>
> $$f(v) = 4\pi n \left(\frac{m}{2\pi kT}\right)^{3/2} v^2 e^{-\frac{mv^2}{2kT}}$$
>
> Where:
>
> - $f(v)$ = number of molecules with speed $v$

> - $n$ = total number of molecules

> - $m$ = mass of one molecule

> - $k$ = Boltzmann constant

> - $T$ = absolute temperature

**Key Features**:

- Asymmetric curve (not Gaussian)
- Peak shifts right with increasing temperature
- Area under curve = total number of molecules
- No molecules at v = 0 (v² term) or v → ∞ (exponential decay)

## The Three Speeds: Formulas and Derivations

### 1. Most Probable Speed ($v_p$)

The speed at which the distribution function is maximum (peak of the curve).

> **Most Probable Speed**
>
> $$v_p = \sqrt{\frac{2kT}{m}} = \sqrt{\frac{2RT}{M}}$$
>
> Where:
>
> - $k$ = Boltzmann constant = 1.38 × 10⁻²³ J/K

> - $R$ = Gas constant = 8.314 J/(mol·K)

> - $m$ = mass of one molecule (kg)

> - $M$ = molar mass (kg/mol)

**Derivation**: Found by setting $\frac{df(v)}{dv} = 0$

**Physical Meaning**: The speed at which you’ll find the maximum number of molecules.

### 2. Average Speed ($\overline{v}$)

The arithmetic mean of all molecular speeds.

> **Average (Mean) Speed**
>
> $$\overline{v} = \sqrt{\frac{8kT}{\pi m}} = \sqrt{\frac{8RT}{\pi M}}$$
>
> Or:
>
> $$\overline{v} = \sqrt{\frac{8}{\pi}} \sqrt{\frac{RT}{M}} \approx 1.596\sqrt{\frac{RT}{M}}$$

**Derivation**: $\overline{v} = \frac{\int_0^\infty v \cdot f(v) \, dv}{\int_0^\infty f(v) \, dv}$

**Physical Meaning**: The average speed if you measured every single molecule.

### 3. Root Mean Square Speed ($v_{rms}$)

The square root of the average of squared speeds.

> **RMS Speed**
>
> $$v_{rms} = \sqrt{\overline{v^2}} = \sqrt{\frac{3kT}{m}} = \sqrt{\frac{3RT}{M}}$$

**Derivation**: From kinetic theory, $\frac{1}{2}m\overline{v^2} = \frac{3}{2}kT$

**Physical Meaning**: Related to average kinetic energy; used in kinetic energy calculations.

### Comparing the Three Speeds

> **Speed Ratio**
>
> $$v_p : \overline{v} : v_{rms} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3}$$

$$v_p : \overline{v} : v_{rms} = 1 : 1.128 : 1.224$$
>
> Or approximately: **1 : 1.13 : 1.22**

**Important Relation**:

$$v_p < \overline{v} < v_{rms}$$

Always in this order!

## Memory Tricks

### “2-8-3 for Pi-Pie-Pie” Mnemonic

- $v_p$ has **2** (and no π): $v_p = \sqrt{\frac{2RT}{M}}$
- $\overline{v}$ has **8/π**: $\overline{v} = \sqrt{\frac{8RT}{\pi M}}$
- $v_{rms}$ has **3** (and no π): $v_{rms} = \sqrt{\frac{3RT}{M}}$

### “PAR” Order

- **P**robable is smallest
- **A**verage is middle
- **R**MS is largest

### Speed Ratio Trick

Remember: **1 : 1.13 : 1.22**

- Or think: 1, then add ~0.13, then add ~0.09 more
- For quick estimates: 10 : 11.3 : 12.2 (multiply by 10)

### Temperature Dependence

All three speeds are proportional to $\sqrt{T}$

- “Speed ↑ when Temperature ↑, but as square root!”
- Double temperature → speeds increase by $\sqrt{2} \approx 1.414$ times

### Molar Mass Dependence

All three speeds are proportional to $\frac{1}{\sqrt{M}}$

- “Lighter gases move faster!”
- $\frac{v_{H_2}}{v_{O_2}} = \sqrt{\frac{32}{2}} = 4$ (H₂ is 4× faster than O₂)

## Common Unit Conversion Mistakes

### Molar Mass Units

**Critical Error**: Using g/mol instead of kg/mol

- Correct: For O₂, $M = 32 \times 10^{-3}$ kg/mol
- Wrong: $M = 32$ kg/mol (gives answer 1000× too small!)

**Quick Check**: If your speed comes out ~1000 m/s for room temperature, you’re correct. If it’s ~1 m/s, you forgot to convert!

### Temperature Units

**Always use Kelvin**, never Celsius!

- Room temperature: 300 K (not 25 K!)
- STP: 273 K (not 0 K!)

### Gas Constant Values

Choose the right R:

- $R = 8.314$ J/(mol·K) when using SI units
- $R = 0.0821$ L·atm/(mol·K) for gas law problems (not for speed calculations!)

### Common Calculation Errors

1. **Forgetting the square root**: $v_{rms} = \sqrt{\frac{3RT}{M}}$ not $\frac{3RT}{M}$
2. **Using molecular mass instead of molar mass**:

   - With k, use m (mass of one molecule)
   - With R, use M (molar mass)
3. **Speed ratio confusion**: $v_p$ is smallest, not largest!

## Important Formulas Summary

### Speed Formulas

| Speed Type | Formula (with k) | Formula (with R) | Numerical Factor |
| --- | --- | --- | --- |
| Most Probable | $\sqrt{\frac{2kT}{m}}$ | $\sqrt{\frac{2RT}{M}}$ | $\sqrt{2} \approx 1.414$ |
| Average | $\sqrt{\frac{8kT}{\pi m}}$ | $\sqrt{\frac{8RT}{\pi M}}$ | $\sqrt{\frac{8}{\pi}} \approx 1.596$ |
| RMS | $\sqrt{\frac{3kT}{m}}$ | $\sqrt{\frac{3RT}{M}}$ | $\sqrt{3} \approx 1.732$ |

### Temperature Dependence

At constant molar mass:

$$v \propto \sqrt{T}$$

$$\frac{v_2}{v_1} = \sqrt{\frac{T_2}{T_1}}$$

### Molar Mass Dependence

At constant temperature:

$$v \propto \frac{1}{\sqrt{M}}$$

$$\frac{v_1}{v_2} = \sqrt{\frac{M_2}{M_1}}$$

### Energy Relations

Average kinetic energy per molecule:

$$\overline{KE} = \frac{1}{2}m\overline{v^2} = \frac{1}{2}mv_{rms}^2 = \frac{3}{2}kT$$

Note: Use $v_{rms}$ for energy calculations, not $v_p$ or $\overline{v}$!

### Interactive Demo: Visualize Molecular Speeds

Explore how molecular speeds vary with temperature and molar mass in this interactive simulation.

## 3-Level Practice Problems

### Level 1: JEE Main Basics

**Problem 1**: Calculate the rms speed of oxygen molecules at 27°C. (Molar mass of O₂ = 32 g/mol, R = 8.314 J/(mol·K))

<details><summary>Solution</summary><p>Given:</p><ul><li>$T = 27 + 273 = 300$ K</li><li>$M = 32 \times 10^{-3}$ kg/mol (convert to kg!)</li></ul>$$v_{rms} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3 \times 8.314 \times 300}{32 \times 10^{-3}}}$$

$$v_{rms} = \sqrt{\frac{7482.6}{0.032}} = \sqrt{233831.25} = 483.6 \text{ m/s}$$<p><strong>Answer</strong>: 484 m/s (approximately)</p><p><strong>Quick Check</strong>: ~500 m/s for O₂ at room temperature is reasonable!</p></details>

**Problem 2**: If the rms speed of H₂ molecules at a certain temperature is 1920 m/s, find the rms speed of O₂ molecules at the same temperature. (M(H₂) = 2 g/mol, M(O₂) = 32 g/mol)

<details><summary>Solution</summary><p>At the same temperature:</p>$$\frac{v_{rms}(O_2)}{v_{rms}(H_2)} = \sqrt{\frac{M_{H_2}}{M_{O_2}}} = \sqrt{\frac{2}{32}} = \sqrt{\frac{1}{16}} = \frac{1}{4}$$

$$v_{rms}(O_2) = \frac{1}{4} \times 1920 = 480 \text{ m/s}$$<p><strong>Answer</strong>: 480 m/s</p></details>

### Level 2: JEE Main Advanced

**Problem 3**: Calculate all three speeds (most probable, average, and rms) for nitrogen molecules at 127°C. (M(N₂) = 28 g/mol, R = 8.314 J/(mol·K))

<details><summary>Solution</summary><p>Given:</p><ul><li>$T = 127 + 273 = 400$ K</li><li>$M = 28 \times 10^{-3}$ kg/mol</li></ul><p><strong>Most Probable Speed</strong>:</p>$$v_p = \sqrt{\frac{2RT}{M}} = \sqrt{\frac{2 \times 8.314 \times 400}{28 \times 10^{-3}}}$$

$$v_p = \sqrt{\frac{6651.2}{0.028}} = \sqrt{237542.86} = 487.5 \text{ m/s}$$<p><strong>Average Speed</strong>:</p>$$\overline{v} = \sqrt{\frac{8RT}{\pi M}} = \sqrt{\frac{8}{\pi}} \times v_p \times \sqrt{\frac{M_{v_p}}{M_{v_p}}}$$<p>Or directly:</p>$$\overline{v} = \sqrt{\frac{8 \times 8.314 \times 400}{\pi \times 0.028}} = \sqrt{\frac{26604.8}{0.0880}} = 550.1 \text{ m/s}$$<p><strong>RMS Speed</strong>:</p>$$v_{rms} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3 \times 8.314 \times 400}{0.028}}$$

$$v_{rms} = \sqrt{\frac{9976.8}{0.028}} = 596.3 \text{ m/s}$$<p><strong>Verification of ratio</strong>:
$487.5 : 550.1 : 596.3 = 1 : 1.128 : 1.223$ ✓</p><p><strong>Answer</strong>:</p><ul><li>$v_p = 488$ m/s</li><li>$\overline{v} = 550$ m/s</li><li>$v_{rms} = 596$ m/s</li></ul></details>

**Problem 4**: At what temperature will the average speed of O₂ molecules be equal to the rms speed of H₂ molecules at 300 K? (M(H₂) = 2 g/mol, M(O₂) = 32 g/mol)

<details><summary>Solution</summary><p>For H₂ at 300 K:</p>$$v_{rms}(H_2) = \sqrt{\frac{3RT_1}{M_{H_2}}}$$<p>For O₂ at T₂:</p>$$\overline{v}(O_2) = \sqrt{\frac{8RT_2}{\pi M_{O_2}}}$$<p>Given: $\overline{v}(O_2) = v_{rms}(H_2)$</p>$$\sqrt{\frac{8RT_2}{\pi M_{O_2}}} = \sqrt{\frac{3RT_1}{M_{H_2}}}$$<p>Squaring both sides:</p>$$\frac{8RT_2}{\pi M_{O_2}} = \frac{3RT_1}{M_{H_2}}$$

$$T_2 = \frac{3\pi M_{O_2} T_1}{8 M_{H_2}} = \frac{3 \times \pi \times 32 \times 300}{8 \times 2}$$

$$T_2 = \frac{28800\pi}{16} = 1800\pi = 5654.9 \text{ K}$$<p><strong>Answer</strong>: 5655 K (or about 5382°C)</p></details>

### Level 3: JEE Advanced

**Problem 5**: A vessel contains a mixture of 7 g of N₂ and 11 g of CO₂ at 300 K. Calculate:
(a) The average kinetic energy per molecule
(b) The rms speed of the mixture
(M(N₂) = 28 g/mol, M(CO₂) = 44 g/mol, k = 1.38 × 10⁻²³ J/K, R = 8.314 J/(mol·K))

<details><summary>Solution</summary><p><strong>(a) Average KE per molecule</strong>:</p><p>The average KE per molecule depends only on temperature:</p>$$\overline{KE} = \frac{3}{2}kT = \frac{3}{2} \times 1.38 \times 10^{-23} \times 300$$

$$\overline{KE} = 6.21 \times 10^{-21} \text{ J}$$<p>This is the same for all molecules regardless of their mass!</p><p><strong>(b) RMS speed of mixture</strong>:</p><p>Number of moles:</p><ul><li>$n_{N_2} = \frac{7}{28} = 0.25$ mol</li><li>$n_{CO_2} = \frac{11}{44} = 0.25$ mol</li><li>Total: $n = 0.5$ mol</li></ul><p>For a mixture, we need to find the average molar mass:</p>$$M_{avg} = \frac{m_{total}}{n_{total}} = \frac{7 + 11}{0.5} = \frac{18}{0.5} = 36 \text{ g/mol} = 0.036 \text{ kg/mol}$$

$$v_{rms} = \sqrt{\frac{3RT}{M_{avg}}} = \sqrt{\frac{3 \times 8.314 \times 300}{0.036}}$$

$$v_{rms} = \sqrt{\frac{7482.6}{0.036}} = \sqrt{207850} = 455.9 \text{ m/s}$$<p><strong>Answer</strong>:</p><ul><li>(a) $6.21 \times 10^{-21}$ J</li><li>(b) 456 m/s</li></ul></details>

**Problem 6**: Show that the ratio of average speed to rms speed is independent of temperature and molar mass. Calculate this ratio.

<details><summary>Solution</summary><p>Average speed:</p>$$\overline{v} = \sqrt{\frac{8RT}{\pi M}}$$<p>RMS speed:</p>$$v_{rms} = \sqrt{\frac{3RT}{M}}$$<p>Taking the ratio:</p>$$\frac{\overline{v}}{v_{rms}} = \frac{\sqrt{\frac{8RT}{\pi M}}}{\sqrt{\frac{3RT}{M}}}$$

$$= \sqrt{\frac{8RT}{\pi M} \times \frac{M}{3RT}}$$

$$= \sqrt{\frac{8}{\pi} \times \frac{1}{3}} = \sqrt{\frac{8}{3\pi}}$$<p>Note that T and M cancel out! The ratio is a constant.</p>$$\frac{\overline{v}}{v_{rms}} = \sqrt{\frac{8}{3\pi}} = \sqrt{\frac{8}{9.42}} = \sqrt{0.849} = 0.922$$<p>Or: $\frac{\overline{v}}{v_{rms}} = \frac{\sqrt{8/\pi}}{\sqrt{3}} = \frac{1.596}{1.732} = 0.922$</p><p><strong>Answer</strong>: $\frac{\overline{v}}{v_{rms}} = \sqrt{\frac{8}{3\pi}} \approx 0.922$ (independent of T and M)</p><p><strong>Proved</strong></p></details>

## Effect of Temperature on Distribution

### Temperature Increase Effects:

1. **Peak shifts right**: Most probable speed increases
2. **Peak height decreases**: Same number of molecules spread over wider range
3. **Curve broadens**: Greater variation in speeds
4. **Area remains constant**: Total number of molecules unchanged

### Mathematical Expression:

- At $T_2 = 4T_1$: All speeds double ($v \propto \sqrt{T}$)
- Peak shifts from $v_p$ to $2v_p$
- Peak height reduces by factor of 2 (curve stretches horizontally)

## Cross-Links to Other Topics

### Related to Kinetic Theory

- [Kinetic Theory Assumptions](../kinetic-theory-assumptions/index.md) - Foundation of molecular speeds
- [Ideal Gas Equation](../ideal-gas-equation/index.md) - Macroscopic relations
- [Mean Free Path](../mean-free-path/index.md) - Uses average speed

### Related to Thermodynamics

- [Internal Energy](../../thermodynamics/index.md) - Related to rms speed
- [Temperature Scale](../../thermodynamics/index.md) - Why we use Kelvin
- [Specific Heat](../../thermodynamics/specific-heat/index.md) - Energy storage modes

### Applications

- Graham’s law of effusion: Rate ∝ 1/√M
- Sound speed in gases: Related to molecular speeds
- Atmospheric escape velocity: Light gases escape Earth’s gravity

## Key Takeaways

1. **Three speeds exist**: Most probable < Average < RMS (always in this order)
2. **Speed ratio is constant**: 1 : 1.128 : 1.224 (independent of T and M)
3. **Temperature dependence**: All speeds ∝ √T
4. **Molar mass dependence**: All speeds ∝ 1/√M (lighter gases move faster)
5. **Use $v_{rms}$ for energy**: $\overline{KE} = \frac{1}{2}mv_{rms}^2$
6. **Use $\overline{v}$ for collisions**: Mean free path and collision frequency

## Exam Tips

- **JEE Main**: Focus on calculating individual speeds, speed ratios, and temperature/mass comparisons
- **JEE Advanced**: Expect mixture problems, Maxwell distribution concepts, and derivation-based questions
- **Common trap**: Using $v_p$ or $\overline{v}$ for KE calculations (must use $v_{rms}$!)
- **Unit check**: Speeds should be ~500 m/s for common gases at room temperature
- **Quick ratio**: Remember 1:1.13:1.22 for instant comparisons
- **Conceptual clarity**: Understand why $v_{rms} > \overline{v} > v_p$ from distribution shape

---

*Last updated: February 22, 2025*

From TestGuru · our mock-test platform

## You've read Molecular Speeds: RMS, Average, and Most Probable.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=kinetic-theory&tg_exam=jee-main&tg_page=%2Fphysics%2Fkinetic-theory%2Fmolecular-speeds%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/kinetic-theory/molecular-speeds/",this.page.identifier="/physics/kinetic-theory/molecular-speeds/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicsProcess" id="anim-thermodynamicsProcess-1795396423771797778"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicsProcess-1795396423771797778")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/kinetic-theory/molecular-speeds/](https://jeenotes.in/physics/kinetic-theory/molecular-speeds/) · raw HTML: `offline/physics/kinetic-theory/molecular-speeds/index.html`_
