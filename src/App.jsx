
import './App.css'
import Pokedex from './components/Pokedex'
import {useState} from 'react'
import imageAllPokemons from './image/998181.jpg'
import imagePrimeiraGeracao from './image/1geracao.png'
import imageSegundaGeracao from './image/2geracao.jpg'
import imageTerceiraGeracao from './image/3geracao.jpg'
import imageQuartaGeracao from './image/4geracao.jpg'
import imageQuintaGeracao from './image/5geracao.jpg'
import imageSextaGeracao from './image/6geracao.jpg'
import imageSetimaGeracao from './image/7geracao.jpg'
import imageOitavaGeracao from './image/8geracao.png'

function App() {

  const [generation, setGeneration] = useState(0) //0 == todos || 1 == 1°geracao  || 2 == 2°geracao || 3 == 3° geracao ....
  
  
  
  return (
    <div className="App">
      <Pokedex className='pokedex' generation={generation} setGeneration={setGeneration}/>
        <img src={imageAllPokemons} className={generation === 0 ? 'block' : null} />
        <img src={imagePrimeiraGeracao} className={generation === 1 ? 'block' : null} />
        <img src={imageSegundaGeracao} className={generation === 2 ? 'block' : null} />
        <img src={imageTerceiraGeracao} className={generation === 3 ? 'block' : null} />
        <img src={imageQuartaGeracao} className={generation === 4 ? 'block' : null} />
        <img src={imageQuintaGeracao} className={generation === 5 ? 'block' : null} />
        <img src={imageSextaGeracao} className={generation === 6 ? 'block' : null} />
        <img src={imageSetimaGeracao} className={generation === 7 ? 'block' : null} />
        <img src={imageOitavaGeracao} className={generation === 8 ? 'block' : null} />
    </div>
  )
}

export default App
