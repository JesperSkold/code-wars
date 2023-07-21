// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
const DNAStrand = dna => {
  let newDNA = ""
  for (const letter of dna) {
    if (letter === "A") {
      newDNA += "T"
    }
    if (letter === "T") {
      newDNA += "A"
    }
    if (letter === "G") {
      newDNA += "C"
    }
    if (letter === "C") {
      newDNA += "G"
    }
  }
  return newDNA
}
/* with switch
const DNAStrand = dna => {
  let newDNA = ""
  for (const letter of dna) {
    switch (letter) {
      case "A":
        newDNA += "T"
        break;
      case "T":
        newDNA += "A"
        break;
      case "C":
        newDNA += "G"
        break;
      case "G":
        newDNA += "C"
        break;
    }
  }
  return newDNA
}
*/