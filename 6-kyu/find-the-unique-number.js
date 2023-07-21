// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
const findUniq = arr => {
  const sortedUnique = [... new Set(arr)].sort()
  if (sortedUnique[0] === arr[0] && sortedUnique[0] === arr[arr.length - 2]) {
    return sortedUnique[1]
  } else {
    return sortedUnique[0]
  }
}