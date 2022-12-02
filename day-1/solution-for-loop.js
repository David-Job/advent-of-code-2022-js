var { readFileSync } = require('node:fs');

// "data" is an array of Strings
var data = 
  readFileSync('./input.txt')
  .toString()
  .split('\n');

var firstPlaceCount = 0;
var secondPlaceCount = 0;
var thirdPlaceCount = 0;
var currentCount = 0;

for (var calorieCount of data) {
  if (calorieCount) {
    currentCount += Number(calorieCount);
  } else {
    if (currentCount > firstPlaceCount) {
      thirdPlaceCount = secondPlaceCount;
      secondPlaceCount = firstPlaceCount;
      firstPlaceCount = currentCount;
    } else if (currentCount > secondPlaceCount) {
      thirdPlaceCount = secondPlaceCount;
      secondPlaceCount = currentCount;
    } else if (currentCount > thirdPlaceCount) {
      thirdPlaceCount = currentCount;
    }
    currentCount = 0;
  }
}

console.log(`Highest total is ${firstPlaceCount}`);
console.log(`Sum of top three totals is ${firstPlaceCount + secondPlaceCount + thirdPlaceCount}`);
