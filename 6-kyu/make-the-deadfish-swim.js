//https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript
const parse = data => {
  const parsedArr = []
  let value = 0

  for (const command of data) {
    switch (command) {
      case "i":
        value += 1
        break
      case "d":
        value -= 1
        break
      case "s":
        value = value ** 2
        break
      case "o":
        parsedArr.push(value)
    }
  }

  return parsedArr
}