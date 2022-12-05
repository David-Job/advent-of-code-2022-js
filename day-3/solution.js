var { readFileSync } = require('node:fs');

var data = 
  readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function repeatedItem (rucksack) {
  for (let char of rucksack.slice(0, rucksack.length / 2))
    if (rucksack.slice(rucksack.length / 2).includes(char)) return char;
}

let prioritiesSum = 0;
for (let rucksack of data) 
  prioritiesSum += 1 + priority.indexOf(repeatedItem(rucksack));

console.log(`Sum of the priorities of the item type found in both compartments in each rucksack is ${prioritiesSum}`);

let badgePrioritySum = 0;
for (let i = 0; i < data.length; i += 3) {
  let badge = data[i].split('').filter((c) => data[i+1].includes(c) && data[i+2].includes(c))[0];
  badgePrioritySum += 1 + priority.indexOf(badge);
}

console.log(`Sum of the priorities of the group badges is ${badgePrioritySum}`);
