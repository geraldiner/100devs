//Get a dog photo from the dog.ceo api and place the photo in the DOM

async function setDogPhoto() {
  let dogPhoto = await fetchDogInfo();
  const img = document.querySelector('img');
  img.src = dogPhoto.message;
}


async function fetchDogInfo() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  try {
    let dogStream = await fetch(url);
    let dogJson = await dogStream.json();
    return dogJson;
  } catch (err) {
    return { Error: error.stack }
  }
}

window.addEventListener('load', setDogPhoto)