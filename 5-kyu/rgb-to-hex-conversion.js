// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
const rgb = (r, g, b) => {
  const rgbArr = [r, g, b]
  const hexStr = rgbArr
    .map((elem) => {
      if (elem < 0) {
        return "00"
      } else if (elem > 255) {
        return "FF"
      } else if (elem.toString(16).length < 2) {
        return "0" + elem.toString(16).toUpperCase()
      } else {
        return elem.toString(16).toUpperCase()
      }
    })
    .join("")

  return hexStr
}
