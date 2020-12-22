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
const LOW_PRIORITY = [OPERATION.PLUS, OPERATION.MINUS];
const OPERATIONS = Object.values(OPERATION);
const SPACE = ' ';
const POINT = '.';

module.exports = {
  OPERATION,
  OPERATION_PROCCES,
  LOW_PRIORITY,
  OPERATIONS,
  SPACE,
  POINT,
};
