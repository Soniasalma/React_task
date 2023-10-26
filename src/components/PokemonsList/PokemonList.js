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
  let limit=10;

 
const {data,loading,err}=useFetch(`/pokemon?page=${currentPage}&limit=${limit}`)
const arr=[]


 useEffect(()=>{
  data && setPoke(data)
  setLoad(loading)
 
  
    
},[currentPage])
console .log("loading")
console .log(load)

useEffect(() => {
  const temp=Math.ceil(total/10)
  setPageCount(temp)
  console.log("ttteeeemmmmp")
  console.log(temp)
  
}, []);

{/*useEffect(() => {
  window.localStorage.setItem('data', data);
}, [data]);*/}
const handlePageClick=(data)=>{
  console.log("selected")
  const select=(data.selected+1)
  console.log("select")
  console.log(select)
  setCurrentPage(select)
}


return (
    
  <SectionWrapper>
    <Header/>
    <SectionHeader>PokeDex</SectionHeader>
    
    <div className='pokemon-list-item'>
  { loading ? "Loading . . . ":
      poke.map((item) => {
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
    
   <div clasName="card-btn">
   <Link to={`/CardOfPokemon/${item.id}`} className="primary-btn">
    <button>details</button>
   </Link>
      
    </div>

</div>

       </div> );
      })}
      
      </div>
     {/* <box sx={{display:"flex", justifyContent:"center",mt:1}}>
       {Array.from({length:totalPages},(_,i)=>i+1).map((page)=>{
        return<button onclick={()=>setCurrentPage(page)}>{page}</button>
       })}
      </box>*/}
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