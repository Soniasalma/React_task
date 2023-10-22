

import React, { useEffect,useState } from 'react'
import axios from 'axios';
import'./Pokemons.css'
import { fetchApi } from '../../hooks/fetchApi';
import useFetch from '../../hooks/useFetch';

const Pokemons = () => {
const [poke, setPoke] = useState([]);

const[dataOf]=useFetch("/pokemon")

useEffect((()=>{
  
  setPoke(dataOf)
  console.log("Poke   "+ poke)
})

,[dataOf])

  return (
     
<div className='pokegallery'>





</div>


  )
}


export default Pokemons