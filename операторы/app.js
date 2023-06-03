// HomeWork 1\
let number = [2,3,4,3,3,4,4,5,6,7,7,95,95];
let arr = [];
for (let i = 0; i < number.length; i++) {
   for(let num = i + 1; num < number.length; num++){
       if(number[i] === number[num] && !arr.includes(number[i])){
           arr.push(number[i])
       }
   }
}
  console.log(arr)

//   homeWork 2\
let numbers = [2,3,4,4,6,9]
 let num = 0
 numbers.forEach(function(item){
     num += item
 })
 console.log(num)


// homework 3\
 let num1 = [2,-3,-4,4,-6,9]
let num2 = 0
num1.forEach(function(item){
    if(item < 0){
       num2 += item * -1
    }
})
alert(num2);