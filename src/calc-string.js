const mapExpressionToRPN = require('./map-expression-to-rpn.js');
const prepareExpressionForRPN = require('./prepare-expression-for-rpn.js');
const mapRPNToValue = require('./map-rpn-to-value.js');

const calcString = (calculation) => {
  const chars = calculation.split('');

  return mapRPNToValue(mapExpressionToRPN(prepareExpressionForRPN(chars)));
};

module.exports = calcString;
