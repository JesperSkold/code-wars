// https://www.codewars.com/kata/57f609022f4d534f05000024
function stray(numbers) {
  sortedArr = numbers.sort()
   if (sortedArr[0] !== sortedArr[1]) {
     return sortedArr[0]
   }else{
     return sortedArr[sortedArr.length-1]
   }
};