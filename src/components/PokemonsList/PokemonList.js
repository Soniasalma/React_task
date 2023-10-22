import React  from 'react'
import './PokemonList.css'
import { fetchApi } from '../../hooks/fetchApi';
import { useEffect,useState } from "react"
import useFetch from '../../hooks/useFetch';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import SectionHeader from '../SectionHeader/SectionHeader';
import HeaderOfPokemon from '../HeaderOfPokemon/HeaderOfPokemon';


import { addToTeam } from '../../redux/teamReducer';
import { useDispatch } from 'react-redux';
import   {Header}  from '../../sections/index'
import CardOfPokemon from '../../components/CardOfPokemon/CardOfPokemon';
import { Link } from 'react-router-dom'


const PokemonList = () => {

  const [poke,setPoke]=useState([])
  const [showComponent, setShowComponent] = useState(false);
  const [pokeSelected,setPokeSelected]=useState()

 

  
 const [data]=useFetch("/pokemon?limit=10")
const dispatch=useDispatch()
 useEffect(()=>{
  data && setPoke(data)
   console.log(data)
  

},[data])


return (
    
  <SectionWrapper>
    <Header/>
    <SectionHeader>PokeDex</SectionHeader>
    
    <div className='pokemon-list-item'>
  {data &&
      data.map((item) => {
        return (
          <div  key={item.id}className='pokemon-card'>
          <div  className='pokemon-card-wrapper' >

<div className='pokemon-card-content' >
              <h5 >{item.name}</h5>
              <h5 >{item.id}</h5>
              <span>{`#${item.id}`}</span>
              </div>
              
            <div className='pokemon-card-image'>
            
              <img  variant="top" className='card-image' src={item.sprites.front_default} alt='pokemon'></img>
          
            </div>
            

   {
   item.types.map((tipo)=>{
    return(
    <h6 key={tipo.id}>{tipo.type.name}</h6>)})
    }
    <button className='team-btn' onClick={()=>dispatch(addToTeam({
      id:item.id,
      name:item.name,
      image:item.sprites.front_default,
    }))}>add to team</button>
   <div>
   <Link to={`/CardOfPokemon/${item.id}`} className="nav-link">
    <button>details</button>
   </Link>
      
    </div>

</div>

       </div> );
      })}
      
      </div>
  </SectionWrapper>
  
  
)
}

export default PokemonList