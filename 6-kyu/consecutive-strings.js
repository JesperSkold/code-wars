//https://www.codewars.com/kata/56a5d994ac971f1ac500003e
const longestConsec = (strarr, k) => {
  if (k <= 0 || k > strarr.length) {
    return ""
  }
  let currSlice = ""
  for (let i = 0; i < strarr.length; i++) {
    let newSlice = strarr.slice(i, i + k).join("")
    if (currSlice.length < newSlice.length) {
      currSlice = newSlice
    }
  }
  return currSlice
}