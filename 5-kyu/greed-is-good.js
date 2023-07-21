// https://www.codewars.com/kata/5270d0d18625160ada0000e4
const score = (dice) => {
  const diceRolls = {}
  let tripplePoints = 0
  let singleOnesPoints = 0
  let singleFivesPoints = 0

  for (const roll of dice) {
    diceRolls[roll] = (diceRolls[roll] || 0) + 1

    if (diceRolls[roll] > 3 || diceRolls[roll] < 3) {
      if (roll == 1) {
        singleOnesPoints += 100
      } else if (roll == 5) {
        singleFivesPoints += 50
      }
    } else if (diceRolls[roll] === 3) {
      if (roll == 1) {
        tripplePoints += 1000
        singleOnesPoints = 0
      } else if (roll == 5) {
        tripplePoints += 500
        singleFivesPoints = 0
      } else {
        tripplePoints += Number(roll + "00")
      }
    }
  }
  return tripplePoints + singleOnesPoints + singleFivesPoints
}