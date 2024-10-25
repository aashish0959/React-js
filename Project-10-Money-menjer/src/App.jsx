import React from 'react'
import { Provider } from 'react-redux'
import Home from './component/Home'
import { store } from './redux/Store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Home/>
      </Provider>
      
    </>
  )
}
