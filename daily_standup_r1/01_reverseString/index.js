/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'


Bonus: Can you do it without built in array methods? 

From: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript 

? Will casing matter?
? How should empty strings be treated?

*/

/*

@params: str - given string to be reversed
@return: revStr - given string but reversed

*/

function reverseString(str) {
	// split the string into characters in an array
	// reverse the array of characters
	// join the array of characters
	// return str.split("").reverse().join("");

	// build a new string from given string
	// iterate over string backwards
	// return new string
	let revStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		revStr += str[i];
	}
	return revStr;
}

console.log(reverseString("world"), "dlrow");
console.log(reverseString("racecar"), "racecar");
console.log(reverseString("watermelon"), "nolemretaw");
