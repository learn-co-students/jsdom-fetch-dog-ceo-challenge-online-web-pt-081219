let breeds = [];

document.addEventListener("DOMContentLoaded", function () {
    fetchImages();
    fetchBreeds();
    let ul = document.getElementById("dog-breeds");
    let selectBox = document.getElementById("breed-dropdown");

    ul.addEventListener("click", changeColor);
    selectBox.addEventListener("change", selectBreeds);
});

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
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

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        breeds = Object.keys(json["message"]);
        renderBreeds(breeds);
    })
}

function renderBreeds(breedsArray) {
    const breedsUl = document.getElementById("dog-breeds");

    while (breedsUl.firstChild) {
        breedsUl.removeChild(breedsUl.firstChild);
    }

    for (let i = 0; i < breedsArray.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${breedsArray[i]}`;
        li.style.cursor = 'pointer';
        breedsUl.appendChild(li);
    }
}

function changeColor(event) {
    console.log("hi");
    let color = event.target.style.color;
    if (color == "red") {
        event.target.style.color = "black";
    }
    else {
        event.target.style.color = "red";
    }
}

function selectBreeds(event) {
    let letter = event.target.value;
    let newBreeds = breeds.filter(breed => breed.startsWith(letter));
    renderBreeds(newBreeds);
}