'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const max = possible.length;

  for (let i = 0; i < length; i++) {
    const p = Math.floor(Math.random() * max);
    key += possible.charAt(p);
  }

  return key;
};

module.exports = { generateKey };
