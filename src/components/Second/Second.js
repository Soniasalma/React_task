import React, { useEffect,useState } from 'react'

const Second = () => {
  const  [counter,setCounter]=useState(0);
  const [users,setUsers]=useState([]);
  const[filteredUsers,setFilteredUsers]=useState([]);
  const[inputValue,setInputValue]=useState("")

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(res=>res.json())
       .then(data=>setUsers(data))
       return ()=>{return false}
    }, [])
    useEffect(()=>setFilteredUsers(users),[users])
    useEffect(()=>{
        const filter=users.filter(user=>user.name.toLowerCase().includes(inputValue))
        setFilteredUsers(filter)
    },[inputValue])

   {/*
      const handleChange=(e)=>{
        setInputValue(e.target.value)
      
    }
*/} 
  return (
    <>
    <input type="text" className='search' onInput={e=>setInputValue(e.target.value)}/>
    {filteredUsers.map(user=><h3 key={user.id}>{user.name}</h3>)}
   
    </>
    
  )
}

export default Second