// https://www.codewars.com/kata/517abf86da9663f1d2000003
const toCamelCase = (str) => {
  const arrOfWords = str.split(/[-_]/)
  const upperCaseWords = arrOfWords
    .slice(1)
    .map((word) => word[0].toUpperCase() + word.substring(1))
  return arrOfWords[0] + upperCaseWords.join("")
  return str
}

const assert = require("assert")

assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior")

// Test case 2: 'The-Stealth-Warrior'
assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior")

// Test case 3: 'A-B-C'
assert.strictEqual(toCamelCase("A-B-C"), "ABC")
