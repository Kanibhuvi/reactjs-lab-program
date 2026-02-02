import React, {useEffect,useState} from 'react'

function Program7() {
    const[user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUser(data))
    },[])
     return (
    <div>
        <h2>UserDetails</h2>
        <div>
            {user.map((details)=>(
            <div key={user.id}> 
            <p>Name:{details.name}</p>
            <p>Name:{details.email}</p>
            </div> 
            ))}
        </div>
    </div>
  )
}

export default Program7
// https://jsonplaceholder.typicode.com/users