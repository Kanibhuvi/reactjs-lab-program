import React, {useState} from 'react'

function Counter() {
    const [count,Setcount]=useState(0)
    const incre=()=>{
        Setcountt(count+1)
    }
    const decre=()=>{
        Setcount(count-1)
    }
    const reset=()=>{
        Setcount(0)
    }
  return (
    <div>
        <h1>Counter-App</h1>
        <div>{count}</div>
        <button onclick={incre}>increment</button>
        <button onclick={decre}>decrement</button>
        <button onclick={reset}>reset</button>
    </div>
  )
}

export default Counter