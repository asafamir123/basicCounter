import { useState } from "react";
import css from "./Counter.module.css"
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
        <div className={css.container}>
            <h1 className={css.title}>My Counter</h1>
            <p className={css.name}>my name is {name} </p>
            <button className={css.btn} onClick={increament}>+</button>
            <p className={css.num}>{num}</p>
        </div>
    )
}