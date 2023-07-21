// https://www.codewars.com/kata/55c45be3b2079eccff00010f
const order = words => {
  const arrOfWords = words.split(" ")
  let arr = Array(arrOfWords.length).fill("")
  for (const word of arrOfWords) {
    for (const char of word) {
      if (Number(char)) {
        arr[char-1] = word
      }
    }
  }
  return arr.join(" ")
}