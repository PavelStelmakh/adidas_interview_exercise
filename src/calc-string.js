const OPERATION = {
  PLUS: '+',
  MINUS: '-',
  MUL: '*',
  DIV: '/',
};
const OPERATION_PROCCES = {
  [OPERATION.PLUS]: (a, b) => a + b,
  [OPERATION.MINUS]: (a, b) => a - b,
  [OPERATION.MUL]: (a, b) => a * b,
  [OPERATION.DIV]: (a, b) => a / b,
};
const HIGH_PRIORITY = [OPERATION.PLUS, OPERATION.MINUS];
const LOW_PRIORITY = [
  OPERATION.MUL,
  OPERATION.DIV,
  OPERATION.MINUS,
  OPERATION.PLUS,
];
const OPERATIONS = Object.values(OPERATION);
const SPACE = ' ';
const POINT = '.';

const getLast = (array) => array[array.length - 1];

const mapToRPN = (chars) => {
  const { operations, result } = chars.reduce(
    ({ operations, result }, char) => {
      const isOperation = OPERATIONS.includes(char);

      if (isOperation) {
        if (
          HIGH_PRIORITY.includes(char) &&
          LOW_PRIORITY.includes(getLast(operations))
        ) {
          const poppedOperatinos = [];
          operations.reverse().reduce((isStackValid, op) => {
            if (isStackValid) {
              return isStackValid;
            }

            const hasLowOperation = LOW_PRIORITY.includes(op);
            if (hasLowOperation) {
              poppedOperatinos.push(op);
            }

            return !hasLowOperation;
          }, false);
          const filteredOperations = operations.slice(
            0,
            operations.length - poppedOperatinos.length
          );

          return {
            operations: [...filteredOperations, char],
            result: [...result, ...poppedOperatinos],
          };
        }

        return { operations: [...operations, char], result };
      }

      return { operations, result: [...result, char] };
    },
    {
      operations: [],
      result: [],
    }
  );

  let normResult = [...result];

  if (operations.length) {
    normResult = [...normResult, ...operations.reverse()];
  }

  return normResult;
};

const prepareToRPN = expressionArray => {
  const { result } = expressionArray.reduce(
    ({ result, lastChar }, char) => {
      const isOperation = OPERATIONS.includes(char);
      const isLastCharValueOrPoint = !OPERATIONS.includes(lastChar) || lastChar === POINT;
      const isOperationRepeated = OPERATIONS.includes(lastChar) && isOperation;

      if (char === SPACE || isOperationRepeated) {
        return { result, lastChar };
      }

      if (!isOperation && lastChar === OPERATION.MINUS && !result.length) {
        return { result: [...result, `-${char}`], lastChar: char };
      }

      if (isOperation && !result.length) {
        return { result, lastChar: char };
      }

      if (
        !isOperation &&
        result.length &&
        isLastCharValueOrPoint
      ) {
        const [lastValue, ...remainedResult] = result.reverse();
        return {
          result: [
            ...remainedResult.reverse(),
            `${lastValue}${char}`,
          ],
          lastChar: char,
        };
      }

      return { result: [...result, char], lastChar: char };
    },
    { result: [], lastChar: '' }
  );

  const lastOperation = getLast(result);
  const preparedResult = OPERATIONS.includes(lastOperation)
    ? result.slice(0, result.length - 1)
    : result;

  return preparedResult.map((value) =>
    !OPERATIONS.includes(value) ? Number(value) : value
  );
};

const mapRPNToValue = (expressionArray) =>
  expressionArray.reduce((values, char) => {
    if (OPERATIONS.includes(char)) {
      const [first, second, ...remainStack] = values;
      const newResult = OPERATION_PROCCES[char](second, first);

      return [...remainStack, newResult];
    }

    return [char, ...values];
  }, [])[0] || 0;

const calcString = (calculation) => {
  const chars = calculation.split('');

  return mapRPNToValue(mapToRPN(prepareToRPN(chars)));
//   console.log(mapRPNToValue(mapToRPN(prepareToRPN(chars))));
};

calcString('1 + 1');

calcString('1 - 1');

calcString('2+ 2');

calcString('2+ 5-3');

calcString('2+ 5-3 -6');
calcString('1-3-6+2-1');

calcString('1');

calcString('+');

calcString('2 * 2');

calcString('2 * 2.4');
calcString('-1*2');

calcString('21 + 1');

calcString('0 - 1');

calcString('0 - 1 - ');

calcString('1 + 1 * 2');

calcString('1 + 1 / 2');

calcString('1 + + 1');

calcString('1 + * 1');

calcString('+ * 1 + 1 / 2');
