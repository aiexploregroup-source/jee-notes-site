---
title: "Daily Challenge — 22 September 2026"
source: "https://jeenotes.in/daily-challenges/2026-09-22/"
description: "Week 8 of Mission JEE 2027 · Heat of the Moment — Thermodynamics in physics, solutions in chemistry, and your first algebra consolidation week. See the full plan ."
html: "../../../offline/daily-challenges/2026-09-22/index.html"
extracted: "2026-11-23"
---

> Week 8 of Mission JEE 2027 · Heat of the Moment — Thermodynamics in physics, solutions in chemistry, and your first algebra consolidation week. See the full plan .

Saiyaara turned into the kind of hit that broke box office records within days, and a lot of that heat is just thermodynamics with better dialogue - energy poured in by an audience, converted, none of it lost, first law even applies to a phenomenon this big.

Underneath the melodrama, chemistry: solutions, where two things dissolve into each other and the mixture behaves differently from either component alone, which is basically every duet in that film. And working out exactly which pairs of moments belong to which relation is sets, relations and functions doing the unglamorous sorting.

Feel the heat, then do the math. Three questions today - go.

Physics

## Thermodynamics

JEE Main 2026
Apr 6, Shift 2

A cylinder with adiabatic walls is closed at both ends and is divided into two compartments by a frictionless adiabatic piston. Ideal gas is filled in both (left and right) the compartments at same $P,V,T$. Heating is started from left side until pressure changes to $\dfrac{27P}{8}$. If initial volume of each compartment was 9 litres then the final volume in right-hand side compartment is __________ litres. (for this ideal gas $C_P/C_V=1.5$)

- **A.** $3$

- **B.** $4$

- **C.** $14$

- **D.** $9$

**Solution / Answer**

The piston is frictionless, so pressure equalises across it; the common final pressure is $P_f = \dfrac{27P}{8}$.

The **right compartment** is compressed **adiabatically** (its walls and the piston are adiabatic), so $PV^{\gamma}$ is conserved with $\gamma = 1.5$:

$$P\,V_i^{\gamma} = P_f\,V_f^{\gamma} \implies V_f = V_i\left(\frac{P}{P_f}\right)^{1/\gamma}$$

$$V_f = 9\left(\frac{P}{27P/8}\right)^{1/1.5} = 9\left(\frac{8}{27}\right)^{2/3} = 9 \times \frac{4}{9} = 4\ \text{litres}$$

since $\left(\dfrac{8}{27}\right)^{2/3} = \dfrac{8^{2/3}}{27^{2/3}} = \dfrac{4}{9}$.

**Answer:** B ($4$)

**Correct option:** B

Chemistry

## Solutions

JEE Main 2025
Evening

Given below are two statements :

**Statement (I):** NaCl is added to the ice at 0°C, present in the ice cream box to prevent the melting of ice cream.

**Statement (II):** On addition of NaCl to ice at 0°C, there is a depression in freezing point.

In the light of the above statements, choose the **correct** answer from the options given below :

- **A.** Both Statement I and Statement II are false

- **B.** Statement I is true but Statement II is false

- **C.** Both Statement I and Statement II are true

- **D.** Statement I is false but Statement II is true

**Solution / Answer**

Statement I : Correct

NaCl addition to ice causes preventing the melting of ice. On adding NaCl to ice, freezing point lowers. This creates a colder mixture, preventing the ice cream from melting.

Melting point of ice is 0$^\circ$C. When only ice is used to make ice cream, at 0$^\circ$C ice starts melting by absorbing the energy from its environment in the form of heat. Addition of salt to ice while making the cream lowers the freezing point of the ice, allowing it to reach a colder temperature and thus the ice cream mixture freezes properly, So, the salt causes ice to melt at a lower temperature than pure ice.

Statement II : Correct

Decrease in freezing point while addition of NaCl to ice at 0$^\circ$C is due to the colligative property depression in freezing point.

So, both the statements are correct.

Both statement I and statement II are true.

**Correct option:** C

Mathematics
Numerical

## Sets, Relations and Functions

JEE Main 2026
Apr 5, Shift 2

Let $A = \{1, 4, 7\}$ and $B = \{2, 3, 8\}$. Then the number of elements, in the relation $R = \{((a_1, b_1), (a_2, b_2)) \in ((A \times B) \times (A \times B)) : a_1 + b_2 \text{ divides } a_2 + b_1\}$ is __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Each element of $A \times B$ is a pair $(a, b)$; there are $9$ such pairs. We count quadruples where $(a_1 + b_2) \mid (a_2 + b_1)$.

Let $s = a_1 + b_2$ (from the first pair’s $a$ and the second pair’s $b$) and $t = a_2 + b_1$. Both $s$ and $t$ range over sums $a + b$ with $a \in \{1,4,7\}$, $b \in \{2,3,8\}$, i.e. values in $\{3,4,9,6,7,12,9,10,15\}$.

Enumerating all $9 \times 9 = 81$ ordered pairs $((a_1,b_1),(a_2,b_2))$ and checking $(a_1+b_2)\mid(a_2+b_1)$ gives exactly $18$ satisfying quadruples.

$$|R| = 18.$$

**Answer:** 18

---

_Source: [https://jeenotes.in/daily-challenges/2026-09-22/](https://jeenotes.in/daily-challenges/2026-09-22/) · raw HTML: `offline/daily-challenges/2026-09-22/index.html`_
