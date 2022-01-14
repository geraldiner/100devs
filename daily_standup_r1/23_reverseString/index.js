/**
 * Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 
 * 
 * From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
 * 
 * ? What about empty strings?
 */

function reverseString(str) {
	// set up new str
	// iterate over str backwards
	// add each letter to new str
	// return new str

	let revStr = "";
	for (let i = str.length-1; i >= 0; i--) {
		revStr += str[i]
	}
	return revStr;
}

console.log(reverseString("Geraldine") == "enidlareG");
console.log(reverseString("FizzBuzz") == "zzuBzziF");
console.log(reverseString("I'll be home for Christmas") == "samtsirhC rof emoh eb ll'I");