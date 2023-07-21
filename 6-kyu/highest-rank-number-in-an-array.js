// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
const highestRank = arr => {
  const obj = {}
  const keys = []
  for (const elem of arr) {
    if (obj[elem]) {
      obj[elem]++
    }else{
      obj[elem] = 1
    }
  }
  for(const elem in obj){
    if (obj[elem] === Math.max(...Object.values(obj))) {
      keys.push(elem)
    }
  }
  return Math.max(...keys)
}