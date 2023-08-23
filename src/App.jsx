import { useState } from 'react'
import './App.css'
import Chip from '@mui/material/Chip';
import axios from 'axios'
import MediaCard from './components/mediacard/MediaCard';
import Habilidades from './components/habilidades/Habilidades';




//sx={{ backgroundColor: pokemonTypes[x.type.name] }}

function App() {


  const [pokemon, setPokemon] = useState("");
  const [nombrePokemon, setNombrePokemon]=useState("")

  const obtenerpokeon= ()=>{axios.get('https://pokeapi.co/api/v2/pokemon/'+ nombrePokemon)
  .then(function(response){
    
    setPokemon(response.data);
    
  })
  .catch(function(error){
    console.log(error)
  })
  .finally(function (){})
  };
  let arregloT= pokemon.types
  let arregloA= pokemon.abilities
  
  


  return (
    <>
      <header>
        <div>
          <img className="logo" src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="logopokemon" />
        </div>
        <div className='search'>
          <input className='inputs' placeholder='Ingrese el pokemon' onChange={(e)=>setNombrePokemon(e.target.value)}/>
          <div className='pokebola'>

           <button className='searchbutton' onClick={obtenerpokeon}></button>
          </div>
        </div>
      </header>

      {pokemon &&
        
        <section className='descriptionContainer'>
       
      

        <MediaCard
        pokelogo={pokemon.sprites.front_default} 
        iShiny={pokemon.sprites.front_shiny}
        pokeName={pokemon.name}
        arrregloT={arregloT}
        
       />
        
        <div>
          <Habilidades
          arregloA={arregloA}

          />
      </div>
    
        </section>


      }
      
    
      
    </>
  )

  









  
};
  


export default App
