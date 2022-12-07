import { readFileSync } from 'fs';

const input = readFileSync('src/02/input.prod.txt', 'utf-8');

const dimensions = input.split('\n');

const totalSum = dimensions
  .map((d) => d.split('x'))
  .map((x) => x.map(Number))
  .map((n) => {
    const smallestArea = Math.min(...[n[0] * n[1], n[1] * n[2], n[2] * n[0]]);
    const surfaceArea = 2 * n[0] * n[1] + 2 * n[1] * n[2] + 2 * n[2] * n[0];
    return surfaceArea + smallestArea;
  })
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalSum);
