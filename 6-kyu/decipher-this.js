// https://www.codewars.com/kata/581e014b55f2c52bb00000f8
const decipherThis = str => {
  characterCodeTranslator = str.split(" ").map(x => x.replace(/\d+/, String.fromCharCode(parseInt(x, 10))))
  decryptedStr = ""
  characterCodeTranslator.forEach((element, index) => {
    decryptedStr += " "
    for (let i = 0; i < element.length; i++) {
      if (element.length === 1) {
        decryptedStr += element
      } else if (i === 1) {
        decryptedStr += element[element.length - 1];
      } else if (i === element.length - 1) {
        decryptedStr += element[1];
      } else {
        decryptedStr += element[i]
      }
    }
  });
  return decryptedStr.trim()
}