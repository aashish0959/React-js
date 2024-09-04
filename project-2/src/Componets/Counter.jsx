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
        <h1 className='pulser  cssanimation hu__hu__'>Counter</h1>
        <h2>{count}</h2>
        <div><button onClick={increment} className='button' > <a href="#"> Increment</a> </button>
        <button onClick={Decrement}  className='button'> <a href="#">Decrement</a> </button>
        <button onClick={reset}  className='button'><a href="#"> Reset</a> </button></div>
        
    </div>
    </>
  )
}
