// Challenge 1
addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let message = json.message
        message.forEach( v => insertImg(v));
    })
})

function insertImg(v) {
    let dogContainer = document.querySelector("#dog-image-container")
    let dogImage = document.createElement("img")
    dogImage.src = v
    dogContainer.appendChild(dogImage)
}

// Challenge 2 & 3 & 4
addEventListener('DOMContentLoaded', function() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    function populateBreeds() {
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let message = json.message;
        let breeds = Object.keys(message)
        breeds.forEach( v => insertBreed(v));
    })
    .catch(err => {
        console.log(err)
    });
    }
    populateBreeds()


    let breedUl = document.querySelector('#dog-breeds')
    let dropdown = document.querySelector("#breed-dropdown")

    function insertBreed(v) {
        let breed = document.createElement('li')
        breed.innerText = v
        if (v.charAt(0) === dropdown.options[dropdown.selectedIndex].value) {
        breedUl.appendChild(breed)
        }
    };
 
    dropdown.addEventListener('click', function(e) {
        let selection = dropdown.options[dropdown.selectedIndex].value
        while (breedUl.firstElementChild) {
            breedUl.removeChild(breedUl.firstElementChild)
        }
        populateBreeds()
    })

    
/////////////////////////////////////////////////////////////////////////////////
    breedUl.addEventListener('click', function(e) {
        changeColor(e);
    })

    function changeColor(e) {
        e.target.style.color = color();
    }


    function color() {
        let a = Math.floor(Math.random() * 255)  
        let b = Math.floor(Math.random() * 255)
        let c = Math.floor(Math.random() * 255)
        return 'rgb(' + a + ',' + b + ',' + c + ')'
    }



});
