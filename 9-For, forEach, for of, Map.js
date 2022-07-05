var arr = [];
for (let i = 0; i < 100000; i++) {
	arr[i] = i;
}
  
function someFn(i) {
	return i * 3 * 8;
}

console.time('for');
for (var x = 0; x < arr.length; x++) {
	someFn(arr[x]);
}
console.timeEnd('for');

console.time('forEach');
arr.forEach(function (item){
	someFn(item);
})
console.timeEnd('forEach');

console.time('For of');
for(let item of arr) {
	someFn(item)
}
console.timeEnd('For of');

console.time('map');
arr.map((item) => someFn(item))
console.timeEnd('map');