// https://www.codewars.com/kata/559590633066759614000063
function minMax(arr){
  let min = arr.reduce((prev, curr) => {
    return Math.min(prev, curr)
  })
  let max = arr.reduce((prev, curr) => {
    return Math.max(prev, curr)
  })
  return [min, max] // fix me!
}