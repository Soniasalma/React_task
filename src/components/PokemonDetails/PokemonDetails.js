import React from 'react'
import './PokemonDetails.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
export const PokemonDetails = (props) => {
   
  return (
    <section >
    
    
    <div className='about-list'>
    <div>
       <table  style={{width:"30%"}} >
       <thead>
       </thead>
       <tbody>
         <tr>
         <th >species</th>
           <td>{props.species}</td>
           
           
         </tr>
         <tr>
           <th>Height</th>
           <td>{(props.height / 10) + " m."}</td>
           
           
         </tr>
         <tr>
           <th>Weight</th>
           <td>{ Math.floor(props.weight / 10) + ".0 kg."}</td>
           
           
         </tr>
        
         
        
        
       </tbody>
     </table>
   </div>

    
    
    
    </div>
   
  
   
    </section>
    
  )
}
