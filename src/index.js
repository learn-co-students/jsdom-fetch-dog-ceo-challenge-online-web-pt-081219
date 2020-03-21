document.addEventListener('DOMContentLoaded', (event) => {
  // declares an array to hold all the breeds
  let breeds = []

  function getImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
      // Take the output from the fetch and THEN turn it into json
      .then(response => response.json())
      // Take the output from the previous then (called data) and THEN do this stuff
      .then(data => data.message.forEach(element => putImagesIntoDOM(element)))
  }

  function putImagesIntoDOM(imageURL){
    // Grab various elements
    const imageDiv = document.querySelector('#dog-image-container')
    const newImage = document.createElement('img')
    const lineBreak = document.createElement('br')

    // Assign the src attribute of the img tag to the URL passed into this function
    newImage.src = imageURL
    // Changes the width because these images were huge
    newImage.width = '100'
    // Adds the new image to the div
    imageDiv.appendChild(newImage)
  }

  function getBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    // Take the output from fetch and THEN turn it into json
      .then(response => response.json())
      // take the output from the previous then (called data) and then do stuff
      .then(data => {
        // Grabs the keys from the object (called data)
        breeds = Object.keys(data.message)
        // passes those keys into a function that puts breeds into the DOM
        putBreedsIntoDOM(breeds)
      })
  }

  function putBreedsIntoDOM(breeds){
    const breedUL = document.querySelector('#dog-breeds')

    // This removeChild function is essential to make the
    // dropdown selector working properly
    removeChildren(breedUL)

    breeds.forEach(breed => addBreed(breed))
    // Note, not using a separate function for addBreed only
    // output the last item in the array, not sure why.
    // This method will output the whole array.
    getFilterLetter()
  }

  function removeChildren(element) {
    // This grabs the last child item of the ul
    let child = element.lastElementChild;
    // While there are child elements, keep going
    while (child) {
      // remove the element
      element.removeChild(child);
      // Grab the new last child element
      child = element.lastElementChild;
    }
  }

  function addBreed(breed) {
    // grabs some elements
    const breedUL = document.querySelector('#dog-breeds')
    const newLI = document.createElement('li')
    // assigns the inner text of the new li with the first element in the array
    newLI.innerText = breed
    // Adds the new li to the ul
    breedUL.appendChild(newLI)
    // Changes the cursor so its more obvious that something happens upon clicking
    newLI.style.cursor = 'pointer';
    // Event listener to change color upon click
    newLI.addEventListener('click', colorChange)
  }

  function colorChange(event){
    event.target.style.color = 'purple'
  }

  function getFilterLetter() {
    // grabs the dropdown element
    const dropdown = document.querySelector('#breed-dropdown')
    // attaches an event listener
    dropdown.addEventListener('change', (event) => {
      // passes the dropdown value (called letter) upon event (change) into the filterBreeds function
      filterBreeds(event.target.value)
    })
  }

  function filterBreeds(letter) {
    // reuses the putBreedsIntoDom function to obtain output
    // filters breeds via letter
    putBreedsIntoDOM(breeds.filter(breed => breed.startsWith(letter)))
  }
  
  // Calls funtions to get things working
  getImages();
  getBreeds();
})
