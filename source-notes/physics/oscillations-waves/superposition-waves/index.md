---
title: "Superposition of Waves"
source: "https://jeenotes.in/physics/oscillations-waves/superposition-waves/"
description: "Master wave interference, standing waves, and beats for JEE Physics"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Physics"
position: "/ Topic 4 of 7"
html: "../../../../offline/physics/oscillations-waves/superposition-waves/index.html"
extracted: "2026-11-23"
---

> Master wave interference, standing waves, and beats for JEE Physics

## Prerequisites

Before studying this topic, make sure you understand:

- [Wave Motion](../wave-motion/index.md) - Wave equations and parameters
- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) - For understanding wave composition
- [Trigonometric Identities](../../../mathematics/trigonometry/index.md) - For mathematical derivations

## The Hook: When Waves Collide

> **★ Key point · Connect: Guitar Strings and Noise-Canceling Headphones**
>
> Ever wondered how noise-canceling headphones work? They create a wave that’s exactly opposite to the noise, and when the two waves meet — silence! That’s wave interference in action.
>
> **Musical Connection:** When you press a guitar string at different frets, you create standing waves of different wavelengths. The string vibrates, but certain points (nodes) never move at all!
>
> **The Marvel of Superposition:** In *Doctor Strange*, when multiple portals open simultaneously, energy patterns overlap and combine. Similarly, when multiple waves meet, they don’t destroy each other — they simply add up, creating beautiful interference patterns.
>
> **The Question:** What happens when two identical waves traveling in opposite directions meet? The answer leads to standing waves — one of the most important phenomena in physics!

---

## Principle of Superposition

When two or more waves meet at a point, the resultant displacement is the **algebraic sum** of individual displacements.

> **◐ In simple terms · The Core Principle**
>
> **In simple terms:** Waves pass through each other without permanent disturbance. When they overlap, their effects simply add up (algebraically). After passing, each wave continues as if nothing happened.
>
> **Mathematical Statement:**

> If $y_1$, $y_2$, $y_3$, &mldr; are displacements due to individual waves, then:
>
> $$\boxed{y_{resultant} = y_1 + y_2 + y_3 + ...}$$
>
> This is called the **Principle of Superposition**.

**Key Properties:**

1. Waves maintain their identity
2. No permanent change after superposition
3. Valid only for small amplitudes (linear systems)
4. Basis for interference, beats, and standing waves

## Interactive Demo

Watch how waves superpose to create interference patterns:

---

## Interference of Waves

When two waves of **same frequency** superpose, we get **interference**.

### Constructive Interference

Waves add up to give **maximum amplitude**.

**Condition:** Waves are **in phase** (phase difference = $0, 2\pi, 4\pi, ...$)

Path difference: $\Delta x = 0, \lambda, 2\lambda, 3\lambda, ...$ (integer multiples of $\lambda$)

$$\boxed{\Delta x = n\lambda, \quad n = 0, 1, 2, 3, ...}$$

**Resultant amplitude:** $A_{max} = A_1 + A_2$

If $A_1 = A_2 = A$: $A_{max} = 2A$

### Destructive Interference

Waves cancel out to give **minimum amplitude**.

**Condition:** Waves are **out of phase** (phase difference = $\pi, 3\pi, 5\pi, ...$)

Path difference: $\Delta x = \frac{\lambda}{2}, \frac{3\lambda}{2}, \frac{5\lambda}{2}, ...$ (odd multiples of $\frac{\lambda}{2}$)

$$\boxed{\Delta x = (2n + 1)\frac{\lambda}{2}, \quad n = 0, 1, 2, 3, ...}$$

**Resultant amplitude:** $A_{min} = |A_1 - A_2|$

If $A_1 = A_2 = A$: $A_{min} = 0$ (complete cancellation!)

> **★ Key point · Noise-Canceling Magic**
>
> Noise-canceling headphones detect ambient sound (wave 1), then produce an identical wave with opposite phase (wave 2). When they superpose:
>
> $y = y_1 + y_2 = A\sin(\omega t) + A\sin(\omega t + \pi) = A\sin(\omega t) - A\sin(\omega t) = 0$
>
> Silence! That’s destructive interference.

### General Case: Two Waves with Phase Difference

Two waves:

$$y_1 = A_1\sin(\omega t)$$

$$y_2 = A_2\sin(\omega t + \phi)$$

**Resultant:**

$$y = A\sin(\omega t + \alpha)$$

**Resultant amplitude:**

$$\boxed{A = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2\cos\phi}}$$

**Phase of resultant:**

$$\tan\alpha = \frac{A_2\sin\phi}{A_1 + A_2\cos\phi}$$

**Special Cases:**

| Phase Difference $\phi$ | Resultant Amplitude $A$ | Type |
| --- | --- | --- |
| $0$ (in phase) | $A_1 + A_2$ | Constructive |
| $\pi$ (out of phase) | $ | A_1 - A_2 |
| $\frac{\pi}{2}$ | $\sqrt{A_1^2 + A_2^2}$ | Intermediate |

If $A_1 = A_2 = A_0$:

| $\phi$ | $A$ |
| --- | --- |
| $0$ | $2A_0$ |
| $\frac{\pi}{2}$ | $A_0\sqrt{2}$ |
| $\pi$ | $0$ |

---

## Standing Waves (Stationary Waves)

When two identical waves travel in **opposite directions**, they create a **standing wave**.

### Formation

Two waves:

$$y_1 = A\sin(kx - \omega t)$$

(traveling right)

$$y_2 = A\sin(kx + \omega t)$$

(traveling left)

**Resultant (using superposition):**

$$y = y_1 + y_2 = A[\sin(kx - \omega t) + \sin(kx + \omega t)]$$

Using $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$:

$$\boxed{y = 2A\sin(kx)\cos(\omega t)}$$

This is the **equation of a standing wave**.

### Characteristics

**Equation:** $y = 2A\sin(kx)\cos(\omega t)$

Can be written as: $y = [2A\sin(kx)]\cos(\omega t)$

1. **Amplitude varies with position:** $A(x) = 2A\sin(kx)$ (not constant!)
2. **All particles oscillate in phase** (or opposite phase)
3. **No net energy transfer** (energy sloshes back and forth)
4. **Wave doesn’t propagate** — it stands still!

> **◐ In simple terms · Standing vs Traveling Waves**
>
> **Traveling wave:** $y = A\sin(kx - \omega t)$
>
> - Wave pattern moves

> - All particles have same amplitude

> - Energy propagates
>
> **Standing wave:** $y = 2A\sin(kx)\cos(\omega t)$
>
> - Wave pattern is stationary

> - Amplitude varies with position

> - No net energy transfer

### Nodes and Antinodes

**Nodes:** Points of **zero amplitude** (no motion)

Condition: $\sin(kx) = 0$

$$kx = 0, \pi, 2\pi, 3\pi, ...$$

$$x = 0, \frac{\lambda}{2}, \lambda, \frac{3\lambda}{2}, ...$$

$$\boxed{x_n = n\frac{\lambda}{2}, \quad n = 0, 1, 2, 3, ...}$$

**Distance between consecutive nodes:** $\frac{\lambda}{2}$

**Antinodes:** Points of **maximum amplitude** (maximum motion)

Condition: $\sin(kx) = \pm 1$

$$kx = \frac{\pi}{2}, \frac{3\pi}{2}, \frac{5\pi}{2}, ...$$

$$x = \frac{\lambda}{4}, \frac{3\lambda}{4}, \frac{5\lambda}{4}, ...$$

$$\boxed{x_a = (2n + 1)\frac{\lambda}{4}, \quad n = 0, 1, 2, 3, ...}$$

**Distance between consecutive antinodes:** $\frac{\lambda}{2}$

**Distance between node and nearest antinode:** $\frac{\lambda}{4}$

> **★ Key point · Memory Trick: Half Lambda**
>
> **N**ode to **N**ode = $\frac{\lambda}{2}$
>
> **A**ntinode to **A**ntinode = $\frac{\lambda}{2}$
>
> **N**ode to **A**ntinode = $\frac{\lambda}{4}$
>
> Everything is either $\frac{\lambda}{2}$ or $\frac{\lambda}{4}$!

### Energy in Standing Waves

- **No energy transfer** along the wave
- Energy oscillates between kinetic and potential
- At nodes: always zero displacement and velocity
- At antinodes: maximum displacement and velocity

---

## Standing Waves on Strings

### String Fixed at Both Ends

**Boundary conditions:** Nodes at both ends ($x = 0$ and $x = L$)

Allowed wavelengths:

$$L = n\frac{\lambda}{2}, \quad n = 1, 2, 3, ...$$

$$\boxed{\lambda_n = \frac{2L}{n}}$$

**Allowed frequencies (normal modes):**

$$\boxed{f_n = \frac{nv}{2L} = n\frac{v}{2L}, \quad n = 1, 2, 3, ...}$$

Where $v = \sqrt{\frac{T}{\mu}}$ is the wave speed on the string.

**Fundamental frequency (first harmonic, $n = 1$):**

$$\boxed{f_1 = \frac{v}{2L}}$$

**Overtones:**

- Second harmonic: $f_2 = 2f_1$
- Third harmonic: $f_3 = 3f_1$
- $n$-th harmonic: $f_n = nf_1$

All harmonics are **integer multiples** of the fundamental.

> **★ Key point · Guitar String Harmonics**
>
> When you pluck a guitar string:
>
> - **Fundamental** ($n=1$): Lowest note, string vibrates as one segment

> - **Second harmonic** ($n=2$): Octave higher, string vibrates in two segments

> - **Third harmonic** ($n=3$): Even higher, three segments
>
> The rich sound comes from superposition of all these harmonics!

### String Fixed at One End (Open at Other)

**Boundary conditions:** Node at fixed end, antinode at free end

Allowed wavelengths:

$$L = (2n - 1)\frac{\lambda}{4}, \quad n = 1, 2, 3, ...$$

$$\boxed{\lambda_n = \frac{4L}{2n - 1}}$$

**Allowed frequencies:**

$$\boxed{f_n = (2n - 1)\frac{v}{4L}, \quad n = 1, 2, 3, ...}$$

**Fundamental:** $f_1 = \frac{v}{4L}$

**Overtones:** Only **odd harmonics** are present!

- $f_1, f_3, f_5, ...$ (fundamental, 3rd, 5th, &mldr;)
- $f_3 = 3f_1$, $f_5 = 5f_1$

---

## Standing Waves in Air Columns (Organ Pipes)

### Closed Organ Pipe (Closed at One End)

**Boundary conditions:**

- Closed end: **Node** (no displacement)
- Open end: **Antinode** (maximum displacement)

Same as string fixed at one end!

$$\boxed{f_n = (2n - 1)\frac{v}{4L}, \quad n = 1, 2, 3, ...}$$

Where $v$ is the speed of sound in air.

**Only odd harmonics:** $f_1, 3f_1, 5f_1, 7f_1, ...$

### Open Organ Pipe (Open at Both Ends)

**Boundary conditions:** Antinodes at both ends

Same as string fixed at both ends!

$$\boxed{f_n = n\frac{v}{2L}, \quad n = 1, 2, 3, ...}$$

**All harmonics present:** $f_1, 2f_1, 3f_1, 4f_1, ...$

**Comparison:**

| Pipe Type | Boundary Conditions | Harmonics | Fundamental |
| --- | --- | --- | --- |
| Closed (one end) | Node-Antinode | Odd only | $\frac{v}{4L}$ |
| Open (both ends) | Antinode-Antinode | All | $\frac{v}{2L}$ |

> **◐ In simple terms · Why Organ Pipes Sound Different**
>
> **Closed pipe:** Only odd harmonics → unique timbre (flute-like)
>
> **Open pipe:** All harmonics → richer sound (clarinet-like)
>
> This is why different musical instruments have distinct sounds even when playing the same note!

---

## Beats

When two waves of **slightly different frequencies** $f_1$ and $f_2$ superpose, we hear periodic variations in loudness called **beats**.

### Formation

Two waves:

$$y_1 = A\sin(2\pi f_1 t)$$

$$y_2 = A\sin(2\pi f_2 t)$$

**Resultant:**

$$y = y_1 + y_2 = A[\sin(2\pi f_1 t) + \sin(2\pi f_2 t)]$$

Using $\sin C + \sin D = 2\sin\frac{C+D}{2}\cos\frac{C-D}{2}$:

$$y = 2A\cos\left[2\pi\frac{f_1 - f_2}{2}t\right]\sin\left[2\pi\frac{f_1 + f_2}{2}t\right]$$

$$\boxed{y = [2A\cos(2\pi f_{beat} t)]\sin(2\pi f_{avg} t)}$$

Where:

- $f_{avg} = \frac{f_1 + f_2}{2}$ (average frequency)
- $f_{beat} = \frac{|f_1 - f_2|}{2}$ (beat modulation frequency)

**Beat frequency** (rate of loudness variation):

$$\boxed{f_{beats} = |f_1 - f_2|}$$

Since intensity $\propto$ amplitude$^2$, and amplitude oscillates at frequency $f_{beat}$, the intensity (loudness) oscillates at **twice that frequency**, giving beat frequency $= |f_1 - f_2|$.

### Characteristics

1. **Beat frequency:** $f_{beats} = |f_1 - f_2|$
2. **Loudness maxima** occur $|f_1 - f_2|$ times per second
3. **Useful for tuning instruments:** Adjust until beats disappear ($f_1 = f_2$)

> **★ Key point · Tuning a Guitar**
>
> When tuning a guitar, you play a reference note and the string you’re tuning. If you hear beats (wah-wah-wah sound), the string is slightly out of tune. As you adjust the tension and frequencies get closer, the beats slow down. When beats disappear, the string is perfectly tuned!
>
> **Example:** If reference is 440 Hz and you hear 4 beats per second, your string is at either 436 Hz or 444 Hz.

**Limitations:**

- Beat frequency should be **less than ~10 Hz** to be perceived clearly
- If $|f_1 - f_2|$ is too large, we hear two separate notes instead of beats

---

## Common Mistakes to Avoid

> **⚠ Trap #1: Node-Antinode Distances**
>
> **Wrong:** Distance between node and antinode = $\frac{\lambda}{2}$
>
> **Right:** Distance = $\frac{\lambda}{4}$
>
> - Node to node = $\frac{\lambda}{2}$

> - Antinode to antinode = $\frac{\lambda}{2}$

> - Node to **nearest** antinode = $\frac{\lambda}{4}$

> **⚠ Trap #2: Closed Pipe Harmonics**
>
> **Wrong:** Closed pipe has all harmonics
>
> **Right:** Closed pipe has **only odd harmonics**
>
> $f_1, 3f_1, 5f_1, ...$ (not $2f_1, 4f_1, ...$)

> **⚠ Trap #3: Beat Frequency Formula**
>
> **Wrong:** Beat frequency = $f_1 + f_2$
>
> **Right:** Beat frequency = $|f_1 - f_2|$ (difference, not sum!)
>
> You hear the **difference** in frequencies.

> **⚠ Trap #4: Amplitude in Standing Waves**
>
> **Wrong:** All points in standing wave have same amplitude
>
> **Right:** Amplitude varies with position!
>
> $A(x) = 2A\sin(kx)$ — maximum at antinodes, zero at nodes

> **⚠ Trap #5: Energy Transfer in Standing Waves**
>
> **Wrong:** Standing waves transfer energy like traveling waves
>
> **Right:** Standing waves have **no net energy transfer**
>
> Energy oscillates locally between KE and PE.

---

## Memory Tricks & Patterns

### Node-Antinode Spacing

**“Half for same, Quarter for change”**

- Same to same (N→N or A→A): $\frac{\lambda}{2}$
- Change type (N→A or A→N): $\frac{\lambda}{4}$

### Harmonics in Pipes

**“Closed is Odd, Open is All”**

- **C**losed pipe: **O**dd harmonics only
- **O**pen pipe: **A**ll harmonics

### Beat Frequency

**“Beats are the Difference”**

$f_{beats} = |f_1 - f_2|$ (not sum!)

### Fundamental Frequencies

**“Open is Double”**

For same length $L$:

- Closed: $f = \frac{v}{4L}$
- Open: $f = \frac{v}{2L} = 2 \times \frac{v}{4L}$

Open pipe fundamental is **twice** the closed pipe fundamental!

---

## Practice Problems

### Level 1: Foundation (NCERT Style)

> **↗ Connection · Problem 1.1**
>
> Two waves $y_1 = 5\sin\omega t$ and $y_2 = 5\sin(\omega t + \frac{\pi}{3})$ superpose. Find the resultant amplitude.
>
> **Solution:**
>
> $$A = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2\cos\phi}$$

$$A = \sqrt{25 + 25 + 2(5)(5)\cos\frac{\pi}{3}}$$

$$A = \sqrt{50 + 50 \times 0.5} = \sqrt{50 + 25} = \sqrt{75}$$

$$A = 5\sqrt{3}$$
>
> ≈ **8.66**

> **↗ Connection · Problem 1.2**
>
> In a standing wave, two consecutive nodes are 20 cm apart. Find the wavelength.
>
> **Solution:**

> Distance between consecutive nodes = $\frac{\lambda}{2}$
>
> $$\frac{\lambda}{2} = 20 \text{ cm}$$

$$\lambda = 40$$
>
> cm = **0.4 m**

> **↗ Connection · Problem 1.3**
>
> Two tuning forks produce 6 beats per second. If one has frequency 256 Hz, what are the possible frequencies of the other?
>
> **Solution:**

> Beat frequency: $f_{beats} = |f_1 - f_2| = 6$ Hz
>
> Given $f_1 = 256$ Hz:
>
> $$|256 - f_2| = 6$$
>
> So: $f_2 = 256 + 6 = 262$ Hz or $f_2 = 256 - 6 = 250$ Hz
>
> **Answer:** **250 Hz** or **262 Hz**

### Level 2: JEE Main

> **↗ Connection · Problem 2.1**
>
> A string of length 1 m is fixed at both ends. The wave speed is 200 m/s. Find:

> (a) Fundamental frequency

> (b) Second harmonic frequency
>
> **Solution:**

> (a) Fundamental: $f_1 = \frac{v}{2L} = \frac{200}{2 \times 1} = $ **100 Hz**
>
> (b) Second harmonic: $f_2 = 2f_1 = 2 \times 100 = $ **200 Hz**

> **↗ Connection · Problem 2.2**
>
> A closed organ pipe of length 50 cm produces its fundamental note. The speed of sound is 340 m/s. Find:

> (a) Fundamental frequency

> (b) Next allowed frequency
>
> **Solution:**

> (a) Fundamental: $f_1 = \frac{v}{4L} = \frac{340}{4 \times 0.5} = \frac{340}{2} = $ **170 Hz**
>
> (b) Closed pipe has only odd harmonics:

> Next frequency = $f_3 = 3f_1 = 3 \times 170 = $ **510 Hz**
>
> (Not $f_2$, because even harmonics don’t exist!)

> **↗ Connection · Problem 2.3**
>
> An open organ pipe and a closed organ pipe have the same fundamental frequency. If the length of the closed pipe is 30 cm, what is the length of the open pipe?
>
> **Solution:**

> Closed: $f_1 = \frac{v}{4L_c}$

> Open: $f_1 = \frac{v}{2L_o}$
>
> Since frequencies are equal:
>
> $$\frac{v}{4L_c} = \frac{v}{2L_o}$$

$$\frac{1}{4L_c} = \frac{1}{2L_o}$$

$$2L_o = 4L_c$$

$$L_o = 2L_c = 2 \times 30 = $$
>
> **60 cm**
>
> Open pipe must be **twice as long** to have same fundamental frequency!

### Level 3: JEE Advanced

> **↗ Connection · Problem 3.1**
>
> A string is fixed at both ends and vibrates in 5 loops (5th harmonic). If the length is 2 m and frequency is 500 Hz, find:

> (a) Wavelength

> (b) Wave speed on string
>
> **Solution:**

> (a) For 5th harmonic ($n = 5$):
>
> $$L = n\frac{\lambda}{2} = 5\frac{\lambda}{2}$$

$$2 = 5\frac{\lambda}{2}$$

$$\lambda = \frac{4}{5} = 0.8$$
>
> m = **80 cm**
>
> (b) $v = f\lambda = 500 \times 0.8 = $ **400 m/s**

> **↗ Connection · Problem 3.2**
>
> Two identical strings are in unison (same frequency). When tension in one is increased by 2%, how many beats per second will be heard if the original frequency was 200 Hz?
>
> **Solution:**

> Frequency $\propto \sqrt{T}$ (since $v = \sqrt{\frac{T}{\mu}}$ and $f = \frac{v}{2L}$)
>
> Original: $f_1 = 200$ Hz
>
> When tension increases by 2%: $T' = 1.02T$
>
> $$f_2 = f_1\sqrt{\frac{T'}{T}} = 200\sqrt{1.02}$$
>
> Using $\sqrt{1 + x} \approx 1 + \frac{x}{2}$ for small $x$:
>
> $$f_2 = 200(1 + \frac{0.02}{2}) = 200(1.01) = 202$$
>
> Hz
>
> Beat frequency: $f_{beats} = |f_2 - f_1| = 202 - 200 = $ **2 Hz**

> **↗ Connection · Problem 3.3**
>
> A standing wave equation is $y = 0.04\sin(5\pi x)\cos(200\pi t)$ (SI units). Find:

> (a) Amplitude of component waves

> (b) Wavelength

> (c) Frequency

> (d) Speed of component waves
>
> **Solution:**

> Comparing with $y = 2A\sin(kx)\cos(\omega t)$:
>
> (a) $2A = 0.04$, so $A = 0.02$ m = **2 cm**
>
> (b) $k = 5\pi = \frac{2\pi}{\lambda}$
>
> $$\lambda = \frac{2\pi}{5\pi} = \frac{2}{5} = 0.4$$
>
> m = **40 cm**
>
> (c) $\omega = 200\pi = 2\pi f$
>
> $$f = \frac{200\pi}{2\pi} = 100$$
>
> Hz
>
> (d) $v = f\lambda = 100 \times 0.4 = $ **40 m/s**
>
> Or: $v = \frac{\omega}{k} = \frac{200\pi}{5\pi} = $ **40 m/s** ✓

---

## Quick Revision Box

### Interference

| Type | Phase Difference | Path Difference | Amplitude |
| --- | --- | --- | --- |
| Constructive | $0, 2\pi, 4\pi, ...$ | $n\lambda$ | $A_1 + A_2$ |
| Destructive | $\pi, 3\pi, 5\pi, ...$ | $(2n+1)\frac{\lambda}{2}$ | $ |

### Standing Waves

| Feature | Formula |
| --- | --- |
| Equation | $y = 2A\sin(kx)\cos(\omega t)$ |
| Node positions | $x = n\frac{\lambda}{2}$ |
| Antinode positions | $x = (2n+1)\frac{\lambda}{4}$ |
| Node spacing | $\frac{\lambda}{2}$ |
| Node-Antinode spacing | $\frac{\lambda}{4}$ |

### Strings and Pipes

| System | Boundary | Harmonics | Fundamental |
| --- | --- | --- | --- |
| String (both fixed) | Node-Node | All | $\frac{v}{2L}$ |
| String (one free) | Node-Antinode | Odd only | $\frac{v}{4L}$ |
| Closed pipe | Node-Antinode | Odd only | $\frac{v}{4L}$ |
| Open pipe | Antinode-Antinode | All | $\frac{v}{2L}$ |

### Beats

$$f_{beats} = |f_1 - f_2|$$

---

## Related Topics

### Within Oscillations & Waves

- [Wave Motion](../wave-motion/index.md) — Foundation for superposition
- [Simple Harmonic Motion](../simple-harmonic-motion/index.md) — Individual wave components
- [Doppler Effect](../doppler-effect/index.md) — Frequency changes in moving sources

### Connected Chapters

- [Sound Waves](../index.md) — Applications of standing waves and beats
- [Optics](../../optics/index.md) — Light interference and diffraction
- [Electromagnetic Waves](../../electromagnetic-waves/index.md) — EM wave superposition

### Math Connections

- [Trigonometric Identities](../../../mathematics/trigonometry/index.md) — Sum-to-product formulas
- [Complex Numbers](../../../mathematics/complex-numbers/index.md) — Alternative representation
- [Fourier Series](../../../mathematics/index.md) — Decomposition into harmonics

---

## Teacher’s Summary

> **★ Key point · Key Takeaways**
>
> 1. **Superposition Principle:** When waves meet, displacements add algebraically. Waves pass through each other unchanged.

> 2. **Interference:**
>
>    - Constructive: Path difference = $n\lambda$ → Maximum amplitude

>    - Destructive: Path difference = $(2n+1)\frac{\lambda}{2}$ → Minimum amplitude

> 3. **Standing Waves:** $y = 2A\sin(kx)\cos(\omega t)$
>
>    - Formed by two identical waves traveling in opposite directions

>    - Nodes (zero amplitude) at $x = n\frac{\lambda}{2}$

>    - Antinodes (max amplitude) at $x = (2n+1)\frac{\lambda}{4}$

>    - No energy transfer

> 4. **Strings and Pipes:**
>
>    - Both ends same (fixed-fixed or open-open): All harmonics, $f_n = n\frac{v}{2L}$

>    - One end different (fixed-free or closed-open): Odd harmonics only, $f_n = (2n-1)\frac{v}{4L}$

> 5. **Beats:** $f_{beats} = |f_1 - f_2|$
>
>    - Used for tuning instruments

>    - Audible for $|f_1 - f_2| < 10$ Hz

> 6. **JEE Strategy:**
>
>    - Memorize node-antinode spacing: $\frac{\lambda}{2}$ for same, $\frac{\lambda}{4}$ for different

>    - Know which systems have odd-only harmonics

>    - Beats = difference in frequencies
>
> **“When waves dance together, they create patterns more beautiful than either could alone — from music to light, superposition is nature’s symphony.”**

---

From TestGuru · our mock-test platform

## You've read Superposition of Waves.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=oscillations-waves&tg_exam=jee-main&tg_page=%2Fphysics%2Foscillations-waves%2Fsuperposition-waves%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/physics/oscillations-waves/superposition-waves/",this.page.identifier="/physics/oscillations-waves/superposition-waves/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="waveSuperposition" id="anim-waveSuperposition-1795396424099689357"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-waveSuperposition-1795396424099689357")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/physics/oscillations-waves/superposition-waves/](https://jeenotes.in/physics/oscillations-waves/superposition-waves/) · raw HTML: `offline/physics/oscillations-waves/superposition-waves/index.html`_
