// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs(start * 264 - finish * 264);
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let price = 0;
  if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance > 2000) {
    return 25;
  } else {
    distance -= 400;
    price = distance * 0.02;
  }
  return price > 0 ? price : 0;
}
