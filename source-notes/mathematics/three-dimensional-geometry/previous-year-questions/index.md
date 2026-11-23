---
title: "Three-Dimensional Geometry Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/three-dimensional-geometry/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Three-Dimensional Geometry with concise, step-by-step solutions covering lines, shortest distance, image of a point, and foot of perpendicular."
updated: "2026-07-01"
reading_time: "10 min read"
breadcrumb: "Mathematics"
position: "/ Topic 9 of 10"
html: "../../../../offline/mathematics/three-dimensional-geometry/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Three-Dimensional Geometry with concise, step-by-step solutions covering lines, shortest distance, image of a point, and foot of perpendicular.

Solved JEE Main 2026 previous year questions from Three-Dimensional Geometry, each worked out step by step.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

A line with direction ratios $1, -1, 2$ intersects the lines $\frac{x}{2} = \frac{y}{3} = \frac{z + 1}{3}$ and $\frac{x + 1}{-1} = \frac{y - 2}{1} = \frac{z}{4}$ at the points $P$ and $Q$, respectively. If the length of the line segment $PQ$ is $\alpha$, then $225\alpha^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $P = (2s, 3s, 3s-1)$ on the first line and $Q = (-1-t, 2+t, 4t)$ on the second.</p><p>The vector $\vec{PQ} = Q - P$ must be parallel to $(1, -1, 2)$:</p>$$\vec{PQ} = (-1-t-2s,\ 2+t-3s,\ 4t-3s+1)$$<p>Setting $\vec{PQ} \parallel (1,-1,2)$ gives $s = \tfrac{1}{5},\ t = -\tfrac{8}{15}$.</p><p>Then $P = \left(\tfrac{2}{5}, \tfrac{3}{5}, -\tfrac{2}{5}\right)$ and $Q = \left(-\tfrac{7}{15}, \tfrac{22}{15}, -\tfrac{32}{15}\right)$.</p>$$\alpha^2 = |\vec{PQ}|^2 = \frac{338}{75} \implies 225\alpha^2 = 225 \cdot \frac{338}{75} = 3 \cdot 338 = 1014$$<p><strong>Answer:</strong> B (1014)</p></div></details>

PYQ · 2026 4 Apr, Shift 1

The square of the distance of the point $(-2, -8, 6)$ from the line $\frac{x - 1}{1} = \frac{y - 1}{2} = \frac{z}{-1}$ along the line $\frac{x + 5}{1} = \frac{y + 5}{-1} = \frac{z}{2}$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Move from $(-2,-8,6)$ along direction $(1,-1,2)$: the moving point is</p>$$X = (-2+r,\ -8-r,\ 6+2r)$$<p>This must meet the target line $(1+u,\ 1+2u,\ -u)$. Equating components:</p>$$-2+r = 1+u,\quad -8-r = 1+2u,\quad 6+2r = -u$$<p>Solving gives $r = -1,\ u = -4$, so the meeting point is $X = (-3, -7, 4)$.</p>$$\text{distance}^2 = (-3+2)^2 + (-7+8)^2 + (4-6)^2 = 1 + 1 + 4 = 6$$<p><strong>Answer:</strong> B (6)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

Let the image of the point $P(1, 6, a)$ in the line $L : \dfrac{x}{1} = \dfrac{y-1}{2} = \dfrac{z-a+1}{b}$, $b > 0$, be $\left(\dfrac{a}{3}, 0, a + c\right)$. If $S(\alpha, \beta, \gamma)$, $\alpha > 0$, is the point on $L$ such that the distance of $S$ from the foot of perpendicular from the point $P$ on $L$ is $2\sqrt{14}$, then $\alpha + \beta + \gamma$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The foot $M$ is the midpoint of $P$ and its image, and $M$ lies on $L$ with $\vec{PM}\perp(1,2,b)$. Writing $M$ on $L$ as $(0,1,a-1)+u(1,2,b)$ and imposing the perpendicularity and midpoint conditions gives two families; the constraint $b&gt;0$ selects</p>$$a = 3,\quad b = 3,\quad c = 4,\quad u = 1$$<p>So $L : (0,1,2) + u(1,2,3)$ with $|(1,2,3)| = \sqrt{14}$, and the foot is $M = (1,3,5)$.</p><p>For $S$ at distance $2\sqrt{14}$ from $M$: $|u_S - 1|\sqrt{14} = 2\sqrt{14} \implies u_S = 3$ or $u_S = -1$.</p>$$u_S = 3 \Rightarrow S = (3, 7, 11)\ (\alpha&gt;0);\qquad u_S = -1 \Rightarrow S = (-1,-1,-1)$$<p>Taking $\alpha &gt; 0$: $S = (3,7,11)$, so $\alpha + \beta + \gamma = 21$.</p><p><strong>Answer:</strong> C (21)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

Let a line $L$ be perpendicular to both the lines $L_1 : \dfrac{x+1}{3} = \dfrac{y+3}{5} = \dfrac{z+5}{7}$ and $L_2 : \dfrac{x-2}{1} = \dfrac{y-4}{4} = \dfrac{z-6}{7}$. If $\theta$ is the acute angle between the lines $L$ and $L_3 : \dfrac{x-\frac{8}{7}}{2} = \dfrac{y-\frac{4}{7}}{1} = \dfrac{z}{2}$, then $\tan\theta$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Direction of $L$ is $\vec{d_1}\times\vec{d_2}$ with $\vec{d_1}=(3,5,7)$, $\vec{d_2}=(1,4,7)$:</p>$$\vec{d} = (3,5,7)\times(1,4,7) = (7,\ -14,\ 7) \parallel (1,-2,1)$$<p>With $L_3$ direction $\vec{d_3} = (2,1,2)$:</p>$$\cos\theta = \frac{|(1)(2)+(-2)(1)+(1)(2)|}{\sqrt{6}\,\sqrt{9}} = \frac{2}{3\sqrt{6}}$$

$$\sin\theta = \sqrt{1 - \frac{4}{54}} = \sqrt{\frac{50}{54}} = \frac{5\sqrt{2}}{3\sqrt{6}}$$

$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{5\sqrt{2}}{2} = \frac{5}{2}\sqrt{2}$$<p><strong>Answer:</strong> B ($\frac{5}{2}\sqrt{2}$)</p></div></details>

PYQ · 2026 2 Apr, Shift 1

If the point of intersection of the lines $\dfrac{x+1}{3} = \dfrac{y+a}{5} = \dfrac{z+b+1}{7}$ and $\dfrac{x-2}{1} = \dfrac{y-b}{4} = \dfrac{z-2a}{7}$ lies on $xy$-plane, then the value of $a + b$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Point on line 1: $(-1+3s,\ -a+5s,\ -b-1+7s)$. Point on line 2: $(2+t,\ b+4t,\ 2a+7t)$.</p><p>The intersection lies on the $xy$-plane, so its $z$-coordinate is $0$: $-b-1+7s = 0$.</p><p>Equating all three coordinates plus this condition and solving:</p>$$a = 3,\quad b = 4,\quad s = \tfrac{5}{7},\quad t = -\tfrac{6}{7}$$

$$a + b = 3 + 4 = 7$$<p><strong>Answer:</strong> C (7)</p></div></details>

PYQ · 2026 2 Apr, Shift 1

Let a line $L$ passing through the point $(1, 1, 1)$ be perpendicular to both the vectors $2\hat{i} + 2\hat{j} + \hat{k}$ and $\hat{i} + 2\hat{j} + 2\hat{k}$. If $P(a, b, c)$ is the foot of perpendicular from the origin on the line $L$, then the value of $34(a + b + c)$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Direction of $L$ is $(2,2,1)\times(1,2,2) = (2,\ -3,\ 2)$.</p><p>So $L : (1,1,1) + u(2,-3,2)$. Foot of perpendicular from $O$ satisfies $\vec{OP}\cdot(2,-3,2)=0$:</p>$$(1+2u)(2) + (1-3u)(-3) + (1+2u)(2) = 0 \implies 1 + 17u = 0 \implies u = -\tfrac{1}{17}$$

$$P = \left(\tfrac{15}{17},\ \tfrac{20}{17},\ \tfrac{15}{17}\right) \implies a+b+c = \tfrac{50}{17}$$

$$34(a+b+c) = 34 \cdot \tfrac{50}{17} = 100$$<p><strong>Answer:</strong> C (100)</p></div></details>

PYQ · 2026 4 Apr, Shift 2

The shortest distance between the lines $\vec{r} = \left(\dfrac{1}{3}\hat{i} + 2\hat{j} + \dfrac{8}{3}\hat{k}\right) + \lambda\left(2\hat{i} - 5\hat{j} + 6\hat{k}\right)$ and $\vec{r} = \left(-\dfrac{2}{3}\hat{i} - \dfrac{1}{3}\hat{k}\right) + \mu\left(\hat{j} - \hat{k}\right)$, $\lambda, \mu \in \mathbb{R}$, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>With $\vec{d_1}=(2,-5,6)$, $\vec{d_2}=(0,1,-1)$:</p>$$\vec{n} = \vec{d_1}\times\vec{d_2} = (-1,\ 2,\ 2),\qquad |\vec{n}| = 3$$<p>Separation of base points: $\vec{a_2}-\vec{a_1} = \left(-1,\ -2,\ -3\right)$.</p>$$\text{SD} = \frac{|(\vec{a_2}-\vec{a_1})\cdot\vec{n}|}{|\vec{n}|} = \frac{|(-1)(-1)+(-2)(2)+(-3)(2)|}{3} = \frac{|1-4-6|}{3} = \frac{9}{3} = 3$$<p><strong>Answer:</strong> B (3)</p></div></details>

PYQ · 2026 4 Apr, Shift 2

If $\left(2\alpha + 1,\ \alpha^2 - 3\alpha,\ \dfrac{\alpha - 1}{2}\right)$ is the image of $(\alpha, 2\alpha, 1)$ in the line $\dfrac{x - 2}{3} = \dfrac{y - 1}{2} = \dfrac{z}{1}$, then the possible value(s) of $\alpha$ is (are):

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Two conditions must hold for a true image: the join is perpendicular to the line direction $(3,2,1)$, and the midpoint lies on the line.</p><p><strong>Perpendicularity:</strong> $(\text{image}-\text{point})\cdot(3,2,1)=0$ gives $\alpha = 3$ or $\alpha = \tfrac{1}{4}$.</p><p><strong>Midpoint on line:</strong> the midpoint must satisfy $\frac{x-2}{3}=\frac{y-1}{2}=\frac{z}{1}$. Testing:</p><ul><li>$\alpha = 3$: midpoint $(5,3,1)$ satisfies the line. ✓</li><li>$\alpha = \tfrac{1}{4}$: midpoint $\left(\tfrac{7}{8},-\tfrac{3}{32},\tfrac{5}{16}\right)$ does <strong>not</strong> lie on the line. ✗</li></ul><p>Only $\alpha = 3$ satisfies both conditions.</p><p><strong>Answer:</strong> A (Only 3)</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let the point $A$ be the foot of perpendicular drawn from the point $P(a, b, 0)$ on the line $\dfrac{x-1}{2} = \dfrac{y-2}{1} = \dfrac{z-\alpha}{3}$. If the midpoint of the line segment $PA$ is $\left(0, \dfrac{3}{4}, \dfrac{-1}{4}\right)$, then the value of $a^2 + b^2 + \alpha^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $A = (1+2t,\ 2+t,\ \alpha+3t)$ be the foot, with $\vec{PA}\perp(2,1,3)$.</p><p>Midpoint of $PA$ is $\left(0,\tfrac{3}{4},-\tfrac{1}{4}\right)$:</p>$$\frac{a+1+2t}{2}=0,\quad \frac{b+2+t}{2}=\frac34,\quad \frac{0+\alpha+3t}{2}=-\frac14$$<p>together with $(A-P)\cdot(2,1,3)=0$. Solving:</p>$$a = 0,\quad b = 0,\quad \alpha = 1,\quad t = -\tfrac{1}{2}$$

$$a^2 + b^2 + \alpha^2 = 0 + 0 + 1 = 1$$<p><strong>Answer:</strong> A (1)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

The shortest distance between the lines $\dfrac{x-4}{1}=\dfrac{y-3}{2}=\dfrac{z-2}{-3}$ and $\dfrac{x+2}{2}=\dfrac{y-6}{4}=\dfrac{z-5}{-5}$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>With $\vec{d_1}=(1,2,-3)$, $\vec{d_2}=(2,4,-5)$:</p>$$\vec{n} = \vec{d_1}\times\vec{d_2} = (2,\ -1,\ 0),\qquad |\vec{n}| = \sqrt{5}$$<p>Separation of base points: $\vec{a_2}-\vec{a_1} = (-6,\ 3,\ 3)$.</p>$$\text{SD} = \frac{|(-6)(2)+(3)(-1)+(3)(0)|}{\sqrt5} = \frac{|-15|}{\sqrt5} = \frac{15}{\sqrt5} = 3\sqrt{5}$$<p><strong>Answer:</strong> C ($3\sqrt{5}$)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let the image of the point $P(0,-5,0)$ in the line $\dfrac{x-1}{2}=\dfrac{y}{1}=\dfrac{z+1}{-2}$ be the point $R$ and the image of the point $Q\left(0,\dfrac{-1}{2},0\right)$ in the line $\dfrac{x-1}{-1}=\dfrac{y+9}{4}=\dfrac{z+1}{1}$ be the point $S$. Then the square of the area of the parallelogram $PQRS$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Image $R$ of $P(0,-5,0)$</strong> in line through $(1,0,-1)$, direction $(2,1,-2)$: the foot gives $R = 2F - P = (-2,\ 3,\ 2)$.</p><p><strong>Image $S$ of $Q\left(0,-\tfrac12,0\right)$</strong> in line through $(1,-9,-1)$, direction $(-1,4,1)$: $S = 2F - Q = \left(-2,\ -\tfrac{3}{2},\ 2\right)$.</p><p>Check $PQRS$ is a parallelogram: $\vec{Q}-\vec{P} = (0,\tfrac92,0) = \vec{R}-\vec{S}$. ✓</p><p>Area via diagonals $\vec{PR}$ and $\vec{QS}$:</p>$$\vec{PR} = (-2,\ 8,\ 2),\quad \vec{QS} = (-2,\ -1,\ 2)$$

$$\vec{PR}\times\vec{QS} = (18,\ 0,\ 18),\qquad \text{Area} = \tfrac12|{\vec{PR}\times\vec{QS}}| = \tfrac12\cdot 18\sqrt2 = 9\sqrt2$$

$$\text{Area}^2 = 162$$<p><strong>Answer:</strong> 162</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The square of the distance of the point $P(5, 6, 7)$ from the line $\frac{x-2}{2} = \frac{y-5}{3} = \frac{z-2}{4}$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Base point $A = (2,5,2)$, direction $\vec{d} = (2,3,4)$, $|\vec{d}|^2 = 29$.</p>$$\vec{AP} = (3,\ 1,\ 5),\qquad \vec{AP}\times\vec{d} = (-11,\ -2,\ 7)$$

$$\text{dist}^2 = \frac{|\vec{AP}\times\vec{d}|^2}{|\vec{d}|^2} = \frac{121+4+49}{29} = \frac{174}{29} = 6$$<p><strong>Answer:</strong> C (6)</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The square of the distance of the point of intersection of the lines $\vec{r} = (\hat{i} + \hat{j} - \hat{k}) + \lambda(a\hat{i} - \hat{j})$, $a \neq 0$ and $\vec{r} = (4\hat{i} - \hat{k}) + \mu(2\hat{i} + a\hat{k})$ from the origin is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Line 1: $(1+a\lambda,\ 1-\lambda,\ -1)$. Line 2: $(4+2\mu,\ 0,\ -1+a\mu)$.</p><p>Equating $y$: $1-\lambda = 0 \Rightarrow \lambda = 1$. Equating $z$: $-1 = -1+a\mu \Rightarrow a\mu = 0$, and since $a\neq0$, $\mu = 0$.</p><p>Equating $x$: $1+a = 4 \Rightarrow a = 3$ (consistent with $a\neq0$).</p><p>Intersection point: $(4,\ 0,\ -1)$.</p>$$\text{dist}^2 = 4^2 + 0^2 + (-1)^2 = 16 + 1 = 17$$<p><strong>Answer:</strong> C (17)</p></div></details>

PYQ · 2026 5 Apr, Shift 2

Let a triangle $PQR$ be such that $P$ and $Q$ lie on the line $\dfrac{x+3}{8} = \dfrac{y-4}{2} = \dfrac{z+1}{2}$ and are at a distance of 6 units from $R\,(1, 2, 3)$. If $(\alpha, \beta, \gamma)$ is the centroid of $\triangle PQR$, then $\alpha + \beta + \gamma$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Direction $(8,2,2)$, base $(-3,4,-1)$. Foot of perpendicular $F$ from $R(1,2,3)$:</p>$$F = (-3,4,-1) + t(8,2,2),\quad (F-R)\cdot(8,2,2)=0 \implies t = \tfrac12,\ F = (1,5,0)$$<p>Since $P,Q$ are equidistant ($=6$) from $R$ on the line, they are symmetric about $F$, so $P+Q = 2F$. (Note $|RF| = 3\sqrt2 &lt; 6$, so $P,Q$ exist.)</p>$$\text{Centroid} = \frac{P+Q+R}{3} = \frac{2F+R}{3} = \frac{(2,10,0)+(1,2,3)}{3} = (1,4,1)$$

$$\alpha+\beta+\gamma = 1+4+1 = 6$$<p><strong>Answer:</strong> C (6)</p></div></details>

PYQ · 2026 5 Apr, Shift 2

If the distance of the point $(a, 2, 5)$ from the image of the point $(1, 2, 7)$ in the line $\dfrac{x}{1} = \dfrac{y-1}{1} = \dfrac{z-2}{2}$ is 4, then the sum of all possible values of $a$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Line through $(0,1,2)$, direction $(1,1,2)$. Foot of perpendicular from $(1,2,7)$:</p>$$(F-P)\cdot(1,1,2)=0 \implies F = (2,3,6),\qquad \text{image} = 2F-P = (3,4,5)$$<p>Distance from $(a,2,5)$ to $(3,4,5)$ equals $4$:</p>$$(a-3)^2 + (2-4)^2 + 0 = 16 \implies (a-3)^2 = 12$$

$$a = 3 \pm 2\sqrt3 \implies \text{sum} = 6$$<p><strong>Answer:</strong> C (6)</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let the foot of perpendicular from the point $(\lambda, 2, 3)$ on the line $\frac{x - 4}{1} = \frac{y - 9}{2} = \frac{z - 5}{1}$ be the point $(1, \mu, 2)$. Then the distance between the lines $\frac{x - 1}{2} = \frac{y - 2}{3} = \frac{z + 4}{6}$ and $\frac{x - \lambda}{2} = \frac{y - \mu}{3} = \frac{z + 5}{6}$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The foot $(1,\mu,2)$ lies on the line $(4,9,5)+t(1,2,1)$: $1 = 4+t \Rightarrow t = -3$, giving $\mu = 9+2(-3) = 3$ and $z = 5-3 = 2$. ✓</p><p>Perpendicularity $(\text{foot}-(\lambda,2,3))\cdot(1,2,1)=0$ gives $\lambda = 2$.</p><p>Two parallel lines, direction $\vec{d} = (2,3,6)$ ($|\vec{d}|=7$), through $(1,2,-4)$ and $(2,3,-5)$. Connector $\vec{w} = (1,1,-1)$:</p>$$\vec{w}\times\vec{d} = (1\cdot6-(-1)\cdot3,\ (-1)\cdot2-1\cdot6,\ 1\cdot3-1\cdot2) = (9,\ -8,\ 1)$$

$$\text{dist} = \frac{|\vec{w}\times\vec{d}|}{|\vec{d}|} = \frac{\sqrt{81+64+1}}{7} = \frac{\sqrt{146}}{7}$$<p><strong>Answer:</strong> C ($\frac{\sqrt{146}}{7}$)</p></div></details>

PYQ · 2026 8 Apr, Shift 2

Let a line $L_1$ pass through the origin and be perpendicular to the lines $L_2 : \vec{r} = (3 + t)\hat{i} + (2t - 1)\hat{j} + (2t + 4)\hat{k}$ and $L_3 : \vec{r} = (3 + 2s)\hat{i} + (3 + 2s)\hat{j} + (2 + s)\hat{k}$, $t, s \in \mathbf{R}$. If $(a, b, c)$, $a \in \mathbf{Z}$, is the point on $L_3$ at a distance of $\sqrt{17}$ from the point of intersection of $L_1$ and $L_2$, then $(a + b + c)^2$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Directions: $\vec{d_2} = (1,2,2)$, $\vec{d_3} = (2,2,1)$.</p>$$\vec{d_1} = \vec{d_2}\times\vec{d_3} = (-2,\ 3,\ -2)$$<p>$L_1 : r(-2,3,-2)$. Intersect with $L_2 : (3+t,\ 2t-1,\ 2t+4)$. Solving $r(-2,3,-2)=(3+t,2t-1,2t+4)$ gives $r=-1,\ t=-1$, so the intersection is $I = (2,\ -3,\ 2)$.</p><p>Point on $L_3$: $(3+2s,\ 3+2s,\ 2+s)$ at distance $\sqrt{17}$ from $I$:</p>$$(1+2s)^2 + (6+2s)^2 + s^2 = 17 \implies 9s^2 + 28s + 20 = 0 \implies s = -2\ \text{or}\ s = -\tfrac{10}{9}$$<p>$s = -2$ gives $(a,b,c) = (-1,-1,0)$ with $a\in\mathbb{Z}$.</p>$$(a+b+c)^2 = (-2)^2 = 4$$<p><strong>Answer:</strong> 4</p></div></details>

From TestGuru · our mock-test platform

## You've read Three-Dimensional Geometry Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=three-dimensional-geometry&tg_exam=jee-main&tg_page=%2Fmathematics%2Fthree-dimensional-geometry%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/three-dimensional-geometry/previous-year-questions/](https://jeenotes.in/mathematics/three-dimensional-geometry/previous-year-questions/) · raw HTML: `offline/mathematics/three-dimensional-geometry/previous-year-questions/index.html`_
