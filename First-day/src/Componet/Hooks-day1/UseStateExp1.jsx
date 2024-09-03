import React, { useState } from 'react';

export default function UseStateExp1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("aashish");
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
    const [obj, setObj] = useState({ name: "aashish", subject: "Full stack" });
    const [arrobj, setarrObj] = useState([{ name: "aashish", subject: "Full stack" },{name :"kartik" ,subject : "12th"}]);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <>
            <center>
                <p style={{ fontSize: "80px" }}>{count}</p>
                <button onClick={increase} style={{ padding: "10px 20px", fontSize: "20px", margin: "10px", cursor: "pointer", backgroundColor: "lightgreen", border: "none", borderRadius: "5px" }}>
                    Increase
                </button>
                <button onClick={decrease} style={{ padding: "10px 20px", fontSize: "20px", margin: "10px", cursor: "pointer", backgroundColor: "lightcoral", border: "none", borderRadius: "5px" }}>
                    Decrease
                </button>
                <p style={{ fontSize: "40px", marginTop: "20px" }}>{name}</p>

                {arr.map((e, i) => (
                    <p key={i}>{e}</p>
                ))}

                <p>{obj.name}</p>
                <p>{obj.subject}</p>

                {
                    arrobj.map((e,i)=>
                    <ul key={i}>
                        <li>Name: {e.name}</li>
                        <li>Subject: {e.subject}</li>
                    </ul>
                    )
                }
                
            </center>
        </>
    );
}
