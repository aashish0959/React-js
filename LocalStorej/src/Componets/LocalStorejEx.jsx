import React from 'react'

export default function LocalStorejEx() {
    localStorage.setItem("name","Subject");
    localStorage.setItem("name2","Subject2"); 

    let data= localStorage.getItem("name");
    console.log(data);

    localStorage.removeItem("")
    // localStorage.removeItem("name")

    let obj = { name: "Aashish", subject: "React" };
    localStorage.setItem("myobj", JSON.stringify(obj));

 
    let objData = JSON.parse(localStorage.getItem("myobj"));
    console.log(objData);

    // localStorage.setItem("name3","Subject3")
    // localStorage.setItem("name4","Subject4")

    // let data1 = localStorage.getItem("name3")
    // console.log(data1)

    // localStorage.removeItem("name3")

    // let obj2 = {name : "kartik",subject : "react"};
    // localStorage.setItem("myobj2",JSON.stringify(obj2));

    // let obj2Data = JSON.parse(localStorage.getItem("myobj2"));
    // console.log(obj2Data);



 


  return (
    <>
        LocalStorejEx
    </>
  )
}







