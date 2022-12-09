import { readFileSync } from 'fs';

// const input = readFileSync('src/03/input.example.txt', 'utf-8');
const input = readFileSync('src/03/input.prod.txt', 'utf-8');

const santaDirections = input.split('').map((d, index) => {
  if ((index + 1) % 2 !== 0) {
    return d;
  }
});
const roboSantaDirections = input.split('').map((d, index) => {
  if ((index + 1) % 2 === 0) {
    return d;
  }
});

const houses: number[][] = [[0, 0, 2]];
let santaCurrentXPosition = 0;
let santaCurrentYPosition = 0;
let roboSantaCurrentXPosition = 0;
let roboSantaCurrentYPosition = 0;

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

santaDirections.forEach((d) => {
  if (d === '^') {
    santaCurrentYPosition++;
    updateHouseGifts(santaCurrentXPosition, santaCurrentYPosition);
  }

  if (d === '>') {
    santaCurrentXPosition++;
    updateHouseGifts(santaCurrentXPosition, santaCurrentYPosition);
  }

  if (d === 'v') {
    santaCurrentYPosition--;
    updateHouseGifts(santaCurrentXPosition, santaCurrentYPosition);
  }

  if (d === '<') {
    santaCurrentXPosition--;
    updateHouseGifts(santaCurrentXPosition, santaCurrentYPosition);
  }
});

roboSantaDirections.forEach((d) => {
  if (d === '^') {
    roboSantaCurrentYPosition++;
    updateHouseGifts(roboSantaCurrentXPosition, roboSantaCurrentYPosition);
  }

  if (d === '>') {
    roboSantaCurrentXPosition++;
    updateHouseGifts(roboSantaCurrentXPosition, roboSantaCurrentYPosition);
  }

  if (d === 'v') {
    roboSantaCurrentYPosition--;
    updateHouseGifts(roboSantaCurrentXPosition, roboSantaCurrentYPosition);
  }

  if (d === '<') {
    roboSantaCurrentXPosition--;
    updateHouseGifts(roboSantaCurrentXPosition, roboSantaCurrentYPosition);
  }
});

const homesWithAtLeastOneGift = houses.filter((house) => house[2] >= 1).length;

console.log(homesWithAtLeastOneGift);
