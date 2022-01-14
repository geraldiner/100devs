/**
 * Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
 *
 * A few examples:
 * ['u', 'y'] =>  ['u', 'y'] // average length is 1
 * ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
 * ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
 *
 * If the average length is not an integer, use Math.round().
 * The input array's length > 1
 *
 * From: https://www.codewars.com/kata/5a430359e1ce0e35540000b1/
 *
 *  */

/*

? Do I have to worry about casing?
? What about any symbols?
? What happens if the average length is not an integer?
>> Use Math.round
? Will the array ever be empty?

*/

function averageLength(arr) {
	// calculate the average length of the words in the array
	const avg = Math.round(arr.reduce((acc, curr) => acc + curr.length, 0) / arr.length);
	// use the average to create strings of the same letters
	const avgLengths = arr.map(x => x[0].repeat(avg));
	// return array of strings that are the same letters but at the calculated average length
	return avgLengths;
}

console.log(averageLength(["u", "y"]), ["u", "y"]); // average length is 1
console.log(averageLength(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]); // average length is 3
console.log(averageLength(["aa", "bb", "ddd", "eee"]), ["aaa", "bbb", "ddd", "eee"]); // average length is 2.5 round up to 3
