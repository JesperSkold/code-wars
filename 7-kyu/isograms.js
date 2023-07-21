// https://www.codewars.com/kata/54ba84be607a92aa900000f1
const isIsogram = str => {
  let arr = []
  for (const letter of str.toLowerCase()) {
    if (!arr.includes(letter)) {
      arr.push(letter)
    }else{
      return false
    }
  }
  return true
}