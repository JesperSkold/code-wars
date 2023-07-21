// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
const number = (arr) => {
  let numArr = []
  for (let i = 0; i < arr.length; i++) {
    numArr.push(`${i+1}: ${arr[i]}`)
  }
  return numArr
}