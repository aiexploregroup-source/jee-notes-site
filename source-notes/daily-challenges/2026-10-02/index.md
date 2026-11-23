---
title: "Daily Challenge — 2 October 2026"
source: "https://jeenotes.in/daily-challenges/2026-10-02/"
description: "Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan ."
html: "../../../offline/daily-challenges/2026-10-02/index.html"
extracted: "2026-11-23"
---

> Week 9 of Mission JEE 2027 · Gas Giants — Kinetic theory meets chemical kinetics — rates, speeds, distributions — plus matrices to keep algebra honest. See the full plan .

That Swiggy ETA that keeps recalculating as your order clears the kitchen, hits traffic, then suddenly jumps closer — that’s a rate law responding to changing conditions in real time, exactly what chemical kinetics is built to describe. Nothing about delivery time is constant, and neither is a reaction rate.

Meanwhile the reason your tiffin box hisses when you crack it open on a hot afternoon is kinetic theory of gases doing its job — trapped air molecules banging around faster than when you packed it in the cool morning. And splitting a mess bill three ways with unequal shares is just a matrix equation wearing a UPI screenshot.

Rate, pressure, ratios — today’s three questions run on all of it. Order in.

Physics

## Kinetic Theory of Gases

JEE Main 2026
6 Apr, Shift 1

Two closed vessels of same volume are joined through a narrow tube and both vessels are filled with air of pressure 90 kPa and temperature 400 K. Keeping the temperature of one vessel constant at 400 K the second vessel temperature is raised to 500 K. The final pressure in the vessels is ________ kPa.

- **A.** 100

- **B.** 120

- **C.** 90

- **D.** 105

**Solution / Answer**

Let each vessel have volume $V$. Initially both are at $P_0 = 90\,\text{kPa}$ and $T = 400\,\text{K}$, so the total number of moles is:

$$n = \frac{P_0 V}{R (400)} + \frac{P_0 V}{R (400)} = \frac{2 P_0 V}{400\,R}$$

The vessels stay connected, so after heating they share a common final pressure $P$. Vessel 1 remains at 400 K and vessel 2 is raised to 500 K:

$$n = \frac{P V}{400\,R} + \frac{P V}{500\,R}$$

Since the total moles are conserved, equate the two expressions and cancel $V/R$:

$$\frac{2 P_0}{400} = \frac{P}{400} + \frac{P}{500}$$

$$\frac{2(90)}{400} = P\left(\frac{1}{400} + \frac{1}{500}\right) = P\left(\frac{9}{2000}\right)$$

$$0.45 = P \times \frac{9}{2000} \quad\Rightarrow\quad P = 0.45 \times \frac{2000}{9} = 100\,\text{kPa}$$

**Answer:** A (100)

**Correct option:** A

Chemistry
Numerical

## Chemical Kinetics

JEE Main 2026
5 Apr, Shift 1

If the half life of a first order reaction is 6.93 minutes then the time required for completion of 99% of the reaction will be ________ minutes. (Given : $\log 2 = 0.3010$)

Numerical answer — work it out, then check the solution.

**Solution / Answer**

Rate constant from half-life:

$$k = \frac{0.693}{t_{1/2}} = \frac{0.693}{6.93} = 0.1\ \text{min}^{-1}$$

For 99% completion, $[A]/[A]_0 = 0.01$, i.e. $[A]_0/[A] = 100$:

$$t = \frac{2.303}{k}\log\frac{[A]_0}{[A]} = \frac{2.303}{0.1}\log 100 = \frac{2.303}{0.1}\times 2$$

$$t = 23.03 \times 2 = 46.06 \approx 46\ \text{min}$$

**Answer:** 46

Mathematics

## Matrices and Determinants

JEE Main 2026
Apr 5, Shift 1

Let $A$ be a $3 \times 3$ matrix such that $A^T \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 5 \\ 2 \\ 2 \end{bmatrix}$, $A^T \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \\ 1 \end{bmatrix}$, $A \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \\ 4 \end{bmatrix}$ and $A \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 1 \end{bmatrix}$. If $\det(A) = 1$, then $\det(\operatorname{adj}(A^2 + A))$ is equal to:

- **A.** $16$

- **B.** $25$

- **C.** $49$

- **D.** $64$

**Solution / Answer**

Recover $A$ column/row by column. Subtracting the given products:

$$A e_1 = A\begin{bmatrix}1\\0\\1\end{bmatrix} - A\begin{bmatrix}0\\0\\1\end{bmatrix} = \begin{bmatrix}3\\4\\4\end{bmatrix} - \begin{bmatrix}1\\3\\1\end{bmatrix} = \begin{bmatrix}2\\1\\3\end{bmatrix} \Rightarrow \text{column 1}.$$

$$A e_3 = A\begin{bmatrix}0\\0\\1\end{bmatrix} = \begin{bmatrix}1\\3\\1\end{bmatrix} \Rightarrow \text{column 3}.$$

From the transpose relations, $A^T e_3$ is the third row of $A$, and $A^T e_1 = A^T(e_1+e_3) - A^T e_3 = \begin{bmatrix}5\\2\\2\end{bmatrix} - \begin{bmatrix}3\\1\\1\end{bmatrix} = \begin{bmatrix}2\\1\\1\end{bmatrix}$ is the first row of $A$. So

$$\text{row 1} = (2,1,1), \qquad \text{row 3} = (3,1,1).$$

Combining, $A = \begin{bmatrix} 2 & 1 & 1 \\ 1 & a_{22} & 3 \\ 3 & 1 & 1 \end{bmatrix}$. Impose $\det A = 1$:

$$\det A = -a_{22} + 3 = 1 \Rightarrow a_{22} = 2, \quad A = \begin{bmatrix} 2 & 1 & 1 \\ 1 & 2 & 3 \\ 3 & 1 & 1 \end{bmatrix}.$$

Now $A^2 + A = A(A + I)$, so $\det(A^2 + A) = \det A \cdot \det(A + I)$. With

$$A + I = \begin{bmatrix} 3 & 1 & 1 \\ 1 & 3 & 3 \\ 3 & 1 & 2 \end{bmatrix}, \quad \det(A+I) = 3(6-3) - 1(2-9) + 1(1-9) = 9 + 7 - 8 = 8.$$

So $\det(A^2 + A) = 1 \cdot 8 = 8$, and for a $3\times3$ matrix $\det(\operatorname{adj}M) = (\det M)^2$:

$$\det(\operatorname{adj}(A^2+A)) = 8^2 = 64.$$

**Answer:** D ($64$)

**Correct option:** D

---

_Source: [https://jeenotes.in/daily-challenges/2026-10-02/](https://jeenotes.in/daily-challenges/2026-10-02/) · raw HTML: `offline/daily-challenges/2026-10-02/index.html`_
