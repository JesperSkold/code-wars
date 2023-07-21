// https://www.codewars.com/kata/58d76854024c72c3e20000de
const reverse = str => {
  let splitStr = str.split(" ")
  let newArr = []
  for (let i = 0; i < splitStr.length; i++) {
    if (i % 2) {
      newArr.push(splitStr[i].split("").reverse().join(""))
    } else {
      newArr.push(splitStr[i])
    } 
  }
  return newArr.join(" ").trim()
}