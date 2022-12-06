var { readFileSync } = require('node:fs');

var data = 
  readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');

var stacks = [];

function resetStacks() {
  stacks = [
    'JHPMSFNV',
    'SRLMJDQ',
    'NQDHCSWB',
    'RSCL',
    'MVTPFB',
    'TRQNC',
    'GVR',
    'CZSPDLR',
    'DSJVGPBF',
  ].map(line => line.split(''));
}

function stepParameters(step) {
  return step
    .split(' ')
    .filter((v, i) => i % 2)
}

function move9k(quantity, from, to) {
  for (let i = 0; i < quantity; i++)
    stacks[to].push(stacks[from].pop());
}

function move9k1(quantity, from, to) {
  stacks[to] = stacks[to].concat(stacks[from].splice(stacks[from].length - quantity));
}

function getMessage() {
  return stacks.map(stack => stack.at(-1)).join('');
}

function partOneSolution() {
  for (let step of data) {
    let [howMany, from, to] = stepParameters(step);
    move9k(howMany, from - 1, to - 1);
  }
  console.log(getMessage());
}

function partTwoSolution() {
  for (let step of data) {
    let [howMany, from, to] = stepParameters(step);
    move9k1(howMany, from - 1, to - 1);
  }
  console.log(getMessage());
}

resetStacks();
partOneSolution();
resetStacks();
partTwoSolution();
