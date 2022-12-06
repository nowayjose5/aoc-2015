import { readFileSync } from 'fs';

// const input = readFileSync('src/01/input.example.txt', 'utf-8');
const input = readFileSync('src/01/input.prod.txt', 'utf-8');

const directions = input.split('');

let floorNum = 0;
let positionBasementReached = 0;

for (let i = 0; i < directions.length; i++) {
  if (directions[i] === '(') {
    floorNum++;
  }

  if (directions[i] === ')') {
    floorNum--;
  }

  if (floorNum === -1) {
    positionBasementReached = i + 1;
    break;
  }
}

console.log(positionBasementReached);
