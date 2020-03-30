'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const reducer = (carry, value) => (carry << 8) + parseInt(value);
  return ip.split('.').reduce(reducer, 0);
};

module.exports = { ipToInt };
