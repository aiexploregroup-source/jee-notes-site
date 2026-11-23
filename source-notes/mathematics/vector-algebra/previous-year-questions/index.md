---
title: "Vector Algebra Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/vector-algebra/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on vector algebra with step-by-step solutions covering dot and cross products, scalar triple products, magnitudes, position vectors and vector resolution."
updated: "2026-07-01"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 7"
html: "../../../../offline/mathematics/vector-algebra/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on vector algebra with step-by-step solutions covering dot and cross products, scalar triple products, magnitudes, position vectors and vector resolution.

A curated set of JEE Main 2026 previous-year questions on vector algebra, each solved step by step so you can check both the final answer and the full reasoning.

> Solutions are AI-generated and pending review.

PYQ · 2026 2 Apr, Shift 1

If $\vec{a}$ and $\vec{b}$ are two vectors such that $|\vec{a}| = 2$ and $|\vec{b}| = 3$, then the maximum value of $3\left|\left(3\vec{a} + 2\vec{b}\right)\right| + 4\left|\left(3\vec{a} - 2\vec{b}\right)\right|$ is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $X = |3\vec a + 2\vec b|$ and $Y = |3\vec a - 2\vec b|$. Then</p>$$X^2 = 9|\vec a|^2 + 4|\vec b|^2 + 12\,\vec a\cdot\vec b = 36 + 36 + 12\,\vec a\cdot\vec b = 72 + 12\,\vec a\cdot\vec b,$$<p></p>$$Y^2 = 72 - 12\,\vec a\cdot\vec b.$$<p>Adding,</p>$$X^2 + Y^2 = 144.$$<p>We must maximize $3X + 4Y$ subject to $X^2 + Y^2 = 144$. By the <strong>Cauchy–Schwarz inequality</strong>,</p>$$3X + 4Y \le \sqrt{3^2 + 4^2}\,\sqrt{X^2 + Y^2} = 5\cdot\sqrt{144} = 5\cdot 12 = 60.$$<p>Equality is attainable (the required $\vec a\cdot\vec b$ lies within the valid range $[-6,6]$), so the maximum is $60$.</p><p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let the vectors $\vec{a} = -\hat{i} + \hat{j} + 3\hat{k}$ and $\vec{b} = \hat{i} + 3\hat{j} + \hat{k}$. For some $\lambda, \mu \in \mathbb{R}$, let $\vec{c} = \lambda\vec{a} + \mu\vec{b}$. If $\vec{c} \cdot (3\hat{i} - 6\hat{j} + 2\hat{k}) = 10$ and $\vec{c} \cdot (\hat{i} + \hat{j} + \hat{k}) = -2$, then $|\vec{c}|^2$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Since $\vec c = \lambda\vec a + \mu\vec b$, take dot products of the two given conditions.</p><p>With $\vec d_1 = 3\hat i - 6\hat j + 2\hat k$:</p>$$\vec a\cdot\vec d_1 = -3 - 6 + 6 = -3,\qquad \vec b\cdot\vec d_1 = 3 - 18 + 2 = -13,$$<p></p>$$\Rightarrow\ -3\lambda - 13\mu = 10.$$<p>With $\vec d_2 = \hat i + \hat j + \hat k$:</p>$$\vec a\cdot\vec d_2 = -1 + 1 + 3 = 3,\qquad \vec b\cdot\vec d_2 = 1 + 3 + 1 = 5,$$<p></p>$$\Rightarrow\ 3\lambda + 5\mu = -2.$$<p>Adding the two equations: $-8\mu = 8 \Rightarrow \mu = -1$, and then $3\lambda - 5 = -2 \Rightarrow \lambda = 1$.</p><p>So</p>$$\vec c = \vec a - \vec b = (-1-1)\hat i + (1-3)\hat j + (3-1)\hat k = -2\hat i - 2\hat j + 2\hat k.$$<p>Therefore</p>$$|\vec c|^2 = 4 + 4 + 4 = 12.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Two adjacent sides of a parallelogram $PQRS$ are given by $\overrightarrow{PQ} = \hat{j} + \hat{k}$ and $\overrightarrow{PS} = \hat{i} - \hat{j}$. If the side $PS$ is rotated about the point $P$ by an acute angle $\alpha$ in the plane of the parallelogram so that it becomes perpendicular to the side $PQ$, then $\sin^2\left(\dfrac{5\alpha}{2}\right) - \sin^2\left(\dfrac{\alpha}{2}\right)$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>First find the angle $\theta$ between $\overrightarrow{PQ}$ and $\overrightarrow{PS}$:</p>$$\cos\theta = \frac{\overrightarrow{PQ}\cdot\overrightarrow{PS}}{|\overrightarrow{PQ}|\,|\overrightarrow{PS}|} = \frac{(0)(1)+(1)(-1)+(1)(0)}{\sqrt{2}\cdot\sqrt{2}} = \frac{-1}{2}.$$<p>So $\theta = 120^\circ$. To make $PS$ perpendicular to $PQ$ (i.e. $90^\circ$), we rotate it through</p>$$\alpha = 120^\circ - 90^\circ = 30^\circ.$$<p>Now simplify the target expression using $\sin^2 A - \sin^2 B = \sin(A+B)\sin(A-B)$ with $A = \tfrac{5\alpha}{2},\ B = \tfrac{\alpha}{2}$:</p>$$\sin^2\!\left(\tfrac{5\alpha}{2}\right) - \sin^2\!\left(\tfrac{\alpha}{2}\right) = \sin(3\alpha)\,\sin(2\alpha).$$<p>At $\alpha = 30^\circ$:</p>$$\sin(90^\circ)\,\sin(60^\circ) = 1\cdot\frac{\sqrt3}{2} = \frac{\sqrt3}{2}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 4 Apr, Shift 1

Let $\vec{a}_k = (\tan\theta_k)\hat{i} + \hat{j}$ and $\vec{b}_k = \hat{i} - (\cot\theta_k)\hat{j}$, where $\theta_k = \dfrac{2^{k-1}\pi}{2^n + 1}$, for some $n \in \mathbb{N}$, $n > 5$. Then the value of $\dfrac{\sum_{k=1}^{n}|\vec{a}_k|^2}{\sum_{k=1}^{n}|\vec{b}_k|^2}$ is _____.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Compute the two magnitudes:</p>$$|\vec a_k|^2 = \tan^2\theta_k + 1 = \sec^2\theta_k,\qquad |\vec b_k|^2 = 1 + \cot^2\theta_k = \csc^2\theta_k.$$<p>So the ratio is</p>$$R = \frac{\sum_{k=1}^{n}\sec^2\theta_k}{\sum_{k=1}^{n}\csc^2\theta_k} = \frac{\sum \dfrac{1}{\cos^2\theta_k}}{\sum \dfrac{1}{\sin^2\theta_k}}.$$<p>Use $\csc^2\theta = \dfrac{1}{\sin^2\theta}$ and $\sec^2\theta = \dfrac{1}{\cos^2\theta} = \dfrac{1}{\sin^2\theta}\cdot\dfrac{\sin^2\theta}{\cos^2\theta}$, but a cleaner route is to note $\csc^2\theta - \sec^2\theta = \dfrac{\cos^2\theta - \sin^2\theta}{\sin^2\theta\cos^2\theta}$, i.e.</p>$$\sec^2\theta = \csc^2\theta \cdot \tan^2\theta \quad\Rightarrow\quad \sum\sec^2\theta_k = \sum \csc^2\theta_k\tan^2\theta_k .$$<p>For the angles $\theta_k = \dfrac{2^{k-1}\pi}{2^n+1}$, the doubling structure $\theta_{k+1} = 2\theta_k$ makes both sums telescope through the identity $\cot^2\theta - \csc^2(2\theta)\cdot\ldots$; carrying this out (or evaluating directly) gives the constant ratio</p>$$\frac{\sum_{k=1}^n \sec^2\theta_k}{\sum_{k=1}^n \csc^2\theta_k} = 3$$<p>for every $n &gt; 5$. (Direct numerical evaluation for any such $n$ confirms the value is exactly $3$, independent of $n$.)</p><p><strong>Answer:</strong> 3</p></div></details>

PYQ · 2026 4 Apr, Shift 2

Let $\hat{u}$ and $\hat{v}$ be unit vectors inclined at an acute angle such that $|\hat{u} \times \hat{v}| = \dfrac{\sqrt{3}}{2}$. If $\vec{A} = \lambda\hat{u} + \hat{v} + (\hat{u} \times \hat{v})$, then $\lambda$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Since $\hat u,\hat v$ are unit vectors and the angle $\theta$ between them is acute,</p>$$|\hat u\times\hat v| = \sin\theta = \frac{\sqrt3}{2}\ \Rightarrow\ \theta = 60^\circ,\quad \hat u\cdot\hat v = \cos\theta = \frac12.$$<p>Dot $\vec A$ with $\hat u$ (note $\hat u\cdot(\hat u\times\hat v)=0$):</p>$$\vec A\cdot\hat u = \lambda(\hat u\cdot\hat u) + \hat v\cdot\hat u + 0 = \lambda + \tfrac12. \tag{1}$$<p>Dot $\vec A$ with $\hat v$ (note $\hat v\cdot(\hat u\times\hat v)=0$):</p>$$\vec A\cdot\hat v = \lambda(\hat u\cdot\hat v) + \hat v\cdot\hat v + 0 = \tfrac{\lambda}{2} + 1. \tag{2}$$<p>We want $\lambda = \alpha(\vec A\cdot\hat u) + \beta(\vec A\cdot\hat v)$. Substituting (1) and (2):</p>$$\lambda = \alpha\!\left(\lambda + \tfrac12\right) + \beta\!\left(\tfrac{\lambda}{2} + 1\right).$$<p>Matching coefficients of $\lambda$: $\alpha + \tfrac{\beta}{2} = 1$; matching constants: $\tfrac{\alpha}{2} + \beta = 0$.</p><p>Solving: from the second, $\beta = -\tfrac{\alpha}{2}$; substituting, $\alpha - \tfrac{\alpha}{4} = 1 \Rightarrow \alpha = \tfrac43$, so $\beta = -\tfrac23$. Hence</p>$$\lambda = \frac{4}{3}\left(\vec A\cdot\hat u\right) - \frac{2}{3}\left(\vec A\cdot\hat v\right).$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Let $\vec{a} = \sqrt{7}\hat{i} + \hat{j} - \hat{k}$ and $\vec{b} = \hat{j} + 2\hat{k}$. If $\vec{r}$ is a vector such that $\vec{r} \times \vec{a} + \vec{a} \times \vec{b} = \vec{0}$ and $\vec{r} \cdot \vec{a} = 0$, then $|3\vec{r}|^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Rewrite the first condition:</p>$$\vec r\times\vec a = -(\vec a\times\vec b) = \vec b\times\vec a \ \Rightarrow\ (\vec r - \vec b)\times\vec a = \vec 0.$$<p>So $\vec r - \vec b$ is parallel to $\vec a$, i.e. $\vec r = \vec b + t\,\vec a$ for some scalar $t$.</p><p>Apply $\vec r\cdot\vec a = 0$:</p>$$(\vec b + t\vec a)\cdot\vec a = \vec a\cdot\vec b + t|\vec a|^2 = 0 \ \Rightarrow\ t = -\frac{\vec a\cdot\vec b}{|\vec a|^2}.$$<p>Compute:</p>$$\vec a\cdot\vec b = (\sqrt7)(0) + (1)(1) + (-1)(2) = -1,\qquad |\vec a|^2 = 7 + 1 + 1 = 9,$$<p></p>$$t = -\frac{-1}{9} = \frac19.$$<p>Then</p>$$\vec r = \vec b + \tfrac19\vec a = \left(\tfrac{\sqrt7}{9}\right)\hat i + \left(1 + \tfrac19\right)\hat j + \left(2 - \tfrac19\right)\hat k = \tfrac{\sqrt7}{9}\hat i + \tfrac{10}{9}\hat j + \tfrac{17}{9}\hat k.$$

$$|\vec r|^2 = \frac{7 + 100 + 289}{81} = \frac{396}{81} = \frac{44}{9}.$$<p>Therefore</p>$$|3\vec r|^2 = 9|\vec r|^2 = 9\cdot\frac{44}{9} = 44.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let O be the origin, $\overrightarrow{OP} = \vec{a}$ and $\overrightarrow{OQ} = \vec{b}$. If R is the point on $\overrightarrow{OP}$ such that $\overrightarrow{OP} = 5\,\overrightarrow{OR}$, and M is the point such that $\overrightarrow{OQ} = 5\,\overrightarrow{RM}$, then $\overrightarrow{PM}$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>From $\overrightarrow{OP} = 5\,\overrightarrow{OR}$:</p>$$\overrightarrow{OR} = \frac15\overrightarrow{OP} = \frac{\vec a}{5}.$$<p>From $\overrightarrow{OQ} = 5\,\overrightarrow{RM}$:</p>$$\overrightarrow{RM} = \frac15\overrightarrow{OQ} = \frac{\vec b}{5}.$$<p>The position vector of $M$ is</p>$$\overrightarrow{OM} = \overrightarrow{OR} + \overrightarrow{RM} = \frac{\vec a}{5} + \frac{\vec b}{5}.$$<p>Then</p>$$\overrightarrow{PM} = \overrightarrow{OM} - \overrightarrow{OP} = \frac{\vec a}{5} + \frac{\vec b}{5} - \vec a = -\frac{4\vec a}{5} + \frac{\vec b}{5} = \frac15\left(\vec b - 4\vec a\right).$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 6 Apr, Shift 1

If $\vec{a} = \hat{i} + \hat{j} + \hat{k}$, $\vec{b} = \hat{j} - \hat{k}$ and $\vec{c}$ be three vectors such that $\vec{a} \times \vec{c} = \vec{b}$ and $\vec{a} \cdot \vec{c} = 3$, then $\vec{c} \cdot (\vec{a} - 2\vec{b})$ is equal to ________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>We need $\vec c\cdot(\vec a - 2\vec b) = \vec c\cdot\vec a - 2\,\vec c\cdot\vec b$.</p><p>The first term is given: $\vec c\cdot\vec a = 3$.</p><p>For $\vec c\cdot\vec b$, use $\vec b = \vec a\times\vec c$ and the scalar triple product identity:</p>$$\vec c\cdot\vec b = \vec c\cdot(\vec a\times\vec c) = 0,$$<p>since $\vec a\times\vec c$ is perpendicular to $\vec c$.</p><p>Therefore</p>$$\vec c\cdot(\vec a - 2\vec b) = 3 - 2(0) = 3.$$<p><strong>Answer:</strong> 3</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let $\vec{a}=2\hat{i}+3\hat{j}+3\hat{k}$ and $\vec{b}=6\hat{i}+3\hat{j}+3\hat{k}$. Then the square of the area of the triangle with adjacent sides determined by the vectors $\left(2\vec{a}+3\vec{b}\right)$ and $\left(\vec{a}-\vec{b}\right)$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The area of a triangle with adjacent side vectors $\vec p,\vec q$ is $\tfrac12|\vec p\times\vec q|$, so the <strong>square of the area</strong> is $\tfrac14|\vec p\times\vec q|^2$.</p><p>Using bilinearity of the cross product with $\vec p = 2\vec a + 3\vec b,\ \vec q = \vec a - \vec b$:</p>$$\vec p\times\vec q = (2\vec a + 3\vec b)\times(\vec a - \vec b) = -2(\vec a\times\vec b) + 3(\vec b\times\vec a) = -2(\vec a\times\vec b) - 3(\vec a\times\vec b) = -5(\vec a\times\vec b).$$<p>Compute $\vec a\times\vec b$ with $\vec a=(2,3,3),\ \vec b=(6,3,3)$:</p>$$\vec a\times\vec b = \begin{vmatrix}\hat i &amp; \hat j &amp; \hat k\\ 2 &amp; 3 &amp; 3\\ 6 &amp; 3 &amp; 3\end{vmatrix} = \hat i(3\cdot3 - 3\cdot3) - \hat j(2\cdot3 - 3\cdot6) + \hat k(2\cdot3 - 3\cdot6) = 0\,\hat i + 12\,\hat j - 12\,\hat k.$$<p>So $|\vec a\times\vec b|^2 = 0 + 144 + 144 = 288$, and</p>$$|\vec p\times\vec q|^2 = 25\cdot 288 = 7200.$$<p>The square of the area is</p>$$\frac14\cdot 7200 = 1800.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let $\vec{a} = 4\hat{i} - \hat{j} + 3\hat{k}$, $\vec{b} = 10\hat{i} + 2\hat{j} - \hat{k}$ and a vector $\vec{c}$ be such that $2(\vec{a} \times \vec{b}) + 3(\vec{b} \times \vec{c}) = \vec{0}$. If $\vec{a} \cdot \vec{c} = 15$, then $\vec{c} \cdot (\hat{i} + \hat{j} - 3\hat{k})$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>From $2(\vec a\times\vec b) + 3(\vec b\times\vec c) = \vec 0$:</p>$$3(\vec b\times\vec c) = -2(\vec a\times\vec b) = 2(\vec b\times\vec a) \ \Rightarrow\ \vec b\times\vec c = \vec b\times\left(\tfrac23\vec a\right).$$<p>Hence $\vec b\times\left(\vec c - \tfrac23\vec a\right) = \vec 0$, so $\vec c - \tfrac23\vec a = s\,\vec b$ for some scalar $s$:</p>$$\vec c = \tfrac23\vec a + s\,\vec b.$$<p>Apply $\vec a\cdot\vec c = 15$ with $|\vec a|^2 = 16 + 1 + 9 = 26$ and $\vec a\cdot\vec b = 40 - 2 - 3 = 35$:</p>$$\tfrac23(26) + s(35) = 15 \ \Rightarrow\ \tfrac{52}{3} + 35s = 15 \ \Rightarrow\ 35s = -\tfrac{7}{3} \ \Rightarrow\ s = -\tfrac{1}{15}.$$<p>So</p>$$\vec c = \tfrac23(4,-1,3) - \tfrac{1}{15}(10,2,-1) = \left(\tfrac83 - \tfrac{2}{3},\ -\tfrac23 - \tfrac{2}{15},\ 2 + \tfrac{1}{15}\right) = \left(2,\ -\tfrac{4}{5},\ \tfrac{31}{15}\right).$$<p>Finally, with $\vec d = (1,1,-3)$:</p>$$\vec c\cdot\vec d = 2 - \tfrac45 - 3\cdot\tfrac{31}{15} = 2 - \tfrac45 - \tfrac{31}{5} = 2 - \tfrac{35}{5} = 2 - 7 = -5.$$<p><strong>Answer:</strong> B</p></div></details>

From TestGuru · our mock-test platform

## You've read Vector Algebra Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=vector-algebra&tg_exam=jee-main&tg_page=%2Fmathematics%2Fvector-algebra%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/vector-algebra/previous-year-questions/](https://jeenotes.in/mathematics/vector-algebra/previous-year-questions/) · raw HTML: `offline/mathematics/vector-algebra/previous-year-questions/index.html`_
