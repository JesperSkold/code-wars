// https://www.codewars.com/kata/52c31f8e6605bcc646000082
const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j]
      if (sum === target) {
        return [i, j]
      }
      sum = 0
    }
  }
}
console.log(
  twoSum(
    [
      208, -100, 441, -937, 8, -83, -27, -883, 28, 291, -852, 879, -592, 951,
      690, -826, 780, -75, 730, 719, -106, 476, 990, -261, -543, 172, 697, 973,
      -592, -424, -233, -839, -862, -619, 719, -188, 947, -448, -99, 124, 139,
      741, 841, -336, 102, 510, 80, 98, 896, 212, -771, 767, -480, -389, -930,
      651, 264,
    ],
    -1184
  )
)