/* 
Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

Ex.
'eloquent' => 'loquen'
'country' => 'ountr'
 


Hint: Use the method from yesterday's problem

From: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/javascript 

*/

/*

  @params: str - given string to remove chars

? What happens with strings that are less than two or less characters?

*/

function removeChar(str) {
	// remove the first character
	// remove the second character
	// return the result
	//   return str.substr(1,str.length-2)
	return str.slice(1, -1);
}

/* 

Time complexity: O(n)
Run through start - end to copy the string once

*/

console.log(removeChar("eloquent"), "loquen");
console.log(removeChar("country"), "ountr");
console.log(removeChar("geraldine"), "eraldin");
