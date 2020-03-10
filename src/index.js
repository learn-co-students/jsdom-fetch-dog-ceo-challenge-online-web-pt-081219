console.log('%c HI', 'color: firebrick')

//Challenge 1
/*
function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => renderDogs(json));
}
function renderDogs(json) {
    const body = document.querySelector('body')
    json.message.forEach(message => {
        const image = document.createElement('img');
        image.src = `${message}`;
        body.appendChild(image);
    })
}
*/

//Challenge 2

function fetchBreeds(letter = null) {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(function (json) {
            if (letter !== null) {
                all = Object.keys(json.message)
                dogBreeds = all.filter((breed) => breed.startsWith(letter))
            } else {
                dogBreeds = Object.keys(json.message)
            } ;
            console.log(dogBreeds)
            renderBreeds(dogBreeds);
        });
};

function renderBreeds(dogBreeds) {
    const ul = document.querySelector('ul#dog-breeds')
    ul.innerHTML = ""
    dogBreeds.forEach(dog => {
        const breed = document.createElement('li');
        breed.innerHTML = `<li>${dog}</li>`;
        ul.appendChild(breed);
    })
};

//Challenge3
function fontColor(e) {
    e.target.style.color = "purple";
};

//Challenge4
function filterDogs(event) {
    const letter = event.target.value;
    console.log(letter);
    fetchBreeds(letter);
};


document.addEventListener('DOMContentLoaded', function () {
    const dogBreeds = []
    //Challenge1
        //fetchDogs()
    //Challenge2
    fetchBreeds()
    //Challenge3
    document.querySelector('ul#dog-breeds').addEventListener('click', fontColor);
    //Challenge4
    const dropdown = document.querySelector('select#breed-dropdown');
    dropdown.addEventListener('change', filterDogs);
});
