---
title: "Permutations & Combinations Previous Year Questions (JEE Main 2026)"
source: "https://jeenotes.in/mathematics/permutations-combinations/previous-year-questions/"
description: "Solved JEE Main 2026 previous year questions on Permutations and Combinations with concise, step-by-step KaTeX solutions covering onto/one-one functions, arrangements with restrictions, integer solutions, and selection problems."
updated: "2026-07-01"
reading_time: "7 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 9"
html: "../../../../offline/mathematics/permutations-combinations/previous-year-questions/index.html"
extracted: "2026-11-23"
---

> Solved JEE Main 2026 previous year questions on Permutations and Combinations with concise, step-by-step KaTeX solutions covering onto/one-one functions, arrangements with restrictions, integer solutions, and selection problems.

A curated set of Permutations & Combinations questions from JEE Main 2026, each worked out step by step so you can lock in the counting patterns the exam keeps repeating.

> Solutions are AI-generated and pending review.

PYQ · 2026 4 Apr, Shift 1

The number of functions $f: \{1, 2, 3, 4\} \to \{a, b, c\}$, which are not onto, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Total functions from a $4$-element set to a $3$-element set:</p>$$3^4 = 81.$$<p>Number of <strong>onto</strong> (surjective) functions is counted by inclusion–exclusion:</p>$$\sum_{i=0}^{3}(-1)^i \binom{3}{i}(3-i)^4 = 3^4 - 3\cdot 2^4 + 3\cdot 1^4 = 81 - 48 + 3 = 36.$$<p>Therefore the number of functions that are <strong>not</strong> onto:</p>$$81 - 36 = 45.$$<p><strong>Answer:</strong> B (45)</p></div></details>

PYQ · 2026 4 Apr, Shift 1

The number of ways, of forming a queue of 4 boys and 3 girls such that all the girls are not together, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Total arrangements of $7$ distinct people:</p>$$7! = 5040.$$<p>Count the arrangements where <strong>all 3 girls are together</strong>: treat the girls as one block, giving $5$ units to arrange, and the girls permute among themselves:</p>$$5! \times 3! = 120 \times 6 = 720.$$<p>“Girls not all together” is the complement:</p>$$5040 - 720 = 4320.$$<p><strong>Answer:</strong> D (4320)</p></div></details>

PYQ · 2026 6 Apr, Shift 1

The number of 4-letter words, with or without meaning, each consisting of two vowels and two consonants that can be formed from the letters of the word INCONSEQUENTIAL, without repeating any letter, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>List the <strong>distinct</strong> letters of INCONSEQUENTIAL.</p><ul><li>Distinct vowels: $A, E, I, O, U$ — that is $5$ vowels.</li><li>Distinct consonants: $C, L, N, Q, S, T$ — that is $6$ consonants.</li></ul><p>Since no letter may be repeated, choose $2$ distinct vowels and $2$ distinct consonants, then arrange all $4$ chosen letters:</p>$$\binom{5}{2}\binom{6}{2}\,4! = 10 \times 15 \times 24 = 3600.$$<p><strong>Answer:</strong> D (3600)</p></div></details>

PYQ · 2026 2 Apr, Shift 1

The number of seven-digit numbers, that can be formed by using the digits 1, 2, 3, 5 and 7 such that each digit is used at least once, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Each of the $7$ positions gets one of the $5$ digits, and every digit must appear at least once. This is the number of <strong>onto</strong> functions from $7$ positions onto $5$ digits (all digits are nonzero, so no leading-zero issue arises).</p><p>By inclusion–exclusion:</p>$$\sum_{i=0}^{5}(-1)^i \binom{5}{i}(5-i)^7.$$<p>Computing the terms:</p>$$5^7 - \binom{5}{1}4^7 + \binom{5}{2}3^7 - \binom{5}{3}2^7 + \binom{5}{4}1^7$$<p></p>$$= 78125 - 5(16384) + 10(2187) - 10(128) + 5(1)$$<p></p>$$= 78125 - 81920 + 21870 - 1280 + 5 = 16800.$$<p><strong>Answer:</strong> C (16800)</p></div></details>

PYQ · 2026 4 Apr, Shift 2

Let $A = \{(a, b, c) : a, b, c$ are non-negative integers and $a + b + 2c = 22\}$. Then $n(A)$ is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Fix $c$. Then $a + b = 22 - 2c$, and the number of non-negative integer pairs $(a, b)$ with a fixed sum $s = 22 - 2c$ is $s + 1$.</p><p>Since $a + b = 22 - 2c \ge 0$, we need $c = 0, 1, 2, \ldots, 11$. For each such $c$:</p>$$\text{count} = (22 - 2c) + 1 = 23 - 2c.$$<p>Summing over $c = 0$ to $11$:</p>$$\sum_{c=0}^{11}(23 - 2c) = 23 + 21 + 19 + \cdots + 1 = \sum_{k=1,\,3,\,\ldots}^{23} k.$$<p>This is the sum of the first $12$ odd numbers ($1, 3, \ldots, 23$):</p>$$12^2 = 144.$$<p><strong>Answer:</strong> C (144)</p></div></details>

PYQ · 2026 2 Apr, Shift 2

Let $p_n$ denote the total number of triangles formed by joining the vertices of an $n$-side regular polygon. If $P_{n+1} - P_n = 66$, then the sum of all distinct prime divisors of $n$ is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Triangles from the vertices of an $n$-gon are just choices of $3$ vertices:</p>$$P_n = \binom{n}{3}.$$<p>Then, using $\binom{n+1}{3} - \binom{n}{3} = \binom{n}{2}$ (Pascal’s identity):</p>$$P_{n+1} - P_n = \binom{n}{2} = \frac{n(n-1)}{2} = 66.$$<p>So $n(n-1) = 132 = 12 \times 11 \Rightarrow n = 12.$</p><p>The distinct prime divisors of $12 = 2^2 \cdot 3$ are $2$ and $3$, whose sum is:</p>$$2 + 3 = 5.$$<p><strong>Answer:</strong> C (5)</p></div></details>

PYQ · 2026 6 Apr, Shift 2

A building has ground floor and 10 more floors. Nine persons enter in a lift at the ground floor. The lift goes up to the $10^{\text{th}}$ floor. The number of ways, in which any 4 persons exit at a floor and the remaining 5 persons exit at a different floor, if the lift does not stop at the first and the second floors, is equal to:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>The lift does not stop at floors $1$ and $2$, so the available exit floors are $3, 4, \ldots, 10$, i.e. $8$ floors.</p><ul><li>Choose <strong>which 4</strong> of the $9$ persons form the group that leaves together: $\binom{9}{4}$. The remaining $5$ are automatically the other group.</li><li>Assign floors: the group of $4$ and the group of $5$ leave at <strong>two different</strong> floors. Pick an ordered pair of distinct floors (one for each distinguishable group): $8 \times 7 = 56$.</li></ul>$$\binom{9}{4}\times 8 \times 7 = 126 \times 56 = 7056.$$<p><strong>Answer:</strong> C (7056)</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Let $A = \{1, 2, 3, 4, 5, 6\}$. The number of one-one functions $f : A \to A$ such that $f(1) \geq 3$, $f(3) \leq 4$ and $f(2) + f(3) = 5$, is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>First handle the constraint $f(2) + f(3) = 5$ with $f(3) \le 4$ and $f(2), f(3)$ distinct (injective). The valid pairs $\big(f(3), f(2)\big)$ are:</p>$$(1,4),\ (2,3),\ (3,2),\ (4,1) \quad\text{— } 4 \text{ pairs.}$$<p>For each fixed pair, two of the six output values are used up. Now count:</p><ul><li>$f(1) \ge 3$: choose $f(1)$ from the values in $\{3,4,5,6\}$ still available (i.e. not already taken by $f(2), f(3)$).</li><li>The remaining $3$ values fill positions $4, 5, 6$ in $3! = 6$ ways.</li></ul><p>Checking each pair, exactly $3$ of the values $\{3,4,5,6\}$ remain free for $f(1)$ (one of them is always consumed by $f(2)$ or $f(3)$). So each pair contributes:</p>$$3 \times 3! = 3 \times 6 = 18.$$<p>Total over the $4$ pairs:</p>$$4 \times 18 = 72.$$<p><strong>Answer:</strong> 72</p></div></details>

PYQ · 2026 5 Apr, Shift 1

Two players A and B play a series of games of badminton. The player, who wins 5 games first, wins the series. Assuming that no game ends in a draw, the number of ways, in which player A wins the series is __________.

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>A wins the series on the $k$-th game, where the $k$-th game is A’s $5$-th win. So A must win exactly $4$ of the first $k-1$ games (and lose the rest), then win game $k$. Here $k$ ranges from $5$ to $9$.</p><p>The number of winning sequences is:</p>$$\sum_{k=5}^{9}\binom{k-1}{4} = \binom{4}{4} + \binom{5}{4} + \binom{6}{4} + \binom{7}{4} + \binom{8}{4}.$$

$$= 1 + 5 + 15 + 35 + 70 = 126.$$<p><strong>Answer:</strong> 126</p></div></details>

PYQ · 2026 5 Apr, Shift 2

A box contains 5 blue, 6 yellow and 4 red balls. The number of ways, of drawing 8 balls containing at least two balls of each colour, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Let $b, y, r$ be the numbers of blue, yellow, red balls drawn, with</p>$$b + y + r = 8,\quad 2 \le b \le 5,\ 2 \le y \le 6,\ 2 \le r \le 4.$$<p>Since the balls of a colour are distinguishable, the number of selections for a given $(b, y, r)$ is $\binom{5}{b}\binom{6}{y}\binom{4}{r}$.</p><p>Enumerating the valid triples (with $b + y + r = 8$):</p>$$\sum \binom{5}{b}\binom{6}{y}\binom{4}{r} = 4100.$$<p>For example the leading contributions include $(2,4,2)$, $(2,2,4)$, $(4,2,2)$, $(3,3,2)$, etc.; summing all admissible cases gives $4100$.</p><p><strong>Answer:</strong> A (4100)</p></div></details>

PYQ · 2026 8 Apr, Shift 2

A person has three different bags and four different books. The number of ways, in which he can put these books in the bags so that no bag is empty, is:

<details class="solution"><p>**Solution / Answer**</p><summary class="solution-summary"><span class="solution-btn">Show solution</span></summary><div class="solution-body"><p>Each of the $4$ distinct books goes into one of the $3$ distinct bags, and every bag must receive at least one book. This is the number of <strong>onto</strong> functions from $4$ books to $3$ bags.</p><p>By inclusion–exclusion:</p>$$\sum_{i=0}^{3}(-1)^i \binom{3}{i}(3-i)^4 = 3^4 - 3\cdot 2^4 + 3\cdot 1^4 = 81 - 48 + 3 = 36.$$<p><strong>Answer:</strong> B (36)</p></div></details>

From TestGuru · our mock-test platform

## You've read Permutations & Combinations Previous Year Questions (JEE Main 2026).You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=permutations-combinations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fpermutations-combinations%2Fprevious-year-questions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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

_Source: [https://jeenotes.in/mathematics/permutations-combinations/previous-year-questions/](https://jeenotes.in/mathematics/permutations-combinations/previous-year-questions/) · raw HTML: `offline/mathematics/permutations-combinations/previous-year-questions/index.html`_
