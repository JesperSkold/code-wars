// https://www.codewars.com/kata/54da539698b8a2ad76000228
const isValidWalk = walk => {
  if(walk.length !== 10){
    return false
  }
  let pos = 0
  let i = 0
  for (i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        pos += 1;
        break;
      case "s":
        pos -= 1;
        break;
      case "e":
        pos += 2;
        break;
      case "w":
        pos -= 2;
        break
      default:
        return false;
    }
  }
return pos === 0 && i === 10
}