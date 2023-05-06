const pokemonContent = document.getElementById('detail_class');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

function createdHMTLContentPokemonBaseStats(pokemon){
    return `
    <div class="pokemon ${pokemon.type}">
    <div class="divButtonBack">
        <span> 
            <button onclick="backListPokemon()" class="buttonVoltarDatail">
                voltar
            </button> 
        </span>
    
        <div class="namePokemon">
            <li class="pokemon">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        </div>

        <div class="sectionDetail">
            <div class="detatil">
            <button id="About" class="buttonDatailMovHab">About</button>
            <button id="Base_Movies" class="buttonDatailMovHab">Base Stats</button>
            <button id="Evolution" class="buttonDatailMovHab">Evolution</button>
            <button id="Moves" class="buttonDatailMovHab">Moves</button>
            </div>
            <div>
                <table class="tabbleHab">
                    <tbody>
                        <tr class="listAbilyt">
                            <th>${pokemon.stats[0].stat.name}</th>
                            <th><progress id="file" value="${pokemon.stats[0].base_stat}" max="100"></progress></th>
                        </tr>   
                        <tr class="listAbilyt">
                            <th>${pokemon.stats[1].stat.name}</th>
                            <th><progress id="file" value="${pokemon.stats[1].base_stat}" max="100"></progress></th>
                        </tr>   
                        <tr class="listAbilyt">
                            <th>${pokemon.stats[2].stat.name}</th>
                            <th><progress id="file" value="${pokemon.stats[2].base_stat}" max="100"></progress></th>
                        </tr>   
                        <tr class="listAbilyt">
                            <th>${pokemon.stats[3].stat.name}</th>
                            <th><progress id="file" value="${pokemon.stats[3].base_stat}" max="100"></progress></th>
                        </tr>   
                        <tr class="listAbilyt">
                            <th>${pokemon.stats[4].stat.name}</th>
                            <th><progress id="file" value="${pokemon.stats[4].base_stat}" max="100"></progress></th>
                        </tr>
                        <tr class="listAbilyt">
                            <th>${pokemon.stats[5].stat.name}</th>
                            <th><progress id="file" value="${pokemon.stats[5].base_stat}" max="100"></progress></th>
                        </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
    
`
}


function loadPokemonContent(id) {
    pokeApi.getPokemonsContentByID(id).then((pokemon) => {
        console.log(pokemon);
        const newHtml = createdHMTLContentPokemonBaseStats(pokemon);
        pokemonContent.innerHTML += newHtml
    })
}

function backListPokemon(){
    window.location.href = "./index.html";
}

loadPokemonContent(id);
