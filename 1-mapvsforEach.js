var array = [
  obj = {
    'a': null,
    'b': 1,
    'c': null,
    'd': 1,
    'e': 1,
    'f': 1,
    'g': null,
  }
]

console.time('forEach');
array.forEach((obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) delete obj[key]
    })
})
console.timeEnd('forEach');

console.time('map');
array.forEach((obj) => {
  Object.keys(obj).map(key => key !== null)
})
console.timeEnd('map');
