---
title: "Thin Lens Formula - Lens Power, Magnification & Combinations"
source: "https://jeenotes.in/physics/optics/thin-lens/"
description: "Master lens formula, lens maker's equation, magnification, and power for JEE Main and Advanced"
updated: "2026-10-18"
reading_time: "12 min read"
breadcrumb: "Physics"
position: "/ Topic 10 of 13"
html: "../../../../offline/physics/optics/thin-lens/index.html"
extracted: "2026-11-23"
---

> Master lens formula, lens maker's equation, magnification, and power for JEE Main and Advanced

# Thin Lens Formula - The Heart of Optics

## The Movie Hook 🎬

Ever wonder how the camera lens in *Interstellar* captured those stunning black hole images? Or how Spider-Man’s camera autofocuses? Or why Superman’s glasses disguise his identity (spoiler: they don’t make sense!)? All camera lenses, eyeglasses, and telescopes use the **lens formula** we’re about to master!

---

## The Big Picture

**Lenses** are transparent materials with curved surfaces that refract light to form images. Understanding lenses is crucial for:

- **Cameras & Photography** (focal length, aperture)
- **Human eye** (how we see!)
- **Microscopes & Telescopes** (magnification)
- **Eyeglasses** (correcting vision)

**Connection Alert:** Builds on [Refraction](../refraction/index.md), connects to [Optical Instruments](../optical-instruments/index.md).

---

## Core Concepts

### 1. Types of Lenses

#### Convex Lens (Converging)

- Thicker at center, thinner at edges
- **Converges** parallel rays to a focal point
- **Positive** focal length
- Can form **real or virtual** images

#### Concave Lens (Diverging)

- Thinner at center, thicker at edges
- **Diverges** parallel rays
- **Negative** focal length
- Always forms **virtual, erect, diminished** images

**Memory Trick:** “**C**onvex **C**onverges, **C**oncave **C**annot” (concave cannot converge)

---

### 2. Sign Convention (NEW CARTESIAN)

> **⚠ Trap**
>
> **CRITICAL:** All JEE problems use this convention!
>
> **Reference:** Optical center of lens
>
> - **Left side (object side):** Negative

> - **Right side (image side):** Positive

> - **Above axis:** Positive height

> - **Below axis:** Negative height
>
> **Standard setup:**
>
> - Object on **left** → u is **negative**

> - Light travels **left to right**

---

### 3. The Lens Formula

$$\boxed{\frac{1}{v} - \frac{1}{u} = \frac{1}{f}}$$

Where:

- **v** = image distance from lens
- **u** = object distance from lens (negative for real objects)
- **f** = focal length
  - **Convex:** f > 0 (positive)
  - **Concave:** f < 0 (negative)

**Key Difference from Mirror Formula:**

- Mirror:
  $$\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$$(plus sign)
- Lens:
  $$\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$$(minus sign)

**Memory Trick:** “**L**ens uses **M**inus” (LM), “**M**irror uses **P**lus” (MP backward!)

---

### 4. Lens Maker’s Equation

$$\boxed{\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)}$$

Where:

- **n** = refractive index of lens material (w.r.t. surrounding medium)
- **R₁** = radius of curvature of first surface
- **R₂** = radius of curvature of second surface

**Sign Convention for R:**

- Center of curvature on **right** of surface → R positive
- Center of curvature on **left** of surface → R negative

**For symmetric lens:** R₁ = +R, R₂ = -R

$$\frac{1}{f} = (n-1)\frac{2}{R}$$

---

### 5. Power of Lens

$$\boxed{P = \frac{1}{f}}$$

Where:

- **P** = power in **diopters** (D)
- **f** = focal length in **meters**

**Properties:**

- Convex lens: P > 0 (positive power)
- Concave lens: P < 0 (negative power)
- **For combination:**
  $$P_{total} = P_1 + P_2 + P_3 + ...$$

**Memory Trick:** “**P**ower = **1** over **F**”

**Example:** f = 25 cm = 0.25 m → P = 1/0.25 = 4 D

---

### 6. Magnification

**Linear Magnification:**

$$\boxed{m = \frac{v}{u} = \frac{h_i}{h_o}}$$

**Note:** Different from mirrors! (No negative sign for lenses)

**Interpretation:**

- **m > 0:** Erect image (virtual or on same side)
- **m < 0:** Inverted image (real)
- **|m| > 1:** Magnified
- **|m| < 1:** Diminished
- **|m| = 1:** Same size

---

### 7. Ray Diagram Rules

**For Convex Lens:**

1. Ray parallel to axis → passes through F on other side
2. Ray through optical center → goes straight (undeviated)
3. Ray through F on object side → emerges parallel to axis

**For Concave Lens:**

1. Ray parallel to axis → appears to come from F on same side
2. Ray through optical center → goes straight
3. Ray towards F on far side → emerges parallel to axis

---

### 8. Image Formation - Convex Lens

| Object Position | Image Position | Nature | Size | Magnification |
| --- | --- | --- | --- | --- |
| At infinity | At F | Real, inverted | Point | m ≈ 0 |
| Beyond 2F | Between F and 2F | Real, inverted | Diminished | 0 < |
| At 2F | At 2F | Real, inverted | Same size |  |
| Between F and 2F | Beyond 2F | Real, inverted | Magnified |  |
| At F | At infinity | Real, inverted | Highly magnified | m → ∞ |
| Between F and O | Same side as object | Virtual, erect | Magnified | m > 1 |

**Memory Trick:** “**I**nfinity **B**rings **F**ocus, **F** **B**rings **I**nfinity” (IBF, FBI)

---

### 9. Image Formation - Concave Lens

**Always:**

- Virtual image
- Erect
- Diminished (m < 1)
- On same side as object

$$\boxed{v = \frac{fu}{u-f}}$$

Since both f and u are negative, v is always negative (same side).

---

## The Formula Cheat Sheet

```plaintext
LENS ESSENTIALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Lens formula:        1/v - 1/u = 1/f
2. Lens maker:          1/f = (n-1)(1/R₁ - 1/R₂)
3. Magnification:       m = v/u = h_i/h_o
4. Power:               P = 1/f (in meters)
5. Power combination:   P = P₁ + P₂ + P₃...
6. In medium:           1/f_med = (n_L/n_M - 1)(1/R₁ - 1/R₂)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Advanced Formulas

### 1. Lens in Different Medium

$$\boxed{\frac{1}{f_{medium}} = \left(\frac{n_{lens}}{n_{medium}} - 1\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)}$$

**Special Case:** If lens is in water:

$$\frac{f_{water}}{f_{air}} = \frac{n_{water}(n_{lens} - 1)}{n_{lens} - n_{water}}$$

### 2. Combination of Thin Lenses in Contact

$$\boxed{\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2}}$$

Or:

$$\boxed{P = P_1 + P_2}$$

**Net magnification:**

$$m = m_1 \times m_2$$

### 3. Two Lenses Separated by Distance d

$$\boxed{\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}}$$

**When d = 0:** Reduces to contact formula

### 4. Newton’s Formula (Alternative)

$$\boxed{xy = f^2}$$

Where:

- x = distance of object from first focal point
- y = distance of image from second focal point

Useful when positions are given w.r.t. focal points instead of lens.

---

## Common Traps & Mistakes

### Trap #1: Sign Convention Confusion

❌ **Wrong:** Using mirror formula for lens (1/v + 1/u = 1/f)
✅ **Right:** Lens formula has MINUS: 1/v - 1/u = 1/f

### Trap #2: Magnification Sign

❌ **Wrong:** Using m = -v/u (mirror formula)
✅ **Right:** For lens: m = +v/u (no negative sign!)

### Trap #3: Power Units

❌ **Wrong:** Using focal length in cm directly in P = 1/f
✅ **Right:** Convert f to meters first!

### Trap #4: Lens Maker’s Equation Signs

❌ **Wrong:** Ignoring sign convention for R₁ and R₂
✅ **Right:** Carefully apply signs based on center of curvature position

### Trap #5: Combination Formulas

❌ **Wrong:** Using P = P₁ + P₂ for separated lenses
✅ **Right:** Use full formula with separation distance d

---

## Practice Problems

### Level 1: JEE Main Warmup

**Problem 1.1:** A convex lens has focal length 20 cm. An object is placed 30 cm from the lens. Find image position and magnification.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: f = +20 cm (convex), u = -30 cm</p><p>Using lens formula:</p>$$\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$$<p></p>$$\frac{1}{v} = \frac{1}{f} + \frac{1}{u} = \frac{1}{20} + \frac{1}{-30}$$<p></p>$$\frac{1}{v} = \frac{1}{20} - \frac{1}{30} = \frac{3-2}{60} = \frac{1}{60}$$<p></p>$$v = 60 \text{ cm}$$<p>Magnification:</p>$$m = \frac{v}{u} = \frac{60}{-30} = -2$$<p><strong>Answers:</strong></p><ul><li>Image at 60 cm on other side (real)</li><li>Magnification = -2 (inverted, twice the size)</li></ul></div></details>

---

**Problem 1.2:** A concave lens has focal length 15 cm. Find its power.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>f = -15 cm = -0.15 m (negative for concave)</p>$$P = \frac{1}{f} = \frac{1}{-0.15} = -6.67 \text{ D}$$<p><strong>Answer:</strong> Power = -6.67 D (negative as expected for concave lens)</p></div></details>

---

**Problem 1.3:** Two thin lenses of power +3 D and -2 D are placed in contact. Find the focal length of the combination.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content">$$P_{total} = P_1 + P_2 = 3 + (-2) = 1 \text{ D}$$

$$f = \frac{1}{P} = \frac{1}{1} = 1 \text{ m} = 100 \text{ cm}$$<p><strong>Answer:</strong> Focal length = 100 cm (convex combination)</p></div></details>

---

### Level 2: JEE Main/Advanced

**Problem 2.1:** A symmetric convex lens (n=1.5) has radii of curvature 20 cm. Find its focal length in air and power.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Symmetric lens: R₁ = +20 cm, R₂ = -20 cm (by sign convention)</p><p>Using lens maker’s equation:</p>$$\frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$<p></p>$$\frac{1}{f} = (1.5-1)\left(\frac{1}{20} - \frac{1}{-20}\right)$$<p></p>$$\frac{1}{f} = 0.5 \times \left(\frac{1}{20} + \frac{1}{20}\right) = 0.5 \times \frac{2}{20} = \frac{1}{20}$$<p></p>$$f = 20 \text{ cm} = 0.2 \text{ m}$$<p>Power:</p>$$P = \frac{1}{0.2} = 5 \text{ D}$$<p><strong>Answers:</strong> f = 20 cm, P = 5 D</p></div></details>

---

**Problem 2.2:** A convex lens forms a real image 4 times the size of the object. If the distance between object and image is 75 cm, find focal length.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: m = -4 (real image, so negative), distance between object and image = 75 cm</p><p>From magnification:</p>$$m = \frac{v}{u} = -4$$<p>So:</p>$$v = -4u$$<p>Since image is real and on opposite side: v is positive, u is negative.
Actually:</p>$$v = -4u$$<p>means if u = -x, then v = 4x</p><p>Distance:</p>$$v - u = 75$$<p></p>$$4x - (-x) = 75$$<p></p>$$5x = 75$$<p></p>$$x = 15$$<p>So: u = -15 cm, v = 60 cm</p><p>Using lens formula:</p>$$\frac{1}{f} = \frac{1}{v} - \frac{1}{u} = \frac{1}{60} - \frac{1}{-15} = \frac{1}{60} + \frac{1}{15}$$<p></p>$$\frac{1}{f} = \frac{1 + 4}{60} = \frac{5}{60} = \frac{1}{12}$$<p></p>$$f = 12 \text{ cm}$$<p><strong>Answer:</strong> f = 12 cm</p></div></details>

---

**Problem 2.3:** A glass lens (n=1.5) has focal length 20 cm in air. What will be its focal length when immersed in water (n=1.33)?

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Using the medium formula:</p>$$\frac{f_{water}}{f_{air}} = \frac{n_{water}(n_{lens} - 1)}{n_{lens} - n_{water}}$$

$$\frac{f_{water}}{20} = \frac{1.33(1.5 - 1)}{1.5 - 1.33} = \frac{1.33 \times 0.5}{0.17} = \frac{0.665}{0.17} = 3.91$$

$$f_{water} = 20 \times 3.91 = 78.2 \text{ cm}$$<p><strong>Answer:</strong> 78.2 cm (focal length increases in denser medium!)</p><p><strong>Insight:</strong> Lens becomes weaker in water because relative refractive index decreases.</p></div></details>

---

### Level 3: JEE Advanced

**Problem 3.1:** Two thin lenses of focal lengths f₁ = 10 cm and f₂ = 20 cm are separated by 5 cm. Find the focal length and power of the combination.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>Given: f₁ = 10 cm, f₂ = 20 cm, d = 5 cm</p><p>For separated lenses:</p>$$\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}$$

$$\frac{1}{F} = \frac{1}{10} + \frac{1}{20} - \frac{5}{10 \times 20}$$

$$\frac{1}{F} = \frac{2 + 1}{20} - \frac{5}{200} = \frac{3}{20} - \frac{1}{40} = \frac{6 - 1}{40} = \frac{5}{40} = \frac{1}{8}$$

$$F = 8 \text{ cm} = 0.08 \text{ m}$$<p>Power:</p>$$P = \frac{1}{0.08} = 12.5 \text{ D}$$<p><strong>Answers:</strong> F = 8 cm, P = 12.5 D</p><p><strong>Note:</strong> Compare with contact (d=0):</p>$$\frac{1}{F} = \frac{1}{10} + \frac{1}{20} = \frac{3}{20}$$<p>→ F = 6.67 cm
Separation increases focal length!</p></div></details>

---

**Problem 3.2:** A point object is placed at distance u from a convex lens of focal length f. The lens is cut into two halves along the optical axis and the two halves are separated by distance d. Find the distance between the two images formed.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>When lens is cut along optical axis, each half still has focal length f (not f/2!).</p><p>Each half acts as a separate lens with same f.</p><p>For upper half (shifted up by d/2):</p><ul><li>Object distance: u (same)</li><li>Image distance: v (from lens formula, same)</li><li>But lens is shifted vertically by d/2</li></ul><p>For lower half (shifted down by d/2):</p><ul><li>Same image distance v</li><li>But lens is shifted vertically by -d/2</li></ul><p>Both form images at same distance v from their respective centers.</p><p><strong>Vertical separation of images:</strong></p><p>For an object at distance u from lens, magnification m = v/u</p><p>The object has effectively height h = 0 (point object at axis), but the shift matters.</p><p>Because the two halves are displaced vertically, their images are displaced too:
Each half’s image lies on the line joining the object to that half’s optical centre. For the half centred at $+d/2$: $y_{img} = \frac{d}{2}(1 - m)$ with $m = \frac{v}{u}$ (negative for a real image).</p><p>Separation $= d(1 - m) = d\left(1 + \frac{v}{|u|}\right)$, and with $v = \frac{f|u|}{|u| - f}$:</p><p><strong>Answer:</strong></p>$$\Delta y = \frac{d\,|u|}{|u| - f} = \frac{d(u+v)}{u} \text{ (magnitudes)}$$<p><strong>Alternative interpretation:</strong> If cut perpendicular to axis, each half has f’ = 2f. Then two images at different distances along axis.</p></div></details>

---

**Problem 3.3:** A thin convex lens of focal length f is placed on a plane mirror. An object is placed at distance d above the lens. Find the position where image coincides with object.

<details class="collapse"><summary class="collapse-title"><span>Solution</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><p>For image to coincide with object, light must retrace its path.</p><p>This happens when object is at <strong>center of curvature</strong> of the lens-mirror system.</p><p><strong>Step 1:</strong> Light from object passes through lens</p><p>Image formed by lens alone at distance v₁:</p>$$\frac{1}{v_1} - \frac{1}{-d} = \frac{1}{f}$$<p></p>$$\frac{1}{v_1} = \frac{1}{f} - \frac{1}{d}$$<p><strong>Step 2:</strong> This image acts as object for mirror (plane mirror)</p><p>Mirror forms image at equal distance behind it.</p><p><strong>Step 3:</strong> This image acts as object for lens (going back)</p><p>For image to coincide with original object, the rays must be perpendicular to lens (parallel to axis after lens).</p><p>This happens when object is at focal point.</p><p><strong>Condition:</strong> d = f</p><p>Or more precisely, when rays converge at infinity after first pass through lens, they come back parallel and converge at f after reflection.</p><p><strong>Answer:</strong> Object should be placed at distance <strong>f</strong> (one focal length) above the lens.</p><p><strong>Better approach:</strong> For exact coincidence:
The image formed by lens should be at mirror surface, so v₁ = 0 (at mirror).</p>$$\frac{1}{0} - \frac{1}{-d} = \frac{1}{f}$$<p>This gives ∞, so not correct.</p><p><strong>Correct condition:</strong> Light should fall perpendicular to mirror, which means after lens, light should be parallel to axis.</p><p>This happens when object is at focal plane: <strong>d = f</strong></p><p><strong>Final Answer:</strong> d = f</p></div></details>

---

## Quick Revision Cards

```plaintext
╔══════════════════════════════════════╗
║  LENS QUICK FACTS                   ║
╚══════════════════════════════════════╝

🎯 Lens formula: 1/v - 1/u = 1/f
🎯 Convex: f > 0, Concave: f < 0
🎯 m = v/u (NO negative sign!)
🎯 P = 1/f (in meters) in Diopters
🎯 Combination: P = P₁ + P₂
🎯 Lens maker: 1/f = (n-1)(1/R₁-1/R₂)
🎯 In medium: n_rel = n_L/n_M
```

---

## Real-World Applications

### 1. Camera Lens

- Multiple lenses for aberration correction
- f-number = focal length / aperture diameter
- Smaller f-number → more light → shallow depth of field

### 2. Eyeglasses

- **Myopia (nearsighted):** Concave lens (negative power)
- **Hypermetropia (farsighted):** Convex lens (positive power)
- **Presbyopia:** Bifocal (two different powers)

### 3. Magnifying Glass

- Object placed between F and lens
- Creates virtual, erect, magnified image
- Angular magnification = 25/f (f in cm)

---

## Cross-Topic Connections

- **[Refraction](../refraction/index.md)**: Lenses use double refraction
- **[Optical Instruments](../optical-instruments/index.md)**: Microscope, telescope use lenses
- **[Reflection](../reflection/index.md)**: Lens-mirror combinations
- **[Prism](../prism/index.md)**: Dispersion limits lens quality (chromatic aberration)
- **[Wave Optics](../wave-optics/index.md)**: Diffraction limits resolution

---

## Exam Strategy

**Time Allocation:**

- Simple lens formula: 2 min
- Lens maker’s equation: 3 min
- Combination problems: 4 min
- Advanced combinations: 5-6 min

**Common JEE Patterns:**

1. **Lens in different media**
2. **Multiple lens combinations**
3. **Lens + mirror systems**
4. **Displacement method** (Bessel’s method)
5. **Moving object/lens problems** (differentiation)

**Quick Check:**

- Convex lens with close object → virtual image (erect, magnified)
- Convex lens with far object → real image (inverted)
- Concave lens → always virtual, erect, diminished

---

## Final Tips

1. **ALWAYS write sign convention** at the start
2. **Remember:** Lens formula has MINUS (1/v - 1/u = 1/f)
3. **Power problems:** Convert to meters first!
4. **Draw ray diagrams** for verification
5. **Combination:** P = P₁ + P₂ only for contact lenses

**Pro Tip:** If problem says “lens in contact with mirror,” it’s likely testing the equivalent focal length: 1/f_eq = 2/f_lens + 1/f_mirror

---

*Next up: [Prism Optics](../prism/index.md) - dispersion and deviation!*

From TestGuru · our mock-test platform

## You've read Thin Lens Formula - Lens Power, Magnification & Combinations.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=optics&tg_exam=jee-main&tg_page=%2Fphysics%2Foptics%2Fthin-lens%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/optics/thin-lens/",this.page.identifier="/physics/optics/thin-lens/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="lensRayDiagram" id="anim-lensRayDiagram-1795396424023701455"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-lensRayDiagram-1795396424023701455")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


### interactive-widget-2

```html
<div class="animation-wrapper" data-animation="convexLensRays" id="anim-convexLensRays-1795396424023924233"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-convexLensRays-1795396424023924233")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/optics/thin-lens/](https://jeenotes.in/physics/optics/thin-lens/) · raw HTML: `offline/physics/optics/thin-lens/index.html`_
