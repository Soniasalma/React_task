import React from 'react'

const BaseDetails = (props) => {
  return (
    <div className='about-list'>
    <ul className='detail-items'>
      <li>
        <h3>  Hp  </h3>
        <span>{props.hp}</span>
      </li>
      <li>
        <h3>  Attack  </h3>
        <span>{props.attack}</span>
      </li>
      <li>
        <h3>  Defense  </h3>
        <span>{props.defense}</span>
      </li>
      <li>
        <h3>  Speed  </h3>
        <span>{props.speed}</span>
      </li>
      </ul>
      </div>
  )
}

export default BaseDetails