---
title: "Probability Basics"
source: "https://jeenotes.in/mathematics/statistics-probability/probability-basics/"
description: "Master sample space, events, and probability axioms for JEE - From dice rolls to lottery tickets and card games"
updated: "2026-08-01"
reading_time: "13 min read"
breadcrumb: "Mathematics"
position: "/ Topic 6 of 10"
html: "../../../../offline/mathematics/statistics-probability/probability-basics/index.html"
extracted: "2026-11-23"
---

> Master sample space, events, and probability axioms for JEE - From dice rolls to lottery tickets and card games

# Probability Basics

## The Lottery Question

You buy a lottery ticket with number 007. Your friend says, “Why that number? Every number has equal chance!” But is that really true? If 1 million tickets are sold, what’s your chance of winning? And if you buy 10 tickets, does your chance become 10 times better?

Understanding probability helps us answer these questions scientifically—and it’s crucial for JEE, gambling strategies, weather forecasting, and even quantum physics!

---

## What is Probability?

**Probability** is the mathematical study of **uncertainty** and **chance**. It quantifies how likely an event is to occur.

### Intuitive Definition

Probability is a number between 0 and 1 that measures the likelihood of an event:

- **P = 0**: Impossible event (drawing a red ball from a bag of only blue balls)
- **P = 1**: Certain event (getting a number ≤ 6 when rolling a standard die)
- **0 < P < 1**: Uncertain event (getting heads when tossing a coin, P = 0.5)

---

## Random Experiment

### Definition

A **random experiment** is an experiment or process whose outcome:

1. Cannot be predicted with certainty in advance
2. Can result in one of several possible outcomes
3. Can be repeated under identical conditions

### Examples

- **Tossing a coin**: Outcome is H or T (unpredictable)
- **Rolling a die**: Outcome is 1, 2, 3, 4, 5, or 6
- **Drawing a card**: Outcome is any of 52 cards
- **Exam score**: Can range from 0 to 100

**Not Random Experiments**:

- Calculating 2 + 2 (always 4, deterministic)
- Dropping a ball (will fall down, certain)

---

## Sample Space (S or Ω)

### Definition

The **sample space** is the set of all possible outcomes of a random experiment.

Sample Space Notation

Sample Space: $S$ or $\Omega$

**Number of elements**: $n(S)$ or $|S|$

### Examples

| Experiment | Sample Space | n(S) |
| --- | --- | --- |
| Tossing 1 coin | S = {H, T} | 2 |
| Rolling 1 die | S = {1, 2, 3, 4, 5, 6} | 6 |
| Tossing 2 coins | S = {HH, HT, TH, TT} | 4 |
| Rolling 2 dice | S = {(1,1), (1,2), &mldr;, (6,6)} | 36 |
| Drawing a card | S = {52 cards} | 52 |
| Gender of child | S = {Boy, Girl} | 2 |

### Important Notes

1. **Order matters** in sequences: HT ≠ TH when tossing two coins
2. **Finite vs Infinite**: Most JEE problems have finite sample spaces
3. **Constructing S**: Use tree diagrams for complex experiments

---

## Events

### Definition

An **event** is a subset of the sample space. It’s a collection of one or more outcomes.

### Types of Events

Types of Events

1. **Simple (Elementary) Event**: Contains only one outcome

   - Example: Getting a 4 when rolling a die, E = {4}
2. **Compound Event**: Contains more than one outcome

   - Example: Getting an even number, E = {2, 4, 6}
3. **Sure (Certain) Event**: Event that always occurs, E = S

   - Example: Getting a number ≤ 6 on a die
4. **Impossible Event**: Event that never occurs, E = ∅

   - Example: Getting a 7 on a standard die
5. **Complementary Event**: Not A, denoted A’ or Ā or $A^c$

   - If A = “even number”, then A’ = “odd number”

### Event Operations

| Operation | Notation | Meaning |
| --- | --- | --- |
| **Union** | A ∪ B | A or B occurs |
| **Intersection** | A ∩ B | Both A and B occur |
| **Complement** | A’ or Ā | A does not occur |
| **Difference** | A - B | A occurs but not B |
| **Disjoint/Mutually Exclusive** | A ∩ B = ∅ | A and B cannot both occur |

### Venn Diagrams for Events

---

## Classical (Theoretical) Probability

### Definition

For experiments with **equally likely outcomes**:

Classical Probability Formula

$$P(E) = \frac{\text{Number of favorable outcomes}}{\text{Total number of outcomes}} = \frac{n(E)}{n(S)}$$

**Conditions**:

1. All outcomes are equally likely
2. Sample space is finite
3. $0 \leq P(E) \leq 1$

### Examples

**1. Fair die**: P(getting a 4) = 1/6

**2. Two coins**: P(exactly one head) = P({HT, TH}) = 2/4 = 1/2

**3. Card deck**: P(drawing an ace) = 4/52 = 1/13

---

## Probability Axioms (Kolmogorov’s Axioms)

These three axioms form the foundation of probability theory:

Probability Axioms

**Axiom 1** (Non-negativity):

$$P(E) \geq 0 \text{ for any event } E$$

**Axiom 2** (Normalization):

$$P(S) = 1$$

(The probability of the sample space is 1)

**Axiom 3** (Additivity):
For mutually exclusive events $E_1, E_2, E_3, ...$:

$$P(E_1 \cup E_2 \cup E_3 \cup ...) = P(E_1) + P(E_2) + P(E_3) + ...$$

---

## Important Probability Theorems

### 1. Complement Rule

Complement Rule

$$P(A') = 1 - P(A)$$

or equivalently:

$$P(A) + P(A') = 1$$

**Example**: If P(rain) = 0.3, then P(no rain) = 1 - 0.3 = 0.7

---

### 2. Addition Theorem (General)

Addition Theorem

**For any two events A and B**:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**For mutually exclusive events** (A ∩ B = ∅):

$$P(A \cup B) = P(A) + P(B)$$

**For three events**:

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$$

**Why subtract P(A ∩ B)?** To avoid counting the overlap twice!

---

### 3. Properties of Probability

Key Properties

1. **Range**: $0 \leq P(E) \leq 1$ for any event E
2. **Impossible event**: $P(\emptyset) = 0$
3. **Certain event**: $P(S) = 1$
4. **Complement**: $P(A') = 1 - P(A)$
5. **Subset**: If $A \subseteq B$, then $P(A) \leq P(B)$
6. **Difference**: $P(A - B) = P(A) - P(A \cap B)$
7. **Upper bound**: $P(A \cup B) \leq P(A) + P(B)$

---

## Equally Likely vs. Not Equally Likely

### Equally Likely Outcomes

All outcomes have the **same probability**.

**Examples**:

- Fair coin: P(H) = P(T) = 1/2
- Fair die: P(1) = P(2) = &mldr; = P(6) = 1/6
- Unbiased deck: P(any specific card) = 1/52

### Not Equally Likely

Outcomes have **different probabilities**.

**Examples**:

- Biased coin: P(H) = 0.6, P(T) = 0.4
- Loaded die: P(6) = 0.5, other faces share remaining 0.5
- Weather: P(rain) ≠ P(no rain) in general

**Important**: Classical probability formula ONLY works for equally likely outcomes!

---

## Memory Tricks

Memory Tricks

1. **“Sample Space = All Possibilities”**

   - **S**ample **S**pace = **S**et of all po**S**sibilities
2. **“Events are Subsets”**

   - **E**vent is a sub**E**t
3. **“Probability is a Fraction”**

   - P = **F**avorable / **T**otal = **F**raction
4. **Addition Rule**:

   - “Add probabilities, Subtract overlap”
   - P(A ∪ B) = P(A) **+** P(B) **−** P(A ∩ B)
5. **Complement**:

   - “What doesn’t happen = 1 − What happens”
   - P(A’) = **1** − P(A)
6. **Axioms = CAN**:

   - **C**ertainty: P(S) = 1
   - **A**dditivity: P(A ∪ B) = P(A) + P(B) for mutually exclusive
   - **N**on-negative: P(E) ≥ 0

---

## Common Mistakes to Avoid

Common Mistakes

1. **Adding non-exclusive probabilities**: P(A ∪ B) ≠ P(A) + P(B) unless A and B are mutually exclusive

   - Must subtract P(A ∩ B)!
2. **Assuming equally likely when not**: Not all real-world outcomes have equal probability
3. **Confusing “or” with “and”**:

   - “A **or** B” → A ∪ B (union)
   - “A **and** B” → A ∩ B (intersection)
4. **P(A’) ≠ 1/P(A)**: Correct is P(A’) = 1 − P(A)
5. **Forgetting to reduce sample space**: When drawing without replacement, sample space changes
6. **P > 1 or P < 0**: Probability must be between 0 and 1 (check your calculation!)
7. **Order in sequences**: HT ≠ TH for two coins (different outcomes)

---

## Solved Examples

### Example 1: Single Die Roll

**Problem**: A fair die is rolled. Find the probability of:
(a) Getting a 5
(b) Getting an even number
(c) Getting a number less than 5

**Solution**:

**Sample Space**: S = {1, 2, 3, 4, 5, 6}, n(S) = 6

**(a)** Event A = {5}, n(A) = 1

$$P(A) = \frac{1}{6}$$

**(b)** Event B = {2, 4, 6}, n(B) = 3

$$P(B) = \frac{3}{6} = \frac{1}{2}$$

**(c)** Event C = {1, 2, 3, 4}, n(C) = 4

$$P(C) = \frac{4}{6} = \frac{2}{3}$$

---

### Example 2: Two Dice (JEE Pattern)

**Problem**: Two dice are thrown simultaneously. Find the probability of:
(a) Getting a sum of 7
(b) Getting a sum of 10 or more
(c) Getting a doublet (same number on both dice)

**Solution**:

**Sample Space**: S = {(1,1), (1,2), &mldr;, (6,6)}, n(S) = 36

**(a) Sum = 7**: Favorable outcomes = {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}

$$P(\text{sum } 7) = \frac{6}{36} = \frac{1}{6}$$

**(b) Sum ≥ 10**: Favorable = {(4,6), (5,5), (5,6), (6,4), (6,5), (6,6)}

$$P(\text{sum } \geq 10) = \frac{6}{36} = \frac{1}{6}$$

**(c) Doublet**: Favorable = {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)}

$$P(\text{doublet}) = \frac{6}{36} = \frac{1}{6}$$

---

### Example 3: Cards (Addition Theorem)

**Problem**: A card is drawn from a standard deck. Find the probability of getting:
(a) A king or a queen
(b) A heart or a face card
(c) A red card or an ace

**Solution**:

**(a) King or Queen** (mutually exclusive):

$$P(K \cup Q) = P(K) + P(Q) = \frac{4}{52} + \frac{4}{52} = \frac{8}{52} = \frac{2}{13}$$

**(b) Heart or Face card** (not mutually exclusive):

- P(Heart) = 13/52
- P(Face) = 12/52 (4 Jacks + 4 Queens + 4 Kings)
- P(Heart ∩ Face) = 3/52 (J♥, Q♥, K♥)

$$P(H \cup F) = \frac{13}{52} + \frac{12}{52} - \frac{3}{52} = \frac{22}{52} = \frac{11}{26}$$

**(c) Red or Ace**:

- P(Red) = 26/52
- P(Ace) = 4/52
- P(Red ∩ Ace) = 2/52 (A♥, A♦)

$$P(R \cup A) = \frac{26}{52} + \frac{4}{52} - \frac{2}{52} = \frac{28}{52} = \frac{7}{13}$$

---

### Example 4: Complement Rule

**Problem**: The probability that it rains tomorrow is 0.35. What is the probability that it doesn’t rain?

**Solution**:

Let A = “it rains”

$$P(A) = 0.35$$

$$P(A') = 1 - P(A) = 1 - 0.35 = 0.65$$

**Answer**: Probability of no rain = 0.65

---

### Example 5: Three Events (JEE Advanced)

**Problem**: A, B, C are three events such that:

- P(A) = 0.4, P(B) = 0.5, P(C) = 0.6
- P(A ∩ B) = 0.2, P(B ∩ C) = 0.3, P(A ∩ C) = 0.25
- P(A ∩ B ∩ C) = 0.1

Find P(A ∪ B ∪ C).

**Solution**:

Using the formula for three events:

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$$

$$P(A \cup B \cup C) = 0.4 + 0.5 + 0.6 - 0.2 - 0.3 - 0.25 + 0.1$$

$$= 1.5 - 0.75 + 0.1 = 0.85$$

---

### Example 6: Lottery Problem (Real-Life)

**Problem**: In a lottery, 1000 tickets are sold. You buy 5 tickets. What is your probability of:
(a) Winning (exactly 1 winning ticket exists)
(b) Not winning

**Solution**:

**(a) Winning**:

- Favorable outcomes = 5 (any of your 5 tickets could be the winner)
- Total outcomes = 1000

$$P(\text{win}) = \frac{5}{1000} = \frac{1}{200} = 0.005$$

**(b) Not winning**:

$$P(\text{not win}) = 1 - P(\text{win}) = 1 - 0.005 = 0.995$$

---

## Practice Problems

### Level 1: Foundation (JEE Main)

1. A coin is tossed twice. Find the probability of getting at least one head.
2. From a deck of 52 cards, one card is drawn. Find P(drawing a spade).
3. Two dice are rolled. Find P(sum is 5).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>S = {HH, HT, TH, TT}, At least one H = {HH, HT, TH}
P = 3/4 (or use complement: 1 - P(TT) = 1 - 1/4 = 3/4)</p></li><li><p>P(spade) = 13/52 = 1/4</p></li><li><p>Sum = 5: {(1,4), (2,3), (3,2), (4,1)}
P = 4/36 = 1/9</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. A bag contains 5 red, 4 blue, and 3 green balls. A ball is drawn at random. Find P(red or blue).
5. Events A and B are such that P(A) = 0.4, P(B) = 0.6, P(A ∩ B) = 0.2. Find:
   (a) P(A ∪ B)
   (b) P(A’)
   (c) P(A’ ∩ B')
6. A die is thrown. Find the probability that the number shown is:
   (a) Even or greater than 3
   (b) Even and greater than 3

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>Total = 12 balls, Red or Blue = 5 + 4 = 9 (mutually exclusive)
P = 9/12 = 3/4</p></li><li><p>(a) P(A ∪ B) = 0.4 + 0.6 - 0.2 = 0.8
(b) P(A’) = 1 - 0.4 = 0.6
(c) P(A’ ∩ B’) = P((A ∪ B)’) = 1 - P(A ∪ B) = 1 - 0.8 = 0.2</p></li><li><p>Even = {2,4,6}, Greater than 3 = {4,5,6}
(a) A ∪ B = {2,4,5,6}, P = 4/6 = 2/3
(b) A ∩ B = {4,6}, P = 2/6 = 1/3</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. Three dice are thrown. Find the probability that the sum is at least 16.
8. Prove that for any two events A and B: P(A) + P(B) − 1 ≤ P(A ∩ B) ≤ min{P(A), P(B)}
9. In a class, 60% students study Physics, 70% study Chemistry, and 50% study both. A student is selected at random. Find the probability that:
   (a) The student studies at least one subject
   (b) The student studies exactly one subject

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>Total outcomes = 6³ = 216
Sum ≥ 16: {(4,6,6), (5,5,6), (5,6,5), (5,6,6), (6,4,6), (6,5,5), (6,5,6), (6,6,4), (6,6,5), (6,6,6)}
Count permutations: 3+3+3+3+3+3+3+3+3+1 = 10
P = 10/216 = 5/108</p></li><li><p>From P(A ∪ B) = P(A) + P(B) − P(A ∩ B) and P(A ∪ B) ≤ 1:
P(A) + P(B) − P(A ∩ B) ≤ 1 → P(A ∩ B) ≥ P(A) + P(B) − 1
Also, A ∩ B ⊆ A and A ∩ B ⊆ B → P(A ∩ B) ≤ min{P(A), P(B)}</p></li><li><p>P(P) = 0.6, P(C) = 0.7, P(P ∩ C) = 0.5
(a) P(P ∪ C) = 0.6 + 0.7 − 0.5 = 0.8
(b) P(exactly one) = P(P ∪ C) − P(P ∩ C) = 0.8 − 0.5 = 0.3</p></li></ol></div></details>

---

## Real-Life Applications

### 1. Weather Forecasting

“70% chance of rain” means P(rain) = 0.7

- Used to plan outdoor events
- Based on historical data and models

### 2. Card Games & Gambling

- Poker: Calculate probability of getting specific hands
- Lottery: Understand why odds are against you
- Casinos: House edge based on probability

### 3. Medical Diagnosis

- Probability of disease given symptoms
- False positive/negative rates
- Risk assessment

### 4. Sports Analytics

- Win probability based on past performance
- Player statistics and predictions
- Fantasy sports scoring

### 5. Quality Control

- Probability of defective product
- Sampling and inspection
- Six Sigma methodology

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Permutations & Combinations](../../permutations-combinations/index.md) - Counting techniques for n(E) and n(S)
- [Conditional Probability](../conditional-probability/index.md) - P(A|B) builds on basic probability
- [Bayes’ Theorem](../bayes-theorem/index.md) - Advanced application of conditional probability
- [Random Variables](../random-variables/index.md) - Functions on sample spaces
- [Set Theory](../../index.md) - Venn diagrams, unions, intersections

**Building Blocks**:

- Sample space → Foundation for all probability
- Addition theorem → Leads to conditional probability
- Complement rule → Used in all advanced problems

---

## Standard Sample Spaces (Quick Reference)

Common Sample Spaces

| Experiment | n(S) | Sample Space Description |
| --- | --- | --- |
| 1 coin | 2 | {H, T} |
| 2 coins | 4 | {HH, HT, TH, TT} |
| 3 coins | 8 | {HHH, HHT, &mldr;, TTT} |
| n coins | 2ⁿ | All sequences of H and T |
| 1 die | 6 | {1, 2, 3, 4, 5, 6} |
| 2 dice | 36 | {(1,1), (1,2), &mldr;, (6,6)} |
| n dice | 6ⁿ | All ordered n-tuples |
| 1 card | 52 | Standard deck |
| Drawing r from n | C(n,r) | Combinations (order doesn’t matter) |
| Arranging r from n | P(n,r) | Permutations (order matters) |

---

## Quick Revision Checklist

Quick Revision

✓ **Sample Space (S)**: Set of all possible outcomes
✓ **Event (E)**: Subset of sample space
✓ **Classical Probability**: P(E) = n(E)/n(S) for equally likely outcomes
✓ **Axioms**: P(E) ≥ 0, P(S) = 1, P(A ∪ B) = P(A) + P(B) for mutually exclusive
✓ **Complement**: P(A’) = 1 − P(A)
✓ **Addition**: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
✓ **Range**: 0 ≤ P(E) ≤ 1 always

---

## Exam Tips

1. **Draw Venn diagrams**: For union/intersection problems, sketch it out
2. **List sample space**: For small problems, write out S explicitly
3. **Check for “equally likely”**: Classical formula only works when outcomes have equal probability
4. **Use complement**: Often easier to find P(A’) and use P(A) = 1 − P(A')
5. **Mutually exclusive**: If A ∩ B = ∅, addition is simpler (no overlap to subtract)
6. **Permutations/Combinations**: Link to counting principles for complex sample spaces

---

## Next Steps

Now that you understand basic probability, let’s explore how probabilities change with information:

- [Conditional Probability](../conditional-probability/index.md) - P(A|B) and the multiplication theorem

---

*Last updated: December 17, 2025*
*Explore probability interactively at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Probability Basics.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fprobability-basics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/probability-basics/",this.page.identifier="/mathematics/statistics-probability/probability-basics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422230779426"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422230779426")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/probability-basics/](https://jeenotes.in/mathematics/statistics-probability/probability-basics/) · raw HTML: `offline/mathematics/statistics-probability/probability-basics/index.html`_
