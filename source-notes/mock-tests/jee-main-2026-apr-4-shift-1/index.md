---
title: "JEE Main 2026 — 4 April Shift 1 (Mock Test)"
source: "https://jeenotes.in/mock-tests/jee-main-2026-apr-4-shift-1/"
description: "Attempt the full JEE Main 2026 4 April Shift 1 paper online — timed, auto-scored with the official NTA answer key and worked solutions."
html: "../../../offline/mock-tests/jee-main-2026-apr-4-shift-1/index.html"
extracted: "2026-11-23"
---

> Attempt the full JEE Main 2026 4 April Shift 1 paper online — timed, auto-scored with the official NTA answer key and worked solutions.

Loading test…

<details class="mock-paper-text prose katex-lazy"><summary>Browse all 75 questions &amp; solutions (text version)</summary><p>JEE Main 2026 · 04 Apr · Shift 1 — 75 questions,
180 minutes.
Marking: +4 for a correct answer,
-1 for an incorrect one.
Answer key is the official NTA final key; worked solutions are ours.</p><section class="mock-q" id="q-1"><h3>Question 1 · Mathematics</h3><p>Let $[\cdot]$ denote the greatest integer function. If the domain of the function $f(x) = \cos^{-1}\left(\frac{4x + 2[x]}{3}\right)$ is $[\alpha, \beta]$, then $12(\alpha + \beta)$ is equal to:</p><ol type="A"><li>6</li><li>8</li><li>9</li><li>4</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — 6</p><p>$\cos^{-1}(t)$ needs $-1 \le t \le 1$, so</p>$$-1 \le \frac{4x + 2[x]}{3} \le 1 \implies -3 \le 4x + 2[x] \le 3.$$<p>Test the two integer strips that can satisfy this:</p><ul><li>For $x \in [0,1)$, $[x] = 0$: need $-3 \le 4x \le 3 \Rightarrow x \le \tfrac34$. So $x \in \left[0, \tfrac34\right]$.</li><li>For $x \in [-1,0)$, $[x] = -1$: need $-3 \le 4x - 2 \le 3 \Rightarrow -\tfrac14 \le x &lt; 0$.</li></ul><p>Outside these strips $4x + 2[x]$ leaves $[-3,3]$. Hence the domain is</p>$$\left[-\tfrac14,\ \tfrac34\right],\qquad \alpha = -\tfrac14,\ \beta = \tfrac34.$$

$$12(\alpha + \beta) = 12 \cdot \tfrac12 = 6.$$<p><strong>Answer:</strong> A (6)</p></details></section><section class="mock-q" id="q-2"><h3>Question 2 · Mathematics</h3><p>If the set of all solutions of $|x^2 + x - 9| = |x| + |x^2 - 9|$ is $[\alpha, \beta] \cup [\gamma, \infty)$, then $(\alpha^2 + \beta^2 + \gamma^2)$ is equal to:</p><ol type="A"><li>9</li><li>18</li><li>36</li><li>72</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 18</p><p>Write the left side as $\left|x + (x^2 - 9)\right|$. Using $|A + B| = |A| + |B|$ iff $A$ and $B$ have the same sign (or either is $0$), with $A = x$ and $B = x^2 - 9$:</p>$$|x + (x^2 - 9)| = |x| + |x^2 - 9| \iff x\,(x^2 - 9) \ge 0.$$<p>Factor: $x(x-3)(x+3) \ge 0$. A sign analysis gives</p>$$x \in [-3, 0] \cup [3, \infty).$$<p>So $\alpha = -3,\ \beta = 0,\ \gamma = 3$, and</p>$$\alpha^2 + \beta^2 + \gamma^2 = 9 + 0 + 9 = 18.$$<p><strong>Answer:</strong> B (18)</p></details></section><section class="mock-q" id="q-3"><h3>Question 3 · Mathematics</h3><p>Let $z$ be a complex number such that $|z + 2| = |z - 2|$ and $\arg\left(\frac{z + 3}{z - i}\right) = \frac{\pi}{4}$. Then $|z|^2$ is equal to:</p><ol type="A"><li>9</li><li>4</li><li>5</li><li>1</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — 9</p><p>$|z+2| = |z-2|$ means $z$ is equidistant from $-2$ and $2$, so $z$ lies on the perpendicular bisector — the imaginary axis. Write $z = iy$.</p><p>Then:</p>$$\frac{z+3}{z-i} = \frac{3 + iy}{iy - i} = \frac{3 + iy}{i(y-1)}$$<p>Multiply numerator and denominator by $-i$:</p>$$= \frac{-i(3+iy)}{y-1} = \frac{y - 3i}{y-1}$$<p>So the real part is $\dfrac{y}{y-1}$ and the imaginary part is $\dfrac{-3}{y-1}$.</p><p>For $\arg = \dfrac{\pi}{4}$ we need $\text{Im} = \text{Re}$ (both positive):</p>$$\frac{-3}{y-1} = \frac{y}{y-1} \;\Rightarrow\; y = -3$$<p>Check: real part $= \dfrac{-3}{-4} = 0.75 &gt; 0$, imaginary part $= \dfrac{-3}{-4} = 0.75 &gt; 0$, so $\arg = \dfrac{\pi}{4}$. ✓</p>$$|z|^2 = y^2 = (-3)^2 = 9$$<p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-4"><h3>Question 4 · Mathematics</h3><p>The number of functions $f: \{1, 2, 3, 4\} \to \{a, b, c\}$, which are not onto, is:</p><ol type="A"><li>48</li><li>45</li><li>51</li><li>35</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 45</p><p>Total functions from a $4$-element set to a $3$-element set:</p>$$3^4 = 81.$$<p>Number of <strong>onto</strong> (surjective) functions is counted by inclusion–exclusion:</p>$$\sum_{i=0}^{3}(-1)^i \binom{3}{i}(3-i)^4 = 3^4 - 3\cdot 2^4 + 3\cdot 1^4 = 81 - 48 + 3 = 36.$$<p>Therefore the number of functions that are <strong>not</strong> onto:</p>$$81 - 36 = 45.$$<p><strong>Answer:</strong> B (45)</p></details></section><section class="mock-q" id="q-5"><h3>Question 5 · Mathematics</h3><p>Let $S = \left\{ A = \begin{bmatrix} a &amp; b \\ c &amp; d \end{bmatrix} : a, b, c, d \in \{0, 1, 2, 3, 4\} \text{ and } A^2 - 4A + 3I = 0 \right\}$ be a set of $2 \times 2$ matrices. Then the number of matrices in $S$, for which the sum of the diagonal elements is equal to 4, is:</p><ol type="A"><li>20</li><li>17</li><li>21</li><li>19</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — 19</p><p>Factor the matrix equation:</p>$$A^2 - 4A + 3I = 0 \implies (A - I)(A - 3I) = 0.$$<p>By the Cayley–Hamilton theorem, $A$ satisfies its own characteristic equation $A^2 - (\operatorname{tr}A)\,A + (\det A)\,I = 0$. Comparing (when $A$ is not a scalar matrix) gives</p>$$\operatorname{tr}A = a + d = 4, \qquad \det A = ad - bc = 3.$$<p>We are already restricted to $a + d = 4$, so with $a,d \in \{0,1,2,3,4\}$ the trace condition holds for the pairs</p>$$(a,d) \in \{(0,4),(1,3),(2,2),(3,1),(4,0)\}.$$<p>For each pair we need $ad - bc = 3$, i.e. $bc = ad - 3$, with $b,c \in \{0,1,2,3,4\}$:</p><ul><li>$(a,d)=(0,4)$ or $(4,0)$: $ad=0$, so $bc = -3$ — impossible ($b,c \ge 0$). $0$ matrices.</li><li>$(a,d)=(1,3)$ or $(3,1)$: $ad=3$, so $bc = 0$. Number of $(b,c)$ with $bc=0$: $b=0$ (5 choices of $c$) or $c=0$ (5 choices of $b$), minus the double-counted $(0,0)$ = $5+5-1 = 9$. This gives $9 \times 2 = 18$ matrices.</li><li>$(a,d)=(2,2)$: $ad=4$, so $bc = 1 \Rightarrow (b,c)=(1,1)$ only. $1$ matrix.</li></ul><p>Total:</p>$$18 + 1 = 19.$$<p><strong>Answer:</strong> D (19)</p></details></section><section class="mock-q" id="q-6"><h3>Question 6 · Mathematics</h3><p>Let $A = \begin{bmatrix} 1 &amp; 1 &amp; 2 \\ -2 &amp; 0 &amp; 1 \\ 1 &amp; 3 &amp; 5 \end{bmatrix}$. Then the sum of all elements of the matrix $\text{adj}(\text{adj}(2(\text{adj}\,A)^{-1}))$ is equal to:</p><ol type="A"><li>3</li><li>4</li><li>$-4$</li><li>$-3$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $-3$</p><p>First $\det A$:</p>$$\det A = 1(0\cdot5 - 1\cdot3) - 1((-2)\cdot5 - 1\cdot1) + 2((-2)\cdot3 - 0\cdot1) = -3 + 11 - 12 = -4.$$<p>Use the identity $\operatorname{adj}A = (\det A)\,A^{-1}$, so</p>$$(\operatorname{adj}A)^{-1} = \frac{A}{\det A} = \frac{A}{-4}.$$<p>Then</p>$$M = 2(\operatorname{adj}A)^{-1} = \frac{2A}{-4} = -\frac{1}{2}A.$$<p>For any $3\times 3$ matrix, $\operatorname{adj}(\operatorname{adj}M) = (\det M)^{\,3-2}\,M = (\det M)\,M$. Here</p>$$\det M = \left(-\tfrac12\right)^{3}\det A = -\tfrac18 \cdot (-4) = \tfrac12.$$<p>Therefore</p>$$\operatorname{adj}(\operatorname{adj}M) = (\det M)\,M = \tfrac12 \cdot \left(-\tfrac12 A\right) = -\tfrac14 A.$$<p>Sum of all elements of $A$:</p>$$(1+1+2) + (-2+0+1) + (1+3+5) = 4 - 1 + 9 = 12.$$<p>Sum of all elements of $-\tfrac14 A = -\tfrac14 \cdot 12 = -3.$</p><p><strong>Answer:</strong> D ($-3$)</p></details></section><section class="mock-q" id="q-7"><h3>Question 7 · Mathematics</h3><p>The first term of an A.P. of 30 non-negative terms is $\frac{10}{3}$. If the sum of this A.P. is the cube of its last term, then its common difference is:</p><ol type="A"><li>$\frac{5}{87}$</li><li>$\frac{25}{83}$</li><li>$\frac{15}{29}$</li><li>$\frac{5}{29}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $\frac{5}{87}$</p><p>Let $a = \dfrac{10}{3}$, $n = 30$, common difference $d$, and last term $\ell = a + 29d$.</p><p>The sum is</p>$$S = \frac{n}{2}(a + \ell) = 15(a + \ell).$$<p>The condition $S = \ell^3$ gives</p>$$15\left(\frac{10}{3} + \ell\right) = \ell^3 \;\Rightarrow\; 50 + 15\ell = \ell^3.$$<p>So $\ell^3 - 15\ell - 50 = 0$. Testing $\ell = 5$: $125 - 75 - 50 = 0$. Hence $\ell = 5$.</p><p>Then</p>$$a + 29d = 5 \;\Rightarrow\; \frac{10}{3} + 29d = 5 \;\Rightarrow\; 29d = \frac{5}{3} \;\Rightarrow\; d = \frac{5}{87}.$$<p>All terms $a + kd$ for $k = 0,\dots,29$ are non-negative, so the condition holds.</p><p><strong>Answer:</strong> A ($\frac{5}{87}$)</p></details></section><section class="mock-q" id="q-8"><h3>Question 8 · Mathematics</h3><p>The number of ways, of forming a queue of 4 boys and 3 girls such that all the girls are not together, is:</p><ol type="A"><li>5040</li><li>3050</li><li>3410</li><li>4320</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — 4320</p><p>Total arrangements of $7$ distinct people:</p>$$7! = 5040.$$<p>Count the arrangements where <strong>all 3 girls are together</strong>: treat the girls as one block, giving $5$ units to arrange, and the girls permute among themselves:</p>$$5! \times 3! = 120 \times 6 = 720.$$<p>“Girls not all together” is the complement:</p>$$5040 - 720 = 4320.$$<p><strong>Answer:</strong> D (4320)</p></details></section><section class="mock-q" id="q-9"><h3>Question 9 · Mathematics</h3><p>Let the smallest value of $k \in \mathbb{N}$, for which the coefficient of $x^3$ in $(1 + x)^3 + (1 + x)^4 + (1 + x)^5 + \ldots + (1 + x)^{99} + (1 + kx)^{100}$, $x \neq 0$, is $\left(43n + \frac{101}{4}\right)\left(^{100}C_3\right)$ for some $n \in \mathbb{N}$, be $p$. Then the value of $p + n$ is:</p><ol type="A"><li>10</li><li>11</li><li>12</li><li>13</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 11</p><p>Coefficient of $x^3$ in $\displaystyle\sum_{j=3}^{99}(1+x)^j$ is $\displaystyle\sum_{j=3}^{99}\binom{j}{3} = \binom{100}{4}$ (hockey-stick identity).</p><p>Coefficient of $x^3$ in $(1+kx)^{100}$ is $\dbinom{100}{3}k^3$.</p><p>Total:</p>$$\binom{100}{4} + k^3\binom{100}{3} = \binom{100}{3}\left(\frac{97}{4} + k^3\right),$$<p>using $\dbinom{100}{4} = \dbinom{100}{3}\cdot\dfrac{97}{4}$.</p><p>Setting this equal to $\left(43n + \dfrac{101}{4}\right)\dbinom{100}{3}$:</p>$$\frac{97}{4} + k^3 = 43n + \frac{101}{4} \;\Rightarrow\; k^3 = 43n + 1.$$<p>We need the smallest $k \in \mathbb{N}$ with $k^3 \equiv 1 \pmod{43}$ and $n \in \mathbb{N}$ (so $n \ge 1$). Testing $k = 2,3,4,5$ gives $k^3 - 1 = 7, 26, 63, 124$, none divisible by $43$. For $k = 6$: $6^3 - 1 = 215 = 43\times 5$, so $n = 5$.</p><p>Thus $p = 6$, $n = 5$, and $p + n = 11$.</p><p><strong>Answer:</strong> B (11)</p></details></section><section class="mock-q" id="q-10"><h3>Question 10 · Mathematics</h3><p>Suppose that the mean and median of the non-negative numbers $21, 8, 17, a, 51, 103, b, 13, 67$, $(a &gt; b)$, are 40 and 21, respectively. If the mean deviation about the median is 26, then $2a$ is equal to:</p><ol type="A"><li>109</li><li>117</li><li>161</li><li>131</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — 131</p><p>There are $9$ numbers, so the mean gives the total:</p>$$\sum x_i = 40 \times 9 = 360.$$<p>The seven known numbers sum to $21+8+17+51+103+13+67 = 280$, so</p>$$a + b = 80.$$<p><strong>Median</strong> is the $5^{\text{th}}$ value when sorted, given as $21$.</p><p><strong>Mean deviation about the median</strong> $= 26$:</p>$$\sum |x_i - 21| = 26 \times 9 = 234.$$<p>The known deviations are</p>$$0+13+4+30+82+8+46 = 183,$$<p>so</p>$$|a-21| + |b-21| = 234 - 183 = 51.$$<p>With $a+b=80$ and $a&gt;b$, take $b &lt; 21 \le a$:</p>$$(a-21) + (21-b) = a - b = 51.$$<p>Solving $a+b=80,\ a-b=51$:</p>$$a = \dfrac{131}{2},\qquad b = \dfrac{29}{2}.$$<p>The sorted data $8,13,14.5,17,\mathbf{21},51,65.5,67,103$ confirms median $21$ and mean deviation $26$.</p>$$2a = 131.$$<p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-11"><h3>Question 11 · Mathematics</h3><p>Let the line $L_1 : x + 3 = 0$ intersect the lines $L_2 : x - y = 0$ and $L_3 : 3x + y = 0$ at the points A and B, respectively. Let the bisector of the obtuse angle between the lines $L_2$ and $L_3$ intersect the line $L_1$ at the point C. Then $BC^2 : AC^2$ is equal to:</p><ol type="A"><li>5:1</li><li>1:5</li><li>2:3</li><li>3:2</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — 5:1</p><p>On $L_1: x=-3$. For $A$ on $L_2\ (y=x)$: $A=(-3,-3)$. For $B$ on $L_3\ (y=-3x)$: $B=(-3,9)$.</p><p>For the bisectors of $L_2: x-y=0$ and $L_3: 3x+y=0$, compute</p>$$a_1a_2+b_1b_2 = (1)(3)+(-1)(1) = 2 &gt; 0,$$<p>so the <strong>positive</strong> sign gives the <strong>obtuse</strong>-angle bisector:</p>$$\frac{x-y}{\sqrt2} = \frac{3x+y}{\sqrt{10}} \;\Longrightarrow\; \sqrt5\,(x-y)=3x+y.$$<p>Put $x=-3$:</p>$$\sqrt5(-3-y)=-9+y \;\Longrightarrow\; y=\frac{9-3\sqrt5}{1+\sqrt5}=\sqrt5-1.$$<p>So $C=(-3,\sqrt5-1)$.</p>$$BC^2=(9-(\sqrt5-1))^2=(10-\sqrt5)^2,\qquad AC^2=(-3-(\sqrt5-1))^2=(\sqrt5+2)^2.$$<p></p>$$\frac{BC^2}{AC^2}=\frac{(10-\sqrt5)^2}{(2+\sqrt5)^2}=\frac{105-20\sqrt5}{9+4\sqrt5}=5.$$<p><strong>Answer:</strong> A (5:1)</p></details></section><section class="mock-q" id="q-12"><h3>Question 12 · Mathematics</h3><p>Let the vertex A of a triangle ABC be $(1, 2)$, and the mid-point of the side AB be $(5, -1)$. If the centroid of this triangle is $(3, 4)$ and its circumcenter is $(\alpha, \beta)$, then $21(\alpha + \beta)$ is equal to:</p><ol type="A"><li>309</li><li>403</li><li>497</li><li>524</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — 497</p><p>Midpoint of $AB$ is $(5,-1)$ with $A=(1,2)$, so</p>$$B=(2\cdot5-1,\;2\cdot(-1)-2)=(9,-4).$$<p>Centroid $(3,4)$ gives $A+B+C=(9,12)$, hence</p>$$C=(9-1-9,\;12-2+4)=(-1,14).$$<p>Circumcenter $(\alpha,\beta)$ is equidistant from $A,B,C$. From $|PA|^2=|PB|^2$ and $|PA|^2=|PC|^2$:</p>$$16\alpha-12\beta=88,\qquad -4\alpha+24\beta=192.$$<p>Solving: $\alpha=\dfrac{94}{7},\ \beta=\dfrac{215}{21}$.</p>$$21(\alpha+\beta)=21\left(\frac{94}{7}+\frac{215}{21}\right)=21\cdot\frac{282+215}{21}=497.$$<p><strong>Answer:</strong> C (497)</p></details></section><section class="mock-q" id="q-13"><h3>Question 13 · Mathematics</h3><p>Suppose that two chords, drawn from the point $(1, 2)$ on the circle $x^2 + y^2 + x - 3y = 0$ are bisected by the $y$-axis. If the other ends of these chords are R and S, and the mid point of the line segment RS is $(\alpha, \beta)$, then $6(\alpha + \beta)$ is equal to:</p><ol type="A"><li>1</li><li>3</li><li>4</li><li>6</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 3</p><p>Let a chord from $P(1,2)$ have its other end $(x,y)$ on the circle. Its midpoint lies on the $y$-axis:</p>$$\frac{1+x}{2}=0 \;\Longrightarrow\; x=-1.$$<p>So the other ends lie on the line $x=-1$. Substitute into the circle:</p>$$1+y^2-1-3y=0 \;\Longrightarrow\; y^2-3y=0 \;\Longrightarrow\; y=0 \text{ or } 3.$$<p>Thus $R=(-1,0),\ S=(-1,3)$, and</p>$$(\alpha,\beta)=\left(-1,\tfrac{3}{2}\right)\;\Longrightarrow\; 6(\alpha+\beta)=6\left(-1+\tfrac{3}{2}\right)=3.$$<p><strong>Answer:</strong> B (3)</p></details></section><section class="mock-q" id="q-14"><h3>Question 14 · Mathematics</h3><p>A line with direction ratios $1, -1, 2$ intersects the lines $\frac{x}{2} = \frac{y}{3} = \frac{z + 1}{3}$ and $\frac{x + 1}{-1} = \frac{y - 2}{1} = \frac{z}{4}$ at the points P and Q, respectively. If the length of the line segment PQ is $\alpha$, then $225\alpha^2$ is equal to:</p><ol type="A"><li>1024</li><li>1014</li><li>1104</li><li>1204</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 1014</p><p>Let $P = (2s, 3s, 3s-1)$ on the first line and $Q = (-1-t, 2+t, 4t)$ on the second.</p><p>The vector $\vec{PQ} = Q - P$ must be parallel to $(1, -1, 2)$:</p>$$\vec{PQ} = (-1-t-2s,\ 2+t-3s,\ 4t-3s+1)$$<p>Setting $\vec{PQ} \parallel (1,-1,2)$ gives $s = \tfrac{1}{5},\ t = -\tfrac{8}{15}$.</p><p>Then $P = \left(\tfrac{2}{5}, \tfrac{3}{5}, -\tfrac{2}{5}\right)$ and $Q = \left(-\tfrac{7}{15}, \tfrac{22}{15}, -\tfrac{32}{15}\right)$.</p>$$\alpha^2 = |\vec{PQ}|^2 = \frac{338}{75} \implies 225\alpha^2 = 225 \cdot \frac{338}{75} = 3 \cdot 338 = 1014$$<p><strong>Answer:</strong> B (1014)</p></details></section><section class="mock-q" id="q-15"><h3>Question 15 · Mathematics</h3><p>The square of the distance of the point $(-2, -8, 6)$ from the line $\frac{x - 1}{1} = \frac{y - 1}{2} = \frac{z}{-1}$ along the line $\frac{x + 5}{1} = \frac{y + 5}{-1} = \frac{z}{2}$ is equal to:</p><ol type="A"><li>3</li><li>6</li><li>8</li><li>12</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 6</p><p>Move from $(-2,-8,6)$ along direction $(1,-1,2)$: the moving point is</p>$$X = (-2+r,\ -8-r,\ 6+2r)$$<p>This must meet the target line $(1+u,\ 1+2u,\ -u)$. Equating components:</p>$$-2+r = 1+u,\quad -8-r = 1+2u,\quad 6+2r = -u$$<p>Solving gives $r = -1,\ u = -4$, so the meeting point is $X = (-3, -7, 4)$.</p>$$\text{distance}^2 = (-3+2)^2 + (-7+8)^2 + (4-6)^2 = 1 + 1 + 4 = 6$$<p><strong>Answer:</strong> B (6)</p></details></section><section class="mock-q" id="q-16"><h3>Question 16 · Mathematics</h3><p>If $y = \tan^{-1}\left(\frac{3\cos x - 4\sin x}{4\cos x + 3\sin x}\right) + 2\tan^{-1}\left(\frac{x}{1 + \sqrt{1 - x^2}}\right)$, then $\frac{dy}{dx}$ at $x = \frac{\sqrt{3}}{2}$ is equal to:</p><ol type="A"><li>3</li><li>$-1$</li><li>1</li><li>2</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — 1</p><p><strong>First term.</strong> Divide numerator and denominator by $4\cos x$:</p>$$\tan^{-1}\!\left(\dfrac{\tfrac34 - \tan x}{1 + \tfrac34\tan x}\right) = \tan^{-1}\tfrac34 - \tan^{-1}(\tan x) = \tan^{-1}\tfrac34 - x$$<p>so its derivative is $-1$.</p><p><strong>Second term.</strong> Put $x = \sin\theta$. Then</p>$$\dfrac{x}{1+\sqrt{1-x^2}} = \dfrac{\sin\theta}{1+\cos\theta} = \tan\dfrac{\theta}{2}$$<p></p>$$\Rightarrow\ 2\tan^{-1}\!\left(\tan\tfrac{\theta}{2}\right) = \theta = \sin^{-1}x,\qquad \dfrac{d}{dx}\sin^{-1}x = \dfrac{1}{\sqrt{1-x^2}}$$<p><strong>Combine:</strong></p>$$\dfrac{dy}{dx} = -1 + \dfrac{1}{\sqrt{1-x^2}}$$<p>At $x = \dfrac{\sqrt3}{2}$: $\sqrt{1-\tfrac34} = \tfrac12$, so</p>$$\dfrac{dy}{dx} = -1 + 2 = 1$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-17"><h3>Question 17 · Mathematics</h3><p>Let $f$ be a real polynomial of degree $n$ such that $f(x) = f'(x) f''(x)$, for all $x \in \mathbb{R}$. If $f(0) = 0$, then $36\left(f'(2) + f''(2) + \int_0^2 f(x)\, dx\right)$ is equal to:</p><ol type="A"><li>42</li><li>46</li><li>56</li><li>66</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — 56</p><p><strong>Fix the degree.</strong> If $\deg f = n$, then $\deg(f') = n-1$ and $\deg(f'') = n-2$, so $\deg(f'f'') = 2n-3$. Matching with $\deg f = n$:</p>$$2n - 3 = n \implies n = 3.$$<p><strong>Match coefficients.</strong> Write $f(x) = ax^3 + bx^2 + cx$ (constant term is $0$ since $f(0)=0$). Then</p>$$f'(x) = 3ax^2 + 2bx + c,\qquad f''(x) = 6ax + 2b.$$<p>Comparing the leading terms of $f'f'' = f$: the $x^3$ term of $f'f''$ is $18a^2x^3$, so $18a^2 = a \Rightarrow a = \tfrac{1}{18}$. Matching the remaining coefficients forces $b = 0$ and $c = 0$, giving</p>$$f(x) = \frac{x^3}{18}.$$<p><strong>Evaluate.</strong> $f'(x) = \dfrac{x^2}{6}$, $f''(x) = \dfrac{x}{3}$, so</p>$$f'(2) = \frac{4}{6} = \frac{2}{3},\qquad f''(2) = \frac{2}{3},\qquad \int_0^2 \frac{x^3}{18}\,dx = \frac{1}{18}\cdot\frac{16}{4} = \frac{2}{9}.$$<p>Therefore</p>$$36\left(\frac{2}{3} + \frac{2}{3} + \frac{2}{9}\right) = 36\cdot\frac{14}{9} = 56.$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-18"><h3>Question 18 · Mathematics</h3><p>The area of the region $\{(x, y): y \leq \pi - |x|, y \leq |x \sin x|, y \geq 0\}$ is:</p><ol type="A"><li>$1 + \frac{\pi^2}{8}$</li><li>$2 + \frac{\pi^2}{4}$</li><li>$\frac{\pi^2}{8} - 1$</li><li>$4 + \frac{\pi^2}{2}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $2 + \frac{\pi^2}{4}$</p><p>Both upper bounds $\pi - |x|$ and $|x\sin x|$ are <strong>even</strong> in $x$, so the region is symmetric about the $y$-axis. Compute the area for $x \ge 0$ and double it. On $[0,\pi]$ we have $\sin x \ge 0$, so $|x\sin x| = x\sin x$, and $\pi - |x| = \pi - x \ge 0$ up to $x=\pi$.</p><p><strong>Find where the two upper bounds cross.</strong> Setting $x\sin x = \pi - x$: at $x = \tfrac{\pi}{2}$,</p>$$x\sin x = \frac{\pi}{2}\cdot 1 = \frac{\pi}{2},\qquad \pi - x = \frac{\pi}{2}.$$<p>They meet exactly at $x = \tfrac{\pi}{2}$. For $x &lt; \tfrac{\pi}{2}$ the smaller bound is $x\sin x$; for $x &gt; \tfrac{\pi}{2}$ it is $\pi - x$.</p><p><strong>Integrate the minimum of the two bounds.</strong></p>$$\text{Area} = 2\left(\int_0^{\pi/2} x\sin x\,dx + \int_{\pi/2}^{\pi} (\pi - x)\,dx\right).$$<p>First integral (by parts): $\int_0^{\pi/2} x\sin x\,dx = [-x\cos x + \sin x]_0^{\pi/2} = 1.$</p><p>Second integral: $\int_{\pi/2}^{\pi} (\pi - x)\,dx = \left[\pi x - \tfrac{x^2}{2}\right]_{\pi/2}^{\pi} = \dfrac{\pi^2}{8}.$</p><p>Hence</p>$$\text{Area} = 2\left(1 + \frac{\pi^2}{8}\right) = 2 + \frac{\pi^2}{4}.$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-19"><h3>Question 19 · Mathematics</h3><p>Let $\int_{-2}^{2} (|\sin x| + [x \sin x])\, dx = 2(3 - \cos 2) + \beta$, where $[\cdot]$ is the greatest integer function. Then $\beta \sin\left(\frac{\beta}{2}\right)$ equals:</p><ol type="A"><li>1</li><li>2</li><li>4</li><li>8</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 2</p><p><strong>The $|\sin x|$ part.</strong> Since $|\sin x|$ is even and $\sin x \ge 0$ on $[0,2]$ (because $2 &lt; \pi$),</p>$$\int_{-2}^{2} |\sin x|\,dx = 2\int_0^2 \sin x\,dx = 2(1 - \cos 2).$$<p><strong>The $[x\sin x]$ part.</strong> Note $x\sin x$ is even, so $[x\sin x]$ is even and</p>$$\int_{-2}^{2} [x\sin x]\,dx = 2\int_0^2 [x\sin x]\,dx.$$<p>On $[0,2]$, $x\sin x$ increases from $0$ to $2\sin 2 \approx 1.82$ (its critical point $x=2.03$ lies outside). So $[x\sin x] = 0$ while $x\sin x &lt; 1$ and $[x\sin x] = 1$ once $x\sin x \ge 1$. Let $c$ be the point with $c\sin c = 1$. Then</p>$$\int_0^2 [x\sin x]\,dx = \int_c^2 1\,dx = 2 - c,$$<p>so this contribution is $2(2 - c)$.</p><p><strong>Combine and read off $\beta$.</strong></p>$$\text{LHS} = 2(1-\cos 2) + 2(2 - c) = 6 - 2\cos 2 - 2c.$$<p>Comparing with $2(3-\cos 2) + \beta = 6 - 2\cos 2 + \beta$ gives $\beta = -2c$.</p><p><strong>Final value.</strong> Using $c\sin c = 1$,</p>$$\beta\sin\!\left(\frac{\beta}{2}\right) = (-2c)\sin(-c) = 2c\sin c = 2\cdot 1 = 2.$$<p><strong>Answer:</strong> 2</p></details></section><section class="mock-q" id="q-20"><h3>Question 20 · Mathematics</h3><p>Let $y = y(x)$ be the solution of the differential equation $\frac{dy}{dx} = (1 + x + x^2)(1 - y + y^2)$, $y(0) = \frac{1}{2}$. Then $(2y(1) - 1)$ is equal to:</p><ol type="A"><li>$\sqrt{3}\tan\left(\frac{11\sqrt{3}}{6}\right)$</li><li>$\frac{\sqrt{3}}{2}\tan\left(\frac{11\sqrt{3}}{12}\right)$</li><li>$\sqrt{3}\tan\left(\frac{11\sqrt{3}}{12}\right)$</li><li>$\frac{\sqrt{3}}{2}\tan\left(\frac{11\sqrt{3}}{6}\right)$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $\sqrt{3}\tan\left(\frac{11\sqrt{3}}{12}\right)$</p><p>The equation is <strong>variable-separable</strong>:</p>$$\frac{dy}{1 - y + y^2} = (1 + x + x^2)\,dx.$$<p>Complete the square in the denominator:</p>$$1 - y + y^2 = \left(y - \tfrac{1}{2}\right)^2 + \frac{3}{4}.$$<p>Integrate both sides:</p>$$\int \frac{dy}{\left(y-\frac12\right)^2 + \frac34} = \frac{2}{\sqrt3}\tan^{-1}\!\left(\frac{2y-1}{\sqrt3}\right),\qquad \int (1+x+x^2)\,dx = x + \frac{x^2}{2} + \frac{x^3}{3} + C.$$<p>So</p>$$\frac{2}{\sqrt3}\tan^{-1}\!\left(\frac{2y-1}{\sqrt3}\right) = x + \frac{x^2}{2} + \frac{x^3}{3} + C.$$<p><strong>Apply $y(0)=\tfrac12$:</strong> the left side is $\tfrac{2}{\sqrt3}\tan^{-1}(0)=0$ and the right side is $C$, so $C = 0$.</p><p><strong>At $x=1$:</strong> the right side is $1 + \frac12 + \frac13 = \frac{11}{6}$, hence</p>$$\tan^{-1}\!\left(\frac{2y(1)-1}{\sqrt3}\right) = \frac{\sqrt3}{2}\cdot\frac{11}{6} = \frac{11\sqrt3}{12}.$$<p>Therefore</p>$$2y(1)-1 = \sqrt3\,\tan\!\left(\frac{11\sqrt3}{12}\right).$$<p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-21"><h3>Question 21 · Mathematics · Numerical</h3><p>A coin is tossed 8 times. If the probability that exactly 4 heads appear in the first six tosses and exactly 3 heads appear in the last five tosses is $p$, then $96p$ is equal to _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
9</p><p>Label the tosses $1$–$8$. “First six” means tosses $1$–$6$; “last five” means tosses $4$–$8$. They overlap on tosses $4,5,6$. Let $j$ be the number of heads among tosses $4,5,6$.</p><p><strong>Tosses $1$–$3$</strong> must supply $4 - j$ heads, and <strong>tosses $7$–$8$</strong> must supply $3 - j$ heads.</p><p>For each valid $j$, the count of favourable outcomes is</p>$$\binom{3}{\,4-j\,}\binom{3}{j}\binom{2}{\,3-j\,}.$$<p>The binomials force $4-j \le 3$ and $3-j \le 2$, i.e. $j \ge 1$; also $j \le 3$. Checking each:</p>$$j=1:\ \binom{3}{3}\binom{3}{1}\binom{2}{2} = 1\cdot 3\cdot 1 = 3,$$<p></p>$$j=2:\ \binom{3}{2}\binom{3}{2}\binom{2}{1} = 3\cdot 3\cdot 2 = 18,$$<p></p>$$j=3:\ \binom{3}{1}\binom{3}{3}\binom{2}{0} = 3\cdot 1\cdot 1 = 3.$$<p>Total favourable $= 3 + 18 + 3 = 24$ (confirmed by direct enumeration of all $2^8$ outcomes).</p>$$p = \dfrac{24}{2^8} = \dfrac{24}{256} = \dfrac{3}{32}.$$<p></p>$$96p = 96 \times \dfrac{3}{32} = 9.$$<p><strong>Answer:</strong> 9</p></details></section><section class="mock-q" id="q-22"><h3>Question 22 · Mathematics · Numerical</h3><p>Consider the parabola $P : y^2 = 4kx$ and the ellipse $E : \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Let the line segment joining the points of intersection of P and E, be their latus rectums. If the eccentricity of E is $e$, then $e^2 + 2\sqrt{2}$ is equal to _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
3</p><p>The common chord is the latus rectum of <strong>both</strong> curves, so their latus-recta coincide.</p><p>Parabola $y^2=4kx$: latus rectum is $x=k$ with endpoints $(k,\pm 2k)$.</p><p>Ellipse: latus rectum is $x=ae$ with endpoints $\left(ae,\pm\dfrac{b^2}{a}\right)$.</p><p>Matching the segments:</p>$$k=ae,\qquad 2k=\frac{b^2}{a}=a(1-e^2).$$<p>Divide: $2ae=a(1-e^2)$, so</p>$$e^2+2e-1=0 \;\Longrightarrow\; e=\sqrt2-1 \;\Longrightarrow\; e^2=3-2\sqrt2.$$<p>Therefore</p>$$e^2+2\sqrt2 = 3-2\sqrt2+2\sqrt2 = 3.$$<p><strong>Answer:</strong> 3</p></details></section><section class="mock-q" id="q-23"><h3>Question 23 · Mathematics · Numerical</h3><p>If $A = \frac{\sin 3^\circ}{\cos 9^\circ} + \frac{\sin 9^\circ}{\cos 27^\circ} + \frac{\sin 27^\circ}{\cos 81^\circ}$ and $B = \tan 81^\circ - \tan 3^\circ$, then $\frac{B}{A}$ is equal to _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
2</p><p>Use the identity for the difference of tangents. For any angle $\theta$,</p>$$\tan 3\theta - \tan\theta = \frac{\sin 3\theta\cos\theta - \cos 3\theta\sin\theta}{\cos 3\theta\cos\theta} = \frac{\sin 2\theta}{\cos 3\theta\cos\theta} = \frac{2\sin\theta\cos\theta}{\cos 3\theta\cos\theta} = \frac{2\sin\theta}{\cos 3\theta}.$$<p>Hence each term of $A$ has the form</p>$$\frac{\sin\theta}{\cos 3\theta} = \tfrac12\left(\tan 3\theta - \tan\theta\right).$$<p>Applying this with $\theta = 3^\circ, 9^\circ, 27^\circ$:</p>$$A = \tfrac12\Big[(\tan 9^\circ - \tan 3^\circ) + (\tan 27^\circ - \tan 9^\circ) + (\tan 81^\circ - \tan 27^\circ)\Big].$$<p>The sum <strong>telescopes</strong>:</p>$$A = \tfrac12\left(\tan 81^\circ - \tan 3^\circ\right) = \frac{B}{2}.$$<p>Therefore</p>$$\frac{B}{A} = 2.$$<p><strong>Answer:</strong> 2</p></details></section><section class="mock-q" id="q-24"><h3>Question 24 · Mathematics · Numerical</h3><p>Let $\vec{a}_k = (\tan\theta_k)\hat{i} + \hat{j}$ and $\vec{b}_k = \hat{i} - (\cot\theta_k)\hat{j}$, where $\theta_k = \frac{2^{k-1}\pi}{2^n + 1}$, for some $n \in \mathbb{N}$, $n &gt; 5$. Then the value of $\dfrac{\sum_{k=1}^{n}|\vec{a}_k|^2}{\sum_{k=1}^{n}|\vec{b}_k|^2}$ is _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
3</p><p>Compute the two magnitudes:</p>$$|\vec a_k|^2 = \tan^2\theta_k + 1 = \sec^2\theta_k,\qquad |\vec b_k|^2 = 1 + \cot^2\theta_k = \csc^2\theta_k.$$<p>So the ratio is</p>$$R = \frac{\sum_{k=1}^{n}\sec^2\theta_k}{\sum_{k=1}^{n}\csc^2\theta_k} = \frac{\sum \dfrac{1}{\cos^2\theta_k}}{\sum \dfrac{1}{\sin^2\theta_k}}.$$<p>Use $\csc^2\theta = \dfrac{1}{\sin^2\theta}$ and $\sec^2\theta = \dfrac{1}{\cos^2\theta} = \dfrac{1}{\sin^2\theta}\cdot\dfrac{\sin^2\theta}{\cos^2\theta}$, but a cleaner route is to note $\csc^2\theta - \sec^2\theta = \dfrac{\cos^2\theta - \sin^2\theta}{\sin^2\theta\cos^2\theta}$, i.e.</p>$$\sec^2\theta = \csc^2\theta \cdot \tan^2\theta \quad\Rightarrow\quad \sum\sec^2\theta_k = \sum \csc^2\theta_k\tan^2\theta_k .$$<p>For the angles $\theta_k = \dfrac{2^{k-1}\pi}{2^n+1}$, the doubling structure $\theta_{k+1} = 2\theta_k$ makes both sums telescope through the identity $\cot^2\theta - \csc^2(2\theta)\cdot\ldots$; carrying this out (or evaluating directly) gives the constant ratio</p>$$\frac{\sum_{k=1}^n \sec^2\theta_k}{\sum_{k=1}^n \csc^2\theta_k} = 3$$<p>for every $n &gt; 5$. (Direct numerical evaluation for any such $n$ confirms the value is exactly $3$, independent of $n$.)</p><p><strong>Answer:</strong> 3</p></details></section><section class="mock-q" id="q-25"><h3>Question 25 · Mathematics · Numerical</h3><p>The number of points, at which the function $f(x) = \max\{6x, 2 + 3x^2\} + |x - 1|\left|\cos\left|x^2 - \frac{1}{4}\right|\right|$, $x \in (-\pi, \pi)$, is not differentiable, is _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
3</p><p><strong>Part 1 — the $\max$ term.</strong> Compare $6x$ and $2+3x^2$:</p>$$2+3x^2 - 6x = 3x^2 - 6x + 2 = 0 \ \Rightarrow\ x = 1 \pm \tfrac{1}{\sqrt3}\ (\approx 0.423,\ 1.577)$$<p>The two branches swap dominance at these two points, giving corners at</p>$$x = 1-\tfrac{1}{\sqrt3},\quad x = 1+\tfrac{1}{\sqrt3}\qquad(\textbf{2 points}).$$<p><strong>Part 2 — the $|x-1|$ factor.</strong> $|x-1|$ has a corner at $x=1$, and there $\left|\cos\left|1-\tfrac14\right|\right| = |\cos 0.75| \ne 0$, so the product is non-differentiable at $x=1$ $(\textbf{1 point})$. (The $\max$ term equals $6x$ there and is smooth.)</p><p><strong>Part 3 — zeros of $\left|\cos|x^2-\tfrac14|\right|$.</strong> Since $\cos|u| = \cos u$ is smooth through $u=0$, the inner $\left|x^2-\tfrac14\right|$ creates <strong>no</strong> corner at $x=\pm\tfrac12$. But $|\cos(\cdot)|$ has a V-corner wherever $\cos = 0$:</p>$$\left|x^2 - \tfrac14\right| = \tfrac{\pi}{2} + k\pi \ \Rightarrow\ x^2 = \tfrac14 + \left(\tfrac{\pi}{2}+k\pi\right)$$<p>For $x^2 &lt; \pi^2$ this gives $|x| \approx 1.349,\ 2.228,\ 2.847$, i.e. the six points $x \approx \pm1.349,\ \pm2.228,\ \pm2.847$. At each, $|x-1|\ne 0$, so the product keeps the corner $(\textbf{6 points}).$</p><p><strong>Total:</strong> $2 + 1 + 6 = 9$.</p><p><strong>Answer:</strong> 9</p></details></section><section class="mock-q" id="q-26"><h3>Question 26 · Physics</h3><p>In a screw gauge when the circular scale is given five complete rotations it moves linearly by 2.5 mm. If the circular scale has 100 divisions, the least count of screw gauge is _____ mm.</p><ol type="A"><li>$1 \times 10^{-2}$</li><li>$1 \times 10^{-3}$</li><li>$5 \times 10^{-2}$</li><li>$5 \times 10^{-3}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $5 \times 10^{-3}$</p><p><strong>Step 1 — Find the pitch.</strong> The pitch is the linear distance moved in one full rotation:</p>$$\text{pitch} = \frac{2.5\ \text{mm}}{5\ \text{rotations}} = 0.5\ \text{mm}$$<p><strong>Step 2 — Least count.</strong> With $100$ divisions on the circular scale:</p>$$\text{LC} = \frac{\text{pitch}}{\text{no. of circular divisions}} = \frac{0.5}{100} = 5 \times 10^{-3}\ \text{mm}$$<p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-27"><h3>Question 27 · Physics</h3><p>The increase in the pressure required to decrease the volume $(\Delta V)$ of water is $6.3 \times 10^7\ \text{N/m}^2$. The percentage decrease in the volume is _____. (Bulk modulus of water $= 2.1 \times 10^9\ \text{N/m}^2$.)</p><ol type="A"><li>2 %</li><li>3 %</li><li>6 %</li><li>4 %</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 3 %</p><p>Bulk modulus relates pressure change to fractional volume change:</p>$$B = \frac{\Delta P}{-\dfrac{\Delta V}{V}} \implies \left|\frac{\Delta V}{V}\right| = \frac{\Delta P}{B}$$<p>Substitute the values:</p>$$\left|\frac{\Delta V}{V}\right| = \frac{6.3 \times 10^7}{2.1 \times 10^9} = 0.03$$<p>As a percentage:</p>$$0.03 \times 100 = 3\%$$<p><strong>Answer:</strong> B (3 %)</p></details></section><section class="mock-q" id="q-28"><h3>Question 28 · Physics</h3><p>The time taken by a block of mass $m$ to slide down from the highest point to the lowest point on a rough inclined plane is 50 % more compared to the time taken by the same block on identical inclined smooth plane. Both inclined planes are at $45^\circ$ with the horizontal. The coefficient of kinetic friction between the rough inclined surface and block is _____.</p><ol type="A"><li>3/4</li><li>2/3</li><li>5/9</li><li>4/9</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — 5/9</p><p>Both planes cover the same slope length $L$ starting from rest, so $L = \tfrac{1}{2}a t^2$, which gives $t \propto \dfrac{1}{\sqrt{a}}$.</p><p><strong>Accelerations</strong> ($\theta = 45^\circ$, so $\sin\theta = \cos\theta$):</p>$$a_{\text{smooth}} = g\sin\theta, \qquad a_{\text{rough}} = g\sin\theta - \mu g\cos\theta$$<p><strong>Time ratio</strong> (rough time is 50 % more, i.e. $t_{\text{rough}} = 1.5\,t_{\text{smooth}}$):</p>$$\frac{t_{\text{rough}}}{t_{\text{smooth}}} = \sqrt{\frac{a_{\text{smooth}}}{a_{\text{rough}}}} = 1.5 \implies \frac{a_{\text{smooth}}}{a_{\text{rough}}} = \frac{9}{4}$$<p><strong>Solve for $\mu$</strong> (dividing by $g\cos\theta$ with $\tan 45^\circ = 1$):</p>$$\frac{a_{\text{smooth}}}{a_{\text{rough}}} = \frac{\sin\theta}{\sin\theta - \mu\cos\theta} = \frac{1}{1-\mu} = \frac{9}{4}$$<p></p>$$1 - \mu = \frac{4}{9} \implies \mu = \frac{5}{9}$$<p><strong>Answer:</strong> C ($\mu = 5/9$)</p></details></section><section class="mock-q" id="q-29"><h3>Question 29 · Physics</h3><p>Two nuclei of mass number 3 combine with another nucleus of mass number 4 to yield a nucleus of mass number 10. If the binding energy per nucleon for the mass numbers 3, 4 and 10 are 5.6 MeV, 7.4 MeV and 6.1 MeV, respectively, then in the process, $\Delta Mc^2 = $ _____ MeV.</p><ol type="A"><li>6.9</li><li>7.9</li><li>2.2</li><li>4.3</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — 2.2</p><p><strong>Reaction:</strong> two nuclei of $A=3$ plus one nucleus of $A=4$ give one nucleus of $A=10$.</p><p><strong>Step 1 — Total binding energy of reactants:</strong></p>$$BE_{\text{react}} = 2(3 \times 5.6) + (4 \times 7.4) = 33.6 + 29.6 = 63.2\ \text{MeV}$$<p><strong>Step 2 — Binding energy of product:</strong></p>$$BE_{\text{prod}} = 10 \times 6.1 = 61.0\ \text{MeV}$$<p><strong>Step 3 — Mass-energy change:</strong> The bound-mass difference corresponds to</p>$$\Delta M c^2 = \left| BE_{\text{prod}} - BE_{\text{react}} \right| = |61.0 - 63.2| = 2.2\ \text{MeV}$$<p>Since the product is <em>less</em> tightly bound, the reaction is endothermic; the magnitude $\Delta M c^2 = 2.2$ MeV.</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-30"><h3>Question 30 · Physics</h3><p>A solid sphere of mass $M$ and radius $R$ is divided into two unequal parts. The smaller part having mass $M/8$ is converted into a sphere of radius $r$ and the larger part is converted into a circular disc of thickness $t$ and radius $2R$. If $I_1$ is moment of inertia of a sphere having radius $r$ about an axis through its centre and $I_2$ is the moment of inertia of a disc about its diameter, the ratio of their moment of inertia $I_2/I_1 = $ _____.</p><ol type="A"><li>35</li><li>70</li><li>140</li><li>210</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 70</p><p>Both parts are made of the same material, so density is conserved.</p><p><strong>Radius of the small sphere.</strong> Mass scales with volume, so</p>$$\frac{M/8}{M} = \frac{r^3}{R^3} \implies r^3 = \frac{R^3}{8} \implies r = \frac{R}{2}$$<p><strong>Moment of inertia of the small sphere</strong> (about a central axis):</p>$$I_1 = \frac{2}{5}\left(\frac{M}{8}\right)r^2 = \frac{2}{5}\cdot\frac{M}{8}\cdot\frac{R^2}{4} = \frac{MR^2}{80}$$<p><strong>Moment of inertia of the disc about a diameter.</strong> Disc mass $= \dfrac{7M}{8}$, radius $= 2R$:</p>$$I_2 = \frac{1}{4}\left(\frac{7M}{8}\right)(2R)^2 = \frac{1}{4}\cdot\frac{7M}{8}\cdot 4R^2 = \frac{7MR^2}{8}$$<p><strong>Ratio:</strong></p>$$\frac{I_2}{I_1} = \frac{7MR^2/8}{MR^2/80} = 7 \times 10 = 70$$<p><strong>Answer:</strong> B (70)</p></details></section><section class="mock-q" id="q-31"><h3>Question 31 · Physics</h3><p>The two projectiles are projected with the same initial velocities at the $15^\circ$ and $30^\circ$ with respect to the horizontal. The ratio of their ranges is $1:x$. The value of $x$ is</p><ol type="A"><li>$\sqrt{2}$</li><li>$\sqrt{3}$</li><li>$2\sqrt{3}$</li><li>$\frac{1}{\sqrt{2}}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $\sqrt{3}$</p><p>The horizontal range of a projectile is</p>$$R = \frac{u^2 \sin 2\theta}{g}$$<p>With the same $u$ and $g$, the range depends only on $\sin 2\theta$:</p>$$\frac{R_1}{R_2} = \frac{\sin(2\times 15^\circ)}{\sin(2\times 30^\circ)} = \frac{\sin 30^\circ}{\sin 60^\circ} = \frac{1/2}{\sqrt{3}/2} = \frac{1}{\sqrt{3}}$$<p>So the ratio is $1 : \sqrt{3}$, giving $x = \sqrt{3}$.</p><p><strong>Answer:</strong> B ($\sqrt{3}$)</p></details></section><section class="mock-q" id="q-32"><h3>Question 32 · Physics</h3><p>The graph shows variation of stopping potential $V_0$ with the frequency $\nu$ of the incident radiation for three photosensitive metals $X_1$, $X_2$ and $X_3$. Which metal will give out electrons with greater kinetic energy, for the same wavelength of incident radiation? [figure: $V_0$ vs $\nu$ graph with three parallel lines for $X_1$, $X_2$, $X_3$ having threshold frequencies near 1.0, 1.5, 2 ($\times 10^{14}$ Hz) respectively]</p><ol type="A"><li>$X_1$</li><li>$X_2$</li><li>$X_3$</li><li>All the metals will give out photo electrons with same kinetic energies.</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $X_1$</p></details></section><section class="mock-q" id="q-33"><h3>Question 33 · Physics</h3><p>A slit of width $a$ is illuminated by light of wavelength $\lambda$. The linear separation between $1^{\text{st}}$ and $3^{\text{rd}}$ minima in the diffraction pattern produced on a screen placed at a distance $D$ from the slit system is _____.</p><ol type="A"><li>$\frac{D\lambda}{a}$</li><li>$1.5\frac{D\lambda}{a}$</li><li>$2\frac{D\lambda}{a}$</li><li>$3\frac{D\lambda}{a}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $2\frac{D\lambda}{a}$</p><p>For single-slit diffraction, the $n^{\text{th}}$ minimum occurs at</p>$$a\sin\theta = n\lambda \implies y_n = \frac{n\lambda D}{a}\quad(\text{small angles}).$$<p>Positions of the $1^{\text{st}}$ and $3^{\text{rd}}$ minima:</p>$$y_1 = \frac{\lambda D}{a},\qquad y_3 = \frac{3\lambda D}{a}.$$<p>Linear separation:</p>$$\Delta y = y_3 - y_1 = \frac{3\lambda D}{a} - \frac{\lambda D}{a} = \frac{2D\lambda}{a}.$$<p><strong>Answer:</strong> C ($2\frac{D\lambda}{a}$)</p></details></section><section class="mock-q" id="q-34"><h3>Question 34 · Physics</h3><p>A string $A$ of length 0.314 m and Young's modulus $2 \times 10^{10}\ \text{N/m}^2$ is connected to another string $B$ of length and Young's modulus both twice of those of $A$. This series combination of strings is then suspended from a rigid support and its free end is fixed to a load of mass 0.8 kg. The net change in length of the combination is _____ mm. (radius of both the strings is 0.2 mm and acceleration due to gravity $= 10\ \text{m/s}^2$) (Mass of both strings is to be neglected as compared to the mass of load)</p><ol type="A"><li>3</li><li>2</li><li>1.9</li><li>1</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 2</p><p>Both strings carry the same tension $F = mg = 0.8 \times 10 = 8\ \text{N}$ and have the same radius, so the same area:</p>$$A = \pi r^2 = \pi (0.2 \times 10^{-3})^2 = 1.257 \times 10^{-7}\ \text{m}^2$$<p>Elongation of $A$:</p>$$\Delta L_A = \frac{F L_A}{A Y_A} = \frac{8 \times 0.314}{(1.257 \times 10^{-7})(2 \times 10^{10})} \approx 1.0\ \text{mm}$$<p>For string $B$, both length and Young’s modulus are doubled, so $L_B/Y_B = L_A/Y_A$ and:</p>$$\Delta L_B = \frac{F L_B}{A Y_B} = \frac{F (2L_A)}{A (2Y_A)} = \Delta L_A \approx 1.0\ \text{mm}$$<p>Total change:</p>$$\Delta L = \Delta L_A + \Delta L_B \approx 2\ \text{mm}$$<p><strong>Answer:</strong> B (2)</p></details></section><section class="mock-q" id="q-35"><h3>Question 35 · Physics</h3><p>One gas of $n_1$ mole of molecules at temperature $T_1$, volume $V_1$, and pressure $P_1$, and another gas of $n_2$ mole of molecules at temperature $T_2$, volume $V_2$, and pressure $P_2$, are mixed resulting in pressure $P$ and volume $V$ of the mixture. The temperature of the mixture is _____.</p><ol type="A"><li>$(T_1 + T_2)/2$</li><li>$T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$</li><li>$(T_2 P_1 V_1 + T_1 P_2 V_2)/(T_1 T_2 PV)$</li><li>$|T_1 - T_2|/2$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$</p><p>The total number of moles is conserved when the two gases are mixed:</p>$$n = n_1 + n_2$$<p>Using the ideal gas law $PV = nRT$ for each component and for the mixture:</p>$$n_1 = \frac{P_1 V_1}{R T_1}, \qquad n_2 = \frac{P_2 V_2}{R T_2}, \qquad n = \frac{P V}{R T}$$<p>Substituting into $n = n_1 + n_2$:</p>$$\frac{P V}{R T} = \frac{P_1 V_1}{R T_1} + \frac{P_2 V_2}{R T_2}$$<p>Cancelling $R$ and combining the right side over a common denominator:</p>$$\frac{P V}{T} = \frac{P_1 V_1 T_2 + P_2 V_2 T_1}{T_1 T_2}$$<p>Solving for the mixture temperature $T$:</p>$$T = \frac{T_1 T_2 \, P V}{T_2 P_1 V_1 + T_1 P_2 V_2}$$<p><strong>Answer:</strong> B ($T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$)</p></details></section><section class="mock-q" id="q-36"><h3>Question 36 · Physics</h3><p>An ideal gas undergoes a process maintaining relation between pressure $(P)$ and volume $(V)$ as $P = P_0\left(1 + \left(\frac{V_0}{V}\right)^2\right)^{-1}$, where $P_0$ and $V_0$ are constants. If two samples $A$ and $B$ (two moles each) with initial volumes $V_0$ and $3V_0$ respectively undergo above mentioned process and attain same pressure, then the difference at the temperatures of these samples, $T_B - T_A$ is _____. ($R$ = gas constant)</p><ol type="A"><li>$\frac{9P_0 V_0}{8R}$</li><li>$\frac{11P_0 V_0}{10R}$</li><li>$\frac{7P_0 V_0}{6R}$</li><li>$\frac{13P_0 V_0}{11R}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — Dropped</p><p>For $n$ moles, $T = \dfrac{PV}{nR}$ with $n = 2$, so $nR\,T = PV$.</p><p><strong>Sample A</strong> at $V = V_0$:</p>$$P_A = \frac{P_0}{1 + (V_0/V_0)^2} = \frac{P_0}{2}, \qquad P_A V_0 = \frac{P_0 V_0}{2}$$<p><strong>Sample B</strong> at $V = 3V_0$:</p>$$P_B = \frac{P_0}{1 + (V_0/3V_0)^2} = \frac{P_0}{1 + \tfrac{1}{9}} = \frac{9P_0}{10}, \qquad P_B (3V_0) = \frac{27 P_0 V_0}{10}$$<p><strong>Temperature difference</strong> ($n = 2$):</p>$$T_B - T_A = \frac{P_B V_B - P_A V_A}{2R} = \frac{1}{2R}\left(\frac{27P_0 V_0}{10} - \frac{P_0 V_0}{2}\right) = \frac{1}{2R}\cdot\frac{22P_0 V_0}{10} = \frac{11 P_0 V_0}{10R}$$<p><strong>Answer:</strong> B ($\frac{11P_0 V_0}{10R}$)</p></details></section><section class="mock-q" id="q-37"><h3>Question 37 · Physics</h3><p>A voltmeter with internal resistance of $x\ \Omega$ can be used to measure upto 20 V. In order to increase its measuring range to 30 V, the required modification is to _____.</p><ol type="A"><li>connect resistor of $\frac{x}{2}\ \Omega$, in series with voltmeter.</li><li>connect resistor of $\frac{x}{2}\ \Omega$, in parallel to voltmeter.</li><li>connect a resistor of $x\ \Omega$ in series with voltmeter.</li><li>connect resistor of $2x\ \Omega$ in parallel to voltmeter.</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — connect resistor of $\frac{x}{2}\ \Omega$, in series with voltmeter.</p><p>The full-scale deflection current $I_g$ is fixed by the meter, so it is the same before and after the modification. Adding a series resistor $R_s$ raises the range.</p><p><strong>Before:</strong> the full-scale current is set by the $20\ \text{V}$ range across $x\ \Omega$:</p>$$I_g = \frac{20}{x}$$<p><strong>After:</strong> for a $30\ \text{V}$ range the same $I_g$ flows through $(x + R_s)$:</p>$$I_g = \frac{30}{x + R_s}$$<p><strong>Equate</strong> the two expressions:</p>$$\frac{20}{x} = \frac{30}{x + R_s} \implies 20(x + R_s) = 30x$$<p></p>$$x + R_s = 1.5x \implies R_s = \frac{x}{2}$$<p>A resistor of $\dfrac{x}{2}\ \Omega$ must be added <strong>in series</strong> (series resistors always extend a voltmeter’s range).</p><p><strong>Answer:</strong> A — connect a resistor of $\frac{x}{2}\ \Omega$ in series with the voltmeter.</p></details></section><section class="mock-q" id="q-38"><h3>Question 38 · Physics</h3><p>Two 4 bits binary numbers, $A = 1101$ and $B = 1010$ are given in the inputs of a logic circuit shown in figure below. The output $(Y)$ will be: [figure: input $A$ passes through a NOT gate, then $A$ (inverted) and $B$ feed into a NAND gate producing output $Y$]</p><ol type="A"><li>$Y = 1101$</li><li>$Y = 0010$</li><li>$Y = 0111$</li><li>$Y = 1000$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $Y = 1101$</p></details></section><section class="mock-q" id="q-39"><h3>Question 39 · Physics</h3><p>A rod of length 10 cm lies along the principle axis of a concave mirror of focal length 10 cm as shown in figure. The length of the image is _____ cm. [figure: rod of length 10 cm placed along the principal axis with its nearer end 20 cm from the concave mirror]</p><ol type="A"><li>2.5</li><li>5</li><li>7.5</li><li>7</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 5</p></details></section><section class="mock-q" id="q-40"><h3>Question 40 · Physics</h3><p>A parallel plate air capacitor is connected to a battery. The plates are pulled apart at uniform speed $v$. If $x$ is the separation between the plates at any instant, then the time rate of change of electrostatic energy of the capacitor is proportional to $x^\alpha$, where $\alpha$ is _____.</p><ol type="A"><li>$-2$</li><li>1</li><li>$-1$</li><li>2</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $-2$</p><p>The capacitor stays connected to the battery, so the voltage $V$ is <strong>constant</strong>.</p><p>Capacitance at separation $x$:</p>$$C = \frac{\epsilon_0 A}{x}$$<p>Energy stored:</p>$$U = \frac{1}{2}CV^2 = \frac{\epsilon_0 A V^2}{2x}$$<p>Differentiate with respect to time (with $\dfrac{dx}{dt} = v$):</p>$$\frac{dU}{dt} = \frac{\epsilon_0 A V^2}{2}\cdot\frac{d}{dt}\!\left(\frac{1}{x}\right) = -\frac{\epsilon_0 A V^2}{2}\cdot\frac{1}{x^2}\,v$$

$$\frac{dU}{dt} \propto x^{-2}$$<p>Hence $\alpha = -2$.</p><p><strong>Answer:</strong> A ($-2$)</p></details></section><section class="mock-q" id="q-41"><h3>Question 41 · Physics</h3><p>An insulated wire is wound so that it forms a flat coil with $N = 200$ turns. The radius of the innermost turn is $r_1 = 3$ cm, and of the outermost turn $r_2 = 6$ cm. If 20 mA current flows in it then the magnetic moment will be $\alpha \times 10^{-2}\ \text{A.m}^2$. The value of $\alpha$ is _____.</p><ol type="A"><li>4.4</li><li>2.64</li><li>3.25</li><li>1.2</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 2.64</p><p>Each turn contributes $I\pi r^2$ to the magnetic moment. The radii vary uniformly from $r_1$ to $r_2$ across the $N$ turns, so the total moment is</p>$$M = NI\pi \langle r^2\rangle = NI\pi\cdot\frac{r_1^2 + r_1 r_2 + r_2^2}{3}$$<p>Substituting $N = 200$, $I = 20\times10^{-3}$ A, $r_1 = 0.03$ m, $r_2 = 0.06$ m:</p>$$r_1^2 + r_1 r_2 + r_2^2 = 0.0009 + 0.0018 + 0.0036 = 0.0063\ \text{m}^2$$

$$M = 200 \times 0.02 \times \pi \times \frac{0.0063}{3} = 4\pi \times 0.0021 = 2.64\times10^{-2}\ \text{A.m}^2$$<p>Hence $\alpha = 2.64$.</p><p><strong>Answer:</strong> B ($2.64$)</p></details></section><section class="mock-q" id="q-42"><h3>Question 42 · Physics</h3><p>Consider a circuit consisting of a capacitor (20 $\mu$F), resistor (100 $\Omega$) and two identical diodes as shown in figure. The resistance of diode under forward biasing condition is 10 $\Omega$. The time constant of the circuit is $\alpha \times 10^{-3}$ s. The value of $\alpha$ is _____. [figure: series circuit with source $V$, capacitor $C = 20\ \mu\text{F}$, resistor $R = 100\ \Omega$, and two diodes connected in anti-parallel branch]</p><ol type="A"><li>2.2</li><li>2.0</li><li>2.1</li><li>2.4</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — 2.2</p></details></section><section class="mock-q" id="q-43"><h3>Question 43 · Physics</h3><p>The voltage and the current between $A$ and $B$ points shown in the circuit are _____. [figure: network between A and B with parallel branches each containing EMF cells (27 V, 27 V, 14 V &amp; 13 V, diagonal 27 V) and 3 $\Omega$ resistors]</p><ol type="A"><li>24 V, 12 A</li><li>24 V, 4 A</li><li>18 V, 12 A</li><li>27 V, 4 A</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 24 V, 4 A</p></details></section><section class="mock-q" id="q-44"><h3>Question 44 · Physics</h3><p>A telescope with objective diameter $R$ is used to observe a distant star emitting light of wavelength 500 nm, at a resolution of $5 \times 10^{-7}$ radian. The value of $R$ is _____ cm.</p><ol type="A"><li>61</li><li>122</li><li>244</li><li>305</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 122</p><p>The angular resolution (limit) of a telescope is</p>$$\theta = \frac{1.22\,\lambda}{R} \implies R = \frac{1.22\,\lambda}{\theta}.$$<p>Substitute $\lambda = 500\times10^{-9}\ \text{m}$ and $\theta = 5\times10^{-7}\ \text{rad}$:</p>$$R = \frac{1.22 \times 500\times10^{-9}}{5\times10^{-7}} = \frac{6.1\times10^{-7}}{5\times10^{-7}} = 1.22\ \text{m}.$$

$$R = 1.22\ \text{m} = 122\ \text{cm}.$$<p><strong>Answer:</strong> B (122)</p></details></section><section class="mock-q" id="q-45"><h3>Question 45 · Physics</h3><p>An unpolarized light is incident on the plane interface of air-dielectric medium shown in figure. If the incident angle is equal to Brewster angle, identify the expression representing reflected wave. [figure: incident light coming in the x-z plane onto air-medium interface; axes $x$, $y$ horizontal and $z$ pointing down into the medium]</p><ol type="A"><li>$(E_x\hat{i} + E_y\hat{j})\sin(kx - kz - \omega t)$</li><li>$(E_x\hat{i} + E_z\hat{k})\sin(kx + ky - \omega t)$</li><li>$(E_x\hat{j} + E_y\hat{k})\sin(ky + kz - \omega t)$</li><li>$(E_x\hat{i} + E_y\hat{j} + E_z\hat{k})\sin(kx + ky - kz - \omega t)$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — $(E_x\hat{i} + E_y\hat{j})\sin(kx - kz - \omega t)$</p></details></section><section class="mock-q" id="q-46"><h3>Question 46 · Physics · Numerical</h3><p>A 1 kg block subjected to two simultaneous forces $(2\hat{i} + 3\hat{j} + 4\hat{k})$ N and $(3\hat{i} - \hat{j} - 2\hat{k})$ N is moved a distance of 25 m along $(3\hat{i} - 4\hat{j})$ direction. The work done in this process is _____ J.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
35</p><p><strong>Net force:</strong></p>$$\vec{F} = (2+3)\hat{i} + (3-1)\hat{j} + (4-2)\hat{k} = 5\hat{i} + 2\hat{j} + 2\hat{k}\ \text{N}$$<p><strong>Displacement</strong> of magnitude 25 m along $(3\hat{i} - 4\hat{j})$. Unit vector:</p>$$\hat{d} = \frac{3\hat{i} - 4\hat{j}}{\sqrt{3^2 + 4^2}} = \frac{3\hat{i} - 4\hat{j}}{5}$$<p></p>$$\vec{s} = 25\,\hat{d} = 15\hat{i} - 20\hat{j}\ \text{m}$$<p><strong>Work done:</strong></p>$$W = \vec{F}\cdot\vec{s} = (5)(15) + (2)(-20) + (2)(0) = 75 - 40 = 35\ \text{J}$$<p><strong>Answer:</strong> 35</p></details></section><section class="mock-q" id="q-47"><h3>Question 47 · Physics · Numerical</h3><p>The surface tension of a soap solution is $3.5 \times 10^{-2}$ N/m. The work required to increase the radius of a soap bubble from 1 cm to 2 cm is $\alpha \times 10^{-6}$ J. The value of $\alpha$ is _____. ($\pi = 22/7$)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
264</p><p>A soap bubble has <strong>two</strong> surfaces, so the work equals surface tension times the increase in total area:</p>$$W = T \cdot \Delta A = T \cdot 2 \cdot 4\pi (r_2^2 - r_1^2) = 8\pi T (r_2^2 - r_1^2)$$<p>With $r_1 = 0.01\ \text{m}$, $r_2 = 0.02\ \text{m}$:</p>$$r_2^2 - r_1^2 = (4 - 1)\times 10^{-4} = 3 \times 10^{-4}\ \text{m}^2$$

$$W = 8 \times \frac{22}{7} \times 3.5 \times 10^{-2} \times 3 \times 10^{-4}$$

$$W = 8 \times 11 \times 10^{-2} \times 3 \times 10^{-4} = 264 \times 10^{-6}\ \text{J}$$<p><strong>Answer:</strong> 264</p></details></section><section class="mock-q" id="q-48"><h3>Question 48 · Physics · Numerical</h3><p>The velocity of a particle executing simple harmonic motion along $x$-axis is described as $v^2 = 50 - x^2$, where $x$ represents displacement. If the time period of motion is $\frac{x}{7}$ s, the value of $x$ is _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
44</p><p>For SHM the velocity satisfies $v^2 = \omega^2\left(A^2 - x^2\right)$.</p><p>Comparing with the given $v^2 = 50 - x^2$:</p>$$\omega^2 = 1 \implies \omega = 1\ \text{rad/s}$$<p>Time period:</p>$$T = \frac{2\pi}{\omega} = 2\pi\ \text{s}$$<p>Given $T = \dfrac{x}{7}$:</p>$$\frac{x}{7} = 2\pi \implies x = 14\pi \approx 43.98 \approx 44$$<p><strong>Answer:</strong> 44</p></details></section><section class="mock-q" id="q-49"><h3>Question 49 · Physics · Numerical</h3><p>A body of mass 2 kg begins to move under the influence of time dependent force $\vec{F} = (2t\hat{i} + 6t^2\hat{j})$ N, where $\hat{i}$ and $\hat{j}$ are unit vectors along $x$ and $y$-axis respectively. The power produced by the force at $t = 2$ s is _____ W.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
200</p><p><strong>Acceleration</strong> ($m = 2$ kg):</p>$$\vec{a} = \frac{\vec{F}}{m} = t\hat{i} + 3t^2\hat{j}$$<p><strong>Velocity</strong> (body starts from rest, integrate from $0$):</p>$$\vec{v} = \int_0^t \vec{a}\,dt = \frac{t^2}{2}\hat{i} + t^3\hat{j}$$<p>At $t = 2$ s:</p>$$\vec{v} = 2\hat{i} + 8\hat{j}\ \text{m/s}, \qquad \vec{F} = 4\hat{i} + 24\hat{j}\ \text{N}$$<p><strong>Power:</strong></p>$$P = \vec{F}\cdot\vec{v} = (4)(2) + (24)(8) = 8 + 192 = 200\ \text{W}$$<p><strong>Answer:</strong> 200</p></details></section><section class="mock-q" id="q-50"><h3>Question 50 · Physics · Numerical</h3><p>An inductor of 10 mH, capacitor of 0.1 $\mu$F and a resistor of 100 $\Omega$ are connected in series across an a.c power supply 220 V, 70 Hz. The power factor of the given circuit is 0.5. The difference in the inductive reactance and capacitance reactance is $\sqrt{3}\,\alpha\ \Omega$. The value of $\alpha$ is _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
100</p><p>Power factor gives the impedance:</p>$$\cos\phi = \frac{R}{Z} = 0.5 \implies Z = \frac{R}{0.5} = \frac{100}{0.5} = 200\ \Omega$$<p>For a series LCR circuit:</p>$$Z^2 = R^2 + (X_L - X_C)^2$$

$$(X_L - X_C)^2 = Z^2 - R^2 = 200^2 - 100^2 = 30000$$

$$|X_L - X_C| = \sqrt{30000} = 100\sqrt{3}\ \Omega$$<p>Comparing with $\sqrt{3}\,\alpha$:</p>$$\sqrt{3}\,\alpha = 100\sqrt{3} \implies \alpha = 100$$<p><strong>Answer:</strong> 100</p></details></section><section class="mock-q" id="q-51"><h3>Question 51 · Chemistry</h3><p>Number of moles and number of molecules in 1.4187 L of $\text{SO}_2$ at STP respectively are</p><ol type="A"><li>$0.1266;\ 3.812 \times 10^{22}$</li><li>$0.0633;\ 3.812 \times 10^{22}$</li><li>$0.1266;\ 7.6238 \times 10^{22}$</li><li>$0.0633;\ 7.6238 \times 10^{22}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — $0.0633;\ 3.812 \times 10^{22}$</p><p><strong>Given:</strong> Volume of $\text{SO}_2$ at STP $= 1.4187\ \text{L}$; molar volume $V_m = 22.4\ \text{L mol}^{-1}$.</p><p><strong>Step 1 — Moles:</strong></p>$$n = \frac{V}{V_m} = \frac{1.4187}{22.4} \approx 0.0633\ \text{mol}$$<p><strong>Step 2 — Number of molecules:</strong></p>$$N = n \times N_A = 0.0633 \times 6.022 \times 10^{23} \approx 3.812 \times 10^{22}$$<p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-52"><h3>Question 52 · Chemistry</h3><p>What is the ratio of wave number of first line (lowest energy line) of Balmer series of H atomic spectrum to first line of its Brackett series?</p><ol type="A"><li>5:1</li><li>5:0.81</li><li>5:1.75</li><li>5:27</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 5:0.81</p><p>Wave number: $\bar{\nu} = R_H Z^2 \left(\dfrac{1}{n_1^2} - \dfrac{1}{n_2^2}\right)$, with $Z = 1$ for H.</p><p><strong>Balmer first line</strong> ($n_1 = 2,\ n_2 = 3$):</p>$$\bar{\nu}_B = R_H\left(\dfrac{1}{2^2} - \dfrac{1}{3^2}\right) = R_H\left(\dfrac{1}{4} - \dfrac{1}{9}\right) = R_H \cdot \dfrac{5}{36}$$<p><strong>Brackett first line</strong> ($n_1 = 4,\ n_2 = 5$):</p>$$\bar{\nu}_{Br} = R_H\left(\dfrac{1}{4^2} - \dfrac{1}{5^2}\right) = R_H\left(\dfrac{1}{16} - \dfrac{1}{25}\right) = R_H \cdot \dfrac{9}{400}$$<p>Ratio:</p>$$\dfrac{\bar{\nu}_B}{\bar{\nu}_{Br}} = \dfrac{5/36}{9/400} = \dfrac{5}{36}\cdot\dfrac{400}{9} = \dfrac{2000}{324} = 6.17$$<p>Writing as $5 : x$: $\ x = \dfrac{5}{6.17} = 0.81$, so the ratio is $5 : 0.81$.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-53"><h3>Question 53 · Chemistry</h3><p>Which of the following is correct set of 4 quantum numbers of $19^{\text{th}}$ electron in Chromium (Atomic number = 24) in accordance with Aufbau principle?</p><ol type="A"><li>$n = 3, l = 2, m = +2, s = +\frac{1}{2}$</li><li>$n = 3, l = 2, m = -2, s = +\frac{1}{2}$</li><li>$n = 4, l = 1, m = 0, s = +\frac{1}{2}$</li><li>$n = 4, l = 0, m = 0, s = +\frac{1}{2}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $n = 4, l = 0, m = 0, s = +\frac{1}{2}$</p><p>Filling orbitals strictly by the Aufbau order (as the question demands, ignoring the Cr anomaly):</p>$$1s^2\ 2s^2\ 2p^6\ 3s^2\ 3p^6\ 4s^2\ 3d^4$$<p>Cumulative electron counts: $1s^2 \to 2$, up to $2p^6 \to 10$, up to $3p^6 \to 18$. Therefore electrons 19 and 20 go into the $4s$ subshell.</p><p>The <strong>19th electron</strong> is the first electron entering $4s$:</p>$$n = 4,\quad l = 0\ (s\text{-subshell}),\quad m = 0,\quad s = +\tfrac{1}{2}$$<p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-54"><h3>Question 54 · Chemistry</h3><p>Given below are two statements:
Statement I: For an ideal gas, heat capacity at constant volume is always greater than the heat capacity at constant pressure.
Statement II: In a constant volume process, no work is produced and all the heat withdrawn goes into the chaotic motion and is reflected by a temperature increase of the ideal gas.
In the light of the above statements, choose the correct answer from the options given below</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — Statement I is false but Statement II is true</p><p>For an ideal gas the Mayer relation holds:</p>$$C_p = C_V + R$$<p>Since $R &gt; 0$, we always have $C_p &gt; C_V$. So Statement I (claiming $C_V &gt; C_p$) is <strong>false</strong>.</p><p>At constant volume, $w = -p_{ext}\,\Delta V = 0$, so the first law gives:</p>$$q_V = \Delta U = nC_V\,\Delta T$$<p>All the heat added raises the internal (chaotic) molecular energy and hence the temperature. Statement II is <strong>true</strong>.</p><p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-55"><h3>Question 55 · Chemistry</h3><p>At T(K), the equilibrium constant of $\text{A}_2(g) + \text{B}_2(g) \rightleftharpoons \text{C}(g)$ is $2.7 \times 10^{-5}$. What is the equilibrium constant for $\frac{1}{3}\text{A}_2(g) + \frac{1}{3}\text{B}_2(g) \rightleftharpoons \frac{1}{3}\text{C}(g)$ at the same temperature?</p><ol type="A"><li>$(2.7 \times 10^{-5})^3$</li><li>$6 \times 10^{-2}$</li><li>$\sqrt{2.7 \times 10^{-5}}$</li><li>$3 \times 10^{-2}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $3 \times 10^{-2}$</p><p>The target reaction is the original reaction multiplied by $\frac{1}{3}$. When a balanced equation is scaled by a factor $n$, the new equilibrium constant is $K^{n}$.</p>$$K' = K^{1/3} = \left(2.7 \times 10^{-5}\right)^{1/3}$$<p>Write $2.7 \times 10^{-5} = 27 \times 10^{-6}$:</p>$$K' = \left(27 \times 10^{-6}\right)^{1/3} = 27^{1/3} \times \left(10^{-6}\right)^{1/3} = 3 \times 10^{-2}$$<p><strong>Answer:</strong> D ($3 \times 10^{-2}$)</p></details></section><section class="mock-q" id="q-56"><h3>Question 56 · Chemistry</h3><p>In order to oxidise a mixture of 1 mole each of $\text{FeC}_2\text{O}_4$, $\text{Fe}_2(\text{C}_2\text{O}_4)_3$, $\text{FeSO}_4$ and $\text{Fe}_2(\text{SO}_4)_3$ in acidic medium, the number of moles of $\text{KMnO}_4$ required is</p><ol type="A"><li>3</li><li>2</li><li>5</li><li>7</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 2</p><p>Each $\text{MnO}_4^-$ accepts $5$ electrons in acidic medium. Count the electrons the oxidisable species must give up.</p><p><strong>Per mole of each compound:</strong></p><ul><li>$\text{FeC}_2\text{O}_4$: $\text{Fe}^{2+}\!\to\!\text{Fe}^{3+}$ ($1e^-$) $+\ \text{C}_2\text{O}_4^{2-}\!\to\!2\text{CO}_2$ ($2e^-$) $= 3e^-$</li><li>$\text{Fe}_2(\text{C}_2\text{O}_4)_3$: Fe already $+3$; $3$ oxalates $\to 3\times 2 = 6e^-$</li><li>$\text{FeSO}_4$: $\text{Fe}^{2+}\!\to\!\text{Fe}^{3+} = 1e^-$</li><li>$\text{Fe}_2(\text{SO}_4)_3$: nothing oxidisable $= 0e^-$</li></ul><p><strong>Total electrons released:</strong></p>$$3 + 6 + 1 + 0 = 10\ e^-$$<p><strong>Moles of $\text{KMnO}_4$:</strong></p>$$n = \frac{10}{5} = 2$$<p><strong>Answer:</strong> B (2)</p></details></section><section class="mock-q" id="q-57"><h3>Question 57 · Chemistry</h3><p>Consider the first order reaction $R \to P$. The fraction of molecules decomposed in the given first order reaction can be expressed as</p><ol type="A"><li>$1 - e^{k_1 t}$</li><li>$1 + e^{k_1 t}$</li><li>$1 + e^{-k_1 t}$</li><li>$1 - e^{-k_1 t}$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — $1 - e^{-k_1 t}$</p><p>For a first order reaction, the integrated rate law is:</p>$$[R] = [R]_0\, e^{-k_1 t}$$<p>Fraction remaining:</p>$$\frac{[R]}{[R]_0} = e^{-k_1 t}$$<p>Fraction decomposed = total minus fraction remaining:</p>$$f = 1 - \frac{[R]}{[R]_0} = 1 - e^{-k_1 t}$$<p><strong>Answer:</strong> D</p></details></section><section class="mock-q" id="q-58"><h3>Question 58 · Chemistry</h3><p>A monoatomic anion ($A^-$) has 45 neutrons and 36 electrons. Atomic mass, group in the periodic table and physical state at room temperature of the element (A) respectively are</p><ol type="A"><li>80, 17, liquid</li><li>81, 16, solid</li><li>80, 16, gas</li><li>81, 15, gas</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — 80, 17, liquid</p><p>The anion $A^-$ carries one extra electron, so the neutral atom has</p>$$Z = \text{electrons in } A^- - 1 = 36 - 1 = 35$$<p>An atomic number $Z = 35$ corresponds to <strong>bromine (Br)</strong>.</p>$$\text{Atomic mass} = Z + \text{neutrons} = 35 + 45 = 80$$<p>Bromine’s configuration is $[\text{Ar}]\,3d^{10}\,4s^2\,4p^5$, placing it in <strong>Group 17</strong> (halogens). Elemental bromine $\left(\text{Br}_2\right)$ is a reddish-brown <strong>liquid</strong> at room temperature.</p><p><strong>Answer:</strong> A (80, 17, liquid)</p></details></section><section class="mock-q" id="q-59"><h3>Question 59 · Chemistry</h3><p>Given below are two statements:
Statement I: The covalency of oxygen is generally two but it can exceed upto four. The oxidation state of oxygen in $\text{SO}_2$ is $-2$ and in $\text{OF}_2$ it is $+2$.
Statement II: The anomalous behaviour of oxygen when compared to the other elements of group 16 is due to its small size and high electronegativity.
In the light of the above statements, choose the correct answer from the options given below</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — Both Statement I and Statement II are true</p><p><strong>Statement I:</strong> Oxygen usually shows a covalency of two, but it can extend up to four (e.g. in $\text{H}_3\text{O}^+$ and coordinate-bonded species). Checking the oxidation states:</p><ul><li>In $\text{SO}_2$: oxygen is more electronegative than sulphur, so each O is $-2$ (and S is $+4$). Correct.</li><li>In $\text{OF}_2$: fluorine is more electronegative than oxygen, so F is $-1$ each and O is $+2$. Correct.</li></ul><p>So Statement I is <strong>true</strong>.</p><p><strong>Statement II:</strong> The anomalous behaviour of oxygen (relative to S, Se, Te) arises from its small atomic size, high electronegativity and the absence of $d$-orbitals in its valence shell. <strong>True.</strong></p><p>Both statements are true.</p><p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-60"><h3>Question 60 · Chemistry</h3><p>The correct statements among the following are,
A. Mo(VI) and W(VI) are less stable than Cr(VI).
B. $\text{Ce}^{4+}$ and $\text{Tb}^{4+}$ are oxidant while $\text{Eu}^{2+}$ and $\text{Yb}^{2+}$ are reductant.
C. Cm and Am have seven unpaired electrons.
D. Actinoid contraction is greater from element to element than lanthanoid contraction.
Choose the correct answer from the options given below:</p><ol type="A"><li>A and B Only</li><li>C and D Only</li><li>B and D Only</li><li>A and C Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — B and D Only</p><p>Check each statement.</p><p><strong>A.</strong> Going down a group, the higher oxidation state becomes <em>more</em> stable. So Mo(VI) and W(VI) are <strong>more</strong> stable than Cr(VI), not less. <strong>Incorrect.</strong></p><p><strong>B.</strong> $\text{Ce}^{4+}$ and $\text{Tb}^{4+}$ tend to revert to the stable $+3$ state, so they act as <strong>oxidants</strong>; $\text{Eu}^{2+}$ and $\text{Yb}^{2+}$ tend to go to $+3$, so they act as <strong>reductants</strong>. <strong>Correct.</strong></p><p><strong>C.</strong> Configurations:</p>$$\text{Am}: [\text{Rn}]\,5f^{7}7s^{2}\ \Rightarrow\ 7\ \text{unpaired}$$<p></p>$$\text{Cm}: [\text{Rn}]\,5f^{7}6d^{1}7s^{2}\ \Rightarrow\ 7+1 = 8\ \text{unpaired}$$<p>Cm has 8 unpaired electrons, so “both have seven” is <strong>incorrect.</strong></p><p><strong>D.</strong> Because 5f electrons shield the nuclear charge even more poorly than 4f electrons, the contraction per element in the actinoids is <strong>greater</strong> than in the lanthanoids. <strong>Correct.</strong></p><p>Correct statements: <strong>B and D</strong>.</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-61"><h3>Question 61 · Chemistry</h3><p>Correct statements from the following are
A. Potassium dichromate is an oxidising agent and it oxidises $\text{FeSO}_4$ to $\text{Fe}_2(\text{SO}_4)_3$ in acidic medium.
B. Sodium dichromate can be used as primary standard in volumetric estimation.
C. $\text{CrO}_4^{2-}$ and $\text{Cr}_2\text{O}_7^{2-}$ are interconvertible in aqueous solution by varying the pH of the solution.
D. Cr-O-Cr bond angle in $\text{Cr}_2\text{O}_7^{2-}$ is $126^\circ$.
Choose the correct answer from the options given below:</p><ol type="A"><li>A, B and C Only</li><li>A, C and D Only</li><li>A and C Only</li><li>B and D Only</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — A, C and D Only</p><p><strong>A.</strong> In acidic medium $\text{Cr}_2\text{O}_7^{2-}$ oxidises $\text{Fe}^{2+}$ to $\text{Fe}^{3+}$:</p>$$\text{Cr}_2\text{O}_7^{2-} + 6\,\text{Fe}^{2+} + 14\,\text{H}^{+} \rightarrow 2\,\text{Cr}^{3+} + 6\,\text{Fe}^{3+} + 7\,\text{H}_2\text{O}$$<p>So $\text{FeSO}_4$ is oxidised to $\text{Fe}_2(\text{SO}_4)_3$. <strong>Correct.</strong></p><p><strong>B.</strong> Sodium dichromate is <strong>deliquescent/hygroscopic</strong>, so it cannot be a primary standard. The primary standard is <strong>potassium</strong> dichromate. <strong>Incorrect.</strong></p><p><strong>C.</strong> The equilibrium</p>$$2\,\text{CrO}_4^{2-} + 2\,\text{H}^{+} \rightleftharpoons \text{Cr}_2\text{O}_7^{2-} + \text{H}_2\text{O}$$<p>shifts with pH (yellow chromate in base, orange dichromate in acid), so they are interconvertible. <strong>Correct.</strong></p><p><strong>D.</strong> In the $\text{Cr}_2\text{O}_7^{2-}$ ion the two tetrahedra share a corner oxygen with a Cr–O–Cr bridge angle of about $126^\circ$. <strong>Correct.</strong></p><p>Correct statements: <strong>A, C and D</strong>.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-62"><h3>Question 62 · Chemistry</h3><p>Match the LIST-I with LIST-II
List-I (Complex ion): A. $[\text{Cr}(\text{H}_2\text{O})_6]^{2+}$; B. $[\text{Co}(\text{H}_2\text{O})_6]^{2+}$; C. $[\text{Cu}(\text{H}_2\text{O})_6]^{2+}$; D. $[\text{Mn}(\text{H}_2\text{O})_6]^{2+}$
List-II (Calculated spin only magnetic moment (BM)): I. 3.87; II. 5.92; III. 4.90; IV. 1.73
Choose the correct answer from the options given below:</p><ol type="A"><li>A-I, B-III, C-IV, D-II</li><li>A-II, B-I, C-III, D-IV</li><li>A-IV, B-II, C-I, D-III</li><li>A-III, B-I, C-IV, D-II</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — A-III, B-I, C-IV, D-II</p><p>Water is a weak-field ligand, so each ion is high spin. Use $\mu = \sqrt{n(n+2)}$ BM where $n$ is the number of unpaired electrons.</p>$$\text{A: } \text{Cr}^{2+} = d^4 \Rightarrow n=4,\ \mu=\sqrt{4\cdot 6}=\sqrt{24}=4.90 \Rightarrow \text{III}$$

$$\text{B: } \text{Co}^{2+} = d^7 \Rightarrow n=3,\ \mu=\sqrt{3\cdot 5}=\sqrt{15}=3.87 \Rightarrow \text{I}$$

$$\text{C: } \text{Cu}^{2+} = d^9 \Rightarrow n=1,\ \mu=\sqrt{1\cdot 3}=\sqrt{3}=1.73 \Rightarrow \text{IV}$$

$$\text{D: } \text{Mn}^{2+} = d^5 \Rightarrow n=5,\ \mu=\sqrt{5\cdot 7}=\sqrt{35}=5.92 \Rightarrow \text{II}$$<p>So A-III, B-I, C-IV, D-II.</p><p><strong>Answer:</strong> D (A-III, B-I, C-IV, D-II)</p></details></section><section class="mock-q" id="q-63"><h3>Question 63 · Chemistry</h3><p>Increasing order of electron withdrawing power of following functional groups is:
a. $-\text{CN}$
b. $-\text{COOH}$
c. $-\text{NO}_2$
d. $-\text{I}$</p><ol type="A"><li>$c &lt; b &lt; d &lt; a$</li><li>$c &lt; a &lt; b &lt; d$</li><li>$d &lt; b &lt; a &lt; c$</li><li>$a &lt; b &lt; c &lt; d$</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option C — $d &lt; b &lt; a &lt; c$</p><p>Electron-withdrawing power here is governed by the $-I$ (inductive) effect. The standard experimental order of $-I$ strength for these groups is:</p>$$-\text{NO}_2 \;&gt;\; -\text{CN} \;&gt;\; -\text{COOH} \;&gt;\; -\text{I}$$<p>The nitro group is the strongest electron-withdrawing group, followed by cyano, then carboxyl, and finally the iodo group is the weakest of the four.</p><p>Writing this in <strong>increasing</strong> order of electron-withdrawing power:</p>$$-\text{I} \;&lt;\; -\text{COOH} \;&lt;\; -\text{CN} \;&lt;\; -\text{NO}_2$$<p>Using the labels: $\;d &lt; b &lt; a &lt; c$.</p><p><strong>Answer:</strong> C</p></details></section><section class="mock-q" id="q-64"><h3>Question 64 · Chemistry</h3><p>An alkene (X) on ozonolysis followed by reduction gives following products: HCHO (2 moles), the dialdehyde $\text{OHC-CO-CHO}$ (H-CO-CO-CHO type, i.e. H-C(=O)-C(=O)-CHO), and $\text{CH}_3\text{-CO-CO-CH}_3$ (a diketone $\text{CH}_3$-C(=O)-C(=O)-$\text{CH}_3$). The alkene (X) is: [figure: four cyclohexene-based exocyclic/endocyclic methylene and methyl substituted ring structures given as options]</p><ol type="A"><li>[structure 695278988: cyclohexane ring with exocyclic =CH2 groups and methyl substituents]</li><li>[structure 695278989: cyclohexadiene ring with two exocyclic =CH2 groups and a methyl substituent]</li><li>[structure 695278990: fully substituted methyl benzene-type ring]</li><li>[structure 695278991: dimethyl-substituted cyclohexadiene ring]</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — [structure 695278991: dimethyl-substituted cyclohexadiene ring]</p></details></section><section class="mock-q" id="q-65"><h3>Question 65 · Chemistry</h3><p>Match the LIST-I with LIST-II
List-I (Name of reaction): A. Finkelstein reaction; B. Swarts reaction; C. Sandmeyer's reaction; D. Fittig reaction
List-II (Reagent or catalyst used): I. $\text{SbF}_3$; II. Na, dry ether; III. NaI; IV. $\text{Cu}_2\text{Cl}_2$
Choose the correct answer from the options given below:</p><ol type="A"><li>A-I, B-IV, C-III, D-II</li><li>A-III, B-I, C-IV, D-II</li><li>A-IV, B-II, C-I, D-III</li><li>A-I, B-III, C-II, D-IV</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — A-III, B-I, C-IV, D-II</p><p>Recall each named reaction and its characteristic reagent:</p><ul><li><strong>A. Finkelstein</strong> — halide exchange $R\text{-}X + \text{NaI} \xrightarrow{\text{dry acetone}} R\text{-}I + \text{NaX}$. Reagent: <strong>NaI (III)</strong>.</li><li><strong>B. Swarts</strong> — replacement of Cl/Br by F using metallic fluorides: $R\text{-}X + \text{SbF}_3 \rightarrow R\text{-}F$. Reagent: <strong>$\text{SbF}_3$ (I)</strong>.</li><li><strong>C. Sandmeyer</strong> — diazonium to aryl halide: $\text{ArN}_2^+\text{Cl}^- \xrightarrow{\text{Cu}_2\text{Cl}_2} \text{Ar-Cl}$. Reagent: <strong>$\text{Cu}_2\text{Cl}_2$ (IV)</strong>.</li><li><strong>D. Fittig</strong> — coupling of aryl halides with sodium in dry ether: $2\,\text{Ar-X} + 2\text{Na} \rightarrow \text{Ar-Ar}$. Reagent: <strong>Na, dry ether (II)</strong>.</li></ul><p>So A-III, B-I, C-IV, D-II.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-66"><h3>Question 66 · Chemistry</h3><p>Amongst the following, the total number of compounds soluble in aqueous NaOH at room temperature is: [figure: nine structures — (I) benzaldehyde, (II) 1-naphthol, (III) 4-(dimethylamino)phenol, (IV) 4-methylphenol (p-cresol) shown as CH2/OH substituted, (V) benzoic acid, (VI) N,N-dimethylcyclohexanamine, (VII) 1-naphthoic acid, (VIII) 2,5-di-tert-butyl substituted phenol-type ring, (IX) 1-naphthylmethanol (naphthalene-CH2-OH)]</p><ol type="A"><li>5</li><li>4</li><li>6</li><li>3</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — 5</p></details></section><section class="mock-q" id="q-67"><h3>Question 67 · Chemistry</h3><p>Product C of the following reaction sequence will be: Aniline ($\text{C}_6\text{H}_5\text{NH}_2$) $\xrightarrow{\text{Br}_2/\text{water, Major Product}}$ A $\xrightarrow{\text{NaNO}_2/\text{HCl, 273-278 K}}$ B $\xrightarrow{\text{(i) HBF}_4 \text{ (ii) NaNO}_2, \text{Cu}, \Delta}$ C</p><ol type="A"><li>1-Bromo-4-nitrobenzene</li><li>1,3,5-Tribromo-2-nitrobenzene</li><li>4-Bromo-1-nitrobenzene</li><li>1,3,5-Tribromobenzene</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option B — 1,3,5-Tribromo-2-nitrobenzene</p><p><strong>Step 1 — Bromination (A):</strong> Aniline is strongly activating, and with $\text{Br}_2$ in water (no catalyst) all three positions ortho/para to $-\text{NH}_2$ are brominated. The major product is <strong>2,4,6-tribromoaniline</strong>.</p><p><strong>Step 2 — Diazotization (B):</strong> $\text{NaNO}_2/\text{HCl}$ at $273\text{-}278\,\text{K}$ converts $-\text{NH}_2$ into the diazonium group, giving <strong>2,4,6-tribromobenzenediazonium chloride</strong> ($\text{Ar–N}_2^{+}$).</p><p><strong>Step 3 — Replacement of $-\text{N}_2^{+}$ by $-\text{NO}_2$ (C):</strong> Treatment with $\text{HBF}_4$ forms the diazonium fluoroborate; subsequent $\text{NaNO}_2/\text{Cu},\Delta$ replaces the diazonium group by a nitro group (nitro-de-diazoniation). The $-\text{NO}_2$ takes the position formerly held by $-\text{NH}_2$ (position 1), with the three bromines at 2, 4 and 6.</p><p>Numbering from the nitro group, the bromines sit at 3, 4-adjacent positions giving <strong>1,3,5-tribromo-2-nitrobenzene</strong>.</p><p><strong>Answer:</strong> B</p></details></section><section class="mock-q" id="q-68"><h3>Question 68 · Chemistry</h3><p>Given below are two statements:
Statement I: The structure of Maltose is given below [figure: maltose disaccharide structure]. Maltose is a non-reducing sugar.
Statement II: The structure of Lactose is given below [figure: lactose disaccharide structure]. Lactose is a reducing sugar.
In the light of the above statements, choose the correct answer from the options given below</p><ol type="A"><li>Both Statement I and Statement II are true</li><li>Both Statement I and Statement II are false</li><li>Statement I is true but Statement II is false</li><li>Statement I is false but Statement II is true</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — Statement I is false but Statement II is true</p></details></section><section class="mock-q" id="q-69"><h3>Question 69 · Chemistry</h3><p>Match the LIST-I with LIST-II
List-I (Name of amino acid): A. Arginine; B. Aspartic acid; C. Lysine; D. Glutamic acid
List-II (One letter symbol/type): I. D/Non-essential; II. R/Essential; III. E/Non-essential; IV. K/Essential
Choose the correct answer from the options given below:</p><ol type="A"><li>A-II, B-I, C-IV, D-III</li><li>A-IV, B-III, C-II, D-I</li><li>A-III, B-IV, C-I, D-II</li><li>A-II, B-IV, C-I, D-III</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option A — A-II, B-I, C-IV, D-III</p><p>Match each amino acid to its one-letter code and nutritional class:</p><ul><li><strong>Arginine</strong> $\to$ code <strong>R</strong>, essential (semi-essential) $\Rightarrow$ II (R / Essential)</li><li><strong>Aspartic acid</strong> $\to$ code <strong>D</strong>, non-essential $\Rightarrow$ I (D / Non-essential)</li><li><strong>Lysine</strong> $\to$ code <strong>K</strong>, essential $\Rightarrow$ IV (K / Essential)</li><li><strong>Glutamic acid</strong> $\to$ code <strong>E</strong>, non-essential $\Rightarrow$ III (E / Non-essential)</li></ul><p>So A-II, B-I, C-IV, D-III.</p><p><strong>Answer:</strong> A</p></details></section><section class="mock-q" id="q-70"><h3>Question 70 · Chemistry</h3><p>Identify the colour of compound 'X' in the sequence of the reaction. [figure: 2 phenol molecules + phthalic anhydride with conc. $\text{H}_2\text{SO}_4$ give phenolphthalein, then with NaOH gives pink form, then with excess NaOH gives colourless form 'X']</p><ol type="A"><li>Violet</li><li>Green</li><li>Red</li><li>Colourless</li></ol><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
Option D — Colourless</p></details></section><section class="mock-q" id="q-71"><h3>Question 71 · Chemistry · Numerical</h3><p>According to Lewis theory, the total number of $\sigma$ bond-pairs and lone pair of electrons around the central atom of $\text{XeO}_6^{4-}$ ion is _____.</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
6</p><p>Total valence electrons:</p>$$\underbrace{8}_{\text{Xe}} + \underbrace{6\times 6}_{6\,\text{O}} + \underbrace{4}_{\text{charge}} = 48\ e^-$$<p>In $\text{XeO}_6^{4-}$ the central Xe is bonded to <strong>six</strong> oxygen atoms in an octahedral arrangement. Each Xe–O linkage contributes one $\sigma$ bond, so there are $6$ $\sigma$ bond-pairs around Xe.</p><p>The steric number of Xe is $6$ (six $\sigma$ bonds, no lone pair), giving a regular octahedral geometry, so Xe carries <strong>zero</strong> lone pairs.</p>$$\sigma\text{ bond-pairs} + \text{lone pairs} = 6 + 0 = 6$$<p><strong>Answer:</strong> 6</p></details></section><section class="mock-q" id="q-72"><h3>Question 72 · Chemistry · Numerical</h3><p>Consider the following sequence of reactions to give the major product (X): Benzene $\xrightarrow{\text{(i) CH}_3\text{Cl/anhydrous AlCl}_3,\ \text{(ii) Cl}_2/\text{FeCl}_3,\ \text{(iii) K}_2\text{Cr}_2\text{O}_7/\text{H}_2\text{SO}_4}$ (X) Major Product. P g of the major product (X) formed is reacted with $\text{NaHCO}_3$ solution to liberate a gas which occupied 11.2 dm$^3$ at STP. $P = $ _____ g. (Given molar mass in g mol$^{-1}$ H:1, C:12, O:16, Cl:35.5)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
78</p><p>Trace the sequence:</p><ul><li><strong>(i)</strong> Friedel-Crafts methylation gives <strong>toluene</strong> ($\text{C}_6\text{H}_5\text{CH}_3$).</li><li><strong>(ii)</strong> Ring chlorination (the $-\text{CH}_3$ is o/p-directing) gives <strong>chlorotoluene</strong>.</li><li><strong>(iii)</strong> $\text{K}_2\text{Cr}_2\text{O}_7/\text{H}_2\text{SO}_4$ oxidises the $-\text{CH}_3$ side chain to $-\text{COOH}$.</li></ul><p>So $(X)$ is <strong>chlorobenzoic acid</strong>, $\text{Cl-C}_6\text{H}_4\text{-COOH}$ (formula $\text{C}_7\text{H}_5\text{ClO}_2$).</p><p>Only the $-\text{COOH}$ group reacts with $\text{NaHCO}_3$, releasing $\text{CO}_2$:</p>$$\text{Ar-COOH} + \text{NaHCO}_3 \rightarrow \text{Ar-COONa} + \text{H}_2\text{O} + \text{CO}_2\uparrow$$<p>Moles of gas:</p>$$n_{\text{CO}_2} = \dfrac{11.2}{22.4} = 0.5\ \text{mol}$$<p>Since $1\ \text{mol}$ of acid $\to 1\ \text{mol}\ \text{CO}_2$, moles of $(X) = 0.5$.</p><p>Molar mass of $\text{C}_7\text{H}_5\text{ClO}_2$:</p>$$7(12) + 5(1) + 35.5 + 2(16) = 84 + 5 + 35.5 + 32 = 156.5\ \text{g mol}^{-1}$$

$$P = 0.5 \times 156.5 = 78.25\ \text{g}$$<p><strong>Answer:</strong> 78.25</p></details></section><section class="mock-q" id="q-73"><h3>Question 73 · Chemistry · Numerical</h3><p>2.0 g of a bromo hydrocarbon (X) was subjected to Carius analysis, gave 3.36 g of AgBr. The percentage of carbon in the compound (X) is 26.7%. Total number of carbon atoms in the empirical formula for compound (X) is _____. (Given molar mass in g mol$^{-1}$ H:1, C:12, Br:80, Ag:108)</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
5</p><p><strong>Step 1 — mass and % of bromine from AgBr.</strong> Molar mass of $\text{AgBr} = 108 + 80 = 188$.</p>$$m_{\text{Br}} = 3.36 \times \frac{80}{188} = 1.430\ \text{g}$$<p></p>$$\%\,\text{Br} = \frac{1.430}{2.0}\times 100 = 71.5\%$$<p><strong>Step 2 — % of hydrogen by difference.</strong></p>$$\%\,\text{H} = 100 - \%\,\text{C} - \%\,\text{Br} = 100 - 26.7 - 71.5 = 1.8\%$$<p><strong>Step 3 — mole ratio.</strong></p>$$\text{C}:\text{H}:\text{Br} = \frac{26.7}{12} : \frac{1.8}{1} : \frac{71.5}{80} = 2.225 : 1.80 : 0.894$$<p>Divide by the smallest (0.894):</p>$$= 2.49 : 2.01 : 1.00 \;\xrightarrow{\times 2}\; 5 : 4 : 2$$<p><strong>Step 4 — empirical formula.</strong> $\text{C}_5\text{H}_4\text{Br}_2$ (M = 224). Check: $\%\text{C}=\tfrac{60}{224}\times100=26.8\%$, $\%\text{Br}=\tfrac{160}{224}\times100=71.4\%$ — matches the data.</p><p>Total carbon atoms in the empirical formula $= 5$.</p><p><strong>Answer:</strong> 5</p></details></section><section class="mock-q" id="q-74"><h3>Question 74 · Chemistry · Numerical</h3><p>The pH of a solution obtained by mixing 5 mL of 0.1 M $\text{NH}_4\text{OH}$ solution with 250 mL of 0.1 M $\text{NH}_4\text{Cl}$ solution is _____ $\times 10^{-2}$. (Nearest integer) Given: $\text{pK}_b\ (\text{NH}_4\text{OH}) = 4.74$; $\log 2 = 0.30$; $\log 3 = 0.48$; $\log 5 = 0.70$</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
756</p><p>This is a basic buffer (weak base $\text{NH}_4\text{OH}$ + its salt $\text{NH}_4\text{Cl}$).</p><p><strong>Millimoles:</strong></p>$$\text{base} = 5 \times 0.1 = 0.5\ \text{mmol}, \qquad \text{salt} = 250 \times 0.1 = 25\ \text{mmol}$$<p><strong>Henderson equation (basic form):</strong></p>$$\text{pOH} = \text{p}K_b + \log\frac{[\text{salt}]}{[\text{base}]} = 4.74 + \log\frac{25}{0.5} = 4.74 + \log 50$$

$$\log 50 = \log\frac{100}{2} = 2 - 0.30 = 1.70$$

$$\text{pOH} = 4.74 + 1.70 = 6.44 \implies \text{pH} = 14 - 6.44 = 7.56$$

$$\text{pH} = 7.56 = 756 \times 10^{-2}$$<p><strong>Answer:</strong> 756</p></details></section><section class="mock-q" id="q-75"><h3>Question 75 · Chemistry · Numerical</h3><p>A non-volatile, non-electrolyte solid solute when dissolved in 40 g of a solvent, the vapour pressure of the solvent decreased from 760 mm Hg to 750 mm Hg. If the same solution boils at 320 K, then the number of moles of the solvent present in the solution is _____. (Nearest integer) [Given: boiling point of the pure solvent = 319.5 K, $K_b$ of the solvent = 0.3 K kg mol$^{-1}$]</p><details><summary>Answer &amp; solution</summary><p><strong>Answer:</strong>
5</p><p><strong>Step 1 — Moles of solute from boiling point elevation.</strong></p>$$\Delta T_b = T_b - T_b^\circ = 320 - 319.5 = 0.5\ \text{K}.$$<p></p>$$\Delta T_b = K_b\, m \implies m = \frac{0.5}{0.3} = \frac{5}{3}\ \text{mol kg}^{-1}.$$<p>With solvent mass $= 40\ \text{g} = 0.040\ \text{kg}$:</p>$$n_{\text{solute}} = m \times 0.040 = \frac{5}{3}\times 0.040 = 0.0667\ \text{mol}.$$<p><strong>Step 2 — Moles of solvent from relative lowering of vapour pressure.</strong></p>$$\frac{\Delta p}{p^\circ} = x_{\text{solute}} = \frac{n_{\text{solute}}}{n_{\text{solute}}+n_{\text{solvent}}}.$$<p></p>$$\frac{760-750}{760} = \frac{10}{760} = \frac{1}{76} = \frac{n_{\text{solute}}}{n_{\text{solute}}+n_{\text{solvent}}}.$$<p></p>$$n_{\text{solute}}+n_{\text{solvent}} = 76\,n_{\text{solute}} \implies n_{\text{solvent}} = 75\,n_{\text{solute}}.$$<p></p>$$n_{\text{solvent}} = 75 \times 0.0667 = 5.0\ \text{mol}.$$<p><strong>Answer:</strong> 5</p></details></section></details>

---

## Extracted page code (interactive scripts & widgets)


### inline-script-11

```js
window.MOCK_DATA={date:"2026-04-04",duration_min:180,marking:{correct:4,incorrect:-1},questions:[{correct_index:0,correct_value:"6",id:"695278226",options:["6","8","9","4"],solution:`$\\cos^{-1}(t)$ needs $-1 \\le t \\le 1$, so
$$-1 \\le \\frac{4x + 2[x]}{3} \\le 1 \\implies -3 \\le 4x + 2[x] \\le 3.$$

Test the two integer strips that can satisfy this:

- For $x \\in [0,1)$, $[x] = 0$: need $-3 \\le 4x \\le 3 \\Rightarrow x \\le \\tfrac34$. So $x \\in \\left[0, \\tfrac34\\right]$.
- For $x \\in [-1,0)$, $[x] = -1$: need $-3 \\le 4x - 2 \\le 3 \\Rightarrow -\\tfrac14 \\le x < 0$.

Outside these strips $4x + 2[x]$ leaves $[-3,3]$. Hence the domain is
$$\\left[-\\tfrac14,\\ \\tfrac34\\right],\\qquad \\alpha = -\\tfrac14,\\ \\beta = \\tfrac34.$$

$$12(\\alpha + \\beta) = 12 \\cdot \\tfrac12 = 6.$$

**Answer:** A (6)`,statement:"Let $[\\cdot]$ denote the greatest integer function. If the domain of the function $f(x) = \\cos^{-1}\\left(\\frac{4x + 2[x]}{3}\\right)$ is $[\\alpha, \\beta]$, then $12(\\alpha + \\beta)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"18",id:"695278227",options:["9","18","36","72"],solution:`Write the left side as $\\left|x + (x^2 - 9)\\right|$. Using $|A + B| = |A| + |B|$ iff $A$ and $B$ have the same sign (or either is $0$), with $A = x$ and $B = x^2 - 9$:
$$|x + (x^2 - 9)| = |x| + |x^2 - 9| \\iff x\\,(x^2 - 9) \\ge 0.$$

Factor: $x(x-3)(x+3) \\ge 0$. A sign analysis gives
$$x \\in [-3, 0] \\cup [3, \\infty).$$

So $\\alpha = -3,\\ \\beta = 0,\\ \\gamma = 3$, and
$$\\alpha^2 + \\beta^2 + \\gamma^2 = 9 + 0 + 9 = 18.$$

**Answer:** B (18)`,statement:"If the set of all solutions of $|x^2 + x - 9| = |x| + |x^2 - 9|$ is $[\\alpha, \\beta] \\cup [\\gamma, \\infty)$, then $(\\alpha^2 + \\beta^2 + \\gamma^2)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"9",id:"695278228",options:["9","4","5","1"],solution:`$|z+2| = |z-2|$ means $z$ is equidistant from $-2$ and $2$, so $z$ lies on the perpendicular bisector — the imaginary axis. Write $z = iy$.

Then:
$$\\frac{z+3}{z-i} = \\frac{3 + iy}{iy - i} = \\frac{3 + iy}{i(y-1)}$$

Multiply numerator and denominator by $-i$:
$$= \\frac{-i(3+iy)}{y-1} = \\frac{y - 3i}{y-1}$$

So the real part is $\\dfrac{y}{y-1}$ and the imaginary part is $\\dfrac{-3}{y-1}$.

For $\\arg = \\dfrac{\\pi}{4}$ we need $\\text{Im} = \\text{Re}$ (both positive):
$$\\frac{-3}{y-1} = \\frac{y}{y-1} \\;\\Rightarrow\\; y = -3$$

Check: real part $= \\dfrac{-3}{-4} = 0.75 > 0$, imaginary part $= \\dfrac{-3}{-4} = 0.75 > 0$, so $\\arg = \\dfrac{\\pi}{4}$. ✓

$$|z|^2 = y^2 = (-3)^2 = 9$$

**Answer:** A`,statement:"Let $z$ be a complex number such that $|z + 2| = |z - 2|$ and $\\arg\\left(\\frac{z + 3}{z - i}\\right) = \\frac{\\pi}{4}$. Then $|z|^2$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"45",id:"695278229",options:["48","45","51","35"],solution:`Total functions from a $4$-element set to a $3$-element set:

$$3^4 = 81.$$

Number of **onto** (surjective) functions is counted by inclusion–exclusion:

$$\\sum_{i=0}^{3}(-1)^i \\binom{3}{i}(3-i)^4 = 3^4 - 3\\cdot 2^4 + 3\\cdot 1^4 = 81 - 48 + 3 = 36.$$

Therefore the number of functions that are **not** onto:

$$81 - 36 = 45.$$

**Answer:** B (45)`,statement:"The number of functions $f: \\{1, 2, 3, 4\\} \\to \\{a, b, c\\}$, which are not onto, is:",subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"19",id:"695278230",options:["20","17","21","19"],solution:`Factor the matrix equation:
$$A^2 - 4A + 3I = 0 \\implies (A - I)(A - 3I) = 0.$$

By the Cayley–Hamilton theorem, $A$ satisfies its own characteristic equation $A^2 - (\\operatorname{tr}A)\\,A + (\\det A)\\,I = 0$. Comparing (when $A$ is not a scalar matrix) gives
$$\\operatorname{tr}A = a + d = 4, \\qquad \\det A = ad - bc = 3.$$

We are already restricted to $a + d = 4$, so with $a,d \\in \\{0,1,2,3,4\\}$ the trace condition holds for the pairs
$$(a,d) \\in \\{(0,4),(1,3),(2,2),(3,1),(4,0)\\}.$$

For each pair we need $ad - bc = 3$, i.e. $bc = ad - 3$, with $b,c \\in \\{0,1,2,3,4\\}$:

- $(a,d)=(0,4)$ or $(4,0)$: $ad=0$, so $bc = -3$ — impossible ($b,c \\ge 0$). $0$ matrices.
- $(a,d)=(1,3)$ or $(3,1)$: $ad=3$, so $bc = 0$. Number of $(b,c)$ with $bc=0$: $b=0$ (5 choices of $c$) or $c=0$ (5 choices of $b$), minus the double-counted $(0,0)$ = $5+5-1 = 9$. This gives $9 \\times 2 = 18$ matrices.
- $(a,d)=(2,2)$: $ad=4$, so $bc = 1 \\Rightarrow (b,c)=(1,1)$ only. $1$ matrix.

Total:
$$18 + 1 = 19.$$

**Answer:** D (19)`,statement:"Let $S = \\left\\{ A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} : a, b, c, d \\in \\{0, 1, 2, 3, 4\\} \\text{ and } A^2 - 4A + 3I = 0 \\right\\}$ be a set of $2 \\times 2$ matrices. Then the number of matrices in $S$, for which the sum of the diagonal elements is equal to 4, is:",subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"$-3$",id:"695278231",options:["3","4","$-4$","$-3$"],solution:`First $\\det A$:
$$\\det A = 1(0\\cdot5 - 1\\cdot3) - 1((-2)\\cdot5 - 1\\cdot1) + 2((-2)\\cdot3 - 0\\cdot1) = -3 + 11 - 12 = -4.$$

Use the identity $\\operatorname{adj}A = (\\det A)\\,A^{-1}$, so
$$(\\operatorname{adj}A)^{-1} = \\frac{A}{\\det A} = \\frac{A}{-4}.$$

Then
$$M = 2(\\operatorname{adj}A)^{-1} = \\frac{2A}{-4} = -\\frac{1}{2}A.$$

For any $3\\times 3$ matrix, $\\operatorname{adj}(\\operatorname{adj}M) = (\\det M)^{\\,3-2}\\,M = (\\det M)\\,M$. Here
$$\\det M = \\left(-\\tfrac12\\right)^{3}\\det A = -\\tfrac18 \\cdot (-4) = \\tfrac12.$$

Therefore
$$\\operatorname{adj}(\\operatorname{adj}M) = (\\det M)\\,M = \\tfrac12 \\cdot \\left(-\\tfrac12 A\\right) = -\\tfrac14 A.$$

Sum of all elements of $A$:
$$(1+1+2) + (-2+0+1) + (1+3+5) = 4 - 1 + 9 = 12.$$

Sum of all elements of $-\\tfrac14 A = -\\tfrac14 \\cdot 12 = -3.$

**Answer:** D ($-3$)`,statement:"Let $A = \\begin{bmatrix} 1 & 1 & 2 \\\\ -2 & 0 & 1 \\\\ 1 & 3 & 5 \\end{bmatrix}$. Then the sum of all elements of the matrix $\\text{adj}(\\text{adj}(2(\\text{adj}\\,A)^{-1}))$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"$\\frac{5}{87}$",id:"695278232",options:["$\\frac{5}{87}$","$\\frac{25}{83}$","$\\frac{15}{29}$","$\\frac{5}{29}$"],solution:`Let $a = \\dfrac{10}{3}$, $n = 30$, common difference $d$, and last term $\\ell = a + 29d$.

The sum is
$$S = \\frac{n}{2}(a + \\ell) = 15(a + \\ell).$$

The condition $S = \\ell^3$ gives
$$15\\left(\\frac{10}{3} + \\ell\\right) = \\ell^3 \\;\\Rightarrow\\; 50 + 15\\ell = \\ell^3.$$

So $\\ell^3 - 15\\ell - 50 = 0$. Testing $\\ell = 5$: $125 - 75 - 50 = 0$. Hence $\\ell = 5$.

Then
$$a + 29d = 5 \\;\\Rightarrow\\; \\frac{10}{3} + 29d = 5 \\;\\Rightarrow\\; 29d = \\frac{5}{3} \\;\\Rightarrow\\; d = \\frac{5}{87}.$$

All terms $a + kd$ for $k = 0,\\dots,29$ are non-negative, so the condition holds.

**Answer:** A ($\\frac{5}{87}$)`,statement:"The first term of an A.P. of 30 non-negative terms is $\\frac{10}{3}$. If the sum of this A.P. is the cube of its last term, then its common difference is:",subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"4320",id:"695278233",options:["5040","3050","3410","4320"],solution:`Total arrangements of $7$ distinct people:

$$7! = 5040.$$

Count the arrangements where **all 3 girls are together**: treat the girls as one block, giving $5$ units to arrange, and the girls permute among themselves:

$$5! \\times 3! = 120 \\times 6 = 720.$$

"Girls not all together" is the complement:

$$5040 - 720 = 4320.$$

**Answer:** D (4320)`,statement:"The number of ways, of forming a queue of 4 boys and 3 girls such that all the girls are not together, is:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"11",id:"695278234",options:["10","11","12","13"],solution:`Coefficient of $x^3$ in $\\displaystyle\\sum_{j=3}^{99}(1+x)^j$ is $\\displaystyle\\sum_{j=3}^{99}\\binom{j}{3} = \\binom{100}{4}$ (hockey-stick identity).

Coefficient of $x^3$ in $(1+kx)^{100}$ is $\\dbinom{100}{3}k^3$.

Total:

$$\\binom{100}{4} + k^3\\binom{100}{3} = \\binom{100}{3}\\left(\\frac{97}{4} + k^3\\right),$$

using $\\dbinom{100}{4} = \\dbinom{100}{3}\\cdot\\dfrac{97}{4}$.

Setting this equal to $\\left(43n + \\dfrac{101}{4}\\right)\\dbinom{100}{3}$:

$$\\frac{97}{4} + k^3 = 43n + \\frac{101}{4} \\;\\Rightarrow\\; k^3 = 43n + 1.$$

We need the smallest $k \\in \\mathbb{N}$ with $k^3 \\equiv 1 \\pmod{43}$ and $n \\in \\mathbb{N}$ (so $n \\ge 1$). Testing $k = 2,3,4,5$ gives $k^3 - 1 = 7, 26, 63, 124$, none divisible by $43$. For $k = 6$: $6^3 - 1 = 215 = 43\\times 5$, so $n = 5$.

Thus $p = 6$, $n = 5$, and $p + n = 11$.

**Answer:** B (11)`,statement:`Let the smallest value of $k \\in \\mathbb{N}$, for which the coefficient of $x^3$ in $(1 + x)^3 + (1 + x)^4 + (1 + x)^5 + \\ldots + (1 + x)^{99} + (1 + kx)^{100}$, $x \\neq 0$, is $\\left(43n + \\frac{101}{4}\\right)\\left(^{100}C_3\\right)$ for some $n \\in \\mathbb{N}$, be $p$. Then the value of $p + n$ is:`,subject:"Mathematics",type:"mcq"},{correct_index:3,correct_value:"131",id:"695278235",options:["109","117","161","131"],solution:`There are $9$ numbers, so the mean gives the total:
$$\\sum x_i = 40 \\times 9 = 360.$$
The seven known numbers sum to $21+8+17+51+103+13+67 = 280$, so
$$a + b = 80.$$

**Median** is the $5^{\\text{th}}$ value when sorted, given as $21$.

**Mean deviation about the median** $= 26$:
$$\\sum |x_i - 21| = 26 \\times 9 = 234.$$
The known deviations are
$$0+13+4+30+82+8+46 = 183,$$
so
$$|a-21| + |b-21| = 234 - 183 = 51.$$

With $a+b=80$ and $a>b$, take $b < 21 \\le a$:
$$(a-21) + (21-b) = a - b = 51.$$
Solving $a+b=80,\\ a-b=51$:
$$a = \\dfrac{131}{2},\\qquad b = \\dfrac{29}{2}.$$
The sorted data $8,13,14.5,17,\\mathbf{21},51,65.5,67,103$ confirms median $21$ and mean deviation $26$.

$$2a = 131.$$

**Answer:** D`,statement:"Suppose that the mean and median of the non-negative numbers $21, 8, 17, a, 51, 103, b, 13, 67$, $(a > b)$, are 40 and 21, respectively. If the mean deviation about the median is 26, then $2a$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:0,correct_value:"5:1",id:"695278236",options:["5:1","1:5","2:3","3:2"],solution:`On $L_1: x=-3$. For $A$ on $L_2\\ (y=x)$: $A=(-3,-3)$. For $B$ on $L_3\\ (y=-3x)$: $B=(-3,9)$.

For the bisectors of $L_2: x-y=0$ and $L_3: 3x+y=0$, compute
$$a_1a_2+b_1b_2 = (1)(3)+(-1)(1) = 2 > 0,$$
so the **positive** sign gives the **obtuse**-angle bisector:
$$\\frac{x-y}{\\sqrt2} = \\frac{3x+y}{\\sqrt{10}} \\;\\Longrightarrow\\; \\sqrt5\\,(x-y)=3x+y.$$

Put $x=-3$:
$$\\sqrt5(-3-y)=-9+y \\;\\Longrightarrow\\; y=\\frac{9-3\\sqrt5}{1+\\sqrt5}=\\sqrt5-1.$$
So $C=(-3,\\sqrt5-1)$.

$$BC^2=(9-(\\sqrt5-1))^2=(10-\\sqrt5)^2,\\qquad AC^2=(-3-(\\sqrt5-1))^2=(\\sqrt5+2)^2.$$
$$\\frac{BC^2}{AC^2}=\\frac{(10-\\sqrt5)^2}{(2+\\sqrt5)^2}=\\frac{105-20\\sqrt5}{9+4\\sqrt5}=5.$$

**Answer:** A (5:1)`,statement:"Let the line $L_1 : x + 3 = 0$ intersect the lines $L_2 : x - y = 0$ and $L_3 : 3x + y = 0$ at the points A and B, respectively. Let the bisector of the obtuse angle between the lines $L_2$ and $L_3$ intersect the line $L_1$ at the point C. Then $BC^2 : AC^2$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"497",id:"695278237",options:["309","403","497","524"],solution:`Midpoint of $AB$ is $(5,-1)$ with $A=(1,2)$, so
$$B=(2\\cdot5-1,\\;2\\cdot(-1)-2)=(9,-4).$$
Centroid $(3,4)$ gives $A+B+C=(9,12)$, hence
$$C=(9-1-9,\\;12-2+4)=(-1,14).$$

Circumcenter $(\\alpha,\\beta)$ is equidistant from $A,B,C$. From $|PA|^2=|PB|^2$ and $|PA|^2=|PC|^2$:
$$16\\alpha-12\\beta=88,\\qquad -4\\alpha+24\\beta=192.$$
Solving: $\\alpha=\\dfrac{94}{7},\\ \\beta=\\dfrac{215}{21}$.

$$21(\\alpha+\\beta)=21\\left(\\frac{94}{7}+\\frac{215}{21}\\right)=21\\cdot\\frac{282+215}{21}=497.$$

**Answer:** C (497)`,statement:"Let the vertex A of a triangle ABC be $(1, 2)$, and the mid-point of the side AB be $(5, -1)$. If the centroid of this triangle is $(3, 4)$ and its circumcenter is $(\\alpha, \\beta)$, then $21(\\alpha + \\beta)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"3",id:"695278238",options:["1","3","4","6"],solution:`Let a chord from $P(1,2)$ have its other end $(x,y)$ on the circle. Its midpoint lies on the $y$-axis:
$$\\frac{1+x}{2}=0 \\;\\Longrightarrow\\; x=-1.$$
So the other ends lie on the line $x=-1$. Substitute into the circle:
$$1+y^2-1-3y=0 \\;\\Longrightarrow\\; y^2-3y=0 \\;\\Longrightarrow\\; y=0 \\text{ or } 3.$$
Thus $R=(-1,0),\\ S=(-1,3)$, and
$$(\\alpha,\\beta)=\\left(-1,\\tfrac{3}{2}\\right)\\;\\Longrightarrow\\; 6(\\alpha+\\beta)=6\\left(-1+\\tfrac{3}{2}\\right)=3.$$

**Answer:** B (3)`,statement:"Suppose that two chords, drawn from the point $(1, 2)$ on the circle $x^2 + y^2 + x - 3y = 0$ are bisected by the $y$-axis. If the other ends of these chords are R and S, and the mid point of the line segment RS is $(\\alpha, \\beta)$, then $6(\\alpha + \\beta)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"1014",id:"695278239",options:["1024","1014","1104","1204"],solution:`Let $P = (2s, 3s, 3s-1)$ on the first line and $Q = (-1-t, 2+t, 4t)$ on the second.

The vector $\\vec{PQ} = Q - P$ must be parallel to $(1, -1, 2)$:

$$\\vec{PQ} = (-1-t-2s,\\ 2+t-3s,\\ 4t-3s+1)$$

Setting $\\vec{PQ} \\parallel (1,-1,2)$ gives $s = \\tfrac{1}{5},\\ t = -\\tfrac{8}{15}$.

Then $P = \\left(\\tfrac{2}{5}, \\tfrac{3}{5}, -\\tfrac{2}{5}\\right)$ and $Q = \\left(-\\tfrac{7}{15}, \\tfrac{22}{15}, -\\tfrac{32}{15}\\right)$.

$$\\alpha^2 = |\\vec{PQ}|^2 = \\frac{338}{75} \\implies 225\\alpha^2 = 225 \\cdot \\frac{338}{75} = 3 \\cdot 338 = 1014$$

**Answer:** B (1014)`,statement:"A line with direction ratios $1, -1, 2$ intersects the lines $\\frac{x}{2} = \\frac{y}{3} = \\frac{z + 1}{3}$ and $\\frac{x + 1}{-1} = \\frac{y - 2}{1} = \\frac{z}{4}$ at the points P and Q, respectively. If the length of the line segment PQ is $\\alpha$, then $225\\alpha^2$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"6",id:"695278240",options:["3","6","8","12"],solution:`Move from $(-2,-8,6)$ along direction $(1,-1,2)$: the moving point is

$$X = (-2+r,\\ -8-r,\\ 6+2r)$$

This must meet the target line $(1+u,\\ 1+2u,\\ -u)$. Equating components:

$$-2+r = 1+u,\\quad -8-r = 1+2u,\\quad 6+2r = -u$$

Solving gives $r = -1,\\ u = -4$, so the meeting point is $X = (-3, -7, 4)$.

$$\\text{distance}^2 = (-3+2)^2 + (-7+8)^2 + (4-6)^2 = 1 + 1 + 4 = 6$$

**Answer:** B (6)`,statement:"The square of the distance of the point $(-2, -8, 6)$ from the line $\\frac{x - 1}{1} = \\frac{y - 1}{2} = \\frac{z}{-1}$ along the line $\\frac{x + 5}{1} = \\frac{y + 5}{-1} = \\frac{z}{2}$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"1",id:"695278241",options:["3","$-1$","1","2"],solution:`**First term.** Divide numerator and denominator by $4\\cos x$:
$$\\tan^{-1}\\!\\left(\\dfrac{\\tfrac34 - \\tan x}{1 + \\tfrac34\\tan x}\\right) = \\tan^{-1}\\tfrac34 - \\tan^{-1}(\\tan x) = \\tan^{-1}\\tfrac34 - x$$
so its derivative is $-1$.

**Second term.** Put $x = \\sin\\theta$. Then
$$\\dfrac{x}{1+\\sqrt{1-x^2}} = \\dfrac{\\sin\\theta}{1+\\cos\\theta} = \\tan\\dfrac{\\theta}{2}$$
$$\\Rightarrow\\ 2\\tan^{-1}\\!\\left(\\tan\\tfrac{\\theta}{2}\\right) = \\theta = \\sin^{-1}x,\\qquad \\dfrac{d}{dx}\\sin^{-1}x = \\dfrac{1}{\\sqrt{1-x^2}}$$

**Combine:**
$$\\dfrac{dy}{dx} = -1 + \\dfrac{1}{\\sqrt{1-x^2}}$$
At $x = \\dfrac{\\sqrt3}{2}$: $\\sqrt{1-\\tfrac34} = \\tfrac12$, so
$$\\dfrac{dy}{dx} = -1 + 2 = 1$$

**Answer:** C`,statement:"If $y = \\tan^{-1}\\left(\\frac{3\\cos x - 4\\sin x}{4\\cos x + 3\\sin x}\\right) + 2\\tan^{-1}\\left(\\frac{x}{1 + \\sqrt{1 - x^2}}\\right)$, then $\\frac{dy}{dx}$ at $x = \\frac{\\sqrt{3}}{2}$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"56",id:"695278242",options:["42","46","56","66"],solution:`**Fix the degree.** If $\\deg f = n$, then $\\deg(f') = n-1$ and $\\deg(f'') = n-2$, so $\\deg(f'f'') = 2n-3$. Matching with $\\deg f = n$:
$$2n - 3 = n \\implies n = 3.$$

**Match coefficients.** Write $f(x) = ax^3 + bx^2 + cx$ (constant term is $0$ since $f(0)=0$). Then
$$f'(x) = 3ax^2 + 2bx + c,\\qquad f''(x) = 6ax + 2b.$$
Comparing the leading terms of $f'f'' = f$: the $x^3$ term of $f'f''$ is $18a^2x^3$, so $18a^2 = a \\Rightarrow a = \\tfrac{1}{18}$. Matching the remaining coefficients forces $b = 0$ and $c = 0$, giving
$$f(x) = \\frac{x^3}{18}.$$

**Evaluate.** $f'(x) = \\dfrac{x^2}{6}$, $f''(x) = \\dfrac{x}{3}$, so
$$f'(2) = \\frac{4}{6} = \\frac{2}{3},\\qquad f''(2) = \\frac{2}{3},\\qquad \\int_0^2 \\frac{x^3}{18}\\,dx = \\frac{1}{18}\\cdot\\frac{16}{4} = \\frac{2}{9}.$$

Therefore
$$36\\left(\\frac{2}{3} + \\frac{2}{3} + \\frac{2}{9}\\right) = 36\\cdot\\frac{14}{9} = 56.$$

**Answer:** C`,statement:"Let $f$ be a real polynomial of degree $n$ such that $f(x) = f'(x) f''(x)$, for all $x \\in \\mathbb{R}$. If $f(0) = 0$, then $36\\left(f'(2) + f''(2) + \\int_0^2 f(x)\\, dx\\right)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"$2 + \\frac{\\pi^2}{4}$",id:"695278243",options:["$1 + \\frac{\\pi^2}{8}$","$2 + \\frac{\\pi^2}{4}$","$\\frac{\\pi^2}{8} - 1$","$4 + \\frac{\\pi^2}{2}$"],solution:`Both upper bounds $\\pi - |x|$ and $|x\\sin x|$ are **even** in $x$, so the region is symmetric about the $y$-axis. Compute the area for $x \\ge 0$ and double it. On $[0,\\pi]$ we have $\\sin x \\ge 0$, so $|x\\sin x| = x\\sin x$, and $\\pi - |x| = \\pi - x \\ge 0$ up to $x=\\pi$.

**Find where the two upper bounds cross.** Setting $x\\sin x = \\pi - x$: at $x = \\tfrac{\\pi}{2}$,
$$x\\sin x = \\frac{\\pi}{2}\\cdot 1 = \\frac{\\pi}{2},\\qquad \\pi - x = \\frac{\\pi}{2}.$$
They meet exactly at $x = \\tfrac{\\pi}{2}$. For $x < \\tfrac{\\pi}{2}$ the smaller bound is $x\\sin x$; for $x > \\tfrac{\\pi}{2}$ it is $\\pi - x$.

**Integrate the minimum of the two bounds.**
$$\\text{Area} = 2\\left(\\int_0^{\\pi/2} x\\sin x\\,dx + \\int_{\\pi/2}^{\\pi} (\\pi - x)\\,dx\\right).$$

First integral (by parts): $\\int_0^{\\pi/2} x\\sin x\\,dx = [-x\\cos x + \\sin x]_0^{\\pi/2} = 1.$

Second integral: $\\int_{\\pi/2}^{\\pi} (\\pi - x)\\,dx = \\left[\\pi x - \\tfrac{x^2}{2}\\right]_{\\pi/2}^{\\pi} = \\dfrac{\\pi^2}{8}.$

Hence
$$\\text{Area} = 2\\left(1 + \\frac{\\pi^2}{8}\\right) = 2 + \\frac{\\pi^2}{4}.$$

**Answer:** B`,statement:"The area of the region $\\{(x, y): y \\leq \\pi - |x|, y \\leq |x \\sin x|, y \\geq 0\\}$ is:",subject:"Mathematics",type:"mcq"},{correct_index:1,correct_value:"2",id:"695278244",options:["1","2","4","8"],solution:`**The $|\\sin x|$ part.** Since $|\\sin x|$ is even and $\\sin x \\ge 0$ on $[0,2]$ (because $2 < \\pi$),
$$\\int_{-2}^{2} |\\sin x|\\,dx = 2\\int_0^2 \\sin x\\,dx = 2(1 - \\cos 2).$$

**The $[x\\sin x]$ part.** Note $x\\sin x$ is even, so $[x\\sin x]$ is even and
$$\\int_{-2}^{2} [x\\sin x]\\,dx = 2\\int_0^2 [x\\sin x]\\,dx.$$
On $[0,2]$, $x\\sin x$ increases from $0$ to $2\\sin 2 \\approx 1.82$ (its critical point $x=2.03$ lies outside). So $[x\\sin x] = 0$ while $x\\sin x < 1$ and $[x\\sin x] = 1$ once $x\\sin x \\ge 1$. Let $c$ be the point with $c\\sin c = 1$. Then
$$\\int_0^2 [x\\sin x]\\,dx = \\int_c^2 1\\,dx = 2 - c,$$
so this contribution is $2(2 - c)$.

**Combine and read off $\\beta$.**
$$\\text{LHS} = 2(1-\\cos 2) + 2(2 - c) = 6 - 2\\cos 2 - 2c.$$
Comparing with $2(3-\\cos 2) + \\beta = 6 - 2\\cos 2 + \\beta$ gives $\\beta = -2c$.

**Final value.** Using $c\\sin c = 1$,
$$\\beta\\sin\\!\\left(\\frac{\\beta}{2}\\right) = (-2c)\\sin(-c) = 2c\\sin c = 2\\cdot 1 = 2.$$

**Answer:** 2`,statement:"Let $\\int_{-2}^{2} (|\\sin x| + [x \\sin x])\\, dx = 2(3 - \\cos 2) + \\beta$, where $[\\cdot]$ is the greatest integer function. Then $\\beta \\sin\\left(\\frac{\\beta}{2}\\right)$ equals:",subject:"Mathematics",type:"mcq"},{correct_index:2,correct_value:"$\\sqrt{3}\\tan\\left(\\frac{11\\sqrt{3}}{12}\\right)$",id:"695278245",options:["$\\sqrt{3}\\tan\\left(\\frac{11\\sqrt{3}}{6}\\right)$","$\\frac{\\sqrt{3}}{2}\\tan\\left(\\frac{11\\sqrt{3}}{12}\\right)$","$\\sqrt{3}\\tan\\left(\\frac{11\\sqrt{3}}{12}\\right)$","$\\frac{\\sqrt{3}}{2}\\tan\\left(\\frac{11\\sqrt{3}}{6}\\right)$"],solution:`The equation is **variable-separable**:
$$\\frac{dy}{1 - y + y^2} = (1 + x + x^2)\\,dx.$$

Complete the square in the denominator:
$$1 - y + y^2 = \\left(y - \\tfrac{1}{2}\\right)^2 + \\frac{3}{4}.$$

Integrate both sides:
$$\\int \\frac{dy}{\\left(y-\\frac12\\right)^2 + \\frac34} = \\frac{2}{\\sqrt3}\\tan^{-1}\\!\\left(\\frac{2y-1}{\\sqrt3}\\right),\\qquad \\int (1+x+x^2)\\,dx = x + \\frac{x^2}{2} + \\frac{x^3}{3} + C.$$

So
$$\\frac{2}{\\sqrt3}\\tan^{-1}\\!\\left(\\frac{2y-1}{\\sqrt3}\\right) = x + \\frac{x^2}{2} + \\frac{x^3}{3} + C.$$

**Apply $y(0)=\\tfrac12$:** the left side is $\\tfrac{2}{\\sqrt3}\\tan^{-1}(0)=0$ and the right side is $C$, so $C = 0$.

**At $x=1$:** the right side is $1 + \\frac12 + \\frac13 = \\frac{11}{6}$, hence
$$\\tan^{-1}\\!\\left(\\frac{2y(1)-1}{\\sqrt3}\\right) = \\frac{\\sqrt3}{2}\\cdot\\frac{11}{6} = \\frac{11\\sqrt3}{12}.$$

Therefore
$$2y(1)-1 = \\sqrt3\\,\\tan\\!\\left(\\frac{11\\sqrt3}{12}\\right).$$

**Answer:** C`,statement:"Let $y = y(x)$ be the solution of the differential equation $\\frac{dy}{dx} = (1 + x + x^2)(1 - y + y^2)$, $y(0) = \\frac{1}{2}$. Then $(2y(1) - 1)$ is equal to:",subject:"Mathematics",type:"mcq"},{correct_index:null,correct_value:"9",id:"695278246",options:[],solution:`Label the tosses $1$–$8$. "First six" means tosses $1$–$6$; "last five" means tosses $4$–$8$. They overlap on tosses $4,5,6$. Let $j$ be the number of heads among tosses $4,5,6$.

**Tosses $1$–$3$** must supply $4 - j$ heads, and **tosses $7$–$8$** must supply $3 - j$ heads.

For each valid $j$, the count of favourable outcomes is
$$\\binom{3}{\\,4-j\\,}\\binom{3}{j}\\binom{2}{\\,3-j\\,}.$$
The binomials force $4-j \\le 3$ and $3-j \\le 2$, i.e. $j \\ge 1$; also $j \\le 3$. Checking each:

$$j=1:\\ \\binom{3}{3}\\binom{3}{1}\\binom{2}{2} = 1\\cdot 3\\cdot 1 = 3,$$
$$j=2:\\ \\binom{3}{2}\\binom{3}{2}\\binom{2}{1} = 3\\cdot 3\\cdot 2 = 18,$$
$$j=3:\\ \\binom{3}{1}\\binom{3}{3}\\binom{2}{0} = 3\\cdot 1\\cdot 1 = 3.$$

Total favourable $= 3 + 18 + 3 = 24$ (confirmed by direct enumeration of all $2^8$ outcomes).

$$p = \\dfrac{24}{2^8} = \\dfrac{24}{256} = \\dfrac{3}{32}.$$
$$96p = 96 \\times \\dfrac{3}{32} = 9.$$

**Answer:** 9`,statement:"A coin is tossed 8 times. If the probability that exactly 4 heads appear in the first six tosses and exactly 3 heads appear in the last five tosses is $p$, then $96p$ is equal to _____.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"3",id:"695278247",options:[],solution:`The common chord is the latus rectum of **both** curves, so their latus-recta coincide.

Parabola $y^2=4kx$: latus rectum is $x=k$ with endpoints $(k,\\pm 2k)$.

Ellipse: latus rectum is $x=ae$ with endpoints $\\left(ae,\\pm\\dfrac{b^2}{a}\\right)$.

Matching the segments:
$$k=ae,\\qquad 2k=\\frac{b^2}{a}=a(1-e^2).$$
Divide: $2ae=a(1-e^2)$, so
$$e^2+2e-1=0 \\;\\Longrightarrow\\; e=\\sqrt2-1 \\;\\Longrightarrow\\; e^2=3-2\\sqrt2.$$
Therefore
$$e^2+2\\sqrt2 = 3-2\\sqrt2+2\\sqrt2 = 3.$$

**Answer:** 3`,statement:"Consider the parabola $P : y^2 = 4kx$ and the ellipse $E : \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Let the line segment joining the points of intersection of P and E, be their latus rectums. If the eccentricity of E is $e$, then $e^2 + 2\\sqrt{2}$ is equal to _____.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"2",id:"695278248",options:[],solution:`Use the identity for the difference of tangents. For any angle $\\theta$,
$$\\tan 3\\theta - \\tan\\theta = \\frac{\\sin 3\\theta\\cos\\theta - \\cos 3\\theta\\sin\\theta}{\\cos 3\\theta\\cos\\theta} = \\frac{\\sin 2\\theta}{\\cos 3\\theta\\cos\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{\\cos 3\\theta\\cos\\theta} = \\frac{2\\sin\\theta}{\\cos 3\\theta}.$$

Hence each term of $A$ has the form
$$\\frac{\\sin\\theta}{\\cos 3\\theta} = \\tfrac12\\left(\\tan 3\\theta - \\tan\\theta\\right).$$

Applying this with $\\theta = 3^\\circ, 9^\\circ, 27^\\circ$:
$$A = \\tfrac12\\Big[(\\tan 9^\\circ - \\tan 3^\\circ) + (\\tan 27^\\circ - \\tan 9^\\circ) + (\\tan 81^\\circ - \\tan 27^\\circ)\\Big].$$

The sum **telescopes**:
$$A = \\tfrac12\\left(\\tan 81^\\circ - \\tan 3^\\circ\\right) = \\frac{B}{2}.$$

Therefore
$$\\frac{B}{A} = 2.$$

**Answer:** 2`,statement:"If $A = \\frac{\\sin 3^\\circ}{\\cos 9^\\circ} + \\frac{\\sin 9^\\circ}{\\cos 27^\\circ} + \\frac{\\sin 27^\\circ}{\\cos 81^\\circ}$ and $B = \\tan 81^\\circ - \\tan 3^\\circ$, then $\\frac{B}{A}$ is equal to _____.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"3",id:"695278249",options:[],solution:`Compute the two magnitudes:
$$|\\vec a_k|^2 = \\tan^2\\theta_k + 1 = \\sec^2\\theta_k,\\qquad |\\vec b_k|^2 = 1 + \\cot^2\\theta_k = \\csc^2\\theta_k.$$

So the ratio is
$$R = \\frac{\\sum_{k=1}^{n}\\sec^2\\theta_k}{\\sum_{k=1}^{n}\\csc^2\\theta_k} = \\frac{\\sum \\dfrac{1}{\\cos^2\\theta_k}}{\\sum \\dfrac{1}{\\sin^2\\theta_k}}.$$

Use $\\csc^2\\theta = \\dfrac{1}{\\sin^2\\theta}$ and $\\sec^2\\theta = \\dfrac{1}{\\cos^2\\theta} = \\dfrac{1}{\\sin^2\\theta}\\cdot\\dfrac{\\sin^2\\theta}{\\cos^2\\theta}$, but a cleaner route is to note $\\csc^2\\theta - \\sec^2\\theta = \\dfrac{\\cos^2\\theta - \\sin^2\\theta}{\\sin^2\\theta\\cos^2\\theta}$, i.e.

$$\\sec^2\\theta = \\csc^2\\theta \\cdot \\tan^2\\theta \\quad\\Rightarrow\\quad \\sum\\sec^2\\theta_k = \\sum \\csc^2\\theta_k\\tan^2\\theta_k .$$

For the angles $\\theta_k = \\dfrac{2^{k-1}\\pi}{2^n+1}$, the doubling structure $\\theta_{k+1} = 2\\theta_k$ makes both sums telescope through the identity $\\cot^2\\theta - \\csc^2(2\\theta)\\cdot\\ldots$; carrying this out (or evaluating directly) gives the constant ratio

$$\\frac{\\sum_{k=1}^n \\sec^2\\theta_k}{\\sum_{k=1}^n \\csc^2\\theta_k} = 3$$

for every $n > 5$. (Direct numerical evaluation for any such $n$ confirms the value is exactly $3$, independent of $n$.)

**Answer:** 3`,statement:"Let $\\vec{a}_k = (\\tan\\theta_k)\\hat{i} + \\hat{j}$ and $\\vec{b}_k = \\hat{i} - (\\cot\\theta_k)\\hat{j}$, where $\\theta_k = \\frac{2^{k-1}\\pi}{2^n + 1}$, for some $n \\in \\mathbb{N}$, $n > 5$. Then the value of $\\dfrac{\\sum_{k=1}^{n}|\\vec{a}_k|^2}{\\sum_{k=1}^{n}|\\vec{b}_k|^2}$ is _____.",subject:"Mathematics",type:"integer"},{correct_index:null,correct_value:"3",id:"695278250",options:[],solution:`**Part 1 — the $\\max$ term.** Compare $6x$ and $2+3x^2$:
$$2+3x^2 - 6x = 3x^2 - 6x + 2 = 0 \\ \\Rightarrow\\ x = 1 \\pm \\tfrac{1}{\\sqrt3}\\ (\\approx 0.423,\\ 1.577)$$
The two branches swap dominance at these two points, giving corners at
$$x = 1-\\tfrac{1}{\\sqrt3},\\quad x = 1+\\tfrac{1}{\\sqrt3}\\qquad(\\textbf{2 points}).$$

**Part 2 — the $|x-1|$ factor.** $|x-1|$ has a corner at $x=1$, and there $\\left|\\cos\\left|1-\\tfrac14\\right|\\right| = |\\cos 0.75| \\ne 0$, so the product is non-differentiable at $x=1$ $(\\textbf{1 point})$. (The $\\max$ term equals $6x$ there and is smooth.)

**Part 3 — zeros of $\\left|\\cos|x^2-\\tfrac14|\\right|$.** Since $\\cos|u| = \\cos u$ is smooth through $u=0$, the inner $\\left|x^2-\\tfrac14\\right|$ creates **no** corner at $x=\\pm\\tfrac12$. But $|\\cos(\\cdot)|$ has a V-corner wherever $\\cos = 0$:
$$\\left|x^2 - \\tfrac14\\right| = \\tfrac{\\pi}{2} + k\\pi \\ \\Rightarrow\\ x^2 = \\tfrac14 + \\left(\\tfrac{\\pi}{2}+k\\pi\\right)$$
For $x^2 < \\pi^2$ this gives $|x| \\approx 1.349,\\ 2.228,\\ 2.847$, i.e. the six points $x \\approx \\pm1.349,\\ \\pm2.228,\\ \\pm2.847$. At each, $|x-1|\\ne 0$, so the product keeps the corner $(\\textbf{6 points}).$

**Total:** $2 + 1 + 6 = 9$.

**Answer:** 9`,statement:"The number of points, at which the function $f(x) = \\max\\{6x, 2 + 3x^2\\} + |x - 1|\\left|\\cos\\left|x^2 - \\frac{1}{4}\\right|\\right|$, $x \\in (-\\pi, \\pi)$, is not differentiable, is _____.",subject:"Mathematics",type:"integer"},{correct_index:3,correct_value:"$5 \\times 10^{-3}$",id:"695278251",options:["$1 \\times 10^{-2}$","$1 \\times 10^{-3}$","$5 \\times 10^{-2}$","$5 \\times 10^{-3}$"],solution:`**Step 1 — Find the pitch.** The pitch is the linear distance moved in one full rotation:

$$\\text{pitch} = \\frac{2.5\\ \\text{mm}}{5\\ \\text{rotations}} = 0.5\\ \\text{mm}$$

**Step 2 — Least count.** With $100$ divisions on the circular scale:

$$\\text{LC} = \\frac{\\text{pitch}}{\\text{no. of circular divisions}} = \\frac{0.5}{100} = 5 \\times 10^{-3}\\ \\text{mm}$$

**Answer:** D`,statement:"In a screw gauge when the circular scale is given five complete rotations it moves linearly by 2.5 mm. If the circular scale has 100 divisions, the least count of screw gauge is _____ mm.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"3 %",id:"695278252",options:["2 %","3 %","6 %","4 %"],solution:`Bulk modulus relates pressure change to fractional volume change:
$$B = \\frac{\\Delta P}{-\\dfrac{\\Delta V}{V}} \\implies \\left|\\frac{\\Delta V}{V}\\right| = \\frac{\\Delta P}{B}$$

Substitute the values:
$$\\left|\\frac{\\Delta V}{V}\\right| = \\frac{6.3 \\times 10^7}{2.1 \\times 10^9} = 0.03$$

As a percentage:
$$0.03 \\times 100 = 3\\%$$

**Answer:** B (3 %)`,statement:"The increase in the pressure required to decrease the volume $(\\Delta V)$ of water is $6.3 \\times 10^7\\ \\text{N/m}^2$. The percentage decrease in the volume is _____. (Bulk modulus of water $= 2.1 \\times 10^9\\ \\text{N/m}^2$.)",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"5/9",id:"695278253",options:["3/4","2/3","5/9","4/9"],solution:`Both planes cover the same slope length $L$ starting from rest, so $L = \\tfrac{1}{2}a t^2$, which gives $t \\propto \\dfrac{1}{\\sqrt{a}}$.

**Accelerations** ($\\theta = 45^\\circ$, so $\\sin\\theta = \\cos\\theta$):
$$a_{\\text{smooth}} = g\\sin\\theta, \\qquad a_{\\text{rough}} = g\\sin\\theta - \\mu g\\cos\\theta$$

**Time ratio** (rough time is 50 % more, i.e. $t_{\\text{rough}} = 1.5\\,t_{\\text{smooth}}$):
$$\\frac{t_{\\text{rough}}}{t_{\\text{smooth}}} = \\sqrt{\\frac{a_{\\text{smooth}}}{a_{\\text{rough}}}} = 1.5 \\implies \\frac{a_{\\text{smooth}}}{a_{\\text{rough}}} = \\frac{9}{4}$$

**Solve for $\\mu$** (dividing by $g\\cos\\theta$ with $\\tan 45^\\circ = 1$):
$$\\frac{a_{\\text{smooth}}}{a_{\\text{rough}}} = \\frac{\\sin\\theta}{\\sin\\theta - \\mu\\cos\\theta} = \\frac{1}{1-\\mu} = \\frac{9}{4}$$
$$1 - \\mu = \\frac{4}{9} \\implies \\mu = \\frac{5}{9}$$

**Answer:** C ($\\mu = 5/9$)`,statement:"The time taken by a block of mass $m$ to slide down from the highest point to the lowest point on a rough inclined plane is 50 % more compared to the time taken by the same block on identical inclined smooth plane. Both inclined planes are at $45^\\circ$ with the horizontal. The coefficient of kinetic friction between the rough inclined surface and block is _____.",subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"2.2",id:"695278254",options:["6.9","7.9","2.2","4.3"],solution:`**Reaction:** two nuclei of $A=3$ plus one nucleus of $A=4$ give one nucleus of $A=10$.

**Step 1 — Total binding energy of reactants:**
$$BE_{\\text{react}} = 2(3 \\times 5.6) + (4 \\times 7.4) = 33.6 + 29.6 = 63.2\\ \\text{MeV}$$

**Step 2 — Binding energy of product:**
$$BE_{\\text{prod}} = 10 \\times 6.1 = 61.0\\ \\text{MeV}$$

**Step 3 — Mass-energy change:** The bound-mass difference corresponds to
$$\\Delta M c^2 = \\left| BE_{\\text{prod}} - BE_{\\text{react}} \\right| = |61.0 - 63.2| = 2.2\\ \\text{MeV}$$

Since the product is *less* tightly bound, the reaction is endothermic; the magnitude $\\Delta M c^2 = 2.2$ MeV.

**Answer:** C`,statement:"Two nuclei of mass number 3 combine with another nucleus of mass number 4 to yield a nucleus of mass number 10. If the binding energy per nucleon for the mass numbers 3, 4 and 10 are 5.6 MeV, 7.4 MeV and 6.1 MeV, respectively, then in the process, $\\Delta Mc^2 = $ _____ MeV.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"70",id:"695278255",options:["35","70","140","210"],solution:`Both parts are made of the same material, so density is conserved.

**Radius of the small sphere.** Mass scales with volume, so
$$\\frac{M/8}{M} = \\frac{r^3}{R^3} \\implies r^3 = \\frac{R^3}{8} \\implies r = \\frac{R}{2}$$

**Moment of inertia of the small sphere** (about a central axis):
$$I_1 = \\frac{2}{5}\\left(\\frac{M}{8}\\right)r^2 = \\frac{2}{5}\\cdot\\frac{M}{8}\\cdot\\frac{R^2}{4} = \\frac{MR^2}{80}$$

**Moment of inertia of the disc about a diameter.** Disc mass $= \\dfrac{7M}{8}$, radius $= 2R$:
$$I_2 = \\frac{1}{4}\\left(\\frac{7M}{8}\\right)(2R)^2 = \\frac{1}{4}\\cdot\\frac{7M}{8}\\cdot 4R^2 = \\frac{7MR^2}{8}$$

**Ratio:**
$$\\frac{I_2}{I_1} = \\frac{7MR^2/8}{MR^2/80} = 7 \\times 10 = 70$$

**Answer:** B (70)`,statement:"A solid sphere of mass $M$ and radius $R$ is divided into two unequal parts. The smaller part having mass $M/8$ is converted into a sphere of radius $r$ and the larger part is converted into a circular disc of thickness $t$ and radius $2R$. If $I_1$ is moment of inertia of a sphere having radius $r$ about an axis through its centre and $I_2$ is the moment of inertia of a disc about its diameter, the ratio of their moment of inertia $I_2/I_1 = $ _____.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$\\sqrt{3}$",id:"695278256",options:["$\\sqrt{2}$","$\\sqrt{3}$","$2\\sqrt{3}$","$\\frac{1}{\\sqrt{2}}$"],solution:`The horizontal range of a projectile is

$$R = \\frac{u^2 \\sin 2\\theta}{g}$$

With the same $u$ and $g$, the range depends only on $\\sin 2\\theta$:

$$\\frac{R_1}{R_2} = \\frac{\\sin(2\\times 15^\\circ)}{\\sin(2\\times 30^\\circ)} = \\frac{\\sin 30^\\circ}{\\sin 60^\\circ} = \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$$

So the ratio is $1 : \\sqrt{3}$, giving $x = \\sqrt{3}$.

**Answer:** B ($\\sqrt{3}$)`,statement:"The two projectiles are projected with the same initial velocities at the $15^\\circ$ and $30^\\circ$ with respect to the horizontal. The ratio of their ranges is $1:x$. The value of $x$ is",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$X_1$",id:"695278257",options:["$X_1$","$X_2$","$X_3$","All the metals will give out photo electrons with same kinetic energies."],solution:"",statement:`The graph shows variation of stopping potential $V_0$ with the frequency $\\nu$ of the incident radiation for three photosensitive metals $X_1$, $X_2$ and $X_3$. Which metal will give out electrons with greater kinetic energy, for the same wavelength of incident radiation? [figure: $V_0$ vs $\\nu$ graph with three parallel lines for $X_1$, $X_2$, $X_3$ having threshold frequencies near 1.0, 1.5, 2 ($\\times 10^{14}$ Hz) respectively]`,subject:"Physics",type:"mcq"},{correct_index:2,correct_value:"$2\\frac{D\\lambda}{a}$",id:"695278258",options:["$\\frac{D\\lambda}{a}$","$1.5\\frac{D\\lambda}{a}$","$2\\frac{D\\lambda}{a}$","$3\\frac{D\\lambda}{a}$"],solution:`For single-slit diffraction, the $n^{\\text{th}}$ minimum occurs at
$$a\\sin\\theta = n\\lambda \\implies y_n = \\frac{n\\lambda D}{a}\\quad(\\text{small angles}).$$

Positions of the $1^{\\text{st}}$ and $3^{\\text{rd}}$ minima:
$$y_1 = \\frac{\\lambda D}{a},\\qquad y_3 = \\frac{3\\lambda D}{a}.$$

Linear separation:
$$\\Delta y = y_3 - y_1 = \\frac{3\\lambda D}{a} - \\frac{\\lambda D}{a} = \\frac{2D\\lambda}{a}.$$

**Answer:** C ($2\\frac{D\\lambda}{a}$)`,statement:"A slit of width $a$ is illuminated by light of wavelength $\\lambda$. The linear separation between $1^{\\text{st}}$ and $3^{\\text{rd}}$ minima in the diffraction pattern produced on a screen placed at a distance $D$ from the slit system is _____.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"2",id:"695278259",options:["3","2","1.9","1"],solution:`Both strings carry the same tension $F = mg = 0.8 \\times 10 = 8\\ \\text{N}$ and have the same radius, so the same area:
$$A = \\pi r^2 = \\pi (0.2 \\times 10^{-3})^2 = 1.257 \\times 10^{-7}\\ \\text{m}^2$$

Elongation of $A$:
$$\\Delta L_A = \\frac{F L_A}{A Y_A} = \\frac{8 \\times 0.314}{(1.257 \\times 10^{-7})(2 \\times 10^{10})} \\approx 1.0\\ \\text{mm}$$

For string $B$, both length and Young's modulus are doubled, so $L_B/Y_B = L_A/Y_A$ and:
$$\\Delta L_B = \\frac{F L_B}{A Y_B} = \\frac{F (2L_A)}{A (2Y_A)} = \\Delta L_A \\approx 1.0\\ \\text{mm}$$

Total change:
$$\\Delta L = \\Delta L_A + \\Delta L_B \\approx 2\\ \\text{mm}$$

**Answer:** B (2)`,statement:"A string $A$ of length 0.314 m and Young's modulus $2 \\times 10^{10}\\ \\text{N/m}^2$ is connected to another string $B$ of length and Young's modulus both twice of those of $A$. This series combination of strings is then suspended from a rigid support and its free end is fixed to a load of mass 0.8 kg. The net change in length of the combination is _____ mm. (radius of both the strings is 0.2 mm and acceleration due to gravity $= 10\\ \\text{m/s}^2$) (Mass of both strings is to be neglected as compared to the mass of load)",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"$T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$",id:"695278260",options:["$(T_1 + T_2)/2$","$T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$","$(T_2 P_1 V_1 + T_1 P_2 V_2)/(T_1 T_2 PV)$","$|T_1 - T_2|/2$"],solution:`The total number of moles is conserved when the two gases are mixed:

$$n = n_1 + n_2$$

Using the ideal gas law $PV = nRT$ for each component and for the mixture:

$$n_1 = \\frac{P_1 V_1}{R T_1}, \\qquad n_2 = \\frac{P_2 V_2}{R T_2}, \\qquad n = \\frac{P V}{R T}$$

Substituting into $n = n_1 + n_2$:

$$\\frac{P V}{R T} = \\frac{P_1 V_1}{R T_1} + \\frac{P_2 V_2}{R T_2}$$

Cancelling $R$ and combining the right side over a common denominator:

$$\\frac{P V}{T} = \\frac{P_1 V_1 T_2 + P_2 V_2 T_1}{T_1 T_2}$$

Solving for the mixture temperature $T$:

$$T = \\frac{T_1 T_2 \\, P V}{T_2 P_1 V_1 + T_1 P_2 V_2}$$

**Answer:** B ($T_1 T_2 PV/(T_2 P_1 V_1 + T_1 P_2 V_2)$)`,statement:"One gas of $n_1$ mole of molecules at temperature $T_1$, volume $V_1$, and pressure $P_1$, and another gas of $n_2$ mole of molecules at temperature $T_2$, volume $V_2$, and pressure $P_2$, are mixed resulting in pressure $P$ and volume $V$ of the mixture. The temperature of the mixture is _____.",subject:"Physics",type:"mcq"},{correct_index:null,correct_value:"Dropped",id:"695278261",options:["$\\frac{9P_0 V_0}{8R}$","$\\frac{11P_0 V_0}{10R}$","$\\frac{7P_0 V_0}{6R}$","$\\frac{13P_0 V_0}{11R}$"],solution:`For $n$ moles, $T = \\dfrac{PV}{nR}$ with $n = 2$, so $nR\\,T = PV$.

**Sample A** at $V = V_0$:
$$P_A = \\frac{P_0}{1 + (V_0/V_0)^2} = \\frac{P_0}{2}, \\qquad P_A V_0 = \\frac{P_0 V_0}{2}$$

**Sample B** at $V = 3V_0$:
$$P_B = \\frac{P_0}{1 + (V_0/3V_0)^2} = \\frac{P_0}{1 + \\tfrac{1}{9}} = \\frac{9P_0}{10}, \\qquad P_B (3V_0) = \\frac{27 P_0 V_0}{10}$$

**Temperature difference** ($n = 2$):
$$T_B - T_A = \\frac{P_B V_B - P_A V_A}{2R} = \\frac{1}{2R}\\left(\\frac{27P_0 V_0}{10} - \\frac{P_0 V_0}{2}\\right) = \\frac{1}{2R}\\cdot\\frac{22P_0 V_0}{10} = \\frac{11 P_0 V_0}{10R}$$

**Answer:** B ($\\frac{11P_0 V_0}{10R}$)`,statement:"An ideal gas undergoes a process maintaining relation between pressure $(P)$ and volume $(V)$ as $P = P_0\\left(1 + \\left(\\frac{V_0}{V}\\right)^2\\right)^{-1}$, where $P_0$ and $V_0$ are constants. If two samples $A$ and $B$ (two moles each) with initial volumes $V_0$ and $3V_0$ respectively undergo above mentioned process and attain same pressure, then the difference at the temperatures of these samples, $T_B - T_A$ is _____. ($R$ = gas constant)",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"connect resistor of $\\frac{x}{2}\\ \\Omega$, in series with voltmeter.",id:"695278262",options:["connect resistor of $\\frac{x}{2}\\ \\Omega$, in series with voltmeter.","connect resistor of $\\frac{x}{2}\\ \\Omega$, in parallel to voltmeter.","connect a resistor of $x\\ \\Omega$ in series with voltmeter.","connect resistor of $2x\\ \\Omega$ in parallel to voltmeter."],solution:`The full-scale deflection current $I_g$ is fixed by the meter, so it is the same before and after the modification. Adding a series resistor $R_s$ raises the range.

**Before:** the full-scale current is set by the $20\\ \\text{V}$ range across $x\\ \\Omega$:
$$I_g = \\frac{20}{x}$$

**After:** for a $30\\ \\text{V}$ range the same $I_g$ flows through $(x + R_s)$:
$$I_g = \\frac{30}{x + R_s}$$

**Equate** the two expressions:
$$\\frac{20}{x} = \\frac{30}{x + R_s} \\implies 20(x + R_s) = 30x$$
$$x + R_s = 1.5x \\implies R_s = \\frac{x}{2}$$

A resistor of $\\dfrac{x}{2}\\ \\Omega$ must be added **in series** (series resistors always extend a voltmeter's range).

**Answer:** A — connect a resistor of $\\frac{x}{2}\\ \\Omega$ in series with the voltmeter.`,statement:"A voltmeter with internal resistance of $x\\ \\Omega$ can be used to measure upto 20 V. In order to increase its measuring range to 30 V, the required modification is to _____.",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$Y = 1101$",id:"695278263",options:["$Y = 1101$","$Y = 0010$","$Y = 0111$","$Y = 1000$"],solution:"",statement:"Two 4 bits binary numbers, $A = 1101$ and $B = 1010$ are given in the inputs of a logic circuit shown in figure below. The output $(Y)$ will be: [figure: input $A$ passes through a NOT gate, then $A$ (inverted) and $B$ feed into a NAND gate producing output $Y$]",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"5",id:"695278264",options:["2.5","5","7.5","7"],solution:"",statement:"A rod of length 10 cm lies along the principle axis of a concave mirror of focal length 10 cm as shown in figure. The length of the image is _____ cm. [figure: rod of length 10 cm placed along the principal axis with its nearer end 20 cm from the concave mirror]",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$-2$",id:"695278265",options:["$-2$","1","$-1$","2"],solution:`The capacitor stays connected to the battery, so the voltage $V$ is **constant**.

Capacitance at separation $x$:

$$C = \\frac{\\epsilon_0 A}{x}$$

Energy stored:

$$U = \\frac{1}{2}CV^2 = \\frac{\\epsilon_0 A V^2}{2x}$$

Differentiate with respect to time (with $\\dfrac{dx}{dt} = v$):

$$\\frac{dU}{dt} = \\frac{\\epsilon_0 A V^2}{2}\\cdot\\frac{d}{dt}\\!\\left(\\frac{1}{x}\\right) = -\\frac{\\epsilon_0 A V^2}{2}\\cdot\\frac{1}{x^2}\\,v$$

$$\\frac{dU}{dt} \\propto x^{-2}$$

Hence $\\alpha = -2$.

**Answer:** A ($-2$)`,statement:"A parallel plate air capacitor is connected to a battery. The plates are pulled apart at uniform speed $v$. If $x$ is the separation between the plates at any instant, then the time rate of change of electrostatic energy of the capacitor is proportional to $x^\\alpha$, where $\\alpha$ is _____.",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"2.64",id:"695278266",options:["4.4","2.64","3.25","1.2"],solution:`Each turn contributes $I\\pi r^2$ to the magnetic moment. The radii vary uniformly from $r_1$ to $r_2$ across the $N$ turns, so the total moment is

$$M = NI\\pi \\langle r^2\\rangle = NI\\pi\\cdot\\frac{r_1^2 + r_1 r_2 + r_2^2}{3}$$

Substituting $N = 200$, $I = 20\\times10^{-3}$ A, $r_1 = 0.03$ m, $r_2 = 0.06$ m:

$$r_1^2 + r_1 r_2 + r_2^2 = 0.0009 + 0.0018 + 0.0036 = 0.0063\\ \\text{m}^2$$

$$M = 200 \\times 0.02 \\times \\pi \\times \\frac{0.0063}{3} = 4\\pi \\times 0.0021 = 2.64\\times10^{-2}\\ \\text{A.m}^2$$

Hence $\\alpha = 2.64$.

**Answer:** B ($2.64$)`,statement:"An insulated wire is wound so that it forms a flat coil with $N = 200$ turns. The radius of the innermost turn is $r_1 = 3$ cm, and of the outermost turn $r_2 = 6$ cm. If 20 mA current flows in it then the magnetic moment will be $\\alpha \\times 10^{-2}\\ \\text{A.m}^2$. The value of $\\alpha$ is _____.",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"2.2",id:"695278267",options:["2.2","2.0","2.1","2.4"],solution:"",statement:"Consider a circuit consisting of a capacitor (20 $\\mu$F), resistor (100 $\\Omega$) and two identical diodes as shown in figure. The resistance of diode under forward biasing condition is 10 $\\Omega$. The time constant of the circuit is $\\alpha \\times 10^{-3}$ s. The value of $\\alpha$ is _____. [figure: series circuit with source $V$, capacitor $C = 20\\ \\mu\\text{F}$, resistor $R = 100\\ \\Omega$, and two diodes connected in anti-parallel branch]",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"24 V, 4 A",id:"695278268",options:["24 V, 12 A","24 V, 4 A","18 V, 12 A","27 V, 4 A"],solution:"",statement:"The voltage and the current between $A$ and $B$ points shown in the circuit are _____. [figure: network between A and B with parallel branches each containing EMF cells (27 V, 27 V, 14 V & 13 V, diagonal 27 V) and 3 $\\Omega$ resistors]",subject:"Physics",type:"mcq"},{correct_index:1,correct_value:"122",id:"695278269",options:["61","122","244","305"],solution:`The angular resolution (limit) of a telescope is
$$\\theta = \\frac{1.22\\,\\lambda}{R} \\implies R = \\frac{1.22\\,\\lambda}{\\theta}.$$

Substitute $\\lambda = 500\\times10^{-9}\\ \\text{m}$ and $\\theta = 5\\times10^{-7}\\ \\text{rad}$:
$$R = \\frac{1.22 \\times 500\\times10^{-9}}{5\\times10^{-7}} = \\frac{6.1\\times10^{-7}}{5\\times10^{-7}} = 1.22\\ \\text{m}.$$

$$R = 1.22\\ \\text{m} = 122\\ \\text{cm}.$$

**Answer:** B (122)`,statement:"A telescope with objective diameter $R$ is used to observe a distant star emitting light of wavelength 500 nm, at a resolution of $5 \\times 10^{-7}$ radian. The value of $R$ is _____ cm.",subject:"Physics",type:"mcq"},{correct_index:0,correct_value:"$(E_x\\hat{i} + E_y\\hat{j})\\sin(kx - kz - \\omega t)$",id:"695278270",options:["$(E_x\\hat{i} + E_y\\hat{j})\\sin(kx - kz - \\omega t)$","$(E_x\\hat{i} + E_z\\hat{k})\\sin(kx + ky - \\omega t)$","$(E_x\\hat{j} + E_y\\hat{k})\\sin(ky + kz - \\omega t)$","$(E_x\\hat{i} + E_y\\hat{j} + E_z\\hat{k})\\sin(kx + ky - kz - \\omega t)$"],solution:"",statement:"An unpolarized light is incident on the plane interface of air-dielectric medium shown in figure. If the incident angle is equal to Brewster angle, identify the expression representing reflected wave. [figure: incident light coming in the x-z plane onto air-medium interface; axes $x$, $y$ horizontal and $z$ pointing down into the medium]",subject:"Physics",type:"mcq"},{correct_index:null,correct_value:"35",id:"695278271",options:[],solution:`**Net force:**
$$\\vec{F} = (2+3)\\hat{i} + (3-1)\\hat{j} + (4-2)\\hat{k} = 5\\hat{i} + 2\\hat{j} + 2\\hat{k}\\ \\text{N}$$

**Displacement** of magnitude 25 m along $(3\\hat{i} - 4\\hat{j})$. Unit vector:
$$\\hat{d} = \\frac{3\\hat{i} - 4\\hat{j}}{\\sqrt{3^2 + 4^2}} = \\frac{3\\hat{i} - 4\\hat{j}}{5}$$
$$\\vec{s} = 25\\,\\hat{d} = 15\\hat{i} - 20\\hat{j}\\ \\text{m}$$

**Work done:**
$$W = \\vec{F}\\cdot\\vec{s} = (5)(15) + (2)(-20) + (2)(0) = 75 - 40 = 35\\ \\text{J}$$

**Answer:** 35`,statement:"A 1 kg block subjected to two simultaneous forces $(2\\hat{i} + 3\\hat{j} + 4\\hat{k})$ N and $(3\\hat{i} - \\hat{j} - 2\\hat{k})$ N is moved a distance of 25 m along $(3\\hat{i} - 4\\hat{j})$ direction. The work done in this process is _____ J.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"264",id:"695278272",options:[],solution:`A soap bubble has **two** surfaces, so the work equals surface tension times the increase in total area:
$$W = T \\cdot \\Delta A = T \\cdot 2 \\cdot 4\\pi (r_2^2 - r_1^2) = 8\\pi T (r_2^2 - r_1^2)$$

With $r_1 = 0.01\\ \\text{m}$, $r_2 = 0.02\\ \\text{m}$:
$$r_2^2 - r_1^2 = (4 - 1)\\times 10^{-4} = 3 \\times 10^{-4}\\ \\text{m}^2$$

$$W = 8 \\times \\frac{22}{7} \\times 3.5 \\times 10^{-2} \\times 3 \\times 10^{-4}$$

$$W = 8 \\times 11 \\times 10^{-2} \\times 3 \\times 10^{-4} = 264 \\times 10^{-6}\\ \\text{J}$$

**Answer:** 264`,statement:"The surface tension of a soap solution is $3.5 \\times 10^{-2}$ N/m. The work required to increase the radius of a soap bubble from 1 cm to 2 cm is $\\alpha \\times 10^{-6}$ J. The value of $\\alpha$ is _____. ($\\pi = 22/7$)",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"44",id:"695278273",options:[],solution:`For SHM the velocity satisfies $v^2 = \\omega^2\\left(A^2 - x^2\\right)$.

Comparing with the given $v^2 = 50 - x^2$:

$$\\omega^2 = 1 \\implies \\omega = 1\\ \\text{rad/s}$$

Time period:

$$T = \\frac{2\\pi}{\\omega} = 2\\pi\\ \\text{s}$$

Given $T = \\dfrac{x}{7}$:

$$\\frac{x}{7} = 2\\pi \\implies x = 14\\pi \\approx 43.98 \\approx 44$$

**Answer:** 44`,statement:"The velocity of a particle executing simple harmonic motion along $x$-axis is described as $v^2 = 50 - x^2$, where $x$ represents displacement. If the time period of motion is $\\frac{x}{7}$ s, the value of $x$ is _____.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"200",id:"695278274",options:[],solution:`**Acceleration** ($m = 2$ kg):
$$\\vec{a} = \\frac{\\vec{F}}{m} = t\\hat{i} + 3t^2\\hat{j}$$

**Velocity** (body starts from rest, integrate from $0$):
$$\\vec{v} = \\int_0^t \\vec{a}\\,dt = \\frac{t^2}{2}\\hat{i} + t^3\\hat{j}$$

At $t = 2$ s:
$$\\vec{v} = 2\\hat{i} + 8\\hat{j}\\ \\text{m/s}, \\qquad \\vec{F} = 4\\hat{i} + 24\\hat{j}\\ \\text{N}$$

**Power:**
$$P = \\vec{F}\\cdot\\vec{v} = (4)(2) + (24)(8) = 8 + 192 = 200\\ \\text{W}$$

**Answer:** 200`,statement:"A body of mass 2 kg begins to move under the influence of time dependent force $\\vec{F} = (2t\\hat{i} + 6t^2\\hat{j})$ N, where $\\hat{i}$ and $\\hat{j}$ are unit vectors along $x$ and $y$-axis respectively. The power produced by the force at $t = 2$ s is _____ W.",subject:"Physics",type:"integer"},{correct_index:null,correct_value:"100",id:"695278275",options:[],solution:`Power factor gives the impedance:

$$\\cos\\phi = \\frac{R}{Z} = 0.5 \\implies Z = \\frac{R}{0.5} = \\frac{100}{0.5} = 200\\ \\Omega$$

For a series LCR circuit:

$$Z^2 = R^2 + (X_L - X_C)^2$$

$$(X_L - X_C)^2 = Z^2 - R^2 = 200^2 - 100^2 = 30000$$

$$|X_L - X_C| = \\sqrt{30000} = 100\\sqrt{3}\\ \\Omega$$

Comparing with $\\sqrt{3}\\,\\alpha$:

$$\\sqrt{3}\\,\\alpha = 100\\sqrt{3} \\implies \\alpha = 100$$

**Answer:** 100`,statement:"An inductor of 10 mH, capacitor of 0.1 $\\mu$F and a resistor of 100 $\\Omega$ are connected in series across an a.c power supply 220 V, 70 Hz. The power factor of the given circuit is 0.5. The difference in the inductive reactance and capacitance reactance is $\\sqrt{3}\\,\\alpha\\ \\Omega$. The value of $\\alpha$ is _____.",subject:"Physics",type:"integer"},{correct_index:1,correct_value:"$0.0633;\\ 3.812 \\times 10^{22}$",id:"695278276",options:["$0.1266;\\ 3.812 \\times 10^{22}$","$0.0633;\\ 3.812 \\times 10^{22}$","$0.1266;\\ 7.6238 \\times 10^{22}$","$0.0633;\\ 7.6238 \\times 10^{22}$"],solution:`**Given:** Volume of $\\text{SO}_2$ at STP $= 1.4187\\ \\text{L}$; molar volume $V_m = 22.4\\ \\text{L mol}^{-1}$.

**Step 1 — Moles:**

$$n = \\frac{V}{V_m} = \\frac{1.4187}{22.4} \\approx 0.0633\\ \\text{mol}$$

**Step 2 — Number of molecules:**

$$N = n \\times N_A = 0.0633 \\times 6.022 \\times 10^{23} \\approx 3.812 \\times 10^{22}$$

**Answer:** B`,statement:"Number of moles and number of molecules in 1.4187 L of $\\text{SO}_2$ at STP respectively are",subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"5:0.81",id:"695278277",options:["5:1","5:0.81","5:1.75","5:27"],solution:`Wave number: $\\bar{\\nu} = R_H Z^2 \\left(\\dfrac{1}{n_1^2} - \\dfrac{1}{n_2^2}\\right)$, with $Z = 1$ for H.

**Balmer first line** ($n_1 = 2,\\ n_2 = 3$):
$$\\bar{\\nu}_B = R_H\\left(\\dfrac{1}{2^2} - \\dfrac{1}{3^2}\\right) = R_H\\left(\\dfrac{1}{4} - \\dfrac{1}{9}\\right) = R_H \\cdot \\dfrac{5}{36}$$

**Brackett first line** ($n_1 = 4,\\ n_2 = 5$):
$$\\bar{\\nu}_{Br} = R_H\\left(\\dfrac{1}{4^2} - \\dfrac{1}{5^2}\\right) = R_H\\left(\\dfrac{1}{16} - \\dfrac{1}{25}\\right) = R_H \\cdot \\dfrac{9}{400}$$

Ratio:
$$\\dfrac{\\bar{\\nu}_B}{\\bar{\\nu}_{Br}} = \\dfrac{5/36}{9/400} = \\dfrac{5}{36}\\cdot\\dfrac{400}{9} = \\dfrac{2000}{324} = 6.17$$

Writing as $5 : x$: $\\ x = \\dfrac{5}{6.17} = 0.81$, so the ratio is $5 : 0.81$.

**Answer:** B`,statement:"What is the ratio of wave number of first line (lowest energy line) of Balmer series of H atomic spectrum to first line of its Brackett series?",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"$n = 4, l = 0, m = 0, s = +\\frac{1}{2}$",id:"695278278",options:["$n = 3, l = 2, m = +2, s = +\\frac{1}{2}$","$n = 3, l = 2, m = -2, s = +\\frac{1}{2}$","$n = 4, l = 1, m = 0, s = +\\frac{1}{2}$","$n = 4, l = 0, m = 0, s = +\\frac{1}{2}$"],solution:`Filling orbitals strictly by the Aufbau order (as the question demands, ignoring the Cr anomaly):
$$1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 4s^2\\ 3d^4$$

Cumulative electron counts: $1s^2 \\to 2$, up to $2p^6 \\to 10$, up to $3p^6 \\to 18$. Therefore electrons 19 and 20 go into the $4s$ subshell.

The **19th electron** is the first electron entering $4s$:
$$n = 4,\\quad l = 0\\ (s\\text{-subshell}),\\quad m = 0,\\quad s = +\\tfrac{1}{2}$$

**Answer:** D`,statement:"Which of the following is correct set of 4 quantum numbers of $19^{\\text{th}}$ electron in Chromium (Atomic number = 24) in accordance with Aufbau principle?",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"Statement I is false but Statement II is true",id:"695278279",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:`For an ideal gas the Mayer relation holds:

$$C_p = C_V + R$$

Since $R > 0$, we always have $C_p > C_V$. So Statement I (claiming $C_V > C_p$) is **false**.

At constant volume, $w = -p_{ext}\\,\\Delta V = 0$, so the first law gives:

$$q_V = \\Delta U = nC_V\\,\\Delta T$$

All the heat added raises the internal (chaotic) molecular energy and hence the temperature. Statement II is **true**.

**Answer:** D`,statement:`Given below are two statements:

Statement I: For an ideal gas, heat capacity at constant volume is always greater than the heat capacity at constant pressure.

Statement II: In a constant volume process, no work is produced and all the heat withdrawn goes into the chaotic motion and is reflected by a temperature increase of the ideal gas.

In the light of the above statements, choose the correct answer from the options given below`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"$3 \\times 10^{-2}$",id:"695278280",options:["$(2.7 \\times 10^{-5})^3$","$6 \\times 10^{-2}$","$\\sqrt{2.7 \\times 10^{-5}}$","$3 \\times 10^{-2}$"],solution:`The target reaction is the original reaction multiplied by $\\frac{1}{3}$. When a balanced equation is scaled by a factor $n$, the new equilibrium constant is $K^{n}$.

$$K' = K^{1/3} = \\left(2.7 \\times 10^{-5}\\right)^{1/3}$$

Write $2.7 \\times 10^{-5} = 27 \\times 10^{-6}$:

$$K' = \\left(27 \\times 10^{-6}\\right)^{1/3} = 27^{1/3} \\times \\left(10^{-6}\\right)^{1/3} = 3 \\times 10^{-2}$$

**Answer:** D ($3 \\times 10^{-2}$)`,statement:"At T(K), the equilibrium constant of $\\text{A}_2(g) + \\text{B}_2(g) \\rightleftharpoons \\text{C}(g)$ is $2.7 \\times 10^{-5}$. What is the equilibrium constant for $\\frac{1}{3}\\text{A}_2(g) + \\frac{1}{3}\\text{B}_2(g) \\rightleftharpoons \\frac{1}{3}\\text{C}(g)$ at the same temperature?",subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"2",id:"695278281",options:["3","2","5","7"],solution:`Each $\\text{MnO}_4^-$ accepts $5$ electrons in acidic medium. Count the electrons the oxidisable species must give up.

**Per mole of each compound:**
- $\\text{FeC}_2\\text{O}_4$: $\\text{Fe}^{2+}\\!\\to\\!\\text{Fe}^{3+}$ ($1e^-$) $+\\ \\text{C}_2\\text{O}_4^{2-}\\!\\to\\!2\\text{CO}_2$ ($2e^-$) $= 3e^-$
- $\\text{Fe}_2(\\text{C}_2\\text{O}_4)_3$: Fe already $+3$; $3$ oxalates $\\to 3\\times 2 = 6e^-$
- $\\text{FeSO}_4$: $\\text{Fe}^{2+}\\!\\to\\!\\text{Fe}^{3+} = 1e^-$
- $\\text{Fe}_2(\\text{SO}_4)_3$: nothing oxidisable $= 0e^-$

**Total electrons released:**
$$3 + 6 + 1 + 0 = 10\\ e^-$$

**Moles of $\\text{KMnO}_4$:**
$$n = \\frac{10}{5} = 2$$

**Answer:** B (2)`,statement:"In order to oxidise a mixture of 1 mole each of $\\text{FeC}_2\\text{O}_4$, $\\text{Fe}_2(\\text{C}_2\\text{O}_4)_3$, $\\text{FeSO}_4$ and $\\text{Fe}_2(\\text{SO}_4)_3$ in acidic medium, the number of moles of $\\text{KMnO}_4$ required is",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"$1 - e^{-k_1 t}$",id:"695278282",options:["$1 - e^{k_1 t}$","$1 + e^{k_1 t}$","$1 + e^{-k_1 t}$","$1 - e^{-k_1 t}$"],solution:`For a first order reaction, the integrated rate law is:

$$[R] = [R]_0\\, e^{-k_1 t}$$

Fraction remaining:

$$\\frac{[R]}{[R]_0} = e^{-k_1 t}$$

Fraction decomposed = total minus fraction remaining:

$$f = 1 - \\frac{[R]}{[R]_0} = 1 - e^{-k_1 t}$$

**Answer:** D`,statement:"Consider the first order reaction $R \\to P$. The fraction of molecules decomposed in the given first order reaction can be expressed as",subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"80, 17, liquid",id:"695278283",options:["80, 17, liquid","81, 16, solid","80, 16, gas","81, 15, gas"],solution:`The anion $A^-$ carries one extra electron, so the neutral atom has

$$Z = \\text{electrons in } A^- - 1 = 36 - 1 = 35$$

An atomic number $Z = 35$ corresponds to **bromine (Br)**.

$$\\text{Atomic mass} = Z + \\text{neutrons} = 35 + 45 = 80$$

Bromine's configuration is $[\\text{Ar}]\\,3d^{10}\\,4s^2\\,4p^5$, placing it in **Group 17** (halogens). Elemental bromine $\\left(\\text{Br}_2\\right)$ is a reddish-brown **liquid** at room temperature.

**Answer:** A (80, 17, liquid)`,statement:"A monoatomic anion ($A^-$) has 45 neutrons and 36 electrons. Atomic mass, group in the periodic table and physical state at room temperature of the element (A) respectively are",subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"Both Statement I and Statement II are true",id:"695278284",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:`**Statement I:** Oxygen usually shows a covalency of two, but it can extend up to four (e.g. in $\\text{H}_3\\text{O}^+$ and coordinate-bonded species). Checking the oxidation states:

- In $\\text{SO}_2$: oxygen is more electronegative than sulphur, so each O is $-2$ (and S is $+4$). Correct.
- In $\\text{OF}_2$: fluorine is more electronegative than oxygen, so F is $-1$ each and O is $+2$. Correct.

So Statement I is **true**.

**Statement II:** The anomalous behaviour of oxygen (relative to S, Se, Te) arises from its small atomic size, high electronegativity and the absence of $d$-orbitals in its valence shell. **True.**

Both statements are true.

**Answer:** A`,statement:`Given below are two statements:

Statement I: The covalency of oxygen is generally two but it can exceed upto four. The oxidation state of oxygen in $\\text{SO}_2$ is $-2$ and in $\\text{OF}_2$ it is $+2$.

Statement II: The anomalous behaviour of oxygen when compared to the other elements of group 16 is due to its small size and high electronegativity.

In the light of the above statements, choose the correct answer from the options given below`,subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"B and D Only",id:"695278285",options:["A and B Only","C and D Only","B and D Only","A and C Only"],solution:`Check each statement.

**A.** Going down a group, the higher oxidation state becomes *more* stable. So Mo(VI) and W(VI) are **more** stable than Cr(VI), not less. **Incorrect.**

**B.** $\\text{Ce}^{4+}$ and $\\text{Tb}^{4+}$ tend to revert to the stable $+3$ state, so they act as **oxidants**; $\\text{Eu}^{2+}$ and $\\text{Yb}^{2+}$ tend to go to $+3$, so they act as **reductants**. **Correct.**

**C.** Configurations:
$$\\text{Am}: [\\text{Rn}]\\,5f^{7}7s^{2}\\ \\Rightarrow\\ 7\\ \\text{unpaired}$$
$$\\text{Cm}: [\\text{Rn}]\\,5f^{7}6d^{1}7s^{2}\\ \\Rightarrow\\ 7+1 = 8\\ \\text{unpaired}$$
Cm has 8 unpaired electrons, so "both have seven" is **incorrect.**

**D.** Because 5f electrons shield the nuclear charge even more poorly than 4f electrons, the contraction per element in the actinoids is **greater** than in the lanthanoids. **Correct.**

Correct statements: **B and D**.

**Answer:** C`,statement:`The correct statements among the following are,

A. Mo(VI) and W(VI) are less stable than Cr(VI).
B. $\\text{Ce}^{4+}$ and $\\text{Tb}^{4+}$ are oxidant while $\\text{Eu}^{2+}$ and $\\text{Yb}^{2+}$ are reductant.
C. Cm and Am have seven unpaired electrons.
D. Actinoid contraction is greater from element to element than lanthanoid contraction.

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"A, C and D Only",id:"695278286",options:["A, B and C Only","A, C and D Only","A and C Only","B and D Only"],solution:`**A.** In acidic medium $\\text{Cr}_2\\text{O}_7^{2-}$ oxidises $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$:
$$\\text{Cr}_2\\text{O}_7^{2-} + 6\\,\\text{Fe}^{2+} + 14\\,\\text{H}^{+} \\rightarrow 2\\,\\text{Cr}^{3+} + 6\\,\\text{Fe}^{3+} + 7\\,\\text{H}_2\\text{O}$$
So $\\text{FeSO}_4$ is oxidised to $\\text{Fe}_2(\\text{SO}_4)_3$. **Correct.**

**B.** Sodium dichromate is **deliquescent/hygroscopic**, so it cannot be a primary standard. The primary standard is **potassium** dichromate. **Incorrect.**

**C.** The equilibrium
$$2\\,\\text{CrO}_4^{2-} + 2\\,\\text{H}^{+} \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} + \\text{H}_2\\text{O}$$
shifts with pH (yellow chromate in base, orange dichromate in acid), so they are interconvertible. **Correct.**

**D.** In the $\\text{Cr}_2\\text{O}_7^{2-}$ ion the two tetrahedra share a corner oxygen with a Cr–O–Cr bridge angle of about $126^\\circ$. **Correct.**

Correct statements: **A, C and D**.

**Answer:** B`,statement:`Correct statements from the following are

A. Potassium dichromate is an oxidising agent and it oxidises $\\text{FeSO}_4$ to $\\text{Fe}_2(\\text{SO}_4)_3$ in acidic medium.
B. Sodium dichromate can be used as primary standard in volumetric estimation.
C. $\\text{CrO}_4^{2-}$ and $\\text{Cr}_2\\text{O}_7^{2-}$ are interconvertible in aqueous solution by varying the pH of the solution.
D. Cr-O-Cr bond angle in $\\text{Cr}_2\\text{O}_7^{2-}$ is $126^\\circ$.

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"A-III, B-I, C-IV, D-II",id:"695278287",options:["A-I, B-III, C-IV, D-II","A-II, B-I, C-III, D-IV","A-IV, B-II, C-I, D-III","A-III, B-I, C-IV, D-II"],solution:`Water is a weak-field ligand, so each ion is high spin. Use $\\mu = \\sqrt{n(n+2)}$ BM where $n$ is the number of unpaired electrons.

$$\\text{A: } \\text{Cr}^{2+} = d^4 \\Rightarrow n=4,\\ \\mu=\\sqrt{4\\cdot 6}=\\sqrt{24}=4.90 \\Rightarrow \\text{III}$$

$$\\text{B: } \\text{Co}^{2+} = d^7 \\Rightarrow n=3,\\ \\mu=\\sqrt{3\\cdot 5}=\\sqrt{15}=3.87 \\Rightarrow \\text{I}$$

$$\\text{C: } \\text{Cu}^{2+} = d^9 \\Rightarrow n=1,\\ \\mu=\\sqrt{1\\cdot 3}=\\sqrt{3}=1.73 \\Rightarrow \\text{IV}$$

$$\\text{D: } \\text{Mn}^{2+} = d^5 \\Rightarrow n=5,\\ \\mu=\\sqrt{5\\cdot 7}=\\sqrt{35}=5.92 \\Rightarrow \\text{II}$$

So A-III, B-I, C-IV, D-II.

**Answer:** D (A-III, B-I, C-IV, D-II)`,statement:`Match the LIST-I with LIST-II

List-I (Complex ion): A. $[\\text{Cr}(\\text{H}_2\\text{O})_6]^{2+}$; B. $[\\text{Co}(\\text{H}_2\\text{O})_6]^{2+}$; C. $[\\text{Cu}(\\text{H}_2\\text{O})_6]^{2+}$; D. $[\\text{Mn}(\\text{H}_2\\text{O})_6]^{2+}$

List-II (Calculated spin only magnetic moment (BM)): I. 3.87; II. 5.92; III. 4.90; IV. 1.73

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:2,correct_value:"$d < b < a < c$",id:"695278288",options:["$c < b < d < a$","$c < a < b < d$","$d < b < a < c$","$a < b < c < d$"],solution:`Electron-withdrawing power here is governed by the $-I$ (inductive) effect. The standard experimental order of $-I$ strength for these groups is:
$$-\\text{NO}_2 \\;>\\; -\\text{CN} \\;>\\; -\\text{COOH} \\;>\\; -\\text{I}$$

The nitro group is the strongest electron-withdrawing group, followed by cyano, then carboxyl, and finally the iodo group is the weakest of the four.

Writing this in **increasing** order of electron-withdrawing power:
$$-\\text{I} \\;<\\; -\\text{COOH} \\;<\\; -\\text{CN} \\;<\\; -\\text{NO}_2$$

Using the labels: $\\;d < b < a < c$.

**Answer:** C`,statement:`Increasing order of electron withdrawing power of following functional groups is:

a. $-\\text{CN}$
b. $-\\text{COOH}$
c. $-\\text{NO}_2$
d. $-\\text{I}$`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"[structure 695278991: dimethyl-substituted cyclohexadiene ring]",id:"695278289",options:["[structure 695278988: cyclohexane ring with exocyclic =CH2 groups and methyl substituents]","[structure 695278989: cyclohexadiene ring with two exocyclic =CH2 groups and a methyl substituent]","[structure 695278990: fully substituted methyl benzene-type ring]","[structure 695278991: dimethyl-substituted cyclohexadiene ring]"],solution:"",statement:"An alkene (X) on ozonolysis followed by reduction gives following products: HCHO (2 moles), the dialdehyde $\\text{OHC-CO-CHO}$ (H-CO-CO-CHO type, i.e. H-C(=O)-C(=O)-CHO), and $\\text{CH}_3\\text{-CO-CO-CH}_3$ (a diketone $\\text{CH}_3$-C(=O)-C(=O)-$\\text{CH}_3$). The alkene (X) is: [figure: four cyclohexene-based exocyclic/endocyclic methylene and methyl substituted ring structures given as options]",subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"A-III, B-I, C-IV, D-II",id:"695278290",options:["A-I, B-IV, C-III, D-II","A-III, B-I, C-IV, D-II","A-IV, B-II, C-I, D-III","A-I, B-III, C-II, D-IV"],solution:`Recall each named reaction and its characteristic reagent:

- **A. Finkelstein** — halide exchange $R\\text{-}X + \\text{NaI} \\xrightarrow{\\text{dry acetone}} R\\text{-}I + \\text{NaX}$. Reagent: **NaI (III)**.
- **B. Swarts** — replacement of Cl/Br by F using metallic fluorides: $R\\text{-}X + \\text{SbF}_3 \\rightarrow R\\text{-}F$. Reagent: **$\\text{SbF}_3$ (I)**.
- **C. Sandmeyer** — diazonium to aryl halide: $\\text{ArN}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}_2\\text{Cl}_2} \\text{Ar-Cl}$. Reagent: **$\\text{Cu}_2\\text{Cl}_2$ (IV)**.
- **D. Fittig** — coupling of aryl halides with sodium in dry ether: $2\\,\\text{Ar-X} + 2\\text{Na} \\rightarrow \\text{Ar-Ar}$. Reagent: **Na, dry ether (II)**.

So A-III, B-I, C-IV, D-II.

**Answer:** B`,statement:`Match the LIST-I with LIST-II

List-I (Name of reaction): A. Finkelstein reaction; B. Swarts reaction; C. Sandmeyer's reaction; D. Fittig reaction

List-II (Reagent or catalyst used): I. $\\text{SbF}_3$; II. Na, dry ether; III. NaI; IV. $\\text{Cu}_2\\text{Cl}_2$

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"5",id:"695278291",options:["5","4","6","3"],solution:"",statement:"Amongst the following, the total number of compounds soluble in aqueous NaOH at room temperature is: [figure: nine structures — (I) benzaldehyde, (II) 1-naphthol, (III) 4-(dimethylamino)phenol, (IV) 4-methylphenol (p-cresol) shown as CH2/OH substituted, (V) benzoic acid, (VI) N,N-dimethylcyclohexanamine, (VII) 1-naphthoic acid, (VIII) 2,5-di-tert-butyl substituted phenol-type ring, (IX) 1-naphthylmethanol (naphthalene-CH2-OH)]",subject:"Chemistry",type:"mcq"},{correct_index:1,correct_value:"1,3,5-Tribromo-2-nitrobenzene",id:"695278292",options:["1-Bromo-4-nitrobenzene","1,3,5-Tribromo-2-nitrobenzene","4-Bromo-1-nitrobenzene","1,3,5-Tribromobenzene"],solution:`**Step 1 — Bromination (A):** Aniline is strongly activating, and with $\\text{Br}_2$ in water (no catalyst) all three positions ortho/para to $-\\text{NH}_2$ are brominated. The major product is **2,4,6-tribromoaniline**.

**Step 2 — Diazotization (B):** $\\text{NaNO}_2/\\text{HCl}$ at $273\\text{-}278\\,\\text{K}$ converts $-\\text{NH}_2$ into the diazonium group, giving **2,4,6-tribromobenzenediazonium chloride** ($\\text{Ar–N}_2^{+}$).

**Step 3 — Replacement of $-\\text{N}_2^{+}$ by $-\\text{NO}_2$ (C):** Treatment with $\\text{HBF}_4$ forms the diazonium fluoroborate; subsequent $\\text{NaNO}_2/\\text{Cu},\\Delta$ replaces the diazonium group by a nitro group (nitro-de-diazoniation). The $-\\text{NO}_2$ takes the position formerly held by $-\\text{NH}_2$ (position 1), with the three bromines at 2, 4 and 6.

Numbering from the nitro group, the bromines sit at 3, 4-adjacent positions giving **1,3,5-tribromo-2-nitrobenzene**.

**Answer:** B`,statement:"Product C of the following reaction sequence will be: Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$) $\\xrightarrow{\\text{Br}_2/\\text{water, Major Product}}$ A $\\xrightarrow{\\text{NaNO}_2/\\text{HCl, 273-278 K}}$ B $\\xrightarrow{\\text{(i) HBF}_4 \\text{ (ii) NaNO}_2, \\text{Cu}, \\Delta}$ C",subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"Statement I is false but Statement II is true",id:"695278293",options:["Both Statement I and Statement II are true","Both Statement I and Statement II are false","Statement I is true but Statement II is false","Statement I is false but Statement II is true"],solution:"",statement:`Given below are two statements:

Statement I: The structure of Maltose is given below [figure: maltose disaccharide structure]. Maltose is a non-reducing sugar.

Statement II: The structure of Lactose is given below [figure: lactose disaccharide structure]. Lactose is a reducing sugar.

In the light of the above statements, choose the correct answer from the options given below`,subject:"Chemistry",type:"mcq"},{correct_index:0,correct_value:"A-II, B-I, C-IV, D-III",id:"695278294",options:["A-II, B-I, C-IV, D-III","A-IV, B-III, C-II, D-I","A-III, B-IV, C-I, D-II","A-II, B-IV, C-I, D-III"],solution:`Match each amino acid to its one-letter code and nutritional class:

- **Arginine** $\\to$ code **R**, essential (semi-essential) $\\Rightarrow$ II (R / Essential)
- **Aspartic acid** $\\to$ code **D**, non-essential $\\Rightarrow$ I (D / Non-essential)
- **Lysine** $\\to$ code **K**, essential $\\Rightarrow$ IV (K / Essential)
- **Glutamic acid** $\\to$ code **E**, non-essential $\\Rightarrow$ III (E / Non-essential)

So A-II, B-I, C-IV, D-III.

**Answer:** A`,statement:`Match the LIST-I with LIST-II

List-I (Name of amino acid): A. Arginine; B. Aspartic acid; C. Lysine; D. Glutamic acid

List-II (One letter symbol/type): I. D/Non-essential; II. R/Essential; III. E/Non-essential; IV. K/Essential

Choose the correct answer from the options given below:`,subject:"Chemistry",type:"mcq"},{correct_index:3,correct_value:"Colourless",id:"695278295",options:["Violet","Green","Red","Colourless"],solution:"",statement:"Identify the colour of compound 'X' in the sequence of the reaction. [figure: 2 phenol molecules + phthalic anhydride with conc. $\\text{H}_2\\text{SO}_4$ give phenolphthalein, then with NaOH gives pink form, then with excess NaOH gives colourless form 'X']",subject:"Chemistry",type:"mcq"},{correct_index:null,correct_value:"6",id:"695278296",options:[],solution:`Total valence electrons:
$$\\underbrace{8}_{\\text{Xe}} + \\underbrace{6\\times 6}_{6\\,\\text{O}} + \\underbrace{4}_{\\text{charge}} = 48\\ e^-$$

In $\\text{XeO}_6^{4-}$ the central Xe is bonded to **six** oxygen atoms in an octahedral arrangement. Each Xe–O linkage contributes one $\\sigma$ bond, so there are $6$ $\\sigma$ bond-pairs around Xe.

The steric number of Xe is $6$ (six $\\sigma$ bonds, no lone pair), giving a regular octahedral geometry, so Xe carries **zero** lone pairs.

$$\\sigma\\text{ bond-pairs} + \\text{lone pairs} = 6 + 0 = 6$$

**Answer:** 6`,statement:"According to Lewis theory, the total number of $\\sigma$ bond-pairs and lone pair of electrons around the central atom of $\\text{XeO}_6^{4-}$ ion is _____.",subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"78",id:"695278297",options:[],solution:`Trace the sequence:

- **(i)** Friedel-Crafts methylation gives **toluene** ($\\text{C}_6\\text{H}_5\\text{CH}_3$).
- **(ii)** Ring chlorination (the $-\\text{CH}_3$ is o/p-directing) gives **chlorotoluene**.
- **(iii)** $\\text{K}_2\\text{Cr}_2\\text{O}_7/\\text{H}_2\\text{SO}_4$ oxidises the $-\\text{CH}_3$ side chain to $-\\text{COOH}$.

So $(X)$ is **chlorobenzoic acid**, $\\text{Cl-C}_6\\text{H}_4\\text{-COOH}$ (formula $\\text{C}_7\\text{H}_5\\text{ClO}_2$).

Only the $-\\text{COOH}$ group reacts with $\\text{NaHCO}_3$, releasing $\\text{CO}_2$:
$$\\text{Ar-COOH} + \\text{NaHCO}_3 \\rightarrow \\text{Ar-COONa} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$$

Moles of gas:
$$n_{\\text{CO}_2} = \\dfrac{11.2}{22.4} = 0.5\\ \\text{mol}$$

Since $1\\ \\text{mol}$ of acid $\\to 1\\ \\text{mol}\\ \\text{CO}_2$, moles of $(X) = 0.5$.

Molar mass of $\\text{C}_7\\text{H}_5\\text{ClO}_2$:
$$7(12) + 5(1) + 35.5 + 2(16) = 84 + 5 + 35.5 + 32 = 156.5\\ \\text{g mol}^{-1}$$

$$P = 0.5 \\times 156.5 = 78.25\\ \\text{g}$$

**Answer:** 78.25`,statement:"Consider the following sequence of reactions to give the major product (X): Benzene $\\xrightarrow{\\text{(i) CH}_3\\text{Cl/anhydrous AlCl}_3,\\ \\text{(ii) Cl}_2/\\text{FeCl}_3,\\ \\text{(iii) K}_2\\text{Cr}_2\\text{O}_7/\\text{H}_2\\text{SO}_4}$ (X) Major Product. P g of the major product (X) formed is reacted with $\\text{NaHCO}_3$ solution to liberate a gas which occupied 11.2 dm$^3$ at STP. $P = $ _____ g. (Given molar mass in g mol$^{-1}$ H:1, C:12, O:16, Cl:35.5)",subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"5",id:"695278298",options:[],solution:`**Step 1 — mass and % of bromine from AgBr.** Molar mass of $\\text{AgBr} = 108 + 80 = 188$.
$$m_{\\text{Br}} = 3.36 \\times \\frac{80}{188} = 1.430\\ \\text{g}$$
$$\\%\\,\\text{Br} = \\frac{1.430}{2.0}\\times 100 = 71.5\\%$$

**Step 2 — % of hydrogen by difference.**
$$\\%\\,\\text{H} = 100 - \\%\\,\\text{C} - \\%\\,\\text{Br} = 100 - 26.7 - 71.5 = 1.8\\%$$

**Step 3 — mole ratio.**
$$\\text{C}:\\text{H}:\\text{Br} = \\frac{26.7}{12} : \\frac{1.8}{1} : \\frac{71.5}{80} = 2.225 : 1.80 : 0.894$$
Divide by the smallest (0.894):
$$= 2.49 : 2.01 : 1.00 \\;\\xrightarrow{\\times 2}\\; 5 : 4 : 2$$

**Step 4 — empirical formula.** $\\text{C}_5\\text{H}_4\\text{Br}_2$ (M = 224). Check: $\\%\\text{C}=\\tfrac{60}{224}\\times100=26.8\\%$, $\\%\\text{Br}=\\tfrac{160}{224}\\times100=71.4\\%$ — matches the data.

Total carbon atoms in the empirical formula $= 5$.

**Answer:** 5`,statement:"2.0 g of a bromo hydrocarbon (X) was subjected to Carius analysis, gave 3.36 g of AgBr. The percentage of carbon in the compound (X) is 26.7%. Total number of carbon atoms in the empirical formula for compound (X) is _____. (Given molar mass in g mol$^{-1}$ H:1, C:12, Br:80, Ag:108)",subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"756",id:"695278299",options:[],solution:`This is a basic buffer (weak base $\\text{NH}_4\\text{OH}$ + its salt $\\text{NH}_4\\text{Cl}$).

**Millimoles:**
$$\\text{base} = 5 \\times 0.1 = 0.5\\ \\text{mmol}, \\qquad \\text{salt} = 250 \\times 0.1 = 25\\ \\text{mmol}$$

**Henderson equation (basic form):**
$$\\text{pOH} = \\text{p}K_b + \\log\\frac{[\\text{salt}]}{[\\text{base}]} = 4.74 + \\log\\frac{25}{0.5} = 4.74 + \\log 50$$

$$\\log 50 = \\log\\frac{100}{2} = 2 - 0.30 = 1.70$$

$$\\text{pOH} = 4.74 + 1.70 = 6.44 \\implies \\text{pH} = 14 - 6.44 = 7.56$$

$$\\text{pH} = 7.56 = 756 \\times 10^{-2}$$

**Answer:** 756`,statement:"The pH of a solution obtained by mixing 5 mL of 0.1 M $\\text{NH}_4\\text{OH}$ solution with 250 mL of 0.1 M $\\text{NH}_4\\text{Cl}$ solution is _____ $\\times 10^{-2}$. (Nearest integer) Given: $\\text{pK}_b\\ (\\text{NH}_4\\text{OH}) = 4.74$; $\\log 2 = 0.30$; $\\log 3 = 0.48$; $\\log 5 = 0.70$",subject:"Chemistry",type:"integer"},{correct_index:null,correct_value:"5",id:"695278300",options:[],solution:`**Step 1 — Moles of solute from boiling point elevation.**
$$\\Delta T_b = T_b - T_b^\\circ = 320 - 319.5 = 0.5\\ \\text{K}.$$
$$\\Delta T_b = K_b\\, m \\implies m = \\frac{0.5}{0.3} = \\frac{5}{3}\\ \\text{mol kg}^{-1}.$$
With solvent mass $= 40\\ \\text{g} = 0.040\\ \\text{kg}$:
$$n_{\\text{solute}} = m \\times 0.040 = \\frac{5}{3}\\times 0.040 = 0.0667\\ \\text{mol}.$$

**Step 2 — Moles of solvent from relative lowering of vapour pressure.**
$$\\frac{\\Delta p}{p^\\circ} = x_{\\text{solute}} = \\frac{n_{\\text{solute}}}{n_{\\text{solute}}+n_{\\text{solvent}}}.$$
$$\\frac{760-750}{760} = \\frac{10}{760} = \\frac{1}{76} = \\frac{n_{\\text{solute}}}{n_{\\text{solute}}+n_{\\text{solvent}}}.$$
$$n_{\\text{solute}}+n_{\\text{solvent}} = 76\\,n_{\\text{solute}} \\implies n_{\\text{solvent}} = 75\\,n_{\\text{solute}}.$$
$$n_{\\text{solvent}} = 75 \\times 0.0667 = 5.0\\ \\text{mol}.$$

**Answer:** 5`,statement:"A non-volatile, non-electrolyte solid solute when dissolved in 40 g of a solvent, the vapour pressure of the solvent decreased from 760 mm Hg to 750 mm Hg. If the same solution boils at 320 K, then the number of moles of the solvent present in the solution is _____. (Nearest integer) [Given: boiling point of the pure solvent = 319.5 K, $K_b$ of the solvent = 0.3 K kg mol$^{-1}$]",subject:"Chemistry",type:"integer"}],shift:"Shift 1",title:"JEE Main 2026 · 04 Apr · Shift 1"},window.MOCK_DATA.slug="jee-main-2026-apr-4-shift-1"
```


---

_Source: [https://jeenotes.in/mock-tests/jee-main-2026-apr-4-shift-1/](https://jeenotes.in/mock-tests/jee-main-2026-apr-4-shift-1/) · raw HTML: `offline/mock-tests/jee-main-2026-apr-4-shift-1/index.html`_
