// https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = (arr) => {
  const returnArr = [...arr]
  for (const elem of returnArr) {
    if (elem === 0) {
      returnArr.splice(returnArr.indexOf(elem), 1)
      returnArr.push(elem)
    }
  }
  return returnArr
}