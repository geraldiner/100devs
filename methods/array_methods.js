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
console.log(max)

// filter
// MDN:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Create a new array based on the gatekeeper (callback fn) - acts like a real filter
// @params: callback function with parameters:
//            element: current element being processed
// @return: new array with elements that passed the filter

// forEach


// sort
// slice
// pop
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