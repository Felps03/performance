const _ = require('lodash');

const a = [{a:1},{a:1},{a:1},{a:2},{a:2},{a:3}]

console.time('uniqBy');
const uniques = _.uniqBy(a, 'a')
console.timeEnd('uniqBy');



console.time('array');
const uniques3 = [];
const set = [];
for (const e of a) {
  if(set.indexOf(e.a) === -1) {
    uniques3.push(e);
    set.push(e.a);
  }
}
console.timeEnd('array');
