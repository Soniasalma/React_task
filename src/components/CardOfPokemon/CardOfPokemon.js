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
import {BaseDetails, EvolutionDetails, MovesDetails} from'../../components/index'




let arr=[]
const arr2=[]
const CardOfPokemon = () => {
  
  const[pokeSelect,setPokeSelect]=useState(null)
 
  const[content,setContent]=useState(null)
  const[isClicked,setIsClicked]=useState(false)
  
  const dispatch=useDispatch()

  const teamMembers=useSelector(state=>state.team.pokemons)
  console.log("teaaammmemberrrs")
   console.log(teamMembers)
  
  
  let params=useParams();
  console.log("     param   ")
  const id=params.id
  console.log(params.id)

  useEffect(() => {
    arr=[]
   getData(id);
   
  }, [id]);
  

  function getData(id){

    
       fetchApi.get(`/pokemon/${id}`)
      
      .then(function(pokeData){
        setPokeSelect(pokeData.data)
         arr.push(pokeData.data)
        console.log("heeeereeeee")
        setContent(<PokemonDetails  height={arr[0].height} weight={arr[0].weight} abilities={arr[0].abilities} species={arr[0].species.name} />)

      console.log(arr)
      })}
      

      
      const handleButtonClick=()=>{
        setIsClicked(true);
        
          dispatch(addToTeam({
          id:pokeSelect.id,
          name:pokeSelect.name,
        image:pokeSelect.sprites.front_default,
        }))
        
      }
     
    const handleLinkClick1=(component)=>{
      
      document.getElementById("about-id").style.textDecoration="underLine"
      document.getElementById("base-id").style.textDecoration="none"
      document.getElementById("evolution-id").style.textDecoration="none"
      document.getElementById("moves-id").style.textDecoration="none"
      setContent(component)

     
      }
      const handleLinkClick2=(component)=>{
      document.getElementById("base-id").style.textDecoration="underLine"
      document.getElementById("about-id").style.textDecoration="none"
      document.getElementById("evolution-id").style.textDecoration="none"
      document.getElementById("moves-id").style.textDecoration="none"
      
        setContent(component)
       
        }
        const handleLinkClick3=(component)=>{
          document.getElementById("evolution-id").style.textDecoration="underLine"
          document.getElementById("base-id").style.textDecoration="none"
          document.getElementById("about-id").style.textDecoration="none"
          
          document.getElementById("moves-id").style.textDecoration="none"
       
          setContent(component)
    
         
          }
          const handleLinkClick4=(component)=>{
            document.getElementById("moves-id").style.textDecoration="underLine"
      document.getElementById("base-id").style.textDecoration="none"
      document.getElementById("about-id").style.textDecoration="none"
      document.getElementById("evolution-id").style.textDecoration="none"
      
       
            setContent(component)
      
           
            }
    

    
console.log("aaaarrrr222222")
console.log(arr2)


  return (
   <>
    {arr.map((item)=>{
    return(
      <SectionWrapper>
        <div className="card-wrapper">
      <div className="card text-center card-pokemon" >

    <div className="card-header">
      <ul className="nav  nav-items header-links">
        <li >
          <Link to="/" className='nav-arrow-left' ><FaLongArrowAltLeft/></Link>
        
        </li>
        <li >
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
      <button className='team-btn' disabled={isClicked} onClick={handleButtonClick}>Add to team</button>
      </div>
      </div>
      
    </div>
  
    <div className='set-of-links' >
  
  <div className='content-details'>
  <div class="nav  nav-items body-links ">
    
    <div className="nav-item ">
     
    <div> 
   
    <a id="about-id" style={{textDecoration:"underLine"}} className='active'  onClick={()=>handleLinkClick1(<PokemonDetails  height={item.height} weight={item.weight} types={[item.types]} species={item.species.name} />)}>About</a>
      </div>
      
      </div>
    <div class="nav-item">
      <a id="base-id"  onClick={()=>handleLinkClick2(<BaseDetails  hp={item.stats[0].base_stat} attack={item.stats[1].base_stat} defense={item.stats[2].base_stat}  speed={item.stats[5].base_stat}/>)}>Base Stats</a>
    
    </div>
    <div class="nav-item">
    <a id="evolution-id"  onClick={()=>handleLinkClick3(<EvolutionDetails  types={`#${item.id}`} />)}>Evolution</a>
    </div>
    <div class="nav-item">
    <a id="moves-id"  onClick={()=>handleLinkClick4(<MovesDetails    />)}>Moves</a>
    </div>
  </div>
   

  </div>

  <div>
    <div>{content}</div>
 {/* <p id="about-id" className='about-list'>
      { about && <PokemonDetails  height={item.height} weight={item.weight}  /> } 
      { base && <PokemonDetails  height={item.height}/>  } 
      
  </p>*/}
     

  </div>
  
  


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