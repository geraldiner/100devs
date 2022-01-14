/**
 * Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
 *
 * "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" --> "alpha beta gamma delta alpha beta gamma delta"
 *
 * From: https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/
 *
 *  */

/* function removeConsecutiveDupe(s) {
	const words = s.split(" ");
	return words
		.reduce((acc, curr) => {
			if (acc.length === 0 || acc[acc.length - 1] !== curr) {
				acc.push(curr);
			}
			return acc;
		}, [])
		.join(" ");
} */

function removeConsecutiveDupe(s) {
	return s
		.split(" ")
		.filter((el, i, arr) => arr[i - 1] !== el)
		.join(" ");
}

console.log(
	removeConsecutiveDupe("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"),
	" || alpha beta gamma delta alpha beta gamma delta",
);
