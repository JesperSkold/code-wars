// https://www.codewars.com/kata/52efefcbcdf57161d4000091
const count = word => {
	const letterAmount = {}
	for (const letter of word) {
		!letterAmount[letter] ? letterAmount[letter] = 1 : letterAmount[letter]++
	}
	return letterAmount
};