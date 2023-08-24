var timestamp = null;

console.time('Date.now()');
timestamp = Date.now();
console.timeEnd('Date.now()');

console.time('new Date().getTime();');
timestamp = new Date().getTime();
console.timeEnd('new Date().getTime();');

console.time('+ new Date');
+ new Date
console.timeEnd('+ new Date');
// console.log(+ new Date)