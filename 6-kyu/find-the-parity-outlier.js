// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
const findOutlier = integers => {
  const even = []
  const uneven = []

  for (const n of integers) {
    if (n % 2) {
      uneven.push(n)
    } else {
      even.push(n)
    }

    if (uneven.length > 1 && even.length === 1) {
      return Number(even)
    } else if (even.length > 1 && uneven.length === 1) {
      return Number(uneven)
    }
  }
}
