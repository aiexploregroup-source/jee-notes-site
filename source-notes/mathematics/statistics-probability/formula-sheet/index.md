---
title: "Statistics and Probability Formula Sheet"
source: "https://jeenotes.in/mathematics/statistics-probability/formula-sheet/"
description: "All key Statistics and Probability formulas — mean, median, mode, variance, probability axioms, Bayes' theorem, random variables, binomial & Poisson — for JEE quick revision."
updated: "2026-07-01"
reading_time: "9 min read"
breadcrumb: "Mathematics"
position: "/ Topic 10 of 10"
html: "../../../../offline/mathematics/statistics-probability/formula-sheet/index.html"
extracted: "2026-11-23"
---

> All key Statistics and Probability formulas — mean, median, mode, variance, probability axioms, Bayes' theorem, random variables, binomial & Poisson — for JEE quick revision.

Every must-know Statistics and Probability result in one scannable place — central tendency, dispersion, probability axioms, conditional probability, Bayes’ theorem, random variables, and the binomial and Poisson distributions. Use this for last-minute JEE Main and Advanced revision.

## Measures of Central Tendency

### Mean

$$\boxed{\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n} = \frac{\sum f_i x_i}{\sum f_i} = \frac{\sum f_i x_i}{N}}$$

| Data type | Mean formula |
| --- | --- |
| Ungrouped | $\bar{x} = \dfrac{\sum x_i}{n}$ |
| Grouped (discrete) | $\bar{x} = \dfrac{\sum f_i x_i}{N}$ |
| Grouped (continuous) | $\bar{x} = \dfrac{\sum f_i m_i}{\sum f_i}$, $m_i$ = class midpoint |
| Combined mean | $\bar{x} = \dfrac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}$ |

**Key property:** $\sum (x_i - \bar{x}) = 0$ (sum of deviations from mean is zero).

### Median

| Case | Median |
| --- | --- |
| Ungrouped, $n$ odd | $x_{\frac{n+1}{2}}$ |
| Ungrouped, $n$ even | $\dfrac{x_{\frac{n}{2}} + x_{\frac{n}{2}+1}}{2}$ |
| Grouped | $L + \left(\dfrac{\frac{N}{2} - CF}{f}\right) \times h$ |

where $L$ = lower boundary of median class, $CF$ = cumulative frequency before median class, $f$ = frequency of median class, $h$ = class width. Median class: where cumulative frequency $\geq \frac{N}{2}$.

### Mode

**Grouped data:**

$$\boxed{\text{Mode} = L + \left(\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right) \times h}$$

where $f_1$ = modal class frequency, $f_0$ = frequency of class before, $f_2$ = frequency of class after.

### Empirical Relationship

$$\text{Mode} = 3 \times \text{Median} - 2 \times \text{Mean}$$

> **★ Key point · Transformation rules for the mean**
>
> Add a constant $k$ to every value → mean increases by $k$. Multiply every value by $k$ → mean is multiplied by $k$. For symmetric data, Mean = Median = Mode.

## Measures of Dispersion

### Range and Quartile Deviation

| Measure | Formula |
| --- | --- |
| Range | $R = x_{\max} - x_{\min}$ |
| Quartile Deviation | $QD = \dfrac{Q_3 - Q_1}{2}$ |
| Coefficient of QD | $\dfrac{Q_3 - Q_1}{Q_3 + Q_1}$ |

**Quartiles (ungrouped, $n$ ordered values):** $Q_1 = \left(\frac{n+1}{4}\right)^{th}$ term, $\;Q_2 = $ median $= \left(\frac{n+1}{2}\right)^{th}$ term, $\;Q_3 = 3\left(\frac{n+1}{4}\right)^{th}$ term.

**Quartiles (grouped):**

$$Q_1 = L + \left(\frac{\frac{N}{4} - CF}{f}\right) \times h, \qquad Q_3 = L + \left(\frac{\frac{3N}{4} - CF}{f}\right) \times h$$

### Mean Absolute Deviation

$$\text{MAD} = \frac{1}{n}\sum_{i=1}^{n}|x_i - \bar{x}| \qquad \text{(from mean)}; \qquad \text{MAD} = \frac{\sum f_i|x_i - \bar{x}|}{\sum f_i} \quad \text{(grouped)}$$

Can also be taken about the median: $\dfrac{1}{n}\sum |x_i - M|$.

### Variance and Standard Deviation

$$\boxed{\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2 = \frac{\sum x_i^2}{n} - (\bar{x})^2}$$

$$\boxed{\sigma = \sqrt{\sigma^2}}$$

| Measure | Formula | Units |
| --- | --- | --- |
| Population variance | $\sigma^2 = \dfrac{\sum x_i^2}{n} - (\bar{x})^2$ | Squared |
| Grouped variance | $\sigma^2 = \dfrac{\sum f_i x_i^2}{\sum f_i} - \left(\dfrac{\sum f_i x_i}{\sum f_i}\right)^2$ | Squared |
| Sample variance | $s^2 = \dfrac{1}{n-1}\sum (x_i - \bar{x})^2$ | Squared |
| Standard deviation | $\sigma = \sqrt{\text{Variance}}$ | Same as data |

### Coefficient of Variation

$$CV = \frac{\sigma}{\bar{x}} \times 100\%$$

Lower CV → more consistent; higher CV → more variable. Used to compare datasets with different units or means.

### Combined Variance

$$\sigma^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}$$

where $d_1 = \bar{x}_1 - \bar{x}$, $d_2 = \bar{x}_2 - \bar{x}$, and $\bar{x}$ is the combined mean.

> **⚠ Trap · Transformation rules for variance and SD**
>
> $\text{Var}(X + k) = \text{Var}(X)$ — adding a constant does **not** change spread. $\text{Var}(kX) = k^2\,\text{Var}(X)$ and $\text{SD}(kX) = |k|\,\text{SD}(X)$. Variance about the mean is the minimum: $\text{Var about } a = \sigma^2 + (\bar{x} - a)^2$.

## Probability Basics

### Classical Probability and Axioms

$$\boxed{P(E) = \frac{n(E)}{n(S)} = \frac{\text{favorable outcomes}}{\text{total outcomes}}}$$

(valid for equally likely outcomes only)

**Kolmogorov’s axioms:** $P(E) \geq 0$; $\;P(S) = 1$; for mutually exclusive $E_1, E_2, \ldots$: $P(E_1 \cup E_2 \cup \cdots) = P(E_1) + P(E_2) + \cdots$

### Key Properties

| Property | Relation |
| --- | --- |
| Range | $0 \leq P(E) \leq 1$ |
| Impossible event | $P(\emptyset) = 0$ |
| Certain event | $P(S) = 1$ |
| Complement | $P(A') = 1 - P(A)$ |
| Subset | $A \subseteq B \Rightarrow P(A) \leq P(B)$ |
| Difference | $P(A - B) = P(A) - P(A \cap B)$ |

### Addition Theorem

$$\boxed{P(A \cup B) = P(A) + P(B) - P(A \cap B)}$$

Mutually exclusive ($A \cap B = \emptyset$): $\;P(A \cup B) = P(A) + P(B)$

Three events:

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$$

**Bounds (Boole / Fréchet):** $P(A) + P(B) - 1 \leq P(A \cap B) \leq \min\{P(A), P(B)\}$.

### Common Sample Space Sizes

| Experiment | $n(S)$ |
| --- | --- |
| $n$ coins | $2^n$ |
| $1$ die | $6$ |
| $2$ dice | $36$ |
| $n$ dice | $6^n$ |
| $1$ card | $52$ |
| Drawing $r$ from $n$ | $\binom{n}{r}$ |
| Arranging $r$ from $n$ | $P(n,r)$ |

## Conditional Probability and Independence

$$\boxed{P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0}$$

### Multiplication Theorem

$$P(A \cap B) = P(B)\,P(A|B) = P(A)\,P(B|A)$$

$$P(A \cap B \cap C) = P(A)\,P(B|A)\,P(C|A \cap B)$$

$$P(A_1 \cap A_2 \cap \cdots \cap A_n) = P(A_1)\,P(A_2|A_1)\,P(A_3|A_1 \cap A_2)\cdots$$

### Independence

Events $A$ and $B$ are independent if **any one** holds:

$$P(A \cap B) = P(A)\,P(B), \qquad P(A|B) = P(A), \qquad P(B|A) = P(B)$$

### Properties of Conditional Probability

| Property | Relation |
| --- | --- |
| Range | $0 \leq P(A |
| Certain / impossible | $P(S |
| Complement | $P(A' |
| Addition | $P(A_1 \cup A_2 |
| If $A \subseteq B$ | $P(A |
| If $B \subseteq A$ | $P(A |

> **⚠ Trap · Mutually exclusive is NOT independent**
>
> If $A \cap B = \emptyset$ and both have non-zero probability, they **cannot** be independent: $P(A \cap B) = 0$ but $P(A)\,P(B) \neq 0$. Also $P(A|B) \neq P(B|A)$ in general.

## Total Probability and Bayes’ Theorem

A **partition** $B_1, B_2, \ldots, B_n$ of $S$ is mutually exclusive ($B_i \cap B_j = \emptyset$), exhaustive ($\bigcup B_i = S$), with $P(B_i) > 0$.

### Law of Total Probability

$$\boxed{P(A) = \sum_{i=1}^{n} P(B_i)\,P(A|B_i)}$$

Two-event form: $\;P(A) = P(B)\,P(A|B) + P(B')\,P(A|B')$

### Bayes’ Theorem

$$\boxed{P(B_i|A) = \frac{P(B_i)\,P(A|B_i)}{\sum_{j} P(B_j)\,P(A|B_j)}}$$

Two-event form:

$$P(B|A) = \frac{P(B)\,P(A|B)}{P(B)\,P(A|B) + P(B')\,P(A|B')}$$

Odds form: $\;\dfrac{P(B|A)}{P(B'|A)} = \dfrac{P(B)}{P(B')} \times \dfrac{P(A|B)}{P(A|B')}$ (posterior odds = prior odds × likelihood ratio).

| Term | Meaning |
| --- | --- |
| $P(B)$ | Prior probability (before evidence) |
| $P(A | B)$ |
| $P(B | A)$ |
| $P(A)$ | Marginal probability of evidence |

> **★ Key point · Bayes workflow**
>
> Step 1: compute $P(A)$ by total probability. Step 2: apply Bayes. Remember the prior (base rate) $P(B)$ dominates for rare events — a strong test on a rare condition can still give a small posterior.

```mermaid
graph LR
    A[Forward known: P A given B] --> C[Total Probability: P A]
    C --> D[Bayes flips it: P B given A]
```

## Random Variables

A random variable is a function $X: S \to \mathbb{R}$.

### Discrete Random Variable

| Quantity | Formula |
| --- | --- |
| PMF | $P(X = x_i) = p_i$, with $0 \leq p_i \leq 1$, $\sum p_i = 1$ |
| CDF | $F(x) = P(X \leq x) = \sum_{x_i \leq x} p_i$ |
| Expectation | $E(X) = \mu = \sum x_i\, P(X = x_i)$ |
| Variance | $\text{Var}(X) = E(X^2) - [E(X)]^2 = \sum (x_i - \mu)^2 P(X = x_i)$ |

$$\boxed{\text{Var}(X) = E(X^2) - [E(X)]^2}$$

### Continuous Random Variable

| Quantity | Formula |
| --- | --- |
| PDF | $f(x) \geq 0$, $\;\int_{-\infty}^{\infty} f(x)\,dx = 1$ |
| Interval probability | $P(a \leq X \leq b) = \int_a^b f(x)\,dx$ |
| CDF | $F(x) = \int_{-\infty}^{x} f(t)\,dt$ |
| PDF from CDF | $f(x) = \dfrac{d}{dx}F(x)$ |
| Expectation | $E(X) = \int_{-\infty}^{\infty} x\,f(x)\,dx$ |
| $E(g(X))$ | $\int_{-\infty}^{\infty} g(x)\,f(x)\,dx$ |
| Variance | $\text{Var}(X) = \int_{-\infty}^{\infty} x^2 f(x)\,dx - \mu^2$ |

For a continuous RV, $P(X = a) = 0$.

### CDF Properties

$0 \leq F(x) \leq 1$; $\;F$ is non-decreasing; $\;\lim_{x \to -\infty} F(x) = 0$, $\;\lim_{x \to \infty} F(x) = 1$; $\;P(a < X \leq b) = F(b) - F(a)$.

### Expectation and Variance Properties

| Property | Relation |
| --- | --- |
| Linearity | $E(aX + b) = aE(X) + b$ |
| Sum (always) | $E(X + Y) = E(X) + E(Y)$ |
| Product (if independent) | $E(XY) = E(X)\,E(Y)$ |
| Variance shift | $\text{Var}(X + b) = \text{Var}(X)$ |
| Variance scale | $\text{Var}(aX + b) = a^2\,\text{Var}(X)$ |
| Variance of sum (if independent) | $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ |
| Constant | $E(c) = c$, $\;\text{Var}(c) = 0$ |

## Bernoulli Trials

A Bernoulli trial has two outcomes — success ($p$) and failure ($q = 1 - p$). Conditions (**TFII**): Two outcomes, Fixed $p$, Independent, Identical.

### Single Bernoulli Trial

$$P(X = x) = p^x (1-p)^{1-x}, \quad x \in \{0, 1\}; \qquad E(X) = p, \quad \text{Var}(X) = pq$$

### Sequences and Counts

| Quantity | Formula |
| --- | --- |
| Specific sequence ($r$ successes, $n-r$ failures) | $p^r q^{n-r}$ |
| Exactly $r$ successes (any order) | $\binom{n}{r} p^r q^{n-r}$ |
| At least $r$ successes | $\sum_{k=r}^{n} \binom{n}{k} p^k q^{n-k} = 1 - P(X \leq r-1)$ |
| At most $r$ successes | $\sum_{k=0}^{r} \binom{n}{k} p^k q^{n-k}$ |

### Geometric Distribution

$$P(\text{first success on trial } k) = (1-p)^{k-1}\, p; \qquad E(k) = \frac{1}{p}$$

### Negative Binomial Distribution

$$P(\text{$r$-th success on trial } k) = \binom{k-1}{r-1} p^r q^{k-r}$$

> **★ Key point · Advanced Bernoulli result**
>
> In $n$ Bernoulli trials, $P(\text{even number of successes}) = \dfrac{1 + (1-2p)^n}{2}$.

## Binomial Distribution

For $X \sim B(n, p)$, where $X$ = number of successes in $n$ trials:

$$\boxed{P(X = r) = \binom{n}{r} p^r (1-p)^{n-r} = \binom{n}{r} p^r q^{n-r}}$$

Conditions (**BINS**): Binary outcomes, Independent trials, Number fixed, Same probability.

| Quantity | Formula |
| --- | --- |
| Mean | $E(X) = np$ |
| Variance | $\text{Var}(X) = npq = np(1-p)$ |
| Standard deviation | $\sigma = \sqrt{npq}$ |

**Properties:**

- $\sum_{r=0}^{n} P(X = r) = 1$ (from $(p+q)^n = 1$).
- Mode: if $(n+1)p$ is an integer, modes are $(n+1)p$ and $(n+1)p - 1$; otherwise $\lfloor (n+1)p \rfloor$.
- Symmetric if $p = 0.5$; right-skewed if $p < 0.5$; left-skewed if $p > 0.5$.
- Additivity: $X_1 \sim B(n_1, p)$, $X_2 \sim B(n_2, p)$ independent $\Rightarrow X_1 + X_2 \sim B(n_1 + n_2, p)$.

## Poisson Distribution

For $X \sim \text{Poisson}(\lambda)$, modeling rare events at constant average rate $\lambda$:

$$\boxed{P(X = r) = \frac{e^{-\lambda}\,\lambda^r}{r!}, \quad r = 0, 1, 2, \ldots}$$

| Quantity | Formula |
| --- | --- |
| Mean | $E(X) = \lambda$ |
| Variance | $\text{Var}(X) = \lambda$ |
| Standard deviation | $\sigma = \sqrt{\lambda}$ |

**Properties:**

- Mean = Variance = $\lambda$ (unique to Poisson).
- Mode: if $\lambda$ is an integer, modes are $\lambda$ and $\lambda - 1$; otherwise $\lfloor \lambda \rfloor$.
- Additivity: $X_1 \sim P(\lambda_1)$, $X_2 \sim P(\lambda_2)$ independent $\Rightarrow X_1 + X_2 \sim P(\lambda_1 + \lambda_2)$.

### Poisson Approximation to Binomial

$$X \sim B(n, p) \approx \text{Poisson}(\lambda = np) \quad \text{as } n \to \infty,\; p \to 0$$

Rule of thumb: use when $n \geq 20$, $p \leq 0.05$, and $np < 5$.

> **⚠ Trap · Rate scaling for Poisson**
>
> $\lambda$ scales with the interval. If the rate is $2$ per minute and you want the probability over $2$ minutes, use $\lambda = 4$; over $30$ seconds, use $\lambda = 1$.

## Binomial vs Poisson — Quick Comparison

| Feature | Binomial | Poisson |
| --- | --- | --- |
| Setup | Fixed $n$ trials | Events in an interval |
| Parameters | $n, p$ | $\lambda$ |
| Range | $0, 1, \ldots, n$ | $0, 1, 2, \ldots$ (infinite) |
| Mean | $np$ | $\lambda$ |
| Variance | $npq$ | $\lambda$ |
| PMF | $\binom{n}{r} p^r q^{n-r}$ | $\dfrac{e^{-\lambda}\lambda^r}{r!}$ |
| Use when | Independent fixed trials | Rare events, constant rate |

## Special Values

$$e \approx 2.71828, \qquad 0! = 1, \qquad \binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{r} = \frac{n!}{r!(n-r)!}$$

> **★ Key point · Last-minute reminders**
>
> Variance: “mean of squares minus square of mean.” For “at least $r$,” use the complement $1 - P(X \leq r-1)$. $P(A|B) \neq P(B|A)$. For continuous RVs, $P(X = a) = 0$. Always verify a PMF sums to $1$ and a PDF integrates to $1$.

From TestGuru · our mock-test platform

## You've read Statistics and Probability Formula Sheet.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fformula-sheet%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-14

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/formula-sheet/",this.page.identifier="/mathematics/statistics-probability/formula-sheet/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-15

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/formula-sheet/](https://jeenotes.in/mathematics/statistics-probability/formula-sheet/) · raw HTML: `offline/mathematics/statistics-probability/formula-sheet/index.html`_
