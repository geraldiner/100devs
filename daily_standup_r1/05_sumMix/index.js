/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 


From: https://www.codewars.com/kata/57eaeb9578748ff92a000009 */

/**
 * @param: x - list of integers and string integers
 * @return: sum - int value of the sum of all the elements,
  including string elements as integers

? Will I ever get an empty array?
? Will I ever get a string value that isn't a number? If so, how is it handled?

 * 
 */

function sumMix(x) {
	// create a new array of just numbers

	// use .reduce() to sum all the numbers in new array
	const sum = x.reduce((acc, curr) => acc + Number(curr), 0);
	return sum;
}

/*

Time complexity: O(n) for the .reduce() since it's iterating over every element in the array

*/

console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["1", "2", 3, 4, 5]), 15);
console.log(sumMix([2, 23, "16", 7, "1", "14", 10]), 73);
