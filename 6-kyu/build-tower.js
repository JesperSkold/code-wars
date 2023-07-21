//https://www.codewars.com/kata/576757b1df89ecf5bd00073b
const towerBuilder = (nFloors) => {
  const tower = []
  let floors = "*"
  let nWhitespaces = nFloors-1
  for (let i = 0; i < nFloors; i++) {
    const whitespaces = " ".repeat(nWhitespaces)
    tower.push(`${whitespaces}${floors}${whitespaces}`)
    floors += "**"
    nWhitespaces--
  }
  return tower
}