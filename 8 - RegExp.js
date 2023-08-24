var reg = new RegExp(/^[0-9]*$/);

console.time('declare');
reg.test(1)
console.timeEnd('declare');




console.time('new RegExp');
(new RegExp(/^[0-9]*$/)).test(1)
console.timeEnd('new RegExp');