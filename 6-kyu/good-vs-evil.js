// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
const goodVsEvil = (good, evil) => {
  const goodMap = [1, 2, 3, 3, 4, 10]
  const evilMap = [1, 2, 2, 2, 3, 5, 10]

  let goodScore = 0
  const goodArr = good.split(" ")

  for (let i = 0; i < goodArr.length; i++) {
    if (goodArr[i] !== "0") {
      goodScore += goodMap[i] *= goodArr[i]
    }
  }

  let evilScore = 0
  const evilArr = evil.split(" ")

  for (let i = 0; i < evilArr.length; i++) {
    if (evilArr[i] !== "0") {
      evilScore += evilMap[i] *= evilArr[i]
    }
  }

  if (goodScore > evilScore) {
    return "Battle Result: Good triumphs over Evil"
  } else if (goodScore < evilScore) {
    return "Battle Result: Evil eradicates all trace of Good"
  } else {
    return "Battle Result: No victor on this battle field"
  }
}
