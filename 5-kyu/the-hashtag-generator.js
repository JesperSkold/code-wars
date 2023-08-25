// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
const generateHashtag = str => {
  if (str.match(/^\s*$/)) {
    return false
  }

  const generatedStr =
    "#" +
    str
      .trim()
      .replace(/ +/g, " ")
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")

  if (generatedStr.length > 140) {
    return false
  }

  return generatedStr
}