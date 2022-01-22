console.log('Test js')

const _pokemonContainer = document.querySelector('.pokemon-container');
// const _spinner = document.querySelector('.spinner-border'); 

// funcion para llamar 1 pokemon
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then( res => res.json())
    .then(data => {createPokemon(data)})    
}
// funcion para llamar varios pokemones
function fetchPokemons (number){
    for(let i = 1; i <= number; i++){
        fetchPokemon(i);
        // console.log(fetchPokemon(i))
    }
}
// funcion para crear tarjeta con pokemon en DOM
function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block')

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.classList.add('number-pokemon')
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`

    const name = document.createElement('p');
    name.classList.add('name')
    name.textContent = `${pokemon.name}`

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.append(name);

    _pokemonContainer.appendChild(card);    
}

// fetchPokemon(1);
fetchPokemons(9);