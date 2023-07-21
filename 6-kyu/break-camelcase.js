// https://www.codewars.com/kata/5208f99aee097e6552000148
const solution = string => {
  let camelCaseStr = ""
  for (let i = 0; i < string.length; i++) {
    string[i] === string[i].toUpperCase() && i !== 0
      ? (camelCaseStr += ` ${string[i]}`)
      : (camelCaseStr += string[i])
  }
  return camelCaseStr
}