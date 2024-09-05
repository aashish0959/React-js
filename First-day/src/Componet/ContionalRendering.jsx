import React, { useState } from 'react'

export default function ContionalRendering() {
  const[isVisible,setVisible] = useState(false)
    return (
    <div>
        {
            isVisible ? <h1> hyyy </h1> : <h1>Byyy</h1>
            // isVisible && <h1>Byyy</h1>
        }
        <button onClick={() => setVisible(!isVisible)}>click</button>



    </div>
  )
}
