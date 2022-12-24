import React from "react";

export default function Button(props){
 const{changeCount, text} = props
    return(
        <button onClick={changeCount}>{text}</button>
    )
}