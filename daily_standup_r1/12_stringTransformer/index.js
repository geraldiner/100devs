/**
 * Given a string, return a new string that has transformed based on the input:
 *
 * Change case of every character, ie. lower case to upper case, upper case to lower case. Reverse the order of words from the input.
 * Note: You will have to handle multiple spaces, and leading/trailing spaces.
 *
 * For example:
 * "Example Input" ==> "iNPUT eXAMPLE"
 *
 * You may assume the input only contain English alphabet and spaces.
 *
 * From: https://www.codewars.com/kata/5878520d52628a092f0002d0/
 *
 *  */

function stringTransformer(str) {
	return str
		.split(" ") // separate words
		.reverse() // reverse the words
		.join(" ") // join the words
		.split("") // split the characters
		.map(x => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())) // if the letter is lowercase, change to uppercase, vice versa
		.join(""); // join the characters
}

console.log(stringTransformer("Example Input") === "iNPUT eXAMPLE");
console.log(stringTransformer("HEllO WORld") === "worLD heLLo");
console.log(stringTransformer("See YOU at Standup!") === "sTANDUP! AT you sEE");
