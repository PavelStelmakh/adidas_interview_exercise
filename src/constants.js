export const OPERATION = {
  PLUS: '+',
  MINUS: '-',
  MUL: '*',
  DIV: '/',
};
export const OPERATION_PROCCES = {
  [OPERATION.PLUS]: (a, b) => a + b,
  [OPERATION.MINUS]: (a, b) => a - b,
  [OPERATION.MUL]: (a, b) => a * b,
  [OPERATION.DIV]: (a, b) => a / b,
};
export const LOW_PRIORITY = [OPERATION.PLUS, OPERATION.MINUS];
export const OPERATIONS = Object.values(OPERATION);
export const SPACE = ' ';
export const POINT = '.';
