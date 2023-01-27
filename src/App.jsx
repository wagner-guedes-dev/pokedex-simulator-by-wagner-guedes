
import './App.css'
import Pokedex from './components/Pokedex'
import {useState, useEffect} from 'react'
import imageAllPokemons from './image/998181.jpg'
import imagePrimeiraGeracao from './image/1geracao.png'

function App() {

  const [generation, setGeneration] = useState(0) //0 == todos || 1 == 1°geracao  || 2 == 2°geracao || 3 == 3° geracao ....
  
  
  
  return (
    <div className="App">
      <Pokedex className='pokedex' generation={generation} setGeneration={setGeneration}/>
        <img src={imageAllPokemons} className={generation === 0 ? 'block' : null} />
        <img src={imagePrimeiraGeracao} className={generation === 1 ? 'block' : null} />
    </div>
  )
}

export default App
