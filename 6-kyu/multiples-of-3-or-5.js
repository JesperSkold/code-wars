// https://www.codewars.com/kata/514b92a657cdc65150000006
const solution = n => {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}