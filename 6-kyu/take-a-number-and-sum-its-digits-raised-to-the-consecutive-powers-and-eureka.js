const sumDigPow = (a, b) => {
  const eureka = []

  for (let i = a; i <= b; i++) {
    const number = i.toString().split("")
    let result = 0

    for (let j = 0; j < number.length; j++) {
      result += Number(number[j]) ** (j + 1)

      if (result === i) {
        eureka.push(result)
      }
    }
  }

  return eureka
}