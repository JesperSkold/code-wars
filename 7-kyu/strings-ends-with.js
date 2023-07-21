// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
function solution(str, ending){
  if (ending == "") {
    return true
  }
  for (let i = str.length-ending.length; i < str.length; i++) {
    const subStr = str.substr(i, ending.length)
    if (subStr === ending) {
      return true
    }
  }
  return false
}