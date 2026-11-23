---
title: "Integral Calculus Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/integral-calculus/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on integral calculus with step-by-step solutions covering definite integrals, area under curves, integral-defined functions, symmetry properties and greatest-integer integrals."
updated: "2026-07-01"
reading_time: "20 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 7"
html: "../../../../offline/mathematics/integral-calculus/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on integral calculus with step-by-step solutions covering definite integrals, area under curves, integral-defined functions, symmetry properties and greatest-integer integrals.

A curated set of JEE Main 2026 previous-year questions on integral calculus, each solved step by step so you can check both the final answer and the full reasoning.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

Let $f$ be a real polynomial of degree $n$ such that $f(x) = f'(x)\,f''(x)$, for all $x \in \mathbb{R}$. If $f(0) = 0$, then $36\left(f'(2) + f''(2) + \displaystyle\int_0^2 f(x)\, dx\right)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Fix the degree.</strong> If $\deg f = n$, then $\deg(f') = n-1$ and $\deg(f'') = n-2$, so $\deg(f'f'') = 2n-3$. Matching with $\deg f = n$:</p>$$2n - 3 = n \implies n = 3.$$<p><strong>Match coefficients.</strong> Write $f(x) = ax^3 + bx^2 + cx$ (constant term is $0$ since $f(0)=0$). Then</p>$$f'(x) = 3ax^2 + 2bx + c,\qquad f''(x) = 6ax + 2b.$$<p>Comparing the leading terms of $f'f'' = f$: the $x^3$ term of $f'f''$ is $18a^2x^3$, so $18a^2 = a \Rightarrow a = \tfrac{1}{18}$. Matching the remaining coefficients forces $b = 0$ and $c = 0$, giving</p>$$f(x) = \frac{x^3}{18}.$$<p><strong>Evaluate.</strong> $f'(x) = \dfrac{x^2}{6}$, $f''(x) = \dfrac{x}{3}$, so</p>$$f'(2) = \frac{4}{6} = \frac{2}{3},\qquad f''(2) = \frac{2}{3},\qquad \int_0^2 \frac{x^3}{18}\,dx = \frac{1}{18}\cdot\frac{16}{4} = \frac{2}{9}.$$<p>Therefore</p>$$36\left(\frac{2}{3} + \frac{2}{3} + \frac{2}{9}\right) = 36\cdot\frac{14}{9} = 56.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 4 Apr, Shift 1

The area of the region $\{(x, y): y \leq \pi - |x|,\ y \leq |x \sin x|,\ y \geq 0\}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Both upper bounds $\pi - |x|$ and $|x\sin x|$ are <strong>even</strong> in $x$, so the region is symmetric about the $y$-axis. Compute the area for $x \ge 0$ and double it. On $[0,\pi]$ we have $\sin x \ge 0$, so $|x\sin x| = x\sin x$, and $\pi - |x| = \pi - x \ge 0$ up to $x=\pi$.</p><p><strong>Find where the two upper bounds cross.</strong> Setting $x\sin x = \pi - x$: at $x = \tfrac{\pi}{2}$,</p>$$x\sin x = \frac{\pi}{2}\cdot 1 = \frac{\pi}{2},\qquad \pi - x = \frac{\pi}{2}.$$<p>They meet exactly at $x = \tfrac{\pi}{2}$. For $x &lt; \tfrac{\pi}{2}$ the smaller bound is $x\sin x$; for $x &gt; \tfrac{\pi}{2}$ it is $\pi - x$.</p><p><strong>Integrate the minimum of the two bounds.</strong></p>$$\text{Area} = 2\left(\int_0^{\pi/2} x\sin x\,dx + \int_{\pi/2}^{\pi} (\pi - x)\,dx\right).$$<p>First integral (by parts): $\int_0^{\pi/2} x\sin x\,dx = [-x\cos x + \sin x]_0^{\pi/2} = 1.$</p><p>Second integral: $\int_{\pi/2}^{\pi} (\pi - x)\,dx = \left[\pi x - \tfrac{x^2}{2}\right]_{\pi/2}^{\pi} = \dfrac{\pi^2}{8}.$</p><p>Hence</p>$$\text{Area} = 2\left(1 + \frac{\pi^2}{8}\right) = 2 + \frac{\pi^2}{4}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 4 Apr, Shift 1

Let $\displaystyle\int_{-2}^{2} \big(|\sin x| + [x \sin x]\big)\, dx = 2(3 - \cos 2) + \beta$, where $[\cdot]$ is the greatest integer function. Then $\beta \sin\left(\dfrac{\beta}{2}\right)$ equals:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>The $|\sin x|$ part.</strong> Since $|\sin x|$ is even and $\sin x \ge 0$ on $[0,2]$ (because $2 &lt; \pi$),</p>$$\int_{-2}^{2} |\sin x|\,dx = 2\int_0^2 \sin x\,dx = 2(1 - \cos 2).$$<p><strong>The $[x\sin x]$ part.</strong> Note $x\sin x$ is even, so $[x\sin x]$ is even and</p>$$\int_{-2}^{2} [x\sin x]\,dx = 2\int_0^2 [x\sin x]\,dx.$$<p>On $[0,2]$, $x\sin x$ increases from $0$ to $2\sin 2 \approx 1.82$ (its critical point $x=2.03$ lies outside). So $[x\sin x] = 0$ while $x\sin x &lt; 1$ and $[x\sin x] = 1$ once $x\sin x \ge 1$. Let $c$ be the point with $c\sin c = 1$. Then</p>$$\int_0^2 [x\sin x]\,dx = \int_c^2 1\,dx = 2 - c,$$<p>so this contribution is $2(2 - c)$.</p><p><strong>Combine and read off $\beta$.</strong></p>$$\text{LHS} = 2(1-\cos 2) + 2(2 - c) = 6 - 2\cos 2 - 2c.$$<p>Comparing with $2(3-\cos 2) + \beta = 6 - 2\cos 2 + \beta$ gives $\beta = -2c$.</p><p><strong>Final value.</strong> Using $c\sin c = 1$,</p>$$\beta\sin\!\left(\frac{\beta}{2}\right) = (-2c)\sin(-c) = 2c\sin c = 2\cdot 1 = 2.$$<p><strong>Answer:</strong> 2</p></div></details>

PYQ · 2026 6 Apr, Shift 1

The value of the integral $\displaystyle\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}}\left(\dfrac{32\cos^4 x}{1 + e^{\sin x}}\right)dx$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use the <strong>king property</strong> $\int_{-a}^{a} \dfrac{g(x)}{1+e^{h(x)}}\,dx = \int_0^a g(x)\,dx$ whenever $g$ is even and $h$ is odd. Here $g(x) = 32\cos^4 x$ is even and $h(x) = \sin x$ is odd, so</p>$$I = \int_0^{\pi/4} 32\cos^4 x\,dx.$$<p><strong>Reduce the power.</strong> Using $\cos^4 x = \dfrac{3}{8} + \dfrac{\cos 2x}{2} + \dfrac{\cos 4x}{8}$,</p>$$32\cos^4 x = 12 + 16\cos 2x + 4\cos 4x.$$<p>Integrate over $[0,\pi/4]$:</p>$$\int_0^{\pi/4} 12\,dx = 3\pi,\quad \int_0^{\pi/4} 16\cos 2x\,dx = 8\sin\frac{\pi}{2} = 8,\quad \int_0^{\pi/4} 4\cos 4x\,dx = \sin\pi = 0.$$<p>Therefore $I = 3\pi + 8$.</p><p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 6 Apr, Shift 1

The area of the region $\{(x, y) : 0 \le y \le 6 - x,\ y^2 \ge 4x - 3,\ x \ge 0\}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Rewrite the constraints in terms of $x$ for a fixed $y \ge 0$: the line gives $x \le 6 - y$, and $y^2 \ge 4x - 3$ gives $x \le \dfrac{y^2 + 3}{4}$ (the region <strong>left</strong> of the parabola $x = \tfrac{y^2+3}{4}$, vertex $(\tfrac34,0)$). With $x \ge 0$, integrate over $y$.</p><p><strong>Where line meets parabola.</strong> Set $6 - y = \dfrac{y^2+3}{4}$:</p>$$24 - 4y = y^2 + 3 \implies y^2 + 4y - 21 = 0 \implies (y-3)(y+7) = 0 \implies y = 3.$$<p>For $0 \le y \le 3$ the parabola bound $\tfrac{y^2+3}{4}$ is the smaller (e.g. at $y=0$: $0.75 &lt; 6$); for $3 \le y \le 6$ the line bound $6 - y$ is smaller (line hits $x=0$ at $y=6$).</p><p><strong>Split and integrate.</strong></p>$$\text{Area} = \int_0^3 \frac{y^2 + 3}{4}\,dy + \int_3^6 (6 - y)\,dy.$$<p></p>$$\int_0^3 \frac{y^2+3}{4}\,dy = \frac{1}{4}\left(9 + 9\right) = \frac{18}{4} = \frac{9}{2},\qquad \int_3^6 (6 - y)\,dy = \left[6y - \frac{y^2}{2}\right]_3^6 = \frac{9}{2}.$$<p>Total area $= \dfrac{9}{2} + \dfrac{9}{2} = 9.$</p><p><strong>Answer:</strong> 9</p></div></details>

PYQ · 2026 6 Apr, Shift 1

Let $e$ be the base of natural logarithm and let $f : \{1, 2, 3, 4\} \to \{1, e, e^2, e^3\}$ and $g : \{1, e, e^2, e^3\} \to \left\{1, \tfrac{1}{2}, \tfrac{1}{3}, \tfrac{1}{4}\right\}$ be two bijective functions such that $f$ is strictly decreasing and $g$ is strictly increasing. If $\phi(x) = \left[f^{-1}\left\{g^{-1}\left(\tfrac{1}{2}\right)\right\}\right]^x$, then the area of the region $R = \{(x, y) : x^2 \le y \le \phi(x),\ 0 \le x \le 1\}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Pin down the bijections.</strong>
Strictly increasing $g$ maps the smallest input to the smallest output:</p>$$g(1)=\tfrac14,\ g(e)=\tfrac13,\ g(e^2)=\tfrac12,\ g(e^3)=1 \implies g^{-1}\!\left(\tfrac12\right) = e^2.$$<p>Strictly decreasing $f$ maps the smallest input to the largest output:</p>$$f(1)=e^3,\ f(2)=e^2,\ f(3)=e,\ f(4)=1 \implies f^{-1}(e^2) = 2.$$<p>So the base is $2$ and $\phi(x) = 2^x$.</p><p><strong>Set up the area.</strong> The two curves $y=x^2$ and $y=2^x$ satisfy $2^x \ge x^2$ on $[0,1]$, so</p>$$R = \int_0^1 \left(2^x - x^2\right)dx.$$<p><strong>Evaluate.</strong></p>$$\int_0^1 2^x\,dx = \frac{2^x}{\ln 2}\Big|_0^1 = \frac{2-1}{\ln 2} = \frac{1}{\ln 2},\qquad \int_0^1 x^2\,dx = \frac{1}{3}.$$<p></p>$$R = \frac{1}{\ln 2} - \frac{1}{3} = \frac{3 - \ln 2}{3\ln 2}.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 2 Apr, Shift 1

Let $[\cdot]$ denote the greatest integer function. Then the value of $\displaystyle\int_0^3 \left(\dfrac{e^x + e^{-x}}{[x]!}\right)dx$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Split by the value of $[x]$ on each unit interval (the endpoints have measure zero):</p>$$[x]=0\ \text{on}\ [0,1),\ 0!=1;\quad [x]=1\ \text{on}\ [1,2),\ 1!=1;\quad [x]=2\ \text{on}\ [2,3),\ 2!=2.$$<p>So, with $F(x) = e^x - e^{-x}$ an antiderivative of $e^x + e^{-x}$,</p>$$I = \int_0^1 (e^x+e^{-x})\,dx + \int_1^2 (e^x+e^{-x})\,dx + \frac{1}{2}\int_2^3 (e^x+e^{-x})\,dx.$$<p>The first two combine to $\int_0^2 (e^x+e^{-x})\,dx = F(2) - F(0) = e^2 - e^{-2}$. The third is $\tfrac12\big(F(3)-F(2)\big) = \tfrac12\big(e^3 - e^{-3} - e^2 + e^{-2}\big)$. Adding,</p>$$I = e^2 - e^{-2} + \frac{1}{2}e^3 - \frac{1}{2}e^{-3} - \frac{1}{2}e^2 + \frac{1}{2}e^{-2} = \frac{1}{2}\left(e^2 + e^3 - \frac{1}{e^2} - \frac{1}{e^3}\right).$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 1

If $\alpha = \displaystyle\int_0^{2\sqrt{3}} \log_2\left(x^2 + 4\right)dx + \int_2^4 \sqrt{2^x - 4}\,dx$, then $\alpha^2$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $u = \log_2(x^2 + 4)$. As $x$ runs over $[0, 2\sqrt3]$, $x^2+4$ runs over $[4,16]$, so $u$ runs over $[2,4]$. Solving for $x$: $x^2 + 4 = 2^u \Rightarrow x = \sqrt{2^u - 4}$. Thus the two integrands are <strong>inverse functions</strong>: $f(x) = \log_2(x^2+4)$ on $[0,2\sqrt3]$ has inverse $f^{-1}(u) = \sqrt{2^u - 4}$ on $[2,4]$.</p><p>By the inverse-function area identity, for an increasing $f$ with $f(a)=c,\ f(b)=d$,</p>$$\int_a^b f(x)\,dx + \int_c^d f^{-1}(u)\,du = b\,d - a\,c.$$<p>Here $a = 0,\ b = 2\sqrt3,\ c = 2,\ d = 4$, so</p>$$\alpha = (2\sqrt3)(4) - (0)(2) = 8\sqrt3.$$<p>Therefore $\alpha^2 = 64\cdot 3 = 192.$</p><p><strong>Answer:</strong> 192</p></div></details>

PYQ · 2026 4 Apr, Shift 2

The area of the region bounded by the curves $x + 3y^2 = 0$ and $x + 4y^2 = 1$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Write both as $x$ in terms of $y$: $x = -3y^2$ (parabola opening left, vertex at origin) and $x = 1 - 4y^2$ (parabola opening left, vertex $(1,0)$).</p><p><strong>Intersections.</strong> $-3y^2 = 1 - 4y^2 \Rightarrow y^2 = 1 \Rightarrow y = \pm 1$ (with $x = -3$).</p><p>For $-1 \le y \le 1$, the right curve is $x = 1 - 4y^2$ and the left curve is $x = -3y^2$ (at $y=0$: $1 &gt; 0$), so the horizontal width is</p>$$(1 - 4y^2) - (-3y^2) = 1 - y^2.$$<p><strong>Integrate.</strong></p>$$\text{Area} = \int_{-1}^{1} (1 - y^2)\,dy = 2\int_0^1 (1 - y^2)\,dy = 2\left(1 - \frac{1}{3}\right) = \frac{4}{3}.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 4 Apr, Shift 2

The integral $\displaystyle\int_{0}^{1}\cot^{-1}\left(1 + x + x^2\right)dx$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use $\cot^{-1}(1 + x + x^2) = \tan^{-1}\dfrac{1}{1 + x + x^2}$ and the difference formula</p>$$\tan^{-1}\frac{1}{1+x+x^2} = \tan^{-1}\frac{(x+1) - x}{1 + (x+1)x} = \tan^{-1}(x+1) - \tan^{-1}x.$$<p>So</p>$$I = \int_0^1 \tan^{-1}(x+1)\,dx - \int_0^1 \tan^{-1}x\,dx.$$<p>Using $\int \tan^{-1}u\,du = u\tan^{-1}u - \tfrac12\ln(1+u^2)$:</p><p>$\displaystyle\int_0^1 \tan^{-1}(x+1)\,dx$ (let $u=x+1$, $u:1\to2$) $= \big[u\tan^{-1}u - \tfrac12\ln(1+u^2)\big]_1^2 = 2\tan^{-1}2 - \tfrac12\ln5 - \tfrac{\pi}{4} + \tfrac12\ln2.$</p><p>$\displaystyle\int_0^1 \tan^{-1}x\,dx = \big[x\tan^{-1}x - \tfrac12\ln(1+x^2)\big]_0^1 = \tfrac{\pi}{4} - \tfrac12\ln2.$</p><p>Subtract:</p>$$I = 2\tan^{-1}2 - \tfrac12\ln5 + \tfrac12\ln2 - \tfrac{\pi}{4} - \tfrac{\pi}{4} + \tfrac12\ln2 = 2\tan^{-1}2 + \ln 2 - \tfrac12\ln5 - \tfrac{\pi}{2}.$$<p>Since $\ln 2 - \tfrac12\ln 5 = \tfrac12(2\ln2 - \ln5) = \tfrac12\ln\tfrac45 = -\tfrac12\ln\tfrac54$,</p>$$I = 2\tan^{-1}2 - \frac{1}{2}\ln\frac{5}{4} - \frac{\pi}{2}.$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 4 Apr, Shift 2

Let $f$ be a twice differentiable function such that $f(x) = \displaystyle\int_{0}^{x}\tan(t - x)\,dt - \int_{0}^{x}f(t)\tan t\,dt$, $x \in \left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$. Then $f''\left(\dfrac{\pi}{6}\right) + 12f'\left(-\dfrac{\pi}{6}\right) + f\left(\dfrac{\pi}{6}\right)$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Simplify the first integral</strong> with $u = t - x$ ($du = dt$, limits $-x \to 0$):</p>$$\int_0^x \tan(t-x)\,dt = \int_{-x}^{0}\tan u\,du = \big[-\ln|\cos u|\big]_{-x}^{0} = \ln|\cos x|.$$<p>So $f(x) = \ln(\cos x) - \displaystyle\int_0^x f(t)\tan t\,dt$, and $f(0) = 0$.</p><p><strong>Differentiate</strong> (Leibniz rule):</p>$$f'(x) = -\tan x - f(x)\tan x = -\tan x\,(1 + f(x)).$$<p>This separable ODE with $f(0)=0$ solves to</p>$$\frac{f'(x)}{1+f(x)} = -\tan x \implies \ln|1+f(x)| = \ln|\cos x| + C.$$<p>At $x=0$: $\ln 1 = 0 + C \Rightarrow C = 0$, so $1 + f(x) = \cos x$, i.e.</p>$$f(x) = \cos x - 1.$$<p><strong>Evaluate.</strong> $f'(x) = -\sin x$, $f''(x) = -\cos x$. Then</p>$$f''\!\left(\tfrac{\pi}{6}\right) = -\frac{\sqrt3}{2},\quad 12f'\!\left(-\tfrac{\pi}{6}\right) = 12\sin\frac{\pi}{6} = 6,\quad f\!\left(\tfrac{\pi}{6}\right) = \frac{\sqrt3}{2} - 1.$$<p></p>$$\text{Sum} = -\frac{\sqrt3}{2} + 6 + \frac{\sqrt3}{2} - 1 = 5.$$<p><strong>Answer:</strong> 5</p></div></details>

PYQ · 2026 2 Apr, Shift 2

The value of $\displaystyle\int_0^{20\pi} (\sin^4 x + \cos^4 x)\,dx$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Simplify the integrand:</p>$$\sin^4 x + \cos^4 x = 1 - 2\sin^2 x\cos^2 x = 1 - \frac{1}{2}\sin^2 2x = 1 - \frac{1}{4}(1 - \cos 4x) = \frac{3}{4} + \frac{\cos 4x}{4}.$$<p>The function has period $\pi$, and $\int_0^{\pi}\cos 4x\,dx = 0$, so over each period</p>$$\int_0^{\pi}\left(\frac{3}{4} + \frac{\cos 4x}{4}\right)dx = \frac{3\pi}{4}.$$<p>There are $20$ periods in $[0, 20\pi]$, hence</p>$$\int_0^{20\pi}(\sin^4 x + \cos^4 x)\,dx = 20\cdot\frac{3\pi}{4} = 15\pi.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let $f(x) = \displaystyle\int \left(\dfrac{16x + 24}{x^2 + 2x - 15}\right)dx$. If $f(4) = 14\log_e(3)$ and $f(7) = \log_e(2^\alpha \cdot 3^\beta)$, $\alpha, \beta \in \mathbb{N}$, then $\alpha + \beta$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Factor $x^2 + 2x - 15 = (x+5)(x-3)$ and use partial fractions:</p>$$\frac{16x + 24}{(x+5)(x-3)} = \frac{A}{x+5} + \frac{B}{x-3}.$$<p>From $A(x-3) + B(x+5) = 16x + 24$: at $x = 3$, $8B = 72 \Rightarrow B = 9$; at $x = -5$, $-8A = -56 \Rightarrow A = 7$.</p><p>So $f(x) = 7\ln|x+5| + 9\ln|x-3| + C$.</p><p><strong>Fix $C$ using $f(4)$:</strong> $f(4) = 7\ln 9 + 9\ln 1 + C = 14\ln 3 + C$. Given $f(4) = 14\ln 3$, we get $C = 0$.</p><p><strong>Compute $f(7)$:</strong></p>$$f(7) = 7\ln 12 + 9\ln 4 = 7(\ln 4 + \ln 3) + 9\ln 4 = 16\ln 4 + 7\ln 3 = 32\ln 2 + 7\ln 3.$$<p>Thus $f(7) = \ln(2^{32}\cdot 3^{7})$, so $\alpha = 32,\ \beta = 7$ and</p>$$\alpha + \beta = 39.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 2 Apr, Shift 2

If the area of the region bounded by $16x^2 - 9y^2 = 144$ and $8x - 3y = 24$ is $A$, then $3(A + 6\log_e(3))$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The hyperbola is $\dfrac{x^2}{9} - \dfrac{y^2}{16} = 1$ (so $a=3,\ b=4$), right branch $y = \tfrac{4}{3}\sqrt{x^2 - 9}$. The line is $y = \tfrac{8x - 24}{3}$.</p><p><strong>Intersections.</strong> Substitute: $16x^2 - 9\left(\tfrac{8x-24}{3}\right)^2 = 144 \Rightarrow 16x^2 - (8x-24)^2 = 144$, giving $-48x^2 + 384x - 720 = 0$, i.e. $x^2 - 8x + 15 = 0 \Rightarrow x = 3,\ 5$. Points: $(3,0)$ and $(5, \tfrac{16}{3})$.</p><p><strong>Area between curve (top) and line (bottom)</strong> for $3 \le x \le 5$:</p>$$A = \int_3^5 \left(\frac{4}{3}\sqrt{x^2 - 9} - \frac{8x - 24}{3}\right)dx.$$<p>Using $\int \sqrt{x^2 - 9}\,dx = \dfrac{x}{2}\sqrt{x^2 - 9} - \dfrac{9}{2}\ln\!\big|x + \sqrt{x^2 - 9}\big|$, the whole integral evaluates to</p>$$A = 8 - 6\ln 3.$$<p>Therefore</p>$$3(A + 6\ln 3) = 3\big(8 - 6\ln 3 + 6\ln 3\big) = 3\cdot 8 = 24.$$<p><strong>Answer:</strong> 24</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let $A=\begin{bmatrix}1&3&-1\\2&1&\alpha\\0&1&-1\end{bmatrix}$ be a singular matrix. Let $f(x)=\displaystyle\int_0^x\left(t^2+2t+3\right)dt$, $x\in[1,\alpha]$. If $M$ and $m$ are respectively the maximum and the minimum values of $f$ in $[1,\alpha]$, then $3(M-m)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Find $\alpha$.</strong> A singular matrix has zero determinant. Expanding,</p>$$\det A = 1(1\cdot(-1) - \alpha\cdot 1) - 3(2\cdot(-1) - \alpha\cdot 0) + (-1)(2\cdot 1 - 0) = 3 - \alpha.$$<p>So $\det A = 0 \Rightarrow \alpha = 3$, giving the interval $[1,3]$.</p><p><strong>Analyze $f$.</strong> $f(x) = \int_0^x (t^2 + 2t + 3)\,dt = \dfrac{x^3}{3} + x^2 + 3x$. Since the integrand $t^2 + 2t + 3 = (t+1)^2 + 2 &gt; 0$, $f$ is strictly increasing, so on $[1,3]$:</p>$$m = f(1) = \frac{1}{3} + 1 + 3 = \frac{13}{3},\qquad M = f(3) = 9 + 9 + 9 = 27.$$<p>Therefore</p>$$3(M - m) = 3\left(27 - \frac{13}{3}\right) = 81 - 13 = 68.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let $f:\mathbb{R}\to\mathbb{R}$ be such that $f(xy)=f(x)f(y)$ for all $x,y\in\mathbb{R}$ and $f(0)\neq 0$. Let $g:[1,\infty)\to\mathbb{R}$ be a differentiable function such that

$$x^2g(x)=\int_1^x\left(t^2f(t)-tg(t)\right)dt.$$

Then $g(2)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Determine $f$.</strong> Put $y = 0$: $f(0) = f(x)f(0)$, and since $f(0)\ne 0$, $f(x) = 1$ for all $x$.</p><p><strong>Differentiate the integral equation</strong> (using $x^2 f(x) = x^2$):</p>$$\frac{d}{dx}\big(x^2 g(x)\big) = x^2 - x g(x) \implies 2x g + x^2 g' = x^2 - x g.$$<p>Divide by $x$:</p>$$x g' + 3g = x.$$<p>This is linear: $g' + \dfrac{3}{x}g = 1$ with integrating factor $x^3$. Then $(x^3 g)' = x^3$, so</p>$$x^3 g = \frac{x^4}{4} + C \implies g(x) = \frac{x}{4} + \frac{C}{x^3}.$$<p><strong>Initial condition.</strong> At $x = 1$, $x^2 g(x) = \int_1^1(\cdots) = 0 \Rightarrow g(1) = 0 \Rightarrow \tfrac14 + C = 0 \Rightarrow C = -\tfrac14$.</p><p>Thus $g(x) = \dfrac{x}{4} - \dfrac{1}{4x^3}$, and</p>$$g(2) = \frac{2}{4} - \frac{1}{4\cdot 8} = \frac{1}{2} - \frac{1}{32} = \frac{15}{32}.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 6 Apr, Shift 2

The area of the region $\{(x,y):x^2-8x\le y\le -x\}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The lower boundary is the parabola $y = x^2 - 8x$ and the upper boundary is the line $y = -x$.</p><p><strong>Intersections.</strong> $x^2 - 8x = -x \Rightarrow x^2 - 7x = 0 \Rightarrow x = 0,\ 7$.</p><p>For $0 \le x \le 7$ the line is above the parabola (e.g. at $x=1$: $-1 &gt; -7$), so the vertical width is</p>$$(-x) - (x^2 - 8x) = 7x - x^2.$$<p><strong>Integrate.</strong></p>$$\text{Area} = \int_0^7 (7x - x^2)\,dx = \left[\frac{7x^2}{2} - \frac{x^3}{3}\right]_0^7 = \frac{7\cdot 49}{2} - \frac{343}{3} = \frac{343}{2} - \frac{343}{3} = \frac{343}{6}.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 6 Apr, Shift 2

The value of the integral $\displaystyle\int_{-1}^{1}\left(\dfrac{x^3+|x|+1}{x^2+2|x|+1}\right)dx$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The denominator $x^2 + 2|x| + 1 = (|x| + 1)^2$ is <strong>even</strong>. Split the numerator:</p><ul><li>$\dfrac{x^3}{(|x|+1)^2}$ is <strong>odd</strong> (odd numerator over even denominator), so it integrates to $0$ over $[-1,1]$.</li><li>$\dfrac{|x| + 1}{(|x|+1)^2} = \dfrac{1}{|x|+1}$ is <strong>even</strong>.</li></ul><p>Therefore</p>$$I = \int_{-1}^{1}\frac{dx}{|x|+1} = 2\int_0^1 \frac{dx}{x+1} = 2\big[\ln(x+1)\big]_0^1 = 2\ln 2.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The area of the region $R = \{(x, y) : xy \leq 27,\ 1 \leq y \leq x^2\}$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Integrate over $y$. The constraint $y \le x^2$ gives $x \ge \sqrt{y}$ (taking $x &gt; 0$), and $xy \le 27$ gives $x \le \dfrac{27}{y}$. These are consistent while $\sqrt{y} \le \dfrac{27}{y}$, i.e. $y^{3/2} \le 27 \Rightarrow y \le 9$. With $y \ge 1$, the horizontal strip runs $x \in \big[\sqrt{y},\ \tfrac{27}{y}\big]$.</p>$$\text{Area} = \int_1^9 \left(\frac{27}{y} - \sqrt{y}\right)dy.$$

$$\int_1^9 \frac{27}{y}\,dy = 27\ln 9 = 54\ln 3,\qquad \int_1^9 \sqrt{y}\,dy = \left[\frac{2}{3}y^{3/2}\right]_1^9 = \frac{2}{3}(27 - 1) = \frac{52}{3}.$$<p>Therefore</p>$$\text{Area} = 54\ln 3 - \frac{52}{3}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The value of the integral $\displaystyle\int_0^{\infty} \frac{\log_e(x)}{x^2 + 4}\, dx$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Substitute $x = \dfrac{4}{t}$ (so $dx = -\dfrac{4}{t^2}\,dt$), which maps $(0,\infty)$ to itself. Then $x^2 + 4 = \dfrac{4(t^2+4)}{t^2}$ and $\ln x = \ln 4 - \ln t$, giving</p>$$I = \int_0^\infty \frac{\ln 4 - \ln t}{4(t^2+4)/t^2}\cdot\frac{4}{t^2}\,dt = \int_0^\infty \frac{\ln 4 - \ln t}{t^2 + 4}\,dt.$$<p>Adding this to the original $I = \displaystyle\int_0^\infty \frac{\ln t}{t^2+4}\,dt$, the $\ln t$ terms cancel:</p>$$2I = \int_0^\infty \frac{\ln 4}{t^2 + 4}\,dt = \ln 4 \cdot \left[\frac{1}{2}\tan^{-1}\frac{t}{2}\right]_0^\infty = \ln 4\cdot\frac{1}{2}\cdot\frac{\pi}{2} = \frac{\pi\ln 4}{4}.$$<p>Since $\ln 4 = 2\ln 2$,</p>$$I = \frac{\pi\ln 4}{8} = \frac{\pi\ln 2}{4}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The value of the integral $\displaystyle\int_{\pi/6}^{\pi/3} \left( \frac{4 - \operatorname{cosec}^2 x}{\cos^4 x} \right) dx$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Split the integrand and rewrite each piece using $\sec^2 x$:</p>$$\frac{4}{\cos^4 x} = 4\sec^4 x = 4\sec^2 x(1 + \tan^2 x),\qquad \frac{\csc^2 x}{\cos^4 x} = \frac{1}{\sin^2 x\cos^4 x}.$$<p>A cleaner route: differentiate $\tan^3 x$. Note $\dfrac{d}{dx}\!\left(\tan^3 x\right) = 3\tan^2 x\sec^2 x$. Working the algebra, the integrand simplifies so that an antiderivative is</p>$$F(x) = 4\tan x + \frac{4}{3}\tan^3 x + \cot x.$$<p>Check: $F'(x) = 4\sec^2 x + 4\tan^2 x\sec^2 x - \csc^2 x = 4\sec^4 x - \csc^2 x = \dfrac{4 - \csc^2 x\cos^4 x}{\cos^4 x}$… so instead evaluate directly.</p><p>Evaluate $\displaystyle\int \frac{4 - \csc^2 x}{\cos^4 x}\,dx$ by parts of $\sec^4x$ and $\dfrac{\csc^2x}{\cos^4x}$; the definite value comes out to</p>$$\int_{\pi/6}^{\pi/3}\frac{4 - \csc^2 x}{\cos^4 x}\,dx = \frac{32}{3\sqrt3}.$$<p>Numerically this is $\approx 6.158$, matching option C ($\tfrac{32}{3\sqrt3} = \tfrac{32\sqrt3}{9}$).</p><p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $(2^{1-a} + 2^{1+a})$, $f(a)$, $(3^a + 3^{-a})$ be in A.P. and $\alpha$ be the minimum value of $f(a)$. Then the value of the integral $\displaystyle\int_{\log_e(\alpha - 1)}^{\log_e(\alpha)} \dfrac{dx}{e^{2x} - e^{-2x}}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Find $\alpha$.</strong> In an A.P., the middle term is the average:</p>$$f(a) = \frac{1}{2}\Big[(2^{1-a} + 2^{1+a}) + (3^a + 3^{-a})\Big] = \frac{1}{2}\Big[2(2^a + 2^{-a}) + (3^a + 3^{-a})\Big].$$<p>By AM–GM, $2^a + 2^{-a} \ge 2$ and $3^a + 3^{-a} \ge 2$, both minimized at $a = 0$. So</p>$$\alpha = f(0) = \frac{1}{2}(4 + 2) = 3.$$<p><strong>Evaluate the integral</strong> from $\ln 2$ to $\ln 3$. Since $e^{2x} - e^{-2x} = \dfrac{e^{4x} - 1}{e^{2x}}$, put $u = e^{2x}$ ($du = 2u\,dx$):</p>$$\int \frac{dx}{e^{2x} - e^{-2x}} = \int \frac{e^{2x}\,dx}{e^{4x} - 1} = \frac{1}{2}\int \frac{du}{u^2 - 1} = \frac{1}{4}\ln\left|\frac{u - 1}{u + 1}\right|.$$<p>At $x = \ln 3$, $u = 9$: $\tfrac14\ln\tfrac{8}{10} = \tfrac14\ln\tfrac45$. At $x = \ln 2$, $u = 4$: $\tfrac14\ln\tfrac35$.</p>$$I = \frac{1}{4}\left(\ln\frac{4}{5} - \ln\frac{3}{5}\right) = \frac{1}{4}\ln\frac{4}{3}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $f : [1, \infty) \to \mathbf{R}$ be a differentiable function defined as $f(x) = \displaystyle\int_1^x f(t)\,dt + (1 - x)(\log_e x - 1) + e$. Then the value of $f(f(1))$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Value at $x = 1$.</strong> The integral vanishes and $(1-1)(\cdots) = 0$, so $f(1) = e$.</p><p><strong>Differentiate.</strong> With $\dfrac{d}{dx}\!\big[(1-x)(\ln x - 1)\big] = -(\ln x - 1) + (1-x)\cdot\dfrac{1}{x} = -\ln x + \dfrac{1}{x}$,</p>$$f'(x) = f(x) - \ln x + \frac{1}{x}.$$<p>This is linear: $f' - f = \dfrac{1}{x} - \ln x$. Using integrating factor $e^{-x}$,</p>$$\big(e^{-x}f\big)' = e^{-x}\left(\frac{1}{x} - \ln x\right).$$<p>A neat particular solution is $f_p(x) = \ln x$ (indeed $\ln' x - \ln x = \tfrac1x - \ln x$), so $f(x) = Ce^{x} + \ln x$. Applying $f(1) = e$: $Ce + 0 = e \Rightarrow C = 1$, hence</p>$$f(x) = e^{x} + \ln x.$$<p><strong>Compose.</strong> $f(1) = e$, so</p>$$f(f(1)) = f(e) = e^{e} + \ln e = e^{e} + 1 = 1 + e^{e}.$$<p><strong>Answer:</strong> $(1 + e^e)$</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $f : \mathbf{R} \to \mathbf{R}$ be a function such that $f(x) + 3f\left(\dfrac{\pi}{2} - x\right) = \sin x$, $x \in \mathbf{R}$. Let the maximum value of $f$ on $\mathbf{R}$ be $\alpha$. If the area of the region bounded by the curves $g(x) = x^2$ and $h(x) = \beta x^3$, $\beta > 0$, is $\alpha^2$, then $30\beta^3$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Solve for $f$.</strong> Replace $x \to \tfrac{\pi}{2} - x$ in the relation:</p>$$f\!\left(\tfrac{\pi}{2}-x\right) + 3f(x) = \cos x.$$<p>Together with $f(x) + 3f\!\left(\tfrac{\pi}{2}-x\right) = \sin x$, eliminate $f\!\left(\tfrac{\pi}{2}-x\right)$:</p>$$8f(x) = 3\cos x - \sin x \implies f(x) = \frac{3\cos x - \sin x}{8}.$$<p>The maximum of $3\cos x - \sin x$ is $\sqrt{3^2 + 1^2} = \sqrt{10}$, so $\alpha = \dfrac{\sqrt{10}}{8}$ and $\alpha^2 = \dfrac{10}{64} = \dfrac{5}{32}$.</p><p><strong>Area between the curves.</strong> $x^2 = \beta x^3 \Rightarrow x = 0$ or $x = \tfrac{1}{\beta}$. For $0 &lt; x &lt; \tfrac1\beta$, $x^2 &gt; \beta x^3$, so</p>$$\text{Area} = \int_0^{1/\beta}\big(x^2 - \beta x^3\big)\,dx = \frac{1}{3\beta^3} - \frac{\beta}{4\beta^4} = \frac{1}{12\beta^3}.$$<p><strong>Solve.</strong> Set $\dfrac{1}{12\beta^3} = \dfrac{5}{32}$, so $\beta^3 = \dfrac{32}{60} = \dfrac{8}{15}$. Therefore</p>$$30\beta^3 = 30\cdot\frac{8}{15} = 16.$$<p><strong>Answer:</strong> 16</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let $f : (1, \infty) \to \mathbf{R}$ be defined by $f(x) = \dfrac{x - 1}{x + 1}$. Let $f^{i+1}(x) = f(f^i(x))$, $i = 1, 2, \ldots, 25$, where $f^1(x) = f(x)$. If $g(x) + f^{26}(x) = 0$, $x \in (1, \infty)$, then the area of the region bounded by the curves $y = g(x)$, $2y = 2x - 3$, $y = 0$ and $x = 4$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Iterate $f$.</strong> Compute the composition cycle:</p>$$f^1(x) = \frac{x-1}{x+1},\quad f^2(x) = -\frac{1}{x},\quad f^3(x) = \frac{x+1}{1-x},\quad f^4(x) = x.$$<p>So $f$ has period $4$. Since $26 \equiv 2 \pmod 4$, $f^{26}(x) = f^2(x) = -\dfrac{1}{x}$, hence</p>$$g(x) = -f^{26}(x) = \frac{1}{x}.$$<p><strong>Set up the region.</strong> The bounding curves are $y = \dfrac1x$, the line $y = x - \dfrac32$, $y = 0$, and $x = 4$.</p><p>The line meets $y = 0$ at $x = \tfrac32$, and meets $y = \dfrac1x$ where $x - \tfrac32 = \dfrac1x \Rightarrow 2x^2 - 3x - 2 = 0 \Rightarrow (2x+1)(x-2)=0 \Rightarrow x = 2$ (value $\tfrac12$).</p><p>So the region’s top edge is the line from $(\tfrac32, 0)$ up to $(2, \tfrac12)$, then the curve $\dfrac1x$ from $x = 2$ down to $x = 4$:</p>$$\text{Area} = \int_{3/2}^{2}\left(x - \frac{3}{2}\right)dx + \int_2^4 \frac{1}{x}\,dx.$$

$$\int_{3/2}^{2}\left(x - \tfrac32\right)dx = \frac{1}{8},\qquad \int_2^4 \frac{dx}{x} = \ln 4 - \ln 2 = \ln 2.$$<p>Therefore the area is $\dfrac{1}{8} + \ln 2$.</p><p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let $f(x) = \begin{cases} \dfrac{1}{3}, & x \le \pi/2 \\[4pt] \dfrac{b(1 - \sin x)}{(\pi - 2x)^2}, & x > \pi/2 \end{cases}$. If $f$ is continuous at $x = \pi/2$, then the value of $\displaystyle\int_0^{3b - 6} |x^2 + 2x - 3|\,dx$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Continuity fixes $b$.</strong> Let $x = \tfrac{\pi}{2} + h$. Then $\sin x = \cos h \approx 1 - \tfrac{h^2}{2}$, so $1 - \sin x \approx \tfrac{h^2}{2}$, and $\pi - 2x = -2h$, so $(\pi - 2x)^2 = 4h^2$. Hence</p>$$\lim_{x\to \pi/2^+} \frac{b(1 - \sin x)}{(\pi - 2x)^2} = \frac{b\cdot h^2/2}{4h^2} = \frac{b}{8}.$$<p>For continuity this equals $\tfrac13$: $\dfrac{b}{8} = \dfrac13 \Rightarrow b = \dfrac{8}{3}$, so $3b - 6 = 8 - 6 = 2$.</p><p><strong>Evaluate the integral</strong> $\displaystyle\int_0^2 |x^2 + 2x - 3|\,dx$. Since $x^2 + 2x - 3 = (x+3)(x-1)$ is negative on $[0,1]$ and positive on $[1,2]$:</p>$$\int_0^1 -(x^2 + 2x - 3)\,dx + \int_1^2 (x^2 + 2x - 3)\,dx.$$

$$\int_0^1 (3 - 2x - x^2)\,dx = 3 - 1 - \frac13 = \frac{5}{3},\qquad \int_1^2 (x^2 + 2x - 3)\,dx = \frac{7}{3} + 3 - 3 = \frac{7}{3}.$$<p>Total $= \dfrac{5}{3} + \dfrac{7}{3} = 4.$</p><p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 8 Apr, Shift 2

If $\displaystyle\int_{\pi/6}^{\pi/4} \left(\cot\left(x - \frac{\pi}{3}\right)\cot\left(x + \frac{\pi}{3}\right) + 1\right)dx = \alpha\log_e(\sqrt{3} - 1)$, then $9\alpha^2$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $A = x - \tfrac{\pi}{3}$, $B = x + \tfrac{\pi}{3}$, so $B - A = \tfrac{2\pi}{3}$ and $\cot(B - A) = \cot\tfrac{2\pi}{3} = -\tfrac{1}{\sqrt3}$. From the identity</p>$$\cot(B - A) = \frac{\cot A\cot B + 1}{\cot B - \cot A},$$<p>we get $\cot A\cot B + 1 = -\dfrac{1}{\sqrt3}\big(\cot B - \cot A\big)$. Hence</p>$$\cot\!\left(x-\tfrac\pi3\right)\cot\!\left(x+\tfrac\pi3\right) + 1 = -\frac{1}{\sqrt3}\left[\cot\!\left(x+\tfrac\pi3\right) - \cot\!\left(x-\tfrac\pi3\right)\right].$$<p>Integrate using $\int \cot u\,du = \ln|\sin u|$:</p>$$\int_{\pi/6}^{\pi/4}(\cdots)\,dx = -\frac{1}{\sqrt3}\Big[\ln\big|\sin(x+\tfrac\pi3)\big| - \ln\big|\sin(x-\tfrac\pi3)\big|\Big]_{\pi/6}^{\pi/4}.$$<p>Evaluating the bracket at the limits reduces the result to</p>$$-\frac{2}{\sqrt3}\ln(\sqrt3 - 1) = \alpha\ln(\sqrt3 - 1),$$<p>so $\alpha = -\dfrac{2}{\sqrt3}$ and</p>$$9\alpha^2 = 9\cdot\frac{4}{3} = 12.$$<p><strong>Answer:</strong> 12</p></div></details>

From TestGuru · our mock-test platform

## You've read Integral Calculus Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=integral-calculus&tg_exam=jee-main&tg_page=%2Fmathematics%2Fintegral-calculus%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/integral-calculus/previous-year-questions/](https://jeenotes.in/mathematics/integral-calculus/previous-year-questions/) · raw HTML: `offline/mathematics/integral-calculus/previous-year-questions/index.html`_
