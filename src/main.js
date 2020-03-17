document.addEventListener('DOMContentLoaded', function(){

  const pokelist = document.getElementById('pokelist');

  fetch('https://pokeapi.co/api/v2/pokemon')
    .then( resp => resp.json())
    .then( handleResp );

  function handleResp(json) {
    renderPokemon(json.results)
    if (json.next) {
      fetch(json.next)
        .then( resp => resp.json())
        .then( handleResp )
    }
  }

  function renderPokemon(arrOfPokemon) {
    for (let i = 0; i < arrOfPokemon.length; i++){
      let li = document.createElement("li");
      li.innerText = arrOfPokemon[i].name;
      pokelist.appendChild(li);
    }
  }

})
