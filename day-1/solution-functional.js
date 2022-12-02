var { readFileSync } = require('node:fs');

// "data" is an array of Strings
var data = 
  readFileSync('./input.txt')
  .toString()
  .split('\n\n'); // Remove empty lines

var calorieTotals = data.map(function (elf) {
  return elf
    .split('\n')
    .reduce((sum, count) => sum + Number(count), 0);
});

var topThreeTotals = calorieTotals
  .sort((a, b) => b - a)
  .splice(0, 3);

console.log(`Highest total is ${topThreeTotals[0]}`);
console.log(`Sum of top three totals is ${topThreeTotals[0] + topThreeTotals[1] + topThreeTotals[2]}`);
