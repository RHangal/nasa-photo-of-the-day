import React from "react";
import BodyPost from "./BodyPost";
import Button from "./Button";

export default function Body(props) {
    const{countImages, count, increaseCount, decreaseCount, resetCount} = props
    console.log(countImages)
    const bodyPost = countImages.map(Images=> BodyPost(Images={Images}))
    const twoBodyPost = []
    for (let i=0;i<bodyPost.length; i+=2) {
        twoBodyPost.push(<div className="doubleBox" key={i}>{bodyPost[i]} {bodyPost[i+1]}</div>)
    }
    return(
        <section id="Body">
            <h2>APOD Gallery</h2>
           <h3> Image Count: {count} </h3>
           <h4>Click the buttons below to change the Count!<br/>(Max 12, Min 1)</h4>
           <div className="button--container">
               <Button changeCount = {increaseCount} text='Increase Count'/>
               <Button changeCount = {decreaseCount} text='Decrease Count'/>
               <Button changeCount = {resetCount} text='Reset Count'/>
           </div>
            <div id="bodyTitle">
            {twoBodyPost}
            </div>
        </section>
    )
}