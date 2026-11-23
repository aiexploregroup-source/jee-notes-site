---
title: "JEE Main 2026 — 6 April Shift 2 (Mock Test)"
source: "https://jeenotes.in/mock-tests/jee-main-2026-apr-6-shift-2/"
description: "Attempt the full JEE Main 2026 6 April Shift 2 paper online — timed, auto-scored with the official NTA answer key and worked solutions."
html: "../../../offline/mock-tests/jee-main-2026-apr-6-shift-2/index.html"
extracted: "2026-11-23"
---

> Attempt the full JEE Main 2026 6 April Shift 2 paper online — timed, auto-scored with the official NTA answer key and worked solutions.

Loading test…

<details class="mock-paper-text prose katex-lazy"><summary>Browse all 75 questions &amp; solutions (text version)</summary><p>JEE Main 2026 · 06 Apr · Shift 2 — 75 questions,
180 minutes.
Marking: +4 for a correct answer,
-1 for an incorrect one.
Answer key is the official NTA final key; worked solutions are ours.</p><section class="mock-q" id="q-1"><h3>Question 1 · Mathematics</h3><p>Let $f:\mathbb{R}\to\mathbb{R}$ be defined as $f(x)=\dfrac{2x^2-3x+2}{3x^2+x+3}$. Then $f$ is:</p><ol type="A"><li>both one-one and onto</li><li>one-one but not onto</li><li>onto but not one-one</li><li>neither one-one nor onto</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — neither one-one nor onto</p><p>The denominator $3x^2 + x + 3$ has discriminant $1 - 36 &lt; 0$, so it is always positive and $f$ is defined on all of $\mathbb{R}$.</p><p><strong>Onto?</strong> Set $y = f(x)$ and clear denominators:</p>$$y(3x^2 + x + 3) = 2x^2 - 3x + 2 \implies (3y - 2)x^2 + (y + 3)x + (3y - 2) = 0.$$<p>For a real $x$ (with $3y - 2 \ne 0$) the discriminant must be $\ge 0$:</p>$$(y+3)^2 - 4(3y-2)^2 \ge 0 \implies (y - \tfrac17)(y - \tfrac75) \le 0 \implies y \in \left[\tfrac17, \tfrac75\right].$$<p>The range is the bounded interval $\left[\tfrac17, \tfrac75\right] \ne \mathbb{R}$, so $f$ is <strong>not onto</strong>.</p><p><strong>One-one?</strong> For a generic value $y$ in the range the quadratic in $x$ has two distinct roots, so different $x$ map to the same $y$ (e.g. $f(0) = \tfrac23 = f\!\left(\tfrac{?}{}\right)$ has a second preimage). Hence $f$ is <strong>not one-one</strong>.</p><p>$f$ is neither one-one nor onto.</p><p><strong>Answer:</strong> D (neither one-one nor onto)</p></details></section><section class="mock-q" id="q-2"><h3>Question 2 · Mathematics</h3><p>Consider the quadratic equation $(n^2-2n+2)x^2-3x+(n^2-2n+2)^2=0$, $n\in\mathbb{R}$. Let $\alpha$ be the minimum value of the product of its roots and $\beta$ be the maximum value of the sum of its roots. Then the sum of the first six terms of the G.P., whose first term is $\alpha$ and the common ratio is $\dfrac{\alpha}{\beta}$, is:</p><ol type="A"><li>$\dfrac{61}{37}$</li><li>$\dfrac{121}{81}$</li><li>$\dfrac{364}{243}$</li><li>$\dfrac{1093}{729}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\dfrac{364}{243}$</p><p>Let $t = n^2 - 2n + 2 = (n-1)^2 + 1 \ge 1$.</p><p>By Vieta’s formulas:</p>$$\text{product of roots} = \frac{t^2}{t} = t, \qquad \text{sum of roots} = \frac{3}{t}.$$<ul><li>Minimum product $= \min t = 1$ (at $n = 1$), so $\alpha = 1$.</li><li>Maximum sum $= \max \dfrac{3}{t} = \dfrac{3}{1} = 3$, so $\beta = 3$.</li></ul><p>G.P. first term $\alpha = 1$, ratio $\dfrac{\alpha}{\beta} = \dfrac{1}{3}$:</p>$$S_6 = \frac{1 - (1/3)^6}{1 - 1/3} = \frac{3}{2}\left(1 - \frac{1}{729}\right) = \frac{3}{2}\cdot\frac{728}{729} = \frac{364}{243}.$$<p><strong>Answer:</strong> C ($\dfrac{364}{243}$)</p></details></section><section class="mock-q" id="q-3"><h3>Question 3 · Mathematics</h3><p>Let $S=\left\{z\in\mathbb{C}:z^2+\sqrt{6}\,iz-3=0\right\}$. Then $\displaystyle\sum_{z\in S}z^8$ is equal to:</p><ol type="A"><li>$162$</li><li>$184$</li><li>$262$</li><li>$324$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $162$</p><p>Solve the quadratic:</p>$$z = \frac{-\sqrt6\,i \pm \sqrt{(\sqrt6\,i)^2 - 4(-3)}}{2} = \frac{-\sqrt6\,i \pm \sqrt{-6 + 12}}{2} = \frac{-\sqrt6\,i \pm \sqrt6}{2}$$<p>So the two roots are $z = \dfrac{\pm\sqrt6 - \sqrt6\,i}{2}$. Compute the modulus and square of each:</p>$$|z|^2 = \frac{6 + 6}{4} = 3$$<p>For $z_1 = \dfrac{\sqrt6 - \sqrt6\,i}{2}$:</p>$$z_1^2 = \frac{6(1 - i)^2}{4} = \frac{6(-2i)}{4} = -3i$$<p>For $z_2 = \dfrac{-\sqrt6 - \sqrt6\,i}{2}$:</p>$$z_2^2 = \frac{6(1 + i)^2}{4} = \frac{6(2i)}{4} = 3i$$<p>Now raise to the 8th power via $z^8 = (z^2)^4$:</p>$$z_1^8 = (-3i)^4 = 3^4 \cdot i^4 = 81, \qquad z_2^8 = (3i)^4 = 81$$

$$\sum_{z \in S} z^8 = 81 + 81 = 162$$<p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-4"><h3>Question 4 · Mathematics</h3><p>The sum of all possible values of $\theta\in[0,2\pi]$, for which the system of equations:
$$x\cos3\theta-8y-12z=0$$
$$x\cos2\theta+3y+3z=0$$
$$x+y+3z=0$$
has a non-trivial solution, is equal to:</p><ol type="A"><li>$\pi$</li><li>$2\pi$</li><li>$3\pi$</li><li>$4\pi$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $4\pi$</p><p>A homogeneous system has a non-trivial solution iff its coefficient determinant is zero:</p>$$\begin{vmatrix} \cos3\theta &amp; -8 &amp; -12 \\ \cos2\theta &amp; 3 &amp; 3 \\ 1 &amp; 1 &amp; 3 \end{vmatrix} = 0.$$<p>Expanding along the first row:</p>$$\cos3\theta(9 - 3) + 8(3\cos2\theta - 3) - 12(\cos2\theta - 3)$$<p></p>$$= 6\cos3\theta + 24\cos2\theta - 24 - 12\cos2\theta + 36 = 6\cos3\theta + 12\cos2\theta + 12.$$<p>Setting this to zero:</p>$$\cos3\theta + 2\cos2\theta + 2 = 0.$$<p>Write $\cos3\theta = 4\cos^3\theta - 3\cos\theta$ and $\cos2\theta = 2\cos^2\theta - 1$; let $c = \cos\theta$:</p>$$4c^3 - 3c + 2(2c^2 - 1) + 2 = 4c^3 + 4c^2 - 3c = c(4c^2 + 4c - 3) = c(2c - 1)(2c + 3) = 0.$$<p>Since $2c + 3 = 0$ gives $c = -\tfrac32$ (rejected), the solutions are $\cos\theta = 0$ or $\cos\theta = \tfrac12$.</p><p>In $[0, 2\pi]$:</p>$$\cos\theta = 0 \Rightarrow \theta = \tfrac{\pi}{2}, \tfrac{3\pi}{2}; \qquad \cos\theta = \tfrac12 \Rightarrow \theta = \tfrac{\pi}{3}, \tfrac{5\pi}{3}.$$<p>Sum:</p>$$\frac{\pi}{2} + \frac{3\pi}{2} + \frac{\pi}{3} + \frac{5\pi}{3} = 2\pi + 2\pi = 4\pi.$$<p><strong>Answer:</strong> D ($4\pi$)</p></details></section><section class="mock-q" id="q-5"><h3>Question 5 · Mathematics</h3><p>Let $A=\begin{bmatrix}1&amp;0&amp;0\\3&amp;1&amp;0\\9&amp;3&amp;1\end{bmatrix}$ and $B=[b_{ij}]$, $1\le i,j\le 3$. If $B=A^{99}-I$, then the value of $\dfrac{b_{31}-b_{21}}{b_{32}}$ is:</p><ol type="A"><li>$99$</li><li>$199$</li><li>$149$</li><li>$159$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $149$</p><p>Write $A = I + N$ where</p>$$N = \begin{bmatrix} 0 &amp; 0 &amp; 0 \\ 3 &amp; 0 &amp; 0 \\ 9 &amp; 3 &amp; 0 \end{bmatrix}.$$<p>Then $N^2 = \begin{bmatrix} 0 &amp; 0 &amp; 0 \\ 0 &amp; 0 &amp; 0 \\ 9 &amp; 0 &amp; 0 \end{bmatrix}$ and $N^3 = 0$ (nilpotent).</p><p>By the binomial theorem (terms with $N^3$ and higher vanish):</p>$$A^{99} = (I + N)^{99} = I + 99N + \binom{99}{2}N^2.$$<p>So</p>$$B = A^{99} - I = 99N + \binom{99}{2}N^2, \qquad \binom{99}{2} = \frac{99\cdot98}{2} = 4851.$$<p>Read off the needed entries:</p>$$b_{21} = 99\cdot3 = 297, \quad b_{32} = 99\cdot3 = 297,$$<p></p>$$b_{31} = 99\cdot9 + 4851\cdot9 = 9(99 + 4851) = 9\cdot4950 = 44550.$$<p>Therefore</p>$$\frac{b_{31} - b_{21}}{b_{32}} = \frac{44550 - 297}{297} = \frac{44253}{297} = 149.$$<p><strong>Answer:</strong> C ($149$)</p></details></section><section class="mock-q" id="q-6"><h3>Question 6 · Mathematics</h3><p>The sum $1+\dfrac{1}{2}\left(1^2+2^2\right)+\dfrac{1}{3}\left(1^2+2^2+3^2\right)+\cdots$ upto 10 terms is equal to:</p><ol type="A"><li>$130$</li><li>$155$</li><li>$\dfrac{315}{2}$</li><li>$\dfrac{325}{2}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\dfrac{315}{2}$</p><p>The $r$-th term is</p>$$T_r = \frac{1}{r}\sum_{i=1}^{r} i^2 = \frac{1}{r}\cdot\frac{r(r+1)(2r+1)}{6} = \frac{(r+1)(2r+1)}{6} = \frac{2r^2 + 3r + 1}{6}.$$<p>Summing to $10$ terms:</p>$$\sum_{r=1}^{10} T_r = \frac{1}{6}\left(2\sum r^2 + 3\sum r + \sum 1\right) = \frac{1}{6}\big(2\cdot 385 + 3\cdot 55 + 10\big).$$

$$= \frac{1}{6}(770 + 165 + 10) = \frac{945}{6} = \frac{315}{2}.$$<p><strong>Answer:</strong> C ($\dfrac{315}{2}$)</p></details></section><section class="mock-q" id="q-7"><h3>Question 7 · Mathematics</h3><p>A building has ground floor and 10 more floors. Nine persons enter in a lift at the ground floor. The lift goes up to the $10^{\text{th}}$ floor. The number of ways, in which any 4 persons exit at a floor and the remaining 5 persons exit at a different floor, if the lift does not stop at the first and the second floors, is equal to:</p><ol type="A"><li>$2184$</li><li>$3064$</li><li>$7056$</li><li>$11340$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $7056$</p><p>The lift does not stop at floors $1$ and $2$, so the available exit floors are $3, 4, \ldots, 10$, i.e. $8$ floors.</p><ul><li>Choose <strong>which 4</strong> of the $9$ persons form the group that leaves together: $\binom{9}{4}$. The remaining $5$ are automatically the other group.</li><li>Assign floors: the group of $4$ and the group of $5$ leave at <strong>two different</strong> floors. Pick an ordered pair of distinct floors (one for each distinguishable group): $8 \times 7 = 56$.</li></ul>$$\binom{9}{4}\times 8 \times 7 = 126 \times 56 = 7056.$$<p><strong>Answer:</strong> C (7056)</p></details></section><section class="mock-q" id="q-8"><h3>Question 8 · Mathematics</h3><p>Let the mean and the variance of seven observations $2,4,\alpha,8,\beta,12,14$, $\alpha&lt;\beta$, be 8 and 16 respectively. Then the quadratic equation whose roots are $3\alpha+2$ and $2\beta+1$ is:</p><ol type="A"><li>$x^2-35x+306=0$</li><li>$x^2-41x+420=0$</li><li>$x^2-45x+506=0$</li><li>$x^2-37x+342=0$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $x^2-41x+420=0$</p><p><strong>Mean $= 8$:</strong></p>$$2+4+\alpha+8+\beta+12+14 = 56 \Rightarrow \alpha + \beta = 16.$$<p><strong>Variance $= 16$:</strong> $\ \dfrac{\sum x_i^2}{7} - 64 = 16 \Rightarrow \sum x_i^2 = 560.$</p>$$4+16+\alpha^2+64+\beta^2+144+196 = 560 \Rightarrow \alpha^2 + \beta^2 = 136.$$<p>From $\alpha+\beta=16$: $\alpha^2+\beta^2 = 256 - 2\alpha\beta = 136 \Rightarrow \alpha\beta = 60.$
Roots of $t^2 - 16t + 60 = 0$ are $6$ and $10$. With $\alpha &lt; \beta$: $\alpha = 6,\ \beta = 10.$</p><p><strong>New roots:</strong></p>$$3\alpha + 2 = 20,\qquad 2\beta + 1 = 21.$$<p>Sum $= 41$, product $= 420$:</p>$$x^2 - 41x + 420 = 0.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-9"><h3>Question 9 · Mathematics</h3><p>A bag contains 6 blue and 6 green balls. Pairs of balls are drawn without replacement until the bag is empty. The probability that each drawn pair consists of one blue and one green ball is:</p><ol type="A"><li>$\dfrac{63}{925}$</li><li>$\dfrac{17}{231}$</li><li>$\dfrac{16}{231}$</li><li>$\dfrac{64}{925}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\dfrac{16}{231}$</p><p>Treat the $12$ balls as distinct and count perfect matchings (unordered partitions into $6$ pairs), since the order of drawing pairs does not affect whether each pair is mixed.</p><p><strong>Total perfect matchings</strong> of $12$ distinct balls:</p>$$11!! = 11\cdot 9\cdot 7\cdot 5\cdot 3\cdot 1 = 10395.$$<p><strong>Favourable matchings</strong> — each pair one blue and one green — correspond to bijections between the $6$ blue and $6$ green balls:</p>$$6! = 720.$$<p><strong>Probability:</strong></p>$$P = \dfrac{720}{10395} = \dfrac{16}{231}.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-10"><h3>Question 10 · Mathematics</h3><p>Let $C$ be a circle having centre in the first quadrant and touching the $x$-axis at a distance of 3 units from the origin. If the circle $C$ has an intercept of length $6\sqrt{3}$ on $y$-axis, then the length of the chord of the circle $C$ on the line $x-y=3$ is:</p><ol type="A"><li>$8$</li><li>$6$</li><li>$6\sqrt{2}$</li><li>$8\sqrt{2}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $6\sqrt{2}$</p><p>Touching the $x$-axis at $(3,0)$ with centre in the first quadrant $\Rightarrow$ centre $(3,r)$, radius $r$, circle $(x-3)^2+(y-r)^2=r^2$.</p><p>$y$-axis intercept: at $x=0$, $(y-r)^2=r^2-9$, length $2\sqrt{r^2-9}=6\sqrt3\Rightarrow r^2-9=27\Rightarrow r=6$.</p><p>Distance from $(3,6)$ to $x-y=3$: $\dfrac{|3-6-3|}{\sqrt2}=3\sqrt2$. Chord:</p>$$2\sqrt{r^2-d^2}=2\sqrt{36-18}=6\sqrt2.$$<p><strong>Answer:</strong> C ($6\sqrt{2}$)</p></details></section><section class="mock-q" id="q-11"><h3>Question 11 · Mathematics</h3><p>The eccentricity of an ellipse $E$ with centre at the origin $O$ is $\dfrac{\sqrt{3}}{2}$ and its directrices are $x=\pm\dfrac{4\sqrt{6}}{3}$. Let $H:\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ be a hyperbola whose eccentricity is equal to the length of semi-major axis of $E$, and whose length of latus rectum is equal to the length of minor axis of $E$. Then the distance between the foci of $H$ is:</p><ol type="A"><li>$\dfrac{4\sqrt{2}}{\sqrt{7}}$</li><li>$\dfrac{4\sqrt{2}}{7}$</li><li>$\dfrac{4}{\sqrt{7}}$</li><li>$\dfrac{8}{7}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $\dfrac{8}{7}$</p><p>Ellipse: directrix $\dfrac{a_E}{e}=\dfrac{4\sqrt6}{3}$ with $e=\dfrac{\sqrt3}{2}$, so</p>$$a_E=\frac{\sqrt3}{2}\cdot\frac{4\sqrt6}{3}=2\sqrt2.$$<p>$b_E^2=a_E^2(1-e^2)=8\cdot\tfrac14=2$, so semi-minor $=\sqrt2$, minor axis $=2\sqrt2$.</p><p>Hyperbola: $e_H=$ (semi-major of $E$) $=2\sqrt2$; latus rectum $\dfrac{2b^2}{a}=$ (minor axis) $=2\sqrt2$, so $\dfrac{b^2}{a}=\sqrt2$.
From $e_H^2=1+\dfrac{b^2}{a^2}=8\Rightarrow b^2=7a^2$. Then $7a^2=\sqrt2\,a\Rightarrow a=\dfrac{\sqrt2}{7},\ b^2=\dfrac{2}{7}.$</p>$$c^2=a^2+b^2=\frac{2}{49}+\frac{2}{7}=\frac{16}{49}\Rightarrow 2c=\frac{8}{7}.$$<p><strong>Answer:</strong> D ($\dfrac{8}{7}$)</p></details></section><section class="mock-q" id="q-12"><h3>Question 12 · Mathematics</h3><p>Let $x=9$ be a directrix of an ellipse $E$, whose centre is at the origin and eccentricity is $\dfrac{1}{3}$. Let $P(\alpha,0)$, $\alpha&gt;0$, be a focus of $E$ and $AB$ be a chord passing through $P$. Then the locus of the mid point of $AB$ is:</p><ol type="A"><li>$9y^2=8x(1-x)$</li><li>$3y^2=4x(1-x)$</li><li>$9y^2=8x(x-1)$</li><li>$3y^2=4x(x-1)$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $9y^2=8x(1-x)$</p><p>Directrix $\dfrac{a}{e}=9$ with $e=\tfrac13\Rightarrow a=3,\ a^2=9$. Focus at $ae=1$, so $P=(1,0)$. Also $b^2=a^2(1-e^2)=8$, giving $E:\dfrac{x^2}{9}+\dfrac{y^2}{8}=1$.</p><p>For a chord with midpoint $(h,k)$, the chord equation is $T=S_1$:</p>$$\frac{hx}{9}+\frac{ky}{8}=\frac{h^2}{9}+\frac{k^2}{8}.$$<p>It passes through $P(1,0)$:</p>$$\frac{h}{9}=\frac{h^2}{9}+\frac{k^2}{8}\Rightarrow 8h^2+9k^2-8h=0\Rightarrow 9k^2=8h(1-h).$$<p>Locus: $9y^2=8x(1-x)$.</p><p><strong>Answer:</strong> A ($9y^2=8x(1-x)$)</p></details></section><section class="mock-q" id="q-13"><h3>Question 13 · Mathematics</h3><p>If $\sin\left(\tan^{-1}\left(x\sqrt{2}\right)\right)=\cot\left(\sin^{-1}\sqrt{1-x^2}\right)$, $x\in(0,1)$, then the value of $x$ is:</p><ol type="A"><li>$\dfrac{1}{2}$</li><li>$\dfrac{1}{3}$</li><li>$\dfrac{2}{3}$</li><li>$\dfrac{5}{8}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\dfrac{1}{2}$</p><p><strong>Left side.</strong> If $\phi = \tan^{-1}(x\sqrt2)$ then $\tan\phi = x\sqrt2$, so</p>$$\sin\phi = \frac{x\sqrt2}{\sqrt{1 + 2x^2}}.$$<p><strong>Right side.</strong> Let $\psi = \sin^{-1}\sqrt{1-x^2}$, so $\sin\psi = \sqrt{1-x^2}$ and (since $x\in(0,1)$, $\psi\in(0,\tfrac{\pi}{2})$) $\cos\psi = \sqrt{1-(1-x^2)} = x$. Then</p>$$\cot\psi = \frac{x}{\sqrt{1-x^2}}.$$<p><strong>Equate</strong> and cancel $x&gt;0$:</p>$$\frac{\sqrt2}{\sqrt{1+2x^2}} = \frac{1}{\sqrt{1-x^2}} \quad\Longrightarrow\quad 2(1-x^2) = 1 + 2x^2.$$<p>Solving:</p>$$2 - 2x^2 = 1 + 2x^2 \quad\Longrightarrow\quad 4x^2 = 1 \quad\Longrightarrow\quad x = \frac12.$$<p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-14"><h3>Question 14 · Mathematics</h3><p>The shortest distance between the lines $\dfrac{x-4}{1}=\dfrac{y-3}{2}=\dfrac{z-2}{-3}$ and $\dfrac{x+2}{2}=\dfrac{y-6}{4}=\dfrac{z-5}{-5}$ is:</p><ol type="A"><li>$\dfrac{5\sqrt{6}}{6}$</li><li>$2\sqrt{5}$</li><li>$3\sqrt{5}$</li><li>$4\sqrt{5}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $3\sqrt{5}$</p><p>With $\vec{d_1}=(1,2,-3)$, $\vec{d_2}=(2,4,-5)$:</p>$$\vec{n} = \vec{d_1}\times\vec{d_2} = (2,\ -1,\ 0),\qquad |\vec{n}| = \sqrt{5}$$<p>Separation of base points: $\vec{a_2}-\vec{a_1} = (-6,\ 3,\ 3)$.</p>$$\text{SD} = \frac{|(-6)(2)+(3)(-1)+(3)(0)|}{\sqrt5} = \frac{|-15|}{\sqrt5} = \frac{15}{\sqrt5} = 3\sqrt{5}$$<p><strong>Answer:</strong> C ($3\sqrt{5}$)</p></details></section><section class="mock-q" id="q-15"><h3>Question 15 · Mathematics</h3><p>Let $\vec{a}=2\hat{i}+3\hat{j}+3\hat{k}$ and $\vec{b}=6\hat{i}+3\hat{j}+3\hat{k}$. Then the square of the area of the triangle with adjacent sides determined by the vectors $\left(2\vec{a}+3\vec{b}\right)$ and $\left(\vec{a}-\vec{b}\right)$ is:</p><ol type="A"><li>$450$</li><li>$900$</li><li>$1800$</li><li>$2400$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $1800$</p><p>The area of a triangle with adjacent side vectors $\vec p,\vec q$ is $\tfrac12|\vec p\times\vec q|$, so the <strong>square of the area</strong> is $\tfrac14|\vec p\times\vec q|^2$.</p><p>Using bilinearity of the cross product with $\vec p = 2\vec a + 3\vec b,\ \vec q = \vec a - \vec b$:</p>$$\vec p\times\vec q = (2\vec a + 3\vec b)\times(\vec a - \vec b) = -2(\vec a\times\vec b) + 3(\vec b\times\vec a) = -2(\vec a\times\vec b) - 3(\vec a\times\vec b) = -5(\vec a\times\vec b).$$<p>Compute $\vec a\times\vec b$ with $\vec a=(2,3,3),\ \vec b=(6,3,3)$:</p>$$\vec a\times\vec b = \begin{vmatrix}\hat i &amp; \hat j &amp; \hat k\\ 2 &amp; 3 &amp; 3\\ 6 &amp; 3 &amp; 3\end{vmatrix} = \hat i(3\cdot3 - 3\cdot3) - \hat j(2\cdot3 - 3\cdot6) + \hat k(2\cdot3 - 3\cdot6) = 0\,\hat i + 12\,\hat j - 12\,\hat k.$$<p>So $|\vec a\times\vec b|^2 = 0 + 144 + 144 = 288$, and</p>$$|\vec p\times\vec q|^2 = 25\cdot 288 = 7200.$$<p>The square of the area is</p>$$\frac14\cdot 7200 = 1800.$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-16"><h3>Question 16 · Mathematics</h3><p>Let $\displaystyle\lim_{x\to 2}\dfrac{(\tan(x-2))\left(rx^2+(p-2)x-2p\right)}{(x-2)^2}=5$ for some $r,p\in\mathbb{R}$. If the set of all possible values of $q$, such that the roots of the equation $rx^2-px+q=0$ lie in $(0,2)$, be the interval $(\alpha,\beta)$, then $4(\alpha+\beta)$ equals:</p><ol type="A"><li>$11$</li><li>$13$</li><li>$17$</li><li>$21$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $17$</p><p><strong>Find $r,p$.</strong> As $x\to 2$, $\tan(x-2)\to 0$, so the quadratic must vanish at $x=2$:</p>$$4r + 2(p-2) - 2p = 4r - 4 = 0 \ \Rightarrow\ r = 1.$$<p>Then $x^2 + (p-2)x - 2p = (x-2)(x+p)$, and using $\tan(x-2)\sim (x-2)$:</p>$$\lim_{x\to 2}\dfrac{(x-2)\,(x-2)(x+p)}{(x-2)^2} = (2+p) = 5 \ \Rightarrow\ p = 3.$$<p><strong>Roots of $x^2 - 3x + q = 0$ in $(0,2)$.</strong> Let $\phi(x) = x^2 - 3x + q$. Both roots lie in $(0,2)$ iff:</p>$$\phi(0) &gt; 0:\ q &gt; 0,\qquad \phi(2) &gt; 0:\ 4 - 6 + q &gt; 0 \Rightarrow q &gt; 2,$$<p></p>$$\text{discriminant} \ge 0:\ 9 - 4q \ge 0 \Rightarrow q \le \tfrac94,\qquad 0 &lt; \tfrac32 &lt; 2\ (\text{vertex, OK}).$$<p>So $q \in (2, \tfrac94)$, giving $\alpha = 2,\ \beta = \tfrac94$:</p>$$4(\alpha + \beta) = 4\left(2 + \tfrac94\right) = 4\cdot\tfrac{17}{4} = 17$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-17"><h3>Question 17 · Mathematics</h3><p>Let $A=\begin{bmatrix}1&amp;3&amp;-1\\2&amp;1&amp;\alpha\\0&amp;1&amp;-1\end{bmatrix}$ be a singular matrix. Let $f(x)=\displaystyle\int_0^x\left(t^2+2t+3\right)dt$, $x\in[1,\alpha]$. If $M$ and $m$ are respectively the maximum and the minimum values of $f$ in $[1,\alpha]$, then $3(M-m)$ is equal to:</p><ol type="A"><li>$64$</li><li>$68$</li><li>$72$</li><li>$76$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $68$</p><p><strong>Find $\alpha$.</strong> A singular matrix has zero determinant. Expanding,</p>$$\det A = 1(1\cdot(-1) - \alpha\cdot 1) - 3(2\cdot(-1) - \alpha\cdot 0) + (-1)(2\cdot 1 - 0) = 3 - \alpha.$$<p>So $\det A = 0 \Rightarrow \alpha = 3$, giving the interval $[1,3]$.</p><p><strong>Analyze $f$.</strong> $f(x) = \int_0^x (t^2 + 2t + 3)\,dt = \dfrac{x^3}{3} + x^2 + 3x$. Since the integrand $t^2 + 2t + 3 = (t+1)^2 + 2 &gt; 0$, $f$ is strictly increasing, so on $[1,3]$:</p>$$m = f(1) = \frac{1}{3} + 1 + 3 = \frac{13}{3},\qquad M = f(3) = 9 + 9 + 9 = 27.$$<p>Therefore</p>$$3(M - m) = 3\left(27 - \frac{13}{3}\right) = 81 - 13 = 68.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-18"><h3>Question 18 · Mathematics</h3><p>Let $f:\mathbb{R}\to\mathbb{R}$ be such that $f(xy)=f(x)f(y)$, for all $x,y\in\mathbb{R}$ and $f(0)\neq 0$. Let $g:[1,\infty)\to\mathbb{R}$ be a differentiable function such that
$$x^2g(x)=\int_1^x\left(t^2f(t)-tg(t)\right)dt.$$
Then $g(2)$ is equal to:</p><ol type="A"><li>$\dfrac{13}{8}$</li><li>$\dfrac{11}{16}$</li><li>$\dfrac{15}{32}$</li><li>$\dfrac{17}{64}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\dfrac{15}{32}$</p><p><strong>Determine $f$.</strong> Put $y = 0$: $f(0) = f(x)f(0)$, and since $f(0)\ne 0$, $f(x) = 1$ for all $x$.</p><p><strong>Differentiate the integral equation</strong> (using $x^2 f(x) = x^2$):</p>$$\frac{d}{dx}\big(x^2 g(x)\big) = x^2 - x g(x) \implies 2x g + x^2 g' = x^2 - x g.$$<p>Divide by $x$:</p>$$x g' + 3g = x.$$<p>This is linear: $g' + \dfrac{3}{x}g = 1$ with integrating factor $x^3$. Then $(x^3 g)' = x^3$, so</p>$$x^3 g = \frac{x^4}{4} + C \implies g(x) = \frac{x}{4} + \frac{C}{x^3}.$$<p><strong>Initial condition.</strong> At $x = 1$, $x^2 g(x) = \int_1^1(\cdots) = 0 \Rightarrow g(1) = 0 \Rightarrow \tfrac14 + C = 0 \Rightarrow C = -\tfrac14$.</p><p>Thus $g(x) = \dfrac{x}{4} - \dfrac{1}{4x^3}$, and</p>$$g(2) = \frac{2}{4} - \frac{1}{4\cdot 8} = \frac{1}{2} - \frac{1}{32} = \frac{15}{32}.$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-19"><h3>Question 19 · Mathematics</h3><p>The area of the region $\{(x,y):x^2-8x\le y\le -x\}$ is:</p><ol type="A"><li>$\dfrac{343}{6}$</li><li>$\dfrac{637}{6}$</li><li>$\dfrac{437}{6}$</li><li>$\dfrac{523}{6}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\dfrac{343}{6}$</p><p>The lower boundary is the parabola $y = x^2 - 8x$ and the upper boundary is the line $y = -x$.</p><p><strong>Intersections.</strong> $x^2 - 8x = -x \Rightarrow x^2 - 7x = 0 \Rightarrow x = 0,\ 7$.</p><p>For $0 \le x \le 7$ the line is above the parabola (e.g. at $x=1$: $-1 &gt; -7$), so the vertical width is</p>$$(-x) - (x^2 - 8x) = 7x - x^2.$$<p><strong>Integrate.</strong></p>$$\text{Area} = \int_0^7 (7x - x^2)\,dx = \left[\frac{7x^2}{2} - \frac{x^3}{3}\right]_0^7 = \frac{7\cdot 49}{2} - \frac{343}{3} = \frac{343}{2} - \frac{343}{3} = \frac{343}{6}.$$<p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-20"><h3>Question 20 · Mathematics</h3><p>The value of the integral $\displaystyle\int_{-1}^{1}\left(\dfrac{x^3+|x|+1}{x^2+2|x|+1}\right)dx$ is equal to:</p><ol type="A"><li>$3\log_e 2$</li><li>$2\log_e 2$</li><li>$5\log_e 3$</li><li>$3\log_e 3$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $2\log_e 2$</p><p>The denominator $x^2 + 2|x| + 1 = (|x| + 1)^2$ is <strong>even</strong>. Split the numerator:</p><ul><li>$\dfrac{x^3}{(|x|+1)^2}$ is <strong>odd</strong> (odd numerator over even denominator), so it integrates to $0$ over $[-1,1]$.</li><li>$\dfrac{|x| + 1}{(|x|+1)^2} = \dfrac{1}{|x|+1}$ is <strong>even</strong>.</li></ul><p>Therefore</p>$$I = \int_{-1}^{1}\frac{dx}{|x|+1} = 2\int_0^1 \frac{dx}{x+1} = 2\big[\ln(x+1)\big]_0^1 = 2\ln 2.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-21"><h3>Question 21 · Mathematics · Numerical</h3><p>Let $R=\left\{(x,y)\in\mathbb{N}\times\mathbb{N}:\log_e(x+y)\le 2\right\}$. Then the minimum number of elements, required to be added in $R$ to make it a transitive relation, is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
15</p><p>$\log_e(x+y) \le 2 \iff x + y \le e^2 \approx 7.389$. With $x, y \in \mathbb{N}$ (so $\ge 1$), this means</p>$$R = \{(x,y) : x + y \le 7\}.$$<p>Counting by $s = x+y$ from $2$ to $7$: sizes $1,2,3,4,5,6$, so $|R| = 21$.</p><p>For transitivity we need: whenever $(x,y), (y,z) \in R$, also $(x,z) \in R$. The minimum superset that is transitive is the <strong>transitive closure</strong> of $R$.</p><p>$R$ contains $(1,1),\dots$ and links every $a \le 6$ to every $b \le 6$ eventually (e.g. $(1,6)$ and $(6,1)$ chain to force $(a,b)$ for all $a,b \in \{1,\dots,6\}$). Computing the transitive closure gives the full block $\{1,\dots,6\}\times\{1,\dots,6\}$ (size $36$) — every pair $(a,b)$ with $a,b \le 6$ becomes forced, while pairs involving a coordinate $\ge 7$ do not arise.</p>$$\text{closure size} = 36,\qquad \text{elements to add} = 36 - 21 = 15.$$<p><strong>Answer:</strong> 15</p></details></section><section class="mock-q" id="q-22"><h3>Question 22 · Mathematics · Numerical</h3><p>If $(1-x^3)^{10}=\displaystyle\sum_{r=0}^{10}a_r x^r(1-x)^{30-2r}$, then $\dfrac{9a_9}{a_{10}}$ is equal to __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
30</p><p>Factor the left side: $(1 - x^3)^{10} = (1-x)^{10}(1 + x + x^2)^{10}.$</p><p>Divide both sides by $(1-x)^{30}$ and let $y = \dfrac{x}{(1-x)^2}$:</p>$$\frac{(1+x+x^2)^{10}}{(1-x)^{20}} = \sum_{r=0}^{10} a_r\, y^{r}.$$<p>Note $1 + x + x^2 = (1-x)^2 + 3x$, so</p>$$\frac{(1+x+x^2)^{10}}{(1-x)^{20}} = \left(1 + \frac{3x}{(1-x)^2}\right)^{10} = (1 + 3y)^{10}.$$<p>Therefore $a_r = \dbinom{10}{r}3^{r}$. In particular:</p>$$a_9 = \binom{10}{9}3^{9} = 10\cdot 3^{9}, \qquad a_{10} = \binom{10}{10}3^{10} = 3^{10}.$$

$$\frac{9a_9}{a_{10}} = \frac{9\cdot 10\cdot 3^{9}}{3^{10}} = \frac{90}{3} = 30.$$<p><strong>Answer:</strong> 30</p></details></section><section class="mock-q" id="q-23"><h3>Question 23 · Mathematics · Numerical</h3><p>Let the line $x-y=4$ intersect the circle $C:(x-4)^2+(y+3)^2=9$ at the points $Q$ and $R$. If $P(\alpha,\beta)$ is a point on $C$ such that $PQ=PR$, then $(6\alpha+8\beta)^2$ is equal to __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
18</p><p>$PQ=PR$ means $P$ lies on the perpendicular bisector of chord $QR$, which passes through the centre $(4,-3)$ perpendicular to $x-y=4$:</p>$$y+3=-(x-4)\Rightarrow x+y=1.$$<p>$P$ is on $C$ and on $x+y=1$: put $y=1-x$ in $C$:</p>$$(x-4)^2+(4-x)^2=9\Rightarrow (x-4)^2=\tfrac92\Rightarrow x=4\pm\tfrac{3}{\sqrt2}.$$<p>Then $6\alpha+8\beta=6\alpha+8(1-\alpha)=8-2\alpha=8-2\left(4\pm\tfrac{3}{\sqrt2}\right)=\mp\dfrac{6}{\sqrt2}$, so</p>$$(6\alpha+8\beta)^2=\frac{36}{2}=18.$$<p><strong>Answer:</strong> 18</p></details></section><section class="mock-q" id="q-24"><h3>Question 24 · Mathematics · Numerical</h3><p>Let the image of the point $P(0,-5,0)$ in the line $\dfrac{x-1}{2}=\dfrac{y}{1}=\dfrac{z+1}{-2}$ be the point $R$ and the image of the point $Q\left(0,\dfrac{-1}{2},0\right)$ in the line $\dfrac{x-1}{-1}=\dfrac{y+9}{4}=\dfrac{z+1}{1}$ be the point $S$. Then the square of the area of the parallelogram $PQRS$ is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
162</p><p><strong>Image $R$ of $P(0,-5,0)$</strong> in line through $(1,0,-1)$, direction $(2,1,-2)$: the foot gives $R = 2F - P = (-2,\ 3,\ 2)$.</p><p><strong>Image $S$ of $Q\left(0,-\tfrac12,0\right)$</strong> in line through $(1,-9,-1)$, direction $(-1,4,1)$: $S = 2F - Q = \left(-2,\ -\tfrac{3}{2},\ 2\right)$.</p><p>Check $PQRS$ is a parallelogram: $\vec{Q}-\vec{P} = (0,\tfrac92,0) = \vec{R}-\vec{S}$. ✓</p><p>Area via diagonals $\vec{PR}$ and $\vec{QS}$:</p>$$\vec{PR} = (-2,\ 8,\ 2),\quad \vec{QS} = (-2,\ -1,\ 2)$$

$$\vec{PR}\times\vec{QS} = (18,\ 0,\ 18),\qquad \text{Area} = \tfrac12|{\vec{PR}\times\vec{QS}}| = \tfrac12\cdot 18\sqrt2 = 9\sqrt2$$

$$\text{Area}^2 = 162$$<p><strong>Answer:</strong> 162</p></details></section><section class="mock-q" id="q-25"><h3>Question 25 · Mathematics · Numerical</h3><p>Let $f(x)=\begin{cases}x^3+8;&amp;x&lt;0\\x^2-4;&amp;x\ge 0\end{cases}$ and $g(x)=\begin{cases}(x-8)^{1/3};&amp;x&lt;0\\(x+4)^{1/2};&amp;x\ge 0\end{cases}$. Then the number of points, where the function $g\circ f$ is discontinuous, is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
3</p><p>Discontinuities of $g(f(x))$ arise where $f$ jumps, or where a continuous $f$ crosses $0$ (the switch/discontinuity input of $g$, since $\displaystyle\lim_{u\to 0^-}(u-8)^{1/3} = -2 \ne 2 = \lim_{u\to 0^+}(u+4)^{1/2}$).</p><p><strong>$x = 0$ ($f$ jumps).</strong> $f(0^-) = 8 \Rightarrow g = \sqrt{12}$; $\ f(0^+) = -4 \Rightarrow g = (-12)^{1/3} = -\sqrt[3]{12}$. Left and right limits differ $\Rightarrow$ discontinuous.</p><p><strong>$f(x) = 0$ with $f$ continuous.</strong></p><ul><li>$x&lt;0$: $x^3 + 8 = 0 \Rightarrow x = -2$. As $x$ passes $-2$, $f$ crosses $0$, so $g\circ f$ jumps between $-2$ and $2 \Rightarrow$ discontinuous.</li><li>$x\ge 0$: $x^2 - 4 = 0 \Rightarrow x = 2$. Again $f$ crosses $0$, so $g\circ f$ jumps between $-2$ and $2 \Rightarrow$ discontinuous.</li></ul><p>Discontinuity points: $x = -2,\ 0,\ 2$ — a total of $3$.</p><p><strong>Answer:</strong> 3</p></details></section><section class="mock-q" id="q-26"><h3>Question 26 · Physics</h3><p>The percentage error in the calculated volume of a sphere, if there is 2% error in its diameter measurement, is __________.</p><ol type="A"><li>$1$</li><li>$2$</li><li>$6$</li><li>$8$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $6$</p><p>The volume of a sphere in terms of diameter $d$:</p>$$V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi \left(\frac{d}{2}\right)^3 = \frac{\pi}{6} d^3 \quad\Rightarrow\quad V \propto d^3$$<p>The fractional error propagates with the power:</p>$$\frac{\Delta V}{V} = 3\,\frac{\Delta d}{d}$$

$$\frac{\Delta V}{V}\times 100 = 3 \times 2\% = 6\%$$<p><strong>Answer:</strong> C ($6$)</p></details></section><section class="mock-q" id="q-27"><h3>Question 27 · Physics</h3><p>Match List - I with List - II.
List - I: A. Boltzmann constant; B. Stefan's constant; C. Planck's constant; D. Gravitational constant.
List - II: I. $[M^{-1}L^3T^{-2}]$; II. $[ML^2T^{-1}]$; III. $[ML^2T^{-2}K^{-1}]$; IV. $[ML^0T^{-3}K^{-4}]$.
Choose the correct answer from the options given below:</p><ol type="A"><li>A-I, B-II, C-III, D-IV</li><li>A-IV, B-III, C-II, D-I</li><li>A-III, B-IV, C-II, D-I</li><li>A-II, B-I, C-IV, D-III</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — A-III, B-IV, C-II, D-I</p><p>Determine each dimensional formula:</p><p><strong>A. Boltzmann constant</strong> — from $E = k_B T$: $[k_B] = \dfrac{[M L^2 T^{-2}]}{[K]} = [M L^2 T^{-2} K^{-1}]$ → <strong>III</strong></p><p><strong>B. Stefan’s constant</strong> — from $\dfrac{P}{A} = \sigma T^4$: $[\sigma] = \dfrac{[M T^{-3}]}{[K^4]} = [M L^0 T^{-3} K^{-4}]$ → <strong>IV</strong></p><p><strong>C. Planck’s constant</strong> — from $E = h\nu$: $[h] = \dfrac{[M L^2 T^{-2}]}{[T^{-1}]} = [M L^2 T^{-1}]$ → <strong>II</strong></p><p><strong>D. Gravitational constant</strong> — from $F = \dfrac{G m_1 m_2}{r^2}$: $[G] = \dfrac{[M L T^{-2}][L^2]}{[M^2]} = [M^{-1} L^3 T^{-2}]$ → <strong>I</strong></p><p>So the mapping is A-III, B-IV, C-II, D-I.</p><p><strong>Answer:</strong> C (A-III, B-IV, C-II, D-I)</p></details></section><section class="mock-q" id="q-28"><h3>Question 28 · Physics</h3><p>A solid sphere $(A)$ of mass $5m$ and a spherical shell $(B)$ of mass $m$, both having same radius, are placed on a rough surface. When a force of same magnitude is applied tangentially at the highest points of $A$ and $B$, they start rolling without slipping with an acceleration of $a_A$ and $a_B$, respectively. The ratio of $a_A$ and $a_B$ is __________.</p><ol type="A"><li>$5:21$</li><li>$6:10$</li><li>$21:25$</li><li>$1:5$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $5:21$</p><p>Let the body have mass $M$, radius $R$, and moment of inertia $I = kMR^2$. The force $F$ acts at the top; let $f$ be friction at the contact point.</p><p><strong>Translation:</strong> $F + f = Ma$</p><p><strong>Rotation about centre</strong> (both $F$ and $f$ produce torque about the centre):</p>$$FR - fR = I\alpha = kMR^2\cdot\frac{a}{R} \implies F - f = kMa$$<p>Adding the two equations:</p>$$2F = Ma(1+k) \implies a = \frac{2F}{M(1+k)}$$<p><strong>Solid sphere $A$</strong> ($M = 5m$, $k = \tfrac{2}{5}$):</p>$$a_A = \frac{2F}{5m\left(1+\tfrac{2}{5}\right)} = \frac{2F}{5m\cdot\tfrac{7}{5}} = \frac{2F}{7m}$$<p><strong>Spherical shell $B$</strong> ($M = m$, $k = \tfrac{2}{3}$):</p>$$a_B = \frac{2F}{m\left(1+\tfrac{2}{3}\right)} = \frac{2F}{m\cdot\tfrac{5}{3}} = \frac{6F}{5m}$$<p><strong>Ratio:</strong></p>$$\frac{a_A}{a_B} = \frac{2/7}{6/5} = \frac{2}{7}\cdot\frac{5}{6} = \frac{10}{42} = \frac{5}{21}$$<p><strong>Answer:</strong> A ($5:21$)</p></details></section><section class="mock-q" id="q-29"><h3>Question 29 · Physics</h3><p>A body of mass 1 kg moves along a straight line with a velocity $v=2x^2$. The work done by the body during displacement from $x=0$ to $x=5$ m is __________ J.</p><ol type="A"><li>$0$</li><li>$250$</li><li>$1250$</li><li>$1000$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $1250$</p><p>By the <strong>work-energy theorem</strong>, work done equals the change in kinetic energy:</p>$$W = \tfrac{1}{2}m\left(v_f^2 - v_i^2\right)$$<p><strong>Velocities</strong> from $v = 2x^2$:</p><ul><li>At $x = 0$: $v_i = 2(0)^2 = 0$</li><li>At $x = 5$: $v_f = 2(5)^2 = 50\ \text{m/s}$</li></ul><p><strong>Work done:</strong></p>$$W = \tfrac{1}{2}(1)\left(50^2 - 0^2\right) = \tfrac{1}{2}(2500) = 1250\ \text{J}$$<p><strong>Answer:</strong> C ($1250$)</p></details></section><section class="mock-q" id="q-30"><h3>Question 30 · Physics</h3><p>A cylinder with adiabatic walls is closed at both ends and is divided into two compartments by a frictionless adiabatic piston. Ideal gas is filled in both (left and right) the compartments at same $P,V,T$. Heating is started from left side until pressure changes to $\dfrac{27P}{8}$. If initial volume of each compartment was 9 litres then the final volume in right-hand side compartment is __________ litres. (for this ideal gas $C_P/C_V=1.5$)</p><ol type="A"><li>$3$</li><li>$4$</li><li>$14$</li><li>$9$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $4$</p><p>The piston is frictionless, so pressure equalises across it; the common final pressure is $P_f = \dfrac{27P}{8}$.</p><p>The <strong>right compartment</strong> is compressed <strong>adiabatically</strong> (its walls and the piston are adiabatic), so $PV^{\gamma}$ is conserved with $\gamma = 1.5$:</p>$$P\,V_i^{\gamma} = P_f\,V_f^{\gamma} \implies V_f = V_i\left(\frac{P}{P_f}\right)^{1/\gamma}$$<p></p>$$V_f = 9\left(\frac{P}{27P/8}\right)^{1/1.5} = 9\left(\frac{8}{27}\right)^{2/3} = 9 \times \frac{4}{9} = 4\ \text{litres}$$<p>since $\left(\dfrac{8}{27}\right)^{2/3} = \dfrac{8^{2/3}}{27^{2/3}} = \dfrac{4}{9}$.</p><p><strong>Answer:</strong> B ($4$)</p></details></section><section class="mock-q" id="q-31"><h3>Question 31 · Physics</h3><p>For an electromagnetic wave propagating through vacuum, $\vec{k}$, $\vec{E}$ and $\omega$ represent propagation vector, electric field and angular frequency, respectively. The magnetic field associated with this wave is represented by:</p><ol type="A"><li>$\dfrac{\vec{E}\times\vec{k}}{\omega}$</li><li>$\dfrac{\vec{k}\times\vec{E}}{\omega}$</li><li>$\omega\left(\vec{E}\times\vec{k}\right)$</li><li>$\omega\left(\vec{k}\times\vec{E}\right)$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $\dfrac{\vec{k}\times\vec{E}}{\omega}$</p><p>For a plane EM wave, the magnetic field is obtained from $\vec{B} = \dfrac{\hat{k}\times\vec{E}}{c}$, where $\hat{k}$ is the unit propagation vector.</p><p>Since $\hat{k} = \dfrac{\vec{k}}{k}$ and $c = \dfrac{\omega}{k}$:</p>$$\vec{B} = \frac{1}{c}\left(\frac{\vec{k}}{k}\right)\times\vec{E} = \frac{k}{\omega}\cdot\frac{1}{k}\,(\vec{k}\times\vec{E}) = \frac{\vec{k}\times\vec{E}}{\omega}$$<p>This correctly gives $\vec{B}$ perpendicular to both $\vec{k}$ and $\vec{E}$, with $\hat{E}\times\hat{B}$ pointing along $\vec{k}$.</p><p><strong>Answer:</strong> $\dfrac{\vec{k}\times\vec{E}}{\omega}$</p></details></section><section class="mock-q" id="q-32"><h3>Question 32 · Physics</h3><p>Two identical bodies A and B of equal masses have initial velocities $\vec{v_1}=4\hat{i}$ m/s and $\vec{v_2}=4\hat{j}$ m/s respectively. The body A has acceleration $\vec{a_1}=6\hat{i}+6\hat{j}$ m/s$^2$ while the acceleration of the other body B is zero. The centre of mass of the two bodies moves in __________ path.</p><ol type="A"><li>circular</li><li>parabolic</li><li>straight line</li><li>elliptical</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — straight line</p><p>For equal masses, the centre of mass has</p><p><strong>Initial velocity:</strong></p>$$\vec{v}_{cm} = \frac{\vec{v_1} + \vec{v_2}}{2} = \frac{4\hat{i} + 4\hat{j}}{2} = 2\hat{i} + 2\hat{j}$$<p><strong>Acceleration:</strong></p>$$\vec{a}_{cm} = \frac{\vec{a_1} + \vec{a_2}}{2} = \frac{6\hat{i} + 6\hat{j}}{2} = 3\hat{i} + 3\hat{j}$$<p>Both $\vec{v}_{cm}$ and $\vec{a}_{cm}$ point along the same direction $(\hat{i}+\hat{j})$. When initial velocity and constant acceleration are parallel, the motion is one-dimensional along that line.</p><p><strong>Answer:</strong> C (straight line)</p></details></section><section class="mock-q" id="q-33"><h3>Question 33 · Physics</h3><p>Figure represents the extension $(\Delta l)$ of a wire of length 1 meter, suspended from the ceiling of the room at one end with a load $W$ connected to the other end. If the cross-sectional area of the wire is $10^{-5}$ m$^2$ then the Young's modulus of the wire is __________ N/m$^2$. [figure: straight-line graph of $\Delta l$ ($\times 10^{-4}$ m, axis from 1 to 6) versus $W$ (N, axis marked 10,20,30,40,50,60) passing through origin; at $W=60$ N, $\Delta l=6\times10^{-4}$ m]</p><ol type="A"><li>$1.0\times10^{11}$</li><li>$2.0\times10^{10}$</li><li>$1.0\times10^{10}$</li><li>$2.0\times10^{11}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $1.0\times10^{10}$</p></details></section><section class="mock-q" id="q-34"><h3>Question 34 · Physics</h3><p>A cylindrical vessel of 40 cm radius is completely filled with water and its capacity is 528 dm$^3$ (dm: decimeter). The vessel is placed on a solid block of exactly same height as vessel. If a small hole is made at 70 cm below the top of water level, then horizontal range of water falling on the ground in the beginning is __________ cm.</p><ol type="A"><li>$120\sqrt{2}$</li><li>$140\sqrt{2}$</li><li>$140\sqrt{3}$</li><li>$120\sqrt{3}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $140\sqrt{2}$</p><p><strong>Vessel height</strong> from $V = \pi r^2 H$, with $V = 528\ \text{dm}^3 = 0.528\ \text{m}^3$, $r = 0.40\ \text{m}$ (using $\pi = 22/7$):</p>$$H = \frac{V}{\pi r^2} = \frac{0.528}{\frac{22}{7}(0.16)} = 1.05\ \text{m}$$<p><strong>Efflux speed</strong> (Torricelli), with depth of hole below water surface $h = 0.70\ \text{m}$:</p>$$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 0.70} = \sqrt{14}\ \text{m/s}$$<p><strong>Fall height:</strong> the hole is $H - 0.70$ above the vessel base, and the vessel sits on a block of height $H$, so the hole is at:</p>$$y = (H - 0.70) + H = 2(1.05) - 0.70 = 1.40\ \text{m above the ground}$$<p>Time of flight: $t = \sqrt{\dfrac{2y}{g}} = \sqrt{\dfrac{2 \times 1.40}{10}} = \sqrt{0.28}\ \text{s}$</p><p><strong>Range:</strong></p>$$R = v\,t = \sqrt{14}\times\sqrt{0.28} = \sqrt{3.92} = 1.98\ \text{m} \approx 140\sqrt{2}\ \text{cm}$$<p><strong>Answer:</strong> B ($140\sqrt{2}$)</p></details></section><section class="mock-q" id="q-35"><h3>Question 35 · Physics</h3><p>If 2 mole of an ideal monoatomic gas at temperature $T$, is mixed with 6 mole of another ideal monoatomic gas at temperature $2T$ then the temperature of mixture is:</p><ol type="A"><li>$\dfrac{5}{2}T$</li><li>$\dfrac{5}{4}T$</li><li>$\dfrac{7}{2}T$</li><li>$\dfrac{7}{4}T$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $\dfrac{7}{4}T$</p><p>When the two gases are mixed without any external work or heat exchange, the total internal energy is conserved. For an ideal monoatomic gas $U = \dfrac{3}{2} n R T$, so:</p>$$U_1 + U_2 = U_{\text{mix}}$$

$$\frac{3}{2} n_1 R T_1 + \frac{3}{2} n_2 R T_2 = \frac{3}{2}(n_1 + n_2) R T_{\text{mix}}$$<p>Cancelling $\dfrac{3}{2}R$ throughout:</p>$$n_1 T_1 + n_2 T_2 = (n_1 + n_2) T_{\text{mix}}$$<p>Substitute $n_1 = 2,\ T_1 = T,\ n_2 = 6,\ T_2 = 2T$:</p>$$(2)(T) + (6)(2T) = (2 + 6)\, T_{\text{mix}}$$

$$2T + 12T = 8\, T_{\text{mix}} \quad\Rightarrow\quad 14T = 8\, T_{\text{mix}}$$

$$T_{\text{mix}} = \frac{14T}{8} = \frac{7}{4}T$$<p><strong>Answer:</strong> D ($\dfrac{7}{4}T$)</p></details></section><section class="mock-q" id="q-36"><h3>Question 36 · Physics</h3><p>A spring stretches by 2 mm when it is loaded with a mass of 200 g. From equilibrium position the mass is further pulled down by 2 mm and released. The frequency associated with the system and maximum energy in the spring are __________ Hz and __________ J, respectively. (Take $g=10$ m/s$^2$)</p><ol type="A"><li>$\dfrac{5\sqrt{50}}{\pi}$ and $8\times10^{-3}$</li><li>$\dfrac{5\sqrt{50}}{\pi}$ and $8$</li><li>$10\sqrt{50}$ and $2\times10^{-3}$</li><li>$\dfrac{5\sqrt{50}}{\pi}$ and $16\times10^{-3}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\dfrac{5\sqrt{50}}{\pi}$ and $8\times10^{-3}$</p><p><strong>Spring constant</strong> from the static stretch $x_0 = 2\ \text{mm} = 2\times10^{-3}$ m, $m = 0.2$ kg:</p>$$k = \frac{mg}{x_0} = \frac{0.2 \times 10}{2\times10^{-3}} = 1000\ \text{N/m}$$<p><strong>Frequency:</strong></p>$$f = \frac{1}{2\pi}\sqrt{\frac{k}{m}} = \frac{1}{2\pi}\sqrt{\frac{1000}{0.2}} = \frac{1}{2\pi}\sqrt{5000} = \frac{50\sqrt{2}}{2\pi} = \frac{25\sqrt{2}}{\pi} = \frac{5\sqrt{50}}{\pi}\ \text{Hz}$$<p><strong>Maximum energy in the spring</strong> occurs at maximum extension, which is the static stretch plus the amplitude:</p>$$x_{\max} = 2\ \text{mm} + 2\ \text{mm} = 4\ \text{mm} = 4\times10^{-3}\ \text{m}$$

$$E_{\max} = \frac{1}{2}k\,x_{\max}^2 = \frac{1}{2}(1000)\left(4\times10^{-3}\right)^2 = 500 \times 16\times10^{-6} = 8\times10^{-3}\ \text{J}$$<p><strong>Answer:</strong> $\dfrac{5\sqrt{50}}{\pi}$ and $8\times10^{-3}$</p></details></section><section class="mock-q" id="q-37"><h3>Question 37 · Physics</h3><p>The electric potential as a function of $x,y$ is given by $V=5(x^2-y^2)$ V. The electric field at a point $(2,3)$ m is __________ V/m.</p><ol type="A"><li>$\left(-20\hat{i}+30\hat{j}\right)$</li><li>$\left(20\hat{i}-30\hat{j}\right)$</li><li>$\left(20\hat{i}+45\hat{j}\right)$</li><li>$\left(-4\hat{i}+6\hat{j}\right)$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\left(-20\hat{i}+30\hat{j}\right)$</p><p>The electric field is the negative gradient of potential:</p>$$\vec{E} = -\nabla V = -\frac{\partial V}{\partial x}\hat{i} - \frac{\partial V}{\partial y}\hat{j}$$<p>With $V = 5(x^2 - y^2)$:</p>$$\frac{\partial V}{\partial x} = 10x, \qquad \frac{\partial V}{\partial y} = -10y$$<p>So:</p>$$\vec{E} = -10x\,\hat{i} + 10y\,\hat{j}$$<p>At $(2, 3)$:</p>$$\vec{E} = -10(2)\hat{i} + 10(3)\hat{j} = -20\hat{i} + 30\hat{j}\ \text{V/m}$$<p><strong>Answer:</strong> A ($-20\hat{i}+30\hat{j}$)</p></details></section><section class="mock-q" id="q-38"><h3>Question 38 · Physics</h3><p>A current of 30 A each flows in opposite directions in two conducting wires, placed parallel to each other at a distance of 8 cm. The magnetic field at the mid point between the two wires is __________ $\mu$T. $\left(\dfrac{\mu_0}{4\pi}=10^{-7}\text{ N/A}^2\right)$</p><ol type="A"><li>$300$</li><li>$150$</li><li>$0.0$</li><li>$30$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $150$</p><p>The midpoint is at distance $r = 4$ cm $= 0.04$ m from each wire. Field due to one long straight wire:</p>$$B = \frac{\mu_0}{4\pi}\cdot\frac{2I}{r} = 10^{-7}\times\frac{2\times 30}{0.04} = 10^{-7}\times 1500 = 1.5\times10^{-4}\ \text{T}$$<p>The currents are antiparallel, so at the midpoint both fields point the same way and add:</p>$$B_{\text{net}} = 2B = 3\times10^{-4}\ \text{T} = 300\ \mu\text{T}$$<p><strong>Answer:</strong> A ($300$)</p></details></section><section class="mock-q" id="q-39"><h3>Question 39 · Physics</h3><p>A square loop of side 2 cm is placed in a time varying magnetic field with magnitude as $B=0.4\sin(300t)$ Tesla. The normal to the plane of loop makes an angle of $60^\circ$ with the field. The maximum induced emf produced in the loop is __________ mV.</p><ol type="A"><li>$12$</li><li>$18$</li><li>$21$</li><li>$24$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $24$</p><p>Flux through the loop:</p>$$\Phi = B A \cos\theta = 0.4\sin(300t)\cdot A \cos60^\circ$$<p>Induced emf:</p>$$\varepsilon = -\frac{d\Phi}{dt} = -0.4\cdot 300\cos(300t)\cdot A\cos60^\circ$$<p>Maximum value ($|\cos(300t)|=1$), with $A=(0.02)^2 = 4\times10^{-4}\ \text{m}^2$ and $\cos60^\circ = 0.5$:</p>$$\varepsilon_{max} = 0.4\times 300\times 4\times10^{-4}\times 0.5 = 0.024\ \text{V} = 24\ \text{mV}$$<p><strong>Answer:</strong> 24</p></details></section><section class="mock-q" id="q-40"><h3>Question 40 · Physics</h3><p>A sphere of capacitance 100 pF is charged to a potential of 100 V. Another identical uncharged metal sphere is brought in contact with the charged sphere, then the change in the total energy stored on these spheres, when they touch is $\alpha\times10^{-7}$ J. The value of $\alpha$ is __________. (combined capacitance of spheres is 200 pF)</p><ol type="A"><li>$5$</li><li>$\dfrac{5}{2}$</li><li>$\dfrac{7}{2}$</li><li>$\dfrac{9}{2}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $\dfrac{5}{2}$</p><p><strong>Initial energy</strong> ($C = 100$ pF, $V = 100$ V):</p>$$U_i = \frac{1}{2}CV^2 = \frac{1}{2}(100\times10^{-12})(100)^2 = 5\times10^{-7}\ \text{J}$$<p>Charge is conserved: $Q = CV = 10^{-8}$ C. On contact the combined capacitance is $200$ pF, so the common potential becomes:</p>$$V' = \frac{Q}{C'} = \frac{10^{-8}}{200\times10^{-12}} = 50\ \text{V}$$<p><strong>Final energy:</strong></p>$$U_f = \frac{1}{2}C'V'^2 = \frac{1}{2}(200\times10^{-12})(50)^2 = 2.5\times10^{-7}\ \text{J}$$<p><strong>Change in energy:</strong></p>$$|\Delta U| = U_i - U_f = (5 - 2.5)\times10^{-7} = 2.5\times10^{-7}\ \text{J}$$<p>So $\alpha = \dfrac{5}{2}$ (energy decreases by this amount).</p><p><strong>Answer:</strong> B ($\tfrac{5}{2}$)</p></details></section><section class="mock-q" id="q-41"><h3>Question 41 · Physics</h3><p>The energy released if hydrogen atoms are combined to form $^4_2\text{He}$ is __________ MeV. (Take binding energies per nucleon of $^2_1\text{H}$ and $^4_2\text{He}$ as 1.1 MeV and 7.2 MeV, respectively)</p><ol type="A"><li>$6.1$</li><li>$24.4$</li><li>$26.6$</li><li>$5$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $24.4$</p><p>The given binding energy per nucleon for $^2_1\text{H}$ (deuterium) tells us the fusion is:</p>$$2\,{}^2_1\text{H} \rightarrow {}^4_2\text{He}$$<p><strong>Step 1 — Binding energy of reactants</strong> (two deuterons, 2 nucleons each):</p>$$BE_{\text{react}} = 2 \times (2 \times 1.1) = 4.4\ \text{MeV}$$<p><strong>Step 2 — Binding energy of product</strong> ($^4_2\text{He}$, 4 nucleons):</p>$$BE_{\text{prod}} = 4 \times 7.2 = 28.8\ \text{MeV}$$<p><strong>Step 3 — Energy released:</strong></p>$$Q = BE_{\text{prod}} - BE_{\text{react}} = 28.8 - 4.4 = 24.4\ \text{MeV}$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-42"><h3>Question 42 · Physics</h3><p>Angle of minimum deviation is equal to the half of the angle of prism in an equilateral prism. The refractive index of the prism is __________.</p><ol type="A"><li>$1.5$</li><li>$\sqrt{3}$</li><li>$\sqrt{2}$</li><li>$1.65$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\sqrt{2}$</p><p>For an equilateral prism, $A = 60^\circ$ and given $\delta_m = \dfrac{A}{2} = 30^\circ$.</p><p>Prism formula:</p>$$\mu = \frac{\sin\!\left(\dfrac{A + \delta_m}{2}\right)}{\sin\!\left(\dfrac{A}{2}\right)} = \frac{\sin\!\left(\dfrac{60^\circ + 30^\circ}{2}\right)}{\sin 30^\circ} = \frac{\sin 45^\circ}{\sin 30^\circ}.$$

$$\mu = \frac{1/\sqrt2}{1/2} = \frac{2}{\sqrt2} = \sqrt2 \approx 1.414.$$<p><strong>Answer:</strong> C ($\sqrt{2}$)</p></details></section><section class="mock-q" id="q-43"><h3>Question 43 · Physics</h3><p>Refer to the logic circuit given below. For two inputs $(A=1,B=1)$ and $(A=0,B=1)$, output $(Y)$ will be __________. [figure: A is passed through a NOT gate, then its output and B feed an OR gate; A and B also feed an AND gate; outputs of the OR gate and AND gate feed a NOR gate whose output is Y]</p><ol type="A"><li>1, 0 respectively</li><li>0, 1 respectively</li><li>0, 0 respectively</li><li>1, 1 respectively</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — 0, 0 respectively</p></details></section><section class="mock-q" id="q-44"><h3>Question 44 · Physics</h3><p>The velocity at which 6 kg mass (shown in figure) strikes the ground when it is released from a height of 6 m above the ground is __________ m/s. Assume pulley is massless and string is light and inextensible. (Take $g=10$ m/s$^2$) [figure: a massless pulley fixed to ceiling, with a 6 kg block on one side hanging 6 m above the ground and a 2 kg block on the other side resting on the ground, connected by a light string]</p><ol type="A"><li>$7.74$</li><li>$7.20$</li><li>$6.55$</li><li>$4.50$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $7.74$</p></details></section><section class="mock-q" id="q-45"><h3>Question 45 · Physics</h3><p>In a Young double slit experiment, the wavelength of incident light is 6000 Å, the separation between slits $S_1$ and $S_2$ is 5 cm and the distance between slits plane and screen is 50 cm, as shown in the figure below. If the resultant intensity at $P$ is equal to the intensity due to individual slits, the path difference between interfering waves is __________ Å. [figure: source $S$ with $\lambda=6000$ Å illuminates two slits $S_1$ and $S_2$; distance from slits plane to screen is 50 cm; $O'$ is the central point and $P$ is a point on the screen below $O'$]</p><ol type="A"><li>$4000$</li><li>$3000$</li><li>$2000$</li><li>$1000$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $4000$</p></details></section><section class="mock-q" id="q-46"><h3>Question 46 · Physics · Numerical</h3><p>A block takes $t$ time to slide down a plane inclined at $45^\circ$ to the horizontal. If the surface is made smooth (frictionless), the block takes time $\dfrac{t}{2}$ to slide down the plane. The coefficient of friction between the block and the inclined plane is $\left(\dfrac{\alpha}{100}\right)$. The value of $\alpha$ is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
75</p><p>Same slope length $L$ from rest, so $t \propto \dfrac{1}{\sqrt{a}}$.</p><p><strong>Accelerations</strong> ($\theta = 45^\circ$):</p>$$a_{\text{rough}} = g\sin\theta - \mu g\cos\theta, \qquad a_{\text{smooth}} = g\sin\theta$$<p><strong>Time ratio</strong> ($t_{\text{smooth}} = t/2$, so rough time is twice the smooth time):</p>$$\frac{t_{\text{rough}}}{t_{\text{smooth}}} = \sqrt{\frac{a_{\text{smooth}}}{a_{\text{rough}}}} = 2 \implies \frac{a_{\text{smooth}}}{a_{\text{rough}}} = 4$$<p><strong>Solve for $\mu$</strong> (with $\tan 45^\circ = 1$):</p>$$\frac{1}{1-\mu} = 4 \implies 1 - \mu = \frac{1}{4} \implies \mu = \frac{3}{4} = 0.75 = \frac{75}{100}$$<p>Hence $\alpha = 75$.</p><p><strong>Answer:</strong> 75</p></details></section><section class="mock-q" id="q-47"><h3>Question 47 · Physics · Numerical</h3><p>The de Broglie wavelength for an electron accelerated through the potential difference of $V_1$ volt is $\lambda_1$. When the potential difference is changed to $V_2$ volt, the associated de Broglie wavelength is increased by 50%. If $(V_1/V_2)=(9/\alpha)$, then the value of $\alpha$ is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
4</p><p>For an electron accelerated through $V$:</p>$$\lambda = \frac{h}{\sqrt{2meV}} \implies \lambda \propto \frac{1}{\sqrt{V}}$$<p>A 50% increase means $\lambda_2 = 1.5\,\lambda_1$:</p>$$\frac{\lambda_2}{\lambda_1} = \sqrt{\frac{V_1}{V_2}} = 1.5$$<p>Square both sides:</p>$$\frac{V_1}{V_2} = (1.5)^2 = 2.25 = \frac{9}{4}$$<p>Comparing with $\dfrac{V_1}{V_2} = \dfrac{9}{\alpha}$ gives $\alpha = 4$.</p><p><strong>Answer:</strong> 4</p></details></section><section class="mock-q" id="q-48"><h3>Question 48 · Physics · Numerical</h3><p>A moving coil of galvanometer when shunted with 2 $\Omega$ resistance gives a full scale deflection for a current of 500 mA. When a resistance of 470 $\Omega$ is connected in series it gives a full scale deflection for 10 V potential applied on it. The value of resistance of galvanometer coil is __________ $\Omega$.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
50</p><p>Let the coil resistance be $G$ and the full-scale (galvanometer) current be $I_g$; $I_g$ is the same in both experiments.</p><p><strong>Series case</strong> ($470\ \Omega$ in series, $10\ \text{V}$ full scale):</p>$$I_g = \frac{10}{G + 470} \quad\text{(1)}$$<p><strong>Shunt case</strong> ($S = 2\ \Omega$ across the coil, total current $I = 0.5\ \text{A}$):
The shunt carries $(I - I_g)$ and the voltage across both is equal:</p>$$I_g\,G = (I - I_g)\,S \implies I_g\,G = (0.5 - I_g)(2)$$<p></p>$$I_g\,G = 1 - 2 I_g \implies I_g(G + 2) = 1 \implies I_g = \frac{1}{G + 2} \quad\text{(2)}$$<p><strong>Equate (1) and (2):</strong></p>$$\frac{10}{G + 470} = \frac{1}{G + 2}$$<p></p>$$10(G + 2) = G + 470 \implies 10G + 20 = G + 470$$<p></p>$$9G = 450 \implies G = 50\ \Omega$$<p>(Check: $I_g = \tfrac{1}{52} \approx 19.2\ \text{mA}$ from both equations.)</p><p><strong>Answer:</strong> 50</p></details></section><section class="mock-q" id="q-49"><h3>Question 49 · Physics · Numerical</h3><p>Two cells of emfs 1 V and 2 V and internal resistance 2 $\Omega$ and 1 $\Omega$, respectively connected in parallel, gave a current of 1 A through an external resistance. If the polarity of one cell is reversed, then value of current through the external resistance will be $\dfrac{\alpha}{5}$ A. The value of $\alpha$ is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
3</p><p>For two cells in parallel, use the equivalent-cell (Thevenin) method.</p><p><strong>Equivalent EMF and internal resistance (both cells aiding):</strong></p>$$E_{eq} = \frac{\dfrac{E_1}{r_1} + \dfrac{E_2}{r_2}}{\dfrac{1}{r_1} + \dfrac{1}{r_2}} = \frac{\dfrac{1}{2} + \dfrac{2}{1}}{\dfrac{1}{2} + 1} = \frac{2.5}{1.5} = \frac{5}{3}\ \text{V}$$<p></p>$$r_{eq} = \frac{r_1 r_2}{r_1 + r_2} = \frac{2 \times 1}{3} = \frac{2}{3}\ \Omega$$<p><strong>Find $R$ from the given $1\ \text{A}$:</strong></p>$$I = \frac{E_{eq}}{r_{eq} + R} = 1 \implies r_{eq} + R = E_{eq} = \frac{5}{3} \implies R = \frac{5}{3} - \frac{2}{3} = 1\ \Omega$$<p><strong>Reverse one cell’s polarity</strong> (say the $1\ \text{V}$ cell $\to -1\ \text{V}$); $r_{eq}$ is unchanged:</p>$$E_{eq}' = \frac{-\dfrac{1}{2} + \dfrac{2}{1}}{1.5} = \frac{1.5}{1.5} = 1\ \text{V}$$<p><strong>New current:</strong></p>$$I' = \frac{E_{eq}'}{r_{eq} + R} = \frac{1}{\tfrac{2}{3} + 1} = \frac{1}{\tfrac{5}{3}} = \frac{3}{5}\ \text{A}$$<p>So $\dfrac{\alpha}{5} = \dfrac{3}{5} \implies \alpha = 3$. (Reversing the other cell gives the same magnitude.)</p><p><strong>Answer:</strong> 3</p></details></section><section class="mock-q" id="q-50"><h3>Question 50 · Physics · Numerical</h3><p>A concave mirror of focal length 10 cm forms an image which is double the size of object when the object is placed at two different positions. The distance between the two positions of the object is __________ cm.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
10</p><p>A concave mirror can give a magnified image of magnitude $2$ in two ways: a real inverted image ($m = -2$) and a virtual erect image ($m = +2$).</p><p>Using $m = \dfrac{f}{f - u}$ (with $f = -10\ \text{cm}$, distances measured with sign):</p><p><strong>Real image</strong> $m = -2$: $\;-2 = \dfrac{-10}{-10 - u} \Rightarrow -10 - u = 5 \Rightarrow u = -15\ \text{cm}$ (object at 15 cm).</p><p><strong>Virtual image</strong> $m = +2$: $\;+2 = \dfrac{-10}{-10 - u} \Rightarrow -10 - u = -5 \Rightarrow u = -5\ \text{cm}$ (object at 5 cm).</p><p>Distance between the two object positions:</p>$$|{-15}| - |{-5}| = 15 - 5 = 10\ \text{cm}.$$<p><strong>Answer:</strong> 10</p></details></section><section class="mock-q" id="q-51"><h3>Question 51 · Chemistry</h3><p>Which of the following contain the same number of atoms? (Given: Molar mass in g mol$^{-1}$ of H, He, O and S are 1, 4, 16 and 32 respectively)
A. 2 g of O$_2$ gas
B. 4 g of SO$_2$ gas
C. 1400 mL of O$_2$ at STP
D. 0.05 L of He at STP
E. 0.0625 mol of H$_2$ gas
Choose the correct answer from the options given below:</p><ol type="A"><li>A and B only</li><li>B and C only</li><li>C and D only</li><li>A, C and E only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — A, C and E only</p><p>Total atoms (in mol) $=$ moles $\times$ atoms per molecule, with $V_m = 22.4\ \text{L mol}^{-1}$.</p>$$\text{A: } \frac{2}{32}\times 2 = 0.0625 \times 2 = 0.125$$

$$\text{B: } \frac{4}{64}\times 3 = 0.0625 \times 3 = 0.1875$$

$$\text{C: } \frac{1.4}{22.4}\times 2 = 0.0625 \times 2 = 0.125$$

$$\text{D: } \frac{0.05}{22.4}\times 1 = 0.00223$$

$$\text{E: } 0.0625 \times 2 = 0.125$$<p>A, C and E each give $0.125$ mol of atoms — the same number.</p><p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-52"><h3>Question 52 · Chemistry</h3><p>The Bohr radius of a hydrogen like species is 70.53 pm. The species and the stationary state (n) are respectively (Given: Hydrogen atom Bohr radius is 52.9 pm)</p><ol type="A"><li>Li$^{2+}$, 3</li><li>He$^+$, 3</li><li>He$^+$, 2</li><li>Li$^{2+}$, 2</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — Li$^{2+}$, 2</p><p>Bohr radius: $r_n = 52.9\,\dfrac{n^2}{Z}$ pm. Set equal to $70.53$ pm and test the options.</p>$$\dfrac{n^2}{Z} = \dfrac{70.53}{52.9} = 1.333 = \dfrac{4}{3}$$<p>This is satisfied by $n^2 = 4,\ Z = 3$, i.e. $n = 2$ and $Z = 3$ ($\text{Li}^{2+}$):</p>$$r = 52.9\times\dfrac{2^2}{3} = 52.9\times\dfrac{4}{3} = 70.53\ \text{pm}\ \checkmark$$<p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-53"><h3>Question 53 · Chemistry</h3><p>Given below are two statements:
Statement I: The number of compounds among SO$_2$, SO$_3$, SF$_4$, SF$_6$ and H$_2$S in which sulphur does not obey the Octet rule is 3.
Statement II: Among [H$_2$O, ClF$_3$, SF$_4$], [NH$_3$, BrF$_5$, SF$_4$], [BrF$_5$, ClF$_3$, XeF$_4$] and [XeF$_4$, ClF$_3$, H$_2$O], the number of sets in which all the molecules have one lone pair of electrons on the central atom is 1.
In the light of the above statements, choose the correct answer from the options given below:</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — Statement I is false but Statement II is true</p><p><strong>Statement I</strong> — electrons around S:</p><ul><li>$SO_2$: expanded octet ($10\,e^-$) — does not obey.</li><li>$SO_3$: $12\,e^-$ — does not obey.</li><li>$SF_4$: $10\,e^-$ — does not obey.</li><li>$SF_6$: $12\,e^-$ — does not obey.</li><li>$H_2S$: $2$ bonds $+ 2$ lone pairs $= 8\,e^-$ — obeys.</li></ul><p>So S does <strong>not</strong> obey the octet in $4$ compounds, not $3$. $\Rightarrow$ <strong>Statement I is false.</strong></p><p><strong>Statement II</strong> — lone pairs on the central atom:</p>$$H_2O:2,\ \ NH_3:1,\ \ H_3O^+\text{—},\ \ ClF_3:2,\ \ SF_4:1,\ \ BrF_5:1,\ \ XeF_4:2$$<ul><li>$[H_2O, ClF_3, SF_4]$: $2,2,1$ — not all one.</li><li>$[NH_3, BrF_5, SF_4]$: $1,1,1$ — <strong>all one.</strong> $\checkmark$</li><li>$[BrF_5, ClF_3, XeF_4]$: $1,2,2$ — not all one.</li><li>$[XeF_4, ClF_3, H_2O]$: $2,2,2$ — not all one.</li></ul><p>Exactly $1$ set qualifies. $\Rightarrow$ <strong>Statement II is true.</strong></p><p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-54"><h3>Question 54 · Chemistry</h3><p>Match List - I with List - II. Given $V_1$ and $V_2$ are initial and final volumes respectively.
List - I (Isothermal process): A. Reversible expansion; B. Free expansion; C. Irreversible Compression; D. Cyclic reversible.
List - II (Expression): I. $q=0$; II. $q=nRT\ln\dfrac{V_2}{V_1}$; III. $w=-p_{ext}(V_1-V_2)$; IV. $\dfrac{q_{rev}}{T}=0$.
Choose the correct answer from the options given below:</p><ol type="A"><li>A-II, B-III, C-I, D-IV</li><li>A-II, B-I, C-IV, D-III</li><li>A-II, B-I, C-III, D-IV</li><li>A-I, B-II, C-III, D-IV</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — A-II, B-I, C-III, D-IV</p><ul><li><strong>A. Reversible isothermal expansion:</strong> $\Delta U = 0$, so $q = -w = nRT\ln\dfrac{V_2}{V_1}$ → <strong>II</strong>.</li><li><strong>B. Free expansion:</strong> $p_{ext}=0 \Rightarrow w=0$; isothermal ideal gas has $\Delta U=0$, so $q=0$ → <strong>I</strong>.</li><li><strong>C. Irreversible compression:</strong> work against constant external pressure, $w=-p_{ext}(V_2-V_1)=-p_{ext}(V_1-V_2)$ as written → <strong>III</strong>.</li><li><strong>D. Cyclic reversible:</strong> entropy is a state function, so over a cycle $\displaystyle\oint \dfrac{q_{rev}}{T}=0$ → <strong>IV</strong>.</li></ul><p>So A-II, B-I, C-III, D-IV.</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-55"><h3>Question 55 · Chemistry</h3><p>Given below are two statements: [figure: Chamber 1 (18 g glucose in 100 mL aqueous solution) and Chamber 2 (30 g glucose in 250 mL aqueous solution) separated by a semi-permeable membrane]
Statement I: H$_2$O molecules move from the chamber 1 to chamber 2.
Statement II: The osmotic pressure of a solution prepared by dissolving 50 mg of potassium sulphate (molar mass = 174 g/mol) in 2 L of water (at 27 °C) is 0.0107 bar. (Given: R = 0.083 dm$^3$ bar K$^{-1}$ mol$^{-1}$ and assume complete dissociation of electrolyte)
In the light of the above statements, choose the correct answer from the options given below:</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — Statement I is false but Statement II is true</p></details></section><section class="mock-q" id="q-56"><h3>Question 56 · Chemistry</h3><p>Given is a concentrated solution of a weak electrolyte A$_x$B$_y$ of concentration 'c' and dissociation constant 'K'. The degree of dissociation is given by:</p><ol type="A"><li>$\left[K\times c^{x+y-1}x^x y^y\right]^{x+y}$</li><li>$\left(\dfrac{K}{c^{x+y-1}x^x y^y}\right)^{\frac{1}{x+y}}$</li><li>$\left(\dfrac{c^{x+y-1}x^x y^y}{K}\right)^{x+y}$</li><li>$\left(\dfrac{c^{x+y-1}x^x y^y}{K}\right)^{\frac{1}{x+y}}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $\left(\dfrac{K}{c^{x+y-1}x^x y^y}\right)^{\frac{1}{x+y}}$</p><p>Dissociation: $\text{A}_x\text{B}_y \rightleftharpoons x\,\text{A}^{y+} + y\,\text{B}^{x-}$.</p><p>With degree of dissociation $\alpha$ (and $\alpha \ll 1$, so $[\text{A}_x\text{B}_y] \approx c$):</p>$$[\text{A}^{y+}] = xc\alpha, \qquad [\text{B}^{x-}] = yc\alpha$$

$$K = \frac{[\text{A}^{y+}]^x\,[\text{B}^{x-}]^y}{[\text{A}_x\text{B}_y]} = \frac{(xc\alpha)^x (yc\alpha)^y}{c} = x^x y^y\, c^{x+y-1}\, \alpha^{x+y}$$<p>Solve for $\alpha$:</p>$$\alpha^{x+y} = \frac{K}{c^{x+y-1}\,x^x y^y} \implies \alpha = \left(\frac{K}{c^{x+y-1}\,x^x y^y}\right)^{\frac{1}{x+y}}$$<p><strong>Answer:</strong> B $\left(\left(\dfrac{K}{c^{x+y-1}x^x y^y}\right)^{\frac{1}{x+y}}\right)$</p></details></section><section class="mock-q" id="q-57"><h3>Question 57 · Chemistry</h3><p>For a general redox reaction:
Anode: $\text{Red}_1\to\text{Ox}_1^{n_1+}+n_1 e^-$
Cathode: $\text{Ox}_2+n_2 e^-\to\text{Red}_2^{n_2-}$
Which of the following statement is incorrect? [Option 3 includes a figure: plot of $\dfrac{(E-E^\circ)}{RT/F}$ versus $\log_{10}Q$ showing straight lines for n=1, n=2, n=3 with slope $\propto \dfrac{1}{n}$]</p><ol type="A"><li>The overall reaction can be written as $n_2\text{Red}_1+n_1\text{Ox}_2 \rightleftharpoons n_2\text{Ox}_1^{n_1+}+n_1\text{Red}_2^{n_2-}$</li><li>The electrons do not appear in the overall reaction because electrons produced at the anode are consumed at the cathode.</li><li>[plot of $(E-E^\circ)/(RT/F)$ versus $\log_{10}Q$ with lines for n=1, n=2, n=3 and slope $\propto 1/n$] Here n is the number of electrons transferred in redox reaction.</li><li>If the reaction is carried out reversibly, the electrical work done is equal to the ratio of charge and potential difference through which charge is moved.</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — If the reaction is carried out reversibly, the electrical work done is equal to the ratio of charge and potential difference through which charge is moved.</p><p>Evaluate each statement.</p><ul><li><strong>Option 1 (correct):</strong> Cross-multiplying to balance electrons ($n_1 n_2$ each) gives $n_2\text{Red}_1+n_1\text{Ox}_2 \rightleftharpoons n_2\text{Ox}_1^{n_1+}+n_1\text{Red}_2^{n_2-}$. ✓</li><li><strong>Option 2 (correct):</strong> Electrons produced at the anode are consumed at the cathode, so they cancel in the overall equation. ✓</li><li><strong>Option 3 (correct):</strong> From the Nernst equation $E = E^\circ - \dfrac{RT}{nF}\ln Q$, rearranging gives $\dfrac{E-E^\circ}{RT/F} = -\dfrac{2.303}{n}\log_{10}Q$, so the slope magnitude $\propto \dfrac{1}{n}$. ✓</li><li><strong>Option 4 (INCORRECT):</strong> Electrical work $= \text{charge}\times\text{potential difference}$ (a <strong>product</strong>), i.e. $W = qE$, not the <strong>ratio</strong> $q/E$. ✗</li></ul><p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-58"><h3>Question 58 · Chemistry</h3><p>In a period, the first ionisation enthalpy of the element at extreme left and the negative electron gain enthalpy of the extreme right element, except noble gases, are respectively.</p><ol type="A"><li>lowest and lowest</li><li>highest and lowest</li><li>lowest and highest</li><li>highest and highest</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — lowest and highest</p><p><strong>Extreme left element</strong> of a period is an <strong>alkali metal</strong> (Group 1). It has a single loosely held $ns^1$ electron, so its first ionisation enthalpy is the <strong>lowest</strong> in the period.</p><p><strong>Extreme right element (excluding noble gases)</strong> is a <strong>halogen</strong> (Group 17). It needs just one electron to complete its octet, releasing a large amount of energy, so its negative electron gain enthalpy is the <strong>highest</strong> (most negative) in the period.</p><p><strong>Answer:</strong> C (lowest and highest)</p></details></section><section class="mock-q" id="q-59"><h3>Question 59 · Chemistry</h3><p>Given below are two statements:
Statement I: F$_2$O &lt; H$_2$O &lt; Cl$_2$O is the correct trend in terms of bond angle.
Statement II: SiF$_4$, SnF$_4$ and PbF$_4$ are ionic in nature.
In the light of the above statements, choose the correct answer from the options given below:</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — Statement I is true but Statement II is false</p><p><strong>Statement I:</strong> Comparing the central-oxygen bond angles:</p>$$F_2O\ (\approx 103^\circ) &lt; H_2O\ (104.5^\circ) &lt; Cl_2O\ (\approx 111^\circ)$$<p>Fluorine is highly electronegative and pulls the bonding pairs away from O, reducing repulsion between bond pairs and compressing the angle; chlorine is larger and less electronegative, so bond pairs stay near O and, with added bp–bp / steric repulsion of the large Cl atoms, the angle opens up. The stated trend is <strong>true</strong>.</p><p><strong>Statement II:</strong> $SiF_4$ is a covalent, molecular (gaseous) compound, not ionic. While the heavier $SnF_4$ and $PbF_4$ have considerable ionic character, grouping all three as ionic is incorrect. <strong>False.</strong></p><p>Statement I is true, Statement II is false.</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-60"><h3>Question 60 · Chemistry</h3><p>The correct order of first ($\Delta_iH_1$) and second ($\Delta_iH_2$) ionisation enthalpy values of Cr and Mn are:
A. $\Delta_iH_1$: Cr &gt; Mn
B. $\Delta_iH_2$: Cr &gt; Mn
C. $\Delta_iH_1$: Mn &gt; Cr
D. $\Delta_iH_2$: Mn &gt; Cr
Choose the correct answer from the options given below:</p><ol type="A"><li>A and B only</li><li>B and C only</li><li>A and D only</li><li>C and D only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — B and C only</p><p>Configurations: $\text{Cr} = [\text{Ar}]3d^{5}4s^{1}$, $\text{Mn} = [\text{Ar}]3d^{5}4s^{2}$.</p><p><strong>First ionisation ($\Delta_iH_1$):</strong> one $4s$ electron is removed from each. Mn’s $4s^2$ pair experiences a higher effective nuclear charge, so</p>$$\Delta_iH_1:\ \text{Mn} &gt; \text{Cr}\quad(717 &gt; 653\ \text{kJ mol}^{-1})$$<p>So statement <strong>C</strong> is correct (and A is wrong).</p><p><strong>Second ionisation ($\Delta_iH_2$):</strong></p>$$\text{Cr}^{+} = 3d^{5}\ (\text{stable half-filled — hard to remove}),\qquad \text{Mn}^{+} = 3d^{5}4s^{1}\ (\text{remove the loose }4s)$$<p>Removing an electron from the extra-stable $3d^5$ of $\text{Cr}^{+}$ needs more energy:</p>$$\Delta_iH_2:\ \text{Cr} &gt; \text{Mn}\quad(1592 &gt; 1509\ \text{kJ mol}^{-1})$$<p>So statement <strong>B</strong> is correct (and D is wrong).</p><p>Correct: <strong>B and C</strong>.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-61"><h3>Question 61 · Chemistry</h3><p>Which of the following sequences of hybridisation, geometry and magnetic nature are correct for the given coordination compounds?
A. [NiCl$_4$]$^{2-}$ - sp$^3$, tetrahedral, paramagnetic
B. [Ni(NH$_3$)$_6$]$^{2+}$ - sp$^3$d$^2$, octahedral, paramagnetic
C. [Ni(CO)$_4$] - sp$^3$, tetrahedral, paramagnetic
D. [Ni(CN)$_4$]$^{2-}$ - dsp$^2$, square planar, diamagnetic
Choose the correct answer from the options given below:</p><ol type="A"><li>A, B, C and D</li><li>B, C and D only</li><li>A, C and D only</li><li>A, B and D only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — A, B and D only</p><ul><li><strong>A.</strong> $[NiCl_4]^{2-}$: $Ni^{2+}(d^8)$, $Cl^-$ weak field $\Rightarrow sp^3$, tetrahedral, 2 unpaired $\Rightarrow$ paramagnetic. CORRECT.</li><li><strong>B.</strong> $[Ni(NH_3)_6]^{2+}$: $Ni^{2+}(d^8)$ octahedral $\Rightarrow sp^3d^2$, 2 unpaired $\Rightarrow$ paramagnetic. CORRECT.</li><li><strong>C.</strong> $[Ni(CO)_4]$: $Ni(0)(d^{10})$, $sp^3$, tetrahedral, all electrons paired $\Rightarrow$ <strong>diamagnetic</strong>, not paramagnetic. INCORRECT.</li><li><strong>D.</strong> $[Ni(CN)_4]^{2-}$: $Ni^{2+}(d^8)$, $CN^-$ strong field $\Rightarrow$ pairing, $dsp^2$, square planar, 0 unpaired $\Rightarrow$ diamagnetic. CORRECT.</li></ul><p>So A, B and D only.</p><p><strong>Answer:</strong> D (A, B and D only)</p></details></section><section class="mock-q" id="q-62"><h3>Question 62 · Chemistry</h3><p>Given below are two statements:
Statement I: A mixture of C$_{12}$H$_{22}$O$_{11}$ (sugar) and NaCl can be separated by dissolving sugar in alcohol, due to differential solubility.
Statement II: Rose essence from rose petals is seperated by steam distillation due to its high volatility and insolubility in H$_2$O.
In the light of the above statements, choose the correct answer from the options given below:</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — Both Statement I and Statement II are true</p><p><strong>Statement I:</strong> Sucrose is appreciably soluble in ethanol, whereas NaCl is essentially <strong>insoluble</strong> in ethanol. Stirring the mixture with alcohol dissolves only the sugar; filtration leaves NaCl behind. This is a valid <strong>differential-solubility (extraction)</strong> separation. <strong>True.</strong></p><p><strong>Statement II:</strong> Steam distillation applies to substances that are <strong>steam-volatile</strong> and <strong>immiscible with water</strong>. The volatile, water-insoluble oils of rose petals distil over with steam and are then separated. <strong>True.</strong></p><p>Both statements are true.</p><p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-63"><h3>Question 63 · Chemistry</h3><p>Shown below is the structure of methyl acetate with three different $\alpha$, $\beta$ and $\gamma$ carbon-oxygen bonds. $\text{H}_3\text{C}-\underset{\beta}{\overset{\overset{\textstyle O}{\|}\alpha}{\text{C}}}-\underset{\gamma}{\text{O}}-\text{CH}_3$. The correct order of bond lengths of these bonds is:</p><ol type="A"><li>$\alpha&gt;\beta&gt;\gamma$</li><li>$\alpha&lt;\beta&lt;\gamma$</li><li>$\alpha=\beta=\gamma$</li><li>$\alpha&lt;\beta=\gamma$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $\alpha&lt;\beta&lt;\gamma$</p><p>Identify the three carbon–oxygen bonds:</p><ul><li>$\alpha$: the carbonyl $\text{C}=\text{O}$ double bond.</li><li>$\beta$: the single bond from the carbonyl carbon to the ester oxygen ($\text{C}-\text{O}$).</li><li>$\gamma$: the single bond from the ester oxygen to the methyl group ($\text{O}-\text{CH}_3$).</li></ul><p>The carbonyl $\text{C}=\text{O}$ ($\alpha$) is a genuine double bond, so it is the <strong>shortest</strong>.</p><p>The ester oxygen’s lone pair is delocalised into the carbonyl (resonance $\text{C}-\text{O}^+ = \text{C}$), giving the $\beta$ bond <strong>partial double-bond character</strong>, so it is shorter than a plain single bond.</p><p>The $\gamma$ bond ($\text{O}-\text{CH}_3$) is a normal single bond with the least double-bond character, so it is the <strong>longest</strong>.</p><p>Hence the increasing order of bond length is:</p>$$\alpha \;&lt;\; \beta \;&lt;\; \gamma$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-64"><h3>Question 64 · Chemistry</h3><p>'x' is the product which is obtained by the hydrolysis of prop-1-yne in the presence of mercuric sulphate under dilute acidic medium at 333 K. 'y' is the product which is obtained by the reaction of ethane nitrile with methyl magnesium bromide in dry ether followed by hydrolysis. IUPAC name of product obtained from 'x' and 'y' in the presence of barium hydroxide followed by heating is:</p><ol type="A"><li>2 - Methylpent-4-en-3-one</li><li>4 - Methylpent-3-en-2-one</li><li>4 - Methylpent-1-ene</li><li>2 - Methylpent-3-one</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 4 - Methylpent-3-en-2-one</p><p><strong>Find x:</strong> Markovnikov hydration of prop-1-yne ($CH_3\text{–}C\equiv CH$) with $HgSO_4/\text{dil. }H_2SO_4$ adds water at the internal carbon:</p>$$CH_3\text{–}C\equiv CH \xrightarrow{H_2O,\,HgSO_4} CH_3\text{–}\underset{O}{\overset{}{C}}\text{–}CH_3 \;=\; \textbf{acetone}$$<p><strong>Find y:</strong> A nitrile with a Grignard reagent gives a ketone after hydrolysis:</p>$$CH_3C\equiv N + CH_3MgBr \rightarrow CH_3\text{–}C(=NMgBr)\text{–}CH_3 \xrightarrow{H_3O^+} CH_3\text{–}CO\text{–}CH_3 \;=\; \textbf{acetone}$$<p>So both x and y are <strong>acetone</strong>. With $Ba(OH)_2$ (base), acetone undergoes <strong>aldol condensation</strong> with itself; heating dehydrates the aldol:</p>$$2\,CH_3COCH_3 \xrightarrow{Ba(OH)_2} (CH_3)_2C(OH)\text{–}CH_2\text{–}COCH_3 \xrightarrow{\Delta,\,-H_2O} (CH_3)_2C{=}CH\text{–}COCH_3$$<p>The product is <strong>mesityl oxide</strong>. Numbering to give the ketone the lowest locant:</p>$$\underset{1}{CH_3}\text{–}\underset{2}{CO}\text{–}\underset{3}{CH}{=}\underset{4}{C}(CH_3)\text{–}\underset{5}{CH_3}$$<p>giving <strong>4-methylpent-3-en-2-one</strong>.</p><p><strong>Answer:</strong> 4 - Methylpent-3-en-2-one</p></details></section><section class="mock-q" id="q-65"><h3>Question 65 · Chemistry</h3><p>An optically active alkyl bromide C$_4$H$_9$Br, reacts with ethanolic KOH to form major compound [A] which reacts with bromine to give compound [B]. Compound [B] reacts with ethanolic KOH and sodamide to give compound [C]. One molecule of water adds to compound [C] on warming with mercuric sulphate and dilute sulphuric acid at 333 K to form compound [D]. The functional group in compound D will be confirmed by:</p><ol type="A"><li>Haloform test</li><li>Lucas test</li><li>Silver mirror test</li><li>Benedict test</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — Haloform test</p><p><strong>Identify the starting bromide:</strong> an <em>optically active</em> $C_4H_9Br$ must have a stereocentre, so it is <strong>2-bromobutane</strong>, $CH_3\text{–}CHBr\text{–}CH_2\text{–}CH_3$.</p><p>Trace the sequence:</p><ul><li><strong>[A]</strong> — ethanolic KOH → dehydrohalogenation (Saytzeff) → <strong>but-2-ene</strong>, $CH_3CH{=}CHCH_3$.</li><li><strong>[B]</strong> — $Br_2$ addition → <strong>2,3-dibromobutane</strong>.</li><li><strong>[C]</strong> — ethanolic KOH then $NaNH_2$ → double dehydrohalogenation → <strong>but-2-yne</strong>, $CH_3\text{–}C\equiv C\text{–}CH_3$.</li><li><strong>[D]</strong> — $H_2O/HgSO_4/\text{dil. }H_2SO_4$ (333 K) hydrates the internal alkyne → <strong>butan-2-one</strong>, $CH_3\text{–}CO\text{–}CH_2\text{–}CH_3$.</li></ul><p>Butan-2-one is a <strong>methyl ketone</strong> ($CH_3CO\text{–}$ group), which gives a positive <strong>iodoform (haloform) test</strong>. Tollens’ (silver mirror) and Benedict’s are aldehyde tests; Lucas is an alcohol test — none apply here.</p><p><strong>Answer:</strong> Haloform test</p></details></section><section class="mock-q" id="q-66"><h3>Question 66 · Chemistry</h3><p>Consider the following reaction. [figure: benzyl phenyl ether, C$_6$H$_5$-O-CH$_2$-C$_6$H$_5$] + HI $\rightarrow$ Product.
Statement I: In the above reaction, product formed will be a mixture of benzyl alcohol and iodobenzene.
Statement II: In the above reaction, the $-$O$-$CH$_2-$ bond is cleaved to give the product.
In the light of the above statements, choose the correct answer from the options given below:</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — Statement I is false but Statement II is true</p></details></section><section class="mock-q" id="q-67"><h3>Question 67 · Chemistry</h3><p>Consider the following organic reaction sequence. Choose the final product (X) from the following (consider the major product in all intermediate reactions). [figure: propanoic acid (CH$_3$CH$_2$COOH) subjected to] (i) NH$_3$/$\Delta$ (ii) NaOH/Br$_2$ (iii) HNO$_2$/H$_2$O, 0°C (iv) C$_6$H$_5$N$_2$Cl, 0°C $\rightarrow$ (X) Major Product</p><ol type="A"><li>Benzene</li><li>Phenol</li><li>Propanol</li><li>Chlorobenzene</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — Benzene</p></details></section><section class="mock-q" id="q-68"><h3>Question 68 · Chemistry</h3><p>The number of compounds from the following which can undergo reaction with Br$_2$/KOH (alcoholic) to give respective products and these respective products can also be obtained separately by Gabriel phthalimide reaction is: [figure: six amide structures shown — C$_6$H$_5$CONH$_2$ (benzamide); C$_6$H$_5$CH$_2$CONH$_2$; CH$_3$CONH$_2$ (acetamide); C$_6$H$_{11}$CONHCH$_2$CH$_3$; (CH$_3$)$_3$C-CONHCH$_3$; C$_6$H$_{11}$CONH$_2$]</p><ol type="A"><li>$5$</li><li>$4$</li><li>$3$</li><li>$6$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $3$</p></details></section><section class="mock-q" id="q-69"><h3>Question 69 · Chemistry</h3><p>Consider the following reactions. Total number of electrons in the $\pi$ bonds and lone pair of electrons in the product (X) is: [figure: glucose written as CHO-(CHOH)$_4$-CH$_2$OH] (i) HI, $\Delta$ (ii) V$_2$O$_5$/10-20 atm/773 K (iii) Benzoyl chloride/Anhyd. AlCl$_3$ $\rightarrow$ (X) Major product</p><ol type="A"><li>$12$</li><li>$16$</li><li>$14$</li><li>$18$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $18$</p></details></section><section class="mock-q" id="q-70"><h3>Question 70 · Chemistry</h3><p>Treatment of a gas 'X' with a freshly prepared ferrous sulphate solution gives a compound 'Y' as a brown ring. The compounds X and Y are.</p><ol type="A"><li>NO and [Fe(NO)]SO$_4$</li><li>NO$_2$ and [Fe(NO$_2$)]SO$_4$</li><li>N$_2$O and [Fe(N$_2$O)]SO$_4$</li><li>N$_2$O$_4$ and [Fe(N$_2$O$_4$)]SO$_4$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — NO and [Fe(NO)]SO$_4$</p><p>This is the classic <strong>brown-ring test</strong> for nitrate/nitrite. The nitrate is first reduced by $\text{Fe}^{2+}$ in the presence of concentrated $\text{H}_2\text{SO}_4$ to nitric oxide:</p>$$3\text{Fe}^{2+} + 4\text{H}^+ + \text{NO}_3^- \rightarrow 3\text{Fe}^{3+} + \text{NO} + 2\text{H}_2\text{O}$$<p>The liberated gas $X = \text{NO}$ then combines with fresh $\text{Fe}^{2+}$ (as $\text{FeSO}_4$) to form the brown nitrosyl-iron complex at the interface:</p>$$[\text{Fe(H}_2\text{O)}_6]^{2+} + \text{NO} \rightarrow [\text{Fe(H}_2\text{O)}_5(\text{NO})]^{2+} + \text{H}_2\text{O}$$<p>Written as the sulphate, $Y = [\text{Fe(NO)}]\text{SO}_4$, the brown ring.</p><p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-71"><h3>Question 71 · Chemistry · Numerical</h3><p>An excess of AgNO$_3$ is added to 100 mL of a 0.05 M solution of tetraaquadichloridochromium (III) chloride. The number of moles of AgCl precipitated will be __________ $\times10^{-3}$. (Nearest integer)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
5</p><p>The complex is $[Cr(H_2O)_4Cl_2]Cl$. Two chlorides are inside the coordination sphere and do not ionize; only the <strong>one</strong> chloride outside the sphere is free and precipitable by $Ag^+$.</p><p>Moles of complex:</p>$$n = 0.100\ \text{L} \times 0.05\ \text{M} = 5 \times 10^{-3}\ \text{mol}$$<p>Each formula unit gives 1 free $Cl^-$, so:</p>$$n_{\text{AgCl}} = 5 \times 10^{-3}\ \text{mol}$$<p>Hence the value is $5$.</p><p><strong>Answer:</strong> 5</p></details></section><section class="mock-q" id="q-72"><h3>Question 72 · Chemistry · Numerical</h3><p>An alkane (Y) requires 8 moles of oxygen for complete combustion and on chlorination with Cl$_2$/h$\nu$, (Y) gives only one monochlorinated product (Z). The total number of primary carbon atoms in (Y) is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
4</p><p><strong>Find the molecular formula.</strong> From $\dfrac{3n+1}{2} = 8$, we get $n = 5$, so $(Y)$ is $\text{C}_5\text{H}_{12}$.</p><p><strong>Use the “only one monochloro product” clue.</strong> Among the three $\text{C}_5\text{H}_{12}$ isomers:</p><ul><li>n-pentane $\to$ 3 monochloro products,</li><li>2-methylbutane $\to$ 4 monochloro products,</li><li><strong>2,2-dimethylpropane (neopentane), $\text{C(CH}_3)_4$</strong> $\to$ all 12 H are equivalent $\to$ <strong>only 1</strong> monochloro product. ✓</li></ul><p>So $(Y)$ is neopentane, $\text{C(CH}_3)_4$. Its four $\text{CH}_3$ groups are all <strong>primary carbons</strong> (the central carbon is quaternary).</p>$$\text{Primary carbon atoms} = 4$$<p><strong>Answer:</strong> 4</p></details></section><section class="mock-q" id="q-73"><h3>Question 73 · Chemistry · Numerical</h3><p>500 mL of 0.2 M MnO$_4^-$ solution in basic medium when mixed with 500 mL of 1.5 M KI solution, oxidises iodide ions to liberate molecular iodine. This liberated iodine is then titrated with a standard $x$ M thiosulphate solution in presence of starch till the end point. If 300 mL of thiosulphate was consumed, then the value of $x$ is __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
1</p><p><strong>Moles of $\text{MnO}_4^-$:</strong> $0.500 \times 0.2 = 0.1$ mol.</p><p>In <strong>basic (neutral) medium</strong>, $\text{MnO}_4^-$ is reduced to $\text{MnO}_2$, gaining $3\,e^-$ each:</p>$$\text{electrons available} = 0.1 \times 3 = 0.3\ \text{mol}\,e^-$$<p>Iodide is oxidised $2I^- \to I_2 + 2e^-$ ($1\,e^-$ per $I^-$), so $0.3$ mol $I^-$ is oxidised:</p>$$n_{I_2} = \frac{0.3}{2} = 0.15\ \text{mol}$$<p>(KI available $= 0.75$ mol, so $\text{MnO}_4^-$ is limiting — consistent.)</p><p><strong>Thiosulphate titration:</strong> $I_2 + 2\text{S}_2\text{O}_3^{2-} \to 2I^- + \text{S}_4\text{O}_6^{2-}$</p>$$n_{\text{thio}} = 2 \times 0.15 = 0.30\ \text{mol}$$

$$x = \frac{n_{\text{thio}}}{V} = \frac{0.30}{0.300} = 1\ \text{M}$$<p><strong>Answer:</strong> 1</p></details></section><section class="mock-q" id="q-74"><h3>Question 74 · Chemistry · Numerical</h3><p>In a closed flask at 600 K, one mole of X$_2$Y$_4$(g) attains equilibrium as given below:
$$X_2Y_4(g)\rightleftharpoons 2XY_2(g)$$
At equilibrium, 75% X$_2$Y$_4$(g) was dissociated and the total pressure is 1 atm. The magnitude of $\Delta_rG^\ominus$ (in kJ mol$^{-1}$) at this temperature is __________. (Nearest Integer) (Given: R = 8.3 J mol$^{-1}$K$^{-1}$; ln 10 = 2.3, log 2 = 0.3, log 3 = 0.48, log 5 = 0.69, log 7 = 0.84)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
8</p><p>Start with 1 mol X$_2$Y$_4$; $\alpha = 0.75$.</p><table><thead><tr><th>Species</th><th>X$_2$Y$_4$</th><th>XY$_2$</th></tr></thead><tbody><tr><td>mol at eqm</td><td>$1-\alpha = 0.25$</td><td>$2\alpha = 1.5$</td></tr></tbody></table><p>Total moles $= 1 + \alpha = 1.75$. With $P = 1$ atm:</p>$$p_{X_2Y_4} = \frac{0.25}{1.75} = \frac{1}{7}, \qquad p_{XY_2} = \frac{1.5}{1.75} = \frac{6}{7}$$

$$K_p = \frac{p_{XY_2}^2}{p_{X_2Y_4}} = \frac{(6/7)^2}{1/7} = \frac{36/49}{1/7} = \frac{36}{7}$$

$$\log K_p = \log 36 - \log 7 = (2\log 2 + 2\log 3) - \log 7 = (0.60 + 0.96) - 0.84 = 0.72$$

$$\Delta_rG^\ominus = -2.3\,RT\log K_p = -2.3 \times 8.3 \times 600 \times 0.72 \approx -8247\ \text{J mol}^{-1} \approx -8.25\ \text{kJ mol}^{-1}$$<p>Magnitude $\approx 8\ \text{kJ mol}^{-1}$.</p><p><strong>Answer:</strong> 8</p></details></section><section class="mock-q" id="q-75"><h3>Question 75 · Chemistry · Numerical</h3><p>Decomposition of a hydrocarbon follows the equation $k=(5.5\times10^{11}\text{s}^{-1})\,e^{\frac{-28000K}{T}}$. The activation energy of reaction is __________ kJ mol$^{-1}$. (Nearest Integer) Given: R = 8.3 J K$^{-1}$ mol$^{-1}$</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
232</p><p>The Arrhenius equation is:</p>$$k = A\, e^{-E_a/RT}$$<p>Comparing the exponent with the given expression:</p>$$\frac{E_a}{RT} = \frac{28000\,\text{K}}{T} \Rightarrow \frac{E_a}{R} = 28000\,\text{K}$$

$$E_a = 28000 \times 8.3 = 232400\ \text{J mol}^{-1} = 232.4\ \text{kJ mol}^{-1}$$<p><strong>Answer:</strong> 232</p></details></section></details>

---

## Extracted page code (interactive scripts & widgets)


### inline-script-11

```js
window.MOCK_DATA={date:"2026-04-06",duration_min:180,marking:{correct:4,incorrect:-1},questions:[{correct_index:3,correct_value:"neither one-one nor onto",id:"6911211201",options:["both one-one and onto","one-one but not onto","onto but not one-one","neither one-one nor onto"],solution:`The denominator $3x^2 + x + 3$ has discriminant $1 - 36 < 0$, so it is always positive and $f$ is defined on all of $\\mathbb{R}$.

**Onto?** Set $y = f(x)$ and clear denominators:
$$y(3x^2 + x + 3) = 2x^2 - 3x + 2 \\implies (3y - 2)x^2 + (y + 3)x + (3y - 2) = 0.$$
For a real $x$ (with $3y - 2 \\ne 0$) the discriminant must be $\\ge 0$:
$$(y+3)^2 - 4(3y-2)^2 \\ge 0 \\implies (y - \\tfrac17)(y - \\tfrac75) \\le 0 \\implies y \\in \\left[\\tfrac17, \\tfrac75\\right].$$
The range is the bounded interval $\\left[\\tfrac17, \\tfrac75\\right] \\ne \\mathbb{R}$, so $f$ is **not onto**.

**One-one?** For a generic value $y$ in the range the quadratic in $x$ has two distinct roots, so different $x$ map to the same $y$ (e.g. $f(0) = \\tfrac23 = f\\!\\left(\\tfrac{?}{}\\right)$ has a second preimage). Hence $f$ is **not one-one**.

$f$ is neither one-one nor onto.

**Answer:** D (neither one-one nor onto)`,statement:"Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined as $f(x)=\\dfrac{2x^2-3x+2}{3x^2+x+3}$. Then $f$ is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\dfrac{364}{243}$",id:"6911211202",options:["$\\dfrac{61}{37}$","$\\dfrac{121}{81}$","$\\dfrac{364}{243}$","$\\dfrac{1093}{729}$"],solution:`Let $t = n^2 - 2n + 2 = (n-1)^2 + 1 \\ge 1$.

By Vieta's formulas:
$$\\text{product of roots} = \\frac{t^2}{t} = t, \\qquad \\text{sum of roots} = \\frac{3}{t}.$$

- Minimum product $= \\min t = 1$ (at $n = 1$), so $\\alpha = 1$.
- Maximum sum $= \\max \\dfrac{3}{t} = \\dfrac{3}{1} = 3$, so $\\beta = 3$.

G.P. first term $\\alpha = 1$, ratio $\\dfrac{\\alpha}{\\beta} = \\dfrac{1}{3}$:
$$S_6 = \\frac{1 - (1/3)^6}{1 - 1/3} = \\frac{3}{2}\\left(1 - \\frac{1}{729}\\right) = \\frac{3}{2}\\cdot\\frac{728}{729} = \\frac{364}{243}.$$

**Answer:** C ($\\dfrac{364}{243}$)`,statement:"Consider the quadratic equation $(n^2-2n+2)x^2-3x+(n^2-2n+2)^2=0$, $n\\in\\mathbb{R}$. Let $\\alpha$ be the minimum value of the product of its roots and $\\beta$ be the maximum value of the sum of its roots. Then the sum of the first six terms of the G.P., whose first term is $\\alpha$ and the common ratio is $\\dfrac{\\alpha}{\\beta}$, is:",subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"$162$",id:"6911211203",options:["$162$","$184$","$262$","$324$"],solution:`Solve the quadratic:
$$z = \\frac{-\\sqrt6\\,i \\pm \\sqrt{(\\sqrt6\\,i)^2 - 4(-3)}}{2} = \\frac{-\\sqrt6\\,i \\pm \\sqrt{-6 + 12}}{2} = \\frac{-\\sqrt6\\,i \\pm \\sqrt6}{2}$$

So the two roots are $z = \\dfrac{\\pm\\sqrt6 - \\sqrt6\\,i}{2}$. Compute the modulus and square of each:
$$|z|^2 = \\frac{6 + 6}{4} = 3$$

For $z_1 = \\dfrac{\\sqrt6 - \\sqrt6\\,i}{2}$:
$$z_1^2 = \\frac{6(1 - i)^2}{4} = \\frac{6(-2i)}{4} = -3i$$

For $z_2 = \\dfrac{-\\sqrt6 - \\sqrt6\\,i}{2}$:
$$z_2^2 = \\frac{6(1 + i)^2}{4} = \\frac{6(2i)}{4} = 3i$$

Now raise to the 8th power via $z^8 = (z^2)^4$:
$$z_1^8 = (-3i)^4 = 3^4 \\cdot i^4 = 81, \\qquad z_2^8 = (3i)^4 = 81$$

$$\\sum_{z \\in S} z^8 = 81 + 81 = 162$$

**Answer:** A`,statement:"Let $S=\\left\\{z\\in\\mathbb{C}:z^2+\\sqrt{6}\\,iz-3=0\\right\\}$. Then $\\displaystyle\\sum_{z\\in S}z^8$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"$4\\pi$",id:"6911211204",options:["$\\pi$","$2\\pi$","$3\\pi$","$4\\pi$"],solution:`A homogeneous system has a non-trivial solution iff its coefficient determinant is zero:
$$\\begin{vmatrix} \\cos3\\theta & -8 & -12 \\\\ \\cos2\\theta & 3 & 3 \\\\ 1 & 1 & 3 \\end{vmatrix} = 0.$$

Expanding along the first row:
$$\\cos3\\theta(9 - 3) + 8(3\\cos2\\theta - 3) - 12(\\cos2\\theta - 3)$$
$$= 6\\cos3\\theta + 24\\cos2\\theta - 24 - 12\\cos2\\theta + 36 = 6\\cos3\\theta + 12\\cos2\\theta + 12.$$

Setting this to zero:
$$\\cos3\\theta + 2\\cos2\\theta + 2 = 0.$$

Write $\\cos3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$ and $\\cos2\\theta = 2\\cos^2\\theta - 1$; let $c = \\cos\\theta$:
$$4c^3 - 3c + 2(2c^2 - 1) + 2 = 4c^3 + 4c^2 - 3c = c(4c^2 + 4c - 3) = c(2c - 1)(2c + 3) = 0.$$

Since $2c + 3 = 0$ gives $c = -\\tfrac32$ (rejected), the solutions are $\\cos\\theta = 0$ or $\\cos\\theta = \\tfrac12$.

In $[0, 2\\pi]$:
$$\\cos\\theta = 0 \\Rightarrow \\theta = \\tfrac{\\pi}{2}, \\tfrac{3\\pi}{2}; \\qquad \\cos\\theta = \\tfrac12 \\Rightarrow \\theta = \\tfrac{\\pi}{3}, \\tfrac{5\\pi}{3}.$$

Sum:
$$\\frac{\\pi}{2} + \\frac{3\\pi}{2} + \\frac{\\pi}{3} + \\frac{5\\pi}{3} = 2\\pi + 2\\pi = 4\\pi.$$

**Answer:** D ($4\\pi$)`,statement:`The sum of all possible values of $\\theta\\in[0,2\\pi]$, for which the system of equations:
$$x\\cos3\\theta-8y-12z=0$$
$$x\\cos2\\theta+3y+3z=0$$
$$x+y+3z=0$$
has a non-trivial solution, is equal to:`,subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$149$",id:"6911211205",options:["$99$","$199$","$149$","$159$"],solution:`Write $A = I + N$ where
$$N = \\begin{bmatrix} 0 & 0 & 0 \\\\ 3 & 0 & 0 \\\\ 9 & 3 & 0 \\end{bmatrix}.$$
Then $N^2 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 9 & 0 & 0 \\end{bmatrix}$ and $N^3 = 0$ (nilpotent).

By the binomial theorem (terms with $N^3$ and higher vanish):
$$A^{99} = (I + N)^{99} = I + 99N + \\binom{99}{2}N^2.$$

So
$$B = A^{99} - I = 99N + \\binom{99}{2}N^2, \\qquad \\binom{99}{2} = \\frac{99\\cdot98}{2} = 4851.$$

Read off the needed entries:
$$b_{21} = 99\\cdot3 = 297, \\quad b_{32} = 99\\cdot3 = 297,$$
$$b_{31} = 99\\cdot9 + 4851\\cdot9 = 9(99 + 4851) = 9\\cdot4950 = 44550.$$

Therefore
$$\\frac{b_{31} - b_{21}}{b_{32}} = \\frac{44550 - 297}{297} = \\frac{44253}{297} = 149.$$

**Answer:** C ($149$)`,statement:"Let $A=\\begin{bmatrix}1&0&0\\\\3&1&0\\\\9&3&1\\end{bmatrix}$ and $B=[b_{ij}]$, $1\\le i,j\\le 3$. If $B=A^{99}-I$, then the value of $\\dfrac{b_{31}-b_{21}}{b_{32}}$ is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\dfrac{315}{2}$",id:"6911211206",options:["$130$","$155$","$\\dfrac{315}{2}$","$\\dfrac{325}{2}$"],solution:`The $r$-th term is
$$T_r = \\frac{1}{r}\\sum_{i=1}^{r} i^2 = \\frac{1}{r}\\cdot\\frac{r(r+1)(2r+1)}{6} = \\frac{(r+1)(2r+1)}{6} = \\frac{2r^2 + 3r + 1}{6}.$$

Summing to $10$ terms:
$$\\sum_{r=1}^{10} T_r = \\frac{1}{6}\\left(2\\sum r^2 + 3\\sum r + \\sum 1\\right) = \\frac{1}{6}\\big(2\\cdot 385 + 3\\cdot 55 + 10\\big).$$

$$= \\frac{1}{6}(770 + 165 + 10) = \\frac{945}{6} = \\frac{315}{2}.$$

**Answer:** C ($\\dfrac{315}{2}$)`,statement:"The sum $1+\\dfrac{1}{2}\\left(1^2+2^2\\right)+\\dfrac{1}{3}\\left(1^2+2^2+3^2\\right)+\\cdots$ upto 10 terms is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$7056$",id:"6911211207",options:["$2184$","$3064$","$7056$","$11340$"],solution:`The lift does not stop at floors $1$ and $2$, so the available exit floors are $3, 4, \\ldots, 10$, i.e. $8$ floors.

- Choose **which 4** of the $9$ persons form the group that leaves together: $\\binom{9}{4}$. The remaining $5$ are automatically the other group.
- Assign floors: the group of $4$ and the group of $5$ leave at **two different** floors. Pick an ordered pair of distinct floors (one for each distinguishable group): $8 \\times 7 = 56$.

$$\\binom{9}{4}\\times 8 \\times 7 = 126 \\times 56 = 7056.$$

**Answer:** C (7056)`,statement:"A building has ground floor and 10 more floors. Nine persons enter in a lift at the ground floor. The lift goes up to the $10^{\\text{th}}$ floor. The number of ways, in which any 4 persons exit at a floor and the remaining 5 persons exit at a different floor, if the lift does not stop at the first and the second floors, is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$x^2-41x+420=0$",id:"6911211208",options:["$x^2-35x+306=0$","$x^2-41x+420=0$","$x^2-45x+506=0$","$x^2-37x+342=0$"],solution:`**Mean $= 8$:**
$$2+4+\\alpha+8+\\beta+12+14 = 56 \\Rightarrow \\alpha + \\beta = 16.$$

**Variance $= 16$:** $\\ \\dfrac{\\sum x_i^2}{7} - 64 = 16 \\Rightarrow \\sum x_i^2 = 560.$
$$4+16+\\alpha^2+64+\\beta^2+144+196 = 560 \\Rightarrow \\alpha^2 + \\beta^2 = 136.$$

From $\\alpha+\\beta=16$: $\\alpha^2+\\beta^2 = 256 - 2\\alpha\\beta = 136 \\Rightarrow \\alpha\\beta = 60.$
Roots of $t^2 - 16t + 60 = 0$ are $6$ and $10$. With $\\alpha < \\beta$: $\\alpha = 6,\\ \\beta = 10.$

**New roots:**
$$3\\alpha + 2 = 20,\\qquad 2\\beta + 1 = 21.$$
Sum $= 41$, product $= 420$:
$$x^2 - 41x + 420 = 0.$$

**Answer:** B`,statement:"Let the mean and the variance of seven observations $2,4,\\alpha,8,\\beta,12,14$, $\\alpha<\\beta$, be 8 and 16 respectively. Then the quadratic equation whose roots are $3\\alpha+2$ and $2\\beta+1$ is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\dfrac{16}{231}$",id:"6911211209",options:["$\\dfrac{63}{925}$","$\\dfrac{17}{231}$","$\\dfrac{16}{231}$","$\\dfrac{64}{925}$"],solution:`Treat the $12$ balls as distinct and count perfect matchings (unordered partitions into $6$ pairs), since the order of drawing pairs does not affect whether each pair is mixed.

**Total perfect matchings** of $12$ distinct balls:
$$11!! = 11\\cdot 9\\cdot 7\\cdot 5\\cdot 3\\cdot 1 = 10395.$$

**Favourable matchings** — each pair one blue and one green — correspond to bijections between the $6$ blue and $6$ green balls:
$$6! = 720.$$

**Probability:**
$$P = \\dfrac{720}{10395} = \\dfrac{16}{231}.$$

**Answer:** B`,statement:"A bag contains 6 blue and 6 green balls. Pairs of balls are drawn without replacement until the bag is empty. The probability that each drawn pair consists of one blue and one green ball is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$6\\sqrt{2}$",id:"6911211210",options:["$8$","$6$","$6\\sqrt{2}$","$8\\sqrt{2}$"],solution:`Touching the $x$-axis at $(3,0)$ with centre in the first quadrant $\\Rightarrow$ centre $(3,r)$, radius $r$, circle $(x-3)^2+(y-r)^2=r^2$.

$y$-axis intercept: at $x=0$, $(y-r)^2=r^2-9$, length $2\\sqrt{r^2-9}=6\\sqrt3\\Rightarrow r^2-9=27\\Rightarrow r=6$.

Distance from $(3,6)$ to $x-y=3$: $\\dfrac{|3-6-3|}{\\sqrt2}=3\\sqrt2$. Chord:
$$2\\sqrt{r^2-d^2}=2\\sqrt{36-18}=6\\sqrt2.$$

**Answer:** C ($6\\sqrt{2}$)`,statement:"Let $C$ be a circle having centre in the first quadrant and touching the $x$-axis at a distance of 3 units from the origin. If the circle $C$ has an intercept of length $6\\sqrt{3}$ on $y$-axis, then the length of the chord of the circle $C$ on the line $x-y=3$ is:",subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"$\\dfrac{8}{7}$",id:"6911211211",options:["$\\dfrac{4\\sqrt{2}}{\\sqrt{7}}$","$\\dfrac{4\\sqrt{2}}{7}$","$\\dfrac{4}{\\sqrt{7}}$","$\\dfrac{8}{7}$"],solution:`Ellipse: directrix $\\dfrac{a_E}{e}=\\dfrac{4\\sqrt6}{3}$ with $e=\\dfrac{\\sqrt3}{2}$, so
$$a_E=\\frac{\\sqrt3}{2}\\cdot\\frac{4\\sqrt6}{3}=2\\sqrt2.$$
$b_E^2=a_E^2(1-e^2)=8\\cdot\\tfrac14=2$, so semi-minor $=\\sqrt2$, minor axis $=2\\sqrt2$.

Hyperbola: $e_H=$ (semi-major of $E$) $=2\\sqrt2$; latus rectum $\\dfrac{2b^2}{a}=$ (minor axis) $=2\\sqrt2$, so $\\dfrac{b^2}{a}=\\sqrt2$.
From $e_H^2=1+\\dfrac{b^2}{a^2}=8\\Rightarrow b^2=7a^2$. Then $7a^2=\\sqrt2\\,a\\Rightarrow a=\\dfrac{\\sqrt2}{7},\\ b^2=\\dfrac{2}{7}.$
$$c^2=a^2+b^2=\\frac{2}{49}+\\frac{2}{7}=\\frac{16}{49}\\Rightarrow 2c=\\frac{8}{7}.$$

**Answer:** D ($\\dfrac{8}{7}$)`,statement:"The eccentricity of an ellipse $E$ with centre at the origin $O$ is $\\dfrac{\\sqrt{3}}{2}$ and its directrices are $x=\\pm\\dfrac{4\\sqrt{6}}{3}$. Let $H:\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$ be a hyperbola whose eccentricity is equal to the length of semi-major axis of $E$, and whose length of latus rectum is equal to the length of minor axis of $E$. Then the distance between the foci of $H$ is:",subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"$9y^2=8x(1-x)$",id:"6911211212",options:["$9y^2=8x(1-x)$","$3y^2=4x(1-x)$","$9y^2=8x(x-1)$","$3y^2=4x(x-1)$"],solution:`Directrix $\\dfrac{a}{e}=9$ with $e=\\tfrac13\\Rightarrow a=3,\\ a^2=9$. Focus at $ae=1$, so $P=(1,0)$. Also $b^2=a^2(1-e^2)=8$, giving $E:\\dfrac{x^2}{9}+\\dfrac{y^2}{8}=1$.

For a chord with midpoint $(h,k)$, the chord equation is $T=S_1$:
$$\\frac{hx}{9}+\\frac{ky}{8}=\\frac{h^2}{9}+\\frac{k^2}{8}.$$
It passes through $P(1,0)$:
$$\\frac{h}{9}=\\frac{h^2}{9}+\\frac{k^2}{8}\\Rightarrow 8h^2+9k^2-8h=0\\Rightarrow 9k^2=8h(1-h).$$
Locus: $9y^2=8x(1-x)$.

**Answer:** A ($9y^2=8x(1-x)$)`,statement:"Let $x=9$ be a directrix of an ellipse $E$, whose centre is at the origin and eccentricity is $\\dfrac{1}{3}$. Let $P(\\alpha,0)$, $\\alpha>0$, be a focus of $E$ and $AB$ be a chord passing through $P$. Then the locus of the mid point of $AB$ is:",subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"$\\dfrac{1}{2}$",id:"6911211213",options:["$\\dfrac{1}{2}$","$\\dfrac{1}{3}$","$\\dfrac{2}{3}$","$\\dfrac{5}{8}$"],solution:`**Left side.** If $\\phi = \\tan^{-1}(x\\sqrt2)$ then $\\tan\\phi = x\\sqrt2$, so
$$\\sin\\phi = \\frac{x\\sqrt2}{\\sqrt{1 + 2x^2}}.$$

**Right side.** Let $\\psi = \\sin^{-1}\\sqrt{1-x^2}$, so $\\sin\\psi = \\sqrt{1-x^2}$ and (since $x\\in(0,1)$, $\\psi\\in(0,\\tfrac{\\pi}{2})$) $\\cos\\psi = \\sqrt{1-(1-x^2)} = x$. Then
$$\\cot\\psi = \\frac{x}{\\sqrt{1-x^2}}.$$

**Equate** and cancel $x>0$:
$$\\frac{\\sqrt2}{\\sqrt{1+2x^2}} = \\frac{1}{\\sqrt{1-x^2}} \\quad\\Longrightarrow\\quad 2(1-x^2) = 1 + 2x^2.$$

Solving:
$$2 - 2x^2 = 1 + 2x^2 \\quad\\Longrightarrow\\quad 4x^2 = 1 \\quad\\Longrightarrow\\quad x = \\frac12.$$

**Answer:** A`,statement:"If $\\sin\\left(\\tan^{-1}\\left(x\\sqrt{2}\\right)\\right)=\\cot\\left(\\sin^{-1}\\sqrt{1-x^2}\\right)$, $x\\in(0,1)$, then the value of $x$ is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$3\\sqrt{5}$",id:"6911211214",options:["$\\dfrac{5\\sqrt{6}}{6}$","$2\\sqrt{5}$","$3\\sqrt{5}$","$4\\sqrt{5}$"],solution:`With $\\vec{d_1}=(1,2,-3)$, $\\vec{d_2}=(2,4,-5)$:

$$\\vec{n} = \\vec{d_1}\\times\\vec{d_2} = (2,\\ -1,\\ 0),\\qquad |\\vec{n}| = \\sqrt{5}$$

Separation of base points: $\\vec{a_2}-\\vec{a_1} = (-6,\\ 3,\\ 3)$.

$$\\text{SD} = \\frac{|(-6)(2)+(3)(-1)+(3)(0)|}{\\sqrt5} = \\frac{|-15|}{\\sqrt5} = \\frac{15}{\\sqrt5} = 3\\sqrt{5}$$

**Answer:** C ($3\\sqrt{5}$)`,statement:"The shortest distance between the lines $\\dfrac{x-4}{1}=\\dfrac{y-3}{2}=\\dfrac{z-2}{-3}$ and $\\dfrac{x+2}{2}=\\dfrac{y-6}{4}=\\dfrac{z-5}{-5}$ is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$1800$",id:"6911211215",options:["$450$","$900$","$1800$","$2400$"],solution:`The area of a triangle with adjacent side vectors $\\vec p,\\vec q$ is $\\tfrac12|\\vec p\\times\\vec q|$, so the **square of the area** is $\\tfrac14|\\vec p\\times\\vec q|^2$.

Using bilinearity of the cross product with $\\vec p = 2\\vec a + 3\\vec b,\\ \\vec q = \\vec a - \\vec b$:
$$\\vec p\\times\\vec q = (2\\vec a + 3\\vec b)\\times(\\vec a - \\vec b) = -2(\\vec a\\times\\vec b) + 3(\\vec b\\times\\vec a) = -2(\\vec a\\times\\vec b) - 3(\\vec a\\times\\vec b) = -5(\\vec a\\times\\vec b).$$

Compute $\\vec a\\times\\vec b$ with $\\vec a=(2,3,3),\\ \\vec b=(6,3,3)$:
$$\\vec a\\times\\vec b = \\begin{vmatrix}\\hat i & \\hat j & \\hat k\\\\ 2 & 3 & 3\\\\ 6 & 3 & 3\\end{vmatrix} = \\hat i(3\\cdot3 - 3\\cdot3) - \\hat j(2\\cdot3 - 3\\cdot6) + \\hat k(2\\cdot3 - 3\\cdot6) = 0\\,\\hat i + 12\\,\\hat j - 12\\,\\hat k.$$

So $|\\vec a\\times\\vec b|^2 = 0 + 144 + 144 = 288$, and
$$|\\vec p\\times\\vec q|^2 = 25\\cdot 288 = 7200.$$

The square of the area is
$$\\frac14\\cdot 7200 = 1800.$$

**Answer:** C`,statement:"Let $\\vec{a}=2\\hat{i}+3\\hat{j}+3\\hat{k}$ and $\\vec{b}=6\\hat{i}+3\\hat{j}+3\\hat{k}$. Then the square of the area of the triangle with adjacent sides determined by the vectors $\\left(2\\vec{a}+3\\vec{b}\\right)$ and $\\left(\\vec{a}-\\vec{b}\\right)$ is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$17$",id:"6911211216",options:["$11$","$13$","$17$","$21$"],solution:`**Find $r,p$.** As $x\\to 2$, $\\tan(x-2)\\to 0$, so the quadratic must vanish at $x=2$:
$$4r + 2(p-2) - 2p = 4r - 4 = 0 \\ \\Rightarrow\\ r = 1.$$
Then $x^2 + (p-2)x - 2p = (x-2)(x+p)$, and using $\\tan(x-2)\\sim (x-2)$:
$$\\lim_{x\\to 2}\\dfrac{(x-2)\\,(x-2)(x+p)}{(x-2)^2} = (2+p) = 5 \\ \\Rightarrow\\ p = 3.$$

**Roots of $x^2 - 3x + q = 0$ in $(0,2)$.** Let $\\phi(x) = x^2 - 3x + q$. Both roots lie in $(0,2)$ iff:
$$\\phi(0) > 0:\\ q > 0,\\qquad \\phi(2) > 0:\\ 4 - 6 + q > 0 \\Rightarrow q > 2,$$
$$\\text{discriminant} \\ge 0:\\ 9 - 4q \\ge 0 \\Rightarrow q \\le \\tfrac94,\\qquad 0 < \\tfrac32 < 2\\ (\\text{vertex, OK}).$$

So $q \\in (2, \\tfrac94)$, giving $\\alpha = 2,\\ \\beta = \\tfrac94$:
$$4(\\alpha + \\beta) = 4\\left(2 + \\tfrac94\\right) = 4\\cdot\\tfrac{17}{4} = 17$$

**Answer:** C`,statement:"Let $\\displaystyle\\lim_{x\\to 2}\\dfrac{(\\tan(x-2))\\left(rx^2+(p-2)x-2p\\right)}{(x-2)^2}=5$ for some $r,p\\in\\mathbb{R}$. If the set of all possible values of $q$, such that the roots of the equation $rx^2-px+q=0$ lie in $(0,2)$, be the interval $(\\alpha,\\beta)$, then $4(\\alpha+\\beta)$ equals:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$68$",id:"6911211217",options:["$64$","$68$","$72$","$76$"],solution:`**Find $\\alpha$.** A singular matrix has zero determinant. Expanding,
$$\\det A = 1(1\\cdot(-1) - \\alpha\\cdot 1) - 3(2\\cdot(-1) - \\alpha\\cdot 0) + (-1)(2\\cdot 1 - 0) = 3 - \\alpha.$$
So $\\det A = 0 \\Rightarrow \\alpha = 3$, giving the interval $[1,3]$.

**Analyze $f$.** $f(x) = \\int_0^x (t^2 + 2t + 3)\\,dt = \\dfrac{x^3}{3} + x^2 + 3x$. Since the integrand $t^2 + 2t + 3 = (t+1)^2 + 2 > 0$, $f$ is strictly increasing, so on $[1,3]$:
$$m = f(1) = \\frac{1}{3} + 1 + 3 = \\frac{13}{3},\\qquad M = f(3) = 9 + 9 + 9 = 27.$$

Therefore
$$3(M - m) = 3\\left(27 - \\frac{13}{3}\\right) = 81 - 13 = 68.$$

**Answer:** B`,statement:"Let $A=\\begin{bmatrix}1&3&-1\\\\2&1&\\alpha\\\\0&1&-1\\end{bmatrix}$ be a singular matrix. Let $f(x)=\\displaystyle\\int_0^x\\left(t^2+2t+3\\right)dt$, $x\\in[1,\\alpha]$. If $M$ and $m$ are respectively the maximum and the minimum values of $f$ in $[1,\\alpha]$, then $3(M-m)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\dfrac{15}{32}$",id:"6911211218",options:["$\\dfrac{13}{8}$","$\\dfrac{11}{16}$","$\\dfrac{15}{32}$","$\\dfrac{17}{64}$"],solution:`**Determine $f$.** Put $y = 0$: $f(0) = f(x)f(0)$, and since $f(0)\\ne 0$, $f(x) = 1$ for all $x$.

**Differentiate the integral equation** (using $x^2 f(x) = x^2$):
$$\\frac{d}{dx}\\big(x^2 g(x)\\big) = x^2 - x g(x) \\implies 2x g + x^2 g' = x^2 - x g.$$
Divide by $x$:
$$x g' + 3g = x.$$

This is linear: $g' + \\dfrac{3}{x}g = 1$ with integrating factor $x^3$. Then $(x^3 g)' = x^3$, so
$$x^3 g = \\frac{x^4}{4} + C \\implies g(x) = \\frac{x}{4} + \\frac{C}{x^3}.$$

**Initial condition.** At $x = 1$, $x^2 g(x) = \\int_1^1(\\cdots) = 0 \\Rightarrow g(1) = 0 \\Rightarrow \\tfrac14 + C = 0 \\Rightarrow C = -\\tfrac14$.

Thus $g(x) = \\dfrac{x}{4} - \\dfrac{1}{4x^3}$, and
$$g(2) = \\frac{2}{4} - \\frac{1}{4\\cdot 8} = \\frac{1}{2} - \\frac{1}{32} = \\frac{15}{32}.$$

**Answer:** C`,statement:`Let $f:\\mathbb{R}\\to\\mathbb{R}$ be such that $f(xy)=f(x)f(y)$, for all $x,y\\in\\mathbb{R}$ and $f(0)\\neq 0$. Let $g:[1,\\infty)\\to\\mathbb{R}$ be a differentiable function such that
$$x^2g(x)=\\int_1^x\\left(t^2f(t)-tg(t)\\right)dt.$$
Then $g(2)$ is equal to:`,subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"$\\dfrac{343}{6}$",id:"6911211219",options:["$\\dfrac{343}{6}$","$\\dfrac{637}{6}$","$\\dfrac{437}{6}$","$\\dfrac{523}{6}$"],solution:`The lower boundary is the parabola $y = x^2 - 8x$ and the upper boundary is the line $y = -x$.

**Intersections.** $x^2 - 8x = -x \\Rightarrow x^2 - 7x = 0 \\Rightarrow x = 0,\\ 7$.

For $0 \\le x \\le 7$ the line is above the parabola (e.g. at $x=1$: $-1 > -7$), so the vertical width is
$$(-x) - (x^2 - 8x) = 7x - x^2.$$

**Integrate.**
$$\\text{Area} = \\int_0^7 (7x - x^2)\\,dx = \\left[\\frac{7x^2}{2} - \\frac{x^3}{3}\\right]_0^7 = \\frac{7\\cdot 49}{2} - \\frac{343}{3} = \\frac{343}{2} - \\frac{343}{3} = \\frac{343}{6}.$$

**Answer:** A`,statement:"The area of the region $\\{(x,y):x^2-8x\\le y\\le -x\\}$ is:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$2\\log_e 2$",id:"6911211220",options:["$3\\log_e 2$","$2\\log_e 2$","$5\\log_e 3$","$3\\log_e 3$"],solution:`The denominator $x^2 + 2|x| + 1 = (|x| + 1)^2$ is **even**. Split the numerator:

- $\\dfrac{x^3}{(|x|+1)^2}$ is **odd** (odd numerator over even denominator), so it integrates to $0$ over $[-1,1]$.
- $\\dfrac{|x| + 1}{(|x|+1)^2} = \\dfrac{1}{|x|+1}$ is **even**.

Therefore
$$I = \\int_{-1}^{1}\\frac{dx}{|x|+1} = 2\\int_0^1 \\frac{dx}{x+1} = 2\\big[\\ln(x+1)\\big]_0^1 = 2\\ln 2.$$

**Answer:** B`,statement:"The value of the integral $\\displaystyle\\int_{-1}^{1}\\left(\\dfrac{x^3+|x|+1}{x^2+2|x|+1}\\right)dx$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:null,correct_value:"15",id:"6911211221",options:[],solution:`$\\log_e(x+y) \\le 2 \\iff x + y \\le e^2 \\approx 7.389$. With $x, y \\in \\mathbb{N}$ (so $\\ge 1$), this means
$$R = \\{(x,y) : x + y \\le 7\\}.$$
Counting by $s = x+y$ from $2$ to $7$: sizes $1,2,3,4,5,6$, so $|R| = 21$.

For transitivity we need: whenever $(x,y), (y,z) \\in R$, also $(x,z) \\in R$. The minimum superset that is transitive is the **transitive closure** of $R$.

$R$ contains $(1,1),\\dots$ and links every $a \\le 6$ to every $b \\le 6$ eventually (e.g. $(1,6)$ and $(6,1)$ chain to force $(a,b)$ for all $a,b \\in \\{1,\\dots,6\\}$). Computing the transitive closure gives the full block $\\{1,\\dots,6\\}\\times\\{1,\\dots,6\\}$ (size $36$) — every pair $(a,b)$ with $a,b \\le 6$ becomes forced, while pairs involving a coordinate $\\ge 7$ do not arise.

$$\\text{closure size} = 36,\\qquad \\text{elements to add} = 36 - 21 = 15.$$

**Answer:** 15`,statement:"Let $R=\\left\\{(x,y)\\in\\mathbb{N}\\times\\mathbb{N}:\\log_e(x+y)\\le 2\\right\\}$. Then the minimum number of elements, required to be added in $R$ to make it a transitive relation, is __________.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"30",id:"6911211222",options:[],solution:`Factor the left side: $(1 - x^3)^{10} = (1-x)^{10}(1 + x + x^2)^{10}.$

Divide both sides by $(1-x)^{30}$ and let $y = \\dfrac{x}{(1-x)^2}$:

$$\\frac{(1+x+x^2)^{10}}{(1-x)^{20}} = \\sum_{r=0}^{10} a_r\\, y^{r}.$$

Note $1 + x + x^2 = (1-x)^2 + 3x$, so

$$\\frac{(1+x+x^2)^{10}}{(1-x)^{20}} = \\left(1 + \\frac{3x}{(1-x)^2}\\right)^{10} = (1 + 3y)^{10}.$$

Therefore $a_r = \\dbinom{10}{r}3^{r}$. In particular:

$$a_9 = \\binom{10}{9}3^{9} = 10\\cdot 3^{9}, \\qquad a_{10} = \\binom{10}{10}3^{10} = 3^{10}.$$

$$\\frac{9a_9}{a_{10}} = \\frac{9\\cdot 10\\cdot 3^{9}}{3^{10}} = \\frac{90}{3} = 30.$$

**Answer:** 30`,statement:"If $(1-x^3)^{10}=\\displaystyle\\sum_{r=0}^{10}a_r x^r(1-x)^{30-2r}$, then $\\dfrac{9a_9}{a_{10}}$ is equal to __________.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"18",id:"6911211223",options:[],solution:`$PQ=PR$ means $P$ lies on the perpendicular bisector of chord $QR$, which passes through the centre $(4,-3)$ perpendicular to $x-y=4$:
$$y+3=-(x-4)\\Rightarrow x+y=1.$$
$P$ is on $C$ and on $x+y=1$: put $y=1-x$ in $C$:
$$(x-4)^2+(4-x)^2=9\\Rightarrow (x-4)^2=\\tfrac92\\Rightarrow x=4\\pm\\tfrac{3}{\\sqrt2}.$$
Then $6\\alpha+8\\beta=6\\alpha+8(1-\\alpha)=8-2\\alpha=8-2\\left(4\\pm\\tfrac{3}{\\sqrt2}\\right)=\\mp\\dfrac{6}{\\sqrt2}$, so
$$(6\\alpha+8\\beta)^2=\\frac{36}{2}=18.$$

**Answer:** 18`,statement:"Let the line $x-y=4$ intersect the circle $C:(x-4)^2+(y+3)^2=9$ at the points $Q$ and $R$. If $P(\\alpha,\\beta)$ is a point on $C$ such that $PQ=PR$, then $(6\\alpha+8\\beta)^2$ is equal to __________.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"162",id:"6911211224",options:[],solution:`**Image $R$ of $P(0,-5,0)$** in line through $(1,0,-1)$, direction $(2,1,-2)$: the foot gives $R = 2F - P = (-2,\\ 3,\\ 2)$.

**Image $S$ of $Q\\left(0,-\\tfrac12,0\\right)$** in line through $(1,-9,-1)$, direction $(-1,4,1)$: $S = 2F - Q = \\left(-2,\\ -\\tfrac{3}{2},\\ 2\\right)$.

Check $PQRS$ is a parallelogram: $\\vec{Q}-\\vec{P} = (0,\\tfrac92,0) = \\vec{R}-\\vec{S}$. ✓

Area via diagonals $\\vec{PR}$ and $\\vec{QS}$:

$$\\vec{PR} = (-2,\\ 8,\\ 2),\\quad \\vec{QS} = (-2,\\ -1,\\ 2)$$

$$\\vec{PR}\\times\\vec{QS} = (18,\\ 0,\\ 18),\\qquad \\text{Area} = \\tfrac12|{\\vec{PR}\\times\\vec{QS}}| = \\tfrac12\\cdot 18\\sqrt2 = 9\\sqrt2$$

$$\\text{Area}^2 = 162$$

**Answer:** 162`,statement:"Let the image of the point $P(0,-5,0)$ in the line $\\dfrac{x-1}{2}=\\dfrac{y}{1}=\\dfrac{z+1}{-2}$ be the point $R$ and the image of the point $Q\\left(0,\\dfrac{-1}{2},0\\right)$ in the line $\\dfrac{x-1}{-1}=\\dfrac{y+9}{4}=\\dfrac{z+1}{1}$ be the point $S$. Then the square of the area of the parallelogram $PQRS$ is __________.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"3",id:"6911211225",options:[],solution:`Discontinuities of $g(f(x))$ arise where $f$ jumps, or where a continuous $f$ crosses $0$ (the switch/discontinuity input of $g$, since $\\displaystyle\\lim_{u\\to 0^-}(u-8)^{1/3} = -2 \\ne 2 = \\lim_{u\\to 0^+}(u+4)^{1/2}$).

**$x = 0$ ($f$ jumps).** $f(0^-) = 8 \\Rightarrow g = \\sqrt{12}$; $\\ f(0^+) = -4 \\Rightarrow g = (-12)^{1/3} = -\\sqrt[3]{12}$. Left and right limits differ $\\Rightarrow$ discontinuous.

**$f(x) = 0$ with $f$ continuous.**
- $x<0$: $x^3 + 8 = 0 \\Rightarrow x = -2$. As $x$ passes $-2$, $f$ crosses $0$, so $g\\circ f$ jumps between $-2$ and $2 \\Rightarrow$ discontinuous.
- $x\\ge 0$: $x^2 - 4 = 0 \\Rightarrow x = 2$. Again $f$ crosses $0$, so $g\\circ f$ jumps between $-2$ and $2 \\Rightarrow$ discontinuous.

Discontinuity points: $x = -2,\\ 0,\\ 2$ — a total of $3$.

**Answer:** 3`,statement:"Let $f(x)=\\begin{cases}x^3+8;&x<0\\\\x^2-4;&x\\ge 0\\end{cases}$ and $g(x)=\\begin{cases}(x-8)^{1/3};&x<0\\\\(x+4)^{1/2};&x\\ge 0\\end{cases}$. Then the number of points, where the function $g\\circ f$ is discontinuous, is __________.",subject:"Mathematics",type:"integer"},{correct_index:2,correct_value:"$6$",id:"6911211226",options:["$1$","$2$","$6$","$8$"],solution:`The volume of a sphere in terms of diameter $d$:

$$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi \\left(\\frac{d}{2}\\right)^3 = \\frac{\\pi}{6} d^3 \\quad\\Rightarrow\\quad V \\propto d^3$$

The fractional error propagates with the power:

$$\\frac{\\Delta V}{V} = 3\\,\\frac{\\Delta d}{d}$$

$$\\frac{\\Delta V}{V}\\times 100 = 3 \\times 2\\% = 6\\%$$

**Answer:** C ($6$)`,statement:"The percentage error in the calculated volume of a sphere, if there is 2% error in its diameter measurement, is __________.",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"A-III, B-IV, C-II, D-I",id:"6911211227",options:["A-I, B-II, C-III, D-IV","A-IV, B-III, C-II, D-I","A-III, B-IV, C-II, D-I","A-II, B-I, C-IV, D-III"],solution:`Determine each dimensional formula:

**A. Boltzmann constant** — from $E = k_B T$: $[k_B] = \\dfrac{[M L^2 T^{-2}]}{[K]} = [M L^2 T^{-2} K^{-1}]$ → **III**

**B. Stefan's constant** — from $\\dfrac{P}{A} = \\sigma T^4$: $[\\sigma] = \\dfrac{[M T^{-3}]}{[K^4]} = [M L^0 T^{-3} K^{-4}]$ → **IV**

**C. Planck's constant** — from $E = h\\nu$: $[h] = \\dfrac{[M L^2 T^{-2}]}{[T^{-1}]} = [M L^2 T^{-1}]$ → **II**

**D. Gravitational constant** — from $F = \\dfrac{G m_1 m_2}{r^2}$: $[G] = \\dfrac{[M L T^{-2}][L^2]}{[M^2]} = [M^{-1} L^3 T^{-2}]$ → **I**

So the mapping is A-III, B-IV, C-II, D-I.

**Answer:** C (A-III, B-IV, C-II, D-I)`,statement:`Match List - I with List - II.
List - I: A. Boltzmann constant; B. Stefan's constant; C. Planck's constant; D. Gravitational constant.
List - II: I. $[M^{-1}L^3T^{-2}]$; II. $[ML^2T^{-1}]$; III. $[ML^2T^{-2}K^{-1}]$; IV. $[ML^0T^{-3}K^{-4}]$.
Choose the correct answer from the options given below:`,subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$5:21$",id:"6911211228",options:["$5:21$","$6:10$","$21:25$","$1:5$"],solution:`Let the body have mass $M$, radius $R$, and moment of inertia $I = kMR^2$. The force $F$ acts at the top; let $f$ be friction at the contact point.

**Translation:** $F + f = Ma$

**Rotation about centre** (both $F$ and $f$ produce torque about the centre):
$$FR - fR = I\\alpha = kMR^2\\cdot\\frac{a}{R} \\implies F - f = kMa$$

Adding the two equations:
$$2F = Ma(1+k) \\implies a = \\frac{2F}{M(1+k)}$$

**Solid sphere $A$** ($M = 5m$, $k = \\tfrac{2}{5}$):
$$a_A = \\frac{2F}{5m\\left(1+\\tfrac{2}{5}\\right)} = \\frac{2F}{5m\\cdot\\tfrac{7}{5}} = \\frac{2F}{7m}$$

**Spherical shell $B$** ($M = m$, $k = \\tfrac{2}{3}$):
$$a_B = \\frac{2F}{m\\left(1+\\tfrac{2}{3}\\right)} = \\frac{2F}{m\\cdot\\tfrac{5}{3}} = \\frac{6F}{5m}$$

**Ratio:**
$$\\frac{a_A}{a_B} = \\frac{2/7}{6/5} = \\frac{2}{7}\\cdot\\frac{5}{6} = \\frac{10}{42} = \\frac{5}{21}$$

**Answer:** A ($5:21$)`,statement:"A solid sphere $(A)$ of mass $5m$ and a spherical shell $(B)$ of mass $m$, both having same radius, are placed on a rough surface. When a force of same magnitude is applied tangentially at the highest points of $A$ and $B$, they start rolling without slipping with an acceleration of $a_A$ and $a_B$, respectively. The ratio of $a_A$ and $a_B$ is __________.",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$1250$",id:"6911211229",options:["$0$","$250$","$1250$","$1000$"],solution:`By the **work-energy theorem**, work done equals the change in kinetic energy:
$$W = \\tfrac{1}{2}m\\left(v_f^2 - v_i^2\\right)$$

**Velocities** from $v = 2x^2$:
- At $x = 0$: $v_i = 2(0)^2 = 0$
- At $x = 5$: $v_f = 2(5)^2 = 50\\ \\text{m/s}$

**Work done:**
$$W = \\tfrac{1}{2}(1)\\left(50^2 - 0^2\\right) = \\tfrac{1}{2}(2500) = 1250\\ \\text{J}$$

**Answer:** C ($1250$)`,statement:"A body of mass 1 kg moves along a straight line with a velocity $v=2x^2$. The work done by the body during displacement from $x=0$ to $x=5$ m is __________ J.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$4$",id:"6911211230",options:["$3$","$4$","$14$","$9$"],solution:`The piston is frictionless, so pressure equalises across it; the common final pressure is $P_f = \\dfrac{27P}{8}$.

The **right compartment** is compressed **adiabatically** (its walls and the piston are adiabatic), so $PV^{\\gamma}$ is conserved with $\\gamma = 1.5$:
$$P\\,V_i^{\\gamma} = P_f\\,V_f^{\\gamma} \\implies V_f = V_i\\left(\\frac{P}{P_f}\\right)^{1/\\gamma}$$
$$V_f = 9\\left(\\frac{P}{27P/8}\\right)^{1/1.5} = 9\\left(\\frac{8}{27}\\right)^{2/3} = 9 \\times \\frac{4}{9} = 4\\ \\text{litres}$$

since $\\left(\\dfrac{8}{27}\\right)^{2/3} = \\dfrac{8^{2/3}}{27^{2/3}} = \\dfrac{4}{9}$.

**Answer:** B ($4$)`,statement:"A cylinder with adiabatic walls is closed at both ends and is divided into two compartments by a frictionless adiabatic piston. Ideal gas is filled in both (left and right) the compartments at same $P,V,T$. Heating is started from left side until pressure changes to $\\dfrac{27P}{8}$. If initial volume of each compartment was 9 litres then the final volume in right-hand side compartment is __________ litres. (for this ideal gas $C_P/C_V=1.5$)",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$\\dfrac{\\vec{k}\\times\\vec{E}}{\\omega}$",id:"6911211231",options:["$\\dfrac{\\vec{E}\\times\\vec{k}}{\\omega}$","$\\dfrac{\\vec{k}\\times\\vec{E}}{\\omega}$","$\\omega\\left(\\vec{E}\\times\\vec{k}\\right)$","$\\omega\\left(\\vec{k}\\times\\vec{E}\\right)$"],solution:`For a plane EM wave, the magnetic field is obtained from $\\vec{B} = \\dfrac{\\hat{k}\\times\\vec{E}}{c}$, where $\\hat{k}$ is the unit propagation vector.

Since $\\hat{k} = \\dfrac{\\vec{k}}{k}$ and $c = \\dfrac{\\omega}{k}$:

$$\\vec{B} = \\frac{1}{c}\\left(\\frac{\\vec{k}}{k}\\right)\\times\\vec{E} = \\frac{k}{\\omega}\\cdot\\frac{1}{k}\\,(\\vec{k}\\times\\vec{E}) = \\frac{\\vec{k}\\times\\vec{E}}{\\omega}$$

This correctly gives $\\vec{B}$ perpendicular to both $\\vec{k}$ and $\\vec{E}$, with $\\hat{E}\\times\\hat{B}$ pointing along $\\vec{k}$.

**Answer:** $\\dfrac{\\vec{k}\\times\\vec{E}}{\\omega}$`,statement:"For an electromagnetic wave propagating through vacuum, $\\vec{k}$, $\\vec{E}$ and $\\omega$ represent propagation vector, electric field and angular frequency, respectively. The magnetic field associated with this wave is represented by:",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"straight line",id:"6911211232",options:["circular","parabolic","straight line","elliptical"],solution:`For equal masses, the centre of mass has

**Initial velocity:**
$$\\vec{v}_{cm} = \\frac{\\vec{v_1} + \\vec{v_2}}{2} = \\frac{4\\hat{i} + 4\\hat{j}}{2} = 2\\hat{i} + 2\\hat{j}$$

**Acceleration:**
$$\\vec{a}_{cm} = \\frac{\\vec{a_1} + \\vec{a_2}}{2} = \\frac{6\\hat{i} + 6\\hat{j}}{2} = 3\\hat{i} + 3\\hat{j}$$

Both $\\vec{v}_{cm}$ and $\\vec{a}_{cm}$ point along the same direction $(\\hat{i}+\\hat{j})$. When initial velocity and constant acceleration are parallel, the motion is one-dimensional along that line.

**Answer:** C (straight line)`,statement:"Two identical bodies A and B of equal masses have initial velocities $\\vec{v_1}=4\\hat{i}$ m/s and $\\vec{v_2}=4\\hat{j}$ m/s respectively. The body A has acceleration $\\vec{a_1}=6\\hat{i}+6\\hat{j}$ m/s$^2$ while the acceleration of the other body B is zero. The centre of mass of the two bodies moves in __________ path.",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$1.0\\times10^{10}$",id:"6911211233",options:["$1.0\\times10^{11}$","$2.0\\times10^{10}$","$1.0\\times10^{10}$","$2.0\\times10^{11}$"],solution:"",statement:"Figure represents the extension $(\\Delta l)$ of a wire of length 1 meter, suspended from the ceiling of the room at one end with a load $W$ connected to the other end. If the cross-sectional area of the wire is $10^{-5}$ m$^2$ then the Young's modulus of the wire is __________ N/m$^2$. [figure: straight-line graph of $\\Delta l$ ($\\times 10^{-4}$ m, axis from 1 to 6) versus $W$ (N, axis marked 10,20,30,40,50,60) passing through origin; at $W=60$ N, $\\Delta l=6\\times10^{-4}$ m]",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$140\\sqrt{2}$",id:"6911211234",options:["$120\\sqrt{2}$","$140\\sqrt{2}$","$140\\sqrt{3}$","$120\\sqrt{3}$"],solution:`**Vessel height** from $V = \\pi r^2 H$, with $V = 528\\ \\text{dm}^3 = 0.528\\ \\text{m}^3$, $r = 0.40\\ \\text{m}$ (using $\\pi = 22/7$):
$$H = \\frac{V}{\\pi r^2} = \\frac{0.528}{\\frac{22}{7}(0.16)} = 1.05\\ \\text{m}$$

**Efflux speed** (Torricelli), with depth of hole below water surface $h = 0.70\\ \\text{m}$:
$$v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 0.70} = \\sqrt{14}\\ \\text{m/s}$$

**Fall height:** the hole is $H - 0.70$ above the vessel base, and the vessel sits on a block of height $H$, so the hole is at:
$$y = (H - 0.70) + H = 2(1.05) - 0.70 = 1.40\\ \\text{m above the ground}$$

Time of flight: $t = \\sqrt{\\dfrac{2y}{g}} = \\sqrt{\\dfrac{2 \\times 1.40}{10}} = \\sqrt{0.28}\\ \\text{s}$

**Range:**
$$R = v\\,t = \\sqrt{14}\\times\\sqrt{0.28} = \\sqrt{3.92} = 1.98\\ \\text{m} \\approx 140\\sqrt{2}\\ \\text{cm}$$

**Answer:** B ($140\\sqrt{2}$)`,statement:"A cylindrical vessel of 40 cm radius is completely filled with water and its capacity is 528 dm$^3$ (dm: decimeter). The vessel is placed on a solid block of exactly same height as vessel. If a small hole is made at 70 cm below the top of water level, then horizontal range of water falling on the ground in the beginning is __________ cm.",subject:"Physics",type:"mcq"},{correct_index:3,correct_value:"$\\dfrac{7}{4}T$",id:"6911211235",options:["$\\dfrac{5}{2}T$","$\\dfrac{5}{4}T$","$\\dfrac{7}{2}T$","$\\dfrac{7}{4}T$"],solution:`When the two gases are mixed without any external work or heat exchange, the total internal energy is conserved. For an ideal monoatomic gas $U = \\dfrac{3}{2} n R T$, so:

$$U_1 + U_2 = U_{\\text{mix}}$$

$$\\frac{3}{2} n_1 R T_1 + \\frac{3}{2} n_2 R T_2 = \\frac{3}{2}(n_1 + n_2) R T_{\\text{mix}}$$

Cancelling $\\dfrac{3}{2}R$ throughout:

$$n_1 T_1 + n_2 T_2 = (n_1 + n_2) T_{\\text{mix}}$$

Substitute $n_1 = 2,\\ T_1 = T,\\ n_2 = 6,\\ T_2 = 2T$:

$$(2)(T) + (6)(2T) = (2 + 6)\\, T_{\\text{mix}}$$

$$2T + 12T = 8\\, T_{\\text{mix}} \\quad\\Rightarrow\\quad 14T = 8\\, T_{\\text{mix}}$$

$$T_{\\text{mix}} = \\frac{14T}{8} = \\frac{7}{4}T$$

**Answer:** D ($\\dfrac{7}{4}T$)`,statement:"If 2 mole of an ideal monoatomic gas at temperature $T$, is mixed with 6 mole of another ideal monoatomic gas at temperature $2T$ then the temperature of mixture is:",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$\\dfrac{5\\sqrt{50}}{\\pi}$ and $8\\times10^{-3}$",id:"6911211236",options:["$\\dfrac{5\\sqrt{50}}{\\pi}$ and $8\\times10^{-3}$","$\\dfrac{5\\sqrt{50}}{\\pi}$ and $8$","$10\\sqrt{50}$ and $2\\times10^{-3}$","$\\dfrac{5\\sqrt{50}}{\\pi}$ and $16\\times10^{-3}$"],solution:`**Spring constant** from the static stretch $x_0 = 2\\ \\text{mm} = 2\\times10^{-3}$ m, $m = 0.2$ kg:

$$k = \\frac{mg}{x_0} = \\frac{0.2 \\times 10}{2\\times10^{-3}} = 1000\\ \\text{N/m}$$

**Frequency:**

$$f = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} = \\frac{1}{2\\pi}\\sqrt{\\frac{1000}{0.2}} = \\frac{1}{2\\pi}\\sqrt{5000} = \\frac{50\\sqrt{2}}{2\\pi} = \\frac{25\\sqrt{2}}{\\pi} = \\frac{5\\sqrt{50}}{\\pi}\\ \\text{Hz}$$

**Maximum energy in the spring** occurs at maximum extension, which is the static stretch plus the amplitude:

$$x_{\\max} = 2\\ \\text{mm} + 2\\ \\text{mm} = 4\\ \\text{mm} = 4\\times10^{-3}\\ \\text{m}$$

$$E_{\\max} = \\frac{1}{2}k\\,x_{\\max}^2 = \\frac{1}{2}(1000)\\left(4\\times10^{-3}\\right)^2 = 500 \\times 16\\times10^{-6} = 8\\times10^{-3}\\ \\text{J}$$

**Answer:** $\\dfrac{5\\sqrt{50}}{\\pi}$ and $8\\times10^{-3}$`,statement:"A spring stretches by 2 mm when it is loaded with a mass of 200 g. From equilibrium position the mass is further pulled down by 2 mm and released. The frequency associated with the system and maximum energy in the spring are __________ Hz and __________ J, respectively. (Take $g=10$ m/s$^2$)",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$\\left(-20\\hat{i}+30\\hat{j}\\right)$",id:"6911211237",options:["$\\left(-20\\hat{i}+30\\hat{j}\\right)$","$\\left(20\\hat{i}-30\\hat{j}\\right)$","$\\left(20\\hat{i}+45\\hat{j}\\right)$","$\\left(-4\\hat{i}+6\\hat{j}\\right)$"],solution:`The electric field is the negative gradient of potential:

$$\\vec{E} = -\\nabla V = -\\frac{\\partial V}{\\partial x}\\hat{i} - \\frac{\\partial V}{\\partial y}\\hat{j}$$

With $V = 5(x^2 - y^2)$:

$$\\frac{\\partial V}{\\partial x} = 10x, \\qquad \\frac{\\partial V}{\\partial y} = -10y$$

So:

$$\\vec{E} = -10x\\,\\hat{i} + 10y\\,\\hat{j}$$

At $(2, 3)$:

$$\\vec{E} = -10(2)\\hat{i} + 10(3)\\hat{j} = -20\\hat{i} + 30\\hat{j}\\ \\text{V/m}$$

**Answer:** A ($-20\\hat{i}+30\\hat{j}$)`,statement:"The electric potential as a function of $x,y$ is given by $V=5(x^2-y^2)$ V. The electric field at a point $(2,3)$ m is __________ V/m.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$150$",id:"6911211238",options:["$300$","$150$","$0.0$","$30$"],solution:`The midpoint is at distance $r = 4$ cm $= 0.04$ m from each wire. Field due to one long straight wire:

$$B = \\frac{\\mu_0}{4\\pi}\\cdot\\frac{2I}{r} = 10^{-7}\\times\\frac{2\\times 30}{0.04} = 10^{-7}\\times 1500 = 1.5\\times10^{-4}\\ \\text{T}$$

The currents are antiparallel, so at the midpoint both fields point the same way and add:

$$B_{\\text{net}} = 2B = 3\\times10^{-4}\\ \\text{T} = 300\\ \\mu\\text{T}$$

**Answer:** A ($300$)`,statement:"A current of 30 A each flows in opposite directions in two conducting wires, placed parallel to each other at a distance of 8 cm. The magnetic field at the mid point between the two wires is __________ $\\mu$T. $\\left(\\dfrac{\\mu_0}{4\\pi}=10^{-7}\\text{ N/A}^2\\right)$",subject:"Physics",type:"mcq"},{correct_index:3,correct_value:"$24$",id:"6911211239",options:["$12$","$18$","$21$","$24$"],solution:`Flux through the loop:

$$\\Phi = B A \\cos\\theta = 0.4\\sin(300t)\\cdot A \\cos60^\\circ$$

Induced emf:

$$\\varepsilon = -\\frac{d\\Phi}{dt} = -0.4\\cdot 300\\cos(300t)\\cdot A\\cos60^\\circ$$

Maximum value ($|\\cos(300t)|=1$), with $A=(0.02)^2 = 4\\times10^{-4}\\ \\text{m}^2$ and $\\cos60^\\circ = 0.5$:

$$\\varepsilon_{max} = 0.4\\times 300\\times 4\\times10^{-4}\\times 0.5 = 0.024\\ \\text{V} = 24\\ \\text{mV}$$

**Answer:** 24`,statement:"A square loop of side 2 cm is placed in a time varying magnetic field with magnitude as $B=0.4\\sin(300t)$ Tesla. The normal to the plane of loop makes an angle of $60^\\circ$ with the field. The maximum induced emf produced in the loop is __________ mV.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$\\dfrac{5}{2}$",id:"6911211240",options:["$5$","$\\dfrac{5}{2}$","$\\dfrac{7}{2}$","$\\dfrac{9}{2}$"],solution:`**Initial energy** ($C = 100$ pF, $V = 100$ V):

$$U_i = \\frac{1}{2}CV^2 = \\frac{1}{2}(100\\times10^{-12})(100)^2 = 5\\times10^{-7}\\ \\text{J}$$

Charge is conserved: $Q = CV = 10^{-8}$ C. On contact the combined capacitance is $200$ pF, so the common potential becomes:

$$V' = \\frac{Q}{C'} = \\frac{10^{-8}}{200\\times10^{-12}} = 50\\ \\text{V}$$

**Final energy:**

$$U_f = \\frac{1}{2}C'V'^2 = \\frac{1}{2}(200\\times10^{-12})(50)^2 = 2.5\\times10^{-7}\\ \\text{J}$$

**Change in energy:**

$$|\\Delta U| = U_i - U_f = (5 - 2.5)\\times10^{-7} = 2.5\\times10^{-7}\\ \\text{J}$$

So $\\alpha = \\dfrac{5}{2}$ (energy decreases by this amount).

**Answer:** B ($\\tfrac{5}{2}$)`,statement:"A sphere of capacitance 100 pF is charged to a potential of 100 V. Another identical uncharged metal sphere is brought in contact with the charged sphere, then the change in the total energy stored on these spheres, when they touch is $\\alpha\\times10^{-7}$ J. The value of $\\alpha$ is __________. (combined capacitance of spheres is 200 pF)",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$24.4$",id:"6911211241",options:["$6.1$","$24.4$","$26.6$","$5$"],solution:`The given binding energy per nucleon for $^2_1\\text{H}$ (deuterium) tells us the fusion is:
$$2\\,{}^2_1\\text{H} \\rightarrow {}^4_2\\text{He}$$

**Step 1 — Binding energy of reactants** (two deuterons, 2 nucleons each):
$$BE_{\\text{react}} = 2 \\times (2 \\times 1.1) = 4.4\\ \\text{MeV}$$

**Step 2 — Binding energy of product** ($^4_2\\text{He}$, 4 nucleons):
$$BE_{\\text{prod}} = 4 \\times 7.2 = 28.8\\ \\text{MeV}$$

**Step 3 — Energy released:**
$$Q = BE_{\\text{prod}} - BE_{\\text{react}} = 28.8 - 4.4 = 24.4\\ \\text{MeV}$$

**Answer:** B`,statement:"The energy released if hydrogen atoms are combined to form $^4_2\\text{He}$ is __________ MeV. (Take binding energies per nucleon of $^2_1\\text{H}$ and $^4_2\\text{He}$ as 1.1 MeV and 7.2 MeV, respectively)",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$\\sqrt{2}$",id:"6911211242",options:["$1.5$","$\\sqrt{3}$","$\\sqrt{2}$","$1.65$"],solution:`For an equilateral prism, $A = 60^\\circ$ and given $\\delta_m = \\dfrac{A}{2} = 30^\\circ$.

Prism formula:
$$\\mu = \\frac{\\sin\\!\\left(\\dfrac{A + \\delta_m}{2}\\right)}{\\sin\\!\\left(\\dfrac{A}{2}\\right)} = \\frac{\\sin\\!\\left(\\dfrac{60^\\circ + 30^\\circ}{2}\\right)}{\\sin 30^\\circ} = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ}.$$

$$\\mu = \\frac{1/\\sqrt2}{1/2} = \\frac{2}{\\sqrt2} = \\sqrt2 \\approx 1.414.$$

**Answer:** C ($\\sqrt{2}$)`,statement:"Angle of minimum deviation is equal to the half of the angle of prism in an equilateral prism. The refractive index of the prism is __________.",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"0, 0 respectively",id:"6911211243",options:["1, 0 respectively","0, 1 respectively","0, 0 respectively","1, 1 respectively"],solution:"",statement:"Refer to the logic circuit given below. For two inputs $(A=1,B=1)$ and $(A=0,B=1)$, output $(Y)$ will be __________. [figure: A is passed through a NOT gate, then its output and B feed an OR gate; A and B also feed an AND gate; outputs of the OR gate and AND gate feed a NOR gate whose output is Y]",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$7.74$",id:"6911211244",options:["$7.74$","$7.20$","$6.55$","$4.50$"],solution:"",statement:"The velocity at which 6 kg mass (shown in figure) strikes the ground when it is released from a height of 6 m above the ground is __________ m/s. Assume pulley is massless and string is light and inextensible. (Take $g=10$ m/s$^2$) [figure: a massless pulley fixed to ceiling, with a 6 kg block on one side hanging 6 m above the ground and a 2 kg block on the other side resting on the ground, connected by a light string]",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$4000$",id:"6911211245",options:["$4000$","$3000$","$2000$","$1000$"],solution:"",statement:"In a Young double slit experiment, the wavelength of incident light is 6000 Å, the separation between slits $S_1$ and $S_2$ is 5 cm and the distance between slits plane and screen is 50 cm, as shown in the figure below. If the resultant intensity at $P$ is equal to the intensity due to individual slits, the path difference between interfering waves is __________ Å. [figure: source $S$ with $\\lambda=6000$ Å illuminates two slits $S_1$ and $S_2$; distance from slits plane to screen is 50 cm; $O'$ is the central point and $P$ is a point on the screen below $O'$]",subject:"Physics",type:"mcq"},{correct_index:null,correct_value:"75",id:"6911211246",options:[],solution:`Same slope length $L$ from rest, so $t \\propto \\dfrac{1}{\\sqrt{a}}$.

**Accelerations** ($\\theta = 45^\\circ$):
$$a_{\\text{rough}} = g\\sin\\theta - \\mu g\\cos\\theta, \\qquad a_{\\text{smooth}} = g\\sin\\theta$$

**Time ratio** ($t_{\\text{smooth}} = t/2$, so rough time is twice the smooth time):
$$\\frac{t_{\\text{rough}}}{t_{\\text{smooth}}} = \\sqrt{\\frac{a_{\\text{smooth}}}{a_{\\text{rough}}}} = 2 \\implies \\frac{a_{\\text{smooth}}}{a_{\\text{rough}}} = 4$$

**Solve for $\\mu$** (with $\\tan 45^\\circ = 1$):
$$\\frac{1}{1-\\mu} = 4 \\implies 1 - \\mu = \\frac{1}{4} \\implies \\mu = \\frac{3}{4} = 0.75 = \\frac{75}{100}$$

Hence $\\alpha = 75$.

**Answer:** 75`,statement:"A block takes $t$ time to slide down a plane inclined at $45^\\circ$ to the horizontal. If the surface is made smooth (frictionless), the block takes time $\\dfrac{t}{2}$ to slide down the plane. The coefficient of friction between the block and the inclined plane is $\\left(\\dfrac{\\alpha}{100}\\right)$. The value of $\\alpha$ is __________.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"4",id:"6911211247",options:[],solution:`For an electron accelerated through $V$:
$$\\lambda = \\frac{h}{\\sqrt{2meV}} \\implies \\lambda \\propto \\frac{1}{\\sqrt{V}}$$

A 50% increase means $\\lambda_2 = 1.5\\,\\lambda_1$:
$$\\frac{\\lambda_2}{\\lambda_1} = \\sqrt{\\frac{V_1}{V_2}} = 1.5$$

Square both sides:
$$\\frac{V_1}{V_2} = (1.5)^2 = 2.25 = \\frac{9}{4}$$

Comparing with $\\dfrac{V_1}{V_2} = \\dfrac{9}{\\alpha}$ gives $\\alpha = 4$.

**Answer:** 4`,statement:"The de Broglie wavelength for an electron accelerated through the potential difference of $V_1$ volt is $\\lambda_1$. When the potential difference is changed to $V_2$ volt, the associated de Broglie wavelength is increased by 50%. If $(V_1/V_2)=(9/\\alpha)$, then the value of $\\alpha$ is __________.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"50",id:"6911211248",options:[],solution:`Let the coil resistance be $G$ and the full-scale (galvanometer) current be $I_g$; $I_g$ is the same in both experiments.

**Series case** ($470\\ \\Omega$ in series, $10\\ \\text{V}$ full scale):
$$I_g = \\frac{10}{G + 470} \\quad\\text{(1)}$$

**Shunt case** ($S = 2\\ \\Omega$ across the coil, total current $I = 0.5\\ \\text{A}$):
The shunt carries $(I - I_g)$ and the voltage across both is equal:
$$I_g\\,G = (I - I_g)\\,S \\implies I_g\\,G = (0.5 - I_g)(2)$$
$$I_g\\,G = 1 - 2 I_g \\implies I_g(G + 2) = 1 \\implies I_g = \\frac{1}{G + 2} \\quad\\text{(2)}$$

**Equate (1) and (2):**
$$\\frac{10}{G + 470} = \\frac{1}{G + 2}$$
$$10(G + 2) = G + 470 \\implies 10G + 20 = G + 470$$
$$9G = 450 \\implies G = 50\\ \\Omega$$

(Check: $I_g = \\tfrac{1}{52} \\approx 19.2\\ \\text{mA}$ from both equations.)

**Answer:** 50`,statement:"A moving coil of galvanometer when shunted with 2 $\\Omega$ resistance gives a full scale deflection for a current of 500 mA. When a resistance of 470 $\\Omega$ is connected in series it gives a full scale deflection for 10 V potential applied on it. The value of resistance of galvanometer coil is __________ $\\Omega$.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"3",id:"6911211249",options:[],solution:`For two cells in parallel, use the equivalent-cell (Thevenin) method.

**Equivalent EMF and internal resistance (both cells aiding):**
$$E_{eq} = \\frac{\\dfrac{E_1}{r_1} + \\dfrac{E_2}{r_2}}{\\dfrac{1}{r_1} + \\dfrac{1}{r_2}} = \\frac{\\dfrac{1}{2} + \\dfrac{2}{1}}{\\dfrac{1}{2} + 1} = \\frac{2.5}{1.5} = \\frac{5}{3}\\ \\text{V}$$
$$r_{eq} = \\frac{r_1 r_2}{r_1 + r_2} = \\frac{2 \\times 1}{3} = \\frac{2}{3}\\ \\Omega$$

**Find $R$ from the given $1\\ \\text{A}$:**
$$I = \\frac{E_{eq}}{r_{eq} + R} = 1 \\implies r_{eq} + R = E_{eq} = \\frac{5}{3} \\implies R = \\frac{5}{3} - \\frac{2}{3} = 1\\ \\Omega$$

**Reverse one cell's polarity** (say the $1\\ \\text{V}$ cell $\\to -1\\ \\text{V}$); $r_{eq}$ is unchanged:
$$E_{eq}' = \\frac{-\\dfrac{1}{2} + \\dfrac{2}{1}}{1.5} = \\frac{1.5}{1.5} = 1\\ \\text{V}$$

**New current:**
$$I' = \\frac{E_{eq}'}{r_{eq} + R} = \\frac{1}{\\tfrac{2}{3} + 1} = \\frac{1}{\\tfrac{5}{3}} = \\frac{3}{5}\\ \\text{A}$$

So $\\dfrac{\\alpha}{5} = \\dfrac{3}{5} \\implies \\alpha = 3$. (Reversing the other cell gives the same magnitude.)

**Answer:** 3`,statement:"Two cells of emfs 1 V and 2 V and internal resistance 2 $\\Omega$ and 1 $\\Omega$, respectively connected in parallel, gave a current of 1 A through an external resistance. If the polarity of one cell is reversed, then value of current through the external resistance will be $\\dfrac{\\alpha}{5}$ A. The value of $\\alpha$ is __________.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"10",id:"6911211250",options:[],solution:`A concave mirror can give a magnified image of magnitude $2$ in two ways: a real inverted image ($m = -2$) and a virtual erect image ($m = +2$).

Using $m = \\dfrac{f}{f - u}$ (with $f = -10\\ \\text{cm}$, distances measured with sign):

**Real image** $m = -2$: $\\;-2 = \\dfrac{-10}{-10 - u} \\Rightarrow -10 - u = 5 \\Rightarrow u = -15\\ \\text{cm}$ (object at 15 cm).

**Virtual image** $m = +2$: $\\;+2 = \\dfrac{-10}{-10 - u} \\Rightarrow -10 - u = -5 \\Rightarrow u = -5\\ \\text{cm}$ (object at 5 cm).

Distance between the two object positions:
$$|{-15}| - |{-5}| = 15 - 5 = 10\\ \\text{cm}.$$

**Answer:** 10`,statement:"A concave mirror of focal length 10 cm forms an image which is double the size of object when the object is placed at two different positions. The distance between the two positions of the object is __________ cm.",subject:"Physics",type:"integer"},{correct_index:3,correct_value:"A, C and E only",id:"6911211251",options:["A and B only","B and C only","C and D only","A, C and E only"],solution:`Total atoms (in mol) $=$ moles $\\times$ atoms per molecule, with $V_m = 22.4\\ \\text{L mol}^{-1}$.

$$\\text{A: } \\frac{2}{32}\\times 2 = 0.0625 \\times 2 = 0.125$$

$$\\text{B: } \\frac{4}{64}\\times 3 = 0.0625 \\times 3 = 0.1875$$

$$\\text{C: } \\frac{1.4}{22.4}\\times 2 = 0.0625 \\times 2 = 0.125$$

$$\\text{D: } \\frac{0.05}{22.4}\\times 1 = 0.00223$$

$$\\text{E: } 0.0625 \\times 2 = 0.125$$

A, C and E each give $0.125$ mol of atoms — the same number.

**Answer:** D`,statement:`Which of the following contain the same number of atoms? (Given: Molar mass in g mol$^{-1}$ of H, He, O and S are 1, 4, 16 and 32 respectively)
A. 2 g of O$_2$ gas
B. 4 g of SO$_2$ gas
C. 1400 mL of O$_2$ at STP
D. 0.05 L of He at STP
E. 0.0625 mol of H$_2$ gas
Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"Li$^{2+}$, 2",id:"6911211252",options:["Li$^{2+}$, 3","He$^+$, 3","He$^+$, 2","Li$^{2+}$, 2"],solution:`Bohr radius: $r_n = 52.9\\,\\dfrac{n^2}{Z}$ pm. Set equal to $70.53$ pm and test the options.

$$\\dfrac{n^2}{Z} = \\dfrac{70.53}{52.9} = 1.333 = \\dfrac{4}{3}$$

This is satisfied by $n^2 = 4,\\ Z = 3$, i.e. $n = 2$ and $Z = 3$ ($\\text{Li}^{2+}$):
$$r = 52.9\\times\\dfrac{2^2}{3} = 52.9\\times\\dfrac{4}{3} = 70.53\\ \\text{pm}\\ \\checkmark$$

**Answer:** D`,statement:"The Bohr radius of a hydrogen like species is 70.53 pm. The species and the stationary state (n) are respectively (Given: Hydrogen atom Bohr radius is 52.9 pm)",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"Statement I is false but Statement II is true",id:"6911211253",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:`**Statement I** — electrons around S:

- $SO_2$: expanded octet ($10\\,e^-$) — does not obey.
- $SO_3$: $12\\,e^-$ — does not obey.
- $SF_4$: $10\\,e^-$ — does not obey.
- $SF_6$: $12\\,e^-$ — does not obey.
- $H_2S$: $2$ bonds $+ 2$ lone pairs $= 8\\,e^-$ — obeys.

So S does **not** obey the octet in $4$ compounds, not $3$. $\\Rightarrow$ **Statement I is false.**

**Statement II** — lone pairs on the central atom:

$$H_2O:2,\\ \\ NH_3:1,\\ \\ H_3O^+\\text{—},\\ \\ ClF_3:2,\\ \\ SF_4:1,\\ \\ BrF_5:1,\\ \\ XeF_4:2$$

- $[H_2O, ClF_3, SF_4]$: $2,2,1$ — not all one.
- $[NH_3, BrF_5, SF_4]$: $1,1,1$ — **all one.** $\\checkmark$
- $[BrF_5, ClF_3, XeF_4]$: $1,2,2$ — not all one.
- $[XeF_4, ClF_3, H_2O]$: $2,2,2$ — not all one.

Exactly $1$ set qualifies. $\\Rightarrow$ **Statement II is true.**

**Answer:** D`,statement:`Given below are two statements:
Statement I: The number of compounds among SO$_2$, SO$_3$, SF$_4$, SF$_6$ and H$_2$S in which sulphur does not obey the Octet rule is 3.
Statement II: Among [H$_2$O, ClF$_3$, SF$_4$], [NH$_3$, BrF$_5$, SF$_4$], [BrF$_5$, ClF$_3$, XeF$_4$] and [XeF$_4$, ClF$_3$, H$_2$O], the number of sets in which all the molecules have one lone pair of electrons on the central atom is 1.
In the light of the above statements, choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"A-II, B-I, C-III, D-IV",id:"6911211254",options:["A-II, B-III, C-I, D-IV","A-II, B-I, C-IV, D-III","A-II, B-I, C-III, D-IV","A-I, B-II, C-III, D-IV"],solution:`- **A. Reversible isothermal expansion:** $\\Delta U = 0$, so $q = -w = nRT\\ln\\dfrac{V_2}{V_1}$ → **II**.
- **B. Free expansion:** $p_{ext}=0 \\Rightarrow w=0$; isothermal ideal gas has $\\Delta U=0$, so $q=0$ → **I**.
- **C. Irreversible compression:** work against constant external pressure, $w=-p_{ext}(V_2-V_1)=-p_{ext}(V_1-V_2)$ as written → **III**.
- **D. Cyclic reversible:** entropy is a state function, so over a cycle $\\displaystyle\\oint \\dfrac{q_{rev}}{T}=0$ → **IV**.

So A-II, B-I, C-III, D-IV.

**Answer:** C`,statement:`Match List - I with List - II. Given $V_1$ and $V_2$ are initial and final volumes respectively.
List - I (Isothermal process): A. Reversible expansion; B. Free expansion; C. Irreversible Compression; D. Cyclic reversible.
List - II (Expression): I. $q=0$; II. $q=nRT\\ln\\dfrac{V_2}{V_1}$; III. $w=-p_{ext}(V_1-V_2)$; IV. $\\dfrac{q_{rev}}{T}=0$.
Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"Statement I is false but Statement II is true",id:"6911211255",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:"",statement:`Given below are two statements: [figure: Chamber 1 (18 g glucose in 100 mL aqueous solution) and Chamber 2 (30 g glucose in 250 mL aqueous solution) separated by a semi-permeable membrane]
Statement I: H$_2$O molecules move from the chamber 1 to chamber 2.
Statement II: The osmotic pressure of a solution prepared by dissolving 50 mg of potassium sulphate (molar mass = 174 g/mol) in 2 L of water (at 27 °C) is 0.0107 bar. (Given: R = 0.083 dm$^3$ bar K$^{-1}$ mol$^{-1}$ and assume complete dissociation of electrolyte)
In the light of the above statements, choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"$\\left(\\dfrac{K}{c^{x+y-1}x^x y^y}\\right)^{\\frac{1}{x+y}}$",id:"6911211256",options:["$\\left[K\\times c^{x+y-1}x^x y^y\\right]^{x+y}$","$\\left(\\dfrac{K}{c^{x+y-1}x^x y^y}\\right)^{\\frac{1}{x+y}}$","$\\left(\\dfrac{c^{x+y-1}x^x y^y}{K}\\right)^{x+y}$","$\\left(\\dfrac{c^{x+y-1}x^x y^y}{K}\\right)^{\\frac{1}{x+y}}$"],solution:`Dissociation: $\\text{A}_x\\text{B}_y \\rightleftharpoons x\\,\\text{A}^{y+} + y\\,\\text{B}^{x-}$.

With degree of dissociation $\\alpha$ (and $\\alpha \\ll 1$, so $[\\text{A}_x\\text{B}_y] \\approx c$):
$$[\\text{A}^{y+}] = xc\\alpha, \\qquad [\\text{B}^{x-}] = yc\\alpha$$

$$K = \\frac{[\\text{A}^{y+}]^x\\,[\\text{B}^{x-}]^y}{[\\text{A}_x\\text{B}_y]} = \\frac{(xc\\alpha)^x (yc\\alpha)^y}{c} = x^x y^y\\, c^{x+y-1}\\, \\alpha^{x+y}$$

Solve for $\\alpha$:
$$\\alpha^{x+y} = \\frac{K}{c^{x+y-1}\\,x^x y^y} \\implies \\alpha = \\left(\\frac{K}{c^{x+y-1}\\,x^x y^y}\\right)^{\\frac{1}{x+y}}$$

**Answer:** B $\\left(\\left(\\dfrac{K}{c^{x+y-1}x^x y^y}\\right)^{\\frac{1}{x+y}}\\right)$`,statement:"Given is a concentrated solution of a weak electrolyte A$_x$B$_y$ of concentration 'c' and dissociation constant 'K'. The degree of dissociation is given by:",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"If the reaction is carried out reversibly, the electrical work done is equal to the ratio of charge and potential difference through which charge is moved.",id:"6911211257",options:["The overall reaction can be written as $n_2\\text{Red}_1+n_1\\text{Ox}_2 \\rightleftharpoons n_2\\text{Ox}_1^{n_1+}+n_1\\text{Red}_2^{n_2-}$","The electrons do not appear in the overall reaction because electrons produced at the anode are consumed at the cathode.","[plot of $(E-E^\\circ)/(RT/F)$ versus $\\log_{10}Q$ with lines for n=1, n=2, n=3 and slope $\\propto 1/n$] Here n is the number of electrons transferred in redox reaction.","If the reaction is carried out reversibly, the electrical work done is equal to the ratio of charge and potential difference through which charge is moved."],solution:`Evaluate each statement.

- **Option 1 (correct):** Cross-multiplying to balance electrons ($n_1 n_2$ each) gives $n_2\\text{Red}_1+n_1\\text{Ox}_2 \\rightleftharpoons n_2\\text{Ox}_1^{n_1+}+n_1\\text{Red}_2^{n_2-}$. ✓
- **Option 2 (correct):** Electrons produced at the anode are consumed at the cathode, so they cancel in the overall equation. ✓
- **Option 3 (correct):** From the Nernst equation $E = E^\\circ - \\dfrac{RT}{nF}\\ln Q$, rearranging gives $\\dfrac{E-E^\\circ}{RT/F} = -\\dfrac{2.303}{n}\\log_{10}Q$, so the slope magnitude $\\propto \\dfrac{1}{n}$. ✓
- **Option 4 (INCORRECT):** Electrical work $= \\text{charge}\\times\\text{potential difference}$ (a **product**), i.e. $W = qE$, not the **ratio** $q/E$. ✗

**Answer:** D`,statement:`For a general redox reaction:
Anode: $\\text{Red}_1\\to\\text{Ox}_1^{n_1+}+n_1 e^-$
Cathode: $\\text{Ox}_2+n_2 e^-\\to\\text{Red}_2^{n_2-}$
Which of the following statement is incorrect? [Option 3 includes a figure: plot of $\\dfrac{(E-E^\\circ)}{RT/F}$ versus $\\log_{10}Q$ showing straight lines for n=1, n=2, n=3 with slope $\\propto \\dfrac{1}{n}$]`,subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"lowest and highest",id:"6911211258",options:["lowest and lowest","highest and lowest","lowest and highest","highest and highest"],solution:`**Extreme left element** of a period is an **alkali metal** (Group 1). It has a single loosely held $ns^1$ electron, so its first ionisation enthalpy is the **lowest** in the period.

**Extreme right element (excluding noble gases)** is a **halogen** (Group 17). It needs just one electron to complete its octet, releasing a large amount of energy, so its negative electron gain enthalpy is the **highest** (most negative) in the period.

**Answer:** C (lowest and highest)`,statement:"In a period, the first ionisation enthalpy of the element at extreme left and the negative electron gain enthalpy of the extreme right element, except noble gases, are respectively.",subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"Statement I is true but Statement II is false",id:"6911211259",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:`**Statement I:** Comparing the central-oxygen bond angles:

$$F_2O\\ (\\approx 103^\\circ) < H_2O\\ (104.5^\\circ) < Cl_2O\\ (\\approx 111^\\circ)$$

Fluorine is highly electronegative and pulls the bonding pairs away from O, reducing repulsion between bond pairs and compressing the angle; chlorine is larger and less electronegative, so bond pairs stay near O and, with added bp–bp / steric repulsion of the large Cl atoms, the angle opens up. The stated trend is **true**.

**Statement II:** $SiF_4$ is a covalent, molecular (gaseous) compound, not ionic. While the heavier $SnF_4$ and $PbF_4$ have considerable ionic character, grouping all three as ionic is incorrect. **False.**

Statement I is true, Statement II is false.

**Answer:** C`,statement:`Given below are two statements:
Statement I: F$_2$O < H$_2$O < Cl$_2$O is the correct trend in terms of bond angle.
Statement II: SiF$_4$, SnF$_4$ and PbF$_4$ are ionic in nature.
In the light of the above statements, choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"B and C only",id:"6911211260",options:["A and B only","B and C only","A and D only","C and D only"],solution:`Configurations: $\\text{Cr} = [\\text{Ar}]3d^{5}4s^{1}$, $\\text{Mn} = [\\text{Ar}]3d^{5}4s^{2}$.

**First ionisation ($\\Delta_iH_1$):** one $4s$ electron is removed from each. Mn's $4s^2$ pair experiences a higher effective nuclear charge, so
$$\\Delta_iH_1:\\ \\text{Mn} > \\text{Cr}\\quad(717 > 653\\ \\text{kJ mol}^{-1})$$
So statement **C** is correct (and A is wrong).

**Second ionisation ($\\Delta_iH_2$):**
$$\\text{Cr}^{+} = 3d^{5}\\ (\\text{stable half-filled — hard to remove}),\\qquad \\text{Mn}^{+} = 3d^{5}4s^{1}\\ (\\text{remove the loose }4s)$$
Removing an electron from the extra-stable $3d^5$ of $\\text{Cr}^{+}$ needs more energy:
$$\\Delta_iH_2:\\ \\text{Cr} > \\text{Mn}\\quad(1592 > 1509\\ \\text{kJ mol}^{-1})$$
So statement **B** is correct (and D is wrong).

Correct: **B and C**.

**Answer:** B`,statement:`The correct order of first ($\\Delta_iH_1$) and second ($\\Delta_iH_2$) ionisation enthalpy values of Cr and Mn are:
A. $\\Delta_iH_1$: Cr > Mn
B. $\\Delta_iH_2$: Cr > Mn
C. $\\Delta_iH_1$: Mn > Cr
D. $\\Delta_iH_2$: Mn > Cr
Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"A, B and D only",id:"6911211261",options:["A, B, C and D","B, C and D only","A, C and D only","A, B and D only"],solution:`- **A.** $[NiCl_4]^{2-}$: $Ni^{2+}(d^8)$, $Cl^-$ weak field $\\Rightarrow sp^3$, tetrahedral, 2 unpaired $\\Rightarrow$ paramagnetic. CORRECT.
- **B.** $[Ni(NH_3)_6]^{2+}$: $Ni^{2+}(d^8)$ octahedral $\\Rightarrow sp^3d^2$, 2 unpaired $\\Rightarrow$ paramagnetic. CORRECT.
- **C.** $[Ni(CO)_4]$: $Ni(0)(d^{10})$, $sp^3$, tetrahedral, all electrons paired $\\Rightarrow$ **diamagnetic**, not paramagnetic. INCORRECT.
- **D.** $[Ni(CN)_4]^{2-}$: $Ni^{2+}(d^8)$, $CN^-$ strong field $\\Rightarrow$ pairing, $dsp^2$, square planar, 0 unpaired $\\Rightarrow$ diamagnetic. CORRECT.

So A, B and D only.

**Answer:** D (A, B and D only)`,statement:`Which of the following sequences of hybridisation, geometry and magnetic nature are correct for the given coordination compounds?
A. [NiCl$_4$]$^{2-}$ - sp$^3$, tetrahedral, paramagnetic
B. [Ni(NH$_3$)$_6$]$^{2+}$ - sp$^3$d$^2$, octahedral, paramagnetic
C. [Ni(CO)$_4$] - sp$^3$, tetrahedral, paramagnetic
D. [Ni(CN)$_4$]$^{2-}$ - dsp$^2$, square planar, diamagnetic
Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"Both Statement I and Statement II are true",id:"6911211262",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:`**Statement I:** Sucrose is appreciably soluble in ethanol, whereas NaCl is essentially **insoluble** in ethanol. Stirring the mixture with alcohol dissolves only the sugar; filtration leaves NaCl behind. This is a valid **differential-solubility (extraction)** separation. **True.**

**Statement II:** Steam distillation applies to substances that are **steam-volatile** and **immiscible with water**. The volatile, water-insoluble oils of rose petals distil over with steam and are then separated. **True.**

Both statements are true.

**Answer:** A`,statement:`Given below are two statements:
Statement I: A mixture of C$_{12}$H$_{22}$O$_{11}$ (sugar) and NaCl can be separated by dissolving sugar in alcohol, due to differential solubility.
Statement II: Rose essence from rose petals is seperated by steam distillation due to its high volatility and insolubility in H$_2$O.
In the light of the above statements, choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"$\\alpha<\\beta<\\gamma$",id:"6911211263",options:["$\\alpha>\\beta>\\gamma$","$\\alpha<\\beta<\\gamma$","$\\alpha=\\beta=\\gamma$","$\\alpha<\\beta=\\gamma$"],solution:`Identify the three carbon–oxygen bonds:

- $\\alpha$: the carbonyl $\\text{C}=\\text{O}$ double bond.
- $\\beta$: the single bond from the carbonyl carbon to the ester oxygen ($\\text{C}-\\text{O}$).
- $\\gamma$: the single bond from the ester oxygen to the methyl group ($\\text{O}-\\text{CH}_3$).

The carbonyl $\\text{C}=\\text{O}$ ($\\alpha$) is a genuine double bond, so it is the **shortest**.

The ester oxygen's lone pair is delocalised into the carbonyl (resonance $\\text{C}-\\text{O}^+ = \\text{C}$), giving the $\\beta$ bond **partial double-bond character**, so it is shorter than a plain single bond.

The $\\gamma$ bond ($\\text{O}-\\text{CH}_3$) is a normal single bond with the least double-bond character, so it is the **longest**.

Hence the increasing order of bond length is:
$$\\alpha \\;<\\; \\beta \\;<\\; \\gamma$$

**Answer:** B`,statement:"Shown below is the structure of methyl acetate with three different $\\alpha$, $\\beta$ and $\\gamma$ carbon-oxygen bonds. $\\text{H}_3\\text{C}-\\underset{\\beta}{\\overset{\\overset{\\textstyle O}{\\|}\\alpha}{\\text{C}}}-\\underset{\\gamma}{\\text{O}}-\\text{CH}_3$. The correct order of bond lengths of these bonds is:",subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"4 - Methylpent-3-en-2-one",id:"6911211264",options:["2 - Methylpent-4-en-3-one","4 - Methylpent-3-en-2-one","4 - Methylpent-1-ene","2 - Methylpent-3-one"],solution:`**Find x:** Markovnikov hydration of prop-1-yne ($CH_3\\text{–}C\\equiv CH$) with $HgSO_4/\\text{dil. }H_2SO_4$ adds water at the internal carbon:
$$CH_3\\text{–}C\\equiv CH \\xrightarrow{H_2O,\\,HgSO_4} CH_3\\text{–}\\underset{O}{\\overset{}{C}}\\text{–}CH_3 \\;=\\; \\textbf{acetone}$$

**Find y:** A nitrile with a Grignard reagent gives a ketone after hydrolysis:
$$CH_3C\\equiv N + CH_3MgBr \\rightarrow CH_3\\text{–}C(=NMgBr)\\text{–}CH_3 \\xrightarrow{H_3O^+} CH_3\\text{–}CO\\text{–}CH_3 \\;=\\; \\textbf{acetone}$$

So both x and y are **acetone**. With $Ba(OH)_2$ (base), acetone undergoes **aldol condensation** with itself; heating dehydrates the aldol:
$$2\\,CH_3COCH_3 \\xrightarrow{Ba(OH)_2} (CH_3)_2C(OH)\\text{–}CH_2\\text{–}COCH_3 \\xrightarrow{\\Delta,\\,-H_2O} (CH_3)_2C{=}CH\\text{–}COCH_3$$

The product is **mesityl oxide**. Numbering to give the ketone the lowest locant:
$$\\underset{1}{CH_3}\\text{–}\\underset{2}{CO}\\text{–}\\underset{3}{CH}{=}\\underset{4}{C}(CH_3)\\text{–}\\underset{5}{CH_3}$$
giving **4-methylpent-3-en-2-one**.

**Answer:** 4 - Methylpent-3-en-2-one`,statement:"'x' is the product which is obtained by the hydrolysis of prop-1-yne in the presence of mercuric sulphate under dilute acidic medium at 333 K. 'y' is the product which is obtained by the reaction of ethane nitrile with methyl magnesium bromide in dry ether followed by hydrolysis. IUPAC name of product obtained from 'x' and 'y' in the presence of barium hydroxide followed by heating is:",subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"Haloform test",id:"6911211265",options:["Haloform test","Lucas test","Silver mirror test","Benedict test"],solution:`**Identify the starting bromide:** an *optically active* $C_4H_9Br$ must have a stereocentre, so it is **2-bromobutane**, $CH_3\\text{–}CHBr\\text{–}CH_2\\text{–}CH_3$.

Trace the sequence:
- **[A]** — ethanolic KOH → dehydrohalogenation (Saytzeff) → **but-2-ene**, $CH_3CH{=}CHCH_3$.
- **[B]** — $Br_2$ addition → **2,3-dibromobutane**.
- **[C]** — ethanolic KOH then $NaNH_2$ → double dehydrohalogenation → **but-2-yne**, $CH_3\\text{–}C\\equiv C\\text{–}CH_3$.
- **[D]** — $H_2O/HgSO_4/\\text{dil. }H_2SO_4$ (333 K) hydrates the internal alkyne → **butan-2-one**, $CH_3\\text{–}CO\\text{–}CH_2\\text{–}CH_3$.

Butan-2-one is a **methyl ketone** ($CH_3CO\\text{–}$ group), which gives a positive **iodoform (haloform) test**. Tollens' (silver mirror) and Benedict's are aldehyde tests; Lucas is an alcohol test — none apply here.

**Answer:** Haloform test`,statement:"An optically active alkyl bromide C$_4$H$_9$Br, reacts with ethanolic KOH to form major compound [A] which reacts with bromine to give compound [B]. Compound [B] reacts with ethanolic KOH and sodamide to give compound [C]. One molecule of water adds to compound [C] on warming with mercuric sulphate and dilute sulphuric acid at 333 K to form compound [D]. The functional group in compound D will be confirmed by:",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"Statement I is false but Statement II is true",id:"6911211266",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:"",statement:`Consider the following reaction. [figure: benzyl phenyl ether, C$_6$H$_5$-O-CH$_2$-C$_6$H$_5$] + HI $\\rightarrow$ Product.
Statement I: In the above reaction, product formed will be a mixture of benzyl alcohol and iodobenzene.
Statement II: In the above reaction, the $-$O$-$CH$_2-$ bond is cleaved to give the product.
In the light of the above statements, choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"Benzene",id:"6911211267",options:["Benzene","Phenol","Propanol","Chlorobenzene"],solution:"",statement:"Consider the following organic reaction sequence. Choose the final product (X) from the following (consider the major product in all intermediate reactions). [figure: propanoic acid (CH$_3$CH$_2$COOH) subjected to] (i) NH$_3$/$\\Delta$ (ii) NaOH/Br$_2$ (iii) HNO$_2$/H$_2$O, 0°C (iv) C$_6$H$_5$N$_2$Cl, 0°C $\\rightarrow$ (X) Major Product",subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"$3$",id:"6911211268",options:["$5$","$4$","$3$","$6$"],solution:"",statement:"The number of compounds from the following which can undergo reaction with Br$_2$/KOH (alcoholic) to give respective products and these respective products can also be obtained separately by Gabriel phthalimide reaction is: [figure: six amide structures shown — C$_6$H$_5$CONH$_2$ (benzamide); C$_6$H$_5$CH$_2$CONH$_2$; CH$_3$CONH$_2$ (acetamide); C$_6$H$_{11}$CONHCH$_2$CH$_3$; (CH$_3$)$_3$C-CONHCH$_3$; C$_6$H$_{11}$CONH$_2$]",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"$18$",id:"6911211269",options:["$12$","$16$","$14$","$18$"],solution:"",statement:"Consider the following reactions. Total number of electrons in the $\\pi$ bonds and lone pair of electrons in the product (X) is: [figure: glucose written as CHO-(CHOH)$_4$-CH$_2$OH] (i) HI, $\\Delta$ (ii) V$_2$O$_5$/10-20 atm/773 K (iii) Benzoyl chloride/Anhyd. AlCl$_3$ $\\rightarrow$ (X) Major product",subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"NO and [Fe(NO)]SO$_4$",id:"6911211270",options:["NO and [Fe(NO)]SO$_4$","NO$_2$ and [Fe(NO$_2$)]SO$_4$","N$_2$O and [Fe(N$_2$O)]SO$_4$","N$_2$O$_4$ and [Fe(N$_2$O$_4$)]SO$_4$"],solution:`This is the classic **brown-ring test** for nitrate/nitrite. The nitrate is first reduced by $\\text{Fe}^{2+}$ in the presence of concentrated $\\text{H}_2\\text{SO}_4$ to nitric oxide:
$$3\\text{Fe}^{2+} + 4\\text{H}^+ + \\text{NO}_3^- \\rightarrow 3\\text{Fe}^{3+} + \\text{NO} + 2\\text{H}_2\\text{O}$$

The liberated gas $X = \\text{NO}$ then combines with fresh $\\text{Fe}^{2+}$ (as $\\text{FeSO}_4$) to form the brown nitrosyl-iron complex at the interface:
$$[\\text{Fe(H}_2\\text{O)}_6]^{2+} + \\text{NO} \\rightarrow [\\text{Fe(H}_2\\text{O)}_5(\\text{NO})]^{2+} + \\text{H}_2\\text{O}$$

Written as the sulphate, $Y = [\\text{Fe(NO)}]\\text{SO}_4$, the brown ring.

**Answer:** A`,statement:"Treatment of a gas 'X' with a freshly prepared ferrous sulphate solution gives a compound 'Y' as a brown ring. The compounds X and Y are.",subject:"Chemistry",type:"mcq"},{correct_index:null,correct_value:"5",id:"6911211271",options:[],solution:`The complex is $[Cr(H_2O)_4Cl_2]Cl$. Two chlorides are inside the coordination sphere and do not ionize; only the **one** chloride outside the sphere is free and precipitable by $Ag^+$.

Moles of complex:

$$n = 0.100\\ \\text{L} \\times 0.05\\ \\text{M} = 5 \\times 10^{-3}\\ \\text{mol}$$

Each formula unit gives 1 free $Cl^-$, so:

$$n_{\\text{AgCl}} = 5 \\times 10^{-3}\\ \\text{mol}$$

Hence the value is $5$.

**Answer:** 5`,statement:"An excess of AgNO$_3$ is added to 100 mL of a 0.05 M solution of tetraaquadichloridochromium (III) chloride. The number of moles of AgCl precipitated will be __________ $\\times10^{-3}$. (Nearest integer)",subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"4",id:"6911211272",options:[],solution:`**Find the molecular formula.** From $\\dfrac{3n+1}{2} = 8$, we get $n = 5$, so $(Y)$ is $\\text{C}_5\\text{H}_{12}$.

**Use the "only one monochloro product" clue.** Among the three $\\text{C}_5\\text{H}_{12}$ isomers:

- n-pentane $\\to$ 3 monochloro products,
- 2-methylbutane $\\to$ 4 monochloro products,
- **2,2-dimethylpropane (neopentane), $\\text{C(CH}_3)_4$** $\\to$ all 12 H are equivalent $\\to$ **only 1** monochloro product. ✓

So $(Y)$ is neopentane, $\\text{C(CH}_3)_4$. Its four $\\text{CH}_3$ groups are all **primary carbons** (the central carbon is quaternary).

$$\\text{Primary carbon atoms} = 4$$

**Answer:** 4`,statement:`An alkane (Y) requires 8 moles of oxygen for complete combustion and on chlorination with Cl$_2$/h$\\nu$, (Y) gives only one monochlorinated product (Z). The total number of primary carbon atoms in (Y) is __________.`,subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"1",id:"6911211273",options:[],solution:`**Moles of $\\text{MnO}_4^-$:** $0.500 \\times 0.2 = 0.1$ mol.

In **basic (neutral) medium**, $\\text{MnO}_4^-$ is reduced to $\\text{MnO}_2$, gaining $3\\,e^-$ each:
$$\\text{electrons available} = 0.1 \\times 3 = 0.3\\ \\text{mol}\\,e^-$$

Iodide is oxidised $2I^- \\to I_2 + 2e^-$ ($1\\,e^-$ per $I^-$), so $0.3$ mol $I^-$ is oxidised:
$$n_{I_2} = \\frac{0.3}{2} = 0.15\\ \\text{mol}$$

(KI available $= 0.75$ mol, so $\\text{MnO}_4^-$ is limiting — consistent.)

**Thiosulphate titration:** $I_2 + 2\\text{S}_2\\text{O}_3^{2-} \\to 2I^- + \\text{S}_4\\text{O}_6^{2-}$
$$n_{\\text{thio}} = 2 \\times 0.15 = 0.30\\ \\text{mol}$$

$$x = \\frac{n_{\\text{thio}}}{V} = \\frac{0.30}{0.300} = 1\\ \\text{M}$$

**Answer:** 1`,statement:"500 mL of 0.2 M MnO$_4^-$ solution in basic medium when mixed with 500 mL of 1.5 M KI solution, oxidises iodide ions to liberate molecular iodine. This liberated iodine is then titrated with a standard $x$ M thiosulphate solution in presence of starch till the end point. If 300 mL of thiosulphate was consumed, then the value of $x$ is __________.",subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"8",id:"6911211274",options:[],solution:`Start with 1 mol X$_2$Y$_4$; $\\alpha = 0.75$.

| Species | X$_2$Y$_4$ | XY$_2$ |
|---|---|---|
| mol at eqm | $1-\\alpha = 0.25$ | $2\\alpha = 1.5$ |

Total moles $= 1 + \\alpha = 1.75$. With $P = 1$ atm:
$$p_{X_2Y_4} = \\frac{0.25}{1.75} = \\frac{1}{7}, \\qquad p_{XY_2} = \\frac{1.5}{1.75} = \\frac{6}{7}$$

$$K_p = \\frac{p_{XY_2}^2}{p_{X_2Y_4}} = \\frac{(6/7)^2}{1/7} = \\frac{36/49}{1/7} = \\frac{36}{7}$$

$$\\log K_p = \\log 36 - \\log 7 = (2\\log 2 + 2\\log 3) - \\log 7 = (0.60 + 0.96) - 0.84 = 0.72$$

$$\\Delta_rG^\\ominus = -2.3\\,RT\\log K_p = -2.3 \\times 8.3 \\times 600 \\times 0.72 \\approx -8247\\ \\text{J mol}^{-1} \\approx -8.25\\ \\text{kJ mol}^{-1}$$

Magnitude $\\approx 8\\ \\text{kJ mol}^{-1}$.

**Answer:** 8`,statement:`In a closed flask at 600 K, one mole of X$_2$Y$_4$(g) attains equilibrium as given below:
$$X_2Y_4(g)\\rightleftharpoons 2XY_2(g)$$
At equilibrium, 75% X$_2$Y$_4$(g) was dissociated and the total pressure is 1 atm. The magnitude of $\\Delta_rG^\\ominus$ (in kJ mol$^{-1}$) at this temperature is __________. (Nearest Integer) (Given: R = 8.3 J mol$^{-1}$K$^{-1}$; ln 10 = 2.3, log 2 = 0.3, log 3 = 0.48, log 5 = 0.69, log 7 = 0.84)`,subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"232",id:"6911211275",options:[],solution:`The Arrhenius equation is:

$$k = A\\, e^{-E_a/RT}$$

Comparing the exponent with the given expression:

$$\\frac{E_a}{RT} = \\frac{28000\\,\\text{K}}{T} \\Rightarrow \\frac{E_a}{R} = 28000\\,\\text{K}$$

$$E_a = 28000 \\times 8.3 = 232400\\ \\text{J mol}^{-1} = 232.4\\ \\text{kJ mol}^{-1}$$

**Answer:** 232`,statement:"Decomposition of a hydrocarbon follows the equation $k=(5.5\\times10^{11}\\text{s}^{-1})\\,e^{\\frac{-28000K}{T}}$. The activation energy of reaction is __________ kJ mol$^{-1}$. (Nearest Integer) Given: R = 8.3 J K$^{-1}$ mol$^{-1}$",subject:"Chemistry",type:"integer"}],shift:"Shift 2",title:"JEE Main 2026 · 06 Apr · Shift 2"},window.MOCK_DATA.slug="jee-main-2026-apr-6-shift-2"
```


---

_Source: [https://jeenotes.in/mock-tests/jee-main-2026-apr-6-shift-2/](https://jeenotes.in/mock-tests/jee-main-2026-apr-6-shift-2/) · raw HTML: `offline/mock-tests/jee-main-2026-apr-6-shift-2/index.html`_
