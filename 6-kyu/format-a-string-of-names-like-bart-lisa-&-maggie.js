// https://www.codewars.com/kata/53368a47e38700bd8300030d
const list = names => {
  let formatedStr = ""
  names.forEach((elem, i) => {
    if (i !== names.length - 1 && i !== names.length - 2) {
      formatedStr += elem.name + ", "
    } else {
      formatedStr += elem.name + " & "
    }
  });
  return formatedStr.trim().substring(0, formatedStr.length - 3);
}