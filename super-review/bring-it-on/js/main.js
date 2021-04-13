// *Variables*
// Create a variable and console log the value
let cheese = 10;
console.log(cheese);

// Create a variable, add 10 to it, and alert the value
let milk = 3;
milk += 10;
alert(milk)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function substractsFourNumbers(w, x, y, z) {
  alert(w - x - y - z);
}

// Create a function that divides one number by another and returns the remainder

function modulous(x, y) {
  return x % y;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function isItJumanji(x, y) {
  let sum = x + y;
  if (sum > 50) {
    alert("Jumanji");
  }
}

isItJumanji(32, 234);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function divisibleByThree(x, y, z) {
  let product = x * y * z;
  if (product % 3 === 0) {
    alert('ZEBRA');
  }
}

divisibleByThree(3, 4, 6);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function printMultiple(word, n) {
  for (let i = 0; i < n; i++) {
    console.log(word);
  }
}