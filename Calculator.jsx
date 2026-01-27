import React, {useState} from 'react'

function Calculator() {
  const [num1,setNum1]=useState("");
  const [num2,setNum2]=useState("");
  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
        <h1>Calculator</h1>
        <input
        placeholder='enter the first value'
        onChange={(e)=>setNum1(e.target.value)}
        />
        <input
        placeholder='enter the second value'
        onChange={(e)=>setNum2(e.target.value)}
        />
        <div style={{height:'100px',
        width:'200px',
        backgroundClor:"lightgrey",
        marginLeft:"100px",
        marginTop:"20px"}}>
          <p >Addition : {a+b}</p>
          <p >Subtraction : {a-b}</p>
          <p >Multiplication : {a*b}</p>
          <p >Division : {b==0 ? "can't divided by zero" : (a/b)}</p>
          

        </div>
    </div>
  )
}

export default Calculator