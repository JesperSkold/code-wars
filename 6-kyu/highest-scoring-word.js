// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
const high = str => {
  const alphabetScore = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  let highestScore = 0
  let highestWord = ""

  for (const word of str.split(" ")) {
    let currentScore = 0
    let currentWord = ""

    for (const char of word) {
      currentWord += char
      currentScore += alphabetScore[char]
    }

    if (currentScore > highestScore) {
      highestScore = currentScore
      highestWord = currentWord
    }
  }

  return highestWord
}