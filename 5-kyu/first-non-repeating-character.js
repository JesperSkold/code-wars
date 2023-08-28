// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
const firstNonRepeatingLetter = s => {
  const lowerCaseStr = s.toLowerCase()
  for (let i = 0; i < lowerCaseStr.length; i++) {
    let charCount = 0

    for (const j of lowerCaseStr) {
      if (lowerCaseStr[i] === j) {
        charCount += 1
      }
    }

    if (charCount === 1) {
      return s[i]
    }
  }

  return ""
}