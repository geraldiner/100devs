/**
 * You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
 *
 * For example:
 * dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
 * dup(["kelless","keenness"]) = ["keles","kenes"].
 *
 * Strings will be lowercase only, no spaces
 *
 * dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
 * dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
 * dup(["kelless","keenness"]), ['keles','kenes'])
 *
 * From: https://www.codewars.com/kata/59f08f89a5e129c543000069 */

function dup(s) {
	return s.map(s => {
		return s
			.split("")
			.filter((x, i, a) => a[i - 1] !== x)
			.join("");
	});
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]), ["codewars", "picaniny", "hubububo"]);
console.log(dup(["abracadabra", "allottee", "assessee"]), ["abracadabra", "alote", "asese"]);
console.log(dup(["kelless", "keenness"]), ["keles", "kenes"]);
