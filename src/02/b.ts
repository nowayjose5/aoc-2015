import { readFileSync } from 'fs';

const input = readFileSync('src/02/input.prod.txt', 'utf-8');

const dimensions = input.split('\n');

const totalSum = dimensions
  .map((d) => d.split('x'))
  .map((x) => x.map(Number))
  .map((n) => {
    const sorted = n.sort((a, b) => a - b);
    const perimeter = 2 * sorted[0] + 2 * sorted[1];
    const volume = n.reduce((acc, curr) => acc * curr);
    return perimeter + volume;
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalSum);
