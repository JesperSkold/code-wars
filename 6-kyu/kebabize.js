// https://www.codewars.com/kata/57f8ff867a28db569e000c4a
const kebabize = str => {
  let noNumberStr = str.replace(/[0-9]/g, "")
  let kebabStr = noNumberStr.replace(/[A-Z]/g, "-$&").toLowerCase()
  if (kebabStr[0] === "-") {
    return kebabStr.substring(1)
  }
  return kebabStr
}