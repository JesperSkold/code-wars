// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
const narcissistic = n => {
  const nString = String(n)
  const splitNumber = nString.split("")
  let sum = 0

  for (const digit of splitNumber) {
    sum += Number(digit) ** nString.length
  }

  return sum === n
}