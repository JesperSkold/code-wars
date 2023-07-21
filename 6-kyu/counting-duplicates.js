// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
const duplicateCount = text => {
  const lowerCaseText = text.toLowerCase()
  let duplicates = []
  for (const char of lowerCaseText) {
    if (lowerCaseText.indexOf(char) !== lowerCaseText.lastIndexOf(char)) {
      duplicates.push(char)
    }
  }
  return [...new Set(duplicates)].length;
}