// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
const solution = str => {
  const arrOfStr = []

  for (let i = 0; i < str.length; i++) {
    if (i % 2) {
      arrOfStr.push((str[i - 1] += str[i]))
    }
  }

  if (str.length % 2) {
    arrOfStr.push((str[str.length - 1] += "_"))
  }

  return arrOfStr
}
