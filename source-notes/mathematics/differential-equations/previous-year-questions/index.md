---
title: "Differential Equations Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/differential-equations/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on differential equations with step-by-step solutions covering variable-separable, linear (integrating factor), homogeneous and Bernoulli type first-order equations."
updated: "2026-07-01"
reading_time: "8 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 8"
html: "../../../../offline/mathematics/differential-equations/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on differential equations with step-by-step solutions covering variable-separable, linear (integrating factor), homogeneous and Bernoulli type first-order equations.

A curated set of JEE Main 2026 previous-year questions on differential equations, each solved step by step so you can check both the final answer and the full reasoning.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

Let $y = y(x)$ be the solution of the differential equation $\dfrac{dy}{dx} = (1 + x + x^2)(1 - y + y^2)$, $y(0) = \dfrac{1}{2}$. Then $(2y(1) - 1)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The equation is <strong>variable-separable</strong>:</p>$$\frac{dy}{1 - y + y^2} = (1 + x + x^2)\,dx.$$<p>Complete the square in the denominator:</p>$$1 - y + y^2 = \left(y - \tfrac{1}{2}\right)^2 + \frac{3}{4}.$$<p>Integrate both sides:</p>$$\int \frac{dy}{\left(y-\frac12\right)^2 + \frac34} = \frac{2}{\sqrt3}\tan^{-1}\!\left(\frac{2y-1}{\sqrt3}\right),\qquad \int (1+x+x^2)\,dx = x + \frac{x^2}{2} + \frac{x^3}{3} + C.$$<p>So</p>$$\frac{2}{\sqrt3}\tan^{-1}\!\left(\frac{2y-1}{\sqrt3}\right) = x + \frac{x^2}{2} + \frac{x^3}{3} + C.$$<p><strong>Apply $y(0)=\tfrac12$:</strong> the left side is $\tfrac{2}{\sqrt3}\tan^{-1}(0)=0$ and the right side is $C$, so $C = 0$.</p><p><strong>At $x=1$:</strong> the right side is $1 + \frac12 + \frac13 = \frac{11}{6}$, hence</p>$$\tan^{-1}\!\left(\frac{2y(1)-1}{\sqrt3}\right) = \frac{\sqrt3}{2}\cdot\frac{11}{6} = \frac{11\sqrt3}{12}.$$<p>Therefore</p>$$2y(1)-1 = \sqrt3\,\tan\!\left(\frac{11\sqrt3}{12}\right).$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 6 Apr, Shift 1

Let $y = y(x)$ be the solution of the differential equation $\left(x^2 - x\sqrt{x^2 - 1}\right)dy + \left(y\left(x - \sqrt{x^2 - 1}\right) - x\right)dx = 0$, $x \ge 1$. If $y(1) = 1$, then the greatest integer less than $y(\sqrt{5})$ is ________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Write the equation in derivative form:</p>$$x\left(x - \sqrt{x^2-1}\right)\frac{dy}{dx} + y\left(x - \sqrt{x^2-1}\right) = x.$$<p>Divide by $\left(x - \sqrt{x^2-1}\right)$:</p>$$x\frac{dy}{dx} + y = \frac{x}{x - \sqrt{x^2-1}}.$$<p>Rationalize the right side (multiply by $\frac{x + \sqrt{x^2-1}}{x + \sqrt{x^2-1}}$, and $x^2-(x^2-1)=1$):</p>$$x\frac{dy}{dx} + y = x\left(x + \sqrt{x^2-1}\right) = x^2 + x\sqrt{x^2-1}.$$<p>The left side is an <strong>exact derivative</strong>, $x\frac{dy}{dx} + y = \dfrac{d}{dx}(xy)$, so</p>$$\frac{d}{dx}(xy) = x^2 + x\sqrt{x^2-1}.$$<p>Integrate (note $\int x\sqrt{x^2-1}\,dx = \tfrac13 (x^2-1)^{3/2}$):</p>$$xy = \frac{x^3}{3} + \frac{1}{3}\left(x^2-1\right)^{3/2} + C.$$<p><strong>Apply $y(1)=1$:</strong> $\;1 = \frac13 + 0 + C \Rightarrow C = \frac23.$</p><p>At $x=\sqrt5$: $x^3 = 5\sqrt5$ and $(x^2-1)^{3/2} = 4^{3/2}=8$, so</p>$$\sqrt5\,y(\sqrt5) = \frac{5\sqrt5}{3} + \frac{8}{3} + \frac23 = \frac{5\sqrt5 + 10}{3}.$$

$$y(\sqrt5) = \frac{5\sqrt5 + 10}{3\sqrt5} = \frac{5 + 2\sqrt5}{3} \approx \frac{5 + 4.472}{3} \approx 3.157.$$<p>The greatest integer less than $3.157$ is $3$.</p><p><strong>Answer:</strong> 3</p></div></details>

PYQ · 2026 2 Apr, Shift 1

If the curve $y = f(x)$ passes through the point $(1, e)$ and satisfies the differential equation $dy = y(2 + \log_e x)\,dx$, $x > 0$, then $f(e)$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The equation is separable:</p>$$\frac{dy}{y} = (2 + \ln x)\,dx.$$<p>Integrate, using $\int \ln x\,dx = x\ln x - x$:</p>$$\ln y = 2x + (x\ln x - x) + C = x\ln x + x + C.$$<p><strong>Apply the point $(1,e)$:</strong> $\ln e = 1 = (1)(0) + 1 + C \Rightarrow C = 0.$ Hence</p>$$\ln y = x\ln x + x.$$<p><strong>At $x=e$</strong> (where $\ln e = 1$):</p>$$\ln y = e\cdot 1 + e = 2e \;\Rightarrow\; y = e^{2e}.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 2 Apr, Shift 1

Let $y = y(x)$ be the solution curve of the differential equation $(1 + \sin x)\dfrac{dy}{dx} + (y+1)\cos x = 0$, $y(0) = 0$. If the curve $y = y(x)$ passes through the point $\left(\alpha, \dfrac{-1}{2}\right)$, then a value of $\alpha$ is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Separate the variables:</p>$$\frac{dy}{y+1} = -\frac{\cos x}{1 + \sin x}\,dx.$$<p>Integrate both sides (the right side is $-\ln(1+\sin x)$):</p>$$\ln(y+1) = -\ln(1 + \sin x) + C \;\Rightarrow\; (y+1)(1+\sin x) = K.$$<p><strong>Apply $y(0)=0$:</strong> $(0+1)(1+0) = K \Rightarrow K = 1$, so</p>$$(y+1)(1 + \sin x) = 1.$$<p><strong>At $y = -\tfrac12$:</strong></p>$$\left(\tfrac12\right)(1 + \sin\alpha) = 1 \;\Rightarrow\; 1 + \sin\alpha = 2 \;\Rightarrow\; \sin\alpha = 1.$$<p>Thus $\alpha = \dfrac{\pi}{2}$.</p><p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 4 Apr, Shift 2

Let $y = y(x)$ be the solution of the differential equation $\dfrac{dy}{dx} + \left(\dfrac{6x^2 + \left(3x^2 + 2x^3 + 4\right)e^{-2x}}{\left(x^3 + 2\right)\left(2 + e^{-2x}\right)}\right)y = 2 + e^{-2x}$, $x \in (-1, 2)$, satisfying $y(0) = \dfrac{3}{2}$. If $y(1) = \alpha\left(2 + e^{-2}\right)$, then $\alpha$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>This is <strong>linear</strong>; first simplify the coefficient $P(x)$. Split the numerator over the common denominator:</p>$$3x^2/(x^3+2) = \frac{3x^2(2 + e^{-2x})}{(x^3+2)(2+e^{-2x})} = \frac{6x^2 + 3x^2 e^{-2x}}{(x^3+2)(2+e^{-2x})}.$$<p>Subtracting this from $P(x)$ leaves $\dfrac{(2x^3+4)e^{-2x}}{(x^3+2)(2+e^{-2x})} = \dfrac{2e^{-2x}}{2+e^{-2x}}$, so</p>$$P(x) = \frac{3x^2}{x^3+2} + \frac{2e^{-2x}}{2 + e^{-2x}}.$$<p><strong>Integrating factor.</strong> Note $\int \frac{3x^2}{x^3+2}\,dx = \ln(x^3+2)$ and $\int \frac{2e^{-2x}}{2+e^{-2x}}\,dx = -\ln(2+e^{-2x})$, so</p>$$\mu(x) = e^{\int P\,dx} = \frac{x^3 + 2}{2 + e^{-2x}}.$$<p><strong>Solve.</strong> With $Q(x) = 2 + e^{-2x}$,</p>$$\frac{d}{dx}\big(\mu y\big) = \mu Q = \frac{x^3+2}{2+e^{-2x}}\,(2 + e^{-2x}) = x^3 + 2.$$<p>Integrate:</p>$$\mu y = \frac{x^4}{4} + 2x + C.$$<p><strong>Apply $y(0)=\tfrac32$:</strong> $\mu(0) = \frac{2}{2+1} = \frac23$, so $\mu(0)\,y(0) = \frac23\cdot\frac32 = 1 = C$.</p><p><strong>At $x=1$:</strong> $\mu(1)\,y(1) = \frac14 + 2 + 1 = \frac{13}{4}$, and $\mu(1) = \frac{3}{2+e^{-2}}$, so</p>$$y(1) = \frac{13}{4}\cdot\frac{2+e^{-2}}{3} = \frac{13}{12}\left(2 + e^{-2}\right).$$<p>Hence $\alpha = \dfrac{13}{12}$.</p><p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let $x = x(y)$ be the solution of the differential equation $2y^2 \dfrac{dx}{dy} - 2xy + x^2 = 0$, $y > 1$, $x(e) = e$. Then $x(e^2)$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Treat $x$ as the dependent variable. This is a <strong>Bernoulli equation</strong> in $x$. Divide by $x^2$:</p>$$\frac{2y^2}{x^2}\frac{dx}{dy} - \frac{2y}{x} + 1 = 0.$$<p>Substitute $v = \dfrac{1}{x}$, so $\dfrac{dv}{dy} = -\dfrac{1}{x^2}\dfrac{dx}{dy}$:</p>$$-2y^2\frac{dv}{dy} - 2yv + 1 = 0 \;\Rightarrow\; \frac{dv}{dy} + \frac{1}{y}\,v = \frac{1}{2y^2}.$$<p><strong>Integrating factor</strong> $\mu = e^{\int dy/y} = y$:</p>$$\frac{d}{dy}(yv) = y\cdot\frac{1}{2y^2} = \frac{1}{2y} \;\Rightarrow\; yv = \frac12\ln y + C.$$<p>Back-substitute $v = 1/x$:</p>$$\frac{y}{x} = \frac12\ln y + C.$$<p><strong>Apply $x(e)=e$:</strong> $\frac{e}{e} = 1 = \frac12(1) + C \Rightarrow C = \frac12$, so</p>$$\frac{y}{x} = \frac12(\ln y + 1).$$<p><strong>At $y = e^2$:</strong> $\frac{e^2}{x} = \frac12(2 + 1) = \frac32 \Rightarrow x = \frac{2}{3}e^2.$</p><p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Let $y = y(x)$ be the solution of the differential equation $x\sin\left( \dfrac{y}{x} \right) dy = \left( y\sin\left( \dfrac{y}{x} \right) - x \right) dx$, $y(1) = \dfrac{\pi}{2}$ and let $\alpha = \cos\left( \dfrac{y(e^{12})}{e^{12}} \right)$. Then the number of integral value of $p$, for which the equation $x^2 + y^2 - 2px + 2py + \alpha + 2 = 0$ represents a circle of radius $r \le 6$, is ________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Solve the homogeneous ODE.</strong> Write it as</p>$$\frac{dy}{dx} = \frac{y\sin(y/x) - x}{x\sin(y/x)} = \frac{y}{x} - \frac{1}{\sin(y/x)}.$$<p>Put $v = \dfrac{y}{x}$, so $y = vx$ and $\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}$:</p>$$v + x\frac{dv}{dx} = v - \frac{1}{\sin v} \;\Rightarrow\; x\frac{dv}{dx} = -\frac{1}{\sin v}.$$<p>Separate and integrate:</p>$$\sin v\,dv = -\frac{dx}{x} \;\Rightarrow\; -\cos v = -\ln x + C \;\Rightarrow\; \cos v = \ln x + C'.$$<p><strong>Apply $y(1)=\tfrac{\pi}{2}$:</strong> at $x=1$, $v = \tfrac{\pi}{2}$, so $\cos\tfrac{\pi}{2} = 0 = \ln 1 + C' \Rightarrow C' = 0$. Hence</p>$$\cos\left(\frac{y}{x}\right) = \ln x.$$<p><strong>Compute $\alpha$:</strong> at $x = e^{12}$, $\;\alpha = \cos\!\left(\dfrac{y(e^{12})}{e^{12}}\right) = \ln e^{12} = 12.$</p><p><strong>Circle condition.</strong> The equation becomes $x^2 + y^2 - 2px + 2py + 14 = 0$, i.e. centre $(p, -p)$ and</p>$$r^2 = p^2 + p^2 - 14 = 2p^2 - 14.$$<p>For a real circle with $0 &lt; r \le 6$:</p>$$2p^2 - 14 &gt; 0 \;\text{and}\; 2p^2 - 14 \le 36 \;\Rightarrow\; 7 &lt; p^2 \le 25.$$<p>Integer $p$: $|p| \in \{3, 4, 5\}$ (since $3^2 = 9 &gt; 7$ and $5^2 = 25 \le 25$), giving $p \in \{-5, -4, -3, 3, 4, 5\}$.</p><p>That is $6$ integral values.</p><p><strong>Answer:</strong> 6</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let $y = y(x)$ be the solution of the differential equation $x\sqrt{1 - x^2}\,dy + \left(y\sqrt{1 - x^2} - x\cos^{-1}x\right)dx = 0$, $x \in (0, 1)$, $\displaystyle\lim_{x \to 1^-} y(x) = 1$. Then $y\left(\dfrac{1}{2}\right)$ equals :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Rewrite as a <strong>linear</strong> equation. Divide by $x\sqrt{1-x^2}$:</p>$$\frac{dy}{dx} + \frac{1}{x}\,y = \frac{\cos^{-1}x}{\sqrt{1-x^2}}.$$<p><strong>Integrating factor</strong> $\mu = e^{\int dx/x} = x$:</p>$$\frac{d}{dx}(xy) = \frac{x\cos^{-1}x}{\sqrt{1-x^2}}.$$<p><strong>Integrate</strong> with $u = \cos^{-1}x$ (so $x = \cos u$, $\sqrt{1-x^2} = \sin u$, $dx = -\sin u\,du$):</p>$$\int \frac{x\cos^{-1}x}{\sqrt{1-x^2}}\,dx = \int \frac{\cos u\cdot u}{\sin u}(-\sin u)\,du = -\int u\cos u\,du = -\big(u\sin u + \cos u\big).$$<p>Back in terms of $x$:</p>$$xy = -\cos^{-1}(x)\sqrt{1-x^2} - x + C.$$<p><strong>Apply the limit</strong> $x \to 1^-$: then $\cos^{-1}x \to 0$, $\sqrt{1-x^2}\to 0$, $x \to 1$, so the right side $\to C - 1$, while the left side $\to 1\cdot 1 = 1$. Hence $C - 1 = 1 \Rightarrow C = 2$.</p>$$y = \frac{-\cos^{-1}(x)\sqrt{1-x^2} - x + 2}{x}.$$<p><strong>At $x = \tfrac12$</strong> ($\cos^{-1}\tfrac12 = \tfrac{\pi}{3}$, $\sqrt{1-\tfrac14} = \tfrac{\sqrt3}{2}$):</p>$$y\!\left(\tfrac12\right) = \frac{-\frac{\pi}{3}\cdot\frac{\sqrt3}{2} - \frac12 + 2}{\frac12} = 2\left(\frac32 - \frac{\pi\sqrt3}{6}\right) = 3 - \frac{\pi\sqrt3}{3} = 3 - \frac{\pi}{\sqrt3}.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $y = y(x)$ be the solution of the differential equation $(\tan x)^{1/2}\,dy = \left(\sec^3 x - (\tan x)^{3/2} y\right)dx$, $0 < x < \dfrac{\pi}{2}$, $y\left(\dfrac{\pi}{4}\right) = \dfrac{6\sqrt{2}}{5}$. If $y\left(\dfrac{\pi}{3}\right) = \dfrac{4}{5}\alpha$, then $\alpha^4$ equals __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Divide by $(\tan x)^{1/2}$ to get a <strong>linear</strong> equation:</p>$$\frac{dy}{dx} + (\tan x)\,y = \frac{\sec^3 x}{\sqrt{\tan x}}.$$<p><strong>Integrating factor</strong> $\mu = e^{\int \tan x\,dx} = e^{-\ln\cos x} = \sec x$:</p>$$\frac{d}{dx}\big(y\sec x\big) = \sec x\cdot\frac{\sec^3 x}{\sqrt{\tan x}} = \frac{\sec^4 x}{\sqrt{\tan x}}.$$<p><strong>Integrate.</strong> Write $\sec^4 x = (1 + \tan^2 x)\sec^2 x$ and put $t = \tan x$, $dt = \sec^2 x\,dx$:</p>$$\int \frac{\sec^4 x}{\sqrt{\tan x}}\,dx = \int \frac{1 + t^2}{\sqrt{t}}\,dt = \int \left(t^{-1/2} + t^{3/2}\right)dt = 2\sqrt{t} + \frac{2}{5}t^{5/2}.$$<p>So</p>$$y\sec x = 2\sqrt{\tan x} + \frac{2}{5}(\tan x)^{5/2} + C.$$<p><strong>Apply $y(\tfrac{\pi}{4}) = \tfrac{6\sqrt2}{5}$</strong> ($\sec\tfrac{\pi}{4} = \sqrt2$, $\tan\tfrac{\pi}{4} = 1$):</p>$$\sqrt2\cdot\frac{6\sqrt2}{5} = \frac{12}{5} = 2 + \frac25 + C \;\Rightarrow\; C = 0.$$<p><strong>At $x = \tfrac{\pi}{3}$</strong> ($\sec\tfrac{\pi}{3} = 2$, $\tan\tfrac{\pi}{3} = \sqrt3$, so $\sqrt{\tan x} = 3^{1/4}$ and $(\tan x)^{5/2} = 3^{5/4}$):</p>$$2\,y = 2\cdot 3^{1/4} + \frac25\cdot 3^{5/4} \;\Rightarrow\; y\!\left(\tfrac{\pi}{3}\right) = 3^{1/4} + \frac15\cdot 3^{5/4} = 3^{1/4}\left(1 + \frac35\right) = \frac{8}{5}\,3^{1/4}.$$<p>Since $y(\tfrac{\pi}{3}) = \tfrac{4}{5}\alpha$:</p>$$\frac45\alpha = \frac85\,3^{1/4} \;\Rightarrow\; \alpha = 2\cdot 3^{1/4} \;\Rightarrow\; \alpha^4 = 16\cdot 3 = 48.$$<p><strong>Answer:</strong> 48</p></div></details>

From TestGuru · our mock-test platform

## You've read Differential Equations Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=differential-equations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fdifferential-equations%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/differential-equations/previous-year-questions/](https://jeenotes.in/mathematics/differential-equations/previous-year-questions/) · raw HTML: `offline/mathematics/differential-equations/previous-year-questions/index.html`_
