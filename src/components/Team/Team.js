import  './Team.css'
import{FaBars,FaTrash,FaRedoAlt} from 'react-icons/fa'

import { useCallback, useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromTeam ,resetTeam,updatePokemonsOrder} from '../../redux/teamReducer'
import{SectionWrapper} from '../../components/index'
import{Header} from '../../sections/index'
import { useRef } from 'react'
import { DragDropContext, Droppable , Draggable} from "@hello-pangea/dnd"




const Team = () => {
   
  
 
    
    
    const [isDragging,setIsDragging]=useState(false);
    const pokemons=useSelector(state=>state.team.pokemons)
    const [characters, updateCharacters] = useState(pokemons);
    const dispatch=useDispatch()

    const handleDragStart=()=>{
      setIsDragging(true);
    }

    const handleOnDragEnd=(result) =>{
      setIsDragging(false);
     const startIndex=result.source.index;
     const endIndex=result.destination.index;
     dispatch(updatePokemonsOrder({startIndex,endIndex}))

}
    console.log("Pokemooooonnnnnssssss")
    console.log(pokemons);

  return (
    <>
    
     <SectionWrapper>
      <Header/>
      {   <>
      <div className='team-page'>
        <div className='team-div'>
        <DragDropContext onDragStart={handleDragStart} onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="pokemons">
      {(provided) => (
      <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
      {pokemons.map((pokemon,index)=>
       ( 
        <Draggable key={pokemon.id} draggableId={pokemon.id.toString()} index={index}>
        {(provided) => (
          <li className='team-item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <img src={pokemon.image} className='team-item-image'></img>
          <span className='team-item-name'>{pokemon.name}</span>
          <button className='team-item-remove' onClick={
            ()=>dispatch(removeFromTeam({
                id:pokemon.id,
               
              }))}>Remove  </button>
        </li>
        )}
      </Draggable>
       
         
        )
     )}
   

 {provided.placeholder}
    </ul>
    
    )}
  </Droppable>

           
       </DragDropContext>
       <div className="div-btn">
 <button className='team-reset' onClick={
       ()=>dispatch(resetTeam({
           
         }))
     }>
 Eliminate the team</button>
 </div>
  
    
    </div>
    </div>
    
    
    </>
    }
    
</SectionWrapper>
    </>
)}

export default Team