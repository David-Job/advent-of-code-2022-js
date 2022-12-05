var { readFileSync } = require('node:fs');

var data = 
  readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

function priority (itemType) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(itemType) + 1;
}

function repeatedItemType (rucksack) {
  let [comp1, comp2] = [rucksack.slice(0, rucksack.length / 2), rucksack.slice(rucksack.length / 2)];
  for (let itemType of comp1)
    if (comp2.includes(itemType)) return itemType;
}

let repeatsPrioritySum = 0;
for (let rucksack of data) repeatsPrioritySum += priority(repeatedItemType(rucksack));
console.log(`The sum of priorities of the repeated item types in both compartments of each rucksack is ${repeatsPrioritySum}`)


let badgesPrioritySum = 0;
for (let i = 0; i < data.length; i += 3) {
  let badge = data[i].split('')
    .filter((itemType) => data[i+1].includes(itemType) && data[i+2].includes(itemType))[0];
  badgesPrioritySum += priority(badge);
}
console.log(`The sum of priorities of the group badges is  ${badgesPrioritySum}`)
