const _ = require('lodash');

var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    a: 1
  },
  g: {
    a: {
      c: 1
    }
  }
}

console.time('lodash');
_.isEmpty(obj)
console.timeEnd('lodash');

console.time('native');
obj &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
console.timeEnd('native');


console.time('native-es6');
(obj && obj === Object(obj) && Object.keys(obj).length !== 0)
console.timeEnd('native-es6');