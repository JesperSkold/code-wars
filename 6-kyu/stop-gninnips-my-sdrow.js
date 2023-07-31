const spinWords = str => str.split(" ").map((word) => word.length > 4 ? word.split("").reverse().join("") : word ).join(" ")
  // const arrOfStr = str.split(" ").map((word) => {
  //   if (word.length > 4) {
  //     return word.split("").reverse().join("")
  //   }
  //   return word
  // })
  // return arrOfStr.join(" ")