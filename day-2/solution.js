var { readFileSync } = require('node:fs');

var data = 
  readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

var shapeScore = {
  "X": 1, // Rock
  "Y": 2, // Paper
  "Z": 3, // Scissors
};

var outcomeScore = {
  "X": {
    "A": 3,
    "B": 0,
    "C": 6,
  },
  "Y": {
    "A": 6,
    "B": 3,
    "C": 0,
  },
  "Z": {
    "A": 0,
    "B": 6,
    "C": 3,
  },
};

// New scores that contemplate rules in part two
var correctPlayScore = {
  // Need to lose (+0 pts.)
  "X": { 
    "A": 3, // Scissors against rock
    "B": 1, // Rock against paper
    "C": 2, // Paper against scissors
  },
  // Need to draw (+3 pts.)
  "Y": {
    "A": 3+1, // Rock against rock
    "B": 3+2, // Paper against paper
    "C": 3+3, // Scissors against scissors
  },
  // Need to win (+6 pts.)
  "Z": {
    "A": 6+2, // Paper against rock
    "B": 6+3, // Scissors against paper
    "C": 6+1, // Rock against scissors
  },
};

var badScore = 0;
var goodScore = 0;

for (round of data) {
  let [opponent, play] = round.split(" ");
  badScore += shapeScore[play] + outcomeScore[play][opponent];
  goodScore += correctPlayScore[play][opponent];
}

console.log(`Total "bad" score is ${badScore}`);
console.log(`Total "good" score is ${goodScore}`);

