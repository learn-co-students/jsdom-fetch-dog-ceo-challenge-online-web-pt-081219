console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", function() {
    const thisDiv = document.querySelector("#dog-image-container")
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => function addPhotos() {
        json["message"].forEach(element => {
            var x = document.createElement("IMG")
            x.src = element;
            thisDiv.appendChild(x);
        });
      }());

    const thisUl = document.getElementById("dog-breeds");
    fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => function setupBreeds(x = undefined) {
        if (x = undefined) {
            Object.keys(json["message"]).forEach(element => {
                thisLi = document.createElement("li");
                thisLi.innerText = element;
                thisUl.appendChild(thisLi);
                
                thisLi.addEventListener("click", function changeColor() {
                    this.style.color = "blue";
                    console.log("click")
                });   
            })
        }
        
        else {
            Object.keys(json["message"]).forEach(element => {
                if (element[0] === x) {
                    thisLi = document.createElement("li");
                    thisLi.innerText = element;
                    thisUl.appendChild(thisLi);
                    
                    thisLi.addEventListener("click", function changeColor() {
                        this.style.color = "blue";
                        console.log("click")
                    });   
                }
            })
        }

        })
      }())
