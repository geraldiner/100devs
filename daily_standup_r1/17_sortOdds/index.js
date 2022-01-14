/**
 * You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 *
 * Examples
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 *
 * sortOdds([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
 * sortOdds([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
 *
 * Hint: figure out the odd numbers and then map to replace in place
 *
 * From: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
 *
 *  */

function sortOdds(arr) {
	let odds = arr.filter(a => Math.abs(a % 2) === 1).sort((a, b) => a - b);
	return arr.map(x => (x % 2 === 0 ? x : odds.shift()));
}

console.log(sortOdds([5, 3, 2, 8, 1, 4]), "[1, 3, 2, 8, 5, 4]");
console.log(sortOdds([5, 3, 1, 8, 0]), "[1, 3, 5, 8, 0]");
console.log(sortOdds([-25, 23, 40, -26, -28, -6, 35, 39, -35]), "[ -35, -25, 40, -26, -28, -6, 23, 35, 39 ]");
