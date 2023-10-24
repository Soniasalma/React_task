import React from 'react'
import './PokemonDetails.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
export const PokemonDetails = (props) => {
  return (
    <>
    
    <div className='about-list'>
    <ul className='detail-items'>
      <li>
        <h3>Classification  </h3>
        <span>{props.classification}</span>
      </li>
      <li>
        <h4>Height  </h4>
        <span>{props.height}</span>
      </li>
      <li>
        <h4>Weight  </h4>
        <span>{props.weight}</span>
        </li>
      <li>
        <h4>Resistant  </h4>
        <span>{props.resistant}</span>
        </li>
      <li>
        <h4>Abilities  </h4>
         
   <span></span>
    
    
    
        </li>
    </ul>

    
    
    
    </div>
    
    </>
    
  )
}
