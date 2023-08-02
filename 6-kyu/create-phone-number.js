const createPhoneNumber = numbers => {
  let phoneNumber = ""
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      phoneNumber += `(${numbers[i]}`
    } else if (i === 2) {
      phoneNumber += `${numbers[i]}) `
    } else if (i === 5) {
      phoneNumber += `${numbers[i]}-`
    } else {
      phoneNumber += numbers[i]
    }
  }
  return phoneNumber
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
