// https://www.codewars.com/kata/550498447451fbbd7600041c
const comp = (array1, array2) => {
  if (array1 == null || array2 == null) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1.sort((a, b) => a-b)[i]**2 !== array2.sort((a, b) => a-b)[i]) {
      return false
    }
  }
  return true
}