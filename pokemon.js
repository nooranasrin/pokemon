const pokemonData = require('./pokemon.json');

const types = {
  bug: ['Bugs', '146,217,57'],
  dragon: ['Dragon', '0,67,164'],
  electric: ['Electric', '255,255,0'],
  fairy: ['Fairy', '255,131,255'],
  fighting: ['Fighting', '146,57,77'],
  fire: ['Fire', '220,138,0'],
  flying: ['Flying', '102,169,233'],
  ghost: ['Ghost', '77,77,164'],
  grass: ['Grass', '0,170,0'],
  ground: ['Ground', '159,95,0'],
  ice: ['Ice', '159,212,210'],
  normal: ['Normal', '179,179,179'],
  poison: ['Poison', '120,0,164'],
  psychic: ['Psychic', '243,85,115'],
  rock: ['Rock', '133,125,80'],
  steel: ['Steel', '23,125,138'],
  water: ['Water', '23,125,220']
};

const append = function(type) {
  return `<div style="background-image: linear-gradient(rgb(${types[type][1]}) 1%, white);"><p>${type}<p></div>`;
};

const getTypes = function(pokemon) {
  return pokemon.types.map(append);
};

const showPokemon = function(pokemon) {
  const a = getTypes(pokemon).join('');
  console.log(
    `<div class='pokemon'> <div class='front'>
          <h1>${pokemon.name}</h1>
          <img src="${pokemon.art_url}" alt="" height="50%" weight="50%">
          <div class="type">${a}</div>
          </ul>
        </div>
        <div class='back'>
          <p>${pokemon.description}<p>
        </div>
      </div>`
  );
};

pokemonData.forEach(showPokemon);
