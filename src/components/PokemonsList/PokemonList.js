import React  from 'react'
import './PokemonList.css'
import { useEffect,useState } from "react"
import useFetch from '../../hooks/useFetch';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import SectionHeader from '../SectionHeader/SectionHeader';
import   {Header}  from '../../sections/index'
import { Link } from 'react-router-dom'


const PokemonList = () => {

  const [poke,setPoke]=useState([])
  const [showComponent, setShowComponent] = useState(false);
  const [pokeSelected,setPokeSelected]=useState()

 
 const [data]=useFetch("/pokemon?limit=20")

 useEffect(()=>{
  data && setPoke(data)
   console.log(data)
},[data])

useEffect(() => {
  setPoke(window.localStorage.getItem('data'));
}, []);

useEffect(() => {
  window.localStorage.setItem('data', data);
}, [data]);


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
              <h5 className="pokemon-card-name" >{item.name}</h5>
              
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
    
   <div clasName="card-btn">
   <Link to={`/CardOfPokemon/${item.id}`} className="primary-btn">
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