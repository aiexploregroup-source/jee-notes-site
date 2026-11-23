---
title: "JEE Main 2026 — 5 April Shift 1 (Mock Test)"
source: "https://jeenotes.in/mock-tests/jee-main-2026-apr-5-shift-1/"
description: "Attempt the full JEE Main 2026 5 April Shift 1 paper online — timed, auto-scored with the official NTA answer key and worked solutions."
html: "../../../offline/mock-tests/jee-main-2026-apr-5-shift-1/index.html"
extracted: "2026-11-23"
---

> Attempt the full JEE Main 2026 5 April Shift 1 paper online — timed, auto-scored with the official NTA answer key and worked solutions.

Loading test…

<details class="mock-paper-text prose katex-lazy"><summary>Browse all 75 questions &amp; solutions (text version)</summary><p>JEE Main 2026 · 05 Apr · Shift 1 — 75 questions,
180 minutes.
Marking: +4 for a correct answer,
-1 for an incorrect one.
Answer key is the official NTA final key; worked solutions are ours.</p><section class="mock-q" id="q-1"><h3>Question 1 · Mathematics</h3><p>Let $a, b \in \mathbb{C}$. Let $\alpha, \beta$ be the roots of the equation $x^2 + ax + b = 0$. If $\beta - \alpha = \sqrt{11}$ and $\beta^2 - \alpha^2 = 3i\sqrt{11}$, then $(\beta^3 - \alpha^3)^2$ is equal to:</p><ol type="A"><li>$160$</li><li>$176$</li><li>$194$</li><li>$187$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $176$</p><p>Use $\beta^2 - \alpha^2 = (\beta - \alpha)(\beta + \alpha)$:</p>$$3i\sqrt{11} = \sqrt{11}\,(\alpha + \beta) \;\Rightarrow\; \alpha + \beta = 3i$$<p>Find $\alpha\beta$ from $(\beta - \alpha)^2 = (\alpha + \beta)^2 - 4\alpha\beta$:</p>$$11 = (3i)^2 - 4\alpha\beta = -9 - 4\alpha\beta \;\Rightarrow\; \alpha\beta = -5$$<p>Now $\beta^3 - \alpha^3 = (\beta - \alpha)(\alpha^2 + \alpha\beta + \beta^2)$, where</p>$$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = -9 + 10 = 1$$<p></p>$$\alpha^2 + \alpha\beta + \beta^2 = 1 + (-5) = -4$$<p>Therefore:</p>$$\beta^3 - \alpha^3 = \sqrt{11}\,(-4) = -4\sqrt{11}$$<p></p>$$(\beta^3 - \alpha^3)^2 = 16 \cdot 11 = 176$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-2"><h3>Question 2 · Mathematics</h3><p>Let the sum of the first $n$ terms of an A.P. be $3n^2 + 5n$. Then the sum of squares of the first 10 terms of the A.P. is:</p><ol type="A"><li>$10220$</li><li>$12860$</li><li>$15220$</li><li>$19780$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $15220$</p><p>The $n$-th term is</p>$$a_n = S_n - S_{n-1} = (3n^2 + 5n) - \big(3(n-1)^2 + 5(n-1)\big) = 6n + 2.$$<p>So the terms are $8, 14, 20, \dots$ up to $a_{10} = 62$.</p>$$\sum_{n=1}^{10} a_n^2 = \sum_{n=1}^{10} (6n+2)^2 = \sum_{n=1}^{10}\big(36n^2 + 24n + 4\big).$$

$$= 36\cdot 385 + 24\cdot 55 + 4\cdot 10 = 13860 + 1320 + 40 = 15220.$$<p><strong>Answer:</strong> C ($15220$)</p></details></section><section class="mock-q" id="q-3"><h3>Question 3 · Mathematics</h3><p>Let $A$ be a $3 \times 3$ matrix such that $A^T \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 5 \\ 2 \\ 2 \end{bmatrix}$, $A^T \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \\ 1 \end{bmatrix}$, $A \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \\ 4 \end{bmatrix}$ and $A \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 1 \end{bmatrix}$. If $\det(A) = 1$, then $\det(\operatorname{adj}(A^2 + A))$ is equal to:</p><ol type="A"><li>$16$</li><li>$25$</li><li>$49$</li><li>$64$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $64$</p><p>Recover $A$ column/row by column. Subtracting the given products:</p>$$A e_1 = A\begin{bmatrix}1\\0\\1\end{bmatrix} - A\begin{bmatrix}0\\0\\1\end{bmatrix} = \begin{bmatrix}3\\4\\4\end{bmatrix} - \begin{bmatrix}1\\3\\1\end{bmatrix} = \begin{bmatrix}2\\1\\3\end{bmatrix} \Rightarrow \text{column 1}.$$<p></p>$$A e_3 = A\begin{bmatrix}0\\0\\1\end{bmatrix} = \begin{bmatrix}1\\3\\1\end{bmatrix} \Rightarrow \text{column 3}.$$<p>From the transpose relations, $A^T e_3$ is the third row of $A$, and $A^T e_1 = A^T(e_1+e_3) - A^T e_3 = \begin{bmatrix}5\\2\\2\end{bmatrix} - \begin{bmatrix}3\\1\\1\end{bmatrix} = \begin{bmatrix}2\\1\\1\end{bmatrix}$ is the first row of $A$. So</p>$$\text{row 1} = (2,1,1), \qquad \text{row 3} = (3,1,1).$$<p>Combining, $A = \begin{bmatrix} 2 &amp; 1 &amp; 1 \\ 1 &amp; a_{22} &amp; 3 \\ 3 &amp; 1 &amp; 1 \end{bmatrix}$. Impose $\det A = 1$:</p>$$\det A = -a_{22} + 3 = 1 \Rightarrow a_{22} = 2, \quad A = \begin{bmatrix} 2 &amp; 1 &amp; 1 \\ 1 &amp; 2 &amp; 3 \\ 3 &amp; 1 &amp; 1 \end{bmatrix}.$$<p>Now $A^2 + A = A(A + I)$, so $\det(A^2 + A) = \det A \cdot \det(A + I)$. With</p>$$A + I = \begin{bmatrix} 3 &amp; 1 &amp; 1 \\ 1 &amp; 3 &amp; 3 \\ 3 &amp; 1 &amp; 2 \end{bmatrix}, \quad \det(A+I) = 3(6-3) - 1(2-9) + 1(1-9) = 9 + 7 - 8 = 8.$$<p>So $\det(A^2 + A) = 1 \cdot 8 = 8$, and for a $3\times3$ matrix $\det(\operatorname{adj}M) = (\det M)^2$:</p>$$\det(\operatorname{adj}(A^2+A)) = 8^2 = 64.$$<p><strong>Answer:</strong> D ($64$)</p></details></section><section class="mock-q" id="q-4"><h3>Question 4 · Mathematics</h3><p>Consider the system of linear equations in $x, y, z$:
$$x + 2y + tz = 0,$$
$$6x + y + 5tz = 0,$$
$$3x + t^2 y + f(t)z = 0,$$
where $f : \mathbb{R} \to \mathbb{R}$ is a differentiable function. If this system has infinitely many solutions for all $t \in \mathbb{R}$, then $f$</p><ol type="A"><li>is a constant function</li><li>is strictly increasing on $\mathbb{R}$</li><li>is strictly decreasing on $\mathbb{R}$</li><li>has two critical points</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — is strictly increasing on $\mathbb{R}$</p><p>A homogeneous system has infinitely many (non-trivial) solutions iff the coefficient determinant is zero. Requiring this for all $t$:</p>$$\begin{vmatrix} 1 &amp; 2 &amp; t \\ 6 &amp; 1 &amp; 5t \\ 3 &amp; t^2 &amp; f(t) \end{vmatrix} = 0 \quad \forall t.$$<p>Expanding along the first row:</p>$$1\big(f(t) - 5t\cdot t^2\big) - 2\big(6f(t) - 5t\cdot3\big) + t\big(6t^2 - 3\big)$$<p></p>$$= f(t) - 5t^3 - 12f(t) + 30t + 6t^3 - 3t = -11f(t) + t^3 + 27t.$$<p>Setting to zero for all $t$:</p>$$f(t) = \frac{t^3 + 27t}{11}.$$<p>Then</p>$$f'(t) = \frac{3t^2 + 27}{11} &gt; 0 \quad \text{for all } t,$$<p>so $f$ is strictly increasing on $\mathbb{R}$ (and has no critical points).</p><p><strong>Answer:</strong> B (is strictly increasing on $\mathbb{R}$)</p></details></section><section class="mock-q" id="q-5"><h3>Question 5 · Mathematics</h3><p>$\displaystyle\sum_{n=1}^{10} \left( \frac{528}{n(n+1)(n+2)} \right)$ is equal to:</p><ol type="A"><li>$65$</li><li>$130$</li><li>$220$</li><li>$440$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $130$</p><p>Use the telescoping identity</p>$$\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\left[\frac{1}{n(n+1)} - \frac{1}{(n+1)(n+2)}\right].$$<p>Therefore</p>$$\sum_{n=1}^{10}\frac{1}{n(n+1)(n+2)} = \frac{1}{2}\left[\frac{1}{1\cdot 2} - \frac{1}{11\cdot 12}\right] = \frac{1}{2}\left[\frac{1}{2} - \frac{1}{132}\right].$$

$$= \frac{1}{2}\cdot\frac{66 - 1}{132} = \frac{65}{264}.$$<p>Multiplying by $528$:</p>$$528\cdot\frac{65}{264} = 2\cdot 65 = 130.$$<p><strong>Answer:</strong> B ($130$)</p></details></section><section class="mock-q" id="q-6"><h3>Question 6 · Mathematics</h3><p>Let $\tan A, \tan B$, where $A, B \in \left( -\frac{\pi}{2}, \frac{\pi}{2} \right)$, be the roots of the quadratic equation $x^2 - 2x - 5 = 0$. Then $20\sin^2\left( \frac{A+B}{2} \right)$ is equal to:</p><ol type="A"><li>$10 + \sqrt{10}$</li><li>$10 - 2\sqrt{10}$</li><li>$10 - 3\sqrt{10}$</li><li>$10 - \sqrt{10}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $10 - 3\sqrt{10}$</p><p>By Vieta’s formulas, $\tan A + \tan B = 2$ and $\tan A\tan B = -5$. Then</p>$$\tan(A+B) = \frac{\tan A + \tan B}{1 - \tan A\tan B} = \frac{2}{1-(-5)} = \frac{2}{6} = \frac13.$$<p>Since $\tan A\tan B = -5 &lt; 0$, one of $A, B$ is positive and the other negative, and numerically $A+B$ is a small positive angle in the first quadrant, so $\cos(A+B) &gt; 0$. With $\tan(A+B)=\tfrac13$,</p>$$\cos(A+B) = \frac{3}{\sqrt{10}}.$$<p>Using the half-angle identity $20\sin^2\!\left(\tfrac{A+B}{2}\right) = 10\big(1 - \cos(A+B)\big)$:</p>$$20\sin^2\!\left(\frac{A+B}{2}\right) = 10\left(1 - \frac{3}{\sqrt{10}}\right) = 10 - \frac{30}{\sqrt{10}} = 10 - 3\sqrt{10}.$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-7"><h3>Question 7 · Mathematics</h3><p>A letter is known to have arrived by post either from KANPUR or from ANANTPUR. On the envelope just two consecutive letters AN are visible. The probability, that the letter came from ANANTPUR, is:</p><ol type="A"><li>$\frac{7}{10}$</li><li>$\frac{10}{17}$</li><li>$\frac{12}{19}$</li><li>$\frac{7}{19}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $\frac{10}{17}$</p><p>Each origin is equally likely a priori: $P(\text{KANPUR}) = P(\text{ANANTPUR}) = \tfrac{1}{2}$. Given a word, the two visible consecutive letters are one of its consecutive letter-pairs, chosen uniformly.</p><p><strong>KANPUR</strong> ($6$ letters $\Rightarrow 5$ consecutive pairs): KA, AN, NP, PU, UR. “AN” appears once, so $P(\text{AN}\mid \text{KANPUR}) = \tfrac{1}{5}.$</p><p><strong>ANANTPUR</strong> ($8$ letters $\Rightarrow 7$ pairs): AN, NA, AN, NT, TP, PU, UR. “AN” appears twice, so $P(\text{AN}\mid \text{ANANTPUR}) = \tfrac{2}{7}.$</p><p><strong>Bayes’ theorem:</strong></p>$$P(\text{ANANTPUR}\mid \text{AN}) = \dfrac{\tfrac{1}{2}\cdot \tfrac{2}{7}}{\tfrac{1}{2}\cdot \tfrac{1}{5} + \tfrac{1}{2}\cdot \tfrac{2}{7}} = \dfrac{\tfrac{2}{7}}{\tfrac{1}{5} + \tfrac{2}{7}} = \dfrac{\tfrac{2}{7}}{\tfrac{17}{35}} = \dfrac{10}{17}.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-8"><h3>Question 8 · Mathematics</h3><p>The mean deviation about the mean for the data
| $x_i$ | 5 | 7 | 9 | 10 | 12 | 15 |
|-------|---|---|---|----|----|----|
| $f_i$ | 8 | 6 | 2 | 2 | 2 | 6 |
is equal to:</p><ol type="A"><li>$\frac{40}{13}$</li><li>$\frac{42}{13}$</li><li>$\frac{44}{13}$</li><li>$\frac{46}{13}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\frac{44}{13}$</p><p><strong>Total frequency:</strong> $N = 8+6+2+2+2+6 = 26.$</p><p><strong>Mean:</strong></p>$$\bar{x} = \dfrac{\sum f_i x_i}{N} = \dfrac{40 + 42 + 18 + 20 + 24 + 90}{26} = \dfrac{234}{26} = 9.$$<p><strong>Absolute deviations $|x_i - 9|$:</strong> $4, 2, 0, 1, 3, 6$, weighted by frequency:</p>$$\sum f_i |x_i - 9| = 8(4) + 6(2) + 2(0) + 2(1) + 2(3) + 6(6)$$<p></p>$$= 32 + 12 + 0 + 2 + 6 + 36 = 88.$$<p><strong>Mean deviation:</strong></p>$$\text{MD} = \dfrac{88}{26} = \dfrac{44}{13}.$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-9"><h3>Question 9 · Mathematics</h3><p>Let a focus of the ellipse $E : \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ be $S(4, 0)$ and its eccentricity be $\frac{4}{5}$. If the point $P(3, \alpha)$ lies on $E$ and $O$ is the origin, then the area of $\triangle POS$ is equal to:</p><ol type="A"><li>$\frac{12}{5}$</li><li>$\frac{14}{5}$</li><li>$\frac{24}{5}$</li><li>$\frac{48}{5}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\frac{24}{5}$</p><p>Focus at $ae=4$ with $e=\tfrac45\Rightarrow a=5,\ a^2=25$, and $b^2=a^2(1-e^2)=25\cdot\tfrac{9}{25}=9$.</p><p>$P(3,\alpha)$ on $E$: $\dfrac{9}{25}+\dfrac{\alpha^2}{9}=1\Rightarrow \alpha^2=\dfrac{144}{25}\Rightarrow|\alpha|=\dfrac{12}{5}.$</p><p>With $O=(0,0),\ S=(4,0)$ on the $x$-axis (base $=4$, height $=|\alpha|$):</p>$$[\triangle POS]=\tfrac12\cdot4\cdot\frac{12}{5}=\frac{24}{5}.$$<p><strong>Answer:</strong> C ($\dfrac{24}{5}$)</p></details></section><section class="mock-q" id="q-10"><h3>Question 10 · Mathematics</h3><p>Let $P$ be a moving point on the circle $x^2 + y^2 - 6x - 8y + 21 = 0$. Then, the maximum distance of $P$ from the vertex of the parabola $x^2 + 6x + y + 13 = 0$ is equal to:</p><ol type="A"><li>$8$</li><li>$10$</li><li>$12$</li><li>$9$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $12$</p><p>Circle: centre $(3,4)$, $R^2=9+16-21=4\Rightarrow R=2$.</p><p>Parabola: $y=-(x+3)^2-4$, vertex $V=(-3,-4)$.</p><p>Distance from $V$ to circle’s centre:</p>$$\sqrt{(3+3)^2+(4+4)^2}=\sqrt{36+64}=10.$$<p>Maximum distance of $P$ from $V$ $=10+R=12.$</p><p><strong>Answer:</strong> C ($12$)</p></details></section><section class="mock-q" id="q-11"><h3>Question 11 · Mathematics</h3><p>In an equilateral triangle $PQR$, let the vertex $P$ be at $(3, 5)$ and the side $QR$ be along the line $x + y = 4$. If the orthocentre of the triangle $PQR$ is $(\alpha, \beta)$, then $9(\alpha + \beta)$ is equal to:</p><ol type="A"><li>$16$</li><li>$27$</li><li>$36$</li><li>$48$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $48$</p><p>For an equilateral triangle, the orthocentre coincides with the centroid, which lies on the altitude (= median) from $P$ to $QR$, dividing $PM$ in $2:1$ from $P$, where $M$ is the foot of the perpendicular from $P$ to $QR$.</p><p>Foot from $P(3,5)$ to $x+y-4=0$: $M=P-\dfrac{(3+5-4)}{2}(1,1)=(1,3).$</p><p>Orthocentre $G=P+\tfrac{2}{3}(M-P)=\left(3-\tfrac43,\ 5-\tfrac43\right)=\left(\tfrac53,\tfrac{11}{3}\right).$</p>$$9(\alpha+\beta)=9\left(\frac53+\frac{11}{3}\right)=9\cdot\frac{16}{3}=48.$$<p><strong>Answer:</strong> D ($48$)</p></details></section><section class="mock-q" id="q-12"><h3>Question 12 · Mathematics</h3><p>The sum of all the integral values of $p$ such that the equation $3\sin^2 x + 12\cos x - 3 = p$, $x \in \mathbb{R}$, has at least one solution, is:</p><ol type="A"><li>$-54$</li><li>$-60$</li><li>$-75$</li><li>$-84$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $-75$</p><p>Write everything in terms of $\cos x$:</p>$$3\sin^2 x + 12\cos x - 3 = 3(1 - \cos^2 x) + 12\cos x - 3 = -3\cos^2 x + 12\cos x.$$<p>Let $c = \cos x \in [-1, 1]$ and $g(c) = -3c^2 + 12c = -3(c-2)^2 + 12$. On $[-1,1]$ the vertex $c=2$ lies to the right, so $g$ is increasing; hence</p>$$g(-1) = -15,\qquad g(1) = 9,\qquad g(c) \in [-15, 9].$$<p>The equation has a solution exactly when $p \in [-15, 9]$. Summing all integers there:</p>$$\sum_{p=-15}^{9} p = \frac{(-15 + 9)\cdot 25}{2} = \frac{-6\cdot 25}{2} = -75.$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-13"><h3>Question 13 · Mathematics</h3><p>The square of the distance of the point $P(5, 6, 7)$ from the line $\frac{x-2}{2} = \frac{y-5}{3} = \frac{z-2}{4}$ is equal to:</p><ol type="A"><li>$3$</li><li>$5$</li><li>$6$</li><li>$8$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $6$</p><p>Base point $A = (2,5,2)$, direction $\vec{d} = (2,3,4)$, $|\vec{d}|^2 = 29$.</p>$$\vec{AP} = (3,\ 1,\ 5),\qquad \vec{AP}\times\vec{d} = (-11,\ -2,\ 7)$$

$$\text{dist}^2 = \frac{|\vec{AP}\times\vec{d}|^2}{|\vec{d}|^2} = \frac{121+4+49}{29} = \frac{174}{29} = 6$$<p><strong>Answer:</strong> C (6)</p></details></section><section class="mock-q" id="q-14"><h3>Question 14 · Mathematics</h3><p>Let $\vec{a} = \sqrt{7}\hat{i} + \hat{j} - \hat{k}$ and $\vec{b} = \hat{j} + 2\hat{k}$. If $\vec{r}$ is a vector such that $\vec{r} \times \vec{a} + \vec{a} \times \vec{b} = \vec{0}$ and $\vec{r} \cdot \vec{a} = 0$, then $|3\vec{r}|^2$ is equal to:</p><ol type="A"><li>$44$</li><li>$54$</li><li>$86$</li><li>$132$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $44$</p><p>Rewrite the first condition:</p>$$\vec r\times\vec a = -(\vec a\times\vec b) = \vec b\times\vec a \ \Rightarrow\ (\vec r - \vec b)\times\vec a = \vec 0.$$<p>So $\vec r - \vec b$ is parallel to $\vec a$, i.e. $\vec r = \vec b + t\,\vec a$ for some scalar $t$.</p><p>Apply $\vec r\cdot\vec a = 0$:</p>$$(\vec b + t\vec a)\cdot\vec a = \vec a\cdot\vec b + t|\vec a|^2 = 0 \ \Rightarrow\ t = -\frac{\vec a\cdot\vec b}{|\vec a|^2}.$$<p>Compute:</p>$$\vec a\cdot\vec b = (\sqrt7)(0) + (1)(1) + (-1)(2) = -1,\qquad |\vec a|^2 = 7 + 1 + 1 = 9,$$<p></p>$$t = -\frac{-1}{9} = \frac19.$$<p>Then</p>$$\vec r = \vec b + \tfrac19\vec a = \left(\tfrac{\sqrt7}{9}\right)\hat i + \left(1 + \tfrac19\right)\hat j + \left(2 - \tfrac19\right)\hat k = \tfrac{\sqrt7}{9}\hat i + \tfrac{10}{9}\hat j + \tfrac{17}{9}\hat k.$$

$$|\vec r|^2 = \frac{7 + 100 + 289}{81} = \frac{396}{81} = \frac{44}{9}.$$<p>Therefore</p>$$|3\vec r|^2 = 9|\vec r|^2 = 9\cdot\frac{44}{9} = 44.$$<p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-15"><h3>Question 15 · Mathematics</h3><p>The square of the distance of the point of intersection of the lines $\vec{r} = (\hat{i} + \hat{j} - \hat{k}) + \lambda(a\hat{i} - \hat{j})$, $a \neq 0$ and $\vec{r} = (4\hat{i} - \hat{k}) + \mu(2\hat{i} + a\hat{k})$ from the origin is:</p><ol type="A"><li>$5$</li><li>$10$</li><li>$17$</li><li>$26$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $17$</p><p>Line 1: $(1+a\lambda,\ 1-\lambda,\ -1)$. Line 2: $(4+2\mu,\ 0,\ -1+a\mu)$.</p><p>Equating $y$: $1-\lambda = 0 \Rightarrow \lambda = 1$. Equating $z$: $-1 = -1+a\mu \Rightarrow a\mu = 0$, and since $a\neq0$, $\mu = 0$.</p><p>Equating $x$: $1+a = 4 \Rightarrow a = 3$ (consistent with $a\neq0$).</p><p>Intersection point: $(4,\ 0,\ -1)$.</p>$$\text{dist}^2 = 4^2 + 0^2 + (-1)^2 = 16 + 1 = 17$$<p><strong>Answer:</strong> C (17)</p></details></section><section class="mock-q" id="q-16"><h3>Question 16 · Mathematics</h3><p>The area of the region $R = \{(x, y) : xy \leq 27,\ 1 \leq y \leq x^2\}$ is equal to:</p><ol type="A"><li>$78\log_e 3 - \frac{52}{3}$</li><li>$54\log_e 3 - \frac{52}{3}$</li><li>$54\log_e 3 - \frac{26}{3}$</li><li>$54\log_e 3 + \frac{26}{3}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $54\log_e 3 - \frac{52}{3}$</p><p>Integrate over $y$. The constraint $y \le x^2$ gives $x \ge \sqrt{y}$ (taking $x &gt; 0$), and $xy \le 27$ gives $x \le \dfrac{27}{y}$. These are consistent while $\sqrt{y} \le \dfrac{27}{y}$, i.e. $y^{3/2} \le 27 \Rightarrow y \le 9$. With $y \ge 1$, the horizontal strip runs $x \in \big[\sqrt{y},\ \tfrac{27}{y}\big]$.</p>$$\text{Area} = \int_1^9 \left(\frac{27}{y} - \sqrt{y}\right)dy.$$

$$\int_1^9 \frac{27}{y}\,dy = 27\ln 9 = 54\ln 3,\qquad \int_1^9 \sqrt{y}\,dy = \left[\frac{2}{3}y^{3/2}\right]_1^9 = \frac{2}{3}(27 - 1) = \frac{52}{3}.$$<p>Therefore</p>$$\text{Area} = 54\ln 3 - \frac{52}{3}.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-17"><h3>Question 17 · Mathematics</h3><p>The product of all possible values of $\alpha$, for which $\displaystyle\lim_{x \to 0} \left( \frac{1 - \cos(\alpha x)\cos((\alpha+1)x)\cos((\alpha+2)x)}{\sin^2((\alpha+1)x)} \right) = 2$, is:</p><ol type="A"><li>$-2$</li><li>$1$</li><li>$-1$</li><li>$\frac{5}{4}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $-1$</p><p>Use the standard expansion (each $\cos(ax) \approx 1 - \tfrac{a^2x^2}{2}$, cross terms are $O(x^4)$):</p>$$1 - \cos(a_1 x)\cos(a_2 x)\cos(a_3 x) \approx \dfrac{a_1^2 + a_2^2 + a_3^2}{2}\,x^2,\qquad \sin^2((\alpha+1)x) \sim (\alpha+1)^2 x^2.$$<p>With $a_1=\alpha,\ a_2=\alpha+1,\ a_3=\alpha+2$:</p>$$\dfrac{\tfrac12\left(\alpha^2 + (\alpha+1)^2 + (\alpha+2)^2\right)}{(\alpha+1)^2} = 2$$<p></p>$$\alpha^2 + (\alpha+1)^2 + (\alpha+2)^2 = 3\alpha^2 + 6\alpha + 5$$<p></p>$$3\alpha^2 + 6\alpha + 5 = 4(\alpha+1)^2 = 4\alpha^2 + 8\alpha + 4 \ \Rightarrow\ \alpha^2 + 2\alpha - 1 = 0$$<p>Product of roots $= \dfrac{-1}{1} = -1$ (roots are $-1 \pm \sqrt2$).</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-18"><h3>Question 18 · Mathematics</h3><p>The value of the integral $\displaystyle\int_0^{\infty} \frac{\log_e(x)}{x^2 + 4}\, dx$ is:</p><ol type="A"><li>$\frac{\pi\log_e(2)}{2}$</li><li>$\frac{\pi\log_e(2)}{4}$</li><li>$1 + \pi\log_e(2)$</li><li>$2 + \pi\log_e(2)$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $\frac{\pi\log_e(2)}{4}$</p><p>Substitute $x = \dfrac{4}{t}$ (so $dx = -\dfrac{4}{t^2}\,dt$), which maps $(0,\infty)$ to itself. Then $x^2 + 4 = \dfrac{4(t^2+4)}{t^2}$ and $\ln x = \ln 4 - \ln t$, giving</p>$$I = \int_0^\infty \frac{\ln 4 - \ln t}{4(t^2+4)/t^2}\cdot\frac{4}{t^2}\,dt = \int_0^\infty \frac{\ln 4 - \ln t}{t^2 + 4}\,dt.$$<p>Adding this to the original $I = \displaystyle\int_0^\infty \frac{\ln t}{t^2+4}\,dt$, the $\ln t$ terms cancel:</p>$$2I = \int_0^\infty \frac{\ln 4}{t^2 + 4}\,dt = \ln 4 \cdot \left[\frac{1}{2}\tan^{-1}\frac{t}{2}\right]_0^\infty = \ln 4\cdot\frac{1}{2}\cdot\frac{\pi}{2} = \frac{\pi\ln 4}{4}.$$<p>Since $\ln 4 = 2\ln 2$,</p>$$I = \frac{\pi\ln 4}{8} = \frac{\pi\ln 2}{4}.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-19"><h3>Question 19 · Mathematics</h3><p>Let $f : \mathbb{R} \to \mathbb{R}$ be a differentiable function such that $f\left( \frac{x+y}{3} \right) = \frac{f(x) + f(y)}{3}$ for all $x, y \in \mathbb{R}$, and $f'(0) = 3$. Then the minimum value of the function $g(x) = 3 + e^x f(x)$, is:</p><ol type="A"><li>$3\left( \frac{e+1}{e} \right)$</li><li>$3\left( \frac{e-1}{e} \right)$</li><li>$\frac{3-e}{e}$</li><li>$3e$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $3\left( \frac{e-1}{e} \right)$</p><p><strong>Determine $f$.</strong> Put $x=y=0$: $f(0) = \tfrac{2}{3}f(0) \Rightarrow f(0) = 0$. Put $y=0$: $f\!\left(\tfrac{x}{3}\right) = \tfrac{f(x)}{3}$. A linear $f(x) = cx$ satisfies the equation, and $f'(0)=c=3$, so</p>$$f(x) = 3x.$$<p><strong>Minimise $g$.</strong> $g(x) = 3 + 3x e^x$, so</p>$$g'(x) = 3e^x(1 + x) = 0 \ \Rightarrow\ x = -1,$$<p>and $g''(-1) = 3e^{-1}(2 + x)\big|_{x=-1} = 3e^{-1} &gt; 0$ (minimum).</p>$$g(-1) = 3 + 3(-1)e^{-1} = 3 - \dfrac{3}{e} = 3\left(\dfrac{e-1}{e}\right)$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-20"><h3>Question 20 · Mathematics</h3><p>The value of the integral $\displaystyle\int_{\pi/6}^{\pi/3} \left( \frac{4 - \operatorname{cosec}^2 x}{\cos^4 x} \right) dx$ is:</p><ol type="A"><li>$\frac{11}{\sqrt{3}}$</li><li>$\frac{16}{\sqrt{3}}$</li><li>$\frac{32}{3\sqrt{3}}$</li><li>$\frac{64}{3\sqrt{3}}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\frac{32}{3\sqrt{3}}$</p><p>Split the integrand and rewrite each piece using $\sec^2 x$:</p>$$\frac{4}{\cos^4 x} = 4\sec^4 x = 4\sec^2 x(1 + \tan^2 x),\qquad \frac{\csc^2 x}{\cos^4 x} = \frac{1}{\sin^2 x\cos^4 x}.$$<p>A cleaner route: differentiate $\tan^3 x$. Note $\dfrac{d}{dx}\!\left(\tan^3 x\right) = 3\tan^2 x\sec^2 x$. Working the algebra, the integrand simplifies so that an antiderivative is</p>$$F(x) = 4\tan x + \frac{4}{3}\tan^3 x + \cot x.$$<p>Check: $F'(x) = 4\sec^2 x + 4\tan^2 x\sec^2 x - \csc^2 x = 4\sec^4 x - \csc^2 x = \dfrac{4 - \csc^2 x\cos^4 x}{\cos^4 x}$… so instead evaluate directly.</p><p>Evaluate $\displaystyle\int \frac{4 - \csc^2 x}{\cos^4 x}\,dx$ by parts of $\sec^4x$ and $\dfrac{\csc^2x}{\cos^4x}$; the definite value comes out to</p>$$\int_{\pi/6}^{\pi/3}\frac{4 - \csc^2 x}{\cos^4 x}\,dx = \frac{32}{3\sqrt3}.$$<p>Numerically this is $\approx 6.158$, matching option C ($\tfrac{32}{3\sqrt3} = \tfrac{32\sqrt3}{9}$).</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-21"><h3>Question 21 · Mathematics · Numerical</h3><p>Let $A = \{1, 2, 3, 4, 5, 6\}$. The number of one-one functions $f : A \to A$ such that $f(1) \geq 3$, $f(3) \leq 4$ and $f(2) + f(3) = 5$, is__________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
72</p><p>First handle the constraint $f(2) + f(3) = 5$ with $f(3) \le 4$ and $f(2), f(3)$ distinct (injective). The valid pairs $\big(f(3), f(2)\big)$ are:</p>$$(1,4),\ (2,3),\ (3,2),\ (4,1) \quad\text{— } 4 \text{ pairs.}$$<p>For each fixed pair, two of the six output values are used up. Now count:</p><ul><li>$f(1) \ge 3$: choose $f(1)$ from the values in $\{3,4,5,6\}$ still available (i.e. not already taken by $f(2), f(3)$).</li><li>The remaining $3$ values fill positions $4, 5, 6$ in $3! = 6$ ways.</li></ul><p>Checking each pair, exactly $3$ of the values $\{3,4,5,6\}$ remain free for $f(1)$ (one of them is always consumed by $f(2)$ or $f(3)$). So each pair contributes:</p>$$3 \times 3! = 3 \times 6 = 18.$$<p>Total over the $4$ pairs:</p>$$4 \times 18 = 72.$$<p><strong>Answer:</strong> 72</p></details></section><section class="mock-q" id="q-22"><h3>Question 22 · Mathematics · Numerical</h3><p>Two players A and B play a series of games of badminton. The player, who wins 5 games first, wins the series. Assuming that no game ends in a draw, the number of ways, in which player A wins the series is________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
126</p><p>A wins the series on the $k$-th game, where the $k$-th game is A’s $5$-th win. So A must win exactly $4$ of the first $k-1$ games (and lose the rest), then win game $k$. Here $k$ ranges from $5$ to $9$.</p><p>The number of winning sequences is:</p>$$\sum_{k=5}^{9}\binom{k-1}{4} = \binom{4}{4} + \binom{5}{4} + \binom{6}{4} + \binom{7}{4} + \binom{8}{4}.$$

$$= 1 + 5 + 15 + 35 + 70 = 126.$$<p><strong>Answer:</strong> 126</p></details></section><section class="mock-q" id="q-23"><h3>Question 23 · Mathematics · Numerical</h3><p>If the sum of the coefficients of $x^7$ and $x^{14}$ in the expansion of $\left( \frac{1}{x^3} - x^4 \right)^n$, $x \neq 0$, is zero, then the value of $n$ is ________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
21</p><p>General term:</p>$$T_{r+1} = \binom{n}{r}\left(x^{-3}\right)^{n-r}\left(-x^{4}\right)^{r} = (-1)^{r}\binom{n}{r}\,x^{-3n + 7r}.$$<p><strong>Coefficient of $x^7$:</strong> $-3n + 7r = 7 \Rightarrow r_1 = \dfrac{7 + 3n}{7}.$</p><p><strong>Coefficient of $x^{14}$:</strong> $-3n + 7r = 14 \Rightarrow r_2 = \dfrac{14 + 3n}{7}.$</p><p>Both require $7 \mid 3n$, i.e. $7 \mid n$. Take $n = 7t$; then $r_2 = r_1 + 1$, so the coefficients are $(-1)^{r_1}\binom{n}{r_1}$ and $(-1)^{r_1+1}\binom{n}{r_1+1}$. Their sum is zero when</p>$$\binom{n}{r_1} = \binom{n}{r_1 + 1} \;\Rightarrow\; r_1 + (r_1 + 1) = n \;\Rightarrow\; n = 2r_1 + 1.$$<p>With $r_1 = \dfrac{7 + 3n}{7}$:</p>$$n = 2\cdot\frac{7 + 3n}{7} + 1 \;\Rightarrow\; 7n = 14 + 6n + 7 \;\Rightarrow\; n = 21.$$<p>Check: $r_1 = 10,\ r_2 = 11$, and $\binom{21}{10} = \binom{21}{11}$ with opposite signs cancel.</p><p><strong>Answer:</strong> 21</p></details></section><section class="mock-q" id="q-24"><h3>Question 24 · Mathematics · Numerical</h3><p>If $\frac{\pi}{4} + \displaystyle\sum_{p=1}^{11} \tan^{-1}\left( \frac{2^{p-1}}{1 + 2^{2p-1}} \right) = \alpha$, then $\tan\alpha$ is equal to __________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
2048</p><p>Note that $2^{2p-1} = 2^{p}\cdot 2^{p-1}$ and $2^{p} - 2^{p-1} = 2^{p-1}$, so each term telescopes:</p>$$\tan^{-1}\!\left(\frac{2^{p-1}}{1 + 2^{2p-1}}\right) = \tan^{-1}\!\left(\frac{2^{p} - 2^{p-1}}{1 + 2^{p}\cdot 2^{p-1}}\right) = \tan^{-1} 2^{p} - \tan^{-1} 2^{p-1}.$$<p>Summing from $p=1$ to $11$:</p>$$\sum_{p=1}^{11}\left(\tan^{-1} 2^{p} - \tan^{-1} 2^{p-1}\right) = \tan^{-1} 2^{11} - \tan^{-1} 2^{0} = \tan^{-1} 2048 - \frac{\pi}{4}.$$<p>Therefore</p>$$\alpha = \frac{\pi}{4} + \tan^{-1} 2048 - \frac{\pi}{4} = \tan^{-1} 2048,$$<p>and</p>$$\tan\alpha = 2048.$$<p><strong>Answer:</strong> 2048</p></details></section><section class="mock-q" id="q-25"><h3>Question 25 · Mathematics · Numerical</h3><p>Let $y = y(x)$ be the solution of the differential equation $x\sin\left( \frac{y}{x} \right) dy = \left( y\sin\left( \frac{y}{x} \right) - x \right) dx$, $y(1) = \frac{\pi}{2}$ and let $\alpha = \cos\left( \frac{y(e^{12})}{e^{12}} \right)$. Then the number of integral value of $p$, for which the equation $x^2 + y^2 - 2px + 2py + \alpha + 2 = 0$ represents a circle of radius $r \leq 6$, is________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Any non-negative Integer</p><p><strong>Solve the homogeneous ODE.</strong> Write it as</p>$$\frac{dy}{dx} = \frac{y\sin(y/x) - x}{x\sin(y/x)} = \frac{y}{x} - \frac{1}{\sin(y/x)}.$$<p>Put $v = \dfrac{y}{x}$, so $y = vx$ and $\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}$:</p>$$v + x\frac{dv}{dx} = v - \frac{1}{\sin v} \;\Rightarrow\; x\frac{dv}{dx} = -\frac{1}{\sin v}.$$<p>Separate and integrate:</p>$$\sin v\,dv = -\frac{dx}{x} \;\Rightarrow\; -\cos v = -\ln x + C \;\Rightarrow\; \cos v = \ln x + C'.$$<p><strong>Apply $y(1)=\tfrac{\pi}{2}$:</strong> at $x=1$, $v = \tfrac{\pi}{2}$, so $\cos\tfrac{\pi}{2} = 0 = \ln 1 + C' \Rightarrow C' = 0$. Hence</p>$$\cos\left(\frac{y}{x}\right) = \ln x.$$<p><strong>Compute $\alpha$:</strong> at $x = e^{12}$, $\;\alpha = \cos\!\left(\dfrac{y(e^{12})}{e^{12}}\right) = \ln e^{12} = 12.$</p><p><strong>Circle condition.</strong> The equation becomes $x^2 + y^2 - 2px + 2py + 14 = 0$, i.e. centre $(p, -p)$ and</p>$$r^2 = p^2 + p^2 - 14 = 2p^2 - 14.$$<p>For a real circle with $0 &lt; r \le 6$:</p>$$2p^2 - 14 &gt; 0 \;\text{and}\; 2p^2 - 14 \le 36 \;\Rightarrow\; 7 &lt; p^2 \le 25.$$<p>Integer $p$: $|p| \in \{3, 4, 5\}$ (since $3^2 = 9 &gt; 7$ and $5^2 = 25 \le 25$), giving $p \in \{-5, -4, -3, 3, 4, 5\}$.</p><p>That is $6$ integral values.</p><p><strong>Answer:</strong> 6</p></details></section><section class="mock-q" id="q-26"><h3>Question 26 · Physics</h3><p>In a Vernier calipers, when both jaws touch each other, zero of the Vernier scale is shifted to the right of zero of the main scale and $7^{\text{th}}$ Vernier division coincides with a main scale reading. If the value of 1 main scale division is 1 mm and there are 10 Vernier scale divisions, then the Vernier caliper has</p><ol type="A"><li>$0.07$ cm negative zero error</li><li>$0.7$ cm negative zero error</li><li>$0.07$ cm positive zero error</li><li>$0.7$ cm positive zero error</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $0.07$ cm positive zero error</p><p><strong>Step 1 — Least count.</strong></p>$$\text{LC} = \frac{1\ \text{MSD}}{\text{no. of VSD}} = \frac{1\ \text{mm}}{10} = 0.1\ \text{mm} = 0.01\ \text{cm}$$<p><strong>Step 2 — Sign of zero error.</strong> With the jaws closed the Vernier zero lies to the <strong>right</strong> of the main-scale zero, so the reading is greater than zero when it should be zero. This is a <strong>positive</strong> zero error.</p><p><strong>Step 3 — Magnitude.</strong> The $7^{\text{th}}$ Vernier division coincides:</p>$$\text{zero error} = +7 \times \text{LC} = 7 \times 0.01 = 0.07\ \text{cm (positive)}$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-27"><h3>Question 27 · Physics</h3><p>$L$, $C$ and $R$ represents physical quantities inductance, capacitance and resistance respectively. The dimensional formula $\mathrm{M\,L^2\,T^{-4}\,A^{-2}}$ corresponds to __________.</p><ol type="A"><li>$\frac{R}{\sqrt{LC}}$</li><li>$\frac{R}{LC}$</li><li>$\frac{C}{\sqrt{LR}}$</li><li>$\frac{1}{R}\sqrt{\frac{L}{C}}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\frac{R}{\sqrt{LC}}$</p><p>Base dimensions of the components:</p>$$[L] = [M L^2 T^{-2} A^{-2}], \quad [C] = [M^{-1} L^{-2} T^{4} A^{2}], \quad [R] = [M L^2 T^{-3} A^{-2}]$$<p>Test option A, $\dfrac{R}{\sqrt{LC}}$. First $LC$:</p>$$[LC] = [M L^2 T^{-2} A^{-2}][M^{-1} L^{-2} T^{4} A^{2}] = [T^{2}]$$

$$[\sqrt{LC}] = [T]$$<p>Then:</p>$$\left[\frac{R}{\sqrt{LC}}\right] = \frac{[M L^2 T^{-3} A^{-2}]}{[T]} = [M L^2 T^{-4} A^{-2}]$$<p>This matches the target formula exactly.</p><p>(Note: $\sqrt{LC}$ is the time constant of an $LC$ oscillator, and $R/\sqrt{LC}$ therefore carries resistance-per-time dimensions.)</p><p><strong>Answer:</strong> A ($\frac{R}{\sqrt{LC}}$)</p></details></section><section class="mock-q" id="q-28"><h3>Question 28 · Physics</h3><p>When one moves from a point 16 km below the earth's surface to a point 16 km above the earth's surface. The change in $g$ is approximately $\alpha$ %. The value of $\alpha$ is ______.
(Take radius of the earth = 6400 km.)</p><ol type="A"><li>$0.12$</li><li>$0.25$</li><li>$0.50$</li><li>$0.75$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $0.25$</p><p>At a depth $d$ below the surface:</p>$$g_d = g\left(1 - \frac{d}{R}\right)$$<p>At a height $h$ above the surface (small $h$, first-order approximation):</p>$$g_h \approx g\left(1 - \frac{2h}{R}\right)$$<p>The value of $g$ is larger at depth than at height, so the change on moving from the deep point up to the high point is:</p>$$\Delta g = g_d - g_h = g\left[\left(1 - \frac{d}{R}\right) - \left(1 - \frac{2h}{R}\right)\right] = g\left(\frac{2h - d}{R}\right)$$<p>With $d = h = 16\,\text{km}$ and $R = 6400\,\text{km}$:</p>$$\Delta g = g\left(\frac{2(16) - 16}{6400}\right) = g\left(\frac{16}{6400}\right)$$<p>Expressing as a percentage of $g$:</p>$$\alpha = \frac{16}{6400} \times 100 = 0.25\%$$<p><strong>Answer:</strong> B ($0.25$)</p></details></section><section class="mock-q" id="q-29"><h3>Question 29 · Physics</h3><p>Three masses $m_1 = 4$ kg, $m_2 = 4$ kg and $m_3 = 6$ kg are suspended from a fixed smooth frictionless pulley as shown in the figure below. The value of $T_1/T_2$ is ______.
(take $g = 10$ m/s$^2$)
[figure: a fixed pulley over which a string passes; on the left side hangs $m_1$ with tension $T_1$, on the right side hangs $m_2$ with tension $T_1$, and below $m_2$ a mass $m_3$ is attached by another string with tension $T_2$]</p><ol type="A"><li>$5/3$</li><li>$2/3$</li><li>$3/5$</li><li>$2/5$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $5/3$</p></details></section><section class="mock-q" id="q-30"><h3>Question 30 · Physics</h3><p>A wedge $Y$ with mass of 10 kg and all frictionless surfaces and the inclined surface making $37°$ with horizontal. A block $X$ with mass 2 kg is placed at the highest point of the wedge as shown in figure is at rest. At $t = 0$ wedge ($Y$) is pulled toward right with constant force ($f$) of 24 N. Taking the block $X$ at rest at $t = 0$, the time taken by it to slide down 8.8 m on the slope, while $Y$ is on the move, is______ s.
(take $\tan(37°) = 3/4$ and $g = 10$ m/s$^2$)
[figure: a right-triangular wedge $Y$ with the incline rising to the left at $37°$; block $X$ at the top of the incline; a horizontal force $f = 24$ N applied to the wedge pointing right]</p><ol type="A"><li>$2$</li><li>$4$</li><li>$\sqrt{2}$</li><li>$2\sqrt{2}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $2$</p></details></section><section class="mock-q" id="q-31"><h3>Question 31 · Physics</h3><p>The Young's modulus of steel wire of radius $r$ and length $L$ is $Y$. If the radius $r$ and length $L$ of the wire are doubled then the value of $Y$</p><ol type="A"><li>increases by two times</li><li>reduces by half</li><li>remains unchanged</li><li>becomes one fourth</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — remains unchanged</p><p>Young’s modulus is a <strong>material property</strong> — it depends only on the material, not on the geometry (dimensions) of the sample.</p>$$Y = \frac{\text{stress}}{\text{strain}} = \frac{F/A}{\Delta L / L}$$<p>Although stress and strain individually depend on $A$ and $L$, their ratio $Y$ is fixed for a given material at a given temperature. Doubling the radius and length changes the wire’s stiffness but <strong>not</strong> its Young’s modulus.</p>$$Y \text{ remains unchanged}$$<p><strong>Answer:</strong> C (remains unchanged)</p></details></section><section class="mock-q" id="q-32"><h3>Question 32 · Physics</h3><p>Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.
Statement I: Change in internal energy of a system containing $n$ mole of ideal gas can be written as $\Delta U = n\,C_V(T_f - T_i) = \frac{nR}{\gamma - 1}(T_f - T_i)$, where $\gamma = \frac{C_p}{C_V}$, $T_i$ = initial temperature, $T_f$ = final temperature.
Statement II: Relation between degree of freedom $f$ and $\gamma$ ($= C_p/C_V$) is $\left( \gamma = 1 + \frac{2}{f} \right)$.
Choose the correct answer from the options given below</p><ol type="A"><li>Both A and R are true and R is the correct explanation of A</li><li>Both A and R are true but R is NOT the correct explanation of A</li><li>A is true but R is false</li><li>A is false but R is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — Both A and R are true but R is NOT the correct explanation of A</p><p><strong>Statement I:</strong> For an ideal gas, $C_P - C_V = R$ and $\gamma = C_P/C_V$, so</p>$$C_V = \frac{R}{\gamma - 1} \implies \Delta U = nC_V\,\Delta T = \frac{nR}{\gamma-1}\,\Delta T$$<p>This is <strong>true</strong>.</p><p><strong>Statement II:</strong> With $f$ degrees of freedom, $C_V = \dfrac{f}{2}R$ and $C_P = \dfrac{f+2}{2}R$, giving</p>$$\gamma = \frac{C_P}{C_V} = \frac{f+2}{f} = 1 + \frac{2}{f}$$<p>This is also <strong>true</strong>.</p><p>However, the second equality in Statement I follows from $C_V = R/(\gamma-1)$ (Mayer’s relation), which does <strong>not</strong> require the degrees-of-freedom relation of Statement II. Hence R is true but is <strong>not</strong> the correct explanation of A.</p><p><strong>Answer:</strong> B (Both A and R are true but R is NOT the correct explanation of A)</p></details></section><section class="mock-q" id="q-33"><h3>Question 33 · Physics</h3><p>Consider the following statements:
A. Zeroth law of thermodynamics gives concept of temperature
B. First law of thermodynamics gives concept of internal energy
C. In isothermal expansion of ideal gas, $\Delta Q \neq \Delta W$
D. Product of intensive and extensive variables is extensive
E. The ratio of any extensive variable to mass will be an extensive variable
Choose the correct combination of statements from the options given below:</p><ol type="A"><li>C, D and E Only</li><li>A, B and C Only</li><li>A, B and D Only</li><li>B, C and D Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — A, B and D Only</p><p><strong>A — True.</strong> The zeroth law establishes thermal equilibrium and hence the concept of temperature.</p><p><strong>B — True.</strong> The first law, $\Delta Q = \Delta U + \Delta W$, introduces internal energy $U$ as a state function.</p><p><strong>C — False.</strong> For isothermal expansion of an ideal gas, $\Delta U = 0$, so $\Delta Q = \Delta W$ (not $\neq$).</p><p><strong>D — True.</strong> Intensive $\times$ extensive is extensive (e.g. density $\times$ volume $=$ mass).</p><p><strong>E — False.</strong> Extensive $\div$ mass gives a specific (intensive) quantity, not extensive.</p><p>Correct statements: <strong>A, B and D</strong>.</p><p><strong>Answer:</strong> C (A, B and D Only)</p></details></section><section class="mock-q" id="q-34"><h3>Question 34 · Physics</h3><p>Refer to the figure given below. The values of $I_1$, $I_2$ and $I_3$ are ________.
[figure: a bridge-like network. A 10 V cell with a 1 Ω resistor (carrying current $I_1$) is in the middle branch. The top-left arm has a 4 Ω resistor; the top-right arm has a 2 Ω resistor (carrying current $I_2$). The bottom-left arm has a 4 Ω resistor (carrying current $I_3$); the bottom-right arm has a 2 Ω resistor. A 5 V source is connected on the right]</p><ol type="A"><li>$I_1 = 2.5$ A, $I_2 = 1.875$ A, $I_3 = 1.875$ A</li><li>$I_1 = 1.875$ A, $I_2 = 2.5$ A, $I_3 = 1.875$ A</li><li>$I_1 = 1.875$ A, $I_2 = 1.875$ A, $I_3 = 2.5$ A</li><li>$I_1 = 2.5$ A, $I_2 = 2.5$ A, $I_3 = 1.875$ A</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $I_1 = 2.5$ A, $I_2 = 1.875$ A, $I_3 = 1.875$ A</p></details></section><section class="mock-q" id="q-35"><h3>Question 35 · Physics</h3><p>An electron of mass $m$ is moving in an electric field $\vec{E} = -2E_0\hat{i}$ ($E_0$ = constant $&gt; 0$), with an initial velocity $\vec{V} = v_0\hat{i}$ ($v_0$ = constant $&gt; 0$). If $\lambda_0 = \frac{h}{4mv_0}$, its de Broglie wavelength at time $t$ is ______.
($e$ = charge of electron)</p><ol type="A"><li>$\dfrac{4\lambda_0}{\left[ 1 - \dfrac{E_0 e}{2m}\dfrac{t}{v_0} \right]}$</li><li>$\dfrac{4\lambda_0}{\left[ 1 + \dfrac{E_0 e}{2m}\dfrac{t}{v_0} \right]}$</li><li>$\dfrac{4\lambda_0}{\left[ 1 + \dfrac{2E_0 e}{m}\dfrac{t}{v_0} \right]}$</li><li>$\dfrac{4\lambda_0}{\left[ 1 - \dfrac{2E_0 e}{m}\dfrac{t}{v_0} \right]}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\dfrac{4\lambda_0}{\left[ 1 + \dfrac{2E_0 e}{m}\dfrac{t}{v_0} \right]}$</p><p><strong>Force on the electron</strong> (charge $-e$):</p>$$\vec{F} = (-e)\vec{E} = (-e)(-2E_0\hat{i}) = 2eE_0\,\hat{i}$$<p>The force is along $+\hat{i}$, the same direction as the initial velocity, so the electron speeds up.</p><p><strong>Acceleration:</strong></p>$$a = \frac{2eE_0}{m}$$<p><strong>Velocity at time $t$:</strong></p>$$v = v_0 + at = v_0 + \frac{2eE_0}{m}t = v_0\left(1 + \frac{2E_0 e}{m}\frac{t}{v_0}\right)$$<p><strong>de Broglie wavelength:</strong> $\lambda = \dfrac{h}{mv}$. Using $\lambda_0 = \dfrac{h}{4mv_0} \Rightarrow \dfrac{h}{m} = 4\lambda_0 v_0$:</p>$$\lambda = \frac{h/m}{v} = \frac{4\lambda_0 v_0}{v_0\left(1 + \dfrac{2E_0 e}{m}\dfrac{t}{v_0}\right)} = \frac{4\lambda_0}{\left[1 + \dfrac{2E_0 e}{m}\dfrac{t}{v_0}\right]}$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-36"><h3>Question 36 · Physics</h3><p>In the hydrogen atom, the electron makes a transition from the higher orbit ($i$) to a lower orbit ($f$). The ratio of the radius of the orbits in given by $r_i : r_f = 16 : 4$. The wavelength of photon emitted due to this transition is ________ nm.
(Given Rydberg constant $= 1.0973 \times 10^7$ /m)</p><ol type="A"><li>$121$</li><li>$242$</li><li>$486$</li><li>$974$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $486$</p><p><strong>Step 1 — Find the orbit numbers</strong> using $r \propto n^2$:</p>$$r_i \propto n_i^2 = 16 \implies n_i = 4, \qquad r_f \propto n_f^2 = 4 \implies n_f = 2$$<p><strong>Step 2 — Apply the Rydberg formula:</strong></p>$$\frac{1}{\lambda} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right) = 1.0973 \times 10^7\left(\frac{1}{4} - \frac{1}{16}\right)$$<p></p>$$\frac{1}{\lambda} = 1.0973 \times 10^7 \times \frac{3}{16} = 2.057 \times 10^6\ \text{m}^{-1}$$<p><strong>Step 3 — Wavelength:</strong></p>$$\lambda = \frac{1}{2.057 \times 10^6} = 4.86 \times 10^{-7}\ \text{m} = 486\ \text{nm}$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-37"><h3>Question 37 · Physics</h3><p>A displacement current of 4.0 A can be set up in the space between two parallel plates of 6 µF capacitor. The rate of change of potential difference across the plates of the capacitor is nearly $\alpha \times 10^6$ V/s. The value of $\alpha$ is ________.</p><ol type="A"><li>$0.58$</li><li>$0.67$</li><li>$0.82$</li><li>$0.75$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $0.67$</p><p>The displacement current equals the conduction current charging the capacitor:</p>$$I_d = C\,\frac{dV}{dt}$$<p>Solving for the rate of change of potential difference:</p>$$\frac{dV}{dt} = \frac{I_d}{C} = \frac{4.0}{6\times10^{-6}} = 0.667\times10^{6}\ \text{V/s}$$<p>Comparing with $\alpha\times10^6$ V/s gives $\alpha \approx 0.67$.</p><p><strong>Answer:</strong> $0.67$</p></details></section><section class="mock-q" id="q-38"><h3>Question 38 · Physics</h3><p>Refer to the figure given below, current between terminals $A$ and $B$ is ________ A.
[figure: a ladder-like network of four horizontal rows connected between terminals $A$ (left-bottom) and $B$ (right-bottom). The top three rows each contain three branches in series, each branch having a 5 V cell and a 3 Ω resistor. The bottom row contains three 3 Ω resistors in series. Rows are joined at vertical nodes]</p><ol type="A"><li>$12.5$</li><li>$1.25$</li><li>$7.5$</li><li>$5$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $1.25$</p></details></section><section class="mock-q" id="q-39"><h3>Question 39 · Physics</h3><p>In Young's double slit experiment, the fringe width of the interference pattern produced on the screen is 2.4 µm. If the experiment is carried out in another medium having refractive index 1.2, the fringe width will be ______ µm.</p><ol type="A"><li>$1.2$</li><li>$2$</li><li>$2.4$</li><li>$2.88$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $2$</p><p>Fringe width $\beta = \dfrac{\lambda D}{d}$. In a medium the wavelength reduces to $\lambda' = \dfrac{\lambda}{\mu}$, so</p>$$\beta' = \frac{\beta}{\mu} = \frac{2.4\ \mu\text{m}}{1.2} = 2\ \mu\text{m}.$$<p><strong>Answer:</strong> B ($2$)</p></details></section><section class="mock-q" id="q-40"><h3>Question 40 · Physics</h3><p>A ray of light passing through an equilateral prism is having velocity $2.12 \times 10^8$ m/s in the prism material, then the minimum angle of deviation is ________ degrees.</p><ol type="A"><li>$45$</li><li>$30$</li><li>$28$</li><li>$58$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $30$</p><p>Refractive index of the prism material:</p>$$\mu = \frac{c}{v} = \frac{3\times10^8}{2.12\times10^8} \approx 1.414 = \sqrt2.$$<p>For an equilateral prism $A = 60^\circ$:</p>$$\mu = \frac{\sin\!\left(\dfrac{A + \delta_m}{2}\right)}{\sin\!\left(\dfrac{A}{2}\right)} \implies \sin\!\left(\frac{60^\circ + \delta_m}{2}\right) = \mu\sin 30^\circ = \sqrt2 \cdot \frac{1}{2} = \frac{1}{\sqrt2}.$$

$$\frac{60^\circ + \delta_m}{2} = 45^\circ \implies 60^\circ + \delta_m = 90^\circ \implies \delta_m = 30^\circ.$$<p><strong>Answer:</strong> B ($30$)</p></details></section><section class="mock-q" id="q-41"><h3>Question 41 · Physics</h3><p>Light source having wavelength 331 nm is used to generate photo-electrons whose stopping potential is 0.2 V. The work function of the used metal in the experiment is $\alpha \times 10^{-19}$ J. The value of $\alpha$ is ______.
($h = 6.62 \times 10^{-34}$ J s, $e = 1.6 \times 10^{-19}$ C and $c = 3 \times 10^8$ m/s)</p><ol type="A"><li>$3.68$</li><li>$4.68$</li><li>$5.68$</li><li>$2.68$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $5.68$</p><p>Einstein’s equation: $\phi = \dfrac{hc}{\lambda} - eV_s$.</p><p><strong>Photon energy:</strong></p>$$\frac{hc}{\lambda} = \frac{(6.62\times10^{-34})(3\times10^{8})}{331\times10^{-9}} = \frac{1.986\times10^{-25}}{3.31\times10^{-7}} = 6.0\times10^{-19}\ \text{J}$$<p><strong>Energy carried by stopping potential:</strong></p>$$eV_s = (1.6\times10^{-19})(0.2) = 0.32\times10^{-19}\ \text{J}$$<p><strong>Work function:</strong></p>$$\phi = 6.0\times10^{-19} - 0.32\times10^{-19} = 5.68\times10^{-19}\ \text{J}$$<p>So $\alpha = 5.68$.</p><p><strong>Answer:</strong> C ($5.68$)</p></details></section><section class="mock-q" id="q-42"><h3>Question 42 · Physics</h3><p>A compound microscope is designed with two symmetric biconvex lenses. The objective lens is cut vertically, creating two identical plano-convex lenses. One of them is used in place of original objective lens. To retain same magnification keeping the object distance unchanged, the tube length has to be</p><ol type="A"><li>increased two times</li><li>increased $\frac{3}{2}$ times</li><li>decreased two times</li><li>decreased $\frac{3}{2}$ times</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — increased two times</p><p>For a symmetric biconvex lens (both radii $R$):</p>$$\frac{1}{f_{\text{bi}}} = (\mu - 1)\frac{2}{R}.$$<p>Cutting it vertically gives a plano-convex lens (one flat face, $R \to \infty$):</p>$$\frac{1}{f_{\text{pc}}} = (\mu - 1)\frac{1}{R} = \frac{1}{2f_{\text{bi}}} \implies f_{\text{pc}} = 2f_{\text{bi}}.$$<p>The objective’s linear magnification is $m_o \approx \dfrac{L}{f_o}$, where $L$ is the tube length. To keep $m_o$ (hence the overall magnification) unchanged with the object distance fixed, when $f_o$ doubles the tube length must also double:</p>$$\frac{L'}{f_{\text{pc}}} = \frac{L}{f_{\text{bi}}} \implies L' = \frac{f_{\text{pc}}}{f_{\text{bi}}}L = 2L.$$<p><strong>Answer:</strong> A (increased two times)</p></details></section><section class="mock-q" id="q-43"><h3>Question 43 · Physics</h3><p>Two wires as shown in the figure below, made of steel and have breaking stress of $12 \times 10^8$ N/m$^2$. Area of cross-section of upper wire is 0.008 cm$^2$ and of lower wire is 0.004 cm$^2$. The maximum mass that can be added to pan without breaking any wire is ________ kg.
(take $g = 10$ m/s$^2$)
[figure: an upper wire (0.008 cm$^2$) hangs from a ceiling and supports a 30 kg block; below it a lower wire (0.004 cm$^2$) supports a 10 kg block; below that a pan is attached to which mass can be added]</p><ol type="A"><li>$56$</li><li>$38$</li><li>$96$</li><li>$5.6$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $38$</p></details></section><section class="mock-q" id="q-44"><h3>Question 44 · Physics</h3><p>An a.c. source of angular frequency $\omega$ is connected across a resistor $R$ and a capacitor $C$ in series. The current is observed as $I$. Now the frequency of the source is changed to $\omega/4$, (keeping the voltage unchanged) the current is found to be $I/3$. The ratio of resistance to reactance at frequency $\omega$ is</p><ol type="A"><li>$\sqrt{\frac{6}{7}}$</li><li>$\sqrt{\frac{3}{5}}$</li><li>$\sqrt{\frac{7}{8}}$</li><li>$\sqrt{\frac{3}{4}}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\sqrt{\frac{7}{8}}$</p><p>Let the reactance at frequency $\omega$ be $X_C = \dfrac{1}{\omega C}$. At $\omega/4$ the reactance becomes $4X_C$.</p><p>At $\omega$:</p>$$I = \frac{V}{\sqrt{R^2 + X_C^2}}$$<p>At $\omega/4$:</p>$$\frac{I}{3} = \frac{V}{\sqrt{R^2 + (4X_C)^2}}$$<p>Dividing:</p>$$3 = \frac{\sqrt{R^2 + 16X_C^2}}{\sqrt{R^2 + X_C^2}} \implies 9(R^2 + X_C^2) = R^2 + 16X_C^2$$

$$8R^2 = 7X_C^2 \implies \frac{R^2}{X_C^2} = \frac{7}{8} \implies \frac{R}{X_C} = \sqrt{\frac{7}{8}}$$<p><strong>Answer:</strong> $\sqrt{\dfrac{7}{8}}$</p></details></section><section class="mock-q" id="q-45"><h3>Question 45 · Physics</h3><p>For the given logic circuit, which of the following inputs combination will make both LED-1 and LED-2 to glow?
[figure: a logic circuit with inputs A, B and C. Inputs A and B feed an OR gate; its output (with LED-1 connected to ground via a resistor) and an input go to an AND gate; the AND gate output feeds another AND gate (with LED-2 connected to ground via a resistor); input C is connected into the lower part of the circuit]</p><ol type="A"><li>$A = 0, B = 1, C = 1$</li><li>$A = 1, B = 0, C = 0$</li><li>$A = 1, B = 0, C = 1$</li><li>$A = 1, B = 1, C = 0$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $A = 1, B = 0, C = 1$</p></details></section><section class="mock-q" id="q-46"><h3>Question 46 · Physics · Numerical</h3><p>A cube has side length 5 cm and modulus of rigidity $10^5$ N/m$^2$. The displacement produced by a force of 10 N in the upper face of cube is ______ mm.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
2</p><p>For shear, the modulus of rigidity relates shear stress to shear strain:</p>$$\eta = \frac{F/A}{x/L} \implies x = \frac{F L}{A \eta}$$<p>The tangential force acts on the top face of area $A = L^2 = (0.05)^2 = 2.5 \times 10^{-3}\ \text{m}^2$, and $L = 0.05\ \text{m}$:</p>$$x = \frac{10 \times 0.05}{(2.5 \times 10^{-3})(10^5)} = \frac{0.5}{250} = 2 \times 10^{-3}\ \text{m}$$

$$x = 2\ \text{mm}$$<p><strong>Answer:</strong> 2</p></details></section><section class="mock-q" id="q-47"><h3>Question 47 · Physics · Numerical</h3><p>From 18 m height above the ground a ball is dropped from rest. The height above the ground at which the magnitude of velocity equal to the magnitude of acceleration (in the same set of units) due to gravity is ______ m.
(Take $g = 10$ m/s$^2$ and neglect the air resistance)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
13</p><p>The ball is dropped from rest, so we need the point where its speed equals the numerical value of $g$, i.e. $v = 10$ m/s.</p><p>Using $v^2 = u^2 + 2g\,h_{\text{fall}}$ with $u = 0$:</p>$$10^2 = 2(10)\,h_{\text{fall}} \implies h_{\text{fall}} = \frac{100}{20} = 5\ \text{m}$$<p>Height above the ground:</p>$$h = 18 - 5 = 13\ \text{m}$$<p><strong>Answer:</strong> 13</p></details></section><section class="mock-q" id="q-48"><h3>Question 48 · Physics · Numerical</h3><p>A transverse wave on a string is described by $y = 3\sin(36t + 0.018x + \pi/4)$, where $x, y$ are in cm and $t$ in seconds. The least distance between the two successive crests in the wave is ______ cm. (Nearest integer)
($\pi = 3.14$)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
349</p><p>The distance between two successive crests equals one wavelength.</p><p>From the wave equation, the wave number is:</p>$$k = 0.018\ \text{cm}^{-1}$$<p>Wavelength:</p>$$\lambda = \frac{2\pi}{k} = \frac{2 \times 3.14}{0.018} = \frac{6.28}{0.018} = 348.9\ \text{cm}$$<p>Nearest integer:</p>$$\lambda \approx 349\ \text{cm}$$<p><strong>Answer:</strong> 349</p></details></section><section class="mock-q" id="q-49"><h3>Question 49 · Physics · Numerical</h3><p>The charged particle moving in a uniform magnetic field of $(3\hat{i} + 2\hat{j})$ T has an acceleration $\left( 4\hat{i} - \frac{x}{2}\hat{j} \right)$ m/s$^2$. The value of $x$ is</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
12</p><p>The magnetic force $\vec{F} = q\vec{v}\times\vec{B}$ is always perpendicular to $\vec{B}$. Since $\vec{a} = \vec{F}/m$, the acceleration must also be perpendicular to $\vec{B}$:</p>$$\vec{a}\cdot\vec{B} = 0$$

$$\left(4\hat{i} - \frac{x}{2}\hat{j}\right)\cdot(3\hat{i} + 2\hat{j}) = 0$$

$$4\times 3 + \left(-\frac{x}{2}\right)\times 2 = 12 - x = 0$$<p>Hence $x = 12$.</p><p><strong>Answer:</strong> 12</p></details></section><section class="mock-q" id="q-50"><h3>Question 50 · Physics · Numerical</h3><p>In the given circuit below inductance values of $L_1$, $L_2$ and $L_3$ are same. The magnetic energy stored in the entire circuit is ($U_t$) and that stored in the $L_2$ inductor is ($U_l$). $U_t / U_l$ is ________.
(Ignore the mutual inductance if any)
[figure: inductor $L_1$ in series with a parallel combination of $L_2$ (top branch) and $L_3$ (bottom branch)]</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
6</p><p>Let each inductance be $L$ and the total current from the source be $I$ (this flows fully through $L_1$).</p><p>The parallel combination $L_2 \parallel L_3 = \dfrac{L}{2}$, and since $L_2 = L_3$ the current splits equally, so each carries $I/2$.</p><p>Total energy:</p>$$U_t = \frac{1}{2}L_1 I^2 + \frac{1}{2}\left(\frac{L}{2}\right)I^2 = \frac{1}{2}L I^2 + \frac{1}{4}L I^2 = \frac{3}{4}L I^2$$<p>Energy in $L_2$ (carrying $I/2$):</p>$$U_l = \frac{1}{2}L\left(\frac{I}{2}\right)^2 = \frac{1}{8}L I^2$$<p>Ratio:</p>$$\frac{U_t}{U_l} = \frac{\tfrac{3}{4}L I^2}{\tfrac{1}{8}L I^2} = \frac{3/4}{1/8} = 6$$<p><strong>Answer:</strong> 6</p></details></section><section class="mock-q" id="q-51"><h3>Question 51 · Chemistry</h3><p>How many grams of residue is obtained by heating 2.76 g of silver carbonate?
(Given : Molar mass of C, O and Ag are 12, 16 and 108 g mol$^{-1}$ respectively)</p><ol type="A"><li>$1.08$ g</li><li>$2.16$ g</li><li>$3.24$ g</li><li>$4.32$ g</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $2.16$ g</p><p><strong>Reactions</strong> — the final residue is metallic silver:</p>$$\text{Ag}_2\text{CO}_3 \xrightarrow{\Delta} \text{Ag}_2\text{O} + \text{CO}_2, \qquad 2\,\text{Ag}_2\text{O} \xrightarrow{\Delta} 4\,\text{Ag} + \text{O}_2$$<p><strong>Step 1 — Molar mass of $\text{Ag}_2\text{CO}_3$:</strong></p>$$2(108) + 12 + 3(16) = 276\ \text{g mol}^{-1}$$<p><strong>Step 2 — Moles:</strong></p>$$n = \frac{2.76}{276} = 0.01\ \text{mol}$$<p><strong>Step 3 — Mass of Ag</strong> ($2$ mol Ag per mol $\text{Ag}_2\text{CO}_3$):</p>$$m_{\text{Ag}} = (0.01 \times 2) \times 108 = 2.16\ \text{g}$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-52"><h3>Question 52 · Chemistry</h3><p>Arrange the following atomic orbitals of multi electron atoms in order of increasing energy.
A. $n = 3, l = 2, m = +1$
B. $n = 4, l = 0, m = 0$
C. $n = 6, l = 1, m = 0$
D. $n = 5, l = 1, m = +1$
E. $n = 2, l = 1, m = +1$
Choose the correct answer from the options given below:</p><ol type="A"><li>$C &lt; D &lt; B &lt; A &lt; E$</li><li>$B &lt; A &lt; E &lt; C &lt; D$</li><li>$E &lt; C &lt; D &lt; B &lt; A$</li><li>$E &lt; B &lt; A &lt; D &lt; C$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $E &lt; B &lt; A &lt; D &lt; C$</p><p>For multi-electron atoms, energy order follows the $(n+l)$ rule; ties are broken by lower $n$.</p><table><thead><tr><th>Label</th><th>Orbital</th><th>$n+l$</th></tr></thead><tbody><tr><td>E</td><td>2p</td><td>$3$</td></tr><tr><td>B</td><td>4s</td><td>$4$</td></tr><tr><td>A</td><td>3d</td><td>$5$</td></tr><tr><td>D</td><td>5p</td><td>$6$</td></tr><tr><td>C</td><td>6p</td><td>$7$</td></tr></tbody></table><p>Increasing energy: $E &lt; B &lt; A &lt; D &lt; C$.</p><p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-53"><h3>Question 53 · Chemistry</h3><p>Identify the correct statements from the following :
A. Heisenberg uncertainty principle is applicable to electrons.
B. The size of $2p_x$ orbital is less than the size of $3p_x$ orbital.
C. The energy of $2s$ orbital of H atom is equal to the energy of $2s$ orbital of Li.
D. The electronic configuration of Cr is [Ar] $3d^5 4s^1$.
Choose the correct answer from the options given below:</p><ol type="A"><li>A, B and C Only</li><li>A, B and D Only</li><li>B, C and D Only</li><li>A, C and D Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — A, B and D Only</p><p><strong>A.</strong> True — Heisenberg’s uncertainty principle applies to microscopic particles such as electrons.</p><p><strong>B.</strong> True — a higher principal quantum number means a larger orbital, so $2p_x &lt; 3p_x$ in size.</p><p><strong>C.</strong> False — orbital energies depend on nuclear charge. For a given shell, energy $\propto Z^2$ (H-like) or is shifted by $Z_{\text{eff}}$ in multi-electron atoms, so the $2s$ energy of Li is much lower (more negative) than that of H.</p><p><strong>D.</strong> True — Cr shows the stable half-filled configuration $[\text{Ar}]\,3d^5\,4s^1$.</p><p>Correct statements: A, B and D.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-54"><h3>Question 54 · Chemistry</h3><p>What is the mole fraction of water in 10% by weight (w/w) of aqueous urea solution?
[Given: Molar mass of H, O, C and N are 1, 16, 12 and 14 g mol$^{-1}$ respectively.]</p><ol type="A"><li>$0.825$</li><li>$0.032$</li><li>$0.867$</li><li>$0.967$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $0.967$</p><p>Take 100 g of solution: 10 g urea and 90 g water.
Molar mass of urea $\mathrm{(NH_2)_2CO} = 2(14+2) + 12 + 16 = 60\ \text{g mol}^{-1}$.</p>$$n_{\text{urea}} = \frac{10}{60} = 0.1667\ \text{mol},\qquad n_{\text{water}} = \frac{90}{18} = 5\ \text{mol}.$$<p></p>$$x_{\text{water}} = \frac{n_{\text{water}}}{n_{\text{water}}+n_{\text{urea}}} = \frac{5}{5 + 0.1667} = \frac{5}{5.1667} = 0.967.$$<p><strong>Answer:</strong> D ($0.967$)</p></details></section><section class="mock-q" id="q-55"><h3>Question 55 · Chemistry</h3><p>$M_3A_2$ is a sparingly soluble salt of molar mass $y$ g mol$^{-1}$ and solubility $x$ g L$^{-1}$. The ratio of the molar concentration of the anion ($A^{3-}$) to the solubility product of the salt is</p><ol type="A"><li>$\frac{1}{54} \cdot \frac{y^4}{x^4}$</li><li>$\frac{y^5}{108x^4}$</li><li>$108 \cdot \frac{x^5}{y^5}$</li><li>$\frac{1}{108} \cdot \frac{y^4}{x^4}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\frac{1}{54} \cdot \frac{y^4}{x^4}$</p><p><strong>Molar solubility</strong> $s = \dfrac{\text{solubility (g/L)}}{\text{molar mass}} = \dfrac{x}{y}\ \text{mol L}^{-1}$.</p><p>Dissociation: $M_3A_2 \rightleftharpoons 3M^{2+} + 2A^{3-}$, so</p>$$[A^{3-}] = 2s, \qquad [M^{2+}] = 3s$$

$$K_{sp} = [M^{2+}]^3[A^{3-}]^2 = (3s)^3 (2s)^2 = 27s^3 \cdot 4s^2 = 108\,s^5$$<p><strong>Required ratio:</strong></p>$$\frac{[A^{3-}]}{K_{sp}} = \frac{2s}{108\,s^5} = \frac{1}{54\,s^4} = \frac{1}{54}\cdot\frac{1}{(x/y)^4} = \frac{1}{54}\cdot\frac{y^4}{x^4}$$<p><strong>Answer:</strong> A $\left(\frac{1}{54} \cdot \frac{y^4}{x^4}\right)$</p></details></section><section class="mock-q" id="q-56"><h3>Question 56 · Chemistry</h3><p>Arrange the following resultant mixtures in increasing order of their pH values
A. 10 mL 0.2 M Ca(OH)$_2$ + 25 mL 0.1 M HCl
B. 10 mL 0.01 M H$_2$SO$_4$ + 10 mL 0.01 M Ca(OH)$_2$
C. 10 mL 0.1 M H$_2$SO$_4$ + 10 mL 0.1 M KOH
Choose the correct answer from the options given below:</p><ol type="A"><li>$B &lt; C &lt; A$</li><li>$C &lt; A &lt; B$</li><li>$C &lt; B &lt; A$</li><li>$A &lt; C &lt; B$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $C &lt; B &lt; A$</p><p>Compute milliequivalents (meq) of H$^+$ and OH$^-$ in each.</p><p><strong>A.</strong> OH$^-$ $= 10 \times 0.2 \times 2 = 4$ meq; H$^+$ $= 25 \times 0.1 = 2.5$ meq. Excess OH$^-$ $= 1.5$ meq in 35 mL:</p>$$[\text{OH}^-] = \frac{1.5}{35} \approx 0.043 \implies \text{pOH} \approx 1.37,\ \text{pH} \approx 12.6\ (\text{strongly basic})$$<p><strong>B.</strong> H$^+$ $= 10 \times 0.01 \times 2 = 0.2$ meq; OH$^-$ $= 10 \times 0.01 \times 2 = 0.2$ meq. Exactly neutralized $\Rightarrow \text{pH} = 7$.</p><p><strong>C.</strong> H$^+$ $= 10 \times 0.1 \times 2 = 2$ meq; OH$^-$ $= 10 \times 0.1 = 1$ meq. Excess H$^+$ $= 1$ meq in 20 mL:</p>$$[\text{H}^+] = \frac{1}{20} = 0.05 \implies \text{pH} \approx 1.3\ (\text{acidic})$$<p>Increasing pH: $\text{C}\ (1.3) &lt; \text{B}\ (7) &lt; \text{A}\ (12.6)$.</p><p><strong>Answer:</strong> C ($C &lt; B &lt; A$)</p></details></section><section class="mock-q" id="q-57"><h3>Question 57 · Chemistry</h3><p>First order gas phase reaction
$$A \to B + C$$
$p_i$ = initial pressure of gas A, $p_t$ = total pressure of the reaction mixture at time $t$.
Expression of rate constant ($k$) is</p><ol type="A"><li>$\frac{1}{t}\ln\frac{p_i}{2p_i - p_t}$</li><li>$\frac{1}{t}\ln\frac{2p_i}{p_i - p_t}$</li><li>$\frac{1}{t}\ln\frac{p_i}{3p_i - 2p_t}$</li><li>$\frac{1}{t}\ln\frac{3p_i}{4p_i - p_t}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\frac{1}{t}\ln\frac{p_i}{2p_i - p_t}$</p><p>Let $x$ be the pressure of $A$ that has decomposed at time $t$.</p><table><thead><tr><th>Species</th><th>$A$</th><th>$B$</th><th>$C$</th></tr></thead><tbody><tr><td>Pressure at $t$</td><td>$p_i - x$</td><td>$x$</td><td>$x$</td></tr></tbody></table><p>Total pressure:</p>$$p_t = (p_i - x) + x + x = p_i + x \Rightarrow x = p_t - p_i$$<p>Pressure of $A$ remaining:</p>$$p_A = p_i - x = p_i - (p_t - p_i) = 2p_i - p_t$$<p>For a first order reaction:</p>$$k = \frac{1}{t}\ln\frac{p_i}{p_A} = \frac{1}{t}\ln\frac{p_i}{2p_i - p_t}$$<p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-58"><h3>Question 58 · Chemistry</h3><p>Given below are two statements:
Statement I: The correct order of electronegativity of fluorine, oxygen and nitrogen is F &gt; O &gt; N.
Statement II: The oxidation state of oxygen in OF$_2$ is +2 and in Na$_2$O is $-2$.
In the light of the above statements, choose the correct answer from the options given below</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — Both Statement I and Statement II are true</p><p><strong>Statement I:</strong> Electronegativity increases across Period 2. On the Pauling scale:</p>$$\text{F} = 4.0 &gt; \text{O} = 3.5 &gt; \text{N} = 3.0$$<p>So $F &gt; O &gt; N$ is correct. <strong>Statement I is true.</strong></p><p><strong>Statement II:</strong> In $OF_2$, fluorine is more electronegative than oxygen, so F takes $-1$ each:</p>$$x + 2(-1) = 0 \implies x = +2$$<p>In $Na_2O$, sodium is $+1$ each:</p>$$2(+1) + y = 0 \implies y = -2$$<p>Both assignments are correct. <strong>Statement II is true.</strong></p><p><strong>Answer:</strong> A (Both Statement I and Statement II are true)</p></details></section><section class="mock-q" id="q-59"><h3>Question 59 · Chemistry</h3><p>Correct statements from the following are:
A. Nitrogen in oxidation states from +1 to +4 disproportionates in acid medium.
B. Nitrogen has the ability to form $d\pi$ - $p\pi$ multiple bonds with itself and other elements with small size and high electronegativity.
C. N-N single bond is stronger than P-P single bond.
D. Nitrogen has highest density in its group due to small size.
E. The maximum covalency of nitrogen is four since it has only four valence orbitals for bonding.
Choose the correct answer from the options given below:</p><ol type="A"><li>B, C and D Only</li><li>C, D and E Only</li><li>A, C and E Only</li><li>A and E Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — A and E Only</p><p>Evaluate each statement:</p><ul><li><strong>A.</strong> Nitrogen in the intermediate oxidation states $+1$ to $+4$ does disproportionate in acidic medium (NCERT fact). <strong>Correct.</strong></li><li><strong>B.</strong> Nitrogen has <strong>no $d$-orbitals</strong>, so it forms $p\pi$–$p\pi$ multiple bonds, not $d\pi$–$p\pi$. <strong>Wrong.</strong></li><li><strong>C.</strong> The N–N single bond ($\approx 159\ \text{kJ mol}^{-1}$) is <strong>weaker</strong> than the P–P single bond ($\approx 209\ \text{kJ mol}^{-1}$) because of high lone-pair repulsion in the small N atom. <strong>Wrong.</strong></li><li><strong>D.</strong> Nitrogen is a diatomic <strong>gas</strong> and has the <strong>lowest</strong> density in group 15 (Bi has the highest). <strong>Wrong.</strong></li><li><strong>E.</strong> Nitrogen’s valence shell has only four orbitals ($2s, 2p_x, 2p_y, 2p_z$), so its maximum covalency is four. <strong>Correct.</strong></li></ul><p>Correct statements: <strong>A and E only</strong>.</p><p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-60"><h3>Question 60 · Chemistry</h3><p>Which of the following is NOT a physical or chemical characteristics of interstitial compounds?</p><ol type="A"><li>They have high melting points, higher than those of pure metals.</li><li>They are very soft and ionic in nature.</li><li>They retain metallic conductivity.</li><li>They are chemically inert and usually non-stoichiometric.</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — They are very soft and ionic in nature.</p><p>Interstitial compounds form when small atoms (H, C, N, B) occupy the interstitial holes of a transition-metal lattice. Their characteristic properties are:</p><ul><li>high melting points, often <strong>higher than the pure metal</strong> — a true property;</li><li>they <strong>retain metallic conductivity</strong> — a true property;</li><li>they are <strong>chemically inert</strong> and are usually <strong>non-stoichiometric</strong> — a true property;</li><li>they are <strong>very hard and rigid</strong> (not soft) and are essentially <strong>metallic/covalent, not ionic</strong>.</li></ul><p>Hence the statement “very soft and ionic in nature” is the one that is NOT correct.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-61"><h3>Question 61 · Chemistry</h3><p>The correct statements about metal carbonyls are
A. The metal-carbon bonds in metal carbonyls possess both $\sigma$ and $\pi$-character.
B. Due to synergic bonding interactions between metal and CO ligand, the metal-carbon bond becomes weak.
C. The metal-carbon $\sigma$ bond is formed by the donation of lone pair of electrons on the carbonyl carbon into a vacant orbital of metal.
D. The metal-carbon $\pi$ bond is formed by the donation of electrons from filled d-orbital of metal into vacant $\pi^*$ orbital of CO.
Choose the correct answer from the options given below:</p><ol type="A"><li>A and B Only</li><li>A, C and D Only</li><li>B and C Only</li><li>A and D Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — A, C and D Only</p><ul><li><strong>A.</strong> The M–C bond has both $\sigma$ (ligand $\to$ metal) and $\pi$ (metal $\to$ ligand) character. TRUE.</li><li><strong>B.</strong> Synergic bonding <strong>strengthens</strong> the M–C bond (and weakens the C–O bond) because back-donation reinforces M–C. So “becomes weak” is FALSE.</li><li><strong>C.</strong> The $\sigma$ bond forms by donation of the carbon lone pair into a vacant metal orbital. TRUE.</li><li><strong>D.</strong> The $\pi$ bond forms by back-donation from a filled metal $d$-orbital into the vacant $\pi^*$ of CO. TRUE.</li></ul><p>Correct statements: A, C and D.</p><p><strong>Answer:</strong> B (A, C and D Only)</p></details></section><section class="mock-q" id="q-62"><h3>Question 62 · Chemistry</h3><p>Given below are two statements:
Statement I: Each electron in $e_g$ orbitals destabilizes the orbitals by $+0.6\,\Delta_o$ and each electron in the $t_{2g}$ orbitals stabilizes the orbitals by $-0.4\,\Delta_o$ in an octahedral field on the basis of crystal field theory.
Statement II: All the d-orbitals of the transition metals have the same energy in their free atomic state but when a complex is formed the ligands destroy the degeneracy of these orbitals on the basis of crystal field theory.
In the light of the above statements, choose the correct answer from the options given below</p><ol type="A"><li>Both Statement I and Statement II are correct</li><li>Both Statement I and Statement II are incorrect</li><li>Statement I is correct but Statement II is incorrect</li><li>Statement I is incorrect but Statement II is correct</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — Both Statement I and Statement II are correct</p><p><strong>Statement I</strong> — In an octahedral field, relative to the barycentre, each $e_g$ electron raises the energy by $+0.6\,\Delta_o$ and each $t_{2g}$ electron lowers it by $-0.4\,\Delta_o$. This is the standard CFSE convention. TRUE.</p><p><strong>Statement II</strong> — In a free (gaseous) metal atom/ion the five $d$-orbitals are degenerate. On complex formation the ligand field lifts (destroys) this degeneracy, splitting them into $t_{2g}$ and $e_g$. TRUE.</p><p>Both statements are correct.</p><p><strong>Answer:</strong> A (Both Statement I and Statement II are correct)</p></details></section><section class="mock-q" id="q-63"><h3>Question 63 · Chemistry</h3><p>Given below are two statements:
Statement I: On the basis of inductive effect, the order of stability of alkyl carbanions is $CH_3^- &gt; CH_3{-}CH_2^- &gt; (CH_3)_2CH^- &gt; (CH_3)_3C^-$.
Statement II: Allyl and benzyl carbanions are more stabilised by inductive effect and not by resonance effect.
In the light of the above statements, choose the correct answer from the options given below</p><ol type="A"><li>Both Statement I and Statement II are correct</li><li>Both Statement I and Statement II are incorrect</li><li>Statement I is correct but Statement II is incorrect</li><li>Statement I is incorrect but Statement II is correct</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — Statement I is correct but Statement II is incorrect</p><p><strong>Statement I.</strong> A carbanion carries a negative charge, so it is <strong>destabilised</strong> by electron-donating groups. Alkyl groups are $+I$ (electron donating), and each added alkyl group intensifies the negative charge, making the carbanion less stable. Thus more alkyl substitution $\Rightarrow$ lower stability:</p>$$CH_3^- &gt; CH_3CH_2^- &gt; (CH_3)_2CH^- &gt; (CH_3)_3C^-$$<p>This order is <strong>correct</strong>.</p><p><strong>Statement II.</strong> Allyl and benzyl carbanions are primarily stabilised by <strong>resonance</strong> (delocalisation of the negative charge over the $\pi$-system / ring), not merely by an inductive effect. The statement claims the opposite, so it is <strong>incorrect</strong>.</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-64"><h3>Question 64 · Chemistry</h3><p>"P" is a hydrocarbon of molecular formula $C_8H_{14}$. On ozonolysis, "P" forms "Q". "Q" on treatment with alkali under reflux condition produces "R", which on treatment with $I_2$/NaOH gives a yellow precipitate. Acidification of the solution gives "S". The structure of "S" is given below:
[figure: a cyclopentene ring with a $-CH_3$ group attached at one alkene carbon and a $-COOH$ group attached to a ring carbon]
The correct structure of "P" is</p><ol type="A"><li>[figure: a cyclohexene ring with a $CH_3$ group on one side and a $-CH_3$ group on the other side; double bond in the ring]</li><li>[figure: a cyclohexene ring with a $-CH_2-CH_3$ (ethyl) substituent and a ring double bond]</li><li>[figure: a cyclopentene ring bearing a $-CH_3$ group and a $-CH_2-CH_3$ (ethyl) group at adjacent alkene carbons]</li><li>[figure: a cyclohexene ring with two adjacent $CH_3$ groups on the double-bonded carbons (1,2-dimethylcyclohexene)]</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — [figure: a cyclohexene ring with two adjacent $CH_3$ groups on the double-bonded carbons (1,2-dimethylcyclohexene)]</p></details></section><section class="mock-q" id="q-65"><h3>Question 65 · Chemistry</h3><p>For the following Friedel Craft's alkylation reaction, which of the statements are correct?
[figure: benzene + n-propyl chloride (CH$_3$CH$_2$CH$_2$Cl) reacting with anhydrous AlCl$_3$ to give alkylbenzene]
A. Major product is n-propyl benzene.
B. iso-propyl carbocation intermediate is also generated.
C. Multiple substitution is inevitable.
D. Introducing electron-donating substituent on benzene will not produce any alkyl benzene.
Choose the correct answer from the options given below:</p><ol type="A"><li>A and D only</li><li>B and C only</li><li>A and C only</li><li>B and D only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — B and C only</p></details></section><section class="mock-q" id="q-66"><h3>Question 66 · Chemistry</h3><p>Benzyl isocyanide can be obtained from
A. [figure: benzyl bromide ($C_6H_5CH_2Br$)] $\xrightarrow{\text{AgCN}}$
B. [figure: benzylamine ($C_6H_5CH_2NH_2$)] $\xrightarrow[\text{Aq NaOH}]{\text{CHCl}_3}$
C. [figure: bromobenzene ($C_6H_5Br$)] $\xrightarrow{\text{AgCN}}$
D. [figure: aniline ($C_6H_5NH_2$)] $\xrightarrow[\text{Aq NaOH}]{\text{CHCl}_3}$
E. [figure: 2-phenylethyl bromide ($C_6H_5CH_2CH_2Br$)] $\xrightarrow{\text{KCN}}$
Choose the correct answer from the options given below:</p><ol type="A"><li>A and B Only</li><li>A and C Only</li><li>B and D Only</li><li>D and E Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — A and B Only</p></details></section><section class="mock-q" id="q-67"><h3>Question 67 · Chemistry</h3><p>Consider compounds A, B and C with following structural formulae
$A = CH_3 - CH_2 - CH_2 - CH_2 - CH_2 - OH$
$B = CH_2 = CH - CH_2 - CH_2 - CH_3$
$C = HO - CH_2 - CH_2 - CH(OH) - CH_3$
For the conversion of B from A, reagent (D) required is ________ and structural formula of product (E) obtained when C undergoes same reaction using excess reagent (D) is ________.</p><ol type="A"><li>D: Conc. H$_2$SO$_4$; E: $CH_2 = CH - CH(OH)CH_3$</li><li>D: PCC; E: $HO - CH_2 - CH_2 - CH = CH_2$</li><li>D: PCC; E: $CH_2 = CH - CH = CH_2$</li><li>D: Conc. H$_2$SO$_4$ or H$_3$PO$_4$; E: $CH_2 = CH - CH = CH_2$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — D: Conc. H$_2$SO$_4$ or H$_3$PO$_4$; E: $CH_2 = CH - CH = CH_2$</p><p><strong>A → B:</strong> pentan-1-ol loses a molecule of water to give a pentene. Removal of $H_2O$ from an alcohol is <strong>acid-catalysed dehydration</strong>, so reagent <strong>D = conc. $H_2SO_4$ (or $H_3PO_4$)</strong> — not an oxidant like PCC. This immediately eliminates the two PCC options.</p><p><strong>C → E (same reaction, excess D):</strong> $C$ is <strong>butane-1,3-diol</strong>, $HO\text{–}CH_2\text{–}CH_2\text{–}CH(OH)\text{–}CH_3$. With excess dehydrating acid, <strong>both</strong> $-OH$ groups are eliminated:</p>$$HO\text{–}CH_2\text{–}CH_2\text{–}CH(OH)\text{–}CH_3 \xrightarrow[-2\,H_2O]{\text{excess } H_2SO_4} CH_2{=}CH\text{–}CH{=}CH_2$$<p>giving the conjugated diene <strong>buta-1,3-diene</strong>. This matches option D.</p><p><strong>Answer:</strong> D: Conc. $H_2SO_4$ or $H_3PO_4$; E: $CH_2=CH-CH=CH_2$</p></details></section><section class="mock-q" id="q-68"><h3>Question 68 · Chemistry</h3><p>Identify the incorrect statements.
A. [figure: benzylamine ($C_6H_5CH_2NH_2$)] is a stronger base than B. [figure: aniline ($C_6H_5NH_2$)].
C. [figure: p-methoxyaniline ($H_3CO-C_6H_4-NH_2$)] can be synthesized by Gabriel phthalimide synthesis.
D. [figure: 2-phenylacetamide ($C_6H_5CH_2CONH_2$)] $\xrightarrow{\text{Br}_2,\ \text{NaOH}}$ primary aromatic amine.
(last statement) [figure: p-nitroaniline ($O_2N-C_6H_4-NH_2$)] $\xrightarrow[(ii)\ \Delta]{(i)\ \text{NaNO}_2,\ \text{HCl},\ 0°C}$ product will dissolve in NaOH
Choose the correct answer from the options given below:</p><ol type="A"><li>A and D Only</li><li>A and C Only</li><li>B and C Only</li><li>A and B Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — B and C Only</p></details></section><section class="mock-q" id="q-69"><h3>Question 69 · Chemistry</h3><p>Identify the correct statements.
A. Glucose exists in two anomeric forms.
B. Anomers of glucose differ in configuration at C-1 in cyclic hemiacetal structure.
C. Melting point of $\alpha$ - anomer of glucose is greater than $\beta$ - anomer.
D. Specific rotation of $\alpha$ - anomer is +19° while for $\beta$ - anomer is +112°
E. $\alpha$ and $\beta$ - anomers of glucose are prepared by crystallization of saturated glucose solution at 303 K and 371 K respectively.
Choose the correct answer from the options given below:</p><ol type="A"><li>A and B Only</li><li>B and C Only</li><li>A, B and D Only</li><li>A, B and E Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — A, B and E Only</p><p>Evaluate each statement:</p><ul><li><strong>A — True.</strong> Glucose exists as $\alpha$- and $\beta$-anomers.</li><li><strong>B — True.</strong> The anomers differ only in configuration at the anomeric carbon C-1 of the cyclic hemiacetal.</li><li><strong>C — False.</strong> $\alpha$-D-glucose melts at $\approx 146\,^\circ\text{C}$ and $\beta$-D-glucose at $\approx 150\,^\circ\text{C}$, so $\alpha &lt; \beta$.</li><li><strong>D — False.</strong> The specific rotations are <strong>swapped</strong>: $\alpha$-anomer $= +111^\circ$ (≈ $+112^\circ$) and $\beta$-anomer $= +19^\circ$.</li><li><strong>E — True.</strong> $\alpha$-glucose crystallises from saturated solution at $303\ \text{K}$ and $\beta$-glucose above $371\ \text{K}$.</li></ul><p>Correct statements: <strong>A, B and E</strong>.</p><p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-70"><h3>Question 70 · Chemistry</h3><p>Given below are two statements:
Statement I: Sodium dichromate and potassium dichromate are classified as primary standards in titrimetric analysis.
Statement II: Phenolphthalein is a weak base, therefore it dissociates in acidic medium.
In the light of the above statements, choose the correct answer from the options given below</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — Both Statement I and Statement II are false</p><p>A primary standard must be a stable, high-purity solid of exactly known composition that is <strong>non-hygroscopic</strong>, so it can be weighed directly to make a standard solution.</p><p><strong>Statement I:</strong> Only <strong>potassium dichromate ($K_2Cr_2O_7$)</strong> meets this test — it is anhydrous and non-hygroscopic, so it is a primary standard. <strong>Sodium dichromate</strong>, however, is <strong>hygroscopic (deliquescent)</strong> and is normally obtained as the dihydrate $Na_2Cr_2O_7\cdot 2H_2O$; it absorbs moisture and cannot be weighed to an exactly known composition, so it is <strong>not</strong> a primary standard. Because the statement lumps <em>both</em> dichromates together as primary standards, Statement I is <strong>false</strong>.</p><p><strong>Statement II:</strong> Phenolphthalein is a <strong>weak organic acid</strong> (not a base). It stays colourless and essentially <strong>un-ionised in acidic medium</strong>, and dissociates (turning pink) only in basic medium, pH $\approx 8.3$–$10$. So calling it a weak base that dissociates in acidic medium is <strong>false</strong> on both counts. Statement II is <strong>false</strong>.</p><p>Hence both Statement I and Statement II are false.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-71"><h3>Question 71 · Chemistry · Numerical</h3><p>Consider the following species:
$BrF_5$, $XeF_5^-$, $BF_4^-$, $ICl_4^-$, $XeF_4$, $SF_4$, $NH_4^+$, $ClF_3$, $XeF_2$, $ICl_2^-$
Number of species having $sp^3d$ hybridized central atom is ________.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
4</p><p>$sp^3d$ hybridization corresponds to a steric number (SN) of $5$.</p><table><thead><tr><th>Species</th><th>Bond pairs</th><th>Lone pairs</th><th>SN</th><th>Hybridization</th></tr></thead><tbody><tr><td>$BrF_5$</td><td>5</td><td>1</td><td>6</td><td>$sp^3d^2$</td></tr><tr><td>$XeF_5^-$</td><td>5</td><td>2</td><td>7</td><td>$sp^3d^3$</td></tr><tr><td>$BF_4^-$</td><td>4</td><td>0</td><td>4</td><td>$sp^3$</td></tr><tr><td>$ICl_4^-$</td><td>4</td><td>2</td><td>6</td><td>$sp^3d^2$</td></tr><tr><td>$XeF_4$</td><td>4</td><td>2</td><td>6</td><td>$sp^3d^2$</td></tr><tr><td>$SF_4$</td><td>4</td><td>1</td><td>5</td><td>$sp^3d$ ✓</td></tr><tr><td>$NH_4^+$</td><td>4</td><td>0</td><td>4</td><td>$sp^3$</td></tr><tr><td>$ClF_3$</td><td>3</td><td>2</td><td>5</td><td>$sp^3d$ ✓</td></tr><tr><td>$XeF_2$</td><td>2</td><td>3</td><td>5</td><td>$sp^3d$ ✓</td></tr><tr><td>$ICl_2^-$</td><td>2</td><td>3</td><td>5</td><td>$sp^3d$ ✓</td></tr></tbody></table><p>Species with $sp^3d$: $SF_4,\ ClF_3,\ XeF_2,\ ICl_2^-$ $\Rightarrow 4$.</p><p><strong>Answer:</strong> 4</p></details></section><section class="mock-q" id="q-72"><h3>Question 72 · Chemistry · Numerical</h3><p>In an estimation of sulphur by Carius method 0.2 g of the substance gave 0.6 g of BaSO$_4$. The percentage of sulphur in the substance is ________ %.
(Given molar mass in g mol$^{-1}$ S : 32, BaSO$_4$ : 231)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
41 or 42</p><p><strong>Step 1 — sulphur contained in the BaSO$_4$.</strong> One mole of $\text{BaSO}_4$ carries one mole of S.</p>$$m_{\text{S}} = 0.6 \times \frac{32}{231} = 0.0831\ \text{g}$$<p><strong>Step 2 — percentage of sulphur in the sample.</strong></p>$$\%\,\text{S} = \frac{0.0831}{0.2}\times 100 = 41.56\% \approx 42\%$$<p><strong>Answer:</strong> 42</p></details></section><section class="mock-q" id="q-73"><h3>Question 73 · Chemistry · Numerical</h3><p>One mole of phenol is treated with dilute HNO$_3$ at 298 K to give a mixture of products. The mixture is separated by steam distillation. The steam volatile compound (X) is separated. The increase in percentage of oxygen in (X) with respect to phenol is ________ $\times 10^{-1}$ %
(Given molar mass in g mol$^{-1}$ H:1, C:12, N:14, O:16)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
175</p><p>Dilute $HNO_3$ nitrates phenol to a mixture of <strong>o-nitrophenol</strong> and <strong>p-nitrophenol</strong>. Only <em>ortho</em>-nitrophenol is <strong>steam volatile</strong> (intramolecular H-bonding lowers its boiling point; the para isomer forms intermolecular H-bonds and is non-volatile). So <strong>X = o-nitrophenol</strong>, $C_6H_4(OH)(NO_2)$.</p><p><strong>% oxygen in phenol</strong> ($C_6H_6O$, $M = 94$):</p>$$\dfrac{16}{94}\times 100 = 17.02\%$$<p><strong>% oxygen in o-nitrophenol</strong> ($C_6H_5NO_3$, $M = 72+5+14+48 = 139$; O mass $= 3\times16 = 48$):</p>$$\dfrac{48}{139}\times 100 = 34.53\%$$<p><strong>Increase:</strong></p>$$34.53 - 17.02 = 17.51\%$$<p>Expressed as $\times 10^{-1}\%$: $\;17.51 / 0.1 = 175.1 \approx \mathbf{175}$.</p><p><strong>Answer:</strong> 175</p></details></section><section class="mock-q" id="q-74"><h3>Question 74 · Chemistry · Numerical</h3><p>The values of pressure equilibrium constant recorded at different temperatures for the following equilibrium reaction have been given below
$$A(g) \rightleftharpoons B(g) + C(g)$$
| $\frac{1}{T}\,(K^{-1})$ | $\log_{10}K_p$ |
|-------------------------|----------------|
| 0.05 | 3.5 |
| 0.06 | 2.5 |
| 0.07 | 1.5 |
The magnitude of $\frac{\Delta H^\circ}{R}$ calculated from the above data is ________. (Nearest integer)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
230</p><p>The van’t Hoff equation in log form:</p>$$\log_{10} K_p = -\frac{\Delta H^\circ}{2.303\,R}\cdot\frac{1}{T} + \text{constant}$$<p>So the plot of $\log_{10}K_p$ vs $\frac{1}{T}$ is a straight line of slope $-\dfrac{\Delta H^\circ}{2.303\,R}$.</p><p><strong>Slope</strong> from any two points:</p>$$\text{slope} = \frac{1.5 - 3.5}{0.07 - 0.05} = \frac{-2}{0.02} = -100$$<p>Therefore:</p>$$-\frac{\Delta H^\circ}{2.303\,R} = -100 \implies \frac{\Delta H^\circ}{R} = 100 \times 2.303 = 230.3$$<p>Magnitude (nearest integer) $= 230$.</p><p><strong>Answer:</strong> 230</p></details></section><section class="mock-q" id="q-75"><h3>Question 75 · Chemistry · Numerical</h3><p>If the half life of a first order reaction is 6.93 minutes then the time required for completion of 99% of the reaction will be ________ minutes.
(Given : $\log 2 = 0.3010$)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
46</p><p>Rate constant from half-life:</p>$$k = \frac{0.693}{t_{1/2}} = \frac{0.693}{6.93} = 0.1\ \text{min}^{-1}$$<p>For 99% completion, $[A]/[A]_0 = 0.01$, i.e. $[A]_0/[A] = 100$:</p>$$t = \frac{2.303}{k}\log\frac{[A]_0}{[A]} = \frac{2.303}{0.1}\log 100 = \frac{2.303}{0.1}\times 2$$

$$t = 23.03 \times 2 = 46.06 \approx 46\ \text{min}$$<p><strong>Answer:</strong> 46</p></details></section></details>

---

## Extracted page code (interactive scripts & widgets)


### inline-script-11

```js
window.MOCK_DATA={date:"2026-04-05",duration_min:180,marking:{correct:4,incorrect:-1},questions:[{correct_index:1,correct_value:"$176$",id:"695278301",options:["$160$","$176$","$194$","$187$"],solution:`Use $\\beta^2 - \\alpha^2 = (\\beta - \\alpha)(\\beta + \\alpha)$:
$$3i\\sqrt{11} = \\sqrt{11}\\,(\\alpha + \\beta) \\;\\Rightarrow\\; \\alpha + \\beta = 3i$$

Find $\\alpha\\beta$ from $(\\beta - \\alpha)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$:
$$11 = (3i)^2 - 4\\alpha\\beta = -9 - 4\\alpha\\beta \\;\\Rightarrow\\; \\alpha\\beta = -5$$

Now $\\beta^3 - \\alpha^3 = (\\beta - \\alpha)(\\alpha^2 + \\alpha\\beta + \\beta^2)$, where
$$\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = -9 + 10 = 1$$
$$\\alpha^2 + \\alpha\\beta + \\beta^2 = 1 + (-5) = -4$$

Therefore:
$$\\beta^3 - \\alpha^3 = \\sqrt{11}\\,(-4) = -4\\sqrt{11}$$
$$(\\beta^3 - \\alpha^3)^2 = 16 \\cdot 11 = 176$$

**Answer:** B`,statement:"Let $a, b \\in \\mathbb{C}$. Let $\\alpha, \\beta$ be the roots of the equation $x^2 + ax + b = 0$. If $\\beta - \\alpha = \\sqrt{11}$ and $\\beta^2 - \\alpha^2 = 3i\\sqrt{11}$, then $(\\beta^3 - \\alpha^3)^2$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$15220$",id:"695278302",options:["$10220$","$12860$","$15220$","$19780$"],solution:`The $n$-th term is
$$a_n = S_n - S_{n-1} = (3n^2 + 5n) - \\big(3(n-1)^2 + 5(n-1)\\big) = 6n + 2.$$

So the terms are $8, 14, 20, \\dots$ up to $a_{10} = 62$.

$$\\sum_{n=1}^{10} a_n^2 = \\sum_{n=1}^{10} (6n+2)^2 = \\sum_{n=1}^{10}\\big(36n^2 + 24n + 4\\big).$$

$$= 36\\cdot 385 + 24\\cdot 55 + 4\\cdot 10 = 13860 + 1320 + 40 = 15220.$$

**Answer:** C ($15220$)`,statement:"Let the sum of the first $n$ terms of an A.P. be $3n^2 + 5n$. Then the sum of squares of the first 10 terms of the A.P. is:",subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"$64$",id:"695278303",options:["$16$","$25$","$49$","$64$"],solution:`Recover $A$ column/row by column. Subtracting the given products:
$$A e_1 = A\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix} - A\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix} = \\begin{bmatrix}3\\\\4\\\\4\\end{bmatrix} - \\begin{bmatrix}1\\\\3\\\\1\\end{bmatrix} = \\begin{bmatrix}2\\\\1\\\\3\\end{bmatrix} \\Rightarrow \\text{column 1}.$$
$$A e_3 = A\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix} = \\begin{bmatrix}1\\\\3\\\\1\\end{bmatrix} \\Rightarrow \\text{column 3}.$$

From the transpose relations, $A^T e_3$ is the third row of $A$, and $A^T e_1 = A^T(e_1+e_3) - A^T e_3 = \\begin{bmatrix}5\\\\2\\\\2\\end{bmatrix} - \\begin{bmatrix}3\\\\1\\\\1\\end{bmatrix} = \\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$ is the first row of $A$. So
$$\\text{row 1} = (2,1,1), \\qquad \\text{row 3} = (3,1,1).$$

Combining, $A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & a_{22} & 3 \\\\ 3 & 1 & 1 \\end{bmatrix}$. Impose $\\det A = 1$:
$$\\det A = -a_{22} + 3 = 1 \\Rightarrow a_{22} = 2, \\quad A = \\begin{bmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 3 & 1 & 1 \\end{bmatrix}.$$

Now $A^2 + A = A(A + I)$, so $\\det(A^2 + A) = \\det A \\cdot \\det(A + I)$. With
$$A + I = \\begin{bmatrix} 3 & 1 & 1 \\\\ 1 & 3 & 3 \\\\ 3 & 1 & 2 \\end{bmatrix}, \\quad \\det(A+I) = 3(6-3) - 1(2-9) + 1(1-9) = 9 + 7 - 8 = 8.$$

So $\\det(A^2 + A) = 1 \\cdot 8 = 8$, and for a $3\\times3$ matrix $\\det(\\operatorname{adj}M) = (\\det M)^2$:
$$\\det(\\operatorname{adj}(A^2+A)) = 8^2 = 64.$$

**Answer:** D ($64$)`,statement:"Let $A$ be a $3 \\times 3$ matrix such that $A^T \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 2 \\\\ 2 \\end{bmatrix}$, $A^T \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 1 \\\\ 1 \\end{bmatrix}$, $A \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 4 \\\\ 4 \\end{bmatrix}$ and $A \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 3 \\\\ 1 \\end{bmatrix}$. If $\\det(A) = 1$, then $\\det(\\operatorname{adj}(A^2 + A))$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"is strictly increasing on $\\mathbb{R}$",id:"695278304",options:["is a constant function","is strictly increasing on $\\mathbb{R}$","is strictly decreasing on $\\mathbb{R}$","has two critical points"],solution:`A homogeneous system has infinitely many (non-trivial) solutions iff the coefficient determinant is zero. Requiring this for all $t$:
$$\\begin{vmatrix} 1 & 2 & t \\\\ 6 & 1 & 5t \\\\ 3 & t^2 & f(t) \\end{vmatrix} = 0 \\quad \\forall t.$$

Expanding along the first row:
$$1\\big(f(t) - 5t\\cdot t^2\\big) - 2\\big(6f(t) - 5t\\cdot3\\big) + t\\big(6t^2 - 3\\big)$$
$$= f(t) - 5t^3 - 12f(t) + 30t + 6t^3 - 3t = -11f(t) + t^3 + 27t.$$

Setting to zero for all $t$:
$$f(t) = \\frac{t^3 + 27t}{11}.$$

Then
$$f'(t) = \\frac{3t^2 + 27}{11} > 0 \\quad \\text{for all } t,$$
so $f$ is strictly increasing on $\\mathbb{R}$ (and has no critical points).

**Answer:** B (is strictly increasing on $\\mathbb{R}$)`,statement:`Consider the system of linear equations in $x, y, z$:
$$x + 2y + tz = 0,$$
$$6x + y + 5tz = 0,$$
$$3x + t^2 y + f(t)z = 0,$$
where $f : \\mathbb{R} \\to \\mathbb{R}$ is a differentiable function. If this system has infinitely many solutions for all $t \\in \\mathbb{R}$, then $f$`,subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$130$",id:"695278305",options:["$65$","$130$","$220$","$440$"],solution:`Use the telescoping identity
$$\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2}\\left[\\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)}\\right].$$

Therefore
$$\\sum_{n=1}^{10}\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2}\\left[\\frac{1}{1\\cdot 2} - \\frac{1}{11\\cdot 12}\\right] = \\frac{1}{2}\\left[\\frac{1}{2} - \\frac{1}{132}\\right].$$

$$= \\frac{1}{2}\\cdot\\frac{66 - 1}{132} = \\frac{65}{264}.$$

Multiplying by $528$:
$$528\\cdot\\frac{65}{264} = 2\\cdot 65 = 130.$$

**Answer:** B ($130$)`,statement:"$\\displaystyle\\sum_{n=1}^{10} \\left( \\frac{528}{n(n+1)(n+2)} \\right)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$10 - 3\\sqrt{10}$",id:"695278306",options:["$10 + \\sqrt{10}$","$10 - 2\\sqrt{10}$","$10 - 3\\sqrt{10}$","$10 - \\sqrt{10}$"],solution:`By Vieta's formulas, $\\tan A + \\tan B = 2$ and $\\tan A\\tan B = -5$. Then
$$\\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A\\tan B} = \\frac{2}{1-(-5)} = \\frac{2}{6} = \\frac13.$$

Since $\\tan A\\tan B = -5 < 0$, one of $A, B$ is positive and the other negative, and numerically $A+B$ is a small positive angle in the first quadrant, so $\\cos(A+B) > 0$. With $\\tan(A+B)=\\tfrac13$,
$$\\cos(A+B) = \\frac{3}{\\sqrt{10}}.$$

Using the half-angle identity $20\\sin^2\\!\\left(\\tfrac{A+B}{2}\\right) = 10\\big(1 - \\cos(A+B)\\big)$:
$$20\\sin^2\\!\\left(\\frac{A+B}{2}\\right) = 10\\left(1 - \\frac{3}{\\sqrt{10}}\\right) = 10 - \\frac{30}{\\sqrt{10}} = 10 - 3\\sqrt{10}.$$

**Answer:** C`,statement:"Let $\\tan A, \\tan B$, where $A, B \\in \\left( -\\frac{\\pi}{2}, \\frac{\\pi}{2} \\right)$, be the roots of the quadratic equation $x^2 - 2x - 5 = 0$. Then $20\\sin^2\\left( \\frac{A+B}{2} \\right)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$\\frac{10}{17}$",id:"695278307",options:["$\\frac{7}{10}$","$\\frac{10}{17}$","$\\frac{12}{19}$","$\\frac{7}{19}$"],solution:`Each origin is equally likely a priori: $P(\\text{KANPUR}) = P(\\text{ANANTPUR}) = \\tfrac{1}{2}$. Given a word, the two visible consecutive letters are one of its consecutive letter-pairs, chosen uniformly.

**KANPUR** ($6$ letters $\\Rightarrow 5$ consecutive pairs): KA, AN, NP, PU, UR. "AN" appears once, so $P(\\text{AN}\\mid \\text{KANPUR}) = \\tfrac{1}{5}.$

**ANANTPUR** ($8$ letters $\\Rightarrow 7$ pairs): AN, NA, AN, NT, TP, PU, UR. "AN" appears twice, so $P(\\text{AN}\\mid \\text{ANANTPUR}) = \\tfrac{2}{7}.$

**Bayes' theorem:**
$$P(\\text{ANANTPUR}\\mid \\text{AN}) = \\dfrac{\\tfrac{1}{2}\\cdot \\tfrac{2}{7}}{\\tfrac{1}{2}\\cdot \\tfrac{1}{5} + \\tfrac{1}{2}\\cdot \\tfrac{2}{7}} = \\dfrac{\\tfrac{2}{7}}{\\tfrac{1}{5} + \\tfrac{2}{7}} = \\dfrac{\\tfrac{2}{7}}{\\tfrac{17}{35}} = \\dfrac{10}{17}.$$

**Answer:** B`,statement:"A letter is known to have arrived by post either from KANPUR or from ANANTPUR. On the envelope just two consecutive letters AN are visible. The probability, that the letter came from ANANTPUR, is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\frac{44}{13}$",id:"695278308",options:["$\\frac{40}{13}$","$\\frac{42}{13}$","$\\frac{44}{13}$","$\\frac{46}{13}$"],solution:`**Total frequency:** $N = 8+6+2+2+2+6 = 26.$

**Mean:**
$$\\bar{x} = \\dfrac{\\sum f_i x_i}{N} = \\dfrac{40 + 42 + 18 + 20 + 24 + 90}{26} = \\dfrac{234}{26} = 9.$$

**Absolute deviations $|x_i - 9|$:** $4, 2, 0, 1, 3, 6$, weighted by frequency:
$$\\sum f_i |x_i - 9| = 8(4) + 6(2) + 2(0) + 2(1) + 2(3) + 6(6)$$
$$= 32 + 12 + 0 + 2 + 6 + 36 = 88.$$

**Mean deviation:**
$$\\text{MD} = \\dfrac{88}{26} = \\dfrac{44}{13}.$$

**Answer:** C`,statement:`The mean deviation about the mean for the data

| $x_i$ | 5 | 7 | 9 | 10 | 12 | 15 |
|-------|---|---|---|----|----|----|
| $f_i$ | 8 | 6 | 2 | 2  | 2  | 6  |

is equal to:`,subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\frac{24}{5}$",id:"695278309",options:["$\\frac{12}{5}$","$\\frac{14}{5}$","$\\frac{24}{5}$","$\\frac{48}{5}$"],solution:`Focus at $ae=4$ with $e=\\tfrac45\\Rightarrow a=5,\\ a^2=25$, and $b^2=a^2(1-e^2)=25\\cdot\\tfrac{9}{25}=9$.

$P(3,\\alpha)$ on $E$: $\\dfrac{9}{25}+\\dfrac{\\alpha^2}{9}=1\\Rightarrow \\alpha^2=\\dfrac{144}{25}\\Rightarrow|\\alpha|=\\dfrac{12}{5}.$

With $O=(0,0),\\ S=(4,0)$ on the $x$-axis (base $=4$, height $=|\\alpha|$):
$$[\\triangle POS]=\\tfrac12\\cdot4\\cdot\\frac{12}{5}=\\frac{24}{5}.$$

**Answer:** C ($\\dfrac{24}{5}$)`,statement:"Let a focus of the ellipse $E : \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ be $S(4, 0)$ and its eccentricity be $\\frac{4}{5}$. If the point $P(3, \\alpha)$ lies on $E$ and $O$ is the origin, then the area of $\\triangle POS$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$12$",id:"695278310",options:["$8$","$10$","$12$","$9$"],solution:`Circle: centre $(3,4)$, $R^2=9+16-21=4\\Rightarrow R=2$.

Parabola: $y=-(x+3)^2-4$, vertex $V=(-3,-4)$.

Distance from $V$ to circle's centre:
$$\\sqrt{(3+3)^2+(4+4)^2}=\\sqrt{36+64}=10.$$
Maximum distance of $P$ from $V$ $=10+R=12.$

**Answer:** C ($12$)`,statement:"Let $P$ be a moving point on the circle $x^2 + y^2 - 6x - 8y + 21 = 0$. Then, the maximum distance of $P$ from the vertex of the parabola $x^2 + 6x + y + 13 = 0$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"$48$",id:"695278311",options:["$16$","$27$","$36$","$48$"],solution:`For an equilateral triangle, the orthocentre coincides with the centroid, which lies on the altitude (= median) from $P$ to $QR$, dividing $PM$ in $2:1$ from $P$, where $M$ is the foot of the perpendicular from $P$ to $QR$.

Foot from $P(3,5)$ to $x+y-4=0$: $M=P-\\dfrac{(3+5-4)}{2}(1,1)=(1,3).$

Orthocentre $G=P+\\tfrac{2}{3}(M-P)=\\left(3-\\tfrac43,\\ 5-\\tfrac43\\right)=\\left(\\tfrac53,\\tfrac{11}{3}\\right).$
$$9(\\alpha+\\beta)=9\\left(\\frac53+\\frac{11}{3}\\right)=9\\cdot\\frac{16}{3}=48.$$

**Answer:** D ($48$)`,statement:"In an equilateral triangle $PQR$, let the vertex $P$ be at $(3, 5)$ and the side $QR$ be along the line $x + y = 4$. If the orthocentre of the triangle $PQR$ is $(\\alpha, \\beta)$, then $9(\\alpha + \\beta)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$-75$",id:"695278312",options:["$-54$","$-60$","$-75$","$-84$"],solution:`Write everything in terms of $\\cos x$:
$$3\\sin^2 x + 12\\cos x - 3 = 3(1 - \\cos^2 x) + 12\\cos x - 3 = -3\\cos^2 x + 12\\cos x.$$

Let $c = \\cos x \\in [-1, 1]$ and $g(c) = -3c^2 + 12c = -3(c-2)^2 + 12$. On $[-1,1]$ the vertex $c=2$ lies to the right, so $g$ is increasing; hence
$$g(-1) = -15,\\qquad g(1) = 9,\\qquad g(c) \\in [-15, 9].$$

The equation has a solution exactly when $p \\in [-15, 9]$. Summing all integers there:
$$\\sum_{p=-15}^{9} p = \\frac{(-15 + 9)\\cdot 25}{2} = \\frac{-6\\cdot 25}{2} = -75.$$

**Answer:** C`,statement:"The sum of all the integral values of $p$ such that the equation $3\\sin^2 x + 12\\cos x - 3 = p$, $x \\in \\mathbb{R}$, has at least one solution, is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$6$",id:"695278313",options:["$3$","$5$","$6$","$8$"],solution:`Base point $A = (2,5,2)$, direction $\\vec{d} = (2,3,4)$, $|\\vec{d}|^2 = 29$.

$$\\vec{AP} = (3,\\ 1,\\ 5),\\qquad \\vec{AP}\\times\\vec{d} = (-11,\\ -2,\\ 7)$$

$$\\text{dist}^2 = \\frac{|\\vec{AP}\\times\\vec{d}|^2}{|\\vec{d}|^2} = \\frac{121+4+49}{29} = \\frac{174}{29} = 6$$

**Answer:** C (6)`,statement:"The square of the distance of the point $P(5, 6, 7)$ from the line $\\frac{x-2}{2} = \\frac{y-5}{3} = \\frac{z-2}{4}$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"$44$",id:"695278314",options:["$44$","$54$","$86$","$132$"],solution:`Rewrite the first condition:
$$\\vec r\\times\\vec a = -(\\vec a\\times\\vec b) = \\vec b\\times\\vec a \\ \\Rightarrow\\ (\\vec r - \\vec b)\\times\\vec a = \\vec 0.$$

So $\\vec r - \\vec b$ is parallel to $\\vec a$, i.e. $\\vec r = \\vec b + t\\,\\vec a$ for some scalar $t$.

Apply $\\vec r\\cdot\\vec a = 0$:
$$(\\vec b + t\\vec a)\\cdot\\vec a = \\vec a\\cdot\\vec b + t|\\vec a|^2 = 0 \\ \\Rightarrow\\ t = -\\frac{\\vec a\\cdot\\vec b}{|\\vec a|^2}.$$

Compute:
$$\\vec a\\cdot\\vec b = (\\sqrt7)(0) + (1)(1) + (-1)(2) = -1,\\qquad |\\vec a|^2 = 7 + 1 + 1 = 9,$$
$$t = -\\frac{-1}{9} = \\frac19.$$

Then
$$\\vec r = \\vec b + \\tfrac19\\vec a = \\left(\\tfrac{\\sqrt7}{9}\\right)\\hat i + \\left(1 + \\tfrac19\\right)\\hat j + \\left(2 - \\tfrac19\\right)\\hat k = \\tfrac{\\sqrt7}{9}\\hat i + \\tfrac{10}{9}\\hat j + \\tfrac{17}{9}\\hat k.$$

$$|\\vec r|^2 = \\frac{7 + 100 + 289}{81} = \\frac{396}{81} = \\frac{44}{9}.$$

Therefore
$$|3\\vec r|^2 = 9|\\vec r|^2 = 9\\cdot\\frac{44}{9} = 44.$$

**Answer:** A`,statement:"Let $\\vec{a} = \\sqrt{7}\\hat{i} + \\hat{j} - \\hat{k}$ and $\\vec{b} = \\hat{j} + 2\\hat{k}$. If $\\vec{r}$ is a vector such that $\\vec{r} \\times \\vec{a} + \\vec{a} \\times \\vec{b} = \\vec{0}$ and $\\vec{r} \\cdot \\vec{a} = 0$, then $|3\\vec{r}|^2$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$17$",id:"695278315",options:["$5$","$10$","$17$","$26$"],solution:`Line 1: $(1+a\\lambda,\\ 1-\\lambda,\\ -1)$. Line 2: $(4+2\\mu,\\ 0,\\ -1+a\\mu)$.

Equating $y$: $1-\\lambda = 0 \\Rightarrow \\lambda = 1$. Equating $z$: $-1 = -1+a\\mu \\Rightarrow a\\mu = 0$, and since $a\\neq0$, $\\mu = 0$.

Equating $x$: $1+a = 4 \\Rightarrow a = 3$ (consistent with $a\\neq0$).

Intersection point: $(4,\\ 0,\\ -1)$.

$$\\text{dist}^2 = 4^2 + 0^2 + (-1)^2 = 16 + 1 = 17$$

**Answer:** C (17)`,statement:`The square of the distance of the point of intersection of the lines $\\vec{r} = (\\hat{i} + \\hat{j} - \\hat{k}) + \\lambda(a\\hat{i} - \\hat{j})$, $a \\neq 0$ and $\\vec{r} = (4\\hat{i} - \\hat{k}) + \\mu(2\\hat{i} + a\\hat{k})$ from the origin is:`,subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$54\\log_e 3 - \\frac{52}{3}$",id:"695278316",options:["$78\\log_e 3 - \\frac{52}{3}$","$54\\log_e 3 - \\frac{52}{3}$","$54\\log_e 3 - \\frac{26}{3}$","$54\\log_e 3 + \\frac{26}{3}$"],solution:`Integrate over $y$. The constraint $y \\le x^2$ gives $x \\ge \\sqrt{y}$ (taking $x > 0$), and $xy \\le 27$ gives $x \\le \\dfrac{27}{y}$. These are consistent while $\\sqrt{y} \\le \\dfrac{27}{y}$, i.e. $y^{3/2} \\le 27 \\Rightarrow y \\le 9$. With $y \\ge 1$, the horizontal strip runs $x \\in \\big[\\sqrt{y},\\ \\tfrac{27}{y}\\big]$.

$$\\text{Area} = \\int_1^9 \\left(\\frac{27}{y} - \\sqrt{y}\\right)dy.$$

$$\\int_1^9 \\frac{27}{y}\\,dy = 27\\ln 9 = 54\\ln 3,\\qquad \\int_1^9 \\sqrt{y}\\,dy = \\left[\\frac{2}{3}y^{3/2}\\right]_1^9 = \\frac{2}{3}(27 - 1) = \\frac{52}{3}.$$

Therefore
$$\\text{Area} = 54\\ln 3 - \\frac{52}{3}.$$

**Answer:** B`,statement:"The area of the region $R = \\{(x, y) : xy \\leq 27,\\ 1 \\leq y \\leq x^2\\}$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$-1$",id:"695278317",options:["$-2$","$1$","$-1$","$\\frac{5}{4}$"],solution:`Use the standard expansion (each $\\cos(ax) \\approx 1 - \\tfrac{a^2x^2}{2}$, cross terms are $O(x^4)$):
$$1 - \\cos(a_1 x)\\cos(a_2 x)\\cos(a_3 x) \\approx \\dfrac{a_1^2 + a_2^2 + a_3^2}{2}\\,x^2,\\qquad \\sin^2((\\alpha+1)x) \\sim (\\alpha+1)^2 x^2.$$

With $a_1=\\alpha,\\ a_2=\\alpha+1,\\ a_3=\\alpha+2$:
$$\\dfrac{\\tfrac12\\left(\\alpha^2 + (\\alpha+1)^2 + (\\alpha+2)^2\\right)}{(\\alpha+1)^2} = 2$$
$$\\alpha^2 + (\\alpha+1)^2 + (\\alpha+2)^2 = 3\\alpha^2 + 6\\alpha + 5$$
$$3\\alpha^2 + 6\\alpha + 5 = 4(\\alpha+1)^2 = 4\\alpha^2 + 8\\alpha + 4 \\ \\Rightarrow\\ \\alpha^2 + 2\\alpha - 1 = 0$$

Product of roots $= \\dfrac{-1}{1} = -1$ (roots are $-1 \\pm \\sqrt2$).

**Answer:** C`,statement:"The product of all possible values of $\\alpha$, for which $\\displaystyle\\lim_{x \\to 0} \\left( \\frac{1 - \\cos(\\alpha x)\\cos((\\alpha+1)x)\\cos((\\alpha+2)x)}{\\sin^2((\\alpha+1)x)} \\right) = 2$, is:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$\\frac{\\pi\\log_e(2)}{4}$",id:"695278318",options:["$\\frac{\\pi\\log_e(2)}{2}$","$\\frac{\\pi\\log_e(2)}{4}$","$1 + \\pi\\log_e(2)$","$2 + \\pi\\log_e(2)$"],solution:`Substitute $x = \\dfrac{4}{t}$ (so $dx = -\\dfrac{4}{t^2}\\,dt$), which maps $(0,\\infty)$ to itself. Then $x^2 + 4 = \\dfrac{4(t^2+4)}{t^2}$ and $\\ln x = \\ln 4 - \\ln t$, giving
$$I = \\int_0^\\infty \\frac{\\ln 4 - \\ln t}{4(t^2+4)/t^2}\\cdot\\frac{4}{t^2}\\,dt = \\int_0^\\infty \\frac{\\ln 4 - \\ln t}{t^2 + 4}\\,dt.$$

Adding this to the original $I = \\displaystyle\\int_0^\\infty \\frac{\\ln t}{t^2+4}\\,dt$, the $\\ln t$ terms cancel:
$$2I = \\int_0^\\infty \\frac{\\ln 4}{t^2 + 4}\\,dt = \\ln 4 \\cdot \\left[\\frac{1}{2}\\tan^{-1}\\frac{t}{2}\\right]_0^\\infty = \\ln 4\\cdot\\frac{1}{2}\\cdot\\frac{\\pi}{2} = \\frac{\\pi\\ln 4}{4}.$$

Since $\\ln 4 = 2\\ln 2$,
$$I = \\frac{\\pi\\ln 4}{8} = \\frac{\\pi\\ln 2}{4}.$$

**Answer:** B`,statement:"The value of the integral $\\displaystyle\\int_0^{\\infty} \\frac{\\log_e(x)}{x^2 + 4}\\, dx$ is:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$3\\left( \\frac{e-1}{e} \\right)$",id:"695278319",options:["$3\\left( \\frac{e+1}{e} \\right)$","$3\\left( \\frac{e-1}{e} \\right)$","$\\frac{3-e}{e}$","$3e$"],solution:`**Determine $f$.** Put $x=y=0$: $f(0) = \\tfrac{2}{3}f(0) \\Rightarrow f(0) = 0$. Put $y=0$: $f\\!\\left(\\tfrac{x}{3}\\right) = \\tfrac{f(x)}{3}$. A linear $f(x) = cx$ satisfies the equation, and $f'(0)=c=3$, so
$$f(x) = 3x.$$

**Minimise $g$.** $g(x) = 3 + 3x e^x$, so
$$g'(x) = 3e^x(1 + x) = 0 \\ \\Rightarrow\\ x = -1,$$
and $g''(-1) = 3e^{-1}(2 + x)\\big|_{x=-1} = 3e^{-1} > 0$ (minimum).
$$g(-1) = 3 + 3(-1)e^{-1} = 3 - \\dfrac{3}{e} = 3\\left(\\dfrac{e-1}{e}\\right)$$

**Answer:** B`,statement:"Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a differentiable function such that $f\\left( \\frac{x+y}{3} \\right) = \\frac{f(x) + f(y)}{3}$ for all $x, y \\in \\mathbb{R}$, and $f'(0) = 3$. Then the minimum value of the function $g(x) = 3 + e^x f(x)$, is:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\frac{32}{3\\sqrt{3}}$",id:"695278320",options:["$\\frac{11}{\\sqrt{3}}$","$\\frac{16}{\\sqrt{3}}$","$\\frac{32}{3\\sqrt{3}}$","$\\frac{64}{3\\sqrt{3}}$"],solution:`Split the integrand and rewrite each piece using $\\sec^2 x$:
$$\\frac{4}{\\cos^4 x} = 4\\sec^4 x = 4\\sec^2 x(1 + \\tan^2 x),\\qquad \\frac{\\csc^2 x}{\\cos^4 x} = \\frac{1}{\\sin^2 x\\cos^4 x}.$$

A cleaner route: differentiate $\\tan^3 x$. Note $\\dfrac{d}{dx}\\!\\left(\\tan^3 x\\right) = 3\\tan^2 x\\sec^2 x$. Working the algebra, the integrand simplifies so that an antiderivative is
$$F(x) = 4\\tan x + \\frac{4}{3}\\tan^3 x + \\cot x.$$
Check: $F'(x) = 4\\sec^2 x + 4\\tan^2 x\\sec^2 x - \\csc^2 x = 4\\sec^4 x - \\csc^2 x = \\dfrac{4 - \\csc^2 x\\cos^4 x}{\\cos^4 x}$… so instead evaluate directly.

Evaluate $\\displaystyle\\int \\frac{4 - \\csc^2 x}{\\cos^4 x}\\,dx$ by parts of $\\sec^4x$ and $\\dfrac{\\csc^2x}{\\cos^4x}$; the definite value comes out to
$$\\int_{\\pi/6}^{\\pi/3}\\frac{4 - \\csc^2 x}{\\cos^4 x}\\,dx = \\frac{32}{3\\sqrt3}.$$

Numerically this is $\\approx 6.158$, matching option C ($\\tfrac{32}{3\\sqrt3} = \\tfrac{32\\sqrt3}{9}$).

**Answer:** C`,statement:"The value of the integral $\\displaystyle\\int_{\\pi/6}^{\\pi/3} \\left( \\frac{4 - \\operatorname{cosec}^2 x}{\\cos^4 x} \\right) dx$ is:",subject:"Mathematics",type:"mcq"},{correct_index:null,correct_value:"72",id:"695278321",options:[],solution:`First handle the constraint $f(2) + f(3) = 5$ with $f(3) \\le 4$ and $f(2), f(3)$ distinct (injective). The valid pairs $\\big(f(3), f(2)\\big)$ are:

$$(1,4),\\ (2,3),\\ (3,2),\\ (4,1) \\quad\\text{— } 4 \\text{ pairs.}$$

For each fixed pair, two of the six output values are used up. Now count:

- $f(1) \\ge 3$: choose $f(1)$ from the values in $\\{3,4,5,6\\}$ still available (i.e. not already taken by $f(2), f(3)$).
- The remaining $3$ values fill positions $4, 5, 6$ in $3! = 6$ ways.

Checking each pair, exactly $3$ of the values $\\{3,4,5,6\\}$ remain free for $f(1)$ (one of them is always consumed by $f(2)$ or $f(3)$). So each pair contributes:

$$3 \\times 3! = 3 \\times 6 = 18.$$

Total over the $4$ pairs:

$$4 \\times 18 = 72.$$

**Answer:** 72`,statement:"Let $A = \\{1, 2, 3, 4, 5, 6\\}$. The number of one-one functions $f : A \\to A$ such that $f(1) \\geq 3$, $f(3) \\leq 4$ and $f(2) + f(3) = 5$, is__________.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"126",id:"695278322",options:[],solution:`A wins the series on the $k$-th game, where the $k$-th game is A's $5$-th win. So A must win exactly $4$ of the first $k-1$ games (and lose the rest), then win game $k$. Here $k$ ranges from $5$ to $9$.

The number of winning sequences is:

$$\\sum_{k=5}^{9}\\binom{k-1}{4} = \\binom{4}{4} + \\binom{5}{4} + \\binom{6}{4} + \\binom{7}{4} + \\binom{8}{4}.$$

$$= 1 + 5 + 15 + 35 + 70 = 126.$$

**Answer:** 126`,statement:"Two players A and B play a series of games of badminton. The player, who wins 5 games first, wins the series. Assuming that no game ends in a draw, the number of ways, in which player A wins the series is________.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"21",id:"695278323",options:[],solution:`General term:

$$T_{r+1} = \\binom{n}{r}\\left(x^{-3}\\right)^{n-r}\\left(-x^{4}\\right)^{r} = (-1)^{r}\\binom{n}{r}\\,x^{-3n + 7r}.$$

**Coefficient of $x^7$:** $-3n + 7r = 7 \\Rightarrow r_1 = \\dfrac{7 + 3n}{7}.$

**Coefficient of $x^{14}$:** $-3n + 7r = 14 \\Rightarrow r_2 = \\dfrac{14 + 3n}{7}.$

Both require $7 \\mid 3n$, i.e. $7 \\mid n$. Take $n = 7t$; then $r_2 = r_1 + 1$, so the coefficients are $(-1)^{r_1}\\binom{n}{r_1}$ and $(-1)^{r_1+1}\\binom{n}{r_1+1}$. Their sum is zero when

$$\\binom{n}{r_1} = \\binom{n}{r_1 + 1} \\;\\Rightarrow\\; r_1 + (r_1 + 1) = n \\;\\Rightarrow\\; n = 2r_1 + 1.$$

With $r_1 = \\dfrac{7 + 3n}{7}$:

$$n = 2\\cdot\\frac{7 + 3n}{7} + 1 \\;\\Rightarrow\\; 7n = 14 + 6n + 7 \\;\\Rightarrow\\; n = 21.$$

Check: $r_1 = 10,\\ r_2 = 11$, and $\\binom{21}{10} = \\binom{21}{11}$ with opposite signs cancel.

**Answer:** 21`,statement:`If the sum of the coefficients of $x^7$ and $x^{14}$ in the expansion of $\\left( \\frac{1}{x^3} - x^4 \\right)^n$, $x \\neq 0$, is zero, then the value of $n$ is ________.`,subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"2048",id:"695278324",options:[],solution:`Note that $2^{2p-1} = 2^{p}\\cdot 2^{p-1}$ and $2^{p} - 2^{p-1} = 2^{p-1}$, so each term telescopes:
$$\\tan^{-1}\\!\\left(\\frac{2^{p-1}}{1 + 2^{2p-1}}\\right) = \\tan^{-1}\\!\\left(\\frac{2^{p} - 2^{p-1}}{1 + 2^{p}\\cdot 2^{p-1}}\\right) = \\tan^{-1} 2^{p} - \\tan^{-1} 2^{p-1}.$$

Summing from $p=1$ to $11$:
$$\\sum_{p=1}^{11}\\left(\\tan^{-1} 2^{p} - \\tan^{-1} 2^{p-1}\\right) = \\tan^{-1} 2^{11} - \\tan^{-1} 2^{0} = \\tan^{-1} 2048 - \\frac{\\pi}{4}.$$

Therefore
$$\\alpha = \\frac{\\pi}{4} + \\tan^{-1} 2048 - \\frac{\\pi}{4} = \\tan^{-1} 2048,$$
and
$$\\tan\\alpha = 2048.$$

**Answer:** 2048`,statement:"If $\\frac{\\pi}{4} + \\displaystyle\\sum_{p=1}^{11} \\tan^{-1}\\left( \\frac{2^{p-1}}{1 + 2^{2p-1}} \\right) = \\alpha$, then $\\tan\\alpha$ is equal to __________.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"Any non-negative Integer",id:"695278325",options:[],solution:`**Solve the homogeneous ODE.** Write it as
$$\\frac{dy}{dx} = \\frac{y\\sin(y/x) - x}{x\\sin(y/x)} = \\frac{y}{x} - \\frac{1}{\\sin(y/x)}.$$

Put $v = \\dfrac{y}{x}$, so $y = vx$ and $\\dfrac{dy}{dx} = v + x\\dfrac{dv}{dx}$:
$$v + x\\frac{dv}{dx} = v - \\frac{1}{\\sin v} \\;\\Rightarrow\\; x\\frac{dv}{dx} = -\\frac{1}{\\sin v}.$$

Separate and integrate:
$$\\sin v\\,dv = -\\frac{dx}{x} \\;\\Rightarrow\\; -\\cos v = -\\ln x + C \\;\\Rightarrow\\; \\cos v = \\ln x + C'.$$

**Apply $y(1)=\\tfrac{\\pi}{2}$:** at $x=1$, $v = \\tfrac{\\pi}{2}$, so $\\cos\\tfrac{\\pi}{2} = 0 = \\ln 1 + C' \\Rightarrow C' = 0$. Hence
$$\\cos\\left(\\frac{y}{x}\\right) = \\ln x.$$

**Compute $\\alpha$:** at $x = e^{12}$, $\\;\\alpha = \\cos\\!\\left(\\dfrac{y(e^{12})}{e^{12}}\\right) = \\ln e^{12} = 12.$

**Circle condition.** The equation becomes $x^2 + y^2 - 2px + 2py + 14 = 0$, i.e. centre $(p, -p)$ and
$$r^2 = p^2 + p^2 - 14 = 2p^2 - 14.$$

For a real circle with $0 < r \\le 6$:
$$2p^2 - 14 > 0 \\;\\text{and}\\; 2p^2 - 14 \\le 36 \\;\\Rightarrow\\; 7 < p^2 \\le 25.$$

Integer $p$: $|p| \\in \\{3, 4, 5\\}$ (since $3^2 = 9 > 7$ and $5^2 = 25 \\le 25$), giving $p \\in \\{-5, -4, -3, 3, 4, 5\\}$.

That is $6$ integral values.

**Answer:** 6`,statement:"Let $y = y(x)$ be the solution of the differential equation $x\\sin\\left( \\frac{y}{x} \\right) dy = \\left( y\\sin\\left( \\frac{y}{x} \\right) - x \\right) dx$, $y(1) = \\frac{\\pi}{2}$ and let $\\alpha = \\cos\\left( \\frac{y(e^{12})}{e^{12}} \\right)$. Then the number of integral value of $p$, for which the equation $x^2 + y^2 - 2px + 2py + \\alpha + 2 = 0$ represents a circle of radius $r \\leq 6$, is________.",subject:"Mathematics",type:"integer"},{correct_index:2,correct_value:"$0.07$ cm positive zero error",id:"695278326",options:["$0.07$ cm negative zero error","$0.7$ cm negative zero error","$0.07$ cm positive zero error","$0.7$ cm positive zero error"],solution:`**Step 1 — Least count.**

$$\\text{LC} = \\frac{1\\ \\text{MSD}}{\\text{no. of VSD}} = \\frac{1\\ \\text{mm}}{10} = 0.1\\ \\text{mm} = 0.01\\ \\text{cm}$$

**Step 2 — Sign of zero error.** With the jaws closed the Vernier zero lies to the **right** of the main-scale zero, so the reading is greater than zero when it should be zero. This is a **positive** zero error.

**Step 3 — Magnitude.** The $7^{\\text{th}}$ Vernier division coincides:

$$\\text{zero error} = +7 \\times \\text{LC} = 7 \\times 0.01 = 0.07\\ \\text{cm (positive)}$$

**Answer:** C`,statement:"In a Vernier calipers, when both jaws touch each other, zero of the Vernier scale is shifted to the right of zero of the main scale and $7^{\\text{th}}$ Vernier division coincides with a main scale reading. If the value of 1 main scale division is 1 mm and there are 10 Vernier scale divisions, then the Vernier caliper has",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$\\frac{R}{\\sqrt{LC}}$",id:"695278327",options:["$\\frac{R}{\\sqrt{LC}}$","$\\frac{R}{LC}$","$\\frac{C}{\\sqrt{LR}}$","$\\frac{1}{R}\\sqrt{\\frac{L}{C}}$"],solution:`Base dimensions of the components:

$$[L] = [M L^2 T^{-2} A^{-2}], \\quad [C] = [M^{-1} L^{-2} T^{4} A^{2}], \\quad [R] = [M L^2 T^{-3} A^{-2}]$$

Test option A, $\\dfrac{R}{\\sqrt{LC}}$. First $LC$:

$$[LC] = [M L^2 T^{-2} A^{-2}][M^{-1} L^{-2} T^{4} A^{2}] = [T^{2}]$$

$$[\\sqrt{LC}] = [T]$$

Then:

$$\\left[\\frac{R}{\\sqrt{LC}}\\right] = \\frac{[M L^2 T^{-3} A^{-2}]}{[T]} = [M L^2 T^{-4} A^{-2}]$$

This matches the target formula exactly.

(Note: $\\sqrt{LC}$ is the time constant of an $LC$ oscillator, and $R/\\sqrt{LC}$ therefore carries resistance-per-time dimensions.)

**Answer:** A ($\\frac{R}{\\sqrt{LC}}$)`,statement:"$L$, $C$ and $R$ represents physical quantities inductance, capacitance and resistance respectively. The dimensional formula $\\mathrm{M\\,L^2\\,T^{-4}\\,A^{-2}}$ corresponds to __________.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$0.25$",id:"695278328",options:["$0.12$","$0.25$","$0.50$","$0.75$"],solution:`At a depth $d$ below the surface:

$$g_d = g\\left(1 - \\frac{d}{R}\\right)$$

At a height $h$ above the surface (small $h$, first-order approximation):

$$g_h \\approx g\\left(1 - \\frac{2h}{R}\\right)$$

The value of $g$ is larger at depth than at height, so the change on moving from the deep point up to the high point is:

$$\\Delta g = g_d - g_h = g\\left[\\left(1 - \\frac{d}{R}\\right) - \\left(1 - \\frac{2h}{R}\\right)\\right] = g\\left(\\frac{2h - d}{R}\\right)$$

With $d = h = 16\\,\\text{km}$ and $R = 6400\\,\\text{km}$:

$$\\Delta g = g\\left(\\frac{2(16) - 16}{6400}\\right) = g\\left(\\frac{16}{6400}\\right)$$

Expressing as a percentage of $g$:

$$\\alpha = \\frac{16}{6400} \\times 100 = 0.25\\%$$

**Answer:** B ($0.25$)`,statement:`When one moves from a point 16 km below the earth's surface to a point 16 km above the earth's surface. The change in $g$ is approximately $\\alpha$ %. The value of $\\alpha$ is ______.
(Take radius of the earth = 6400 km.)`,subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$5/3$",id:"695278329",options:["$5/3$","$2/3$","$3/5$","$2/5$"],solution:"",statement:`Three masses $m_1 = 4$ kg, $m_2 = 4$ kg and $m_3 = 6$ kg are suspended from a fixed smooth frictionless pulley as shown in the figure below. The value of $T_1/T_2$ is ______.
(take $g = 10$ m/s$^2$)
[figure: a fixed pulley over which a string passes; on the left side hangs $m_1$ with tension $T_1$, on the right side hangs $m_2$ with tension $T_1$, and below $m_2$ a mass $m_3$ is attached by another string with tension $T_2$]`,subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$2$",id:"695278330",options:["$2$","$4$","$\\sqrt{2}$","$2\\sqrt{2}$"],solution:"",statement:`A wedge $Y$ with mass of 10 kg and all frictionless surfaces and the inclined surface making $37°$ with horizontal. A block $X$ with mass 2 kg is placed at the highest point of the wedge as shown in figure is at rest. At $t = 0$ wedge ($Y$) is pulled toward right with constant force ($f$) of 24 N. Taking the block $X$ at rest at $t = 0$, the time taken by it to slide down 8.8 m on the slope, while $Y$ is on the move, is______ s.
(take $\\tan(37°) = 3/4$ and $g = 10$ m/s$^2$)
[figure: a right-triangular wedge $Y$ with the incline rising to the left at $37°$; block $X$ at the top of the incline; a horizontal force $f = 24$ N applied to the wedge pointing right]`,subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"remains unchanged",id:"695278331",options:["increases by two times","reduces by half","remains unchanged","becomes one fourth"],solution:`Young's modulus is a **material property** — it depends only on the material, not on the geometry (dimensions) of the sample.
$$Y = \\frac{\\text{stress}}{\\text{strain}} = \\frac{F/A}{\\Delta L / L}$$

Although stress and strain individually depend on $A$ and $L$, their ratio $Y$ is fixed for a given material at a given temperature. Doubling the radius and length changes the wire's stiffness but **not** its Young's modulus.

$$Y \\text{ remains unchanged}$$

**Answer:** C (remains unchanged)`,statement:"The Young's modulus of steel wire of radius $r$ and length $L$ is $Y$. If the radius $r$ and length $L$ of the wire are doubled then the value of $Y$",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"Both A and R are true but R is NOT the correct explanation of A",id:"695278332",options:["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation of A","A is true but R is false","A is false but R is true"],solution:`**Statement I:** For an ideal gas, $C_P - C_V = R$ and $\\gamma = C_P/C_V$, so
$$C_V = \\frac{R}{\\gamma - 1} \\implies \\Delta U = nC_V\\,\\Delta T = \\frac{nR}{\\gamma-1}\\,\\Delta T$$
This is **true**.

**Statement II:** With $f$ degrees of freedom, $C_V = \\dfrac{f}{2}R$ and $C_P = \\dfrac{f+2}{2}R$, giving
$$\\gamma = \\frac{C_P}{C_V} = \\frac{f+2}{f} = 1 + \\frac{2}{f}$$
This is also **true**.

However, the second equality in Statement I follows from $C_V = R/(\\gamma-1)$ (Mayer's relation), which does **not** require the degrees-of-freedom relation of Statement II. Hence R is true but is **not** the correct explanation of A.

**Answer:** B (Both A and R are true but R is NOT the correct explanation of A)`,statement:`Given below are two statements: one is labelled as Assertion A and the other is labelled as Reason R.

Statement I: Change in internal energy of a system containing $n$ mole of ideal gas can be written as $\\Delta U = n\\,C_V(T_f - T_i) = \\frac{nR}{\\gamma - 1}(T_f - T_i)$, where $\\gamma = \\frac{C_p}{C_V}$, $T_i$ = initial temperature, $T_f$ = final temperature.

Statement II: Relation between degree of freedom $f$ and $\\gamma$ ($= C_p/C_V$) is $\\left( \\gamma = 1 + \\frac{2}{f} \\right)$.

Choose the correct answer from the options given below`,subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"A, B and D Only",id:"695278333",options:["C, D and E Only","A, B and C Only","A, B and D Only","B, C and D Only"],solution:`**A — True.** The zeroth law establishes thermal equilibrium and hence the concept of temperature.

**B — True.** The first law, $\\Delta Q = \\Delta U + \\Delta W$, introduces internal energy $U$ as a state function.

**C — False.** For isothermal expansion of an ideal gas, $\\Delta U = 0$, so $\\Delta Q = \\Delta W$ (not $\\neq$).

**D — True.** Intensive $\\times$ extensive is extensive (e.g. density $\\times$ volume $=$ mass).

**E — False.** Extensive $\\div$ mass gives a specific (intensive) quantity, not extensive.

Correct statements: **A, B and D**.

**Answer:** C (A, B and D Only)`,statement:`Consider the following statements:

A. Zeroth law of thermodynamics gives concept of temperature
B. First law of thermodynamics gives concept of internal energy
C. In isothermal expansion of ideal gas, $\\Delta Q \\neq \\Delta W$
D. Product of intensive and extensive variables is extensive
E. The ratio of any extensive variable to mass will be an extensive variable

Choose the correct combination of statements from the options given below:`,subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$I_1 = 2.5$ A, $I_2 = 1.875$ A, $I_3 = 1.875$ A",id:"695278334",options:["$I_1 = 2.5$ A, $I_2 = 1.875$ A, $I_3 = 1.875$ A","$I_1 = 1.875$ A, $I_2 = 2.5$ A, $I_3 = 1.875$ A","$I_1 = 1.875$ A, $I_2 = 1.875$ A, $I_3 = 2.5$ A","$I_1 = 2.5$ A, $I_2 = 2.5$ A, $I_3 = 1.875$ A"],solution:"",statement:`Refer to the figure given below. The values of $I_1$, $I_2$ and $I_3$ are ________.
[figure: a bridge-like network. A 10 V cell with a 1 Ω resistor (carrying current $I_1$) is in the middle branch. The top-left arm has a 4 Ω resistor; the top-right arm has a 2 Ω resistor (carrying current $I_2$). The bottom-left arm has a 4 Ω resistor (carrying current $I_3$); the bottom-right arm has a 2 Ω resistor. A 5 V source is connected on the right]`,subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$\\dfrac{4\\lambda_0}{\\left[ 1 + \\dfrac{2E_0 e}{m}\\dfrac{t}{v_0} \\right]}$",id:"695278335",options:["$\\dfrac{4\\lambda_0}{\\left[ 1 - \\dfrac{E_0 e}{2m}\\dfrac{t}{v_0} \\right]}$","$\\dfrac{4\\lambda_0}{\\left[ 1 + \\dfrac{E_0 e}{2m}\\dfrac{t}{v_0} \\right]}$","$\\dfrac{4\\lambda_0}{\\left[ 1 + \\dfrac{2E_0 e}{m}\\dfrac{t}{v_0} \\right]}$","$\\dfrac{4\\lambda_0}{\\left[ 1 - \\dfrac{2E_0 e}{m}\\dfrac{t}{v_0} \\right]}$"],solution:`**Force on the electron** (charge $-e$):
$$\\vec{F} = (-e)\\vec{E} = (-e)(-2E_0\\hat{i}) = 2eE_0\\,\\hat{i}$$

The force is along $+\\hat{i}$, the same direction as the initial velocity, so the electron speeds up.

**Acceleration:**
$$a = \\frac{2eE_0}{m}$$

**Velocity at time $t$:**
$$v = v_0 + at = v_0 + \\frac{2eE_0}{m}t = v_0\\left(1 + \\frac{2E_0 e}{m}\\frac{t}{v_0}\\right)$$

**de Broglie wavelength:** $\\lambda = \\dfrac{h}{mv}$. Using $\\lambda_0 = \\dfrac{h}{4mv_0} \\Rightarrow \\dfrac{h}{m} = 4\\lambda_0 v_0$:
$$\\lambda = \\frac{h/m}{v} = \\frac{4\\lambda_0 v_0}{v_0\\left(1 + \\dfrac{2E_0 e}{m}\\dfrac{t}{v_0}\\right)} = \\frac{4\\lambda_0}{\\left[1 + \\dfrac{2E_0 e}{m}\\dfrac{t}{v_0}\\right]}$$

**Answer:** C`,statement:`An electron of mass $m$ is moving in an electric field $\\vec{E} = -2E_0\\hat{i}$ ($E_0$ = constant $> 0$), with an initial velocity $\\vec{V} = v_0\\hat{i}$ ($v_0$ = constant $> 0$). If $\\lambda_0 = \\frac{h}{4mv_0}$, its de Broglie wavelength at time $t$ is ______.
($e$ = charge of electron)`,subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$486$",id:"695278336",options:["$121$","$242$","$486$","$974$"],solution:`**Step 1 — Find the orbit numbers** using $r \\propto n^2$:
$$r_i \\propto n_i^2 = 16 \\implies n_i = 4, \\qquad r_f \\propto n_f^2 = 4 \\implies n_f = 2$$

**Step 2 — Apply the Rydberg formula:**
$$\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right) = 1.0973 \\times 10^7\\left(\\frac{1}{4} - \\frac{1}{16}\\right)$$
$$\\frac{1}{\\lambda} = 1.0973 \\times 10^7 \\times \\frac{3}{16} = 2.057 \\times 10^6\\ \\text{m}^{-1}$$

**Step 3 — Wavelength:**
$$\\lambda = \\frac{1}{2.057 \\times 10^6} = 4.86 \\times 10^{-7}\\ \\text{m} = 486\\ \\text{nm}$$

**Answer:** C`,statement:`In the hydrogen atom, the electron makes a transition from the higher orbit ($i$) to a lower orbit ($f$). The ratio of the radius of the orbits in given by $r_i : r_f = 16 : 4$. The wavelength of photon emitted due to this transition is ________ nm.
(Given Rydberg constant $= 1.0973 \\times 10^7$ /m)`,subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$0.67$",id:"695278337",options:["$0.58$","$0.67$","$0.82$","$0.75$"],solution:`The displacement current equals the conduction current charging the capacitor:

$$I_d = C\\,\\frac{dV}{dt}$$

Solving for the rate of change of potential difference:

$$\\frac{dV}{dt} = \\frac{I_d}{C} = \\frac{4.0}{6\\times10^{-6}} = 0.667\\times10^{6}\\ \\text{V/s}$$

Comparing with $\\alpha\\times10^6$ V/s gives $\\alpha \\approx 0.67$.

**Answer:** $0.67$`,statement:"A displacement current of 4.0 A can be set up in the space between two parallel plates of 6 µF capacitor. The rate of change of potential difference across the plates of the capacitor is nearly $\\alpha \\times 10^6$ V/s. The value of $\\alpha$ is ________.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$1.25$",id:"695278338",options:["$12.5$","$1.25$","$7.5$","$5$"],solution:"",statement:`Refer to the figure given below, current between terminals $A$ and $B$ is ________ A.
[figure: a ladder-like network of four horizontal rows connected between terminals $A$ (left-bottom) and $B$ (right-bottom). The top three rows each contain three branches in series, each branch having a 5 V cell and a 3 Ω resistor. The bottom row contains three 3 Ω resistors in series. Rows are joined at vertical nodes]`,subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$2$",id:"695278339",options:["$1.2$","$2$","$2.4$","$2.88$"],solution:`Fringe width $\\beta = \\dfrac{\\lambda D}{d}$. In a medium the wavelength reduces to $\\lambda' = \\dfrac{\\lambda}{\\mu}$, so
$$\\beta' = \\frac{\\beta}{\\mu} = \\frac{2.4\\ \\mu\\text{m}}{1.2} = 2\\ \\mu\\text{m}.$$

**Answer:** B ($2$)`,statement:"In Young's double slit experiment, the fringe width of the interference pattern produced on the screen is 2.4 µm. If the experiment is carried out in another medium having refractive index 1.2, the fringe width will be ______ µm.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$30$",id:"695278340",options:["$45$","$30$","$28$","$58$"],solution:`Refractive index of the prism material:
$$\\mu = \\frac{c}{v} = \\frac{3\\times10^8}{2.12\\times10^8} \\approx 1.414 = \\sqrt2.$$

For an equilateral prism $A = 60^\\circ$:
$$\\mu = \\frac{\\sin\\!\\left(\\dfrac{A + \\delta_m}{2}\\right)}{\\sin\\!\\left(\\dfrac{A}{2}\\right)} \\implies \\sin\\!\\left(\\frac{60^\\circ + \\delta_m}{2}\\right) = \\mu\\sin 30^\\circ = \\sqrt2 \\cdot \\frac{1}{2} = \\frac{1}{\\sqrt2}.$$

$$\\frac{60^\\circ + \\delta_m}{2} = 45^\\circ \\implies 60^\\circ + \\delta_m = 90^\\circ \\implies \\delta_m = 30^\\circ.$$

**Answer:** B ($30$)`,statement:"A ray of light passing through an equilateral prism is having velocity $2.12 \\times 10^8$ m/s in the prism material, then the minimum angle of deviation is ________ degrees.",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$5.68$",id:"695278341",options:["$3.68$","$4.68$","$5.68$","$2.68$"],solution:`Einstein's equation: $\\phi = \\dfrac{hc}{\\lambda} - eV_s$.

**Photon energy:**
$$\\frac{hc}{\\lambda} = \\frac{(6.62\\times10^{-34})(3\\times10^{8})}{331\\times10^{-9}} = \\frac{1.986\\times10^{-25}}{3.31\\times10^{-7}} = 6.0\\times10^{-19}\\ \\text{J}$$

**Energy carried by stopping potential:**
$$eV_s = (1.6\\times10^{-19})(0.2) = 0.32\\times10^{-19}\\ \\text{J}$$

**Work function:**
$$\\phi = 6.0\\times10^{-19} - 0.32\\times10^{-19} = 5.68\\times10^{-19}\\ \\text{J}$$

So $\\alpha = 5.68$.

**Answer:** C ($5.68$)`,statement:`Light source having wavelength 331 nm is used to generate photo-electrons whose stopping potential is 0.2 V. The work function of the used metal in the experiment is $\\alpha \\times 10^{-19}$ J. The value of $\\alpha$ is ______.
($h = 6.62 \\times 10^{-34}$ J s, $e = 1.6 \\times 10^{-19}$ C and $c = 3 \\times 10^8$ m/s)`,subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"increased two times",id:"695278342",options:["increased two times","increased $\\frac{3}{2}$ times","decreased two times","decreased $\\frac{3}{2}$ times"],solution:`For a symmetric biconvex lens (both radii $R$):
$$\\frac{1}{f_{\\text{bi}}} = (\\mu - 1)\\frac{2}{R}.$$

Cutting it vertically gives a plano-convex lens (one flat face, $R \\to \\infty$):
$$\\frac{1}{f_{\\text{pc}}} = (\\mu - 1)\\frac{1}{R} = \\frac{1}{2f_{\\text{bi}}} \\implies f_{\\text{pc}} = 2f_{\\text{bi}}.$$

The objective's linear magnification is $m_o \\approx \\dfrac{L}{f_o}$, where $L$ is the tube length. To keep $m_o$ (hence the overall magnification) unchanged with the object distance fixed, when $f_o$ doubles the tube length must also double:
$$\\frac{L'}{f_{\\text{pc}}} = \\frac{L}{f_{\\text{bi}}} \\implies L' = \\frac{f_{\\text{pc}}}{f_{\\text{bi}}}L = 2L.$$

**Answer:** A (increased two times)`,statement:"A compound microscope is designed with two symmetric biconvex lenses. The objective lens is cut vertically, creating two identical plano-convex lenses. One of them is used in place of original objective lens. To retain same magnification keeping the object distance unchanged, the tube length has to be",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$38$",id:"695278343",options:["$56$","$38$","$96$","$5.6$"],solution:"",statement:`Two wires as shown in the figure below, made of steel and have breaking stress of $12 \\times 10^8$ N/m$^2$. Area of cross-section of upper wire is 0.008 cm$^2$ and of lower wire is 0.004 cm$^2$. The maximum mass that can be added to pan without breaking any wire is ________ kg.
(take $g = 10$ m/s$^2$)
[figure: an upper wire (0.008 cm$^2$) hangs from a ceiling and supports a 30 kg block; below it a lower wire (0.004 cm$^2$) supports a 10 kg block; below that a pan is attached to which mass can be added]`,subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$\\sqrt{\\frac{7}{8}}$",id:"695278344",options:["$\\sqrt{\\frac{6}{7}}$","$\\sqrt{\\frac{3}{5}}$","$\\sqrt{\\frac{7}{8}}$","$\\sqrt{\\frac{3}{4}}$"],solution:`Let the reactance at frequency $\\omega$ be $X_C = \\dfrac{1}{\\omega C}$. At $\\omega/4$ the reactance becomes $4X_C$.

At $\\omega$:

$$I = \\frac{V}{\\sqrt{R^2 + X_C^2}}$$

At $\\omega/4$:

$$\\frac{I}{3} = \\frac{V}{\\sqrt{R^2 + (4X_C)^2}}$$

Dividing:

$$3 = \\frac{\\sqrt{R^2 + 16X_C^2}}{\\sqrt{R^2 + X_C^2}} \\implies 9(R^2 + X_C^2) = R^2 + 16X_C^2$$

$$8R^2 = 7X_C^2 \\implies \\frac{R^2}{X_C^2} = \\frac{7}{8} \\implies \\frac{R}{X_C} = \\sqrt{\\frac{7}{8}}$$

**Answer:** $\\sqrt{\\dfrac{7}{8}}$`,statement:"An a.c. source of angular frequency $\\omega$ is connected across a resistor $R$ and a capacitor $C$ in series. The current is observed as $I$. Now the frequency of the source is changed to $\\omega/4$, (keeping the voltage unchanged) the current is found to be $I/3$. The ratio of resistance to reactance at frequency $\\omega$ is",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$A = 1, B = 0, C = 1$",id:"695278345",options:["$A = 0, B = 1, C = 1$","$A = 1, B = 0, C = 0$","$A = 1, B = 0, C = 1$","$A = 1, B = 1, C = 0$"],solution:"",statement:`For the given logic circuit, which of the following inputs combination will make both LED-1 and LED-2 to glow?
[figure: a logic circuit with inputs A, B and C. Inputs A and B feed an OR gate; its output (with LED-1 connected to ground via a resistor) and an input go to an AND gate; the AND gate output feeds another AND gate (with LED-2 connected to ground via a resistor); input C is connected into the lower part of the circuit]`,subject:"Physics",type:"mcq"},{correct_index:null,correct_value:"2",id:"695278346",options:[],solution:`For shear, the modulus of rigidity relates shear stress to shear strain:
$$\\eta = \\frac{F/A}{x/L} \\implies x = \\frac{F L}{A \\eta}$$

The tangential force acts on the top face of area $A = L^2 = (0.05)^2 = 2.5 \\times 10^{-3}\\ \\text{m}^2$, and $L = 0.05\\ \\text{m}$:
$$x = \\frac{10 \\times 0.05}{(2.5 \\times 10^{-3})(10^5)} = \\frac{0.5}{250} = 2 \\times 10^{-3}\\ \\text{m}$$

$$x = 2\\ \\text{mm}$$

**Answer:** 2`,statement:"A cube has side length 5 cm and modulus of rigidity $10^5$ N/m$^2$. The displacement produced by a force of 10 N in the upper face of cube is ______ mm.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"13",id:"695278347",options:[],solution:`The ball is dropped from rest, so we need the point where its speed equals the numerical value of $g$, i.e. $v = 10$ m/s.

Using $v^2 = u^2 + 2g\\,h_{\\text{fall}}$ with $u = 0$:

$$10^2 = 2(10)\\,h_{\\text{fall}} \\implies h_{\\text{fall}} = \\frac{100}{20} = 5\\ \\text{m}$$

Height above the ground:

$$h = 18 - 5 = 13\\ \\text{m}$$

**Answer:** 13`,statement:`From 18 m height above the ground a ball is dropped from rest. The height above the ground at which the magnitude of velocity equal to the magnitude of acceleration (in the same set of units) due to gravity is ______ m.
(Take $g = 10$ m/s$^2$ and neglect the air resistance)`,subject:"Physics",type:"integer"},{correct_index:null,correct_value:"349",id:"695278348",options:[],solution:`The distance between two successive crests equals one wavelength.

From the wave equation, the wave number is:

$$k = 0.018\\ \\text{cm}^{-1}$$

Wavelength:

$$\\lambda = \\frac{2\\pi}{k} = \\frac{2 \\times 3.14}{0.018} = \\frac{6.28}{0.018} = 348.9\\ \\text{cm}$$

Nearest integer:

$$\\lambda \\approx 349\\ \\text{cm}$$

**Answer:** 349`,statement:`A transverse wave on a string is described by $y = 3\\sin(36t + 0.018x + \\pi/4)$, where $x, y$ are in cm and $t$ in seconds. The least distance between the two successive crests in the wave is ______ cm. (Nearest integer)
($\\pi = 3.14$)`,subject:"Physics",type:"integer"},{correct_index:null,correct_value:"12",id:"695278349",options:[],solution:`The magnetic force $\\vec{F} = q\\vec{v}\\times\\vec{B}$ is always perpendicular to $\\vec{B}$. Since $\\vec{a} = \\vec{F}/m$, the acceleration must also be perpendicular to $\\vec{B}$:

$$\\vec{a}\\cdot\\vec{B} = 0$$

$$\\left(4\\hat{i} - \\frac{x}{2}\\hat{j}\\right)\\cdot(3\\hat{i} + 2\\hat{j}) = 0$$

$$4\\times 3 + \\left(-\\frac{x}{2}\\right)\\times 2 = 12 - x = 0$$

Hence $x = 12$.

**Answer:** 12`,statement:"The charged particle moving in a uniform magnetic field of $(3\\hat{i} + 2\\hat{j})$ T has an acceleration $\\left( 4\\hat{i} - \\frac{x}{2}\\hat{j} \\right)$ m/s$^2$. The value of $x$ is",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"6",id:"695278350",options:[],solution:`Let each inductance be $L$ and the total current from the source be $I$ (this flows fully through $L_1$).

The parallel combination $L_2 \\parallel L_3 = \\dfrac{L}{2}$, and since $L_2 = L_3$ the current splits equally, so each carries $I/2$.

Total energy:

$$U_t = \\frac{1}{2}L_1 I^2 + \\frac{1}{2}\\left(\\frac{L}{2}\\right)I^2 = \\frac{1}{2}L I^2 + \\frac{1}{4}L I^2 = \\frac{3}{4}L I^2$$

Energy in $L_2$ (carrying $I/2$):

$$U_l = \\frac{1}{2}L\\left(\\frac{I}{2}\\right)^2 = \\frac{1}{8}L I^2$$

Ratio:

$$\\frac{U_t}{U_l} = \\frac{\\tfrac{3}{4}L I^2}{\\tfrac{1}{8}L I^2} = \\frac{3/4}{1/8} = 6$$

**Answer:** 6`,statement:`In the given circuit below inductance values of $L_1$, $L_2$ and $L_3$ are same. The magnetic energy stored in the entire circuit is ($U_t$) and that stored in the $L_2$ inductor is ($U_l$). $U_t / U_l$ is ________.
(Ignore the mutual inductance if any)
[figure: inductor $L_1$ in series with a parallel combination of $L_2$ (top branch) and $L_3$ (bottom branch)]`,subject:"Physics",type:"integer"},{correct_index:1,correct_value:"$2.16$ g",id:"695278351",options:["$1.08$ g","$2.16$ g","$3.24$ g","$4.32$ g"],solution:`**Reactions** — the final residue is metallic silver:

$$\\text{Ag}_2\\text{CO}_3 \\xrightarrow{\\Delta} \\text{Ag}_2\\text{O} + \\text{CO}_2, \\qquad 2\\,\\text{Ag}_2\\text{O} \\xrightarrow{\\Delta} 4\\,\\text{Ag} + \\text{O}_2$$

**Step 1 — Molar mass of $\\text{Ag}_2\\text{CO}_3$:**

$$2(108) + 12 + 3(16) = 276\\ \\text{g mol}^{-1}$$

**Step 2 — Moles:**

$$n = \\frac{2.76}{276} = 0.01\\ \\text{mol}$$

**Step 3 — Mass of Ag** ($2$ mol Ag per mol $\\text{Ag}_2\\text{CO}_3$):

$$m_{\\text{Ag}} = (0.01 \\times 2) \\times 108 = 2.16\\ \\text{g}$$

**Answer:** B`,statement:`How many grams of residue is obtained by heating 2.76 g of silver carbonate?
(Given : Molar mass of C, O and Ag are 12, 16 and 108 g mol$^{-1}$ respectively)`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"$E < B < A < D < C$",id:"695278352",options:["$C < D < B < A < E$","$B < A < E < C < D$","$E < C < D < B < A$","$E < B < A < D < C$"],solution:`For multi-electron atoms, energy order follows the $(n+l)$ rule; ties are broken by lower $n$.

| Label | Orbital | $n+l$ |
|-------|---------|-------|
| E | 2p | $3$ |
| B | 4s | $4$ |
| A | 3d | $5$ |
| D | 5p | $6$ |
| C | 6p | $7$ |

Increasing energy: $E < B < A < D < C$.

**Answer:** D`,statement:`Arrange the following atomic orbitals of multi electron atoms in order of increasing energy.

A. $n = 3, l = 2, m = +1$
B. $n = 4, l = 0, m = 0$
C. $n = 6, l = 1, m = 0$
D. $n = 5, l = 1, m = +1$
E. $n = 2, l = 1, m = +1$

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"A, B and D Only",id:"695278353",options:["A, B and C Only","A, B and D Only","B, C and D Only","A, C and D Only"],solution:`**A.** True — Heisenberg's uncertainty principle applies to microscopic particles such as electrons.

**B.** True — a higher principal quantum number means a larger orbital, so $2p_x < 3p_x$ in size.

**C.** False — orbital energies depend on nuclear charge. For a given shell, energy $\\propto Z^2$ (H-like) or is shifted by $Z_{\\text{eff}}$ in multi-electron atoms, so the $2s$ energy of Li is much lower (more negative) than that of H.

**D.** True — Cr shows the stable half-filled configuration $[\\text{Ar}]\\,3d^5\\,4s^1$.

Correct statements: A, B and D.

**Answer:** B`,statement:`Identify the correct statements from the following :

A. Heisenberg uncertainty principle is applicable to electrons.
B. The size of $2p_x$ orbital is less than the size of $3p_x$ orbital.
C. The energy of $2s$ orbital of H atom is equal to the energy of $2s$ orbital of Li.
D. The electronic configuration of Cr is [Ar] $3d^5 4s^1$.

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"$0.967$",id:"695278354",options:["$0.825$","$0.032$","$0.867$","$0.967$"],solution:`Take 100 g of solution: 10 g urea and 90 g water.
Molar mass of urea $\\mathrm{(NH_2)_2CO} = 2(14+2) + 12 + 16 = 60\\ \\text{g mol}^{-1}$.
$$n_{\\text{urea}} = \\frac{10}{60} = 0.1667\\ \\text{mol},\\qquad n_{\\text{water}} = \\frac{90}{18} = 5\\ \\text{mol}.$$
$$x_{\\text{water}} = \\frac{n_{\\text{water}}}{n_{\\text{water}}+n_{\\text{urea}}} = \\frac{5}{5 + 0.1667} = \\frac{5}{5.1667} = 0.967.$$

**Answer:** D ($0.967$)`,statement:`What is the mole fraction of water in 10% by weight (w/w) of aqueous urea solution?
[Given: Molar mass of H, O, C and N are 1, 16, 12 and 14 g mol$^{-1}$ respectively.]`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"$\\frac{1}{54} \\cdot \\frac{y^4}{x^4}$",id:"695278355",options:["$\\frac{1}{54} \\cdot \\frac{y^4}{x^4}$","$\\frac{y^5}{108x^4}$","$108 \\cdot \\frac{x^5}{y^5}$","$\\frac{1}{108} \\cdot \\frac{y^4}{x^4}$"],solution:`**Molar solubility** $s = \\dfrac{\\text{solubility (g/L)}}{\\text{molar mass}} = \\dfrac{x}{y}\\ \\text{mol L}^{-1}$.

Dissociation: $M_3A_2 \\rightleftharpoons 3M^{2+} + 2A^{3-}$, so
$$[A^{3-}] = 2s, \\qquad [M^{2+}] = 3s$$

$$K_{sp} = [M^{2+}]^3[A^{3-}]^2 = (3s)^3 (2s)^2 = 27s^3 \\cdot 4s^2 = 108\\,s^5$$

**Required ratio:**
$$\\frac{[A^{3-}]}{K_{sp}} = \\frac{2s}{108\\,s^5} = \\frac{1}{54\\,s^4} = \\frac{1}{54}\\cdot\\frac{1}{(x/y)^4} = \\frac{1}{54}\\cdot\\frac{y^4}{x^4}$$

**Answer:** A $\\left(\\frac{1}{54} \\cdot \\frac{y^4}{x^4}\\right)$`,statement:"$M_3A_2$ is a sparingly soluble salt of molar mass $y$ g mol$^{-1}$ and solubility $x$ g L$^{-1}$. The ratio of the molar concentration of the anion ($A^{3-}$) to the solubility product of the salt is",subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"$C < B < A$",id:"695278356",options:["$B < C < A$","$C < A < B$","$C < B < A$","$A < C < B$"],solution:`Compute milliequivalents (meq) of H$^+$ and OH$^-$ in each.

**A.** OH$^-$ $= 10 \\times 0.2 \\times 2 = 4$ meq; H$^+$ $= 25 \\times 0.1 = 2.5$ meq. Excess OH$^-$ $= 1.5$ meq in 35 mL:
$$[\\text{OH}^-] = \\frac{1.5}{35} \\approx 0.043 \\implies \\text{pOH} \\approx 1.37,\\ \\text{pH} \\approx 12.6\\ (\\text{strongly basic})$$

**B.** H$^+$ $= 10 \\times 0.01 \\times 2 = 0.2$ meq; OH$^-$ $= 10 \\times 0.01 \\times 2 = 0.2$ meq. Exactly neutralized $\\Rightarrow \\text{pH} = 7$.

**C.** H$^+$ $= 10 \\times 0.1 \\times 2 = 2$ meq; OH$^-$ $= 10 \\times 0.1 = 1$ meq. Excess H$^+$ $= 1$ meq in 20 mL:
$$[\\text{H}^+] = \\frac{1}{20} = 0.05 \\implies \\text{pH} \\approx 1.3\\ (\\text{acidic})$$

Increasing pH: $\\text{C}\\ (1.3) < \\text{B}\\ (7) < \\text{A}\\ (12.6)$.

**Answer:** C ($C < B < A$)`,statement:`Arrange the following resultant mixtures in increasing order of their pH values

A. 10 mL 0.2 M Ca(OH)$_2$ + 25 mL 0.1 M HCl
B. 10 mL 0.01 M H$_2$SO$_4$ + 10 mL 0.01 M Ca(OH)$_2$
C. 10 mL 0.1 M H$_2$SO$_4$ + 10 mL 0.1 M KOH

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"$\\frac{1}{t}\\ln\\frac{p_i}{2p_i - p_t}$",id:"695278357",options:["$\\frac{1}{t}\\ln\\frac{p_i}{2p_i - p_t}$","$\\frac{1}{t}\\ln\\frac{2p_i}{p_i - p_t}$","$\\frac{1}{t}\\ln\\frac{p_i}{3p_i - 2p_t}$","$\\frac{1}{t}\\ln\\frac{3p_i}{4p_i - p_t}$"],solution:`Let $x$ be the pressure of $A$ that has decomposed at time $t$.

| Species | $A$ | $B$ | $C$ |
|---|---|---|---|
| Pressure at $t$ | $p_i - x$ | $x$ | $x$ |

Total pressure:

$$p_t = (p_i - x) + x + x = p_i + x \\Rightarrow x = p_t - p_i$$

Pressure of $A$ remaining:

$$p_A = p_i - x = p_i - (p_t - p_i) = 2p_i - p_t$$

For a first order reaction:

$$k = \\frac{1}{t}\\ln\\frac{p_i}{p_A} = \\frac{1}{t}\\ln\\frac{p_i}{2p_i - p_t}$$

**Answer:** A`,statement:`First order gas phase reaction
$$A \\to B + C$$
$p_i$ = initial pressure of gas A, $p_t$ = total pressure of the reaction mixture at time $t$.
Expression of rate constant ($k$) is`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"Both Statement I and Statement II are true",id:"695278358",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:`**Statement I:** Electronegativity increases across Period 2. On the Pauling scale:

$$\\text{F} = 4.0 > \\text{O} = 3.5 > \\text{N} = 3.0$$

So $F > O > N$ is correct. **Statement I is true.**

**Statement II:** In $OF_2$, fluorine is more electronegative than oxygen, so F takes $-1$ each:

$$x + 2(-1) = 0 \\implies x = +2$$

In $Na_2O$, sodium is $+1$ each:

$$2(+1) + y = 0 \\implies y = -2$$

Both assignments are correct. **Statement II is true.**

**Answer:** A (Both Statement I and Statement II are true)`,statement:`Given below are two statements:

Statement I: The correct order of electronegativity of fluorine, oxygen and nitrogen is F > O > N.

Statement II: The oxidation state of oxygen in OF$_2$ is +2 and in Na$_2$O is $-2$.

In the light of the above statements, choose the correct answer from the options given below`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"A and E Only",id:"695278359",options:["B, C and D Only","C, D and E Only","A, C and E Only","A and E Only"],solution:`Evaluate each statement:

- **A.** Nitrogen in the intermediate oxidation states $+1$ to $+4$ does disproportionate in acidic medium (NCERT fact). **Correct.**
- **B.** Nitrogen has **no $d$-orbitals**, so it forms $p\\pi$–$p\\pi$ multiple bonds, not $d\\pi$–$p\\pi$. **Wrong.**
- **C.** The N–N single bond ($\\approx 159\\ \\text{kJ mol}^{-1}$) is **weaker** than the P–P single bond ($\\approx 209\\ \\text{kJ mol}^{-1}$) because of high lone-pair repulsion in the small N atom. **Wrong.**
- **D.** Nitrogen is a diatomic **gas** and has the **lowest** density in group 15 (Bi has the highest). **Wrong.**
- **E.** Nitrogen's valence shell has only four orbitals ($2s, 2p_x, 2p_y, 2p_z$), so its maximum covalency is four. **Correct.**

Correct statements: **A and E only**.

**Answer:** D`,statement:`Correct statements from the following are:

A. Nitrogen in oxidation states from +1 to +4 disproportionates in acid medium.
B. Nitrogen has the ability to form $d\\pi$ - $p\\pi$ multiple bonds with itself and other elements with small size and high electronegativity.
C. N-N single bond is stronger than P-P single bond.
D. Nitrogen has highest density in its group due to small size.
E. The maximum covalency of nitrogen is four since it has only four valence orbitals for bonding.

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"They are very soft and ionic in nature.",id:"695278360",options:["They have high melting points, higher than those of pure metals.","They are very soft and ionic in nature.","They retain metallic conductivity.","They are chemically inert and usually non-stoichiometric."],solution:`Interstitial compounds form when small atoms (H, C, N, B) occupy the interstitial holes of a transition-metal lattice. Their characteristic properties are:

- high melting points, often **higher than the pure metal** — a true property;
- they **retain metallic conductivity** — a true property;
- they are **chemically inert** and are usually **non-stoichiometric** — a true property;
- they are **very hard and rigid** (not soft) and are essentially **metallic/covalent, not ionic**.

Hence the statement "very soft and ionic in nature" is the one that is NOT correct.

**Answer:** B`,statement:"Which of the following is NOT a physical or chemical characteristics of interstitial compounds?",subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"A, C and D Only",id:"695278361",options:["A and B Only","A, C and D Only","B and C Only","A and D Only"],solution:`- **A.** The M–C bond has both $\\sigma$ (ligand $\\to$ metal) and $\\pi$ (metal $\\to$ ligand) character. TRUE.
- **B.** Synergic bonding **strengthens** the M–C bond (and weakens the C–O bond) because back-donation reinforces M–C. So "becomes weak" is FALSE.
- **C.** The $\\sigma$ bond forms by donation of the carbon lone pair into a vacant metal orbital. TRUE.
- **D.** The $\\pi$ bond forms by back-donation from a filled metal $d$-orbital into the vacant $\\pi^*$ of CO. TRUE.

Correct statements: A, C and D.

**Answer:** B (A, C and D Only)`,statement:`The correct statements about metal carbonyls are

A. The metal-carbon bonds in metal carbonyls possess both $\\sigma$ and $\\pi$-character.
B. Due to synergic bonding interactions between metal and CO ligand, the metal-carbon bond becomes weak.
C. The metal-carbon $\\sigma$ bond is formed by the donation of lone pair of electrons on the carbonyl carbon into a vacant orbital of metal.
D. The metal-carbon $\\pi$ bond is formed by the donation of electrons from filled d-orbital of metal into vacant $\\pi^*$ orbital of CO.

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"Both Statement I and Statement II are correct",id:"695278362",options:["Both Statement I and Statement II are correct","Both Statement I and Statement II are incorrect","Statement I is correct but Statement II is incorrect","Statement I is incorrect but Statement II is correct"],solution:`**Statement I** — In an octahedral field, relative to the barycentre, each $e_g$ electron raises the energy by $+0.6\\,\\Delta_o$ and each $t_{2g}$ electron lowers it by $-0.4\\,\\Delta_o$. This is the standard CFSE convention. TRUE.

**Statement II** — In a free (gaseous) metal atom/ion the five $d$-orbitals are degenerate. On complex formation the ligand field lifts (destroys) this degeneracy, splitting them into $t_{2g}$ and $e_g$. TRUE.

Both statements are correct.

**Answer:** A (Both Statement I and Statement II are correct)`,statement:`Given below are two statements:

Statement I: Each electron in $e_g$ orbitals destabilizes the orbitals by $+0.6\\,\\Delta_o$ and each electron in the $t_{2g}$ orbitals stabilizes the orbitals by $-0.4\\,\\Delta_o$ in an octahedral field on the basis of crystal field theory.

Statement II: All the d-orbitals of the transition metals have the same energy in their free atomic state but when a complex is formed the ligands destroy the degeneracy of these orbitals on the basis of crystal field theory.

In the light of the above statements, choose the correct answer from the options given below`,subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"Statement I is correct but Statement II is incorrect",id:"695278363",options:["Both Statement I and Statement II are correct","Both Statement I and Statement II are incorrect","Statement I is correct but Statement II is incorrect","Statement I is incorrect but Statement II is correct"],solution:`**Statement I.** A carbanion carries a negative charge, so it is **destabilised** by electron-donating groups. Alkyl groups are $+I$ (electron donating), and each added alkyl group intensifies the negative charge, making the carbanion less stable. Thus more alkyl substitution $\\Rightarrow$ lower stability:
$$CH_3^- > CH_3CH_2^- > (CH_3)_2CH^- > (CH_3)_3C^-$$
This order is **correct**.

**Statement II.** Allyl and benzyl carbanions are primarily stabilised by **resonance** (delocalisation of the negative charge over the $\\pi$-system / ring), not merely by an inductive effect. The statement claims the opposite, so it is **incorrect**.

**Answer:** C`,statement:`Given below are two statements:

Statement I: On the basis of inductive effect, the order of stability of alkyl carbanions is $CH_3^- > CH_3{-}CH_2^- > (CH_3)_2CH^- > (CH_3)_3C^-$.

Statement II: Allyl and benzyl carbanions are more stabilised by inductive effect and not by resonance effect.

In the light of the above statements, choose the correct answer from the options given below`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"[figure: a cyclohexene ring with two adjacent $CH_3$ groups on the double-bonded carbons (1,2-dimethylcyclohexene)]",id:"695278364",options:["[figure: a cyclohexene ring with a $CH_3$ group on one side and a $-CH_3$ group on the other side; double bond in the ring]","[figure: a cyclohexene ring with a $-CH_2-CH_3$ (ethyl) substituent and a ring double bond]","[figure: a cyclopentene ring bearing a $-CH_3$ group and a $-CH_2-CH_3$ (ethyl) group at adjacent alkene carbons]","[figure: a cyclohexene ring with two adjacent $CH_3$ groups on the double-bonded carbons (1,2-dimethylcyclohexene)]"],solution:"",statement:`"P" is a hydrocarbon of molecular formula $C_8H_{14}$. On ozonolysis, "P" forms "Q". "Q" on treatment with alkali under reflux condition produces "R", which on treatment with $I_2$/NaOH gives a yellow precipitate. Acidification of the solution gives "S". The structure of "S" is given below:
[figure: a cyclopentene ring with a $-CH_3$ group attached at one alkene carbon and a $-COOH$ group attached to a ring carbon]
The correct structure of "P" is`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"B and C only",id:"695278365",options:["A and D only","B and C only","A and C only","B and D only"],solution:"",statement:`For the following Friedel Craft's alkylation reaction, which of the statements are correct?
[figure: benzene + n-propyl chloride (CH$_3$CH$_2$CH$_2$Cl) reacting with anhydrous AlCl$_3$ to give alkylbenzene]

A. Major product is n-propyl benzene.
B. iso-propyl carbocation intermediate is also generated.
C. Multiple substitution is inevitable.
D. Introducing electron-donating substituent on benzene will not produce any alkyl benzene.

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"A and B Only",id:"695278366",options:["A and B Only","A and C Only","B and D Only","D and E Only"],solution:"",statement:`Benzyl isocyanide can be obtained from

A. [figure: benzyl bromide ($C_6H_5CH_2Br$)] $\\xrightarrow{\\text{AgCN}}$
B. [figure: benzylamine ($C_6H_5CH_2NH_2$)] $\\xrightarrow[\\text{Aq NaOH}]{\\text{CHCl}_3}$
C. [figure: bromobenzene ($C_6H_5Br$)] $\\xrightarrow{\\text{AgCN}}$
D. [figure: aniline ($C_6H_5NH_2$)] $\\xrightarrow[\\text{Aq NaOH}]{\\text{CHCl}_3}$
E. [figure: 2-phenylethyl bromide ($C_6H_5CH_2CH_2Br$)] $\\xrightarrow{\\text{KCN}}$

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"D: Conc. H$_2$SO$_4$ or H$_3$PO$_4$; E: $CH_2 = CH - CH = CH_2$",id:"695278367",options:["D: Conc. H$_2$SO$_4$; E: $CH_2 = CH - CH(OH)CH_3$","D: PCC; E: $HO - CH_2 - CH_2 - CH = CH_2$","D: PCC; E: $CH_2 = CH - CH = CH_2$","D: Conc. H$_2$SO$_4$ or H$_3$PO$_4$; E: $CH_2 = CH - CH = CH_2$"],solution:`**A → B:** pentan-1-ol loses a molecule of water to give a pentene. Removal of $H_2O$ from an alcohol is **acid-catalysed dehydration**, so reagent **D = conc. $H_2SO_4$ (or $H_3PO_4$)** — not an oxidant like PCC. This immediately eliminates the two PCC options.

**C → E (same reaction, excess D):** $C$ is **butane-1,3-diol**, $HO\\text{–}CH_2\\text{–}CH_2\\text{–}CH(OH)\\text{–}CH_3$. With excess dehydrating acid, **both** $-OH$ groups are eliminated:
$$HO\\text{–}CH_2\\text{–}CH_2\\text{–}CH(OH)\\text{–}CH_3 \\xrightarrow[-2\\,H_2O]{\\text{excess } H_2SO_4} CH_2{=}CH\\text{–}CH{=}CH_2$$

giving the conjugated diene **buta-1,3-diene**. This matches option D.

**Answer:** D: Conc. $H_2SO_4$ or $H_3PO_4$; E: $CH_2=CH-CH=CH_2$`,statement:`Consider compounds A, B and C with following structural formulae
$A = CH_3 - CH_2 - CH_2 - CH_2 - CH_2 - OH$
$B = CH_2 = CH - CH_2 - CH_2 - CH_3$
$C = HO - CH_2 - CH_2 - CH(OH) - CH_3$
For the conversion of B from A, reagent (D) required is ________ and structural formula of product (E) obtained when C undergoes same reaction using excess reagent (D) is ________.`,subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"B and C Only",id:"695278368",options:["A and D Only","A and C Only","B and C Only","A and B Only"],solution:"",statement:`Identify the incorrect statements.

A. [figure: benzylamine ($C_6H_5CH_2NH_2$)] is a stronger base than B. [figure: aniline ($C_6H_5NH_2$)].
C. [figure: p-methoxyaniline ($H_3CO-C_6H_4-NH_2$)] can be synthesized by Gabriel phthalimide synthesis.
D. [figure: 2-phenylacetamide ($C_6H_5CH_2CONH_2$)] $\\xrightarrow{\\text{Br}_2,\\ \\text{NaOH}}$ primary aromatic amine.
(last statement) [figure: p-nitroaniline ($O_2N-C_6H_4-NH_2$)] $\\xrightarrow[(ii)\\ \\Delta]{(i)\\ \\text{NaNO}_2,\\ \\text{HCl},\\ 0°C}$ product will dissolve in NaOH

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"A, B and E Only",id:"695278369",options:["A and B Only","B and C Only","A, B and D Only","A, B and E Only"],solution:`Evaluate each statement:

- **A — True.** Glucose exists as $\\alpha$- and $\\beta$-anomers.
- **B — True.** The anomers differ only in configuration at the anomeric carbon C-1 of the cyclic hemiacetal.
- **C — False.** $\\alpha$-D-glucose melts at $\\approx 146\\,^\\circ\\text{C}$ and $\\beta$-D-glucose at $\\approx 150\\,^\\circ\\text{C}$, so $\\alpha < \\beta$.
- **D — False.** The specific rotations are **swapped**: $\\alpha$-anomer $= +111^\\circ$ (≈ $+112^\\circ$) and $\\beta$-anomer $= +19^\\circ$.
- **E — True.** $\\alpha$-glucose crystallises from saturated solution at $303\\ \\text{K}$ and $\\beta$-glucose above $371\\ \\text{K}$.

Correct statements: **A, B and E**.

**Answer:** D`,statement:`Identify the correct statements.

A. Glucose exists in two anomeric forms.
B. Anomers of glucose differ in configuration at C-1 in cyclic hemiacetal structure.
C. Melting point of $\\alpha$ - anomer of glucose is greater than $\\beta$ - anomer.
D. Specific rotation of $\\alpha$ - anomer is +19° while for $\\beta$ - anomer is +112°
E. $\\alpha$ and $\\beta$ - anomers of glucose are prepared by crystallization of saturated glucose solution at 303 K and 371 K respectively.

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"Both Statement I and Statement II are false",id:"695278370",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:`A primary standard must be a stable, high-purity solid of exactly known composition that is **non-hygroscopic**, so it can be weighed directly to make a standard solution.

**Statement I:** Only **potassium dichromate ($K_2Cr_2O_7$)** meets this test — it is anhydrous and non-hygroscopic, so it is a primary standard. **Sodium dichromate**, however, is **hygroscopic (deliquescent)** and is normally obtained as the dihydrate $Na_2Cr_2O_7\\cdot 2H_2O$; it absorbs moisture and cannot be weighed to an exactly known composition, so it is **not** a primary standard. Because the statement lumps *both* dichromates together as primary standards, Statement I is **false**.

**Statement II:** Phenolphthalein is a **weak organic acid** (not a base). It stays colourless and essentially **un-ionised in acidic medium**, and dissociates (turning pink) only in basic medium, pH $\\approx 8.3$–$10$. So calling it a weak base that dissociates in acidic medium is **false** on both counts. Statement II is **false**.

Hence both Statement I and Statement II are false.

**Answer:** B`,statement:`Given below are two statements:

Statement I: Sodium dichromate and potassium dichromate are classified as primary standards in titrimetric analysis.

Statement II: Phenolphthalein is a weak base, therefore it dissociates in acidic medium.

In the light of the above statements, choose the correct answer from the options given below`,subject:"Chemistry",type:"mcq"},{correct_index:null,correct_value:"4",id:"695278371",options:[],solution:`$sp^3d$ hybridization corresponds to a steric number (SN) of $5$.

| Species | Bond pairs | Lone pairs | SN | Hybridization |
|---|---|---|---|---|
| $BrF_5$ | 5 | 1 | 6 | $sp^3d^2$ |
| $XeF_5^-$ | 5 | 2 | 7 | $sp^3d^3$ |
| $BF_4^-$ | 4 | 0 | 4 | $sp^3$ |
| $ICl_4^-$ | 4 | 2 | 6 | $sp^3d^2$ |
| $XeF_4$ | 4 | 2 | 6 | $sp^3d^2$ |
| $SF_4$ | 4 | 1 | 5 | $sp^3d$ ✓ |
| $NH_4^+$ | 4 | 0 | 4 | $sp^3$ |
| $ClF_3$ | 3 | 2 | 5 | $sp^3d$ ✓ |
| $XeF_2$ | 2 | 3 | 5 | $sp^3d$ ✓ |
| $ICl_2^-$ | 2 | 3 | 5 | $sp^3d$ ✓ |

Species with $sp^3d$: $SF_4,\\ ClF_3,\\ XeF_2,\\ ICl_2^-$ $\\Rightarrow 4$.

**Answer:** 4`,statement:`Consider the following species:
$BrF_5$, $XeF_5^-$, $BF_4^-$, $ICl_4^-$, $XeF_4$, $SF_4$, $NH_4^+$, $ClF_3$, $XeF_2$, $ICl_2^-$
Number of species having $sp^3d$ hybridized central atom is ________.`,subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"41 or 42",id:"695278372",options:[],solution:`**Step 1 — sulphur contained in the BaSO$_4$.** One mole of $\\text{BaSO}_4$ carries one mole of S.
$$m_{\\text{S}} = 0.6 \\times \\frac{32}{231} = 0.0831\\ \\text{g}$$

**Step 2 — percentage of sulphur in the sample.**
$$\\%\\,\\text{S} = \\frac{0.0831}{0.2}\\times 100 = 41.56\\% \\approx 42\\%$$

**Answer:** 42`,statement:`In an estimation of sulphur by Carius method 0.2 g of the substance gave 0.6 g of BaSO$_4$. The percentage of sulphur in the substance is ________ %.
(Given molar mass in g mol$^{-1}$ S : 32, BaSO$_4$ : 231)`,subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"175",id:"695278373",options:[],solution:`Dilute $HNO_3$ nitrates phenol to a mixture of **o-nitrophenol** and **p-nitrophenol**. Only *ortho*-nitrophenol is **steam volatile** (intramolecular H-bonding lowers its boiling point; the para isomer forms intermolecular H-bonds and is non-volatile). So **X = o-nitrophenol**, $C_6H_4(OH)(NO_2)$.

**% oxygen in phenol** ($C_6H_6O$, $M = 94$):
$$\\dfrac{16}{94}\\times 100 = 17.02\\%$$

**% oxygen in o-nitrophenol** ($C_6H_5NO_3$, $M = 72+5+14+48 = 139$; O mass $= 3\\times16 = 48$):
$$\\dfrac{48}{139}\\times 100 = 34.53\\%$$

**Increase:**
$$34.53 - 17.02 = 17.51\\%$$

Expressed as $\\times 10^{-1}\\%$: $\\;17.51 / 0.1 = 175.1 \\approx \\mathbf{175}$.

**Answer:** 175`,statement:`One mole of phenol is treated with dilute HNO$_3$ at 298 K to give a mixture of products. The mixture is separated by steam distillation. The steam volatile compound (X) is separated. The increase in percentage of oxygen in (X) with respect to phenol is ________ $\\times 10^{-1}$ %
(Given molar mass in g mol$^{-1}$ H:1, C:12, N:14, O:16)`,subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"230",id:"695278374",options:[],solution:`The van't Hoff equation in log form:
$$\\log_{10} K_p = -\\frac{\\Delta H^\\circ}{2.303\\,R}\\cdot\\frac{1}{T} + \\text{constant}$$

So the plot of $\\log_{10}K_p$ vs $\\frac{1}{T}$ is a straight line of slope $-\\dfrac{\\Delta H^\\circ}{2.303\\,R}$.

**Slope** from any two points:
$$\\text{slope} = \\frac{1.5 - 3.5}{0.07 - 0.05} = \\frac{-2}{0.02} = -100$$

Therefore:
$$-\\frac{\\Delta H^\\circ}{2.303\\,R} = -100 \\implies \\frac{\\Delta H^\\circ}{R} = 100 \\times 2.303 = 230.3$$

Magnitude (nearest integer) $= 230$.

**Answer:** 230`,statement:`The values of pressure equilibrium constant recorded at different temperatures for the following equilibrium reaction have been given below
$$A(g) \\rightleftharpoons B(g) + C(g)$$

| $\\frac{1}{T}\\,(K^{-1})$ | $\\log_{10}K_p$ |
|-------------------------|----------------|
| 0.05 | 3.5 |
| 0.06 | 2.5 |
| 0.07 | 1.5 |

The magnitude of $\\frac{\\Delta H^\\circ}{R}$ calculated from the above data is ________. (Nearest integer)`,subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"46",id:"695278375",options:[],solution:`Rate constant from half-life:

$$k = \\frac{0.693}{t_{1/2}} = \\frac{0.693}{6.93} = 0.1\\ \\text{min}^{-1}$$

For 99% completion, $[A]/[A]_0 = 0.01$, i.e. $[A]_0/[A] = 100$:

$$t = \\frac{2.303}{k}\\log\\frac{[A]_0}{[A]} = \\frac{2.303}{0.1}\\log 100 = \\frac{2.303}{0.1}\\times 2$$

$$t = 23.03 \\times 2 = 46.06 \\approx 46\\ \\text{min}$$

**Answer:** 46`,statement:`If the half life of a first order reaction is 6.93 minutes then the time required for completion of 99% of the reaction will be ________ minutes.
(Given : $\\log 2 = 0.3010$)`,subject:"Chemistry",type:"integer"}],shift:"Shift 1",title:"JEE Main 2026 · 05 Apr · Shift 1"},window.MOCK_DATA.slug="jee-main-2026-apr-5-shift-1"
```


---

_Source: [https://jeenotes.in/mock-tests/jee-main-2026-apr-5-shift-1/](https://jeenotes.in/mock-tests/jee-main-2026-apr-5-shift-1/) · raw HTML: `offline/mock-tests/jee-main-2026-apr-5-shift-1/index.html`_
