// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health >= 1 && fighter2.health >= 1) {
    if (firstAttacker === fighter1.name) {
      fighter2.health  -= fighter1.damagePerAttack
      firstAttacker = fighter2.name
    } else {
      fighter1.health -= fighter2.damagePerAttack
      firstAttacker = fighter1.name
    }
  }
  if (fighter1.health > fighter2.health) {
    return fighter1.toString()
  } else {
    return fighter2.toString()
  }
}