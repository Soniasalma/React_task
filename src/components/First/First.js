import { useState } from "react"
import "./First.css"
const First = () => {
   const [posts,setPosts]=useState();
   const[postId,setPostId]=useState(1);

   const updateUp=()=>setPostId(prev=>prev+1);
   const updateDown=()=>setPostId(prev=>prev-1);

   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(res=>res.json())
   .then(data=>setPosts(data));
   
  
  return (
    <>
    <button onClick={updateUp}> + </button>
    <button onClick={updateDown}> - </button>
    <div>
       {posts?.map(post=>
        <>
        {
            post.id===postId
            ?(  <>
                 <h1>{post.id} : {post.title}</h1>
                <p>{post.body}</p>
            </>
            
            )
            :
            ("")
        }
        </>
       

       )}
        
            
           
    </div>
    
    </>
    

  )
}

export default First

{/*
import { useState } from "react"
import "./First.css"
const First = () => {
   const [Counter,setCounter]=useState(0);
  const updateUp=()=>setCounter(prev=>prev+1);
  const updateDown=()=>setCounter(prev=>prev-1);
  return (
    <>
    <div>{Counter}</div>
    <button onClick={updateUp}>ClickUp</button>
    <button onClick={updateDown}>ClickDown</button>
    </>
    

  )
}

export default First


*/}