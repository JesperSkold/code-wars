// https://www.codewars.com/kata/583203e6eb35d7980400002a
const countSmileys = arr => {
  let smileyCounter = 0
  for (const smiley of arr) {
    if (smiley[0] === ":" || smiley[0] === ";") {
      if (smiley[smiley.length - 1] === ")" || smiley[smiley.length - 1] === "D") {
        if (smiley.length === 2) {
          smileyCounter++
        }
        if (smiley.length === 3 && smiley[1] === "~" || smiley.length === 3 && smiley[1] === "-") {
          smileyCounter++
        }
      }
    }
  }
  return smileyCounter
}