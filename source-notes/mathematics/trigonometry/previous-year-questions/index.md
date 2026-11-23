---
title: "Trigonometry Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/trigonometry/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on trigonometry with step-by-step solutions covering trigonometric identities, equations, inverse trigonometric functions, maxima and product formulae."
updated: "2026-11-02"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 6"
html: "../../../../offline/mathematics/trigonometry/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on trigonometry with step-by-step solutions covering trigonometric identities, equations, inverse trigonometric functions, maxima and product formulae.

A curated set of JEE Main 2026 previous-year questions on trigonometry, each solved step by step so you can check both the final answer and the full reasoning.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

If $A = \dfrac{\sin 3^\circ}{\cos 9^\circ} + \dfrac{\sin 9^\circ}{\cos 27^\circ} + \dfrac{\sin 27^\circ}{\cos 81^\circ}$ and $B = \tan 81^\circ - \tan 3^\circ$, then $\dfrac{B}{A}$ is equal to _____.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use the identity for the difference of tangents. For any angle $\theta$,</p>$$\tan 3\theta - \tan\theta = \frac{\sin 3\theta\cos\theta - \cos 3\theta\sin\theta}{\cos 3\theta\cos\theta} = \frac{\sin 2\theta}{\cos 3\theta\cos\theta} = \frac{2\sin\theta\cos\theta}{\cos 3\theta\cos\theta} = \frac{2\sin\theta}{\cos 3\theta}.$$<p>Hence each term of $A$ has the form</p>$$\frac{\sin\theta}{\cos 3\theta} = \tfrac12\left(\tan 3\theta - \tan\theta\right).$$<p>Applying this with $\theta = 3^\circ, 9^\circ, 27^\circ$:</p>$$A = \tfrac12\Big[(\tan 9^\circ - \tan 3^\circ) + (\tan 27^\circ - \tan 9^\circ) + (\tan 81^\circ - \tan 27^\circ)\Big].$$<p>The sum <strong>telescopes</strong>:</p>$$A = \tfrac12\left(\tan 81^\circ - \tan 3^\circ\right) = \frac{B}{2}.$$<p>Therefore</p>$$\frac{B}{A} = 2.$$<p><strong>Answer:</strong> 2</p></div></details>

PYQ · 2026 6 Apr, Shift 1

Let $0 < \alpha < 1$, $\beta = \dfrac{1}{3\alpha}$ and $\tan^{-1}(1 - \alpha) + \tan^{-1}(1 - \beta) = \dfrac{\pi}{4}$. Then $6(\alpha + \beta)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $u = 1-\alpha$ and $v = 1-\beta$. Taking $\tan$ of both sides,</p>$$\frac{u+v}{1-uv} = \tan\frac{\pi}{4} = 1 \quad\Longrightarrow\quad u+v = 1 - uv.$$<p>Compute each piece. First,</p>$$u+v = 2 - (\alpha+\beta).$$<p>Next, since $\alpha\beta = \alpha\cdot\dfrac{1}{3\alpha} = \dfrac13$,</p>$$uv = (1-\alpha)(1-\beta) = 1 - (\alpha+\beta) + \alpha\beta = \frac43 - (\alpha+\beta).$$<p>So $1 - uv = (\alpha+\beta) - \dfrac13$. Substituting into $u+v = 1-uv$:</p>$$2 - (\alpha+\beta) = (\alpha+\beta) - \frac13 \quad\Longrightarrow\quad 2(\alpha+\beta) = \frac{7}{3} \quad\Longrightarrow\quad \alpha+\beta = \frac{7}{6}.$$<p>(For $\alpha+\beta = \tfrac76$ with $\alpha\beta = \tfrac13$, we get $\alpha = \tfrac12,\ \beta = \tfrac23$, which satisfies $0&lt;\alpha&lt;1$.)</p><p>Therefore</p>$$6(\alpha+\beta) = 6\cdot\frac{7}{6} = 7.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 6 Apr, Shift 1

Let $S = \{\theta \in (-2\pi, 2\pi) : \cos\theta + 1 = \sqrt{3}\sin\theta\}$. Then $\sum_{\theta \in S}\theta$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Rewrite the equation as a single sinusoid:</p>$$\sqrt{3}\sin\theta - \cos\theta = 1 \quad\Longrightarrow\quad 2\sin\!\left(\theta - \frac{\pi}{6}\right) = 1 \quad\Longrightarrow\quad \sin\!\left(\theta - \frac{\pi}{6}\right) = \frac12.$$<p>Thus</p>$$\theta - \frac{\pi}{6} = \frac{\pi}{6} + 2k\pi \quad\text{or}\quad \theta - \frac{\pi}{6} = \frac{5\pi}{6} + 2k\pi,$$<p>giving</p>$$\theta = \frac{\pi}{3} + 2k\pi \quad\text{or}\quad \theta = \pi + 2k\pi.$$<p>Collecting the values in $(-2\pi, 2\pi)$:</p>$$\theta = \frac{\pi}{3},\ -\frac{5\pi}{3} \quad\text{and}\quad \theta = \pi,\ -\pi.$$<p>Summing,</p>$$\sum_{\theta\in S}\theta = \frac{\pi}{3} - \frac{5\pi}{3} + \pi - \pi = -\frac{4\pi}{3}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 1

If $\sin\left(\dfrac{\pi}{18}\right) \sin\left(\dfrac{5\pi}{18}\right) \sin\left(\dfrac{7\pi}{18}\right) = K$, then the value of $\sin\left(\dfrac{10K\pi}{3}\right)$ is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Convert to degrees: $\dfrac{\pi}{18}=10^\circ,\ \dfrac{5\pi}{18}=50^\circ,\ \dfrac{7\pi}{18}=70^\circ$, so</p>$$K = \sin 10^\circ\,\sin 50^\circ\,\sin 70^\circ.$$<p>Using $\sin 50^\circ = \cos 40^\circ$, $\sin 70^\circ = \cos 20^\circ$, $\sin 10^\circ = \cos 80^\circ$,</p>$$K = \cos 20^\circ\,\cos 40^\circ\,\cos 80^\circ = \frac18,$$<p>the standard product (multiply and divide by $\sin 20^\circ$ and use $\sin 2x = 2\sin x\cos x$ repeatedly).</p><p>Now</p>$$\frac{10K\pi}{3} = \frac{10\pi}{3}\cdot\frac18 = \frac{10\pi}{24} = \frac{5\pi}{12} = 75^\circ.$$<p>Therefore</p>$$\sin 75^\circ = \sin(45^\circ + 30^\circ) = \frac{\sqrt3+1}{2\sqrt2}.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 2 Apr, Shift 1

Let $S = \{x \in [-\pi, \pi] : \sin x (\sin x + \cos x) = a,\ a \in \mathbb{Z}\}$. Then $n(S)$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Simplify the expression:</p>$$\sin x(\sin x + \cos x) = \sin^2 x + \sin x\cos x = \frac{1-\cos 2x}{2} + \frac{\sin 2x}{2} = \frac12 + \frac{1}{\sqrt2}\sin\!\left(2x - \frac{\pi}{4}\right).$$<p>Its range is $\left[\tfrac12 - \tfrac{1}{\sqrt2},\ \tfrac12 + \tfrac{1}{\sqrt2}\right] \approx [-0.207,\ 1.207]$, so the only integer values of $a$ are $a = 0$ and $a = 1$.</p><p><strong>Case $a = 0$:</strong> $\sin x(\sin x + \cos x) = 0$.</p><ul><li>$\sin x = 0 \Rightarrow x = -\pi,\ 0,\ \pi$ (3 values),</li><li>$\sin x + \cos x = 0 \Rightarrow \tan x = -1 \Rightarrow x = -\tfrac{\pi}{4},\ \tfrac{3\pi}{4}$ (2 values).</li></ul><p>That gives <strong>5</strong> distinct solutions.</p><p><strong>Case $a = 1$:</strong> $\dfrac{1}{\sqrt2}\sin\!\left(2x - \tfrac{\pi}{4}\right) = \tfrac12 \Rightarrow \sin\!\left(2x - \tfrac{\pi}{4}\right) = \tfrac{1}{\sqrt2}$.
With $x\in[-\pi,\pi]$, the argument $2x-\tfrac{\pi}{4}$ ranges over $\left[-\tfrac{9\pi}{4}, \tfrac{7\pi}{4}\right]$, and $\sin(\cdot)=\tfrac{1}{\sqrt2}$ yields <strong>4</strong> values: $x = -\tfrac{3\pi}{4}, -\tfrac{\pi}{2}, \tfrac{\pi}{4}, \tfrac{\pi}{2}$.</p><p>Total:</p>$$n(S) = 5 + 4 = 9.$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 4 Apr, Shift 2

$\displaystyle\max_{0 \le x \le \pi}\left(16\sin\left(\dfrac{x}{2}\right)\cos^3\left(\dfrac{x}{2}\right)\right)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Put $t = \dfrac{x}{2}$, so $t \in \left[0, \dfrac{\pi}{2}\right]$ and we maximize</p>$$f(t) = 16\sin t\cos^3 t.$$<p>Differentiate:</p>$$f'(t) = 16\left(\cos^4 t - 3\sin^2 t\cos^2 t\right) = 16\cos^2 t\left(\cos^2 t - 3\sin^2 t\right).$$<p>Setting $f'(t)=0$ on $\left(0,\tfrac{\pi}{2}\right)$ gives $\cos^2 t = 3\sin^2 t$, i.e. $\tan^2 t = \tfrac13$, so $t = \dfrac{\pi}{6}$.</p><p>At $t = \dfrac{\pi}{6}$: $\sin t = \dfrac12,\ \cos t = \dfrac{\sqrt3}{2}$, hence</p>$$f\!\left(\tfrac{\pi}{6}\right) = 16\cdot\frac12\cdot\left(\frac{\sqrt3}{2}\right)^3 = 16\cdot\frac12\cdot\frac{3\sqrt3}{8} = 3\sqrt3.$$<p>This exceeds the endpoint values $f(0)=0$ and $f\!\left(\tfrac{\pi}{2}\right)=0$, so the maximum is $3\sqrt3$.</p><p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let $P = \{\theta \in [0, 4\pi] : \tan^2\theta \neq 1\}$ and $S = \{a \in \mathbb{Z} : 2(\cos^8\theta - \sin^8\theta)\sec 2\theta = a^2,\ \theta \in P\}$. Then $n(S)$ is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Factor the difference of eighth powers:</p>$$\cos^8\theta - \sin^8\theta = \left(\cos^4\theta - \sin^4\theta\right)\left(\cos^4\theta + \sin^4\theta\right).$$<p>Now $\cos^4\theta - \sin^4\theta = \cos 2\theta$ and $\cos^4\theta + \sin^4\theta = 1 - 2\sin^2\theta\cos^2\theta = 1 - \tfrac12\sin^2 2\theta$. So</p>$$2(\cos^8\theta - \sin^8\theta)\sec 2\theta = 2\cos 2\theta\left(1 - \tfrac12\sin^2 2\theta\right)\cdot\frac{1}{\cos 2\theta} = 2 - \sin^2 2\theta.$$<p>The constraint $\tan^2\theta \neq 1$ excludes exactly the angles where $\cos 2\theta = 0$, i.e. where $\sin^2 2\theta = 1$. Thus on $P$,</p>$$\sin^2 2\theta \in [0, 1) \quad\Longrightarrow\quad 2 - \sin^2 2\theta \in (1, 2].$$<p>We need $a^2 \in (1, 2]$ for some integer $a$. But $a^2 = 1$ is excluded (open endpoint) and the next square $a^2 = 4$ lies above $2$; no perfect square lies in $(1, 2]$.</p><p>Hence no integer $a$ works:</p>$$n(S) = 0.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 6 Apr, Shift 2

If $\sin\left(\tan^{-1}\left(x\sqrt{2}\right)\right)=\cot\left(\sin^{-1}\sqrt{1-x^2}\right)$, $x\in(0,1)$, then the value of $x$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Left side.</strong> If $\phi = \tan^{-1}(x\sqrt2)$ then $\tan\phi = x\sqrt2$, so</p>$$\sin\phi = \frac{x\sqrt2}{\sqrt{1 + 2x^2}}.$$<p><strong>Right side.</strong> Let $\psi = \sin^{-1}\sqrt{1-x^2}$, so $\sin\psi = \sqrt{1-x^2}$ and (since $x\in(0,1)$, $\psi\in(0,\tfrac{\pi}{2})$) $\cos\psi = \sqrt{1-(1-x^2)} = x$. Then</p>$$\cot\psi = \frac{x}{\sqrt{1-x^2}}.$$<p><strong>Equate</strong> and cancel $x&gt;0$:</p>$$\frac{\sqrt2}{\sqrt{1+2x^2}} = \frac{1}{\sqrt{1-x^2}} \quad\Longrightarrow\quad 2(1-x^2) = 1 + 2x^2.$$<p>Solving:</p>$$2 - 2x^2 = 1 + 2x^2 \quad\Longrightarrow\quad 4x^2 = 1 \quad\Longrightarrow\quad x = \frac12.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Let $\tan A, \tan B$, where $A, B \in \left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$, be the roots of the quadratic equation $x^2 - 2x - 5 = 0$. Then $20\sin^2\left( \dfrac{A+B}{2} \right)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>By Vieta’s formulas, $\tan A + \tan B = 2$ and $\tan A\tan B = -5$. Then</p>$$\tan(A+B) = \frac{\tan A + \tan B}{1 - \tan A\tan B} = \frac{2}{1-(-5)} = \frac{2}{6} = \frac13.$$<p>Since $\tan A\tan B = -5 &lt; 0$, one of $A, B$ is positive and the other negative, and numerically $A+B$ is a small positive angle in the first quadrant, so $\cos(A+B) &gt; 0$. With $\tan(A+B)=\tfrac13$,</p>$$\cos(A+B) = \frac{3}{\sqrt{10}}.$$<p>Using the half-angle identity $20\sin^2\!\left(\tfrac{A+B}{2}\right) = 10\big(1 - \cos(A+B)\big)$:</p>$$20\sin^2\!\left(\frac{A+B}{2}\right) = 10\left(1 - \frac{3}{\sqrt{10}}\right) = 10 - \frac{30}{\sqrt{10}} = 10 - 3\sqrt{10}.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The sum of all the integral values of $p$ such that the equation $3\sin^2 x + 12\cos x - 3 = p$, $x \in \mathbb{R}$, has at least one solution, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Write everything in terms of $\cos x$:</p>$$3\sin^2 x + 12\cos x - 3 = 3(1 - \cos^2 x) + 12\cos x - 3 = -3\cos^2 x + 12\cos x.$$<p>Let $c = \cos x \in [-1, 1]$ and $g(c) = -3c^2 + 12c = -3(c-2)^2 + 12$. On $[-1,1]$ the vertex $c=2$ lies to the right, so $g$ is increasing; hence</p>$$g(-1) = -15,\qquad g(1) = 9,\qquad g(c) \in [-15, 9].$$<p>The equation has a solution exactly when $p \in [-15, 9]$. Summing all integers there:</p>$$\sum_{p=-15}^{9} p = \frac{(-15 + 9)\cdot 25}{2} = \frac{-6\cdot 25}{2} = -75.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 5 Apr, Shift 1

If $\dfrac{\pi}{4} + \displaystyle\sum_{p=1}^{11} \tan^{-1}\left( \dfrac{2^{p-1}}{1 + 2^{2p-1}} \right) = \alpha$, then $\tan\alpha$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Note that $2^{2p-1} = 2^{p}\cdot 2^{p-1}$ and $2^{p} - 2^{p-1} = 2^{p-1}$, so each term telescopes:</p>$$\tan^{-1}\!\left(\frac{2^{p-1}}{1 + 2^{2p-1}}\right) = \tan^{-1}\!\left(\frac{2^{p} - 2^{p-1}}{1 + 2^{p}\cdot 2^{p-1}}\right) = \tan^{-1} 2^{p} - \tan^{-1} 2^{p-1}.$$<p>Summing from $p=1$ to $11$:</p>$$\sum_{p=1}^{11}\left(\tan^{-1} 2^{p} - \tan^{-1} 2^{p-1}\right) = \tan^{-1} 2^{11} - \tan^{-1} 2^{0} = \tan^{-1} 2048 - \frac{\pi}{4}.$$<p>Therefore</p>$$\alpha = \frac{\pi}{4} + \tan^{-1} 2048 - \frac{\pi}{4} = \tan^{-1} 2048,$$<p>and</p>$$\tan\alpha = 2048.$$<p><strong>Answer:</strong> 2048</p></div></details>

PYQ · 2026 5 Apr, Shift 2

If $S = \left\{\theta \in [-\pi, \pi] : \cos\theta \cos\dfrac{5\theta}{2} = \cos 7\theta \cos\dfrac{7\theta}{2}\right\}$, then $n(S)$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Convert products to sums</strong> using $2\cos A\cos B = \cos(A-B) + \cos(A+B)$:</p>$$2\cos\theta\cos\frac{5\theta}{2} = \cos\frac{3\theta}{2} + \cos\frac{7\theta}{2}, \qquad 2\cos 7\theta\cos\frac{7\theta}{2} = \cos\frac{13\theta}{2} + \cos\frac{15\theta}{2}.$$<p>So the equation becomes</p>$$\cos\frac{3\theta}{2} + \cos\frac{7\theta}{2} = \cos\frac{13\theta}{2} + \cos\frac{15\theta}{2}.$$<p><strong>Substitute $\theta = 2\phi$</strong> (so $\theta \in [-\pi, \pi] \iff \phi \in [-\tfrac{\pi}{2}, \tfrac{\pi}{2}]$). The arguments become integer multiples of $\phi$:</p>$$\cos 3\phi + \cos 7\phi = \cos 13\phi + \cos 15\phi.$$<p>Applying $2\cos A\cos B$ once more, this is $2\cos 2\phi\cos 5\phi = 2\cos 14\phi\cos 7\phi$, i.e. $\cos 3\phi + \cos 7\phi = \cos 7\phi + \cos 21\phi$. The $\cos 7\phi$ terms cancel, leaving the clean equation</p>$$\boxed{\cos 3\phi = \cos 21\phi}.$$<p><strong>Solve</strong> using $\cos X = \cos Y \iff X = 2n\pi \pm Y$:</p>$$21\phi = 2n\pi + 3\phi \implies \phi = \frac{n\pi}{9}, \qquad\qquad 21\phi = 2n\pi - 3\phi \implies \phi = \frac{n\pi}{12}.$$<p><strong>Count in $\phi \in [-\tfrac{\pi}{2}, \tfrac{\pi}{2}]$:</strong></p><ul><li>$\phi = \dfrac{n\pi}{9}$ needs $-\tfrac12 \le \tfrac{n}{9} \le \tfrac12$, i.e. $n = -4, \dots, 4$ — that is <strong>9 values</strong>.</li><li>$\phi = \dfrac{n\pi}{12}$ needs $-\tfrac12 \le \tfrac{n}{12} \le \tfrac12$, i.e. $n = -6, \dots, 6$ — that is <strong>13 values</strong>.</li></ul><p><strong>Remove overlaps.</strong> Common values satisfy $\tfrac{n}{9} = \tfrac{m}{12}$, giving $\phi = 0, \pm\tfrac{\pi}{3}$ (i.e. $\theta = 0, \pm\tfrac{2\pi}{3}$) — <strong>3 repeats</strong>.</p>$$n(S) = 9 + 13 - 3 = 19.$$<p><strong>Answer:</strong> 19</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let $\alpha = 3\sin^{-1}\left(\dfrac{6}{11}\right)$ and $\beta = 3\cos^{-1}\left(\dfrac{4}{9}\right)$, where inverse trigonometric functions take only the principal values.

Given below are two statements :

Statement I : $\cos(\alpha + \beta) > 0$.

Statement II : $\cos(\alpha) < 0$.

In the light of the above statements, choose the correct answer from the options given below :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Statement II.</strong> Since $\dfrac{6}{11} &gt; \dfrac{1}{\sqrt2}$? Check the size directly: $\sin^{-1}\dfrac{6}{11} \approx 33.06^\circ$, so</p>$$\alpha = 3\sin^{-1}\frac{6}{11} \approx 99.2^\circ.$$<p>Because $90^\circ &lt; \alpha &lt; 180^\circ$, we get $\cos\alpha &lt; 0$. <strong>Statement II is true.</strong></p><p><strong>Statement I.</strong> Also $\cos^{-1}\dfrac{4}{9} \approx 63.6^\circ$, so</p>$$\beta = 3\cos^{-1}\frac{4}{9} \approx 190.8^\circ,\qquad \alpha + \beta \approx 290.0^\circ.$$<p>An angle near $290^\circ$ lies in the fourth quadrant, where cosine is positive, so $\cos(\alpha+\beta) &gt; 0$. <strong>Statement I is true.</strong></p><p>Both statements are true.</p><p><strong>Answer:</strong> A</p></div></details>

## Keep studying this chapter

- [Trigonometry chapter notes](../index.md)
- [Trigonometry formula sheet](../formula-sheet/index.md)

From TestGuru · our mock-test platform

## You've read Trigonometry Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=trigonometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Ftrigonometry%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/trigonometry/previous-year-questions/](https://jeenotes.in/mathematics/trigonometry/previous-year-questions/) · raw HTML: `offline/mathematics/trigonometry/previous-year-questions/index.html`_
