// https://www.codewars.com/kata/520b9d2ad5c005041100000f
const pigIt = str => str.split(" ").map((elem) => elem.match(/^[A-Z]+$/i) ? elem.substring(1) + elem[0] + "ay" : elem ).join(" ")
