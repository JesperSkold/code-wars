// https://www.codewars.com/kata/545cedaa9943f7fe7b000048
const isPangram = str => [...new Set(str.toLowerCase())].sort().join("").replace(/[^a-z]+/, "") === "abcdefghijklmnopqrstuvwxyz"
