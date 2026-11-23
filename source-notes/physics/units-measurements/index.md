---
title: "Units and Measurements"
source: "https://jeenotes.in/physics/units-measurements/"
html: "../../../offline/physics/units-measurements/index.html"
extracted: "2026-11-23"
---

# Units and Measurements

Master SI units, dimensional analysis, significant figures, and error analysis for JEE Physics.

:   5

Topics

:   44

Min read

## Chapter Overview

**Units and Measurements** is the foundation chapter of JEE Physics. Every numerical answer you write in the exam rests on the ideas here: expressing quantities in SI units, checking equations with dimensional analysis, reporting results with the right number of significant figures, and estimating how errors propagate through a calculation.

This chapter is one of the best return-on-investment topics in JEE Main — the questions are formula-driven and quick to solve once you know the rules. Error propagation and dimensional analysis appear almost every year, usually as 1-2 direct questions that can be finished in under a minute.

## Topics in This Chapter

| Topic | Description | Time |
| --- | --- | --- |
| [SI Units](si-units/index.md) | The seven base units, derived units, prefixes, and unit conversion | 4 min |
| [Dimensional Formulas](dimensions/index.md) | Writing dimensions of physical quantities, comprehensive formula table | 4 min |
| [Dimensional Analysis](dimensional-analysis/index.md) | Checking equations, deriving relations, converting units — and the limitations | 5 min |
| [Errors in Measurement](errors/index.md) | Systematic vs random errors, error propagation rules, least count | 5 min |
| [Significant Figures](significant-figures/index.md) | Counting rules, rounding, and sig figs in calculations | 4 min |

## Revision Resources

- [Formula Sheet](formula-sheet/index.md) — every formula from this chapter on one page
- [Previous Year Questions](previous-year-questions/index.md) — JEE Main PYQs with solutions

## Key Ideas at a Glance

### Errors and Significant Figures

Every measurement carries some uncertainty. **Systematic errors** push readings consistently in one direction (a zero error in a screw gauge, a miscalibrated scale) and are removed by correction, not by repetition. **Random errors** scatter readings on both sides of the true value and are reduced by taking the mean of many readings. The **absolute error** of a reading is $|a_i - \bar{a}|$; the mean absolute error divided by the mean value gives the **relative (fractional) error**, and multiplying by 100 gives the percentage error.

When quantities combine, errors propagate by simple rules:

- Sum or difference, $Z = A \pm B$: absolute errors add, $\Delta Z = \Delta A + \Delta B$.
- Product or quotient, $Z = AB$ or $Z = A/B$: the relative (percentage) errors of $A$ and $B$ add in both cases, $\dfrac{\Delta Z}{Z} = \dfrac{\Delta A}{A} + \dfrac{\Delta B}{B}$; the errors never subtract, even for a quotient.
- Power, $Z = A^n$: the relative error is multiplied by the power, $\dfrac{\Delta Z}{Z} = |n|\dfrac{\Delta A}{A}$.

Significant figures report how precise a value is. All non-zero digits are significant; zeros between non-zero digits are significant; leading zeros (as in 0.0045) are not; trailing zeros in a number with a decimal point are significant (as in 470.0), but trailing zeros in a number without a decimal point are not (as in 4700). In multiplication and division, keep as many significant figures as the least precise factor. In addition and subtraction, keep as many decimal places as the term with the fewest decimal places.

### Dimensional Analysis

Every physical quantity can be written in terms of the base dimensions, such as $[M]$, $[L]$ and $[T]$. Because only like quantities can be added or equated, each term of a correct equation must have the same dimensions (the **principle of homogeneity**). This lets you check an equation, convert a quantity from one system of units to another, and guess the form of a relation between quantities. Its limits matter too: it cannot fix dimensionless constants such as $2\pi$ or $\tfrac{1}{2}$, it cannot handle relations involving sums of different terms, trigonometric or exponential functions, and a dimensionally correct equation is not necessarily physically correct.

### Common JEE Traps

- In power-law error questions, multiply the relative error by the **magnitude** of the power. For example, a quantity under a square root contributes half of its percentage error, and a quantity in the denominator (negative power) still adds its percentage error; it is never subtracted.
- In intermediate steps, keep one digit more than the required significant figures, and round off only the final answer to the correct significant figures.
- Arguments of $\sin$, $\cos$, $\log$ and $e^x$ must be dimensionless, which quickly fixes the dimensions of constants inside them.
- Quantities with the same dimensions can be physically different: work and torque are both $[ML^2T^{-2}]$.
- Correct for zero error with its sign: corrected reading = observed reading − (zero error). A negative zero error therefore gets added to the observed reading.

## How to Study This Chapter

1. Start with [SI Units](si-units/index.md) to lock in the base units and prefixes.
2. Memorize the dimensional formula table in [Dimensional Formulas](dimensions/index.md) — it feeds directly into [Dimensional Analysis](dimensional-analysis/index.md) questions.
3. Practice the error propagation rules in [Errors in Measurement](errors/index.md) until the power rule is automatic — it is the single most-asked idea from this chapter.
4. Finish with [Significant Figures](significant-figures/index.md), then test yourself on the [Previous Year Questions](previous-year-questions/index.md).

## Related Chapters

- [Kinematics](../kinematics/index.md) — motion analysis using these units
- [Newton’s Laws](../laws-of-motion/index.md) — force and dynamics
- [Experimental Skills](../experimental-skills/index.md) — vernier caliper, screw gauge, and lab measurements

1. [01
   SI Units - International System of UnitsStart here
   Master SI base units and derived units for JEE Physics measurements
   7 min](https://jeenotes.in/physics/units-measurements/si-units/)
2. [02
   Dimensional Formulas
   Master dimensional formulas of physical quantities for JEE Physics
   7 min](https://jeenotes.in/physics/units-measurements/dimensions/)
3. [03
   Dimensional Analysis
   Master dimensional analysis for checking equations and deriving formulas in JEE Physics
   9 min](https://jeenotes.in/physics/units-measurements/dimensional-analysis/)
4. [04
   Errors in Measurement
   Master types of errors and error propagation for JEE Physics experiments
   11 min](https://jeenotes.in/physics/units-measurements/errors/)
5. [05
   Significant Figures
   Master rules of significant figures for precision in JEE Physics calculations
   10 min](https://jeenotes.in/physics/units-measurements/significant-figures/)
6. [→
   Formula sheet
   Reference
   Every formula in this chapter on one page.
   7 min](https://jeenotes.in/physics/units-measurements/formula-sheet/)
7. [→
   Chapter PYQs
   Practice
   Every past question from this chapter, with worked answers.
   6 min](https://jeenotes.in/physics/units-measurements/previous-year-questions/)

[From TestGuru
Test this chapter, timed, free.
Start →](https://app.testguru.co/signup?tg_exam=jee-main&tg_page=%2Fphysics%2Funits-measurements%2F&tg_subject=physics&utm_campaign=notes-jee-main-free-test&utm_content=sidebar&utm_medium=referral&utm_source=jeenotes)

Advertisement

Advertisement

---

## Extracted page code (interactive scripts & widgets)


### inline-script-12

```js
(function(){var t,e=document.currentScript.previousElementSibling;function n(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}if(!window.ResizeObserver||e.clientWidth>0){n();return}t=new ResizeObserver(function(){e.clientWidth>0&&(t.disconnect(),n())}),t.observe(e)})()
```


---

_Source: [https://jeenotes.in/physics/units-measurements/](https://jeenotes.in/physics/units-measurements/) · raw HTML: `offline/physics/units-measurements/index.html`_
