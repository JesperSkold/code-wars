// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
const persistence = num => {
  let newNum = num;
  let i = 0
  for (i = 0; newNum >= 10; i++) {
    newNum = String(newNum).split("").map(newNum => parseInt(newNum, 10)).reduce((prev, curr) =>
      prev * curr
    );
  }
  return i
}