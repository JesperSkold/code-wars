// https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
  for (let i=0; i<b.length; i++) {
    let index;
    while ((index = a.indexOf(b[i])) !== -1) {
        a.splice(index, 1);
    }
}
return a;

}