console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {

  //challenge 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
       json.message.forEach(imgsrc => {
        let container = document.getElementById('dog-image-container')
        let dogImg = document.createElement("img")
        dogImg.src = imgsrc 
        dogImg.width = "350"
        container.appendChild(dogImg)
       })
    });

    //challenge 2 & 3
    let breeds = []
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => {
        breeds = Object.keys(json.message)
        breeds.forEach(breed => {
          displayDogBreed(breed)
      })
    });

      function displayDogBreed(breed) {
          let ul = document.getElementById('dog-breeds')
          let li = document.createElement('li')
          li.innerText = breed
          li.onclick = function changeColor(li){
            li.target.style.color = "green"
          }
          ul.appendChild(li)
      };  

    //challenge 4 
    const dropDown = document.getElementById("breed-dropdown");

    dropDown.addEventListener('change', (e) => {
      // console.log(breeds[0][0])
      const selected = e.target.value
        let resultList = breeds.filter(breed => breed[0] === selected)
        let ul = document.querySelector('#dog-breeds');
        ul.innerHTML = "";
        resultList.forEach((el) => {
          displayDogBreed(el)
        })
      });

})