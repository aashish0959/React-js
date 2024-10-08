import React, { useState } from "react";


export default function Filter() {
    const [name, setName] = useState("");

const arr = [
    { name: "sachin", subject: "React" },
    { name: "dfgdfdgf", subject: "React" },
    { name: "fgfllfglkgmmbo", subject: "React" },
    { name: "tachifgfdn", subject: "React" },
    { name: "oachfdgbin", subject: "React" },
    { name: "habgdchin", subject: "React" }
  ];
  const data = arr.filter((item) => item.name.includes(name));
  return <>
  <h1>Fliter</h1>
  <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>

  {
    data && data.map((e,i) => {
        return <ul key={i}>
            <li>{e.name}</li>
            <li>{e.subject}</li>
        </ul>
    })
  }
  </>;
}
