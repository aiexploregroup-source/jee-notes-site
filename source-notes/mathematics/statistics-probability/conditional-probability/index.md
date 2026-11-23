---
title: "Conditional Probability"
source: "https://jeenotes.in/mathematics/statistics-probability/conditional-probability/"
description: "Master conditional probability and multiplication theorem for JEE - From medical tests to card games with replacement"
updated: "2026-08-01"
reading_time: "11 min read"
breadcrumb: "Mathematics"
position: "/ Topic 3 of 10"
html: "../../../../offline/mathematics/statistics-probability/conditional-probability/index.html"
extracted: "2026-11-23"
---

> Master conditional probability and multiplication theorem for JEE - From medical tests to card games with replacement

# Conditional Probability

## The Medical Test Dilemma

A medical test for a rare disease is 99% accurate. You test positive. Should you panic?

**Surprising answer**: It depends! If only 1 in 10,000 people have the disease, your actual probability of having it (even after testing positive) might be less than 10%!

This is **conditional probability**—how probabilities change when we have additional information. It’s crucial for JEE, medical diagnostics, weather forecasting, and machine learning!

---

## What is Conditional Probability?

**Conditional probability** is the probability of an event occurring, given that another event has already occurred.

### Notation

**P(A|B)** reads as “probability of A given B”

It means: “What is the probability of A occurring, given that B has already occurred?”

### Intuitive Example

**Scenario**: Drawing cards from a deck

- **Original**: P(drawing an ace) = 4/52
- **Conditional**: You’re told the card is red. Now P(ace | red card) = 2/26 = 1/13

The information “it’s red” **reduces the sample space** from 52 to 26 cards!

---

## Formula for Conditional Probability

Conditional Probability Formula

$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0$$

**In words**:

$$P(\text{A given B}) = \frac{P(\text{A and B occur together})}{P(\text{B occurs})}$$

**Interpretation**: Among all cases where B occurs, what fraction also has A?

### Why This Formula?

When B occurs, the sample space effectively becomes B (not the full S). So:

- New sample space: B
- Favorable outcomes: A ∩ B
- Probability: P(A ∩ B) / P(B)

---

## Multiplication Theorem

Rearranging the conditional probability formula gives:

Multiplication Theorem

**For two events**:

$$P(A \cap B) = P(B) \times P(A|B) = P(A) \times P(B|A)$$

**For three events**:

$$P(A \cap B \cap C) = P(A) \times P(B|A) \times P(C|A \cap B)$$

**For n events**:

$$P(A_1 \cap A_2 \cap ... \cap A_n) = P(A_1) \times P(A_2|A_1) \times P(A_3|A_1 \cap A_2) \times ... $$

**Use Case**: When you want P(A ∩ B) but know P(A) and P(B|A)

---

## Independent Events

### Definition

Two events A and B are **independent** if the occurrence of one does not affect the probability of the other.

Independence Conditions

Events A and B are independent if **any one** of these holds:

1. $P(A|B) = P(A)$ (B doesn’t affect A)
2. $P(B|A) = P(B)$ (A doesn’t affect B)
3. $P(A \cap B) = P(A) \times P(B)$ ⭐ **Most used**

### Examples of Independence

| Situation | Independent? | Why? |
| --- | --- | --- |
| Two coin tosses | Yes | First toss doesn’t affect second |
| Drawing cards WITH replacement | Yes | First card is put back |
| Drawing cards WITHOUT replacement | No | First card changes remaining deck |
| Rain today and rain tomorrow | Maybe | Depends on weather patterns |
| Getting 6 on first die and second die | Yes | Dice don’t influence each other |

### Mutually Exclusive vs Independent

⚠️ **Common Confusion**:

- **Mutually Exclusive**: A ∩ B = ∅ (can’t both occur)
- **Independent**: P(A ∩ B) = P(A) × P(B)

**Important**: If A and B are mutually exclusive and both have non-zero probability, they **cannot** be independent!

**Proof**: If A ∩ B = ∅, then P(A ∩ B) = 0, but P(A) × P(B) ≠ 0, so P(A ∩ B) ≠ P(A) × P(B)

---

## Tree Diagrams

Tree diagrams help visualize sequential events and conditional probabilities.

### How to Use Tree Diagrams

1. **First branch**: Draw outcomes of first event with probabilities
2. **Second branch**: For each first outcome, draw second event outcomes with **conditional probabilities**
3. **Multiply along path**: P(path) = product of probabilities along branches
4. **Add paths**: P(final outcome) = sum of all paths leading to it

---

## Properties of Conditional Probability

Key Properties

1. **Range**: $0 \leq P(A|B) \leq 1$
2. **Certain event**: $P(S|B) = 1$
3. **Impossible event**: $P(\emptyset|B) = 0$
4. **Complement**: $P(A'|B) = 1 - P(A|B)$
5. **Addition**: $P(A_1 \cup A_2|B) = P(A_1|B) + P(A_2|B) - P(A_1 \cap A_2|B)$
6. **If A ⊆ B**: $P(A|B) = \frac{P(A)}{P(B)}$
7. **If B ⊆ A**: $P(A|B) = 1$

---

## Memory Tricks

Memory Tricks

1. **“Given” = Denominator**

   - P(A|**B**) → **B** goes in denominator: P(A ∩ B) / P(**B**)
2. **Multiplication Theorem**

   - “**And** means **Multiply**”
   - P(A **∩** B) = P(A) **×** P(B|A)
3. **Independence Check**

   - “Independent → Multiply directly”
   - Independent: P(A ∩ B) = P(A) × P(B) (no conditioning needed)
4. **Tree Diagram**

   - “**Along** the path: **Multiply**”
   - “**Across** paths: **Add**”
5. **Replacement**

   - “**Replace** → **Independent**”
   - “**No Replace** → **Dependent** (conditional probability changes)”
6. **Mutual Exclusion vs Independence**

   - “**Mutually Exclusive** = Can’t **both** happen”
   - “**Independent** = **Don’t affect** each other”

---

## Common Mistakes to Avoid

Common Mistakes

1. **Confusing P(A|B) with P(B|A)**: These are generally NOT equal!

   - P(disease | positive test) ≠ P(positive test | disease)
2. **Wrong denominator**: P(A|B) has P(**B**) in denominator, not P(A)
3. **Assuming independence**: Don’t use P(A ∩ B) = P(A) × P(B) unless told events are independent
4. **Mutually exclusive = independent**: NO! They’re opposite concepts
5. **Forgetting to update probability**: In “without replacement”, probabilities change after each draw
6. **Addition instead of multiplication**: P(A ∩ B) requires multiplication, not addition
7. **Conditional on wrong event**: Read carefully—P(A|B) means “given B”, not “given A”

---

## Solved Examples

### Example 1: Basic Conditional Probability

**Problem**: A die is rolled. Find:
(a) P(getting a 4 | even number)
(b) P(even | number > 3)

**Solution**:

Sample Space: S = {1, 2, 3, 4, 5, 6}

**(a) P(4 | even)**:

- Event A = {4}, Event B = {2, 4, 6} (even)
- A ∩ B = {4}
  $$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/6}{3/6} = \frac{1}{3}$$

**Alternative (reduced sample space)**:
Given even, sample space = {2, 4, 6}, favorable = {4}

$$P(4|\text{even}) = \frac{1}{3}$$

**(b) P(even | number > 3)**:

- Event A = {2, 4, 6}, Event B = {4, 5, 6}
- A ∩ B = {4, 6}
  $$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{2/6}{3/6} = \frac{2}{3}$$

---

### Example 2: Cards Without Replacement

**Problem**: Two cards are drawn from a deck without replacement. Find the probability that:
(a) Both are aces
(b) Both are red

**Solution**:

**(a) Both aces**:

$$P(\text{both aces}) = P(\text{1st ace}) \times P(\text{2nd ace | 1st ace})$$

$$= \frac{4}{52} \times \frac{3}{51} = \frac{12}{2652} = \frac{1}{221}$$

**(b) Both red**:

$$P(\text{both red}) = P(\text{1st red}) \times P(\text{2nd red | 1st red})$$

$$= \frac{26}{52} \times \frac{25}{51} = \frac{650}{2652} = \frac{25}{102}$$

**Note**: Probabilities change because cards are not replaced!

---

### Example 3: Multiplication Theorem (Three Events)

**Problem**: A bag contains 5 red and 3 blue balls. Three balls are drawn without replacement. Find P(all three are red).

**Solution**:

$$P(\text{RRR}) = P(R_1) \times P(R_2|R_1) \times P(R_3|R_1 R_2)$$

- **1st draw**: P(R₁) = 5/8
- **2nd draw** (given 1st red, now 4 red, 3 blue, total 7): P(R₂|R₁) = 4/7
- **3rd draw** (given 1st, 2nd red, now 3 red, 3 blue, total 6): P(R₃|R₁R₂) = 3/6 = 1/2

$$P(\text{RRR}) = \frac{5}{8} \times \frac{4}{7} \times \frac{1}{2} = \frac{20}{112} = \frac{5}{28}$$

---

### Example 4: Independence Check

**Problem**: Events A and B are such that P(A) = 0.6, P(B) = 0.5, P(A ∩ B) = 0.3. Are A and B independent?

**Solution**:

**Check**: Is P(A ∩ B) = P(A) × P(B)?

$$P(A) \times P(B) = 0.6 \times 0.5 = 0.3$$

$$P(A \cap B) = 0.3$$

Since $P(A \cap B) = P(A) \times P(B)$, **Yes, A and B are independent**.

**Verification using conditional probability**:

$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.3}{0.5} = 0.6 = P(A) \checkmark$$

---

### Example 5: Medical Test (JEE Advanced Pattern)

**Problem**: A disease affects 1% of the population. A test for the disease is 95% accurate (both sensitivity and specificity). If a person tests positive, what is the probability they actually have the disease?

**Solution**:

Let:

- D = person has disease
- T = test is positive

**Given**:

- P(D) = 0.01, so P(D’) = 0.99
- P(T|D) = 0.95 (true positive rate)
- P(T’|D’) = 0.95, so P(T|D’) = 0.05 (false positive rate)

**Find**: P(D|T)

**Step 1**: Find P(T) using total probability

$$P(T) = P(D) \times P(T|D) + P(D') \times P(T|D')$$

$$= 0.01 \times 0.95 + 0.99 \times 0.05$$

$$= 0.0095 + 0.0495 = 0.059$$

**Step 2**: Apply conditional probability

$$P(D|T) = \frac{P(D \cap T)}{P(T)} = \frac{P(D) \times P(T|D)}{P(T)}$$

$$= \frac{0.01 \times 0.95}{0.059} = \frac{0.0095}{0.059} \approx 0.161 = 16.1\%$$

**Answer**: Even with a positive test, only about 16% chance of actually having the disease!

**Why?** The disease is so rare that most positive tests are false positives.

---

### Example 6: Urn Problem (Classic JEE)

**Problem**: Urn A contains 3 red and 2 blue balls. Urn B contains 2 red and 4 blue balls. An urn is selected at random and a ball is drawn. Find:
(a) P(red ball)
(b) If the ball is red, P(it came from urn A)

**Solution**:

**(a) P(red)**:

$$P(R) = P(A) \times P(R|A) + P(B) \times P(R|B)$$

$$= \frac{1}{2} \times \frac{3}{5} + \frac{1}{2} \times \frac{2}{6}$$

$$= \frac{1}{2} \times \frac{3}{5} + \frac{1}{2} \times \frac{1}{3}$$

$$= \frac{3}{10} + \frac{1}{6} = \frac{9 + 5}{30} = \frac{14}{30} = \frac{7}{15}$$

**(b) P(A|R)**:

$$P(A|R) = \frac{P(A \cap R)}{P(R)} = \frac{P(A) \times P(R|A)}{P(R)}$$

$$= \frac{\frac{1}{2} \times \frac{3}{5}}{\frac{7}{15}} = \frac{\frac{3}{10}}{\frac{7}{15}} = \frac{3}{10} \times \frac{15}{7} = \frac{45}{70} = \frac{9}{14}$$

---

## Practice Problems

### Level 1: Foundation (JEE Main)

1. A bag has 4 red and 6 blue balls. Two balls are drawn without replacement. Find P(both blue).
2. P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Find P(A|B).
3. A die is rolled. Given the number is odd, find P(number is prime).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol><li><p>P(both blue) = P(B₁) × P(B₂|B₁) = (6/10) × (5/9) = 30/90 = 1/3</p></li><li><p>P(A|B) = P(A ∩ B)/P(B) = 0.2/0.5 = 0.4</p></li><li><p>Odd = {1, 3, 5}, Prime among odd = {3, 5}
P(prime|odd) = 2/3</p></li></ol></div></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

4. Two dice are thrown. Given the sum is 7, find P(at least one die shows 3).
5. A speaks truth 60% of the time, B speaks truth 80% of the time. They both describe an event. Find P(they contradict each other).
6. Three cards are drawn from a deck without replacement. Find P(all are face cards).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="4"><li><p>Sum = 7: {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}, total 6 outcomes
At least one 3: {(3,4), (4,3)}, total 2 outcomes
P = 2/6 = 1/3</p></li><li><p>P(contradict) = P(A true, B false) + P(A false, B true)
= 0.6 × 0.2 + 0.4 × 0.8 = 0.12 + 0.32 = 0.44</p></li><li><p>Face cards = 12 in deck
P = (12/52) × (11/51) × (10/50) = 1320/132600 = 11/1105</p></li></ol></div></details>

---

### Level 3: Advanced (JEE Advanced)

7. Bag I: 3 red, 2 blue. Bag II: 2 red, 3 blue. A die is thrown. If 1 or 2 appears, a ball is drawn from Bag I; otherwise from Bag II. Find P(ball is red).
8. Events A, B, C are such that P(A) = P(B) = P(C) = 1/4, P(A ∩ B) = P(B ∩ C) = 0, P(A ∩ C) = 1/8. Find P(C | A ∪ B).
9. Prove: If P(A|B) > P(A), then P(B|A) > P(B).

<details class="collapse"><summary class="collapse-title"><span>Solutions</span><span aria-hidden="true" class="callout-show">Show ▾</span></summary><div class="collapse-content"><ol start="7"><li><p>P(Bag I) = 2/6 = 1/3, P(Bag II) = 4/6 = 2/3
P(R|I) = 3/5, P(R|II) = 2/5
P(R) = (1/3)(3/5) + (2/3)(2/5) = 1/5 + 4/15 = 3/15 + 4/15 = 7/15</p></li><li><p>P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 1/4 + 1/4 - 0 = 1/2
P(C ∩ (A ∪ B)) = P((C ∩ A) ∪ (C ∩ B)) = P(C ∩ A) + P(C ∩ B) - P(C ∩ A ∩ B)
= 1/8 + 0 - 0 = 1/8
P(C|A ∪ B) = (1/8)/(1/2) = 1/4</p></li><li><p>P(A|B) &gt; P(A) → P(A ∩ B)/P(B) &gt; P(A) → P(A ∩ B) &gt; P(A)P(B)
P(B|A) = P(A ∩ B)/P(A) &gt; P(A)P(B)/P(A) = P(B) ✓</p></li></ol></div></details>

---

## Real-Life Applications

### 1. Medical Diagnosis

- P(disease | positive test) ≠ P(positive test | disease)
- Need to account for base rate (disease prevalence)
- False positives more common when disease is rare

### 2. Weather Forecasting

- P(rain tomorrow | rain today) > P(rain tomorrow)
- Conditional on current atmospheric conditions
- Bayesian updating with new data

### 3. Spam Filtering

- P(spam | word) calculated for each word
- Combines multiple conditional probabilities
- Naive Bayes classifier

### 4. Sports Analytics

- P(win | specific player plays) vs P(win)
- Conditional on opponent, home/away, etc.
- Strategy optimization

### 5. Card Games (Poker, Blackjack)

- Probabilities change as cards are revealed
- Counting cards = tracking conditional probabilities
- Optimal strategy based on seen cards

---

## Connection to Other Topics

Cross-Topic Links

**Related JEE Topics**:

- [Probability Basics](../probability-basics/index.md) - Foundation for conditional probability
- [Bayes’ Theorem](../bayes-theorem/index.md) - Advanced application of conditional probability
- [Random Variables](../random-variables/index.md) - Conditional expectations
- [Probability Distributions](../probability-distributions/index.md) - Conditional distributions
- [Permutations & Combinations](../../permutations-combinations/index.md) - Counting for “without replacement”

**Key Connections**:

- **Independence** → Simplifies to P(A) × P(B)
- **Tree Diagrams** → Visual tool for multiplication theorem
- **Total Probability** → Bridge to Bayes’ theorem

---

## Formula Quick Reference

Quick Formula Sheet

**Conditional Probability**:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$

**Multiplication Theorem**:

$$P(A \cap B) = P(A) \times P(B|A) = P(B) \times P(A|B)$$

**Independence**:

$$P(A \cap B) = P(A) \times P(B)$$

$$P(A|B) = P(A) \text{ and } P(B|A) = P(B)$$

**Three Events**:

$$P(A \cap B \cap C) = P(A) \times P(B|A) \times P(C|A \cap B)$$

**Total Probability** (leads to Bayes’):

$$P(A) = \sum_i P(B_i) \times P(A|B_i)$$

---

## Quick Revision Checklist

Quick Revision

✓ **Conditional Probability**: P(A|B) = P(A ∩ B) / P(B)
✓ **Given → Denominator**: P(A|**B**) has **B** in denominator
✓ **Multiplication**: P(A ∩ B) = P(A) × P(B|A)
✓ **Independence**: P(A ∩ B) = P(A) × P(B), P(A|B) = P(A)
✓ **Tree Diagram**: Multiply along path, add across paths
✓ **Without Replacement**: Probabilities change (dependent)
✓ **With Replacement**: Probabilities same (independent)
✓ **Mutually Exclusive ≠ Independent**: Opposite concepts!

---

## Exam Tips

1. **Identify “given”**: P(A|B) means “given B occurred”
2. **Check independence**: If independent, skip conditional formula and just multiply
3. **Draw tree diagrams**: For sequential events, visualize with trees
4. **Without replacement**: Remember to reduce numerator AND denominator
5. **Read carefully**: P(A|B) ≠ P(B|A) in general
6. **Use complement**: Sometimes P(A’|B) is easier to find than P(A|B)

---

## Next Steps

Ready to flip probabilities around? Continue to:

- [Bayes’ Theorem](../bayes-theorem/index.md) - The ultimate tool for reversing conditional probabilities

---

*Last updated: December 18, 2025*
*Practice conditional probability at [JEENotes Practice Portal](#)*

From TestGuru · our mock-test platform

## You've read Conditional Probability.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=statistics-probability&tg_exam=jee-main&tg_page=%2Fmathematics%2Fstatistics-probability%2Fconditional-probability%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/statistics-probability/conditional-probability/",this.page.identifier="/mathematics/statistics-probability/conditional-probability/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422218276537"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422218276537")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/statistics-probability/conditional-probability/](https://jeenotes.in/mathematics/statistics-probability/conditional-probability/) · raw HTML: `offline/mathematics/statistics-probability/conditional-probability/index.html`_
