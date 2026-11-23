---
title: "First Law of Thermodynamics"
source: "https://jeenotes.in/physics/thermodynamics/first-law/"
description: "Master the First Law of Thermodynamics, heat, work, and internal energy for JEE Main & Advanced"
updated: "2026-08-01"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 2 of 10"
html: "../../../../offline/physics/thermodynamics/first-law/index.html"
extracted: "2026-11-23"
---

> Master the First Law of Thermodynamics, heat, work, and internal energy for JEE Main & Advanced

## Real-Life Hook: Why Do Bike Pumps Heat Up?

Ever pumped air into a bicycle tire and noticed the pump getting hot? You haven’t added any heat—you’ve just compressed air! This is the First Law of Thermodynamics in action: **energy doesn’t vanish; it transforms**.

When you compress air (doing work on it), that work energy converts to internal energy, raising the temperature. Your hand pump is a mini thermodynamics laboratory!

Similarly, when you release air from a spray can, it feels cold. The gas does work expanding, losing internal energy, and cooling down.

---

## Systems, Surroundings, and State Variables

Before applying the first law, fix the vocabulary:

- **System**: the part of the universe under study (the gas in the pump)
- **Surroundings**: everything outside the system
- **Boundary**: the surface separating system from surroundings

### Types of Systems

| Type | Energy Exchange | Matter Exchange |
| --- | --- | --- |
| Open | Yes | Yes |
| Closed | Yes | No |
| Isolated | No | No |

### State Variables

- **Intensive**: independent of the amount of substance (T, P, density)
- **Extensive**: depends on the amount of substance (V, U, S, m)

---

## The First Law of Thermodynamics

### Statement

> **Energy can neither be created nor destroyed; it can only be transformed from one form to another.**

In thermodynamics language:

> **The heat supplied to a system goes partly to increase its internal energy and partly to do work against external forces.**

### Mathematical Form

$$\Delta Q = \Delta U + \Delta W$$

**Where:**

- $\Delta Q$ = Heat supplied TO the system
- $\Delta U$ = Change in internal energy
- $\Delta W$ = Work done BY the system

**Alternative form:**

$$\Delta U = \Delta Q - \Delta W$$

This form emphasizes: *Change in internal energy = Heat added - Work done by system*

---

## Sign Conventions (CRITICAL for JEE!)

### Standard Sign Convention (Most Common in JEE)

| Quantity | Positive (+) | Negative (-) |
| --- | --- | --- |
| **Heat (Q)** | Heat absorbed by system | Heat released by system |
| **Work (W)** | Work done BY system (expansion) | Work done ON system (compression) |
| **Internal Energy (ΔU)** | Temperature increases | Temperature decreases |

### Memory Trick: “System’s Perspective”

**Think from the system’s viewpoint:**

- Getting heat? Happy! → Positive Q
- Releasing heat? Sad! → Negative Q
- Doing work (expanding)? Tired! → Positive W
- Work done on it (compressed)? Energized! → Negative W

### Common Sign Convention Mistakes

❌ **Mistake 1:** Forgetting that W is work BY system

- Compression: W is NEGATIVE (work done ON system)
- Expansion: W is POSITIVE (work done BY system)

❌ **Mistake 2:** Mixing up ΔU = Q - W and ΔU = Q + W

- Use: $\Delta U = Q - W$ (when W is work BY system)
- Some books use: $\Delta U = Q + W'$ (where W’ is work ON system)
- **For JEE:** Stick to $\Delta U = Q - W$ with W as work BY system

---

## Internal Energy (U)

### What is Internal Energy?

**Internal energy** is the total energy contained within a system:

- Kinetic energy of molecules (translational, rotational, vibrational)
- Potential energy of molecular interactions

### Key Properties

1. **State Function:** U depends only on current state (T, P, V), NOT on path
2. **For Ideal Gas:** $U$ depends ONLY on temperature

   $$U = nC_VT$$

   where $C_V$ is molar heat capacity at constant volume
3. **Change in Internal Energy:**

   $$\Delta U = nC_V\Delta T$$

   This works for ALL processes (isothermal, adiabatic, etc.)
4. **At Constant Temperature:** For ideal gas, $\Delta U = 0$ (isothermal process)

### Monatomic vs Diatomic Gases

| Gas Type | $C_V$ | $C_P$ | $\gamma = C_P/C_V$ |
| --- | --- | --- | --- |
| Monatomic | $\frac{3}{2}R$ | $\frac{5}{2}R$ | $\frac{5}{3} ≈ 1.67$ |
| Diatomic | $\frac{5}{2}R$ | $\frac{7}{2}R$ | $\frac{7}{5} = 1.4$ |

**Memory Trick:** “Mono 3-5, Di 5-7” (numerators for $C_V$ and $C_P$ with R/2)

---

## Heat (Q)

### Definition

**Heat** is energy transferred between systems due to temperature difference.

### Important Points

1. Heat is NOT a state function (depends on path)
2. Heat always flows from higher T to lower T
3. Heat transfer modes: Conduction, Convection, Radiation (not covered here)
4. Measured in Joules (J) or calories (cal): **1 cal = 4.186 J**

### Heat Capacity

**Heat Capacity (C):**

$$C = \frac{\Delta Q}{\Delta T}$$

**Specific Heat (c):**

$$c = \frac{\Delta Q}{m\Delta T}$$

**Molar Heat Capacity:**

$$C_m = \frac{\Delta Q}{n\Delta T}$$

More on this in [Specific Heat Capacity →](../specific-heat/index.md)

---

## Work (W)

### Work in Thermodynamics

When a gas expands or compresses, it does work:

**Elementary work:**

$$dW = P \, dV$$

**Finite work:**

$$W = \int_{V_1}^{V_2} P \, dV$$

**For constant pressure:**

$$W = P(V_2 - V_1) = P\Delta V$$

### Geometric Interpretation

**Work = Area under P-V curve**

This is crucial for JEE problems involving P-V diagrams!

### Work in Different Processes

1. **Isobaric (Constant P):** $W = P\Delta V = nR\Delta T$
2. **Isothermal (Constant T):** $W = nRT \ln\frac{V_2}{V_1} = nRT \ln\frac{P_1}{P_2}$
3. **Isochoric (Constant V):** $W = 0$ (no volume change!)
4. **Adiabatic:** $W = \frac{nR(T_1 - T_2)}{\gamma - 1} = \frac{P_1V_1 - P_2V_2}{\gamma - 1}$

More details in [Thermodynamic Processes →](../thermodynamic-processes/index.md)

---

## Applications of First Law

### Application 1: Isothermal Process (ΔT = 0)

For ideal gas: $\Delta U = nC_V\Delta T = 0$

From First Law:

$$Q = \Delta U + W = 0 + W$$

$$\boxed{Q = W}$$

**All heat supplied is converted to work** (or vice versa).

### Application 2: Adiabatic Process (Q = 0)

No heat exchange with surroundings.

From First Law:

$$0 = \Delta U + W$$

$$\boxed{\Delta U = -W}$$

**Work done comes from internal energy** (temperature decreases during expansion).

### Application 3: Isochoric Process (ΔV = 0)

No volume change, so $W = 0$.

From First Law:

$$\boxed{Q = \Delta U}$$

**All heat goes to internal energy** (temperature change).

### Application 4: Isobaric Process (P = constant)

$$Q = \Delta U + W$$

$$Q = nC_V\Delta T + P\Delta V$$

$$Q = nC_V\Delta T + nR\Delta T$$

$$\boxed{Q = nC_P\Delta T}$$

where $C_P = C_V + R$ (Mayer’s equation).

---

## Cyclic Process

In a cyclic process, system returns to initial state:

- $\Delta U = 0$ (state function!)

From First Law:

$$Q = W$$

**Net heat absorbed = Net work done**

This is the basis of heat engines!

---

## Free Expansion (Joule Expansion)

Gas expands into vacuum (no external pressure):

- $Q = 0$ (isolated)
- $W = 0$ (no opposing pressure)
- Therefore: $\Delta U = 0$

For ideal gas: $\Delta T = 0$ (temperature doesn’t change!)

**Real gases:** Temperature may change slightly due to intermolecular forces.

---

## Common Mistakes & Tricks

### Mistake 1: Sign of Work in Compression

❌ Gas compressed from 2L to 1L, $W = P(1-2) = -P$ L
✅ Correct interpretation: W is negative (work done ON system)

**When V decreases → W is negative**

### Mistake 2: Using ΔU for Non-Ideal Processes

For ideal gas: $\Delta U = nC_V\Delta T$ ALWAYS (regardless of process)

But $Q$ and $W$ depend on the path!

### Mistake 3: Adiabatic vs Isothermal

| Process | Q | ΔU | W | ΔT |
| --- | --- | --- | --- | --- |
| Isothermal | $nRT\ln(V_2/V_1)$ | 0 | $nRT\ln(V_2/V_1)$ | 0 |
| Adiabatic | 0 | $nC_V\Delta T$ | $-nC_V\Delta T$ | ≠ 0 |

### Memory Trick: “QUIT”

**Q = U + W**

- **Q**uantity of heat
- **U**p goes internal energy
- **W**ork done by system

### Trick for Cyclic Processes

“**Round trip? No energy change!**”

- Cyclic → $\Delta U = 0$ → $Q = W$

---

## Practice Problems

### Level 1: JEE Main Basics

**Q1.** A system absorbs 500 J of heat and does 200 J of work. Find the change in internal energy.

<details><summary>Solution</summary><p>Given:</p><ul><li>$Q = +500$ J (heat absorbed)</li><li>$W = +200$ J (work done BY system)</li></ul><p>First Law: $\Delta U = Q - W$</p>$$\Delta U = 500 - 200 = 300 \text{ J}$$<p><strong>Internal energy increases by 300 J.</strong></p></details>

**Q2.** In an isothermal expansion, an ideal gas does 300 J of work. How much heat is absorbed?

<details><summary>Solution</summary><p>Isothermal → $\Delta T = 0$ → $\Delta U = 0$</p><p>First Law: $Q = \Delta U + W = 0 + 300$</p>$$Q = 300 \text{ J}$$<p><strong>Heat absorbed = Work done</strong> in isothermal process.</p></details>

**Q3.** A gas is compressed at constant pressure from 4 L to 2 L by an external pressure of 2 atm. Find work done. (1 atm = $10^5$ Pa)

<details><summary>Solution</summary>$$W = P\Delta V = P(V_2 - V_1)$$<p></p>$$W = 2 \times 10^5 \times (2 - 4) \times 10^{-3}$$<p></p>$$W = 2 \times 10^5 \times (-2) \times 10^{-3}$$<p></p>$$W = -400 \text{ J}$$<p><strong>Negative sign:</strong> Work done ON the system (compression).</p></details>

---

### Level 2: JEE Main/Advanced

**Q4.** One mole of an ideal gas at 300 K is expanded isothermally from 1 L to 10 L. Find (a) change in internal energy, (b) work done, (c) heat absorbed. (R = 8.314 J/mol·K)

<details><summary>Solution</summary><p><strong>(a) Change in internal energy:</strong>
Isothermal → $\Delta U = nC_V\Delta T = 0$ (since $\Delta T = 0$)</p><p><strong>(b) Work done:</strong></p>$$W = nRT\ln\frac{V_2}{V_1}$$<p></p>$$W = 1 \times 8.314 \times 300 \times \ln\frac{10}{1}$$<p></p>$$W = 2494.2 \times \ln(10)$$<p></p>$$W = 2494.2 \times 2.303 = 5744 \text{ J}$$<p><strong>(c) Heat absorbed:</strong>
First Law: $Q = \Delta U + W = 0 + 5744$</p>$$Q = 5744 \text{ J} ≈ 5.74 \text{ kJ}$$<p><strong>Alternative:</strong> In isothermal process, $Q = W$ directly.</p></details>

**Q5.** Two moles of a monatomic ideal gas undergo a process where temperature changes from 300 K to 400 K at constant volume. Find (a) $\Delta U$, (b) W, (c) Q.

<details><summary>Solution</summary><p>For monatomic gas: $C_V = \frac{3}{2}R = \frac{3}{2} \times 8.314 = 12.47$ J/mol·K</p><p><strong>(a) Change in internal energy:</strong></p>$$\Delta U = nC_V\Delta T = 2 \times 12.47 \times (400 - 300)$$<p></p>$$\Delta U = 2 \times 12.47 \times 100 = 2494 \text{ J}$$<p><strong>(b) Work done:</strong>
Constant volume → $\Delta V = 0$ → $W = 0$</p><p><strong>(c) Heat absorbed:</strong></p>$$Q = \Delta U + W = 2494 + 0 = 2494 \text{ J}$$<p><strong>At constant volume, all heat increases internal energy.</strong></p></details>

**Q6.** A gas undergoes a cyclic process ABCA as shown. In process AB, 400 J of heat is absorbed. In process BC, 200 J of work is done by the gas. In process CA, 150 J of heat is rejected. Find:
(a) Work done in AB
(b) Heat absorbed in BC
(c) Work done in CA

<details><summary>Solution</summary><p>For cyclic process: $\Delta U_{cycle} = 0$</p><p>Therefore: $Q_{net} = W_{net}$</p><p><strong>(a) Work in AB:</strong>
Need to find $W_{net}$ first.</p>$$Q_{net} = Q_{AB} + Q_{BC} + Q_{CA} = 400 + Q_{BC} - 150$$<p>For individual processes, assume:</p><ul><li>AB: isobaric or isothermal (not specified, need more info)</li></ul><p><strong>Let’s use the cyclic property:</strong></p>$$Q_{AB} + Q_{BC} + Q_{CA} = W_{AB} + W_{BC} + W_{CA}$$<p></p>$$400 + Q_{BC} - 150 = W_{AB} + 200 + W_{CA}$$<p>We need more information. Let me reconsider:</p><p><strong>Standard approach:</strong></p><p>For the cycle: $Q_{total} = W_{total}$</p>$$Q_{total} = 400 + Q_{BC} - 150 = W_{total}$$<p>If we assume BC is adiabatic (common in problems):</p>$$Q_{BC} = 0$$<p></p>$$\Delta U_{BC} = -W_{BC} = -200 \text{ J}$$<p>Then: $Q_{total} = 400 + 0 - 150 = 250$ J
So: $W_{total} = 250$ J</p>$$W_{AB} + W_{BC} + W_{CA} = 250$$<p></p>$$W_{AB} + 200 + W_{CA} = 250$$<p></p>$$W_{AB} + W_{CA} = 50$$<p>Need individual process details. <strong>Problem incomplete without process types.</strong></p><p><strong>General Lesson:</strong> Always identify process type (isothermal, adiabatic, etc.) for each leg!</p></details>

---

### Level 3: JEE Advanced

**Q7.** One mole of an ideal gas ($\gamma = 1.4$) at 300 K and 1 atm undergoes adiabatic expansion until pressure becomes 0.5 atm. Find:
(a) Final temperature
(b) Work done by gas
(c) Change in internal energy

<details><summary>Solution</summary><p>For adiabatic process: $T_1P_1^{(\gamma-1)/\gamma} = T_2P_2^{(\gamma-1)/\gamma}$</p><p>Or: $T_2 = T_1\left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma}$</p><p><strong>(a) Final temperature:</strong></p>$$T_2 = 300 \times \left(\frac{0.5}{1}\right)^{(1.4-1)/1.4}$$<p></p>$$T_2 = 300 \times (0.5)^{0.4/1.4}$$<p></p>$$T_2 = 300 \times (0.5)^{2/7}$$<p>Calculate: $(0.5)^{2/7} = 0.5^{0.286} ≈ 0.82$</p>$$T_2 ≈ 300 \times 0.82 = 246 \text{ K}$$<p><strong>(b) Work done:</strong>
For adiabatic process:</p>$$W = \frac{nR(T_1 - T_2)}{\gamma - 1}$$<p></p>$$W = \frac{1 \times 8.314 \times (300 - 246)}{1.4 - 1}$$<p></p>$$W = \frac{8.314 \times 54}{0.4}$$<p></p>$$W = \frac{449}{0.4} = 1122.5 \text{ J}$$<p><strong>(c) Change in internal energy:</strong>
For adiabatic: $Q = 0$</p>$$\Delta U = Q - W = 0 - 1122.5 = -1122.5 \text{ J}$$<p>Or directly: $\Delta U = nC_V\Delta T$</p><p>For $\gamma = 1.4$: $C_V = \frac{R}{\gamma - 1} = \frac{8.314}{0.4} = 20.785$ J/mol·K</p>$$\Delta U = 1 \times 20.785 \times (246 - 300) = 20.785 \times (-54) = -1122.4 \text{ J}$$<p><strong>Internal energy decreases</strong> (gas cools during expansion).</p></details>

**Q8.** A thermally insulated container has two compartments separated by a partition. One compartment has 1 mole of ideal gas at 300 K, the other has 2 moles at 400 K. The partition is removed. Find final temperature if:
(a) Both gases are monatomic
(b) First is monatomic, second is diatomic

<details><summary>Solution</summary><p>System is isolated: $Q = 0$ (thermally insulated)
No external work: $W = 0$</p><p>Therefore: $\Delta U_{total} = 0$</p>$$\Delta U_1 + \Delta U_2 = 0$$<p></p>$$n_1C_{V1}(T_f - T_1) + n_2C_{V2}(T_f - T_2) = 0$$<p><strong>(a) Both monatomic:</strong> $C_V = \frac{3}{2}R$ for both</p>$$1 \times \frac{3}{2}R(T_f - 300) + 2 \times \frac{3}{2}R(T_f - 400) = 0$$<p></p>$$\frac{3R}{2}[(T_f - 300) + 2(T_f - 400)] = 0$$<p></p>$$T_f - 300 + 2T_f - 800 = 0$$<p></p>$$3T_f = 1100$$<p></p>$$T_f = \frac{1100}{3} ≈ 366.7 \text{ K}$$<p><strong>(b) First monatomic, second diatomic:</strong></p><ul><li>Gas 1: $C_{V1} = \frac{3}{2}R$</li><li>Gas 2: $C_{V2} = \frac{5}{2}R$</li></ul>$$1 \times \frac{3}{2}R(T_f - 300) + 2 \times \frac{5}{2}R(T_f - 400) = 0$$<p></p>$$\frac{R}{2}[3(T_f - 300) + 5 \times 2(T_f - 400)] = 0$$<p></p>$$3T_f - 900 + 10T_f - 4000 = 0$$<p></p>$$13T_f = 4900$$<p></p>$$T_f = \frac{4900}{13} ≈ 376.9 \text{ K}$$<p><strong>Key Concept:</strong> Final temperature depends on heat capacities (weighted average).</p></details>

**Q9.** An ideal gas undergoes a process where $P \propto \frac{1}{V}$ (rectangular hyperbola). Show that this is an isothermal process for an ideal gas.

<details><summary>Solution</summary><p>Given: $P \propto \frac{1}{V}$</p><p>This means: $P = \frac{k}{V}$ for some constant k</p><p>Therefore: $PV = k$ (constant)</p><p>For ideal gas: $PV = nRT$</p><p>If $PV = k$ (constant), then:</p>$$nRT = k = \text{constant}$$<p>Since $n$ and $R$ are constants:</p>$$T = \frac{k}{nR} = \text{constant}$$<p><strong>Therefore, the process is isothermal!</strong></p><p>This is why isothermal process follows $P_1V_1 = P_2V_2$ and appears as a rectangular hyperbola on P-V diagram.</p></details>

---

## Connection to Other Topics

### → Thermodynamic Processes

The First Law applied to specific processes (isothermal, adiabatic, etc.):
[Learn more →](../thermodynamic-processes/index.md)

### → PV Diagrams

Work as area under curve, cyclic processes:
[PV Diagrams →](../pv-diagrams/index.md)

### → Heat Engines

Cyclic application of First Law, efficiency:
[Heat Engines →](../heat-engines/index.md)

### → Kinetic Theory

Microscopic basis for internal energy:

$$U = nC_VT = n \times \frac{f}{2}RT$$

[Kinetic Theory →](../../kinetic-theory/index.md)

### → Chemistry: Thermodynamics

Enthalpy, $\Delta H = \Delta U + P\Delta V$:
[Chemistry Thermodynamics →](../../../chemistry/thermodynamics/index.md)

---

## Quick Revision Formula Sheet

### First Law:

$$\Delta Q = \Delta U + \Delta W$$

$$\Delta U = Q - W$$

### Internal Energy:

$$\Delta U = nC_V\Delta T$$

### Work:

$$W = \int P \, dV = \text{Area under P-V curve}$$

### Sign Convention:

- Heat absorbed: Q > 0
- Work by system (expansion): W > 0
- Temperature increases: ΔU > 0

### Special Cases:

- **Isothermal:** $\Delta U = 0$, $Q = W$
- **Adiabatic:** $Q = 0$, $\Delta U = -W$
- **Isochoric:** $W = 0$, $Q = \Delta U$
- **Cyclic:** $\Delta U = 0$, $Q = W$

### Mayer’s Equation:

$$C_P - C_V = R$$

---

## JEE Strategy Tips

1. **Always check sign convention** first thing
2. **Identify the process** (isothermal, adiabatic, etc.)
3. **For ideal gas:** $\Delta U = nC_V\Delta T$ in ALL processes
4. **Cyclic process:** Remember $\Delta U = 0$
5. **Work = Area** under P-V curve (visual approach)
6. **Free expansion:** $Q = W = \Delta U = 0$ for ideal gas

---

**Next Topic:** [Specific Heat Capacity →](../specific-heat/index.md)

---

*Last updated: February 2025*

From TestGuru · our mock-test platform

## You've read First Law of Thermodynamics.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=thermodynamics&tg_exam=jee-main&tg_page=%2Fphysics%2Fthermodynamics%2Ffirst-law%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/thermodynamics/first-law/",this.page.identifier="/physics/thermodynamics/first-law/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424313982733"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424313982733")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="thermodynamicProcess" id="anim-thermodynamicProcess-1795396424314033695"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-thermodynamicProcess-1795396424314033695")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/thermodynamics/first-law/](https://jeenotes.in/physics/thermodynamics/first-law/) · raw HTML: `offline/physics/thermodynamics/first-law/index.html`_
