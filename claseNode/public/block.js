const fs = require('fs');

console.time('syn');
const data = fs.readFileSync('/Users/juani/Downloads/cont.pptx');
console.timeEnd('syn');

console.time('callback');
console.time('asyn');
fs.readFile('/Users/gustavogretter/Downloads/cont.pptx', (err, data) => {
  console.timeLog('callback');
});
console.timeEnd('asyn');
