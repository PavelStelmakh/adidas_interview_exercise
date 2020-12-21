import mapExpressionToRPN from './map-expression-to-rpn';
import prepareExpressionForRPN from './prepare-expression-for-rpn';
import mapRPNToValue from './map-rpn-to-value';

const calcString = (calculation) => {
  const chars = calculation.split('');

  return mapRPNToValue(mapExpressionToRPN(prepareExpressionForRPN(chars)));
};

export default calcString;

calcString('1 + 1');

calcString('1 - 1');

calcString('2+ 2');

calcString('2+ 5-3');

calcString('2+ 5-3 -6');
calcString('1-3-6+2-1');
calcString('1+3+6+2+1');

calcString('1');

calcString('+');

calcString('2 * 2');
calcString('1+2*2*2+1');

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
