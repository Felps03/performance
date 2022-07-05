let num = 500;
let nums = [];
let nums2 = [];
let nums3 = [];

console.time('String()');
for(let i = 0; i < 100; ++i) {
  nums.push(String(num));
}
console.timeEnd('String()');

console.time('.toString()');
for(let i = 0; i < 100; ++i) {
  nums2.push(num.toString());
}
console.timeEnd('.toString()');

console.time('${num}');
for(let i = 0; i < 100; ++i) {
  nums3.push(`${num}`);
}
console.timeEnd('${num}');