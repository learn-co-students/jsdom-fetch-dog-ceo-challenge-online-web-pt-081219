console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', ()=>{
    let image_section = document.getElementById('dog-image-container');
    fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(resp => resp.json())
  .then(function(json){
      for (var i = 0; i < json.message.length; i++){
         console.log(json.message[i]);
         let newImage = document.createElement('IMG');
        newImage.src = json.message[i];
        image_section.appendChild(newImage);
        
      }
  });
  let breed_section = document.getElementById('dog-breeds');
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(function(json){
      console.log(json.message)
  });
})