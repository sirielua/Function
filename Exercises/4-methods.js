'use strict';

const methods = iface => {
  const funcs = [];
  for (const prop in iface) {
    const value = iface[prop];
    if (typeof value === 'function') {
      funcs.push([prop, value.length]);
    }
  }
  return funcs;
};

/**
 * При использовании "fn instanceof Function" вместо "typeof fn === 'function'"
 * функция валит тест... ("value instanceof Function" возвращает false).
 * Хотя обе функции при запуске через консоль работают одинаково.
 * Почему так происходит?
 */
const methods2 = iface => {
  const funcs = [];
  for (const prop in iface) {
    const value = iface[prop];
    if (value instanceof Function) {
      funcs.push([prop, value.length]);
    }
  }
  return funcs;
};

const obj = {
  m1: x => [x],
  m2(x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

const res1 = methods(obj);
const res2 = methods2(obj);
console.log(res1);
console.log(res2);
console.log(JSON.stringify(res1) ===  JSON.stringify(res2));

module.exports = { methods };
