//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function filterEvenNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

let arr = [51, 4, 7, 2, 8, 10, 1];
console.log(filterEvenNumbers(arr));

let arr2 = [1, 24, 17, 32, 28, 101, 51];
console.log(filterEvenNumbers(arr2));