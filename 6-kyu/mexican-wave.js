// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
const wave = str => {
  let audience = Array(str.length).fill(str)
  let audienceWave = []
  for (let i = 0; i < audience.length; i++) {
    let splitStr = audience[i].split("")
    if (splitStr[i] !== " ") {
      splitStr[i] = splitStr[i].toUpperCase()
      audienceWave.push(splitStr.join(""))
    }
  }
  return audienceWave;
}