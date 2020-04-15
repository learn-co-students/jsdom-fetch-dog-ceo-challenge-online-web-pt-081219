const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener("DOMContentLoaded", function(){
    fetchImgs();
    fetchBreeds();
});

function fetchImgs(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => addImgs(json));
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        let breeds = Object.keys(data.message)
        showBreeds(breeds)
    })
}

function showBreeds(breeds){
    const ul = document.getElementById("dog-breeds")
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed
        ul.appendChild(li);

        li.addEventListener('click', function() {
            this.style.color = '#ffbaaf'
        })
    })
}
    

function addImgs(json){
    const main = document.getElementById("dog-image-container")
    json.message.forEach(pic => {
        const img = document.createElement("img")
        img.setAttribute("src", pic)
        img.setAttribute("height", "400px")
        img.setAttribute("width", "400px")
        main.appendChild(img);
    });
}

// NEED TO DO CHALLENGE 4
