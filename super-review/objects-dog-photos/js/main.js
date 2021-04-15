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
  } catch (error) {
    return { Error: error.stack }
  }
}

async function getDogPhoto() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  let src = '';
  let dogData = await fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      return { Error: error.stack }
    })
  if (dogData.status === 'success') {
    const img = document.querySelector('img');
    img.src = dogData.message;
  } else {
    console.log(dogData)
  }
}

window.addEventListener('load', getDogPhoto)