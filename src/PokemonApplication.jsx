  import { useState, useEffect } from "react";
  import Pokemon from "./Pokemon";
  import './pokemonapplication.css'
  
  function PokemonApplication() {
  
  const [pokemon, setPokemon] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
     setPokemon(data.results);
    };
    getPokemon();

    
  }, []);



  const getPokemon = async () => {
    let res = await fetch (chosenPokemon);
    let pokemonData = await res.json();
    setPokemonInfo(pokemonData);
  }
  
return (
    <>

    {pokemon && ( 
        <div className="pokemonApplication">

    <select className ="selectPokemon" onChange = {(e) => setChosenPokemon(e.target.value)}>
        <option value=""> Välj en Pokémon</option>
       
        {pokemon?.map((pokemon, index) => (
            <option key={index} value= {pokemon.url}>{pokemon.name}</option>
        ))}
        
        </select>

        <button className="getPokemonButton" onClick= {getPokemon} >Hämta info om Pokémon</button>

        <Pokemon pokemon={pokemonInfo}/>
        </div>
        )}
  </>
);
 
}
  


  export default PokemonApplication