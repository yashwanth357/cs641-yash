import React from "react";
import { useState } from "react";
import {View, Text ,Button } from "react-native";

interface FunctionalComponentProps
{
    initialValue: number
}
//const FunctionalComponent=({initialValue}) => 
const FunctionaA=(props: FunctionalComponentProps) => 
{
   // const [count,setCount] = useState(initialValue)
   const [count,setCount] = useState(props.initialValue)

    const increment = () => {
        setCount(count+1);
                
    }
    const decrement = () => {
        setCount(count - 1);
      };
    
    return(
        <div>
            
            <p>Count :{count}</p>
            <button onClick ={increment}>increase</button>
            <button onClick={decrement}>Decrease</button>

        </div>
    )
}
export default FunctionaA;