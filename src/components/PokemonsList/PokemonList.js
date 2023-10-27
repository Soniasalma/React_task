import React  from 'react'
import './PokemonList.css'
import { useEffect,useState } from "react"
import useFetch from '../../hooks/useFetch';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import SectionHeader from '../SectionHeader/SectionHeader';
import   {Header}  from '../../sections/index'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';


const PokemonList = () => {

  const [poke,setPoke]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [total, setTotal] = useState(100);
  const[load,setLoad]=useState()
   const [pokePerPage, setPokePerPage] = useState([]);
  let limit=10;

 
const {data,loading,err}=useFetch(`/pokemon?limit=${total}`)
let arr=[]

useEffect(() => {
  data && setPoke(data)
  setLoad(loading)
  const temp=Math.ceil(total/10)
  setPageCount(temp)
  const startIndex = (currentPage-1 ) * limit;
  const endIndex = startIndex + limit;
  arr = poke.slice(startIndex, endIndex);
  setPokePerPage(arr)
  console.log("currentItems")
  console.log(arr)
  console.log("ttteeeemmmmp")
  console.log(temp)
  
},[currentPage])

console .log("loading")
console .log(load)


const handlePageClick=(data)=>{
   const select=(data.selected+1)
   setCurrentPage(select)
  console.log("select")
  console.log(select)
  

  
}


return (
    
  <SectionWrapper>
    <Header/>
    <SectionHeader>PokeDex</SectionHeader>
    
    <div className='pokemon-list-item'>
  { loading ? "Loading . . . ":
      pokePerPage.map((item) => {
        return (
          <div  key={item.id}className=' pokemon-card'>
          <div  className='pokemon-card-wrapper ' style={{minHeight:225}} >

<div className='pokemon-card-content' >
              <h5 className="pokemon-card-name" >{item.name}</h5>
              
              <span>{`#${item.id}`}</span>
              </div>
              
            <div className='pokemon-card-image'>
            
              <img   className='card-image' src={item.sprites.front_default} alt='pokemon'></img>
          
            </div>
            

   {
   item.types.map((tipo)=>{
    return(
    <h6 key={tipo.id}>{tipo.type.name}</h6>)})
    }
    
   <div className="card-btn">
   <Link to={`/CardOfPokemon/${item.id}`} className="primary-btn">
    <button>details</button>
   </Link>
      
    </div>

</div>

       </div> );
      })}
      
      </div>
      <ReactPaginate 
      previousLabel={"previos"}
      nextLabel={"next"}
      breakLabel={". . ."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName='pagination justify-content-center'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      activeClassName='active'
      />
  </SectionWrapper>
  
  
)
}

export default PokemonList