import mapExpressionToRPN from './map-expression-to-rpn.js';
import prepareExpressionForRPN from './prepare-expression-for-rpn.js';
import mapRPNToValue from './map-rpn-to-value.js';

const calcString = (calculation) => {
  const chars = calculation.split('');

  return mapRPNToValue(mapExpressionToRPN(prepareExpressionForRPN(chars)));
};

export default calcString;
