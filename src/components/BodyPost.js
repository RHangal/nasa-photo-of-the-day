import React from "react";

export default function BodyPost(props){
    const {Images} = props
    return (
        <div className='bodyPost--container' key={Images.date}>
        <div className="bodyPost--imgContainer">
            {!Images.hdurl ? <img className='bodyPost--img'src={`${Images.thumbnail_url}`} alt='video thumbnail'/> : <img className='bodyPost--img'src={`${Images.hdurl}`} alt="a celestial body NASA has captured and shared with the public randomly retrieved based on the count"/>}
        </div>
        <div className="bodyPost--articleContainer">
            <h2>{Images.title}</h2>
            <h3>{Images.date}</h3>
            <p>{Images.explanation}</p>
            {Images.copyright && <h6>Copyright: {Images.copyright}</h6>}
        </div>
        </div>  
    )
}