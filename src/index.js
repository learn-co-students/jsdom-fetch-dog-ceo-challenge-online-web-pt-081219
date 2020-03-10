console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const breeds = document.getElementsByClassName("breeds");

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderImages(json) {
    const images = document.getElementById("dog-image-container");

    let imagesArray = json["message"];
    
    for (let i = 0; i < imagesArray.length; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", `${imagesArray[i]}`);
        images.appendChild(img);
    }
}

function renderBreeds(json) {
    const breeds = document.getElementById("dog-breeds");

    let breedsArray = Object.keys(json["message"]);

    for (let i = 0; i < breedsArray.length; i++) {
        const li = document.createElement("li");
        li.setAttribute("class", "breeds")
        li.innerHTML = `${breedsArray[i]}`;
        breeds.appendChild(li);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
});

for(let i = 0; i < breeds.length; i++) {
    breeds[i].addEventListener("click", function(e) {
        e.preventDefault();
        breeds[i].innerHTML = "change";
    });
}