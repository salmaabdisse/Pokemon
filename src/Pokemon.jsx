import './pokemon.css'

function Pokemon ({pokemon}) {

    return (
        
    pokemon && <div className="pokemonCard">
        <div className = "pokemonImg" ><img src={pokemon.sprites.front_default} alt = {pokemon.name}/> </div>
        <p><strong>Name: </strong> {pokemon.name}</p>
        <p><strong>Weight: </strong> {pokemon.weight}</p>
        <p><strong>Height: </strong> {pokemon.height}</p>
     <p><strong>Type/Types: </strong> {pokemon.types?.map((type)=> type.type.name + " " )}</p>
     
     </div>
)




}

export default Pokemon