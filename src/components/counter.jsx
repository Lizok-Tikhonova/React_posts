import React from "react";
import { useState } from "react";

const Counter = function() {
    const[count, setCount] = useState(5);

    function inc(){
        if(count<=0){
            console.log("в минус нельзя уйти")
            setCount(count)
        }
        else{
            setCount(count-1)
        }
    }
    function dinc(){
        setCount(count+1)
    }
    
    return(
        <div>
            <p>{count}</p>
            <button onClick={inc}>-</button>
            <button onClick={dinc}>+</button>
        </div>
    )
}

export default Counter;