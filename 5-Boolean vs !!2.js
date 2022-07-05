var newArr = ['1', '2', '3', '4'];

console.time('!!');
!!newArr.length
console.timeEnd('!!');

console.time('length');
newArr.length > 0
console.timeEnd('length');