
import './App.css'
import Pokedex from './components/Pokedex'
import {useState, useEffect} from 'react'
import imageAllPokemons from './image/998181.jpg'
import imagePrimeiraGeracao from './image/1geracao.png'

function App() {

  const [generation, setGeneration] = useState(0) //0 == todos || 1 == 1°geracao  || 2 == 2°geracao || 3 == 3° geracao ....
  
  useEffect(()=>{
    imageAllPokemons
    imagePrimeiraGeracao
  },[])
  
  return (
    <div className="App">
      <Pokedex className='pokedex' generation={generation} setGeneration={setGeneration}/>
        {generation === 0 ? <img src={imageAllPokemons}/> : null}
        {generation === 1 ? <img src={imagePrimeiraGeracao}/> : null}
    </div>
  )
}

export default App
