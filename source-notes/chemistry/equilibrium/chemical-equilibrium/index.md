---
title: "Chemical Equilibrium: Law of Mass Action, Kp, and Kc"
source: "https://jeenotes.in/chemistry/equilibrium/chemical-equilibrium/"
description: "Master equilibrium constants Kp and Kc, Law of Mass Action, and reaction quotient Q for JEE Chemistry equilibrium problems."
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Chemistry"
position: "/ Topic 1 of 8"
html: "../../../../offline/chemistry/equilibrium/chemical-equilibrium/index.html"
extracted: "2026-11-23"
---

> Master equilibrium constants Kp and Kc, Law of Mass Action, and reaction quotient Q for JEE Chemistry equilibrium problems.

## The Hook: Why Does Your Soda Go Flat?

> **★ Key point · Connect: Real Life → Chemistry**
>
> Ever noticed how a cold soda fizzes more than a warm one? Or why champagne bottles are under pressure? The answer lies in chemical equilibrium—the constant battle between CO₂ dissolving in water and escaping as bubbles.
>
> **The question:** If reactions can go both ways, when do they “decide” to stop?
>
> **JEE Reality:** This topic appears in 2-3 questions every year in JEE Main and is a foundation for thermodynamics and ionic equilibrium in JEE Advanced.

---

## The Core Concept

### What is Chemical Equilibrium?

Imagine a dance floor where people are constantly entering and leaving. When the rate of people entering equals the rate of people leaving, the number of dancers stays constant—even though individuals keep moving. That’s equilibrium!

**Chemical Equilibrium** is a dynamic state where:

- Forward reaction rate = Backward reaction rate
- Concentrations of reactants and products remain constant
- Molecular-level reactions continue non-stop

$$aA + bB \rightleftharpoons cC + dD$$

At equilibrium: Rate$_{forward}$ = Rate$_{backward}$

> **◐ In simple terms · Dynamic vs Static**
>
> **Static equilibrium:** Nothing moves (like a book on a table)

> **Dynamic equilibrium:** Continuous movement with no net change (like our dance floor or chemical reactions)
>
> JEE loves asking: “Is equilibrium static or dynamic?” Always answer: **Dynamic!**

---

## Law of Mass Action

Formulated by Guldberg and Waage in 1864, this law connects reaction rates to concentrations.

### The Law

For the reaction: $aA + bB \rightleftharpoons cC + dD$

At equilibrium:

$$\boxed{K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}}$$

Where:

- $K_c$ = Equilibrium constant (in terms of concentration)
- $[X]$ = Molar concentration of X
- Exponents = Stoichiometric coefficients

**In simple terms:** “Products over reactants, each raised to their coefficient power.”

### Important Points

1. **Pure solids and liquids are NOT included** in the expression

   - Their concentrations are constant
   - Example: $CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)$
   - $K_c = [CO_2]$ only!
2. **K depends ONLY on temperature**

   - Concentration changes? K stays same
   - Pressure changes? K stays same
   - Catalyst added? K stays same
   - Temperature changes? K changes!
3. **Units of K**

   - Depend on $\Delta n = (c+d) - (a+b)$
   - If $\Delta n = 0$, K is unitless
   - Otherwise: (mol/L)$^{\Delta n}$

---

## Equilibrium Constant Kp

For gaseous reactions, we can express equilibrium using partial pressures instead of concentrations.

$$\boxed{K_p = \frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}}$$

Where $P_X$ = Partial pressure of gas X

### Relationship Between Kp and Kc

This is a **high-yield JEE formula**:

$$\boxed{K_p = K_c(RT)^{\Delta n_g}}$$

Where:

- $R$ = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K)
- $T$ = Temperature in Kelvin
- $\Delta n_g$ = (moles of gaseous products) - (moles of gaseous reactants)

> **★ Key point · When Kp = Kc**
>
> If $\Delta n_g = 0$, then $(RT)^0 = 1$, so $K_p = K_c$
>
> **Classic JEE examples:**
>
> - $H_2 + I_2 \rightleftharpoons 2HI$ ($\Delta n_g = 2-2 = 0$)

> - $N_2 + O_2 \rightleftharpoons 2NO$ ($\Delta n_g = 2-2 = 0$)

---

## Memory Tricks & Patterns

### Mnemonic for Kp and Kc Relationship

**“Keep Players Running Through Delta Games”**

- **K**eep = K
- **P**layers = p
- **R**unning **T**hrough = RT
- **Delta Games** = $\Delta n_g$

→ $K_p = K_c(RT)^{\Delta n_g}$

### Pattern Recognition: Delta n

| Reaction | $\Delta n_g$ | Relation |
| --- | --- | --- |
| $N_2 + 3H_2 \rightleftharpoons 2NH_3$ | 2 - 4 = -2 | $K_p = K_c(RT)^{-2}$ |
| $2SO_2 + O_2 \rightleftharpoons 2SO_3$ | 2 - 3 = -1 | $K_p = K_c(RT)^{-1}$ |
| $H_2 + I_2 \rightleftharpoons 2HI$ | 2 - 2 = 0 | $K_p = K_c$ |
| $N_2O_4 \rightleftharpoons 2NO_2$ | 2 - 1 = +1 | $K_p = K_c(RT)$ |
| $PCl_5 \rightleftharpoons PCl_3 + Cl_2$ | 2 - 1 = +1 | $K_p = K_c(RT)$ |

**JEE Trick:** If products have more gas molecules, $\Delta n_g$ is positive; if fewer, it’s negative.

### Mnemonic for K Expression

**“Products Powered Up, Reactants Down Below”**

$$K = \frac{\text{Products}^{\text{powers}}}{\text{Reactants}^{\text{powers}}}$$

---

## Reaction Quotient (Q)

The reaction quotient Q has the **same form as K** but for **non-equilibrium** conditions.

$$Q_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

(at any instant)

### Interactive Demo: Watch Equilibrium Establish Itself

See how a reversible reaction reaches equilibrium dynamically. Adjust initial concentrations and observe how forward and reverse reaction rates balance out.

### Decision Tree: Which Way Does the Reaction Go?

> **★ Key point · Q vs K: The Direction Predictor**
>
> | Comparison | Direction | What Happens |

> | --- | --- | --- |

> | $Q < K$ | Forward → | More products form |

> | $Q = K$ | ⇌ Equilibrium | No net change |

> | $Q > K$ | ← Backward | More reactants form |
>
> **Memory:** “Q questions K’s position. If Q is less, go forward to catch up!”

### Example Problem

For $N_2 + 3H_2 \rightleftharpoons 2NH_3$, $K_c = 0.5$ at 400°C.

If $[N_2] = 1M$, $[H_2] = 1M$, $[NH_3] = 2M$:

$$Q_c = \frac{[NH_3]^2}{[N_2][H_2]^3} = \frac{(2)^2}{(1)(1)^3} = 4$$

Since $Q_c = 4 > K_c = 0.5$, reaction goes **backward** (more NH₃ will decompose).

---

## Characteristics of Equilibrium Constant

### 1. Magnitude of K

| K Value | Meaning | Position |
| --- | --- | --- |
| $K >> 1$ | Products favored | Equilibrium lies to right |
| $K \approx 1$ | Both favored equally | Equilibrium in middle |
| $K << 1$ | Reactants favored | Equilibrium lies to left |

**JEE Insight:** If $K > 10^3$, reaction is essentially complete. If $K < 10^{-3}$, reaction barely proceeds.

### 2. Effect of Reversing Reaction

If forward reaction has $K_f$, reverse reaction has:

$$K_r = \frac{1}{K_f}$$

Example:

- $N_2 + 3H_2 \rightleftharpoons 2NH_3$, $K_1 = 10$
- $2NH_3 \rightleftharpoons N_2 + 3H_2$, $K_2 = \frac{1}{10} = 0.1$

### 3. Effect of Multiplying Equation

If equation is multiplied by n:

$$K_{new} = (K_{original})^n$$

Example:

- $N_2 + 3H_2 \rightleftharpoons 2NH_3$, $K_1$
- $\frac{1}{2}N_2 + \frac{3}{2}H_2 \rightleftharpoons NH_3$, $K_2 = \sqrt{K_1}$

### 4. Adding Reactions

If reaction 3 = reaction 1 + reaction 2:

$$K_3 = K_1 \times K_2$$

---

## Degree of Dissociation (α)

**Degree of dissociation (α)** = Fraction of reactant that dissociates

$$\alpha = \frac{\text{Amount dissociated}}{\text{Initial amount}}$$

Range: $0 \leq \alpha \leq 1$ (or 0% to 100%)

### ICE Table Method

For $A \rightleftharpoons B + C$ starting with concentration $C_0$:

|  | A | B | C |
| --- | --- | --- | --- |
| **I**nitial | $C_0$ | 0 | 0 |
| **C**hange | $-C_0\alpha$ | $+C_0\alpha$ | $+C_0\alpha$ |
| **E**quilibrium | $C_0(1-\alpha)$ | $C_0\alpha$ | $C_0\alpha$ |

$$K_c = \frac{[B][C]}{[A]} = \frac{(C_0\alpha)(C_0\alpha)}{C_0(1-\alpha)} = \frac{C_0\alpha^2}{1-\alpha}$$

### When α is Small (α « 1)

If $\alpha < 0.05$ (less than 5%), we can approximate $(1-\alpha) \approx 1$:

$$K_c \approx C_0\alpha^2$$

$$\boxed{\alpha \approx \sqrt{\frac{K_c}{C_0}}}$$

**JEE Tip:** This approximation is valid when $\frac{K_c}{C_0} < 0.0025$

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Including Solids/Liquids in K Expression**
>
> **Wrong:** $CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)$, $K_c = \frac{[CaO][CO_2]}{[CaCO_3]}$
>
> **Correct:** $K_c = [CO_2]$ only
>
> **Why?** Pure solids and liquids have constant concentrations that are absorbed into K.

> **⚠ Trap #2: Confusing Q with K**
>
> **Common Error:** Using Q to calculate equilibrium concentrations
>
> **Remember:**
>
> - **K** = At equilibrium (constant for given T)

> - **Q** = At any moment (variable, helps predict direction)

> **⚠ Trap #3: Wrong Delta n Calculation**
>
> **Reaction:** $2NH_3(g) \rightleftharpoons N_2(g) + 3H_2(g)$
>
> **Wrong:** $\Delta n_g = 3 - 2 = 1$ (counting only H₂)
>
> **Correct:** $\Delta n_g = (1+3) - 2 = +2$ (total products - total reactants)

> **⚠ Trap #4: Temperature Units**
>
> When using $K_p = K_c(RT)^{\Delta n}$:
>
> **Always use T in Kelvin!**
>
> - Given 27°C → Use 300 K

> - Given 100°C → Use 373 K
>
> **Formula:** K = °C + 273

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1: Basic K Expression**
>
> Write the equilibrium constant expression for:
>
> $$4NH_3(g) + 5O_2(g) \rightleftharpoons 4NO(g) + 6H_2O(g)$$
>
> **Solution:**
>
> $$K_c = \frac{[NO]^4[H_2O]^6}{[NH_3]^4[O_2]^5}$$
>
> Products on top with their coefficients as powers, reactants on bottom.

> **↗ Connection · Problem 2: Kp = Kc?**
>
> For which reaction is $K_p = K_c$?
>
> 1. $PCl_5 \rightleftharpoons PCl_3 + Cl_2$

> 2. $N_2 + O_2 \rightleftharpoons 2NO$

> 3. $2SO_2 + O_2 \rightleftharpoons 2SO_3$
>
> **Solution:**

> Reaction 2: $N_2 + O_2 \rightleftharpoons 2NO$
>
> $\Delta n_g = 2 - (1+1) = 0$
>
> When $\Delta n = 0$, $K_p = K_c(RT)^0 = K_c$

> **↗ Connection · Problem 3: Q vs K Prediction**
>
> For $H_2 + I_2 \rightleftharpoons 2HI$, $K_c = 50$ at 445°C.
>
> If $[H_2] = 0.2M$, $[I_2] = 0.2M$, $[HI] = 2M$, which way does the reaction proceed?
>
> **Solution:**
>
> $$Q_c = \frac{[HI]^2}{[H_2][I_2]} = \frac{(2)^2}{(0.2)(0.2)} = \frac{4}{0.04} = 100$$
>
> $Q_c = 100 > K_c = 50$
>
> **Answer:** Reaction goes **backward** (left) to decrease Q.

---

### Level 2: JEE Main

> **↗ Connection · Problem 4: Kp to Kc Conversion**
>
> For the reaction $N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)$, $K_p = 1.64 \times 10^{-4}$ atm$^{-2}$ at 400°C. Calculate $K_c$.
>
> **Solution:**

> $\Delta n_g = 2 - 4 = -2$
>
> $K_p = K_c(RT)^{-2}$
>
> $T = 400 + 273 = 673K$, $R = 0.0821$
>
> $$K_c = K_p(RT)^2 = 1.64 \times 10^{-4} \times (0.0821 \times 673)^2$$

$$K_c = 1.64 \times 10^{-4} \times (55.25)^2 = 1.64 \times 10^{-4} \times 3052.6$$

$$K_c = 0.50 \text{ mol}^2\text{L}^{-2}$$

> **↗ Connection · Problem 5: Degree of Dissociation**
>
> $N_2O_4$ dissociates as: $N_2O_4 \rightleftharpoons 2NO_2$
>
> If $K_c = 0.8$ and initial concentration is 2M, find degree of dissociation $\alpha$.
>
> **Solution:**

> ICE table:
>
> |  | $N_2O_4$ | $NO_2$ |

> | --- | --- | --- |

> | I | 2 | 0 |

> | C | $-2\alpha$ | $+4\alpha$ |

> | E | $2(1-\alpha)$ | $4\alpha$ |
>
> $$K_c = \frac{[NO_2]^2}{[N_2O_4]} = \frac{(4\alpha)^2}{2(1-\alpha)} = \frac{16\alpha^2}{2(1-\alpha)} = \frac{8\alpha^2}{1-\alpha}$$

$$0.8(1-\alpha) = 8\alpha^2$$

$$0.8 - 0.8\alpha = 8\alpha^2$$

$$8\alpha^2 + 0.8\alpha - 0.8 = 0$$

$$80\alpha^2 + 8\alpha - 8 = 0$$

$$10\alpha^2 + \alpha - 1 = 0$$
>
> Using quadratic formula:
>
> $$\alpha = \frac{-1 + \sqrt{1 + 40}}{20} = \frac{-1 + \sqrt{41}}{20} = \frac{-1 + 6.4}{20} = \frac{5.4}{20} = 0.27$$
>
> **Answer:** $\alpha = 0.27$ or 27%

---

### Level 3: JEE Advanced

> **↗ Connection · Problem 6: Multi-Step Equilibrium**
>
> Given:
>
> 1. $N_2(g) + O_2(g) \rightleftharpoons 2NO(g)$, $K_1 = 4 \times 10^{-4}$

> 2. $2NO(g) + O_2(g) \rightleftharpoons 2NO_2(g)$, $K_2 = 2 \times 10^{6}$
>
> Find K for: $N_2(g) + 2O_2(g) \rightleftharpoons 2NO_2(g)$
>
> **Solution:**

> The target reaction is: Reaction 1 + Reaction 2
>
> When reactions are added, equilibrium constants multiply:
>
> $$K_3 = K_1 \times K_2 = (4 \times 10^{-4}) \times (2 \times 10^{6})$$

$$K_3 = 8 \times 10^2 = 800$$

> **↗ Connection · Problem 7: Pressure Equilibrium (Advanced)**
>
> For $PCl_5(g) \rightleftharpoons PCl_3(g) + Cl_2(g)$, 1 mole of $PCl_5$ is placed in a 1L container at 250°C. At equilibrium, 0.6 moles of $PCl_5$ remain. Calculate $K_p$ if total pressure is 2 atm.
>
> **Solution:**
>
> |  | $PCl_5$ | $PCl_3$ | $Cl_2$ |

> | --- | --- | --- | --- |

> | I | 1 | 0 | 0 |

> | E | 0.6 | 0.4 | 0.4 |
>
> Total moles = 0.6 + 0.4 + 0.4 = 1.4
>
> Partial pressures (using $P_i = X_i \times P_{total}$):
>
> - $P_{PCl_5} = \frac{0.6}{1.4} \times 2 = 0.857$ atm

> - $P_{PCl_3} = \frac{0.4}{1.4} \times 2 = 0.571$ atm

> - $P_{Cl_2} = \frac{0.4}{1.4} \times 2 = 0.571$ atm
>
> $$K_p = \frac{P_{PCl_3} \times P_{Cl_2}}{P_{PCl_5}} = \frac{0.571 \times 0.571}{0.857} = \frac{0.326}{0.857} = 0.38 \text{ atm}$$

> **↗ Connection · Problem 8: Complex Calculation (JEE Advanced 2019 Type)**
>
> At 1000K, $K_c = 2.37 \times 10^{-3}$ for the reaction:
>
> $$2H_2S(g) \rightleftharpoons 2H_2(g) + S_2(g)$$
>
> If 0.5 mol $H_2S$ is placed in a 2L flask at 1000K, calculate equilibrium concentrations.
>
> **Solution:**

> Initial $[H_2S] = 0.5/2 = 0.25M$
>
> |  | $H_2S$ | $H_2$ | $S_2$ |

> | --- | --- | --- | --- |

> | I | 0.25 | 0 | 0 |

> | C | $-2x$ | $+2x$ | $+x$ |

> | E | $0.25-2x$ | $2x$ | $x$ |
>
> $$K_c = \frac{[H_2]^2[S_2]}{[H_2S]^2} = \frac{(2x)^2(x)}{(0.25-2x)^2} = \frac{4x^3}{(0.25-2x)^2}$$
>
> Since $K_c$ is small, assume $2x << 0.25$:
>
> $$2.37 \times 10^{-3} \approx \frac{4x^3}{(0.25)^2} = \frac{4x^3}{0.0625}$$

$$x^3 = \frac{2.37 \times 10^{-3} \times 0.0625}{4} = 3.7 \times 10^{-5}$$

$$x = (3.7 \times 10^{-5})^{1/3} = 0.033M$$
>
> **Equilibrium concentrations:**
>
> - $[H_2S] = 0.25 - 2(0.033) = 0.184M$

> - $[H_2] = 2(0.033) = 0.066M$

> - $[S_2] = 0.033M$
>
> Check: $2x = 0.066 << 0.25$ ✓ (approximation valid)

---

## Quick Revision Box

| Situation | Formula/Approach |
| --- | --- |
| Calculate K from concentrations | $K_c = \frac{[\text{products}]^{\text{powers}}}{[\text{reactants}]^{\text{powers}}}$ |
| Convert $K_p$ to $K_c$ | $K_p = K_c(RT)^{\Delta n_g}$ |
| Predict reaction direction | Calculate Q; if $QK$ go backward |
| Small degree of dissociation | $\alpha = \sqrt{K_c/C_0}$ when $\alpha << 1$ |
| Reverse reaction | $K_{reverse} = 1/K_{forward}$ |
| Multiply equation by n | $K_{new} = (K_{old})^n$ |
| Add reactions | $K_{total} = K_1 \times K_2 \times K_3...$ |
| K very large ($>10^3$) | Reaction goes nearly to completion |
| K very small ($<10^{-3}$) | Reaction barely proceeds |

---

## When to Use This

> **★ Key point · Decision Tree: Kc vs Kp**
>
> **Use Kc when:**
>
> - Dealing with solutions (aqueous reactions)

> - Given concentrations in mol/L or M

> - Reaction involves solids/liquids
>
> **Use Kp when:**
>
> - All reactants and products are gases

> - Given partial pressures or total pressure

> - Problem mentions “atmospheric pressure” or “atm”
>
> **Convert between them when:**
>
> - Need to compare values

> - One is given but need the other

> - Always use: $K_p = K_c(RT)^{\Delta n_g}$

---

## Connection to Other Topics

Chemical equilibrium is the foundation for:

### Within Equilibrium Chapter

1. **[Ionic Equilibrium](../index.md)** - Applies same principles to acids, bases, and salts
2. **[Le Chatelier’s Principle](../le-chateliers-principle/index.md)** - Predicts how equilibrium shifts
3. **[Acids and Bases](../index.md)** - Ka, Kb, and proton transfer equilibria
4. **[pH and Buffer Solutions](../ph-buffer/index.md)** - Henderson-Hasselbalch equation
5. **[Solubility Product](../solubility-product/index.md)** - Special case of equilibrium for sparingly soluble salts

### Cross-Chapter Links

6. **[Thermodynamics - Gibbs Energy](../../thermodynamics/gibbs-energy/index.md)** - Relationship: $\Delta G° = -RT \ln K$
7. **[Thermodynamics - Entropy](../../thermodynamics/entropy/index.md)** - Spontaneity and equilibrium
8. **[Chemical Kinetics - Rate Law](../../chemical-kinetics/rate-law/index.md)** - At equilibrium: $k_f = k_b \times K$
9. **[Arrhenius Equation](../../chemical-kinetics/arrhenius-equation/index.md)** - Temperature dependence of K
10. **[Electrochemistry - Nernst Equation](../../redox-electrochemistry/nernst-equation/index.md)** - Cell potential at non-standard conditions
11. **[Coordination Compounds](../../coordination-compounds/stability-constants/index.md)** - Formation constants

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Equilibrium is dynamic** - reactions continue but with no net change

> 2. **K depends only on temperature** - not affected by concentration, pressure, or catalyst

> 3. **Q tells direction** - compare Q to K to predict which way reaction proceeds

> 4. **Master Kp-Kc conversion** - $K_p = K_c(RT)^{\Delta n_g}$ is a JEE favorite

> 5. **ICE tables are your friend** - organize equilibrium calculations systematically
>
> **“Equilibrium doesn’t mean reactions stop—it means they’re running a perfectly balanced race. Master K and Q, and you’ll predict every finish line!”**
>
> **JEE Strategy:** This chapter typically contributes 6-8% of Chemistry paper. Focus on numerical problems involving Kp-Kc conversion, degree of dissociation, and multi-step equilibria.

---

## What’s Next?

Now that you understand equilibrium constants and calculations, learn how to shift equilibrium in your favor:

- **[Le Chatelier’s Principle](../le-chateliers-principle/index.md)** - Control equilibrium by changing conditions
- **[Ionic Equilibrium](../index.md)** - Apply these concepts to electrolytes and ions

From TestGuru · our mock-test platform

## You've read Chemical Equilibrium: Law of Mass Action, Kp, and Kc.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=equilibrium&tg_exam=jee-main&tg_page=%2Fchemistry%2Fequilibrium%2Fchemical-equilibrium%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/equilibrium/chemical-equilibrium/",this.page.identifier="/chemistry/equilibrium/chemical-equilibrium/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="equilibriumDemo" id="anim-equilibriumDemo-1795396419590982253"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-equilibriumDemo-1795396419590982253")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/equilibrium/chemical-equilibrium/](https://jeenotes.in/chemistry/equilibrium/chemical-equilibrium/) · raw HTML: `offline/chemistry/equilibrium/chemical-equilibrium/index.html`_
