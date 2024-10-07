import React, { useState } from 'react'
import Home from './component/Home'
import Create from './component/Create'
import Update from './component/Update'
import Delete from './component/Delete'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  const [data,setData]=useState([
    {id:1,name:"John",age:25},
    {id:2,name:"Anna",age:30},
  ])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data}/>}></Route>
        <Route path='/Create' element={<Create data={data} setdata={setData}/>}></Route>
        <Route path='/Update' element={<Update data={data} setdata={setData}/>}></Route>
        <Route path='/Delete' element={<Delete data={data} setdata={setData}/>}></Route>
      </Routes>
    </BrowserRouter>
      
      
      
    </>
  )
}
