---
title: "Rotational Motion — Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/physics/rotational-motion/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Rotational Motion — moment of inertia, torque, rolling without slipping, angular kinematics and centre of mass — with step-by-step solutions."
updated: "2026-11-02"
reading_time: "8 min read"
breadcrumb: "Physics"
position: "/ Topic 7 of 8"
html: "../../../../offline/physics/rotational-motion/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Rotational Motion — moment of inertia, torque, rolling without slipping, angular kinematics and centre of mass — with step-by-step solutions.

Solved JEE Main 2026 questions from the Rotational Motion chapter, covering moment of inertia, torque and angular deceleration, angular kinematics, rolling without slipping, and centre-of-mass motion, each with a concise step-by-step solution.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

A solid sphere of mass $M$ and radius $R$ is divided into two unequal parts. The smaller part having mass $M/8$ is converted into a sphere of radius $r$ and the larger part is converted into a circular disc of thickness $t$ and radius $2R$. If $I_1$ is moment of inertia of a sphere having radius $r$ about an axis through its centre and $I_2$ is the moment of inertia of a disc about its diameter, the ratio of their moment of inertia $I_2/I_1 = $ _____.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Both parts are made of the same material, so density is conserved.</p><p><strong>Radius of the small sphere.</strong> Mass scales with volume, so</p>$$\frac{M/8}{M} = \frac{r^3}{R^3} \implies r^3 = \frac{R^3}{8} \implies r = \frac{R}{2}$$<p><strong>Moment of inertia of the small sphere</strong> (about a central axis):</p>$$I_1 = \frac{2}{5}\left(\frac{M}{8}\right)r^2 = \frac{2}{5}\cdot\frac{M}{8}\cdot\frac{R^2}{4} = \frac{MR^2}{80}$$<p><strong>Moment of inertia of the disc about a diameter.</strong> Disc mass $= \dfrac{7M}{8}$, radius $= 2R$:</p>$$I_2 = \frac{1}{4}\left(\frac{7M}{8}\right)(2R)^2 = \frac{1}{4}\cdot\frac{7M}{8}\cdot 4R^2 = \frac{7MR^2}{8}$$<p><strong>Ratio:</strong></p>$$\frac{I_2}{I_1} = \frac{7MR^2/8}{MR^2/80} = 7 \times 10 = 70$$<p><strong>Answer:</strong> B (70)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

A solid sphere of radius 4 cm and mass 5 kg is rotating (rotation axis is passing through the centre of the sphere) with an angular velocity of 1200 rpm. It is brought to rest in 10 s by applying a constant torque. The torque applied and the number of rotations it made before it comes to rest are ________ and ________ respectively.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Moment of inertia</strong> ($R = 0.04$ m, $m = 5$ kg):</p>$$I = \frac{2}{5}mR^2 = \frac{2}{5}(5)(0.04)^2 = 3.2\times10^{-3}\ \text{kg}\cdot\text{m}^2$$<p><strong>Initial angular velocity:</strong></p>$$\omega_0 = 1200\ \text{rpm} = \frac{1200\times 2\pi}{60} = 40\pi\ \text{rad/s}$$<p><strong>Angular deceleration</strong> (to rest in 10 s):</p>$$\alpha = \frac{\omega_0}{t} = \frac{40\pi}{10} = 4\pi\ \text{rad/s}^2$$<p><strong>Torque:</strong></p>$$\tau = I\alpha = 3.2\times10^{-3}\times 4\pi = 0.0128\pi\ \text{Nm}$$<p><strong>Number of rotations</strong> (uniform deceleration, average $\omega = \omega_0/2$):</p>$$\theta = \frac{\omega_0}{2}\,t = \frac{40\pi}{2}\times 10 = 200\pi\ \text{rad} \implies N = \frac{200\pi}{2\pi} = 100$$<p><strong>Answer:</strong> D ($0.0128\pi$ Nm, 100)</p></div></details>

PYQ · 2026 2 Apr, Shift 1

The position of an object having mass 0.1 kg as a function of time $t$ is given as $\vec{r} = \left(10t^2\hat{i} + 5t^3\hat{j}\right)$ m. At $t = 1$ s, which of the following statements are correct?
A. The linear momentum $\vec{p} = \left(2\hat{i} + 1.5\hat{j}\right)$ kg·m/s.
B. The force acting on the object $\vec{F} = \left(2\hat{i} + 3\hat{j}\right)$ N.
C. The angular momentum of the object about its origin $\vec{L} = 15\hat{k}$ J s.
D. The torque acting on the object about its origin $\vec{\tau} = 20\hat{k}$ N m.
Choose the correct answer from the options given below :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Differentiate $\vec{r} = 10t^2\hat{i} + 5t^3\hat{j}$ and evaluate at $t = 1$ s ($m = 0.1$ kg).</p><p><strong>Velocity and momentum:</strong></p>$$\vec{v} = 20t\,\hat{i} + 15t^2\,\hat{j} = 20\hat{i} + 15\hat{j},\qquad \vec{p} = m\vec{v} = 2\hat{i} + 1.5\hat{j}\ \Rightarrow\ \textbf{A correct}$$<p><strong>Acceleration and force:</strong></p>$$\vec{a} = 20\hat{i} + 30t\,\hat{j} = 20\hat{i} + 30\hat{j},\qquad \vec{F} = m\vec{a} = 2\hat{i} + 3\hat{j}\ \Rightarrow\ \textbf{B correct}$$<p><strong>Position at $t=1$:</strong> $\vec{r} = 10\hat{i} + 5\hat{j}$.</p><p><strong>Angular momentum</strong> $\vec{L} = \vec{r}\times\vec{p}$:</p>$$L_z = r_x p_y - r_y p_x = (10)(1.5) - (5)(2) = 15 - 10 = 5\ \Rightarrow\ \vec{L} = 5\hat{k}\ (\text{not }15\hat{k})\ \Rightarrow\ \textbf{C wrong}$$<p><strong>Torque</strong> $\vec{\tau} = \vec{r}\times\vec{F}$:</p>$$\tau_z = r_x F_y - r_y F_x = (10)(3) - (5)(2) = 30 - 10 = 20\ \Rightarrow\ \vec{\tau} = 20\hat{k}\ \Rightarrow\ \textbf{D correct}$$<p>Correct statements: A, B and D.</p><p><strong>Answer:</strong> D (A, B and D only)</p></div></details>

PYQ · 2026 2 Apr, Shift 1

A particle is rotating in a circular path and at any instant its motion can be described as $\theta = \dfrac{5t^4}{40} - \dfrac{t^3}{3}$. The angular acceleration of the particle after 10 seconds is __________ rad/s$^2$.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Simplify $\theta = \dfrac{t^4}{8} - \dfrac{t^3}{3}$.</p><p><strong>Angular velocity:</strong></p>$$\omega = \frac{d\theta}{dt} = \frac{t^3}{2} - t^2$$<p><strong>Angular acceleration:</strong></p>$$\alpha = \frac{d\omega}{dt} = \frac{3t^2}{2} - 2t$$<p><strong>At $t = 10$ s:</strong></p>$$\alpha = \frac{3(100)}{2} - 2(10) = 150 - 20 = 130\ \text{rad/s}^2$$<p><strong>Answer:</strong> C (130)</p></div></details>

PYQ · 2026 2 Apr, Shift 2

A 0.5 kg mass is in contact against the inner wall of a cylindrical drum of radius 4 m rotating about its vertical axis. The minimum rotational speed of the drum to enable the mass to remain stuck to the wall (without falling) is 5 rad/s. The coefficient of friction between the drum’s inner wall surface and mass is __________. (Take $g = 10\,\text{m/s}^2$)

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The wall pushes the mass inward providing the centripetal force, so the normal reaction is</p>$$N = m\omega^2 R$$<p>For the mass to just not slide down, limiting friction balances gravity:</p>$$\mu N = mg \implies \mu\, m\omega^2 R = mg$$<p><strong>Solve for $\mu$</strong> ($\omega = 5$ rad/s, $R = 4$ m, $g = 10$):</p>$$\mu = \frac{g}{\omega^2 R} = \frac{10}{(5)^2 (4)} = \frac{10}{100} = 0.1$$<p><strong>Answer:</strong> A ($0.1$)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

A solid sphere $(A)$ of mass $5m$ and a spherical shell $(B)$ of mass $m$, both having same radius, are placed on a rough surface. When a force of same magnitude is applied tangentially at the highest points of $A$ and $B$, they start rolling without slipping with an acceleration of $a_A$ and $a_B$, respectively. The ratio of $a_A$ and $a_B$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let the body have mass $M$, radius $R$, and moment of inertia $I = kMR^2$. The force $F$ acts at the top; let $f$ be friction at the contact point.</p><p><strong>Translation:</strong> $F + f = Ma$</p><p><strong>Rotation about centre</strong> (both $F$ and $f$ produce torque about the centre):</p>$$FR - fR = I\alpha = kMR^2\cdot\frac{a}{R} \implies F - f = kMa$$<p>Adding the two equations:</p>$$2F = Ma(1+k) \implies a = \frac{2F}{M(1+k)}$$<p><strong>Solid sphere $A$</strong> ($M = 5m$, $k = \tfrac{2}{5}$):</p>$$a_A = \frac{2F}{5m\left(1+\tfrac{2}{5}\right)} = \frac{2F}{5m\cdot\tfrac{7}{5}} = \frac{2F}{7m}$$<p><strong>Spherical shell $B$</strong> ($M = m$, $k = \tfrac{2}{3}$):</p>$$a_B = \frac{2F}{m\left(1+\tfrac{2}{3}\right)} = \frac{2F}{m\cdot\tfrac{5}{3}} = \frac{6F}{5m}$$<p><strong>Ratio:</strong></p>$$\frac{a_A}{a_B} = \frac{2/7}{6/5} = \frac{2}{7}\cdot\frac{5}{6} = \frac{10}{42} = \frac{5}{21}$$<p><strong>Answer:</strong> A ($5:21$)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Two identical bodies A and B of equal masses have initial velocities $\vec{v_1}=4\hat{i}$ m/s and $\vec{v_2}=4\hat{j}$ m/s respectively. The body A has acceleration $\vec{a_1}=6\hat{i}+6\hat{j}$ m/s$^2$ while the acceleration of the other body B is zero. The centre of mass of the two bodies moves in __________ path.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>For equal masses, the centre of mass has</p><p><strong>Initial velocity:</strong></p>$$\vec{v}_{cm} = \frac{\vec{v_1} + \vec{v_2}}{2} = \frac{4\hat{i} + 4\hat{j}}{2} = 2\hat{i} + 2\hat{j}$$<p><strong>Acceleration:</strong></p>$$\vec{a}_{cm} = \frac{\vec{a_1} + \vec{a_2}}{2} = \frac{6\hat{i} + 6\hat{j}}{2} = 3\hat{i} + 3\hat{j}$$<p>Both $\vec{v}_{cm}$ and $\vec{a}_{cm}$ point along the same direction $(\hat{i}+\hat{j})$. When initial velocity and constant acceleration are parallel, the motion is one-dimensional along that line.</p><p><strong>Answer:</strong> C (straight line)</p></div></details>

PYQ · 2026 5 Apr, Shift 2

A wheel initially at rest is subjected to a uniform angular acceleration about its axis. In the first 2 s it rotates through an angle $\theta_1$ and in the next 2 s it rotates through an angle $\theta_2$. The ratio $\dfrac{\theta_2}{\theta_1}$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Starting from rest with constant angular acceleration $\alpha$, the angle in time $t$ is $\theta = \tfrac{1}{2}\alpha t^2$.</p><p><strong>First 2 s:</strong></p>$$\theta_1 = \frac{1}{2}\alpha(2)^2 = 2\alpha$$<p><strong>First 4 s (total):</strong></p>$$\theta_{0\to4} = \frac{1}{2}\alpha(4)^2 = 8\alpha$$<p><strong>Second interval (2 s to 4 s):</strong></p>$$\theta_2 = \theta_{0\to4} - \theta_1 = 8\alpha - 2\alpha = 6\alpha$$<p><strong>Ratio:</strong></p>$$\frac{\theta_2}{\theta_1} = \frac{6\alpha}{2\alpha} = 3$$<p><strong>Answer:</strong> B (3)</p></div></details>

PYQ · 2026 5 Apr, Shift 2

An object of uniform density rolls up the curved path with the initial velocity $v_0$. If the maximum height attained by an object is $\dfrac{7v_0^2}{10g}$ ($g$ = acceleration due to gravity), the object is a __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $I = kmR^2$. Rolling without slipping gives $\omega = v_0/R$. Conserving energy from base to the highest point:</p>$$\frac{1}{2}mv_0^2 + \frac{1}{2}I\omega^2 = mgh$$<p></p>$$\frac{1}{2}mv_0^2\left(1 + k\right) = mgh \implies h = \frac{v_0^2(1+k)}{2g}$$<p><strong>Match the given height:</strong></p>$$\frac{v_0^2(1+k)}{2g} = \frac{7v_0^2}{10g} \implies 1 + k = \frac{7}{5} \implies k = \frac{2}{5}$$<p>$k = \tfrac{2}{5}$ corresponds to a solid sphere $\left(I = \tfrac{2}{5}mR^2\right)$.</p><p><strong>Answer:</strong> D (solid sphere)</p></div></details>

PYQ · 2026 8 Apr, Shift 2

A solid cylinder having radius $R$ and length $L$ is slipping on a rough horizontal plane. At time $t = 0$ the cylinder has a translational velocity $v_0 = 49$ m/s, perpendicular to its axis and a rotational velocity $v_0/4R$ about the centre. The time taken by the cylinder to start rolling is __________ seconds. (coefficient of kinetic friction $\mu_K = 0.25$ and $g = 9.8$ m/s$^2$)

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Initial spin gives a surface speed at the contact point of $\omega_0 R = \dfrac{v_0}{4}$, which is less than $v_0$. So the contact point slides <strong>forward</strong>, and kinetic friction acts <strong>backward</strong>.</p><p><strong>Translation</strong> (friction $f = \mu_K mg$ decelerates):</p>$$v(t) = v_0 - \mu_K g\,t$$<p><strong>Rotation</strong> (friction torque $fR$ about the centre spins it up, $I = \tfrac{1}{2}mR^2$):</p>$$\alpha = \frac{fR}{I} = \frac{\mu_K mgR}{\tfrac{1}{2}mR^2} = \frac{2\mu_K g}{R} \implies \omega(t) = \frac{v_0}{4R} + \frac{2\mu_K g}{R}\,t$$<p><strong>Rolling condition</strong> $v = \omega R$:</p>$$v_0 - \mu_K g\,t = \frac{v_0}{4} + 2\mu_K g\,t$$<p></p>$$\frac{3v_0}{4} = 3\mu_K g\,t \implies t = \frac{v_0}{4\mu_K g}$$<p><strong>Substitute</strong> $v_0 = 49$, $\mu_K = 0.25$, $g = 9.8$:</p>$$t = \frac{49}{4(0.25)(9.8)} = \frac{49}{9.8} = 5\ \text{s}$$<p><strong>Answer:</strong> B (5)</p></div></details>

## Keep studying this chapter

- [Rotational Motion chapter notes](../index.md)
- [Rotational Motion formula sheet](../formula-sheet/index.md)

From TestGuru · our mock-test platform

## You've read Rotational Motion — Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=rotational-motion&tg_exam=jee-main&tg_page=%2Fphysics%2Frotational-motion%2Fprevious-year-questions%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-13

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/rotational-motion/previous-year-questions/](https://jeenotes.in/physics/rotational-motion/previous-year-questions/) · raw HTML: `offline/physics/rotational-motion/previous-year-questions/index.html`_
