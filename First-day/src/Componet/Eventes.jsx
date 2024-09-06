import React , { useState } from 'react'


export default function Eventes() {
    const[count,setCount]= useState(0)
    const[name,setName]= useState("")
    const[sub,setSub]= useState("")
    
    const hendleSubmit = (event) =>{
        event.preventDefault()
        console.log ("form submitted")
        let obj = {
            name: name ,
            sunject: sub
        }
        console.log(obj)
    }
  
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>Clik</button>
        <br />
        <form onSubmit={(event)=> hendleSubmit(event) }>
        <input type="text" placeholder='Enter the name' onChange={(e) => setName(e.target.value)} /> <br />
        <input type="text" placeholder='Enter the sub' onChange={(e) => setSub(e.target.value)} /> <br />
        <button type='submit'>Submit</button>

        </form>
       
    </div>
  )
}

