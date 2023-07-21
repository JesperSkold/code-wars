// https://www.codewars.com/kata/5202ef17a402dd033c000009
const titleCase = (title, minorWords) => {
  if (!title) {
    return title
  }

  const lowerCaseMinorWordsArr = minorWords
    ? minorWords.toLowerCase().split(" ")
    : []
    
  return title
    .toLowerCase()
    .split(" ")
    .map((word, i) =>
      lowerCaseMinorWordsArr.includes(word) && i !== 0
        ? word
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ")
}