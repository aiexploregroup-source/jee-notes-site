---
title: "Electronic Configuration"
source: "https://jeenotes.in/chemistry/atomic-structure/electronic-configuration/"
description: "Master Aufbau principle, Pauli exclusion, Hund's rule, and exceptional configurations for JEE Chemistry."
updated: "2026-08-01"
reading_time: "5 min read"
breadcrumb: "Chemistry"
position: "/ Topic 8 of 10"
html: "../../../../offline/chemistry/atomic-structure/electronic-configuration/index.html"
extracted: "2026-11-23"
---

> Master Aufbau principle, Pauli exclusion, Hund's rule, and exceptional configurations for JEE Chemistry.

## Introduction

Electronic configuration describes how electrons are distributed among the orbitals of an atom. Three fundamental rules govern this distribution.

---

## The Three Rules

### 1. Aufbau Principle

**“Building up”** - Electrons fill orbitals in order of increasing energy.

$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < 5f < 6d < 7p$$

#### The (n + l) Rule

Orbitals fill in order of increasing (n + l). If (n + l) is same, lower n fills first.

| Orbital | n | l | n + l | Filling order |
| --- | --- | --- | --- | --- |
| 3d | 3 | 2 | 5 | Later |
| 4s | 4 | 0 | 4 | Earlier |
| 4p | 4 | 1 | 5 | After 3d |
| 5s | 5 | 0 | 5 | After 4p |

> **★ Key point · Memory Aid**
>
> Use the diagonal arrow method:

> 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p

---

### 2. Pauli’s Exclusion Principle

**“No two electrons can have identical set of all four quantum numbers.”**

Consequences:

- Maximum 2 electrons per orbital
- Must have opposite spins (↑↓)
- Maximum electrons in:
  - Subshell: 2(2l + 1)
  - Shell: 2n²

| Subshell | Max electrons |
| --- | --- |
| s | 2 |
| p | 6 |
| d | 10 |
| f | 14 |

---

### 3. Hund’s Rule of Maximum Multiplicity

**“Electrons occupy degenerate orbitals singly with parallel spins before pairing.”**

For 3 electrons in p orbitals:

**Correct:** ↑ | ↑ | ↑ (parallel spins)

**Wrong:** ↑↓ | ↑ | (premature pairing)

**Reason**: Parallel spins in different orbitals minimize electron-electron repulsion.

---

## Writing Electronic Configurations

### Standard Notation

Example: Oxygen (Z = 8)

$$1s^2 \, 2s^2 \, 2p^4$$

### Noble Gas Core Notation

Example: Iron (Z = 26)

$$[\text{Ar}] \, 3d^6 \, 4s^2$$

where [Ar] = $1s^2 2s^2 2p^6 3s^2 3p^6$

### Orbital Box Notation

For nitrogen (Z = 7):

| 1s | 2s | 2p |
| --- | --- | --- |
| ↑↓ | ↑↓ | ↑ | ↑ | ↑ |

---

## Electronic Configurations of Elements

### First 30 Elements

| Z | Element | Configuration |
| --- | --- | --- |
| 1 | H | 1s¹ |
| 2 | He | 1s² |
| 3 | Li | [He] 2s¹ |
| 4 | Be | [He] 2s² |
| 5 | B | [He] 2s² 2p¹ |
| 6 | C | [He] 2s² 2p² |
| 7 | N | [He] 2s² 2p³ |
| 8 | O | [He] 2s² 2p⁴ |
| 9 | F | [He] 2s² 2p⁵ |
| 10 | Ne | [He] 2s² 2p⁶ |
| 11 | Na | [Ne] 3s¹ |
| 18 | Ar | [Ne] 3s² 3p⁶ |
| 19 | K | [Ar] 4s¹ |
| 20 | Ca | [Ar] 4s² |
| 21 | Sc | [Ar] 3d¹ 4s² |
| 26 | Fe | [Ar] 3d⁶ 4s² |
| 29 | Cu | [Ar] 3d¹⁰ 4s¹ (Exception!) |
| 30 | Zn | [Ar] 3d¹⁰ 4s² |

---

## Exceptional Configurations

### Why Exceptions Occur

Half-filled and fully-filled subshells have **extra stability** due to:

1. **Exchange energy**: More for parallel electrons
2. **Symmetry**: Even distribution of electrons

### Common Exceptions

> **★ Key point · Must Remember!**
>
> **Chromium (Z = 24)**
>
> - Expected: [Ar] 4s² 3d⁴

> - Actual: [Ar] **4s¹ 3d⁵** (half-filled d)
>
> **Copper (Z = 29)**
>
> - Expected: [Ar] 4s² 3d⁹

> - Actual: [Ar] **4s¹ 3d¹⁰** (fully-filled d)

### Interactive Demo: Visualize Electronic Configuration

See how electrons fill orbitals following the Aufbau principle, Pauli exclusion, and Hund’s rule. Explore exceptional configurations of Cr and Cu.

### Other Exceptions (for reference)

| Element | Z | Expected | Actual | Reason |
| --- | --- | --- | --- | --- |
| Mo | 42 | [Kr] 5s² 4d⁴ | [Kr] 5s¹ 4d⁵ | Half-filled |
| Ag | 47 | [Kr] 5s² 4d⁹ | [Kr] 5s¹ 4d¹⁰ | Fully-filled |
| Au | 79 | [Xe] 6s² 4f¹⁴ 5d⁹ | [Xe] 6s¹ 4f¹⁴ 5d¹⁰ | Fully-filled |

---

## Configurations of Ions

### Cations (Positive ions)

Electrons are **removed from outermost shell first**, not the last-filled orbital.

**Example: Fe²⁺ (Z = 26)**

- Fe: [Ar] 3d⁶ 4s²
- Fe²⁺: [Ar] 3d⁶ (4s electrons removed first!)

**Example: Cu⁺**

- Cu: [Ar] 3d¹⁰ 4s¹
- Cu⁺: [Ar] 3d¹⁰

### Anions (Negative ions)

Electrons are **added to the lowest available orbital**.

**Example: O²⁻**

- O: [He] 2s² 2p⁴
- O²⁻: [He] 2s² 2p⁶ = [Ne]

> **⚠ Trap · Common Mistake**
>
> For transition metal cations, **4s electrons are lost before 3d electrons**, even though 4s fills before 3d!
>
> Why? In ions, 3d has lower energy than 4s due to effective nuclear charge.

---

## Magnetic Properties

### From Electronic Configuration

- **Unpaired electrons** → Paramagnetic (attracted by magnet)
- **All paired** → Diamagnetic (weakly repelled by magnet)

**Number of unpaired electrons:**

| Ion | Configuration | Unpaired e⁻ | Magnetic |
| --- | --- | --- | --- |
| Fe²⁺ | [Ar] 3d⁶ | 4 | Paramagnetic |
| Fe³⁺ | [Ar] 3d⁵ | 5 | Paramagnetic |
| Cu⁺ | [Ar] 3d¹⁰ | 0 | Diamagnetic |
| Zn²⁺ | [Ar] 3d¹⁰ | 0 | Diamagnetic |

---

## Problem Solving

### Example 1: Write Configuration

**Problem:** Write the electronic configuration of V (Z = 23) and V³⁺.

**Solution:**

- V: [Ar] 3d³ 4s²
- V³⁺: [Ar] 3d² (remove 2 from 4s, then 1 from 3d)

### Example 2: Identify Element

**Problem:** An element has configuration [Kr] 4d¹⁰ 5s² 5p⁴. Identify it.

**Solution:**

- Kr has Z = 36
- Add: 10 + 2 + 4 = 16 more electrons
- Total Z = 36 + 16 = 52
- Element: **Tellurium (Te)**

### Example 3: Compare Stability

**Problem:** Which is more stable: [Ar] 3d⁵ 4s¹ or [Ar] 3d⁴ 4s²?

**Solution:**
[Ar] 3d⁵ 4s¹ is more stable because:

- d⁵ is half-filled (extra stability)
- This is why Cr has this configuration

---

## Quick Reference

### Maximum Electrons

| Subshell | Formula | Max |
| --- | --- | --- |
| s | 2(0)+1 = 1 orbital | 2 |
| p | 2(1)+1 = 3 orbitals | 6 |
| d | 2(2)+1 = 5 orbitals | 10 |
| f | 2(3)+1 = 7 orbitals | 14 |

### Stable Configurations

- Fully filled: s², p⁶, d¹⁰, f¹⁴
- Half filled: p³, d⁵, f⁷
- Noble gas: Very stable

---

## Practice Problems

1. Write the electronic configuration of Mn²⁺ and calculate unpaired electrons.
2. Element X has configuration [Ar] 3d⁵. What is its atomic number and is it a ground state configuration?
3. Which has more unpaired electrons: Fe²⁺ or Fe³⁺?
4. Why is Cu⁺ colorless while Cu²⁺ is blue?

> **↗ Connection · Quick Check**
>
> Write the configuration of Cr³⁺. How many unpaired electrons does it have?

---

## What’s Next?

You’ve completed the Atomic Structure chapter! Key connections:

- [Chemical Bonding](../../chemical-bonding/index.md) - How atoms share/transfer electrons
- [Periodic Properties](../../periodic-classification/index.md) - How configuration affects properties

---

---

## Related Topics

### Within Atomic Structure

- [Quantum Numbers](../quantum-model/index.md) — The foundation for understanding orbitals
- [Orbital Shapes](../orbital-shapes/index.md) — Visualizing where electrons are

### Chemistry Connections

- [Chemical Bonding](../../chemical-bonding/index.md) — How configurations determine bonding
- [Periodic Properties](../../periodic-classification/index.md) — Configuration explains trends
- [d-Block Elements](../../d-f-block-elements/index.md) — Transition metal configurations
- [Coordination Compounds](../../coordination-compounds/index.md) — d-orbital involvement

### Physics Connections

- [Magnetism](../../../physics/magnetism/index.md) — Unpaired electrons cause paramagnetism
- [Bohr Model](../bohr-model/index.md) — Historical context for energy levels

---

**[← Shapes of Orbitals](../orbital-shapes/index.md) | [Back to Chapter Overview](../../index.md)**

From TestGuru · our mock-test platform

## You've read Electronic Configuration.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=atomic-structure&tg_exam=jee-main&tg_page=%2Fchemistry%2Fatomic-structure%2Felectronic-configuration%2F&tg_subject=chemistry&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/chemistry/atomic-structure/electronic-configuration/",this.page.identifier="/chemistry/atomic-structure/electronic-configuration/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="bohrModel" id="anim-bohrModel-1795396418792329316"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-bohrModel-1795396418792329316")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/chemistry/atomic-structure/electronic-configuration/](https://jeenotes.in/chemistry/atomic-structure/electronic-configuration/) · raw HTML: `offline/chemistry/atomic-structure/electronic-configuration/index.html`_
