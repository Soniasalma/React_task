import React from 'react'

const EvolutionDetails = (props) => {
  return (
    <section >
    
    
    <div className='evolution-list'>
    <div>
       <table  style={{width:"30%"}} >
       <thead>
       </thead>
       <tbody>
         <tr>
         <th >Number</th>
           <td>{`#${props.number}`}</td>
           
           
         </tr>
         <tr>
           <th>Name</th>
           <td>{props.name}</td>
           
           
         </tr>
        
         <tr>
           <th>Types</th>
           <td>{props.types.map((tipo)=><span>{`${tipo}   `}</span>)}</td>
           
           
         </tr>
        
         
        
        
       </tbody>
     </table>
   </div>

    
    
    
    </div>
   
  
   
    </section>
    
  )
}

export default EvolutionDetails