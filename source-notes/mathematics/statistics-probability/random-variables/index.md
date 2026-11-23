---
title: "Random Variables"
source: "https://jeenotes.in/mathematics/statistics-probability/random-variables/"
description: "Master discrete and continuous random variables for JEE - From dice rolls to probability density functions"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 8 of 10"
html: "../../../../offline/mathematics/statistics-probability/random-variables/index.html"
extracted: "2026-11-23"
---

> Master discrete and continuous random variables for JEE - From dice rolls to probability density functions

# Random Variables

## The Lottery Earnings Mystery

In a lottery, you can win ₹10,000 with probability 0.001, ₹100 with probability 0.01, or nothing (probability 0.989). Is it worth paying ₹50 for a ticket?

To answer this, we need to find the **expected value** of your winnings. This requires treating the prize money as a **random variable**—a function that assigns numerical values to random outcomes!

Random variables are the foundation of probability theory and essential for JEE, statistics, finance, and physics!

---

## What is a Random Variable?

A **random variable** is a function that assigns a **real number** to each outcome in a sample space.

Random Variable Definition

**Random Variable**: A function $X: S \to \mathbb{R}$

Maps: Sample Space → Real Numbers

**Notation**: Usually denoted by capital letters X, Y, Z

### Why “Random Variable”?

- **“Variable”**: Takes different numerical values
- **“Random”**: The value depends on the outcome of a random experiment
- **Actually**: It’s a function, not a variable!

### Example: Tossing Two Coins

**Sample Space**: S = {HH, HT, TH, TT}

**Random Variable** X = “number of heads”

| Outcome | X (heads) |
| --- | --- |
| HH | 2 |
| HT | 1 |
| TH | 1 |
| TT | 0 |

X maps each outcome to a number: HH → 2, HT → 1, TH → 1, TT → 0

---

## Types of Random Variables

Two Main Types

### 1. Discrete Random Variable (DRV)

Takes **countable** values (finite or countably infinite)

**Examples**:

- Number of heads in coin tosses: {0, 1, 2, 3, &mldr;}
- Score on a die: {1, 2, 3, 4, 5, 6}
- Number of defective items in a batch
- Number of students passing an exam

### 2. Continuous Random Variable (CRV)

Takes **uncountable** values (any value in an interval)

**Examples**:

- Height of students: any value in [100, 250] cm
- Time taken to finish a race: any value in [0, ∞)
- Temperature: any real number
- Measurement errors

**Key Difference**:

- **Discrete**: Count (0, 1, 2, 3, &mldr;)
- **Continuous**: Measure (175.3 cm, 23.78°C, &mldr;)

---

## Discrete Random Variables (DRV)

### Probability Mass Function (PMF)

For a discrete random variable X, the **probability mass function** gives the probability of each value.

Probability Mass Function (PMF)

$$P(X = x_i) = p_i$$

where $x_i$ are the possible values and $p_i$ are their probabilities.

**Properties**:

1. $0 \leq p_i \leq 1$ for all $i$
2. $\sum_{i} p_i = 1$ (total probability = 1)

**Notation**: Sometimes written as $p(x)$ or $f(x)$

### Example: PMF of Two Coins

X = number of heads when tossing 2 coins

| X | 0 | 1 | 2 |
| --- | --- | --- | --- |
| P(X) | 1/4 | 1/2 | 1/4 |

**Verification**: 1/4 + 1/2 + 1/4 = 1 ✓

---

### Cumulative Distribution Function (CDF)

The **CDF** gives the probability that X is at most x.

Cumulative Distribution Function (CDF)

$$F(x) = P(X \leq x) = \sum_{x_i \leq x} P(X = x_i)$$

**Properties**:

1. $0 \leq F(x) \leq 1$
2. $F$ is non-decreasing (never goes down)
3. $\lim_{x \to -\infty} F(x) = 0$
4. $\lim_{x \to \infty} F(x) = 1$
5. $P(a < X \leq b) = F(b) - F(a)$

### Example: CDF of Two Coins

For X = number of heads:

$$F(x) = \begin{cases}
0 & \text{if } x < 0 \\
1/4 & \text{if } 0 \leq x < 1 \\
3/4 & \text{if } 1 \leq x < 2 \\
1 & \text{if } x \geq 2
\end{cases}$$

**Graph**: Step function (jumps at 0, 1, 2)

---

## Expectation (Mean) of Discrete RV

The **expected value** or **mean** is the long-run average value.

Expectation (Expected Value)

$$E(X) = \mu = \sum_{i} x_i \cdot P(X = x_i)$$

**Alternative notation**: $\mathbb{E}[X]$, $\mu_X$

**Interpretation**: Weighted average, where weights are probabilities

### Properties of Expectation

Expectation Properties

1. **Linearity**: $E(aX + b) = aE(X) + b$
2. **Sum**: $E(X + Y) = E(X) + E(Y)$ (always, even if dependent!)
3. **Constant**: $E(c) = c$
4. **Product** (if independent): $E(XY) = E(X) \cdot E(Y)$
5. **Non-negative**: If $X \geq 0$, then $E(X) \geq 0$

### Example: Expected Dice Roll

Fair die: X ∈ {1, 2, 3, 4, 5, 6}, each with P = 1/6

$$E(X) = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + 3 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6}$$

$$= \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5$$

**Interpretation**: On average, rolling 3.5 (even though you can never actually roll 3.5!)

---

## Variance and Standard Deviation of DRV

**Variance** measures the spread of X around its mean.

Variance of Random Variable

$$\text{Var}(X) = \sigma^2 = E[(X - \mu)^2] = \sum_i (x_i - \mu)^2 \cdot P(X = x_i)$$

**Alternative formula** (easier to compute):

$$\text{Var}(X) = E(X^2) - [E(X)]^2$$

**Standard Deviation**:

$$\sigma = \text{SD}(X) = \sqrt{\text{Var}(X)}$$

### Properties of Variance

Variance Properties

1. **Constant shift**: $\text{Var}(X + b) = \text{Var}(X)$
2. **Scale**: $\text{Var}(aX) = a^2 \text{Var}(X)$
3. **Constant**: $\text{Var}(c) = 0$
4. **Non-negative**: $\text{Var}(X) \geq 0$
5. **Sum** (if independent): $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$

### Example: Variance of Fair Die

$$E(X) = 3.5$$

$$E(X^2) = 1^2 \cdot \frac{1}{6} + 2^2 \cdot \frac{1}{6} + ... + 6^2 \cdot \frac{1}{6} = \frac{1+4+9+16+25+36}{6} = \frac{91}{6}$$

$$\text{Var}(X) = \frac{91}{6} - (3.5)^2 = \frac{91}{6} - \frac{49}{4} = \frac{182 - 147}{12} = \frac{35}{12} \approx 2.92$$

---

## Continuous Random Variables (CRV)

For continuous RVs, we can’t list all values (uncountably many!), so we use **density** instead of **mass**.

### Probability Density Function (PDF)

Probability Density Function (PDF)

A function $f(x)$ is a PDF if:

1. **Non-negative**: $f(x) \geq 0$ for all $x$
2. **Total probability**: $\int_{-\infty}^{\infty} f(x) \, dx = 1$

**Probability of interval**:

$$P(a \leq X \leq b) = \int_a^b f(x) \, dx$$

**Important**: For continuous RV, $P(X = a) = 0$ (probability at a single point is 0!)

### Example: Uniform Distribution on [0, 1]

$$f(x) = \begin{cases}
1 & \text{if } 0 \leq x \leq 1 \\
0 & \text{otherwise}
\end{cases}$$

**Check**: $\int_0^1 1 \, dx = 1$ ✓

**Probability**: $P(0.2 \leq X \leq 0.5) = \int_{0.2}^{0.5} 1 \, dx = 0.3$

---

### CDF for Continuous RV

CDF for Continuous RV

$$F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t) \, dt$$

**Relationship between PDF and CDF**:

$$f(x) = \frac{d}{dx} F(x)$$

(PDF is the derivative of CDF)

---

### Expectation and Variance for Continuous RV

Expectation for Continuous RV

$$E(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$$

$$E(g(X)) = \int_{-\infty}^{\infty} g(x) \cdot f(x) \, dx$$

**Variance**:

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = \int_{-\infty}^{\infty} x^2 f(x) \, dx - \mu^2$$

### Example: Uniform [0, 1] Expectation

$$E(X) = \int_0^1 x \cdot 1 \, dx = \left[\frac{x^2}{2}\right]_0^1 = \frac{1}{2}$$

$$E(X^2) = \int_0^1 x^2 \cdot 1 \, dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}$$

$$\text{Var}(X) = \frac{1}{3} - \left(\frac{1}{2}\right)^2 = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$$

---

## Interactive Visualization

---

## Memory Tricks

Memory Tricks

1. **“Discrete = Distinct, Continuous = Connected”**

   - **D**iscrete has **D**istinct separate values
   - **C**ontinuous is **C**onnected (interval)
2. **PMF vs PDF**:

   - **PMF** = **P**robability **M**ass (discrete, like point masses)
   - **PDF** = **P**robability **D**ensity (continuous, like density)
3. **Expectation = Weighted Average**:

   - E(X) = Σ x × P(x) - weights are probabilities
4. **Variance Formula**:

   - “**E** of **S**quare minus **S**quare of **E**”
   - Var(X) = **E**(X²) - [**E**(X)]²
5. **CDF = Cumulative = Up to**:

   - F(x) = P(X ≤ x) - **up to** x
6. **PDF and CDF Relationship**:

   - **f** is slope of **F** (derivative)
   - **F** is area under **f** (integral)

---

## Common Mistakes to Avoid

Common Mistakes

1. **P(X = x) for continuous RV**: Always 0! Use intervals instead
2. **Confusing PMF and PDF**: PMF gives probability directly, PDF needs integration
3. **Forgetting to check Σp = 1**: PMF must sum to 1
4. **Wrong variance formula**: Var(X) = E(X²) - [E(X)]², NOT E[(X - μ)²] (though they’re equal)
5. **E(XY) ≠ E(X)E(Y)**: Only true if X and Y are independent
6. **Var(X + Y) ≠ Var(X) + Var(Y)**: Only true if independent
7. **CDF discontinuity**: For discrete RV, CDF has jumps (step function)
8. **Units**: Var(X) has squared units, SD(X) has original units

---

## Solved Examples

### Example 1: PMF and Expectation (Dice Game)

**Problem**: A die is rolled. If it shows an even number, you win that number of rupees. If odd, you lose ₹1. Find your expected earnings.

**Solution**:

**Random Variable** X = earnings

| Outcome | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| X | -1 | 2 | -1 | 4 | -1 | 6 |
| P(X) | 1/6 | 1/6 | 1/6 | 1/6 | 1/6 | 1/6 |

**Expectation**:

$$E(X) = (-1) \cdot \frac{3}{6} + 2 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6}$$

$$= \frac{-3 + 2 + 4 + 6}{6} = \frac{9}{6} = \frac{3}{2} = ₹1.50$$

**Answer**: Expected earning = ₹1.50 per game

---

### Example 2: Variance Calculation

**Problem**: X has PMF: P(X = 0) = 0.3, P(X = 1) = 0.5, P(X = 2) = 0.2. Find Var(X).

**Solution**:

**Step 1**: Find E(X)

$$E(X) = 0 \cdot 0.3 + 1 \cdot 0.5 + 2 \cdot 0.2 = 0 + 0.5 + 0.4 = 0.9$$

**Step 2**: Find E(X²)

$$E(X^2) = 0^2 \cdot 0.3 + 1^2 \cdot 0.5 + 2^2 \cdot 0.2 = 0 + 0.5 + 0.8 = 1.3$$

**Step 3**: Calculate Var(X)

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = 1.3 - (0.9)^2 = 1.3 - 0.81 = 0.49$$

---

### Example 3: Linear Transformation

**Problem**: X has E(X) = 10, Var(X) = 4. Find E(Y) and Var(Y) where Y = 3X - 5.

**Solution**:

**E(Y)**:

$$E(Y) = E(3X - 5) = 3E(X) - 5 = 3(10) - 5 = 25$$

**Var(Y)**:

$$\text{Var}(Y) = \text{Var}(3X - 5) = 3^2 \text{Var}(X) = 9 \cdot 4 = 36$$

(Constant -5 doesn’t affect variance)

---

### Example 4: Continuous RV (Triangular Distribution)

**Problem**: X has PDF $f(x) = cx$ for $0 \leq x \leq 2$, and 0 otherwise. Find:
(a) Value of c
(b) E(X)
(c) P(X > 1)

**Solution**:

**(a) Find c**:

$$\int_0^2 cx \, dx = 1$$

$$c \left[\frac{x^2}{2}\right]_0^2 = 1$$

$$c \cdot 2 = 1$$

$$c = \frac{1}{2}$$

**(b) E(X)**:

$$E(X) = \int_0^2 x \cdot \frac{x}{2} \, dx = \frac{1}{2} \int_0^2 x^2 \, dx = \frac{1}{2} \left[\frac{x^3}{3}\right]_0^2 = \frac{1}{2} \cdot \frac{8}{3} = \frac{4}{3}$$

**(c) P(X > 1)**:

$$P(X > 1) = \int_1^2 \frac{x}{2} \, dx = \frac{1}{2} \left[\frac{x^2}{2}\right]_1^2 = \frac{1}{2} \left(2 - \frac{1}{2}\right) = \frac{1}{2} \cdot \frac{3}{2} = \frac{3}{4}$$

---

### Example 5: CDF and Probability

**Problem**: X has CDF:

$$F(x) = \begin{cases}
0 & x < 0 \\
x^2 & 0 \leq x < 1 \\
1 & x \geq 1
\end{cases}$$

Find: (a) PDF, (b) P(0.5 < X < 0.8)

**Solution**:

**(a) PDF**: $f(x) = \frac{d}{dx} F(x)$

$$f(x) = \begin{cases}
0 & x < 0 \\
2x & 0 \leq x < 1 \\
0 & x \geq 1
\end{cases}$$

**(b) Probability**:

**Method 1** (using CDF):

$$P(0.5 < X < 0.8) = F(0.8) - F(0.5) = (0.8)^2 - (0.5)^2 = 0.64 - 0.25 = 0.39$$

**Method 2** (using PDF):

$$P(0.5 < X < 0.8) = \int_{0.5}^{0.8} 2x \, dx = [x^2]_{0.5}^{0.8} = 0.64 - 0.25 = 0.39$$

---

### Example 6: Lottery Problem (Opening Example)

**Problem**: Lottery ticket costs ₹50. Prizes: ₹10,000 (p=0.001), ₹100 (p=0.01), ₹0 (p=0.989). Is it worth buying?

**Solution**:

**Random Variable** X = net profit (prize - cost)

| Prize | Probability | Net Profit X |
| --- | --- | --- |
| ₹10,000 | 0.001 | ₹9,950 |
| ₹100 | 0.01 | ₹50 |
| ₹0 | 0.989 | -₹50 |

**Expected Profit**:

$$E(X) = 9950 \cdot 0.001 + 50 \cdot 0.01 + (-50) \cdot 0.989$$

$$= 9.95 + 0.50 - 49.45 = -39$$

**Answer**: Expected loss = ₹39. **Not worth buying!** (On average, you lose money)

---

## Practice Problems

### Level 1: Foundation (JEE Main)

1. Two coins are tossed. X = number of tails. Find PMF, E(X), and Var(X).
2. X has PMF: P(X = 1) = 0.4, P(X = 2) = 0.6. Find E(X).
3. If E(X) = 5, find E(2X + 3).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>PMF: P(X=0)=1/4, P(X=1)=1/2, P(X=2)=1/4
E(X) = 0(1/4) + 1(1/2) + 2(1/4) = 1
E(X²) = 0(1/4) + 1(1/2) + 4(1/4) = 1.5
Var(X) = 1.5 - 1² = 0.5</p></li><li><p>E(X) = 1(0.4) + 2(0.6) = 0.4 + 1.2 = 1.6</p></li><li><p>E(2X + 3) = 2E(X) + 3 = 2(5) + 3 = 13</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. X has PDF $f(x) = kx^2$ for $0 \leq x \leq 1$. Find k and E(X).
5. X and Y are independent with E(X) = 3, E(Y) = 5, Var(X) = 2, Var(Y) = 4. Find E(XY) and Var(X + Y).
6. CDF of X is $F(x) = 1 - e^{-2x}$ for $x \geq 0$. Find PDF and P(X > 1).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>∫₀¹ kx² dx = 1 → k[x³/3]₀¹ = 1 → k/3 = 1 → k = 3
E(X) = ∫₀¹ x·3x² dx = 3∫₀¹ x³ dx = 3[x⁴/4]₀¹ = 3/4</p></li><li><p>E(XY) = E(X)E(Y) = 3·5 = 15 (independent)
Var(X+Y) = Var(X) + Var(Y) = 2 + 4 = 6 (independent)</p></li><li><p>f(x) = F’(x) = 2e⁻²ˣ for x ≥ 0
P(X &gt; 1) = 1 - F(1) = 1 - (1 - e⁻²) = e⁻² ≈ 0.135</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. Show that Var(X) = E(X²) - [E(X)]² starting from Var(X) = E[(X - μ)²].
8. X has PDF $f(x) = \frac{3}{8}(4x - 2x^2)$ for $0 \leq x \leq 2$. Find median of X (value m where P(X ≤ m) = 0.5).
9. If X and Y are independent, prove that E(XY) = E(X)E(Y).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>Var(X) = E[(X-μ)²] = E[X² - 2μX + μ²]
= E(X²) - 2μE(X) + μ² = E(X²) - 2μ² + μ²
= E(X²) - μ² = E(X²) - [E(X)]² ✓</p></li><li><p>CDF: F(x) = ∫₀ˣ (3/8)(4t - 2t²) dt = (3/8)[2t² - 2t³/3]₀ˣ = (3/8)(2x² - 2x³/3)
Set F(m) = 0.5: (3/8)(2m² - 2m³/3) = 0.5
2m² - 2m³/3 = 4/3 → 6m² - 2m³ = 4 → m³ - 3m² + 2 = 0
Solve numerically: m ≈ 0.71</p></li><li><p>For independent X, Y: E(XY) = ΣΣ xy P(X=x,Y=y)
= ΣΣ xy P(X=x)P(Y=y) [independence]
= Σx P(X=x) · Σy P(Y=y) = E(X)·E(Y) ✓</p></li></ol></div></details>

---

## Real-Life Applications

### 1. Finance

- **Stock Returns**: Continuous RV (price can be any value)
- **Expected Return**: E(X) guides investment decisions
- **Risk**: Measured by variance/standard deviation

### 2. Insurance

- **Claim Amount**: Random variable
- **Premium Calculation**: Based on E(X) + buffer
- **Risk Assessment**: Var(X) quantifies uncertainty

### 3. Quality Control

- **Number of Defects**: Discrete RV
- **Process Control**: Monitor E(X) and σ
- **Six Sigma**: ±6σ from mean

### 4. Games and Gambling

- **Casino Games**: Calculate expected winnings
- **Fair Game**: E(X) = 0
- **House Edge**: Negative E(X) for player

### 5. Physics

- **Quantum Mechanics**: Wave function = probability density
- **Measurement**: Random variable
- **Expectation Value**: Observable quantity

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Probability Basics](../probability-basics/index.md) - Foundation for random variables
- [Conditional Probability](../conditional-probability/index.md) - Conditional expectation
- [Bayes’ Theorem](../bayes-theorem/index.md) - Updating distributions
- [Probability Distributions](../probability-distributions/index.md) - Specific RV types (binomial, Poisson)
- [Bernoulli Trials](../bernoulli-trials/index.md) - Discrete RV from repeated experiments
- [Measures of Central Tendency](../measures-central-tendency/index.md) - E(X) is population mean
- [Measures of Dispersion](../measures-dispersion/index.md) - Var(X) is population variance

**Advanced Connections**:

- **Integration** → Computing E(X) for continuous RV
- **Summation** → Computing E(X) for discrete RV
- **Differentiation** → PDF from CDF

---

## Formula Quick Reference

Formula Summary

### Discrete Random Variable

| Property | Formula |
| --- | --- |
| **PMF** | $P(X = x_i) = p_i$, $\sum p_i = 1$ |
| **CDF** | $F(x) = P(X \leq x) = \sum_{x_i \leq x} p_i$ |
| **Expectation** | $E(X) = \sum x_i p_i$ |
| **Variance** | $\text{Var}(X) = E(X^2) - [E(X)]^2$ |

### Continuous Random Variable

| Property | Formula |
| --- | --- |
| **PDF** | $f(x) \geq 0$, $\int_{-\infty}^{\infty} f(x) dx = 1$ |
| **CDF** | $F(x) = \int_{-\infty}^{x} f(t) dt$ |
| **PDF from CDF** | $f(x) = F'(x)$ |
| **Expectation** | $E(X) = \int_{-\infty}^{\infty} x f(x) dx$ |
| **Variance** | $\text{Var}(X) = \int x^2 f(x) dx - \mu^2$ |

### Properties (Both Types)

- $E(aX + b) = aE(X) + b$
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$
- $E(X + Y) = E(X) + E(Y)$
- $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$ (if independent)

---

## Quick Revision Checklist

Quick Revision

✓ **Random Variable**: Function from sample space to real numbers
✓ **Discrete**: Countable values (PMF, summation)
✓ **Continuous**: Interval values (PDF, integration)
✓ **PMF**: $\sum p_i = 1$, gives probability directly
✓ **PDF**: $\int f(x) dx = 1$, need integral for probability
✓ **CDF**: F(x) = P(X ≤ x), always between 0 and 1
✓ **Expectation**: E(X) = weighted average
✓ **Variance**: Var(X) = E(X²) - [E(X)]²
✓ **Linear Transform**: E(aX+b) = aE(X)+b, Var(aX+b) = a²Var(X)

---

## Exam Tips

1. **Identify type**: Discrete or continuous? Determines which formulas to use
2. **Check normalization**: PMF must sum to 1, PDF must integrate to 1
3. **Use alternative variance formula**: Var(X) = E(X²) - [E(X)]² is faster
4. **For continuous**: P(X = a) = 0, always use intervals
5. **CDF properties**: Non-decreasing, limits are 0 and 1
6. **Independence**: Simplifies E(XY) and Var(X+Y)
7. **Units**: Var has squared units, SD has original units

---

## Next Steps

Ready to explore specific probability distributions? Continue to:

- [Probability Distributions](../probability-distributions/index.md) - Binomial, Poisson, and more
- [Bernoulli Trials](../bernoulli-trials/index.md) - Foundation for binomial distribution

---

*Last updated: December 20, 2025*
*Master random variables at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Random Variables.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Frandom-variables%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/random-variables/",this.page.identifier="/mathematics/statistics-probability/random-variables/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422248616706"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422248616706")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/random-variables/](https://jeenotes.in/mathematics/statistics-probability/random-variables/) · raw HTML: `offline/mathematics/statistics-probability/random-variables/index.html`_
