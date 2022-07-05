async function asyncFor() {
  for (const x of [1, 2, 3]) {
      await new Promise(resolve => setTimeout(() => resolve(x > 0), 500));
  }
  
}

async function asyncPromiseAll() {
  await Promise.all([1, 2, 3].map(x =>
      new Promise(resolve => setTimeout(() => resolve(x > 0), 500))
  ));
}

console.time('asyncFor');
asyncFor()
console.timeEnd('asyncFor');


console.time('asyncPromiseAll');
asyncPromiseAll()
console.timeEnd('asyncPromiseAll');

