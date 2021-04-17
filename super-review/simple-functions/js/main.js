//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtract(x, y) {
  alert(`${x} - ${y} = ${x - y}`);
}

//create a function that divides three numbers and console logs the quotient

function divide(x, y, z) {
  console.log(`${x} ÷ ${y} ÷ ${z} = ${x / y / z}`);
}

//create a function that multiplys three numbers and returns the product

function multiply(x, y, z) {
  return `${x} * ${y} * ${z} = ${x * y * z}`;
}

// subtract(234, 433);
// divide(48, 3, 4);
// console.log(multiply(2, 4, 1));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function doMath(x, y, z) {
  return `(${x} + ${y}) ÷ ${x} = ${(x + y) / z}`;
}

// console.log(doMath(6, 12, 3));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function doMoreMath(w, x, y, z) {
  let product = w * x;
  if (product > 100) {
    console.log(`${product} > 100; ${y} + ${z} = ${y + z}`);
  } else if (product < 100) {
    console.log(`${product} < 100; ${y} - ${z} = ${y - z}`);
  } else {
    alert(`${product} = 100; (${w} * ${x} * ${y}) % ${z} = ${(w * x * y) % z}`);
  }
}

let w = parseInt(Math.random() * 100);
let x = parseInt(Math.random() * 100);
let y = parseInt(Math.random() * 100);
let z = parseInt(Math.random() * 100);

doMoreMath(w, x, y, z)