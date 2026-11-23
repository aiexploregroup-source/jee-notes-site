---
title: "Derangements - Permutations with No Fixed Points"
source: "https://jeenotes.in/mathematics/permutations-combinations/derangements/"
description: "Master derangements and advanced permutation concepts - learn the derangement formula !n, inclusion-exclusion principle, and solve complex arrangement problems where no element stays in its original position"
updated: "2025-12-26"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 7 of 9"
html: "../../../../offline/mathematics/permutations-combinations/derangements/index.html"
extracted: "2026-11-23"
---

> Master derangements and advanced permutation concepts - learn the derangement formula !n, inclusion-exclusion principle, and solve complex arrangement problems where no element stays in its original position

## Real-Life Hook: The Secret Santa Mix-Up

Your class of 5 students is doing Secret Santa. Everyone puts their name in a hat, and each person draws a name to buy a gift for. What’s the probability that **no one** draws their own name?

This is a **derangement** problem - one of the most elegant concepts in combinatorics!

For 5 people, the number of ways where no one gets their own name:

$$D_5 = 44 \text{ ways out of } 5! = 120 \text{ total ways}$$

Probability: $\frac{44}{120} = \frac{11}{30} \approx 0.367$ or about 37%

---

## Why This Topic Matters

Derangements solve problems where objects must be rearranged such that **no object remains in its original position**.

**Real-world applications**:

- **Secret Santa**: No one gets their own name
- **Hat problem**: n people take wrong hats
- **Matching problems**: Letters to wrong envelopes
- **Scheduling**: No task on its original day
- **Card shuffling**: Ensuring complete disorder

**JEE Importance**:

- **JEE Main**: Rare but high-scoring when it appears
- **JEE Advanced**: Often combined with probability or other P&C topics
- **Olympiad level**: Classic problem type
- **Distinguishing factor**: Shows deep understanding of counting

This is an **advanced topic** - master basics first, then tackle this!

---

## Core Concepts

### 1. Definition of Derangement

**Derangement**: A permutation where **no element appears in its original position**.

**Notation**: $D_n$ or $!n$ (subfactorial)

**Example**: For {1, 2, 3}:

- Permutations: 123, 132, 213, 231, 312, 321
- Fixed points:
  - 123: All fixed (1 in position 1, 2 in position 2, 3 in position 3)
  - 132: 1 fixed
  - 213: None fixed ✓ (derangement)
  - 231: None fixed ✓ (derangement)
  - 312: None fixed ✓ (derangement)
  - 321: None fixed ✓ (derangement)

Wait, let me reconsider. For 321:

- Position 1 has 3 (not 1) ✓
- Position 2 has 2 (is 2) ✗ Fixed!
- Position 3 has 1 (not 3) ✓

So 321 has a fixed point. Let me redo:

**Permutations of {1,2,3}**:

1. **123**: 1→1, 2→2, 3→3 (all fixed)
2. **132**: 1→1 (fixed), 2→3, 3→2
3. **213**: 1→2, 2→1, 3→3 (3 fixed)
4. **231**: 1→2, 2→3, 3→1 (none fixed) ✓
5. **312**: 1→3, 2→1, 3→2 (none fixed) ✓
6. **321**: 1→3, 2→2 (fixed), 3→1

**Derangements**: 231, 312 → $D_3 = 2$

### 2. Derangement Formula

$$\boxed{D_n = n! \left( 1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \ldots + (-1)^n \frac{1}{n!} \right)}$$

### Interactive Demo: Visualize Derangements

See how derangements create arrangements with no fixed points.

**Alternative form**:

$$\boxed{D_n = n! \sum_{i=0}^{n} \frac{(-1)^i}{i!}}$$

**Recursive formula**:

$$\boxed{D_n = (n-1)(D_{n-1} + D_{n-2})}$$

with $D_0 = 1, D_1 = 0$

**Approximation** (for large $n$):

$$\boxed{D_n \approx \frac{n!}{e}}$$

**Probability that a random permutation is a derangement**:

$$\boxed{P = \frac{D_n}{n!} \approx \frac{1}{e} \approx 0.368}$$

Remarkably, this probability approaches $1/e$ as $n$ increases!

### 3. First Few Values

| n | n! | $D_n$ | $D_n/n!$ |
| --- | --- | --- | --- |
| 0 | 1 | 1 | 1.000 |
| 1 | 1 | 0 | 0.000 |
| 2 | 2 | 1 | 0.500 |
| 3 | 6 | 2 | 0.333 |
| 4 | 24 | 9 | 0.375 |
| 5 | 120 | 44 | 0.367 |
| 6 | 720 | 265 | 0.368 |
| 7 | 5,040 | 1,854 | 0.368 |
| 10 | 3,628,800 | 1,334,961 | 0.368 |

**Notice**: $D_n/n!$ quickly converges to $1/e \approx 0.368$

### 4. Derivation via Inclusion-Exclusion

**Problem**: Find permutations of $n$ objects where no object is in its original position.

Let $A_i$ = set of permutations where object $i$ is in its original position.

**We want**: $|A_1^c \cap A_2^c \cap \ldots \cap A_n^c|$ (none in original position)

**By Inclusion-Exclusion**:

$$|A_1^c \cap \ldots \cap A_n^c| = n! - |A_1 \cup A_2 \cup \ldots \cup A_n|$$

$$|A_1 \cup \ldots \cup A_n| = \sum |A_i| - \sum |A_i \cap A_j| + \sum |A_i \cap A_j \cap A_k| - \ldots$$

**Calculate each term**:

- $|A_i|$ = permutations with object $i$ fixed = $(n-1)!$
- Number of such sets: $^nC_1$
- Total: $^nC_1 \cdot (n-1)!$
- $|A_i \cap A_j|$ = two objects fixed = $(n-2)!$
- Number of such sets: $^nC_2$
- Total: $^nC_2 \cdot (n-2)!$

Continuing:

$$|A_1 \cup \ldots| = ^nC_1(n-1)! - ^nC_2(n-2)! + ^nC_3(n-3)! - \ldots + (-1)^{n+1}(n-n)!$$

$$= \frac{n!}{1!} - \frac{n!}{2!} + \frac{n!}{3!} - \ldots + (-1)^{n+1}n!$$

$$= n!\left(1 - \frac{1}{2!} + \frac{1}{3!} - \ldots + \frac{(-1)^{n+1}}{n!}\right)$$

**Therefore**:

$$D_n = n! - n!\left(1 - \frac{1}{2!} + \frac{1}{3!} - \ldots\right)$$

$$= n!\left(1 - 1 + \frac{1}{2!} - \frac{1}{3!} + \ldots + \frac{(-1)^n}{n!}\right)$$

$$\boxed{D_n = n!\sum_{i=0}^{n}\frac{(-1)^i}{i!}}$$

### 5. Recursive Formula Explanation

$$D_n = (n-1)(D_{n-1} + D_{n-2})$$

**Why does this work?**

Consider object 1 in a derangement of $n$ objects:

- Object 1 must go to position $k$ where $k \neq 1$ (n-1 choices)

**Case 1**: Object at position $k$ goes to position 1

- We’ve swapped objects 1 and $k$
- Remaining $(n-2)$ objects must form a derangement
- Ways: $D_{n-2}$

**Case 2**: Object at position $k$ does NOT go to position 1

- Think of object $k$ as if it “should” be at position 1
- Now we have $n-1$ objects (including $k$) to derange
- Ways: $D_{n-1}$

**Total**: $(n-1)(D_{n-1} + D_{n-2})$

---

## Memory Tricks

### The “1/e” Rule

For $n \geq 7$, the probability of a derangement is approximately:

$$\frac{D_n}{n!} \approx \frac{1}{e} \approx 0.368 \approx 37\%$$

**Mnemonic**: “**D**erangement probability ≈ **D**ivide by **e**”

**Remarkably stable**: Whether you have 10 people or 100 people, the probability that no one gets their original item is always around 37%!

### Quick Calculation for Small n

**Remember these**:

- $D_2 = 1$: For {1,2}, only derangement is 21
- $D_3 = 2$: For {1,2,3}, derangements are 231 and 312
- $D_4 = 9$: Use formula or recursive

**Recursive trick** for mental calculation:

$$D_4 = 3(D_3 + D_2) = 3(2 + 1) = 9$$

$$D_5 = 4(D_4 + D_3) = 4(9 + 2) = 44$$

### Formula Memory Aid

$$D_n = n! \left(\frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \ldots\right)$$

**Pattern**: Alternating signs, factorials in denominator

**Compare to $e^x$**:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \ldots$$

For $x = -1$:

$$e^{-1} = \frac{1}{e} = 1 - 1 + \frac{1}{2!} - \frac{1}{3!} + \ldots$$

So: $\frac{D_n}{n!} \approx e^{-1} = \frac{1}{e}$

---

## Common Counting Mistakes

### ❌ Mistake 1: Confusing Derangement with “No Fixed Point”

**These are the same!** A derangement IS a permutation with no fixed points.

**Fixed point**: Element $i$ in position $i$

**Derangement**: Permutation with ZERO fixed points

### ❌ Mistake 2: Using Wrong Formula

**Problem**: Find $D_4$

**Wrong**: $D_4 = 4! - 4 \times 3! = 24 - 24 = 0$ ❌

**Right**: Use full inclusion-exclusion:

$$D_4 = 4!\left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!}\right)$$

$$= 24\left(1 - 1 + 0.5 - 0.167 + 0.042\right) = 24(0.375) = 9$$

✓

**Or recursive**: $D_4 = 3(D_3 + D_2) = 3(2+1) = 9$ ✓

### ❌ Mistake 3: Forgetting $D_0 = 1$

**Definition**: $D_0 = 1$ (empty permutation is vacuously a derangement)

This is needed for recursive formula and combinatorial proofs.

### ❌ Mistake 4: Incorrect Approximation

**Problem**: Approximate $D_{100}$

**Wrong**: $D_{100} \approx 100!/e = $ very large number ❌ (Correct!)

Actually, this is RIGHT! The approximation is:

$$D_n \approx \frac{n!}{e}$$

So $D_{100} \approx \frac{100!}{e}$ is correct.

**Common mistake**: Thinking $D_n \approx n!/e$ is “close to $n!$” so roughly $n!$. But $n!/e$ is significantly smaller (by factor of 2.718&mldr;).

---

## Problem-Solving Strategies

### Strategy 1: Recognize Derangement Keywords

**Look for**:

- “No one gets their own&mldr;”
- “All items in wrong positions”
- “No fixed points”
- “Each person gets someone else’s&mldr;”
- “Wrong envelope/hat problem”

### Strategy 2: Use Recursive Formula for Small n

For $n \leq 7$, recursion is fastest:

$$D_n = (n-1)(D_{n-1} + D_{n-2})$$

Starting values: $D_0 = 1, D_1 = 0, D_2 = 1$

### Strategy 3: Use Approximation for Large n

For $n \geq 7$:

$$D_n \approx \frac{n!}{e}$$

**Probability**: $\frac{D_n}{n!} \approx \frac{1}{e} \approx 0.368$

### Strategy 4: Partial Derangements

**Problem**: Exactly $k$ elements in correct positions

**Formula**:

$$\text{Permutations with exactly } k \text{ fixed} = ^nC_k \times D_{n-k}$$

**Reasoning**:

- Choose $k$ elements to fix: $^nC_k$
- Derange remaining $n-k$ elements: $D_{n-k}$

### Strategy 5: Inclusion-Exclusion for Variations

For problems like “at least 2 items in correct positions”:

$$\text{At least 2 fixed} = n! - (\text{0 fixed} + \text{1 fixed})$$

$$= n! - D_n - n \cdot D_{n-1}$$

---

## Practice Problems

### Level 1: Foundation (JEE Main)

**Problem 1.1**: Calculate $D_3$ directly by listing all derangements of {1,2,3}.

<details><summary>Solution</summary><p><strong>Answer</strong>: 2</p><p><strong>Solution</strong>:</p><p>Permutations of {1,2,3}: 123, 132, 213, 231, 312, 321</p><p>Check each:</p><ol><li><strong>123</strong>: 1→1 (fixed), not a derangement</li><li><strong>132</strong>: 1→1 (fixed), not a derangement</li><li><strong>213</strong>: 3→3 (fixed), not a derangement</li><li><strong>231</strong>: 1→2, 2→3, 3→1, no fixed points ✓</li><li><strong>312</strong>: 1→3, 2→1, 3→2, no fixed points ✓</li><li><strong>321</strong>: 2→2 (fixed), not a derangement</li></ol><p><strong>Derangements</strong>: {231, 312}</p><p><strong>$D_3 = 2$</strong></p></details>

**Problem 1.2**: Calculate $D_4$ using the recursive formula.

<details><summary>Solution</summary><p><strong>Answer</strong>: 9</p><p><strong>Solution</strong>:</p><p>Recursive formula: $D_n = (n-1)(D_{n-1} + D_{n-2})$</p><p>Given: $D_2 = 1, D_3 = 2$</p>$$D_4 = (4-1)(D_3 + D_2) = 3(2 + 1) = 3 \times 3 = 9$$</details>

**Problem 1.3**: Calculate $D_5$ using the derangement formula.

<details><summary>Solution</summary><p><strong>Answer</strong>: 44</p><p><strong>Solution</strong>:</p>$$D_5 = 5!\left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \frac{1}{5!}\right)$$

$$= 120\left(1 - 1 + 0.5 - 0.1667 + 0.0417 - 0.0083\right)$$

$$= 120(0.3667) = 44$$<p><strong>Or recursive</strong>:</p>$$D_5 = 4(D_4 + D_3) = 4(9 + 2) = 44$$</details>

**Problem 1.4**: What is the probability that a random permutation of 5 objects is a derangement?

<details><summary>Solution</summary><p><strong>Answer</strong>: $\frac{44}{120} = \frac{11}{30} \approx 0.367$</p><p><strong>Solution</strong>:</p>$$P = \frac{D_5}{5!} = \frac{44}{120} = \frac{11}{30} \approx 0.367$$<p><strong>Note</strong>: This is very close to $1/e \approx 0.368$!</p></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

**Problem 2.1**: Five letters are written to five different people and addressed to their respective addresses. In how many ways can the letters be put into envelopes such that at least one letter goes into the wrong envelope?

<details><summary>Solution</summary><p><strong>Answer</strong>: 119</p><p><strong>Solution</strong>:</p><p>“At least one wrong” = Total - “All correct”</p><ul><li>Total ways to put letters in envelopes: $5! = 120$</li><li>All correct: 1 way</li><li>At least one wrong: $120 - 1 = 119$</li></ul><p><strong>Alternative interpretation</strong>: “At least one wrong” might mean we want all calculations.</p><p>But the simplest interpretation:
<strong>Answer</strong>: 119</p></details>

**Problem 2.2**: Four people check their hats at a restaurant. When leaving, the hats are returned randomly. What is the probability that:
(a) No one gets their own hat?
(b) Exactly one person gets their own hat?
(c) Exactly two people get their own hats?

<details><summary>Solution</summary><p><strong>Solutions</strong>:</p><p><strong>(a) No one gets their own hat</strong> (complete derangement):</p>$$P = \frac{D_4}{4!} = \frac{9}{24} = \frac{3}{8} = 0.375$$<p><strong>(b) Exactly one person gets their own hat</strong>:</p><ul><li>Choose 1 person to get their hat: $^4C_1 = 4$</li><li>Remaining 3 must be deranged: $D_3 = 2$</li><li>Ways: $4 \times 2 = 8$</li><li>Probability: $\frac{8}{24} = \frac{1}{3} \approx 0.333$</li></ul><p><strong>(c) Exactly two people get their own hats</strong>:</p><ul><li>Choose 2 people to get their hats: $^4C_2 = 6$</li><li>Remaining 2 must be deranged: $D_2 = 1$</li><li>Ways: $6 \times 1 = 6$</li><li>Probability: $\frac{6}{24} = \frac{1}{4} = 0.25$</li></ul><p><strong>Verification</strong>:</p><ul><li>0 correct: 9</li><li>1 correct: 8</li><li>2 correct: 6</li><li>3 correct: 0 (impossible! If 2 get correct, 4th also correct)</li><li>4 correct: 1</li><li>Total: $9 + 8 + 6 + 0 + 1 = 24 = 4!$ ✓</li></ul></details>

**Problem 2.3**: Find the number of permutations of {1,2,3,4,5} in which exactly 2 elements are in their correct positions.

<details><summary>Solution</summary><p><strong>Answer</strong>: 20</p><p><strong>Solution</strong>:</p><ul><li>Choose 2 elements to be in correct positions: $^5C_2 = 10$</li><li>Remaining 3 elements must be deranged: $D_3 = 2$</li><li>Total: $10 \times 2 = 20$</li></ul></details>

**Problem 2.4**: Ten people are seated in a row. They stand up and sit down again randomly. What is the approximate probability that no one sits in their original seat?

<details><summary>Solution</summary><p><strong>Answer</strong>: $\approx 0.368$ or $\approx 1/e$</p><p><strong>Solution</strong>:</p><p>For $n = 10$ (large enough), use approximation:</p>$$P = \frac{D_{10}}{10!} \approx \frac{1}{e} \approx 0.368$$<p><strong>Exact value</strong>: $\frac{D_{10}}{10!} = \frac{1,334,961}{3,628,800} \approx 0.3679$</p><p>Very close to $1/e = 0.3679$!</p></details>

---

### Level 3: Advanced (JEE Advanced)

**Problem 3.1**: Prove that $D_n = (n-1)(D_{n-1} + D_{n-2})$ for $n \geq 2$.

<details><summary>Solution</summary><p><strong>Proof</strong>:</p><p>Consider derangements of $\{1, 2, 3, \ldots, n\}$.</p><p>Element 1 must go to some position $k \neq 1$. There are $(n-1)$ choices for $k$.</p><p><strong>Case 1</strong>: Element $k$ goes to position 1 (swap 1 and $k$)</p><ul><li>Elements 1 and $k$ are settled</li><li>Remaining $(n-2)$ elements must be deranged among themselves</li><li>Number of ways: $D_{n-2}$</li></ul><p><strong>Case 2</strong>: Element $k$ does NOT go to position 1</p><ul><li>Consider positions $\{1, 2, \ldots, k-1, k+1, \ldots, n\}$ (excluding position 1)</li><li>Element $k$ cannot go to position 1 (by assumption) or position $k$ (derangement)</li><li>Think of it as: we have $(n-1)$ elements $\{k, 2, 3, \ldots, (k-1), (k+1), \ldots, n\}$ to place in positions $\{1, 2, \ldots, (k-1), (k+1), \ldots, n\}$</li><li>Element $k$ “pretends” its correct position is 1</li><li>This is a derangement of $(n-1)$ elements</li><li>Number of ways: $D_{n-1}$</li></ul><p><strong>Total</strong>: $(n-1) \times (D_{n-2} + D_{n-1})$</p><p>Therefore: $D_n = (n-1)(D_{n-1} + D_{n-2})$ ✓</p></details>

**Problem 3.2**: Show that $\sum_{k=0}^{n} ^nC_k \cdot D_k = n!$

<details><summary>Solution</summary><p><strong>Proof</strong>:</p><p>LHS counts: Permutations of $n$ elements classified by number of fixed points.</p>$$\sum_{k=0}^{n} (\text{permutations with exactly } (n-k) \text{ fixed points})$$<ul><li>Choose $(n-k)$ elements to fix: $^nC_{n-k} = ^nC_k$</li><li>Derange remaining $k$ elements: $D_k$</li><li>Total for this case: $^nC_k \cdot D_k$</li></ul><p>Sum over all possible numbers of fixed points ($k$ ranges from 0 to $n$):</p>$$\sum_{k=0}^{n} ^nC_k \cdot D_k = \text{all permutations} = n!$$<p>Therefore: $\sum_{k=0}^{n} ^nC_k \cdot D_k = n!$ ✓</p><p><strong>Alternative interpretation</strong>: This formula counts all permutations by partitioning them based on how many elements are NOT in their correct positions.</p></details>

**Problem 3.3**: $n$ couples attend a party. For a dance, the men and women are paired randomly. What is the probability that no man dances with his own wife?

<details><summary>Solution</summary><p><strong>Answer</strong>: $\frac{D_n}{n!}$</p><p><strong>Solution</strong>:</p><p>This is equivalent to the derangement problem!</p><ul><li>Total ways to pair $n$ men with $n$ women: $n!$
(Each man can be paired with any of the $n$ women in a specific assignment)</li></ul><p>Actually, let me reconsider. If we fix the women and permute the men:</p><ul><li>Total ways to assign men to women: $n!$</li><li>Ways where no man is with his wife: $D_n$</li></ul><p><strong>Probability</strong>: $\frac{D_n}{n!}$</p><p>For large $n$: $\approx \frac{1}{e} \approx 0.368$</p><p><strong>Answer</strong>: $\frac{D_n}{n!} \approx \frac{1}{e}$ for large $n$</p></details>

**Problem 3.4**: Prove that $D_n = nD_{n-1} + (-1)^n$ for $n \geq 1$.

<details><summary>Solution</summary><p><strong>Proof</strong>:</p><p>We’ll prove this using the explicit formula.</p><p>From $D_n = n!\sum_{i=0}^{n}\frac{(-1)^i}{i!}$:</p>$$D_n = n! \sum_{i=0}^{n} \frac{(-1)^i}{i!}$$

$$D_{n-1} = (n-1)! \sum_{i=0}^{n-1} \frac{(-1)^i}{i!}$$<p>We want to show: $D_n = nD_{n-1} + (-1)^n$</p>$$nD_{n-1} = n \cdot (n-1)! \sum_{i=0}^{n-1} \frac{(-1)^i}{i!} = n! \sum_{i=0}^{n-1} \frac{(-1)^i}{i!}$$

$$D_n = n! \sum_{i=0}^{n} \frac{(-1)^i}{i!} = n! \sum_{i=0}^{n-1} \frac{(-1)^i}{i!} + n! \cdot \frac{(-1)^n}{n!}$$

$$= nD_{n-1} + (-1)^n$$<p>Therefore: $D_n = nD_{n-1} + (-1)^n$ ✓</p><p><strong>Alternative approach</strong> (combinatorial):</p><p>Consider permutations of $\{1, 2, \ldots, n\}$ where element $n$ is:</p><ul><li>In position $i$ for $i &lt; n$: There are $n-1$ such positions<ul><li>If element $i$ goes to position $n$, the rest is a derangement of $n-2$ elements</li><li>If element $i$ doesn’t go to position $n$, it’s like a derangement of $n-1$ elements with element $i$’s “home” being position $n$</li></ul></li></ul><p>This leads to the recurrence, but it’s complex. The algebraic proof is cleaner.</p></details>

---

## Cross-Topic Connections

### Link to Probability

Derangements are fundamental in probability:

- Matching problems
- Random permutation probability
- Birthday paradox variations

$$P(\text{no match}) = \frac{D_n}{n!} \approx \frac{1}{e}$$

→ See [Probability](../../statistics-probability/index.md)

### Link to Inclusion-Exclusion Principle

Derangement formula is a classic application of inclusion-exclusion:

$$D_n = n! - \sum |A_i| + \sum |A_i \cap A_j| - \ldots$$

→ Advanced combinatorics principle

### Link to Series and Limits

The sum in the derangement formula relates to $e^{-1}$:

$$\sum_{i=0}^{\infty} \frac{(-1)^i}{i!} = e^{-1}$$

$$\lim_{n \to \infty} \frac{D_n}{n!} = \frac{1}{e}$$

→ See [Sequences & Series](../../sequences-series/index.md)

### Link to Permutations

Derangements are a special class of permutations with constraints.

→ See [Permutations Basics](../permutations-basics/index.md)

---

## JEE Tips & Tricks

### Recognition Checklist

**Is it a derangement problem?**

- “No one gets their own&mldr;”
- “All in wrong positions”
- “No fixed points”
- Hat/envelope/matching problems
- “Everyone gets someone else’s&mldr;”

If YES → Use derangement formula or recursion

### Quick Calculation Strategy

**For small n (≤ 7)**:

1. Use recursion: $D_n = (n-1)(D_{n-1} + D_{n-2})$
2. Memorize: $D_2=1, D_3=2, D_4=9, D_5=44$

**For large n (≥ 7)**:

1. Probability: $\frac{D_n}{n!} \approx \frac{1}{e} \approx 0.368$
2. Count: $D_n \approx \frac{n!}{e}$

**For “exactly k fixed”**:

$$^nC_k \times D_{n-k}$$

### Common JEE Patterns

1. **Hat problem**: $n$ people, wrong hats → $D_n$
2. **Letter-envelope**: Matching problem → $D_n$
3. **Exactly k correct**: Selection + derangement → $^nC_k \times D_{n-k}$
4. **Probability**: Usually wants $D_n / n!$
5. **At least one correct**: Complement → $n! - D_n$

### Formula Quick Reference

$$\boxed{
\begin{align}
D_n &= n!\sum_{i=0}^{n}\frac{(-1)^i}{i!} \\
D_n &= (n-1)(D_{n-1} + D_{n-2}) \\
D_n &\approx \frac{n!}{e} \quad (n \geq 7) \\
\frac{D_n}{n!} &\approx \frac{1}{e} \approx 0.368
\end{align}
}$$

---

## Summary

| Concept | Formula | Example |
| --- | --- | --- |
| **Derangement** | No fixed points | 231, 312 for {1,2,3} |
| **Count** | $D_n = n!\sum \frac{(-1)^i}{i!}$ | $D_3 = 2$ |
| **Recursive** | $D_n = (n-1)(D_{n-1}+D_{n-2})$ | $D_4 = 3(2+1)=9$ |
| **Probability** | $\frac{D_n}{n!} \approx \frac{1}{e}$ | $\approx 36.8\%$ |
| **k fixed** | $^nC_k \cdot D_{n-k}$ | Exactly 2 correct |

**Key Insight**: About 37% of random permutations have no fixed points! This probability is remarkably stable for all $n \geq 7$.

**The Beautiful Result**:

$$\lim_{n \to \infty} \frac{D_n}{n!} = \frac{1}{e}$$

Whether you shuffle 10 cards or 1000, the probability of complete disorder is always around $1/e$!

---

## Historical Note

The derangement problem was first studied by **Pierre Raymond de Montmort** in 1708 in the context of a card game called “**treize**” (thirteen). It’s one of the earliest problems in probability theory!

The connection to $e$ makes this problem beautiful - showing how discrete mathematics connects to continuous analysis.

---

**Related Topics**:

- Review [Permutations Basics](../permutations-basics/index.md) for foundation
- Apply to [Probability](../../statistics-probability/index.md) for real-world problems
- Explore [Combinations](../combinations-basics/index.md) for related counting

---

*Last updated: September 25, 2025*

From TestGuru · our mock-test platform

## You've read Derangements - Permutations with No Fixed Points.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=permutations-combinations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fpermutations-combinations%2Fderangements%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/permutations-combinations/derangements/",this.page.identifier="/mathematics/permutations-combinations/derangements/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422054983364"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422054983364")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/permutations-combinations/derangements/](https://jeenotes.in/mathematics/permutations-combinations/derangements/) · raw HTML: `offline/mathematics/permutations-combinations/derangements/index.html`_
