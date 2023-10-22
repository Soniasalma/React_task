import { useEffect,useState } from "react"
import { fetchApi } from "./fetchApi"
import axios from 'axios';

const useFetch=(endPoint)=>{

    const[data,setData]=useState(null)
    const arr=[]
    

useEffect(()=>{
  const  fetchData = async ()=>{
         await fetchApi.get(endPoint)
        .then((res)=>{
            res.data.results.forEach(function(pokemon){
              fetchPokemonData(pokemon); 
            })
           })
           
       
    }

    
    fetchData()

},[endPoint])
function fetchPokemonData(pokemon){
    let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      axios.get(url)
      
      .then(function(pokeData){
        arr.push(pokeData.data)
        setData(arr)
        console.log("daaaataaa")
        console.log(data)
      console.log(arr.length)
      })}
return [data]

}
export default useFetch