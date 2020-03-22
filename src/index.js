// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {
    let breeds = []

    function getImages(){
        const imageUrl = "https://dog.ceo/api/breeds/image/random/4";

        fetch(imageUrl)
        // turn output into json
        .then(response => response.json())
        // turn output from line 11 and do putImagesIntoDOM function
        .then(data => data.message.forEach(element => putImagesIntoDOM(element)))
    }

    function putImagesIntoDOM(image){
        const imageDiv = document.querySelector('#dog-image-container')
        const newImage = document.createElement('img')
        
        // assign src attribute of image tag to image URL passed into function
        newImage.src = image
        newImage.width = '100';
        // add image to div 
        imageDiv.appendChild(newImage)
    }

    function getBreeds(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'

        fetch(breedUrl)
        //turn fetch output into json
        .then(response => response.json())
        // take output from line 31 
        .then(data => {
            // gets object keys
            breeds = Object.keys(data.message)
            // passes keys into function that puts breeds into DOM
            putBreedsIntoDOM(breeds)
        })

    }

        function putBreedsIntoDOM(breeds){
            const breedUl = document.querySelector('#dog-breeds');
            removeChildren(breedUl)

            breeds.forEach(breed => addBreed(breed))
            getFilterLetter()
        }

        function removeChildren(element){ 
            // grab last child of ul 
            let child = element.lastElementChild;
            // while there are child elements 
            while (child){ 
                element.removeChild(child);
                // grab last child element
                child = element.lastElementChild;
            }
        }
        function addBreed(breed) {
            const breedUl = document.querySelector('#dog-breeds')
            const newLi = document.createElement('li');

            //assign innerText of li 
            newLi.innerText = breed 
            breedUl.appendChild(newLi);
            newLi.style.cursor = 'pointer';
            newLi.addEventListener('click', colorChange)
        }

        function colorChange(event) {
            event.targer.style.color = 'green'
        }

        function getFilterLetter(){
            const dropdown = document.querySelector('#breed-dropdown')
            dropdown.addEventListener('change', (event) => {
                filterBreeds(event.target.value)
            })
        }

        function filterBreeds(letter) {
            putBreedsIntoDOM(breeds.filter(breed => breed.startsWith(letter)))
        }

        getImages();
        getBreeds();


})

