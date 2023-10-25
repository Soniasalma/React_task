import  './Team.css'
import{FaBars,FaTrash,FaRedoAlt} from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromTeam ,resetTeam} from '../../redux/teamReducer'
import{SectionWrapper} from '../../components/index'
import{Header} from '../../sections/index'
import { useRef } from 'react'
import { DragDropContext, Droppable , Draggable} from "@hello-pangea/dnd"
import { dragAndDropSave } from '../../redux/teamReducer'


const Team = () => {
   
  
  const dispatch=useDispatch()
    const pokemons=useSelector(state=>state.team.pokemons)
    const [characters, updateCharacters] = useState(pokemons);
    localStorage.setItem('todoList', pokemons);
    
    function handleOnDragEnd(result) {
      const {destination,source} = result;
      //console.log(result)
      if (!result.destination) return;
      const items = Array.from(characters);
const [reorderedItem] = items.splice(result.source.index, 1);
items.splice(destination.index, 0, reorderedItem);

updateCharacters(items);
dispatch(dragAndDropSave(items));


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
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
      {(provided) => (
      <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
      {characters.map((pokemon,index)=>
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