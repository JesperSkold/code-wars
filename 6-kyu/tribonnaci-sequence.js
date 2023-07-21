// https://www.codewars.com/kata/556deca17c58da83c00002db
const tribonacci = (signature, n) => {
  if (n === 0) {
    return []
  } else if (n === 1) {
    return [signature[0]]
  } else if (n === 2) {
    return [signature[0], signature[1]]
  }
  for (let i = 0; i < signature.length; i++) {
    if (signature.length === n) {
      break;
    }
    signature.push(signature[i] + signature[i + 1] + signature[i + 2])
  }
  return signature
}