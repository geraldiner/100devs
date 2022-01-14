/**
 * Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 *
 * What if the string is empty? Then the result should be empty object literal, {}.
 *
 * From: https://www.codewars.com/kata/52efefcbcdf57161d4000091
 *
 * */

function countChars(str) {
	let charCount = {};
	for (let letter of str) {
		charCount[letter] = charCount[letter] ? charCount[letter] + 1 : 1;
	}
	return charCount;
}

console.log(countChars("aba"));
