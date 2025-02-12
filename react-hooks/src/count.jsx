import { useState } from "react"

export default function Count(){

    const [count,setCount]=useState(0);

    const handleAdd=()=>{
   
        const newCount=count + 1;
        setCount(newCount);
    }
    const handleRemove=()=>{
        setCount(count-1);
    }

    const styleCount={
        border:'2px solid purple',
        borderRadius:'15px',
        margin:'10px',
        padding: '10px',
    }


    return(
        <div style={styleCount}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}