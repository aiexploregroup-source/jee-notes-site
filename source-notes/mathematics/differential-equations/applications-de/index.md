---
title: "Applications of Differential Equations"
source: "https://jeenotes.in/mathematics/differential-equations/applications-de/"
description: "Real-world applications in physics, growth/decay, and engineering problems for JEE"
updated: "2026-08-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 8"
html: "../../../../offline/mathematics/differential-equations/applications-de/index.html"
extracted: "2026-11-23"
---

> Real-world applications in physics, growth/decay, and engineering problems for JEE

# Applications of Differential Equations

## Introduction

Differential equations are not just mathematical abstractions—they model **real-world phenomena** in physics, chemistry, biology, economics, and engineering. Understanding applications is crucial for JEE Advanced.

---

## Classification of Applications

### 1. Growth and Decay Problems

- Population growth
- Radioactive decay
- Compound interest
- Bacterial growth
- Carbon dating

### 2. Physics Applications

- Newton’s Law of Cooling
- Motion under gravity
- Simple Harmonic Motion (SHM)
- Electric circuits (RC, RL, RLC)
- Velocity and acceleration problems

### 3. Geometric Applications

- Orthogonal trajectories
- Curves with specific properties
- Family of curves

### 4. Mixing Problems

- Solution concentration
- Chemical reactions
- Pollution in lakes

---

## Growth and Decay Models

### Exponential Growth/Decay Law

> **Law**: The rate of change of a quantity is proportional to the quantity itself.
>
> $$\boxed{\frac{dN}{dt} = kN}$$

where:

- $N$ = quantity at time $t$
- $k$ = growth constant ($k > 0$ for growth, $k < 0$ for decay)

### Solution

Solving the DE:

$$\frac{dN}{N} = k \, dt$$

$$\ln|N| = kt + C$$

$$N = N_0 e^{kt}$$

where $N_0$ is the initial quantity at $t = 0$.

> **General Solution**:
>
> $$\boxed{N(t) = N_0 e^{kt}}$$

---

### Growth Problems

#### Population Growth

**Model**: $\frac{dP}{dt} = kP$ where $P$ is population.

**Example**: A bacterial culture grows at a rate proportional to its size. If population doubles in 3 hours, find the time to triple.

**Solution**:
$P = P_0 e^{kt}$

When $t = 3$, $P = 2P_0$:

$$2P_0 = P_0 e^{3k}$$

$$2 = e^{3k}$$

$$k = \frac{\ln 2}{3}$$

For tripling: $3P_0 = P_0 e^{kt}$

$$3 = e^{kt}$$

$$t = \frac{\ln 3}{k} = \frac{\ln 3}{\ln 2/3} = \frac{3\ln 3}{\ln 2} \approx 4.75 \text{ hours}$$

---

### Decay Problems

#### Radioactive Decay

**Half-life Formula**:

> $$\boxed{N(t) = N_0 \left(\frac{1}{2}\right)^{t/T_{1/2}}}$$

where $T_{1/2}$ is the half-life.

**Relation with decay constant**:

$$k = \frac{\ln 2}{T_{1/2}}$$

---

#### Carbon Dating

Uses radioactive decay of C-14 to determine age of organic materials.

**Formula**:

$$t = \frac{1}{k}\ln\left(\frac{N_0}{N}\right)$$

where $k = \frac{\ln 2}{5730}$ (half-life of C-14 is 5730 years)

---

## Newton’s Law of Cooling

> **Law**: The rate of cooling of a body is proportional to the temperature difference between the body and its surroundings.
>
> $$\boxed{\frac{dT}{dt} = -k(T - T_s)}$$

where:

- $T$ = temperature of body at time $t$
- $T_s$ = surrounding (ambient) temperature
- $k$ = cooling constant ($k > 0$)

### Solution

$$\frac{dT}{T - T_s} = -k \, dt$$

$$\ln|T - T_s| = -kt + C$$

$$T - T_s = Ae^{-kt}$$

Using initial condition $T(0) = T_0$:

> $$\boxed{T(t) = T_s + (T_0 - T_s)e^{-kt}}$$

---

### Memory Trick for Cooling

**“Temperature approaches surroundings exponentially”**:

- As $t \to \infty$, $e^{-kt} \to 0$
- So $T \to T_s$ (body temperature approaches surroundings)

---

## Motion Problems

### Free Fall with Air Resistance

> **Equation**:
>
> $$\boxed{m\frac{dv}{dt} = mg - kv}$$

where:

- $m$ = mass
- $v$ = velocity
- $g$ = acceleration due to gravity
- $k$ = air resistance constant

**Terminal Velocity**: $v_{\text{terminal}} = \frac{mg}{k}$

### Interactive Demo: Visualize DE Applications

Plot solution curves for growth, decay, and cooling problems.

---

### Simple Harmonic Motion (SHM)

> **Differential Equation**:
>
> $$\boxed{\frac{d^2x}{dt^2} + \omega^2 x = 0}$$

where $\omega = \sqrt{\frac{k}{m}}$ is angular frequency.

**General Solution**:

$$x(t) = A\cos(\omega t) + B\sin(\omega t)$$

or equivalently:

$$x(t) = C\cos(\omega t + \phi)$$

---

## Electric Circuit Applications

### RC Circuit (Charging)

> **Equation** (charging):
>
> $$\boxed{R\frac{dQ}{dt} + \frac{Q}{C} = V_0}$$

where:

- $Q$ = charge
- $R$ = resistance
- $C$ = capacitance
- $V_0$ = applied voltage

**Solution**:

$$Q(t) = CV_0(1 - e^{-t/RC})$$

**Current**:

$$I(t) = \frac{dQ}{dt} = \frac{V_0}{R}e^{-t/RC}$$

---

### RL Circuit

> **Equation**:
>
> $$\boxed{L\frac{dI}{dt} + RI = V_0}$$

where $L$ is inductance.

**Solution**:

$$I(t) = \frac{V_0}{R}(1 - e^{-Rt/L})$$

**Time Constant**: $\tau = \frac{L}{R}$

---

## Geometric Applications

### Orthogonal Trajectories

**Definition**: Curves that intersect a given family of curves at right angles.

**Method**:

1. Find DE of given family by eliminating constant
2. Replace $\frac{dy}{dx}$ with $-\frac{dx}{dy}$ (or $-\frac{1}{dy/dx}$)
3. Solve the new DE

**Example**: Find orthogonal trajectories of $x^2 + y^2 = c^2$

Given: $x^2 + y^2 = c^2$

Differentiate: $2x + 2y\frac{dy}{dx} = 0$

So: $\frac{dy}{dx} = -\frac{x}{y}$

For orthogonal trajectories:

$$\frac{dy}{dx} = \frac{y}{x}$$

This gives: $\frac{dy}{y} = \frac{dx}{x}$

$\ln|y| = \ln|x| + C$

$y = Ax$ (family of straight lines through origin)

---

## Mixing Problems

### Tank Problem

**Setup**: A tank contains solution. Solution flows in and out.

> **General Equation**:
>
> $$\boxed{\frac{dQ}{dt} = \text{Rate in} - \text{Rate out}}$$

where $Q$ is amount of substance in tank.

**Rate in** = (concentration in) × (flow rate in)

**Rate out** = (concentration in tank) × (flow rate out)

---

## Common Mistakes in Applications

### ❌ Mistake 1: Wrong Sign in Decay

**Wrong**: $\frac{dN}{dt} = kN$ for decay ✗

**Correct**: $\frac{dN}{dt} = -kN$ (negative for decay) ✓

### ❌ Mistake 2: Forgetting Ambient Temperature

**Wrong**: $\frac{dT}{dt} = -kT$ for cooling ✗

**Correct**: $\frac{dT}{dt} = -k(T - T_s)$ ✓

### ❌ Mistake 3: Wrong Units

**Wrong**: Mixing mass and volume units ✗

**Correct**: Ensure consistent units throughout ✓

### ❌ Mistake 4: Negative Reciprocal in Orthogonal

**Wrong**: Same slope for orthogonal curves ✗

**Correct**: Use $m_1 \times m_2 = -1$ for perpendicular lines ✓

---

## Solved Examples

### Example 1: Population Growth (JEE Main)

**A population of bacteria doubles in 2 hours. If initially there are 1000 bacteria, how many will there be after 6 hours?**

**Solution**:

Model: $P = P_0 e^{kt}$

Given: $P_0 = 1000$, at $t = 2$, $P = 2000$

$$2000 = 1000e^{2k}$$

$$2 = e^{2k}$$

$$k = \frac{\ln 2}{2}$$

At $t = 6$:

$$P = 1000e^{6k} = 1000e^{6 \cdot \ln 2/2} = 1000e^{3\ln 2} = 1000 \cdot 2^3 = 8000$$

**Answer**: 8000 bacteria

---

### Example 2: Newton’s Cooling (JEE Main)

**A body at 100°C cools in air at 25°C. After 10 minutes, temperature is 60°C. Find temperature after 20 minutes.**

**Solution**:

$T(t) = T_s + (T_0 - T_s)e^{-kt}$

Given: $T_0 = 100$, $T_s = 25$

$$T(t) = 25 + 75e^{-kt}$$

At $t = 10$, $T = 60$:

$$60 = 25 + 75e^{-10k}$$

$$35 = 75e^{-10k}$$

$$e^{-10k} = \frac{35}{75} = \frac{7}{15}$$

At $t = 20$:

$$T = 25 + 75e^{-20k} = 25 + 75(e^{-10k})^2$$

$$= 25 + 75\left(\frac{7}{15}\right)^2$$

$$= 25 + 75 \times \frac{49}{225}$$

$$= 25 + \frac{3675}{225} = 25 + \frac{49}{3}$$

$$= \frac{75 + 49}{3} = \frac{124}{3} \approx 41.33°C$$

**Answer**: Approximately 41.3°C

---

### Example 3: Radioactive Decay (JEE Advanced)

**The half-life of a radioactive substance is 1600 years. What percentage will remain after 3200 years?**

**Solution**:

After one half-life (1600 years): 50% remains

After two half-lives (3200 years): $50\% \times \frac{1}{2} = 25\%$ remains

**Alternative Method**:

$$N = N_0 \left(\frac{1}{2}\right)^{t/T_{1/2}} = N_0\left(\frac{1}{2}\right)^{3200/1600} = N_0\left(\frac{1}{2}\right)^2 = \frac{N_0}{4}$$

**Answer**: 25% remains

---

### Example 4: Free Fall with Resistance (JEE Advanced)

**A body of mass 1 kg falls from rest under gravity with air resistance proportional to velocity ($k = 0.2$). Find velocity after 5 seconds. ($g = 10$ m/s²)**

**Solution**:

$$\frac{dv}{dt} = g - \frac{k}{m}v = 10 - 0.2v$$

This is linear: $\frac{dv}{dt} + 0.2v = 10$

$IF = e^{0.2t}$

$$ve^{0.2t} = \int 10e^{0.2t} dt = \frac{10e^{0.2t}}{0.2} + C = 50e^{0.2t} + C$$

$$v = 50 + Ce^{-0.2t}$$

At $t = 0$, $v = 0$: $0 = 50 + C$, so $C = -50$

$$v = 50(1 - e^{-0.2t})$$

At $t = 5$:

$$v = 50(1 - e^{-1}) = 50(1 - 0.3679) \approx 31.6 \text{ m/s}$$

**Terminal velocity**: $v_{\text{term}} = \frac{mg}{k} = \frac{10}{0.2} = 50$ m/s

**Answer**: 31.6 m/s

---

### Example 5: Orthogonal Trajectories (JEE Advanced)

**Find orthogonal trajectories of parabolas $y^2 = 4ax$.**

**Solution**:

Given family: $y^2 = 4ax$ &mldr; (1)

Differentiate: $2y\frac{dy}{dx} = 4a$

From (1): $a = \frac{y^2}{4x}$

Substitute: $2y\frac{dy}{dx} = 4 \cdot \frac{y^2}{4x} = \frac{y^2}{x}$

$$\frac{dy}{dx} = \frac{y}{2x}$$

For orthogonal trajectories:

$$\frac{dy}{dx} = -\frac{2x}{y}$$

Solve: $y \, dy = -2x \, dx$

$$\frac{y^2}{2} = -x^2 + C$$

$$\boxed{y^2 + 2x^2 = C}$$

(family of ellipses)

---

### Example 6: Mixing Problem (JEE Advanced)

**A 100-liter tank initially contains pure water. Brine with 2 kg/L salt flows in at 5 L/min. Mixed solution flows out at same rate. Find salt amount after 10 minutes.**

**Solution**:

Let $Q(t)$ = amount of salt at time $t$

Rate in = $2 \times 5 = 10$ kg/min

Concentration in tank = $\frac{Q}{100}$ kg/L

Rate out = $\frac{Q}{100} \times 5 = \frac{Q}{20}$ kg/min

$$\frac{dQ}{dt} = 10 - \frac{Q}{20}$$

Linear DE: $\frac{dQ}{dt} + \frac{Q}{20} = 10$

$IF = e^{t/20}$

$$Qe^{t/20} = \int 10e^{t/20} dt = 200e^{t/20} + C$$

$$Q = 200 + Ce^{-t/20}$$

At $t = 0$, $Q = 0$: $C = -200$

$$Q = 200(1 - e^{-t/20})$$

At $t = 10$:

$$Q = 200(1 - e^{-0.5}) = 200(1 - 0.6065) \approx 78.7 \text{ kg}$$

**Answer**: Approximately 78.7 kg

---

## Practice Problems

### Level 1: JEE Main Basics

**Problem 1.1**: A substance decays at a rate proportional to its amount. If half of it decays in 30 days, how long for 75% to decay?

<details><summary>Solution</summary><p>Half-life = 30 days</p><p>For 75% decay, 25% remains = $\frac{1}{4}$ of original</p><p>$\frac{1}{4} = \left(\frac{1}{2}\right)^{t/30}$</p><p>$\left(\frac{1}{2}\right)^2 = \left(\frac{1}{2}\right)^{t/30}$</p><p>$t = 60$ days</p></details>

**Problem 1.2**: A hot liquid at 80°C cools to 60°C in 5 minutes in a room at 20°C. What is its temperature after 10 minutes?

<details><summary>Solution</summary><p>$T = 20 + 60e^{-kt}$</p><p>At $t = 5$: $60 = 20 + 60e^{-5k}$</p><p>$e^{-5k} = \frac{40}{60} = \frac{2}{3}$</p><p>At $t = 10$: $T = 20 + 60(2/3)^2 = 20 + 60 \times \frac{4}{9} = 20 + \frac{80}{3} = \frac{140}{3} \approx 46.67°C$</p></details>

**Problem 1.3**: Population grows from 2000 to 2500 in 10 years. Find growth constant $k$.

<details><summary>Solution</summary><p>$P = P_0e^{kt}$</p><p>$2500 = 2000e^{10k}$</p><p>$\frac{5}{4} = e^{10k}$</p><p>$k = \frac{1}{10}\ln(1.25) = \frac{\ln(5/4)}{10} \approx 0.0223$ per year</p></details>

---

### Level 2: JEE Main Advanced

**Problem 2.1**: A body at temperature $T_1$ is placed in surroundings at $T_0 < T_1$. Show that time to cool from $T_1$ to $T_2$ is:

$$t = \frac{1}{k}\ln\left(\frac{T_1 - T_0}{T_2 - T_0}\right)$$

<details><summary>Solution</summary><p>$T - T_0 = (T_1 - T_0)e^{-kt}$</p><p>At temperature $T_2$:
$T_2 - T_0 = (T_1 - T_0)e^{-kt}$</p><p>$e^{-kt} = \frac{T_2 - T_0}{T_1 - T_0}$</p><p>$-kt = \ln\left(\frac{T_2 - T_0}{T_1 - T_0}\right)$</p><p>$t = \frac{1}{k}\ln\left(\frac{T_1 - T_0}{T_2 - T_0}\right)$</p></details>

**Problem 2.2**: A particle moves with velocity $v$ such that $\frac{dv}{dt} = -kv^2$. If $v = v_0$ at $t = 0$, find $v(t)$.

<details><summary>Solution</summary><p>$\frac{dv}{v^2} = -k \, dt$</p><p>$-\frac{1}{v} = -kt + C$</p><p>At $t = 0$, $v = v_0$: $C = \frac{1}{v_0}$</p><p>$\frac{1}{v} = kt + \frac{1}{v_0}$</p><p>$v = \frac{v_0}{1 + kv_0t}$</p></details>

**Problem 2.3**: Find curves such that slope at any point equals twice the slope of line joining that point to origin.

<details><summary>Solution</summary><p>Slope of line to origin from $(x, y)$ is $\frac{y}{x}$</p><p>Given: $\frac{dy}{dx} = 2 \cdot \frac{y}{x}$</p><p>$\frac{dy}{y} = \frac{2dx}{x}$</p><p>$\ln y = 2\ln x + C$</p><p>$y = Ax^2$ (parabolas)</p></details>

---

### Level 3: JEE Advanced

**Problem 3.1**: A tank contains 1000 L of brine with 100 kg salt. Pure water enters at 10 L/min and mixture leaves at 10 L/min. How long until salt reduces to 10 kg?

<details><summary>Solution</summary><p>$\frac{dQ}{dt} = 0 - \frac{Q}{1000} \times 10 = -\frac{Q}{100}$</p><p>$Q = 100e^{-t/100}$</p><p>For $Q = 10$:
$10 = 100e^{-t/100}$</p><p>$e^{-t/100} = 0.1$</p><p>$t = 100\ln 10 = 230.26$ minutes</p></details>

**Problem 3.2**: A chain hangs over edge of table. Show that if $x$ is length over edge at time $t$, then:

$$\frac{d^2x}{dt^2} = \frac{g}{L}x$$

where $L$ is total length.

<details><summary>Solution</summary><p>Mass over edge: $m_1 = \frac{m}{L}x$</p><p>Weight: $F = \frac{mgx}{L}$</p><p>By Newton’s second law: $F = ma$</p><p>$\frac{mgx}{L} = m\frac{d^2x}{dt^2}$</p><p>$\frac{d^2x}{dt^2} = \frac{g}{L}x$</p></details>

**Problem 3.3**: Show that orthogonal trajectories of circles $x^2 + y^2 + 2gx + c = 0$ (with $g$ as parameter) are circles $x^2 + y^2 + 2fy + k = 0$.

<details><summary>Solution</summary><p>Differentiate given family:
$2x + 2y\frac{dy}{dx} + 2g = 0$</p><p>$g = -x - y\frac{dy}{dx}$</p><p>Substitute back: $x^2 + y^2 + 2(-x - y\frac{dy}{dx})x + c = 0$</p><p>$x^2 + y^2 - 2x^2 - 2xy\frac{dy}{dx} + c = 0$</p><p>$y^2 - x^2 - 2xy\frac{dy}{dx} + c = 0$</p><p>$\frac{dy}{dx} = \frac{y^2 - x^2 + c}{2xy}$</p><p>For orthogonal: $\frac{dy}{dx} = -\frac{2xy}{y^2 - x^2 + c}$</p><p>This leads to circles of form $x^2 + y^2 + 2fy + k = 0$</p></details>

---

## Summary of Key Formulas

| Application | Differential Equation | Solution |
| --- | --- | --- |
| **Growth** | $\frac{dN}{dt} = kN$ | $N = N_0e^{kt}$ |
| **Decay** | $\frac{dN}{dt} = -kN$ | $N = N_0e^{-kt}$ |
| **Cooling** | $\frac{dT}{dt} = -k(T - T_s)$ | $T = T_s + (T_0 - T_s)e^{-kt}$ |
| **RC Circuit** | $R\frac{dQ}{dt} + \frac{Q}{C} = V$ | $Q = CV(1 - e^{-t/RC})$ |
| **Free Fall** | $m\frac{dv}{dt} = mg - kv$ | $v = \frac{mg}{k}(1 - e^{-kt/m})$ |

---

## Cross-References

- **Variable Separable**: Core solving technique → [Variable Separable](../variable-separable/index.md)
- **Linear DE**: Used in many applications → [Linear DE](../linear-de/index.md)
- **Physics Applications**: Motion, circuits → [Mechanics](../../../physics/index.md)
- **Calculus**: Integration techniques → [Integration](../../integral-calculus/index.md)

---

## Quick Revision Checklist

- Growth: $\frac{dN}{dt} = +kN$, Decay: $\frac{dN}{dt} = -kN$
- Cooling: Temperature difference in equation
- Half-life: $N = N_0(1/2)^{t/T_{1/2}}$
- Orthogonal: Use $-\frac{dx}{dy}$ or negative reciprocal slope
- Mixing: Rate in minus rate out
- Always check units and signs

---

*Last updated: November 22, 2025*

From TestGuru · our mock-test platform

## You've read Applications of Differential Equations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=differential-equations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fdifferential-equations%2Fapplications-de%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/differential-equations/applications-de/",this.page.identifier="/mathematics/differential-equations/applications-de/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="functionPlotter" id="anim-functionPlotter-1795396421656057873"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-functionPlotter-1795396421656057873")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/differential-equations/applications-de/](https://jeenotes.in/mathematics/differential-equations/applications-de/) · raw HTML: `offline/mathematics/differential-equations/applications-de/index.html`_
