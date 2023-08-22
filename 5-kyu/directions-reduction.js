// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
const dirReduc = arr => {
  const oppositeDir = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  }

  const improvedDir = [...arr]

  for (let i = 0; i < improvedDir.length; i++) {
    if (improvedDir[i] === oppositeDir[improvedDir[i + 1]]) {
      improvedDir.splice(i, 2)
      i = -1
    }
  }

  return improvedDir
}
