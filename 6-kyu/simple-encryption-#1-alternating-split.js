// https://www.codewars.com/kata/57814d79a56c88e3e0000786
function encrypt(text, n) {
  
  if(text === null || text === '' || n <= 0 ){
    return text
  }
    
   n--;
   
     let split = text.split('')
   
     let first = []
     let second = []
   
   for(let i = 0; i < split.length; i ++){
     if(i % 2 !== 0){
       first.push(split[i]);
     }else if(i % 2 === 0){ 
       second.push(split[i]);
     }
   } 
   
   let encrypted = first.concat(second).join('')
 
   if(!n == 1){
     return encrypted;
   }else {
     return encrypt(encrypted, n)
   }
 }
 
 function decrypt(encryptedText, n) {
     if(encryptedText === null || encryptedText === '' || n <= 0 ){
    return encryptedText
   
  }
    
    n--;
    
     let length = []
     let result = []
 
    let split = encryptedText.split('')
    
    for(let i = 1; i <= encryptedText.length; i++){
      
      if(i % 2 === 0 ){
        length.push(i)
      }
    }
    
    let odds = split.slice(length.length)
    let evens = split.slice(0, length.length)
    console.log(odds)
    console.log(evens)
    
    for(let i = 0; i < odds.length; i++){
      result.push(odds[i] , evens[i])
    }
    
     if(!n == 1){
     return result.join('')
   }else {
     return decrypt(result.join(''), n)
     }
  }