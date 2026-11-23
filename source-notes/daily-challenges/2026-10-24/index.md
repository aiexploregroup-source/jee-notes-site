---
title: "Daily Challenge — 24 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-24/"
description: "Week 12 of Mission JEE 2027 · Charged Up — Electrostatics opens electromagnetism; hydrocarbons open real organic; geometry gets consolidated. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-24/index.html"
extracted: "2026-11-23"
---

> Week 12 of Mission JEE 2027 · Charged Up — Electrostatics opens electromagnetism; hydrocarbons open real organic; geometry gets consolidated. See the full plan .

“Sparks flying” gets used for crushes way more than it gets used correctly, but the actual physics is electrostatic discharge — two spheres at different potentials touching and instantly sharing charge until they reach the same potential, a much less romantic explanation than the meme format usually gets.

This week’s hydrocarbon problem tracks a benzene molecule through a whole reaction sequence, which is its own slow-burn relationship, one step building toward the next. And the right-angled triangle two friends’ coordinates form in today’s geometry question is measuring distance in a very literal, very unsentimental way.

Less romance, more rigour. Three questions — let’s go.

Physics

## Electrostatics

JEE Main 2026
8 Apr, Shift 2

Two point charges $q_1 = 3\,\mu C$ and $q_2 = -4\,\mu C$ are placed at points $(2\hat{i} + 3\hat{j} + 3\hat{k})$ and $(\hat{i} + \hat{j} + \hat{k})$ respectively. Force on charge $q_2$ is __________ N. $\left(\text{Take } \frac{1}{4\pi\epsilon_0} = 9 \times 10^9 \text{ SI Units}\right)$

- **A.** $(12\hat{i} + 24\hat{j} + 24\hat{k}) \times 10^{-3}$

- **B.** $(4\hat{i} + 8\hat{j} + 8\hat{k}) \times 10^{-3}$

- **C.** $(3\hat{i} + 6\hat{j} + 6\hat{k}) \times 10^{-3}$

- **D.** $(-4\hat{i} - 8\hat{j} - 8\hat{k}) \times 10^{-3}$

**Solution / Answer**

Displacement from $q_1$ to $q_2$:

$$\vec{r} = (1-2)\hat{i} + (1-3)\hat{j} + (1-3)\hat{k} = -\hat{i} - 2\hat{j} - 2\hat{k}$$

$$|\vec{r}| = \sqrt{1 + 4 + 4} = 3$$

Magnitude factor:

$$\frac{1}{4\pi\epsilon_0}\frac{q_1 q_2}{r^2} = \frac{9\times10^9\times(3\times10^{-6})(-4\times10^{-6})}{3^2} = -1.2\times10^{-2}\ \text{N}$$

Force on $q_2$ (directed along $\hat{r}$ from $q_1\to q_2$):

$$\vec{F} = \left(-1.2\times10^{-2}\right)\frac{\vec{r}}{|\vec{r}|} = \left(-1.2\times10^{-2}\right)\frac{(-\hat{i}-2\hat{j}-2\hat{k})}{3}$$

$$\vec{F} = (4\times10^{-3})\hat{i} + (8\times10^{-3})\hat{j} + (8\times10^{-3})\hat{k}$$

The charges are opposite, so $q_2$ is pulled toward $q_1$ along $(+\hat{i}+2\hat{j}+2\hat{k})$, as obtained.

$$\vec{F} = (4\hat{i} + 8\hat{j} + 8\hat{k})\times10^{-3}\ \text{N}$$

**Answer:** B ($(4\hat{i} + 8\hat{j} + 8\hat{k}) \times 10^{-3}$)

**Correct option:** B

Chemistry
Numerical

## Hydrocarbons

JEE Main 2026
4 Apr, Shift 1

Consider the sequence of reactions on benzene:

$$\text{Benzene} \xrightarrow[\text{(iii) K}_2\text{Cr}_2\text{O}_7/\text{H}_2\text{SO}_4]{\text{(i) CH}_3\text{Cl}/\text{anhy. AlCl}_3\quad \text{(ii) Cl}_2/\text{FeCl}_3} (X)$$

$P$ g of the major product $(X)$ is treated with $\text{NaHCO}_3$ solution, liberating a gas that occupies $11.2\ \text{dm}^3$ at STP. Find $P$. (Molar masses: H = 1, C = 12, O = 16, Cl = 35.5)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Trace the sequence:

- **(i)** Friedel-Crafts methylation gives **toluene** ($\text{C}_6\text{H}_5\text{CH}_3$).
- **(ii)** Ring chlorination (the $-\text{CH}_3$ is o/p-directing) gives **chlorotoluene**.
- **(iii)** $\text{K}_2\text{Cr}_2\text{O}_7/\text{H}_2\text{SO}_4$ oxidises the $-\text{CH}_3$ side chain to $-\text{COOH}$.

So $(X)$ is **chlorobenzoic acid**, $\text{Cl-C}_6\text{H}_4\text{-COOH}$ (formula $\text{C}_7\text{H}_5\text{ClO}_2$).

Only the $-\text{COOH}$ group reacts with $\text{NaHCO}_3$, releasing $\text{CO}_2$:

$$\text{Ar-COOH} + \text{NaHCO}_3 \rightarrow \text{Ar-COONa} + \text{H}_2\text{O} + \text{CO}_2\uparrow$$

Moles of gas:

$$n_{\text{CO}_2} = \dfrac{11.2}{22.4} = 0.5\ \text{mol}$$

Since $1\ \text{mol}$ of acid $\to 1\ \text{mol}\ \text{CO}_2$, moles of $(X) = 0.5$.

Molar mass of $\text{C}_7\text{H}_5\text{ClO}_2$:

$$7(12) + 5(1) + 35.5 + 2(16) = 84 + 5 + 35.5 + 32 = 156.5\ \text{g mol}^{-1}$$

$$P = 0.5 \times 156.5 = 78.25\ \text{g}$$

**Answer:** 78.25

Mathematics
Numerical

## Coordinate Geometry

JEE Main 2026
Apr 5, Shift 2

From the point $(-1, -1)$, two rays are sent making angles of $45^\circ$ with the line $x + y = 0$. These rays get reflected from the mirror $x + 2y = 1$. If the equations of the reflected rays are $ax + by = 9$ and $cx + dy = 7$, $a, b, c, d \in \mathbf{Z}$, then the value of $ad + bc$ is __________.

Numerical answer — work it out, then check the solution.

**Solution / Answer**

A line making $45^\circ$ with $x+y=0$ (slope $-1$) has slope $m$ with $\left|\dfrac{m+1}{1-m}\right|=1$, giving $m=0$ or the vertical direction. So from $(-1,-1)$ the two incident rays are $y=-1$ and $x=-1$.

**Ray $y=-1$** meets the mirror $x+2y=1$ at $(3,-1)$. Reflect the direction $(1,0)$ across the mirror using $\vec d\,' = \vec d - 2(\vec d\cdot\hat n)\hat n$ with normal $\vec n=(1,2)$, $|\vec n|^2=5$:

$$\vec d\,'=(1,0)-2\cdot\frac{1}{5}(1,2)=\left(\tfrac35,-\tfrac45\right)\ \parallel\ (3,-4).$$

The reflected line through $(3,-1)$ with slope $-\tfrac43$ is

$$4x+3y=9\quad(a=4,\ b=3).$$

**Ray $x=-1$** meets the mirror at $(-1,1)$. Reflect the direction $(0,1)$:

$$\vec d\,'=(0,1)-2\cdot\frac{2}{5}(1,2)=\left(-\tfrac45,-\tfrac35\right)\ \parallel\ (4,3),\quad\text{slope}=\tfrac34.$$

The reflected line through $(-1,1)$ is $y-1=\tfrac34(x+1)$, i.e. $3x-4y=-7$. Writing it in the form $cx+dy=7$ (multiply by $-1$):

$$-3x+4y=7\quad(c=-3,\ d=4).$$

With line 1 as $4x+3y=9$ ($a=4,\ b=3$) and line 2 as $-3x+4y=7$ ($c=-3,\ d=4$):

$$ad+bc=4\cdot4+3\cdot(-3)=16-9=7.$$

**Answer:** 7

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-24/](https://jeenotes.in/daily-challenges/2026-10-24/) · raw HTML: `offline/daily-challenges/2026-10-24/index.html`_
