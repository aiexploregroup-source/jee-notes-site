---
title: "Combinations Basics - Selections and nCr Formula"
source: "https://jeenotes.in/mathematics/permutations-combinations/combinations-basics/"
description: "Master combinations and the nCr formula - learn to solve selection problems, understand binomial coefficients, and tackle team selection, lottery, and committee formation for JEE"
updated: "2026-08-01"
reading_time: "14 min read"
breadcrumb: "Mathematics"
position: "/ Topic 5 of 9"
html: "../../../../offline/mathematics/permutations-combinations/combinations-basics/index.html"
extracted: "2026-11-23"
---

> Master combinations and the nCr formula - learn to solve selection problems, understand binomial coefficients, and tackle team selection, lottery, and committee formation for JEE

## Real-Life Hook: The Lottery Dilemma

You’re playing a lottery where you must choose 6 numbers from 1 to 49. In how many different ways can you select your numbers?

**Wrong thinking**: “I choose 1st number (49 options), 2nd number (48 options)&mldr; so $49 \times 48 \times 47 \times 46 \times 45 \times 44$”

**Reality check**: Does it matter if you pick {3,7,15,22,31,48} vs {48,31,22,15,7,3}? **NO!** Both are the same lottery ticket!

**Correct answer**:

$$^{49}C_6 = \frac{49!}{6! \times 43!} = 13,983,816 \text{ ways}$$

### Interactive Demo: Visualize Combinations

See how selections work when order doesn’t matter.

This is a **combination** problem - order doesn’t matter. Welcome to the world of selections!

---

## Why This Topic Matters

Combinations appear everywhere:

- **Team selection**: Choosing 11 players from 15 for cricket
- **Committee formation**: Selecting 5 members from 20
- **Lottery**: Picking winning numbers
- **Card games**: Dealing hands of cards
- **Subsets**: Selecting items from a set

**JEE Importance**:

- **JEE Main**: 4-6 questions (highest weightage in P&C), 12-18 marks
- **JEE Advanced**: Complex selection with constraints, often with multinomial
- **Foundation**: Critical for probability, binomial theorem, distributions

**The Big Difference**: Permutation = Ordered, Combination = Unordered

---

## Interactive Demo: Combination Calculator

### Combination (nCr) Calculator

Calculate nCr = n!/(r!(n-r)!) - the number of ways to select r objects from n objects

Total objects (n): 
Select (r):

---

## Core Concepts

### 1. Definition of Combination

**Combination**: A selection of objects where **order does not matter**.

**Notation**: The number of ways to select $r$ objects from $n$ distinct objects is:

$$^nC_r \quad \text{or} \quad C(n,r) \quad \text{or} \quad \binom{n}{r} \quad \text{or} \quad C_r^n$$

**Read as**: “n choose r”

### 2. Combination Formula

$$\boxed{^nC_r = \frac{n!}{r! \times (n-r)!}}$$

**Derivation**:

- Number of ways to select and arrange $r$ from $n$: $^nP_r = \frac{n!}{(n-r)!}$
- But in combinations, order doesn’t matter
- Any $r$ objects can be arranged in $r!$ ways (all counting as the same selection)
- So divide by $r!$:
  $$^nC_r = \frac{^nP_r}{r!} = \frac{n!}{r! \times (n-r)!}$$

**Example**: Select 3 people from {A,B,C,D,E}

$$^5C_3 = \frac{5!}{3! \times 2!} = \frac{120}{6 \times 2} = 10$$

The 10 selections: {A,B,C}, {A,B,D}, {A,B,E}, {A,C,D}, {A,C,E}, {A,D,E}, {B,C,D}, {B,C,E}, {B,D,E}, {C,D,E}

### 3. Important Properties of Combinations

**Property 1: Symmetry**

$$\boxed{^nC_r = ^nC_{n-r}}$$

**Proof**:

$$^nC_r = \frac{n!}{r!(n-r)!} = \frac{n!}{(n-r)!r!} = ^nC_{n-r}$$

**Intuition**: Choosing $r$ objects to include = Choosing $(n-r)$ objects to exclude

**Example**: $^{10}C_3 = ^{10}C_7 = 120$

**Property 2: Sum of consecutive combinations**

$$\boxed{^nC_r + ^nC_{r-1} = ^{n+1}C_r}$$

**Proof**: (Pascal’s triangle property)

$$^nC_r + ^nC_{r-1} = \frac{n!}{r!(n-r)!} + \frac{n!}{(r-1)!(n-r+1)!}$$

After simplification (try it!), this equals $^{n+1}C_r$.

**Intuition**: Divide selections from $n+1$ objects into two groups:

- Selections that include a specific object: $^nC_{r-1}$
- Selections that exclude that object: $^nC_r$

**Property 3: Sum of all combinations**

$$\boxed{^nC_0 + ^nC_1 + ^nC_2 + \ldots + ^nC_n = 2^n}$$

**Proof**: From binomial theorem, $(1+1)^n = 2^n$

**Intuition**: Total number of subsets of a set with $n$ elements = $2^n$

**Property 4: Special values**

$$\boxed{^nC_0 = 1 \quad ^nC_1 = n \quad ^nC_n = 1}$$

**Property 5: Maximum value**

- If $n$ is even: $^nC_{n/2}$ is maximum
- If $n$ is odd: $^nC_{(n-1)/2} = ^nC_{(n+1)/2}$ are maximum

**Example**: For $n=6$: $^6C_3 = 20$ is maximum
For $n=7$: $^7C_3 = ^7C_4 = 35$ are maximum

### 4. Relation Between nPr and nCr

$$\boxed{^nP_r = ^nC_r \times r!}$$

**Interpretation**:

- $^nC_r$ = Ways to select $r$ objects (no order)
- $r!$ = Ways to arrange those $r$ objects
- $^nP_r$ = Select AND arrange = $^nC_r \times r!$

**Example**:

$$^5P_3 = ^5C_3 \times 3! = 10 \times 6 = 60$$

---

## Memory Tricks

### nCr vs nPr - Decision Tree

```fallback
START
  ↓
Does ORDER matter?
  ↙         ↘
 YES        NO
  ↓          ↓
nPr       nCr
(Arrange) (Select)
```

**Quick questions to ask**:

1. “If I swap two items, is it different?” → YES = Permutation, NO = Combination
2. “Am I creating a ranking/sequence?” → YES = Permutation
3. “Am I forming a team/group/committee?” → YES = Combination

### Memory Hooks

**“Committee = Combination”** (both start with C)
**“Selection = Set = Combination”** (sets are unordered)

**“Arrangement = Order = Permutation”**
**“Race = Rank = Permutation”**

### The Formula Memory Trick

$$^nC_r = \frac{n!}{r! \times (n-r)!}$$

**Mnemonic**: “**C**ut the factorial twice - by $r!$ and $(n-r)!$”

Compared to $^nP_r = \frac{n!}{(n-r)!}$ which cuts once.

**nCr has EXTRA division by $r!$** → Removes order

### Pascal’s Triangle (Visual Memory)

```fallback
1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
```

- Row $n$ contains $^nC_0, ^nC_1, \ldots, ^nC_n$
- Each number = sum of two numbers above it
- Symmetric (property: $^nC_r = ^nC_{n-r}$)

---

## Common Counting Mistakes

### ❌ Mistake 1: Using nPr Instead of nCr

**Problem**: Select 3 students from 10 to form a study group.

**Wrong**: $^{10}P_3 = 720$ ❌ (This counts ABC different from BAC!)

**Right**: $^{10}C_3 = 120$ ✓ (Group has no order)

**Test**: Ask yourself - is {Alice, Bob, Charlie} different from {Charlie, Bob, Alice}? NO → Use nCr!

### ❌ Mistake 2: Not Simplifying nCr

**Problem**: Calculate $^{50}C_{48}$

**Wrong**: Try to compute $\frac{50!}{48! \times 2!}$ directly ❌

**Right**: Use symmetry! $^{50}C_{48} = ^{50}C_2 = \frac{50 \times 49}{2} = 1,225$ ✓

**Rule**: If $r > n/2$, use $^nC_r = ^nC_{n-r}$ for easier calculation

### ❌ Mistake 3: Forgetting “At Least One”

**Problem**: Select at least 2 people from 5.

**Wrong**: $^5C_2 = 10$ ❌ (This is EXACTLY 2, not at least!)

**Right**: $^5C_2 + ^5C_3 + ^5C_4 + ^5C_5 = 10 + 10 + 5 + 1 = 26$ ✓

**Alternative**: Total - Unwanted = $(2^5 - 1) - ^5C_0 - ^5C_1 = 31 - 1 - 5 = 25$

Wait, let me recalculate:

- Total subsets: $2^5 = 32$
- Subsets with 0 people: $^5C_0 = 1$
- Subsets with 1 person: $^5C_1 = 5$
- At least 2: $32 - 1 - 5 = 26$ ✓

### ❌ Mistake 4: Confusing “And” with “Or” in Selections

**Problem**: Select 2 boys AND 3 girls from 5 boys and 6 girls.

**Wrong**: $^5C_2 + ^6C_3 = 10 + 20 = 30$ ❌ (This is OR, not AND!)

**Right**: $^5C_2 \times ^6C_3 = 10 \times 20 = 200$ ✓ (AND means multiply!)

---

## Problem-Solving Strategies

### Strategy 1: Identify Selection vs Arrangement

**Ask**: Does order matter?

- **No** → Use $^nC_r$
- **Yes** → Use $^nP_r$

### Strategy 2: Use Symmetry Property

For large $r$ close to $n$:

$$^nC_r = ^nC_{n-r}$$

**Example**: $^{100}C_{98} = ^{100}C_2 = 4,950$ (much easier!)

### Strategy 3: Complementary Counting

“At least”, “at most” → Use Total - Unwanted

**Example**: At least 1 person from 6

- Total ways: $2^6 - 1 = 63$ (all subsets except empty)
- OR: $^6C_1 + ^6C_2 + \ldots + ^6C_6 = 2^6 - ^6C_0 = 63$

### Strategy 4: Break Into Cases

When selections have constraints, divide into non-overlapping cases.

**Example**: Select 4 from 6 men and 5 women, with at least 1 woman

- **Case 1**: 1W, 3M → $^5C_1 \times ^6C_3 = 5 \times 20 = 100$
- **Case 2**: 2W, 2M → $^5C_2 \times ^6C_2 = 10 \times 15 = 150$
- **Case 3**: 3W, 1M → $^5C_3 \times ^6C_1 = 10 \times 6 = 60$
- **Case 4**: 4W, 0M → $^5C_4 \times ^6C_0 = 5 \times 1 = 5$
- **Total**: $100 + 150 + 60 + 5 = 315$

**Alternative**: Total - (All men)
= $^{11}C_4 - ^6C_4 = 330 - 15 = 315$ ✓

---

## Practice Problems

### Level 1: Foundation (JEE Main)

**Problem 1.1**: Find the value of $^8C_3$.

<details><summary>Solution</summary><p><strong>Answer</strong>: 56</p><p><strong>Solution</strong>:</p>$$^8C_3 = \frac{8!}{3! \times 5!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = \frac{336}{6} = 56$$</details>

**Problem 1.2**: In how many ways can a committee of 5 be selected from 8 people?

<details><summary>Solution</summary><p><strong>Answer</strong>: 56</p><p><strong>Solution</strong>:</p>$$^8C_5 = \frac{8!}{5! \times 3!} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56$$<p><strong>Note</strong>: $^8C_5 = ^8C_3 = 56$ (symmetry property!)</p></details>

**Problem 1.3**: Find $n$ if $^nC_2 = 28$.

<details><summary>Solution</summary><p><strong>Answer</strong>: $n = 8$</p><p><strong>Solution</strong>:</p>$$^nC_2 = \frac{n!}{2!(n-2)!} = \frac{n(n-1)}{2} = 28$$<p></p>$$n(n-1) = 56$$<p></p>$$n^2 - n - 56 = 0$$<p></p>$$(n-8)(n+7) = 0$$<p></p>$$n = 8 \text{ or } n = -7$$<p>Since $n$ must be positive, $n = 8$.</p><p><strong>Verification</strong>: $^8C_2 = \frac{8 \times 7}{2} = 28$ ✓</p></details>

**Problem 1.4**: Prove that $^nC_r = ^nC_{n-r}$.

<details><summary>Solution</summary><p><strong>Proof</strong>:</p>$$^nC_r = \frac{n!}{r!(n-r)!}$$

$$^nC_{n-r} = \frac{n!}{(n-r)!(n-(n-r))!} = \frac{n!}{(n-r)!r!}$$<p>Since multiplication is commutative:</p>$$\frac{n!}{r!(n-r)!} = \frac{n!}{(n-r)!r!}$$<p>Therefore, $^nC_r = ^nC_{n-r}$ ✓</p><p><strong>Intuitive proof</strong>: Selecting $r$ objects to include is the same as selecting $(n-r)$ objects to exclude.</p></details>

---

### Level 2: Intermediate (JEE Main/Advanced)

**Problem 2.1**: From 6 boys and 4 girls, a committee of 5 is to be formed. In how many ways can this be done if the committee contains:
(a) Exactly 2 girls?
(b) At least 2 girls?
(c) At most 2 girls?

<details><summary>Solution</summary><p><strong>(a) Exactly 2 girls</strong>:</p><ul><li>Select 2 girls from 4: $^4C_2 = 6$</li><li>Select 3 boys from 6: $^6C_3 = 20$</li><li>Total: $6 \times 20 = 120$</li></ul><p><strong>(b) At least 2 girls</strong>:
Cases: 2G+3B, 3G+2B, 4G+1B</p><ul><li>2G, 3B: $^4C_2 \times ^6C_3 = 6 \times 20 = 120$</li><li>3G, 2B: $^4C_3 \times ^6C_2 = 4 \times 15 = 60$</li><li>4G, 1B: $^4C_4 \times ^6C_1 = 1 \times 6 = 6$</li><li>Total: $120 + 60 + 6 = 186$</li></ul><p><strong>(c) At most 2 girls</strong>:
Cases: 0G+5B, 1G+4B, 2G+3B</p><ul><li>0G, 5B: $^4C_0 \times ^6C_5 = 1 \times 6 = 6$</li><li>1G, 4B: $^4C_1 \times ^6C_4 = 4 \times 15 = 60$</li><li>2G, 3B: $^4C_2 \times ^6C_3 = 6 \times 20 = 120$</li><li>Total: $6 + 60 + 120 = 186$</li></ul><p><strong>Alternative for (c)</strong>: Total - (At least 3 girls)
= $^{10}C_5 - (^4C_3 \times ^6C_2 + ^4C_4 \times ^6C_1)$
= $252 - (60 + 6) = 186$ ✓</p></details>

**Problem 2.2**: Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?

<details><summary>Solution</summary><p><strong>Answer</strong>: 25,200</p><p><strong>Solution</strong>:</p><p><strong>Step 1</strong>: Select 3 consonants from 7</p>$$^7C_3 = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$<p><strong>Step 2</strong>: Select 2 vowels from 4</p>$$^4C_2 = \frac{4 \times 3}{2} = 6$$<p><strong>Step 3</strong>: Arrange these 5 letters (3 consonants + 2 vowels)</p>$$5! = 120$$<p><strong>Total</strong>: $35 \times 6 \times 120 = 25,200$</p><p><strong>Key insight</strong>: We SELECT letters (combination), then ARRANGE them (permutation).</p></details>

**Problem 2.3**: In how many ways can a student select 5 courses out of 9 if 2 specific courses are compulsory?

<details><summary>Solution</summary><p><strong>Answer</strong>: 35</p><p><strong>Solution</strong>:</p><p>Since 2 courses are compulsory, they must be included.</p><p><strong>Remaining slots</strong>: $5 - 2 = 3$
<strong>Remaining courses</strong>: $9 - 2 = 7$</p><p><strong>Select 3 from 7</strong>:</p>$$^7C_3 = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$</details>

**Problem 2.4**: Prove that $^nC_0 + ^nC_1 + ^nC_2 + \ldots + ^nC_n = 2^n$.

<details><summary>Solution</summary><p><strong>Proof (Binomial Theorem)</strong>:</p><p>From binomial theorem:</p>$$(x + y)^n = \sum_{r=0}^{n} ^nC_r \cdot x^{n-r} \cdot y^r$$<p>Put $x = 1, y = 1$:</p>$$(1 + 1)^n = \sum_{r=0}^{n} ^nC_r \cdot 1^{n-r} \cdot 1^r$$<p></p>$$2^n = \sum_{r=0}^{n} ^nC_r$$<p></p>$$2^n = ^nC_0 + ^nC_1 + ^nC_2 + \ldots + ^nC_n$$<p><strong>Proof (Combinatorial)</strong>:</p><p>Consider a set with $n$ elements. Each element can either be included or excluded from a subset (2 choices per element).</p><p>Total subsets: $2^n$</p><p>Alternatively, count by size:</p><ul><li>Subsets of size 0: $^nC_0$</li><li>Subsets of size 1: $^nC_1$</li><li>&amp;mldr;</li><li>Subsets of size $n$: $^nC_n$</li></ul><p>Total: $^nC_0 + ^nC_1 + \ldots + ^nC_n = 2^n$ ✓</p></details>

---

### Level 3: Advanced (JEE Advanced)

**Problem 3.1**: Find the number of ways to select 4 cards from a deck of 52 cards such that:
(a) All are of the same suit
(b) All are of different suits
(c) Exactly 2 are of the same suit

<details><summary>Solution</summary><p><strong>(a) All of same suit</strong>:</p><ul><li>Choose 1 suit from 4: $^4C_1 = 4$</li><li>Choose 4 cards from 13 of that suit: $^{13}C_4 = 715$</li><li>Total: $4 \times 715 = 2,860$</li></ul><p><strong>(b) All of different suits</strong>:</p><ul><li>Each of the 4 cards from a different suit</li><li>Choose 1 card from hearts: $^{13}C_1 = 13$</li><li>Choose 1 card from diamonds: $^{13}C_1 = 13$</li><li>Choose 1 card from clubs: $^{13}C_1 = 13$</li><li>Choose 1 card from spades: $^{13}C_1 = 13$</li><li>Total: $13^4 = 28,561$</li></ul><p><strong>(c) Exactly 2 of same suit</strong>:
This is tricky! “Exactly 2 of same suit” is ambiguous. Let me interpret as “exactly one pair (2 cards of one suit, 2 other cards of different suits)”.</p><ul><li>Choose suit for the pair: $^4C_1 = 4$</li><li>Choose 2 cards from that suit: $^{13}C_2 = 78$</li><li>Choose 2 different suits for remaining 2 cards: $^3C_2 = 3$</li><li>Choose 1 card from first suit: $^{13}C_1 = 13$</li><li>Choose 1 card from second suit: $^{13}C_1 = 13$</li><li>Total: $4 \times 78 \times 3 \times 13 \times 13 = 158,184$</li></ul><p><strong>Alternative interpretation</strong>: “At least one pair”
This would require counting all configurations with pairs, which is complex.</p><p>For standard interpretation (exactly one pair of same suit, others different):
<strong>Answer</strong>: 158,184</p></details>

**Problem 3.2**: In how many ways can 11 books be divided between two students such that each gets at least 1 book?

<details><summary>Solution</summary><p><strong>Answer</strong>: 2,046</p><p><strong>Solution</strong>:</p><p><strong>Method 1</strong> (Complementary counting):</p><ul><li>Total ways to distribute 11 books to 2 students (each book can go to either student): $2^{11} = 2,048$</li><li>Subtract cases where one student gets all books: 2 (all to student 1 OR all to student 2)</li><li>Answer: $2,048 - 2 = 2,046$</li></ul><p><strong>Method 2</strong> (Case by case):
Student 1 can get 1, 2, 3, &amp;mldr;, or 10 books (not 0, not 11)</p><ul><li>Student 1 gets 1: $^{11}C_1 = 11$</li><li>Student 1 gets 2: $^{11}C_2 = 55$</li><li>&amp;mldr;</li><li>Student 1 gets 10: $^{11}C_{10} = 11$</li></ul><p>Total: $^{11}C_1 + ^{11}C_2 + \ldots + ^{11}C_{10} = 2^{11} - ^{11}C_0 - ^{11}C_{11} = 2,048 - 2 = 2,046$</p><p><strong>Note</strong>: If students are identical (indistinguishable), we’d divide by 2, but typically “between two students” means they’re distinguishable.</p><p><strong>Answer</strong>: 2,046</p></details>

**Problem 3.3**: Find the number of diagonals of a polygon with $n$ sides.

<details><summary>Solution</summary><p><strong>Answer</strong>: $\frac{n(n-3)}{2}$</p><p><strong>Derivation</strong>:</p><p>A diagonal connects two non-adjacent vertices.</p><p><strong>Total line segments</strong> joining any 2 vertices:</p>$$^nC_2 = \frac{n(n-1)}{2}$$<p><strong>Sides of polygon</strong>: $n$</p><p><strong>Diagonals</strong>: Total line segments - Sides</p>$$= \frac{n(n-1)}{2} - n = \frac{n(n-1) - 2n}{2} = \frac{n(n-1-2)}{2} = \frac{n(n-3)}{2}$$<p><strong>Example</strong>: Hexagon ($n=6$)</p>$$\text{Diagonals} = \frac{6 \times 3}{2} = 9$$<p><strong>Verification</strong>: From each vertex, you can draw $(n-3)$ diagonals (can’t connect to itself or 2 adjacent vertices). Total: $n(n-3)$, but this counts each diagonal twice, so divide by 2.</p>$$\boxed{\frac{n(n-3)}{2}}$$</details>

**Problem 3.4**: If $^nC_r : ^nC_{r+1} = 1:2$ and $^nC_{r+1} : ^nC_{r+2} = 2:3$, find $n$ and $r$.

<details><summary>Solution</summary><p><strong>Answer</strong>: $n = 14, r = 4$</p><p><strong>Solution</strong>:</p><p><strong>From first condition</strong>:</p>$$\frac{^nC_r}{^nC_{r+1}} = \frac{1}{2}$$<p>Using the formula:</p>$$\frac{^nC_r}{^nC_{r+1}} = \frac{n!/(r!(n-r)!)}{n!/((r+1)!(n-r-1)!)} = \frac{(r+1)!(n-r-1)!}{r!(n-r)!}$$

$$= \frac{r+1}{n-r} = \frac{1}{2}$$

$$2(r+1) = n-r$$<p></p>$$2r + 2 = n - r$$<p></p>$$3r + 2 = n \quad \ldots (1)$$<p><strong>From second condition</strong>:</p>$$\frac{^nC_{r+1}}{^nC_{r+2}} = \frac{2}{3}$$<p>Similarly:</p>$$\frac{r+2}{n-r-1} = \frac{2}{3}$$

$$3(r+2) = 2(n-r-1)$$<p></p>$$3r + 6 = 2n - 2r - 2$$<p></p>$$5r + 8 = 2n \quad \ldots (2)$$<p><strong>Solve equations (1) and (2)</strong>:</p><p>From (1): $n = 3r + 2$</p><p>Substitute in (2):</p>$$5r + 8 = 2(3r + 2)$$<p></p>$$5r + 8 = 6r + 4$$<p></p>$$4 = r$$<p>So $r = 4$</p><p>From (1): $n = 3(4) + 2 = 14$</p><p><strong>Answer</strong>: $n = 14, r = 4$</p><p><strong>Verification</strong>:</p><ul><li>$^{14}C_4 = 1,001$</li><li>$^{14}C_5 = 2,002$</li><li>$^{14}C_6 = 3,003$</li></ul><p>Check: $\frac{1001}{2002} = \frac{1}{2}$ ✓
Check: $\frac{2002}{3003} = \frac{2}{3}$ ✓</p></details>

---

## Cross-Topic Connections

### Link to Binomial Theorem

The coefficients in the expansion of $(x+y)^n$ are:

$$(x+y)^n = ^nC_0 x^n + ^nC_1 x^{n-1}y + ^nC_2 x^{n-2}y^2 + \ldots + ^nC_n y^n$$

Combinations are **binomial coefficients**!

→ See [Binomial Theorem](../../binomial-theorem/index.md)

### Link to Probability

Many probability problems use combinations:

$$P(\text{Event}) = \frac{\text{Favorable selections}}{\text{Total selections}}$$

**Example**: Probability of getting 2 aces in a 5-card hand:

$$P = \frac{^4C_2 \times ^{48}C_3}{^{52}C_5}$$

→ See [Probability](../../statistics-probability/index.md)

### Link to Permutations

Conversion formula:

$$^nP_r = ^nC_r \times r!$$

Selection → Combination
Arrangement → Permutation
Selection + Arrangement → $^nC_r \times r! = ^nP_r$

→ See [Permutations Basics](../permutations-basics/index.md)

### Link to Set Theory

$^nC_r$ counts the number of subsets of size $r$ from a set of size $n$.

Total subsets: $\sum_{r=0}^{n} ^nC_r = 2^n$ (power set)

→ See [Sets, Relations & Functions](../../sets-relations-functions/index.md)

---

## JEE Tips & Tricks

### Recognition Checklist

**Is it a combination problem?**

- Keywords: “select”, “choose”, “committee”, “team”, “group”
- “In how many ways” + no mention of order/arrangement
- “How many subsets/combinations”
- Does swapping items create the same result?

If ALL YES → Use $^nC_r$

### Time-Saving Strategies

1. **Use symmetry**: If $r > n/2$, compute $^nC_{n-r}$ instead
2. **Simplify before calculating**: Cancel factorials, don’t expand!
3. **For “at least/most”**: Use complementary counting
4. **For multiple constraints**: Break into cases, then add
5. **Memorize small values**: $^nC_2 = \frac{n(n-1)}{2}$, $^nC_3 = \frac{n(n-1)(n-2)}{6}$

### Common JEE Patterns

1. **Committee/Team selection**: With constraints (gender, subject, etc.)
2. **Card problems**: Selecting from deck with suit/rank constraints
3. **Distribution**: Dividing objects among people
4. **Geometry**: Triangles from points, diagonals of polygons
5. **“At least/at most”**: Use total - unwanted

### Geometric Counting Formulas

- **Handshakes among $n$ people**: $^nC_2 = \frac{n(n-1)}{2}$
- **Lines from $n$ points (no 3 collinear)**: $^nC_2$
- **Triangles from $n$ points (no 3 collinear)**: $^nC_3$
- **Diagonals in an $n$-gon**: $^nC_2 - n = \frac{n(n-3)}{2}$

> **⚠ Trap · Common Mistake**
>
> When some points are collinear, subtract the lines/triangles that would be formed by collinear points.

### Quick Mental Calculations

Memorize:

- $^nC_1 = n$
- $^nC_2 = \frac{n(n-1)}{2}$
- $^nC_{n-1} = n$
- $^nC_n = 1$

For small $n$:

- $^4C_2 = 6$
- $^5C_2 = 10$
- $^6C_2 = 15$
- $^6C_3 = 20$

---

## Summary

| Aspect | Permutation | Combination |
| --- | --- | --- |
| **Meaning** | Arrangement (ordered) | Selection (unordered) |
| **Formula** | $\frac{n!}{(n-r)!}$ | $\frac{n!}{r!(n-r)!}$ |
| **Keywords** | Arrange, order, rank | Select, choose, group |
| **Example** | Podium (1st, 2nd, 3rd) | Committee members |
| **ABC vs BAC** | Different | Same |

**Key Formulas**:

$$\boxed{^nC_r = \frac{n!}{r!(n-r)!}} \quad \boxed{^nC_r = ^nC_{n-r}} \quad \boxed{^nP_r = ^nC_r \times r!}$$

**Key Insight**: Combinations remove order. When order doesn’t matter, divide by $r!$!

---

**Next Steps**:

- Master [Combinations Applications](../combinations-applications/index.md) for distribution and selection with constraints
- Learn [Derangements](../derangements/index.md) for advanced permutation problems
- Apply to [Probability](../../statistics-probability/index.md) and [Binomial Theorem](../../binomial-theorem/index.md)

---

*Last updated: September 18, 2025*

From TestGuru · our mock-test platform

## You've read Combinations Basics - Selections and nCr Formula.You've read this topic. Find out what you actually got.

A free JEE Main mock with this chapter in it, and a report that shows which sub-topics cost you marks.

[Take a free JEE Main mock →](https://app.testguru.co/signup?tg_chapter=permutations-combinations&tg_exam=jee-main&tg_page=%2Fmathematics%2Fpermutations-combinations%2Fcombinations-basics%2F&tg_subject=mathematics&utm_campaign=notes-jee-main-free-test&utm_content=article-end&utm_medium=referral&utm_source=jeenotes)
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
function factorialC(e){if(e<=1)return 1;let t=1;for(let n=2;n<=e;n++)t*=n;return t}function calculateComb(){const t=parseInt(document.getElementById("combN").value)||10,e=parseInt(document.getElementById("combR").value)||3;if(e>t){document.getElementById("combResult").innerHTML="❌ Error: r cannot be greater than n!",document.getElementById("combExample").innerHTML="";return}const s=factorialC(t)/(factorialC(e)*factorialC(t-e)),o=factorialC(t)/factorialC(t-e);document.getElementById("combResult").innerHTML=`
    <strong><sup>${t}</sup>C<sub>${e}</sub> = ${s.toLocaleString()}</strong><br><br>
    Formula: ${t}! / (${e}! × ${t-e}!)  = ${factorialC(t).toLocaleString()} / (${factorialC(e).toLocaleString()} × ${factorialC(t-e).toLocaleString()})<br>
    Compare with <sup>${t}</sup>P<sub>${e}</sub> = ${o.toLocaleString()}<br>
    Ratio: nPr/nCr = ${e}! = ${factorialC(e)}
  `;let n="";t===10&&e===3?n="Example: Selecting 3 students from 10 for a team = 120 ways":t===52&&e===5?n="Example: 5-card poker hand from 52 cards = 2,598,960 hands":n=`Example: Choosing ${e} items from ${t} objects (order doesn't matter)`,document.getElementById("combExample").innerHTML=n}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",calculateComb):calculateComb()
```


### inline-script-17

```js
(function(){var t,e=document.getElementById("disqus-load");if(!e)return;t=!1,e.addEventListener("click",function(){if(t)return;t=!0,e.setAttribute("disabled","disabled"),e.textContent="Loading comments…",window.disqus_config=function(){this.page.url="https://jeenotes.in/mathematics/permutations-combinations/combinations-basics/",this.page.identifier="/mathematics/permutations-combinations/combinations-basics/"};var s=document,n=s.createElement("script");n.src="https://https-jeenotes-in.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),n.onload=function(){e.style.display="none"},n.onerror=function(){t=!1,e.removeAttribute("disabled"),e.textContent="Could not load comments. Tap to retry"},(s.head||s.body).appendChild(n)})})()
```


### inline-script-18

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


### interactive-widget-1

```html
<div class="animation-wrapper" data-animation="probabilityTree" id="anim-probabilityTree-1795396422044374166"><div class="animation-header"><button aria-label="Toggle fullscreen" class="anim-fullscreen-btn" onclick='JEEAnimations.toggleFullscreen("anim-probabilityTree-1795396422044374166")' title="Fullscreen (F)">
<svg class="fullscreen-icon-expand" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<svg class="fullscreen-icon-collapse" fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="18"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" x2="21" y1="10" y2="3"></line><line x1="3" x2="10" y1="21" y2="14"></line></svg>
<span class="fullscreen-text">Fullscreen</span></button></div><div class="animation-content"><noscript><div class="callout callout-warning"><div class="callout-title">JavaScript Required</div><p>This interactive animation requires JavaScript to be enabled.</p></div></noscript></div></div>
```


---

_Source: [https://jeenotes.in/mathematics/permutations-combinations/combinations-basics/](https://jeenotes.in/mathematics/permutations-combinations/combinations-basics/) · raw HTML: `offline/mathematics/permutations-combinations/combinations-basics/index.html`_
