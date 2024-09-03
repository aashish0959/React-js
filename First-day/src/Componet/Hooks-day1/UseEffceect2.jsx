import React , {useEffect, useState} from 'react'

export default function UseEffceect2() {
    const[count,setCount] = useState(0)
    // useEffect(()=>{
    //     console.log("use effect running")
    // })
    // useEffect(()=>{
    //     console.log("use effect running")
    // },[])
     useEffect(()=>{
         console.log("use effect running")
    },[count])
  return (
    <>
    <h1>UseEffect</h1>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)}>Add</button>
    </>
  )
}
