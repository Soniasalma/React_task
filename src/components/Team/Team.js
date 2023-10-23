import  './Team.css'
import{FaBars,FaTrash,FaRedoAlt} from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromTeam ,resetTeam} from '../../redux/teamReducer'
import{SectionWrapper} from '../../components/index'
import{Header} from '../../sections/index'

const Team = () => {
    const arr=[]
    const [pokemonsTeam,setPokemonsTeam]=useState(null)
    
    
    const pokemons=useSelector(state=>state.team.pokemons)
    useEffect(()=>{
      setPokemonsTeam(pokemons)
      
      
      
    },[pokemons])

    console.log("Pokemooooonnnnnssssss")
    console.log(pokemonsTeam);
    
   
     
   
    const dispatch=useDispatch()
    
  return (
    <SectionWrapper>
    <Header/>
    {
    arr.length === 0 ?
         alert("There are no pokemons in the team")
        :  <ul>
         {arr.map((pokemon)=>{
          (
            <li className='team-item'>
            <img src={pokemon.image} alt='' className='team-item-image'/>
            <span className='team-item-name'>{pokemon.name}</span>
            
            <span className='team-item-remove' onClick={
              ()=>dispatch(removeFromTeam({
                  id:pokemon.id,
                 
                }))
            }><FaTrash/></span>

        </li>
          )
        })}
         <span className='team-reset' 
       onClick={
          ()=>dispatch(resetTeam({
              
            }))
        }>
       <FaRedoAlt/></span>
        </ul>

        
          
      }
 
            
    
    </SectionWrapper>
  )
}

export default Team