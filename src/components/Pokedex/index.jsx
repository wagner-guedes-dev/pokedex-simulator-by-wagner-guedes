import {React, useState, useEffect} from 'react'
import axios from 'axios'


import './pokedex.css'

//tipo dos pokemons
import { AiFillFire, AiFillBug } from 'react-icons/ai' 
import { FaRegDotCircle, FaDragon, FaGhost, FaWater } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import { GiElectric, GiFairyWand, GiPunch,GiFluffyWing, GiHighGrass, GiGroundbreaker, GiIceBolt, GiPoisonGas, GiPsychicWaves, GiFallingRocks,GiSteelClaws } from 'react-icons/gi'
const Pokedex = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [detailsPokemons, setDetailsPokemons] = useState()
  const [idPokemon, setIdPokemon] = useState(0)
  const [atributPokemonOne, setAtributPokemonOne] = useState('')
  const [atributPokemonTwo, setAtributPokemonTwo] = useState('')
  const [test, setTest] = useState([])
  const [nick, setNick] = useState()


  const tipoPokemons = {
    bug: false, 
    dark: false, 
    dragon: false, 
    electric: false, 
    fairy: false, 
    fighting: false,
    fire: false, 
    flying: false, 
    ghost: false, 
    grass: false, 
    ground: false,
    ice: false, 
    normal: false, 
    poison: false, 
    psychic: false, 
    rock: false, 
    steel: false, 
    water: false
}
  const [iconTipoPokemon, setIconTipoPokemon] = useState(tipoPokemons)
  

  
  

  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
    .then((res)=>{
      setAllPokemons(res.data.results)
      setTest(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
   
      axios.get(`https://pokeapi.co/api/v2/pokemon/${1 + idPokemon}`).then((res)=> {
        setDetailsPokemons(res.data.sprites.front_default)
        setAtributPokemonOne(res.data.types[0].type.name)
        setAtributPokemonTwo('') //para pokemons que so tem um atributo
        if(res.data.types.length === 2){
          setAtributPokemonTwo(res.data.types[1].type.name)
        }
        
        iconTipoPokemon.bug = false
        iconTipoPokemon.dark = false
        iconTipoPokemon.dragon = false
        iconTipoPokemon.electric = false
        iconTipoPokemon.fairy = false
        iconTipoPokemon.fighting = false
        iconTipoPokemon.fire = false
        iconTipoPokemon.flying = false
        iconTipoPokemon.ghost = false
        iconTipoPokemon.grass = false
        iconTipoPokemon.ground = false
        iconTipoPokemon.ice = false
        iconTipoPokemon.normal = false
        iconTipoPokemon.poison = false
        iconTipoPokemon.psychic = false
        iconTipoPokemon.rock = false
        iconTipoPokemon.steel = false
        iconTipoPokemon.water = false
        
        
        
        
        
        

      })
      

  },[idPokemon])

  iconTipoPokemon[atributPokemonOne] = true
  iconTipoPokemon[atributPokemonTwo] = true
        

  

  const viewPokemon = (key)=>{
    setIdPokemon(key)
  }

  // colocando icons na escrita do tipo dos pokemons
  
  


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
        <div className='tipoIcon'>
          {iconTipoPokemon.fire ? (<AiFillFire color='red' size={20}/>) : null} {/* fire */ } 
          {iconTipoPokemon.normal ? (<FaRegDotCircle color='#D3D3D3' size={20}/>) : null}{/* normal */ } 
          {iconTipoPokemon.bug ? (<AiFillBug color='#208B20' size={20}/>) : null}{/* bug */ } 
          {iconTipoPokemon.dark ? (<MdDarkMode color='#2F4F4F' size={20}/>) : null} {/* dark */ } 
          {iconTipoPokemon.dragon ? (<FaDragon color='#483D8B' size={20}/>) : null}{/* dragon */ } 
          {iconTipoPokemon.electric ? (<GiElectric color='#FFFF00' size={20}/>) : null} {/* electric */ } 
          {iconTipoPokemon.fairy ? (<GiFairyWand color='#D02090' size={20}/>) : null}{/* fairy */ } 
          {iconTipoPokemon.fighting ? (<GiPunch color='#8B4513' size={20}/>) : null} {/* fighting */ } 
          {iconTipoPokemon.flying ? (<GiFluffyWing color='#8470FF' size={20}/>) : null}{/* flying */ }    
          {iconTipoPokemon.ghost ? (<FaGhost color='#6A5ACD' size={20}/>) : null} {/* ghost */ } 
          {iconTipoPokemon.grass ? (<GiHighGrass color='#9ACD32' size={20}/>) : null}{/* grass */ } 
          {iconTipoPokemon.ground ? (<GiGroundbreaker color='#BDB76B' size={20}/>) : null} {/* ground */ } 
          {iconTipoPokemon.ice ? (<GiIceBolt color='#87CEEB' size={20}/>) : null}{/* ice */ } 
          {iconTipoPokemon.poison ? (<GiPoisonGas color='#6A5ACD' size={20}/>) : null} {/* poison */ } 
          {iconTipoPokemon.psychic ? (<GiPsychicWaves color='#DA70D6' size={20}/>) : null}{/* psychic */ } 
          {iconTipoPokemon.rock ? (<GiFallingRocks color='#556B2F' size={20}/>) : null} {/* rock */ } 
          {iconTipoPokemon.steel ? (<GiSteelClaws color='#708090' size={20}/>) : null}{/* steel */ }  
          {iconTipoPokemon.water ? (<FaWater color='#6495ED' size={20}/>) : null}{/* water */ }  
        </div>
        
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