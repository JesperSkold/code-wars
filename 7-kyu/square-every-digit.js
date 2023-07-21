// https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
  let stringNum = String(num);
  let squared = ""
    for (const elem of stringNum) {
      squared+= elem**2
    }
    return Number(squared)
  }