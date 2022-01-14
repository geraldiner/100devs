/**
 * Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
 * 
 * From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
 */

/**
 * ? Are there any limits? ie. [-infinity, infinity]?
 * ? What to do if it's negative? Will it ever be negative?
 * ? What to do if it's 0? 
 */

function fizzBuzz(n) {
	// loop from 1 to n
	// if it's divisible by 2 and 3, print "Fizz Buzz"
	// if it's divisible by 2, print "Fizz"
	// if it's divisible by 3, print "Buzz"
	let str = [];
	for (let i = 1; i <= n; i++) {
		if (i % 2 === 0 && i % 3 === 0) {
			str.push("Fizz Buzz");
		} else if (i % 2 === 0) {
			str.push("Fizz");
		} else if (i % 3 === 0) {
			str.push("Buzz");
		} else {
			str.push(i);
		}
	}
	return str.join(", ")
}



console.log(fizzBuzz(5), "||", "1, Fizz, Buzz, Fizz, 5")
console.log(fizzBuzz(15), "||", "1, Fizz, Buzz, Fizz, 5, Fizz Buzz, 7, Fizz, Buzz, Fizz, 11, Fizz Buzz, 13, Fizz, Buzz")