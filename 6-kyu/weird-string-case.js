// https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript
const toWeirdCase = str => {
  const arrOfStr = str.split(" ")
  let weirdCase = ""

  for (const word of arrOfStr) {
    weirdCase += " "
    for (let i = 0; i < word.length; i++) {
      weirdCase += i % 2
        ? word[i].toLowerCase()
        : word[i].toUpperCase()
    }
  }

  return weirdCase.trim()
}