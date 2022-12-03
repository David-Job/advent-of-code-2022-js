var { readFileSync } = require('node:fs');

// "data" is an array of Strings
var data = 
  readFileSync('./input.txt')
  .toString()
  .split('\n');

var topThreeTotals = [0, 0, 0];
var currentCount = 0;

for (var calorieCount of data) {
  if (calorieCount) {
    currentCount += Number(calorieCount);
  } else {
    if (currentCount > topThreeTotals[0]) {
      topThreeTotals.splice(0, 0, currentCount);
      topThreeTotals.pop();
    } else if (currentCount > topThreeTotals[1]) {
      topThreeTotals.splice(1, 0, currentCount);
      topThreeTotals.pop();
    } else if (currentCount > topThreeTotals[2]) {
      topThreeTotals[2] = currentCount;
    }
    currentCount = 0;
  }
}

const topThreeSum = topThreeTotals[0] + topThreeTotals[1] + topThreeTotals[2];

console.log(`Highest total is ${topThreeTotals[0]}`);
console.log(`Sum of top three totals is ${topThreeSum}`);
