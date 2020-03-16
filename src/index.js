console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breeds = [];


document.addEventListener("DOMContentLoaded", function() {
    const thisDiv = document.querySelector("#dog-image-container")
    const dropdown = document.getElementById("breed-dropdown");
    const thisUl = document.getElementById("dog-breeds");

    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => function() {
        json["message"].forEach(element => {
            var x = document.createElement("IMG")
            x.src = element;
            thisDiv.appendChild(x);
        });
      }());
      //^ image shit


      //v list shit
    dropdown.addEventListener("change", (event) => {
        updateBreedList(event.target.value);
    })
    
    function updateBreedList(firstLetter) {
        newBreeds = breeds.filter(breed => breed.startsWith(firstLetter));
        removeChildren(thisUl);
        setupLi(newBreeds);
    }

    function removeChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.lastChild);
        }
    }

    function setupLi(listOfBreeds) {
        listOfBreeds.forEach(element => {
            thisLi = document.createElement("li");
            thisLi.innerText = element;
            thisUl.appendChild(thisLi);
    
            thisLi.addEventListener("click", function changeColor() {
                this.style.color = "blue";
            });   
        })
    }

    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => {
        breeds = Object.keys(json["message"])
        setupLi(breeds)
      })
})
