// https://www.codewars.com/kata/56af1a20509ce5b9b000001e
const travel = (r, zipcode) => {
  const splitData = r.split(",")
  const addressArr = []
  let stringAddress = "";
  let newFormat = `${zipcode}:`
  for (const address of splitData) {
    if (address.includes(zipcode)) {
      addressArr.push(address)
      stringAddress += address
    }
  }
     if (!stringAddress.includes(zipcode) || !/\d{5}/.test(zipcode)) {
      return `${zipcode}:/`
    }
  for (const elem of addressArr) {
    const noNums = elem.replace(/[0-9]/g, "")
    const noState = noNums.replace(/[A-Z]{2}/g, "").trim()
    const firstNums = elem.match(/\d+/g)
    newFormat += `${noState},`
  }
  
  newNewFormat = newFormat.substring(0, newFormat.length - 1) + "/"

  for (const elem of addressArr) {
    const firstNums = elem.match(/\d+/g)
    newNewFormat += `${firstNums[0]},`
  }

  return newNewFormat.substring(0, newNewFormat.length - 1)
}