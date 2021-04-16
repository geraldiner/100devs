// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function checkNumbers(arr) {
  if (arr[0] < arr[1]) {
    alert("Hi");
  } else if (arr[0] > arr[1]) {
    alert("Bye");
  } else {
    alert("We close in an hour");
  }
}

checkNumbers([1, 2])
checkNumbers([10, 2])
checkNumbers([2, 2])