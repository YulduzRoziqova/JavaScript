let array = ['fruit','vegetable','apple','banana','kiwi']
let result = []

function pop(arr) {
  return arr[arr.length - 1];
}
console.log(pop(array))

function push(arr, newItem){
arr[arr.length]=newItem
return arr
}
console.log(push(array, 'granat'))

function shift(arr){
    for (let i = 1; i < arr.length; i++) {
       result[i - 1] = arr[i]
    }
    return result
}
console.log(shift(array));

function unshift(arr, newItem) {
    for (let i = 0; i < arr.length; i++) {
     result[i+1] = arr[i];
    }
    result[0] = newItem
    return result;
}
console.log(unshift(array, 'sam'))

function join(arr = [], item = "") {
    for (let i = 0; i < arr.length; i++) {
       item = (i === arr.length - 1) ? "" : item
       result += arr[i] + item
    }
    return result
 }
 console.log(join(array))
