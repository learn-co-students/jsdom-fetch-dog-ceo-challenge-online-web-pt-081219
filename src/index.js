document.addEventListener("DOMContentLoaded", function() {
  fetchImg()
  fetchBreeds()
})

function fetchImg() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(result => {
      result.message.forEach(img => renderImage(img))
    })
}

function renderImage(dogUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogUrl;
  container.appendChild(newImageEl);
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(result => {
      breeds = Object.keys(result.message);
      breeds.forEach(breed => listBreed(breed))
    })
}

function listBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  ul.appendChild(li);
}
