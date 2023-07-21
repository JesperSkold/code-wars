// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a,b,c){
  if(a + b <= c){
    return false
  }else if(a + c <= b){
    return false
  }else if(c + b <= a){
    return false
  }else{
    return true
  }
}