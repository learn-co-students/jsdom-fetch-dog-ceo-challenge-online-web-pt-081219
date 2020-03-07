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