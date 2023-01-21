import {React, useState, useEffect} from 'react'
import axios from 'axios'


import './pokedex.css'

const Pokedex = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [detailsPokemons, setDetailsPokemons] = useState()
  const [idPokemon, setIdPokemon] = useState(0)
  const [atributPokemonOne, setAtributPokemonOne] = useState('')
  const [atributPokemonTwo, setAtributPokemonTwo] = useState('')

  
  

  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905&offset=0')
    .then((res)=>{
      setAllPokemons(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
   
      axios.get(`https://pokeapi.co/api/v2/pokemon/${1 + idPokemon}`).then((res)=> {
        setDetailsPokemons(res.data.sprites.other.dream_world.front_default)
        setAtributPokemonOne(res.data.types[0].type.name)
        setAtributPokemonTwo('') //para pokemons que so tem um atributo
        setAtributPokemonTwo(res.data.types[1].type.name)
        
      })
      
  },[idPokemon])

  

  

  const viewPokemon = (key)=>{
    setIdPokemon(key)
  }

  


  return (
    <div id="pokedex">
  <div id="left">
    <div id="logo"></div>
    <div id="bg_curve1_left"></div>
    <div id="bg_curve2_left"></div>
    <div id="curve1_left">
      <div id="buttonGlass">
        <div id="reflect"> </div>
      </div>
      <div id="miniButtonGlass1"></div>
      <div id="miniButtonGlass2"></div>
      <div id="miniButtonGlass3"></div>
    </div>
    <div id="curve2_left">
      <div id="junction">
        <div id="junction1"></div>
        <div id="junction2"></div>
      </div>
    </div>
    <div id="screen">
      <div id="topPicture">
        <div id="buttontopPicture1"></div>
        <div id="buttontopPicture2"></div>
      </div>
      <div id="picture">
        <p>{atributPokemonOne}</p>
        <p>{atributPokemonTwo}</p>
        <img src={detailsPokemons}  height="150"/> 

      </div>
      <div id="speakers">
        <div className="sp"></div>
        <div className="sp"></div>
        <div className="sp"></div>
        <div className="sp"></div>
      </div>
    </div>
    <div id="bigbluebutton"></div>
    
    <div id="cross">
      <div id="leftcross">
        <div id="leftT"></div>
      </div>
      <div id="topcross">
        <div id="upT"></div>
      </div>
      <div id="rightcross">
        <div id="rightT"></div>
      </div>
      <div id="midcross">
        <div id="midCircle"></div>
      </div>
      <div id="botcross">
        <div id="downT"></div>
      </div>
    </div>
  </div>
  <div id="right">
    <div id="stats">
      <ul >

        {allPokemons.map((poke, key)=>{
          return(
            <li
             onClick={()=> {
              viewPokemon(key)
            }}  
             key={key}>
              {key+1} - {poke.name}
            </li>
          )
        })}

      </ul>
    </div>
    <div id="miniButtonGlass4"></div>
    <div id="miniButtonGlass5"></div>
    <div id="bg_curve1_right"></div>
    <div id="bg_curve2_right"></div>
    <div id="curve1_right"></div>
    <div id="curve2_right"></div>
  </div>
</div>
  )
}

export default Pokedex