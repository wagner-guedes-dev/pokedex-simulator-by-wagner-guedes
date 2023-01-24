import {React, useState, useEffect} from 'react'
import axios, { all } from 'axios'


import './pokedex.css'

//tipo dos pokemons
import { AiFillFire, AiFillBug } from 'react-icons/ai' 
import { FaRegDotCircle, FaDragon, FaGhost, FaWater } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import { GiElectric, GiFairyWand, GiPunch,GiFluffyWing, GiHighGrass, GiGroundbreaker, GiIceBolt, GiPoisonGas, GiPsychicWaves, GiFallingRocks,GiSteelClaws } from 'react-icons/gi'


const Pokedex = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [oneGeracion, setOneGeracion] = useState([])
  const [twoGeracion, setTwoGeracion] = useState([])
  const [threeGeracion, setThreeGeracion] = useState([])
  const [fourGeracion, setFourGeracion] = useState([])
  const [fiveGeracion, setFiveGeracion] = useState([])
  const [sixGeracion, setSixGeracion] = useState([])
  const [sevenGeracion, setSevenGeracion] = useState([])
  const [eightGeracion, setEightGeracion] = useState([])
  
  const [detailsPokemons, setDetailsPokemons] = useState('')
  const [idPokemon, setIdPokemon] = useState(0)
  const [atributPokemonOne, setAtributPokemonOne] = useState('')
  const [atributPokemonTwo, setAtributPokemonTwo] = useState('')
  
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
  const [ocultarAtributo, setOcultarAtributo] = useState(false)

  
  
//todos os pokemons
  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setAllPokemons(res.data.results)   
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  //primeira geraçao de pokemons
  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setOneGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

   //segunda geraçao de pokemons
   useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setTwoGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  //terceira geraçao de pokemons
  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setThreeGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  //quarta geraçao de pokemons
  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setFourGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  //quinta geraçao de pokemons
  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setFiveGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

   //sexta geraçao de pokemons
   useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setSixGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  //setima geraçao de pokemons
  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setSevenGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  //oitava geraçao de pokemons
  useEffect(()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=905offset=0')
    .then((res)=>{
      setEightGeracion(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  },[])






  useEffect(()=>{
   
      axios.get(`https://pokeapi.co/api/v2/pokemon/${1 + idPokemon}`).then((res)=> {
        if(ocultarAtributo){
          setDetailsPokemons(res.data.sprites.front_default)

        }else{
          
          setDetailsPokemons('')
        }
        
        setAtributPokemonOne(res.data.types[0].type.name)
        setAtributPokemonTwo('') //para pokemons que so tem um atributo
        //se houver segundo atributo
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
      
      
  },[idPokemon, ocultarAtributo])
  



  iconTipoPokemon[atributPokemonOne] = true // usando variavel como seleção do objeto
  iconTipoPokemon[atributPokemonTwo] = true
 
  
  
  
        

  

  const viewPokemon = (key)=>{
    setIdPokemon(key)
  }

  
  //removendo pokemons da determinada geração
  // Geração One
  const geracaoOne = ()=>{
    
    for(let i = 151; i < 905; i++){
      delete oneGeracion[i]
    }

  }
  
  // Geração two
  const geracaoTwo = ()=>{
    
    for(let i = 0; i < 151; i++){
      delete twoGeracion[i]
    }
    for(let i = 251; i < 905; i++){
      delete twoGeracion[i]
    }
    
  }
  
    // Geração three
    const geracaoThree = ()=>{
    
      for(let i = 0; i < 251; i++){
        delete threeGeracion[i]
      }
      for(let i = 386; i < 905; i++){
        delete threeGeracion[i]
      }

    }

    // Geração four
    const geracaoFour = ()=>{
    
      for(let i = 0; i < 386; i++){
        delete fourGeracion[i]
      }
      for(let i = 493; i < 905; i++){
        delete fourGeracion[i]
      }
      
    }

    // Geração five
    const geracaoFive = ()=>{
    
      for(let i = 0; i < 493; i++){
        delete fiveGeracion[i]
      }
      for(let i = 649; i < 905; i++){
        delete fiveGeracion[i]
      }

    }

    
    // Geração six
    const geracaoSix = ()=>{
    
      for(let i = 0; i < 649; i++){
        delete sixGeracion[i]
      }
      for(let i = 721; i < 905; i++){
        delete sixGeracion[i]
      }

    }

    // Geração seven
    const geracaoSeven = ()=>{
    
      for(let i = 0; i < 721; i++){
        delete sevenGeracion[i]
      }
      for(let i = 809; i < 905; i++){
        delete sevenGeracion[i]
      }
      
    }

    // Geração eight
    const geracaoEight = ()=>{
    
      for(let i = 0; i < 809; i++){
        delete eightGeracion[i]
      }
      
    }




  const [nickPokemon, setNickPokemon] = useState('')

  
  
  const [generation, setGeneration] = useState(0) //0 == todos || 1 == 1°geracao  || 2 == 2°geracao || 3 == 3° geracao ....
  

  return (
    <div id="pokedex">

      <button onClick={()=> {
        setGeneration(0)
        //nao exibir imagemn do pokemon
        setDetailsPokemons('')

        // nao exibir atributo
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
        }}>todos</button>

      <button onClick={()=> {
        geracaoOne()
        setGeneration(1)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 1</button>

      <button onClick={()=> {
        geracaoTwo()
        setGeneration(2)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 2</button>

      <button onClick={()=> {
        geracaoThree()
        setGeneration(3)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 3</button>

      <button onClick={()=> {
        geracaoFour()
        setGeneration(4)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 4</button>

      <button onClick={()=> {
        geracaoFive()
        setGeneration(5)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 5</button>

      <button onClick={()=> {
        geracaoSix()
        setGeneration(6)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 6</button>

      <button onClick={()=> {
        geracaoSeven()
        setGeneration(7)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 7</button>

      <button onClick={()=> {
        geracaoEight()
        setGeneration(8)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
      }}>geracao 8</button>

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
        
        {ocultarAtributo ? <div className='tipoIcon'>
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
        </div> : null}
        

        {detailsPokemons === '' ? <h4>Selecione um pokemon!</h4> : <img src={detailsPokemons}/> }
        
        
        
        <p>{nickPokemon}</p>
       
        
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
        {generation === 0 ? allPokemons.map((poke, key)=>{
          return(
            <li
             onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}>
              {key+1} - {poke.name}
            </li>
          )
        }) : null}

        

        {generation === 1 ? oneGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }
        
        {generation === 2 ? twoGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }

        {generation === 3 ? threeGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }

        {generation === 4 ? fourGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }

        {generation === 5 ? fiveGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }

        {generation === 6 ? sixGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }

        {generation === 7 ? sevenGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }

        {generation === 8 ? eightGeracion.map((poke, key)=>{
          return(
            <li onClick={()=> {
              viewPokemon(key)
              setOcultarAtributo(true)
              setNickPokemon(poke.name)
            }}  
             key={key}
             >
              {key+1} - {poke.name}
            </li>
            
          )
        }) : null }



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