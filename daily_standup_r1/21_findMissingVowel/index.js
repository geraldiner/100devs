/**
 * Your job is to figure out the index of which vowel is missing from a given string:
 * 
 * A has an index of 0,
 * E has an index of 1,
 * I has an index of 2,
 * O has an index of 3,
 * U has an index of 4.
 * 
 * Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.
 * 
 * Examples
 * "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
 * "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
 * 
 * From: https://www.codewars.com/kata/56414fdc6488ee99db00002c
 * 
 */

// function absentVowel(str) {
// 	// set array of vowels for the indices
// 	const vowels = ["a", "e", "i", "o", "u"];

// 	// convert string to lowercase
// 	str = str.toLowerCase();
// 	// iterate over vowel array
// 	// use .includes() to check if the vowel is included
// 	// if not, return the index in the vowel array
// 	// return index (0-4)

// 	for (let i = 0; i < vowels.length; i++) {
// 		if (!str.includes(vowels[i])) return i
// 	}
// 	return -1
// }

function absentVowel(str) {
	const vowels = "aeiou";
	for (let i = 0; i < vowels.length; i++) {
		if (str.indexOf(vowels[i]) === -1) {
			return i
		}
	}
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), "0"); // missing a
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), "3"); // missing o
console.log(absentVowel("Graldin"), "1") // missing e