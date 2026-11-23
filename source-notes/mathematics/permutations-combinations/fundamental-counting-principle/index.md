---
title: "Fundamental Principle of Counting"
source: "https://jeenotes.in/mathematics/permutations-combinations/fundamental-counting-principle/"
description: "Master the foundation of counting - understand multiplication and addition principles with real-world applications in passwords, license plates, and choice-making scenarios"
updated: "2025-12-26"
reading_time: "12 min read"
breadcrumb: "Mathematics"
position: "/ Topic 1 of 9"
html: "../../../../offline/mathematics/permutations-combinations/fundamental-counting-principle/index.html"
extracted: "2026-11-23"
---

> Master the foundation of counting - understand multiplication and addition principles with real-world applications in passwords, license plates, and choice-making scenarios

## Real-Life Hook: Creating a Secure Password

You’re setting up a new email account. The password requirements are:

- First character: Must be a letter (26 options)
- Next 3 characters: Can be any digit (10 options each)
- Last character: Must be a special symbol (5 options)

How many different passwords can you create? This is where the **Fundamental Principle of Counting** becomes your superpower!

Answer: $26 \times 10 \times 10 \times 10 \times 5 = 130,000$ possible passwords.

---

## Why This Topic Matters

The Fundamental Counting Principle is the **foundation** of all counting problems. Before you can master permutations and combinations, you need to understand when to multiply and when to add. This concept appears in:

- **JEE Main**: Direct questions (2-3 marks), foundational for P&C problems
- **JEE Advanced**: Building block for complex multi-step counting scenarios
- **Real Life**: Probability calculations, cryptography, decision trees, optimization

---

## Core Concepts

### 1. Multiplication Principle (AND Rule)

**Principle**: If an event can occur in $m$ ways AND another independent event can occur in $n$ ways, then both events occurring together can happen in $m \times n$ ways.

$$\boxed{\text{Total ways} = m \times n \times p \times \ldots}$$

### Interactive Demo: Visualize Counting Principles

Explore how multiplication and addition principles work with decision trees.

**Think**: “AND means MULTIPLY” - you’re doing one thing AND then another.

**Example**: To reach a destination, you can go by:

- Train: 3 routes available
- Then bus: 4 routes available
- Total ways = $3 \times 4 = 12$ ways

### 2. Addition Principle (OR Rule)

**Principle**: If an event can occur in $m$ ways OR another mutually exclusive event can occur in $n$ ways, then either event can occur in $m + n$ ways.

$$\boxed{\text{Total ways} = m + n + p + \ldots}$$

**Think**: “OR means ADD” - you’re choosing one option OR another (not both).

**Example**: To reach a destination, you can go by:

- Train: 3 routes available, OR
- Flight: 2 routes available
- Total ways = $3 + 2 = 5$ ways

### 3. Combined Principles

Most problems require **both** principles working together.

**Example**: College Admission

- You can choose Science stream (3 colleges) OR Commerce stream (4 colleges)
- After choosing stream AND college, you must choose a hostel (2 options)

Total ways = $(3 + 4) \times 2 = 14$ ways

---

## Memory Tricks

### AND vs OR - The Key Distinction

| Aspect | Multiplication (AND) | Addition (OR) |
| --- | --- | --- |
| **Keyword** | “and then”, “followed by” | “or”, “alternatively” |
| **Events** | Sequential/simultaneous | Mutually exclusive choices |
| **Operation** | MULTIPLY | ADD |
| **Result** | Usually larger | Usually smaller |
| **Example** | Shirt AND pants | Bus OR train |

**Mnemonic**:

- **M-AND** = Multiply AND
- **O-R** = OR = Add (O looks like 0, + operation)

### Decision Tree Technique

Draw a tree diagram when confused:

```fallback
Start
├── Option 1 (m ways)
│   ├── Sub-option A (n ways)
│   └── Sub-option B (n ways)
└── Option 2 (p ways)
    ├── Sub-option A (n ways)
    └── Sub-option B (n ways)

Total = m×n + p×n = n(m+p)
```

---

## Common Counting Mistakes

### ❌ Mistake 1: Confusing AND with OR

**Wrong**: “Choose a shirt (5 types) and pants (3 types)” = $5 + 3 = 8$ ❌

**Right**: You need BOTH shirt AND pants = $5 \times 3 = 15$ ✓

**Tip**: Ask yourself - “Am I doing both or choosing one?”

### ❌ Mistake 2: Forgetting Independence

**Problem**: Two dice are thrown. Find total outcomes.

**Wrong**: Die 1 shows 6 values, Die 2 shows 6 values = $6 + 6 = 12$ ❌

**Right**: Each die is independent = $6 \times 6 = 36$ ✓

**Tip**: Independent events → Multiply; Mutually exclusive choices → Add

### ❌ Mistake 3: Not Considering Restrictions

**Problem**: 4-digit numbers using digits 1,2,3,4,5 (repetition allowed)

**Common mistake**: $5^4 = 625$ (includes numbers starting with 0&mldr; wait, we don’t have 0!)

**Actually correct**: $5^4 = 625$ ✓ (In this case, it’s fine!)

**Real mistake scenario**: If we included 0 in digits {0,1,2,3,4,5}, answer would be $5 \times 6^3$ not $6^4$

### ❌ Mistake 4: Over-counting

**Problem**: License plates with format: 2 letters then 3 digits

**Wrong**: “2 positions for letters, 3 positions for digits” = $2 \times 3 = 6$ ❌

**Right**: First letter (26) × Second letter (26) × First digit (10) × Second digit (10) × Third digit (10) = $26^2 \times 10^3$ ✓

---

## Problem-Solving Framework

### Step-by-Step Approach

1. **Identify**: What needs to be counted?
2. **Break down**: What are the independent steps/choices?
3. **Classify**: Is each step AND (multiply) or OR (add)?
4. **Check restrictions**: Any conditions limiting choices?
5. **Calculate**: Apply principles systematically
6. **Verify**: Does the answer make logical sense?

---

## Practice Problems

### Level 1: Foundation (JEE Main)

**Problem 1.1**: A person wants to go from city A to city C via city B. There are 4 routes from A to B and 3 routes from B to C. In how many ways can the person travel from A to C?

<details><summary>Solution</summary><p><strong>Answer</strong>: $4 \times 3 = 12$ ways</p><p><strong>Explanation</strong>:</p><ul><li>Choose route A to B: 4 ways (AND)</li><li>Choose route B to C: 3 ways</li><li>Total = $4 \times 3 = 12$ ways</li></ul></details>

**Problem 1.2**: A restaurant offers:

- 3 types of starters
- 5 types of main course
- 2 types of desserts

If you must choose exactly one item from each category, how many different meals are possible?

<details><summary>Solution</summary><p><strong>Answer</strong>: $3 \times 5 \times 2 = 30$ different meals</p><p><strong>Explanation</strong>: You choose one starter AND one main course AND one dessert (all three choices are independent and mandatory).</p></details>

**Problem 1.3**: In a class, there are 10 boys and 8 girls. In how many ways can a class monitor (either a boy or a girl) be selected?

<details><summary>Solution</summary><p><strong>Answer</strong>: $10 + 8 = 18$ ways</p><p><strong>Explanation</strong>: You select a boy OR a girl (mutually exclusive - can’t be both), so we add.</p></details>

**Problem 1.4**: How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, 5 if:
(a) Repetition is allowed?
(b) Repetition is not allowed?

<details><summary>Solution</summary><p><strong>(a) With repetition</strong>: $5 \times 5 \times 5 = 125$</p><ul><li>Hundreds place: 5 choices</li><li>Tens place: 5 choices</li><li>Units place: 5 choices</li></ul><p><strong>(b) Without repetition</strong>: $5 \times 4 \times 3 = 60$</p><ul><li>Hundreds place: 5 choices</li><li>Tens place: 4 remaining choices</li><li>Units place: 3 remaining choices</li></ul></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

**Problem 2.1**: How many 4-letter codes can be formed using the letters of the word “EQUATION” if repetition is not allowed?

<details><summary>Solution</summary><p><strong>Answer</strong>: $8 \times 7 \times 6 \times 5 = 1680$</p><p><strong>Explanation</strong>:</p><ul><li>Word “EQUATION” has 8 distinct letters</li><li>First position: 8 choices</li><li>Second position: 7 remaining</li><li>Third position: 6 remaining</li><li>Fourth position: 5 remaining</li><li>Total = $8 \times 7 \times 6 \times 5 = 1680$</li></ul></details>

**Problem 2.2**: Five students compete for 3 prizes (first, second, third). In how many ways can the prizes be awarded if each student can receive at most one prize?

<details><summary>Solution</summary><p><strong>Answer</strong>: $5 \times 4 \times 3 = 60$ ways</p><p><strong>Explanation</strong>:</p><ul><li>First prize: 5 choices</li><li>Second prize: 4 remaining students</li><li>Third prize: 3 remaining students</li><li>Note: Order matters (first prize ≠ second prize)</li></ul></details>

**Problem 2.3**: A team consists of 5 boys and 4 girls. In how many ways can a team of 3 be selected such that:
(a) All are boys?
(b) All are girls?
(c) At least one boy is included?

<details><summary>Solution</summary><p>Wait! This requires combinations (nCr), which we’ll cover in later topics. Using fundamental counting:</p><p><strong>Alternative approach for (c)</strong>:
Total ways - All girls = Total - (ways to select 3 girls)</p><p>We’ll solve this properly in the combinations chapter. For now, recognize this needs combination formulas, not just fundamental counting.</p><p><strong>Learning point</strong>: Fundamental counting works best when order matters or when we’re making sequential choices. Selection problems often need combinations.</p></details>

**Problem 2.4**: How many even numbers between 300 and 700 can be formed using digits 1, 2, 3, 4, 5, 6 without repetition?

<details><summary>Solution</summary><p><strong>Answer</strong>: 60</p><p><strong>Explanation</strong>:
Even numbers end in 2, 4, or 6.
Numbers between 300 and 700 start with 3, 4, 5, or 6.</p><p><strong>Case 1</strong>: Starts with 3, ends with even (2, 4, or 6)</p><ul><li>First position: 1 choice (3)</li><li>Last position: 3 choices (2, 4, 6)</li><li>Middle position: 4 remaining choices</li><li>Total: $1 \times 4 \times 3 = 12$</li></ul><p><strong>Case 2</strong>: Starts with 4, ends with even (must be 2 or 6, not 4)</p><ul><li>First position: 1 choice (4)</li><li>Last position: 2 choices (2, 6)</li><li>Middle position: 4 remaining choices</li><li>Total: $1 \times 4 \times 2 = 8$</li></ul><p><strong>Case 3</strong>: Starts with 5, ends with even (2, 4, or 6)</p><ul><li>Total: $1 \times 4 \times 3 = 12$</li></ul><p><strong>Case 4</strong>: Starts with 6, ends with even (must be 2 or 4, not 6)</p><ul><li>Total: $1 \times 4 \times 2 = 8$</li></ul><p><strong>Grand Total</strong>: $12 + 8 + 12 + 8 = 40$</p><p>Wait, let me recalculate more carefully:</p><p>For 3-digit number ABC where A is hundreds, B is tens, C is units:</p><ul><li>300 ≤ ABC &lt; 700</li><li>A ∈ {3, 4, 5, 6}</li><li>C ∈ {2, 4, 6} (for even numbers)</li><li>No repetition</li></ul><p><strong>Case 1</strong>: A = 3</p><ul><li>C can be 2, 4, or 6 (3 choices)</li><li>B can be any of remaining 4 digits (4 choices)</li><li>Total: $3 \times 4 = 12$</li></ul><p><strong>Case 2</strong>: A = 4</p><ul><li>C must be 2 or 6 (2 choices, since 4 is used)</li><li>B can be any of remaining 4 digits (4 choices)</li><li>Total: $2 \times 4 = 8$</li></ul><p><strong>Case 3</strong>: A = 5</p><ul><li>C can be 2, 4, or 6 (3 choices)</li><li>B can be any of remaining 4 digits (4 choices)</li><li>Total: $3 \times 4 = 12$</li></ul><p><strong>Case 4</strong>: A = 6</p><ul><li>C must be 2 or 4 (2 choices, since 6 is used)</li><li>B can be any of remaining 4 digits (4 choices)</li><li>Total: $2 \times 4 = 8$</li></ul><p><strong>Answer</strong>: $12 + 8 + 12 + 8 = 40$</p></details>

---

### Level 3: Advanced (JEE Advanced)

**Problem 3.1**: In how many ways can 5 people be seated in a row such that two particular people are not adjacent?

<details><summary>Solution</summary><p><strong>Answer</strong>: 72</p><p><strong>Explanation</strong>:
<strong>Method 1: Complementary Counting</strong></p><ul><li>Total arrangements of 5 people = $5! = 120$</li><li>Arrangements where 2 particular people ARE adjacent:<ul><li>Treat them as one unit: 4 units to arrange = $4! = 24$</li><li>Within the unit, 2 people can arrange in $2! = 2$ ways</li><li>Total with adjacency = $24 \times 2 = 48$</li></ul></li><li>Answer = $120 - 48 = 72$</li></ul><p><strong>Method 2: Direct Counting</strong>
We’ll learn this method with permutations!</p></details>

**Problem 3.2**: A 5-digit number is formed using digits 0, 1, 2, 3, 4, 5 without repetition. How many such numbers are divisible by 4?

<details><summary>Solution</summary><p><strong>Divisibility rule for 4</strong>: Last two digits must form a number divisible by 4.</p><p>From {0,1,2,3,4,5}, two-digit numbers divisible by 4:</p><ul><li>04, 12, 20, 24, 32, 40, 52</li></ul><p>But for 5-digit numbers:</p><ul><li>First digit ≠ 0</li><li>All digits distinct</li></ul><p>This requires careful case analysis:</p><p><strong>Last two digits = 04</strong>:</p><ul><li>First digit: 4 choices {1,2,3,5}</li><li>Second digit: 3 remaining</li><li>Third digit: 2 remaining</li><li>Count: $4 \times 3 \times 2 = 24$</li></ul><p><strong>Last two digits = 12</strong>:</p><ul><li>Remaining digits: {0,3,4,5}</li><li>First digit: 3 choices {3,4,5} (not 0)</li><li>Second digit: 3 remaining (including 0 now)</li><li>Third digit: 2 remaining</li><li>Count: $3 \times 3 \times 2 = 18$</li></ul><p><strong>Last two digits = 20</strong>:</p><ul><li>Remaining: {1,3,4,5}</li><li>First: 4 choices, Second: 3, Third: 2</li><li>Count: $4 \times 3 \times 2 = 24$</li></ul><p><strong>Last two digits = 24</strong>:</p><ul><li>Remaining: {0,1,3,5}</li><li>First: 3 choices {1,3,5}, Second: 3, Third: 2</li><li>Count: $3 \times 3 \times 2 = 18$</li></ul><p><strong>Last two digits = 32</strong>:</p><ul><li>Remaining: {0,1,4,5}</li><li>First: 3 choices {1,4,5}, Second: 3, Third: 2</li><li>Count: $3 \times 3 \times 2 = 18$</li></ul><p><strong>Last two digits = 40</strong>:</p><ul><li>Remaining: {1,2,3,5}</li><li>First: 4, Second: 3, Third: 2</li><li>Count: $4 \times 3 \times 2 = 24$</li></ul><p><strong>Last two digits = 52</strong>:</p><ul><li>Remaining: {0,1,3,4}</li><li>First: 3 choices {1,3,4}, Second: 3, Third: 2</li><li>Count: $3 \times 3 \times 2 = 18$</li></ul><p><strong>Total</strong>: $24 + 18 + 24 + 18 + 18 + 24 + 18 = 144$</p></details>

**Problem 3.3**: Find the number of ways to arrange the letters of the word “MATHEMATICS” (we’ll revisit this with permutations, but try using fundamental counting).

<details><summary>Solution</summary><p><strong>Letters in MATHEMATICS</strong>: M(2), A(2), T(2), H(1), E(1), I(1), C(1), S(1)</p><ul><li>Total 11 letters</li><li>Repeated: M, A, T (each appears twice)</li></ul><p>Using fundamental counting is complex here. We need:</p>$$\frac{11!}{2! \times 2! \times 2!}$$<p><strong>Why?</strong> This requires understanding of permutations with repetition (next topic!).</p><p><strong>Learning point</strong>: Fundamental counting has limits. When dealing with repetitions and arrangements, permutation formulas are more efficient.</p></details>

**Problem 3.4**: A password consists of 8 characters. The first 2 must be uppercase letters, next 4 must be digits, and last 2 must be lowercase letters. Characters can repeat. However, the 4 digits must include at least one even digit. How many such passwords are possible?

<details><summary>Solution</summary><p><strong>Answer</strong>: $26^2 \times (10^4 - 5^4) \times 26^2$</p><p><strong>Explanation</strong>:</p><ul><li>First 2 positions (uppercase): $26 \times 26 = 26^2$</li><li>Last 2 positions (lowercase): $26 \times 26 = 26^2$</li><li>Middle 4 positions (digits with at least one even):<ul><li>Total 4-digit combinations: $10^4$</li><li>All odd digits (no even): $5^4$ (digits 1,3,5,7,9)</li><li>At least one even: $10^4 - 5^4$</li></ul></li></ul><p><strong>Total</strong>: $26^2 \times (10000 - 625) \times 26^2 = 676 \times 9375 \times 676$</p><p>$= 4,289,250,000$ passwords</p><p><strong>Technique</strong>: Complementary counting (Total - Unwanted)</p></details>

---

## Cross-Topic Connections

### Link to Permutations

The fundamental counting principle is the **foundation** of permutations. When you calculate $nPr = \frac{n!}{(n-r)!}$, you’re actually using multiplication principle:

- Choose 1st object: $n$ ways
- Choose 2nd object: $(n-1)$ ways
- &mldr;
- Choose $r$-th object: $(n-r+1)$ ways
- Total: $n \times (n-1) \times \ldots \times (n-r+1) = nPr$

→ See [Permutations Basics](../permutations-basics/index.md)

### Link to Combinations

Addition principle helps when combining different cases in selection problems.

→ See [Combinations Basics](../combinations-basics/index.md)

### Link to Probability

$$P(\text{Event}) = \frac{\text{Favorable outcomes}}{\text{Total outcomes}}$$

Both numerator and denominator are often calculated using counting principles!

→ See [Probability](../../statistics-probability/index.md)

### Link to Binomial Theorem

The number of terms in binomial expansion $(x+y)^n$ uses counting principles.

→ See [Binomial Theorem](../../binomial-theorem/index.md)

---

## JEE Tips & Tricks

### Time-Saving Strategies

1. **Draw diagrams** for complex problems (decision trees, slot method)
2. **Use complementary counting** when “at least” or “at most” appears
3. **Check answer reasonableness**: Does $5 + 3 = 15$ make sense? No! Should be $5 \times 3$.
4. **Slot method**: Draw blanks `_ _ _` and fill each position

### Common JEE Patterns

1. **License plates**: Letters and digits with restrictions
2. **Passwords**: Character types with conditions
3. **Teams/Committees**: Selection with constraints (→ combinations)
4. **Arrangement problems**: Seating, standing (→ permutations)
5. **Divisibility**: Numbers with specific properties

### Quick Checklist Before Solving

- What exactly am I counting?
- Is it sequential (AND) or alternatives (OR)?
- Any restrictions on choices?
- Can choices repeat?
- Does order matter? (If yes → likely permutation later)

---

## Summary

| Principle | Operation | Keyword | Example |
| --- | --- | --- | --- |
| **Multiplication** | × | “AND”, “then” | Shirt AND pants: $5 \times 3$ |
| **Addition** | + | “OR”, “alternatively” | Bus OR train: $3 + 2$ |

**Key Takeaways**:

1. Multiplication for sequential/simultaneous independent events
2. Addition for mutually exclusive choices
3. Most problems combine both principles
4. Always check for restrictions and conditions
5. Draw diagrams when confused!

---

**Next Steps**:

- Master [Permutations Basics](../permutations-basics/index.md) to handle ordered arrangements
- Learn [Combinations](../combinations-basics/index.md) for unordered selections

---

*Last updated: September 5, 2025*

From TestGuru · our mock-test platform

## You've read Fundamental Principle of Counting.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=permutations-combinations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fpermutations-combinations%2Ffundamental-counting-principle%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/permutations-combinations/fundamental-counting-principle/",this.page.identifier="/mathematics/permutations-combinations/fundamental-counting-principle/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-17

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422029176013"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422029176013")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/permutations-combinations/fundamental-counting-principle/](https://jeenotes.in/mathematics/permutations-combinations/fundamental-counting-principle/) · raw HTML: `offline/mathematics/permutations-combinations/fundamental-counting-principle/index.html`_
