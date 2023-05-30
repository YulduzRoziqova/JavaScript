// // Homework 1\
// let arr=[1,2,3,4,5,6,7];
// let result = 0 
// function calcAverage(num) {
//   for (let i = 0; i < num.length; i++) {
//     result += num[i];
    
//   }
//   console.log(result/arr.length)
// }
// calcAverage(arr)

// // Homework 2\
// function countVowels(str) {
//   let result = ''
//   for(let index = 0; index < str.length; index++){
//     if(str[index] === 'a' || str[index] === 'o' || str[index] === 'u' || str[index] === 'e' || str[index] ==='i'){
//      result += str[index].length
//   }
//   }
//   console.log(result.length)
// }
// countVowels('abracadabra');

// Homework 3\

function isPalingdrom(string) {
  string = string.toLowerCase()
  let result = '';
  for (let i = 0; i < string.length; i++){
      result += string[i]  
  }
  if(result == string){
    console.log(true); 
  }else{
     console.log(false);
  }
}
isPalingdrom('abba')
