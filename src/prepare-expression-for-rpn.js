import { OPERATION, OPERATIONS, SPACE, POINT } from './constants.js';

const prepareExpressionForRPN = (expressionArray) => {
  const { expression } = expressionArray.reduce(
    ({ expression, lastChar }, char) => {
      const isOperation = OPERATIONS.includes(char);
      const isLastCharValueOrPoint =
        !OPERATIONS.includes(lastChar) || lastChar === POINT;
      const isOperationRepeated = OPERATIONS.includes(lastChar) && isOperation;

      if (char === SPACE || isOperationRepeated) {
        return { expression, lastChar };
      }

      if (!isOperation && lastChar === OPERATION.MINUS && !expression.length) {
        return { expression: [`-${char}`, ...expression], lastChar: char };
      }

      if (isOperation && !expression.length) {
        return { expression, lastChar: char };
      }

      if (!isOperation && expression.length && isLastCharValueOrPoint) {
        const [lastValue, ...remainedExpression] = expression;
        return {
          expression: [`${lastValue}${char}`, ...remainedExpression],
          lastChar: char,
        };
      }

      return { expression: [char, ...expression], lastChar: char };
    },
    { expression: [], lastChar: '' }
  );

  const preparedExpression = OPERATIONS.includes(expression[0])
    ? expression.slice(1)
    : expression;

  return preparedExpression
    .map((value) => (!OPERATIONS.includes(value) ? Number(value) : value))
    .reverse();
};

export default prepareExpressionForRPN;
