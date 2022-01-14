/**
 * Implement a difference function, which subtracts one list from another and returns the result.
 * It should remove all values from list a, which are present in list b keeping their order.
 *
 * arrayDiff([1,2],[1]) == [2]
 *
 * If a value is present in b, all of its occurrences must be removed from the other:
 *
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 * arrayDiff([], [4,5]), [], "a was [], b was [4,5]"
 * arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"
 * arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"
 *
 * From: https://www.codewars.com/kata/523f5d21c841566fde000009
 *
 *  */

/* function arrayDiff(arr1, arr2) {
	return arr1.filter(a => !arr2.includes(a));
}
 */

function arrayDiff(arr1, arr2) {
	return arr1.reduce((acc, curr) => {
		if (!arr2.includes(curr)) {
			acc.push(curr);
		}
		return acc;
	}, []);
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]), "[1, 3]");
console.log(arrayDiff([], [4, 5]), "[]");
console.log(arrayDiff([3, 4], [3]), "[4]");
console.log(arrayDiff([1, 8, 2], []), "[1, 8, 2]");
