import React, { useState } from 'react'

export default function ControlledCom() {
  const [name,setName]= useState('');
  const handleChange = (e) =>{
    console.log(e.target.value)
  }
    return (
    <>
        <h1>ControlleVom</h1>
        <input type="text" placeholder='enter name' onChange={(e)=> handleChange(e)} />
    </>
  )
}
