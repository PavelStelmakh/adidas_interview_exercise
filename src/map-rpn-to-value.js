import { OPERATION_PROCCES, OPERATIONS } from './constants';

const mapRPNToValue = (expressionArray) =>
  expressionArray.reduce((values, char) => {
    if (OPERATIONS.includes(char)) {
      const [first, second, ...remainedValues] = values;
      const newResult = OPERATION_PROCCES[char](second, first);

      return [newResult, ...remainedValues];
    }

    return [char, ...values];
  }, [])[0] || 0;

export default mapRPNToValue;
