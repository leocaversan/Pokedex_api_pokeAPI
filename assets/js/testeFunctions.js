const id =  1;
const url = `https://pokeapi.co/api/v2/pokemon/${id}`

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    const leghtStats = (pokeDetail.stats)
    pokemon.stats.base_stat = pokeDetail.stats[0].base_stat
    pokemon.stats.name = pokeDetail.stats[0].stat.name
    console.log(pokemon);    
    
    return pokemon
}



fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .then(convertPokeApiDetailToPokemon)
    
    // .then((pokemonList) => pokemons.map(pokeApi.getPokemonDetail))
    // .then((detailRequests) => Promise.all(detailRequests))
    // .then((pokemonsDetails) => pokemonsDetails)
    .catch(function (err) {console.log(err)});