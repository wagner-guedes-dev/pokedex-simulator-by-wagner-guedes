import {React, useState, useEffect} from 'react'
import axios, { all } from 'axios'


import './pokedex.css'

//tipo dos pokemons
import { AiFillFire, AiFillBug } from 'react-icons/ai' 
import { FaRegDotCircle, FaDragon, FaGhost, FaWater } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import { GiElectric, GiFairyWand, GiPunch,GiFluffyWing, GiHighGrass, GiGroundbreaker, GiIceBolt, GiPoisonGas, GiPsychicWaves, GiFallingRocks,GiSteelClaws } from 'react-icons/gi'


const Pokedex = (props) => {

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
  const [idPokemon, setIdPokemon] = useState(null)
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
  const changeGen1 = ()=>{
    const geracaoOne = ()=>{
    
      for(let i = 151; i < 905; i++){
        delete oneGeracion[i]
      }
  
    }

    geracaoOne()
    props.setGeneration(1)
    setDetailsPokemons('')

    //nao exibir imagemn do pokemon
    setOcultarAtributo(false)

    //ocultar nick
    setNickPokemon('')
    setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
  }
  

  // Geração two
  const changeGen2 = ()=>{
    
  const geracaoTwo = ()=>{

  for(let i = 0; i < 151; i++){
    delete twoGeracion[i]
  }
  for(let i = 251; i < 905; i++){
    delete twoGeracion[i]
  }
}
        geracaoTwo()
        props.setGeneration(2)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
        setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
  }
  
    const changeGen3 = ()=>{

      // Geração three
    const geracaoThree = ()=>{
    
      for(let i = 0; i < 251; i++){
        delete threeGeracion[i]
      }
      for(let i = 386; i < 905; i++){
        delete threeGeracion[i]
      }

    }
    
      geracaoThree()
        props.setGeneration(3)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
        setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
    }
    

    // Geração four
    const changeGen4 = ()=>{

      const geracaoFour = ()=>{
    
        for(let i = 0; i < 386; i++){
          delete fourGeracion[i]
        }
        for(let i = 493; i < 905; i++){
          delete fourGeracion[i]
        }
        
      }
      geracaoFour()
      props.setGeneration(4)
      setDetailsPokemons('')

      //nao exibir imagemn do pokemon
      setOcultarAtributo(false)

      //ocultar nick
      setNickPokemon('')
      setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
    }
    

    // Geração five
    const changeGen5 = ()=>{

      const geracaoFive = ()=>{
    
        for(let i = 0; i < 493; i++){
          delete fiveGeracion[i]
        }
        for(let i = 649; i < 905; i++){
          delete fiveGeracion[i]
        }
  
      }
      geracaoFive()
        props.setGeneration(5)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
        setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
    }
    

    
    // Geração six
    const changeGen6 = ()=>{

      const geracaoSix = ()=>{
    
        for(let i = 0; i < 649; i++){
          delete sixGeracion[i]
        }
        for(let i = 721; i < 905; i++){
          delete sixGeracion[i]
        }
  
      }
      geracaoSix()
      props.setGeneration(6)
      setDetailsPokemons('')

      //nao exibir imagemn do pokemon
      setOcultarAtributo(false)

      //ocultar nick
      setNickPokemon('')
      setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
    }
    

    // Geração seven
    const changeGen7 = ()=>{
      const geracaoSeven = ()=>{
    
        for(let i = 0; i < 721; i++){
          delete sevenGeracion[i]
        }
        for(let i = 809; i < 905; i++){
          delete sevenGeracion[i]
        }
        
      }

      geracaoSeven()
        props.setGeneration(7)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
        setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
    }
    

    // Geração eight
    const changeGen8 = ()=>{

      const geracaoEight = ()=>{
        for(let i = 0; i < 809; i++){
          delete eightGeracion[i]
        }
        
      }
  
      geracaoEight()
        props.setGeneration(8)
        setDetailsPokemons('')

        //nao exibir imagemn do pokemon
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
        setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
    }
    



  const [nickPokemon, setNickPokemon] = useState('')
  
  
  
  
  const alteraGeracao = ()=>{
    
      changeGen1()
    
      changeGen2()
    
      changeGen3()
    
      changeGen4()
    
      changeGen5()
    
      changeGen6()
    
      changeGen7()
    
      changeGen8()

  
  }
 
  const [selectedTop, setSelectedTop] = useState(false)
  const [selectedDown, setSelectedDown] = useState(false)
  const [selectedLeft, setSelectedLeft] = useState(false)
  const [selectedRight, setSelectedRight] = useState(false)

  const [alert, setAlert] = useState(false)

  
  
 
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
        

        {detailsPokemons === '' ? <h4 className={alert ? 'vibrate-1' : null}>Selecione um pokemon!</h4> : <img className='animation-pokemon' src={detailsPokemons} /> }
        
        
        
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
      <div id="leftcross" className={selectedLeft ? 'button-selected': null}
        onClick={()=> {
          setSelectedLeft(true)
          alteraGeracao()
          if(props.generation === 0){
            props.setGeneration(8)
          }else{
            props.setGeneration(props.generation - 1) 
          }
          setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
          setTimeout(()=>{
            setSelectedLeft(false)
          },30)
        }}
        onMouseDown={()=>{setSelectedLeft(true)}}
         >
        <div id="leftT"></div>
      </div>
      <div id="topcross"
        className={selectedTop ? 'button-selected': null}
        onClick={()=>{
          setSelectedTop(true)
          if(idPokemon != null){
            if(idPokemon > 0){
              setIdPokemon(idPokemon - 1)
              setNickPokemon(allPokemons[idPokemon - 1].name)
            }
          }else{
            setAlert(true)
          }
          setTimeout(()=>{
            setSelectedTop(false)
          },30)
          setTimeout(()=>{
            setAlert(false)
          },100)
        }}
        onMouseDown={()=>{setSelectedTop(true)}}
        >
        <div id="upT"></div>
      </div>
      <div id="rightcross" 
      className={selectedRight ? 'button-selected': null}
     onClick={()=> {
      setSelectedRight(true)
      alteraGeracao()
        if(props.generation === 8){
          props.setGeneration(0)
        }else{
          props.setGeneration(props.generation + 1)
        }
        setIdPokemon( null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
        setTimeout(()=>{
          setSelectedRight(false)
        },30)
      }}
      onMouseDown={()=>{setSelectedRight(true)}}
       >
        <div id="rightT"></div>
      </div>
      <div id="midcross">
        <div id="midCircle"></div>
      </div>
      <div id="botcross"
      className={selectedDown ? 'button-selected': null}
      onClick={()=>{
        setSelectedDown(true)
        if(idPokemon != null){
          setIdPokemon(idPokemon + 1)
          setNickPokemon(allPokemons[idPokemon + 1].name)
        }else{
          setAlert(true)
        }
        setTimeout(()=>{
          setAlert(false)
        },100)
        setTimeout(()=>{
          setSelectedDown(false)
        },30)
      }}
      onMouseDown={()=>{setSelectedDown(true)}}
      
      >
        <div id="downT"></div>
      </div>
    </div>
  </div>
  <div id="right">
    
    <div id="stats" >
      <ul>
        {props.generation === 0 ? allPokemons.map((poke, key)=>{
          
          return(
            <li 
              className={idPokemon === key ? 'selected' : null}
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

        

        {props.generation === 1 ? oneGeracion.map((poke, key)=>{
          return(
            <li
              className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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
        
        {props.generation === 2 ? twoGeracion.map((poke, key)=>{
          return(
            <li
              className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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

        {props.generation === 3 ? threeGeracion.map((poke, key)=>{
          return(
            <li 
              className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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

        {props.generation === 4 ? fourGeracion.map((poke, key)=>{
          return(
            <li 
              className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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

        {props.generation === 5 ? fiveGeracion.map((poke, key)=>{
          return(
            <li 
              className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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

        {props.generation === 6 ? sixGeracion.map((poke, key)=>{
          return(
            <li 
              className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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

        {props.generation === 7 ? sevenGeracion.map((poke, key)=>{
          return(
            <li
              className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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

        {props.generation === 8 ? eightGeracion.map((poke, key)=>{
          return(
            <li
            className={idPokemon === key ? 'selected' : null}
              onClick={()=> {
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
    <div className='geracoes'>
      <div onClick={()=> {
        props.setGeneration(0)
        //nao exibir imagemn do pokemon
        setDetailsPokemons('')

        // nao exibir atributo
        setOcultarAtributo(false)

        //ocultar nick
        setNickPokemon('')
        setIdPokemon(null) //para Deselecionar o pokemon ja clicado anteriormente evitando bug
        }}>
        <button className={props.generation === 0 ? 'geracao-selected' : null}></button>
        <p>All pokes</p>
      </div>

      <div onClick={changeGen1} >
        <button className={props.generation === 1 ? 'geracao-selected' : null}></button>
        <p>1°Geração</p>
      </div>

      <div onClick={changeGen2}>
        <button className={props.generation === 2 ? 'geracao-selected' : null}></button>
        <p>2°Geração</p>
      </div>

      <div onClick={changeGen3}>
        <button className={props.generation === 3 ? 'geracao-selected' : null}></button>
        <p>3°Geração</p>
      </div>

      <div onClick={changeGen4}>
        <button className={props.generation === 4 ? 'geracao-selected' : null}></button>
        <p>4°Geração</p>
      </div>

      <div onClick={changeGen5}>
        <button className={props.generation === 5 ? 'geracao-selected' : null}></button>
        <p>5°Geração</p>
      </div>

      <div onClick={changeGen6}>
        <button className={props.generation === 6 ? 'geracao-selected' : null}></button>
        <p>6°Geração</p>
      </div>

      <div onClick={changeGen7}>
        <button className={props.generation === 7 ? 'geracao-selected' : null}></button>
        <p>7°Geração</p>
      </div>

      <div onClick={changeGen8}>
        <button className={props.generation === 8 ? 'geracao-selected' : null}></button>
        <p>8°Geração</p>
      </div>
    </div>
    <div id="bg_curve1_right"></div>
    <div id="bg_curve2_right"></div>
    <div id="curve1_right"></div>
    <div id="curve2_right"></div>
  </div>
</div>
  )
}

export default Pokedex