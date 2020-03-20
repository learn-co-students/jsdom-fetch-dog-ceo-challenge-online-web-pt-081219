console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breeds = [];


document.addEventListener("DOMContentLoaded", function() {
    const thisDiv = document.querySelector("#dog-image-container")
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => function() {
        json["message"].forEach(element => {
            var x = document.createElement("IMG")
            x.src = element;
            thisDiv.appendChild(x);
        });
      }());

    const dropdown = document.getElementById("breed-dropdown");
    const thisUl = document.getElementById("dog-breeds");

    dropdown.addEventListener("change", function(event) {
        firstLetter = event.target.value;
        breeds.filter(breed => breed.startsWith(firstLetter))
    })

    function updateBreedList() {
        
    }
    //call on remove children
    //then use updated breed list to 
    //use setupLI

    function removeChildren() {

    }
    //remove each child individually

    function setupLi(listOfBreeds) {
        listOfBreeds.forEach(element => {
            thisLi = document.createElement("li");
            thisLi.innerText = element;
            thisUl.appendChild(thisLi);
    
            thisLi.addEventListener("click", function changeColor() {
                this.style.color = "blue";
                console.log("click")
            });   
        })
    }

    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => function() {
        console.log(json);
        breeds = Object.keys(json["message"])
      }())
})
