import React from 'react'
import './PokemonDetails.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
export const PokemonDetails = (props) => {
  return (
    <section >
    
    
    <div className='about-list'>
    <ul className='detail-items'>
      <li>
        <h3>Species  </h3>
        <span>{props.species}</span>
      </li>
      <li>
        <h4>Height  </h4>
        <span>{props.height}</span>
      </li>
      <li>
        <h4>Weight  </h4>
        <span>{props.weight}</span>
        </li>
     
       
     
    </ul>

    
    
    
    </div>
   
  
   
    </section>
    
  )
}
