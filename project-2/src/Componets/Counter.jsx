import React,{ useState}from 'react'

export default function Counter() {
    const[count,setCount] = useState(0);
    const increment = () =>{
        setCount (count + 1 );
    }
    const Decrement = () => {
        setCount (count - 1);
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <>
    <div className="container">
    <a href="#">Counter</a>
        
        <h2>{count}</h2>
        <div>
        <button  onClick={increment} class="glow-on-hover" type="button">Increment</button>
        <button  onClick={Decrement} class="glow-on-hover" type="button">Decrement</button>
        <button  onClick={reset} class="glow-on-hover" type="button">Reset</button>
       
        </div>
        
    </div>
    </>
  )
}
