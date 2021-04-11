//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

function checkAge(age) {
  let str = `sorry, at age ${age} `;
  if (age < 16) {
    str += "you can\'t drive";
  } else if (age < 18) {
    str += "you can\'t hate from outside the club, because they can\'t even get in";
  } else if (age < 21) {
    str += "you can\'t drink";
  } else if (age < 25) {
    str += "you can\'t rent cars affordably";
  } else if (age < 30) {
    str += "you can\'t rent fancy cars affordably";
  } else if (age > 30) {
    str += "there\'s nothing left to look forward to";
  }
  return str;
}

checkAge(27);
checkAge(35);

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let h1 = document.querySelector('h1').addEventListener('click', displayAge);

function displayAge(e) {
  let input = document.querySelector('#danceDanceRevolution').value;
  let p = document.querySelector('p');
  if (input) {
    p.textContent = checkAge(input);
  }
}