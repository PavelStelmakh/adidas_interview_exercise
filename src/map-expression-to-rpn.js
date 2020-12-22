const { LOW_PRIORITY, OPERATIONS } = require('./constants.js');

const mapExpressionToRPN = (chars) => {
  const { operations, expression } = chars.reduce(
    ({ operations, expression }, char) => {
      if (OPERATIONS.includes(char)) {
        if (LOW_PRIORITY.includes(char)) {
          return {
            operations: [char],
            expression: [...expression, ...operations],
          };
        }

        return { operations: [char, ...operations], expression };
      }

      return { operations, expression: [...expression, char] };
    },
    {
      operations: [],
      expression: [],
    }
  );

  return [...expression, ...operations];
};

module.exports = mapExpressionToRPN;
