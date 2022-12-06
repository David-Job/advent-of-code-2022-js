var { readFileSync } = require('node:fs');

var data = 
  readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

function assignmentPairMatrix(assignmentPairString) {
  return assignmentPairString
    .split(',')
    .map(function (assignment) {
      return assignment
        .split('-')
        .map(x => Number(x));
    });
}

function range(start=0, end=0) {
  return [...Array(end - start + 1).keys()].map(x => x + start);
}

function checkFullOverlap(range1, range2) {
  let overlap = range1.filter(x => range2.includes(x));
  return overlap.length == range1.length || overlap.length == range2.length;
}

function checkPartialOverlap(range1, range2) {
  let overlap = range1.filter(x => range2.includes(x));
  return overlap.length != 0;
}

function fullOverlapCount(assignmentPairs) {
  let count = 0;
  for (let pair of assignmentPairs) {
    let [range1, range2] = assignmentPairMatrix(pair).map(x => range(...x));
    count += checkFullOverlap(range1, range2);
  }
  return count;
}

function partialOverlapCount(assignmentPairs) {
  let count = 0;
  for (let pair of assignmentPairs) {
    let [range1, range2] = assignmentPairMatrix(pair).map(x => range(...x));
    count += checkPartialOverlap(range1, range2);
  }
  return count;
}

console.log(`The quantity of total overlaps is ${fullOverlapCount(data)}`);
console.log(`The quantity of partial overlaps is ${partialOverlapCount(data)}`);
