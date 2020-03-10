//const breeds = document.getElementsByTagName("li");

document.addEventListener("DOMContentLoaded", function () {
    fetchImages();
    fetchBreeds();
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
    .then(json => renderBreeds(json))
}

function renderBreeds(json) {
    const breeds = document.getElementById("dog-breeds");

    let breedsArray = Object.keys(json["message"]);

    for (let i = 0; i < breedsArray.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${breedsArray[i]}`;
        li.style.cursor = 'pointer';
        breeds.appendChild(li);
        li.addEventListener("click", changeColor);
    }
}

function changeColor(event) {
    let color = event.target.style.color;
    if (color == "red") {
        event.target.style.color = "black";
    }
    else {
        event.target.style.color = "red";
    }
}