//Write your pseduo code first! 
let p = document.querySelector('#temperature');
let btn = document.querySelector('#submitTemp');
let input = document.querySelector('#inputTemp');
let form = document.querySelector('form');

btn.addEventListener('click', displayTemp);

function displayTemp(e) {
  e.preventDefault();
  let celsius = parseInt((input.value - 32) * (5 / 9));
  p.textContent = `${input.value}°F is ${celsius}°C.`;
  form.reset();
}