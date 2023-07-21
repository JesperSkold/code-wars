// https://www.codewars.com/kata/57b06f90e298a7b53d000a86
const queueTime = (customers, n) => {
  if (!customers.length) {
    return 0
  }
  const checkingOut = []
  for (const customer of customers) {
    if (checkingOut.length < n) {
      checkingOut.push(customer)
    } else {
      checkingOut[checkingOut.indexOf(Math.min(...checkingOut))] += customer
    }
  }
  return Math.max(...checkingOut)
}