import React from 'react'
import './PokemonDetails.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
export const PokemonDetails = (props) => {
  return (
    <section >
    
    
    <div className='about-list'>
    <div>
       <table class="table table-striped">
       <thead>
       </thead>
       <tbody>
         <tr>
           <td>Species</td>
           <td>Height</td>
           <td>Weight</td>
           
         </tr>
         <tr>
           <td>{props.species}</td>
           <td>{props.height}</td>
           <td>{props.weight}</td>
           
         </tr>
        
       </tbody>
     </table>
   </div>

    
    
    
    </div>
   
  
   
    </section>
    
  )
}
