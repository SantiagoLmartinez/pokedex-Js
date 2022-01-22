console.log('Test 00')

const _pokemonContainer = document.querySelector('.pokemon-container');
const _spinner = document.querySelector('.spinner-border'); 

const _previousPagination = document.querySelector('#previous-pagination');
const _nextPagination = document.querySelector('#next-pagination');

let offset = 1 ;
let limit = 8 ;

_previousPagination.addEventListener('click', () =>{
    if(offset != 1){
        offset -= 9;
        removeChildNodes(_pokemonContainer);
    fetchPokemons(offset,limit)
    }
})

_nextPagination.addEventListener('click', () =>{
    offset += 9;
    // _pokemonContainer.innerHTML = fetchPokemons(offset,limit)
    removeChildNodes(_pokemonContainer);
    fetchPokemons(offset,limit)

})

// funcion para llamar 1 pokemon
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then( res => res.json())
    .then(data => {createPokemon(data)
    _spinner.style.display = 'none';
    _previousPagination.style.display = 'block';
    _nextPagination.style.display = 'block';
    });    
}
// funcion para llamar varios pokemones
function fetchPokemons (offset,limit){
    _spinner.style.display = 'block';
    _previousPagination.style.display = 'none';
    _nextPagination.style.display = 'none';

    for(let i = offset; i <=  offset + limit; i++){
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
// funcion para eliminar tarjetas
function removeChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}
// fetchPokemon(1);
fetchPokemons(offset,limit);

console.log('Test 01 OK')