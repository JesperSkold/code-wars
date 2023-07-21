// https://www.codewars.com/kata/54dc6f5a224c26032800005c
const stockList = (listOfArt, listOfCat) => {
  if (!listOfArt.length || !listOfCat.length) {
    return ""
  }
  let obj = {}
  let newFormatStr = ""
  for (const elem of listOfCat) {
    obj[elem] = 0
  }
  for (let i = 0; i < listOfArt.length; i++) {
    if (obj.hasOwnProperty(listOfArt[i].slice(0, 1))) {
      obj[listOfArt[i].slice(0, 1)] += parseInt(listOfArt[i].match(/\d+/g, ""), 10);
    }
  }
  for (const elem in obj) {
    newFormatStr += `(${elem} : ${obj[elem]}) - `
  }
  return newFormatStr.slice(0, -3)
}