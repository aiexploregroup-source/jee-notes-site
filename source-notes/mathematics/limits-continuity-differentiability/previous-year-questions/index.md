---
title: "Limits, Continuity & Differentiability Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/limits-continuity-differentiability/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Limits, Continuity and Differentiability with step-by-step solutions covering L'Hopital-free limit tricks, points of non-differentiability, greatest-integer discontinuities, functional equations and inverse-trig differentiation."
updated: "2026-07-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 12 of 13"
html: "../../../../offline/mathematics/limits-continuity-differentiability/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Limits, Continuity and Differentiability with step-by-step solutions covering L'Hopital-free limit tricks, points of non-differentiability, greatest-integer discontinuities, functional equations and inverse-trig differentiation.

A curated set of JEE Main 2026 previous-year questions on Limits, Continuity and Differentiability, each solved step by step so you can check both the final answer and the reasoning.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

If $y = \tan^{-1}\left(\dfrac{3\cos x - 4\sin x}{4\cos x + 3\sin x}\right) + 2\tan^{-1}\left(\dfrac{x}{1 + \sqrt{1 - x^2}}\right)$, then $\dfrac{dy}{dx}$ at $x = \dfrac{\sqrt{3}}{2}$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>First term.</strong> Divide numerator and denominator by $4\cos x$:</p>$$\tan^{-1}\!\left(\dfrac{\tfrac34 - \tan x}{1 + \tfrac34\tan x}\right) = \tan^{-1}\tfrac34 - \tan^{-1}(\tan x) = \tan^{-1}\tfrac34 - x$$<p>so its derivative is $-1$.</p><p><strong>Second term.</strong> Put $x = \sin\theta$. Then</p>$$\dfrac{x}{1+\sqrt{1-x^2}} = \dfrac{\sin\theta}{1+\cos\theta} = \tan\dfrac{\theta}{2}$$<p></p>$$\Rightarrow\ 2\tan^{-1}\!\left(\tan\tfrac{\theta}{2}\right) = \theta = \sin^{-1}x,\qquad \dfrac{d}{dx}\sin^{-1}x = \dfrac{1}{\sqrt{1-x^2}}$$<p><strong>Combine:</strong></p>$$\dfrac{dy}{dx} = -1 + \dfrac{1}{\sqrt{1-x^2}}$$<p>At $x = \dfrac{\sqrt3}{2}$: $\sqrt{1-\tfrac34} = \tfrac12$, so</p>$$\dfrac{dy}{dx} = -1 + 2 = 1$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 4 Apr, Shift 1

The number of points, at which the function $f(x) = \max\{6x,\ 2 + 3x^2\} + |x - 1|\left|\cos\left|x^2 - \dfrac{1}{4}\right|\right|$, $x \in (-\pi, \pi)$, is not differentiable, is _____.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Part 1 — the $\max$ term.</strong> Compare $6x$ and $2+3x^2$:</p>$$2+3x^2 - 6x = 3x^2 - 6x + 2 = 0 \ \Rightarrow\ x = 1 \pm \tfrac{1}{\sqrt3}\ (\approx 0.423,\ 1.577)$$<p>The two branches swap dominance at these two points, giving corners at</p>$$x = 1-\tfrac{1}{\sqrt3},\quad x = 1+\tfrac{1}{\sqrt3}\qquad(\textbf{2 points}).$$<p><strong>Part 2 — the $|x-1|$ factor.</strong> $|x-1|$ has a corner at $x=1$, and there $\left|\cos\left|1-\tfrac14\right|\right| = |\cos 0.75| \ne 0$, so the product is non-differentiable at $x=1$ $(\textbf{1 point})$. (The $\max$ term equals $6x$ there and is smooth.)</p><p><strong>Part 3 — zeros of $\left|\cos|x^2-\tfrac14|\right|$.</strong> Since $\cos|u| = \cos u$ is smooth through $u=0$, the inner $\left|x^2-\tfrac14\right|$ creates <strong>no</strong> corner at $x=\pm\tfrac12$. But $|\cos(\cdot)|$ has a V-corner wherever $\cos = 0$:</p>$$\left|x^2 - \tfrac14\right| = \tfrac{\pi}{2} + k\pi \ \Rightarrow\ x^2 = \tfrac14 + \left(\tfrac{\pi}{2}+k\pi\right)$$<p>For $x^2 &lt; \pi^2$ this gives $|x| \approx 1.349,\ 2.228,\ 2.847$, i.e. the six points $x \approx \pm1.349,\ \pm2.228,\ \pm2.847$. At each, $|x-1|\ne 0$, so the product keeps the corner $(\textbf{6 points}).$</p><p><strong>Total:</strong> $2 + 1 + 6 = 9$.</p><p><strong>Answer:</strong> 9</p></div></details>

PYQ · 2026 6 Apr, Shift 1

The value of $\displaystyle\lim_{x \to 0}\left(\dfrac{x^2 \sin^2 x}{x^2 - \sin^2 x}\right)$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use $\sin x = x - \dfrac{x^3}{6} + O(x^5)$.</p><p><strong>Denominator:</strong></p>$$x^2 - \sin^2 x = x^2 - \left(x^2 - \dfrac{x^4}{3} + O(x^6)\right) = \dfrac{x^4}{3} + O(x^6)$$<p><strong>Numerator:</strong></p>$$x^2 \sin^2 x = x^2\left(x^2 + O(x^4)\right) = x^4 + O(x^6)$$<p>Therefore</p>$$\lim_{x\to 0}\dfrac{x^4 + O(x^6)}{\tfrac{x^4}{3} + O(x^6)} = \dfrac{1}{\tfrac13} = 3$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 1

If $\displaystyle\lim_{x \to 2} \dfrac{\sin\left(x^3 - 5x^2 + ax + b\right)}{\left(\sqrt{x-1} - 1\right) \log_e(x-1)} = m$, then $a + b + m$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $t = x - 2$. As $x\to 2$, $\sqrt{x-1}-1 = \sqrt{1+t}-1 \sim \tfrac{t}{2}$ and $\log_e(x-1) = \log(1+t) \sim t$, so the <strong>denominator</strong> $\sim \dfrac{t^2}{2}$ (order $t^2$).</p><p>For a finite non-zero limit the numerator must also be order $t^2$. Let $P(x) = x^3 - 5x^2 + ax + b$.</p><p><strong>Condition $P(2)=0$</strong> (so $\sin P \to 0$): $\ 8 - 20 + 2a + b = 0 \Rightarrow 2a + b = 12$.</p><p><strong>Condition $P'(2)=0$</strong> (so $P$ is order $t^2$): $\ P'(x) = 3x^2 - 10x + a$, and $P'(2) = a - 8 = 0 \Rightarrow a = 8$, hence $b = 12 - 16 = -4$.</p><p>Then $P(x) = x^3 - 5x^2 + 8x - 4 = (x-2)^2(x-1) = t^2(1+t)$, so $\sin P \sim t^2$.</p>$$m = \lim_{t\to 0}\dfrac{t^2}{t^2/2} = 2$$

$$a + b + m = 8 - 4 + 2 = 6$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 1

The number of critical points of the function $f(x) = \begin{cases} \left|\dfrac{\sin x}{x}\right| & , x \neq 0 \\ 1 & , x = 0 \end{cases}$ in the interval $(-2\pi, 2\pi)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $h(x) = \dfrac{\sin x}{x}$, so $f = |h|$. Critical points are where $f'=0$ or $f'$ fails to exist.</p><p><strong>Corners (where $h=0$ and changes sign).</strong> In $(-2\pi,2\pi)$, $\sin x = 0$ at $x = \pm\pi$ (not $x=0$, since $h(0)=1$). There $|h|$ has a V-corner $(\textbf{2 points}).$</p><p><strong>Stationary points of $|h|$</strong> (interior maxima/minima), where $h'(x)=0$:</p>$$h'(x) = \dfrac{x\cos x - \sin x}{x^2} = 0 \ \Rightarrow\ \tan x = x$$<p>In $(-2\pi, 2\pi)$ the solutions are $x = 0$ (the central maximum, $h(0)=1$) and $x = \pm 4.4934$ $(\textbf{3 points}).$</p><p><strong>Total:</strong> $2 + 3 = 5$.</p><p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 4 Apr, Shift 2

Let $f(x) = \begin{cases} e^{x-1} & , x < 0 \\ x^2 - 5x + 6 & , x \ge 0 \end{cases}$ and $g(x) = f(|x|) + |f(x)|$. If the number of points where $g$ is not continuous and is not differentiable are $\alpha$ and $\beta$ respectively, then $\alpha + \beta$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>$f(|x|)$.</strong> Since $|x|\ge 0$, this is always $|x|^2 - 5|x| + 6 = x^2 - 5|x| + 6$ — continuous everywhere, with a single corner at $x=0$ (from $|x|$).</p><p><strong>$|f(x)|$.</strong> For $x&lt;0$, $|e^{x-1}| = e^{x-1}$ (smooth, positive). For $x\ge 0$, $|x^2-5x+6| = |(x-2)(x-3)|$, which has V-corners at $x=2,3$.</p><p>At $x=0$, $f$ itself jumps: $\displaystyle\lim_{x\to 0^-}e^{x-1} = e^{-1}$ but $f(0)=6$. So $|f(x)|$ (and hence $g$) jumps at $x=0$:</p>$$g(0^-) = f(0) + e^{-1} = 6 + e^{-1},\qquad g(0^+) = 6 + 6 = 12.$$<p><strong>Continuity.</strong> $g$ is discontinuous only at $x=0$ $\Rightarrow \alpha = 1$.</p><p><strong>Differentiability.</strong> Non-differentiable at $x=0$ (jump/corner) and at $x=2,3$ (corners of $|(x-2)(x-3)|$) $\Rightarrow \beta = 3$.</p>$$\alpha + \beta = 1 + 3 = 4$$<p><strong>Answer:</strong> 4</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let $f(x)$ be a polynomial of degree 5, and have extrema at $x = 1$ and $x = -1$. If $\displaystyle\lim_{x \to 0}\left(\dfrac{f(x)}{x^3}\right) = -5$, then $f(2) - f(-2)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The finite limit $\displaystyle\lim_{x\to 0}\dfrac{f(x)}{x^3} = -5$ forces $f(0)=f'(0)=f''(0)=0$ and the $x^3$-coefficient to be $-5$:</p>$$f(x) = -5x^3 + a x^4 + b x^5$$<p><strong>Extrema at $x=\pm 1$:</strong> $f'(x) = -15x^2 + 4a x^3 + 5b x^4$.</p>$$f'(1) = -15 + 4a + 5b = 0,\qquad f'(-1) = -15 - 4a + 5b = 0$$<p>Adding: $-30 + 10b = 0 \Rightarrow b = 3$. Subtracting: $8a = 0 \Rightarrow a = 0$.</p><p>So $f(x) = -5x^3 + 3x^5$, which is <strong>odd</strong>, hence $f(-2) = -f(2)$:</p>$$f(2) - f(-2) = 2f(2) = 2\left(-5\cdot 8 + 3\cdot 32\right) = 2(56) = 112$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 2 Apr, Shift 2

The number of points in the interval $[2, 4]$, at which the function $f(x) = \left[x^2 - x - \dfrac{1}{2}\right]$, where $[\cdot]$ denotes the greatest integer function, is discontinuous, is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $u(x) = x^2 - x - \tfrac12$. On $[2,4]$, $u'(x) = 2x - 1 &gt; 0$, so $u$ is strictly increasing and continuous with</p>$$u(2) = 4 - 2 - \tfrac12 = \tfrac32,\qquad u(4) = 16 - 4 - \tfrac12 = \tfrac{23}{2}.$$<p>$[u(x)]$ jumps exactly where $u(x)$ passes through an integer. As $u$ rises continuously from $1.5$ to $11.5$, it attains each integer in</p>$$\{2, 3, 4, 5, 6, 7, 8, 9, 10, 11\}$$<p>once, giving $10$ discontinuity points. (Endpoints $u=1.5,\ 11.5$ are non-integers, so no boundary issue.)</p><p><strong>Answer:</strong> 10</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let $\displaystyle\lim_{x\to 2}\dfrac{(\tan(x-2))\left(rx^2+(p-2)x-2p\right)}{(x-2)^2}=5$ for some $r,p\in\mathbb{R}$. If the set of all possible values of $q$, such that the roots of the equation $rx^2-px+q=0$ lie in $(0,2)$, is the interval $(\alpha,\beta)$, then $4(\alpha+\beta)$ equals:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Find $r,p$.</strong> As $x\to 2$, $\tan(x-2)\to 0$, so the quadratic must vanish at $x=2$:</p>$$4r + 2(p-2) - 2p = 4r - 4 = 0 \ \Rightarrow\ r = 1.$$<p>Then $x^2 + (p-2)x - 2p = (x-2)(x+p)$, and using $\tan(x-2)\sim (x-2)$:</p>$$\lim_{x\to 2}\dfrac{(x-2)\,(x-2)(x+p)}{(x-2)^2} = (2+p) = 5 \ \Rightarrow\ p = 3.$$<p><strong>Roots of $x^2 - 3x + q = 0$ in $(0,2)$.</strong> Let $\phi(x) = x^2 - 3x + q$. Both roots lie in $(0,2)$ iff:</p>$$\phi(0) &gt; 0:\ q &gt; 0,\qquad \phi(2) &gt; 0:\ 4 - 6 + q &gt; 0 \Rightarrow q &gt; 2,$$<p></p>$$\text{discriminant} \ge 0:\ 9 - 4q \ge 0 \Rightarrow q \le \tfrac94,\qquad 0 &lt; \tfrac32 &lt; 2\ (\text{vertex, OK}).$$<p>So $q \in (2, \tfrac94)$, giving $\alpha = 2,\ \beta = \tfrac94$:</p>$$4(\alpha + \beta) = 4\left(2 + \tfrac94\right) = 4\cdot\tfrac{17}{4} = 17$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let $f(x)=\begin{cases}x^3+8;&x<0\\x^2-4;&x\ge 0\end{cases}$ and $g(x)=\begin{cases}(x-8)^{1/3};&x<0\\(x+4)^{1/2};&x\ge 0\end{cases}$. Then the number of points, where the function $g\circ f$ is discontinuous, is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Discontinuities of $g(f(x))$ arise where $f$ jumps, or where a continuous $f$ crosses $0$ (the switch/discontinuity input of $g$, since $\displaystyle\lim_{u\to 0^-}(u-8)^{1/3} = -2 \ne 2 = \lim_{u\to 0^+}(u+4)^{1/2}$).</p><p><strong>$x = 0$ ($f$ jumps).</strong> $f(0^-) = 8 \Rightarrow g = \sqrt{12}$; $\ f(0^+) = -4 \Rightarrow g = (-12)^{1/3} = -\sqrt[3]{12}$. Left and right limits differ $\Rightarrow$ discontinuous.</p><p><strong>$f(x) = 0$ with $f$ continuous.</strong></p><ul><li>$x&lt;0$: $x^3 + 8 = 0 \Rightarrow x = -2$. As $x$ passes $-2$, $f$ crosses $0$, so $g\circ f$ jumps between $-2$ and $2 \Rightarrow$ discontinuous.</li><li>$x\ge 0$: $x^2 - 4 = 0 \Rightarrow x = 2$. Again $f$ crosses $0$, so $g\circ f$ jumps between $-2$ and $2 \Rightarrow$ discontinuous.</li></ul><p>Discontinuity points: $x = -2,\ 0,\ 2$ — a total of $3$.</p><p><strong>Answer:</strong> 3</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The product of all possible values of $\alpha$, for which $\displaystyle\lim_{x \to 0} \left( \dfrac{1 - \cos(\alpha x)\cos((\alpha+1)x)\cos((\alpha+2)x)}{\sin^2((\alpha+1)x)} \right) = 2$, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use the standard expansion (each $\cos(ax) \approx 1 - \tfrac{a^2x^2}{2}$, cross terms are $O(x^4)$):</p>$$1 - \cos(a_1 x)\cos(a_2 x)\cos(a_3 x) \approx \dfrac{a_1^2 + a_2^2 + a_3^2}{2}\,x^2,\qquad \sin^2((\alpha+1)x) \sim (\alpha+1)^2 x^2.$$<p>With $a_1=\alpha,\ a_2=\alpha+1,\ a_3=\alpha+2$:</p>$$\dfrac{\tfrac12\left(\alpha^2 + (\alpha+1)^2 + (\alpha+2)^2\right)}{(\alpha+1)^2} = 2$$<p></p>$$\alpha^2 + (\alpha+1)^2 + (\alpha+2)^2 = 3\alpha^2 + 6\alpha + 5$$<p></p>$$3\alpha^2 + 6\alpha + 5 = 4(\alpha+1)^2 = 4\alpha^2 + 8\alpha + 4 \ \Rightarrow\ \alpha^2 + 2\alpha - 1 = 0$$<p>Product of roots $= \dfrac{-1}{1} = -1$ (roots are $-1 \pm \sqrt2$).</p><p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Let $f : \mathbb{R} \to \mathbb{R}$ be a differentiable function such that $f\left( \dfrac{x+y}{3} \right) = \dfrac{f(x) + f(y)}{3}$ for all $x, y \in \mathbb{R}$, and $f'(0) = 3$. Then the minimum value of the function $g(x) = 3 + e^x f(x)$, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Determine $f$.</strong> Put $x=y=0$: $f(0) = \tfrac{2}{3}f(0) \Rightarrow f(0) = 0$. Put $y=0$: $f\!\left(\tfrac{x}{3}\right) = \tfrac{f(x)}{3}$. A linear $f(x) = cx$ satisfies the equation, and $f'(0)=c=3$, so</p>$$f(x) = 3x.$$<p><strong>Minimise $g$.</strong> $g(x) = 3 + 3x e^x$, so</p>$$g'(x) = 3e^x(1 + x) = 0 \ \Rightarrow\ x = -1,$$<p>and $g''(-1) = 3e^{-1}(2 + x)\big|_{x=-1} = 3e^{-1} &gt; 0$ (minimum).</p>$$g(-1) = 3 + 3(-1)e^{-1} = 3 - \dfrac{3}{e} = 3\left(\dfrac{e-1}{e}\right)$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $f(x) = \displaystyle\lim_{y \to 0} \dfrac{(1 - \cos(xy))\tan(xy)}{y^3}$. Then the number of solutions of the equation $f(x) = \sin x$, $x \in \mathbf{R}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Evaluate $f(x)$.</strong> As $y\to 0$: $\ 1 - \cos(xy) \sim \dfrac{(xy)^2}{2} = \dfrac{x^2 y^2}{2}$ and $\tan(xy) \sim xy$, so</p>$$f(x) = \lim_{y\to 0}\dfrac{\tfrac{x^2 y^2}{2}\cdot xy}{y^3} = \dfrac{x^3}{2}.$$<p><strong>Solve $\dfrac{x^3}{2} = \sin x$, i.e. $x^3 = 2\sin x$.</strong> Both sides are odd, so solutions are symmetric about $0$.</p><ul><li>$x = 0$ is a solution.</li><li>For $x&gt;0$: since $\sin x \le 1$, any root needs $x^3 \le 2 \Rightarrow x \le 2^{1/3} \approx 1.26$. On $(0, 1.26]$, $x^3 - 2\sin x$ goes from $0^-$ to positive, giving exactly one root $x \approx 1.236$.</li><li>By oddness, one matching root at $x \approx -1.236$.</li></ul><p>Total: $3$ solutions.</p><p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $f(x)$ and $g(x)$ be twice differentiable functions satisfying $f''(x) = g''(x)$ for all $x \in \mathbf{R}$, $f'(1) = 2g'(1) = 4$ and $g(2) = 3f(2) = 9$. Then $f(25) - g(25)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$f'' = g''$ means $(f - g)'' = 0$, so $f - g$ is <strong>linear</strong>: $f(x) - g(x) = cx + d$.</p><p><strong>Slope $c$.</strong> $f'(1) = 4$ and $2g'(1) = 4 \Rightarrow g'(1) = 2$, so</p>$$c = (f-g)'(1) = f'(1) - g'(1) = 4 - 2 = 2.$$<p><strong>Intercept $d$.</strong> $g(2) = 9$ and $3f(2) = 9 \Rightarrow f(2) = 3$, so</p>$$(f-g)(2) = 3 - 9 = -6 = 2(2) + d \Rightarrow d = -10.$$<p>Hence $f(x) - g(x) = 2x - 10$, and</p>$$f(25) - g(25) = 2(25) - 10 = 40.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 8 Apr, Shift 2

For the function $f(x) = e^{\sin|x|} - |x|$, $x \in \mathbf{R}$, consider the following statements:

**Statement I:** $f$ is differentiable for all $x \in \mathbf{R}$.

**Statement II:** $f$ is increasing in $\left(-\pi, -\dfrac{\pi}{2}\right)$.

In the light of the above statements, choose the correct answer from the options given below:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Statement I.</strong> The only possible corner is at $x=0$ (from $|x|$). Check one-sided derivatives:</p><ul><li>Right ($x&gt;0$): $\dfrac{d}{dx}\left(e^{\sin x} - x\right) = e^{\sin x}\cos x - 1 \to 1\cdot 1 - 1 = 0$.</li><li>Left ($x&lt;0$, so $|x|=-x$): $\dfrac{d}{dx}\left(e^{-\sin x} + x\right) = -e^{-\sin x}\cos x + 1 \to -1 + 1 = 0$.</li></ul><p>Both equal $0$, so $f$ is differentiable at $x=0$ (and smooth elsewhere). <strong>Statement I is true.</strong></p><p><strong>Statement II.</strong> For $x&lt;0$, $f(x) = e^{-\sin x} + x$, so</p>$$f'(x) = -e^{-\sin x}\cos x + 1.$$<p>On $\left(-\pi, -\tfrac{\pi}{2}\right)$, $\cos x &lt; 0$, hence $-e^{-\sin x}\cos x &gt; 0$ and $f'(x) &gt; 1 &gt; 0$ throughout. So $f$ is increasing there. <strong>Statement II is true.</strong></p><p>Both statements are true.</p><p><strong>Answer:</strong> A</p></div></details>

From TestGuru · our mock-test platform

## You've read Limits, Continuity & Differentiability Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=limits-continuity-differentiability&tg_exam=jee-main&tg_page=%2Fmathematics%2Flimits-continuity-differentiability%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/limits-continuity-differentiability/previous-year-questions/](https://jeenotes.in/mathematics/limits-continuity-differentiability/previous-year-questions/) · raw HTML: `offline/mathematics/limits-continuity-differentiability/previous-year-questions/index.html`_
