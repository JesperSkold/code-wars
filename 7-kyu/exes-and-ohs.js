// https://www.codewars.com/kata/55908aad6620c066bc00002a
function XO(str) {
  const lowerCaseStr = str.toLowerCase()
  let lowerCaseArr = lowerCaseStr.split("")
  const xArr = lowerCaseArr.filter(x => x === "x")
  const oArr = lowerCaseArr.filter(o => o === "o")
  if(xArr.length === oArr.length) {
      return true
    }
  return false
}