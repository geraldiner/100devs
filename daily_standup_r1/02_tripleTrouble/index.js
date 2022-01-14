/* 
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

From: https://www.codewars.com/kata/5704aea738428f4d30000914/javascript 


*/

/*

@params: first - first string input
@params: second - second string input
@params: third - third string input
@return: combined - string that incorporates the string groupings

*/

function tripleTrouble(first, second, third) {
	// instantiate new string
	// loop over the letters in the string - all the same length
	// add/concatenate each letter at that index to form a new string
	// return new string
	let combined = "";
	for (let i = 0; i < first.length; i++) {
		combined += first[i] + second[i] + third[i];
	}
	return combined;
}

/*

Time complexity: O(n)
Single for-loop to iterate over all letters in the strings
Access all letters in the same position at the same time

*/

console.log(tripleTrouble("aa", "bb", "cc"), "abcabc");
console.log(tripleTrouble("sea", "urn", "pms"), "supermans");
console.log(tripleTrouble("gai", "eln", "rde"), "geraldine");
