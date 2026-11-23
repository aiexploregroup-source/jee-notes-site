---
title: "Bayes Theorem: Formula, Proof & Examples"
source: "https://jeenotes.in/mathematics/statistics-probability/bayes-theorem/"
description: "Bayes theorem for JEE: formula P(B|A)=P(A|B)P(B)/P(A), total probability, step-by-step solved examples and PYQ-style problems."
updated: "2026-10-29"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 10"
html: "../../../../offline/mathematics/statistics-probability/bayes-theorem/index.html"
extracted: "2026-11-23"
---

> Bayes theorem for JEE: formula P(B|A)=P(A|B)P(B)/P(A), total probability, step-by-step solved examples and PYQ-style problems.

[Statistics & Probability notes](../index.md)

Bayes’ theorem lets you reverse a [conditional probability](../conditional-probability/index.md). If you know how likely an observation A is under each possible cause, it gives the probability of a cause B once A has been observed: P(B|A) = P(A|B)·P(B) / P(A), where P(A) > 0. When the events E₁, E₂, …, Eₙ partition the sample space, the denominator comes from the [theorem of total probability](../probability-basics/index.md) (also see [probability basics](../probability-basics/index.md)): P(A) = Σ P(A|Eᵢ)P(Eᵢ). So P(Eᵢ|A) = P(A|Eᵢ)P(Eᵢ) / Σⱼ P(A|Eⱼ)P(Eⱼ). This page covers the derivation from conditional probability, the standard urn, bag and test-accuracy problems, and common traps. It is for JEE Main and Advanced aspirants and for Class 12 students revising probability.

## The Monty Hall Problem

You’re on a game show with 3 doors. Behind one is a car, behind the others are goats. You pick Door 1. The host (who knows what’s behind each door) opens Door 3, revealing a goat. He asks: “Do you want to switch to Door 2?”

**Should you switch?**

**Surprising answer**: Yes! Switching **doubles** your winning probability from 1/3 to 2/3!

This counterintuitive result comes from **Bayes’ Theorem**—the most powerful tool in probability theory, used in AI, medical diagnosis, spam filters, and even solving JEE problems!

---

## What is Bayes’ Theorem?

**Bayes’ Theorem** allows us to **reverse** conditional probabilities:

- We know P(A|B) but want P(B|A)
- We can update probabilities based on new evidence

### The Reversal Problem

**Example**:

- We know: P(positive test | disease) = 95%
- We want: P(disease | positive test) = ?

These are **NOT** the same! Bayes’ theorem bridges the gap.

---

## Partition of Sample Space

Before Bayes’ theorem, we need the concept of **partition**.

### Definition

Events $B_1, B_2, ..., B_n$ form a **partition** of sample space S if:

Partition Conditions

1. **Mutually Exclusive**: $B_i \cap B_j = \emptyset$ for all $i \neq j$
2. **Exhaustive**: $B_1 \cup B_2 \cup ... \cup B_n = S$
3. **Non-empty**: $P(B_i) > 0$ for all $i$

**In words**: The events divide S into non-overlapping pieces that cover everything.

**Visual**: Like slicing a pizza into non-overlapping pieces that together make the whole pizza.

### Examples

1. **Two coins**: {HH, HT, TH, TT} is a partition (but {HH, HT} is not—doesn’t cover all)
2. **Die roll**: {even, odd} is a partition
3. **Cards**: {spades, hearts, diamonds, clubs} is a partition
4. **Disease**: {has disease, doesn’t have disease} is a partition

---

## Law of Total Probability

Once we have a partition, we can find P(A) by considering all cases:

Law of Total Probability

If $B_1, B_2, ..., B_n$ form a partition of S, then for any event A:

$$P(A) = \sum_{i=1}^{n} P(B_i) \times P(A|B_i)$$

**For two events** (most common in JEE):

$$P(A) = P(B) \times P(A|B) + P(B') \times P(A|B')$$

### Intuition

Total probability of A = (Probability A happens via route 1) + (via route 2) + &mldr; + (via route n)

**Example**: Probability of drawing a red ball = P(Bag 1) × P(red|Bag 1) + P(Bag 2) × P(red|Bag 2)

---

## Bayes’ Theorem

Now the main event!

Bayes' Theorem

**General Form**:

$$P(B_i|A) = \frac{P(B_i) \times P(A|B_i)}{P(A)} = \frac{P(B_i) \times P(A|B_i)}{\sum_{j=1}^{n} P(B_j) \times P(A|B_j)}$$

**For two events** (most common):

$$P(B|A) = \frac{P(B) \times P(A|B)}{P(A)} = \frac{P(B) \times P(A|B)}{P(B) \times P(A|B) + P(B') \times P(A|B')}$$

**Alternative notation**:

$$P(B|A) = \frac{P(A \cap B)}{P(A)} = \frac{P(B) \times P(A|B)}{P(A)}$$

[probability formula sheet](../formula-sheet/index.md)

### Components

- **P(B)**: **Prior probability** (before seeing evidence A)
- **P(A|B)**: **Likelihood** (probability of evidence given hypothesis)
- **P(B|A)**: **Posterior probability** (updated belief after seeing evidence)
- **P(A)**: **Marginal probability** (total probability of evidence)

---

## Visual Understanding

**Think of it as**:

```fallback
┌─── P(A|B₁) ──→ P(B₁|A)
P(B₁) ───┤
         └─── P(A'|B₁)

         ┌─── P(A|B₂) ──→ P(B₂|A)
P(B₂) ───┤
         └─── P(A'|B₂)
```

We know the “forward” probabilities (left to right), Bayes gives us “backward” (right to left).

---

## Memory Tricks

Memory Tricks for Bayes' Theorem

### 1. **“Bayes Flips the Fraction”**

- Know P(A|B)? Bayes gives P(B|A)
- **B**ayes **R**everses / **F**lips

### 2. **Formula Memory: “Prior × Likelihood / Evidence”**

$$P(B|A) = \frac{P(B) \times P(A|B)}{P(A)}$$

- **Prior**: P(B) - what we believed before
- **Likelihood**: P(A|B) - how likely is evidence if B is true
- **Evidence**: P(A) - total probability of seeing evidence

### 3. **Denominator Expansion: “Same Terms + Complement”**

$$P(B|A) = \frac{P(B) \cdot P(A|B)}{P(B) \cdot P(A|B) + P(B') \cdot P(A|B')}$$

- Numerator term **appears** in denominator
- Plus **complement** term

### 4. **“Total Probability First, Then Bayes”**

- Step 1: Find P(A) using total probability
- Step 2: Apply Bayes’ formula

### 5. **Mnemonic: “BALE”**

- **B**ayes = **A**lgebra reversal
- **L**ikelihood times prior
- **E**vidence divides

### 6. **“The Numerator is the Path”**

In tree diagrams:

- Numerator = probability of specific path to A via B
- Denominator = sum of all paths to A

---

## Common Mistakes to Avoid

Common Mistakes

1. **Confusing P(A|B) with P(B|A)**: The most common error!

   - P(disease | symptoms) ≠ P(symptoms | disease)
2. **Forgetting the denominator**: Can’t just write P(B) × P(A|B)

   - Must divide by P(A) or expand denominator
3. **Wrong denominator expansion**:

   - Correct: P(B)P(A|B) + P(B’)P(A|B')
   - Wrong: P(A|B) + P(A|B')
4. **Not checking partition**: B₁, B₂, &mldr; must be mutually exclusive and exhaustive
5. **Adding instead of multiplying**: P(B ∩ A) = P(B) × P(A|B), NOT P(B) + P(A|B)
6. **Ignoring base rates**: Prior probability P(B) matters a lot (especially for rare events)
7. **Calculation errors**: Bayes problems have many fractions—work carefully!

---

## Solved Examples

### Example 1: Medical Test (Classic Bayes)

**Problem**: A disease affects 2% of the population. A test for it is 90% accurate (both sensitivity and specificity). If you test positive, what’s the probability you have the disease?

**Solution**:

**Let**:

- D = has disease, D’ = doesn’t have disease
- T = tests positive

**Given**:

- P(D) = 0.02, P(D’) = 0.98
- P(T|D) = 0.90 (sensitivity)
- P(T’|D’) = 0.90, so P(T|D’) = 0.10 (false positive rate)

**Find**: P(D|T)

**Step 1**: Total probability of T

$$P(T) = P(D) \times P(T|D) + P(D') \times P(T|D')$$

$$= 0.02 \times 0.90 + 0.98 \times 0.10$$

$$= 0.018 + 0.098 = 0.116$$

**Step 2**: Bayes’ theorem

$$P(D|T) = \frac{P(D) \times P(T|D)}{P(T)} = \frac{0.02 \times 0.90}{0.116} = \frac{0.018}{0.116} \approx 0.155$$

**Answer**: Only **15.5%** chance of having disease even with positive test!

**Why?** Disease is rare (2%), so most positive tests are false positives.

---

### Example 2: Three Bags (JEE Pattern)

**Problem**:

- Bag 1: 3 red, 2 blue
- Bag 2: 2 red, 3 blue
- Bag 3: 4 red, 1 blue

A bag is chosen at random and a ball is drawn, which turns out to be red. Find the probability it came from Bag 1.

**Solution**:

**Let**:

- $B_i$ = Bag i chosen, $i = 1, 2, 3$
- R = red ball drawn

**Given**:

- $P(B_1) = P(B_2) = P(B_3) = 1/3$ (random selection)
- $P(R|B_1) = 3/5$
- $P(R|B_2) = 2/5$
- $P(R|B_3) = 4/5$

**Find**: $P(B_1|R)$

**Step 1**: Total probability of R

$$P(R) = P(B_1) \times P(R|B_1) + P(B_2) \times P(R|B_2) + P(B_3) \times P(R|B_3)$$

$$= \frac{1}{3} \times \frac{3}{5} + \frac{1}{3} \times \frac{2}{5} + \frac{1}{3} \times \frac{4}{5}$$

$$= \frac{1}{3}\left(\frac{3 + 2 + 4}{5}\right) = \frac{1}{3} \times \frac{9}{5} = \frac{9}{15} = \frac{3}{5}$$

**Step 2**: Bayes’ theorem

$$P(B_1|R) = \frac{P(B_1) \times P(R|B_1)}{P(R)} = \frac{\frac{1}{3} \times \frac{3}{5}}{\frac{3}{5}} = \frac{\frac{1}{5}}{\frac{3}{5}} = \frac{1}{3}$$

**Alternative** (faster):

$$P(B_1|R) = \frac{\frac{1}{3} \times \frac{3}{5}}{\frac{1}{3} \times \frac{3}{5} + \frac{1}{3} \times \frac{2}{5} + \frac{1}{3} \times \frac{4}{5}} = \frac{\frac{3}{5}}{\frac{9}{5}} = \frac{3}{9} = \frac{1}{3}$$

---

### Example 3: Two Machines (Quality Control)

**Problem**: Machine A produces 60% of items, Machine B produces 40%. Defect rates: A = 2%, B = 5%. A defective item is found. What’s the probability it came from Machine A?

**Solution**:

**Let**:

- A, B = item from machine A, B
- D = defective

**Given**:

- P(A) = 0.6, P(B) = 0.4
- P(D|A) = 0.02, P(D|B) = 0.05

**Find**: P(A|D)

$$P(D) = 0.6 \times 0.02 + 0.4 \times 0.05 = 0.012 + 0.020 = 0.032$$

$$P(A|D) = \frac{0.6 \times 0.02}{0.032} = \frac{0.012}{0.032} = \frac{12}{32} = \frac{3}{8} = 0.375$$

**Answer**: 37.5% probability from Machine A (even though A produces more, its lower defect rate helps)

---

### Example 4: Coins (JEE Advanced)

**Problem**: Box 1 has 2 fair coins, Box 2 has 1 fair and 1 double-headed coin. A box is selected at random, a coin is picked from it and flipped, showing heads. Find the probability it’s the double-headed coin.

**Solution**:

**Let**:

- $B_1$, $B_2$ = Box 1, 2 chosen
- $C_D$ = double-headed coin chosen
- H = heads obtained

**Given**:

- $P(B_1) = P(B_2) = 1/2$
- If $B_1$: Both coins fair, P(H) = 1/2 for each, so no double-headed coin
- If $B_2$: P(fair coin) = 1/2, P(double-headed) = 1/2
  - P(H | fair) = 1/2
  - P(H | double-headed) = 1

**Find**: $P(C_D|H)$

**Method**: Consider all scenarios

From $B_1$: P = 1/2 × 1 × 1/2 = 1/4 (any coin, gets H)
From $B_2$, fair coin: P = 1/2 × 1/2 × 1/2 = 1/8
From $B_2$, double-headed: P = 1/2 × 1/2 × 1 = 1/4

Total P(H) = 1/4 + 1/8 + 1/4 = 5/8

$$P(C_D|H) = \frac{1/4}{5/8} = \frac{1}{4} \times \frac{8}{5} = \frac{2}{5}$$

---

### Example 5: Three Defendants (Probability Puzzle)

**Problem**: Three defendants A, B, C are on trial. Probabilities of conviction:

- P(A guilty) = 0.6
- P(B guilty) = 0.5
- P(C guilty) = 0.4

If at least one is convicted, a witness testifies. Given the witness testified, find P(only A is guilty).

**Solution**:

**Let**:

- $E_1$ = only A guilty
- $E_2$ = only B guilty
- $E_3$ = only C guilty
- $E_4$ = two or more guilty
- W = witness testifies

**Find**: $P(E_1|W)$

This requires careful calculation of:

- P(at least one guilty) = 1 - P(all innocent)
- P(all innocent) = 0.4 × 0.5 × 0.6 = 0.12
- P(at least one guilty) = 0.88

For only A guilty: P(A guilty, B not, C not) = 0.6 × 0.5 × 0.6 = 0.18

$$P(E_1|W) = \frac{0.18}{0.88} = \frac{18}{88} = \frac{9}{44}$$

---

### Example 6: Monty Hall Solution

**Problem**: Back to Monty Hall: 3 doors, 1 car, 2 goats. You pick Door 1, host opens Door 3 (goat). Should you switch to Door 2?

**Solution**:

**Initially**: P(car behind Door 1) = P(Door 2) = P(Door 3) = 1/3

**Event**: Host opens Door 3 (showing goat)

**Key insight**: Host KNOWS where car is and ALWAYS opens a goat door.

**Case 1**: Car behind Door 1 (prob 1/3)

- Host randomly opens 2 or 3 (both goats)
- Switching loses

**Case 2**: Car behind Door 2 (prob 1/3)

- Host MUST open Door 3 (only goat available)
- Switching wins

**Case 3**: Car behind Door 3 (prob 1/3)

- Host can’t open this (has car)
- This scenario doesn’t match (host opened 3)

**Using Bayes**:

Let B = “car behind Door 2” (hypothesis), A = “host opens Door 3” (evidence)

$$P(B|A) = \frac{P(B) \times P(A|B)}{P(B) \times P(A|B) + P(B') \times P(A|B')}$$

- P(B) = 1/3
- P(A|B) = 1 (if car at 2, host must open 3)
- P(B’) = 2/3 (car at 1 or 3)
- P(A|B’) = 1/4: given B’, the car is at Door 1 or Door 3 with probability 1/2 each. If it is at Door 1, the host opens Door 3 with probability 1/2; if it is at Door 3, he never opens Door 3. So P(A|B’) = (1/2)(1/2) + (1/2)(0) = 1/4

$$P(B|A) = \frac{\frac{1}{3} \times 1}{\frac{1}{3} \times 1 + \frac{2}{3} \times \frac{1}{4}} = \frac{1/3}{1/3 + 1/6} = \frac{1/3}{1/2} = \frac{2}{3}$$

So after the host opens Door 3, Door 2 has probability 2/3 and your Door 1 keeps 1 − 2/3 = 1/3.

**Answer**: P(win by switching) = 2/3. **Always switch!**

---

[Bayes theorem previous year questions](../previous-year-questions/index.md)

## Practice Problems

### Level 1: Foundation (JEE Main)

1. Bag A: 5 red, 3 blue. Bag B: 2 red, 6 blue. A bag is chosen (equal probability), ball drawn is red. Find P(Bag A).
2. A test is 80% accurate. Disease prevalence is 5%. If you test positive, find P(disease).
3. Two dice rolls: First shows 4. What’s P(sum ≥ 7)?

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>P(A) = P(B) = 1/2, P(R|A) = 5/8, P(R|B) = 2/8 = 1/4
P(R) = (1/2)(5/8) + (1/2)(1/4) = 5/16 + 2/16 = 7/16
P(A|R) = (1/2)(5/8) / (7/16) = (5/16)/(7/16) = 5/7</p></li><li><p>P(D) = 0.05, P(T|D) = 0.8, P(T|D’) = 0.2
P(T) = 0.05×0.8 + 0.95×0.2 = 0.04 + 0.19 = 0.23
P(D|T) = 0.04/0.23 ≈ 0.174 = 17.4%</p></li><li><p>Sample space given first = 4: {(4,1), (4,2), &amp;mldr;, (4,6)}
Sum ≥ 7: need second ≥ 3, i.e., {(4,3), (4,4), (4,5), (4,6)}
P = 4/6 = 2/3</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. Three boxes: I (2R, 3B), II (3R, 2B), III (4R, 1B). Box chosen randomly, 2 balls drawn (with replacement) are red. Find P(Box I).
5. Email spam filter: 10% emails are spam. Filter catches 95% of spam, but marks 3% of genuine as spam. An email is marked spam. Find P(actually spam).
6. Urn has 5 red, 7 blue. Two balls drawn without replacement. First is red. Find P(second is red).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>P(I) = P(II) = P(III) = 1/3
P(2R|I) = (2/5)² = 4/25
P(2R|II) = (3/5)² = 9/25
P(2R|III) = (4/5)² = 16/25
P(2R) = (1/3)(4/25 + 9/25 + 16/25) = (1/3)(29/25) = 29/75
P(I|2R) = (1/3)(4/25) / (29/75) = (4/75)/(29/75) = 4/29</p></li><li><p>P(S) = 0.1, P(M|S) = 0.95, P(M|S’) = 0.03
P(M) = 0.1×0.95 + 0.9×0.03 = 0.095 + 0.027 = 0.122
P(S|M) = 0.095/0.122 ≈ 0.779 = 77.9%</p></li><li><p>Not Bayes—simple conditional: P(2nd R | 1st R) = 4/11
(After 1st red, 4 red and 7 blue remain out of 11 total)</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. A bag has n red and n blue balls. Two balls drawn at random (without replacement) are found to be of the same color. Find the probability both are red.
8. Box has 3 coins: C₁ (fair), C₂ (P(H) = 3/4), C₃ (double-headed). A coin is randomly chosen and flipped twice, giving HH. Find P(C₃).
9. Prove: If B₁, B₂ form a partition and P(B₁) = P(B₂), then P(B₁|A) ≥ P(B₁) iff P(A|B₁) ≥ P(A|B₂).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>P(both same color) = P(RR) + P(BB)
P(RR) = (n/2n) × ((n-1)/(2n-1)) = n(n-1)/(2n(2n-1))
P(BB) = same = n(n-1)/(2n(2n-1))
P(same) = 2n(n-1)/(2n(2n-1)) = (n-1)/(2n-1)
P(RR|same) = P(RR)/P(same) = [n(n-1)/(2n(2n-1))] / [(n-1)/(2n-1)]
= n(n-1)/(2n(2n-1)) × (2n-1)/(n-1) = n/2n = 1/2</p></li><li><p>P(C₁) = P(C₂) = P(C₃) = 1/3
P(HH|C₁) = 1/4, P(HH|C₂) = 9/16, P(HH|C₃) = 1
P(HH) = (1/3)(1/4 + 9/16 + 1) = (1/3)(4/16 + 9/16 + 16/16) = (1/3)(29/16) = 29/48
P(C₃|HH) = (1/3×1)/(29/48) = (1/3) × (48/29) = 16/29</p></li><li><p>If P(B₁) = P(B₂) = p, then:
P(B₁|A) = P(B₁)P(A|B₁)/P(A) and P(B₂|A) = P(B₂)P(A|B₂)/P(A)
P(B₁|A) ≥ P(B₁) → P(B₁)P(A|B₁)/P(A) ≥ P(B₁) → P(A|B₁) ≥ P(A)
Since P(A) = pP(A|B₁) + pP(A|B₂) = p(P(A|B₁) + P(A|B₂))
P(A|B₁) ≥ p(P(A|B₁) + P(A|B₂)) → P(A|B₁) ≥ P(A|B₂) ✓</p></li></ol></div></details>

---

## Real-Life Applications

### 1. Medical Diagnosis

- Calculate P(disease | symptoms) from P(symptoms | disease)
- Account for disease prevalence (base rate)
- Critical for interpreting test results

### 2. Spam Filters

- Bayesian spam filtering (Naive Bayes)
- Updates P(spam | word) based on training data
- Used by Gmail, Outlook

### 3. Machine Learning

- Naive Bayes classifier
- Bayesian networks
- Updating beliefs with new data

### 4. Weather Forecasting

- Update probability of rain with new measurements
- Bayesian data assimilation
- Ensemble forecasting

### 5. Court Cases

- Evidence updates probability of guilt
- DNA match interpretation
- Prosecutor’s fallacy (confusing P(A|B) with P(B|A))

### 6. Search Engines

- Ranking pages based on query
- P(relevant | keywords) from P(keywords | relevant)
- Google’s PageRank (variant)

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Conditional Probability](../conditional-probability/index.md) - Foundation for Bayes
- [Probability Basics](../probability-basics/index.md) - Sample spaces and events
- [Random Variables](../random-variables/index.md) - Bayesian inference for distributions
- [Probability Distributions](../probability-distributions/index.md) - Prior and posterior distributions
- [Bernoulli trials and binomial distribution](../bernoulli-trials/index.md)

**Advanced Connections**:

- **Bayes** + **Total Probability** = Complete toolkit
- **Reversing probabilities** = Key to many JEE problems
- **Tree diagrams** = Visual Bayes calculation

---

## Bayes’ Theorem Variations

Different Forms of Bayes

**Form 1** (Basic):

$$P(B|A) = \frac{P(A|B) \times P(B)}{P(A)}$$

**Form 2** (Expanded denominator):

$$P(B|A) = \frac{P(A|B) \times P(B)}{P(A|B) \times P(B) + P(A|B') \times P(B')}$$

**Form 3** (Multiple hypotheses):

$$P(B_i|A) = \frac{P(A|B_i) \times P(B_i)}{\sum_{j} P(A|B_j) \times P(B_j)}$$

**Form 4** (Odds form):

$$\frac{P(B|A)}{P(B'|A)} = \frac{P(B)}{P(B')} \times \frac{P(A|B)}{P(A|B')}$$

(Posterior odds = Prior odds × Likelihood ratio)

---

## Step-by-Step Strategy

How to Solve Bayes Problems

**Step 1**: Identify what you’re finding

- Want P(B|A) where A is given information

**Step 2**: List known information

- Prior: P(B), P(B’), &mldr;
- Likelihoods: P(A|B), P(A|B’), &mldr;

**Step 3**: Check if partition exists

- Do B, B’, &mldr; cover all cases?
- Are they mutually exclusive?

**Step 4**: Calculate P(A) using total probability

$$P(A) = \sum_i P(B_i) \times P(A|B_i)$$

**Step 5**: Apply Bayes’ formula

$$P(B|A) = \frac{P(B) \times P(A|B)}{P(A)}$$

**Step 6**: Simplify and verify

- Check if answer makes sense (0 ≤ P ≤ 1)
- Does it match intuition?

---

## Quick Revision Checklist

Quick Revision

✓ **Partition**: Mutually exclusive, exhaustive, non-empty events
✓ **Total Probability**: P(A) = ΣP(Bᵢ)P(A|Bᵢ)
✓ **Bayes**: P(B|A) = P(B)P(A|B) / P(A)
✓ **Reversal**: Know P(A|B)? Bayes gives P(B|A)
✓ **Prior**: Initial probability P(B)
✓ **Likelihood**: P(A|B) - probability of evidence given hypothesis
✓ **Posterior**: Updated probability P(B|A) after seeing evidence
✓ **Base rate**: Don’t ignore P(B) - crucial for rare events!

---

## Exam Tips

1. **Identify reversal**: If problem asks for “probability of cause given effect”, use Bayes
2. **Draw tree diagram**: Helps visualize partition and paths
3. **Total probability first**: Calculate P(A) before applying Bayes
4. **Check partition**: Ensure events are mutually exclusive and exhaustive
5. **Base rate matters**: Small prior P(B) → small posterior even with strong evidence
6. **Simplify fractions**: Most Bayes answers are simple fractions
7. **Sanity check**: Does P(B|A) make sense relative to P(B)?

---

## Next Steps

Ready to work with probability functions? Continue to:

- [Random Variables](../random-variables/index.md) - Discrete and continuous random variables

---

*Last updated: December 19, 2025*
*Master Bayes’ Theorem at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Bayes Theorem: Formula, Proof & Examples.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fbayes-theorem%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/bayes-theorem/",this.page.identifier="/mathematics/statistics-probability/bayes-theorem/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422208852115"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422208852115")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/bayes-theorem/](https://jeenotes.in/mathematics/statistics-probability/bayes-theorem/) · raw HTML: `offline/mathematics/statistics-probability/bayes-theorem/index.html`_
