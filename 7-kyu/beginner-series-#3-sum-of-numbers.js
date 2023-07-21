// https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum( a,b )
{
  let sum = 0;
  let min = a;
  let max = b;
  if (b < a) {
    min = b
    max = a
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}