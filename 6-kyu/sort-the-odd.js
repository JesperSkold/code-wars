// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] % 2 && arr[j] % 2) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]]
        }
      }
    }
  }
  return arr
}