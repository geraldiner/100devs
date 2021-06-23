// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!


// map
// MDN:
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// You use .map() to create a new array based on what you did on every element in the array it was called on
// I know this one fairly well and confident in its use. Like if you wanted to turn an array of strings that were numbers into actual numbers
// @params: bacllback function that is called on every element on the array that map was called on
// @return: new array

let arr1 = ["1", "2", "3", "4"] // array of numbers that are strings
let arr2 = arr1.map((a) => Number(a)) // new array of the numbers as Numbers
// console.log(arr1, arr2)

// Turn an array of numbers into an array of their squares
let arr3 = [1, 3, 5, 7, 9] // array of numbers
let arr4 = arr3.map(a => a ** 2)
// console.log(arr3, arr4)


// reduce
// MDN:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// This one is hard. Uses a reducer function (like called recursively?) on each element of the array to get one single output value - which can be more than just a number. It can also be an array, maybe a string?
// @params: callback function that also takes its own parameters
//            accumulator = the number keeping the resulting single output
//            currentValue = the value the callback function is currently on
//            index = the index of the current element being processed
//             array = the array reduce was called on
//          initial value = intial value to start the accumulator on
// @return: a single output value
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let arr5 = [11, 209, 23, 41]
let product = arr5.reduce((acc, cur) => { return acc * cur })
// console.log(product)
let max = arr5.reduce((acc, cur) => { return Math.max(acc, cur) })
// console.log(max)


// filter
// MDN:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Create a new array based on the gatekeeper (callback fn) - acts like a real filter
// @params: callback function with parameters:
//            element: current element being processed
// @return: new array with elements that passed the filter
// This is the finding the sheep one
let sheeps = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]

let sheepsFound = sheeps.filter((sheep) => sheep)
// also works as sheeps.filter(Boolean)
// console.log(sheepsFound.length)


// forEach
// MDN:
// The forEach() method executes a provided function once for each array element.
// As it's name implies - it will apple the given function FOR EACH element in the array - kinda 
// Does not return
// @params: callback: function to perform on each element
//            element: current element being processed

// print each food and its price
const foodArray = [
  { name: 'Burrito', price: 2.99 },
  { name: 'Pizza', price: 6.99 },
  { name: 'Burger', price: 4.99 },
  { name: 'Pasta', price: 5.99 }
]

// foodArray.forEach((food, i) => {
//   console.log(`${i} | ${food.name} costs $${food.price}.`)
// })


// sort
// MDN: The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// Sorts an array in place based on the compareFunction provided and returns the sorted array. The default compareFunction puts items in descending order based on their string values
let numbers = [1, 30, 4, 21, 100000];
console.log(`Sort by default: ${numbers.sort()}`)
console.log(`Sort by value: ${numbers.sort((a, b) => a - b)}`)


// slice
// MDN: The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// Returns a new array that includes the elements as specified by the given arguments: start (inclusive), end (not inclusive). The original array is not changed.
let array = [1,2,3,4,5]
// console.log(array) // [1,2,3,4,5]
let array2 = array.slice(0,3)
// console.log(array2) // [1,2,3]
array[0] = 10
// console.log(array, array2) // [10,2,3,4,5], [1,2,3]


// pop
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let veggies = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"]
let popped = veggies.pop()
console.log(popped) // tomato
console.log(veggies) // ["broccoli", "cauliflower", "cabbage", "kale"]


// shift
// push
// unshift
// includes
// indexOf
// every



// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
// 5 codewars tagged as arrays (minimum)
// Add what you learn to an interview deck on Anki!