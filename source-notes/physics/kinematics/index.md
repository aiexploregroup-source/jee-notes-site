---
title: "Kinematics for JEE: Equations, Graphs & Notes"
source: "https://jeenotes.in/physics/kinematics/"
html: "../../../offline/physics/kinematics/index.html"
extracted: "2026-11-23"
---

# Kinematics for JEE: Equations, Graphs & Notes

Kinematics notes for JEE: equations of motion, x-t and v-t graphs, projectile motion, relative velocity and circular motion, with formulas and PYQs.

:   8

Topics

:   61

Min read

Kinematics describes motion, meaning position, displacement, velocity and acceleration, without asking what causes it. For motion with constant acceleration in a straight line, three [equations of motion](kinematic-equations/index.md) connect these quantities: v = u + at, s = ut + ½at² and v² = u² + 2as. When acceleration is not constant, you use calculus instead: v = dx/dt and a = dv/dt = v·dv/dx. Graphs carry the same information. On an [x–t or v–t graph](graphical-analysis/index.md), the slope gives velocity or acceleration and the area under a v–t graph gives displacement. Treated as vectors, the same ideas extend to [projectile motion](projectile-motion/index.md), relative velocity and circular motion. This page is for JEE Main and Advanced aspirants starting mechanics.

Quick reference: [Kinematics formula sheet](formula-sheet/index.md)

## Key definitions

- **Distance vs displacement.** Distance is the total length of the path. It is a scalar and is never negative. Displacement is the change in position, Δr = r_final − r_initial. It is a vector, and its magnitude can be zero even when the distance is not, for example after one full lap. In general |displacement| ≤ distance.
- **Speed vs velocity.** Average speed = total distance / total time. Average velocity = displacement / total time. Instantaneous velocity is v = dr/dt, and its magnitude is the instantaneous speed.
- **Acceleration.** Acceleration is the rate of change of velocity, a = dv/dt. It is a vector. A body moving at constant speed along a curve is still accelerating, because the direction of its velocity changes. A negative sign on acceleration only means it points along −x. It does not always mean the body is slowing down. The body slows down only when **v** and **a** point in opposite directions.

## Constant-acceleration equations (1D)

If a is constant, then integrating a = dv/dt from 0 to t gives **v = u + at**. Next, integrate v = dx/dt = u + at to get **s = ut + ½at²**, where s is the displacement, not the distance. Eliminating t between the two gives **v² = u² + 2as**. Two other useful forms are s = ((u + v)/2)·t and the displacement in the nth second, sₙ = u + (a/2)(2n − 1). These equations hold only while a stays constant. If a changes partway through, as when the brakes are applied, split the motion into stages. Free fall is the special case a = −g (taking upward as positive), with g ≈ 9.8 m/s², often taken as 10 m/s² in JEE.

## Graphs

| Graph | Slope gives | Area under the curve gives |
| --- | --- | --- |
| x–t | velocity | (not meaningful) |
| v–t | acceleration | displacement (signed area); the total unsigned area gives distance |
| a–t | rate of change of acceleration (jerk) | change in velocity, Δv |

For uniform motion the x–t graph is a straight line. Under constant acceleration the x–t graph is a parabola and the v–t graph is a straight line. See [Graphical Analysis](graphical-analysis/index.md).

## Non-constant acceleration

When a depends on time, position or velocity, choose the form of a that separates the variables:

- a = f(t): use dv = a dt, then dx = v dt.
- a = f(x): use **a = v·dv/dx**, so ∫v dv = ∫a dx.
- a = f(v): use dv/dt = f(v) to find t, or v·dv/dx = f(v) to find x.

Do not apply the constant-acceleration equations here.

## Motion in a plane and projectiles

In 2D, handle x and y separately. They are linked only through time t. For a projectile launched at speed u and angle θ above the horizontal (ignoring air resistance):

- time of flight T = 2u sinθ / g
- maximum height H = u² sin²θ / (2g)
- horizontal range R = u² sin2θ / g, which is largest at θ = 45° for level ground
- the path is a parabola: y = x tanθ − g x² / (2u² cos²θ)

Complementary angles (θ and 90° − θ) give the same range. Details: [Motion in a Plane](motion-2d/index.md), [Projectile Motion](projectile-motion/index.md).

## Relative motion

The velocity of A relative to B is **v_AB = v_A − v_B**. Classic problems include rain and an umbrella (v_rain,man = v_rain − v_man), river crossing, and the minimum distance between two moving bodies. In a river of width d, with boat speed v relative to the water and river flow u:

- The shortest time comes from heading straight across: t = d/v, with drift u·d/v.
- The shortest path (zero drift, possible only if v > u) comes from heading upstream at an angle α to the perpendicular, where sinα = u/v. The crossing time is then t = d/√(v² − u²).

See [Relative Velocity](relative-velocity/index.md) and [Frame of Reference](frame-of-reference/index.md).

## Circular motion

The angular variables are θ, ω = dθ/dt and α = dω/dt, related to linear ones by v = ωr. A body in circular motion always has a centripetal acceleration a_c = v²/r = ω²r pointing toward the centre. If its speed is changing, it also has a tangential acceleration a_t = dv/dt = αr. The net acceleration is a = √(a_c² + a_t²). For constant α, the angular equations mirror the linear ones: ω = ω₀ + αt, θ = ω₀t + ½αt², ω² = ω₀² + 2αθ. See [Circular Motion](circular-motion/index.md).

## Common mistakes

1. Using s from s = ut + ½at² as the distance when the body reverses direction. Find the turning point and add the parts.
2. Applying the constant-acceleration equations when a varies.
3. Mixing sign conventions, for example taking g as +10 while upward is positive. Fix one positive direction first.
4. Treating “deceleration” and “negative acceleration” as always the same.
5. Forgetting that a projectile’s horizontal velocity stays constant and its vertical velocity is zero at the top (not zero overall).
6. Saying uniform circular motion has zero acceleration.
7. In relative motion, subtracting speeds as plain numbers instead of as vectors.

## Practice questions (take g = 10 m/s²)

**Q1.** A car speeds up uniformly from 10 m/s to 30 m/s over 100 m. Find its acceleration and the time taken.  
*Answer:* From v² = u² + 2as, 900 = 100 + 200a, so a = **4 m/s²**. Then t = (v − u)/a = 20/4 = **5 s**.

**Q2.** A ball is thrown straight up at 20 m/s. Find its maximum height, the time it takes to return to the thrower, and the distance it travels in that time.  
*Answer:* H = u²/2g = 400/20 = **20 m**. Time up = u/g = 2 s, so the total time is **4 s**. The distance is 40 m, while the displacement is **0**.

**Q3.** A projectile is launched at 20 m/s at 30° above the horizontal on level ground. Find T, H and R.  
*Answer:* T = 2(20)(½)/10 = **2 s**. H = (20·½)²/(2·10) = 100/20 = **5 m**. R = 400·sin60°/10 = 20√3 ≈ **34.6 m**.

**Q4.** A particle moves along x with v = 4x² (SI units). Find its acceleration at x = 1 m.  
*Answer:* a = v·dv/dx = (4x²)(8x) = 32x³. At x = 1, a = **32 m/s²**.

**Q5.** A river is 120 m wide and flows at 3 m/s. A boat moves at 5 m/s relative to the water. (a) Find the minimum crossing time and the drift. (b) Find the time taken to cross straight to the opposite point.  
*Answer:* (a) Heading straight across, t = 120/5 = **24 s** and the drift is 3 × 24 = **72 m**. (b) Head upstream with sinα = 3/5. The crossing speed is √(25 − 9) = 4 m/s, so t = 120/4 = **30 s**.

**Q6.** A particle moves on a circle of radius 2 m with speed v = 2t (SI units). Find the magnitude of its net acceleration at t = 2 s.  
*Answer:* v = 4 m/s, so a_c = v²/r = 16/2 = 8 m/s² and a_t = dv/dt = 2 m/s². a = √(64 + 4) = √68 = 2√17 ≈ **8.25 m/s²**.

## Quick formula table

| Quantity | Formula |
| --- | --- |
| Constant a | v = u + at; s = ut + ½at²; v² = u² + 2as; s = (u+v)t/2 |
| nth-second displacement | sₙ = u + a(2n − 1)/2 |
| Variable a | v = dx/dt; a = dv/dt = v dv/dx |
| Projectile | T = 2u sinθ/g; H = u² sin²θ/2g; R = u² sin2θ/g |
| Relative velocity | v_AB = v_A − v_B |
| River (shortest time / shortest path) | t = d/v / t = d/√(v² − u²) |
| Circular | v = ωr; a_c = v²/r = ω²r; a_t = αr; a = √(a_c² + a_t²) |

Full list: [Kinematics formula sheet](formula-sheet/index.md) · Practice: [Previous Year Questions](previous-year-questions/index.md)

**What next:** [next chapter practice: NLM JEE Mains PYQ](../laws-of-motion/previous-year-questions/index.md)

1. [01
   Frame of ReferenceStart here
   Inertial and non-inertial frames, pseudo forces, and apparent weight — explained from first principles with solved JEE problems on lifts, pendulums, and wedges
   10 min](https://jeenotes.in/physics/kinematics/frame-of-reference/)
2. [02
   Motion in a Straight Line
   Distance vs displacement, speed vs velocity, acceleration, and the calculus of 1D motion — with average-speed shortcuts and solved JEE problems
   9 min](https://jeenotes.in/physics/kinematics/motion-1d/)
3. [03
   Kinematic Equations
   Master the four equations of uniformly accelerated motion for JEE
   6 min](https://jeenotes.in/physics/kinematics/kinematic-equations/)
4. [04
   Graphical Analysis
   Read position-time, velocity-time, and acceleration-time graphs like a pro — slopes, areas, impossible graphs, and solved JEE problems
   10 min](https://jeenotes.in/physics/kinematics/graphical-analysis/)
5. [05
   Motion in a Plane
   Master 2D motion for JEE: position vectors, velocity, acceleration, independence of components, and solved problems from foundation to JEE Advanced level.
   10 min](https://jeenotes.in/physics/kinematics/motion-2d/)
6. [06
   Projectile Motion
   Master horizontal and oblique projection for JEE Physics
   6 min](https://jeenotes.in/physics/kinematics/projectile-motion/)
7. [07
   Relative Velocity
   Understanding motion observed from different reference frames
   5 min](https://jeenotes.in/physics/kinematics/relative-velocity/)
8. [08
   Circular Motion
   Understanding uniform circular motion and centripetal acceleration
   5 min](https://jeenotes.in/physics/kinematics/circular-motion/)
9. [→
   Formula sheet
   Reference
   Every formula in this chapter on one page.
   8 min](https://jeenotes.in/physics/kinematics/formula-sheet/)
10. [→
    Chapter PYQs
    Practice
    Every past question from this chapter, with worked answers.
    6 min](https://jeenotes.in/physics/kinematics/previous-year-questions/)

[From TestGuru
Test this chapter, timed, free.
Start →](https://app.testguru.co/signup?tg_exam=jee-main&tg_page=%2Fphysics%2Fkinematics%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=sidebar&utm_medium=referral&utm_source=jeenotes)

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-12

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/kinematics/](https://jeenotes.in/physics/kinematics/) · raw HTML: `offline/physics/kinematics/index.html`_
