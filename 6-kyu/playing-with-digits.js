// https://www.codewars.com/kata/5552101f47fc5178b1000050
const digPow = (n, p) => {
  const arrOfNums = String(n).split("")
  let totalSum = 0;
  for (const num of arrOfNums) {
    totalSum += num**p++
  }
  return Number.isInteger(totalSum/n) ? totalSum/n : -1
}