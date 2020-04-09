console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
   fetchImage()
   fetchBreed()
})

function fetchImage() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json()) //returns the content from the response
  .then(json => renderImage(json));
}

function renderImage(json) {
  let container = document.getElementById('dog-image-container')
  json.message.forEach(image => {
    let imgTag = document.createElement('img')
    imgTag.setAttribute('src', image)
    imgTag.setAttribute('width', '500px')
    container.appendChild(imgTag)
  })
}

function fetchBreed() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => (breeds = Object.keys(json.message)))
  .then(() => renderBreed(breeds))
}

function renderBreed(breeds) {
  let ul = document.getElementById('dog-breeds')
  breeds.forEach(breed => {
    let li = document.createElement('li')
    li.innerText = breed
    ul.appendChild(li)
  })
}
