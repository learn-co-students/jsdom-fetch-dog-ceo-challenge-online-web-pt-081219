let breeds = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
  getImages()
  addImages()
  getBreeds()
  dropDown(breeds)
})

function getImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => {
    json.message.forEach(image => addImages(image))
  })
}

function addImages(dogPicUrl) {
  let container = document.querySelector('#dog-image-container');
  let newImage = document.createElement('img');
  newImage.src = dogPicUrl;
  container.appendChild(newImage);
}

function getBreeds() {
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
    breeds = Object.keys(json.message)
    Object.keys(json.message).forEach(breed => addBreeds(breed))
  })
}

function updateBreeds(letter) {
  console.log('breeds', breeds)
  let ul = document.querySelector('#dog-breeds');
  // debugger
  // remove children from ul
  // ul.removeChild((item, i) => {console.log(item)
  //
  // });

  let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
  ul.innerHTML = ''
  filteredBreeds.forEach(breed => addBreeds(breed))
  console.log('filteredBreeds', filteredBreeds)
}

function breedStartsWith() {
  let ul = document.querySelector('#dog-breeds');
  let filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
}

function addBreeds(breed) {
  // console.log(breed)
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'palevioletred'
  // console.log(event.target)
}

function dropDown() {
  let dropDown = document.getElementById("breed-dropdown")
  dropDown.addEventListener('change', (event) => {updateBreeds(event.target.value)})
}


// Remove everything from ul
// filter out breeds that dont make first letter
// render only breeds start with letter
// string.startsWith(letter)
