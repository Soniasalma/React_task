import React, { useState } from 'react'
import './CardOfPokemon.css'
import { Link, useParams } from 'react-router-dom'
import{FaLongArrowAltLeft} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import { fetchApi } from "../../hooks/fetchApi"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {AboutDetails} from '../AboutDetails/AboutDetails'


import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { PokemonDetails } from '../PokemonDetails/PokemonDetails'

const arr=[]


const CardOfPokemon = () => {
  const navigate = useNavigate();
  const[pokeSelect,setPokeSelect]=useState(null)
  const[selectDetail,setSelectDetail]=useState(null)
  const [list,setList]=useState(false)

  
  
  let params=useParams();
  console.log("     param   ")
  const id=params.id
  console.log(params.id)

  useEffect(() => {
   getData(id);
   

  }, [id]);

  function getData(id){

    
       fetchApi.get(`/pokemon/${id}`)
      
      .then(function(pokeData){
        setPokeSelect(pokeData.data)
         arr.push(pokeData.data)
        console.log("heeeereeeee")

      console.log(arr)
      })}

      {/*const handleAbout=()=>{
       const details=arr.map(detail=><PokemonDetails height={detail.height}/>
          
        )
        setSelectDetail(details)

    }
    
    const aboutDetails=selectDetail
    console.log("Detaaaaiiils")
  console.log(aboutDetails)*/}
  
    const showTeamList=()=>{
        list ? setList(false):setList(true)
    }



  return (
   <>
    {arr.map((item)=>{
    return(
      <SectionWrapper>
      <div className="card text-center card-pokemon">
    <div className="card-header">
      <ul className="nav  nav-items">
        <li className="nav-item">
          <a className="nav-link "  href="#">
          <span className='nav-arrow-left' onClick={() => navigate(-1)}><FaLongArrowAltLeft/></span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <span className='nav-heart'><AiOutlineHeart/></span>
            </a>
        </li>
        
      </ul>
      
    </div>
    
    <div className="card-body pokemon-image">
    <img className="card-img-top card-image" src={item.sprites.front_default}  alt="Card image cap"></img>
    <div>

    
     <div className='title-exp'>
     <h1 className="card-title">{item.name}</h1>
      <span >{`#${item.id}`}</span>
     </div>

      <div className="detail-add">
      <a href="/#">Add to the team</a>
      </div>
      
    </div>
  </div>
  <div >
  
  
  
    <div className='content-details'>
    <div class="nav  nav-items ">
      <div class="nav-item active">
       
      <div>
        
        <a class = "nav-link" onClick= { showTeamList }> About </a></div>
       <div className='about-list'>{ list ? <PokemonDetails click={"about"} height={item.height}/> :"" } </div>
        
        
      </div>
      <div class="nav-item">
      <Link to="/" className="nav-link" >Base State</Link>
      </div>
      <div class="nav-item">
      <Link to="/" className="nav-link" >Evolution</Link>
      </div>
      <div class="nav-item">
      <Link to="/" className="nav-link" >Moves</Link>
      </div>
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