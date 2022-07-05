var a = "abcdefghijklmnopqrstuvwxyz";


console.time('Array.from().map');
Array.from(a).map(v=>v.toUpperCase());
console.timeEnd('Array.from().map');

console.time('Array.prototype.map.call');
Array.prototype.map.call(a,v=>v.toUpperCase());
console.timeEnd('Array.prototype.map.call');