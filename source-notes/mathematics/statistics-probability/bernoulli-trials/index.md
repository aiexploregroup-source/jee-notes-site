---
title: "Bernoulli Trials"
source: "https://jeenotes.in/mathematics/statistics-probability/bernoulli-trials/"
description: "Master Bernoulli trials and repeated experiments for JEE - The foundation of binomial distribution and success-failure experiments"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 2 of 10"
html: "../../../../offline/mathematics/statistics-probability/bernoulli-trials/index.html"
extracted: "2026-11-23"
---

> Master Bernoulli trials and repeated experiments for JEE - The foundation of binomial distribution and success-failure experiments

# Bernoulli Trials

## The Penalty Shootout Challenge

In a penalty shootout, a soccer player takes 5 shots. She scores on each with probability 0.8 (independent of previous shots). What’s the probability she scores on the first 3 and misses the last 2?

This is a classic **Bernoulli trial** problem—each shot is an independent trial with two outcomes (success/failure). Understanding Bernoulli trials is the foundation for binomial distribution and crucial for JEE probability!

---

## What is a Bernoulli Trial?

A **Bernoulli trial** is a random experiment with exactly **two possible outcomes**:

- **Success** (with probability p)
- **Failure** (with probability q = 1 - p)

Named after Swiss mathematician **Jacob Bernoulli** (1654-1705).

### Examples of Bernoulli Trials

| Experiment | Success | Failure | p |
| --- | --- | --- | --- |
| Coin toss | Heads | Tails | 0.5 |
| Free throw | Score | Miss | 0.7 (varies) |
| True/False question | Correct | Wrong | 0.5 (guessing) |
| Quality test | Pass | Fail | 0.95 (typical) |
| Medical test | Positive | Negative | Varies |
| Customer purchase | Buy | Don’t buy | Varies |

### Single Bernoulli Trial

Bernoulli Distribution

For a single Bernoulli trial, if X = 1 (success) or 0 (failure):

$$P(X = 1) = p$$

$$P(X = 0) = q = 1 - p$$

**PMF**:

$$P(X = x) = p^x (1-p)^{1-x}, \quad x \in \{0, 1\}$$

**Mean**: $E(X) = p$

**Variance**: $\text{Var}(X) = pq = p(1-p)$

---

## Repeated Bernoulli Trials

### Definition

**Repeated Bernoulli trials** (or **Bernoulli process**) consists of:

Properties of Repeated Bernoulli Trials

1. **Two outcomes**: Each trial has only success or failure
2. **Fixed probability**: P(success) = p is same for all trials
3. **Independence**: Trials don’t affect each other
4. **Identical**: Each trial is conducted under identical conditions

**Mnemonic**: **TFII** - Two outcomes, Fixed p, Independent, Identical

### Notation

- **n** = number of trials
- **p** = probability of success on each trial
- **q = 1 - p** = probability of failure on each trial
- **X** = number of successes in n trials

---

## Probability of Specific Sequences

For a specific sequence of successes and failures:

Probability of Specific Sequence

If a sequence has **r successes** and **(n - r) failures** in a specific order:

$$P(\text{specific sequence}) = p^r \times q^{n-r} = p^r (1-p)^{n-r}$$

**Key**: Order matters for specific sequences!

### Example: 3 Coin Tosses

**Specific sequence** HHT (2 heads, 1 tail):

$$P(HHT) = (0.5)(0.5)(0.5) = (0.5)^3 = \frac{1}{8}$$

**Different sequence** HTH (also 2 heads, 1 tail):

$$P(HTH) = (0.5)(0.5)(0.5) = (0.5)^3 = \frac{1}{8}$$

Same probability because **same number of successes and failures**!

---

## Probability of r Successes (Any Order)

When we don’t care about order, just the **total number of successes**:

Probability of r Successes in n Trials

$$P(X = r) = \binom{n}{r} p^r q^{n-r}$$

where:

- $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ = number of ways to choose positions for r successes
- $p^r$ = probability of r successes
- $q^{n-r}$ = probability of (n-r) failures

**This is the Binomial Distribution!**

### Why $\binom{n}{r}$?

- Each specific sequence with r successes has probability $p^r q^{n-r}$
- There are $\binom{n}{r}$ different sequences with r successes
- Total probability = (number of sequences) × (probability of each sequence)

---

## Important Probabilities

### At Least r Successes

At Least r Successes

$$P(X \geq r) = \sum_{k=r}^{n} \binom{n}{k} p^k q^{n-k}$$

**Alternative** (often easier):

$$P(X \geq r) = 1 - P(X < r) = 1 - P(X \leq r-1)$$

### At Most r Successes

At Most r Successes

$$P(X \leq r) = \sum_{k=0}^{r} \binom{n}{k} p^k q^{n-k}$$

### Exactly r Successes in First m Trials

For consecutive successes at the beginning:

First m Trials

P(exactly r successes in first m trials) = $\binom{m}{r} p^r q^{m-r}$

This is independent of what happens in remaining (n - m) trials!

---

## Geometric Distribution (Related Concept)

**Question**: What’s the probability that the **first success** occurs on the **k-th trial**?

Geometric Distribution

$$P(\text{first success on trial } k) = q^{k-1} \times p = (1-p)^{k-1} p$$

**Interpretation**: (k-1) failures, then 1 success

**Expected number of trials until first success**:

$$E(k) = \frac{1}{p}$$

### Example: Rolling Until Getting a 6

$$P(\text{first 6 on roll 4}) = \left(\frac{5}{6}\right)^3 \times \frac{1}{6} = \frac{125}{1296}$$

Expected rolls until first 6: $E(k) = \frac{1}{1/6} = 6$ rolls

---

## Negative Binomial Distribution (Advanced)

**Question**: What’s the probability that the **r-th success** occurs on the **k-th trial**?

Negative Binomial

$$P(\text{r-th success on trial } k) = \binom{k-1}{r-1} p^r q^{k-r}$$

**Interpretation**:

- First (k-1) trials have exactly (r-1) successes
- The k-th trial is a success

---

## Interactive Visualization

---

## Memory Tricks

Memory Tricks

### 1. **“Bernoulli = Binary”**

- **B**ernoulli has **B**inary outcomes (2 only)

### 2. **“TFII” for Conditions**

- **T**wo outcomes
- **F**ixed probability
- **I**ndependent trials
- **I**dentical conditions

### 3. **Specific vs General**

- **Specific sequence**: Just multiply probabilities → $p^r q^{n-r}$
- **Any order**: Multiply by number of arrangements → $\binom{n}{r} p^r q^{n-r}$

### 4. **“Choose positions, then probabilities”**

- First: Choose where successes occur ($\binom{n}{r}$)
- Then: Multiply by probability of that pattern ($p^r q^{n-r}$)

### 5. **Geometric Distribution**

- **“Wait for success”** → Geometric
- Expected wait = $\frac{1}{p}$ (reciprocal of probability)

### 6. **At Least vs At Most**

- **At least r**: $P(X \geq r) = 1 - P(X \leq r-1)$ (use complement!)
- **At most r**: $P(X \leq r)$ (sum from 0 to r)

---

## Common Mistakes to Avoid

Common Mistakes

1. **Forgetting independence**: Can’t use Bernoulli if trials affect each other (e.g., drawing without replacement)
2. **Wrong probability for sequence**: P(SSFF) = $p^2 q^2$, NOT $p + p + q + q$
3. **Confusing specific vs any order**:

   - P(exactly HHT) = $(1/2)^3$ (specific sequence)
   - P(exactly 2 heads in 3 tosses) = $\binom{3}{2}(1/2)^3$ (any order)
4. **“At least” calculation**: P(X ≥ 3) means 3, 4, 5, &mldr;, n (not just 3!)
5. **Changing p**: If probability changes between trials, not Bernoulli!
6. **Not checking independence**: Phone calls, customer arrivals might not be independent
7. **Geometric confusion**: “First success on trial k” needs (k-1) failures first

---

## Solved Examples

### Example 1: Specific Sequence (Penalty Kicks)

**Problem**: A player takes 5 penalty kicks with P(score) = 0.8. Find probability of sequence: Score, Score, Score, Miss, Miss.

**Solution**:

Specific sequence SSSFF:

$$P(SSSFF) = (0.8)(0.8)(0.8)(0.2)(0.2) = (0.8)^3 (0.2)^2$$

$$= 0.512 \times 0.04 = 0.02048$$

**Answer**: 0.02048 or about 2.05%

---

### Example 2: Any Order (Penalty Kicks Continued)

**Problem**: Same setup. Find probability of exactly 3 scores in any order.

**Solution**:

Number of ways to arrange 3 scores in 5 shots: $\binom{5}{3} = 10$

Each arrangement has probability $(0.8)^3 (0.2)^2$

$$P(X = 3) = \binom{5}{3} (0.8)^3 (0.2)^2 = 10 \times 0.512 \times 0.04 = 0.2048$$

**Answer**: 0.2048 or about 20.5%

---

### Example 3: At Least (True/False Test)

**Problem**: A student guesses on 6 true/false questions. Find probability of passing (at least 4 correct).

**Solution**:

$p = 0.5$, $n = 6$, need $P(X \geq 4)$

**Method 1** (Direct):

$$P(X \geq 4) = P(X=4) + P(X=5) + P(X=6)$$

$$P(X=4) = \binom{6}{4} (0.5)^6 = 15 \times \frac{1}{64} = \frac{15}{64}$$

$$P(X=5) = \binom{6}{5} (0.5)^6 = 6 \times \frac{1}{64} = \frac{6}{64}$$

$$P(X=6) = \binom{6}{6} (0.5)^6 = 1 \times \frac{1}{64} = \frac{1}{64}$$

$$P(X \geq 4) = \frac{15 + 6 + 1}{64} = \frac{22}{64} = \frac{11}{32}$$

**Method 2** (Complement):

$$P(X \geq 4) = 1 - P(X \leq 3)$$

$$P(X \leq 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)$$

$$= \frac{1 + 6 + 15 + 20}{64} = \frac{42}{64}$$

$$P(X \geq 4) = 1 - \frac{42}{64} = \frac{22}{64} = \frac{11}{32}$$

**Answer**: 11/32 ≈ 0.344 or about 34.4%

---

### Example 4: Geometric Distribution (Rolling a Die)

**Problem**: A die is rolled repeatedly. Find:
(a) P(first 6 on roll 3)
(b) P(first 6 within 3 rolls)
(c) Expected rolls until first 6

**Solution**:

**(a) First 6 on roll 3**: Need non-6, non-6, then 6

$$P(\text{first 6 on roll 3}) = \left(\frac{5}{6}\right)^2 \times \frac{1}{6} = \frac{25}{36} \times \frac{1}{6} = \frac{25}{216}$$

**(b) First 6 within 3 rolls**: P(on roll 1, 2, or 3)

$$P = \frac{1}{6} + \frac{5}{6} \times \frac{1}{6} + \left(\frac{5}{6}\right)^2 \times \frac{1}{6}$$

$$= \frac{1}{6}\left[1 + \frac{5}{6} + \frac{25}{36}\right] = \frac{1}{6} \times \frac{36 + 30 + 25}{36} = \frac{91}{216}$$

**Alternative** (complement): 1 - P(no 6 in first 3)

$$= 1 - \left(\frac{5}{6}\right)^3 = 1 - \frac{125}{216} = \frac{91}{216}$$

**(c) Expected rolls**:

$$E = \frac{1}{p} = \frac{1}{1/6} = 6 \text{ rolls}$$

---

### Example 5: First m Trials (JEE Pattern)

**Problem**: A coin is tossed 10 times. Find probability of:
(a) Exactly 3 heads in first 5 tosses
(b) Exactly 3 heads in first 5 tosses AND exactly 2 heads in last 5 tosses

**Solution**:

**(a) First 5 tosses only**:

Treat as binomial with n = 5, r = 3, p = 0.5

$$P = \binom{5}{3} (0.5)^5 = 10 \times \frac{1}{32} = \frac{10}{32} = \frac{5}{16}$$

(What happens in tosses 6-10 doesn’t matter!)

**(b) Both conditions**:

Events are **independent** (different tosses), so multiply:

$$P(\text{3 in first 5}) = \frac{5}{16}$$

$$P(\text{2 in last 5}) = \binom{5}{2} (0.5)^5 = 10 \times \frac{1}{32} = \frac{10}{32} = \frac{5}{16}$$

$$P(\text{both}) = \frac{5}{16} \times \frac{5}{16} = \frac{25}{256}$$

---

### Example 6: Negative Binomial (Advanced)

**Problem**: A basketball player has 60% free throw success rate. Find probability that her 3rd successful shot is on her 5th attempt.

**Solution**:

Need exactly 2 successes in first 4 attempts, then success on 5th:

$$P = \binom{4}{2} (0.6)^2 (0.4)^2 \times 0.6$$

$$= 6 \times 0.36 \times 0.16 \times 0.6 = 6 \times 0.03456 = 0.20736$$

**Alternative** (negative binomial formula):

$$P = \binom{4}{2} (0.6)^3 (0.4)^2 = 6 \times 0.216 \times 0.16 = 0.20736$$

**Answer**: About 20.7%

---

## Practice Problems

### Level 1: Foundation (JEE Main)

1. A fair coin is tossed 4 times. Find P(exactly HTHT in that order).
2. A die is rolled 3 times. Find P(getting three 6’s).
3. For 5 Bernoulli trials with p = 0.3, find P(exactly 2 successes).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>P(HTHT) = (1/2)⁴ = 1/16</p></li><li><p>P(666) = (1/6)³ = 1/216</p></li><li><p>P(X=2) = C(5,2) × (0.3)² × (0.7)³ = 10 × 0.09 × 0.343 = 0.3087</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. A student answers 10 multiple choice questions (4 options each) by guessing. Find:
   (a) P(exactly 5 correct)
   (b) P(at least 8 correct)
5. A basketball player makes 70% of free throws. She takes 6 shots. Find P(makes first 3, misses next 2, makes last 1).
6. Rolling a die repeatedly, find P(first 1 or 2 appears on 4th roll).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>p = 1/4, n = 10
(a) P(X=5) = C(10,5) × (1/4)⁵ × (3/4)⁵ ≈ 0.0584
(b) P(X≥8) = P(X=8) + P(X=9) + P(X=10) ≈ 0.0004</p></li><li><p>P = (0.7)³ × (0.3)² × 0.7 = (0.7)⁴ × (0.3)² = 0.2401 × 0.09 = 0.0216</p></li><li><p>P(success) = 2/6 = 1/3, need 3 failures then success
P = (2/3)³ × (1/3) = 8/81</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. In n Bernoulli trials with probability p, show that P(even number of successes) = $\frac{1 + (1-2p)^n}{2}$.
8. A coin is tossed until 2 heads appear. Find the probability this takes exactly 5 tosses.
9. Prove that for Bernoulli trials, the mode (most likely number of successes) is $\lfloor (n+1)p \rfloor$.

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>P(even) = Σ C(n,2k) p²ᵏ q^(n-2k) for k=0,1,2,&amp;mldr;
Using binomial theorem: (p+q)ⁿ = 1 and (p-q)ⁿ = (1-2p)ⁿ
Add: 2×P(even) = 1 + (1-2p)ⁿ → P(even) = [1 + (1-2p)ⁿ]/2 ✓</p></li><li><p>Need exactly 1 head in first 4 tosses, then head on 5th:
P = C(4,1) × (1/2)⁴ × (1/2) = 4 × (1/2)⁵ = 4/32 = 1/8</p></li><li><p>P(X=k) is maximum when C(n,k)pᵏq^(n-k) is maximum.
Consider ratio: P(X=k)/P(X=k-1) = [(n-k+1)/k] × [p/q]
P(X=k) &gt; P(X=k-1) when (n-k+1)p &gt; kq → k &lt; (n+1)p
Maximum when k = floor[(n+1)p] ✓</p></li></ol></div></details>

---

## Real-Life Applications

### 1. Quality Control

- Test n items independently
- Each pass/fail with probability p
- Calculate defect probabilities

### 2. Sports Analytics

- Free throws, penalty kicks (independent attempts)
- Batting average (hits vs at-bats)
- Win streaks analysis

### 3. Medical Testing

- n patients receive treatment
- Each recovers with probability p
- Predict success rates

### 4. Marketing

- n customers contacted
- Each buys with probability p
- Sales forecasting

### 5. Reliability Engineering

- n components in system
- Each fails with probability q
- System reliability calculation

### 6. Games and Gambling

- Repeated plays of game
- Calculate winning probabilities
- Expected value analysis

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Probability Distributions](../probability-distributions/index.md) - Bernoulli trials → Binomial distribution
- [Random Variables](../random-variables/index.md) - Bernoulli is simplest discrete RV
- [Conditional Probability](../conditional-probability/index.md) - Independence crucial for Bernoulli
- [Probability Basics](../probability-basics/index.md) - Foundation of all probability
- [Permutations & Combinations](../../permutations-combinations/index.md) - $\binom{n}{r}$ in formulas

**Key Connections**:

- **Single Bernoulli trial** → Bernoulli distribution
- **n Bernoulli trials** → Binomial distribution
- **Wait for success** → Geometric distribution
- **Wait for r successes** → Negative binomial distribution

---

## Formula Quick Reference

Essential Formulas

### Single Bernoulli Trial

- P(success) = p, P(failure) = q = 1 - p
- E(X) = p, Var(X) = pq

### Specific Sequence (n trials)

- r successes, (n-r) failures: $p^r q^{n-r}$

### Any Order (n trials, r successes)

- $P(X = r) = \binom{n}{r} p^r q^{n-r}$ (Binomial)

### Geometric Distribution

- First success on trial k: $(1-p)^{k-1} p$
- Expected trials: $E = 1/p$

### Negative Binomial

- r-th success on trial k: $\binom{k-1}{r-1} p^r (1-p)^{k-r}$

---

## Quick Revision Checklist

Quick Revision

✓ **Bernoulli trial**: Two outcomes (success/failure), fixed p
✓ **TFII conditions**: Two outcomes, Fixed p, Independent, Identical
✓ **Specific sequence**: Just multiply → $p^r q^{n-r}$
✓ **Any order**: Choose positions + multiply → $\binom{n}{r} p^r q^{n-r}$
✓ **Independence**: Crucial! Can’t use Bernoulli without it
✓ **Geometric**: Wait for first success, E = 1/p
✓ **n Bernoulli trials = Binomial distribution**
✓ **At least r**: Use complement often easier

---

## Exam Tips

1. **Check independence**: First verify trials are independent
2. **Specific vs general**: Does order matter? If yes, no $\binom{n}{r}$
3. **“At least”**: Consider using complement (1 - P(less than))
4. **Geometric shortcut**: For “first success”, use $(1-p)^{k-1}p$ directly
5. **Split problems**: “First m trials and last n-m trials” → multiply probabilities
6. **Verify p + q = 1**: Common check to avoid errors
7. **Calculator**: Know C(n,r) function on your calculator

---

## Summary

Bernoulli trials are the building blocks of many probability problems:

- **One trial** → Bernoulli distribution
- **Count successes in n trials** → Binomial distribution
- **Wait for first success** → Geometric distribution
- **Wait for r-th success** → Negative binomial

Master Bernoulli trials, and you’ve mastered the foundation of discrete probability!

---

## Next Steps

You’ve completed the Statistics & Probability chapter! Review and consolidate:

- [Measures of Central Tendency](../measures-central-tendency/index.md) - Start from statistics basics
- [Probability Basics](../probability-basics/index.md) - Review probability foundations
- Practice mixed problems combining all topics

---

*Last updated: December 22, 2025*
*Perfect your Bernoulli trials at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Bernoulli Trials.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fbernoulli-trials%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/bernoulli-trials/",this.page.identifier="/mathematics/statistics-probability/bernoulli-trials/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422213849831"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422213849831")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/bernoulli-trials/](https://jeenotes.in/mathematics/statistics-probability/bernoulli-trials/) · raw HTML: `offline/mathematics/statistics-probability/bernoulli-trials/index.html`_
