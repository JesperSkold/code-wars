// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
const duplicateEncode = word => {
  let lowerCaseStr = word.toLowerCase()
  let encodedStr = ""
  for (const letter of lowerCaseStr) {
    if (lowerCaseStr.indexOf(letter) !== lowerCaseStr.lastIndexOf(letter)) {
      encodedStr += ")"
    } else {
      encodedStr += "("
    }
  }
  return encodedStr
}