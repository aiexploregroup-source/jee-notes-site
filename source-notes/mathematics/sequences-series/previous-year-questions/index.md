---
title: "Sequences and Series Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/sequences-series/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Sequences and Series with concise, step-by-step KaTeX solutions covering AP, GP, arithmetic means, telescoping sums and series identities."
updated: "2026-07-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 9 of 10"
html: "../../../../offline/mathematics/sequences-series/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Sequences and Series with concise, step-by-step KaTeX solutions covering AP, GP, arithmetic means, telescoping sums and series identities.

A curated set of Sequences and Series questions from JEE Main 2026, each worked out step by step so you can master the exact patterns the exam repeats.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

The first term of an A.P. of 30 non-negative terms is $\frac{10}{3}$. If the sum of this A.P. is the cube of its last term, then its common difference is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $a = \dfrac{10}{3}$, $n = 30$, common difference $d$, and last term $\ell = a + 29d$.</p><p>The sum is</p>$$S = \frac{n}{2}(a + \ell) = 15(a + \ell).$$<p>The condition $S = \ell^3$ gives</p>$$15\left(\frac{10}{3} + \ell\right) = \ell^3 \;\Rightarrow\; 50 + 15\ell = \ell^3.$$<p>So $\ell^3 - 15\ell - 50 = 0$. Testing $\ell = 5$: $125 - 75 - 50 = 0$. Hence $\ell = 5$.</p><p>Then</p>$$a + 29d = 5 \;\Rightarrow\; \frac{10}{3} + 29d = 5 \;\Rightarrow\; 29d = \frac{5}{3} \;\Rightarrow\; d = \frac{5}{87}.$$<p>All terms $a + kd$ for $k = 0,\dots,29$ are non-negative, so the condition holds.</p><p><strong>Answer:</strong> A ($\frac{5}{87}$)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

The value of $1^3 - 2^3 + 3^3 - \ldots + 15^3$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Group the 15 terms as $(1^3 - 2^3) + (3^3 - 4^3) + \dots + (13^3 - 14^3) + 15^3$.</p><p>Each odd cube minus the next even cube uses $a^3 - b^3 = (a-b)(a^2+ab+b^2)$ with $a - b = -1$, but it is cleaner to compute directly. Split into odd and even cubes:</p>$$\underbrace{(1^3 + 3^3 + \dots + 15^3)}_{\text{odd}} - \underbrace{(2^3 + 4^3 + \dots + 14^3)}_{\text{even}}.$$<p>Sum of all cubes to $15$: $\left(\dfrac{15\cdot 16}{2}\right)^2 = 120^2 = 14400.$</p><p>Even cubes: $2^3(1^3 + \dots + 7^3) = 8\left(\dfrac{7\cdot 8}{2}\right)^2 = 8\cdot 784 = 6272.$</p><p>Odd cubes $= 14400 - 6272 = 8128$. Therefore the alternating sum is</p>$$8128 - 6272 = 1856.$$<p><strong>Answer:</strong> B (1856)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

The sum of the first ten terms of an A.P. is 160 and the sum of the first two terms of a G.P. is 8. If the first term of the A.P. is equal to the common ratio of the G.P. and the first term of the G.P. is equal to the common difference of the A.P., then the sum of all possible values of the first term of the G.P. is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let the A.P. have first term $A$ and common difference $D$. Let the G.P. have first term $g$ and common ratio $r$.</p><p>Given links: $A = r$ and $g = D$.</p><p>Sum of first ten A.P. terms:</p>$$\frac{10}{2}(2A + 9D) = 160 \;\Rightarrow\; 2A + 9D = 32.$$<p>Sum of first two G.P. terms with $g = D$, $r = A$:</p>$$g + gr = D(1 + A) = 8.$$<p>From the first equation $A = \dfrac{32 - 9D}{2}$. Substituting:</p>$$D\left(1 + \frac{32 - 9D}{2}\right) = 8 \;\Rightarrow\; D(34 - 9D) = 16 \;\Rightarrow\; 9D^2 - 34D + 16 = 0.$$<p>The first term of the G.P. is $g = D$, so the sum of all possible values of $g$ is the sum of the roots of this quadratic:</p>$$D_1 + D_2 = \frac{34}{9}.$$<p><strong>Answer:</strong> A ($\dfrac{34}{9}$)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

For the functions $f(\theta) = \alpha \tan^2\theta + \beta \cot^2\theta$, and $g(\theta) = \alpha \sin^2\theta + \beta \cos^2\theta$, $\alpha > \beta > 0$, let $\min_{0 < \theta < \frac{\pi}{2}} f(\theta) = \max_{0 < \theta < \pi} g(\theta)$. If the first term of a G.P. is $\left(\dfrac{\alpha}{2\beta}\right)$, its common ratio is $\left(\dfrac{2\beta}{\alpha}\right)$ and the sum of its first 10 terms is $\dfrac{m}{n}$, $\gcd(m, n) = 1$, then $m + n$ is equal to ________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>For $f(\theta) = \alpha\tan^2\theta + \beta\cot^2\theta$, by AM–GM</p>$$f(\theta) \ge 2\sqrt{\alpha\beta}, \qquad \min f = 2\sqrt{\alpha\beta}.$$<p>For $g(\theta) = \alpha\sin^2\theta + \beta\cos^2\theta = \beta + (\alpha - \beta)\sin^2\theta$ with $\alpha &gt; \beta$, the maximum over $0 &lt; \theta &lt; \pi$ occurs at $\sin^2\theta = 1$:</p>$$\max g = \alpha.$$<p>Setting them equal:</p>$$2\sqrt{\alpha\beta} = \alpha \;\Rightarrow\; 4\alpha\beta = \alpha^2 \;\Rightarrow\; \alpha = 4\beta.$$<p>Then first term $= \dfrac{\alpha}{2\beta} = 2$ and ratio $= \dfrac{2\beta}{\alpha} = \dfrac{1}{2}$.</p>$$S_{10} = 2\cdot\frac{1 - (1/2)^{10}}{1 - 1/2} = 4\left(1 - \frac{1}{1024}\right) = \frac{1023}{256}.$$<p>Here $m = 1023$, $n = 256$, so $m + n = 1279$.</p><p><strong>Answer:</strong> 1279</p></div></details>

PYQ · 2026 2 Apr, Shift 1

Let $\alpha, \alpha + 2, \alpha \in \mathbb{Z}$, be the roots of the quadratic equation $x(x+2) + (x+1)(x+3) + (x+2)(x+4) + \dots + (x+n-1)(x+n+1) = 4n$ for some $n \in \mathbb{N}$. Then $n + \alpha$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The general term is $(x + k)(x + k + 2)$ for $k = 0, 1, \dots, n-1$, i.e. $(x+k)^2 + 2(x+k)$.</p><p>Summing:</p>$$\sum_{k=0}^{n-1}\big[(x+k)^2 + 2(x+k)\big] = nx^2 + 2x\sum k + \sum k^2 + 2nx + 2\sum k.$$<p>With $\sum_{k=0}^{n-1} k = \dfrac{n(n-1)}{2}$ and $\sum_{k=0}^{n-1} k^2 = \dfrac{(n-1)n(2n-1)}{6}$, the equation $= 4n$ becomes a quadratic $nx^2 + bx + c = 0$ whose roots differ by $2$.</p><p>For roots $\alpha$ and $\alpha + 2$, the difference of roots is $2$, so</p>$$(\text{root difference})^2 = \frac{b^2 - 4nc'}{n^2} = 4,$$<p>where $c' = c - 4n$. Solving over $n \in \mathbb{N}$ with integer $\alpha$, the only case that works is $n = 7$, giving roots $-5$ and $-3$, so $\alpha = -5$.</p><p>(Check $n = 7$: the quadratic is $7x^2 + 56x + 105 = 0 \Rightarrow x^2 + 8x + 15 = 0 \Rightarrow x = -3, -5$.)</p><p>Therefore $n + \alpha = 7 + (-5) = 2$.</p><p><strong>Answer:</strong> C (2)</p></div></details>

PYQ · 2026 2 Apr, Shift 1

If $\displaystyle\sum_{k=1}^{n} a_k = 6n^3$, then $\displaystyle\sum_{k=1}^{6}\left(\dfrac{a_{k+1} - a_k}{36}\right)^2$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>From the partial sum, for $k \ge 1$</p>$$a_k = S_k - S_{k-1} = 6k^3 - 6(k-1)^3 = 6\big(3k^2 - 3k + 1\big) = 18k^2 - 18k + 6.$$<p>Then</p>$$a_{k+1} - a_k = 18\big[(k+1)^2 - k^2\big] - 18\big[(k+1) - k\big] = 18(2k+1) - 18 = 36k.$$<p>So $\dfrac{a_{k+1} - a_k}{36} = k$, and</p>$$\sum_{k=1}^{6} k^2 = \frac{6\cdot 7\cdot 13}{6} = 91.$$<p><strong>Answer:</strong> 91</p></div></details>

PYQ · 2026 4 Apr, Shift 2

Let $\alpha = \dfrac{1}{4} + \dfrac{1}{8} + \dfrac{1}{16} + \ldots \infty$ and $\beta = \dfrac{1}{3} + \dfrac{1}{9} + \dfrac{1}{27} + \ldots \infty$. Then the value of $(0.2)^{\log_{\sqrt{5}}(\alpha)} + (0.04)^{\log_{5}(\beta)}$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Both are infinite geometric series:</p>$$\alpha = \frac{1/4}{1 - 1/2} = \frac{1}{2}, \qquad \beta = \frac{1/3}{1 - 1/3} = \frac{1}{2}.$$<p><strong>First term:</strong> $0.2 = 5^{-1}$ and $\log_{\sqrt5}(1/2) = 2\log_5(1/2)$, so</p>$$(0.2)^{\log_{\sqrt5}(1/2)} = 5^{-2\log_5(1/2)} = \left(\tfrac{1}{2}\right)^{-2} = 4.$$<p><strong>Second term:</strong> $0.04 = 5^{-2}$, so</p>$$(0.04)^{\log_5(1/2)} = 5^{-2\log_5(1/2)} = \left(\tfrac{1}{2}\right)^{-2} = 4.$$<p>Sum $= 4 + 4 = 8$.</p><p><strong>Answer:</strong> C (8)</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let $a_1, a_2, a_3, \ldots$ be an A.P. and $g_1 = a_1, g_2, g_3, \ldots$ be an increasing G.P. If $a_1 = a_2 + g_2 = 1$ and $a_3 + g_3 = 4$, then $a_{10} + g_5$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let the A.P. have first term $a_1 = 1$ and common difference $d$, and the G.P. have $g_1 = 1$ and ratio $r$ (with $r &gt; 1$ since it is increasing).</p><p>From $a_2 + g_2 = 1$:</p>$$(1 + d) + r = 1 \;\Rightarrow\; d = -r.$$<p>From $a_3 + g_3 = 4$:</p>$$(1 + 2d) + r^2 = 4 \;\Rightarrow\; 1 - 2r + r^2 = 4 \;\Rightarrow\; r^2 - 2r - 3 = 0.$$<p>So $(r - 3)(r + 1) = 0$, giving $r = 3$ (taking the increasing root). Then $d = -3$.</p>$$a_{10} = 1 + 9d = 1 - 27 = -26, \qquad g_5 = r^4 = 81.$$

$$a_{10} + g_5 = -26 + 81 = 55.$$<p><strong>Answer:</strong> D ($55$)</p></div></details>

PYQ · 2026 2 Apr, Shift 2

The sum $\dfrac{1^3}{1} + \dfrac{1^3 + 2^3}{1 + 3} + \dfrac{1^3 + 2^3 + 3^3}{1 + 3 + 5} + \cdots$ up to 8 terms, is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The $r$-th term has numerator $1^3 + \dots + r^3 = \left(\dfrac{r(r+1)}{2}\right)^2$ and denominator $1 + 3 + \dots + (2r-1) = r^2$.</p><p>So</p>$$T_r = \frac{\left(\frac{r(r+1)}{2}\right)^2}{r^2} = \frac{(r+1)^2}{4}.$$<p>Summing to $8$ terms:</p>$$\sum_{r=1}^{8} \frac{(r+1)^2}{4} = \frac{1}{4}\big(2^2 + 3^2 + \dots + 9^2\big) = \frac{1}{4}\big(285 - 1\big) = \frac{284}{4} = 71.$$<p>(Here $\sum_{k=1}^{9} k^2 = 285$, minus $1^2$.)</p><p><strong>Answer:</strong> B ($71$)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Consider the quadratic equation $(n^2-2n+2)x^2-3x+(n^2-2n+2)^2=0$, $n\in\mathbb{R}$. Let $\alpha$ be the minimum value of the product of its roots and $\beta$ be the maximum value of the sum of its roots. Then the sum of the first six terms of the G.P., whose first term is $\alpha$ and the common ratio is $\dfrac{\alpha}{\beta}$, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $t = n^2 - 2n + 2 = (n-1)^2 + 1 \ge 1$.</p><p>By Vieta’s formulas:</p>$$\text{product of roots} = \frac{t^2}{t} = t, \qquad \text{sum of roots} = \frac{3}{t}.$$<ul><li>Minimum product $= \min t = 1$ (at $n = 1$), so $\alpha = 1$.</li><li>Maximum sum $= \max \dfrac{3}{t} = \dfrac{3}{1} = 3$, so $\beta = 3$.</li></ul><p>G.P. first term $\alpha = 1$, ratio $\dfrac{\alpha}{\beta} = \dfrac{1}{3}$:</p>$$S_6 = \frac{1 - (1/3)^6}{1 - 1/3} = \frac{3}{2}\left(1 - \frac{1}{729}\right) = \frac{3}{2}\cdot\frac{728}{729} = \frac{364}{243}.$$<p><strong>Answer:</strong> C ($\dfrac{364}{243}$)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

The sum $1+\dfrac{1}{2}\left(1^2+2^2\right)+\dfrac{1}{3}\left(1^2+2^2+3^2\right)+\cdots$ upto 10 terms is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The $r$-th term is</p>$$T_r = \frac{1}{r}\sum_{i=1}^{r} i^2 = \frac{1}{r}\cdot\frac{r(r+1)(2r+1)}{6} = \frac{(r+1)(2r+1)}{6} = \frac{2r^2 + 3r + 1}{6}.$$<p>Summing to $10$ terms:</p>$$\sum_{r=1}^{10} T_r = \frac{1}{6}\left(2\sum r^2 + 3\sum r + \sum 1\right) = \frac{1}{6}\big(2\cdot 385 + 3\cdot 55 + 10\big).$$

$$= \frac{1}{6}(770 + 165 + 10) = \frac{945}{6} = \frac{315}{2}.$$<p><strong>Answer:</strong> C ($\dfrac{315}{2}$)</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Let the sum of the first $n$ terms of an A.P. be $3n^2 + 5n$. Then the sum of squares of the first 10 terms of the A.P. is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The $n$-th term is</p>$$a_n = S_n - S_{n-1} = (3n^2 + 5n) - \big(3(n-1)^2 + 5(n-1)\big) = 6n + 2.$$<p>So the terms are $8, 14, 20, \dots$ up to $a_{10} = 62$.</p>$$\sum_{n=1}^{10} a_n^2 = \sum_{n=1}^{10} (6n+2)^2 = \sum_{n=1}^{10}\big(36n^2 + 24n + 4\big).$$

$$= 36\cdot 385 + 24\cdot 55 + 4\cdot 10 = 13860 + 1320 + 40 = 15220.$$<p><strong>Answer:</strong> C ($15220$)</p></div></details>

PYQ · 2026 5 Apr, Shift 1

$\displaystyle\sum_{n=1}^{10} \left( \frac{528}{n(n+1)(n+2)} \right)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use the telescoping identity</p>$$\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\left[\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right].$$<p>Therefore</p>$$\sum_{n=1}^{10}\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\left[\frac{1}{1\cdot 2} - \frac{1}{11\cdot 12}\right] = \frac{1}{2}\left[\frac{1}{2} - \frac{1}{132}\right].$$

$$= \frac{1}{2}\cdot\frac{66 - 1}{132} = \frac{65}{264}.$$<p>Multiplying by $528$:</p>$$528\cdot\frac{65}{264} = 2\cdot 65 = 130.$$<p><strong>Answer:</strong> B ($130$)</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $\alpha, \beta$ be the roots of the equation $x^2 - x + p = 0$ and $\gamma, \delta$ be the roots the equation $x^2 - 4x + q = 0$; $p, q \in \mathbf{Z}$. If $\alpha, \beta, \gamma, \delta$ are in G.P., then $|p + q|$ equals :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Vieta: $\alpha + \beta = 1$, $\alpha\beta = p$; $\gamma + \delta = 4$, $\gamma\delta = q$.</p><p>Let the G.P. be $A, Ar, Ar^2, Ar^3$ so $\alpha = A$, $\beta = Ar$, $\gamma = Ar^2$, $\delta = Ar^3$.</p>$$\alpha + \beta = A(1 + r) = 1, \qquad \gamma + \delta = Ar^2(1 + r) = 4.$$<p>Dividing: $r^2 = 4 \Rightarrow r = \pm 2$.</p><p>For $r = 2$: $A = \frac{1}{3}$, giving $p = \alpha\beta = \frac{2}{9} \notin \mathbb{Z}$ — rejected.</p><p>For $r = -2$: $A(1 - 2) = 1 \Rightarrow A = -1$. Then</p>$$\alpha = -1,\; \beta = 2,\; \gamma = -4,\; \delta = 8.$$

$$p = \alpha\beta = -2, \qquad q = \gamma\delta = -32 \quad (\text{both integers}).$$

$$|p + q| = |-2 - 32| = 34.$$<p><strong>Answer:</strong> C (34)</p></div></details>

PYQ · 2026 5 Apr, Shift 2

If the sum of the first 10 terms of the series $\dfrac{1}{1 + 1^4 \times 4} + \dfrac{2}{1 + 2^4 \times 4} + \dfrac{3}{1 + 3^4 \times 4} + \dfrac{4}{1 + 4^4 \times 4} + \dots$ is $\dfrac{m}{n}$, $\gcd(m, n) = 1$, then $m + n$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The general term is $\dfrac{r}{1 + 4r^4}$. Factor the denominator (Sophie Germain identity):</p>$$1 + 4r^4 = (2r^2 - 2r + 1)(2r^2 + 2r + 1).$$<p>Note that $(2r^2 + 2r + 1) - (2r^2 - 2r + 1) = 4r$, so</p>$$\frac{r}{1 + 4r^4} = \frac{1}{4}\left[\frac{1}{2r^2 - 2r + 1} - \frac{1}{2r^2 + 2r + 1}\right].$$<p>This telescopes. With $f(r) = 2r^2 - 2r + 1$, note $2r^2 + 2r + 1 = f(r+1)$, so</p>$$\sum_{r=1}^{10} = \frac{1}{4}\left[\frac{1}{f(1)} - \frac{1}{f(11)}\right] = \frac{1}{4}\left[1 - \frac{1}{221}\right] = \frac{1}{4}\cdot\frac{220}{221} = \frac{55}{221}.$$<p>Here $\gcd(55, 221) = 1$, so $m + n = 55 + 221 = 276$.</p><p><strong>Answer:</strong> C (276)</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let $A_1, A_2, A_3, \dots, A_{39}$ be 39 arithmetic means between the numbers 59 and 159. Then the mean of $A_{25}, A_{28}, A_{31}$ and $A_{36}$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Inserting $39$ arithmetic means between $59$ and $159$ gives an A.P. of $41$ terms:</p>$$59, A_1, A_2, \dots, A_{39}, 159.$$<p>Common difference:</p>$$d = \frac{159 - 59}{40} = \frac{100}{40} = \frac{5}{2}.$$<p>Then $A_k = 59 + k\cdot\dfrac{5}{2}$. The required mean is</p>$$\frac{A_{25} + A_{28} + A_{31} + A_{36}}{4} = 59 + \frac{5}{2}\cdot\frac{25 + 28 + 31 + 36}{4} = 59 + \frac{5}{2}\cdot\frac{120}{4}.$$

$$= 59 + \frac{5}{2}\cdot 30 = 59 + 75 = 134.$$<p><strong>Answer:</strong> D (134)</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let $\alpha = 3 + 4 + 8 + 9 + 13 + 14 + \ldots$ upto 40 terms. If $(\tan\beta)^{\frac{\alpha}{1020}}$ is a root of the equation $x^2 + x - 2 = 0$, $\beta \in \left(0, \frac{\pi}{2}\right)$, then $\sin^2\beta + 3\cos^2\beta$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The terms come in pairs: $(3,4), (8,9), (13,14), \dots$ The first elements $3, 8, 13, \dots$ form an A.P. with difference $5$, and the second element of each pair is one more than the first.</p><p>40 terms $=$ 20 pairs. The $i$-th pair is $(5i - 2,\, 5i - 1)$ with pair sum $10i - 3$:</p>$$\alpha = \sum_{i=1}^{20}(10i - 3) = 10\cdot\frac{20\cdot 21}{2} - 3\cdot 20 = 2100 - 60 = 2040.$$<p>So $\dfrac{\alpha}{1020} = 2$.</p><p>The roots of $x^2 + x - 2 = 0$ are $x = 1$ and $x = -2$. Since $\beta \in (0, \frac{\pi}{2})$, $\tan\beta &gt; 0$, so $(\tan\beta)^2 &gt; 0$, forcing the root to be $1$:</p>$$(\tan\beta)^2 = 1 \;\Rightarrow\; \tan\beta = 1 \;\Rightarrow\; \beta = \frac{\pi}{4}.$$<p>Then $\sin^2\beta = \cos^2\beta = \frac{1}{2}$, so</p>$$\sin^2\beta + 3\cos^2\beta = \frac{1}{2} + \frac{3}{2} = 2.$$<p><strong>Answer:</strong> A (2)</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let $f$ be a polynomial function such that $\log_2(f(x)) = \left(\log_2\left(2 + \frac{2}{3} + \frac{2}{9} + \ldots \infty\right)\right) \cdot \log_3\left(1 + \frac{f(x)}{f(1/x)}\right)$, $x > 0$ and $f(6) = 37$. Then $\displaystyle\sum_{n=1}^{10} f(n)$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The infinite series is geometric:</p>$$2 + \frac{2}{3} + \frac{2}{9} + \ldots = \frac{2}{1 - 1/3} = 3.$$<p>So the relation becomes</p>$$\log_2 f(x) = \log_2 3 \cdot \log_3\!\left(1 + \frac{f(x)}{f(1/x)}\right) = \log_2\!\left(1 + \frac{f(x)}{f(1/x)}\right),$$<p>using $\log_2 3 \cdot \log_3 y = \log_2 y$. Hence</p>$$f(x) = 1 + \frac{f(x)}{f(1/x)}.$$<p>Try $f(x) = 1 + x^k$. Then</p>$$\frac{f(x)}{f(1/x)} = \frac{1 + x^k}{1 + x^{-k}} = \frac{1 + x^k}{(x^k + 1)/x^k} = x^k,$$<p>so $1 + \frac{f(x)}{f(1/x)} = 1 + x^k = f(x)$. Consistent.</p><p>Using $f(6) = 37$:</p>$$1 + 6^k = 37 \;\Rightarrow\; 6^k = 36 \;\Rightarrow\; k = 2, \quad f(x) = 1 + x^2.$$<p>Therefore</p>$$\sum_{n=1}^{10} f(n) = \sum_{n=1}^{10}(1 + n^2) = 10 + \frac{10\cdot 11\cdot 21}{6} = 10 + 385 = 395.$$<p><strong>Answer:</strong> 395</p></div></details>

From TestGuru · our mock-test platform

## You've read Sequences and Series Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sequences-series&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsequences-series%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/sequences-series/previous-year-questions/](https://jeenotes.in/mathematics/sequences-series/previous-year-questions/) · raw HTML: `offline/mathematics/sequences-series/previous-year-questions/index.html`_
