var { readFileSync } = require('node:fs');

var data = 
  readFileSync('./input.txt')
  .toString()
  .trim();

function differentChars(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.lastIndexOf(str[i]) != i) return false;
  }
  return true;
}

function firstGroupOfUniqueChars(quantity) {
  for (let i = quantity; i < data.length; i++) {
    let charQuad = data.slice(i - quantity, i);
    if (differentChars(charQuad)) return i;
  }
  return -1;
}

console.log(`The first start-of-packet marker is detected after processing ${firstGroupOfUniqueChars(4)} characters.`);
console.log(`The first start-of-message marker is detected after processing ${firstGroupOfUniqueChars(14)} characters.`);

