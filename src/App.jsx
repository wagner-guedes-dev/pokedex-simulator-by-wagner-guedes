
import './App.css'
import Pokedex from './components/Pokedex'

import imageAllPokemons from './image/8612.png'

function App() {


  return (
    <div className="App">
      <Pokedex className='pokedex'/>
       <img src={imageAllPokemons}/>
    </div>
  )
}

export default App
