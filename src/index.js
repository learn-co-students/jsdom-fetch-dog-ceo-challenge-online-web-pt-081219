console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchImage()
    fetchBreeds()
})


function fetchImage() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImage(json));
}

function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => (breeds = Object.keys(json.message)))
    .then(() => renderBreeds(breeds))
}

function renderImage(json) {
    const main = document.getElementById('dog-image-container')
    json.message.forEach(image =>{
        const img = document.createElement('img')
        img.setAttribute('src', image)
        img.setAttribute('width', '300px')
        main.appendChild(img)
    })
}

function renderBreeds(breeds){
    const ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)

        li.addEventListener('click', function() {
            this.style.color = 'pink'
        })
    })
}

function filterBreeds(){
    const selector = document.getElementById('breed-dropdown')
    const breedList = document.querySelectorAll('#dog-breeds li')
    
    breedList.forEach(breed => function(){
        
    })
}