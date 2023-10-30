import React from 'react'

const MovesDetails = (props) => {
  return (
    <section >
    
    
    <div className='moves-list'>
    <div>
       <table  style={{width:"30%"}} >
       <thead>
       </thead>
       <tbody>
         <tr>
         <th >Moves</th>
           <td>{props.moves.map((move)=><span>{move}</span>)}</td>
         </tr>
       </tbody>
     </table>
   </div>

    
    
    
    </div>
   
  
   
    </section>
    
  )
}

export default MovesDetails