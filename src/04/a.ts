import { readFileSync } from 'fs';
import md5 from 'md5';

// const input = readFileSync('src/04/input.example.txt', 'utf-8');
const input = readFileSync('src/04/input.prod.txt', 'utf-8');

let numberRequired = 0;
for (let i = 0; i <= 1_100_000; i++) {
  if (md5(`${input}${i}`).startsWith('00000')) {
    numberRequired = i;
    break;
  }
}

console.log(numberRequired);
