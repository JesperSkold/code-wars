const diamond = (n) => {

  if (n % 2 === 0 || n < 1) {
    return null
  }

  let diamond = ""
  let whitespace = (n + 1) / 2

  for (let i = 1; i <= n; i += 2) {

    if (whitespace !== 0) {
      whitespace -= 1
    }

    diamond += " ".repeat(whitespace)
    diamond += "*".repeat(i) + "\n"
  }

  whitespace = 1;

  for (let i = n - 2; i >= 0; i -= 2) {
    diamond += " ".repeat(whitespace)
    diamond += "*".repeat(i) + "\n"
    whitespace += 1
  }

  return diamond
}
console.log(diamond(1))
//if even or negative return null
//when loop has reached n then do -2 until 1
/*
   *
  ***
 *****
*******
 *****
  ***
   *
  
     *
    ***
   ***** 
  *******
 *********
***********
 *********
  *******
   *****
    *** 
     * 
*/
