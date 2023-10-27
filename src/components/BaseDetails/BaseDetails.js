import React from 'react'

const BaseDetails = (props) => {
  return (<>
    <div className='about-list'>
      </div>
      <div>
       <table class="table table-striped">
       <thead>
       </thead>
       <tbody>
         <tr>
           <td>Hp</td>
           <td>Attack</td>
           <td>Defence</td>
           <td>Speed</td>
         </tr>
         <tr>
           <td>{props.hp}</td>
           <td>{props.attack}</td>
           <td>{props.defense}</td>
           <td>{props.speed}</td>
         </tr>
        
       </tbody>
     </table>
   </div>
   </>
  )
}

export default BaseDetails