---
title: "Daily Challenge — 7 August 2026"
source: "https://jeenotes.in/daily-challenges/2026-08-07/"
description: "Week 1 of Mission JEE 2027 · Ground Zero — Foundations week — units, mole concept, and the language of sets. Everything else builds on this. See the full plan ."
html: "../../../offline/daily-challenges/2026-08-07/index.html"
extracted: "2026-11-23"
---

> Week 1 of Mission JEE 2027 · Ground Zero — Foundations week — units, mole concept, and the language of sets. Everything else builds on this. See the full plan .

When Swiggy batches three orders to one delivery partner, it is grouping by neighbourhood: same area, same trip. Group things by a rule that is reflexive, symmetric and transitive, and mathematicians call it an equivalence relation. Your dinner has been running set theory for years.

Today, day 5 of Ground Zero, maths asks you to count the equivalence relations on a small set — small set, surprisingly sneaky counting. Physics wants the maximum percentage error in a wire’s density from its measured mass and radius, and chemistry runs a Dumas-method nitrogen estimation, a classic mole workout.

Three questions before dinner arrives. Thirty minutes, or it is on your conscience.

Physics

## Units and Measurements

JEE Main 2025
Evening

The maximum percentage error in the measurment of density of a wire is  
  
[Given, mass of wire $=(0.60 \pm 0.003) \mathrm{g}$  
  
radius of wire $=(0.50 \pm 0.01) \mathrm{cm}$  
  
length of wire $=(10.00 \pm 0.05) \mathrm{cm}]$

- **A.** 7

- **B.** 8

- **C.** 5

- **D.** 4

**Solution / Answer**

To determine the maximum percentage error in the density of the wire, follow these steps:

The density of the wire is given by the formula for a cylinder:

$$\rho = \frac{m}{\pi r^2 l}$$

When calculating the maximum percentage (relative) error, you add the relative errors from each variable, taking into account the power to which each variable is raised. Thus, for density:

$$\frac{\Delta \rho}{\rho} = \frac{\Delta m}{m} + 2\frac{\Delta r}{r} + \frac{\Delta l}{l}$$

Here:

$$\frac{\Delta m}{m}$$ is the relative error in the mass.

$$2\frac{\Delta r}{r}$$ is due to the radius being squared.

$$\frac{\Delta l}{l}$$ is the relative error in the length.

Now plug in the given values:

Mass: $$m = 0.60 \, \text{g}$$ with an error $$\Delta m = 0.003 \, \text{g}$$

$$\frac{\Delta m}{m} = \frac{0.003}{0.60} = 0.005$$ or 0.5%.

Radius: $$r = 0.50 \, \text{cm}$$ with an error $$\Delta r = 0.01 \, \text{cm}$$

$$\frac{\Delta r}{r} = \frac{0.01}{0.50} = 0.02$$ or 2%. Since the radius is squared in the formula, multiply by 2:

$$2\frac{\Delta r}{r} = 2 \times 0.02 = 0.04$$ or 4%.

Length: $$l = 10.00 \, \text{cm}$$ with an error $$\Delta l = 0.05 \, \text{cm}$$

$$\frac{\Delta l}{l} = \frac{0.05}{10.00} = 0.005$$ or 0.5%.

Sum these contributions to find the overall maximum relative error:

$$\frac{\Delta \rho}{\rho} = 0.005 + 0.04 + 0.005 = 0.05$$

Converting this relative error into a percentage gives:

$$0.05 \times 100\% = 5\%$$

Thus, the maximum percentage error in the density of the wire is 5%, which corresponds to Option C.

**Correct option:** C

Chemistry
Numerical

## Some Basic Concepts of Chemistry

JEE Main 2025
Morning

$$ \text {During estimation of nitrogen by Dumas' method of compound } \mathrm{X}(0.42 \mathrm{~g}) $$

![](https://app-content.cdn.examgoal.net/fly/@width/image/jaoe38c1m9gjcdd6/cad3a944-fa8c-45a4-8333-54a13681f2b5/89e340a0-18e3-11f0-a103-9bd1ffe79f48/file-jaoe38c1m9gjcdd7.png)

_________mL of $\mathrm{N}_2$ gas will be liberated at STP. (nearest integer)

(Given molar mass in $\mathrm{g}~ \mathrm{mol}^{-1}: \mathrm{C}: 12, \mathrm{H}: 1, \mathrm{~N}: 14$ )

Numerical answer — work it out, then check the solution.

**Solution / Answer**

M.wt. of given compound = 86

![](https://app-content.cdn.examgoal.net/fly/@width/image/jaoe38c1ma0o0ip9/cb7253e3-89ee-46da-97e0-8208720199cc/7aef05d0-23f5-11f0-97d4-0962b8b605df/file-jaoe38c1ma0o0ipa.png)

$$\begin{aligned} &\text { Applying POAC on ' } \mathrm{N} \text { ' }\\ &\begin{aligned} & \mathrm{n}_{\mathrm{X}} \times 2=\mathrm{n}_{\mathrm{N}_2} \times 2 \\ & \frac{0.42}{86}=\mathrm{n}_{\mathrm{N}_2} \\ & \Rightarrow(\text { Volume })_{\mathrm{N}_2} \text { at } \mathrm{STP}=\frac{0.42}{86} \times 22.4 \mathrm{~L} \\ & =0.1108 \mathrm{~L}=110.8 \mathrm{~m} \ell \end{aligned} \end{aligned}$$

Mathematics

## Sets and Relations

JEE Main 2025
Morning

The number of non-empty equivalence relations on the set $\{1,2,3\}$ is :

- **A.** 7

- **B.** 4

- **C.** 5

- **D.** 6

**Solution / Answer**

An equivalence relation on a finite set is uniquely determined by its partition into equivalence classes. Hence, counting the number of equivalence relations on a set is equivalent to counting the number of ways to partition that set.

Step: Counting partitions of $\{1,2,3\}$

We want all possible ways to split the set $\{1,2,3\}$ into nonempty subsets (its “blocks”).

**3 blocks (each element in its own block)**

$ \{\{1\}, \{2\}, \{3\}\}. $

**2 blocks**

$\{\{1,2\}, \{3\}\}$

$\{\{1,3\}, \{2\}\}$

$\{\{2,3\}, \{1\}\}$

**1 block** (all elements together)

$ \{\{1,2,3\}\}. $

Counting these, there are a total of **5** distinct partitions, and thus **5** equivalence relations on the set $\{1,2,3\}$.

All equivalence relations are automatically nonempty (they include at least $(1,1), (2,2), (3,3)$ because they are reflexive), so the answer to “the number of nonempty equivalence relations” is also **5**.

**Answer: Option C (5)**

**Correct option:** C

---

_Source: [https://jeenotes.in/daily-challenges/2026-08-07/](https://jeenotes.in/daily-challenges/2026-08-07/) · raw HTML: `offline/daily-challenges/2026-08-07/index.html`_
