/* 
Create a function that takes in a word and returns the word with the first letter capitalized.

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.


Hint: Remember how we grabbed individual letters from the string in yesterday's problem. Combine that with modifying the first to be upper case. 

From: https://www.codewars.com/kata/595970246c9b8fa0a8000086/javascript
*/

/*
  @params: word - string 
  @returns: newWord - string with the first letter capitalized
  
  ? Are there other parts of the string capitalized that should be made lowercase?
*/

function capitalizeWord(word) {
	// access the first letter of the word and capitalize it
	// put it back together with the rest of the word
	// return the combined word transformation
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/*

Time complexity: O(n)
.slice() copies the array from start to end

*/

console.log(capitalizeWord("word"), "Word");
console.log(capitalizeWord("i"), "I");
console.log(capitalizeWord("geraldine"), "Geraldine");
