// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
const findMissingLetter = array => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"

  if (array[0] === array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase()
  }

  const slicedAlphabet = alphabet.slice(
    alphabet.indexOf(array[0]),
    alphabet.indexOf(array[array.length - 1])
  )

  for (let i = 0; i < slicedAlphabet.length; i++) {
    if (slicedAlphabet[i] !== array[i]) {
      return slicedAlphabet[i]
    }
  }
}