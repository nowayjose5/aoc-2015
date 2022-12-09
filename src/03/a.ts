import { readFileSync } from 'fs';

// const input = readFileSync('src/03/input.example.txt', 'utf-8');
const input = readFileSync('src/03/input.prod.txt', 'utf-8');

const directions = input.split('');

const houses: number[][] = [[0, 0, 1]];
let currentXPosition = 0;
let currentYPosition = 0;

const updateHouseGifts = (xPos: number, yPos: number) => {
  const definedHouse = houses.find((h) => h[0] === xPos && h[1] === yPos);
  if (!definedHouse) {
    const newHome: number[] = [xPos, yPos, 1];
    houses.push(newHome);
    return;
  }
  const updatedGifts = definedHouse[2] + 1;
  const updatedHome = [definedHouse[0], definedHouse[1], updatedGifts];
  const definedHouseIndex = houses.findIndex(
    (h) => h[0] === xPos && h[1] === yPos
  );
  houses[definedHouseIndex] = updatedHome;
};

directions.forEach((d) => {
  if (d === '^') {
    currentYPosition++;
    updateHouseGifts(currentXPosition, currentYPosition);
  }

  if (d === '>') {
    currentXPosition++;
    updateHouseGifts(currentXPosition, currentYPosition);
  }

  if (d === 'v') {
    currentYPosition--;
    updateHouseGifts(currentXPosition, currentYPosition);
  }

  if (d === '<') {
    currentXPosition--;
    updateHouseGifts(currentXPosition, currentYPosition);
  }
});

const homesWithAtLeastOneGift = houses.filter((house) => house[2] >= 1).length;

console.log(homesWithAtLeastOneGift);
