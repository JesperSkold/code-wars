// https://www.codewars.com/kata/554ca54ffa7d91b236000023
const deleteNth = (arr, n) => {
  let compareStr = ""
  let newArr = []
  for (const elem of arr) {
    let num = elem
    let re = new RegExp(`\\b${num}\\b`, "g")
    if ((compareStr.match(re) || []).length < n) {
      compareStr += elem + " "
      newArr.push(elem)
    }
  }
  return newArr
}