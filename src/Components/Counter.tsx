import { useState } from "react";

//import React from "react"
export function Counter():JSX.Element{

   // let num:number = 0;
   const [num, setNum] = useState<number>(55);
    let name:string = "Aron"

    function increament(){
        //num++;
        setNum(num+1)
        //+alert(num);
    }
    return(
        <div>
            <p>my name is {name} </p>
            <button onClick={increament}>+</button>
            {num}
        </div>
    )
}