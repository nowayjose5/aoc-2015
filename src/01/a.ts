import { readFileSync } from 'fs';

const input = readFileSync('src/01/input.prod.txt', 'utf-8');

const openingParens = input.split('').filter((s) => s === '(');
const closingParens = input.split('').filter((s) => s === ')');
const floorNum = openingParens.length - closingParens.length;

console.log(floorNum);
