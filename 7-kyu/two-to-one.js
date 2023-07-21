// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
function longest(s1, s2) {
  const joinedStr = [...s1, ...s2]
  const filteredArr1 = joinedStr.filter((word, index) => joinedStr.indexOf(word) === index)
  return filteredArr1.sort().join("")
  }