import React from 'react'

const BaseDetails = (props) => {
  return (<>
    <div className='about-list'>
      </div>
      <div>
       <table  style={{width:"30%"}}>
       <thead>
       </thead>
       <tbody>
         <tr>
           <th>Hp</th>
           <td>{props.hp}</td>
         </tr>
         <tr>
         <th>Attack</th>
           <td>{props.attack}</td>
         </tr>
         <tr>
         <th>Defence</th>
         <td>{props.defense}</td>
         </tr>
         <tr>
         <th>Speed</th>
          <td>{props.speed}</td>
         </tr>
        
       </tbody>
     </table>
   </div>
   </>
  )
}

export default BaseDetails