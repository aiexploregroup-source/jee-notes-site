---
title: "Sets, Relations & Functions — Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/sets-relations-functions/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Sets, Relations & Functions — domains, modulus and log equations, counting relations, transitivity, one-one/onto and functional equations — with step-by-step solutions."
updated: "2026-07-01"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 9"
html: "../../../../offline/mathematics/sets-relations-functions/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Sets, Relations & Functions — domains, modulus and log equations, counting relations, transitivity, one-one/onto and functional equations — with step-by-step solutions.

Solved JEE Main 2026 questions from the Sets, Relations & Functions chapter — covering domains of functions, modulus and logarithmic equations, counting elements of relations, transitivity, one-one/onto behaviour and functional equations — each with a concise step-by-step solution.

> Solutions are AI-generated and pending review.

PYQ · 2026 Apr 4, Shift 1

Let $[\cdot]$ denote the greatest integer function. If the domain of the function $f(x) = \cos^{-1}\left(\dfrac{4x + 2[x]}{3}\right)$ is $[\alpha, \beta]$, then $12(\alpha + \beta)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$\cos^{-1}(t)$ needs $-1 \le t \le 1$, so</p>$$-1 \le \frac{4x + 2[x]}{3} \le 1 \implies -3 \le 4x + 2[x] \le 3.$$<p>Test the two integer strips that can satisfy this:</p><ul><li>For $x \in [0,1)$, $[x] = 0$: need $-3 \le 4x \le 3 \Rightarrow x \le \tfrac34$. So $x \in \left[0, \tfrac34\right]$.</li><li>For $x \in [-1,0)$, $[x] = -1$: need $-3 \le 4x - 2 \le 3 \Rightarrow -\tfrac14 \le x &lt; 0$.</li></ul><p>Outside these strips $4x + 2[x]$ leaves $[-3,3]$. Hence the domain is</p>$$\left[-\tfrac14,\ \tfrac34\right],\qquad \alpha = -\tfrac14,\ \beta = \tfrac34.$$

$$12(\alpha + \beta) = 12 \cdot \tfrac12 = 6.$$<p><strong>Answer:</strong> A (6)</p></div></details>

PYQ · 2026 Apr 4, Shift 1

If the set of all solutions of $|x^2 + x - 9| = |x| + |x^2 - 9|$ is $[\alpha, \beta] \cup [\gamma, \infty)$, then $(\alpha^2 + \beta^2 + \gamma^2)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Write the left side as $\left|x + (x^2 - 9)\right|$. Using $|A + B| = |A| + |B|$ iff $A$ and $B$ have the same sign (or either is $0$), with $A = x$ and $B = x^2 - 9$:</p>$$|x + (x^2 - 9)| = |x| + |x^2 - 9| \iff x\,(x^2 - 9) \ge 0.$$<p>Factor: $x(x-3)(x+3) \ge 0$. A sign analysis gives</p>$$x \in [-3, 0] \cup [3, \infty).$$<p>So $\alpha = -3,\ \beta = 0,\ \gamma = 3$, and</p>$$\alpha^2 + \beta^2 + \gamma^2 = 9 + 0 + 9 = 18.$$<p><strong>Answer:</strong> B (18)</p></div></details>

PYQ · 2026 Apr 6, Shift 1

Let $[\cdot]$ denote the greatest integer function. If the domain of the function $f(x) = \sin^{-1}\left(\dfrac{x + [x]}{3}\right)$ is $[\alpha, \beta)$, then $\alpha^2 + \beta^2$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$\sin^{-1}(t)$ needs $-1 \le t \le 1$, so</p>$$-3 \le x + [x] \le 3.$$<p>Check each integer strip:</p><ul><li>$x \in [-1, 0)$, $[x] = -1$: $x + [x] = x - 1 \in [-2,-1)$, valid $\Rightarrow$ all of $[-1,0)$.</li><li>$x \in [0, 1)$, $[x] = 0$: $x + [x] = x \in [0,1)$, valid.</li><li>$x \in [1, 2)$, $[x] = 1$: $x + [x] = x + 1 \in [2,3)$, valid $\Rightarrow$ all of $[1,2)$.</li><li>$x \in [2, 3)$, $[x] = 2$: $x + [x] \ge 4 &gt; 3$, invalid.</li><li>$x &lt; -1$: $x + [x] &lt; -2$ soon drops below $-3$, invalid.</li></ul><p>Combining the valid strips gives the domain $[-1, 2)$, so $\alpha = -1,\ \beta = 2$ and</p>$$\alpha^2 + \beta^2 = 1 + 4 = 5.$$<p><strong>Answer:</strong> B (5)</p></div></details>

PYQ · 2026 Apr 2, Shift 1

Let $A$ be the set of first 101 terms of an A.P., whose first term is 1 and the common difference is 5 and let $B$ be the set of first 71 terms of an A.P., whose first term is 9 and the common difference is 7. Then the number of elements in $A \cap B$, which are divisible by 3, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body">$$A = \{5k + 1 : 0 \le k \le 100\} = \{1, 6, \dots, 501\},$$<p></p>$$B = \{7m + 9 : 0 \le m \le 70\} = \{9, 16, \dots, 499\}.$$<p>Common terms satisfy $5k + 1 = 7m + 9$. The smallest common term is $16$, and common terms recur with period $\operatorname{lcm}(5,7) = 35$:</p>$$A \cap B = \{16, 51, 86, \dots\},\quad 16 + 35t.$$<p>The largest such term $\le \min(501, 499) = 499$ is $16 + 35(13) = 471$, so $t = 0,\dots,13$ (14 terms).</p><p>Divisible by 3: $16 + 35t \equiv 0 \pmod 3 \Rightarrow 1 + 2t \equiv 0 \Rightarrow t \equiv 1 \pmod 3$.</p>$$t = 1, 4, 7, 10, 13 \;\Rightarrow\; \{51, 156, 261, 366, 471\}.$$<p>That is <strong>5</strong> elements.</p><p><strong>Answer:</strong> B (5)</p></div></details>

PYQ · 2026 Apr 2, Shift 1

If the domain of the function $f(x) = \sqrt{\log_{(0.6)}\left(\left|\dfrac{2x-5}{x^2-4}\right|\right)}$ is $(-\infty, a] \cup \{b\} \cup [c, d) \cup (e, \infty)$, then the value of $a + b + c + d + e$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Two requirements:</p><ol><li>The log argument must be defined and positive: $\left|\dfrac{2x-5}{x^2-4}\right| &gt; 0$, so $x \ne 2, -2$ and $x \ne \tfrac52$ (numerator zero makes the value $0$).</li><li>The square root needs $\log_{0.6}(\cdot) \ge 0$. Since base $0.6 &lt; 1$, this means $\left|\dfrac{2x-5}{x^2-4}\right| \le 1$, i.e. $|2x - 5| \le |x^2 - 4|$.</li></ol><p>Square the last inequality:</p>$$(x^2 - 4)^2 - (2x - 5)^2 \ge 0 \implies (x^2 - 2x + 1)(x^2 + 2x - 9) \ge 0,$$<p></p>$$(x - 1)^2\,(x^2 + 2x - 9) \ge 0.$$<p>Since $(x-1)^2 \ge 0$, this holds when $x^2 + 2x - 9 \ge 0$ (or $x = 1$). Roots of $x^2 + 2x - 9$ are $-1 \pm \sqrt{10}$, so</p>$$x \le -1 - \sqrt{10}\quad\text{or}\quad x \ge -1 + \sqrt{10},\qquad \text{plus the isolated point } x = 1.$$<p>Now remove $x = \tfrac52$ (excluded above), which lies in the right branch and splits it:</p>$$\text{Domain} = (-\infty,\, -1-\sqrt{10}] \cup \{1\} \cup [-1+\sqrt{10},\ \tfrac52) \cup (\tfrac52,\ \infty).$$<p>Matching, $a = -1-\sqrt{10},\ b = 1,\ c = -1+\sqrt{10},\ d = \tfrac52,\ e = \tfrac52$:</p>$$a + b + c + d + e = (-1-\sqrt{10}) + 1 + (-1+\sqrt{10}) + \tfrac52 + \tfrac52 = -1 + 5 = 4.$$<p><strong>Answer:</strong> 4</p></div></details>

PYQ · 2026 Apr 4, Shift 2

For the function $f : [1,\infty) \to [1,\infty)$ defined by $f(x) = (x-1)^4 + 1$, among the two statements:
(I) The set $S = \{x \in [1,\infty) : f(x) = f^{-1}(x)\}$ contains exactly two elements, and
(II) The set $S = \{x \in [1,\infty) : f(x) = f^{-1}(x+1)\}$ is an empty set,

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>On $[1,\infty)$, $f$ is strictly increasing, so its inverse is $f^{-1}(x) = 1 + (x - 1)^{1/4}$.</p><p><strong>Statement (I).</strong> For a strictly increasing $f$, $f(x) = f^{-1}(x)$ holds exactly at the fixed points $f(x) = x$:</p>$$(x-1)^4 + 1 = x \implies (x-1)^4 = x - 1.$$<p>Put $t = x - 1 \ge 0$: $t^4 = t \Rightarrow t(t^3 - 1) = 0 \Rightarrow t = 0,\,1$, giving $x = 1, 2$. So $S$ has exactly two elements — <strong>(I) is TRUE</strong>.</p><p><strong>Statement (II).</strong> $f^{-1}(x+1) = 1 + (x+1-1)^{1/4} = 1 + x^{1/4}$. The equation is</p>$$(x-1)^4 + 1 = 1 + x^{1/4} \implies (x-1)^4 = x^{1/4}.$$<p>At $x = 1$ the left side is $0$ and the right side is $1$ (left $&lt;$ right); as $x$ grows, $(x-1)^4$ overtakes $x^{1/4}$, so by continuity a solution exists near $x \approx 2.05$. Thus $S$ is <strong>not</strong> empty — <strong>(II) is FALSE</strong>.</p><p>Only (I) is true.</p><p><strong>Answer:</strong> A (only (I) is TRUE)</p></div></details>

PYQ · 2026 Apr 4, Shift 2

Let for some $\alpha \in \mathbb{R}$, $f : \mathbb{R} \to \mathbb{R}$ be a function satisfying $f(x + y) = f(x) + 2y^2 + y + \alpha xy$ for all $x, y \in \mathbb{R}$. If $f(0) = -1$ and $f(1) = 2$, then the value of $\displaystyle\sum_{n=1}^{5}\left(\alpha + f(n)\right)$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Put $x = 0$:</p>$$f(y) = f(0) + 2y^2 + y = 2y^2 + y - 1.$$<p>Check: $f(1) = 2 + 1 - 1 = 2$. ✓</p><p>Find $\alpha$ by expanding both sides with $f(t) = 2t^2 + t - 1$:</p>$$f(x+y) = 2(x+y)^2 + (x+y) - 1 = 2x^2 + 4xy + 2y^2 + x + y - 1,$$<p></p>$$f(x) + 2y^2 + y + \alpha xy = 2x^2 + x - 1 + 2y^2 + y + \alpha xy.$$<p>Comparing the $xy$ terms: $4xy = \alpha xy \Rightarrow \alpha = 4$.</p><p>Now</p>$$\sum_{n=1}^{5}\big(\alpha + f(n)\big) = 5\alpha + \sum_{n=1}^{5} f(n) = 20 + \sum_{n=1}^{5}(2n^2 + n - 1).$$<p></p>$$\sum_{n=1}^{5} f(n) = 2\cdot 55 + 15 - 5 = 110 + 10 = 120.$$<p></p>$$\text{Total} = 20 + 120 = 140.$$<p><strong>Answer:</strong> B (140)</p></div></details>

PYQ · 2026 Apr 2, Shift 2

Let $A = \{2, 3, 4, 5, 6\}$. Let $R$ be a relation on the set $A \times A$ given by $(x, y)R(z, w)$ if and only if $x$ divides $z$ and $y \leq w$. Then the number of elements in $R$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The two conditions “$x \mid z$” and “$y \le w$” are independent, so</p>$$|R| = \#\{(x,z) : x \mid z\} \times \#\{(y,w) : y \le w\}.$$<p><strong>Divisibility pairs</strong> in $A = \{2,3,4,5,6\}$ (count $z$ that each $x$ divides):</p><ul><li>$x=2$: $z \in \{2,4,6\}$ → 3</li><li>$x=3$: $z \in \{3,6\}$ → 2</li><li>$x=4$: $z \in \{4\}$ → 1</li><li>$x=5$: $z \in \{5\}$ → 1</li><li>$x=6$: $z \in \{6\}$ → 1</li></ul><p>Total $= 3+2+1+1+1 = 8$.</p><p><strong>Ordered pairs with $y \le w$:</strong> out of $5 \times 5 = 25$, the number with $y \le w$ is $\dfrac{25 + 5}{2} = 15$.</p>$$|R| = 8 \times 15 = 120.$$<p><strong>Answer:</strong> 120</p></div></details>

PYQ · 2026 Apr 6, Shift 2

Let $f:\mathbb{R}\to\mathbb{R}$ be defined as $f(x)=\dfrac{2x^2-3x+2}{3x^2+x+3}$. Then $f$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The denominator $3x^2 + x + 3$ has discriminant $1 - 36 &lt; 0$, so it is always positive and $f$ is defined on all of $\mathbb{R}$.</p><p><strong>Onto?</strong> Set $y = f(x)$ and clear denominators:</p>$$y(3x^2 + x + 3) = 2x^2 - 3x + 2 \implies (3y - 2)x^2 + (y + 3)x + (3y - 2) = 0.$$<p>For a real $x$ (with $3y - 2 \ne 0$) the discriminant must be $\ge 0$:</p>$$(y+3)^2 - 4(3y-2)^2 \ge 0 \implies (y - \tfrac17)(y - \tfrac75) \le 0 \implies y \in \left[\tfrac17, \tfrac75\right].$$<p>The range is the bounded interval $\left[\tfrac17, \tfrac75\right] \ne \mathbb{R}$, so $f$ is <strong>not onto</strong>.</p><p><strong>One-one?</strong> For a generic value $y$ in the range the quadratic in $x$ has two distinct roots, so different $x$ map to the same $y$ (e.g. $f(0) = \tfrac23 = f\!\left(\tfrac{?}{}\right)$ has a second preimage). Hence $f$ is <strong>not one-one</strong>.</p><p>$f$ is neither one-one nor onto.</p><p><strong>Answer:</strong> D (neither one-one nor onto)</p></div></details>

PYQ · 2026 Apr 6, Shift 2

Let $R=\left\{(x,y)\in\mathbb{N}\times\mathbb{N}:\log_e(x+y)\le 2\right\}$. Then the minimum number of elements, required to be added in $R$ to make it a transitive relation, is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$\log_e(x+y) \le 2 \iff x + y \le e^2 \approx 7.389$. With $x, y \in \mathbb{N}$ (so $\ge 1$), this means</p>$$R = \{(x,y) : x + y \le 7\}.$$<p>Counting by $s = x+y$ from $2$ to $7$: sizes $1,2,3,4,5,6$, so $|R| = 21$.</p><p>For transitivity we need: whenever $(x,y), (y,z) \in R$, also $(x,z) \in R$. The minimum superset that is transitive is the <strong>transitive closure</strong> of $R$.</p><p>$R$ contains $(1,1),\dots$ and links every $a \le 6$ to every $b \le 6$ eventually (e.g. $(1,6)$ and $(6,1)$ chain to force $(a,b)$ for all $a,b \in \{1,\dots,6\}$). Computing the transitive closure gives the full block $\{1,\dots,6\}\times\{1,\dots,6\}$ (size $36$) — every pair $(a,b)$ with $a,b \le 6$ becomes forced, while pairs involving a coordinate $\ge 7$ do not arise.</p>$$\text{closure size} = 36,\qquad \text{elements to add} = 36 - 21 = 15.$$<p><strong>Answer:</strong> 15</p></div></details>

PYQ · 2026 Apr 5, Shift 2

Let $A = \{1, 4, 7\}$ and $B = \{2, 3, 8\}$. Then the number of elements, in the relation $R = \{((a_1, b_1), (a_2, b_2)) \in ((A \times B) \times (A \times B)) : a_1 + b_2 \text{ divides } a_2 + b_1\}$ is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Each element of $A \times B$ is a pair $(a, b)$; there are $9$ such pairs. We count quadruples where $(a_1 + b_2) \mid (a_2 + b_1)$.</p><p>Let $s = a_1 + b_2$ (from the first pair’s $a$ and the second pair’s $b$) and $t = a_2 + b_1$. Both $s$ and $t$ range over sums $a + b$ with $a \in \{1,4,7\}$, $b \in \{2,3,8\}$, i.e. values in $\{3,4,9,6,7,12,9,10,15\}$.</p><p>Enumerating all $9 \times 9 = 81$ ordered pairs $((a_1,b_1),(a_2,b_2))$ and checking $(a_1+b_2)\mid(a_2+b_1)$ gives exactly $18$ satisfying quadruples.</p>$$|R| = 18.$$<p><strong>Answer:</strong> 18</p></div></details>

PYQ · 2026 Apr 8, Shift 2

Consider the relation $R$ on the set $\{-2, -1, 0, 1, 2\}$ defined by $(a, b) \in R$ if and only if $1 + ab > 0$. Then, among the statements:

I. The number of elements in $R$ is 17

II. $R$ is an equivalence relation

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>On $S = \{-2,-1,0,1,2\}$, count pairs with $1 + ab &gt; 0$, i.e. $ab &gt; -1$.</p><ul><li>If either $a = 0$ or $b = 0$: $ab = 0 &gt; -1$ → all such pairs qualify. That is $2\cdot 5 - 1 = 9$ pairs (rows/columns through $0$).</li><li>Among nonzero $a, b \in \{-2,-1,1,2\}$: need $ab &gt; -1$, i.e. $ab \ge 1$ (both same sign) — products of opposite signs give $ab \le -1$, excluded. Same-sign pairs: $\{-2,-1\}^2$ gives $4$, $\{1,2\}^2$ gives $4$ → $8$ pairs.</li></ul><p>Total $= 9 + 8 = 17$. So <strong>Statement I is TRUE</strong>.</p><p><strong>Equivalence?</strong> $R$ is reflexive ($1 + a^2 &gt; 0$) and symmetric ($ab = ba$), but <strong>not transitive</strong>: $(-2, 0) \in R$ and $(0, 1) \in R$, yet $1 + (-2)(1) = -1 \not&gt; 0$ so $(-2, 1) \notin R$. Hence $R$ is not an equivalence relation — <strong>Statement II is FALSE</strong>.</p><p>Only I is true.</p><p><strong>Answer:</strong> A (Only I is true)</p></div></details>

PYQ · 2026 Apr 8, Shift 2

The sum of squares of all the real solutions of the equation $\log_{(x+1)}(2x^2 + 5x + 3) = 4 - \log_{(2x+3)}(x^2 + 2x + 1)$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Factor the arguments:</p>$$2x^2 + 5x + 3 = (x+1)(2x+3),\qquad x^2 + 2x + 1 = (x+1)^2.$$<p>So</p>$$\log_{x+1}\big((x+1)(2x+3)\big) = 1 + \log_{x+1}(2x+3),$$<p></p>$$\log_{2x+3}\big((x+1)^2\big) = 2\,\log_{2x+3}(x+1).$$<p>Let $t = \log_{x+1}(2x+3)$, so $\log_{2x+3}(x+1) = \dfrac1t$. The equation becomes</p>$$1 + t = 4 - \frac{2}{t} \implies t + \frac{2}{t} = 3 \implies t^2 - 3t + 2 = 0 \implies t = 1 \text{ or } 2.$$<ul><li>$t = 1$: $2x + 3 = x + 1 \Rightarrow x = -2$. But then base $x + 1 = -1 &lt; 0$ — <strong>rejected</strong>.</li><li>$t = 2$: $2x + 3 = (x+1)^2 = x^2 + 2x + 1 \Rightarrow x^2 = 2 \Rightarrow x = \pm\sqrt2$.<ul><li>$x = \sqrt2$: bases $x+1 \approx 2.41 &gt; 0,\ne 1$ and $2x+3 \approx 5.83$ — <strong>valid</strong>.</li><li>$x = -\sqrt2 \approx -1.41$: base $x + 1 &lt; 0$ — <strong>rejected</strong>.</li></ul></li></ul><p>Only real solution: $x = \sqrt2$.</p>$$\text{Sum of squares} = (\sqrt2)^2 = 2.$$<p><strong>Answer:</strong> 2</p></div></details>

From TestGuru · our mock-test platform

## You've read Sets, Relations & Functions — Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=sets-relations-functions&tg_exam=jee-main&tg_page=%2Fmathematics%2Fsets-relations-functions%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/sets-relations-functions/previous-year-questions/](https://jeenotes.in/mathematics/sets-relations-functions/previous-year-questions/) · raw HTML: `offline/mathematics/sets-relations-functions/previous-year-questions/index.html`_
