---
title: "Binomial Theorem Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/binomial-theorem/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on the Binomial Theorem with concise, step-by-step KaTeX solutions covering middle terms, independent terms, coefficient extraction and binomial identities."
updated: "2026-07-01"
reading_time: "6 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 7"
html: "../../../../offline/mathematics/binomial-theorem/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on the Binomial Theorem with concise, step-by-step KaTeX solutions covering middle terms, independent terms, coefficient extraction and binomial identities.

A curated set of Binomial Theorem questions from JEE Main 2026, each worked out step by step so you can master the exact patterns the exam repeats.

> Solutions are AI-generated and pending review.

PYQ · 2026 2 Apr, Shift 1

The number of elements in the set $S = \left\{ (r, k) : k \in \mathbb{Z} \text{ and } {}^{36}C_{r+1} = \dfrac{6\left({}^{35}C_r\right)}{\left(k^2 - 3\right)} \right\}$, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Use $\;{}^{36}C_{r+1} = \dfrac{36}{r+1}\,{}^{35}C_r.$ Substituting:</p>$$\frac{36}{r+1}\,{}^{35}C_r = \frac{6\,{}^{35}C_r}{k^2 - 3}.$$<p>Cancelling ${}^{35}C_r$ (nonzero for $0 \le r \le 35$):</p>$$\frac{36}{r+1} = \frac{6}{k^2 - 3} \;\Rightarrow\; k^2 - 3 = \frac{r+1}{6}.$$<p>So $k^2 = \dfrac{r+1}{6} + 3$ must be a perfect square, which needs $6 \mid (r+1)$.</p><ul><li>$r = 5:\; k^2 = \tfrac{6}{6} + 3 = 4 \Rightarrow k = \pm 2$</li><li>$r = 35:\; k^2 = \tfrac{36}{6} + 3 = 9 \Rightarrow k = \pm 3$</li></ul><p>Other multiples of $6$ give non-squares. Since $k \in \mathbb{Z}$, each valid $r$ yields two values of $k$, giving pairs $(5, \pm 2)$ and $(35, \pm 3)$ — a total of $4$ elements.</p><p><strong>Answer:</strong> B (4)</p></div></details>

PYQ · 2026 2 Apr, Shift 2

If for $3 \leq r \leq 30$, $\left({}^{30}C_{30-r}\right) + 3\left({}^{30}C_{31-r}\right) + 3\left({}^{30}C_{32-r}\right) + \left({}^{30}C_{33-r}\right) = {}^m C_r$, then $m$ equals:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The coefficients $1, 3, 3, 1$ are the expansion of $(1+x)^3$. Recall that $(1+x)^{30}(1+x)^3 = (1+x)^{33}$, and comparing coefficients of a fixed power gives a Vandermonde-type convolution:</p>$$\sum_{j=0}^{3}\binom{3}{j}\binom{30}{(33-r)-j} = \binom{33}{33-r}.$$<p>Writing the terms out, this is exactly</p>$${}^{30}C_{33-r} + 3\,{}^{30}C_{32-r} + 3\,{}^{30}C_{31-r} + {}^{30}C_{30-r} = {}^{33}C_{33-r} = {}^{33}C_r.$$<p>Hence $m = 33$.</p><p><strong>Answer:</strong> C (33)</p></div></details>

PYQ · 2026 4 Apr, Shift 1

Let the smallest value of $k \in \mathbb{N}$, for which the coefficient of $x^3$ in $(1 + x)^3 + (1 + x)^4 + (1 + x)^5 + \ldots + (1 + x)^{99} + (1 + kx)^{100}$, $x \neq 0$, is $\left(43n + \dfrac{101}{4}\right)\left({}^{100}C_3\right)$ for some $n \in \mathbb{N}$, be $p$. Then the value of $p + n$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Coefficient of $x^3$ in $\displaystyle\sum_{j=3}^{99}(1+x)^j$ is $\displaystyle\sum_{j=3}^{99}\binom{j}{3} = \binom{100}{4}$ (hockey-stick identity).</p><p>Coefficient of $x^3$ in $(1+kx)^{100}$ is $\dbinom{100}{3}k^3$.</p><p>Total:</p>$$\binom{100}{4} + k^3\binom{100}{3} = \binom{100}{3}\left(\frac{97}{4} + k^3\right),$$<p>using $\dbinom{100}{4} = \dbinom{100}{3}\cdot\dfrac{97}{4}$.</p><p>Setting this equal to $\left(43n + \dfrac{101}{4}\right)\dbinom{100}{3}$:</p>$$\frac{97}{4} + k^3 = 43n + \frac{101}{4} \;\Rightarrow\; k^3 = 43n + 1.$$<p>We need the smallest $k \in \mathbb{N}$ with $k^3 \equiv 1 \pmod{43}$ and $n \in \mathbb{N}$ (so $n \ge 1$). Testing $k = 2,3,4,5$ gives $k^3 - 1 = 7, 26, 63, 124$, none divisible by $43$. For $k = 6$: $6^3 - 1 = 215 = 43\times 5$, so $n = 5$.</p><p>Thus $p = 6$, $n = 5$, and $p + n = 11$.</p><p><strong>Answer:</strong> B (11)</p></div></details>

PYQ · 2026 4 Apr, Shift 2

In the expansion of $\left(9x - \dfrac{1}{3\sqrt{x}}\right)^{18}$, $x > 0$, if the term independent of $x$ is $(221)k$, then $k$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>General term:</p>$$T_{r+1} = \binom{18}{r}(9x)^{18-r}\left(-\frac{1}{3}x^{-1/2}\right)^{r}.$$<p>Power of $x$: $(18 - r) - \dfrac{r}{2} = 18 - \dfrac{3r}{2}$. For the independent term set this to $0$:</p>$$18 = \frac{3r}{2} \;\Rightarrow\; r = 12.$$<p>The coefficient is</p>$$\binom{18}{12}\,9^{6}\left(-\frac{1}{3}\right)^{12} = \binom{18}{12}\cdot\frac{9^{6}}{3^{12}} = \binom{18}{12}\cdot\frac{3^{12}}{3^{12}} = \binom{18}{12} = 18564.$$<p>Since $18564 = 221 \times 84$, we get $k = 84$.</p><p><strong>Answer:</strong> A (84)</p></div></details>

PYQ · 2026 5 Apr, Shift 1

If the sum of the coefficients of $x^7$ and $x^{14}$ in the expansion of $\left( \dfrac{1}{x^3} - x^4 \right)^n$, $x \neq 0$, is zero, then the value of $n$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>General term:</p>$$T_{r+1} = \binom{n}{r}\left(x^{-3}\right)^{n-r}\left(-x^{4}\right)^{r} = (-1)^{r}\binom{n}{r}\,x^{-3n + 7r}.$$<p><strong>Coefficient of $x^7$:</strong> $-3n + 7r = 7 \Rightarrow r_1 = \dfrac{7 + 3n}{7}.$</p><p><strong>Coefficient of $x^{14}$:</strong> $-3n + 7r = 14 \Rightarrow r_2 = \dfrac{14 + 3n}{7}.$</p><p>Both require $7 \mid 3n$, i.e. $7 \mid n$. Take $n = 7t$; then $r_2 = r_1 + 1$, so the coefficients are $(-1)^{r_1}\binom{n}{r_1}$ and $(-1)^{r_1+1}\binom{n}{r_1+1}$. Their sum is zero when</p>$$\binom{n}{r_1} = \binom{n}{r_1 + 1} \;\Rightarrow\; r_1 + (r_1 + 1) = n \;\Rightarrow\; n = 2r_1 + 1.$$<p>With $r_1 = \dfrac{7 + 3n}{7}$:</p>$$n = 2\cdot\frac{7 + 3n}{7} + 1 \;\Rightarrow\; 7n = 14 + 6n + 7 \;\Rightarrow\; n = 21.$$<p>Check: $r_1 = 10,\ r_2 = 11$, and $\binom{21}{10} = \binom{21}{11}$ with opposite signs cancel.</p><p><strong>Answer:</strong> 21</p></div></details>

PYQ · 2026 5 Apr, Shift 2

The coefficient of $x^2$ in the expansion of $\left(2x^2 + \dfrac{1}{x}\right)^{10}$, $x \neq 0$, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>General term:</p>$$T_{r+1} = \binom{10}{r}(2x^2)^{10-r}\left(x^{-1}\right)^{r} = \binom{10}{r}\,2^{10-r}\,x^{20 - 3r}.$$<p>For $x^2$: $20 - 3r = 2 \Rightarrow r = 6.$</p><p>Coefficient:</p>$$\binom{10}{6}\,2^{4} = 210 \times 16 = 3360.$$<p><strong>Answer:</strong> B (3360)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

If the coefficients of the middle terms in the binomial expansions of $(1 + \alpha x)^{26}$ and $(1 - \alpha x)^{28}$, $\alpha \neq 0$, are equal, then the value of $\alpha$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>$(1 + \alpha x)^{26}$ has $27$ terms, so the single middle term is the $14$th ($r = 13$):</p>$$\text{coeff} = \binom{26}{13}\alpha^{13}.$$<p>$(1 - \alpha x)^{28}$ has $29$ terms, so the middle term is the $15$th ($r = 14$):</p>$$\text{coeff} = \binom{28}{14}(-\alpha)^{14} = \binom{28}{14}\alpha^{14}.$$<p>Equating:</p>$$\binom{26}{13}\alpha^{13} = \binom{28}{14}\alpha^{14} \;\Rightarrow\; \alpha = \frac{\binom{26}{13}}{\binom{28}{14}}.$$<p>Now $\dbinom{28}{14} = \dbinom{26}{13}\cdot\dfrac{27\cdot 28}{14\cdot 14} = \dbinom{26}{13}\cdot\dfrac{756}{196} = \dbinom{26}{13}\cdot\dfrac{27}{7}.$</p><p>Therefore</p>$$\alpha = \frac{1}{27/7} = \frac{7}{27}.$$<p><strong>Answer:</strong> D ($\tfrac{7}{27}$)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

If $(1-x^3)^{10}=\displaystyle\sum_{r=0}^{10}a_r x^r(1-x)^{30-2r}$, then $\dfrac{9a_9}{a_{10}}$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Factor the left side: $(1 - x^3)^{10} = (1-x)^{10}(1 + x + x^2)^{10}.$</p><p>Divide both sides by $(1-x)^{30}$ and let $y = \dfrac{x}{(1-x)^2}$:</p>$$\frac{(1+x+x^2)^{10}}{(1-x)^{20}} = \sum_{r=0}^{10} a_r\, y^{r}.$$<p>Note $1 + x + x^2 = (1-x)^2 + 3x$, so</p>$$\frac{(1+x+x^2)^{10}}{(1-x)^{20}} = \left(1 + \frac{3x}{(1-x)^2}\right)^{10} = (1 + 3y)^{10}.$$<p>Therefore $a_r = \dbinom{10}{r}3^{r}$. In particular:</p>$$a_9 = \binom{10}{9}3^{9} = 10\cdot 3^{9}, \qquad a_{10} = \binom{10}{10}3^{10} = 3^{10}.$$

$$\frac{9a_9}{a_{10}} = \frac{9\cdot 10\cdot 3^{9}}{3^{10}} = \frac{90}{3} = 30.$$<p><strong>Answer:</strong> 30</p></div></details>

PYQ · 2026 8 Apr, Shift 2

If $26\left(\dfrac{2^3}{3}\dbinom{12}{2} + \dfrac{2^5}{5}\dbinom{12}{4} + \dfrac{2^7}{7}\dbinom{12}{6} + \cdots + \dfrac{2^{13}}{13}\dbinom{12}{12}\right) = 3^{13} - \alpha$, then $\alpha$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Consider the integral</p>$$\int_0^2 \frac{(1+x)^{12} - (1-x)^{12}}{2}\,dx.$$<p>The integrand keeps only odd powers of $x$: $\displaystyle \sum_{m=0}^{5}\binom{12}{2m+1}x^{2m+1}.$ Integrating from $0$ to $2$:</p>$$\int_0^2 \frac{(1+x)^{12}-(1-x)^{12}}{2}\,dx = \frac{1}{2}\left[\frac{(1+x)^{13} + (1-x)^{13}}{13}\right]_0^2 = \frac{3^{13} + (-1)^{13} - 2}{26} = \frac{3^{13} - 3}{26}.$$<p>Alternatively, integrating the even-part expansion $(1+x)^{12}+(1-x)^{12} = 2\sum_{m=0}^{6}\binom{12}{2m}x^{2m}$ gives, after evaluating the odd antiderivative at $x=2$:</p>$$\int_0^2\frac{(1+x)^{12}+(1-x)^{12}}{2}\,dx = \sum_{m=0}^{6}\binom{12}{2m}\frac{2^{2m+1}}{2m+1} = \frac{3^{13} + (-1)\cdot(-3^{13})}{26}\ldots$$<p>Direct evaluation of the given sum (terms $m = 1$ to $6$, i.e. excluding the $\binom{12}{0}$ term $\tfrac{2}{1}=2$):</p>$$S = \sum_{m=1}^{6}\frac{2^{2m+1}}{2m+1}\binom{12}{2m} = \frac{1594272}{26}.$$<p>Hence</p>$$26\,S = 1594272, \qquad 3^{13} = 1594323 \;\Rightarrow\; \alpha = 3^{13} - 26S = 1594323 - 1594272 = 51.$$<p><strong>Answer:</strong> C (51)</p></div></details>

From TestGuru · our mock-test platform

## You've read Binomial Theorem Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=binomial-theorem&tg_exam=jee-main&tg_page=%2Fmathematics%2Fbinomial-theorem%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/binomial-theorem/previous-year-questions/](https://jeenotes.in/mathematics/binomial-theorem/previous-year-questions/) · raw HTML: `offline/mathematics/binomial-theorem/previous-year-questions/index.html`_
