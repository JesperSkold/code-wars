// https://www.codewars.com/kata/5842df8ccbd22792a4000245
const expandedForm = num => {
  let strNum = String(num)
  const expandedArr = []
  for (const elem of strNum) {
    let re = new RegExp(elem)
    strNum = strNum.replace(re, "")
    if (elem !== "0") {
      expandedArr.push(elem + "0".repeat(strNum.length))
    }
  }
  return expandedArr.join(" + ");
}