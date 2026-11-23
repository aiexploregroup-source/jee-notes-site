---
title: "Statistics & Probability Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/statistics-probability/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Statistics & Probability with step-by-step solutions covering mean, median, mean deviation, variance, standard deviation, Bayes' theorem and combinatorial probability."
updated: "2026-07-01"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 9 of 10"
html: "../../../../offline/mathematics/statistics-probability/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Statistics & Probability with step-by-step solutions covering mean, median, mean deviation, variance, standard deviation, Bayes' theorem and combinatorial probability.

A curated set of JEE Main 2026 previous-year questions on Statistics & Probability, each solved step by step so you can check both the final answer and the full reasoning.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

Suppose that the mean and median of the non-negative numbers $21, 8, 17, a, 51, 103, b, 13, 67$, $(a > b)$, are 40 and 21, respectively. If the mean deviation about the median is 26, then $2a$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>There are $9$ numbers, so the mean gives the total:</p>$$\sum x_i = 40 \times 9 = 360.$$<p>The seven known numbers sum to $21+8+17+51+103+13+67 = 280$, so</p>$$a + b = 80.$$<p><strong>Median</strong> is the $5^{\text{th}}$ value when sorted, given as $21$.</p><p><strong>Mean deviation about the median</strong> $= 26$:</p>$$\sum |x_i - 21| = 26 \times 9 = 234.$$<p>The known deviations are</p>$$0+13+4+30+82+8+46 = 183,$$<p>so</p>$$|a-21| + |b-21| = 234 - 183 = 51.$$<p>With $a+b=80$ and $a&gt;b$, take $b &lt; 21 \le a$:</p>$$(a-21) + (21-b) = a - b = 51.$$<p>Solving $a+b=80,\ a-b=51$:</p>$$a = \dfrac{131}{2},\qquad b = \dfrac{29}{2}.$$<p>The sorted data $8,13,14.5,17,\mathbf{21},51,65.5,67,103$ confirms median $21$ and mean deviation $26$.</p>$$2a = 131.$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 4 Apr, Shift 1

A coin is tossed 8 times. If the probability that exactly 4 heads appear in the first six tosses and exactly 3 heads appear in the last five tosses is $p$, then $96p$ is equal to _____.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Label the tosses $1$–$8$. “First six” means tosses $1$–$6$; “last five” means tosses $4$–$8$. They overlap on tosses $4,5,6$. Let $j$ be the number of heads among tosses $4,5,6$.</p><p><strong>Tosses $1$–$3$</strong> must supply $4 - j$ heads, and <strong>tosses $7$–$8$</strong> must supply $3 - j$ heads.</p><p>For each valid $j$, the count of favourable outcomes is</p>$$\binom{3}{\,4-j\,}\binom{3}{j}\binom{2}{\,3-j\,}.$$<p>The binomials force $4-j \le 3$ and $3-j \le 2$, i.e. $j \ge 1$; also $j \le 3$. Checking each:</p>$$j=1:\ \binom{3}{3}\binom{3}{1}\binom{2}{2} = 1\cdot 3\cdot 1 = 3,$$<p></p>$$j=2:\ \binom{3}{2}\binom{3}{2}\binom{2}{1} = 3\cdot 3\cdot 2 = 18,$$<p></p>$$j=3:\ \binom{3}{1}\binom{3}{3}\binom{2}{0} = 3\cdot 1\cdot 1 = 3.$$<p>Total favourable $= 3 + 18 + 3 = 24$ (confirmed by direct enumeration of all $2^8$ outcomes).</p>$$p = \dfrac{24}{2^8} = \dfrac{24}{256} = \dfrac{3}{32}.$$<p></p>$$96p = 96 \times \dfrac{3}{32} = 9.$$<p><strong>Answer:</strong> 9</p></div></details>

PYQ · 2026 6 Apr, Shift 1

A data consists of 20 observations $x_1, x_2, \ldots, x_{20}$. If $\sum_{i=1}^{20}(x_i + 5)^2 = 2500$ and $\sum_{i=1}^{20}(x_i - 5)^2 = 100$, then the ratio of mean to standard deviation of this data is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Subtract</strong> the two sums:</p>$$\sum\big[(x_i+5)^2 - (x_i-5)^2\big] = \sum 20x_i = 2500 - 100 = 2400,$$<p></p>$$\Rightarrow \sum x_i = 120 \Rightarrow \bar{x} = \dfrac{120}{20} = 6.$$<p><strong>Add</strong> the two sums:</p>$$\sum\big[(x_i+5)^2 + (x_i-5)^2\big] = \sum\big(2x_i^2 + 50\big) = 2\sum x_i^2 + 1000 = 2600,$$<p></p>$$\Rightarrow \sum x_i^2 = 800.$$<p><strong>Variance:</strong></p>$$\sigma^2 = \dfrac{\sum x_i^2}{20} - \bar{x}^2 = \dfrac{800}{20} - 36 = 40 - 36 = 4 \Rightarrow \sigma = 2.$$

$$\dfrac{\bar{x}}{\sigma} = \dfrac{6}{2} = 3 = 3:1.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 6 Apr, Shift 1

A bag contains $(N + 1)$ coins $-$ $N$ fair coins, and one coin with ‘Head’ on both sides. A coin is selected at random and tossed. If the probability of getting ‘Head’ is $\dfrac{9}{16}$, then $N$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Each coin is chosen with probability $\dfrac{1}{N+1}$. A fair coin gives Head with probability $\tfrac{1}{2}$; the double-headed coin gives Head with probability $1$.</p>$$P(\text{Head}) = \dfrac{N\cdot \tfrac{1}{2} + 1\cdot 1}{N+1} = \dfrac{\tfrac{N}{2} + 1}{N+1} = \dfrac{N+2}{2(N+1)}.$$<p>Set equal to $\dfrac{9}{16}$:</p>$$\dfrac{N+2}{2(N+1)} = \dfrac{9}{16} \Rightarrow 16(N+2) = 18(N+1)$$<p></p>$$32 + 16N = 18N + 18 \Rightarrow 2N = 14 \Rightarrow N = 7.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 2 Apr, Shift 1

Let $a, b, c \in \{1, 2, 3, 4\}$. If the probability, that $ax^2 + 2\sqrt{2}\,bx + c > 0$ for all $x \in \mathbb{R}$, is $\dfrac{m}{n}$, $\gcd(m, n) = 1$, then $m + n$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Since $a \in \{1,2,3,4\}$, the leading coefficient is always positive. The quadratic is positive for all real $x$ iff the discriminant is negative:</p>$$(2\sqrt{2}\,b)^2 - 4ac &lt; 0 \Rightarrow 8b^2 - 4ac &lt; 0 \Rightarrow 2b^2 &lt; ac.$$<p>Total ordered triples $(a,b,c)$: $4^3 = 64$.</p><p>Count triples with $2b^2 &lt; ac$ (note $ac \le 16$, so $b=1$ or $b=2$ only):</p><ul><li>$b = 1$: need $ac &gt; 2$. All $16$ pairs except $ac = 1$ (i.e. $a=c=1$) and $ac=2$ (i.e. $(1,2),(2,1)$). Favourable $= 16 - 3 = 13$.</li><li>$b = 2$: need $ac &gt; 8$. Pairs with $ac \in \{9,12,16\}$: $(3,3),(3,4),(4,3),(4,4)$ give $9,12,12,16$; so $4$ pairs.</li></ul><p>Total favourable $= 13 + 4 = 17$.</p>$$P = \dfrac{17}{64},\qquad \gcd(17,64)=1 \Rightarrow m+n = 17 + 64 = 81.$$<p><strong>Answer:</strong> 81</p></div></details>

PYQ · 2026 4 Apr, Shift 2

For 10 observations $x_1, x_2, \ldots, x_{10}$, if $\displaystyle\sum_{i=1}^{10}\left(x_i + 2\right)^2 = 180$ and $\displaystyle\sum_{i=1}^{10}\left(x_i - 1\right)^2 = 90$, then their standard deviation is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $S = \sum x_i$ and $Q = \sum x_i^2$. Expanding:</p>$$\sum(x_i+2)^2 = Q + 4S + 40 = 180 \Rightarrow Q + 4S = 140,$$<p></p>$$\sum(x_i-1)^2 = Q - 2S + 10 = 90 \Rightarrow Q - 2S = 80.$$<p>Subtracting: $6S = 60 \Rightarrow S = 10$, hence $\bar{x} = 1$ and $Q = 80 + 2(10) = 100$.</p><p><strong>Variance:</strong></p>$$\sigma^2 = \dfrac{Q}{10} - \bar{x}^2 = \dfrac{100}{10} - 1 = 10 - 1 = 9 \Rightarrow \sigma = 3.$$<p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 4 Apr, Shift 2

From a month of 31 days, 3 different dates are selected at random. If the probability that these dates are in an increasing A.P. is equal to $\dfrac{a}{b}$, where $a, b \in \mathbb{N}$ and $\gcd(a, b) = 1$, then $a + b$ is equal to __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Total ways</strong> to choose $3$ dates from $31$:</p>$$\binom{31}{3} = 4495.$$<p><strong>Increasing A.P.</strong> $\{t, t+d, t+2d\}$ with $d \ge 1$ and $t + 2d \le 31$. For a fixed common difference $d$, the first term $t$ ranges over $1 \le t \le 31 - 2d$, giving $31 - 2d$ choices. Summing over $d = 1$ to $15$:</p>$$\sum_{d=1}^{15}(31 - 2d) = 29 + 27 + \cdots + 1 = 15^2 = 225.$$<p><strong>Probability:</strong></p>$$P = \dfrac{225}{4495} = \dfrac{45}{899}.$$<p>Since $\gcd(45,899)=1$ (as $899 = 29\cdot 31$):</p>$$a + b = 45 + 899 = 944.$$<p><strong>Answer:</strong> 944</p></div></details>

PYQ · 2026 2 Apr, Shift 2

A man throws a fair coin repeatedly. He gets 10 points for each head he throws and 5 points for each tail he throws. If the probability that he gets exactly 30 points is $\dfrac{m}{n}$, $\gcd(m, n) = 1$, then $m + n$ is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Each throw adds $5$ (tail) or $10$ (head), each with probability $\tfrac{1}{2}$. Work in units of $5$: the running total moves by $+1$ (tail) or $+2$ (head). We want the probability of the running total ever landing <strong>exactly</strong> on $30/5 = 6$.</p><p>Let $f(k)$ be the probability of ever hitting level $k$. To reach $k$, the last step comes either from $k-1$ (a tail) or from $k-2$ (a head):</p>$$f(k) = \tfrac{1}{2}\,f(k-1) + \tfrac{1}{2}\,f(k-2),$$<p>with $f(0) = 1$ and $f(1) = \tfrac{1}{2}$ (level $1$ is reached only by a first tail).</p>$$f(2) = \tfrac{1}{2}\!\left(\tfrac{1}{2}+1\right) = \tfrac{3}{4},\quad f(3) = \tfrac{1}{2}\!\left(\tfrac{3}{4}+\tfrac{1}{2}\right) = \tfrac{5}{8},$$<p></p>$$f(4) = \tfrac{1}{2}\!\left(\tfrac{5}{8}+\tfrac{3}{4}\right) = \tfrac{11}{16},\quad f(5) = \tfrac{1}{2}\!\left(\tfrac{11}{16}+\tfrac{5}{8}\right) = \tfrac{21}{32},$$<p></p>$$f(6) = \tfrac{1}{2}\!\left(\tfrac{21}{32}+\tfrac{11}{16}\right) = \tfrac{43}{64}.$$<p>So $P = \dfrac{43}{64}$, $\gcd(43,64)=1$:</p>$$m + n = 43 + 64 = 107.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 2 Apr, Shift 2

The mean and variance of $n$ observations are 8 and 16, respectively. If the sum of the first $(n-1)$ observations is 48 and the sum of squares of the first $(n-1)$ observations is 496, then the value of $n$ is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Mean $= 8 \Rightarrow \sum x_i = 8n$. Variance $= 16$:</p>$$\dfrac{\sum x_i^2}{n} - 8^2 = 16 \Rightarrow \sum x_i^2 = 80n.$$<p>The $n$-th observation:</p>$$x_n = 8n - 48.$$<p>Sum of squares:</p>$$496 + (8n - 48)^2 = 80n.$$<p>Expand: $(8n-48)^2 = 64n^2 - 768n + 2304$, so</p>$$64n^2 - 768n + 2304 + 496 = 80n$$<p></p>$$64n^2 - 848n + 2800 = 0 \Rightarrow 4n^2 - 53n + 175 = 0.$$<p></p>$$n = \dfrac{53 \pm \sqrt{2809 - 2800}}{8} = \dfrac{53 \pm 3}{8} \Rightarrow n = 7 \text{ or } n = \dfrac{50}{8}.$$<p>Only the integer is valid: $n = 7$.</p><p><strong>Answer:</strong> D</p></div></details>

PYQ · 2026 6 Apr, Shift 2

Let the mean and the variance of seven observations $2,4,\alpha,8,\beta,12,14$, $\alpha<\beta$, be 8 and 16 respectively. Then the quadratic equation whose roots are $3\alpha+2$ and $2\beta+1$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Mean $= 8$:</strong></p>$$2+4+\alpha+8+\beta+12+14 = 56 \Rightarrow \alpha + \beta = 16.$$<p><strong>Variance $= 16$:</strong> $\ \dfrac{\sum x_i^2}{7} - 64 = 16 \Rightarrow \sum x_i^2 = 560.$</p>$$4+16+\alpha^2+64+\beta^2+144+196 = 560 \Rightarrow \alpha^2 + \beta^2 = 136.$$<p>From $\alpha+\beta=16$: $\alpha^2+\beta^2 = 256 - 2\alpha\beta = 136 \Rightarrow \alpha\beta = 60.$
Roots of $t^2 - 16t + 60 = 0$ are $6$ and $10$. With $\alpha &lt; \beta$: $\alpha = 6,\ \beta = 10.$</p><p><strong>New roots:</strong></p>$$3\alpha + 2 = 20,\qquad 2\beta + 1 = 21.$$<p>Sum $= 41$, product $= 420$:</p>$$x^2 - 41x + 420 = 0.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 6 Apr, Shift 2

A bag contains 6 blue and 6 green balls. Pairs of balls are drawn without replacement until the bag is empty. The probability that each drawn pair consists of one blue and one green ball is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Treat the $12$ balls as distinct and count perfect matchings (unordered partitions into $6$ pairs), since the order of drawing pairs does not affect whether each pair is mixed.</p><p><strong>Total perfect matchings</strong> of $12$ distinct balls:</p>$$11!! = 11\cdot 9\cdot 7\cdot 5\cdot 3\cdot 1 = 10395.$$<p><strong>Favourable matchings</strong> — each pair one blue and one green — correspond to bijections between the $6$ blue and $6$ green balls:</p>$$6! = 720.$$<p><strong>Probability:</strong></p>$$P = \dfrac{720}{10395} = \dfrac{16}{231}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 1

A letter is known to have arrived by post either from KANPUR or from ANANTPUR. On the envelope just two consecutive letters AN are visible. The probability, that the letter came from ANANTPUR, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Each origin is equally likely a priori: $P(\text{KANPUR}) = P(\text{ANANTPUR}) = \tfrac{1}{2}$. Given a word, the two visible consecutive letters are one of its consecutive letter-pairs, chosen uniformly.</p><p><strong>KANPUR</strong> ($6$ letters $\Rightarrow 5$ consecutive pairs): KA, AN, NP, PU, UR. “AN” appears once, so $P(\text{AN}\mid \text{KANPUR}) = \tfrac{1}{5}.$</p><p><strong>ANANTPUR</strong> ($8$ letters $\Rightarrow 7$ pairs): AN, NA, AN, NT, TP, PU, UR. “AN” appears twice, so $P(\text{AN}\mid \text{ANANTPUR}) = \tfrac{2}{7}.$</p><p><strong>Bayes’ theorem:</strong></p>$$P(\text{ANANTPUR}\mid \text{AN}) = \dfrac{\tfrac{1}{2}\cdot \tfrac{2}{7}}{\tfrac{1}{2}\cdot \tfrac{1}{5} + \tfrac{1}{2}\cdot \tfrac{2}{7}} = \dfrac{\tfrac{2}{7}}{\tfrac{1}{5} + \tfrac{2}{7}} = \dfrac{\tfrac{2}{7}}{\tfrac{17}{35}} = \dfrac{10}{17}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 1

The mean deviation about the mean for the data with values $x_i = 5, 7, 9, 10, 12, 15$ and frequencies $f_i = 8, 6, 2, 2, 2, 6$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Total frequency:</strong> $N = 8+6+2+2+2+6 = 26.$</p><p><strong>Mean:</strong></p>$$\bar{x} = \dfrac{\sum f_i x_i}{N} = \dfrac{40 + 42 + 18 + 20 + 24 + 90}{26} = \dfrac{234}{26} = 9.$$<p><strong>Absolute deviations $|x_i - 9|$:</strong> $4, 2, 0, 1, 3, 6$, weighted by frequency:</p>$$\sum f_i |x_i - 9| = 8(4) + 6(2) + 2(0) + 2(1) + 2(3) + 6(6)$$<p></p>$$= 32 + 12 + 0 + 2 + 6 + 36 = 88.$$<p><strong>Mean deviation:</strong></p>$$\text{MD} = \dfrac{88}{26} = \dfrac{44}{13}.$$<p><strong>Answer:</strong> C</p></div></details>

PYQ · 2026 5 Apr, Shift 2

The probabilities that players A and B of a team are selected for the captaincy for a tournament are 0.6 and 0.4, respectively. If A is selected the captain, the probability that the team wins the tournament is 0.8 and if B is selected the captain, the probability that the team wins the tournament is 0.7. Then the probability, that the team wins the tournament, is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>By the total probability theorem:</p>$$P(\text{win}) = P(A)\,P(\text{win}\mid A) + P(B)\,P(\text{win}\mid B).$$<p></p>$$P(\text{win}) = (0.6)(0.8) + (0.4)(0.7) = 0.48 + 0.28 = 0.76.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 5 Apr, Shift 2

A variable X takes values $0, 0, 2, 6, 12, 20, \dots, n(n-1)$ with frequencies ${}^nC_0, {}^nC_1, {}^nC_2, {}^nC_3, {}^nC_4, {}^nC_5, \dots, {}^nC_n$, respectively. If the mean of this data is 60, then its median is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The $k$-th value is $k(k-1)$ with frequency $\binom{n}{k}$, for $k = 0,1,\ldots,n$.</p><p><strong>Total frequency:</strong> $\sum_{k=0}^{n}\binom{n}{k} = 2^n.$</p><p><strong>Weighted sum</strong> uses $\sum_{k=0}^{n} k(k-1)\binom{n}{k} = n(n-1)\,2^{n-2}$:</p>$$\bar{X} = \dfrac{n(n-1)\,2^{n-2}}{2^n} = \dfrac{n(n-1)}{4} = 60.$$<p></p>$$n(n-1) = 240 \Rightarrow n = 16.$$<p><strong>Median</strong> of $2^{16} = 65536$ observations: locate the $\big(\tfrac{N}{2}\big)$-th and $\big(\tfrac{N}{2}+1\big)$-th values, i.e. positions $32768$ and $32769$, using cumulative frequencies (values are increasing in $k$):</p>$$\text{cum through } k=7:\ 1+16+120+560+1820+4368+8008+11440 = 26333,$$<p></p>$$\text{cum through } k=8:\ 26333 + \binom{16}{8} = 26333 + 12870 = 39203.$$<p>Both positions $32768$ and $32769$ lie in the $k = 8$ group, whose value is $8\cdot 7 = 56$.</p>$$\text{Median} = 56.$$<p><strong>Answer:</strong> A</p></div></details>

PYQ · 2026 8 Apr, Shift 2

A candidate uses only one means of transportation out of bus, scooter and car. The probabilities of going by bus, scooter and car are $\frac{2}{5}$, $\frac{1}{5}$ and $\frac{2}{5}$. The probabilities of reaching late are $\frac{1}{5}$, $\frac{1}{3}$ and $\frac{1}{4}$ for bus, scooter and car respectively. Given that the candidate reached late, the probability that the candidate travelled by bus is :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p><strong>Bayes’ theorem.</strong> Let $Bu, Sc, Ca$ denote the travel modes and $L$ the event of being late.</p>$$P(Bu)P(L\mid Bu) = \dfrac{2}{5}\cdot \dfrac{1}{5} = \dfrac{2}{25},$$<p></p>$$P(Sc)P(L\mid Sc) = \dfrac{1}{5}\cdot \dfrac{1}{3} = \dfrac{1}{15},$$<p></p>$$P(Ca)P(L\mid Ca) = \dfrac{2}{5}\cdot \dfrac{1}{4} = \dfrac{1}{10}.$$<p>Common denominator $150$:</p>$$\dfrac{2}{25} = \dfrac{12}{150},\quad \dfrac{1}{15} = \dfrac{10}{150},\quad \dfrac{1}{10} = \dfrac{15}{150}.$$<p>Total $= \dfrac{12+10+15}{150} = \dfrac{37}{150}.$</p>$$P(Bu\mid L) = \dfrac{12/150}{37/150} = \dfrac{12}{37}.$$<p><strong>Answer:</strong> B</p></div></details>

PYQ · 2026 8 Apr, Shift 2

A set of four observations has mean 1 and variance 13. Another set of six observations has mean 2 and variance 1. Then, the variance of all these 10 observations is equal to :

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let the sets have sizes $n_1 = 4,\ n_2 = 6$, means $\bar{x}_1 = 1,\ \bar{x}_2 = 2$, variances $\sigma_1^2 = 13,\ \sigma_2^2 = 1$.</p><p><strong>Combined mean:</strong></p>$$\bar{x} = \dfrac{4(1) + 6(2)}{10} = \dfrac{16}{10} = \dfrac{8}{5} = 1.6.$$<p><strong>Combined variance</strong> (with $d_1 = \bar{x}_1 - \bar{x} = -0.6$, $d_2 = \bar{x}_2 - \bar{x} = 0.4$):</p>$$\sigma^2 = \dfrac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}.$$<p></p>$$= \dfrac{4(13 + 0.36) + 6(1 + 0.16)}{10} = \dfrac{4(13.36) + 6(1.16)}{10}$$<p></p>$$= \dfrac{53.44 + 6.96}{10} = \dfrac{60.4}{10} = 6.04.$$<p><strong>Answer:</strong> C</p></div></details>

From TestGuru · our mock-test platform

## You've read Statistics & Probability Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/statistics-probability/previous-year-questions/](https://jeenotes.in/mathematics/statistics-probability/previous-year-questions/) · raw HTML: `offline/mathematics/statistics-probability/previous-year-questions/index.html`_
