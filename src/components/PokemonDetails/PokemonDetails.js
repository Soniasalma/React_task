import React from 'react'
import './PokemonDetails.css'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
export const PokemonDetails = (props) => {
  return (
    <>
    
    <div className='about-list'>
    <ul className='detail-items'>
      <li><span>Classification  </span>{props.classification}</li>
      <li><span>Height  </span>{props.height}</li>
      <li><span>Weight  </span>{props.weight}</li>
      <li><span>Resistant  </span>{props.resistant}</li>
      <li><span>Weaknesses  </span>{props.weaknesses}</li>
    </ul>
    
    
    </div>
    
    </>
    
  )
}
