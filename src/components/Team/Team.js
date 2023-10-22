import  './Team.css'
import{FaBars,FaTrash,FaRedoAlt} from 'react-icons/fa'

import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromTeam ,resetTeam} from '../../redux/teamReducer'
const Team = () => {
    const arr=[]
    const [teamList,setTeamList]=useState(false)
    const showTeamList=()=>{
        teamList ? setTeamList(false):setTeamList(true)
    }
    
    const pokemons=useSelector(state=>state.team.pokemons)

    console.log("Pokemooooonnnnnssssss")
    console.log(pokemons.length)
    const dispatch=useDispatch()
    
  return (
    <div className='team'>
    <div className='team-icon' onClick={pokemons.length>0 && showTeamList}>
        <FaBars/>
        </div>
    <div className='team-badge'> {pokemons.length}</div>
    {
        teamList || pokemons.length >0
        ?(  
          <ul className='team-list'>
          {pokemons.map((pokemon)=>{(
        <li className='team-item'>
            <img src={pokemon.image} alt='' className='team-item-image'/>
            <span className='team-item-name'>{pokemon.name}</span>
            
            <span className='team-item-remove' onClick={
              ()=>dispatch(removeFromTeam({
                  id:pokemon.id,
                 
                }))
            }><FaTrash/></span>

        </li>
          )})}
 
       <span className='team-reset' 
       onClick={
          ()=>dispatch(resetTeam({
              
            }))
        }>
       <FaRedoAlt/></span>
</ul>
        )
        :alert("no hay team")
    }
    </div>
  )
}

export default Team