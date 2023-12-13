import { useState,useEffect } from "react";

function ExampleOfUseEffect(){
    const[value, setValue] = useState(0);

    //1. Renders for the first time
    //2. Anytime we do side effect
    //3. UseEffect cannot be put inside if block
    //4. Dependency List
    useEffect(()=>{
        console.log("Hello World");
        document.title= `Increment(${value})`;

    },[value]);  // [] means only work on initial render, if [value]--> renders each time value changes

    return(
        <>
            <h1>Value: {value}</h1>
            <button onClick={()=>setValue(value+1)}>Click Me</button>
            </>
    );
}

export default ExampleOfUseEffect;