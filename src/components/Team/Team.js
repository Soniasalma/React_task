import  './Team.css'
import{FaBars,FaTrash,FaRedoAlt} from 'react-icons/fa'

import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromTeam ,resetTeam} from '../../redux/teamReducer'
import{SectionWrapper} from '../../components/index'
import{Header} from '../../sections/index'
import { useRef } from 'react'

const Team = () => {
  
    const pokemons=useSelector(state=>state.team.pokemons)
    const [list, setList] = useState([]);
    useEffect(()=>setList(pokemons),[pokemons])

    console.log("Pokemooooonnnnnssssss")
    console.log(pokemons);

    const dragItem = useRef();
    const dragOverItem = useRef();
    const dispatch=useDispatch()
    const dragStart = (e, position) => {
      dragItem.current = position;
    };
    const dragEnter = (e, position) => {
      dragOverItem.current = position;
      console.log(e.target.innerHTML);
    };
    const drop = (e) => {
      const copyListItems = [...list];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      setList(copyListItems);
    };
    
  return (
    <>
    
     <SectionWrapper>
     
      
      <Header/>
      {   <>
      <div className='the-first-div'>
          
          
        <div className='second-div'>
           <ul>
         {pokemons.map((pokemon ,index)=>
          ( 
          <div>
            <div  onDragStart={(e) => dragStart(e, index)}  onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} key={index} draggable><li className='team-item'>
            <img src={pokemon.image} className='team-item-image'></img>
            <span className='team-item-name'>{pokemon.name}</span>
            <button className='team-item-remove' onClick={
              ()=>dispatch(removeFromTeam({
                  id:pokemon.id,
                 
                }))}>Remove from the team </button>
          </li></div>
          </div> )
        )}
        <div className="div-btn">
    <button className='team-reset' onClick={
          ()=>dispatch(resetTeam({
              
            }))
        }>
    Eliminate the team</button>
    </div>

     
       </ul>

  
    
    </div>
    <div className='first-div'></div>
    </div>
    
    </>
    }
    
</SectionWrapper>
    </>
)}

export default Team