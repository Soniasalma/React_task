

import React, { useEffect,useState } from 'react'
import axios from 'axios';

const Third = () => {
 const [result, setResult] = useState([]);
const [poke, setPoke] = useState([]);
const [url, setUrl] = useState();
const [load, setLoad] = useState('true');
const arr = [];

async function fetchKantoPokemon(){
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
   
   .then(function(allpokemon){
   allpokemon.data.results.forEach(function(pokemon){
     fetchPokemonData(pokemon); 
   })
  })
 }
 
 
 

 function fetchPokemonData(pokemon){
  let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    axios.get(url)
    
    .then(function(pokeData){
      arr.push(pokeData.data)
      setPoke(arr)
    console.log(arr.length)
    })
  }
  useEffect(()=>{fetchKantoPokemon()
  console.log(poke)
  },[])





 

  return (
     <div className="App">
<div className='pokegallery'>

{poke.map((img, i) => (

<div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9',color:"#27292a" }}>
<a href="/" className="navbar-brand">
              <img  src={img.sprites.front_default} alt='pokemon' />
            </a>

<div >
<h5 >{img.name}</h5>
{/*<h6>type: {img.types[0].type.name}</h6>*/}
 <div>{
                    img.types.map((tipo,index)=>{
                      return(
                        <h6>{tipo.type.name}</h6>
                      )
                    })
                    }</div>




</div>
</div>

))}

</div>
</div>
  )
}


export default Third