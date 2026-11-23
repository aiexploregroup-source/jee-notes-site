---
title: "Electric Charges and Coulomb's Law"
source: "https://jeenotes.in/physics/electrostatics/electric-charges/"
description: "Master charge conservation, quantization, and Coulomb's law for JEE Physics"
updated: "2026-10-18"
reading_time: "11 min read"
breadcrumb: "Physics"
position: "/ Topic 1 of 8"
html: "../../../../offline/physics/electrostatics/electric-charges/index.html"
extracted: "2026-11-23"
---

> Master charge conservation, quantization, and Coulomb's law for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- Basic concepts of force and vectors from [Newton’s Laws](../../laws-of-motion/index.md)
- Vector addition and resolution

## The Hook: That Shocking Door Handle

> **★ Key point · Connect: Real Life Physics**
>
> Ever touched a metal door handle after walking on a carpet and felt a tiny shock? Or pulled off a sweater in the dark and saw tiny sparks? Remember the scene in **Thor: Ragnarok** when Thor’s lightning powers create electric sparks everywhere?
>
> That’s electric charge in action! The same force that creates lightning bolts and powers our phones starts with understanding what charge really is.

---

## What is Electric Charge?

**Electric charge** is a fundamental property of matter that causes it to experience a force in an electromagnetic field.

**Two types of charges:**

- **Positive charge** (protons)
- **Negative charge** (electrons)

> **◐ In simple terms · Like Charges Repel, Unlike Charges Attract**
>
> This is the **first law of electrostatics**:
>
> - Positive pushes positive away

> - Negative pushes negative away

> - Positive and negative attract each other
>
> Think of it like **Oppenheimer** (2023) — atoms are held together by the attraction between positive nuclei and negative electrons, but it takes enormous energy to pack positive protons together in the nucleus because they want to repel!

---

## The Three Fundamental Properties of Charge

### 1. Conservation of Charge

> **★ Key point · Law of Conservation of Charge**
>
> **The total electric charge in an isolated system remains constant.**
>
> Charge can neither be created nor destroyed — it can only be transferred from one body to another.

**Mathematical Form:**

$$\boxed{Q_{total} = Q_1 + Q_2 + Q_3 + ... = \text{constant}}$$

**Example:** When you rub a glass rod with silk:

- Glass rod: loses electrons → becomes **positive**
- Silk cloth: gains electrons → becomes **negative**
- Total charge = 0 (before) = 0 (after)

### 2. Quantization of Charge

All charges in nature are **integral multiples** of the elementary charge $e$.

$$\boxed{Q = ne}$$

where:

- $n$ = integer (&mldr;-3, -2, -1, 0, 1, 2, 3&mldr;)
- $e = 1.6 \times 10^{-19}$ C (charge of one electron)

> **★ Key point · Memory Trick**
>
> **“Charge comes in PACKETS, not fractions”**
>
> You cannot have 0.5 electrons or 2.7 protons. Charge is QUANTIZED — it comes in discrete packets, like buying eggs (you can’t buy half an egg!).

**Why don’t we notice quantization in daily life?**

Because $e$ is so tiny! A typical static shock involves transfer of billions of electrons, so we don’t notice the discrete steps.

### 3. Additive Nature of Charge

The total charge of a system is the **algebraic sum** of all individual charges (taking signs into account).

$$Q_{total} = q_1 + q_2 + q_3 + ... + q_n$$

**Example:**

- Charge 1: $+5$ μC
- Charge 2: $-3$ μC
- Charge 3: $+2$ μC
- **Total:** $Q_{total} = +5 - 3 + 2 = +4$ μC

---

## Methods of Charging

### 1. Charging by Friction

**Transfer of electrons through rubbing**

When you rub two materials together:

- One material **loses electrons** → becomes positive
- Other material **gains electrons** → becomes negative

**Examples:**

- Glass rod rubbed with silk → glass becomes **positive**
- Plastic comb rubbed with hair → comb becomes **negative**

> **★ Key point · Lightning in Movies**
>
> In **Thor** movies, when Thor creates lightning by rubbing his hammer or when Storm creates lightning in **X-Men**, they’re essentially creating massive charge separation — the same principle as rubbing a balloon on your hair, just on an epic scale!

### 2. Charging by Conduction

**Direct contact transfer**

When a charged object touches a neutral object:

- Charges flow from one to another
- Both objects end up with the **same type of charge**
- Charge distributes between them

**Example:** Touch a charged metal sphere to a neutral one → both become charged (positive if original was positive).

### 3. Charging by Induction

**Redistribution without contact**

Bring a charged object near (but not touching) a neutral conductor:

1. Charges redistribute in the neutral object
2. Opposite charge collects near the charged object
3. Similar charge moves to the far end
4. If you ground the far end, those charges escape
5. Remove ground, then remove charged object → neutral object is now charged!

> **⚠ Trap: Induction vs Conduction**
>
> **Common JEE Mistake:**
>
> - **Conduction:** Objects get the SAME sign of charge

> - **Induction:** Object gets the OPPOSITE sign of charge
>
> Remember: Induction is like a magnet attracting iron — opposites come near!

---

## Coulomb’s Law: The Heart of Electrostatics

### Statement

> **★ Key point · Coulomb's Law**
>
> The electrostatic force between two point charges is:
>
> 1. **Directly proportional** to the product of charges

> 2. **Inversely proportional** to the square of distance between them

> 3. Acts along the **line joining the charges**

> 4. **Attractive** for unlike charges, **repulsive** for like charges

### Mathematical Form

$$\boxed{F = k\frac{|q_1 q_2|}{r^2}}$$

where:

- $F$ = force (in Newtons)
- $q_1, q_2$ = charges (in Coulombs)
- $r$ = distance between charges (in meters)
- $k = 9 \times 10^9$ N·m²/C² (Coulomb’s constant)

### Interactive Demo: Visualize Coulomb’s Law

See exactly what each variable means and how changing them affects the electrostatic force:

**Alternative form:**

$$\boxed{F = \frac{1}{4\pi\varepsilon_0}\frac{|q_1 q_2|}{r^2}}$$

where $\varepsilon_0 = 8.85 \times 10^{-12}$ C²/N·m² (permittivity of free space)

**Relation:** $k = \frac{1}{4\pi\varepsilon_0}$

### Vector Form

For the force on charge $q_2$ due to $q_1$:

$$\boxed{\vec{F}_{21} = k\frac{q_1 q_2}{r^2}\hat{r}_{21}}$$

where $\hat{r}_{21}$ is the unit vector from $q_1$ to $q_2$.

> **◐ In simple terms · Sign Convention**
>
> - If $q_1 q_2 > 0$ (same signs) → $\vec{F}$ is positive → **repulsion**

> - If $q_1 q_2 < 0$ (opposite signs) → $\vec{F}$ is negative → **attraction**

---

## Memory Tricks for Coulomb’s Law

### Mnemonic for the Formula

**“Force Kills Quite Quickly at Reduced Range”**

$F = k \frac{Q_1 Q_2}{R^2}$

### Pattern Recognition

> **★ Key point · Universal Inverse Square Law**
>
> Coulomb’s law is exactly like Newton’s law of gravitation:
>
> | Gravitational Force | Electrostatic Force |

> | --- | --- |

> | $F = G\frac{m_1 m_2}{r^2}$ | $F = k\frac{q_1 q_2}{r^2}$ |

> | Always attractive | Can be attractive OR repulsive |

> | Very weak | MUCH stronger |
>
> **Key Difference:** Gravity only attracts, but electric forces can push OR pull!

**Comparison of Strengths:**

For an electron and proton (hydrogen atom):

- Electric force: $F_e \approx 10^{-8}$ N
- Gravitational force: $F_g \approx 10^{-47}$ N
- **Ratio:** $\frac{F_e}{F_g} \approx 10^{39}$

Electric force is **1000000000000000000000000000000000000000 times stronger** than gravity!

---

## Superposition Principle

> **★ Key point · Principle of Superposition**
>
> When multiple charges are present, the **net force** on any charge is the **vector sum** of forces due to all other charges, taken one at a time.

$$\boxed{\vec{F}_{net} = \vec{F}_1 + \vec{F}_2 + \vec{F}_3 + ... + \vec{F}_n}$$

**Important:** Each force is calculated as if all other charges don’t exist, then they’re added vectorially.

### Strategy for Multi-Charge Problems

1. **Draw** a clear diagram
2. Calculate force on the target charge due to **each** other charge separately
3. Resolve forces into **x and y components**
4. Add components: $F_x = \sum F_{ix}$, $F_y = \sum F_{iy}$
5. Find magnitude: $F = \sqrt{F_x^2 + F_y^2}$
6. Find direction: $\theta = \tan^{-1}\left(\frac{F_y}{F_x}\right)$

---

## When to Use Coulomb’s Law

> **★ Key point · Decision Tree**
>
> **Use Coulomb’s Law when:**
>
> - Problem gives specific charges and distances

> - Asked to find force between point charges

> - System has a few discrete charges
>
> **Don’t use Coulomb’s Law when:**
>
> - Dealing with continuous charge distributions → use integration

> - Asked about electric field directly → use $\vec{E} = \frac{\vec{F}}{q}$

> - High symmetry problems → use [Gauss’s Law](../gauss-law/index.md)

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Forgetting Vector Nature**
>
> **Wrong:** “Two forces of 3 N and 4 N, so total = 7 N”
>
> **Correct:** Forces are vectors! If perpendicular: $F = \sqrt{3^2 + 4^2} = 5$ N
>
> Always check the angle between forces before adding!

> **⚠ Trap #2: Sign Confusion**
>
> **Wrong:** Using magnitude formula with signs: $F = k\frac{(+2)(-3)}{r^2} = -6k/r^2$
>
> **Correct:**
>
> - For magnitude: Use $F = k\frac{|q_1||q_2|}{r^2}$, then determine direction separately

> - For vector: Use $\vec{F} = k\frac{q_1 q_2}{r^2}\hat{r}$ with proper signs

> **⚠ Trap #3: Using Wrong Units**
>
> **Common mistakes:**
>
> - Distance in cm instead of m

> - Charge in μC instead of C (1 μC = $10^{-6}$ C)
>
> **Time-Saver:** When charge is in μC and distance in cm:
>
> $$F = 9 \times 10^{-3} \times \frac{q_1(\mu C) \times q_2(\mu C)}{r^2(m^2)} = 90 \times \frac{q_1(\mu C) \times q_2(\mu C)}{r^2(cm^2)}$$

---

## Practice Problems

### Level 1: Foundation (NCERT)

> **↗ Connection · Problem 1.1**
>
> Two point charges $+3$ μC and $+5$ μC are placed 20 cm apart. Find the force between them.
>
> **Solution:**
>
> $$F = k\frac{q_1 q_2}{r^2} = 9 \times 10^9 \times \frac{3 \times 10^{-6} \times 5 \times 10^{-6}}{(0.2)^2}$$

$$F = 9 \times 10^9 \times \frac{15 \times 10^{-12}}{0.04} = 9 \times 10^9 \times 375 \times 10^{-12}$$

$$\boxed{F = 3.375 \text{ N (repulsive)}}$$

> **↗ Connection · Problem 1.2**
>
> How many electrons must be removed from a neutral body to give it a charge of $+1$ μC?
>
> **Solution:**
>
> $$Q = ne$$

$$n = \frac{Q}{e} = \frac{1 \times 10^{-6}}{1.6 \times 10^{-19}}$$

$$\boxed{n = 6.25 \times 10^{12} \text{ electrons}}$$
>
> That’s over 6 trillion electrons! Yet the charge is still tiny.

> **↗ Connection · Problem 1.3**
>
> Two identical charges separated by 1 m repel each other with a force of 1 N. Find the magnitude of each charge.
>
> **Solution:**
>
> $$F = k\frac{q^2}{r^2}$$

$$q^2 = \frac{Fr^2}{k} = \frac{1 \times 1^2}{9 \times 10^9} = \frac{1}{9 \times 10^9}$$

$$q = \frac{1}{3 \times 10^{4.5}} = \frac{1}{3\sqrt{10} \times 10^{4}} \approx 1.05 \times 10^{-5} \text{ C}$$

$$\boxed{q \approx 10.5 \text{ μC}}$$

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> Three charges $q$, $q$, and $-q$ are placed at the vertices of an equilateral triangle of side $a$. Find the net force on the charge $-q$.
>
> **Solution:**
>
> Let’s place $-q$ at the top vertex.
>
> Force due to left $q$:
>
> $$F_1 = k\frac{q \cdot q}{a^2} = \frac{kq^2}{a^2}$$
>
> (attractive, toward left $q$)
>
> Force due to right $q$:
>
> $$F_2 = k\frac{q \cdot q}{a^2} = \frac{kq^2}{a^2}$$
>
> (attractive, toward right $q$)
>
> The two forces are along the two sides meeting at the top vertex, so the angle between them is 60°. Each makes 30° with the vertical (bisector).
>
> **Components:**
>
> - Horizontal components cancel

> - Vertical components add:
>
> $$F_{net} = 2F_1 \cos 30° = 2 \times \frac{kq^2}{a^2} \times \frac{\sqrt{3}}{2}$$

$$\boxed{F_{net} = \frac{\sqrt{3}\,kq^2}{a^2} \text{ (downward, toward the midpoint of the opposite side)}}$$

> **↗ Connection · Problem 2.2**
>
> If the distance between two charges is doubled and one charge is tripled, how does the force change?
>
> **Solution:**
>
> Original: $F = k\frac{q_1 q_2}{r^2}$
>
> New: $F' = k\frac{3q_1 \cdot q_2}{(2r)^2} = k\frac{3q_1 q_2}{4r^2}$
>
> $$\frac{F'}{F} = \frac{3}{4}$$

$$\boxed{F' = 0.75F}$$
>
> Force becomes **three-quarters** of the original.

> **↗ Connection · Problem 2.3**
>
> Two charges $+Q$ and $-3Q$ are placed on a line. Where should a third charge $+q$ be placed so that the net force on it is zero?
>
> **Solution:**
>
> Let the charges be distance $d$ apart.
>
> **Between the charges** both forces on $+q$ point toward $-3Q$ (repulsion from $+Q$, attraction to $-3Q$), so they can never cancel. **Beyond $-3Q$** the larger charge is always closer, so its force always wins. The point must be **outside, on the side of $+Q$**.
>
> Let $+q$ be at distance $x$ from $+Q$, on the far side from $-3Q$, so it is $(d + x)$ from $-3Q$.
>
> For net force to be zero:
>
> $$k\frac{Qq}{x^2} = k\frac{3Qq}{(d+x)^2}$$

$$(d+x)^2 = 3x^2$$

$$d + x = \sqrt{3}x$$

$$x = \frac{d}{\sqrt{3} - 1} = \frac{d(\sqrt{3} + 1)}{2}$$

$$\boxed{x \approx 1.366d \text{ from } +Q \text{ (on the side away from } -3Q)}$$
>
> **Note:** For unlike charges, the null point lies outside the pair, on the side of the smaller magnitude charge!

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> Four charges $+q$, $+q$, $+q$, and $-q$ are placed at the corners of a square of side $a$. Find the force on the charge $-q$.
>
> **Solution:**
>
> Place $-q$ at one corner, say top-right.
>
> **Forces:**
>
> 1. From adjacent $+q$ (left): $F_1 = \frac{kq^2}{a^2}$ (attractive, leftward)

> 2. From adjacent $+q$ (below): $F_2 = \frac{kq^2}{a^2}$ (attractive, downward)

> 3. From diagonal $+q$: $F_3 = \frac{kq^2}{(a\sqrt{2})^2} = \frac{kq^2}{2a^2}$ (attractive, toward bottom-left, at 45°)
>
> **Components:**
>
> - x-direction: $F_x = -F_1 - F_3\cos 45° = -\frac{kq^2}{a^2} - \frac{kq^2}{2a^2} \times \frac{1}{\sqrt{2}}$

> - y-direction: $F_y = -F_2 - F_3\sin 45° = -\frac{kq^2}{a^2} - \frac{kq^2}{2a^2} \times \frac{1}{\sqrt{2}}$
>
> $$F_x = F_y = -\frac{kq^2}{a^2}\left(1 + \frac{1}{2\sqrt{2}}\right)$$

$$F_{net} = \sqrt{F_x^2 + F_y^2} = \sqrt{2} \times \frac{kq^2}{a^2}\left(1 + \frac{1}{2\sqrt{2}}\right)$$

$$\boxed{F_{net} = \frac{kq^2}{a^2}\left(\sqrt{2} + \frac{1}{2}\right) \text{ at 45° toward the diagonal charge}}$$

> **↗ Connection · Problem 3.2**
>
> A charge $Q$ is divided into two parts $q$ and $(Q-q)$. For what value of $q$ will the force between them be maximum when separated by distance $r$?
>
> **Solution:**
>
> $$F = k\frac{q(Q-q)}{r^2}$$
>
> For maximum F, $\frac{dF}{dq} = 0$:
>
> $$\frac{d}{dq}[q(Q-q)] = 0$$

$$Q - 2q = 0$$

$$\boxed{q = \frac{Q}{2}}$$
>
> **Second derivative test:**
>
> $$\frac{d^2F}{dq^2} = -2 < 0$$
>
> (confirms maximum)
>
> **Key Insight:** Force is maximum when charge is divided **equally**!

---

## Quick Revision Box

| Concept | Formula/Key Point |
| --- | --- |
| Conservation | Total charge in isolated system = constant |
| Quantization | $Q = ne$ where $e = 1.6 \times 10^{-19}$ C |
| Coulomb’s Law | $F = k\frac{q_1 q_2}{r^2}$, $k = 9 \times 10^9$ N·m²/C² |
| Superposition | $\vec{F}_{net} = \vec{F}_1 + \vec{F}_2 + ...$ (vector sum) |
| Force direction | Repulsion: like charges, Attraction: unlike charges |
| Charge by friction | Both objects charged (opposite signs) |
| Charge by conduction | Both objects same sign |
| Charge by induction | Objects get opposite signs |

**JEE Weightage:** 1-2 questions in JEE Main (usually numerical), 1 question in JEE Advanced (conceptual/multi-step)

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Charge is conserved and quantized** — it comes in packets of $e = 1.6 \times 10^{-19}$ C

> 2. **Coulomb’s Law is the foundation** — $F = k\frac{q_1 q_2}{r^2}$ describes the force between charges

> 3. **Electric force is a vector** — always use superposition and add vectorially for multiple charges

> 4. **Electric force is incredibly strong** — 10³⁹ times stronger than gravity for elementary particles
>
> **“Master Coulomb’s Law, and you’ve mastered the language of electrostatics. Every other concept builds on this foundation.”**

---

## Related Topics

### Within Electrostatics

- [Electric Field](../electric-field/index.md) — Force per unit charge
- [Electric Dipole](../electric-dipole/index.md) — Two opposite charges close together
- [Gauss’s Law](../gauss-law/index.md) — Alternative method for symmetric charge distributions

### Connected Chapters

- [Current Electricity](../../current-electricity/index.md) — Moving charges
- [Magnetism](../../magnetism/index.md) — Charges in motion create magnetic fields
- [Electromagnetic Induction](../../electromagnetic-induction/index.md) — Changing fields

### Math Connections

- [Vectors](../../../mathematics/vector-algebra/index.md) — Essential for force calculations
- [Trigonometry](../../../mathematics/trigonometry/index.md) — Component resolution
- [Calculus](../../../mathematics/limits-continuity-differentiability/index.md) — For continuous charge distributions

---

From TestGuru · our mock-test platform

## You've read Electric Charges and Coulomb's Law.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=electrostatics&tg_exam=jee-main&tg_page=%2Fphysics%2Felectrostatics%2Felectric-charges%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/electrostatics/electric-charges/",this.page.identifier="/physics/electrostatics/electric-charges/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="formulaCoulomb" id="anim-formulaCoulomb-1795396423389765611"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-formulaCoulomb-1795396423389765611")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/electrostatics/electric-charges/](https://jeenotes.in/physics/electrostatics/electric-charges/) · raw HTML: `offline/physics/electrostatics/electric-charges/index.html`_
