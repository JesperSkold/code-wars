// https://www.codewars.com/kata/54da5a58ea159efa38000836
const findOdd = (A) => {
  let nOccurrances
  for (let i = 0; i <= A.length; i++) {
    if (nOccurrances % 2) {
      return A[i - 1]
    }
    let j = 0
    nOccurrances = 0
    for (j; j < A.length; j++) {
      if (A[j] === A[i]) {
        nOccurrances++
      }
    }
  }
}