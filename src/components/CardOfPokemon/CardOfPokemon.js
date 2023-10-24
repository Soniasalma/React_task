import React, { useState } from 'react'
import './CardOfPokemon.css'
import { Link, useParams } from 'react-router-dom'
import{FaLongArrowAltLeft} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import { fetchApi } from "../../hooks/fetchApi"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { PokemonDetails } from '../PokemonDetails/PokemonDetails'
import { useDispatch, useSelector } from 'react-redux'
import { addToTeam } from '../../redux/teamReducer'

const arr=[]
const arr2=[]


const CardOfPokemon = () => {
  const navigate = useNavigate()
  const[pokeSelect,setPokeSelect]=useState(null)
  const[selectDetail,setSelectDetail]=useState(null)

  const [about,setAbout]=useState(false)
  const [base,setBase]=useState(false)
  const [evolution,setEvolution]=useState(false)
  const [moves,setMoves]=useState(false)

  const dispatch=useDispatch()

  const teamMembers=useSelector(state=>state.team.pokemons)
  console.log("teaaammmemberrrs")
   console.log(teamMembers)
   

  
  
  let params=useParams();
  console.log("     param   ")
  const id=params.id
  console.log(params.id)

  useEffect(() => {
   getData(id);
   

  }, []);

  function getData(id){

    
       fetchApi.get(`/pokemon/${id}`)
      
      .then(function(pokeData){
        setPokeSelect(pokeData.data)
         arr.push(pokeData.data)
        console.log("heeeereeeee")

      console.log(arr)
      })}

    
    const showAboutDetails=()=>{
        about ? setAbout(false):setAbout(true)
    }
    const showBaseDetails=()=>{
      base ? setBase(false):setBase(true)
  }
  const showEvolutionDetails=()=>{
    evolution ? setBase(false):setBase(true)
}
const showMovesDetails=()=>{
  moves ? setBase(false):setBase(true)
}
function getAbilities(id){
  const pok=arr[id].abilities
  for (const pokemon of pok) {
    arr2.push(pokemon)
    return arr2
  }
}
console.log("aaaarrrr222222")
console.log(arr2)


  return (
   <>
    {arr.map((item)=>{
    return(
      <SectionWrapper>
      <div className="card text-center card-pokemon">

    <div className="card-header">
      <ul className="nav  nav-items header-links">
        <li className="nav-item arrow-li">
          <a className="nav-link back-arrow"  href="#">
          <span className='nav-arrow-left' onClick={() => navigate("/")}><FaLongArrowAltLeft/></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <span className='nav-heart'><AiOutlineHeart/></span>
            </a>
        </li>
        
      </ul>
      
    </div>

    
    <div className=" pokemon-sec-up">
    <img className=" card-image" src={item.sprites.front_default}  alt="Card image cap"></img>
    <div>
      

    
     <div className='title-exp'>
     <h1 className="card-title">{item.name}</h1>
      <span className='poke-id'>{`#${item.id}`}</span>
     </div>

      <div className=" detail-add">
      <button className='team-btn' onClick={()=>{dispatch(addToTeam({
        id:item.id,
        name:item.name,
      image:item.sprites.front_default,
      }))
      alert("The Pokimon has added to the team")
      }}>Add to team</button>
      </div>
      </div>
      
    </div>
  
  <div className='set-of-links' >
  
    <div className='content-details'>
    <div class="nav  nav-items body-links ">
      
      <div class="nav-item active">
       
      <div> 
      <Link to="#about-id" className="nav-link" onClick= { showAboutDetails } >About</Link>
        </div>
        
        </div>
      <div class="nav-item">
      <Link to="#base-id" className="nav-link" onclick={showBaseDetails} >Base State</Link>
      </div>
      <div class="nav-item">
      <Link to="#evolution-id" className="nav-link" onclick={showEvolutionDetails} >Evolution</Link>
      </div>
      <div class="nav-item">
      <Link to="#moves-id" className="nav-link" onclick={showMovesDetails} >Moves</Link>
      </div>
    </div>
     

    </div>

    <div>
    <p id="about-id" className='about-list'>
        { about ? <PokemonDetails  height={item.height} weight={item.weight} classification={item.species} resistant={item.resistant} abilities={""} /> :"" } 
        
        </p>
        <p id="base-id" className='about-list'>
        { base ? <PokemonDetails click={"about"} height={item.height}/> :"" } 
        </p>
        <p id="evolution-id" className='about-list'>
        { evolution ? <PokemonDetails click={"about"} height={item.height}/> :"" } 
        </p>
        <p id="moves-id" className='about-list'>
        { moves ? <PokemonDetails click={"about"} height={item.height}/> :"" } 
        </p>

    </div>
    
    
  

      </div>

  </div>
      </SectionWrapper>
    )
   }
    
    )}
   </>
  )
}

export default CardOfPokemon