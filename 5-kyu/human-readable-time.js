// https://www.codewars.com/kata/52685f7382004e774f0001f7
const humanReadable = (seconds) => {
  const hours = seconds / 3600
  let min = (hours - Math.floor(hours)) * 60
  let sec = Math.round((min - Math.floor(min)) * 60)
  if (sec === 60) {
    min++
    sec = 0
  }
  return `${hours < 10 ? "0" + ~~hours : ~~hours}:${
    min < 10 ? "0" + ~~min : ~~min
  }:${sec < 10 ? "0" + ~~sec : ~~sec}`
}