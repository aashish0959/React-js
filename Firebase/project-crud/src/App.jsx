// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Firebase/Signup'
import Signin from './Firebase/Signin'
import Dashboard from './Firebase/Dashboard'

export default function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Signup/>}></Route>
  <Route path='/signin' element={<Signin/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  </Routes>
  </BrowserRouter>      
  </>
)
}