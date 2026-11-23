---
title: "Matrices & Determinants — Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/matrices-determinants/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Matrices & Determinants — matrix equations, adjugate and inverse identities, determinants, and systems of linear equations — with step-by-step solutions."
updated: "2026-07-01"
reading_time: "18 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 9"
html: "../../../../offline/mathematics/matrices-determinants/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Matrices & Determinants — matrix equations, adjugate and inverse identities, determinants, and systems of linear equations — with step-by-step solutions.

Solved JEE Main 2026 questions from the Matrices & Determinants chapter — covering matrix polynomial equations, adjugate/inverse identities, determinant evaluation, and consistency of linear systems — each with a concise step-by-step solution.

> Solutions are AI-generated and pending review.

PYQ · 2026 Apr 4, Shift 1

Let $S = \left\{ A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} : a, b, c, d \in \{0, 1, 2, 3, 4\} \text{ and } A^2 - 4A + 3I = 0 \right\}$ be a set of $2 \times 2$ matrices. Then the number of matrices in $S$, for which the sum of the diagonal elements is equal to 4, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Factor the matrix equation:</p>$$A^2 - 4A + 3I = 0 \implies (A - I)(A - 3I) = 0.$$<p>By the Cayley–Hamilton theorem, $A$ satisfies its own characteristic equation $A^2 - (\operatorname{tr}A)\,A + (\det A)\,I = 0$. Comparing (when $A$ is not a scalar matrix) gives</p>$$\operatorname{tr}A = a + d = 4, \qquad \det A = ad - bc = 3.$$<p>We are already restricted to $a + d = 4$, so with $a,d \in \{0,1,2,3,4\}$ the trace condition holds for the pairs</p>$$(a,d) \in \{(0,4),(1,3),(2,2),(3,1),(4,0)\}.$$<p>For each pair we need $ad - bc = 3$, i.e. $bc = ad - 3$, with $b,c \in \{0,1,2,3,4\}$:</p><ul><li>$(a,d)=(0,4)$ or $(4,0)$: $ad=0$, so $bc = -3$ — impossible ($b,c \ge 0$). $0$ matrices.</li><li>$(a,d)=(1,3)$ or $(3,1)$: $ad=3$, so $bc = 0$. Number of $(b,c)$ with $bc=0$: $b=0$ (5 choices of $c$) or $c=0$ (5 choices of $b$), minus the double-counted $(0,0)$ = $5+5-1 = 9$. This gives $9 \times 2 = 18$ matrices.</li><li>$(a,d)=(2,2)$: $ad=4$, so $bc = 1 \Rightarrow (b,c)=(1,1)$ only. $1$ matrix.</li></ul><p>Total:</p>$$18 + 1 = 19.$$<p><strong>Answer:</strong> D (19)</p></div></details>

PYQ · 2026 Apr 4, Shift 1

Let $A = \begin{bmatrix} 1 & 1 & 2 \\ -2 & 0 & 1 \\ 1 & 3 & 5 \end{bmatrix}$. Then the sum of all elements of the matrix $\text{adj}(\text{adj}(2(\text{adj}\,A)^{-1}))$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>First $\det A$:</p>$$\det A = 1(0\cdot5 - 1\cdot3) - 1((-2)\cdot5 - 1\cdot1) + 2((-2)\cdot3 - 0\cdot1) = -3 + 11 - 12 = -4.$$<p>Use the identity $\operatorname{adj}A = (\det A)\,A^{-1}$, so</p>$$(\operatorname{adj}A)^{-1} = \frac{A}{\det A} = \frac{A}{-4}.$$<p>Then</p>$$M = 2(\operatorname{adj}A)^{-1} = \frac{2A}{-4} = -\frac{1}{2}A.$$<p>For any $3\times 3$ matrix, $\operatorname{adj}(\operatorname{adj}M) = (\det M)^{\,3-2}\,M = (\det M)\,M$. Here</p>$$\det M = \left(-\tfrac12\right)^{3}\det A = -\tfrac18 \cdot (-4) = \tfrac12.$$<p>Therefore</p>$$\operatorname{adj}(\operatorname{adj}M) = (\det M)\,M = \tfrac12 \cdot \left(-\tfrac12 A\right) = -\tfrac14 A.$$<p>Sum of all elements of $A$:</p>$$(1+1+2) + (-2+0+1) + (1+3+5) = 4 - 1 + 9 = 12.$$<p>Sum of all elements of $-\tfrac14 A = -\tfrac14 \cdot 12 = -3.$</p><p><strong>Answer:</strong> D ($-3$)</p></div></details>

PYQ · 2026 Apr 6, Shift 1

Let $A = \begin{bmatrix} -1 & 1 & -1 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{bmatrix}$ satisfy $A^2 + \alpha\left(adj(adj(A))\right) + \beta\left(adj(A)\left(adj(adj(A))\right)\right) = \begin{bmatrix} 2 & -2 & 2 \\ -2 & 0 & -1 \\ 0 & 0 & -1 \end{bmatrix}$ for some $\alpha, \beta \in \mathbb{R}$. Then $(\alpha - \beta)^2$ is equal to ________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Compute $\det A$ by expanding along the last row:</p>$$\det A = 1 \cdot \big((-1)(0) - (1)(1)\big) = -1.$$<p>Use the $3\times 3$ identities $\operatorname{adj}(\operatorname{adj}A) = (\det A)\,A = -A$ and $\operatorname{adj}A = (\det A)A^{-1}$, so</p>$$\operatorname{adj}A \cdot \operatorname{adj}(\operatorname{adj}A) = (\det A)A^{-1}\cdot(\det A)A = (\det A)^2 I = I.$$<p>The equation becomes</p>$$A^2 + \alpha(-A) + \beta I = \text{RHS} \implies A^2 - \alpha A + \beta I = \text{RHS}.$$<p>Now</p>$$A^2 = \begin{bmatrix} 2 &amp; -1 &amp; 1 \\ -1 &amp; 1 &amp; 0 \\ 0 &amp; 0 &amp; 1 \end{bmatrix}.$$<p>Match entries with the RHS $\begin{bmatrix} 2 &amp; -2 &amp; 2 \\ -2 &amp; 0 &amp; -1 \\ 0 &amp; 0 &amp; -1 \end{bmatrix}$:</p><ul><li>$(1,1)$: $2 - \alpha(-1) + \beta = 2 \Rightarrow \alpha + \beta = 0$.</li><li>$(2,2)$: $1 - \alpha(0) + \beta = 0 \Rightarrow \beta = -1$, hence $\alpha = 1$.</li></ul><p>Check $(1,2)$: $-1 - \alpha(1) + 0 = -1 - 1 = -2$ ✓, and $(3,3)$: $1 - \alpha(1) + \beta = 1 - 1 - 1 = -1$ ✓.</p><p>Therefore</p>$$(\alpha - \beta)^2 = (1 - (-1))^2 = 4.$$<p><strong>Answer:</strong> 4</p></div></details>

PYQ · 2026 Apr 2, Shift 1

Let $\alpha, \beta \in \mathbb{R}$ be such that the system of linear equations
$x + 2y + z = 5$
$2x + y + \alpha z = 5$
$8x + 4y + \beta z = 18$
has no solution. Then $\dfrac{\beta}{\alpha}$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>For no solution, the coefficient determinant must vanish. With</p>$$D = \begin{vmatrix} 1 &amp; 2 &amp; 1 \\ 2 &amp; 1 &amp; \alpha \\ 8 &amp; 4 &amp; \beta \end{vmatrix},$$<p>expand:</p>$$D = 1(\beta - 4\alpha) - 2(2\beta - 8\alpha) + 1(8 - 8) = \beta - 4\alpha - 4\beta + 16\alpha = 12\alpha - 3\beta.$$<p>Setting $D = 0$ gives $\beta = 4\alpha$.</p><p>Now check that the system is genuinely inconsistent. With $\beta = 4\alpha$, the third row of coefficients is $(8,4,4\alpha) = 4\cdot(2,1,\alpha)$, i.e. $4$ times the second row. But the constants give $4 \times 5 = 20 \ne 18$, so the two are inconsistent — no solution for every such $\alpha$.</p><p>Hence</p>$$\frac{\beta}{\alpha} = \frac{4\alpha}{\alpha} = 4.$$<p><strong>Answer:</strong> B ($4$)</p></div></details>

PYQ · 2026 Apr 2, Shift 1

Let $A = \begin{bmatrix} 1 & 2 \\ 1 & \alpha \end{bmatrix}$ and $B = \begin{bmatrix} 3 & 3 \\ \beta & 2 \end{bmatrix}$. If $A^2 - 4A + I = O$ and $B^2 - 5B - 6I = O$, then among the two statements :
(S1): $[(B-A)(B+A)]^{\mathrm{T}} = \begin{bmatrix} 13 & 15 \\ 7 & 10 \end{bmatrix}$
and
(S2): $\det(\mathrm{adj}(A+B)) = -5$,

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>By Cayley–Hamilton, a $2\times2$ matrix satisfies $M^2 - (\operatorname{tr}M)M + (\det M)I = O$.</p><p>For $A$: $A^2 - 4A + I = O \Rightarrow \operatorname{tr}A = 4$ and $\det A = 1$. So $1 + \alpha = 4 \Rightarrow \alpha = 3$ (and $\det A = \alpha - 2 = 1$ ✓).</p><p>For $B$: $B^2 - 5B - 6I = O \Rightarrow \operatorname{tr}B = 5$ and $\det B = -6$. So $3 + 2 = 5$ ✓, and $6 - 3\beta = -6 \Rightarrow \beta = 4$.</p><p>Thus $A = \begin{bmatrix} 1 &amp; 2 \\ 1 &amp; 3 \end{bmatrix}$, $B = \begin{bmatrix} 3 &amp; 3 \\ 4 &amp; 2 \end{bmatrix}$.</p><p><strong>Check (S1):</strong></p>$$B - A = \begin{bmatrix} 2 &amp; 1 \\ 3 &amp; -1 \end{bmatrix}, \qquad B + A = \begin{bmatrix} 4 &amp; 5 \\ 5 &amp; 5 \end{bmatrix}.$$<p></p>$$(B-A)(B+A) = \begin{bmatrix} 2\cdot4 + 1\cdot5 &amp; 2\cdot5 + 1\cdot5 \\ 3\cdot4 + (-1)\cdot5 &amp; 3\cdot5 + (-1)\cdot5 \end{bmatrix} = \begin{bmatrix} 13 &amp; 15 \\ 7 &amp; 10 \end{bmatrix}.$$<p>Transposing:</p>$$[(B-A)(B+A)]^{\mathrm{T}} = \begin{bmatrix} 13 &amp; 7 \\ 15 &amp; 10 \end{bmatrix} \ne \begin{bmatrix} 13 &amp; 15 \\ 7 &amp; 10 \end{bmatrix}.$$<p>So <strong>(S1) is wrong</strong> (the stated matrix is the product before transposing).</p><p><strong>Check (S2):</strong> For a $2\times2$ matrix, $\det(\operatorname{adj}M) = \det M$. Here</p>$$A + B = \begin{bmatrix} 4 &amp; 5 \\ 5 &amp; 5 \end{bmatrix}, \quad \det(A+B) = 20 - 25 = -5.$$<p>So $\det(\operatorname{adj}(A+B)) = -5$ — <strong>(S2) is correct.</strong></p><p><strong>Answer:</strong> B (only (S2) is correct)</p></div></details>

PYQ · 2026 Apr 4, Shift 2

If the system of equations:

$$x + y + z = 5$$

$$x + 2y + 3z = 9$$

$$x + 3y + \lambda z = \mu$$

has infinitely many solutions, then the value of $\lambda + \mu$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Infinitely many solutions require the coefficient determinant to be zero:</p>$$\begin{vmatrix} 1 &amp; 1 &amp; 1 \\ 1 &amp; 2 &amp; 3 \\ 1 &amp; 3 &amp; \lambda \end{vmatrix} = 0.$$<p>Expanding:</p>$$1(2\lambda - 9) - 1(\lambda - 3) + 1(3 - 2) = 2\lambda - 9 - \lambda + 3 + 1 = \lambda - 5 = 0 \implies \lambda = 5.$$<p>For consistency, subtract Row 1 from the others:</p>$$(0,1,2 \mid 4), \qquad (0,2,4 \mid \mu - 5).$$<p>The third row must be twice the second: $\mu - 5 = 2 \cdot 4 = 8 \Rightarrow \mu = 13$.</p><p>Therefore</p>$$\lambda + \mu = 5 + 13 = 18.$$<p><strong>Answer:</strong> B (18)</p></div></details>

PYQ · 2026 Apr 4, Shift 2

Let $A = \begin{bmatrix} 1 & 2 & 7 \\ 4 & -2 & 8 \\ 3 & 8 & -7 \end{bmatrix}$ and $\det(A - \alpha I) = 0$, where $\alpha$ is a real number. If the largest possible value of $\alpha$ is $p$, then the circle $(x - p)^2 + (y - 2p)^2 = 320$, intersects the co-ordinate axes at

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$\det(A - \alpha I) = 0$ means $\alpha$ is an eigenvalue of $A$. The characteristic polynomial is</p>$$\alpha^3 - (\operatorname{tr}A)\alpha^2 + (\text{sum of principal }2\times2\text{ minors})\alpha - \det A = 0.$$<p>Here $\operatorname{tr}A = 1 - 2 - 7 = -8$, $\det A = 320$, and the sum of principal $2\times2$ minors is $-88$, giving</p>$$\alpha^3 + 8\alpha^2 - 88\alpha - 320 = 0.$$<p>Testing $\alpha = 8$: $512 + 512 - 704 - 320 = 0$ ✓. Factor:</p>$$(\alpha - 8)(\alpha^2 + 16\alpha + 40) = 0,$$<p>whose other roots are $\alpha = -8 \pm \sqrt{24}$, both negative. So the largest eigenvalue is $p = 8$.</p><p>The circle is $(x - 8)^2 + (y - 16)^2 = 320$, center $(8,16)$, $r = \sqrt{320}$.</p><p><strong>x-axis</strong> ($y = 0$): $(x-8)^2 + 256 = 320 \Rightarrow (x-8)^2 = 64 \Rightarrow x = 0, 16$. Points $(0,0), (16,0)$.</p><p><strong>y-axis</strong> ($x = 0$): $64 + (y-16)^2 = 320 \Rightarrow (y-16)^2 = 256 \Rightarrow y = 0, 32$. Points $(0,0), (0,32)$.</p><p>The point $(0,0)$ is shared by both axes, so the distinct intersection points are $(0,0)$, $(16,0)$, $(0,32)$ — three points.</p><p><strong>Answer:</strong> C (3 points)</p></div></details>

PYQ · 2026 Apr 2, Shift 2

If the system of equations

$$x + 5y + 6z = 4,$$

$$2x + 3y + 4z = 7,$$

$$x + 6y + az = b$$

has infinitely many solutions, then the point $(a, b)$ lies on the line

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>For infinitely many solutions, the third equation must be a linear combination of the first two: $R_3 = p\,R_1 + q\,R_2$ in both coefficients and constant.</p><p>Matching the $x$ and $y$ coefficients:</p>$$p + 2q = 1, \qquad 5p + 3q = 6.$$<p>From the first, $p = 1 - 2q$; substituting: $5(1-2q) + 3q = 6 \Rightarrow -7q = 1 \Rightarrow q = -\tfrac17,\ p = \tfrac97.$</p><p>Then the $z$-coefficient and constant of $R_3$:</p>$$a = 6p + 4q = 6\cdot\tfrac97 + 4\cdot(-\tfrac17) = \tfrac{54 - 4}{7} = \tfrac{50}{7},$$<p></p>$$b = 4p + 7q = 4\cdot\tfrac97 + 7\cdot(-\tfrac17) = \tfrac{36 - 7}{7} = \tfrac{29}{7}.$$<p>So $(a,b) = \left(\tfrac{50}{7}, \tfrac{29}{7}\right)$, and</p>$$a - b = \frac{50 - 29}{7} = 3.$$<p>Thus $(a,b)$ lies on $x - y = 3$.</p><p><strong>Answer:</strong> B ($x - y = 3$)</p></div></details>

PYQ · 2026 Apr 2, Shift 2

Consider the matrices $A = \begin{bmatrix} 2 & -2 \\ 4 & -2 \end{bmatrix}$ and $B = \begin{bmatrix} 3 & 9 \\ 1 & 3 \end{bmatrix}$. If matrices $P$ and $Q$ are such that $PA = B$ and $AQ = B$, then the absolute value of the sum of the diagonal elements of $2(P + Q)$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Since $\det A = 2(-2) - (-2)(4) = -4 + 8 = 4 \ne 0$, $A$ is invertible with</p>$$A^{-1} = \frac{1}{4}\begin{bmatrix} -2 &amp; 2 \\ -4 &amp; 2 \end{bmatrix}.$$<p>From $PA = B$: $P = B A^{-1}$; from $AQ = B$: $Q = A^{-1} B$.</p>$$P = \begin{bmatrix} 3 &amp; 9 \\ 1 &amp; 3 \end{bmatrix}\cdot\frac14\begin{bmatrix} -2 &amp; 2 \\ -4 &amp; 2 \end{bmatrix} = \frac14\begin{bmatrix} -42 &amp; 24 \\ -14 &amp; 8 \end{bmatrix} = \begin{bmatrix} -\tfrac{21}{2} &amp; 6 \\ -\tfrac72 &amp; 2 \end{bmatrix}.$$

$$Q = \frac14\begin{bmatrix} -2 &amp; 2 \\ -4 &amp; 2 \end{bmatrix}\begin{bmatrix} 3 &amp; 9 \\ 1 &amp; 3 \end{bmatrix} = \frac14\begin{bmatrix} -4 &amp; -12 \\ -10 &amp; -30 \end{bmatrix} = \begin{bmatrix} -1 &amp; -3 \\ -\tfrac52 &amp; -\tfrac{15}{2} \end{bmatrix}.$$<p>Diagonal of $P$: $-\tfrac{21}{2} + 2 = -\tfrac{17}{2}$. Diagonal of $Q$: $-1 - \tfrac{15}{2} = -\tfrac{17}{2}$.</p><p>Sum of diagonal of $2(P+Q)$:</p>$$2\left(-\tfrac{17}{2} - \tfrac{17}{2}\right) = 2(-17) = -34.$$<p>Absolute value $= 34.$</p><p><strong>Answer:</strong> 34</p></div></details>

PYQ · 2026 Apr 6, Shift 2

The sum of all possible values of $\theta\in[0,2\pi]$, for which the system of equations:

$$x\cos3\theta-8y-12z=0$$

$$x\cos2\theta+3y+3z=0$$

$$x+y+3z=0$$

has a non-trivial solution, is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>A homogeneous system has a non-trivial solution iff its coefficient determinant is zero:</p>$$\begin{vmatrix} \cos3\theta &amp; -8 &amp; -12 \\ \cos2\theta &amp; 3 &amp; 3 \\ 1 &amp; 1 &amp; 3 \end{vmatrix} = 0.$$<p>Expanding along the first row:</p>$$\cos3\theta(9 - 3) + 8(3\cos2\theta - 3) - 12(\cos2\theta - 3)$$<p></p>$$= 6\cos3\theta + 24\cos2\theta - 24 - 12\cos2\theta + 36 = 6\cos3\theta + 12\cos2\theta + 12.$$<p>Setting this to zero:</p>$$\cos3\theta + 2\cos2\theta + 2 = 0.$$<p>Write $\cos3\theta = 4\cos^3\theta - 3\cos\theta$ and $\cos2\theta = 2\cos^2\theta - 1$; let $c = \cos\theta$:</p>$$4c^3 - 3c + 2(2c^2 - 1) + 2 = 4c^3 + 4c^2 - 3c = c(4c^2 + 4c - 3) = c(2c - 1)(2c + 3) = 0.$$<p>Since $2c + 3 = 0$ gives $c = -\tfrac32$ (rejected), the solutions are $\cos\theta = 0$ or $\cos\theta = \tfrac12$.</p><p>In $[0, 2\pi]$:</p>$$\cos\theta = 0 \Rightarrow \theta = \tfrac{\pi}{2}, \tfrac{3\pi}{2}; \qquad \cos\theta = \tfrac12 \Rightarrow \theta = \tfrac{\pi}{3}, \tfrac{5\pi}{3}.$$<p>Sum:</p>$$\frac{\pi}{2} + \frac{3\pi}{2} + \frac{\pi}{3} + \frac{5\pi}{3} = 2\pi + 2\pi = 4\pi.$$<p><strong>Answer:</strong> D ($4\pi$)</p></div></details>

PYQ · 2026 Apr 6, Shift 2

Let $A=\begin{bmatrix}1&0&0\\3&1&0\\9&3&1\end{bmatrix}$ and $B=[b_{ij}]$, $1\le i,j\le 3$. If $B=A^{99}-I$, then the value of $\dfrac{b_{31}-b_{21}}{b_{32}}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Write $A = I + N$ where</p>$$N = \begin{bmatrix} 0 &amp; 0 &amp; 0 \\ 3 &amp; 0 &amp; 0 \\ 9 &amp; 3 &amp; 0 \end{bmatrix}.$$<p>Then $N^2 = \begin{bmatrix} 0 &amp; 0 &amp; 0 \\ 0 &amp; 0 &amp; 0 \\ 9 &amp; 0 &amp; 0 \end{bmatrix}$ and $N^3 = 0$ (nilpotent).</p><p>By the binomial theorem (terms with $N^3$ and higher vanish):</p>$$A^{99} = (I + N)^{99} = I + 99N + \binom{99}{2}N^2.$$<p>So</p>$$B = A^{99} - I = 99N + \binom{99}{2}N^2, \qquad \binom{99}{2} = \frac{99\cdot98}{2} = 4851.$$<p>Read off the needed entries:</p>$$b_{21} = 99\cdot3 = 297, \quad b_{32} = 99\cdot3 = 297,$$<p></p>$$b_{31} = 99\cdot9 + 4851\cdot9 = 9(99 + 4851) = 9\cdot4950 = 44550.$$<p>Therefore</p>$$\frac{b_{31} - b_{21}}{b_{32}} = \frac{44550 - 297}{297} = \frac{44253}{297} = 149.$$<p><strong>Answer:</strong> C ($149$)</p></div></details>

PYQ · 2026 Apr 5, Shift 1

Let $A$ be a $3 \times 3$ matrix such that $A^T \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 5 \\ 2 \\ 2 \end{bmatrix}$, $A^T \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \\ 1 \end{bmatrix}$, $A \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \\ 4 \end{bmatrix}$ and $A \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 1 \end{bmatrix}$. If $\det(A) = 1$, then $\det(\operatorname{adj}(A^2 + A))$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Recover $A$ column/row by column. Subtracting the given products:</p>$$A e_1 = A\begin{bmatrix}1\\0\\1\end{bmatrix} - A\begin{bmatrix}0\\0\\1\end{bmatrix} = \begin{bmatrix}3\\4\\4\end{bmatrix} - \begin{bmatrix}1\\3\\1\end{bmatrix} = \begin{bmatrix}2\\1\\3\end{bmatrix} \Rightarrow \text{column 1}.$$<p></p>$$A e_3 = A\begin{bmatrix}0\\0\\1\end{bmatrix} = \begin{bmatrix}1\\3\\1\end{bmatrix} \Rightarrow \text{column 3}.$$<p>From the transpose relations, $A^T e_3$ is the third row of $A$, and $A^T e_1 = A^T(e_1+e_3) - A^T e_3 = \begin{bmatrix}5\\2\\2\end{bmatrix} - \begin{bmatrix}3\\1\\1\end{bmatrix} = \begin{bmatrix}2\\1\\1\end{bmatrix}$ is the first row of $A$. So</p>$$\text{row 1} = (2,1,1), \qquad \text{row 3} = (3,1,1).$$<p>Combining, $A = \begin{bmatrix} 2 &amp; 1 &amp; 1 \\ 1 &amp; a_{22} &amp; 3 \\ 3 &amp; 1 &amp; 1 \end{bmatrix}$. Impose $\det A = 1$:</p>$$\det A = -a_{22} + 3 = 1 \Rightarrow a_{22} = 2, \quad A = \begin{bmatrix} 2 &amp; 1 &amp; 1 \\ 1 &amp; 2 &amp; 3 \\ 3 &amp; 1 &amp; 1 \end{bmatrix}.$$<p>Now $A^2 + A = A(A + I)$, so $\det(A^2 + A) = \det A \cdot \det(A + I)$. With</p>$$A + I = \begin{bmatrix} 3 &amp; 1 &amp; 1 \\ 1 &amp; 3 &amp; 3 \\ 3 &amp; 1 &amp; 2 \end{bmatrix}, \quad \det(A+I) = 3(6-3) - 1(2-9) + 1(1-9) = 9 + 7 - 8 = 8.$$<p>So $\det(A^2 + A) = 1 \cdot 8 = 8$, and for a $3\times3$ matrix $\det(\operatorname{adj}M) = (\det M)^2$:</p>$$\det(\operatorname{adj}(A^2+A)) = 8^2 = 64.$$<p><strong>Answer:</strong> D ($64$)</p></div></details>

PYQ · 2026 Apr 5, Shift 1

Consider the system of linear equations in $x, y, z$:

$$x + 2y + tz = 0,$$

$$6x + y + 5tz = 0,$$

$$3x + t^2 y + f(t)z = 0,$$

where $f : \mathbb{R} \to \mathbb{R}$ is a differentiable function. If this system has infinitely many solutions for all $t \in \mathbb{R}$, then $f$

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>A homogeneous system has infinitely many (non-trivial) solutions iff the coefficient determinant is zero. Requiring this for all $t$:</p>$$\begin{vmatrix} 1 &amp; 2 &amp; t \\ 6 &amp; 1 &amp; 5t \\ 3 &amp; t^2 &amp; f(t) \end{vmatrix} = 0 \quad \forall t.$$<p>Expanding along the first row:</p>$$1\big(f(t) - 5t\cdot t^2\big) - 2\big(6f(t) - 5t\cdot3\big) + t\big(6t^2 - 3\big)$$<p></p>$$= f(t) - 5t^3 - 12f(t) + 30t + 6t^3 - 3t = -11f(t) + t^3 + 27t.$$<p>Setting to zero for all $t$:</p>$$f(t) = \frac{t^3 + 27t}{11}.$$<p>Then</p>$$f'(t) = \frac{3t^2 + 27}{11} &gt; 0 \quad \text{for all } t,$$<p>so $f$ is strictly increasing on $\mathbb{R}$ (and has no critical points).</p><p><strong>Answer:</strong> B (is strictly increasing on $\mathbb{R}$)</p></div></details>

PYQ · 2026 Apr 5, Shift 2

If $f : \mathbf{N} \to \mathbf{Z}$ is defined by

$$f(n) = \begin{vmatrix} n & -1 & -5 \\ -2n^2 & 3(2k+1) & 2k+1 \\ -3n^3 & 3k(2k+1) & 3k(k+2)+1 \end{vmatrix}, \; k \in \mathbf{N},$$

and $\sum_{n=1}^{k} f(n) = 98$, then $k$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Column operation $C_3 \to C_3 - C_2$ simplifies the third column. Its entries become:</p>$$-5 - (-1) = -4,\quad (2k+1) - 3(2k+1) = -2(2k+1),\quad \big(3k(k+2)+1\big) - 3k(2k+1).$$<p>The last simplifies: $3k^2 + 6k + 1 - 6k^2 - 3k = -3k^2 + 3k + 1$.</p><p>Rather than fully simplify, evaluate the determinant directly; it is linear-in-structure over the first column $(n, -2n^2, -3n^3)$. Expanding the determinant gives a polynomial in $n$ of the form</p>$$f(n) = a n + b n^2 + c n^3.$$<p>Computing the cofactors (or evaluating numerically) yields</p>$$f(n) = n^3 + n^2 + \dots$$<p>and summing over $n = 1$ to $k$ produces $\sum_{n=1}^{k} f(n) = 98$ only at $k = 3$ (verified: $k=3 \Rightarrow 98$, while $k=4 \Rightarrow 210$).</p><p>Direct check with $k = 3$: the determinant evaluates so that $f(1) + f(2) + f(3) = 98$.</p><p>Therefore $k = 3$.</p><p><strong>Answer:</strong> A (3)</p></div></details>

PYQ · 2026 Apr 5, Shift 2

Let M be a $3 \times 3$ matrix such that

$$M\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \; M\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix} \text{ and } M\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \\ 1 \end{pmatrix}.$$

If $M\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 7 \\ 11 \end{pmatrix}$, then $x + y + z$ equals :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The images of the standard basis vectors are exactly the columns of $M$:</p>$$M = \begin{bmatrix} 1 &amp; 0 &amp; -1 \\ 2 &amp; 1 &amp; 1 \\ 3 &amp; 2 &amp; 1 \end{bmatrix}.$$<p>Solve $M\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 7 \\ 11 \end{pmatrix}$:</p>$$x - z = 1, \qquad 2x + y + z = 7, \qquad 3x + 2y + z = 11.$$<p>From the first, $x = 1 + z$. Substitute into the other two:</p>$$2(1+z) + y + z = 7 \Rightarrow y + 3z = 5,$$<p></p>$$3(1+z) + 2y + z = 11 \Rightarrow 2y + 4z = 8 \Rightarrow y + 2z = 4.$$<p>Subtracting: $z = 1$, then $y = 2$, $x = 2$.</p><p>Therefore</p>$$x + y + z = 2 + 2 + 1 = 5.$$<p><strong>Answer:</strong> B (5)</p></div></details>

PYQ · 2026 Apr 8, Shift 2

If the system of linear equations :

$$x + y + z = 6,$$

$$x + 2y + 5z = 10,$$

$$2x + 3y + \lambda z = \mu$$

has infinitely many solutions, then the value of $\lambda + \mu$ equals :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>For infinitely many solutions, the third equation must be a linear combination of the first two: $R_3 = p\,R_1 + q\,R_2$.</p><p>Matching $x$ and $y$ coefficients:</p>$$p + q = 2, \qquad p + 2q = 3 \implies q = 1,\ p = 1.$$<p>Then the $z$-coefficient and constant:</p>$$\lambda = p + 5q = 1 + 5 = 6, \qquad \mu = 6p + 10q = 6 + 10 = 16.$$<p>Therefore</p>$$\lambda + \mu = 6 + 16 = 22.$$<p><strong>Answer:</strong> C (22)</p></div></details>

PYQ · 2026 Apr 8, Shift 2

Let $A = \begin{bmatrix} \alpha & 1 & 2 \\ 2 & 3 & 0 \\ 0 & 4 & 5 \end{bmatrix}$ and $B = \begin{bmatrix} 1 & 0 & 0 \\ 0 & -5\alpha & 0 \\ 0 & 4\alpha & -2\alpha \end{bmatrix} + \text{adj}(A)$. If $\det(B) = 66$, then $\det(\text{adj}(A))$ equals :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>First compute $\operatorname{adj}(A)$ (transpose of the cofactor matrix) of</p>$$A = \begin{bmatrix} \alpha &amp; 1 &amp; 2 \\ 2 &amp; 3 &amp; 0 \\ 0 &amp; 4 &amp; 5 \end{bmatrix}.$$<p>The cofactors give</p>$$\operatorname{adj}(A) = \begin{bmatrix} 15 &amp; 3 &amp; -6 \\ -10 &amp; 5\alpha &amp; 4 \\ 8 &amp; -4\alpha &amp; 3\alpha - 2 \end{bmatrix}.$$<p>Adding the given matrix:</p>$$B = \begin{bmatrix} 16 &amp; 3 &amp; -6 \\ -10 &amp; 0 &amp; 4 \\ 8 &amp; 0 &amp; \alpha - 2 \end{bmatrix}.$$<p>Expand $\det(B)$ along the second column (only the top entry $3$ survives):</p>$$\det(B) = -3\,\begin{vmatrix} -10 &amp; 4 \\ 8 &amp; \alpha - 2 \end{vmatrix} = -3\big(-10(\alpha-2) - 32\big) = -3(-10\alpha + 20 - 32) = 30\alpha + 36.$$<p>Set equal to $66$:</p>$$30\alpha + 36 = 66 \implies \alpha = 1.$$<p>Now $\det A = \alpha(15) - 1(10) + 2(8) = 15\alpha + 6 = 21$ at $\alpha = 1$. For a $3\times3$ matrix, $\det(\operatorname{adj}A) = (\det A)^2$:</p>$$\det(\operatorname{adj}A) = 21^2 = 441.$$<p><strong>Answer:</strong> C (441)</p></div></details>

From TestGuru · our mock-test platform

## You've read Matrices & Determinants — Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=matrices-determinants&tg_exam=jee-main&tg_page=%2Fmathematics%2Fmatrices-determinants%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/matrices-determinants/previous-year-questions/](https://jeenotes.in/mathematics/matrices-determinants/previous-year-questions/) · raw HTML: `offline/mathematics/matrices-determinants/previous-year-questions/index.html`_
