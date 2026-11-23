---
title: "Probability Distributions"
source: "https://jeenotes.in/mathematics/statistics-probability/probability-distributions/"
description: "Master Binomial and Poisson distributions for JEE - From coin tosses to rare events and exam predictions"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 10"
html: "../../../../offline/mathematics/statistics-probability/probability-distributions/index.html"
extracted: "2026-11-23"
---

> Master Binomial and Poisson distributions for JEE - From coin tosses to rare events and exam predictions

# Probability Distributions

## The Free Throw Challenge

A basketball player makes 80% of free throws. What’s the probability she makes exactly 7 out of 10 attempts? At least 8?

This isn’t just a random question—it follows the **Binomial Distribution**, one of the most important probability distributions! Understanding distributions lets you model exams (how many questions will you get right?), defects in manufacturing, meteor strikes, and even radioactive decay!

---

## What is a Probability Distribution?

A **probability distribution** describes how probabilities are distributed over the values of a random variable.

### Why Study Standard Distributions?

Many real-world scenarios follow the same patterns:

- **Coin tosses, exam questions** → Binomial
- **Rare events (earthquakes, typos)** → Poisson
- **Measurements (height, IQ)** → Normal (not in JEE syllabus but good to know)

Instead of calculating from scratch each time, we use **standard formulas**!

---

## Binomial Distribution

### The Setup

**Binomial experiment** has these properties:

Binomial Conditions (BINS)

1. **B**inary outcomes: Each trial has only 2 outcomes (success/failure, yes/no, heads/tails)
2. **I**ndependent trials: Trials don’t affect each other
3. **N**umber fixed: Number of trials n is fixed in advance
4. **S**ame probability: Probability of success p is same for each trial

**Mnemonic**: **BINS** - Binary, Independent, Number fixed, Same probability

**Examples**:

- Tossing coin 10 times (n=10, p=0.5)
- 20 multiple choice questions with random guessing (n=20, p=0.25 if 4 choices)
- Testing 100 products (n=100, p=defect rate)

**Not Binomial**:

- Drawing cards without replacement (not independent)
- Variable number of trials
- Probability changes between trials

---

### Binomial Distribution Formula

Let X = number of successes in n trials

Binomial Distribution

$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r} = \binom{n}{r} p^r q^{n-r}$$

where:

- $n$ = number of trials
- $r$ = number of successes (0, 1, 2, &mldr;, n)
- $p$ = probability of success on each trial
- $q = 1 - p$ = probability of failure
- $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ = number of ways to arrange r successes

**Notation**: $X \sim B(n, p)$ or $X \sim \text{Binomial}(n, p)$

### Understanding the Formula

**Three parts**:

1. $\binom{n}{r}$ - In how many ways can r successes occur among n trials?
2. $p^r$ - Probability of r successes
3. $q^{n-r}$ - Probability of (n-r) failures

**Example**: 3 heads in 5 tosses

- Ways to arrange HHH__ = $\binom{5}{3} = 10$
- Probability of specific sequence (e.g., HHHTT) = $(0.5)^3 (0.5)^2 = (0.5)^5$
- Total: $10 \times (0.5)^5 = 10/32 = 5/16$

---

### Mean and Variance of Binomial

Binomial Mean and Variance

**Mean (Expected Value)**:

$$E(X) = \mu = np$$

**Variance**:

$$\text{Var}(X) = \sigma^2 = npq = np(1-p)$$

**Standard Deviation**:

$$\sigma = \sqrt{npq}$$

**Intuition**:

- If p=0.5 and n=100, expect 50 successes on average
- Variance is maximum when p=0.5 (most uncertain)

---

### Properties of Binomial Distribution

Binomial Properties

1. **Range**: X can take values 0, 1, 2, &mldr;, n
2. **Symmetry**:

   - If p = 0.5, distribution is symmetric
   - If p < 0.5, skewed right (tail toward higher values)
   - If p > 0.5, skewed left
3. **Sum of probabilities**:

   $$\sum_{r=0}^{n} P(X = r) = 1$$

   (This comes from binomial theorem: $(p+q)^n = 1^n = 1$)
4. **Mode** (most likely value):

   - If (n+1)p is integer: modes are (n+1)p and (n+1)p - 1
   - Otherwise: mode = floor[(n+1)p]
5. **Sum of binomials**: If $X_1 \sim B(n_1, p)$ and $X_2 \sim B(n_2, p)$ are independent,

   $$X_1 + X_2 \sim B(n_1 + n_2, p)$$

---

## Poisson Distribution

### The Setup

**Poisson distribution** models the number of rare events occurring in a fixed interval of time or space.

Poisson Conditions

1. Events occur **randomly** and **independently**
2. Events occur at a **constant average rate** λ (lambda)
3. Two events cannot occur at **exactly the same instant**
4. The number of events in disjoint intervals are **independent**

**Examples**:

- Number of typos per page (λ = 2 per page)
- Number of calls to a help desk per hour (λ = 15 per hour)
- Number of meteors hitting Earth per year
- Number of students arriving at library per minute
- Number of goals in a football match

**Not Poisson**:

- If events are clustered (not random)
- If rate changes over time
- If events affect each other

---

### Poisson Distribution Formula

Let X = number of events in the interval

Poisson Distribution

$$P(X = r) = \frac{e^{-\lambda} \lambda^r}{r!}, \quad r = 0, 1, 2, 3, ...$$

where:

- $\lambda$ (lambda) = average number of events in the interval
- $e \approx 2.71828$ (Euler’s number)
- $r$ = actual number of events (0, 1, 2, 3, &mldr;)

**Notation**: $X \sim \text{Poisson}(\lambda)$ or $X \sim P(\lambda)$

### Understanding the Formula

- $e^{-\lambda}$ - Normalizing constant (ensures probabilities sum to 1)
- $\lambda^r$ - Higher λ → more likely to get higher r
- $r!$ - Divides to account for arrangements

---

### Mean and Variance of Poisson

Poisson Mean and Variance

**Mean**:

$$E(X) = \mu = \lambda$$

**Variance**:

$$\text{Var}(X) = \sigma^2 = \lambda$$

**Standard Deviation**:

$$\sigma = \sqrt{\lambda}$$

**Key property**: Mean = Variance (unique to Poisson!)

---

### Properties of Poisson Distribution

Poisson Properties

1. **Range**: X can take values 0, 1, 2, 3, &mldr; (infinite, but probabilities get very small)
2. **Sum of probabilities**:

   $$\sum_{r=0}^{\infty} P(X = r) = 1$$
3. **Mode**:

   - If λ is integer: modes are λ and λ-1
   - Otherwise: mode = floor[λ]
4. **Additivity**: If $X_1 \sim P(\lambda_1)$ and $X_2 \sim P(\lambda_2)$ are independent,

   $$X_1 + X_2 \sim P(\lambda_1 + \lambda_2)$$
5. **Limiting case**: Binomial(n, p) → Poisson(λ) as n → ∞, p → 0, with np = λ
   (When n is large, p is small, use Poisson to approximate Binomial!)

---

### Poisson as Approximation to Binomial

When n is large (n > 20) and p is small (p < 0.05), Binomial is hard to compute. Use Poisson!

Poisson Approximation to Binomial

If $X \sim B(n, p)$ with large n and small p:

$$X \approx \text{Poisson}(\lambda = np)$$

**Rule of thumb**: Use when n ≥ 20, p ≤ 0.05, and np < 5

**Example**: Defect rate is 0.2%. In batch of 1000, probability of exactly 3 defects?

- Exact: $\binom{1000}{3} (0.002)^3 (0.998)^{997}$ (very hard!)
- Poisson: λ = 1000 × 0.002 = 2, so $P(X=3) = \frac{e^{-2} \cdot 2^3}{3!}$ (easy!)

---

## Interactive Visualization

---

## Memory Tricks

Memory Tricks

### Binomial

1. **“BINS” for conditions**: Binary, Independent, Number fixed, Same probability
2. **Formula**: “Choose-Power-Power”

   - **Choose** r from n: $\binom{n}{r}$
   - **Power** of p: $p^r$
   - **Power** of q: $q^{n-r}$
3. **Mean = n × p**: “If you try n times with probability p, expect np successes”
4. **Variance = npq**: “Add q to mean formula and multiply”

### Poisson

1. **“Rare events, Poisson appears”**
2. **Formula**: “e-Power-Factorial”

   - **e** to the -λ: $e^{-\lambda}$
   - **Power** of λ: $\lambda^r$
   - **Factorial**: $r!$
3. **Mean = Variance = λ**: Only distribution where these are equal!
4. **Lambda is everything**: Just need one parameter λ

### Comparison

- **Binomial**: n trials, count successes
- **Poisson**: time/space interval, count rare events
- **Approximation**: Big n, small p → Use Poisson (easier!)

---

## Common Mistakes to Avoid

Common Mistakes

1. **Using Binomial when trials aren’t independent**: E.g., drawing without replacement
2. **Confusing n and r**: n = total trials, r = number of successes
3. **Forgetting $\binom{n}{r}$**: Can’t just do $p^r q^{n-r}$
4. **Wrong probability**: “At least r” means P(X ≥ r) = 1 - P(X < r) = 1 - P(X ≤ r-1)
5. **Poisson with changing rate**: λ must be constant over interval
6. **Wrong λ**: If given rate per hour, but want probability for 2 hours, λ doubles!
7. **Calculation errors**: $e^{-\lambda}$ is very small for large λ—use calculator/tables
8. **Using Binomial formula when Poisson is easier**: If n > 20 and p < 0.05, try Poisson

---

## Solved Examples

### Example 1: Basic Binomial (Fair Coin)

**Problem**: A fair coin is tossed 6 times. Find probability of:
(a) Exactly 4 heads
(b) At least 5 heads

**Solution**:

$X \sim B(6, 0.5)$, where X = number of heads

**(a) Exactly 4 heads**:

$$P(X = 4) = \binom{6}{4} (0.5)^4 (0.5)^2 = \frac{6!}{4!2!} \cdot (0.5)^6 = 15 \times \frac{1}{64} = \frac{15}{64}$$

**(b) At least 5 heads**: P(X ≥ 5) = P(X = 5) + P(X = 6)

$$P(X = 5) = \binom{6}{5} (0.5)^6 = 6 \times \frac{1}{64} = \frac{6}{64}$$

$$P(X = 6) = \binom{6}{6} (0.5)^6 = 1 \times \frac{1}{64} = \frac{1}{64}$$

$$P(X \geq 5) = \frac{6 + 1}{64} = \frac{7}{64}$$

---

### Example 2: Binomial Mean and Variance

**Problem**: A biased coin shows heads with probability 0.6. It’s tossed 50 times. Find:
(a) Expected number of heads
(b) Variance
(c) Probability of getting exactly 30 heads

**Solution**:

$X \sim B(50, 0.6)$

**(a) Mean**:

$$E(X) = np = 50 \times 0.6 = 30$$

**(b) Variance**:

$$\text{Var}(X) = npq = 50 \times 0.6 \times 0.4 = 12$$

**(c) P(X = 30)**:

$$P(X = 30) = \binom{50}{30} (0.6)^{30} (0.4)^{20}$$

(This requires calculator/software: P(X = 30) ≈ 0.1082)

---

### Example 3: Binomial with “At Most” (JEE Pattern)

**Problem**: A student guesses answers on a 5-question true/false test. Find probability of:
(a) Passing (at least 3 correct)
(b) Failing (at most 2 correct)

**Solution**:

$X \sim B(5, 0.5)$, where X = number correct

**(a) P(pass) = P(X ≥ 3)**:

$$P(X \geq 3) = P(X=3) + P(X=4) + P(X=5)$$

$$P(X=3) = \binom{5}{3} (0.5)^5 = 10 \times \frac{1}{32} = \frac{10}{32}$$

$$P(X=4) = \binom{5}{4} (0.5)^5 = 5 \times \frac{1}{32} = \frac{5}{32}$$

$$P(X=5) = \binom{5}{5} (0.5)^5 = 1 \times \frac{1}{32} = \frac{1}{32}$$

$$P(X \geq 3) = \frac{10 + 5 + 1}{32} = \frac{16}{32} = \frac{1}{2}$$

**(b) P(fail) = P(X ≤ 2) = 1 - P(X ≥ 3) = 1 - 1/2 = 1/2**

(Or calculate P(X=0) + P(X=1) + P(X=2) = 1/32 + 5/32 + 10/32 = 16/32 = 1/2)

---

### Example 4: Basic Poisson

**Problem**: Average 3 typos per page. Find probability of:
(a) Exactly 2 typos on a page
(b) No typos on a page
(c) At least 1 typo

**Solution**:

$X \sim \text{Poisson}(3)$

**(a) P(X = 2)**:

$$P(X = 2) = \frac{e^{-3} \cdot 3^2}{2!} = \frac{e^{-3} \cdot 9}{2} = 4.5 e^{-3} \approx 4.5 \times 0.0498 = 0.224$$

**(b) P(X = 0)**:

$$P(X = 0) = \frac{e^{-3} \cdot 3^0}{0!} = e^{-3} \approx 0.0498$$

**(c) P(X ≥ 1) = 1 - P(X = 0)**:

$$P(X \geq 1) = 1 - e^{-3} \approx 1 - 0.0498 = 0.9502$$

---

### Example 5: Poisson with Rate Change

**Problem**: On average, 2 customers arrive per minute at a store. Find probability that:
(a) Exactly 5 arrive in 2 minutes
(b) No one arrives in 30 seconds

**Solution**:

**(a) 2 minutes**: λ = 2 per minute × 2 minutes = 4

$$P(X = 5) = \frac{e^{-4} \cdot 4^5}{5!} = \frac{e^{-4} \cdot 1024}{120} = \frac{1024}{120} e^{-4} \approx 8.53 \times 0.0183 = 0.156$$

**(b) 30 seconds**: λ = 2 per minute × 0.5 minutes = 1

$$P(X = 0) = \frac{e^{-1} \cdot 1^0}{0!} = e^{-1} \approx 0.368$$

---

### Example 6: Poisson Approximation to Binomial

**Problem**: A factory produces 1000 items daily. Each has 0.2% defect probability. Find probability of:
(a) Exactly 3 defective items
(b) At least 2 defective items

**Solution**:

**Exact**: $X \sim B(1000, 0.002)$ (hard to calculate!)

**Approximation**: n = 1000 (large), p = 0.002 (small), λ = np = 2

Use $X \approx \text{Poisson}(2)$

**(a) P(X = 3)**:

$$P(X = 3) = \frac{e^{-2} \cdot 2^3}{3!} = \frac{8 e^{-2}}{6} = \frac{4}{3} e^{-2} \approx \frac{4}{3} \times 0.1353 = 0.180$$

**(b) P(X ≥ 2) = 1 - P(X ≤ 1) = 1 - [P(X=0) + P(X=1)]**:

$$P(X = 0) = e^{-2} \approx 0.1353$$

$$P(X = 1) = 2e^{-2} \approx 0.2707$$

$$P(X \geq 2) = 1 - (0.1353 + 0.2707) = 1 - 0.406 = 0.594$$

---

### Example 7: Combined Problem (JEE Advanced)

**Problem**: A die is rolled 180 times. Find the probability of getting a 6 exactly 30 times using:
(a) Binomial distribution
(b) Poisson approximation

**Solution**:

**(a) Binomial**: $X \sim B(180, 1/6)$

$$P(X = 30) = \binom{180}{30} \left(\frac{1}{6}\right)^{30} \left(\frac{5}{6}\right)^{150}$$

(Extremely difficult to calculate by hand!)

**(b) Poisson**: λ = np = 180 × (1/6) = 30

**Note**: λ = 30 is large, so Poisson approximation not ideal here (p = 1/6 is not very small). But proceeding:

$$P(X = 30) \approx \frac{e^{-30} \cdot 30^{30}}{30!}$$

(Still requires calculator/software)

**Better approach**: For such problems, use **normal approximation** (beyond JEE scope) or statistical tables.

---

## Practice Problems

### Level 1: Foundation (JEE Main)

1. A coin is tossed 4 times. Find P(exactly 2 heads).
2. Average 1.5 accidents per day. Find P(no accidents tomorrow) using Poisson.
3. For X ~ B(10, 0.3), find E(X) and Var(X).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>X ~ B(4, 0.5)
P(X=2) = C(4,2) × (0.5)⁴ = 6/16 = 3/8</p></li><li><p>X ~ Poisson(1.5)
P(X=0) = e⁻¹·⁵ ≈ 0.223</p></li><li><p>E(X) = 10 × 0.3 = 3
Var(X) = 10 × 0.3 × 0.7 = 2.1</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. 60% of students pass an exam. In a class of 20, find:
   (a) P(exactly 12 pass)
   (b) P(at least 15 pass)
5. On average, 4 emails per hour. Find P(more than 2 emails in next 30 minutes).
6. A machine produces 2% defective items. In batch of 100, find P(at most 1 defective) using Poisson approximation.

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>X ~ B(20, 0.6)
(a) P(X=12) = C(20,12) × (0.6)¹² × (0.4)⁸ ≈ 0.180
(b) P(X≥15) = Σ P(X=r) for r=15 to 20 (use calculator/table)</p></li><li><p>λ for 30 min = 4 × 0.5 = 2, X ~ Poisson(2)
P(X&gt;2) = 1 - P(X≤2) = 1 - [P(0) + P(1) + P(2)]
= 1 - [e⁻² + 2e⁻² + 2e⁻²] = 1 - 5e⁻² ≈ 1 - 0.677 = 0.323</p></li><li><p>λ = np = 100 × 0.02 = 2, X ~ Poisson(2)
P(X≤1) = P(0) + P(1) = e⁻² + 2e⁻² = 3e⁻² ≈ 0.406</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. For X ~ B(n, p), prove that E(X) = np using the binomial theorem.
8. If X ~ Poisson(λ₁) and Y ~ Poisson(λ₂) are independent, prove X+Y ~ Poisson(λ₁+λ₂).
9. A fair die is rolled until a 6 appears. Find the probability that it takes exactly 5 rolls. (Hint: Geometric distribution, related to binomial)

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>E(X) = Σ r × C(n,r) × pʳ × qⁿ⁻ʳ for r=0 to n
= Σ r × [n!/(r!(n-r)!)] × pʳ × qⁿ⁻ʳ
= np × Σ C(n-1, r-1) × pʳ⁻¹ × qⁿ⁻ʳ (after simplification)
= np × (p+q)ⁿ⁻¹ = np × 1 = np ✓</p></li><li><p>P(X+Y = k) = Σ P(X=r)P(Y=k-r) for r=0 to k
= Σ [e⁻λ¹λ₁ʳ/r!] × [e⁻λ²λ₂ᵏ⁻ʳ/(k-r)!]
= e⁻⁽λ¹⁺λ²⁾ × (1/k!) × Σ C(k,r)λ₁ʳλ₂ᵏ⁻ʳ
= e⁻⁽λ¹⁺λ²⁾ × (λ₁+λ₂)ᵏ/k! ✓ [Binomial theorem]</p></li><li><p>Need 4 non-6’s then a 6: (5/6)⁴ × (1/6) = 625/7776 ≈ 0.080</p></li></ol></div></details>

---

## Real-Life Applications

### Binomial Distribution

1. **Quality Control**: Testing n items, each has probability p of being defective
2. **Medical Trials**: n patients, probability p of recovery
3. **Sports**: n free throws, probability p of making each
4. **Elections**: Polling n people, probability p support candidate
5. **Exams**: n questions, probability p of getting each right

### Poisson Distribution

1. **Customer Service**: Number of calls/customers in time period
2. **Traffic**: Number of accidents on highway per month
3. **Publishing**: Number of typos per page
4. **Natural Events**: Earthquakes, meteor strikes per year
5. **Biology**: Number of bacteria in sample, mutations per generation
6. **Network**: Number of packets arriving at server

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Bernoulli Trials](../bernoulli-trials/index.md) - Foundation for binomial distribution
- [Random Variables](../random-variables/index.md) - Distributions are special types of RVs
- [Probability Basics](../probability-basics/index.md) - Sample spaces and events
- [Permutations & Combinations](../../permutations-combinations/index.md) - $\binom{n}{r}$ in binomial formula
- [Binomial Theorem](../../binomial-theorem/index.md) - $(p+q)^n$ expansion

**Advanced Connections**:

- **Binomial** → **Normal** (for large n, use normal approximation)
- **Poisson** → **Exponential** (time between Poisson events)
- **Expectation** → **Decision making** (expected profit/loss)

---

## Distribution Comparison Table

Binomial vs Poisson Quick Reference

| Feature | Binomial | Poisson |
| --- | --- | --- |
| **Type** | Fixed n trials | Events in interval |
| **Parameter(s)** | n, p | λ |
| **Range** | 0, 1, &mldr;, n | 0, 1, 2, &mldr; (infinite) |
| **Mean** | np | λ |
| **Variance** | npq | λ |
| **Formula** | $\binom{n}{r}p^r q^{n-r}$ | $\frac{e^{-\lambda}\lambda^r}{r!}$ |
| **When to use** | Independent trials | Rare events |
| **Examples** | Coin tosses, exams | Accidents, typos |
| **Approximation** | Use Poisson if n large, p small | — |

---

## Formula Quick Reference

Essential Formulas

### Binomial Distribution

$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}$$

$$E(X) = np$$

$$\text{Var}(X) = np(1-p)$$

### Poisson Distribution

$$P(X = r) = \frac{e^{-\lambda} \lambda^r}{r!}$$

$$E(X) = \text{Var}(X) = \lambda$$

### Special Values

- $e \approx 2.71828$
- $0! = 1$
- $\binom{n}{0} = \binom{n}{n} = 1$

---

## Quick Revision Checklist

Quick Revision

✓ **Binomial**: BINS conditions (Binary, Independent, Number fixed, Same p)
✓ **Binomial formula**: $\binom{n}{r} p^r q^{n-r}$
✓ **Binomial mean/var**: E = np, Var = npq
✓ **Poisson**: Rare events, constant rate λ
✓ **Poisson formula**: $\frac{e^{-\lambda}\lambda^r}{r!}$
✓ **Poisson mean/var**: E = Var = λ
✓ **Approximation**: Large n, small p → Poisson with λ = np
✓ **“At least r”**: P(X ≥ r) = 1 - P(X ≤ r-1)

---

## Exam Tips

1. **Check conditions**: Is it binomial or Poisson? Verify BINS for binomial
2. **Identify parameters**: What are n, p (binomial) or λ (Poisson)?
3. **Use approximation**: If n > 20 and p < 0.05, consider Poisson
4. **Complement**: For “at least r”, use 1 - P(less than r)
5. **Calculator**: Know how to use C(n,r), e^(-x) functions
6. **Tables**: JEE may provide Poisson/Binomial tables—use them!
7. **Rate adjustment**: If λ given per hour but want probability for 30 min, halve λ

---

## Next Steps

Understanding how binomial distribution arises from repeated trials? Continue to:

- [Bernoulli Trials](../bernoulli-trials/index.md) - The building blocks of binomial distribution

---

*Last updated: December 21, 2025*
*Master probability distributions at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Probability Distributions.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fprobability-distributions%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
Free, no card. Opens TestGuru in a new tab.

## Stay exam-ready

One email every Sunday: new notes, the week's hardest challenge question and a revision plan.One email every Sunday.

## Comments

Have a question or spotted a mistake? Join the discussion below.

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-15

```js
if(!document.getElementById("animation-fullscreen-overlay")){const e=document.createElement("div");e.id="animation-fullscreen-overlay",e.className="animation-fullscreen-overlay",e.innerHTML=`
      <div class="fullscreen-modal">
        <div class="fullscreen-header">
          <span class="fullscreen-title">Interactive Demo</span>
          <button class="fullscreen-close-btn" onclick="JEEAnimations.closeFullscreen()" title="Close (Esc)" aria-label="Close fullscreen">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="fullscreen-content"></div>
      </div>
    `,document.body.appendChild(e),document.addEventListener("keydown",function(e){e.key==="Escape"&&document.body.classList.contains("animation-fullscreen-active")&&JEEAnimations.closeFullscreen()}),e.addEventListener("click",function(t){t.target===e&&JEEAnimations.closeFullscreen()})}
```


### inline-script-16

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/probability-distributions/",this.page.identifier="/mathematics/statistics-probability/probability-distributions/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422236885827"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422236885827")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/probability-distributions/](https://jeenotes.in/mathematics/statistics-probability/probability-distributions/) · raw HTML: `offline/mathematics/statistics-probability/probability-distributions/index.html`_
