# adidas_interview_exercise
## task

* Takes a string with a calculation (f.i. '3 + 4 + 4 - 5') and

* outputs the calculation result as an integer.

* Possible operations: +, -, /, *

* Notes:

    - eval() is forbidden.

    - Setup a test tool to run the test suite.

* @param {string} calculation – Calculation as a string.

* @returns {number} Calculation result.

```javascript
function calcString(calculation) {

  return 0;

}

expect(calcString('1 + 1'), 2);

expect(calcString('1 - 1'), 0);

expect(calcString('2+ 2'), 4);

expect(calcString('2+ 5-3'), 4);

expect(calcString('2+ 5-3 -6'), -2);

expect(calcString('1'), 1);

expect(calcString('+'), 0);

expect(calcString('2 * 2'), 4);

expect(calcString('2 * 2.4'), 4.8);

expect(calcString('21 + 1'), 22);

expect(calcString('0 - 1'), -1);

expect(calcString('0 - 1 - '), -1);

expect(calcString('1 + 1 * 2'), 3);

expect(calcString('1 + 1 / 2'), 1.5);

expect(calcString('1 + + 1'), 2);

expect(calcString('1 + * 1'), 2);

expect(calcString('+ * 1 + 1 / 2'), 1.5);
```
