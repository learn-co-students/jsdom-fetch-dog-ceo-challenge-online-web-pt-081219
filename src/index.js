console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded', function(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        let imageCollection = [];
        const imageContainer = document.querySelector('#dog-image-container')

        for(let i = 0; i < json["message"].length; i++){
            let imageElement = document.createElement('img');
            imageElement.src = json["message"][i];
            imageContainer.appendChild(imageElement);
        }

    })

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        let messageArray = json["message"]
        let breedNames = [];
        const ulElement = document.querySelector('#dog-breeds')

        for (let i = 0; i < Object.keys(messageArray).length; i++) {
            let messageKey = Object.keys(messageArray)[i];
            let messageValues = messageArray[messageKey];

            if (messageValues.length > 0) {
                for (let i = 0; i < messageValues.length; i++) {
                    let breedName = `${messageValues[i]} ${messageKey}`
                    let liElement = document.createElement('li');
                    liElement.innerText = breedName;
                    liElement.addEventListener('click', changeColor)
                    ulElement.appendChild(liElement);
                }
            }
        }
    })

    function changeColor(e) {
        e.target.style.color = 'limegreen';
    }
})