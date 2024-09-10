import React, { useEffect, useRef } from 'react';

export default function UseRefEx3() {
    let arr = ["red", "blue", "yellow", "orange"];
    const inputRef = useRef();
    const sec3 = useRef();

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 3000);

        if (sec3.current && sec3.current.value === "") {
            sec3.current.style.border = "1px solid blue";
        }
    }, []);

    const focusclick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <>
            <ul>
                {arr.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <input type="text" ref={sec3} />
            <button onClick={focusclick}>Click to focus</button>
            <h1>UseRefEx3</h1>
            <input type="text" ref={inputRef} />
        </>
    );
}
