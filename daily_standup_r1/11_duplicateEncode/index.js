/**
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 * 
 * Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
 * 
 * From: 
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript 
 *  */

function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split("")
		.map((e, i, a) => {
			if (a.indexOf(e) === a.lastIndexOf(e)) {
				return "(";
			} else {
				return ")";
			}
		})
		.join("");
}

console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())");
console.log(duplicateEncode("(( @"), "))((");
