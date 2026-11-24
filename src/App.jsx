import { useState } from 'react'
import './App.css'
import PokemonApplication from './PokemonApplication'
import Pokemon from './Pokemon'

function App() {

  const [start, setStart] =useState (false)

  
  return (
    <>
    <h1>Pokemon Application</h1>
    {!start && 
    <button className ="startButton" onClick = {() => setStart(true)}> Starta Pokémon Applikation </button>
    }
    {start && <PokemonApplication />}


    </>
  )
}

export default App
